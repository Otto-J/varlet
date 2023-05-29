import { reactive as Ae, onMounted as ao, nextTick as Ne, onActivated as Mn, isRef as Nv, watch as ie, onBeforeUnmount as kt, onDeactivated as xr, unref as ut, inject as Dv, getCurrentInstance as rt, computed as L, provide as Av, isVNode as $t, Comment as zv, Fragment as Ve, ref as M, createApp as Lv, h as ps, onBeforeMount as Rv, onUnmounted as nt, defineComponent as Q, createVNode as Z, Teleport as Ra, Transition as Le, withDirectives as ke, vShow as $n, mergeProps as Be, openBlock as p, createBlock as ye, resolveDynamicComponent as at, normalizeClass as c, normalizeStyle as G, resolveComponent as ae, resolveDirective as Ie, withCtx as ve, createElementVNode as z, renderSlot as Y, toDisplayString as re, createElementBlock as P, renderList as Ue, createCommentVNode as x, onUpdated as Tt, createTextVNode as Ce, pushScopeId as Ua, popScopeId as Fa, withModifiers as Tr, normalizeProps as Pt, guardReactiveProps as to, vModelText as Uv, toRefs as Fv, withKeys as Qi, toRaw as _i, TransitionGroup as Hv } from "vue";
var hs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, wS = Ae(hs);
const yr = Ae(hs), Fe = (e) => typeof e == "string", Bo = (e) => typeof e == "boolean", ir = (e) => typeof e == "number", ki = (e) => Object.prototype.toString.call(e) === "[object Object]", Yv = (e) => typeof e == "object" && e !== null, Ot = (e) => typeof e == "function", Te = (e) => Array.isArray(e), jv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, fn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, $i = (e) => e === window, U = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Bo(e) ? Number(e) : e, qt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, Ti = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, tt = () => typeof window < "u", xi = (e) => [...new Set(e)], gs = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), Wv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Gv = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ft = (e) => Te(e) ? e : [e];
var el = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), rl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), qv = (e) => {
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
}, Io = (e) => e, nl = (e) => Math.pow(e, 3), ys = (e) => e < 0.5 ? nl(e * 2) / 2 : 1 - nl((1 - e) * 2) / 2, oo = (e, r) => e ?? r, bs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Na = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Pr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function al(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
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
function Da(e) {
  return window.getComputedStyle(e);
}
function We(e) {
  if ($i(e)) {
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
    return No({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function Xv(e) {
  var {
    left: r
  } = We(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function tl(e) {
  var {
    top: r
  } = We(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pt(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Pi(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function Kv(e) {
  var {
    top: r,
    bottom: n,
    left: a,
    right: t
  } = We(e), {
    width: o,
    height: l
  } = We(window), i = a <= o && t >= 0, s = r <= l && n >= 0;
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
  for (var r = [], n = e; !$i(n); )
    n = Tn(n), r.push(n);
  return r;
}
function ws(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Pr(r, "target element cannot found"), n;
  }
  if (Yv(e))
    return e;
  Pr(r, 'type of prop "target" should be a selector or an element object');
}
function ol() {
  var {
    width: e,
    height: r
  } = We(window);
  return e > r ? {
    vMin: r,
    vMax: e
  } : {
    vMin: e,
    vMax: r
  };
}
var Cs = (e) => Fe(e) && e.endsWith("rem"), Jv = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), Qv = (e) => Fe(e) && e.endsWith("px") || ir(e), _v = (e) => Fe(e) && e.endsWith("%"), Ss = (e) => Fe(e) && e.endsWith("vw"), ks = (e) => Fe(e) && e.endsWith("vh"), $s = (e) => Fe(e) && e.endsWith("vmin"), Ts = (e) => Fe(e) && e.endsWith("vmax"), xv = (e) => Fe(e) && e.startsWith("calc("), ef = (e) => Fe(e) && e.startsWith("var("), je = (e) => {
  if (ir(e))
    return e;
  if (Qv(e))
    return +e.replace("px", "");
  if (!tt())
    return 0;
  var {
    width: r,
    height: n
  } = We(window);
  if (Ss(e))
    return +e.replace("vw", "") * r / 100;
  if (ks(e))
    return +e.replace("vh", "") * n / 100;
  if (Cs(e)) {
    var a = +e.replace("rem", ""), t = Da(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return $s(e) ? ol().vMin : Ts(e) ? ol().vMax : Fe(e) ? U(e) : 0;
}, ge = (e) => {
  if (e != null)
    return _v(e) || Ss(e) || ks(e) || Jv(e) || Cs(e) || xv(e) || ef(e) || $s(e) || Ts(e) ? e : je(e) + "px";
}, tr = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = ge(e), a = n.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = bs();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function il(e) {
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
  } = r, l = Date.now(), i = pt(e), s = Pi(e);
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
function Ps(e) {
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
function lr(e) {
  let r = !1;
  ao(() => {
    e(), Ne(() => {
      r = !0;
    });
  }), Mn(() => {
    r && e();
  });
}
function Rr(e, r, n, a = {}) {
  if (!tt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Ot(m) ? m() : ut(m), u = (m) => {
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
  Nv(e) && (v = ie(() => e.value, (m, g) => {
    d(g), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return lr(() => {
    u(e);
  }), kt(() => {
    d(e);
  }), xr(() => {
    d(e);
  }), f;
}
function Os(e, r, n) {
  if (!tt())
    return;
  Rr(document, r, (t) => {
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
function sr(e) {
  if (!tf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Dv(e), { childInstances: n, collect: a, clear: t } = r, o = af(r, ["childInstances", "collect", "clear"]), l = rt();
  return {
    index: L(() => n.indexOf(l)),
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
function ur(e) {
  const r = rt(), n = Ae([]), a = [], t = L(() => n.length), o = () => {
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
function ll(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function sl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ll(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
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
function Qe(e, r) {
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
      return () => ps(e, Do({}, r, n));
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
function Or() {
  var e = M(""), r = /* @__PURE__ */ function() {
    var t = sl(function* (o, l, i) {
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
    var t = sl(function* (o, l, i, s, u) {
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
  Rr(() => window, "hashchange", e), Rr(() => window, "popstate", e);
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
function k(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  if (Te(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function F(e) {
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
    return L({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : k(e[i], d);
      }
    });
  var u = M(s());
  return ie(() => e[r], () => {
    u.value = s();
  }), ie(() => u.value, (d) => {
    l ? l(i, d) : k(e[i], d);
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
  n: Es
} = _("ripple"), ul = 250;
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
  } = We(e), {
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
      } = df(this, e), s = document.createElement("div");
      s.classList.add(Es()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), uf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function Ao() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Es());
    if (n.length) {
      var a = n[n.length - 1], t = ul - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, ul);
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
    removeRipple: Ao.bind(e)
  }), e.addEventListener("touchstart", Bs, {
    passive: !0
  }), e.addEventListener("touchmove", Is, {
    passive: !0
  }), e.addEventListener("dragstart", Ao, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function ff(e) {
  e.removeEventListener("touchstart", Bs), e.removeEventListener("touchmove", Is), e.removeEventListener("dragstart", Ao), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
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
}, CS = Ns;
const Ge = Ns;
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  onClickOverlay: F(),
  "onUpdate:show": F(),
  // internal for Dialog
  onRouteChange: F()
};
function Ds() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Bt(e) {
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
    a === !1 ? It(n) : a === !0 && e() === !0 && Bt(n);
  }), ie(e, (a) => {
    r && r() === !1 || (a === !0 ? Bt(n) : It(n));
  }), Rv(() => {
    r && r() === !1 || e() === !0 && Bt(n);
  }), nt(() => {
    r && r() === !1 || e() === !0 && It(n);
  }), Mn(() => {
    r && r() === !1 || e() === !0 && Bt(n);
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
function pf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: Er,
  classes: $o
} = _("popup");
const Sr = Q({
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
      k(v), d && k(e["onUpdate:show"], !1);
    };
    so(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), sf(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Z("div", {
        class: $o(Er("overlay"), d),
        style: zo({
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
        position: h
      } = e;
      return Z(Le, {
        name: Er("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(Z("div", {
          class: $o(Er("$--box"), Er()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), Z(Le, {
          name: g || Er("$-pop-" + h)
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
var SS = Sr, As = {
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
  onClick: F()
};
function dl(e, r, n, a, t, o, l) {
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
        dl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        dl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: gf,
  classes: yf
} = _("icon");
function bf(e, r) {
  return p(), ye(
    at(e.isURL(e.name) ? "img" : "i"),
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
var zs = Q({
  name: "VarIcon",
  props: As,
  setup(e) {
    var r = M(""), n = M(!1), a = /* @__PURE__ */ function() {
      var t = hf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || U(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield Ne(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, U(i));
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
      toNumber: U,
      toSizeUnit: ge
    };
  }
});
zs.render = bf;
const Pe = zs;
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
var kS = Pe;
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
var wf = Lo({
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
  onSelect: F(),
  "onUpdate:show": F()
}, Qe(Vt, [
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
function Vi() {
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
    e[o] = Ro({}, e[o], l), a(o);
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
  pack: Je,
  add: Mi,
  use: Ei,
  merge: Us
} = Vi();
Mi("zh-CN", Oi);
Ei("zh-CN");
var $S = {
  zhCN: Oi,
  enUS: Ls,
  packs: Rs,
  pack: Je,
  add: Mi,
  use: Ei,
  merge: Us,
  useLocale: Vi
};
const Uo = {
  zhCN: Oi,
  enUS: Ls,
  packs: Rs,
  pack: Je,
  add: Mi,
  use: Ei,
  merge: Us,
  useLocale: Vi
};
var {
  n: Cf,
  classes: Sf
} = _("action-sheet"), kf = ["onClick"];
function $f(e, r) {
  var n = ae("var-icon"), a = ae("var-popup"), t = Ie("ripple");
  return p(), ye(
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
      default: ve(() => [z(
        "div",
        Be({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [Y(e.$slots, "title", {}, () => [z(
          "div",
          {
            class: c(e.n("title"))
          },
          re(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), Y(e.$slots, "actions", {}, () => [(p(!0), P(
          Ve,
          null,
          Ue(e.actions, (o) => ke((p(), P(
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
            )) : x("v-if", !0), z(
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
var Fs = Q({
  name: "VarActionSheet",
  directives: {
    Ripple: Ge
  },
  components: {
    VarPopup: Sr,
    VarIcon: Pe
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
        k(l, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: Cf,
      classes: Sf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: Je,
      dt: oo,
      handleSelect: n
    };
  }
});
Fs.render = $f;
const cn = Fs;
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
var on, Bi = {};
function Tf(e) {
  return e === void 0 && (e = {}), Fo({}, Bi, e);
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
        k(n.onSelect, t), r(t);
      },
      onClose: () => {
        k(n.onClose), r("close");
      },
      onClosed: () => {
        k(n.onClosed), a(), on === n && (on = null);
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
var TS = cn;
function Pf(e) {
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
    validator: Pf
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
} = _("app-bar");
function Ef(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: G(e.rootStyles)
    },
    [z(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [z(
        "div",
        {
          class: c(e.n("left"))
        },
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
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
      ), e.titlePosition === "center" ? (p(), P(
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
      )) : x("v-if", !0), z(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
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
var Hs = Q({
  name: "VarAppBar",
  props: Of,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(), t = M(), o = () => {
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
    return lr(o), Tt(o), {
      n: Vf,
      classes: Mf,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Hs.render = Ef;
const Dn = Hs;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
var PS = Dn;
function vl(e, r, n, a, t, o, l) {
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
        vl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        vl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
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
var Bf = "background-image", If = "lazy-loading", Nf = "lazy-error", fl = "lazy-attempt", Df = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Yo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Za = [], Zt = [], Ys = qv(100), Xe = {
  loading: Yo,
  error: Yo,
  attempt: 3,
  throttleWait: 300,
  events: Df
}, Ii = Ti(Et, Xe.throttleWait);
function vo(e, r) {
  e._lazy.arg === Bf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Af(e) {
  e._lazy.loading && vo(e, e._lazy.loading), Et();
}
function zf(e) {
  e._lazy.error && vo(e, e._lazy.error), e._lazy.state = "error", Di(e), Et();
}
function js(e, r) {
  vo(e, r), e._lazy.state = "success", Di(e), Et();
}
function Lf(e) {
  var r;
  Zt.includes(e) || (Zt.push(e), (r = Xe.events) == null || r.forEach((n) => {
    e.addEventListener(n, Ii, {
      passive: !0
    });
  }));
}
function Rf() {
  Zt.forEach((e) => {
    var r;
    (r = Xe.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Ii);
    });
  }), Zt.length = 0;
}
function Uf(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(If)) != null ? n : Xe.loading,
    error: (a = e.getAttribute(Nf)) != null ? a : Xe.error,
    attempt: e.getAttribute(fl) ? Number(e.getAttribute(fl)) : Xe.attempt
  };
  e._lazy = Ho({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), vo(e, Yo), k(Xe.filter, e._lazy);
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
function Ni(e) {
  return jo.apply(this, arguments);
}
function jo() {
  return jo = uo(function* (e) {
    yield Lr(), Kv(e) && Ws(e);
  }), jo.apply(this, arguments);
}
function Et() {
  Za.forEach((e) => Ni(e));
}
function Hf(e) {
  return Wo.apply(this, arguments);
}
function Wo() {
  return Wo = uo(function* (e) {
    !Za.includes(e) && Za.push(e), Zv(e).forEach(Lf), yield Ni(e);
  }), Wo.apply(this, arguments);
}
function Di(e) {
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
  return Go.apply(this, arguments);
}
function Go() {
  return Go = uo(function* (e, r) {
    Uf(e, r), yield Hf(e);
  }), Go.apply(this, arguments);
}
function jf(e, r) {
  return qo.apply(this, arguments);
}
function qo() {
  return qo = uo(function* (e, r) {
    if (!Yf(e, r)) {
      Za.includes(e) && (yield Ni(e));
      return;
    }
    yield Gs(e, r);
  }), qo.apply(this, arguments);
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
  Xe.events = r ?? Xe.events, Xe.loading = n ?? Xe.loading, Xe.error = a ?? Xe.error, Xe.attempt = t ?? Xe.attempt, Xe.throttleWait = o ?? Xe.throttleWait, Xe.filter = l;
}
var qs = {
  mounted: Gs,
  unmounted: Di,
  updated: jf,
  install(e, r) {
    Wf(r), Ii = Ti(Et, Xe.throttleWait), e.directive("lazy", this);
  }
}, OS = qs;
const gt = qs;
function Gf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Xs = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ks(e) {
  return Xs(e) || ir(e) || Fe(e);
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: Xf,
  classes: Kf
} = _("avatar"), Zf = ["src", "lazy-loading", "lazy-error"], Jf = ["src"];
function Qf(e, r) {
  var n = Ie("lazy");
  return p(), P(
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
    [e.src ? (p(), P(
      Ve,
      {
        key: 0
      },
      [e.lazy ? ke((p(), P(
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
        Zf
      )), [[n, e.src]]) : (p(), P(
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
        Jf
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), P(
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
var Zs = Q({
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
      d ? (u._lazy.state === "success" && k(v, s), u._lazy.state === "error" && k(f, s)) : k(v, s);
    }, l = (s) => {
      k(e.onError, s);
    }, i = (s) => {
      k(e.onClick, s);
    };
    return lr(t), Tt(t), {
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
var VS = An, _f = {
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
} = _("avatar-group");
function rc(e, r) {
  return p(), P(
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
var Js = Q({
  name: "VarAvatarGroup",
  props: _f,
  setup(e) {
    var r = L(() => e.offset == null ? {} : {
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
var MS = zn;
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
} = _("loading"), ic = (e) => (Ua(""), e = e(), Fa(), e), lc = /* @__PURE__ */ ic(() => /* @__PURE__ */ z(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ z("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), sc = [lc];
function uc(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [Y(e.$slots, "default"), e.loading ? (p(), P(
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
    )) : x("v-if", !0), e.isShow ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [z(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: G({
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
      )) : x("v-if", !0), (p(!0), P(
        Ve,
        null,
        Ue(e.loadingTypeDict, (n, a) => (p(), P(
          Ve,
          {
            key: a
          },
          [e.type === a ? (p(), P(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), P(
              Ve,
              null,
              Ue(n, (t) => (p(), P(
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
      )), e.$slots.description || e.description ? (p(), P(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
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
var Qs = Q({
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
    }, t = L(() => k(n.default) ? e.loading : !0);
    return {
      n: tc,
      classes: oc,
      multiplySizeUnit: tr,
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
var ES = Nr, dc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: vc,
  classes: fc
} = _("hover-overlay");
function cc(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var _s = Q({
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
const mr = _s;
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
var BS = mr;
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
function Ai(e, r) {
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
  hc(e), Ai(e, e._hover.rawStyle);
}
function ru() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Ot(e)) {
    e(this._hover.hovering);
    return;
  }
  Ai(this, e);
}
function nu() {
  if (this._hover.hovering = !1, Ot(this._hover.value)) {
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
  return !Ot(r.value) && e._hover.hovering;
}
function bc(e, r) {
  au(e, r), yc(e, r) && Ai(e, r.value);
}
var ou = {
  mounted: au,
  unmounted: tu,
  beforeUpdate: gc,
  updated: bc,
  install(e) {
    e.directive("hover", this);
  }
}, IS = ou;
const Ur = ou;
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
  loadingType: Qe(un, "type"),
  loadingSize: Qe(un, "size"),
  loadingColor: Xo({}, Qe(un, "color"), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, lu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function kc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ur(lu);
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
  } = sr(lu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Tc,
  classes: Pc
} = _("button"), Oc = ["type", "disabled"];
function Vc(e, r) {
  var n = ae("var-loading"), a = ae("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return ke((p(), P(
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
    )) : x("v-if", !0), z(
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
    Oc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var su = Q({
  name: "VarButton",
  components: {
    VarLoading: Nr,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: Ge,
    Hover: Ur
  },
  props: Sc,
  setup(e) {
    var r = M(!1), {
      buttonGroup: n
    } = $c(), {
      hovering: a,
      handleHovering: t
    } = Pn(), o = L(() => {
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
      n: Tc,
      classes: Pc,
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
const rr = su;
rr.install = function(e) {
  e.component(rr.name, rr);
};
var NS = rr, Mc = {
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
  onClick: F()
}, {
  n: Ec,
  classes: Bc
} = _("back-top");
function Ic(e, r) {
  var n = ae("var-icon"), a = ae("var-button");
  return p(), ye(
    Ra,
    {
      to: "body",
      disabled: e.disabled
    },
    [z(
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
var uu = Q({
  name: "VarBackTop",
  components: {
    VarButton: rr,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Mc,
  setup(e) {
    var r = M(!1), n = M(null), a = M(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = Pi(t);
      ht(t, {
        left: v,
        duration: e.duration,
        animation: ys
      });
    }, l = Ti(() => {
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
      n: Ec,
      classes: Bc,
      handleClick: o
    };
  }
});
uu.render = Ic;
const Ln = uu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var DS = Ln;
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
} = _("badge");
function Rc(e, r) {
  var n = ae("var-icon");
  return p(), P(
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
        default: ve(() => [ke(z(
          "span",
          Be({
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
          )) : x("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), P(
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
var du = Q({
  name: "VarBadge",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Ac,
  setup(e) {
    var r = L(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && U(n) > U(a) ? a + "+" : n;
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
var AS = mn, Uc = {
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
  onChange: F(),
  "onUpdate:active": F(),
  onBeforeChange: F(),
  onFabClick: F(),
  fabProps: {
    type: Object
  }
}, vu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Fc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ur(vu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: Hc,
  classes: Yc
} = _("bottom-navigation"), {
  n: fo
} = _("bottom-navigation-item"), cl = fo("--right-half-space"), ml = fo("--left-half-space"), pl = fo("--right-space"), jc = {
  type: "primary"
};
function Wc(e, r) {
  var n = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (p(), ye(
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
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var fu = Q({
  name: "VarBottomNavigation",
  components: {
    VarButton: rr
  },
  props: Uc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(null), t = L(() => e.active), o = L(() => e.activeColor), l = L(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Fc(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((b) => {
      var {
        name: V
      } = b;
      return t.value === V.value;
    }), m = () => u.find((b) => {
      var {
        index: V
      } = b;
      return t.value === V.value;
    }), g = () => {
      ir(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, h = (b) => {
      t.value !== b && (e.onBeforeChange ? y(b) : w(b));
    }, y = (b) => {
      var V = Ft(k(e.onBeforeChange, b));
      Promise.all(V).then((j) => {
        j.every(Boolean) && w(b);
      });
    }, w = (b) => {
      k(e["onUpdate:active"], b), k(e.onChange, b);
    }, O = () => {
      var b = I();
      b.forEach((V) => {
        V.classList.remove(cl, ml, pl);
      });
    }, S = (b) => {
      var V = I(), j = V.length, R = b % 2 === 0;
      V.forEach((K, X) => {
        $(R, K, X, j);
      });
    }, $ = (b, V, j, R) => {
      var K = j === R - 1;
      if (!b && K) {
        V.classList.add(pl);
        return;
      }
      var X = j === R / 2 - 1, te = j === R / 2;
      X ? V.classList.add(cl) : te && V.classList.add(ml);
    }, I = () => Array.from(a.value.querySelectorAll("." + fo())), T = () => {
      k(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: h
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (b) => {
      i.value = Ko({}, jc, b);
    }, {
      immediate: !0,
      deep: !0
    }), lr(() => {
      n.fab && S(s.value);
    }), Tt(() => {
      O(), n.fab && S(s.value);
    }), {
      n: Hc,
      classes: Yc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: T,
      fabProps: i
    };
  }
});
fu.render = Wc;
const Rn = fu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var zS = Rn, Gc = {
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
  onClick: F()
};
function qc() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = sr(vu);
  return n || Pr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Xc,
  classes: Kc
} = _("bottom-navigation-item"), Zc = {
  type: "danger",
  dot: !0
};
function Jc(e, r) {
  var n = ae("var-icon"), a = ae("var-badge"), t = Ie("ripple");
  return ke((p(), P(
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
    )) : x("v-if", !0), Y(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), ye(
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
    )) : x("v-if", !0), z(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (p(), P(
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
var cu = Q({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: mn,
    VarIcon: Pe
  },
  directives: {
    Ripple: Ge
  },
  props: Gc,
  setup(e) {
    var r = L(() => e.name), n = L(() => e.badge), a = M({}), {
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
      var m, g = (m = r.value) != null ? m : t.value;
      k(e.onClick, g), k(o.onToggle, g);
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
var LS = Un, Qc = {
  separator: {
    type: String
  },
  onClick: F()
}, mu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function _c() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ur(mu);
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
  } = sr(mu);
  return r || Pr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: em,
  classes: rm
} = _("breadcrumb");
function nm(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
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
      return [z(
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
var pu = Q({
  name: "VarBreadcrumb",
  props: Qc,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = xc(), t = L(() => r.value === n.length.value - 1), o = L(() => n.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
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
var RS = Fn, am = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: tm
} = _("breadcrumbs");
function om(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var hu = Q({
  name: "VarBreadcrumbs",
  props: am,
  setup(e) {
    var r = L(() => e.separator), {
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
var US = Hn;
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
} = _("button-group");
function fm(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var gu = Q({
  name: "VarButtonGroup",
  props: um,
  setup(e) {
    var {
      bindButtons: r
    } = kc(), n = {
      elevation: L(() => e.elevation),
      type: L(() => e.type),
      size: L(() => e.size),
      color: L(() => e.color),
      textColor: L(() => e.textColor),
      mode: L(() => e.mode)
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
var FS = Yn;
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
  onClick: F(),
  "onUpdate:floating": F()
};
function hl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function gl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        hl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        hl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: pm,
  classes: hm
} = _("card"), gm = 500, ym = ["src", "alt"];
function bm(e, r) {
  var n = ae("var-icon"), a = ae("var-button"), t = Ie("ripple");
  return ke((p(), P(
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
    [z(
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
      [Y(e.$slots, "image", {}, () => [e.src ? (p(), P(
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
        ym
      )) : x("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("container"))
        },
        [Y(e.$slots, "title", {}, () => [e.title ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), P(
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
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), P(
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
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), z(
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
var yu = Q({
  name: "VarCard",
  directives: {
    Ripple: Ge
  },
  components: {
    VarIcon: Pe,
    VarButton: rr
  },
  props: mm,
  setup(e) {
    var r = M(null), n = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = L(() => e.layout === "row"), g = M(!1), h = M(!1), {
      zIndex: y
    } = Mt(() => e.floating, 1);
    so(() => e.floating, () => !m.value);
    var w = "auto", O = "auto", S = null, $ = M(null), I = /* @__PURE__ */ function() {
      var V = gl(function* () {
        clearTimeout($.value), clearTimeout(S), $.value = null, $.value = setTimeout(/* @__PURE__ */ gl(function* () {
          var {
            width: j,
            height: R,
            left: K,
            top: X
          } = We(r.value);
          a.value = ge(j), t.value = ge(R), o.value = a.value, l.value = t.value, i.value = ge(X), s.value = ge(K), u.value = "fixed", w = i.value, O = s.value, g.value = !0, yield Lr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
        }), e.ripple ? gm : 0);
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), T = () => {
      clearTimeout(S), clearTimeout($.value), $.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = O, v.value = "0px", f.value = "0", g.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", O = "auto", d.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      k(e["onUpdate:floating"], !1);
    }, b = (V) => {
      k(e.onClick, V);
    };
    return ie(() => e.floating, (V) => {
      m.value || Ne(() => {
        V ? I() : T();
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
      floater: $,
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
      close: D,
      showFloatingButtons: g,
      floated: h,
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
var HS = jn, wm = {
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
  onClick: F()
}, {
  n: Cm,
  classes: Sm
} = _("cell");
function km(e, r) {
  var n = ae("var-icon"), a = Ie("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "icon", {}, () => [e.icon ? (p(), P(
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
    )) : x("v-if", !0)]), z(
      "div",
      {
        class: c(e.n("content"))
      },
      [Y(e.$slots, "default", {}, () => [e.title ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), P(
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
    ), e.$slots.extra ? (p(), P(
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
var bu = Q({
  name: "VarCell",
  components: {
    VarIcon: Pe
  },
  directives: {
    Ripple: Ge
  },
  props: wm,
  setup(e) {
    var r = L(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ge(e.borderOffset),
      "--cell-border-right": ge(e.borderOffset)
    }), n = (a) => {
      k(e.onClick, a);
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
var YS = pn, $m = {
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
} = _("form-details"), Pm = {
  key: 0
}, Om = {
  key: 0
};
function Vm(e, r) {
  return p(), ye(
    Le,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n())
        },
        [z(
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
              default: ve(() => [e.errorMessage ? (p(), P(
                "div",
                Pm,
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
        ), z(
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
              default: ve(() => [e.extraMessage ? (p(), P(
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
var wu = Q({
  name: "VarFormDetails",
  props: $m,
  setup: () => ({
    n: Tm
  })
});
wu.render = Vm;
const xe = wu;
xe.install = function(e) {
  e.component(xe.name, xe);
};
var jS = xe, Mm = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, Cu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Em() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ur(Cu);
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
  } = sr(Cu);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
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
var Su = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = sr(Su), a = rt(), t = n ? (o) => {
    n(Zo({}, o, {
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
  } = ur(Su);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: Nm,
  classes: Dm
} = _("checkbox");
function Am(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("hover"), l = Ie("ripple");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [ke((p(), P(
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
      }]]), z(
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
var ku = Q({
  name: "VarCheckbox",
  directives: {
    Ripple: Ge,
    Hover: Ur
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: xe,
    VarHoverOverlay: mr
  },
  props: Mm,
  setup(e) {
    var r = M(!1), n = L(() => r.value === e.checkedValue), a = L(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Bm(), {
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
    } = Or(), h = (b) => {
      Ne(() => {
        var {
          validateTrigger: V,
          rules: j,
          modelValue: R
        } = e;
        f(V, b, j, R);
      });
    }, y = (b) => {
      r.value = b;
      var {
        checkedValue: V,
        onChange: j
      } = e;
      k(e["onUpdate:modelValue"], r.value), k(j, r.value), h("onChange"), b === V ? o == null || o.onChecked(V) : o == null || o.onUnchecked(V);
    }, w = (b) => {
      var {
        disabled: V,
        readonly: j,
        checkedValue: R,
        uncheckedValue: K,
        onClick: X
      } = e;
      if (!(u != null && u.disabled.value || V) && (k(X, b), !(u != null && u.readonly.value || j))) {
        t.value = !0;
        var te = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && te || y(n.value ? K : R);
      }
    }, O = (b) => {
      var {
        checkedValue: V,
        uncheckedValue: j
      } = e;
      r.value = b.includes(V) ? V : j;
    }, S = () => {
      t.value = !1;
    }, $ = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, I = (b) => {
      var {
        checkedValue: V,
        uncheckedValue: j
      } = e, R = ![V, j].includes(b);
      R && (b = n.value ? j : V), y(b);
    }, T = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (b) => {
      r.value = b;
    }, {
      immediate: !0
    });
    var D = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: T,
      resetValidation: g,
      reset: $,
      resetWithAnimation: S
    };
    return k(l, D), k(d, D), {
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
      toggle: I,
      reset: $,
      validate: T,
      resetValidation: g
    };
  }
});
ku.render = Am;
const hn = ku;
hn.install = function(e) {
  e.component(hn.name, hn);
};
var WS = hn;
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Rm,
  classes: Um
} = _("checkbox-group");
function Fm(e, r) {
  var n = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
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
var $u = Q({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: xe
  },
  props: Lm,
  setup(e) {
    var r = L(() => e.max), n = L(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Em(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), v = L(() => i.value), f = (D) => {
      Ne(() => {
        var {
          validateTrigger: b,
          rules: V,
          modelValue: j
        } = e;
        s(b, D, V, j);
      });
    }, m = (D) => {
      k(e["onUpdate:modelValue"], D), k(e.onChange, D), f("onChange");
    }, g = (D) => {
      var {
        modelValue: b
      } = e;
      b.includes(D) || m([...b, D]);
    }, h = (D) => {
      var {
        modelValue: b
      } = e;
      b.includes(D) && m(b.filter((V) => V !== D));
    }, y = () => t.forEach((D) => {
      var {
        sync: b
      } = D;
      return b(e.modelValue);
    }), w = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, O = () => {
      var D = t.map((V) => {
        var {
          checkedValue: j
        } = V;
        return j.value;
      }), b = xi(D);
      return w(), k(e["onUpdate:modelValue"], b), b;
    }, S = () => {
      var D = t.filter((V) => {
        var {
          checked: j
        } = V;
        return !j.value;
      }).map((V) => {
        var {
          checkedValue: j
        } = V;
        return j.value;
      }), b = xi(D);
      return w(), k(e["onUpdate:modelValue"], b), b;
    }, $ = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, y, {
      deep: !0
    }), ie(() => a.value, y);
    var T = {
      max: r,
      checkedCount: n,
      onChecked: g,
      onUnchecked: h,
      validate: I,
      resetValidation: d,
      reset: $,
      errorMessage: v
    };
    return o(T), k(l, T), {
      errorMessage: i,
      n: Rm,
      classes: Um,
      checkAll: O,
      inverseAll: S,
      reset: $,
      validate: I,
      resetValidation: d
    };
  }
});
$u.render = Fm;
const Wn = $u;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var GS = Wn;
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
  iconName: Qe(As, "name"),
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
  onClose: F()
}, {
  n: en,
  classes: Wm
} = _("chip");
function Gm(e, r) {
  var n = ae("var-icon");
  return p(), ye(
    Le,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [z(
        "span",
        Be({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [Y(e.$slots, "left"), z(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        ), Y(e.$slots, "right"), e.closable ? (p(), P(
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
var Tu = Q({
  name: "VarChip",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: jm,
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
      k(e.onClose, t);
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
var qS = gn;
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
  onClick: F()
}, Pu = Symbol("ROW_BIND_COL_KEY");
function Jm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ur(Pu);
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
  } = sr(Pu);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Nt,
  classes: _m
} = _("col");
function xm(e, r) {
  return p(), P(
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
var Ou = Q({
  name: "VarCol",
  props: Zm,
  setup(e) {
    var r = M({
      left: 0,
      right: 0
    }), n = L(() => U(e.span)), a = L(() => U(e.offset)), {
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
      if (ki(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Nt("--span-" + u + "-" + m)), f && v.push(Nt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Nt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: Nt,
      classes: _m,
      padding: r,
      toNumber: U,
      toSizeUnit: ge,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: Xt
    };
  }
});
Ou.render = xm;
const Gn = Ou;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var XS = Gn, Vu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function ep() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ur(Vu);
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: np
} = _("collapse");
function ap(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Mu = Q({
  name: "VarCollapse",
  props: rp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = ep(), t = L(() => e.modelValue), o = L(() => e.offset), l = L(() => e.divider), i = L(() => e.elevation), s = () => !e.accordion && !Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (h, y) => s() ? y ? e.accordion ? h : [...e.modelValue, h] : e.accordion ? null : e.modelValue.filter((w) => w !== h) : null, d = (h, y) => {
      var w = u(h, y);
      k(e["onUpdate:modelValue"], w), k(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((y) => {
          var {
            name: w
          } = y;
          return e.modelValue === w.value;
        });
      var h = n.filter((y) => {
        var {
          name: w
        } = y;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return h.length ? h : void 0;
    }, f = () => e.accordion ? n.find((h) => {
      var {
        index: y,
        name: w
      } = h;
      return w.value === void 0 && e.modelValue === y.value;
    }) : n.filter((h) => {
      var {
        index: y,
        name: w
      } = h;
      return w.value === void 0 && e.modelValue.includes(y.value);
    }), m = () => {
      if (s()) {
        var h = v() || f();
        if (e.accordion && !h || !e.accordion && !h.length) {
          n.forEach((y) => {
            y.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((y) => {
          var w = e.accordion ? h === y : h.includes(y);
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
var KS = qn;
function tp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = sr(Vu);
  return n || Pr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
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
} = _("collapse-item");
function sp(e, r) {
  var n = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: G("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), z(
      "div",
      {
        class: c(e.n("header")),
        onClick: r[0] || (r[0] = (a) => e.toggle())
      },
      [z(
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
      ), z(
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
    ), ke(z(
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
      [z(
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
var Eu = Q({
  name: "VarCollapseItem",
  components: {
    VarIcon: Pe
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
    } = n, m = L(() => e.name), g = (I, T) => {
      s.value === void 0 || I && Te(s.value) || T === i.value || (i.value = T, h(!0));
    }, h = (I) => {
      e.disabled || I || f(e.name || r.value, !i.value);
    }, y = () => {
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
    }, O = () => {
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
    }, $ = {
      index: r,
      name: m,
      init: g
    };
    return a($), ie(i, (I) => {
      I ? y() : O();
    }), {
      n: ip,
      start: w,
      classes: lp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: h,
      contentEl: o,
      transitionend: S,
      formatElevation: hr
    };
  }
});
Eu.render = sp;
const Xn = Eu;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ZS = Xn, up = {
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
  onEnd: F(),
  onChange: F()
}, {
  n: dp
} = _("countdown"), Jo = 1e3, Qo = 60 * Jo, _o = 60 * Qo, yl = 24 * _o;
function vp(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", Pt(to(e.timeData)), () => [Ce(
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
  props: up,
  setup(e) {
    var r = M(""), n = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, h) => {
      var y = Object.values(h), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach(($, I) => {
        g.includes($) ? g = g.replace($, Na("" + y[I], 2, "0")) : y[I + 1] += y[I] * O[I];
      }), g.includes("S")) {
        var S = Na("" + y[y.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", S) : g.includes("SS") ? g = g.replace("SS", S.slice(0, 2)) : g = g.replace("S", S.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var h = Math.floor(g / yl), y = Math.floor(g % yl / _o), w = Math.floor(g % _o / Qo), O = Math.floor(g % Qo / Jo), S = Math.floor(g % Jo), $ = {
        days: h,
        hours: y,
        minutes: w,
        seconds: O,
        milliseconds: S
      };
      n.value = $, k(e.onChange, n.value), r.value = s(e.format, $);
    }, d = () => {
      var {
        time: g,
        onEnd: h
      } = e, y = performance.now();
      if (a || (a = y + U(g)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        k(h);
        return;
      }
      t && (o = br(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || U(e.time)), d());
    }, f = () => {
      t = !1, il(o);
    }, m = () => {
      a = 0, t = !1, il(o), d();
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
Bu.render = vp;
const Kn = Bu;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var JS = Kn;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var ja = 9e15, En = 1e9, xo = "0123456789abcdef", Jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ei = {
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
}, Iu, Yr, he = !0, co = "[DecimalError] ", On = co + "Invalid argument: ", Nu = co + "Precision limit exceeded", Du = co + "crypto unavailable", Au = "[object Decimal]", nr = Math.floor, Ke = Math.pow, fp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, cp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, mp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, zu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Dr = 1e7, ce = 7, pp = 9007199254740991, hp = Jt.length - 1, ri = Qt.length - 1, q = { toStringTag: Au };
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
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + ce, a.rounding = 1, n = gp(a, Hu(a, n)), a.precision = e, a.rounding = r, fe(Yr == 2 || Yr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (he = !1, o = d.s * Ke(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = er(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Ke(n, 1 / 3), e = nr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
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
    if (e = r.length - 1, n = (e - nr(this.e / ce)) * ce, e = r[e], e)
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
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / po(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Ja(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = n, l.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
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
    if (u.abs().eq(1) && v + 4 <= ri)
      return l = Ir(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ri)
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
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && nr(this.e / ce) > this.d.length - 2;
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
  if (he = !1, i = v + m, l = dn(u, i), a = r ? _t(d, i + 10) : dn(e, i), s = Ee(l, a, i, 1), yt(s.d, t = v, f))
    do
      if (i += 10, l = dn(u, i), a = r ? _t(d, i + 10) : dn(e, i), s = Ee(l, a, i, 1), !o) {
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
  if (n = nr(e.e / ce), d = nr(m.e / ce), u = u.slice(), o = d - n, o) {
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
  return u[0] ? (e.d = u, e.e = mo(u, n), he ? fe(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? fe(new a(n), a.precision, a.rounding) : (he = !1, a.modulo == 9 ? (r = Ee(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ee(n, e, 0, a.modulo, 1), r = r.times(e), he = !0, n.minus(r));
};
q.naturalExponential = q.exp = function() {
  return ni(this);
};
q.naturalLogarithm = q.ln = function() {
  return dn(this);
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
  if (o = nr(v.e / ce), a = nr(e.e / ce), u = u.slice(), t = o - a, t) {
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
q.precision = q.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(On + e);
  return n.d ? (r = Lu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
q.round = function() {
  var e = this, r = e.constructor;
  return fe(new r(e), e.e + 1, r.rounding);
};
q.sine = q.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + ce, a.rounding = 1, n = bp(a, Hu(a, n)), a.precision = e, a.rounding = r, fe(Yr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
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
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, fe(Yr == 2 || Yr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (n = nr(d.e / ce) + nr(e.e / ce), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
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
  return zi(this, 2, e, r);
};
q.toDecimalPlaces = q.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (pr(e, 0, En), r === void 0 ? r = a.rounding : pr(r, 0, 8), fe(n, e + n.e + 1, r));
};
q.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Fr(a, !0) : (pr(e, 0, En), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e + 1, r), n = Fr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
q.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Fr(t) : (pr(e, 0, En), r === void 0 ? r = o.rounding : pr(r, 0, 8), a = fe(new o(t), e + t.e + 1, r), n = Fr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
q.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, h = m.constructor;
  if (!g)
    return new h(m);
  if (u = n = new h(1), a = s = new h(0), r = new h(a), o = r.e = Lu(g) - m.e - 1, l = o % ce, r.d[0] = Ke(10, l < 0 ? ce + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new h(e), !i.isInt() || i.lt(u))
      throw Error(On + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (he = !1, i = new h(er(g)), d = h.precision, h.precision = o = g.length * ce * 2; v = Ee(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], h.precision = d, he = !0, f;
};
q.toHexadecimal = q.toHex = function(e, r) {
  return zi(this, 16, e, r);
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
  return zi(this, 8, e, r);
};
q.toPower = q.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ke(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (r = nr(e.e / ce), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= pp)
    return t = Ru(s, i, n, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Ke(+i, u), r = n == 0 || !isFinite(n) ? nr(u * (Math.log("0." + er(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (he = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = ni(e.times(dn(i, a + n)), a), t.d && (t = fe(t, a + 5, 1), yt(t.d, a, o) && (r = a + 10, t = fe(ni(e.times(dn(i, r + n)), r), r + 5, 1), +er(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, he = !0, s.rounding = o, fe(t, a, o));
};
q.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Fr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (pr(e, 1, En), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e, r), n = Fr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
q.toSignificantDigits = q.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (pr(e, 1, En), r === void 0 ? r = a.rounding : pr(r, 0, 8)), fe(new a(n), e, r);
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
    throw Error(On + e);
}
function yt(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += ce, t = 0) : (t = Math.ceil((r + 1) / ce), r %= ce), o = Ke(10, ce - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ke(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ke(10, r - 3) - 1, l;
}
function Ht(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += xo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
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
    var u, d, v, f, m, g, h, y, w, O, S, $, I, T, D, b, V, j, R, K, X = a.constructor, te = a.s == t.s ? 1 : -1, B = a.d, C = t.d;
    if (!B || !B[0] || !C || !C[0])
      return new X(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (B ? C && B[0] == C[0] : !C) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          B && B[0] == 0 || !C ? te * 0 : te / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Dr, m = ce, d = nr(a.e / m) - nr(t.e / m)), R = C.length, V = B.length, w = new X(te), O = w.d = [], v = 0; C[v] == (B[v] || 0); v++)
      ;
    if (C[v] > (B[v] || 0) && d--, o == null ? (T = o = X.precision, l = X.rounding) : i ? T = o + (a.e - t.e) + 1 : T = o, T < 0)
      O.push(1), g = !0;
    else {
      if (T = T / m + 2 | 0, v = 0, R == 1) {
        for (f = 0, C = C[0], T++; (v < V || f) && T--; v++)
          D = f * s + (B[v] || 0), O[v] = D / C | 0, f = D % C | 0;
        g = f || v < V;
      } else {
        for (f = s / (C[0] + 1) | 0, f > 1 && (C = e(C, f, s), B = e(B, f, s), R = C.length, V = B.length), b = R, S = B.slice(0, R), $ = S.length; $ < R; )
          S[$++] = 0;
        K = C.slice(), K.unshift(0), j = C[0], C[1] >= s / 2 && ++j;
        do
          f = 0, u = r(C, S, R, $), u < 0 ? (I = S[0], R != $ && (I = I * s + (S[1] || 0)), f = I / j | 0, f > 1 ? (f >= s && (f = s - 1), h = e(C, f, s), y = h.length, $ = S.length, u = r(h, S, y, $), u == 1 && (f--, n(h, R < y ? K : C, y, s))) : (f == 0 && (u = f = 1), h = C.slice()), y = h.length, y < $ && h.unshift(0), n(S, h, $, s), u == -1 && ($ = S.length, u = r(C, S, R, $), u < 1 && (f++, n(S, R < $ ? K : C, $, s))), $ = S.length) : u === 0 && (f++, S = [0]), O[v++] = f, u && S[0] ? S[$++] = B[b] || 0 : (S = [B[b]], $ = 1);
        while ((b++ < V || S[0] !== void 0) && T--);
        g = S[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      w.e = d, Iu = g;
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
        o += ce, l = r, d = v[f = 0], s = d / Ke(10, t - l - 1) % 10 | 0;
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
        o %= ce, l = o - ce + t, s = l < 0 ? 0 : d / Ke(10, t - l - 1) % 10 | 0;
      }
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ke(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Ke(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Ke(10, (ce - r % ce) % ce), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ke(10, ce - o), v[f] = l > 0 ? (d / Ke(10, t - l) % Ke(10, l) | 0) * i : 0), u)
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
    return Fu(e);
  var a, t = e.e, o = er(e.d), l = o.length;
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
  if (r > ri)
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
    if (n % 2 && (o = o.times(r), wl(o.d, l) && (t = !0)), n = nr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), wl(r.d, l);
  }
  return he = !0, o;
}
function bl(e) {
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
function ni(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (he = !1, s = g) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ke(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
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
function dn(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, h = e, y = h.d, w = h.constructor, O = w.rounding, S = w.precision;
  if (h.s < 0 || !y || !y[0] || !h.e && y[0] == 1 && y.length == 1)
    return new w(y && !y[0] ? -1 / 0 : h.s != 1 ? NaN : y ? 0 : h);
  if (r == null ? (he = !1, d = S) : d = r, w.precision = d += g, n = er(y), a = n.charAt(0), Math.abs(o = h.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      h = h.times(e), n = er(h.d), a = n.charAt(0), m++;
    o = h.e, a > 1 ? (h = new w("0." + n), o++) : h = new w(a + "." + n.slice(1));
  } else
    return u = _t(w, d + 2, S).times(o + ""), h = dn(new w(a + "." + n.slice(1)), d - g).plus(u), w.precision = S, r == null ? fe(h, S, O, he = !0) : h;
  for (v = h, s = l = h = Ee(h.minus(1), h.plus(1), d, 1), f = fe(h.times(h), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), er(u.d).slice(0, d) === er(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(_t(w, d + 2, S).times(o + ""))), s = Ee(s, new w(m), d, 1), r == null)
        if (yt(s.d, d - g, O, i))
          w.precision = d += g, u = l = h = Ee(v.minus(1), v.plus(1), d, 1), f = fe(h.times(h), d, 1), t = i = 1;
        else
          return fe(s, w.precision = S, O, he = !0);
      else
        return w.precision = S, s;
    s = u, t += 2;
  }
}
function Fu(e) {
  return String(e.s * e.s / 0);
}
function ai(e, r) {
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
      return ai(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (cp.test(r))
    n = 16, r = r.toLowerCase();
  else if (fp.test(r))
    n = 2;
  else if (mp.test(r))
    n = 8;
  else
    throw Error(On + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Ru(a, new a(n), o, o * 2)), u = Ht(r, n, Dr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = mo(u, d), e.d = u, he = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ke(2, s) : vn.pow(2, s))), he = !0, e);
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
function Hu(e, r) {
  var n, a = r.s < 0, t = Ir(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Yr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    Yr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return Yr = bl(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    Yr = bl(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function zi(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = n !== void 0;
  if (g ? (pr(n, 1, En), a === void 0 ? a = m.rounding : pr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Fu(e);
  else {
    for (d = Fr(e), l = d.indexOf("."), g ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ht(Fr(f), 10, t), f.e = f.d.length), v = Ht(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, n, a, 0, t), v = e.d, o = e.e, u = Iu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += xo.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ht(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += xo.charAt(v[l]);
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
function wl(e, r) {
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
function Pp(e) {
  return new this(e).atan();
}
function Op(e) {
  return new this(e).atanh();
}
function Vp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Ir(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Ir(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Ir(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Ee(e, r, o, 1)), r = Ir(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Ee(e, r, o, 1)), n;
}
function Mp(e) {
  return new this(e).cbrt();
}
function Ep(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Bp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Ip(e) {
  if (!e || typeof e != "object")
    throw Error(co + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    En,
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
    if (n = o[r], t && (this[n] = ei[n]), (a = e[n]) !== void 0)
      if (nr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(On + n + ": " + a);
  if (n = "crypto", t && (this[n] = ei[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Du);
      else
        this[n] = !1;
    else
      throw Error(On + n + ": " + a);
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
    if (u.constructor = t, Cl(o)) {
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
      return ai(u, o.toString());
    } else if (s !== "string")
      throw Error(On + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), zu.test(o) ? ai(u, o) : yp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Ip, t.clone = Yu, t.isDecimal = Cl, t.abs = wp, t.acos = Cp, t.acosh = Sp, t.add = kp, t.asin = $p, t.asinh = Tp, t.atan = Pp, t.atanh = Op, t.atan2 = Vp, t.cbrt = Mp, t.ceil = Ep, t.clamp = Bp, t.cos = Np, t.cosh = Dp, t.div = Ap, t.exp = zp, t.floor = Lp, t.hypot = Rp, t.ln = Up, t.log = Fp, t.log10 = Yp, t.log2 = Hp, t.max = jp, t.min = Wp, t.mod = Gp, t.mul = qp, t.pow = Xp, t.random = Kp, t.round = Zp, t.sign = Jp, t.sin = Qp, t.sinh = _p, t.sqrt = xp, t.sub = eh, t.sum = rh, t.tan = nh, t.tanh = ah, t.trunc = th, e === void 0 && (e = {}), e && e.defaults !== !0)
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
function Cl(e) {
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
  if (e === void 0 ? e = this.precision : pr(e, 1, En), a = Math.ceil(e / ce), this.crypto)
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
  for (a = i[--o], e %= ce, a && e && (t = Ke(10, ce - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
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
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var vn = q.constructor = Yu(ei);
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
  onBeforeChange: F(),
  onChange: F(),
  onIncrement: F(),
  onDecrement: F(),
  "onUpdate:modelValue": F()
}, {
  n: ih,
  classes: lh
} = _("counter"), Sl = 100, kl = 600, sh = ["inputmode", "readonly", "disabled"];
function uh(e, r) {
  var n = ae("var-icon"), a = ae("var-button"), t = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
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
      ), ke(z(
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
        sh
      ), [[Uv, e.inputValue]]), Z(
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
var ju = Q({
  name: "VarCounter",
  components: {
    VarButton: rr,
    VarIcon: Pe,
    VarFormDetails: xe
  },
  directives: {
    Ripple: Ge
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
    } = Or(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), h = (C) => {
      Ne(() => {
        var {
          validateTrigger: N,
          rules: J,
          modelValue: H
        } = e;
        o(N, C, J, H);
      });
    }, y = () => {
      var {
        min: C
      } = e;
      k(e["onUpdate:modelValue"], C != null ? U(C) : 0), i();
    }, w = {
      reset: y,
      validate: g,
      resetValidation: i
    }, O = L(() => {
      var {
        max: C,
        modelValue: N
      } = e;
      return C != null && U(N) >= U(C);
    }), S = L(() => {
      var {
        min: C,
        modelValue: N
      } = e;
      return C != null && U(N) <= U(C);
    }), $ = (C) => {
      var {
        decimalLength: N,
        max: J,
        min: H
      } = e, A = U(C);
      return J != null && A > U(J) && (A = U(J)), H != null && A < U(H) && (A = U(H)), C = String(A), N != null && (C = A.toFixed(U(N))), C;
    }, I = (C) => {
      var {
        lazyChange: N,
        onBeforeChange: J
      } = e, {
        value: H
      } = C.target, A = $(H);
      N ? k(J, U(A), B) : te(A), h("onInputChange");
    }, T = () => {
      var {
        disabled: C,
        readonly: N,
        disableDecrement: J,
        decrementButton: H,
        lazyChange: A,
        step: E,
        modelValue: W,
        onDecrement: ee,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || C || N || J || !H) && !S.value) {
        var de = new vn(U(W)).minus(new vn(U(E))).toString(), we = $(de), Oe = U(we);
        k(ee, Oe), A ? k(se, Oe, B) : (te(we), h("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: C,
        readonly: N,
        disableIncrement: J,
        incrementButton: H,
        lazyChange: A,
        step: E,
        modelValue: W,
        onIncrement: ee,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || C || N || J || !H) && !O.value) {
        var de = new vn(U(W)).plus(new vn(U(E))).toString(), we = $(de), Oe = U(we);
        k(ee, Oe), A ? k(se, Oe, B) : (te(we), h("onIncrement"));
      }
    }, b = () => {
      var {
        press: C,
        lazyChange: N
      } = e;
      !C || N || (m = window.setTimeout(() => {
        X();
      }, kl));
    }, V = () => {
      var {
        press: C,
        lazyChange: N
      } = e;
      !C || N || (f = window.setTimeout(() => {
        K();
      }, kl));
    }, j = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, R = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, K = () => {
      d = window.setTimeout(() => {
        D(), K();
      }, Sl);
    }, X = () => {
      v = window.setTimeout(() => {
        T(), X();
      }, Sl);
    }, te = (C) => {
      r.value = C;
      var N = U(C);
      k(e["onUpdate:modelValue"], N);
    }, B = (C) => {
      te($(String(C))), h("onLazyChange");
    };
    return k(n, w), ie(() => e.modelValue, (C) => {
      te($(String(C))), k(e.onChange, U(C));
    }), te($(String(e.modelValue))), {
      n: ih,
      classes: lh,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: S,
      validate: g,
      reset: y,
      resetValidation: i,
      handleChange: I,
      decrement: T,
      increment: D,
      pressDecrement: b,
      pressIncrement: V,
      releaseDecrement: j,
      releaseIncrement: R,
      toSizeUnit: ge,
      toNumber: U
    };
  }
});
ju.render = uh;
const Zn = ju;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var QS = Zn, Wu = 60, Gu = Wu * 60, qu = Gu * 24, dh = qu * 7, Qa = 1e3, To = Wu * Qa, $l = Gu * Qa, vh = qu * Qa, fh = dh * Qa, Li = "millisecond", Wa = "second", Ga = "minute", qa = "hour", an = "day", Yt = "week", Br = "month", Xu = "quarter", tn = "year", Xa = "date", ch = "YYYY-MM-DDTHH:mm:ssZ", Tl = "Invalid Date", mh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ph = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const hh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ti = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, gh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + ti(t, 2, "0") + ":" + ti(o, 2, "0");
}, yh = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Br), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Br);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, bh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, wh = function(r) {
  var n = {
    M: Br,
    y: tn,
    w: Yt,
    d: an,
    D: Xa,
    h: qa,
    m: Ga,
    s: Wa,
    ms: Li,
    Q: Xu
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Ch = function(r) {
  return r === void 0;
};
const Sh = {
  s: ti,
  z: gh,
  m: yh,
  a: bh,
  p: wh,
  u: Ch
};
var dt = "en", Jn = {};
Jn[dt] = hh;
var Ri = function(r) {
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
  if (Ri(r))
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
Me.i = Ri;
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
    return this.$d.toString() !== Tl;
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
      var S = Me.w(o.$u ? Date.UTC(o.$y, O, w) : new Date(o.$y, O, w), o);
      return l ? S : S.endOf(an);
    }, u = function(w, O) {
      var S = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Me.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : $).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case tn:
        return l ? s(1, 0) : s(31, 11);
      case Br:
        return l ? s(1, v) : s(0, v + 1);
      case Yt: {
        var g = this.$locale().weekStart || 0, h = (d < g ? d + 7 : d) - g;
        return s(l ? f - h : f + (6 - h), v);
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
    var o, l = Me.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[an] = i + "Date", o[Xa] = i + "Date", o[Br] = i + "Month", o[tn] = i + "FullYear", o[qa] = i + "Hours", o[Ga] = i + "Minutes", o[Wa] = i + "Seconds", o[Li] = i + "Milliseconds", o)[l], u = l === an ? this.$D + (t - this.$W) : t;
    if (l === Br || l === tn) {
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
    if (i === Br)
      return this.set(Br, this.$M + a);
    if (i === tn)
      return this.set(tn, this.$y + a);
    if (i === an)
      return s(1);
    if (i === Yt)
      return s(7);
    var u = (l = {}, l[Ga] = To, l[qa] = $l, l[Wa] = Qa, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Me.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Tl;
    var l = a || ch, i = Me.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function(S, $, I, T) {
      return S && (S[$] || S(t, l)) || I[$].slice(0, T);
    }, h = function(S) {
      return Me.s(s % 12 || 12, S, "0");
    }, y = m || function(O, S, $) {
      var I = O < 12 ? "AM" : "PM";
      return $ ? I.toLowerCase() : I;
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
      h: h(1),
      hh: h(2),
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
    return l.replace(ph, function(O, S) {
      return S || w[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Me.p(t), s = le(a), u = (s.utcOffset() - this.utcOffset()) * To, d = this - s, v = Me.m(this, s);
    return v = (l = {}, l[tn] = v / 12, l[Br] = v, l[Xu] = v / 3, l[Yt] = (d - u) / fh, l[an] = (d - u) / vh, l[qa] = d / $l, l[Ga] = d / To, l[Wa] = d / Qa, l)[i] || d, o ? v : Me.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Br).$D;
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
[["$ms", Li], ["$s", Wa], ["$m", Ga], ["$H", qa], ["$W", an], ["$M", Br], ["$y", tn], ["$D", Xa]].forEach(function(e) {
  Ku[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
le.extend = function(e, r) {
  return e.$i || (e(r, ho, le), e.$i = !0), le;
};
le.locale = xt;
le.isDayjs = Ri;
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
}], Ph = {
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
  onPreview: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Oh
} = _("picker-header");
function Vh(e, r) {
  var n = ae("var-icon"), a = ae("var-button");
  return p(), P(
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
    ), z(
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
          default: ve(() => [(p(), P(
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
var Qu = Q({
  name: "PanelHeader",
  components: {
    VarButton: rr,
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
  setup(e, r) {
    var {
      emit: n
    } = r, a = M(!1), t = M(0), o = L(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return U(v) + t.value;
      var f = (i = Je.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Je.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
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
Qu.render = Vh;
const _u = Qu;
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
  n: Dt,
  classes: Mh
} = _("month-picker"), {
  n: At
} = _("date-picker");
function Eh(e, r) {
  var n = ae("panel-header"), a = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
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
          default: ve(() => [(p(), P("ul", {
            key: e.panelKey
          }, [(p(!0), P(
            Ve,
            null,
            Ue(e.MONTH_LIST, (t) => (p(), P("li", {
              key: t.index
            }, [Z(
              a,
              Be({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, oi({}, e.buttonProps(t.index)), {
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
var xu = Q({
  name: "MonthPickerPanel",
  components: {
    VarButton: rr,
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
    }), u = L(() => e.choose.chooseYear === e.preview.previewYear), d = L(() => e.preview.previewYear === a), v = (O) => {
      var S, $;
      return (S = ($ = Je.value.datePickerMonthDict) == null ? void 0 : $[O].abbr) != null ? S : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: $,
          max: I
        }
      } = e, T = !0, D = !0, b = S + "-" + O;
      return I && (T = le(b).isSameOrBefore(le(I), "month")), $ && (D = le(b).isSameOrAfter(le($), "month")), T && D;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: $,
          chooseRangeMonth: I
        },
        componentProps: {
          type: T,
          range: D
        }
      } = e;
      if (D) {
        if (!I.length)
          return !1;
        var b = le(O).isSameOrBefore(le(I[1]), "month"), V = le(O).isSameOrAfter(le(I[0]), "month");
        return b && V;
      }
      return T === "month" ? S.includes(O) : $.some((j) => j.includes(O));
    }, g = (O) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: $
        },
        componentProps: {
          allowedDates: I,
          color: T,
          multiple: D,
          range: b
        }
      } = e, V = $ + "-" + O, j = () => b || D ? m(V) : (S == null ? void 0 : S.index) === O && u.value, R = () => f(O) ? I ? !I(V) : !1 : !0, K = R(), X = () => K ? !0 : b || D ? !m(V) : !u.value || (S == null ? void 0 : S.index) !== O, te = () => d.value && t === O && e.componentProps.showCurrent ? (b || D || u.value) && K ? !0 : b || D ? !m(V) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, B = () => K ? "" : te() ? T ?? "" : j() ? "" : At() + "-color-cover", C = B().startsWith(At());
      return {
        outline: te(),
        text: X(),
        color: X() ? "" : T,
        textColor: C ? "" : B(),
        [At() + "-color-cover"]: C,
        class: Mh(Dt("button"), [K, Dt("button--disabled")]),
        disabled: K
      };
    }, h = (O, S) => {
      var $ = S.currentTarget;
      $.classList.contains(Dt("button--disabled")) || n("choose-month", O);
    }, y = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, w = (O) => {
      i.value.checkDate(O);
    };
    return ie(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: S,
          max: $
        }
      } = e;
      $ && (s.right = !le("" + (U(O) + 1)).isSameOrBefore(le($), "year")), S && (s.left = !le("" + (U(O) - 1)).isSameOrAfter(le(S), "year"));
    }, {
      immediate: !0
    }), {
      n: Dt,
      nDate: At,
      pack: Je,
      MONTH_LIST: jt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: g,
      getMonthAbbr: v,
      chooseMonth: h,
      checkDate: y
    };
  }
});
xu.render = Eh;
const Bh = xu;
var {
  n: Pl,
  classes: Ih
} = _("year-picker"), Nh = ["onClick"];
function Dh(e, r) {
  return p(), P(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), P(
      Ve,
      null,
      Ue(e.yearList, (n) => (p(), P(
        "li",
        {
          key: n,
          class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
          style: G({
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
var ed = Q({
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
      var u = [U(l) + 100, U(l) - 100];
      if (i) {
        var d = le(i).format("YYYY-MM-D"), v = U(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = le(s).format("YYYY-MM-D"), m = U(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return lr(() => {
      var o = document.querySelector("." + Pl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Pl,
      classes: Ih,
      yearList: a,
      chooseYear: t,
      toNumber: U
    };
  }
});
ed.render = Dh;
const Ah = ed;
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
le.extend(Zu);
le.extend(Ju);
var {
  n: Ya,
  classes: zh
} = _("day-picker"), {
  n: zt
} = _("date-picker");
function Lh(e, r) {
  var n = ae("panel-header"), a = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
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
          default: ve(() => [(p(), P("div", {
            key: e.panelKey
          }, [z(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), P(
              Ve,
              null,
              Ue(e.sortWeekList, (t) => (p(), P(
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
          ), z(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(p(!0), P(
              Ve,
              null,
              Ue(e.days, (t, o) => (p(), P("li", {
                key: o
              }, [Z(
                a,
                Be({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, ii({}, e.buttonProps(t)), {
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
var rd = Q({
  name: "DayPickerPanel",
  components: {
    VarButton: rr,
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
    }), v = L(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = L(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = L(() => {
      var b = st.findIndex((V) => V.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? st : st.slice(b).concat(st.slice(0, b));
    }), g = (b) => {
      var V, j;
      return (V = (j = Je.value.datePickerWeekDict) == null ? void 0 : j[b].abbr) != null ? V : "";
    }, h = (b) => b > 0 ? b : "", y = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: V
        }
      } = e, j = le(V + "-" + b.index).daysInMonth(), R = le(V + "-" + b.index + "-01").day(), K = m.value.findIndex((X) => X.index === "" + R);
      l.value = [...Array(K).fill(-1), ...Array.from(Array(j + 1).keys())].filter((X) => X);
    }, w = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: V
        },
        componentProps: {
          max: j,
          min: R
        }
      } = e;
      if (j) {
        var K = b + "-" + (U(V.index) + 1);
        d.right = !le(K).isSameOrBefore(le(j), "month");
      }
      if (R) {
        var X = b + "-" + (U(V.index) - 1);
        d.left = !le(X).isSameOrAfter(le(R), "month");
      }
    }, O = (b) => {
      var {
        preview: {
          previewYear: V,
          previewMonth: j
        },
        componentProps: {
          min: R,
          max: K
        }
      } = e, X = !0, te = !0, B = V + "-" + j.index + "-" + b;
      return K && (X = le(B).isSameOrBefore(le(K), "day")), R && (te = le(B).isSameOrAfter(le(R), "day")), X && te;
    }, S = (b) => {
      var {
        choose: {
          chooseDays: V,
          chooseRangeDay: j
        },
        componentProps: {
          range: R
        }
      } = e;
      if (R) {
        if (!j.length)
          return !1;
        var K = le(b).isSameOrBefore(le(j[1]), "day"), X = le(b).isSameOrAfter(le(j[0]), "day");
        return K && X;
      }
      return V.includes(b);
    }, $ = (b) => {
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
          chooseDay: V
        },
        preview: {
          previewYear: j,
          previewMonth: R
        },
        componentProps: {
          allowedDates: K,
          color: X,
          multiple: te,
          range: B
        }
      } = e, C = j + "-" + R.index + "-" + b, N = () => B || te ? S(C) : U(V) === b && f.value, J = () => O(b) ? K ? !K(C) : !1 : !0, H = J(), A = () => H ? !0 : B || te ? !S(C) : !f.value || U(V) !== b, E = () => v.value && U(o) === b && e.componentProps.showCurrent ? (B || te || f.value) && H ? !0 : B || te ? !S(C) : f.value ? V !== o : !0 : !1, W = () => H ? "" : E() ? X ?? "" : N() ? "" : zt() + "-color-cover", ee = W().startsWith(zt());
      return {
        text: A(),
        outline: E(),
        textColor: ee ? "" : W(),
        [zt() + "-color-cover"]: ee,
        class: zh(Ya("button"), Ya("button--usable"), [H, Ya("button--disabled")]),
        disabled: H
      };
    }, I = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, n("check-preview", "month", b);
    }, T = (b, V) => {
      var j = V.currentTarget;
      j.classList.contains(Ya("button--disabled")) || n("choose-day", b);
    }, D = (b) => {
      u.value.checkDate(b);
    };
    return lr(() => {
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
      forwardRef: D,
      filterDay: h,
      getDayAbbr: g,
      checkDate: I,
      chooseDay: T,
      buttonProps: $
    };
  }
});
rd.render = Lh;
const Rh = rd;
var {
  n: Uh,
  classes: Fh
} = _("date-picker");
function Hh(e, r) {
  var n = ae("year-picker-panel"), a = ae("month-picker-panel"), t = ae("day-picker-panel");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: G({
          background: e.headerColor || e.color
        })
      },
      [z(
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
      ), z(
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
              return [e.type === "month" ? (p(), P("div", {
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
              )])])) : (p(), P("div", {
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
              )]) : Y(e.$slots, "date", Pt(Be({
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
    ), z(
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
var nd = Q({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Bh,
    YearPickerPanel: Ah,
    DayPickerPanel: Rh
  },
  props: Ph,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = le().format("YYYY-MM-D"), [l, i] = o.split("-"), s = jt.find((oe) => oe.index === i), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), g = M(), h = M(s), y = M(l), w = M(!1), O = M([]), S = M([]), $ = M([]), I = M([]), T = M(null), D = M(null), b = Ae({
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
    }), V = L(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: O.value,
      chooseDays: S.value,
      chooseRangeMonth: $.value,
      chooseRangeDay: I.value
    })), j = L(() => ({
      previewMonth: h.value,
      previewYear: y.value
    })), R = L(() => {
      var {
        multiple: oe,
        range: be
      } = e;
      if (be)
        return $.value.length ? $.value[0] + " ~ " + $.value[1] : "";
      var pe = "";
      if (f.value) {
        var Se, $e;
        pe = (Se = ($e = Je.value.datePickerMonthDict) == null ? void 0 : $e[f.value.index].name) != null ? Se : "";
      }
      return oe ? "" + O.value.length + Je.value.datePickerSelected : pe;
    }), K = L(() => {
      var oe, be, pe, Se, {
        multiple: $e,
        range: Re
      } = e;
      if (Re) {
        var ar = I.value.map((So) => le(So).format("YYYY-MM-DD"));
        return ar.length ? ar[0] + " ~ " + ar[1] : "";
      }
      if ($e)
        return "" + S.value.length + Je.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var wr = le(m.value + "-" + f.value.index + "-" + g.value).day(), Ha = st.find((So) => So.index === "" + wr), Ji = (oe = (be = Je.value.datePickerWeekDict) == null ? void 0 : be[Ha.index].name) != null ? oe : "", Bv = (pe = (Se = Je.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? pe : "", Iv = Na(g.value, 2, "0");
      return Je.value.lang === "zh-CN" ? f.value.index + "-" + Iv + " " + Ji.slice(0, 3) : Ji.slice(0, 3) + ", " + Bv.slice(0, 3) + " " + g.value;
    }), X = L(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), te = L(() => !e.touchable || ["", "year"].includes(X.value)), B = L(() => {
      var oe, be, pe, Se, $e = le(m.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + g.value).day(), Re = g.value ? Na(g.value, 2, "0") : "";
      return {
        week: "" + $e,
        year: (be = m.value) != null ? be : "",
        month: (pe = (Se = f.value) == null ? void 0 : Se.index) != null ? pe : "",
        date: Re
      };
    }), C = L(() => V.value.chooseRangeDay.map((oe) => le(oe).format("YYYY-MM-DD"))), N = L(() => m.value === y.value), J = L(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === h.value.index;
    }), H = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, A = (oe) => {
      if (!te.value) {
        var {
          clientX: be,
          clientY: pe
        } = oe.touches[0];
        r = be, n = pe;
      }
    }, E = (oe, be) => oe >= be && oe > 20 ? "x" : "y", W = (oe) => {
      if (!te.value) {
        var {
          clientX: be,
          clientY: pe
        } = oe.touches[0], Se = be - r, $e = pe - n;
        t = E(Math.abs(Se), Math.abs($e)), a = Se > 0 ? "prev" : "next";
      }
    }, ee = () => {
      if (!(te.value || t !== "x")) {
        var oe = X.value === "month" ? T : D;
        io(() => {
          oe.value.forwardRef(a), Ye();
        });
      }
    }, se = (oe, be) => {
      var pe = be === "month" ? $ : I;
      if (pe.value = v.value ? [oe, oe] : [pe.value[0], oe], v.value = !v.value, v.value) {
        var Se = le(pe.value[0]).isAfter(pe.value[1]), $e = Se ? [pe.value[1], pe.value[0]] : [...pe.value];
        k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
      }
    }, de = (oe, be) => {
      var pe = be === "month" ? O : S, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-DD", $e = pe.value.map((ar) => le(ar).format(Se)), Re = $e.findIndex((ar) => ar === oe);
      Re === -1 ? $e.push(oe) : $e.splice(Re, 1), k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
    }, we = (oe, be) => !m.value || !f.value ? !1 : N.value ? oe === "month" ? be.index < f.value.index : J.value ? be < U(g.value) : f.value.index > h.value.index : m.value > y.value, Oe = (oe) => {
      var {
        readonly: be,
        range: pe,
        multiple: Se,
        onChange: $e,
        "onUpdate:modelValue": Re
      } = e;
      if (!(oe < 0 || be)) {
        w.value = we("day", oe);
        var ar = y.value + "-" + h.value.index + "-" + oe, wr = le(ar).format("YYYY-MM-DD");
        pe ? se(wr, "day") : Se ? de(wr, "day") : (k(Re, wr), k($e, wr));
      }
    }, dr = (oe) => {
      var {
        type: be,
        readonly: pe,
        range: Se,
        multiple: $e,
        onChange: Re,
        onPreview: ar,
        "onUpdate:modelValue": wr
      } = e;
      if (w.value = we("month", oe), be === "month" && !pe) {
        var Ha = y.value + "-" + oe.index;
        Se ? se(Ha, "month") : $e ? de(Ha, "month") : (k(wr, Ha), k(Re, Ha));
      } else
        h.value = oe, k(ar, U(y.value), U(h.value.index));
      d.value = !1;
    }, ne = (oe) => {
      y.value = "" + oe, u.value = !1, d.value = !0, k(e.onPreview, U(y.value), U(h.value.index));
    }, ue = (oe, be) => {
      var pe = be === "prev" ? -1 : 1;
      if (oe === "year")
        y.value = "" + (U(y.value) + pe);
      else {
        var Se = U(h.value.index) + pe;
        Se < 1 && (y.value = "" + (U(y.value) - 1), Se = 12), Se > 12 && (y.value = "" + (U(y.value) + 1), Se = 1), h.value = jt.find(($e) => U($e.index) === Se);
      }
      k(e.onPreview, U(y.value), U(h.value.index));
    }, me = () => (e.multiple || e.range) && !Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, De = (oe) => Te(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ze = (oe, be) => {
      var pe = be === "month" ? $ : I, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = oe.map((wr) => le(wr).format(Se)).slice(0, 2), Re = pe.value.some((wr) => De(wr));
      if (!Re) {
        pe.value = $e;
        var ar = le(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && ar && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, qe = (oe, be) => {
      var pe = be === "month" ? O : S, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = Array.from(new Set(oe.map((Re) => le(Re).format(Se))));
      pe.value = $e.filter((Re) => Re !== "Invalid Date");
    }, He = (oe) => {
      var be = le(oe).format("YYYY-MM-D");
      if (!De(be)) {
        var [pe, Se, $e] = be.split("-"), Re = jt.find((ar) => ar.index === Se);
        f.value = Re, m.value = pe, g.value = $e, h.value = Re, y.value = pe;
      }
    }, Ye = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (oe) => {
      if (!(!me() || De(oe) || !oe))
        if (e.range) {
          if (!Te(oe))
            return;
          v.value = oe.length !== 1, Ze(oe, e.type);
        } else if (e.multiple) {
          if (!Te(oe))
            return;
          qe(oe, e.type);
        } else
          He(oe);
    }, {
      immediate: !0
    }), ie(X, Ye), {
      n: Uh,
      classes: Fh,
      monthPanelEl: T,
      dayPanelEl: D,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: R,
      getDateTitle: K,
      getPanelType: X,
      getChoose: V,
      getPreview: j,
      componentProps: b,
      slotProps: B,
      formatRange: C,
      clickEl: H,
      handleTouchstart: A,
      handleTouchmove: W,
      handleTouchend: ee,
      getChooseDay: Oe,
      getChooseMonth: dr,
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
var _S = Qn;
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
function Yh(e) {
  return ["left", "center", "right"].includes(e);
}
var jh = li({
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
  onBeforeClose: F(),
  onConfirm: F(),
  onCancel: F(),
  "onUpdate:show": F()
}, Qe(Vt, [
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
var {
  n: Wh,
  classes: Gh
} = _("dialog");
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
      default: ve(() => [z(
        "div",
        Be({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: si({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [z(
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
        ), z(
          "div",
          {
            class: c(e.n("message")),
            style: G({
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
        ), z(
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
          )) : x("v-if", !0), e.confirmButton ? (p(), ye(
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
var ad = Q({
  name: "VarDialog",
  components: {
    VarPopup: Sr,
    VarButton: rr
  },
  inheritAttrs: !1,
  props: jh,
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
      pack: Je,
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
        k(a.onConfirm), r("confirm");
      },
      onCancel: () => {
        k(a.onCancel), r("cancel");
      },
      onClose: () => {
        k(a.onClose), r("close");
      },
      onClosed: () => {
        k(a.onClosed), t(), ln === a && (ln = null);
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
var xS = yn, Kh = {
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
} = _("divider");
function Qh(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [Y(e.$slots, "default", {}, () => [e.description ? (p(), P(
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
var td = Q({
  name: "VarDivider",
  props: Kh,
  setup(e, r) {
    var {
      slots: n
    } = r, a = Ae({
      withText: !1
    }), t = L(() => Bo(e.inset) ? e.inset : !0), o = L(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Bo(i) || i === 0)
        return Ka({}, d);
      var v = U(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Ka({}, d, {
        height: "calc(80% - " + ge(f) + ")"
      }) : Ka({}, d, {
        width: "calc(100% - " + ge(f) + ")",
        left: v > 0 ? ge(f) : ge(0)
      });
    }), l = () => {
      a.withText = !!n.default || !!e.description;
    };
    return lr(() => {
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
var ek = _n, _h = {
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
var jr = "top", Vn = "bottom", Aa = "right", bn = "left", go = "auto", yo = [jr, Vn, Aa, bn], bo = "start", bt = "end", xh = "clippingParents", od = "viewport", it = "popper", eg = "reference", Ol = /* @__PURE__ */ yo.reduce(function(e, r) {
  return e.concat([r + "-" + bo, r + "-" + bt]);
}, []), id = /* @__PURE__ */ [].concat(yo, [go]).reduce(function(e, r) {
  return e.concat([r, r + "-" + bo, r + "-" + bt]);
}, []), rg = "beforeRead", ng = "read", ag = "afterRead", tg = "beforeMain", og = "main", ig = "afterMain", lg = "beforeWrite", sg = "write", ug = "afterWrite", ui = [rg, ng, ag, tg, og, ig, lg, sg, ug];
function Wr(e) {
  return e.split("-")[0];
}
var dg = {
  start: "end",
  end: "start"
};
function Vl(e) {
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
function Ui(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function Bn(e) {
  return ((za(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var vt = Math.max, Ml = Math.min, _a = Math.round;
function di() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function ld() {
  return !/^((?!chrome|android).)*safari/i.test(di());
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
function Fi(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Hi(e) {
  return xa(Bn(e)).left + Fi(e).scrollLeft;
}
function vg(e, r) {
  var n = Mr(e), a = Bn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = ld();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Hi(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function fg(e) {
  var r, n = Bn(e), a = Fi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = vt(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = vt(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Hi(e), s = -a.scrollTop;
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
    (Ui(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Bn(e)
  );
}
function Yi(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function sd(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : kr(e) && Yi(e) ? e : sd(wo(e));
}
function ft(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = sd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], Yi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ft(wo(l)))
  );
}
function cg(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function El(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function mg(e) {
  var r = /firefox/i.test(di()), n = /Trident/i.test(di());
  if (n && kr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = wo(e);
  for (Ui(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Hr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function ji(e) {
  for (var r = Mr(e), n = El(e); n && cg(n) && Ar(n).position === "static"; )
    n = El(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && Ar(n).position === "static") ? r : n || mg(e) || r;
}
function pg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Ui(n)) {
    var a = r;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function vi(e) {
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
  return r === od ? vi(vg(e, n)) : za(r) ? hg(r, n) : vi(fg(Bn(e)));
}
function gg(e) {
  var r = ft(wo(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && kr(e) ? ji(e) : e;
  return za(a) ? r.filter(function(t) {
    return za(t) && pg(t, a) && Hr(t) !== "body";
  }) : [];
}
function yg(e, r, n, a) {
  var t = r === "clippingParents" ? gg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Bl(e, u, a);
    return s.top = vt(d.top, s.top), s.right = Ml(d.right, s.right), s.bottom = Ml(d.bottom, s.bottom), s.left = vt(d.left, s.left), s;
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
  var r = e.reference, n = e.element, a = e.placement, t = a ? Wr(a) : null, o = a ? wt(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case jr:
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
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? xh : i, u = n.rootBoundary, d = u === void 0 ? od : u, v = n.elementContext, f = v === void 0 ? it : v, m = n.altBoundary, g = m === void 0 ? !1 : m, h = n.padding, y = h === void 0 ? 0 : h, w = Cg(typeof y != "number" ? y : Sg(y, yo)), O = f === it ? eg : it, S = e.rects.popper, $ = e.elements[g ? O : f], I = yg(za($) ? $ : $.contextElement || Bn(e.elements.popper), s, d, l), T = xa(e.elements.reference), D = ud({
    reference: T,
    element: S,
    strategy: "absolute",
    placement: t
  }), b = vi(Object.assign({}, S, D)), V = f === it ? b : T, j = {
    top: I.top - V.top + w.top,
    bottom: V.bottom - I.bottom + w.bottom,
    left: I.left - V.left + w.left,
    right: V.right - I.right + w.right
  }, R = e.modifiersData.offset;
  if (f === it && R) {
    var K = R[t];
    Object.keys(j).forEach(function(X) {
      var te = [Aa, Vn].indexOf(X) >= 0 ? 1 : -1, B = [jr, Vn].indexOf(X) >= 0 ? "y" : "x";
      j[X] += K[B] * te;
    });
  }
  return j;
}
function kg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? id : s, d = wt(a), v = d ? i ? Ol : Ol.filter(function(g) {
    return wt(g) === d;
  }) : yo, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, h) {
    return g[h] = dd(e, {
      placement: h,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Wr(h)], g;
  }, {});
  return Object.keys(m).sort(function(g, h) {
    return m[g] - m[h];
  });
}
function $g(e) {
  if (Wr(e) === go)
    return [];
  var r = Wt(e);
  return [Vl(e), r, Vl(r)];
}
function Tg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, g = m === void 0 ? !0 : m, h = n.allowedAutoPlacements, y = r.options.placement, w = Wr(y), O = w === y, S = s || (O || !g ? [Wt(y)] : $g(y)), $ = [y].concat(S).reduce(function(se, de) {
      return se.concat(Wr(de) === go ? kg(r, {
        placement: de,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : de);
    }, []), I = r.rects.reference, T = r.rects.popper, D = /* @__PURE__ */ new Map(), b = !0, V = $[0], j = 0; j < $.length; j++) {
      var R = $[j], K = Wr(R), X = wt(R) === bo, te = [jr, Vn].indexOf(K) >= 0, B = te ? "width" : "height", C = dd(r, {
        placement: R,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), N = te ? X ? Aa : bn : X ? Vn : jr;
      I[B] > T[B] && (N = Wt(N));
      var J = Wt(N), H = [];
      if (o && H.push(C[K] <= 0), i && H.push(C[N] <= 0, C[J] <= 0), H.every(function(se) {
        return se;
      })) {
        V = R, b = !1;
        break;
      }
      D.set(R, H);
    }
    if (b)
      for (var A = g ? 3 : 1, E = function(de) {
        var we = $.find(function(Oe) {
          var dr = D.get(Oe);
          if (dr)
            return dr.slice(0, de).every(function(ne) {
              return ne;
            });
        });
        if (we)
          return V = we, "break";
      }, W = A; W > 0; W--) {
        var ee = E(W);
        if (ee === "break")
          break;
      }
    r.placement !== V && (r.modifiersData[a]._skip = !0, r.placement = V, r.reset = !0);
  }
}
const Pg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Tg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Og(e, r, n) {
  var a = Wr(e), t = [bn, jr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
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
    return d[v] = Og(v, r.rects, o), d;
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
function Eg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bg(e) {
  return e === Mr(e) || !kr(e) ? Fi(e) : Eg(e);
}
function Ig(e) {
  var r = e.getBoundingClientRect(), n = _a(r.width) / e.offsetWidth || 1, a = _a(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function Ng(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Ig(r), o = Bn(r), l = xa(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Yi(o)) && (i = Bg(r)), kr(r) ? (s = xa(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = Hi(o))), {
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
  return ui.reduce(function(n, a) {
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
var In = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Rg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Il = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ug(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Il).filter(function(n, a, t) {
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
          ui.indexOf(r.phase) < 0 && console.error(rn(In, r.name, '"phase"', "either " + ui.join(", "), '"' + String(r.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Il.map(function(a) {
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
var Nl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Yg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Dl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Al() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function jg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Dl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Dl, o),
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
        h(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: za(i) ? ft(i) : i.contextElement ? ft(i.contextElement) : [],
          popper: ft(s)
        };
        var S = zg(Hg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(R) {
          return R.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Fg([].concat(S, d.options.modifiers), function(R) {
            var K = R.name;
            return K;
          });
          if (Ug($), Wr(d.options.placement) === go) {
            var I = d.orderedModifiers.find(function(R) {
              var K = R.name;
              return K === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var T = Ar(s), D = T.marginTop, b = T.marginRight, V = T.marginBottom, j = T.marginLeft;
          [D, b, V, j].some(function(R) {
            return parseFloat(R);
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
          var w = d.elements, O = w.reference, S = w.popper;
          if (!Al(O, S)) {
            process.env.NODE_ENV !== "production" && console.error(Nl);
            return;
          }
          d.rects = {
            reference: Ng(O, ji(S), d.options.strategy === "fixed"),
            popper: Dg(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
            return d.modifiersData[R.name] = Object.assign({}, R.data);
          });
          for (var $ = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(Yg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var T = d.orderedModifiers[I], D = T.fn, b = T.options, V = b === void 0 ? {} : b, j = T.name;
            typeof D == "function" && (d = D({
              state: d,
              options: V,
              name: j,
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
        h(), f = !0;
      }
    };
    if (!Al(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Nl), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var w = y.name, O = y.options, S = O === void 0 ? {} : O, $ = y.effect;
        if (typeof $ == "function") {
          var I = $({
            state: d,
            name: w,
            instance: m,
            options: S
          }), T = function() {
          };
          v.push(I || T);
        }
      });
    }
    function h() {
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
function zl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, h = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  m = y.x, h = y.y;
  var w = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), S = bn, $ = jr, I = window;
  if (u) {
    var T = ji(n), D = "clientHeight", b = "clientWidth";
    if (T === Mr(n) && (T = Bn(n), Ar(T).position !== "static" && i === "absolute" && (D = "scrollHeight", b = "scrollWidth")), T = T, t === jr || (t === bn || t === Aa) && o === bt) {
      $ = Vn;
      var V = v && T === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[D]
      );
      h -= V - a.height, h *= s ? 1 : -1;
    }
    if (t === bn || (t === jr || t === Vn) && o === bt) {
      S = Aa;
      var j = v && T === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[b]
      );
      m -= j - a.width, m *= s ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: i
  }, u && Kg), K = d === !0 ? Zg({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  if (m = K.x, h = K.y, s) {
    var X;
    return Object.assign({}, R, (X = {}, X[$] = O ? "0" : "", X[S] = w ? "0" : "", X.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", X));
  }
  return Object.assign({}, R, (r = {}, r[$] = O ? h + "px" : "", r[S] = w ? m + "px" : "", r.transform = "", r));
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
    placement: Wr(r.placement),
    variation: wt(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, zl(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, zl(Object.assign({}, d, {
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
    !kr(o) || !Hr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
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
      !kr(t) || !Hr(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
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
function Ll(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Rl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ll(o, a, t, l, i, "throw", s);
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
    emit(T, D) {
      D ? (S(), k(e.onOpen)) : k(e.onClose);
    }
  }), {
    zIndex: o
  } = Mt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: T,
      height: D
    } = Da(r.value);
    a.value = {
      width: je(T),
      height: je(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, $());
  }, v = /* @__PURE__ */ function() {
    var T = Rl(function* () {
      e.trigger === "hover" && (s = !1, yield Lr(), !i && I());
    });
    return function() {
      return T.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var T = Rl(function* () {
      e.trigger === "hover" && (i = !1, yield Lr(), !s && I());
    });
    return function() {
      return T.apply(this, arguments);
    };
  }(), g = () => {
    $();
  }, h = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  }, y = () => {
    e.trigger === "click" && h();
  }, w = () => {
    u();
    var T = {
      x: je(e.offsetX),
      y: je(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: T.x,
          distance: T.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: T.x,
          distance: T.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: T.x,
          distance: T.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: T.x,
          distance: -T.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: T.x,
          distance: -T.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: T.x,
          distance: -T.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: T.y,
          distance: T.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: T.y,
          distance: -T.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: T.y,
          distance: -T.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: T.x,
          distance: -T.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: T.x,
          distance: T.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: T.y,
          distance: T.x
        };
    }
  }, O = () => {
    var {
      placement: T,
      skidding: D,
      distance: b
    } = w(), V = [no({}, Pg, {
      enabled: t.value
    }), no({}, Mg, {
      options: {
        offset: [D, b]
      }
    })];
    return {
      placement: T,
      modifiers: V
    };
  }, S = () => {
    l.setOptions(O());
  }, $ = () => {
    var {
      disabled: T
    } = e;
    T || (t.value = !0, k(e["onUpdate:show"], !0));
  }, I = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  };
  return Os(r, "click", y), ie(() => e.offsetX, S), ie(() => e.offsetY, S), ie(() => e.placement, S), ie(() => e.disabled, I), ao(() => {
    var T, D = e.reference ? (T = r.value) == null ? void 0 : T.querySelector(e.reference) : r.value;
    l = ny(D ?? r.value, n.value, O());
  }), nt(() => {
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
    handlePopoverClose: h,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: S,
    open: $,
    close: I
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: ly,
  classes: sy
} = _("tooltip");
function uy(e, r) {
  return p(), P(
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
    [Y(e.$slots, "default"), (p(), ye(
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
          default: ve(() => [ke(z(
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
            [z(
              "div",
              {
                style: G({
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
var fd = Q({
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
      resize: g
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
      resize: g,
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
var rk = wn;
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
var {
  n: fy,
  classes: cy
} = _("ellipsis"), my = {
  key: 0
};
function py(e, r) {
  var n = ae("var-tooltip");
  return p(), ye(
    n,
    Pt(to(e.tooltip)),
    {
      content: ve(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), P(
          "span",
          my,
          re(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [z(
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
var cd = Q({
  name: "VarEllipsis",
  components: {
    VarTooltip: wn
  },
  props: vy,
  setup(e) {
    var r = M(!1), n = L(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = L(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : fi({
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
var nk = xn;
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
  onClick: F(),
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:active": F()
};
function Ul(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  classes: Fl,
  n: vr
} = _("fab");
const ea = Q({
  name: "VarFab",
  inheritAttrs: !1,
  props: by,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = Ms(e, "active"), o = M(null), {
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
    }) : null : ke(Z(rr, {
      "var-fab-cover": !0,
      class: vr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Z(Pe, {
        "var-fab-cover": !0,
        class: Fl([t.value, vr("trigger-active-icon"), vr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: vr("--trigger-icon-animation")
      }, null)]
    }), [[$n, e.show]]), v = () => {
      var f, m, g = Vs((m = n.default == null ? void 0 : n.default()) != null ? m : []);
      return Z("div", Be({
        class: Fl(vr(), vr("--position-" + e.position), vr("--direction-" + e.direction), [e.fixed, vr("--fixed"), vr("--absolute")], [e.safeArea, vr("--safe-area")]),
        style: {
          zIndex: U(e.zIndex),
          top: ge(e.top),
          bottom: ge(e.bottom),
          left: ge(e.left),
          right: ge(e.right)
        },
        ref: o,
        onClick: (h) => i(h, !t.value, g.length),
        onMouseleave: () => s(!1, g.length),
        onMouseenter: () => s(!0, g.length)
      }, a), [Z(Le, {
        name: vr("--active-transition")
      }, Ul(f = d()) ? f : {
        default: () => [f]
      }), Z(Le, {
        name: vr("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Z("div", {
          class: vr("actions"),
          onClick: (h) => h.stopPropagation()
        }, [g.map((h) => Z("div", {
          class: vr("action")
        }, [h]))]), [[$n, e.show && t.value && g.length]])]
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
        return Z(Ra, {
          to: f,
          disabled: l.value
        }, Ul(m = v()) ? m : {
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
var ak = ea;
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
function Hl(e, r, n, a, t, o, l) {
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
        Hl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Hl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ky
} = _("form");
function $y(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var md = Q({
  name: "VarForm",
  props: Cy,
  setup(e) {
    var r = L(() => e.disabled), n = L(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Im(), o = (d) => {
      setTimeout(() => {
        var v = Tn(d), f = v === window ? 0 : tl(v), m = tl(d) - f - je(e.scrollToErrorOffsetY);
        ht(v, {
          top: m,
          animation: Io
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
            var g, h = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(h);
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
const Gr = md;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
Gr.useValidation = Or;
Gr.useForm = Vr;
var tk = Gr;
function Ty(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Py = {
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: Oy,
  classes: Vy
} = _("image"), My = ["alt", "title", "lazy-error", "lazy-loading"], Ey = ["alt", "title", "src"];
function By(e, r) {
  var n = Ie("lazy"), a = Ie("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((p(), P(
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
    )), [[n, e.src]]) : (p(), P(
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
      Ey
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var pd = Q({
  name: "VarImage",
  directives: {
    Lazy: gt,
    Ripple: Ge
  },
  props: Py,
  setup(e) {
    var r = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && k(i, t), o._lazy.state === "error" && k(s, t)) : k(i, t);
    }, n = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && k(l, t);
    }, a = (t) => {
      k(e.onClick, t);
    };
    return {
      n: Oy,
      classes: Vy,
      toSizeUnit: ge,
      handleLoad: r,
      handleError: n,
      handleClick: a
    };
  }
});
pd.render = By;
const ra = pd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ok = ra, hd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Iy() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ur(hd);
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
  onChange: F()
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
function Ny(e) {
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
var Dy = 250, Ay = 20, {
  n: zy,
  classes: Ly
} = _("swipe"), Ry = ["onClick"];
function Uy(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [z(
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
    }, () => [e.indicator && e.length ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.length, (n, a) => (p(), P(
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
          Ry
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
var yd = Q({
  name: "VarSwipe",
  props: gd,
  setup(e) {
    var r = M(null), n = M(0), a = L(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Iy(), v = !1, f = !1, m = -1, g, h, y, w, O, S = (E) => s.find((W) => {
      var {
        index: ee
      } = W;
      return ee.value === E;
    }), $ = () => {
      e.loop && (o.value >= 0 && S(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && S(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, I = (E) => {
      var W = ir(E) ? E : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: ee
      } = e;
      return W <= -1 ? ee ? -1 : 0 : W >= d.value ? ee ? d.value : d.value - 1 : W;
    }, T = (E) => {
      var {
        loop: W
      } = e;
      return E === -1 ? W ? d.value - 1 : 0 : E === d.value ? W ? 0 : d.value - 1 : E;
    }, D = (E) => {
      var {
        loop: W
      } = e;
      return E < 0 ? W ? d.value - 1 : 0 : E > d.value - 1 ? W ? 0 : d.value - 1 : E;
    }, b = (E) => {
      var W = o.value >= n.value, ee = o.value <= -t.value, se = 0, de = -(t.value - n.value);
      l.value = !0, (W || ee) && (l.value = !0, o.value = ee ? se : de, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), io(() => {
        l.value = !1, k(E);
      });
    }, V = () => {
      v || (i.value = D(U(e.initialIndex)), v = !0);
    }, j = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (R(), m = window.setTimeout(() => {
        N(), j();
      }, U(E)));
    }, R = () => {
      m && clearTimeout(m);
    }, K = (E, W) => {
      if (E > W && E > 10)
        return "horizontal";
      if (W > E && W > 10)
        return "vertical";
    }, X = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: W,
          clientY: ee
        } = E.touches[0];
        g = W, h = ee, y = performance.now(), f = !0, R(), b(() => {
          l.value = !0;
        });
      }
    }, te = (E) => {
      var {
        touchable: W,
        vertical: ee
      } = e;
      if (!(!f || !W)) {
        var {
          clientX: se,
          clientY: de
        } = E.touches[0], we = Math.abs(se - g), Oe = Math.abs(de - h), dr = K(we, Oe), ne = ee ? "vertical" : "horizontal";
        if (dr === ne) {
          E.preventDefault();
          var ue = w !== void 0 ? se - w : 0, me = O !== void 0 ? de - O : 0;
          w = se, O = de, o.value += ee ? me : ue, $();
        }
      }
    }, B = () => {
      if (f) {
        var {
          vertical: E,
          onChange: W
        } = e, ee = E ? O < h : w < g, se = Math.abs(E ? h - O : g - w), de = performance.now() - y <= Dy && se >= Ay, we = de ? I(ee ? i.value + 1 : i.value - 1) : I();
        f = !1, l.value = !1, w = void 0, O = void 0, o.value = we * -n.value;
        var Oe = i.value;
        i.value = T(we), j(), Oe !== i.value && k(W, i.value);
      }
    }, C = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((E) => {
        E.setTranslate(0);
      }), j(), setTimeout(() => {
        l.value = !1;
      }));
    }, N = (E) => {
      if (!(d.value <= 1)) {
        V();
        var {
          loop: W,
          onChange: ee
        } = e, se = i.value;
        i.value = D(se + 1), (E == null ? void 0 : E.event) !== !1 && k(ee, i.value), b(() => {
          if (se === d.value - 1 && W) {
            S(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          se !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, J = (E) => {
      if (!(d.value <= 1)) {
        V();
        var {
          loop: W,
          onChange: ee
        } = e, se = i.value;
        i.value = D(se - 1), (E == null ? void 0 : E.event) !== !1 && k(ee, i.value), b(() => {
          if (se === 0 && W) {
            S(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          se !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, H = (E, W) => {
      if (!(d.value <= 1 || E === i.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var ee = E > i.value ? N : J, se = Math.abs(E - i.value);
        Array.from({
          length: se
        }).forEach((de, we) => {
          ee({
            event: we === se - 1 ? W == null ? void 0 : W.event : !1
          });
        });
      }
    }, A = {
      size: n,
      vertical: a
    };
    return u(A), ie(() => d.value, /* @__PURE__ */ Ny(function* () {
      yield Lr(), V(), C();
    })), Mn(C), xr(R), nt(R), Rr(() => window, "resize", C), {
      n: zy,
      classes: Ly,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: X,
      handleTouchmove: te,
      handleTouchend: B,
      next: N,
      prev: J,
      to: H,
      resize: C,
      toNumber: U
    };
  }
});
yd.render = Uy;
const qr = yd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var ik = qr;
function Fy() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = sr(hd);
  return e || Pr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Hy
} = _("swipe-item");
function Yy(e, r) {
  return p(), P(
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
var bd = Q({
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
const Xr = bd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var lk = Xr;
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
var jy = ci({
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
  "onUpdate:show": F(),
  onLongPress: F()
}, Qe(gd, ["loop", "indicator", "onChange"]), Qe(Vt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: jl,
  classes: Wy
} = _("image-preview"), Po = 12, Wl = 200, Gy = 350, Gl = 200, qy = 500, Xy = ["onTouchstart"], Ky = ["src", "alt"];
function Zy(e, r) {
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
          default: ve(() => [(p(!0), P(
            Ve,
            null,
            Ue(e.images, (l, i) => (p(), ye(
              n,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [z(
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
                  [z(
                    "img",
                    {
                      class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Ky
                  )],
                  46,
                  Xy
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
            }, () => [e.indicator && e.images.length > 1 ? (p(), P(
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
      ), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), ye(
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
      )) : x("v-if", !0)]), z(
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
var wd = Q({
  name: "VarImagePreview",
  components: {
    VarSwipe: qr,
    VarSwipeItem: Xr,
    VarPopup: Sr,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: jy,
  setup(e) {
    var r = M(!1), n = L(() => {
      var {
        images: B,
        current: C
      } = e, N = B.findIndex((J) => J === C);
      return N >= 0 ? N : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, v = null, f = null, m = !1, g = L(() => {
      var {
        imagePreventDefault: B,
        show: C
      } = e;
      return C && B;
    }), h = (B, C) => {
      var {
        clientX: N,
        clientY: J
      } = B, {
        clientX: H,
        clientY: A
      } = C;
      return Math.abs(Math.sqrt(Math.pow(H - N, 2) + Math.pow(A - J, 2)));
    }, y = (B, C) => ({
      clientX: B.clientX,
      clientY: B.clientY,
      timestamp: performance.now(),
      target: C
    }), w = () => {
      a.value = U(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Gl);
    }, O = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, S = (B) => d ? h(d, B) <= Po && B.timestamp - d.timestamp <= Wl && d.target === B.target : !1, $ = (B) => !B || !u || !d ? !1 : h(u, d) <= Po && performance.now() - d.timestamp < Gy && (B === u.target || B.parentNode === u.target), I = () => {
      window.clearTimeout(f), m = !1, u = null;
    }, T = (B) => {
      if (window.clearTimeout(f), m) {
        m = !1;
        return;
      }
      var C = $(B.target);
      v = window.setTimeout(() => {
        C && X(), u = null;
      }, Wl);
    }, D = (B, C) => {
      window.clearTimeout(v), window.clearTimeout(f);
      var N = y(B.touches[0], B.currentTarget);
      if (u = N, f = window.setTimeout(() => {
        var {
          onLongPress: J
        } = e;
        m = !0, k(J, C);
      }, qy), S(N)) {
        a.value > 1 ? O() : w();
        return;
      }
      d = N;
    }, b = (B) => {
      var {
        offsetWidth: C,
        offsetHeight: N
      } = B, {
        naturalWidth: J,
        naturalHeight: H
      } = B.querySelector("." + jl("image"));
      return {
        width: C,
        height: N,
        imageRadio: H / J,
        rootRadio: N / C,
        zoom: U(e.zoom)
      };
    }, V = (B) => {
      var {
        zoom: C,
        imageRadio: N,
        rootRadio: J,
        width: H,
        height: A
      } = b(B);
      if (!N)
        return 0;
      var E = N > J ? A / N : H;
      return Math.max(0, (C * E - H) / 2) / C;
    }, j = (B) => {
      var {
        zoom: C,
        imageRadio: N,
        rootRadio: J,
        width: H,
        height: A
      } = b(B);
      if (!N)
        return 0;
      var E = N > J ? A : H * N;
      return Math.max(0, (C * E - A) / 2) / C;
    }, R = (B, C, N) => B + C >= N ? N : B + C <= -N ? -N : B + C, K = (B) => {
      if (d) {
        var C = B.currentTarget, N = y(B.touches[0], C);
        if (h(N, d) > Po && window.clearTimeout(f), a.value > 1) {
          var J = N.clientX - d.clientX, H = N.clientY - d.clientY, A = V(C), E = j(C);
          t.value = R(t.value, J, A), o.value = R(o.value, H, E);
        }
        d = N;
      }
    }, X = () => {
      if (a.value > 1) {
        O(), setTimeout(() => k(e["onUpdate:show"], !1), Gl);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, te = (B) => {
      e.imagePreventDefault && e.show && B.preventDefault();
    };
    return Rr(() => document, "contextmenu", te), ie(() => e.show, (B) => {
      r.value = B;
    }, {
      immediate: !0
    }), {
      n: jl,
      classes: Wy,
      isPreventDefault: g,
      initialIndex: n,
      popupShow: r,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: D,
      handleTouchmove: K,
      handleTouchend: T,
      handleTouchcancel: I,
      close: X
    };
  }
});
wd.render = Zy;
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
function Jy(e) {
  return e === void 0 && (e = {}), Fe(e) ? ct({}, mt, {
    images: [e]
  }) : Te(e) ? ct({}, mt, {
    images: e
  }) : ct({}, mt, e);
}
function zr(e) {
  if (tt()) {
    zr.close();
    var r = Jy(e), n = Ae(r);
    n.teleport = "body", sn = n;
    var {
      unmountInstance: a
    } = ot(Cn, n, {
      onClose: () => k(n.onClose),
      onClosed: () => {
        k(n.onClosed), a(), sn === n && (sn = null);
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
var sk = Cn, Gt = {
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
  onScroll: F()
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
  n: Qy,
  classes: _y
} = _("sticky");
function xy(e, r) {
  return p(), P(
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
    [z(
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
var Cd = Q({
  name: "VarSticky",
  props: Gt,
  setup(e) {
    var r = M(null), n = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = L(() => !e.disabled && e.cssMode), v = L(() => !e.disabled && !e.cssMode && a.value), f = L(() => je(e.offsetTop)), m, g = () => {
      var {
        cssMode: S,
        disabled: $
      } = e;
      if (!$) {
        var I = 0;
        if (m !== window) {
          var {
            top: T
          } = We(m);
          I = T;
        }
        var D = n.value, b = r.value, {
          top: V,
          left: j
        } = We(b), R = V - I;
        return R <= f.value ? (S || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = I + f.value + "px", o.value = j + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: R,
          isFixed: !1
        });
      }
    }, h = () => {
      if (m) {
        var S = g();
        S && k(e.onScroll, S.offsetTop, S.isFixed);
      }
    }, y = /* @__PURE__ */ function() {
      var S = Xl(function* () {
        a.value = !1, yield rf(), g();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var S = Xl(function* () {
        yield Lr(), m = Tn(r.value), m !== window && m.addEventListener("scroll", h), h();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", h);
    };
    return ie(() => e.disabled, y), lr(w), nt(O), xr(O), Rr(() => window, "scroll", h), Rr(() => window, "resize", y), {
      n: Qy,
      classes: _y,
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
      toNumber: U
    };
  }
});
Cd.render = xy;
const Kr = Cd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var uk = Kr, Sd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function eb() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = ur(Sd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function rb() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = sr(Sd);
  return n || Pr("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var nb = {
  index: {
    type: [Number, String]
  }
}, {
  n: ab,
  classes: tb
} = _("index-anchor");
function ob(e, r) {
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
      default: ve(() => [z(
        "div",
        Be({
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
var kd = Q({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Kr
  },
  inheritAttrs: !1,
  props: nb,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = rb(), t = M(0), o = M(!1), l = L(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, g = (y) => {
      o.value = y;
    }, h = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: g
    };
    return a(h), {
      n: ab,
      classes: tb,
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
kd.render = ob;
const na = kd;
na.install = function(e) {
  e.component(na.name, na);
};
var dk = na, ib = {
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
  onClick: F(),
  onChange: F()
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
  n: lb,
  classes: sb
} = _("index-bar"), ub = ["onClick"];
function db(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [Y(e.$slots, "default"), z(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.anchorNameList, (n) => (p(), P(
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
          re(n),
          15,
          ub
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
var $d = Q({
  name: "VarIndexBar",
  props: ib,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = eb(), t = M(""), o = M(null), l = M([]), i = M(), s = L(() => e.sticky), u = L(() => e.stickyCssMode || e.cssMode), d = L(() => je(e.stickyOffsetTop)), v = L(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var h = (D, b) => {
      var V = ki(D) ? D.name.value : D;
      V === i.value || V === void 0 || (i.value = V, (b == null ? void 0 : b.event) !== !1 && k(e.onChange, V));
    }, y = () => {
      if ($i(f))
        return 0;
      var {
        top: D
      } = We(f), {
        scrollTop: b
      } = f, {
        top: V
      } = We(o.value);
      return b - D + V;
    }, w = () => {
      var D = pt(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, V = y();
      n.forEach((j, R) => {
        var K = j.ownTop.value, X = D - K + d.value - V, te = R === n.length - 1 ? b : n[R + 1].ownTop.value - j.ownTop.value;
        j.setDisabled(!0), X >= 0 && X < te && t.value === "" && (j.setDisabled(!1), h(j));
      });
    }, O = /* @__PURE__ */ function() {
      var D = Rt(function* (b) {
        var {
          anchorName: V,
          manualCall: j = !1,
          options: R
        } = b;
        if (j && k(e.onClick, V), !(V === i.value && !m)) {
          var K = n.find((C) => {
            var {
              name: N
            } = C;
            return V === N.value;
          });
          if (K) {
            var X = y(), te = K.ownTop.value - d.value + X, B = Pi(f);
            t.value = V, h(V, R), yield ht(f, {
              left: B,
              top: te,
              animation: ys,
              duration: U(e.duration)
            }), io(() => {
              t.value = "";
            });
          }
        }
      });
      return function(V) {
        return D.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var D = Rt(function* () {
        yield Lr(), f = Tn(o.value);
      });
      return function() {
        return D.apply(this, arguments);
      };
    }(), $ = () => {
      f.addEventListener("scroll", w);
    }, I = () => {
      f.removeEventListener("scroll", w);
    }, T = (D, b) => {
      br(() => O({
        anchorName: D,
        options: b
      }));
    };
    return ie(() => r.value, /* @__PURE__ */ Rt(function* () {
      yield Lr(), n.forEach((D) => {
        var {
          name: b,
          setOwnTop: V
        } = D;
        b.value && l.value.push(b.value), V();
      });
    })), lr(/* @__PURE__ */ Rt(function* () {
      yield S(), $();
    })), kt(I), xr(() => {
      m = !0, I();
    }), Mn(() => {
      !m || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: lb,
      classes: sb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: U,
      scrollTo: T,
      anchorClick: O
    };
  }
});
$d.render = db;
const aa = $d;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var vk = aa;
function vb(e) {
  return ["small", "normal"].includes(e);
}
function fb(e) {
  return ["outlined", "standard"].includes(e);
}
var Wi = {
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
    validator: vb
  },
  variant: {
    type: String,
    default: "standard",
    validator: fb
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
  onClick: F(),
  onClear: F()
}, {
  n: Zl,
  classes: cb
} = _("field-decorator"), mb = ["for"];
function pb(e, r) {
  var n = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
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
      [z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [Y(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          ref: "middleEl",
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      ), (e.hint || e.alwaysCustomPlaceholder) && e.placeholderTransform ? (p(), P(
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
        [z(
          "span",
          null,
          re(e.placeholder),
          1
          /* TEXT */
        )],
        14,
        mb
      )) : x("v-if", !0), e.variant === "outlined" ? (p(), P(
        "span",
        {
          key: 1,
          ref: "placeholderTextEl",
          class: c([e.n("placeholder-text"), e.n("$--ellipsis")])
        },
        re(e.placeholder),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0), z(
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
        )) : x("v-if", !0), Y(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), P(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), P(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: G({
            borderColor: e.color
          })
        },
        [z(
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
      )) : (p(), P(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [z(
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
var Td = Q({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Pe
  },
  props: Wi,
  setup(e) {
    var r = M(null), n = M(null), a = M(null), t = M(""), o = M(""), l = M(""), i = L(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), s = L(() => e.hint && (!fn(e.value) || e.isFocus)), u = () => {
      var {
        hint: m,
        value: g,
        composing: h
      } = e;
      if (!m && (!fn(g) || h))
        return Zl("--placeholder-hidden");
    }, d = () => {
      var {
        size: m,
        hint: g,
        placeholder: h,
        variant: y
      } = e;
      if (!s.value || !h) {
        var w = We(r.value), O = We(n.value), S = O.left - w.left + "px";
        o.value = g ? "translate(" + S + ", calc(var(--field-decorator-" + y + "-" + m + "-placeholder-translate-y) + var(--field-decorator-middle-offset-y))) scale(1)" : "translate(" + S + ", -50%)", l.value = O.width + "px";
        return;
      }
      var $ = Da(r.value), I = y === "outlined" ? "-50%" : "0";
      if (o.value = "translate(" + $.paddingLeft + ", " + I + ") scale(0.75)", y === "outlined") {
        var T = Da(a.value), D = "var(--field-decorator-outlined-" + m + "-placeholder-space)";
        t.value = "calc(" + T.width + " * 0.75 + " + D + " * 2)", l.value = "calc((100% - var(--field-decorator-outlined-" + m + "-padding-left) - var(--field-decorator-outlined-" + m + "-padding-right)) * 1.33)";
      } else
        l.value = "133%";
    }, v = (m) => {
      k(e.onClear, m);
    }, f = (m) => {
      k(e.onClick, m);
    };
    return Tt(d), lr(d), Rr(() => window, "resize", d), {
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
      classes: cb,
      isEmpty: fn,
      handleClear: v,
      handleClick: f
    };
  }
});
Td.render = pb;
const Pd = Td;
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
function hb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var gb = mi({
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
    validator: hb
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
  onFocus: F(),
  onBlur: F(),
  onInput: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, Qe(Wi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: yb,
  classes: bb
} = _("input"), wb = ["placeholder", "enterkeyhint"], Cb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Sb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function kb(e, r) {
  var n = ae("var-field-decorator"), a = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Z(
      n,
      Pt(to({
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
        default: ve(() => [e.normalizedType === "password" ? (p(), P(
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
          wb
        )) : x("v-if", !0), e.textarea ? (p(), P(
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
          Cb
        )) : (p(), P(
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
          Sb
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
var Od = Q({
  name: "VarInput",
  components: {
    VarFormDetails: xe,
    VarFieldDecorator: Pd
  },
  props: gb,
  setup(e) {
    var r = M("var-input-" + rt().uid), n = M(null), a = M(!1), t = M(!1), o = L(() => e.type === "number" ? "text" : e.type), l = L(() => {
      var {
        maxlength: H,
        modelValue: A
      } = e;
      return H ? fn(A) ? "0 / " + H : String(A).length + "/" + H : "";
    }), i = L(() => e.disabled || e.readonly ? "" : "text"), s = L(() => {
      var {
        hint: H,
        blurColor: A,
        focusColor: E
      } = e;
      if (!H)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? E || "var(--field-decorator-focus-color)" : A || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Or(), h = (H) => {
      Ne(() => {
        var {
          validateTrigger: A,
          rules: E,
          modelValue: W
        } = e;
        f(A, H, E, W);
      });
    }, y = (H) => {
      a.value = !0, k(e.onFocus, H), h("onFocus");
    }, w = (H) => {
      a.value = !1, k(e.onBlur, H), h("onBlur");
    }, O = (H) => {
      var A = H.target, {
        value: E
      } = A;
      return e.type === "number" && (E = V(E)), R(j(E));
    }, S = () => {
      t.value = !0;
    }, $ = (H) => {
      t.value && (t.value = !1, H.target.dispatchEvent(new Event("input")));
    }, I = (H) => {
      if (!t.value) {
        var A = O(H);
        k(e["onUpdate:modelValue"], A), k(e.onInput, A, H), h("onInput");
      }
    }, T = (H) => {
      var A = O(H);
      k(e.onChange, A, H), h("onChange");
    }, D = () => {
      var {
        disabled: H,
        readonly: A,
        clearable: E,
        onClear: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || A || !E || (k(e["onUpdate:modelValue"], ""), k(W, ""), h("onClear"));
    }, b = (H) => {
      var {
        disabled: A,
        onClick: E
      } = e;
      d != null && d.disabled.value || A || (k(E, H), h("onClick"));
    }, V = (H) => {
      var A = H.indexOf("-"), E = H.indexOf(".");
      return A > -1 && (H = A === 0 ? "-" + H.replace(/-/g, "") : H.replace(/-/g, "")), E > -1 && (H = H.slice(0, E + 1) + H.slice(E).replace(/\./g, "")), H.replace(/[^-0-9.]/g, "");
    }, j = (H) => e.modelModifiers.trim ? H.trim() : H, R = (H) => e.maxlength ? H.slice(0, U(e.maxlength)) : H, K = (H) => {
      var {
        disabled: A,
        readonly: E
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || A || E || H.stopPropagation();
    };
    function X(H) {
      var {
        disabled: A
      } = e;
      d != null && d.disabled.value || A || H.target === n.value || (C(), H.preventDefault());
    }
    var te = () => {
      k(e["onUpdate:modelValue"], ""), g();
    }, B = () => m(e.rules, e.modelValue), C = () => {
      var H;
      (H = n.value) == null || H.focus();
    }, N = () => {
      n.value.blur();
    }, J = {
      reset: te,
      validate: B,
      resetValidation: g
    };
    return k(u, J), lr(() => {
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
      n: yb,
      classes: bb,
      isEmpty: fn,
      handleFocus: y,
      handleBlur: w,
      handleInput: I,
      handleChange: T,
      handleClear: D,
      handleClick: b,
      handleTouchstart: K,
      handleCompositionStart: S,
      handleCompositionEnd: $,
      handleMousedown: X,
      validate: B,
      resetValidation: g,
      reset: te,
      focus: C,
      blur: N
    };
  }
});
Od.render = kb;
const Sn = Od;
Sn.install = function(e) {
  e.component(Sn.name, Sn);
};
var fk = Sn;
function $b(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Tb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Pb = {
  type: {
    type: String,
    default: "default",
    validator: $b
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
    validator: Tb
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
  onClick: F()
}, {
  n: Ob,
  classes: Vb
} = _("link");
function Mb(e, r) {
  return p(), ye(
    at(e.tag),
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
var Vd = Q({
  name: "VarLink",
  props: Pb,
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
      o || k(l, t);
    };
    return {
      n: Ob,
      classes: Vb,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: ge
    };
  }
});
Vd.render = Mb;
const ta = Vd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var ck = ta, Eb = {
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
  onLoad: F(),
  "onUpdate:loading": F(),
  "onUpdate:error": F()
}, Md = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Bb() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ur(Md);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Ed = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Ib() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = sr(Md);
  return r || Pr("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function Nb() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ur(Ed);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function Db() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = sr(Ed);
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
function Ab(e) {
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
  n: zb,
  classes: Lb
} = _("list");
function Rb(e, r) {
  var n = ae("var-loading"), a = Ie("ripple");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [Y(e.$slots, "default"), e.loading ? Y(e.$slots, "loading", {
      key: 0
    }, () => [z(
      "div",
      {
        class: c(e.n("loading"))
      },
      [z(
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
    )]) : x("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [z(
      "div",
      {
        class: c(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => [ke((p(), P(
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
    )), [[a]])]) : x("v-if", !0), z(
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
    Ripple: Ge
  },
  components: {
    VarLoading: Nr
  },
  props: Eb,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = Db(), a = M(null), t = M(null), o, l = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = We(o), {
        bottom: v
      } = We(t.value);
      return Math.floor(v) - je(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Ab(function* () {
        yield Ne(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return k(n, {}), r && ie(() => r.current.value, u), ie(() => [e.loading, e.error, e.finished], u), lr(() => {
      o = Tn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), xr(s), nt(s), {
      pack: Je,
      listEl: a,
      detectorEl: t,
      dt: oo,
      isNumber: ir,
      load: l,
      check: u,
      n: zb,
      classes: Lb
    };
  }
});
Bd.render = Rb;
const oa = Bd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var mk = oa, Ub = {
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
  classes: Fb,
  n: Ql
} = _("loading-bar");
const Hb = Q({
  name: "VarLoadingBar",
  props: Ub,
  setup(e) {
    return () => Z("div", {
      class: Fb(Ql(), [e.error, Ql("--error")]),
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
var Id, Nd, Co, Dd, _l, Ad = {}, Yb = {
  value: 0,
  opacity: 0,
  error: !1
}, _e = Ae(Yb), jb = (e) => {
  Object.assign(_e, e);
}, Wb = (e) => {
  Object.assign(_e, e), Ad = e;
}, Gb = () => {
  Object.keys(Ad).forEach((e) => {
    _e[e] !== void 0 && (_e[e] = void 0);
  });
}, zd = () => {
  _l || (_l = !0, ot(Hb, _e));
}, Gi = () => {
  Id = window.setTimeout(() => {
    if (!(_e.value >= 95)) {
      var e = Math.random();
      _e.value < 70 && (e = Math.round(5 * Math.random())), _e.value += e, Gi();
    }
  }, 200);
}, qi = () => {
  window.clearTimeout(Nd), window.clearTimeout(Id), window.clearTimeout(Co), window.clearTimeout(Dd);
}, qb = () => {
  qi(), _e.error = !1, _e.value = 0, zd(), Co = window.setTimeout(() => {
    _e.opacity = 1;
  }, 200), Gi();
}, Ld = () => {
  qi(), _e.value = 100, Co = window.setTimeout(() => {
    _e.opacity = 0, Nd = window.setTimeout(() => {
      _e.error = !1;
    }, 250);
  }, 300);
}, Xb = () => {
  qi(), _e.error = !0, _e.value === 100 && (_e.value = 0), zd(), Co = window.setTimeout(() => {
    _e.opacity = 1;
  }, 200), Gi(), Dd = window.setTimeout(Ld, 300);
}, Rd = {
  start: qb,
  finish: Ld,
  error: Xb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: jb,
  setDefaultOptions: Wb,
  resetDefaultOptions: Gb
}, pk = Rd;
const pi = Rd;
function Kb(e) {
  return ["click", "hover"].includes(e);
}
function Zb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Jb = {
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
    validator: Kb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Zb
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: Qb,
  classes: _b
} = _("menu");
function xb(e, r) {
  return p(), P(
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
    [Y(e.$slots, "default"), (p(), ye(
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
          default: ve(() => [ke(z(
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
var Ud = Q({
  name: "VarMenu",
  props: Jb,
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
    } = vd(e);
    return {
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: hr,
      toSizeUnit: ge,
      n: Qb,
      classes: _b,
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
Ud.render = xb;
const Zr = Ud;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var hk = Zr, Fd = Symbol("SELECT_BIND_OPTION_KEY");
function e0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = ur(Fd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function r0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = sr(Fd);
  return n || Pr("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var n0 = {
  label: {},
  value: {}
}, {
  n: a0,
  classes: t0
} = _("option");
function o0(e, r) {
  var n = ae("var-checkbox"), a = Ie("ripple");
  return ke((p(), P(
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
    [z(
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
    )) : x("v-if", !0), z(
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
var Hd = Q({
  name: "VarOption",
  directives: {
    Ripple: Ge
  },
  components: {
    VarCheckbox: hn
  },
  props: n0,
  setup(e) {
    var r = M(!1), n = L(() => r.value), a = L(() => e.label), t = L(() => e.value), {
      select: o,
      bindSelect: l
    } = r0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      r.value = !r.value, u(g);
    }, f = () => u(g), m = (h) => {
      r.value = h;
    }, g = {
      label: a,
      value: t,
      selected: n,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(g), {
      n: a0,
      classes: t0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Hd.render = o0;
const ia = Hd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var gk = ia, i0 = {
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
  onClick: F(),
  "onUpdate:show": F()
};
function l0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: xl
} = _("overlay");
const la = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: i0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Mt(() => e.show, 1), {
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
        return Z(Ra, {
          to: u,
          disabled: o.value
        }, l0(d = s()) ? d : {
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
var yk = la, s0 = {
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
  onChange: F(),
  "onUpdate:current": F(),
  "onUpdate:size": F()
}, {
  n: u0,
  classes: d0
} = _("pagination"), v0 = ["item-mode", "onClick"];
function f0(e, r) {
  var n = ae("var-icon"), a = ae("var-input"), t = ae("var-cell"), o = ae("var-menu"), l = Ie("ripple");
  return p(), P(
    "ul",
    {
      class: c(e.n())
    },
    [ke((p(), P(
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
    }]]), e.simple ? (p(), P(
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
          onKeydown: r[3] || (r[3] = Qi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), z("span", null, [Ce(
        " / " + re(e.pageCount) + " ",
        1
        /* TEXT */
      ), z(
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
    )) : (p(!0), P(
      Ve,
      {
        key: 1
      },
      Ue(e.pageList, (i, s) => ke((p(), P(
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
        v0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((p(), P(
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
    }]]), e.showSizeChanger ? (p(), P(
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
          menu: ve(() => [(p(!0), P(
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
          default: ve(() => [z(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: r[5] || (r[5] = Tr(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [z(
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (p(), P(
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
          onKeydown: r[9] || (r[9] = Qi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (p(), P(
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
var Yd = Q({
  name: "VarPagination",
  components: {
    VarMenu: Zr,
    VarIcon: Pe,
    VarCell: pn,
    VarInput: Sn
  },
  directives: {
    Ripple: Ge
  },
  props: s0,
  setup(e) {
    var r = M(!1), n = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(U(e.current) || 1), i = M(U(e.size) || 10), s = M([]), u = L(() => Math.ceil(e.maxPagerCount / 2)), d = L(() => Math.ceil(U(e.total) / U(i.value))), v = L(() => {
      var $ = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, U(e.total));
      return [$, I];
    }), f = L(() => e.showTotal ? e.showTotal(U(e.total), v.value) : ""), m = ($, I) => ir($) ? !1 : I === 1 ? t.value : o.value, g = ($, I) => ir($) ? "basic" : I === 1 ? "head" : "tail", h = ($, I) => {
      if (!($ === l.value || e.disabled)) {
        if ($ === "...") {
          l.value = I === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if ($ === "prev") {
          l.value = O(l.value - 1);
          return;
        }
        if ($ === "next") {
          l.value = O(l.value + 1);
          return;
        }
        ir($) && (l.value = $);
      }
    }, y = () => {
      e.disabled || (r.value = !0);
    }, w = ($) => {
      i.value = $, r.value = !1;
      var I = O(l.value);
      a.value = String(I), l.value = I;
    }, O = ($) => $ > d.value ? d.value : $ < 1 ? 1 : $, S = ($, I, T) => {
      T.target.blur();
      var D = O(U(I));
      a.value = String(D), l.value = D, $ === "quick" && (n.value = "");
    };
    return ie([() => e.current, () => e.size], ($) => {
      var [I, T] = $;
      l.value = U(I) || 1, i.value = U(T || 10);
    }), ie([l, i, d], ($, I) => {
      var [T, D, b] = $, [V, j] = I, R = [], {
        maxPagerCount: K,
        total: X,
        onChange: te
      } = e, B = Math.ceil(U(X) / U(j)), C = b - (K - u.value) - 1;
      if (a.value = "" + T, b - 2 > K) {
        if (V === void 0 || b !== B)
          for (var N = 2; N < K + 2; N++)
            R.push(N);
        if (T <= K && T < C) {
          R = [];
          for (var J = 1; J < K + 1; J++)
            R.push(J + 1);
          t.value = !0, o.value = !1;
        }
        if (T > K && T < C) {
          R = [];
          for (var H = 1; H < K + 1; H++)
            R.push(T + H - u.value);
          t.value = T === 2 && K === 1, o.value = !1;
        }
        if (T >= C) {
          R = [];
          for (var A = 1; A < K + 1; A++)
            R.push(b - (K - A) - 1);
          t.value = !1, o.value = !0;
        }
        R = [1, "...", ...R, "...", b];
      } else
        for (var E = 1; E <= b; E++)
          R.push(E);
      s.value = R, V != null && b > 0 && k(te, T, D), k(e["onUpdate:current"], T), k(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: u0,
      classes: d0,
      pack: Je,
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
      clickItem: h,
      showMenu: y,
      clickSize: w,
      setPage: S,
      toNumber: U,
      formatElevation: hr
    };
  }
});
Yd.render = f0;
const sa = Yd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var bk = sa, c0 = {
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
  onClick: F()
}, {
  n: m0,
  classes: p0
} = _("paper");
function h0(e, r) {
  var n = Ie("ripple");
  return ke((p(), P(
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
var jd = Q({
  name: "VarPaper",
  directives: {
    Ripple: Ge
  },
  props: c0,
  setup(e) {
    var r = (n) => {
      k(e.onClick, n);
    };
    return {
      n: m0,
      classes: p0,
      formatElevation: hr,
      toSizeUnit: ge,
      handleClick: r
    };
  }
});
jd.render = h0;
const ua = jd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var wk = ua;
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
var g0 = hi({
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
  onChange: F(),
  onConfirm: F(),
  onCancel: F()
}, Qe(Vt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: y0,
  classes: b0
} = _("picker"), es = 300, w0 = 15, rs = 200, C0 = 1e3, ns = 0, S0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], k0 = ["onTransitionend"], $0 = ["onClick"];
function T0(e, r) {
  var n = ae("var-button");
  return p(), ye(
    at(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ve(() => [z(
        "div",
        Be({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), P(
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
          )]), Y(e.$slots, "title", {}, () => [z(
            "div",
            {
              class: c(e.n("title"))
            },
            re(e.dt(e.title, e.pack.pickerTitle)),
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
        )) : x("v-if", !0), z(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), P(
            Ve,
            null,
            Ue(e.scrollColumns, (a) => (p(), P(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstartPassive: (t) => e.handleTouchstart(a),
                onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [z(
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
                [(p(!0), P(
                  Ve,
                  null,
                  Ue(a.column.texts, (t, o) => (p(), P(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: G({
                        height: e.optionHeight + "px"
                      }),
                      key: t,
                      onClick: (l) => e.handleClick(a, o)
                    },
                    [z(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      re(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    14,
                    $0
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                k0
              )],
              42,
              S0
            ))),
            128
            /* KEYED_FRAGMENT */
          )), z(
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
          ), z(
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
var Wd = Q({
  name: "VarPicker",
  components: {
    VarButton: rr,
    VarPopup: Sr
  },
  inheritAttrs: !1,
  props: g0,
  setup(e) {
    var r = M([]), n = L(() => je(e.optionHeight)), a = L(() => je(e.optionCount)), t = L(() => a.value * n.value / 2 - n.value / 2), o = L(() => a.value * n.value), l = [], i = !1, s = (B, C) => {
      C.scrollEl = B;
    }, u = (B) => {
      k(e["onUpdate:show"], B);
    }, d = (B) => {
      var C = n.value + t.value, N = t.value - B.column.texts.length * n.value;
      B.translate >= C && (B.translate = C), B.translate <= N && (B.translate = N);
    }, v = (B, C) => {
      var {
        length: N
      } = B.column.texts;
      return C = C >= N ? N - 1 : C, C = C <= 0 ? 0 : C, C;
    }, f = (B, C) => {
      var N = Math.round((t.value - C) / n.value);
      return v(B, N);
    }, m = (B) => (B.translate = t.value - B.index * n.value, B.translate), g = () => {
      var B = r.value.map((N) => N.column.texts[N.index]), C = r.value.map((N) => N.index);
      return {
        texts: B,
        indexes: C
      };
    }, h = function(B, C) {
      C === void 0 && (C = 0), m(B), B.duration = C;
    }, y = (B, C, N) => {
      B.translate += Math.abs(C / N) / 3e-3 * (C < 0 ? -1 : 1);
    }, w = (B, C) => {
      i || (B.index = C, B.scrolling = !0, h(B, rs));
    }, O = (B) => {
      B.touching = !0, B.translate = ko(B.scrollEl);
    }, S = (B, C) => {
      if (C.touching) {
        i = !0, C.scrolling = !1, C.duration = 0;
        var {
          clientY: N
        } = B.touches[0], J = C.prevY !== void 0 ? N - C.prevY : 0;
        C.prevY = N, C.translate += J, d(C);
        var H = performance.now();
        H - C.momentumTime > es && (C.momentumTime = H, C.momentumPrevY = C.translate);
      }
    }, $ = (B, C) => {
      C.touching = !1, C.prevY = void 0;
      var N = C.translate - C.momentumPrevY, J = performance.now() - C.momentumTime, H = Math.abs(N) >= w0 && J <= es;
      H && y(C, N, J), C.index = f(C, C.translate);
      var A = C.translate, E = m(C);
      C.scrolling = E !== A, h(C, H ? C0 : rs), C.scrolling || R(C), br(() => {
        i = !1;
      });
    }, I = (B) => {
      B.scrolling = !1, R(B);
    }, T = (B) => B.map((C, N) => {
      var J, H = Te(C) ? {
        texts: C
      } : C, A = {
        id: ns++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (J = H.initialIndex) != null ? J : 0,
        columnIndex: N,
        duration: 0,
        momentumTime: 0,
        column: H,
        scrollEl: null,
        scrolling: !1
      };
      return h(A), A;
    }), D = (B) => {
      var C = [];
      return b(C, B, 0, !0), C;
    }, b = function(B, C, N, J) {
      if (J === void 0 && (J = !1), Te(C) && C.length) {
        var H, A = J && (H = e.cascadeInitialIndexes[B.length]) != null ? H : 0, E = {
          id: ns++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: A,
          columnIndex: N,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: C.map((W) => W[e.textKey])
          },
          columns: C,
          scrollEl: null,
          scrolling: !1
        };
        B.push(E), h(E), b(B, E.columns[E.index].children, N + 1, J);
      }
    }, V = (B) => {
      r.value.splice(r.value.indexOf(B) + 1), b(r.value, B.columns[B.index].children, B.columnIndex + 1);
    }, j = () => {
      var {
        indexes: B
      } = g();
      return B.every((C, N) => C === l[N]);
    }, R = (B) => {
      var {
        cascade: C,
        onChange: N
      } = e;
      if (!j()) {
        C && V(B);
        var J = r.value.some((E) => E.scrolling);
        if (!J) {
          var {
            texts: H,
            indexes: A
          } = g();
          l = [...A], k(N, H, A);
        }
      }
    }, K = () => {
      if (e.cascade) {
        var B = r.value.find((C) => C.scrolling);
        B && (B.index = f(B, ko(B.scrollEl)), B.scrolling = !1, h(B), V(B));
      } else
        r.value.forEach((C) => {
          C.index = f(C, ko(C.scrollEl)), h(C);
        });
    }, X = () => {
      K();
      var {
        texts: B,
        indexes: C
      } = g();
      l = [...C], k(e.onConfirm, B, C);
    }, te = () => {
      K();
      var {
        texts: B,
        indexes: C
      } = g();
      l = [...C], k(e.onCancel, B, C);
    };
    return ie(() => e.columns, (B) => {
      r.value = e.cascade ? D(_i(B)) : T(_i(B));
      var {
        indexes: C
      } = g();
      l = [...C];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: y0,
      classes: b0,
      pack: Je,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Le,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: O,
      handleTouchmove: S,
      handleTouchend: $,
      handleTransitionend: I,
      confirm: X,
      cancel: te,
      dt: oo,
      handleClick: w
    };
  }
});
Wd.render = T0;
const kn = Wd;
var fr;
function La(e) {
  return new Promise((r) => {
    La.close();
    var n = Te(e) ? {
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
var Ck = kn;
function P0(e) {
  return ["linear", "circle"].includes(e);
}
var O0 = {
  mode: {
    type: String,
    default: "linear",
    validator: P0
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
  n: V0,
  classes: M0
} = _("progress"), Nn = 100, E0 = ["viewBox"], B0 = ["cx", "cy", "r", "stroke-width"], I0 = ["cx", "cy", "r", "stroke-width"];
function N0(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [z(
        "div",
        {
          class: c(e.n("linear-block")),
          style: G({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), P(
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
        )) : x("v-if", !0), z(
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
      ), e.label ? (p(), P(
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
    )) : x("v-if", !0), e.mode === "circle" ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), P(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), P(
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
          B0
        )) : x("v-if", !0), z(
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
          I0
        )],
        14,
        E0
      )), e.label ? (p(), P(
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
var Gd = Q({
  name: "VarProgress",
  props: O0,
  setup(e) {
    var r = L(() => {
      var a = U(e.value), t = a > Nn ? Nn : a, o = a > Nn ? Nn : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), n = L(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + je(a) + " " + je(a), i = U(o) > Nn ? Nn : Math.round(U(o)), s = (je(a) - je(t)) / 2, u = 2 * Math.PI * s, d = i / Nn * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: V0,
      classes: M0,
      toSizeUnit: ge,
      multiplySizeUnit: tr,
      linearProps: r,
      circleProps: n
    };
  }
});
Gd.render = N0;
const da = Gd;
da.install = function(e) {
  e.component(da.name, da);
};
var Sk = da, D0 = {
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
  onRefresh: F(),
  "onUpdate:modelValue": F()
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
  classes: A0
} = _("pull-refresh"), is = 150;
function z0(e, r) {
  var n = ae("var-icon");
  return p(), P(
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
    [z(
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
var qd = Q({
  name: "VarPullRefresh",
  components: {
    VarIcon: Pe
  },
  props: D0,
  setup(e) {
    var r = M(0), n = M(null), a = M(null), t = M(0), o = M("-125%"), l = M("arrow-down"), i = M("default"), s = M(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = ts(function* (V) {
        if (l.value !== V)
          return l.value = V, new Promise((j) => {
            window.setTimeout(j, is);
          });
      });
      return function(j) {
        return b.apply(this, arguments);
      };
    }(), g = L(() => i.value !== "loading" && i.value !== "success" && !e.disabled), h = L(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), y = L(() => Math.abs(2 * r.value)), w = L(() => i.value === "success"), O = (b) => {
      var V = "classList" in u ? u : document.body;
      V.classList[b](os() + "--lock");
    }, S = (b) => {
      if (r.value === 0) {
        var {
          width: V
        } = We(a.value);
        r.value = -(V + V * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = Tn(b.target);
    }, $ = (b) => {
      if (g.value && !(d !== u && pt(d) > 0)) {
        var V = pt(u);
        if (!(V > 0)) {
          var j = V === 0, R = b.touches[0];
          f = R.clientY - v, j && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), j && o.value > r.value && O("add");
          var K = (b.touches[0].clientY - t.value) / 2 + r.value;
          o.value = K >= y.value ? y.value : K, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var b = ts(function* () {
        g.value && (s.value = !0, o.value >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, k(e["onUpdate:modelValue"], !0), Ne(() => {
          k(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, U(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), T = () => {
      u = e.target ? ws(e.target, "PullRefresh") : Tn(n.value);
    }, D = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, U(e.animationDuration));
    };
    return ie(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, D();
      }, U(e.successDuration)));
    }), lr(T), Rr(n, "touchmove", $), {
      n: os,
      classes: A0,
      ICON_TRANSITION: is,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: S,
      touchMove: $,
      touchEnd: I,
      iconName: l,
      controlStyle: h,
      isSuccess: w
    };
  }
});
qd.render = z0;
const va = qd;
va.install = function(e) {
  e.component(va.name, va);
};
var kk = va, L0 = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, Xd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function R0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ur(Xd);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function U0() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = sr(Xd);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: F0,
  classes: H0
} = _("radio");
function Y0(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      Be({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((p(), P(
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
      }], [l, e.handleHovering, "desktop"]]), z(
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
var Kd = Q({
  name: "VarRadio",
  directives: {
    Ripple: Ge,
    Hover: Ur
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: xe,
    VarHoverOverlay: mr
  },
  inheritAttrs: !1,
  props: L0,
  setup(e) {
    var r = M(!1), n = L(() => r.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = U0(), {
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
    } = Or(), g = (T) => {
      Ne(() => {
        var {
          validateTrigger: D,
          rules: b,
          modelValue: V
        } = e;
        v(D, T, b, V);
      });
    }, h = (T) => {
      var {
        checkedValue: D,
        onChange: b
      } = e;
      t && r.value === D || (r.value = T, k(e["onUpdate:modelValue"], r.value), k(b, r.value), t == null || t.onToggle(D), g("onChange"));
    }, y = (T) => {
      var {
        disabled: D,
        readonly: b,
        uncheckedValue: V,
        checkedValue: j,
        onClick: R
      } = e;
      s != null && s.disabled.value || D || (k(R, T), !(s != null && s.readonly.value || b) && (a.value = !0, h(n.value ? V : j)));
    }, w = (T) => {
      var {
        checkedValue: D,
        uncheckedValue: b
      } = e;
      r.value = T === D ? D : b;
    }, O = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, S = () => f(e.rules, e.modelValue), $ = (T) => {
      var {
        uncheckedValue: D,
        checkedValue: b
      } = e, V = ![D, b].includes(T);
      V && (T = n.value ? D : b), h(T);
    };
    ie(() => e.modelValue, (T) => {
      r.value = T;
    }, {
      immediate: !0
    });
    var I = {
      sync: w,
      validate: S,
      resetValidation: m,
      reset: O
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
      n: F0,
      classes: H0,
      handleClick: y,
      toggle: $,
      reset: O,
      validate: S,
      resetValidation: m
    };
  }
});
Kd.render = Y0;
const fa = Kd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var $k = fa;
function j0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var W0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: j0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: G0,
  classes: q0
} = _("radio-group");
function X0(e, r) {
  var n = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
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
var Zd = Q({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: xe
  },
  props: W0,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = R0(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Or(), u = L(() => o.value), d = (y) => {
      Ne(() => {
        var {
          validateTrigger: w,
          rules: O,
          modelValue: S
        } = e;
        l(w, y, O, S);
      });
    }, v = () => n.forEach((y) => {
      var {
        sync: w
      } = y;
      return w(e.modelValue);
    }), f = (y) => {
      k(e["onUpdate:modelValue"], y), k(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => r.value, v);
    var h = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, h), a(h), {
      errorMessage: o,
      n: G0,
      classes: q0,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
Zd.render = X0;
const ca = Zd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var Tk = ca, K0 = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: lt
} = _("rate"), Z0 = ["onClick"];
function J0(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.toNumber(e.count), (i) => ke((p(), P(
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
          Z0
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
var Jd = Q({
  name: "VarRate",
  components: {
    VarIcon: Pe,
    VarFormDetails: xe,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: Ge,
    Hover: Ur
  },
  props: K0,
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
        count: $,
        gap: I
      } = e;
      return {
        color: v(S).color,
        marginRight: S !== U($) ? ge(I) : 0
      };
    }, d = (S) => {
      var {
        name: $,
        color: I
      } = v(S);
      return {
        [lt("content")]: !0,
        [lt("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [lt("--error")]: a.value,
        [lt("--primary")]: $ !== e.emptyIcon && !I
      };
    }, v = (S) => {
      var {
        modelValue: $,
        disabled: I,
        disabledColor: T,
        color: D,
        half: b,
        emptyColor: V,
        icon: j,
        halfIcon: R,
        emptyIcon: K
      } = e, X = D;
      return (I || r != null && r.disabled.value) && (X = T), S <= U($) ? {
        color: X,
        name: j
      } : b && S <= U($) + 0.5 ? {
        color: X,
        name: R
      } : {
        color: I || r != null && r.disabled.value ? T : V,
        name: K
      };
    }, f = (S, $) => {
      if (e.half) {
        var {
          offsetWidth: I
        } = $.target;
        $.offsetX <= Math.floor(I / 2) && (S -= 0.5);
      }
      k(e["onUpdate:modelValue"], S);
    }, m = () => o(e.rules, U(e.modelValue)), g = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = (S, $) => {
      var {
        readonly: I,
        disabled: T,
        onChange: D
      } = e;
      I || T || r != null && r.disabled.value || r != null && r.readonly.value || (f(S, $), k(D, S), g());
    }, y = (S) => ($) => {
      s.value = S, i.value = $;
    }, w = () => {
      k(e["onUpdate:modelValue"], 0), l();
    }, O = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return k(n, O), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: h,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: y,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: ge,
      toNumber: U,
      n: lt
    };
  }
});
Jd.render = J0;
const ma = Jd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Pk = ma;
function Q0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var _0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Q0
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
}, x0 = (e) => (Ua(""), e = e(), Fa(), e), e1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, r1 = /* @__PURE__ */ x0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), n1 = [r1];
function a1(e, r) {
  return p(), P("svg", e1, n1);
}
var Qd = Q({});
Qd.render = a1;
const t1 = Qd;
var o1 = (e) => (Ua(""), e = e(), Fa(), e), i1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, l1 = /* @__PURE__ */ o1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), s1 = [l1];
function u1(e, r) {
  return p(), P("svg", i1, s1);
}
var _d = Q({});
_d.render = u1;
const d1 = _d;
var v1 = (e) => (Ua(""), e = e(), Fa(), e), f1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, c1 = /* @__PURE__ */ v1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), m1 = [c1];
function p1(e, r) {
  return p(), P("svg", f1, m1);
}
var xd = Q({});
xd.render = p1;
const h1 = xd;
var {
  n: g1,
  classes: y1
} = _("result");
function b1(e, r) {
  return p(), P(
    Ve,
    null,
    [z(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), z(
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
    ), z(
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
    ), z(
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
    ), z(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), z(
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
var ev = Q({
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
      n: g1,
      classes: y1,
      toNumber: U
    };
  }
});
ev.render = b1;
const w1 = ev;
var C1 = (e) => (Ua(""), e = e(), Fa(), e), S1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, k1 = /* @__PURE__ */ C1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), $1 = [k1];
function T1(e, r) {
  return p(), P("svg", S1, $1);
}
var rv = Q({});
rv.render = T1;
const P1 = rv;
var O1 = (e) => (Ua(""), e = e(), Fa(), e), V1 = {
  viewBox: "-4 -4 32 32"
}, M1 = /* @__PURE__ */ O1(() => /* @__PURE__ */ z(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), E1 = [M1];
function B1(e, r) {
  return p(), P("svg", V1, E1);
}
var nv = Q({});
nv.render = B1;
const I1 = nv;
var {
  n: N1,
  classes: D1
} = _("result");
function A1(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "image", {}, () => [e.type ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [z(
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
    )) : x("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (p(), P(
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
var av = Q({
  name: "VarResult",
  components: {
    Info: t1,
    Success: w1,
    Warning: h1,
    Error: d1,
    Question: P1,
    Empty: I1
  },
  props: _0,
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
      n: N1,
      classes: D1,
      toNumber: U,
      toPxNum: je,
      toSizeUnit: ge,
      circleSize: r,
      borderSize: n
    };
  }
});
av.render = A1;
const pa = av;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Ok = pa;
function z1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function L1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var R1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: z1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: L1
  },
  onClick: F()
}, {
  n: U1,
  classes: F1
} = _("row");
function H1(e, r) {
  return p(), P(
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
var tv = Q({
  name: "VarRow",
  props: R1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = Jm(), t = L(() => {
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
    return ie(() => a.value, o), ie(() => e.gutter, o), n(i), {
      n: U1,
      classes: F1,
      average: t,
      handleClick: l,
      padStartFlex: Xt
    };
  }
});
tv.render = H1;
const ha = tv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Vk = ha;
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
function Y1(e) {
  return ["left", "right", "center"].includes(e);
}
var j1 = gi({
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
    validator: Y1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: F(),
  onBlur: F(),
  onClose: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, Qe(Wi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: W1,
  classes: G1
} = _("select"), q1 = {
  key: 1
};
function X1(e, r) {
  var n = ae("var-chip"), a = ae("var-icon"), t = ae("var-field-decorator"), o = ae("var-menu"), l = ae("var-form-details");
  return p(), P(
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
        menu: ve(() => [z(
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
          Pt(to({
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
            default: ve(() => [z(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: G({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [z(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : Y(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), P(
                  Ve,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), P(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(p(!0), P(
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
                  )) : (p(), P(
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
                )) : (p(), P(
                  "span",
                  q1,
                  re(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), Y(e.$slots, "arrow-icon", {
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
var ov = Q({
  name: "VarSelect",
  components: {
    VarIcon: Pe,
    VarMenu: Zr,
    VarChip: gn,
    VarFieldDecorator: Pd,
    VarFormDetails: xe
  },
  props: j1,
  setup(e) {
    var r = M(!1), n = L(() => e.multiple), a = L(() => e.focusColor), t = M(""), o = M([]), l = L(() => fn(e.modelValue)), i = L(() => e.disabled || e.readonly ? "" : "pointer"), s = M(0), {
      bindForm: u,
      form: d
    } = Vr(), {
      length: v,
      options: f,
      bindOptions: m
    } = e0(), {
      errorMessage: g,
      validateWithTrigger: h,
      validate: y,
      // expose
      resetValidation: w
    } = Or(), O = M(null), S = L(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), $ = () => {
      var {
        multiple: A,
        modelValue: E
      } = e;
      if (A) {
        var W = E;
        o.value = W.map(D);
      }
      !A && !fn(E) && (t.value = D(E)), !A && fn(E) && (t.value = "");
    }, I = (A) => {
      Ne(() => {
        var {
          validateTrigger: E,
          rules: W,
          modelValue: ee
        } = e;
        h(E, A, W, ee);
      });
    }, T = (A) => {
      var {
        value: E,
        label: W
      } = A;
      return E.value != null ? E.value : W.value;
    }, D = (A) => {
      var E, W, ee = f.find((se) => {
        var {
          value: de
        } = se;
        return de.value === A;
      });
      return ee || (ee = f.find((se) => {
        var {
          label: de
        } = se;
        return de.value === A;
      })), (E = (W = ee) == null ? void 0 : W.label.value) != null ? E : "";
    }, b = () => {
      var {
        disabled: A,
        readonly: E,
        onFocus: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || A || E || (s.value = je(e.offsetY), r.value = !0, k(W), I("onFocus"));
    }, V = () => {
      var {
        disabled: A,
        readonly: E,
        onBlur: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || A || E || (k(W), I("onBlur"));
    }, j = (A) => {
      var {
        disabled: E,
        readonly: W,
        multiple: ee,
        onChange: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || W)) {
        var de = ee ? f.filter((we) => {
          var {
            selected: Oe
          } = we;
          return Oe.value;
        }).map(T) : T(A);
        k(e["onUpdate:modelValue"], de), k(se, de), I("onChange"), !ee && (r.value = !1);
      }
    }, R = () => {
      var {
        disabled: A,
        readonly: E,
        multiple: W,
        clearable: ee,
        onClear: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || A || E || !ee)) {
        var de = W ? [] : void 0;
        k(e["onUpdate:modelValue"], de), k(se, de), I("onClear");
      }
    }, K = (A) => {
      var {
        disabled: E,
        onClick: W
      } = e;
      d != null && d.disabled.value || E || (k(W, A), I("onClick"));
    }, X = (A) => {
      var {
        disabled: E,
        readonly: W,
        modelValue: ee,
        onClose: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || W)) {
        var de = ee, we = f.find((dr) => {
          var {
            label: ne
          } = dr;
          return ne.value === A;
        }), Oe = de.filter((dr) => {
          var ne;
          return dr !== ((ne = we.value.value) != null ? ne : we.label.value);
        });
        k(e["onUpdate:modelValue"], Oe), k(se, Oe), I("onClose");
      }
    }, te = () => {
      var {
        multiple: A,
        modelValue: E
      } = e;
      if (A) {
        var W = E;
        f.forEach((ee) => ee.sync(W.includes(T(ee))));
      } else
        f.forEach((ee) => ee.sync(E === T(ee)));
      $();
    }, B = () => {
      s.value = je(e.offsetY), r.value = !0;
    }, C = () => {
      r.value = !1;
    }, N = () => y(e.rules, e.modelValue), J = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: A,
        modelValue: E
      } = e;
      A && !Te(E) && Pr("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, te, {
      deep: !0
    }), ie(() => v.value, te);
    var H = {
      multiple: n,
      focusColor: a,
      computeLabel: $,
      onSelect: j,
      reset: J,
      validate: N,
      resetValidation: w
    };
    return m(H), k(u, H), {
      offsetY: s,
      isFocus: r,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: O,
      placement: S,
      cursor: i,
      n: W1,
      classes: G1,
      handleFocus: b,
      handleBlur: V,
      handleClear: R,
      handleClick: K,
      handleClose: X,
      reset: J,
      validate: N,
      resetValidation: w,
      focus: B,
      blur: C
    };
  }
});
ov.render = X1;
const ga = ov;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Mk = ga, K1 = {
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
  n: Z1,
  classes: J1
} = _("skeleton");
function Q1(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: G({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [z(
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), P(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: G({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [z(
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), P(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), P(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: G({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [z(
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
          )) : x("v-if", !0), (p(!0), P(
            Ve,
            null,
            Ue(e.toNumber(e.rows), (n, a) => (p(), P(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: G({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [z(
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (p(), P(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: G({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [z(
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
var iv = Q({
  name: "VarSkeleton",
  props: K1,
  setup() {
    return {
      n: Z1,
      classes: J1,
      toSizeUnit: ge,
      toNumber: U
    };
  }
});
iv.render = Q1;
const ya = iv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Ek = ya;
function _1(e) {
  return ["always", "normal", "never"].includes(e);
}
var ze;
(function(e) {
  e.First = "1", e.Second = "2";
})(ze || (ze = {}));
var x1 = {
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
    validator: _1
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
  onChange: F(),
  onStart: F(),
  onEnd: F(),
  "onUpdate:modelValue": F()
}, {
  n: ls,
  classes: ew
} = _("slider"), rw = ["onTouchstart"];
function nw(e, r) {
  var n = ae("var-hover-overlay"), a = ae("var-form-details"), t = Ie("hover");
  return p(), P(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: r[0] || (r[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [z(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [z(
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
        ), z(
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
      ), (p(!0), P(
        Ve,
        null,
        Ue(e.thumbList, (o) => (p(), P(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: G(e.thumbStyle(o)),
            onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
          },
          [Y(e.$slots, "button", {
            currentValue: o.text
          }, () => [ke(z(
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
          ), [[t, (l) => e.hover(l, o), "desktop"]]), z(
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
          ), z(
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
            [z(
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
          rw
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
var lv = Q({
  name: "VarSlider",
  components: {
    VarFormDetails: xe,
    VarHoverOverlay: mr
  },
  directives: {
    Hover: Ur
  },
  props: x1,
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
    }), m = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = M(null), h = M(0), y = M(!1), w = Ae({
      [ze.First]: f(),
      [ze.Second]: f()
    }), O = L(() => U(e.max) - U(e.min)), S = L(() => h.value / O.value * U(e.step)), $ = L(() => {
      var {
        modelValue: ne,
        range: ue
      } = e, me = [];
      return ue && Te(ne) ? me = [{
        value: X(ne[0]),
        enumValue: ze.First,
        text: te(ne[0]),
        hovering: ut(i),
        handleHovering: s
      }, {
        value: X(ne[1]),
        enumValue: ze.Second,
        text: te(ne[1]),
        hovering: ut(u),
        handleHovering: d
      }] : ir(ne) && (me = [{
        value: X(ne),
        enumValue: ze.First,
        text: te(ne),
        hovering: ut(i),
        handleHovering: s
      }]), me;
    }), I = L(() => {
      var {
        activeColor: ne,
        range: ue,
        modelValue: me
      } = e, De = ue && Te(me) ? X(Math.min(me[0], me[1])) : 0, Ze = ue && Te(me) ? X(Math.max(me[0], me[1])) - De : X(me);
      return b.value ? {
        left: "0px",
        height: Ze + "%",
        bottom: De + "%",
        background: ne
      } : {
        top: "0px",
        width: Ze + "%",
        left: De + "%",
        background: ne
      };
    }), T = L(() => e.disabled || (n == null ? void 0 : n.disabled.value)), D = L(() => e.readonly || (n == null ? void 0 : n.readonly.value)), b = L(() => e.direction === "vertical"), V, j = (ne) => {
      var ue = ne.currentTarget;
      return ue ? b.value ? h.value - (ne.clientY - We(ue).top) : ne.clientX - Xv(ue) : 0;
    }, R = (ne) => {
      var ue = b.value ? "bottom" : "left";
      return {
        [ue]: ne.value + "%",
        zIndex: w[ne.enumValue].active ? 1 : void 0
      };
    }, K = (ne) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[ne].active, X = (ne) => {
      var {
        min: ue,
        max: me
      } = e;
      return ne < U(ue) ? 0 : ne > U(me) ? 100 : (ne - U(ue)) / O.value * 100;
    }, te = (ne) => {
      if (!ir(ne))
        return 0;
      var ue = ne;
      ue < Number(e.min) && (ue = Number(e.min)), ue > Number(e.max) && (ue = Number(e.max));
      var me = parseInt("" + ue, 10) === ue;
      return me ? ue : U(ue.toPrecision(5));
    }, B = (ne, ue) => {
      T.value || ue.handleHovering(ne);
    }, C = (ne, ue) => {
      var me = [], {
        step: De,
        range: Ze,
        modelValue: qe,
        onChange: He,
        min: Ye
      } = e, oe = U(De), be = Math.round(ne / S.value), pe = be * oe + U(Ye), Se = w[ue].percentValue * oe + U(Ye);
      if (w[ue].percentValue = be, Ze && Te(qe) && (me = ue === ze.First ? [pe, qe[1]] : [qe[0], pe]), Se !== pe) {
        var $e = Ze ? me.map((Re) => te(Re)) : te(pe);
        k(He, $e), k(e["onUpdate:modelValue"], $e), m();
      }
    }, N = (ne) => {
      if (!e.range)
        return ze.First;
      var ue = w[ze.First].percentValue * S.value, me = w[ze.Second].percentValue * S.value, De = Math.abs(ne - ue), Ze = Math.abs(ne - me);
      return De <= Ze ? ze.First : ze.Second;
    }, J = () => {
      document.addEventListener("touchmove", E, {
        passive: !1
      }), document.addEventListener("touchend", W), document.addEventListener("touchcancel", W);
    }, H = () => {
      document.removeEventListener("touchmove", E), document.removeEventListener("touchend", W), document.removeEventListener("touchcancel", W);
    }, A = (ne, ue) => {
      if (h.value || (h.value = g.value.offsetWidth), T.value || (w[ue].active = !0), V = ue, J(), !(T.value || D.value)) {
        k(e.onStart), y.value = !0;
        var {
          clientX: me,
          clientY: De
        } = ne.touches[0];
        w[ue].startPosition = b.value ? De : me;
      }
    }, E = (ne) => {
      if (ne.preventDefault(), !(T.value || D.value || !y.value)) {
        var {
          startPosition: ue,
          currentOffset: me
        } = w[V], {
          clientX: De,
          clientY: Ze
        } = ne.touches[0], qe = (b.value ? ue - Ze : De - ue) + me;
        qe <= 0 ? qe = 0 : qe >= h.value && (qe = h.value), C(qe, V);
      }
    }, W = () => {
      H();
      var {
        range: ne,
        modelValue: ue,
        onEnd: me,
        step: De,
        min: Ze
      } = e;
      if (T.value || (w[V].active = !1), !(T.value || D.value)) {
        var qe = [];
        w[V].currentOffset = w[V].percentValue * S.value;
        var He = w[V].percentValue * U(De) + U(Ze);
        ne && Te(ue) && (qe = V === ze.First ? [He, ue[1]] : [ue[0], He]), k(me, ne ? qe : He), y.value = !1;
      }
    }, ee = (ne) => {
      if (!(T.value || D.value) && !ne.target.closest("." + ls("thumb"))) {
        var ue = j(ne), me = N(ue);
        V = me, C(ue, me), W();
      }
    }, se = () => {
      var ne = U(e.step);
      return isNaN(ne) ? (al("Slider", 'type of prop "step" should be Number'), !1) : ne < 0 ? (al("Slider", '"step" should be > 0'), !1) : !0;
    }, de = () => {
      var {
        range: ne,
        modelValue: ue
      } = e;
      return ne && !Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ne && Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ne && Te(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, we = function(ne, ue) {
      ne === void 0 && (ne = e.modelValue), ue === void 0 && (ue = U(e.step));
      var me = (De) => {
        var {
          min: Ze,
          max: qe
        } = e;
        return De < U(Ze) ? 0 : De > U(qe) ? O.value / ue : (De - U(Ze)) / ue;
      };
      e.range && Te(ne) ? (w[ze.First].percentValue = me(ne[0]), w[ze.First].currentOffset = w[ze.First].percentValue * S.value, w[ze.Second].percentValue = me(ne[1]), w[ze.Second].currentOffset = w[ze.Second].percentValue * S.value) : ir(ne) && (w[ze.First].currentOffset = me(ne) * S.value);
    }, Oe = () => {
      var ne = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], ne), l();
    }, dr = {
      reset: Oe,
      validate: v,
      resetValidation: l
    };
    return k(r, dr), ie([() => e.modelValue, () => e.step], (ne) => {
      var [ue, me] = ne;
      !se() || !de() || y.value || we(ue, U(me));
    }), ie(h, () => we()), lr(() => {
      !se() || !de() || (h.value = g.value[b.value ? "offsetHeight" : "offsetWidth"]);
    }), kt(() => {
      H();
    }), {
      n: ls,
      classes: ew,
      Thumbs: ze,
      sliderEl: g,
      getFillStyle: I,
      isDisabled: T,
      isVertical: b,
      thumbStyle: R,
      errorMessage: a,
      thumbsProps: w,
      thumbList: $,
      hover: B,
      multiplySizeUnit: tr,
      toNumber: U,
      showLabel: K,
      start: A,
      move: E,
      end: W,
      click: ee
    };
  }
});
lv.render = nw;
const ba = lv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Bk = ba;
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
function aw(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function tw(e) {
  return Xi.includes(e);
}
var sv = {
  type: {
    type: String,
    validator: tw
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: aw
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
  loadingType: Qe(un, "type"),
  loadingSize: Qe(un, "size"),
  loadingRadius: Qe(un, "radius"),
  loadingColor: yi({}, Qe(un, "color"), {
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
  onOpen: F(),
  // 打开动画结束时的回调
  onOpened: F(),
  // 关闭时的回调函数
  onClose: F(),
  // 关闭动画结束时的回调
  onClosed: F(),
  "onUpdate:show": F(),
  _update: {
    type: String
  }
}, {
  n: ow,
  classes: iw
} = _("snackbar"), lw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function sw(e, r) {
  var n = ae("var-icon"), a = ae("var-loading");
  return ke((p(), P(
    "div",
    {
      class: c(e.n()),
      style: G({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: G({
          zIndex: e.zIndex
        })
      },
      [z(
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
      ), z(
        "div",
        {
          class: c([e.n("icon")])
        },
        [Y(e.$slots, "icon")],
        2
        /* CLASS */
      ), z(
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
var uv = Q({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Nr,
    VarIcon: Pe
  },
  props: sv,
  setup(e) {
    var r = M(null), {
      zIndex: n
    } = Mt(() => e.show, 1);
    so(() => e.show, () => e.lockScroll);
    var a = L(() => e.type === "loading" || e.forbidClick), t = L(() => e.type ? lw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), k(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(r.value), o();
    }), lr(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Xi,
      n: ow,
      classes: iw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
uv.render = sw;
const dv = uv;
var {
  n: uw
} = _("snackbar");
function dw(e, r) {
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
          Be(e.$props, {
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
var vv = Q({
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
      n: uw,
      disabled: e
    };
  }
});
vv.render = dw;
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
function vw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var Xi = ["loading", "success", "warning", "info", "error"], ss = 0, bi = !1, fv, et = !1, cv = {
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
}, $r = Ae([]), Ki = cv, fw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Oo = (e) => () => Ot(e) ? e() : e, cw = {
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
        }, bw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Oo(s),
          icon: Oo(u),
          action: Oo(d)
        };
        return Z(dv, Be(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Z(Hv, Be(fw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: mw,
        onAfterLeave: pw
      }), vw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, _r = function(e) {
  var r = gw(e), n = Ae(Ct({}, Ki, r));
  n.show = !0, bi || (bi = !0, fv = ot(cw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: ss++,
    reactiveSnackOptions: n
  };
  if (a === 0 || et)
    hw(t);
  else {
    var o = "update-" + ss;
    yw(n, o);
  }
  return {
    clear() {
      !et && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
Xi.forEach((e) => {
  _r[e] = (r) => (ki(r) ? r.type = e : r = {
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
  Ki = e;
};
_r.resetDefaultOptions = function() {
  Ki = cv;
};
_r.Component = wa;
function mw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === U(r));
  n && k(n.reactiveSnackOptions.onOpened);
}
function pw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === U(r));
  n && (n.animationEnd = !0, k(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (k(fv), $r = Ae([]), bi = !1);
}
function hw(e) {
  $r.push(e);
}
function gw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function yw(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = Ct({}, n.reactiveSnackOptions, e), n._update = r;
}
function bw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Ik = wa;
const wi = _r;
var mv = (e) => ["mini", "small", "normal", "large"].includes(e), ww = (e) => mv(e) || Te(e) || ir(e) || Fe(e), Cw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Sw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), kw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: ww
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
    validator: Cw
  },
  align: {
    type: String,
    validator: Sw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function $w(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Vo,
  classes: Tw
} = _("space");
const Ca = Q({
  name: "VarSpace",
  props: kw,
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
      } = e, v = (t = k(n.default)) != null ? t : [], f = mv(d), [m, g] = a(d, f);
      v = Vs(v);
      var h = v.length - 1, y = v.map((w, O) => {
        var S = $w(m, g, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: h
        });
        return Z("div", {
          style: {
            margin: S
          }
        }, [w]);
      });
      return Z("div", {
        class: Tw(Vo(), Vo("$--box"), [o, Vo("--inline")]),
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
var Nk = Ca, Pw = {
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
function Ow() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = ur(pv);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Vw() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = sr(pv);
  return n || Pr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Mw,
  classes: Ew
} = _("step"), Bw = {
  key: 3
};
function Iw(e, r) {
  var n = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [z(
        "div",
        {
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [z(
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
          )) : (p(), P(
            "span",
            Bw,
            re(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), z(
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
      ), e.isLastChild ? x("v-if", !0) : (p(), P(
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
var hv = Q({
  name: "VarStep",
  components: {
    VarIcon: Pe
  },
  props: Pw,
  setup() {
    var e = M(null), r = M(""), n = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Vw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = L(() => l.value === a.value), m = L(() => a.value !== -1 && l.value > a.value), g = {
      index: a
    }, h = () => v(a.value), y = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(g), ie(i, (w) => {
      if (n.value = w - 1 === a.value, e.value) {
        var O = e.value.offsetWidth / 2 - 14;
        r.value = "0 -" + O + "px";
      }
    }), {
      n: Mw,
      classes: Ew,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: r,
      activeColor: s,
      inactiveColor: u,
      isLastChild: n,
      click: h,
      getRef: y
    };
  }
});
hv.render = Iw;
const Sa = hv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Dk = Sa;
function Nw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Dw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Nw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: F()
}, {
  n: Aw
} = _("steps");
function zw(e, r) {
  return p(), P(
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
var gv = Q({
  name: "VarSteps",
  props: Dw,
  setup(e) {
    var r = L(() => e.active), n = L(() => e.activeColor), a = L(() => e.inactiveColor), t = L(() => e.direction), {
      length: o,
      bindStep: l
    } = Ow(), i = (u) => {
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
      n: Aw
    };
  }
});
gv.render = zw;
const ka = gv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Ak = ka, Lw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Rw
} = _("style-provider"), Uw = Q({
  name: "VarStyleProvider",
  props: Lw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => ps(e.tag, {
      class: Rw(),
      style: Ps(e.styleVars)
    }, k(n.default));
  }
});
const $a = Uw;
var Mo = [];
function St(e) {
  Mo.forEach((n) => document.documentElement.style.removeProperty(n)), Mo.length = 0;
  var r = Ps(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Mo.push(a);
  });
}
St.Component = $a;
$a.install = function(e) {
  e.component($a.name, $a);
};
St.install = function(e) {
  e.component($a.name, $a);
};
var zk = $a, Fw = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Hw,
  classes: Yw
} = _("switch");
function jw(e, r) {
  var n = ae("var-loading"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return ke((p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: r[0] || (r[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: G(e.styleComputed.switch)
      },
      [z(
        "div",
        {
          style: G(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), ke((p(), P(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: G(e.styleComputed.ripple)
        },
        [z(
          "div",
          {
            style: G(e.styleComputed.handle),
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
var yv = Q({
  name: "VarSwitch",
  components: {
    VarLoading: Nr,
    VarFormDetails: xe,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: Ge,
    Hover: Ur
  },
  props: Fw,
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
    } = Pn(), u = () => o(e.rules, e.modelValue), d = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = L(() => {
      var {
        size: w,
        modelValue: O,
        color: S,
        closeColor: $,
        loadingColor: I,
        activeValue: T
      } = e;
      return {
        handle: {
          width: tr(w),
          height: tr(w),
          backgroundColor: O === T ? S : $,
          color: I
        },
        ripple: {
          left: O === T ? tr(w, 0.5) : "-" + tr(w, 0.5),
          color: O === T ? S : $ || "#999",
          width: tr(w, 2),
          height: tr(w, 2)
        },
        track: {
          height: tr(w, 0.72),
          width: tr(w, 1.9),
          borderRadius: tr(w, 2 / 3),
          filter: O === T || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === T ? S : $
        },
        switch: {
          height: tr(w, 1.2),
          width: tr(w, 2)
        }
      };
    }), f = L(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return tr(w, 0.4);
    }), m = (w) => {
      var {
        onClick: O,
        onChange: S,
        disabled: $,
        loading: I,
        readonly: T,
        modelValue: D,
        activeValue: b,
        inactiveValue: V,
        "onUpdate:modelValue": j
      } = e;
      if (k(O, w), !($ || I || T || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var R = D === b ? V : b;
        k(S, R), k(j, R), d();
      }
    }, g = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, h = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: h,
      validate: u,
      resetValidation: l
    };
    return k(r, y), {
      n: Hw,
      classes: Yw,
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
yv.render = jw;
const Ta = yv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Lk = Ta, Ww = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, bv = Symbol("TABS_BIND_TAB_KEY");
function Gw() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ur(bv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function qw() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = sr(bv);
  return r || Pr("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Ut,
  classes: Xw
} = _("tab");
function Kw(e, r) {
  var n = Ie("ripple");
  return ke((p(), P(
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
var wv = Q({
  name: "VarTab",
  directives: {
    Ripple: Ge
  },
  props: Ww,
  setup(e) {
    var r = M(null), n = L(() => e.name), a = L(() => e.disabled), t = L(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = qw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: g
    } = l, h = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(h);
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : y() ? d.value : v.value, O = () => e.disabled ? Ut("$-tab--disabled") : y() ? Ut("$-tab--active") : Ut("$-tab--inactive"), S = ($) => {
      var {
        disabled: I,
        name: T,
        onClick: D
      } = e;
      I || (k(D, T ?? o.value, $), s(h));
    };
    return ie(() => e.name, g), ie(() => e.disabled, g), {
      n: Ut,
      classes: Xw,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: O,
      handleClick: S
    };
  }
});
wv.render = Kw;
const Pa = wv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Rk = Pa, Zw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Jw,
  classes: Qw
} = _("tab-item");
function _w(e, r) {
  var n = ae("var-swipe-item");
  return p(), ye(
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
var Cv = Q({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Xr
  },
  props: Zw,
  setup(e) {
    var r = M(!1), n = L(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Ib(), {
      bindLists: o
    } = Nb(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: L(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: Jw,
      classes: Qw,
      current: r
    };
  }
});
Cv.render = _w;
const Oa = Cv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Uk = Oa, xw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: eC,
  classes: rC
} = _("table");
function nC(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("main"))
      },
      [z(
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
    ), e.$slots.footer ? (p(), P(
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
var Sv = Q({
  name: "VarTable",
  props: xw,
  setup() {
    return {
      toSizeUnit: ge,
      n: eC,
      classes: rC,
      formatElevation: hr
    };
  }
});
Sv.render = nC;
const Va = Sv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Fk = Va;
function us(e) {
  return ["horizontal", "vertical"].includes(e);
}
function aC(e) {
  return ["auto", "always"].includes(e);
}
function tC(e) {
  return ["normal", "reverse"].includes(e);
}
var oC = {
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
    validator: aC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: tC
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Qe(Gt, "cssMode"),
  stickyZIndex: Qe(Gt, "zIndex"),
  offsetTop: Qe(Gt, "offsetTop"),
  onClick: F(),
  onChange: F(),
  "onUpdate:active": F()
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
  n: iC,
  classes: lC
} = _("tabs");
function sC(e, r) {
  return p(), ye(
    at(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [z(
        "div",
        Be({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [z(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [Y(e.$slots, "default"), z(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
              style: G({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [z(
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
var kv = Q({
  name: "VarTabs",
  components: {
    VarSticky: Kr
  },
  inheritAttrs: !1,
  props: oC,
  setup(e) {
    var r = M("0px"), n = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = L(() => e.active), s = L(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = L(() => e.activeColor), d = L(() => e.inactiveColor), v = L(() => e.disabledColor), f = L(() => e.itemDirection), m = M(null), {
      tabList: g,
      bindTabList: h,
      length: y
    } = Gw(), w = (R) => {
      var K, X = (K = R.name.value) != null ? K : R.index.value, {
        active: te,
        onChange: B,
        onClick: C
      } = e;
      k(e["onUpdate:active"], X), k(C, X), X !== te && k(B, X);
    }, O = () => g.find((R) => {
      var {
        name: K
      } = R;
      return e.active === K.value;
    }), S = (R) => g.find((K) => {
      var {
        index: X
      } = K;
      return (R ?? e.active) === X.value;
    }), $ = () => {
      if (y.value !== 0) {
        var {
          active: R
        } = e;
        if (ir(R)) {
          var K = R > y.value - 1 ? y.value - 1 : 0;
          return k(e["onUpdate:active"], K), S(K);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, T = (R) => {
      var {
        element: K
      } = R, X = K.value;
      X && (e.layoutDirection === "horizontal" ? (r.value = X.offsetWidth + "px", a.value = X.offsetLeft + "px") : (n.value = X.offsetHeight + "px", t.value = X.offsetTop + "px"));
    }, D = (R) => {
      var {
        element: K
      } = R;
      if (o.value) {
        var X = l.value, te = K.value;
        if (e.layoutDirection === "horizontal") {
          var B = te.offsetLeft + te.offsetWidth / 2 - X.offsetWidth / 2;
          ht(X, {
            left: B,
            animation: Io
          });
        } else {
          var C = te.offsetTop + te.offsetHeight / 2 - X.offsetHeight / 2;
          ht(X, {
            top: C,
            animation: Io
          });
        }
      }
    }, b = () => {
      var R = O() || S() || $();
      !R || R.disabled.value || (I(), T(R), D(R));
    }, V = /* @__PURE__ */ function() {
      var R = vs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return R.apply(this, arguments);
      };
    }(), j = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: b,
      onTabClick: w
    };
    return h(j), ie(() => y.value, /* @__PURE__ */ vs(function* () {
      yield Lr(), b();
    })), ie(() => e.active, b), ie(() => e.scrollable, b), Mn(b), Rr(() => window, "resize", b), {
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
      n: iC,
      classes: lC,
      resize: b,
      resizeSticky: V,
      formatElevation: hr
    };
  }
});
kv.render = sC;
const Ma = kv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Hk = Ma, uC = {
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
  "onUpdate:active": F()
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
function dC(e) {
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
  n: vC
} = _("tabs-items");
function fC(e, r) {
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
      default: ve(() => [Y(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var $v = Q({
  name: "VarTabsItems",
  components: {
    VarSwipe: qr
  },
  props: uC,
  setup(e) {
    var r = M(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = Bb(), o = (v) => n.find((f) => {
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
          setCurrent: h
        } = g;
        return h(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((h) => {
        var {
          index: y
        } = h;
        return y.value === v;
      }), g = (f = m.name.value) != null ? f : m.index.value;
      k(e["onUpdate:active"], g);
    }, d = () => r.value;
    return a({}), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ dC(function* () {
      yield Lr(), s(e.active);
    })), {
      swipe: r,
      n: vC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
$v.render = fC;
const Ea = $v;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var Yk = Ea;
const cC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, mC = {
  "--badge-default-color": "#555"
}, pC = {
  "--button-default-color": "#303030"
}, hC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, gC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, yC = {
  "--checkbox-unchecked-color": "#fff"
}, bC = {
  "--chip-default-color": "#555"
}, wC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, CC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, SC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, kC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, $C = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, TC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, PC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, OC = {
  "--popup-content-background-color": "#1e1e1e"
}, VC = {
  "--pull-refresh-background": "#303030"
}, MC = {
  "--radio-unchecked-color": "#fff"
}, EC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, BC = {
  "--select-scroller-background": "#303030"
}, IC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, NC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, DC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, AC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, zC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, LC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, RC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, UC = {
  "--tabs-background": "#1e1e1e"
}, FC = {
  "--app-bar-color": "#272727"
}, HC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, YC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, jC = {
  "--menu-background-color": "#272727"
}, WC = {
  "--breadcrumb-inactive-color": "#aaa"
}, GC = {
  "--paper-background": "#303030"
}, qC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function Ci() {
  return Ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ci.apply(this, arguments);
}
const XC = Ci({
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
}, pC, gC, hC, LC, CC, IC, UC, AC, OC, SC, cC, bC, mC, RC, wC, VC, DC, NC, TC, zC, $C, BC, MC, yC, kC, PC, FC, HC, YC, jC, EC, WC, GC, qC);
var KC = {
  dark: XC
}, jk = null;
const Si = KC;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], or = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], cs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function ZC(e) {
  return ["ampm", "24hr"].includes(e);
}
var JC = {
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
    validator: ZC
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
  "onUpdate:modelValue": F(),
  onChange: F()
}, Tv = (e, r) => e === "24hr" || r === "am", Zi = (e, r, n) => {
  var a = Cr.findIndex((o) => U(o) === U(n)), t = Tv(e, r) ? n : or[a];
  return {
    hourStr: t,
    hourNum: U(t)
  };
}, cr = (e) => {
  var [r, n, a] = e.split(":");
  return {
    hour: U(r),
    minute: U(n),
    second: U(a)
  };
}, Pv = (e) => {
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
  } = Zi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: g,
      minute: h
    } = cr(i);
    f = g === v && a > h;
  }
  if (!i && s) {
    var {
      hour: y,
      minute: w
    } = cr(s);
    f = y === v && a < w;
  }
  if (i && s) {
    var {
      hour: O,
      minute: S
    } = cr(i), {
      hour: $,
      minute: I
    } = cr(s);
    f = $ === v && a < I || O === v && a > S;
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
  } = Zi(t, o, l), m = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: h,
      minute: y,
      second: w
    } = cr(s);
    m = h === f && y < i || y === i && a > w;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: S,
      second: $
    } = cr(u);
    m = O === f && S > i || S === i && a > $;
  }
  if (s && u) {
    var {
      hour: I,
      minute: T,
      second: D
    } = cr(s), {
      hour: b,
      minute: V,
      second: j
    } = cr(u);
    m = I === f && T < i || b === f && V > i || I === f && T === i && a > D || b === f && V === i && a < j;
  }
  return (r = e.allowedTime) != null && r.seconds && (g = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || g;
}, {
  n: QC,
  classes: _C
} = _("time-picker");
function xC(e, r) {
  return p(), P(
    "div",
    {
      class: c(e.n("clock"))
    },
    [z(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: G(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), P(
      Ve,
      null,
      Ue(e.timeScales, (n, a) => (p(), P(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: G(e.getStyle(a, n, !1))
        },
        re(n),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.hours24, (n, a) => (p(), P(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: G(e.getStyle(a, n, !0))
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
var Vv = Q({
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
    } = r, a = M(null), t = M([]), o = M([]), l = L(() => ({
      transform: "rotate(" + U(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = L(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = L(() => e.type === "hour" ? Cr : cs), u = (y, w) => {
      var O;
      y = (O = y) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? Pv : Ov, $ = {
        time: U(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: U(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty($, "minute"), S($);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var y = e.isInner ? or[i.value] : s.value[i.value];
      return s.value === cs ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, w) => w ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Tv(e.format, e.ampm))
          return t.value.includes(y);
        var w = Cr.findIndex((O) => O === y);
        return o.value.includes(w);
      }
      return u(y, !0);
    }, m = (y, w, O) => {
      var S = 2 * Math.PI / 12 * y - Math.PI / 2, $ = 50 * (1 + Math.cos(S)), I = 50 * (1 + Math.sin(S)), T = () => v(y, O) ? f(w) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: D,
        color: b
      } = T();
      return {
        left: $ + "%",
        top: I + "%",
        backgroundColor: D,
        color: b
      };
    }, g = () => {
      var {
        width: y,
        height: w
      } = We(a.value);
      return {
        width: y,
        height: w
      };
    }, h = () => {
      if (i.value !== void 0) {
        var y = e.ampm === "am" ? Cr : or;
        return Na(y[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (y, w) => {
      var [O, S] = y, [$, I] = w, T = O === $ && S === I;
      if (!(T || e.type !== "hour" || i.value === void 0)) {
        var D = S ? or[i.value] : h(), b = e.useSeconds ? ":" + e.time.second : "", V = D + ":" + e.time.minute + b;
        e.preventNextUpdate || n("update", V), n("change-prevent-update");
      }
    }), ie(() => e.rad, (y, w) => {
      if (!(e.type === "hour" || y === void 0 || w === void 0)) {
        var O = y / 6 >= 0 ? y / 6 : y / 6 + 60, S = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (O !== S) {
          var $, {
            hourStr: I
          } = Zi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var T = le().minute(O).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            $ = I + ":" + T + D;
          }
          if (e.type === "second") {
            var b = le().second(O).format("ss"), V = e.useSeconds ? ":" + b : "";
            $ = I + ":" + e.time.minute + V;
          }
          n("update", $);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [w, O, S] = y;
      if (t.value = [], w && !O) {
        var {
          hour: $
        } = cr(w), I = Cr.filter((N) => U(N) > $), T = or.filter((N) => U(N) > $);
        t.value = [...I, ...T];
      }
      if (!w && O) {
        var {
          hour: D
        } = cr(O), b = Cr.filter((N) => U(N) < D), V = or.filter((N) => U(N) < D);
        t.value = [...b, ...V];
      }
      if (w && O) {
        var {
          hour: j
        } = cr(w), {
          hour: R
        } = cr(O), K = Cr.filter((N) => U(N) < R || U(N) > j), X = or.filter((N) => U(N) < R || U(N) > j);
        t.value = [...K, ...X];
      }
      if (S != null && S.hours) {
        var {
          hours: te
        } = S, B = Cr.filter((N) => !te(U(N))), C = or.filter((N) => !te(U(N)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...B, ...C])];
      }
      o.value = t.value.map((N) => or.findIndex((J) => N === J)).filter((N) => N >= 0);
    }, {
      immediate: !0
    }), {
      n: QC,
      classes: _C,
      hours24: or,
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
Vv.render = xC;
const eS = Vv;
var {
  n: rS,
  classes: nS
} = _("time-picker"), aS = (e) => (Ua(""), e = e(), Fa(), e), tS = /* @__PURE__ */ aS(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), oS = {
  key: 0
};
function iS(e, r) {
  var n = ae("clock");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: G({
          background: e.headerColor || e.color
        })
      },
      [z(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: r[0] || (r[0] = (a) => e.checkPanel("hour"))
          },
          re(e.time.hour),
          3
          /* TEXT, CLASS */
        ), tS, z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), P("span", oS, ":")) : x("v-if", !0), e.useSeconds ? (p(), P(
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
      ), e.format === "ampm" ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: r[3] || (r[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), z(
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
    ), z(
      "div",
      {
        class: c(e.n("body"))
      },
      [z(
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
var Mv = Q({
  name: "VarTimePicker",
  components: {
    Clock: eS
  },
  props: JC,
  setup(e) {
    var r = M(null), n = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), g = M(!1), h = M(!1), y = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ae({
      x: 0,
      y: 0
    }), O = Ae({
      x: [],
      y: []
    }), S = L(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), $ = (A) => {
      k(e["onUpdate:modelValue"], A), k(e.onChange, A);
    }, I = (A) => A * 57.29577951308232, T = (A) => {
      i.value = !1, h.value = !1, f.value = A;
    }, D = (A) => {
      var {
        disableHour: E
      } = a.value, W = Cr.findIndex((de) => U(de) === U(y.value.hour)), ee = A === "am" ? Cr : or, se = [...ee.slice(W), ...ee.slice(0, W)];
      return se.find((de, we) => (o.value = we !== 0, !E.includes(de)));
    }, b = (A) => {
      if (!e.readonly) {
        m.value = A;
        var E = D(A);
        if (E) {
          var W = e.useSeconds ? ":" + y.value.second : "", ee = Na(E, 2, "0") + ":" + y.value.minute + W;
          $(ee);
        }
      }
    }, V = (A, E) => {
      var W = A >= O.x[0] && A <= O.x[1], ee = E >= O.y[0] && E <= O.y[1];
      return W && ee;
    }, j = (A) => {
      var E = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: ee,
        second: se
      } = cr(A);
      return {
        hour: le().hour(W).format(E),
        minute: le().minute(ee).format("mm"),
        second: le().second(se).format("ss")
      };
    }, R = (A) => {
      var E = A / 30;
      return E >= 0 ? E : E + 12;
    }, K = () => {
      var {
        width: A,
        height: E
      } = a.value.getSize(), W = w.x - A / 2 - 8, ee = w.x + A / 2 + 8, se = w.y - E / 2 - 8, de = w.y + E / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: ee,
        rangeYMin: se,
        rangeYMax: de
      };
    }, X = (A, E, W) => {
      var {
        disableHour: ee
      } = a.value;
      l.value = V(A, E);
      var se = Math.round(W / 30) * 30 + 90, de = R(se), we = t.value ? Cr[de] : or[de];
      if (ee.includes(we) || (t.value = e.format === "24hr" ? V(A, E) : !1), t.value === l.value) {
        var Oe = t.value || m.value === "pm" ? or[de] : Cr[de];
        g.value = ee.includes(Oe), !g.value && (u.value = se, i.value = !0);
      }
    }, te = (A) => {
      var {
        disableHour: E
      } = a.value, W = Math.round(A / 6) * 6 + 90, ee = W / 6 >= 0 ? W / 6 : W / 6 + 60, se = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: E,
        allowedTime: e.allowedTime
      };
      h.value = Pv(se), !h.value && (d.value = W, s.value = !0);
    }, B = (A) => {
      var {
        disableHour: E
      } = a.value, W = Math.round(A / 6) * 6 + 90, ee = W / 6 >= 0 ? W / 6 : W / 6 + 60, se = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: U(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: E,
        allowedTime: e.allowedTime
      };
      Ov(se) || (v.value = W);
    }, C = () => {
      var {
        left: A,
        top: E,
        width: W,
        height: ee
      } = We(r.value);
      if (w.x = A + W / 2, w.y = E + ee / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: se,
          rangeXMax: de,
          rangeYMin: we,
          rangeYMax: Oe
        } = K();
        O.x = [se, de], O.y = [we, Oe];
      }
    }, N = (A) => {
      if (A.preventDefault(), !e.readonly) {
        C();
        var {
          clientX: E,
          clientY: W
        } = A.touches[0], ee = E - w.x, se = W - w.y, de = Math.round(I(Math.atan2(se, ee)));
        f.value === "hour" ? X(E, W, de) : f.value === "minute" ? te(de) : B(de);
      }
    }, J = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, H = () => {
      o.value = !1;
    };
    return ie(() => e.modelValue, (A) => {
      if (A) {
        var {
          hour: E,
          minute: W,
          second: ee
        } = cr(A), se = le().hour(E).format("hh"), de = le().hour(E).format("HH"), we = le().minute(W).format("mm"), Oe = le().second(ee).format("ss");
        u.value = (se === "12" ? 0 : U(se)) * 30, d.value = U(we) * 6, v.value = U(Oe) * 6, y.value = j(A), e.format !== "24hr" && (m.value = Na("" + E, 2, "0") === de && or.includes(de) ? "pm" : "am"), t.value = e.format === "24hr" && or.includes(de);
      }
    }, {
      immediate: !0
    }), {
      n: rS,
      classes: nS,
      getRad: S,
      time: y,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: N,
      checkPanel: T,
      checkAmpm: b,
      end: J,
      update: $,
      changePreventUpdate: H,
      formatElevation: hr
    };
  }
});
Mv.render = iS;
const Ba = Mv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var Wk = Ba, lS = {
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
  onBeforeFilter: F(),
  onBeforeRead: F(),
  onAfterRead: F(),
  onBeforeRemove: F(),
  onRemove: F(),
  onOversize: F(),
  "onUpdate:modelValue": F()
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
function Eo(e) {
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
  n: sS,
  classes: uS
} = _("uploader"), dS = 0, vS = ["onClick"], fS = ["onClick"], cS = ["src", "alt"], mS = ["multiple", "accept", "capture", "disabled"], pS = ["src"];
function hS(e, r) {
  var n = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = ae("var-popup"), l = Ie("ripple"), i = Ie("hover");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.files, (s) => ke((p(), P(
          "div",
          {
            class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
            key: s.id,
            onClick: (u) => e.preview(s)
          },
          [z(
            "div",
            {
              class: c(e.n("file-name"))
            },
            re(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), P(
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
            fS
          )) : x("v-if", !0), s.cover ? (p(), P(
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
            cS
          )) : x("v-if", !0), z(
            "div",
            {
              class: c(e.n("file-indicator"))
            },
            [z(
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
          vS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [z(
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
          mS
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
        "onUpdate:show": r[2] || (r[2] = (s) => e.showPreview = s),
        onClosed: r[3] || (r[3] = (s) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), P(
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
            pS
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
var Ev = Q({
  name: "VarUploader",
  directives: {
    Ripple: Ge,
    Hover: Ur
  },
  components: {
    VarIcon: Pe,
    VarPopup: Sr,
    VarFormDetails: xe,
    VarHoverOverlay: mr
  },
  props: lS,
  setup(e) {
    var r = M(null), n = M(!1), a = M(null), t = L(() => {
      var {
        maxlength: N,
        modelValue: {
          length: J
        }
      } = e;
      return ir(N) ? J + " / " + N : "";
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
    } = Pn(), m = L(() => {
      var {
        modelValue: N,
        hideList: J
      } = e;
      return J ? [] : N;
    }), g = (N) => {
      var {
        disabled: J,
        readonly: H,
        previewed: A
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || H || !A)) {
        var {
          url: E
        } = N;
        if (Fe(E) && el(E)) {
          zr(E);
          return;
        }
        Fe(E) && rl(E) && (a.value = N, n.value = !0);
      }
    }, h = (N) => ({
      id: dS++,
      url: "",
      cover: "",
      name: N.name,
      file: N,
      progress: 0
    }), y = (N) => {
      var J = N.target, {
        files: H
      } = J;
      return Array.from(H);
    }, w = (N) => new Promise((J) => {
      if (!N.file.type.startsWith("image")) {
        J(N);
        return;
      }
      var H = new FileReader();
      H.onload = () => {
        var A = H.result;
        N.cover = A, N.url = A, J(N);
      }, H.readAsDataURL(N.file);
    }), O = (N) => N.map(w), S = (N) => {
      var {
        onBeforeRead: J
      } = e;
      return N.map((H) => new Promise((A) => {
        J || A({
          valid: !0,
          varFile: H
        });
        var E = Ft(k(J, Ae(H)));
        Promise.all(E).then((W) => {
          A({
            valid: W.every(Boolean),
            varFile: H
          });
        });
      }));
    }, $ = /* @__PURE__ */ function() {
      var N = Eo(function* (J) {
        var {
          maxsize: H,
          maxlength: A,
          modelValue: E,
          onOversize: W,
          onAfterRead: ee,
          onBeforeFilter: se,
          readonly: de,
          disabled: we
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || we || de)) {
          var Oe = (He) => He.filter((Ye) => Ye.file.size > U(H) ? (k(W, Ae(Ye)), !1) : !0), dr = (He) => {
            var Ye = Math.min(He.length, U(A) - E.length);
            return He.slice(0, Ye);
          }, ne = /* @__PURE__ */ function() {
            var He = Eo(function* (Ye) {
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
          }(), ue = y(J), me = ue.map(h);
          me = yield ne(me), me = H != null ? Oe(me) : me, me = A != null ? dr(me) : me;
          var De = yield Promise.all(O(me)), Ze = yield Promise.all(S(De)), qe = Ze.filter((He) => {
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
          k(e["onUpdate:modelValue"], [...E, ...qe]), J.target.value = "", qe.forEach((He) => k(ee, Ae(He)));
        }
      });
      return function(H) {
        return N.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var N = Eo(function* (J) {
        var {
          disabled: H,
          readonly: A,
          modelValue: E,
          onBeforeRemove: W,
          onRemove: ee
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || A)) {
          if (W) {
            var se = Ft(k(W, Ae(J)));
            if ((yield Promise.all(se)).some((we) => !we))
              return;
          }
          var de = E.filter((we) => we !== J);
          k(ee, Ae(J)), K("onRemove"), k(e["onUpdate:modelValue"], de);
        }
      });
      return function(H) {
        return N.apply(this, arguments);
      };
    }(), T = () => e.modelValue.filter((N) => N.state === "success"), D = () => e.modelValue.filter((N) => N.state === "error"), b = () => e.modelValue.filter((N) => N.state === "loading"), V = () => {
      r.value.click();
    }, j = () => {
      a.value = null, n.value = !1, zr.close();
    }, R = {
      getSuccess: T,
      getError: D,
      getLoading: b
    }, K = (N) => {
      Ne(() => {
        var {
          validateTrigger: J,
          rules: H,
          modelValue: A
        } = e;
        s(J, N, H, A, R);
      });
    }, X = !1, te = () => u(e.rules, e.modelValue, R), B = () => {
      X = !0, k(e["onUpdate:modelValue"], []), d();
    }, C = {
      validate: te,
      resetValidation: d,
      reset: B
    };
    return k(l, C), ie(() => e.modelValue, () => {
      !X && K("onChange"), X = !1;
    }, {
      deep: !0
    }), {
      n: sS,
      classes: uS,
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
      isHTMLSupportVideo: rl,
      isHTMLSupportImage: el,
      preview: g,
      handleChange: $,
      handleRemove: I,
      getSuccess: T,
      getError: D,
      getLoading: b,
      validate: te,
      resetValidation: d,
      reset: B,
      chooseFile: V,
      closePreview: j,
      toSizeUnit: ge
    };
  }
});
Ev.render = hS;
const Ia = Ev;
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
var Gk = Ia;
const gS = "2.11.2";
function yS(e) {
  Jr.install && e.use(Jr), Dn.install && e.use(Dn), An.install && e.use(An), zn.install && e.use(zn), Ln.install && e.use(Ln), mn.install && e.use(mn), Rn.install && e.use(Rn), Un.install && e.use(Un), Fn.install && e.use(Fn), Hn.install && e.use(Hn), rr.install && e.use(rr), Yn.install && e.use(Yn), jn.install && e.use(jn), pn.install && e.use(pn), hn.install && e.use(hn), Wn.install && e.use(Wn), gn.install && e.use(gn), Gn.install && e.use(Gn), qn.install && e.use(qn), Xn.install && e.use(Xn), yr.install && e.use(yr), Kn.install && e.use(Kn), Zn.install && e.use(Zn), Qn.install && e.use(Qn), Qr.install && e.use(Qr), _n.install && e.use(_n), xn.install && e.use(xn), ea.install && e.use(ea), Gr.install && e.use(Gr), xe.install && e.use(xe), Ur.install && e.use(Ur), mr.install && e.use(mr), Pe.install && e.use(Pe), ra.install && e.use(ra), zr.install && e.use(zr), na.install && e.use(na), aa.install && e.use(aa), Sn.install && e.use(Sn), gt.install && e.use(gt), ta.install && e.use(ta), oa.install && e.use(oa), Nr.install && e.use(Nr), pi.install && e.use(pi), Uo.install && e.use(Uo), Zr.install && e.use(Zr), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), La.install && e.use(La), Sr.install && e.use(Sr), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), Ge.install && e.use(Ge), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), wi.install && e.use(wi), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), Kr.install && e.use(Kr), St.install && e.use(St), qr.install && e.use(qr), Xr.install && e.use(Xr), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Va.install && e.use(Va), Ma.install && e.use(Ma), Ea.install && e.use(Ea), Si.install && e.use(Si), Ba.install && e.use(Ba), wn.install && e.use(wn), Ia.install && e.use(Ia);
}
const qk = {
  version: gS,
  install: yS,
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
  Button: rr,
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
  Form: Gr,
  FormDetails: xe,
  Hover: Ur,
  HoverOverlay: mr,
  Icon: Pe,
  Image: ra,
  ImagePreview: zr,
  IndexAnchor: na,
  IndexBar: aa,
  Input: Sn,
  Lazy: gt,
  Link: ta,
  List: oa,
  Loading: Nr,
  LoadingBar: pi,
  Locale: Uo,
  Menu: Zr,
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
  Ripple: Ge,
  Row: ha,
  Select: ga,
  Skeleton: ya,
  Slider: ba,
  Snackbar: wi,
  Space: Ca,
  Step: Sa,
  Steps: ka,
  Sticky: Kr,
  StyleProvider: St,
  Swipe: qr,
  SwipeItem: Xr,
  Switch: Ta,
  Tab: Pa,
  TabItem: Oa,
  Table: Va,
  Tabs: Ma,
  TabsItems: Ea,
  Themes: Si,
  TimePicker: Ba,
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
  rr as Button,
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
  Gr as Form,
  xe as FormDetails,
  Ur as Hover,
  mr as HoverOverlay,
  Pe as Icon,
  ra as Image,
  zr as ImagePreview,
  na as IndexAnchor,
  aa as IndexBar,
  Sn as Input,
  gt as Lazy,
  ta as Link,
  oa as List,
  Nr as Loading,
  pi as LoadingBar,
  Uo as Locale,
  Zr as Menu,
  ia as Option,
  la as Overlay,
  Yo as PIXEL,
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
  Ge as Ripple,
  ha as Row,
  Xi as SNACKBAR_TYPE,
  ga as Select,
  ya as Skeleton,
  ba as Slider,
  wi as Snackbar,
  Ca as Space,
  Sa as Step,
  ka as Steps,
  Kr as Sticky,
  St as StyleProvider,
  qr as Swipe,
  Xr as SwipeItem,
  Ta as Switch,
  Pa as Tab,
  Oa as TabItem,
  Va as Table,
  Ma as Tabs,
  Ea as TabsItems,
  Si as Themes,
  Ba as TimePicker,
  wn as Tooltip,
  Ia as Uploader,
  TS as _ActionSheetComponent,
  PS as _AppBarComponent,
  VS as _AvatarComponent,
  MS as _AvatarGroupComponent,
  DS as _BackTopComponent,
  AS as _BadgeComponent,
  zS as _BottomNavigationComponent,
  LS as _BottomNavigationItemComponent,
  RS as _BreadcrumbComponent,
  US as _BreadcrumbsComponent,
  NS as _ButtonComponent,
  FS as _ButtonGroupComponent,
  HS as _CardComponent,
  YS as _CellComponent,
  WS as _CheckboxComponent,
  GS as _CheckboxGroupComponent,
  qS as _ChipComponent,
  XS as _ColComponent,
  KS as _CollapseComponent,
  ZS as _CollapseItemComponent,
  wS as _ContextComponent,
  JS as _CountdownComponent,
  QS as _CounterComponent,
  _S as _DatePickerComponent,
  xS as _DialogComponent,
  ek as _DividerComponent,
  nk as _EllipsisComponent,
  ak as _FabComponent,
  tk as _FormComponent,
  jS as _FormDetailsComponent,
  IS as _HoverComponent,
  BS as _HoverOverlayComponent,
  kS as _IconComponent,
  ok as _ImageComponent,
  sk as _ImagePreviewComponent,
  dk as _IndexAnchorComponent,
  vk as _IndexBarComponent,
  fk as _InputComponent,
  OS as _LazyComponent,
  ck as _LinkComponent,
  mk as _ListComponent,
  pk as _LoadingBarComponent,
  ES as _LoadingComponent,
  $S as _LocaleComponent,
  hk as _MenuComponent,
  gk as _OptionComponent,
  yk as _OverlayComponent,
  bk as _PaginationComponent,
  wk as _PaperComponent,
  Ck as _PickerComponent,
  SS as _PopupComponent,
  Sk as _ProgressComponent,
  kk as _PullRefreshComponent,
  $k as _RadioComponent,
  Tk as _RadioGroupComponent,
  Pk as _RateComponent,
  Ok as _ResultComponent,
  CS as _RippleComponent,
  Vk as _RowComponent,
  Mk as _SelectComponent,
  Ek as _SkeletonComponent,
  Bk as _SliderComponent,
  Ik as _SnackbarComponent,
  Nk as _SpaceComponent,
  Dk as _StepComponent,
  Ak as _StepsComponent,
  uk as _StickyComponent,
  zk as _StyleProviderComponent,
  ik as _SwipeComponent,
  lk as _SwipeItemComponent,
  Lk as _SwitchComponent,
  Rk as _TabComponent,
  Uk as _TabItemComponent,
  Fk as _TableComponent,
  Hk as _TabsComponent,
  Yk as _TabsItemsComponent,
  jk as _ThemesComponent,
  Wk as _TimePickerComponent,
  rk as _TooltipComponent,
  Gk as _UploaderComponent,
  wf as actionSheetProps,
  Mi as add,
  Of as appBarProps,
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
  Ph as datePickerProps,
  qk as default,
  Xe as defaultLazyOptions,
  jh as dialogProps,
  Kh as dividerProps,
  Ls as enUS,
  $m as formDetailsProps,
  Cy as formProps,
  As as iconProps,
  Ys as imageCache,
  jy as imagePreviewProps,
  Py as imageProps,
  nb as indexAnchorProps,
  ib as indexBarProps,
  gb as inputProps,
  yS as install,
  Pb as linkProps,
  Eb as listProps,
  Ub as loadingBarProps,
  un as loadingProps,
  Jb as menuProps,
  Us as merge,
  n0 as optionProps,
  i0 as overlayProps,
  Je as pack,
  Rs as packs,
  s0 as paginationProps,
  c0 as paperProps,
  g0 as pickerProps,
  Vt as popupProps,
  O0 as progressProps,
  D0 as pullRefreshProps,
  W0 as radioGroupProps,
  L0 as radioProps,
  K0 as rateProps,
  _0 as resultProps,
  R1 as rowProps,
  j1 as selectProps,
  K1 as skeletonProps,
  x1 as sliderProps,
  sv as snackbarProps,
  kw as spaceProps,
  Pw as stepProps,
  Dw as stepsProps,
  Gt as stickyProps,
  Lw as styleProviderProps,
  gd as swipeProps,
  Fw as switchProps,
  Zw as tabItemProps,
  Ww as tabProps,
  xw as tableProps,
  uC as tabsItemsProps,
  oC as tabsProps,
  JC as timePickerProps,
  iy as tooltipProps,
  lS as uploaderProps,
  Ei as use,
  Pn as useHoverOverlay,
  Vi as useLocale,
  gS as version,
  Oi as zhCN
};
