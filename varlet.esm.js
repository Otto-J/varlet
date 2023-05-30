import { reactive as Ae, onMounted as no, nextTick as Ne, onActivated as Mn, isRef as Dv, watch as oe, onBeforeUnmount as kt, onDeactivated as en, unref as ut, inject as Av, getCurrentInstance as et, computed as z, provide as zv, isVNode as $t, Comment as Lv, Fragment as Ve, ref as M, createApp as Rv, h as ps, onBeforeMount as Uv, onUnmounted as rt, defineComponent as x, createVNode as Z, Teleport as En, Transition as Le, withDirectives as $e, vShow as $n, mergeProps as Be, openBlock as p, createBlock as be, resolveDynamicComponent as nt, normalizeClass as c, normalizeStyle as G, resolveComponent as te, resolveDirective as Ie, withCtx as ve, createElementVNode as D, renderSlot as Y, toDisplayString as ne, createElementBlock as $, renderList as Ue, createCommentVNode as Q, onUpdated as ao, createTextVNode as Se, pushScopeId as Ra, popScopeId as Ua, withModifiers as Tr, normalizeProps as Tt, guardReactiveProps as to, vModelText as Fv, toRefs as Hv, createSlots as hs, withKeys as _i, toRaw as xi, TransitionGroup as Yv } from "vue";
var gs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, CS = Ae(gs);
const yr = Ae(gs), Fe = (e) => typeof e == "string", Io = (e) => typeof e == "boolean", lr = (e) => typeof e == "number", $i = (e) => Object.prototype.toString.call(e) === "[object Object]", jv = (e) => typeof e == "object" && e !== null, Pt = (e) => typeof e == "function", Pe = (e) => Array.isArray(e), Wv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Yr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Ti = (e) => e === window, R = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Io(e) ? Number(e) : e, Gt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, Pi = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, at = () => typeof window < "u", el = (e) => [...new Set(e)], ys = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), Gv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), qv = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ut = (e) => Pe(e) ? e : [e];
var rl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), nl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Xv = (e) => {
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
}, No = (e) => e, al = (e) => Math.pow(e, 3), bs = (e) => e < 0.5 ? al(e * 2) / 2 : 1 - al((1 - e) * 2) / 2, oo = (e, r) => e ?? r, ws = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Da = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Pr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function tl(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
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
function tt(e) {
  return window.getComputedStyle(e);
}
function xe(e) {
  if (Ti(e)) {
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
    return Do({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function Kv(e) {
  var {
    left: r
  } = xe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ol(e) {
  var {
    top: r
  } = xe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pt(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Oi(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function Zv(e) {
  var {
    top: r,
    bottom: n,
    left: a,
    right: t
  } = xe(e), {
    width: o,
    height: l
  } = xe(window), i = a <= o && t >= 0, s = r <= l && n >= 0;
  return i && s;
}
function ko(e) {
  var {
    transform: r
  } = tt(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function Tn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = tt(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function Jv(e) {
  for (var r = [], n = e; !Ti(n); )
    n = Tn(n), r.push(n);
  return r;
}
function Cs(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Pr(r, "target element cannot found"), n;
  }
  if (jv(e))
    return e;
  Pr(r, 'type of prop "target" should be a selector or an element object');
}
function il() {
  var {
    width: e,
    height: r
  } = xe(window);
  return e > r ? {
    vMin: r,
    vMax: e
  } : {
    vMin: e,
    vMax: r
  };
}
var Ss = (e) => Fe(e) && e.endsWith("rem"), Qv = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), _v = (e) => Fe(e) && e.endsWith("px") || lr(e), xv = (e) => Fe(e) && e.endsWith("%"), ks = (e) => Fe(e) && e.endsWith("vw"), $s = (e) => Fe(e) && e.endsWith("vh"), Ts = (e) => Fe(e) && e.endsWith("vmin"), Ps = (e) => Fe(e) && e.endsWith("vmax"), ef = (e) => Fe(e) && e.startsWith("calc("), rf = (e) => Fe(e) && e.startsWith("var("), je = (e) => {
  if (lr(e))
    return e;
  if (_v(e))
    return +e.replace("px", "");
  if (!at())
    return 0;
  var {
    width: r,
    height: n
  } = xe(window);
  if (ks(e))
    return +e.replace("vw", "") * r / 100;
  if ($s(e))
    return +e.replace("vh", "") * n / 100;
  if (Ss(e)) {
    var a = +e.replace("rem", ""), t = tt(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return Ts(e) ? il().vMin : Ps(e) ? il().vMax : Fe(e) ? R(e) : 0;
}, ye = (e) => {
  if (e != null)
    return xv(e) || ks(e) || $s(e) || Qv(e) || Ss(e) || ef(e) || rf(e) || Ts(e) || Ps(e) ? e : je(e) + "px";
}, or = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = ye(e), a = n.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = ws();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function ll(e) {
  var r = ws();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function io(e) {
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
function nf() {
  return new Promise((e) => {
    br(e);
  });
}
function ht(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = pt(e), s = Oi(e);
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
function Os(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + Gv(a);
    return r[o] = t, r;
  }, {});
}
function af() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function qt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function sr(e) {
  let r = !1;
  no(() => {
    e(), Ne(() => {
      r = !0;
    });
  }), Mn(() => {
    r && e();
  });
}
function Rr(e, r, n, a = {}) {
  if (!at())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Pt(m) ? m() : ut(m), u = (m) => {
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
  Dv(e) && (v = oe(() => e.value, (m, g) => {
    d(g), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return sr(() => {
    u(e);
  }), kt(() => {
    d(e);
  }), en(() => {
    d(e);
  }), f;
}
function Vs(e, r, n) {
  if (!at())
    return;
  Rr(document, r, (t) => {
    const o = ut(e);
    o && !o.contains(t.target) && n(t);
  });
}
var tf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function of(e) {
  const r = et();
  return e in r.provides;
}
function ur(e) {
  if (!of(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Av(e), { childInstances: n, collect: a, clear: t } = r, o = tf(r, ["childInstances", "collect", "clear"]), l = et();
  return {
    index: z(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      no(() => {
        Ne().then(() => {
          a(l, u);
        });
      }), kt(() => {
        Ne().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function lf(e) {
  const r = [], n = (a) => {
    if (a != null && a.component) {
      n(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      $t(t) && (r.push(t), n(t));
    });
  };
  return n(e), r;
}
function dr(e) {
  const r = et(), n = Ae([]), a = [], t = z(() => n.length), o = () => {
    const u = lf(r.subTree);
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
      zv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function sl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ul(e) {
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
function Je(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function sf(e) {
  var r = Rv(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: r.mount(n),
    unmount() {
      r.unmount(), document.body.removeChild(n);
    }
  };
}
function ot(e, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {});
  var a = {
    setup() {
      return () => ps(e, Ao({}, r, n));
    }
  }, {
    unmount: t
  } = sf(a);
  return {
    unmountInstance: t
  };
}
function Ms(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Lv) {
      if (n.type === Ve && Pe(n.children)) {
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
  var e = M(""), r = /* @__PURE__ */ function() {
    var t = ul(function* (o, l, i) {
      if (!Pe(o) || !o.length)
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
    var t = ul(function* (o, l, i, s, u) {
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
function uf(e) {
  Rr(() => window, "hashchange", e), Rr(() => window, "popstate", e);
}
function lo() {
  var e = M(!1);
  return Mn(() => {
    e.value = !1;
  }), en(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var r = "var", n = r + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", r) : o.startsWith("--") ? "" + n + o : n + "__" + o : n, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Pe(s)) {
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
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  if (Pe(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function U(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function hr(e, r) {
  return e === !1 ? null : (e === !0 && r && (e = r), "var-elevation--" + e);
}
function Es(e, r, n) {
  n === void 0 && (n = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = n, i = t ?? "onUpdate:" + r.toString(), s = () => e[r] != null ? e[r] : o;
  if (!a)
    return z({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : k(e[i], d);
      }
    });
  var u = M(s());
  return oe(() => e[r], () => {
    u.value = s();
  }), oe(() => u.value, (d) => {
    l ? l(i, d) : k(e[i], d);
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
  n: Bs
} = ee("ripple"), dl = 250;
function df(e) {
  var {
    zIndex: r,
    position: n
  } = tt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function vf(e, r) {
  var {
    top: n,
    left: a
  } = xe(e), {
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
function Is(e) {
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
      } = vf(this, e), s = document.createElement("div");
      s.classList.add(Bs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), df(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function zo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Bs());
    if (n.length) {
      var a = n[n.length - 1], t = dl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, dl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function Ns() {
  if (!(!af() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function ff(e, r) {
  var n;
  e._ripple = Xt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: zo.bind(e)
  }), e.addEventListener("touchstart", Is, {
    passive: !0
  }), e.addEventListener("touchmove", Ns, {
    passive: !0
  }), e.addEventListener("dragstart", zo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function cf(e) {
  e.removeEventListener("touchstart", Is), e.removeEventListener("touchmove", Ns), e.removeEventListener("dragstart", zo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function mf(e, r) {
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
var Ds = {
  mounted: ff,
  unmounted: cf,
  updated: mf,
  install(e) {
    e.directive("ripple", this);
  }
}, SS = Ds;
const We = Ds;
function pf(e) {
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
    validator: pf
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
function As() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Et(e) {
  yr.locks[e] = 1, As();
}
function Bt(e) {
  delete yr.locks[e], As();
}
function so(e, r) {
  var {
    uid: n
  } = et();
  r && oe(r, (a) => {
    a === !1 ? Bt(n) : a === !0 && e() === !0 && Et(n);
  }), oe(e, (a) => {
    r && r() === !1 || (a === !0 ? Et(n) : Bt(n));
  }), Uv(() => {
    r && r() === !1 || e() === !0 && Et(n);
  }), rt(() => {
    r && r() === !1 || e() === !0 && Bt(n);
  }), Mn(() => {
    r && r() === !1 || e() === !0 && Et(n);
  }), en(() => {
    r && r() === !1 || e() === !0 && Bt(n);
  });
}
function Vt(e, r) {
  var n = M(yr.zIndex);
  return oe(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Lo.apply(this, arguments);
}
function hf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: Er,
  classes: $o
} = ee("popup");
const Sr = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Ot,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Vt(() => e.show, 3), {
      disabled: o
    } = lo(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    so(() => e.show, () => e.lockScroll), oe(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), uf(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Z("div", {
        class: $o(Er("overlay"), d),
        style: Lo({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => Z("div", Be({
      class: $o(Er("content"), Er("--" + e.position), [e.defaultStyle, Er("--content-background-color")], [e.defaultStyle, Er("$-elevation--3")], [e.safeArea, Er("--safe-area")], [e.safeAreaTop, Er("--safe-area-top")]),
      style: {
        zIndex: t.value
      }
    }, a), [k(n.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: g,
        position: y
      } = e;
      return Z(Le, {
        name: Er("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [$e(Z("div", {
          class: $o(Er("$--box"), Er()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), Z(Le, {
          name: g || Er("$-pop-" + y)
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
        return Z(En, {
          to: d,
          disabled: o.value
        }, hf(v = u()) ? v : {
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
var kS = Sr, zs = {
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
function vl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function gf(e) {
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
var {
  n: yf,
  classes: bf
} = ee("icon");
function wf(e, r) {
  return p(), be(
    nt(e.isURL(e.name) ? "img" : "i"),
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
var Ls = x({
  name: "VarIcon",
  props: zs,
  setup(e) {
    var r = M(""), n = M(!1), a = /* @__PURE__ */ function() {
      var t = gf(function* (o, l) {
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
    return oe(() => e.name, a, {
      immediate: !0
    }), {
      n: yf,
      classes: bf,
      nextName: r,
      animateInProgress: n,
      isURL: Wv,
      toNumber: R,
      toSizeUnit: ye
    };
  }
});
Ls.render = wf;
const Oe = Ls;
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
var $S = Oe;
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
var Cf = Ro({
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
const Vi = {
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
}, Rs = {
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
function Mi() {
  var e = {}, r = M({}), n = (o, l) => {
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
    e[o] = Uo({}, e[o], l), a(o);
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
  packs: Us,
  pack: Ze,
  add: Ei,
  use: Bi,
  merge: Fs
} = Mi();
Ei("zh-CN", Vi);
Bi("zh-CN");
var TS = {
  zhCN: Vi,
  enUS: Rs,
  packs: Us,
  pack: Ze,
  add: Ei,
  use: Bi,
  merge: Fs,
  useLocale: Mi
};
const Fo = {
  zhCN: Vi,
  enUS: Rs,
  packs: Us,
  pack: Ze,
  add: Ei,
  use: Bi,
  merge: Fs,
  useLocale: Mi
};
var {
  n: Sf,
  classes: kf
} = ee("action-sheet"), $f = ["onClick"];
function Tf(e, r) {
  var n = te("var-icon"), a = te("var-popup"), t = Ie("ripple");
  return p(), be(
    a,
    Be({
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
      default: ve(() => [D(
        "div",
        Be({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [Y(e.$slots, "title", {}, () => [D(
          "div",
          {
            class: c(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), Y(e.$slots, "actions", {}, () => [(p(!0), $(
          Ve,
          null,
          Ue(e.actions, (o) => $e((p(), $(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), be(
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
            )) : Q("v-if", !0), D(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ne(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            $f
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
var Hs = x({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Cf,
  setup(e) {
    var r = M(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        k(l, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return oe(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: Sf,
      classes: kf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: Ze,
      dt: oo,
      handleSelect: n
    };
  }
});
Hs.render = Tf;
const cn = Hs;
function Ho() {
  return Ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ho.apply(this, arguments);
}
var ln, Ii = {};
function Pf(e) {
  return e === void 0 && (e = {}), Ho({}, Ii, e);
}
function Qr(e) {
  return at() ? new Promise((r) => {
    Qr.close();
    var n = Ae(Pf(e));
    n.teleport = "body", ln = n;
    var {
      unmountInstance: a
    } = ot(cn, n, {
      onSelect: (t) => {
        k(n.onSelect, t), r(t);
      },
      onClose: () => {
        k(n.onClose), r("close");
      },
      onClosed: () => {
        k(n.onClosed), a(), ln === n && (ln = null);
      },
      onRouteChange: () => {
        a(), ln === n && (ln = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }) : Promise.resolve();
}
Qr.setDefaultOptions = function(e) {
  Ii = e;
};
Qr.resetDefaultOptions = function() {
  Ii = {};
};
Qr.close = function() {
  if (ln != null) {
    var e = ln;
    ln = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
Qr.Component = cn;
cn.install = function(e) {
  e.component(cn.name, cn);
};
Qr.install = function(e) {
  e.component(cn.name, cn);
};
var PS = cn;
function Of(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
}
var Vf = {
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
    validator: Of
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
  n: Mf,
  classes: Ef
} = ee("app-bar");
function Bf(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: G(e.rootStyles)
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
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [Y(e.$slots, "default", {}, () => [Se(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : Q("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [Y(e.$slots, "default", {}, () => [Se(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : Q("v-if", !0), D(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [Y(e.$slots, "default", {}, () => [Se(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : Q("v-if", !0), Y(e.$slots, "right")],
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
var Ys = x({
  name: "VarAppBar",
  props: Vf,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(), t = M(), o = () => {
      a.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
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
    return sr(o), ao(o), {
      n: Mf,
      classes: Ef,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ys.render = Bf;
const An = Ys;
An.install = function(e) {
  e.component(An.name, An);
};
var OS = An;
function fl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function uo(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        fl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        fl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Yo.apply(this, arguments);
}
var If = "background-image", Nf = "lazy-loading", Df = "lazy-error", cl = "lazy-attempt", Af = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], jo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ka = [], Kt = [], js = Xv(100), qe = {
  loading: jo,
  error: jo,
  attempt: 3,
  throttleWait: 300,
  events: Af
}, Ni = Pi(Mt, qe.throttleWait);
function vo(e, r) {
  e._lazy.arg === If ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function zf(e) {
  e._lazy.loading && vo(e, e._lazy.loading), Mt();
}
function Lf(e) {
  e._lazy.error && vo(e, e._lazy.error), e._lazy.state = "error", Ai(e), Mt();
}
function Ws(e, r) {
  vo(e, r), e._lazy.state = "success", Ai(e), Mt();
}
function Rf(e) {
  var r;
  Kt.includes(e) || (Kt.push(e), (r = qe.events) == null || r.forEach((n) => {
    e.addEventListener(n, Ni, {
      passive: !0
    });
  }));
}
function Uf() {
  Kt.forEach((e) => {
    var r;
    (r = qe.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Ni);
    });
  }), Kt.length = 0;
}
function Ff(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Nf)) != null ? n : qe.loading,
    error: (a = e.getAttribute(Df)) != null ? a : qe.error,
    attempt: e.getAttribute(cl) ? Number(e.getAttribute(cl)) : qe.attempt
  };
  e._lazy = Yo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), vo(e, jo), k(qe.filter, e._lazy);
}
function Hf(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, js.add(r), Ws(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Lf(e) : Gs(e);
  });
}
function Gs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (js.has(r)) {
      Ws(e, r), e._lazy.attemptLock = !1;
      return;
    }
    zf(e), Hf(e, r);
  }
}
function Di(e) {
  return Wo.apply(this, arguments);
}
function Wo() {
  return Wo = uo(function* (e) {
    yield Lr(), Zv(e) && Gs(e);
  }), Wo.apply(this, arguments);
}
function Mt() {
  Ka.forEach((e) => Di(e));
}
function Yf(e) {
  return Go.apply(this, arguments);
}
function Go() {
  return Go = uo(function* (e) {
    !Ka.includes(e) && Ka.push(e), Jv(e).forEach(Rf), yield Di(e);
  }), Go.apply(this, arguments);
}
function Ai(e) {
  Gt(Ka, e), Ka.length === 0 && Uf();
}
function jf(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function qs(e, r) {
  return qo.apply(this, arguments);
}
function qo() {
  return qo = uo(function* (e, r) {
    Ff(e, r), yield Yf(e);
  }), qo.apply(this, arguments);
}
function Wf(e, r) {
  return Xo.apply(this, arguments);
}
function Xo() {
  return Xo = uo(function* (e, r) {
    if (!jf(e, r)) {
      Ka.includes(e) && (yield Di(e));
      return;
    }
    yield qs(e, r);
  }), Xo.apply(this, arguments);
}
function Gf(e) {
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
var Xs = {
  mounted: qs,
  unmounted: Ai,
  updated: Wf,
  install(e, r) {
    Gf(r), Ni = Pi(Mt, qe.throttleWait), e.directive("lazy", this);
  }
}, VS = Xs;
const gt = Xs;
function qf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Ks = (e) => ["mini", "small", "normal", "large"].includes(e);
function Zs(e) {
  return Ks(e) || lr(e) || Fe(e);
}
var Xf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Zs,
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
    validator: qf,
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
  n: Kf,
  classes: Zf
} = ee("avatar"), Jf = ["src", "lazy-loading", "lazy-error"], Qf = ["src"];
function _f(e, r) {
  var n = Ie("lazy");
  return p(), $(
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
      onClick: r[3] || (r[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), $(
      Ve,
      {
        key: 0
      },
      [e.lazy ? $e((p(), $(
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
          onLoad: r[0] || (r[0] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          })
        },
        null,
        46,
        Jf
      )), [[n, e.src]]) : (p(), $(
        "img",
        {
          key: 1,
          class: c(e.n("image")),
          src: e.src,
          style: G({
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
        Qf
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), $(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: G({
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
var Js = x({
  name: "VarAvatar",
  directives: {
    Lazy: gt
  },
  props: Xf,
  setup(e) {
    var r = M(null), n = M(null), a = M(1), t = () => {
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
      d ? (u._lazy.state === "success" && k(v, s), u._lazy.state === "error" && k(f, s)) : k(v, s);
    }, l = (s) => {
      k(e.onError, s);
    }, i = (s) => {
      k(e.onClick, s);
    };
    return sr(t), ao(t), {
      internalSizeValidator: Ks,
      sizeValidator: Zs,
      toSizeUnit: ye,
      n: Kf,
      classes: Zf,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Js.render = _f;
const zn = Js;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var MS = zn, xf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: ec,
  classes: rc
} = ee("avatar-group");
function nc(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: G(e.rootStyles)
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Qs = x({
  name: "VarAvatarGroup",
  props: xf,
  setup(e) {
    var r = z(() => e.offset == null ? {} : {
      "--avatar-group-offset": ye(e.offset)
    });
    return {
      n: ec,
      classes: rc,
      toSizeUnit: ye,
      rootStyles: r
    };
  }
});
Qs.render = nc;
const Ln = Qs;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var ES = Ln;
function ac(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function tc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var dn = {
  type: {
    type: String,
    default: "circle",
    validator: ac
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: tc
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
  n: oc,
  classes: ic
} = ee("loading"), lc = (e) => (Ra(""), e = e(), Ua(), e), sc = /* @__PURE__ */ lc(() => /* @__PURE__ */ D(
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
)), uc = [sc];
function dc(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [Y(e.$slots, "default"), e.loading ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : Q("v-if", !0)],
      2
      /* CLASS */
    )) : Q("v-if", !0), e.isShow ? (p(), $(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [D(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: G({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          uc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : Q("v-if", !0), (p(!0), $(
        Ve,
        null,
        Ue(e.loadingTypeDict, (n, a) => (p(), $(
          Ve,
          {
            key: a
          },
          [e.type === a ? (p(), $(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), $(
              Ve,
              null,
              Ue(n, (t) => (p(), $(
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
          )) : Q("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), $(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
            color: e.color
          })
        },
        [Y(e.$slots, "description", {}, () => [Se(
          ne(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : Q("v-if", !0)],
      2
      /* CLASS */
    )) : Q("v-if", !0)],
    2
    /* CLASS */
  );
}
var _s = x({
  name: "VarLoading",
  props: dn,
  setup(e, r) {
    var {
      slots: n
    } = r, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = z(() => k(n.default) ? e.loading : !0);
    return {
      n: oc,
      classes: ic,
      multiplySizeUnit: or,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
_s.render = dc;
const Nr = _s;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var BS = Nr, vc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: fc,
  classes: cc
} = ee("hover-overlay");
function mc(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var xs = x({
  name: "VarHoverOverlay",
  props: vc,
  setup() {
    return {
      n: fc,
      classes: cc
    };
  }
});
xs.render = mc;
const mr = xs;
mr.install = function(e) {
  e.component(mr.name, mr);
};
function Pn() {
  var e = M(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var IS = mr;
function eu(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function pc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[ys(t)] = o, n;
  }, {}) : {};
}
function hc(e) {
  var {
    value: r
  } = e._hover, n = pc(e);
  Object.keys(r).forEach((a) => {
    var t = ys(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function zi(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function gc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function ru(e) {
  gc(e), zi(e, e._hover.rawStyle);
}
function nu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Pt(e)) {
    e(this._hover.hovering);
    return;
  }
  zi(this, e);
}
function au() {
  if (this._hover.hovering = !1, Pt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  ru(this);
}
function tu(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  eu(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, hc(e), e.addEventListener("mouseenter", nu), e.addEventListener("mouseleave", au));
}
function ou(e, r) {
  eu(r.arg) || (ru(e), e.removeEventListener("mouseenter", nu), e.removeEventListener("mouseleave", au));
}
function yc(e, r) {
  e._hover && ou(e, r);
}
function bc(e, r) {
  return !Pt(r.value) && e._hover.hovering;
}
function wc(e, r) {
  tu(e, r), bc(e, r) && zi(e, r.value);
}
var iu = {
  mounted: tu,
  unmounted: ou,
  beforeUpdate: yc,
  updated: wc,
  install(e) {
    e.directive("hover", this);
  }
}, NS = iu;
const Ur = iu;
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
function lu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Cc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Sc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var kc = {
  type: {
    type: String,
    validator: lu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Sc
  },
  size: {
    type: String,
    validator: Cc
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
  loadingType: Je(dn, "type"),
  loadingSize: Je(dn, "size"),
  loadingColor: Ko({}, Je(dn, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, su = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function $c() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(su);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function Tc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ur(su);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Pc,
  classes: Oc
} = ee("button"), Vc = ["type", "disabled"];
function Mc(e, r) {
  var n = te("var-loading"), a = te("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return $e((p(), $(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: G({
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
    [e.loading || e.pending ? (p(), be(
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
    )) : Q("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [Y(e.$slots, "default")],
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
    Vc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var uu = x({
  name: "VarButton",
  components: {
    VarLoading: Nr,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Ur
  },
  props: kc,
  setup(e) {
    var r = M(!1), {
      buttonGroup: n
    } = Tc(), {
      hovering: a,
      handleHovering: t
    } = Pn(), o = z(() => {
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
      e.autoLoading && (r.value = !0, u = Pe(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || r.value || l(k(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || r.value || l(k(f, u));
    };
    return {
      n: Pc,
      classes: Oc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
uu.render = Mc;
const rr = uu;
rr.install = function(e) {
  e.component(rr.name, rr);
};
var DS = rr, Ec = {
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
  n: Bc,
  classes: Ic
} = ee("back-top");
function Nc(e, r) {
  var n = te("var-icon"), a = te("var-button");
  return p(), be(
    En,
    {
      to: "body",
      disabled: e.disabled
    },
    [D(
      "div",
      Be({
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
      [Y(e.$slots, "default", {}, () => [Z(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ve(() => [Z(n, {
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
var du = x({
  name: "VarBackTop",
  components: {
    VarButton: rr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Ec,
  setup(e) {
    var r = M(!1), n = M(null), a = M(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = Oi(t);
      ht(t, {
        left: v,
        duration: e.duration,
        animation: bs
      });
    }, l = Pi(() => {
      r.value = pt(t) >= je(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Cs(e.target, "BackTop") : Tn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return no(() => {
      i(), s(), a.value = !1;
    }), Mn(s), kt(u), en(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: ye,
      n: Bc,
      classes: Ic,
      handleClick: o
    };
  }
});
du.render = Nc;
const Rn = du;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var AS = Rn;
function Dc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ac(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var zc = {
  type: {
    type: String,
    default: "default",
    validator: Dc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Ac
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
  n: Lc,
  classes: Rc
} = ee("badge");
function Uc(e, r) {
  var n = te("var-icon");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), Z(
      Le,
      {
        name: e.n("$-badge-fade"),
        persisted: ""
      },
      {
        default: ve(() => [$e(D(
          "span",
          Be({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (p(), be(
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
          )) : Q("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), $(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ne(e.value),
            3
            /* TEXT, CLASS */
          )) : Q("v-if", !0)])],
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
var vu = x({
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: zc,
  setup(e) {
    var r = z(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && R(n) > R(a) ? a + "+" : n;
    });
    return {
      n: Lc,
      classes: Rc,
      value: r
    };
  }
});
vu.render = Uc;
const mn = vu;
mn.install = function(e) {
  e.component(mn.name, mn);
};
var zS = mn, Fc = {
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
}, fu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Hc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = dr(fu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
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
var {
  n: Yc,
  classes: jc
} = ee("bottom-navigation"), {
  n: fo
} = ee("bottom-navigation-item"), ml = fo("--right-half-space"), pl = fo("--left-half-space"), hl = fo("--right-space"), Wc = {
  type: "primary"
};
function Gc(e, r) {
  var n = te("var-button");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (p(), be(
      n,
      Be({
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
    )) : Q("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var cu = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: rr
  },
  props: Fc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(null), t = z(() => e.active), o = z(() => e.activeColor), l = z(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Hc(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((h) => {
      var {
        name: O
      } = h;
      return t.value === O.value;
    }), m = () => u.find((h) => {
      var {
        index: O
      } = h;
      return t.value === O.value;
    }), g = () => {
      lr(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, y = (h) => {
      t.value !== h && (e.onBeforeChange ? b(h) : w(h));
    }, b = (h) => {
      var O = Ut(k(e.onBeforeChange, h));
      Promise.all(O).then((j) => {
        j.every(Boolean) && w(h);
      });
    }, w = (h) => {
      k(e["onUpdate:active"], h), k(e.onChange, h);
    }, V = () => {
      var h = I();
      h.forEach((O) => {
        O.classList.remove(ml, pl, hl);
      });
    }, S = (h) => {
      var O = I(), j = O.length, L = h % 2 === 0;
      O.forEach((K, X) => {
        T(L, K, X, j);
      });
    }, T = (h, O, j, L) => {
      var K = j === L - 1;
      if (!h && K) {
        O.classList.add(hl);
        return;
      }
      var X = j === L / 2 - 1, ie = j === L / 2;
      X ? O.classList.add(ml) : ie && O.classList.add(pl);
    }, I = () => Array.from(a.value.querySelectorAll("." + fo())), P = () => {
      k(e.onFabClick);
    }, N = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(N), oe(() => s.value, v), oe(() => e.fabProps, (h) => {
      i.value = Zo({}, Wc, h);
    }, {
      immediate: !0,
      deep: !0
    }), sr(() => {
      n.fab && S(s.value);
    }), ao(() => {
      V(), n.fab && S(s.value);
    }), {
      n: Yc,
      classes: jc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: P,
      fabProps: i
    };
  }
});
cu.render = Gc;
const Un = cu;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var LS = Un, qc = {
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
function Xc() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(fu);
  return n || Pr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Kc,
  classes: Zc
} = ee("bottom-navigation-item"), Jc = {
  type: "danger",
  dot: !0
};
function Qc(e, r) {
  var n = te("var-icon"), a = te("var-badge"), t = Ie("ripple");
  return $e((p(), $(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: G({
        color: e.computeColorStyle()
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), be(
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
    )) : Q("v-if", !0), Y(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), be(
      a,
      Be({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : Q("v-if", !0), D(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? Q("v-if", !0) : (p(), $(
        Ve,
        {
          key: 0
        },
        [Se(
          ne(e.label),
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
var mu = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: mn,
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: qc,
  setup(e) {
    var r = z(() => e.name), n = z(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Xc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, g = (m = r.value) != null ? m : t.value;
      k(e.onClick, g), k(o.onToggle, g);
    };
    return l(d), oe(() => n.value, (m) => {
      a.value = m === !0 ? Jc : n.value;
    }, {
      immediate: !0
    }), {
      n: Kc,
      classes: Zc,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
mu.render = Qc;
const Fn = mu;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var RS = Fn, _c = {
  separator: {
    type: String
  },
  onClick: U()
}, pu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function xc() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = dr(pu);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function em() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ur(pu);
  return r || Pr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: rm,
  classes: nm
} = ee("breadcrumb");
function am(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [D(
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
    ), e.isLast ? Q("v-if", !0) : Y(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [D(
        "div",
        {
          class: c(e.n("separator"))
        },
        ne((n = e.separator) != null ? n : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var hu = x({
  name: "VarBreadcrumb",
  props: _c,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = em(), t = z(() => r.value === n.length.value - 1), o = z(() => n.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: rm,
      classes: nm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
hu.render = am;
const Hn = hu;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var US = Hn, tm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: om
} = ee("breadcrumbs");
function im(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var gu = x({
  name: "VarBreadcrumbs",
  props: tm,
  setup(e) {
    var r = z(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = xc(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: om
    };
  }
});
gu.render = im;
const Yn = gu;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var FS = Yn;
function lm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function sm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function um(e) {
  return ["normal", "text", "outline"].includes(e);
}
var dm = {
  type: {
    type: String,
    default: "default",
    validator: lm
  },
  size: {
    type: String,
    default: "normal",
    validator: sm
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
    validator: um
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
  n: vm,
  classes: fm
} = ee("button-group");
function cm(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var yu = x({
  name: "VarButtonGroup",
  props: dm,
  setup(e) {
    var {
      bindButtons: r
    } = $c(), n = {
      elevation: z(() => e.elevation),
      type: z(() => e.type),
      size: z(() => e.size),
      color: z(() => e.color),
      textColor: z(() => e.textColor),
      mode: z(() => e.mode)
    };
    return r(n), {
      n: vm,
      classes: fm,
      formatElevation: hr
    };
  }
});
yu.render = cm;
const jn = yu;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var HS = jn;
function mm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var pm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: mm,
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
function gl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function yl(e) {
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
  n: hm,
  classes: gm
} = ee("card"), ym = 500, bm = ["src", "alt"];
function wm(e, r) {
  var n = te("var-icon"), a = te("var-button"), t = Ie("ripple");
  return $e((p(), $(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: G({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
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
      [Y(e.$slots, "image", {}, () => [e.src ? (p(), $(
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
        bm
      )) : Q("v-if", !0)]), D(
        "div",
        {
          class: c(e.n("container"))
        },
        [Y(e.$slots, "title", {}, () => [e.title ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)]), e.$slots.extra ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : Q("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), $(
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
          [Y(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : Q("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), $(
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
        [Y(e.$slots, "close-button", {}, () => [Z(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Tr(e.close, ["stop"])
          },
          {
            default: ve(() => [Z(
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
      )) : Q("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), D(
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
var bu = x({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Oe,
    VarButton: rr
  },
  props: pm,
  setup(e) {
    var r = M(null), n = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = z(() => e.layout === "row"), g = M(!1), y = M(!1), {
      zIndex: b
    } = Vt(() => e.floating, 1);
    so(() => e.floating, () => !m.value);
    var w = "auto", V = "auto", S = null, T = M(null), I = /* @__PURE__ */ function() {
      var O = yl(function* () {
        clearTimeout(T.value), clearTimeout(S), T.value = null, T.value = setTimeout(/* @__PURE__ */ yl(function* () {
          var {
            width: j,
            height: L,
            left: K,
            top: X
          } = xe(r.value);
          a.value = ye(j), t.value = ye(L), o.value = a.value, l.value = t.value, i.value = ye(X), s.value = ye(K), u.value = "fixed", w = i.value, V = s.value, g.value = !0, yield Lr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? ym : 0);
      });
      return function() {
        return O.apply(this, arguments);
      };
    }(), P = () => {
      clearTimeout(S), clearTimeout(T.value), T.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = V, v.value = "0px", f.value = "0", g.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", V = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, N = () => {
      k(e["onUpdate:floating"], !1);
    }, h = (O) => {
      k(e.onClick, O);
    };
    return oe(() => e.floating, (O) => {
      m.value || Ne(() => {
        O ? I() : P();
      });
    }, {
      immediate: !0
    }), {
      n: hm,
      classes: gm,
      toSizeUnit: ye,
      card: r,
      cardFloater: n,
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
      zIndex: b,
      isRow: m,
      close: N,
      showFloatingButtons: g,
      floated: y,
      formatElevation: hr,
      handleClick: h
    };
  }
});
bu.render = wm;
const Wn = bu;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var YS = Wn, Cm = {
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
  n: Sm,
  classes: km
} = ee("cell");
function $m(e, r) {
  var n = te("var-icon"), a = Ie("ripple");
  return $e((p(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "icon", {}, () => [e.icon ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [Z(
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
    )) : Q("v-if", !0)]), D(
      "div",
      {
        class: c(e.n("content"))
      },
      [Y(e.$slots, "default", {}, () => [e.title ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : Q("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ne(e.description),
        3
        /* TEXT, CLASS */
      )) : Q("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [Y(e.$slots, "extra")],
      2
      /* CLASS */
    )) : Q("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var wu = x({
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: Cm,
  setup(e) {
    var r = z(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ye(e.borderOffset),
      "--cell-border-right": ye(e.borderOffset)
    }), n = (a) => {
      k(e.onClick, a);
    };
    return {
      n: Sm,
      classes: km,
      toSizeUnit: ye,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
wu.render = $m;
const pn = wu;
pn.install = function(e) {
  e.component(pn.name, pn);
};
var jS = pn, Tm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Pm
} = ee("form-details"), Om = {
  key: 0
}, Vm = {
  key: 0
};
function Mm(e, r) {
  return p(), be(
    Le,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), $(
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
          [Z(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), $(
                "div",
                Om,
                ne(e.errorMessage),
                1
                /* TEXT */
              )) : Q("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        ), D(
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
              default: ve(() => [e.extraMessage ? (p(), $(
                "div",
                Vm,
                ne(e.extraMessage),
                1
                /* TEXT */
              )) : Q("v-if", !0)]),
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
      )) : Q("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var Cu = x({
  name: "VarFormDetails",
  props: Tm,
  setup: () => ({
    n: Pm
  })
});
Cu.render = Mm;
const _e = Cu;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var WS = _e, Em = {
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
}, Su = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Bm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(Su);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Im() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ur(Su);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
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
var ku = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(ku), a = et(), t = n ? (o) => {
    n(Jo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: r,
    form: e,
    bindForm: t
  };
}
function Nm() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = dr(ku);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: Dm,
  classes: Am
} = ee("checkbox");
function zm(e, r) {
  var n = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("hover"), l = Ie("ripple");
  return p(), $(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [$e((p(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [Z(
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
        }, () => [Z(
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
var $u = x({
  name: "VarCheckbox",
  directives: {
    Ripple: We,
    Hover: Ur
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  props: Em,
  setup(e) {
    var r = M(!1), n = z(() => r.value === e.checkedValue), a = z(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Im(), {
      hovering: i,
      handleHovering: s
    } = Pn(), {
      form: u,
      bindForm: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Or(), y = (h) => {
      Ne(() => {
        var {
          validateTrigger: O,
          rules: j,
          modelValue: L
        } = e;
        f(O, h, j, L);
      });
    }, b = (h) => {
      r.value = h;
      var {
        checkedValue: O,
        onChange: j
      } = e;
      k(e["onUpdate:modelValue"], r.value), k(j, r.value), y("onChange"), h === O ? o == null || o.onChecked(O) : o == null || o.onUnchecked(O);
    }, w = (h) => {
      var {
        disabled: O,
        readonly: j,
        checkedValue: L,
        uncheckedValue: K,
        onClick: X
      } = e;
      if (!(u != null && u.disabled.value || O) && (k(X, h), !(u != null && u.readonly.value || j))) {
        t.value = !0;
        var ie = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && ie || b(n.value ? K : L);
      }
    }, V = (h) => {
      var {
        checkedValue: O,
        uncheckedValue: j
      } = e;
      r.value = h.includes(O) ? O : j;
    }, S = () => {
      t.value = !1;
    }, T = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, I = (h) => {
      var {
        checkedValue: O,
        uncheckedValue: j
      } = e, L = ![O, j].includes(h);
      L && (h = n.value ? j : O), b(h);
    }, P = () => m(e.rules, e.modelValue);
    oe(() => e.modelValue, (h) => {
      r.value = h;
    }, {
      immediate: !0
    });
    var N = {
      checkedValue: a,
      checked: n,
      sync: V,
      validate: P,
      resetValidation: g,
      reset: T,
      resetWithAnimation: S
    };
    return k(l, N), k(d, N), {
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Dm,
      classes: Am,
      handleClick: w,
      toggle: I,
      reset: T,
      validate: P,
      resetValidation: g
    };
  }
});
$u.render = zm;
const hn = $u;
hn.install = function(e) {
  e.component(hn.name, hn);
};
var GS = hn;
function Lm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Rm = {
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
    validator: Lm
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
  n: Um,
  classes: Fm
} = ee("checkbox-group");
function Hm(e, r) {
  var n = te("var-form-details");
  return p(), $(
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
    ), Z(
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
var Tu = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: _e
  },
  props: Rm,
  setup(e) {
    var r = z(() => e.max), n = z(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Bm(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), v = z(() => i.value), f = (N) => {
      Ne(() => {
        var {
          validateTrigger: h,
          rules: O,
          modelValue: j
        } = e;
        s(h, N, O, j);
      });
    }, m = (N) => {
      k(e["onUpdate:modelValue"], N), k(e.onChange, N), f("onChange");
    }, g = (N) => {
      var {
        modelValue: h
      } = e;
      h.includes(N) || m([...h, N]);
    }, y = (N) => {
      var {
        modelValue: h
      } = e;
      h.includes(N) && m(h.filter((O) => O !== N));
    }, b = () => t.forEach((N) => {
      var {
        sync: h
      } = N;
      return h(e.modelValue);
    }), w = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, V = () => {
      var N = t.map((O) => {
        var {
          checkedValue: j
        } = O;
        return j.value;
      }), h = el(N);
      return w(), k(e["onUpdate:modelValue"], h), h;
    }, S = () => {
      var N = t.filter((O) => {
        var {
          checked: j
        } = O;
        return !j.value;
      }).map((O) => {
        var {
          checkedValue: j
        } = O;
        return j.value;
      }), h = el(N);
      return w(), k(e["onUpdate:modelValue"], h), h;
    }, T = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    oe(() => e.modelValue, b, {
      deep: !0
    }), oe(() => a.value, b);
    var P = {
      max: r,
      checkedCount: n,
      onChecked: g,
      onUnchecked: y,
      validate: I,
      resetValidation: d,
      reset: T,
      errorMessage: v
    };
    return o(P), k(l, P), {
      errorMessage: i,
      n: Um,
      classes: Fm,
      checkAll: V,
      inverseAll: S,
      reset: T,
      validate: I,
      resetValidation: d
    };
  }
});
Tu.render = Hm;
const Gn = Tu;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var qS = Gn;
function Ym(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function jm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Wm = {
  type: {
    type: String,
    default: "default",
    validator: Ym
  },
  size: {
    type: String,
    default: "normal",
    validator: jm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(zs, "name"),
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
  n: rn,
  classes: Gm
} = ee("chip");
function qm(e, r) {
  var n = te("var-icon");
  return p(), be(
    Le,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [D(
        "span",
        Be({
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
        ), Y(e.$slots, "right"), e.closable ? (p(), $(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: r[0] || (r[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [Z(
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
        )) : Q("v-if", !0)],
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
var Pu = x({
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Wm,
  setup(e) {
    var r = z(() => {
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
    }), n = z(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = rn(o ? "$--flex" : "$--inline-flex"), d = i ? rn("plain") + " " + rn("plain-" + l) : rn("--" + l), v = s ? rn("--round") : null;
      return [rn("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: rn,
      classes: Gm,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Pu.render = qm;
const gn = Pu;
gn.install = function(e) {
  e.component(gn.name, gn);
};
var XS = gn;
function Xm(e) {
  return ["row", "column"].includes(e);
}
function Km(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Zm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Jm = {
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
    validator: Xm
  },
  justify: {
    type: String,
    validator: Km
  },
  align: {
    type: String,
    validator: Zm
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
}, Ou = Symbol("ROW_BIND_COL_KEY");
function Qm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(Ou);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function _m() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(Ou);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: It,
  classes: xm
} = ee("col");
function ep(e, r) {
  return p(), $(
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
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Vu = x({
  name: "VarCol",
  props: Jm,
  setup(e) {
    var r = M({
      left: 0,
      right: 0
    }), n = z(() => R(e.span)), a = z(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = _m(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if ($i(d)) {
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
      classes: xm,
      padding: r,
      toNumber: R,
      toSizeUnit: ye,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: qt
    };
  }
});
Vu.render = ep;
const qn = Vu;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var KS = qn, Mu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function rp() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = dr(Mu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var np = {
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
  n: ap
} = ee("collapse");
function tp(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Eu = x({
  name: "VarCollapse",
  props: np,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = rp(), t = z(() => e.modelValue), o = z(() => e.offset), l = z(() => e.divider), i = z(() => e.elevation), s = () => !e.accordion && !Pe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Pe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (y, b) => s() ? b ? e.accordion ? y : [...e.modelValue, y] : e.accordion ? null : e.modelValue.filter((w) => w !== y) : null, d = (y, b) => {
      var w = u(y, b);
      k(e["onUpdate:modelValue"], w), k(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((b) => {
          var {
            name: w
          } = b;
          return e.modelValue === w.value;
        });
      var y = n.filter((b) => {
        var {
          name: w
        } = b;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return y.length ? y : void 0;
    }, f = () => e.accordion ? n.find((y) => {
      var {
        index: b,
        name: w
      } = y;
      return w.value === void 0 && e.modelValue === b.value;
    }) : n.filter((y) => {
      var {
        index: b,
        name: w
      } = y;
      return w.value === void 0 && e.modelValue.includes(b.value);
    }), m = () => {
      if (s()) {
        var y = v() || f();
        if (e.accordion && !y || !e.accordion && !y.length) {
          n.forEach((b) => {
            b.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((b) => {
          var w = e.accordion ? y === b : y.includes(b);
          b.init(e.accordion, w);
        });
      }
    }, g = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(g), oe(() => r.value, () => Ne().then(m)), oe(() => e.modelValue, () => Ne().then(m)), {
      n: ap,
      divider: l
    };
  }
});
Eu.render = tp;
const Xn = Eu;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ZS = Xn;
function op() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(Mu);
  return n || Pr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var ip = {
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
  n: lp,
  classes: sp
} = ee("collapse-item");
function up(e, r) {
  var n = te("var-icon");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: G("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
        onClick: r[0] || (r[0] = (a) => e.toggle())
      },
      [D(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [Y(e.$slots, "title", {}, () => [Se(
          ne(e.title),
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
        [Y(e.$slots, "icon", {}, () => [Z(
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
    ), $e(D(
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
    ), [[$n, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Bu = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: ip,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = op(), t = !0, o = M(null), l = M(!1), i = M(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = z(() => e.name), g = (I, P) => {
      s.value === void 0 || I && Pe(s.value) || P === i.value || (i.value = P, y(!0));
    }, y = (I) => {
      e.disabled || I || f(e.name || r.value, !i.value);
    }, b = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = I + "px", t && io(() => {
            t && S();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, V = () => {
      if (o.value) {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = I + "px", br(() => {
          o.value.style.height = "0px";
        });
      }
    }, S = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, T = {
      index: r,
      name: m,
      init: g
    };
    return a(T), oe(i, (I) => {
      I ? b() : V();
    }), {
      n: lp,
      start: w,
      classes: sp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: y,
      contentEl: o,
      transitionend: S,
      formatElevation: hr
    };
  }
});
Bu.render = up;
const Kn = Bu;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var JS = Kn, dp = {
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
  n: vp
} = ee("countdown"), Qo = 1e3, _o = 60 * Qo, xo = 60 * _o, bl = 24 * xo;
function fp(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", Tt(to(e.timeData)), () => [Se(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Iu = x({
  name: "VarCountdown",
  props: dp,
  setup(e) {
    var r = M(""), n = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, y) => {
      var b = Object.values(y), w = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (w.forEach((T, I) => {
        g.includes(T) ? g = g.replace(T, Da("" + b[I], 2, "0")) : b[I + 1] += b[I] * V[I];
      }), g.includes("S")) {
        var S = Da("" + b[b.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", S) : g.includes("SS") ? g = g.replace("SS", S.slice(0, 2)) : g = g.replace("S", S.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var y = Math.floor(g / bl), b = Math.floor(g % bl / xo), w = Math.floor(g % xo / _o), V = Math.floor(g % _o / Qo), S = Math.floor(g % Qo), T = {
        days: y,
        hours: b,
        minutes: w,
        seconds: V,
        milliseconds: S
      };
      n.value = T, k(e.onChange, n.value), r.value = s(e.format, T);
    }, d = () => {
      var {
        time: g,
        onEnd: y
      } = e, b = performance.now();
      if (a || (a = b + R(g)), l = a - b, l < 0 && (l = 0), u(l), l === 0) {
        k(y);
        return;
      }
      t && (o = br(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, ll(o);
    }, m = () => {
      a = 0, t = !1, ll(o), d();
    };
    return oe(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Mn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), en(() => {
      i = t, f();
    }), rt(f), {
      showTime: r,
      timeData: n,
      n: vp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Iu.render = fp;
const Zn = Iu;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var QS = Zn;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ya = 9e15, Bn = 1e9, ei = "0123456789abcdef", Zt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Jt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ri = {
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
}, Nu, jr, he = !0, co = "[DecimalError] ", On = co + "Invalid argument: ", Du = co + "Precision limit exceeded", Au = co + "crypto unavailable", zu = "[object Decimal]", nr = Math.floor, Xe = Math.pow, cp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, mp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, pp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Lu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Dr = 1e7, me = 7, hp = 9007199254740991, gp = Zt.length - 1, ni = Jt.length - 1, q = { toStringTag: zu };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), fe(e);
};
q.ceil = function() {
  return fe(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, r) {
  var n, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(On + r);
  return n = a.cmp(e), n < 0 ? e : a.cmp(r) > 0 ? r : new t(a);
};
q.comparedTo = q.cmp = function(e) {
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
q.cosine = q.cos = function() {
  var e, r, n = this, a = n.constructor;
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + me, a.rounding = 1, n = yp(a, Yu(a, n)), a.precision = e, a.rounding = r, fe(jr == 2 || jr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (he = !1, o = d.s * Xe(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = er(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Xe(n, 1 / 3), e = nr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ee(u.plus(d).times(i), u.plus(s), l + 2, 1), er(i.d).slice(0, l) === (n = er(a.d)).slice(0, l))
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
q.decimalPlaces = q.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - nr(this.e / me)) * me, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
q.dividedBy = q.div = function(e) {
  return Ee(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var r = this, n = r.constructor;
  return fe(Ee(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return fe(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, r, n, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / po(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Za(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = n, l.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Za(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / po(5, e)), t = Za(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, fe(t, r, n, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Ee(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
q.inverseCosine = q.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Ir(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Ir(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Ir(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, he = !1, n = n.times(n).minus(1).sqrt().plus(n), he = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, he = !1, n = n.times(n).plus(1).sqrt().plus(n), he = !0, a.precision = e, a.rounding = r, n.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Ir(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= ni)
      return l = Ir(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ni)
      return l = Ir(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / me + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (he = !1, r = Math.ceil(i / me), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), he = !0, fe(l, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && nr(this.e / me) > this.d.length - 2;
};
q.isNaN = function() {
  return !this.s;
};
q.isNegative = q.isNeg = function() {
  return this.s < 0;
};
q.isPositive = q.isPos = function() {
  return this.s > 0;
};
q.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
q.lessThan = q.lt = function(e) {
  return this.cmp(e) < 0;
};
q.lessThanOrEqualTo = q.lte = function(e) {
  return this.cmp(e) < 1;
};
q.logarithm = q.log = function(e) {
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
  if (he = !1, i = v + m, l = vn(u, i), a = r ? Qt(d, i + 10) : vn(e, i), s = Ee(l, a, i, 1), yt(s.d, t = v, f))
    do
      if (i += 10, l = vn(u, i), a = r ? Qt(d, i + 10) : vn(e, i), s = Ee(l, a, i, 1), !o) {
        +er(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (yt(s.d, t += 10, f));
  return he = !0, fe(s, v, f);
};
q.minus = q.sub = function(e) {
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
  if (n = nr(e.e / me), d = nr(m.e / me), u = u.slice(), o = d - n, o) {
    for (v = o < 0, v ? (r = u, o = -o, l = f.length) : (r = f, n = d, l = u.length), a = Math.max(Math.ceil(i / me), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; )
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
  return u[0] ? (e.d = u, e.e = mo(u, n), he ? fe(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? fe(new a(n), a.precision, a.rounding) : (he = !1, a.modulo == 9 ? (r = Ee(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ee(n, e, 0, a.modulo, 1), r = r.times(e), he = !0, n.minus(r));
};
q.naturalExponential = q.exp = function() {
  return ai(this);
};
q.naturalLogarithm = q.ln = function() {
  return vn(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
q.plus = q.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), he ? fe(e, i, s) : e;
  if (o = nr(v.e / me), a = nr(e.e / me), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / me), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Dr | 0, u[t] %= Dr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = mo(u, a), he ? fe(e, i, s) : e;
};
q.precision = q.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(On + e);
  return n.d ? (r = Ru(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
q.round = function() {
  var e = this, r = e.constructor;
  return fe(new r(e), e.e + 1, r.rounding);
};
q.sine = q.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + me, a.rounding = 1, n = wp(a, Yu(a, n)), a.precision = e, a.rounding = r, fe(jr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (he = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = er(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = nr((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ee(l, o, n + 2, 1)).times(0.5), er(o.d).slice(0, n) === (r = er(a.d)).slice(0, n))
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
q.tangent = q.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, fe(jr == 2 || jr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (n = nr(d.e / me) + nr(e.e / me), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + r, o[t--] = i % Dr | 0, r = i / Dr | 0;
    o[t] = (o[t] + r) % Dr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = mo(o, n), he ? fe(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, r) {
  return Li(this, 2, e, r);
};
q.toDecimalPlaces = q.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (pr(e, 0, Bn), r === void 0 ? r = a.rounding : pr(r, 0, 8), fe(n, e + n.e + 1, r));
};
q.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Fr(a, !0) : (pr(e, 0, Bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e + 1, r), n = Fr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
q.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Fr(t) : (pr(e, 0, Bn), r === void 0 ? r = o.rounding : pr(r, 0, 8), a = fe(new o(t), e + t.e + 1, r), n = Fr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
q.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, y = m.constructor;
  if (!g)
    return new y(m);
  if (u = n = new y(1), a = s = new y(0), r = new y(a), o = r.e = Ru(g) - m.e - 1, l = o % me, r.d[0] = Xe(10, l < 0 ? me + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error(On + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (he = !1, i = new y(er(g)), d = y.precision, y.precision = o = g.length * me * 2; v = Ee(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], y.precision = d, he = !0, f;
};
q.toHexadecimal = q.toHex = function(e, r) {
  return Li(this, 16, e, r);
};
q.toNearest = function(e, r) {
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
  return e.d[0] ? (he = !1, n = Ee(n, e, 0, r, 1).times(e), he = !0, fe(n)) : (e.s = n.s, n = e), n;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, r) {
  return Li(this, 8, e, r);
};
q.toPower = q.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Xe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (r = nr(e.e / me), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= hp)
    return t = Uu(s, i, n, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Xe(+i, u), r = n == 0 || !isFinite(n) ? nr(u * (Math.log("0." + er(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (he = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = ai(e.times(vn(i, a + n)), a), t.d && (t = fe(t, a + 5, 1), yt(t.d, a, o) && (r = a + 10, t = fe(ai(e.times(vn(i, r + n)), r), r + 5, 1), +er(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, he = !0, s.rounding = o, fe(t, a, o));
};
q.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Fr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (pr(e, 1, Bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e, r), n = Fr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
q.toSignificantDigits = q.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (pr(e, 1, Bn), r === void 0 ? r = a.rounding : pr(r, 0, 8)), fe(new a(n), e, r);
};
q.toString = function() {
  var e = this, r = e.constructor, n = Fr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
q.truncated = q.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, r = e.constructor, n = Fr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function er(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = me - a.length, n && (o += an(n)), o += a;
    l = e[r], a = l + "", n = me - a.length, n && (o += an(n));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function pr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(On + e);
}
function yt(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += me, t = 0) : (t = Math.ceil((r + 1) / me), r %= me), o = Xe(10, me - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Xe(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Xe(10, r - 3) - 1, l;
}
function Ft(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += ei.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function yp(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / po(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Za(e, 1, r.times(t), new e(1));
  for (var o = n; o--; ) {
    var l = r.times(r);
    r = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= n, r;
}
var Ee = function() {
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
    var u, d, v, f, m, g, y, b, w, V, S, T, I, P, N, h, O, j, L, K, X = a.constructor, ie = a.s == t.s ? 1 : -1, E = a.d, C = t.d;
    if (!E || !E[0] || !C || !C[0])
      return new X(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (E ? C && E[0] == C[0] : !C) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          E && E[0] == 0 || !C ? ie * 0 : ie / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Dr, m = me, d = nr(a.e / m) - nr(t.e / m)), L = C.length, O = E.length, w = new X(ie), V = w.d = [], v = 0; C[v] == (E[v] || 0); v++)
      ;
    if (C[v] > (E[v] || 0) && d--, o == null ? (P = o = X.precision, l = X.rounding) : i ? P = o + (a.e - t.e) + 1 : P = o, P < 0)
      V.push(1), g = !0;
    else {
      if (P = P / m + 2 | 0, v = 0, L == 1) {
        for (f = 0, C = C[0], P++; (v < O || f) && P--; v++)
          N = f * s + (E[v] || 0), V[v] = N / C | 0, f = N % C | 0;
        g = f || v < O;
      } else {
        for (f = s / (C[0] + 1) | 0, f > 1 && (C = e(C, f, s), E = e(E, f, s), L = C.length, O = E.length), h = L, S = E.slice(0, L), T = S.length; T < L; )
          S[T++] = 0;
        K = C.slice(), K.unshift(0), j = C[0], C[1] >= s / 2 && ++j;
        do
          f = 0, u = r(C, S, L, T), u < 0 ? (I = S[0], L != T && (I = I * s + (S[1] || 0)), f = I / j | 0, f > 1 ? (f >= s && (f = s - 1), y = e(C, f, s), b = y.length, T = S.length, u = r(y, S, b, T), u == 1 && (f--, n(y, L < b ? K : C, b, s))) : (f == 0 && (u = f = 1), y = C.slice()), b = y.length, b < T && y.unshift(0), n(S, y, T, s), u == -1 && (T = S.length, u = r(C, S, L, T), u < 1 && (f++, n(S, L < T ? K : C, T, s))), T = S.length) : u === 0 && (f++, S = [0]), V[v++] = f, u && S[0] ? S[T++] = E[h] || 0 : (S = [E[h]], T = 1);
        while ((h++ < O || S[0] !== void 0) && P--);
        g = S[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      w.e = d, Nu = g;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
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
        o += me, l = r, d = v[f = 0], s = d / Xe(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / me), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= me, l = o - me + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= me, l = o - me + t, s = l < 0 ? 0 : d / Xe(10, t - l - 1) % 10 | 0;
      }
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Xe(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Xe(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Xe(10, (me - r % me) % me), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Xe(10, me - o), v[f] = l > 0 ? (d / Xe(10, t - l) % Xe(10, l) | 0) * i : 0), u)
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
function Fr(e, r, n) {
  if (!e.isFinite())
    return Hu(e);
  var a, t = e.e, o = er(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + an(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + an(-t - 1) + o, n && (a = n - l) > 0 && (o += an(a))) : t >= l ? (o += an(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + an(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += an(a))), o;
}
function mo(e, r) {
  var n = e[0];
  for (r *= me; n >= 10; n /= 10)
    r++;
  return r;
}
function Qt(e, r, n) {
  if (r > gp)
    throw he = !0, n && (e.precision = n), Error(Du);
  return fe(new e(Zt), r, 1, !0);
}
function Ir(e, r, n) {
  if (r > ni)
    throw Error(Du);
  return fe(new e(Jt), r, n, !0);
}
function Ru(e) {
  var r = e.length - 1, n = r * me + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      n--;
    for (r = e[0]; r >= 10; r /= 10)
      n++;
  }
  return n;
}
function an(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Uu(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / me + 4);
  for (he = !1; ; ) {
    if (n % 2 && (o = o.times(r), Cl(o.d, l) && (t = !0)), n = nr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Cl(r.d, l);
  }
  return he = !0, o;
}
function wl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Fu(e, r, n) {
  for (var a, t = new e(r[0]), o = 0; ++o < r.length; )
    if (a = new e(r[o]), a.s)
      t[n](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ai(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (he = !1, s = g) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Xe(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), n = n.times(++d), i = l.plus(Ee(o, n, s, 1)), er(i.d).slice(0, s) === er(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = fe(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && yt(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = g, m, he = !0);
      else
        return f.precision = g, l;
    }
    l = i;
  }
}
function vn(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, y = e, b = y.d, w = y.constructor, V = w.rounding, S = w.precision;
  if (y.s < 0 || !b || !b[0] || !y.e && b[0] == 1 && b.length == 1)
    return new w(b && !b[0] ? -1 / 0 : y.s != 1 ? NaN : b ? 0 : y);
  if (r == null ? (he = !1, d = S) : d = r, w.precision = d += g, n = er(b), a = n.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      y = y.times(e), n = er(y.d), a = n.charAt(0), m++;
    o = y.e, a > 1 ? (y = new w("0." + n), o++) : y = new w(a + "." + n.slice(1));
  } else
    return u = Qt(w, d + 2, S).times(o + ""), y = vn(new w(a + "." + n.slice(1)), d - g).plus(u), w.precision = S, r == null ? fe(y, S, V, he = !0) : y;
  for (v = y, s = l = y = Ee(y.minus(1), y.plus(1), d, 1), f = fe(y.times(y), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), er(u.d).slice(0, d) === er(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Qt(w, d + 2, S).times(o + ""))), s = Ee(s, new w(m), d, 1), r == null)
        if (yt(s.d, d - g, V, i))
          w.precision = d += g, u = l = y = Ee(v.minus(1), v.plus(1), d, 1), f = fe(y.times(y), d, 1), t = i = 1;
        else
          return fe(s, w.precision = S, V, he = !0);
      else
        return w.precision = S, s;
    s = u, t += 2;
  }
}
function Hu(e) {
  return String(e.s * e.s / 0);
}
function ti(e, r) {
  var n, a, t;
  for ((n = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (a = r.search(/e/i)) > 0 ? (n < 0 && (n = a), n += +r.slice(a + 1), r = r.substring(0, a)) : n < 0 && (n = r.length), a = 0; r.charCodeAt(a) === 48; a++)
    ;
  for (t = r.length; r.charCodeAt(t - 1) === 48; --t)
    ;
  if (r = r.slice(a, t), r) {
    if (t -= a, e.e = n = n - a - 1, e.d = [], a = (n + 1) % me, n < 0 && (a += me), a < t) {
      for (a && e.d.push(+r.slice(0, a)), t -= me; a < t; )
        e.d.push(+r.slice(a, a += me));
      r = r.slice(a), a = me - r.length;
    } else
      a -= t;
    for (; a--; )
      r += "0";
    e.d.push(+r), he && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function bp(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Lu.test(r))
      return ti(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (mp.test(r))
    n = 16, r = r.toLowerCase();
  else if (cp.test(r))
    n = 2;
  else if (pp.test(r))
    n = 8;
  else
    throw Error(On + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Uu(a, new a(n), o, o * 2)), u = Ft(r, n, Dr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = mo(u, d), e.d = u, he = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Xe(2, s) : fn.pow(2, s))), he = !0, e);
}
function wp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Za(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / po(5, n)), r = Za(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Za(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / me);
  for (he = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = Ee(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Ee(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return he = !0, l.d.length = d + 1, l;
}
function po(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Yu(e, r) {
  var n, a = r.s < 0, t = Ir(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return jr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    jr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return jr = wl(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    jr = wl(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Li(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = n !== void 0;
  if (g ? (pr(n, 1, Bn), a === void 0 ? a = m.rounding : pr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Hu(e);
  else {
    for (d = Fr(e), l = d.indexOf("."), g ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ft(Fr(f), 10, t), f.e = f.d.length), v = Ft(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, n, a, 0, t), v = e.d, o = e.e, u = Nu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ei.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ft(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += ei.charAt(v[l]);
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
function Cl(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Cp(e) {
  return new this(e).abs();
}
function Sp(e) {
  return new this(e).acos();
}
function kp(e) {
  return new this(e).acosh();
}
function $p(e, r) {
  return new this(e).plus(r);
}
function Tp(e) {
  return new this(e).asin();
}
function Pp(e) {
  return new this(e).asinh();
}
function Op(e) {
  return new this(e).atan();
}
function Vp(e) {
  return new this(e).atanh();
}
function Mp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Ir(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Ir(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Ir(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Ee(e, r, o, 1)), r = Ir(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Ee(e, r, o, 1)), n;
}
function Ep(e) {
  return new this(e).cbrt();
}
function Bp(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Ip(e, r, n) {
  return new this(e).clamp(r, n);
}
function Np(e) {
  if (!e || typeof e != "object")
    throw Error(co + "Object expected");
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
    if (n = o[r], t && (this[n] = ri[n]), (a = e[n]) !== void 0)
      if (nr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(On + n + ": " + a);
  if (n = "crypto", t && (this[n] = ri[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Au);
      else
        this[n] = !1;
    else
      throw Error(On + n + ": " + a);
  return this;
}
function Dp(e) {
  return new this(e).cos();
}
function Ap(e) {
  return new this(e).cosh();
}
function ju(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Sl(o)) {
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
      return ti(u, o.toString());
    } else if (s !== "string")
      throw Error(On + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Lu.test(o) ? ti(u, o) : bp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Np, t.clone = ju, t.isDecimal = Sl, t.abs = Cp, t.acos = Sp, t.acosh = kp, t.add = $p, t.asin = Tp, t.asinh = Pp, t.atan = Op, t.atanh = Vp, t.atan2 = Mp, t.cbrt = Ep, t.ceil = Bp, t.clamp = Ip, t.cos = Dp, t.cosh = Ap, t.div = zp, t.exp = Lp, t.floor = Rp, t.hypot = Up, t.ln = Fp, t.log = Hp, t.log10 = jp, t.log2 = Yp, t.max = Wp, t.min = Gp, t.mod = qp, t.mul = Xp, t.pow = Kp, t.random = Zp, t.round = Jp, t.sign = Qp, t.sin = _p, t.sinh = xp, t.sqrt = eh, t.sub = rh, t.sum = nh, t.tan = ah, t.tanh = th, t.trunc = oh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function zp(e, r) {
  return new this(e).div(r);
}
function Lp(e) {
  return new this(e).exp();
}
function Rp(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Up() {
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
function Sl(e) {
  return e instanceof fn || e && e.toStringTag === zu || !1;
}
function Fp(e) {
  return new this(e).ln();
}
function Hp(e, r) {
  return new this(e).log(r);
}
function Yp(e) {
  return new this(e).log(2);
}
function jp(e) {
  return new this(e).log(10);
}
function Wp() {
  return Fu(this, arguments, "lt");
}
function Gp() {
  return Fu(this, arguments, "gt");
}
function qp(e, r) {
  return new this(e).mod(r);
}
function Xp(e, r) {
  return new this(e).mul(r);
}
function Kp(e, r) {
  return new this(e).pow(r);
}
function Zp(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : pr(e, 1, Bn), a = Math.ceil(e / me), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = r[o], t >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); o < a; )
        t = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Au);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= me, a && e && (t = Xe(10, me - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    n = 0, i = [0];
  else {
    for (n = -1; i[0] === 0; n -= me)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < me && (n -= me - a);
  }
  return l.e = n, l.d = i, l;
}
function Jp(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function Qp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function _p(e) {
  return new this(e).sin();
}
function xp(e) {
  return new this(e).sinh();
}
function eh(e) {
  return new this(e).sqrt();
}
function rh(e, r) {
  return new this(e).sub(r);
}
function nh() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (he = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return he = !0, fe(n, this.precision, this.rounding);
}
function ah(e) {
  return new this(e).tan();
}
function th(e) {
  return new this(e).tanh();
}
function oh(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var fn = q.constructor = ju(ri);
Zt = new fn(Zt);
Jt = new fn(Jt);
var ih = {
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
  n: lh,
  classes: sh
} = ee("counter"), kl = 100, $l = 600, uh = ["inputmode", "readonly", "disabled"];
function dh(e, r) {
  var n = te("var-icon"), a = te("var-button"), t = te("var-form-details");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      Be({
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
          default: ve(() => [Z(n, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), $e(D(
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
          "onUpdate:modelValue": r[0] || (r[0] = (o) => e.inputValue = o),
          onChange: r[1] || (r[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        uh
      ), [[Fv, e.inputValue]]), Z(
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
          default: ve(() => [Z(n, {
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
var Wu = x({
  name: "VarCounter",
  components: {
    VarButton: rr,
    VarIcon: Oe,
    VarFormDetails: _e
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: ih,
  setup(e) {
    var r = M(""), {
      bindForm: n,
      form: a
    } = Vr(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = Or(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), y = (C) => {
      Ne(() => {
        var {
          validateTrigger: B,
          rules: _,
          modelValue: F
        } = e;
        o(B, C, _, F);
      });
    }, b = () => {
      var {
        min: C
      } = e;
      k(e["onUpdate:modelValue"], C != null ? R(C) : 0), i();
    }, w = {
      reset: b,
      validate: g,
      resetValidation: i
    }, V = z(() => {
      var {
        max: C,
        modelValue: B
      } = e;
      return C != null && R(B) >= R(C);
    }), S = z(() => {
      var {
        min: C,
        modelValue: B
      } = e;
      return C != null && R(B) <= R(C);
    }), T = (C) => {
      var {
        decimalLength: B,
        max: _,
        min: F
      } = e, H = R(C);
      return _ != null && H > R(_) && (H = R(_)), F != null && H < R(F) && (H = R(F)), C = String(H), B != null && (C = H.toFixed(R(B))), C;
    }, I = (C) => {
      var {
        lazyChange: B,
        onBeforeChange: _
      } = e, {
        value: F
      } = C.target, H = T(F);
      B ? k(_, R(H), E) : ie(H), y("onInputChange");
    }, P = () => {
      var {
        disabled: C,
        readonly: B,
        disableDecrement: _,
        decrementButton: F,
        lazyChange: H,
        step: A,
        modelValue: W,
        onDecrement: J,
        onBeforeChange: re
      } = e;
      if (!(u != null && u.value || s != null && s.value || C || B || _ || !F) && !S.value) {
        var ue = new fn(R(W)).minus(new fn(R(A))).toString(), ge = T(ue), Ce = R(ge);
        k(J, Ce), H ? k(re, Ce, E) : (ie(ge), y("onDecrement"));
      }
    }, N = () => {
      var {
        disabled: C,
        readonly: B,
        disableIncrement: _,
        incrementButton: F,
        lazyChange: H,
        step: A,
        modelValue: W,
        onIncrement: J,
        onBeforeChange: re
      } = e;
      if (!(u != null && u.value || s != null && s.value || C || B || _ || !F) && !V.value) {
        var ue = new fn(R(W)).plus(new fn(R(A))).toString(), ge = T(ue), Ce = R(ge);
        k(J, Ce), H ? k(re, Ce, E) : (ie(ge), y("onIncrement"));
      }
    }, h = () => {
      var {
        press: C,
        lazyChange: B
      } = e;
      !C || B || (m = window.setTimeout(() => {
        X();
      }, $l));
    }, O = () => {
      var {
        press: C,
        lazyChange: B
      } = e;
      !C || B || (f = window.setTimeout(() => {
        K();
      }, $l));
    }, j = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, L = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, K = () => {
      d = window.setTimeout(() => {
        N(), K();
      }, kl);
    }, X = () => {
      v = window.setTimeout(() => {
        P(), X();
      }, kl);
    }, ie = (C) => {
      r.value = C;
      var B = R(C);
      k(e["onUpdate:modelValue"], B);
    }, E = (C) => {
      ie(T(String(C))), y("onLazyChange");
    };
    return k(n, w), oe(() => e.modelValue, (C) => {
      ie(T(String(C))), k(e.onChange, R(C));
    }), ie(T(String(e.modelValue))), {
      n: lh,
      classes: sh,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: S,
      validate: g,
      reset: b,
      resetValidation: i,
      handleChange: I,
      decrement: P,
      increment: N,
      pressDecrement: h,
      pressIncrement: O,
      releaseDecrement: j,
      releaseIncrement: L,
      toSizeUnit: ye,
      toNumber: R
    };
  }
});
Wu.render = dh;
const Jn = Wu;
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
var _S = Jn, Gu = 60, qu = Gu * 60, Xu = qu * 24, vh = Xu * 7, Ja = 1e3, To = Gu * Ja, Tl = qu * Ja, fh = Xu * Ja, ch = vh * Ja, Ri = "millisecond", ja = "second", Wa = "minute", Ga = "hour", tn = "day", Ht = "week", Br = "month", Ku = "quarter", on = "year", qa = "date", mh = "YYYY-MM-DDTHH:mm:ssZ", Pl = "Invalid Date", ph = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, hh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const gh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var oi = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, yh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + oi(t, 2, "0") + ":" + oi(o, 2, "0");
}, bh = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Br), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Br);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, wh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, Ch = function(r) {
  var n = {
    M: Br,
    y: on,
    w: Ht,
    d: tn,
    D: qa,
    h: Ga,
    m: Wa,
    s: ja,
    ms: Ri,
    Q: Ku
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Sh = function(r) {
  return r === void 0;
};
const kh = {
  s: oi,
  z: yh,
  m: bh,
  a: wh,
  p: Ch,
  u: Sh
};
var dt = "en", Qn = {};
Qn[dt] = gh;
var Ui = function(r) {
  return r instanceof ho;
}, _t = function e(r, n, a) {
  var t;
  if (!r)
    return dt;
  if (typeof r == "string") {
    var o = r.toLowerCase();
    Qn[o] && (t = o), n && (Qn[o] = n, t = o);
    var l = r.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = r.name;
    Qn[i] = r, t = i;
  }
  return !a && t && (dt = t), t || !a && dt;
}, se = function(r, n) {
  if (Ui(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new ho(a);
}, $h = function(r, n) {
  return se(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Me = kh;
Me.l = _t;
Me.i = Ui;
Me.w = $h;
var Th = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Me.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(ph);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, ho = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = _t(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = Th(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Me;
  }, r.isValid = function() {
    return this.$d.toString() !== Pl;
  }, r.isSame = function(a, t) {
    var o = se(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return se(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < se(a);
  }, r.$g = function(a, t, o) {
    return Me.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Me.u(t) ? !0 : t, i = Me.p(a), s = function(w, V) {
      var S = Me.w(o.$u ? Date.UTC(o.$y, V, w) : new Date(o.$y, V, w), o);
      return l ? S : S.endOf(tn);
    }, u = function(w, V) {
      var S = [0, 0, 0, 0], T = [23, 59, 59, 999];
      return Me.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : T).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case on:
        return l ? s(1, 0) : s(31, 11);
      case Br:
        return l ? s(1, v) : s(0, v + 1);
      case Ht: {
        var g = this.$locale().weekStart || 0, y = (d < g ? d + 7 : d) - g;
        return s(l ? f - y : f + (6 - y), v);
      }
      case tn:
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
    var o, l = Me.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[tn] = i + "Date", o[qa] = i + "Date", o[Br] = i + "Month", o[on] = i + "FullYear", o[Ga] = i + "Hours", o[Wa] = i + "Minutes", o[ja] = i + "Seconds", o[Ri] = i + "Milliseconds", o)[l], u = l === tn ? this.$D + (t - this.$W) : t;
    if (l === Br || l === on) {
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
      var m = se(o);
      return Me.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Br)
      return this.set(Br, this.$M + a);
    if (i === on)
      return this.set(on, this.$y + a);
    if (i === tn)
      return s(1);
    if (i === Ht)
      return s(7);
    var u = (l = {}, l[Wa] = To, l[Ga] = Tl, l[ja] = Ja, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Me.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Pl;
    var l = a || mh, i = Me.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function(S, T, I, P) {
      return S && (S[T] || S(t, l)) || I[T].slice(0, P);
    }, y = function(S) {
      return Me.s(s % 12 || 12, S, "0");
    }, b = m || function(V, S, T) {
      var I = V < 12 ? "AM" : "PM";
      return T ? I.toLowerCase() : I;
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
      h: y(1),
      hh: y(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: Me.s(u, 2, "0"),
      s: String(this.$s),
      ss: Me.s(this.$s, 2, "0"),
      SSS: Me.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(hh, function(V, S) {
      return S || w[V] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Me.p(t), s = se(a), u = (s.utcOffset() - this.utcOffset()) * To, d = this - s, v = Me.m(this, s);
    return v = (l = {}, l[on] = v / 12, l[Br] = v, l[Ku] = v / 3, l[Ht] = (d - u) / ch, l[tn] = (d - u) / fh, l[Ga] = d / Tl, l[Wa] = d / To, l[ja] = d / Ja, l)[i] || d, o ? v : Me.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Br).$D;
  }, r.$locale = function() {
    return Qn[this.$L];
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
}(), Zu = ho.prototype;
se.prototype = Zu;
[["$ms", Ri], ["$s", ja], ["$m", Wa], ["$H", Ga], ["$W", tn], ["$M", Br], ["$y", on], ["$D", qa]].forEach(function(e) {
  Zu[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
se.extend = function(e, r) {
  return e.$i || (e(r, ho, se), e.$i = !0), se;
};
se.locale = _t;
se.isDayjs = Ui;
se.unix = function(e) {
  return se(e * 1e3);
};
se.en = Qn[dt];
se.Ls = Qn;
se.p = {};
const Ju = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, Qu = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Ph(e) {
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
}], st = [{
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
}], Oh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Ph
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
  n: Vh
} = ee("picker-header");
function Mh(e, r) {
  var n = te("var-icon"), a = te("var-button");
  return p(), $(
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
        onClick: r[0] || (r[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ve(() => [Z(n, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), D(
      "div",
      {
        class: c(e.n("value")),
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [Z(
        Le,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), $(
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
        onClick: r[2] || (r[2] = (t) => e.checkDate("next"))
      },
      {
        default: ve(() => [Z(n, {
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
var _u = x({
  name: "PanelHeader",
  components: {
    VarButton: rr,
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
    } = r, a = M(!1), t = M(0), o = z(() => {
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
    return oe(() => e.date, () => {
      t.value = 0;
    }), {
      n: Vh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
_u.render = Mh;
const xu = _u;
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
se.extend(Ju);
se.extend(Qu);
var {
  n: Nt,
  classes: Eh
} = ee("month-picker"), {
  n: Dt
} = ee("date-picker");
function Bh(e, r) {
  var n = te("panel-header"), a = te("var-button");
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
      },
      [Z(
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
      ), Z(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), $("ul", {
            key: e.panelKey
          }, [(p(!0), $(
            Ve,
            null,
            Ue(e.MONTH_LIST, (t) => (p(), $("li", {
              key: t.index
            }, [Z(
              a,
              Be({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, ii({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [Se(
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
var ed = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: rr,
    PanelHeader: xu
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
    } = r, [a, t] = e.current.split("-"), o = M(!1), l = M(0), i = M(null), s = Ae({
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
          max: I
        }
      } = e, P = !0, N = !0, h = S + "-" + V;
      return I && (P = se(h).isSameOrBefore(se(I), "month")), T && (N = se(h).isSameOrAfter(se(T), "month")), P && N;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: T,
          chooseRangeMonth: I
        },
        componentProps: {
          type: P,
          range: N
        }
      } = e;
      if (N) {
        if (!I.length)
          return !1;
        var h = se(V).isSameOrBefore(se(I[1]), "month"), O = se(V).isSameOrAfter(se(I[0]), "month");
        return h && O;
      }
      return P === "month" ? S.includes(V) : T.some((j) => j.includes(V));
    }, g = (V) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: T
        },
        componentProps: {
          allowedDates: I,
          color: P,
          multiple: N,
          range: h
        }
      } = e, O = T + "-" + V, j = () => h || N ? m(O) : (S == null ? void 0 : S.index) === V && u.value, L = () => f(V) ? I ? !I(O) : !1 : !0, K = L(), X = () => K ? !0 : h || N ? !m(O) : !u.value || (S == null ? void 0 : S.index) !== V, ie = () => d.value && t === V && e.componentProps.showCurrent ? (h || N || u.value) && K ? !0 : h || N ? !m(O) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, E = () => K ? "" : ie() ? P ?? "" : j() ? "" : Dt() + "-color-cover", C = E().startsWith(Dt());
      return {
        outline: ie(),
        text: X(),
        color: X() ? "" : P,
        textColor: C ? "" : E(),
        [Dt() + "-color-cover"]: C,
        class: Eh(Nt("button"), [K, Nt("button--disabled")]),
        disabled: K
      };
    }, y = (V, S) => {
      var T = S.currentTarget;
      T.classList.contains(Nt("button--disabled")) || n("choose-month", V);
    }, b = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, n("check-preview", "year", V);
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
      T && (s.right = !se("" + (R(V) + 1)).isSameOrBefore(se(T), "year")), S && (s.left = !se("" + (R(V) - 1)).isSameOrAfter(se(S), "year"));
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
      chooseMonth: y,
      checkDate: b
    };
  }
});
ed.render = Bh;
const Ih = ed;
var {
  n: Ol,
  classes: Nh
} = ee("year-picker"), Dh = ["onClick"];
function Ah(e, r) {
  return p(), $(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), $(
      Ve,
      null,
      Ue(e.yearList, (n) => (p(), $(
        "li",
        {
          key: n,
          class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
          style: G({
            color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(n)
        },
        ne(n),
        15,
        Dh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var rd = x({
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
    } = r, a = z(() => {
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
        var d = se(i).format("YYYY-MM-D"), v = R(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = se(s).format("YYYY-MM-D"), m = R(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return sr(() => {
      var o = document.querySelector("." + Ol("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Ol,
      classes: Nh,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
rd.render = Ah;
const zh = rd;
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, li.apply(this, arguments);
}
se.extend(Ju);
se.extend(Qu);
var {
  n: Ha,
  classes: Lh
} = ee("day-picker"), {
  n: At
} = ee("date-picker");
function Rh(e, r) {
  var n = te("panel-header"), a = te("var-button");
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
      },
      [Z(
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
      ), Z(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), $("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), $(
              Ve,
              null,
              Ue(e.sortWeekList, (t) => (p(), $(
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
          ), D(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(p(!0), $(
              Ve,
              null,
              Ue(e.days, (t, o) => (p(), $("li", {
                key: o
              }, [Z(
                a,
                Be({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, li({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [Se(
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
var nd = x({
  name: "DayPickerPanel",
  components: {
    VarButton: rr,
    PanelHeader: xu
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
    } = r, [a, t, o] = e.current.split("-"), l = M([]), i = M(!1), s = M(0), u = M(null), d = Ae({
      left: !1,
      right: !1
    }), v = z(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = z(() => {
      var h;
      return e.choose.chooseYear === e.preview.previewYear && ((h = e.choose.chooseMonth) == null ? void 0 : h.index) === e.preview.previewMonth.index;
    }), m = z(() => {
      var h = st.findIndex((O) => O.index === e.componentProps.firstDayOfWeek);
      return h === -1 || h === 0 ? st : st.slice(h).concat(st.slice(0, h));
    }), g = (h) => {
      var O, j;
      return (O = (j = Ze.value.datePickerWeekDict) == null ? void 0 : j[h].abbr) != null ? O : "";
    }, y = (h) => h > 0 ? h : "", b = () => {
      var {
        preview: {
          previewMonth: h,
          previewYear: O
        }
      } = e, j = se(O + "-" + h.index).daysInMonth(), L = se(O + "-" + h.index + "-01").day(), K = m.value.findIndex((X) => X.index === "" + L);
      l.value = [...Array(K).fill(-1), ...Array.from(Array(j + 1).keys())].filter((X) => X);
    }, w = () => {
      var {
        preview: {
          previewYear: h,
          previewMonth: O
        },
        componentProps: {
          max: j,
          min: L
        }
      } = e;
      if (j) {
        var K = h + "-" + (R(O.index) + 1);
        d.right = !se(K).isSameOrBefore(se(j), "month");
      }
      if (L) {
        var X = h + "-" + (R(O.index) - 1);
        d.left = !se(X).isSameOrAfter(se(L), "month");
      }
    }, V = (h) => {
      var {
        preview: {
          previewYear: O,
          previewMonth: j
        },
        componentProps: {
          min: L,
          max: K
        }
      } = e, X = !0, ie = !0, E = O + "-" + j.index + "-" + h;
      return K && (X = se(E).isSameOrBefore(se(K), "day")), L && (ie = se(E).isSameOrAfter(se(L), "day")), X && ie;
    }, S = (h) => {
      var {
        choose: {
          chooseDays: O,
          chooseRangeDay: j
        },
        componentProps: {
          range: L
        }
      } = e;
      if (L) {
        if (!j.length)
          return !1;
        var K = se(h).isSameOrBefore(se(j[1]), "day"), X = se(h).isSameOrAfter(se(j[0]), "day");
        return K && X;
      }
      return O.includes(h);
    }, T = (h) => {
      if (h < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ha("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: O
        },
        preview: {
          previewYear: j,
          previewMonth: L
        },
        componentProps: {
          allowedDates: K,
          color: X,
          multiple: ie,
          range: E
        }
      } = e, C = j + "-" + L.index + "-" + h, B = () => E || ie ? S(C) : R(O) === h && f.value, _ = () => V(h) ? K ? !K(C) : !1 : !0, F = _(), H = () => F ? !0 : E || ie ? !S(C) : !f.value || R(O) !== h, A = () => v.value && R(o) === h && e.componentProps.showCurrent ? (E || ie || f.value) && F ? !0 : E || ie ? !S(C) : f.value ? O !== o : !0 : !1, W = () => F ? "" : A() ? X ?? "" : B() ? "" : At() + "-color-cover", J = W().startsWith(At());
      return {
        text: H(),
        outline: A(),
        textColor: J ? "" : W(),
        [At() + "-color-cover"]: J,
        class: Lh(Ha("button"), Ha("button--usable"), [F, Ha("button--disabled")]),
        disabled: F
      };
    }, I = (h) => {
      i.value = h === "prev", s.value += h === "prev" ? -1 : 1, n("check-preview", "month", h);
    }, P = (h, O) => {
      var j = O.currentTarget;
      j.classList.contains(Ha("button--disabled")) || n("choose-day", h);
    }, N = (h) => {
      u.value.checkDate(h);
    };
    return sr(() => {
      b(), w();
    }), oe(() => e.preview, () => {
      b(), w();
    }), {
      n: Ha,
      nDate: At,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: N,
      filterDay: y,
      getDayAbbr: g,
      checkDate: I,
      chooseDay: P,
      buttonProps: T
    };
  }
});
nd.render = Rh;
const Uh = nd;
var {
  n: Fh,
  classes: Hh
} = ee("date-picker");
function Yh(e, r) {
  var n = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: G({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: r[0] || (r[0] = (o) => e.clickEl("year"))
        },
        [Y(e.$slots, "year", {
          year: e.chooseYear
        }, () => [Se(
          ne(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: r[1] || (r[1] = (o) => e.clickEl("date"))
        },
        [Z(
          Le,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), $("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [Se(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [Se(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [Se(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), $("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [Se(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [Se(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "date", Tt(Be({
                key: 2
              }, e.slotProps)), () => [Se(
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
    ), D(
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
      [Z(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), be(
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
          )) : e.getPanelType === "month" ? (p(), be(
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
          )) : e.getPanelType === "date" ? (p(), be(
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
          )) : Q("v-if", !0)]),
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
var ad = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Ih,
    YearPickerPanel: zh,
    DayPickerPanel: Uh
  },
  props: Oh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = se().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Yt.find((le) => le.index === i), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), g = M(), y = M(s), b = M(l), w = M(!1), V = M([]), S = M([]), T = M([]), I = M([]), P = M(null), N = M(null), h = Ae({
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
    }), O = z(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: V.value,
      chooseDays: S.value,
      chooseRangeMonth: T.value,
      chooseRangeDay: I.value
    })), j = z(() => ({
      previewMonth: y.value,
      previewYear: b.value
    })), L = z(() => {
      var {
        multiple: le,
        range: we
      } = e;
      if (we)
        return T.value.length ? T.value[0] + " ~ " + T.value[1] : "";
      var pe = "";
      if (f.value) {
        var ke, Te;
        pe = (ke = (Te = Ze.value.datePickerMonthDict) == null ? void 0 : Te[f.value.index].name) != null ? ke : "";
      }
      return le ? "" + V.value.length + Ze.value.datePickerSelected : pe;
    }), K = z(() => {
      var le, we, pe, ke, {
        multiple: Te,
        range: Re
      } = e;
      if (Re) {
        var tr = I.value.map((So) => se(So).format("YYYY-MM-DD"));
        return tr.length ? tr[0] + " ~ " + tr[1] : "";
      }
      if (Te)
        return "" + S.value.length + Ze.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var wr = se(m.value + "-" + f.value.index + "-" + g.value).day(), Fa = st.find((So) => So.index === "" + wr), Qi = (le = (we = Ze.value.datePickerWeekDict) == null ? void 0 : we[Fa.index].name) != null ? le : "", Iv = (pe = (ke = Ze.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? pe : "", Nv = Da(g.value, 2, "0");
      return Ze.value.lang === "zh-CN" ? f.value.index + "-" + Nv + " " + Qi.slice(0, 3) : Qi.slice(0, 3) + ", " + Iv.slice(0, 3) + " " + g.value;
    }), X = z(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), ie = z(() => !e.touchable || ["", "year"].includes(X.value)), E = z(() => {
      var le, we, pe, ke, Te = se(m.value + "-" + ((le = f.value) == null ? void 0 : le.index) + "-" + g.value).day(), Re = g.value ? Da(g.value, 2, "0") : "";
      return {
        week: "" + Te,
        year: (we = m.value) != null ? we : "",
        month: (pe = (ke = f.value) == null ? void 0 : ke.index) != null ? pe : "",
        date: Re
      };
    }), C = z(() => O.value.chooseRangeDay.map((le) => se(le).format("YYYY-MM-DD"))), B = z(() => m.value === b.value), _ = z(() => {
      var le;
      return ((le = f.value) == null ? void 0 : le.index) === y.value.index;
    }), F = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, H = (le) => {
      if (!ie.value) {
        var {
          clientX: we,
          clientY: pe
        } = le.touches[0];
        r = we, n = pe;
      }
    }, A = (le, we) => le >= we && le > 20 ? "x" : "y", W = (le) => {
      if (!ie.value) {
        var {
          clientX: we,
          clientY: pe
        } = le.touches[0], ke = we - r, Te = pe - n;
        t = A(Math.abs(ke), Math.abs(Te)), a = ke > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(ie.value || t !== "x")) {
        var le = X.value === "month" ? P : N;
        io(() => {
          le.value.forwardRef(a), Ye();
        });
      }
    }, re = (le, we) => {
      var pe = we === "month" ? T : I;
      if (pe.value = v.value ? [le, le] : [pe.value[0], le], v.value = !v.value, v.value) {
        var ke = se(pe.value[0]).isAfter(pe.value[1]), Te = ke ? [pe.value[1], pe.value[0]] : [...pe.value];
        k(e["onUpdate:modelValue"], Te), k(e.onChange, Te);
      }
    }, ue = (le, we) => {
      var pe = we === "month" ? V : S, ke = we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Te = pe.value.map((tr) => se(tr).format(ke)), Re = Te.findIndex((tr) => tr === le);
      Re === -1 ? Te.push(le) : Te.splice(Re, 1), k(e["onUpdate:modelValue"], Te), k(e.onChange, Te);
    }, ge = (le, we) => !m.value || !f.value ? !1 : B.value ? le === "month" ? we.index < f.value.index : _.value ? we < R(g.value) : f.value.index > y.value.index : m.value > b.value, Ce = (le) => {
      var {
        readonly: we,
        range: pe,
        multiple: ke,
        onChange: Te,
        "onUpdate:modelValue": Re
      } = e;
      if (!(le < 0 || we)) {
        w.value = ge("day", le);
        var tr = b.value + "-" + y.value.index + "-" + le, wr = se(tr).format("YYYY-MM-DD");
        pe ? re(wr, "day") : ke ? ue(wr, "day") : (k(Re, wr), k(Te, wr));
      }
    }, ar = (le) => {
      var {
        type: we,
        readonly: pe,
        range: ke,
        multiple: Te,
        onChange: Re,
        onPreview: tr,
        "onUpdate:modelValue": wr
      } = e;
      if (w.value = ge("month", le), we === "month" && !pe) {
        var Fa = b.value + "-" + le.index;
        ke ? re(Fa, "month") : Te ? ue(Fa, "month") : (k(wr, Fa), k(Re, Fa));
      } else
        y.value = le, k(tr, R(b.value), R(y.value.index));
      d.value = !1;
    }, ae = (le) => {
      b.value = "" + le, u.value = !1, d.value = !0, k(e.onPreview, R(b.value), R(y.value.index));
    }, de = (le, we) => {
      var pe = we === "prev" ? -1 : 1;
      if (le === "year")
        b.value = "" + (R(b.value) + pe);
      else {
        var ke = R(y.value.index) + pe;
        ke < 1 && (b.value = "" + (R(b.value) - 1), ke = 12), ke > 12 && (b.value = "" + (R(b.value) + 1), ke = 1), y.value = Yt.find((Te) => R(Te.index) === ke);
      }
      k(e.onPreview, R(b.value), R(y.value.index));
    }, ce = () => (e.multiple || e.range) && !Pe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Pe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, De = (le) => Pe(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ke = (le, we) => {
      var pe = we === "month" ? T : I, ke = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = le.map((wr) => se(wr).format(ke)).slice(0, 2), Re = pe.value.some((wr) => De(wr));
      if (!Re) {
        pe.value = Te;
        var tr = se(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && tr && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, Ge = (le, we) => {
      var pe = we === "month" ? V : S, ke = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = Array.from(new Set(le.map((Re) => se(Re).format(ke))));
      pe.value = Te.filter((Re) => Re !== "Invalid Date");
    }, He = (le) => {
      var we = se(le).format("YYYY-MM-D");
      if (!De(we)) {
        var [pe, ke, Te] = we.split("-"), Re = Yt.find((tr) => tr.index === ke);
        f.value = Re, m.value = pe, g.value = Te, y.value = Re, b.value = pe;
      }
    }, Ye = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return oe(() => e.modelValue, (le) => {
      if (!(!ce() || De(le) || !le))
        if (e.range) {
          if (!Pe(le))
            return;
          v.value = le.length !== 1, Ke(le, e.type);
        } else if (e.multiple) {
          if (!Pe(le))
            return;
          Ge(le, e.type);
        } else
          He(le);
    }, {
      immediate: !0
    }), oe(X, Ye), {
      n: Fh,
      classes: Hh,
      monthPanelEl: P,
      dayPanelEl: N,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: b,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: L,
      getDateTitle: K,
      getPanelType: X,
      getChoose: O,
      getPreview: j,
      componentProps: h,
      slotProps: E,
      formatRange: C,
      clickEl: F,
      handleTouchstart: H,
      handleTouchmove: W,
      handleTouchend: J,
      getChooseDay: Ce,
      getChooseMonth: ar,
      getChooseYear: ae,
      checkPreview: de,
      formatElevation: hr
    };
  }
});
ad.render = Yh;
const _n = ad;
_n.install = function(e) {
  e.component(_n.name, _n);
};
var xS = _n;
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, si.apply(this, arguments);
}
function jh(e) {
  return ["left", "center", "right"].includes(e);
}
var Wh = si({
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
    validator: jh
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
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ui.apply(this, arguments);
}
var {
  n: Gh,
  classes: qh
} = ee("dialog");
function Xh(e, r) {
  var n = te("var-button"), a = te("var-popup");
  return p(), be(
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
      default: ve(() => [D(
        "div",
        Be({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: ui({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: c(e.n("title"))
          },
          [Y(e.$slots, "title", {}, () => [Se(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), D(
          "div",
          {
            class: c(e.n("message")),
            style: G({
              textAlign: e.messageAlign
            })
          },
          [Y(e.$slots, "default", {}, () => [Se(
            ne(e.message),
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
          [e.cancelButton ? (p(), be(
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
              default: ve(() => [Se(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Q("v-if", !0), e.confirmButton ? (p(), be(
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
              default: ve(() => [Se(
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Q("v-if", !0)],
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
var td = x({
  name: "VarDialog",
  components: {
    VarPopup: Sr,
    VarButton: rr
  },
  inheritAttrs: !1,
  props: Wh,
  setup(e) {
    var r = M(!1), n = M(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
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
      r.value = i;
    }, {
      immediate: !0
    }), oe(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        n.value = !1;
        return;
      }
      n.value = i;
    }, {
      immediate: !0
    }), {
      n: Gh,
      classes: qh,
      pack: Ze,
      dt: oo,
      popupShow: r,
      popupCloseOnClickOverlay: n,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ye
    };
  }
});
td.render = Xh;
const yn = td;
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
var sn, eo = {};
function Kh(e) {
  return e === void 0 && (e = {}), Fe(e) ? xt({}, eo, {
    message: e
  }) : xt({}, eo, e);
}
function _r(e) {
  return at() ? new Promise((r) => {
    _r.close();
    var n = Kh(e), a = Ae(n);
    a.teleport = "body", sn = a;
    var {
      unmountInstance: t
    } = ot(yn, a, {
      onConfirm: () => {
        k(a.onConfirm), r("confirm");
      },
      onCancel: () => {
        k(a.onCancel), r("cancel");
      },
      onClose: () => {
        k(a.onClose), r("close");
      },
      onClosed: () => {
        k(a.onClosed), t(), sn === a && (sn = null);
      },
      onRouteChange: () => {
        t(), sn === a && (sn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
_r.setDefaultOptions = function(e) {
  eo = e;
};
_r.resetDefaultOptions = function() {
  eo = {};
};
_r.close = function() {
  if (sn != null) {
    var e = sn;
    sn = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
yn.install = function(e) {
  e.component(yn.name, yn);
};
_r.install = function(e) {
  e.component(yn.name, yn);
};
_r.Component = yn;
var ek = yn, Zh = {
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
  n: Jh,
  classes: Qh
} = ee("divider");
function _h(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [Y(e.$slots, "default", {}, () => [e.description ? (p(), $(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : Q("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var od = x({
  name: "VarDivider",
  props: Zh,
  setup(e, r) {
    var {
      slots: n
    } = r, a = Ae({
      withText: !1
    }), t = z(() => Io(e.inset) ? e.inset : !0), o = z(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Io(i) || i === 0)
        return Xa({}, d);
      var v = R(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Xa({}, d, {
        height: "calc(80% - " + ye(f) + ")"
      }) : Xa({}, d, {
        width: "calc(100% - " + ye(f) + ")",
        left: v > 0 ? ye(f) : ye(0)
      });
    }), l = () => {
      a.withText = !!n.default || !!e.description;
    };
    return sr(() => {
      l();
    }), ao(() => {
      l();
    }), Xa({
      n: Jh,
      classes: Qh
    }, Hv(a), {
      style: o,
      isInset: t
    });
  }
});
od.render = _h;
const xn = od;
xn.install = function(e) {
  e.component(xn.name, xn);
};
var rk = xn, xh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return xh[r];
  });
}
var Wr = "top", Vn = "bottom", Aa = "right", bn = "left", go = "auto", yo = [Wr, Vn, Aa, bn], bo = "start", bt = "end", eg = "clippingParents", id = "viewport", it = "popper", rg = "reference", Vl = /* @__PURE__ */ yo.reduce(function(e, r) {
  return e.concat([r + "-" + bo, r + "-" + bt]);
}, []), ld = /* @__PURE__ */ [].concat(yo, [go]).reduce(function(e, r) {
  return e.concat([r, r + "-" + bo, r + "-" + bt]);
}, []), ng = "beforeRead", ag = "read", tg = "afterRead", og = "beforeMain", ig = "main", lg = "afterMain", sg = "beforeWrite", ug = "write", dg = "afterWrite", di = [ng, ag, tg, og, ig, lg, sg, ug, dg];
function Gr(e) {
  return e.split("-")[0];
}
var vg = {
  start: "end",
  end: "start"
};
function Ml(e) {
  return e.replace(/start|end/g, function(r) {
    return vg[r];
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
function za(e) {
  var r = Mr(e).Element;
  return e instanceof r || e instanceof Element;
}
function kr(e) {
  var r = Mr(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function Fi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function In(e) {
  return ((za(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var vt = Math.max, El = Math.min, Qa = Math.round;
function vi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function sd() {
  return !/^((?!chrome|android).)*safari/i.test(vi());
}
function _a(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Qa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Qa(a.height) / e.offsetHeight || 1);
  var l = za(e) ? Mr(e) : window, i = l.visualViewport, s = !sd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Hi(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Yi(e) {
  return _a(In(e)).left + Hi(e).scrollLeft;
}
function fg(e, r) {
  var n = Mr(e), a = In(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = sd();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Yi(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function cg(e) {
  var r, n = In(e), a = Hi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = vt(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = vt(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Yi(e), s = -a.scrollTop;
  return Ar(t || n).direction === "rtl" && (i += vt(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Hr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wo(e) {
  return Hr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Fi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    In(e)
  );
}
function ji(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function ud(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : kr(e) && ji(e) ? e : ud(wo(e));
}
function ft(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = ud(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], ji(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ft(wo(l)))
  );
}
function mg(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function Bl(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function pg(e) {
  var r = /firefox/i.test(vi()), n = /Trident/i.test(vi());
  if (n && kr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = wo(e);
  for (Fi(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Hr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Wi(e) {
  for (var r = Mr(e), n = Bl(e); n && mg(n) && Ar(n).position === "static"; )
    n = Bl(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && Ar(n).position === "static") ? r : n || pg(e) || r;
}
function hg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Fi(n)) {
    var a = r;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function fi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function gg(e, r) {
  var n = _a(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Il(e, r, n) {
  return r === id ? fi(fg(e, n)) : za(r) ? gg(r, n) : fi(cg(In(e)));
}
function yg(e) {
  var r = ft(wo(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && kr(e) ? Wi(e) : e;
  return za(a) ? r.filter(function(t) {
    return za(t) && hg(t, a) && Hr(t) !== "body";
  }) : [];
}
function bg(e, r, n, a) {
  var t = r === "clippingParents" ? yg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Il(e, u, a);
    return s.top = vt(d.top, s.top), s.right = El(d.right, s.right), s.bottom = El(d.bottom, s.bottom), s.left = vt(d.left, s.left), s;
  }, Il(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function wt(e) {
  return e.split("-")[1];
}
function wg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function dd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Gr(a) : null, o = a ? wt(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case Wr:
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
    case Aa:
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
  var u = t ? wg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case bo:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case bt:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function Cg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Sg(e) {
  return Object.assign({}, Cg(), e);
}
function kg(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function vd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? eg : i, u = n.rootBoundary, d = u === void 0 ? id : u, v = n.elementContext, f = v === void 0 ? it : v, m = n.altBoundary, g = m === void 0 ? !1 : m, y = n.padding, b = y === void 0 ? 0 : y, w = Sg(typeof b != "number" ? b : kg(b, yo)), V = f === it ? rg : it, S = e.rects.popper, T = e.elements[g ? V : f], I = bg(za(T) ? T : T.contextElement || In(e.elements.popper), s, d, l), P = _a(e.elements.reference), N = dd({
    reference: P,
    element: S,
    strategy: "absolute",
    placement: t
  }), h = fi(Object.assign({}, S, N)), O = f === it ? h : P, j = {
    top: I.top - O.top + w.top,
    bottom: O.bottom - I.bottom + w.bottom,
    left: I.left - O.left + w.left,
    right: O.right - I.right + w.right
  }, L = e.modifiersData.offset;
  if (f === it && L) {
    var K = L[t];
    Object.keys(j).forEach(function(X) {
      var ie = [Aa, Vn].indexOf(X) >= 0 ? 1 : -1, E = [Wr, Vn].indexOf(X) >= 0 ? "y" : "x";
      j[X] += K[E] * ie;
    });
  }
  return j;
}
function $g(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? ld : s, d = wt(a), v = d ? i ? Vl : Vl.filter(function(g) {
    return wt(g) === d;
  }) : yo, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, y) {
    return g[y] = vd(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gr(y)], g;
  }, {});
  return Object.keys(m).sort(function(g, y) {
    return m[g] - m[y];
  });
}
function Tg(e) {
  if (Gr(e) === go)
    return [];
  var r = jt(e);
  return [Ml(e), r, Ml(r)];
}
function Pg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, g = m === void 0 ? !0 : m, y = n.allowedAutoPlacements, b = r.options.placement, w = Gr(b), V = w === b, S = s || (V || !g ? [jt(b)] : Tg(b)), T = [b].concat(S).reduce(function(re, ue) {
      return re.concat(Gr(ue) === go ? $g(r, {
        placement: ue,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : ue);
    }, []), I = r.rects.reference, P = r.rects.popper, N = /* @__PURE__ */ new Map(), h = !0, O = T[0], j = 0; j < T.length; j++) {
      var L = T[j], K = Gr(L), X = wt(L) === bo, ie = [Wr, Vn].indexOf(K) >= 0, E = ie ? "width" : "height", C = vd(r, {
        placement: L,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), B = ie ? X ? Aa : bn : X ? Vn : Wr;
      I[E] > P[E] && (B = jt(B));
      var _ = jt(B), F = [];
      if (o && F.push(C[K] <= 0), i && F.push(C[B] <= 0, C[_] <= 0), F.every(function(re) {
        return re;
      })) {
        O = L, h = !1;
        break;
      }
      N.set(L, F);
    }
    if (h)
      for (var H = g ? 3 : 1, A = function(ue) {
        var ge = T.find(function(Ce) {
          var ar = N.get(Ce);
          if (ar)
            return ar.slice(0, ue).every(function(ae) {
              return ae;
            });
        });
        if (ge)
          return O = ge, "break";
      }, W = H; W > 0; W--) {
        var J = A(W);
        if (J === "break")
          break;
      }
    r.placement !== O && (r.modifiersData[a]._skip = !0, r.placement = O, r.reset = !0);
  }
}
const Og = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Pg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Vg(e, r, n) {
  var a = Gr(e), t = [bn, Wr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e
  })) : n, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [bn, Aa].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Mg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = ld.reduce(function(d, v) {
    return d[v] = Vg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Eg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Mg
};
function Bg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Ig(e) {
  return e === Mr(e) || !kr(e) ? Hi(e) : Bg(e);
}
function Ng(e) {
  var r = e.getBoundingClientRect(), n = Qa(r.width) / e.offsetWidth || 1, a = Qa(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function Dg(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Ng(r), o = In(r), l = _a(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ji(o)) && (i = Ig(r)), kr(r) ? (s = _a(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = Yi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Ag(e) {
  var r = _a(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function zg(e) {
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
function Lg(e) {
  var r = zg(e);
  return di.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Rg(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e());
      });
    })), r;
  };
}
function nn(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return [].concat(n).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Nn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ug = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Nl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Fg(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Nl).filter(function(n, a, t) {
      return t.indexOf(n) === a;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof r.name != "string" && console.error(nn(Nn, String(r.name), '"name"', '"string"', '"' + String(r.name) + '"'));
          break;
        case "enabled":
          typeof r.enabled != "boolean" && console.error(nn(Nn, r.name, '"enabled"', '"boolean"', '"' + String(r.enabled) + '"'));
          break;
        case "phase":
          di.indexOf(r.phase) < 0 && console.error(nn(Nn, r.name, '"phase"', "either " + di.join(", "), '"' + String(r.phase) + '"'));
          break;
        case "fn":
          typeof r.fn != "function" && console.error(nn(Nn, r.name, '"fn"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "effect":
          r.effect != null && typeof r.effect != "function" && console.error(nn(Nn, r.name, '"effect"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "requires":
          r.requires != null && !Array.isArray(r.requires) && console.error(nn(Nn, r.name, '"requires"', '"array"', '"' + String(r.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(r.requiresIfExists) || console.error(nn(Nn, r.name, '"requiresIfExists"', '"array"', '"' + String(r.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Nl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(nn(Ug, String(r.name), a, a));
      });
    });
  });
}
function Hg(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function Yg(e) {
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
var Dl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", jg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Al = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function zl() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Wg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Al : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Al, o),
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
        y(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: za(i) ? ft(i) : i.contextElement ? ft(i.contextElement) : [],
          popper: ft(s)
        };
        var S = Lg(Yg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(L) {
          return L.enabled;
        }), process.env.NODE_ENV !== "production") {
          var T = Hg([].concat(S, d.options.modifiers), function(L) {
            var K = L.name;
            return K;
          });
          if (Fg(T), Gr(d.options.placement) === go) {
            var I = d.orderedModifiers.find(function(L) {
              var K = L.name;
              return K === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var P = Ar(s), N = P.marginTop, h = P.marginRight, O = P.marginBottom, j = P.marginLeft;
          [N, h, O, j].some(function(L) {
            return parseFloat(L);
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
          var w = d.elements, V = w.reference, S = w.popper;
          if (!zl(V, S)) {
            process.env.NODE_ENV !== "production" && console.error(Dl);
            return;
          }
          d.rects = {
            reference: Dg(V, Wi(S), d.options.strategy === "fixed"),
            popper: Ag(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(L) {
            return d.modifiersData[L.name] = Object.assign({}, L.data);
          });
          for (var T = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (T += 1, T > 100)) {
              console.error(jg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var P = d.orderedModifiers[I], N = P.fn, h = P.options, O = h === void 0 ? {} : h, j = P.name;
            typeof N == "function" && (d = N({
              state: d,
              options: O,
              name: j,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Rg(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!zl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Dl), m;
    m.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function g() {
      d.orderedModifiers.forEach(function(b) {
        var w = b.name, V = b.options, S = V === void 0 ? {} : V, T = b.effect;
        if (typeof T == "function") {
          var I = T({
            state: d,
            name: w,
            instance: m,
            options: S
          }), P = function() {
          };
          v.push(I || P);
        }
      });
    }
    function y() {
      v.forEach(function(b) {
        return b();
      }), v = [];
    }
    return m;
  };
}
var zt = {
  passive: !0
};
function Gg(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, zt);
  }), i && s.addEventListener("resize", n.update, zt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, zt);
    }), i && s.removeEventListener("resize", n.update, zt);
  };
}
const qg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Gg,
  data: {}
};
function Xg(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = dd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const Kg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Xg,
  data: {}
};
var Zg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jg(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Qa(r * t) / t || 0,
    y: Qa(n * t) / t || 0
  };
}
function Ll(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, y = g === void 0 ? 0 : g, b = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = b.x, y = b.y;
  var w = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), S = bn, T = Wr, I = window;
  if (u) {
    var P = Wi(n), N = "clientHeight", h = "clientWidth";
    if (P === Mr(n) && (P = In(n), Ar(P).position !== "static" && i === "absolute" && (N = "scrollHeight", h = "scrollWidth")), P = P, t === Wr || (t === bn || t === Aa) && o === bt) {
      T = Vn;
      var O = v && P === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[N]
      );
      y -= O - a.height, y *= s ? 1 : -1;
    }
    if (t === bn || (t === Wr || t === Vn) && o === bt) {
      S = Aa;
      var j = v && P === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[h]
      );
      m -= j - a.width, m *= s ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: i
  }, u && Zg), K = d === !0 ? Jg({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = K.x, y = K.y, s) {
    var X;
    return Object.assign({}, L, (X = {}, X[T] = V ? "0" : "", X[S] = w ? "0" : "", X.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", X));
  }
  return Object.assign({}, L, (r = {}, r[T] = V ? y + "px" : "", r[S] = w ? m + "px" : "", r.transform = "", r));
}
function Qg(e) {
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
    placement: Gr(r.placement),
    variation: wt(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Ll(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Ll(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const _g = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
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
function ey(e) {
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
const ry = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: xg,
  effect: ey,
  requires: ["computeStyles"]
};
var ny = [qg, Kg, _g, ry], ay = /* @__PURE__ */ Wg({
  defaultModifiers: ny
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
function Rl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ul(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Rl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Rl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function fd(e) {
  var r = M(null), n = M(null), a = M({
    width: 0,
    height: 0
  }), t = Es(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, N) {
      N ? (S(), k(e.onOpen)) : k(e.onClose);
    }
  }), {
    zIndex: o
  } = Vt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: P,
      height: N
    } = tt(r.value);
    a.value = {
      width: je(P),
      height: je(N)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, T());
  }, v = /* @__PURE__ */ function() {
    var P = Ul(function* () {
      e.trigger === "hover" && (s = !1, yield Lr(), !i && I());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var P = Ul(function* () {
      e.trigger === "hover" && (i = !1, yield Lr(), !s && I());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), g = () => {
    T();
  }, y = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  }, b = () => {
    e.trigger === "click" && y();
  }, w = () => {
    u();
    var P = {
      x: je(e.offsetX),
      y: je(e.offsetY)
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
      skidding: N,
      distance: h
    } = w(), O = [ro({}, Og, {
      enabled: t.value
    }), ro({}, Eg, {
      options: {
        offset: [N, h]
      }
    })];
    return {
      placement: P,
      modifiers: O
    };
  }, S = () => {
    l.setOptions(V());
  }, T = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, k(e["onUpdate:show"], !0));
  }, I = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  };
  return Vs(r, "click", b), oe(() => e.offsetX, S), oe(() => e.offsetY, S), oe(() => e.placement, S), oe(() => e.disabled, I), no(() => {
    var P, N = e.reference ? (P = r.value) == null ? void 0 : P.querySelector(e.reference) : r.value;
    l = ay(N ?? r.value, n.value, V());
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
    handlePopoverClose: y,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: S,
    open: T,
    close: I
  };
}
function ty(e) {
  return ["click", "hover"].includes(e);
}
function oy(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function iy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var ly = {
  type: {
    type: String,
    default: "default",
    validator: iy
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
    validator: ty
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: oy
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
  n: sy,
  classes: uy
} = ee("tooltip");
function dy(e, r) {
  return p(), $(
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
    [Y(e.$slots, "default"), (p(), be(
      En,
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
          default: ve(() => [$e(D(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
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
            [D(
              "div",
              {
                style: G({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [Y(e.$slots, "content", {}, () => [Se(
                ne(e.content),
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
var cd = x({
  name: "VarTooltip",
  props: ly,
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
    } = fd(e);
    return {
      toSizeUnit: ye,
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      n: sy,
      classes: uy,
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
cd.render = dy;
const wn = cd;
wn.install = function(e) {
  e.component(wn.name, wn);
};
var nk = wn;
function vy(e) {
  return ["click"].includes(e);
}
var fy = {
  expandTrigger: {
    type: String,
    validator: vy
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}
var {
  n: cy,
  classes: my
} = ee("ellipsis"), py = {
  key: 0
};
function hy(e, r) {
  var n = te("var-tooltip");
  return p(), be(
    n,
    Tt(to(e.tooltip)),
    {
      content: ve(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), $(
          "span",
          py,
          ne(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [D(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: G(e.rootStyles),
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
var md = x({
  name: "VarEllipsis",
  components: {
    VarTooltip: wn
  },
  props: fy,
  setup(e) {
    var r = M(!1), n = z(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = z(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : ci({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: cy,
      classes: my,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
md.render = hy;
const ea = md;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var ak = ea;
function gy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function yy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function by(e) {
  return ["click", "hover"].includes(e);
}
var wy = {
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
    validator: lu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: gy
  },
  direction: {
    type: String,
    default: "top",
    validator: yy
  },
  trigger: {
    type: String,
    default: "click",
    validator: by
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
function Fl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  classes: Hl,
  n: vr
} = ee("fab");
const ra = x({
  name: "VarFab",
  inheritAttrs: !1,
  props: wy,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = Es(e, "active"), o = M(null), {
      disabled: l
    } = lo(), i = (f, m, g) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (g === 0) {
          k(e.onClick, t.value, f);
          return;
        }
        t.value = m, k(e.onClick, t.value, f), k(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, k(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, k(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : $e(Z(rr, {
      "var-fab-cover": !0,
      class: vr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Z(Oe, {
        "var-fab-cover": !0,
        class: Hl([t.value, vr("trigger-active-icon"), vr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: vr("--trigger-icon-animation")
      }, null)]
    }), [[$n, e.show]]), v = () => {
      var f, m, g = Ms((m = n.default == null ? void 0 : n.default()) != null ? m : []);
      return Z("div", Be({
        class: Hl(vr(), vr("--position-" + e.position), vr("--direction-" + e.direction), [e.fixed, vr("--fixed"), vr("--absolute")], [e.safeArea, vr("--safe-area")]),
        style: {
          zIndex: R(e.zIndex),
          top: ye(e.top),
          bottom: ye(e.bottom),
          left: ye(e.left),
          right: ye(e.right)
        },
        ref: o,
        onClick: (y) => i(y, !t.value, g.length),
        onMouseleave: () => s(!1, g.length),
        onMouseenter: () => s(!0, g.length)
      }, a), [Z(Le, {
        name: vr("--active-transition")
      }, Fl(f = d()) ? f : {
        default: () => [f]
      }), Z(Le, {
        name: vr("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [$e(Z("div", {
          class: vr("actions"),
          onClick: (y) => y.stopPropagation()
        }, [g.map((y) => Z("div", {
          class: vr("action")
        }, [y]))]), [[$n, e.show && t.value && g.length]])]
      })]);
    };
    return oe(() => e.trigger, () => {
      t.value = !1;
    }), oe(() => e.disabled, () => {
      t.value = !1;
    }), Vs(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Z(En, {
          to: f,
          disabled: l.value
        }, Fl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var tk = ra;
function Cy(e) {
  return ["start", "end"].includes(e);
}
var Sy = {
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
    validator: Cy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Yl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ky(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Yl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Yl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: $y
} = ee("form");
function Ty(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var pd = x({
  name: "VarForm",
  props: Sy,
  setup(e) {
    var r = z(() => e.disabled), n = z(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Nm(), o = (d) => {
      setTimeout(() => {
        var v = Tn(d), f = v === window ? 0 : ol(v), m = ol(d) - f - je(e.scrollToErrorOffsetY);
        ht(v, {
          top: m,
          animation: No
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = ky(function* () {
        var v = yield Promise.all(a.map((b) => {
          var {
            validate: w
          } = b;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = qv(v, (b) => b === !1, e.scrollToError), m = f > -1;
          if (m) {
            var g, y = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(y);
          }
          return !m;
        }
        return v.every((b) => b === !0);
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
      n: $y,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
pd.render = Ty;
const qr = pd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
qr.useValidation = Or;
qr.useForm = Vr;
var ok = qr;
function Py(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Oy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Py,
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
  n: Vy,
  classes: My
} = ee("image"), Ey = ["alt", "title", "lazy-loading", "lazy-error"], By = ["alt", "title", "src"];
function Iy(e, r) {
  var n = Ie("lazy"), a = Ie("ripple");
  return $e((p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? $e((p(), $(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        style: G({
          objectFit: e.fit
        }),
        onLoad: r[0] || (r[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onClick: r[1] || (r[1] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      Ey
    )), [[n, e.src]]) : Q("v-if", !0), !e.lazy && !e.showErrorSlot ? (p(), $(
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
        onLoad: r[2] || (r[2] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: r[3] || (r[3] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: r[4] || (r[4] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      By
    )) : Q("v-if", !0), e.showErrorSlot ? Y(e.$slots, "error", {
      key: 2
    }) : Q("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var hd = x({
  name: "VarImage",
  directives: {
    Lazy: gt,
    Ripple: We
  },
  props: Oy,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(!1), t = (i) => {
      var s = i.currentTarget, {
        lazy: u,
        onLoad: d,
        onError: v
      } = e;
      u ? (s._lazy.state === "success" && k(d, i), s._lazy.state === "error" && (n != null && n.error && (a.value = !0), k(v, i))) : k(d, i);
    }, o = (i) => {
      a.value = !!(n != null && n.error), k(e.onError, i);
    }, l = (i) => {
      k(e.onClick, i);
    };
    return oe(() => e.src, () => {
      a.value = !1;
    }), {
      n: Vy,
      classes: My,
      showErrorSlot: a,
      toSizeUnit: ye,
      handleLoad: t,
      handleError: o,
      handleClick: l
    };
  }
});
hd.render = Iy;
const na = hd;
na.install = function(e) {
  e.component(na.name, na);
};
var ik = na, gd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Ny() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = dr(gd);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var yd = {
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
function jl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Dy(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        jl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        jl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var Ay = 250, zy = 20, {
  n: Ly,
  classes: Ry
} = ee("swipe"), Uy = ["onClick"];
function Fy(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: G({
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
    }, () => [e.indicator && e.length ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), $(
        Ve,
        null,
        Ue(e.length, (n, a) => (p(), $(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: G({
              background: e.indicatorColor
            }),
            key: n,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Uy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : Q("v-if", !0)])],
    2
    /* CLASS */
  );
}
var bd = x({
  name: "VarSwipe",
  props: yd,
  setup(e) {
    var r = M(null), n = M(0), a = z(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Ny(), v = !1, f = !1, m = -1, g, y, b, w, V, S = (A) => s.find((W) => {
      var {
        index: J
      } = W;
      return J.value === A;
    }), T = () => {
      e.loop && (o.value >= 0 && S(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && S(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, I = (A) => {
      var W = lr(A) ? A : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: J
      } = e;
      return W <= -1 ? J ? -1 : 0 : W >= d.value ? J ? d.value : d.value - 1 : W;
    }, P = (A) => {
      var {
        loop: W
      } = e;
      return A === -1 ? W ? d.value - 1 : 0 : A === d.value ? W ? 0 : d.value - 1 : A;
    }, N = (A) => {
      var {
        loop: W
      } = e;
      return A < 0 ? W ? d.value - 1 : 0 : A > d.value - 1 ? W ? 0 : d.value - 1 : A;
    }, h = (A) => {
      var W = o.value >= n.value, J = o.value <= -t.value, re = 0, ue = -(t.value - n.value);
      l.value = !0, (W || J) && (l.value = !0, o.value = J ? re : ue, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), io(() => {
        l.value = !1, k(A);
      });
    }, O = () => {
      v || (i.value = N(R(e.initialIndex)), v = !0);
    }, j = () => {
      var {
        autoplay: A
      } = e;
      !A || d.value <= 1 || (L(), m = window.setTimeout(() => {
        B(), j();
      }, R(A)));
    }, L = () => {
      m && clearTimeout(m);
    }, K = (A, W) => {
      if (A > W && A > 10)
        return "horizontal";
      if (W > A && W > 10)
        return "vertical";
    }, X = (A) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: W,
          clientY: J
        } = A.touches[0];
        g = W, y = J, b = performance.now(), f = !0, L(), h(() => {
          l.value = !0;
        });
      }
    }, ie = (A) => {
      var {
        touchable: W,
        vertical: J
      } = e;
      if (!(!f || !W)) {
        var {
          clientX: re,
          clientY: ue
        } = A.touches[0], ge = Math.abs(re - g), Ce = Math.abs(ue - y), ar = K(ge, Ce), ae = J ? "vertical" : "horizontal";
        if (ar === ae) {
          A.preventDefault();
          var de = w !== void 0 ? re - w : 0, ce = V !== void 0 ? ue - V : 0;
          w = re, V = ue, o.value += J ? ce : de, T();
        }
      }
    }, E = () => {
      if (f) {
        var {
          vertical: A,
          onChange: W
        } = e, J = A ? V < y : w < g, re = Math.abs(A ? y - V : g - w), ue = performance.now() - b <= Ay && re >= zy, ge = ue ? I(J ? i.value + 1 : i.value - 1) : I();
        f = !1, l.value = !1, w = void 0, V = void 0, o.value = ge * -n.value;
        var Ce = i.value;
        i.value = P(ge), j(), Ce !== i.value && k(W, i.value);
      }
    }, C = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((A) => {
        A.setTranslate(0);
      }), j(), setTimeout(() => {
        l.value = !1;
      }));
    }, B = (A) => {
      if (!(d.value <= 1)) {
        O();
        var {
          loop: W,
          onChange: J
        } = e, re = i.value;
        i.value = N(re + 1), (A == null ? void 0 : A.event) !== !1 && k(J, i.value), h(() => {
          if (re === d.value - 1 && W) {
            S(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          re !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, _ = (A) => {
      if (!(d.value <= 1)) {
        O();
        var {
          loop: W,
          onChange: J
        } = e, re = i.value;
        i.value = N(re - 1), (A == null ? void 0 : A.event) !== !1 && k(J, i.value), h(() => {
          if (re === 0 && W) {
            S(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          re !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, F = (A, W) => {
      if (!(d.value <= 1 || A === i.value)) {
        A = A < 0 ? 0 : A, A = A >= d.value ? d.value : A;
        var J = A > i.value ? B : _, re = Math.abs(A - i.value);
        Array.from({
          length: re
        }).forEach((ue, ge) => {
          J({
            event: ge === re - 1 ? W == null ? void 0 : W.event : !1
          });
        });
      }
    }, H = {
      size: n,
      vertical: a
    };
    return u(H), oe(() => d.value, /* @__PURE__ */ Dy(function* () {
      yield Lr(), O(), C();
    })), Mn(C), en(L), rt(L), Rr(() => window, "resize", C), {
      n: Ly,
      classes: Ry,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: X,
      handleTouchmove: ie,
      handleTouchend: E,
      next: B,
      prev: _,
      to: F,
      resize: C,
      toNumber: R
    };
  }
});
bd.render = Fy;
const Xr = bd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var lk = Xr;
function Hy() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = ur(gd);
  return e || Pr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Yy
} = ee("swipe-item");
function jy(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n()),
      style: G({
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
var wd = x({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = Hy(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: Yy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
wd.render = jy;
const Kr = wd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var sk = Kr;
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
var Wy = mi({
  show: {
    type: Boolean,
    default: !1
  },
  imagePreventDefault: {
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
  "onUpdate:show": U(),
  onLongPress: U()
}, Je(yd, ["loop", "indicator", "onChange"]), Je(Ot, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Wl,
  classes: Gy
} = ee("image-preview"), Po = 12, Gl = 200, qy = 350, ql = 200, Xy = 500, Ky = ["onTouchstart"], Zy = ["src", "alt"];
function Jy(e, r) {
  var n = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), o = te("var-popup");
  return p(), be(
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
        Be({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(p(!0), $(
            Ve,
            null,
            Ue(e.images, (l, i) => (p(), be(
              n,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [D(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: G({
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
                  },
                  [D(
                    "img",
                    {
                      class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Zy
                  )],
                  46,
                  Ky
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
            }, () => [e.indicator && e.images.length > 1 ? (p(), $(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ne(i + 1) + " / " + ne(s),
              3
              /* TEXT, CLASS */
            )) : Q("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), be(
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
      )) : Q("v-if", !0)]), D(
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
var Cd = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: Xr,
    VarSwipeItem: Kr,
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Wy,
  setup(e) {
    var r = M(!1), n = z(() => {
      var {
        images: E,
        current: C
      } = e, B = E.findIndex((_) => _ === C);
      return B >= 0 ? B : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, v = null, f = null, m = !1, g = z(() => {
      var {
        imagePreventDefault: E,
        show: C
      } = e;
      return C && E;
    }), y = (E, C) => {
      var {
        clientX: B,
        clientY: _
      } = E, {
        clientX: F,
        clientY: H
      } = C;
      return Math.abs(Math.sqrt(Math.pow(F - B, 2) + Math.pow(H - _, 2)));
    }, b = (E, C) => ({
      clientX: E.clientX,
      clientY: E.clientY,
      timestamp: performance.now(),
      target: C
    }), w = () => {
      a.value = R(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, ql);
    }, V = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, S = (E) => d ? y(d, E) <= Po && E.timestamp - d.timestamp <= Gl && d.target === E.target : !1, T = (E) => !E || !u || !d ? !1 : y(u, d) <= Po && performance.now() - d.timestamp < qy && (E === u.target || E.parentNode === u.target), I = () => {
      window.clearTimeout(f), m = !1, u = null;
    }, P = (E) => {
      if (window.clearTimeout(f), m) {
        m = !1;
        return;
      }
      var C = T(E.target);
      v = window.setTimeout(() => {
        C && X(), u = null;
      }, Gl);
    }, N = (E, C) => {
      window.clearTimeout(v), window.clearTimeout(f);
      var B = b(E.touches[0], E.currentTarget);
      if (u = B, f = window.setTimeout(() => {
        var {
          onLongPress: _
        } = e;
        m = !0, k(_, C);
      }, Xy), S(B)) {
        a.value > 1 ? V() : w();
        return;
      }
      d = B;
    }, h = (E) => {
      var {
        offsetWidth: C,
        offsetHeight: B
      } = E, {
        naturalWidth: _,
        naturalHeight: F
      } = E.querySelector("." + Wl("image"));
      return {
        width: C,
        height: B,
        imageRadio: F / _,
        rootRadio: B / C,
        zoom: R(e.zoom)
      };
    }, O = (E) => {
      var {
        zoom: C,
        imageRadio: B,
        rootRadio: _,
        width: F,
        height: H
      } = h(E);
      if (!B)
        return 0;
      var A = B > _ ? H / B : F;
      return Math.max(0, (C * A - F) / 2) / C;
    }, j = (E) => {
      var {
        zoom: C,
        imageRadio: B,
        rootRadio: _,
        width: F,
        height: H
      } = h(E);
      if (!B)
        return 0;
      var A = B > _ ? H : F * B;
      return Math.max(0, (C * A - H) / 2) / C;
    }, L = (E, C, B) => E + C >= B ? B : E + C <= -B ? -B : E + C, K = (E) => {
      if (d) {
        var C = E.currentTarget, B = b(E.touches[0], C);
        if (y(B, d) > Po && window.clearTimeout(f), a.value > 1) {
          var _ = B.clientX - d.clientX, F = B.clientY - d.clientY, H = O(C), A = j(C);
          t.value = L(t.value, _, H), o.value = L(o.value, F, A);
        }
        d = B;
      }
    }, X = () => {
      if (a.value > 1) {
        V(), setTimeout(() => k(e["onUpdate:show"], !1), ql);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, ie = (E) => {
      e.imagePreventDefault && e.show && E.preventDefault();
    };
    return Rr(() => document, "contextmenu", ie), oe(() => e.show, (E) => {
      r.value = E;
    }, {
      immediate: !0
    }), {
      n: Wl,
      classes: Gy,
      isPreventDefault: g,
      initialIndex: n,
      popupShow: r,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: N,
      handleTouchmove: K,
      handleTouchend: P,
      handleTouchcancel: I,
      close: X
    };
  }
});
Cd.render = Jy;
const Cn = Cd;
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ct.apply(this, arguments);
}
var un, mt = {};
function Qy(e) {
  return e === void 0 && (e = {}), Fe(e) ? ct({}, mt, {
    images: [e]
  }) : Pe(e) ? ct({}, mt, {
    images: e
  }) : ct({}, mt, e);
}
function zr(e) {
  if (at()) {
    zr.close();
    var r = Qy(e), n = Ae(r);
    n.teleport = "body", un = n;
    var {
      unmountInstance: a
    } = ot(Cn, n, {
      onClose: () => k(n.onClose),
      onClosed: () => {
        k(n.onClosed), a(), un === n && (un = null);
      },
      onRouteChange: () => {
        a(), un === n && (un = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }
}
zr.close = () => {
  if (un != null) {
    var e = un;
    un = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
zr.setDefaultOptions = (e) => {
  mt = e;
};
zr.resetDefaultOptions = () => {
  mt = {};
};
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
zr.install = function(e) {
  e.component(Cn.name, Cn);
};
zr.Component = Cn;
var uk = Cn, Wt = {
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
function Xl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Kl(e) {
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
  n: _y,
  classes: xy
} = ee("sticky");
function eb(e, r) {
  return p(), $(
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
    [D(
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
      [Y(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var Sd = x({
  name: "VarSticky",
  props: Wt,
  setup(e) {
    var r = M(null), n = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = z(() => !e.disabled && e.cssMode), v = z(() => !e.disabled && !e.cssMode && a.value), f = z(() => je(e.offsetTop)), m, g = () => {
      var {
        cssMode: S,
        disabled: T
      } = e;
      if (!T) {
        var I = 0;
        if (m !== window) {
          var {
            top: P
          } = xe(m);
          I = P;
        }
        var N = n.value, h = r.value, {
          top: O,
          left: j
        } = xe(h), L = O - I;
        return L <= f.value ? (S || (l.value = h.offsetWidth + "px", i.value = h.offsetHeight + "px", t.value = I + f.value + "px", o.value = j + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: L,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var S = g();
        S && k(e.onScroll, S.offsetTop, S.isFixed);
      }
    }, b = /* @__PURE__ */ function() {
      var S = Kl(function* () {
        a.value = !1, yield nf(), g();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var S = Kl(function* () {
        yield Lr(), m = Tn(r.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return oe(() => e.disabled, b), sr(w), rt(V), en(V), Rr(() => window, "scroll", y), Rr(() => window, "resize", b), {
      n: _y,
      classes: xy,
      resize: b,
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
Sd.render = eb;
const Zr = Sd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var dk = Zr, kd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function rb() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = dr(kd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function nb() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(kd);
  return n || Pr("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var ab = {
  index: {
    type: [Number, String]
  }
}, {
  n: tb,
  classes: ob
} = ee("index-anchor");
function ib(e, r) {
  return p(), be(
    nt(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [D(
        "div",
        Be({
          class: e.n()
        }, e.$attrs),
        [Y(e.$slots, "default", {}, () => [Se(
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
var $d = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Zr
  },
  inheritAttrs: !1,
  props: ab,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = nb(), t = M(0), o = M(!1), l = z(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, g = (b) => {
      o.value = b;
    }, y = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: g
    };
    return a(y), {
      n: tb,
      classes: ob,
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
$d.render = ib;
const aa = $d;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var vk = aa, lb = {
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
function Zl(e, r, n, a, t, o, l) {
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
  n: sb,
  classes: ub
} = ee("index-bar"), db = ["onClick"];
function vb(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [Y(e.$slots, "default"), D(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), $(
        Ve,
        null,
        Ue(e.anchorNameList, (n) => (p(), $(
          "li",
          {
            key: n,
            class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
            style: G({
              color: e.active === n && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: n,
              manualCall: !0
            })
          },
          ne(n),
          15,
          db
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
var Td = x({
  name: "VarIndexBar",
  props: lb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = rb(), t = M(""), o = M(null), l = M([]), i = M(), s = z(() => e.sticky), u = z(() => e.stickyCssMode || e.cssMode), d = z(() => je(e.stickyOffsetTop)), v = z(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var y = (N, h) => {
      var O = $i(N) ? N.name.value : N;
      O === i.value || O === void 0 || (i.value = O, (h == null ? void 0 : h.event) !== !1 && k(e.onChange, O));
    }, b = () => {
      if (Ti(f))
        return 0;
      var {
        top: N
      } = xe(f), {
        scrollTop: h
      } = f, {
        top: O
      } = xe(o.value);
      return h - N + O;
    }, w = () => {
      var N = pt(f), h = f === window ? document.body.scrollHeight : f.scrollHeight, O = b();
      n.forEach((j, L) => {
        var K = j.ownTop.value, X = N - K + d.value - O, ie = L === n.length - 1 ? h : n[L + 1].ownTop.value - j.ownTop.value;
        j.setDisabled(!0), X >= 0 && X < ie && t.value === "" && (j.setDisabled(!1), y(j));
      });
    }, V = /* @__PURE__ */ function() {
      var N = Lt(function* (h) {
        var {
          anchorName: O,
          manualCall: j = !1,
          options: L
        } = h;
        if (j && k(e.onClick, O), !(O === i.value && !m)) {
          var K = n.find((C) => {
            var {
              name: B
            } = C;
            return O === B.value;
          });
          if (K) {
            var X = b(), ie = K.ownTop.value - d.value + X, E = Oi(f);
            t.value = O, y(O, L), yield ht(f, {
              left: E,
              top: ie,
              animation: bs,
              duration: R(e.duration)
            }), io(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return N.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var N = Lt(function* () {
        yield Lr(), f = Tn(o.value);
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), T = () => {
      f.addEventListener("scroll", w);
    }, I = () => {
      f.removeEventListener("scroll", w);
    }, P = (N, h) => {
      br(() => V({
        anchorName: N,
        options: h
      }));
    };
    return oe(() => r.value, /* @__PURE__ */ Lt(function* () {
      yield Lr(), n.forEach((N) => {
        var {
          name: h,
          setOwnTop: O
        } = N;
        h.value && l.value.push(h.value), O();
      });
    })), sr(/* @__PURE__ */ Lt(function* () {
      yield S(), T();
    })), kt(I), en(() => {
      m = !0, I();
    }), Mn(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: sb,
      classes: ub,
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
Td.render = vb;
const ta = Td;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var fk = ta;
function fb(e) {
  return ["small", "normal"].includes(e);
}
function cb(e) {
  return ["outlined", "standard"].includes(e);
}
var Gi = {
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
    validator: fb
  },
  variant: {
    type: String,
    default: "standard",
    validator: cb
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
  onClick: U(),
  onClear: U()
}, {
  n: Oo,
  classes: mb
} = ee("field-decorator"), pb = ["for"];
function hb(e, r) {
  var n = te("var-icon");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: G({
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
      ), e.hint ? (p(), $(
        "label",
        {
          key: 0,
          class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
          style: G({
            color: e.color
          }),
          for: e.id
        },
        [D(
          "span",
          null,
          ne(e.placeholder),
          1
          /* TEXT */
        )],
        14,
        pb
      )) : Q("v-if", !0), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), be(
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
        )) : Q("v-if", !0), Y(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), $(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), $(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: G({
            borderColor: e.color
          })
        },
        [D(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: G({
              width: e.legendWidth
            })
          },
          [e.hint ? (p(), be(En, {
            key: 0,
            to: "body"
          }, [D(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            ne(e.placeholder),
            3
            /* TEXT, CLASS */
          )])) : Q("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (p(), $(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [D(
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
    )) : Q("v-if", !0)],
    2
    /* CLASS */
  );
}
var Pd = x({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Oe
  },
  props: Gi,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(null), t = M(""), o = z(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = z(() => e.hint && (!Yr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Yr(f) || m))
        return Oo("--placeholder-hidden");
      if (l.value)
        return Oo("--placeholder-hint");
    }, s = () => {
      var {
        size: v,
        hint: f,
        variant: m
      } = e;
      if (!f || m !== "outlined") {
        t.value = "";
        return;
      }
      var g = tt(a.value), y = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + g.width + " * 0.75 + " + y + " * 2)";
    }, u = (v) => {
      k(e.onClear, v);
    }, d = (v) => {
      k(e.onClick, v);
    };
    return sr(s), oe(() => [e.size, e.hint, e.variant], s), Rr(() => window, "resize", s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Oo,
      classes: mb,
      isEmpty: Yr,
      handleClear: u,
      handleClick: d
    };
  }
});
Pd.render = hb;
const Od = Pd;
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
function gb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var yb = pi({
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
    validator: gb
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
}, Je(Gi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: bb,
  classes: wb
} = ee("input"), Cb = ["placeholder", "enterkeyhint"], Sb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], kb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function $b(e, r) {
  var n = te("var-field-decorator"), a = te("var-form-details");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Z(
      n,
      Tt(to({
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
      hs({
        "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
        default: ve(() => [e.normalizedType === "password" ? (p(), $(
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
          Cb
        )) : Q("v-if", !0), e.textarea ? (p(), $(
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
          Sb
        )) : (p(), $(
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
          kb
        ))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: ve(() => [Y(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), Z(
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
var Vd = x({
  name: "VarInput",
  components: {
    VarFormDetails: _e,
    VarFieldDecorator: Od
  },
  props: yb,
  setup(e) {
    var r = M("var-input-" + et().uid), n = M(null), a = M(!1), t = M(!1), o = z(() => e.type === "number" ? "text" : e.type), l = z(() => {
      var {
        maxlength: F,
        modelValue: H
      } = e;
      return F ? Yr(H) ? "0 / " + F : String(H).length + "/" + F : "";
    }), i = z(() => e.disabled || e.readonly ? "" : "text"), s = z(() => {
      var {
        hint: F,
        blurColor: H,
        focusColor: A
      } = e;
      if (!F)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? A || "var(--field-decorator-focus-color)" : H || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Or(), y = (F) => {
      Ne(() => {
        var {
          validateTrigger: H,
          rules: A,
          modelValue: W
        } = e;
        f(H, F, A, W);
      });
    }, b = (F) => {
      a.value = !0, k(e.onFocus, F), y("onFocus");
    }, w = (F) => {
      a.value = !1, k(e.onBlur, F), y("onBlur");
    }, V = (F) => {
      var H = F.target, {
        value: A
      } = H;
      return e.type === "number" && (A = O(A)), L(j(A));
    }, S = () => {
      t.value = !0;
    }, T = (F) => {
      t.value && (t.value = !1, F.target.dispatchEvent(new Event("input")));
    }, I = (F) => {
      if (!t.value) {
        var H = V(F);
        k(e["onUpdate:modelValue"], H), k(e.onInput, H, F), y("onInput");
      }
    }, P = (F) => {
      var H = V(F);
      k(e.onChange, H, F), y("onChange");
    }, N = () => {
      var {
        disabled: F,
        readonly: H,
        clearable: A,
        onClear: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || F || H || !A || (k(e["onUpdate:modelValue"], ""), k(W, ""), y("onClear"));
    }, h = (F) => {
      var {
        disabled: H,
        onClick: A
      } = e;
      d != null && d.disabled.value || H || (k(A, F), y("onClick"));
    }, O = (F) => {
      var H = F.indexOf("-"), A = F.indexOf(".");
      return H > -1 && (F = H === 0 ? "-" + F.replace(/-/g, "") : F.replace(/-/g, "")), A > -1 && (F = F.slice(0, A + 1) + F.slice(A).replace(/\./g, "")), F.replace(/[^-0-9.]/g, "");
    }, j = (F) => e.modelModifiers.trim ? F.trim() : F, L = (F) => e.maxlength ? F.slice(0, R(e.maxlength)) : F, K = (F) => {
      var {
        disabled: H,
        readonly: A
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || A || F.stopPropagation();
    };
    function X(F) {
      var {
        disabled: H
      } = e;
      d != null && d.disabled.value || H || F.target === n.value || (C(), F.preventDefault());
    }
    var ie = () => {
      k(e["onUpdate:modelValue"], ""), g();
    }, E = () => m(e.rules, e.modelValue), C = () => {
      var F;
      (F = n.value) == null || F.focus();
    }, B = () => {
      n.value.blur();
    }, _ = {
      reset: ie,
      validate: E,
      resetValidation: g
    };
    return k(u, _), sr(() => {
      e.autofocus && C();
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
      n: bb,
      classes: wb,
      isEmpty: Yr,
      handleFocus: b,
      handleBlur: w,
      handleInput: I,
      handleChange: P,
      handleClear: N,
      handleClick: h,
      handleTouchstart: K,
      handleCompositionStart: S,
      handleCompositionEnd: T,
      handleMousedown: X,
      validate: E,
      resetValidation: g,
      reset: ie,
      focus: C,
      blur: B
    };
  }
});
Vd.render = $b;
const Sn = Vd;
Sn.install = function(e) {
  e.component(Sn.name, Sn);
};
var ck = Sn;
function Tb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Pb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Ob = {
  type: {
    type: String,
    default: "default",
    validator: Tb
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
    validator: Pb
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
  n: Vb,
  classes: Mb
} = ee("link");
function Eb(e, r) {
  return p(), be(
    nt(e.tag),
    Be(e.linkProps, {
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
var Md = x({
  name: "VarLink",
  props: Ob,
  setup(e) {
    var r = z(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), n = z(() => {
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
      n: Vb,
      classes: Mb,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: ye
    };
  }
});
Md.render = Eb;
const oa = Md;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var mk = oa, Bb = {
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
}, Ed = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Ib() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(Ed);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Bd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Nb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ur(Ed);
  return r || Pr("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function Db() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = dr(Bd);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function Ab() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ur(Bd);
  return {
    index: n,
    tabItem: e,
    bindTabItem: r
  };
}
function Jl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function zb(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Jl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Jl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Lb,
  classes: Rb
} = ee("list");
function Ub(e, r) {
  var n = te("var-loading"), a = Ie("ripple");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [Y(e.$slots, "default"), e.loading ? Y(e.$slots, "loading", {
      key: 0
    }, () => [D(
      "div",
      {
        class: c(e.n("loading"))
      },
      [D(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Z(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : Q("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: c(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : Q("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => [$e((p(), $(
      "div",
      {
        class: c(e.n("error")),
        onClick: r[0] || (r[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [Se(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : Q("v-if", !0), D(
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
var Id = x({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: Nr
  },
  props: Bb,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = Ab(), a = M(null), t = M(null), o, l = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = xe(o), {
        bottom: v
      } = xe(t.value);
      return Math.floor(v) - je(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = zb(function* () {
        yield Ne(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return k(n, {}), r && oe(() => r.current.value, u), oe(() => [e.loading, e.error, e.finished], u), sr(() => {
      o = Tn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), en(s), rt(s), {
      pack: Ze,
      listEl: a,
      detectorEl: t,
      dt: oo,
      isNumber: lr,
      load: l,
      check: u,
      n: Lb,
      classes: Rb
    };
  }
});
Id.render = Ub;
const ia = Id;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var pk = ia, Fb = {
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
  classes: Hb,
  n: Ql
} = ee("loading-bar");
const Yb = x({
  name: "VarLoadingBar",
  props: Fb,
  setup(e) {
    return () => Z("div", {
      class: Hb(Ql(), [e.error, Ql("--error")]),
      style: {
        zIndex: yr.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ye(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ye(e.top)
      }
    }, null);
  }
});
var Nd, Dd, Co, Ad, _l, zd = {}, jb = {
  value: 0,
  opacity: 0,
  error: !1
}, Qe = Ae(jb), Wb = (e) => {
  Object.assign(Qe, e);
}, Gb = (e) => {
  Object.assign(Qe, e), zd = e;
}, qb = () => {
  Object.keys(zd).forEach((e) => {
    Qe[e] !== void 0 && (Qe[e] = void 0);
  });
}, Ld = () => {
  _l || (_l = !0, ot(Yb, Qe));
}, qi = () => {
  Nd = window.setTimeout(() => {
    if (!(Qe.value >= 95)) {
      var e = Math.random();
      Qe.value < 70 && (e = Math.round(5 * Math.random())), Qe.value += e, qi();
    }
  }, 200);
}, Xi = () => {
  window.clearTimeout(Dd), window.clearTimeout(Nd), window.clearTimeout(Co), window.clearTimeout(Ad);
}, Xb = () => {
  Xi(), Qe.error = !1, Qe.value = 0, Ld(), Co = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), qi();
}, Rd = () => {
  Xi(), Qe.value = 100, Co = window.setTimeout(() => {
    Qe.opacity = 0, Dd = window.setTimeout(() => {
      Qe.error = !1;
    }, 250);
  }, 300);
}, Kb = () => {
  Xi(), Qe.error = !0, Qe.value === 100 && (Qe.value = 0), Ld(), Co = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), qi(), Ad = window.setTimeout(Rd, 300);
}, Ud = {
  start: Xb,
  finish: Rd,
  error: Kb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Wb,
  setDefaultOptions: Gb,
  resetDefaultOptions: qb
}, hk = Ud;
const hi = Ud;
function Zb(e) {
  return ["click", "hover"].includes(e);
}
function Jb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Qb = {
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
    validator: Zb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Jb
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
  n: _b,
  classes: xb
} = ee("menu");
function e0(e, r) {
  return p(), $(
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
    [Y(e.$slots, "default"), (p(), be(
      En,
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
          default: ve(() => [$e(D(
            "div",
            {
              ref: "popover",
              style: G({
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
var Fd = x({
  name: "VarMenu",
  props: Qb,
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
    } = fd(e);
    return {
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: hr,
      toSizeUnit: ye,
      n: _b,
      classes: xb,
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
Fd.render = e0;
const Jr = Fd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var gk = Jr, Hd = Symbol("SELECT_BIND_OPTION_KEY");
function r0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = dr(Hd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function n0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = ur(Hd);
  return n || Pr("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var a0 = {
  label: {},
  value: {}
}, {
  n: t0,
  classes: o0
} = ee("option");
function i0(e, r) {
  var n = te("var-checkbox"), a = Ie("ripple");
  return $e((p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: G({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: r[2] || (r[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
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
    ), e.multiple ? (p(), be(
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
    )) : Q("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [Y(e.$slots, "default", {}, () => [Se(
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
var Yd = x({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: hn
  },
  props: a0,
  setup(e) {
    var r = M(!1), n = z(() => r.value), a = z(() => e.label), t = z(() => e.value), {
      select: o,
      bindSelect: l
    } = n0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      r.value = !r.value, u(g);
    }, f = () => u(g), m = (y) => {
      r.value = y;
    }, g = {
      label: a,
      value: t,
      selected: n,
      sync: m
    };
    return oe([() => e.label, () => e.value], d), l(g), {
      n: t0,
      classes: o0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Yd.render = i0;
const la = Yd;
la.install = function(e) {
  e.component(la.name, la);
};
var yk = la, l0 = {
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
function s0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: xl
} = ee("overlay");
const sa = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: l0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Vt(() => e.show, 1), {
      disabled: o
    } = lo(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    so(() => e.show, () => e.lockScroll);
    var i = () => Z("div", Be({
      class: xl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [k(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return Z(Le, {
        name: xl("--fade")
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
        return Z(En, {
          to: u,
          disabled: o.value
        }, s0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
var bk = sa, u0 = {
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
  n: d0,
  classes: v0
} = ee("pagination"), f0 = ["item-mode", "onClick"];
function c0(e, r) {
  var n = te("var-icon"), a = te("var-input"), t = te("var-cell"), o = te("var-menu"), l = Ie("ripple");
  return p(), $(
    "ul",
    {
      class: c(e.n())
    },
    [$e((p(), $(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [Y(e.$slots, "prev", {}, () => [Z(n, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), $(
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
          "onUpdate:modelValue": r[1] || (r[1] = (i) => e.simpleCurrentValue = i),
          onBlur: r[2] || (r[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: r[3] || (r[3] = _i((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), D("span", null, [Se(
        " / " + ne(e.pageCount) + " ",
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
    )) : (p(!0), $(
      Ve,
      {
        key: 1
      },
      Ue(e.pageList, (i, s) => $e((p(), $(
        "li",
        {
          key: s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [Se(
          ne(i),
          1
          /* TEXT */
        )],
        10,
        f0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), $e((p(), $(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [Y(e.$slots, "next", {}, () => [Z(n, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), $(
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
          "onUpdate:show": r[6] || (r[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(p(!0), $(
            Ve,
            null,
            Ue(e.sizeOption, (i, s) => $e((p(), be(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [Se(
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
          default: ve(() => [D(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: r[5] || (r[5] = Tr(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [D(
              "span",
              null,
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
              /* TEXT */
            ), Z(
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
    )) : Q("v-if", !0), e.showQuickJumper && !e.simple ? (p(), $(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [Se(
        ne(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Z(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: r[9] || (r[9] = _i((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : Q("v-if", !0), e.totalText ? (p(), $(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ne(e.totalText),
      3
      /* TEXT, CLASS */
    )) : Q("v-if", !0)],
    2
    /* CLASS */
  );
}
var jd = x({
  name: "VarPagination",
  components: {
    VarMenu: Jr,
    VarIcon: Oe,
    VarCell: pn,
    VarInput: Sn
  },
  directives: {
    Ripple: We
  },
  props: u0,
  setup(e) {
    var r = M(!1), n = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(R(e.current) || 1), i = M(R(e.size) || 10), s = M([]), u = z(() => Math.ceil(e.maxPagerCount / 2)), d = z(() => Math.ceil(R(e.total) / R(i.value))), v = z(() => {
      var T = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, R(e.total));
      return [T, I];
    }), f = z(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = (T, I) => lr(T) ? !1 : I === 1 ? t.value : o.value, g = (T, I) => lr(T) ? "basic" : I === 1 ? "head" : "tail", y = (T, I) => {
      if (!(T === l.value || e.disabled)) {
        if (T === "...") {
          l.value = I === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
        lr(T) && (l.value = T);
      }
    }, b = () => {
      e.disabled || (r.value = !0);
    }, w = (T) => {
      i.value = T, r.value = !1;
      var I = V(l.value);
      a.value = String(I), l.value = I;
    }, V = (T) => T > d.value ? d.value : T < 1 ? 1 : T, S = (T, I, P) => {
      P.target.blur();
      var N = V(R(I));
      a.value = String(N), l.value = N, T === "quick" && (n.value = "");
    };
    return oe([() => e.current, () => e.size], (T) => {
      var [I, P] = T;
      l.value = R(I) || 1, i.value = R(P || 10);
    }), oe([l, i, d], (T, I) => {
      var [P, N, h] = T, [O, j] = I, L = [], {
        maxPagerCount: K,
        total: X,
        onChange: ie
      } = e, E = Math.ceil(R(X) / R(j)), C = h - (K - u.value) - 1;
      if (a.value = "" + P, h - 2 > K) {
        if (O === void 0 || h !== E)
          for (var B = 2; B < K + 2; B++)
            L.push(B);
        if (P <= K && P < C) {
          L = [];
          for (var _ = 1; _ < K + 1; _++)
            L.push(_ + 1);
          t.value = !0, o.value = !1;
        }
        if (P > K && P < C) {
          L = [];
          for (var F = 1; F < K + 1; F++)
            L.push(P + F - u.value);
          t.value = P === 2 && K === 1, o.value = !1;
        }
        if (P >= C) {
          L = [];
          for (var H = 1; H < K + 1; H++)
            L.push(h - (K - H) - 1);
          t.value = !1, o.value = !0;
        }
        L = [1, "...", ...L, "...", h];
      } else
        for (var A = 1; A <= h; A++)
          L.push(A);
      s.value = L, O != null && h > 0 && k(ie, P, N), k(e["onUpdate:current"], P), k(e["onUpdate:size"], N);
    }, {
      immediate: !0
    }), {
      n: d0,
      classes: v0,
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
      clickItem: y,
      showMenu: b,
      clickSize: w,
      setPage: S,
      toNumber: R,
      formatElevation: hr
    };
  }
});
jd.render = c0;
const ua = jd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var wk = ua, m0 = {
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
  n: p0,
  classes: h0
} = ee("paper");
function g0(e, r) {
  var n = Ie("ripple");
  return $e((p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: G({
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
var Wd = x({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: m0,
  setup(e) {
    var r = (n) => {
      k(e.onClick, n);
    };
    return {
      n: p0,
      classes: h0,
      formatElevation: hr,
      toSizeUnit: ye,
      handleClick: r
    };
  }
});
Wd.render = g0;
const da = Wd;
da.install = function(e) {
  e.component(da.name, da);
};
var Ck = da;
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
var y0 = gi({
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
  n: b0,
  classes: w0
} = ee("picker"), es = 300, C0 = 15, rs = 200, S0 = 1e3, ns = 0, k0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], $0 = ["onTransitionend"], T0 = ["onClick"];
function P0(e, r) {
  var n = te("var-button");
  return p(), be(
    nt(e.dynamic ? e.n("$-popup") : e.Transition),
    Be(e.dynamic ? {
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
      default: ve(() => [D(
        "div",
        Be({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [Y(e.$slots, "cancel", {}, () => [Z(
            n,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [Se(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), Y(e.$slots, "title", {}, () => [D(
            "div",
            {
              class: c(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), Y(e.$slots, "confirm", {}, () => [Z(
            n,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [Se(
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
        )) : Q("v-if", !0), D(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), $(
            Ve,
            null,
            Ue(e.scrollColumns, (a) => (p(), $(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstartPassive: (t) => e.handleTouchstart(a),
                onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [D(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.setScrollEl(t, a),
                  style: G({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(p(!0), $(
                  Ve,
                  null,
                  Ue(a.column.texts, (t, o) => (p(), $(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: G({
                        height: e.optionHeight + "px"
                      }),
                      key: t,
                      onClick: (l) => e.handleClick(a, o)
                    },
                    [D(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      ne(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    14,
                    T0
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                $0
              )],
              42,
              k0
            ))),
            128
            /* KEYED_FRAGMENT */
          )), D(
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
          ), D(
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
var Gd = x({
  name: "VarPicker",
  components: {
    VarButton: rr,
    VarPopup: Sr
  },
  inheritAttrs: !1,
  props: y0,
  setup(e) {
    var r = M([]), n = z(() => je(e.optionHeight)), a = z(() => je(e.optionCount)), t = z(() => a.value * n.value / 2 - n.value / 2), o = z(() => a.value * n.value), l = [], i = !1, s = (E, C) => {
      C.scrollEl = E;
    }, u = (E) => {
      k(e["onUpdate:show"], E);
    }, d = (E) => {
      var C = n.value + t.value, B = t.value - E.column.texts.length * n.value;
      E.translate >= C && (E.translate = C), E.translate <= B && (E.translate = B);
    }, v = (E, C) => {
      var {
        length: B
      } = E.column.texts;
      return C = C >= B ? B - 1 : C, C = C <= 0 ? 0 : C, C;
    }, f = (E, C) => {
      var B = Math.round((t.value - C) / n.value);
      return v(E, B);
    }, m = (E) => (E.translate = t.value - E.index * n.value, E.translate), g = () => {
      var E = r.value.map((B) => B.column.texts[B.index]), C = r.value.map((B) => B.index);
      return {
        texts: E,
        indexes: C
      };
    }, y = function(E, C) {
      C === void 0 && (C = 0), m(E), E.duration = C;
    }, b = (E, C, B) => {
      E.translate += Math.abs(C / B) / 3e-3 * (C < 0 ? -1 : 1);
    }, w = (E, C) => {
      i || (E.index = C, E.scrolling = !0, y(E, rs));
    }, V = (E) => {
      E.touching = !0, E.translate = ko(E.scrollEl);
    }, S = (E, C) => {
      if (C.touching) {
        i = !0, C.scrolling = !1, C.duration = 0;
        var {
          clientY: B
        } = E.touches[0], _ = C.prevY !== void 0 ? B - C.prevY : 0;
        C.prevY = B, C.translate += _, d(C);
        var F = performance.now();
        F - C.momentumTime > es && (C.momentumTime = F, C.momentumPrevY = C.translate);
      }
    }, T = (E, C) => {
      C.touching = !1, C.prevY = void 0;
      var B = C.translate - C.momentumPrevY, _ = performance.now() - C.momentumTime, F = Math.abs(B) >= C0 && _ <= es;
      F && b(C, B, _), C.index = f(C, C.translate);
      var H = C.translate, A = m(C);
      C.scrolling = A !== H, y(C, F ? S0 : rs), C.scrolling || L(C), br(() => {
        i = !1;
      });
    }, I = (E) => {
      E.scrolling = !1, L(E);
    }, P = (E) => E.map((C, B) => {
      var _, F = Pe(C) ? {
        texts: C
      } : C, H = {
        id: ns++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (_ = F.initialIndex) != null ? _ : 0,
        columnIndex: B,
        duration: 0,
        momentumTime: 0,
        column: F,
        scrollEl: null,
        scrolling: !1
      };
      return y(H), H;
    }), N = (E) => {
      var C = [];
      return h(C, E, 0, !0), C;
    }, h = function(E, C, B, _) {
      if (_ === void 0 && (_ = !1), Pe(C) && C.length) {
        var F, H = _ && (F = e.cascadeInitialIndexes[E.length]) != null ? F : 0, A = {
          id: ns++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: H,
          columnIndex: B,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: C.map((W) => W[e.textKey])
          },
          columns: C,
          scrollEl: null,
          scrolling: !1
        };
        E.push(A), y(A), h(E, A.columns[A.index].children, B + 1, _);
      }
    }, O = (E) => {
      r.value.splice(r.value.indexOf(E) + 1), h(r.value, E.columns[E.index].children, E.columnIndex + 1);
    }, j = () => {
      var {
        indexes: E
      } = g();
      return E.every((C, B) => C === l[B]);
    }, L = (E) => {
      var {
        cascade: C,
        onChange: B
      } = e;
      if (!j()) {
        C && O(E);
        var _ = r.value.some((A) => A.scrolling);
        if (!_) {
          var {
            texts: F,
            indexes: H
          } = g();
          l = [...H], k(B, F, H);
        }
      }
    }, K = () => {
      if (e.cascade) {
        var E = r.value.find((C) => C.scrolling);
        E && (E.index = f(E, ko(E.scrollEl)), E.scrolling = !1, y(E), O(E));
      } else
        r.value.forEach((C) => {
          C.index = f(C, ko(C.scrollEl)), y(C);
        });
    }, X = () => {
      K();
      var {
        texts: E,
        indexes: C
      } = g();
      l = [...C], k(e.onConfirm, E, C);
    }, ie = () => {
      K();
      var {
        texts: E,
        indexes: C
      } = g();
      l = [...C], k(e.onCancel, E, C);
    };
    return oe(() => e.columns, (E) => {
      r.value = e.cascade ? N(xi(E)) : P(xi(E));
      var {
        indexes: C
      } = g();
      l = [...C];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: b0,
      classes: w0,
      pack: Ze,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Le,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: V,
      handleTouchmove: S,
      handleTouchend: T,
      handleTransitionend: I,
      confirm: X,
      cancel: ie,
      dt: oo,
      handleClick: w
    };
  }
});
Gd.render = P0;
const kn = Gd;
var fr;
function La(e) {
  return new Promise((r) => {
    La.close();
    var n = Pe(e) ? {
      columns: e
    } : e, a = Ae(n);
    a.dynamic = !0, a.teleport = "body", fr = a;
    var {
      unmountInstance: t
    } = ot(kn, a, {
      onConfirm: (o, l) => {
        k(a.onConfirm, o, l), r({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onCancel: (o, l) => {
        k(a.onCancel, o, l), r({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onClose: () => {
        k(a.onClose), r({
          state: "close"
        }), fr === a && (fr = null);
      },
      onClosed: () => {
        k(a.onClosed), t(), fr === a && (fr = null);
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
kn.install = function(e) {
  e.component(kn.name, kn);
};
La.Component = kn;
La.install = function(e) {
  e.component(kn.name, kn);
};
La.close = function() {
  if (fr != null) {
    var e = fr;
    fr = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
var Sk = kn;
function O0(e) {
  return ["linear", "circle"].includes(e);
}
var V0 = {
  mode: {
    type: String,
    default: "linear",
    validator: O0
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
  n: M0,
  classes: E0
} = ee("progress"), Dn = 100, B0 = ["viewBox"], I0 = ["cx", "cy", "r", "stroke-width"], N0 = ["cx", "cy", "r", "stroke-width"];
function D0(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [D(
        "div",
        {
          class: c(e.n("linear-block")),
          style: G({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), $(
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
        )) : Q("v-if", !0), D(
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
      ), e.label ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Se(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : Q("v-if", !0)],
      2
      /* CLASS */
    )) : Q("v-if", !0), e.mode === "circle" ? (p(), $(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), $(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), $(
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
          I0
        )) : Q("v-if", !0), D(
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
          N0
        )],
        14,
        B0
      )), e.label ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Se(
          ne(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : Q("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : Q("v-if", !0)],
    2
    /* CLASS */
  );
}
var qd = x({
  name: "VarProgress",
  props: V0,
  setup(e) {
    var r = z(() => {
      var a = R(e.value), t = a > Dn ? Dn : a, o = a > Dn ? Dn : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), n = z(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + je(a) + " " + je(a), i = R(o) > Dn ? Dn : Math.round(R(o)), s = (je(a) - je(t)) / 2, u = 2 * Math.PI * s, d = i / Dn * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: M0,
      classes: E0,
      toSizeUnit: ye,
      multiplySizeUnit: or,
      linearProps: r,
      circleProps: n
    };
  }
});
qd.render = D0;
const va = qd;
va.install = function(e) {
  e.component(va.name, va);
};
var kk = va, A0 = {
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
function as(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ts(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        as(o, a, t, l, i, "next", s);
      }
      function i(s) {
        as(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: os,
  classes: z0
} = ee("pull-refresh"), is = 150;
function L0(e, r) {
  var n = te("var-icon");
  return p(), $(
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
    [D(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: G(e.controlStyle)
      },
      [Z(
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
var Xd = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: A0,
  setup(e) {
    var r = M(0), n = M(null), a = M(null), t = M(0), o = M("-125%"), l = M("arrow-down"), i = M("default"), s = M(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var h = ts(function* (O) {
        if (l.value !== O)
          return l.value = O, new Promise((j) => {
            window.setTimeout(j, is);
          });
      });
      return function(j) {
        return h.apply(this, arguments);
      };
    }(), g = z(() => i.value !== "loading" && i.value !== "success" && !e.disabled), y = z(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), b = z(() => Math.abs(2 * r.value)), w = z(() => i.value === "success"), V = (h) => {
      var O = "classList" in u ? u : document.body;
      O.classList[h](os() + "--lock");
    }, S = (h) => {
      if (r.value === 0) {
        var {
          width: O
        } = xe(a.value);
        r.value = -(O + O * 0.25);
      }
      v = h.touches[0].clientY, f = 0, d = Tn(h.target);
    }, T = (h) => {
      if (g.value && !(d !== u && pt(d) > 0)) {
        var O = pt(u);
        if (!(O > 0)) {
          var j = O === 0, L = h.touches[0];
          f = L.clientY - v, j && f >= 0 && h.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = h.touches[0].clientY), j && o.value > r.value && V("add");
          var K = (h.touches[0].clientY - t.value) / 2 + r.value;
          o.value = K >= b.value ? b.value : K, m(o.value >= b.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var h = ts(function* () {
        g.value && (s.value = !0, o.value >= b.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = b.value * 0.3, k(e["onUpdate:modelValue"], !0), Ne(() => {
          k(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, R(e.animationDuration))), d = null);
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), P = () => {
      u = e.target ? Cs(e.target, "PullRefresh") : Tn(n.value);
    }, N = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    };
    return oe(() => e.modelValue, (h) => {
      h === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, N();
      }, R(e.successDuration)));
    }), sr(P), Rr(n, "touchmove", T), {
      n: os,
      classes: z0,
      ICON_TRANSITION: is,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: S,
      touchMove: T,
      touchEnd: I,
      iconName: l,
      controlStyle: y,
      isSuccess: w
    };
  }
});
Xd.render = L0;
const fa = Xd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var $k = fa, R0 = {
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
}, Kd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function U0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(Kd);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function F0() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ur(Kd);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: H0,
  classes: Y0
} = ee("radio");
function j0(e, r) {
  var n = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      Be({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [$e((p(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [Z(
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
        }, () => [Z(
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
      }], [l, e.handleHovering, "desktop"]]), D(
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
var Zd = x({
  name: "VarRadio",
  directives: {
    Ripple: We,
    Hover: Ur
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  inheritAttrs: !1,
  props: R0,
  setup(e) {
    var r = M(!1), n = z(() => r.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = F0(), {
      hovering: l,
      handleHovering: i
    } = Pn(), {
      form: s,
      bindForm: u
    } = Vr(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Or(), g = (P) => {
      Ne(() => {
        var {
          validateTrigger: N,
          rules: h,
          modelValue: O
        } = e;
        v(N, P, h, O);
      });
    }, y = (P) => {
      var {
        checkedValue: N,
        onChange: h
      } = e;
      t && r.value === N || (r.value = P, k(e["onUpdate:modelValue"], r.value), k(h, r.value), t == null || t.onToggle(N), g("onChange"));
    }, b = (P) => {
      var {
        disabled: N,
        readonly: h,
        uncheckedValue: O,
        checkedValue: j,
        onClick: L
      } = e;
      s != null && s.disabled.value || N || (k(L, P), !(s != null && s.readonly.value || h) && (a.value = !0, y(n.value ? O : j)));
    }, w = (P) => {
      var {
        checkedValue: N,
        uncheckedValue: h
      } = e;
      r.value = P === N ? N : h;
    }, V = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, S = () => f(e.rules, e.modelValue), T = (P) => {
      var {
        uncheckedValue: N,
        checkedValue: h
      } = e, O = ![N, h].includes(P);
      O && (P = n.value ? N : h), y(P);
    };
    oe(() => e.modelValue, (P) => {
      r.value = P;
    }, {
      immediate: !0
    });
    var I = {
      sync: w,
      validate: S,
      resetValidation: m,
      reset: V
    };
    return k(o, I), k(u, I), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: H0,
      classes: Y0,
      handleClick: b,
      toggle: T,
      reset: V,
      validate: S,
      resetValidation: m
    };
  }
});
Zd.render = j0;
const ca = Zd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var Tk = ca;
function W0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var G0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: W0
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
  n: q0,
  classes: X0
} = ee("radio-group");
function K0(e, r) {
  var n = te("var-form-details");
  return p(), $(
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
    ), Z(
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
var Jd = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: _e
  },
  props: G0,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = U0(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Or(), u = z(() => o.value), d = (b) => {
      Ne(() => {
        var {
          validateTrigger: w,
          rules: V,
          modelValue: S
        } = e;
        l(w, b, V, S);
      });
    }, v = () => n.forEach((b) => {
      var {
        sync: w
      } = b;
      return w(e.modelValue);
    }), f = (b) => {
      k(e["onUpdate:modelValue"], b), k(e.onChange, b), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    oe(() => e.modelValue, v), oe(() => r.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, y), a(y), {
      errorMessage: o,
      n: q0,
      classes: X0,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
Jd.render = K0;
const ma = Jd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Pk = ma, Z0 = {
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
  n: lt
} = ee("rate"), J0 = ["onClick"];
function Q0(e, r) {
  var n = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), $(
        Ve,
        null,
        Ue(e.toNumber(e.count), (i) => $e((p(), $(
          "div",
          {
            key: i,
            style: G(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [Z(
            n,
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
          J0
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
var Qd = x({
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Ur
  },
  props: Z0,
  setup(e) {
    var {
      form: r,
      bindForm: n
    } = Vr(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Or(), {
      hovering: i
    } = Pn(), s = M(-1), u = (S) => {
      var {
        count: T,
        gap: I
      } = e;
      return {
        color: v(S).color,
        marginRight: S !== R(T) ? ye(I) : 0
      };
    }, d = (S) => {
      var {
        name: T,
        color: I
      } = v(S);
      return {
        [lt("content")]: !0,
        [lt("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [lt("--error")]: a.value,
        [lt("--primary")]: T !== e.emptyIcon && !I
      };
    }, v = (S) => {
      var {
        modelValue: T,
        disabled: I,
        disabledColor: P,
        color: N,
        half: h,
        emptyColor: O,
        icon: j,
        halfIcon: L,
        emptyIcon: K
      } = e, X = N;
      return (I || r != null && r.disabled.value) && (X = P), S <= R(T) ? {
        color: X,
        name: j
      } : h && S <= R(T) + 0.5 ? {
        color: X,
        name: L
      } : {
        color: I || r != null && r.disabled.value ? P : O,
        name: K
      };
    }, f = (S, T) => {
      if (e.half) {
        var {
          offsetWidth: I
        } = T.target;
        T.offsetX <= Math.floor(I / 2) && (S -= 0.5);
      }
      k(e["onUpdate:modelValue"], S);
    }, m = () => o(e.rules, R(e.modelValue)), g = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = (S, T) => {
      var {
        readonly: I,
        disabled: P,
        onChange: N
      } = e;
      I || P || r != null && r.disabled.value || r != null && r.readonly.value || (f(S, T), k(N, S), g());
    }, b = (S) => (T) => {
      s.value = S, i.value = T;
    }, w = () => {
      k(e["onUpdate:modelValue"], 0), l();
    }, V = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return k(n, V), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: y,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: b,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: ye,
      toNumber: R,
      n: lt
    };
  }
});
Qd.render = Q0;
const pa = Qd;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Ok = pa;
function _0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var x0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: _0
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
}, e1 = (e) => (Ra(""), e = e(), Ua(), e), r1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, n1 = /* @__PURE__ */ e1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), a1 = [n1];
function t1(e, r) {
  return p(), $("svg", r1, a1);
}
var _d = x({});
_d.render = t1;
const o1 = _d;
var i1 = (e) => (Ra(""), e = e(), Ua(), e), l1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, s1 = /* @__PURE__ */ i1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), u1 = [s1];
function d1(e, r) {
  return p(), $("svg", l1, u1);
}
var xd = x({});
xd.render = d1;
const v1 = xd;
var f1 = (e) => (Ra(""), e = e(), Ua(), e), c1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, m1 = /* @__PURE__ */ f1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), p1 = [m1];
function h1(e, r) {
  return p(), $("svg", c1, p1);
}
var ev = x({});
ev.render = h1;
const g1 = ev;
var {
  n: y1,
  classes: b1
} = ee("result");
function w1(e, r) {
  return p(), $(
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
        style: G({
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
        style: G({
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
        style: G({
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
var rv = x({
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
      n: y1,
      classes: b1,
      toNumber: R
    };
  }
});
rv.render = w1;
const C1 = rv;
var S1 = (e) => (Ra(""), e = e(), Ua(), e), k1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, $1 = /* @__PURE__ */ S1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), T1 = [$1];
function P1(e, r) {
  return p(), $("svg", k1, T1);
}
var nv = x({});
nv.render = P1;
const O1 = nv;
var V1 = (e) => (Ra(""), e = e(), Ua(), e), M1 = {
  viewBox: "-4 -4 32 32"
}, E1 = /* @__PURE__ */ V1(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), B1 = [E1];
function I1(e, r) {
  return p(), $("svg", M1, B1);
}
var av = x({});
av.render = I1;
const N1 = av;
var {
  n: D1,
  classes: A1
} = ee("result");
function z1(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "image", {}, () => [e.type ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: G({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), be(
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
    )) : Q("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : Q("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : Q("v-if", !0)]), e.$slots.footer ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : Q("v-if", !0)],
    2
    /* CLASS */
  );
}
var tv = x({
  name: "VarResult",
  components: {
    Info: o1,
    Success: C1,
    Warning: g1,
    Error: v1,
    Question: O1,
    Empty: N1
  },
  props: x0,
  setup(e) {
    var r = z(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = z(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: D1,
      classes: A1,
      toNumber: R,
      toPxNum: je,
      toSizeUnit: ye,
      circleSize: r,
      borderSize: n
    };
  }
});
tv.render = z1;
const ha = tv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Vk = ha;
function L1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function R1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var U1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: L1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: R1
  },
  onClick: U()
}, {
  n: F1,
  classes: H1
} = ee("row");
function Y1(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: G({
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
var ov = x({
  name: "VarRow",
  props: U1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = Qm(), t = z(() => {
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
      k(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return oe(() => a.value, o), oe(() => e.gutter, o), n(i), {
      n: F1,
      classes: H1,
      average: t,
      handleClick: l,
      padStartFlex: qt
    };
  }
});
ov.render = Y1;
const ga = ov;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Mk = ga;
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, yi.apply(this, arguments);
}
function j1(e) {
  return ["left", "right", "center"].includes(e);
}
var W1 = yi({
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
    validator: j1
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
}, Je(Gi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: G1,
  classes: q1
} = ee("select"), X1 = {
  key: 1
};
function K1(e, r) {
  var n = te("var-chip"), a = te("var-icon"), t = te("var-field-decorator"), o = te("var-menu"), l = te("var-form-details");
  return p(), $(
    "div",
    {
      class: c(e.n()),
      onClick: r[3] || (r[3] = function() {
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
        "onUpdate:show": r[1] || (r[1] = (i) => e.isFocus = i),
        onClose: e.handleBlur
      },
      {
        menu: ve(() => [D(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ve(() => [Z(
          t,
          Tt(to({
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
          hs({
            "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
            default: ve(() => [D(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: G({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [D(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? Q("v-if", !0) : Y(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), $(
                  Ve,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), $(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(p(!0), $(
                      Ve,
                      null,
                      Ue(e.labels, (i) => (p(), be(
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
                          default: ve(() => [Se(
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
                  )) : (p(), $(
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
                )) : (p(), $(
                  "span",
                  X1,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), e.useCustomPlaceholder ? (p(), $(
                "span",
                {
                  key: 0,
                  class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                  style: G({
                    color: e.placeholderColor
                  })
                },
                ne(e.placeholder),
                7
                /* TEXT, CLASS, STYLE */
              )) : Q("v-if", !0), Y(e.$slots, "arrow-icon", {
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
            _: 2
            /* DYNAMIC */
          }, [e.$slots["prepend-icon"] ? {
            name: "prepend-icon",
            fn: ve(() => [Y(e.$slots, "prepend-icon")]),
            key: "0"
          } : void 0]),
          1040
          /* FULL_PROPS, DYNAMIC_SLOTS */
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
var iv = x({
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: Jr,
    VarChip: gn,
    VarFieldDecorator: Od,
    VarFormDetails: _e
  },
  props: W1,
  setup(e) {
    var r = M(!1), n = z(() => e.multiple), a = z(() => e.focusColor), t = M(""), o = M([]), l = z(() => Yr(e.modelValue)), i = z(() => e.disabled || e.readonly ? "" : "pointer"), s = M(0), {
      bindForm: u,
      form: d
    } = Vr(), {
      length: v,
      options: f,
      bindOptions: m
    } = r0(), {
      errorMessage: g,
      validateWithTrigger: y,
      validate: b,
      // expose
      resetValidation: w
    } = Or(), V = M(null), S = z(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), T = z(() => {
      var {
        hint: W,
        blurColor: J,
        focusColor: re
      } = e;
      if (!W)
        return g.value ? "var(--field-decorator-error-color)" : r.value ? re || "var(--field-decorator-focus-color)" : J || "var(--field-decorator-blur-color)";
    }), I = z(() => !e.hint && Yr(e.modelValue) && !r.value), P = () => {
      var {
        multiple: W,
        modelValue: J
      } = e;
      if (W) {
        var re = J;
        o.value = re.map(O);
      }
      !W && !Yr(J) && (t.value = O(J)), !W && Yr(J) && (t.value = "");
    }, N = (W) => {
      Ne(() => {
        var {
          validateTrigger: J,
          rules: re,
          modelValue: ue
        } = e;
        y(J, W, re, ue);
      });
    }, h = (W) => {
      var {
        value: J,
        label: re
      } = W;
      return J.value != null ? J.value : re.value;
    }, O = (W) => {
      var J, re, ue = f.find((ge) => {
        var {
          value: Ce
        } = ge;
        return Ce.value === W;
      });
      return ue || (ue = f.find((ge) => {
        var {
          label: Ce
        } = ge;
        return Ce.value === W;
      })), (J = (re = ue) == null ? void 0 : re.label.value) != null ? J : "";
    }, j = () => {
      var {
        disabled: W,
        readonly: J,
        onFocus: re
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || W || J || (s.value = je(e.offsetY), r.value = !0, k(re), N("onFocus"));
    }, L = () => {
      var {
        disabled: W,
        readonly: J,
        onBlur: re
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || W || J || (k(re), N("onBlur"));
    }, K = (W) => {
      var {
        disabled: J,
        readonly: re,
        multiple: ue,
        onChange: ge
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || J || re)) {
        var Ce = ue ? f.filter((ar) => {
          var {
            selected: ae
          } = ar;
          return ae.value;
        }).map(h) : h(W);
        k(e["onUpdate:modelValue"], Ce), k(ge, Ce), N("onChange"), !ue && (r.value = !1);
      }
    }, X = () => {
      var {
        disabled: W,
        readonly: J,
        multiple: re,
        clearable: ue,
        onClear: ge
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || W || J || !ue)) {
        var Ce = re ? [] : void 0;
        k(e["onUpdate:modelValue"], Ce), k(ge, Ce), N("onClear");
      }
    }, ie = (W) => {
      var {
        disabled: J,
        onClick: re
      } = e;
      d != null && d.disabled.value || J || (k(re, W), N("onClick"));
    }, E = (W) => {
      var {
        disabled: J,
        readonly: re,
        modelValue: ue,
        onClose: ge
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || J || re)) {
        var Ce = ue, ar = f.find((de) => {
          var {
            label: ce
          } = de;
          return ce.value === W;
        }), ae = Ce.filter((de) => {
          var ce;
          return de !== ((ce = ar.value.value) != null ? ce : ar.label.value);
        });
        k(e["onUpdate:modelValue"], ae), k(ge, ae), N("onClose");
      }
    }, C = () => {
      var {
        multiple: W,
        modelValue: J
      } = e;
      if (W) {
        var re = J;
        f.forEach((ue) => ue.sync(re.includes(h(ue))));
      } else
        f.forEach((ue) => ue.sync(J === h(ue)));
      P();
    }, B = () => {
      s.value = je(e.offsetY), r.value = !0;
    }, _ = () => {
      r.value = !1;
    }, F = () => b(e.rules, e.modelValue), H = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    oe(() => e.multiple, () => {
      var {
        multiple: W,
        modelValue: J
      } = e;
      W && !Pe(J) && Pr("Select", "The modelValue must be an array when multiple is true");
    }), oe(() => e.modelValue, C, {
      deep: !0
    }), oe(() => v.value, C);
    var A = {
      multiple: n,
      focusColor: a,
      computeLabel: P,
      onSelect: K,
      reset: H,
      validate: F,
      resetValidation: w
    };
    return m(A), k(u, A), {
      offsetY: s,
      isFocus: r,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: V,
      placement: S,
      cursor: i,
      placeholderColor: T,
      useCustomPlaceholder: I,
      n: G1,
      classes: q1,
      handleFocus: j,
      handleBlur: L,
      handleClear: X,
      handleClick: ie,
      handleClose: E,
      reset: H,
      validate: F,
      resetValidation: w,
      focus: B,
      blur: _
    };
  }
});
iv.render = K1;
const ya = iv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Ek = ya, Z1 = {
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
  n: J1,
  classes: Q1
} = ee("skeleton");
function _1(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? Q("v-if", !0) : (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), $(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: G({
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
      )) : Q("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), $(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: G({
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
        )) : Q("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), $(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), $(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: G({
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
          )) : Q("v-if", !0), (p(!0), $(
            Ve,
            null,
            Ue(e.toNumber(e.rows), (n, a) => (p(), $(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: G({
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
        )) : Q("v-if", !0)],
        2
        /* CLASS */
      )) : Q("v-if", !0)],
      2
      /* CLASS */
    )) : Q("v-if", !0), e.loading && e.fullscreen ? (p(), $(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: G({
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
    )) : Q("v-if", !0)],
    2
    /* CLASS */
  );
}
var lv = x({
  name: "VarSkeleton",
  props: Z1,
  setup() {
    return {
      n: J1,
      classes: Q1,
      toSizeUnit: ye,
      toNumber: R
    };
  }
});
lv.render = _1;
const ba = lv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Bk = ba;
function x1(e) {
  return ["always", "normal", "never"].includes(e);
}
var ze;
(function(e) {
  e.First = "1", e.Second = "2";
})(ze || (ze = {}));
var ew = {
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
    validator: x1
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
  n: ls,
  classes: rw
} = ee("slider"), nw = ["onTouchstart"];
function aw(e, r) {
  var n = te("var-hover-overlay"), a = te("var-form-details"), t = Ie("hover");
  return p(), $(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: r[0] || (r[0] = function() {
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
            style: G({
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
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), $(
        Ve,
        null,
        Ue(e.thumbList, (o) => (p(), $(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: G(e.thumbStyle(o)),
            onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
          },
          [Y(e.$slots, "button", {
            currentValue: o.text
          }, () => [$e(D(
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
          ), [[t, (l) => e.hover(l, o), "desktop"]]), D(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
              style: G({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [Z(
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
          ), D(
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
            [D(
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
          nw
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
var sv = x({
  name: "VarSlider",
  components: {
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Hover: Ur
  },
  props: ew,
  setup(e) {
    var {
      bindForm: r,
      form: n
    } = Vr(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Or(), {
      hovering: i,
      handleHovering: s
    } = Pn(), {
      hovering: u,
      handleHovering: d
    } = Pn(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = M(null), y = M(0), b = M(!1), w = Ae({
      [ze.First]: f(),
      [ze.Second]: f()
    }), V = z(() => R(e.max) - R(e.min)), S = z(() => y.value / V.value * R(e.step)), T = z(() => {
      var {
        modelValue: ae,
        range: de
      } = e, ce = [];
      return de && Pe(ae) ? ce = [{
        value: X(ae[0]),
        enumValue: ze.First,
        text: ie(ae[0]),
        hovering: ut(i),
        handleHovering: s
      }, {
        value: X(ae[1]),
        enumValue: ze.Second,
        text: ie(ae[1]),
        hovering: ut(u),
        handleHovering: d
      }] : lr(ae) && (ce = [{
        value: X(ae),
        enumValue: ze.First,
        text: ie(ae),
        hovering: ut(i),
        handleHovering: s
      }]), ce;
    }), I = z(() => {
      var {
        activeColor: ae,
        range: de,
        modelValue: ce
      } = e, De = de && Pe(ce) ? X(Math.min(ce[0], ce[1])) : 0, Ke = de && Pe(ce) ? X(Math.max(ce[0], ce[1])) - De : X(ce);
      return h.value ? {
        left: "0px",
        height: Ke + "%",
        bottom: De + "%",
        background: ae
      } : {
        top: "0px",
        width: Ke + "%",
        left: De + "%",
        background: ae
      };
    }), P = z(() => e.disabled || (n == null ? void 0 : n.disabled.value)), N = z(() => e.readonly || (n == null ? void 0 : n.readonly.value)), h = z(() => e.direction === "vertical"), O, j = (ae) => {
      var de = ae.currentTarget;
      return de ? h.value ? y.value - (ae.clientY - xe(de).top) : ae.clientX - Kv(de) : 0;
    }, L = (ae) => {
      var de = h.value ? "bottom" : "left";
      return {
        [de]: ae.value + "%",
        zIndex: w[ae.enumValue].active ? 1 : void 0
      };
    }, K = (ae) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[ae].active, X = (ae) => {
      var {
        min: de,
        max: ce
      } = e;
      return ae < R(de) ? 0 : ae > R(ce) ? 100 : (ae - R(de)) / V.value * 100;
    }, ie = (ae) => {
      if (!lr(ae))
        return 0;
      var de = ae;
      de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max));
      var ce = parseInt("" + de, 10) === de;
      return ce ? de : R(de.toPrecision(5));
    }, E = (ae, de) => {
      P.value || de.handleHovering(ae);
    }, C = (ae, de) => {
      var ce = [], {
        step: De,
        range: Ke,
        modelValue: Ge,
        onChange: He,
        min: Ye
      } = e, le = R(De), we = Math.round(ae / S.value), pe = we * le + R(Ye), ke = w[de].percentValue * le + R(Ye);
      if (w[de].percentValue = we, Ke && Pe(Ge) && (ce = de === ze.First ? [pe, Ge[1]] : [Ge[0], pe]), ke !== pe) {
        var Te = Ke ? ce.map((Re) => ie(Re)) : ie(pe);
        k(He, Te), k(e["onUpdate:modelValue"], Te), m();
      }
    }, B = (ae) => {
      if (!e.range)
        return ze.First;
      var de = w[ze.First].percentValue * S.value, ce = w[ze.Second].percentValue * S.value, De = Math.abs(ae - de), Ke = Math.abs(ae - ce);
      return De <= Ke ? ze.First : ze.Second;
    }, _ = () => {
      document.addEventListener("touchmove", A, {
        passive: !1
      }), document.addEventListener("touchend", W), document.addEventListener("touchcancel", W);
    }, F = () => {
      document.removeEventListener("touchmove", A), document.removeEventListener("touchend", W), document.removeEventListener("touchcancel", W);
    }, H = (ae, de) => {
      if (y.value || (y.value = g.value.offsetWidth), P.value || (w[de].active = !0), O = de, _(), !(P.value || N.value)) {
        k(e.onStart), b.value = !0;
        var {
          clientX: ce,
          clientY: De
        } = ae.touches[0];
        w[de].startPosition = h.value ? De : ce;
      }
    }, A = (ae) => {
      if (ae.preventDefault(), !(P.value || N.value || !b.value)) {
        var {
          startPosition: de,
          currentOffset: ce
        } = w[O], {
          clientX: De,
          clientY: Ke
        } = ae.touches[0], Ge = (h.value ? de - Ke : De - de) + ce;
        Ge <= 0 ? Ge = 0 : Ge >= y.value && (Ge = y.value), C(Ge, O);
      }
    }, W = () => {
      F();
      var {
        range: ae,
        modelValue: de,
        onEnd: ce,
        step: De,
        min: Ke
      } = e;
      if (P.value || (w[O].active = !1), !(P.value || N.value)) {
        var Ge = [];
        w[O].currentOffset = w[O].percentValue * S.value;
        var He = w[O].percentValue * R(De) + R(Ke);
        ae && Pe(de) && (Ge = O === ze.First ? [He, de[1]] : [de[0], He]), k(ce, ae ? Ge : He), b.value = !1;
      }
    }, J = (ae) => {
      if (!(P.value || N.value) && !ae.target.closest("." + ls("thumb"))) {
        var de = j(ae), ce = B(de);
        O = ce, C(de, ce), W();
      }
    }, re = () => {
      var ae = R(e.step);
      return isNaN(ae) ? (tl("Slider", 'type of prop "step" should be Number'), !1) : ae < 0 ? (tl("Slider", '"step" should be > 0'), !1) : !0;
    }, ue = () => {
      var {
        range: ae,
        modelValue: de
      } = e;
      return ae && !Pe(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ae && Pe(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ae && Pe(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ge = function(ae, de) {
      ae === void 0 && (ae = e.modelValue), de === void 0 && (de = R(e.step));
      var ce = (De) => {
        var {
          min: Ke,
          max: Ge
        } = e;
        return De < R(Ke) ? 0 : De > R(Ge) ? V.value / de : (De - R(Ke)) / de;
      };
      e.range && Pe(ae) ? (w[ze.First].percentValue = ce(ae[0]), w[ze.First].currentOffset = w[ze.First].percentValue * S.value, w[ze.Second].percentValue = ce(ae[1]), w[ze.Second].currentOffset = w[ze.Second].percentValue * S.value) : lr(ae) && (w[ze.First].currentOffset = ce(ae) * S.value);
    }, Ce = () => {
      var ae = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], ae), l();
    }, ar = {
      reset: Ce,
      validate: v,
      resetValidation: l
    };
    return k(r, ar), oe([() => e.modelValue, () => e.step], (ae) => {
      var [de, ce] = ae;
      !re() || !ue() || b.value || ge(de, R(ce));
    }), oe(y, () => ge()), sr(() => {
      !re() || !ue() || (y.value = g.value[h.value ? "offsetHeight" : "offsetWidth"]);
    }), kt(() => {
      F();
    }), {
      n: ls,
      classes: rw,
      Thumbs: ze,
      sliderEl: g,
      getFillStyle: I,
      isDisabled: P,
      isVertical: h,
      thumbStyle: L,
      errorMessage: a,
      thumbsProps: w,
      thumbList: T,
      hover: E,
      multiplySizeUnit: or,
      toNumber: R,
      showLabel: K,
      start: H,
      move: A,
      end: W,
      click: J
    };
  }
});
sv.render = aw;
const wa = sv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Ik = wa;
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
function tw(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function ow(e) {
  return Ki.includes(e);
}
var uv = {
  type: {
    type: String,
    validator: ow
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: tw
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
  loadingType: Je(dn, "type"),
  loadingSize: Je(dn, "size"),
  loadingRadius: Je(dn, "radius"),
  loadingColor: bi({}, Je(dn, "color"), {
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
  n: iw,
  classes: lw
} = ee("snackbar"), sw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function uw(e, r) {
  var n = te("var-icon"), a = te("var-loading");
  return $e((p(), $(
    "div",
    {
      class: c(e.n()),
      style: G({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: G({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [Y(e.$slots, "default", {}, () => [Se(
          ne(e.content),
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
        [Y(e.$slots, "icon")],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (p(), be(
          n,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : Q("v-if", !0), e.type === "loading" ? (p(), be(
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
        )) : Q("v-if", !0), Y(e.$slots, "action")],
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
var dv = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Nr,
    VarIcon: Oe
  },
  props: uv,
  setup(e) {
    var r = M(null), {
      zIndex: n
    } = Vt(() => e.show, 1);
    so(() => e.show, () => e.lockScroll);
    var a = z(() => e.type === "loading" || e.forbidClick), t = z(() => e.type ? sw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return oe(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), k(e.onClose));
    }), oe(() => e._update, () => {
      clearTimeout(r.value), o();
    }), sr(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Ki,
      n: iw,
      classes: lw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
dv.render = uw;
const vv = dv;
var {
  n: dw
} = ee("snackbar");
function vw(e, r) {
  var n = te("var-snackbar-core");
  return p(), be(
    En,
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
          n,
          Be(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: ve(() => [Y(e.$slots, "icon")]),
            action: ve(() => [Y(e.$slots, "action")]),
            default: ve(() => [Y(e.$slots, "default", {}, () => [Se(
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
var fv = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: vv
  },
  props: uv,
  setup() {
    var {
      disabled: e
    } = lo();
    return {
      n: dw,
      disabled: e
    };
  }
});
fv.render = vw;
const Ca = fv;
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
function fw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var Ki = ["loading", "success", "warning", "info", "error"], ss = 0, wi = !1, cv, xa = !1, mv = {
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
}, $r = Ae([]), Zi = mv, cw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Vo = (e) => () => Pt(e) ? e() : e, mw = {
  setup() {
    return () => {
      var e = $r.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), xa && (a.position = "top");
        var l = xa ? "relative" : "absolute", i = Ct({
          position: l
        }, ww(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Vo(s),
          icon: Vo(u),
          action: Vo(d)
        };
        return Z(vv, Be(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Z(Yv, Be(cw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: pw,
        onAfterLeave: hw
      }), fw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, xr = function(e) {
  var r = yw(e), n = Ae(Ct({}, Zi, r));
  n.show = !0, wi || (wi = !0, cv = ot(mw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: ss++,
    reactiveSnackOptions: n
  };
  if (a === 0 || xa)
    gw(t);
  else {
    var o = "update-" + ss;
    bw(n, o);
  }
  return {
    clear() {
      !xa && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
Ki.forEach((e) => {
  xr[e] = (r) => ($i(r) ? r.type = e : r = {
    content: r,
    type: e
  }, xr(r));
});
xr.install = function(e) {
  e.component(Ca.name, Ca);
};
xr.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== xa && ($r.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), xa = e);
};
xr.clear = function() {
  $r.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
xr.setDefaultOptions = function(e) {
  Zi = e;
};
xr.resetDefaultOptions = function() {
  Zi = mv;
};
xr.Component = Ca;
function pw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === R(r));
  n && k(n.reactiveSnackOptions.onOpened);
}
function hw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === R(r));
  n && (n.animationEnd = !0, k(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (k(cv), $r = Ae([]), wi = !1);
}
function gw(e) {
  $r.push(e);
}
function yw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function bw(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = Ct({}, n.reactiveSnackOptions, e), n._update = r;
}
function ww(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Nk = Ca;
const Ci = xr;
var pv = (e) => ["mini", "small", "normal", "large"].includes(e), Cw = (e) => pv(e) || Pe(e) || lr(e) || Fe(e), Sw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), kw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), $w = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Cw
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
    validator: Sw
  },
  align: {
    type: String,
    validator: kw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Tw(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Mo,
  classes: Pw
} = ee("space");
const Sa = x({
  name: "VarSpace",
  props: $w,
  setup(e, r) {
    var {
      slots: n
    } = r, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Pe(t) ? t.map(ye) : [ye(t), ye(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = k(n.default)) != null ? t : [], f = pv(d), [m, g] = a(d, f);
      v = Ms(v);
      var y = v.length - 1, b = v.map((w, V) => {
        var S = Tw(m, g, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: y
        });
        return Z("div", {
          style: {
            margin: S
          }
        }, [w]);
      });
      return Z("div", {
        class: Pw(Mo(), Mo("$--box"), [o, Mo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: qt(l),
          alignItems: qt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [b]);
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Dk = Sa, Ow = {
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
}, hv = Symbol("STEPS_BIND_STEP_KEY");
function Vw() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = dr(hv);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Mw() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(hv);
  return n || Pr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Ew,
  classes: Bw
} = ee("step"), Iw = {
  key: 3
};
function Nw(e, r) {
  var n = te("var-icon");
  return p(), $(
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
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: G({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: r[0] || (r[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (p(), be(
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
          )) : e.isCurrent && e.currentIcon ? (p(), be(
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
          )) : e.inactiveIcon ? (p(), be(
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
          )) : (p(), $(
            "span",
            Iw,
            ne(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), D(
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
      ), e.isLastChild ? Q("v-if", !0) : (p(), $(
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
var gv = x({
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: Ow,
  setup() {
    var e = M(null), r = M(""), n = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Mw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = z(() => l.value === a.value), m = z(() => a.value !== -1 && l.value > a.value), g = {
      index: a
    }, y = () => v(a.value), b = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(g), oe(i, (w) => {
      if (n.value = w - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        r.value = "0 -" + V + "px";
      }
    }), {
      n: Ew,
      classes: Bw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: r,
      activeColor: s,
      inactiveColor: u,
      isLastChild: n,
      click: y,
      getRef: b
    };
  }
});
gv.render = Nw;
const ka = gv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Ak = ka;
function Dw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Aw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Dw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: zw
} = ee("steps");
function Lw(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n()),
      style: G({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var yv = x({
  name: "VarSteps",
  props: Aw,
  setup(e) {
    var r = z(() => e.active), n = z(() => e.activeColor), a = z(() => e.inactiveColor), t = z(() => e.direction), {
      length: o,
      bindStep: l
    } = Vw(), i = (u) => {
      k(e.onClickStep, u);
    }, s = {
      active: r,
      length: o,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: zw
    };
  }
});
yv.render = Lw;
const $a = yv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var zk = $a, Rw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Uw
} = ee("style-provider"), Fw = x({
  name: "VarStyleProvider",
  props: Rw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => ps(e.tag, {
      class: Uw(),
      style: Os(e.styleVars)
    }, k(n.default));
  }
});
const Ta = Fw;
var Eo = [];
function St(e) {
  Eo.forEach((n) => document.documentElement.style.removeProperty(n)), Eo.length = 0;
  var r = Os(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Eo.push(a);
  });
}
St.Component = Ta;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
St.install = function(e) {
  e.component(Ta.name, Ta);
};
var Lk = Ta, Hw = {
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
  n: Yw,
  classes: jw
} = ee("switch");
function Ww(e, r) {
  var n = te("var-loading"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return $e((p(), $(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: r[0] || (r[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: G(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: G(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), $e((p(), $(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: G(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: G(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), be(
            n,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : Q("v-if", !0)],
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
var bv = x({
  name: "VarSwitch",
  components: {
    VarLoading: Nr,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Ur
  },
  props: Hw,
  setup(e) {
    var {
      bindForm: r,
      form: n
    } = Vr(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Or(), {
      hovering: i,
      handleHovering: s
    } = Pn(), u = () => o(e.rules, e.modelValue), d = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = z(() => {
      var {
        size: w,
        modelValue: V,
        color: S,
        closeColor: T,
        loadingColor: I,
        activeValue: P
      } = e;
      return {
        handle: {
          width: or(w),
          height: or(w),
          backgroundColor: V === P ? S : T,
          color: I
        },
        ripple: {
          left: V === P ? or(w, 0.5) : "-" + or(w, 0.5),
          color: V === P ? S : T || "#999",
          width: or(w, 2),
          height: or(w, 2)
        },
        track: {
          height: or(w, 0.72),
          width: or(w, 1.9),
          borderRadius: or(w, 2 / 3),
          filter: V === P || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === P ? S : T
        },
        switch: {
          height: or(w, 1.2),
          width: or(w, 2)
        }
      };
    }), f = z(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return or(w, 0.4);
    }), m = (w) => {
      var {
        onClick: V,
        onChange: S,
        disabled: T,
        loading: I,
        readonly: P,
        modelValue: N,
        activeValue: h,
        inactiveValue: O,
        "onUpdate:modelValue": j
      } = e;
      if (k(V, w), !(T || I || P || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var L = N === h ? O : h;
        k(S, L), k(j, L), d();
      }
    }, g = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, y = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, b = {
      reset: y,
      validate: u,
      resetValidation: l
    };
    return k(r, b), {
      n: Yw,
      classes: jw,
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
bv.render = Ww;
const Pa = bv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Rk = Pa, Gw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, wv = Symbol("TABS_BIND_TAB_KEY");
function qw() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = dr(wv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function Xw() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ur(wv);
  return r || Pr("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Rt,
  classes: Kw
} = ee("tab");
function Zw(e, r) {
  var n = Ie("ripple");
  return $e((p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: G({
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
var Cv = x({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Gw,
  setup(e) {
    var r = M(null), n = z(() => e.name), a = z(() => e.disabled), t = z(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Xw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: g
    } = l, y = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(y);
    var b = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : b() ? d.value : v.value, V = () => e.disabled ? Rt("$-tab--disabled") : b() ? Rt("$-tab--active") : Rt("$-tab--inactive"), S = (T) => {
      var {
        disabled: I,
        name: P,
        onClick: N
      } = e;
      I || (k(N, P ?? o.value, T), s(y));
    };
    return oe(() => e.name, g), oe(() => e.disabled, g), {
      n: Rt,
      classes: Kw,
      tabEl: r,
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
Cv.render = Zw;
const Oa = Cv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Uk = Oa, Jw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Qw,
  classes: _w
} = ee("tab-item");
function xw(e, r) {
  var n = te("var-swipe-item");
  return p(), be(
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
var Sv = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Kr
  },
  props: Jw,
  setup(e) {
    var r = M(!1), n = z(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Nb(), {
      bindLists: o
    } = Db(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: z(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: Qw,
      classes: _w,
      current: r
    };
  }
});
Sv.render = xw;
const Va = Sv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Fk = Va, eC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: rC,
  classes: nC
} = ee("table");
function aC(e, r) {
  return p(), $(
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
          style: G({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [Y(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : Q("v-if", !0)],
    2
    /* CLASS */
  );
}
var kv = x({
  name: "VarTable",
  props: eC,
  setup() {
    return {
      toSizeUnit: ye,
      n: rC,
      classes: nC,
      formatElevation: hr
    };
  }
});
kv.render = aC;
const Ma = kv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Hk = Ma;
function us(e) {
  return ["horizontal", "vertical"].includes(e);
}
function tC(e) {
  return ["auto", "always"].includes(e);
}
function oC(e) {
  return ["normal", "reverse"].includes(e);
}
var iC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: us
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: us
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
    validator: tC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: oC
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
function ds(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function vs(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: lC,
  classes: sC
} = ee("tabs");
function uC(e, r) {
  return p(), be(
    nt(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [D(
        "div",
        Be({
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
              style: G({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [D(
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
var $v = x({
  name: "VarTabs",
  components: {
    VarSticky: Zr
  },
  inheritAttrs: !1,
  props: iC,
  setup(e) {
    var r = M("0px"), n = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = z(() => e.active), s = z(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = z(() => e.activeColor), d = z(() => e.inactiveColor), v = z(() => e.disabledColor), f = z(() => e.itemDirection), m = M(null), {
      tabList: g,
      bindTabList: y,
      length: b
    } = qw(), w = (L) => {
      var K, X = (K = L.name.value) != null ? K : L.index.value, {
        active: ie,
        onChange: E,
        onClick: C
      } = e;
      k(e["onUpdate:active"], X), k(C, X), X !== ie && k(E, X);
    }, V = () => g.find((L) => {
      var {
        name: K
      } = L;
      return e.active === K.value;
    }), S = (L) => g.find((K) => {
      var {
        index: X
      } = K;
      return (L ?? e.active) === X.value;
    }), T = () => {
      if (b.value !== 0) {
        var {
          active: L
        } = e;
        if (lr(L)) {
          var K = L > b.value - 1 ? b.value - 1 : 0;
          return k(e["onUpdate:active"], K), S(K);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, P = (L) => {
      var {
        element: K
      } = L, X = K.value;
      X && (e.layoutDirection === "horizontal" ? (r.value = X.offsetWidth + "px", a.value = X.offsetLeft + "px") : (n.value = X.offsetHeight + "px", t.value = X.offsetTop + "px"));
    }, N = (L) => {
      var {
        element: K
      } = L;
      if (o.value) {
        var X = l.value, ie = K.value;
        if (e.layoutDirection === "horizontal") {
          var E = ie.offsetLeft + ie.offsetWidth / 2 - X.offsetWidth / 2;
          ht(X, {
            left: E,
            animation: No
          });
        } else {
          var C = ie.offsetTop + ie.offsetHeight / 2 - X.offsetHeight / 2;
          ht(X, {
            top: C,
            animation: No
          });
        }
      }
    }, h = () => {
      var L = V() || S() || T();
      !L || L.disabled.value || (I(), P(L), N(L));
    }, O = /* @__PURE__ */ function() {
      var L = vs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return L.apply(this, arguments);
      };
    }(), j = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: h,
      onTabClick: w
    };
    return y(j), oe(() => b.value, /* @__PURE__ */ vs(function* () {
      yield Lr(), h();
    })), oe(() => e.active, h), oe(() => e.scrollable, h), Mn(h), Rr(() => window, "resize", h), {
      stickyComponent: m,
      indicatorWidth: r,
      indicatorHeight: n,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Le,
      toSizeUnit: ye,
      n: lC,
      classes: sC,
      resize: h,
      resizeSticky: O,
      formatElevation: hr
    };
  }
});
$v.render = uC;
const Ea = $v;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var Yk = Ea, dC = {
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
function fs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function vC(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: fC
} = ee("tabs-items");
function cC(e, r) {
  var n = te("var-swipe");
  return p(), be(
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
var Tv = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: Xr
  },
  props: dC,
  setup(e) {
    var r = M(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = Ib(), o = (v) => n.find((f) => {
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
      m && (n.forEach((g) => {
        var {
          setCurrent: y
        } = g;
        return y(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((y) => {
        var {
          index: b
        } = y;
        return b.value === v;
      }), g = (f = m.name.value) != null ? f : m.index.value;
      k(e["onUpdate:active"], g);
    }, d = () => r.value;
    return a({}), oe(() => e.active, s), oe(() => t.value, /* @__PURE__ */ vC(function* () {
      yield Lr(), s(e.active);
    })), {
      swipe: r,
      n: fC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Tv.render = cC;
const Ba = Tv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var jk = Ba;
const mC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, pC = {
  "--badge-default-color": "#555"
}, hC = {
  "--button-default-color": "#303030"
}, gC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, yC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, bC = {
  "--checkbox-unchecked-color": "#fff"
}, wC = {
  "--chip-default-color": "#555"
}, CC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, SC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, kC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, $C = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, TC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, PC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, OC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, VC = {
  "--popup-content-background-color": "#1e1e1e"
}, MC = {
  "--pull-refresh-background": "#303030"
}, EC = {
  "--radio-unchecked-color": "#fff"
}, BC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, IC = {
  "--select-scroller-background": "#303030"
}, NC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, DC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, AC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, zC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, LC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, RC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, UC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, FC = {
  "--tabs-background": "#1e1e1e"
}, HC = {
  "--app-bar-color": "#272727"
}, YC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, jC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, WC = {
  "--menu-background-color": "#272727"
}, GC = {
  "--breadcrumb-inactive-color": "#aaa"
}, qC = {
  "--paper-background": "#303030"
}, XC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const KC = Si({
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
}, hC, yC, gC, RC, SC, NC, FC, zC, VC, kC, mC, wC, pC, UC, CC, MC, AC, DC, PC, LC, TC, IC, EC, bC, $C, OC, HC, YC, jC, WC, BC, GC, qC, XC);
var ZC = {
  dark: KC
}, Wk = null;
const ki = ZC;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], ir = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], cs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function JC(e) {
  return ["ampm", "24hr"].includes(e);
}
var QC = {
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
    validator: JC
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
}, Pv = (e, r) => e === "24hr" || r === "am", Ji = (e, r, n) => {
  var a = Cr.findIndex((o) => R(o) === R(n)), t = Pv(e, r) ? n : ir[a];
  return {
    hourStr: t,
    hourNum: R(t)
  };
}, cr = (e) => {
  var [r, n, a] = e.split(":");
  return {
    hour: R(r),
    minute: R(n),
    second: R(a)
  };
}, Ov = (e) => {
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
  } = Ji(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: g,
      minute: y
    } = cr(i);
    f = g === v && a > y;
  }
  if (!i && s) {
    var {
      hour: b,
      minute: w
    } = cr(s);
    f = b === v && a < w;
  }
  if (i && s) {
    var {
      hour: V,
      minute: S
    } = cr(i), {
      hour: T,
      minute: I
    } = cr(s);
    f = T === v && a < I || V === v && a > S;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, Vv = (e) => {
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
  } = Ji(t, o, l), m = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: b,
      second: w
    } = cr(s);
    m = y === f && b < i || b === i && a > w;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: S,
      second: T
    } = cr(u);
    m = V === f && S > i || S === i && a > T;
  }
  if (s && u) {
    var {
      hour: I,
      minute: P,
      second: N
    } = cr(s), {
      hour: h,
      minute: O,
      second: j
    } = cr(u);
    m = I === f && P < i || h === f && O > i || I === f && P === i && a > N || h === f && O === i && a < j;
  }
  return (r = e.allowedTime) != null && r.seconds && (g = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || g;
}, {
  n: _C,
  classes: xC
} = ee("time-picker");
function eS(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n("clock"))
    },
    [D(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: G(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), $(
      Ve,
      null,
      Ue(e.timeScales, (n, a) => (p(), $(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: G(e.getStyle(a, n, !1))
        },
        ne(n),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), $(
        Ve,
        null,
        Ue(e.hours24, (n, a) => (p(), $(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: G(e.getStyle(a, n, !0))
          },
          ne(n),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : Q("v-if", !0)],
    2
    /* CLASS */
  );
}
var Mv = x({
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
    } = r, a = M(null), t = M([]), o = M([]), l = z(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = z(() => {
      if (e.rad !== void 0) {
        var b = e.rad / 30;
        return b >= 0 ? b : b + 12;
      }
    }), s = z(() => e.type === "hour" ? Cr : cs), u = (b, w) => {
      var V;
      b = (V = b) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? Ov : Vv, T = {
        time: R(b),
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
      var b = e.isInner ? ir[i.value] : s.value[i.value];
      return s.value === cs ? u() ? "#bdbdbd" : e.color : f(b) ? "#bdbdbd" : e.color;
    }, v = (b, w) => w ? i.value === b && e.isInner : i.value === b && (!e.isInner || e.type !== "hour"), f = (b) => {
      if (e.type === "hour") {
        if (Pv(e.format, e.ampm))
          return t.value.includes(b);
        var w = Cr.findIndex((V) => V === b);
        return o.value.includes(w);
      }
      return u(b, !0);
    }, m = (b, w, V) => {
      var S = 2 * Math.PI / 12 * b - Math.PI / 2, T = 50 * (1 + Math.cos(S)), I = 50 * (1 + Math.sin(S)), P = () => v(b, V) ? f(w) ? {
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
        color: h
      } = P();
      return {
        left: T + "%",
        top: I + "%",
        backgroundColor: N,
        color: h
      };
    }, g = () => {
      var {
        width: b,
        height: w
      } = xe(a.value);
      return {
        width: b,
        height: w
      };
    }, y = () => {
      if (i.value !== void 0) {
        var b = e.ampm === "am" ? Cr : ir;
        return Da(b[i.value], 2, "0");
      }
    };
    return oe([i, () => e.isInner], (b, w) => {
      var [V, S] = b, [T, I] = w, P = V === T && S === I;
      if (!(P || e.type !== "hour" || i.value === void 0)) {
        var N = S ? ir[i.value] : y(), h = e.useSeconds ? ":" + e.time.second : "", O = N + ":" + e.time.minute + h;
        e.preventNextUpdate || n("update", O), n("change-prevent-update");
      }
    }), oe(() => e.rad, (b, w) => {
      if (!(e.type === "hour" || b === void 0 || w === void 0)) {
        var V = b / 6 >= 0 ? b / 6 : b / 6 + 60, S = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (V !== S) {
          var T, {
            hourStr: I
          } = Ji(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var P = se().minute(V).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            T = I + ":" + P + N;
          }
          if (e.type === "second") {
            var h = se().second(V).format("ss"), O = e.useSeconds ? ":" + h : "";
            T = I + ":" + e.time.minute + O;
          }
          n("update", T);
        }
      }
    }), oe([() => e.max, () => e.min, () => e.allowedTime], (b) => {
      var [w, V, S] = b;
      if (t.value = [], w && !V) {
        var {
          hour: T
        } = cr(w), I = Cr.filter((B) => R(B) > T), P = ir.filter((B) => R(B) > T);
        t.value = [...I, ...P];
      }
      if (!w && V) {
        var {
          hour: N
        } = cr(V), h = Cr.filter((B) => R(B) < N), O = ir.filter((B) => R(B) < N);
        t.value = [...h, ...O];
      }
      if (w && V) {
        var {
          hour: j
        } = cr(w), {
          hour: L
        } = cr(V), K = Cr.filter((B) => R(B) < L || R(B) > j), X = ir.filter((B) => R(B) < L || R(B) > j);
        t.value = [...K, ...X];
      }
      if (S != null && S.hours) {
        var {
          hours: ie
        } = S, E = Cr.filter((B) => !ie(R(B))), C = ir.filter((B) => !ie(R(B)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...E, ...C])];
      }
      o.value = t.value.map((B) => ir.findIndex((_) => B === _)).filter((B) => B >= 0);
    }, {
      immediate: !0
    }), {
      n: _C,
      classes: xC,
      hours24: ir,
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
Mv.render = eS;
const rS = Mv;
var {
  n: nS,
  classes: aS
} = ee("time-picker"), tS = (e) => (Ra(""), e = e(), Ua(), e), oS = /* @__PURE__ */ tS(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), iS = {
  key: 0
};
function lS(e, r) {
  var n = te("clock");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: G({
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
            onClick: r[0] || (r[0] = (a) => e.checkPanel("hour"))
          },
          ne(e.time.hour),
          3
          /* TEXT, CLASS */
        ), oS, D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), $("span", iS, ":")) : Q("v-if", !0), e.useSeconds ? (p(), $(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
          /* TEXT, CLASS */
        )) : Q("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: r[3] || (r[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), D(
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
      )) : Q("v-if", !0)],
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
        [Z(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), be(
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
var Ev = x({
  name: "VarTimePicker",
  components: {
    Clock: rS
  },
  props: QC,
  setup(e) {
    var r = M(null), n = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), g = M(!1), y = M(!1), b = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ae({
      x: 0,
      y: 0
    }), V = Ae({
      x: [],
      y: []
    }), S = z(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), T = (H) => {
      k(e["onUpdate:modelValue"], H), k(e.onChange, H);
    }, I = (H) => H * 57.29577951308232, P = (H) => {
      i.value = !1, y.value = !1, f.value = H;
    }, N = (H) => {
      var {
        disableHour: A
      } = a.value, W = Cr.findIndex((ue) => R(ue) === R(b.value.hour)), J = H === "am" ? Cr : ir, re = [...J.slice(W), ...J.slice(0, W)];
      return re.find((ue, ge) => (o.value = ge !== 0, !A.includes(ue)));
    }, h = (H) => {
      if (!e.readonly) {
        m.value = H;
        var A = N(H);
        if (A) {
          var W = e.useSeconds ? ":" + b.value.second : "", J = Da(A, 2, "0") + ":" + b.value.minute + W;
          T(J);
        }
      }
    }, O = (H, A) => {
      var W = H >= V.x[0] && H <= V.x[1], J = A >= V.y[0] && A <= V.y[1];
      return W && J;
    }, j = (H) => {
      var A = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: J,
        second: re
      } = cr(H);
      return {
        hour: se().hour(W).format(A),
        minute: se().minute(J).format("mm"),
        second: se().second(re).format("ss")
      };
    }, L = (H) => {
      var A = H / 30;
      return A >= 0 ? A : A + 12;
    }, K = () => {
      var {
        width: H,
        height: A
      } = a.value.getSize(), W = w.x - H / 2 - 8, J = w.x + H / 2 + 8, re = w.y - A / 2 - 8, ue = w.y + A / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: J,
        rangeYMin: re,
        rangeYMax: ue
      };
    }, X = (H, A, W) => {
      var {
        disableHour: J
      } = a.value;
      l.value = O(H, A);
      var re = Math.round(W / 30) * 30 + 90, ue = L(re), ge = t.value ? Cr[ue] : ir[ue];
      if (J.includes(ge) || (t.value = e.format === "24hr" ? O(H, A) : !1), t.value === l.value) {
        var Ce = t.value || m.value === "pm" ? ir[ue] : Cr[ue];
        g.value = J.includes(Ce), !g.value && (u.value = re, i.value = !0);
      }
    }, ie = (H) => {
      var {
        disableHour: A
      } = a.value, W = Math.round(H / 6) * 6 + 90, J = W / 6 >= 0 ? W / 6 : W / 6 + 60, re = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: A,
        allowedTime: e.allowedTime
      };
      y.value = Ov(re), !y.value && (d.value = W, s.value = !0);
    }, E = (H) => {
      var {
        disableHour: A
      } = a.value, W = Math.round(H / 6) * 6 + 90, J = W / 6 >= 0 ? W / 6 : W / 6 + 60, re = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        minute: R(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: A,
        allowedTime: e.allowedTime
      };
      Vv(re) || (v.value = W);
    }, C = () => {
      var {
        left: H,
        top: A,
        width: W,
        height: J
      } = xe(r.value);
      if (w.x = H + W / 2, w.y = A + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: re,
          rangeXMax: ue,
          rangeYMin: ge,
          rangeYMax: Ce
        } = K();
        V.x = [re, ue], V.y = [ge, Ce];
      }
    }, B = (H) => {
      if (H.preventDefault(), !e.readonly) {
        C();
        var {
          clientX: A,
          clientY: W
        } = H.touches[0], J = A - w.x, re = W - w.y, ue = Math.round(I(Math.atan2(re, J)));
        f.value === "hour" ? X(A, W, ue) : f.value === "minute" ? ie(ue) : E(ue);
      }
    }, _ = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, F = () => {
      o.value = !1;
    };
    return oe(() => e.modelValue, (H) => {
      if (H) {
        var {
          hour: A,
          minute: W,
          second: J
        } = cr(H), re = se().hour(A).format("hh"), ue = se().hour(A).format("HH"), ge = se().minute(W).format("mm"), Ce = se().second(J).format("ss");
        u.value = (re === "12" ? 0 : R(re)) * 30, d.value = R(ge) * 6, v.value = R(Ce) * 6, b.value = j(H), e.format !== "24hr" && (m.value = Da("" + A, 2, "0") === ue && ir.includes(ue) ? "pm" : "am"), t.value = e.format === "24hr" && ir.includes(ue);
      }
    }, {
      immediate: !0
    }), {
      n: nS,
      classes: aS,
      getRad: S,
      time: b,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: B,
      checkPanel: P,
      checkAmpm: h,
      end: _,
      update: T,
      changePreventUpdate: F,
      formatElevation: hr
    };
  }
});
Ev.render = lS;
const Ia = Ev;
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
var Gk = Ia, sS = {
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
function ms(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Bo(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ms(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ms(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: uS,
  classes: dS
} = ee("uploader"), vS = 0, fS = ["onClick"], cS = ["onClick"], mS = ["src", "alt"], pS = ["multiple", "accept", "capture", "disabled"], hS = ["src"];
function gS(e, r) {
  var n = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = te("var-popup"), l = Ie("ripple"), i = Ie("hover");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), $(
        Ve,
        null,
        Ue(e.files, (s) => $e((p(), $(
          "div",
          {
            class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
            key: s.id,
            onClick: (u) => e.preview(s)
          },
          [D(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ne(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), $(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Tr((u) => e.handleRemove(s), ["stop"])
            },
            [Z(
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
            cS
          )) : Q("v-if", !0), s.cover ? (p(), $(
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
            mS
          )) : Q("v-if", !0), D(
            "div",
            {
              class: c(e.n("file-indicator"))
            },
            [D(
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
          fS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? $e((p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [D(
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
          pS
        ), Y(e.$slots, "default", {}, () => [Z(
          n,
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
      }], [i, e.handleHovering, "desktop"]]) : Q("v-if", !0)],
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
        "onUpdate:show": r[2] || (r[2] = (s) => e.showPreview = s),
        onClosed: r[3] || (r[3] = (s) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), $(
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
            hS
          )) : Q("v-if", !0)];
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
var Bv = x({
  name: "VarUploader",
  directives: {
    Ripple: We,
    Hover: Ur
  },
  components: {
    VarIcon: Oe,
    VarPopup: Sr,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  props: sS,
  setup(e) {
    var r = M(null), n = M(!1), a = M(null), t = z(() => {
      var {
        maxlength: B,
        modelValue: {
          length: _
        }
      } = e;
      return lr(B) ? _ + " / " + B : "";
    }), {
      form: o,
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), {
      hovering: v,
      handleHovering: f
    } = Pn(), m = z(() => {
      var {
        modelValue: B,
        hideList: _
      } = e;
      return _ ? [] : B;
    }), g = (B) => {
      var {
        disabled: _,
        readonly: F,
        previewed: H
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || _ || F || !H)) {
        var {
          url: A
        } = B;
        if (Fe(A) && rl(A)) {
          zr(A);
          return;
        }
        Fe(A) && nl(A) && (a.value = B, n.value = !0);
      }
    }, y = (B) => ({
      id: vS++,
      url: "",
      cover: "",
      name: B.name,
      file: B,
      progress: 0
    }), b = (B) => {
      var _ = B.target, {
        files: F
      } = _;
      return Array.from(F);
    }, w = (B) => new Promise((_) => {
      if (!B.file.type.startsWith("image")) {
        _(B);
        return;
      }
      var F = new FileReader();
      F.onload = () => {
        var H = F.result;
        B.cover = H, B.url = H, _(B);
      }, F.readAsDataURL(B.file);
    }), V = (B) => B.map(w), S = (B) => {
      var {
        onBeforeRead: _
      } = e;
      return B.map((F) => new Promise((H) => {
        _ || H({
          valid: !0,
          varFile: F
        });
        var A = Ut(k(_, Ae(F)));
        Promise.all(A).then((W) => {
          H({
            valid: W.every(Boolean),
            varFile: F
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var B = Bo(function* (_) {
        var {
          maxsize: F,
          maxlength: H,
          modelValue: A,
          onOversize: W,
          onAfterRead: J,
          onBeforeFilter: re,
          readonly: ue,
          disabled: ge
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ge || ue)) {
          var Ce = (He) => He.filter((Ye) => Ye.file.size > R(F) ? (k(W, Ae(Ye)), !1) : !0), ar = (He) => {
            var Ye = Math.min(He.length, R(H) - A.length);
            return He.slice(0, Ye);
          }, ae = /* @__PURE__ */ function() {
            var He = Bo(function* (Ye) {
              if (!re)
                return Ye;
              var le = Ut(re);
              for (var we of le)
                Ye = yield we(Ye);
              return Ye;
            });
            return function(le) {
              return He.apply(this, arguments);
            };
          }(), de = b(_), ce = de.map(y);
          ce = yield ae(ce), ce = F != null ? Ce(ce) : ce, ce = H != null ? ar(ce) : ce;
          var De = yield Promise.all(V(ce)), Ke = yield Promise.all(S(De)), Ge = Ke.filter((He) => {
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
          k(e["onUpdate:modelValue"], [...A, ...Ge]), _.target.value = "", Ge.forEach((He) => k(J, Ae(He)));
        }
      });
      return function(F) {
        return B.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var B = Bo(function* (_) {
        var {
          disabled: F,
          readonly: H,
          modelValue: A,
          onBeforeRemove: W,
          onRemove: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || F || H)) {
          if (W) {
            var re = Ut(k(W, Ae(_)));
            if ((yield Promise.all(re)).some((ge) => !ge))
              return;
          }
          var ue = A.filter((ge) => ge !== _);
          k(J, Ae(_)), K("onRemove"), k(e["onUpdate:modelValue"], ue);
        }
      });
      return function(F) {
        return B.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((B) => B.state === "success"), N = () => e.modelValue.filter((B) => B.state === "error"), h = () => e.modelValue.filter((B) => B.state === "loading"), O = () => {
      r.value.click();
    }, j = () => {
      a.value = null, n.value = !1, zr.close();
    }, L = {
      getSuccess: P,
      getError: N,
      getLoading: h
    }, K = (B) => {
      Ne(() => {
        var {
          validateTrigger: _,
          rules: F,
          modelValue: H
        } = e;
        s(_, B, F, H, L);
      });
    }, X = !1, ie = () => u(e.rules, e.modelValue, L), E = () => {
      X = !0, k(e["onUpdate:modelValue"], []), d();
    }, C = {
      validate: ie,
      resetValidation: d,
      reset: E
    };
    return k(l, C), oe(() => e.modelValue, () => {
      !X && K("onChange"), X = !1;
    }, {
      deep: !0
    }), {
      n: uS,
      classes: dS,
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
      isHTMLSupportVideo: nl,
      isHTMLSupportImage: rl,
      preview: g,
      handleChange: T,
      handleRemove: I,
      getSuccess: P,
      getError: N,
      getLoading: h,
      validate: ie,
      resetValidation: d,
      reset: E,
      chooseFile: O,
      closePreview: j,
      toSizeUnit: ye
    };
  }
});
Bv.render = gS;
const Na = Bv;
Na.install = function(e) {
  e.component(Na.name, Na);
};
var qk = Na;
const yS = "2.11.2";
function bS(e) {
  Qr.install && e.use(Qr), An.install && e.use(An), zn.install && e.use(zn), Ln.install && e.use(Ln), Rn.install && e.use(Rn), mn.install && e.use(mn), Un.install && e.use(Un), Fn.install && e.use(Fn), Hn.install && e.use(Hn), Yn.install && e.use(Yn), rr.install && e.use(rr), jn.install && e.use(jn), Wn.install && e.use(Wn), pn.install && e.use(pn), hn.install && e.use(hn), Gn.install && e.use(Gn), gn.install && e.use(gn), qn.install && e.use(qn), Xn.install && e.use(Xn), Kn.install && e.use(Kn), yr.install && e.use(yr), Zn.install && e.use(Zn), Jn.install && e.use(Jn), _n.install && e.use(_n), _r.install && e.use(_r), xn.install && e.use(xn), ea.install && e.use(ea), ra.install && e.use(ra), qr.install && e.use(qr), _e.install && e.use(_e), Ur.install && e.use(Ur), mr.install && e.use(mr), Oe.install && e.use(Oe), na.install && e.use(na), zr.install && e.use(zr), aa.install && e.use(aa), ta.install && e.use(ta), Sn.install && e.use(Sn), gt.install && e.use(gt), oa.install && e.use(oa), ia.install && e.use(ia), Nr.install && e.use(Nr), hi.install && e.use(hi), Fo.install && e.use(Fo), Jr.install && e.use(Jr), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), La.install && e.use(La), Sr.install && e.use(Sr), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), We.install && e.use(We), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), Ci.install && e.use(Ci), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Zr.install && e.use(Zr), St.install && e.use(St), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Va.install && e.use(Va), Ma.install && e.use(Ma), Ea.install && e.use(Ea), Ba.install && e.use(Ba), ki.install && e.use(ki), Ia.install && e.use(Ia), wn.install && e.use(wn), Na.install && e.use(Na);
}
const Xk = {
  version: yS,
  install: bS,
  ActionSheet: Qr,
  AppBar: An,
  Avatar: zn,
  AvatarGroup: Ln,
  BackTop: Rn,
  Badge: mn,
  BottomNavigation: Un,
  BottomNavigationItem: Fn,
  Breadcrumb: Hn,
  Breadcrumbs: Yn,
  Button: rr,
  ButtonGroup: jn,
  Card: Wn,
  Cell: pn,
  Checkbox: hn,
  CheckboxGroup: Gn,
  Chip: gn,
  Col: qn,
  Collapse: Xn,
  CollapseItem: Kn,
  Context: yr,
  Countdown: Zn,
  Counter: Jn,
  DatePicker: _n,
  Dialog: _r,
  Divider: xn,
  Ellipsis: ea,
  Fab: ra,
  Form: qr,
  FormDetails: _e,
  Hover: Ur,
  HoverOverlay: mr,
  Icon: Oe,
  Image: na,
  ImagePreview: zr,
  IndexAnchor: aa,
  IndexBar: ta,
  Input: Sn,
  Lazy: gt,
  Link: oa,
  List: ia,
  Loading: Nr,
  LoadingBar: hi,
  Locale: Fo,
  Menu: Jr,
  Option: la,
  Overlay: sa,
  Pagination: ua,
  Paper: da,
  Picker: La,
  Popup: Sr,
  Progress: va,
  PullRefresh: fa,
  Radio: ca,
  RadioGroup: ma,
  Rate: pa,
  Result: ha,
  Ripple: We,
  Row: ga,
  Select: ya,
  Skeleton: ba,
  Slider: wa,
  Snackbar: Ci,
  Space: Sa,
  Step: ka,
  Steps: $a,
  Sticky: Zr,
  StyleProvider: St,
  Swipe: Xr,
  SwipeItem: Kr,
  Switch: Pa,
  Tab: Oa,
  TabItem: Va,
  Table: Ma,
  Tabs: Ea,
  TabsItems: Ba,
  Themes: ki,
  TimePicker: Ia,
  Tooltip: wn,
  Uploader: Na
};
export {
  Qr as ActionSheet,
  An as AppBar,
  zn as Avatar,
  Ln as AvatarGroup,
  Rn as BackTop,
  mn as Badge,
  Un as BottomNavigation,
  Fn as BottomNavigationItem,
  Hn as Breadcrumb,
  Yn as Breadcrumbs,
  rr as Button,
  jn as ButtonGroup,
  Wn as Card,
  pn as Cell,
  hn as Checkbox,
  Gn as CheckboxGroup,
  gn as Chip,
  qn as Col,
  Xn as Collapse,
  Kn as CollapseItem,
  yr as Context,
  Zn as Countdown,
  Jn as Counter,
  _n as DatePicker,
  _r as Dialog,
  xn as Divider,
  ea as Ellipsis,
  ra as Fab,
  qr as Form,
  _e as FormDetails,
  Ur as Hover,
  mr as HoverOverlay,
  Oe as Icon,
  na as Image,
  zr as ImagePreview,
  aa as IndexAnchor,
  ta as IndexBar,
  Sn as Input,
  gt as Lazy,
  oa as Link,
  ia as List,
  Nr as Loading,
  hi as LoadingBar,
  Fo as Locale,
  Jr as Menu,
  la as Option,
  sa as Overlay,
  jo as PIXEL,
  ua as Pagination,
  da as Paper,
  La as Picker,
  Sr as Popup,
  va as Progress,
  fa as PullRefresh,
  ca as Radio,
  ma as RadioGroup,
  pa as Rate,
  ha as Result,
  We as Ripple,
  ga as Row,
  Ki as SNACKBAR_TYPE,
  ya as Select,
  ba as Skeleton,
  wa as Slider,
  Ci as Snackbar,
  Sa as Space,
  ka as Step,
  $a as Steps,
  Zr as Sticky,
  St as StyleProvider,
  Xr as Swipe,
  Kr as SwipeItem,
  Pa as Switch,
  Oa as Tab,
  Va as TabItem,
  Ma as Table,
  Ea as Tabs,
  Ba as TabsItems,
  ki as Themes,
  Ia as TimePicker,
  wn as Tooltip,
  Na as Uploader,
  PS as _ActionSheetComponent,
  OS as _AppBarComponent,
  MS as _AvatarComponent,
  ES as _AvatarGroupComponent,
  AS as _BackTopComponent,
  zS as _BadgeComponent,
  LS as _BottomNavigationComponent,
  RS as _BottomNavigationItemComponent,
  US as _BreadcrumbComponent,
  FS as _BreadcrumbsComponent,
  DS as _ButtonComponent,
  HS as _ButtonGroupComponent,
  YS as _CardComponent,
  jS as _CellComponent,
  GS as _CheckboxComponent,
  qS as _CheckboxGroupComponent,
  XS as _ChipComponent,
  KS as _ColComponent,
  ZS as _CollapseComponent,
  JS as _CollapseItemComponent,
  CS as _ContextComponent,
  QS as _CountdownComponent,
  _S as _CounterComponent,
  xS as _DatePickerComponent,
  ek as _DialogComponent,
  rk as _DividerComponent,
  ak as _EllipsisComponent,
  tk as _FabComponent,
  ok as _FormComponent,
  WS as _FormDetailsComponent,
  NS as _HoverComponent,
  IS as _HoverOverlayComponent,
  $S as _IconComponent,
  ik as _ImageComponent,
  uk as _ImagePreviewComponent,
  vk as _IndexAnchorComponent,
  fk as _IndexBarComponent,
  ck as _InputComponent,
  VS as _LazyComponent,
  mk as _LinkComponent,
  pk as _ListComponent,
  hk as _LoadingBarComponent,
  BS as _LoadingComponent,
  TS as _LocaleComponent,
  gk as _MenuComponent,
  yk as _OptionComponent,
  bk as _OverlayComponent,
  wk as _PaginationComponent,
  Ck as _PaperComponent,
  Sk as _PickerComponent,
  kS as _PopupComponent,
  kk as _ProgressComponent,
  $k as _PullRefreshComponent,
  Tk as _RadioComponent,
  Pk as _RadioGroupComponent,
  Ok as _RateComponent,
  Vk as _ResultComponent,
  SS as _RippleComponent,
  Mk as _RowComponent,
  Ek as _SelectComponent,
  Bk as _SkeletonComponent,
  Ik as _SliderComponent,
  Nk as _SnackbarComponent,
  Dk as _SpaceComponent,
  Ak as _StepComponent,
  zk as _StepsComponent,
  dk as _StickyComponent,
  Lk as _StyleProviderComponent,
  lk as _SwipeComponent,
  sk as _SwipeItemComponent,
  Rk as _SwitchComponent,
  Uk as _TabComponent,
  Fk as _TabItemComponent,
  Hk as _TableComponent,
  Yk as _TabsComponent,
  jk as _TabsItemsComponent,
  Wk as _ThemesComponent,
  Gk as _TimePickerComponent,
  nk as _TooltipComponent,
  qk as _UploaderComponent,
  Cf as actionSheetProps,
  Ei as add,
  Vf as appBarProps,
  xf as avatarGroupProps,
  Xf as avatarProps,
  Ec as backTopProps,
  zc as badgeProps,
  qc as bottomNavigationItemProps,
  Fc as bottomNavigationProps,
  _c as breadcrumbProps,
  tm as breadcrumbsProps,
  kc as buttonProps,
  pm as cardProps,
  Cm as cellProps,
  Rm as checkboxGroupProps,
  Em as checkboxProps,
  Wm as chipProps,
  Jm as colProps,
  ip as collapseItemProps,
  np as collapseProps,
  dp as countdownProps,
  ih as counterProps,
  Oh as datePickerProps,
  Xk as default,
  qe as defaultLazyOptions,
  Wh as dialogProps,
  Zh as dividerProps,
  Rs as enUS,
  Tm as formDetailsProps,
  Sy as formProps,
  zs as iconProps,
  js as imageCache,
  Wy as imagePreviewProps,
  Oy as imageProps,
  ab as indexAnchorProps,
  lb as indexBarProps,
  yb as inputProps,
  bS as install,
  Ob as linkProps,
  Bb as listProps,
  Fb as loadingBarProps,
  dn as loadingProps,
  Qb as menuProps,
  Fs as merge,
  a0 as optionProps,
  l0 as overlayProps,
  Ze as pack,
  Us as packs,
  u0 as paginationProps,
  m0 as paperProps,
  y0 as pickerProps,
  Ot as popupProps,
  V0 as progressProps,
  A0 as pullRefreshProps,
  G0 as radioGroupProps,
  R0 as radioProps,
  Z0 as rateProps,
  x0 as resultProps,
  U1 as rowProps,
  W1 as selectProps,
  Z1 as skeletonProps,
  ew as sliderProps,
  uv as snackbarProps,
  $w as spaceProps,
  Ow as stepProps,
  Aw as stepsProps,
  Wt as stickyProps,
  Rw as styleProviderProps,
  yd as swipeProps,
  Hw as switchProps,
  Jw as tabItemProps,
  Gw as tabProps,
  eC as tableProps,
  dC as tabsItemsProps,
  iC as tabsProps,
  QC as timePickerProps,
  ly as tooltipProps,
  sS as uploaderProps,
  Bi as use,
  Pn as useHoverOverlay,
  Mi as useLocale,
  yS as version,
  Vi as zhCN
};
