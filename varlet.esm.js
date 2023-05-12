import { reactive as Ae, onMounted as ro, nextTick as Ne, onActivated as Mr, isRef as Ev, watch as oe, onBeforeUnmount as Ct, onDeactivated as er, unref as lt, inject as Iv, getCurrentInstance as et, computed as z, provide as Nv, isVNode as St, Comment as Dv, Fragment as Ve, ref as B, createApp as Av, h as cs, onBeforeMount as zv, onUnmounted as nt, defineComponent as Q, createVNode as Z, Teleport as La, Transition as Le, withDirectives as ke, vShow as $r, mergeProps as Ee, openBlock as p, createBlock as ye, resolveDynamicComponent as rt, normalizeClass as c, normalizeStyle as G, resolveComponent as ae, resolveDirective as Ie, withCtx as ve, createElementVNode as A, renderSlot as H, toDisplayString as ne, createElementBlock as O, renderList as Ue, createCommentVNode as x, onUpdated as kt, createTextVNode as Ce, pushScopeId as Ra, popScopeId as Ua, withModifiers as Pn, normalizeProps as $t, guardReactiveProps as ao, vModelText as Lv, toRefs as Rv, withKeys as Zi, toRaw as Ji, TransitionGroup as Uv } from "vue";
var ms = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, cS = Ae(ms);
const bn = Ae(ms), je = (e) => typeof e == "string", Mo = (e) => typeof e == "boolean", on = (e) => typeof e == "number", Ci = (e) => Object.prototype.toString.call(e) === "[object Object]", Fv = (e) => typeof e == "object" && e !== null, Tt = (e) => typeof e == "function", Te = (e) => Array.isArray(e), Hv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, fr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Si = (e) => e === window, R = (e) => e == null ? 0 : je(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Mo(e) ? Number(e) : e, Gt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, ki = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, Pt = () => typeof window < "u", Qi = (e) => [...new Set(e)], ps = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Yv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), jv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ut = (e) => Te(e) ? e : [e];
var _i = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), xi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Wv = (e) => {
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
      this.has(r) && Gt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Bo = (e) => e, el = (e) => Math.pow(e, 3), hs = (e) => e < 0.5 ? el(e * 2) / 2 : 1 - el((1 - e) * 2) / 2, to = (e, n) => e ?? n, gs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ia = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function On(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function nl(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Eo.apply(this, arguments);
}
function Na(e) {
  return window.getComputedStyle(e);
}
function pn(e) {
  if (Si(e)) {
    var n = e.innerWidth, r = e.innerHeight, a = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: n,
      bottom: r,
      width: n,
      height: r
    };
    return Eo({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function Gv(e) {
  var {
    left: n
  } = pn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function rl(e) {
  var {
    top: n
  } = pn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function ct(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function $i(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function qv(e) {
  var {
    top: n,
    bottom: r,
    left: a,
    right: t
  } = pn(e), {
    width: o,
    height: l
  } = pn(window), i = a <= o && t >= 0, s = n <= l && r >= 0;
  return i && s;
}
function So(e) {
  var {
    transform: n
  } = Na(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Tr(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = Na(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function Xv(e) {
  for (var n = [], r = e; !Si(r); )
    r = Tr(r), n.push(r);
  return n;
}
function ys(e, n) {
  if (je(e)) {
    var r = document.querySelector(e);
    return r || On(n, "target element cannot found"), r;
  }
  if (Fv(e))
    return e;
  On(n, 'type of prop "target" should be a selector or an element object');
}
function al() {
  var {
    width: e,
    height: n
  } = pn(window);
  return e > n ? {
    vMin: n,
    vMax: e
  } : {
    vMin: e,
    vMax: n
  };
}
var bs = (e) => je(e) && e.endsWith("rem"), Kv = (e) => je(e) && e.endsWith("px") || on(e), Zv = (e) => je(e) && e.endsWith("%"), ws = (e) => je(e) && e.endsWith("vw"), Cs = (e) => je(e) && e.endsWith("vh"), Ss = (e) => je(e) && e.endsWith("vmin"), ks = (e) => je(e) && e.endsWith("vmax"), Jv = (e) => je(e) && e.startsWith("calc("), Qv = (e) => je(e) && e.startsWith("var("), Ye = (e) => {
  if (on(e))
    return e;
  if (Kv(e))
    return +e.replace("px", "");
  var {
    width: n,
    height: r
  } = pn(window);
  if (ws(e))
    return +e.replace("vw", "") * n / 100;
  if (Cs(e))
    return +e.replace("vh", "") * r / 100;
  if (bs(e)) {
    var a = +e.replace("rem", ""), t = Na(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return Ss(e) ? al().vMin : ks(e) ? al().vMax : je(e) ? R(e) : 0;
}, ge = (e) => {
  if (e != null)
    return Zv(e) || ws(e) || Cs(e) || bs(e) || Jv(e) || Qv(e) || Ss(e) || ks(e) ? e : Ye(e) + "px";
}, an = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ge(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Sn(e) {
  var n = gs();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function tl(e) {
  var n = gs();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function oo(e) {
  Sn(() => {
    Sn(e);
  });
}
function Rn() {
  return new Promise((e) => {
    Sn(() => {
      Sn(e);
    });
  });
}
function _v() {
  return new Promise((e) => {
    Sn(e);
  });
}
function mt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = ct(e), s = $i(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), Sn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Sn(d);
  });
}
function $s(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Yv(a);
    return n[o] = t, n;
  }, {});
}
function xv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function qt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ln(e) {
  let n = !1;
  ro(() => {
    e(), Ne(() => {
      n = !0;
    });
  }), Mr(() => {
    n && e();
  });
}
function Jn(e, n, r, a = {}) {
  if (!Pt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Tt(m) ? m() : lt(m), u = (m) => {
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
  Ev(e) && (v = oe(() => e.value, (m, h) => {
    d(h), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return ln(() => {
    u(e);
  }), Ct(() => {
    d(e);
  }), er(() => {
    d(e);
  }), f;
}
function Ts(e, n, r) {
  if (!Pt())
    return;
  Jn(document, n, (t) => {
    const o = lt(e);
    o && !o.contains(t.target) && r(t);
  });
}
var ef = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function nf(e) {
  const n = et();
  return e in n.provides;
}
function sn(e) {
  if (!nf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Iv(e), { childInstances: r, collect: a, clear: t } = n, o = ef(n, ["childInstances", "collect", "clear"]), l = et();
  return {
    index: z(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      ro(() => {
        Ne().then(() => {
          a(l, u);
        });
      }), Ct(() => {
        Ne().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function rf(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      St(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function un(e) {
  const n = et(), r = Ae([]), a = [], t = z(() => r.length), o = () => {
    const u = rf(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Gt(r, u), Gt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Nv(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function ol(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function il(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ol(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ol(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
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
function Je(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function af(e) {
  var n = Av(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function at(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => cs(e, Io({}, n, r));
    }
  }, {
    unmount: t
  } = af(a);
  return {
    unmountInstance: t
  };
}
function Ps(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Dv) {
      if (r.type === Ve && Te(r.children)) {
        r.children.forEach((a) => {
          n.push(a);
        });
        return;
      }
      n.push(r);
    }
  }), n;
}
function Vn() {
  var e = B(""), n = /* @__PURE__ */ function() {
    var t = il(function* (o, l, i) {
      if (!Te(o) || !o.length)
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
    var t = il(function* (o, l, i, s, u) {
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
function tf(e) {
  Jn(() => window, "hashchange", e), Jn(() => window, "popstate", e);
}
function io() {
  var e = B(!1);
  return Mr(() => {
    e.value = !1;
  }), er(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function _(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Te(s)) {
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
  if (Te(e))
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
function gn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), "var-elevation--" + e);
}
function Os(e, n, r) {
  r === void 0 && (r = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = r, i = t ?? "onUpdate:" + n.toString(), s = () => e[n] != null ? e[n] : o;
  if (!a)
    return z({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : k(e[i], d);
      }
    });
  var u = B(s());
  return oe(() => e[n], () => {
    u.value = s();
  }), oe(() => u.value, (d) => {
    l ? l(i, d) : k(e[i], d);
  }), u;
}
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Xt.apply(this, arguments);
}
var {
  n: Vs
} = _("ripple"), ll = 250;
function of(e) {
  var {
    zIndex: n,
    position: r
  } = Na(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function lf(e, n) {
  var {
    top: r,
    left: a
  } = pn(e), {
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
function Ms(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker || !bn.enableRipple)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = lf(this, e), s = document.createElement("div");
      s.classList.add(Vs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), of(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function No() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Vs());
    if (r.length) {
      var a = r[r.length - 1], t = ll - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, ll);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Bs() {
  if (!(!xv() || !bn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function sf(e, n) {
  var r;
  e._ripple = Xt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: No.bind(e)
  }), e.addEventListener("touchstart", Ms, {
    passive: !0
  }), e.addEventListener("touchmove", Bs, {
    passive: !0
  }), e.addEventListener("dragstart", No, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function uf(e) {
  e.removeEventListener("touchstart", Ms), e.removeEventListener("touchmove", Bs), e.removeEventListener("dragstart", No), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function df(e, n) {
  var r, a, t, o, l = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = Xt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Es = {
  mounted: sf,
  unmounted: uf,
  updated: df,
  install(e) {
    e.directive("ripple", this);
  }
}, mS = Es;
const We = Es;
function vf(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Ot = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: vf
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
  safeArea: {
    type: Boolean,
    default: !1
  },
  safeAreaTop: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: String
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
function Is() {
  var e = Object.keys(bn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Bt(e) {
  bn.locks[e] = 1, Is();
}
function Et(e) {
  delete bn.locks[e], Is();
}
function lo(e, n) {
  var {
    uid: r
  } = et();
  n && oe(n, (a) => {
    a === !1 ? Et(r) : a === !0 && e() === !0 && Bt(r);
  }), oe(e, (a) => {
    n && n() === !1 || (a === !0 ? Bt(r) : Et(r));
  }), zv(() => {
    n && n() === !1 || e() === !0 && Bt(r);
  }), nt(() => {
    n && n() === !1 || e() === !0 && Et(r);
  }), Mr(() => {
    n && n() === !1 || e() === !0 && Bt(r);
  }), er(() => {
    n && n() === !1 || e() === !0 && Et(r);
  });
}
function Vt(e, n) {
  var r = B(bn.zIndex);
  return oe(e, (a) => {
    a && (bn.zIndex += n, r.value = bn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
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
function ff(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  n: En,
  classes: ko
} = _("popup");
const kn = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Ot,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Vt(() => e.show, 3), {
      disabled: o
    } = io(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    lo(() => e.show, () => e.lockScroll), oe(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), tf(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Z("div", {
        class: ko(En("overlay"), d),
        style: Do({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => Z("div", Ee({
      class: ko(En("content"), En("--" + e.position), [e.defaultStyle, En("--content-background-color")], [e.defaultStyle, En("$-elevation--3")], [e.safeArea, En("--safe-area")], [e.safeAreaTop, En("--safe-area-top")]),
      style: {
        zIndex: t.value
      }
    }, a), [k(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: h,
        position: g
      } = e;
      return Z(Le, {
        name: En("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(Z("div", {
          class: ko(En("$--box"), En()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), Z(Le, {
          name: h || En("$-pop-" + g)
        }, {
          default: () => [f && s()]
        })]), [[$r, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return Z(La, {
          to: d,
          disabled: o.value
        }, ff(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
kn.install = function(e) {
  e.component(kn.name, kn);
};
var pS = kn, Ns = {
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
  onClick: U()
};
function sl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cf(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        sl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        sl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: mf,
  classes: pf
} = _("icon");
function hf(e, n) {
  return p(), ye(
    rt(e.isURL(e.name) ? "img" : "i"),
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
var Ds = Q({
  name: "VarIcon",
  props: Ns,
  setup(e) {
    var n = B(""), r = B(!1), a = /* @__PURE__ */ function() {
      var t = cf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || R(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ne(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, R(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return oe(() => e.name, a, {
      immediate: !0
    }), {
      n: mf,
      classes: pf,
      nextName: n,
      animateInProgress: r,
      isURL: Hv,
      toNumber: R,
      toSizeUnit: ge
    };
  }
});
Ds.render = hf;
const Pe = Ds;
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
var hS = Pe;
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
var gf = Ao({
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
  onSelect: U(),
  "onUpdate:show": U()
}, Je(Ot, [
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
const Ti = {
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
}, As = {
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
function Pi() {
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
    e[o] = zo({}, e[o], l), a(o);
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
  packs: zs,
  pack: Ze,
  add: Oi,
  use: Vi,
  merge: Ls
} = Pi();
Oi("zh-CN", Ti);
Vi("zh-CN");
var gS = {
  zhCN: Ti,
  enUS: As,
  packs: zs,
  pack: Ze,
  add: Oi,
  use: Vi,
  merge: Ls,
  useLocale: Pi
};
const Lo = {
  zhCN: Ti,
  enUS: As,
  packs: zs,
  pack: Ze,
  add: Oi,
  use: Vi,
  merge: Ls,
  useLocale: Pi
};
var {
  n: yf,
  classes: bf
} = _("action-sheet"), wf = ["onClick"];
function Cf(e, n) {
  var r = ae("var-icon"), a = ae("var-popup"), t = Ie("ripple");
  return p(), ye(
    a,
    Ee({
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
    }),
    {
      default: ve(() => [A(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [H(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: c(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), H(e.$slots, "actions", {}, () => [(p(!0), O(
          Ve,
          null,
          Ue(e.actions, (o) => ke((p(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), ye(
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
            )) : x("v-if", !0), A(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ne(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            wf
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
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "safe-area", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var Rs = Q({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: kn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: gf,
  setup(e) {
    var n = B(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        k(l, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return oe(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: yf,
      classes: bf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ze,
      dt: to,
      handleSelect: r
    };
  }
});
Rs.render = Cf;
const cr = Rs;
function Ro() {
  return Ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ro.apply(this, arguments);
}
var ir, Mi = {};
function Sf(e) {
  return e === void 0 && (e = {}), Ro({}, Mi, e);
}
function Qn(e) {
  return Pt() ? new Promise((n) => {
    Qn.close();
    var r = Ae(Sf(e));
    r.teleport = "body", ir = r;
    var {
      unmountInstance: a
    } = at(cr, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), a(), ir === r && (ir = null);
      },
      onRouteChange: () => {
        a(), ir === r && (ir = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
Qn.setDefaultOptions = function(e) {
  Mi = e;
};
Qn.resetDefaultOptions = function() {
  Mi = {};
};
Qn.close = function() {
  if (ir != null) {
    var e = ir;
    ir = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
Qn.Component = cr;
cr.install = function(e) {
  e.component(cr.name, cr);
};
Qn.install = function(e) {
  e.component(cr.name, cr);
};
var yS = cr;
function kf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var $f = {
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
    validator: kf
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
  n: Tf,
  classes: Pf
} = _("app-bar");
function Of(e, n) {
  return p(), O(
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
        [H(e.$slots, "left"), e.titlePosition === "left" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [H(e.$slots, "default", {}, () => [Ce(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [H(e.$slots, "default", {}, () => [Ce(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0), A(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [H(e.$slots, "default", {}, () => [Ce(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), H(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), H(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var Us = Q({
  name: "VarAppBar",
  props: $f,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(), t = B(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = z(() => {
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
    return ln(o), kt(o), {
      n: Tf,
      classes: Pf,
      formatElevation: gn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Us.render = Of;
const Nr = Us;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var bS = Nr;
function ul(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function so(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ul(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ul(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
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
var Vf = "background-image", Mf = "lazy-loading", Bf = "lazy-error", dl = "lazy-attempt", Ef = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Fo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ka = [], Kt = [], Fs = Wv(100), qe = {
  loading: Fo,
  error: Fo,
  attempt: 3,
  throttleWait: 300,
  events: Ef
}, Bi = ki(Mt, qe.throttleWait);
function uo(e, n) {
  e._lazy.arg === Vf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function If(e) {
  e._lazy.loading && uo(e, e._lazy.loading), Mt();
}
function Nf(e) {
  e._lazy.error && uo(e, e._lazy.error), e._lazy.state = "error", Ii(e), Mt();
}
function Hs(e, n) {
  uo(e, n), e._lazy.state = "success", Ii(e), Mt();
}
function Df(e) {
  var n;
  Kt.includes(e) || (Kt.push(e), (n = qe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Bi, {
      passive: !0
    });
  }));
}
function Af() {
  Kt.forEach((e) => {
    var n;
    (n = qe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Bi);
    });
  }), Kt.length = 0;
}
function zf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Mf)) != null ? r : qe.loading,
    error: (a = e.getAttribute(Bf)) != null ? a : qe.error,
    attempt: e.getAttribute(dl) ? Number(e.getAttribute(dl)) : qe.attempt
  };
  e._lazy = Uo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), uo(e, Fo), k(qe.filter, e._lazy);
}
function Lf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Fs.add(n), Hs(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Nf(e) : Ys(e);
  });
}
function Ys(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Fs.has(n)) {
      Hs(e, n), e._lazy.attemptLock = !1;
      return;
    }
    If(e), Lf(e, n);
  }
}
function Ei(e) {
  return Ho.apply(this, arguments);
}
function Ho() {
  return Ho = so(function* (e) {
    yield Rn(), qv(e) && Ys(e);
  }), Ho.apply(this, arguments);
}
function Mt() {
  Ka.forEach((e) => Ei(e));
}
function Rf(e) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = so(function* (e) {
    !Ka.includes(e) && Ka.push(e), Xv(e).forEach(Df), yield Ei(e);
  }), Yo.apply(this, arguments);
}
function Ii(e) {
  Gt(Ka, e), Ka.length === 0 && Af();
}
function Uf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function js(e, n) {
  return jo.apply(this, arguments);
}
function jo() {
  return jo = so(function* (e, n) {
    zf(e, n), yield Rf(e);
  }), jo.apply(this, arguments);
}
function Ff(e, n) {
  return Wo.apply(this, arguments);
}
function Wo() {
  return Wo = so(function* (e, n) {
    if (!Uf(e, n)) {
      Ka.includes(e) && (yield Ei(e));
      return;
    }
    yield js(e, n);
  }), Wo.apply(this, arguments);
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
  qe.events = n ?? qe.events, qe.loading = r ?? qe.loading, qe.error = a ?? qe.error, qe.attempt = t ?? qe.attempt, qe.throttleWait = o ?? qe.throttleWait, qe.filter = l;
}
var Ws = {
  mounted: js,
  unmounted: Ii,
  updated: Ff,
  install(e, n) {
    Hf(n), Bi = ki(Mt, qe.throttleWait), e.directive("lazy", this);
  }
}, wS = Ws;
const pt = Ws;
function Yf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Gs = (e) => ["mini", "small", "normal", "large"].includes(e);
function qs(e) {
  return Gs(e) || on(e) || je(e);
}
var jf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: qs,
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
    validator: Yf,
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
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  n: Wf,
  classes: Gf
} = _("avatar"), qf = ["src", "lazy-loading", "lazy-error"], Xf = ["src"];
function Kf(e, n) {
  var r = Ie("lazy");
  return p(), O(
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
    [e.src ? (p(), O(
      Ve,
      {
        key: 0
      },
      [e.lazy ? ke((p(), O(
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
        qf
      )), [[r, e.src]]) : (p(), O(
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
        Xf
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), O(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: G({
          transform: "scale(" + e.scale + ")"
        })
      },
      [H(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Xs = Q({
  name: "VarAvatar",
  directives: {
    Lazy: pt
  },
  props: jf,
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
    }, l = (s) => {
      k(e.onError, s);
    }, i = (s) => {
      k(e.onClick, s);
    };
    return ln(t), kt(t), {
      internalSizeValidator: Gs,
      sizeValidator: qs,
      toSizeUnit: ge,
      n: Wf,
      classes: Gf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Xs.render = Kf;
const Dr = Xs;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var CS = Dr, Zf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Jf,
  classes: Qf
} = _("avatar-group");
function _f(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: G(e.rootStyles)
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ks = Q({
  name: "VarAvatarGroup",
  props: Zf,
  setup(e) {
    var n = z(() => e.offset == null ? {} : {
      "--avatar-group-offset": ge(e.offset)
    });
    return {
      n: Jf,
      classes: Qf,
      toSizeUnit: ge,
      rootStyles: n
    };
  }
});
Ks.render = _f;
const Ar = Ks;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var SS = Ar;
function xf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function ec(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ur = {
  type: {
    type: String,
    default: "circle",
    validator: xf
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: ec
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
  n: nc,
  classes: rc
} = _("loading"), ac = (e) => (Ra(""), e = e(), Ua(), e), tc = /* @__PURE__ */ ac(() => /* @__PURE__ */ A(
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
)), oc = [tc];
function ic(e, n) {
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
      [H(e.$slots, "default"), e.loading ? (p(), O(
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
    )) : x("v-if", !0), e.isShow ? (p(), O(
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
            style: G({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          oc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (p(!0), O(
        Ve,
        null,
        Ue(e.loadingTypeDict, (r, a) => (p(), O(
          Ve,
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
              Ve,
              null,
              Ue(r, (t) => (p(), O(
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
          )) : x("v-if", !0)],
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
          style: G({
            color: e.color
          })
        },
        [H(e.$slots, "description", {}, () => [Ce(
          ne(e.description),
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
var Zs = Q({
  name: "VarLoading",
  props: ur,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = z(() => k(r.default) ? e.loading : !0);
    return {
      n: nc,
      classes: rc,
      multiplySizeUnit: an,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Zs.render = ic;
const Dn = Zs;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
var kS = Dn, lc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: sc,
  classes: uc
} = _("hover-overlay");
function dc(e, n) {
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
var Js = Q({
  name: "VarHoverOverlay",
  props: lc,
  setup() {
    return {
      n: sc,
      classes: uc
    };
  }
});
Js.render = dc;
const mn = Js;
mn.install = function(e) {
  e.component(mn.name, mn);
};
function Pr() {
  var e = B(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var $S = mn;
function Qs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function vc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[ps(t)] = o, r;
  }, {}) : {};
}
function fc(e) {
  var {
    value: n
  } = e._hover, r = vc(e);
  Object.keys(n).forEach((a) => {
    var t = ps(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Ni(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function cc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function _s(e) {
  cc(e), Ni(e, e._hover.rawStyle);
}
function xs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Tt(e)) {
    e(this._hover.hovering);
    return;
  }
  Ni(this, e);
}
function eu() {
  if (this._hover.hovering = !1, Tt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  _s(this);
}
function nu(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Qs(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, fc(e), e.addEventListener("mouseenter", xs), e.addEventListener("mouseleave", eu));
}
function ru(e, n) {
  Qs(n.arg) || (_s(e), e.removeEventListener("mouseenter", xs), e.removeEventListener("mouseleave", eu));
}
function mc(e, n) {
  e._hover && ru(e, n);
}
function pc(e, n) {
  return !Tt(n.value) && e._hover.hovering;
}
function hc(e, n) {
  nu(e, n), pc(e, n) && Ni(e, n.value);
}
var au = {
  mounted: nu,
  unmounted: ru,
  beforeUpdate: mc,
  updated: hc,
  install(e) {
    e.directive("hover", this);
  }
}, TS = au;
const Un = au;
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
function tu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function gc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function yc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var bc = {
  type: {
    type: String,
    validator: tu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: yc
  },
  size: {
    type: String,
    validator: gc
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
  loadingType: Je(ur, "type"),
  loadingSize: Je(ur, "size"),
  loadingColor: Go({}, Je(ur, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, ou = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function wc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(ou);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function Cc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(ou);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Sc,
  classes: kc
} = _("button"), $c = ["type", "disabled"];
function Tc(e, n) {
  var r = ae("var-loading"), a = ae("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return ke((p(), O(
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
    [e.loading || e.pending ? (p(), ye(
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
    )) : x("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [H(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    $c
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var iu = Q({
  name: "VarButton",
  components: {
    VarLoading: Dn,
    VarHoverOverlay: mn
  },
  directives: {
    Ripple: We,
    Hover: Un
  },
  props: bc,
  setup(e) {
    var n = B(!1), {
      buttonGroup: r
    } = Cc(), {
      hovering: a,
      handleHovering: t
    } = Pr(), o = z(() => {
      if (!r)
        return {
          elevation: gn(e.elevation, 2),
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
      e.autoLoading && (n.value = !0, u = Te(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || n.value || l(k(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || l(k(f, u));
    };
    return {
      n: Sc,
      classes: kc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
iu.render = Tc;
const en = iu;
en.install = function(e) {
  e.component(en.name, en);
};
var PS = en, Pc = {
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
  onClick: U()
}, {
  n: Oc,
  classes: Vc
} = _("back-top");
function Mc(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return p(), ye(
    La,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Ee({
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
      [H(e.$slots, "default", {}, () => [Z(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ve(() => [Z(r, {
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
var lu = Q({
  name: "VarBackTop",
  components: {
    VarButton: en,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Pc,
  setup(e) {
    var n = B(!1), r = B(null), a = B(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = $i(t);
      mt(t, {
        left: v,
        duration: e.duration,
        animation: hs
      });
    }, l = ki(() => {
      n.value = ct(t) >= Ye(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ys(e.target, "BackTop") : Tr(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return ro(() => {
      i(), s(), a.value = !1;
    }), Mr(s), Ct(u), er(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ge,
      n: Oc,
      classes: Vc,
      handleClick: o
    };
  }
});
lu.render = Mc;
const zr = lu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var OS = zr;
function Bc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ec(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Ic = {
  type: {
    type: String,
    default: "default",
    validator: Bc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Ec
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
  n: Nc,
  classes: Dc
} = _("badge");
function Ac(e, n) {
  var r = ae("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [H(e.$slots, "default"), Z(
      Le,
      {
        name: e.n("$-badge-fade"),
        persisted: ""
      },
      {
        default: ve(() => [ke(A(
          "span",
          Ee({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (p(), ye(
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
          )) : x("v-if", !0), H(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), O(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ne(e.value),
            3
            /* TEXT, CLASS */
          )) : x("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[$r, !e.hidden]])]),
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
var su = Q({
  name: "VarBadge",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Ic,
  setup(e) {
    var n = z(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && R(r) > R(a) ? a + "+" : r;
    });
    return {
      n: Nc,
      classes: Dc,
      value: n
    };
  }
});
su.render = Ac;
const mr = su;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var VS = mr, zc = {
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
  onChange: U(),
  "onUpdate:active": U(),
  onBeforeChange: U(),
  onFabClick: U(),
  fabProps: {
    type: Object
  }
}, uu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Lc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(uu);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
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
var {
  n: Rc,
  classes: Uc
} = _("bottom-navigation"), {
  n: vo
} = _("bottom-navigation-item"), vl = vo("--right-half-space"), fl = vo("--left-half-space"), cl = vo("--right-space"), Fc = {
  type: "primary"
};
function Hc(e, n) {
  var r = ae("var-button");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [H(e.$slots, "default"), e.$slots.fab ? (p(), ye(
      r,
      Ee({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ve(() => [H(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var du = Q({
  name: "VarBottomNavigation",
  components: {
    VarButton: en
  },
  props: zc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(null), t = z(() => e.active), o = z(() => e.activeColor), l = z(() => e.inactiveColor), i = B({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Lc(), v = () => {
      s.value === 0 || f() || m() || h();
    }, f = () => u.find((b) => {
      var {
        name: M
      } = b;
      return t.value === M.value;
    }), m = () => u.find((b) => {
      var {
        index: M
      } = b;
      return t.value === M.value;
    }), h = () => {
      on(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, g = (b) => {
      t.value !== b && (e.onBeforeChange ? y(b) : w(b));
    }, y = (b) => {
      var M = Ut(k(e.onBeforeChange, b));
      Promise.all(M).then((D) => {
        D.every(Boolean) && w(b);
      });
    }, w = (b) => {
      k(e["onUpdate:active"], b), k(e.onChange, b);
    }, V = () => {
      var b = E();
      b.forEach((M) => {
        M.classList.remove(vl, fl, cl);
      });
    }, S = (b) => {
      var M = E(), D = M.length, C = b % 2 === 0;
      M.forEach(($, L) => {
        T(C, $, L, D);
      });
    }, T = (b, M, D, C) => {
      var $ = D === C - 1;
      if (!b && $) {
        M.classList.add(cl);
        return;
      }
      var L = D === C / 2 - 1, K = D === C / 2;
      L ? M.classList.add(vl) : K && M.classList.add(fl);
    }, E = () => Array.from(a.value.querySelectorAll("." + vo())), P = () => {
      k(e.onFabClick);
    }, I = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: g
    };
    return d(I), oe(() => s.value, v), oe(() => e.fabProps, (b) => {
      i.value = qo({}, Fc, b);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && S(s.value);
    }), kt(() => {
      V(), r.fab && S(s.value);
    }), {
      n: Rc,
      classes: Uc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: P,
      fabProps: i
    };
  }
});
du.render = Hc;
const Lr = du;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var MS = Lr, Yc = {
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
  onClick: U()
};
function jc() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(uu);
  return r || On("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: Wc,
  classes: Gc
} = _("bottom-navigation-item"), qc = {
  type: "danger",
  dot: !0
};
function Xc(e, n) {
  var r = ae("var-icon"), a = ae("var-badge"), t = Ie("ripple");
  return ke((p(), O(
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
    [e.icon && !e.$slots.icon ? (p(), ye(
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
    )) : x("v-if", !0), H(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), ye(
      a,
      Ee({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : x("v-if", !0), A(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (p(), O(
        Ve,
        {
          key: 0
        },
        [Ce(
          ne(e.label),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      )), H(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var vu = Q({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: mr,
    VarIcon: Pe
  },
  directives: {
    Ripple: We
  },
  props: Yc,
  setup(e) {
    var n = z(() => e.name), r = z(() => e.badge), a = B({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = jc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, h = (m = n.value) != null ? m : t.value;
      k(e.onClick, h), k(o.onToggle, h);
    };
    return l(d), oe(() => r.value, (m) => {
      a.value = m === !0 ? qc : r.value;
    }, {
      immediate: !0
    }), {
      n: Wc,
      classes: Gc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
vu.render = Xc;
const Rr = vu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var BS = Rr, Kc = {
  separator: {
    type: String
  },
  onClick: U()
}, fu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Zc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(fu);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Jc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(fu);
  return n || On("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Qc,
  classes: _c
} = _("breadcrumb");
function xc(e, n) {
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
      [H(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : H(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [A(
        "div",
        {
          class: c(e.n("separator"))
        },
        ne((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var cu = Q({
  name: "VarBreadcrumb",
  props: Kc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Jc(), t = z(() => n.value === r.length.value - 1), o = z(() => r.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: Qc,
      classes: _c,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
cu.render = xc;
const Ur = cu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var ES = Ur, em = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: nm
} = _("breadcrumbs");
function rm(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var mu = Q({
  name: "VarBreadcrumbs",
  props: em,
  setup(e) {
    var n = z(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Zc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: nm
    };
  }
});
mu.render = rm;
const Fr = mu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var IS = Fr;
function am(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function tm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function om(e) {
  return ["normal", "text", "outline"].includes(e);
}
var im = {
  type: {
    type: String,
    default: "default",
    validator: am
  },
  size: {
    type: String,
    default: "normal",
    validator: tm
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
    validator: om
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
  n: lm,
  classes: sm
} = _("button-group");
function um(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var pu = Q({
  name: "VarButtonGroup",
  props: im,
  setup(e) {
    var {
      bindButtons: n
    } = wc(), r = {
      elevation: z(() => e.elevation),
      type: z(() => e.type),
      size: z(() => e.size),
      color: z(() => e.color),
      textColor: z(() => e.textColor),
      mode: z(() => e.mode)
    };
    return n(r), {
      n: lm,
      classes: sm,
      formatElevation: gn
    };
  }
});
pu.render = um;
const Hr = pu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var NS = Hr;
function dm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var vm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: dm,
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
  onClick: U(),
  "onUpdate:floating": U()
};
function ml(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function pl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ml(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ml(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: fm,
  classes: cm
} = _("card"), mm = 500, pm = ["src", "alt"];
function hm(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = Ie("ripple");
  return ke((p(), O(
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
      [H(e.$slots, "image", {}, () => [e.src ? (p(), O(
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
        pm
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [H(e.$slots, "title", {}, () => [e.title ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), H(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [H(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), O(
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
          [H(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), O(
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
        [H(e.$slots, "close-button", {}, () => [Z(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Pn(e.close, ["stop"])
          },
          {
            default: ve(() => [Z(
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
      )) : x("v-if", !0)],
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
var hu = Q({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Pe,
    VarButton: en
  },
  props: vm,
  setup(e) {
    var n = B(null), r = B(null), a = B("auto"), t = B("auto"), o = B("100%"), l = B("100%"), i = B("auto"), s = B("auto"), u = B(void 0), d = B("hidden"), v = B("0px"), f = B("0"), m = z(() => e.layout === "row"), h = B(!1), g = B(!1), {
      zIndex: y
    } = Vt(() => e.floating, 1);
    lo(() => e.floating, () => !m.value);
    var w = "auto", V = "auto", S = null, T = B(null), E = /* @__PURE__ */ function() {
      var M = pl(function* () {
        clearTimeout(T.value), clearTimeout(S), T.value = null, T.value = setTimeout(/* @__PURE__ */ pl(function* () {
          var {
            width: D,
            height: C,
            left: $,
            top: L
          } = pn(n.value);
          a.value = ge(D), t.value = ge(C), o.value = a.value, l.value = t.value, i.value = ge(L), s.value = ge($), u.value = "fixed", w = i.value, V = s.value, h.value = !0, yield Rn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", g.value = !0;
        }), e.ripple ? mm : 0);
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), P = () => {
      clearTimeout(S), clearTimeout(T.value), T.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = V, v.value = "0px", f.value = "0", h.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", V = "auto", d.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }, I = () => {
      k(e["onUpdate:floating"], !1);
    }, b = (M) => {
      k(e.onClick, M);
    };
    return oe(() => e.floating, (M) => {
      m.value || Ne(() => {
        M ? E() : P();
      });
    }, {
      immediate: !0
    }), {
      n: fm,
      classes: cm,
      toSizeUnit: ge,
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
      zIndex: y,
      isRow: m,
      close: I,
      showFloatingButtons: h,
      floated: g,
      formatElevation: gn,
      handleClick: b
    };
  }
});
hu.render = hm;
const Yr = hu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var DS = Yr, gm = {
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
  onClick: U()
}, {
  n: ym,
  classes: bm
} = _("cell");
function wm(e, n) {
  var r = ae("var-icon"), a = Ie("ripple");
  return ke((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [H(e.$slots, "icon", {}, () => [e.icon ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [Z(
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
    )) : x("v-if", !0)]), A(
      "div",
      {
        class: c(e.n("content"))
      },
      [H(e.$slots, "default", {}, () => [e.title ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ne(e.description),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [H(e.$slots, "extra")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var gu = Q({
  name: "VarCell",
  components: {
    VarIcon: Pe
  },
  directives: {
    Ripple: We
  },
  props: gm,
  setup(e) {
    var n = z(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ge(e.borderOffset),
      "--cell-border-right": ge(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: ym,
      classes: bm,
      toSizeUnit: ge,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
gu.render = wm;
const pr = gu;
pr.install = function(e) {
  e.component(pr.name, pr);
};
var AS = pr, Cm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Sm
} = _("form-details"), km = {
  key: 0
}, $m = {
  key: 0
};
function Tm(e, n) {
  return p(), ye(
    Le,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), O(
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
          [Z(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), O(
                "div",
                km,
                ne(e.errorMessage),
                1
                /* TEXT */
              )) : x("v-if", !0)]),
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
          [Z(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (p(), O(
                "div",
                $m,
                ne(e.extraMessage),
                1
                /* TEXT */
              )) : x("v-if", !0)]),
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
      )) : x("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var yu = Q({
  name: "VarFormDetails",
  props: Cm,
  setup: () => ({
    n: Sm
  })
});
yu.render = Tm;
const _e = yu;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var zS = _e, Pm = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, bu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Om() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(bu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Vm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(bu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var wu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(wu), a = et(), t = r ? (o) => {
    r(Xo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function Mm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(wu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Bm,
  classes: Em
} = _("checkbox");
function Im(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("hover"), l = Ie("ripple");
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
      [ke((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? H(e.$slots, "checked-icon", {
          key: 0
        }, () => [Z(
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
        )]) : H(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Z(
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
        )]), Z(
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
        [H(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Z(
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
var Cu = Q({
  name: "VarCheckbox",
  directives: {
    Ripple: We,
    Hover: Un
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  props: Pm,
  setup(e) {
    var n = B(!1), r = z(() => n.value === e.checkedValue), a = z(() => e.checkedValue), t = B(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Vm(), {
      hovering: i,
      handleHovering: s
    } = Pr(), {
      form: u,
      bindForm: d
    } = Mn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: h
    } = Vn(), g = (b) => {
      Ne(() => {
        var {
          validateTrigger: M,
          rules: D,
          modelValue: C
        } = e;
        f(M, b, D, C);
      });
    }, y = (b) => {
      n.value = b;
      var {
        checkedValue: M,
        onChange: D
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(D, n.value), g("onChange"), b === M ? o == null || o.onChecked(M) : o == null || o.onUnchecked(M);
    }, w = (b) => {
      var {
        disabled: M,
        readonly: D,
        checkedValue: C,
        uncheckedValue: $,
        onClick: L
      } = e;
      if (!(u != null && u.disabled.value || M) && (k(L, b), !(u != null && u.readonly.value || D))) {
        t.value = !0;
        var K = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && K || y(r.value ? $ : C);
      }
    }, V = (b) => {
      var {
        checkedValue: M,
        uncheckedValue: D
      } = e;
      n.value = b.includes(M) ? M : D;
    }, S = () => {
      t.value = !1;
    }, T = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), h();
    }, E = (b) => {
      var {
        checkedValue: M,
        uncheckedValue: D
      } = e, C = ![M, D].includes(b);
      C && (b = r.value ? D : M), y(b);
    }, P = () => m(e.rules, e.modelValue);
    oe(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var I = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: P,
      resetValidation: h,
      reset: T,
      resetWithAnimation: S
    };
    return k(l, I), k(d, I), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Bm,
      classes: Em,
      handleClick: w,
      toggle: E,
      reset: T,
      validate: P,
      resetValidation: h
    };
  }
});
Cu.render = Im;
const hr = Cu;
hr.install = function(e) {
  e.component(hr.name, hr);
};
var LS = hr;
function Nm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Dm = {
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
    validator: Nm
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Am,
  classes: zm
} = _("checkbox-group");
function Lm(e, n) {
  var r = ae("var-form-details");
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
      [H(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
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
var Su = Q({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: _e
  },
  props: Dm,
  setup(e) {
    var n = z(() => e.max), r = z(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Om(), {
      bindForm: l
    } = Mn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Vn(), v = z(() => i.value), f = (I) => {
      Ne(() => {
        var {
          validateTrigger: b,
          rules: M,
          modelValue: D
        } = e;
        s(b, I, M, D);
      });
    }, m = (I) => {
      k(e["onUpdate:modelValue"], I), k(e.onChange, I), f("onChange");
    }, h = (I) => {
      var {
        modelValue: b
      } = e;
      b.includes(I) || m([...b, I]);
    }, g = (I) => {
      var {
        modelValue: b
      } = e;
      b.includes(I) && m(b.filter((M) => M !== I));
    }, y = () => t.forEach((I) => {
      var {
        sync: b
      } = I;
      return b(e.modelValue);
    }), w = () => {
      t.forEach((I) => I.resetWithAnimation());
    }, V = () => {
      var I = t.map((M) => {
        var {
          checkedValue: D
        } = M;
        return D.value;
      }), b = Qi(I);
      return w(), k(e["onUpdate:modelValue"], b), b;
    }, S = () => {
      var I = t.filter((M) => {
        var {
          checked: D
        } = M;
        return !D.value;
      }).map((M) => {
        var {
          checkedValue: D
        } = M;
        return D.value;
      }), b = Qi(I);
      return w(), k(e["onUpdate:modelValue"], b), b;
    }, T = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    oe(() => e.modelValue, y, {
      deep: !0
    }), oe(() => a.value, y);
    var P = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: g,
      validate: E,
      resetValidation: d,
      reset: T,
      errorMessage: v
    };
    return o(P), k(l, P), {
      errorMessage: i,
      n: Am,
      classes: zm,
      checkAll: V,
      inverseAll: S,
      reset: T,
      validate: E,
      resetValidation: d
    };
  }
});
Su.render = Lm;
const jr = Su;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var RS = jr;
function Rm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Um(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Fm = {
  type: {
    type: String,
    default: "default",
    validator: Rm
  },
  size: {
    type: String,
    default: "normal",
    validator: Um
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(Ns, "name"),
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
  onClose: U()
}, {
  n: nr,
  classes: Hm
} = _("chip");
function Ym(e, n) {
  var r = ae("var-icon");
  return p(), ye(
    Le,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [H(e.$slots, "left"), A(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [H(e.$slots, "default")],
          2
          /* CLASS */
        ), H(e.$slots, "right"), e.closable ? (p(), O(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [Z(
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
        )) : x("v-if", !0)],
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
var ku = Q({
  name: "VarChip",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Fm,
  setup(e) {
    var n = z(() => {
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
    }), r = z(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = nr(o ? "$--flex" : "$--inline-flex"), d = i ? nr("plain") + " " + nr("plain-" + l) : nr("--" + l), v = s ? nr("--round") : null;
      return [nr("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: nr,
      classes: Hm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
ku.render = Ym;
const gr = ku;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var US = gr;
function jm(e) {
  return ["row", "column"].includes(e);
}
function Wm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Gm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var qm = {
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
    validator: jm
  },
  justify: {
    type: String,
    validator: Wm
  },
  align: {
    type: String,
    validator: Gm
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
  onClick: U()
}, $u = Symbol("ROW_BIND_COL_KEY");
function Xm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un($u);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Km() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn($u);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: It,
  classes: Zm
} = _("col");
function Jm(e, n) {
  return p(), O(
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
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Tu = Q({
  name: "VarCol",
  props: qm,
  setup(e) {
    var n = B({
      left: 0,
      right: 0
    }), r = z(() => R(e.span)), a = z(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = Km(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Ci(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(It("--span-" + u + "-" + m)), f && v.push(It("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(It("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return oe([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: It,
      classes: Zm,
      padding: n,
      toNumber: R,
      toSizeUnit: ge,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: qt
    };
  }
});
Tu.render = Jm;
const Wr = Tu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var FS = Wr, Pu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Qm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(Pu);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var _m = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: xm
} = _("collapse");
function ep(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ou = Q({
  name: "VarCollapse",
  props: _m,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Qm(), t = z(() => e.modelValue), o = z(() => e.offset), l = z(() => e.divider), i = z(() => e.elevation), s = () => !e.accordion && !Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (g, y) => s() ? y ? e.accordion ? g : [...e.modelValue, g] : e.accordion ? null : e.modelValue.filter((w) => w !== g) : null, d = (g, y) => {
      var w = u(g, y);
      k(e["onUpdate:modelValue"], w), k(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return r.find((y) => {
          var {
            name: w
          } = y;
          return e.modelValue === w.value;
        });
      var g = r.filter((y) => {
        var {
          name: w
        } = y;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return g.length ? g : void 0;
    }, f = () => e.accordion ? r.find((g) => {
      var {
        index: y,
        name: w
      } = g;
      return w.value === void 0 && e.modelValue === y.value;
    }) : r.filter((g) => {
      var {
        index: y,
        name: w
      } = g;
      return w.value === void 0 && e.modelValue.includes(y.value);
    }), m = () => {
      if (s()) {
        var g = v() || f();
        if (e.accordion && !g || !e.accordion && !g.length) {
          r.forEach((y) => {
            y.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((y) => {
          var w = e.accordion ? g === y : g.includes(y);
          y.init(e.accordion, w);
        });
      }
    }, h = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(h), oe(() => n.value, () => Ne().then(m)), oe(() => e.modelValue, () => Ne().then(m)), {
      n: xm,
      divider: l
    };
  }
});
Ou.render = ep;
const Gr = Ou;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var HS = Gr;
function np() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Pu);
  return r || On("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var rp = {
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
  n: ap,
  classes: tp
} = _("collapse-item");
function op(e, n) {
  var r = ae("var-icon");
  return p(), O(
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
        [H(e.$slots, "title", {}, () => [Ce(
          ne(e.title),
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
        [H(e.$slots, "icon", {}, () => [Z(
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
    ), ke(A(
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
        [H(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[$r, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Vu = Q({
  name: "VarCollapseItem",
  components: {
    VarIcon: Pe
  },
  props: rp,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = np(), t = !0, o = B(null), l = B(!1), i = B(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = z(() => e.name), h = (E, P) => {
      s.value === void 0 || E && Te(s.value) || P === i.value || (i.value = P, g(!0));
    }, g = (E) => {
      e.disabled || E || f(e.name || n.value, !i.value);
    }, y = () => {
      o.value && (o.value.style.height = "", l.value = !0, Sn(() => {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = "0px", Sn(() => {
          o.value.style.height = E + "px", t && oo(() => {
            t && S();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, V = () => {
      if (o.value) {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = E + "px", Sn(() => {
          o.value.style.height = "0px";
        });
      }
    }, S = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, T = {
      index: n,
      name: m,
      init: h
    };
    return a(T), oe(i, (E) => {
      E ? y() : V();
    }), {
      n: ap,
      start: w,
      classes: tp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: g,
      contentEl: o,
      transitionend: S,
      formatElevation: gn
    };
  }
});
Vu.render = op;
const qr = Vu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var YS = qr, ip = {
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
  n: lp
} = _("countdown"), Ko = 1e3, Zo = 60 * Ko, Jo = 60 * Zo, hl = 24 * Jo;
function sp(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [H(e.$slots, "default", $t(ao(e.timeData)), () => [Ce(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Mu = Q({
  name: "VarCountdown",
  props: ip,
  setup(e) {
    var n = B(""), r = B({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (h, g) => {
      var y = Object.values(g), w = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (w.forEach((T, E) => {
        h.includes(T) ? h = h.replace(T, Ia("" + y[E], 2, "0")) : y[E + 1] += y[E] * V[E];
      }), h.includes("S")) {
        var S = Ia("" + y[y.length - 1], 3, "0");
        h.includes("SSS") ? h = h.replace("SSS", S) : h.includes("SS") ? h = h.replace("SS", S.slice(0, 2)) : h = h.replace("S", S.slice(0, 1));
      }
      return h;
    }, u = (h) => {
      var g = Math.floor(h / hl), y = Math.floor(h % hl / Jo), w = Math.floor(h % Jo / Zo), V = Math.floor(h % Zo / Ko), S = Math.floor(h % Ko), T = {
        days: g,
        hours: y,
        minutes: w,
        seconds: V,
        milliseconds: S
      };
      r.value = T, k(e.onChange, r.value), n.value = s(e.format, T);
    }, d = () => {
      var {
        time: h,
        onEnd: g
      } = e, y = performance.now();
      if (a || (a = y + R(h)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        k(g);
        return;
      }
      t && (o = Sn(d));
    }, v = function(h) {
      h === void 0 && (h = !1), !(t && !h) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, tl(o);
    }, m = () => {
      a = 0, t = !1, tl(o), d();
    };
    return oe(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Mr(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), er(() => {
      i = t, f();
    }), nt(f), {
      showTime: n,
      timeData: r,
      n: lp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Mu.render = sp;
const Xr = Mu;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var jS = Xr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ya = 9e15, Br = 1e9, Qo = "0123456789abcdef", Zt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Jt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", _o = {
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
  minE: -Ya,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ya,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Bu, Yn, he = !0, fo = "[DecimalError] ", Or = fo + "Invalid argument: ", Eu = fo + "Precision limit exceeded", Iu = fo + "crypto unavailable", Nu = "[object Decimal]", nn = Math.floor, Xe = Math.pow, up = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, dp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, vp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Du = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, ce = 7, fp = 9007199254740991, cp = Zt.length - 1, xo = Jt.length - 1, X = { toStringTag: Nu };
X.absoluteValue = X.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), fe(e);
};
X.ceil = function() {
  return fe(new this.constructor(this), this.e + 1, 2);
};
X.clampedTo = X.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Or + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = mp(a, Uu(a, r)), a.precision = e, a.rounding = n, fe(Yn == 2 || Yn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
X.cubeRoot = X.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (he = !1, o = d.s * Xe(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = xe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Xe(r, 1 / 3), e = nn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Be(u.plus(d).times(i), u.plus(s), l + 2, 1), xe(i.d).slice(0, l) === (r = xe(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (fe(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (fe(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return he = !0, fe(a, e, v.rounding, n);
};
X.decimalPlaces = X.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - nn(this.e / ce)) * ce, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
X.dividedBy = X.div = function(e) {
  return Be(this, new this.constructor(e));
};
X.dividedToIntegerBy = X.divToInt = function(e) {
  var n = this, r = n.constructor;
  return fe(Be(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
X.equals = X.eq = function(e) {
  return this.cmp(e) === 0;
};
X.floor = function() {
  return fe(new this.constructor(this), this.e + 1, 3);
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
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / mo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Za(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = r, l.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Za(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / mo(5, e)), t = Za(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, fe(t, n, r, !0);
};
X.hyperbolicTangent = X.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Be(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
X.inverseCosine = X.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Nn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Nn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Nn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
X.inverseHyperbolicCosine = X.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, he = !1, r = r.times(r).minus(1).sqrt().plus(r), he = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
X.inverseHyperbolicSine = X.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, he = !1, r = r.times(r).plus(1).sqrt().plus(r), he = !0, a.precision = e, a.rounding = n, r.ln());
};
X.inverseHyperbolicTangent = X.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Be(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
X.inverseSine = X.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Nn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= xo)
      return l = Nn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= xo)
      return l = Nn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / ce + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (he = !1, n = Math.ceil(i / ce), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), he = !0, fe(l, d.precision = v, d.rounding = f, !0);
};
X.isFinite = function() {
  return !!this.d;
};
X.isInteger = X.isInt = function() {
  return !!this.d && nn(this.e / ce) > this.d.length - 2;
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
  if (he = !1, i = v + m, l = dr(u, i), a = n ? Qt(d, i + 10) : dr(e, i), s = Be(l, a, i, 1), ht(s.d, t = v, f))
    do
      if (i += 10, l = dr(u, i), a = n ? Qt(d, i + 10) : dr(e, i), s = Be(l, a, i, 1), !o) {
        +xe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (ht(s.d, t += 10, f));
  return he = !0, fe(s, v, f);
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
    return he ? fe(e, i, s) : e;
  }
  if (r = nn(e.e / ce), d = nn(m.e / ce), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / ce), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
        u[t] = An - 1;
      --u[t], u[a] += An;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = co(u, r), he ? fe(e, i, s) : e) : new h(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? fe(new a(r), a.precision, a.rounding) : (he = !1, a.modulo == 9 ? (n = Be(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Be(r, e, 0, a.modulo, 1), n = n.times(e), he = !0, r.minus(n));
};
X.naturalExponential = X.exp = function() {
  return ei(this);
};
X.naturalLogarithm = X.ln = function() {
  return dr(this);
};
X.negated = X.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
X.plus = X.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), he ? fe(e, i, s) : e;
  if (o = nn(v.e / ce), a = nn(e.e / ce), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / ce), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / An | 0, u[t] %= An;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = co(u, a), he ? fe(e, i, s) : e;
};
X.precision = X.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Or + e);
  return r.d ? (n = Au(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
X.round = function() {
  var e = this, n = e.constructor;
  return fe(new n(e), e.e + 1, n.rounding);
};
X.sine = X.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = hp(a, Uu(a, r)), a.precision = e, a.rounding = n, fe(Yn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.squareRoot = X.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (he = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = xe(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = nn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Be(l, o, r + 2, 1)).times(0.5), xe(o.d).slice(0, r) === (n = xe(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (fe(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (fe(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return he = !0, fe(a, s, d.rounding, e);
};
X.tangent = X.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Be(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, fe(Yn == 2 || Yn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.times = X.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = nn(d.e / ce) + nn(e.e / ce), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % An | 0, n = i / An | 0;
    o[t] = (o[t] + n) % An | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = co(o, r), he ? fe(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, n) {
  return Di(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (hn(e, 0, Br), n === void 0 ? n = a.rounding : hn(n, 0, 8), fe(r, e + r.e + 1, n));
};
X.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Fn(a, !0) : (hn(e, 0, Br), n === void 0 ? n = t.rounding : hn(n, 0, 8), a = fe(new t(a), e + 1, n), r = Fn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Fn(t) : (hn(e, 0, Br), n === void 0 ? n = o.rounding : hn(n, 0, 8), a = fe(new o(t), e + t.e + 1, n), r = Fn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
X.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, h = m.d, g = m.constructor;
  if (!h)
    return new g(m);
  if (u = r = new g(1), a = s = new g(0), n = new g(a), o = n.e = Au(h) - m.e - 1, l = o % ce, n.d[0] = Xe(10, l < 0 ? ce + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new g(e), !i.isInt() || i.lt(u))
      throw Error(Or + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (he = !1, i = new g(xe(h)), d = g.precision, g.precision = o = h.length * ce * 2; v = Be(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Be(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Be(u, a, o, 1).minus(m).abs().cmp(Be(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], g.precision = d, he = !0, f;
};
X.toHexadecimal = X.toHex = function(e, n) {
  return Di(this, 16, e, n);
};
X.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : hn(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (he = !1, r = Be(r, e, 0, n, 1).times(e), he = !0, fe(r)) : (e.s = r.s, r = e), r;
};
X.toNumber = function() {
  return +this;
};
X.toOctal = function(e, n) {
  return Di(this, 8, e, n);
};
X.toPower = X.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Xe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (n = nn(e.e / ce), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= fp)
    return t = zu(s, i, r, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Xe(+i, u), n = r == 0 || !isFinite(r) ? nn(u * (Math.log("0." + xe(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (he = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = ei(e.times(dr(i, a + r)), a), t.d && (t = fe(t, a + 5, 1), ht(t.d, a, o) && (n = a + 10, t = fe(ei(e.times(dr(i, n + r)), n), n + 5, 1), +xe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, he = !0, s.rounding = o, fe(t, a, o));
};
X.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Fn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (hn(e, 1, Br), n === void 0 ? n = t.rounding : hn(n, 0, 8), a = fe(new t(a), e, n), r = Fn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (hn(e, 1, Br), n === void 0 ? n = a.rounding : hn(n, 0, 8)), fe(new a(r), e, n);
};
X.toString = function() {
  var e = this, n = e.constructor, r = Fn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
X.truncated = X.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
  var e = this, n = e.constructor, r = Fn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function xe(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = ce - a.length, r && (o += ar(r)), o += a;
    l = e[n], a = l + "", r = ce - a.length, r && (o += ar(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function hn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(Or + e);
}
function ht(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ce, t = 0) : (t = Math.ceil((n + 1) / ce), n %= ce), o = Xe(10, ce - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Xe(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Xe(10, n - 3) - 1, l;
}
function Ft(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Qo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function mp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / mo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Za(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Be = function() {
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
    var u, d, v, f, m, h, g, y, w, V, S, T, E, P, I, b, M, D, C, $, L = a.constructor, K = a.s == t.s ? 1 : -1, J = a.d, Y = t.d;
    if (!J || !J[0] || !Y || !Y[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (J ? Y && J[0] == Y[0] : !Y) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          J && J[0] == 0 || !Y ? K * 0 : K / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = An, m = ce, d = nn(a.e / m) - nn(t.e / m)), C = Y.length, M = J.length, w = new L(K), V = w.d = [], v = 0; Y[v] == (J[v] || 0); v++)
      ;
    if (Y[v] > (J[v] || 0) && d--, o == null ? (P = o = L.precision, l = L.rounding) : i ? P = o + (a.e - t.e) + 1 : P = o, P < 0)
      V.push(1), h = !0;
    else {
      if (P = P / m + 2 | 0, v = 0, C == 1) {
        for (f = 0, Y = Y[0], P++; (v < M || f) && P--; v++)
          I = f * s + (J[v] || 0), V[v] = I / Y | 0, f = I % Y | 0;
        h = f || v < M;
      } else {
        for (f = s / (Y[0] + 1) | 0, f > 1 && (Y = e(Y, f, s), J = e(J, f, s), C = Y.length, M = J.length), b = C, S = J.slice(0, C), T = S.length; T < C; )
          S[T++] = 0;
        $ = Y.slice(), $.unshift(0), D = Y[0], Y[1] >= s / 2 && ++D;
        do
          f = 0, u = n(Y, S, C, T), u < 0 ? (E = S[0], C != T && (E = E * s + (S[1] || 0)), f = E / D | 0, f > 1 ? (f >= s && (f = s - 1), g = e(Y, f, s), y = g.length, T = S.length, u = n(g, S, y, T), u == 1 && (f--, r(g, C < y ? $ : Y, y, s))) : (f == 0 && (u = f = 1), g = Y.slice()), y = g.length, y < T && g.unshift(0), r(S, g, T, s), u == -1 && (T = S.length, u = n(Y, S, C, T), u < 1 && (f++, r(S, C < T ? $ : Y, T, s))), T = S.length) : u === 0 && (f++, S = [0]), V[v++] = f, u && S[0] ? S[T++] = J[b] || 0 : (S = [J[b]], T = 1);
        while ((b++ < M || S[0] !== void 0) && P--);
        h = S[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      w.e = d, Bu = h;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, fe(w, i ? o + w.e + 1 : o, l, h);
    }
    return w;
  };
}();
function fe(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += ce, l = n, d = v[f = 0], s = d / Xe(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ce), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ce, l = o - ce + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= ce, l = o - ce + t, s = l < 0 ? 0 : d / Xe(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Xe(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Xe(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Xe(10, (ce - n % ce) % ce), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Xe(10, ce - o), v[f] = l > 0 ? (d / Xe(10, t - l) % Xe(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == An && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != An)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return he && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Fn(e, n, r) {
  if (!e.isFinite())
    return Ru(e);
  var a, t = e.e, o = xe(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ar(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + ar(-t - 1) + o, r && (a = r - l) > 0 && (o += ar(a))) : t >= l ? (o += ar(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + ar(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += ar(a))), o;
}
function co(e, n) {
  var r = e[0];
  for (n *= ce; r >= 10; r /= 10)
    n++;
  return n;
}
function Qt(e, n, r) {
  if (n > cp)
    throw he = !0, r && (e.precision = r), Error(Eu);
  return fe(new e(Zt), n, 1, !0);
}
function Nn(e, n, r) {
  if (n > xo)
    throw Error(Eu);
  return fe(new e(Jt), n, r, !0);
}
function Au(e) {
  var n = e.length - 1, r = n * ce + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function ar(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function zu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / ce + 4);
  for (he = !1; ; ) {
    if (r % 2 && (o = o.times(n), yl(o.d, l) && (t = !0)), r = nn(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), yl(n.d, l);
  }
  return he = !0, o;
}
function gl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Lu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ei(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (he = !1, s = h) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Xe(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), r = r.times(++d), i = l.plus(Be(o, r, s, 1)), xe(i.d).slice(0, s) === xe(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = fe(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && ht(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = h, m, he = !0);
      else
        return f.precision = h, l;
    }
    l = i;
  }
}
function dr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, h = 10, g = e, y = g.d, w = g.constructor, V = w.rounding, S = w.precision;
  if (g.s < 0 || !y || !y[0] || !g.e && y[0] == 1 && y.length == 1)
    return new w(y && !y[0] ? -1 / 0 : g.s != 1 ? NaN : y ? 0 : g);
  if (n == null ? (he = !1, d = S) : d = n, w.precision = d += h, r = xe(y), a = r.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = xe(g.d), a = r.charAt(0), m++;
    o = g.e, a > 1 ? (g = new w("0." + r), o++) : g = new w(a + "." + r.slice(1));
  } else
    return u = Qt(w, d + 2, S).times(o + ""), g = dr(new w(a + "." + r.slice(1)), d - h).plus(u), w.precision = S, n == null ? fe(g, S, V, he = !0) : g;
  for (v = g, s = l = g = Be(g.minus(1), g.plus(1), d, 1), f = fe(g.times(g), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Be(l, new w(t), d, 1)), xe(u.d).slice(0, d) === xe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Qt(w, d + 2, S).times(o + ""))), s = Be(s, new w(m), d, 1), n == null)
        if (ht(s.d, d - h, V, i))
          w.precision = d += h, u = l = g = Be(v.minus(1), v.plus(1), d, 1), f = fe(g.times(g), d, 1), t = i = 1;
        else
          return fe(s, w.precision = S, V, he = !0);
      else
        return w.precision = S, s;
    s = u, t += 2;
  }
}
function Ru(e) {
  return String(e.s * e.s / 0);
}
function ni(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ce, r < 0 && (a += ce), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ce; a < t; )
        e.d.push(+n.slice(a, a += ce));
      n = n.slice(a), a = ce - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), he && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function pp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Du.test(n))
      return ni(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (dp.test(n))
    r = 16, n = n.toLowerCase();
  else if (up.test(n))
    r = 2;
  else if (vp.test(n))
    r = 8;
  else
    throw Error(Or + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = zu(a, new a(r), o, o * 2)), u = Ft(n, r, An), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = co(u, d), e.d = u, he = !1, l && (e = Be(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Xe(2, s) : vr.pow(2, s))), he = !0, e);
}
function hp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Za(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / mo(5, r)), n = Za(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Za(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / ce);
  for (he = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Be(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Be(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return he = !0, l.d.length = d + 1, l;
}
function mo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Uu(e, n) {
  var r, a = n.s < 0, t = Nn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Yn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Yn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Yn = gl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Yn = gl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Di(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, h = r !== void 0;
  if (h ? (hn(r, 1, Br), a === void 0 ? a = m.rounding : hn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Ru(e);
  else {
    for (d = Fn(e), l = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ft(Fn(f), 10, t), f.e = f.d.length), v = Ft(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Be(e, f, r, a, 0, t), v = e.d, o = e.e, u = Bu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Qo.charAt(v[l]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ft(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Qo.charAt(v[l]);
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
function yl(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function gp(e) {
  return new this(e).abs();
}
function yp(e) {
  return new this(e).acos();
}
function bp(e) {
  return new this(e).acosh();
}
function wp(e, n) {
  return new this(e).plus(n);
}
function Cp(e) {
  return new this(e).asin();
}
function Sp(e) {
  return new this(e).asinh();
}
function kp(e) {
  return new this(e).atan();
}
function $p(e) {
  return new this(e).atanh();
}
function Tp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Nn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Nn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Nn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Be(e, n, o, 1)), n = Nn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Be(e, n, o, 1)), r;
}
function Pp(e) {
  return new this(e).cbrt();
}
function Op(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Vp(e, n, r) {
  return new this(e).clamp(n, r);
}
function Mp(e) {
  if (!e || typeof e != "object")
    throw Error(fo + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Br,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ya,
    0,
    "toExpPos",
    0,
    Ya,
    "maxE",
    0,
    Ya,
    "minE",
    -Ya,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = _o[r]), (a = e[r]) !== void 0)
      if (nn(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(Or + r + ": " + a);
  if (r = "crypto", t && (this[r] = _o[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Iu);
      else
        this[r] = !1;
    else
      throw Error(Or + r + ": " + a);
  return this;
}
function Bp(e) {
  return new this(e).cos();
}
function Ep(e) {
  return new this(e).cosh();
}
function Fu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, bl(o)) {
      u.s = o.s, he ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        he ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return ni(u, o.toString());
    } else if (s !== "string")
      throw Error(Or + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Du.test(o) ? ni(u, o) : pp(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Mp, t.clone = Fu, t.isDecimal = bl, t.abs = gp, t.acos = yp, t.acosh = bp, t.add = wp, t.asin = Cp, t.asinh = Sp, t.atan = kp, t.atanh = $p, t.atan2 = Tp, t.cbrt = Pp, t.ceil = Op, t.clamp = Vp, t.cos = Bp, t.cosh = Ep, t.div = Ip, t.exp = Np, t.floor = Dp, t.hypot = Ap, t.ln = zp, t.log = Lp, t.log10 = Up, t.log2 = Rp, t.max = Fp, t.min = Hp, t.mod = Yp, t.mul = jp, t.pow = Wp, t.random = Gp, t.round = qp, t.sign = Xp, t.sin = Kp, t.sinh = Zp, t.sqrt = Jp, t.sub = Qp, t.sum = _p, t.tan = xp, t.tanh = eh, t.trunc = nh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Ip(e, n) {
  return new this(e).div(n);
}
function Np(e) {
  return new this(e).exp();
}
function Dp(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Ap() {
  var e, n, r = new this(0);
  for (he = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return he = !0, new this(1 / 0);
      r = n;
    }
  return he = !0, r.sqrt();
}
function bl(e) {
  return e instanceof vr || e && e.toStringTag === Nu || !1;
}
function zp(e) {
  return new this(e).ln();
}
function Lp(e, n) {
  return new this(e).log(n);
}
function Rp(e) {
  return new this(e).log(2);
}
function Up(e) {
  return new this(e).log(10);
}
function Fp() {
  return Lu(this, arguments, "lt");
}
function Hp() {
  return Lu(this, arguments, "gt");
}
function Yp(e, n) {
  return new this(e).mod(n);
}
function jp(e, n) {
  return new this(e).mul(n);
}
function Wp(e, n) {
  return new this(e).pow(n);
}
function Gp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : hn(e, 1, Br), a = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Iu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= ce, a && e && (t = Xe(10, ce - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= ce)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < ce && (r -= ce - a);
  }
  return l.e = r, l.d = i, l;
}
function qp(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function Xp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Kp(e) {
  return new this(e).sin();
}
function Zp(e) {
  return new this(e).sinh();
}
function Jp(e) {
  return new this(e).sqrt();
}
function Qp(e, n) {
  return new this(e).sub(n);
}
function _p() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (he = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return he = !0, fe(r, this.precision, this.rounding);
}
function xp(e) {
  return new this(e).tan();
}
function eh(e) {
  return new this(e).tanh();
}
function nh(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var vr = X.constructor = Fu(_o);
Zt = new vr(Zt);
Jt = new vr(Jt);
var rh = {
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
  onBeforeChange: U(),
  onChange: U(),
  onIncrement: U(),
  onDecrement: U(),
  "onUpdate:modelValue": U()
}, {
  n: ah,
  classes: th
} = _("counter"), wl = 100, Cl = 600, oh = ["inputmode", "readonly", "disabled"];
function ih(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = ae("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Ee({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Z(
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
          default: ve(() => [Z(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), ke(A(
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
        oh
      ), [[Lv, e.inputValue]]), Z(
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
          default: ve(() => [Z(r, {
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
    ), Z(
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
var Hu = Q({
  name: "VarCounter",
  components: {
    VarButton: en,
    VarIcon: Pe,
    VarFormDetails: _e
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: rh,
  setup(e) {
    var n = B(""), {
      bindForm: r,
      form: a
    } = Mn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = Vn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, h = () => l(e.rules, e.modelValue), g = (Y) => {
      Ne(() => {
        var {
          validateTrigger: j,
          rules: se,
          modelValue: q
        } = e;
        o(j, Y, se, q);
      });
    }, y = () => {
      var {
        min: Y
      } = e;
      k(e["onUpdate:modelValue"], Y != null ? R(Y) : 0), i();
    }, w = {
      reset: y,
      validate: h,
      resetValidation: i
    }, V = z(() => {
      var {
        max: Y,
        modelValue: j
      } = e;
      return Y != null && R(j) >= R(Y);
    }), S = z(() => {
      var {
        min: Y,
        modelValue: j
      } = e;
      return Y != null && R(j) <= R(Y);
    }), T = (Y) => {
      var {
        decimalLength: j,
        max: se,
        min: q
      } = e, F = R(Y);
      return se != null && F > R(se) && (F = R(se)), q != null && F < R(q) && (F = R(q)), Y = String(F), j != null && (Y = F.toFixed(R(j))), Y;
    }, E = (Y) => {
      var {
        lazyChange: j,
        onBeforeChange: se
      } = e, {
        value: q
      } = Y.target, F = T(q);
      j ? k(se, R(F), J) : K(F), g("onInputChange");
    }, P = () => {
      var {
        disabled: Y,
        readonly: j,
        disableDecrement: se,
        decrementButton: q,
        lazyChange: F,
        step: N,
        modelValue: W,
        onDecrement: ee,
        onBeforeChange: le
      } = e;
      if (!(u != null && u.value || s != null && s.value || Y || j || se || !q) && !S.value) {
        var de = new vr(R(W)).minus(new vr(R(N))).toString(), we = T(de), Oe = R(we);
        k(ee, Oe), F ? k(le, Oe, J) : (K(we), g("onDecrement"));
      }
    }, I = () => {
      var {
        disabled: Y,
        readonly: j,
        disableIncrement: se,
        incrementButton: q,
        lazyChange: F,
        step: N,
        modelValue: W,
        onIncrement: ee,
        onBeforeChange: le
      } = e;
      if (!(u != null && u.value || s != null && s.value || Y || j || se || !q) && !V.value) {
        var de = new vr(R(W)).plus(new vr(R(N))).toString(), we = T(de), Oe = R(we);
        k(ee, Oe), F ? k(le, Oe, J) : (K(we), g("onIncrement"));
      }
    }, b = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (m = window.setTimeout(() => {
        L();
      }, Cl));
    }, M = () => {
      var {
        press: Y,
        lazyChange: j
      } = e;
      !Y || j || (f = window.setTimeout(() => {
        $();
      }, Cl));
    }, D = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, C = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, $ = () => {
      d = window.setTimeout(() => {
        I(), $();
      }, wl);
    }, L = () => {
      v = window.setTimeout(() => {
        P(), L();
      }, wl);
    }, K = (Y) => {
      n.value = Y;
      var j = R(Y);
      k(e["onUpdate:modelValue"], j);
    }, J = (Y) => {
      K(T(String(Y))), g("onLazyChange");
    };
    return k(r, w), oe(() => e.modelValue, (Y) => {
      K(T(String(Y))), k(e.onChange, R(Y));
    }), K(T(String(e.modelValue))), {
      n: ah,
      classes: th,
      formatElevation: gn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: S,
      validate: h,
      reset: y,
      resetValidation: i,
      handleChange: E,
      decrement: P,
      increment: I,
      pressDecrement: b,
      pressIncrement: M,
      releaseDecrement: D,
      releaseIncrement: C,
      toSizeUnit: ge,
      toNumber: R
    };
  }
});
Hu.render = ih;
const Kr = Hu;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var WS = Kr, Yu = 60, ju = Yu * 60, Wu = ju * 24, lh = Wu * 7, Ja = 1e3, $o = Yu * Ja, Sl = ju * Ja, sh = Wu * Ja, uh = lh * Ja, Ai = "millisecond", ja = "second", Wa = "minute", Ga = "hour", tr = "day", Ht = "week", In = "month", Gu = "quarter", or = "year", qa = "date", dh = "YYYY-MM-DDTHH:mm:ssZ", kl = "Invalid Date", vh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, fh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const ch = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ri = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, mh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + ri(t, 2, "0") + ":" + ri(o, 2, "0");
}, ph = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, In), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), In);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, hh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, gh = function(n) {
  var r = {
    M: In,
    y: or,
    w: Ht,
    d: tr,
    D: qa,
    h: Ga,
    m: Wa,
    s: ja,
    ms: Ai,
    Q: Gu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, yh = function(n) {
  return n === void 0;
};
const bh = {
  s: ri,
  z: mh,
  m: ph,
  a: hh,
  p: gh,
  u: yh
};
var st = "en", Zr = {};
Zr[st] = ch;
var zi = function(n) {
  return n instanceof po;
}, _t = function e(n, r, a) {
  var t;
  if (!n)
    return st;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Zr[o] && (t = o), r && (Zr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Zr[i] = n, t = i;
  }
  return !a && t && (st = t), t || !a && st;
}, ie = function(n, r) {
  if (zi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new po(a);
}, wh = function(n, r) {
  return ie(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Me = bh;
Me.l = _t;
Me.i = zi;
Me.w = wh;
var Ch = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Me.u(r))
    return /* @__PURE__ */ new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(vh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, po = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = _t(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Ch(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Me;
  }, n.isValid = function() {
    return this.$d.toString() !== kl;
  }, n.isSame = function(a, t) {
    var o = ie(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return ie(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < ie(a);
  }, n.$g = function(a, t, o) {
    return Me.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Me.u(t) ? !0 : t, i = Me.p(a), s = function(w, V) {
      var S = Me.w(o.$u ? Date.UTC(o.$y, V, w) : new Date(o.$y, V, w), o);
      return l ? S : S.endOf(tr);
    }, u = function(w, V) {
      var S = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Me.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : T).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case or:
        return l ? s(1, 0) : s(31, 11);
      case In:
        return l ? s(1, v) : s(0, v + 1);
      case Ht: {
        var h = this.$locale().weekStart || 0, g = (d < h ? d + 7 : d) - h;
        return s(l ? f - g : f + (6 - g), v);
      }
      case tr:
      case qa:
        return u(m + "Hours", 0);
      case Ga:
        return u(m + "Minutes", 1);
      case Wa:
        return u(m + "Seconds", 2);
      case ja:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Me.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[tr] = i + "Date", o[qa] = i + "Date", o[In] = i + "Month", o[or] = i + "FullYear", o[Ga] = i + "Hours", o[Wa] = i + "Minutes", o[ja] = i + "Seconds", o[Ai] = i + "Milliseconds", o)[l], u = l === tr ? this.$D + (t - this.$W) : t;
    if (l === In || l === or) {
      var d = this.clone().set(qa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(qa, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Me.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Me.p(t), s = function(f) {
      var m = ie(o);
      return Me.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === In)
      return this.set(In, this.$M + a);
    if (i === or)
      return this.set(or, this.$y + a);
    if (i === tr)
      return s(1);
    if (i === Ht)
      return s(7);
    var u = (l = {}, l[Wa] = $o, l[Ga] = Sl, l[ja] = Ja, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Me.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || kl;
    var l = a || dh, i = Me.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, h = function(S, T, E, P) {
      return S && (S[T] || S(t, l)) || E[T].slice(0, P);
    }, g = function(S) {
      return Me.s(s % 12 || 12, S, "0");
    }, y = m || function(V, S, T) {
      var E = V < 12 ? "AM" : "PM";
      return T ? E.toLowerCase() : E;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Me.s(d + 1, 2, "0"),
      MMM: h(o.monthsShort, d, f, 3),
      MMMM: h(f, d),
      D: this.$D,
      DD: Me.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(o.weekdaysMin, this.$W, v, 2),
      ddd: h(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Me.s(s, 2, "0"),
      h: g(1),
      hh: g(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Me.s(u, 2, "0"),
      s: String(this.$s),
      ss: Me.s(this.$s, 2, "0"),
      SSS: Me.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(fh, function(V, S) {
      return S || w[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Me.p(t), s = ie(a), u = (s.utcOffset() - this.utcOffset()) * $o, d = this - s, v = Me.m(this, s);
    return v = (l = {}, l[or] = v / 12, l[In] = v, l[Gu] = v / 3, l[Ht] = (d - u) / uh, l[tr] = (d - u) / sh, l[Ga] = d / Sl, l[Wa] = d / $o, l[ja] = d / Ja, l)[i] || d, o ? v : Me.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(In).$D;
  }, n.$locale = function() {
    return Zr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = _t(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Me.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), qu = po.prototype;
ie.prototype = qu;
[["$ms", Ai], ["$s", ja], ["$m", Wa], ["$H", Ga], ["$W", tr], ["$M", In], ["$y", or], ["$D", qa]].forEach(function(e) {
  qu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ie.extend = function(e, n) {
  return e.$i || (e(n, po, ie), e.$i = !0), ie;
};
ie.locale = _t;
ie.isDayjs = zi;
ie.unix = function(e) {
  return ie(e * 1e3);
};
ie.en = Zr[st];
ie.Ls = Zr;
ie.p = {};
const Xu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Ku = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Sh(e) {
  return ["date", "month"].includes(e);
}
var Yt = [{
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
}], it = [{
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
}], kh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Sh
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
  onPreview: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: $h
} = _("picker-header");
function Th(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [Z(
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
        default: ve(() => [Z(r, {
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
      [Z(
        Le,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), O(
            "div",
            {
              key: e.showDate
            },
            ne(e.showDate),
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
    ), Z(
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
        default: ve(() => [Z(r, {
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
var Zu = Q({
  name: "PanelHeader",
  components: {
    VarButton: en,
    VarIcon: Pe
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
    } = n, a = B(!1), t = B(0), o = z(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return R(v) + t.value;
      var f = (i = Ze.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Ze.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return oe(() => e.date, () => {
      t.value = 0;
    }), {
      n: $h,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Zu.render = Th;
const Ju = Zu;
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
ie.extend(Xu);
ie.extend(Ku);
var {
  n: Nt,
  classes: Ph
} = _("month-picker"), {
  n: Dt
} = _("date-picker");
function Oh(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
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
      [Z(
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
      ), Z(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), O("ul", {
            key: e.panelKey
          }, [(p(!0), O(
            Ve,
            null,
            Ue(e.MONTH_LIST, (t) => (p(), O("li", {
              key: t.index
            }, [Z(
              a,
              Ee({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, ai({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [Ce(
                  ne(e.getMonthAbbr(t.index)),
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
var Qu = Q({
  name: "MonthPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: Ju
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
    } = n, [a, t] = e.current.split("-"), o = B(!1), l = B(0), i = B(null), s = Ae({
      left: !1,
      right: !1
    }), u = z(() => e.choose.chooseYear === e.preview.previewYear), d = z(() => e.preview.previewYear === a), v = (V) => {
      var S, T;
      return (S = (T = Ze.value.datePickerMonthDict) == null ? void 0 : T[V].abbr) != null ? S : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: T,
          max: E
        }
      } = e, P = !0, I = !0, b = S + "-" + V;
      return E && (P = ie(b).isSameOrBefore(ie(E), "month")), T && (I = ie(b).isSameOrAfter(ie(T), "month")), P && I;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: T,
          chooseRangeMonth: E
        },
        componentProps: {
          type: P,
          range: I
        }
      } = e;
      if (I) {
        if (!E.length)
          return !1;
        var b = ie(V).isSameOrBefore(ie(E[1]), "month"), M = ie(V).isSameOrAfter(ie(E[0]), "month");
        return b && M;
      }
      return P === "month" ? S.includes(V) : T.some((D) => D.includes(V));
    }, h = (V) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: T
        },
        componentProps: {
          allowedDates: E,
          color: P,
          multiple: I,
          range: b
        }
      } = e, M = T + "-" + V, D = () => b || I ? m(M) : (S == null ? void 0 : S.index) === V && u.value, C = () => f(V) ? E ? !E(M) : !1 : !0, $ = C(), L = () => $ ? !0 : b || I ? !m(M) : !u.value || (S == null ? void 0 : S.index) !== V, K = () => d.value && t === V && e.componentProps.showCurrent ? (b || I || u.value) && $ ? !0 : b || I ? !m(M) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, J = () => $ ? "" : K() ? P ?? "" : D() ? "" : Dt() + "-color-cover", Y = J().startsWith(Dt());
      return {
        outline: K(),
        text: L(),
        color: L() ? "" : P,
        textColor: Y ? "" : J(),
        [Dt() + "-color-cover"]: Y,
        class: Ph(Nt("button"), [$, Nt("button--disabled")]),
        disabled: $
      };
    }, g = (V, S) => {
      var T = S.currentTarget;
      T.classList.contains(Nt("button--disabled")) || r("choose-month", V);
    }, y = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, w = (V) => {
      i.value.checkDate(V);
    };
    return oe(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: S,
          max: T
        }
      } = e;
      T && (s.right = !ie("" + (R(V) + 1)).isSameOrBefore(ie(T), "year")), S && (s.left = !ie("" + (R(V) - 1)).isSameOrAfter(ie(S), "year"));
    }, {
      immediate: !0
    }), {
      n: Nt,
      nDate: Dt,
      pack: Ze,
      MONTH_LIST: Yt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: g,
      checkDate: y
    };
  }
});
Qu.render = Oh;
const Vh = Qu;
var {
  n: $l,
  classes: Mh
} = _("year-picker"), Bh = ["onClick"];
function Eh(e, n) {
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), O(
      Ve,
      null,
      Ue(e.yearList, (r) => (p(), O(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: G({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        Bh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var _u = Q({
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
    } = n, a = z(() => {
      var o = [], {
        preview: l,
        componentProps: {
          max: i,
          min: s
        }
      } = e;
      if (!l)
        return o;
      var u = [R(l) + 100, R(l) - 100];
      if (i) {
        var d = ie(i).format("YYYY-MM-D"), v = R(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ie(s).format("YYYY-MM-D"), m = R(f.split("-")[0]);
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
      var o = document.querySelector("." + $l("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: $l,
      classes: Mh,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
_u.render = Eh;
const Ih = _u;
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
ie.extend(Xu);
ie.extend(Ku);
var {
  n: Ha,
  classes: Nh
} = _("day-picker"), {
  n: At
} = _("date-picker");
function Dh(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
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
      [Z(
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
      ), Z(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), O("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), O(
              Ve,
              null,
              Ue(e.sortWeekList, (t) => (p(), O(
                "li",
                {
                  key: t.index
                },
                ne(e.getDayAbbr(t.index)),
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
              Ve,
              null,
              Ue(e.days, (t, o) => (p(), O("li", {
                key: o
              }, [Z(
                a,
                Ee({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, ti({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [Ce(
                    ne(e.filterDay(t)),
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
var xu = Q({
  name: "DayPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: Ju
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
    } = n, [a, t, o] = e.current.split("-"), l = B([]), i = B(!1), s = B(0), u = B(null), d = Ae({
      left: !1,
      right: !1
    }), v = z(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = z(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = z(() => {
      var b = it.findIndex((M) => M.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? it : it.slice(b).concat(it.slice(0, b));
    }), h = (b) => {
      var M, D;
      return (M = (D = Ze.value.datePickerWeekDict) == null ? void 0 : D[b].abbr) != null ? M : "";
    }, g = (b) => b > 0 ? b : "", y = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: M
        }
      } = e, D = ie(M + "-" + b.index).daysInMonth(), C = ie(M + "-" + b.index + "-01").day(), $ = m.value.findIndex((L) => L.index === "" + C);
      l.value = [...Array($).fill(-1), ...Array.from(Array(D + 1).keys())].filter((L) => L);
    }, w = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: M
        },
        componentProps: {
          max: D,
          min: C
        }
      } = e;
      if (D) {
        var $ = b + "-" + (R(M.index) + 1);
        d.right = !ie($).isSameOrBefore(ie(D), "month");
      }
      if (C) {
        var L = b + "-" + (R(M.index) - 1);
        d.left = !ie(L).isSameOrAfter(ie(C), "month");
      }
    }, V = (b) => {
      var {
        preview: {
          previewYear: M,
          previewMonth: D
        },
        componentProps: {
          min: C,
          max: $
        }
      } = e, L = !0, K = !0, J = M + "-" + D.index + "-" + b;
      return $ && (L = ie(J).isSameOrBefore(ie($), "day")), C && (K = ie(J).isSameOrAfter(ie(C), "day")), L && K;
    }, S = (b) => {
      var {
        choose: {
          chooseDays: M,
          chooseRangeDay: D
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!D.length)
          return !1;
        var $ = ie(b).isSameOrBefore(ie(D[1]), "day"), L = ie(b).isSameOrAfter(ie(D[0]), "day");
        return $ && L;
      }
      return M.includes(b);
    }, T = (b) => {
      if (b < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ha("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: M
        },
        preview: {
          previewYear: D,
          previewMonth: C
        },
        componentProps: {
          allowedDates: $,
          color: L,
          multiple: K,
          range: J
        }
      } = e, Y = D + "-" + C.index + "-" + b, j = () => J || K ? S(Y) : R(M) === b && f.value, se = () => V(b) ? $ ? !$(Y) : !1 : !0, q = se(), F = () => q ? !0 : J || K ? !S(Y) : !f.value || R(M) !== b, N = () => v.value && R(o) === b && e.componentProps.showCurrent ? (J || K || f.value) && q ? !0 : J || K ? !S(Y) : f.value ? M !== o : !0 : !1, W = () => q ? "" : N() ? L ?? "" : j() ? "" : At() + "-color-cover", ee = W().startsWith(At());
      return {
        text: F(),
        outline: N(),
        textColor: ee ? "" : W(),
        [At() + "-color-cover"]: ee,
        class: Nh(Ha("button"), Ha("button--usable"), [q, Ha("button--disabled")]),
        disabled: q
      };
    }, E = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, r("check-preview", "month", b);
    }, P = (b, M) => {
      var D = M.currentTarget;
      D.classList.contains(Ha("button--disabled")) || r("choose-day", b);
    }, I = (b) => {
      u.value.checkDate(b);
    };
    return ln(() => {
      y(), w();
    }), oe(() => e.preview, () => {
      y(), w();
    }), {
      n: Ha,
      nDate: At,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: I,
      filterDay: g,
      getDayAbbr: h,
      checkDate: E,
      chooseDay: P,
      buttonProps: T
    };
  }
});
xu.render = Dh;
const Ah = xu;
var {
  n: zh,
  classes: Lh
} = _("date-picker");
function Rh(e, n) {
  var r = ae("year-picker-panel"), a = ae("month-picker-panel"), t = ae("day-picker-panel");
  return p(), O(
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
        [H(e.$slots, "year", {
          year: e.chooseYear
        }, () => [Ce(
          ne(e.chooseYear),
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
        [Z(
          Le,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), O("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? H(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [Ce(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? H(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [Ce(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : H(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [Ce(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), O("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? H(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [Ce(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? H(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [Ce(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : H(e.$slots, "date", $t(Ee({
                key: 2
              }, e.slotProps)), () => [Ce(
                ne(e.getDateTitle),
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
      [Z(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), ye(
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
          )) : e.getPanelType === "month" ? (p(), ye(
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
          )) : e.getPanelType === "date" ? (p(), ye(
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
          )) : x("v-if", !0)]),
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
var ed = Q({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Vh,
    YearPickerPanel: Ih,
    DayPickerPanel: Ah
  },
  props: kh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ie().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Yt.find((te) => te.index === i), u = B(!1), d = B(!1), v = B(!0), f = B(), m = B(), h = B(), g = B(s), y = B(l), w = B(!1), V = B([]), S = B([]), T = B([]), E = B([]), P = B(null), I = B(null), b = Ae({
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
    }), M = z(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: h.value,
      chooseMonths: V.value,
      chooseDays: S.value,
      chooseRangeMonth: T.value,
      chooseRangeDay: E.value
    })), D = z(() => ({
      previewMonth: g.value,
      previewYear: y.value
    })), C = z(() => {
      var {
        multiple: te,
        range: be
      } = e;
      if (be)
        return T.value.length ? T.value[0] + " ~ " + T.value[1] : "";
      var pe = "";
      if (f.value) {
        var Se, $e;
        pe = (Se = ($e = Ze.value.datePickerMonthDict) == null ? void 0 : $e[f.value.index].name) != null ? Se : "";
      }
      return te ? "" + V.value.length + Ze.value.datePickerSelected : pe;
    }), $ = z(() => {
      var te, be, pe, Se, {
        multiple: $e,
        range: Re
      } = e;
      if (Re) {
        var rn = E.value.map((Co) => ie(Co).format("YYYY-MM-DD"));
        return rn.length ? rn[0] + " ~ " + rn[1] : "";
      }
      if ($e)
        return "" + S.value.length + Ze.value.datePickerSelected;
      if (!m.value || !f.value || !h.value)
        return "";
      var wn = ie(m.value + "-" + f.value.index + "-" + h.value).day(), Fa = it.find((Co) => Co.index === "" + wn), Ki = (te = (be = Ze.value.datePickerWeekDict) == null ? void 0 : be[Fa.index].name) != null ? te : "", Mv = (pe = (Se = Ze.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? pe : "", Bv = Ia(h.value, 2, "0");
      return Ze.value.lang === "zh-CN" ? f.value.index + "-" + Bv + " " + Ki.slice(0, 3) : Ki.slice(0, 3) + ", " + Mv.slice(0, 3) + " " + h.value;
    }), L = z(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), K = z(() => !e.touchable || ["", "year"].includes(L.value)), J = z(() => {
      var te, be, pe, Se, $e = ie(m.value + "-" + ((te = f.value) == null ? void 0 : te.index) + "-" + h.value).day(), Re = h.value ? Ia(h.value, 2, "0") : "";
      return {
        week: "" + $e,
        year: (be = m.value) != null ? be : "",
        month: (pe = (Se = f.value) == null ? void 0 : Se.index) != null ? pe : "",
        date: Re
      };
    }), Y = z(() => M.value.chooseRangeDay.map((te) => ie(te).format("YYYY-MM-DD"))), j = z(() => m.value === y.value), se = z(() => {
      var te;
      return ((te = f.value) == null ? void 0 : te.index) === g.value.index;
    }), q = (te) => {
      te === "year" ? u.value = !0 : te === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, F = (te) => {
      if (!K.value) {
        var {
          clientX: be,
          clientY: pe
        } = te.touches[0];
        n = be, r = pe;
      }
    }, N = (te, be) => te >= be && te > 20 ? "x" : "y", W = (te) => {
      if (!K.value) {
        var {
          clientX: be,
          clientY: pe
        } = te.touches[0], Se = be - n, $e = pe - r;
        t = N(Math.abs(Se), Math.abs($e)), a = Se > 0 ? "prev" : "next";
      }
    }, ee = () => {
      if (!(K.value || t !== "x")) {
        var te = L.value === "month" ? P : I;
        oo(() => {
          te.value.forwardRef(a), He();
        });
      }
    }, le = (te, be) => {
      var pe = be === "month" ? T : E;
      if (pe.value = v.value ? [te, te] : [pe.value[0], te], v.value = !v.value, v.value) {
        var Se = ie(pe.value[0]).isAfter(pe.value[1]), $e = Se ? [pe.value[1], pe.value[0]] : [...pe.value];
        k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
      }
    }, de = (te, be) => {
      var pe = be === "month" ? V : S, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-DD", $e = pe.value.map((rn) => ie(rn).format(Se)), Re = $e.findIndex((rn) => rn === te);
      Re === -1 ? $e.push(te) : $e.splice(Re, 1), k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
    }, we = (te, be) => !m.value || !f.value ? !1 : j.value ? te === "month" ? be.index < f.value.index : se.value ? be < R(h.value) : f.value.index > g.value.index : m.value > y.value, Oe = (te) => {
      var {
        readonly: be,
        range: pe,
        multiple: Se,
        onChange: $e,
        "onUpdate:modelValue": Re
      } = e;
      if (!(te < 0 || be)) {
        w.value = we("day", te);
        var rn = y.value + "-" + g.value.index + "-" + te, wn = ie(rn).format("YYYY-MM-DD");
        pe ? le(wn, "day") : Se ? de(wn, "day") : (k(Re, wn), k($e, wn));
      }
    }, dn = (te) => {
      var {
        type: be,
        readonly: pe,
        range: Se,
        multiple: $e,
        onChange: Re,
        onPreview: rn,
        "onUpdate:modelValue": wn
      } = e;
      if (w.value = we("month", te), be === "month" && !pe) {
        var Fa = y.value + "-" + te.index;
        Se ? le(Fa, "month") : $e ? de(Fa, "month") : (k(wn, Fa), k(Re, Fa));
      } else
        g.value = te, k(rn, R(y.value), R(g.value.index));
      d.value = !1;
    }, re = (te) => {
      y.value = "" + te, u.value = !1, d.value = !0, k(e.onPreview, R(y.value), R(g.value.index));
    }, ue = (te, be) => {
      var pe = be === "prev" ? -1 : 1;
      if (te === "year")
        y.value = "" + (R(y.value) + pe);
      else {
        var Se = R(g.value.index) + pe;
        Se < 1 && (y.value = "" + (R(y.value) - 1), Se = 12), Se > 12 && (y.value = "" + (R(y.value) + 1), Se = 1), g.value = Yt.find(($e) => R($e.index) === Se);
      }
      k(e.onPreview, R(y.value), R(g.value.index));
    }, me = () => (e.multiple || e.range) && !Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, De = (te) => Te(te) ? !1 : te === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ke = (te, be) => {
      var pe = be === "month" ? T : E, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = te.map((wn) => ie(wn).format(Se)).slice(0, 2), Re = pe.value.some((wn) => De(wn));
      if (!Re) {
        pe.value = $e;
        var rn = ie(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && rn && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, Ge = (te, be) => {
      var pe = be === "month" ? V : S, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = Array.from(new Set(te.map((Re) => ie(Re).format(Se))));
      pe.value = $e.filter((Re) => Re !== "Invalid Date");
    }, Fe = (te) => {
      var be = ie(te).format("YYYY-MM-D");
      if (!De(be)) {
        var [pe, Se, $e] = be.split("-"), Re = Yt.find((rn) => rn.index === Se);
        f.value = Re, m.value = pe, h.value = $e, g.value = Re, y.value = pe;
      }
    }, He = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return oe(() => e.modelValue, (te) => {
      if (!(!me() || De(te) || !te))
        if (e.range) {
          if (!Te(te))
            return;
          v.value = te.length !== 1, Ke(te, e.type);
        } else if (e.multiple) {
          if (!Te(te))
            return;
          Ge(te, e.type);
        } else
          Fe(te);
    }, {
      immediate: !0
    }), oe(L, He), {
      n: zh,
      classes: Lh,
      monthPanelEl: P,
      dayPanelEl: I,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: h,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: $,
      getPanelType: L,
      getChoose: M,
      getPreview: D,
      componentProps: b,
      slotProps: J,
      formatRange: Y,
      clickEl: q,
      handleTouchstart: F,
      handleTouchmove: W,
      handleTouchend: ee,
      getChooseDay: Oe,
      getChooseMonth: dn,
      getChooseYear: re,
      checkPreview: ue,
      formatElevation: gn
    };
  }
});
ed.render = Rh;
const Jr = ed;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var GS = Jr;
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
function Uh(e) {
  return ["left", "center", "right"].includes(e);
}
var Fh = oi({
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
    validator: Uh
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
  onBeforeClose: U(),
  onConfirm: U(),
  onCancel: U(),
  "onUpdate:show": U()
}, Je(Ot, [
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
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ii.apply(this, arguments);
}
var {
  n: Hh,
  classes: Yh
} = _("dialog");
function jh(e, n) {
  var r = ae("var-button"), a = ae("var-popup");
  return p(), ye(
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
      default: ve(() => [A(
        "div",
        Ee({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: ii({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: c(e.n("title"))
          },
          [H(e.$slots, "title", {}, () => [Ce(
            ne(e.dt(e.title, e.pack.dialogTitle)),
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
          [H(e.$slots, "default", {}, () => [Ce(
            ne(e.message),
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
          [e.cancelButton ? (p(), ye(
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
              default: ve(() => [Ce(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (p(), ye(
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
              default: ve(() => [Ce(
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0)],
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
var nd = Q({
  name: "VarDialog",
  components: {
    VarPopup: kn,
    VarButton: en
  },
  inheritAttrs: !1,
  props: Fh,
  setup(e) {
    var n = B(!1), r = B(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (k(s), !!i) {
        if (u != null) {
          k(u, "close", a);
          return;
        }
        k(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (k(s), i != null) {
        k(i, "confirm", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (k(s), i != null) {
        k(i, "cancel", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return oe(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), oe(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Hh,
      classes: Yh,
      pack: Ze,
      dt: to,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ge
    };
  }
});
nd.render = jh;
const yr = nd;
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xt.apply(this, arguments);
}
var lr, eo = {};
function Wh(e) {
  return e === void 0 && (e = {}), je(e) ? xt({}, eo, {
    message: e
  }) : xt({}, eo, e);
}
function _n(e) {
  return Pt() ? new Promise((n) => {
    _n.close();
    var r = Wh(e), a = Ae(r);
    a.teleport = "body", lr = a;
    var {
      unmountInstance: t
    } = at(yr, a, {
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
        k(a.onClosed), t(), lr === a && (lr = null);
      },
      onRouteChange: () => {
        t(), lr === a && (lr = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
_n.setDefaultOptions = function(e) {
  eo = e;
};
_n.resetDefaultOptions = function() {
  eo = {};
};
_n.close = function() {
  if (lr != null) {
    var e = lr;
    lr = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
yr.install = function(e) {
  e.component(yr.name, yr);
};
_n.install = function(e) {
  e.component(yr.name, yr);
};
_n.Component = yr;
var qS = yr, Gh = {
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
function Xa() {
  return Xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Xa.apply(this, arguments);
}
var {
  n: qh,
  classes: Xh
} = _("divider");
function Kh(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [H(e.$slots, "default", {}, () => [e.description ? (p(), O(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var rd = Q({
  name: "VarDivider",
  props: Gh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ae({
      withText: !1
    }), t = z(() => Mo(e.inset) ? e.inset : !0), o = z(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Mo(i) || i === 0)
        return Xa({}, d);
      var v = R(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Xa({}, d, {
        height: "calc(80% - " + ge(f) + ")"
      }) : Xa({}, d, {
        width: "calc(100% - " + ge(f) + ")",
        left: v > 0 ? ge(f) : ge(0)
      });
    }), l = () => {
      a.withText = !!r.default || !!e.description;
    };
    return ln(() => {
      l();
    }), kt(() => {
      l();
    }), Xa({
      n: qh,
      classes: Xh
    }, Rv(a), {
      style: o,
      isInset: t
    });
  }
});
rd.render = Kh;
const Qr = rd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var XS = Qr, Zh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Zh[n];
  });
}
var jn = "top", Vr = "bottom", Da = "right", br = "left", ho = "auto", go = [jn, Vr, Da, br], yo = "start", gt = "end", Jh = "clippingParents", ad = "viewport", tt = "popper", Qh = "reference", Tl = /* @__PURE__ */ go.reduce(function(e, n) {
  return e.concat([n + "-" + yo, n + "-" + gt]);
}, []), td = /* @__PURE__ */ [].concat(go, [ho]).reduce(function(e, n) {
  return e.concat([n, n + "-" + yo, n + "-" + gt]);
}, []), _h = "beforeRead", xh = "read", eg = "afterRead", ng = "beforeMain", rg = "main", ag = "afterMain", tg = "beforeWrite", og = "write", ig = "afterWrite", li = [_h, xh, eg, ng, rg, ag, tg, og, ig];
function Wn(e) {
  return e.split("-")[0];
}
var lg = {
  start: "end",
  end: "start"
};
function Pl(e) {
  return e.replace(/start|end/g, function(n) {
    return lg[n];
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
function Aa(e) {
  var n = Bn(e).Element;
  return e instanceof n || e instanceof Element;
}
function $n(e) {
  var n = Bn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Li(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Bn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Er(e) {
  return ((Aa(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var ut = Math.max, Ol = Math.min, Qa = Math.round;
function si() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function od() {
  return !/^((?!chrome|android).)*safari/i.test(si());
}
function _a(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && $n(e) && (t = e.offsetWidth > 0 && Qa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Qa(a.height) / e.offsetHeight || 1);
  var l = Aa(e) ? Bn(e) : window, i = l.visualViewport, s = !od() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Ri(e) {
  var n = Bn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ui(e) {
  return _a(Er(e)).left + Ri(e).scrollLeft;
}
function sg(e, n) {
  var r = Bn(e), a = Er(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = od();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Ui(e),
    y: s
  };
}
function zn(e) {
  return Bn(e).getComputedStyle(e);
}
function ug(e) {
  var n, r = Er(e), a = Ri(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = ut(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = ut(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Ui(e), s = -a.scrollTop;
  return zn(t || r).direction === "rtl" && (i += ut(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Hn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function bo(e) {
  return Hn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Li(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Er(e)
  );
}
function Fi(e) {
  var n = zn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function id(e) {
  return ["html", "body", "#document"].indexOf(Hn(e)) >= 0 ? e.ownerDocument.body : $n(e) && Fi(e) ? e : id(bo(e));
}
function dt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = id(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Bn(a), l = t ? [o].concat(o.visualViewport || [], Fi(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(dt(bo(l)))
  );
}
function dg(e) {
  return ["table", "td", "th"].indexOf(Hn(e)) >= 0;
}
function Vl(e) {
  return !$n(e) || // https://github.com/popperjs/popper-core/issues/837
  zn(e).position === "fixed" ? null : e.offsetParent;
}
function vg(e) {
  var n = /firefox/i.test(si()), r = /Trident/i.test(si());
  if (r && $n(e)) {
    var a = zn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = bo(e);
  for (Li(t) && (t = t.host); $n(t) && ["html", "body"].indexOf(Hn(t)) < 0; ) {
    var o = zn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Hi(e) {
  for (var n = Bn(e), r = Vl(e); r && dg(r) && zn(r).position === "static"; )
    r = Vl(r);
  return r && (Hn(r) === "html" || Hn(r) === "body" && zn(r).position === "static") ? n : r || vg(e) || n;
}
function fg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Li(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function ui(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function cg(e, n) {
  var r = _a(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Ml(e, n, r) {
  return n === ad ? ui(sg(e, r)) : Aa(n) ? cg(n, r) : ui(ug(Er(e)));
}
function mg(e) {
  var n = dt(bo(e)), r = ["absolute", "fixed"].indexOf(zn(e).position) >= 0, a = r && $n(e) ? Hi(e) : e;
  return Aa(a) ? n.filter(function(t) {
    return Aa(t) && fg(t, a) && Hn(t) !== "body";
  }) : [];
}
function pg(e, n, r, a) {
  var t = n === "clippingParents" ? mg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Ml(e, u, a);
    return s.top = ut(d.top, s.top), s.right = Ol(d.right, s.right), s.bottom = Ol(d.bottom, s.bottom), s.left = ut(d.left, s.left), s;
  }, Ml(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function yt(e) {
  return e.split("-")[1];
}
function hg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ld(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Wn(a) : null, o = a ? yt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case jn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case Vr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case Da:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case br:
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
  var u = t ? hg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case yo:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case gt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function gg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yg(e) {
  return Object.assign({}, gg(), e);
}
function bg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function sd(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Jh : i, u = r.rootBoundary, d = u === void 0 ? ad : u, v = r.elementContext, f = v === void 0 ? tt : v, m = r.altBoundary, h = m === void 0 ? !1 : m, g = r.padding, y = g === void 0 ? 0 : g, w = yg(typeof y != "number" ? y : bg(y, go)), V = f === tt ? Qh : tt, S = e.rects.popper, T = e.elements[h ? V : f], E = pg(Aa(T) ? T : T.contextElement || Er(e.elements.popper), s, d, l), P = _a(e.elements.reference), I = ld({
    reference: P,
    element: S,
    strategy: "absolute",
    placement: t
  }), b = ui(Object.assign({}, S, I)), M = f === tt ? b : P, D = {
    top: E.top - M.top + w.top,
    bottom: M.bottom - E.bottom + w.bottom,
    left: E.left - M.left + w.left,
    right: M.right - E.right + w.right
  }, C = e.modifiersData.offset;
  if (f === tt && C) {
    var $ = C[t];
    Object.keys(D).forEach(function(L) {
      var K = [Da, Vr].indexOf(L) >= 0 ? 1 : -1, J = [jn, Vr].indexOf(L) >= 0 ? "y" : "x";
      D[L] += $[J] * K;
    });
  }
  return D;
}
function wg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? td : s, d = yt(a), v = d ? i ? Tl : Tl.filter(function(h) {
    return yt(h) === d;
  }) : go, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(h, g) {
    return h[g] = sd(e, {
      placement: g,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Wn(g)], h;
  }, {});
  return Object.keys(m).sort(function(h, g) {
    return m[h] - m[g];
  });
}
function Cg(e) {
  if (Wn(e) === ho)
    return [];
  var n = jt(e);
  return [Pl(e), n, Pl(n)];
}
function Sg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, h = m === void 0 ? !0 : m, g = r.allowedAutoPlacements, y = n.options.placement, w = Wn(y), V = w === y, S = s || (V || !h ? [jt(y)] : Cg(y)), T = [y].concat(S).reduce(function(le, de) {
      return le.concat(Wn(de) === ho ? wg(n, {
        placement: de,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : de);
    }, []), E = n.rects.reference, P = n.rects.popper, I = /* @__PURE__ */ new Map(), b = !0, M = T[0], D = 0; D < T.length; D++) {
      var C = T[D], $ = Wn(C), L = yt(C) === yo, K = [jn, Vr].indexOf($) >= 0, J = K ? "width" : "height", Y = sd(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), j = K ? L ? Da : br : L ? Vr : jn;
      E[J] > P[J] && (j = jt(j));
      var se = jt(j), q = [];
      if (o && q.push(Y[$] <= 0), i && q.push(Y[j] <= 0, Y[se] <= 0), q.every(function(le) {
        return le;
      })) {
        M = C, b = !1;
        break;
      }
      I.set(C, q);
    }
    if (b)
      for (var F = h ? 3 : 1, N = function(de) {
        var we = T.find(function(Oe) {
          var dn = I.get(Oe);
          if (dn)
            return dn.slice(0, de).every(function(re) {
              return re;
            });
        });
        if (we)
          return M = we, "break";
      }, W = F; W > 0; W--) {
        var ee = N(W);
        if (ee === "break")
          break;
      }
    n.placement !== M && (n.modifiersData[a]._skip = !0, n.placement = M, n.reset = !0);
  }
}
const kg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Sg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $g(e, n, r) {
  var a = Wn(e), t = [br, jn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [br, Da].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Tg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = td.reduce(function(d, v) {
    return d[v] = $g(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const Pg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tg
};
function Og(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Vg(e) {
  return e === Bn(e) || !$n(e) ? Ri(e) : Og(e);
}
function Mg(e) {
  var n = e.getBoundingClientRect(), r = Qa(n.width) / e.offsetWidth || 1, a = Qa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Bg(e, n, r) {
  r === void 0 && (r = !1);
  var a = $n(n), t = $n(n) && Mg(n), o = Er(n), l = _a(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Hn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fi(o)) && (i = Vg(n)), $n(n) ? (s = _a(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Ui(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Eg(e) {
  var n = _a(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Ig(e) {
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
function Ng(e) {
  var n = Ig(e);
  return li.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Dg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function rr(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Ir = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ag = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Bl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function zg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Bl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(rr(Ir, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(rr(Ir, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          li.indexOf(n.phase) < 0 && console.error(rr(Ir, n.name, '"phase"', "either " + li.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(rr(Ir, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(rr(Ir, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(rr(Ir, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(rr(Ir, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Bl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(rr(Ag, String(n.name), a, a));
      });
    });
  });
}
function Lg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Rg(e) {
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
var El = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Ug = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Il = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Nl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Fg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Il : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Il, o),
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
        var V = typeof w == "function" ? w(d.options) : w;
        g(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: Aa(i) ? dt(i) : i.contextElement ? dt(i.contextElement) : [],
          popper: dt(s)
        };
        var S = Ng(Rg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = Lg([].concat(S, d.options.modifiers), function(C) {
            var $ = C.name;
            return $;
          });
          if (zg(T), Wn(d.options.placement) === ho) {
            var E = d.orderedModifiers.find(function(C) {
              var $ = C.name;
              return $ === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = zn(s), I = P.marginTop, b = P.marginRight, M = P.marginBottom, D = P.marginLeft;
          [I, b, M, D].some(function(C) {
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
          var w = d.elements, V = w.reference, S = w.popper;
          if (!Nl(V, S)) {
            process.env.NODE_ENV !== "production" && console.error(El);
            return;
          }
          d.rects = {
            reference: Bg(V, Hi(S), d.options.strategy === "fixed"),
            popper: Eg(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var T = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(Ug);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var P = d.orderedModifiers[E], I = P.fn, b = P.options, M = b === void 0 ? {} : b, D = P.name;
            typeof I == "function" && (d = I({
              state: d,
              options: M,
              name: D,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Dg(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Nl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(El), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function h() {
      d.orderedModifiers.forEach(function(y) {
        var w = y.name, V = y.options, S = V === void 0 ? {} : V, T = y.effect;
        if (typeof T == "function") {
          var E = T({
            state: d,
            name: w,
            instance: m,
            options: S
          }), P = function() {
          };
          v.push(E || P);
        }
      });
    }
    function g() {
      v.forEach(function(y) {
        return y();
      }), v = [];
    }
    return m;
  };
}
var zt = {
  passive: !0
};
function Hg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Bn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, zt);
  }), i && s.addEventListener("resize", r.update, zt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, zt);
    }), i && s.removeEventListener("resize", r.update, zt);
  };
}
const Yg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Hg,
  data: {}
};
function jg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ld({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Wg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: jg,
  data: {}
};
var Gg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Qa(n * t) / t || 0,
    y: Qa(r * t) / t || 0
  };
}
function Dl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, h = l.y, g = h === void 0 ? 0 : h, y = typeof d == "function" ? d({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = y.x, g = y.y;
  var w = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), S = br, T = jn, E = window;
  if (u) {
    var P = Hi(r), I = "clientHeight", b = "clientWidth";
    if (P === Bn(r) && (P = Er(r), zn(P).position !== "static" && i === "absolute" && (I = "scrollHeight", b = "scrollWidth")), P = P, t === jn || (t === br || t === Da) && o === gt) {
      T = Vr;
      var M = v && P === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[I]
      );
      g -= M - a.height, g *= s ? 1 : -1;
    }
    if (t === br || (t === jn || t === Vr) && o === gt) {
      S = Da;
      var D = v && P === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[b]
      );
      m -= D - a.width, m *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && Gg), $ = d === !0 ? qg({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = $.x, g = $.y, s) {
    var L;
    return Object.assign({}, C, (L = {}, L[T] = V ? "0" : "", L[S] = w ? "0" : "", L.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", L));
  }
  return Object.assign({}, C, (n = {}, n[T] = V ? g + "px" : "", n[S] = w ? m + "px" : "", n.transform = "", n));
}
function Xg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = zn(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Wn(n.placement),
    variation: yt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Dl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Dl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Kg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Xg,
  data: {}
};
function Zg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !$n(o) || !Hn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Jg(e) {
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
      !$n(t) || !Hn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Qg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zg,
  effect: Jg,
  requires: ["computeStyles"]
};
var _g = [Yg, Wg, Kg, Qg], xg = /* @__PURE__ */ Fg({
  defaultModifiers: _g
});
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, no.apply(this, arguments);
}
function Al(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Al(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Al(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function ud(e) {
  var n = B(null), r = B(null), a = B({
    width: 0,
    height: 0
  }), t = Os(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, I) {
      I ? (S(), k(e.onOpen)) : k(e.onClose);
    }
  }), {
    zIndex: o
  } = Vt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: P,
      height: I
    } = Na(n.value);
    a.value = {
      width: Ye(P),
      height: Ye(I)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, v = /* @__PURE__ */ function() {
    var P = zl(function* () {
      e.trigger === "hover" && (s = !1, yield Rn(), !i && E());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var P = zl(function* () {
      e.trigger === "hover" && (i = !1, yield Rn(), !s && E());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), h = () => {
    T();
  }, g = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  }, y = () => {
    e.trigger === "click" && g();
  }, w = () => {
    u();
    var P = {
      x: Ye(e.offsetX),
      y: Ye(e.offsetY)
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
      skidding: I,
      distance: b
    } = w(), M = [no({}, kg, {
      enabled: t.value
    }), no({}, Pg, {
      options: {
        offset: [I, b]
      }
    })];
    return {
      placement: P,
      modifiers: M
    };
  }, S = () => {
    l.setOptions(V());
  }, T = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, k(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  };
  return Ts(n, "click", y), oe(() => e.offsetX, S), oe(() => e.offsetY, S), oe(() => e.placement, S), oe(() => e.disabled, E), ro(() => {
    var P, I = e.reference ? (P = n.value) == null ? void 0 : P.querySelector(e.reference) : n.value;
    l = xg(I ?? n.value, r.value, V());
  }), nt(() => {
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
    handlePopoverClose: g,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: S,
    open: T,
    close: E
  };
}
function ey(e) {
  return ["click", "hover"].includes(e);
}
function ny(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function ry(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var ay = {
  type: {
    type: String,
    default: "default",
    validator: ry
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
    validator: ey
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ny
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: ty,
  classes: oy
} = _("tooltip");
function iy(e, n) {
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
    [H(e.$slots, "default"), (p(), ye(
      La,
      {
        to: e.teleport
      },
      [Z(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed,
          persisted: ""
        },
        {
          default: ve(() => [ke(A(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
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
            [A(
              "div",
              {
                style: G({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [H(e.$slots, "content", {}, () => [Ce(
                ne(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[$r, e.show]])]),
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
var dd = Q({
  name: "VarTooltip",
  props: ay,
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
    } = ud(e);
    return {
      toSizeUnit: ge,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ty,
      classes: oy,
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
dd.render = iy;
const wr = dd;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var KS = wr;
function ly(e) {
  return ["click"].includes(e);
}
var sy = {
  expandTrigger: {
    type: String,
    validator: ly
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
var {
  n: uy,
  classes: dy
} = _("ellipsis"), vy = {
  key: 0
};
function fy(e, n) {
  var r = ae("var-tooltip");
  return p(), ye(
    r,
    $t(ao(e.tooltip)),
    {
      content: ve(() => [H(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), O(
          "span",
          vy,
          ne(e.tooltip.content),
          1
          /* TEXT */
        )) : H(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [A(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: G(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [H(e.$slots, "default")],
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
var vd = Q({
  name: "VarEllipsis",
  components: {
    VarTooltip: wr
  },
  props: sy,
  setup(e) {
    var n = B(!1), r = z(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = z(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : di({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: uy,
      classes: dy,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
vd.render = fy;
const _r = vd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var ZS = _r;
function cy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function my(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function py(e) {
  return ["click", "hover"].includes(e);
}
var hy = {
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
    validator: tu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: cy
  },
  direction: {
    type: String,
    default: "top",
    validator: my
  },
  trigger: {
    type: String,
    default: "click",
    validator: py
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
  onClick: U(),
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:active": U()
};
function Ll(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  classes: Rl,
  n: vn
} = _("fab");
const xr = Q({
  name: "VarFab",
  inheritAttrs: !1,
  props: hy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Os(e, "active"), o = B(null), {
      disabled: l
    } = io(), i = (f, m, h) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (h === 0) {
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
    }) : null : ke(Z(en, {
      "var-fab-cover": !0,
      class: vn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Z(Pe, {
        "var-fab-cover": !0,
        class: Rl([t.value, vn("trigger-active-icon"), vn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: vn("--trigger-icon-animation")
      }, null)]
    }), [[$r, e.show]]), v = () => {
      var f, m, h = Ps((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return Z("div", Ee({
        class: Rl(vn(), vn("--position-" + e.position), vn("--direction-" + e.direction), [e.fixed, vn("--fixed"), vn("--absolute")], [e.safeArea, vn("--safe-area")]),
        style: {
          zIndex: R(e.zIndex),
          top: ge(e.top),
          bottom: ge(e.bottom),
          left: ge(e.left),
          right: ge(e.right)
        },
        ref: o,
        onClick: (g) => i(g, !t.value, h.length),
        onMouseleave: () => s(!1, h.length),
        onMouseenter: () => s(!0, h.length)
      }, a), [Z(Le, {
        name: vn("--active-transition")
      }, Ll(f = d()) ? f : {
        default: () => [f]
      }), Z(Le, {
        name: vn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Z("div", {
          class: vn("actions"),
          onClick: (g) => g.stopPropagation()
        }, [h.map((g) => Z("div", {
          class: vn("action")
        }, [g]))]), [[$r, e.show && t.value && h.length]])]
      })]);
    };
    return oe(() => e.trigger, () => {
      t.value = !1;
    }), oe(() => e.disabled, () => {
      t.value = !1;
    }), Ts(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Z(La, {
          to: f,
          disabled: l.value
        }, Ll(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
var JS = xr;
function gy(e) {
  return ["start", "end"].includes(e);
}
var yy = {
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
    validator: gy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Ul(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function by(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: wy
} = _("form");
function Cy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var fd = Q({
  name: "VarForm",
  props: yy,
  setup(e) {
    var n = z(() => e.disabled), r = z(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Mm(), o = (d) => {
      setTimeout(() => {
        var v = Tr(d), f = v === window ? 0 : rl(v), m = rl(d) - f - Ye(e.scrollToErrorOffsetY);
        mt(v, {
          top: m,
          animation: Bo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = by(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: w
          } = y;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = jv(v, (y) => y === !1, e.scrollToError), m = f > -1;
          if (m) {
            var h, g = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(g);
          }
          return !m;
        }
        return v.every((y) => y === !0);
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
      n: wy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
fd.render = Cy;
const Gn = fd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
Gn.useValidation = Vn;
Gn.useForm = Mn;
var QS = Gn;
function Sy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ky = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Sy,
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
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  n: $y,
  classes: Ty
} = _("image"), Py = ["alt", "title", "lazy-error", "lazy-loading"], Oy = ["alt", "title", "src"];
function Vy(e, n) {
  var r = Ie("lazy"), a = Ie("ripple");
  return ke((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((p(), O(
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
      Py
    )), [[r, e.src]]) : (p(), O(
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
      Oy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var cd = Q({
  name: "VarImage",
  directives: {
    Lazy: pt,
    Ripple: We
  },
  props: ky,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && k(i, t), o._lazy.state === "error" && k(s, t)) : k(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && k(l, t);
    }, a = (t) => {
      k(e.onClick, t);
    };
    return {
      n: $y,
      classes: Ty,
      toSizeUnit: ge,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
cd.render = Vy;
const ea = cd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var _S = ea, md = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function My() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(md);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var pd = {
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
  onChange: U()
};
function Fl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function By(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Fl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Fl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var Ey = 250, Iy = 20, {
  n: Ny,
  classes: Dy
} = _("swipe"), Ay = ["onClick"];
function zy(e, n) {
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
      [H(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), H(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), O(
        Ve,
        null,
        Ue(e.length, (r, a) => (p(), O(
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
          Ay
        ))),
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
var hd = Q({
  name: "VarSwipe",
  props: pd,
  setup(e) {
    var n = B(null), r = B(0), a = z(() => e.vertical), t = B(0), o = B(0), l = B(!1), i = B(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = My(), v = !1, f = !1, m = -1, h, g, y, w, V, S = (N) => s.find((W) => {
      var {
        index: ee
      } = W;
      return ee.value === N;
    }), T = () => {
      e.loop && (o.value >= 0 && S(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && S(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, E = (N) => {
      var W = on(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: ee
      } = e;
      return W <= -1 ? ee ? -1 : 0 : W >= d.value ? ee ? d.value : d.value - 1 : W;
    }, P = (N) => {
      var {
        loop: W
      } = e;
      return N === -1 ? W ? d.value - 1 : 0 : N === d.value ? W ? 0 : d.value - 1 : N;
    }, I = (N) => {
      var {
        loop: W
      } = e;
      return N < 0 ? W ? d.value - 1 : 0 : N > d.value - 1 ? W ? 0 : d.value - 1 : N;
    }, b = (N) => {
      var W = o.value >= r.value, ee = o.value <= -t.value, le = 0, de = -(t.value - r.value);
      l.value = !0, (W || ee) && (l.value = !0, o.value = ee ? le : de, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), oo(() => {
        l.value = !1, k(N);
      });
    }, M = () => {
      v || (i.value = I(R(e.initialIndex)), v = !0);
    }, D = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (C(), m = window.setTimeout(() => {
        j(), D();
      }, R(N)));
    }, C = () => {
      m && clearTimeout(m);
    }, $ = (N, W) => {
      if (N > W && N > 10)
        return "horizontal";
      if (W > N && W > 10)
        return "vertical";
    }, L = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: W,
          clientY: ee
        } = N.touches[0];
        h = W, g = ee, y = performance.now(), f = !0, C(), b(() => {
          l.value = !0;
        });
      }
    }, K = (N) => {
      var {
        touchable: W,
        vertical: ee
      } = e;
      if (!(!f || !W)) {
        var {
          clientX: le,
          clientY: de
        } = N.touches[0], we = Math.abs(le - h), Oe = Math.abs(de - g), dn = $(we, Oe), re = ee ? "vertical" : "horizontal";
        if (dn === re) {
          N.preventDefault();
          var ue = w !== void 0 ? le - w : 0, me = V !== void 0 ? de - V : 0;
          w = le, V = de, o.value += ee ? me : ue, T();
        }
      }
    }, J = () => {
      if (f) {
        var {
          vertical: N,
          onChange: W
        } = e, ee = N ? V < g : w < h, le = Math.abs(N ? g - V : h - w), de = performance.now() - y <= Ey && le >= Iy, we = de ? E(ee ? i.value + 1 : i.value - 1) : E();
        f = !1, l.value = !1, w = void 0, V = void 0, o.value = we * -r.value;
        var Oe = i.value;
        i.value = P(we), D(), Oe !== i.value && k(W, i.value);
      }
    }, Y = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), D(), setTimeout(() => {
        l.value = !1;
      }));
    }, j = (N) => {
      if (!(d.value <= 1)) {
        M();
        var {
          loop: W,
          onChange: ee
        } = e, le = i.value;
        i.value = I(le + 1), (N == null ? void 0 : N.event) !== !1 && k(ee, i.value), b(() => {
          if (le === d.value - 1 && W) {
            S(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          le !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, se = (N) => {
      if (!(d.value <= 1)) {
        M();
        var {
          loop: W,
          onChange: ee
        } = e, le = i.value;
        i.value = I(le - 1), (N == null ? void 0 : N.event) !== !1 && k(ee, i.value), b(() => {
          if (le === 0 && W) {
            S(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          le !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, q = (N, W) => {
      if (!(d.value <= 1 || N === i.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var ee = N > i.value ? j : se, le = Math.abs(N - i.value);
        Array.from({
          length: le
        }).forEach((de, we) => {
          ee({
            event: we === le - 1 ? W == null ? void 0 : W.event : !1
          });
        });
      }
    }, F = {
      size: r,
      vertical: a
    };
    return u(F), oe(() => d.value, /* @__PURE__ */ By(function* () {
      yield Rn(), M(), Y();
    })), Mr(Y), er(C), nt(C), Jn(() => window, "resize", Y), {
      n: Ny,
      classes: Dy,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: L,
      handleTouchmove: K,
      handleTouchend: J,
      next: j,
      prev: se,
      to: q,
      resize: Y,
      toNumber: R
    };
  }
});
hd.render = zy;
const qn = hd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var xS = qn;
function Ly() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = sn(md);
  return e || On("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: Ry
} = _("swipe-item");
function Uy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var gd = Q({
  name: "VarSwipeItem",
  setup() {
    var e = B(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Ly(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Ry,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
gd.render = Uy;
const Xn = gd;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ek = Xn;
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
var Fy = vi({
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
  "onUpdate:show": U()
}, Je(pd, ["loop", "indicator", "onChange"]), Je(Ot, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Hl,
  classes: Hy
} = _("image-preview"), Yl = 12, jl = 200, Yy = 350, Wl = 200, jy = ["src", "alt"];
function Wy(e, n) {
  var r = ae("var-swipe-item"), a = ae("var-swipe"), t = ae("var-icon"), o = ae("var-popup");
  return p(), ye(
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
      default: ve(() => [Z(
        a,
        Ee({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(p(!0), O(
            Ve,
            null,
            Ue(e.images, (l) => (p(), ye(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [A(
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
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    jy
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
          indicator: ve((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [H(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (p(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ne(i + 1) + " / " + ne(s),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), H(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), ye(
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
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("extra"))
        },
        [H(e.$slots, "extra")],
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
var yd = Q({
  name: "VarImagePreview",
  components: {
    VarSwipe: qn,
    VarSwipeItem: Xn,
    VarPopup: kn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Fy,
  setup(e) {
    var n = B(!1), r = z(() => {
      var {
        images: D,
        current: C
      } = e, $ = D.findIndex((L) => L === C);
      return $ >= 0 ? $ : 0;
    }), a = B(1), t = B(0), o = B(0), l = B(void 0), i = B(void 0), s = B(!0), u = null, d = null, v = null, f = (D, C) => {
      var {
        clientX: $,
        clientY: L
      } = D, {
        clientX: K,
        clientY: J
      } = C;
      return Math.abs(Math.sqrt(Math.pow(K - $, 2) + Math.pow(J - L, 2)));
    }, m = (D, C) => ({
      clientX: D.clientX,
      clientY: D.clientY,
      timestamp: Date.now(),
      target: C
    }), h = () => {
      a.value = R(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Wl);
    }, g = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, y = (D) => d ? f(d, D) <= Yl && D.timestamp - d.timestamp <= jl && d.target === D.target : !1, w = (D) => !D || !u || !d ? !1 : f(u, d) <= Yl && Date.now() - d.timestamp < Yy && (D === u.target || D.parentNode === u.target), V = (D) => {
      v = window.setTimeout(() => {
        w(D.target) && M(), u = null;
      }, jl);
    }, S = (D) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = D, $ = m(C[0], D.currentTarget);
      if (u = $, y($)) {
        a.value > 1 ? g() : h();
        return;
      }
      d = $;
    }, T = (D) => {
      var {
        offsetWidth: C,
        offsetHeight: $
      } = D, {
        naturalWidth: L,
        naturalHeight: K
      } = D.querySelector("." + Hl("image"));
      return {
        width: C,
        height: $,
        imageRadio: K / L,
        rootRadio: $ / C,
        zoom: R(e.zoom)
      };
    }, E = (D) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: L,
        width: K,
        height: J
      } = T(D);
      if (!$)
        return 0;
      var Y = $ > L ? J / $ : K;
      return Math.max(0, (C * Y - K) / 2) / C;
    }, P = (D) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: L,
        width: K,
        height: J
      } = T(D);
      if (!$)
        return 0;
      var Y = $ > L ? J : K * $;
      return Math.max(0, (C * Y - J) / 2) / C;
    }, I = (D, C, $) => D + C >= $ ? $ : D + C <= -$ ? -$ : D + C, b = (D) => {
      if (d) {
        var C = D.currentTarget, {
          touches: $
        } = D, L = m($[0], C);
        if (a.value > 1) {
          var K = L.clientX - d.clientX, J = L.clientY - d.clientY, Y = E(C), j = P(C);
          t.value = I(t.value, K, Y), o.value = I(o.value, J, j);
        }
        d = L;
      }
    }, M = () => {
      if (a.value > 1) {
        g(), setTimeout(() => k(e["onUpdate:show"], !1), Wl);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return oe(() => e.show, (D) => {
      n.value = D;
    }, {
      immediate: !0
    }), {
      n: Hl,
      classes: Hy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: S,
      handleTouchmove: b,
      handleTouchend: V,
      close: M
    };
  }
});
yd.render = Wy;
const Cr = yd;
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
var sr, ft = {};
function Gy(e) {
  return e === void 0 && (e = {}), je(e) ? vt({}, ft, {
    images: [e]
  }) : Te(e) ? vt({}, ft, {
    images: e
  }) : vt({}, ft, e);
}
function Ln(e) {
  if (Pt()) {
    Ln.close();
    var n = Gy(e), r = Ae(n);
    r.teleport = "body", sr = r;
    var {
      unmountInstance: a
    } = at(Cr, r, {
      onClose: () => k(r.onClose),
      onClosed: () => {
        k(r.onClosed), a(), sr === r && (sr = null);
      },
      onRouteChange: () => {
        a(), sr === r && (sr = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Ln.close = () => {
  if (sr != null) {
    var e = sr;
    sr = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
Ln.setDefaultOptions = (e) => {
  ft = e;
};
Ln.resetDefaultOptions = () => {
  ft = {};
};
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
Ln.install = function(e) {
  e.component(Cr.name, Cr);
};
Ln.Component = Cr;
var nk = Cr, Wt = {
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
  onScroll: U()
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
function ql(e) {
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
  n: qy,
  classes: Xy
} = _("sticky");
function Ky(e, n) {
  return p(), O(
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
      [H(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var bd = Q({
  name: "VarSticky",
  props: Wt,
  setup(e) {
    var n = B(null), r = B(null), a = B(!1), t = B("0px"), o = B("0px"), l = B("auto"), i = B("auto"), s = B("auto"), u = B("auto"), d = z(() => !e.disabled && e.cssMode), v = z(() => !e.disabled && !e.cssMode && a.value), f = z(() => Ye(e.offsetTop)), m, h = () => {
      var {
        cssMode: S,
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
        var I = r.value, b = n.value, {
          top: M,
          left: D
        } = b.getBoundingClientRect(), C = M - E;
        return C <= f.value ? (S || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = E + f.value + "px", o.value = D + "px", s.value = I.offsetWidth + "px", u.value = I.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: C,
          isFixed: !1
        });
      }
    }, g = () => {
      if (m) {
        var S = h();
        S && k(e.onScroll, S.offsetTop, S.isFixed);
      }
    }, y = /* @__PURE__ */ function() {
      var S = ql(function* () {
        a.value = !1, yield _v(), h();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var S = ql(function* () {
        yield Rn(), m = Tr(n.value), m !== window && m.addEventListener("scroll", g), g();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", g);
    };
    return oe(() => e.disabled, y), ln(w), nt(V), er(V), Jn(() => window, "scroll", g), Jn(() => window, "resize", y), {
      n: qy,
      classes: Xy,
      resize: y,
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
      toNumber: R
    };
  }
});
bd.render = Ky;
const Kn = bd;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var rk = Kn, wd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Zy() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(wd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Jy() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(wd);
  return r || On("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var Qy = {
  index: {
    type: [Number, String]
  }
}, {
  n: _y,
  classes: xy
} = _("index-anchor");
function eb(e, n) {
  return p(), ye(
    rt(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [A(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [H(e.$slots, "default", {}, () => [Ce(
          ne(e.name),
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
var Cd = Q({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Kn
  },
  inheritAttrs: !1,
  props: Qy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Jy(), t = B(0), o = B(!1), l = z(() => e.index), i = B(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, h = (y) => {
      o.value = y;
    }, g = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: h
    };
    return a(g), {
      n: _y,
      classes: xy,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Le
    };
  }
});
Cd.render = eb;
const na = Cd;
na.install = function(e) {
  e.component(na.name, na);
};
var ak = na, nb = {
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
  onClick: U(),
  onChange: U()
};
function Xl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Lt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Xl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Xl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: rb,
  classes: ab
} = _("index-bar"), tb = ["onClick"];
function ob(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [H(e.$slots, "default"), A(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), O(
        Ve,
        null,
        Ue(e.anchorNameList, (r) => (p(), O(
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
          ne(r),
          15,
          tb
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
var Sd = Q({
  name: "VarIndexBar",
  props: nb,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Zy(), t = B(""), o = B(null), l = B([]), i = B(), s = z(() => e.sticky), u = z(() => e.stickyCssMode || e.cssMode), d = z(() => Ye(e.stickyOffsetTop)), v = z(() => e.zIndex), f = null, m = !1, h = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(h);
    var g = (I, b) => {
      var M = Ci(I) ? I.name.value : I;
      M === i.value || M === void 0 || (i.value = M, (b == null ? void 0 : b.event) !== !1 && k(e.onChange, M));
    }, y = () => {
      if (Si(f))
        return 0;
      var {
        top: I
      } = pn(f), {
        scrollTop: b
      } = f, {
        top: M
      } = pn(o.value);
      return b - I + M;
    }, w = () => {
      var I = ct(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, M = y();
      r.forEach((D, C) => {
        var $ = D.ownTop.value, L = I - $ + d.value - M, K = C === r.length - 1 ? b : r[C + 1].ownTop.value - D.ownTop.value;
        D.setDisabled(!0), L >= 0 && L < K && t.value === "" && (D.setDisabled(!1), g(D));
      });
    }, V = /* @__PURE__ */ function() {
      var I = Lt(function* (b) {
        var {
          anchorName: M,
          manualCall: D = !1,
          options: C
        } = b;
        if (D && k(e.onClick, M), !(M === i.value && !m)) {
          var $ = r.find((Y) => {
            var {
              name: j
            } = Y;
            return M === j.value;
          });
          if ($) {
            var L = y(), K = $.ownTop.value - d.value + L, J = $i(f);
            t.value = M, g(M, C), yield mt(f, {
              left: J,
              top: K,
              animation: hs,
              duration: R(e.duration)
            }), oo(() => {
              t.value = "";
            });
          }
        }
      });
      return function(M) {
        return I.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var I = Lt(function* () {
        yield Rn(), f = Tr(o.value);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), T = () => {
      f.addEventListener("scroll", w);
    }, E = () => {
      f.removeEventListener("scroll", w);
    }, P = (I, b) => {
      Sn(() => V({
        anchorName: I,
        options: b
      }));
    };
    return oe(() => n.value, /* @__PURE__ */ Lt(function* () {
      yield Rn(), r.forEach((I) => {
        var {
          name: b,
          setOwnTop: M
        } = I;
        b.value && l.value.push(b.value), M();
      });
    })), ln(/* @__PURE__ */ Lt(function* () {
      yield S(), T();
    })), Ct(E), er(() => {
      m = !0, E();
    }), Mr(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: rb,
      classes: ab,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: R,
      scrollTo: P,
      anchorClick: V
    };
  }
});
Sd.render = ob;
const ra = Sd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var tk = ra;
function ib(e) {
  return ["small", "normal"].includes(e);
}
function lb(e) {
  return ["outlined", "standard"].includes(e);
}
var Yi = {
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
    validator: ib
  },
  variant: {
    type: String,
    default: "standard",
    validator: lb
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
  onClick: U(),
  onClear: U()
}, {
  n: Kl,
  classes: sb
} = _("field-decorator"), ub = ["for"];
function db(e, n) {
  var r = ae("var-icon");
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
        ref: "controllerEl",
        style: G({
          color: e.color,
          cursor: e.cursor,
          overflow: e.isFloating ? "visible" : "hidden"
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [H(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          ref: "middleEl",
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [H(e.$slots, "default")],
        2
        /* CLASS */
      ), (e.hint || e.alwaysCustomPlaceholder) && e.placeholderTransform ? (p(), O(
        "label",
        {
          key: 0,
          class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
          style: G({
            color: e.color,
            transform: e.placeholderTransform,
            maxWidth: e.placeholderMaxWidth
          }),
          for: e.id
        },
        [A(
          "span",
          null,
          ne(e.placeholder),
          1
          /* TEXT */
        )],
        14,
        ub
      )) : x("v-if", !0), e.variant === "outlined" ? (p(), O(
        "span",
        {
          key: 1,
          ref: "placeholderTextEl",
          class: c([e.n("placeholder-text"), e.n("$--ellipsis")])
        },
        ne(e.placeholder),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), ye(
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
        )) : x("v-if", !0), H(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), O(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), O(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: G({
            borderColor: e.color
          })
        },
        [A(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: G({
              width: e.legendWidth
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (p(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var kd = Q({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Pe
  },
  props: Yi,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(""), o = B(""), l = B(""), i = z(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), s = z(() => e.hint && (!fr(e.value) || e.isFocus)), u = () => {
      var {
        hint: m,
        value: h,
        composing: g
      } = e;
      if (!m && (!fr(h) || g))
        return Kl("--placeholder-hidden");
    }, d = () => {
      var {
        size: m,
        hint: h,
        placeholder: g,
        variant: y
      } = e;
      if (!s.value || !g) {
        var w = pn(n.value), V = pn(r.value), S = V.left - w.left + "px";
        o.value = h ? "translate(" + S + ", calc(var(--field-decorator-" + y + "-" + m + "-placeholder-translate-y) + var(--field-decorator-middle-offset-y))) scale(1)" : "translate(" + S + ", -50%)", l.value = V.width + "px";
        return;
      }
      var T = Na(n.value), E = y === "outlined" ? "-50%" : "0";
      if (o.value = "translate(" + T.paddingLeft + ", " + E + ") scale(0.75)", y === "outlined") {
        var P = Na(a.value), I = "var(--field-decorator-outlined-" + m + "-placeholder-space)";
        t.value = "calc(" + P.width + " * 0.75 + " + I + " * 2)", l.value = "calc((100% - var(--field-decorator-outlined-" + m + "-padding-left) - var(--field-decorator-outlined-" + m + "-padding-right)) * 1.33)";
      } else
        l.value = "133%";
    }, v = (m) => {
      k(e.onClear, m);
    }, f = (m) => {
      k(e.onClick, m);
    };
    return kt(d), ln(d), Jn(() => window, "resize", d), {
      controllerEl: n,
      middleEl: r,
      placeholderTextEl: a,
      placeholderTransform: o,
      placeholderMaxWidth: l,
      color: i,
      legendWidth: t,
      isFloating: s,
      computePlaceholderState: u,
      n: Kl,
      classes: sb,
      isEmpty: fr,
      handleClear: v,
      handleClick: f
    };
  }
});
kd.render = db;
const $d = kd;
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
function vb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var fb = fi({
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
    validator: vb
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
  enterkeyhint: {
    type: String
  },
  onFocus: U(),
  onBlur: U(),
  onInput: U(),
  onChange: U(),
  onClear: U(),
  "onUpdate:modelValue": U()
}, Je(Yi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: cb,
  classes: mb
} = _("input"), pb = ["placeholder", "enterkeyhint"], hb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], gb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function yb(e, n) {
  var r = ae("var-field-decorator"), a = ae("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Z(
      r,
      $t(ao({
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
        "prepend-icon": ve(() => [H(e.$slots, "prepend-icon")]),
        "append-icon": ve(() => [H(e.$slots, "append-icon")]),
        default: ve(() => [e.normalizedType === "password" ? (p(), O(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete")),
            placeholder: e.hint ? void 0 : e.placeholder,
            style: G({
              "--input-placeholder-color": e.placeholderColor
            }),
            enterkeyhint: e.enterkeyhint
          },
          null,
          14,
          pb
        )) : x("v-if", !0), e.textarea ? (p(), O(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.normalizedType,
            value: e.modelValue,
            placeholder: e.hint ? void 0 : e.placeholder,
            maxlength: e.maxlength,
            rows: e.rows,
            enterkeyhint: e.enterkeyhint,
            inputmode: e.type === "number" ? "numeric" : void 0,
            style: G({
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
          hb
        )) : (p(), O(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.normalizedType,
            value: e.modelValue,
            placeholder: e.hint ? void 0 : e.placeholder,
            maxlength: e.maxlength,
            enterkeyhint: e.enterkeyhint,
            inputmode: e.type === "number" ? "numeric" : void 0,
            style: G({
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
          gb
        ))]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ), Z(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[14] || (n[14] = Pn(() => {
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
var Td = Q({
  name: "VarInput",
  components: {
    VarFormDetails: _e,
    VarFieldDecorator: $d
  },
  props: fb,
  setup(e) {
    var n = B("var-input-" + et().uid), r = B(null), a = B(!1), t = B(!1), o = z(() => e.type === "number" ? "text" : e.type), l = z(() => {
      var {
        maxlength: q,
        modelValue: F
      } = e;
      return q ? fr(F) ? "0 / " + q : String(F).length + "/" + q : "";
    }), i = z(() => e.disabled || e.readonly ? "" : "text"), s = z(() => {
      var {
        hint: q,
        blurColor: F,
        focusColor: N
      } = e;
      if (!q)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? N || "var(--field-decorator-focus-color)" : F || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Mn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: h
    } = Vn(), g = (q) => {
      Ne(() => {
        var {
          validateTrigger: F,
          rules: N,
          modelValue: W
        } = e;
        f(F, q, N, W);
      });
    }, y = (q) => {
      a.value = !0, k(e.onFocus, q), g("onFocus");
    }, w = (q) => {
      a.value = !1, k(e.onBlur, q), g("onBlur");
    }, V = (q) => {
      var F = q.target, {
        value: N
      } = F;
      return e.type === "number" && (N = M(N)), C(D(N));
    }, S = () => {
      t.value = !0;
    }, T = (q) => {
      t.value && (t.value = !1, q.target.dispatchEvent(new Event("input")));
    }, E = (q) => {
      if (!t.value) {
        var F = V(q);
        k(e["onUpdate:modelValue"], F), k(e.onInput, F, q), g("onInput");
      }
    }, P = (q) => {
      var F = V(q);
      k(e.onChange, F, q), g("onChange");
    }, I = () => {
      var {
        disabled: q,
        readonly: F,
        clearable: N,
        onClear: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || q || F || !N || (k(e["onUpdate:modelValue"], ""), k(W, ""), g("onClear"));
    }, b = (q) => {
      var {
        disabled: F,
        onClick: N
      } = e;
      d != null && d.disabled.value || F || (k(N, q), g("onClick"));
    }, M = (q) => {
      var F = q.indexOf("-"), N = q.indexOf(".");
      return F > -1 && (q = F === 0 ? "-" + q.replace(/-/g, "") : q.replace(/-/g, "")), N > -1 && (q = q.slice(0, N + 1) + q.slice(N).replace(/\./g, "")), q.replace(/[^-0-9.]/g, "");
    }, D = (q) => e.modelModifiers.trim ? q.trim() : q, C = (q) => e.maxlength ? q.slice(0, R(e.maxlength)) : q, $ = (q) => {
      var {
        disabled: F,
        readonly: N
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || F || N || q.stopPropagation();
    };
    function L(q) {
      var {
        disabled: F
      } = e;
      d != null && d.disabled.value || F || q.target === r.value || (Y(), q.preventDefault());
    }
    var K = () => {
      k(e["onUpdate:modelValue"], ""), h();
    }, J = () => m(e.rules, e.modelValue), Y = () => {
      var q;
      (q = r.value) == null || q.focus();
    }, j = () => {
      r.value.blur();
    }, se = {
      reset: K,
      validate: J,
      resetValidation: h
    };
    return k(u, se), ln(() => {
      e.autofocus && Y();
    }), {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: v,
      placeholderColor: s,
      normalizedType: o,
      cursor: i,
      maxlengthText: l,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      n: cb,
      classes: mb,
      isEmpty: fr,
      handleFocus: y,
      handleBlur: w,
      handleInput: E,
      handleChange: P,
      handleClear: I,
      handleClick: b,
      handleTouchstart: $,
      handleCompositionStart: S,
      handleCompositionEnd: T,
      handleMousedown: L,
      validate: J,
      resetValidation: h,
      reset: K,
      focus: Y,
      blur: j
    };
  }
});
Td.render = yb;
const Sr = Td;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var ok = Sr;
function bb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Cb = {
  type: {
    type: String,
    default: "default",
    validator: bb
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
    validator: wb
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
  onClick: U()
}, {
  n: Sb,
  classes: kb
} = _("link");
function $b(e, n) {
  return p(), ye(
    rt(e.tag),
    Ee(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [H(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var Pd = Q({
  name: "VarLink",
  props: Cb,
  setup(e) {
    var n = z(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = z(() => {
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
      o || k(l, t);
    };
    return {
      n: Sb,
      classes: kb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ge
    };
  }
});
Pd.render = $b;
const aa = Pd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var ik = aa, Tb = {
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
  onLoad: U(),
  "onUpdate:loading": U(),
  "onUpdate:error": U()
}, Od = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Pb() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Od);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var Vd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Ob() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(Od);
  return n || On("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Vb() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(Vd);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function Mb() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(Vd);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
function Zl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Zl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Zl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Eb,
  classes: Ib
} = _("list");
function Nb(e, n) {
  var r = ae("var-loading"), a = Ie("ripple");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [H(e.$slots, "default"), e.loading ? H(e.$slots, "loading", {
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
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Z(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? H(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? H(e.$slots, "error", {
      key: 2
    }, () => [ke((p(), O(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [Ce(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : x("v-if", !0), A(
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
var Md = Q({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: Dn
  },
  props: Tb,
  setup(e) {
    var {
      tabItem: n,
      bindTabItem: r
    } = Mb(), a = B(null), t = B(null), o, l = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = pn(o), {
        bottom: v
      } = pn(t.value);
      return Math.floor(v) - Ye(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Bb(function* () {
        yield Ne(), !(e.loading || e.finished || e.error || (n == null ? void 0 : n.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return k(r, {}), n && oe(() => n.current.value, u), oe(() => [e.loading, e.error, e.finished], u), ln(() => {
      o = Tr(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), er(s), nt(s), {
      pack: Ze,
      listEl: a,
      detectorEl: t,
      dt: to,
      isNumber: on,
      load: l,
      check: u,
      n: Eb,
      classes: Ib
    };
  }
});
Md.render = Nb;
const ta = Md;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var lk = ta, Db = {
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
  classes: Ab,
  n: Jl
} = _("loading-bar");
const zb = Q({
  name: "VarLoadingBar",
  props: Db,
  setup(e) {
    return () => Z("div", {
      class: Ab(Jl(), [e.error, Jl("--error")]),
      style: {
        zIndex: bn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ge(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ge(e.top)
      }
    }, null);
  }
});
var Bd, Ed, wo, Id, Ql, Nd = {}, Lb = {
  value: 0,
  opacity: 0,
  error: !1
}, Qe = Ae(Lb), Rb = (e) => {
  Object.assign(Qe, e);
}, Ub = (e) => {
  Object.assign(Qe, e), Nd = e;
}, Fb = () => {
  Object.keys(Nd).forEach((e) => {
    Qe[e] !== void 0 && (Qe[e] = void 0);
  });
}, Dd = () => {
  Ql || (Ql = !0, at(zb, Qe));
}, ji = () => {
  Bd = window.setTimeout(() => {
    if (!(Qe.value >= 95)) {
      var e = Math.random();
      Qe.value < 70 && (e = Math.round(5 * Math.random())), Qe.value += e, ji();
    }
  }, 200);
}, Wi = () => {
  window.clearTimeout(Ed), window.clearTimeout(Bd), window.clearTimeout(wo), window.clearTimeout(Id);
}, Hb = () => {
  Wi(), Qe.error = !1, Qe.value = 0, Dd(), wo = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), ji();
}, Ad = () => {
  Wi(), Qe.value = 100, wo = window.setTimeout(() => {
    Qe.opacity = 0, Ed = window.setTimeout(() => {
      Qe.error = !1;
    }, 250);
  }, 300);
}, Yb = () => {
  Wi(), Qe.error = !0, Qe.value === 100 && (Qe.value = 0), Dd(), wo = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), ji(), Id = window.setTimeout(Ad, 300);
}, zd = {
  start: Hb,
  finish: Ad,
  error: Yb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Rb,
  setDefaultOptions: Ub,
  resetDefaultOptions: Fb
}, sk = zd;
const ci = zd;
function jb(e) {
  return ["click", "hover"].includes(e);
}
function Wb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Gb = {
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
    validator: jb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Wb
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: qb,
  classes: Xb
} = _("menu");
function Kb(e, n) {
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
    [H(e.$slots, "default"), (p(), ye(
      La,
      {
        to: e.teleport
      },
      [Z(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed,
          persisted: ""
        },
        {
          default: ve(() => [ke(A(
            "div",
            {
              ref: "popover",
              style: G({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
              onClick: n[0] || (n[0] = Pn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [H(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[$r, e.show]])]),
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
var Ld = Q({
  name: "VarMenu",
  props: Gb,
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
    } = ud(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: gn,
      toSizeUnit: ge,
      n: qb,
      classes: Xb,
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
Ld.render = Kb;
const Zn = Ld;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var uk = Zn, Rd = Symbol("SELECT_BIND_OPTION_KEY");
function Zb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = un(Rd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function Jb() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = sn(Rd);
  return r || On("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var Qb = {
  label: {},
  value: {}
}, {
  n: _b,
  classes: xb
} = _("option");
function e0(e, n) {
  var r = ae("var-checkbox"), a = Ie("ripple");
  return ke((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: G({
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
    ), e.multiple ? (p(), ye(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Pn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : x("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [H(e.$slots, "default", {}, () => [Ce(
        ne(e.label),
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
var Ud = Q({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: hr
  },
  props: Qb,
  setup(e) {
    var n = B(!1), r = z(() => n.value), a = z(() => e.label), t = z(() => e.value), {
      select: o,
      bindSelect: l
    } = Jb(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      n.value = !n.value, u(h);
    }, f = () => u(h), m = (g) => {
      n.value = g;
    }, h = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return oe([() => e.label, () => e.value], d), l(h), {
      n: _b,
      classes: xb,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Ud.render = e0;
const oa = Ud;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var dk = oa, n0 = {
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
  onClick: U(),
  "onUpdate:show": U()
};
function r0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  n: _l
} = _("overlay");
const ia = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: n0,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Vt(() => e.show, 1), {
      disabled: o
    } = io(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    lo(() => e.show, () => e.lockScroll);
    var i = () => Z("div", Ee({
      class: _l(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [k(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return Z(Le, {
        name: _l("--fade")
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
        return Z(La, {
          to: u,
          disabled: o.value
        }, r0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var vk = ia, a0 = {
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
  onChange: U(),
  "onUpdate:current": U(),
  "onUpdate:size": U()
}, {
  n: t0,
  classes: o0
} = _("pagination"), i0 = ["item-mode", "onClick"];
function l0(e, n) {
  var r = ae("var-icon"), a = ae("var-input"), t = ae("var-cell"), o = ae("var-menu"), l = Ie("ripple");
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [ke((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [H(e.$slots, "prev", {}, () => [Z(r, {
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
      [Z(
        a,
        {
          "var-pagination-cover": "",
          hint: !1,
          disabled: e.disabled,
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleCurrentValue = i),
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: n[3] || (n[3] = Zi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), A("span", null, [Ce(
        " / " + ne(e.pageCount) + " ",
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
      Ve,
      {
        key: 1
      },
      Ue(e.pageList, (i, s) => ke((p(), O(
        "li",
        {
          key: s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [Ce(
          ne(i),
          1
          /* TEXT */
        )],
        10,
        i0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [H(e.$slots, "next", {}, () => [Z(r, {
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
      [Z(
        o,
        {
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(p(!0), O(
            Ve,
            null,
            Ue(e.sizeOption, (i, s) => ke((p(), ye(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [Ce(
                  ne(i) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
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
          default: ve(() => [A(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = Pn(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [A(
              "span",
              null,
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
              /* TEXT */
            ), Z(
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (p(), O(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [Ce(
        ne(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Z(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: n[9] || (n[9] = Zi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (p(), O(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ne(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Fd = Q({
  name: "VarPagination",
  components: {
    VarMenu: Zn,
    VarIcon: Pe,
    VarCell: pr,
    VarInput: Sr
  },
  directives: {
    Ripple: We
  },
  props: a0,
  setup(e) {
    var n = B(!1), r = B(""), a = B("1"), t = B(!1), o = B(!1), l = B(R(e.current) || 1), i = B(R(e.size) || 10), s = B([]), u = z(() => Math.ceil(e.maxPagerCount / 2)), d = z(() => Math.ceil(R(e.total) / R(i.value))), v = z(() => {
      var T = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, R(e.total));
      return [T, E];
    }), f = z(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = (T, E) => on(T) ? !1 : E === 1 ? t.value : o.value, h = (T, E) => on(T) ? "basic" : E === 1 ? "head" : "tail", g = (T, E) => {
      if (!(T === l.value || e.disabled)) {
        if (T === "...") {
          l.value = E === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
        on(T) && (l.value = T);
      }
    }, y = () => {
      e.disabled || (n.value = !0);
    }, w = (T) => {
      i.value = T, n.value = !1;
      var E = V(l.value);
      a.value = String(E), l.value = E;
    }, V = (T) => T > d.value ? d.value : T < 1 ? 1 : T, S = (T, E, P) => {
      P.target.blur();
      var I = V(R(E));
      a.value = String(I), l.value = I, T === "quick" && (r.value = "");
    };
    return oe([() => e.current, () => e.size], (T) => {
      var [E, P] = T;
      l.value = R(E) || 1, i.value = R(P || 10);
    }), oe([l, i, d], (T, E) => {
      var [P, I, b] = T, [M, D] = E, C = [], {
        maxPagerCount: $,
        total: L,
        onChange: K
      } = e, J = Math.ceil(R(L) / R(D)), Y = b - ($ - u.value) - 1;
      if (a.value = "" + P, b - 2 > $) {
        if (M === void 0 || b !== J)
          for (var j = 2; j < $ + 2; j++)
            C.push(j);
        if (P <= $ && P < Y) {
          C = [];
          for (var se = 1; se < $ + 1; se++)
            C.push(se + 1);
          t.value = !0, o.value = !1;
        }
        if (P > $ && P < Y) {
          C = [];
          for (var q = 1; q < $ + 1; q++)
            C.push(P + q - u.value);
          t.value = P === 2 && $ === 1, o.value = !1;
        }
        if (P >= Y) {
          C = [];
          for (var F = 1; F < $ + 1; F++)
            C.push(b - ($ - F) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", b];
      } else
        for (var N = 1; N <= b; N++)
          C.push(N);
      s.value = C, M != null && b > 0 && k(K, P, I), k(e["onUpdate:current"], P), k(e["onUpdate:size"], I);
    }, {
      immediate: !0
    }), {
      n: t0,
      classes: o0,
      pack: Ze,
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
      clickItem: g,
      showMenu: y,
      clickSize: w,
      setPage: S,
      toNumber: R,
      formatElevation: gn
    };
  }
});
Fd.render = l0;
const la = Fd;
la.install = function(e) {
  e.component(la.name, la);
};
var fk = la, s0 = {
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
  onClick: U()
}, {
  n: u0,
  classes: d0
} = _("paper");
function v0(e, n) {
  var r = Ie("ripple");
  return ke((p(), O(
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
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Hd = Q({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: s0,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: u0,
      classes: d0,
      formatElevation: gn,
      toSizeUnit: ge,
      handleClick: n
    };
  }
});
Hd.render = v0;
const sa = Hd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var ck = sa;
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
var f0 = mi({
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
  onChange: U(),
  onConfirm: U(),
  onCancel: U()
}, Je(Ot, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: c0,
  classes: m0
} = _("picker"), xl = 300, p0 = 15, es = 0, h0 = ["onTouchstart", "onTouchmove", "onTouchend"], g0 = ["onTransitionend"];
function y0(e, n) {
  var r = ae("var-button");
  return p(), ye(
    rt(e.dynamic ? e.n("$-popup") : e.Transition),
    Ee(e.dynamic ? {
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
      default: ve(() => [A(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [H(e.$slots, "cancel", {}, () => [Z(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [Ce(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), H(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: c(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), H(e.$slots, "confirm", {}, () => [Z(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [Ce(
                ne(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
        )) : x("v-if", !0), A(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), O(
            Ve,
            null,
            Ue(e.scrollColumns, (a) => (p(), O(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Pn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                [(p(!0), O(
                  Ve,
                  null,
                  Ue(a.column.texts, (t) => (p(), O(
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
                      ne(e.textFormatter(t, a.columnIndex)),
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
                g0
              )],
              42,
              h0
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
var Yd = Q({
  name: "VarPicker",
  components: {
    VarButton: en,
    VarPopup: kn
  },
  inheritAttrs: !1,
  props: f0,
  setup(e) {
    var n = B([]), r = z(() => Ye(e.optionHeight)), a = z(() => Ye(e.optionCount)), t = z(() => a.value * r.value / 2 - r.value / 2), o = z(() => a.value * r.value), l = [], i = (C, $) => {
      $.scrollEl = C;
    }, s = (C) => {
      k(e["onUpdate:show"], C);
    }, u = (C) => {
      var $ = r.value + t.value, L = t.value - C.column.texts.length * r.value;
      C.translate >= $ && (C.translate = $), C.translate <= L && (C.translate = L);
    }, d = (C, $) => {
      var {
        length: L
      } = C.column.texts;
      return $ = $ >= L ? L - 1 : $, $ = $ <= 0 ? 0 : $, $;
    }, v = (C) => {
      var $ = Math.round((t.value - C.translate) / r.value);
      return d(C, $);
    }, f = () => {
      var C = n.value.map((L) => L.column.texts[L.index]), $ = n.value.map((L) => L.index);
      return {
        texts: C,
        indexes: $
      };
    }, m = function(C, $, L, K) {
      K === void 0 && (K = !1);
      var J = t.value - d(C, $) * r.value;
      J === C.translate && (C.scrolling = !1, !K && I(C)), C.translate = J, C.duration = L;
    }, h = (C, $, L) => {
      C.translate += Math.abs($ / L) / 3e-3 * ($ < 0 ? -1 : 1);
    }, g = (C, $) => {
      $.touching = !0, $.scrolling = !1, $.duration = 0, $.translate = So($.scrollEl);
    }, y = (C, $) => {
      if ($.touching) {
        var {
          clientY: L
        } = C.touches[0], K = $.prevY !== void 0 ? L - $.prevY : 0;
        $.prevY = L, $.translate += K, u($);
        var J = performance.now();
        J - $.momentumTime > xl && ($.momentumTime = J, $.momentumPrevY = $.translate);
      }
    }, w = (C, $) => {
      $.touching = !1, $.scrolling = !0, $.prevY = void 0;
      var L = $.translate - $.momentumPrevY, K = performance.now() - $.momentumTime, J = Math.abs(L) >= p0 && K <= xl;
      J && h($, L, K), $.index = v($), m($, $.index, J ? 1e3 : 200);
    }, V = (C) => {
      C.scrolling = !1, I(C);
    }, S = (C) => C.map(($, L) => {
      var K, J = Te($) ? {
        texts: $
      } : $, Y = {
        id: es++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (K = J.initialIndex) != null ? K : 0,
        columnIndex: L,
        duration: 0,
        momentumTime: 0,
        column: J,
        scrollEl: null,
        scrolling: !1
      };
      return m(Y, Y.index, 0, !0), Y;
    }), T = (C) => {
      var $ = [];
      return E($, C, 0, !0), $;
    }, E = function(C, $, L, K) {
      if (K === void 0 && (K = !1), Te($) && $.length) {
        var J, Y = K && (J = e.cascadeInitialIndexes[C.length]) != null ? J : 0, j = {
          id: es++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: Y,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: $.map((se) => se[e.textKey])
          },
          columns: $,
          scrollEl: null,
          scrolling: !1
        };
        C.push(j), m(j, j.index, 0, !0), E(C, j.columns[j.index].children, L + 1, K);
      }
    }, P = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), E(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, I = (C) => {
      var {
        cascade: $,
        onChange: L
      } = e;
      $ && P(C);
      var K = n.value.some((se) => se.scrolling);
      if (!K) {
        var {
          texts: J,
          indexes: Y
        } = f(), j = Y.every((se, q) => se === l[q]);
        j || (l = [...Y], k(L, J, Y));
      }
    }, b = () => {
      if (e.cascade) {
        var C = n.value.find(($) => $.scrolling);
        C && (C.translate = So(C.scrollEl), C.index = v(C), m(C, C.index, 0, !0), C.scrolling = !1, P(C));
      } else
        n.value.forEach(($) => {
          $.translate = So($.scrollEl), $.index = v($), m($, $.index, 0);
        });
    }, M = () => {
      b();
      var {
        texts: C,
        indexes: $
      } = f();
      l = [...$], k(e.onConfirm, C, $);
    }, D = () => {
      b();
      var {
        texts: C,
        indexes: $
      } = f();
      l = [...$], k(e.onCancel, C, $);
    };
    return oe(() => e.columns, (C) => {
      n.value = e.cascade ? T(Ji(C)) : S(Ji(C));
      var {
        indexes: $
      } = f();
      l = [...$];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: c0,
      classes: m0,
      pack: Ze,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Le,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: g,
      handleTouchmove: y,
      handleTouchend: w,
      handleTransitionend: V,
      confirm: M,
      cancel: D,
      dt: to
    };
  }
});
Yd.render = y0;
const kr = Yd;
var fn;
function za(e) {
  return new Promise((n) => {
    za.close();
    var r = Te(e) ? {
      columns: e
    } : e, a = Ae(r);
    a.dynamic = !0, a.teleport = "body", fn = a;
    var {
      unmountInstance: t
    } = at(kr, a, {
      onConfirm: (o, l) => {
        k(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, fn === a && (fn = null);
      },
      onCancel: (o, l) => {
        k(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, fn === a && (fn = null);
      },
      onClose: () => {
        k(a.onClose), n({
          state: "close"
        }), fn === a && (fn = null);
      },
      onClosed: () => {
        k(a.onClosed), t(), fn === a && (fn = null);
      },
      onRouteChange: () => {
        t(), fn === a && (fn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
kr.install = function(e) {
  e.component(kr.name, kr);
};
za.Component = kr;
za.install = function(e) {
  e.component(kr.name, kr);
};
za.close = function() {
  if (fn != null) {
    var e = fn;
    fn = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
var mk = kr;
function b0(e) {
  return ["linear", "circle"].includes(e);
}
var w0 = {
  mode: {
    type: String,
    default: "linear",
    validator: b0
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
  n: C0,
  classes: S0
} = _("progress"), k0 = ["viewBox"], $0 = ["cx", "cy", "r", "stroke-width"], T0 = ["cx", "cy", "r", "stroke-width"];
function P0(e, n) {
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
          style: G({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), O(
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
        )) : x("v-if", !0), A(
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
      ), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [H(e.$slots, "default", {}, () => [Ce(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
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
            style: G({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          $0
        )) : x("v-if", !0), A(
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
          T0
        )],
        14,
        k0
      )), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [H(e.$slots, "default", {}, () => [Ce(
          ne(e.circleProps.roundValue),
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
var jd = Q({
  name: "VarProgress",
  props: w0,
  setup(e) {
    var n = z(() => {
      var a = R(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = z(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + Ye(a) + " " + Ye(a), i = R(o) > 100 ? 100 : Math.round(R(o)), s = (Ye(a) - Ye(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: C0,
      classes: S0,
      toSizeUnit: ge,
      multiplySizeUnit: an,
      linearProps: n,
      circleProps: r
    };
  }
});
jd.render = P0;
const ua = jd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var pk = ua, O0 = {
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
  onRefresh: U(),
  "onUpdate:modelValue": U()
};
function ns(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function rs(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ns(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ns(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: as,
  classes: V0
} = _("pull-refresh"), ts = 150;
function M0(e, n) {
  var r = ae("var-icon");
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
        style: G(e.controlStyle)
      },
      [Z(
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
    ), H(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Wd = Q({
  name: "VarPullRefresh",
  components: {
    VarIcon: Pe
  },
  props: O0,
  setup(e) {
    var n = B(0), r = B(null), a = B(null), t = B(0), o = B("-125%"), l = B("arrow-down"), i = B("default"), s = B(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = rs(function* (M) {
        if (l.value !== M)
          return l.value = M, new Promise((D) => {
            window.setTimeout(D, ts);
          });
      });
      return function(D) {
        return b.apply(this, arguments);
      };
    }(), h = z(() => i.value !== "loading" && i.value !== "success" && !e.disabled), g = z(() => ({
      transform: "translate3d(0px, " + (je(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), y = z(() => Math.abs(2 * n.value)), w = z(() => i.value === "success"), V = (b) => {
      var M = "classList" in u ? u : document.body;
      M.classList[b](as() + "--lock");
    }, S = (b) => {
      if (n.value === 0) {
        var {
          width: M
        } = a.value.getBoundingClientRect();
        n.value = -(M + M * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = Tr(b.target);
    }, T = (b) => {
      if (h.value && !(d !== u && ct(d) > 0)) {
        var M = ct(u);
        if (!(M > 0)) {
          var D = M === 0, C = b.touches[0];
          f = C.clientY - v, D && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), D && o.value > n.value && V("add");
          var $ = (b.touches[0].clientY - t.value) / 2 + n.value;
          o.value = $ >= y.value ? y.value : $, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var b = rs(function* () {
        h.value && (s.value = !0, o.value >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, k(e["onUpdate:modelValue"], !0), Ne(() => {
          k(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, R(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), P = () => {
      u = e.target ? ys(e.target, "PullRefresh") : Tr(r.value);
    }, I = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    };
    return oe(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, I();
      }, R(e.successDuration)));
    }), ln(P), Jn(r, "touchmove", T), {
      n: as,
      classes: V0,
      ICON_TRANSITION: ts,
      refreshStatus: i,
      freshNode: r,
      controlNode: a,
      touchStart: S,
      touchMove: T,
      touchEnd: E,
      iconName: l,
      controlStyle: g,
      isSuccess: w
    };
  }
});
Wd.render = M0;
const da = Wd;
da.install = function(e) {
  e.component(da.name, da);
};
var hk = da, B0 = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, Gd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function E0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Gd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function I0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(Gd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: N0,
  classes: D0
} = _("radio");
function A0(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      Ee({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? H(e.$slots, "checked-icon", {
          key: 0
        }, () => [Z(
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
        )]) : H(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Z(
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
        )]), Z(
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
        [H(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), Z(
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
var qd = Q({
  name: "VarRadio",
  directives: {
    Ripple: We,
    Hover: Un
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  inheritAttrs: !1,
  props: B0,
  setup(e) {
    var n = B(!1), r = z(() => n.value === e.checkedValue), a = B(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = I0(), {
      hovering: l,
      handleHovering: i
    } = Pr(), {
      form: s,
      bindForm: u
    } = Mn(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Vn(), h = (P) => {
      Ne(() => {
        var {
          validateTrigger: I,
          rules: b,
          modelValue: M
        } = e;
        v(I, P, b, M);
      });
    }, g = (P) => {
      var {
        checkedValue: I,
        onChange: b
      } = e;
      t && n.value === I || (n.value = P, k(e["onUpdate:modelValue"], n.value), k(b, n.value), t == null || t.onToggle(I), h("onChange"));
    }, y = (P) => {
      var {
        disabled: I,
        readonly: b,
        uncheckedValue: M,
        checkedValue: D,
        onClick: C
      } = e;
      s != null && s.disabled.value || I || (k(C, P), !(s != null && s.readonly.value || b) && (a.value = !0, g(r.value ? M : D)));
    }, w = (P) => {
      var {
        checkedValue: I,
        uncheckedValue: b
      } = e;
      n.value = P === I ? I : b;
    }, V = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, S = () => f(e.rules, e.modelValue), T = (P) => {
      var {
        uncheckedValue: I,
        checkedValue: b
      } = e, M = ![I, b].includes(P);
      M && (P = r.value ? I : b), g(P);
    };
    oe(() => e.modelValue, (P) => {
      n.value = P;
    }, {
      immediate: !0
    });
    var E = {
      sync: w,
      validate: S,
      resetValidation: m,
      reset: V
    };
    return k(o, E), k(u, E), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: N0,
      classes: D0,
      handleClick: y,
      toggle: T,
      reset: V,
      validate: S,
      resetValidation: m
    };
  }
});
qd.render = A0;
const va = qd;
va.install = function(e) {
  e.component(va.name, va);
};
var gk = va;
function z0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var L0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: z0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: R0,
  classes: U0
} = _("radio-group");
function F0(e, n) {
  var r = ae("var-form-details");
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
      [H(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
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
var Xd = Q({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: _e
  },
  props: L0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = E0(), {
      bindForm: t
    } = Mn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Vn(), u = z(() => o.value), d = (y) => {
      Ne(() => {
        var {
          validateTrigger: w,
          rules: V,
          modelValue: S
        } = e;
        l(w, y, V, S);
      });
    }, v = () => r.forEach((y) => {
      var {
        sync: w
      } = y;
      return w(e.modelValue);
    }), f = (y) => {
      k(e["onUpdate:modelValue"], y), k(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), h = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    oe(() => e.modelValue, v), oe(() => n.value, v);
    var g = {
      onToggle: f,
      validate: m,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, g), a(g), {
      errorMessage: o,
      n: R0,
      classes: U0,
      reset: h,
      validate: m,
      resetValidation: s
    };
  }
});
Xd.render = F0;
const fa = Xd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var yk = fa, H0 = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: ot
} = _("rate"), Y0 = ["onClick"];
function j0(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
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
        Ve,
        null,
        Ue(e.toNumber(e.count), (i) => ke((p(), O(
          "div",
          {
            key: i,
            style: G(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [Z(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: G({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          ), Z(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          Y0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Z(
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
var Kd = Q({
  name: "VarRate",
  components: {
    VarIcon: Pe,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  directives: {
    Ripple: We,
    Hover: Un
  },
  props: H0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = Mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Vn(), {
      hovering: i
    } = Pr(), s = B(-1), u = (S) => {
      var {
        count: T,
        gap: E
      } = e;
      return {
        color: v(S).color,
        marginRight: S !== R(T) ? ge(E) : 0
      };
    }, d = (S) => {
      var {
        name: T,
        color: E
      } = v(S);
      return {
        [ot("content")]: !0,
        [ot("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [ot("--error")]: a.value,
        [ot("--primary")]: T !== e.emptyIcon && !E
      };
    }, v = (S) => {
      var {
        modelValue: T,
        disabled: E,
        disabledColor: P,
        color: I,
        half: b,
        emptyColor: M,
        icon: D,
        halfIcon: C,
        emptyIcon: $
      } = e, L = I;
      return (E || n != null && n.disabled.value) && (L = P), S <= R(T) ? {
        color: L,
        name: D
      } : b && S <= R(T) + 0.5 ? {
        color: L,
        name: C
      } : {
        color: E || n != null && n.disabled.value ? P : M,
        name: $
      };
    }, f = (S, T) => {
      if (e.half) {
        var {
          offsetWidth: E
        } = T.target;
        T.offsetX <= Math.floor(E / 2) && (S -= 0.5);
      }
      k(e["onUpdate:modelValue"], S);
    }, m = () => o(e.rules, R(e.modelValue)), h = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = (S, T) => {
      var {
        readonly: E,
        disabled: P,
        onChange: I
      } = e;
      E || P || n != null && n.disabled.value || n != null && n.readonly.value || (f(S, T), k(I, S), h());
    }, y = (S) => (T) => {
      s.value = S, i.value = T;
    }, w = () => {
      k(e["onUpdate:modelValue"], 0), l();
    }, V = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return k(r, V), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: g,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: y,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: ge,
      toNumber: R,
      n: ot
    };
  }
});
Kd.render = j0;
const ca = Kd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var bk = ca;
function W0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var G0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: W0
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
}, q0 = (e) => (Ra(""), e = e(), Ua(), e), X0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, K0 = /* @__PURE__ */ q0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), Z0 = [K0];
function J0(e, n) {
  return p(), O("svg", X0, Z0);
}
var Zd = Q({});
Zd.render = J0;
const Q0 = Zd;
var _0 = (e) => (Ra(""), e = e(), Ua(), e), x0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, e1 = /* @__PURE__ */ _0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), n1 = [e1];
function r1(e, n) {
  return p(), O("svg", x0, n1);
}
var Jd = Q({});
Jd.render = r1;
const a1 = Jd;
var t1 = (e) => (Ra(""), e = e(), Ua(), e), o1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, i1 = /* @__PURE__ */ t1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), l1 = [i1];
function s1(e, n) {
  return p(), O("svg", o1, l1);
}
var Qd = Q({});
Qd.render = s1;
const u1 = Qd;
var {
  n: d1,
  classes: v1
} = _("result");
function f1(e, n) {
  return p(), O(
    Ve,
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
var _d = Q({
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
      n: d1,
      classes: v1,
      toNumber: R
    };
  }
});
_d.render = f1;
const c1 = _d;
var m1 = (e) => (Ra(""), e = e(), Ua(), e), p1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, h1 = /* @__PURE__ */ m1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), g1 = [h1];
function y1(e, n) {
  return p(), O("svg", p1, g1);
}
var xd = Q({});
xd.render = y1;
const b1 = xd;
var w1 = (e) => (Ra(""), e = e(), Ua(), e), C1 = {
  viewBox: "-4 -4 32 32"
}, S1 = /* @__PURE__ */ w1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), k1 = [S1];
function $1(e, n) {
  return p(), O("svg", C1, k1);
}
var ev = Q({});
ev.render = $1;
const T1 = ev;
var {
  n: P1,
  classes: O1
} = _("result");
function V1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [H(e.$slots, "image", {}, () => [e.type ? (p(), O(
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
        [(p(), ye(
          rt(e.type),
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
    )) : x("v-if", !0)]), H(e.$slots, "title", {}, () => [e.title ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [H(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var nv = Q({
  name: "VarResult",
  components: {
    Info: Q0,
    Success: c1,
    Warning: u1,
    Error: a1,
    Question: b1,
    Empty: T1
  },
  props: G0,
  setup(e) {
    var n = z(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = z(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: P1,
      classes: O1,
      toNumber: R,
      toPxNum: Ye,
      toSizeUnit: ge,
      circleSize: n,
      borderSize: r
    };
  }
});
nv.render = V1;
const ma = nv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var wk = ma;
function M1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function B1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var E1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: M1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: B1
  },
  onClick: U()
}, {
  n: I1,
  classes: N1
} = _("row");
function D1(e, n) {
  return p(), O(
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
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var rv = Q({
  name: "VarRow",
  props: E1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Xm(), t = z(() => {
      var s = Ye(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      k(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return oe(() => a.value, o), oe(() => e.gutter, o), r(i), {
      n: I1,
      classes: N1,
      average: t,
      handleClick: l,
      padStartFlex: qt
    };
  }
});
rv.render = D1;
const pa = rv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Ck = pa;
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
function A1(e) {
  return ["left", "right", "center"].includes(e);
}
var z1 = pi({
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
    validator: A1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: U(),
  onBlur: U(),
  onClose: U(),
  onChange: U(),
  onClear: U(),
  "onUpdate:modelValue": U()
}, Je(Yi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: L1,
  classes: R1
} = _("select"), U1 = {
  key: 1
};
function F1(e, n) {
  var r = ae("var-chip"), a = ae("var-icon"), t = ae("var-field-decorator"), o = ae("var-menu"), l = ae("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [Z(
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
        menu: ve(() => [A(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [H(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ve(() => [Z(
          t,
          $t(ao({
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
            "prepend-icon": ve(() => [H(e.$slots, "prepend-icon")]),
            "append-icon": ve(() => [H(e.$slots, "append-icon")]),
            default: ve(() => [A(
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
                [e.isEmptyModelValue ? x("v-if", !0) : H(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), O(
                  Ve,
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
                      Ve,
                      null,
                      Ue(e.labels, (i) => (p(), ye(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = Pn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [Ce(
                            ne(i),
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
                    ne(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  64
                  /* STABLE_FRAGMENT */
                )) : (p(), O(
                  "span",
                  U1,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), H(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [Z(
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
    ), Z(
      l,
      {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = Pn(() => {
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
var av = Q({
  name: "VarSelect",
  components: {
    VarIcon: Pe,
    VarMenu: Zn,
    VarChip: gr,
    VarFieldDecorator: $d,
    VarFormDetails: _e
  },
  props: z1,
  setup(e) {
    var n = B(!1), r = z(() => e.multiple), a = z(() => e.focusColor), t = B(""), o = B([]), l = z(() => fr(e.modelValue)), i = z(() => e.disabled || e.readonly ? "" : "pointer"), s = B(0), {
      bindForm: u,
      form: d
    } = Mn(), {
      length: v,
      options: f,
      bindOptions: m
    } = Zb(), {
      errorMessage: h,
      validateWithTrigger: g,
      validate: y,
      // expose
      resetValidation: w
    } = Vn(), V = B(null), S = z(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), T = () => {
      var {
        multiple: F,
        modelValue: N
      } = e;
      if (F) {
        var W = N;
        o.value = W.map(I);
      }
      !F && !fr(N) && (t.value = I(N)), !F && fr(N) && (t.value = "");
    }, E = (F) => {
      Ne(() => {
        var {
          validateTrigger: N,
          rules: W,
          modelValue: ee
        } = e;
        g(N, F, W, ee);
      });
    }, P = (F) => {
      var {
        value: N,
        label: W
      } = F;
      return N.value != null ? N.value : W.value;
    }, I = (F) => {
      var N, W, ee = f.find((le) => {
        var {
          value: de
        } = le;
        return de.value === F;
      });
      return ee || (ee = f.find((le) => {
        var {
          label: de
        } = le;
        return de.value === F;
      })), (N = (W = ee) == null ? void 0 : W.label.value) != null ? N : "";
    }, b = () => {
      var {
        disabled: F,
        readonly: N,
        onFocus: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || F || N || (s.value = Ye(e.offsetY), n.value = !0, k(W), E("onFocus"));
    }, M = () => {
      var {
        disabled: F,
        readonly: N,
        onBlur: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || F || N || (k(W), E("onBlur"));
    }, D = (F) => {
      var {
        disabled: N,
        readonly: W,
        multiple: ee,
        onChange: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || N || W)) {
        var de = ee ? f.filter((we) => {
          var {
            selected: Oe
          } = we;
          return Oe.value;
        }).map(P) : P(F);
        k(e["onUpdate:modelValue"], de), k(le, de), E("onChange"), !ee && (n.value = !1);
      }
    }, C = () => {
      var {
        disabled: F,
        readonly: N,
        multiple: W,
        clearable: ee,
        onClear: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || F || N || !ee)) {
        var de = W ? [] : void 0;
        k(e["onUpdate:modelValue"], de), k(le, de), E("onClear");
      }
    }, $ = (F) => {
      var {
        disabled: N,
        onClick: W
      } = e;
      d != null && d.disabled.value || N || (k(W, F), E("onClick"));
    }, L = (F) => {
      var {
        disabled: N,
        readonly: W,
        modelValue: ee,
        onClose: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || N || W)) {
        var de = ee, we = f.find((dn) => {
          var {
            label: re
          } = dn;
          return re.value === F;
        }), Oe = de.filter((dn) => {
          var re;
          return dn !== ((re = we.value.value) != null ? re : we.label.value);
        });
        k(e["onUpdate:modelValue"], Oe), k(le, Oe), E("onClose");
      }
    }, K = () => {
      var {
        multiple: F,
        modelValue: N
      } = e;
      if (F) {
        var W = N;
        f.forEach((ee) => ee.sync(W.includes(P(ee))));
      } else
        f.forEach((ee) => ee.sync(N === P(ee)));
      T();
    }, J = () => {
      s.value = Ye(e.offsetY), n.value = !0;
    }, Y = () => {
      n.value = !1;
    }, j = () => y(e.rules, e.modelValue), se = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    oe(() => e.multiple, () => {
      var {
        multiple: F,
        modelValue: N
      } = e;
      F && !Te(N) && On("Select", "The modelValue must be an array when multiple is true");
    }), oe(() => e.modelValue, K, {
      deep: !0
    }), oe(() => v.value, K);
    var q = {
      multiple: r,
      focusColor: a,
      computeLabel: T,
      onSelect: D,
      reset: se,
      validate: j,
      resetValidation: w
    };
    return m(q), k(u, q), {
      offsetY: s,
      isFocus: n,
      errorMessage: h,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: V,
      placement: S,
      cursor: i,
      n: L1,
      classes: R1,
      handleFocus: b,
      handleBlur: M,
      handleClear: C,
      handleClick: $,
      handleClose: L,
      reset: se,
      validate: j,
      resetValidation: w,
      focus: J,
      blur: Y
    };
  }
});
av.render = F1;
const ha = av;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Sk = ha, H1 = {
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
  n: Y1,
  classes: j1
} = _("skeleton");
function W1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [H(e.$slots, "default")],
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), O(
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), O(
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
          )) : x("v-if", !0), (p(!0), O(
            Ve,
            null,
            Ue(e.toNumber(e.rows), (r, a) => (p(), O(
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
        )) : x("v-if", !0)],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.loading && e.fullscreen ? (p(), O(
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
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var tv = Q({
  name: "VarSkeleton",
  props: H1,
  setup() {
    return {
      n: Y1,
      classes: j1,
      toSizeUnit: ge,
      toNumber: R
    };
  }
});
tv.render = W1;
const ga = tv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var kk = ga;
function G1(e) {
  return ["always", "normal", "never"].includes(e);
}
var ze;
(function(e) {
  e.First = "1", e.Second = "2";
})(ze || (ze = {}));
var q1 = {
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
    validator: G1
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
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: {
    type: Array
  },
  onChange: U(),
  onStart: U(),
  onEnd: U(),
  "onUpdate:modelValue": U()
}, {
  n: os,
  classes: X1
} = _("slider"), K1 = ["onTouchstart"];
function Z1(e, n) {
  var r = ae("var-hover-overlay"), a = ae("var-form-details"), t = Ie("hover");
  return p(), O(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [A(
          "div",
          {
            class: c(e.n(e.direction + "-track-background")),
            style: G({
              background: e.trackColor,
              height: e.isVertical ? "100%" : e.multiplySizeUnit(e.trackHeight),
              width: e.isVertical ? e.multiplySizeUnit(e.trackHeight) : "100%"
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: c(e.n(e.direction + "-track-fill")),
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), O(
        Ve,
        null,
        Ue(e.thumbList, (o) => (p(), O(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: G(e.thumbStyle(o)),
            onTouchstart: Pn((l) => e.start(l, o.enumValue), ["stop"])
          },
          [H(e.$slots, "button", {
            currentValue: o.text
          }, () => [ke(A(
            "div",
            {
              class: c(e.n(e.direction + "-thumb-block")),
              style: G({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), [[t, (l) => e.hover(l, o), "desktop"]]), A(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
              style: G({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [Z(
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
              class: c(e.classes(e.n(e.direction + "-thumb-label"), [e.showLabel(o.enumValue), e.n(e.direction + "-thumb-label--active")])),
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
              ne(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          K1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Z(
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
var ov = Q({
  name: "VarSlider",
  components: {
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  directives: {
    Hover: Un
  },
  props: q1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Vn(), {
      hovering: i,
      handleHovering: s
    } = Pr(), {
      hovering: u,
      handleHovering: d
    } = Pr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = B(null), g = B(0), y = B(!1), w = Ae({
      [ze.First]: f(),
      [ze.Second]: f()
    }), V = z(() => R(e.max) - R(e.min)), S = z(() => g.value / V.value * R(e.step)), T = z(() => {
      var {
        modelValue: re,
        range: ue
      } = e, me = [];
      return ue && Te(re) ? me = [{
        value: L(re[0]),
        enumValue: ze.First,
        text: K(re[0]),
        hovering: lt(i),
        handleHovering: s
      }, {
        value: L(re[1]),
        enumValue: ze.Second,
        text: K(re[1]),
        hovering: lt(u),
        handleHovering: d
      }] : on(re) && (me = [{
        value: L(re),
        enumValue: ze.First,
        text: K(re),
        hovering: lt(i),
        handleHovering: s
      }]), me;
    }), E = z(() => {
      var {
        activeColor: re,
        range: ue,
        modelValue: me
      } = e, De = ue && Te(me) ? L(Math.min(me[0], me[1])) : 0, Ke = ue && Te(me) ? L(Math.max(me[0], me[1])) - De : L(me);
      return b.value ? {
        left: "0px",
        height: Ke + "%",
        bottom: De + "%",
        background: re
      } : {
        top: "0px",
        width: Ke + "%",
        left: De + "%",
        background: re
      };
    }), P = z(() => e.disabled || (r == null ? void 0 : r.disabled.value)), I = z(() => e.readonly || (r == null ? void 0 : r.readonly.value)), b = z(() => e.direction === "vertical"), M, D = (re) => {
      var ue = re.currentTarget;
      return ue ? b.value ? g.value - (re.clientY - ue.getBoundingClientRect().top) : re.clientX - Gv(ue) : 0;
    }, C = (re) => {
      var ue = b.value ? "bottom" : "left";
      return {
        [ue]: re.value + "%",
        zIndex: w[re.enumValue].active ? 1 : void 0
      };
    }, $ = (re) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[re].active, L = (re) => {
      var {
        min: ue,
        max: me
      } = e;
      return re < R(ue) ? 0 : re > R(me) ? 100 : (re - R(ue)) / V.value * 100;
    }, K = (re) => {
      if (!on(re))
        return 0;
      var ue = re;
      ue < Number(e.min) && (ue = Number(e.min)), ue > Number(e.max) && (ue = Number(e.max));
      var me = parseInt("" + ue, 10) === ue;
      return me ? ue : R(ue.toPrecision(5));
    }, J = (re, ue) => {
      P.value || ue.handleHovering(re);
    }, Y = (re, ue) => {
      var me = [], {
        step: De,
        range: Ke,
        modelValue: Ge,
        onChange: Fe,
        min: He
      } = e, te = R(De), be = Math.round(re / S.value), pe = be * te + R(He), Se = w[ue].percentValue * te + R(He);
      if (w[ue].percentValue = be, Ke && Te(Ge) && (me = ue === ze.First ? [pe, Ge[1]] : [Ge[0], pe]), Se !== pe) {
        var $e = Ke ? me.map((Re) => K(Re)) : K(pe);
        k(Fe, $e), k(e["onUpdate:modelValue"], $e), m();
      }
    }, j = (re) => {
      if (!e.range)
        return ze.First;
      var ue = w[ze.First].percentValue * S.value, me = w[ze.Second].percentValue * S.value, De = Math.abs(re - ue), Ke = Math.abs(re - me);
      return De <= Ke ? ze.First : ze.Second;
    }, se = () => {
      document.addEventListener("touchmove", N, {
        passive: !1
      }), document.addEventListener("touchend", W), document.addEventListener("touchcancel", W);
    }, q = () => {
      document.removeEventListener("touchmove", N), document.removeEventListener("touchend", W), document.removeEventListener("touchcancel", W);
    }, F = (re, ue) => {
      if (g.value || (g.value = h.value.offsetWidth), P.value || (w[ue].active = !0), M = ue, se(), !(P.value || I.value)) {
        k(e.onStart), y.value = !0;
        var {
          clientX: me,
          clientY: De
        } = re.touches[0];
        w[ue].startPosition = b.value ? De : me;
      }
    }, N = (re) => {
      if (re.preventDefault(), !(P.value || I.value || !y.value)) {
        var {
          startPosition: ue,
          currentOffset: me
        } = w[M], {
          clientX: De,
          clientY: Ke
        } = re.touches[0], Ge = (b.value ? ue - Ke : De - ue) + me;
        Ge <= 0 ? Ge = 0 : Ge >= g.value && (Ge = g.value), Y(Ge, M);
      }
    }, W = () => {
      q();
      var {
        range: re,
        modelValue: ue,
        onEnd: me,
        step: De,
        min: Ke
      } = e;
      if (P.value || (w[M].active = !1), !(P.value || I.value)) {
        var Ge = [];
        w[M].currentOffset = w[M].percentValue * S.value;
        var Fe = w[M].percentValue * R(De) + R(Ke);
        re && Te(ue) && (Ge = M === ze.First ? [Fe, ue[1]] : [ue[0], Fe]), k(me, re ? Ge : Fe), y.value = !1;
      }
    }, ee = (re) => {
      if (!(P.value || I.value) && !re.target.closest("." + os("thumb"))) {
        var ue = D(re), me = j(ue);
        M = me, Y(ue, me), W();
      }
    }, le = () => {
      var re = R(e.step);
      return isNaN(re) ? (nl("Slider", 'type of prop "step" should be Number'), !1) : re < 0 ? (nl("Slider", '"step" should be > 0'), !1) : !0;
    }, de = () => {
      var {
        range: re,
        modelValue: ue
      } = e;
      return re && !Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !re && Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : re && Te(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, we = function(re, ue) {
      re === void 0 && (re = e.modelValue), ue === void 0 && (ue = R(e.step));
      var me = (De) => {
        var {
          min: Ke,
          max: Ge
        } = e;
        return De < R(Ke) ? 0 : De > R(Ge) ? V.value / ue : (De - R(Ke)) / ue;
      };
      e.range && Te(re) ? (w[ze.First].percentValue = me(re[0]), w[ze.First].currentOffset = w[ze.First].percentValue * S.value, w[ze.Second].percentValue = me(re[1]), w[ze.Second].currentOffset = w[ze.Second].percentValue * S.value) : on(re) && (w[ze.First].currentOffset = me(re) * S.value);
    }, Oe = () => {
      var re = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], re), l();
    }, dn = {
      reset: Oe,
      validate: v,
      resetValidation: l
    };
    return k(n, dn), oe([() => e.modelValue, () => e.step], (re) => {
      var [ue, me] = re;
      !le() || !de() || y.value || we(ue, R(me));
    }), oe(g, () => we()), ln(() => {
      !le() || !de() || (g.value = h.value[b.value ? "offsetHeight" : "offsetWidth"]);
    }), Ct(() => {
      q();
    }), {
      n: os,
      classes: X1,
      Thumbs: ze,
      sliderEl: h,
      getFillStyle: E,
      isDisabled: P,
      isVertical: b,
      thumbStyle: C,
      errorMessage: a,
      thumbsProps: w,
      thumbList: T,
      hover: J,
      multiplySizeUnit: an,
      toNumber: R,
      showLabel: $,
      start: F,
      move: N,
      end: W,
      click: ee
    };
  }
});
ov.render = Z1;
const ya = ov;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var $k = ya;
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
function J1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Q1(e) {
  return Gi.includes(e);
}
var iv = {
  type: {
    type: String,
    validator: Q1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: J1
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
  loadingType: Je(ur, "type"),
  loadingSize: Je(ur, "size"),
  loadingRadius: Je(ur, "radius"),
  loadingColor: hi({}, Je(ur, "color"), {
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
  onOpen: U(),
  // 打开动画结束时的回调
  onOpened: U(),
  // 关闭时的回调函数
  onClose: U(),
  // 关闭动画结束时的回调
  onClosed: U(),
  "onUpdate:show": U(),
  _update: {
    type: String
  }
}, {
  n: _1,
  classes: x1
} = _("snackbar"), ew = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function nw(e, n) {
  var r = ae("var-icon"), a = ae("var-loading");
  return ke((p(), O(
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
        [H(e.$slots, "default", {}, () => [Ce(
          ne(e.content),
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
        [H(e.$slots, "icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (p(), ye(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (p(), ye(
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
        )) : x("v-if", !0), H(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[$r, e.show]]);
}
var lv = Q({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Dn,
    VarIcon: Pe
  },
  props: iv,
  setup(e) {
    var n = B(null), {
      zIndex: r
    } = Vt(() => e.show, 1);
    lo(() => e.show, () => e.lockScroll);
    var a = z(() => e.type === "loading" || e.forbidClick), t = z(() => e.type ? ew[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return oe(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), k(e.onClose));
    }), oe(() => e._update, () => {
      clearTimeout(n.value), o();
    }), ln(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Gi,
      n: _1,
      classes: x1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
lv.render = nw;
const sv = lv;
var {
  n: rw
} = _("snackbar");
function aw(e, n) {
  var r = ae("var-snackbar-core");
  return p(), ye(
    La,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [Z(
      Le,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [Z(
          r,
          Ee(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: ve(() => [H(e.$slots, "icon")]),
            action: ve(() => [H(e.$slots, "action")]),
            default: ve(() => [H(e.$slots, "default", {}, () => [Ce(
              ne(e.content),
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
var uv = Q({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: sv
  },
  props: iv,
  setup() {
    var {
      disabled: e
    } = io();
    return {
      n: rw,
      disabled: e
    };
  }
});
uv.render = aw;
const ba = uv;
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, bt.apply(this, arguments);
}
function tw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var Gi = ["loading", "success", "warning", "info", "error"], is = 0, gi = !1, dv, xa = !1, vv = {
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
}, Tn = Ae([]), qi = vv, ow = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, To = (e) => () => Tt(e) ? e() : e, iw = {
  setup() {
    return () => {
      var e = Tn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), xa && (a.position = "top");
        var l = xa ? "relative" : "absolute", i = bt({
          position: l
        }, fw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: To(s),
          icon: To(u),
          action: To(d)
        };
        return Z(sv, Ee(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Z(Uv, Ee(ow, {
        style: {
          zIndex: bn.zIndex
        },
        onAfterEnter: lw,
        onAfterLeave: sw
      }), tw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, xn = function(e) {
  var n = dw(e), r = Ae(bt({}, qi, n));
  r.show = !0, gi || (gi = !0, dv = at(iw).unmountInstance);
  var {
    length: a
  } = Tn, t = {
    id: is++,
    reactiveSnackOptions: r
  };
  if (a === 0 || xa)
    uw(t);
  else {
    var o = "update-" + is;
    vw(r, o);
  }
  return {
    clear() {
      !xa && Tn.length ? Tn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Gi.forEach((e) => {
  xn[e] = (n) => (Ci(n) ? n.type = e : n = {
    content: n,
    type: e
  }, xn(n));
});
xn.install = function(e) {
  e.component(ba.name, ba);
};
xn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== xa && (Tn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), xa = e);
};
xn.clear = function() {
  Tn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
xn.setDefaultOptions = function(e) {
  qi = e;
};
xn.resetDefaultOptions = function() {
  qi = vv;
};
xn.Component = ba;
function lw(e) {
  var n = e.getAttribute("data-id"), r = Tn.find((a) => a.id === R(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function sw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Tn.find((t) => t.id === R(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = Tn.every((t) => t.animationEnd);
  a && (k(dv), Tn = Ae([]), gi = !1);
}
function uw(e) {
  Tn.push(e);
}
function dw(e) {
  return e === void 0 && (e = {}), je(e) ? {
    content: e
  } : e;
}
function vw(e, n) {
  var [r] = Tn;
  r.reactiveSnackOptions = bt({}, r.reactiveSnackOptions, e), r._update = n;
}
function fw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Tk = ba;
const yi = xn;
var fv = (e) => ["mini", "small", "normal", "large"].includes(e), cw = (e) => fv(e) || Te(e) || on(e) || je(e), mw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), pw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), hw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: cw
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
    validator: mw
  },
  align: {
    type: String,
    validator: pw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function yn(e) {
  return "calc(" + e + " / 2)";
}
function gw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = yn(e) + " " + n + " " + yn(e) + " 0" : i = yn(e) + " 0" : t === "space-around" ? i = yn(e) + " " + yn(n) : t === "space-between" && (o === 0 ? i = yn(e) + " " + yn(n) + " " + yn(e) + " 0" : o === l ? i = yn(e) + " 0 " + yn(e) + " " + yn(n) : i = yn(e) + " " + yn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Po,
  classes: yw
} = _("space");
const wa = Q({
  name: "VarSpace",
  props: hw,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Te(t) ? t.map(ge) : [ge(t), ge(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = k(r.default)) != null ? t : [], f = fv(d), [m, h] = a(d, f);
      v = Ps(v);
      var g = v.length - 1, y = v.map((w, V) => {
        var S = gw(m, h, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: g
        });
        return Z("div", {
          style: {
            margin: S
          }
        }, [w]);
      });
      return Z("div", {
        class: yw(Po(), Po("$--box"), [o, Po("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: qt(l),
          alignItems: qt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [y]);
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Pk = wa, bw = {
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
}, cv = Symbol("STEPS_BIND_STEP_KEY");
function ww() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(cv);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function Cw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(cv);
  return r || On("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: Sw,
  classes: kw
} = _("step"), $w = {
  key: 3
};
function Tw(e, n) {
  var r = ae("var-icon");
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
            style: G({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (p(), ye(
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
          )) : e.isCurrent && e.currentIcon ? (p(), ye(
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
          )) : e.inactiveIcon ? (p(), ye(
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
            $w,
            ne(e.index + 1),
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
          [H(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? x("v-if", !0) : (p(), O(
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
var mv = Q({
  name: "VarStep",
  components: {
    VarIcon: Pe
  },
  props: bw,
  setup() {
    var e = B(null), n = B(""), r = B(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Cw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = z(() => l.value === a.value), m = z(() => a.value !== -1 && l.value > a.value), h = {
      index: a
    }, g = () => v(a.value), y = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(h), oe(i, (w) => {
      if (r.value = w - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + V + "px";
      }
    }), {
      n: Sw,
      classes: kw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: g,
      getRef: y
    };
  }
});
mv.render = Tw;
const Ca = mv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Ok = Ca;
function Pw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Ow = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Pw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Vw
} = _("steps");
function Mw(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var pv = Q({
  name: "VarSteps",
  props: Ow,
  setup(e) {
    var n = z(() => e.active), r = z(() => e.activeColor), a = z(() => e.inactiveColor), t = z(() => e.direction), {
      length: o,
      bindStep: l
    } = ww(), i = (u) => {
      k(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: Vw
    };
  }
});
pv.render = Mw;
const Sa = pv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Vk = Sa, Bw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Ew
} = _("style-provider"), Iw = Q({
  name: "VarStyleProvider",
  props: Bw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => cs(e.tag, {
      class: Ew(),
      style: $s(e.styleVars)
    }, k(r.default));
  }
});
const ka = Iw;
var Oo = [];
function wt(e) {
  Oo.forEach((r) => document.documentElement.style.removeProperty(r)), Oo.length = 0;
  var n = $s(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Oo.push(a);
  });
}
wt.Component = ka;
ka.install = function(e) {
  e.component(ka.name, ka);
};
wt.install = function(e) {
  e.component(ka.name, ka);
};
var Mk = ka, Nw = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Dw,
  classes: Aw
} = _("switch");
function zw(e, n) {
  var r = ae("var-loading"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return ke((p(), O(
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
      ), ke((p(), O(
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
          [e.loading ? (p(), ye(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : x("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), Z(
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
    ), Z(
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
var hv = Q({
  name: "VarSwitch",
  components: {
    VarLoading: Dn,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  directives: {
    Ripple: We,
    Hover: Un
  },
  props: Nw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Vn(), {
      hovering: i,
      handleHovering: s
    } = Pr(), u = () => o(e.rules, e.modelValue), d = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = z(() => {
      var {
        size: w,
        modelValue: V,
        color: S,
        closeColor: T,
        loadingColor: E,
        activeValue: P
      } = e;
      return {
        handle: {
          width: an(w),
          height: an(w),
          backgroundColor: V === P ? S : T,
          color: E
        },
        ripple: {
          left: V === P ? an(w, 0.5) : "-" + an(w, 0.5),
          color: V === P ? S : T || "#999",
          width: an(w, 2),
          height: an(w, 2)
        },
        track: {
          height: an(w, 0.72),
          width: an(w, 1.9),
          borderRadius: an(w, 2 / 3),
          filter: V === P || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === P ? S : T
        },
        switch: {
          height: an(w, 1.2),
          width: an(w, 2)
        }
      };
    }), f = z(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return an(w, 0.4);
    }), m = (w) => {
      var {
        onClick: V,
        onChange: S,
        disabled: T,
        loading: E,
        readonly: P,
        modelValue: I,
        activeValue: b,
        inactiveValue: M,
        "onUpdate:modelValue": D
      } = e;
      if (k(V, w), !(T || E || P || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = I === b ? M : b;
        k(S, C), k(D, C), d();
      }
    }, h = (w) => {
      e.disabled || r != null && r.disabled.value || s(w);
    }, g = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: g,
      validate: u,
      resetValidation: l
    };
    return k(n, y), {
      n: Dw,
      classes: Aw,
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
hv.render = zw;
const $a = hv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Bk = $a, Lw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, gv = Symbol("TABS_BIND_TAB_KEY");
function Rw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(gv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Uw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(gv);
  return n || On("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Rt,
  classes: Fw
} = _("tab");
function Hw(e, n) {
  var r = Ie("ripple");
  return ke((p(), O(
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
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var yv = Q({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Lw,
  setup(e) {
    var n = B(null), r = z(() => e.name), a = z(() => e.disabled), t = z(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Uw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: h
    } = l, g = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(g);
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : y() ? d.value : v.value, V = () => e.disabled ? Rt("$-tab--disabled") : y() ? Rt("$-tab--active") : Rt("$-tab--inactive"), S = (T) => {
      var {
        disabled: E,
        name: P,
        onClick: I
      } = e;
      E || (k(I, P ?? o.value, T), s(g));
    };
    return oe(() => e.name, h), oe(() => e.disabled, h), {
      n: Rt,
      classes: Fw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: V,
      handleClick: S
    };
  }
});
yv.render = Hw;
const Ta = yv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Ek = Ta, Yw = {
  name: {
    type: [String, Number]
  }
}, {
  n: jw,
  classes: Ww
} = _("tab-item");
function Gw(e, n) {
  var r = ae("var-swipe-item");
  return p(), ye(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [H(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var bv = Q({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Xn
  },
  props: Yw,
  setup(e) {
    var {
      index: n,
      tabsItems: r,
      bindTabsItems: a
    } = Ob(), {
      bindLists: t
    } = Vb(), o = z(() => e.name), l = z(() => n.value === Number(r.active.value)), i = {
      index: n,
      name: o,
      current: l
    };
    return a(i), t(i), {
      n: jw,
      classes: Ww,
      current: l
    };
  }
});
bv.render = Gw;
const Pa = bv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Ik = Pa, qw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Xw,
  classes: Kw
} = _("table");
function Zw(e, n) {
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
          style: G({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [H(e.$slots, "default")],
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
      [H(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var wv = Q({
  name: "VarTable",
  props: qw,
  setup() {
    return {
      toSizeUnit: ge,
      n: Xw,
      classes: Kw,
      formatElevation: gn
    };
  }
});
wv.render = Zw;
const Oa = wv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Nk = Oa;
function ls(e) {
  return ["horizontal", "vertical"].includes(e);
}
function Jw(e) {
  return ["auto", "always"].includes(e);
}
function Qw(e) {
  return ["normal", "reverse"].includes(e);
}
var _w = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: ls
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ls
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
    validator: Jw
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: Qw
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Je(Wt, "cssMode"),
  stickyZIndex: Je(Wt, "zIndex"),
  offsetTop: Je(Wt, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function ss(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function us(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: xw,
  classes: eC
} = _("tabs");
function nC(e, n) {
  return p(), ye(
    rt(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Ee({
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
          [H(e.$slots, "default"), A(
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
var Cv = Q({
  name: "VarTabs",
  components: {
    VarSticky: Kn
  },
  inheritAttrs: !1,
  props: _w,
  setup(e) {
    var n = B("0px"), r = B("0px"), a = B("0px"), t = B("0px"), o = B(!1), l = B(null), i = z(() => e.active), s = z(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = z(() => e.activeColor), d = z(() => e.inactiveColor), v = z(() => e.disabledColor), f = z(() => e.itemDirection), m = B(null), {
      tabList: h,
      bindTabList: g,
      length: y
    } = Rw(), w = (C) => {
      var $, L = ($ = C.name.value) != null ? $ : C.index.value, {
        active: K,
        onChange: J,
        onClick: Y
      } = e;
      k(e["onUpdate:active"], L), k(Y, L), L !== K && k(J, L);
    }, V = () => h.find((C) => {
      var {
        name: $
      } = C;
      return e.active === $.value;
    }), S = (C) => h.find(($) => {
      var {
        index: L
      } = $;
      return (C ?? e.active) === L.value;
    }), T = () => {
      if (y.value !== 0) {
        var {
          active: C
        } = e;
        if (on(C)) {
          var $ = C > y.value - 1 ? y.value - 1 : 0;
          return k(e["onUpdate:active"], $), S($);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || h.length >= 5;
    }, P = (C) => {
      var {
        element: $
      } = C, L = $.value;
      L && (e.layoutDirection === "horizontal" ? (n.value = L.offsetWidth + "px", a.value = L.offsetLeft + "px") : (r.value = L.offsetHeight + "px", t.value = L.offsetTop + "px"));
    }, I = (C) => {
      var {
        element: $
      } = C;
      if (o.value) {
        var L = l.value, K = $.value;
        if (e.layoutDirection === "horizontal") {
          var J = K.offsetLeft + K.offsetWidth / 2 - L.offsetWidth / 2;
          mt(L, {
            left: J,
            animation: Bo
          });
        } else {
          var Y = K.offsetTop + K.offsetHeight / 2 - L.offsetHeight / 2;
          mt(L, {
            top: Y,
            animation: Bo
          });
        }
      }
    }, b = () => {
      var C = V() || S() || T();
      !C || C.disabled.value || (E(), P(C), I(C));
    }, M = /* @__PURE__ */ function() {
      var C = us(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), D = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: b,
      onTabClick: w
    };
    return g(D), oe(() => y.value, /* @__PURE__ */ us(function* () {
      yield Rn(), b();
    })), oe(() => e.active, b), oe(() => e.scrollable, b), Mr(b), Jn(() => window, "resize", b), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Le,
      toSizeUnit: ge,
      n: xw,
      classes: eC,
      resize: b,
      resizeSticky: M,
      formatElevation: gn
    };
  }
});
Cv.render = nC;
const Va = Cv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Dk = Va, rC = {
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
  "onUpdate:active": U()
};
function ds(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function aC(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ds(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ds(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: tC
} = _("tabs-items");
function oC(e, n) {
  var r = ae("var-swipe");
  return p(), ye(
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
      default: ve(() => [H(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var Sv = Q({
  name: "VarTabsItems",
  components: {
    VarSwipe: qn
  },
  props: rC,
  setup(e) {
    var n = B(null), r = z(() => e.active), {
      tabItemList: a,
      bindTabItem: t,
      length: o
    } = Pb(), l = (m) => a.find((h) => {
      var {
        name: g
      } = h;
      return m === g.value;
    }), i = (m) => a.find((h) => {
      var {
        index: g
      } = h;
      return m === g.value;
    }), s = (m) => l(m) || i(m), u = (m) => {
      var h, g = s(m);
      g && ((h = n.value) == null || h.to(g.index.value));
    }, d = (m) => {
      var h, g = a.find((w) => {
        var {
          index: V
        } = w;
        return V.value === m;
      }), y = (h = g.name.value) != null ? h : g.index.value;
      k(e["onUpdate:active"], y);
    }, v = () => n.value, f = {
      active: r
    };
    return t(f), oe(() => e.active, u), oe(() => o.value, /* @__PURE__ */ aC(function* () {
      yield Rn(), u(e.active);
    })), {
      swipe: n,
      n: tC,
      handleSwipeChange: d,
      getSwipe: v
    };
  }
});
Sv.render = oC;
const Ma = Sv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Ak = Ma;
const iC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, lC = {
  "--badge-default-color": "#555"
}, sC = {
  "--button-default-color": "#303030"
}, uC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, dC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, vC = {
  "--checkbox-unchecked-color": "#fff"
}, fC = {
  "--chip-default-color": "#555"
}, cC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, mC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, pC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, hC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, gC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, yC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, bC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, wC = {
  "--popup-content-background-color": "#1e1e1e"
}, CC = {
  "--pull-refresh-background": "#303030"
}, SC = {
  "--radio-unchecked-color": "#fff"
}, kC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, $C = {
  "--select-scroller-background": "#303030"
}, TC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, PC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, OC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, VC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, MC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, BC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, EC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, IC = {
  "--tabs-background": "#1e1e1e"
}, NC = {
  "--app-bar-color": "#272727"
}, DC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, AC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, zC = {
  "--menu-background-color": "#272727"
}, LC = {
  "--breadcrumb-inactive-color": "#aaa"
}, RC = {
  "--paper-background": "#303030"
}, UC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const FC = bi({
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
}, sC, dC, uC, BC, mC, TC, IC, VC, wC, pC, iC, fC, lC, EC, cC, CC, OC, PC, yC, MC, gC, $C, SC, vC, hC, bC, NC, DC, AC, zC, kC, LC, RC, UC);
var HC = {
  dark: FC
}, zk = null;
const wi = HC;
var Cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], tn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], vs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function YC(e) {
  return ["ampm", "24hr"].includes(e);
}
var jC = {
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
    validator: YC
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
  "onUpdate:modelValue": U(),
  onChange: U()
}, kv = (e, n) => e === "24hr" || n === "am", Xi = (e, n, r) => {
  var a = Cn.findIndex((o) => R(o) === R(r)), t = kv(e, n) ? r : tn[a];
  return {
    hourStr: t,
    hourNum: R(t)
  };
}, cn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: R(n),
    minute: R(r),
    second: R(a)
  };
}, $v = (e) => {
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
  } = Xi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: h,
      minute: g
    } = cn(i);
    f = h === v && a > g;
  }
  if (!i && s) {
    var {
      hour: y,
      minute: w
    } = cn(s);
    f = y === v && a < w;
  }
  if (i && s) {
    var {
      hour: V,
      minute: S
    } = cn(i), {
      hour: T,
      minute: E
    } = cn(s);
    f = T === v && a < E || V === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Tv = (e) => {
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
  } = Xi(t, o, l), m = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: g,
      minute: y,
      second: w
    } = cn(s);
    m = g === f && y < i || y === i && a > w;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: S,
      second: T
    } = cn(u);
    m = V === f && S > i || S === i && a > T;
  }
  if (s && u) {
    var {
      hour: E,
      minute: P,
      second: I
    } = cn(s), {
      hour: b,
      minute: M,
      second: D
    } = cn(u);
    m = E === f && P < i || b === f && M > i || E === f && P === i && a > I || b === f && M === i && a < D;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || h;
}, {
  n: WC,
  classes: GC
} = _("time-picker");
function qC(e, n) {
  return p(), O(
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
    ), (p(!0), O(
      Ve,
      null,
      Ue(e.timeScales, (r, a) => (p(), O(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: G(e.getStyle(a, r, !1))
        },
        ne(r),
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
        Ve,
        null,
        Ue(e.hours24, (r, a) => (p(), O(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: G(e.getStyle(a, r, !0))
          },
          ne(r),
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
var Pv = Q({
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
    } = n, a = B(null), t = B([]), o = B([]), l = z(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = z(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = z(() => e.type === "hour" ? Cn : vs), u = (y, w) => {
      var V;
      y = (V = y) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? $v : Tv, T = {
        time: R(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: R(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(T, "minute"), S(T);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var y = e.isInner ? tn[i.value] : s.value[i.value];
      return s.value === vs ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, w) => w ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (kv(e.format, e.ampm))
          return t.value.includes(y);
        var w = Cn.findIndex((V) => V === y);
        return o.value.includes(w);
      }
      return u(y, !0);
    }, m = (y, w, V) => {
      var S = 2 * Math.PI / 12 * y - Math.PI / 2, T = 50 * (1 + Math.cos(S)), E = 50 * (1 + Math.sin(S)), P = () => v(y, V) ? f(w) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: I,
        color: b
      } = P();
      return {
        left: T + "%",
        top: E + "%",
        backgroundColor: I,
        color: b
      };
    }, h = () => {
      var {
        width: y,
        height: w
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: w
      };
    }, g = () => {
      if (i.value !== void 0) {
        var y = e.ampm === "am" ? Cn : tn;
        return Ia(y[i.value], 2, "0");
      }
    };
    return oe([i, () => e.isInner], (y, w) => {
      var [V, S] = y, [T, E] = w, P = V === T && S === E;
      if (!(P || e.type !== "hour" || i.value === void 0)) {
        var I = S ? tn[i.value] : g(), b = e.useSeconds ? ":" + e.time.second : "", M = I + ":" + e.time.minute + b;
        e.preventNextUpdate || r("update", M), r("change-prevent-update");
      }
    }), oe(() => e.rad, (y, w) => {
      if (!(e.type === "hour" || y === void 0 || w === void 0)) {
        var V = y / 6 >= 0 ? y / 6 : y / 6 + 60, S = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (V !== S) {
          var T, {
            hourStr: E
          } = Xi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var P = ie().minute(V).format("mm"), I = e.useSeconds ? ":" + e.time.second : "";
            T = E + ":" + P + I;
          }
          if (e.type === "second") {
            var b = ie().second(V).format("ss"), M = e.useSeconds ? ":" + b : "";
            T = E + ":" + e.time.minute + M;
          }
          r("update", T);
        }
      }
    }), oe([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [w, V, S] = y;
      if (t.value = [], w && !V) {
        var {
          hour: T
        } = cn(w), E = Cn.filter((j) => R(j) > T), P = tn.filter((j) => R(j) > T);
        t.value = [...E, ...P];
      }
      if (!w && V) {
        var {
          hour: I
        } = cn(V), b = Cn.filter((j) => R(j) < I), M = tn.filter((j) => R(j) < I);
        t.value = [...b, ...M];
      }
      if (w && V) {
        var {
          hour: D
        } = cn(w), {
          hour: C
        } = cn(V), $ = Cn.filter((j) => R(j) < C || R(j) > D), L = tn.filter((j) => R(j) < C || R(j) > D);
        t.value = [...$, ...L];
      }
      if (S != null && S.hours) {
        var {
          hours: K
        } = S, J = Cn.filter((j) => !K(R(j))), Y = tn.filter((j) => !K(R(j)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...J, ...Y])];
      }
      o.value = t.value.map((j) => tn.findIndex((se) => j === se)).filter((j) => j >= 0);
    }, {
      immediate: !0
    }), {
      n: WC,
      classes: GC,
      hours24: tn,
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
Pv.render = qC;
const XC = Pv;
var {
  n: KC,
  classes: ZC
} = _("time-picker"), JC = (e) => (Ra(""), e = e(), Ua(), e), QC = /* @__PURE__ */ JC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), _C = {
  key: 0
};
function xC(e, n) {
  var r = ae("clock");
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
          ne(e.time.hour),
          3
          /* TEXT, CLASS */
        ), QC, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), O("span", _C, ":")) : x("v-if", !0), e.useSeconds ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
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
      )) : x("v-if", !0)],
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
        [Z(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), ye(
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
var Ov = Q({
  name: "VarTimePicker",
  components: {
    Clock: XC
  },
  props: jC,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(!1), o = B(!1), l = B(!1), i = B(!1), s = B(!1), u = B(void 0), d = B(0), v = B(0), f = B("hour"), m = B("am"), h = B(!1), g = B(!1), y = B({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ae({
      x: 0,
      y: 0
    }), V = Ae({
      x: [],
      y: []
    }), S = z(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), T = (F) => {
      k(e["onUpdate:modelValue"], F), k(e.onChange, F);
    }, E = (F) => F * 57.29577951308232, P = (F) => {
      i.value = !1, g.value = !1, f.value = F;
    }, I = (F) => {
      var {
        disableHour: N
      } = a.value, W = Cn.findIndex((de) => R(de) === R(y.value.hour)), ee = F === "am" ? Cn : tn, le = [...ee.slice(W), ...ee.slice(0, W)];
      return le.find((de, we) => (o.value = we !== 0, !N.includes(de)));
    }, b = (F) => {
      if (!e.readonly) {
        m.value = F;
        var N = I(F);
        if (N) {
          var W = e.useSeconds ? ":" + y.value.second : "", ee = Ia(N, 2, "0") + ":" + y.value.minute + W;
          T(ee);
        }
      }
    }, M = (F, N) => {
      var W = F >= V.x[0] && F <= V.x[1], ee = N >= V.y[0] && N <= V.y[1];
      return W && ee;
    }, D = (F) => {
      var N = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: ee,
        second: le
      } = cn(F);
      return {
        hour: ie().hour(W).format(N),
        minute: ie().minute(ee).format("mm"),
        second: ie().second(le).format("ss")
      };
    }, C = (F) => {
      var N = F / 30;
      return N >= 0 ? N : N + 12;
    }, $ = () => {
      var {
        width: F,
        height: N
      } = a.value.getSize(), W = w.x - F / 2 - 8, ee = w.x + F / 2 + 8, le = w.y - N / 2 - 8, de = w.y + N / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: ee,
        rangeYMin: le,
        rangeYMax: de
      };
    }, L = (F, N, W) => {
      var {
        disableHour: ee
      } = a.value;
      l.value = M(F, N);
      var le = Math.round(W / 30) * 30 + 90, de = C(le), we = t.value ? Cn[de] : tn[de];
      if (ee.includes(we) || (t.value = e.format === "24hr" ? M(F, N) : !1), t.value === l.value) {
        var Oe = t.value || m.value === "pm" ? tn[de] : Cn[de];
        h.value = ee.includes(Oe), !h.value && (u.value = le, i.value = !0);
      }
    }, K = (F) => {
      var {
        disableHour: N
      } = a.value, W = Math.round(F / 6) * 6 + 90, ee = W / 6 >= 0 ? W / 6 : W / 6 + 60, le = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: N,
        allowedTime: e.allowedTime
      };
      g.value = $v(le), !g.value && (d.value = W, s.value = !0);
    }, J = (F) => {
      var {
        disableHour: N
      } = a.value, W = Math.round(F / 6) * 6 + 90, ee = W / 6 >= 0 ? W / 6 : W / 6 + 60, le = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: R(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: N,
        allowedTime: e.allowedTime
      };
      Tv(le) || (v.value = W);
    }, Y = () => {
      var {
        left: F,
        top: N,
        width: W,
        height: ee
      } = n.value.getBoundingClientRect();
      if (w.x = F + W / 2, w.y = N + ee / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: le,
          rangeXMax: de,
          rangeYMin: we,
          rangeYMax: Oe
        } = $();
        V.x = [le, de], V.y = [we, Oe];
      }
    }, j = (F) => {
      if (F.preventDefault(), !e.readonly) {
        Y();
        var {
          clientX: N,
          clientY: W
        } = F.touches[0], ee = N - w.x, le = W - w.y, de = Math.round(E(Math.atan2(le, ee)));
        f.value === "hour" ? L(N, W, de) : f.value === "minute" ? K(de) : J(de);
      }
    }, se = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, q = () => {
      o.value = !1;
    };
    return oe(() => e.modelValue, (F) => {
      if (F) {
        var {
          hour: N,
          minute: W,
          second: ee
        } = cn(F), le = ie().hour(N).format("hh"), de = ie().hour(N).format("HH"), we = ie().minute(W).format("mm"), Oe = ie().second(ee).format("ss");
        u.value = (le === "12" ? 0 : R(le)) * 30, d.value = R(we) * 6, v.value = R(Oe) * 6, y.value = D(F), e.format !== "24hr" && (m.value = Ia("" + N, 2, "0") === de && tn.includes(de) ? "pm" : "am"), t.value = e.format === "24hr" && tn.includes(de);
      }
    }, {
      immediate: !0
    }), {
      n: KC,
      classes: ZC,
      getRad: S,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: j,
      checkPanel: P,
      checkAmpm: b,
      end: se,
      update: T,
      changePreventUpdate: q,
      formatElevation: gn
    };
  }
});
Ov.render = xC;
const Ba = Ov;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var Lk = Ba, eS = {
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
  onBeforeFilter: U(),
  onBeforeRead: U(),
  onAfterRead: U(),
  onBeforeRemove: U(),
  onRemove: U(),
  onOversize: U(),
  "onUpdate:modelValue": U()
};
function fs(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        fs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        fs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: nS,
  classes: rS
} = _("uploader"), aS = 0, tS = ["onClick"], oS = ["onClick"], iS = ["src", "alt"], lS = ["multiple", "accept", "capture", "disabled"], sS = ["src"];
function uS(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = ae("var-popup"), l = Ie("ripple"), i = Ie("hover");
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
        Ve,
        null,
        Ue(e.files, (s) => ke((p(), O(
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
            ne(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Pn((u) => e.handleRemove(s), ["stop"])
            },
            [Z(
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
            oS
          )) : x("v-if", !0), s.cover ? (p(), O(
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
            iS
          )) : x("v-if", !0), A(
            "div",
            {
              class: c(e.n("file-indicator"))
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
                style: G({
                  width: s.state === "success" || s.state === "error" ? "100%" : s.progress + "%"
                })
              },
              null,
              6
              /* CLASS, STYLE */
            )],
            2
            /* CLASS */
          )],
          10,
          tS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((p(), O(
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
          lS
        ), H(e.$slots, "default", {}, () => [Z(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), Z(
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
      }], [i, e.handleHovering, "desktop"]]) : x("v-if", !0)],
      2
      /* CLASS */
    ), Z(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), Z(
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
        default: ve(() => {
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
            sS
          )) : x("v-if", !0)];
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
var Vv = Q({
  name: "VarUploader",
  directives: {
    Ripple: We,
    Hover: Un
  },
  components: {
    VarIcon: Pe,
    VarPopup: kn,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  props: eS,
  setup(e) {
    var n = B(null), r = B(!1), a = B(null), t = z(() => {
      var {
        maxlength: j,
        modelValue: {
          length: se
        }
      } = e;
      return on(j) ? se + " / " + j : "";
    }), {
      form: o,
      bindForm: l
    } = Mn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Vn(), {
      hovering: v,
      handleHovering: f
    } = Pr(), m = z(() => {
      var {
        modelValue: j,
        hideList: se
      } = e;
      return se ? [] : j;
    }), h = (j) => {
      var {
        disabled: se,
        readonly: q,
        previewed: F
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || se || q || !F)) {
        var {
          url: N
        } = j;
        if (je(N) && _i(N)) {
          Ln(N);
          return;
        }
        je(N) && xi(N) && (a.value = j, r.value = !0);
      }
    }, g = (j) => ({
      id: aS++,
      url: "",
      cover: "",
      name: j.name,
      file: j,
      progress: 0
    }), y = (j) => {
      var se = j.target, {
        files: q
      } = se;
      return Array.from(q);
    }, w = (j) => new Promise((se) => {
      if (!j.file.type.startsWith("image")) {
        se(j);
        return;
      }
      var q = new FileReader();
      q.onload = () => {
        var F = q.result;
        j.cover = F, j.url = F, se(j);
      }, q.readAsDataURL(j.file);
    }), V = (j) => j.map(w), S = (j) => {
      var {
        onBeforeRead: se
      } = e;
      return j.map((q) => new Promise((F) => {
        se || F({
          valid: !0,
          varFile: q
        });
        var N = Ut(k(se, Ae(q)));
        Promise.all(N).then((W) => {
          F({
            valid: W.every(Boolean),
            varFile: q
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var j = Vo(function* (se) {
        var {
          maxsize: q,
          maxlength: F,
          modelValue: N,
          onOversize: W,
          onAfterRead: ee,
          onBeforeFilter: le,
          readonly: de,
          disabled: we
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || we || de)) {
          var Oe = (Fe) => Fe.filter((He) => He.file.size > R(q) ? (k(W, Ae(He)), !1) : !0), dn = (Fe) => {
            var He = Math.min(Fe.length, R(F) - N.length);
            return Fe.slice(0, He);
          }, re = /* @__PURE__ */ function() {
            var Fe = Vo(function* (He) {
              if (!le)
                return He;
              var te = Ut(le);
              for (var be of te)
                He = yield be(He);
              return He;
            });
            return function(te) {
              return Fe.apply(this, arguments);
            };
          }(), ue = y(se), me = ue.map(g);
          me = yield re(me), me = q != null ? Oe(me) : me, me = F != null ? dn(me) : me;
          var De = yield Promise.all(V(me)), Ke = yield Promise.all(S(De)), Ge = Ke.filter((Fe) => {
            var {
              valid: He
            } = Fe;
            return He;
          }).map((Fe) => {
            var {
              varFile: He
            } = Fe;
            return He;
          });
          k(e["onUpdate:modelValue"], [...N, ...Ge]), se.target.value = "", Ge.forEach((Fe) => k(ee, Ae(Fe)));
        }
      });
      return function(q) {
        return j.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var j = Vo(function* (se) {
        var {
          disabled: q,
          readonly: F,
          modelValue: N,
          onBeforeRemove: W,
          onRemove: ee
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || q || F)) {
          if (W) {
            var le = Ut(k(W, Ae(se)));
            if ((yield Promise.all(le)).some((we) => !we))
              return;
          }
          var de = N.filter((we) => we !== se);
          k(ee, Ae(se)), $("onRemove"), k(e["onUpdate:modelValue"], de);
        }
      });
      return function(q) {
        return j.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((j) => j.state === "success"), I = () => e.modelValue.filter((j) => j.state === "error"), b = () => e.modelValue.filter((j) => j.state === "loading"), M = () => {
      n.value.click();
    }, D = () => {
      a.value = null, r.value = !1, Ln.close();
    }, C = {
      getSuccess: P,
      getError: I,
      getLoading: b
    }, $ = (j) => {
      Ne(() => {
        var {
          validateTrigger: se,
          rules: q,
          modelValue: F
        } = e;
        s(se, j, q, F, C);
      });
    }, L = !1, K = () => u(e.rules, e.modelValue, C), J = () => {
      L = !0, k(e["onUpdate:modelValue"], []), d();
    }, Y = {
      validate: K,
      resetValidation: d,
      reset: J
    };
    return k(l, Y), oe(() => e.modelValue, () => {
      !L && $("onChange"), L = !1;
    }, {
      deep: !0
    }), {
      n: nS,
      classes: rS,
      formatElevation: gn,
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
      isHTMLSupportVideo: xi,
      isHTMLSupportImage: _i,
      preview: h,
      handleChange: T,
      handleRemove: E,
      getSuccess: P,
      getError: I,
      getLoading: b,
      validate: K,
      resetValidation: d,
      reset: J,
      chooseFile: M,
      closePreview: D,
      toSizeUnit: ge
    };
  }
});
Vv.render = uS;
const Ea = Vv;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var Rk = Ea;
const dS = "2.10.2";
function vS(e) {
  Qn.install && e.use(Qn), Nr.install && e.use(Nr), Dr.install && e.use(Dr), Ar.install && e.use(Ar), zr.install && e.use(zr), mr.install && e.use(mr), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Fr.install && e.use(Fr), en.install && e.use(en), Hr.install && e.use(Hr), Yr.install && e.use(Yr), pr.install && e.use(pr), hr.install && e.use(hr), jr.install && e.use(jr), gr.install && e.use(gr), Wr.install && e.use(Wr), Gr.install && e.use(Gr), qr.install && e.use(qr), bn.install && e.use(bn), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Jr.install && e.use(Jr), _n.install && e.use(_n), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), Gn.install && e.use(Gn), _e.install && e.use(_e), Un.install && e.use(Un), mn.install && e.use(mn), Pe.install && e.use(Pe), ea.install && e.use(ea), Ln.install && e.use(Ln), na.install && e.use(na), ra.install && e.use(ra), Sr.install && e.use(Sr), pt.install && e.use(pt), aa.install && e.use(aa), ta.install && e.use(ta), Dn.install && e.use(Dn), ci.install && e.use(ci), Lo.install && e.use(Lo), Zn.install && e.use(Zn), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), za.install && e.use(za), kn.install && e.use(kn), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), We.install && e.use(We), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), yi.install && e.use(yi), wa.install && e.use(wa), Ca.install && e.use(Ca), Sa.install && e.use(Sa), Kn.install && e.use(Kn), wt.install && e.use(wt), qn.install && e.use(qn), Xn.install && e.use(Xn), $a.install && e.use($a), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Va.install && e.use(Va), Ma.install && e.use(Ma), wi.install && e.use(wi), Ba.install && e.use(Ba), wr.install && e.use(wr), Ea.install && e.use(Ea);
}
const Uk = {
  version: dS,
  install: vS,
  ActionSheet: Qn,
  AppBar: Nr,
  Avatar: Dr,
  AvatarGroup: Ar,
  BackTop: zr,
  Badge: mr,
  BottomNavigation: Lr,
  BottomNavigationItem: Rr,
  Breadcrumb: Ur,
  Breadcrumbs: Fr,
  Button: en,
  ButtonGroup: Hr,
  Card: Yr,
  Cell: pr,
  Checkbox: hr,
  CheckboxGroup: jr,
  Chip: gr,
  Col: Wr,
  Collapse: Gr,
  CollapseItem: qr,
  Context: bn,
  Countdown: Xr,
  Counter: Kr,
  DatePicker: Jr,
  Dialog: _n,
  Divider: Qr,
  Ellipsis: _r,
  Fab: xr,
  Form: Gn,
  FormDetails: _e,
  Hover: Un,
  HoverOverlay: mn,
  Icon: Pe,
  Image: ea,
  ImagePreview: Ln,
  IndexAnchor: na,
  IndexBar: ra,
  Input: Sr,
  Lazy: pt,
  Link: aa,
  List: ta,
  Loading: Dn,
  LoadingBar: ci,
  Locale: Lo,
  Menu: Zn,
  Option: oa,
  Overlay: ia,
  Pagination: la,
  Paper: sa,
  Picker: za,
  Popup: kn,
  Progress: ua,
  PullRefresh: da,
  Radio: va,
  RadioGroup: fa,
  Rate: ca,
  Result: ma,
  Ripple: We,
  Row: pa,
  Select: ha,
  Skeleton: ga,
  Slider: ya,
  Snackbar: yi,
  Space: wa,
  Step: Ca,
  Steps: Sa,
  Sticky: Kn,
  StyleProvider: wt,
  Swipe: qn,
  SwipeItem: Xn,
  Switch: $a,
  Tab: Ta,
  TabItem: Pa,
  Table: Oa,
  Tabs: Va,
  TabsItems: Ma,
  Themes: wi,
  TimePicker: Ba,
  Tooltip: wr,
  Uploader: Ea
};
export {
  Qn as ActionSheet,
  Nr as AppBar,
  Dr as Avatar,
  Ar as AvatarGroup,
  zr as BackTop,
  mr as Badge,
  Lr as BottomNavigation,
  Rr as BottomNavigationItem,
  Ur as Breadcrumb,
  Fr as Breadcrumbs,
  en as Button,
  Hr as ButtonGroup,
  Yr as Card,
  pr as Cell,
  hr as Checkbox,
  jr as CheckboxGroup,
  gr as Chip,
  Wr as Col,
  Gr as Collapse,
  qr as CollapseItem,
  bn as Context,
  Xr as Countdown,
  Kr as Counter,
  Jr as DatePicker,
  _n as Dialog,
  Qr as Divider,
  _r as Ellipsis,
  xr as Fab,
  Gn as Form,
  _e as FormDetails,
  Un as Hover,
  mn as HoverOverlay,
  Pe as Icon,
  ea as Image,
  Ln as ImagePreview,
  na as IndexAnchor,
  ra as IndexBar,
  Sr as Input,
  pt as Lazy,
  aa as Link,
  ta as List,
  Dn as Loading,
  ci as LoadingBar,
  Lo as Locale,
  Zn as Menu,
  oa as Option,
  ia as Overlay,
  Fo as PIXEL,
  la as Pagination,
  sa as Paper,
  za as Picker,
  kn as Popup,
  ua as Progress,
  da as PullRefresh,
  va as Radio,
  fa as RadioGroup,
  ca as Rate,
  ma as Result,
  We as Ripple,
  pa as Row,
  Gi as SNACKBAR_TYPE,
  ha as Select,
  ga as Skeleton,
  ya as Slider,
  yi as Snackbar,
  wa as Space,
  Ca as Step,
  Sa as Steps,
  Kn as Sticky,
  wt as StyleProvider,
  qn as Swipe,
  Xn as SwipeItem,
  $a as Switch,
  Ta as Tab,
  Pa as TabItem,
  Oa as Table,
  Va as Tabs,
  Ma as TabsItems,
  wi as Themes,
  Ba as TimePicker,
  wr as Tooltip,
  Ea as Uploader,
  yS as _ActionSheetComponent,
  bS as _AppBarComponent,
  CS as _AvatarComponent,
  SS as _AvatarGroupComponent,
  OS as _BackTopComponent,
  VS as _BadgeComponent,
  MS as _BottomNavigationComponent,
  BS as _BottomNavigationItemComponent,
  ES as _BreadcrumbComponent,
  IS as _BreadcrumbsComponent,
  PS as _ButtonComponent,
  NS as _ButtonGroupComponent,
  DS as _CardComponent,
  AS as _CellComponent,
  LS as _CheckboxComponent,
  RS as _CheckboxGroupComponent,
  US as _ChipComponent,
  FS as _ColComponent,
  HS as _CollapseComponent,
  YS as _CollapseItemComponent,
  cS as _ContextComponent,
  jS as _CountdownComponent,
  WS as _CounterComponent,
  GS as _DatePickerComponent,
  qS as _DialogComponent,
  XS as _DividerComponent,
  ZS as _EllipsisComponent,
  JS as _FabComponent,
  QS as _FormComponent,
  zS as _FormDetailsComponent,
  TS as _HoverComponent,
  $S as _HoverOverlayComponent,
  hS as _IconComponent,
  _S as _ImageComponent,
  nk as _ImagePreviewComponent,
  ak as _IndexAnchorComponent,
  tk as _IndexBarComponent,
  ok as _InputComponent,
  wS as _LazyComponent,
  ik as _LinkComponent,
  lk as _ListComponent,
  sk as _LoadingBarComponent,
  kS as _LoadingComponent,
  gS as _LocaleComponent,
  uk as _MenuComponent,
  dk as _OptionComponent,
  vk as _OverlayComponent,
  fk as _PaginationComponent,
  ck as _PaperComponent,
  mk as _PickerComponent,
  pS as _PopupComponent,
  pk as _ProgressComponent,
  hk as _PullRefreshComponent,
  gk as _RadioComponent,
  yk as _RadioGroupComponent,
  bk as _RateComponent,
  wk as _ResultComponent,
  mS as _RippleComponent,
  Ck as _RowComponent,
  Sk as _SelectComponent,
  kk as _SkeletonComponent,
  $k as _SliderComponent,
  Tk as _SnackbarComponent,
  Pk as _SpaceComponent,
  Ok as _StepComponent,
  Vk as _StepsComponent,
  rk as _StickyComponent,
  Mk as _StyleProviderComponent,
  xS as _SwipeComponent,
  ek as _SwipeItemComponent,
  Bk as _SwitchComponent,
  Ek as _TabComponent,
  Ik as _TabItemComponent,
  Nk as _TableComponent,
  Dk as _TabsComponent,
  Ak as _TabsItemsComponent,
  zk as _ThemesComponent,
  Lk as _TimePickerComponent,
  KS as _TooltipComponent,
  Rk as _UploaderComponent,
  gf as actionSheetProps,
  Oi as add,
  $f as appBarProps,
  Zf as avatarGroupProps,
  jf as avatarProps,
  Pc as backTopProps,
  Ic as badgeProps,
  Yc as bottomNavigationItemProps,
  zc as bottomNavigationProps,
  Kc as breadcrumbProps,
  em as breadcrumbsProps,
  bc as buttonProps,
  vm as cardProps,
  gm as cellProps,
  Dm as checkboxGroupProps,
  Pm as checkboxProps,
  Fm as chipProps,
  qm as colProps,
  rp as collapseItemProps,
  _m as collapseProps,
  ip as countdownProps,
  rh as counterProps,
  kh as datePickerProps,
  Uk as default,
  qe as defaultLazyOptions,
  Fh as dialogProps,
  Gh as dividerProps,
  As as enUS,
  Cm as formDetailsProps,
  yy as formProps,
  Ns as iconProps,
  Fs as imageCache,
  Fy as imagePreviewProps,
  ky as imageProps,
  Qy as indexAnchorProps,
  nb as indexBarProps,
  fb as inputProps,
  vS as install,
  Cb as linkProps,
  Tb as listProps,
  Db as loadingBarProps,
  ur as loadingProps,
  Gb as menuProps,
  Ls as merge,
  Qb as optionProps,
  n0 as overlayProps,
  Ze as pack,
  zs as packs,
  a0 as paginationProps,
  s0 as paperProps,
  f0 as pickerProps,
  Ot as popupProps,
  w0 as progressProps,
  O0 as pullRefreshProps,
  L0 as radioGroupProps,
  B0 as radioProps,
  H0 as rateProps,
  G0 as resultProps,
  E1 as rowProps,
  z1 as selectProps,
  H1 as skeletonProps,
  q1 as sliderProps,
  iv as snackbarProps,
  hw as spaceProps,
  bw as stepProps,
  Ow as stepsProps,
  Wt as stickyProps,
  Bw as styleProviderProps,
  pd as swipeProps,
  Nw as switchProps,
  Yw as tabItemProps,
  Lw as tabProps,
  qw as tableProps,
  rC as tabsItemsProps,
  _w as tabsProps,
  jC as timePickerProps,
  ay as tooltipProps,
  eS as uploaderProps,
  Vi as use,
  Pr as useHoverOverlay,
  Pi as useLocale,
  dS as version,
  Ti as zhCN
};
