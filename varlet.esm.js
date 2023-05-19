import { reactive as Ae, onMounted as no, nextTick as Ne, onActivated as Mn, isRef as Iv, watch as ie, onBeforeUnmount as St, onDeactivated as xr, unref as st, inject as Nv, getCurrentInstance as et, computed as L, provide as Dv, isVNode as kt, Comment as Av, Fragment as Ve, ref as V, createApp as zv, h as ms, onBeforeMount as Lv, onUnmounted as rt, defineComponent as Q, createVNode as J, Teleport as La, Transition as Le, withDirectives as ke, vShow as $n, mergeProps as Ee, openBlock as h, createBlock as ye, resolveDynamicComponent as nt, normalizeClass as c, normalizeStyle as K, resolveComponent as ae, resolveDirective as Ie, withCtx as ve, createElementVNode as A, renderSlot as Y, toDisplayString as re, createElementBlock as T, renderList as Ue, createCommentVNode as x, onUpdated as $t, createTextVNode as Ce, pushScopeId as Ra, popScopeId as Ua, withModifiers as Tr, normalizeProps as Tt, guardReactiveProps as ao, vModelText as Rv, toRefs as Uv, withKeys as Zi, toRaw as Ji, TransitionGroup as Fv } from "vue";
var ps = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, gS = Ae(ps);
const yr = Ae(ps), Fe = (e) => typeof e == "string", Mo = (e) => typeof e == "boolean", or = (e) => typeof e == "number", Ci = (e) => Object.prototype.toString.call(e) === "[object Object]", Hv = (e) => typeof e == "object" && e !== null, Ot = (e) => typeof e == "function", Te = (e) => Array.isArray(e), Yv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, fn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Si = (e) => e === window, R = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Mo(e) ? Number(e) : e, Gt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, ki = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, at = () => typeof window < "u", Qi = (e) => [...new Set(e)], hs = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), jv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Wv = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ut = (e) => Te(e) ? e : [e];
var _i = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), xi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Gv = (e) => {
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
      this.has(n) && Gt(this.cache, n);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Bo = (e) => e, el = (e) => Math.pow(e, 3), gs = (e) => e < 0.5 ? el(e * 2) / 2 : 1 - el((1 - e) * 2) / 2, to = (e, r) => e ?? r, ys = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Ia = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Or(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function rl(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
}
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Eo.apply(this, arguments);
}
function Na(e) {
  return window.getComputedStyle(e);
}
function mr(e) {
  if (Si(e)) {
    var r = e.innerWidth, n = e.innerHeight, a = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      right: r,
      bottom: n,
      width: r,
      height: n
    };
    return Eo({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function qv(e) {
  var {
    left: r
  } = mr(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function nl(e) {
  var {
    top: r
  } = mr(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function mt(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function $i(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function Xv(e) {
  var {
    top: r,
    bottom: n,
    left: a,
    right: t
  } = mr(e), {
    width: o,
    height: l
  } = mr(window), i = a <= o && t >= 0, s = r <= l && n >= 0;
  return i && s;
}
function So(e) {
  var {
    transform: r
  } = Na(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function Tn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = Na(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function Kv(e) {
  for (var r = [], n = e; !Si(n); )
    n = Tn(n), r.push(n);
  return r;
}
function bs(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Or(r, "target element cannot found"), n;
  }
  if (Hv(e))
    return e;
  Or(r, 'type of prop "target" should be a selector or an element object');
}
function al() {
  var {
    width: e,
    height: r
  } = mr(window);
  return e > r ? {
    vMin: r,
    vMax: e
  } : {
    vMin: e,
    vMax: r
  };
}
var ws = (e) => Fe(e) && e.endsWith("rem"), Zv = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), Jv = (e) => Fe(e) && e.endsWith("px") || or(e), Qv = (e) => Fe(e) && e.endsWith("%"), Cs = (e) => Fe(e) && e.endsWith("vw"), Ss = (e) => Fe(e) && e.endsWith("vh"), ks = (e) => Fe(e) && e.endsWith("vmin"), $s = (e) => Fe(e) && e.endsWith("vmax"), _v = (e) => Fe(e) && e.startsWith("calc("), xv = (e) => Fe(e) && e.startsWith("var("), je = (e) => {
  if (or(e))
    return e;
  if (Jv(e))
    return +e.replace("px", "");
  if (!at())
    return 0;
  var {
    width: r,
    height: n
  } = mr(window);
  if (Cs(e))
    return +e.replace("vw", "") * r / 100;
  if (Ss(e))
    return +e.replace("vh", "") * n / 100;
  if (ws(e)) {
    var a = +e.replace("rem", ""), t = Na(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return ks(e) ? al().vMin : $s(e) ? al().vMax : Fe(e) ? R(e) : 0;
}, ge = (e) => {
  if (e != null)
    return Qv(e) || Cs(e) || Ss(e) || Zv(e) || ws(e) || _v(e) || xv(e) || ks(e) || $s(e) ? e : je(e) + "px";
}, ar = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = ge(e), a = n.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = ys();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function tl(e) {
  var r = ys();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function oo(e) {
  br(() => {
    br(e);
  });
}
function Lr() {
  return new Promise((e) => {
    br(() => {
      br(e);
    });
  });
}
function ef() {
  return new Promise((e) => {
    br(e);
  });
}
function pt(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = mt(e), s = $i(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (n - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), br(d);
      } else
        e.scrollTo(a, n), u();
    };
    br(d);
  });
}
function Ts(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + jv(a);
    return r[o] = t, r;
  }, {});
}
function rf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function qt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ir(e) {
  let r = !1;
  no(() => {
    e(), Ne(() => {
      r = !0;
    });
  }), Mn(() => {
    r && e();
  });
}
function Zr(e, r, n, a = {}) {
  if (!at())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Ot(m) ? m() : st(m), u = (m) => {
    if (l || i)
      return;
    const g = s(m);
    g && (g.addEventListener(r, n, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const g = s(m);
    g && (g.removeEventListener(r, n, {
      capture: o
    }), l = !1);
  };
  let v;
  Iv(e) && (v = ie(() => e.value, (m, g) => {
    d(g), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return ir(() => {
    u(e);
  }), St(() => {
    d(e);
  }), xr(() => {
    d(e);
  }), f;
}
function Os(e, r, n) {
  if (!at())
    return;
  Zr(document, r, (t) => {
    const o = st(e);
    o && !o.contains(t.target) && n(t);
  });
}
var nf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function af(e) {
  const r = et();
  return e in r.provides;
}
function lr(e) {
  if (!af(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Nv(e), { childInstances: n, collect: a, clear: t } = r, o = nf(r, ["childInstances", "collect", "clear"]), l = et();
  return {
    index: L(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      no(() => {
        Ne().then(() => {
          a(l, u);
        });
      }), St(() => {
        Ne().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function tf(e) {
  const r = [], n = (a) => {
    if (a != null && a.component) {
      n(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      kt(t) && (r.push(t), n(t));
    });
  };
  return n(e), r;
}
function sr(e) {
  const r = et(), n = Ae([]), a = [], t = L(() => n.length), o = () => {
    const u = tf(r.subTree);
    n.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    n.push(u), a.push(d), o();
  }, i = (u, d) => {
    Gt(n, u), Gt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Dv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function ol(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function il(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Io.apply(this, arguments);
}
function Je(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function of(e) {
  var r = zv(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: r.mount(n),
    unmount() {
      r.unmount(), document.body.removeChild(n);
    }
  };
}
function tt(e, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {});
  var a = {
    setup() {
      return () => ms(e, Io({}, r, n));
    }
  }, {
    unmount: t
  } = of(a);
  return {
    unmountInstance: t
  };
}
function Ps(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Av) {
      if (n.type === Ve && Te(n.children)) {
        n.children.forEach((a) => {
          r.push(a);
        });
        return;
      }
      r.push(n);
    }
  }), r;
}
function Pr() {
  var e = V(""), r = /* @__PURE__ */ function() {
    var t = il(function* (o, l, i) {
      if (!Te(o) || !o.length)
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
    var t = il(function* (o, l, i, s, u) {
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
function lf(e) {
  Zr(() => window, "hashchange", e), Zr(() => window, "popstate", e);
}
function io() {
  var e = V(!1);
  return Mn(() => {
    e.value = !1;
  }), xr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function _(e) {
  var r = "var", n = r + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", r) : o.startsWith("--") ? "" + n + o : n + "__" + o : n, t = function() {
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
function S(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  if (Te(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function H(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function hr(e, r) {
  return e === !1 ? null : (e === !0 && r && (e = r), "var-elevation--" + e);
}
function Vs(e, r, n) {
  n === void 0 && (n = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = n, i = t ?? "onUpdate:" + r.toString(), s = () => e[r] != null ? e[r] : o;
  if (!a)
    return L({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : S(e[i], d);
      }
    });
  var u = V(s());
  return ie(() => e[r], () => {
    u.value = s();
  }), ie(() => u.value, (d) => {
    l ? l(i, d) : S(e[i], d);
  }), u;
}
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Xt.apply(this, arguments);
}
var {
  n: Ms
} = _("ripple"), ll = 250;
function sf(e) {
  var {
    zIndex: r,
    position: n
  } = Na(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function uf(e, r) {
  var {
    top: n,
    left: a
  } = mr(e), {
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
function Bs(e) {
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
      } = uf(this, e), s = document.createElement("div");
      s.classList.add(Ms()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), sf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function No() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Ms());
    if (n.length) {
      var a = n[n.length - 1], t = ll - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, ll);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function Es() {
  if (!(!rf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function df(e, r) {
  var n;
  e._ripple = Xt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: No.bind(e)
  }), e.addEventListener("touchstart", Bs, {
    passive: !0
  }), e.addEventListener("touchmove", Es, {
    passive: !0
  }), e.addEventListener("dragstart", No, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function vf(e) {
  e.removeEventListener("touchstart", Bs), e.removeEventListener("touchmove", Es), e.removeEventListener("dragstart", No), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function ff(e, r) {
  var n, a, t, o, l = {
    color: (n = r.value) == null ? void 0 : n.color,
    disabled: (a = r.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = Xt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Is = {
  mounted: df,
  unmounted: vf,
  updated: ff,
  install(e) {
    e.directive("ripple", this);
  }
}, yS = Is;
const We = Is;
function cf(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Pt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: cf
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
  onOpen: H(),
  onOpened: H(),
  onClose: H(),
  onClosed: H(),
  onClickOverlay: H(),
  "onUpdate:show": H(),
  // internal for Dialog
  onRouteChange: H()
};
function Ns() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Bt(e) {
  yr.locks[e] = 1, Ns();
}
function Et(e) {
  delete yr.locks[e], Ns();
}
function lo(e, r) {
  var {
    uid: n
  } = et();
  r && ie(r, (a) => {
    a === !1 ? Et(n) : a === !0 && e() === !0 && Bt(n);
  }), ie(e, (a) => {
    r && r() === !1 || (a === !0 ? Bt(n) : Et(n));
  }), Lv(() => {
    r && r() === !1 || e() === !0 && Bt(n);
  }), rt(() => {
    r && r() === !1 || e() === !0 && Et(n);
  }), Mn(() => {
    r && r() === !1 || e() === !0 && Bt(n);
  }), xr(() => {
    r && r() === !1 || e() === !0 && Et(n);
  });
}
function Vt(e, r) {
  var n = V(yr.zIndex);
  return ie(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Do.apply(this, arguments);
}
function mf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: Br,
  classes: ko
} = _("popup");
const Sr = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Pt,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Vt(() => e.show, 3), {
      disabled: o
    } = io(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      S(v), d && S(e["onUpdate:show"], !1);
    };
    lo(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      S(d ? e.onOpen : e.onClose);
    }), lf(() => S(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return J("div", {
        class: ko(Br("overlay"), d),
        style: Do({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => J("div", Ee({
      class: ko(Br("content"), Br("--" + e.position), [e.defaultStyle, Br("--content-background-color")], [e.defaultStyle, Br("$-elevation--3")], [e.safeArea, Br("--safe-area")], [e.safeAreaTop, Br("--safe-area-top")]),
      style: {
        zIndex: t.value
      }
    }, a), [S(n.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: g,
        position: p
      } = e;
      return J(Le, {
        name: Br("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(J("div", {
          class: ko(Br("$--box"), Br()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), J(Le, {
          name: g || Br("$-pop-" + p)
        }, {
          default: () => [f && s()]
        })]), [[$n, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return J(La, {
          to: d,
          disabled: o.value
        }, mf(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var bS = Sr, Ds = {
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
function sl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function pf(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: hf,
  classes: gf
} = _("icon");
function yf(e, r) {
  return h(), ye(
    nt(e.isURL(e.name) ? "img" : "i"),
    {
      class: c(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
      style: K({
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
var As = Q({
  name: "VarIcon",
  props: Ds,
  setup(e) {
    var r = V(""), n = V(!1), a = /* @__PURE__ */ function() {
      var t = pf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || R(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield Ne(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, R(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
      immediate: !0
    }), {
      n: hf,
      classes: gf,
      nextName: r,
      animateInProgress: n,
      isURL: Yv,
      toNumber: R,
      toSizeUnit: ge
    };
  }
});
As.render = yf;
const Oe = As;
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
var wS = Oe;
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
var bf = Ao({
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
}, Je(Pt, [
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
}, zs = {
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, zo.apply(this, arguments);
}
function Oi() {
  var e = {}, r = V({}), n = (o, l) => {
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
    e[o] = zo({}, e[o], l), a(o);
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
  packs: Ls,
  pack: Ze,
  add: Pi,
  use: Vi,
  merge: Rs
} = Oi();
Pi("zh-CN", Ti);
Vi("zh-CN");
var CS = {
  zhCN: Ti,
  enUS: zs,
  packs: Ls,
  pack: Ze,
  add: Pi,
  use: Vi,
  merge: Rs,
  useLocale: Oi
};
const Lo = {
  zhCN: Ti,
  enUS: zs,
  packs: Ls,
  pack: Ze,
  add: Pi,
  use: Vi,
  merge: Rs,
  useLocale: Oi
};
var {
  n: wf,
  classes: Cf
} = _("action-sheet"), Sf = ["onClick"];
function kf(e, r) {
  var n = ae("var-icon"), a = ae("var-popup"), t = Ie("ripple");
  return h(), ye(
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
        [Y(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: c(e.n("title"))
          },
          re(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), Y(e.$slots, "actions", {}, () => [(h(!0), T(
          Ve,
          null,
          Ue(e.actions, (o) => ke((h(), T(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: K({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (h(), ye(
              n,
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
              re(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            Sf
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
var Us = Q({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: bf,
  setup(e) {
    var r = V(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        S(l, t), o && S(e["onUpdate:show"], !1);
      }
    }, a = (t) => S(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: wf,
      classes: Cf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: Ze,
      dt: to,
      handleSelect: n
    };
  }
});
Us.render = kf;
const cn = Us;
function Ro() {
  return Ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ro.apply(this, arguments);
}
var on, Mi = {};
function $f(e) {
  return e === void 0 && (e = {}), Ro({}, Mi, e);
}
function Jr(e) {
  return at() ? new Promise((r) => {
    Jr.close();
    var n = Ae($f(e));
    n.teleport = "body", on = n;
    var {
      unmountInstance: a
    } = tt(cn, n, {
      onSelect: (t) => {
        S(n.onSelect, t), r(t);
      },
      onClose: () => {
        S(n.onClose), r("close");
      },
      onClosed: () => {
        S(n.onClosed), a(), on === n && (on = null);
      },
      onRouteChange: () => {
        a(), on === n && (on = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }) : Promise.resolve();
}
Jr.setDefaultOptions = function(e) {
  Mi = e;
};
Jr.resetDefaultOptions = function() {
  Mi = {};
};
Jr.close = function() {
  if (on != null) {
    var e = on;
    on = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
Jr.Component = cn;
cn.install = function(e) {
  e.component(cn.name, cn);
};
Jr.install = function(e) {
  e.component(cn.name, cn);
};
var SS = cn;
function Tf(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
}
var Of = {
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
    validator: Tf
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
  n: Pf,
  classes: Vf
} = _("app-bar");
function Mf(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: K(e.rootStyles)
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
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: K({
              paddingLeft: e.paddingLeft
            })
          },
          [Y(e.$slots, "default", {}, () => [Ce(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [Y(e.$slots, "default", {}, () => [Ce(
          re(e.title),
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
        [e.titlePosition === "right" ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: K({
              paddingRight: e.paddingRight
            })
          },
          [Y(e.$slots, "default", {}, () => [Ce(
            re(e.title),
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
var Fs = Q({
  name: "VarAppBar",
  props: Of,
  setup(e, r) {
    var {
      slots: n
    } = r, a = V(), t = V(), o = () => {
      a.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }, l = L(() => {
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
    return ir(o), $t(o), {
      n: Pf,
      classes: Vf,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Fs.render = Mf;
const Nn = Fs;
Nn.install = function(e) {
  e.component(Nn.name, Nn);
};
var kS = Nn;
function ul(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function so(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Uo.apply(this, arguments);
}
var Bf = "background-image", Ef = "lazy-loading", If = "lazy-error", dl = "lazy-attempt", Nf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Fo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ka = [], Kt = [], Hs = Gv(100), qe = {
  loading: Fo,
  error: Fo,
  attempt: 3,
  throttleWait: 300,
  events: Nf
}, Bi = ki(Mt, qe.throttleWait);
function uo(e, r) {
  e._lazy.arg === Bf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Df(e) {
  e._lazy.loading && uo(e, e._lazy.loading), Mt();
}
function Af(e) {
  e._lazy.error && uo(e, e._lazy.error), e._lazy.state = "error", Ii(e), Mt();
}
function Ys(e, r) {
  uo(e, r), e._lazy.state = "success", Ii(e), Mt();
}
function zf(e) {
  var r;
  Kt.includes(e) || (Kt.push(e), (r = qe.events) == null || r.forEach((n) => {
    e.addEventListener(n, Bi, {
      passive: !0
    });
  }));
}
function Lf() {
  Kt.forEach((e) => {
    var r;
    (r = qe.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Bi);
    });
  }), Kt.length = 0;
}
function Rf(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Ef)) != null ? n : qe.loading,
    error: (a = e.getAttribute(If)) != null ? a : qe.error,
    attempt: e.getAttribute(dl) ? Number(e.getAttribute(dl)) : qe.attempt
  };
  e._lazy = Uo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), uo(e, Fo), S(qe.filter, e._lazy);
}
function Uf(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Hs.add(r), Ys(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Af(e) : js(e);
  });
}
function js(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (Hs.has(r)) {
      Ys(e, r), e._lazy.attemptLock = !1;
      return;
    }
    Df(e), Uf(e, r);
  }
}
function Ei(e) {
  return Ho.apply(this, arguments);
}
function Ho() {
  return Ho = so(function* (e) {
    yield Lr(), Xv(e) && js(e);
  }), Ho.apply(this, arguments);
}
function Mt() {
  Ka.forEach((e) => Ei(e));
}
function Ff(e) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = so(function* (e) {
    !Ka.includes(e) && Ka.push(e), Kv(e).forEach(zf), yield Ei(e);
  }), Yo.apply(this, arguments);
}
function Ii(e) {
  Gt(Ka, e), Ka.length === 0 && Lf();
}
function Hf(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function Ws(e, r) {
  return jo.apply(this, arguments);
}
function jo() {
  return jo = so(function* (e, r) {
    Rf(e, r), yield Ff(e);
  }), jo.apply(this, arguments);
}
function Yf(e, r) {
  return Wo.apply(this, arguments);
}
function Wo() {
  return Wo = so(function* (e, r) {
    if (!Hf(e, r)) {
      Ka.includes(e) && (yield Ei(e));
      return;
    }
    yield Ws(e, r);
  }), Wo.apply(this, arguments);
}
function jf(e) {
  e === void 0 && (e = {});
  var {
    events: r,
    loading: n,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  qe.events = r ?? qe.events, qe.loading = n ?? qe.loading, qe.error = a ?? qe.error, qe.attempt = t ?? qe.attempt, qe.throttleWait = o ?? qe.throttleWait, qe.filter = l;
}
var Gs = {
  mounted: Ws,
  unmounted: Ii,
  updated: Yf,
  install(e, r) {
    jf(r), Bi = ki(Mt, qe.throttleWait), e.directive("lazy", this);
  }
}, $S = Gs;
const ht = Gs;
function Wf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var qs = (e) => ["mini", "small", "normal", "large"].includes(e);
function Xs(e) {
  return qs(e) || or(e) || Fe(e);
}
var Gf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Xs,
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
    validator: Wf,
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
  n: qf,
  classes: Xf
} = _("avatar"), Kf = ["src", "lazy-loading", "lazy-error"], Zf = ["src"];
function Jf(e, r) {
  var n = Ie("lazy");
  return h(), T(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: K({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: r[3] || (r[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (h(), T(
      Ve,
      {
        key: 0
      },
      [e.lazy ? ke((h(), T(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          src: e.src,
          style: K({
            objectFit: e.fit
          }),
          "lazy-loading": e.loading,
          "lazy-error": e.error,
          onLoad: r[0] || (r[0] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          })
        },
        null,
        46,
        Kf
      )), [[n, e.src]]) : (h(), T(
        "img",
        {
          key: 1,
          class: c(e.n("image")),
          src: e.src,
          style: K({
            objectFit: e.fit
          }),
          onLoad: r[1] || (r[1] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          }),
          onError: r[2] || (r[2] = function() {
            return e.handleError && e.handleError(...arguments);
          })
        },
        null,
        46,
        Zf
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (h(), T(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: K({
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
var Ks = Q({
  name: "VarAvatar",
  directives: {
    Lazy: ht
  },
  props: Gf,
  setup(e) {
    var r = V(null), n = V(null), a = V(1), t = () => {
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
      d ? (u._lazy.state === "success" && S(v, s), u._lazy.state === "error" && S(f, s)) : S(v, s);
    }, l = (s) => {
      S(e.onError, s);
    }, i = (s) => {
      S(e.onClick, s);
    };
    return ir(t), $t(t), {
      internalSizeValidator: qs,
      sizeValidator: Xs,
      toSizeUnit: ge,
      n: qf,
      classes: Xf,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Ks.render = Jf;
const Dn = Ks;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
var TS = Dn, Qf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: _f,
  classes: xf
} = _("avatar-group");
function ec(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: K(e.rootStyles)
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Zs = Q({
  name: "VarAvatarGroup",
  props: Qf,
  setup(e) {
    var r = L(() => e.offset == null ? {} : {
      "--avatar-group-offset": ge(e.offset)
    });
    return {
      n: _f,
      classes: xf,
      toSizeUnit: ge,
      rootStyles: r
    };
  }
});
Zs.render = ec;
const An = Zs;
An.install = function(e) {
  e.component(An.name, An);
};
var OS = An;
function rc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function nc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var un = {
  type: {
    type: String,
    default: "circle",
    validator: rc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: nc
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
  n: ac,
  classes: tc
} = _("loading"), oc = (e) => (Ra(""), e = e(), Ua(), e), ic = /* @__PURE__ */ oc(() => /* @__PURE__ */ A(
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
)), lc = [ic];
function sc(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [Y(e.$slots, "default"), e.loading ? (h(), T(
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
    )) : x("v-if", !0), e.isShow ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [A(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          lc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (h(!0), T(
        Ve,
        null,
        Ue(e.loadingTypeDict, (n, a) => (h(), T(
          Ve,
          {
            key: a
          },
          [e.type === a ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), T(
              Ve,
              null,
              Ue(n, (t) => (h(), T(
                "div",
                {
                  key: t + a,
                  style: K({
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
      )), e.$slots.description || e.description ? (h(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: K({
            color: e.color
          })
        },
        [Y(e.$slots, "description", {}, () => [Ce(
          re(e.description),
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
var Js = Q({
  name: "VarLoading",
  props: un,
  setup(e, r) {
    var {
      slots: n
    } = r, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = L(() => S(n.default) ? e.loading : !0);
    return {
      n: ac,
      classes: tc,
      multiplySizeUnit: ar,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Js.render = sc;
const Nr = Js;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var PS = Nr, uc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: dc,
  classes: vc
} = _("hover-overlay");
function fc(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var Qs = Q({
  name: "VarHoverOverlay",
  props: uc,
  setup() {
    return {
      n: dc,
      classes: vc
    };
  }
});
Qs.render = fc;
const cr = Qs;
cr.install = function(e) {
  e.component(cr.name, cr);
};
function On() {
  var e = V(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var VS = cr;
function _s(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function cc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[hs(t)] = o, n;
  }, {}) : {};
}
function mc(e) {
  var {
    value: r
  } = e._hover, n = cc(e);
  Object.keys(r).forEach((a) => {
    var t = hs(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function Ni(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function pc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function xs(e) {
  pc(e), Ni(e, e._hover.rawStyle);
}
function eu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Ot(e)) {
    e(this._hover.hovering);
    return;
  }
  Ni(this, e);
}
function ru() {
  if (this._hover.hovering = !1, Ot(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  xs(this);
}
function nu(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  _s(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, mc(e), e.addEventListener("mouseenter", eu), e.addEventListener("mouseleave", ru));
}
function au(e, r) {
  _s(r.arg) || (xs(e), e.removeEventListener("mouseenter", eu), e.removeEventListener("mouseleave", ru));
}
function hc(e, r) {
  e._hover && au(e, r);
}
function gc(e, r) {
  return !Ot(r.value) && e._hover.hovering;
}
function yc(e, r) {
  nu(e, r), gc(e, r) && Ni(e, r.value);
}
var tu = {
  mounted: nu,
  unmounted: au,
  beforeUpdate: hc,
  updated: yc,
  install(e) {
    e.directive("hover", this);
  }
}, MS = tu;
const Rr = tu;
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
function ou(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function bc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function wc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Cc = {
  type: {
    type: String,
    validator: ou
  },
  nativeType: {
    type: String,
    default: "button",
    validator: wc
  },
  size: {
    type: String,
    validator: bc
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
  loadingType: Je(un, "type"),
  loadingSize: Je(un, "size"),
  loadingColor: Go({}, Je(un, "color"), {
    default: "currentColor"
  }),
  onClick: H(),
  onTouchstart: H()
}, iu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Sc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(iu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function kc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = lr(iu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: $c,
  classes: Tc
} = _("button"), Oc = ["type", "disabled"];
function Pc(e, r) {
  var n = ae("var-loading"), a = ae("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return ke((h(), T(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: K({
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
    },
    [e.loading || e.pending ? (h(), ye(
      n,
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
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    Oc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var lu = Q({
  name: "VarButton",
  components: {
    VarLoading: Nr,
    VarHoverOverlay: cr
  },
  directives: {
    Ripple: We,
    Hover: Rr
  },
  props: Cc,
  setup(e) {
    var r = V(!1), {
      buttonGroup: n
    } = kc(), {
      hovering: a,
      handleHovering: t
    } = On(), o = L(() => {
      if (!n)
        return {
          elevation: hr(e.elevation, 2),
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
      e.autoLoading && (r.value = !0, u = Te(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || r.value || l(S(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || r.value || l(S(f, u));
    };
    return {
      n: $c,
      classes: Tc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
lu.render = Pc;
const er = lu;
er.install = function(e) {
  e.component(er.name, er);
};
var BS = er, Vc = {
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
  n: Mc,
  classes: Bc
} = _("back-top");
function Ec(e, r) {
  var n = ae("var-icon"), a = ae("var-button");
  return h(), ye(
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
        onClick: r[0] || (r[0] = Tr(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [Y(e.$slots, "default", {}, () => [J(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ve(() => [J(n, {
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
var su = Q({
  name: "VarBackTop",
  components: {
    VarButton: er,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Vc,
  setup(e) {
    var r = V(!1), n = V(null), a = V(!0), t, o = (d) => {
      S(e.onClick, d);
      var v = $i(t);
      pt(t, {
        left: v,
        duration: e.duration,
        animation: gs
      });
    }, l = ki(() => {
      r.value = mt(t) >= je(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? bs(e.target, "BackTop") : Tn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return no(() => {
      i(), s(), a.value = !1;
    }), Mn(s), St(u), xr(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: ge,
      n: Mc,
      classes: Bc,
      handleClick: o
    };
  }
});
su.render = Ec;
const zn = su;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var ES = zn;
function Ic(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Nc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Dc = {
  type: {
    type: String,
    default: "default",
    validator: Ic
  },
  position: {
    type: String,
    default: "right-top",
    validator: Nc
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
  n: Ac,
  classes: zc
} = _("badge");
function Lc(e, r) {
  var n = ae("var-icon");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), J(
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
          [e.icon ? (h(), ye(
            n,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-badge-cover": "",
              name: e.icon
            },
            null,
            8,
            ["class", "name"]
          )) : x("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), T(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            re(e.value),
            3
            /* TEXT, CLASS */
          )) : x("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[$n, !e.hidden]])]),
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
var uu = Q({
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Dc,
  setup(e) {
    var r = L(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && R(n) > R(a) ? a + "+" : n;
    });
    return {
      n: Ac,
      classes: zc,
      value: r
    };
  }
});
uu.render = Lc;
const mn = uu;
mn.install = function(e) {
  e.component(mn.name, mn);
};
var IS = mn, Rc = {
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
}, du = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Uc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = sr(du);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, qo.apply(this, arguments);
}
var {
  n: Fc,
  classes: Hc
} = _("bottom-navigation"), {
  n: vo
} = _("bottom-navigation-item"), vl = vo("--right-half-space"), fl = vo("--left-half-space"), cl = vo("--right-space"), Yc = {
  type: "primary"
};
function jc(e, r) {
  var n = ae("var-button");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (h(), ye(
      n,
      Ee({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ve(() => [Y(e.$slots, "fab")]),
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
var vu = Q({
  name: "VarBottomNavigation",
  components: {
    VarButton: er
  },
  props: Rc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = V(null), t = L(() => e.active), o = L(() => e.activeColor), l = L(() => e.inactiveColor), i = V({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Uc(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((b) => {
      var {
        name: P
      } = b;
      return t.value === P.value;
    }), m = () => u.find((b) => {
      var {
        index: P
      } = b;
      return t.value === P.value;
    }), g = () => {
      or(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > s.value - 1 && S(e["onUpdate:active"], s.value - 1));
    }, p = (b) => {
      t.value !== b && (e.onBeforeChange ? y(b) : w(b));
    }, y = (b) => {
      var P = Ut(S(e.onBeforeChange, b));
      Promise.all(P).then((D) => {
        D.every(Boolean) && w(b);
      });
    }, w = (b) => {
      S(e["onUpdate:active"], b), S(e.onChange, b);
    }, O = () => {
      var b = M();
      b.forEach((P) => {
        P.classList.remove(vl, fl, cl);
      });
    }, C = (b) => {
      var P = M(), D = P.length, B = b % 2 === 0;
      P.forEach((j, X) => {
        k(B, j, X, D);
      });
    }, k = (b, P, D, B) => {
      var j = D === B - 1;
      if (!b && j) {
        P.classList.add(cl);
        return;
      }
      var X = D === B / 2 - 1, z = D === B / 2;
      X ? P.classList.add(vl) : z && P.classList.add(fl);
    }, M = () => Array.from(a.value.querySelectorAll("." + vo())), $ = () => {
      S(e.onFabClick);
    }, I = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: p
    };
    return d(I), ie(() => s.value, v), ie(() => e.fabProps, (b) => {
      i.value = qo({}, Yc, b);
    }, {
      immediate: !0,
      deep: !0
    }), ir(() => {
      n.fab && C(s.value);
    }), $t(() => {
      O(), n.fab && C(s.value);
    }), {
      n: Fc,
      classes: Hc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: $,
      fabProps: i
    };
  }
});
vu.render = jc;
const Ln = vu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var NS = Ln, Wc = {
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
function Gc() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(du);
  return n || Or("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: qc,
  classes: Xc
} = _("bottom-navigation-item"), Kc = {
  type: "danger",
  dot: !0
};
function Zc(e, r) {
  var n = ae("var-icon"), a = ae("var-badge"), t = Ie("ripple");
  return ke((h(), T(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), ye(
      n,
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
    )) : x("v-if", !0), Y(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), ye(
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
      [e.$slots.default ? x("v-if", !0) : (h(), T(
        Ve,
        {
          key: 0
        },
        [Ce(
          re(e.label),
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
var fu = Q({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: mn,
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: Wc,
  setup(e) {
    var r = L(() => e.name), n = L(() => e.badge), a = V({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Gc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, g = (m = r.value) != null ? m : t.value;
      S(e.onClick, g), S(o.onToggle, g);
    };
    return l(d), ie(() => n.value, (m) => {
      a.value = m === !0 ? Kc : n.value;
    }, {
      immediate: !0
    }), {
      n: qc,
      classes: Xc,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
fu.render = Zc;
const Rn = fu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var DS = Rn, Jc = {
  separator: {
    type: String
  },
  onClick: H()
}, cu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Qc() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = sr(cu);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function _c() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = lr(cu);
  return r || Or("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: xc,
  classes: em
} = _("breadcrumb");
function rm(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
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
    ), e.isLast ? x("v-if", !0) : Y(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [A(
        "div",
        {
          class: c(e.n("separator"))
        },
        re((n = e.separator) != null ? n : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var mu = Q({
  name: "VarBreadcrumb",
  props: Jc,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = _c(), t = L(() => r.value === n.length.value - 1), o = L(() => n.separator.value), l = (i) => {
      t.value || S(e.onClick, i);
    };
    return a(null), {
      n: xc,
      classes: em,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
mu.render = rm;
const Un = mu;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var AS = Un, nm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: am
} = _("breadcrumbs");
function tm(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var pu = Q({
  name: "VarBreadcrumbs",
  props: nm,
  setup(e) {
    var r = L(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = Qc(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: am
    };
  }
});
pu.render = tm;
const Fn = pu;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var zS = Fn;
function om(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function im(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function lm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var sm = {
  type: {
    type: String,
    default: "default",
    validator: om
  },
  size: {
    type: String,
    default: "normal",
    validator: im
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
    validator: lm
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
  n: um,
  classes: dm
} = _("button-group");
function vm(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var hu = Q({
  name: "VarButtonGroup",
  props: sm,
  setup(e) {
    var {
      bindButtons: r
    } = Sc(), n = {
      elevation: L(() => e.elevation),
      type: L(() => e.type),
      size: L(() => e.size),
      color: L(() => e.color),
      textColor: L(() => e.textColor),
      mode: L(() => e.mode)
    };
    return r(n), {
      n: um,
      classes: dm,
      formatElevation: hr
    };
  }
});
hu.render = vm;
const Hn = hu;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var LS = Hn;
function fm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var cm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: fm,
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
function ml(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function pl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: mm,
  classes: pm
} = _("card"), hm = 500, gm = ["src", "alt"];
function ym(e, r) {
  var n = ae("var-icon"), a = ae("var-button"), t = Ie("ripple");
  return ke((h(), T(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "cardFloater",
        class: c(e.n("floater")),
        style: K({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [Y(e.$slots, "image", {}, () => [e.src ? (h(), T(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: K({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        gm
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [Y(e.$slots, "title", {}, () => [e.title ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: K({
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
      ), e.showFloatingButtons ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: K({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [Y(e.$slots, "close-button", {}, () => [J(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Tr(e.close, ["stop"])
          },
          {
            default: ve(() => [J(
              n,
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
        style: K({
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
var gu = Q({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Oe,
    VarButton: er
  },
  props: cm,
  setup(e) {
    var r = V(null), n = V(null), a = V("auto"), t = V("auto"), o = V("100%"), l = V("100%"), i = V("auto"), s = V("auto"), u = V(void 0), d = V("hidden"), v = V("0px"), f = V("0"), m = L(() => e.layout === "row"), g = V(!1), p = V(!1), {
      zIndex: y
    } = Vt(() => e.floating, 1);
    lo(() => e.floating, () => !m.value);
    var w = "auto", O = "auto", C = null, k = V(null), M = /* @__PURE__ */ function() {
      var P = pl(function* () {
        clearTimeout(k.value), clearTimeout(C), k.value = null, k.value = setTimeout(/* @__PURE__ */ pl(function* () {
          var {
            width: D,
            height: B,
            left: j,
            top: X
          } = mr(r.value);
          a.value = ge(D), t.value = ge(B), o.value = a.value, l.value = t.value, i.value = ge(X), s.value = ge(j), u.value = "fixed", w = i.value, O = s.value, g.value = !0, yield Lr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", p.value = !0;
        }), e.ripple ? hm : 0);
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), $ = () => {
      clearTimeout(C), clearTimeout(k.value), k.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = O, v.value = "0px", f.value = "0", g.value = !1, C = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", O = "auto", d.value = "hidden", u.value = void 0, p.value = !1;
      }, e.floatingDuration);
    }, I = () => {
      S(e["onUpdate:floating"], !1);
    }, b = (P) => {
      S(e.onClick, P);
    };
    return ie(() => e.floating, (P) => {
      m.value || Ne(() => {
        P ? M() : $();
      });
    }, {
      immediate: !0
    }), {
      n: mm,
      classes: pm,
      toSizeUnit: ge,
      card: r,
      cardFloater: n,
      holderWidth: a,
      holderHeight: t,
      floater: k,
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
      showFloatingButtons: g,
      floated: p,
      formatElevation: hr,
      handleClick: b
    };
  }
});
gu.render = ym;
const Yn = gu;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var RS = Yn, bm = {
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
  n: wm,
  classes: Cm
} = _("cell");
function Sm(e, r) {
  var n = ae("var-icon"), a = Ie("ripple");
  return ke((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: K(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "icon", {}, () => [e.icon ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [J(
        n,
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
      [Y(e.$slots, "default", {}, () => [e.title ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        re(e.description),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (h(), T(
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
var yu = Q({
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: bm,
  setup(e) {
    var r = L(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ge(e.borderOffset),
      "--cell-border-right": ge(e.borderOffset)
    }), n = (a) => {
      S(e.onClick, a);
    };
    return {
      n: wm,
      classes: Cm,
      toSizeUnit: ge,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
yu.render = Sm;
const pn = yu;
pn.install = function(e) {
  e.component(pn.name, pn);
};
var US = pn, km = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: $m
} = _("form-details"), Tm = {
  key: 0
}, Om = {
  key: 0
};
function Pm(e, r) {
  return h(), ye(
    Le,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), T(
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
          [J(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), T(
                "div",
                Tm,
                re(e.errorMessage),
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
          [J(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), T(
                "div",
                Om,
                re(e.extraMessage),
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
var bu = Q({
  name: "VarFormDetails",
  props: km,
  setup: () => ({
    n: $m
  })
});
bu.render = Pm;
const _e = bu;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var FS = _e, Vm = {
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
}, wu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Mm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(wu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Bm() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = lr(wu);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
  };
}
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
var Cu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(Cu), a = et(), t = n ? (o) => {
    n(Xo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: r,
    form: e,
    bindForm: t
  };
}
function Em() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = sr(Cu);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: Im,
  classes: Nm
} = _("checkbox");
function Dm(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("hover"), l = Ie("ripple");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [ke((h(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
          n,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : Y(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [J(
          n,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]), J(
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
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), J(
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
var Su = Q({
  name: "VarCheckbox",
  directives: {
    Ripple: We,
    Hover: Rr
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: cr
  },
  props: Vm,
  setup(e) {
    var r = V(!1), n = L(() => r.value === e.checkedValue), a = L(() => e.checkedValue), t = V(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Bm(), {
      hovering: i,
      handleHovering: s
    } = On(), {
      form: u,
      bindForm: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Pr(), p = (b) => {
      Ne(() => {
        var {
          validateTrigger: P,
          rules: D,
          modelValue: B
        } = e;
        f(P, b, D, B);
      });
    }, y = (b) => {
      r.value = b;
      var {
        checkedValue: P,
        onChange: D
      } = e;
      S(e["onUpdate:modelValue"], r.value), S(D, r.value), p("onChange"), b === P ? o == null || o.onChecked(P) : o == null || o.onUnchecked(P);
    }, w = (b) => {
      var {
        disabled: P,
        readonly: D,
        checkedValue: B,
        uncheckedValue: j,
        onClick: X
      } = e;
      if (!(u != null && u.disabled.value || P) && (S(X, b), !(u != null && u.readonly.value || D))) {
        t.value = !0;
        var z = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && z || y(n.value ? j : B);
      }
    }, O = (b) => {
      var {
        checkedValue: P,
        uncheckedValue: D
      } = e;
      r.value = b.includes(P) ? P : D;
    }, C = () => {
      t.value = !1;
    }, k = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, M = (b) => {
      var {
        checkedValue: P,
        uncheckedValue: D
      } = e, B = ![P, D].includes(b);
      B && (b = n.value ? D : P), y(b);
    }, $ = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (b) => {
      r.value = b;
    }, {
      immediate: !0
    });
    var I = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: $,
      resetValidation: g,
      reset: k,
      resetWithAnimation: C
    };
    return S(l, I), S(d, I), {
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Im,
      classes: Nm,
      handleClick: w,
      toggle: M,
      reset: k,
      validate: $,
      resetValidation: g
    };
  }
});
Su.render = Dm;
const hn = Su;
hn.install = function(e) {
  e.component(hn.name, hn);
};
var HS = hn;
function Am(e) {
  return ["horizontal", "vertical"].includes(e);
}
var zm = {
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
    validator: Am
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
  n: Lm,
  classes: Rm
} = _("checkbox-group");
function Um(e, r) {
  var n = ae("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
      n,
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
var ku = Q({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: _e
  },
  props: zm,
  setup(e) {
    var r = L(() => e.max), n = L(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Mm(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Pr(), v = L(() => i.value), f = (I) => {
      Ne(() => {
        var {
          validateTrigger: b,
          rules: P,
          modelValue: D
        } = e;
        s(b, I, P, D);
      });
    }, m = (I) => {
      S(e["onUpdate:modelValue"], I), S(e.onChange, I), f("onChange");
    }, g = (I) => {
      var {
        modelValue: b
      } = e;
      b.includes(I) || m([...b, I]);
    }, p = (I) => {
      var {
        modelValue: b
      } = e;
      b.includes(I) && m(b.filter((P) => P !== I));
    }, y = () => t.forEach((I) => {
      var {
        sync: b
      } = I;
      return b(e.modelValue);
    }), w = () => {
      t.forEach((I) => I.resetWithAnimation());
    }, O = () => {
      var I = t.map((P) => {
        var {
          checkedValue: D
        } = P;
        return D.value;
      }), b = Qi(I);
      return w(), S(e["onUpdate:modelValue"], b), b;
    }, C = () => {
      var I = t.filter((P) => {
        var {
          checked: D
        } = P;
        return !D.value;
      }).map((P) => {
        var {
          checkedValue: D
        } = P;
        return D.value;
      }), b = Qi(I);
      return w(), S(e["onUpdate:modelValue"], b), b;
    }, k = () => {
      S(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, y, {
      deep: !0
    }), ie(() => a.value, y);
    var $ = {
      max: r,
      checkedCount: n,
      onChecked: g,
      onUnchecked: p,
      validate: M,
      resetValidation: d,
      reset: k,
      errorMessage: v
    };
    return o($), S(l, $), {
      errorMessage: i,
      n: Lm,
      classes: Rm,
      checkAll: O,
      inverseAll: C,
      reset: k,
      validate: M,
      resetValidation: d
    };
  }
});
ku.render = Um;
const jn = ku;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var YS = jn;
function Fm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Hm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Ym = {
  type: {
    type: String,
    default: "default",
    validator: Fm
  },
  size: {
    type: String,
    default: "normal",
    validator: Hm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(Ds, "name"),
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
  n: en,
  classes: jm
} = _("chip");
function Wm(e, r) {
  var n = ae("var-icon");
  return h(), ye(
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
        [Y(e.$slots, "left"), A(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        ), Y(e.$slots, "right"), e.closable ? (h(), T(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: r[0] || (r[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [J(
            n,
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
var $u = Q({
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Ym,
  setup(e) {
    var r = L(() => {
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
    }), n = L(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = en(o ? "$--flex" : "$--inline-flex"), d = i ? en("plain") + " " + en("plain-" + l) : en("--" + l), v = s ? en("--round") : null;
      return [en("--" + t), u, d, v];
    }), a = (t) => {
      S(e.onClose, t);
    };
    return {
      n: en,
      classes: jm,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
$u.render = Wm;
const gn = $u;
gn.install = function(e) {
  e.component(gn.name, gn);
};
var jS = gn;
function Gm(e) {
  return ["row", "column"].includes(e);
}
function qm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Xm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Km = {
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
    validator: Gm
  },
  justify: {
    type: String,
    validator: qm
  },
  align: {
    type: String,
    validator: Xm
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
}, Tu = Symbol("ROW_BIND_COL_KEY");
function Zm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(Tu);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function Jm() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(Tu);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: It,
  classes: Qm
} = _("col");
function _m(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: K({
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
var Ou = Q({
  name: "VarCol",
  props: Km,
  setup(e) {
    var r = V({
      left: 0,
      right: 0
    }), n = L(() => R(e.span)), a = L(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = Jm(), l = {
      setPadding(u) {
        r.value = u;
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
      S(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), S(o, l), {
      n: It,
      classes: Qm,
      padding: r,
      toNumber: R,
      toSizeUnit: ge,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: qt
    };
  }
});
Ou.render = _m;
const Wn = Ou;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var WS = Wn, Pu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function xm() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = sr(Pu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var ep = {
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
  n: rp
} = _("collapse");
function np(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Vu = Q({
  name: "VarCollapse",
  props: ep,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = xm(), t = L(() => e.modelValue), o = L(() => e.offset), l = L(() => e.divider), i = L(() => e.elevation), s = () => !e.accordion && !Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (p, y) => s() ? y ? e.accordion ? p : [...e.modelValue, p] : e.accordion ? null : e.modelValue.filter((w) => w !== p) : null, d = (p, y) => {
      var w = u(p, y);
      S(e["onUpdate:modelValue"], w), S(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((y) => {
          var {
            name: w
          } = y;
          return e.modelValue === w.value;
        });
      var p = n.filter((y) => {
        var {
          name: w
        } = y;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return p.length ? p : void 0;
    }, f = () => e.accordion ? n.find((p) => {
      var {
        index: y,
        name: w
      } = p;
      return w.value === void 0 && e.modelValue === y.value;
    }) : n.filter((p) => {
      var {
        index: y,
        name: w
      } = p;
      return w.value === void 0 && e.modelValue.includes(y.value);
    }), m = () => {
      if (s()) {
        var p = v() || f();
        if (e.accordion && !p || !e.accordion && !p.length) {
          n.forEach((y) => {
            y.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((y) => {
          var w = e.accordion ? p === y : p.includes(y);
          y.init(e.accordion, w);
        });
      }
    }, g = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(g), ie(() => r.value, () => Ne().then(m)), ie(() => e.modelValue, () => Ne().then(m)), {
      n: rp,
      divider: l
    };
  }
});
Vu.render = np;
const Gn = Vu;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var GS = Gn;
function ap() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(Pu);
  return n || Or("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var tp = {
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
  n: op,
  classes: ip
} = _("collapse-item");
function lp(e, r) {
  var n = ae("var-icon");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: K("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
        onClick: r[0] || (r[0] = (a) => e.toggle())
      },
      [A(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [Y(e.$slots, "title", {}, () => [Ce(
          re(e.title),
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
        [Y(e.$slots, "icon", {}, () => [J(
          n,
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
        onTransitionend: r[1] || (r[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: r[2] || (r[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [A(
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
    ), [[$n, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Mu = Q({
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: tp,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = ap(), t = !0, o = V(null), l = V(!1), i = V(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = L(() => e.name), g = (M, $) => {
      s.value === void 0 || M && Te(s.value) || $ === i.value || (i.value = $, p(!0));
    }, p = (M) => {
      e.disabled || M || f(e.name || r.value, !i.value);
    }, y = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: M
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = M + "px", t && oo(() => {
            t && C();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, O = () => {
      if (o.value) {
        var {
          offsetHeight: M
        } = o.value;
        o.value.style.height = M + "px", br(() => {
          o.value.style.height = "0px";
        });
      }
    }, C = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, k = {
      index: r,
      name: m,
      init: g
    };
    return a(k), ie(i, (M) => {
      M ? y() : O();
    }), {
      n: op,
      start: w,
      classes: ip,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: p,
      contentEl: o,
      transitionend: C,
      formatElevation: hr
    };
  }
});
Mu.render = lp;
const qn = Mu;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var qS = qn, sp = {
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
  n: up
} = _("countdown"), Ko = 1e3, Zo = 60 * Ko, Jo = 60 * Zo, hl = 24 * Jo;
function dp(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", Tt(ao(e.timeData)), () => [Ce(
      re(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Bu = Q({
  name: "VarCountdown",
  props: sp,
  setup(e) {
    var r = V(""), n = V({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, p) => {
      var y = Object.values(p), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach((k, M) => {
        g.includes(k) ? g = g.replace(k, Ia("" + y[M], 2, "0")) : y[M + 1] += y[M] * O[M];
      }), g.includes("S")) {
        var C = Ia("" + y[y.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", C) : g.includes("SS") ? g = g.replace("SS", C.slice(0, 2)) : g = g.replace("S", C.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var p = Math.floor(g / hl), y = Math.floor(g % hl / Jo), w = Math.floor(g % Jo / Zo), O = Math.floor(g % Zo / Ko), C = Math.floor(g % Ko), k = {
        days: p,
        hours: y,
        minutes: w,
        seconds: O,
        milliseconds: C
      };
      n.value = k, S(e.onChange, n.value), r.value = s(e.format, k);
    }, d = () => {
      var {
        time: g,
        onEnd: p
      } = e, y = performance.now();
      if (a || (a = y + R(g)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        S(p);
        return;
      }
      t && (o = br(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, tl(o);
    }, m = () => {
      a = 0, t = !1, tl(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Mn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), xr(() => {
      i = t, f();
    }), rt(f), {
      showTime: r,
      timeData: n,
      n: up,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Bu.render = dp;
const Xn = Bu;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var XS = Xn;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ya = 9e15, Bn = 1e9, Qo = "0123456789abcdef", Zt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Jt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", _o = {
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
}, Eu, Hr, he = !0, fo = "[DecimalError] ", Pn = fo + "Invalid argument: ", Iu = fo + "Precision limit exceeded", Nu = fo + "crypto unavailable", Du = "[object Decimal]", rr = Math.floor, Xe = Math.pow, vp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, fp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, cp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Au = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Dr = 1e7, ce = 7, mp = 9007199254740991, pp = Zt.length - 1, xo = Jt.length - 1, Z = { toStringTag: Du };
Z.absoluteValue = Z.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), fe(e);
};
Z.ceil = function() {
  return fe(new this.constructor(this), this.e + 1, 2);
};
Z.clampedTo = Z.clamp = function(e, r) {
  var n, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(Pn + r);
  return n = a.cmp(e), n < 0 ? e : a.cmp(r) > 0 ? r : new t(a);
};
Z.comparedTo = Z.cmp = function(e) {
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
Z.cosine = Z.cos = function() {
  var e, r, n = this, a = n.constructor;
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + ce, a.rounding = 1, n = hp(a, Fu(a, n)), a.precision = e, a.rounding = r, fe(Hr == 2 || Hr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
Z.cubeRoot = Z.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (he = !1, o = d.s * Xe(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = xe(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Xe(n, 1 / 3), e = rr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Be(u.plus(d).times(i), u.plus(s), l + 2, 1), xe(i.d).slice(0, l) === (n = xe(a.d)).slice(0, l))
      if (n = n.slice(l - 3, l + 1), n == "9999" || !t && n == "4999") {
        if (!t && (fe(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (fe(a, e + 1, 1), r = !a.times(a).times(a).eq(d));
        break;
      }
  return he = !0, fe(a, e, v.rounding, r);
};
Z.decimalPlaces = Z.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - rr(this.e / ce)) * ce, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
Z.dividedBy = Z.div = function(e) {
  return Be(this, new this.constructor(e));
};
Z.dividedToIntegerBy = Z.divToInt = function(e) {
  var r = this, n = r.constructor;
  return fe(Be(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
Z.equals = Z.eq = function(e) {
  return this.cmp(e) === 0;
};
Z.floor = function() {
  return fe(new this.constructor(this), this.e + 1, 3);
};
Z.greaterThan = Z.gt = function(e) {
  return this.cmp(e) > 0;
};
Z.greaterThanOrEqualTo = Z.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
Z.hyperbolicCosine = Z.cosh = function() {
  var e, r, n, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / mo(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Za(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = n, l.rounding = a, !0);
};
Z.hyperbolicSine = Z.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Za(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / mo(5, e)), t = Za(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, fe(t, r, n, !0);
};
Z.hyperbolicTangent = Z.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Be(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
Z.inverseCosine = Z.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Ir(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Ir(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Ir(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
Z.inverseHyperbolicCosine = Z.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, he = !1, n = n.times(n).minus(1).sqrt().plus(n), he = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
Z.inverseHyperbolicSine = Z.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, he = !1, n = n.times(n).plus(1).sqrt().plus(n), he = !0, a.precision = e, a.rounding = r, n.ln());
};
Z.inverseHyperbolicTangent = Z.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Be(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
Z.inverseSine = Z.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Ir(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
Z.inverseTangent = Z.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= xo)
      return l = Ir(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= xo)
      return l = Ir(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / ce + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (he = !1, r = Math.ceil(i / ce), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), he = !0, fe(l, d.precision = v, d.rounding = f, !0);
};
Z.isFinite = function() {
  return !!this.d;
};
Z.isInteger = Z.isInt = function() {
  return !!this.d && rr(this.e / ce) > this.d.length - 2;
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
  if (he = !1, i = v + m, l = dn(u, i), a = r ? Qt(d, i + 10) : dn(e, i), s = Be(l, a, i, 1), gt(s.d, t = v, f))
    do
      if (i += 10, l = dn(u, i), a = r ? Qt(d, i + 10) : dn(e, i), s = Be(l, a, i, 1), !o) {
        +xe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (gt(s.d, t += 10, f));
  return he = !0, fe(s, v, f);
};
Z.minus = Z.sub = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, g = m.constructor;
  if (e = new g(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new g(NaN) : m.d ? e.s = -e.s : e = new g(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(m);
    else
      return new g(s === 3 ? -0 : 0);
    return he ? fe(e, i, s) : e;
  }
  if (n = rr(e.e / ce), d = rr(m.e / ce), u = u.slice(), o = d - n, o) {
    for (v = o < 0, v ? (r = u, o = -o, l = f.length) : (r = f, n = d, l = u.length), a = Math.max(Math.ceil(i / ce), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; )
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
        u[t] = Dr - 1;
      --u[t], u[a] += Dr;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --n;
  return u[0] ? (e.d = u, e.e = co(u, n), he ? fe(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
Z.modulo = Z.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? fe(new a(n), a.precision, a.rounding) : (he = !1, a.modulo == 9 ? (r = Be(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Be(n, e, 0, a.modulo, 1), r = r.times(e), he = !0, n.minus(r));
};
Z.naturalExponential = Z.exp = function() {
  return ei(this);
};
Z.naturalLogarithm = Z.ln = function() {
  return dn(this);
};
Z.negated = Z.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
Z.plus = Z.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), he ? fe(e, i, s) : e;
  if (o = rr(v.e / ce), a = rr(e.e / ce), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / ce), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Dr | 0, u[t] %= Dr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = co(u, a), he ? fe(e, i, s) : e;
};
Z.precision = Z.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Pn + e);
  return n.d ? (r = zu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
Z.round = function() {
  var e = this, r = e.constructor;
  return fe(new r(e), e.e + 1, r.rounding);
};
Z.sine = Z.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + ce, a.rounding = 1, n = yp(a, Fu(a, n)), a.precision = e, a.rounding = r, fe(Hr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
Z.squareRoot = Z.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (he = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = xe(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = rr((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Be(l, o, n + 2, 1)).times(0.5), xe(o.d).slice(0, n) === (r = xe(a.d)).slice(0, n))
      if (r = r.slice(n - 3, n + 1), r == "9999" || !t && r == "4999") {
        if (!t && (fe(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        n += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (fe(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return he = !0, fe(a, s, d.rounding, e);
};
Z.tangent = Z.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Be(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, fe(Hr == 2 || Hr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
Z.times = Z.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (n = rr(d.e / ce) + rr(e.e / ce), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + r, o[t--] = i % Dr | 0, r = i / Dr | 0;
    o[t] = (o[t] + r) % Dr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = co(o, n), he ? fe(e, v.precision, v.rounding) : e;
};
Z.toBinary = function(e, r) {
  return Di(this, 2, e, r);
};
Z.toDecimalPlaces = Z.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (pr(e, 0, Bn), r === void 0 ? r = a.rounding : pr(r, 0, 8), fe(n, e + n.e + 1, r));
};
Z.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, !0) : (pr(e, 0, Bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e + 1, r), n = Ur(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
Z.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Ur(t) : (pr(e, 0, Bn), r === void 0 ? r = o.rounding : pr(r, 0, 8), a = fe(new o(t), e + t.e + 1, r), n = Ur(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
Z.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, p = m.constructor;
  if (!g)
    return new p(m);
  if (u = n = new p(1), a = s = new p(0), r = new p(a), o = r.e = zu(g) - m.e - 1, l = o % ce, r.d[0] = Xe(10, l < 0 ? ce + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new p(e), !i.isInt() || i.lt(u))
      throw Error(Pn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (he = !1, i = new p(xe(g)), d = p.precision, p.precision = o = g.length * ce * 2; v = Be(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Be(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Be(u, a, o, 1).minus(m).abs().cmp(Be(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], p.precision = d, he = !0, f;
};
Z.toHexadecimal = Z.toHex = function(e, r) {
  return Di(this, 16, e, r);
};
Z.toNearest = function(e, r) {
  var n = this, a = n.constructor;
  if (n = new a(n), e == null) {
    if (!n.d)
      return n;
    e = new a(1), r = a.rounding;
  } else {
    if (e = new a(e), r === void 0 ? r = a.rounding : pr(r, 0, 8), !n.d)
      return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? (he = !1, n = Be(n, e, 0, r, 1).times(e), he = !0, fe(n)) : (e.s = n.s, n = e), n;
};
Z.toNumber = function() {
  return +this;
};
Z.toOctal = function(e, r) {
  return Di(this, 8, e, r);
};
Z.toPower = Z.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Xe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (r = rr(e.e / ce), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= mp)
    return t = Lu(s, i, n, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Xe(+i, u), r = n == 0 || !isFinite(n) ? rr(u * (Math.log("0." + xe(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (he = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = ei(e.times(dn(i, a + n)), a), t.d && (t = fe(t, a + 5, 1), gt(t.d, a, o) && (r = a + 10, t = fe(ei(e.times(dn(i, r + n)), r), r + 5, 1), +xe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, he = !0, s.rounding = o, fe(t, a, o));
};
Z.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (pr(e, 1, Bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e, r), n = Ur(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
Z.toSignificantDigits = Z.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (pr(e, 1, Bn), r === void 0 ? r = a.rounding : pr(r, 0, 8)), fe(new a(n), e, r);
};
Z.toString = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
Z.truncated = Z.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
Z.valueOf = Z.toJSON = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function xe(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = ce - a.length, n && (o += nn(n)), o += a;
    l = e[r], a = l + "", n = ce - a.length, n && (o += nn(n));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function pr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(Pn + e);
}
function gt(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += ce, t = 0) : (t = Math.ceil((r + 1) / ce), r %= ce), o = Xe(10, ce - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Xe(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Xe(10, r - 3) - 1, l;
}
function Ft(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += Qo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function hp(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / mo(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Za(e, 1, r.times(t), new e(1));
  for (var o = n; o--; ) {
    var l = r.times(r);
    r = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= n, r;
}
var Be = function() {
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
    var u, d, v, f, m, g, p, y, w, O, C, k, M, $, I, b, P, D, B, j, X = a.constructor, z = a.s == t.s ? 1 : -1, N = a.d, F = t.d;
    if (!N || !N[0] || !F || !F[0])
      return new X(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (N ? F && N[0] == F[0] : !F) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          N && N[0] == 0 || !F ? z * 0 : z / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Dr, m = ce, d = rr(a.e / m) - rr(t.e / m)), B = F.length, P = N.length, w = new X(z), O = w.d = [], v = 0; F[v] == (N[v] || 0); v++)
      ;
    if (F[v] > (N[v] || 0) && d--, o == null ? ($ = o = X.precision, l = X.rounding) : i ? $ = o + (a.e - t.e) + 1 : $ = o, $ < 0)
      O.push(1), g = !0;
    else {
      if ($ = $ / m + 2 | 0, v = 0, B == 1) {
        for (f = 0, F = F[0], $++; (v < P || f) && $--; v++)
          I = f * s + (N[v] || 0), O[v] = I / F | 0, f = I % F | 0;
        g = f || v < P;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), N = e(N, f, s), B = F.length, P = N.length), b = B, C = N.slice(0, B), k = C.length; k < B; )
          C[k++] = 0;
        j = F.slice(), j.unshift(0), D = F[0], F[1] >= s / 2 && ++D;
        do
          f = 0, u = r(F, C, B, k), u < 0 ? (M = C[0], B != k && (M = M * s + (C[1] || 0)), f = M / D | 0, f > 1 ? (f >= s && (f = s - 1), p = e(F, f, s), y = p.length, k = C.length, u = r(p, C, y, k), u == 1 && (f--, n(p, B < y ? j : F, y, s))) : (f == 0 && (u = f = 1), p = F.slice()), y = p.length, y < k && p.unshift(0), n(C, p, k, s), u == -1 && (k = C.length, u = r(F, C, B, k), u < 1 && (f++, n(C, B < k ? j : F, k, s))), k = C.length) : u === 0 && (f++, C = [0]), O[v++] = f, u && C[0] ? C[k++] = N[b] || 0 : (C = [N[b]], k = 1);
        while ((b++ < P || C[0] !== void 0) && $--);
        g = C[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      w.e = d, Eu = g;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, fe(w, i ? o + w.e + 1 : o, l, g);
    }
    return w;
  };
}();
function fe(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (r != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = r - t, o < 0)
        o += ce, l = r, d = v[f = 0], s = d / Xe(10, t - l - 1) % 10 | 0;
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
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Xe(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Xe(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Xe(10, (ce - r % ce) % ce), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Xe(10, ce - o), v[f] = l > 0 ? (d / Xe(10, t - l) % Xe(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Dr && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Dr)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return he && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Ur(e, r, n) {
  if (!e.isFinite())
    return Uu(e);
  var a, t = e.e, o = xe(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + nn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + nn(-t - 1) + o, n && (a = n - l) > 0 && (o += nn(a))) : t >= l ? (o += nn(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + nn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += nn(a))), o;
}
function co(e, r) {
  var n = e[0];
  for (r *= ce; n >= 10; n /= 10)
    r++;
  return r;
}
function Qt(e, r, n) {
  if (r > pp)
    throw he = !0, n && (e.precision = n), Error(Iu);
  return fe(new e(Zt), r, 1, !0);
}
function Ir(e, r, n) {
  if (r > xo)
    throw Error(Iu);
  return fe(new e(Jt), r, n, !0);
}
function zu(e) {
  var r = e.length - 1, n = r * ce + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      n--;
    for (r = e[0]; r >= 10; r /= 10)
      n++;
  }
  return n;
}
function nn(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Lu(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / ce + 4);
  for (he = !1; ; ) {
    if (n % 2 && (o = o.times(r), yl(o.d, l) && (t = !0)), n = rr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), yl(r.d, l);
  }
  return he = !0, o;
}
function gl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ru(e, r, n) {
  for (var a, t = new e(r[0]), o = 0; ++o < r.length; )
    if (a = new e(r[o]), a.s)
      t[n](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ei(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (he = !1, s = g) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Xe(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), n = n.times(++d), i = l.plus(Be(o, n, s, 1)), xe(i.d).slice(0, s) === xe(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = fe(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && gt(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = g, m, he = !0);
      else
        return f.precision = g, l;
    }
    l = i;
  }
}
function dn(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, p = e, y = p.d, w = p.constructor, O = w.rounding, C = w.precision;
  if (p.s < 0 || !y || !y[0] || !p.e && y[0] == 1 && y.length == 1)
    return new w(y && !y[0] ? -1 / 0 : p.s != 1 ? NaN : y ? 0 : p);
  if (r == null ? (he = !1, d = C) : d = r, w.precision = d += g, n = xe(y), a = n.charAt(0), Math.abs(o = p.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      p = p.times(e), n = xe(p.d), a = n.charAt(0), m++;
    o = p.e, a > 1 ? (p = new w("0." + n), o++) : p = new w(a + "." + n.slice(1));
  } else
    return u = Qt(w, d + 2, C).times(o + ""), p = dn(new w(a + "." + n.slice(1)), d - g).plus(u), w.precision = C, r == null ? fe(p, C, O, he = !0) : p;
  for (v = p, s = l = p = Be(p.minus(1), p.plus(1), d, 1), f = fe(p.times(p), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Be(l, new w(t), d, 1)), xe(u.d).slice(0, d) === xe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Qt(w, d + 2, C).times(o + ""))), s = Be(s, new w(m), d, 1), r == null)
        if (gt(s.d, d - g, O, i))
          w.precision = d += g, u = l = p = Be(v.minus(1), v.plus(1), d, 1), f = fe(p.times(p), d, 1), t = i = 1;
        else
          return fe(s, w.precision = C, O, he = !0);
      else
        return w.precision = C, s;
    s = u, t += 2;
  }
}
function Uu(e) {
  return String(e.s * e.s / 0);
}
function ri(e, r) {
  var n, a, t;
  for ((n = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (a = r.search(/e/i)) > 0 ? (n < 0 && (n = a), n += +r.slice(a + 1), r = r.substring(0, a)) : n < 0 && (n = r.length), a = 0; r.charCodeAt(a) === 48; a++)
    ;
  for (t = r.length; r.charCodeAt(t - 1) === 48; --t)
    ;
  if (r = r.slice(a, t), r) {
    if (t -= a, e.e = n = n - a - 1, e.d = [], a = (n + 1) % ce, n < 0 && (a += ce), a < t) {
      for (a && e.d.push(+r.slice(0, a)), t -= ce; a < t; )
        e.d.push(+r.slice(a, a += ce));
      r = r.slice(a), a = ce - r.length;
    } else
      a -= t;
    for (; a--; )
      r += "0";
    e.d.push(+r), he && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function gp(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Au.test(r))
      return ri(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (fp.test(r))
    n = 16, r = r.toLowerCase();
  else if (vp.test(r))
    n = 2;
  else if (cp.test(r))
    n = 8;
  else
    throw Error(Pn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Lu(a, new a(n), o, o * 2)), u = Ft(r, n, Dr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = co(u, d), e.d = u, he = !1, l && (e = Be(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Xe(2, s) : vn.pow(2, s))), he = !0, e);
}
function yp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Za(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / mo(5, n)), r = Za(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Za(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / ce);
  for (he = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = Be(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Be(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return he = !0, l.d.length = d + 1, l;
}
function mo(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Fu(e, r) {
  var n, a = r.s < 0, t = Ir(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Hr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    Hr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return Hr = gl(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    Hr = gl(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Di(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = n !== void 0;
  if (g ? (pr(n, 1, Bn), a === void 0 ? a = m.rounding : pr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Uu(e);
  else {
    for (d = Ur(e), l = d.indexOf("."), g ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ft(Ur(f), 10, t), f.e = f.d.length), v = Ft(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Be(e, f, n, a, 0, t), v = e.d, o = e.e, u = Eu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Qo.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ft(d, t, r), s = v.length; !v[s - 1]; --s)
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
    d = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function yl(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function bp(e) {
  return new this(e).abs();
}
function wp(e) {
  return new this(e).acos();
}
function Cp(e) {
  return new this(e).acosh();
}
function Sp(e, r) {
  return new this(e).plus(r);
}
function kp(e) {
  return new this(e).asin();
}
function $p(e) {
  return new this(e).asinh();
}
function Tp(e) {
  return new this(e).atan();
}
function Op(e) {
  return new this(e).atanh();
}
function Pp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Ir(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Ir(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Ir(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Be(e, r, o, 1)), r = Ir(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Be(e, r, o, 1)), n;
}
function Vp(e) {
  return new this(e).cbrt();
}
function Mp(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Bp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Ep(e) {
  if (!e || typeof e != "object")
    throw Error(fo + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Bn,
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
  for (r = 0; r < o.length; r += 3)
    if (n = o[r], t && (this[n] = _o[n]), (a = e[n]) !== void 0)
      if (rr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(Pn + n + ": " + a);
  if (n = "crypto", t && (this[n] = _o[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Nu);
      else
        this[n] = !1;
    else
      throw Error(Pn + n + ": " + a);
  return this;
}
function Ip(e) {
  return new this(e).cos();
}
function Np(e) {
  return new this(e).cosh();
}
function Hu(e) {
  var r, n, a;
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
      return ri(u, o.toString());
    } else if (s !== "string")
      throw Error(Pn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Au.test(o) ? ri(u, o) : gp(u, o);
  }
  if (t.prototype = Z, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Ep, t.clone = Hu, t.isDecimal = bl, t.abs = bp, t.acos = wp, t.acosh = Cp, t.add = Sp, t.asin = kp, t.asinh = $p, t.atan = Tp, t.atanh = Op, t.atan2 = Pp, t.cbrt = Vp, t.ceil = Mp, t.clamp = Bp, t.cos = Ip, t.cosh = Np, t.div = Dp, t.exp = Ap, t.floor = zp, t.hypot = Lp, t.ln = Rp, t.log = Up, t.log10 = Hp, t.log2 = Fp, t.max = Yp, t.min = jp, t.mod = Wp, t.mul = Gp, t.pow = qp, t.random = Xp, t.round = Kp, t.sign = Zp, t.sin = Jp, t.sinh = Qp, t.sqrt = _p, t.sub = xp, t.sum = eh, t.tan = rh, t.tanh = nh, t.trunc = ah, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Dp(e, r) {
  return new this(e).div(r);
}
function Ap(e) {
  return new this(e).exp();
}
function zp(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Lp() {
  var e, r, n = new this(0);
  for (he = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      n.d && (n = n.plus(r.times(r)));
    else {
      if (r.s)
        return he = !0, new this(1 / 0);
      n = r;
    }
  return he = !0, n.sqrt();
}
function bl(e) {
  return e instanceof vn || e && e.toStringTag === Du || !1;
}
function Rp(e) {
  return new this(e).ln();
}
function Up(e, r) {
  return new this(e).log(r);
}
function Fp(e) {
  return new this(e).log(2);
}
function Hp(e) {
  return new this(e).log(10);
}
function Yp() {
  return Ru(this, arguments, "lt");
}
function jp() {
  return Ru(this, arguments, "gt");
}
function Wp(e, r) {
  return new this(e).mod(r);
}
function Gp(e, r) {
  return new this(e).mul(r);
}
function qp(e, r) {
  return new this(e).pow(r);
}
function Xp(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : pr(e, 1, Bn), a = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = r[o], t >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); o < a; )
        t = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Nu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= ce, a && e && (t = Xe(10, ce - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    n = 0, i = [0];
  else {
    for (n = -1; i[0] === 0; n -= ce)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < ce && (n -= ce - a);
  }
  return l.e = n, l.d = i, l;
}
function Kp(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function Zp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Jp(e) {
  return new this(e).sin();
}
function Qp(e) {
  return new this(e).sinh();
}
function _p(e) {
  return new this(e).sqrt();
}
function xp(e, r) {
  return new this(e).sub(r);
}
function eh() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (he = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return he = !0, fe(n, this.precision, this.rounding);
}
function rh(e) {
  return new this(e).tan();
}
function nh(e) {
  return new this(e).tanh();
}
function ah(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString;
Z[Symbol.toStringTag] = "Decimal";
var vn = Z.constructor = Hu(_o);
Zt = new vn(Zt);
Jt = new vn(Jt);
var th = {
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
  n: oh,
  classes: ih
} = _("counter"), wl = 100, Cl = 600, lh = ["inputmode", "readonly", "disabled"];
function sh(e, r) {
  var n = ae("var-icon"), a = ae("var-button"), t = ae("var-form-details");
  return h(), T(
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
      [J(
        a,
        {
          class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: K({
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
          default: ve(() => [J(n, {
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
          style: K({
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
        },
        null,
        46,
        lh
      ), [[Rv, e.inputValue]]), J(
        a,
        {
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: K({
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
          default: ve(() => [J(n, {
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
    ), J(
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
var Yu = Q({
  name: "VarCounter",
  components: {
    VarButton: er,
    VarIcon: Oe,
    VarFormDetails: _e
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: th,
  setup(e) {
    var r = V(""), {
      bindForm: n,
      form: a
    } = Vr(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = Pr(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), p = (F) => {
      Ne(() => {
        var {
          validateTrigger: W,
          rules: te,
          modelValue: G
        } = e;
        o(W, F, te, G);
      });
    }, y = () => {
      var {
        min: F
      } = e;
      S(e["onUpdate:modelValue"], F != null ? R(F) : 0), i();
    }, w = {
      reset: y,
      validate: g,
      resetValidation: i
    }, O = L(() => {
      var {
        max: F,
        modelValue: W
      } = e;
      return F != null && R(W) >= R(F);
    }), C = L(() => {
      var {
        min: F,
        modelValue: W
      } = e;
      return F != null && R(W) <= R(F);
    }), k = (F) => {
      var {
        decimalLength: W,
        max: te,
        min: G
      } = e, U = R(F);
      return te != null && U > R(te) && (U = R(te)), G != null && U < R(G) && (U = R(G)), F = String(U), W != null && (F = U.toFixed(R(W))), F;
    }, M = (F) => {
      var {
        lazyChange: W,
        onBeforeChange: te
      } = e, {
        value: G
      } = F.target, U = k(G);
      W ? S(te, R(U), N) : z(U), p("onInputChange");
    }, $ = () => {
      var {
        disabled: F,
        readonly: W,
        disableDecrement: te,
        decrementButton: G,
        lazyChange: U,
        step: E,
        modelValue: q,
        onDecrement: ee,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || W || te || !G) && !C.value) {
        var de = new vn(R(q)).minus(new vn(R(E))).toString(), we = k(de), Pe = R(we);
        S(ee, Pe), U ? S(se, Pe, N) : (z(we), p("onDecrement"));
      }
    }, I = () => {
      var {
        disabled: F,
        readonly: W,
        disableIncrement: te,
        incrementButton: G,
        lazyChange: U,
        step: E,
        modelValue: q,
        onIncrement: ee,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || W || te || !G) && !O.value) {
        var de = new vn(R(q)).plus(new vn(R(E))).toString(), we = k(de), Pe = R(we);
        S(ee, Pe), U ? S(se, Pe, N) : (z(we), p("onIncrement"));
      }
    }, b = () => {
      var {
        press: F,
        lazyChange: W
      } = e;
      !F || W || (m = window.setTimeout(() => {
        X();
      }, Cl));
    }, P = () => {
      var {
        press: F,
        lazyChange: W
      } = e;
      !F || W || (f = window.setTimeout(() => {
        j();
      }, Cl));
    }, D = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, B = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, j = () => {
      d = window.setTimeout(() => {
        I(), j();
      }, wl);
    }, X = () => {
      v = window.setTimeout(() => {
        $(), X();
      }, wl);
    }, z = (F) => {
      r.value = F;
      var W = R(F);
      S(e["onUpdate:modelValue"], W);
    }, N = (F) => {
      z(k(String(F))), p("onLazyChange");
    };
    return S(n, w), ie(() => e.modelValue, (F) => {
      z(k(String(F))), S(e.onChange, R(F));
    }), z(k(String(e.modelValue))), {
      n: oh,
      classes: ih,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: C,
      validate: g,
      reset: y,
      resetValidation: i,
      handleChange: M,
      decrement: $,
      increment: I,
      pressDecrement: b,
      pressIncrement: P,
      releaseDecrement: D,
      releaseIncrement: B,
      toSizeUnit: ge,
      toNumber: R
    };
  }
});
Yu.render = sh;
const Kn = Yu;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var KS = Kn, ju = 60, Wu = ju * 60, Gu = Wu * 24, uh = Gu * 7, Ja = 1e3, $o = ju * Ja, Sl = Wu * Ja, dh = Gu * Ja, vh = uh * Ja, Ai = "millisecond", ja = "second", Wa = "minute", Ga = "hour", an = "day", Ht = "week", Er = "month", qu = "quarter", tn = "year", qa = "date", fh = "YYYY-MM-DDTHH:mm:ssZ", kl = "Invalid Date", ch = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, mh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const ph = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ni = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, hh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + ni(t, 2, "0") + ":" + ni(o, 2, "0");
}, gh = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Er), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Er);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, yh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, bh = function(r) {
  var n = {
    M: Er,
    y: tn,
    w: Ht,
    d: an,
    D: qa,
    h: Ga,
    m: Wa,
    s: ja,
    ms: Ai,
    Q: qu
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, wh = function(r) {
  return r === void 0;
};
const Ch = {
  s: ni,
  z: hh,
  m: gh,
  a: yh,
  p: bh,
  u: wh
};
var ut = "en", Zn = {};
Zn[ut] = ph;
var zi = function(r) {
  return r instanceof po;
}, _t = function e(r, n, a) {
  var t;
  if (!r)
    return ut;
  if (typeof r == "string") {
    var o = r.toLowerCase();
    Zn[o] && (t = o), n && (Zn[o] = n, t = o);
    var l = r.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = r.name;
    Zn[i] = r, t = i;
  }
  return !a && t && (ut = t), t || !a && ut;
}, le = function(r, n) {
  if (zi(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new po(a);
}, Sh = function(r, n) {
  return le(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Me = Ch;
Me.l = _t;
Me.i = zi;
Me.w = Sh;
var kh = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Me.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(ch);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, po = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = _t(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = kh(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Me;
  }, r.isValid = function() {
    return this.$d.toString() !== kl;
  }, r.isSame = function(a, t) {
    var o = le(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return le(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < le(a);
  }, r.$g = function(a, t, o) {
    return Me.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Me.u(t) ? !0 : t, i = Me.p(a), s = function(w, O) {
      var C = Me.w(o.$u ? Date.UTC(o.$y, O, w) : new Date(o.$y, O, w), o);
      return l ? C : C.endOf(an);
    }, u = function(w, O) {
      var C = [0, 0, 0, 0], k = [23, 59, 59, 999];
      return Me.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? C : k).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case tn:
        return l ? s(1, 0) : s(31, 11);
      case Er:
        return l ? s(1, v) : s(0, v + 1);
      case Ht: {
        var g = this.$locale().weekStart || 0, p = (d < g ? d + 7 : d) - g;
        return s(l ? f - p : f + (6 - p), v);
      }
      case an:
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
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Me.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[an] = i + "Date", o[qa] = i + "Date", o[Er] = i + "Month", o[tn] = i + "FullYear", o[Ga] = i + "Hours", o[Wa] = i + "Minutes", o[ja] = i + "Seconds", o[Ai] = i + "Milliseconds", o)[l], u = l === an ? this.$D + (t - this.$W) : t;
    if (l === Er || l === tn) {
      var d = this.clone().set(qa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(qa, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, r.set = function(a, t) {
    return this.clone().$set(a, t);
  }, r.get = function(a) {
    return this[Me.p(a)]();
  }, r.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Me.p(t), s = function(f) {
      var m = le(o);
      return Me.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Er)
      return this.set(Er, this.$M + a);
    if (i === tn)
      return this.set(tn, this.$y + a);
    if (i === an)
      return s(1);
    if (i === Ht)
      return s(7);
    var u = (l = {}, l[Wa] = $o, l[Ga] = Sl, l[ja] = Ja, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Me.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || kl;
    var l = a || fh, i = Me.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function(C, k, M, $) {
      return C && (C[k] || C(t, l)) || M[k].slice(0, $);
    }, p = function(C) {
      return Me.s(s % 12 || 12, C, "0");
    }, y = m || function(O, C, k) {
      var M = O < 12 ? "AM" : "PM";
      return k ? M.toLowerCase() : M;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Me.s(d + 1, 2, "0"),
      MMM: g(o.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Me.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(o.weekdaysMin, this.$W, v, 2),
      ddd: g(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Me.s(s, 2, "0"),
      h: p(1),
      hh: p(2),
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
    return l.replace(mh, function(O, C) {
      return C || w[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Me.p(t), s = le(a), u = (s.utcOffset() - this.utcOffset()) * $o, d = this - s, v = Me.m(this, s);
    return v = (l = {}, l[tn] = v / 12, l[Er] = v, l[qu] = v / 3, l[Ht] = (d - u) / vh, l[an] = (d - u) / dh, l[Ga] = d / Sl, l[Wa] = d / $o, l[ja] = d / Ja, l)[i] || d, o ? v : Me.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Er).$D;
  }, r.$locale = function() {
    return Zn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = _t(a, t, !0);
    return l && (o.$L = l), o;
  }, r.clone = function() {
    return Me.w(this.$d, this);
  }, r.toDate = function() {
    return new Date(this.valueOf());
  }, r.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, r.toISOString = function() {
    return this.$d.toISOString();
  }, r.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Xu = po.prototype;
le.prototype = Xu;
[["$ms", Ai], ["$s", ja], ["$m", Wa], ["$H", Ga], ["$W", an], ["$M", Er], ["$y", tn], ["$D", qa]].forEach(function(e) {
  Xu[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
le.extend = function(e, r) {
  return e.$i || (e(r, po, le), e.$i = !0), le;
};
le.locale = _t;
le.isDayjs = zi;
le.unix = function(e) {
  return le(e * 1e3);
};
le.en = Zn[ut];
le.Ls = Zn;
le.p = {};
const Ku = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, Zu = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function $h(e) {
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
}], lt = [{
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
}], Th = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: $h
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
  n: Oh
} = _("picker-header");
function Ph(e, r) {
  var n = ae("var-icon"), a = ae("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [J(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: r[0] || (r[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ve(() => [J(n, {
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
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [J(
        Le,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T(
            "div",
            {
              key: e.showDate
            },
            re(e.showDate),
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
    ), J(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: r[2] || (r[2] = (t) => e.checkDate("next"))
      },
      {
        default: ve(() => [J(n, {
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
var Ju = Q({
  name: "PanelHeader",
  components: {
    VarButton: er,
    VarIcon: Oe
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
    } = r, a = V(!1), t = V(0), o = L(() => {
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
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: Oh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Ju.render = Ph;
const Qu = Ju;
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
le.extend(Ku);
le.extend(Zu);
var {
  n: Nt,
  classes: Vh
} = _("month-picker"), {
  n: Dt
} = _("date-picker");
function Mh(e, r) {
  var n = ae("panel-header"), a = ae("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
        n,
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
      ), J(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("ul", {
            key: e.panelKey
          }, [(h(!0), T(
            Ve,
            null,
            Ue(e.MONTH_LIST, (t) => (h(), T("li", {
              key: t.index
            }, [J(
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
                  re(e.getMonthAbbr(t.index)),
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
var _u = Q({
  name: "MonthPickerPanel",
  components: {
    VarButton: er,
    PanelHeader: Qu
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
    } = r, [a, t] = e.current.split("-"), o = V(!1), l = V(0), i = V(null), s = Ae({
      left: !1,
      right: !1
    }), u = L(() => e.choose.chooseYear === e.preview.previewYear), d = L(() => e.preview.previewYear === a), v = (O) => {
      var C, k;
      return (C = (k = Ze.value.datePickerMonthDict) == null ? void 0 : k[O].abbr) != null ? C : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: C
        },
        componentProps: {
          min: k,
          max: M
        }
      } = e, $ = !0, I = !0, b = C + "-" + O;
      return M && ($ = le(b).isSameOrBefore(le(M), "month")), k && (I = le(b).isSameOrAfter(le(k), "month")), $ && I;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: C,
          chooseDays: k,
          chooseRangeMonth: M
        },
        componentProps: {
          type: $,
          range: I
        }
      } = e;
      if (I) {
        if (!M.length)
          return !1;
        var b = le(O).isSameOrBefore(le(M[1]), "month"), P = le(O).isSameOrAfter(le(M[0]), "month");
        return b && P;
      }
      return $ === "month" ? C.includes(O) : k.some((D) => D.includes(O));
    }, g = (O) => {
      var {
        choose: {
          chooseMonth: C
        },
        preview: {
          previewYear: k
        },
        componentProps: {
          allowedDates: M,
          color: $,
          multiple: I,
          range: b
        }
      } = e, P = k + "-" + O, D = () => b || I ? m(P) : (C == null ? void 0 : C.index) === O && u.value, B = () => f(O) ? M ? !M(P) : !1 : !0, j = B(), X = () => j ? !0 : b || I ? !m(P) : !u.value || (C == null ? void 0 : C.index) !== O, z = () => d.value && t === O && e.componentProps.showCurrent ? (b || I || u.value) && j ? !0 : b || I ? !m(P) : u.value ? (C == null ? void 0 : C.index) !== t : !0 : !1, N = () => j ? "" : z() ? $ ?? "" : D() ? "" : Dt() + "-color-cover", F = N().startsWith(Dt());
      return {
        outline: z(),
        text: X(),
        color: X() ? "" : $,
        textColor: F ? "" : N(),
        [Dt() + "-color-cover"]: F,
        class: Vh(Nt("button"), [j, Nt("button--disabled")]),
        disabled: j
      };
    }, p = (O, C) => {
      var k = C.currentTarget;
      k.classList.contains(Nt("button--disabled")) || n("choose-month", O);
    }, y = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, w = (O) => {
      i.value.checkDate(O);
    };
    return ie(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: C,
          max: k
        }
      } = e;
      k && (s.right = !le("" + (R(O) + 1)).isSameOrBefore(le(k), "year")), C && (s.left = !le("" + (R(O) - 1)).isSameOrAfter(le(C), "year"));
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
      buttonProps: g,
      getMonthAbbr: v,
      chooseMonth: p,
      checkDate: y
    };
  }
});
_u.render = Mh;
const Bh = _u;
var {
  n: $l,
  classes: Eh
} = _("year-picker"), Ih = ["onClick"];
function Nh(e, r) {
  return h(), T(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), T(
      Ve,
      null,
      Ue(e.yearList, (n) => (h(), T(
        "li",
        {
          key: n,
          class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
          style: K({
            color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(n)
        },
        re(n),
        15,
        Ih
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var xu = Q({
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
    } = r, a = L(() => {
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
        var d = le(i).format("YYYY-MM-D"), v = R(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = le(s).format("YYYY-MM-D"), m = R(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return ir(() => {
      var o = document.querySelector("." + $l("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: $l,
      classes: Eh,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
xu.render = Nh;
const Dh = xu;
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
le.extend(Ku);
le.extend(Zu);
var {
  n: Ha,
  classes: Ah
} = _("day-picker"), {
  n: At
} = _("date-picker");
function zh(e, r) {
  var n = ae("panel-header"), a = ae("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
        n,
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
      ), J(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), T(
              Ve,
              null,
              Ue(e.sortWeekList, (t) => (h(), T(
                "li",
                {
                  key: t.index
                },
                re(e.getDayAbbr(t.index)),
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
            [(h(!0), T(
              Ve,
              null,
              Ue(e.days, (t, o) => (h(), T("li", {
                key: o
              }, [J(
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
                    re(e.filterDay(t)),
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
var ed = Q({
  name: "DayPickerPanel",
  components: {
    VarButton: er,
    PanelHeader: Qu
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
    } = r, [a, t, o] = e.current.split("-"), l = V([]), i = V(!1), s = V(0), u = V(null), d = Ae({
      left: !1,
      right: !1
    }), v = L(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = L(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = L(() => {
      var b = lt.findIndex((P) => P.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? lt : lt.slice(b).concat(lt.slice(0, b));
    }), g = (b) => {
      var P, D;
      return (P = (D = Ze.value.datePickerWeekDict) == null ? void 0 : D[b].abbr) != null ? P : "";
    }, p = (b) => b > 0 ? b : "", y = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: P
        }
      } = e, D = le(P + "-" + b.index).daysInMonth(), B = le(P + "-" + b.index + "-01").day(), j = m.value.findIndex((X) => X.index === "" + B);
      l.value = [...Array(j).fill(-1), ...Array.from(Array(D + 1).keys())].filter((X) => X);
    }, w = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: P
        },
        componentProps: {
          max: D,
          min: B
        }
      } = e;
      if (D) {
        var j = b + "-" + (R(P.index) + 1);
        d.right = !le(j).isSameOrBefore(le(D), "month");
      }
      if (B) {
        var X = b + "-" + (R(P.index) - 1);
        d.left = !le(X).isSameOrAfter(le(B), "month");
      }
    }, O = (b) => {
      var {
        preview: {
          previewYear: P,
          previewMonth: D
        },
        componentProps: {
          min: B,
          max: j
        }
      } = e, X = !0, z = !0, N = P + "-" + D.index + "-" + b;
      return j && (X = le(N).isSameOrBefore(le(j), "day")), B && (z = le(N).isSameOrAfter(le(B), "day")), X && z;
    }, C = (b) => {
      var {
        choose: {
          chooseDays: P,
          chooseRangeDay: D
        },
        componentProps: {
          range: B
        }
      } = e;
      if (B) {
        if (!D.length)
          return !1;
        var j = le(b).isSameOrBefore(le(D[1]), "day"), X = le(b).isSameOrAfter(le(D[0]), "day");
        return j && X;
      }
      return P.includes(b);
    }, k = (b) => {
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
          chooseDay: P
        },
        preview: {
          previewYear: D,
          previewMonth: B
        },
        componentProps: {
          allowedDates: j,
          color: X,
          multiple: z,
          range: N
        }
      } = e, F = D + "-" + B.index + "-" + b, W = () => N || z ? C(F) : R(P) === b && f.value, te = () => O(b) ? j ? !j(F) : !1 : !0, G = te(), U = () => G ? !0 : N || z ? !C(F) : !f.value || R(P) !== b, E = () => v.value && R(o) === b && e.componentProps.showCurrent ? (N || z || f.value) && G ? !0 : N || z ? !C(F) : f.value ? P !== o : !0 : !1, q = () => G ? "" : E() ? X ?? "" : W() ? "" : At() + "-color-cover", ee = q().startsWith(At());
      return {
        text: U(),
        outline: E(),
        textColor: ee ? "" : q(),
        [At() + "-color-cover"]: ee,
        class: Ah(Ha("button"), Ha("button--usable"), [G, Ha("button--disabled")]),
        disabled: G
      };
    }, M = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, n("check-preview", "month", b);
    }, $ = (b, P) => {
      var D = P.currentTarget;
      D.classList.contains(Ha("button--disabled")) || n("choose-day", b);
    }, I = (b) => {
      u.value.checkDate(b);
    };
    return ir(() => {
      y(), w();
    }), ie(() => e.preview, () => {
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
      filterDay: p,
      getDayAbbr: g,
      checkDate: M,
      chooseDay: $,
      buttonProps: k
    };
  }
});
ed.render = zh;
const Lh = ed;
var {
  n: Rh,
  classes: Uh
} = _("date-picker");
function Fh(e, r) {
  var n = ae("year-picker-panel"), a = ae("month-picker-panel"), t = ae("day-picker-panel");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: r[0] || (r[0] = (o) => e.clickEl("year"))
        },
        [Y(e.$slots, "year", {
          year: e.chooseYear
        }, () => [Ce(
          re(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: r[1] || (r[1] = (o) => e.clickEl("date"))
        },
        [J(
          Le,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (h(), T("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), T("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [Ce(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [Ce(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "date", Tt(Ee({
                key: 2
              }, e.slotProps)), () => [Ce(
                re(e.getDateTitle),
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
      [J(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (h(), ye(
            n,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (h(), ye(
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
          )) : e.getPanelType === "date" ? (h(), ye(
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
var rd = Q({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Bh,
    YearPickerPanel: Dh,
    DayPickerPanel: Lh
  },
  props: Th,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = le().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Yt.find((oe) => oe.index === i), u = V(!1), d = V(!1), v = V(!0), f = V(), m = V(), g = V(), p = V(s), y = V(l), w = V(!1), O = V([]), C = V([]), k = V([]), M = V([]), $ = V(null), I = V(null), b = Ae({
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
    }), P = L(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: O.value,
      chooseDays: C.value,
      chooseRangeMonth: k.value,
      chooseRangeDay: M.value
    })), D = L(() => ({
      previewMonth: p.value,
      previewYear: y.value
    })), B = L(() => {
      var {
        multiple: oe,
        range: be
      } = e;
      if (be)
        return k.value.length ? k.value[0] + " ~ " + k.value[1] : "";
      var pe = "";
      if (f.value) {
        var Se, $e;
        pe = (Se = ($e = Ze.value.datePickerMonthDict) == null ? void 0 : $e[f.value.index].name) != null ? Se : "";
      }
      return oe ? "" + O.value.length + Ze.value.datePickerSelected : pe;
    }), j = L(() => {
      var oe, be, pe, Se, {
        multiple: $e,
        range: Re
      } = e;
      if (Re) {
        var nr = M.value.map((Co) => le(Co).format("YYYY-MM-DD"));
        return nr.length ? nr[0] + " ~ " + nr[1] : "";
      }
      if ($e)
        return "" + C.value.length + Ze.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var wr = le(m.value + "-" + f.value.index + "-" + g.value).day(), Fa = lt.find((Co) => Co.index === "" + wr), Ki = (oe = (be = Ze.value.datePickerWeekDict) == null ? void 0 : be[Fa.index].name) != null ? oe : "", Bv = (pe = (Se = Ze.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? pe : "", Ev = Ia(g.value, 2, "0");
      return Ze.value.lang === "zh-CN" ? f.value.index + "-" + Ev + " " + Ki.slice(0, 3) : Ki.slice(0, 3) + ", " + Bv.slice(0, 3) + " " + g.value;
    }), X = L(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), z = L(() => !e.touchable || ["", "year"].includes(X.value)), N = L(() => {
      var oe, be, pe, Se, $e = le(m.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + g.value).day(), Re = g.value ? Ia(g.value, 2, "0") : "";
      return {
        week: "" + $e,
        year: (be = m.value) != null ? be : "",
        month: (pe = (Se = f.value) == null ? void 0 : Se.index) != null ? pe : "",
        date: Re
      };
    }), F = L(() => P.value.chooseRangeDay.map((oe) => le(oe).format("YYYY-MM-DD"))), W = L(() => m.value === y.value), te = L(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === p.value.index;
    }), G = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, U = (oe) => {
      if (!z.value) {
        var {
          clientX: be,
          clientY: pe
        } = oe.touches[0];
        r = be, n = pe;
      }
    }, E = (oe, be) => oe >= be && oe > 20 ? "x" : "y", q = (oe) => {
      if (!z.value) {
        var {
          clientX: be,
          clientY: pe
        } = oe.touches[0], Se = be - r, $e = pe - n;
        t = E(Math.abs(Se), Math.abs($e)), a = Se > 0 ? "prev" : "next";
      }
    }, ee = () => {
      if (!(z.value || t !== "x")) {
        var oe = X.value === "month" ? $ : I;
        oo(() => {
          oe.value.forwardRef(a), Ye();
        });
      }
    }, se = (oe, be) => {
      var pe = be === "month" ? k : M;
      if (pe.value = v.value ? [oe, oe] : [pe.value[0], oe], v.value = !v.value, v.value) {
        var Se = le(pe.value[0]).isAfter(pe.value[1]), $e = Se ? [pe.value[1], pe.value[0]] : [...pe.value];
        S(e["onUpdate:modelValue"], $e), S(e.onChange, $e);
      }
    }, de = (oe, be) => {
      var pe = be === "month" ? O : C, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-DD", $e = pe.value.map((nr) => le(nr).format(Se)), Re = $e.findIndex((nr) => nr === oe);
      Re === -1 ? $e.push(oe) : $e.splice(Re, 1), S(e["onUpdate:modelValue"], $e), S(e.onChange, $e);
    }, we = (oe, be) => !m.value || !f.value ? !1 : W.value ? oe === "month" ? be.index < f.value.index : te.value ? be < R(g.value) : f.value.index > p.value.index : m.value > y.value, Pe = (oe) => {
      var {
        readonly: be,
        range: pe,
        multiple: Se,
        onChange: $e,
        "onUpdate:modelValue": Re
      } = e;
      if (!(oe < 0 || be)) {
        w.value = we("day", oe);
        var nr = y.value + "-" + p.value.index + "-" + oe, wr = le(nr).format("YYYY-MM-DD");
        pe ? se(wr, "day") : Se ? de(wr, "day") : (S(Re, wr), S($e, wr));
      }
    }, ur = (oe) => {
      var {
        type: be,
        readonly: pe,
        range: Se,
        multiple: $e,
        onChange: Re,
        onPreview: nr,
        "onUpdate:modelValue": wr
      } = e;
      if (w.value = we("month", oe), be === "month" && !pe) {
        var Fa = y.value + "-" + oe.index;
        Se ? se(Fa, "month") : $e ? de(Fa, "month") : (S(wr, Fa), S(Re, Fa));
      } else
        p.value = oe, S(nr, R(y.value), R(p.value.index));
      d.value = !1;
    }, ne = (oe) => {
      y.value = "" + oe, u.value = !1, d.value = !0, S(e.onPreview, R(y.value), R(p.value.index));
    }, ue = (oe, be) => {
      var pe = be === "prev" ? -1 : 1;
      if (oe === "year")
        y.value = "" + (R(y.value) + pe);
      else {
        var Se = R(p.value.index) + pe;
        Se < 1 && (y.value = "" + (R(y.value) - 1), Se = 12), Se > 12 && (y.value = "" + (R(y.value) + 1), Se = 1), p.value = Yt.find(($e) => R($e.index) === Se);
      }
      S(e.onPreview, R(y.value), R(p.value.index));
    }, me = () => (e.multiple || e.range) && !Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, De = (oe) => Te(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ke = (oe, be) => {
      var pe = be === "month" ? k : M, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = oe.map((wr) => le(wr).format(Se)).slice(0, 2), Re = pe.value.some((wr) => De(wr));
      if (!Re) {
        pe.value = $e;
        var nr = le(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && nr && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, Ge = (oe, be) => {
      var pe = be === "month" ? O : C, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = Array.from(new Set(oe.map((Re) => le(Re).format(Se))));
      pe.value = $e.filter((Re) => Re !== "Invalid Date");
    }, He = (oe) => {
      var be = le(oe).format("YYYY-MM-D");
      if (!De(be)) {
        var [pe, Se, $e] = be.split("-"), Re = Yt.find((nr) => nr.index === Se);
        f.value = Re, m.value = pe, g.value = $e, p.value = Re, y.value = pe;
      }
    }, Ye = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (oe) => {
      if (!(!me() || De(oe) || !oe))
        if (e.range) {
          if (!Te(oe))
            return;
          v.value = oe.length !== 1, Ke(oe, e.type);
        } else if (e.multiple) {
          if (!Te(oe))
            return;
          Ge(oe, e.type);
        } else
          He(oe);
    }, {
      immediate: !0
    }), ie(X, Ye), {
      n: Rh,
      classes: Uh,
      monthPanelEl: $,
      dayPanelEl: I,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: B,
      getDateTitle: j,
      getPanelType: X,
      getChoose: P,
      getPreview: D,
      componentProps: b,
      slotProps: N,
      formatRange: F,
      clickEl: G,
      handleTouchstart: U,
      handleTouchmove: q,
      handleTouchend: ee,
      getChooseDay: Pe,
      getChooseMonth: ur,
      getChooseYear: ne,
      checkPreview: ue,
      formatElevation: hr
    };
  }
});
rd.render = Fh;
const Jn = rd;
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
var ZS = Jn;
function oi() {
  return oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, oi.apply(this, arguments);
}
function Hh(e) {
  return ["left", "center", "right"].includes(e);
}
var Yh = oi({
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
    validator: Hh
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
}, Je(Pt, [
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ii.apply(this, arguments);
}
var {
  n: jh,
  classes: Wh
} = _("dialog");
function Gh(e, r) {
  var n = ae("var-button"), a = ae("var-popup");
  return h(), ye(
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
          [Y(e.$slots, "title", {}, () => [Ce(
            re(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: c(e.n("message")),
            style: K({
              textAlign: e.messageAlign
            })
          },
          [Y(e.$slots, "default", {}, () => [Ce(
            re(e.message),
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
          [e.cancelButton ? (h(), ye(
            n,
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
                re(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (h(), ye(
            n,
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
                re(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
    VarPopup: Sr,
    VarButton: er
  },
  inheritAttrs: !1,
  props: Yh,
  setup(e) {
    var r = V(!1), n = V(!1), a = () => S(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (S(s), !!i) {
        if (u != null) {
          S(u, "close", a);
          return;
        }
        S(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (S(s), i != null) {
        S(i, "confirm", a);
        return;
      }
      S(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (S(s), i != null) {
        S(i, "cancel", a);
        return;
      }
      S(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (i) => {
      r.value = i;
    }, {
      immediate: !0
    }), ie(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        n.value = !1;
        return;
      }
      n.value = i;
    }, {
      immediate: !0
    }), {
      n: jh,
      classes: Wh,
      pack: Ze,
      dt: to,
      popupShow: r,
      popupCloseOnClickOverlay: n,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ge
    };
  }
});
nd.render = Gh;
const yn = nd;
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, xt.apply(this, arguments);
}
var ln, eo = {};
function qh(e) {
  return e === void 0 && (e = {}), Fe(e) ? xt({}, eo, {
    message: e
  }) : xt({}, eo, e);
}
function Qr(e) {
  return at() ? new Promise((r) => {
    Qr.close();
    var n = qh(e), a = Ae(n);
    a.teleport = "body", ln = a;
    var {
      unmountInstance: t
    } = tt(yn, a, {
      onConfirm: () => {
        S(a.onConfirm), r("confirm");
      },
      onCancel: () => {
        S(a.onCancel), r("cancel");
      },
      onClose: () => {
        S(a.onClose), r("close");
      },
      onClosed: () => {
        S(a.onClosed), t(), ln === a && (ln = null);
      },
      onRouteChange: () => {
        t(), ln === a && (ln = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Qr.setDefaultOptions = function(e) {
  eo = e;
};
Qr.resetDefaultOptions = function() {
  eo = {};
};
Qr.close = function() {
  if (ln != null) {
    var e = ln;
    ln = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
yn.install = function(e) {
  e.component(yn.name, yn);
};
Qr.install = function(e) {
  e.component(yn.name, yn);
};
Qr.Component = yn;
var JS = yn, Xh = {
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Xa.apply(this, arguments);
}
var {
  n: Kh,
  classes: Zh
} = _("divider");
function Jh(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [Y(e.$slots, "default", {}, () => [e.description ? (h(), T(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var ad = Q({
  name: "VarDivider",
  props: Xh,
  setup(e, r) {
    var {
      slots: n
    } = r, a = Ae({
      withText: !1
    }), t = L(() => Mo(e.inset) ? e.inset : !0), o = L(() => {
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
      a.withText = !!n.default || !!e.description;
    };
    return ir(() => {
      l();
    }), $t(() => {
      l();
    }), Xa({
      n: Kh,
      classes: Zh
    }, Uv(a), {
      style: o,
      isInset: t
    });
  }
});
ad.render = Jh;
const Qn = ad;
Qn.install = function(e) {
  e.component(Qn.name, Qn);
};
var QS = Qn, Qh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return Qh[r];
  });
}
var Yr = "top", Vn = "bottom", Da = "right", bn = "left", ho = "auto", go = [Yr, Vn, Da, bn], yo = "start", yt = "end", _h = "clippingParents", td = "viewport", ot = "popper", xh = "reference", Tl = /* @__PURE__ */ go.reduce(function(e, r) {
  return e.concat([r + "-" + yo, r + "-" + yt]);
}, []), od = /* @__PURE__ */ [].concat(go, [ho]).reduce(function(e, r) {
  return e.concat([r, r + "-" + yo, r + "-" + yt]);
}, []), eg = "beforeRead", rg = "read", ng = "afterRead", ag = "beforeMain", tg = "main", og = "afterMain", ig = "beforeWrite", lg = "write", sg = "afterWrite", li = [eg, rg, ng, ag, tg, og, ig, lg, sg];
function jr(e) {
  return e.split("-")[0];
}
var ug = {
  start: "end",
  end: "start"
};
function Ol(e) {
  return e.replace(/start|end/g, function(r) {
    return ug[r];
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
function Aa(e) {
  var r = Mr(e).Element;
  return e instanceof r || e instanceof Element;
}
function kr(e) {
  var r = Mr(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function Li(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function En(e) {
  return ((Aa(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var dt = Math.max, Pl = Math.min, Qa = Math.round;
function si() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function id() {
  return !/^((?!chrome|android).)*safari/i.test(si());
}
function _a(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Qa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Qa(a.height) / e.offsetHeight || 1);
  var l = Aa(e) ? Mr(e) : window, i = l.visualViewport, s = !id() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Ui(e) {
  return _a(En(e)).left + Ri(e).scrollLeft;
}
function dg(e, r) {
  var n = Mr(e), a = En(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = id();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Ui(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function vg(e) {
  var r, n = En(e), a = Ri(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = dt(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = dt(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Ui(e), s = -a.scrollTop;
  return Ar(t || n).direction === "rtl" && (i += dt(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Fr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function bo(e) {
  return Fr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Li(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    En(e)
  );
}
function Fi(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function ld(e) {
  return ["html", "body", "#document"].indexOf(Fr(e)) >= 0 ? e.ownerDocument.body : kr(e) && Fi(e) ? e : ld(bo(e));
}
function vt(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = ld(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], Fi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(vt(bo(l)))
  );
}
function fg(e) {
  return ["table", "td", "th"].indexOf(Fr(e)) >= 0;
}
function Vl(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function cg(e) {
  var r = /firefox/i.test(si()), n = /Trident/i.test(si());
  if (n && kr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = bo(e);
  for (Li(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Fr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Hi(e) {
  for (var r = Mr(e), n = Vl(e); n && fg(n) && Ar(n).position === "static"; )
    n = Vl(n);
  return n && (Fr(n) === "html" || Fr(n) === "body" && Ar(n).position === "static") ? r : n || cg(e) || r;
}
function mg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Li(n)) {
    var a = r;
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
function pg(e, r) {
  var n = _a(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ml(e, r, n) {
  return r === td ? ui(dg(e, n)) : Aa(r) ? pg(r, n) : ui(vg(En(e)));
}
function hg(e) {
  var r = vt(bo(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && kr(e) ? Hi(e) : e;
  return Aa(a) ? r.filter(function(t) {
    return Aa(t) && mg(t, a) && Fr(t) !== "body";
  }) : [];
}
function gg(e, r, n, a) {
  var t = r === "clippingParents" ? hg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Ml(e, u, a);
    return s.top = dt(d.top, s.top), s.right = Pl(d.right, s.right), s.bottom = Pl(d.bottom, s.bottom), s.left = dt(d.left, s.left), s;
  }, Ml(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function bt(e) {
  return e.split("-")[1];
}
function yg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function sd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? jr(a) : null, o = a ? bt(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case Yr:
      s = {
        x: l,
        y: r.y - n.height
      };
      break;
    case Vn:
      s = {
        x: l,
        y: r.y + r.height
      };
      break;
    case Da:
      s = {
        x: r.x + r.width,
        y: i
      };
      break;
    case bn:
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
  var u = t ? yg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case yo:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case yt:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function bg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wg(e) {
  return Object.assign({}, bg(), e);
}
function Cg(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function ud(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? _h : i, u = n.rootBoundary, d = u === void 0 ? td : u, v = n.elementContext, f = v === void 0 ? ot : v, m = n.altBoundary, g = m === void 0 ? !1 : m, p = n.padding, y = p === void 0 ? 0 : p, w = wg(typeof y != "number" ? y : Cg(y, go)), O = f === ot ? xh : ot, C = e.rects.popper, k = e.elements[g ? O : f], M = gg(Aa(k) ? k : k.contextElement || En(e.elements.popper), s, d, l), $ = _a(e.elements.reference), I = sd({
    reference: $,
    element: C,
    strategy: "absolute",
    placement: t
  }), b = ui(Object.assign({}, C, I)), P = f === ot ? b : $, D = {
    top: M.top - P.top + w.top,
    bottom: P.bottom - M.bottom + w.bottom,
    left: M.left - P.left + w.left,
    right: P.right - M.right + w.right
  }, B = e.modifiersData.offset;
  if (f === ot && B) {
    var j = B[t];
    Object.keys(D).forEach(function(X) {
      var z = [Da, Vn].indexOf(X) >= 0 ? 1 : -1, N = [Yr, Vn].indexOf(X) >= 0 ? "y" : "x";
      D[X] += j[N] * z;
    });
  }
  return D;
}
function Sg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? od : s, d = bt(a), v = d ? i ? Tl : Tl.filter(function(g) {
    return bt(g) === d;
  }) : go, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, p) {
    return g[p] = ud(e, {
      placement: p,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[jr(p)], g;
  }, {});
  return Object.keys(m).sort(function(g, p) {
    return m[g] - m[p];
  });
}
function kg(e) {
  if (jr(e) === ho)
    return [];
  var r = jt(e);
  return [Ol(e), r, Ol(r)];
}
function $g(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, g = m === void 0 ? !0 : m, p = n.allowedAutoPlacements, y = r.options.placement, w = jr(y), O = w === y, C = s || (O || !g ? [jt(y)] : kg(y)), k = [y].concat(C).reduce(function(se, de) {
      return se.concat(jr(de) === ho ? Sg(r, {
        placement: de,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: p
      }) : de);
    }, []), M = r.rects.reference, $ = r.rects.popper, I = /* @__PURE__ */ new Map(), b = !0, P = k[0], D = 0; D < k.length; D++) {
      var B = k[D], j = jr(B), X = bt(B) === yo, z = [Yr, Vn].indexOf(j) >= 0, N = z ? "width" : "height", F = ud(r, {
        placement: B,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), W = z ? X ? Da : bn : X ? Vn : Yr;
      M[N] > $[N] && (W = jt(W));
      var te = jt(W), G = [];
      if (o && G.push(F[j] <= 0), i && G.push(F[W] <= 0, F[te] <= 0), G.every(function(se) {
        return se;
      })) {
        P = B, b = !1;
        break;
      }
      I.set(B, G);
    }
    if (b)
      for (var U = g ? 3 : 1, E = function(de) {
        var we = k.find(function(Pe) {
          var ur = I.get(Pe);
          if (ur)
            return ur.slice(0, de).every(function(ne) {
              return ne;
            });
        });
        if (we)
          return P = we, "break";
      }, q = U; q > 0; q--) {
        var ee = E(q);
        if (ee === "break")
          break;
      }
    r.placement !== P && (r.modifiersData[a]._skip = !0, r.placement = P, r.reset = !0);
  }
}
const Tg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: $g,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Og(e, r, n) {
  var a = jr(e), t = [bn, Yr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e
  })) : n, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [bn, Da].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Pg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = od.reduce(function(d, v) {
    return d[v] = Og(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Vg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Pg
};
function Mg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bg(e) {
  return e === Mr(e) || !kr(e) ? Ri(e) : Mg(e);
}
function Eg(e) {
  var r = e.getBoundingClientRect(), n = Qa(r.width) / e.offsetWidth || 1, a = Qa(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function Ig(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Eg(r), o = En(r), l = _a(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Fr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fi(o)) && (i = Bg(r)), kr(r) ? (s = _a(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = Ui(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Ng(e) {
  var r = _a(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function Dg(e) {
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
function Ag(e) {
  var r = Dg(e);
  return li.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function zg(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e());
      });
    })), r;
  };
}
function rn(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return [].concat(n).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var In = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Lg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Bl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Rg(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Bl).filter(function(n, a, t) {
      return t.indexOf(n) === a;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof r.name != "string" && console.error(rn(In, String(r.name), '"name"', '"string"', '"' + String(r.name) + '"'));
          break;
        case "enabled":
          typeof r.enabled != "boolean" && console.error(rn(In, r.name, '"enabled"', '"boolean"', '"' + String(r.enabled) + '"'));
          break;
        case "phase":
          li.indexOf(r.phase) < 0 && console.error(rn(In, r.name, '"phase"', "either " + li.join(", "), '"' + String(r.phase) + '"'));
          break;
        case "fn":
          typeof r.fn != "function" && console.error(rn(In, r.name, '"fn"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "effect":
          r.effect != null && typeof r.effect != "function" && console.error(rn(In, r.name, '"effect"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "requires":
          r.requires != null && !Array.isArray(r.requires) && console.error(rn(In, r.name, '"requires"', '"array"', '"' + String(r.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(r.requiresIfExists) || console.error(rn(In, r.name, '"requiresIfExists"', '"array"', '"' + String(r.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Bl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(rn(Lg, String(r.name), a, a));
      });
    });
  });
}
function Ug(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function Fg(e) {
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
var El = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Hg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Il = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Nl() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Yg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Il : t;
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
        var O = typeof w == "function" ? w(d.options) : w;
        p(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: Aa(i) ? vt(i) : i.contextElement ? vt(i.contextElement) : [],
          popper: vt(s)
        };
        var C = Ag(Fg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = C.filter(function(B) {
          return B.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = Ug([].concat(C, d.options.modifiers), function(B) {
            var j = B.name;
            return j;
          });
          if (Rg(k), jr(d.options.placement) === ho) {
            var M = d.orderedModifiers.find(function(B) {
              var j = B.name;
              return j === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var $ = Ar(s), I = $.marginTop, b = $.marginRight, P = $.marginBottom, D = $.marginLeft;
          [I, b, P, D].some(function(B) {
            return parseFloat(B);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, O = w.reference, C = w.popper;
          if (!Nl(O, C)) {
            process.env.NODE_ENV !== "production" && console.error(El);
            return;
          }
          d.rects = {
            reference: Ig(O, Hi(C), d.options.strategy === "fixed"),
            popper: Ng(C)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(B) {
            return d.modifiersData[B.name] = Object.assign({}, B.data);
          });
          for (var k = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(Hg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var $ = d.orderedModifiers[M], I = $.fn, b = $.options, P = b === void 0 ? {} : b, D = $.name;
            typeof I == "function" && (d = I({
              state: d,
              options: P,
              name: D,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: zg(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        p(), f = !0;
      }
    };
    if (!Nl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(El), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var w = y.name, O = y.options, C = O === void 0 ? {} : O, k = y.effect;
        if (typeof k == "function") {
          var M = k({
            state: d,
            name: w,
            instance: m,
            options: C
          }), $ = function() {
          };
          v.push(M || $);
        }
      });
    }
    function p() {
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
function jg(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, zt);
  }), i && s.addEventListener("resize", n.update, zt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, zt);
    }), i && s.removeEventListener("resize", n.update, zt);
  };
}
const Wg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: jg,
  data: {}
};
function Gg(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = sd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const qg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Gg,
  data: {}
};
var Xg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Kg(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Qa(r * t) / t || 0,
    y: Qa(n * t) / t || 0
  };
}
function Dl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, p = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  m = y.x, p = y.y;
  var w = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), C = bn, k = Yr, M = window;
  if (u) {
    var $ = Hi(n), I = "clientHeight", b = "clientWidth";
    if ($ === Mr(n) && ($ = En(n), Ar($).position !== "static" && i === "absolute" && (I = "scrollHeight", b = "scrollWidth")), $ = $, t === Yr || (t === bn || t === Da) && o === yt) {
      k = Vn;
      var P = v && $ === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[I]
      );
      p -= P - a.height, p *= s ? 1 : -1;
    }
    if (t === bn || (t === Yr || t === Vn) && o === yt) {
      C = Da;
      var D = v && $ === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[b]
      );
      m -= D - a.width, m *= s ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: i
  }, u && Xg), j = d === !0 ? Kg({
    x: m,
    y: p
  }) : {
    x: m,
    y: p
  };
  if (m = j.x, p = j.y, s) {
    var X;
    return Object.assign({}, B, (X = {}, X[k] = O ? "0" : "", X[C] = w ? "0" : "", X.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + p + "px)" : "translate3d(" + m + "px, " + p + "px, 0)", X));
  }
  return Object.assign({}, B, (r = {}, r[k] = O ? p + "px" : "", r[C] = w ? m + "px" : "", r.transform = "", r));
}
function Zg(e) {
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
    placement: jr(r.placement),
    variation: bt(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Dl(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Dl(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const Jg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Zg,
  data: {}
};
function Qg(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !kr(o) || !Fr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function _g(e) {
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
      !kr(t) || !Fr(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const xg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qg,
  effect: _g,
  requires: ["computeStyles"]
};
var ey = [Wg, qg, Jg, xg], ry = /* @__PURE__ */ Yg({
  defaultModifiers: ey
});
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ro.apply(this, arguments);
}
function Al(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function zl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
function dd(e) {
  var r = V(null), n = V(null), a = V({
    width: 0,
    height: 0
  }), t = Vs(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit($, I) {
      I ? (C(), S(e.onOpen)) : S(e.onClose);
    }
  }), {
    zIndex: o
  } = Vt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: $,
      height: I
    } = Na(r.value);
    a.value = {
      width: je($),
      height: je(I)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, k());
  }, v = /* @__PURE__ */ function() {
    var $ = zl(function* () {
      e.trigger === "hover" && (s = !1, yield Lr(), !i && M());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var $ = zl(function* () {
      e.trigger === "hover" && (i = !1, yield Lr(), !s && M());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), g = () => {
    k();
  }, p = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  }, y = () => {
    e.trigger === "click" && p();
  }, w = () => {
    u();
    var $ = {
      x: je(e.offsetX),
      y: je(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: $.x,
          distance: $.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: $.x,
          distance: $.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: $.x,
          distance: $.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: $.x,
          distance: -$.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: $.x,
          distance: -$.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: $.x,
          distance: -$.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: $.y,
          distance: $.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: $.y,
          distance: -$.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: $.y,
          distance: -$.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: $.x,
          distance: -$.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: $.x,
          distance: $.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: $.y,
          distance: $.x
        };
    }
  }, O = () => {
    var {
      placement: $,
      skidding: I,
      distance: b
    } = w(), P = [ro({}, Tg, {
      enabled: t.value
    }), ro({}, Vg, {
      options: {
        offset: [I, b]
      }
    })];
    return {
      placement: $,
      modifiers: P
    };
  }, C = () => {
    l.setOptions(O());
  }, k = () => {
    var {
      disabled: $
    } = e;
    $ || (t.value = !0, S(e["onUpdate:show"], !0));
  }, M = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  };
  return Os(r, "click", y), ie(() => e.offsetX, C), ie(() => e.offsetY, C), ie(() => e.placement, C), ie(() => e.disabled, M), no(() => {
    var $, I = e.reference ? ($ = r.value) == null ? void 0 : $.querySelector(e.reference) : r.value;
    l = ry(I ?? r.value, n.value, O());
  }), rt(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: g,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: p,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: C,
    open: k,
    close: M
  };
}
function ny(e) {
  return ["click", "hover"].includes(e);
}
function ay(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function ty(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var oy = {
  type: {
    type: String,
    default: "default",
    validator: ty
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
    validator: ny
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ay
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
  n: iy,
  classes: ly
} = _("tooltip");
function sy(e, r) {
  return h(), T(
    "div",
    {
      ref: "host",
      class: c(e.n()),
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
    [Y(e.$slots, "default"), (h(), ye(
      La,
      {
        to: e.teleport
      },
      [J(
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
              style: K({
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
            [A(
              "div",
              {
                style: K({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [Y(e.$slots, "content", {}, () => [Ce(
                re(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[$n, e.show]])]),
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
var vd = Q({
  name: "VarTooltip",
  props: oy,
  setup(e) {
    var {
      popover: r,
      host: n,
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
      resize: g
    } = dd(e);
    return {
      toSizeUnit: ge,
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      n: iy,
      classes: ly,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: g,
      open: f,
      close: m
    };
  }
});
vd.render = sy;
const wn = vd;
wn.install = function(e) {
  e.component(wn.name, wn);
};
var _S = wn;
function uy(e) {
  return ["click"].includes(e);
}
var dy = {
  expandTrigger: {
    type: String,
    validator: uy
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, di.apply(this, arguments);
}
var {
  n: vy,
  classes: fy
} = _("ellipsis"), cy = {
  key: 0
};
function my(e, r) {
  var n = ae("var-tooltip");
  return h(), ye(
    n,
    Tt(ao(e.tooltip)),
    {
      content: ve(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), T(
          "span",
          cy,
          re(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [A(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: K(e.rootStyles),
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
var fd = Q({
  name: "VarEllipsis",
  components: {
    VarTooltip: wn
  },
  props: dy,
  setup(e) {
    var r = V(!1), n = L(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = L(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : di({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: vy,
      classes: fy,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
fd.render = my;
const _n = fd;
_n.install = function(e) {
  e.component(_n.name, _n);
};
var xS = _n;
function py(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function hy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function gy(e) {
  return ["click", "hover"].includes(e);
}
var yy = {
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
    validator: ou
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: py
  },
  direction: {
    type: String,
    default: "top",
    validator: hy
  },
  trigger: {
    type: String,
    default: "click",
    validator: gy
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
function Ll(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  classes: Rl,
  n: dr
} = _("fab");
const xn = Q({
  name: "VarFab",
  inheritAttrs: !1,
  props: yy,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = Vs(e, "active"), o = V(null), {
      disabled: l
    } = io(), i = (f, m, g) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (g === 0) {
          S(e.onClick, t.value, f);
          return;
        }
        t.value = m, S(e.onClick, t.value, f), S(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, S(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : ke(J(er, {
      "var-fab-cover": !0,
      class: dr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [J(Oe, {
        "var-fab-cover": !0,
        class: Rl([t.value, dr("trigger-active-icon"), dr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: dr("--trigger-icon-animation")
      }, null)]
    }), [[$n, e.show]]), v = () => {
      var f, m, g = Ps((m = n.default == null ? void 0 : n.default()) != null ? m : []);
      return J("div", Ee({
        class: Rl(dr(), dr("--position-" + e.position), dr("--direction-" + e.direction), [e.fixed, dr("--fixed"), dr("--absolute")], [e.safeArea, dr("--safe-area")]),
        style: {
          zIndex: R(e.zIndex),
          top: ge(e.top),
          bottom: ge(e.bottom),
          left: ge(e.left),
          right: ge(e.right)
        },
        ref: o,
        onClick: (p) => i(p, !t.value, g.length),
        onMouseleave: () => s(!1, g.length),
        onMouseenter: () => s(!0, g.length)
      }, a), [J(Le, {
        name: dr("--active-transition")
      }, Ll(f = d()) ? f : {
        default: () => [f]
      }), J(Le, {
        name: dr("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(J("div", {
          class: dr("actions"),
          onClick: (p) => p.stopPropagation()
        }, [g.map((p) => J("div", {
          class: dr("action")
        }, [p]))]), [[$n, e.show && t.value && g.length]])]
      })]);
    };
    return ie(() => e.trigger, () => {
      t.value = !1;
    }), ie(() => e.disabled, () => {
      t.value = !1;
    }), Os(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return J(La, {
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
xn.install = function(e) {
  e.component(xn.name, xn);
};
var ek = xn;
function by(e) {
  return ["start", "end"].includes(e);
}
var wy = {
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
    validator: by
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Ul(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Cy(e) {
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
  n: Sy
} = _("form");
function ky(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var cd = Q({
  name: "VarForm",
  props: wy,
  setup(e) {
    var r = L(() => e.disabled), n = L(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Em(), o = (d) => {
      setTimeout(() => {
        var v = Tn(d), f = v === window ? 0 : nl(v), m = nl(d) - f - je(e.scrollToErrorOffsetY);
        pt(v, {
          top: m,
          animation: Bo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Cy(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: w
          } = y;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = Wv(v, (y) => y === !1, e.scrollToError), m = f > -1;
          if (m) {
            var g, p = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(p);
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
      disabled: r,
      readonly: n
    };
    return t(u), {
      n: Sy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
cd.render = ky;
const Wr = cd;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
Wr.useValidation = Pr;
Wr.useForm = Vr;
var rk = Wr;
function $y(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Ty = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: $y,
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
  n: Oy,
  classes: Py
} = _("image"), Vy = ["alt", "title", "lazy-error", "lazy-loading"], My = ["alt", "title", "src"];
function By(e, r) {
  var n = Ie("lazy"), a = Ie("ripple");
  return ke((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((h(), T(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: K({
          objectFit: e.fit
        }),
        onLoad: r[0] || (r[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: r[1] || (r[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: r[2] || (r[2] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      Vy
    )), [[n, e.src]]) : (h(), T(
      "img",
      {
        key: 1,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: K({
          objectFit: e.fit
        }),
        src: e.src,
        onLoad: r[3] || (r[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: r[4] || (r[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: r[5] || (r[5] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      My
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var md = Q({
  name: "VarImage",
  directives: {
    Lazy: ht,
    Ripple: We
  },
  props: Ty,
  setup(e) {
    var r = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && S(i, t), o._lazy.state === "error" && S(s, t)) : S(i, t);
    }, n = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && S(l, t);
    }, a = (t) => {
      S(e.onClick, t);
    };
    return {
      n: Oy,
      classes: Py,
      toSizeUnit: ge,
      handleLoad: r,
      handleError: n,
      handleClick: a
    };
  }
});
md.render = By;
const ea = md;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var nk = ea, pd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Ey() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = sr(pd);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var hd = {
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
function Fl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Iy(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
var Ny = 250, Dy = 20, {
  n: Ay,
  classes: zy
} = _("swipe"), Ly = ["onClick"];
function Ry(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: K({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)",
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
    }, () => [e.indicator && e.length ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), T(
        Ve,
        null,
        Ue(e.length, (n, a) => (h(), T(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: K({
              background: e.indicatorColor
            }),
            key: n,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Ly
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
var gd = Q({
  name: "VarSwipe",
  props: hd,
  setup(e) {
    var r = V(null), n = V(0), a = L(() => e.vertical), t = V(0), o = V(0), l = V(!1), i = V(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Ey(), v = !1, f = !1, m = -1, g, p, y, w, O, C = (E) => s.find((q) => {
      var {
        index: ee
      } = q;
      return ee.value === E;
    }), k = () => {
      e.loop && (o.value >= 0 && C(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && C(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (C(d.value - 1).setTranslate(0), C(0).setTranslate(0)));
    }, M = (E) => {
      var q = or(E) ? E : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: ee
      } = e;
      return q <= -1 ? ee ? -1 : 0 : q >= d.value ? ee ? d.value : d.value - 1 : q;
    }, $ = (E) => {
      var {
        loop: q
      } = e;
      return E === -1 ? q ? d.value - 1 : 0 : E === d.value ? q ? 0 : d.value - 1 : E;
    }, I = (E) => {
      var {
        loop: q
      } = e;
      return E < 0 ? q ? d.value - 1 : 0 : E > d.value - 1 ? q ? 0 : d.value - 1 : E;
    }, b = (E) => {
      var q = o.value >= n.value, ee = o.value <= -t.value, se = 0, de = -(t.value - n.value);
      l.value = !0, (q || ee) && (l.value = !0, o.value = ee ? se : de, C(0).setTranslate(0), C(d.value - 1).setTranslate(0)), oo(() => {
        l.value = !1, S(E);
      });
    }, P = () => {
      v || (i.value = I(R(e.initialIndex)), v = !0);
    }, D = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (B(), m = window.setTimeout(() => {
        W(), D();
      }, R(E)));
    }, B = () => {
      m && clearTimeout(m);
    }, j = (E, q) => {
      if (E > q && E > 10)
        return "horizontal";
      if (q > E && q > 10)
        return "vertical";
    }, X = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: q,
          clientY: ee
        } = E.touches[0];
        g = q, p = ee, y = performance.now(), f = !0, B(), b(() => {
          l.value = !0;
        });
      }
    }, z = (E) => {
      var {
        touchable: q,
        vertical: ee
      } = e;
      if (!(!f || !q)) {
        var {
          clientX: se,
          clientY: de
        } = E.touches[0], we = Math.abs(se - g), Pe = Math.abs(de - p), ur = j(we, Pe), ne = ee ? "vertical" : "horizontal";
        if (ur === ne) {
          E.preventDefault();
          var ue = w !== void 0 ? se - w : 0, me = O !== void 0 ? de - O : 0;
          w = se, O = de, o.value += ee ? me : ue, k();
        }
      }
    }, N = () => {
      if (f) {
        var {
          vertical: E,
          onChange: q
        } = e, ee = E ? O < p : w < g, se = Math.abs(E ? p - O : g - w), de = performance.now() - y <= Ny && se >= Dy, we = de ? M(ee ? i.value + 1 : i.value - 1) : M();
        f = !1, l.value = !1, w = void 0, O = void 0, o.value = we * -n.value;
        var Pe = i.value;
        i.value = $(we), D(), Pe !== i.value && S(q, i.value);
      }
    }, F = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((E) => {
        E.setTranslate(0);
      }), D(), setTimeout(() => {
        l.value = !1;
      }));
    }, W = (E) => {
      if (!(d.value <= 1)) {
        P();
        var {
          loop: q,
          onChange: ee
        } = e, se = i.value;
        i.value = I(se + 1), (E == null ? void 0 : E.event) !== !1 && S(ee, i.value), b(() => {
          if (se === d.value - 1 && q) {
            C(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          se !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, te = (E) => {
      if (!(d.value <= 1)) {
        P();
        var {
          loop: q,
          onChange: ee
        } = e, se = i.value;
        i.value = I(se - 1), (E == null ? void 0 : E.event) !== !1 && S(ee, i.value), b(() => {
          if (se === 0 && q) {
            C(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          se !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, G = (E, q) => {
      if (!(d.value <= 1 || E === i.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var ee = E > i.value ? W : te, se = Math.abs(E - i.value);
        Array.from({
          length: se
        }).forEach((de, we) => {
          ee({
            event: we === se - 1 ? q == null ? void 0 : q.event : !1
          });
        });
      }
    }, U = {
      size: n,
      vertical: a
    };
    return u(U), ie(() => d.value, /* @__PURE__ */ Iy(function* () {
      yield Lr(), P(), F();
    })), Mn(F), xr(B), rt(B), Zr(() => window, "resize", F), {
      n: Ay,
      classes: zy,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: X,
      handleTouchmove: z,
      handleTouchend: N,
      next: W,
      prev: te,
      to: G,
      resize: F,
      toNumber: R
    };
  }
});
gd.render = Ry;
const Gr = gd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var ak = Gr;
function Uy() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = lr(pd);
  return e || Or("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Fy
} = _("swipe-item");
function Hy(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n()),
      style: K({
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
var yd = Q({
  name: "VarSwipeItem",
  setup() {
    var e = V(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = Uy(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: Fy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
yd.render = Hy;
const qr = yd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var tk = qr;
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, vi.apply(this, arguments);
}
var Yy = vi({
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
}, Je(hd, ["loop", "indicator", "onChange"]), Je(Pt, [
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
  classes: jy
} = _("image-preview"), Yl = 12, jl = 200, Wy = 350, Wl = 200, Gy = ["src", "alt"];
function qy(e, r) {
  var n = ae("var-swipe-item"), a = ae("var-swipe"), t = ae("var-icon"), o = ae("var-popup");
  return h(), ye(
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
      default: ve(() => [J(
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
          default: ve(() => [(h(!0), T(
            Ve,
            null,
            Ue(e.images, (l) => (h(), ye(
              n,
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
                    style: K({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
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
                  [A(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Gy
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
            return [Y(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), T(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              re(i + 1) + " / " + re(s),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), ye(
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
        [Y(e.$slots, "extra")],
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
var bd = Q({
  name: "VarImagePreview",
  components: {
    VarSwipe: Gr,
    VarSwipeItem: qr,
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Yy,
  setup(e) {
    var r = V(!1), n = L(() => {
      var {
        images: D,
        current: B
      } = e, j = D.findIndex((X) => X === B);
      return j >= 0 ? j : 0;
    }), a = V(1), t = V(0), o = V(0), l = V(void 0), i = V(void 0), s = V(!0), u = null, d = null, v = null, f = (D, B) => {
      var {
        clientX: j,
        clientY: X
      } = D, {
        clientX: z,
        clientY: N
      } = B;
      return Math.abs(Math.sqrt(Math.pow(z - j, 2) + Math.pow(N - X, 2)));
    }, m = (D, B) => ({
      clientX: D.clientX,
      clientY: D.clientY,
      timestamp: performance.now(),
      target: B
    }), g = () => {
      a.value = R(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Wl);
    }, p = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, y = (D) => d ? f(d, D) <= Yl && D.timestamp - d.timestamp <= jl && d.target === D.target : !1, w = (D) => !D || !u || !d ? !1 : f(u, d) <= Yl && performance.now() - d.timestamp < Wy && (D === u.target || D.parentNode === u.target), O = (D) => {
      var B = w(D.target);
      v = window.setTimeout(() => {
        B && P(), u = null;
      }, jl);
    }, C = (D) => {
      v && window.clearTimeout(v);
      var B = m(D.touches[0], D.currentTarget);
      if (u = B, y(B)) {
        a.value > 1 ? p() : g();
        return;
      }
      d = B;
    }, k = (D) => {
      var {
        offsetWidth: B,
        offsetHeight: j
      } = D, {
        naturalWidth: X,
        naturalHeight: z
      } = D.querySelector("." + Hl("image"));
      return {
        width: B,
        height: j,
        imageRadio: z / X,
        rootRadio: j / B,
        zoom: R(e.zoom)
      };
    }, M = (D) => {
      var {
        zoom: B,
        imageRadio: j,
        rootRadio: X,
        width: z,
        height: N
      } = k(D);
      if (!j)
        return 0;
      var F = j > X ? N / j : z;
      return Math.max(0, (B * F - z) / 2) / B;
    }, $ = (D) => {
      var {
        zoom: B,
        imageRadio: j,
        rootRadio: X,
        width: z,
        height: N
      } = k(D);
      if (!j)
        return 0;
      var F = j > X ? N : z * j;
      return Math.max(0, (B * F - N) / 2) / B;
    }, I = (D, B, j) => D + B >= j ? j : D + B <= -j ? -j : D + B, b = (D) => {
      if (d) {
        var B = D.currentTarget, j = m(D.touches[0], B);
        if (a.value > 1) {
          var X = j.clientX - d.clientX, z = j.clientY - d.clientY, N = M(B), F = $(B);
          t.value = I(t.value, X, N), o.value = I(o.value, z, F);
        }
        d = j;
      }
    }, P = () => {
      if (a.value > 1) {
        p(), setTimeout(() => S(e["onUpdate:show"], !1), Wl);
        return;
      }
      S(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (D) => {
      r.value = D;
    }, {
      immediate: !0
    }), {
      n: Hl,
      classes: jy,
      initialIndex: n,
      popupShow: r,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: C,
      handleTouchmove: b,
      handleTouchend: O,
      close: P
    };
  }
});
bd.render = qy;
const Cn = bd;
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ft.apply(this, arguments);
}
var sn, ct = {};
function Xy(e) {
  return e === void 0 && (e = {}), Fe(e) ? ft({}, ct, {
    images: [e]
  }) : Te(e) ? ft({}, ct, {
    images: e
  }) : ft({}, ct, e);
}
function zr(e) {
  if (at()) {
    zr.close();
    var r = Xy(e), n = Ae(r);
    n.teleport = "body", sn = n;
    var {
      unmountInstance: a
    } = tt(Cn, n, {
      onClose: () => S(n.onClose),
      onClosed: () => {
        S(n.onClosed), a(), sn === n && (sn = null);
      },
      onRouteChange: () => {
        a(), sn === n && (sn = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }
}
zr.close = () => {
  if (sn != null) {
    var e = sn;
    sn = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
zr.setDefaultOptions = (e) => {
  ct = e;
};
zr.resetDefaultOptions = () => {
  ct = {};
};
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
zr.install = function(e) {
  e.component(Cn.name, Cn);
};
zr.Component = Cn;
var ok = Cn, Wt = {
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
function Gl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ql(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: Ky,
  classes: Zy
} = _("sticky");
function Jy(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: K({
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
        style: K({
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
var wd = Q({
  name: "VarSticky",
  props: Wt,
  setup(e) {
    var r = V(null), n = V(null), a = V(!1), t = V("0px"), o = V("0px"), l = V("auto"), i = V("auto"), s = V("auto"), u = V("auto"), d = L(() => !e.disabled && e.cssMode), v = L(() => !e.disabled && !e.cssMode && a.value), f = L(() => je(e.offsetTop)), m, g = () => {
      var {
        cssMode: C,
        disabled: k
      } = e;
      if (!k) {
        var M = 0;
        if (m !== window) {
          var {
            top: $
          } = m.getBoundingClientRect();
          M = $;
        }
        var I = n.value, b = r.value, {
          top: P,
          left: D
        } = b.getBoundingClientRect(), B = P - M;
        return B <= f.value ? (C || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = M + f.value + "px", o.value = D + "px", s.value = I.offsetWidth + "px", u.value = I.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: B,
          isFixed: !1
        });
      }
    }, p = () => {
      if (m) {
        var C = g();
        C && S(e.onScroll, C.offsetTop, C.isFixed);
      }
    }, y = /* @__PURE__ */ function() {
      var C = ql(function* () {
        a.value = !1, yield ef(), g();
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var C = ql(function* () {
        yield Lr(), m = Tn(r.value), m !== window && m.addEventListener("scroll", p), p();
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", p);
    };
    return ie(() => e.disabled, y), ir(w), rt(O), xr(O), Zr(() => window, "scroll", p), Zr(() => window, "resize", y), {
      n: Ky,
      classes: Zy,
      resize: y,
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
      toNumber: R
    };
  }
});
wd.render = Jy;
const Xr = wd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var ik = Xr, Cd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Qy() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = sr(Cd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function _y() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(Cd);
  return n || Or("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var xy = {
  index: {
    type: [Number, String]
  }
}, {
  n: eb,
  classes: rb
} = _("index-anchor");
function nb(e, r) {
  return h(), ye(
    nt(e.sticky ? e.n("$-sticky") : e.Transition),
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
        [Y(e.$slots, "default", {}, () => [Ce(
          re(e.name),
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
var Sd = Q({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Xr
  },
  inheritAttrs: !1,
  props: xy,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = _y(), t = V(0), o = V(!1), l = L(() => e.index), i = V(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, g = (y) => {
      o.value = y;
    }, p = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: g
    };
    return a(p), {
      n: eb,
      classes: rb,
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
Sd.render = nb;
const ra = Sd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var lk = ra, ab = {
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
function Xl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Lt(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: tb,
  classes: ob
} = _("index-bar"), ib = ["onClick"];
function lb(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [Y(e.$slots, "default"), A(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), T(
        Ve,
        null,
        Ue(e.anchorNameList, (n) => (h(), T(
          "li",
          {
            key: n,
            class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
            style: K({
              color: e.active === n && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: n,
              manualCall: !0
            })
          },
          re(n),
          15,
          ib
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
var kd = Q({
  name: "VarIndexBar",
  props: ab,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = Qy(), t = V(""), o = V(null), l = V([]), i = V(), s = L(() => e.sticky), u = L(() => e.stickyCssMode || e.cssMode), d = L(() => je(e.stickyOffsetTop)), v = L(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var p = (I, b) => {
      var P = Ci(I) ? I.name.value : I;
      P === i.value || P === void 0 || (i.value = P, (b == null ? void 0 : b.event) !== !1 && S(e.onChange, P));
    }, y = () => {
      if (Si(f))
        return 0;
      var {
        top: I
      } = mr(f), {
        scrollTop: b
      } = f, {
        top: P
      } = mr(o.value);
      return b - I + P;
    }, w = () => {
      var I = mt(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, P = y();
      n.forEach((D, B) => {
        var j = D.ownTop.value, X = I - j + d.value - P, z = B === n.length - 1 ? b : n[B + 1].ownTop.value - D.ownTop.value;
        D.setDisabled(!0), X >= 0 && X < z && t.value === "" && (D.setDisabled(!1), p(D));
      });
    }, O = /* @__PURE__ */ function() {
      var I = Lt(function* (b) {
        var {
          anchorName: P,
          manualCall: D = !1,
          options: B
        } = b;
        if (D && S(e.onClick, P), !(P === i.value && !m)) {
          var j = n.find((F) => {
            var {
              name: W
            } = F;
            return P === W.value;
          });
          if (j) {
            var X = y(), z = j.ownTop.value - d.value + X, N = $i(f);
            t.value = P, p(P, B), yield pt(f, {
              left: N,
              top: z,
              animation: gs,
              duration: R(e.duration)
            }), oo(() => {
              t.value = "";
            });
          }
        }
      });
      return function(P) {
        return I.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var I = Lt(function* () {
        yield Lr(), f = Tn(o.value);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), k = () => {
      f.addEventListener("scroll", w);
    }, M = () => {
      f.removeEventListener("scroll", w);
    }, $ = (I, b) => {
      br(() => O({
        anchorName: I,
        options: b
      }));
    };
    return ie(() => r.value, /* @__PURE__ */ Lt(function* () {
      yield Lr(), n.forEach((I) => {
        var {
          name: b,
          setOwnTop: P
        } = I;
        b.value && l.value.push(b.value), P();
      });
    })), ir(/* @__PURE__ */ Lt(function* () {
      yield C(), k();
    })), St(M), xr(() => {
      m = !0, M();
    }), Mn(() => {
      !m || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: tb,
      classes: ob,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: R,
      scrollTo: $,
      anchorClick: O
    };
  }
});
kd.render = lb;
const na = kd;
na.install = function(e) {
  e.component(na.name, na);
};
var sk = na;
function sb(e) {
  return ["small", "normal"].includes(e);
}
function ub(e) {
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
    validator: sb
  },
  variant: {
    type: String,
    default: "standard",
    validator: ub
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
  onClick: H(),
  onClear: H()
}, {
  n: Kl,
  classes: db
} = _("field-decorator"), vb = ["for"];
function fb(e, r) {
  var n = ae("var-icon");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        ref: "controllerEl",
        style: K({
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
        [Y(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          ref: "middleEl",
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      ), (e.hint || e.alwaysCustomPlaceholder) && e.placeholderTransform ? (h(), T(
        "label",
        {
          key: 0,
          class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
          style: K({
            color: e.color,
            transform: e.placeholderTransform,
            maxWidth: e.placeholderMaxWidth
          }),
          for: e.id
        },
        [A(
          "span",
          null,
          re(e.placeholder),
          1
          /* TEXT */
        )],
        14,
        vb
      )) : x("v-if", !0), e.variant === "outlined" ? (h(), T(
        "span",
        {
          key: 1,
          ref: "placeholderTextEl",
          class: c([e.n("placeholder-text"), e.n("$--ellipsis")])
        },
        re(e.placeholder),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (h(), ye(
          n,
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
        )) : x("v-if", !0), Y(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), T(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (h(), T(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: K({
            borderColor: e.color
          })
        },
        [A(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: K({
              width: e.legendWidth
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (h(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
            style: K({
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
var $d = Q({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Oe
  },
  props: Yi,
  setup(e) {
    var r = V(null), n = V(null), a = V(null), t = V(""), o = V(""), l = V(""), i = L(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), s = L(() => e.hint && (!fn(e.value) || e.isFocus)), u = () => {
      var {
        hint: m,
        value: g,
        composing: p
      } = e;
      if (!m && (!fn(g) || p))
        return Kl("--placeholder-hidden");
    }, d = () => {
      var {
        size: m,
        hint: g,
        placeholder: p,
        variant: y
      } = e;
      if (!s.value || !p) {
        var w = mr(r.value), O = mr(n.value), C = O.left - w.left + "px";
        o.value = g ? "translate(" + C + ", calc(var(--field-decorator-" + y + "-" + m + "-placeholder-translate-y) + var(--field-decorator-middle-offset-y))) scale(1)" : "translate(" + C + ", -50%)", l.value = O.width + "px";
        return;
      }
      var k = Na(r.value), M = y === "outlined" ? "-50%" : "0";
      if (o.value = "translate(" + k.paddingLeft + ", " + M + ") scale(0.75)", y === "outlined") {
        var $ = Na(a.value), I = "var(--field-decorator-outlined-" + m + "-placeholder-space)";
        t.value = "calc(" + $.width + " * 0.75 + " + I + " * 2)", l.value = "calc((100% - var(--field-decorator-outlined-" + m + "-padding-left) - var(--field-decorator-outlined-" + m + "-padding-right)) * 1.33)";
      } else
        l.value = "133%";
    }, v = (m) => {
      S(e.onClear, m);
    }, f = (m) => {
      S(e.onClick, m);
    };
    return $t(d), ir(d), Zr(() => window, "resize", d), {
      controllerEl: r,
      middleEl: n,
      placeholderTextEl: a,
      placeholderTransform: o,
      placeholderMaxWidth: l,
      color: i,
      legendWidth: t,
      isFloating: s,
      computePlaceholderState: u,
      n: Kl,
      classes: db,
      isEmpty: fn,
      handleClear: v,
      handleClick: f
    };
  }
});
$d.render = fb;
const Td = $d;
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fi.apply(this, arguments);
}
function cb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var mb = fi({
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
    validator: cb
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
  onFocus: H(),
  onBlur: H(),
  onInput: H(),
  onChange: H(),
  onClear: H(),
  "onUpdate:modelValue": H()
}, Je(Yi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: pb,
  classes: hb
} = _("input"), gb = ["placeholder", "enterkeyhint"], yb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], bb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function wb(e, r) {
  var n = ae("var-field-decorator"), a = ae("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [J(
      n,
      Tt(ao({
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
        "prepend-icon": ve(() => [Y(e.$slots, "prepend-icon")]),
        "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
        default: ve(() => [e.normalizedType === "password" ? (h(), T(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete")),
            placeholder: e.hint ? void 0 : e.placeholder,
            style: K({
              "--input-placeholder-color": e.placeholderColor
            }),
            enterkeyhint: e.enterkeyhint
          },
          null,
          14,
          gb
        )) : x("v-if", !0), e.textarea ? (h(), T(
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
            style: K({
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
            onTouchstart: r[4] || (r[4] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            }),
            onCompositionstart: r[5] || (r[5] = function() {
              return e.handleCompositionStart && e.handleCompositionStart(...arguments);
            }),
            onCompositionend: r[6] || (r[6] = function() {
              return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
            })
          },
          `
      `,
          46,
          yb
        )) : (h(), T(
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
            style: K({
              color: e.errorMessage ? void 0 : e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              "--input-placeholder-color": e.placeholderColor
            }),
            onFocus: r[7] || (r[7] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: r[8] || (r[8] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: r[9] || (r[9] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: r[10] || (r[10] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: r[11] || (r[11] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            }),
            onCompositionstart: r[12] || (r[12] = function() {
              return e.handleCompositionStart && e.handleCompositionStart(...arguments);
            }),
            onCompositionend: r[13] || (r[13] = function() {
              return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
            })
          },
          null,
          46,
          bb
        ))]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ), J(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: r[14] || (r[14] = Tr(() => {
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
var Od = Q({
  name: "VarInput",
  components: {
    VarFormDetails: _e,
    VarFieldDecorator: Td
  },
  props: mb,
  setup(e) {
    var r = V("var-input-" + et().uid), n = V(null), a = V(!1), t = V(!1), o = L(() => e.type === "number" ? "text" : e.type), l = L(() => {
      var {
        maxlength: G,
        modelValue: U
      } = e;
      return G ? fn(U) ? "0 / " + G : String(U).length + "/" + G : "";
    }), i = L(() => e.disabled || e.readonly ? "" : "text"), s = L(() => {
      var {
        hint: G,
        blurColor: U,
        focusColor: E
      } = e;
      if (!G)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? E || "var(--field-decorator-focus-color)" : U || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Pr(), p = (G) => {
      Ne(() => {
        var {
          validateTrigger: U,
          rules: E,
          modelValue: q
        } = e;
        f(U, G, E, q);
      });
    }, y = (G) => {
      a.value = !0, S(e.onFocus, G), p("onFocus");
    }, w = (G) => {
      a.value = !1, S(e.onBlur, G), p("onBlur");
    }, O = (G) => {
      var U = G.target, {
        value: E
      } = U;
      return e.type === "number" && (E = P(E)), B(D(E));
    }, C = () => {
      t.value = !0;
    }, k = (G) => {
      t.value && (t.value = !1, G.target.dispatchEvent(new Event("input")));
    }, M = (G) => {
      if (!t.value) {
        var U = O(G);
        S(e["onUpdate:modelValue"], U), S(e.onInput, U, G), p("onInput");
      }
    }, $ = (G) => {
      var U = O(G);
      S(e.onChange, U, G), p("onChange");
    }, I = () => {
      var {
        disabled: G,
        readonly: U,
        clearable: E,
        onClear: q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || G || U || !E || (S(e["onUpdate:modelValue"], ""), S(q, ""), p("onClear"));
    }, b = (G) => {
      var {
        disabled: U,
        onClick: E
      } = e;
      d != null && d.disabled.value || U || (S(E, G), p("onClick"));
    }, P = (G) => {
      var U = G.indexOf("-"), E = G.indexOf(".");
      return U > -1 && (G = U === 0 ? "-" + G.replace(/-/g, "") : G.replace(/-/g, "")), E > -1 && (G = G.slice(0, E + 1) + G.slice(E).replace(/\./g, "")), G.replace(/[^-0-9.]/g, "");
    }, D = (G) => e.modelModifiers.trim ? G.trim() : G, B = (G) => e.maxlength ? G.slice(0, R(e.maxlength)) : G, j = (G) => {
      var {
        disabled: U,
        readonly: E
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || E || G.stopPropagation();
    };
    function X(G) {
      var {
        disabled: U
      } = e;
      d != null && d.disabled.value || U || G.target === n.value || (F(), G.preventDefault());
    }
    var z = () => {
      S(e["onUpdate:modelValue"], ""), g();
    }, N = () => m(e.rules, e.modelValue), F = () => {
      var G;
      (G = n.value) == null || G.focus();
    }, W = () => {
      n.value.blur();
    }, te = {
      reset: z,
      validate: N,
      resetValidation: g
    };
    return S(u, te), ir(() => {
      e.autofocus && F();
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
      n: pb,
      classes: hb,
      isEmpty: fn,
      handleFocus: y,
      handleBlur: w,
      handleInput: M,
      handleChange: $,
      handleClear: I,
      handleClick: b,
      handleTouchstart: j,
      handleCompositionStart: C,
      handleCompositionEnd: k,
      handleMousedown: X,
      validate: N,
      resetValidation: g,
      reset: z,
      focus: F,
      blur: W
    };
  }
});
Od.render = wb;
const Sn = Od;
Sn.install = function(e) {
  e.component(Sn.name, Sn);
};
var uk = Sn;
function Cb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Sb(e) {
  return ["always", "hover", "none"].includes(e);
}
var kb = {
  type: {
    type: String,
    default: "default",
    validator: Cb
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
    validator: Sb
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
  n: $b,
  classes: Tb
} = _("link");
function Ob(e, r) {
  return h(), ye(
    nt(e.tag),
    Ee(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [Y(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var Pd = Q({
  name: "VarLink",
  props: kb,
  setup(e) {
    var r = L(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), n = L(() => {
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
      o || S(l, t);
    };
    return {
      n: $b,
      classes: Tb,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: ge
    };
  }
});
Pd.render = Ob;
const aa = Pd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var dk = aa, Pb = {
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
}, Vd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Vb() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(Vd);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Md = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Mb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = lr(Vd);
  return r || Or("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function Bb() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = sr(Md);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function Eb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = lr(Md);
  return {
    index: n,
    tabItem: e,
    bindTabItem: r
  };
}
function Zl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ib(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: Nb,
  classes: Db
} = _("list");
function Ab(e, r) {
  var n = ae("var-loading"), a = Ie("ripple");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [Y(e.$slots, "default"), e.loading ? Y(e.$slots, "loading", {
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
        re(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), J(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => [ke((h(), T(
      "div",
      {
        class: c(e.n("error")),
        onClick: r[0] || (r[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [Ce(
        re(e.dt(e.errorText, e.pack.listErrorText)),
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
var Bd = Q({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: Nr
  },
  props: Pb,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = Eb(), a = V(null), t = V(null), o, l = () => {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = mr(o), {
        bottom: v
      } = mr(t.value);
      return Math.floor(v) - je(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Ib(function* () {
        yield Ne(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return S(n, {}), r && ie(() => r.current.value, u), ie(() => [e.loading, e.error, e.finished], u), ir(() => {
      o = Tn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), xr(s), rt(s), {
      pack: Ze,
      listEl: a,
      detectorEl: t,
      dt: to,
      isNumber: or,
      load: l,
      check: u,
      n: Nb,
      classes: Db
    };
  }
});
Bd.render = Ab;
const ta = Bd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var vk = ta, zb = {
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
  classes: Lb,
  n: Jl
} = _("loading-bar");
const Rb = Q({
  name: "VarLoadingBar",
  props: zb,
  setup(e) {
    return () => J("div", {
      class: Lb(Jl(), [e.error, Jl("--error")]),
      style: {
        zIndex: yr.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ge(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ge(e.top)
      }
    }, null);
  }
});
var Ed, Id, wo, Nd, Ql, Dd = {}, Ub = {
  value: 0,
  opacity: 0,
  error: !1
}, Qe = Ae(Ub), Fb = (e) => {
  Object.assign(Qe, e);
}, Hb = (e) => {
  Object.assign(Qe, e), Dd = e;
}, Yb = () => {
  Object.keys(Dd).forEach((e) => {
    Qe[e] !== void 0 && (Qe[e] = void 0);
  });
}, Ad = () => {
  Ql || (Ql = !0, tt(Rb, Qe));
}, ji = () => {
  Ed = window.setTimeout(() => {
    if (!(Qe.value >= 95)) {
      var e = Math.random();
      Qe.value < 70 && (e = Math.round(5 * Math.random())), Qe.value += e, ji();
    }
  }, 200);
}, Wi = () => {
  window.clearTimeout(Id), window.clearTimeout(Ed), window.clearTimeout(wo), window.clearTimeout(Nd);
}, jb = () => {
  Wi(), Qe.error = !1, Qe.value = 0, Ad(), wo = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), ji();
}, zd = () => {
  Wi(), Qe.value = 100, wo = window.setTimeout(() => {
    Qe.opacity = 0, Id = window.setTimeout(() => {
      Qe.error = !1;
    }, 250);
  }, 300);
}, Wb = () => {
  Wi(), Qe.error = !0, Qe.value === 100 && (Qe.value = 0), Ad(), wo = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), ji(), Nd = window.setTimeout(zd, 300);
}, Ld = {
  start: jb,
  finish: zd,
  error: Wb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Fb,
  setDefaultOptions: Hb,
  resetDefaultOptions: Yb
}, fk = Ld;
const ci = Ld;
function Gb(e) {
  return ["click", "hover"].includes(e);
}
function qb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Xb = {
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
    validator: Gb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: qb
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
  n: Kb,
  classes: Zb
} = _("menu");
function Jb(e, r) {
  return h(), T(
    "div",
    {
      ref: "host",
      class: c(e.n()),
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
    [Y(e.$slots, "default"), (h(), ye(
      La,
      {
        to: e.teleport
      },
      [J(
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
              style: K({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
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
          ), [[$n, e.show]])]),
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
var Rd = Q({
  name: "VarMenu",
  props: Xb,
  setup(e) {
    var {
      popover: r,
      host: n,
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
      resize: g
    } = dd(e);
    return {
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: hr,
      toSizeUnit: ge,
      n: Kb,
      classes: Zb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: g,
      open: f,
      close: m
    };
  }
});
Rd.render = Jb;
const Kr = Rd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var ck = Kr, Ud = Symbol("SELECT_BIND_OPTION_KEY");
function Qb() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = sr(Ud);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function _b() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = lr(Ud);
  return n || Or("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var xb = {
  label: {},
  value: {}
}, {
  n: e0,
  classes: r0
} = _("option");
function n0(e, r) {
  var n = ae("var-checkbox"), a = Ie("ripple");
  return ke((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: K({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: r[2] || (r[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (h(), ye(
      n,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": r[0] || (r[0] = (t) => e.optionSelected = t),
        onClick: r[1] || (r[1] = Tr(() => {
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
      [Y(e.$slots, "default", {}, () => [Ce(
        re(e.label),
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
var Fd = Q({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: hn
  },
  props: xb,
  setup(e) {
    var r = V(!1), n = L(() => r.value), a = L(() => e.label), t = L(() => e.value), {
      select: o,
      bindSelect: l
    } = _b(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      r.value = !r.value, u(g);
    }, f = () => u(g), m = (p) => {
      r.value = p;
    }, g = {
      label: a,
      value: t,
      selected: n,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(g), {
      n: e0,
      classes: r0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Fd.render = n0;
const oa = Fd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var mk = oa, a0 = {
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
function t0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: _l
} = _("overlay");
const ia = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: a0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Vt(() => e.show, 1), {
      disabled: o
    } = io(), l = () => {
      S(e.onClick), S(e["onUpdate:show"], !1);
    };
    lo(() => e.show, () => e.lockScroll);
    var i = () => J("div", Ee({
      class: _l(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [S(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return J(Le, {
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
        return J(La, {
          to: u,
          disabled: o.value
        }, t0(d = s()) ? d : {
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
var pk = ia, o0 = {
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
  n: i0,
  classes: l0
} = _("pagination"), s0 = ["item-mode", "onClick"];
function u0(e, r) {
  var n = ae("var-icon"), a = ae("var-input"), t = ae("var-cell"), o = ae("var-menu"), l = Ie("ripple");
  return h(), T(
    "ul",
    {
      class: c(e.n())
    },
    [ke((h(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [Y(e.$slots, "prev", {}, () => [J(n, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), T(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        a,
        {
          "var-pagination-cover": "",
          hint: !1,
          disabled: e.disabled,
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": r[1] || (r[1] = (i) => e.simpleCurrentValue = i),
          onBlur: r[2] || (r[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: r[3] || (r[3] = Zi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), A("span", null, [Ce(
        " / " + re(e.pageCount) + " ",
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
    )) : (h(!0), T(
      Ve,
      {
        key: 1
      },
      Ue(e.pageList, (i, s) => ke((h(), T(
        "li",
        {
          key: s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [Ce(
          re(i),
          1
          /* TEXT */
        )],
        10,
        s0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((h(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [Y(e.$slots, "next", {}, () => [J(n, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), T(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        o,
        {
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": r[6] || (r[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), T(
            Ve,
            null,
            Ue(e.sizeOption, (i, s) => ke((h(), ye(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [Ce(
                  re(i) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
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
              onClick: r[5] || (r[5] = Tr(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [A(
              "span",
              null,
              re(e.size) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
              1
              /* TEXT */
            ), J(
              n,
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (h(), T(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [Ce(
        re(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), J(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: r[9] || (r[9] = Zi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (h(), T(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      re(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Hd = Q({
  name: "VarPagination",
  components: {
    VarMenu: Kr,
    VarIcon: Oe,
    VarCell: pn,
    VarInput: Sn
  },
  directives: {
    Ripple: We
  },
  props: o0,
  setup(e) {
    var r = V(!1), n = V(""), a = V("1"), t = V(!1), o = V(!1), l = V(R(e.current) || 1), i = V(R(e.size) || 10), s = V([]), u = L(() => Math.ceil(e.maxPagerCount / 2)), d = L(() => Math.ceil(R(e.total) / R(i.value))), v = L(() => {
      var k = i.value * (l.value - 1) + 1, M = Math.min(i.value * l.value, R(e.total));
      return [k, M];
    }), f = L(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = (k, M) => or(k) ? !1 : M === 1 ? t.value : o.value, g = (k, M) => or(k) ? "basic" : M === 1 ? "head" : "tail", p = (k, M) => {
      if (!(k === l.value || e.disabled)) {
        if (k === "...") {
          l.value = M === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (k === "prev") {
          l.value = O(l.value - 1);
          return;
        }
        if (k === "next") {
          l.value = O(l.value + 1);
          return;
        }
        or(k) && (l.value = k);
      }
    }, y = () => {
      e.disabled || (r.value = !0);
    }, w = (k) => {
      i.value = k, r.value = !1;
      var M = O(l.value);
      a.value = String(M), l.value = M;
    }, O = (k) => k > d.value ? d.value : k < 1 ? 1 : k, C = (k, M, $) => {
      $.target.blur();
      var I = O(R(M));
      a.value = String(I), l.value = I, k === "quick" && (n.value = "");
    };
    return ie([() => e.current, () => e.size], (k) => {
      var [M, $] = k;
      l.value = R(M) || 1, i.value = R($ || 10);
    }), ie([l, i, d], (k, M) => {
      var [$, I, b] = k, [P, D] = M, B = [], {
        maxPagerCount: j,
        total: X,
        onChange: z
      } = e, N = Math.ceil(R(X) / R(D)), F = b - (j - u.value) - 1;
      if (a.value = "" + $, b - 2 > j) {
        if (P === void 0 || b !== N)
          for (var W = 2; W < j + 2; W++)
            B.push(W);
        if ($ <= j && $ < F) {
          B = [];
          for (var te = 1; te < j + 1; te++)
            B.push(te + 1);
          t.value = !0, o.value = !1;
        }
        if ($ > j && $ < F) {
          B = [];
          for (var G = 1; G < j + 1; G++)
            B.push($ + G - u.value);
          t.value = $ === 2 && j === 1, o.value = !1;
        }
        if ($ >= F) {
          B = [];
          for (var U = 1; U < j + 1; U++)
            B.push(b - (j - U) - 1);
          t.value = !1, o.value = !0;
        }
        B = [1, "...", ...B, "...", b];
      } else
        for (var E = 1; E <= b; E++)
          B.push(E);
      s.value = B, P != null && b > 0 && S(z, $, I), S(e["onUpdate:current"], $), S(e["onUpdate:size"], I);
    }, {
      immediate: !0
    }), {
      n: i0,
      classes: l0,
      pack: Ze,
      current: l,
      menuVisible: r,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: n,
      simpleCurrentValue: a,
      totalText: f,
      getMode: g,
      isHideEllipsis: m,
      clickItem: p,
      showMenu: y,
      clickSize: w,
      setPage: C,
      toNumber: R,
      formatElevation: hr
    };
  }
});
Hd.render = u0;
const la = Hd;
la.install = function(e) {
  e.component(la.name, la);
};
var hk = la, d0 = {
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
  n: v0,
  classes: f0
} = _("paper");
function c0(e, r) {
  var n = Ie("ripple");
  return ke((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: K({
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
var Yd = Q({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: d0,
  setup(e) {
    var r = (n) => {
      S(e.onClick, n);
    };
    return {
      n: v0,
      classes: f0,
      formatElevation: hr,
      toSizeUnit: ge,
      handleClick: r
    };
  }
});
Yd.render = c0;
const sa = Yd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var gk = sa;
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
var m0 = mi({
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
}, Je(Pt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: p0,
  classes: h0
} = _("picker"), xl = 300, g0 = 15, es = 200, y0 = 1e3, rs = 0, b0 = ["onTouchstart", "onTouchmove", "onTouchend"], w0 = ["onTransitionend"], C0 = ["onClick"];
function S0(e, r) {
  var n = ae("var-button");
  return h(), ye(
    nt(e.dynamic ? e.n("$-popup") : e.Transition),
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
        [e.toolbar ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [Y(e.$slots, "cancel", {}, () => [J(
            n,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [Ce(
                re(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), Y(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: c(e.n("title"))
            },
            re(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), Y(e.$slots, "confirm", {}, () => [J(
            n,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [Ce(
                re(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
            style: K({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), T(
            Ve,
            null,
            Ue(e.scrollColumns, (a) => (h(), T(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.setScrollEl(t, a),
                  style: K({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), T(
                  Ve,
                  null,
                  Ue(a.column.texts, (t, o) => (h(), T(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: K({
                        height: e.optionHeight + "px"
                      }),
                      key: t,
                      onClick: (l) => e.handleClick(a, o)
                    },
                    [A(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      re(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    14,
                    C0
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                w0
              )],
              42,
              b0
            ))),
            128
            /* KEYED_FRAGMENT */
          )), A(
            "div",
            {
              class: c(e.n("picked")),
              style: K({
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
              style: K({
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
var jd = Q({
  name: "VarPicker",
  components: {
    VarButton: er,
    VarPopup: Sr
  },
  inheritAttrs: !1,
  props: m0,
  setup(e) {
    var r = V([]), n = L(() => je(e.optionHeight)), a = L(() => je(e.optionCount)), t = L(() => a.value * n.value / 2 - n.value / 2), o = L(() => a.value * n.value), l = [], i = !1, s = (z, N) => {
      N.scrollEl = z;
    }, u = (z) => {
      S(e["onUpdate:show"], z);
    }, d = (z) => {
      var N = n.value + t.value, F = t.value - z.column.texts.length * n.value;
      z.translate >= N && (z.translate = N), z.translate <= F && (z.translate = F);
    }, v = (z, N) => {
      var {
        length: F
      } = z.column.texts;
      return N = N >= F ? F - 1 : N, N = N <= 0 ? 0 : N, N;
    }, f = (z, N) => {
      var F = Math.round((t.value - N) / n.value);
      return v(z, F);
    }, m = (z) => (z.translate = t.value - z.index * n.value, z.translate), g = () => {
      var z = r.value.map((F) => F.column.texts[F.index]), N = r.value.map((F) => F.index);
      return {
        texts: z,
        indexes: N
      };
    }, p = function(z, N) {
      N === void 0 && (N = 0), m(z), z.duration = N;
    }, y = (z, N, F) => {
      z.translate += Math.abs(N / F) / 3e-3 * (N < 0 ? -1 : 1);
    }, w = (z, N) => {
      i || (z.index = N, z.scrolling = !0, p(z, es));
    }, O = (z, N) => {
      N.touching = !0, N.scrolling = !1, N.duration = 0, N.translate = So(N.scrollEl);
    }, C = (z, N) => {
      if (N.touching) {
        i = !0;
        var {
          clientY: F
        } = z.touches[0], W = N.prevY !== void 0 ? F - N.prevY : 0;
        N.prevY = F, N.translate += W, d(N);
        var te = performance.now();
        te - N.momentumTime > xl && (N.momentumTime = te, N.momentumPrevY = N.translate);
      }
    }, k = (z, N) => {
      N.touching = !1, N.prevY = void 0;
      var F = N.translate - N.momentumPrevY, W = performance.now() - N.momentumTime, te = Math.abs(F) >= g0 && W <= xl;
      te && y(N, F, W), N.index = f(N, N.translate);
      var G = N.translate, U = m(N);
      N.scrolling = U !== G, p(N, te ? y0 : es), N.scrolling || D(N), br(() => {
        i = !1;
      });
    }, M = (z) => {
      z.scrolling = !1, D(z);
    }, $ = (z) => z.map((N, F) => {
      var W, te = Te(N) ? {
        texts: N
      } : N, G = {
        id: rs++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (W = te.initialIndex) != null ? W : 0,
        columnIndex: F,
        duration: 0,
        momentumTime: 0,
        column: te,
        scrollEl: null,
        scrolling: !1
      };
      return p(G), G;
    }), I = (z) => {
      var N = [];
      return b(N, z, 0, !0), N;
    }, b = function(z, N, F, W) {
      if (W === void 0 && (W = !1), Te(N) && N.length) {
        var te, G = W && (te = e.cascadeInitialIndexes[z.length]) != null ? te : 0, U = {
          id: rs++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: G,
          columnIndex: F,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: N.map((E) => E[e.textKey])
          },
          columns: N,
          scrollEl: null,
          scrolling: !1
        };
        z.push(U), p(U), b(z, U.columns[U.index].children, F + 1, W);
      }
    }, P = (z) => {
      r.value.splice(r.value.indexOf(z) + 1), b(r.value, z.columns[z.index].children, z.columnIndex + 1);
    }, D = (z) => {
      var {
        cascade: N,
        onChange: F
      } = e;
      N && P(z);
      var W = r.value.some((E) => E.scrolling);
      if (!W) {
        var {
          texts: te,
          indexes: G
        } = g(), U = G.every((E, q) => E === l[q]);
        U || (l = [...G], S(F, te, G));
      }
    }, B = () => {
      if (e.cascade) {
        var z = r.value.find((N) => N.scrolling);
        z && (z.index = f(z, So(z.scrollEl)), z.scrolling = !1, p(z), P(z));
      } else
        r.value.forEach((N) => {
          N.index = f(N, So(N.scrollEl)), p(N);
        });
    }, j = () => {
      B();
      var {
        texts: z,
        indexes: N
      } = g();
      l = [...N], S(e.onConfirm, z, N);
    }, X = () => {
      B();
      var {
        texts: z,
        indexes: N
      } = g();
      l = [...N], S(e.onCancel, z, N);
    };
    return ie(() => e.columns, (z) => {
      r.value = e.cascade ? I(Ji(z)) : $(Ji(z));
      var {
        indexes: N
      } = g();
      l = [...N];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: p0,
      classes: h0,
      pack: Ze,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Le,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: O,
      handleTouchmove: C,
      handleTouchend: k,
      handleTransitionend: M,
      confirm: j,
      cancel: X,
      dt: to,
      handleClick: w
    };
  }
});
jd.render = S0;
const kn = jd;
var vr;
function za(e) {
  return new Promise((r) => {
    za.close();
    var n = Te(e) ? {
      columns: e
    } : e, a = Ae(n);
    a.dynamic = !0, a.teleport = "body", vr = a;
    var {
      unmountInstance: t
    } = tt(kn, a, {
      onConfirm: (o, l) => {
        S(a.onConfirm, o, l), r({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, vr === a && (vr = null);
      },
      onCancel: (o, l) => {
        S(a.onCancel, o, l), r({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, vr === a && (vr = null);
      },
      onClose: () => {
        S(a.onClose), r({
          state: "close"
        }), vr === a && (vr = null);
      },
      onClosed: () => {
        S(a.onClosed), t(), vr === a && (vr = null);
      },
      onRouteChange: () => {
        t(), vr === a && (vr = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
kn.install = function(e) {
  e.component(kn.name, kn);
};
za.Component = kn;
za.install = function(e) {
  e.component(kn.name, kn);
};
za.close = function() {
  if (vr != null) {
    var e = vr;
    vr = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
var yk = kn;
function k0(e) {
  return ["linear", "circle"].includes(e);
}
var $0 = {
  mode: {
    type: String,
    default: "linear",
    validator: k0
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
  n: T0,
  classes: O0
} = _("progress"), P0 = ["viewBox"], V0 = ["cx", "cy", "r", "stroke-width"], M0 = ["cx", "cy", "r", "stroke-width"];
function B0(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [A(
        "div",
        {
          class: c(e.n("linear-block")),
          style: K({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: K({
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
            style: K({
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
      ), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Ce(
          re(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), T(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: K({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), T(
          "circle",
          {
            key: 0,
            class: c(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          V0
        )) : x("v-if", !0), A(
          "circle",
          {
            class: c(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          M0
        )],
        14,
        P0
      )), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Ce(
          re(e.circleProps.roundValue),
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
var Wd = Q({
  name: "VarProgress",
  props: $0,
  setup(e) {
    var r = L(() => {
      var a = R(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), n = L(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + je(a) + " " + je(a), i = R(o) > 100 ? 100 : Math.round(R(o)), s = (je(a) - je(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: T0,
      classes: O0,
      toSizeUnit: ge,
      multiplySizeUnit: ar,
      linearProps: r,
      circleProps: n
    };
  }
});
Wd.render = B0;
const ua = Wd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var bk = ua, E0 = {
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
function ns(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function as(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: ts,
  classes: I0
} = _("pull-refresh"), os = 150;
function N0(e, r) {
  var n = ae("var-icon");
  return h(), T(
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
    [A(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: K(e.controlStyle)
      },
      [J(
        n,
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
    ), Y(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Gd = Q({
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: E0,
  setup(e) {
    var r = V(0), n = V(null), a = V(null), t = V(0), o = V("-125%"), l = V("arrow-down"), i = V("default"), s = V(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = as(function* (P) {
        if (l.value !== P)
          return l.value = P, new Promise((D) => {
            window.setTimeout(D, os);
          });
      });
      return function(D) {
        return b.apply(this, arguments);
      };
    }(), g = L(() => i.value !== "loading" && i.value !== "success" && !e.disabled), p = L(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), y = L(() => Math.abs(2 * r.value)), w = L(() => i.value === "success"), O = (b) => {
      var P = "classList" in u ? u : document.body;
      P.classList[b](ts() + "--lock");
    }, C = (b) => {
      if (r.value === 0) {
        var {
          width: P
        } = a.value.getBoundingClientRect();
        r.value = -(P + P * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = Tn(b.target);
    }, k = (b) => {
      if (g.value && !(d !== u && mt(d) > 0)) {
        var P = mt(u);
        if (!(P > 0)) {
          var D = P === 0, B = b.touches[0];
          f = B.clientY - v, D && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), D && o.value > r.value && O("add");
          var j = (b.touches[0].clientY - t.value) / 2 + r.value;
          o.value = j >= y.value ? y.value : j, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, M = /* @__PURE__ */ function() {
      var b = as(function* () {
        g.value && (s.value = !0, o.value >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, S(e["onUpdate:modelValue"], !0), Ne(() => {
          S(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, R(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), $ = () => {
      u = e.target ? bs(e.target, "PullRefresh") : Tn(n.value);
    }, I = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    };
    return ie(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, I();
      }, R(e.successDuration)));
    }), ir($), Zr(n, "touchmove", k), {
      n: ts,
      classes: I0,
      ICON_TRANSITION: os,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: C,
      touchMove: k,
      touchEnd: M,
      iconName: l,
      controlStyle: p,
      isSuccess: w
    };
  }
});
Gd.render = N0;
const da = Gd;
da.install = function(e) {
  e.component(da.name, da);
};
var wk = da, D0 = {
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
}, qd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function A0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(qd);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function z0() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = lr(qd);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: L0,
  classes: R0
} = _("radio");
function U0(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      Ee({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((h(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
          n,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : Y(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [J(
          n,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]), J(
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
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), J(
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
var Xd = Q({
  name: "VarRadio",
  directives: {
    Ripple: We,
    Hover: Rr
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: cr
  },
  inheritAttrs: !1,
  props: D0,
  setup(e) {
    var r = V(!1), n = L(() => r.value === e.checkedValue), a = V(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = z0(), {
      hovering: l,
      handleHovering: i
    } = On(), {
      form: s,
      bindForm: u
    } = Vr(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Pr(), g = ($) => {
      Ne(() => {
        var {
          validateTrigger: I,
          rules: b,
          modelValue: P
        } = e;
        v(I, $, b, P);
      });
    }, p = ($) => {
      var {
        checkedValue: I,
        onChange: b
      } = e;
      t && r.value === I || (r.value = $, S(e["onUpdate:modelValue"], r.value), S(b, r.value), t == null || t.onToggle(I), g("onChange"));
    }, y = ($) => {
      var {
        disabled: I,
        readonly: b,
        uncheckedValue: P,
        checkedValue: D,
        onClick: B
      } = e;
      s != null && s.disabled.value || I || (S(B, $), !(s != null && s.readonly.value || b) && (a.value = !0, p(n.value ? P : D)));
    }, w = ($) => {
      var {
        checkedValue: I,
        uncheckedValue: b
      } = e;
      r.value = $ === I ? I : b;
    }, O = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, C = () => f(e.rules, e.modelValue), k = ($) => {
      var {
        uncheckedValue: I,
        checkedValue: b
      } = e, P = ![I, b].includes($);
      P && ($ = n.value ? I : b), p($);
    };
    ie(() => e.modelValue, ($) => {
      r.value = $;
    }, {
      immediate: !0
    });
    var M = {
      sync: w,
      validate: C,
      resetValidation: m,
      reset: O
    };
    return S(o, M), S(u, M), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: L0,
      classes: R0,
      handleClick: y,
      toggle: k,
      reset: O,
      validate: C,
      resetValidation: m
    };
  }
});
Xd.render = U0;
const va = Xd;
va.install = function(e) {
  e.component(va.name, va);
};
var Ck = va;
function F0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var H0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: F0
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
  n: Y0,
  classes: j0
} = _("radio-group");
function W0(e, r) {
  var n = ae("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
      n,
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
  name: "VarRadioGroup",
  components: {
    VarFormDetails: _e
  },
  props: H0,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = A0(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Pr(), u = L(() => o.value), d = (y) => {
      Ne(() => {
        var {
          validateTrigger: w,
          rules: O,
          modelValue: C
        } = e;
        l(w, y, O, C);
      });
    }, v = () => n.forEach((y) => {
      var {
        sync: w
      } = y;
      return w(e.modelValue);
    }), f = (y) => {
      S(e["onUpdate:modelValue"], y), S(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      S(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => r.value, v);
    var p = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return S(t, p), a(p), {
      errorMessage: o,
      n: Y0,
      classes: j0,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
Kd.render = W0;
const fa = Kd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var Sk = fa, G0 = {
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
  n: it
} = _("rate"), q0 = ["onClick"];
function X0(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), T(
        Ve,
        null,
        Ue(e.toNumber(e.count), (i) => ke((h(), T(
          "div",
          {
            key: i,
            style: K(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [J(
            n,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: K({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          ), J(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          q0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), J(
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
var Zd = Q({
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: cr
  },
  directives: {
    Ripple: We,
    Hover: Rr
  },
  props: G0,
  setup(e) {
    var {
      form: r,
      bindForm: n
    } = Vr(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Pr(), {
      hovering: i
    } = On(), s = V(-1), u = (C) => {
      var {
        count: k,
        gap: M
      } = e;
      return {
        color: v(C).color,
        marginRight: C !== R(k) ? ge(M) : 0
      };
    }, d = (C) => {
      var {
        name: k,
        color: M
      } = v(C);
      return {
        [it("content")]: !0,
        [it("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [it("--error")]: a.value,
        [it("--primary")]: k !== e.emptyIcon && !M
      };
    }, v = (C) => {
      var {
        modelValue: k,
        disabled: M,
        disabledColor: $,
        color: I,
        half: b,
        emptyColor: P,
        icon: D,
        halfIcon: B,
        emptyIcon: j
      } = e, X = I;
      return (M || r != null && r.disabled.value) && (X = $), C <= R(k) ? {
        color: X,
        name: D
      } : b && C <= R(k) + 0.5 ? {
        color: X,
        name: B
      } : {
        color: M || r != null && r.disabled.value ? $ : P,
        name: j
      };
    }, f = (C, k) => {
      if (e.half) {
        var {
          offsetWidth: M
        } = k.target;
        k.offsetX <= Math.floor(M / 2) && (C -= 0.5);
      }
      S(e["onUpdate:modelValue"], C);
    }, m = () => o(e.rules, R(e.modelValue)), g = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), p = (C, k) => {
      var {
        readonly: M,
        disabled: $,
        onChange: I
      } = e;
      M || $ || r != null && r.disabled.value || r != null && r.readonly.value || (f(C, k), S(I, C), g());
    }, y = (C) => (k) => {
      s.value = C, i.value = k;
    }, w = () => {
      S(e["onUpdate:modelValue"], 0), l();
    }, O = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return S(n, O), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: p,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: y,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: ge,
      toNumber: R,
      n: it
    };
  }
});
Zd.render = X0;
const ca = Zd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var kk = ca;
function K0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Z0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: K0
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
}, J0 = (e) => (Ra(""), e = e(), Ua(), e), Q0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, _0 = /* @__PURE__ */ J0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), x0 = [_0];
function e1(e, r) {
  return h(), T("svg", Q0, x0);
}
var Jd = Q({});
Jd.render = e1;
const r1 = Jd;
var n1 = (e) => (Ra(""), e = e(), Ua(), e), a1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, t1 = /* @__PURE__ */ n1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), o1 = [t1];
function i1(e, r) {
  return h(), T("svg", a1, o1);
}
var Qd = Q({});
Qd.render = i1;
const l1 = Qd;
var s1 = (e) => (Ra(""), e = e(), Ua(), e), u1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, d1 = /* @__PURE__ */ s1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), v1 = [d1];
function f1(e, r) {
  return h(), T("svg", u1, v1);
}
var _d = Q({});
_d.render = f1;
const c1 = _d;
var {
  n: m1,
  classes: p1
} = _("result");
function h1(e, r) {
  return h(), T(
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
        style: K({
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
        style: K({
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
        style: K({
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
        style: K({
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
var xd = Q({
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
      n: m1,
      classes: p1,
      toNumber: R
    };
  }
});
xd.render = h1;
const g1 = xd;
var y1 = (e) => (Ra(""), e = e(), Ua(), e), b1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, w1 = /* @__PURE__ */ y1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), C1 = [w1];
function S1(e, r) {
  return h(), T("svg", b1, C1);
}
var ev = Q({});
ev.render = S1;
const k1 = ev;
var $1 = (e) => (Ra(""), e = e(), Ua(), e), T1 = {
  viewBox: "-4 -4 32 32"
}, O1 = /* @__PURE__ */ $1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), P1 = [O1];
function V1(e, r) {
  return h(), T("svg", T1, P1);
}
var rv = Q({});
rv.render = V1;
const M1 = rv;
var {
  n: B1,
  classes: E1
} = _("result");
function I1(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "image", {}, () => [e.type ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: K({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), ye(
          nt(e.type),
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
    )) : x("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (h(), T(
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
var nv = Q({
  name: "VarResult",
  components: {
    Info: r1,
    Success: g1,
    Warning: c1,
    Error: l1,
    Question: k1,
    Empty: M1
  },
  props: Z0,
  setup(e) {
    var r = L(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = L(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: B1,
      classes: E1,
      toNumber: R,
      toPxNum: je,
      toSizeUnit: ge,
      circleSize: r,
      borderSize: n
    };
  }
});
nv.render = I1;
const ma = nv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var $k = ma;
function N1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function D1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var A1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: N1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: D1
  },
  onClick: H()
}, {
  n: z1,
  classes: L1
} = _("row");
function R1(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: K({
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
var av = Q({
  name: "VarRow",
  props: A1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = Zm(), t = L(() => {
      var s = je(e.gutter);
      return s / 2;
    }), o = () => {
      r.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      S(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), n(i), {
      n: z1,
      classes: L1,
      average: t,
      handleClick: l,
      padStartFlex: qt
    };
  }
});
av.render = R1;
const pa = av;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Tk = pa;
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
function U1(e) {
  return ["left", "right", "center"].includes(e);
}
var F1 = pi({
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
    validator: U1
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
  onClose: H(),
  onChange: H(),
  onClear: H(),
  "onUpdate:modelValue": H()
}, Je(Yi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: H1,
  classes: Y1
} = _("select"), j1 = {
  key: 1
};
function W1(e, r) {
  var n = ae("var-chip"), a = ae("var-icon"), t = ae("var-field-decorator"), o = ae("var-menu"), l = ae("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.n()),
      onClick: r[3] || (r[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [J(
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
        "onUpdate:show": r[1] || (r[1] = (i) => e.isFocus = i),
        onClose: e.handleBlur
      },
      {
        menu: ve(() => [A(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ve(() => [J(
          t,
          Tt(ao({
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
            "prepend-icon": ve(() => [Y(e.$slots, "prepend-icon")]),
            "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
            default: ve(() => [A(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : Y(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (h(), T(
                  Ve,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), T(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(h(!0), T(
                      Ve,
                      null,
                      Ue(e.labels, (i) => (h(), ye(
                        n,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: r[0] || (r[0] = Tr(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [Ce(
                            re(i),
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
                  )) : (h(), T(
                    "div",
                    {
                      key: 1,
                      class: c(e.n("values"))
                    },
                    re(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  64
                  /* STABLE_FRAGMENT */
                )) : (h(), T(
                  "span",
                  j1,
                  re(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), Y(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [J(
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
    ), J(
      l,
      {
        "error-message": e.errorMessage,
        onClick: r[2] || (r[2] = Tr(() => {
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
var tv = Q({
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: Kr,
    VarChip: gn,
    VarFieldDecorator: Td,
    VarFormDetails: _e
  },
  props: F1,
  setup(e) {
    var r = V(!1), n = L(() => e.multiple), a = L(() => e.focusColor), t = V(""), o = V([]), l = L(() => fn(e.modelValue)), i = L(() => e.disabled || e.readonly ? "" : "pointer"), s = V(0), {
      bindForm: u,
      form: d
    } = Vr(), {
      length: v,
      options: f,
      bindOptions: m
    } = Qb(), {
      errorMessage: g,
      validateWithTrigger: p,
      validate: y,
      // expose
      resetValidation: w
    } = Pr(), O = V(null), C = L(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), k = () => {
      var {
        multiple: U,
        modelValue: E
      } = e;
      if (U) {
        var q = E;
        o.value = q.map(I);
      }
      !U && !fn(E) && (t.value = I(E)), !U && fn(E) && (t.value = "");
    }, M = (U) => {
      Ne(() => {
        var {
          validateTrigger: E,
          rules: q,
          modelValue: ee
        } = e;
        p(E, U, q, ee);
      });
    }, $ = (U) => {
      var {
        value: E,
        label: q
      } = U;
      return E.value != null ? E.value : q.value;
    }, I = (U) => {
      var E, q, ee = f.find((se) => {
        var {
          value: de
        } = se;
        return de.value === U;
      });
      return ee || (ee = f.find((se) => {
        var {
          label: de
        } = se;
        return de.value === U;
      })), (E = (q = ee) == null ? void 0 : q.label.value) != null ? E : "";
    }, b = () => {
      var {
        disabled: U,
        readonly: E,
        onFocus: q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || E || (s.value = je(e.offsetY), r.value = !0, S(q), M("onFocus"));
    }, P = () => {
      var {
        disabled: U,
        readonly: E,
        onBlur: q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || E || (S(q), M("onBlur"));
    }, D = (U) => {
      var {
        disabled: E,
        readonly: q,
        multiple: ee,
        onChange: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || q)) {
        var de = ee ? f.filter((we) => {
          var {
            selected: Pe
          } = we;
          return Pe.value;
        }).map($) : $(U);
        S(e["onUpdate:modelValue"], de), S(se, de), M("onChange"), !ee && (r.value = !1);
      }
    }, B = () => {
      var {
        disabled: U,
        readonly: E,
        multiple: q,
        clearable: ee,
        onClear: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || E || !ee)) {
        var de = q ? [] : void 0;
        S(e["onUpdate:modelValue"], de), S(se, de), M("onClear");
      }
    }, j = (U) => {
      var {
        disabled: E,
        onClick: q
      } = e;
      d != null && d.disabled.value || E || (S(q, U), M("onClick"));
    }, X = (U) => {
      var {
        disabled: E,
        readonly: q,
        modelValue: ee,
        onClose: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || q)) {
        var de = ee, we = f.find((ur) => {
          var {
            label: ne
          } = ur;
          return ne.value === U;
        }), Pe = de.filter((ur) => {
          var ne;
          return ur !== ((ne = we.value.value) != null ? ne : we.label.value);
        });
        S(e["onUpdate:modelValue"], Pe), S(se, Pe), M("onClose");
      }
    }, z = () => {
      var {
        multiple: U,
        modelValue: E
      } = e;
      if (U) {
        var q = E;
        f.forEach((ee) => ee.sync(q.includes($(ee))));
      } else
        f.forEach((ee) => ee.sync(E === $(ee)));
      k();
    }, N = () => {
      s.value = je(e.offsetY), r.value = !0;
    }, F = () => {
      r.value = !1;
    }, W = () => y(e.rules, e.modelValue), te = () => {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: U,
        modelValue: E
      } = e;
      U && !Te(E) && Or("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, z, {
      deep: !0
    }), ie(() => v.value, z);
    var G = {
      multiple: n,
      focusColor: a,
      computeLabel: k,
      onSelect: D,
      reset: te,
      validate: W,
      resetValidation: w
    };
    return m(G), S(u, G), {
      offsetY: s,
      isFocus: r,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: O,
      placement: C,
      cursor: i,
      n: H1,
      classes: Y1,
      handleFocus: b,
      handleBlur: P,
      handleClear: B,
      handleClick: j,
      handleClose: X,
      reset: te,
      validate: W,
      resetValidation: w,
      focus: N,
      blur: F
    };
  }
});
tv.render = W1;
const ha = tv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Ok = ha, G1 = {
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
  n: q1,
  classes: X1
} = _("skeleton");
function K1(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: K({
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), T(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: K({
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: K({
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
          )) : x("v-if", !0), (h(!0), T(
            Ve,
            null,
            Ue(e.toNumber(e.rows), (n, a) => (h(), T(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: K({
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (h(), T(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: K({
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
var ov = Q({
  name: "VarSkeleton",
  props: G1,
  setup() {
    return {
      n: q1,
      classes: X1,
      toSizeUnit: ge,
      toNumber: R
    };
  }
});
ov.render = K1;
const ga = ov;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Pk = ga;
function Z1(e) {
  return ["always", "normal", "never"].includes(e);
}
var ze;
(function(e) {
  e.First = "1", e.Second = "2";
})(ze || (ze = {}));
var J1 = {
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
    validator: Z1
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
  onChange: H(),
  onStart: H(),
  onEnd: H(),
  "onUpdate:modelValue": H()
}, {
  n: is,
  classes: Q1
} = _("slider"), _1 = ["onTouchstart"];
function x1(e, r) {
  var n = ae("var-hover-overlay"), a = ae("var-form-details"), t = Ie("hover");
  return h(), T(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: r[0] || (r[0] = function() {
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
            style: K({
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
            style: K(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (h(!0), T(
        Ve,
        null,
        Ue(e.thumbList, (o) => (h(), T(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: K(e.thumbStyle(o)),
            onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
          },
          [Y(e.$slots, "button", {
            currentValue: o.text
          }, () => [ke(A(
            "div",
            {
              class: c(e.n(e.direction + "-thumb-block")),
              style: K({
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
              style: K({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [J(
              n,
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
              style: K({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [A(
              "span",
              null,
              re(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          _1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), J(
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
var iv = Q({
  name: "VarSlider",
  components: {
    VarFormDetails: _e,
    VarHoverOverlay: cr
  },
  directives: {
    Hover: Rr
  },
  props: J1,
  setup(e) {
    var {
      bindForm: r,
      form: n
    } = Vr(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Pr(), {
      hovering: i,
      handleHovering: s
    } = On(), {
      hovering: u,
      handleHovering: d
    } = On(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = V(null), p = V(0), y = V(!1), w = Ae({
      [ze.First]: f(),
      [ze.Second]: f()
    }), O = L(() => R(e.max) - R(e.min)), C = L(() => p.value / O.value * R(e.step)), k = L(() => {
      var {
        modelValue: ne,
        range: ue
      } = e, me = [];
      return ue && Te(ne) ? me = [{
        value: X(ne[0]),
        enumValue: ze.First,
        text: z(ne[0]),
        hovering: st(i),
        handleHovering: s
      }, {
        value: X(ne[1]),
        enumValue: ze.Second,
        text: z(ne[1]),
        hovering: st(u),
        handleHovering: d
      }] : or(ne) && (me = [{
        value: X(ne),
        enumValue: ze.First,
        text: z(ne),
        hovering: st(i),
        handleHovering: s
      }]), me;
    }), M = L(() => {
      var {
        activeColor: ne,
        range: ue,
        modelValue: me
      } = e, De = ue && Te(me) ? X(Math.min(me[0], me[1])) : 0, Ke = ue && Te(me) ? X(Math.max(me[0], me[1])) - De : X(me);
      return b.value ? {
        left: "0px",
        height: Ke + "%",
        bottom: De + "%",
        background: ne
      } : {
        top: "0px",
        width: Ke + "%",
        left: De + "%",
        background: ne
      };
    }), $ = L(() => e.disabled || (n == null ? void 0 : n.disabled.value)), I = L(() => e.readonly || (n == null ? void 0 : n.readonly.value)), b = L(() => e.direction === "vertical"), P, D = (ne) => {
      var ue = ne.currentTarget;
      return ue ? b.value ? p.value - (ne.clientY - ue.getBoundingClientRect().top) : ne.clientX - qv(ue) : 0;
    }, B = (ne) => {
      var ue = b.value ? "bottom" : "left";
      return {
        [ue]: ne.value + "%",
        zIndex: w[ne.enumValue].active ? 1 : void 0
      };
    }, j = (ne) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[ne].active, X = (ne) => {
      var {
        min: ue,
        max: me
      } = e;
      return ne < R(ue) ? 0 : ne > R(me) ? 100 : (ne - R(ue)) / O.value * 100;
    }, z = (ne) => {
      if (!or(ne))
        return 0;
      var ue = ne;
      ue < Number(e.min) && (ue = Number(e.min)), ue > Number(e.max) && (ue = Number(e.max));
      var me = parseInt("" + ue, 10) === ue;
      return me ? ue : R(ue.toPrecision(5));
    }, N = (ne, ue) => {
      $.value || ue.handleHovering(ne);
    }, F = (ne, ue) => {
      var me = [], {
        step: De,
        range: Ke,
        modelValue: Ge,
        onChange: He,
        min: Ye
      } = e, oe = R(De), be = Math.round(ne / C.value), pe = be * oe + R(Ye), Se = w[ue].percentValue * oe + R(Ye);
      if (w[ue].percentValue = be, Ke && Te(Ge) && (me = ue === ze.First ? [pe, Ge[1]] : [Ge[0], pe]), Se !== pe) {
        var $e = Ke ? me.map((Re) => z(Re)) : z(pe);
        S(He, $e), S(e["onUpdate:modelValue"], $e), m();
      }
    }, W = (ne) => {
      if (!e.range)
        return ze.First;
      var ue = w[ze.First].percentValue * C.value, me = w[ze.Second].percentValue * C.value, De = Math.abs(ne - ue), Ke = Math.abs(ne - me);
      return De <= Ke ? ze.First : ze.Second;
    }, te = () => {
      document.addEventListener("touchmove", E, {
        passive: !1
      }), document.addEventListener("touchend", q), document.addEventListener("touchcancel", q);
    }, G = () => {
      document.removeEventListener("touchmove", E), document.removeEventListener("touchend", q), document.removeEventListener("touchcancel", q);
    }, U = (ne, ue) => {
      if (p.value || (p.value = g.value.offsetWidth), $.value || (w[ue].active = !0), P = ue, te(), !($.value || I.value)) {
        S(e.onStart), y.value = !0;
        var {
          clientX: me,
          clientY: De
        } = ne.touches[0];
        w[ue].startPosition = b.value ? De : me;
      }
    }, E = (ne) => {
      if (ne.preventDefault(), !($.value || I.value || !y.value)) {
        var {
          startPosition: ue,
          currentOffset: me
        } = w[P], {
          clientX: De,
          clientY: Ke
        } = ne.touches[0], Ge = (b.value ? ue - Ke : De - ue) + me;
        Ge <= 0 ? Ge = 0 : Ge >= p.value && (Ge = p.value), F(Ge, P);
      }
    }, q = () => {
      G();
      var {
        range: ne,
        modelValue: ue,
        onEnd: me,
        step: De,
        min: Ke
      } = e;
      if ($.value || (w[P].active = !1), !($.value || I.value)) {
        var Ge = [];
        w[P].currentOffset = w[P].percentValue * C.value;
        var He = w[P].percentValue * R(De) + R(Ke);
        ne && Te(ue) && (Ge = P === ze.First ? [He, ue[1]] : [ue[0], He]), S(me, ne ? Ge : He), y.value = !1;
      }
    }, ee = (ne) => {
      if (!($.value || I.value) && !ne.target.closest("." + is("thumb"))) {
        var ue = D(ne), me = W(ue);
        P = me, F(ue, me), q();
      }
    }, se = () => {
      var ne = R(e.step);
      return isNaN(ne) ? (rl("Slider", 'type of prop "step" should be Number'), !1) : ne < 0 ? (rl("Slider", '"step" should be > 0'), !1) : !0;
    }, de = () => {
      var {
        range: ne,
        modelValue: ue
      } = e;
      return ne && !Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ne && Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ne && Te(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, we = function(ne, ue) {
      ne === void 0 && (ne = e.modelValue), ue === void 0 && (ue = R(e.step));
      var me = (De) => {
        var {
          min: Ke,
          max: Ge
        } = e;
        return De < R(Ke) ? 0 : De > R(Ge) ? O.value / ue : (De - R(Ke)) / ue;
      };
      e.range && Te(ne) ? (w[ze.First].percentValue = me(ne[0]), w[ze.First].currentOffset = w[ze.First].percentValue * C.value, w[ze.Second].percentValue = me(ne[1]), w[ze.Second].currentOffset = w[ze.Second].percentValue * C.value) : or(ne) && (w[ze.First].currentOffset = me(ne) * C.value);
    }, Pe = () => {
      var ne = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], ne), l();
    }, ur = {
      reset: Pe,
      validate: v,
      resetValidation: l
    };
    return S(r, ur), ie([() => e.modelValue, () => e.step], (ne) => {
      var [ue, me] = ne;
      !se() || !de() || y.value || we(ue, R(me));
    }), ie(p, () => we()), ir(() => {
      !se() || !de() || (p.value = g.value[b.value ? "offsetHeight" : "offsetWidth"]);
    }), St(() => {
      G();
    }), {
      n: is,
      classes: Q1,
      Thumbs: ze,
      sliderEl: g,
      getFillStyle: M,
      isDisabled: $,
      isVertical: b,
      thumbStyle: B,
      errorMessage: a,
      thumbsProps: w,
      thumbList: k,
      hover: N,
      multiplySizeUnit: ar,
      toNumber: R,
      showLabel: j,
      start: U,
      move: E,
      end: q,
      click: ee
    };
  }
});
iv.render = x1;
const ya = iv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Vk = ya;
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
function ew(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function rw(e) {
  return Gi.includes(e);
}
var lv = {
  type: {
    type: String,
    validator: rw
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: ew
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
  loadingType: Je(un, "type"),
  loadingSize: Je(un, "size"),
  loadingRadius: Je(un, "radius"),
  loadingColor: hi({}, Je(un, "color"), {
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
  n: nw,
  classes: aw
} = _("snackbar"), tw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function ow(e, r) {
  var n = ae("var-icon"), a = ae("var-loading");
  return ke((h(), T(
    "div",
    {
      class: c(e.n()),
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [Y(e.$slots, "default", {}, () => [Ce(
          re(e.content),
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
        [Y(e.$slots, "icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (h(), ye(
          n,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (h(), ye(
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
        )) : x("v-if", !0), Y(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[$n, e.show]]);
}
var sv = Q({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Nr,
    VarIcon: Oe
  },
  props: lv,
  setup(e) {
    var r = V(null), {
      zIndex: n
    } = Vt(() => e.show, 1);
    lo(() => e.show, () => e.lockScroll);
    var a = L(() => e.type === "loading" || e.forbidClick), t = L(() => e.type ? tw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && S(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? (S(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), S(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(r.value), o();
    }), ir(() => {
      e.show && (S(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Gi,
      n: nw,
      classes: aw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
sv.render = ow;
const uv = sv;
var {
  n: iw
} = _("snackbar");
function lw(e, r) {
  var n = ae("var-snackbar-core");
  return h(), ye(
    La,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [J(
      Le,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [J(
          n,
          Ee(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: ve(() => [Y(e.$slots, "icon")]),
            action: ve(() => [Y(e.$slots, "action")]),
            default: ve(() => [Y(e.$slots, "default", {}, () => [Ce(
              re(e.content),
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
var dv = Q({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: uv
  },
  props: lv,
  setup() {
    var {
      disabled: e
    } = io();
    return {
      n: iw,
      disabled: e
    };
  }
});
dv.render = lw;
const ba = dv;
function wt() {
  return wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, wt.apply(this, arguments);
}
function sw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var Gi = ["loading", "success", "warning", "info", "error"], ls = 0, gi = !1, vv, xa = !1, fv = {
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
}, $r = Ae([]), qi = fv, uw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, To = (e) => () => Ot(e) ? e() : e, dw = {
  setup() {
    return () => {
      var e = $r.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), xa && (a.position = "top");
        var l = xa ? "relative" : "absolute", i = wt({
          position: l
        }, hw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: To(s),
          icon: To(u),
          action: To(d)
        };
        return J(uv, Ee(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return J(Fv, Ee(uw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: vw,
        onAfterLeave: fw
      }), sw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, _r = function(e) {
  var r = mw(e), n = Ae(wt({}, qi, r));
  n.show = !0, gi || (gi = !0, vv = tt(dw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: ls++,
    reactiveSnackOptions: n
  };
  if (a === 0 || xa)
    cw(t);
  else {
    var o = "update-" + ls;
    pw(n, o);
  }
  return {
    clear() {
      !xa && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
Gi.forEach((e) => {
  _r[e] = (r) => (Ci(r) ? r.type = e : r = {
    content: r,
    type: e
  }, _r(r));
});
_r.install = function(e) {
  e.component(ba.name, ba);
};
_r.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== xa && ($r.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), xa = e);
};
_r.clear = function() {
  $r.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
_r.setDefaultOptions = function(e) {
  qi = e;
};
_r.resetDefaultOptions = function() {
  qi = fv;
};
_r.Component = ba;
function vw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === R(r));
  n && S(n.reactiveSnackOptions.onOpened);
}
function fw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === R(r));
  n && (n.animationEnd = !0, S(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (S(vv), $r = Ae([]), gi = !1);
}
function cw(e) {
  $r.push(e);
}
function mw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function pw(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = wt({}, n.reactiveSnackOptions, e), n._update = r;
}
function hw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Mk = ba;
const yi = _r;
var cv = (e) => ["mini", "small", "normal", "large"].includes(e), gw = (e) => cv(e) || Te(e) || or(e) || Fe(e), yw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), bw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), ww = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: gw
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
    validator: yw
  },
  align: {
    type: String,
    validator: bw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Cw(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Oo,
  classes: Sw
} = _("space");
const wa = Q({
  name: "VarSpace",
  props: ww,
  setup(e, r) {
    var {
      slots: n
    } = r, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Te(t) ? t.map(ge) : [ge(t), ge(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = S(n.default)) != null ? t : [], f = cv(d), [m, g] = a(d, f);
      v = Ps(v);
      var p = v.length - 1, y = v.map((w, O) => {
        var C = Cw(m, g, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: p
        });
        return J("div", {
          style: {
            margin: C
          }
        }, [w]);
      });
      return J("div", {
        class: Sw(Oo(), Oo("$--box"), [o, Oo("--inline")]),
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
var Bk = wa, kw = {
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
}, mv = Symbol("STEPS_BIND_STEP_KEY");
function $w() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = sr(mv);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Tw() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(mv);
  return n || Or("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Ow,
  classes: Pw
} = _("step"), Vw = {
  key: 3
};
function Mw(e, r) {
  var n = ae("var-icon");
  return h(), T(
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
            style: K({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: r[0] || (r[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (h(), ye(
            n,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (h(), ye(
            n,
            {
              key: 1,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (h(), ye(
            n,
            {
              key: 2,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (h(), T(
            "span",
            Vw,
            re(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), A(
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
        )],
        2
        /* CLASS */
      ), e.isLastChild ? x("v-if", !0) : (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: K({
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
var pv = Q({
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: kw,
  setup() {
    var e = V(null), r = V(""), n = V(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Tw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = L(() => l.value === a.value), m = L(() => a.value !== -1 && l.value > a.value), g = {
      index: a
    }, p = () => v(a.value), y = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(g), ie(i, (w) => {
      if (n.value = w - 1 === a.value, e.value) {
        var O = e.value.offsetWidth / 2 - 14;
        r.value = "0 -" + O + "px";
      }
    }), {
      n: Ow,
      classes: Pw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: r,
      activeColor: s,
      inactiveColor: u,
      isLastChild: n,
      click: p,
      getRef: y
    };
  }
});
pv.render = Mw;
const Ca = pv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Ek = Ca;
function Bw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Ew = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Bw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: H()
}, {
  n: Iw
} = _("steps");
function Nw(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var hv = Q({
  name: "VarSteps",
  props: Ew,
  setup(e) {
    var r = L(() => e.active), n = L(() => e.activeColor), a = L(() => e.inactiveColor), t = L(() => e.direction), {
      length: o,
      bindStep: l
    } = $w(), i = (u) => {
      S(e.onClickStep, u);
    }, s = {
      active: r,
      length: o,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: Iw
    };
  }
});
hv.render = Nw;
const Sa = hv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Ik = Sa, Dw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Aw
} = _("style-provider"), zw = Q({
  name: "VarStyleProvider",
  props: Dw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => ms(e.tag, {
      class: Aw(),
      style: Ts(e.styleVars)
    }, S(n.default));
  }
});
const ka = zw;
var Po = [];
function Ct(e) {
  Po.forEach((n) => document.documentElement.style.removeProperty(n)), Po.length = 0;
  var r = Ts(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Po.push(a);
  });
}
Ct.Component = ka;
ka.install = function(e) {
  e.component(ka.name, ka);
};
Ct.install = function(e) {
  e.component(ka.name, ka);
};
var Nk = ka, Lw = {
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
  n: Rw,
  classes: Uw
} = _("switch");
function Fw(e, r) {
  var n = ae("var-loading"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return ke((h(), T(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: r[0] || (r[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: K(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: K(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), ke((h(), T(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: K(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), ye(
            n,
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
        ), J(
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
    ), J(
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
var gv = Q({
  name: "VarSwitch",
  components: {
    VarLoading: Nr,
    VarFormDetails: _e,
    VarHoverOverlay: cr
  },
  directives: {
    Ripple: We,
    Hover: Rr
  },
  props: Lw,
  setup(e) {
    var {
      bindForm: r,
      form: n
    } = Vr(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Pr(), {
      hovering: i,
      handleHovering: s
    } = On(), u = () => o(e.rules, e.modelValue), d = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = L(() => {
      var {
        size: w,
        modelValue: O,
        color: C,
        closeColor: k,
        loadingColor: M,
        activeValue: $
      } = e;
      return {
        handle: {
          width: ar(w),
          height: ar(w),
          backgroundColor: O === $ ? C : k,
          color: M
        },
        ripple: {
          left: O === $ ? ar(w, 0.5) : "-" + ar(w, 0.5),
          color: O === $ ? C : k || "#999",
          width: ar(w, 2),
          height: ar(w, 2)
        },
        track: {
          height: ar(w, 0.72),
          width: ar(w, 1.9),
          borderRadius: ar(w, 2 / 3),
          filter: O === $ || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === $ ? C : k
        },
        switch: {
          height: ar(w, 1.2),
          width: ar(w, 2)
        }
      };
    }), f = L(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return ar(w, 0.4);
    }), m = (w) => {
      var {
        onClick: O,
        onChange: C,
        disabled: k,
        loading: M,
        readonly: $,
        modelValue: I,
        activeValue: b,
        inactiveValue: P,
        "onUpdate:modelValue": D
      } = e;
      if (S(O, w), !(k || M || $ || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var B = I === b ? P : b;
        S(C, B), S(D, B), d();
      }
    }, g = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, p = () => {
      S(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: p,
      validate: u,
      resetValidation: l
    };
    return S(r, y), {
      n: Rw,
      classes: Uw,
      switchActive: m,
      hovering: i,
      hover: g,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly
    };
  }
});
gv.render = Fw;
const $a = gv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Dk = $a, Hw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: H()
}, yv = Symbol("TABS_BIND_TAB_KEY");
function Yw() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = sr(yv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function jw() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = lr(yv);
  return r || Or("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Rt,
  classes: Ww
} = _("tab");
function Gw(e, r) {
  var n = Ie("ripple");
  return ke((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: K({
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
var bv = Q({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Hw,
  setup(e) {
    var r = V(null), n = L(() => e.name), a = L(() => e.disabled), t = L(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = jw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: g
    } = l, p = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(p);
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : y() ? d.value : v.value, O = () => e.disabled ? Rt("$-tab--disabled") : y() ? Rt("$-tab--active") : Rt("$-tab--inactive"), C = (k) => {
      var {
        disabled: M,
        name: $,
        onClick: I
      } = e;
      M || (S(I, $ ?? o.value, k), s(p));
    };
    return ie(() => e.name, g), ie(() => e.disabled, g), {
      n: Rt,
      classes: Ww,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: O,
      handleClick: C
    };
  }
});
bv.render = Gw;
const Ta = bv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Ak = Ta, qw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Xw,
  classes: Kw
} = _("tab-item");
function Zw(e, r) {
  var n = ae("var-swipe-item");
  return h(), ye(
    n,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [Y(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var wv = Q({
  name: "VarTabItem",
  components: {
    VarSwipeItem: qr
  },
  props: qw,
  setup(e) {
    var {
      index: r,
      tabsItems: n,
      bindTabsItems: a
    } = Mb(), {
      bindLists: t
    } = Bb(), o = L(() => e.name), l = L(() => r.value === Number(n.active.value)), i = {
      index: r,
      name: o,
      current: l
    };
    return a(i), t(i), {
      n: Xw,
      classes: Kw,
      current: l
    };
  }
});
wv.render = Zw;
const Oa = wv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var zk = Oa, Jw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Qw,
  classes: _w
} = _("table");
function xw(e, r) {
  return h(), T(
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
          style: K({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [Y(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (h(), T(
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
var Cv = Q({
  name: "VarTable",
  props: Jw,
  setup() {
    return {
      toSizeUnit: ge,
      n: Qw,
      classes: _w,
      formatElevation: hr
    };
  }
});
Cv.render = xw;
const Pa = Cv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Lk = Pa;
function ss(e) {
  return ["horizontal", "vertical"].includes(e);
}
function eC(e) {
  return ["auto", "always"].includes(e);
}
function rC(e) {
  return ["normal", "reverse"].includes(e);
}
var nC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: ss
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ss
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
    validator: eC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: rC
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
  onClick: H(),
  onChange: H(),
  "onUpdate:active": H()
};
function us(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ds(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        us(o, a, t, l, i, "next", s);
      }
      function i(s) {
        us(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: aC,
  classes: tC
} = _("tabs");
function oC(e, r) {
  return h(), ye(
    nt(e.sticky ? e.n("$-sticky") : e.Transition),
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
          [Y(e.$slots, "default"), A(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
              style: K({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("indicator-inner"), e.n("--layout-" + e.layoutDirection + "-indicator-inner"))),
                style: K({
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
var Sv = Q({
  name: "VarTabs",
  components: {
    VarSticky: Xr
  },
  inheritAttrs: !1,
  props: nC,
  setup(e) {
    var r = V("0px"), n = V("0px"), a = V("0px"), t = V("0px"), o = V(!1), l = V(null), i = L(() => e.active), s = L(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = L(() => e.activeColor), d = L(() => e.inactiveColor), v = L(() => e.disabledColor), f = L(() => e.itemDirection), m = V(null), {
      tabList: g,
      bindTabList: p,
      length: y
    } = Yw(), w = (B) => {
      var j, X = (j = B.name.value) != null ? j : B.index.value, {
        active: z,
        onChange: N,
        onClick: F
      } = e;
      S(e["onUpdate:active"], X), S(F, X), X !== z && S(N, X);
    }, O = () => g.find((B) => {
      var {
        name: j
      } = B;
      return e.active === j.value;
    }), C = (B) => g.find((j) => {
      var {
        index: X
      } = j;
      return (B ?? e.active) === X.value;
    }), k = () => {
      if (y.value !== 0) {
        var {
          active: B
        } = e;
        if (or(B)) {
          var j = B > y.value - 1 ? y.value - 1 : 0;
          return S(e["onUpdate:active"], j), C(j);
        }
      }
    }, M = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, $ = (B) => {
      var {
        element: j
      } = B, X = j.value;
      X && (e.layoutDirection === "horizontal" ? (r.value = X.offsetWidth + "px", a.value = X.offsetLeft + "px") : (n.value = X.offsetHeight + "px", t.value = X.offsetTop + "px"));
    }, I = (B) => {
      var {
        element: j
      } = B;
      if (o.value) {
        var X = l.value, z = j.value;
        if (e.layoutDirection === "horizontal") {
          var N = z.offsetLeft + z.offsetWidth / 2 - X.offsetWidth / 2;
          pt(X, {
            left: N,
            animation: Bo
          });
        } else {
          var F = z.offsetTop + z.offsetHeight / 2 - X.offsetHeight / 2;
          pt(X, {
            top: F,
            animation: Bo
          });
        }
      }
    }, b = () => {
      var B = O() || C() || k();
      !B || B.disabled.value || (M(), $(B), I(B));
    }, P = /* @__PURE__ */ function() {
      var B = ds(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return B.apply(this, arguments);
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
    return p(D), ie(() => y.value, /* @__PURE__ */ ds(function* () {
      yield Lr(), b();
    })), ie(() => e.active, b), ie(() => e.scrollable, b), Mn(b), Zr(() => window, "resize", b), {
      stickyComponent: m,
      indicatorWidth: r,
      indicatorHeight: n,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Le,
      toSizeUnit: ge,
      n: aC,
      classes: tC,
      resize: b,
      resizeSticky: P,
      formatElevation: hr
    };
  }
});
Sv.render = oC;
const Va = Sv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Rk = Va, iC = {
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
function vs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function lC(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        vs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        vs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: sC
} = _("tabs-items");
function uC(e, r) {
  var n = ae("var-swipe");
  return h(), ye(
    n,
    {
      class: c(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: ve(() => [Y(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var kv = Q({
  name: "VarTabsItems",
  components: {
    VarSwipe: Gr
  },
  props: iC,
  setup(e) {
    var r = V(null), n = L(() => e.active), {
      tabItemList: a,
      bindTabItem: t,
      length: o
    } = Vb(), l = (m) => a.find((g) => {
      var {
        name: p
      } = g;
      return m === p.value;
    }), i = (m) => a.find((g) => {
      var {
        index: p
      } = g;
      return m === p.value;
    }), s = (m) => l(m) || i(m), u = (m) => {
      var g, p = s(m);
      p && ((g = r.value) == null || g.to(p.index.value));
    }, d = (m) => {
      var g, p = a.find((w) => {
        var {
          index: O
        } = w;
        return O.value === m;
      }), y = (g = p.name.value) != null ? g : p.index.value;
      S(e["onUpdate:active"], y);
    }, v = () => r.value, f = {
      active: n
    };
    return t(f), ie(() => e.active, u), ie(() => o.value, /* @__PURE__ */ lC(function* () {
      yield Lr(), u(e.active);
    })), {
      swipe: r,
      n: sC,
      handleSwipeChange: d,
      getSwipe: v
    };
  }
});
kv.render = uC;
const Ma = kv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Uk = Ma;
const dC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, vC = {
  "--badge-default-color": "#555"
}, fC = {
  "--button-default-color": "#303030"
}, cC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, mC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, pC = {
  "--checkbox-unchecked-color": "#fff"
}, hC = {
  "--chip-default-color": "#555"
}, gC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, yC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, bC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, wC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, CC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, SC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, kC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, $C = {
  "--popup-content-background-color": "#1e1e1e"
}, TC = {
  "--pull-refresh-background": "#303030"
}, OC = {
  "--radio-unchecked-color": "#fff"
}, PC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, VC = {
  "--select-scroller-background": "#303030"
}, MC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, BC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, EC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, IC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, NC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, DC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, AC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, zC = {
  "--tabs-background": "#1e1e1e"
}, LC = {
  "--app-bar-color": "#272727"
}, RC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, UC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, FC = {
  "--menu-background-color": "#272727"
}, HC = {
  "--breadcrumb-inactive-color": "#aaa"
}, YC = {
  "--paper-background": "#303030"
}, jC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, bi.apply(this, arguments);
}
const WC = bi({
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
}, fC, mC, cC, DC, yC, MC, zC, IC, $C, bC, dC, hC, vC, AC, gC, TC, EC, BC, SC, NC, CC, VC, OC, pC, wC, kC, LC, RC, UC, FC, PC, HC, YC, jC);
var GC = {
  dark: WC
}, Fk = null;
const wi = GC;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], tr = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], fs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function qC(e) {
  return ["ampm", "24hr"].includes(e);
}
var XC = {
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
    validator: qC
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
}, $v = (e, r) => e === "24hr" || r === "am", Xi = (e, r, n) => {
  var a = Cr.findIndex((o) => R(o) === R(n)), t = $v(e, r) ? n : tr[a];
  return {
    hourStr: t,
    hourNum: R(t)
  };
}, fr = (e) => {
  var [r, n, a] = e.split(":");
  return {
    hour: R(r),
    minute: R(n),
    second: R(a)
  };
}, Tv = (e) => {
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
  } = Xi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: g,
      minute: p
    } = fr(i);
    f = g === v && a > p;
  }
  if (!i && s) {
    var {
      hour: y,
      minute: w
    } = fr(s);
    f = y === v && a < w;
  }
  if (i && s) {
    var {
      hour: O,
      minute: C
    } = fr(i), {
      hour: k,
      minute: M
    } = fr(s);
    f = k === v && a < M || O === v && a > C;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, Ov = (e) => {
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
  } = Xi(t, o, l), m = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: p,
      minute: y,
      second: w
    } = fr(s);
    m = p === f && y < i || y === i && a > w;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: C,
      second: k
    } = fr(u);
    m = O === f && C > i || C === i && a > k;
  }
  if (s && u) {
    var {
      hour: M,
      minute: $,
      second: I
    } = fr(s), {
      hour: b,
      minute: P,
      second: D
    } = fr(u);
    m = M === f && $ < i || b === f && P > i || M === f && $ === i && a > I || b === f && P === i && a < D;
  }
  return (r = e.allowedTime) != null && r.seconds && (g = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || g;
}, {
  n: KC,
  classes: ZC
} = _("time-picker");
function JC(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n("clock"))
    },
    [A(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: K(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), T(
      Ve,
      null,
      Ue(e.timeScales, (n, a) => (h(), T(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: K(e.getStyle(a, n, !1))
        },
        re(n),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), T(
        Ve,
        null,
        Ue(e.hours24, (n, a) => (h(), T(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: K(e.getStyle(a, n, !0))
          },
          re(n),
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
  setup(e, r) {
    var {
      emit: n
    } = r, a = V(null), t = V([]), o = V([]), l = L(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = L(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = L(() => e.type === "hour" ? Cr : fs), u = (y, w) => {
      var O;
      y = (O = y) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var C = e.type === "minute" ? Tv : Ov, k = {
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
      return w && e.type === "minute" && Reflect.deleteProperty(k, "minute"), C(k);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var y = e.isInner ? tr[i.value] : s.value[i.value];
      return s.value === fs ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, w) => w ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if ($v(e.format, e.ampm))
          return t.value.includes(y);
        var w = Cr.findIndex((O) => O === y);
        return o.value.includes(w);
      }
      return u(y, !0);
    }, m = (y, w, O) => {
      var C = 2 * Math.PI / 12 * y - Math.PI / 2, k = 50 * (1 + Math.cos(C)), M = 50 * (1 + Math.sin(C)), $ = () => v(y, O) ? f(w) ? {
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
      } = $();
      return {
        left: k + "%",
        top: M + "%",
        backgroundColor: I,
        color: b
      };
    }, g = () => {
      var {
        width: y,
        height: w
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: w
      };
    }, p = () => {
      if (i.value !== void 0) {
        var y = e.ampm === "am" ? Cr : tr;
        return Ia(y[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (y, w) => {
      var [O, C] = y, [k, M] = w, $ = O === k && C === M;
      if (!($ || e.type !== "hour" || i.value === void 0)) {
        var I = C ? tr[i.value] : p(), b = e.useSeconds ? ":" + e.time.second : "", P = I + ":" + e.time.minute + b;
        e.preventNextUpdate || n("update", P), n("change-prevent-update");
      }
    }), ie(() => e.rad, (y, w) => {
      if (!(e.type === "hour" || y === void 0 || w === void 0)) {
        var O = y / 6 >= 0 ? y / 6 : y / 6 + 60, C = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (O !== C) {
          var k, {
            hourStr: M
          } = Xi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var $ = le().minute(O).format("mm"), I = e.useSeconds ? ":" + e.time.second : "";
            k = M + ":" + $ + I;
          }
          if (e.type === "second") {
            var b = le().second(O).format("ss"), P = e.useSeconds ? ":" + b : "";
            k = M + ":" + e.time.minute + P;
          }
          n("update", k);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [w, O, C] = y;
      if (t.value = [], w && !O) {
        var {
          hour: k
        } = fr(w), M = Cr.filter((W) => R(W) > k), $ = tr.filter((W) => R(W) > k);
        t.value = [...M, ...$];
      }
      if (!w && O) {
        var {
          hour: I
        } = fr(O), b = Cr.filter((W) => R(W) < I), P = tr.filter((W) => R(W) < I);
        t.value = [...b, ...P];
      }
      if (w && O) {
        var {
          hour: D
        } = fr(w), {
          hour: B
        } = fr(O), j = Cr.filter((W) => R(W) < B || R(W) > D), X = tr.filter((W) => R(W) < B || R(W) > D);
        t.value = [...j, ...X];
      }
      if (C != null && C.hours) {
        var {
          hours: z
        } = C, N = Cr.filter((W) => !z(R(W))), F = tr.filter((W) => !z(R(W)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...N, ...F])];
      }
      o.value = t.value.map((W) => tr.findIndex((te) => W === te)).filter((W) => W >= 0);
    }, {
      immediate: !0
    }), {
      n: KC,
      classes: ZC,
      hours24: tr,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: g,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
Pv.render = JC;
const QC = Pv;
var {
  n: _C,
  classes: xC
} = _("time-picker"), eS = (e) => (Ra(""), e = e(), Ua(), e), rS = /* @__PURE__ */ eS(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), nS = {
  key: 0
};
function aS(e, r) {
  var n = ae("clock");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: K({
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
            onClick: r[0] || (r[0] = (a) => e.checkPanel("hour"))
          },
          re(e.time.hour),
          3
          /* TEXT, CLASS */
        ), rS, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), T("span", nS, ":")) : x("v-if", !0), e.useSeconds ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          re(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: r[3] || (r[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), A(
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
        [J(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(h(), ye(
              n,
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
var Vv = Q({
  name: "VarTimePicker",
  components: {
    Clock: QC
  },
  props: XC,
  setup(e) {
    var r = V(null), n = V(null), a = V(null), t = V(!1), o = V(!1), l = V(!1), i = V(!1), s = V(!1), u = V(void 0), d = V(0), v = V(0), f = V("hour"), m = V("am"), g = V(!1), p = V(!1), y = V({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ae({
      x: 0,
      y: 0
    }), O = Ae({
      x: [],
      y: []
    }), C = L(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), k = (U) => {
      S(e["onUpdate:modelValue"], U), S(e.onChange, U);
    }, M = (U) => U * 57.29577951308232, $ = (U) => {
      i.value = !1, p.value = !1, f.value = U;
    }, I = (U) => {
      var {
        disableHour: E
      } = a.value, q = Cr.findIndex((de) => R(de) === R(y.value.hour)), ee = U === "am" ? Cr : tr, se = [...ee.slice(q), ...ee.slice(0, q)];
      return se.find((de, we) => (o.value = we !== 0, !E.includes(de)));
    }, b = (U) => {
      if (!e.readonly) {
        m.value = U;
        var E = I(U);
        if (E) {
          var q = e.useSeconds ? ":" + y.value.second : "", ee = Ia(E, 2, "0") + ":" + y.value.minute + q;
          k(ee);
        }
      }
    }, P = (U, E) => {
      var q = U >= O.x[0] && U <= O.x[1], ee = E >= O.y[0] && E <= O.y[1];
      return q && ee;
    }, D = (U) => {
      var E = e.format === "24hr" ? "HH" : "hh", {
        hour: q,
        minute: ee,
        second: se
      } = fr(U);
      return {
        hour: le().hour(q).format(E),
        minute: le().minute(ee).format("mm"),
        second: le().second(se).format("ss")
      };
    }, B = (U) => {
      var E = U / 30;
      return E >= 0 ? E : E + 12;
    }, j = () => {
      var {
        width: U,
        height: E
      } = a.value.getSize(), q = w.x - U / 2 - 8, ee = w.x + U / 2 + 8, se = w.y - E / 2 - 8, de = w.y + E / 2 + 8;
      return {
        rangeXMin: q,
        rangeXMax: ee,
        rangeYMin: se,
        rangeYMax: de
      };
    }, X = (U, E, q) => {
      var {
        disableHour: ee
      } = a.value;
      l.value = P(U, E);
      var se = Math.round(q / 30) * 30 + 90, de = B(se), we = t.value ? Cr[de] : tr[de];
      if (ee.includes(we) || (t.value = e.format === "24hr" ? P(U, E) : !1), t.value === l.value) {
        var Pe = t.value || m.value === "pm" ? tr[de] : Cr[de];
        g.value = ee.includes(Pe), !g.value && (u.value = se, i.value = !0);
      }
    }, z = (U) => {
      var {
        disableHour: E
      } = a.value, q = Math.round(U / 6) * 6 + 90, ee = q / 6 >= 0 ? q / 6 : q / 6 + 60, se = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: E,
        allowedTime: e.allowedTime
      };
      p.value = Tv(se), !p.value && (d.value = q, s.value = !0);
    }, N = (U) => {
      var {
        disableHour: E
      } = a.value, q = Math.round(U / 6) * 6 + 90, ee = q / 6 >= 0 ? q / 6 : q / 6 + 60, se = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: R(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: E,
        allowedTime: e.allowedTime
      };
      Ov(se) || (v.value = q);
    }, F = () => {
      var {
        left: U,
        top: E,
        width: q,
        height: ee
      } = r.value.getBoundingClientRect();
      if (w.x = U + q / 2, w.y = E + ee / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: se,
          rangeXMax: de,
          rangeYMin: we,
          rangeYMax: Pe
        } = j();
        O.x = [se, de], O.y = [we, Pe];
      }
    }, W = (U) => {
      if (U.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: E,
          clientY: q
        } = U.touches[0], ee = E - w.x, se = q - w.y, de = Math.round(M(Math.atan2(se, ee)));
        f.value === "hour" ? X(E, q, de) : f.value === "minute" ? z(de) : N(de);
      }
    }, te = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, G = () => {
      o.value = !1;
    };
    return ie(() => e.modelValue, (U) => {
      if (U) {
        var {
          hour: E,
          minute: q,
          second: ee
        } = fr(U), se = le().hour(E).format("hh"), de = le().hour(E).format("HH"), we = le().minute(q).format("mm"), Pe = le().second(ee).format("ss");
        u.value = (se === "12" ? 0 : R(se)) * 30, d.value = R(we) * 6, v.value = R(Pe) * 6, y.value = D(U), e.format !== "24hr" && (m.value = Ia("" + E, 2, "0") === de && tr.includes(de) ? "pm" : "am"), t.value = e.format === "24hr" && tr.includes(de);
      }
    }, {
      immediate: !0
    }), {
      n: _C,
      classes: xC,
      getRad: C,
      time: y,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: W,
      checkPanel: $,
      checkAmpm: b,
      end: te,
      update: k,
      changePreventUpdate: G,
      formatElevation: hr
    };
  }
});
Vv.render = aS;
const Ba = Vv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var Hk = Ba, tS = {
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
  onBeforeFilter: H(),
  onBeforeRead: H(),
  onAfterRead: H(),
  onBeforeRemove: H(),
  onRemove: H(),
  onOversize: H(),
  "onUpdate:modelValue": H()
};
function cs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Vo(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        cs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        cs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: oS,
  classes: iS
} = _("uploader"), lS = 0, sS = ["onClick"], uS = ["onClick"], dS = ["src", "alt"], vS = ["multiple", "accept", "capture", "disabled"], fS = ["src"];
function cS(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = ae("var-popup"), l = Ie("ripple"), i = Ie("hover");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), T(
        Ve,
        null,
        Ue(e.files, (s) => ke((h(), T(
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
            re(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Tr((u) => e.handleRemove(s), ["stop"])
            },
            [J(
              n,
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
            uS
          )) : x("v-if", !0), s.cover ? (h(), T(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: K({
                objectFit: s.fit
              }),
              src: s.cover,
              alt: s.name
            },
            null,
            14,
            dS
          )) : x("v-if", !0), A(
            "div",
            {
              class: c(e.n("file-indicator"))
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
                style: K({
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
          sS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
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
            onChange: r[0] || (r[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          vS
        ), Y(e.$slots, "default", {}, () => [J(
          n,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), J(
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
    ), J(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), J(
      o,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": r[2] || (r[2] = (s) => e.showPreview = s),
        onClosed: r[3] || (r[3] = (s) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), T(
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
            fS
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
var Mv = Q({
  name: "VarUploader",
  directives: {
    Ripple: We,
    Hover: Rr
  },
  components: {
    VarIcon: Oe,
    VarPopup: Sr,
    VarFormDetails: _e,
    VarHoverOverlay: cr
  },
  props: tS,
  setup(e) {
    var r = V(null), n = V(!1), a = V(null), t = L(() => {
      var {
        maxlength: W,
        modelValue: {
          length: te
        }
      } = e;
      return or(W) ? te + " / " + W : "";
    }), {
      form: o,
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Pr(), {
      hovering: v,
      handleHovering: f
    } = On(), m = L(() => {
      var {
        modelValue: W,
        hideList: te
      } = e;
      return te ? [] : W;
    }), g = (W) => {
      var {
        disabled: te,
        readonly: G,
        previewed: U
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || te || G || !U)) {
        var {
          url: E
        } = W;
        if (Fe(E) && _i(E)) {
          zr(E);
          return;
        }
        Fe(E) && xi(E) && (a.value = W, n.value = !0);
      }
    }, p = (W) => ({
      id: lS++,
      url: "",
      cover: "",
      name: W.name,
      file: W,
      progress: 0
    }), y = (W) => {
      var te = W.target, {
        files: G
      } = te;
      return Array.from(G);
    }, w = (W) => new Promise((te) => {
      if (!W.file.type.startsWith("image")) {
        te(W);
        return;
      }
      var G = new FileReader();
      G.onload = () => {
        var U = G.result;
        W.cover = U, W.url = U, te(W);
      }, G.readAsDataURL(W.file);
    }), O = (W) => W.map(w), C = (W) => {
      var {
        onBeforeRead: te
      } = e;
      return W.map((G) => new Promise((U) => {
        te || U({
          valid: !0,
          varFile: G
        });
        var E = Ut(S(te, Ae(G)));
        Promise.all(E).then((q) => {
          U({
            valid: q.every(Boolean),
            varFile: G
          });
        });
      }));
    }, k = /* @__PURE__ */ function() {
      var W = Vo(function* (te) {
        var {
          maxsize: G,
          maxlength: U,
          modelValue: E,
          onOversize: q,
          onAfterRead: ee,
          onBeforeFilter: se,
          readonly: de,
          disabled: we
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || we || de)) {
          var Pe = (He) => He.filter((Ye) => Ye.file.size > R(G) ? (S(q, Ae(Ye)), !1) : !0), ur = (He) => {
            var Ye = Math.min(He.length, R(U) - E.length);
            return He.slice(0, Ye);
          }, ne = /* @__PURE__ */ function() {
            var He = Vo(function* (Ye) {
              if (!se)
                return Ye;
              var oe = Ut(se);
              for (var be of oe)
                Ye = yield be(Ye);
              return Ye;
            });
            return function(oe) {
              return He.apply(this, arguments);
            };
          }(), ue = y(te), me = ue.map(p);
          me = yield ne(me), me = G != null ? Pe(me) : me, me = U != null ? ur(me) : me;
          var De = yield Promise.all(O(me)), Ke = yield Promise.all(C(De)), Ge = Ke.filter((He) => {
            var {
              valid: Ye
            } = He;
            return Ye;
          }).map((He) => {
            var {
              varFile: Ye
            } = He;
            return Ye;
          });
          S(e["onUpdate:modelValue"], [...E, ...Ge]), te.target.value = "", Ge.forEach((He) => S(ee, Ae(He)));
        }
      });
      return function(G) {
        return W.apply(this, arguments);
      };
    }(), M = /* @__PURE__ */ function() {
      var W = Vo(function* (te) {
        var {
          disabled: G,
          readonly: U,
          modelValue: E,
          onBeforeRemove: q,
          onRemove: ee
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || G || U)) {
          if (q) {
            var se = Ut(S(q, Ae(te)));
            if ((yield Promise.all(se)).some((we) => !we))
              return;
          }
          var de = E.filter((we) => we !== te);
          S(ee, Ae(te)), j("onRemove"), S(e["onUpdate:modelValue"], de);
        }
      });
      return function(G) {
        return W.apply(this, arguments);
      };
    }(), $ = () => e.modelValue.filter((W) => W.state === "success"), I = () => e.modelValue.filter((W) => W.state === "error"), b = () => e.modelValue.filter((W) => W.state === "loading"), P = () => {
      r.value.click();
    }, D = () => {
      a.value = null, n.value = !1, zr.close();
    }, B = {
      getSuccess: $,
      getError: I,
      getLoading: b
    }, j = (W) => {
      Ne(() => {
        var {
          validateTrigger: te,
          rules: G,
          modelValue: U
        } = e;
        s(te, W, G, U, B);
      });
    }, X = !1, z = () => u(e.rules, e.modelValue, B), N = () => {
      X = !0, S(e["onUpdate:modelValue"], []), d();
    }, F = {
      validate: z,
      resetValidation: d,
      reset: N
    };
    return S(l, F), ie(() => e.modelValue, () => {
      !X && j("onChange"), X = !1;
    }, {
      deep: !0
    }), {
      n: oS,
      classes: iS,
      formatElevation: hr,
      input: r,
      files: m,
      showPreview: n,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      handleHovering: f,
      isHTMLSupportVideo: xi,
      isHTMLSupportImage: _i,
      preview: g,
      handleChange: k,
      handleRemove: M,
      getSuccess: $,
      getError: I,
      getLoading: b,
      validate: z,
      resetValidation: d,
      reset: N,
      chooseFile: P,
      closePreview: D,
      toSizeUnit: ge
    };
  }
});
Mv.render = cS;
const Ea = Mv;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var Yk = Ea;
const mS = "2.11.0";
function pS(e) {
  Jr.install && e.use(Jr), Nn.install && e.use(Nn), Dn.install && e.use(Dn), An.install && e.use(An), zn.install && e.use(zn), mn.install && e.use(mn), Ln.install && e.use(Ln), Rn.install && e.use(Rn), Un.install && e.use(Un), Fn.install && e.use(Fn), er.install && e.use(er), Hn.install && e.use(Hn), Yn.install && e.use(Yn), pn.install && e.use(pn), hn.install && e.use(hn), jn.install && e.use(jn), gn.install && e.use(gn), Wn.install && e.use(Wn), Gn.install && e.use(Gn), qn.install && e.use(qn), yr.install && e.use(yr), Xn.install && e.use(Xn), Kn.install && e.use(Kn), Jn.install && e.use(Jn), Qr.install && e.use(Qr), Qn.install && e.use(Qn), _n.install && e.use(_n), xn.install && e.use(xn), Wr.install && e.use(Wr), _e.install && e.use(_e), Rr.install && e.use(Rr), cr.install && e.use(cr), Oe.install && e.use(Oe), ea.install && e.use(ea), zr.install && e.use(zr), ra.install && e.use(ra), na.install && e.use(na), Sn.install && e.use(Sn), ht.install && e.use(ht), aa.install && e.use(aa), ta.install && e.use(ta), Nr.install && e.use(Nr), ci.install && e.use(ci), Lo.install && e.use(Lo), Kr.install && e.use(Kr), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), za.install && e.use(za), Sr.install && e.use(Sr), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), We.install && e.use(We), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), yi.install && e.use(yi), wa.install && e.use(wa), Ca.install && e.use(Ca), Sa.install && e.use(Sa), Xr.install && e.use(Xr), Ct.install && e.use(Ct), Gr.install && e.use(Gr), qr.install && e.use(qr), $a.install && e.use($a), Ta.install && e.use(Ta), Oa.install && e.use(Oa), Pa.install && e.use(Pa), Va.install && e.use(Va), Ma.install && e.use(Ma), wi.install && e.use(wi), Ba.install && e.use(Ba), wn.install && e.use(wn), Ea.install && e.use(Ea);
}
const jk = {
  version: mS,
  install: pS,
  ActionSheet: Jr,
  AppBar: Nn,
  Avatar: Dn,
  AvatarGroup: An,
  BackTop: zn,
  Badge: mn,
  BottomNavigation: Ln,
  BottomNavigationItem: Rn,
  Breadcrumb: Un,
  Breadcrumbs: Fn,
  Button: er,
  ButtonGroup: Hn,
  Card: Yn,
  Cell: pn,
  Checkbox: hn,
  CheckboxGroup: jn,
  Chip: gn,
  Col: Wn,
  Collapse: Gn,
  CollapseItem: qn,
  Context: yr,
  Countdown: Xn,
  Counter: Kn,
  DatePicker: Jn,
  Dialog: Qr,
  Divider: Qn,
  Ellipsis: _n,
  Fab: xn,
  Form: Wr,
  FormDetails: _e,
  Hover: Rr,
  HoverOverlay: cr,
  Icon: Oe,
  Image: ea,
  ImagePreview: zr,
  IndexAnchor: ra,
  IndexBar: na,
  Input: Sn,
  Lazy: ht,
  Link: aa,
  List: ta,
  Loading: Nr,
  LoadingBar: ci,
  Locale: Lo,
  Menu: Kr,
  Option: oa,
  Overlay: ia,
  Pagination: la,
  Paper: sa,
  Picker: za,
  Popup: Sr,
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
  Sticky: Xr,
  StyleProvider: Ct,
  Swipe: Gr,
  SwipeItem: qr,
  Switch: $a,
  Tab: Ta,
  TabItem: Oa,
  Table: Pa,
  Tabs: Va,
  TabsItems: Ma,
  Themes: wi,
  TimePicker: Ba,
  Tooltip: wn,
  Uploader: Ea
};
export {
  Jr as ActionSheet,
  Nn as AppBar,
  Dn as Avatar,
  An as AvatarGroup,
  zn as BackTop,
  mn as Badge,
  Ln as BottomNavigation,
  Rn as BottomNavigationItem,
  Un as Breadcrumb,
  Fn as Breadcrumbs,
  er as Button,
  Hn as ButtonGroup,
  Yn as Card,
  pn as Cell,
  hn as Checkbox,
  jn as CheckboxGroup,
  gn as Chip,
  Wn as Col,
  Gn as Collapse,
  qn as CollapseItem,
  yr as Context,
  Xn as Countdown,
  Kn as Counter,
  Jn as DatePicker,
  Qr as Dialog,
  Qn as Divider,
  _n as Ellipsis,
  xn as Fab,
  Wr as Form,
  _e as FormDetails,
  Rr as Hover,
  cr as HoverOverlay,
  Oe as Icon,
  ea as Image,
  zr as ImagePreview,
  ra as IndexAnchor,
  na as IndexBar,
  Sn as Input,
  ht as Lazy,
  aa as Link,
  ta as List,
  Nr as Loading,
  ci as LoadingBar,
  Lo as Locale,
  Kr as Menu,
  oa as Option,
  ia as Overlay,
  Fo as PIXEL,
  la as Pagination,
  sa as Paper,
  za as Picker,
  Sr as Popup,
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
  Xr as Sticky,
  Ct as StyleProvider,
  Gr as Swipe,
  qr as SwipeItem,
  $a as Switch,
  Ta as Tab,
  Oa as TabItem,
  Pa as Table,
  Va as Tabs,
  Ma as TabsItems,
  wi as Themes,
  Ba as TimePicker,
  wn as Tooltip,
  Ea as Uploader,
  SS as _ActionSheetComponent,
  kS as _AppBarComponent,
  TS as _AvatarComponent,
  OS as _AvatarGroupComponent,
  ES as _BackTopComponent,
  IS as _BadgeComponent,
  NS as _BottomNavigationComponent,
  DS as _BottomNavigationItemComponent,
  AS as _BreadcrumbComponent,
  zS as _BreadcrumbsComponent,
  BS as _ButtonComponent,
  LS as _ButtonGroupComponent,
  RS as _CardComponent,
  US as _CellComponent,
  HS as _CheckboxComponent,
  YS as _CheckboxGroupComponent,
  jS as _ChipComponent,
  WS as _ColComponent,
  GS as _CollapseComponent,
  qS as _CollapseItemComponent,
  gS as _ContextComponent,
  XS as _CountdownComponent,
  KS as _CounterComponent,
  ZS as _DatePickerComponent,
  JS as _DialogComponent,
  QS as _DividerComponent,
  xS as _EllipsisComponent,
  ek as _FabComponent,
  rk as _FormComponent,
  FS as _FormDetailsComponent,
  MS as _HoverComponent,
  VS as _HoverOverlayComponent,
  wS as _IconComponent,
  nk as _ImageComponent,
  ok as _ImagePreviewComponent,
  lk as _IndexAnchorComponent,
  sk as _IndexBarComponent,
  uk as _InputComponent,
  $S as _LazyComponent,
  dk as _LinkComponent,
  vk as _ListComponent,
  fk as _LoadingBarComponent,
  PS as _LoadingComponent,
  CS as _LocaleComponent,
  ck as _MenuComponent,
  mk as _OptionComponent,
  pk as _OverlayComponent,
  hk as _PaginationComponent,
  gk as _PaperComponent,
  yk as _PickerComponent,
  bS as _PopupComponent,
  bk as _ProgressComponent,
  wk as _PullRefreshComponent,
  Ck as _RadioComponent,
  Sk as _RadioGroupComponent,
  kk as _RateComponent,
  $k as _ResultComponent,
  yS as _RippleComponent,
  Tk as _RowComponent,
  Ok as _SelectComponent,
  Pk as _SkeletonComponent,
  Vk as _SliderComponent,
  Mk as _SnackbarComponent,
  Bk as _SpaceComponent,
  Ek as _StepComponent,
  Ik as _StepsComponent,
  ik as _StickyComponent,
  Nk as _StyleProviderComponent,
  ak as _SwipeComponent,
  tk as _SwipeItemComponent,
  Dk as _SwitchComponent,
  Ak as _TabComponent,
  zk as _TabItemComponent,
  Lk as _TableComponent,
  Rk as _TabsComponent,
  Uk as _TabsItemsComponent,
  Fk as _ThemesComponent,
  Hk as _TimePickerComponent,
  _S as _TooltipComponent,
  Yk as _UploaderComponent,
  bf as actionSheetProps,
  Pi as add,
  Of as appBarProps,
  Qf as avatarGroupProps,
  Gf as avatarProps,
  Vc as backTopProps,
  Dc as badgeProps,
  Wc as bottomNavigationItemProps,
  Rc as bottomNavigationProps,
  Jc as breadcrumbProps,
  nm as breadcrumbsProps,
  Cc as buttonProps,
  cm as cardProps,
  bm as cellProps,
  zm as checkboxGroupProps,
  Vm as checkboxProps,
  Ym as chipProps,
  Km as colProps,
  tp as collapseItemProps,
  ep as collapseProps,
  sp as countdownProps,
  th as counterProps,
  Th as datePickerProps,
  jk as default,
  qe as defaultLazyOptions,
  Yh as dialogProps,
  Xh as dividerProps,
  zs as enUS,
  km as formDetailsProps,
  wy as formProps,
  Ds as iconProps,
  Hs as imageCache,
  Yy as imagePreviewProps,
  Ty as imageProps,
  xy as indexAnchorProps,
  ab as indexBarProps,
  mb as inputProps,
  pS as install,
  kb as linkProps,
  Pb as listProps,
  zb as loadingBarProps,
  un as loadingProps,
  Xb as menuProps,
  Rs as merge,
  xb as optionProps,
  a0 as overlayProps,
  Ze as pack,
  Ls as packs,
  o0 as paginationProps,
  d0 as paperProps,
  m0 as pickerProps,
  Pt as popupProps,
  $0 as progressProps,
  E0 as pullRefreshProps,
  H0 as radioGroupProps,
  D0 as radioProps,
  G0 as rateProps,
  Z0 as resultProps,
  A1 as rowProps,
  F1 as selectProps,
  G1 as skeletonProps,
  J1 as sliderProps,
  lv as snackbarProps,
  ww as spaceProps,
  kw as stepProps,
  Ew as stepsProps,
  Wt as stickyProps,
  Dw as styleProviderProps,
  hd as swipeProps,
  Lw as switchProps,
  qw as tabItemProps,
  Hw as tabProps,
  Jw as tableProps,
  iC as tabsItemsProps,
  nC as tabsProps,
  XC as timePickerProps,
  oy as tooltipProps,
  tS as uploaderProps,
  Vi as use,
  On as useHoverOverlay,
  Oi as useLocale,
  mS as version,
  Ti as zhCN
};
