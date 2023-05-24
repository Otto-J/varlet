import { reactive as Ae, onMounted as ao, nextTick as Ne, onActivated as Mn, isRef as Nv, watch as ie, onBeforeUnmount as kt, onDeactivated as xr, unref as ut, inject as Dv, getCurrentInstance as rt, computed as U, provide as Av, isVNode as $t, Comment as zv, Fragment as Ve, ref as M, createApp as Lv, h as ps, onBeforeMount as Rv, onUnmounted as nt, defineComponent as J, createVNode as Z, Teleport as Ra, Transition as Le, withDirectives as ke, vShow as $n, mergeProps as Ee, openBlock as p, createBlock as ye, resolveDynamicComponent as at, normalizeClass as c, normalizeStyle as X, resolveComponent as ae, resolveDirective as Ie, withCtx as ve, createElementVNode as A, renderSlot as j, toDisplayString as re, createElementBlock as T, renderList as Ue, createCommentVNode as _, onUpdated as Tt, createTextVNode as Ce, pushScopeId as Ua, popScopeId as Fa, withModifiers as Tr, normalizeProps as Ot, guardReactiveProps as to, vModelText as Uv, toRefs as Fv, withKeys as Ji, toRaw as Qi, TransitionGroup as Hv } from "vue";
var hs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, yS = Ae(hs);
const yr = Ae(hs), Fe = (e) => typeof e == "string", Bo = (e) => typeof e == "boolean", or = (e) => typeof e == "number", Si = (e) => Object.prototype.toString.call(e) === "[object Object]", Yv = (e) => typeof e == "object" && e !== null, Pt = (e) => typeof e == "function", Te = (e) => Array.isArray(e), jv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, fn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, ki = (e) => e === window, R = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Bo(e) ? Number(e) : e, qt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, $i = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, tt = () => typeof window < "u", _i = (e) => [...new Set(e)], gs = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), Wv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Gv = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ft = (e) => Te(e) ? e : [e];
var xi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), el = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), qv = (e) => {
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
      this.has(n) && qt(this.cache, n);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Eo = (e) => e, rl = (e) => Math.pow(e, 3), ys = (e) => e < 0.5 ? rl(e * 2) / 2 : 1 - rl((1 - e) * 2) / 2, oo = (e, r) => e ?? r, bs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Na = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Or(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function nl(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
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
function Da(e) {
  return window.getComputedStyle(e);
}
function mr(e) {
  if (ki(e)) {
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
    return Io({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function Xv(e) {
  var {
    left: r
  } = mr(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function al(e) {
  var {
    top: r
  } = mr(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pt(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Ti(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function Kv(e) {
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
function ko(e) {
  var {
    transform: r
  } = Da(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function Tn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = Da(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function Zv(e) {
  for (var r = [], n = e; !ki(n); )
    n = Tn(n), r.push(n);
  return r;
}
function ws(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Or(r, "target element cannot found"), n;
  }
  if (Yv(e))
    return e;
  Or(r, 'type of prop "target" should be a selector or an element object');
}
function tl() {
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
var Cs = (e) => Fe(e) && e.endsWith("rem"), Jv = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), Qv = (e) => Fe(e) && e.endsWith("px") || or(e), _v = (e) => Fe(e) && e.endsWith("%"), Ss = (e) => Fe(e) && e.endsWith("vw"), ks = (e) => Fe(e) && e.endsWith("vh"), $s = (e) => Fe(e) && e.endsWith("vmin"), Ts = (e) => Fe(e) && e.endsWith("vmax"), xv = (e) => Fe(e) && e.startsWith("calc("), ef = (e) => Fe(e) && e.startsWith("var("), je = (e) => {
  if (or(e))
    return e;
  if (Qv(e))
    return +e.replace("px", "");
  if (!tt())
    return 0;
  var {
    width: r,
    height: n
  } = mr(window);
  if (Ss(e))
    return +e.replace("vw", "") * r / 100;
  if (ks(e))
    return +e.replace("vh", "") * n / 100;
  if (Cs(e)) {
    var a = +e.replace("rem", ""), t = Da(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return $s(e) ? tl().vMin : Ts(e) ? tl().vMax : Fe(e) ? R(e) : 0;
}, ge = (e) => {
  if (e != null)
    return _v(e) || Ss(e) || ks(e) || Jv(e) || Cs(e) || xv(e) || ef(e) || $s(e) || Ts(e) ? e : je(e) + "px";
}, ar = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = ge(e), a = n.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = bs();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function ol(e) {
  var r = bs();
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
function rf() {
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
  } = r, l = Date.now(), i = pt(e), s = Ti(e);
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
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + Wv(a);
    return r[o] = t, r;
  }, {});
}
function nf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Xt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ir(e) {
  let r = !1;
  ao(() => {
    e(), Ne(() => {
      r = !0;
    });
  }), Mn(() => {
    r && e();
  });
}
function Zr(e, r, n, a = {}) {
  if (!tt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Pt(m) ? m() : ut(m), u = (m) => {
    if (l || i)
      return;
    const h = s(m);
    h && (h.addEventListener(r, n, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const h = s(m);
    h && (h.removeEventListener(r, n, {
      capture: o
    }), l = !1);
  };
  let v;
  Nv(e) && (v = ie(() => e.value, (m, h) => {
    d(h), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return ir(() => {
    u(e);
  }), kt(() => {
    d(e);
  }), xr(() => {
    d(e);
  }), f;
}
function Ps(e, r, n) {
  if (!tt())
    return;
  Zr(document, r, (t) => {
    const o = ut(e);
    o && !o.contains(t.target) && n(t);
  });
}
var af = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function tf(e) {
  const r = rt();
  return e in r.provides;
}
function lr(e) {
  if (!tf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Dv(e), { childInstances: n, collect: a, clear: t } = r, o = af(r, ["childInstances", "collect", "clear"]), l = rt();
  return {
    index: U(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      ao(() => {
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
function of(e) {
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
function sr(e) {
  const r = rt(), n = Ae([]), a = [], t = U(() => n.length), o = () => {
    const u = of(r.subTree);
    n.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    n.push(u), a.push(d), o();
  }, i = (u, d) => {
    qt(n, u), qt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Av(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function il(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ll(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        il(o, a, t, l, i, "next", s);
      }
      function i(s) {
        il(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function No() {
  return No = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, No.apply(this, arguments);
}
function Je(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function lf(e) {
  var r = Lv(e), n = document.createElement("div");
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
      return () => ps(e, No({}, r, n));
    }
  }, {
    unmount: t
  } = lf(a);
  return {
    unmountInstance: t
  };
}
function Vs(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== zv) {
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
  var e = M(""), r = /* @__PURE__ */ function() {
    var t = ll(function* (o, l, i) {
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
    var t = ll(function* (o, l, i, s, u) {
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
function sf(e) {
  Zr(() => window, "hashchange", e), Zr(() => window, "popstate", e);
}
function lo() {
  var e = M(!1);
  return Mn(() => {
    e.value = !1;
  }), xr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function Q(e) {
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
function Ms(e, r, n) {
  n === void 0 && (n = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = n, i = t ?? "onUpdate:" + r.toString(), s = () => e[r] != null ? e[r] : o;
  if (!a)
    return U({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : S(e[i], d);
      }
    });
  var u = M(s());
  return ie(() => e[r], () => {
    u.value = s();
  }), ie(() => u.value, (d) => {
    l ? l(i, d) : S(e[i], d);
  }), u;
}
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Kt.apply(this, arguments);
}
var {
  n: Bs
} = Q("ripple"), sl = 250;
function uf(e) {
  var {
    zIndex: r,
    position: n
  } = Da(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function df(e, r) {
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
function Es(e) {
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
      } = df(this, e), s = document.createElement("div");
      s.classList.add(Bs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), uf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function Do() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Bs());
    if (n.length) {
      var a = n[n.length - 1], t = sl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, sl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function Is() {
  if (!(!nf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function vf(e, r) {
  var n;
  e._ripple = Kt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: Do.bind(e)
  }), e.addEventListener("touchstart", Es, {
    passive: !0
  }), e.addEventListener("touchmove", Is, {
    passive: !0
  }), e.addEventListener("dragstart", Do, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function ff(e) {
  e.removeEventListener("touchstart", Es), e.removeEventListener("touchmove", Is), e.removeEventListener("dragstart", Do), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function cf(e, r) {
  var n, a, t, o, l = {
    color: (n = r.value) == null ? void 0 : n.color,
    disabled: (a = r.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = Kt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Ns = {
  mounted: vf,
  unmounted: ff,
  updated: cf,
  install(e) {
    e.directive("ripple", this);
  }
}, bS = Ns;
const We = Ns;
function mf(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Vt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: mf
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
function Ds() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Et(e) {
  yr.locks[e] = 1, Ds();
}
function It(e) {
  delete yr.locks[e], Ds();
}
function so(e, r) {
  var {
    uid: n
  } = rt();
  r && ie(r, (a) => {
    a === !1 ? It(n) : a === !0 && e() === !0 && Et(n);
  }), ie(e, (a) => {
    r && r() === !1 || (a === !0 ? Et(n) : It(n));
  }), Rv(() => {
    r && r() === !1 || e() === !0 && Et(n);
  }), nt(() => {
    r && r() === !1 || e() === !0 && It(n);
  }), Mn(() => {
    r && r() === !1 || e() === !0 && Et(n);
  }), xr(() => {
    r && r() === !1 || e() === !0 && It(n);
  });
}
function Mt(e, r) {
  var n = M(yr.zIndex);
  return ie(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
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
function pf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: Br,
  classes: $o
} = Q("popup");
const Sr = J({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Vt,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Mt(() => e.show, 3), {
      disabled: o
    } = lo(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      S(v), d && S(e["onUpdate:show"], !1);
    };
    so(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      S(d ? e.onOpen : e.onClose);
    }), sf(() => S(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Z("div", {
        class: $o(Br("overlay"), d),
        style: Ao({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => Z("div", Ee({
      class: $o(Br("content"), Br("--" + e.position), [e.defaultStyle, Br("--content-background-color")], [e.defaultStyle, Br("$-elevation--3")], [e.safeArea, Br("--safe-area")], [e.safeAreaTop, Br("--safe-area-top")]),
      style: {
        zIndex: t.value
      }
    }, a), [S(n.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: h,
        position: g
      } = e;
      return Z(Le, {
        name: Br("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(Z("div", {
          class: $o(Br("$--box"), Br()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), Z(Le, {
          name: h || Br("$-pop-" + g)
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
        return Z(Ra, {
          to: d,
          disabled: o.value
        }, pf(v = u()) ? v : {
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
var wS = Sr, As = {
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
function ul(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function hf(e) {
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
var {
  n: gf,
  classes: yf
} = Q("icon");
function bf(e, r) {
  return p(), ye(
    at(e.isURL(e.name) ? "img" : "i"),
    {
      class: c(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
      style: X({
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
var zs = J({
  name: "VarIcon",
  props: As,
  setup(e) {
    var r = M(""), n = M(!1), a = /* @__PURE__ */ function() {
      var t = hf(function* (o, l) {
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
      n: gf,
      classes: yf,
      nextName: r,
      animateInProgress: n,
      isURL: jv,
      toNumber: R,
      toSizeUnit: ge
    };
  }
});
zs.render = bf;
const Oe = zs;
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
var CS = Oe;
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
var wf = zo({
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
}, Je(Vt, [
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
const Oi = {
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
}, Ls = {
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
function Pi() {
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
    e[o] = Lo({}, e[o], l), a(o);
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
  packs: Rs,
  pack: Ze,
  add: Vi,
  use: Mi,
  merge: Us
} = Pi();
Vi("zh-CN", Oi);
Mi("zh-CN");
var SS = {
  zhCN: Oi,
  enUS: Ls,
  packs: Rs,
  pack: Ze,
  add: Vi,
  use: Mi,
  merge: Us,
  useLocale: Pi
};
const Ro = {
  zhCN: Oi,
  enUS: Ls,
  packs: Rs,
  pack: Ze,
  add: Vi,
  use: Mi,
  merge: Us,
  useLocale: Pi
};
var {
  n: Cf,
  classes: Sf
} = Q("action-sheet"), kf = ["onClick"];
function $f(e, r) {
  var n = ae("var-icon"), a = ae("var-popup"), t = Ie("ripple");
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
        [j(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: c(e.n("title"))
          },
          re(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), j(e.$slots, "actions", {}, () => [(p(!0), T(
          Ve,
          null,
          Ue(e.actions, (o) => ke((p(), T(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: X({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), ye(
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
            )) : _("v-if", !0), A(
              "div",
              {
                class: c(e.n("action-name"))
              },
              re(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            kf
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
var Fs = J({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: wf,
  setup(e) {
    var r = M(!1), n = (t) => {
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
      n: Cf,
      classes: Sf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: Ze,
      dt: oo,
      handleSelect: n
    };
  }
});
Fs.render = $f;
const cn = Fs;
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
var on, Bi = {};
function Tf(e) {
  return e === void 0 && (e = {}), Uo({}, Bi, e);
}
function Jr(e) {
  return tt() ? new Promise((r) => {
    Jr.close();
    var n = Ae(Tf(e));
    n.teleport = "body", on = n;
    var {
      unmountInstance: a
    } = ot(cn, n, {
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
  Bi = e;
};
Jr.resetDefaultOptions = function() {
  Bi = {};
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
var kS = cn;
function Of(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
}
var Pf = {
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
  n: Vf,
  classes: Mf
} = Q("app-bar");
function Bf(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: X(e.rootStyles)
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
        [j(e.$slots, "left"), e.titlePosition === "left" ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: X({
              paddingLeft: e.paddingLeft
            })
          },
          [j(e.$slots, "default", {}, () => [Ce(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [j(e.$slots, "default", {}, () => [Ce(
          re(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0), A(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: X({
              paddingRight: e.paddingRight
            })
          },
          [j(e.$slots, "default", {}, () => [Ce(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), j(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), j(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var Hs = J({
  name: "VarAppBar",
  props: Pf,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(), t = M(), o = () => {
      a.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }, l = U(() => {
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
    return ir(o), Tt(o), {
      n: Vf,
      classes: Mf,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Hs.render = Bf;
const Dn = Hs;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
var $S = Dn;
function dl(e, r, n, a, t, o, l) {
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
        dl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        dl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Fo() {
  return Fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
var Ef = "background-image", If = "lazy-loading", Nf = "lazy-error", vl = "lazy-attempt", Df = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ho = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Za = [], Zt = [], Ys = qv(100), qe = {
  loading: Ho,
  error: Ho,
  attempt: 3,
  throttleWait: 300,
  events: Df
}, Ei = $i(Bt, qe.throttleWait);
function vo(e, r) {
  e._lazy.arg === Ef ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Af(e) {
  e._lazy.loading && vo(e, e._lazy.loading), Bt();
}
function zf(e) {
  e._lazy.error && vo(e, e._lazy.error), e._lazy.state = "error", Ni(e), Bt();
}
function js(e, r) {
  vo(e, r), e._lazy.state = "success", Ni(e), Bt();
}
function Lf(e) {
  var r;
  Zt.includes(e) || (Zt.push(e), (r = qe.events) == null || r.forEach((n) => {
    e.addEventListener(n, Ei, {
      passive: !0
    });
  }));
}
function Rf() {
  Zt.forEach((e) => {
    var r;
    (r = qe.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Ei);
    });
  }), Zt.length = 0;
}
function Uf(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(If)) != null ? n : qe.loading,
    error: (a = e.getAttribute(Nf)) != null ? a : qe.error,
    attempt: e.getAttribute(vl) ? Number(e.getAttribute(vl)) : qe.attempt
  };
  e._lazy = Fo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), vo(e, Ho), S(qe.filter, e._lazy);
}
function Ff(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Ys.add(r), js(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? zf(e) : Ws(e);
  });
}
function Ws(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (Ys.has(r)) {
      js(e, r), e._lazy.attemptLock = !1;
      return;
    }
    Af(e), Ff(e, r);
  }
}
function Ii(e) {
  return Yo.apply(this, arguments);
}
function Yo() {
  return Yo = uo(function* (e) {
    yield Lr(), Kv(e) && Ws(e);
  }), Yo.apply(this, arguments);
}
function Bt() {
  Za.forEach((e) => Ii(e));
}
function Hf(e) {
  return jo.apply(this, arguments);
}
function jo() {
  return jo = uo(function* (e) {
    !Za.includes(e) && Za.push(e), Zv(e).forEach(Lf), yield Ii(e);
  }), jo.apply(this, arguments);
}
function Ni(e) {
  qt(Za, e), Za.length === 0 && Rf();
}
function Yf(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function Gs(e, r) {
  return Wo.apply(this, arguments);
}
function Wo() {
  return Wo = uo(function* (e, r) {
    Uf(e, r), yield Hf(e);
  }), Wo.apply(this, arguments);
}
function jf(e, r) {
  return Go.apply(this, arguments);
}
function Go() {
  return Go = uo(function* (e, r) {
    if (!Yf(e, r)) {
      Za.includes(e) && (yield Ii(e));
      return;
    }
    yield Gs(e, r);
  }), Go.apply(this, arguments);
}
function Wf(e) {
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
var qs = {
  mounted: Gs,
  unmounted: Ni,
  updated: jf,
  install(e, r) {
    Wf(r), Ei = $i(Bt, qe.throttleWait), e.directive("lazy", this);
  }
}, TS = qs;
const gt = qs;
function Gf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Xs = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ks(e) {
  return Xs(e) || or(e) || Fe(e);
}
var qf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ks,
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
    validator: Gf,
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
  n: Xf,
  classes: Kf
} = Q("avatar"), Zf = ["src", "lazy-loading", "lazy-error"], Jf = ["src"];
function Qf(e, r) {
  var n = Ie("lazy");
  return p(), T(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: X({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: r[3] || (r[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), T(
      Ve,
      {
        key: 0
      },
      [e.lazy ? ke((p(), T(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          src: e.src,
          style: X({
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
        Zf
      )), [[n, e.src]]) : (p(), T(
        "img",
        {
          key: 1,
          class: c(e.n("image")),
          src: e.src,
          style: X({
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
        Jf
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), T(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: X({
          transform: "scale(" + e.scale + ")"
        })
      },
      [j(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Zs = J({
  name: "VarAvatar",
  directives: {
    Lazy: gt
  },
  props: qf,
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
      d ? (u._lazy.state === "success" && S(v, s), u._lazy.state === "error" && S(f, s)) : S(v, s);
    }, l = (s) => {
      S(e.onError, s);
    }, i = (s) => {
      S(e.onClick, s);
    };
    return ir(t), Tt(t), {
      internalSizeValidator: Xs,
      sizeValidator: Ks,
      toSizeUnit: ge,
      n: Xf,
      classes: Kf,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Zs.render = Qf;
const An = Zs;
An.install = function(e) {
  e.component(An.name, An);
};
var OS = An, _f = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: xf,
  classes: ec
} = Q("avatar-group");
function rc(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: X(e.rootStyles)
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Js = J({
  name: "VarAvatarGroup",
  props: _f,
  setup(e) {
    var r = U(() => e.offset == null ? {} : {
      "--avatar-group-offset": ge(e.offset)
    });
    return {
      n: xf,
      classes: ec,
      toSizeUnit: ge,
      rootStyles: r
    };
  }
});
Js.render = rc;
const zn = Js;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var PS = zn;
function nc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function ac(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var un = {
  type: {
    type: String,
    default: "circle",
    validator: nc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: ac
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
  n: tc,
  classes: oc
} = Q("loading"), ic = (e) => (Ua(""), e = e(), Fa(), e), lc = /* @__PURE__ */ ic(() => /* @__PURE__ */ A(
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
)), sc = [lc];
function uc(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [j(e.$slots, "default"), e.loading ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.isShow ? (p(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [A(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: X({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          sc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (p(!0), T(
        Ve,
        null,
        Ue(e.loadingTypeDict, (n, a) => (p(), T(
          Ve,
          {
            key: a
          },
          [e.type === a ? (p(), T(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), T(
              Ve,
              null,
              Ue(n, (t) => (p(), T(
                "div",
                {
                  key: t + a,
                  style: X({
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
          )) : _("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: X({
            color: e.color
          })
        },
        [j(e.$slots, "description", {}, () => [Ce(
          re(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Qs = J({
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
    }, t = U(() => S(n.default) ? e.loading : !0);
    return {
      n: tc,
      classes: oc,
      multiplySizeUnit: ar,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Qs.render = uc;
const Nr = Qs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var VS = Nr, dc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: vc,
  classes: fc
} = Q("hover-overlay");
function cc(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var _s = J({
  name: "VarHoverOverlay",
  props: dc,
  setup() {
    return {
      n: vc,
      classes: fc
    };
  }
});
_s.render = cc;
const cr = _s;
cr.install = function(e) {
  e.component(cr.name, cr);
};
function On() {
  var e = M(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var MS = cr;
function xs(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function mc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[gs(t)] = o, n;
  }, {}) : {};
}
function pc(e) {
  var {
    value: r
  } = e._hover, n = mc(e);
  Object.keys(r).forEach((a) => {
    var t = gs(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function Di(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function hc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function eu(e) {
  hc(e), Di(e, e._hover.rawStyle);
}
function ru() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Pt(e)) {
    e(this._hover.hovering);
    return;
  }
  Di(this, e);
}
function nu() {
  if (this._hover.hovering = !1, Pt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  eu(this);
}
function au(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  xs(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, pc(e), e.addEventListener("mouseenter", ru), e.addEventListener("mouseleave", nu));
}
function tu(e, r) {
  xs(r.arg) || (eu(e), e.removeEventListener("mouseenter", ru), e.removeEventListener("mouseleave", nu));
}
function gc(e, r) {
  e._hover && tu(e, r);
}
function yc(e, r) {
  return !Pt(r.value) && e._hover.hovering;
}
function bc(e, r) {
  au(e, r), yc(e, r) && Di(e, r.value);
}
var ou = {
  mounted: au,
  unmounted: tu,
  beforeUpdate: gc,
  updated: bc,
  install(e) {
    e.directive("hover", this);
  }
}, BS = ou;
const Rr = ou;
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
function iu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Cc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Sc = {
  type: {
    type: String,
    validator: iu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Cc
  },
  size: {
    type: String,
    validator: wc
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
  loadingColor: qo({}, Je(un, "color"), {
    default: "currentColor"
  }),
  onClick: H(),
  onTouchstart: H()
}, lu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function kc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(lu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function $c() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = lr(lu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Tc,
  classes: Oc
} = Q("button"), Pc = ["type", "disabled"];
function Vc(e, r) {
  var n = ae("var-loading"), a = ae("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return ke((p(), T(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: X({
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
    [e.loading || e.pending ? (p(), ye(
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
    )) : _("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [j(e.$slots, "default")],
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
    Pc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var su = J({
  name: "VarButton",
  components: {
    VarLoading: Nr,
    VarHoverOverlay: cr
  },
  directives: {
    Ripple: We,
    Hover: Rr
  },
  props: Sc,
  setup(e) {
    var r = M(!1), {
      buttonGroup: n
    } = $c(), {
      hovering: a,
      handleHovering: t
    } = On(), o = U(() => {
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
      n: Tc,
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
su.render = Vc;
const er = su;
er.install = function(e) {
  e.component(er.name, er);
};
var ES = er, Mc = {
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
  n: Bc,
  classes: Ec
} = Q("back-top");
function Ic(e, r) {
  var n = ae("var-icon"), a = ae("var-button");
  return p(), ye(
    Ra,
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
      [j(e.$slots, "default", {}, () => [Z(
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
var uu = J({
  name: "VarBackTop",
  components: {
    VarButton: er,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Mc,
  setup(e) {
    var r = M(!1), n = M(null), a = M(!0), t, o = (d) => {
      S(e.onClick, d);
      var v = Ti(t);
      ht(t, {
        left: v,
        duration: e.duration,
        animation: ys
      });
    }, l = $i(() => {
      r.value = pt(t) >= je(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ws(e.target, "BackTop") : Tn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return ao(() => {
      i(), s(), a.value = !1;
    }), Mn(s), kt(u), xr(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: ge,
      n: Bc,
      classes: Ec,
      handleClick: o
    };
  }
});
uu.render = Ic;
const Ln = uu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var IS = Ln;
function Nc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Dc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Ac = {
  type: {
    type: String,
    default: "default",
    validator: Nc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Dc
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
  n: zc,
  classes: Lc
} = Q("badge");
function Rc(e, r) {
  var n = ae("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "default"), Z(
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
          )) : _("v-if", !0), j(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), T(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            re(e.value),
            3
            /* TEXT, CLASS */
          )) : _("v-if", !0)])],
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
var du = J({
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Ac,
  setup(e) {
    var r = U(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && R(n) > R(a) ? a + "+" : n;
    });
    return {
      n: zc,
      classes: Lc,
      value: r
    };
  }
});
du.render = Rc;
const mn = du;
mn.install = function(e) {
  e.component(mn.name, mn);
};
var NS = mn, Uc = {
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
}, vu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Fc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = sr(vu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: Hc,
  classes: Yc
} = Q("bottom-navigation"), {
  n: fo
} = Q("bottom-navigation-item"), fl = fo("--right-half-space"), cl = fo("--left-half-space"), ml = fo("--right-space"), jc = {
  type: "primary"
};
function Wc(e, r) {
  var n = ae("var-button");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: X("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (p(), ye(
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
        default: ve(() => [j(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var fu = J({
  name: "VarBottomNavigation",
  components: {
    VarButton: er
  },
  props: Uc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(null), t = U(() => e.active), o = U(() => e.activeColor), l = U(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Fc(), v = () => {
      s.value === 0 || f() || m() || h();
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
    }), h = () => {
      or(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > s.value - 1 && S(e["onUpdate:active"], s.value - 1));
    }, g = (b) => {
      t.value !== b && (e.onBeforeChange ? y(b) : w(b));
    }, y = (b) => {
      var P = Ft(S(e.onBeforeChange, b));
      Promise.all(P).then((D) => {
        D.every(Boolean) && w(b);
      });
    }, w = (b) => {
      S(e["onUpdate:active"], b), S(e.onChange, b);
    }, V = () => {
      var b = B();
      b.forEach((P) => {
        P.classList.remove(fl, cl, ml);
      });
    }, C = (b) => {
      var P = B(), D = P.length, I = b % 2 === 0;
      P.forEach((Y, q) => {
        k(I, Y, q, D);
      });
    }, k = (b, P, D, I) => {
      var Y = D === I - 1;
      if (!b && Y) {
        P.classList.add(ml);
        return;
      }
      var q = D === I / 2 - 1, x = D === I / 2;
      q ? P.classList.add(fl) : x && P.classList.add(cl);
    }, B = () => Array.from(a.value.querySelectorAll("." + fo())), $ = () => {
      S(e.onFabClick);
    }, N = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: g
    };
    return d(N), ie(() => s.value, v), ie(() => e.fabProps, (b) => {
      i.value = Xo({}, jc, b);
    }, {
      immediate: !0,
      deep: !0
    }), ir(() => {
      n.fab && C(s.value);
    }), Tt(() => {
      V(), n.fab && C(s.value);
    }), {
      n: Hc,
      classes: Yc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: $,
      fabProps: i
    };
  }
});
fu.render = Wc;
const Rn = fu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var DS = Rn, Gc = {
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
function qc() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(vu);
  return n || Or("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Xc,
  classes: Kc
} = Q("bottom-navigation-item"), Zc = {
  type: "danger",
  dot: !0
};
function Jc(e, r) {
  var n = ae("var-icon"), a = ae("var-badge"), t = Ie("ripple");
  return ke((p(), T(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: X({
        color: e.computeColorStyle()
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), ye(
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
    )) : _("v-if", !0), j(e.$slots, "icon", {
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
    )) : _("v-if", !0), A(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (p(), T(
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
      )), j(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var cu = J({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: mn,
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: Gc,
  setup(e) {
    var r = U(() => e.name), n = U(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = qc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, h = (m = r.value) != null ? m : t.value;
      S(e.onClick, h), S(o.onToggle, h);
    };
    return l(d), ie(() => n.value, (m) => {
      a.value = m === !0 ? Zc : n.value;
    }, {
      immediate: !0
    }), {
      n: Xc,
      classes: Kc,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
cu.render = Jc;
const Un = cu;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var AS = Un, Qc = {
  separator: {
    type: String
  },
  onClick: H()
}, mu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function _c() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = sr(mu);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function xc() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = lr(mu);
  return r || Or("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: em,
  classes: rm
} = Q("breadcrumb");
function nm(e, r) {
  return p(), T(
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
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? _("v-if", !0) : j(e.$slots, "separator", {
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
var pu = J({
  name: "VarBreadcrumb",
  props: Qc,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = xc(), t = U(() => r.value === n.length.value - 1), o = U(() => n.separator.value), l = (i) => {
      t.value || S(e.onClick, i);
    };
    return a(null), {
      n: em,
      classes: rm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
pu.render = nm;
const Fn = pu;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var zS = Fn, am = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: tm
} = Q("breadcrumbs");
function om(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var hu = J({
  name: "VarBreadcrumbs",
  props: am,
  setup(e) {
    var r = U(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = _c(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: tm
    };
  }
});
hu.render = om;
const Hn = hu;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var LS = Hn;
function im(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function lm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function sm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var um = {
  type: {
    type: String,
    default: "default",
    validator: im
  },
  size: {
    type: String,
    default: "normal",
    validator: lm
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
    validator: sm
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
  n: dm,
  classes: vm
} = Q("button-group");
function fm(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var gu = J({
  name: "VarButtonGroup",
  props: um,
  setup(e) {
    var {
      bindButtons: r
    } = kc(), n = {
      elevation: U(() => e.elevation),
      type: U(() => e.type),
      size: U(() => e.size),
      color: U(() => e.color),
      textColor: U(() => e.textColor),
      mode: U(() => e.mode)
    };
    return r(n), {
      n: dm,
      classes: vm,
      formatElevation: hr
    };
  }
});
gu.render = fm;
const Yn = gu;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var RS = Yn;
function cm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var mm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: cm,
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
function pl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function hl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        pl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        pl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: pm,
  classes: hm
} = Q("card"), gm = 500, ym = ["src", "alt"];
function bm(e, r) {
  var n = ae("var-icon"), a = ae("var-button"), t = Ie("ripple");
  return ke((p(), T(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: X({
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
        style: X({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [j(e.$slots, "image", {}, () => [e.src ? (p(), T(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: X({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        ym
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [j(e.$slots, "title", {}, () => [e.title ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [j(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), T(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: X({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [j(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: X({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [j(e.$slots, "close-button", {}, () => [Z(
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
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: c(e.n("holder")),
        style: X({
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
var yu = J({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Oe,
    VarButton: er
  },
  props: mm,
  setup(e) {
    var r = M(null), n = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = U(() => e.layout === "row"), h = M(!1), g = M(!1), {
      zIndex: y
    } = Mt(() => e.floating, 1);
    so(() => e.floating, () => !m.value);
    var w = "auto", V = "auto", C = null, k = M(null), B = /* @__PURE__ */ function() {
      var P = hl(function* () {
        clearTimeout(k.value), clearTimeout(C), k.value = null, k.value = setTimeout(/* @__PURE__ */ hl(function* () {
          var {
            width: D,
            height: I,
            left: Y,
            top: q
          } = mr(r.value);
          a.value = ge(D), t.value = ge(I), o.value = a.value, l.value = t.value, i.value = ge(q), s.value = ge(Y), u.value = "fixed", w = i.value, V = s.value, h.value = !0, yield Lr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", g.value = !0;
        }), e.ripple ? gm : 0);
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), $ = () => {
      clearTimeout(C), clearTimeout(k.value), k.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = V, v.value = "0px", f.value = "0", h.value = !1, C = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", V = "auto", d.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }, N = () => {
      S(e["onUpdate:floating"], !1);
    }, b = (P) => {
      S(e.onClick, P);
    };
    return ie(() => e.floating, (P) => {
      m.value || Ne(() => {
        P ? B() : $();
      });
    }, {
      immediate: !0
    }), {
      n: pm,
      classes: hm,
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
      close: N,
      showFloatingButtons: h,
      floated: g,
      formatElevation: hr,
      handleClick: b
    };
  }
});
yu.render = bm;
const jn = yu;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var US = jn, wm = {
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
  n: Cm,
  classes: Sm
} = Q("cell");
function km(e, r) {
  var n = ae("var-icon"), a = Ie("ripple");
  return ke((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: X(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "icon", {}, () => [e.icon ? (p(), T(
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
    )) : _("v-if", !0)]), A(
      "div",
      {
        class: c(e.n("content"))
      },
      [j(e.$slots, "default", {}, () => [e.title ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        re(e.description),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [j(e.$slots, "extra")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var bu = J({
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: wm,
  setup(e) {
    var r = U(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ge(e.borderOffset),
      "--cell-border-right": ge(e.borderOffset)
    }), n = (a) => {
      S(e.onClick, a);
    };
    return {
      n: Cm,
      classes: Sm,
      toSizeUnit: ge,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
bu.render = km;
const pn = bu;
pn.install = function(e) {
  e.component(pn.name, pn);
};
var FS = pn, $m = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Tm
} = Q("form-details"), Om = {
  key: 0
}, Pm = {
  key: 0
};
function Vm(e, r) {
  return p(), ye(
    Le,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), T(
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
              default: ve(() => [e.errorMessage ? (p(), T(
                "div",
                Om,
                re(e.errorMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
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
              default: ve(() => [e.extraMessage ? (p(), T(
                "div",
                Pm,
                re(e.extraMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
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
      )) : _("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var wu = J({
  name: "VarFormDetails",
  props: $m,
  setup: () => ({
    n: Tm
  })
});
wu.render = Vm;
const _e = wu;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var HS = _e, Mm = {
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
}, Cu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Bm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(Cu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Em() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = lr(Cu);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
  };
}
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
var Su = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(Su), a = rt(), t = n ? (o) => {
    n(Ko({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: r,
    form: e,
    bindForm: t
  };
}
function Im() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = sr(Su);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: Nm,
  classes: Dm
} = Q("checkbox");
function Am(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("hover"), l = Ie("ripple");
  return p(), T(
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
      [ke((p(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
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
        )]) : j(e.$slots, "unchecked-icon", {
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
      }]]), A(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [j(e.$slots, "default")],
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
var ku = J({
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
  props: Mm,
  setup(e) {
    var r = M(!1), n = U(() => r.value === e.checkedValue), a = U(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Em(), {
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
      resetValidation: h
    } = Pr(), g = (b) => {
      Ne(() => {
        var {
          validateTrigger: P,
          rules: D,
          modelValue: I
        } = e;
        f(P, b, D, I);
      });
    }, y = (b) => {
      r.value = b;
      var {
        checkedValue: P,
        onChange: D
      } = e;
      S(e["onUpdate:modelValue"], r.value), S(D, r.value), g("onChange"), b === P ? o == null || o.onChecked(P) : o == null || o.onUnchecked(P);
    }, w = (b) => {
      var {
        disabled: P,
        readonly: D,
        checkedValue: I,
        uncheckedValue: Y,
        onClick: q
      } = e;
      if (!(u != null && u.disabled.value || P) && (S(q, b), !(u != null && u.readonly.value || D))) {
        t.value = !0;
        var x = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && x || y(n.value ? Y : I);
      }
    }, V = (b) => {
      var {
        checkedValue: P,
        uncheckedValue: D
      } = e;
      r.value = b.includes(P) ? P : D;
    }, C = () => {
      t.value = !1;
    }, k = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), h();
    }, B = (b) => {
      var {
        checkedValue: P,
        uncheckedValue: D
      } = e, I = ![P, D].includes(b);
      I && (b = n.value ? D : P), y(b);
    }, $ = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (b) => {
      r.value = b;
    }, {
      immediate: !0
    });
    var N = {
      checkedValue: a,
      checked: n,
      sync: V,
      validate: $,
      resetValidation: h,
      reset: k,
      resetWithAnimation: C
    };
    return S(l, N), S(d, N), {
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Nm,
      classes: Dm,
      handleClick: w,
      toggle: B,
      reset: k,
      validate: $,
      resetValidation: h
    };
  }
});
ku.render = Am;
const hn = ku;
hn.install = function(e) {
  e.component(hn.name, hn);
};
var YS = hn;
function zm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Lm = {
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
    validator: zm
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
  n: Rm,
  classes: Um
} = Q("checkbox-group");
function Fm(e, r) {
  var n = ae("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
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
var $u = J({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: _e
  },
  props: Lm,
  setup(e) {
    var r = U(() => e.max), n = U(() => e.modelValue.length), {
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
    } = Pr(), v = U(() => i.value), f = (N) => {
      Ne(() => {
        var {
          validateTrigger: b,
          rules: P,
          modelValue: D
        } = e;
        s(b, N, P, D);
      });
    }, m = (N) => {
      S(e["onUpdate:modelValue"], N), S(e.onChange, N), f("onChange");
    }, h = (N) => {
      var {
        modelValue: b
      } = e;
      b.includes(N) || m([...b, N]);
    }, g = (N) => {
      var {
        modelValue: b
      } = e;
      b.includes(N) && m(b.filter((P) => P !== N));
    }, y = () => t.forEach((N) => {
      var {
        sync: b
      } = N;
      return b(e.modelValue);
    }), w = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, V = () => {
      var N = t.map((P) => {
        var {
          checkedValue: D
        } = P;
        return D.value;
      }), b = _i(N);
      return w(), S(e["onUpdate:modelValue"], b), b;
    }, C = () => {
      var N = t.filter((P) => {
        var {
          checked: D
        } = P;
        return !D.value;
      }).map((P) => {
        var {
          checkedValue: D
        } = P;
        return D.value;
      }), b = _i(N);
      return w(), S(e["onUpdate:modelValue"], b), b;
    }, k = () => {
      S(e["onUpdate:modelValue"], []), d();
    }, B = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, y, {
      deep: !0
    }), ie(() => a.value, y);
    var $ = {
      max: r,
      checkedCount: n,
      onChecked: h,
      onUnchecked: g,
      validate: B,
      resetValidation: d,
      reset: k,
      errorMessage: v
    };
    return o($), S(l, $), {
      errorMessage: i,
      n: Rm,
      classes: Um,
      checkAll: V,
      inverseAll: C,
      reset: k,
      validate: B,
      resetValidation: d
    };
  }
});
$u.render = Fm;
const Wn = $u;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var jS = Wn;
function Hm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ym(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var jm = {
  type: {
    type: String,
    default: "default",
    validator: Hm
  },
  size: {
    type: String,
    default: "normal",
    validator: Ym
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(As, "name"),
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
  classes: Wm
} = Q("chip");
function Gm(e, r) {
  var n = ae("var-icon");
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
        [j(e.$slots, "left"), A(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [j(e.$slots, "default")],
          2
          /* CLASS */
        ), j(e.$slots, "right"), e.closable ? (p(), T(
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
        )) : _("v-if", !0)],
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
var Tu = J({
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: jm,
  setup(e) {
    var r = U(() => {
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
    }), n = U(() => {
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
      classes: Wm,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Tu.render = Gm;
const gn = Tu;
gn.install = function(e) {
  e.component(gn.name, gn);
};
var WS = gn;
function qm(e) {
  return ["row", "column"].includes(e);
}
function Xm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Km(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Zm = {
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
    validator: qm
  },
  justify: {
    type: String,
    validator: Xm
  },
  align: {
    type: String,
    validator: Km
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
}, Ou = Symbol("ROW_BIND_COL_KEY");
function Jm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(Ou);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function Qm() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(Ou);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Nt,
  classes: _m
} = Q("col");
function xm(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: X({
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
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Pu = J({
  name: "VarCol",
  props: Zm,
  setup(e) {
    var r = M({
      left: 0,
      right: 0
    }), n = U(() => R(e.span)), a = U(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = Qm(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Si(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Nt("--span-" + u + "-" + m)), f && v.push(Nt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Nt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      S(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), S(o, l), {
      n: Nt,
      classes: _m,
      padding: r,
      toNumber: R,
      toSizeUnit: ge,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: Xt
    };
  }
});
Pu.render = xm;
const Gn = Pu;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var GS = Gn, Vu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function ep() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = sr(Vu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var rp = {
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
  n: np
} = Q("collapse");
function ap(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Mu = J({
  name: "VarCollapse",
  props: rp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = ep(), t = U(() => e.modelValue), o = U(() => e.offset), l = U(() => e.divider), i = U(() => e.elevation), s = () => !e.accordion && !Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (g, y) => s() ? y ? e.accordion ? g : [...e.modelValue, g] : e.accordion ? null : e.modelValue.filter((w) => w !== g) : null, d = (g, y) => {
      var w = u(g, y);
      S(e["onUpdate:modelValue"], w), S(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((y) => {
          var {
            name: w
          } = y;
          return e.modelValue === w.value;
        });
      var g = n.filter((y) => {
        var {
          name: w
        } = y;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return g.length ? g : void 0;
    }, f = () => e.accordion ? n.find((g) => {
      var {
        index: y,
        name: w
      } = g;
      return w.value === void 0 && e.modelValue === y.value;
    }) : n.filter((g) => {
      var {
        index: y,
        name: w
      } = g;
      return w.value === void 0 && e.modelValue.includes(y.value);
    }), m = () => {
      if (s()) {
        var g = v() || f();
        if (e.accordion && !g || !e.accordion && !g.length) {
          n.forEach((y) => {
            y.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((y) => {
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
    return a(h), ie(() => r.value, () => Ne().then(m)), ie(() => e.modelValue, () => Ne().then(m)), {
      n: np,
      divider: l
    };
  }
});
Mu.render = ap;
const qn = Mu;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var qS = qn;
function tp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(Vu);
  return n || Or("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var op = {
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
  n: ip,
  classes: lp
} = Q("collapse-item");
function sp(e, r) {
  var n = ae("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: X("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
        [j(e.$slots, "title", {}, () => [Ce(
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
        [j(e.$slots, "icon", {}, () => [Z(
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
        [j(e.$slots, "default")],
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
var Bu = J({
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: op,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = tp(), t = !0, o = M(null), l = M(!1), i = M(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = U(() => e.name), h = (B, $) => {
      s.value === void 0 || B && Te(s.value) || $ === i.value || (i.value = $, g(!0));
    }, g = (B) => {
      e.disabled || B || f(e.name || r.value, !i.value);
    }, y = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: B
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = B + "px", t && io(() => {
            t && C();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, V = () => {
      if (o.value) {
        var {
          offsetHeight: B
        } = o.value;
        o.value.style.height = B + "px", br(() => {
          o.value.style.height = "0px";
        });
      }
    }, C = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, k = {
      index: r,
      name: m,
      init: h
    };
    return a(k), ie(i, (B) => {
      B ? y() : V();
    }), {
      n: ip,
      start: w,
      classes: lp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: g,
      contentEl: o,
      transitionend: C,
      formatElevation: hr
    };
  }
});
Bu.render = sp;
const Xn = Bu;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var XS = Xn, up = {
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
  n: dp
} = Q("countdown"), Zo = 1e3, Jo = 60 * Zo, Qo = 60 * Jo, gl = 24 * Qo;
function vp(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", Ot(to(e.timeData)), () => [Ce(
      re(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Eu = J({
  name: "VarCountdown",
  props: up,
  setup(e) {
    var r = M(""), n = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (h, g) => {
      var y = Object.values(g), w = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (w.forEach((k, B) => {
        h.includes(k) ? h = h.replace(k, Na("" + y[B], 2, "0")) : y[B + 1] += y[B] * V[B];
      }), h.includes("S")) {
        var C = Na("" + y[y.length - 1], 3, "0");
        h.includes("SSS") ? h = h.replace("SSS", C) : h.includes("SS") ? h = h.replace("SS", C.slice(0, 2)) : h = h.replace("S", C.slice(0, 1));
      }
      return h;
    }, u = (h) => {
      var g = Math.floor(h / gl), y = Math.floor(h % gl / Qo), w = Math.floor(h % Qo / Jo), V = Math.floor(h % Jo / Zo), C = Math.floor(h % Zo), k = {
        days: g,
        hours: y,
        minutes: w,
        seconds: V,
        milliseconds: C
      };
      n.value = k, S(e.onChange, n.value), r.value = s(e.format, k);
    }, d = () => {
      var {
        time: h,
        onEnd: g
      } = e, y = performance.now();
      if (a || (a = y + R(h)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        S(g);
        return;
      }
      t && (o = br(d));
    }, v = function(h) {
      h === void 0 && (h = !1), !(t && !h) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, ol(o);
    }, m = () => {
      a = 0, t = !1, ol(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Mn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), xr(() => {
      i = t, f();
    }), nt(f), {
      showTime: r,
      timeData: n,
      n: dp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Eu.render = vp;
const Kn = Eu;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var KS = Kn;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var ja = 9e15, Bn = 1e9, _o = "0123456789abcdef", Jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", xo = {
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
  minE: -ja,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: ja,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Iu, Hr, he = !0, co = "[DecimalError] ", Pn = co + "Invalid argument: ", Nu = co + "Precision limit exceeded", Du = co + "crypto unavailable", Au = "[object Decimal]", rr = Math.floor, Xe = Math.pow, fp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, cp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, mp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, zu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Dr = 1e7, ce = 7, pp = 9007199254740991, hp = Jt.length - 1, ei = Qt.length - 1, K = { toStringTag: Au };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), fe(e);
};
K.ceil = function() {
  return fe(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, r) {
  var n, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(Pn + r);
  return n = a.cmp(e), n < 0 ? e : a.cmp(r) > 0 ? r : new t(a);
};
K.comparedTo = K.cmp = function(e) {
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
K.cosine = K.cos = function() {
  var e, r, n = this, a = n.constructor;
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + ce, a.rounding = 1, n = gp(a, Hu(a, n)), a.precision = e, a.rounding = r, fe(Hr == 2 || Hr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
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
K.decimalPlaces = K.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - rr(this.e / ce)) * ce, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
K.dividedBy = K.div = function(e) {
  return Be(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var r = this, n = r.constructor;
  return fe(Be(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return fe(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, r, n, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / po(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Ja(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = n, l.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ja(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / po(5, e)), t = Ja(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, fe(t, r, n, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Be(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
K.inverseCosine = K.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Ir(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Ir(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Ir(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, he = !1, n = n.times(n).minus(1).sqrt().plus(n), he = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, he = !1, n = n.times(n).plus(1).sqrt().plus(n), he = !0, a.precision = e, a.rounding = r, n.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Be(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
K.inverseSine = K.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Ir(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= ei)
      return l = Ir(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ei)
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
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && rr(this.e / ce) > this.d.length - 2;
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
  if (he = !1, i = v + m, l = dn(u, i), a = r ? _t(d, i + 10) : dn(e, i), s = Be(l, a, i, 1), yt(s.d, t = v, f))
    do
      if (i += 10, l = dn(u, i), a = r ? _t(d, i + 10) : dn(e, i), s = Be(l, a, i, 1), !o) {
        +xe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (yt(s.d, t += 10, f));
  return he = !0, fe(s, v, f);
};
K.minus = K.sub = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, h = m.constructor;
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
  return u[0] ? (e.d = u, e.e = mo(u, n), he ? fe(e, i, s) : e) : new h(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? fe(new a(n), a.precision, a.rounding) : (he = !1, a.modulo == 9 ? (r = Be(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Be(n, e, 0, a.modulo, 1), r = r.times(e), he = !0, n.minus(r));
};
K.naturalExponential = K.exp = function() {
  return ri(this);
};
K.naturalLogarithm = K.ln = function() {
  return dn(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
K.plus = K.add = function(e) {
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
  return e.d = u, e.e = mo(u, a), he ? fe(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Pn + e);
  return n.d ? (r = Lu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
K.round = function() {
  var e = this, r = e.constructor;
  return fe(new r(e), e.e + 1, r.rounding);
};
K.sine = K.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + ce, a.rounding = 1, n = bp(a, Hu(a, n)), a.precision = e, a.rounding = r, fe(Hr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
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
K.tangent = K.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Be(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, fe(Hr == 2 || Hr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
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
  return r ? ++n : o.shift(), e.d = o, e.e = mo(o, n), he ? fe(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, r) {
  return Ai(this, 2, e, r);
};
K.toDecimalPlaces = K.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (pr(e, 0, Bn), r === void 0 ? r = a.rounding : pr(r, 0, 8), fe(n, e + n.e + 1, r));
};
K.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, !0) : (pr(e, 0, Bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e + 1, r), n = Ur(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
K.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Ur(t) : (pr(e, 0, Bn), r === void 0 ? r = o.rounding : pr(r, 0, 8), a = fe(new o(t), e + t.e + 1, r), n = Ur(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
K.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, h = m.d, g = m.constructor;
  if (!h)
    return new g(m);
  if (u = n = new g(1), a = s = new g(0), r = new g(a), o = r.e = Lu(h) - m.e - 1, l = o % ce, r.d[0] = Xe(10, l < 0 ? ce + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new g(e), !i.isInt() || i.lt(u))
      throw Error(Pn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (he = !1, i = new g(xe(h)), d = g.precision, g.precision = o = h.length * ce * 2; v = Be(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Be(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Be(u, a, o, 1).minus(m).abs().cmp(Be(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], g.precision = d, he = !0, f;
};
K.toHexadecimal = K.toHex = function(e, r) {
  return Ai(this, 16, e, r);
};
K.toNearest = function(e, r) {
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
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, r) {
  return Ai(this, 8, e, r);
};
K.toPower = K.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Xe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (r = rr(e.e / ce), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= pp)
    return t = Ru(s, i, n, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Xe(+i, u), r = n == 0 || !isFinite(n) ? rr(u * (Math.log("0." + xe(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (he = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = ri(e.times(dn(i, a + n)), a), t.d && (t = fe(t, a + 5, 1), yt(t.d, a, o) && (r = a + 10, t = fe(ri(e.times(dn(i, r + n)), r), r + 5, 1), +xe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, he = !0, s.rounding = o, fe(t, a, o));
};
K.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (pr(e, 1, Bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e, r), n = Ur(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
K.toSignificantDigits = K.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (pr(e, 1, Bn), r === void 0 ? r = a.rounding : pr(r, 0, 8)), fe(new a(n), e, r);
};
K.toString = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
K.truncated = K.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
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
function yt(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += ce, t = 0) : (t = Math.ceil((r + 1) / ce), r %= ce), o = Xe(10, ce - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Xe(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Xe(10, r - 3) - 1, l;
}
function Ht(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += _o.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function gp(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / po(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Ja(e, 1, r.times(t), new e(1));
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
    var u, d, v, f, m, h, g, y, w, V, C, k, B, $, N, b, P, D, I, Y, q = a.constructor, x = a.s == t.s ? 1 : -1, z = a.d, O = t.d;
    if (!z || !z[0] || !O || !O[0])
      return new q(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (z ? O && z[0] == O[0] : !O) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          z && z[0] == 0 || !O ? x * 0 : x / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Dr, m = ce, d = rr(a.e / m) - rr(t.e / m)), I = O.length, P = z.length, w = new q(x), V = w.d = [], v = 0; O[v] == (z[v] || 0); v++)
      ;
    if (O[v] > (z[v] || 0) && d--, o == null ? ($ = o = q.precision, l = q.rounding) : i ? $ = o + (a.e - t.e) + 1 : $ = o, $ < 0)
      V.push(1), h = !0;
    else {
      if ($ = $ / m + 2 | 0, v = 0, I == 1) {
        for (f = 0, O = O[0], $++; (v < P || f) && $--; v++)
          N = f * s + (z[v] || 0), V[v] = N / O | 0, f = N % O | 0;
        h = f || v < P;
      } else {
        for (f = s / (O[0] + 1) | 0, f > 1 && (O = e(O, f, s), z = e(z, f, s), I = O.length, P = z.length), b = I, C = z.slice(0, I), k = C.length; k < I; )
          C[k++] = 0;
        Y = O.slice(), Y.unshift(0), D = O[0], O[1] >= s / 2 && ++D;
        do
          f = 0, u = r(O, C, I, k), u < 0 ? (B = C[0], I != k && (B = B * s + (C[1] || 0)), f = B / D | 0, f > 1 ? (f >= s && (f = s - 1), g = e(O, f, s), y = g.length, k = C.length, u = r(g, C, y, k), u == 1 && (f--, n(g, I < y ? Y : O, y, s))) : (f == 0 && (u = f = 1), g = O.slice()), y = g.length, y < k && g.unshift(0), n(C, g, k, s), u == -1 && (k = C.length, u = r(O, C, I, k), u < 1 && (f++, n(C, I < k ? Y : O, k, s))), k = C.length) : u === 0 && (f++, C = [0]), V[v++] = f, u && C[0] ? C[k++] = z[b] || 0 : (C = [z[b]], k = 1);
        while ((b++ < P || C[0] !== void 0) && $--);
        h = C[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      w.e = d, Iu = h;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, fe(w, i ? o + w.e + 1 : o, l, h);
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
    return Fu(e);
  var a, t = e.e, o = xe(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + nn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + nn(-t - 1) + o, n && (a = n - l) > 0 && (o += nn(a))) : t >= l ? (o += nn(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + nn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += nn(a))), o;
}
function mo(e, r) {
  var n = e[0];
  for (r *= ce; n >= 10; n /= 10)
    r++;
  return r;
}
function _t(e, r, n) {
  if (r > hp)
    throw he = !0, n && (e.precision = n), Error(Nu);
  return fe(new e(Jt), r, 1, !0);
}
function Ir(e, r, n) {
  if (r > ei)
    throw Error(Nu);
  return fe(new e(Qt), r, n, !0);
}
function Lu(e) {
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
function Ru(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / ce + 4);
  for (he = !1; ; ) {
    if (n % 2 && (o = o.times(r), bl(o.d, l) && (t = !0)), n = rr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), bl(r.d, l);
  }
  return he = !0, o;
}
function yl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Uu(e, r, n) {
  for (var a, t = new e(r[0]), o = 0; ++o < r.length; )
    if (a = new e(r[o]), a.s)
      t[n](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ri(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (he = !1, s = h) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Xe(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), n = n.times(++d), i = l.plus(Be(o, n, s, 1)), xe(i.d).slice(0, s) === xe(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = fe(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && yt(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = h, m, he = !0);
      else
        return f.precision = h, l;
    }
    l = i;
  }
}
function dn(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, h = 10, g = e, y = g.d, w = g.constructor, V = w.rounding, C = w.precision;
  if (g.s < 0 || !y || !y[0] || !g.e && y[0] == 1 && y.length == 1)
    return new w(y && !y[0] ? -1 / 0 : g.s != 1 ? NaN : y ? 0 : g);
  if (r == null ? (he = !1, d = C) : d = r, w.precision = d += h, n = xe(y), a = n.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      g = g.times(e), n = xe(g.d), a = n.charAt(0), m++;
    o = g.e, a > 1 ? (g = new w("0." + n), o++) : g = new w(a + "." + n.slice(1));
  } else
    return u = _t(w, d + 2, C).times(o + ""), g = dn(new w(a + "." + n.slice(1)), d - h).plus(u), w.precision = C, r == null ? fe(g, C, V, he = !0) : g;
  for (v = g, s = l = g = Be(g.minus(1), g.plus(1), d, 1), f = fe(g.times(g), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Be(l, new w(t), d, 1)), xe(u.d).slice(0, d) === xe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(_t(w, d + 2, C).times(o + ""))), s = Be(s, new w(m), d, 1), r == null)
        if (yt(s.d, d - h, V, i))
          w.precision = d += h, u = l = g = Be(v.minus(1), v.plus(1), d, 1), f = fe(g.times(g), d, 1), t = i = 1;
        else
          return fe(s, w.precision = C, V, he = !0);
      else
        return w.precision = C, s;
    s = u, t += 2;
  }
}
function Fu(e) {
  return String(e.s * e.s / 0);
}
function ni(e, r) {
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
function yp(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), zu.test(r))
      return ni(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (cp.test(r))
    n = 16, r = r.toLowerCase();
  else if (fp.test(r))
    n = 2;
  else if (mp.test(r))
    n = 8;
  else
    throw Error(Pn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Ru(a, new a(n), o, o * 2)), u = Ht(r, n, Dr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = mo(u, d), e.d = u, he = !1, l && (e = Be(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Xe(2, s) : vn.pow(2, s))), he = !0, e);
}
function bp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Ja(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / po(5, n)), r = Ja(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Ja(e, r, n, a, t) {
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
function po(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Hu(e, r) {
  var n, a = r.s < 0, t = Ir(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Hr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    Hr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return Hr = yl(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    Hr = yl(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Ai(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, h = n !== void 0;
  if (h ? (pr(n, 1, Bn), a === void 0 ? a = m.rounding : pr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Fu(e);
  else {
    for (d = Ur(e), l = d.indexOf("."), h ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ht(Ur(f), 10, t), f.e = f.d.length), v = Ht(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Be(e, f, n, a, 0, t), v = e.d, o = e.e, u = Iu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += _o.charAt(v[l]);
      if (h) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ht(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += _o.charAt(v[l]);
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
function bl(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function wp(e) {
  return new this(e).abs();
}
function Cp(e) {
  return new this(e).acos();
}
function Sp(e) {
  return new this(e).acosh();
}
function kp(e, r) {
  return new this(e).plus(r);
}
function $p(e) {
  return new this(e).asin();
}
function Tp(e) {
  return new this(e).asinh();
}
function Op(e) {
  return new this(e).atan();
}
function Pp(e) {
  return new this(e).atanh();
}
function Vp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Ir(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Ir(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Ir(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Be(e, r, o, 1)), r = Ir(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Be(e, r, o, 1)), n;
}
function Mp(e) {
  return new this(e).cbrt();
}
function Bp(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Ep(e, r, n) {
  return new this(e).clamp(r, n);
}
function Ip(e) {
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
    -ja,
    0,
    "toExpPos",
    0,
    ja,
    "maxE",
    0,
    ja,
    "minE",
    -ja,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (n = o[r], t && (this[n] = xo[n]), (a = e[n]) !== void 0)
      if (rr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(Pn + n + ": " + a);
  if (n = "crypto", t && (this[n] = xo[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Du);
      else
        this[n] = !1;
    else
      throw Error(Pn + n + ": " + a);
  return this;
}
function Np(e) {
  return new this(e).cos();
}
function Dp(e) {
  return new this(e).cosh();
}
function Yu(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, wl(o)) {
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
      throw Error(Pn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), zu.test(o) ? ni(u, o) : yp(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Ip, t.clone = Yu, t.isDecimal = wl, t.abs = wp, t.acos = Cp, t.acosh = Sp, t.add = kp, t.asin = $p, t.asinh = Tp, t.atan = Op, t.atanh = Pp, t.atan2 = Vp, t.cbrt = Mp, t.ceil = Bp, t.clamp = Ep, t.cos = Np, t.cosh = Dp, t.div = Ap, t.exp = zp, t.floor = Lp, t.hypot = Rp, t.ln = Up, t.log = Fp, t.log10 = Yp, t.log2 = Hp, t.max = jp, t.min = Wp, t.mod = Gp, t.mul = qp, t.pow = Xp, t.random = Kp, t.round = Zp, t.sign = Jp, t.sin = Qp, t.sinh = _p, t.sqrt = xp, t.sub = eh, t.sum = rh, t.tan = nh, t.tanh = ah, t.trunc = th, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Ap(e, r) {
  return new this(e).div(r);
}
function zp(e) {
  return new this(e).exp();
}
function Lp(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Rp() {
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
function wl(e) {
  return e instanceof vn || e && e.toStringTag === Au || !1;
}
function Up(e) {
  return new this(e).ln();
}
function Fp(e, r) {
  return new this(e).log(r);
}
function Hp(e) {
  return new this(e).log(2);
}
function Yp(e) {
  return new this(e).log(10);
}
function jp() {
  return Uu(this, arguments, "lt");
}
function Wp() {
  return Uu(this, arguments, "gt");
}
function Gp(e, r) {
  return new this(e).mod(r);
}
function qp(e, r) {
  return new this(e).mul(r);
}
function Xp(e, r) {
  return new this(e).pow(r);
}
function Kp(e) {
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
      throw Error(Du);
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
function Zp(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function Jp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Qp(e) {
  return new this(e).sin();
}
function _p(e) {
  return new this(e).sinh();
}
function xp(e) {
  return new this(e).sqrt();
}
function eh(e, r) {
  return new this(e).sub(r);
}
function rh() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (he = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return he = !0, fe(n, this.precision, this.rounding);
}
function nh(e) {
  return new this(e).tan();
}
function ah(e) {
  return new this(e).tanh();
}
function th(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var vn = K.constructor = Yu(xo);
Jt = new vn(Jt);
Qt = new vn(Qt);
var oh = {
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
  n: ih,
  classes: lh
} = Q("counter"), Cl = 100, Sl = 600, sh = ["inputmode", "readonly", "disabled"];
function uh(e, r) {
  var n = ae("var-icon"), a = ae("var-button"), t = ae("var-form-details");
  return p(), T(
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
          style: X({
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
      ), ke(A(
        "input",
        {
          class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: X({
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
        sh
      ), [[Uv, e.inputValue]]), Z(
        a,
        {
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: X({
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
var ju = J({
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
  props: oh,
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
    } = Pr(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, h = () => l(e.rules, e.modelValue), g = (O) => {
      Ne(() => {
        var {
          validateTrigger: F,
          rules: te,
          modelValue: W
        } = e;
        o(F, O, te, W);
      });
    }, y = () => {
      var {
        min: O
      } = e;
      S(e["onUpdate:modelValue"], O != null ? R(O) : 0), i();
    }, w = {
      reset: y,
      validate: h,
      resetValidation: i
    }, V = U(() => {
      var {
        max: O,
        modelValue: F
      } = e;
      return O != null && R(F) >= R(O);
    }), C = U(() => {
      var {
        min: O,
        modelValue: F
      } = e;
      return O != null && R(F) <= R(O);
    }), k = (O) => {
      var {
        decimalLength: F,
        max: te,
        min: W
      } = e, L = R(O);
      return te != null && L > R(te) && (L = R(te)), W != null && L < R(W) && (L = R(W)), O = String(L), F != null && (O = L.toFixed(R(F))), O;
    }, B = (O) => {
      var {
        lazyChange: F,
        onBeforeChange: te
      } = e, {
        value: W
      } = O.target, L = k(W);
      F ? S(te, R(L), z) : x(L), g("onInputChange");
    }, $ = () => {
      var {
        disabled: O,
        readonly: F,
        disableDecrement: te,
        decrementButton: W,
        lazyChange: L,
        step: E,
        modelValue: G,
        onDecrement: ee,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || O || F || te || !W) && !C.value) {
        var de = new vn(R(G)).minus(new vn(R(E))).toString(), we = k(de), Pe = R(we);
        S(ee, Pe), L ? S(se, Pe, z) : (x(we), g("onDecrement"));
      }
    }, N = () => {
      var {
        disabled: O,
        readonly: F,
        disableIncrement: te,
        incrementButton: W,
        lazyChange: L,
        step: E,
        modelValue: G,
        onIncrement: ee,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || O || F || te || !W) && !V.value) {
        var de = new vn(R(G)).plus(new vn(R(E))).toString(), we = k(de), Pe = R(we);
        S(ee, Pe), L ? S(se, Pe, z) : (x(we), g("onIncrement"));
      }
    }, b = () => {
      var {
        press: O,
        lazyChange: F
      } = e;
      !O || F || (m = window.setTimeout(() => {
        q();
      }, Sl));
    }, P = () => {
      var {
        press: O,
        lazyChange: F
      } = e;
      !O || F || (f = window.setTimeout(() => {
        Y();
      }, Sl));
    }, D = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, I = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, Y = () => {
      d = window.setTimeout(() => {
        N(), Y();
      }, Cl);
    }, q = () => {
      v = window.setTimeout(() => {
        $(), q();
      }, Cl);
    }, x = (O) => {
      r.value = O;
      var F = R(O);
      S(e["onUpdate:modelValue"], F);
    }, z = (O) => {
      x(k(String(O))), g("onLazyChange");
    };
    return S(n, w), ie(() => e.modelValue, (O) => {
      x(k(String(O))), S(e.onChange, R(O));
    }), x(k(String(e.modelValue))), {
      n: ih,
      classes: lh,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: C,
      validate: h,
      reset: y,
      resetValidation: i,
      handleChange: B,
      decrement: $,
      increment: N,
      pressDecrement: b,
      pressIncrement: P,
      releaseDecrement: D,
      releaseIncrement: I,
      toSizeUnit: ge,
      toNumber: R
    };
  }
});
ju.render = uh;
const Zn = ju;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var ZS = Zn, Wu = 60, Gu = Wu * 60, qu = Gu * 24, dh = qu * 7, Qa = 1e3, To = Wu * Qa, kl = Gu * Qa, vh = qu * Qa, fh = dh * Qa, zi = "millisecond", Wa = "second", Ga = "minute", qa = "hour", an = "day", Yt = "week", Er = "month", Xu = "quarter", tn = "year", Xa = "date", ch = "YYYY-MM-DDTHH:mm:ssZ", $l = "Invalid Date", mh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ph = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const hh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ai = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, gh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + ai(t, 2, "0") + ":" + ai(o, 2, "0");
}, yh = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Er), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Er);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, bh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, wh = function(r) {
  var n = {
    M: Er,
    y: tn,
    w: Yt,
    d: an,
    D: Xa,
    h: qa,
    m: Ga,
    s: Wa,
    ms: zi,
    Q: Xu
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Ch = function(r) {
  return r === void 0;
};
const Sh = {
  s: ai,
  z: gh,
  m: yh,
  a: bh,
  p: wh,
  u: Ch
};
var dt = "en", Jn = {};
Jn[dt] = hh;
var Li = function(r) {
  return r instanceof ho;
}, xt = function e(r, n, a) {
  var t;
  if (!r)
    return dt;
  if (typeof r == "string") {
    var o = r.toLowerCase();
    Jn[o] && (t = o), n && (Jn[o] = n, t = o);
    var l = r.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = r.name;
    Jn[i] = r, t = i;
  }
  return !a && t && (dt = t), t || !a && dt;
}, le = function(r, n) {
  if (Li(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new ho(a);
}, kh = function(r, n) {
  return le(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Me = Sh;
Me.l = xt;
Me.i = Li;
Me.w = kh;
var $h = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Me.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(mh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, ho = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = xt(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = $h(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Me;
  }, r.isValid = function() {
    return this.$d.toString() !== $l;
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
    var o = this, l = Me.u(t) ? !0 : t, i = Me.p(a), s = function(w, V) {
      var C = Me.w(o.$u ? Date.UTC(o.$y, V, w) : new Date(o.$y, V, w), o);
      return l ? C : C.endOf(an);
    }, u = function(w, V) {
      var C = [0, 0, 0, 0], k = [23, 59, 59, 999];
      return Me.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? C : k).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case tn:
        return l ? s(1, 0) : s(31, 11);
      case Er:
        return l ? s(1, v) : s(0, v + 1);
      case Yt: {
        var h = this.$locale().weekStart || 0, g = (d < h ? d + 7 : d) - h;
        return s(l ? f - g : f + (6 - g), v);
      }
      case an:
      case Xa:
        return u(m + "Hours", 0);
      case qa:
        return u(m + "Minutes", 1);
      case Ga:
        return u(m + "Seconds", 2);
      case Wa:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Me.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[an] = i + "Date", o[Xa] = i + "Date", o[Er] = i + "Month", o[tn] = i + "FullYear", o[qa] = i + "Hours", o[Ga] = i + "Minutes", o[Wa] = i + "Seconds", o[zi] = i + "Milliseconds", o)[l], u = l === an ? this.$D + (t - this.$W) : t;
    if (l === Er || l === tn) {
      var d = this.clone().set(Xa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Xa, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (i === Yt)
      return s(7);
    var u = (l = {}, l[Ga] = To, l[qa] = kl, l[Wa] = Qa, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Me.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || $l;
    var l = a || ch, i = Me.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, h = function(C, k, B, $) {
      return C && (C[k] || C(t, l)) || B[k].slice(0, $);
    }, g = function(C) {
      return Me.s(s % 12 || 12, C, "0");
    }, y = m || function(V, C, k) {
      var B = V < 12 ? "AM" : "PM";
      return k ? B.toLowerCase() : B;
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
    return l.replace(ph, function(V, C) {
      return C || w[V] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Me.p(t), s = le(a), u = (s.utcOffset() - this.utcOffset()) * To, d = this - s, v = Me.m(this, s);
    return v = (l = {}, l[tn] = v / 12, l[Er] = v, l[Xu] = v / 3, l[Yt] = (d - u) / fh, l[an] = (d - u) / vh, l[qa] = d / kl, l[Ga] = d / To, l[Wa] = d / Qa, l)[i] || d, o ? v : Me.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Er).$D;
  }, r.$locale = function() {
    return Jn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = xt(a, t, !0);
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
}(), Ku = ho.prototype;
le.prototype = Ku;
[["$ms", zi], ["$s", Wa], ["$m", Ga], ["$H", qa], ["$W", an], ["$M", Er], ["$y", tn], ["$D", Xa]].forEach(function(e) {
  Ku[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
le.extend = function(e, r) {
  return e.$i || (e(r, ho, le), e.$i = !0), le;
};
le.locale = xt;
le.isDayjs = Li;
le.unix = function(e) {
  return le(e * 1e3);
};
le.en = Jn[dt];
le.Ls = Jn;
le.p = {};
const Zu = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, Ju = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Th(e) {
  return ["date", "month"].includes(e);
}
var jt = [{
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
    validator: Th
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
  n: Ph
} = Q("picker-header");
function Vh(e, r) {
  var n = ae("var-icon"), a = ae("var-button");
  return p(), T(
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
    ), A(
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
          default: ve(() => [(p(), T(
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
var Qu = J({
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
    } = r, a = M(!1), t = M(0), o = U(() => {
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
      n: Ph,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Qu.render = Vh;
const _u = Qu;
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
le.extend(Zu);
le.extend(Ju);
var {
  n: Dt,
  classes: Mh
} = Q("month-picker"), {
  n: At
} = Q("date-picker");
function Bh(e, r) {
  var n = ae("panel-header"), a = ae("var-button");
  return p(), T(
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
          default: ve(() => [(p(), T("ul", {
            key: e.panelKey
          }, [(p(!0), T(
            Ve,
            null,
            Ue(e.MONTH_LIST, (t) => (p(), T("li", {
              key: t.index
            }, [Z(
              a,
              Ee({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, ti({}, e.buttonProps(t.index)), {
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
var xu = J({
  name: "MonthPickerPanel",
  components: {
    VarButton: er,
    PanelHeader: _u
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
    }), u = U(() => e.choose.chooseYear === e.preview.previewYear), d = U(() => e.preview.previewYear === a), v = (V) => {
      var C, k;
      return (C = (k = Ze.value.datePickerMonthDict) == null ? void 0 : k[V].abbr) != null ? C : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: C
        },
        componentProps: {
          min: k,
          max: B
        }
      } = e, $ = !0, N = !0, b = C + "-" + V;
      return B && ($ = le(b).isSameOrBefore(le(B), "month")), k && (N = le(b).isSameOrAfter(le(k), "month")), $ && N;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: C,
          chooseDays: k,
          chooseRangeMonth: B
        },
        componentProps: {
          type: $,
          range: N
        }
      } = e;
      if (N) {
        if (!B.length)
          return !1;
        var b = le(V).isSameOrBefore(le(B[1]), "month"), P = le(V).isSameOrAfter(le(B[0]), "month");
        return b && P;
      }
      return $ === "month" ? C.includes(V) : k.some((D) => D.includes(V));
    }, h = (V) => {
      var {
        choose: {
          chooseMonth: C
        },
        preview: {
          previewYear: k
        },
        componentProps: {
          allowedDates: B,
          color: $,
          multiple: N,
          range: b
        }
      } = e, P = k + "-" + V, D = () => b || N ? m(P) : (C == null ? void 0 : C.index) === V && u.value, I = () => f(V) ? B ? !B(P) : !1 : !0, Y = I(), q = () => Y ? !0 : b || N ? !m(P) : !u.value || (C == null ? void 0 : C.index) !== V, x = () => d.value && t === V && e.componentProps.showCurrent ? (b || N || u.value) && Y ? !0 : b || N ? !m(P) : u.value ? (C == null ? void 0 : C.index) !== t : !0 : !1, z = () => Y ? "" : x() ? $ ?? "" : D() ? "" : At() + "-color-cover", O = z().startsWith(At());
      return {
        outline: x(),
        text: q(),
        color: q() ? "" : $,
        textColor: O ? "" : z(),
        [At() + "-color-cover"]: O,
        class: Mh(Dt("button"), [Y, Dt("button--disabled")]),
        disabled: Y
      };
    }, g = (V, C) => {
      var k = C.currentTarget;
      k.classList.contains(Dt("button--disabled")) || n("choose-month", V);
    }, y = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, n("check-preview", "year", V);
    }, w = (V) => {
      i.value.checkDate(V);
    };
    return ie(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: C,
          max: k
        }
      } = e;
      k && (s.right = !le("" + (R(V) + 1)).isSameOrBefore(le(k), "year")), C && (s.left = !le("" + (R(V) - 1)).isSameOrAfter(le(C), "year"));
    }, {
      immediate: !0
    }), {
      n: Dt,
      nDate: At,
      pack: Ze,
      MONTH_LIST: jt,
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
xu.render = Bh;
const Eh = xu;
var {
  n: Tl,
  classes: Ih
} = Q("year-picker"), Nh = ["onClick"];
function Dh(e, r) {
  return p(), T(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), T(
      Ve,
      null,
      Ue(e.yearList, (n) => (p(), T(
        "li",
        {
          key: n,
          class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
          style: X({
            color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(n)
        },
        re(n),
        15,
        Nh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var ed = J({
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
    } = r, a = U(() => {
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
      for (var h = u[0]; h >= u[1]; h--)
        o.push(h);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return ir(() => {
      var o = document.querySelector("." + Tl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Tl,
      classes: Ih,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
ed.render = Dh;
const Ah = ed;
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
le.extend(Zu);
le.extend(Ju);
var {
  n: Ya,
  classes: zh
} = Q("day-picker"), {
  n: zt
} = Q("date-picker");
function Lh(e, r) {
  var n = ae("panel-header"), a = ae("var-button");
  return p(), T(
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
          default: ve(() => [(p(), T("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), T(
              Ve,
              null,
              Ue(e.sortWeekList, (t) => (p(), T(
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
            [(p(!0), T(
              Ve,
              null,
              Ue(e.days, (t, o) => (p(), T("li", {
                key: o
              }, [Z(
                a,
                Ee({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, oi({}, e.buttonProps(t)), {
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
var rd = J({
  name: "DayPickerPanel",
  components: {
    VarButton: er,
    PanelHeader: _u
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
    }), v = U(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = U(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = U(() => {
      var b = st.findIndex((P) => P.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? st : st.slice(b).concat(st.slice(0, b));
    }), h = (b) => {
      var P, D;
      return (P = (D = Ze.value.datePickerWeekDict) == null ? void 0 : D[b].abbr) != null ? P : "";
    }, g = (b) => b > 0 ? b : "", y = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: P
        }
      } = e, D = le(P + "-" + b.index).daysInMonth(), I = le(P + "-" + b.index + "-01").day(), Y = m.value.findIndex((q) => q.index === "" + I);
      l.value = [...Array(Y).fill(-1), ...Array.from(Array(D + 1).keys())].filter((q) => q);
    }, w = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: P
        },
        componentProps: {
          max: D,
          min: I
        }
      } = e;
      if (D) {
        var Y = b + "-" + (R(P.index) + 1);
        d.right = !le(Y).isSameOrBefore(le(D), "month");
      }
      if (I) {
        var q = b + "-" + (R(P.index) - 1);
        d.left = !le(q).isSameOrAfter(le(I), "month");
      }
    }, V = (b) => {
      var {
        preview: {
          previewYear: P,
          previewMonth: D
        },
        componentProps: {
          min: I,
          max: Y
        }
      } = e, q = !0, x = !0, z = P + "-" + D.index + "-" + b;
      return Y && (q = le(z).isSameOrBefore(le(Y), "day")), I && (x = le(z).isSameOrAfter(le(I), "day")), q && x;
    }, C = (b) => {
      var {
        choose: {
          chooseDays: P,
          chooseRangeDay: D
        },
        componentProps: {
          range: I
        }
      } = e;
      if (I) {
        if (!D.length)
          return !1;
        var Y = le(b).isSameOrBefore(le(D[1]), "day"), q = le(b).isSameOrAfter(le(D[0]), "day");
        return Y && q;
      }
      return P.includes(b);
    }, k = (b) => {
      if (b < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ya("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: P
        },
        preview: {
          previewYear: D,
          previewMonth: I
        },
        componentProps: {
          allowedDates: Y,
          color: q,
          multiple: x,
          range: z
        }
      } = e, O = D + "-" + I.index + "-" + b, F = () => z || x ? C(O) : R(P) === b && f.value, te = () => V(b) ? Y ? !Y(O) : !1 : !0, W = te(), L = () => W ? !0 : z || x ? !C(O) : !f.value || R(P) !== b, E = () => v.value && R(o) === b && e.componentProps.showCurrent ? (z || x || f.value) && W ? !0 : z || x ? !C(O) : f.value ? P !== o : !0 : !1, G = () => W ? "" : E() ? q ?? "" : F() ? "" : zt() + "-color-cover", ee = G().startsWith(zt());
      return {
        text: L(),
        outline: E(),
        textColor: ee ? "" : G(),
        [zt() + "-color-cover"]: ee,
        class: zh(Ya("button"), Ya("button--usable"), [W, Ya("button--disabled")]),
        disabled: W
      };
    }, B = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, n("check-preview", "month", b);
    }, $ = (b, P) => {
      var D = P.currentTarget;
      D.classList.contains(Ya("button--disabled")) || n("choose-day", b);
    }, N = (b) => {
      u.value.checkDate(b);
    };
    return ir(() => {
      y(), w();
    }), ie(() => e.preview, () => {
      y(), w();
    }), {
      n: Ya,
      nDate: zt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: N,
      filterDay: g,
      getDayAbbr: h,
      checkDate: B,
      chooseDay: $,
      buttonProps: k
    };
  }
});
rd.render = Lh;
const Rh = rd;
var {
  n: Uh,
  classes: Fh
} = Q("date-picker");
function Hh(e, r) {
  var n = ae("year-picker-panel"), a = ae("month-picker-panel"), t = ae("day-picker-panel");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: X({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: r[0] || (r[0] = (o) => e.clickEl("year"))
        },
        [j(e.$slots, "year", {
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
        [Z(
          Le,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), T("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? j(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? j(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : j(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [Ce(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), T("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? j(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [Ce(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? j(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [Ce(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : j(e.$slots, "date", Ot(Ee({
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
      [Z(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), ye(
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
          )) : _("v-if", !0)]),
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
var nd = J({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Eh,
    YearPickerPanel: Ah,
    DayPickerPanel: Rh
  },
  props: Oh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = le().format("YYYY-MM-D"), [l, i] = o.split("-"), s = jt.find((oe) => oe.index === i), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), h = M(), g = M(s), y = M(l), w = M(!1), V = M([]), C = M([]), k = M([]), B = M([]), $ = M(null), N = M(null), b = Ae({
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
    }), P = U(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: h.value,
      chooseMonths: V.value,
      chooseDays: C.value,
      chooseRangeMonth: k.value,
      chooseRangeDay: B.value
    })), D = U(() => ({
      previewMonth: g.value,
      previewYear: y.value
    })), I = U(() => {
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
      return oe ? "" + V.value.length + Ze.value.datePickerSelected : pe;
    }), Y = U(() => {
      var oe, be, pe, Se, {
        multiple: $e,
        range: Re
      } = e;
      if (Re) {
        var nr = B.value.map((So) => le(So).format("YYYY-MM-DD"));
        return nr.length ? nr[0] + " ~ " + nr[1] : "";
      }
      if ($e)
        return "" + C.value.length + Ze.value.datePickerSelected;
      if (!m.value || !f.value || !h.value)
        return "";
      var wr = le(m.value + "-" + f.value.index + "-" + h.value).day(), Ha = st.find((So) => So.index === "" + wr), Zi = (oe = (be = Ze.value.datePickerWeekDict) == null ? void 0 : be[Ha.index].name) != null ? oe : "", Ev = (pe = (Se = Ze.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? pe : "", Iv = Na(h.value, 2, "0");
      return Ze.value.lang === "zh-CN" ? f.value.index + "-" + Iv + " " + Zi.slice(0, 3) : Zi.slice(0, 3) + ", " + Ev.slice(0, 3) + " " + h.value;
    }), q = U(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), x = U(() => !e.touchable || ["", "year"].includes(q.value)), z = U(() => {
      var oe, be, pe, Se, $e = le(m.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + h.value).day(), Re = h.value ? Na(h.value, 2, "0") : "";
      return {
        week: "" + $e,
        year: (be = m.value) != null ? be : "",
        month: (pe = (Se = f.value) == null ? void 0 : Se.index) != null ? pe : "",
        date: Re
      };
    }), O = U(() => P.value.chooseRangeDay.map((oe) => le(oe).format("YYYY-MM-DD"))), F = U(() => m.value === y.value), te = U(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === g.value.index;
    }), W = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, L = (oe) => {
      if (!x.value) {
        var {
          clientX: be,
          clientY: pe
        } = oe.touches[0];
        r = be, n = pe;
      }
    }, E = (oe, be) => oe >= be && oe > 20 ? "x" : "y", G = (oe) => {
      if (!x.value) {
        var {
          clientX: be,
          clientY: pe
        } = oe.touches[0], Se = be - r, $e = pe - n;
        t = E(Math.abs(Se), Math.abs($e)), a = Se > 0 ? "prev" : "next";
      }
    }, ee = () => {
      if (!(x.value || t !== "x")) {
        var oe = q.value === "month" ? $ : N;
        io(() => {
          oe.value.forwardRef(a), Ye();
        });
      }
    }, se = (oe, be) => {
      var pe = be === "month" ? k : B;
      if (pe.value = v.value ? [oe, oe] : [pe.value[0], oe], v.value = !v.value, v.value) {
        var Se = le(pe.value[0]).isAfter(pe.value[1]), $e = Se ? [pe.value[1], pe.value[0]] : [...pe.value];
        S(e["onUpdate:modelValue"], $e), S(e.onChange, $e);
      }
    }, de = (oe, be) => {
      var pe = be === "month" ? V : C, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-DD", $e = pe.value.map((nr) => le(nr).format(Se)), Re = $e.findIndex((nr) => nr === oe);
      Re === -1 ? $e.push(oe) : $e.splice(Re, 1), S(e["onUpdate:modelValue"], $e), S(e.onChange, $e);
    }, we = (oe, be) => !m.value || !f.value ? !1 : F.value ? oe === "month" ? be.index < f.value.index : te.value ? be < R(h.value) : f.value.index > g.value.index : m.value > y.value, Pe = (oe) => {
      var {
        readonly: be,
        range: pe,
        multiple: Se,
        onChange: $e,
        "onUpdate:modelValue": Re
      } = e;
      if (!(oe < 0 || be)) {
        w.value = we("day", oe);
        var nr = y.value + "-" + g.value.index + "-" + oe, wr = le(nr).format("YYYY-MM-DD");
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
        var Ha = y.value + "-" + oe.index;
        Se ? se(Ha, "month") : $e ? de(Ha, "month") : (S(wr, Ha), S(Re, Ha));
      } else
        g.value = oe, S(nr, R(y.value), R(g.value.index));
      d.value = !1;
    }, ne = (oe) => {
      y.value = "" + oe, u.value = !1, d.value = !0, S(e.onPreview, R(y.value), R(g.value.index));
    }, ue = (oe, be) => {
      var pe = be === "prev" ? -1 : 1;
      if (oe === "year")
        y.value = "" + (R(y.value) + pe);
      else {
        var Se = R(g.value.index) + pe;
        Se < 1 && (y.value = "" + (R(y.value) - 1), Se = 12), Se > 12 && (y.value = "" + (R(y.value) + 1), Se = 1), g.value = jt.find(($e) => R($e.index) === Se);
      }
      S(e.onPreview, R(y.value), R(g.value.index));
    }, me = () => (e.multiple || e.range) && !Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, De = (oe) => Te(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ke = (oe, be) => {
      var pe = be === "month" ? k : B, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = oe.map((wr) => le(wr).format(Se)).slice(0, 2), Re = pe.value.some((wr) => De(wr));
      if (!Re) {
        pe.value = $e;
        var nr = le(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && nr && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, Ge = (oe, be) => {
      var pe = be === "month" ? V : C, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = Array.from(new Set(oe.map((Re) => le(Re).format(Se))));
      pe.value = $e.filter((Re) => Re !== "Invalid Date");
    }, He = (oe) => {
      var be = le(oe).format("YYYY-MM-D");
      if (!De(be)) {
        var [pe, Se, $e] = be.split("-"), Re = jt.find((nr) => nr.index === Se);
        f.value = Re, m.value = pe, h.value = $e, g.value = Re, y.value = pe;
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
    }), ie(q, Ye), {
      n: Uh,
      classes: Fh,
      monthPanelEl: $,
      dayPanelEl: N,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: h,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: I,
      getDateTitle: Y,
      getPanelType: q,
      getChoose: P,
      getPreview: D,
      componentProps: b,
      slotProps: z,
      formatRange: O,
      clickEl: W,
      handleTouchstart: L,
      handleTouchmove: G,
      handleTouchend: ee,
      getChooseDay: Pe,
      getChooseMonth: ur,
      getChooseYear: ne,
      checkPreview: ue,
      formatElevation: hr
    };
  }
});
nd.render = Hh;
const Qn = nd;
Qn.install = function(e) {
  e.component(Qn.name, Qn);
};
var JS = Qn;
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
function Yh(e) {
  return ["left", "center", "right"].includes(e);
}
var jh = ii({
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
    validator: Yh
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
}, Je(Vt, [
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
var {
  n: Wh,
  classes: Gh
} = Q("dialog");
function qh(e, r) {
  var n = ae("var-button"), a = ae("var-popup");
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
          style: li({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: c(e.n("title"))
          },
          [j(e.$slots, "title", {}, () => [Ce(
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
            style: X({
              textAlign: e.messageAlign
            })
          },
          [j(e.$slots, "default", {}, () => [Ce(
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
          [e.cancelButton ? (p(), ye(
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
          )) : _("v-if", !0), e.confirmButton ? (p(), ye(
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
          )) : _("v-if", !0)],
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
var ad = J({
  name: "VarDialog",
  components: {
    VarPopup: Sr,
    VarButton: er
  },
  inheritAttrs: !1,
  props: jh,
  setup(e) {
    var r = M(!1), n = M(!1), a = () => S(e["onUpdate:show"], !1), t = () => {
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
      n: Wh,
      classes: Gh,
      pack: Ze,
      dt: oo,
      popupShow: r,
      popupCloseOnClickOverlay: n,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ge
    };
  }
});
ad.render = qh;
const yn = ad;
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, eo.apply(this, arguments);
}
var ln, ro = {};
function Xh(e) {
  return e === void 0 && (e = {}), Fe(e) ? eo({}, ro, {
    message: e
  }) : eo({}, ro, e);
}
function Qr(e) {
  return tt() ? new Promise((r) => {
    Qr.close();
    var n = Xh(e), a = Ae(n);
    a.teleport = "body", ln = a;
    var {
      unmountInstance: t
    } = ot(yn, a, {
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
  ro = e;
};
Qr.resetDefaultOptions = function() {
  ro = {};
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
var QS = yn, Kh = {
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
function Ka() {
  return Ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ka.apply(this, arguments);
}
var {
  n: Zh,
  classes: Jh
} = Q("divider");
function Qh(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: X(e.style)
    },
    [j(e.$slots, "default", {}, () => [e.description ? (p(), T(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var td = J({
  name: "VarDivider",
  props: Kh,
  setup(e, r) {
    var {
      slots: n
    } = r, a = Ae({
      withText: !1
    }), t = U(() => Bo(e.inset) ? e.inset : !0), o = U(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Bo(i) || i === 0)
        return Ka({}, d);
      var v = R(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Ka({}, d, {
        height: "calc(80% - " + ge(f) + ")"
      }) : Ka({}, d, {
        width: "calc(100% - " + ge(f) + ")",
        left: v > 0 ? ge(f) : ge(0)
      });
    }), l = () => {
      a.withText = !!n.default || !!e.description;
    };
    return ir(() => {
      l();
    }), Tt(() => {
      l();
    }), Ka({
      n: Zh,
      classes: Jh
    }, Fv(a), {
      style: o,
      isInset: t
    });
  }
});
td.render = Qh;
const _n = td;
_n.install = function(e) {
  e.component(_n.name, _n);
};
var _S = _n, _h = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return _h[r];
  });
}
var Yr = "top", Vn = "bottom", Aa = "right", bn = "left", go = "auto", yo = [Yr, Vn, Aa, bn], bo = "start", bt = "end", xh = "clippingParents", od = "viewport", it = "popper", eg = "reference", Ol = /* @__PURE__ */ yo.reduce(function(e, r) {
  return e.concat([r + "-" + bo, r + "-" + bt]);
}, []), id = /* @__PURE__ */ [].concat(yo, [go]).reduce(function(e, r) {
  return e.concat([r, r + "-" + bo, r + "-" + bt]);
}, []), rg = "beforeRead", ng = "read", ag = "afterRead", tg = "beforeMain", og = "main", ig = "afterMain", lg = "beforeWrite", sg = "write", ug = "afterWrite", si = [rg, ng, ag, tg, og, ig, lg, sg, ug];
function jr(e) {
  return e.split("-")[0];
}
var dg = {
  start: "end",
  end: "start"
};
function Pl(e) {
  return e.replace(/start|end/g, function(r) {
    return dg[r];
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
function Ri(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function En(e) {
  return ((za(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var vt = Math.max, Vl = Math.min, _a = Math.round;
function ui() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function ld() {
  return !/^((?!chrome|android).)*safari/i.test(ui());
}
function xa(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && _a(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && _a(a.height) / e.offsetHeight || 1);
  var l = za(e) ? Mr(e) : window, i = l.visualViewport, s = !ld() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Ui(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Fi(e) {
  return xa(En(e)).left + Ui(e).scrollLeft;
}
function vg(e, r) {
  var n = Mr(e), a = En(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = ld();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Fi(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function fg(e) {
  var r, n = En(e), a = Ui(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = vt(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = vt(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Fi(e), s = -a.scrollTop;
  return Ar(t || n).direction === "rtl" && (i += vt(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Fr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wo(e) {
  return Fr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ri(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    En(e)
  );
}
function Hi(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function sd(e) {
  return ["html", "body", "#document"].indexOf(Fr(e)) >= 0 ? e.ownerDocument.body : kr(e) && Hi(e) ? e : sd(wo(e));
}
function ft(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = sd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], Hi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ft(wo(l)))
  );
}
function cg(e) {
  return ["table", "td", "th"].indexOf(Fr(e)) >= 0;
}
function Ml(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function mg(e) {
  var r = /firefox/i.test(ui()), n = /Trident/i.test(ui());
  if (n && kr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = wo(e);
  for (Ri(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Fr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Yi(e) {
  for (var r = Mr(e), n = Ml(e); n && cg(n) && Ar(n).position === "static"; )
    n = Ml(n);
  return n && (Fr(n) === "html" || Fr(n) === "body" && Ar(n).position === "static") ? r : n || mg(e) || r;
}
function pg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Ri(n)) {
    var a = r;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function di(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function hg(e, r) {
  var n = xa(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Bl(e, r, n) {
  return r === od ? di(vg(e, n)) : za(r) ? hg(r, n) : di(fg(En(e)));
}
function gg(e) {
  var r = ft(wo(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && kr(e) ? Yi(e) : e;
  return za(a) ? r.filter(function(t) {
    return za(t) && pg(t, a) && Fr(t) !== "body";
  }) : [];
}
function yg(e, r, n, a) {
  var t = r === "clippingParents" ? gg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Bl(e, u, a);
    return s.top = vt(d.top, s.top), s.right = Vl(d.right, s.right), s.bottom = Vl(d.bottom, s.bottom), s.left = vt(d.left, s.left), s;
  }, Bl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function wt(e) {
  return e.split("-")[1];
}
function bg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ud(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? jr(a) : null, o = a ? wt(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
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
  var u = t ? bg(t) : null;
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
function wg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Cg(e) {
  return Object.assign({}, wg(), e);
}
function Sg(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function dd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? xh : i, u = n.rootBoundary, d = u === void 0 ? od : u, v = n.elementContext, f = v === void 0 ? it : v, m = n.altBoundary, h = m === void 0 ? !1 : m, g = n.padding, y = g === void 0 ? 0 : g, w = Cg(typeof y != "number" ? y : Sg(y, yo)), V = f === it ? eg : it, C = e.rects.popper, k = e.elements[h ? V : f], B = yg(za(k) ? k : k.contextElement || En(e.elements.popper), s, d, l), $ = xa(e.elements.reference), N = ud({
    reference: $,
    element: C,
    strategy: "absolute",
    placement: t
  }), b = di(Object.assign({}, C, N)), P = f === it ? b : $, D = {
    top: B.top - P.top + w.top,
    bottom: P.bottom - B.bottom + w.bottom,
    left: B.left - P.left + w.left,
    right: P.right - B.right + w.right
  }, I = e.modifiersData.offset;
  if (f === it && I) {
    var Y = I[t];
    Object.keys(D).forEach(function(q) {
      var x = [Aa, Vn].indexOf(q) >= 0 ? 1 : -1, z = [Yr, Vn].indexOf(q) >= 0 ? "y" : "x";
      D[q] += Y[z] * x;
    });
  }
  return D;
}
function kg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? id : s, d = wt(a), v = d ? i ? Ol : Ol.filter(function(h) {
    return wt(h) === d;
  }) : yo, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(h, g) {
    return h[g] = dd(e, {
      placement: g,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[jr(g)], h;
  }, {});
  return Object.keys(m).sort(function(h, g) {
    return m[h] - m[g];
  });
}
function $g(e) {
  if (jr(e) === go)
    return [];
  var r = Wt(e);
  return [Pl(e), r, Pl(r)];
}
function Tg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, h = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, y = r.options.placement, w = jr(y), V = w === y, C = s || (V || !h ? [Wt(y)] : $g(y)), k = [y].concat(C).reduce(function(se, de) {
      return se.concat(jr(de) === go ? kg(r, {
        placement: de,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : de);
    }, []), B = r.rects.reference, $ = r.rects.popper, N = /* @__PURE__ */ new Map(), b = !0, P = k[0], D = 0; D < k.length; D++) {
      var I = k[D], Y = jr(I), q = wt(I) === bo, x = [Yr, Vn].indexOf(Y) >= 0, z = x ? "width" : "height", O = dd(r, {
        placement: I,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), F = x ? q ? Aa : bn : q ? Vn : Yr;
      B[z] > $[z] && (F = Wt(F));
      var te = Wt(F), W = [];
      if (o && W.push(O[Y] <= 0), i && W.push(O[F] <= 0, O[te] <= 0), W.every(function(se) {
        return se;
      })) {
        P = I, b = !1;
        break;
      }
      N.set(I, W);
    }
    if (b)
      for (var L = h ? 3 : 1, E = function(de) {
        var we = k.find(function(Pe) {
          var ur = N.get(Pe);
          if (ur)
            return ur.slice(0, de).every(function(ne) {
              return ne;
            });
        });
        if (we)
          return P = we, "break";
      }, G = L; G > 0; G--) {
        var ee = E(G);
        if (ee === "break")
          break;
      }
    r.placement !== P && (r.modifiersData[a]._skip = !0, r.placement = P, r.reset = !0);
  }
}
const Og = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Tg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Pg(e, r, n) {
  var a = jr(e), t = [bn, Yr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
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
function Vg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = id.reduce(function(d, v) {
    return d[v] = Pg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Mg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vg
};
function Bg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Eg(e) {
  return e === Mr(e) || !kr(e) ? Ui(e) : Bg(e);
}
function Ig(e) {
  var r = e.getBoundingClientRect(), n = _a(r.width) / e.offsetWidth || 1, a = _a(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function Ng(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Ig(r), o = En(r), l = xa(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Fr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Hi(o)) && (i = Eg(r)), kr(r) ? (s = xa(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = Fi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Dg(e) {
  var r = xa(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function Ag(e) {
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
function zg(e) {
  var r = Ag(e);
  return si.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Lg(e) {
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
var In = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Rg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', El = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ug(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), El).filter(function(n, a, t) {
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
          si.indexOf(r.phase) < 0 && console.error(rn(In, r.name, '"phase"', "either " + si.join(", "), '"' + String(r.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + El.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(rn(Rg, String(r.name), a, a));
      });
    });
  });
}
function Fg(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function Hg(e) {
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
var Il = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Yg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Nl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Dl() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function jg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Nl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Nl, o),
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
          reference: za(i) ? ft(i) : i.contextElement ? ft(i.contextElement) : [],
          popper: ft(s)
        };
        var C = zg(Hg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = C.filter(function(I) {
          return I.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = Fg([].concat(C, d.options.modifiers), function(I) {
            var Y = I.name;
            return Y;
          });
          if (Ug(k), jr(d.options.placement) === go) {
            var B = d.orderedModifiers.find(function(I) {
              var Y = I.name;
              return Y === "flip";
            });
            B || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var $ = Ar(s), N = $.marginTop, b = $.marginRight, P = $.marginBottom, D = $.marginLeft;
          [N, b, P, D].some(function(I) {
            return parseFloat(I);
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
          var w = d.elements, V = w.reference, C = w.popper;
          if (!Dl(V, C)) {
            process.env.NODE_ENV !== "production" && console.error(Il);
            return;
          }
          d.rects = {
            reference: Ng(V, Yi(C), d.options.strategy === "fixed"),
            popper: Dg(C)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(I) {
            return d.modifiersData[I.name] = Object.assign({}, I.data);
          });
          for (var k = 0, B = 0; B < d.orderedModifiers.length; B++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(Yg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, B = -1;
              continue;
            }
            var $ = d.orderedModifiers[B], N = $.fn, b = $.options, P = b === void 0 ? {} : b, D = $.name;
            typeof N == "function" && (d = N({
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
      update: Lg(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Dl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Il), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function h() {
      d.orderedModifiers.forEach(function(y) {
        var w = y.name, V = y.options, C = V === void 0 ? {} : V, k = y.effect;
        if (typeof k == "function") {
          var B = k({
            state: d,
            name: w,
            instance: m,
            options: C
          }), $ = function() {
          };
          v.push(B || $);
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
var Lt = {
  passive: !0
};
function Wg(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Lt);
  }), i && s.addEventListener("resize", n.update, Lt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Lt);
    }), i && s.removeEventListener("resize", n.update, Lt);
  };
}
const Gg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Wg,
  data: {}
};
function qg(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = ud({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const Xg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qg,
  data: {}
};
var Kg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Zg(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: _a(r * t) / t || 0,
    y: _a(n * t) / t || 0
  };
}
function Al(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, h = l.y, g = h === void 0 ? 0 : h, y = typeof d == "function" ? d({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = y.x, g = y.y;
  var w = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), C = bn, k = Yr, B = window;
  if (u) {
    var $ = Yi(n), N = "clientHeight", b = "clientWidth";
    if ($ === Mr(n) && ($ = En(n), Ar($).position !== "static" && i === "absolute" && (N = "scrollHeight", b = "scrollWidth")), $ = $, t === Yr || (t === bn || t === Aa) && o === bt) {
      k = Vn;
      var P = v && $ === B && B.visualViewport ? B.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[N]
      );
      g -= P - a.height, g *= s ? 1 : -1;
    }
    if (t === bn || (t === Yr || t === Vn) && o === bt) {
      C = Aa;
      var D = v && $ === B && B.visualViewport ? B.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[b]
      );
      m -= D - a.width, m *= s ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: i
  }, u && Kg), Y = d === !0 ? Zg({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = Y.x, g = Y.y, s) {
    var q;
    return Object.assign({}, I, (q = {}, q[k] = V ? "0" : "", q[C] = w ? "0" : "", q.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", q));
  }
  return Object.assign({}, I, (r = {}, r[k] = V ? g + "px" : "", r[C] = w ? m + "px" : "", r.transform = "", r));
}
function Jg(e) {
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
    variation: wt(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Al(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Al(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const Qg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Jg,
  data: {}
};
function _g(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !kr(o) || !Fr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function xg(e) {
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
const ey = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _g,
  effect: xg,
  requires: ["computeStyles"]
};
var ry = [Gg, Xg, Qg, ey], ny = /* @__PURE__ */ jg({
  defaultModifiers: ry
});
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, no.apply(this, arguments);
}
function zl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ll(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        zl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        zl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function vd(e) {
  var r = M(null), n = M(null), a = M({
    width: 0,
    height: 0
  }), t = Ms(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit($, N) {
      N ? (C(), S(e.onOpen)) : S(e.onClose);
    }
  }), {
    zIndex: o
  } = Mt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: $,
      height: N
    } = Da(r.value);
    a.value = {
      width: je($),
      height: je(N)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, k());
  }, v = /* @__PURE__ */ function() {
    var $ = Ll(function* () {
      e.trigger === "hover" && (s = !1, yield Lr(), !i && B());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var $ = Ll(function* () {
      e.trigger === "hover" && (i = !1, yield Lr(), !s && B());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), h = () => {
    k();
  }, g = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  }, y = () => {
    e.trigger === "click" && g();
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
  }, V = () => {
    var {
      placement: $,
      skidding: N,
      distance: b
    } = w(), P = [no({}, Og, {
      enabled: t.value
    }), no({}, Mg, {
      options: {
        offset: [N, b]
      }
    })];
    return {
      placement: $,
      modifiers: P
    };
  }, C = () => {
    l.setOptions(V());
  }, k = () => {
    var {
      disabled: $
    } = e;
    $ || (t.value = !0, S(e["onUpdate:show"], !0));
  }, B = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  };
  return Ps(r, "click", y), ie(() => e.offsetX, C), ie(() => e.offsetY, C), ie(() => e.placement, C), ie(() => e.disabled, B), ao(() => {
    var $, N = e.reference ? ($ = r.value) == null ? void 0 : $.querySelector(e.reference) : r.value;
    l = ny(N ?? r.value, n.value, V());
  }), nt(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: h,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: g,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: C,
    open: k,
    close: B
  };
}
function ay(e) {
  return ["click", "hover"].includes(e);
}
function ty(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function oy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var iy = {
  type: {
    type: String,
    default: "default",
    validator: oy
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
    validator: ay
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ty
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
  n: ly,
  classes: sy
} = Q("tooltip");
function uy(e, r) {
  return p(), T(
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
    [j(e.$slots, "default"), (p(), ye(
      Ra,
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
              style: X({
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
                style: X({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [j(e.$slots, "content", {}, () => [Ce(
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
var fd = J({
  name: "VarTooltip",
  props: iy,
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
      resize: h
    } = vd(e);
    return {
      toSizeUnit: ge,
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ly,
      classes: sy,
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
fd.render = uy;
const wn = fd;
wn.install = function(e) {
  e.component(wn.name, wn);
};
var xS = wn;
function dy(e) {
  return ["click"].includes(e);
}
var vy = {
  expandTrigger: {
    type: String,
    validator: dy
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
var {
  n: fy,
  classes: cy
} = Q("ellipsis"), my = {
  key: 0
};
function py(e, r) {
  var n = ae("var-tooltip");
  return p(), ye(
    n,
    Ot(to(e.tooltip)),
    {
      content: ve(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), T(
          "span",
          my,
          re(e.tooltip.content),
          1
          /* TEXT */
        )) : j(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [A(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: X(e.rootStyles),
          onClick: r[0] || (r[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [j(e.$slots, "default")],
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
var cd = J({
  name: "VarEllipsis",
  components: {
    VarTooltip: wn
  },
  props: vy,
  setup(e) {
    var r = M(!1), n = U(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = U(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : vi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: fy,
      classes: cy,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
cd.render = py;
const xn = cd;
xn.install = function(e) {
  e.component(xn.name, xn);
};
var ek = xn;
function hy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function gy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function yy(e) {
  return ["click", "hover"].includes(e);
}
var by = {
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
    validator: iu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: hy
  },
  direction: {
    type: String,
    default: "top",
    validator: gy
  },
  trigger: {
    type: String,
    default: "click",
    validator: yy
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
function Rl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  classes: Ul,
  n: dr
} = Q("fab");
const ea = J({
  name: "VarFab",
  inheritAttrs: !1,
  props: by,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = Ms(e, "active"), o = M(null), {
      disabled: l
    } = lo(), i = (f, m, h) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (h === 0) {
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
    }) : null : ke(Z(er, {
      "var-fab-cover": !0,
      class: dr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Z(Oe, {
        "var-fab-cover": !0,
        class: Ul([t.value, dr("trigger-active-icon"), dr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: dr("--trigger-icon-animation")
      }, null)]
    }), [[$n, e.show]]), v = () => {
      var f, m, h = Vs((m = n.default == null ? void 0 : n.default()) != null ? m : []);
      return Z("div", Ee({
        class: Ul(dr(), dr("--position-" + e.position), dr("--direction-" + e.direction), [e.fixed, dr("--fixed"), dr("--absolute")], [e.safeArea, dr("--safe-area")]),
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
        name: dr("--active-transition")
      }, Rl(f = d()) ? f : {
        default: () => [f]
      }), Z(Le, {
        name: dr("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Z("div", {
          class: dr("actions"),
          onClick: (g) => g.stopPropagation()
        }, [h.map((g) => Z("div", {
          class: dr("action")
        }, [g]))]), [[$n, e.show && t.value && h.length]])]
      })]);
    };
    return ie(() => e.trigger, () => {
      t.value = !1;
    }), ie(() => e.disabled, () => {
      t.value = !1;
    }), Ps(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Z(Ra, {
          to: f,
          disabled: l.value
        }, Rl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var rk = ea;
function wy(e) {
  return ["start", "end"].includes(e);
}
var Cy = {
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
    validator: wy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
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
function Sy(e) {
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
var {
  n: ky
} = Q("form");
function $y(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var md = J({
  name: "VarForm",
  props: Cy,
  setup(e) {
    var r = U(() => e.disabled), n = U(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Im(), o = (d) => {
      setTimeout(() => {
        var v = Tn(d), f = v === window ? 0 : al(v), m = al(d) - f - je(e.scrollToErrorOffsetY);
        ht(v, {
          top: m,
          animation: Eo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Sy(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: w
          } = y;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = Gv(v, (y) => y === !1, e.scrollToError), m = f > -1;
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
      disabled: r,
      readonly: n
    };
    return t(u), {
      n: ky,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
md.render = $y;
const Wr = md;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
Wr.useValidation = Pr;
Wr.useForm = Vr;
var nk = Wr;
function Ty(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Oy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ty,
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
  n: Py,
  classes: Vy
} = Q("image"), My = ["alt", "title", "lazy-error", "lazy-loading"], By = ["alt", "title", "src"];
function Ey(e, r) {
  var n = Ie("lazy"), a = Ie("ripple");
  return ke((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((p(), T(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: X({
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
      My
    )), [[n, e.src]]) : (p(), T(
      "img",
      {
        key: 1,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: X({
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
      By
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var pd = J({
  name: "VarImage",
  directives: {
    Lazy: gt,
    Ripple: We
  },
  props: Oy,
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
      n: Py,
      classes: Vy,
      toSizeUnit: ge,
      handleLoad: r,
      handleError: n,
      handleClick: a
    };
  }
});
pd.render = Ey;
const ra = pd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ak = ra, hd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Iy() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = sr(hd);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var gd = {
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
function Hl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ny(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Hl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Hl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var Dy = 250, Ay = 20, {
  n: zy,
  classes: Ly
} = Q("swipe"), Ry = ["onClick"];
function Uy(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: X({
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
      [j(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), j(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), T(
        Ve,
        null,
        Ue(e.length, (n, a) => (p(), T(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: X({
              background: e.indicatorColor
            }),
            key: n,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Ry
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)])],
    2
    /* CLASS */
  );
}
var yd = J({
  name: "VarSwipe",
  props: gd,
  setup(e) {
    var r = M(null), n = M(0), a = U(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Iy(), v = !1, f = !1, m = -1, h, g, y, w, V, C = (E) => s.find((G) => {
      var {
        index: ee
      } = G;
      return ee.value === E;
    }), k = () => {
      e.loop && (o.value >= 0 && C(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && C(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (C(d.value - 1).setTranslate(0), C(0).setTranslate(0)));
    }, B = (E) => {
      var G = or(E) ? E : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: ee
      } = e;
      return G <= -1 ? ee ? -1 : 0 : G >= d.value ? ee ? d.value : d.value - 1 : G;
    }, $ = (E) => {
      var {
        loop: G
      } = e;
      return E === -1 ? G ? d.value - 1 : 0 : E === d.value ? G ? 0 : d.value - 1 : E;
    }, N = (E) => {
      var {
        loop: G
      } = e;
      return E < 0 ? G ? d.value - 1 : 0 : E > d.value - 1 ? G ? 0 : d.value - 1 : E;
    }, b = (E) => {
      var G = o.value >= n.value, ee = o.value <= -t.value, se = 0, de = -(t.value - n.value);
      l.value = !0, (G || ee) && (l.value = !0, o.value = ee ? se : de, C(0).setTranslate(0), C(d.value - 1).setTranslate(0)), io(() => {
        l.value = !1, S(E);
      });
    }, P = () => {
      v || (i.value = N(R(e.initialIndex)), v = !0);
    }, D = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (I(), m = window.setTimeout(() => {
        F(), D();
      }, R(E)));
    }, I = () => {
      m && clearTimeout(m);
    }, Y = (E, G) => {
      if (E > G && E > 10)
        return "horizontal";
      if (G > E && G > 10)
        return "vertical";
    }, q = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: G,
          clientY: ee
        } = E.touches[0];
        h = G, g = ee, y = performance.now(), f = !0, I(), b(() => {
          l.value = !0;
        });
      }
    }, x = (E) => {
      var {
        touchable: G,
        vertical: ee
      } = e;
      if (!(!f || !G)) {
        var {
          clientX: se,
          clientY: de
        } = E.touches[0], we = Math.abs(se - h), Pe = Math.abs(de - g), ur = Y(we, Pe), ne = ee ? "vertical" : "horizontal";
        if (ur === ne) {
          E.preventDefault();
          var ue = w !== void 0 ? se - w : 0, me = V !== void 0 ? de - V : 0;
          w = se, V = de, o.value += ee ? me : ue, k();
        }
      }
    }, z = () => {
      if (f) {
        var {
          vertical: E,
          onChange: G
        } = e, ee = E ? V < g : w < h, se = Math.abs(E ? g - V : h - w), de = performance.now() - y <= Dy && se >= Ay, we = de ? B(ee ? i.value + 1 : i.value - 1) : B();
        f = !1, l.value = !1, w = void 0, V = void 0, o.value = we * -n.value;
        var Pe = i.value;
        i.value = $(we), D(), Pe !== i.value && S(G, i.value);
      }
    }, O = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((E) => {
        E.setTranslate(0);
      }), D(), setTimeout(() => {
        l.value = !1;
      }));
    }, F = (E) => {
      if (!(d.value <= 1)) {
        P();
        var {
          loop: G,
          onChange: ee
        } = e, se = i.value;
        i.value = N(se + 1), (E == null ? void 0 : E.event) !== !1 && S(ee, i.value), b(() => {
          if (se === d.value - 1 && G) {
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
          loop: G,
          onChange: ee
        } = e, se = i.value;
        i.value = N(se - 1), (E == null ? void 0 : E.event) !== !1 && S(ee, i.value), b(() => {
          if (se === 0 && G) {
            C(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          se !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, W = (E, G) => {
      if (!(d.value <= 1 || E === i.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var ee = E > i.value ? F : te, se = Math.abs(E - i.value);
        Array.from({
          length: se
        }).forEach((de, we) => {
          ee({
            event: we === se - 1 ? G == null ? void 0 : G.event : !1
          });
        });
      }
    }, L = {
      size: n,
      vertical: a
    };
    return u(L), ie(() => d.value, /* @__PURE__ */ Ny(function* () {
      yield Lr(), P(), O();
    })), Mn(O), xr(I), nt(I), Zr(() => window, "resize", O), {
      n: zy,
      classes: Ly,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: q,
      handleTouchmove: x,
      handleTouchend: z,
      next: F,
      prev: te,
      to: W,
      resize: O,
      toNumber: R
    };
  }
});
yd.render = Uy;
const Gr = yd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var tk = Gr;
function Fy() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = lr(hd);
  return e || Or("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Hy
} = Q("swipe-item");
function Yy(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      style: X({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var bd = J({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = Fy(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: Hy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
bd.render = Yy;
const qr = bd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var ok = qr;
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
var jy = fi({
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
}, Je(gd, ["loop", "indicator", "onChange"]), Je(Vt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Yl,
  classes: Wy
} = Q("image-preview"), jl = 12, Wl = 200, Gy = 350, Gl = 200, qy = ["src", "alt"];
function Xy(e, r) {
  var n = ae("var-swipe-item"), a = ae("var-swipe"), t = ae("var-icon"), o = ae("var-popup");
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
          default: ve(() => [(p(!0), T(
            Ve,
            null,
            Ue(e.images, (l) => (p(), ye(
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
                    style: X({
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
                    qy
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
            return [j(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (p(), T(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              re(i + 1) + " / " + re(s),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), j(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), ye(
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
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("extra"))
        },
        [j(e.$slots, "extra")],
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
var wd = J({
  name: "VarImagePreview",
  components: {
    VarSwipe: Gr,
    VarSwipeItem: qr,
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: jy,
  setup(e) {
    var r = M(!1), n = U(() => {
      var {
        images: D,
        current: I
      } = e, Y = D.findIndex((q) => q === I);
      return Y >= 0 ? Y : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, v = null, f = (D, I) => {
      var {
        clientX: Y,
        clientY: q
      } = D, {
        clientX: x,
        clientY: z
      } = I;
      return Math.abs(Math.sqrt(Math.pow(x - Y, 2) + Math.pow(z - q, 2)));
    }, m = (D, I) => ({
      clientX: D.clientX,
      clientY: D.clientY,
      timestamp: performance.now(),
      target: I
    }), h = () => {
      a.value = R(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Gl);
    }, g = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, y = (D) => d ? f(d, D) <= jl && D.timestamp - d.timestamp <= Wl && d.target === D.target : !1, w = (D) => !D || !u || !d ? !1 : f(u, d) <= jl && performance.now() - d.timestamp < Gy && (D === u.target || D.parentNode === u.target), V = (D) => {
      var I = w(D.target);
      v = window.setTimeout(() => {
        I && P(), u = null;
      }, Wl);
    }, C = (D) => {
      v && window.clearTimeout(v);
      var I = m(D.touches[0], D.currentTarget);
      if (u = I, y(I)) {
        a.value > 1 ? g() : h();
        return;
      }
      d = I;
    }, k = (D) => {
      var {
        offsetWidth: I,
        offsetHeight: Y
      } = D, {
        naturalWidth: q,
        naturalHeight: x
      } = D.querySelector("." + Yl("image"));
      return {
        width: I,
        height: Y,
        imageRadio: x / q,
        rootRadio: Y / I,
        zoom: R(e.zoom)
      };
    }, B = (D) => {
      var {
        zoom: I,
        imageRadio: Y,
        rootRadio: q,
        width: x,
        height: z
      } = k(D);
      if (!Y)
        return 0;
      var O = Y > q ? z / Y : x;
      return Math.max(0, (I * O - x) / 2) / I;
    }, $ = (D) => {
      var {
        zoom: I,
        imageRadio: Y,
        rootRadio: q,
        width: x,
        height: z
      } = k(D);
      if (!Y)
        return 0;
      var O = Y > q ? z : x * Y;
      return Math.max(0, (I * O - z) / 2) / I;
    }, N = (D, I, Y) => D + I >= Y ? Y : D + I <= -Y ? -Y : D + I, b = (D) => {
      if (d) {
        var I = D.currentTarget, Y = m(D.touches[0], I);
        if (a.value > 1) {
          var q = Y.clientX - d.clientX, x = Y.clientY - d.clientY, z = B(I), O = $(I);
          t.value = N(t.value, q, z), o.value = N(o.value, x, O);
        }
        d = Y;
      }
    }, P = () => {
      if (a.value > 1) {
        g(), setTimeout(() => S(e["onUpdate:show"], !1), Gl);
        return;
      }
      S(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (D) => {
      r.value = D;
    }, {
      immediate: !0
    }), {
      n: Yl,
      classes: Wy,
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
      handleTouchend: V,
      close: P
    };
  }
});
wd.render = Xy;
const Cn = wd;
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
var sn, mt = {};
function Ky(e) {
  return e === void 0 && (e = {}), Fe(e) ? ct({}, mt, {
    images: [e]
  }) : Te(e) ? ct({}, mt, {
    images: e
  }) : ct({}, mt, e);
}
function zr(e) {
  if (tt()) {
    zr.close();
    var r = Ky(e), n = Ae(r);
    n.teleport = "body", sn = n;
    var {
      unmountInstance: a
    } = ot(Cn, n, {
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
var ik = Cn, Gt = {
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
function ql(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Xl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ql(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ql(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Zy,
  classes: Jy
} = Q("sticky");
function Qy(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: X({
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
        style: X({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [j(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var Cd = J({
  name: "VarSticky",
  props: Gt,
  setup(e) {
    var r = M(null), n = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = U(() => !e.disabled && e.cssMode), v = U(() => !e.disabled && !e.cssMode && a.value), f = U(() => je(e.offsetTop)), m, h = () => {
      var {
        cssMode: C,
        disabled: k
      } = e;
      if (!k) {
        var B = 0;
        if (m !== window) {
          var {
            top: $
          } = m.getBoundingClientRect();
          B = $;
        }
        var N = n.value, b = r.value, {
          top: P,
          left: D
        } = b.getBoundingClientRect(), I = P - B;
        return I <= f.value ? (C || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = B + f.value + "px", o.value = D + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: I,
          isFixed: !1
        });
      }
    }, g = () => {
      if (m) {
        var C = h();
        C && S(e.onScroll, C.offsetTop, C.isFixed);
      }
    }, y = /* @__PURE__ */ function() {
      var C = Xl(function* () {
        a.value = !1, yield rf(), h();
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var C = Xl(function* () {
        yield Lr(), m = Tn(r.value), m !== window && m.addEventListener("scroll", g), g();
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", g);
    };
    return ie(() => e.disabled, y), ir(w), nt(V), xr(V), Zr(() => window, "scroll", g), Zr(() => window, "resize", y), {
      n: Zy,
      classes: Jy,
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
Cd.render = Qy;
const Xr = Cd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var lk = Xr, Sd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function _y() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = sr(Sd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function xy() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(Sd);
  return n || Or("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var eb = {
  index: {
    type: [Number, String]
  }
}, {
  n: rb,
  classes: nb
} = Q("index-anchor");
function ab(e, r) {
  return p(), ye(
    at(e.sticky ? e.n("$-sticky") : e.Transition),
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
        [j(e.$slots, "default", {}, () => [Ce(
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
var kd = J({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Xr
  },
  inheritAttrs: !1,
  props: eb,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = xy(), t = M(0), o = M(!1), l = U(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, h = (y) => {
      o.value = y;
    }, g = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: h
    };
    return a(g), {
      n: rb,
      classes: nb,
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
kd.render = ab;
const na = kd;
na.install = function(e) {
  e.component(na.name, na);
};
var sk = na, tb = {
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
function Kl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Rt(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Kl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Kl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ob,
  classes: ib
} = Q("index-bar"), lb = ["onClick"];
function sb(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [j(e.$slots, "default"), A(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: X({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), T(
        Ve,
        null,
        Ue(e.anchorNameList, (n) => (p(), T(
          "li",
          {
            key: n,
            class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
            style: X({
              color: e.active === n && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: n,
              manualCall: !0
            })
          },
          re(n),
          15,
          lb
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
var $d = J({
  name: "VarIndexBar",
  props: tb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = _y(), t = M(""), o = M(null), l = M([]), i = M(), s = U(() => e.sticky), u = U(() => e.stickyCssMode || e.cssMode), d = U(() => je(e.stickyOffsetTop)), v = U(() => e.zIndex), f = null, m = !1, h = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(h);
    var g = (N, b) => {
      var P = Si(N) ? N.name.value : N;
      P === i.value || P === void 0 || (i.value = P, (b == null ? void 0 : b.event) !== !1 && S(e.onChange, P));
    }, y = () => {
      if (ki(f))
        return 0;
      var {
        top: N
      } = mr(f), {
        scrollTop: b
      } = f, {
        top: P
      } = mr(o.value);
      return b - N + P;
    }, w = () => {
      var N = pt(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, P = y();
      n.forEach((D, I) => {
        var Y = D.ownTop.value, q = N - Y + d.value - P, x = I === n.length - 1 ? b : n[I + 1].ownTop.value - D.ownTop.value;
        D.setDisabled(!0), q >= 0 && q < x && t.value === "" && (D.setDisabled(!1), g(D));
      });
    }, V = /* @__PURE__ */ function() {
      var N = Rt(function* (b) {
        var {
          anchorName: P,
          manualCall: D = !1,
          options: I
        } = b;
        if (D && S(e.onClick, P), !(P === i.value && !m)) {
          var Y = n.find((O) => {
            var {
              name: F
            } = O;
            return P === F.value;
          });
          if (Y) {
            var q = y(), x = Y.ownTop.value - d.value + q, z = Ti(f);
            t.value = P, g(P, I), yield ht(f, {
              left: z,
              top: x,
              animation: ys,
              duration: R(e.duration)
            }), io(() => {
              t.value = "";
            });
          }
        }
      });
      return function(P) {
        return N.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var N = Rt(function* () {
        yield Lr(), f = Tn(o.value);
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), k = () => {
      f.addEventListener("scroll", w);
    }, B = () => {
      f.removeEventListener("scroll", w);
    }, $ = (N, b) => {
      br(() => V({
        anchorName: N,
        options: b
      }));
    };
    return ie(() => r.value, /* @__PURE__ */ Rt(function* () {
      yield Lr(), n.forEach((N) => {
        var {
          name: b,
          setOwnTop: P
        } = N;
        b.value && l.value.push(b.value), P();
      });
    })), ir(/* @__PURE__ */ Rt(function* () {
      yield C(), k();
    })), kt(B), xr(() => {
      m = !0, B();
    }), Mn(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: ob,
      classes: ib,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: R,
      scrollTo: $,
      anchorClick: V
    };
  }
});
$d.render = sb;
const aa = $d;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var uk = aa;
function ub(e) {
  return ["small", "normal"].includes(e);
}
function db(e) {
  return ["outlined", "standard"].includes(e);
}
var ji = {
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
    validator: ub
  },
  variant: {
    type: String,
    default: "standard",
    validator: db
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
  n: Zl,
  classes: vb
} = Q("field-decorator"), fb = ["for"];
function cb(e, r) {
  var n = ae("var-icon");
  return p(), T(
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
        style: X({
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
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          ref: "middleEl",
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      ), (e.hint || e.alwaysCustomPlaceholder) && e.placeholderTransform ? (p(), T(
        "label",
        {
          key: 0,
          class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
          style: X({
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
        fb
      )) : _("v-if", !0), e.variant === "outlined" ? (p(), T(
        "span",
        {
          key: 1,
          ref: "placeholderTextEl",
          class: c([e.n("placeholder-text"), e.n("$--ellipsis")])
        },
        re(e.placeholder),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), ye(
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
        )) : _("v-if", !0), j(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), T(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), T(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: X({
            borderColor: e.color
          })
        },
        [A(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: X({
              width: e.legendWidth
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (p(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: X({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
            style: X({
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Td = J({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Oe
  },
  props: ji,
  setup(e) {
    var r = M(null), n = M(null), a = M(null), t = M(""), o = M(""), l = M(""), i = U(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), s = U(() => e.hint && (!fn(e.value) || e.isFocus)), u = () => {
      var {
        hint: m,
        value: h,
        composing: g
      } = e;
      if (!m && (!fn(h) || g))
        return Zl("--placeholder-hidden");
    }, d = () => {
      var {
        size: m,
        hint: h,
        placeholder: g,
        variant: y
      } = e;
      if (!s.value || !g) {
        var w = mr(r.value), V = mr(n.value), C = V.left - w.left + "px";
        o.value = h ? "translate(" + C + ", calc(var(--field-decorator-" + y + "-" + m + "-placeholder-translate-y) + var(--field-decorator-middle-offset-y))) scale(1)" : "translate(" + C + ", -50%)", l.value = V.width + "px";
        return;
      }
      var k = Da(r.value), B = y === "outlined" ? "-50%" : "0";
      if (o.value = "translate(" + k.paddingLeft + ", " + B + ") scale(0.75)", y === "outlined") {
        var $ = Da(a.value), N = "var(--field-decorator-outlined-" + m + "-placeholder-space)";
        t.value = "calc(" + $.width + " * 0.75 + " + N + " * 2)", l.value = "calc((100% - var(--field-decorator-outlined-" + m + "-padding-left) - var(--field-decorator-outlined-" + m + "-padding-right)) * 1.33)";
      } else
        l.value = "133%";
    }, v = (m) => {
      S(e.onClear, m);
    }, f = (m) => {
      S(e.onClick, m);
    };
    return Tt(d), ir(d), Zr(() => window, "resize", d), {
      controllerEl: r,
      middleEl: n,
      placeholderTextEl: a,
      placeholderTransform: o,
      placeholderMaxWidth: l,
      color: i,
      legendWidth: t,
      isFloating: s,
      computePlaceholderState: u,
      n: Zl,
      classes: vb,
      isEmpty: fn,
      handleClear: v,
      handleClick: f
    };
  }
});
Td.render = cb;
const Od = Td;
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
function mb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var pb = ci({
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
    validator: mb
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
}, Je(ji, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: hb,
  classes: gb
} = Q("input"), yb = ["placeholder", "enterkeyhint"], bb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], wb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Cb(e, r) {
  var n = ae("var-field-decorator"), a = ae("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Z(
      n,
      Ot(to({
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
        "prepend-icon": ve(() => [j(e.$slots, "prepend-icon")]),
        "append-icon": ve(() => [j(e.$slots, "append-icon")]),
        default: ve(() => [e.normalizedType === "password" ? (p(), T(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete")),
            placeholder: e.hint ? void 0 : e.placeholder,
            style: X({
              "--input-placeholder-color": e.placeholderColor
            }),
            enterkeyhint: e.enterkeyhint
          },
          null,
          14,
          yb
        )) : _("v-if", !0), e.textarea ? (p(), T(
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
            style: X({
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
          bb
        )) : (p(), T(
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
            style: X({
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
          wb
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
var Pd = J({
  name: "VarInput",
  components: {
    VarFormDetails: _e,
    VarFieldDecorator: Od
  },
  props: pb,
  setup(e) {
    var r = M("var-input-" + rt().uid), n = M(null), a = M(!1), t = M(!1), o = U(() => e.type === "number" ? "text" : e.type), l = U(() => {
      var {
        maxlength: W,
        modelValue: L
      } = e;
      return W ? fn(L) ? "0 / " + W : String(L).length + "/" + W : "";
    }), i = U(() => e.disabled || e.readonly ? "" : "text"), s = U(() => {
      var {
        hint: W,
        blurColor: L,
        focusColor: E
      } = e;
      if (!W)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? E || "var(--field-decorator-focus-color)" : L || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: h
    } = Pr(), g = (W) => {
      Ne(() => {
        var {
          validateTrigger: L,
          rules: E,
          modelValue: G
        } = e;
        f(L, W, E, G);
      });
    }, y = (W) => {
      a.value = !0, S(e.onFocus, W), g("onFocus");
    }, w = (W) => {
      a.value = !1, S(e.onBlur, W), g("onBlur");
    }, V = (W) => {
      var L = W.target, {
        value: E
      } = L;
      return e.type === "number" && (E = P(E)), I(D(E));
    }, C = () => {
      t.value = !0;
    }, k = (W) => {
      t.value && (t.value = !1, W.target.dispatchEvent(new Event("input")));
    }, B = (W) => {
      if (!t.value) {
        var L = V(W);
        S(e["onUpdate:modelValue"], L), S(e.onInput, L, W), g("onInput");
      }
    }, $ = (W) => {
      var L = V(W);
      S(e.onChange, L, W), g("onChange");
    }, N = () => {
      var {
        disabled: W,
        readonly: L,
        clearable: E,
        onClear: G
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || W || L || !E || (S(e["onUpdate:modelValue"], ""), S(G, ""), g("onClear"));
    }, b = (W) => {
      var {
        disabled: L,
        onClick: E
      } = e;
      d != null && d.disabled.value || L || (S(E, W), g("onClick"));
    }, P = (W) => {
      var L = W.indexOf("-"), E = W.indexOf(".");
      return L > -1 && (W = L === 0 ? "-" + W.replace(/-/g, "") : W.replace(/-/g, "")), E > -1 && (W = W.slice(0, E + 1) + W.slice(E).replace(/\./g, "")), W.replace(/[^-0-9.]/g, "");
    }, D = (W) => e.modelModifiers.trim ? W.trim() : W, I = (W) => e.maxlength ? W.slice(0, R(e.maxlength)) : W, Y = (W) => {
      var {
        disabled: L,
        readonly: E
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || L || E || W.stopPropagation();
    };
    function q(W) {
      var {
        disabled: L
      } = e;
      d != null && d.disabled.value || L || W.target === n.value || (O(), W.preventDefault());
    }
    var x = () => {
      S(e["onUpdate:modelValue"], ""), h();
    }, z = () => m(e.rules, e.modelValue), O = () => {
      var W;
      (W = n.value) == null || W.focus();
    }, F = () => {
      n.value.blur();
    }, te = {
      reset: x,
      validate: z,
      resetValidation: h
    };
    return S(u, te), ir(() => {
      e.autofocus && O();
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
      n: hb,
      classes: gb,
      isEmpty: fn,
      handleFocus: y,
      handleBlur: w,
      handleInput: B,
      handleChange: $,
      handleClear: N,
      handleClick: b,
      handleTouchstart: Y,
      handleCompositionStart: C,
      handleCompositionEnd: k,
      handleMousedown: q,
      validate: z,
      resetValidation: h,
      reset: x,
      focus: O,
      blur: F
    };
  }
});
Pd.render = Cb;
const Sn = Pd;
Sn.install = function(e) {
  e.component(Sn.name, Sn);
};
var dk = Sn;
function Sb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function kb(e) {
  return ["always", "hover", "none"].includes(e);
}
var $b = {
  type: {
    type: String,
    default: "default",
    validator: Sb
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
    validator: kb
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
  n: Tb,
  classes: Ob
} = Q("link");
function Pb(e, r) {
  return p(), ye(
    at(e.tag),
    Ee(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [j(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var Vd = J({
  name: "VarLink",
  props: $b,
  setup(e) {
    var r = U(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), n = U(() => {
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
      n: Tb,
      classes: Ob,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: ge
    };
  }
});
Vd.render = Pb;
const ta = Vd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var vk = ta, Vb = {
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
}, Md = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Mb() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(Md);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Bd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Bb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = lr(Md);
  return r || Or("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function Eb() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = sr(Bd);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function Ib() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = lr(Bd);
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
function Nb(e) {
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
  n: Db,
  classes: Ab
} = Q("list");
function zb(e, r) {
  var n = ae("var-loading"), a = Ie("ripple");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [j(e.$slots, "default"), e.loading ? j(e.$slots, "loading", {
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
      ), Z(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : _("v-if", !0), e.finished ? j(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? j(e.$slots, "error", {
      key: 2
    }, () => [ke((p(), T(
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
    )), [[a]])]) : _("v-if", !0), A(
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
var Ed = J({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: Nr
  },
  props: Vb,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = Ib(), a = M(null), t = M(null), o, l = () => {
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
      var d = Nb(function* () {
        yield Ne(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return S(n, {}), r && ie(() => r.current.value, u), ie(() => [e.loading, e.error, e.finished], u), ir(() => {
      o = Tn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), xr(s), nt(s), {
      pack: Ze,
      listEl: a,
      detectorEl: t,
      dt: oo,
      isNumber: or,
      load: l,
      check: u,
      n: Db,
      classes: Ab
    };
  }
});
Ed.render = zb;
const oa = Ed;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var fk = oa, Lb = {
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
  classes: Rb,
  n: Ql
} = Q("loading-bar");
const Ub = J({
  name: "VarLoadingBar",
  props: Lb,
  setup(e) {
    return () => Z("div", {
      class: Rb(Ql(), [e.error, Ql("--error")]),
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
var Id, Nd, Co, Dd, _l, Ad = {}, Fb = {
  value: 0,
  opacity: 0,
  error: !1
}, Qe = Ae(Fb), Hb = (e) => {
  Object.assign(Qe, e);
}, Yb = (e) => {
  Object.assign(Qe, e), Ad = e;
}, jb = () => {
  Object.keys(Ad).forEach((e) => {
    Qe[e] !== void 0 && (Qe[e] = void 0);
  });
}, zd = () => {
  _l || (_l = !0, ot(Ub, Qe));
}, Wi = () => {
  Id = window.setTimeout(() => {
    if (!(Qe.value >= 95)) {
      var e = Math.random();
      Qe.value < 70 && (e = Math.round(5 * Math.random())), Qe.value += e, Wi();
    }
  }, 200);
}, Gi = () => {
  window.clearTimeout(Nd), window.clearTimeout(Id), window.clearTimeout(Co), window.clearTimeout(Dd);
}, Wb = () => {
  Gi(), Qe.error = !1, Qe.value = 0, zd(), Co = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), Wi();
}, Ld = () => {
  Gi(), Qe.value = 100, Co = window.setTimeout(() => {
    Qe.opacity = 0, Nd = window.setTimeout(() => {
      Qe.error = !1;
    }, 250);
  }, 300);
}, Gb = () => {
  Gi(), Qe.error = !0, Qe.value === 100 && (Qe.value = 0), zd(), Co = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), Wi(), Dd = window.setTimeout(Ld, 300);
}, Rd = {
  start: Wb,
  finish: Ld,
  error: Gb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Hb,
  setDefaultOptions: Yb,
  resetDefaultOptions: jb
}, ck = Rd;
const mi = Rd;
function qb(e) {
  return ["click", "hover"].includes(e);
}
function Xb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Kb = {
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
    validator: qb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Xb
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
  n: Zb,
  classes: Jb
} = Q("menu");
function Qb(e, r) {
  return p(), T(
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
    [j(e.$slots, "default"), (p(), ye(
      Ra,
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
              style: X({
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
            [j(e.$slots, "menu")],
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
var Ud = J({
  name: "VarMenu",
  props: Kb,
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
      resize: h
    } = vd(e);
    return {
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: hr,
      toSizeUnit: ge,
      n: Zb,
      classes: Jb,
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
Ud.render = Qb;
const Kr = Ud;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var mk = Kr, Fd = Symbol("SELECT_BIND_OPTION_KEY");
function _b() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = sr(Fd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function xb() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = lr(Fd);
  return n || Or("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var e0 = {
  label: {},
  value: {}
}, {
  n: r0,
  classes: n0
} = Q("option");
function a0(e, r) {
  var n = ae("var-checkbox"), a = Ie("ripple");
  return ke((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: X({
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
        style: X({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (p(), ye(
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
    )) : _("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [j(e.$slots, "default", {}, () => [Ce(
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
var Hd = J({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: hn
  },
  props: e0,
  setup(e) {
    var r = M(!1), n = U(() => r.value), a = U(() => e.label), t = U(() => e.value), {
      select: o,
      bindSelect: l
    } = xb(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      r.value = !r.value, u(h);
    }, f = () => u(h), m = (g) => {
      r.value = g;
    }, h = {
      label: a,
      value: t,
      selected: n,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(h), {
      n: r0,
      classes: n0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Hd.render = a0;
const ia = Hd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var pk = ia, t0 = {
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
function o0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: xl
} = Q("overlay");
const la = J({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: t0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Mt(() => e.show, 1), {
      disabled: o
    } = lo(), l = () => {
      S(e.onClick), S(e["onUpdate:show"], !1);
    };
    so(() => e.show, () => e.lockScroll);
    var i = () => Z("div", Ee({
      class: xl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [S(n.default)]), s = () => {
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
        return Z(Ra, {
          to: u,
          disabled: o.value
        }, o0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var hk = la, i0 = {
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
  n: l0,
  classes: s0
} = Q("pagination"), u0 = ["item-mode", "onClick"];
function d0(e, r) {
  var n = ae("var-icon"), a = ae("var-input"), t = ae("var-cell"), o = ae("var-menu"), l = Ie("ripple");
  return p(), T(
    "ul",
    {
      class: c(e.n())
    },
    [ke((p(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [j(e.$slots, "prev", {}, () => [Z(n, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), T(
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
          onKeydown: r[3] || (r[3] = Ji((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
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
    )) : (p(!0), T(
      Ve,
      {
        key: 1
      },
      Ue(e.pageList, (i, s) => ke((p(), T(
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
        u0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((p(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [j(e.$slots, "next", {}, () => [Z(n, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), T(
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
          menu: ve(() => [(p(!0), T(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (p(), T(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [Ce(
        re(e.pack.paginationJump) + " ",
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
          onKeydown: r[9] || (r[9] = Ji((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (p(), T(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      re(e.totalText),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Yd = J({
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
  props: i0,
  setup(e) {
    var r = M(!1), n = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(R(e.current) || 1), i = M(R(e.size) || 10), s = M([]), u = U(() => Math.ceil(e.maxPagerCount / 2)), d = U(() => Math.ceil(R(e.total) / R(i.value))), v = U(() => {
      var k = i.value * (l.value - 1) + 1, B = Math.min(i.value * l.value, R(e.total));
      return [k, B];
    }), f = U(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = (k, B) => or(k) ? !1 : B === 1 ? t.value : o.value, h = (k, B) => or(k) ? "basic" : B === 1 ? "head" : "tail", g = (k, B) => {
      if (!(k === l.value || e.disabled)) {
        if (k === "...") {
          l.value = B === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (k === "prev") {
          l.value = V(l.value - 1);
          return;
        }
        if (k === "next") {
          l.value = V(l.value + 1);
          return;
        }
        or(k) && (l.value = k);
      }
    }, y = () => {
      e.disabled || (r.value = !0);
    }, w = (k) => {
      i.value = k, r.value = !1;
      var B = V(l.value);
      a.value = String(B), l.value = B;
    }, V = (k) => k > d.value ? d.value : k < 1 ? 1 : k, C = (k, B, $) => {
      $.target.blur();
      var N = V(R(B));
      a.value = String(N), l.value = N, k === "quick" && (n.value = "");
    };
    return ie([() => e.current, () => e.size], (k) => {
      var [B, $] = k;
      l.value = R(B) || 1, i.value = R($ || 10);
    }), ie([l, i, d], (k, B) => {
      var [$, N, b] = k, [P, D] = B, I = [], {
        maxPagerCount: Y,
        total: q,
        onChange: x
      } = e, z = Math.ceil(R(q) / R(D)), O = b - (Y - u.value) - 1;
      if (a.value = "" + $, b - 2 > Y) {
        if (P === void 0 || b !== z)
          for (var F = 2; F < Y + 2; F++)
            I.push(F);
        if ($ <= Y && $ < O) {
          I = [];
          for (var te = 1; te < Y + 1; te++)
            I.push(te + 1);
          t.value = !0, o.value = !1;
        }
        if ($ > Y && $ < O) {
          I = [];
          for (var W = 1; W < Y + 1; W++)
            I.push($ + W - u.value);
          t.value = $ === 2 && Y === 1, o.value = !1;
        }
        if ($ >= O) {
          I = [];
          for (var L = 1; L < Y + 1; L++)
            I.push(b - (Y - L) - 1);
          t.value = !1, o.value = !0;
        }
        I = [1, "...", ...I, "...", b];
      } else
        for (var E = 1; E <= b; E++)
          I.push(E);
      s.value = I, P != null && b > 0 && S(x, $, N), S(e["onUpdate:current"], $), S(e["onUpdate:size"], N);
    }, {
      immediate: !0
    }), {
      n: l0,
      classes: s0,
      pack: Ze,
      current: l,
      menuVisible: r,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: n,
      simpleCurrentValue: a,
      totalText: f,
      getMode: h,
      isHideEllipsis: m,
      clickItem: g,
      showMenu: y,
      clickSize: w,
      setPage: C,
      toNumber: R,
      formatElevation: hr
    };
  }
});
Yd.render = d0;
const sa = Yd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var gk = sa, v0 = {
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
  n: f0,
  classes: c0
} = Q("paper");
function m0(e, r) {
  var n = Ie("ripple");
  return ke((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: !e.ripple
  }]]);
}
var jd = J({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: v0,
  setup(e) {
    var r = (n) => {
      S(e.onClick, n);
    };
    return {
      n: f0,
      classes: c0,
      formatElevation: hr,
      toSizeUnit: ge,
      handleClick: r
    };
  }
});
jd.render = m0;
const ua = jd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var yk = ua;
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
var p0 = pi({
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
}, Je(Vt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: h0,
  classes: g0
} = Q("picker"), es = 300, y0 = 15, rs = 200, b0 = 1e3, ns = 0, w0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], C0 = ["onTransitionend"], S0 = ["onClick"];
function k0(e, r) {
  var n = ae("var-button");
  return p(), ye(
    at(e.dynamic ? e.n("$-popup") : e.Transition),
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
        [e.toolbar ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [j(e.$slots, "cancel", {}, () => [Z(
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
          )]), j(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: c(e.n("title"))
            },
            re(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), j(e.$slots, "confirm", {}, () => [Z(
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
        )) : _("v-if", !0), A(
          "div",
          {
            class: c(e.n("columns")),
            style: X({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), T(
            Ve,
            null,
            Ue(e.scrollColumns, (a) => (p(), T(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstartPassive: (t) => e.handleTouchstart(a),
                onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.setScrollEl(t, a),
                  style: X({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(p(!0), T(
                  Ve,
                  null,
                  Ue(a.column.texts, (t, o) => (p(), T(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: X({
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
                    S0
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                C0
              )],
              42,
              w0
            ))),
            128
            /* KEYED_FRAGMENT */
          )), A(
            "div",
            {
              class: c(e.n("picked")),
              style: X({
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
              style: X({
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
var Wd = J({
  name: "VarPicker",
  components: {
    VarButton: er,
    VarPopup: Sr
  },
  inheritAttrs: !1,
  props: p0,
  setup(e) {
    var r = M([]), n = U(() => je(e.optionHeight)), a = U(() => je(e.optionCount)), t = U(() => a.value * n.value / 2 - n.value / 2), o = U(() => a.value * n.value), l = [], i = !1, s = (z, O) => {
      O.scrollEl = z;
    }, u = (z) => {
      S(e["onUpdate:show"], z);
    }, d = (z) => {
      var O = n.value + t.value, F = t.value - z.column.texts.length * n.value;
      z.translate >= O && (z.translate = O), z.translate <= F && (z.translate = F);
    }, v = (z, O) => {
      var {
        length: F
      } = z.column.texts;
      return O = O >= F ? F - 1 : O, O = O <= 0 ? 0 : O, O;
    }, f = (z, O) => {
      var F = Math.round((t.value - O) / n.value);
      return v(z, F);
    }, m = (z) => (z.translate = t.value - z.index * n.value, z.translate), h = () => {
      var z = r.value.map((F) => F.column.texts[F.index]), O = r.value.map((F) => F.index);
      return {
        texts: z,
        indexes: O
      };
    }, g = function(z, O) {
      O === void 0 && (O = 0), m(z), z.duration = O;
    }, y = (z, O, F) => {
      z.translate += Math.abs(O / F) / 3e-3 * (O < 0 ? -1 : 1);
    }, w = (z, O) => {
      i || (z.index = O, z.scrolling = !0, g(z, rs));
    }, V = (z) => {
      z.touching = !0, z.translate = ko(z.scrollEl);
    }, C = (z, O) => {
      if (O.touching) {
        i = !0, O.scrolling = !1, O.duration = 0;
        var {
          clientY: F
        } = z.touches[0], te = O.prevY !== void 0 ? F - O.prevY : 0;
        O.prevY = F, O.translate += te, d(O);
        var W = performance.now();
        W - O.momentumTime > es && (O.momentumTime = W, O.momentumPrevY = O.translate);
      }
    }, k = (z, O) => {
      O.touching = !1, O.prevY = void 0;
      var F = O.translate - O.momentumPrevY, te = performance.now() - O.momentumTime, W = Math.abs(F) >= y0 && te <= es;
      W && y(O, F, te), O.index = f(O, O.translate);
      var L = O.translate, E = m(O);
      O.scrolling = E !== L, g(O, W ? b0 : rs), O.scrolling || I(O), br(() => {
        i = !1;
      });
    }, B = (z) => {
      z.scrolling = !1, I(z);
    }, $ = (z) => z.map((O, F) => {
      var te, W = Te(O) ? {
        texts: O
      } : O, L = {
        id: ns++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (te = W.initialIndex) != null ? te : 0,
        columnIndex: F,
        duration: 0,
        momentumTime: 0,
        column: W,
        scrollEl: null,
        scrolling: !1
      };
      return g(L), L;
    }), N = (z) => {
      var O = [];
      return b(O, z, 0, !0), O;
    }, b = function(z, O, F, te) {
      if (te === void 0 && (te = !1), Te(O) && O.length) {
        var W, L = te && (W = e.cascadeInitialIndexes[z.length]) != null ? W : 0, E = {
          id: ns++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: L,
          columnIndex: F,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: O.map((G) => G[e.textKey])
          },
          columns: O,
          scrollEl: null,
          scrolling: !1
        };
        z.push(E), g(E), b(z, E.columns[E.index].children, F + 1, te);
      }
    }, P = (z) => {
      r.value.splice(r.value.indexOf(z) + 1), b(r.value, z.columns[z.index].children, z.columnIndex + 1);
    }, D = () => {
      var {
        indexes: z
      } = h();
      return z.every((O, F) => O === l[F]);
    }, I = (z) => {
      var {
        cascade: O,
        onChange: F
      } = e;
      if (!D()) {
        O && P(z);
        var te = r.value.some((E) => E.scrolling);
        if (!te) {
          var {
            texts: W,
            indexes: L
          } = h();
          l = [...L], S(F, W, L);
        }
      }
    }, Y = () => {
      if (e.cascade) {
        var z = r.value.find((O) => O.scrolling);
        z && (z.index = f(z, ko(z.scrollEl)), z.scrolling = !1, g(z), P(z));
      } else
        r.value.forEach((O) => {
          O.index = f(O, ko(O.scrollEl)), g(O);
        });
    }, q = () => {
      Y();
      var {
        texts: z,
        indexes: O
      } = h();
      l = [...O], S(e.onConfirm, z, O);
    }, x = () => {
      Y();
      var {
        texts: z,
        indexes: O
      } = h();
      l = [...O], S(e.onCancel, z, O);
    };
    return ie(() => e.columns, (z) => {
      r.value = e.cascade ? N(Qi(z)) : $(Qi(z));
      var {
        indexes: O
      } = h();
      l = [...O];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: h0,
      classes: g0,
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
      handleTouchmove: C,
      handleTouchend: k,
      handleTransitionend: B,
      confirm: q,
      cancel: x,
      dt: oo,
      handleClick: w
    };
  }
});
Wd.render = k0;
const kn = Wd;
var vr;
function La(e) {
  return new Promise((r) => {
    La.close();
    var n = Te(e) ? {
      columns: e
    } : e, a = Ae(n);
    a.dynamic = !0, a.teleport = "body", vr = a;
    var {
      unmountInstance: t
    } = ot(kn, a, {
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
La.Component = kn;
La.install = function(e) {
  e.component(kn.name, kn);
};
La.close = function() {
  if (vr != null) {
    var e = vr;
    vr = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
var bk = kn;
function $0(e) {
  return ["linear", "circle"].includes(e);
}
var T0 = {
  mode: {
    type: String,
    default: "linear",
    validator: $0
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
  n: O0,
  classes: P0
} = Q("progress"), Nn = 100, V0 = ["viewBox"], M0 = ["cx", "cy", "r", "stroke-width"], B0 = ["cx", "cy", "r", "stroke-width"];
function E0(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [A(
        "div",
        {
          class: c(e.n("linear-block")),
          style: X({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: X({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), A(
          "div",
          {
            class: c(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: X({
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
      ), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [Ce(
          re(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (p(), T(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: X({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), T(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: X({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), T(
          "circle",
          {
            key: 0,
            class: c(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: X({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          M0
        )) : _("v-if", !0), A(
          "circle",
          {
            class: c(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: X({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          B0
        )],
        14,
        V0
      )), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [Ce(
          re(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Gd = J({
  name: "VarProgress",
  props: T0,
  setup(e) {
    var r = U(() => {
      var a = R(e.value), t = a > Nn ? Nn : a, o = a > Nn ? Nn : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), n = U(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + je(a) + " " + je(a), i = R(o) > Nn ? Nn : Math.round(R(o)), s = (je(a) - je(t)) / 2, u = 2 * Math.PI * s, d = i / Nn * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: O0,
      classes: P0,
      toSizeUnit: ge,
      multiplySizeUnit: ar,
      linearProps: r,
      circleProps: n
    };
  }
});
Gd.render = E0;
const da = Gd;
da.install = function(e) {
  e.component(da.name, da);
};
var wk = da, I0 = {
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
  classes: N0
} = Q("pull-refresh"), is = 150;
function D0(e, r) {
  var n = ae("var-icon");
  return p(), T(
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
        style: X(e.controlStyle)
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
    ), j(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var qd = J({
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: I0,
  setup(e) {
    var r = M(0), n = M(null), a = M(null), t = M(0), o = M("-125%"), l = M("arrow-down"), i = M("default"), s = M(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = ts(function* (P) {
        if (l.value !== P)
          return l.value = P, new Promise((D) => {
            window.setTimeout(D, is);
          });
      });
      return function(D) {
        return b.apply(this, arguments);
      };
    }(), h = U(() => i.value !== "loading" && i.value !== "success" && !e.disabled), g = U(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), y = U(() => Math.abs(2 * r.value)), w = U(() => i.value === "success"), V = (b) => {
      var P = "classList" in u ? u : document.body;
      P.classList[b](os() + "--lock");
    }, C = (b) => {
      if (r.value === 0) {
        var {
          width: P
        } = a.value.getBoundingClientRect();
        r.value = -(P + P * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = Tn(b.target);
    }, k = (b) => {
      if (h.value && !(d !== u && pt(d) > 0)) {
        var P = pt(u);
        if (!(P > 0)) {
          var D = P === 0, I = b.touches[0];
          f = I.clientY - v, D && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), D && o.value > r.value && V("add");
          var Y = (b.touches[0].clientY - t.value) / 2 + r.value;
          o.value = Y >= y.value ? y.value : Y, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, B = /* @__PURE__ */ function() {
      var b = ts(function* () {
        h.value && (s.value = !0, o.value >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, S(e["onUpdate:modelValue"], !0), Ne(() => {
          S(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, R(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), $ = () => {
      u = e.target ? ws(e.target, "PullRefresh") : Tn(n.value);
    }, N = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    };
    return ie(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, N();
      }, R(e.successDuration)));
    }), ir($), Zr(n, "touchmove", k), {
      n: os,
      classes: N0,
      ICON_TRANSITION: is,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: C,
      touchMove: k,
      touchEnd: B,
      iconName: l,
      controlStyle: g,
      isSuccess: w
    };
  }
});
qd.render = D0;
const va = qd;
va.install = function(e) {
  e.component(va.name, va);
};
var Ck = va, A0 = {
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
}, Xd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function z0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = sr(Xd);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function L0() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = lr(Xd);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: R0,
  classes: U0
} = Q("radio");
function F0(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), T(
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
      [ke((p(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
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
        )]) : j(e.$slots, "unchecked-icon", {
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
      }], [l, e.handleHovering, "desktop"]]), A(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [j(e.$slots, "default")],
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
var Kd = J({
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
  props: A0,
  setup(e) {
    var r = M(!1), n = U(() => r.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = L0(), {
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
    } = Pr(), h = ($) => {
      Ne(() => {
        var {
          validateTrigger: N,
          rules: b,
          modelValue: P
        } = e;
        v(N, $, b, P);
      });
    }, g = ($) => {
      var {
        checkedValue: N,
        onChange: b
      } = e;
      t && r.value === N || (r.value = $, S(e["onUpdate:modelValue"], r.value), S(b, r.value), t == null || t.onToggle(N), h("onChange"));
    }, y = ($) => {
      var {
        disabled: N,
        readonly: b,
        uncheckedValue: P,
        checkedValue: D,
        onClick: I
      } = e;
      s != null && s.disabled.value || N || (S(I, $), !(s != null && s.readonly.value || b) && (a.value = !0, g(n.value ? P : D)));
    }, w = ($) => {
      var {
        checkedValue: N,
        uncheckedValue: b
      } = e;
      r.value = $ === N ? N : b;
    }, V = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, C = () => f(e.rules, e.modelValue), k = ($) => {
      var {
        uncheckedValue: N,
        checkedValue: b
      } = e, P = ![N, b].includes($);
      P && ($ = n.value ? N : b), g($);
    };
    ie(() => e.modelValue, ($) => {
      r.value = $;
    }, {
      immediate: !0
    });
    var B = {
      sync: w,
      validate: C,
      resetValidation: m,
      reset: V
    };
    return S(o, B), S(u, B), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: R0,
      classes: U0,
      handleClick: y,
      toggle: k,
      reset: V,
      validate: C,
      resetValidation: m
    };
  }
});
Kd.render = F0;
const fa = Kd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var Sk = fa;
function H0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Y0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: H0
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
  n: j0,
  classes: W0
} = Q("radio-group");
function G0(e, r) {
  var n = ae("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
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
var Zd = J({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: _e
  },
  props: Y0,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = z0(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Pr(), u = U(() => o.value), d = (y) => {
      Ne(() => {
        var {
          validateTrigger: w,
          rules: V,
          modelValue: C
        } = e;
        l(w, y, V, C);
      });
    }, v = () => n.forEach((y) => {
      var {
        sync: w
      } = y;
      return w(e.modelValue);
    }), f = (y) => {
      S(e["onUpdate:modelValue"], y), S(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), h = () => {
      S(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => r.value, v);
    var g = {
      onToggle: f,
      validate: m,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return S(t, g), a(g), {
      errorMessage: o,
      n: j0,
      classes: W0,
      reset: h,
      validate: m,
      resetValidation: s
    };
  }
});
Zd.render = G0;
const ca = Zd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var kk = ca, q0 = {
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
  n: lt
} = Q("rate"), X0 = ["onClick"];
function K0(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), T(
        Ve,
        null,
        Ue(e.toNumber(e.count), (i) => ke((p(), T(
          "div",
          {
            key: i,
            style: X(e.getStyle(i)),
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
              style: X({
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
          X0
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
var Jd = J({
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
  props: q0,
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
    } = On(), s = M(-1), u = (C) => {
      var {
        count: k,
        gap: B
      } = e;
      return {
        color: v(C).color,
        marginRight: C !== R(k) ? ge(B) : 0
      };
    }, d = (C) => {
      var {
        name: k,
        color: B
      } = v(C);
      return {
        [lt("content")]: !0,
        [lt("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [lt("--error")]: a.value,
        [lt("--primary")]: k !== e.emptyIcon && !B
      };
    }, v = (C) => {
      var {
        modelValue: k,
        disabled: B,
        disabledColor: $,
        color: N,
        half: b,
        emptyColor: P,
        icon: D,
        halfIcon: I,
        emptyIcon: Y
      } = e, q = N;
      return (B || r != null && r.disabled.value) && (q = $), C <= R(k) ? {
        color: q,
        name: D
      } : b && C <= R(k) + 0.5 ? {
        color: q,
        name: I
      } : {
        color: B || r != null && r.disabled.value ? $ : P,
        name: Y
      };
    }, f = (C, k) => {
      if (e.half) {
        var {
          offsetWidth: B
        } = k.target;
        k.offsetX <= Math.floor(B / 2) && (C -= 0.5);
      }
      S(e["onUpdate:modelValue"], C);
    }, m = () => o(e.rules, R(e.modelValue)), h = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = (C, k) => {
      var {
        readonly: B,
        disabled: $,
        onChange: N
      } = e;
      B || $ || r != null && r.disabled.value || r != null && r.readonly.value || (f(C, k), S(N, C), h());
    }, y = (C) => (k) => {
      s.value = C, i.value = k;
    }, w = () => {
      S(e["onUpdate:modelValue"], 0), l();
    }, V = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return S(n, V), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
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
      n: lt
    };
  }
});
Jd.render = K0;
const ma = Jd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var $k = ma;
function Z0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var J0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Z0
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
}, Q0 = (e) => (Ua(""), e = e(), Fa(), e), _0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, x0 = /* @__PURE__ */ Q0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), e1 = [x0];
function r1(e, r) {
  return p(), T("svg", _0, e1);
}
var Qd = J({});
Qd.render = r1;
const n1 = Qd;
var a1 = (e) => (Ua(""), e = e(), Fa(), e), t1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, o1 = /* @__PURE__ */ a1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), i1 = [o1];
function l1(e, r) {
  return p(), T("svg", t1, i1);
}
var _d = J({});
_d.render = l1;
const s1 = _d;
var u1 = (e) => (Ua(""), e = e(), Fa(), e), d1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, v1 = /* @__PURE__ */ u1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), f1 = [v1];
function c1(e, r) {
  return p(), T("svg", d1, f1);
}
var xd = J({});
xd.render = c1;
const m1 = xd;
var {
  n: p1,
  classes: h1
} = Q("result");
function g1(e, r) {
  return p(), T(
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
        style: X({
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
        style: X({
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
        style: X({
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
        style: X({
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
var ev = J({
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
      n: p1,
      classes: h1,
      toNumber: R
    };
  }
});
ev.render = g1;
const y1 = ev;
var b1 = (e) => (Ua(""), e = e(), Fa(), e), w1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, C1 = /* @__PURE__ */ b1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), S1 = [C1];
function k1(e, r) {
  return p(), T("svg", w1, S1);
}
var rv = J({});
rv.render = k1;
const $1 = rv;
var T1 = (e) => (Ua(""), e = e(), Fa(), e), O1 = {
  viewBox: "-4 -4 32 32"
}, P1 = /* @__PURE__ */ T1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), V1 = [P1];
function M1(e, r) {
  return p(), T("svg", O1, V1);
}
var nv = J({});
nv.render = M1;
const B1 = nv;
var {
  n: E1,
  classes: I1
} = Q("result");
function N1(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "image", {}, () => [e.type ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: X({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), ye(
          at(e.type),
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
    )) : _("v-if", !0)]), j(e.$slots, "title", {}, () => [e.title ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var av = J({
  name: "VarResult",
  components: {
    Info: n1,
    Success: y1,
    Warning: m1,
    Error: s1,
    Question: $1,
    Empty: B1
  },
  props: J0,
  setup(e) {
    var r = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: E1,
      classes: I1,
      toNumber: R,
      toPxNum: je,
      toSizeUnit: ge,
      circleSize: r,
      borderSize: n
    };
  }
});
av.render = N1;
const pa = av;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Tk = pa;
function D1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function A1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var z1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: D1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: A1
  },
  onClick: H()
}, {
  n: L1,
  classes: R1
} = Q("row");
function U1(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: X({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var tv = J({
  name: "VarRow",
  props: z1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = Jm(), t = U(() => {
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
      n: L1,
      classes: R1,
      average: t,
      handleClick: l,
      padStartFlex: Xt
    };
  }
});
tv.render = U1;
const ha = tv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Ok = ha;
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
function F1(e) {
  return ["left", "right", "center"].includes(e);
}
var H1 = hi({
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
    validator: F1
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
}, Je(ji, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Y1,
  classes: j1
} = Q("select"), W1 = {
  key: 1
};
function G1(e, r) {
  var n = ae("var-chip"), a = ae("var-icon"), t = ae("var-field-decorator"), o = ae("var-menu"), l = ae("var-form-details");
  return p(), T(
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
        menu: ve(() => [A(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [j(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ve(() => [Z(
          t,
          Ot(to({
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
            "prepend-icon": ve(() => [j(e.$slots, "prepend-icon")]),
            "append-icon": ve(() => [j(e.$slots, "append-icon")]),
            default: ve(() => [A(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: X({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? _("v-if", !0) : j(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), T(
                  Ve,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), T(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(p(!0), T(
                      Ve,
                      null,
                      Ue(e.labels, (i) => (p(), ye(
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
                  )) : (p(), T(
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
                )) : (p(), T(
                  "span",
                  W1,
                  re(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), j(e.$slots, "arrow-icon", {
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
var ov = J({
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: Kr,
    VarChip: gn,
    VarFieldDecorator: Od,
    VarFormDetails: _e
  },
  props: H1,
  setup(e) {
    var r = M(!1), n = U(() => e.multiple), a = U(() => e.focusColor), t = M(""), o = M([]), l = U(() => fn(e.modelValue)), i = U(() => e.disabled || e.readonly ? "" : "pointer"), s = M(0), {
      bindForm: u,
      form: d
    } = Vr(), {
      length: v,
      options: f,
      bindOptions: m
    } = _b(), {
      errorMessage: h,
      validateWithTrigger: g,
      validate: y,
      // expose
      resetValidation: w
    } = Pr(), V = M(null), C = U(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), k = () => {
      var {
        multiple: L,
        modelValue: E
      } = e;
      if (L) {
        var G = E;
        o.value = G.map(N);
      }
      !L && !fn(E) && (t.value = N(E)), !L && fn(E) && (t.value = "");
    }, B = (L) => {
      Ne(() => {
        var {
          validateTrigger: E,
          rules: G,
          modelValue: ee
        } = e;
        g(E, L, G, ee);
      });
    }, $ = (L) => {
      var {
        value: E,
        label: G
      } = L;
      return E.value != null ? E.value : G.value;
    }, N = (L) => {
      var E, G, ee = f.find((se) => {
        var {
          value: de
        } = se;
        return de.value === L;
      });
      return ee || (ee = f.find((se) => {
        var {
          label: de
        } = se;
        return de.value === L;
      })), (E = (G = ee) == null ? void 0 : G.label.value) != null ? E : "";
    }, b = () => {
      var {
        disabled: L,
        readonly: E,
        onFocus: G
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || L || E || (s.value = je(e.offsetY), r.value = !0, S(G), B("onFocus"));
    }, P = () => {
      var {
        disabled: L,
        readonly: E,
        onBlur: G
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || L || E || (S(G), B("onBlur"));
    }, D = (L) => {
      var {
        disabled: E,
        readonly: G,
        multiple: ee,
        onChange: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || G)) {
        var de = ee ? f.filter((we) => {
          var {
            selected: Pe
          } = we;
          return Pe.value;
        }).map($) : $(L);
        S(e["onUpdate:modelValue"], de), S(se, de), B("onChange"), !ee && (r.value = !1);
      }
    }, I = () => {
      var {
        disabled: L,
        readonly: E,
        multiple: G,
        clearable: ee,
        onClear: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || L || E || !ee)) {
        var de = G ? [] : void 0;
        S(e["onUpdate:modelValue"], de), S(se, de), B("onClear");
      }
    }, Y = (L) => {
      var {
        disabled: E,
        onClick: G
      } = e;
      d != null && d.disabled.value || E || (S(G, L), B("onClick"));
    }, q = (L) => {
      var {
        disabled: E,
        readonly: G,
        modelValue: ee,
        onClose: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || G)) {
        var de = ee, we = f.find((ur) => {
          var {
            label: ne
          } = ur;
          return ne.value === L;
        }), Pe = de.filter((ur) => {
          var ne;
          return ur !== ((ne = we.value.value) != null ? ne : we.label.value);
        });
        S(e["onUpdate:modelValue"], Pe), S(se, Pe), B("onClose");
      }
    }, x = () => {
      var {
        multiple: L,
        modelValue: E
      } = e;
      if (L) {
        var G = E;
        f.forEach((ee) => ee.sync(G.includes($(ee))));
      } else
        f.forEach((ee) => ee.sync(E === $(ee)));
      k();
    }, z = () => {
      s.value = je(e.offsetY), r.value = !0;
    }, O = () => {
      r.value = !1;
    }, F = () => y(e.rules, e.modelValue), te = () => {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: L,
        modelValue: E
      } = e;
      L && !Te(E) && Or("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, x, {
      deep: !0
    }), ie(() => v.value, x);
    var W = {
      multiple: n,
      focusColor: a,
      computeLabel: k,
      onSelect: D,
      reset: te,
      validate: F,
      resetValidation: w
    };
    return m(W), S(u, W), {
      offsetY: s,
      isFocus: r,
      errorMessage: h,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: V,
      placement: C,
      cursor: i,
      n: Y1,
      classes: j1,
      handleFocus: b,
      handleBlur: P,
      handleClear: I,
      handleClick: Y,
      handleClose: q,
      reset: te,
      validate: F,
      resetValidation: w,
      focus: z,
      blur: O
    };
  }
});
ov.render = G1;
const ga = ov;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Pk = ga, q1 = {
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
  n: X1,
  classes: K1
} = Q("skeleton");
function Z1(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), T(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: X({
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), T(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: X({
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), T(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), T(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: X({
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
          )) : _("v-if", !0), (p(!0), T(
            Ve,
            null,
            Ue(e.toNumber(e.rows), (n, a) => (p(), T(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: X({
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.loading && e.fullscreen ? (p(), T(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: X({
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var iv = J({
  name: "VarSkeleton",
  props: q1,
  setup() {
    return {
      n: X1,
      classes: K1,
      toSizeUnit: ge,
      toNumber: R
    };
  }
});
iv.render = Z1;
const ya = iv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Vk = ya;
function J1(e) {
  return ["always", "normal", "never"].includes(e);
}
var ze;
(function(e) {
  e.First = "1", e.Second = "2";
})(ze || (ze = {}));
var Q1 = {
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
    validator: J1
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
  n: ls,
  classes: _1
} = Q("slider"), x1 = ["onTouchstart"];
function ew(e, r) {
  var n = ae("var-hover-overlay"), a = ae("var-form-details"), t = Ie("hover");
  return p(), T(
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
            style: X({
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
            style: X(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), T(
        Ve,
        null,
        Ue(e.thumbList, (o) => (p(), T(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: X(e.thumbStyle(o)),
            onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
          },
          [j(e.$slots, "button", {
            currentValue: o.text
          }, () => [ke(A(
            "div",
            {
              class: c(e.n(e.direction + "-thumb-block")),
              style: X({
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
              style: X({
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
          ), A(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "-thumb-label"), [e.showLabel(o.enumValue), e.n(e.direction + "-thumb-label--active")])),
              style: X({
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
          x1
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
var lv = J({
  name: "VarSlider",
  components: {
    VarFormDetails: _e,
    VarHoverOverlay: cr
  },
  directives: {
    Hover: Rr
  },
  props: Q1,
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
    }), m = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = M(null), g = M(0), y = M(!1), w = Ae({
      [ze.First]: f(),
      [ze.Second]: f()
    }), V = U(() => R(e.max) - R(e.min)), C = U(() => g.value / V.value * R(e.step)), k = U(() => {
      var {
        modelValue: ne,
        range: ue
      } = e, me = [];
      return ue && Te(ne) ? me = [{
        value: q(ne[0]),
        enumValue: ze.First,
        text: x(ne[0]),
        hovering: ut(i),
        handleHovering: s
      }, {
        value: q(ne[1]),
        enumValue: ze.Second,
        text: x(ne[1]),
        hovering: ut(u),
        handleHovering: d
      }] : or(ne) && (me = [{
        value: q(ne),
        enumValue: ze.First,
        text: x(ne),
        hovering: ut(i),
        handleHovering: s
      }]), me;
    }), B = U(() => {
      var {
        activeColor: ne,
        range: ue,
        modelValue: me
      } = e, De = ue && Te(me) ? q(Math.min(me[0], me[1])) : 0, Ke = ue && Te(me) ? q(Math.max(me[0], me[1])) - De : q(me);
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
    }), $ = U(() => e.disabled || (n == null ? void 0 : n.disabled.value)), N = U(() => e.readonly || (n == null ? void 0 : n.readonly.value)), b = U(() => e.direction === "vertical"), P, D = (ne) => {
      var ue = ne.currentTarget;
      return ue ? b.value ? g.value - (ne.clientY - ue.getBoundingClientRect().top) : ne.clientX - Xv(ue) : 0;
    }, I = (ne) => {
      var ue = b.value ? "bottom" : "left";
      return {
        [ue]: ne.value + "%",
        zIndex: w[ne.enumValue].active ? 1 : void 0
      };
    }, Y = (ne) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[ne].active, q = (ne) => {
      var {
        min: ue,
        max: me
      } = e;
      return ne < R(ue) ? 0 : ne > R(me) ? 100 : (ne - R(ue)) / V.value * 100;
    }, x = (ne) => {
      if (!or(ne))
        return 0;
      var ue = ne;
      ue < Number(e.min) && (ue = Number(e.min)), ue > Number(e.max) && (ue = Number(e.max));
      var me = parseInt("" + ue, 10) === ue;
      return me ? ue : R(ue.toPrecision(5));
    }, z = (ne, ue) => {
      $.value || ue.handleHovering(ne);
    }, O = (ne, ue) => {
      var me = [], {
        step: De,
        range: Ke,
        modelValue: Ge,
        onChange: He,
        min: Ye
      } = e, oe = R(De), be = Math.round(ne / C.value), pe = be * oe + R(Ye), Se = w[ue].percentValue * oe + R(Ye);
      if (w[ue].percentValue = be, Ke && Te(Ge) && (me = ue === ze.First ? [pe, Ge[1]] : [Ge[0], pe]), Se !== pe) {
        var $e = Ke ? me.map((Re) => x(Re)) : x(pe);
        S(He, $e), S(e["onUpdate:modelValue"], $e), m();
      }
    }, F = (ne) => {
      if (!e.range)
        return ze.First;
      var ue = w[ze.First].percentValue * C.value, me = w[ze.Second].percentValue * C.value, De = Math.abs(ne - ue), Ke = Math.abs(ne - me);
      return De <= Ke ? ze.First : ze.Second;
    }, te = () => {
      document.addEventListener("touchmove", E, {
        passive: !1
      }), document.addEventListener("touchend", G), document.addEventListener("touchcancel", G);
    }, W = () => {
      document.removeEventListener("touchmove", E), document.removeEventListener("touchend", G), document.removeEventListener("touchcancel", G);
    }, L = (ne, ue) => {
      if (g.value || (g.value = h.value.offsetWidth), $.value || (w[ue].active = !0), P = ue, te(), !($.value || N.value)) {
        S(e.onStart), y.value = !0;
        var {
          clientX: me,
          clientY: De
        } = ne.touches[0];
        w[ue].startPosition = b.value ? De : me;
      }
    }, E = (ne) => {
      if (ne.preventDefault(), !($.value || N.value || !y.value)) {
        var {
          startPosition: ue,
          currentOffset: me
        } = w[P], {
          clientX: De,
          clientY: Ke
        } = ne.touches[0], Ge = (b.value ? ue - Ke : De - ue) + me;
        Ge <= 0 ? Ge = 0 : Ge >= g.value && (Ge = g.value), O(Ge, P);
      }
    }, G = () => {
      W();
      var {
        range: ne,
        modelValue: ue,
        onEnd: me,
        step: De,
        min: Ke
      } = e;
      if ($.value || (w[P].active = !1), !($.value || N.value)) {
        var Ge = [];
        w[P].currentOffset = w[P].percentValue * C.value;
        var He = w[P].percentValue * R(De) + R(Ke);
        ne && Te(ue) && (Ge = P === ze.First ? [He, ue[1]] : [ue[0], He]), S(me, ne ? Ge : He), y.value = !1;
      }
    }, ee = (ne) => {
      if (!($.value || N.value) && !ne.target.closest("." + ls("thumb"))) {
        var ue = D(ne), me = F(ue);
        P = me, O(ue, me), G();
      }
    }, se = () => {
      var ne = R(e.step);
      return isNaN(ne) ? (nl("Slider", 'type of prop "step" should be Number'), !1) : ne < 0 ? (nl("Slider", '"step" should be > 0'), !1) : !0;
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
        return De < R(Ke) ? 0 : De > R(Ge) ? V.value / ue : (De - R(Ke)) / ue;
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
    }), ie(g, () => we()), ir(() => {
      !se() || !de() || (g.value = h.value[b.value ? "offsetHeight" : "offsetWidth"]);
    }), kt(() => {
      W();
    }), {
      n: ls,
      classes: _1,
      Thumbs: ze,
      sliderEl: h,
      getFillStyle: B,
      isDisabled: $,
      isVertical: b,
      thumbStyle: I,
      errorMessage: a,
      thumbsProps: w,
      thumbList: k,
      hover: z,
      multiplySizeUnit: ar,
      toNumber: R,
      showLabel: Y,
      start: L,
      move: E,
      end: G,
      click: ee
    };
  }
});
lv.render = ew;
const ba = lv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Mk = ba;
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
function rw(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function nw(e) {
  return qi.includes(e);
}
var sv = {
  type: {
    type: String,
    validator: nw
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: rw
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
  loadingColor: gi({}, Je(un, "color"), {
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
  n: aw,
  classes: tw
} = Q("snackbar"), ow = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function iw(e, r) {
  var n = ae("var-icon"), a = ae("var-loading");
  return ke((p(), T(
    "div",
    {
      class: c(e.n()),
      style: X({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: X({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [j(e.$slots, "default", {}, () => [Ce(
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
        [j(e.$slots, "icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (p(), ye(
          n,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (p(), ye(
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
        )) : _("v-if", !0), j(e.$slots, "action")],
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
var uv = J({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Nr,
    VarIcon: Oe
  },
  props: sv,
  setup(e) {
    var r = M(null), {
      zIndex: n
    } = Mt(() => e.show, 1);
    so(() => e.show, () => e.lockScroll);
    var a = U(() => e.type === "loading" || e.forbidClick), t = U(() => e.type ? ow[e.type] : ""), o = () => {
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
      SNACKBAR_TYPE: qi,
      n: aw,
      classes: tw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
uv.render = iw;
const dv = uv;
var {
  n: lw
} = Q("snackbar");
function sw(e, r) {
  var n = ae("var-snackbar-core");
  return p(), ye(
    Ra,
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
          Ee(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: ve(() => [j(e.$slots, "icon")]),
            action: ve(() => [j(e.$slots, "action")]),
            default: ve(() => [j(e.$slots, "default", {}, () => [Ce(
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
var vv = J({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: dv
  },
  props: sv,
  setup() {
    var {
      disabled: e
    } = lo();
    return {
      n: lw,
      disabled: e
    };
  }
});
vv.render = sw;
const wa = vv;
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
function uw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var qi = ["loading", "success", "warning", "info", "error"], ss = 0, yi = !1, fv, et = !1, cv = {
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
}, $r = Ae([]), Xi = cv, dw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Oo = (e) => () => Pt(e) ? e() : e, vw = {
  setup() {
    return () => {
      var e = $r.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), et && (a.position = "top");
        var l = et ? "relative" : "absolute", i = Ct({
          position: l
        }, gw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Oo(s),
          icon: Oo(u),
          action: Oo(d)
        };
        return Z(dv, Ee(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Z(Hv, Ee(dw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: fw,
        onAfterLeave: cw
      }), uw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, _r = function(e) {
  var r = pw(e), n = Ae(Ct({}, Xi, r));
  n.show = !0, yi || (yi = !0, fv = ot(vw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: ss++,
    reactiveSnackOptions: n
  };
  if (a === 0 || et)
    mw(t);
  else {
    var o = "update-" + ss;
    hw(n, o);
  }
  return {
    clear() {
      !et && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
qi.forEach((e) => {
  _r[e] = (r) => (Si(r) ? r.type = e : r = {
    content: r,
    type: e
  }, _r(r));
});
_r.install = function(e) {
  e.component(wa.name, wa);
};
_r.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== et && ($r.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), et = e);
};
_r.clear = function() {
  $r.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
_r.setDefaultOptions = function(e) {
  Xi = e;
};
_r.resetDefaultOptions = function() {
  Xi = cv;
};
_r.Component = wa;
function fw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === R(r));
  n && S(n.reactiveSnackOptions.onOpened);
}
function cw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === R(r));
  n && (n.animationEnd = !0, S(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (S(fv), $r = Ae([]), yi = !1);
}
function mw(e) {
  $r.push(e);
}
function pw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function hw(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = Ct({}, n.reactiveSnackOptions, e), n._update = r;
}
function gw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Bk = wa;
const bi = _r;
var mv = (e) => ["mini", "small", "normal", "large"].includes(e), yw = (e) => mv(e) || Te(e) || or(e) || Fe(e), bw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), ww = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Cw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: yw
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
    validator: bw
  },
  align: {
    type: String,
    validator: ww
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Sw(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Po,
  classes: kw
} = Q("space");
const Ca = J({
  name: "VarSpace",
  props: Cw,
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
      } = e, v = (t = S(n.default)) != null ? t : [], f = mv(d), [m, h] = a(d, f);
      v = Vs(v);
      var g = v.length - 1, y = v.map((w, V) => {
        var C = Sw(m, h, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: g
        });
        return Z("div", {
          style: {
            margin: C
          }
        }, [w]);
      });
      return Z("div", {
        class: kw(Po(), Po("$--box"), [o, Po("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Xt(l),
          alignItems: Xt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [y]);
    };
  }
});
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Ek = Ca, $w = {
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
}, pv = Symbol("STEPS_BIND_STEP_KEY");
function Tw() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = sr(pv);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Ow() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = lr(pv);
  return n || Or("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Pw,
  classes: Vw
} = Q("step"), Mw = {
  key: 3
};
function Bw(e, r) {
  var n = ae("var-icon");
  return p(), T(
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
            style: X({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: r[0] || (r[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (p(), ye(
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
          )) : e.isCurrent && e.currentIcon ? (p(), ye(
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
          )) : e.inactiveIcon ? (p(), ye(
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
          )) : (p(), T(
            "span",
            Mw,
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
          [j(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? _("v-if", !0) : (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: X({
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
var hv = J({
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: $w,
  setup() {
    var e = M(null), r = M(""), n = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Ow(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = U(() => l.value === a.value), m = U(() => a.value !== -1 && l.value > a.value), h = {
      index: a
    }, g = () => v(a.value), y = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(h), ie(i, (w) => {
      if (n.value = w - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        r.value = "0 -" + V + "px";
      }
    }), {
      n: Pw,
      classes: Vw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: r,
      activeColor: s,
      inactiveColor: u,
      isLastChild: n,
      click: g,
      getRef: y
    };
  }
});
hv.render = Bw;
const Sa = hv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Ik = Sa;
function Ew(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Iw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Ew
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: H()
}, {
  n: Nw
} = Q("steps");
function Dw(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      style: X({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var gv = J({
  name: "VarSteps",
  props: Iw,
  setup(e) {
    var r = U(() => e.active), n = U(() => e.activeColor), a = U(() => e.inactiveColor), t = U(() => e.direction), {
      length: o,
      bindStep: l
    } = Tw(), i = (u) => {
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
      n: Nw
    };
  }
});
gv.render = Dw;
const ka = gv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Nk = ka, Aw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: zw
} = Q("style-provider"), Lw = J({
  name: "VarStyleProvider",
  props: Aw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => ps(e.tag, {
      class: zw(),
      style: Os(e.styleVars)
    }, S(n.default));
  }
});
const $a = Lw;
var Vo = [];
function St(e) {
  Vo.forEach((n) => document.documentElement.style.removeProperty(n)), Vo.length = 0;
  var r = Os(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Vo.push(a);
  });
}
St.Component = $a;
$a.install = function(e) {
  e.component($a.name, $a);
};
St.install = function(e) {
  e.component($a.name, $a);
};
var Dk = $a, Rw = {
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
  n: Uw,
  classes: Fw
} = Q("switch");
function Hw(e, r) {
  var n = ae("var-loading"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return ke((p(), T(
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
        style: X(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: X(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), ke((p(), T(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: X(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: X(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), ye(
            n,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : _("v-if", !0)],
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
var yv = J({
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
  props: Rw,
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
    } = On(), u = () => o(e.rules, e.modelValue), d = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = U(() => {
      var {
        size: w,
        modelValue: V,
        color: C,
        closeColor: k,
        loadingColor: B,
        activeValue: $
      } = e;
      return {
        handle: {
          width: ar(w),
          height: ar(w),
          backgroundColor: V === $ ? C : k,
          color: B
        },
        ripple: {
          left: V === $ ? ar(w, 0.5) : "-" + ar(w, 0.5),
          color: V === $ ? C : k || "#999",
          width: ar(w, 2),
          height: ar(w, 2)
        },
        track: {
          height: ar(w, 0.72),
          width: ar(w, 1.9),
          borderRadius: ar(w, 2 / 3),
          filter: V === $ || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === $ ? C : k
        },
        switch: {
          height: ar(w, 1.2),
          width: ar(w, 2)
        }
      };
    }), f = U(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return ar(w, 0.4);
    }), m = (w) => {
      var {
        onClick: V,
        onChange: C,
        disabled: k,
        loading: B,
        readonly: $,
        modelValue: N,
        activeValue: b,
        inactiveValue: P,
        "onUpdate:modelValue": D
      } = e;
      if (S(V, w), !(k || B || $ || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var I = N === b ? P : b;
        S(C, I), S(D, I), d();
      }
    }, h = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, g = () => {
      S(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: g,
      validate: u,
      resetValidation: l
    };
    return S(r, y), {
      n: Uw,
      classes: Fw,
      switchActive: m,
      hovering: i,
      hover: h,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly
    };
  }
});
yv.render = Hw;
const Ta = yv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Ak = Ta, Yw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: H()
}, bv = Symbol("TABS_BIND_TAB_KEY");
function jw() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = sr(bv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function Ww() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = lr(bv);
  return r || Or("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Ut,
  classes: Gw
} = Q("tab");
function qw(e, r) {
  var n = Ie("ripple");
  return ke((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: X({
        color: e.computeColorStyle()
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: e.disabled
  }]]);
}
var wv = J({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Yw,
  setup(e) {
    var r = M(null), n = U(() => e.name), a = U(() => e.disabled), t = U(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Ww(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: h
    } = l, g = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(g);
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : y() ? d.value : v.value, V = () => e.disabled ? Ut("$-tab--disabled") : y() ? Ut("$-tab--active") : Ut("$-tab--inactive"), C = (k) => {
      var {
        disabled: B,
        name: $,
        onClick: N
      } = e;
      B || (S(N, $ ?? o.value, k), s(g));
    };
    return ie(() => e.name, h), ie(() => e.disabled, h), {
      n: Ut,
      classes: Gw,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: V,
      handleClick: C
    };
  }
});
wv.render = qw;
const Oa = wv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var zk = Oa, Xw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Kw,
  classes: Zw
} = Q("tab-item");
function Jw(e, r) {
  var n = ae("var-swipe-item");
  return p(), ye(
    n,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [j(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var Cv = J({
  name: "VarTabItem",
  components: {
    VarSwipeItem: qr
  },
  props: Xw,
  setup(e) {
    var r = M(!1), n = U(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Bb(), {
      bindLists: o
    } = Eb(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: U(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: Kw,
      classes: Zw,
      current: r
    };
  }
});
Cv.render = Jw;
const Pa = Cv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Lk = Pa, Qw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: _w,
  classes: xw
} = Q("table");
function eC(e, r) {
  return p(), T(
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
          style: X({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [j(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Sv = J({
  name: "VarTable",
  props: Qw,
  setup() {
    return {
      toSizeUnit: ge,
      n: _w,
      classes: xw,
      formatElevation: hr
    };
  }
});
Sv.render = eC;
const Va = Sv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Rk = Va;
function us(e) {
  return ["horizontal", "vertical"].includes(e);
}
function rC(e) {
  return ["auto", "always"].includes(e);
}
function nC(e) {
  return ["normal", "reverse"].includes(e);
}
var aC = {
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
    validator: rC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: nC
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Je(Gt, "cssMode"),
  stickyZIndex: Je(Gt, "zIndex"),
  offsetTop: Je(Gt, "offsetTop"),
  onClick: H(),
  onChange: H(),
  "onUpdate:active": H()
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
  n: tC,
  classes: oC
} = Q("tabs");
function iC(e, r) {
  return p(), ye(
    at(e.sticky ? e.n("$-sticky") : e.Transition),
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
          [j(e.$slots, "default"), A(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
              style: X({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("indicator-inner"), e.n("--layout-" + e.layoutDirection + "-indicator-inner"))),
                style: X({
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
var kv = J({
  name: "VarTabs",
  components: {
    VarSticky: Xr
  },
  inheritAttrs: !1,
  props: aC,
  setup(e) {
    var r = M("0px"), n = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = U(() => e.active), s = U(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = U(() => e.activeColor), d = U(() => e.inactiveColor), v = U(() => e.disabledColor), f = U(() => e.itemDirection), m = M(null), {
      tabList: h,
      bindTabList: g,
      length: y
    } = jw(), w = (I) => {
      var Y, q = (Y = I.name.value) != null ? Y : I.index.value, {
        active: x,
        onChange: z,
        onClick: O
      } = e;
      S(e["onUpdate:active"], q), S(O, q), q !== x && S(z, q);
    }, V = () => h.find((I) => {
      var {
        name: Y
      } = I;
      return e.active === Y.value;
    }), C = (I) => h.find((Y) => {
      var {
        index: q
      } = Y;
      return (I ?? e.active) === q.value;
    }), k = () => {
      if (y.value !== 0) {
        var {
          active: I
        } = e;
        if (or(I)) {
          var Y = I > y.value - 1 ? y.value - 1 : 0;
          return S(e["onUpdate:active"], Y), C(Y);
        }
      }
    }, B = () => {
      o.value = e.scrollable === "always" || h.length >= 5;
    }, $ = (I) => {
      var {
        element: Y
      } = I, q = Y.value;
      q && (e.layoutDirection === "horizontal" ? (r.value = q.offsetWidth + "px", a.value = q.offsetLeft + "px") : (n.value = q.offsetHeight + "px", t.value = q.offsetTop + "px"));
    }, N = (I) => {
      var {
        element: Y
      } = I;
      if (o.value) {
        var q = l.value, x = Y.value;
        if (e.layoutDirection === "horizontal") {
          var z = x.offsetLeft + x.offsetWidth / 2 - q.offsetWidth / 2;
          ht(q, {
            left: z,
            animation: Eo
          });
        } else {
          var O = x.offsetTop + x.offsetHeight / 2 - q.offsetHeight / 2;
          ht(q, {
            top: O,
            animation: Eo
          });
        }
      }
    }, b = () => {
      var I = V() || C() || k();
      !I || I.disabled.value || (B(), $(I), N(I));
    }, P = /* @__PURE__ */ function() {
      var I = vs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return I.apply(this, arguments);
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
    return g(D), ie(() => y.value, /* @__PURE__ */ vs(function* () {
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
      n: tC,
      classes: oC,
      resize: b,
      resizeSticky: P,
      formatElevation: hr
    };
  }
});
kv.render = iC;
const Ma = kv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Uk = Ma, lC = {
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
function fs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function sC(e) {
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
  n: uC
} = Q("tabs-items");
function dC(e, r) {
  var n = ae("var-swipe");
  return p(), ye(
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
      default: ve(() => [j(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var $v = J({
  name: "VarTabsItems",
  components: {
    VarSwipe: Gr
  },
  props: lC,
  setup(e) {
    var r = M(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = Mb(), o = (v) => n.find((f) => {
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
      m && (n.forEach((h) => {
        var {
          setCurrent: g
        } = h;
        return g(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((g) => {
        var {
          index: y
        } = g;
        return y.value === v;
      }), h = (f = m.name.value) != null ? f : m.index.value;
      S(e["onUpdate:active"], h);
    }, d = () => r.value;
    return a({}), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ sC(function* () {
      yield Lr(), s(e.active);
    })), {
      swipe: r,
      n: uC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
$v.render = dC;
const Ba = $v;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var Fk = Ba;
const vC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, fC = {
  "--badge-default-color": "#555"
}, cC = {
  "--button-default-color": "#303030"
}, mC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, pC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, hC = {
  "--checkbox-unchecked-color": "#fff"
}, gC = {
  "--chip-default-color": "#555"
}, yC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, bC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, wC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, CC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, SC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, kC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, $C = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, TC = {
  "--popup-content-background-color": "#1e1e1e"
}, OC = {
  "--pull-refresh-background": "#303030"
}, PC = {
  "--radio-unchecked-color": "#fff"
}, VC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, MC = {
  "--select-scroller-background": "#303030"
}, BC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, EC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, IC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, NC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, DC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, AC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, zC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, LC = {
  "--tabs-background": "#1e1e1e"
}, RC = {
  "--app-bar-color": "#272727"
}, UC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, FC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, HC = {
  "--menu-background-color": "#272727"
}, YC = {
  "--breadcrumb-inactive-color": "#aaa"
}, jC = {
  "--paper-background": "#303030"
}, WC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function wi() {
  return wi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, wi.apply(this, arguments);
}
const GC = wi({
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
}, cC, pC, mC, AC, bC, BC, LC, NC, TC, wC, vC, gC, fC, zC, yC, OC, IC, EC, kC, DC, SC, MC, PC, hC, CC, $C, RC, UC, FC, HC, VC, YC, jC, WC);
var qC = {
  dark: GC
}, Hk = null;
const Ci = qC;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], tr = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], cs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function XC(e) {
  return ["ampm", "24hr"].includes(e);
}
var KC = {
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
    validator: XC
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
}, Tv = (e, r) => e === "24hr" || r === "am", Ki = (e, r, n) => {
  var a = Cr.findIndex((o) => R(o) === R(n)), t = Tv(e, r) ? n : tr[a];
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
  } = Ki(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: h,
      minute: g
    } = fr(i);
    f = h === v && a > g;
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
      hour: V,
      minute: C
    } = fr(i), {
      hour: k,
      minute: B
    } = fr(s);
    f = k === v && a < B || V === v && a > C;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, Pv = (e) => {
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
  } = Ki(t, o, l), m = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: g,
      minute: y,
      second: w
    } = fr(s);
    m = g === f && y < i || y === i && a > w;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: C,
      second: k
    } = fr(u);
    m = V === f && C > i || C === i && a > k;
  }
  if (s && u) {
    var {
      hour: B,
      minute: $,
      second: N
    } = fr(s), {
      hour: b,
      minute: P,
      second: D
    } = fr(u);
    m = B === f && $ < i || b === f && P > i || B === f && $ === i && a > N || b === f && P === i && a < D;
  }
  return (r = e.allowedTime) != null && r.seconds && (h = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || h;
}, {
  n: ZC,
  classes: JC
} = Q("time-picker");
function QC(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n("clock"))
    },
    [A(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: X(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), T(
      Ve,
      null,
      Ue(e.timeScales, (n, a) => (p(), T(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: X(e.getStyle(a, n, !1))
        },
        re(n),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), T(
        Ve,
        null,
        Ue(e.hours24, (n, a) => (p(), T(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: X(e.getStyle(a, n, !0))
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Vv = J({
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
    } = r, a = M(null), t = M([]), o = M([]), l = U(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = U(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = U(() => e.type === "hour" ? Cr : cs), u = (y, w) => {
      var V;
      y = (V = y) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var C = e.type === "minute" ? Ov : Pv, k = {
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
      return s.value === cs ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, w) => w ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Tv(e.format, e.ampm))
          return t.value.includes(y);
        var w = Cr.findIndex((V) => V === y);
        return o.value.includes(w);
      }
      return u(y, !0);
    }, m = (y, w, V) => {
      var C = 2 * Math.PI / 12 * y - Math.PI / 2, k = 50 * (1 + Math.cos(C)), B = 50 * (1 + Math.sin(C)), $ = () => v(y, V) ? f(w) ? {
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
        color: b
      } = $();
      return {
        left: k + "%",
        top: B + "%",
        backgroundColor: N,
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
        var y = e.ampm === "am" ? Cr : tr;
        return Na(y[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (y, w) => {
      var [V, C] = y, [k, B] = w, $ = V === k && C === B;
      if (!($ || e.type !== "hour" || i.value === void 0)) {
        var N = C ? tr[i.value] : g(), b = e.useSeconds ? ":" + e.time.second : "", P = N + ":" + e.time.minute + b;
        e.preventNextUpdate || n("update", P), n("change-prevent-update");
      }
    }), ie(() => e.rad, (y, w) => {
      if (!(e.type === "hour" || y === void 0 || w === void 0)) {
        var V = y / 6 >= 0 ? y / 6 : y / 6 + 60, C = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (V !== C) {
          var k, {
            hourStr: B
          } = Ki(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var $ = le().minute(V).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            k = B + ":" + $ + N;
          }
          if (e.type === "second") {
            var b = le().second(V).format("ss"), P = e.useSeconds ? ":" + b : "";
            k = B + ":" + e.time.minute + P;
          }
          n("update", k);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [w, V, C] = y;
      if (t.value = [], w && !V) {
        var {
          hour: k
        } = fr(w), B = Cr.filter((F) => R(F) > k), $ = tr.filter((F) => R(F) > k);
        t.value = [...B, ...$];
      }
      if (!w && V) {
        var {
          hour: N
        } = fr(V), b = Cr.filter((F) => R(F) < N), P = tr.filter((F) => R(F) < N);
        t.value = [...b, ...P];
      }
      if (w && V) {
        var {
          hour: D
        } = fr(w), {
          hour: I
        } = fr(V), Y = Cr.filter((F) => R(F) < I || R(F) > D), q = tr.filter((F) => R(F) < I || R(F) > D);
        t.value = [...Y, ...q];
      }
      if (C != null && C.hours) {
        var {
          hours: x
        } = C, z = Cr.filter((F) => !x(R(F))), O = tr.filter((F) => !x(R(F)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...z, ...O])];
      }
      o.value = t.value.map((F) => tr.findIndex((te) => F === te)).filter((F) => F >= 0);
    }, {
      immediate: !0
    }), {
      n: ZC,
      classes: JC,
      hours24: tr,
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
Vv.render = QC;
const _C = Vv;
var {
  n: xC,
  classes: eS
} = Q("time-picker"), rS = (e) => (Ua(""), e = e(), Fa(), e), nS = /* @__PURE__ */ rS(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), aS = {
  key: 0
};
function tS(e, r) {
  var n = ae("clock");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: X({
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
        ), nS, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), T("span", aS, ":")) : _("v-if", !0), e.useSeconds ? (p(), T(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          re(e.time.second),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), T(
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
      )) : _("v-if", !0)],
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
        [Z(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), ye(
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
var Mv = J({
  name: "VarTimePicker",
  components: {
    Clock: _C
  },
  props: KC,
  setup(e) {
    var r = M(null), n = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), h = M(!1), g = M(!1), y = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ae({
      x: 0,
      y: 0
    }), V = Ae({
      x: [],
      y: []
    }), C = U(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), k = (L) => {
      S(e["onUpdate:modelValue"], L), S(e.onChange, L);
    }, B = (L) => L * 57.29577951308232, $ = (L) => {
      i.value = !1, g.value = !1, f.value = L;
    }, N = (L) => {
      var {
        disableHour: E
      } = a.value, G = Cr.findIndex((de) => R(de) === R(y.value.hour)), ee = L === "am" ? Cr : tr, se = [...ee.slice(G), ...ee.slice(0, G)];
      return se.find((de, we) => (o.value = we !== 0, !E.includes(de)));
    }, b = (L) => {
      if (!e.readonly) {
        m.value = L;
        var E = N(L);
        if (E) {
          var G = e.useSeconds ? ":" + y.value.second : "", ee = Na(E, 2, "0") + ":" + y.value.minute + G;
          k(ee);
        }
      }
    }, P = (L, E) => {
      var G = L >= V.x[0] && L <= V.x[1], ee = E >= V.y[0] && E <= V.y[1];
      return G && ee;
    }, D = (L) => {
      var E = e.format === "24hr" ? "HH" : "hh", {
        hour: G,
        minute: ee,
        second: se
      } = fr(L);
      return {
        hour: le().hour(G).format(E),
        minute: le().minute(ee).format("mm"),
        second: le().second(se).format("ss")
      };
    }, I = (L) => {
      var E = L / 30;
      return E >= 0 ? E : E + 12;
    }, Y = () => {
      var {
        width: L,
        height: E
      } = a.value.getSize(), G = w.x - L / 2 - 8, ee = w.x + L / 2 + 8, se = w.y - E / 2 - 8, de = w.y + E / 2 + 8;
      return {
        rangeXMin: G,
        rangeXMax: ee,
        rangeYMin: se,
        rangeYMax: de
      };
    }, q = (L, E, G) => {
      var {
        disableHour: ee
      } = a.value;
      l.value = P(L, E);
      var se = Math.round(G / 30) * 30 + 90, de = I(se), we = t.value ? Cr[de] : tr[de];
      if (ee.includes(we) || (t.value = e.format === "24hr" ? P(L, E) : !1), t.value === l.value) {
        var Pe = t.value || m.value === "pm" ? tr[de] : Cr[de];
        h.value = ee.includes(Pe), !h.value && (u.value = se, i.value = !0);
      }
    }, x = (L) => {
      var {
        disableHour: E
      } = a.value, G = Math.round(L / 6) * 6 + 90, ee = G / 6 >= 0 ? G / 6 : G / 6 + 60, se = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: E,
        allowedTime: e.allowedTime
      };
      g.value = Ov(se), !g.value && (d.value = G, s.value = !0);
    }, z = (L) => {
      var {
        disableHour: E
      } = a.value, G = Math.round(L / 6) * 6 + 90, ee = G / 6 >= 0 ? G / 6 : G / 6 + 60, se = {
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
      Pv(se) || (v.value = G);
    }, O = () => {
      var {
        left: L,
        top: E,
        width: G,
        height: ee
      } = r.value.getBoundingClientRect();
      if (w.x = L + G / 2, w.y = E + ee / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: se,
          rangeXMax: de,
          rangeYMin: we,
          rangeYMax: Pe
        } = Y();
        V.x = [se, de], V.y = [we, Pe];
      }
    }, F = (L) => {
      if (L.preventDefault(), !e.readonly) {
        O();
        var {
          clientX: E,
          clientY: G
        } = L.touches[0], ee = E - w.x, se = G - w.y, de = Math.round(B(Math.atan2(se, ee)));
        f.value === "hour" ? q(E, G, de) : f.value === "minute" ? x(de) : z(de);
      }
    }, te = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, W = () => {
      o.value = !1;
    };
    return ie(() => e.modelValue, (L) => {
      if (L) {
        var {
          hour: E,
          minute: G,
          second: ee
        } = fr(L), se = le().hour(E).format("hh"), de = le().hour(E).format("HH"), we = le().minute(G).format("mm"), Pe = le().second(ee).format("ss");
        u.value = (se === "12" ? 0 : R(se)) * 30, d.value = R(we) * 6, v.value = R(Pe) * 6, y.value = D(L), e.format !== "24hr" && (m.value = Na("" + E, 2, "0") === de && tr.includes(de) ? "pm" : "am"), t.value = e.format === "24hr" && tr.includes(de);
      }
    }, {
      immediate: !0
    }), {
      n: xC,
      classes: eS,
      getRad: C,
      time: y,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: F,
      checkPanel: $,
      checkAmpm: b,
      end: te,
      update: k,
      changePreventUpdate: W,
      formatElevation: hr
    };
  }
});
Mv.render = tS;
const Ea = Mv;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var Yk = Ea, oS = {
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
function ms(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Mo(e) {
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
  n: iS,
  classes: lS
} = Q("uploader"), sS = 0, uS = ["onClick"], dS = ["onClick"], vS = ["src", "alt"], fS = ["multiple", "accept", "capture", "disabled"], cS = ["src"];
function mS(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = ae("var-popup"), l = Ie("ripple"), i = Ie("hover");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), T(
        Ve,
        null,
        Ue(e.files, (s) => ke((p(), T(
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
          ), e.removable ? (p(), T(
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
            dS
          )) : _("v-if", !0), s.cover ? (p(), T(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: X({
                objectFit: s.fit
              }),
              src: s.cover,
              alt: s.name
            },
            null,
            14,
            vS
          )) : _("v-if", !0), A(
            "div",
            {
              class: c(e.n("file-indicator"))
            },
            [A(
              "div",
              {
                class: c(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
                style: X({
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
          uS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((p(), T(
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
          fS
        ), j(e.$slots, "default", {}, () => [Z(
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
      }], [i, e.handleHovering, "desktop"]]) : _("v-if", !0)],
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
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), T(
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
            cS
          )) : _("v-if", !0)];
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
var Bv = J({
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
  props: oS,
  setup(e) {
    var r = M(null), n = M(!1), a = M(null), t = U(() => {
      var {
        maxlength: F,
        modelValue: {
          length: te
        }
      } = e;
      return or(F) ? te + " / " + F : "";
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
    } = On(), m = U(() => {
      var {
        modelValue: F,
        hideList: te
      } = e;
      return te ? [] : F;
    }), h = (F) => {
      var {
        disabled: te,
        readonly: W,
        previewed: L
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || te || W || !L)) {
        var {
          url: E
        } = F;
        if (Fe(E) && xi(E)) {
          zr(E);
          return;
        }
        Fe(E) && el(E) && (a.value = F, n.value = !0);
      }
    }, g = (F) => ({
      id: sS++,
      url: "",
      cover: "",
      name: F.name,
      file: F,
      progress: 0
    }), y = (F) => {
      var te = F.target, {
        files: W
      } = te;
      return Array.from(W);
    }, w = (F) => new Promise((te) => {
      if (!F.file.type.startsWith("image")) {
        te(F);
        return;
      }
      var W = new FileReader();
      W.onload = () => {
        var L = W.result;
        F.cover = L, F.url = L, te(F);
      }, W.readAsDataURL(F.file);
    }), V = (F) => F.map(w), C = (F) => {
      var {
        onBeforeRead: te
      } = e;
      return F.map((W) => new Promise((L) => {
        te || L({
          valid: !0,
          varFile: W
        });
        var E = Ft(S(te, Ae(W)));
        Promise.all(E).then((G) => {
          L({
            valid: G.every(Boolean),
            varFile: W
          });
        });
      }));
    }, k = /* @__PURE__ */ function() {
      var F = Mo(function* (te) {
        var {
          maxsize: W,
          maxlength: L,
          modelValue: E,
          onOversize: G,
          onAfterRead: ee,
          onBeforeFilter: se,
          readonly: de,
          disabled: we
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || we || de)) {
          var Pe = (He) => He.filter((Ye) => Ye.file.size > R(W) ? (S(G, Ae(Ye)), !1) : !0), ur = (He) => {
            var Ye = Math.min(He.length, R(L) - E.length);
            return He.slice(0, Ye);
          }, ne = /* @__PURE__ */ function() {
            var He = Mo(function* (Ye) {
              if (!se)
                return Ye;
              var oe = Ft(se);
              for (var be of oe)
                Ye = yield be(Ye);
              return Ye;
            });
            return function(oe) {
              return He.apply(this, arguments);
            };
          }(), ue = y(te), me = ue.map(g);
          me = yield ne(me), me = W != null ? Pe(me) : me, me = L != null ? ur(me) : me;
          var De = yield Promise.all(V(me)), Ke = yield Promise.all(C(De)), Ge = Ke.filter((He) => {
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
      return function(W) {
        return F.apply(this, arguments);
      };
    }(), B = /* @__PURE__ */ function() {
      var F = Mo(function* (te) {
        var {
          disabled: W,
          readonly: L,
          modelValue: E,
          onBeforeRemove: G,
          onRemove: ee
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || W || L)) {
          if (G) {
            var se = Ft(S(G, Ae(te)));
            if ((yield Promise.all(se)).some((we) => !we))
              return;
          }
          var de = E.filter((we) => we !== te);
          S(ee, Ae(te)), Y("onRemove"), S(e["onUpdate:modelValue"], de);
        }
      });
      return function(W) {
        return F.apply(this, arguments);
      };
    }(), $ = () => e.modelValue.filter((F) => F.state === "success"), N = () => e.modelValue.filter((F) => F.state === "error"), b = () => e.modelValue.filter((F) => F.state === "loading"), P = () => {
      r.value.click();
    }, D = () => {
      a.value = null, n.value = !1, zr.close();
    }, I = {
      getSuccess: $,
      getError: N,
      getLoading: b
    }, Y = (F) => {
      Ne(() => {
        var {
          validateTrigger: te,
          rules: W,
          modelValue: L
        } = e;
        s(te, F, W, L, I);
      });
    }, q = !1, x = () => u(e.rules, e.modelValue, I), z = () => {
      q = !0, S(e["onUpdate:modelValue"], []), d();
    }, O = {
      validate: x,
      resetValidation: d,
      reset: z
    };
    return S(l, O), ie(() => e.modelValue, () => {
      !q && Y("onChange"), q = !1;
    }, {
      deep: !0
    }), {
      n: iS,
      classes: lS,
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
      isHTMLSupportVideo: el,
      isHTMLSupportImage: xi,
      preview: h,
      handleChange: k,
      handleRemove: B,
      getSuccess: $,
      getError: N,
      getLoading: b,
      validate: x,
      resetValidation: d,
      reset: z,
      chooseFile: P,
      closePreview: D,
      toSizeUnit: ge
    };
  }
});
Bv.render = mS;
const Ia = Bv;
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
var jk = Ia;
const pS = "2.11.1";
function hS(e) {
  Jr.install && e.use(Jr), Dn.install && e.use(Dn), An.install && e.use(An), zn.install && e.use(zn), Ln.install && e.use(Ln), mn.install && e.use(mn), Rn.install && e.use(Rn), Un.install && e.use(Un), Fn.install && e.use(Fn), Hn.install && e.use(Hn), er.install && e.use(er), Yn.install && e.use(Yn), jn.install && e.use(jn), pn.install && e.use(pn), hn.install && e.use(hn), Wn.install && e.use(Wn), gn.install && e.use(gn), Gn.install && e.use(Gn), qn.install && e.use(qn), Xn.install && e.use(Xn), yr.install && e.use(yr), Kn.install && e.use(Kn), Zn.install && e.use(Zn), Qn.install && e.use(Qn), Qr.install && e.use(Qr), _n.install && e.use(_n), xn.install && e.use(xn), ea.install && e.use(ea), Wr.install && e.use(Wr), _e.install && e.use(_e), Rr.install && e.use(Rr), cr.install && e.use(cr), Oe.install && e.use(Oe), ra.install && e.use(ra), zr.install && e.use(zr), na.install && e.use(na), aa.install && e.use(aa), Sn.install && e.use(Sn), gt.install && e.use(gt), ta.install && e.use(ta), oa.install && e.use(oa), Nr.install && e.use(Nr), mi.install && e.use(mi), Ro.install && e.use(Ro), Kr.install && e.use(Kr), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), La.install && e.use(La), Sr.install && e.use(Sr), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), We.install && e.use(We), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), bi.install && e.use(bi), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), Xr.install && e.use(Xr), St.install && e.use(St), Gr.install && e.use(Gr), qr.install && e.use(qr), Ta.install && e.use(Ta), Oa.install && e.use(Oa), Pa.install && e.use(Pa), Va.install && e.use(Va), Ma.install && e.use(Ma), Ba.install && e.use(Ba), Ci.install && e.use(Ci), Ea.install && e.use(Ea), wn.install && e.use(wn), Ia.install && e.use(Ia);
}
const Wk = {
  version: pS,
  install: hS,
  ActionSheet: Jr,
  AppBar: Dn,
  Avatar: An,
  AvatarGroup: zn,
  BackTop: Ln,
  Badge: mn,
  BottomNavigation: Rn,
  BottomNavigationItem: Un,
  Breadcrumb: Fn,
  Breadcrumbs: Hn,
  Button: er,
  ButtonGroup: Yn,
  Card: jn,
  Cell: pn,
  Checkbox: hn,
  CheckboxGroup: Wn,
  Chip: gn,
  Col: Gn,
  Collapse: qn,
  CollapseItem: Xn,
  Context: yr,
  Countdown: Kn,
  Counter: Zn,
  DatePicker: Qn,
  Dialog: Qr,
  Divider: _n,
  Ellipsis: xn,
  Fab: ea,
  Form: Wr,
  FormDetails: _e,
  Hover: Rr,
  HoverOverlay: cr,
  Icon: Oe,
  Image: ra,
  ImagePreview: zr,
  IndexAnchor: na,
  IndexBar: aa,
  Input: Sn,
  Lazy: gt,
  Link: ta,
  List: oa,
  Loading: Nr,
  LoadingBar: mi,
  Locale: Ro,
  Menu: Kr,
  Option: ia,
  Overlay: la,
  Pagination: sa,
  Paper: ua,
  Picker: La,
  Popup: Sr,
  Progress: da,
  PullRefresh: va,
  Radio: fa,
  RadioGroup: ca,
  Rate: ma,
  Result: pa,
  Ripple: We,
  Row: ha,
  Select: ga,
  Skeleton: ya,
  Slider: ba,
  Snackbar: bi,
  Space: Ca,
  Step: Sa,
  Steps: ka,
  Sticky: Xr,
  StyleProvider: St,
  Swipe: Gr,
  SwipeItem: qr,
  Switch: Ta,
  Tab: Oa,
  TabItem: Pa,
  Table: Va,
  Tabs: Ma,
  TabsItems: Ba,
  Themes: Ci,
  TimePicker: Ea,
  Tooltip: wn,
  Uploader: Ia
};
export {
  Jr as ActionSheet,
  Dn as AppBar,
  An as Avatar,
  zn as AvatarGroup,
  Ln as BackTop,
  mn as Badge,
  Rn as BottomNavigation,
  Un as BottomNavigationItem,
  Fn as Breadcrumb,
  Hn as Breadcrumbs,
  er as Button,
  Yn as ButtonGroup,
  jn as Card,
  pn as Cell,
  hn as Checkbox,
  Wn as CheckboxGroup,
  gn as Chip,
  Gn as Col,
  qn as Collapse,
  Xn as CollapseItem,
  yr as Context,
  Kn as Countdown,
  Zn as Counter,
  Qn as DatePicker,
  Qr as Dialog,
  _n as Divider,
  xn as Ellipsis,
  ea as Fab,
  Wr as Form,
  _e as FormDetails,
  Rr as Hover,
  cr as HoverOverlay,
  Oe as Icon,
  ra as Image,
  zr as ImagePreview,
  na as IndexAnchor,
  aa as IndexBar,
  Sn as Input,
  gt as Lazy,
  ta as Link,
  oa as List,
  Nr as Loading,
  mi as LoadingBar,
  Ro as Locale,
  Kr as Menu,
  ia as Option,
  la as Overlay,
  Ho as PIXEL,
  sa as Pagination,
  ua as Paper,
  La as Picker,
  Sr as Popup,
  da as Progress,
  va as PullRefresh,
  fa as Radio,
  ca as RadioGroup,
  ma as Rate,
  pa as Result,
  We as Ripple,
  ha as Row,
  qi as SNACKBAR_TYPE,
  ga as Select,
  ya as Skeleton,
  ba as Slider,
  bi as Snackbar,
  Ca as Space,
  Sa as Step,
  ka as Steps,
  Xr as Sticky,
  St as StyleProvider,
  Gr as Swipe,
  qr as SwipeItem,
  Ta as Switch,
  Oa as Tab,
  Pa as TabItem,
  Va as Table,
  Ma as Tabs,
  Ba as TabsItems,
  Ci as Themes,
  Ea as TimePicker,
  wn as Tooltip,
  Ia as Uploader,
  kS as _ActionSheetComponent,
  $S as _AppBarComponent,
  OS as _AvatarComponent,
  PS as _AvatarGroupComponent,
  IS as _BackTopComponent,
  NS as _BadgeComponent,
  DS as _BottomNavigationComponent,
  AS as _BottomNavigationItemComponent,
  zS as _BreadcrumbComponent,
  LS as _BreadcrumbsComponent,
  ES as _ButtonComponent,
  RS as _ButtonGroupComponent,
  US as _CardComponent,
  FS as _CellComponent,
  YS as _CheckboxComponent,
  jS as _CheckboxGroupComponent,
  WS as _ChipComponent,
  GS as _ColComponent,
  qS as _CollapseComponent,
  XS as _CollapseItemComponent,
  yS as _ContextComponent,
  KS as _CountdownComponent,
  ZS as _CounterComponent,
  JS as _DatePickerComponent,
  QS as _DialogComponent,
  _S as _DividerComponent,
  ek as _EllipsisComponent,
  rk as _FabComponent,
  nk as _FormComponent,
  HS as _FormDetailsComponent,
  BS as _HoverComponent,
  MS as _HoverOverlayComponent,
  CS as _IconComponent,
  ak as _ImageComponent,
  ik as _ImagePreviewComponent,
  sk as _IndexAnchorComponent,
  uk as _IndexBarComponent,
  dk as _InputComponent,
  TS as _LazyComponent,
  vk as _LinkComponent,
  fk as _ListComponent,
  ck as _LoadingBarComponent,
  VS as _LoadingComponent,
  SS as _LocaleComponent,
  mk as _MenuComponent,
  pk as _OptionComponent,
  hk as _OverlayComponent,
  gk as _PaginationComponent,
  yk as _PaperComponent,
  bk as _PickerComponent,
  wS as _PopupComponent,
  wk as _ProgressComponent,
  Ck as _PullRefreshComponent,
  Sk as _RadioComponent,
  kk as _RadioGroupComponent,
  $k as _RateComponent,
  Tk as _ResultComponent,
  bS as _RippleComponent,
  Ok as _RowComponent,
  Pk as _SelectComponent,
  Vk as _SkeletonComponent,
  Mk as _SliderComponent,
  Bk as _SnackbarComponent,
  Ek as _SpaceComponent,
  Ik as _StepComponent,
  Nk as _StepsComponent,
  lk as _StickyComponent,
  Dk as _StyleProviderComponent,
  tk as _SwipeComponent,
  ok as _SwipeItemComponent,
  Ak as _SwitchComponent,
  zk as _TabComponent,
  Lk as _TabItemComponent,
  Rk as _TableComponent,
  Uk as _TabsComponent,
  Fk as _TabsItemsComponent,
  Hk as _ThemesComponent,
  Yk as _TimePickerComponent,
  xS as _TooltipComponent,
  jk as _UploaderComponent,
  wf as actionSheetProps,
  Vi as add,
  Pf as appBarProps,
  _f as avatarGroupProps,
  qf as avatarProps,
  Mc as backTopProps,
  Ac as badgeProps,
  Gc as bottomNavigationItemProps,
  Uc as bottomNavigationProps,
  Qc as breadcrumbProps,
  am as breadcrumbsProps,
  Sc as buttonProps,
  mm as cardProps,
  wm as cellProps,
  Lm as checkboxGroupProps,
  Mm as checkboxProps,
  jm as chipProps,
  Zm as colProps,
  op as collapseItemProps,
  rp as collapseProps,
  up as countdownProps,
  oh as counterProps,
  Oh as datePickerProps,
  Wk as default,
  qe as defaultLazyOptions,
  jh as dialogProps,
  Kh as dividerProps,
  Ls as enUS,
  $m as formDetailsProps,
  Cy as formProps,
  As as iconProps,
  Ys as imageCache,
  jy as imagePreviewProps,
  Oy as imageProps,
  eb as indexAnchorProps,
  tb as indexBarProps,
  pb as inputProps,
  hS as install,
  $b as linkProps,
  Vb as listProps,
  Lb as loadingBarProps,
  un as loadingProps,
  Kb as menuProps,
  Us as merge,
  e0 as optionProps,
  t0 as overlayProps,
  Ze as pack,
  Rs as packs,
  i0 as paginationProps,
  v0 as paperProps,
  p0 as pickerProps,
  Vt as popupProps,
  T0 as progressProps,
  I0 as pullRefreshProps,
  Y0 as radioGroupProps,
  A0 as radioProps,
  q0 as rateProps,
  J0 as resultProps,
  z1 as rowProps,
  H1 as selectProps,
  q1 as skeletonProps,
  Q1 as sliderProps,
  sv as snackbarProps,
  Cw as spaceProps,
  $w as stepProps,
  Iw as stepsProps,
  Gt as stickyProps,
  Aw as styleProviderProps,
  gd as swipeProps,
  Rw as switchProps,
  Xw as tabItemProps,
  Yw as tabProps,
  Qw as tableProps,
  lC as tabsItemsProps,
  aC as tabsProps,
  KC as timePickerProps,
  iy as tooltipProps,
  oS as uploaderProps,
  Mi as use,
  On as useHoverOverlay,
  Pi as useLocale,
  pS as version,
  Oi as zhCN
};
