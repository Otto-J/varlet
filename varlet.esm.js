import { reactive as Re, onMounted as Ct, nextTick as Ae, onActivated as pn, isRef as Xv, watch as se, onBeforeUnmount as lo, onDeactivated as xn, unref as ua, onUnmounted as St, inject as Kv, getCurrentInstance as ea, computed as R, provide as Zv, isVNode as kt, ref as P, Comment as Jv, Fragment as Me, createApp as Qv, h as Ts, onBeforeMount as _v, defineComponent as ee, createVNode as Q, Teleport as Zr, Transition as Ue, withDirectives as $e, vShow as Lr, mergeProps as De, openBlock as p, createBlock as we, resolveDynamicComponent as ra, normalizeClass as c, normalizeStyle as K, resolveComponent as le, resolveDirective as ze, withCtx as ce, createElementVNode as A, renderSlot as W, toDisplayString as oe, createElementBlock as $, renderList as He, createCommentVNode as x, onUpdated as $t, createTextVNode as ke, pushScopeId as hn, popScopeId as gn, withModifiers as $r, normalizeProps as Tt, guardReactiveProps as so, vModelText as xv, createSlots as Zt, withKeys as il, toRaw as ll, TransitionGroup as ef } from "vue";
var Ps = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, ik = Re(Ps);
const yr = Re(Ps), Fe = (e) => typeof e == "string", Bi = (e) => typeof e == "boolean", nr = (e) => typeof e == "number", Ei = (e) => Object.prototype.toString.call(e) === "[object Object]", rf = (e) => typeof e == "object" && e !== null, na = (e) => typeof e == "function", Ve = (e) => Array.isArray(e), nf = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Ni = (e) => e === window, U = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Bi(e) ? Number(e) : e, Jt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, Di = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, aa = () => typeof window < "u", sl = (e) => [...new Set(e)], Os = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), af = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), tf = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, jt = (e) => Ve(e) ? e : [e], Un = (e, r, n) => Math.min(n, Math.max(r, e)), of = (e, r) => Un(e, 0, r.length - 1);
var ul = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), dl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), lf = (e) => {
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
      this.has(n) && Jt(this.cache, n);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Uo = (e) => e, vl = (e) => Math.pow(e, 3), Vs = (e) => e < 0.5 ? vl(e * 2) / 2 : 1 - vl((1 - e) * 2) / 2, uo = (e, r) => e ?? r, Ms = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Sn = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Tr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function fl(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
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
function Bn(e) {
  return window.getComputedStyle(e);
}
function Qe(e) {
  if (Ni(e)) {
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
    return Yo({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function sf(e) {
  var {
    left: r
  } = Qe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function cl(e) {
  var {
    top: r
  } = Qe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function ha(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Ai(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function uf(e) {
  var {
    top: r,
    bottom: n,
    left: a,
    right: t
  } = Qe(e), {
    width: o,
    height: l
  } = Qe(window), i = a <= o && t >= 0, s = r <= l && n >= 0;
  return i && s;
}
function Mo(e) {
  var {
    transform: r
  } = Bn(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function un(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = Bn(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function df(e) {
  for (var r = [], n = e; !Ni(n); )
    n = un(n), r.push(n);
  return r;
}
function Is(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Tr(r, "target element cannot found"), n;
  }
  if (rf(e))
    return e;
  Tr(r, 'type of prop "target" should be a selector or an element object');
}
function vf() {
  var {
    width: e,
    height: r
  } = Qe(window);
  return {
    vw: e,
    vh: r,
    vMin: Math.min(e, r),
    vMax: Math.max(e, r)
  };
}
var Bs = (e) => Fe(e) && e.endsWith("rem"), ff = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), cf = (e) => Fe(e) && e.endsWith("px") || nr(e), mf = (e) => Fe(e) && e.endsWith("%"), Es = (e) => Fe(e) && e.endsWith("vw"), Ns = (e) => Fe(e) && e.endsWith("vh"), Ds = (e) => Fe(e) && e.endsWith("vmin"), As = (e) => Fe(e) && e.endsWith("vmax"), pf = (e) => Fe(e) && e.startsWith("calc("), hf = (e) => Fe(e) && e.startsWith("var("), Le = (e) => {
  if (nr(e))
    return e;
  if (cf(e))
    return +e.replace("px", "");
  if (!aa())
    return 0;
  var {
    vw: r,
    vh: n,
    vMin: a,
    vMax: t
  } = vf();
  if (Es(e))
    return +e.replace("vw", "") * r / 100;
  if (Ns(e))
    return +e.replace("vh", "") * n / 100;
  if (Ds(e))
    return +e.replace("vmin", "") * a / 100;
  if (As(e))
    return +e.replace("vmax", "") * t / 100;
  if (Bs(e)) {
    var o = +e.replace("rem", ""), l = Bn(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return Fe(e) ? U(e) : 0;
}, be = (e) => {
  if (e != null)
    return mf(e) || Es(e) || Ns(e) || ff(e) || Bs(e) || pf(e) || hf(e) || Ds(e) || As(e) ? e : Le(e) + "px";
}, ur = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = be(e), a = n.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = Ms();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function ml(e) {
  var r = Ms();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function vo(e) {
  br(() => {
    br(e);
  });
}
function Dr() {
  return new Promise((e) => {
    br(() => {
      br(e);
    });
  });
}
function gf() {
  return new Promise((e) => {
    br(e);
  });
}
function ga(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = ha(e), s = Ai(e);
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
function zs(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + af(a);
    return r[o] = t, r;
  }, {});
}
function yf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Qt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function or(e) {
  let r = !1;
  Ct(() => {
    e(), Ae(() => {
      r = !0;
    });
  }), pn(() => {
    r && e();
  });
}
function dn(e, r, n, a = {}) {
  if (!aa())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => na(m) ? m() : ua(m), u = (m) => {
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
  Xv(e) && (v = se(() => e.value, (m, g) => {
    d(g), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return or(() => {
    u(e);
  }), lo(() => {
    d(e);
  }), xn(() => {
    d(e);
  }), f;
}
function Ls(e, r, n) {
  if (!aa())
    return;
  dn(document, r, (t) => {
    const o = na(e) ? e() : ua(e);
    o && !o.contains(t.target) && n(t);
  });
}
function fo(e) {
  St(() => {
    e();
  }), xn(() => {
    e();
  });
}
var bf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function wf(e) {
  const r = ea();
  return e in r.provides;
}
function ir(e) {
  if (!wf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Kv(e), { childInstances: n, collect: a, clear: t } = r, o = bf(r, ["childInstances", "collect", "clear"]), l = ea();
  return {
    index: R(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Ct(() => {
        Ae().then(() => {
          a(l, u);
        });
      }), lo(() => {
        Ae().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function Cf(e) {
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
function lr(e) {
  const r = ea(), n = Re([]), a = [], t = R(() => n.length), o = () => {
    const u = Cf(r.subTree);
    n.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    n.push(u), a.push(d), o();
  }, i = (u, d) => {
    Jt(n, u), Jt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Zv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function Pt(e) {
  dn(() => window, "resize", e, { passive: !0 }), dn(() => window, "orientationchange", e, { passive: !0 });
}
function Sf(e, r) {
  const n = P(!1);
  return se(e, (a) => {
    r === a && (n.value = !0);
  }, { immediate: !0 }), n;
}
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
function xe(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function te(e, r) {
  var n = r ?? e;
  return n.install = function(a) {
    var {
      name: t
    } = e;
    t && a.component(t, e);
  }, n;
}
function kf(e) {
  var r = Qv(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: r.mount(n),
    unmount() {
      r.unmount(), document.body.removeChild(n);
    }
  };
}
function ta(e, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {});
  var a = {
    setup() {
      return () => Ts(e, Ho({}, r, n));
    }
  }, {
    unmount: t
  } = kf(a);
  return {
    unmountInstance: t
  };
}
function Rs(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Jv) {
      if (n.type === Me && Ve(n.children)) {
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
  var e = P(""), r = /* @__PURE__ */ function() {
    var t = hl(function* (o, l, i) {
      if (!Ve(o) || !o.length)
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
    var t = hl(function* (o, l, i, s, u) {
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
function $f(e) {
  dn(() => window, "hashchange", e), dn(() => window, "popstate", e);
}
function oa() {
  var e = P(!1);
  return pn(() => {
    e.value = !1;
  }), xn(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function re(e) {
  var r = "var", n = r + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", r) : o.startsWith("--") ? "" + n + o : n + "__" + o : n, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Ve(s)) {
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
function C(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  if (Ve(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function Y(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function pr(e, r) {
  return e === !1 ? null : (e === !0 && r && (e = r), "var-elevation--" + e);
}
function Us(e, r, n) {
  n === void 0 && (n = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = n, i = t ?? "onUpdate:" + r.toString(), s = () => e[r] != null ? e[r] : o;
  if (!a)
    return R({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : C(e[i], d);
      }
    });
  var u = P(s());
  return se(() => e[r], () => {
    u.value = s();
  }), se(() => u.value, (d) => {
    l ? l(i, d) : C(e[i], d);
  }), u;
}
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, _t.apply(this, arguments);
}
var {
  n: Ys
} = re("ripple"), gl = 250;
function Tf(e) {
  var {
    zIndex: r,
    position: n
  } = Bn(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function Pf(e, r) {
  var {
    top: n,
    left: a
  } = Qe(e), {
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
function Hs(e) {
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
      } = Pf(this, e), s = document.createElement("div");
      s.classList.add(Ys()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), Tf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function Fo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Ys());
    if (n.length) {
      var a = n[n.length - 1], t = gl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, gl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function Fs() {
  if (!(!yf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function Of(e, r) {
  var n;
  e._ripple = _t({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: Fo.bind(e)
  }), e.addEventListener("touchstart", Hs, {
    passive: !0
  }), e.addEventListener("touchmove", Fs, {
    passive: !0
  }), e.addEventListener("dragstart", Fo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Vf(e) {
  e.removeEventListener("touchstart", Hs), e.removeEventListener("touchmove", Fs), e.removeEventListener("dragstart", Fo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Mf(e, r) {
  var n, a, t, o, l = {
    color: (n = r.value) == null ? void 0 : n.color,
    disabled: (a = r.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = _t({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var js = {
  mounted: Of,
  unmounted: Vf,
  updated: Mf,
  install(e) {
    e.directive("ripple", this);
  }
}, lk = js;
const Xe = js;
function If(e) {
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
    validator: If
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
    type: [String, Object, Boolean],
    default: "body"
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOverlay: Y(),
  "onUpdate:show": Y(),
  // internal for Dialog
  onRouteChange: Y()
};
function Ws() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Dt(e) {
  yr.locks[e] = 1, Ws();
}
function At(e) {
  delete yr.locks[e], Ws();
}
function co(e, r) {
  var {
    uid: n
  } = ea();
  r && se(r, (a) => {
    a === !1 ? At(n) : a === !0 && e() === !0 && Dt(n);
  }), se(e, (a) => {
    r && r() === !1 || (a === !0 ? Dt(n) : At(n));
  }), _v(() => {
    r && r() === !1 || e() === !0 && Dt(n);
  }), St(() => {
    r && r() === !1 || e() === !0 && At(n);
  }), pn(() => {
    r && r() === !1 || e() === !0 && Dt(n);
  }), xn(() => {
    r && r() === !1 || e() === !0 && At(n);
  });
}
function Vt(e, r) {
  var n = P(yr.zIndex);
  return se(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
var Gs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Bf() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(Gs);
  return {
    index: n,
    popup: r,
    bindPopup: e
  };
}
function Ef() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Gs);
  return {
    length: n,
    popupItems: r,
    bindPopupItems: e
  };
}
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, jo.apply(this, arguments);
}
function yl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: Ir,
  classes: Io
} = re("popup");
const Rr = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Ot,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = Sf(() => e.show, !0), {
      zIndex: o
    } = Vt(() => e.show, 3), {
      disabled: l
    } = oa(), {
      bindPopupItems: i
    } = Ef(), s = () => {
      var {
        closeOnClickOverlay: f,
        onClickOverlay: m
      } = e;
      C(m), f && C(e["onUpdate:show"], !1);
    }, u = () => {
      var {
        overlayClass: f = "",
        overlayStyle: m
      } = e;
      return Q("div", {
        class: Io(Ir("overlay"), f),
        style: jo({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => $e(Q("div", De({
      class: Io(Ir("content"), Ir("--" + e.position), [e.defaultStyle, Ir("--content-background-color")], [e.defaultStyle, Ir("$-elevation--3")], [e.safeArea, Ir("--safe-area")], [e.safeAreaTop, Ir("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && C(n.default)]), [[Lr, e.show]]), v = () => {
      var f;
      return Q(Ue, {
        name: Ir("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [$e(Q("div", {
          class: Io(Ir("$--box"), Ir()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), Q(Ue, {
          name: e.transition || Ir("$-pop-" + e.position)
        }, yl(f = d()) ? f : {
          default: () => [f]
        })]), [[Lr, e.show]])]
      });
    };
    return co(() => e.show, () => e.lockScroll), se(() => e.show, (f) => {
      C(f ? e.onOpen : e.onClose);
    }), i({
      show: R(() => e.show)
    }), $f(() => C(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Q(Zr, {
          to: f,
          disabled: l.value
        }, yl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
te(Rr);
var sk = Rr, qs = {
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
  onClick: Y()
};
function bl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Nf(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        bl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        bl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Df,
  classes: Af
} = re("icon");
function zf(e, r) {
  return p(), we(ra(e.isURL(e.name) ? "img" : "i"), {
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
  }, null, 8, ["class", "style", "src", "onClick"]);
}
var Xs = ee({
  name: "VarIcon",
  props: qs,
  setup(e) {
    var r = P(""), n = P(!1), a = /* @__PURE__ */ function() {
      var t = Nf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || U(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield Ae(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, U(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return se(() => e.name, a, {
      immediate: !0
    }), {
      n: Df,
      classes: Af,
      nextName: r,
      animateInProgress: n,
      isURL: nf,
      toNumber: U,
      toSizeUnit: be
    };
  }
});
Xs.render = zf;
const Ne = Xs;
te(Ne);
var uk = Ne;
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Wo.apply(this, arguments);
}
var Lf = Wo({
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
  onSelect: Y(),
  "onUpdate:show": Y()
}, xe(Ot, [
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
const zi = {
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
}, Ks = {
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
function Li() {
  var e = {}, r = P({}), n = (o, l) => {
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
    e[o] = Go({}, e[o], l), a(o);
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
  packs: Zs,
  pack: _e,
  add: Ri,
  use: Ui,
  merge: Js
} = Li();
Ri("zh-CN", zi);
Ui("zh-CN");
var dk = {
  zhCN: zi,
  enUS: Ks,
  packs: Zs,
  pack: _e,
  add: Ri,
  use: Ui,
  merge: Js,
  useLocale: Li
};
const qo = {
  zhCN: zi,
  enUS: Ks,
  packs: Zs,
  pack: _e,
  add: Ri,
  use: Ui,
  merge: Js,
  useLocale: Li
};
var {
  n: Rf,
  classes: Uf
} = re("action-sheet"), Yf = ["onClick"];
function Hf(e, r) {
  var n = le("var-icon"), a = le("var-popup"), t = ze("ripple");
  return p(), we(a, De({
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
    default: ce(() => [A(
      "div",
      De({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [W(e.$slots, "title", {}, () => [A(
        "div",
        {
          class: c(e.n("title"))
        },
        oe(e.dt(e.title, e.pack.actionSheetTitle)),
        3
        /* TEXT, CLASS */
      )]), W(e.$slots, "actions", {}, () => [(p(!0), $(
        Me,
        null,
        He(e.actions, (o) => $e((p(), $("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: K({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (p(), we(n, {
          key: 0,
          class: c(e.n("action-icon")),
          "var-action-sheet-cover": "",
          name: o.icon,
          size: o.iconSize
        }, null, 8, ["class", "name", "size"])) : x("v-if", !0), A(
          "div",
          {
            class: c(e.n("action-name"))
          },
          oe(o.name),
          3
          /* TEXT, CLASS */
        )], 14, Yf)), [[t, {
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
var Qs = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: Xe
  },
  components: {
    VarPopup: Rr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Lf,
  setup(e) {
    var r = P(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        C(l, t), o && C(e["onUpdate:show"], !1);
      }
    }, a = (t) => C(e["onUpdate:show"], t);
    return se(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: Rf,
      classes: Uf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: _e,
      dt: uo,
      handleSelect: n
    };
  }
});
Qs.render = Hf;
const Mt = Qs;
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
var rn, Yi = {};
function Ff(e) {
  return e === void 0 && (e = {}), Xo({}, Yi, e);
}
function qr(e) {
  return aa() ? new Promise((r) => {
    qr.close();
    var n = Re(Ff(e));
    n.teleport = "body", rn = n;
    var {
      unmountInstance: a
    } = ta(Mt, n, {
      onSelect: (t) => {
        C(n.onSelect, t), r(t);
      },
      onClose: () => {
        C(n.onClose), r("close");
      },
      onClosed: () => {
        C(n.onClosed), a(), rn === n && (rn = null);
      },
      onRouteChange: () => {
        a(), rn === n && (rn = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }) : Promise.resolve();
}
qr.setDefaultOptions = function(e) {
  Yi = e;
};
qr.resetDefaultOptions = function() {
  Yi = {};
};
qr.close = function() {
  if (rn != null) {
    var e = rn;
    rn = null, Ae().then(() => {
      e.show = !1;
    });
  }
};
qr.Component = Mt;
te(Mt);
te(Mt, qr);
var vk = Mt;
function jf(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
}
var Wf = {
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
    validator: jf
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
  n: Gf,
  classes: qf
} = re("app-bar");
function Xf(e, r) {
  return p(), $(
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
        [W(e.$slots, "left"), e.titlePosition === "left" ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: K({
              paddingLeft: e.paddingLeft
            })
          },
          [W(e.$slots, "default", {}, () => [ke(
            oe(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [W(e.$slots, "default", {}, () => [ke(
          oe(e.title),
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
        [e.titlePosition === "right" ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: K({
              paddingRight: e.paddingRight
            })
          },
          [W(e.$slots, "default", {}, () => [ke(
            oe(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), W(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), W(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var _s = ee({
  name: "VarAppBar",
  props: Wf,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(), t = P(), o = () => {
      a.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }, l = R(() => {
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
    return or(o), $t(o), {
      n: Gf,
      classes: qf,
      formatElevation: pr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
_s.render = Xf;
const ya = _s;
te(ya);
var fk = ya;
function wl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function mo(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        wl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        wl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
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
var Kf = "background-image", Zf = "lazy-loading", Jf = "lazy-error", Cl = "lazy-attempt", Qf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Zo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Yn = [], xt = [], xs = lf(100), Ze = {
  loading: Zo,
  error: Zo,
  attempt: 3,
  throttleWait: 300,
  events: Qf
}, Hi = Di(It, Ze.throttleWait);
function po(e, r) {
  e._lazy.arg === Kf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function _f(e) {
  e._lazy.loading && po(e, e._lazy.loading), It();
}
function xf(e) {
  e._lazy.error && po(e, e._lazy.error), e._lazy.state = "error", ji(e), It();
}
function eu(e, r) {
  po(e, r), e._lazy.state = "success", ji(e), It();
}
function ec(e) {
  var r;
  xt.includes(e) || (xt.push(e), (r = Ze.events) == null || r.forEach((n) => {
    e.addEventListener(n, Hi, {
      passive: !0
    });
  }));
}
function rc() {
  xt.forEach((e) => {
    var r;
    (r = Ze.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Hi);
    });
  }), xt.length = 0;
}
function nc(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Zf)) != null ? n : Ze.loading,
    error: (a = e.getAttribute(Jf)) != null ? a : Ze.error,
    attempt: e.getAttribute(Cl) ? Number(e.getAttribute(Cl)) : Ze.attempt
  };
  e._lazy = Ko({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), po(e, Zo), C(Ze.filter, e._lazy);
}
function ac(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, xs.add(r), eu(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? xf(e) : ru(e);
  });
}
function ru(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (xs.has(r)) {
      eu(e, r), e._lazy.attemptLock = !1;
      return;
    }
    _f(e), ac(e, r);
  }
}
function Fi(e) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = mo(function* (e) {
    yield Dr(), uf(e) && ru(e);
  }), Jo.apply(this, arguments);
}
function It() {
  Yn.forEach((e) => Fi(e));
}
function tc(e) {
  return Qo.apply(this, arguments);
}
function Qo() {
  return Qo = mo(function* (e) {
    !Yn.includes(e) && Yn.push(e), df(e).forEach(ec), yield Fi(e);
  }), Qo.apply(this, arguments);
}
function ji(e) {
  Jt(Yn, e), Yn.length === 0 && rc();
}
function oc(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function nu(e, r) {
  return _o.apply(this, arguments);
}
function _o() {
  return _o = mo(function* (e, r) {
    nc(e, r), yield tc(e);
  }), _o.apply(this, arguments);
}
function ic(e, r) {
  return xo.apply(this, arguments);
}
function xo() {
  return xo = mo(function* (e, r) {
    if (!oc(e, r)) {
      Yn.includes(e) && (yield Fi(e));
      return;
    }
    yield nu(e, r);
  }), xo.apply(this, arguments);
}
function lc(e) {
  e === void 0 && (e = {});
  var {
    events: r,
    loading: n,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ze.events = r ?? Ze.events, Ze.loading = n ?? Ze.loading, Ze.error = a ?? Ze.error, Ze.attempt = t ?? Ze.attempt, Ze.throttleWait = o ?? Ze.throttleWait, Ze.filter = l;
}
var au = {
  mounted: nu,
  unmounted: ji,
  updated: ic,
  install(e, r) {
    lc(r), Hi = Di(It, Ze.throttleWait), e.directive("lazy", this);
  }
}, ck = au;
const ba = au;
function sc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var tu = (e) => ["mini", "small", "normal", "large"].includes(e);
function ou(e) {
  return tu(e) || nr(e) || Fe(e);
}
var uc = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: ou,
    default: "normal"
  },
  alt: {
    type: String
  },
  color: {
    type: String
  },
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: sc,
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
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: dc,
  classes: vc
} = re("avatar"), fc = ["src", "alt", "lazy-loading", "lazy-error"], cc = ["src", "alt"];
function mc(e, r) {
  var n = ze("lazy");
  return p(), $(
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
    [e.src ? (p(), $(
      Me,
      {
        key: 0
      },
      [e.lazy ? $e((p(), $("img", {
        key: 0,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: K({
          objectFit: e.fit
        }),
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        onLoad: r[0] || (r[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        })
      }, null, 46, fc)), [[n, e.src]]) : (p(), $("img", {
        key: 1,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: K({
          objectFit: e.fit
        }),
        onLoad: r[1] || (r[1] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: r[2] || (r[2] = function() {
          return e.handleError && e.handleError(...arguments);
        })
      }, null, 46, cc))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), $(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: K({
          transform: "scale(" + e.scale + ")"
        })
      },
      [W(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var iu = ee({
  name: "VarAvatar",
  directives: {
    Lazy: ba
  },
  props: uc,
  setup(e) {
    var r = P(null), n = P(null), a = P(1), t = () => {
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
      d ? (u._lazy.state === "success" && C(v, s), u._lazy.state === "error" && C(f, s)) : C(v, s);
    }, l = (s) => {
      C(e.onError, s);
    }, i = (s) => {
      C(e.onClick, s);
    };
    return or(t), $t(t), {
      internalSizeValidator: tu,
      sizeValidator: ou,
      toSizeUnit: be,
      n: dc,
      classes: vc,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
iu.render = mc;
const wa = iu;
te(wa);
var mk = wa, pc = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: hc,
  classes: gc
} = re("avatar-group");
function yc(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: K(e.rootStyles)
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var lu = ee({
  name: "VarAvatarGroup",
  props: pc,
  setup(e) {
    var r = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": be(e.offset)
    });
    return {
      n: hc,
      classes: gc,
      toSizeUnit: be,
      rootStyles: r
    };
  }
});
lu.render = yc;
const Ca = lu;
te(Ca);
var pk = Ca;
function bc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function wc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var tn = {
  type: {
    type: String,
    default: "circle",
    validator: bc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: wc
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
  n: Cc,
  classes: Sc
} = re("loading"), kc = (e) => (hn(""), e = e(), gn(), e), $c = /* @__PURE__ */ kc(() => /* @__PURE__ */ A(
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
)), Tc = [$c];
function Pc(e, r) {
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
      [W(e.$slots, "default"), e.loading ? (p(), $(
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
    )) : x("v-if", !0), e.isShow ? (p(), $(
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
          Tc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (p(!0), $(
        Me,
        null,
        He(e.loadingTypeDict, (n, a) => (p(), $(
          Me,
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
              Me,
              null,
              He(n, (t) => (p(), $(
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
      )), e.$slots.description || e.description ? (p(), $(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: K({
            color: e.color
          })
        },
        [W(e.$slots, "description", {}, () => [ke(
          oe(e.description),
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
var su = ee({
  name: "VarLoading",
  props: tn,
  setup(e, r) {
    var {
      slots: n
    } = r, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => C(n.default) ? e.loading : !0);
    return {
      n: Cc,
      classes: Sc,
      multiplySizeUnit: ur,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
su.render = Pc;
const vn = su;
te(vn);
var hk = vn, Oc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Vc,
  classes: Mc
} = re("hover-overlay");
function Ic(e, r) {
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
var uu = ee({
  name: "VarHoverOverlay",
  props: Oc,
  setup() {
    return {
      n: Vc,
      classes: Mc
    };
  }
});
uu.render = Ic;
const Pr = uu;
te(Pr);
function fn() {
  var e = P(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var gk = Pr;
function du(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function Bc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[Os(t)] = o, n;
  }, {}) : {};
}
function Ec(e) {
  var {
    value: r
  } = e._hover, n = Bc(e);
  Object.keys(r).forEach((a) => {
    var t = Os(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function Wi(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function Nc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function vu(e) {
  Nc(e), Wi(e, e._hover.rawStyle);
}
function fu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, na(e)) {
    e(this._hover.hovering);
    return;
  }
  Wi(this, e);
}
function cu() {
  if (this._hover.hovering = !1, na(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  vu(this);
}
function mu(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  du(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, Ec(e), e.addEventListener("mouseenter", fu), e.addEventListener("mouseleave", cu));
}
function pu(e, r) {
  du(r.arg) || (vu(e), e.removeEventListener("mouseenter", fu), e.removeEventListener("mouseleave", cu));
}
function Dc(e, r) {
  e._hover && pu(e, r);
}
function Ac(e, r) {
  return !na(r.value) && e._hover.hovering;
}
function zc(e, r) {
  mu(e, r), Ac(e, r) && Wi(e, r.value);
}
var hu = {
  mounted: mu,
  unmounted: pu,
  beforeUpdate: Dc,
  updated: zc,
  install(e) {
    e.directive("hover", this);
  }
}, yk = hu;
const Ur = hu;
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ei.apply(this, arguments);
}
function gu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Lc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Rc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Uc = {
  type: {
    type: String,
    validator: gu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Rc
  },
  size: {
    type: String,
    validator: Lc
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
  loadingType: xe(tn, "type"),
  loadingSize: xe(tn, "size"),
  loadingColor: ei({}, xe(tn, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, yu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Yc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(yu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function Hc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(yu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Fc,
  classes: jc
} = re("button"), Wc = ["type", "disabled"];
function Gc(e, r) {
  var n = le("var-loading"), a = le("var-hover-overlay"), t = ze("ripple"), o = ze("hover");
  return $e((p(), $("button", {
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
  }, [e.loading || e.pending ? (p(), we(n, {
    key: 0,
    class: c(e.n("loading")),
    "var-button-cover": "",
    color: e.loadingColor,
    type: e.loadingType,
    size: e.loadingSize,
    radius: e.loadingRadius
  }, null, 8, ["class", "color", "type", "size", "radius"])) : x("v-if", !0), A(
    "div",
    {
      class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  ), Q(a, {
    hovering: e.hovering
  }, null, 8, ["hovering"])], 46, Wc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var bu = ee({
  name: "VarButton",
  components: {
    VarLoading: vn,
    VarHoverOverlay: Pr
  },
  directives: {
    Ripple: Xe,
    Hover: Ur
  },
  props: Uc,
  setup(e) {
    var r = P(!1), {
      buttonGroup: n
    } = Hc(), {
      hovering: a,
      handleHovering: t
    } = fn(), o = R(() => {
      if (!n)
        return {
          elevation: pr(e.elevation, 2),
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
      e.autoLoading && (r.value = !0, u = Ve(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || r.value || l(C(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || r.value || l(C(f, u));
    };
    return {
      n: Fc,
      classes: jc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
bu.render = Gc;
const vr = bu;
te(vr);
var bk = vr, qc = {
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
  onClick: Y()
}, {
  n: Xc,
  classes: Kc
} = re("back-top");
function Zc(e, r) {
  var n = le("var-icon"), a = le("var-button");
  return p(), we(Zr, {
    to: "body",
    disabled: e.disabled
  }, [A(
    "div",
    De({
      class: e.classes(e.n(), [e.show, e.n("--active")]),
      ref: "backTopEl",
      style: {
        right: e.toSizeUnit(e.right),
        bottom: e.toSizeUnit(e.bottom)
      }
    }, e.$attrs, {
      onClick: r[0] || (r[0] = $r(function() {
        return e.handleClick && e.handleClick(...arguments);
      }, ["stop"]))
    }),
    [W(e.$slots, "default", {}, () => [Q(a, {
      elevation: e.elevation,
      type: "primary",
      round: "",
      "var-back-top-cover": ""
    }, {
      default: ce(() => [Q(n, {
        name: "chevron-up"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["elevation"])])],
    16
    /* FULL_PROPS */
  )], 8, ["disabled"]);
}
var wu = ee({
  name: "VarBackTop",
  components: {
    VarButton: vr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: qc,
  setup(e) {
    var r = P(!1), n = P(null), a = P(!0), t, o = (d) => {
      C(e.onClick, d);
      var v = Ai(t);
      ga(t, {
        left: v,
        duration: e.duration,
        animation: Vs
      });
    }, l = Di(() => {
      r.value = ha(t) >= Le(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Is(e.target, "BackTop") : un(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Ct(() => {
      i(), s(), a.value = !1;
    }), pn(s), fo(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: be,
      n: Xc,
      classes: Kc,
      handleClick: o
    };
  }
});
wu.render = Zc;
const Sa = wu;
te(Sa);
var wk = Sa;
function Jc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Qc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var _c = {
  type: {
    type: String,
    default: "default",
    validator: Jc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Qc
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
  n: xc,
  classes: em
} = re("badge");
function rm(e, r) {
  var n = le("var-icon");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "default"), Q(Ue, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: ce(() => [$e(A(
        "span",
        De({
          class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [e.icon ? (p(), we(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-badge-cover": "",
          name: e.icon
        }, null, 8, ["class", "name"])) : x("v-if", !0), W(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), $(
          "span",
          {
            key: 0,
            class: c(e.n("value"))
          },
          oe(e.value),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)])],
        16
        /* FULL_PROPS */
      ), [[Lr, !e.hidden]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"])],
    2
    /* CLASS */
  );
}
var Cu = ee({
  name: "VarBadge",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: _c,
  setup(e) {
    var r = R(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && U(n) > U(a) ? a + "+" : n;
    });
    return {
      n: xc,
      classes: em,
      value: r
    };
  }
});
Cu.render = rm;
const Hn = Cu;
te(Hn);
var Ck = Hn, nm = {
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
  onChange: Y(),
  "onUpdate:active": Y(),
  onBeforeChange: Y(),
  onFabClick: Y(),
  fabProps: {
    type: Object
  }
}, Su = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function am() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Su);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ri.apply(this, arguments);
}
var {
  n: tm,
  classes: om
} = re("bottom-navigation"), {
  n: ho
} = re("bottom-navigation-item"), Sl = ho("--right-half-space"), kl = ho("--left-half-space"), $l = ho("--right-space"), im = {
  type: "primary"
};
function lm(e, r) {
  var n = le("var-button");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (p(), we(n, De({
      key: 0,
      class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
      "var-bottom-navigation__fab": "",
      onClick: e.handleFabClick
    }, e.fabProps, {
      round: ""
    }), {
      default: ce(() => [W(e.$slots, "fab")]),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "onClick"])) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var ku = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: vr
  },
  props: nm,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = P({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = am(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((h) => {
      var {
        name: k
      } = h;
      return t.value === k.value;
    }), m = () => u.find((h) => {
      var {
        index: k
      } = h;
      return t.value === k.value;
    }), g = () => {
      nr(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > s.value - 1 && C(e["onUpdate:active"], s.value - 1));
    }, b = (h) => {
      t.value !== h && (e.onBeforeChange ? y(h) : w(h));
    }, y = (h) => {
      var k = jt(C(e.onBeforeChange, h));
      Promise.all(k).then((F) => {
        F.every(Boolean) && w(h);
      });
    }, w = (h) => {
      C(e["onUpdate:active"], h), C(e.onChange, h);
    }, O = () => {
      var h = I();
      h.forEach((k) => {
        k.classList.remove(Sl, kl, $l);
      });
    }, T = (h) => {
      var k = I(), F = k.length, V = h % 2 === 0;
      k.forEach((E, q) => {
        S(V, E, q, F);
      });
    }, S = (h, k, F, V) => {
      var E = F === V - 1;
      if (!h && E) {
        k.classList.add($l);
        return;
      }
      var q = F === V / 2 - 1, N = F === V / 2;
      q ? k.classList.add(Sl) : N && k.classList.add(kl);
    }, I = () => Array.from(a.value.querySelectorAll("." + ho())), B = () => {
      C(e.onFabClick);
    }, z = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(z), se(() => s.value, v), se(() => e.fabProps, (h) => {
      i.value = ri({}, im, h);
    }, {
      immediate: !0,
      deep: !0
    }), or(() => {
      n.fab && T(s.value);
    }), $t(() => {
      O(), n.fab && T(s.value);
    }), {
      n: tm,
      classes: om,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: B,
      fabProps: i
    };
  }
});
ku.render = lm;
const ka = ku;
te(ka);
var Sk = ka, sm = {
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
  onClick: Y()
};
function um() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Su);
  return n || Tr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: dm,
  classes: vm
} = re("bottom-navigation-item"), fm = {
  type: "danger",
  dot: !0
};
function cm(e, r) {
  var n = le("var-icon"), a = le("var-badge"), t = ze("ripple");
  return $e((p(), $(
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
    [e.icon && !e.$slots.icon ? (p(), we(n, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : x("v-if", !0), W(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), we(a, De({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : x("v-if", !0), A(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (p(), $(
        Me,
        {
          key: 0
        },
        [ke(
          oe(e.label),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      )), W(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var $u = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Hn,
    VarIcon: Ne
  },
  directives: {
    Ripple: Xe
  },
  props: sm,
  setup(e) {
    var r = R(() => e.name), n = R(() => e.badge), a = P({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = um(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, g = (m = r.value) != null ? m : t.value;
      C(e.onClick, g), C(o.onToggle, g);
    };
    return l(d), se(() => n.value, (m) => {
      a.value = m === !0 ? fm : n.value;
    }, {
      immediate: !0
    }), {
      n: dm,
      classes: vm,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
$u.render = cm;
const $a = $u;
te($a);
var kk = $a, mm = {
  separator: {
    type: String
  },
  onClick: Y()
}, Tu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function pm() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Tu);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function hm() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Tu);
  return r || Tr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: gm,
  classes: ym
} = re("breadcrumb");
function bm(e, r) {
  return p(), $(
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
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : W(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [A(
        "div",
        {
          class: c(e.n("separator"))
        },
        oe((n = e.separator) != null ? n : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var Pu = ee({
  name: "VarBreadcrumb",
  props: mm,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = hm(), t = R(() => r.value === n.length.value - 1), o = R(() => n.separator.value), l = (i) => {
      t.value || C(e.onClick, i);
    };
    return a(null), {
      n: gm,
      classes: ym,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Pu.render = bm;
const Ta = Pu;
te(Ta);
var $k = Ta, wm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Cm
} = re("breadcrumbs");
function Sm(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ou = ee({
  name: "VarBreadcrumbs",
  props: wm,
  setup(e) {
    var r = R(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = pm(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: Cm
    };
  }
});
Ou.render = Sm;
const Pa = Ou;
te(Pa);
var Tk = Pa;
function km(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function $m(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Tm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Pm = {
  type: {
    type: String,
    default: "default",
    validator: km
  },
  size: {
    type: String,
    default: "normal",
    validator: $m
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
    validator: Tm
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
  n: Om,
  classes: Vm
} = re("button-group");
function Mm(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Vu = ee({
  name: "VarButtonGroup",
  props: Pm,
  setup(e) {
    var {
      bindButtons: r
    } = Yc(), n = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return r(n), {
      n: Om,
      classes: Vm,
      formatElevation: pr
    };
  }
});
Vu.render = Mm;
const Oa = Vu;
te(Oa);
var Pk = Oa;
function Im(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Bm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Im,
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
  onClick: Y(),
  "onUpdate:floating": Y()
};
function Tl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Pl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Tl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Tl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Em,
  classes: Nm
} = re("card"), Dm = 500, Am = ["src", "alt"];
function zm(e, r) {
  var n = le("var-icon"), a = le("var-button"), t = ze("ripple");
  return $e((p(), $(
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
      [W(e.$slots, "image", {}, () => [e.src ? (p(), $("img", {
        key: 0,
        class: c(e.n("image")),
        style: K({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Am)) : x("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          oe(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          oe(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          oe(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), $(
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
          [W(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), $(
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
        [W(e.$slots, "close-button", {}, () => [Q(a, {
          "var-card-cover": "",
          round: "",
          class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
          onClick: $r(e.close, ["stop"])
        }, {
          default: ce(() => [Q(n, {
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
var Mu = ee({
  name: "VarCard",
  directives: {
    Ripple: Xe
  },
  components: {
    VarIcon: Ne,
    VarButton: vr
  },
  props: Bm,
  setup(e) {
    var r = P(null), n = P(null), a = P("auto"), t = P("auto"), o = P("100%"), l = P("100%"), i = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), v = P("0px"), f = P("0"), m = R(() => e.layout === "row"), g = P(!1), b = P(!1), {
      zIndex: y
    } = Vt(() => e.floating, 1);
    co(() => e.floating, () => !m.value);
    var w = "auto", O = "auto", T = null, S = P(null), I = /* @__PURE__ */ function() {
      var k = Pl(function* () {
        clearTimeout(S.value), clearTimeout(T), S.value = null, S.value = setTimeout(/* @__PURE__ */ Pl(function* () {
          var {
            width: F,
            height: V,
            left: E,
            top: q
          } = Qe(r.value);
          a.value = be(F), t.value = be(V), o.value = a.value, l.value = t.value, i.value = be(q), s.value = be(E), u.value = "fixed", w = i.value, O = s.value, g.value = !0, yield Dr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Dm : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), B = () => {
      clearTimeout(T), clearTimeout(S.value), S.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = O, v.value = "0px", f.value = "0", g.value = !1, T = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", O = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, z = () => {
      C(e["onUpdate:floating"], !1);
    }, h = (k) => {
      C(e.onClick, k);
    };
    return se(() => e.floating, (k) => {
      m.value || Ae(() => {
        k ? I() : B();
      });
    }, {
      immediate: !0
    }), {
      n: Em,
      classes: Nm,
      toSizeUnit: be,
      card: r,
      cardFloater: n,
      holderWidth: a,
      holderHeight: t,
      floater: S,
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
      close: z,
      showFloatingButtons: g,
      floated: b,
      formatElevation: pr,
      handleClick: h
    };
  }
});
Mu.render = zm;
const Va = Mu;
te(Va);
var Ok = Va, Lm = {
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
  onClick: Y()
}, {
  n: Rm,
  classes: Um
} = re("cell");
function Ym(e, r) {
  var n = le("var-icon"), a = ze("ripple");
  return $e((p(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: K(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "icon", {}, () => [e.icon ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [Q(n, {
        name: e.icon
      }, null, 8, ["name"])],
      2
      /* CLASS */
    )) : x("v-if", !0)]), A(
      "div",
      {
        class: c(e.n("content"))
      },
      [W(e.$slots, "default", {}, () => [e.title ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        oe(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        oe(e.description),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [W(e.$slots, "extra")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Iu = ee({
  name: "VarCell",
  components: {
    VarIcon: Ne
  },
  directives: {
    Ripple: Xe
  },
  props: Lm,
  setup(e) {
    var r = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": be(e.borderOffset),
      "--cell-border-right": be(e.borderOffset)
    }), n = (a) => {
      C(e.onClick, a);
    };
    return {
      n: Rm,
      classes: Um,
      toSizeUnit: be,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Iu.render = Ym;
const Fn = Iu;
te(Fn);
var Vk = Fn, Hm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Fm
} = re("form-details"), jm = {
  key: 0
}, Wm = {
  key: 0
};
function Gm(e, r) {
  return p(), we(Ue, {
    name: e.n()
  }, {
    default: ce(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (p(), $(
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
        [Q(Ue, {
          name: e.n("message")
        }, {
          default: ce(() => [e.errorMessage ? (p(), $(
            "div",
            jm,
            oe(e.errorMessage),
            1
            /* TEXT */
          )) : x("v-if", !0)]),
          _: 1
          /* STABLE */
        }, 8, ["name"])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.n("extra-message"))
        },
        [Q(Ue, {
          name: e.n("message")
        }, {
          default: ce(() => [W(e.$slots, "extra-message", {}, () => [e.extraMessage ? (p(), $(
            "div",
            Wm,
            oe(e.extraMessage),
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
var Bu = ee({
  name: "VarFormDetails",
  props: Hm,
  setup: () => ({
    n: Fm
  })
});
Bu.render = Gm;
const ar = Bu;
te(ar);
var Mk = ar, qm = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, Eu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Xm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Eu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Km() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(Eu);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
  };
}
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
var Nu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Nu), a = ea(), t = n ? (o) => {
    n(ni({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: r,
    form: e,
    bindForm: t
  };
}
function Zm() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Nu);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: Jm,
  classes: Qm
} = re("checkbox");
function _m(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = ze("hover"), l = ze("ripple");
  return p(), $(
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
      [$e((p(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Q(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-blank-outline",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]), Q(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, e.handleHovering, "desktop"], [l, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
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
var Du = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: Xe,
    Hover: Ur
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  props: qm,
  setup(e) {
    var r = P(!1), n = R(() => r.value === e.checkedValue), a = R(() => e.checkedValue), t = P(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Km(), {
      hovering: i,
      handleHovering: s
    } = fn(), {
      form: u,
      bindForm: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Or(), b = (h) => {
      Ae(() => {
        var {
          validateTrigger: k,
          rules: F,
          modelValue: V
        } = e;
        f(k, h, F, V);
      });
    }, y = (h) => {
      r.value = h;
      var {
        checkedValue: k,
        onChange: F
      } = e;
      C(e["onUpdate:modelValue"], r.value), C(F, r.value), b("onChange"), h === k ? o == null || o.onChecked(k) : o == null || o.onUnchecked(k);
    }, w = (h) => {
      var {
        disabled: k,
        readonly: F,
        checkedValue: V,
        uncheckedValue: E,
        onClick: q
      } = e;
      if (!(u != null && u.disabled.value || k) && (C(q, h), !(u != null && u.readonly.value || F))) {
        t.value = !0;
        var N = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && N || y(n.value ? E : V);
      }
    }, O = (h) => {
      var {
        checkedValue: k,
        uncheckedValue: F
      } = e;
      r.value = h.includes(k) ? k : F;
    }, T = () => {
      t.value = !1;
    }, S = () => {
      C(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, I = (h) => {
      var {
        checkedValue: k,
        uncheckedValue: F
      } = e, V = ![k, F].includes(h);
      V && (h = n.value ? F : k), y(h);
    }, B = () => m(e.rules, e.modelValue);
    se(() => e.modelValue, (h) => {
      r.value = h;
    }, {
      immediate: !0
    });
    var z = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: B,
      resetValidation: g,
      reset: S,
      resetWithAnimation: T
    };
    return C(l, z), C(d, z), {
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Jm,
      classes: Qm,
      handleClick: w,
      toggle: I,
      reset: S,
      validate: B,
      resetValidation: g
    };
  }
});
Du.render = _m;
const jn = Du;
te(jn);
var Ik = jn;
function xm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ep = {
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
    validator: xm
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: rp,
  classes: np
} = re("checkbox-group");
function ap(e, r) {
  var n = le("var-form-details");
  return p(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Au = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: ar
  },
  props: ep,
  setup(e) {
    var r = R(() => e.max), n = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Xm(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), v = R(() => i.value), f = (z) => {
      Ae(() => {
        var {
          validateTrigger: h,
          rules: k,
          modelValue: F
        } = e;
        s(h, z, k, F);
      });
    }, m = (z) => {
      C(e["onUpdate:modelValue"], z), C(e.onChange, z), f("onChange");
    }, g = (z) => {
      var {
        modelValue: h
      } = e;
      h.includes(z) || m([...h, z]);
    }, b = (z) => {
      var {
        modelValue: h
      } = e;
      h.includes(z) && m(h.filter((k) => k !== z));
    }, y = () => t.forEach((z) => {
      var {
        sync: h
      } = z;
      return h(e.modelValue);
    }), w = () => {
      t.forEach((z) => z.resetWithAnimation());
    }, O = () => {
      var z = t.map((k) => {
        var {
          checkedValue: F
        } = k;
        return F.value;
      }), h = sl(z);
      return w(), C(e["onUpdate:modelValue"], h), h;
    }, T = () => {
      var z = t.filter((k) => {
        var {
          checked: F
        } = k;
        return !F.value;
      }).map((k) => {
        var {
          checkedValue: F
        } = k;
        return F.value;
      }), h = sl(z);
      return w(), C(e["onUpdate:modelValue"], h), h;
    }, S = () => {
      C(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    se(() => e.modelValue, y, {
      deep: !0
    }), se(() => a.value, y);
    var B = {
      max: r,
      checkedCount: n,
      onChecked: g,
      onUnchecked: b,
      validate: I,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return o(B), C(l, B), {
      errorMessage: i,
      n: rp,
      classes: np,
      checkAll: O,
      inverseAll: T,
      reset: S,
      validate: I,
      resetValidation: d
    };
  }
});
Au.render = ap;
const Ma = Au;
te(Ma);
var Bk = Ma;
function tp(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function op(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ip = {
  type: {
    type: String,
    default: "default",
    validator: tp
  },
  size: {
    type: String,
    default: "normal",
    validator: op
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: xe(qs, "name"),
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
  onClose: Y()
}, {
  n: Jr,
  classes: lp
} = re("chip");
function sp(e, r) {
  var n = le("var-icon");
  return p(), we(Ue, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [A(
      "span",
      De({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [W(e.$slots, "left"), A(
        "span",
        {
          class: c(e.n("text-" + e.size))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      ), W(e.$slots, "right"), e.closable ? (p(), $(
        "span",
        {
          key: 0,
          class: c(e.n("--close")),
          onClick: r[0] || (r[0] = function() {
            return e.handleClose && e.handleClose(...arguments);
          })
        },
        [Q(n, {
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
var zu = ee({
  name: "VarChip",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: ip,
  setup(e) {
    var r = R(() => {
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
    }), n = R(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = Jr(o ? "$--flex" : "$--inline-flex"), d = i ? Jr("plain") + " " + Jr("plain-" + l) : Jr("--" + l), v = s ? Jr("--round") : null;
      return [Jr("--" + t), u, d, v];
    }), a = (t) => {
      C(e.onClose, t);
    };
    return {
      n: Jr,
      classes: lp,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
zu.render = sp;
const Wn = zu;
te(Wn);
var Ek = Wn;
function up(e) {
  return ["row", "column"].includes(e);
}
function dp(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function vp(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var fp = {
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
    validator: up
  },
  justify: {
    type: String,
    validator: dp
  },
  align: {
    type: String,
    validator: vp
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
  onClick: Y()
}, Lu = Symbol("ROW_BIND_COL_KEY");
function cp() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Lu);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function mp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Lu);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: zt,
  classes: pp
} = re("col");
function hp(e, r) {
  return p(), $(
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
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ru = ee({
  name: "VarCol",
  props: fp,
  setup(e) {
    var r = P({
      left: 0,
      right: 0
    }), n = R(() => U(e.span)), a = R(() => U(e.offset)), {
      row: t,
      bindRow: o
    } = mp(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Ei(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(zt("--span-" + u + "-" + m)), f && v.push(zt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(zt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      C(e.onClick, u);
    };
    return se([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), C(o, l), {
      n: zt,
      classes: pp,
      padding: r,
      toNumber: U,
      toSizeUnit: be,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: Qt
    };
  }
});
Ru.render = hp;
const Ia = Ru;
te(Ia);
var Nk = Ia, Uu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function gp() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Uu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var yp = {
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
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: bp
} = re("collapse");
function wp(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Yu = ee({
  name: "VarCollapse",
  props: yp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = gp(), t = R(() => e.modelValue), o = R(() => e.offset), l = R(() => e.divider), i = R(() => e.elevation), s = () => !e.accordion && !Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, y) => s() ? y ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((w) => w !== b) : null, d = (b, y) => {
      var w = u(b, y);
      C(e["onUpdate:modelValue"], w), C(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((y) => {
          var {
            name: w
          } = y;
          return e.modelValue === w.value;
        });
      var b = n.filter((y) => {
        var {
          name: w
        } = y;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return b.length ? b : void 0;
    }, f = () => e.accordion ? n.find((b) => {
      var {
        index: y,
        name: w
      } = b;
      return w.value === void 0 && e.modelValue === y.value;
    }) : n.filter((b) => {
      var {
        index: y,
        name: w
      } = b;
      return w.value === void 0 && e.modelValue.includes(y.value);
    }), m = () => {
      if (s()) {
        var b = v() || f();
        if (e.accordion && !b || !e.accordion && !b.length) {
          n.forEach((y) => {
            y.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((y) => {
          var w = e.accordion ? b === y : b.includes(y);
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
    return a(g), se(() => r.value, () => Ae().then(m)), se(() => e.modelValue, () => Ae().then(m)), {
      n: bp,
      divider: l
    };
  }
});
Yu.render = wp;
const Ba = Yu;
te(Ba);
var Dk = Ba;
function Cp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Uu);
  return n || Tr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Sp = {
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
  n: kp,
  classes: $p
} = re("collapse-item");
function Tp(e, r) {
  var n = le("var-icon");
  return p(), $(
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
        [W(e.$slots, "title", {}, () => [ke(
          oe(e.title),
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
        [W(e.$slots, "icon", {}, () => [Q(n, {
          name: e.icon,
          transition: 250,
          class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
        }, null, 8, ["name", "class"])])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), $e(A(
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
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Lr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Hu = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ne
  },
  props: Sp,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = Cp(), t = !0, o = P(null), l = P(!1), i = P(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = R(() => e.name), g = (I, B) => {
      s.value === void 0 || I && Ve(s.value) || B === i.value || (i.value = B, b(!0));
    }, b = (I) => {
      e.disabled || I || f(e.name || r.value, !i.value);
    }, y = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = I + "px", t && vo(() => {
            t && T();
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
    }, T = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, S = {
      index: r,
      name: m,
      init: g
    };
    return a(S), se(i, (I) => {
      I ? y() : O();
    }), {
      n: kp,
      start: w,
      classes: $p,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: b,
      contentEl: o,
      transitionend: T,
      formatElevation: pr
    };
  }
});
Hu.render = Tp;
const Ea = Hu;
te(Ea);
var Ak = Ea, Pp = {
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
  onEnd: Y(),
  onChange: Y()
}, {
  n: Op
} = re("countdown"), ai = 1e3, ti = 60 * ai, oi = 60 * ti, Ol = 24 * oi;
function Vp(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default", Tt(so(e.timeData)), () => [ke(
      oe(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Fu = ee({
  name: "VarCountdown",
  props: Pp,
  setup(e) {
    var r = P(""), n = P({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, b) => {
      var y = Object.values(b), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach((S, I) => {
        g.includes(S) ? g = g.replace(S, Sn("" + y[I], 2, "0")) : y[I + 1] += y[I] * O[I];
      }), g.includes("S")) {
        var T = Sn("" + y[y.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", T) : g.includes("SS") ? g = g.replace("SS", T.slice(0, 2)) : g = g.replace("S", T.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var b = Math.floor(g / Ol), y = Math.floor(g % Ol / oi), w = Math.floor(g % oi / ti), O = Math.floor(g % ti / ai), T = Math.floor(g % ai), S = {
        days: b,
        hours: y,
        minutes: w,
        seconds: O,
        milliseconds: T
      };
      n.value = S, C(e.onChange, n.value), r.value = s(e.format, S);
    }, d = () => {
      var {
        time: g,
        onEnd: b
      } = e, y = performance.now();
      if (a || (a = y + U(g)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        C(b);
        return;
      }
      t && (o = br(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || U(e.time)), d());
    }, f = () => {
      t = !1, ml(o);
    }, m = () => {
      a = 0, t = !1, ml(o), d();
    };
    return se(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), pn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), xn(() => {
      i = t, f();
    }), St(f), {
      showTime: r,
      timeData: n,
      n: Op,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Fu.render = Vp;
const Na = Fu;
te(Na);
var zk = Na;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Dn = 9e15, yn = 1e9, ii = "0123456789abcdef", eo = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ro = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", li = {
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
  minE: -Dn,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Dn,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, ju, jr, ye = !0, go = "[DecimalError] ", cn = go + "Invalid argument: ", Wu = go + "Precision limit exceeded", Gu = go + "crypto unavailable", qu = "[object Decimal]", tr = Math.floor, Je = Math.pow, Mp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ip = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Bp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Xu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Nr = 1e7, he = 7, Ep = 9007199254740991, Np = eo.length - 1, si = ro.length - 1, J = { toStringTag: qu };
J.absoluteValue = J.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), me(e);
};
J.ceil = function() {
  return me(new this.constructor(this), this.e + 1, 2);
};
J.clampedTo = J.clamp = function(e, r) {
  var n, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(cn + r);
  return n = a.cmp(e), n < 0 ? e : a.cmp(r) > 0 ? r : new t(a);
};
J.comparedTo = J.cmp = function(e) {
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
J.cosine = J.cos = function() {
  var e, r, n = this, a = n.constructor;
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + he, a.rounding = 1, n = Dp(a, _u(a, n)), a.precision = e, a.rounding = r, me(jr == 2 || jr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
J.cubeRoot = J.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ye = !1, o = d.s * Je(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = rr(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Je(n, 1 / 3), e = tr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ee(u.plus(d).times(i), u.plus(s), l + 2, 1), rr(i.d).slice(0, l) === (n = rr(a.d)).slice(0, l))
      if (n = n.slice(l - 3, l + 1), n == "9999" || !t && n == "4999") {
        if (!t && (me(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (me(a, e + 1, 1), r = !a.times(a).times(a).eq(d));
        break;
      }
  return ye = !0, me(a, e, v.rounding, r);
};
J.decimalPlaces = J.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - tr(this.e / he)) * he, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
J.dividedBy = J.div = function(e) {
  return Ee(this, new this.constructor(e));
};
J.dividedToIntegerBy = J.divToInt = function(e) {
  var r = this, n = r.constructor;
  return me(Ee(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
J.equals = J.eq = function(e) {
  return this.cmp(e) === 0;
};
J.floor = function() {
  return me(new this.constructor(this), this.e + 1, 3);
};
J.greaterThan = J.gt = function(e) {
  return this.cmp(e) > 0;
};
J.greaterThanOrEqualTo = J.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
J.hyperbolicCosine = J.cosh = function() {
  var e, r, n, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / bo(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Gn(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return me(o, l.precision = n, l.rounding = a, !0);
};
J.hyperbolicSine = J.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Gn(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / bo(5, e)), t = Gn(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, me(t, r, n, !0);
};
J.hyperbolicTangent = J.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Ee(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
J.inverseCosine = J.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Er(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Er(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Er(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
J.inverseHyperbolicCosine = J.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, ye = !1, n = n.times(n).minus(1).sqrt().plus(n), ye = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
J.inverseHyperbolicSine = J.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, ye = !1, n = n.times(n).plus(1).sqrt().plus(n), ye = !0, a.precision = e, a.rounding = r, n.ln());
};
J.inverseHyperbolicTangent = J.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? me(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
J.inverseSine = J.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Er(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
J.inverseTangent = J.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= si)
      return l = Er(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= si)
      return l = Er(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / he + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ye = !1, r = Math.ceil(i / he), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), ye = !0, me(l, d.precision = v, d.rounding = f, !0);
};
J.isFinite = function() {
  return !!this.d;
};
J.isInteger = J.isInt = function() {
  return !!this.d && tr(this.e / he) > this.d.length - 2;
};
J.isNaN = function() {
  return !this.s;
};
J.isNegative = J.isNeg = function() {
  return this.s < 0;
};
J.isPositive = J.isPos = function() {
  return this.s > 0;
};
J.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
J.lessThan = J.lt = function(e) {
  return this.cmp(e) < 0;
};
J.lessThanOrEqualTo = J.lte = function(e) {
  return this.cmp(e) < 1;
};
J.logarithm = J.log = function(e) {
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
  if (ye = !1, i = v + m, l = on(u, i), a = r ? no(d, i + 10) : on(e, i), s = Ee(l, a, i, 1), Da(s.d, t = v, f))
    do
      if (i += 10, l = on(u, i), a = r ? no(d, i + 10) : on(e, i), s = Ee(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = me(s, v + 1, 0));
        break;
      }
    while (Da(s.d, t += 10, f));
  return ye = !0, me(s, v, f);
};
J.minus = J.sub = function(e) {
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
    return ye ? me(e, i, s) : e;
  }
  if (n = tr(e.e / he), d = tr(m.e / he), u = u.slice(), o = d - n, o) {
    for (v = o < 0, v ? (r = u, o = -o, l = f.length) : (r = f, n = d, l = u.length), a = Math.max(Math.ceil(i / he), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; )
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
        u[t] = Nr - 1;
      --u[t], u[a] += Nr;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --n;
  return u[0] ? (e.d = u, e.e = yo(u, n), ye ? me(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
J.modulo = J.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? me(new a(n), a.precision, a.rounding) : (ye = !1, a.modulo == 9 ? (r = Ee(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ee(n, e, 0, a.modulo, 1), r = r.times(e), ye = !0, n.minus(r));
};
J.naturalExponential = J.exp = function() {
  return ui(this);
};
J.naturalLogarithm = J.ln = function() {
  return on(this);
};
J.negated = J.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, me(e);
};
J.plus = J.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ye ? me(e, i, s) : e;
  if (o = tr(v.e / he), a = tr(e.e / he), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / he), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Nr | 0, u[t] %= Nr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = yo(u, a), ye ? me(e, i, s) : e;
};
J.precision = J.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(cn + e);
  return n.d ? (r = Ku(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
J.round = function() {
  var e = this, r = e.constructor;
  return me(new r(e), e.e + 1, r.rounding);
};
J.sine = J.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + he, a.rounding = 1, n = zp(a, _u(a, n)), a.precision = e, a.rounding = r, me(jr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
J.squareRoot = J.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ye = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = rr(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = tr((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ee(l, o, n + 2, 1)).times(0.5), rr(o.d).slice(0, n) === (r = rr(a.d)).slice(0, n))
      if (r = r.slice(n - 3, n + 1), r == "9999" || !t && r == "4999") {
        if (!t && (me(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        n += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (me(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return ye = !0, me(a, s, d.rounding, e);
};
J.tangent = J.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, me(jr == 2 || jr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
J.times = J.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (n = tr(d.e / he) + tr(e.e / he), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + r, o[t--] = i % Nr | 0, r = i / Nr | 0;
    o[t] = (o[t] + r) % Nr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = yo(o, n), ye ? me(e, v.precision, v.rounding) : e;
};
J.toBinary = function(e, r) {
  return Gi(this, 2, e, r);
};
J.toDecimalPlaces = J.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (mr(e, 0, yn), r === void 0 ? r = a.rounding : mr(r, 0, 8), me(n, e + n.e + 1, r));
};
J.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, !0) : (mr(e, 0, yn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = me(new t(a), e + 1, r), n = Yr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
J.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Yr(t) : (mr(e, 0, yn), r === void 0 ? r = o.rounding : mr(r, 0, 8), a = me(new o(t), e + t.e + 1, r), n = Yr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
J.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, b = m.constructor;
  if (!g)
    return new b(m);
  if (u = n = new b(1), a = s = new b(0), r = new b(a), o = r.e = Ku(g) - m.e - 1, l = o % he, r.d[0] = Je(10, l < 0 ? he + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(cn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (ye = !1, i = new b(rr(g)), d = b.precision, b.precision = o = g.length * he * 2; v = Ee(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], b.precision = d, ye = !0, f;
};
J.toHexadecimal = J.toHex = function(e, r) {
  return Gi(this, 16, e, r);
};
J.toNearest = function(e, r) {
  var n = this, a = n.constructor;
  if (n = new a(n), e == null) {
    if (!n.d)
      return n;
    e = new a(1), r = a.rounding;
  } else {
    if (e = new a(e), r === void 0 ? r = a.rounding : mr(r, 0, 8), !n.d)
      return e.s ? n : e;
    if (!e.d)
      return e.s && (e.s = n.s), e;
  }
  return e.d[0] ? (ye = !1, n = Ee(n, e, 0, r, 1).times(e), ye = !0, me(n)) : (e.s = n.s, n = e), n;
};
J.toNumber = function() {
  return +this;
};
J.toOctal = function(e, r) {
  return Gi(this, 8, e, r);
};
J.toPower = J.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Je(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return me(i, a, o);
  if (r = tr(e.e / he), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= Ep)
    return t = Zu(s, i, n, a), e.s < 0 ? new s(1).div(t) : me(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Je(+i, u), r = n == 0 || !isFinite(n) ? tr(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (ye = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = ui(e.times(on(i, a + n)), a), t.d && (t = me(t, a + 5, 1), Da(t.d, a, o) && (r = a + 10, t = me(ui(e.times(on(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = me(t, a + 1, 0)))), t.s = l, ye = !0, s.rounding = o, me(t, a, o));
};
J.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (mr(e, 1, yn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = me(new t(a), e, r), n = Yr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
J.toSignificantDigits = J.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (mr(e, 1, yn), r === void 0 ? r = a.rounding : mr(r, 0, 8)), me(new a(n), e, r);
};
J.toString = function() {
  var e = this, r = e.constructor, n = Yr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
J.truncated = J.trunc = function() {
  return me(new this.constructor(this), this.e + 1, 1);
};
J.valueOf = J.toJSON = function() {
  var e = this, r = e.constructor, n = Yr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function rr(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = he - a.length, n && (o += _r(n)), o += a;
    l = e[r], a = l + "", n = he - a.length, n && (o += _r(n));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function mr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(cn + e);
}
function Da(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += he, t = 0) : (t = Math.ceil((r + 1) / he), r %= he), o = Je(10, he - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Je(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Je(10, r - 3) - 1, l;
}
function Wt(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += ii.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function Dp(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / bo(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Gn(e, 1, r.times(t), new e(1));
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
    var u, d, v, f, m, g, b, y, w, O, T, S, I, B, z, h, k, F, V, E, q = a.constructor, N = a.s == t.s ? 1 : -1, L = a.d, j = t.d;
    if (!L || !L[0] || !j || !j[0])
      return new q(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (L ? j && L[0] == j[0] : !j) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          L && L[0] == 0 || !j ? N * 0 : N / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Nr, m = he, d = tr(a.e / m) - tr(t.e / m)), V = j.length, k = L.length, w = new q(N), O = w.d = [], v = 0; j[v] == (L[v] || 0); v++)
      ;
    if (j[v] > (L[v] || 0) && d--, o == null ? (B = o = q.precision, l = q.rounding) : i ? B = o + (a.e - t.e) + 1 : B = o, B < 0)
      O.push(1), g = !0;
    else {
      if (B = B / m + 2 | 0, v = 0, V == 1) {
        for (f = 0, j = j[0], B++; (v < k || f) && B--; v++)
          z = f * s + (L[v] || 0), O[v] = z / j | 0, f = z % j | 0;
        g = f || v < k;
      } else {
        for (f = s / (j[0] + 1) | 0, f > 1 && (j = e(j, f, s), L = e(L, f, s), V = j.length, k = L.length), h = V, T = L.slice(0, V), S = T.length; S < V; )
          T[S++] = 0;
        E = j.slice(), E.unshift(0), F = j[0], j[1] >= s / 2 && ++F;
        do
          f = 0, u = r(j, T, V, S), u < 0 ? (I = T[0], V != S && (I = I * s + (T[1] || 0)), f = I / F | 0, f > 1 ? (f >= s && (f = s - 1), b = e(j, f, s), y = b.length, S = T.length, u = r(b, T, y, S), u == 1 && (f--, n(b, V < y ? E : j, y, s))) : (f == 0 && (u = f = 1), b = j.slice()), y = b.length, y < S && b.unshift(0), n(T, b, S, s), u == -1 && (S = T.length, u = r(j, T, V, S), u < 1 && (f++, n(T, V < S ? E : j, S, s))), S = T.length) : u === 0 && (f++, T = [0]), O[v++] = f, u && T[0] ? T[S++] = L[h] || 0 : (T = [L[h]], S = 1);
        while ((h++ < k || T[0] !== void 0) && B--);
        g = T[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      w.e = d, ju = g;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, me(w, i ? o + w.e + 1 : o, l, g);
    }
    return w;
  };
}();
function me(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (r != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = r - t, o < 0)
        o += he, l = r, d = v[f = 0], s = d / Je(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / he), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= he, l = o - he + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= he, l = o - he + t, s = l < 0 ? 0 : d / Je(10, t - l - 1) % 10 | 0;
      }
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Je(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Je(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Je(10, (he - r % he) % he), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Je(10, he - o), v[f] = l > 0 ? (d / Je(10, t - l) % Je(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Nr && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Nr)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return ye && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Yr(e, r, n) {
  if (!e.isFinite())
    return Qu(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + _r(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + _r(-t - 1) + o, n && (a = n - l) > 0 && (o += _r(a))) : t >= l ? (o += _r(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + _r(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += _r(a))), o;
}
function yo(e, r) {
  var n = e[0];
  for (r *= he; n >= 10; n /= 10)
    r++;
  return r;
}
function no(e, r, n) {
  if (r > Np)
    throw ye = !0, n && (e.precision = n), Error(Wu);
  return me(new e(eo), r, 1, !0);
}
function Er(e, r, n) {
  if (r > si)
    throw Error(Wu);
  return me(new e(ro), r, n, !0);
}
function Ku(e) {
  var r = e.length - 1, n = r * he + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      n--;
    for (r = e[0]; r >= 10; r /= 10)
      n++;
  }
  return n;
}
function _r(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Zu(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / he + 4);
  for (ye = !1; ; ) {
    if (n % 2 && (o = o.times(r), Ml(o.d, l) && (t = !0)), n = tr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Ml(r.d, l);
  }
  return ye = !0, o;
}
function Vl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ju(e, r, n) {
  for (var a, t = new e(r[0]), o = 0; ++o < r.length; )
    if (a = new e(r[o]), a.s)
      t[n](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ui(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (ye = !1, s = g) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Je(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = me(o.times(e), s, 1), n = n.times(++d), i = l.plus(Ee(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = me(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && Da(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return me(l, f.precision = g, m, ye = !0);
      else
        return f.precision = g, l;
    }
    l = i;
  }
}
function on(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, b = e, y = b.d, w = b.constructor, O = w.rounding, T = w.precision;
  if (b.s < 0 || !y || !y[0] || !b.e && y[0] == 1 && y.length == 1)
    return new w(y && !y[0] ? -1 / 0 : b.s != 1 ? NaN : y ? 0 : b);
  if (r == null ? (ye = !1, d = T) : d = r, w.precision = d += g, n = rr(y), a = n.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      b = b.times(e), n = rr(b.d), a = n.charAt(0), m++;
    o = b.e, a > 1 ? (b = new w("0." + n), o++) : b = new w(a + "." + n.slice(1));
  } else
    return u = no(w, d + 2, T).times(o + ""), b = on(new w(a + "." + n.slice(1)), d - g).plus(u), w.precision = T, r == null ? me(b, T, O, ye = !0) : b;
  for (v = b, s = l = b = Ee(b.minus(1), b.plus(1), d, 1), f = me(b.times(b), d, 1), t = 3; ; ) {
    if (l = me(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(no(w, d + 2, T).times(o + ""))), s = Ee(s, new w(m), d, 1), r == null)
        if (Da(s.d, d - g, O, i))
          w.precision = d += g, u = l = b = Ee(v.minus(1), v.plus(1), d, 1), f = me(b.times(b), d, 1), t = i = 1;
        else
          return me(s, w.precision = T, O, ye = !0);
      else
        return w.precision = T, s;
    s = u, t += 2;
  }
}
function Qu(e) {
  return String(e.s * e.s / 0);
}
function di(e, r) {
  var n, a, t;
  for ((n = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (a = r.search(/e/i)) > 0 ? (n < 0 && (n = a), n += +r.slice(a + 1), r = r.substring(0, a)) : n < 0 && (n = r.length), a = 0; r.charCodeAt(a) === 48; a++)
    ;
  for (t = r.length; r.charCodeAt(t - 1) === 48; --t)
    ;
  if (r = r.slice(a, t), r) {
    if (t -= a, e.e = n = n - a - 1, e.d = [], a = (n + 1) % he, n < 0 && (a += he), a < t) {
      for (a && e.d.push(+r.slice(0, a)), t -= he; a < t; )
        e.d.push(+r.slice(a, a += he));
      r = r.slice(a), a = he - r.length;
    } else
      a -= t;
    for (; a--; )
      r += "0";
    e.d.push(+r), ye && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Ap(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Xu.test(r))
      return di(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Ip.test(r))
    n = 16, r = r.toLowerCase();
  else if (Mp.test(r))
    n = 2;
  else if (Bp.test(r))
    n = 8;
  else
    throw Error(cn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Zu(a, new a(n), o, o * 2)), u = Wt(r, n, Nr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = yo(u, d), e.d = u, ye = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : ln.pow(2, s))), ye = !0, e);
}
function zp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Gn(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / bo(5, n)), r = Gn(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Gn(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / he);
  for (ye = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = Ee(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Ee(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return ye = !0, l.d.length = d + 1, l;
}
function bo(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function _u(e, r) {
  var n, a = r.s < 0, t = Er(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return jr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    jr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return jr = Vl(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    jr = Vl(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Gi(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = n !== void 0;
  if (g ? (mr(n, 1, yn), a === void 0 ? a = m.rounding : mr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Qu(e);
  else {
    for (d = Yr(e), l = d.indexOf("."), g ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Wt(Yr(f), 10, t), f.e = f.d.length), v = Wt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, n, a, 0, t), v = e.d, o = e.e, u = ju), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ii.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Wt(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += ii.charAt(v[l]);
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
function Ml(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Lp(e) {
  return new this(e).abs();
}
function Rp(e) {
  return new this(e).acos();
}
function Up(e) {
  return new this(e).acosh();
}
function Yp(e, r) {
  return new this(e).plus(r);
}
function Hp(e) {
  return new this(e).asin();
}
function Fp(e) {
  return new this(e).asinh();
}
function jp(e) {
  return new this(e).atan();
}
function Wp(e) {
  return new this(e).atanh();
}
function Gp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Er(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Er(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Er(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Ee(e, r, o, 1)), r = Er(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Ee(e, r, o, 1)), n;
}
function qp(e) {
  return new this(e).cbrt();
}
function Xp(e) {
  return me(e = new this(e), e.e + 1, 2);
}
function Kp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Zp(e) {
  if (!e || typeof e != "object")
    throw Error(go + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    yn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Dn,
    0,
    "toExpPos",
    0,
    Dn,
    "maxE",
    0,
    Dn,
    "minE",
    -Dn,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (n = o[r], t && (this[n] = li[n]), (a = e[n]) !== void 0)
      if (tr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(cn + n + ": " + a);
  if (n = "crypto", t && (this[n] = li[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Gu);
      else
        this[n] = !1;
    else
      throw Error(cn + n + ": " + a);
  return this;
}
function Jp(e) {
  return new this(e).cos();
}
function Qp(e) {
  return new this(e).cosh();
}
function xu(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Il(o)) {
      u.s = o.s, ye ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        ye ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return di(u, o.toString());
    } else if (s !== "string")
      throw Error(cn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Xu.test(o) ? di(u, o) : Ap(u, o);
  }
  if (t.prototype = J, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Zp, t.clone = xu, t.isDecimal = Il, t.abs = Lp, t.acos = Rp, t.acosh = Up, t.add = Yp, t.asin = Hp, t.asinh = Fp, t.atan = jp, t.atanh = Wp, t.atan2 = Gp, t.cbrt = qp, t.ceil = Xp, t.clamp = Kp, t.cos = Jp, t.cosh = Qp, t.div = _p, t.exp = xp, t.floor = eh, t.hypot = rh, t.ln = nh, t.log = ah, t.log10 = oh, t.log2 = th, t.max = ih, t.min = lh, t.mod = sh, t.mul = uh, t.pow = dh, t.random = vh, t.round = fh, t.sign = ch, t.sin = mh, t.sinh = ph, t.sqrt = hh, t.sub = gh, t.sum = yh, t.tan = bh, t.tanh = wh, t.trunc = Ch, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function _p(e, r) {
  return new this(e).div(r);
}
function xp(e) {
  return new this(e).exp();
}
function eh(e) {
  return me(e = new this(e), e.e + 1, 3);
}
function rh() {
  var e, r, n = new this(0);
  for (ye = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      n.d && (n = n.plus(r.times(r)));
    else {
      if (r.s)
        return ye = !0, new this(1 / 0);
      n = r;
    }
  return ye = !0, n.sqrt();
}
function Il(e) {
  return e instanceof ln || e && e.toStringTag === qu || !1;
}
function nh(e) {
  return new this(e).ln();
}
function ah(e, r) {
  return new this(e).log(r);
}
function th(e) {
  return new this(e).log(2);
}
function oh(e) {
  return new this(e).log(10);
}
function ih() {
  return Ju(this, arguments, "lt");
}
function lh() {
  return Ju(this, arguments, "gt");
}
function sh(e, r) {
  return new this(e).mod(r);
}
function uh(e, r) {
  return new this(e).mul(r);
}
function dh(e, r) {
  return new this(e).pow(r);
}
function vh(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : mr(e, 1, yn), a = Math.ceil(e / he), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = r[o], t >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); o < a; )
        t = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Gu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= he, a && e && (t = Je(10, he - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    n = 0, i = [0];
  else {
    for (n = -1; i[0] === 0; n -= he)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < he && (n -= he - a);
  }
  return l.e = n, l.d = i, l;
}
function fh(e) {
  return me(e = new this(e), e.e + 1, this.rounding);
}
function ch(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function mh(e) {
  return new this(e).sin();
}
function ph(e) {
  return new this(e).sinh();
}
function hh(e) {
  return new this(e).sqrt();
}
function gh(e, r) {
  return new this(e).sub(r);
}
function yh() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (ye = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return ye = !0, me(n, this.precision, this.rounding);
}
function bh(e) {
  return new this(e).tan();
}
function wh(e) {
  return new this(e).tanh();
}
function Ch(e) {
  return me(e = new this(e), e.e + 1, 1);
}
J[Symbol.for("nodejs.util.inspect.custom")] = J.toString;
J[Symbol.toStringTag] = "Decimal";
var ln = J.constructor = xu(li);
eo = new ln(eo);
ro = new ln(ro);
var Sh = {
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
  onBeforeChange: Y(),
  onChange: Y(),
  onIncrement: Y(),
  onDecrement: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: kh,
  classes: $h
} = re("counter"), Bl = 100, El = 600, Th = ["inputmode", "readonly", "disabled"];
function Ph(e, r) {
  var n = le("var-icon"), a = le("var-button"), t = le("var-form-details");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      De({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Q(a, {
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
      }, {
        default: ce(() => [Q(n, {
          name: "minus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), $e(A("input", {
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
      }, null, 46, Th), [[xv, e.inputValue]]), Q(a, {
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
      }, {
        default: ce(() => [Q(n, {
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
var ed = ee({
  name: "VarCounter",
  components: {
    VarButton: vr,
    VarIcon: Ne,
    VarFormDetails: ar
  },
  directives: {
    Ripple: Xe
  },
  inheritAttrs: !1,
  props: Sh,
  setup(e) {
    var r = P(""), {
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
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), b = (j) => {
      Ae(() => {
        var {
          validateTrigger: G,
          rules: ne,
          modelValue: M
        } = e;
        o(G, j, ne, M);
      });
    }, y = () => {
      var {
        min: j
      } = e;
      C(e["onUpdate:modelValue"], j != null ? U(j) : 0), i();
    }, w = {
      reset: y,
      validate: g,
      resetValidation: i
    }, O = R(() => {
      var {
        max: j,
        modelValue: G
      } = e;
      return j != null && U(G) >= U(j);
    }), T = R(() => {
      var {
        min: j,
        modelValue: G
      } = e;
      return j != null && U(G) <= U(j);
    }), S = (j) => {
      var {
        decimalLength: G,
        max: ne,
        min: M
      } = e, D = U(j);
      return ne != null && D > U(ne) && (D = U(ne)), M != null && D < U(M) && (D = U(M)), j = String(D), G != null && (j = D.toFixed(U(G))), j;
    }, I = (j) => {
      var {
        lazyChange: G,
        onBeforeChange: ne
      } = e, {
        value: M
      } = j.target, D = S(M);
      G ? C(ne, U(D), L) : N(D), b("onInputChange");
    }, B = () => {
      var {
        disabled: j,
        readonly: G,
        disableDecrement: ne,
        decrementButton: M,
        lazyChange: D,
        step: X,
        modelValue: ae,
        onDecrement: H,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || j || G || ne || !M) && !T.value) {
        var _ = new ln(U(ae)).minus(new ln(U(X))).toString(), ve = S(_), Se = U(ve);
        C(H, Se), D ? C(Z, Se, L) : (N(ve), b("onDecrement"));
      }
    }, z = () => {
      var {
        disabled: j,
        readonly: G,
        disableIncrement: ne,
        incrementButton: M,
        lazyChange: D,
        step: X,
        modelValue: ae,
        onIncrement: H,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || j || G || ne || !M) && !O.value) {
        var _ = new ln(U(ae)).plus(new ln(U(X))).toString(), ve = S(_), Se = U(ve);
        C(H, Se), D ? C(Z, Se, L) : (N(ve), b("onIncrement"));
      }
    }, h = () => {
      var {
        press: j,
        lazyChange: G
      } = e;
      !j || G || (m = window.setTimeout(() => {
        q();
      }, El));
    }, k = () => {
      var {
        press: j,
        lazyChange: G
      } = e;
      !j || G || (f = window.setTimeout(() => {
        E();
      }, El));
    }, F = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, V = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, E = () => {
      d = window.setTimeout(() => {
        z(), E();
      }, Bl);
    }, q = () => {
      v = window.setTimeout(() => {
        B(), q();
      }, Bl);
    }, N = (j) => {
      r.value = j;
      var G = U(j);
      C(e["onUpdate:modelValue"], G);
    }, L = (j) => {
      N(S(String(j))), b("onLazyChange");
    };
    return C(n, w), se(() => e.modelValue, (j) => {
      N(S(String(j))), C(e.onChange, U(j));
    }), N(S(String(e.modelValue))), {
      n: kh,
      classes: $h,
      formatElevation: pr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: T,
      validate: g,
      reset: y,
      resetValidation: i,
      handleChange: I,
      decrement: B,
      increment: z,
      pressDecrement: h,
      pressIncrement: k,
      releaseDecrement: F,
      releaseIncrement: V,
      toSizeUnit: be,
      toNumber: U
    };
  }
});
ed.render = Ph;
const Aa = ed;
te(Aa);
var Lk = Aa, rd = 60, nd = rd * 60, ad = nd * 24, Oh = ad * 7, qn = 1e3, Bo = rd * qn, Nl = nd * qn, Vh = ad * qn, Mh = Oh * qn, qi = "millisecond", An = "second", zn = "minute", Ln = "hour", xr = "day", Gt = "week", Br = "month", td = "quarter", en = "year", Rn = "date", Ih = "YYYY-MM-DDTHH:mm:ssZ", Dl = "Invalid Date", Bh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Eh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Nh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var vi = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, Dh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + vi(t, 2, "0") + ":" + vi(o, 2, "0");
}, Ah = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Br), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Br);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, zh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, Lh = function(r) {
  var n = {
    M: Br,
    y: en,
    w: Gt,
    d: xr,
    D: Rn,
    h: Ln,
    m: zn,
    s: An,
    ms: qi,
    Q: td
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Rh = function(r) {
  return r === void 0;
};
const Uh = {
  s: vi,
  z: Dh,
  m: Ah,
  a: zh,
  p: Lh,
  u: Rh
};
var da = "en", Cn = {};
Cn[da] = Nh;
var Xi = function(r) {
  return r instanceof wo;
}, ao = function e(r, n, a) {
  var t;
  if (!r)
    return da;
  if (typeof r == "string") {
    var o = r.toLowerCase();
    Cn[o] && (t = o), n && (Cn[o] = n, t = o);
    var l = r.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = r.name;
    Cn[i] = r, t = i;
  }
  return !a && t && (da = t), t || !a && da;
}, de = function(r, n) {
  if (Xi(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new wo(a);
}, Yh = function(r, n) {
  return de(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Be = Uh;
Be.l = ao;
Be.i = Xi;
Be.w = Yh;
var Hh = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Be.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(Bh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, wo = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = ao(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = Hh(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Be;
  }, r.isValid = function() {
    return this.$d.toString() !== Dl;
  }, r.isSame = function(a, t) {
    var o = de(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return de(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < de(a);
  }, r.$g = function(a, t, o) {
    return Be.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Be.u(t) ? !0 : t, i = Be.p(a), s = function(w, O) {
      var T = Be.w(o.$u ? Date.UTC(o.$y, O, w) : new Date(o.$y, O, w), o);
      return l ? T : T.endOf(xr);
    }, u = function(w, O) {
      var T = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Be.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? T : S).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case en:
        return l ? s(1, 0) : s(31, 11);
      case Br:
        return l ? s(1, v) : s(0, v + 1);
      case Gt: {
        var g = this.$locale().weekStart || 0, b = (d < g ? d + 7 : d) - g;
        return s(l ? f - b : f + (6 - b), v);
      }
      case xr:
      case Rn:
        return u(m + "Hours", 0);
      case Ln:
        return u(m + "Minutes", 1);
      case zn:
        return u(m + "Seconds", 2);
      case An:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Be.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[xr] = i + "Date", o[Rn] = i + "Date", o[Br] = i + "Month", o[en] = i + "FullYear", o[Ln] = i + "Hours", o[zn] = i + "Minutes", o[An] = i + "Seconds", o[qi] = i + "Milliseconds", o)[l], u = l === xr ? this.$D + (t - this.$W) : t;
    if (l === Br || l === en) {
      var d = this.clone().set(Rn, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Rn, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, r.set = function(a, t) {
    return this.clone().$set(a, t);
  }, r.get = function(a) {
    return this[Be.p(a)]();
  }, r.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Be.p(t), s = function(f) {
      var m = de(o);
      return Be.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Br)
      return this.set(Br, this.$M + a);
    if (i === en)
      return this.set(en, this.$y + a);
    if (i === xr)
      return s(1);
    if (i === Gt)
      return s(7);
    var u = (l = {}, l[zn] = Bo, l[Ln] = Nl, l[An] = qn, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Be.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Dl;
    var l = a || Ih, i = Be.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function(T, S, I, B) {
      return T && (T[S] || T(t, l)) || I[S].slice(0, B);
    }, b = function(T) {
      return Be.s(s % 12 || 12, T, "0");
    }, y = m || function(O, T, S) {
      var I = O < 12 ? "AM" : "PM";
      return S ? I.toLowerCase() : I;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Be.s(d + 1, 2, "0"),
      MMM: g(o.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Be.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(o.weekdaysMin, this.$W, v, 2),
      ddd: g(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Be.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Be.s(u, 2, "0"),
      s: String(this.$s),
      ss: Be.s(this.$s, 2, "0"),
      SSS: Be.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(Eh, function(O, T) {
      return T || w[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Be.p(t), s = de(a), u = (s.utcOffset() - this.utcOffset()) * Bo, d = this - s, v = Be.m(this, s);
    return v = (l = {}, l[en] = v / 12, l[Br] = v, l[td] = v / 3, l[Gt] = (d - u) / Mh, l[xr] = (d - u) / Vh, l[Ln] = d / Nl, l[zn] = d / Bo, l[An] = d / qn, l)[i] || d, o ? v : Be.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Br).$D;
  }, r.$locale = function() {
    return Cn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = ao(a, t, !0);
    return l && (o.$L = l), o;
  }, r.clone = function() {
    return Be.w(this.$d, this);
  }, r.toDate = function() {
    return new Date(this.valueOf());
  }, r.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, r.toISOString = function() {
    return this.$d.toISOString();
  }, r.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), od = wo.prototype;
de.prototype = od;
[["$ms", qi], ["$s", An], ["$m", zn], ["$H", Ln], ["$W", xr], ["$M", Br], ["$y", en], ["$D", Rn]].forEach(function(e) {
  od[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
de.extend = function(e, r) {
  return e.$i || (e(r, wo, de), e.$i = !0), de;
};
de.locale = ao;
de.isDayjs = Xi;
de.unix = function(e) {
  return de(e * 1e3);
};
de.en = Cn[da];
de.Ls = Cn;
de.p = {};
const id = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, ld = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Fh(e) {
  return ["date", "month"].includes(e);
}
var qt = [{
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
}], sa = [{
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
}], jh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Fh
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
  onPreview: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Wh
} = re("picker-header");
function Gh(e, r) {
  var n = le("var-icon"), a = le("var-button");
  return p(), $(
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
      onClick: r[0] || (r[0] = (t) => e.checkDate("prev"))
    }, {
      default: ce(() => [Q(n, {
        name: "chevron-left"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), A(
      "div",
      {
        class: c(e.n("value")),
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [Q(Ue, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: ce(() => [(p(), $(
          "div",
          {
            key: e.showDate
          },
          oe(e.showDate),
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
      onClick: r[2] || (r[2] = (t) => e.checkDate("next"))
    }, {
      default: ce(() => [Q(n, {
        name: "chevron-right"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])],
    2
    /* CLASS */
  );
}
var sd = ee({
  name: "PanelHeader",
  components: {
    VarButton: vr,
    VarIcon: Ne
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
    } = r, a = P(!1), t = P(0), o = R(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return U(v) + t.value;
      var f = (i = _e.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return _e.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return se(() => e.date, () => {
      t.value = 0;
    }), {
      n: Wh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
sd.render = Gh;
const ud = sd;
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
de.extend(id);
de.extend(ld);
var {
  n: Lt,
  classes: qh
} = re("month-picker"), {
  n: Rt
} = re("date-picker");
function Xh(e, r) {
  var n = le("panel-header"), a = le("var-button");
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(n, {
        ref: "headerEl",
        type: "month",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickYear,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), Q(Ue, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: ce(() => [(p(), $("ul", {
          key: e.panelKey
        }, [(p(!0), $(
          Me,
          null,
          He(e.MONTH_LIST, (t) => (p(), $("li", {
            key: t.index
          }, [Q(a, De({
            type: "primary",
            "var-month-picker-cover": "",
            ripple: !1,
            elevation: e.componentProps.buttonElevation
          }, fi({}, e.buttonProps(t.index)), {
            onClick: (o) => e.chooseMonth(t, o)
          }), {
            default: ce(() => [ke(
              oe(e.getMonthAbbr(t.index)),
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
var dd = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: ud
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
    } = r, [a, t] = e.current.split("-"), o = P(!1), l = P(0), i = P(null), s = Re({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (O) => {
      var T, S;
      return (T = (S = _e.value.datePickerMonthDict) == null ? void 0 : S[O].abbr) != null ? T : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: T
        },
        componentProps: {
          min: S,
          max: I
        }
      } = e, B = !0, z = !0, h = T + "-" + O;
      return I && (B = de(h).isSameOrBefore(de(I), "month")), S && (z = de(h).isSameOrAfter(de(S), "month")), B && z;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: T,
          chooseDays: S,
          chooseRangeMonth: I
        },
        componentProps: {
          type: B,
          range: z
        }
      } = e;
      if (z) {
        if (!I.length)
          return !1;
        var h = de(O).isSameOrBefore(de(I[1]), "month"), k = de(O).isSameOrAfter(de(I[0]), "month");
        return h && k;
      }
      return B === "month" ? T.includes(O) : S.some((F) => F.includes(O));
    }, g = (O) => {
      var {
        choose: {
          chooseMonth: T
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: I,
          color: B,
          multiple: z,
          range: h
        }
      } = e, k = S + "-" + O, F = () => h || z ? m(k) : (T == null ? void 0 : T.index) === O && u.value, V = () => f(O) ? I ? !I(k) : !1 : !0, E = V(), q = () => E ? !0 : h || z ? !m(k) : !u.value || (T == null ? void 0 : T.index) !== O, N = () => d.value && t === O && e.componentProps.showCurrent ? (h || z || u.value) && E ? !0 : h || z ? !m(k) : u.value ? (T == null ? void 0 : T.index) !== t : !0 : !1, L = () => E ? "" : N() ? B ?? "" : F() ? "" : Rt() + "-color-cover", j = L().startsWith(Rt());
      return {
        outline: N(),
        text: q(),
        color: q() ? "" : B,
        textColor: j ? "" : L(),
        [Rt() + "-color-cover"]: j,
        class: qh(Lt("button"), [E, Lt("button--disabled")]),
        disabled: E
      };
    }, b = (O, T) => {
      var S = T.currentTarget;
      S.classList.contains(Lt("button--disabled")) || n("choose-month", O);
    }, y = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, w = (O) => {
      i.value.checkDate(O);
    };
    return se(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: T,
          max: S
        }
      } = e;
      S && (s.right = !de("" + (U(O) + 1)).isSameOrBefore(de(S), "year")), T && (s.left = !de("" + (U(O) - 1)).isSameOrAfter(de(T), "year"));
    }, {
      immediate: !0
    }), {
      n: Lt,
      nDate: Rt,
      pack: _e,
      MONTH_LIST: qt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: g,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: y
    };
  }
});
dd.render = Xh;
const Kh = dd;
var {
  n: Al,
  classes: Zh
} = re("year-picker"), Jh = ["onClick"];
function Qh(e, r) {
  return p(), $(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), $(
      Me,
      null,
      He(e.yearList, (n) => (p(), $("li", {
        key: n,
        class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
        style: K({
          color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(n)
      }, oe(n), 15, Jh))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var vd = ee({
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
    } = r, a = R(() => {
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
        var d = de(i).format("YYYY-MM-D"), v = U(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = de(s).format("YYYY-MM-D"), m = U(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return or(() => {
      var o = document.querySelector("." + Al("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Al,
      classes: Zh,
      yearList: a,
      chooseYear: t,
      toNumber: U
    };
  }
});
vd.render = Qh;
const _h = vd;
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
de.extend(id);
de.extend(ld);
var {
  n: Nn,
  classes: xh
} = re("day-picker"), {
  n: Ut
} = re("date-picker");
function eg(e, r) {
  var n = le("panel-header"), a = le("var-button");
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(n, {
        ref: "headerEl",
        type: "day",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickMonth,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), Q(Ue, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: ce(() => [(p(), $("div", {
          key: e.panelKey
        }, [A(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(p(!0), $(
            Me,
            null,
            He(e.sortWeekList, (t) => (p(), $(
              "li",
              {
                key: t.index
              },
              oe(e.getDayAbbr(t.index)),
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
          [(p(!0), $(
            Me,
            null,
            He(e.days, (t, o) => (p(), $("li", {
              key: o
            }, [Q(a, De({
              type: "primary",
              "var-day-picker-cover": "",
              round: "",
              ripple: !1,
              elevation: e.componentProps.buttonElevation
            }, ci({}, e.buttonProps(t)), {
              onClick: (l) => e.chooseDay(t, l)
            }), {
              default: ce(() => [ke(
                oe(e.filterDay(t)),
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
var fd = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: ud
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
    } = r, [a, t, o] = e.current.split("-"), l = P([]), i = P(!1), s = P(0), u = P(null), d = Re({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var h;
      return e.choose.chooseYear === e.preview.previewYear && ((h = e.choose.chooseMonth) == null ? void 0 : h.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var h = sa.findIndex((k) => k.index === e.componentProps.firstDayOfWeek);
      return h === -1 || h === 0 ? sa : sa.slice(h).concat(sa.slice(0, h));
    }), g = (h) => {
      var k, F;
      return (k = (F = _e.value.datePickerWeekDict) == null ? void 0 : F[h].abbr) != null ? k : "";
    }, b = (h) => h > 0 ? h : "", y = () => {
      var {
        preview: {
          previewMonth: h,
          previewYear: k
        }
      } = e, F = de(k + "-" + h.index).daysInMonth(), V = de(k + "-" + h.index + "-01").day(), E = m.value.findIndex((q) => q.index === "" + V);
      l.value = [...Array(E).fill(-1), ...Array.from(Array(F + 1).keys())].filter((q) => q);
    }, w = () => {
      var {
        preview: {
          previewYear: h,
          previewMonth: k
        },
        componentProps: {
          max: F,
          min: V
        }
      } = e;
      if (F) {
        var E = h + "-" + (U(k.index) + 1);
        d.right = !de(E).isSameOrBefore(de(F), "month");
      }
      if (V) {
        var q = h + "-" + (U(k.index) - 1);
        d.left = !de(q).isSameOrAfter(de(V), "month");
      }
    }, O = (h) => {
      var {
        preview: {
          previewYear: k,
          previewMonth: F
        },
        componentProps: {
          min: V,
          max: E
        }
      } = e, q = !0, N = !0, L = k + "-" + F.index + "-" + h;
      return E && (q = de(L).isSameOrBefore(de(E), "day")), V && (N = de(L).isSameOrAfter(de(V), "day")), q && N;
    }, T = (h) => {
      var {
        choose: {
          chooseDays: k,
          chooseRangeDay: F
        },
        componentProps: {
          range: V
        }
      } = e;
      if (V) {
        if (!F.length)
          return !1;
        var E = de(h).isSameOrBefore(de(F[1]), "day"), q = de(h).isSameOrAfter(de(F[0]), "day");
        return E && q;
      }
      return k.includes(h);
    }, S = (h) => {
      if (h < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Nn("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: k
        },
        preview: {
          previewYear: F,
          previewMonth: V
        },
        componentProps: {
          allowedDates: E,
          color: q,
          multiple: N,
          range: L
        }
      } = e, j = F + "-" + V.index + "-" + h, G = () => L || N ? T(j) : U(k) === h && f.value, ne = () => O(h) ? E ? !E(j) : !1 : !0, M = ne(), D = () => M ? !0 : L || N ? !T(j) : !f.value || U(k) !== h, X = () => v.value && U(o) === h && e.componentProps.showCurrent ? (L || N || f.value) && M ? !0 : L || N ? !T(j) : f.value ? k !== o : !0 : !1, ae = () => M ? "" : X() ? q ?? "" : G() ? "" : Ut() + "-color-cover", H = ae().startsWith(Ut());
      return {
        text: D(),
        outline: X(),
        textColor: H ? "" : ae(),
        [Ut() + "-color-cover"]: H,
        class: xh(Nn("button"), Nn("button--usable"), [M, Nn("button--disabled")]),
        disabled: M
      };
    }, I = (h) => {
      i.value = h === "prev", s.value += h === "prev" ? -1 : 1, n("check-preview", "month", h);
    }, B = (h, k) => {
      var F = k.currentTarget;
      F.classList.contains(Nn("button--disabled")) || n("choose-day", h);
    }, z = (h) => {
      u.value.checkDate(h);
    };
    return or(() => {
      y(), w();
    }), se(() => e.preview, () => {
      y(), w();
    }), {
      n: Nn,
      nDate: Ut,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: z,
      filterDay: b,
      getDayAbbr: g,
      checkDate: I,
      chooseDay: B,
      buttonProps: S
    };
  }
});
fd.render = eg;
const rg = fd;
var {
  n: ng,
  classes: ag
} = re("date-picker");
function tg(e, r) {
  var n = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return p(), $(
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
        [W(e.$slots, "year", {
          year: e.chooseYear
        }, () => [ke(
          oe(e.chooseYear),
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
        [Q(Ue, {
          name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
        }, {
          default: ce(() => {
            var o, l, i;
            return [e.type === "month" ? (p(), $("div", {
              key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
            }, [e.range ? W(e.$slots, "range", {
              key: 0,
              choose: e.getChoose.chooseRangeMonth
            }, () => [ke(
              oe(e.getMonthTitle),
              1
              /* TEXT */
            )]) : e.multiple ? W(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseMonths
            }, () => [ke(
              oe(e.getMonthTitle),
              1
              /* TEXT */
            )]) : W(e.$slots, "month", {
              key: 2,
              month: (l = e.chooseMonth) == null ? void 0 : l.index,
              year: e.chooseYear
            }, () => [ke(
              oe(e.getMonthTitle),
              1
              /* TEXT */
            )])])) : (p(), $("div", {
              key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
            }, [e.range ? W(e.$slots, "range", {
              key: 0,
              choose: e.formatRange
            }, () => [ke(
              oe(e.getDateTitle),
              1
              /* TEXT */
            )]) : e.multiple ? W(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseDays
            }, () => [ke(
              oe(e.getDateTitle),
              1
              /* TEXT */
            )]) : W(e.$slots, "date", Tt(De({
              key: 2
            }, e.slotProps)), () => [ke(
              oe(e.getDateTitle),
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
      [Q(Ue, {
        name: e.n() + "-panel-fade"
      }, {
        default: ce(() => [e.getPanelType === "year" ? (p(), we(n, {
          key: 0,
          "component-props": e.componentProps,
          preview: e.previewYear,
          onChooseYear: e.getChooseYear
        }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (p(), we(a, {
          key: 1,
          ref: "monthPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "click-year": () => e.clickEl("year"),
          "component-props": e.componentProps,
          onChooseMonth: e.getChooseMonth,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (p(), we(t, {
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
var cd = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Kh,
    YearPickerPanel: _h,
    DayPickerPanel: rg
  },
  props: jh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = de().format("YYYY-MM-D"), [l, i] = o.split("-"), s = qt.find((ue) => ue.index === i), u = P(!1), d = P(!1), v = P(!0), f = P(), m = P(), g = P(), b = P(s), y = P(l), w = P(!1), O = P([]), T = P([]), S = P([]), I = P([]), B = P(null), z = P(null), h = Re({
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
    }), k = R(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: O.value,
      chooseDays: T.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: I.value
    })), F = R(() => ({
      previewMonth: b.value,
      previewYear: y.value
    })), V = R(() => {
      var {
        multiple: ue,
        range: Ce
      } = e;
      if (Ce)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var ge = "";
      if (f.value) {
        var Te, Pe;
        ge = (Te = (Pe = _e.value.datePickerMonthDict) == null ? void 0 : Pe[f.value.index].name) != null ? Te : "";
      }
      return ue ? "" + O.value.length + _e.value.datePickerSelected : ge;
    }), E = R(() => {
      var ue, Ce, ge, Te, {
        multiple: Pe,
        range: Ye
      } = e;
      if (Ye) {
        var sr = I.value.map((Vo) => de(Vo).format("YYYY-MM-DD"));
        return sr.length ? sr[0] + " ~ " + sr[1] : "";
      }
      if (Pe)
        return "" + T.value.length + _e.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var wr = de(m.value + "-" + f.value.index + "-" + g.value).day(), En = sa.find((Vo) => Vo.index === "" + wr), ol = (ue = (Ce = _e.value.datePickerWeekDict) == null ? void 0 : Ce[En.index].name) != null ? ue : "", Gv = (ge = (Te = _e.value.datePickerMonthDict) == null ? void 0 : Te[f.value.index].name) != null ? ge : "", qv = Sn(g.value, 2, "0");
      return _e.value.lang === "zh-CN" ? f.value.index + "-" + qv + " " + ol.slice(0, 3) : ol.slice(0, 3) + ", " + Gv.slice(0, 3) + " " + g.value;
    }), q = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), N = R(() => !e.touchable || ["", "year"].includes(q.value)), L = R(() => {
      var ue, Ce, ge, Te, Pe = de(m.value + "-" + ((ue = f.value) == null ? void 0 : ue.index) + "-" + g.value).day(), Ye = g.value ? Sn(g.value, 2, "0") : "";
      return {
        week: "" + Pe,
        year: (Ce = m.value) != null ? Ce : "",
        month: (ge = (Te = f.value) == null ? void 0 : Te.index) != null ? ge : "",
        date: Ye
      };
    }), j = R(() => k.value.chooseRangeDay.map((ue) => de(ue).format("YYYY-MM-DD"))), G = R(() => m.value === y.value), ne = R(() => {
      var ue;
      return ((ue = f.value) == null ? void 0 : ue.index) === b.value.index;
    }), M = (ue) => {
      ue === "year" ? u.value = !0 : ue === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, D = (ue) => {
      if (!N.value) {
        var {
          clientX: Ce,
          clientY: ge
        } = ue.touches[0];
        r = Ce, n = ge;
      }
    }, X = (ue, Ce) => ue >= Ce && ue > 20 ? "x" : "y", ae = (ue) => {
      if (!N.value) {
        var {
          clientX: Ce,
          clientY: ge
        } = ue.touches[0], Te = Ce - r, Pe = ge - n;
        t = X(Math.abs(Te), Math.abs(Pe)), a = Te > 0 ? "prev" : "next";
      }
    }, H = () => {
      if (!(N.value || t !== "x")) {
        var ue = q.value === "month" ? B : z;
        vo(() => {
          ue.value.forwardRef(a), Ge();
        });
      }
    }, Z = (ue, Ce) => {
      var ge = Ce === "month" ? S : I;
      if (ge.value = v.value ? [ue, ue] : [ge.value[0], ue], v.value = !v.value, v.value) {
        var Te = de(ge.value[0]).isAfter(ge.value[1]), Pe = Te ? [ge.value[1], ge.value[0]] : [...ge.value];
        C(e["onUpdate:modelValue"], Pe), C(e.onChange, Pe);
      }
    }, _ = (ue, Ce) => {
      var ge = Ce === "month" ? O : T, Te = Ce === "month" ? "YYYY-MM" : "YYYY-MM-DD", Pe = ge.value.map((sr) => de(sr).format(Te)), Ye = Pe.findIndex((sr) => sr === ue);
      Ye === -1 ? Pe.push(ue) : Pe.splice(Ye, 1), C(e["onUpdate:modelValue"], Pe), C(e.onChange, Pe);
    }, ve = (ue, Ce) => !m.value || !f.value ? !1 : G.value ? ue === "month" ? Ce.index < f.value.index : ne.value ? Ce < U(g.value) : f.value.index > b.value.index : m.value > y.value, Se = (ue) => {
      var {
        readonly: Ce,
        range: ge,
        multiple: Te,
        onChange: Pe,
        "onUpdate:modelValue": Ye
      } = e;
      if (!(ue < 0 || Ce)) {
        w.value = ve("day", ue);
        var sr = y.value + "-" + b.value.index + "-" + ue, wr = de(sr).format("YYYY-MM-DD");
        ge ? Z(wr, "day") : Te ? _(wr, "day") : (C(Ye, wr), C(Pe, wr));
      }
    }, Ie = (ue) => {
      var {
        type: Ce,
        readonly: ge,
        range: Te,
        multiple: Pe,
        onChange: Ye,
        onPreview: sr,
        "onUpdate:modelValue": wr
      } = e;
      if (w.value = ve("month", ue), Ce === "month" && !ge) {
        var En = y.value + "-" + ue.index;
        Te ? Z(En, "month") : Pe ? _(En, "month") : (C(wr, En), C(Ye, En));
      } else
        b.value = ue, C(sr, U(y.value), U(b.value.index));
      d.value = !1;
    }, ie = (ue) => {
      y.value = "" + ue, u.value = !1, d.value = !0, C(e.onPreview, U(y.value), U(b.value.index));
    }, fe = (ue, Ce) => {
      var ge = Ce === "prev" ? -1 : 1;
      if (ue === "year")
        y.value = "" + (U(y.value) + ge);
      else {
        var Te = U(b.value.index) + ge;
        Te < 1 && (y.value = "" + (U(y.value) - 1), Te = 12), Te > 12 && (y.value = "" + (U(y.value) + 1), Te = 1), b.value = qt.find((Pe) => U(Pe.index) === Te);
      }
      C(e.onPreview, U(y.value), U(b.value.index));
    }, pe = () => (e.multiple || e.range) && !Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Oe = (ue) => Ve(ue) ? !1 : ue === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, je = (ue, Ce) => {
      var ge = Ce === "month" ? S : I, Te = Ce === "month" ? "YYYY-MM" : "YYYY-MM-D", Pe = ue.map((wr) => de(wr).format(Te)).slice(0, 2), Ye = ge.value.some((wr) => Oe(wr));
      if (!Ye) {
        ge.value = Pe;
        var sr = de(ge.value[0]).isAfter(ge.value[1]);
        ge.value.length === 2 && sr && (ge.value = [ge.value[1], ge.value[0]]);
      }
    }, Ke = (ue, Ce) => {
      var ge = Ce === "month" ? O : T, Te = Ce === "month" ? "YYYY-MM" : "YYYY-MM-D", Pe = Array.from(new Set(ue.map((Ye) => de(Ye).format(Te))));
      ge.value = Pe.filter((Ye) => Ye !== "Invalid Date");
    }, We = (ue) => {
      var Ce = de(ue).format("YYYY-MM-D");
      if (!Oe(Ce)) {
        var [ge, Te, Pe] = Ce.split("-"), Ye = qt.find((sr) => sr.index === Te);
        f.value = Ye, m.value = ge, g.value = Pe, b.value = Ye, y.value = ge;
      }
    }, Ge = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return se(() => e.modelValue, (ue) => {
      if (!(!pe() || Oe(ue) || !ue))
        if (e.range) {
          if (!Ve(ue))
            return;
          v.value = ue.length !== 1, je(ue, e.type);
        } else if (e.multiple) {
          if (!Ve(ue))
            return;
          Ke(ue, e.type);
        } else
          We(ue);
    }, {
      immediate: !0
    }), se(q, Ge), {
      n: ng,
      classes: ag,
      monthPanelEl: B,
      dayPanelEl: z,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: V,
      getDateTitle: E,
      getPanelType: q,
      getChoose: k,
      getPreview: F,
      componentProps: h,
      slotProps: L,
      formatRange: j,
      clickEl: M,
      handleTouchstart: D,
      handleTouchmove: ae,
      handleTouchend: H,
      getChooseDay: Se,
      getChooseMonth: Ie,
      getChooseYear: ie,
      checkPreview: fe,
      formatElevation: pr
    };
  }
});
cd.render = tg;
const za = cd;
te(za);
var Rk = za;
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
function og(e) {
  return ["left", "center", "right"].includes(e);
}
var ig = mi({
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
    validator: og
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
  onBeforeClose: Y(),
  onConfirm: Y(),
  onCancel: Y(),
  "onUpdate:show": Y()
}, xe(Ot, [
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
var {
  n: lg,
  classes: sg
} = re("dialog");
function ug(e, r) {
  var n = le("var-button"), a = le("var-popup");
  return p(), we(a, {
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
    default: ce(() => [A(
      "div",
      De({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: pi({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [A(
        "div",
        {
          class: c(e.n("title"))
        },
        [W(e.$slots, "title", {}, () => [ke(
          oe(e.dt(e.title, e.pack.dialogTitle)),
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
        [W(e.$slots, "default", {}, () => [ke(
          oe(e.message),
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
        [e.cancelButton ? (p(), we(n, {
          key: 0,
          class: c(e.classes(e.n("button"), e.n("cancel-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.cancelButtonTextColor,
          color: e.cancelButtonColor,
          onClick: e.cancel
        }, {
          default: ce(() => [ke(
            oe(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : x("v-if", !0), e.confirmButton ? (p(), we(n, {
          key: 1,
          class: c(e.classes(e.n("button"), e.n("confirm-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.confirmButtonTextColor,
          color: e.confirmButtonColor,
          onClick: e.confirm
        }, {
          default: ce(() => [ke(
            oe(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
            1
            /* TEXT */
          )]),
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
var md = ee({
  name: "VarDialog",
  components: {
    VarPopup: Rr,
    VarButton: vr
  },
  inheritAttrs: !1,
  props: ig,
  setup(e) {
    var r = P(!1), n = P(!1), a = () => C(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (C(s), !!i) {
        if (u != null) {
          C(u, "close", a);
          return;
        }
        C(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (C(s), i != null) {
        C(i, "confirm", a);
        return;
      }
      C(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (C(s), i != null) {
        C(i, "cancel", a);
        return;
      }
      C(e["onUpdate:show"], !1);
    };
    return se(() => e.show, (i) => {
      r.value = i;
    }, {
      immediate: !0
    }), se(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        n.value = !1;
        return;
      }
      n.value = i;
    }, {
      immediate: !0
    }), {
      n: lg,
      classes: sg,
      pack: _e,
      dt: uo,
      popupShow: r,
      popupCloseOnClickOverlay: n,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: be
    };
  }
});
md.render = ug;
const Bt = md;
function to() {
  return to = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, to.apply(this, arguments);
}
var nn, oo = {};
function dg(e) {
  return e === void 0 && (e = {}), Fe(e) ? to({}, oo, {
    message: e
  }) : to({}, oo, e);
}
function Xr(e) {
  return aa() ? new Promise((r) => {
    Xr.close();
    var n = dg(e), a = Re(n);
    a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = ta(Bt, a, {
      onConfirm: () => {
        C(a.onConfirm), r("confirm");
      },
      onCancel: () => {
        C(a.onCancel), r("cancel");
      },
      onClose: () => {
        C(a.onClose), r("close");
      },
      onClosed: () => {
        C(a.onClosed), t(), nn === a && (nn = null);
      },
      onRouteChange: () => {
        t(), nn === a && (nn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Xr.setDefaultOptions = function(e) {
  oo = e;
};
Xr.resetDefaultOptions = function() {
  oo = {};
};
Xr.close = function() {
  if (nn != null) {
    var e = nn;
    nn = null, Ae().then(() => {
      e.show = !1;
    });
  }
};
Xr.Component = Bt;
te(Bt);
te(Bt, Xr);
var Uk = Bt, vg = {
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
}, {
  n: fg,
  classes: cg
} = re("divider");
function mg(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [e.vertical ? x("v-if", !0) : W(e.$slots, "default", {
      key: 0
    }, () => [e.description ? (p(), $(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      oe(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var pd = ee({
  name: "VarDivider",
  props: vg,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(!1), t = R(() => {
      var {
        vertical: i,
        inset: s
      } = e;
      return !i && s === !0;
    }), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e;
      if (Bi(i) || s)
        return {
          margin: u
        };
      var d = U(i), v = Math.abs(d) + (i + "").replace(d + "", "");
      return {
        margin: u,
        width: "calc(100% - " + be(v) + ")",
        left: d > 0 ? be(v) : be(0)
      };
    }), l = () => {
      var {
        description: i,
        vertical: s
      } = e;
      a.value = (n.default || i != null) && !s;
    };
    return or(() => {
      l();
    }), $t(() => {
      l();
    }), {
      n: fg,
      classes: cg,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
pd.render = mg;
const La = pd;
te(La);
var Yk = La, pg = {
  direction: {
    type: String,
    default: "xy"
  },
  attraction: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
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
  }
};
function io() {
  return io = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, io.apply(this, arguments);
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
function hg(e) {
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
var {
  n: gg,
  classes: yg
} = re("drag");
function bg(e, r) {
  return p(), we(Zr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [A(
    "div",
    De({
      ref: "drag",
      class: e.classes(e.n(), e.n("$--box"), [e.enableTransition, e.n("--transition")]),
      style: {
        "z-index": e.zIndex
      },
      onTouchstart: r[0] || (r[0] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      }),
      onTouchmove: r[1] || (r[1] = function() {
        return e.handleTouchmove && e.handleTouchmove(...arguments);
      }),
      onTouchend: r[2] || (r[2] = function() {
        return e.handleTouchend && e.handleTouchend(...arguments);
      }),
      onTouchcancel: r[3] || (r[3] = function() {
        return e.handleTouchend && e.handleTouchend(...arguments);
      })
    }, e.getAttrs()),
    [W(e.$slots, "default")],
    16
    /* FULL_PROPS */
  )], 8, ["to", "disabled"]);
}
var hd = ee({
  name: "VarDrag",
  inheritAttrs: !1,
  props: pg,
  setup(e, r) {
    var {
      attrs: n
    } = r, a = P(null), t = P(0), o = P(0), l = Re({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), i = P(!1), s = P(!1), u = P(!1), {
      disabled: d
    } = oa(), v = !1, f = 0, m = 0, g = null, b = (V) => {
      if (!e.disabled) {
        g && window.clearTimeout(g);
        var {
          clientX: E,
          clientY: q
        } = V.touches[0];
        O(), f = E, m = q, v = !0, u.value = !1;
      }
    }, y = /* @__PURE__ */ function() {
      var V = hg(function* (E) {
        if (!(!v || e.disabled)) {
          E.preventDefault(), s.value = !1, i.value = !0, u.value = !0;
          var {
            clientX: q,
            clientY: N
          } = E.touches[0], L = q - f, j = N - m;
          f = q, m = N, e.direction.includes("x") && (t.value += L), e.direction.includes("y") && (o.value += j), B();
        }
      });
      return function(q) {
        return V.apply(this, arguments);
      };
    }(), w = () => {
      e.disabled || (v = !1, s.value = !0, I(), g = window.setTimeout(() => {
        u.value = !1;
      }));
    }, O = () => {
      var {
        left: V,
        top: E
      } = T();
      t.value = V, o.value = E;
    }, T = () => {
      var V = Qe(a.value), E = Qe(window), q = V.top - E.top, N = E.bottom - V.bottom, L = V.left - E.left, j = E.right - V.right, {
        width: G,
        height: ne
      } = V, {
        width: M,
        height: D
      } = E;
      return {
        top: q,
        bottom: N,
        left: L,
        right: j,
        width: G,
        height: ne,
        halfWidth: G / 2,
        halfHeight: ne / 2,
        windowWidth: M,
        windowHeight: D
      };
    }, S = () => {
      var V = T(), E = l.left, q = V.windowWidth - l.right - V.width, N = l.top, L = V.windowHeight - l.bottom - V.height;
      return {
        minX: E,
        minY: N,
        // fallback the drag element overflows boundary
        maxX: E < q ? q : E,
        maxY: N < L ? L : N
      };
    }, I = () => {
      if (e.attraction != null) {
        var {
          halfWidth: V,
          halfHeight: E,
          top: q,
          bottom: N,
          left: L,
          right: j
        } = T(), {
          minX: G,
          minY: ne,
          maxX: M,
          maxY: D
        } = S(), X = L + V - l.left, ae = j + V - l.right, H = q + E - l.top, Z = N + E - l.bottom, _ = X <= ae, ve = H <= Z;
        e.attraction.includes("x") && (t.value = _ ? G : M), e.attraction.includes("y") && (o.value = ve ? ne : D);
      }
    }, B = () => {
      var {
        minX: V,
        minY: E,
        maxX: q,
        maxY: N
      } = S();
      t.value = Un(t.value, V, q), o.value = Un(o.value, E, N);
    }, z = () => {
      var {
        top: V = 0,
        bottom: E = 0,
        left: q = 0,
        right: N = 0
      } = e.boundary;
      l.top = Le(V), l.bottom = Le(E), l.left = Le(q), l.right = Le(N);
    }, h = () => {
      var V, E = (V = n.style) != null ? V : {};
      return io({}, n, {
        style: io({}, E, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : E.top,
          left: i.value ? 0 : E.left,
          right: i.value ? "auto" : E.right,
          bottom: i.value ? "auto" : E.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : E.transform
        })
      });
    }, k = () => {
      i.value && (O(), B());
    }, F = () => {
      s.value = !1, i.value = !1, u.value = !1, t.value = 0, o.value = 0, v = !1, f = 0, m = 0;
    };
    return se(() => e.boundary, z), Pt(k), or(() => {
      z(), k();
    }), {
      drag: a,
      x: t,
      y: o,
      enableTransition: s,
      dragging: u,
      teleportDisabled: d,
      n: gg,
      classes: yg,
      getAttrs: h,
      handleTouchstart: b,
      handleTouchmove: y,
      handleTouchend: w,
      resize: k,
      reset: F
    };
  }
});
hd.render = bg;
const Xn = hd;
te(Xn);
var Hk = Xn, wg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Xt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return wg[r];
  });
}
var Wr = "top", mn = "bottom", kn = "right", sn = "left", Co = "auto", So = [Wr, mn, kn, sn], ko = "start", Ra = "end", Cg = "clippingParents", gd = "viewport", ia = "popper", Sg = "reference", Ll = /* @__PURE__ */ So.reduce(function(e, r) {
  return e.concat([r + "-" + ko, r + "-" + Ra]);
}, []), yd = /* @__PURE__ */ [].concat(So, [Co]).reduce(function(e, r) {
  return e.concat([r, r + "-" + ko, r + "-" + Ra]);
}, []), kg = "beforeRead", $g = "read", Tg = "afterRead", Pg = "beforeMain", Og = "main", Vg = "afterMain", Mg = "beforeWrite", Ig = "write", Bg = "afterWrite", hi = [kg, $g, Tg, Pg, Og, Vg, Mg, Ig, Bg];
function Gr(e) {
  return e.split("-")[0];
}
var Eg = {
  start: "end",
  end: "start"
};
function Rl(e) {
  return e.replace(/start|end/g, function(r) {
    return Eg[r];
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
function $n(e) {
  var r = Mr(e).Element;
  return e instanceof r || e instanceof Element;
}
function Sr(e) {
  var r = Mr(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function Ki(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function bn(e) {
  return (($n(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var va = Math.max, Ul = Math.min, Kn = Math.round;
function gi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function bd() {
  return !/^((?!chrome|android).)*safari/i.test(gi());
}
function Zn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && Sr(e) && (t = e.offsetWidth > 0 && Kn(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Kn(a.height) / e.offsetHeight || 1);
  var l = $n(e) ? Mr(e) : window, i = l.visualViewport, s = !bd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Zi(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Ji(e) {
  return Zn(bn(e)).left + Zi(e).scrollLeft;
}
function Ng(e, r) {
  var n = Mr(e), a = bn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = bd();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Ji(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function Dg(e) {
  var r, n = bn(e), a = Zi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = va(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = va(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Ji(e), s = -a.scrollTop;
  return Ar(t || n).direction === "rtl" && (i += va(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Hr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $o(e) {
  return Hr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ki(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    bn(e)
  );
}
function Qi(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function wd(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : Sr(e) && Qi(e) ? e : wd($o(e));
}
function fa(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = wd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], Qi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(fa($o(l)))
  );
}
function Ag(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function Yl(e) {
  return !Sr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function zg(e) {
  var r = /firefox/i.test(gi()), n = /Trident/i.test(gi());
  if (n && Sr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = $o(e);
  for (Ki(t) && (t = t.host); Sr(t) && ["html", "body"].indexOf(Hr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function _i(e) {
  for (var r = Mr(e), n = Yl(e); n && Ag(n) && Ar(n).position === "static"; )
    n = Yl(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && Ar(n).position === "static") ? r : n || zg(e) || r;
}
function Lg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Ki(n)) {
    var a = r;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function yi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Rg(e, r) {
  var n = Zn(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Hl(e, r, n) {
  return r === gd ? yi(Ng(e, n)) : $n(r) ? Rg(r, n) : yi(Dg(bn(e)));
}
function Ug(e) {
  var r = fa($o(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && Sr(e) ? _i(e) : e;
  return $n(a) ? r.filter(function(t) {
    return $n(t) && Lg(t, a) && Hr(t) !== "body";
  }) : [];
}
function Yg(e, r, n, a) {
  var t = r === "clippingParents" ? Ug(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Hl(e, u, a);
    return s.top = va(d.top, s.top), s.right = Ul(d.right, s.right), s.bottom = Ul(d.bottom, s.bottom), s.left = va(d.left, s.left), s;
  }, Hl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ua(e) {
  return e.split("-")[1];
}
function Hg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Gr(a) : null, o = a ? Ua(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case Wr:
      s = {
        x: l,
        y: r.y - n.height
      };
      break;
    case mn:
      s = {
        x: l,
        y: r.y + r.height
      };
      break;
    case kn:
      s = {
        x: r.x + r.width,
        y: i
      };
      break;
    case sn:
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
  var u = t ? Hg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case ko:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case Ra:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function Fg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function jg(e) {
  return Object.assign({}, Fg(), e);
}
function Wg(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function Sd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? Cg : i, u = n.rootBoundary, d = u === void 0 ? gd : u, v = n.elementContext, f = v === void 0 ? ia : v, m = n.altBoundary, g = m === void 0 ? !1 : m, b = n.padding, y = b === void 0 ? 0 : b, w = jg(typeof y != "number" ? y : Wg(y, So)), O = f === ia ? Sg : ia, T = e.rects.popper, S = e.elements[g ? O : f], I = Yg($n(S) ? S : S.contextElement || bn(e.elements.popper), s, d, l), B = Zn(e.elements.reference), z = Cd({
    reference: B,
    element: T,
    strategy: "absolute",
    placement: t
  }), h = yi(Object.assign({}, T, z)), k = f === ia ? h : B, F = {
    top: I.top - k.top + w.top,
    bottom: k.bottom - I.bottom + w.bottom,
    left: I.left - k.left + w.left,
    right: k.right - I.right + w.right
  }, V = e.modifiersData.offset;
  if (f === ia && V) {
    var E = V[t];
    Object.keys(F).forEach(function(q) {
      var N = [kn, mn].indexOf(q) >= 0 ? 1 : -1, L = [Wr, mn].indexOf(q) >= 0 ? "y" : "x";
      F[q] += E[L] * N;
    });
  }
  return F;
}
function Gg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? yd : s, d = Ua(a), v = d ? i ? Ll : Ll.filter(function(g) {
    return Ua(g) === d;
  }) : So, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, b) {
    return g[b] = Sd(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gr(b)], g;
  }, {});
  return Object.keys(m).sort(function(g, b) {
    return m[g] - m[b];
  });
}
function qg(e) {
  if (Gr(e) === Co)
    return [];
  var r = Xt(e);
  return [Rl(e), r, Rl(r)];
}
function Xg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, g = m === void 0 ? !0 : m, b = n.allowedAutoPlacements, y = r.options.placement, w = Gr(y), O = w === y, T = s || (O || !g ? [Xt(y)] : qg(y)), S = [y].concat(T).reduce(function(Z, _) {
      return Z.concat(Gr(_) === Co ? Gg(r, {
        placement: _,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: b
      }) : _);
    }, []), I = r.rects.reference, B = r.rects.popper, z = /* @__PURE__ */ new Map(), h = !0, k = S[0], F = 0; F < S.length; F++) {
      var V = S[F], E = Gr(V), q = Ua(V) === ko, N = [Wr, mn].indexOf(E) >= 0, L = N ? "width" : "height", j = Sd(r, {
        placement: V,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), G = N ? q ? kn : sn : q ? mn : Wr;
      I[L] > B[L] && (G = Xt(G));
      var ne = Xt(G), M = [];
      if (o && M.push(j[E] <= 0), i && M.push(j[G] <= 0, j[ne] <= 0), M.every(function(Z) {
        return Z;
      })) {
        k = V, h = !1;
        break;
      }
      z.set(V, M);
    }
    if (h)
      for (var D = g ? 3 : 1, X = function(_) {
        var ve = S.find(function(Se) {
          var Ie = z.get(Se);
          if (Ie)
            return Ie.slice(0, _).every(function(ie) {
              return ie;
            });
        });
        if (ve)
          return k = ve, "break";
      }, ae = D; ae > 0; ae--) {
        var H = X(ae);
        if (H === "break")
          break;
      }
    r.placement !== k && (r.modifiersData[a]._skip = !0, r.placement = k, r.reset = !0);
  }
}
const Kg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Xg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Zg(e, r, n) {
  var a = Gr(e), t = [sn, Wr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e
  })) : n, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [sn, kn].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Jg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = yd.reduce(function(d, v) {
    return d[v] = Zg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Qg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Jg
};
var _g = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function xg(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Kn(r * t) / t || 0,
    y: Kn(n * t) / t || 0
  };
}
function Fl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, b = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = y.x, b = y.y;
  var w = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), T = sn, S = Wr, I = window;
  if (u) {
    var B = _i(n), z = "clientHeight", h = "clientWidth";
    if (B === Mr(n) && (B = bn(n), Ar(B).position !== "static" && i === "absolute" && (z = "scrollHeight", h = "scrollWidth")), B = B, t === Wr || (t === sn || t === kn) && o === Ra) {
      S = mn;
      var k = v && B === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        B[z]
      );
      b -= k - a.height, b *= s ? 1 : -1;
    }
    if (t === sn || (t === Wr || t === mn) && o === Ra) {
      T = kn;
      var F = v && B === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        B[h]
      );
      m -= F - a.width, m *= s ? 1 : -1;
    }
  }
  var V = Object.assign({
    position: i
  }, u && _g), E = d === !0 ? xg({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = E.x, b = E.y, s) {
    var q;
    return Object.assign({}, V, (q = {}, q[S] = O ? "0" : "", q[T] = w ? "0" : "", q.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", q));
  }
  return Object.assign({}, V, (r = {}, r[S] = O ? b + "px" : "", r[T] = w ? m + "px" : "", r.transform = "", r));
}
function ey(e) {
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
    variation: Ua(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Fl(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Fl(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const kd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ey,
  data: {}
};
function ry(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ny(e) {
  return e === Mr(e) || !Sr(e) ? Zi(e) : ry(e);
}
function ay(e) {
  var r = e.getBoundingClientRect(), n = Kn(r.width) / e.offsetWidth || 1, a = Kn(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function ty(e, r, n) {
  n === void 0 && (n = !1);
  var a = Sr(r), t = Sr(r) && ay(r), o = bn(r), l = Zn(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Qi(o)) && (i = ny(r)), Sr(r) ? (s = Zn(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = Ji(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function oy(e) {
  var r = Zn(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function iy(e) {
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
function ly(e) {
  var r = iy(e);
  return hi.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function sy(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e());
      });
    })), r;
  };
}
function Qr(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return [].concat(n).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var wn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', uy = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', jl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function dy(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), jl).filter(function(n, a, t) {
      return t.indexOf(n) === a;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof r.name != "string" && console.error(Qr(wn, String(r.name), '"name"', '"string"', '"' + String(r.name) + '"'));
          break;
        case "enabled":
          typeof r.enabled != "boolean" && console.error(Qr(wn, r.name, '"enabled"', '"boolean"', '"' + String(r.enabled) + '"'));
          break;
        case "phase":
          hi.indexOf(r.phase) < 0 && console.error(Qr(wn, r.name, '"phase"', "either " + hi.join(", "), '"' + String(r.phase) + '"'));
          break;
        case "fn":
          typeof r.fn != "function" && console.error(Qr(wn, r.name, '"fn"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "effect":
          r.effect != null && typeof r.effect != "function" && console.error(Qr(wn, r.name, '"effect"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "requires":
          r.requires != null && !Array.isArray(r.requires) && console.error(Qr(wn, r.name, '"requires"', '"array"', '"' + String(r.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(r.requiresIfExists) || console.error(Qr(wn, r.name, '"requiresIfExists"', '"array"', '"' + String(r.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + jl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Qr(uy, String(r.name), a, a));
      });
    });
  });
}
function vy(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function fy(e) {
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
var Wl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", cy = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Gl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ql() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function my(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Gl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Gl, o),
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
        b(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: $n(i) ? fa(i) : i.contextElement ? fa(i.contextElement) : [],
          popper: fa(s)
        };
        var T = ly(fy([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = T.filter(function(V) {
          return V.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = vy([].concat(T, d.options.modifiers), function(V) {
            var E = V.name;
            return E;
          });
          if (dy(S), Gr(d.options.placement) === Co) {
            var I = d.orderedModifiers.find(function(V) {
              var E = V.name;
              return E === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var B = Ar(s), z = B.marginTop, h = B.marginRight, k = B.marginBottom, F = B.marginLeft;
          [z, h, k, F].some(function(V) {
            return parseFloat(V);
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
          var w = d.elements, O = w.reference, T = w.popper;
          if (!ql(O, T)) {
            process.env.NODE_ENV !== "production" && console.error(Wl);
            return;
          }
          d.rects = {
            reference: ty(O, _i(T), d.options.strategy === "fixed"),
            popper: oy(T)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(V) {
            return d.modifiersData[V.name] = Object.assign({}, V.data);
          });
          for (var S = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(cy);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var B = d.orderedModifiers[I], z = B.fn, h = B.options, k = h === void 0 ? {} : h, F = B.name;
            typeof z == "function" && (d = z({
              state: d,
              options: k,
              name: F,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sy(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!ql(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Wl), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var w = y.name, O = y.options, T = O === void 0 ? {} : O, S = y.effect;
        if (typeof S == "function") {
          var I = S({
            state: d,
            name: w,
            instance: m,
            options: T
          }), B = function() {
          };
          v.push(I || B);
        }
      });
    }
    function b() {
      v.forEach(function(y) {
        return y();
      }), v = [];
    }
    return m;
  };
}
var Yt = {
  passive: !0
};
function py(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Yt);
  }), i && s.addEventListener("resize", n.update, Yt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Yt);
    }), i && s.removeEventListener("resize", n.update, Yt);
  };
}
const hy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: py,
  data: {}
};
function gy(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = Cd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const yy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: gy,
  data: {}
};
function by(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !Sr(o) || !Hr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function wy(e) {
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
      !Sr(t) || !Hr(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Cy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: by,
  effect: wy,
  requires: ["computeStyles"]
};
var Sy = [hy, yy, kd, Cy], ky = /* @__PURE__ */ my({
  defaultModifiers: Sy
});
function ca() {
  return ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ca.apply(this, arguments);
}
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
function $d(e) {
  var r = P(null), n = P(null), a = P({
    width: 0,
    height: 0
  }), t = Us(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(k, F) {
      F ? (B(), C(e.onOpen)) : C(e.onClose);
    }
  }), {
    zIndex: o
  } = Vt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: k,
      height: F
    } = Bn(r.value);
    a.value = {
      width: Le(k),
      height: Le(F)
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
    e.trigger === "hover" && (s = !0, z());
  }, f = /* @__PURE__ */ function() {
    var k = Kl(function* () {
      e.trigger === "hover" && (s = !1, yield Dr(), !i && h());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), m = () => {
    e.trigger === "hover" && (i = !0);
  }, g = /* @__PURE__ */ function() {
    var k = Kl(function* () {
      e.trigger === "hover" && (i = !1, yield Dr(), !s && h());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), b = () => {
    e.closeOnClickReference && t.value ? h() : z();
  }, y = () => {
    h();
  }, w = (k) => {
    e.trigger === "click" && (y(), C(e.onClickOutside, k));
  }, O = () => {
    B(), C(e.onClosed);
  }, T = () => {
    var {
      offsetX: k,
      offsetY: F,
      placement: V
    } = e;
    u();
    var E = {
      x: Le(k),
      y: Le(F)
    };
    switch (V) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: E.x,
          distance: E.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: E.x,
          distance: E.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: E.x,
          distance: E.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: E.x,
          distance: -E.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: E.x,
          distance: -E.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: E.x,
          distance: -E.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: E.y,
          distance: E.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: E.y,
          distance: -E.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: V,
          skidding: E.y,
          distance: -E.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: V,
          skidding: E.x,
          distance: -E.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: V,
          skidding: E.x,
          distance: E.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: V,
          skidding: E.y,
          distance: E.x
        };
    }
  }, S = () => {
    var {
      placement: k,
      skidding: F,
      distance: V
    } = T(), E = [ca({}, Kg, {
      enabled: t.value
    }), ca({}, Qg, {
      options: {
        offset: [F, V]
      }
    }), ca({}, kd, {
      options: {
        adaptive: !1,
        gpuAcceleration: !1
      },
      enabled: t.value
    }), {
      name: "applyTransformOrigin",
      enabled: t.value,
      phase: "beforeWrite",
      fn(q) {
        var {
          state: N
        } = q;
        N.styles.popper.transformOrigin = d();
      }
    }];
    return {
      placement: k,
      modifiers: E,
      strategy: e.strategy
    };
  }, I = () => e.reference ? r.value.querySelector(e.reference) : r.value, B = () => {
    l.setOptions(S());
  }, z = () => {
    var {
      disabled: k
    } = e;
    k || (t.value = !0, C(e["onUpdate:show"], !0));
  }, h = () => {
    t.value = !1, C(e["onUpdate:show"], !1);
  };
  return Ls(I, "click", w), se(() => [e.offsetX, e.offsetY, e.placement, e.strategy], B), se(() => e.disabled, h), Ct(() => {
    var k;
    l = ky((k = I()) != null ? k : r.value, n.value, S());
  }), St(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: b,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: y,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: g,
    handleClosed: O,
    resize: B,
    open: z,
    close: h
  };
}
function $y(e) {
  return ["click", "hover"].includes(e);
}
function Ty(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Py(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Oy(e) {
  return ["absolute", "fixed"].includes(e);
}
var Vy = {
  type: {
    type: String,
    default: "default",
    validator: Py
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
    validator: $y
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Ty
  },
  strategy: {
    type: String,
    default: "absolute",
    validator: Oy
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
  sameWidth: {
    type: Boolean,
    default: !1
  },
  closeOnClickReference: {
    type: Boolean,
    default: !1
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOutside: Y(),
  "onUpdate:show": Y()
}, {
  n: My,
  classes: Iy
} = re("tooltip");
function By(e, r) {
  return p(), $(
    "div",
    {
      ref: "host",
      class: c(e.classes(e.n(), e.n("$--box"))),
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
    [W(e.$slots, "default"), (p(), we(Zr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [Q(Ue, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: ce(() => [$e(A(
        "div",
        {
          ref: "popover",
          class: c(e.classes(e.n("tooltip"), e.n("$--box"))),
          style: K({
            zIndex: e.zIndex
          }),
          onClick: r[0] || (r[0] = $r(() => {
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
          [W(e.$slots, "content", {}, () => [ke(
            oe(e.content),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Lr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Td = ee({
  name: "VarTooltip",
  props: Vy,
  setup(e) {
    var {
      disabled: r
    } = oa(), {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: g,
      // expose
      close: b,
      // expose
      resize: y
    } = $d(e);
    return {
      toSizeUnit: be,
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      n: My,
      classes: Iy,
      handleHostClick: i,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handleClosed: m,
      resize: y,
      open: g,
      close: b
    };
  }
});
Td.render = By;
const Jn = Td;
te(Jn);
var Fk = Jn;
function Ey(e) {
  return ["click"].includes(e);
}
var Ny = {
  expandTrigger: {
    type: String,
    validator: Ey
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
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
var {
  n: Dy,
  classes: Ay
} = re("ellipsis"), zy = {
  key: 0
};
function Ly(e, r) {
  var n = le("var-tooltip");
  return p(), we(
    n,
    Tt(so(e.tooltip)),
    {
      content: ce(() => [W(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), $(
          "span",
          zy,
          oe(e.tooltip.content),
          1
          /* TEXT */
        )) : W(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ce(() => [A(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: K(e.rootStyles),
          onClick: r[0] || (r[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [W(e.$slots, "default")],
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
var Pd = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: Jn
  },
  props: Ny,
  setup(e) {
    var r = P(!1), n = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : bi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: Dy,
      classes: Ay,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
Pd.render = Ly;
const Ya = Pd;
te(Ya);
var jk = Ya;
function Ry(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function Uy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function Yy(e) {
  return ["click", "hover"].includes(e);
}
var Hy = {
  active: {
    type: Boolean,
    default: !1
  },
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
    default: "primary",
    validator: gu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: Ry
  },
  direction: {
    type: String,
    default: "top",
    validator: Uy
  },
  trigger: {
    type: String,
    default: "click",
    validator: Yy
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
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: Y(),
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:active": Y()
};
function Fy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  classes: Eo,
  n: hr
} = re("fab");
const Ha = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: Hy,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = Us(e, "active"), o = P(null), l = P(null), i = (v, f, m) => {
      var g;
      if (v.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (m === 0) {
          C(e.onClick, t.value, v);
          return;
        }
        (g = l.value) != null && g.dragging || (t.value = f, C(e.onClick, t.value, v), C(t.value ? e.onOpen : e.onClose));
      }
    }, s = (v, f) => {
      e.trigger !== "hover" || e.disabled || f === 0 || (t.value = v, C(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, C(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : $e(Q(vr, {
      "var-fab-cover": !0,
      class: hr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      elevation: e.elevation,
      round: !0
    }, {
      default: () => [Q(Ne, {
        "var-fab-cover": !0,
        class: Eo([t.value, hr("trigger-active-icon"), hr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: hr("--trigger-icon-animation")
      }, null)]
    }), [[Lr, e.show]]);
    return se(() => e.trigger, () => {
      t.value = !1;
    }), se(() => e.disabled, () => {
      t.value = !1;
    }), se(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var v;
      (v = l.value) == null || v.reset();
    }), Ls(o, "click", u), () => {
      var v, f, m = Rs((f = C(n.default)) != null ? f : []), g = Bi(e.drag) ? {} : e.drag;
      return Q(Xn, De({
        ref: l,
        class: Eo(hr("--position-" + e.position), [!e.fixed, hr("--absolute")]),
        style: {
          top: be(e.top),
          bottom: be(e.bottom),
          left: be(e.left),
          right: be(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: g.direction,
        attraction: g.attraction,
        boundary: g.boundary
      }, a), {
        default: () => [Q("div", {
          class: Eo(hr(), hr("--direction-" + e.direction), [e.safeArea, hr("--safe-area")]),
          ref: o,
          onClick: (b) => i(b, !t.value, m.length),
          onMouseleave: () => s(!1, m.length),
          onMouseenter: () => s(!0, m.length)
        }, [Q(Ue, {
          name: hr("--active-transition")
        }, Fy(v = d()) ? v : {
          default: () => [v]
        }), Q(Ue, {
          name: hr("--actions-transition-" + e.direction),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [$e(Q("div", {
            class: hr("actions"),
            onClick: (b) => b.stopPropagation()
          }, [m.map((b) => Q("div", {
            class: hr("action")
          }, [b]))]), [[Lr, e.show && t.value && m.length]])]
        })])]
      });
    };
  }
});
te(Ha);
var Wk = Ha;
function jy(e) {
  return ["start", "end"].includes(e);
}
var Wy = {
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
    validator: jy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
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
function Gy(e) {
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
  n: qy
} = re("form");
function Xy(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Od = ee({
  name: "VarForm",
  props: Wy,
  setup(e) {
    var r = R(() => e.disabled), n = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Zm(), o = (d) => {
      setTimeout(() => {
        var v = un(d), f = v === window ? 0 : cl(v), m = cl(d) - f - Le(e.scrollToErrorOffsetY);
        ga(v, {
          top: m,
          animation: Uo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Gy(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: w
          } = y;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = tf(v, (y) => y === !1, e.scrollToError), m = f > -1;
          if (m) {
            var g, b = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(b);
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
      n: qy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
Od.render = Xy;
const Tn = Od;
Tn.useValidation = Or;
Tn.useForm = Vr;
te(Tn);
var Gk = Tn;
function Ky(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Zy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ky,
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
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: Jy,
  classes: Qy
} = re("image"), _y = ["alt", "title", "lazy-loading", "lazy-error"], xy = ["alt", "title", "src"];
function eb(e, r) {
  var n = ze("lazy"), a = ze("ripple");
  return $e((p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? $e((p(), $("img", {
      key: 0,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: K({
        objectFit: e.fit
      }),
      onLoad: r[0] || (r[0] = function() {
        return e.handleLoad && e.handleLoad(...arguments);
      }),
      onClick: r[1] || (r[1] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, null, 46, _y)), [[n, e.src]]) : x("v-if", !0), !e.lazy && !e.showErrorSlot ? (p(), $("img", {
      key: 1,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      style: K({
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
    }, null, 46, xy)) : x("v-if", !0), e.showErrorSlot ? W(e.$slots, "error", {
      key: 2
    }) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Vd = ee({
  name: "VarImage",
  directives: {
    Lazy: ba,
    Ripple: Xe
  },
  props: Zy,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(!1), t = (i) => {
      a.value = !!n.error, C(e.onError, i);
    }, o = (i) => {
      var s = i.currentTarget;
      if (e.lazy) {
        if (s._lazy.state === "success") {
          C(e.onLoad, i);
          return;
        }
        s._lazy.state === "error" && t(i);
      } else
        C(e.onLoad, i);
    }, l = (i) => {
      C(e.onClick, i);
    };
    return se(() => e.src, () => {
      a.value = !1;
    }), {
      n: Jy,
      classes: Qy,
      showErrorSlot: a,
      toSizeUnit: be,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
Vd.render = eb;
const Fa = Vd;
te(Fa);
var qk = Fa, Md = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function rb() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Md);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Id = {
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
  onChange: Y()
};
function Jl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ql(e) {
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
var nb = 250, ab = 20, {
  n: tb,
  classes: ob
} = re("swipe"), ib = ["onClick"];
function lb(e, r) {
  return p(), $(
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
      [W(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), W(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), $(
        Me,
        null,
        He(e.length, (n, a) => (p(), $("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: K({
            background: e.indicatorColor
          }),
          key: n,
          onClick: (t) => e.to(a)
        }, null, 14, ib))),
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
var Bd = ee({
  name: "VarSwipe",
  props: Id,
  setup(e) {
    var r = P(null), n = P(0), a = R(() => e.vertical), t = P(0), o = P(0), l = P(!1), i = P(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = rb(), {
      popup: v,
      bindPopup: f
    } = Bf(), m = !1, g = !1, b = -1, y, w, O, T, S, I = (H) => s.find((Z) => {
      var {
        index: _
      } = Z;
      return _.value === H;
    }), B = () => {
      e.loop && (o.value >= 0 && I(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && I(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (I(d.value - 1).setTranslate(0), I(0).setTranslate(0)));
    }, z = (H) => {
      var Z = nr(H) ? H : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: _
      } = e;
      return Z <= -1 ? _ ? -1 : 0 : Z >= d.value ? _ ? d.value : d.value - 1 : Z;
    }, h = (H) => {
      var {
        loop: Z
      } = e;
      return H === -1 ? Z ? d.value - 1 : 0 : H === d.value ? Z ? 0 : d.value - 1 : H;
    }, k = (H) => e.loop ? H < 0 ? d.value + H : H >= d.value ? H - d.value : H : Un(H, 0, d.value - 1), F = (H) => {
      var Z = o.value >= n.value, _ = o.value <= -t.value, ve = 0, Se = -(t.value - n.value);
      l.value = !0, (Z || _) && (l.value = !0, o.value = _ ? ve : Se, I(0).setTranslate(0), I(d.value - 1).setTranslate(0)), vo(() => {
        l.value = !1, C(H);
      });
    }, V = () => {
      m || (i.value = k(U(e.initialIndex)), m = !0);
    }, E = () => {
      var {
        autoplay: H
      } = e;
      !H || d.value <= 1 || (q(), b = window.setTimeout(() => {
        M(), E();
      }, U(H)));
    }, q = () => {
      b && clearTimeout(b);
    }, N = (H, Z) => {
      if (H > Z && H > 10)
        return "horizontal";
      if (Z > H && Z > 10)
        return "vertical";
    }, L = (H) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: _
        } = H.touches[0];
        y = Z, w = _, O = performance.now(), g = !0, q(), F(() => {
          l.value = !0;
        });
      }
    }, j = (H) => {
      var {
        touchable: Z,
        vertical: _
      } = e;
      if (!(!g || !Z)) {
        var {
          clientX: ve,
          clientY: Se
        } = H.touches[0], Ie = Math.abs(ve - y), ie = Math.abs(Se - w), fe = N(Ie, ie), pe = _ ? "vertical" : "horizontal";
        if (fe === pe) {
          H.preventDefault();
          var Oe = T !== void 0 ? ve - T : 0, je = S !== void 0 ? Se - S : 0;
          T = ve, S = Se, o.value += _ ? je : Oe, B();
        }
      }
    }, G = () => {
      if (g) {
        var {
          vertical: H,
          onChange: Z
        } = e, _ = H ? S < w : T < y, ve = Math.abs(H ? w - S : y - T), Se = performance.now() - O <= nb && ve >= ab, Ie = Se ? z(_ ? i.value + 1 : i.value - 1) : z();
        g = !1, l.value = !1, T = void 0, S = void 0, o.value = Ie * -n.value;
        var ie = i.value;
        i.value = h(Ie), E(), ie !== i.value && C(Z, i.value);
      }
    }, ne = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((H) => {
        H.setTranslate(0);
      }), E(), setTimeout(() => {
        l.value = !1;
      }));
    }, M = (H) => {
      if (!(d.value <= 1)) {
        V();
        var {
          loop: Z,
          onChange: _
        } = e, ve = i.value;
        i.value = k(ve + 1), (H == null ? void 0 : H.event) !== !1 && C(_, i.value), F(() => {
          if (ve === d.value - 1 && Z) {
            I(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          ve !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, D = (H) => {
      if (!(d.value <= 1)) {
        V();
        var {
          loop: Z,
          onChange: _
        } = e, ve = i.value;
        i.value = k(ve - 1), (H == null ? void 0 : H.event) !== !1 && C(_, i.value), F(() => {
          if (ve === 0 && Z) {
            I(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          ve !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, X = (H, Z) => {
      if (!(d.value <= 1 || H === i.value)) {
        H = H < 0 ? 0 : H, H = H >= d.value ? d.value : H;
        var _ = H > i.value ? M : D, ve = Math.abs(H - i.value);
        Array.from({
          length: ve
        }).forEach((Se, Ie) => {
          _({
            event: Ie === ve - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, ae = {
      size: n,
      vertical: a
    };
    return u(ae), C(f, null), se(() => d.value, /* @__PURE__ */ Ql(function* () {
      yield Dr(), V(), ne();
    })), v && se(() => v.show.value, /* @__PURE__ */ function() {
      var H = Ql(function* (Z) {
        Z ? (yield Dr(), ne()) : q();
      });
      return function(Z) {
        return H.apply(this, arguments);
      };
    }()), pn(ne), fo(q), Pt(ne), {
      n: tb,
      classes: ob,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: L,
      handleTouchmove: j,
      handleTouchend: G,
      next: M,
      prev: D,
      to: X,
      resize: ne,
      toNumber: U
    };
  }
});
Bd.render = lb;
const Pn = Bd;
te(Pn);
var Xk = Pn;
function sb() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = ir(Md);
  return e || Tr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: ub
} = re("swipe-item");
function db(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n()),
      style: K({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ed = ee({
  name: "VarSwipeItem",
  setup() {
    var e = P(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = sb(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: ub,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Ed.render = db;
const On = Ed;
te(On);
var Kk = On;
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
var vb = wi({
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
  /** @deprecated Use initialIndex to instead. */
  current: {
    type: String
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  "onUpdate:show": Y(),
  onLongPress: Y()
}, xe(Id, ["loop", "indicator", "onChange"]), xe(Ot, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: _l,
  classes: fb
} = re("image-preview"), No = 12, xl = 200, cb = 350, es = 200, mb = 500, pb = ["onTouchstart"], hb = ["src", "alt"];
function gb(e, r) {
  var n = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
  return p(), we(o, {
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
    default: ce(() => [Q(a, De({
      ref: "swipeRef",
      class: e.n("swipe"),
      "var-image-preview-cover": "",
      touchable: e.canSwipe,
      indicator: e.indicator && e.images.length > 1,
      "initial-index": e.initialIndex,
      loop: e.loop,
      onChange: e.onChange
    }, e.$attrs), {
      default: ce(() => [(p(!0), $(
        Me,
        null,
        He(e.images, (l, i) => (p(), we(n, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: l
        }, {
          default: ce(() => [A("div", {
            class: c(e.n("zoom-container")),
            style: K({
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
          }, [A("img", {
            class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: l,
            alt: l
          }, null, 10, hb)], 46, pb)]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class"]))),
        128
        /* KEYED_FRAGMENT */
      ))]),
      indicator: ce((l) => {
        var {
          index: i,
          length: s
        } = l;
        return [W(e.$slots, "indicator", {
          index: i,
          length: s
        }, () => [e.indicator && e.images.length > 1 ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("indicators"))
          },
          oe(i + 1) + " / " + oe(s),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)])];
      }),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), W(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), we(t, {
      key: 0,
      class: c(e.n("close-icon")),
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: e.close
    }, null, 8, ["class", "onClick"])) : x("v-if", !0)]), A(
      "div",
      {
        class: c(e.n("extra"))
      },
      [W(e.$slots, "extra")],
      2
      /* CLASS */
    )]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
var Nd = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: Pn,
    VarSwipeItem: On,
    VarPopup: Rr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: vb,
  setup(e) {
    var r = P(!1), n = R(() => {
      var {
        images: M,
        current: D,
        initialIndex: X
      } = e;
      if (X != null)
        return U(X);
      var ae = M.findIndex((H) => H === D);
      return ae >= 0 ? ae : 0;
    }), a = P(1), t = P(0), o = P(0), l = P(void 0), i = P(void 0), s = P(!0), u = P(null), d = null, v = null, f = null, m = null, g = !1, b = R(() => {
      var {
        imagePreventDefault: M,
        show: D
      } = e;
      return D && M;
    }), y = (M, D) => {
      var {
        clientX: X,
        clientY: ae
      } = M, {
        clientX: H,
        clientY: Z
      } = D;
      return Math.abs(Math.sqrt(Math.pow(H - X, 2) + Math.pow(Z - ae, 2)));
    }, w = (M, D) => ({
      clientX: M.clientX,
      clientY: M.clientY,
      timestamp: performance.now(),
      target: D
    }), O = () => {
      a.value = U(e.zoom), s.value = !1, v = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, es);
    }, T = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, v = null, l.value = void 0, i.value = void 0;
    }, S = (M) => v ? y(v, M) <= No && M.timestamp - v.timestamp <= xl && v.target === M.target : !1, I = (M) => !M || !d || !v ? !1 : y(d, v) <= No && performance.now() - v.timestamp < cb && (M === d.target || M.parentNode === d.target), B = () => {
      window.clearTimeout(m), g = !1, d = null;
    }, z = (M) => {
      if (window.clearTimeout(m), g) {
        g = !1;
        return;
      }
      var D = I(M.target);
      f = window.setTimeout(() => {
        D && N(), d = null;
      }, xl);
    }, h = (M, D) => {
      window.clearTimeout(f), window.clearTimeout(m);
      var X = w(M.touches[0], M.currentTarget);
      if (d = X, m = window.setTimeout(() => {
        var {
          onLongPress: ae
        } = e;
        g = !0, C(ae, D);
      }, mb), S(X)) {
        a.value > 1 ? T() : O();
        return;
      }
      v = X;
    }, k = (M) => {
      var {
        offsetWidth: D,
        offsetHeight: X
      } = M, {
        naturalWidth: ae,
        naturalHeight: H
      } = M.querySelector("." + _l("image"));
      return {
        width: D,
        height: X,
        imageRadio: H / ae,
        rootRadio: X / D,
        zoom: U(e.zoom)
      };
    }, F = (M) => {
      var {
        zoom: D,
        imageRadio: X,
        rootRadio: ae,
        width: H,
        height: Z
      } = k(M);
      if (!X)
        return 0;
      var _ = X > ae ? Z / X : H;
      return Math.max(0, (D * _ - H) / 2) / D;
    }, V = (M) => {
      var {
        zoom: D,
        imageRadio: X,
        rootRadio: ae,
        width: H,
        height: Z
      } = k(M);
      if (!X)
        return 0;
      var _ = X > ae ? Z : H * X;
      return Math.max(0, (D * _ - Z) / 2) / D;
    }, E = (M, D, X) => M + D >= X ? X : M + D <= -X ? -X : M + D, q = (M) => {
      if (v) {
        var D = M.currentTarget, X = w(M.touches[0], D);
        if (y(X, v) > No && window.clearTimeout(m), a.value > 1) {
          var ae = X.clientX - v.clientX, H = X.clientY - v.clientY, Z = F(D), _ = V(D);
          t.value = E(t.value, ae, Z), o.value = E(o.value, H, _);
        }
        v = X;
      }
    }, N = () => {
      if (a.value > 1) {
        T(), setTimeout(() => C(e["onUpdate:show"], !1), es);
        return;
      }
      C(e["onUpdate:show"], !1);
    }, L = (M) => {
      var D;
      (D = u.value) == null || D.prev(M);
    }, j = (M) => {
      var D;
      (D = u.value) == null || D.next(M);
    }, G = (M, D) => {
      var X;
      (X = u.value) == null || X.to(M, D);
    }, ne = (M) => {
      e.imagePreventDefault && e.show && M.preventDefault();
    };
    return dn(() => document, "contextmenu", ne), se(() => e.show, (M) => {
      r.value = M;
    }, {
      immediate: !0
    }), {
      n: _l,
      classes: fb,
      swipeRef: u,
      isPreventDefault: b,
      initialIndex: n,
      popupShow: r,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: h,
      handleTouchmove: q,
      handleTouchend: z,
      handleTouchcancel: B,
      close: N,
      prev: L,
      next: j,
      to: G
    };
  }
});
Nd.render = gb;
const Et = Nd;
function ma() {
  return ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ma.apply(this, arguments);
}
var an, pa = {};
function yb(e) {
  return e === void 0 && (e = {}), Fe(e) ? ma({}, pa, {
    images: [e]
  }) : Ve(e) ? ma({}, pa, {
    images: e
  }) : ma({}, pa, e);
}
function zr(e) {
  if (aa()) {
    zr.close();
    var r = yb(e), n = Re(r);
    n.teleport = "body", an = n;
    var {
      unmountInstance: a
    } = ta(Et, n, {
      onClose: () => C(n.onClose),
      onClosed: () => {
        C(n.onClosed), a(), an === n && (an = null);
      },
      onRouteChange: () => {
        a(), an === n && (an = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }
}
zr.close = () => {
  if (an != null) {
    var e = an;
    an = null, Ae().then(() => {
      e.show = !1;
    });
  }
};
zr.setDefaultOptions = (e) => {
  pa = e;
};
zr.resetDefaultOptions = () => {
  pa = {};
};
zr.Component = Et;
te(Et);
te(Et, zr);
var Zk = Et, Kt = {
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
  onScroll: Y()
};
function rs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ns(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        rs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        rs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: bb,
  classes: wb
} = re("sticky");
function Cb(e, r) {
  return p(), $(
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
      [W(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var Dd = ee({
  name: "VarSticky",
  props: Kt,
  setup(e) {
    var r = P(null), n = P(null), a = P(!1), t = P("0px"), o = P("0px"), l = P("auto"), i = P("auto"), s = P("auto"), u = P("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => Le(e.offsetTop)), m, g = () => {
      var {
        cssMode: T,
        disabled: S
      } = e;
      if (!S) {
        var I = 0;
        if (m !== window) {
          var {
            top: B
          } = Qe(m);
          I = B;
        }
        var z = n.value, h = r.value, {
          top: k,
          left: F
        } = Qe(h), V = k - I;
        return V <= f.value ? (T || (l.value = h.offsetWidth + "px", i.value = h.offsetHeight + "px", t.value = I + f.value + "px", o.value = F + "px", s.value = z.offsetWidth + "px", u.value = z.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: V,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var T = g();
        T && C(e.onScroll, T.offsetTop, T.isFixed);
      }
    }, y = /* @__PURE__ */ function() {
      var T = ns(function* () {
        a.value = !1, yield gf(), g();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var T = ns(function* () {
        yield Dr(), m = un(r.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return se(() => e.disabled, y), or(w), fo(O), Pt(y), dn(() => window, "scroll", b), {
      n: bb,
      classes: wb,
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
Dd.render = Cb;
const Vn = Dd;
te(Vn);
var Jk = Vn, Ad = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Sb() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = lr(Ad);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function kb() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Ad);
  return n || Tr("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var $b = {
  index: {
    type: [Number, String]
  }
}, {
  n: Tb,
  classes: Pb
} = re("index-anchor");
function Ob(e, r) {
  return p(), we(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: ce(() => [A(
      "div",
      De({
        class: e.n()
      }, e.$attrs),
      [W(e.$slots, "default", {}, () => [ke(
        oe(e.name),
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
var zd = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Vn
  },
  inheritAttrs: !1,
  props: $b,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = kb(), t = P(0), o = P(!1), l = R(() => e.index), i = P(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, g = (y) => {
      o.value = y;
    }, b = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: g
    };
    return a(b), {
      n: Tb,
      classes: Pb,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Ue
    };
  }
});
zd.render = Ob;
const ja = zd;
te(ja);
var Qk = ja, Vb = {
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
  onClick: Y(),
  onChange: Y()
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
function Ht(e) {
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
  n: Mb,
  classes: Ib
} = re("index-bar"), Bb = ["onClick"];
function Eb(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [W(e.$slots, "default"), A(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), $(
        Me,
        null,
        He(e.anchorNameList, (n) => (p(), $("li", {
          key: n,
          class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
          style: K({
            color: e.active === n && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: n,
            manualCall: !0
          })
        }, oe(n), 15, Bb))),
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
var Ld = ee({
  name: "VarIndexBar",
  props: Vb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = Sb(), t = P(""), o = P(null), l = P([]), i = P(), s = R(() => e.sticky), u = R(() => e.stickyCssMode || e.cssMode), d = R(() => Le(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var b = (z, h) => {
      var k = Ei(z) ? z.name.value : z;
      k === i.value || k === void 0 || (i.value = k, (h == null ? void 0 : h.event) !== !1 && C(e.onChange, k));
    }, y = () => {
      if (Ni(f))
        return 0;
      var {
        top: z
      } = Qe(f), {
        scrollTop: h
      } = f, {
        top: k
      } = Qe(o.value);
      return h - z + k;
    }, w = () => {
      var z = ha(f), h = f === window ? document.body.scrollHeight : f.scrollHeight, k = y();
      n.forEach((F, V) => {
        var E = F.ownTop.value, q = z - E + d.value - k, N = V === n.length - 1 ? h : n[V + 1].ownTop.value - F.ownTop.value;
        F.setDisabled(!0), q >= 0 && q < N && t.value === "" && (F.setDisabled(!1), b(F));
      });
    }, O = /* @__PURE__ */ function() {
      var z = Ht(function* (h) {
        var {
          anchorName: k,
          manualCall: F = !1,
          options: V
        } = h;
        if (F && C(e.onClick, k), !(k === i.value && !m)) {
          var E = n.find((j) => {
            var {
              name: G
            } = j;
            return k === G.value;
          });
          if (E) {
            var q = y(), N = E.ownTop.value - d.value + q, L = Ai(f);
            t.value = k, b(k, V), yield ga(f, {
              left: L,
              top: N,
              animation: Vs,
              duration: U(e.duration)
            }), vo(() => {
              t.value = "";
            });
          }
        }
      });
      return function(k) {
        return z.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var z = Ht(function* () {
        yield Dr(), f = un(o.value);
      });
      return function() {
        return z.apply(this, arguments);
      };
    }(), S = () => {
      f.addEventListener("scroll", w);
    }, I = () => {
      f.removeEventListener("scroll", w);
    }, B = (z, h) => {
      br(() => O({
        anchorName: z,
        options: h
      }));
    };
    return se(() => r.value, /* @__PURE__ */ Ht(function* () {
      yield Dr(), n.forEach((z) => {
        var {
          name: h,
          setOwnTop: k
        } = z;
        h.value && l.value.push(h.value), k();
      });
    })), or(/* @__PURE__ */ Ht(function* () {
      yield T(), S();
    })), lo(I), xn(() => {
      m = !0, I();
    }), pn(() => {
      !m || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: Mb,
      classes: Ib,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: U,
      scrollTo: B,
      anchorClick: O
    };
  }
});
Ld.render = Eb;
const Wa = Ld;
te(Wa);
var _k = Wa;
function Nb(e) {
  return ["small", "normal"].includes(e);
}
function Db(e) {
  return ["outlined", "standard"].includes(e);
}
var xi = {
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
    validator: Nb
  },
  variant: {
    type: String,
    default: "standard",
    validator: Db
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
  onClick: Y(),
  onClear: Y()
}, {
  n: Do,
  classes: Ab
} = re("field-decorator"), zb = ["for"];
function Lb(e, r) {
  var n = le("var-icon");
  return p(), $(
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
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      ), e.placeholder && e.hint ? (p(), $("label", {
        key: 0,
        class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
        style: K({
          color: e.color
        }),
        for: e.id
      }, [A(
        "span",
        null,
        oe(e.placeholder),
        1
        /* TEXT */
      )], 14, zb)) : x("v-if", !0), A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), we(n, {
          key: 0,
          class: c(e.n("clear-icon")),
          "var-field-decorator-cover": "",
          name: "close-circle",
          onClick: e.handleClear
        }, null, 8, ["class", "onClick"])) : x("v-if", !0), W(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), $(
      Me,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), $(
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
          [e.placeholder && e.hint ? (p(), we(Zr, {
            key: 0,
            to: "body"
          }, [A(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            oe(e.placeholder),
            3
            /* TEXT, CLASS */
          )])) : x("v-if", !0)],
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
var Rd = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ne
  },
  props: xi,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(null), t = P(""), o = R(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = R(() => e.hint && (!Fr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Fr(f) || m))
        return Do("--placeholder-hidden");
      if (l.value)
        return Do("--placeholder-hint");
    }, s = () => {
      var {
        size: v,
        hint: f,
        variant: m,
        placeholder: g
      } = e;
      if (!g || !f || m !== "outlined") {
        t.value = "";
        return;
      }
      var b = Bn(a.value), y = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + b.width + " * 0.75 + " + y + " * 2)";
    }, u = (v) => {
      C(e.onClear, v);
    }, d = (v) => {
      C(e.onClick, v);
    };
    return Pt(s), or(s), $t(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Do,
      classes: Ab,
      isEmpty: Fr,
      handleClear: u,
      handleClick: d
    };
  }
});
Rd.render = Lb;
const Ud = Rd;
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
function Rb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var Ub = Ci({
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
    validator: Rb
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
  onFocus: Y(),
  onBlur: Y(),
  onInput: Y(),
  onChange: Y(),
  onClear: Y(),
  "onUpdate:modelValue": Y()
}, xe(xi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Yb,
  classes: Hb
} = re("input"), Fb = ["placeholder", "enterkeyhint"], jb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Wb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Gb(e, r) {
  var n = le("var-field-decorator"), a = le("var-form-details");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Q(
      n,
      Tt(so({
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
      Zt({
        "append-icon": ce(() => [W(e.$slots, "append-icon")]),
        default: ce(() => [e.normalizedType === "password" ? (p(), $("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: K({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, Fb)) : x("v-if", !0), e.textarea ? (p(), $("textarea", {
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
        }, `
      `, 46, jb)) : (p(), $("input", {
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
        }, null, 46, Wb))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: ce(() => [W(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), Q(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: r[14] || (r[14] = $r(() => {
      }, ["stop"]))
    }, Zt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ce(() => [W(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"])],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Yd = ee({
  name: "VarInput",
  components: {
    VarFormDetails: ar,
    VarFieldDecorator: Ud
  },
  props: Ub,
  setup(e) {
    var r = P("var-input-" + ea().uid), n = P(null), a = P(!1), t = P(!1), o = R(() => e.type === "number" ? "text" : e.type), l = R(() => {
      var {
        maxlength: M,
        modelValue: D
      } = e;
      return M ? Fr(D) ? "0 / " + M : String(D).length + "/" + M : "";
    }), i = R(() => e.disabled || e.readonly ? "" : "text"), s = R(() => {
      var {
        hint: M,
        blurColor: D,
        focusColor: X
      } = e;
      if (!M)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? X || "var(--field-decorator-focus-color)" : D || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Or(), b = (M) => {
      Ae(() => {
        var {
          validateTrigger: D,
          rules: X,
          modelValue: ae
        } = e;
        f(D, M, X, ae);
      });
    }, y = (M) => {
      a.value = !0, C(e.onFocus, M), b("onFocus");
    }, w = (M) => {
      a.value = !1, C(e.onBlur, M), b("onBlur");
    }, O = (M) => {
      var D = M.target, {
        value: X
      } = D;
      return e.type === "number" && (X = k(X)), V(F(X));
    }, T = () => {
      t.value = !0;
    }, S = (M) => {
      t.value && (t.value = !1, M.target.dispatchEvent(new Event("input")));
    }, I = (M) => {
      if (!t.value) {
        var D = O(M);
        C(e["onUpdate:modelValue"], D), C(e.onInput, D, M), b("onInput");
      }
    }, B = (M) => {
      var D = O(M);
      C(e.onChange, D, M), b("onChange");
    }, z = () => {
      var {
        disabled: M,
        readonly: D,
        clearable: X,
        onClear: ae
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || M || D || !X || (C(e["onUpdate:modelValue"], ""), C(ae, ""), b("onClear"));
    }, h = (M) => {
      var {
        disabled: D,
        onClick: X
      } = e;
      d != null && d.disabled.value || D || (C(X, M), b("onClick"));
    }, k = (M) => {
      var D = M.indexOf("-"), X = M.indexOf(".");
      return D > -1 && (M = D === 0 ? "-" + M.replace(/-/g, "") : M.replace(/-/g, "")), X > -1 && (M = M.slice(0, X + 1) + M.slice(X).replace(/\./g, "")), M.replace(/[^-0-9.]/g, "");
    }, F = (M) => e.modelModifiers.trim ? M.trim() : M, V = (M) => e.maxlength ? M.slice(0, U(e.maxlength)) : M, E = (M) => {
      var {
        disabled: D,
        readonly: X
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || D || X || M.stopPropagation();
    };
    function q(M) {
      var {
        disabled: D
      } = e;
      d != null && d.disabled.value || D || M.target === n.value || (j(), M.preventDefault());
    }
    var N = () => {
      C(e["onUpdate:modelValue"], ""), g();
    }, L = () => m(e.rules, e.modelValue), j = () => {
      var M;
      (M = n.value) == null || M.focus();
    }, G = () => {
      n.value.blur();
    }, ne = {
      reset: N,
      validate: L,
      resetValidation: g
    };
    return C(u, ne), or(() => {
      e.autofocus && j();
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
      n: Yb,
      classes: Hb,
      isEmpty: Fr,
      handleFocus: y,
      handleBlur: w,
      handleInput: I,
      handleChange: B,
      handleClear: z,
      handleClick: h,
      handleTouchstart: E,
      handleCompositionStart: T,
      handleCompositionEnd: S,
      handleMousedown: q,
      validate: L,
      resetValidation: g,
      reset: N,
      focus: j,
      blur: G
    };
  }
});
Yd.render = Gb;
const Qn = Yd;
te(Qn);
var xk = Qn;
function qb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Xb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Kb = {
  type: {
    type: String,
    default: "default",
    validator: qb
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
    validator: Xb
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
  onClick: Y()
}, {
  n: Zb,
  classes: Jb
} = re("link");
function Qb(e, r) {
  return p(), we(ra(e.tag), De(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: ce(() => [W(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
var Hd = ee({
  name: "VarLink",
  props: Kb,
  setup(e) {
    var r = R(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), n = R(() => {
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
      o || C(l, t);
    };
    return {
      n: Zb,
      classes: Jb,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: be
    };
  }
});
Hd.render = Qb;
const Ga = Hd;
te(Ga);
var e$ = Ga, _b = {
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
  onLoad: Y(),
  "onUpdate:loading": Y(),
  "onUpdate:error": Y()
}, Fd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function xb() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Fd);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var jd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function e0() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Fd);
  return r || Tr("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function r0() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(jd);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function n0() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(jd);
  return {
    index: n,
    tabItem: e,
    bindTabItem: r
  };
}
function ts(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function a0(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ts(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ts(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: t0,
  classes: o0
} = re("list");
function i0(e, r) {
  var n = le("var-loading"), a = ze("ripple");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [W(e.$slots, "default"), e.loading ? W(e.$slots, "loading", {
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
        oe(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Q(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? W(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      oe(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? W(e.$slots, "error", {
      key: 2
    }, () => [$e((p(), $(
      "div",
      {
        class: c(e.n("error")),
        onClick: r[0] || (r[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [ke(
        oe(e.dt(e.errorText, e.pack.listErrorText)),
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
var Wd = ee({
  name: "VarList",
  directives: {
    Ripple: Xe
  },
  components: {
    VarLoading: vn
  },
  props: _b,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = n0(), a = P(null), t = P(null), o, l = () => {
      C(e["onUpdate:error"], !1), C(e["onUpdate:loading"], !0), C(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = Qe(o), {
        bottom: v
      } = Qe(t.value);
      return Math.floor(v) - Le(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = a0(function* () {
        yield Ae(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return C(n, {}), r && se(() => r.current.value, u), se(() => [e.loading, e.error, e.finished], u), or(() => {
      o = un(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), fo(s), {
      pack: _e,
      listEl: a,
      detectorEl: t,
      dt: uo,
      isNumber: nr,
      load: l,
      check: u,
      n: t0,
      classes: o0
    };
  }
});
Wd.render = i0;
const qa = Wd;
te(qa);
var r$ = qa, l0 = {
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
  classes: s0,
  n: os
} = re("loading-bar");
const u0 = ee({
  name: "VarLoadingBar",
  props: l0,
  setup(e) {
    return () => Q("div", {
      class: s0(os(), [e.error, os("--error")]),
      style: {
        zIndex: yr.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: be(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: be(e.top)
      }
    }, null);
  }
});
var Gd, qd, To, Xd, is, Kd = {}, d0 = {
  value: 0,
  opacity: 0,
  error: !1
}, er = Re(d0), v0 = (e) => {
  Object.assign(er, e);
}, f0 = (e) => {
  Object.assign(er, e), Kd = e;
}, c0 = () => {
  Object.keys(Kd).forEach((e) => {
    er[e] !== void 0 && (er[e] = void 0);
  });
}, Zd = () => {
  is || (is = !0, ta(u0, er));
}, el = () => {
  Gd = window.setTimeout(() => {
    if (!(er.value >= 95)) {
      var e = Math.random();
      er.value < 70 && (e = Math.round(5 * Math.random())), er.value += e, el();
    }
  }, 200);
}, rl = () => {
  window.clearTimeout(qd), window.clearTimeout(Gd), window.clearTimeout(To), window.clearTimeout(Xd);
}, m0 = () => {
  rl(), er.error = !1, er.value = 0, Zd(), To = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), el();
}, Jd = () => {
  rl(), er.value = 100, To = window.setTimeout(() => {
    er.opacity = 0, qd = window.setTimeout(() => {
      er.error = !1;
    }, 250);
  }, 300);
}, p0 = () => {
  rl(), er.error = !0, er.value === 100 && (er.value = 0), Zd(), To = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), el(), Xd = window.setTimeout(Jd, 300);
}, Qd = {
  start: m0,
  finish: Jd,
  error: p0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: v0,
  setDefaultOptions: f0,
  resetDefaultOptions: c0
}, n$ = Qd;
const Si = Qd;
function h0(e) {
  return ["click", "hover"].includes(e);
}
function g0(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
function y0(e) {
  return ["absolute", "fixed"].includes(e);
}
var b0 = {
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
    validator: h0
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: g0
  },
  strategy: {
    type: String,
    default: "absolute",
    validator: y0
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
  popoverClass: {
    type: String
  },
  closeOnClickReference: {
    type: Boolean,
    default: !1
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOutside: Y(),
  "onUpdate:show": Y()
}, {
  n: w0,
  classes: C0
} = re("menu");
function S0(e, r) {
  return p(), $(
    "div",
    {
      ref: "host",
      class: c(e.classes(e.n(), e.n("$--box"))),
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
    [W(e.$slots, "default"), (p(), we(Zr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [Q(Ue, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: ce(() => [$e(A(
        "div",
        {
          ref: "popover",
          style: K({
            zIndex: e.zIndex,
            width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
          }),
          class: c(e.classes(e.n("menu"), e.n("$--box"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
          onClick: r[0] || (r[0] = $r(() => {
          }, ["stop"])),
          onMouseenter: r[1] || (r[1] = function() {
            return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
          }),
          onMouseleave: r[2] || (r[2] = function() {
            return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
          })
        },
        [W(e.$slots, "menu")],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Lr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var _d = ee({
  name: "VarMenu",
  props: b0,
  setup(e) {
    var {
      disabled: r
    } = oa(), {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      // expose
      open: g,
      // expose
      close: b,
      // expose
      resize: y
    } = $d(e);
    return {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      formatElevation: pr,
      toSizeUnit: be,
      n: w0,
      classes: C0,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      resize: y,
      open: g,
      close: b
    };
  }
});
_d.render = S0;
const Mn = _d;
te(Mn);
var a$ = Mn, xd = Symbol("SELECT_BIND_OPTION_KEY");
function k0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = lr(xd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function $0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = ir(xd);
  return n || Tr("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var T0 = {
  label: {},
  value: {}
}, {
  n: P0,
  classes: O0
} = re("option");
function V0(e, r) {
  var n = le("var-checkbox"), a = ze("ripple");
  return $e((p(), $(
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
    ), e.multiple ? (p(), we(n, {
      key: 0,
      ref: "checkbox",
      "checked-color": e.focusColor,
      modelValue: e.optionSelected,
      "onUpdate:modelValue": r[0] || (r[0] = (t) => e.optionSelected = t),
      onClick: r[1] || (r[1] = $r(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : x("v-if", !0), A(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [W(e.$slots, "default", {}, () => [ke(
        oe(e.label),
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
var ev = ee({
  name: "VarOption",
  directives: {
    Ripple: Xe
  },
  components: {
    VarCheckbox: jn
  },
  props: T0,
  setup(e) {
    var r = P(!1), n = R(() => r.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = $0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      i.value && (r.value = !r.value), u(g);
    }, f = () => u(g), m = (b) => {
      r.value = b;
    }, g = {
      label: a,
      value: t,
      selected: n,
      sync: m
    };
    return se([() => e.label, () => e.value], d), l(g), {
      n: P0,
      classes: O0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
ev.render = V0;
const Xa = ev;
te(Xa);
var t$ = Xa, M0 = {
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
  onClick: Y(),
  "onUpdate:show": Y()
};
function I0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: ls
} = re("overlay");
const Ka = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: M0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Vt(() => e.show, 1), {
      disabled: o
    } = oa(), l = () => {
      C(e.onClick), C(e["onUpdate:show"], !1);
    };
    co(() => e.show, () => e.lockScroll);
    var i = () => Q("div", De({
      class: ls(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [C(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return Q(Ue, {
        name: ls("--fade")
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
        return Q(Zr, {
          to: u,
          disabled: o.value
        }, I0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
te(Ka);
var o$ = Ka, B0 = {
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
  onChange: Y(),
  "onUpdate:current": Y(),
  "onUpdate:size": Y()
}, {
  n: E0,
  classes: N0
} = re("pagination"), D0 = ["item-mode", "onClick"];
function A0(e, r) {
  var n = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), l = ze("ripple");
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
      [W(e.$slots, "prev", {}, () => [Q(n, {
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
      [Q(a, {
        "var-pagination-cover": "",
        hint: !1,
        disabled: e.disabled,
        modelValue: e.simpleCurrentValue,
        "onUpdate:modelValue": r[1] || (r[1] = (i) => e.simpleCurrentValue = i),
        onBlur: r[2] || (r[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
        onKeydown: r[3] || (r[3] = il((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), A("span", null, [ke(
        " / " + oe(e.pageCount) + " ",
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
    )) : (p(!0), $(
      Me,
      {
        key: 1
      },
      He(e.pageList, (i, s) => $e((p(), $("li", {
        key: s,
        "item-mode": e.getMode(i, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(i, s)
      }, [ke(
        oe(i),
        1
        /* TEXT */
      )], 10, D0)), [[l, {
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
      [W(e.$slots, "next", {}, () => [Q(n, {
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
      [Q(o, {
        placement: "cover-top",
        disabled: e.disabled,
        show: e.menuVisible,
        "onUpdate:show": r[6] || (r[6] = (i) => e.menuVisible = i)
      }, {
        menu: ce(() => [(p(!0), $(
          Me,
          null,
          He(e.sizeOption, (i, s) => $e((p(), we(t, {
            class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(i)
          }, {
            default: ce(() => [ke(
              oe(i) + oe(e.pack.paginationItem) + " / " + oe(e.pack.paginationPage),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["class", "onClick"])), [[l]])),
          128
          /* KEYED_FRAGMENT */
        ))]),
        default: ce(() => [A(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: r[5] || (r[5] = $r(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [A(
            "span",
            null,
            oe(e.size) + oe(e.pack.paginationItem) + " / " + oe(e.pack.paginationPage),
            1
            /* TEXT */
          ), Q(n, {
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (p(), $(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [ke(
        oe(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Q(a, {
        modelValue: e.quickJumperValue,
        "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
        disabled: e.disabled,
        "var-pagination-cover": "",
        onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
        onKeydown: r[9] || (r[9] = il((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
      }, null, 8, ["modelValue", "disabled"])],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (p(), $(
      "li",
      {
        key: 4,
        class: c(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
      },
      oe(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var rv = ee({
  name: "VarPagination",
  components: {
    VarMenu: Mn,
    VarIcon: Ne,
    VarCell: Fn,
    VarInput: Qn
  },
  directives: {
    Ripple: Xe
  },
  props: B0,
  setup(e) {
    var r = P(!1), n = P(""), a = P("1"), t = P(!1), o = P(!1), l = P(U(e.current) || 1), i = P(U(e.size) || 10), s = P([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(U(e.total) / U(i.value))), v = R(() => {
      var S = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, U(e.total));
      return [S, I];
    }), f = R(() => e.showTotal ? e.showTotal(U(e.total), v.value) : ""), m = (S, I) => nr(S) ? !1 : I === 1 ? t.value : o.value, g = (S, I) => nr(S) ? "basic" : I === 1 ? "head" : "tail", b = (S, I) => {
      if (!(S === l.value || e.disabled)) {
        if (S === "...") {
          l.value = I === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (S === "prev") {
          l.value = O(l.value - 1);
          return;
        }
        if (S === "next") {
          l.value = O(l.value + 1);
          return;
        }
        nr(S) && (l.value = S);
      }
    }, y = () => {
      e.disabled || (r.value = !0);
    }, w = (S) => {
      i.value = S, r.value = !1;
      var I = O(l.value);
      a.value = String(I), l.value = I;
    }, O = (S) => S > d.value ? d.value : S < 1 ? 1 : S, T = (S, I, B) => {
      B.target.blur();
      var z = O(U(I));
      a.value = String(z), l.value = z, S === "quick" && (n.value = "");
    };
    return se([() => e.current, () => e.size], (S) => {
      var [I, B] = S;
      l.value = U(I) || 1, i.value = U(B || 10);
    }), se([l, i, d], (S, I) => {
      var [B, z, h] = S, [k, F] = I, V = [], {
        maxPagerCount: E,
        total: q,
        onChange: N
      } = e, L = Math.ceil(U(q) / U(F)), j = h - (E - u.value) - 1;
      if (a.value = "" + B, h - 2 > E) {
        if (k === void 0 || h !== L)
          for (var G = 2; G < E + 2; G++)
            V.push(G);
        if (B <= E && B < j) {
          V = [];
          for (var ne = 1; ne < E + 1; ne++)
            V.push(ne + 1);
          t.value = !0, o.value = !1;
        }
        if (B > E && B < j) {
          V = [];
          for (var M = 1; M < E + 1; M++)
            V.push(B + M - u.value);
          t.value = B === 2 && E === 1, o.value = !1;
        }
        if (B >= j) {
          V = [];
          for (var D = 1; D < E + 1; D++)
            V.push(h - (E - D) - 1);
          t.value = !1, o.value = !0;
        }
        V = [1, "...", ...V, "...", h];
      } else
        for (var X = 1; X <= h; X++)
          V.push(X);
      s.value = V, k != null && h > 0 && C(N, B, z), C(e["onUpdate:current"], B), C(e["onUpdate:size"], z);
    }, {
      immediate: !0
    }), {
      n: E0,
      classes: N0,
      pack: _e,
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
      clickItem: b,
      showMenu: y,
      clickSize: w,
      setPage: T,
      toNumber: U,
      formatElevation: pr
    };
  }
});
rv.render = A0;
const Za = rv;
te(Za);
var i$ = Za, z0 = {
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
  onClick: Y()
}, {
  n: L0,
  classes: R0
} = re("paper");
function U0(e, r) {
  var n = ze("ripple");
  return $e((p(), $(
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
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: !e.ripple
  }]]);
}
var nv = ee({
  name: "VarPaper",
  directives: {
    Ripple: Xe
  },
  props: z0,
  setup(e) {
    var r = (n) => {
      C(e.onClick, n);
    };
    return {
      n: L0,
      classes: R0,
      formatElevation: pr,
      toSizeUnit: be,
      handleClick: r
    };
  }
});
nv.render = U0;
const Ja = nv;
te(Ja);
var l$ = Ja;
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ki.apply(this, arguments);
}
var Y0 = ki({
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
  onChange: Y(),
  onConfirm: Y(),
  onCancel: Y()
}, xe(Ot, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: H0,
  classes: F0
} = re("picker"), ss = 300, j0 = 15, us = 200, W0 = 1e3, ds = 0, G0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], q0 = ["onTransitionend"], X0 = ["onClick"];
function K0(e, r) {
  var n = le("var-button");
  return p(), we(
    ra(e.dynamic ? e.n("$-popup") : e.Transition),
    De(e.dynamic ? {
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
      default: ce(() => [A(
        "div",
        De({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [W(e.$slots, "cancel", {}, () => [Q(n, {
            class: c(e.n("cancel-button")),
            "var-picker-cover": "",
            text: "",
            "text-color": e.cancelButtonTextColor,
            onClick: e.cancel
          }, {
            default: ce(() => [ke(
              oe(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])]), W(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: c(e.n("title"))
            },
            oe(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), W(e.$slots, "confirm", {}, () => [Q(n, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: ce(() => [ke(
              oe(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])])],
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
          [(p(!0), $(
            Me,
            null,
            He(e.scrollColumns, (a) => (p(), $("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(a),
              onTouchmove: $r((t) => e.handleTouchmove(t, a), ["prevent"]),
              onTouchend: (t) => e.handleTouchend(t, a)
            }, [A("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: K({
                transform: "translateY(" + a.translate + "px)",
                transitionDuration: a.duration + "ms",
                transitionProperty: a.duration ? "transform" : "none"
              }),
              onTransitionend: (t) => e.handleTransitionend(a)
            }, [(p(!0), $(
              Me,
              null,
              He(a.column.texts, (t, o) => (p(), $("div", {
                class: c(e.n("option")),
                style: K({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (l) => e.handleClick(a, o)
              }, [A(
                "div",
                {
                  class: c(e.n("text"))
                },
                oe(e.textFormatter(t, a.columnIndex)),
                3
                /* TEXT, CLASS */
              )], 14, X0))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, q0)], 42, G0))),
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
var av = ee({
  name: "VarPicker",
  components: {
    VarButton: vr,
    VarPopup: Rr
  },
  inheritAttrs: !1,
  props: Y0,
  setup(e) {
    var r = P([]), n = R(() => Le(e.optionHeight)), a = R(() => Le(e.optionCount)), t = R(() => a.value * n.value / 2 - n.value / 2), o = R(() => a.value * n.value), l = [], i = !1, s = (N, L) => {
      L.scrollEl = N;
    }, u = (N) => {
      C(e["onUpdate:show"], N);
    }, d = (N) => {
      var L = t.value - N.column.texts.length * n.value, j = n.value + t.value;
      N.translate = Un(N.translate, L, j);
    }, v = (N, L) => {
      var j = Math.round((t.value - L) / n.value);
      return of(j, N.column.texts);
    }, f = (N) => (N.translate = t.value - N.index * n.value, N.translate), m = () => {
      var N = r.value.map((j) => j.column.texts[j.index]), L = r.value.map((j) => j.index);
      return {
        texts: N,
        indexes: L
      };
    }, g = function(N, L) {
      L === void 0 && (L = 0), f(N), N.duration = L;
    }, b = (N, L, j) => {
      N.translate += Math.abs(L / j) / 3e-3 * (L < 0 ? -1 : 1);
    }, y = (N, L) => {
      i || (N.index = L, N.scrolling = !0, g(N, us));
    }, w = (N) => {
      N.touching = !0, N.translate = Mo(N.scrollEl);
    }, O = (N, L) => {
      if (L.touching) {
        i = !0, L.scrolling = !1, L.duration = 0;
        var {
          clientY: j
        } = N.touches[0], G = L.prevY !== void 0 ? j - L.prevY : 0;
        L.prevY = j, L.translate += G, d(L);
        var ne = performance.now();
        ne - L.momentumTime > ss && (L.momentumTime = ne, L.momentumPrevY = L.translate);
      }
    }, T = (N, L) => {
      L.touching = !1, L.prevY = void 0;
      var j = L.translate - L.momentumPrevY, G = performance.now() - L.momentumTime, ne = Math.abs(j) >= j0 && G <= ss;
      ne && b(L, j, G), L.index = v(L, L.translate);
      var M = L.translate, D = f(L);
      L.scrolling = D !== M, g(L, ne ? W0 : us), L.scrolling || F(L), br(() => {
        i = !1;
      });
    }, S = (N) => {
      N.scrolling = !1, F(N);
    }, I = (N) => N.map((L, j) => {
      var G, ne = Ve(L) ? {
        texts: L
      } : L, M = {
        id: ds++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (G = ne.initialIndex) != null ? G : 0,
        columnIndex: j,
        duration: 0,
        momentumTime: 0,
        column: ne,
        scrollEl: null,
        scrolling: !1
      };
      return g(M), M;
    }), B = (N) => {
      var L = [];
      return z(L, N, 0, !0), L;
    }, z = function(N, L, j, G) {
      if (G === void 0 && (G = !1), Ve(L) && L.length) {
        var ne, M = G && (ne = e.cascadeInitialIndexes[N.length]) != null ? ne : 0, D = {
          id: ds++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: M,
          columnIndex: j,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: L.map((X) => X[e.textKey])
          },
          columns: L,
          scrollEl: null,
          scrolling: !1
        };
        N.push(D), g(D), z(N, D.columns[D.index].children, j + 1, G);
      }
    }, h = (N) => {
      r.value.splice(r.value.indexOf(N) + 1), z(r.value, N.columns[N.index].children, N.columnIndex + 1);
    }, k = () => {
      var {
        indexes: N
      } = m();
      return N.every((L, j) => L === l[j]);
    }, F = (N) => {
      var {
        cascade: L,
        onChange: j
      } = e;
      if (!k()) {
        L && h(N);
        var G = r.value.some((D) => D.scrolling);
        if (!G) {
          var {
            texts: ne,
            indexes: M
          } = m();
          l = [...M], C(j, ne, M);
        }
      }
    }, V = () => {
      if (e.cascade) {
        var N = r.value.find((L) => L.scrolling);
        N && (N.index = v(N, Mo(N.scrollEl)), N.scrolling = !1, g(N), h(N));
      } else
        r.value.forEach((L) => {
          L.index = v(L, Mo(L.scrollEl)), g(L);
        });
    }, E = () => {
      V();
      var {
        texts: N,
        indexes: L
      } = m();
      l = [...L], C(e.onConfirm, N, L);
    }, q = () => {
      V();
      var {
        texts: N,
        indexes: L
      } = m();
      l = [...L], C(e.onCancel, N, L);
    };
    return se(() => e.columns, (N) => {
      r.value = e.cascade ? B(ll(N)) : I(ll(N));
      var {
        indexes: L
      } = m();
      l = [...L];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: H0,
      classes: F0,
      pack: _e,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Ue,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: w,
      handleTouchmove: O,
      handleTouchend: T,
      handleTransitionend: S,
      confirm: E,
      cancel: q,
      dt: uo,
      handleClick: y
    };
  }
});
av.render = K0;
const Nt = av;
var fr;
function In(e) {
  return new Promise((r) => {
    In.close();
    var n = Ve(e) ? {
      columns: e
    } : e, a = Re(n);
    a.dynamic = !0, a.teleport = "body", fr = a;
    var {
      unmountInstance: t
    } = ta(Nt, a, {
      onConfirm: (o, l) => {
        C(a.onConfirm, o, l), r({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onCancel: (o, l) => {
        C(a.onCancel, o, l), r({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onClose: () => {
        C(a.onClose), r({
          state: "close"
        }), fr === a && (fr = null);
      },
      onClosed: () => {
        C(a.onClosed), t(), fr === a && (fr = null);
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
In.close = function() {
  if (fr != null) {
    var e = fr;
    fr = null, Ae().then(() => {
      e.show = !1;
    });
  }
};
In.Component = Nt;
te(Nt);
te(Nt, In);
var s$ = Nt;
function Z0(e) {
  return ["linear", "circle"].includes(e);
}
function J0(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Q0 = {
  mode: {
    type: String,
    default: "linear",
    validator: Z0
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
  },
  indeterminate: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    default: "primary",
    validator: J0
  }
}, {
  n: _0,
  classes: x0
} = re("progress"), e1 = ["viewBox"], r1 = ["r", "stroke-width", "stroke-dasharray"], n1 = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function a1(e, r) {
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
      [A(
        "div",
        {
          class: c(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
          style: K({
            height: e.toSizeUnit(e.lineWidth),
            background: e.trackColor
          })
        },
        [e.indeterminate ? (p(), $(
          "div",
          {
            key: 0,
            class: c(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
          },
          [A(
            "div",
            {
              class: c(e.classes(e.n("linear--" + e.type))),
              style: K({
                background: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: c(e.classes(e.n("linear--" + e.type))),
              style: K({
                background: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )) : (p(), $(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("linear-certain"), e.n("linear--" + e.type), [e.ripple, e.n("linear-ripple")])),
            style: K({
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
      ), e.label ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [ke(
          oe(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (p(), $(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), $("svg", {
        class: c(e.n("circle-svg")),
        style: K({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (p(), $("circle", {
        key: 0,
        class: c(e.n("circle-background")),
        cx: "50%",
        cy: "50%",
        r: e.RADIUS,
        fill: "transparent",
        "stroke-width": e.circleProps.strokeWidth,
        "stroke-dasharray": e.CIRCUMFERENCE,
        style: K({
          stroke: e.trackColor
        })
      }, null, 14, r1)) : x("v-if", !0), A("circle", {
        class: c(e.classes(e.n("circle-certain"), e.n("circle--" + e.type), [e.indeterminate, e.n("circle-overlay")])),
        cx: "50%",
        cy: "50%",
        r: e.RADIUS,
        fill: "transparent",
        "stroke-width": e.circleProps.strokeWidth,
        "stroke-dasharray": e.CIRCUMFERENCE,
        "stroke-dashoffset": e.circleProps.strokeOffset,
        style: K({
          stroke: e.color
        })
      }, null, 14, n1)], 14, e1)), e.label ? (p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [ke(
          oe(e.circleProps.roundValue),
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
var tv = ee({
  name: "VarProgress",
  props: Q0,
  setup(e) {
    var r = 100, n = 20, a = 2 * Math.PI * n, t = R(() => {
      var l = U(e.value), i = l > r ? r : l, s = l > r ? r : Math.round(l);
      return {
        width: i + "%",
        roundValue: s + "%"
      };
    }), o = R(() => {
      var {
        size: l,
        lineWidth: i,
        value: s
      } = e, u = n / (1 - Le(i) / Le(l)) * 2, d = "0 0 " + u + " " + u, v = U(s) > r ? r : Math.round(U(s)), f = "" + (r - v) / r * a, m = Le(i) / Le(l) * u;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: v + "%"
      };
    });
    return {
      n: _0,
      classes: x0,
      toSizeUnit: be,
      linearProps: t,
      CIRCUMFERENCE: a,
      RADIUS: n,
      circleProps: o
    };
  }
});
tv.render = a1;
const Qa = tv;
te(Qa);
var u$ = Qa, t1 = {
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
  onRefresh: Y(),
  "onUpdate:modelValue": Y()
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
function fs(e) {
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
  n: cs,
  classes: o1
} = re("pull-refresh"), ms = 150;
function i1(e, r) {
  var n = le("var-icon");
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
    [A(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: K(e.controlStyle)
      },
      [Q(n, {
        name: e.iconName,
        transition: e.ICON_TRANSITION,
        class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
        "var-pull-refresh-cover": ""
      }, null, 8, ["name", "transition", "class"])],
      6
      /* CLASS, STYLE */
    ), W(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var ov = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ne
  },
  props: t1,
  setup(e) {
    var r = P(0), n = P(null), a = P(null), t = P(0), o = P("-125%"), l = P("arrow-down"), i = P("default"), s = P(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var h = fs(function* (k) {
        if (l.value !== k)
          return l.value = k, new Promise((F) => {
            window.setTimeout(F, ms);
          });
      });
      return function(F) {
        return h.apply(this, arguments);
      };
    }(), g = R(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = R(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), y = R(() => Math.abs(2 * r.value)), w = R(() => i.value === "success"), O = (h) => {
      var k = "classList" in u ? u : document.body;
      k.classList[h](cs() + "--lock");
    }, T = (h) => {
      if (r.value === 0) {
        var {
          width: k
        } = Qe(a.value);
        r.value = -(k + k * 0.25);
      }
      v = h.touches[0].clientY, f = 0, d = un(h.target);
    }, S = (h) => {
      if (!(!g.value || !d) && !(d !== u && ha(d) > 0)) {
        var k = ha(u);
        if (!(k > 0)) {
          var F = k === 0, V = h.touches[0];
          f = V.clientY - v, F && f >= 0 && h.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = h.touches[0].clientY), F && nr(o.value) && o.value > r.value && O("add");
          var E = (h.touches[0].clientY - t.value) / 2 + r.value;
          o.value = E >= y.value ? y.value : E, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var h = fs(function* () {
        g.value && (s.value = !0, U(o.value) >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, C(e["onUpdate:modelValue"], !0), Ae(() => {
          C(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, U(e.animationDuration))), d = null);
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), B = () => {
      u = e.target ? Is(e.target, "PullRefresh") : un(n.value);
    }, z = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, U(e.animationDuration));
    };
    return se(() => e.modelValue, (h) => {
      h === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, z();
      }, U(e.successDuration)));
    }), or(B), dn(n, "touchmove", S), {
      n: cs,
      classes: o1,
      ICON_TRANSITION: ms,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: T,
      touchMove: S,
      touchEnd: I,
      iconName: l,
      controlStyle: b,
      isSuccess: w
    };
  }
});
ov.render = i1;
const _a = ov;
te(_a);
var d$ = _a, l1 = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, iv = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function s1() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(iv);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function u1() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(iv);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: d1,
  classes: v1
} = re("radio");
function f1(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = ze("ripple"), l = ze("hover");
  return p(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      De({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [$e((p(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-marked",
          size: e.iconSize
        }, null, 8, ["class", "size"])]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Q(n, {
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
      }], [l, e.handleHovering, "desktop"]]), A(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
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
var lv = ee({
  name: "VarRadio",
  directives: {
    Ripple: Xe,
    Hover: Ur
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  inheritAttrs: !1,
  props: l1,
  setup(e) {
    var r = P(!1), n = R(() => r.value === e.checkedValue), a = P(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = u1(), {
      hovering: l,
      handleHovering: i
    } = fn(), {
      form: s,
      bindForm: u
    } = Vr(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Or(), g = (B) => {
      Ae(() => {
        var {
          validateTrigger: z,
          rules: h,
          modelValue: k
        } = e;
        v(z, B, h, k);
      });
    }, b = (B) => {
      var {
        checkedValue: z,
        onChange: h
      } = e;
      t && r.value === z || (r.value = B, C(e["onUpdate:modelValue"], r.value), C(h, r.value), t == null || t.onToggle(z), g("onChange"));
    }, y = (B) => {
      var {
        disabled: z,
        readonly: h,
        uncheckedValue: k,
        checkedValue: F,
        onClick: V
      } = e;
      s != null && s.disabled.value || z || (C(V, B), !(s != null && s.readonly.value || h) && (a.value = !0, b(n.value ? k : F)));
    }, w = (B) => {
      var {
        checkedValue: z,
        uncheckedValue: h
      } = e;
      r.value = B === z ? z : h;
    }, O = () => {
      C(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, T = () => f(e.rules, e.modelValue), S = (B) => {
      var {
        uncheckedValue: z,
        checkedValue: h
      } = e, k = ![z, h].includes(B);
      k && (B = n.value ? z : h), b(B);
    };
    se(() => e.modelValue, (B) => {
      r.value = B;
    }, {
      immediate: !0
    });
    var I = {
      sync: w,
      validate: T,
      resetValidation: m,
      reset: O
    };
    return C(o, I), C(u, I), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: d1,
      classes: v1,
      handleClick: y,
      toggle: S,
      reset: O,
      validate: T,
      resetValidation: m
    };
  }
});
lv.render = f1;
const xa = lv;
te(xa);
var v$ = xa;
function c1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var m1 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: c1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: p1,
  classes: h1
} = re("radio-group");
function g1(e, r) {
  var n = le("var-form-details");
  return p(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var sv = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: ar
  },
  props: m1,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = s1(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Or(), u = R(() => o.value), d = (y) => {
      Ae(() => {
        var {
          validateTrigger: w,
          rules: O,
          modelValue: T
        } = e;
        l(w, y, O, T);
      });
    }, v = () => n.forEach((y) => {
      var {
        sync: w
      } = y;
      return w(e.modelValue);
    }), f = (y) => {
      C(e["onUpdate:modelValue"], y), C(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      C(e["onUpdate:modelValue"], void 0), s();
    };
    se(() => e.modelValue, v), se(() => r.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return C(t, b), a(b), {
      errorMessage: o,
      n: p1,
      classes: h1,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
sv.render = g1;
const et = sv;
te(et);
var f$ = et, y1 = {
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
  clearable: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: la
} = re("rate"), b1 = ["onClick"];
function w1(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = ze("ripple"), l = ze("hover");
  return p(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), $(
        Me,
        null,
        He(e.toNumber(e.count), (i) => $e((p(), $("div", {
          key: i,
          style: K(e.getStyle(i)),
          class: c(e.getClass(i)),
          onClick: (s) => e.handleClick(i, s)
        }, [Q(n, {
          class: c(e.n("content-icon")),
          "var-rate-cover": "",
          transition: 0,
          namespace: e.namespace,
          name: e.getCurrentState(i).name,
          style: K({
            fontSize: e.toSizeUnit(e.size)
          })
        }, null, 8, ["class", "namespace", "name", "style"]), Q(a, {
          hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])], 14, b1)), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
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
var uv = ee({
  name: "VarRate",
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  directives: {
    Ripple: Xe,
    Hover: Ur
  },
  props: y1,
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
    } = fn(), s = P(-1), u = Number(e.modelValue), d = (S) => {
      var {
        count: I,
        gap: B
      } = e;
      return {
        color: f(S).color,
        marginRight: S !== U(I) ? be(B) : 0
      };
    }, v = (S) => {
      var {
        name: I,
        color: B
      } = f(S);
      return {
        [la("content")]: !0,
        [la("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [la("--error")]: a.value,
        [la("--primary")]: I !== e.emptyIcon && !B
      };
    }, f = (S) => {
      var {
        modelValue: I,
        disabled: B,
        disabledColor: z,
        color: h,
        half: k,
        emptyColor: F,
        icon: V,
        halfIcon: E,
        emptyIcon: q
      } = e, N = h;
      return (B || r != null && r.disabled.value) && (N = z), S <= U(I) ? {
        color: N,
        name: V
      } : k && S <= U(I) + 0.5 ? {
        color: N,
        name: E
      } : {
        color: B || r != null && r.disabled.value ? z : F,
        name: q
      };
    }, m = (S, I) => {
      var {
        half: B,
        clearable: z
      } = e;
      if (B) {
        var {
          offsetWidth: h
        } = I.target;
        I.offsetX <= Math.floor(h / 2) && (S -= 0.5);
      }
      u === S && z && (S = 0), u = S, C(e["onUpdate:modelValue"], S);
    }, g = () => o(e.rules, U(e.modelValue)), b = () => Ae(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = (S, I) => {
      var {
        readonly: B,
        disabled: z,
        onChange: h
      } = e;
      B || z || r != null && r.disabled.value || r != null && r.readonly.value || (m(S, I), C(h, S), b());
    }, w = (S) => (I) => {
      s.value = S, i.value = I;
    }, O = () => {
      C(e["onUpdate:modelValue"], 0), l();
    }, T = {
      reset: O,
      validate: g,
      resetValidation: l
    };
    return C(n, T), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: d,
      getClass: v,
      getCurrentState: f,
      handleClick: y,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: w,
      reset: O,
      validate: g,
      resetValidation: l,
      toSizeUnit: be,
      toNumber: U,
      n: la
    };
  }
});
uv.render = w1;
const rt = uv;
te(rt);
var c$ = rt;
function C1(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var S1 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: C1
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
}, k1 = (e) => (hn(""), e = e(), gn(), e), $1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, T1 = /* @__PURE__ */ k1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), P1 = [T1];
function O1(e, r) {
  return p(), $("svg", $1, P1);
}
var dv = ee({});
dv.render = O1;
const V1 = dv;
var M1 = (e) => (hn(""), e = e(), gn(), e), I1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, B1 = /* @__PURE__ */ M1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), E1 = [B1];
function N1(e, r) {
  return p(), $("svg", I1, E1);
}
var vv = ee({});
vv.render = N1;
const D1 = vv;
var A1 = (e) => (hn(""), e = e(), gn(), e), z1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, L1 = /* @__PURE__ */ A1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), R1 = [L1];
function U1(e, r) {
  return p(), $("svg", z1, R1);
}
var fv = ee({});
fv.render = U1;
const Y1 = fv;
var {
  n: H1,
  classes: F1
} = re("result");
function j1(e, r) {
  return p(), $(
    Me,
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
var cv = ee({
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
      n: H1,
      classes: F1,
      toNumber: U
    };
  }
});
cv.render = j1;
const W1 = cv;
var G1 = (e) => (hn(""), e = e(), gn(), e), q1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, X1 = /* @__PURE__ */ G1(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), K1 = [X1];
function Z1(e, r) {
  return p(), $("svg", q1, K1);
}
var mv = ee({});
mv.render = Z1;
const J1 = mv;
var Q1 = (e) => (hn(""), e = e(), gn(), e), _1 = {
  viewBox: "-4 -4 32 32"
}, x1 = /* @__PURE__ */ Q1(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), ew = [x1];
function rw(e, r) {
  return p(), $("svg", _1, ew);
}
var pv = ee({});
pv.render = rw;
const nw = pv;
var {
  n: aw,
  classes: tw
} = re("result");
function ow(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (p(), $(
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
        [(p(), we(ra(e.type), {
          "border-size": e.borderSize,
          animation: e.animation
        }, null, 8, ["border-size", "animation"]))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : x("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      oe(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      oe(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var hv = ee({
  name: "VarResult",
  components: {
    Info: V1,
    Success: W1,
    Warning: Y1,
    Error: D1,
    Question: J1,
    Empty: nw
  },
  props: S1,
  setup(e) {
    var r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? be(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? be(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: aw,
      classes: tw,
      toNumber: U,
      toPxNum: Le,
      toSizeUnit: be,
      circleSize: r,
      borderSize: n
    };
  }
});
hv.render = ow;
const nt = hv;
te(nt);
var m$ = nt;
function iw(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function lw(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var sw = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: iw
  },
  align: {
    type: String,
    default: "flex-start",
    validator: lw
  },
  onClick: Y()
}, {
  n: uw,
  classes: dw
} = re("row");
function vw(e, r) {
  return p(), $(
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
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var gv = ee({
  name: "VarRow",
  props: sw,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = cp(), t = R(() => {
      var s = Le(e.gutter);
      return s / 2;
    }), o = () => {
      r.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      C(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return se(() => a.value, o), se(() => e.gutter, o), n(i), {
      n: uw,
      classes: dw,
      average: t,
      handleClick: l,
      padStartFlex: Qt
    };
  }
});
gv.render = vw;
const at = gv;
te(at);
var p$ = at;
function $i() {
  return $i = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, $i.apply(this, arguments);
}
function fw(e) {
  return ["left", "right", "center"].includes(e);
}
var cw = $i({
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
    validator: fw
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClose: Y(),
  onChange: Y(),
  onClear: Y(),
  "onUpdate:modelValue": Y()
}, xe(xi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: mw,
  classes: pw
} = re("select"), hw = {
  key: 1
};
function gw(e, r) {
  var n = le("var-chip"), a = le("var-icon"), t = le("var-field-decorator"), o = le("var-menu"), l = le("var-form-details");
  return p(), $(
    "div",
    {
      class: c(e.n()),
      onClick: r[3] || (r[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [Q(o, {
      "var-select-cover": "",
      "same-width": "",
      "close-on-click-reference": "",
      show: e.showMenu,
      "onUpdate:show": r[1] || (r[1] = (i) => e.showMenu = i),
      class: c(e.n("menu")),
      "popover-class": e.variant === "standard" && e.hint ? e.n("--standard-menu-margin") : void 0,
      "offset-y": e.offsetY,
      disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
      placement: e.placement,
      "default-style": !1,
      onClickOutside: e.handleBlur
    }, {
      menu: ce(() => [A(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )]),
      default: ce(() => [Q(
        t,
        Tt(so({
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
        Zt({
          "append-icon": ce(() => [W(e.$slots, "append-icon")]),
          default: ce(() => [A(
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
              [e.isEmptyModelValue ? x("v-if", !0) : W(e.$slots, "selected", {
                key: 0
              }, () => [e.multiple ? (p(), $(
                Me,
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
                    Me,
                    null,
                    He(e.labels, (i) => (p(), we(n, {
                      class: c(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: i,
                      onClick: r[0] || (r[0] = $r(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(i)
                    }, {
                      default: ce(() => [ke(
                        oe(i),
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
                )) : (p(), $(
                  "div",
                  {
                    key: 1,
                    class: c(e.n("values"))
                  },
                  oe(e.labels.join(e.separator)),
                  3
                  /* TEXT, CLASS */
                ))],
                64
                /* STABLE_FRAGMENT */
              )) : (p(), $(
                "span",
                hw,
                oe(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.enableCustomPlaceholder ? (p(), $(
              "span",
              {
                key: 0,
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                style: K({
                  color: e.placeholderColor
                })
              },
              oe(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )) : x("v-if", !0), W(e.$slots, "arrow-icon", {
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
          fn: ce(() => [W(e.$slots, "prepend-icon")]),
          key: "0"
        } : void 0]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      )]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]), Q(l, {
      "error-message": e.errorMessage,
      onClick: r[2] || (r[2] = $r(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var yv = ee({
  name: "VarSelect",
  components: {
    VarIcon: Ne,
    VarMenu: Mn,
    VarChip: Wn,
    VarFieldDecorator: Ud,
    VarFormDetails: ar
  },
  props: cw,
  setup(e) {
    var r = P(!1), n = P(!1), a = R(() => e.multiple), t = R(() => e.focusColor), o = P(""), l = P([]), i = R(() => Fr(e.modelValue)), s = R(() => e.disabled || e.readonly ? "" : "pointer"), u = P(0), {
      bindForm: d,
      form: v
    } = Vr(), {
      length: f,
      options: m,
      bindOptions: g
    } = k0(), {
      errorMessage: b,
      validateWithTrigger: y,
      validate: w,
      // expose
      resetValidation: O
    } = Or(), T = P(null), S = R(() => e.variant === "outlined" ? "bottom" : "cover-top"), I = R(() => {
      var {
        hint: H,
        blurColor: Z,
        focusColor: _
      } = e;
      if (!H)
        return b.value ? "var(--field-decorator-error-color)" : r.value ? _ || "var(--field-decorator-focus-color)" : Z || "var(--field-decorator-blur-color)";
    }), B = R(() => !e.hint && Fr(e.modelValue)), z = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var _ = Z;
        l.value = _.map(F);
      }
      !H && !Fr(Z) && (o.value = F(Z)), !H && Fr(Z) && (o.value = "");
    }, h = (H) => {
      Ae(() => {
        var {
          validateTrigger: Z,
          rules: _,
          modelValue: ve
        } = e;
        y(Z, H, _, ve);
      });
    }, k = (H) => {
      var {
        value: Z,
        label: _
      } = H;
      return Z.value != null ? Z.value : _.value;
    }, F = (H) => {
      var Z, _, ve = m.find((Se) => {
        var {
          value: Ie
        } = Se;
        return Ie.value === H;
      });
      return ve || (ve = m.find((Se) => {
        var {
          label: Ie
        } = Se;
        return Ie.value === H;
      })), (Z = (_ = ve) == null ? void 0 : _.label.value) != null ? Z : "";
    }, V = () => {
      var {
        disabled: H,
        readonly: Z,
        onFocus: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (u.value = Le(e.offsetY), r.value = !0, C(_), h("onFocus"));
    }, E = () => {
      var {
        disabled: H,
        readonly: Z,
        onBlur: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (M(), C(_), h("onBlur"));
    }, q = (H) => {
      var {
        disabled: Z,
        readonly: _,
        multiple: ve,
        onChange: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || _)) {
        var Ie = ve ? m.filter((ie) => {
          var {
            selected: fe
          } = ie;
          return fe.value;
        }).map(k) : k(H);
        C(e["onUpdate:modelValue"], Ie), C(Se, Ie), h("onChange"), ve || M();
      }
    }, N = () => {
      var {
        disabled: H,
        readonly: Z,
        multiple: _,
        clearable: ve,
        onClear: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || H || Z || !ve)) {
        var Ie = _ ? [] : void 0;
        C(e["onUpdate:modelValue"], Ie), C(Se, Ie), h("onClear");
      }
    }, L = (H) => {
      var {
        disabled: Z,
        onClick: _
      } = e;
      v != null && v.disabled.value || Z || (C(_, H), h("onClick"));
    }, j = (H) => {
      var {
        disabled: Z,
        readonly: _,
        modelValue: ve,
        onClose: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || _)) {
        var Ie = ve, ie = m.find((pe) => {
          var {
            label: Oe
          } = pe;
          return Oe.value === H;
        }), fe = Ie.filter((pe) => {
          var Oe;
          return pe !== ((Oe = ie.value.value) != null ? Oe : ie.label.value);
        });
        C(e["onUpdate:modelValue"], fe), C(Se, fe), h("onClose");
      }
    }, G = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var _ = Z;
        m.forEach((ve) => ve.sync(_.includes(k(ve))));
      } else
        m.forEach((ve) => ve.sync(Z === k(ve)));
      z();
    }, ne = () => {
      u.value = Le(e.offsetY), r.value = !0, n.value = !0;
    }, M = () => {
      r.value = !1, n.value = !1;
    }, D = () => w(e.rules, e.modelValue), X = () => {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    se(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      H && !Ve(Z) && Tr("Select", "The modelValue must be an array when multiple is true");
    }), se(() => e.modelValue, G, {
      deep: !0
    }), se(() => f.value, G);
    var ae = {
      multiple: a,
      focusColor: t,
      computeLabel: z,
      onSelect: q,
      reset: X,
      validate: D,
      resetValidation: O
    };
    return g(ae), C(d, ae), {
      offsetY: u,
      isFocus: r,
      showMenu: n,
      errorMessage: b,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: T,
      placement: S,
      cursor: s,
      placeholderColor: I,
      enableCustomPlaceholder: B,
      n: mw,
      classes: pw,
      handleFocus: V,
      handleBlur: E,
      handleClear: N,
      handleClick: L,
      handleClose: j,
      reset: X,
      validate: D,
      resetValidation: O,
      focus: ne,
      blur: M
    };
  }
});
yv.render = gw;
const tt = yv;
te(tt);
var h$ = tt, yw = {
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
  n: bw,
  classes: ww
} = re("skeleton");
function Cw(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (p(), $(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [W(e.$slots, "default")],
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), $(
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), $(
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
          )) : x("v-if", !0), (p(!0), $(
            Me,
            null,
            He(e.toNumber(e.rows), (n, a) => (p(), $(
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (p(), $(
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
var bv = ee({
  name: "VarSkeleton",
  props: yw,
  setup() {
    return {
      n: bw,
      classes: ww,
      toSizeUnit: be,
      toNumber: U
    };
  }
});
bv.render = Cw;
const ot = bv;
te(ot);
var g$ = ot;
function Sw(e) {
  return ["always", "normal", "never"].includes(e);
}
var qe = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), kw = {
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
    validator: Sw
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
  onChange: Y(),
  onStart: Y(),
  onEnd: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: ps,
  classes: $w
} = re("slider"), Tw = ["onTouchstart"];
function Pw(e, r) {
  var n = le("var-hover-overlay"), a = le("var-form-details"), t = ze("hover");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(e.direction), e.n("$--box")))
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
      ), (p(!0), $(
        Me,
        null,
        He(e.thumbList, (o) => (p(), $("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: K(e.thumbStyle(o)),
          onTouchstart: $r((l) => e.start(l, o.enumValue), ["stop"])
        }, [W(e.$slots, "button", {
          currentValue: o.text
        }, () => [$e(A(
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
          [Q(n, {
            hovering: o.hovering
          }, null, 8, ["hovering"])],
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
            oe(o.text),
            1
            /* TEXT */
          )],
          6
          /* CLASS, STYLE */
        )])], 46, Tw))),
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
var wv = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  directives: {
    Hover: Ur
  },
  props: kw,
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
    } = fn(), {
      hovering: u,
      handleHovering: d
    } = fn(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Ae(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = P(null), b = P(0), y = P(!1), w = Re({
      [qe.First]: f(),
      [qe.Second]: f()
    }), O = R(() => U(e.max) - U(e.min)), T = R(() => b.value / O.value * U(e.step)), S = R(() => {
      var {
        modelValue: ie,
        range: fe
      } = e, pe = [];
      return fe && Ve(ie) ? pe = [{
        value: q(ie[0]),
        enumValue: qe.First,
        text: N(ie[0]),
        hovering: ua(i),
        handleHovering: s
      }, {
        value: q(ie[1]),
        enumValue: qe.Second,
        text: N(ie[1]),
        hovering: ua(u),
        handleHovering: d
      }] : nr(ie) && (pe = [{
        value: q(ie),
        enumValue: qe.First,
        text: N(ie),
        hovering: ua(i),
        handleHovering: s
      }]), pe;
    }), I = R(() => {
      var {
        activeColor: ie,
        range: fe,
        modelValue: pe
      } = e, Oe = fe && Ve(pe) ? q(Math.min(pe[0], pe[1])) : 0, je = fe && Ve(pe) ? q(Math.max(pe[0], pe[1])) - Oe : q(pe);
      return h.value ? {
        left: "0px",
        height: je + "%",
        bottom: Oe + "%",
        background: ie
      } : {
        top: "0px",
        width: je + "%",
        left: Oe + "%",
        background: ie
      };
    }), B = R(() => e.disabled || (n == null ? void 0 : n.disabled.value)), z = R(() => e.readonly || (n == null ? void 0 : n.readonly.value)), h = R(() => e.direction === "vertical"), k, F = (ie) => {
      var fe = ie.currentTarget;
      return fe ? h.value ? b.value - (ie.clientY - Qe(fe).top) : ie.clientX - sf(fe) : 0;
    }, V = (ie) => {
      var fe = h.value ? "bottom" : "left";
      return {
        [fe]: ie.value + "%",
        zIndex: w[ie.enumValue].active ? 1 : void 0
      };
    }, E = (ie) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[ie].active, q = (ie) => {
      var {
        min: fe,
        max: pe
      } = e;
      return ie < U(fe) ? 0 : ie > U(pe) ? 100 : (ie - U(fe)) / O.value * 100;
    }, N = (ie) => {
      if (!nr(ie))
        return 0;
      var fe = ie;
      fe < Number(e.min) && (fe = Number(e.min)), fe > Number(e.max) && (fe = Number(e.max));
      var pe = parseInt("" + fe, 10) === fe;
      return pe ? fe : U(fe.toPrecision(5));
    }, L = (ie, fe) => {
      B.value || fe.handleHovering(ie);
    }, j = (ie, fe) => {
      var pe = [], {
        step: Oe,
        range: je,
        modelValue: Ke,
        onChange: We,
        min: Ge
      } = e, ue = U(Oe), Ce = Math.round(ie / T.value), ge = Ce * ue + U(Ge), Te = w[fe].percentValue * ue + U(Ge);
      if (w[fe].percentValue = Ce, je && Ve(Ke) && (pe = fe === qe.First ? [ge, Ke[1]] : [Ke[0], ge]), Te !== ge) {
        var Pe = je ? pe.map((Ye) => N(Ye)) : N(ge);
        C(We, Pe), C(e["onUpdate:modelValue"], Pe), m();
      }
    }, G = (ie) => {
      if (!e.range)
        return qe.First;
      var fe = w[qe.First].percentValue * T.value, pe = w[qe.Second].percentValue * T.value, Oe = Math.abs(ie - fe), je = Math.abs(ie - pe);
      return Oe <= je ? qe.First : qe.Second;
    }, ne = () => {
      document.addEventListener("touchmove", X, {
        passive: !1
      }), document.addEventListener("touchend", ae), document.addEventListener("touchcancel", ae);
    }, M = () => {
      document.removeEventListener("touchmove", X), document.removeEventListener("touchend", ae), document.removeEventListener("touchcancel", ae);
    }, D = (ie, fe) => {
      if (b.value || (b.value = g.value.offsetWidth), B.value || (w[fe].active = !0), k = fe, ne(), !(B.value || z.value)) {
        C(e.onStart), y.value = !0;
        var {
          clientX: pe,
          clientY: Oe
        } = ie.touches[0];
        w[fe].startPosition = h.value ? Oe : pe;
      }
    }, X = (ie) => {
      if (ie.preventDefault(), !(B.value || z.value || !y.value)) {
        var {
          startPosition: fe,
          currentOffset: pe
        } = w[k], {
          clientX: Oe,
          clientY: je
        } = ie.touches[0], Ke = (h.value ? fe - je : Oe - fe) + pe;
        Ke <= 0 ? Ke = 0 : Ke >= b.value && (Ke = b.value), j(Ke, k);
      }
    }, ae = () => {
      M();
      var {
        range: ie,
        modelValue: fe,
        onEnd: pe,
        step: Oe,
        min: je
      } = e;
      if (B.value || (w[k].active = !1), !(B.value || z.value)) {
        var Ke = [];
        w[k].currentOffset = w[k].percentValue * T.value;
        var We = w[k].percentValue * U(Oe) + U(je);
        ie && Ve(fe) && (Ke = k === qe.First ? [We, fe[1]] : [fe[0], We]), C(pe, ie ? Ke : We), y.value = !1;
      }
    }, H = (ie) => {
      if (!(B.value || z.value) && !ie.target.closest("." + ps("thumb"))) {
        var fe = F(ie), pe = G(fe);
        k = pe, j(fe, pe), ae();
      }
    }, Z = () => {
      var ie = U(e.step);
      return isNaN(ie) ? (fl("Slider", 'type of prop "step" should be Number'), !1) : ie < 0 ? (fl("Slider", '"step" should be > 0'), !1) : !0;
    }, _ = () => {
      var {
        range: ie,
        modelValue: fe
      } = e;
      return ie && !Ve(fe) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ie && Ve(fe) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ie && Ve(fe) && fe.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ve = function(ie, fe) {
      ie === void 0 && (ie = e.modelValue), fe === void 0 && (fe = U(e.step));
      var pe = (Oe) => {
        var {
          min: je,
          max: Ke
        } = e;
        return Oe < U(je) ? 0 : Oe > U(Ke) ? O.value / fe : (Oe - U(je)) / fe;
      };
      e.range && Ve(ie) ? (w[qe.First].percentValue = pe(ie[0]), w[qe.First].currentOffset = w[qe.First].percentValue * T.value, w[qe.Second].percentValue = pe(ie[1]), w[qe.Second].currentOffset = w[qe.Second].percentValue * T.value) : nr(ie) && (w[qe.First].currentOffset = pe(ie) * T.value);
    }, Se = () => {
      var ie = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], ie), l();
    }, Ie = {
      reset: Se,
      validate: v,
      resetValidation: l
    };
    return C(r, Ie), se([() => e.modelValue, () => e.step], (ie) => {
      var [fe, pe] = ie;
      !Z() || !_() || y.value || ve(fe, U(pe));
    }), se(b, () => ve()), or(() => {
      !Z() || !_() || (b.value = g.value[h.value ? "offsetHeight" : "offsetWidth"]);
    }), lo(() => {
      M();
    }), {
      n: ps,
      classes: $w,
      Thumbs: qe,
      sliderEl: g,
      getFillStyle: I,
      isDisabled: B,
      isVertical: h,
      thumbStyle: V,
      errorMessage: a,
      thumbsProps: w,
      thumbList: S,
      hover: L,
      multiplySizeUnit: ur,
      toNumber: U,
      showLabel: E,
      start: D,
      move: X,
      end: ae,
      click: H
    };
  }
});
wv.render = Pw;
const it = wv;
te(it);
var y$ = it;
function Ti() {
  return Ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ti.apply(this, arguments);
}
function Ow(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function Vw(e) {
  return nl.includes(e);
}
var Cv = {
  type: {
    type: String,
    validator: Vw
  },
  position: {
    type: String,
    default: "top",
    validator: Ow
  },
  content: {
    type: [String, Function, Object]
  },
  contentClass: {
    type: String
  },
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: xe(tn, "type"),
  loadingSize: xe(tn, "size"),
  loadingRadius: xe(tn, "radius"),
  loadingColor: Ti({}, xe(tn, "color"), {
    default: "currentColor"
  }),
  lockScroll: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: {
    type: Boolean,
    default: !1
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y(),
  _update: {
    type: String
  }
}, {
  n: Mw,
  classes: Iw
} = re("snackbar"), Bw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Ew(e, r) {
  var n = le("var-icon"), a = le("var-loading");
  return $e((p(), $(
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
        [W(e.$slots, "default", {}, () => [ke(
          oe(e.content),
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
        [e.iconName ? (p(), we(n, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : x("v-if", !0), e.type === "loading" ? (p(), we(a, {
          key: 1,
          type: e.loadingType,
          size: e.loadingSize,
          color: e.loadingColor,
          radius: e.loadingRadius
        }, null, 8, ["type", "size", "color", "radius"])) : x("v-if", !0), W(e.$slots, "icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.n("action"))
        },
        [W(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Lr, e.show]]);
}
var Sv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: vn,
    VarIcon: Ne
  },
  props: Cv,
  setup(e) {
    var r = P(null), {
      zIndex: n
    } = Vt(() => e.show, 1);
    co(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? Bw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return se(() => e.show, (l) => {
      l ? (C(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), C(e.onClose));
    }), se(() => e._update, () => {
      clearTimeout(r.value), o();
    }), or(() => {
      e.show && (C(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: nl,
      n: Mw,
      classes: Iw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
Sv.render = Ew;
const kv = Sv;
var {
  n: Nw
} = re("snackbar");
function Dw(e, r) {
  var n = le("var-snackbar-core");
  return p(), we(Zr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [Q(Ue, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: ce(() => [Q(n, De(e.$props, {
      class: e.n("transition")
    }), {
      icon: ce(() => [W(e.$slots, "icon")]),
      action: ce(() => [W(e.$slots, "action")]),
      default: ce(() => [W(e.$slots, "default", {}, () => [ke(
        oe(e.content),
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
var $v = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: kv
  },
  props: Cv,
  setup() {
    var {
      disabled: e
    } = oa();
    return {
      n: Nw,
      disabled: e
    };
  }
});
$v.render = Dw;
const Po = $v;
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, lt.apply(this, arguments);
}
function Aw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var nl = ["loading", "success", "warning", "info", "error"], hs = 0, Pi = !1, Tv, _n = !1, Pv = {
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
}, kr = Re([]), al = Pv, zw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Ao = (e) => () => na(e) ? e() : e, Lw = {
  setup() {
    return () => {
      var e = kr.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), _n && (a.position = "top");
        var l = _n ? "relative" : "absolute", i = lt({
          position: l
        }, jw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Ao(s),
          icon: Ao(u),
          action: Ao(d)
        };
        return Q(kv, De(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Q(ef, De(zw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: Rw,
        onAfterLeave: Uw
      }), Aw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Kr = function(e) {
  var r = Hw(e), n = Re(lt({}, al, r));
  n.show = !0, Pi || (Pi = !0, Tv = ta(Lw).unmountInstance);
  var {
    length: a
  } = kr, t = {
    id: hs++,
    reactiveSnackOptions: n
  };
  if (a === 0 || _n)
    Yw(t);
  else {
    var o = "update-" + hs;
    Fw(n, o);
  }
  return {
    clear() {
      !_n && kr.length ? kr[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
nl.forEach((e) => {
  Kr[e] = (r) => (Ei(r) ? r.type = e : r = {
    content: r,
    type: e
  }, Kr(r));
});
Kr.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== _n && (kr.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), _n = e);
};
Kr.clear = function() {
  kr.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Kr.setDefaultOptions = function(e) {
  al = e;
};
Kr.resetDefaultOptions = function() {
  al = Pv;
};
function Rw(e) {
  var r = e.getAttribute("data-id"), n = kr.find((a) => a.id === U(r));
  n && C(n.reactiveSnackOptions.onOpened);
}
function Uw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = kr.find((t) => t.id === U(r));
  n && (n.animationEnd = !0, C(n.reactiveSnackOptions.onClosed));
  var a = kr.every((t) => t.animationEnd);
  a && (C(Tv), kr = Re([]), Pi = !1);
}
function Yw(e) {
  kr.push(e);
}
function Hw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function Fw(e, r) {
  var [n] = kr;
  n.reactiveSnackOptions = lt({}, n.reactiveSnackOptions, e), n._update = r;
}
function jw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Kr.Component = Po;
te(Po);
te(Po, Kr);
var b$ = Po;
const Oi = Kr;
var Ov = (e) => ["mini", "small", "normal", "large"].includes(e), Ww = (e) => Ov(e) || Ve(e) || nr(e) || Fe(e), Gw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), qw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Xw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Ww
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
    validator: Gw
  },
  align: {
    type: String,
    validator: qw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Kw(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: zo,
  classes: Zw
} = re("space");
const st = ee({
  name: "VarSpace",
  props: Xw,
  setup(e, r) {
    var {
      slots: n
    } = r, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ve(t) ? t.map(be) : [be(t), be(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = C(n.default)) != null ? t : [], f = Ov(d), [m, g] = a(d, f);
      v = Rs(v);
      var b = v.length - 1, y = v.map((w, O) => {
        var T = Kw(m, g, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: b
        });
        return Q("div", {
          style: {
            margin: T
          }
        }, [w]);
      });
      return Q("div", {
        class: Zw(zo(), zo("$--box"), [o, zo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Qt(l),
          alignItems: Qt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [y]);
    };
  }
});
te(st);
var w$ = st, Jw = {
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
}, Vv = Symbol("STEPS_BIND_STEP_KEY");
function Qw() {
  var {
    bindChildren: e,
    childProviders: r
  } = lr(Vv);
  return {
    step: r,
    bindStep: e
  };
}
function _w() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Vv);
  return n || Tr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: xw,
  classes: eC
} = re("step"), rC = {
  key: 3
};
function nC(e, r) {
  var n = le("var-icon");
  return p(), $(
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
          class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
          style: K({
            backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
          }),
          onClick: r[0] || (r[0] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [e.isActive ? (p(), we(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.activeIcon
        }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (p(), we(n, {
          key: 1,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.currentIcon
        }, null, 8, ["class", "name"])) : e.inactiveIcon ? (p(), we(n, {
          key: 2,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.inactiveIcon
        }, null, 8, ["class", "name"])) : (p(), $(
          "span",
          rC,
          oe(e.index + 1),
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
        [W(e.$slots, "default")],
        2
        /* CLASS */
      ), A(
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
var Mv = ee({
  name: "VarStep",
  components: {
    VarIcon: Ne
  },
  props: Jw,
  setup() {
    var {
      index: e,
      steps: r,
      bindSteps: n
    } = _w(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = r, s = R(() => a.value === e.value), u = R(() => e.value !== -1 && U(a.value) > e.value), d = {
      index: e
    }, v = () => i(e.value);
    return n(d), {
      n: xw,
      classes: eC,
      index: e,
      isActive: u,
      isCurrent: s,
      direction: l,
      activeColor: t,
      inactiveColor: o,
      click: v
    };
  }
});
Mv.render = nC;
const ut = Mv;
te(ut);
var C$ = ut;
function aC(e) {
  return ["horizontal", "vertical"].includes(e);
}
var tC = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: aC
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: oC
} = re("steps");
function iC(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Iv = ee({
  name: "VarSteps",
  props: tC,
  setup(e) {
    var r = R(() => e.active), n = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      bindStep: o
    } = Qw(), l = (s) => {
      C(e.onClickStep, s);
    }, i = {
      active: r,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: oC
    };
  }
});
Iv.render = iC;
const dt = Iv;
te(dt);
var S$ = dt, lC = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: sC
} = re("style-provider"), uC = ee({
  name: "VarStyleProvider",
  props: lC,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => Ts(e.tag, {
      class: sC(),
      style: zs(e.styleVars)
    }, C(n.default));
  }
});
const Oo = uC;
var Lo = [];
function vt(e) {
  Lo.forEach((n) => document.documentElement.style.removeProperty(n)), Lo.length = 0;
  var r = zs(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Lo.push(a);
  });
}
vt.Component = Oo;
te(Oo);
te(Oo, vt);
var k$ = Oo, dC = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: vC,
  classes: fC
} = re("switch"), cC = (e) => (hn(""), e = e(), gn(), e), mC = /* @__PURE__ */ cC(() => /* @__PURE__ */ A(
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
)), pC = [mC];
function hC(e, r) {
  var n = le("var-hover-overlay"), a = le("var-form-details"), t = ze("ripple"), o = ze("hover");
  return $e((p(), $(
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
      ), $e((p(), $(
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
          [e.loading ? (p(), $(
            "span",
            {
              key: 0,
              class: c(e.n("loading")),
              style: K({
                width: e.radius,
                height: e.radius
              })
            },
            pC,
            6
            /* CLASS, STYLE */
          )) : x("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), Q(n, {
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
var Bv = ee({
  name: "VarSwitch",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  directives: {
    Ripple: Xe,
    Hover: Ur
  },
  props: dC,
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
    } = fn(), u = () => o(e.rules, e.modelValue), d = () => Ae(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = R(() => {
      var {
        size: w,
        modelValue: O,
        color: T,
        closeColor: S,
        loadingColor: I,
        activeValue: B
      } = e;
      return {
        handle: {
          width: ur(w),
          height: ur(w),
          backgroundColor: O === B ? T : S,
          color: I
        },
        ripple: {
          left: O === B ? ur(w, 0.5) : "-" + ur(w, 0.5),
          color: O === B ? T : S || "#999",
          width: ur(w, 2),
          height: ur(w, 2)
        },
        track: {
          height: ur(w, 0.72),
          width: ur(w, 1.9),
          borderRadius: ur(w, 2 / 3),
          filter: O === B || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === B ? T : S
        },
        switch: {
          height: ur(w, 1.2),
          width: ur(w, 2)
        }
      };
    }), f = R(() => ur(e.size, 0.8)), m = (w) => {
      var {
        onClick: O,
        onChange: T,
        disabled: S,
        loading: I,
        readonly: B,
        modelValue: z,
        activeValue: h,
        inactiveValue: k,
        "onUpdate:modelValue": F
      } = e;
      if (C(O, w), !(S || I || B || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var V = z === h ? k : h;
        C(T, V), C(F, V), d();
      }
    }, g = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, b = () => {
      C(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return C(r, y), {
      n: vC,
      classes: fC,
      multiplySizeUnit: ur,
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
Bv.render = hC;
const ft = Bv;
te(ft);
var $$ = ft, gC = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, Ev = Symbol("TABS_BIND_TAB_KEY");
function yC() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Ev);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function bC() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Ev);
  return r || Tr("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Ft,
  classes: wC
} = re("tab");
function CC(e, r) {
  var n = ze("ripple");
  return $e((p(), $(
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
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: e.disabled
  }]]);
}
var Nv = ee({
  name: "VarTab",
  directives: {
    Ripple: Xe
  },
  props: gC,
  setup(e) {
    var r = P(null), n = R(() => e.name), a = R(() => e.disabled), t = R(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = bC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: g
    } = l, b = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : y() ? d.value : v.value, O = () => e.disabled ? Ft("$-tab--disabled") : y() ? Ft("$-tab--active") : Ft("$-tab--inactive"), T = (S) => {
      var {
        disabled: I,
        name: B,
        onClick: z
      } = e;
      I || (C(z, B ?? o.value, S), s(b));
    };
    return se(() => e.name, g), se(() => e.disabled, g), {
      n: Ft,
      classes: wC,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: O,
      handleClick: T
    };
  }
});
Nv.render = CC;
const ct = Nv;
te(ct);
var T$ = ct, SC = {
  name: {
    type: [String, Number]
  }
}, {
  n: kC,
  classes: $C
} = re("tab-item");
function TC(e, r) {
  var n = le("var-swipe-item");
  return p(), we(n, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [W(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Dv = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: On
  },
  props: SC,
  setup(e) {
    var r = P(!1), n = R(() => e.name), {
      index: a,
      bindTabsItems: t
    } = e0(), {
      bindLists: o
    } = r0(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: R(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: kC,
      classes: $C,
      current: r
    };
  }
});
Dv.render = TC;
const mt = Dv;
te(mt);
var P$ = mt, PC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: OC,
  classes: VC
} = re("table");
function MC(e, r) {
  return p(), $(
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
        [W(e.$slots, "default")],
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
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Av = ee({
  name: "VarTable",
  props: PC,
  setup() {
    return {
      toSizeUnit: be,
      n: OC,
      classes: VC,
      formatElevation: pr
    };
  }
});
Av.render = MC;
const pt = Av;
te(pt);
var O$ = pt;
function gs(e) {
  return ["horizontal", "vertical"].includes(e);
}
function IC(e) {
  return ["auto", "always"].includes(e);
}
function BC(e) {
  return ["normal", "reverse"].includes(e);
}
var EC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: gs
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: gs
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
    validator: IC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: BC
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: xe(Kt, "cssMode"),
  stickyZIndex: xe(Kt, "zIndex"),
  offsetTop: xe(Kt, "offsetTop"),
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
};
function ys(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function bs(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ys(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ys(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: NC,
  classes: DC
} = re("tabs");
function AC(e, r) {
  return p(), we(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [A(
      "div",
      De({
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
        [W(e.$slots, "default"), A(
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
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
var zv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Vn
  },
  inheritAttrs: !1,
  props: EC,
  setup(e) {
    var r = P("0px"), n = P("0px"), a = P("0px"), t = P("0px"), o = P(!1), l = P(null), i = R(() => e.active), s = R(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = R(() => e.activeColor), d = R(() => e.inactiveColor), v = R(() => e.disabledColor), f = R(() => e.itemDirection), m = P(null), {
      tabList: g,
      bindTabList: b,
      length: y
    } = yC(), w = (V) => {
      var E, q = (E = V.name.value) != null ? E : V.index.value, {
        active: N,
        onChange: L,
        onClick: j
      } = e;
      C(e["onUpdate:active"], q), C(j, q), q !== N && C(L, q);
    }, O = () => g.find((V) => {
      var {
        name: E
      } = V;
      return e.active === E.value;
    }), T = (V) => g.find((E) => {
      var {
        index: q
      } = E;
      return (V ?? e.active) === q.value;
    }), S = () => {
      if (y.value !== 0) {
        var {
          active: V
        } = e;
        if (nr(V)) {
          var E = Un(V, 0, y.value - 1);
          return C(e["onUpdate:active"], E), T(E);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, B = (V) => {
      var {
        element: E
      } = V, q = E.value;
      q && (e.layoutDirection === "horizontal" ? (r.value = q.offsetWidth + "px", a.value = q.offsetLeft + "px") : (n.value = q.offsetHeight + "px", t.value = q.offsetTop + "px"));
    }, z = (V) => {
      var {
        element: E
      } = V;
      if (o.value) {
        var q = l.value, N = E.value;
        if (e.layoutDirection === "horizontal") {
          var L = N.offsetLeft + N.offsetWidth / 2 - q.offsetWidth / 2;
          ga(q, {
            left: L,
            animation: Uo
          });
        } else {
          var j = N.offsetTop + N.offsetHeight / 2 - q.offsetHeight / 2;
          ga(q, {
            top: j,
            animation: Uo
          });
        }
      }
    }, h = () => {
      var V = O() || T() || S();
      !V || V.disabled.value || (I(), B(V), z(V));
    }, k = /* @__PURE__ */ function() {
      var V = bs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), F = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: h,
      onTabClick: w
    };
    return b(F), se(() => y.value, /* @__PURE__ */ bs(function* () {
      yield Dr(), h();
    })), se(() => e.active, h), se(() => e.scrollable, h), pn(h), Pt(h), {
      stickyComponent: m,
      indicatorWidth: r,
      indicatorHeight: n,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Ue,
      toSizeUnit: be,
      n: NC,
      classes: DC,
      resize: h,
      resizeSticky: k,
      formatElevation: pr
    };
  }
});
zv.render = AC;
const ht = zv;
te(ht);
var V$ = ht, zC = {
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
  "onUpdate:active": Y()
};
function ws(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function LC(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ws(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ws(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: RC
} = re("tabs-items");
function UC(e, r) {
  var n = le("var-swipe");
  return p(), we(n, {
    class: c(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ce(() => [W(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
var Lv = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: Pn
  },
  props: zC,
  setup(e) {
    var r = P(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = xb(), o = (v) => n.find((f) => {
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
          setCurrent: b
        } = g;
        return b(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((b) => {
        var {
          index: y
        } = b;
        return y.value === v;
      }), g = (f = m.name.value) != null ? f : m.index.value;
      C(e["onUpdate:active"], g);
    }, d = () => r.value;
    return a({}), se(() => e.active, s), se(() => t.value, /* @__PURE__ */ LC(function* () {
      yield Dr(), s(e.active);
    })), {
      swipe: r,
      n: RC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Lv.render = UC;
const gt = Lv;
te(gt);
var M$ = gt;
const YC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, HC = {
  "--badge-default-color": "#555"
}, FC = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, jC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, WC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, GC = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, qC = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, XC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, KC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, ZC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, JC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, QC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, _C = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, xC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, eS = {
  "--popup-content-background-color": "#1e1e1e"
}, rS = {
  "--pull-refresh-background": "#303030"
}, nS = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, aS = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, tS = {
  "--select-scroller-background": "#303030"
}, oS = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, iS = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, lS = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, sS = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, uS = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, dS = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, vS = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, fS = {
  "--tabs-background": "#1e1e1e"
}, cS = {
  "--app-bar-color": "#272727"
}, mS = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, pS = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, hS = {
  "--menu-background-color": "#272727"
}, gS = {
  "--breadcrumb-inactive-color": "#aaa"
}, yS = {
  "--paper-background": "#303030"
}, bS = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, wS = {
  "--link-default-color": "#fff"
}, CS = {
  "--progress-label-color": "#fff"
}, SS = {
  "--options-text-color": "#fff"
}, kS = {
  "--countdown-text-color": "#fff"
}, $S = {
  "--watermark-content-color": "#ffffff"
};
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Vi.apply(this, arguments);
}
const TS = Vi({
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
}, FC, WC, jC, dS, KC, oS, fS, sS, eS, ZC, YC, qC, HC, vS, XC, rS, lS, iS, _C, uS, QC, tS, nS, GC, JC, xC, cS, mS, pS, hS, aS, gS, yS, bS, wS, CS, SS, kS, $S);
var PS = {
  dark: TS
}, I$ = null;
const Mi = PS;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], dr = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Cs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function OS(e) {
  return ["ampm", "24hr"].includes(e);
}
var VS = {
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
    validator: OS
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
  "onUpdate:modelValue": Y(),
  onChange: Y()
}, Rv = (e, r) => e === "24hr" || r === "am", tl = (e, r, n) => {
  var a = Cr.findIndex((o) => U(o) === U(n)), t = Rv(e, r) ? n : dr[a];
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
}, Uv = (e) => {
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
  } = tl(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: g,
      minute: b
    } = cr(i);
    f = g === v && a > b;
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
      minute: T
    } = cr(i), {
      hour: S,
      minute: I
    } = cr(s);
    f = S === v && a < I || O === v && a > T;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, Yv = (e) => {
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
  } = tl(t, o, l), m = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: y,
      second: w
    } = cr(s);
    m = b === f && y < i || y === i && a > w;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: T,
      second: S
    } = cr(u);
    m = O === f && T > i || T === i && a > S;
  }
  if (s && u) {
    var {
      hour: I,
      minute: B,
      second: z
    } = cr(s), {
      hour: h,
      minute: k,
      second: F
    } = cr(u);
    m = I === f && B < i || h === f && k > i || I === f && B === i && a > z || h === f && k === i && a < F;
  }
  return (r = e.allowedTime) != null && r.seconds && (g = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || g;
}, {
  n: MS,
  classes: IS
} = re("time-picker");
function BS(e, r) {
  return p(), $(
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
    ), (p(!0), $(
      Me,
      null,
      He(e.timeScales, (n, a) => (p(), $(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: K(e.getStyle(a, n, !1))
        },
        oe(n),
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
        Me,
        null,
        He(e.hours24, (n, a) => (p(), $(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: K(e.getStyle(a, n, !0))
          },
          oe(n),
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
var Hv = ee({
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
    } = r, a = P(null), t = P([]), o = P([]), l = R(() => ({
      transform: "rotate(" + U(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = R(() => e.type === "hour" ? Cr : Cs), u = (y, w) => {
      var O;
      y = (O = y) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var T = e.type === "minute" ? Uv : Yv, S = {
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
      return w && e.type === "minute" && Reflect.deleteProperty(S, "minute"), T(S);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var y = e.isInner ? dr[i.value] : s.value[i.value];
      return s.value === Cs ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, w) => w ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Rv(e.format, e.ampm))
          return t.value.includes(y);
        var w = Cr.findIndex((O) => O === y);
        return o.value.includes(w);
      }
      return u(y, !0);
    }, m = (y, w, O) => {
      var T = 2 * Math.PI / 12 * y - Math.PI / 2, S = 50 * (1 + Math.cos(T)), I = 50 * (1 + Math.sin(T)), B = () => v(y, O) ? f(w) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: z,
        color: h
      } = B();
      return {
        left: S + "%",
        top: I + "%",
        backgroundColor: z,
        color: h
      };
    }, g = () => {
      var {
        width: y,
        height: w
      } = Qe(a.value);
      return {
        width: y,
        height: w
      };
    }, b = () => {
      if (i.value !== void 0) {
        var y = e.ampm === "am" ? Cr : dr;
        return Sn(y[i.value], 2, "0");
      }
    };
    return se([i, () => e.isInner], (y, w) => {
      var [O, T] = y, [S, I] = w, B = O === S && T === I;
      if (!(B || e.type !== "hour" || i.value === void 0)) {
        var z = T ? dr[i.value] : b(), h = e.useSeconds ? ":" + e.time.second : "", k = z + ":" + e.time.minute + h;
        e.preventNextUpdate || n("update", k), n("change-prevent-update");
      }
    }), se(() => e.rad, (y, w) => {
      if (!(e.type === "hour" || y === void 0 || w === void 0)) {
        var O = y / 6 >= 0 ? y / 6 : y / 6 + 60, T = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (O !== T) {
          var S, {
            hourStr: I
          } = tl(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var B = de().minute(O).format("mm"), z = e.useSeconds ? ":" + e.time.second : "";
            S = I + ":" + B + z;
          }
          if (e.type === "second") {
            var h = de().second(O).format("ss"), k = e.useSeconds ? ":" + h : "";
            S = I + ":" + e.time.minute + k;
          }
          n("update", S);
        }
      }
    }), se([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [w, O, T] = y;
      if (t.value = [], w && !O) {
        var {
          hour: S
        } = cr(w), I = Cr.filter((G) => U(G) > S), B = dr.filter((G) => U(G) > S);
        t.value = [...I, ...B];
      }
      if (!w && O) {
        var {
          hour: z
        } = cr(O), h = Cr.filter((G) => U(G) < z), k = dr.filter((G) => U(G) < z);
        t.value = [...h, ...k];
      }
      if (w && O) {
        var {
          hour: F
        } = cr(w), {
          hour: V
        } = cr(O), E = Cr.filter((G) => U(G) < V || U(G) > F), q = dr.filter((G) => U(G) < V || U(G) > F);
        t.value = [...E, ...q];
      }
      if (T != null && T.hours) {
        var {
          hours: N
        } = T, L = Cr.filter((G) => !N(U(G))), j = dr.filter((G) => !N(U(G)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...L, ...j])];
      }
      o.value = t.value.map((G) => dr.findIndex((ne) => G === ne)).filter((G) => G >= 0);
    }, {
      immediate: !0
    }), {
      n: MS,
      classes: IS,
      hours24: dr,
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
Hv.render = BS;
const ES = Hv;
var {
  n: NS,
  classes: DS
} = re("time-picker"), AS = (e) => (hn(""), e = e(), gn(), e), zS = /* @__PURE__ */ AS(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), LS = {
  key: 0
};
function RS(e, r) {
  var n = le("clock");
  return p(), $(
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
          oe(e.time.hour),
          3
          /* TEXT, CLASS */
        ), zS, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          oe(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), $("span", LS, ":")) : x("v-if", !0), e.useSeconds ? (p(), $(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          oe(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), $(
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
        [Q(Ue, {
          name: e.n() + "-panel-fade"
        }, {
          default: ce(() => [(p(), we(n, {
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
var Fv = ee({
  name: "VarTimePicker",
  components: {
    Clock: ES
  },
  props: VS,
  setup(e) {
    var r = P(null), n = P(null), a = P(null), t = P(!1), o = P(!1), l = P(!1), i = P(!1), s = P(!1), u = P(void 0), d = P(0), v = P(0), f = P("hour"), m = P("am"), g = P(!1), b = P(!1), y = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Re({
      x: 0,
      y: 0
    }), O = Re({
      x: [],
      y: []
    }), T = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (D) => {
      C(e["onUpdate:modelValue"], D), C(e.onChange, D);
    }, I = (D) => D * 57.29577951308232, B = (D) => {
      i.value = !1, b.value = !1, f.value = D;
    }, z = (D) => {
      var {
        disableHour: X
      } = a.value, ae = Cr.findIndex((_) => U(_) === U(y.value.hour)), H = D === "am" ? Cr : dr, Z = [...H.slice(ae), ...H.slice(0, ae)];
      return Z.find((_, ve) => (o.value = ve !== 0, !X.includes(_)));
    }, h = (D) => {
      if (!e.readonly) {
        m.value = D;
        var X = z(D);
        if (X) {
          var ae = e.useSeconds ? ":" + y.value.second : "", H = Sn(X, 2, "0") + ":" + y.value.minute + ae;
          S(H);
        }
      }
    }, k = (D, X) => {
      var ae = D >= O.x[0] && D <= O.x[1], H = X >= O.y[0] && X <= O.y[1];
      return ae && H;
    }, F = (D) => {
      var X = e.format === "24hr" ? "HH" : "hh", {
        hour: ae,
        minute: H,
        second: Z
      } = cr(D);
      return {
        hour: de().hour(ae).format(X),
        minute: de().minute(H).format("mm"),
        second: de().second(Z).format("ss")
      };
    }, V = (D) => {
      var X = D / 30;
      return X >= 0 ? X : X + 12;
    }, E = () => {
      var {
        width: D,
        height: X
      } = a.value.getSize(), ae = w.x - D / 2 - 8, H = w.x + D / 2 + 8, Z = w.y - X / 2 - 8, _ = w.y + X / 2 + 8;
      return {
        rangeXMin: ae,
        rangeXMax: H,
        rangeYMin: Z,
        rangeYMax: _
      };
    }, q = (D, X, ae) => {
      var {
        disableHour: H
      } = a.value;
      l.value = k(D, X);
      var Z = Math.round(ae / 30) * 30 + 90, _ = V(Z), ve = t.value ? Cr[_] : dr[_];
      if (H.includes(ve) || (t.value = e.format === "24hr" ? k(D, X) : !1), t.value === l.value) {
        var Se = t.value || m.value === "pm" ? dr[_] : Cr[_];
        g.value = H.includes(Se), !g.value && (u.value = Z, i.value = !0);
      }
    }, N = (D) => {
      var {
        disableHour: X
      } = a.value, ae = Math.round(D / 6) * 6 + 90, H = ae / 6 >= 0 ? ae / 6 : ae / 6 + 60, Z = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      b.value = Uv(Z), !b.value && (d.value = ae, s.value = !0);
    }, L = (D) => {
      var {
        disableHour: X
      } = a.value, ae = Math.round(D / 6) * 6 + 90, H = ae / 6 >= 0 ? ae / 6 : ae / 6 + 60, Z = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: U(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      Yv(Z) || (v.value = ae);
    }, j = () => {
      var {
        left: D,
        top: X,
        width: ae,
        height: H
      } = Qe(r.value);
      if (w.x = D + ae / 2, w.y = X + H / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Z,
          rangeXMax: _,
          rangeYMin: ve,
          rangeYMax: Se
        } = E();
        O.x = [Z, _], O.y = [ve, Se];
      }
    }, G = (D) => {
      if (D.preventDefault(), !e.readonly) {
        j();
        var {
          clientX: X,
          clientY: ae
        } = D.touches[0], H = X - w.x, Z = ae - w.y, _ = Math.round(I(Math.atan2(Z, H)));
        f.value === "hour" ? q(X, ae, _) : f.value === "minute" ? N(_) : L(_);
      }
    }, ne = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, M = () => {
      o.value = !1;
    };
    return se(() => e.modelValue, (D) => {
      if (D) {
        var {
          hour: X,
          minute: ae,
          second: H
        } = cr(D), Z = de().hour(X).format("hh"), _ = de().hour(X).format("HH"), ve = de().minute(ae).format("mm"), Se = de().second(H).format("ss");
        u.value = (Z === "12" ? 0 : U(Z)) * 30, d.value = U(ve) * 6, v.value = U(Se) * 6, y.value = F(D), e.format !== "24hr" && (m.value = Sn("" + X, 2, "0") === _ && dr.includes(_) ? "pm" : "am"), t.value = e.format === "24hr" && dr.includes(_);
      }
    }, {
      immediate: !0
    }), {
      n: NS,
      classes: DS,
      getRad: T,
      time: y,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: G,
      checkPanel: B,
      checkAmpm: h,
      end: ne,
      update: S,
      changePreventUpdate: M,
      formatElevation: pr
    };
  }
});
Fv.render = RS;
const yt = Fv;
te(yt);
var B$ = yt, US = {
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
  onBeforeFilter: Y(),
  onBeforeRead: Y(),
  onAfterRead: Y(),
  onBeforeRemove: Y(),
  onRemove: Y(),
  onOversize: Y(),
  "onUpdate:modelValue": Y()
};
function Ss(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ro(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Ss(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ss(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: YS,
  classes: HS
} = re("uploader"), FS = 0, jS = ["onClick"], WS = ["onClick"], GS = ["src", "alt"], qS = ["multiple", "accept", "capture", "disabled"], XS = ["src"];
function KS(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = le("var-popup"), l = ze("ripple"), i = ze("hover");
  return p(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), $(
        Me,
        null,
        He(e.files, (s) => $e((p(), $("div", {
          class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
          key: s.id,
          onClick: (u) => e.preview(s)
        }, [A(
          "div",
          {
            class: c(e.n("file-name"))
          },
          oe(s.name || s.url),
          3
          /* TEXT, CLASS */
        ), e.removable ? (p(), $("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: $r((u) => e.handleRemove(s), ["stop"])
        }, [Q(n, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, WS)) : x("v-if", !0), s.cover ? (p(), $("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: K({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, GS)) : x("v-if", !0), A(
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
        )], 10, jS)), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? $e((p(), $(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [A("input", {
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
        }, null, 42, qS), W(e.$slots, "default", {}, () => [Q(n, {
          class: c(e.n("action-icon")),
          "var-uploader-cover": "",
          name: "plus"
        }, null, 8, ["class"]), Q(a, {
          hovering: e.hovering && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])])],
        2
        /* CLASS */
      )), [[l, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [i, e.handleHovering, "desktop"]]) : x("v-if", !0)],
      2
      /* CLASS */
    ), Q(t, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Zt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ce(() => [W(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]), Q(o, {
      class: c(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      show: e.showPreview,
      "onUpdate:show": r[2] || (r[2] = (s) => e.showPreview = s),
      onClosed: r[3] || (r[3] = (s) => e.currentPreview = null)
    }, {
      default: ce(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), $("video", {
          key: 0,
          class: c(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, XS)) : x("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var jv = ee({
  name: "VarUploader",
  directives: {
    Ripple: Xe,
    Hover: Ur
  },
  components: {
    VarIcon: Ne,
    VarPopup: Rr,
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  props: US,
  setup(e) {
    var r = P(null), n = P(!1), a = P(null), t = R(() => {
      var {
        maxlength: G,
        modelValue: {
          length: ne
        }
      } = e;
      return nr(G) ? ne + " / " + G : "";
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
    } = fn(), m = R(() => {
      var {
        modelValue: G,
        hideList: ne
      } = e;
      return ne ? [] : G;
    }), g = (G) => {
      var {
        disabled: ne,
        readonly: M,
        previewed: D
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || ne || M || !D)) {
        var {
          url: X
        } = G;
        if (Fe(X) && ul(X)) {
          zr(X);
          return;
        }
        Fe(X) && dl(X) && (a.value = G, n.value = !0);
      }
    }, b = (G) => ({
      id: FS++,
      url: "",
      cover: "",
      name: G.name,
      file: G,
      progress: 0
    }), y = (G) => {
      var ne = G.target, {
        files: M
      } = ne;
      return Array.from(M);
    }, w = (G) => new Promise((ne) => {
      if (!G.file.type.startsWith("image")) {
        ne(G);
        return;
      }
      var M = new FileReader();
      M.onload = () => {
        var D = M.result;
        G.cover = D, G.url = D, ne(G);
      }, M.readAsDataURL(G.file);
    }), O = (G) => G.map(w), T = (G) => {
      var {
        onBeforeRead: ne
      } = e;
      return G.map((M) => new Promise((D) => {
        ne || D({
          valid: !0,
          varFile: M
        });
        var X = jt(C(ne, Re(M)));
        Promise.all(X).then((ae) => {
          D({
            valid: ae.every(Boolean),
            varFile: M
          });
        });
      }));
    }, S = /* @__PURE__ */ function() {
      var G = Ro(function* (ne) {
        var {
          maxsize: M,
          maxlength: D,
          modelValue: X,
          onOversize: ae,
          onAfterRead: H,
          onBeforeFilter: Z,
          readonly: _,
          disabled: ve
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ve || _)) {
          var Se = (We) => We.filter((Ge) => Ge.file.size > U(M) ? (C(ae, Re(Ge)), !1) : !0), Ie = (We) => {
            var Ge = Math.min(We.length, U(D) - X.length);
            return We.slice(0, Ge);
          }, ie = /* @__PURE__ */ function() {
            var We = Ro(function* (Ge) {
              if (!Z)
                return Ge;
              var ue = jt(Z);
              for (var Ce of ue)
                Ge = yield Ce(Ge);
              return Ge;
            });
            return function(ue) {
              return We.apply(this, arguments);
            };
          }(), fe = y(ne), pe = fe.map(b);
          pe = yield ie(pe), pe = M != null ? Se(pe) : pe, pe = D != null ? Ie(pe) : pe;
          var Oe = yield Promise.all(O(pe)), je = yield Promise.all(T(Oe)), Ke = je.filter((We) => {
            var {
              valid: Ge
            } = We;
            return Ge;
          }).map((We) => {
            var {
              varFile: Ge
            } = We;
            return Ge;
          });
          C(e["onUpdate:modelValue"], [...X, ...Ke]), ne.target.value = "", Ke.forEach((We) => C(H, Re(We)));
        }
      });
      return function(M) {
        return G.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var G = Ro(function* (ne) {
        var {
          disabled: M,
          readonly: D,
          modelValue: X,
          onBeforeRemove: ae,
          onRemove: H
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || M || D)) {
          if (ae) {
            var Z = jt(C(ae, Re(ne)));
            if ((yield Promise.all(Z)).some((ve) => !ve))
              return;
          }
          var _ = X.filter((ve) => ve !== ne);
          C(H, Re(ne)), E("onRemove"), C(e["onUpdate:modelValue"], _);
        }
      });
      return function(M) {
        return G.apply(this, arguments);
      };
    }(), B = () => e.modelValue.filter((G) => G.state === "success"), z = () => e.modelValue.filter((G) => G.state === "error"), h = () => e.modelValue.filter((G) => G.state === "loading"), k = () => {
      r.value.click();
    }, F = () => {
      a.value = null, n.value = !1, zr.close();
    }, V = {
      getSuccess: B,
      getError: z,
      getLoading: h
    }, E = (G) => {
      Ae(() => {
        var {
          validateTrigger: ne,
          rules: M,
          modelValue: D
        } = e;
        s(ne, G, M, D, V);
      });
    }, q = !1, N = () => u(e.rules, e.modelValue, V), L = () => {
      q = !0, C(e["onUpdate:modelValue"], []), d();
    }, j = {
      validate: N,
      resetValidation: d,
      reset: L
    };
    return C(l, j), se(() => e.modelValue, () => {
      !q && E("onChange"), q = !1;
    }, {
      deep: !0
    }), {
      n: YS,
      classes: HS,
      formatElevation: pr,
      input: r,
      files: m,
      showPreview: n,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      toNumber: U,
      handleHovering: f,
      isHTMLSupportVideo: dl,
      isHTMLSupportImage: ul,
      preview: g,
      handleChange: S,
      handleRemove: I,
      getSuccess: B,
      getError: z,
      getLoading: h,
      validate: N,
      resetValidation: d,
      reset: L,
      chooseFile: k,
      closePreview: F,
      toSizeUnit: be
    };
  }
});
jv.render = KS;
const bt = jv;
te(bt);
var E$ = bt, ZS = {
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  content: {
    type: String
  },
  image: {
    type: String
  },
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
  fullscreen: {
    type: Boolean,
    default: !1
  },
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
function ks(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function $s(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ks(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ks(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Ii() {
  return Ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ii.apply(this, arguments);
}
var {
  n: JS,
  classes: QS
} = re("watermark"), _S = {
  ref: "svgRef"
}, xS = ["viewBox", "width", "height"], ek = ["width", "height"], rk = ["href", "xlink:href", "x", "y", "width", "height"];
function nk(e, r) {
  return p(), $(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default"), (p(), we(Zr, {
      to: "body",
      disabled: !e.fullscreen
    }, [A(
      "div",
      {
        ref: "containerRef",
        class: c(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
        style: K({
          backgroundImage: "url(" + e.watermarkUrl + ")",
          zIndex: e.zIndex
        })
      },
      [$e(A(
        "div",
        _S,
        [(p(), $("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 0 " + (e.width + e.gapX) + " " + (e.height + e.gapY),
          width: "" + (e.width + e.gapX),
          height: "" + (e.height + e.gapY),
          style: K({
            padding: "0 " + e.gapX + "px " + e.gapY + "px 0",
            opacity: e.opacity
          })
        }, [e.showContent() ? (p(), $("foreignObject", {
          key: 0,
          x: "0",
          y: "0",
          width: e.width,
          height: e.height
        }, [A(
          "div",
          {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: K({
              transform: "translate(" + e.offsetX + "px, " + e.offsetY + "px) rotate(" + e.rotate + "deg)",
              transformOrigin: "center"
            })
          },
          [W(e.$slots, "content", {}, () => [A(
            "span",
            {
              style: K(Ii({}, e.font, {
                fontSize: e.font.fontSize + "px",
                color: e.textColor
              }))
            },
            oe(e.content),
            5
            /* TEXT, STYLE */
          )])],
          4
          /* STYLE */
        )], 8, ek)) : x("v-if", !0), !e.$slots.content && e.image ? (p(), $("image", {
          key: 1,
          href: e.imageUrl,
          "xlink:href": e.imageUrl,
          x: e.offsetX,
          y: e.offsetY,
          width: e.width,
          height: e.height,
          style: K({
            transform: "rotate(" + e.rotate + "deg)",
            transformOrigin: "center"
          })
        }, null, 12, rk)) : x("v-if", !0)], 12, xS))],
        512
        /* NEED_PATCH */
      ), [[Lr, !1]])],
      6
      /* CLASS, STYLE */
    )], 8, ["disabled"]))],
    2
    /* CLASS */
  );
}
var Wv = ee({
  name: "VarWatermark",
  props: ZS,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(""), t = P(""), o = P(""), l = P(null), i = P(null), s = () => !!(n.content || e.content && !e.image), u = /* @__PURE__ */ function() {
      var m = $s(function* () {
        return new Promise((g) => {
          var b = document.createElement("canvas"), y = b.getContext("2d"), w = new Image();
          w.crossOrigin = "anonymous", w.referrerPolicy = "no-referrer", w.src = e.image, w.onload = () => {
            b.width = w.width, b.height = w.height, y.drawImage(w, 0, 0), g(b.toDataURL());
          };
        });
      });
      return function() {
        return m.apply(this, arguments);
      };
    }(), d = (m) => {
      var g = new Blob([m], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(g);
    }, v = () => {
      a.value && URL.revokeObjectURL(a.value);
    }, f = /* @__PURE__ */ function() {
      var m = $s(function* () {
        o.value = Bn(i.value).color, e.image && (t.value = yield u()), yield Ae(), v(), a.value = d(l.value.innerHTML);
      });
      return function() {
        return m.apply(this, arguments);
      };
    }();
    return se(() => [e.image, e.font, e.content, e.height, e.width, e.rotate, e.gapX, e.gapY, e.offsetX, e.offsetY, e.opacity], f, {
      deep: !0
    }), Ct(f), St(v), {
      n: JS,
      classes: QS,
      svgRef: l,
      containerRef: i,
      watermarkUrl: a,
      imageUrl: t,
      textColor: o,
      showContent: s,
      resize: f
    };
  }
});
Wv.render = nk;
const wt = Wv;
te(wt);
var N$ = wt;
const ak = "2.14.0";
function tk(e) {
  qr.install && e.use(qr), ya.install && e.use(ya), wa.install && e.use(wa), Ca.install && e.use(Ca), Sa.install && e.use(Sa), Hn.install && e.use(Hn), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), Pa.install && e.use(Pa), vr.install && e.use(vr), Oa.install && e.use(Oa), Va.install && e.use(Va), Fn.install && e.use(Fn), jn.install && e.use(jn), Ma.install && e.use(Ma), Wn.install && e.use(Wn), Ia.install && e.use(Ia), Ba.install && e.use(Ba), Ea.install && e.use(Ea), yr.install && e.use(yr), Na.install && e.use(Na), Aa.install && e.use(Aa), za.install && e.use(za), Xr.install && e.use(Xr), La.install && e.use(La), Xn.install && e.use(Xn), Ya.install && e.use(Ya), Ha.install && e.use(Ha), Tn.install && e.use(Tn), ar.install && e.use(ar), Ur.install && e.use(Ur), Pr.install && e.use(Pr), Ne.install && e.use(Ne), Fa.install && e.use(Fa), zr.install && e.use(zr), ja.install && e.use(ja), Wa.install && e.use(Wa), Qn.install && e.use(Qn), ba.install && e.use(ba), Ga.install && e.use(Ga), qa.install && e.use(qa), vn.install && e.use(vn), Si.install && e.use(Si), qo.install && e.use(qo), Mn.install && e.use(Mn), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), In.install && e.use(In), Rr.install && e.use(Rr), Qa.install && e.use(Qa), _a.install && e.use(_a), xa.install && e.use(xa), et.install && e.use(et), rt.install && e.use(rt), nt.install && e.use(nt), Xe.install && e.use(Xe), at.install && e.use(at), tt.install && e.use(tt), ot.install && e.use(ot), it.install && e.use(it), Oi.install && e.use(Oi), st.install && e.use(st), ut.install && e.use(ut), dt.install && e.use(dt), Vn.install && e.use(Vn), vt.install && e.use(vt), Pn.install && e.use(Pn), On.install && e.use(On), ft.install && e.use(ft), ct.install && e.use(ct), mt.install && e.use(mt), pt.install && e.use(pt), ht.install && e.use(ht), gt.install && e.use(gt), Mi.install && e.use(Mi), yt.install && e.use(yt), Jn.install && e.use(Jn), bt.install && e.use(bt), wt.install && e.use(wt);
}
const D$ = {
  version: ak,
  install: tk,
  ActionSheet: qr,
  AppBar: ya,
  Avatar: wa,
  AvatarGroup: Ca,
  BackTop: Sa,
  Badge: Hn,
  BottomNavigation: ka,
  BottomNavigationItem: $a,
  Breadcrumb: Ta,
  Breadcrumbs: Pa,
  Button: vr,
  ButtonGroup: Oa,
  Card: Va,
  Cell: Fn,
  Checkbox: jn,
  CheckboxGroup: Ma,
  Chip: Wn,
  Col: Ia,
  Collapse: Ba,
  CollapseItem: Ea,
  Context: yr,
  Countdown: Na,
  Counter: Aa,
  DatePicker: za,
  Dialog: Xr,
  Divider: La,
  Drag: Xn,
  Ellipsis: Ya,
  Fab: Ha,
  Form: Tn,
  FormDetails: ar,
  Hover: Ur,
  HoverOverlay: Pr,
  Icon: Ne,
  Image: Fa,
  ImagePreview: zr,
  IndexAnchor: ja,
  IndexBar: Wa,
  Input: Qn,
  Lazy: ba,
  Link: Ga,
  List: qa,
  Loading: vn,
  LoadingBar: Si,
  Locale: qo,
  Menu: Mn,
  Option: Xa,
  Overlay: Ka,
  Pagination: Za,
  Paper: Ja,
  Picker: In,
  Popup: Rr,
  Progress: Qa,
  PullRefresh: _a,
  Radio: xa,
  RadioGroup: et,
  Rate: rt,
  Result: nt,
  Ripple: Xe,
  Row: at,
  Select: tt,
  Skeleton: ot,
  Slider: it,
  Snackbar: Oi,
  Space: st,
  Step: ut,
  Steps: dt,
  Sticky: Vn,
  StyleProvider: vt,
  Swipe: Pn,
  SwipeItem: On,
  Switch: ft,
  Tab: ct,
  TabItem: mt,
  Table: pt,
  Tabs: ht,
  TabsItems: gt,
  Themes: Mi,
  TimePicker: yt,
  Tooltip: Jn,
  Uploader: bt,
  Watermark: wt
};
export {
  qr as ActionSheet,
  ya as AppBar,
  wa as Avatar,
  Ca as AvatarGroup,
  Sa as BackTop,
  Hn as Badge,
  ka as BottomNavigation,
  $a as BottomNavigationItem,
  Ta as Breadcrumb,
  Pa as Breadcrumbs,
  vr as Button,
  Oa as ButtonGroup,
  Va as Card,
  Fn as Cell,
  jn as Checkbox,
  Ma as CheckboxGroup,
  Wn as Chip,
  Ia as Col,
  Ba as Collapse,
  Ea as CollapseItem,
  yr as Context,
  Na as Countdown,
  Aa as Counter,
  za as DatePicker,
  Xr as Dialog,
  La as Divider,
  Xn as Drag,
  Ya as Ellipsis,
  Ha as Fab,
  Tn as Form,
  ar as FormDetails,
  Ur as Hover,
  Pr as HoverOverlay,
  Ne as Icon,
  Fa as Image,
  zr as ImagePreview,
  ja as IndexAnchor,
  Wa as IndexBar,
  Qn as Input,
  ba as Lazy,
  Ga as Link,
  qa as List,
  vn as Loading,
  Si as LoadingBar,
  qo as Locale,
  Mn as Menu,
  Xa as Option,
  Ka as Overlay,
  Zo as PIXEL,
  Za as Pagination,
  Ja as Paper,
  In as Picker,
  Rr as Popup,
  Qa as Progress,
  _a as PullRefresh,
  xa as Radio,
  et as RadioGroup,
  rt as Rate,
  nt as Result,
  Xe as Ripple,
  at as Row,
  nl as SNACKBAR_TYPE,
  tt as Select,
  ot as Skeleton,
  it as Slider,
  Oi as Snackbar,
  st as Space,
  ut as Step,
  dt as Steps,
  Vn as Sticky,
  vt as StyleProvider,
  Pn as Swipe,
  On as SwipeItem,
  ft as Switch,
  ct as Tab,
  mt as TabItem,
  pt as Table,
  ht as Tabs,
  gt as TabsItems,
  Mi as Themes,
  yt as TimePicker,
  Jn as Tooltip,
  bt as Uploader,
  wt as Watermark,
  vk as _ActionSheetComponent,
  fk as _AppBarComponent,
  mk as _AvatarComponent,
  pk as _AvatarGroupComponent,
  wk as _BackTopComponent,
  Ck as _BadgeComponent,
  Sk as _BottomNavigationComponent,
  kk as _BottomNavigationItemComponent,
  $k as _BreadcrumbComponent,
  Tk as _BreadcrumbsComponent,
  bk as _ButtonComponent,
  Pk as _ButtonGroupComponent,
  Ok as _CardComponent,
  Vk as _CellComponent,
  Ik as _CheckboxComponent,
  Bk as _CheckboxGroupComponent,
  Ek as _ChipComponent,
  Nk as _ColComponent,
  Dk as _CollapseComponent,
  Ak as _CollapseItemComponent,
  ik as _ContextComponent,
  zk as _CountdownComponent,
  Lk as _CounterComponent,
  Rk as _DatePickerComponent,
  Uk as _DialogComponent,
  Yk as _DividerComponent,
  Hk as _DragComponent,
  jk as _EllipsisComponent,
  Wk as _FabComponent,
  Gk as _FormComponent,
  Mk as _FormDetailsComponent,
  yk as _HoverComponent,
  gk as _HoverOverlayComponent,
  uk as _IconComponent,
  qk as _ImageComponent,
  Zk as _ImagePreviewComponent,
  Qk as _IndexAnchorComponent,
  _k as _IndexBarComponent,
  xk as _InputComponent,
  ck as _LazyComponent,
  e$ as _LinkComponent,
  r$ as _ListComponent,
  n$ as _LoadingBarComponent,
  hk as _LoadingComponent,
  dk as _LocaleComponent,
  a$ as _MenuComponent,
  t$ as _OptionComponent,
  o$ as _OverlayComponent,
  i$ as _PaginationComponent,
  l$ as _PaperComponent,
  s$ as _PickerComponent,
  sk as _PopupComponent,
  u$ as _ProgressComponent,
  d$ as _PullRefreshComponent,
  v$ as _RadioComponent,
  f$ as _RadioGroupComponent,
  c$ as _RateComponent,
  m$ as _ResultComponent,
  lk as _RippleComponent,
  p$ as _RowComponent,
  h$ as _SelectComponent,
  g$ as _SkeletonComponent,
  y$ as _SliderComponent,
  b$ as _SnackbarComponent,
  w$ as _SpaceComponent,
  C$ as _StepComponent,
  S$ as _StepsComponent,
  Jk as _StickyComponent,
  k$ as _StyleProviderComponent,
  Xk as _SwipeComponent,
  Kk as _SwipeItemComponent,
  $$ as _SwitchComponent,
  T$ as _TabComponent,
  P$ as _TabItemComponent,
  O$ as _TableComponent,
  V$ as _TabsComponent,
  M$ as _TabsItemsComponent,
  I$ as _ThemesComponent,
  B$ as _TimePickerComponent,
  Fk as _TooltipComponent,
  E$ as _UploaderComponent,
  N$ as _WatermarkComponent,
  Lf as actionSheetProps,
  Ri as add,
  Wf as appBarProps,
  pc as avatarGroupProps,
  uc as avatarProps,
  qc as backTopProps,
  _c as badgeProps,
  sm as bottomNavigationItemProps,
  nm as bottomNavigationProps,
  mm as breadcrumbProps,
  wm as breadcrumbsProps,
  Uc as buttonProps,
  Bm as cardProps,
  Lm as cellProps,
  ep as checkboxGroupProps,
  qm as checkboxProps,
  ip as chipProps,
  fp as colProps,
  Sp as collapseItemProps,
  yp as collapseProps,
  Pp as countdownProps,
  Sh as counterProps,
  jh as datePickerProps,
  D$ as default,
  Ze as defaultLazyOptions,
  ig as dialogProps,
  vg as dividerProps,
  pg as dragProps,
  Ks as enUS,
  Hm as formDetailsProps,
  Wy as formProps,
  qs as iconProps,
  xs as imageCache,
  vb as imagePreviewProps,
  Zy as imageProps,
  $b as indexAnchorProps,
  Vb as indexBarProps,
  Ub as inputProps,
  tk as install,
  Kb as linkProps,
  _b as listProps,
  l0 as loadingBarProps,
  tn as loadingProps,
  b0 as menuProps,
  Js as merge,
  T0 as optionProps,
  M0 as overlayProps,
  _e as pack,
  Zs as packs,
  B0 as paginationProps,
  z0 as paperProps,
  Y0 as pickerProps,
  Ot as popupProps,
  Q0 as progressProps,
  t1 as pullRefreshProps,
  m1 as radioGroupProps,
  l1 as radioProps,
  y1 as rateProps,
  S1 as resultProps,
  sw as rowProps,
  cw as selectProps,
  yw as skeletonProps,
  kw as sliderProps,
  Cv as snackbarProps,
  Xw as spaceProps,
  Jw as stepProps,
  tC as stepsProps,
  Kt as stickyProps,
  lC as styleProviderProps,
  Id as swipeProps,
  dC as switchProps,
  SC as tabItemProps,
  gC as tabProps,
  PC as tableProps,
  zC as tabsItemsProps,
  EC as tabsProps,
  VS as timePickerProps,
  Vy as tooltipProps,
  US as uploaderProps,
  Ui as use,
  fn as useHoverOverlay,
  Li as useLocale,
  ak as version,
  zi as zhCN
};
