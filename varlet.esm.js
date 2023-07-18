import { reactive as Re, onMounted as ao, nextTick as Le, onActivated as hn, isRef as jv, watch as se, onBeforeUnmount as to, onDeactivated as Qn, unref as la, onUnmounted as oo, inject as Wv, getCurrentInstance as _n, computed as R, provide as Gv, isVNode as bt, ref as P, Comment as qv, Fragment as Me, createApp as Xv, h as Cs, onBeforeMount as Kv, defineComponent as ee, createVNode as Q, Teleport as Jr, Transition as Ue, withDirectives as $e, vShow as qr, mergeProps as De, openBlock as h, createBlock as we, resolveDynamicComponent as xn, normalizeClass as c, normalizeStyle as q, resolveComponent as le, resolveDirective as Ae, withCtx as ce, createElementVNode as D, renderSlot as j, toDisplayString as ie, createElementBlock as $, renderList as He, createCommentVNode as x, onUpdated as wt, createTextVNode as ke, pushScopeId as gn, popScopeId as yn, withModifiers as $r, normalizeProps as Ct, guardReactiveProps as io, vModelText as Zv, createSlots as Gt, withKeys as nl, toRaw as al, TransitionGroup as Jv } from "vue";
var Ss = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, WS = Re(Ss);
const yr = Re(Ss), Fe = (e) => typeof e == "string", ks = (e) => typeof e == "boolean", nr = (e) => typeof e == "number", Vi = (e) => Object.prototype.toString.call(e) === "[object Object]", Qv = (e) => typeof e == "object" && e !== null, ea = (e) => typeof e == "function", Ve = (e) => Array.isArray(e), _v = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Mi = (e) => e === window, L = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : ks(e) ? Number(e) : e, qt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, Ii = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, ra = () => typeof window < "u", tl = (e) => [...new Set(e)], $s = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), xv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), ef = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ut = (e) => Ve(e) ? e : [e], Rn = (e, r, n) => Math.min(n, Math.max(r, e)), rf = (e, r) => Rn(e, 0, r.length - 1);
var ol = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), il = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), nf = (e) => {
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
}, Lo = (e) => e, ll = (e) => Math.pow(e, 3), Ts = (e) => e < 0.5 ? ll(e * 2) / 2 : 1 - ll((1 - e) * 2) / 2, lo = (e, r) => e ?? r, Ps = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, kn = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Tr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function sl(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
}
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
function na(e) {
  return window.getComputedStyle(e);
}
function Qe(e) {
  if (Mi(e)) {
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
    return Ro({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function af(e) {
  var {
    left: r
  } = Qe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ul(e) {
  var {
    top: r
  } = Qe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function ma(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Ei(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function tf(e) {
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
function Vo(e) {
  var {
    transform: r
  } = na(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function dn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = na(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function of(e) {
  for (var r = [], n = e; !Mi(n); )
    n = dn(n), r.push(n);
  return r;
}
function Os(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Tr(r, "target element cannot found"), n;
  }
  if (Qv(e))
    return e;
  Tr(r, 'type of prop "target" should be a selector or an element object');
}
function lf() {
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
var Vs = (e) => Fe(e) && e.endsWith("rem"), sf = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), uf = (e) => Fe(e) && e.endsWith("px") || nr(e), df = (e) => Fe(e) && e.endsWith("%"), Ms = (e) => Fe(e) && e.endsWith("vw"), Is = (e) => Fe(e) && e.endsWith("vh"), Es = (e) => Fe(e) && e.endsWith("vmin"), Bs = (e) => Fe(e) && e.endsWith("vmax"), vf = (e) => Fe(e) && e.startsWith("calc("), ff = (e) => Fe(e) && e.startsWith("var("), ze = (e) => {
  if (nr(e))
    return e;
  if (uf(e))
    return +e.replace("px", "");
  if (!ra())
    return 0;
  var {
    vw: r,
    vh: n,
    vMin: a,
    vMax: t
  } = lf();
  if (Ms(e))
    return +e.replace("vw", "") * r / 100;
  if (Is(e))
    return +e.replace("vh", "") * n / 100;
  if (Es(e))
    return +e.replace("vmin", "") * a / 100;
  if (Bs(e))
    return +e.replace("vmax", "") * t / 100;
  if (Vs(e)) {
    var o = +e.replace("rem", ""), l = na(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return Fe(e) ? L(e) : 0;
}, be = (e) => {
  if (e != null)
    return df(e) || Ms(e) || Is(e) || sf(e) || Vs(e) || vf(e) || ff(e) || Es(e) || Bs(e) ? e : ze(e) + "px";
}, ur = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = be(e), a = n.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = Ps();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function dl(e) {
  var r = Ps();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function so(e) {
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
function cf() {
  return new Promise((e) => {
    br(e);
  });
}
function pa(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = ma(e), s = Ei(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (n - i) * o(v), p = s + (a - s) * o(v);
        e.scrollTo(p, f), br(d);
      } else
        e.scrollTo(a, n), u();
    };
    br(d);
  });
}
function Ns(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + xv(a);
    return r[o] = t, r;
  }, {});
}
function mf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Xt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function or(e) {
  let r = !1;
  ao(() => {
    e(), Le(() => {
      r = !0;
    });
  }), hn(() => {
    r && e();
  });
}
function vn(e, r, n, a = {}) {
  if (!ra())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (p) => ea(p) ? p() : la(p), u = (p) => {
    if (l || i)
      return;
    const y = s(p);
    y && (y.addEventListener(r, n, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (p) => {
    if (!l || i)
      return;
    const y = s(p);
    y && (y.removeEventListener(r, n, {
      capture: o
    }), l = !1);
  };
  let v;
  jv(e) && (v = se(() => e.value, (p, y) => {
    d(y), u(p);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return or(() => {
    u(e);
  }), to(() => {
    d(e);
  }), Qn(() => {
    d(e);
  }), f;
}
function Ds(e, r, n) {
  if (!ra())
    return;
  vn(document, r, (t) => {
    const o = ea(e) ? e() : la(e);
    o && !o.contains(t.target) && n(t);
  });
}
function uo(e) {
  oo(() => {
    e();
  }), Qn(() => {
    e();
  });
}
var pf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function hf(e) {
  const r = _n();
  return e in r.provides;
}
function ir(e) {
  if (!hf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Wv(e), { childInstances: n, collect: a, clear: t } = r, o = pf(r, ["childInstances", "collect", "clear"]), l = _n();
  return {
    index: R(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      ao(() => {
        Le().then(() => {
          a(l, u);
        });
      }), to(() => {
        Le().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function gf(e) {
  const r = [], n = (a) => {
    if (a != null && a.component) {
      n(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      bt(t) && (r.push(t), n(t));
    });
  };
  return n(e), r;
}
function lr(e) {
  const r = _n(), n = Re([]), a = [], t = R(() => n.length), o = () => {
    const u = gf(r.subTree);
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
      Gv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function St(e) {
  vn(() => window, "resize", e, { passive: !0 }), vn(() => window, "orientationchange", e, { passive: !0 });
}
function yf(e, r) {
  const n = P(!1);
  return se(e, (a) => {
    r === a && (n.value = !0);
  }, { immediate: !0 }), n;
}
function vl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function fl(e) {
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
function bf(e) {
  var r = Xv(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: r.mount(n),
    unmount() {
      r.unmount(), document.body.removeChild(n);
    }
  };
}
function aa(e, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {});
  var a = {
    setup() {
      return () => Cs(e, Uo({}, r, n));
    }
  }, {
    unmount: t
  } = bf(a);
  return {
    unmountInstance: t
  };
}
function As(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== qv) {
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
    var t = fl(function* (o, l, i) {
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
    var t = fl(function* (o, l, i, s, u) {
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
function wf(e) {
  vn(() => window, "hashchange", e), vn(() => window, "popstate", e);
}
function vo() {
  var e = P(!1);
  return hn(() => {
    e.value = !1;
  }), Qn(() => {
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
function S(e) {
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
function hr(e, r) {
  return e === !1 ? null : (e === !0 && r && (e = r), "var-elevation--" + e);
}
function zs(e, r, n) {
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
        l ? l(i, d) : S(e[i], d);
      }
    });
  var u = P(s());
  return se(() => e[r], () => {
    u.value = s();
  }), se(() => u.value, (d) => {
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
  n: Ls
} = re("ripple"), cl = 250;
function Cf(e) {
  var {
    zIndex: r,
    position: n
  } = na(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function Sf(e, r) {
  var {
    top: n,
    left: a
  } = Qe(e), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = r.touches[0].clientX - a, u = r.touches[0].clientY - n, d = (t - l * 2) / 2, v = (o - l * 2) / 2, f = s - l, p = u - l;
  return {
    x: f,
    y: p,
    centerX: d,
    centerY: v,
    size: i
  };
}
function Rs(e) {
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
      } = Sf(this, e), s = document.createElement("div");
      s.classList.add(Ls()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), Cf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function Yo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Ls());
    if (n.length) {
      var a = n[n.length - 1], t = cl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, cl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function Us() {
  if (!(!mf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function kf(e, r) {
  var n;
  e._ripple = Kt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: Yo.bind(e)
  }), e.addEventListener("touchstart", Rs, {
    passive: !0
  }), e.addEventListener("touchmove", Us, {
    passive: !0
  }), e.addEventListener("dragstart", Yo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function $f(e) {
  e.removeEventListener("touchstart", Rs), e.removeEventListener("touchmove", Us), e.removeEventListener("dragstart", Yo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Tf(e, r) {
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
var Ys = {
  mounted: kf,
  unmounted: $f,
  updated: Tf,
  install(e) {
    e.directive("ripple", this);
  }
}, GS = Ys;
const Xe = Ys;
function Pf(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var kt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Pf
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
    type: [String, Object],
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
function Hs() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function It(e) {
  yr.locks[e] = 1, Hs();
}
function Et(e) {
  delete yr.locks[e], Hs();
}
function fo(e, r) {
  var {
    uid: n
  } = _n();
  r && se(r, (a) => {
    a === !1 ? Et(n) : a === !0 && e() === !0 && It(n);
  }), se(e, (a) => {
    r && r() === !1 || (a === !0 ? It(n) : Et(n));
  }), Kv(() => {
    r && r() === !1 || e() === !0 && It(n);
  }), oo(() => {
    r && r() === !1 || e() === !0 && Et(n);
  }), hn(() => {
    r && r() === !1 || e() === !0 && It(n);
  }), Qn(() => {
    r && r() === !1 || e() === !0 && Et(n);
  });
}
function $t(e, r) {
  var n = P(yr.zIndex);
  return se(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
var Fs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Of() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(Fs);
  return {
    index: n,
    popup: r,
    bindPopup: e
  };
}
function Vf() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Fs);
  return {
    length: n,
    popupItems: r,
    bindPopupItems: e
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
function ml(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var {
  n: Ir,
  classes: Mo
} = re("popup");
const Rr = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: kt,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = yf(() => e.show, !0), {
      zIndex: o
    } = $t(() => e.show, 3), {
      disabled: l
    } = vo(), {
      bindPopupItems: i
    } = Vf(), s = () => {
      var {
        closeOnClickOverlay: f,
        onClickOverlay: p
      } = e;
      S(p), f && S(e["onUpdate:show"], !1);
    }, u = () => {
      var {
        overlayClass: f = "",
        overlayStyle: p
      } = e;
      return Q("div", {
        class: Mo(Ir("overlay"), f),
        style: Ho({
          zIndex: o.value - 1
        }, p),
        onClick: s
      }, null);
    }, d = () => $e(Q("div", De({
      class: Mo(Ir("content"), Ir("--" + e.position), [e.defaultStyle, Ir("--content-background-color")], [e.defaultStyle, Ir("$-elevation--3")], [e.safeArea, Ir("--safe-area")], [e.safeAreaTop, Ir("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && S(n.default)]), [[qr, e.show]]), v = () => {
      var f;
      return Q(Ue, {
        name: Ir("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [$e(Q("div", {
          class: Mo(Ir("$--box"), Ir()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), Q(Ue, {
          name: e.transition || Ir("$-pop-" + e.position)
        }, ml(f = d()) ? f : {
          default: () => [f]
        })]), [[qr, e.show]])]
      });
    };
    return fo(() => e.show, () => e.lockScroll), se(() => e.show, (f) => {
      S(f ? e.onOpen : e.onClose);
    }), i({
      show: R(() => e.show)
    }), wf(() => S(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var p;
        return Q(Jr, {
          to: f,
          disabled: l.value
        }, ml(p = v()) ? p : {
          default: () => [p]
        });
      }
      return v();
    };
  }
});
te(Rr);
var qS = Rr, js = {
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
function pl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Mf(e) {
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
  n: If,
  classes: Ef
} = re("icon");
function Bf(e, r) {
  return h(), we(xn(e.isURL(e.name) ? "img" : "i"), {
    class: c(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.animateInProgress, e.animationClass == null ? e.n("--shrinking") : e.animationClass])),
    style: q({
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
var Ws = ee({
  name: "VarIcon",
  props: js,
  setup(e) {
    var r = P(""), n = P(!1), a = /* @__PURE__ */ function() {
      var t = Mf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield Le(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return se(() => e.name, a, {
      immediate: !0
    }), {
      n: If,
      classes: Ef,
      nextName: r,
      animateInProgress: n,
      isURL: _v,
      toNumber: L,
      toSizeUnit: be
    };
  }
});
Ws.render = Bf;
const Ne = Ws;
te(Ne);
var XS = Ne;
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
var Nf = Fo({
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
}, xe(kt, [
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
const Bi = {
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
}, Gs = {
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
function Ni() {
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
    e[o] = jo({}, e[o], l), a(o);
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
  packs: qs,
  pack: _e,
  add: Di,
  use: Ai,
  merge: Xs
} = Ni();
Di("zh-CN", Bi);
Ai("zh-CN");
var KS = {
  zhCN: Bi,
  enUS: Gs,
  packs: qs,
  pack: _e,
  add: Di,
  use: Ai,
  merge: Xs,
  useLocale: Ni
};
const Wo = {
  zhCN: Bi,
  enUS: Gs,
  packs: qs,
  pack: _e,
  add: Di,
  use: Ai,
  merge: Xs,
  useLocale: Ni
};
var {
  n: Df,
  classes: Af
} = re("action-sheet"), zf = ["onClick"];
function Lf(e, r) {
  var n = le("var-icon"), a = le("var-popup"), t = Ae("ripple");
  return h(), we(a, De({
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
    default: ce(() => [D(
      "div",
      De({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [j(e.$slots, "title", {}, () => [D(
        "div",
        {
          class: c(e.n("title"))
        },
        ie(e.dt(e.title, e.pack.actionSheetTitle)),
        3
        /* TEXT, CLASS */
      )]), j(e.$slots, "actions", {}, () => [(h(!0), $(
        Me,
        null,
        He(e.actions, (o) => $e((h(), $("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: q({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (h(), we(n, {
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
        )], 14, zf)), [[t, {
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
var Ks = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: Xe
  },
  components: {
    VarPopup: Rr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Nf,
  setup(e) {
    var r = P(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        S(l, t), o && S(e["onUpdate:show"], !1);
      }
    }, a = (t) => S(e["onUpdate:show"], t);
    return se(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: Df,
      classes: Af,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: _e,
      dt: lo,
      handleSelect: n
    };
  }
});
Ks.render = Lf;
const Tt = Ks;
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
var nn, zi = {};
function Rf(e) {
  return e === void 0 && (e = {}), Go({}, zi, e);
}
function Xr(e) {
  return ra() ? new Promise((r) => {
    Xr.close();
    var n = Re(Rf(e));
    n.teleport = "body", nn = n;
    var {
      unmountInstance: a
    } = aa(Tt, n, {
      onSelect: (t) => {
        S(n.onSelect, t), r(t);
      },
      onClose: () => {
        S(n.onClose), r("close");
      },
      onClosed: () => {
        S(n.onClosed), a(), nn === n && (nn = null);
      },
      onRouteChange: () => {
        a(), nn === n && (nn = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }) : Promise.resolve();
}
Xr.setDefaultOptions = function(e) {
  zi = e;
};
Xr.resetDefaultOptions = function() {
  zi = {};
};
Xr.close = function() {
  if (nn != null) {
    var e = nn;
    nn = null, Le().then(() => {
      e.show = !1;
    });
  }
};
Xr.Component = Tt;
te(Tt);
te(Tt, Xr);
var ZS = Tt;
function Uf(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
}
var Yf = {
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
    validator: Uf
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
  n: Hf,
  classes: Ff
} = re("app-bar");
function jf(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: q(e.rootStyles)
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
        [j(e.$slots, "left"), e.titlePosition === "left" ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingLeft: e.paddingLeft
            })
          },
          [j(e.$slots, "default", {}, () => [ke(
            ie(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [j(e.$slots, "default", {}, () => [ke(
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
        [e.titlePosition === "right" ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingRight: e.paddingRight
            })
          },
          [j(e.$slots, "default", {}, () => [ke(
            ie(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), j(e.$slots, "right")],
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
var Zs = ee({
  name: "VarAppBar",
  props: Yf,
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
    return or(o), wt(o), {
      n: Hf,
      classes: Ff,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Zs.render = jf;
const ha = Zs;
te(ha);
var JS = ha;
function hl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function co(e) {
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
var Wf = "background-image", Gf = "lazy-loading", qf = "lazy-error", gl = "lazy-attempt", Xf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Xo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Un = [], Zt = [], Js = nf(100), Ze = {
  loading: Xo,
  error: Xo,
  attempt: 3,
  throttleWait: 300,
  events: Xf
}, Li = Ii(Pt, Ze.throttleWait);
function mo(e, r) {
  e._lazy.arg === Wf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Kf(e) {
  e._lazy.loading && mo(e, e._lazy.loading), Pt();
}
function Zf(e) {
  e._lazy.error && mo(e, e._lazy.error), e._lazy.state = "error", Ui(e), Pt();
}
function Qs(e, r) {
  mo(e, r), e._lazy.state = "success", Ui(e), Pt();
}
function Jf(e) {
  var r;
  Zt.includes(e) || (Zt.push(e), (r = Ze.events) == null || r.forEach((n) => {
    e.addEventListener(n, Li, {
      passive: !0
    });
  }));
}
function Qf() {
  Zt.forEach((e) => {
    var r;
    (r = Ze.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Li);
    });
  }), Zt.length = 0;
}
function _f(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Gf)) != null ? n : Ze.loading,
    error: (a = e.getAttribute(qf)) != null ? a : Ze.error,
    attempt: e.getAttribute(gl) ? Number(e.getAttribute(gl)) : Ze.attempt
  };
  e._lazy = qo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), mo(e, Xo), S(Ze.filter, e._lazy);
}
function xf(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Js.add(r), Qs(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Zf(e) : _s(e);
  });
}
function _s(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (Js.has(r)) {
      Qs(e, r), e._lazy.attemptLock = !1;
      return;
    }
    Kf(e), xf(e, r);
  }
}
function Ri(e) {
  return Ko.apply(this, arguments);
}
function Ko() {
  return Ko = co(function* (e) {
    yield Dr(), tf(e) && _s(e);
  }), Ko.apply(this, arguments);
}
function Pt() {
  Un.forEach((e) => Ri(e));
}
function ec(e) {
  return Zo.apply(this, arguments);
}
function Zo() {
  return Zo = co(function* (e) {
    !Un.includes(e) && Un.push(e), of(e).forEach(Jf), yield Ri(e);
  }), Zo.apply(this, arguments);
}
function Ui(e) {
  qt(Un, e), Un.length === 0 && Qf();
}
function rc(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function xs(e, r) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = co(function* (e, r) {
    _f(e, r), yield ec(e);
  }), Jo.apply(this, arguments);
}
function nc(e, r) {
  return Qo.apply(this, arguments);
}
function Qo() {
  return Qo = co(function* (e, r) {
    if (!rc(e, r)) {
      Un.includes(e) && (yield Ri(e));
      return;
    }
    yield xs(e, r);
  }), Qo.apply(this, arguments);
}
function ac(e) {
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
var eu = {
  mounted: xs,
  unmounted: Ui,
  updated: nc,
  install(e, r) {
    ac(r), Li = Ii(Pt, Ze.throttleWait), e.directive("lazy", this);
  }
}, QS = eu;
const ga = eu;
function tc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ru = (e) => ["mini", "small", "normal", "large"].includes(e);
function nu(e) {
  return ru(e) || nr(e) || Fe(e);
}
var oc = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: nu,
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
    validator: tc,
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
  n: ic,
  classes: lc
} = re("avatar"), sc = ["src", "lazy-loading", "lazy-error"], uc = ["src"];
function dc(e, r) {
  var n = Ae("lazy");
  return h(), $(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: q({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: r[3] || (r[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (h(), $(
      Me,
      {
        key: 0
      },
      [e.lazy ? $e((h(), $("img", {
        key: 0,
        class: c(e.n("image")),
        src: e.src,
        style: q({
          objectFit: e.fit
        }),
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        onLoad: r[0] || (r[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        })
      }, null, 46, sc)), [[n, e.src]]) : (h(), $("img", {
        key: 1,
        class: c(e.n("image")),
        src: e.src,
        style: q({
          objectFit: e.fit
        }),
        onLoad: r[1] || (r[1] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: r[2] || (r[2] = function() {
          return e.handleError && e.handleError(...arguments);
        })
      }, null, 46, uc))],
      64
      /* STABLE_FRAGMENT */
    )) : (h(), $(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: q({
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
var au = ee({
  name: "VarAvatar",
  directives: {
    Lazy: ga
  },
  props: oc,
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
      d ? (u._lazy.state === "success" && S(v, s), u._lazy.state === "error" && S(f, s)) : S(v, s);
    }, l = (s) => {
      S(e.onError, s);
    }, i = (s) => {
      S(e.onClick, s);
    };
    return or(t), wt(t), {
      internalSizeValidator: ru,
      sizeValidator: nu,
      toSizeUnit: be,
      n: ic,
      classes: lc,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
au.render = dc;
const ya = au;
te(ya);
var _S = ya, vc = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: fc,
  classes: cc
} = re("avatar-group");
function mc(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var tu = ee({
  name: "VarAvatarGroup",
  props: vc,
  setup(e) {
    var r = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": be(e.offset)
    });
    return {
      n: fc,
      classes: cc,
      toSizeUnit: be,
      rootStyles: r
    };
  }
});
tu.render = mc;
const ba = tu;
te(ba);
var xS = ba;
function pc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function hc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var on = {
  type: {
    type: String,
    default: "circle",
    validator: pc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: hc
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
  n: gc,
  classes: yc
} = re("loading"), bc = (e) => (gn(""), e = e(), yn(), e), wc = /* @__PURE__ */ bc(() => /* @__PURE__ */ D(
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
)), Cc = [wc];
function Sc(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [j(e.$slots, "default"), e.loading ? (h(), $(
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
    )) : x("v-if", !0), e.isShow ? (h(), $(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [D(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: q({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Cc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (h(!0), $(
        Me,
        null,
        He(e.loadingTypeDict, (n, a) => (h(), $(
          Me,
          {
            key: a
          },
          [e.type === a ? (h(), $(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), $(
              Me,
              null,
              He(n, (t) => (h(), $(
                "div",
                {
                  key: t + a,
                  style: q({
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
      )), e.$slots.description || e.description ? (h(), $(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: q({
            color: e.color
          })
        },
        [j(e.$slots, "description", {}, () => [ke(
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
var ou = ee({
  name: "VarLoading",
  props: on,
  setup(e, r) {
    var {
      slots: n
    } = r, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => S(n.default) ? e.loading : !0);
    return {
      n: gc,
      classes: yc,
      multiplySizeUnit: ur,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
ou.render = Sc;
const fn = ou;
te(fn);
var ek = fn, kc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: $c,
  classes: Tc
} = re("hover-overlay");
function Pc(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var iu = ee({
  name: "VarHoverOverlay",
  props: kc,
  setup() {
    return {
      n: $c,
      classes: Tc
    };
  }
});
iu.render = Pc;
const Pr = iu;
te(Pr);
function cn() {
  var e = P(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var rk = Pr;
function lu(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function Oc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[$s(t)] = o, n;
  }, {}) : {};
}
function Vc(e) {
  var {
    value: r
  } = e._hover, n = Oc(e);
  Object.keys(r).forEach((a) => {
    var t = $s(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function Yi(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function Mc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function su(e) {
  Mc(e), Yi(e, e._hover.rawStyle);
}
function uu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, ea(e)) {
    e(this._hover.hovering);
    return;
  }
  Yi(this, e);
}
function du() {
  if (this._hover.hovering = !1, ea(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  su(this);
}
function vu(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  lu(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, Vc(e), e.addEventListener("mouseenter", uu), e.addEventListener("mouseleave", du));
}
function fu(e, r) {
  lu(r.arg) || (su(e), e.removeEventListener("mouseenter", uu), e.removeEventListener("mouseleave", du));
}
function Ic(e, r) {
  e._hover && fu(e, r);
}
function Ec(e, r) {
  return !ea(r.value) && e._hover.hovering;
}
function Bc(e, r) {
  vu(e, r), Ec(e, r) && Yi(e, r.value);
}
var cu = {
  mounted: vu,
  unmounted: fu,
  beforeUpdate: Ic,
  updated: Bc,
  install(e) {
    e.directive("hover", this);
  }
}, nk = cu;
const Ur = cu;
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, _o.apply(this, arguments);
}
function mu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Nc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Dc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Ac = {
  type: {
    type: String,
    validator: mu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Dc
  },
  size: {
    type: String,
    validator: Nc
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
  loadingType: xe(on, "type"),
  loadingSize: xe(on, "size"),
  loadingColor: _o({}, xe(on, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, pu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function zc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(pu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function Lc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(pu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Rc,
  classes: Uc
} = re("button"), Yc = ["type", "disabled"];
function Hc(e, r) {
  var n = le("var-loading"), a = le("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return $e((h(), $("button", {
    class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
    style: q({
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
  }, [e.loading || e.pending ? (h(), we(n, {
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
    [j(e.$slots, "default")],
    2
    /* CLASS */
  ), Q(a, {
    hovering: e.hovering
  }, null, 8, ["hovering"])], 46, Yc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var hu = ee({
  name: "VarButton",
  components: {
    VarLoading: fn,
    VarHoverOverlay: Pr
  },
  directives: {
    Ripple: Xe,
    Hover: Ur
  },
  props: Ac,
  setup(e) {
    var r = P(!1), {
      buttonGroup: n
    } = Lc(), {
      hovering: a,
      handleHovering: t
    } = cn(), o = R(() => {
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
        mode: p
      } = n;
      return {
        elevation: "",
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : v.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: p.value !== "normal",
        outline: p.value === "outline"
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
      n: Rc,
      classes: Uc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
hu.render = Hc;
const vr = hu;
te(vr);
var ak = vr, Fc = {
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
  n: jc,
  classes: Wc
} = re("back-top");
function Gc(e, r) {
  var n = le("var-icon"), a = le("var-button");
  return h(), we(Jr, {
    to: "body",
    disabled: e.disabled
  }, [D(
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
    [j(e.$slots, "default", {}, () => [Q(a, {
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
var gu = ee({
  name: "VarBackTop",
  components: {
    VarButton: vr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Fc,
  setup(e) {
    var r = P(!1), n = P(null), a = P(!0), t, o = (d) => {
      S(e.onClick, d);
      var v = Ei(t);
      pa(t, {
        left: v,
        duration: e.duration,
        animation: Ts
      });
    }, l = Ii(() => {
      r.value = ma(t) >= ze(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Os(e.target, "BackTop") : dn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return ao(() => {
      i(), s(), a.value = !1;
    }), hn(s), uo(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: be,
      n: jc,
      classes: Wc,
      handleClick: o
    };
  }
});
gu.render = Gc;
const wa = gu;
te(wa);
var tk = wa;
function qc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Xc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Kc = {
  type: {
    type: String,
    default: "default",
    validator: qc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Xc
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
  n: Zc,
  classes: Jc
} = re("badge");
function Qc(e, r) {
  var n = le("var-icon");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "default"), Q(Ue, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: ce(() => [$e(D(
        "span",
        De({
          class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [e.icon ? (h(), we(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-badge-cover": "",
          name: e.icon
        }, null, 8, ["class", "name"])) : x("v-if", !0), j(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), $(
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
      ), [[qr, !e.hidden]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"])],
    2
    /* CLASS */
  );
}
var yu = ee({
  name: "VarBadge",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Kc,
  setup(e) {
    var r = R(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && L(n) > L(a) ? a + "+" : n;
    });
    return {
      n: Zc,
      classes: Jc,
      value: r
    };
  }
});
yu.render = Qc;
const Yn = yu;
te(Yn);
var ok = Yn, _c = {
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
}, bu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function xc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(bu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, xo.apply(this, arguments);
}
var {
  n: em,
  classes: rm
} = re("bottom-navigation"), {
  n: po
} = re("bottom-navigation-item"), yl = po("--right-half-space"), bl = po("--left-half-space"), wl = po("--right-space"), nm = {
  type: "primary"
};
function am(e, r) {
  var n = le("var-button");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (h(), we(n, De({
      key: 0,
      class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
      "var-bottom-navigation__fab": "",
      onClick: e.handleFabClick
    }, e.fabProps, {
      round: ""
    }), {
      default: ce(() => [j(e.$slots, "fab")]),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "onClick"])) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var wu = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: vr
  },
  props: _c,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = P({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = xc(), v = () => {
      s.value === 0 || f() || p() || y();
    }, f = () => u.find((m) => {
      var {
        name: w
      } = m;
      return t.value === w.value;
    }), p = () => u.find((m) => {
      var {
        index: w
      } = m;
      return t.value === w.value;
    }), y = () => {
      nr(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > s.value - 1 && S(e["onUpdate:active"], s.value - 1));
    }, b = (m) => {
      t.value !== m && (e.onBeforeChange ? g(m) : C(m));
    }, g = (m) => {
      var w = Ut(S(e.onBeforeChange, m));
      Promise.all(w).then((U) => {
        U.every(Boolean) && C(m);
      });
    }, C = (m) => {
      S(e["onUpdate:active"], m), S(e.onChange, m);
    }, O = () => {
      var m = V();
      m.forEach((w) => {
        w.classList.remove(yl, bl, wl);
      });
    }, T = (m) => {
      var w = V(), U = w.length, B = m % 2 === 0;
      w.forEach((X, K) => {
        k(B, X, K, U);
      });
    }, k = (m, w, U, B) => {
      var X = U === B - 1;
      if (!m && X) {
        w.classList.add(wl);
        return;
      }
      var K = U === B / 2 - 1, A = U === B / 2;
      K ? w.classList.add(yl) : A && w.classList.add(bl);
    }, V = () => Array.from(a.value.querySelectorAll("." + po())), I = () => {
      S(e.onFabClick);
    }, E = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(E), se(() => s.value, v), se(() => e.fabProps, (m) => {
      i.value = xo({}, nm, m);
    }, {
      immediate: !0,
      deep: !0
    }), or(() => {
      n.fab && T(s.value);
    }), wt(() => {
      O(), n.fab && T(s.value);
    }), {
      n: em,
      classes: rm,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: I,
      fabProps: i
    };
  }
});
wu.render = am;
const Ca = wu;
te(Ca);
var ik = Ca, tm = {
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
function om() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(bu);
  return n || Tr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: im,
  classes: lm
} = re("bottom-navigation-item"), sm = {
  type: "danger",
  dot: !0
};
function um(e, r) {
  var n = le("var-icon"), a = le("var-badge"), t = Ae("ripple");
  return $e((h(), $(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), we(n, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : x("v-if", !0), j(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), we(a, De({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : x("v-if", !0), D(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (h(), $(
        Me,
        {
          key: 0
        },
        [ke(
          ie(e.label),
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
var Cu = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Yn,
    VarIcon: Ne
  },
  directives: {
    Ripple: Xe
  },
  props: tm,
  setup(e) {
    var r = R(() => e.name), n = R(() => e.badge), a = P({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = om(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var p, y = (p = r.value) != null ? p : t.value;
      S(e.onClick, y), S(o.onToggle, y);
    };
    return l(d), se(() => n.value, (p) => {
      a.value = p === !0 ? sm : n.value;
    }, {
      immediate: !0
    }), {
      n: im,
      classes: lm,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Cu.render = um;
const Sa = Cu;
te(Sa);
var lk = Sa, dm = {
  separator: {
    type: String
  },
  onClick: Y()
}, Su = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function vm() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Su);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function fm() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Su);
  return r || Tr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: cm,
  classes: mm
} = re("breadcrumb");
function pm(e, r) {
  return h(), $(
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
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : j(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [D(
        "div",
        {
          class: c(e.n("separator"))
        },
        ie((n = e.separator) != null ? n : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var ku = ee({
  name: "VarBreadcrumb",
  props: dm,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = fm(), t = R(() => r.value === n.length.value - 1), o = R(() => n.separator.value), l = (i) => {
      t.value || S(e.onClick, i);
    };
    return a(null), {
      n: cm,
      classes: mm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
ku.render = pm;
const ka = ku;
te(ka);
var sk = ka, hm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: gm
} = re("breadcrumbs");
function ym(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var $u = ee({
  name: "VarBreadcrumbs",
  props: hm,
  setup(e) {
    var r = R(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = vm(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: gm
    };
  }
});
$u.render = ym;
const $a = $u;
te($a);
var uk = $a;
function bm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Cm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Sm = {
  type: {
    type: String,
    default: "default",
    validator: bm
  },
  size: {
    type: String,
    default: "normal",
    validator: wm
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
    validator: Cm
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
  n: km,
  classes: $m
} = re("button-group");
function Tm(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Tu = ee({
  name: "VarButtonGroup",
  props: Sm,
  setup(e) {
    var {
      bindButtons: r
    } = zc(), n = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return r(n), {
      n: km,
      classes: $m,
      formatElevation: hr
    };
  }
});
Tu.render = Tm;
const Ta = Tu;
te(Ta);
var dk = Ta;
function Pm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Om = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Pm,
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
function Cl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Sl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Cl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Cl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Vm,
  classes: Mm
} = re("card"), Im = 500, Em = ["src", "alt"];
function Bm(e, r) {
  var n = le("var-icon"), a = le("var-button"), t = Ae("ripple");
  return $e((h(), $(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: q({
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
        style: q({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [j(e.$slots, "image", {}, () => [e.src ? (h(), $("img", {
        key: 0,
        class: c(e.n("image")),
        style: q({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Em)) : x("v-if", !0)]), D(
        "div",
        {
          class: c(e.n("container"))
        },
        [j(e.$slots, "title", {}, () => [e.title ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ie(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ie(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [j(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), $(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: q({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [j(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: q({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [j(e.$slots, "close-button", {}, () => [Q(a, {
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
    ), D(
      "div",
      {
        class: c(e.n("holder")),
        style: q({
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
var Pu = ee({
  name: "VarCard",
  directives: {
    Ripple: Xe
  },
  components: {
    VarIcon: Ne,
    VarButton: vr
  },
  props: Om,
  setup(e) {
    var r = P(null), n = P(null), a = P("auto"), t = P("auto"), o = P("100%"), l = P("100%"), i = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), v = P("0px"), f = P("0"), p = R(() => e.layout === "row"), y = P(!1), b = P(!1), {
      zIndex: g
    } = $t(() => e.floating, 1);
    fo(() => e.floating, () => !p.value);
    var C = "auto", O = "auto", T = null, k = P(null), V = /* @__PURE__ */ function() {
      var w = Sl(function* () {
        clearTimeout(k.value), clearTimeout(T), k.value = null, k.value = setTimeout(/* @__PURE__ */ Sl(function* () {
          var {
            width: U,
            height: B,
            left: X,
            top: K
          } = Qe(r.value);
          a.value = be(U), t.value = be(B), o.value = a.value, l.value = t.value, i.value = be(K), s.value = be(X), u.value = "fixed", C = i.value, O = s.value, y.value = !0, yield Dr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Im : 0);
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), I = () => {
      clearTimeout(T), clearTimeout(k.value), k.value = null, o.value = a.value, l.value = t.value, i.value = C, s.value = O, v.value = "0px", f.value = "0", y.value = !1, T = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", C = "auto", O = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, E = () => {
      S(e["onUpdate:floating"], !1);
    }, m = (w) => {
      S(e.onClick, w);
    };
    return se(() => e.floating, (w) => {
      p.value || Le(() => {
        w ? V() : I();
      });
    }, {
      immediate: !0
    }), {
      n: Vm,
      classes: Mm,
      toSizeUnit: be,
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
      zIndex: g,
      isRow: p,
      close: E,
      showFloatingButtons: y,
      floated: b,
      formatElevation: hr,
      handleClick: m
    };
  }
});
Pu.render = Bm;
const Pa = Pu;
te(Pa);
var vk = Pa, Nm = {
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
  n: Dm,
  classes: Am
} = re("cell");
function zm(e, r) {
  var n = le("var-icon"), a = Ae("ripple");
  return $e((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "icon", {}, () => [e.icon ? (h(), $(
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
    )) : x("v-if", !0)]), D(
      "div",
      {
        class: c(e.n("content"))
      },
      [j(e.$slots, "default", {}, () => [e.title ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ie(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), $(
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
    ), e.$slots.extra ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [j(e.$slots, "extra")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Ou = ee({
  name: "VarCell",
  components: {
    VarIcon: Ne
  },
  directives: {
    Ripple: Xe
  },
  props: Nm,
  setup(e) {
    var r = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": be(e.borderOffset),
      "--cell-border-right": be(e.borderOffset)
    }), n = (a) => {
      S(e.onClick, a);
    };
    return {
      n: Dm,
      classes: Am,
      toSizeUnit: be,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Ou.render = zm;
const Hn = Ou;
te(Hn);
var fk = Hn, Lm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Rm
} = re("form-details"), Um = {
  key: 0
}, Ym = {
  key: 0
};
function Hm(e, r) {
  return h(), we(Ue, {
    name: e.n()
  }, {
    default: ce(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), $(
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
        [Q(Ue, {
          name: e.n("message")
        }, {
          default: ce(() => [e.errorMessage ? (h(), $(
            "div",
            Um,
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
        [Q(Ue, {
          name: e.n("message")
        }, {
          default: ce(() => [j(e.$slots, "extra-message", {}, () => [e.extraMessage ? (h(), $(
            "div",
            Ym,
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
var Vu = ee({
  name: "VarFormDetails",
  props: Lm,
  setup: () => ({
    n: Rm
  })
});
Vu.render = Hm;
const ar = Vu;
te(ar);
var ck = ar, Fm = {
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
}, Mu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function jm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Mu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Wm() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(Mu);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
  };
}
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
var Iu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Iu), a = _n(), t = n ? (o) => {
    n(ei({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: r,
    form: e,
    bindForm: t
  };
}
function Gm() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Iu);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: qm,
  classes: Xm
} = re("checkbox");
function Km(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ae("hover"), l = Ae("ripple");
  return h(), $(
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
      [$e((h(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : j(e.$slots, "unchecked-icon", {
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
      }]]), D(
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
    ), Q(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Eu = ee({
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
  props: Fm,
  setup(e) {
    var r = P(!1), n = R(() => r.value === e.checkedValue), a = R(() => e.checkedValue), t = P(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Wm(), {
      hovering: i,
      handleHovering: s
    } = cn(), {
      form: u,
      bindForm: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: p,
      // expose
      resetValidation: y
    } = Or(), b = (m) => {
      Le(() => {
        var {
          validateTrigger: w,
          rules: U,
          modelValue: B
        } = e;
        f(w, m, U, B);
      });
    }, g = (m) => {
      r.value = m;
      var {
        checkedValue: w,
        onChange: U
      } = e;
      S(e["onUpdate:modelValue"], r.value), S(U, r.value), b("onChange"), m === w ? o == null || o.onChecked(w) : o == null || o.onUnchecked(w);
    }, C = (m) => {
      var {
        disabled: w,
        readonly: U,
        checkedValue: B,
        uncheckedValue: X,
        onClick: K
      } = e;
      if (!(u != null && u.disabled.value || w) && (S(K, m), !(u != null && u.readonly.value || U))) {
        t.value = !0;
        var A = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && A || g(n.value ? X : B);
      }
    }, O = (m) => {
      var {
        checkedValue: w,
        uncheckedValue: U
      } = e;
      r.value = m.includes(w) ? w : U;
    }, T = () => {
      t.value = !1;
    }, k = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), y();
    }, V = (m) => {
      var {
        checkedValue: w,
        uncheckedValue: U
      } = e, B = ![w, U].includes(m);
      B && (m = n.value ? U : w), g(m);
    }, I = () => p(e.rules, e.modelValue);
    se(() => e.modelValue, (m) => {
      r.value = m;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: I,
      resetValidation: y,
      reset: k,
      resetWithAnimation: T
    };
    return S(l, E), S(d, E), {
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: qm,
      classes: Xm,
      handleClick: C,
      toggle: V,
      reset: k,
      validate: I,
      resetValidation: y
    };
  }
});
Eu.render = Km;
const Fn = Eu;
te(Fn);
var mk = Fn;
function Zm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Jm = {
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
    validator: Zm
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
  n: Qm,
  classes: _m
} = re("checkbox-group");
function xm(e, r) {
  var n = le("var-form-details");
  return h(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Bu = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: ar
  },
  props: Jm,
  setup(e) {
    var r = R(() => e.max), n = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = jm(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), v = R(() => i.value), f = (E) => {
      Le(() => {
        var {
          validateTrigger: m,
          rules: w,
          modelValue: U
        } = e;
        s(m, E, w, U);
      });
    }, p = (E) => {
      S(e["onUpdate:modelValue"], E), S(e.onChange, E), f("onChange");
    }, y = (E) => {
      var {
        modelValue: m
      } = e;
      m.includes(E) || p([...m, E]);
    }, b = (E) => {
      var {
        modelValue: m
      } = e;
      m.includes(E) && p(m.filter((w) => w !== E));
    }, g = () => t.forEach((E) => {
      var {
        sync: m
      } = E;
      return m(e.modelValue);
    }), C = () => {
      t.forEach((E) => E.resetWithAnimation());
    }, O = () => {
      var E = t.map((w) => {
        var {
          checkedValue: U
        } = w;
        return U.value;
      }), m = tl(E);
      return C(), S(e["onUpdate:modelValue"], m), m;
    }, T = () => {
      var E = t.filter((w) => {
        var {
          checked: U
        } = w;
        return !U.value;
      }).map((w) => {
        var {
          checkedValue: U
        } = w;
        return U.value;
      }), m = tl(E);
      return C(), S(e["onUpdate:modelValue"], m), m;
    }, k = () => {
      S(e["onUpdate:modelValue"], []), d();
    }, V = () => u(e.rules, e.modelValue);
    se(() => e.modelValue, g, {
      deep: !0
    }), se(() => a.value, g);
    var I = {
      max: r,
      checkedCount: n,
      onChecked: y,
      onUnchecked: b,
      validate: V,
      resetValidation: d,
      reset: k,
      errorMessage: v
    };
    return o(I), S(l, I), {
      errorMessage: i,
      n: Qm,
      classes: _m,
      checkAll: O,
      inverseAll: T,
      reset: k,
      validate: V,
      resetValidation: d
    };
  }
});
Bu.render = xm;
const Oa = Bu;
te(Oa);
var pk = Oa;
function ep(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function rp(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var np = {
  type: {
    type: String,
    default: "default",
    validator: ep
  },
  size: {
    type: String,
    default: "normal",
    validator: rp
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: xe(js, "name"),
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
  n: Qr,
  classes: ap
} = re("chip");
function tp(e, r) {
  var n = le("var-icon");
  return h(), we(Ue, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [D(
      "span",
      De({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [j(e.$slots, "left"), D(
        "span",
        {
          class: c(e.n("text-" + e.size))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      ), j(e.$slots, "right"), e.closable ? (h(), $(
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
var Nu = ee({
  name: "VarChip",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: np,
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
      } = e, u = Qr(o ? "$--flex" : "$--inline-flex"), d = i ? Qr("plain") + " " + Qr("plain-" + l) : Qr("--" + l), v = s ? Qr("--round") : null;
      return [Qr("--" + t), u, d, v];
    }), a = (t) => {
      S(e.onClose, t);
    };
    return {
      n: Qr,
      classes: ap,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Nu.render = tp;
const jn = Nu;
te(jn);
var hk = jn;
function op(e) {
  return ["row", "column"].includes(e);
}
function ip(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function lp(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var sp = {
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
    validator: op
  },
  justify: {
    type: String,
    validator: ip
  },
  align: {
    type: String,
    validator: lp
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
}, Du = Symbol("ROW_BIND_COL_KEY");
function up() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Du);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function dp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Du);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Bt,
  classes: vp
} = re("col");
function fp(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: q({
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
var Au = ee({
  name: "VarCol",
  props: sp,
  setup(e) {
    var r = P({
      left: 0,
      right: 0
    }), n = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = dp(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Vi(d)) {
        var {
          offset: f,
          span: p
        } = d;
        Number(p) >= 0 && v.push(Bt("--span-" + u + "-" + p)), f && v.push(Bt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Bt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      S(e.onClick, u);
    };
    return se([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), S(o, l), {
      n: Bt,
      classes: vp,
      padding: r,
      toNumber: L,
      toSizeUnit: be,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: Xt
    };
  }
});
Au.render = fp;
const Va = Au;
te(Va);
var gk = Va, zu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function cp() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(zu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var mp = {
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
  n: pp
} = re("collapse");
function hp(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Lu = ee({
  name: "VarCollapse",
  props: mp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = cp(), t = R(() => e.modelValue), o = R(() => e.offset), l = R(() => e.divider), i = R(() => e.elevation), s = () => !e.accordion && !Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, g) => s() ? g ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((C) => C !== b) : null, d = (b, g) => {
      var C = u(b, g);
      S(e["onUpdate:modelValue"], C), S(e.onChange, C);
    }, v = () => {
      if (e.accordion)
        return n.find((g) => {
          var {
            name: C
          } = g;
          return e.modelValue === C.value;
        });
      var b = n.filter((g) => {
        var {
          name: C
        } = g;
        return C.value === void 0 ? !1 : e.modelValue.includes(C.value);
      });
      return b.length ? b : void 0;
    }, f = () => e.accordion ? n.find((b) => {
      var {
        index: g,
        name: C
      } = b;
      return C.value === void 0 && e.modelValue === g.value;
    }) : n.filter((b) => {
      var {
        index: g,
        name: C
      } = b;
      return C.value === void 0 && e.modelValue.includes(g.value);
    }), p = () => {
      if (s()) {
        var b = v() || f();
        if (e.accordion && !b || !e.accordion && !b.length) {
          n.forEach((g) => {
            g.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((g) => {
          var C = e.accordion ? b === g : b.includes(g);
          g.init(e.accordion, C);
        });
      }
    }, y = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(y), se(() => r.value, () => Le().then(p)), se(() => e.modelValue, () => Le().then(p)), {
      n: pp,
      divider: l
    };
  }
});
Lu.render = hp;
const Ma = Lu;
te(Ma);
var yk = Ma;
function gp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(zu);
  return n || Tr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var yp = {
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
  n: bp,
  classes: wp
} = re("collapse-item");
function Cp(e, r) {
  var n = le("var-icon");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: q("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
        [j(e.$slots, "title", {}, () => [ke(
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
        [j(e.$slots, "icon", {}, () => [Q(n, {
          name: e.icon,
          transition: 250,
          class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
        }, null, 8, ["name", "class"])])],
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
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[qr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Ru = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ne
  },
  props: yp,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = gp(), t = !0, o = P(null), l = P(!1), i = P(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, p = R(() => e.name), y = (V, I) => {
      s.value === void 0 || V && Ve(s.value) || I === i.value || (i.value = I, b(!0));
    }, b = (V) => {
      e.disabled || V || f(e.name || r.value, !i.value);
    }, g = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: V
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = V + "px", t && so(() => {
            t && T();
          });
        });
      }));
    }, C = () => {
      t = !1;
    }, O = () => {
      if (o.value) {
        var {
          offsetHeight: V
        } = o.value;
        o.value.style.height = V + "px", br(() => {
          o.value.style.height = "0px";
        });
      }
    }, T = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, k = {
      index: r,
      name: p,
      init: y
    };
    return a(k), se(i, (V) => {
      V ? g() : O();
    }), {
      n: bp,
      start: C,
      classes: wp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: b,
      contentEl: o,
      transitionend: T,
      formatElevation: hr
    };
  }
});
Ru.render = Cp;
const Ia = Ru;
te(Ia);
var bk = Ia, Sp = {
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
  n: kp
} = re("countdown"), ri = 1e3, ni = 60 * ri, ai = 60 * ni, kl = 24 * ai;
function $p(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", Ct(io(e.timeData)), () => [ke(
      ie(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Uu = ee({
  name: "VarCountdown",
  props: Sp,
  setup(e) {
    var r = P(""), n = P({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (y, b) => {
      var g = Object.values(b), C = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (C.forEach((k, V) => {
        y.includes(k) ? y = y.replace(k, kn("" + g[V], 2, "0")) : g[V + 1] += g[V] * O[V];
      }), y.includes("S")) {
        var T = kn("" + g[g.length - 1], 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", T) : y.includes("SS") ? y = y.replace("SS", T.slice(0, 2)) : y = y.replace("S", T.slice(0, 1));
      }
      return y;
    }, u = (y) => {
      var b = Math.floor(y / kl), g = Math.floor(y % kl / ai), C = Math.floor(y % ai / ni), O = Math.floor(y % ni / ri), T = Math.floor(y % ri), k = {
        days: b,
        hours: g,
        minutes: C,
        seconds: O,
        milliseconds: T
      };
      n.value = k, S(e.onChange, n.value), r.value = s(e.format, k);
    }, d = () => {
      var {
        time: y,
        onEnd: b
      } = e, g = performance.now();
      if (a || (a = g + L(y)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        S(b);
        return;
      }
      t && (o = br(d));
    }, v = function(y) {
      y === void 0 && (y = !1), !(t && !y) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, dl(o);
    }, p = () => {
      a = 0, t = !1, dl(o), d();
    };
    return se(() => e.time, () => {
      p(), e.autoStart && v();
    }, {
      immediate: !0
    }), hn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), Qn(() => {
      i = t, f();
    }), oo(f), {
      showTime: r,
      timeData: n,
      n: kp,
      start: v,
      pause: f,
      reset: p
    };
  }
});
Uu.render = $p;
const Ea = Uu;
te(Ea);
var wk = Ea;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Nn = 9e15, bn = 1e9, ti = "0123456789abcdef", Jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", oi = {
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
  minE: -Nn,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Nn,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Yu, jr, ye = !0, ho = "[DecimalError] ", mn = ho + "Invalid argument: ", Hu = ho + "Precision limit exceeded", Fu = ho + "crypto unavailable", ju = "[object Decimal]", tr = Math.floor, Je = Math.pow, Tp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Pp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Op = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Wu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Nr = 1e7, he = 7, Vp = 9007199254740991, Mp = Jt.length - 1, ii = Qt.length - 1, J = { toStringTag: ju };
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
    throw Error(mn + r);
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
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + he, a.rounding = 1, n = Ip(a, Zu(a, n)), a.precision = e, a.rounding = r, me(jr == 2 || jr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
J.cubeRoot = J.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ye = !1, o = d.s * Je(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = rr(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Je(n, 1 / 3), e = tr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Be(u.plus(d).times(i), u.plus(s), l + 2, 1), rr(i.d).slice(0, l) === (n = rr(a.d)).slice(0, l))
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
  return Be(this, new this.constructor(e));
};
J.dividedToIntegerBy = J.divToInt = function(e) {
  var r = this, n = r.constructor;
  return me(Be(r, new n(e), 0, 1, 1), n.precision, n.rounding);
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
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / yo(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Wn(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return me(o, l.precision = n, l.rounding = a, !0);
};
J.hyperbolicSine = J.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Wn(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / yo(5, e)), t = Wn(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, me(t, r, n, !0);
};
J.hyperbolicTangent = J.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Be(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
J.inverseCosine = J.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Br(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Br(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Br(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
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
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? me(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Be(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
J.inverseSine = J.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Br(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
J.inverseTangent = J.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= ii)
      return l = Br(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ii)
      return l = Br(d, v + 4, f).times(0.5), l.s = u.s, l;
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
  var r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, p = 5;
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
  if (ye = !1, i = v + p, l = ln(u, i), a = r ? _t(d, i + 10) : ln(e, i), s = Be(l, a, i, 1), Ba(s.d, t = v, f))
    do
      if (i += 10, l = ln(u, i), a = r ? _t(d, i + 10) : ln(e, i), s = Be(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = me(s, v + 1, 0));
        break;
      }
    while (Ba(s.d, t += 10, f));
  return ye = !0, me(s, v, f);
};
J.minus = J.sub = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, p = this, y = p.constructor;
  if (e = new y(e), !p.d || !e.d)
    return !p.s || !e.s ? e = new y(NaN) : p.d ? e.s = -e.s : e = new y(e.d || p.s !== e.s ? p : NaN), e;
  if (p.s != e.s)
    return e.s = -e.s, p.plus(e);
  if (u = p.d, f = e.d, i = y.precision, s = y.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new y(p);
    else
      return new y(s === 3 ? -0 : 0);
    return ye ? me(e, i, s) : e;
  }
  if (n = tr(e.e / he), d = tr(p.e / he), u = u.slice(), o = d - n, o) {
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
  return u[0] ? (e.d = u, e.e = go(u, n), ye ? me(e, i, s) : e) : new y(s === 3 ? -0 : 0);
};
J.modulo = J.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? me(new a(n), a.precision, a.rounding) : (ye = !1, a.modulo == 9 ? (r = Be(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Be(n, e, 0, a.modulo, 1), r = r.times(e), ye = !0, n.minus(r));
};
J.naturalExponential = J.exp = function() {
  return li(this);
};
J.naturalLogarithm = J.ln = function() {
  return ln(this);
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
  return e.d = u, e.e = go(u, a), ye ? me(e, i, s) : e;
};
J.precision = J.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(mn + e);
  return n.d ? (r = Gu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
J.round = function() {
  var e = this, r = e.constructor;
  return me(new r(e), e.e + 1, r.rounding);
};
J.sine = J.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + he, a.rounding = 1, n = Bp(a, Zu(a, n)), a.precision = e, a.rounding = r, me(jr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
J.squareRoot = J.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ye = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = rr(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = tr((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Be(l, o, n + 2, 1)).times(0.5), rr(o.d).slice(0, n) === (r = rr(a.d)).slice(0, n))
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
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Be(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, me(jr == 2 || jr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
J.times = J.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, p = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !p || !p[0])
    return new v(!e.s || f && !f[0] && !p || p && !p[0] && !f ? NaN : !f || !p ? e.s / 0 : e.s * 0);
  for (n = tr(d.e / he) + tr(e.e / he), s = f.length, u = p.length, s < u && (o = f, f = p, p = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + p[a] * f[t - a - 1] + r, o[t--] = i % Nr | 0, r = i / Nr | 0;
    o[t] = (o[t] + r) % Nr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = go(o, n), ye ? me(e, v.precision, v.rounding) : e;
};
J.toBinary = function(e, r) {
  return Hi(this, 2, e, r);
};
J.toDecimalPlaces = J.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (pr(e, 0, bn), r === void 0 ? r = a.rounding : pr(r, 0, 8), me(n, e + n.e + 1, r));
};
J.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, !0) : (pr(e, 0, bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = me(new t(a), e + 1, r), n = Yr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
J.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Yr(t) : (pr(e, 0, bn), r === void 0 ? r = o.rounding : pr(r, 0, 8), a = me(new o(t), e + t.e + 1, r), n = Yr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
J.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, p = this, y = p.d, b = p.constructor;
  if (!y)
    return new b(p);
  if (u = n = new b(1), a = s = new b(0), r = new b(a), o = r.e = Gu(y) - p.e - 1, l = o % he, r.d[0] = Je(10, l < 0 ? he + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(mn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (ye = !1, i = new b(rr(y)), d = b.precision, b.precision = o = y.length * he * 2; v = Be(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Be(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = p.s, f = Be(u, a, o, 1).minus(p).abs().cmp(Be(s, n, o, 1).minus(p).abs()) < 1 ? [u, a] : [s, n], b.precision = d, ye = !0, f;
};
J.toHexadecimal = J.toHex = function(e, r) {
  return Hi(this, 16, e, r);
};
J.toNearest = function(e, r) {
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
  return e.d[0] ? (ye = !1, n = Be(n, e, 0, r, 1).times(e), ye = !0, me(n)) : (e.s = n.s, n = e), n;
};
J.toNumber = function() {
  return +this;
};
J.toOctal = function(e, r) {
  return Hi(this, 8, e, r);
};
J.toPower = J.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Je(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return me(i, a, o);
  if (r = tr(e.e / he), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= Vp)
    return t = qu(s, i, n, a), e.s < 0 ? new s(1).div(t) : me(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Je(+i, u), r = n == 0 || !isFinite(n) ? tr(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (ye = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = li(e.times(ln(i, a + n)), a), t.d && (t = me(t, a + 5, 1), Ba(t.d, a, o) && (r = a + 10, t = me(li(e.times(ln(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = me(t, a + 1, 0)))), t.s = l, ye = !0, s.rounding = o, me(t, a, o));
};
J.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (pr(e, 1, bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = me(new t(a), e, r), n = Yr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
J.toSignificantDigits = J.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (pr(e, 1, bn), r === void 0 ? r = a.rounding : pr(r, 0, 8)), me(new a(n), e, r);
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
      a = e[r] + "", n = he - a.length, n && (o += xr(n)), o += a;
    l = e[r], a = l + "", n = he - a.length, n && (o += xr(n));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function pr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(mn + e);
}
function Ba(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += he, t = 0) : (t = Math.ceil((r + 1) / he), r %= he), o = Je(10, he - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Je(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Je(10, r - 3) - 1, l;
}
function Yt(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += ti.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function Ip(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / yo(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Wn(e, 1, r.times(t), new e(1));
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
    var u, d, v, f, p, y, b, g, C, O, T, k, V, I, E, m, w, U, B, X, K = a.constructor, A = a.s == t.s ? 1 : -1, z = a.d, F = t.d;
    if (!z || !z[0] || !F || !F[0])
      return new K(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (z ? F && z[0] == F[0] : !F) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          z && z[0] == 0 || !F ? A * 0 : A / 0
        )
      );
    for (s ? (p = 1, d = a.e - t.e) : (s = Nr, p = he, d = tr(a.e / p) - tr(t.e / p)), B = F.length, w = z.length, C = new K(A), O = C.d = [], v = 0; F[v] == (z[v] || 0); v++)
      ;
    if (F[v] > (z[v] || 0) && d--, o == null ? (I = o = K.precision, l = K.rounding) : i ? I = o + (a.e - t.e) + 1 : I = o, I < 0)
      O.push(1), y = !0;
    else {
      if (I = I / p + 2 | 0, v = 0, B == 1) {
        for (f = 0, F = F[0], I++; (v < w || f) && I--; v++)
          E = f * s + (z[v] || 0), O[v] = E / F | 0, f = E % F | 0;
        y = f || v < w;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), z = e(z, f, s), B = F.length, w = z.length), m = B, T = z.slice(0, B), k = T.length; k < B; )
          T[k++] = 0;
        X = F.slice(), X.unshift(0), U = F[0], F[1] >= s / 2 && ++U;
        do
          f = 0, u = r(F, T, B, k), u < 0 ? (V = T[0], B != k && (V = V * s + (T[1] || 0)), f = V / U | 0, f > 1 ? (f >= s && (f = s - 1), b = e(F, f, s), g = b.length, k = T.length, u = r(b, T, g, k), u == 1 && (f--, n(b, B < g ? X : F, g, s))) : (f == 0 && (u = f = 1), b = F.slice()), g = b.length, g < k && b.unshift(0), n(T, b, k, s), u == -1 && (k = T.length, u = r(F, T, B, k), u < 1 && (f++, n(T, B < k ? X : F, k, s))), k = T.length) : u === 0 && (f++, T = [0]), O[v++] = f, u && T[0] ? T[k++] = z[m] || 0 : (T = [z[m]], k = 1);
        while ((m++ < w || T[0] !== void 0) && I--);
        y = T[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (p == 1)
      C.e = d, Yu = y;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      C.e = v + d * p - 1, me(C, i ? o + C.e + 1 : o, l, y);
    }
    return C;
  };
}();
function me(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, p = e.constructor;
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
  return ye && (e.e > p.maxE ? (e.d = null, e.e = NaN) : e.e < p.minE && (e.e = 0, e.d = [0])), e;
}
function Yr(e, r, n) {
  if (!e.isFinite())
    return Ku(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + xr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + xr(-t - 1) + o, n && (a = n - l) > 0 && (o += xr(a))) : t >= l ? (o += xr(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + xr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += xr(a))), o;
}
function go(e, r) {
  var n = e[0];
  for (r *= he; n >= 10; n /= 10)
    r++;
  return r;
}
function _t(e, r, n) {
  if (r > Mp)
    throw ye = !0, n && (e.precision = n), Error(Hu);
  return me(new e(Jt), r, 1, !0);
}
function Br(e, r, n) {
  if (r > ii)
    throw Error(Hu);
  return me(new e(Qt), r, n, !0);
}
function Gu(e) {
  var r = e.length - 1, n = r * he + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      n--;
    for (r = e[0]; r >= 10; r /= 10)
      n++;
  }
  return n;
}
function xr(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function qu(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / he + 4);
  for (ye = !1; ; ) {
    if (n % 2 && (o = o.times(r), Tl(o.d, l) && (t = !0)), n = tr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Tl(r.d, l);
  }
  return ye = !0, o;
}
function $l(e) {
  return e.d[e.d.length - 1] & 1;
}
function Xu(e, r, n) {
  for (var a, t = new e(r[0]), o = 0; ++o < r.length; )
    if (a = new e(r[o]), a.s)
      t[n](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function li(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, p = f.rounding, y = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (ye = !1, s = y) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Je(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = me(o.times(e), s, 1), n = n.times(++d), i = l.plus(Be(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = me(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && Ba(l.d, s - a, p, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return me(l, f.precision = y, p, ye = !0);
      else
        return f.precision = y, l;
    }
    l = i;
  }
}
function ln(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, p = 1, y = 10, b = e, g = b.d, C = b.constructor, O = C.rounding, T = C.precision;
  if (b.s < 0 || !g || !g[0] || !b.e && g[0] == 1 && g.length == 1)
    return new C(g && !g[0] ? -1 / 0 : b.s != 1 ? NaN : g ? 0 : b);
  if (r == null ? (ye = !1, d = T) : d = r, C.precision = d += y, n = rr(g), a = n.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      b = b.times(e), n = rr(b.d), a = n.charAt(0), p++;
    o = b.e, a > 1 ? (b = new C("0." + n), o++) : b = new C(a + "." + n.slice(1));
  } else
    return u = _t(C, d + 2, T).times(o + ""), b = ln(new C(a + "." + n.slice(1)), d - y).plus(u), C.precision = T, r == null ? me(b, T, O, ye = !0) : b;
  for (v = b, s = l = b = Be(b.minus(1), b.plus(1), d, 1), f = me(b.times(b), d, 1), t = 3; ; ) {
    if (l = me(l.times(f), d, 1), u = s.plus(Be(l, new C(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(_t(C, d + 2, T).times(o + ""))), s = Be(s, new C(p), d, 1), r == null)
        if (Ba(s.d, d - y, O, i))
          C.precision = d += y, u = l = b = Be(v.minus(1), v.plus(1), d, 1), f = me(b.times(b), d, 1), t = i = 1;
        else
          return me(s, C.precision = T, O, ye = !0);
      else
        return C.precision = T, s;
    s = u, t += 2;
  }
}
function Ku(e) {
  return String(e.s * e.s / 0);
}
function si(e, r) {
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
function Ep(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Wu.test(r))
      return si(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Pp.test(r))
    n = 16, r = r.toLowerCase();
  else if (Tp.test(r))
    n = 2;
  else if (Op.test(r))
    n = 8;
  else
    throw Error(mn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = qu(a, new a(n), o, o * 2)), u = Yt(r, n, Nr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = go(u, d), e.d = u, ye = !1, l && (e = Be(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : sn.pow(2, s))), ye = !0, e);
}
function Bp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Wn(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / yo(5, n)), r = Wn(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Wn(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / he);
  for (ye = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = Be(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Be(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return ye = !0, l.d.length = d + 1, l;
}
function yo(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Zu(e, r) {
  var n, a = r.s < 0, t = Br(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return jr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    jr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return jr = $l(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    jr = $l(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Hi(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, p = e.constructor, y = n !== void 0;
  if (y ? (pr(n, 1, bn), a === void 0 ? a = p.rounding : pr(a, 0, 8)) : (n = p.precision, a = p.rounding), !e.isFinite())
    d = Ku(e);
  else {
    for (d = Yr(e), l = d.indexOf("."), y ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new p(1), f.e = d.length - l, f.d = Yt(Yr(f), 10, t), f.e = f.d.length), v = Yt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = y ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new p(e), e.d = v, e.e = o, e = Be(e, f, n, a, 0, t), v = e.d, o = e.e, u = Yu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ti.charAt(v[l]);
      if (y) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Yt(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += ti.charAt(v[l]);
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
function Tl(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Np(e) {
  return new this(e).abs();
}
function Dp(e) {
  return new this(e).acos();
}
function Ap(e) {
  return new this(e).acosh();
}
function zp(e, r) {
  return new this(e).plus(r);
}
function Lp(e) {
  return new this(e).asin();
}
function Rp(e) {
  return new this(e).asinh();
}
function Up(e) {
  return new this(e).atan();
}
function Yp(e) {
  return new this(e).atanh();
}
function Hp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Br(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Br(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Br(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Be(e, r, o, 1)), r = Br(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Be(e, r, o, 1)), n;
}
function Fp(e) {
  return new this(e).cbrt();
}
function jp(e) {
  return me(e = new this(e), e.e + 1, 2);
}
function Wp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Gp(e) {
  if (!e || typeof e != "object")
    throw Error(ho + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    bn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Nn,
    0,
    "toExpPos",
    0,
    Nn,
    "maxE",
    0,
    Nn,
    "minE",
    -Nn,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (n = o[r], t && (this[n] = oi[n]), (a = e[n]) !== void 0)
      if (tr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(mn + n + ": " + a);
  if (n = "crypto", t && (this[n] = oi[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Fu);
      else
        this[n] = !1;
    else
      throw Error(mn + n + ": " + a);
  return this;
}
function qp(e) {
  return new this(e).cos();
}
function Xp(e) {
  return new this(e).cosh();
}
function Ju(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Pl(o)) {
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
      return si(u, o.toString());
    } else if (s !== "string")
      throw Error(mn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Wu.test(o) ? si(u, o) : Ep(u, o);
  }
  if (t.prototype = J, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Gp, t.clone = Ju, t.isDecimal = Pl, t.abs = Np, t.acos = Dp, t.acosh = Ap, t.add = zp, t.asin = Lp, t.asinh = Rp, t.atan = Up, t.atanh = Yp, t.atan2 = Hp, t.cbrt = Fp, t.ceil = jp, t.clamp = Wp, t.cos = qp, t.cosh = Xp, t.div = Kp, t.exp = Zp, t.floor = Jp, t.hypot = Qp, t.ln = _p, t.log = xp, t.log10 = rh, t.log2 = eh, t.max = nh, t.min = ah, t.mod = th, t.mul = oh, t.pow = ih, t.random = lh, t.round = sh, t.sign = uh, t.sin = dh, t.sinh = vh, t.sqrt = fh, t.sub = ch, t.sum = mh, t.tan = ph, t.tanh = hh, t.trunc = gh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Kp(e, r) {
  return new this(e).div(r);
}
function Zp(e) {
  return new this(e).exp();
}
function Jp(e) {
  return me(e = new this(e), e.e + 1, 3);
}
function Qp() {
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
function Pl(e) {
  return e instanceof sn || e && e.toStringTag === ju || !1;
}
function _p(e) {
  return new this(e).ln();
}
function xp(e, r) {
  return new this(e).log(r);
}
function eh(e) {
  return new this(e).log(2);
}
function rh(e) {
  return new this(e).log(10);
}
function nh() {
  return Xu(this, arguments, "lt");
}
function ah() {
  return Xu(this, arguments, "gt");
}
function th(e, r) {
  return new this(e).mod(r);
}
function oh(e, r) {
  return new this(e).mul(r);
}
function ih(e, r) {
  return new this(e).pow(r);
}
function lh(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : pr(e, 1, bn), a = Math.ceil(e / he), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = r[o], t >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); o < a; )
        t = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Fu);
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
function sh(e) {
  return me(e = new this(e), e.e + 1, this.rounding);
}
function uh(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function dh(e) {
  return new this(e).sin();
}
function vh(e) {
  return new this(e).sinh();
}
function fh(e) {
  return new this(e).sqrt();
}
function ch(e, r) {
  return new this(e).sub(r);
}
function mh() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (ye = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return ye = !0, me(n, this.precision, this.rounding);
}
function ph(e) {
  return new this(e).tan();
}
function hh(e) {
  return new this(e).tanh();
}
function gh(e) {
  return me(e = new this(e), e.e + 1, 1);
}
J[Symbol.for("nodejs.util.inspect.custom")] = J.toString;
J[Symbol.toStringTag] = "Decimal";
var sn = J.constructor = Ju(oi);
Jt = new sn(Jt);
Qt = new sn(Qt);
var yh = {
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
  n: bh,
  classes: wh
} = re("counter"), Ol = 100, Vl = 600, Ch = ["inputmode", "readonly", "disabled"];
function Sh(e, r) {
  var n = le("var-icon"), a = le("var-button"), t = le("var-form-details");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      De({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Q(a, {
        class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
        style: q({
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
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), $e(D("input", {
        class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
        style: q({
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
      }, null, 46, Ch), [[Zv, e.inputValue]]), Q(a, {
        class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
        style: q({
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
var Qu = ee({
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
  props: yh,
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
    } = a ?? {}, d, v, f, p, y = () => l(e.rules, e.modelValue), b = (F) => {
      Le(() => {
        var {
          validateTrigger: W,
          rules: ae,
          modelValue: M
        } = e;
        o(W, F, ae, M);
      });
    }, g = () => {
      var {
        min: F
      } = e;
      S(e["onUpdate:modelValue"], F != null ? L(F) : 0), i();
    }, C = {
      reset: g,
      validate: y,
      resetValidation: i
    }, O = R(() => {
      var {
        max: F,
        modelValue: W
      } = e;
      return F != null && L(W) >= L(F);
    }), T = R(() => {
      var {
        min: F,
        modelValue: W
      } = e;
      return F != null && L(W) <= L(F);
    }), k = (F) => {
      var {
        decimalLength: W,
        max: ae,
        min: M
      } = e, N = L(F);
      return ae != null && N > L(ae) && (N = L(ae)), M != null && N < L(M) && (N = L(M)), F = String(N), W != null && (F = N.toFixed(L(W))), F;
    }, V = (F) => {
      var {
        lazyChange: W,
        onBeforeChange: ae
      } = e, {
        value: M
      } = F.target, N = k(M);
      W ? S(ae, L(N), z) : A(N), b("onInputChange");
    }, I = () => {
      var {
        disabled: F,
        readonly: W,
        disableDecrement: ae,
        decrementButton: M,
        lazyChange: N,
        step: G,
        modelValue: ne,
        onDecrement: H,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || W || ae || !M) && !T.value) {
        var _ = new sn(L(ne)).minus(new sn(L(G))).toString(), fe = k(_), Se = L(fe);
        S(H, Se), N ? S(Z, Se, z) : (A(fe), b("onDecrement"));
      }
    }, E = () => {
      var {
        disabled: F,
        readonly: W,
        disableIncrement: ae,
        incrementButton: M,
        lazyChange: N,
        step: G,
        modelValue: ne,
        onIncrement: H,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || W || ae || !M) && !O.value) {
        var _ = new sn(L(ne)).plus(new sn(L(G))).toString(), fe = k(_), Se = L(fe);
        S(H, Se), N ? S(Z, Se, z) : (A(fe), b("onIncrement"));
      }
    }, m = () => {
      var {
        press: F,
        lazyChange: W
      } = e;
      !F || W || (p = window.setTimeout(() => {
        K();
      }, Vl));
    }, w = () => {
      var {
        press: F,
        lazyChange: W
      } = e;
      !F || W || (f = window.setTimeout(() => {
        X();
      }, Vl));
    }, U = () => {
      v && clearTimeout(v), p && clearTimeout(p);
    }, B = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, X = () => {
      d = window.setTimeout(() => {
        E(), X();
      }, Ol);
    }, K = () => {
      v = window.setTimeout(() => {
        I(), K();
      }, Ol);
    }, A = (F) => {
      r.value = F;
      var W = L(F);
      S(e["onUpdate:modelValue"], W);
    }, z = (F) => {
      A(k(String(F))), b("onLazyChange");
    };
    return S(n, C), se(() => e.modelValue, (F) => {
      A(k(String(F))), S(e.onChange, L(F));
    }), A(k(String(e.modelValue))), {
      n: bh,
      classes: wh,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: T,
      validate: y,
      reset: g,
      resetValidation: i,
      handleChange: V,
      decrement: I,
      increment: E,
      pressDecrement: m,
      pressIncrement: w,
      releaseDecrement: U,
      releaseIncrement: B,
      toSizeUnit: be,
      toNumber: L
    };
  }
});
Qu.render = Sh;
const Na = Qu;
te(Na);
var Ck = Na, _u = 60, xu = _u * 60, ed = xu * 24, kh = ed * 7, Gn = 1e3, Io = _u * Gn, Ml = xu * Gn, $h = ed * Gn, Th = kh * Gn, Fi = "millisecond", Dn = "second", An = "minute", zn = "hour", en = "day", Ht = "week", Er = "month", rd = "quarter", rn = "year", Ln = "date", Ph = "YYYY-MM-DDTHH:mm:ssZ", Il = "Invalid Date", Oh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Vh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Mh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ui = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, Ih = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + ui(t, 2, "0") + ":" + ui(o, 2, "0");
}, Eh = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Er), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Er);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, Bh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, Nh = function(r) {
  var n = {
    M: Er,
    y: rn,
    w: Ht,
    d: en,
    D: Ln,
    h: zn,
    m: An,
    s: Dn,
    ms: Fi,
    Q: rd
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Dh = function(r) {
  return r === void 0;
};
const Ah = {
  s: ui,
  z: Ih,
  m: Eh,
  a: Bh,
  p: Nh,
  u: Dh
};
var sa = "en", Sn = {};
Sn[sa] = Mh;
var ji = function(r) {
  return r instanceof bo;
}, xt = function e(r, n, a) {
  var t;
  if (!r)
    return sa;
  if (typeof r == "string") {
    var o = r.toLowerCase();
    Sn[o] && (t = o), n && (Sn[o] = n, t = o);
    var l = r.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = r.name;
    Sn[i] = r, t = i;
  }
  return !a && t && (sa = t), t || !a && sa;
}, de = function(r, n) {
  if (ji(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new bo(a);
}, zh = function(r, n) {
  return de(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ee = Ah;
Ee.l = xt;
Ee.i = ji;
Ee.w = zh;
var Lh = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ee.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(Oh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, bo = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = xt(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = Lh(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Ee;
  }, r.isValid = function() {
    return this.$d.toString() !== Il;
  }, r.isSame = function(a, t) {
    var o = de(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return de(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < de(a);
  }, r.$g = function(a, t, o) {
    return Ee.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Ee.u(t) ? !0 : t, i = Ee.p(a), s = function(C, O) {
      var T = Ee.w(o.$u ? Date.UTC(o.$y, O, C) : new Date(o.$y, O, C), o);
      return l ? T : T.endOf(en);
    }, u = function(C, O) {
      var T = [0, 0, 0, 0], k = [23, 59, 59, 999];
      return Ee.w(o.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? T : k).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, p = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case rn:
        return l ? s(1, 0) : s(31, 11);
      case Er:
        return l ? s(1, v) : s(0, v + 1);
      case Ht: {
        var y = this.$locale().weekStart || 0, b = (d < y ? d + 7 : d) - y;
        return s(l ? f - b : f + (6 - b), v);
      }
      case en:
      case Ln:
        return u(p + "Hours", 0);
      case zn:
        return u(p + "Minutes", 1);
      case An:
        return u(p + "Seconds", 2);
      case Dn:
        return u(p + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Ee.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[en] = i + "Date", o[Ln] = i + "Date", o[Er] = i + "Month", o[rn] = i + "FullYear", o[zn] = i + "Hours", o[An] = i + "Minutes", o[Dn] = i + "Seconds", o[Fi] = i + "Milliseconds", o)[l], u = l === en ? this.$D + (t - this.$W) : t;
    if (l === Er || l === rn) {
      var d = this.clone().set(Ln, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ln, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, r.set = function(a, t) {
    return this.clone().$set(a, t);
  }, r.get = function(a) {
    return this[Ee.p(a)]();
  }, r.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Ee.p(t), s = function(f) {
      var p = de(o);
      return Ee.w(p.date(p.date() + Math.round(f * a)), o);
    };
    if (i === Er)
      return this.set(Er, this.$M + a);
    if (i === rn)
      return this.set(rn, this.$y + a);
    if (i === en)
      return s(1);
    if (i === Ht)
      return s(7);
    var u = (l = {}, l[An] = Io, l[zn] = Ml, l[Dn] = Gn, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Ee.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Il;
    var l = a || Ph, i = Ee.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, p = o.meridiem, y = function(T, k, V, I) {
      return T && (T[k] || T(t, l)) || V[k].slice(0, I);
    }, b = function(T) {
      return Ee.s(s % 12 || 12, T, "0");
    }, g = p || function(O, T, k) {
      var V = O < 12 ? "AM" : "PM";
      return k ? V.toLowerCase() : V;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ee.s(d + 1, 2, "0"),
      MMM: y(o.monthsShort, d, f, 3),
      MMMM: y(f, d),
      D: this.$D,
      DD: Ee.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: y(o.weekdaysMin, this.$W, v, 2),
      ddd: y(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Ee.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Ee.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ee.s(this.$s, 2, "0"),
      SSS: Ee.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(Vh, function(O, T) {
      return T || C[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Ee.p(t), s = de(a), u = (s.utcOffset() - this.utcOffset()) * Io, d = this - s, v = Ee.m(this, s);
    return v = (l = {}, l[rn] = v / 12, l[Er] = v, l[rd] = v / 3, l[Ht] = (d - u) / Th, l[en] = (d - u) / $h, l[zn] = d / Ml, l[An] = d / Io, l[Dn] = d / Gn, l)[i] || d, o ? v : Ee.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Er).$D;
  }, r.$locale = function() {
    return Sn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = xt(a, t, !0);
    return l && (o.$L = l), o;
  }, r.clone = function() {
    return Ee.w(this.$d, this);
  }, r.toDate = function() {
    return new Date(this.valueOf());
  }, r.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, r.toISOString = function() {
    return this.$d.toISOString();
  }, r.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), nd = bo.prototype;
de.prototype = nd;
[["$ms", Fi], ["$s", Dn], ["$m", An], ["$H", zn], ["$W", en], ["$M", Er], ["$y", rn], ["$D", Ln]].forEach(function(e) {
  nd[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
de.extend = function(e, r) {
  return e.$i || (e(r, bo, de), e.$i = !0), de;
};
de.locale = xt;
de.isDayjs = ji;
de.unix = function(e) {
  return de(e * 1e3);
};
de.en = Sn[sa];
de.Ls = Sn;
de.p = {};
const ad = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, td = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Rh(e) {
  return ["date", "month"].includes(e);
}
var Ft = [{
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
}], ia = [{
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
}], Uh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Rh
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
  n: Yh
} = re("picker-header");
function Hh(e, r) {
  var n = le("var-icon"), a = le("var-button");
  return h(), $(
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
    }, 8, ["disabled"]), D(
      "div",
      {
        class: c(e.n("value")),
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [Q(Ue, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: ce(() => [(h(), $(
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
var od = ee({
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
        return L(v) + t.value;
      var f = (i = _e.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return _e.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return se(() => e.date, () => {
      t.value = 0;
    }), {
      n: Yh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
od.render = Hh;
const id = od;
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
de.extend(ad);
de.extend(td);
var {
  n: Nt,
  classes: Fh
} = re("month-picker"), {
  n: Dt
} = re("date-picker");
function jh(e, r) {
  var n = le("panel-header"), a = le("var-button");
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [D(
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
        default: ce(() => [(h(), $("ul", {
          key: e.panelKey
        }, [(h(!0), $(
          Me,
          null,
          He(e.MONTH_LIST, (t) => (h(), $("li", {
            key: t.index
          }, [Q(a, De({
            type: "primary",
            "var-month-picker-cover": "",
            ripple: !1,
            elevation: e.componentProps.buttonElevation
          }, di({}, e.buttonProps(t.index)), {
            onClick: (o) => e.chooseMonth(t, o)
          }), {
            default: ce(() => [ke(
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
var ld = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: id
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
      var T, k;
      return (T = (k = _e.value.datePickerMonthDict) == null ? void 0 : k[O].abbr) != null ? T : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: T
        },
        componentProps: {
          min: k,
          max: V
        }
      } = e, I = !0, E = !0, m = T + "-" + O;
      return V && (I = de(m).isSameOrBefore(de(V), "month")), k && (E = de(m).isSameOrAfter(de(k), "month")), I && E;
    }, p = (O) => {
      var {
        choose: {
          chooseMonths: T,
          chooseDays: k,
          chooseRangeMonth: V
        },
        componentProps: {
          type: I,
          range: E
        }
      } = e;
      if (E) {
        if (!V.length)
          return !1;
        var m = de(O).isSameOrBefore(de(V[1]), "month"), w = de(O).isSameOrAfter(de(V[0]), "month");
        return m && w;
      }
      return I === "month" ? T.includes(O) : k.some((U) => U.includes(O));
    }, y = (O) => {
      var {
        choose: {
          chooseMonth: T
        },
        preview: {
          previewYear: k
        },
        componentProps: {
          allowedDates: V,
          color: I,
          multiple: E,
          range: m
        }
      } = e, w = k + "-" + O, U = () => m || E ? p(w) : (T == null ? void 0 : T.index) === O && u.value, B = () => f(O) ? V ? !V(w) : !1 : !0, X = B(), K = () => X ? !0 : m || E ? !p(w) : !u.value || (T == null ? void 0 : T.index) !== O, A = () => d.value && t === O && e.componentProps.showCurrent ? (m || E || u.value) && X ? !0 : m || E ? !p(w) : u.value ? (T == null ? void 0 : T.index) !== t : !0 : !1, z = () => X ? "" : A() ? I ?? "" : U() ? "" : Dt() + "-color-cover", F = z().startsWith(Dt());
      return {
        outline: A(),
        text: K(),
        color: K() ? "" : I,
        textColor: F ? "" : z(),
        [Dt() + "-color-cover"]: F,
        class: Fh(Nt("button"), [X, Nt("button--disabled")]),
        disabled: X
      };
    }, b = (O, T) => {
      var k = T.currentTarget;
      k.classList.contains(Nt("button--disabled")) || n("choose-month", O);
    }, g = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, C = (O) => {
      i.value.checkDate(O);
    };
    return se(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: T,
          max: k
        }
      } = e;
      k && (s.right = !de("" + (L(O) + 1)).isSameOrBefore(de(k), "year")), T && (s.left = !de("" + (L(O) - 1)).isSameOrAfter(de(T), "year"));
    }, {
      immediate: !0
    }), {
      n: Nt,
      nDate: Dt,
      pack: _e,
      MONTH_LIST: Ft,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: C,
      buttonProps: y,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: g
    };
  }
});
ld.render = jh;
const Wh = ld;
var {
  n: El,
  classes: Gh
} = re("year-picker"), qh = ["onClick"];
function Xh(e, r) {
  return h(), $(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), $(
      Me,
      null,
      He(e.yearList, (n) => (h(), $("li", {
        key: n,
        class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
        style: q({
          color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(n)
      }, ie(n), 15, qh))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var sd = ee({
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
      var u = [L(l) + 100, L(l) - 100];
      if (i) {
        var d = de(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = de(s).format("YYYY-MM-D"), p = L(f.split("-")[0]);
        if (p < u[0] && p > u[1] && (u = [u[0], p]), p >= u[0])
          return [p];
      }
      for (var y = u[0]; y >= u[1]; y--)
        o.push(y);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return or(() => {
      var o = document.querySelector("." + El("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: El,
      classes: Gh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
sd.render = Xh;
const Kh = sd;
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
de.extend(ad);
de.extend(td);
var {
  n: Bn,
  classes: Zh
} = re("day-picker"), {
  n: At
} = re("date-picker");
function Jh(e, r) {
  var n = le("panel-header"), a = le("var-button");
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [D(
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
        default: ce(() => [(h(), $("div", {
          key: e.panelKey
        }, [D(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(h(!0), $(
            Me,
            null,
            He(e.sortWeekList, (t) => (h(), $(
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
          [(h(!0), $(
            Me,
            null,
            He(e.days, (t, o) => (h(), $("li", {
              key: o
            }, [Q(a, De({
              type: "primary",
              "var-day-picker-cover": "",
              round: "",
              ripple: !1,
              elevation: e.componentProps.buttonElevation
            }, vi({}, e.buttonProps(t)), {
              onClick: (l) => e.chooseDay(t, l)
            }), {
              default: ce(() => [ke(
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
var ud = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: id
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
      var m;
      return e.choose.chooseYear === e.preview.previewYear && ((m = e.choose.chooseMonth) == null ? void 0 : m.index) === e.preview.previewMonth.index;
    }), p = R(() => {
      var m = ia.findIndex((w) => w.index === e.componentProps.firstDayOfWeek);
      return m === -1 || m === 0 ? ia : ia.slice(m).concat(ia.slice(0, m));
    }), y = (m) => {
      var w, U;
      return (w = (U = _e.value.datePickerWeekDict) == null ? void 0 : U[m].abbr) != null ? w : "";
    }, b = (m) => m > 0 ? m : "", g = () => {
      var {
        preview: {
          previewMonth: m,
          previewYear: w
        }
      } = e, U = de(w + "-" + m.index).daysInMonth(), B = de(w + "-" + m.index + "-01").day(), X = p.value.findIndex((K) => K.index === "" + B);
      l.value = [...Array(X).fill(-1), ...Array.from(Array(U + 1).keys())].filter((K) => K);
    }, C = () => {
      var {
        preview: {
          previewYear: m,
          previewMonth: w
        },
        componentProps: {
          max: U,
          min: B
        }
      } = e;
      if (U) {
        var X = m + "-" + (L(w.index) + 1);
        d.right = !de(X).isSameOrBefore(de(U), "month");
      }
      if (B) {
        var K = m + "-" + (L(w.index) - 1);
        d.left = !de(K).isSameOrAfter(de(B), "month");
      }
    }, O = (m) => {
      var {
        preview: {
          previewYear: w,
          previewMonth: U
        },
        componentProps: {
          min: B,
          max: X
        }
      } = e, K = !0, A = !0, z = w + "-" + U.index + "-" + m;
      return X && (K = de(z).isSameOrBefore(de(X), "day")), B && (A = de(z).isSameOrAfter(de(B), "day")), K && A;
    }, T = (m) => {
      var {
        choose: {
          chooseDays: w,
          chooseRangeDay: U
        },
        componentProps: {
          range: B
        }
      } = e;
      if (B) {
        if (!U.length)
          return !1;
        var X = de(m).isSameOrBefore(de(U[1]), "day"), K = de(m).isSameOrAfter(de(U[0]), "day");
        return X && K;
      }
      return w.includes(m);
    }, k = (m) => {
      if (m < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Bn("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: w
        },
        preview: {
          previewYear: U,
          previewMonth: B
        },
        componentProps: {
          allowedDates: X,
          color: K,
          multiple: A,
          range: z
        }
      } = e, F = U + "-" + B.index + "-" + m, W = () => z || A ? T(F) : L(w) === m && f.value, ae = () => O(m) ? X ? !X(F) : !1 : !0, M = ae(), N = () => M ? !0 : z || A ? !T(F) : !f.value || L(w) !== m, G = () => v.value && L(o) === m && e.componentProps.showCurrent ? (z || A || f.value) && M ? !0 : z || A ? !T(F) : f.value ? w !== o : !0 : !1, ne = () => M ? "" : G() ? K ?? "" : W() ? "" : At() + "-color-cover", H = ne().startsWith(At());
      return {
        text: N(),
        outline: G(),
        textColor: H ? "" : ne(),
        [At() + "-color-cover"]: H,
        class: Zh(Bn("button"), Bn("button--usable"), [M, Bn("button--disabled")]),
        disabled: M
      };
    }, V = (m) => {
      i.value = m === "prev", s.value += m === "prev" ? -1 : 1, n("check-preview", "month", m);
    }, I = (m, w) => {
      var U = w.currentTarget;
      U.classList.contains(Bn("button--disabled")) || n("choose-day", m);
    }, E = (m) => {
      u.value.checkDate(m);
    };
    return or(() => {
      g(), C();
    }), se(() => e.preview, () => {
      g(), C();
    }), {
      n: Bn,
      nDate: At,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: p,
      panelBtnDisabled: d,
      forwardRef: E,
      filterDay: b,
      getDayAbbr: y,
      checkDate: V,
      chooseDay: I,
      buttonProps: k
    };
  }
});
ud.render = Jh;
const Qh = ud;
var {
  n: _h,
  classes: xh
} = re("date-picker");
function eg(e, r) {
  var n = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: r[0] || (r[0] = (o) => e.clickEl("year"))
        },
        [j(e.$slots, "year", {
          year: e.chooseYear
        }, () => [ke(
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
          onClick: r[1] || (r[1] = (o) => e.clickEl("date"))
        },
        [Q(Ue, {
          name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
        }, {
          default: ce(() => {
            var o, l, i;
            return [e.type === "month" ? (h(), $("div", {
              key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
            }, [e.range ? j(e.$slots, "range", {
              key: 0,
              choose: e.getChoose.chooseRangeMonth
            }, () => [ke(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )]) : e.multiple ? j(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseMonths
            }, () => [ke(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )]) : j(e.$slots, "month", {
              key: 2,
              month: (l = e.chooseMonth) == null ? void 0 : l.index,
              year: e.chooseYear
            }, () => [ke(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )])])) : (h(), $("div", {
              key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
            }, [e.range ? j(e.$slots, "range", {
              key: 0,
              choose: e.formatRange
            }, () => [ke(
              ie(e.getDateTitle),
              1
              /* TEXT */
            )]) : e.multiple ? j(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseDays
            }, () => [ke(
              ie(e.getDateTitle),
              1
              /* TEXT */
            )]) : j(e.$slots, "date", Ct(De({
              key: 2
            }, e.slotProps)), () => [ke(
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
        default: ce(() => [e.getPanelType === "year" ? (h(), we(n, {
          key: 0,
          "component-props": e.componentProps,
          preview: e.previewYear,
          onChooseYear: e.getChooseYear
        }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), we(a, {
          key: 1,
          ref: "monthPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "click-year": () => e.clickEl("year"),
          "component-props": e.componentProps,
          onChooseMonth: e.getChooseMonth,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), we(t, {
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
var dd = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Wh,
    YearPickerPanel: Kh,
    DayPickerPanel: Qh
  },
  props: Uh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = de().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Ft.find((ue) => ue.index === i), u = P(!1), d = P(!1), v = P(!0), f = P(), p = P(), y = P(), b = P(s), g = P(l), C = P(!1), O = P([]), T = P([]), k = P([]), V = P([]), I = P(null), E = P(null), m = Re({
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
    }), w = R(() => ({
      chooseMonth: f.value,
      chooseYear: p.value,
      chooseDay: y.value,
      chooseMonths: O.value,
      chooseDays: T.value,
      chooseRangeMonth: k.value,
      chooseRangeDay: V.value
    })), U = R(() => ({
      previewMonth: b.value,
      previewYear: g.value
    })), B = R(() => {
      var {
        multiple: ue,
        range: Ce
      } = e;
      if (Ce)
        return k.value.length ? k.value[0] + " ~ " + k.value[1] : "";
      var ge = "";
      if (f.value) {
        var Te, Pe;
        ge = (Te = (Pe = _e.value.datePickerMonthDict) == null ? void 0 : Pe[f.value.index].name) != null ? Te : "";
      }
      return ue ? "" + O.value.length + _e.value.datePickerSelected : ge;
    }), X = R(() => {
      var ue, Ce, ge, Te, {
        multiple: Pe,
        range: Ye
      } = e;
      if (Ye) {
        var sr = V.value.map((Oo) => de(Oo).format("YYYY-MM-DD"));
        return sr.length ? sr[0] + " ~ " + sr[1] : "";
      }
      if (Pe)
        return "" + T.value.length + _e.value.datePickerSelected;
      if (!p.value || !f.value || !y.value)
        return "";
      var wr = de(p.value + "-" + f.value.index + "-" + y.value).day(), En = ia.find((Oo) => Oo.index === "" + wr), rl = (ue = (Ce = _e.value.datePickerWeekDict) == null ? void 0 : Ce[En.index].name) != null ? ue : "", Hv = (ge = (Te = _e.value.datePickerMonthDict) == null ? void 0 : Te[f.value.index].name) != null ? ge : "", Fv = kn(y.value, 2, "0");
      return _e.value.lang === "zh-CN" ? f.value.index + "-" + Fv + " " + rl.slice(0, 3) : rl.slice(0, 3) + ", " + Hv.slice(0, 3) + " " + y.value;
    }), K = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), A = R(() => !e.touchable || ["", "year"].includes(K.value)), z = R(() => {
      var ue, Ce, ge, Te, Pe = de(p.value + "-" + ((ue = f.value) == null ? void 0 : ue.index) + "-" + y.value).day(), Ye = y.value ? kn(y.value, 2, "0") : "";
      return {
        week: "" + Pe,
        year: (Ce = p.value) != null ? Ce : "",
        month: (ge = (Te = f.value) == null ? void 0 : Te.index) != null ? ge : "",
        date: Ye
      };
    }), F = R(() => w.value.chooseRangeDay.map((ue) => de(ue).format("YYYY-MM-DD"))), W = R(() => p.value === g.value), ae = R(() => {
      var ue;
      return ((ue = f.value) == null ? void 0 : ue.index) === b.value.index;
    }), M = (ue) => {
      ue === "year" ? u.value = !0 : ue === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (ue) => {
      if (!A.value) {
        var {
          clientX: Ce,
          clientY: ge
        } = ue.touches[0];
        r = Ce, n = ge;
      }
    }, G = (ue, Ce) => ue >= Ce && ue > 20 ? "x" : "y", ne = (ue) => {
      if (!A.value) {
        var {
          clientX: Ce,
          clientY: ge
        } = ue.touches[0], Te = Ce - r, Pe = ge - n;
        t = G(Math.abs(Te), Math.abs(Pe)), a = Te > 0 ? "prev" : "next";
      }
    }, H = () => {
      if (!(A.value || t !== "x")) {
        var ue = K.value === "month" ? I : E;
        so(() => {
          ue.value.forwardRef(a), Ge();
        });
      }
    }, Z = (ue, Ce) => {
      var ge = Ce === "month" ? k : V;
      if (ge.value = v.value ? [ue, ue] : [ge.value[0], ue], v.value = !v.value, v.value) {
        var Te = de(ge.value[0]).isAfter(ge.value[1]), Pe = Te ? [ge.value[1], ge.value[0]] : [...ge.value];
        S(e["onUpdate:modelValue"], Pe), S(e.onChange, Pe);
      }
    }, _ = (ue, Ce) => {
      var ge = Ce === "month" ? O : T, Te = Ce === "month" ? "YYYY-MM" : "YYYY-MM-DD", Pe = ge.value.map((sr) => de(sr).format(Te)), Ye = Pe.findIndex((sr) => sr === ue);
      Ye === -1 ? Pe.push(ue) : Pe.splice(Ye, 1), S(e["onUpdate:modelValue"], Pe), S(e.onChange, Pe);
    }, fe = (ue, Ce) => !p.value || !f.value ? !1 : W.value ? ue === "month" ? Ce.index < f.value.index : ae.value ? Ce < L(y.value) : f.value.index > b.value.index : p.value > g.value, Se = (ue) => {
      var {
        readonly: Ce,
        range: ge,
        multiple: Te,
        onChange: Pe,
        "onUpdate:modelValue": Ye
      } = e;
      if (!(ue < 0 || Ce)) {
        C.value = fe("day", ue);
        var sr = g.value + "-" + b.value.index + "-" + ue, wr = de(sr).format("YYYY-MM-DD");
        ge ? Z(wr, "day") : Te ? _(wr, "day") : (S(Ye, wr), S(Pe, wr));
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
      if (C.value = fe("month", ue), Ce === "month" && !ge) {
        var En = g.value + "-" + ue.index;
        Te ? Z(En, "month") : Pe ? _(En, "month") : (S(wr, En), S(Ye, En));
      } else
        b.value = ue, S(sr, L(g.value), L(b.value.index));
      d.value = !1;
    }, oe = (ue) => {
      g.value = "" + ue, u.value = !1, d.value = !0, S(e.onPreview, L(g.value), L(b.value.index));
    }, ve = (ue, Ce) => {
      var ge = Ce === "prev" ? -1 : 1;
      if (ue === "year")
        g.value = "" + (L(g.value) + ge);
      else {
        var Te = L(b.value.index) + ge;
        Te < 1 && (g.value = "" + (L(g.value) - 1), Te = 12), Te > 12 && (g.value = "" + (L(g.value) + 1), Te = 1), b.value = Ft.find((Pe) => L(Pe.index) === Te);
      }
      S(e.onPreview, L(g.value), L(b.value.index));
    }, pe = () => (e.multiple || e.range) && !Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Oe = (ue) => Ve(ue) ? !1 : ue === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, je = (ue, Ce) => {
      var ge = Ce === "month" ? k : V, Te = Ce === "month" ? "YYYY-MM" : "YYYY-MM-D", Pe = ue.map((wr) => de(wr).format(Te)).slice(0, 2), Ye = ge.value.some((wr) => Oe(wr));
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
        var [ge, Te, Pe] = Ce.split("-"), Ye = Ft.find((sr) => sr.index === Te);
        f.value = Ye, p.value = ge, y.value = Pe, b.value = Ye, g.value = ge;
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
    }), se(K, Ge), {
      n: _h,
      classes: xh,
      monthPanelEl: I,
      dayPanelEl: E,
      reverse: C,
      currentDate: o,
      chooseMonth: f,
      chooseYear: p,
      chooseDay: y,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: B,
      getDateTitle: X,
      getPanelType: K,
      getChoose: w,
      getPreview: U,
      componentProps: m,
      slotProps: z,
      formatRange: F,
      clickEl: M,
      handleTouchstart: N,
      handleTouchmove: ne,
      handleTouchend: H,
      getChooseDay: Se,
      getChooseMonth: Ie,
      getChooseYear: oe,
      checkPreview: ve,
      formatElevation: hr
    };
  }
});
dd.render = eg;
const Da = dd;
te(Da);
var Sk = Da;
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
function rg(e) {
  return ["left", "center", "right"].includes(e);
}
var ng = fi({
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
    validator: rg
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
}, xe(kt, [
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
  n: ag,
  classes: tg
} = re("dialog");
function og(e, r) {
  var n = le("var-button"), a = le("var-popup");
  return h(), we(a, {
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
    default: ce(() => [D(
      "div",
      De({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: ci({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [D(
        "div",
        {
          class: c(e.n("title"))
        },
        [j(e.$slots, "title", {}, () => [ke(
          ie(e.dt(e.title, e.pack.dialogTitle)),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.n("message")),
          style: q({
            textAlign: e.messageAlign
          })
        },
        [j(e.$slots, "default", {}, () => [ke(
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
        [e.cancelButton ? (h(), we(n, {
          key: 0,
          class: c(e.classes(e.n("button"), e.n("cancel-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.cancelButtonTextColor,
          color: e.cancelButtonColor,
          onClick: e.cancel
        }, {
          default: ce(() => [ke(
            ie(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : x("v-if", !0), e.confirmButton ? (h(), we(n, {
          key: 1,
          class: c(e.classes(e.n("button"), e.n("confirm-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.confirmButtonTextColor,
          color: e.confirmButtonColor,
          onClick: e.confirm
        }, {
          default: ce(() => [ke(
            ie(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
var vd = ee({
  name: "VarDialog",
  components: {
    VarPopup: Rr,
    VarButton: vr
  },
  inheritAttrs: !1,
  props: ng,
  setup(e) {
    var r = P(!1), n = P(!1), a = () => S(e["onUpdate:show"], !1), t = () => {
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
      n: ag,
      classes: tg,
      pack: _e,
      dt: lo,
      popupShow: r,
      popupCloseOnClickOverlay: n,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: be
    };
  }
});
vd.render = og;
const Ot = vd;
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
var an, ro = {};
function ig(e) {
  return e === void 0 && (e = {}), Fe(e) ? eo({}, ro, {
    message: e
  }) : eo({}, ro, e);
}
function Kr(e) {
  return ra() ? new Promise((r) => {
    Kr.close();
    var n = ig(e), a = Re(n);
    a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = aa(Ot, a, {
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
        S(a.onClosed), t(), an === a && (an = null);
      },
      onRouteChange: () => {
        t(), an === a && (an = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Kr.setDefaultOptions = function(e) {
  ro = e;
};
Kr.resetDefaultOptions = function() {
  ro = {};
};
Kr.close = function() {
  if (an != null) {
    var e = an;
    an = null, Le().then(() => {
      e.show = !1;
    });
  }
};
Kr.Component = Ot;
te(Ot);
te(Ot, Kr);
var kk = Ot, lg = {
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
  n: sg,
  classes: ug
} = re("divider");
function dg(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [e.vertical ? x("v-if", !0) : j(e.$slots, "default", {
      key: 0
    }, () => [e.description ? (h(), $(
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
var fd = ee({
  name: "VarDivider",
  props: lg,
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
      if (ks(i) || s)
        return {
          margin: u
        };
      var d = L(i), v = Math.abs(d) + (i + "").replace(d + "", "");
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
    }), wt(() => {
      l();
    }), {
      n: sg,
      classes: ug,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
fd.render = dg;
const Aa = fd;
te(Aa);
var $k = Aa, vg = {
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
    type: [String, Object],
    default: "body"
  }
};
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
function Bl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function fg(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Bl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Bl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: cg,
  classes: mg
} = re("drag");
function pg(e, r) {
  return h(), we(Jr, {
    to: e.teleport
  }, [D(
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
    [j(e.$slots, "default")],
    16
    /* FULL_PROPS */
  )], 8, ["to"]);
}
var cd = ee({
  name: "VarDrag",
  inheritAttrs: !1,
  props: vg,
  setup(e, r) {
    var {
      attrs: n
    } = r, a = P(null), t = P(0), o = P(0), l = Re({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), i = P(!1), s = P(!1), u = !1, d = 0, v = 0, f = (m) => {
      if (!e.disabled) {
        var {
          clientX: w,
          clientY: U
        } = m.touches[0];
        b(), d = w, v = U, u = !0;
      }
    }, p = /* @__PURE__ */ function() {
      var m = fg(function* (w) {
        if (!(!u || e.disabled)) {
          w.preventDefault(), s.value = !1, i.value = !0;
          var {
            clientX: U,
            clientY: B
          } = w.touches[0], X = U - d, K = B - v;
          d = U, v = B, e.direction.includes("x") && (t.value += X), e.direction.includes("y") && (o.value += K), T();
        }
      });
      return function(U) {
        return m.apply(this, arguments);
      };
    }(), y = () => {
      e.disabled || (u = !1, s.value = !0, O());
    }, b = () => {
      var {
        left: m,
        top: w
      } = g();
      t.value = m, o.value = w;
    }, g = () => {
      var m = Qe(a.value), w = Qe(window), U = m.top - w.top, B = w.bottom - m.bottom, X = m.left - w.left, K = w.right - m.right, {
        width: A,
        height: z
      } = m, {
        width: F,
        height: W
      } = w;
      return {
        top: U,
        bottom: B,
        left: X,
        right: K,
        width: A,
        height: z,
        halfWidth: A / 2,
        halfHeight: z / 2,
        windowWidth: F,
        windowHeight: W
      };
    }, C = () => {
      var m = g(), w = l.left, U = m.windowWidth - l.right - m.width, B = l.top, X = m.windowHeight - l.bottom - m.height;
      return {
        minX: w,
        minY: B,
        // fallback the drag element overflows boundary
        maxX: w < U ? U : w,
        maxY: B < X ? X : B
      };
    }, O = () => {
      if (e.attraction != null) {
        var {
          halfWidth: m,
          halfHeight: w,
          top: U,
          bottom: B,
          left: X,
          right: K
        } = g(), {
          minX: A,
          minY: z,
          maxX: F,
          maxY: W
        } = C(), ae = X + m - l.left, M = K + m - l.right, N = U + w - l.top, G = B + w - l.bottom, ne = ae <= M, H = N <= G;
        e.attraction.includes("x") && (t.value = ne ? A : F), e.attraction.includes("y") && (o.value = H ? z : W);
      }
    }, T = () => {
      var {
        minX: m,
        minY: w,
        maxX: U,
        maxY: B
      } = C();
      t.value = Rn(t.value, m, U), o.value = Rn(o.value, w, B);
    }, k = () => {
      var {
        top: m = 0,
        bottom: w = 0,
        left: U = 0,
        right: B = 0
      } = e.boundary;
      l.top = ze(m), l.bottom = ze(w), l.left = ze(U), l.right = ze(B);
    }, V = () => {
      var m, w = (m = n.style) != null ? m : {};
      return no({}, n, {
        style: no({}, w, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : w.top,
          left: i.value ? 0 : w.left,
          right: i.value ? "auto" : w.right,
          bottom: i.value ? "auto" : w.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : w.transform
        })
      });
    }, I = () => {
      i.value && (b(), T());
    }, E = () => {
      s.value = !1, i.value = !1, t.value = 0, o.value = 0;
    };
    return se(() => e.boundary, k), St(I), or(() => {
      k(), I();
    }), {
      drag: a,
      x: t,
      y: o,
      enableTransition: s,
      n: cg,
      classes: mg,
      getAttrs: V,
      handleTouchstart: f,
      handleTouchmove: p,
      handleTouchend: y,
      resize: I,
      reset: E
    };
  }
});
cd.render = pg;
const za = cd;
te(za);
var Tk = za, hg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return hg[r];
  });
}
var Wr = "top", pn = "bottom", $n = "right", un = "left", wo = "auto", Co = [Wr, pn, $n, un], So = "start", La = "end", gg = "clippingParents", md = "viewport", ta = "popper", yg = "reference", Nl = /* @__PURE__ */ Co.reduce(function(e, r) {
  return e.concat([r + "-" + So, r + "-" + La]);
}, []), pd = /* @__PURE__ */ [].concat(Co, [wo]).reduce(function(e, r) {
  return e.concat([r, r + "-" + So, r + "-" + La]);
}, []), bg = "beforeRead", wg = "read", Cg = "afterRead", Sg = "beforeMain", kg = "main", $g = "afterMain", Tg = "beforeWrite", Pg = "write", Og = "afterWrite", mi = [bg, wg, Cg, Sg, kg, $g, Tg, Pg, Og];
function Gr(e) {
  return e.split("-")[0];
}
var Vg = {
  start: "end",
  end: "start"
};
function Dl(e) {
  return e.replace(/start|end/g, function(r) {
    return Vg[r];
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
function Tn(e) {
  var r = Mr(e).Element;
  return e instanceof r || e instanceof Element;
}
function Sr(e) {
  var r = Mr(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function Wi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function wn(e) {
  return ((Tn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var ua = Math.max, Al = Math.min, qn = Math.round;
function pi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function hd() {
  return !/^((?!chrome|android).)*safari/i.test(pi());
}
function Xn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && Sr(e) && (t = e.offsetWidth > 0 && qn(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && qn(a.height) / e.offsetHeight || 1);
  var l = Tn(e) ? Mr(e) : window, i = l.visualViewport, s = !hd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Gi(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function qi(e) {
  return Xn(wn(e)).left + Gi(e).scrollLeft;
}
function Mg(e, r) {
  var n = Mr(e), a = wn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = hd();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + qi(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function Ig(e) {
  var r, n = wn(e), a = Gi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = ua(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = ua(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + qi(e), s = -a.scrollTop;
  return Ar(t || n).direction === "rtl" && (i += ua(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Hr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ko(e) {
  return Hr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Wi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wn(e)
  );
}
function Xi(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function gd(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : Sr(e) && Xi(e) ? e : gd(ko(e));
}
function da(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = gd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], Xi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(da(ko(l)))
  );
}
function Eg(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function zl(e) {
  return !Sr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function Bg(e) {
  var r = /firefox/i.test(pi()), n = /Trident/i.test(pi());
  if (n && Sr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ko(e);
  for (Wi(t) && (t = t.host); Sr(t) && ["html", "body"].indexOf(Hr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ki(e) {
  for (var r = Mr(e), n = zl(e); n && Eg(n) && Ar(n).position === "static"; )
    n = zl(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && Ar(n).position === "static") ? r : n || Bg(e) || r;
}
function Ng(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Wi(n)) {
    var a = r;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function hi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Dg(e, r) {
  var n = Xn(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Ll(e, r, n) {
  return r === md ? hi(Mg(e, n)) : Tn(r) ? Dg(r, n) : hi(Ig(wn(e)));
}
function Ag(e) {
  var r = da(ko(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && Sr(e) ? Ki(e) : e;
  return Tn(a) ? r.filter(function(t) {
    return Tn(t) && Ng(t, a) && Hr(t) !== "body";
  }) : [];
}
function zg(e, r, n, a) {
  var t = r === "clippingParents" ? Ag(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Ll(e, u, a);
    return s.top = ua(d.top, s.top), s.right = Al(d.right, s.right), s.bottom = Al(d.bottom, s.bottom), s.left = ua(d.left, s.left), s;
  }, Ll(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ra(e) {
  return e.split("-")[1];
}
function Lg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Gr(a) : null, o = a ? Ra(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case Wr:
      s = {
        x: l,
        y: r.y - n.height
      };
      break;
    case pn:
      s = {
        x: l,
        y: r.y + r.height
      };
      break;
    case $n:
      s = {
        x: r.x + r.width,
        y: i
      };
      break;
    case un:
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
  var u = t ? Lg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case So:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case La:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function Rg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ug(e) {
  return Object.assign({}, Rg(), e);
}
function Yg(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function bd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? gg : i, u = n.rootBoundary, d = u === void 0 ? md : u, v = n.elementContext, f = v === void 0 ? ta : v, p = n.altBoundary, y = p === void 0 ? !1 : p, b = n.padding, g = b === void 0 ? 0 : b, C = Ug(typeof g != "number" ? g : Yg(g, Co)), O = f === ta ? yg : ta, T = e.rects.popper, k = e.elements[y ? O : f], V = zg(Tn(k) ? k : k.contextElement || wn(e.elements.popper), s, d, l), I = Xn(e.elements.reference), E = yd({
    reference: I,
    element: T,
    strategy: "absolute",
    placement: t
  }), m = hi(Object.assign({}, T, E)), w = f === ta ? m : I, U = {
    top: V.top - w.top + C.top,
    bottom: w.bottom - V.bottom + C.bottom,
    left: V.left - w.left + C.left,
    right: w.right - V.right + C.right
  }, B = e.modifiersData.offset;
  if (f === ta && B) {
    var X = B[t];
    Object.keys(U).forEach(function(K) {
      var A = [$n, pn].indexOf(K) >= 0 ? 1 : -1, z = [Wr, pn].indexOf(K) >= 0 ? "y" : "x";
      U[K] += X[z] * A;
    });
  }
  return U;
}
function Hg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? pd : s, d = Ra(a), v = d ? i ? Nl : Nl.filter(function(y) {
    return Ra(y) === d;
  }) : Co, f = v.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var p = f.reduce(function(y, b) {
    return y[b] = bd(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gr(b)], y;
  }, {});
  return Object.keys(p).sort(function(y, b) {
    return p[y] - p[b];
  });
}
function Fg(e) {
  if (Gr(e) === wo)
    return [];
  var r = jt(e);
  return [Dl(e), r, Dl(r)];
}
function jg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, p = n.flipVariations, y = p === void 0 ? !0 : p, b = n.allowedAutoPlacements, g = r.options.placement, C = Gr(g), O = C === g, T = s || (O || !y ? [jt(g)] : Fg(g)), k = [g].concat(T).reduce(function(Z, _) {
      return Z.concat(Gr(_) === wo ? Hg(r, {
        placement: _,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : _);
    }, []), V = r.rects.reference, I = r.rects.popper, E = /* @__PURE__ */ new Map(), m = !0, w = k[0], U = 0; U < k.length; U++) {
      var B = k[U], X = Gr(B), K = Ra(B) === So, A = [Wr, pn].indexOf(X) >= 0, z = A ? "width" : "height", F = bd(r, {
        placement: B,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), W = A ? K ? $n : un : K ? pn : Wr;
      V[z] > I[z] && (W = jt(W));
      var ae = jt(W), M = [];
      if (o && M.push(F[X] <= 0), i && M.push(F[W] <= 0, F[ae] <= 0), M.every(function(Z) {
        return Z;
      })) {
        w = B, m = !1;
        break;
      }
      E.set(B, M);
    }
    if (m)
      for (var N = y ? 3 : 1, G = function(_) {
        var fe = k.find(function(Se) {
          var Ie = E.get(Se);
          if (Ie)
            return Ie.slice(0, _).every(function(oe) {
              return oe;
            });
        });
        if (fe)
          return w = fe, "break";
      }, ne = N; ne > 0; ne--) {
        var H = G(ne);
        if (H === "break")
          break;
      }
    r.placement !== w && (r.modifiersData[a]._skip = !0, r.placement = w, r.reset = !0);
  }
}
const Wg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: jg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Gg(e, r, n) {
  var a = Gr(e), t = [un, Wr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e
  })) : n, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [un, $n].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function qg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = pd.reduce(function(d, v) {
    return d[v] = Gg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Xg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: qg
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
    x: qn(r * t) / t || 0,
    y: qn(n * t) / t || 0
  };
}
function Rl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, p = f === void 0 ? 0 : f, y = l.y, b = y === void 0 ? 0 : y, g = typeof d == "function" ? d({
    x: p,
    y: b
  }) : {
    x: p,
    y: b
  };
  p = g.x, b = g.y;
  var C = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), T = un, k = Wr, V = window;
  if (u) {
    var I = Ki(n), E = "clientHeight", m = "clientWidth";
    if (I === Mr(n) && (I = wn(n), Ar(I).position !== "static" && i === "absolute" && (E = "scrollHeight", m = "scrollWidth")), I = I, t === Wr || (t === un || t === $n) && o === La) {
      k = pn;
      var w = v && I === V && V.visualViewport ? V.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[E]
      );
      b -= w - a.height, b *= s ? 1 : -1;
    }
    if (t === un || (t === Wr || t === pn) && o === La) {
      T = $n;
      var U = v && I === V && V.visualViewport ? V.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[m]
      );
      p -= U - a.width, p *= s ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: i
  }, u && Kg), X = d === !0 ? Zg({
    x: p,
    y: b
  }) : {
    x: p,
    y: b
  };
  if (p = X.x, b = X.y, s) {
    var K;
    return Object.assign({}, B, (K = {}, K[k] = O ? "0" : "", K[T] = C ? "0" : "", K.transform = (V.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + b + "px)" : "translate3d(" + p + "px, " + b + "px, 0)", K));
  }
  return Object.assign({}, B, (r = {}, r[k] = O ? b + "px" : "", r[T] = C ? p + "px" : "", r.transform = "", r));
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
    placement: Gr(r.placement),
    variation: Ra(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Rl(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Rl(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const wd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Jg,
  data: {}
};
function Qg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function _g(e) {
  return e === Mr(e) || !Sr(e) ? Gi(e) : Qg(e);
}
function xg(e) {
  var r = e.getBoundingClientRect(), n = qn(r.width) / e.offsetWidth || 1, a = qn(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function ey(e, r, n) {
  n === void 0 && (n = !1);
  var a = Sr(r), t = Sr(r) && xg(r), o = wn(r), l = Xn(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Xi(o)) && (i = _g(r)), Sr(r) ? (s = Xn(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = qi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function ry(e) {
  var r = Xn(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function ny(e) {
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
function ay(e) {
  var r = ny(e);
  return mi.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function ty(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e());
      });
    })), r;
  };
}
function _r(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return [].concat(n).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Cn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', oy = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ul = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function iy(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Ul).filter(function(n, a, t) {
      return t.indexOf(n) === a;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof r.name != "string" && console.error(_r(Cn, String(r.name), '"name"', '"string"', '"' + String(r.name) + '"'));
          break;
        case "enabled":
          typeof r.enabled != "boolean" && console.error(_r(Cn, r.name, '"enabled"', '"boolean"', '"' + String(r.enabled) + '"'));
          break;
        case "phase":
          mi.indexOf(r.phase) < 0 && console.error(_r(Cn, r.name, '"phase"', "either " + mi.join(", "), '"' + String(r.phase) + '"'));
          break;
        case "fn":
          typeof r.fn != "function" && console.error(_r(Cn, r.name, '"fn"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "effect":
          r.effect != null && typeof r.effect != "function" && console.error(_r(Cn, r.name, '"effect"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "requires":
          r.requires != null && !Array.isArray(r.requires) && console.error(_r(Cn, r.name, '"requires"', '"array"', '"' + String(r.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(r.requiresIfExists) || console.error(_r(Cn, r.name, '"requiresIfExists"', '"array"', '"' + String(r.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Ul.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(_r(oy, String(r.name), a, a));
      });
    });
  });
}
function ly(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function sy(e) {
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
var Yl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", uy = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Hl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Fl() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function dy(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Hl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Hl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, p = {
      state: d,
      setOptions: function(C) {
        var O = typeof C == "function" ? C(d.options) : C;
        b(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: Tn(i) ? da(i) : i.contextElement ? da(i.contextElement) : [],
          popper: da(s)
        };
        var T = ay(sy([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = T.filter(function(B) {
          return B.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = ly([].concat(T, d.options.modifiers), function(B) {
            var X = B.name;
            return X;
          });
          if (iy(k), Gr(d.options.placement) === wo) {
            var V = d.orderedModifiers.find(function(B) {
              var X = B.name;
              return X === "flip";
            });
            V || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var I = Ar(s), E = I.marginTop, m = I.marginRight, w = I.marginBottom, U = I.marginLeft;
          [E, m, w, U].some(function(B) {
            return parseFloat(B);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return y(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = d.elements, O = C.reference, T = C.popper;
          if (!Fl(O, T)) {
            process.env.NODE_ENV !== "production" && console.error(Yl);
            return;
          }
          d.rects = {
            reference: ey(O, Ki(T), d.options.strategy === "fixed"),
            popper: ry(T)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(B) {
            return d.modifiersData[B.name] = Object.assign({}, B.data);
          });
          for (var k = 0, V = 0; V < d.orderedModifiers.length; V++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(uy);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, V = -1;
              continue;
            }
            var I = d.orderedModifiers[V], E = I.fn, m = I.options, w = m === void 0 ? {} : m, U = I.name;
            typeof E == "function" && (d = E({
              state: d,
              options: w,
              name: U,
              instance: p
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ty(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Fl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Yl), p;
    p.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function y() {
      d.orderedModifiers.forEach(function(g) {
        var C = g.name, O = g.options, T = O === void 0 ? {} : O, k = g.effect;
        if (typeof k == "function") {
          var V = k({
            state: d,
            name: C,
            instance: p,
            options: T
          }), I = function() {
          };
          v.push(V || I);
        }
      });
    }
    function b() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return p;
  };
}
var zt = {
  passive: !0
};
function vy(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, zt);
  }), i && s.addEventListener("resize", n.update, zt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, zt);
    }), i && s.removeEventListener("resize", n.update, zt);
  };
}
const fy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: vy,
  data: {}
};
function cy(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = yd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const my = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: cy,
  data: {}
};
function py(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !Sr(o) || !Hr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function hy(e) {
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
const gy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: py,
  effect: hy,
  requires: ["computeStyles"]
};
var yy = [fy, my, wd, gy], by = /* @__PURE__ */ dy({
  defaultModifiers: yy
});
function va() {
  return va = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, va.apply(this, arguments);
}
function jl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Wl(e) {
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
function Cd(e) {
  var r = P(null), n = P(null), a = P({
    width: 0,
    height: 0
  }), t = zs(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(m, w) {
      w ? (V(), S(e.onOpen)) : S(e.onClose);
    }
  }), {
    zIndex: o
  } = $t(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: m,
      height: w
    } = na(r.value);
    a.value = {
      width: ze(m),
      height: ze(w)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, I());
  }, v = /* @__PURE__ */ function() {
    var m = Wl(function* () {
      e.trigger === "hover" && (s = !1, yield Dr(), !i && E());
    });
    return function() {
      return m.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, p = /* @__PURE__ */ function() {
    var m = Wl(function* () {
      e.trigger === "hover" && (i = !1, yield Dr(), !s && E());
    });
    return function() {
      return m.apply(this, arguments);
    };
  }(), y = () => {
    e.closeOnClickReference && t.value ? E() : I();
  }, b = () => {
    E();
  }, g = (m) => {
    e.trigger === "click" && (b(), S(e.onClickOutside, m));
  }, C = () => {
    V(), S(e.onClosed);
  }, O = () => {
    u();
    var m = {
      x: ze(e.offsetX),
      y: ze(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: m.x,
          distance: m.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: m.x,
          distance: m.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: m.x,
          distance: m.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: m.x,
          distance: -m.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: m.x,
          distance: -m.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: m.x,
          distance: -m.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: m.y,
          distance: m.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: m.y,
          distance: -m.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: m.y,
          distance: -m.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: m.x,
          distance: -m.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: m.x,
          distance: m.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: m.y,
          distance: m.x
        };
    }
  }, T = () => {
    var {
      placement: m,
      skidding: w,
      distance: U
    } = O(), B = [va({}, Wg, {
      enabled: t.value
    }), va({}, Xg, {
      options: {
        offset: [w, U]
      }
    }), va({}, wd, {
      enabled: t.value
    })];
    return {
      placement: m,
      modifiers: B
    };
  }, k = () => e.reference ? r.value.querySelector(e.reference) : r.value, V = () => {
    l.setOptions(T());
  }, I = () => {
    var {
      disabled: m
    } = e;
    m || (t.value = !0, S(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  };
  return Ds(k, "click", g), se(() => e.offsetX, V), se(() => e.offsetY, V), se(() => e.placement, V), se(() => e.disabled, E), ao(() => {
    var m;
    l = by((m = k()) != null ? m : r.value, n.value, T());
  }), oo(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: y,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: b,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: p,
    handleClosed: C,
    resize: V,
    open: I,
    close: E
  };
}
function wy(e) {
  return ["click", "hover"].includes(e);
}
function Cy(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Sy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var ky = {
  type: {
    type: String,
    default: "default",
    validator: Sy
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
    validator: wy
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Cy
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
  n: $y,
  classes: Ty
} = re("tooltip");
function Py(e, r) {
  return h(), $(
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
    [j(e.$slots, "default"), (h(), we(Jr, {
      to: e.teleport
    }, [Q(Ue, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: ce(() => [$e(D(
        "div",
        {
          ref: "popover",
          class: c(e.classes(e.n("tooltip"), e.n("$--box"))),
          style: q({
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
        [D(
          "div",
          {
            style: q({
              background: e.color,
              width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
            }),
            class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
          },
          [j(e.$slots, "content", {}, () => [ke(
            ie(e.content),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[qr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Sd = ee({
  name: "VarTooltip",
  props: ky,
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
      handleClosed: f,
      // expose
      open: p,
      // expose
      close: y,
      // expose
      resize: b
    } = Cd(e);
    return {
      toSizeUnit: be,
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      n: $y,
      classes: Ty,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handleClosed: f,
      resize: b,
      open: p,
      close: y
    };
  }
});
Sd.render = Py;
const Kn = Sd;
te(Kn);
var Pk = Kn;
function Oy(e) {
  return ["click"].includes(e);
}
var Vy = {
  expandTrigger: {
    type: String,
    validator: Oy
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
var {
  n: My,
  classes: Iy
} = re("ellipsis"), Ey = {
  key: 0
};
function By(e, r) {
  var n = le("var-tooltip");
  return h(), we(
    n,
    Ct(io(e.tooltip)),
    {
      content: ce(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), $(
          "span",
          Ey,
          ie(e.tooltip.content),
          1
          /* TEXT */
        )) : j(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ce(() => [D(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: q(e.rootStyles),
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
var kd = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: Kn
  },
  props: Vy,
  setup(e) {
    var r = P(!1), n = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : gi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: My,
      classes: Iy,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
kd.render = By;
const Ua = kd;
te(Ua);
var Ok = Ua;
function Ny(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function Dy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function Ay(e) {
  return ["click", "hover"].includes(e);
}
var zy = {
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
    validator: mu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: Ny
  },
  direction: {
    type: String,
    default: "top",
    validator: Dy
  },
  trigger: {
    type: String,
    default: "click",
    validator: Ay
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
  onClick: Y(),
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:active": Y()
};
function Gl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var {
  classes: ql,
  n: fr
} = re("fab");
const Ya = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: zy,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = zs(e, "active"), o = P(null), {
      disabled: l
    } = vo(), i = (f, p, y) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (y === 0) {
          S(e.onClick, t.value, f);
          return;
        }
        t.value = p, S(e.onClick, t.value, f), S(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, p) => {
      e.trigger !== "hover" || e.disabled || p === 0 || (t.value = f, S(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : $e(Q(vr, {
      "var-fab-cover": !0,
      class: fr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Q(Ne, {
        "var-fab-cover": !0,
        class: ql([t.value, fr("trigger-active-icon"), fr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: fr("--trigger-icon-animation")
      }, null)]
    }), [[qr, e.show]]), v = () => {
      var f, p, y = As((p = S(n.default)) != null ? p : []);
      return Q("div", De({
        class: ql(fr(), fr("--position-" + e.position), fr("--direction-" + e.direction), [e.fixed, fr("--fixed"), fr("--absolute")], [e.safeArea, fr("--safe-area")]),
        style: {
          zIndex: L(e.zIndex),
          top: be(e.top),
          bottom: be(e.bottom),
          left: be(e.left),
          right: be(e.right)
        },
        ref: o,
        onClick: (b) => i(b, !t.value, y.length),
        onMouseleave: () => s(!1, y.length),
        onMouseenter: () => s(!0, y.length)
      }, a), [Q(Ue, {
        name: fr("--active-transition")
      }, Gl(f = d()) ? f : {
        default: () => [f]
      }), Q(Ue, {
        name: fr("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [$e(Q("div", {
          class: fr("actions"),
          onClick: (b) => b.stopPropagation()
        }, [y.map((b) => Q("div", {
          class: fr("action")
        }, [b]))]), [[qr, e.show && t.value && y.length]])]
      })]);
    };
    return se(() => e.trigger, () => {
      t.value = !1;
    }), se(() => e.disabled, () => {
      t.value = !1;
    }), Ds(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var p;
        return Q(Jr, {
          to: f,
          disabled: l.value
        }, Gl(p = v()) ? p : {
          default: () => [p]
        });
      }
      return v();
    };
  }
});
te(Ya);
var Vk = Ya;
function Ly(e) {
  return ["start", "end"].includes(e);
}
var Ry = {
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
    validator: Ly
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
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
function Uy(e) {
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
  n: Yy
} = re("form");
function Hy(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var $d = ee({
  name: "VarForm",
  props: Ry,
  setup(e) {
    var r = R(() => e.disabled), n = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Gm(), o = (d) => {
      setTimeout(() => {
        var v = dn(d), f = v === window ? 0 : ul(v), p = ul(d) - f - ze(e.scrollToErrorOffsetY);
        pa(v, {
          top: p,
          animation: Lo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Uy(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: C
          } = g;
          return C();
        }));
        if (e.scrollToError) {
          var [, f] = ef(v, (g) => g === !1, e.scrollToError), p = f > -1;
          if (p) {
            var y, b = (y = a[f].instance.proxy) == null ? void 0 : y.$el;
            o(b);
          }
          return !p;
        }
        return v.every((g) => g === !0);
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
      n: Yy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
$d.render = Hy;
const Pn = $d;
Pn.useValidation = Or;
Pn.useForm = Vr;
te(Pn);
var Mk = Pn;
function Fy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var jy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Fy,
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
  n: Wy,
  classes: Gy
} = re("image"), qy = ["alt", "title", "lazy-loading", "lazy-error"], Xy = ["alt", "title", "src"];
function Ky(e, r) {
  var n = Ae("lazy"), a = Ae("ripple");
  return $e((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? $e((h(), $("img", {
      key: 0,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: q({
        objectFit: e.fit
      }),
      onLoad: r[0] || (r[0] = function() {
        return e.handleLoad && e.handleLoad(...arguments);
      }),
      onClick: r[1] || (r[1] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, null, 46, qy)), [[n, e.src]]) : x("v-if", !0), !e.lazy && !e.showErrorSlot ? (h(), $("img", {
      key: 1,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      style: q({
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
    }, null, 46, Xy)) : x("v-if", !0), e.showErrorSlot ? j(e.$slots, "error", {
      key: 2
    }) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Td = ee({
  name: "VarImage",
  directives: {
    Lazy: ga,
    Ripple: Xe
  },
  props: jy,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(!1), t = (i) => {
      a.value = !!n.error, S(e.onError, i);
    }, o = (i) => {
      var s = i.currentTarget;
      if (e.lazy) {
        if (s._lazy.state === "success") {
          S(e.onLoad, i);
          return;
        }
        s._lazy.state === "error" && t(i);
      } else
        S(e.onLoad, i);
    }, l = (i) => {
      S(e.onClick, i);
    };
    return se(() => e.src, () => {
      a.value = !1;
    }), {
      n: Wy,
      classes: Gy,
      showErrorSlot: a,
      toSizeUnit: be,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
Td.render = Ky;
const Ha = Td;
te(Ha);
var Ik = Ha, Pd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Zy() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Pd);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Od = {
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
function Kl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Zl(e) {
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
var Jy = 250, Qy = 20, {
  n: _y,
  classes: xy
} = re("swipe"), eb = ["onClick"];
function rb(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: q({
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
    }, () => [e.indicator && e.length ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), $(
        Me,
        null,
        He(e.length, (n, a) => (h(), $("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: q({
            background: e.indicatorColor
          }),
          key: n,
          onClick: (t) => e.to(a)
        }, null, 14, eb))),
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
var Vd = ee({
  name: "VarSwipe",
  props: Od,
  setup(e) {
    var r = P(null), n = P(0), a = R(() => e.vertical), t = P(0), o = P(0), l = P(!1), i = P(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Zy(), {
      popup: v,
      bindPopup: f
    } = Of(), p = !1, y = !1, b = -1, g, C, O, T, k, V = (H) => s.find((Z) => {
      var {
        index: _
      } = Z;
      return _.value === H;
    }), I = () => {
      e.loop && (o.value >= 0 && V(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && V(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (V(d.value - 1).setTranslate(0), V(0).setTranslate(0)));
    }, E = (H) => {
      var Z = nr(H) ? H : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: _
      } = e;
      return Z <= -1 ? _ ? -1 : 0 : Z >= d.value ? _ ? d.value : d.value - 1 : Z;
    }, m = (H) => {
      var {
        loop: Z
      } = e;
      return H === -1 ? Z ? d.value - 1 : 0 : H === d.value ? Z ? 0 : d.value - 1 : H;
    }, w = (H) => e.loop ? H < 0 ? d.value + H : H >= d.value ? H - d.value : H : Rn(H, 0, d.value - 1), U = (H) => {
      var Z = o.value >= n.value, _ = o.value <= -t.value, fe = 0, Se = -(t.value - n.value);
      l.value = !0, (Z || _) && (l.value = !0, o.value = _ ? fe : Se, V(0).setTranslate(0), V(d.value - 1).setTranslate(0)), so(() => {
        l.value = !1, S(H);
      });
    }, B = () => {
      p || (i.value = w(L(e.initialIndex)), p = !0);
    }, X = () => {
      var {
        autoplay: H
      } = e;
      !H || d.value <= 1 || (K(), b = window.setTimeout(() => {
        M(), X();
      }, L(H)));
    }, K = () => {
      b && clearTimeout(b);
    }, A = (H, Z) => {
      if (H > Z && H > 10)
        return "horizontal";
      if (Z > H && Z > 10)
        return "vertical";
    }, z = (H) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: _
        } = H.touches[0];
        g = Z, C = _, O = performance.now(), y = !0, K(), U(() => {
          l.value = !0;
        });
      }
    }, F = (H) => {
      var {
        touchable: Z,
        vertical: _
      } = e;
      if (!(!y || !Z)) {
        var {
          clientX: fe,
          clientY: Se
        } = H.touches[0], Ie = Math.abs(fe - g), oe = Math.abs(Se - C), ve = A(Ie, oe), pe = _ ? "vertical" : "horizontal";
        if (ve === pe) {
          H.preventDefault();
          var Oe = T !== void 0 ? fe - T : 0, je = k !== void 0 ? Se - k : 0;
          T = fe, k = Se, o.value += _ ? je : Oe, I();
        }
      }
    }, W = () => {
      if (y) {
        var {
          vertical: H,
          onChange: Z
        } = e, _ = H ? k < C : T < g, fe = Math.abs(H ? C - k : g - T), Se = performance.now() - O <= Jy && fe >= Qy, Ie = Se ? E(_ ? i.value + 1 : i.value - 1) : E();
        y = !1, l.value = !1, T = void 0, k = void 0, o.value = Ie * -n.value;
        var oe = i.value;
        i.value = m(Ie), X(), oe !== i.value && S(Z, i.value);
      }
    }, ae = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((H) => {
        H.setTranslate(0);
      }), X(), setTimeout(() => {
        l.value = !1;
      }));
    }, M = (H) => {
      if (!(d.value <= 1)) {
        B();
        var {
          loop: Z,
          onChange: _
        } = e, fe = i.value;
        i.value = w(fe + 1), (H == null ? void 0 : H.event) !== !1 && S(_, i.value), U(() => {
          if (fe === d.value - 1 && Z) {
            V(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          fe !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, N = (H) => {
      if (!(d.value <= 1)) {
        B();
        var {
          loop: Z,
          onChange: _
        } = e, fe = i.value;
        i.value = w(fe - 1), (H == null ? void 0 : H.event) !== !1 && S(_, i.value), U(() => {
          if (fe === 0 && Z) {
            V(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          fe !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, G = (H, Z) => {
      if (!(d.value <= 1 || H === i.value)) {
        H = H < 0 ? 0 : H, H = H >= d.value ? d.value : H;
        var _ = H > i.value ? M : N, fe = Math.abs(H - i.value);
        Array.from({
          length: fe
        }).forEach((Se, Ie) => {
          _({
            event: Ie === fe - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, ne = {
      size: n,
      vertical: a
    };
    return u(ne), S(f, null), se(() => d.value, /* @__PURE__ */ Zl(function* () {
      yield Dr(), B(), ae();
    })), v && se(() => v.show.value, /* @__PURE__ */ function() {
      var H = Zl(function* (Z) {
        Z ? (yield Dr(), ae()) : K();
      });
      return function(Z) {
        return H.apply(this, arguments);
      };
    }()), hn(ae), uo(K), St(ae), {
      n: _y,
      classes: xy,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: z,
      handleTouchmove: F,
      handleTouchend: W,
      next: M,
      prev: N,
      to: G,
      resize: ae,
      toNumber: L
    };
  }
});
Vd.render = rb;
const On = Vd;
te(On);
var Ek = On;
function nb() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = ir(Pd);
  return e || Tr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: ab
} = re("swipe-item");
function tb(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n()),
      style: q({
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
var Md = ee({
  name: "VarSwipeItem",
  setup() {
    var e = P(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = nb(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: ab,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Md.render = tb;
const Lr = Md;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
te(Lr);
var Bk = Lr;
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
var ob = yi({
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
}, xe(Od, ["loop", "indicator", "onChange"]), xe(kt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Jl,
  classes: ib
} = re("image-preview"), Eo = 12, Ql = 200, lb = 350, _l = 200, sb = 500, ub = ["onTouchstart"], db = ["src", "alt"];
function vb(e, r) {
  var n = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
  return h(), we(o, {
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
      default: ce(() => [(h(!0), $(
        Me,
        null,
        He(e.images, (l, i) => (h(), we(n, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: l
        }, {
          default: ce(() => [D("div", {
            class: c(e.n("zoom-container")),
            style: q({
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
          }, [D("img", {
            class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: l,
            alt: l
          }, null, 10, db)], 46, ub)]),
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
        return [j(e.$slots, "indicator", {
          index: i,
          length: s
        }, () => [e.indicator && e.images.length > 1 ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("indicators"))
          },
          ie(i + 1) + " / " + ie(s),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)])];
      }),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), j(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), we(t, {
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
      [j(e.$slots, "extra")],
      2
      /* CLASS */
    )]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]);
}
var Id = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: On,
    VarSwipeItem: Lr,
    VarPopup: Rr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: ob,
  setup(e) {
    var r = P(!1), n = R(() => {
      var {
        images: M,
        current: N,
        initialIndex: G
      } = e;
      if (G != null)
        return L(G);
      var ne = M.findIndex((H) => H === N);
      return ne >= 0 ? ne : 0;
    }), a = P(1), t = P(0), o = P(0), l = P(void 0), i = P(void 0), s = P(!0), u = P(null), d = null, v = null, f = null, p = null, y = !1, b = R(() => {
      var {
        imagePreventDefault: M,
        show: N
      } = e;
      return N && M;
    }), g = (M, N) => {
      var {
        clientX: G,
        clientY: ne
      } = M, {
        clientX: H,
        clientY: Z
      } = N;
      return Math.abs(Math.sqrt(Math.pow(H - G, 2) + Math.pow(Z - ne, 2)));
    }, C = (M, N) => ({
      clientX: M.clientX,
      clientY: M.clientY,
      timestamp: performance.now(),
      target: N
    }), O = () => {
      a.value = L(e.zoom), s.value = !1, v = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, _l);
    }, T = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, v = null, l.value = void 0, i.value = void 0;
    }, k = (M) => v ? g(v, M) <= Eo && M.timestamp - v.timestamp <= Ql && v.target === M.target : !1, V = (M) => !M || !d || !v ? !1 : g(d, v) <= Eo && performance.now() - v.timestamp < lb && (M === d.target || M.parentNode === d.target), I = () => {
      window.clearTimeout(p), y = !1, d = null;
    }, E = (M) => {
      if (window.clearTimeout(p), y) {
        y = !1;
        return;
      }
      var N = V(M.target);
      f = window.setTimeout(() => {
        N && A(), d = null;
      }, Ql);
    }, m = (M, N) => {
      window.clearTimeout(f), window.clearTimeout(p);
      var G = C(M.touches[0], M.currentTarget);
      if (d = G, p = window.setTimeout(() => {
        var {
          onLongPress: ne
        } = e;
        y = !0, S(ne, N);
      }, sb), k(G)) {
        a.value > 1 ? T() : O();
        return;
      }
      v = G;
    }, w = (M) => {
      var {
        offsetWidth: N,
        offsetHeight: G
      } = M, {
        naturalWidth: ne,
        naturalHeight: H
      } = M.querySelector("." + Jl("image"));
      return {
        width: N,
        height: G,
        imageRadio: H / ne,
        rootRadio: G / N,
        zoom: L(e.zoom)
      };
    }, U = (M) => {
      var {
        zoom: N,
        imageRadio: G,
        rootRadio: ne,
        width: H,
        height: Z
      } = w(M);
      if (!G)
        return 0;
      var _ = G > ne ? Z / G : H;
      return Math.max(0, (N * _ - H) / 2) / N;
    }, B = (M) => {
      var {
        zoom: N,
        imageRadio: G,
        rootRadio: ne,
        width: H,
        height: Z
      } = w(M);
      if (!G)
        return 0;
      var _ = G > ne ? Z : H * G;
      return Math.max(0, (N * _ - Z) / 2) / N;
    }, X = (M, N, G) => M + N >= G ? G : M + N <= -G ? -G : M + N, K = (M) => {
      if (v) {
        var N = M.currentTarget, G = C(M.touches[0], N);
        if (g(G, v) > Eo && window.clearTimeout(p), a.value > 1) {
          var ne = G.clientX - v.clientX, H = G.clientY - v.clientY, Z = U(N), _ = B(N);
          t.value = X(t.value, ne, Z), o.value = X(o.value, H, _);
        }
        v = G;
      }
    }, A = () => {
      if (a.value > 1) {
        T(), setTimeout(() => S(e["onUpdate:show"], !1), _l);
        return;
      }
      S(e["onUpdate:show"], !1);
    }, z = (M) => {
      var N;
      (N = u.value) == null || N.prev(M);
    }, F = (M) => {
      var N;
      (N = u.value) == null || N.next(M);
    }, W = (M, N) => {
      var G;
      (G = u.value) == null || G.to(M, N);
    }, ae = (M) => {
      e.imagePreventDefault && e.show && M.preventDefault();
    };
    return vn(() => document, "contextmenu", ae), se(() => e.show, (M) => {
      r.value = M;
    }, {
      immediate: !0
    }), {
      n: Jl,
      classes: ib,
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
      handleTouchstart: m,
      handleTouchmove: K,
      handleTouchend: E,
      handleTouchcancel: I,
      close: A,
      prev: z,
      next: F,
      to: W
    };
  }
});
Id.render = vb;
const Vt = Id;
function fa() {
  return fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, fa.apply(this, arguments);
}
var tn, ca = {};
function fb(e) {
  return e === void 0 && (e = {}), Fe(e) ? fa({}, ca, {
    images: [e]
  }) : Ve(e) ? fa({}, ca, {
    images: e
  }) : fa({}, ca, e);
}
function zr(e) {
  if (ra()) {
    zr.close();
    var r = fb(e), n = Re(r);
    n.teleport = "body", tn = n;
    var {
      unmountInstance: a
    } = aa(Vt, n, {
      onClose: () => S(n.onClose),
      onClosed: () => {
        S(n.onClosed), a(), tn === n && (tn = null);
      },
      onRouteChange: () => {
        a(), tn === n && (tn = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }
}
zr.close = () => {
  if (tn != null) {
    var e = tn;
    tn = null, Le().then(() => {
      e.show = !1;
    });
  }
};
zr.setDefaultOptions = (e) => {
  ca = e;
};
zr.resetDefaultOptions = () => {
  ca = {};
};
zr.Component = Vt;
te(Vt);
te(Vt, zr);
var Nk = Vt, Wt = {
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
function xl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function es(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        xl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        xl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: cb,
  classes: mb
} = re("sticky");
function pb(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: q({
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
        style: q({
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
var Ed = ee({
  name: "VarSticky",
  props: Wt,
  setup(e) {
    var r = P(null), n = P(null), a = P(!1), t = P("0px"), o = P("0px"), l = P("auto"), i = P("auto"), s = P("auto"), u = P("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => ze(e.offsetTop)), p, y = () => {
      var {
        cssMode: T,
        disabled: k
      } = e;
      if (!k) {
        var V = 0;
        if (p !== window) {
          var {
            top: I
          } = Qe(p);
          V = I;
        }
        var E = n.value, m = r.value, {
          top: w,
          left: U
        } = Qe(m), B = w - V;
        return B <= f.value ? (T || (l.value = m.offsetWidth + "px", i.value = m.offsetHeight + "px", t.value = V + f.value + "px", o.value = U + "px", s.value = E.offsetWidth + "px", u.value = E.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: B,
          isFixed: !1
        });
      }
    }, b = () => {
      if (p) {
        var T = y();
        T && S(e.onScroll, T.offsetTop, T.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var T = es(function* () {
        a.value = !1, yield cf(), y();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var T = es(function* () {
        yield Dr(), p = dn(r.value), p !== window && p.addEventListener("scroll", b), b();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), O = () => {
      p !== window && p.removeEventListener("scroll", b);
    };
    return se(() => e.disabled, g), or(C), uo(O), St(g), vn(() => window, "scroll", b), {
      n: cb,
      classes: mb,
      resize: g,
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
      toNumber: L
    };
  }
});
Ed.render = pb;
const Vn = Ed;
te(Vn);
var Dk = Vn, Bd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function hb() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = lr(Bd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function gb() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Bd);
  return n || Tr("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var yb = {
  index: {
    type: [Number, String]
  }
}, {
  n: bb,
  classes: wb
} = re("index-anchor");
function Cb(e, r) {
  return h(), we(xn(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: ce(() => [D(
      "div",
      De({
        class: e.n()
      }, e.$attrs),
      [j(e.$slots, "default", {}, () => [ke(
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
var Nd = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Vn
  },
  inheritAttrs: !1,
  props: yb,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = gb(), t = P(0), o = P(!1), l = R(() => e.index), i = P(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, p = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, y = (g) => {
      o.value = g;
    }, b = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: p,
      setDisabled: y
    };
    return a(b), {
      n: bb,
      classes: wb,
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
Nd.render = Cb;
const Fa = Nd;
te(Fa);
var Ak = Fa, Sb = {
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
function rs(e, r, n, a, t, o, l) {
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
  n: kb,
  classes: $b
} = re("index-bar"), Tb = ["onClick"];
function Pb(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [j(e.$slots, "default"), D(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), $(
        Me,
        null,
        He(e.anchorNameList, (n) => (h(), $("li", {
          key: n,
          class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
          style: q({
            color: e.active === n && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: n,
            manualCall: !0
          })
        }, ie(n), 15, Tb))),
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
var Dd = ee({
  name: "VarIndexBar",
  props: Sb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = hb(), t = P(""), o = P(null), l = P([]), i = P(), s = R(() => e.sticky), u = R(() => e.stickyCssMode || e.cssMode), d = R(() => ze(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, p = !1, y = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(y);
    var b = (E, m) => {
      var w = Vi(E) ? E.name.value : E;
      w === i.value || w === void 0 || (i.value = w, (m == null ? void 0 : m.event) !== !1 && S(e.onChange, w));
    }, g = () => {
      if (Mi(f))
        return 0;
      var {
        top: E
      } = Qe(f), {
        scrollTop: m
      } = f, {
        top: w
      } = Qe(o.value);
      return m - E + w;
    }, C = () => {
      var E = ma(f), m = f === window ? document.body.scrollHeight : f.scrollHeight, w = g();
      n.forEach((U, B) => {
        var X = U.ownTop.value, K = E - X + d.value - w, A = B === n.length - 1 ? m : n[B + 1].ownTop.value - U.ownTop.value;
        U.setDisabled(!0), K >= 0 && K < A && t.value === "" && (U.setDisabled(!1), b(U));
      });
    }, O = /* @__PURE__ */ function() {
      var E = Lt(function* (m) {
        var {
          anchorName: w,
          manualCall: U = !1,
          options: B
        } = m;
        if (U && S(e.onClick, w), !(w === i.value && !p)) {
          var X = n.find((F) => {
            var {
              name: W
            } = F;
            return w === W.value;
          });
          if (X) {
            var K = g(), A = X.ownTop.value - d.value + K, z = Ei(f);
            t.value = w, b(w, B), yield pa(f, {
              left: z,
              top: A,
              animation: Ts,
              duration: L(e.duration)
            }), so(() => {
              t.value = "";
            });
          }
        }
      });
      return function(w) {
        return E.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var E = Lt(function* () {
        yield Dr(), f = dn(o.value);
      });
      return function() {
        return E.apply(this, arguments);
      };
    }(), k = () => {
      f.addEventListener("scroll", C);
    }, V = () => {
      f.removeEventListener("scroll", C);
    }, I = (E, m) => {
      br(() => O({
        anchorName: E,
        options: m
      }));
    };
    return se(() => r.value, /* @__PURE__ */ Lt(function* () {
      yield Dr(), n.forEach((E) => {
        var {
          name: m,
          setOwnTop: w
        } = E;
        m.value && l.value.push(m.value), w();
      });
    })), or(/* @__PURE__ */ Lt(function* () {
      yield T(), k();
    })), to(V), Qn(() => {
      p = !0, V();
    }), hn(() => {
      !p || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), p = !1);
    }), {
      n: kb,
      classes: $b,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: I,
      anchorClick: O
    };
  }
});
Dd.render = Pb;
const ja = Dd;
te(ja);
var zk = ja;
function Ob(e) {
  return ["small", "normal"].includes(e);
}
function Vb(e) {
  return ["outlined", "standard"].includes(e);
}
var Zi = {
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
    validator: Ob
  },
  variant: {
    type: String,
    default: "standard",
    validator: Vb
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
  n: Bo,
  classes: Mb
} = re("field-decorator"), Ib = ["for"];
function Eb(e, r) {
  var n = le("var-icon");
  return h(), $(
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
        style: q({
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
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      ), e.placeholder && e.hint ? (h(), $("label", {
        key: 0,
        class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
        style: q({
          color: e.color
        }),
        for: e.id
      }, [D(
        "span",
        null,
        ie(e.placeholder),
        1
        /* TEXT */
      )], 14, Ib)) : x("v-if", !0), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (h(), we(n, {
          key: 0,
          class: c(e.n("clear-icon")),
          "var-field-decorator-cover": "",
          name: "close-circle",
          onClick: e.handleClear
        }, null, 8, ["class", "onClick"])) : x("v-if", !0), j(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), $(
      Me,
      {
        key: 0
      },
      [e.variant === "outlined" ? (h(), $(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: q({
            borderColor: e.color
          })
        },
        [D(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: q({
              width: e.legendWidth
            })
          },
          [e.placeholder && e.hint ? (h(), we(Jr, {
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
      )) : (h(), $(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: q({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--line-focus")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
            style: q({
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
var Ad = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ne
  },
  props: Zi,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(null), t = P(""), o = R(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = R(() => e.hint && (!Fr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: p
      } = e;
      if (!v && (!Fr(f) || p))
        return Bo("--placeholder-hidden");
      if (l.value)
        return Bo("--placeholder-hint");
    }, s = () => {
      var {
        size: v,
        hint: f,
        variant: p,
        placeholder: y
      } = e;
      if (!y || !f || p !== "outlined") {
        t.value = "";
        return;
      }
      var b = na(a.value), g = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + b.width + " * 0.75 + " + g + " * 2)";
    }, u = (v) => {
      S(e.onClear, v);
    }, d = (v) => {
      S(e.onClick, v);
    };
    return St(s), or(s), wt(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Bo,
      classes: Mb,
      isEmpty: Fr,
      handleClear: u,
      handleClick: d
    };
  }
});
Ad.render = Eb;
const zd = Ad;
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
function Bb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var Nb = bi({
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
    validator: Bb
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
}, xe(Zi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Db,
  classes: Ab
} = re("input"), zb = ["placeholder", "enterkeyhint"], Lb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Rb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Ub(e, r) {
  var n = le("var-field-decorator"), a = le("var-form-details");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Q(
      n,
      Ct(io({
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
      Gt({
        "append-icon": ce(() => [j(e.$slots, "append-icon")]),
        default: ce(() => [e.normalizedType === "password" ? (h(), $("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: q({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, zb)) : x("v-if", !0), e.textarea ? (h(), $("textarea", {
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
          style: q({
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
      `, 46, Lb)) : (h(), $("input", {
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
          style: q({
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
        }, null, 46, Rb))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: ce(() => [j(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), Q(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: r[14] || (r[14] = $r(() => {
      }, ["stop"]))
    }, Gt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ce(() => [j(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"])],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Ld = ee({
  name: "VarInput",
  components: {
    VarFormDetails: ar,
    VarFieldDecorator: zd
  },
  props: Nb,
  setup(e) {
    var r = P("var-input-" + _n().uid), n = P(null), a = P(!1), t = P(!1), o = R(() => e.type === "number" ? "text" : e.type), l = R(() => {
      var {
        maxlength: M,
        modelValue: N
      } = e;
      return M ? Fr(N) ? "0 / " + M : String(N).length + "/" + M : "";
    }), i = R(() => e.disabled || e.readonly ? "" : "text"), s = R(() => {
      var {
        hint: M,
        blurColor: N,
        focusColor: G
      } = e;
      if (!M)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? G || "var(--field-decorator-focus-color)" : N || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: p,
      // expose
      resetValidation: y
    } = Or(), b = (M) => {
      Le(() => {
        var {
          validateTrigger: N,
          rules: G,
          modelValue: ne
        } = e;
        f(N, M, G, ne);
      });
    }, g = (M) => {
      a.value = !0, S(e.onFocus, M), b("onFocus");
    }, C = (M) => {
      a.value = !1, S(e.onBlur, M), b("onBlur");
    }, O = (M) => {
      var N = M.target, {
        value: G
      } = N;
      return e.type === "number" && (G = w(G)), B(U(G));
    }, T = () => {
      t.value = !0;
    }, k = (M) => {
      t.value && (t.value = !1, M.target.dispatchEvent(new Event("input")));
    }, V = (M) => {
      if (!t.value) {
        var N = O(M);
        S(e["onUpdate:modelValue"], N), S(e.onInput, N, M), b("onInput");
      }
    }, I = (M) => {
      var N = O(M);
      S(e.onChange, N, M), b("onChange");
    }, E = () => {
      var {
        disabled: M,
        readonly: N,
        clearable: G,
        onClear: ne
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || M || N || !G || (S(e["onUpdate:modelValue"], ""), S(ne, ""), b("onClear"));
    }, m = (M) => {
      var {
        disabled: N,
        onClick: G
      } = e;
      d != null && d.disabled.value || N || (S(G, M), b("onClick"));
    }, w = (M) => {
      var N = M.indexOf("-"), G = M.indexOf(".");
      return N > -1 && (M = N === 0 ? "-" + M.replace(/-/g, "") : M.replace(/-/g, "")), G > -1 && (M = M.slice(0, G + 1) + M.slice(G).replace(/\./g, "")), M.replace(/[^-0-9.]/g, "");
    }, U = (M) => e.modelModifiers.trim ? M.trim() : M, B = (M) => e.maxlength ? M.slice(0, L(e.maxlength)) : M, X = (M) => {
      var {
        disabled: N,
        readonly: G
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || N || G || M.stopPropagation();
    };
    function K(M) {
      var {
        disabled: N
      } = e;
      d != null && d.disabled.value || N || M.target === n.value || (F(), M.preventDefault());
    }
    var A = () => {
      S(e["onUpdate:modelValue"], ""), y();
    }, z = () => p(e.rules, e.modelValue), F = () => {
      var M;
      (M = n.value) == null || M.focus();
    }, W = () => {
      n.value.blur();
    }, ae = {
      reset: A,
      validate: z,
      resetValidation: y
    };
    return S(u, ae), or(() => {
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
      n: Db,
      classes: Ab,
      isEmpty: Fr,
      handleFocus: g,
      handleBlur: C,
      handleInput: V,
      handleChange: I,
      handleClear: E,
      handleClick: m,
      handleTouchstart: X,
      handleCompositionStart: T,
      handleCompositionEnd: k,
      handleMousedown: K,
      validate: z,
      resetValidation: y,
      reset: A,
      focus: F,
      blur: W
    };
  }
});
Ld.render = Ub;
const Zn = Ld;
te(Zn);
var Lk = Zn;
function Yb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Hb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Fb = {
  type: {
    type: String,
    default: "default",
    validator: Yb
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
    validator: Hb
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
  n: jb,
  classes: Wb
} = re("link");
function Gb(e, r) {
  return h(), we(xn(e.tag), De(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: ce(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
var Rd = ee({
  name: "VarLink",
  props: Fb,
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
      o || S(l, t);
    };
    return {
      n: jb,
      classes: Wb,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: be
    };
  }
});
Rd.render = Gb;
const Wa = Rd;
te(Wa);
var Rk = Wa, qb = {
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
}, Ud = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Xb() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Ud);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Yd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Kb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Ud);
  return r || Tr("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function Zb() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Yd);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function Jb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Yd);
  return {
    index: n,
    tabItem: e,
    bindTabItem: r
  };
}
function ns(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Qb(e) {
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
  n: _b,
  classes: xb
} = re("list");
function e0(e, r) {
  var n = le("var-loading"), a = Ae("ripple");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [j(e.$slots, "default"), e.loading ? j(e.$slots, "loading", {
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
        ie(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Q(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? j(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: c(e.n("finished"))
      },
      ie(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? j(e.$slots, "error", {
      key: 2
    }, () => [$e((h(), $(
      "div",
      {
        class: c(e.n("error")),
        onClick: r[0] || (r[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [ke(
        ie(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : x("v-if", !0), D(
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
var Hd = ee({
  name: "VarList",
  directives: {
    Ripple: Xe
  },
  components: {
    VarLoading: fn
  },
  props: qb,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = Jb(), a = P(null), t = P(null), o, l = () => {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = Qe(o), {
        bottom: v
      } = Qe(t.value);
      return Math.floor(v) - ze(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Qb(function* () {
        yield Le(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return S(n, {}), r && se(() => r.current.value, u), se(() => [e.loading, e.error, e.finished], u), or(() => {
      o = dn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), uo(s), {
      pack: _e,
      listEl: a,
      detectorEl: t,
      dt: lo,
      isNumber: nr,
      load: l,
      check: u,
      n: _b,
      classes: xb
    };
  }
});
Hd.render = e0;
const Ga = Hd;
te(Ga);
var Uk = Ga, r0 = {
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
  classes: n0,
  n: as
} = re("loading-bar");
const a0 = ee({
  name: "VarLoadingBar",
  props: r0,
  setup(e) {
    return () => Q("div", {
      class: n0(as(), [e.error, as("--error")]),
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
var Fd, jd, $o, Wd, ts, Gd = {}, t0 = {
  value: 0,
  opacity: 0,
  error: !1
}, er = Re(t0), o0 = (e) => {
  Object.assign(er, e);
}, i0 = (e) => {
  Object.assign(er, e), Gd = e;
}, l0 = () => {
  Object.keys(Gd).forEach((e) => {
    er[e] !== void 0 && (er[e] = void 0);
  });
}, qd = () => {
  ts || (ts = !0, aa(a0, er));
}, Ji = () => {
  Fd = window.setTimeout(() => {
    if (!(er.value >= 95)) {
      var e = Math.random();
      er.value < 70 && (e = Math.round(5 * Math.random())), er.value += e, Ji();
    }
  }, 200);
}, Qi = () => {
  window.clearTimeout(jd), window.clearTimeout(Fd), window.clearTimeout($o), window.clearTimeout(Wd);
}, s0 = () => {
  Qi(), er.error = !1, er.value = 0, qd(), $o = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), Ji();
}, Xd = () => {
  Qi(), er.value = 100, $o = window.setTimeout(() => {
    er.opacity = 0, jd = window.setTimeout(() => {
      er.error = !1;
    }, 250);
  }, 300);
}, u0 = () => {
  Qi(), er.error = !0, er.value === 100 && (er.value = 0), qd(), $o = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), Ji(), Wd = window.setTimeout(Xd, 300);
}, Kd = {
  start: s0,
  finish: Xd,
  error: u0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: o0,
  setDefaultOptions: i0,
  resetDefaultOptions: l0
}, Yk = Kd;
const wi = Kd;
function d0(e) {
  return ["click", "hover"].includes(e);
}
function v0(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var f0 = {
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
    validator: d0
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: v0
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
  n: c0,
  classes: m0
} = re("menu");
function p0(e, r) {
  return h(), $(
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
    [j(e.$slots, "default"), (h(), we(Jr, {
      to: e.teleport
    }, [Q(Ue, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: ce(() => [$e(D(
        "div",
        {
          ref: "popover",
          style: q({
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
        [j(e.$slots, "menu")],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[qr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Zd = ee({
  name: "VarMenu",
  props: f0,
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
      handleClosed: f,
      // expose
      open: p,
      // expose
      close: y,
      // expose
      resize: b
    } = Cd(e);
    return {
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: hr,
      toSizeUnit: be,
      n: c0,
      classes: m0,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      handleClosed: f,
      resize: b,
      open: p,
      close: y
    };
  }
});
Zd.render = p0;
const Mn = Zd;
te(Mn);
var Hk = Mn, Jd = Symbol("SELECT_BIND_OPTION_KEY");
function h0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = lr(Jd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function g0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = ir(Jd);
  return n || Tr("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var y0 = {
  label: {},
  value: {}
}, {
  n: b0,
  classes: w0
} = re("option");
function C0(e, r) {
  var n = le("var-checkbox"), a = Ae("ripple");
  return $e((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: q({
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
        style: q({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (h(), we(n, {
      key: 0,
      ref: "checkbox",
      "checked-color": e.focusColor,
      modelValue: e.optionSelected,
      "onUpdate:modelValue": r[0] || (r[0] = (t) => e.optionSelected = t),
      onClick: r[1] || (r[1] = $r(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : x("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [j(e.$slots, "default", {}, () => [ke(
        ie(e.label),
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
var Qd = ee({
  name: "VarOption",
  directives: {
    Ripple: Xe
  },
  components: {
    VarCheckbox: Fn
  },
  props: y0,
  setup(e) {
    var r = P(!1), n = R(() => r.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = g0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      i.value && (r.value = !r.value), u(y);
    }, f = () => u(y), p = (b) => {
      r.value = b;
    }, y = {
      label: a,
      value: t,
      selected: n,
      sync: p
    };
    return se([() => e.label, () => e.value], d), l(y), {
      n: b0,
      classes: w0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Qd.render = C0;
const qa = Qd;
te(qa);
var Fk = qa, S0 = {
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
function k0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var {
  n: os
} = re("overlay");
const Xa = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: S0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = $t(() => e.show, 1), {
      disabled: o
    } = vo(), l = () => {
      S(e.onClick), S(e["onUpdate:show"], !1);
    };
    fo(() => e.show, () => e.lockScroll);
    var i = () => Q("div", De({
      class: os(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [S(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return Q(Ue, {
        name: os("--fade")
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
        return Q(Jr, {
          to: u,
          disabled: o.value
        }, k0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
te(Xa);
var jk = Xa, $0 = {
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
  n: T0,
  classes: P0
} = re("pagination"), O0 = ["item-mode", "onClick"];
function V0(e, r) {
  var n = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), l = Ae("ripple");
  return h(), $(
    "ul",
    {
      class: c(e.n())
    },
    [$e((h(), $(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [j(e.$slots, "prev", {}, () => [Q(n, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), $(
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
        onKeydown: r[3] || (r[3] = nl((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), D("span", null, [ke(
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
    )) : (h(!0), $(
      Me,
      {
        key: 1
      },
      He(e.pageList, (i, s) => $e((h(), $("li", {
        key: s,
        "item-mode": e.getMode(i, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(i, s)
      }, [ke(
        ie(i),
        1
        /* TEXT */
      )], 10, O0)), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), $e((h(), $(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [j(e.$slots, "next", {}, () => [Q(n, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), $(
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
        menu: ce(() => [(h(!0), $(
          Me,
          null,
          He(e.sizeOption, (i, s) => $e((h(), we(t, {
            class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(i)
          }, {
            default: ce(() => [ke(
              ie(i) + ie(e.pack.paginationItem) + " / " + ie(e.pack.paginationPage),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["class", "onClick"])), [[l]])),
          128
          /* KEYED_FRAGMENT */
        ))]),
        default: ce(() => [D(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: r[5] || (r[5] = $r(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [D(
            "span",
            null,
            ie(e.size) + ie(e.pack.paginationItem) + " / " + ie(e.pack.paginationPage),
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (h(), $(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [ke(
        ie(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Q(a, {
        modelValue: e.quickJumperValue,
        "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
        disabled: e.disabled,
        "var-pagination-cover": "",
        onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
        onKeydown: r[9] || (r[9] = nl((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
      }, null, 8, ["modelValue", "disabled"])],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (h(), $(
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
var _d = ee({
  name: "VarPagination",
  components: {
    VarMenu: Mn,
    VarIcon: Ne,
    VarCell: Hn,
    VarInput: Zn
  },
  directives: {
    Ripple: Xe
  },
  props: $0,
  setup(e) {
    var r = P(!1), n = P(""), a = P("1"), t = P(!1), o = P(!1), l = P(L(e.current) || 1), i = P(L(e.size) || 10), s = P([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var k = i.value * (l.value - 1) + 1, V = Math.min(i.value * l.value, L(e.total));
      return [k, V];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), p = (k, V) => nr(k) ? !1 : V === 1 ? t.value : o.value, y = (k, V) => nr(k) ? "basic" : V === 1 ? "head" : "tail", b = (k, V) => {
      if (!(k === l.value || e.disabled)) {
        if (k === "...") {
          l.value = V === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
        nr(k) && (l.value = k);
      }
    }, g = () => {
      e.disabled || (r.value = !0);
    }, C = (k) => {
      i.value = k, r.value = !1;
      var V = O(l.value);
      a.value = String(V), l.value = V;
    }, O = (k) => k > d.value ? d.value : k < 1 ? 1 : k, T = (k, V, I) => {
      I.target.blur();
      var E = O(L(V));
      a.value = String(E), l.value = E, k === "quick" && (n.value = "");
    };
    return se([() => e.current, () => e.size], (k) => {
      var [V, I] = k;
      l.value = L(V) || 1, i.value = L(I || 10);
    }), se([l, i, d], (k, V) => {
      var [I, E, m] = k, [w, U] = V, B = [], {
        maxPagerCount: X,
        total: K,
        onChange: A
      } = e, z = Math.ceil(L(K) / L(U)), F = m - (X - u.value) - 1;
      if (a.value = "" + I, m - 2 > X) {
        if (w === void 0 || m !== z)
          for (var W = 2; W < X + 2; W++)
            B.push(W);
        if (I <= X && I < F) {
          B = [];
          for (var ae = 1; ae < X + 1; ae++)
            B.push(ae + 1);
          t.value = !0, o.value = !1;
        }
        if (I > X && I < F) {
          B = [];
          for (var M = 1; M < X + 1; M++)
            B.push(I + M - u.value);
          t.value = I === 2 && X === 1, o.value = !1;
        }
        if (I >= F) {
          B = [];
          for (var N = 1; N < X + 1; N++)
            B.push(m - (X - N) - 1);
          t.value = !1, o.value = !0;
        }
        B = [1, "...", ...B, "...", m];
      } else
        for (var G = 1; G <= m; G++)
          B.push(G);
      s.value = B, w != null && m > 0 && S(A, I, E), S(e["onUpdate:current"], I), S(e["onUpdate:size"], E);
    }, {
      immediate: !0
    }), {
      n: T0,
      classes: P0,
      pack: _e,
      current: l,
      menuVisible: r,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: n,
      simpleCurrentValue: a,
      totalText: f,
      getMode: y,
      isHideEllipsis: p,
      clickItem: b,
      showMenu: g,
      clickSize: C,
      setPage: T,
      toNumber: L,
      formatElevation: hr
    };
  }
});
_d.render = V0;
const Ka = _d;
te(Ka);
var Wk = Ka, M0 = {
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
  n: I0,
  classes: E0
} = re("paper");
function B0(e, r) {
  var n = Ae("ripple");
  return $e((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: q({
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
var xd = ee({
  name: "VarPaper",
  directives: {
    Ripple: Xe
  },
  props: M0,
  setup(e) {
    var r = (n) => {
      S(e.onClick, n);
    };
    return {
      n: I0,
      classes: E0,
      formatElevation: hr,
      toSizeUnit: be,
      handleClick: r
    };
  }
});
xd.render = B0;
const Za = xd;
te(Za);
var Gk = Za;
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
var N0 = Ci({
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
}, xe(kt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: D0,
  classes: A0
} = re("picker"), is = 300, z0 = 15, ls = 200, L0 = 1e3, ss = 0, R0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], U0 = ["onTransitionend"], Y0 = ["onClick"];
function H0(e, r) {
  var n = le("var-button");
  return h(), we(
    xn(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ce(() => [D(
        "div",
        De({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [j(e.$slots, "cancel", {}, () => [Q(n, {
            class: c(e.n("cancel-button")),
            "var-picker-cover": "",
            text: "",
            "text-color": e.cancelButtonTextColor,
            onClick: e.cancel
          }, {
            default: ce(() => [ke(
              ie(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])]), j(e.$slots, "title", {}, () => [D(
            "div",
            {
              class: c(e.n("title"))
            },
            ie(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), j(e.$slots, "confirm", {}, () => [Q(n, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: ce(() => [ke(
              ie(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])])],
          2
          /* CLASS */
        )) : x("v-if", !0), D(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), $(
            Me,
            null,
            He(e.scrollColumns, (a) => (h(), $("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(a),
              onTouchmove: $r((t) => e.handleTouchmove(t, a), ["prevent"]),
              onTouchend: (t) => e.handleTouchend(t, a)
            }, [D("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: q({
                transform: "translateY(" + a.translate + "px)",
                transitionDuration: a.duration + "ms",
                transitionProperty: a.duration ? "transform" : "none"
              }),
              onTransitionend: (t) => e.handleTransitionend(a)
            }, [(h(!0), $(
              Me,
              null,
              He(a.column.texts, (t, o) => (h(), $("div", {
                class: c(e.n("option")),
                style: q({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (l) => e.handleClick(a, o)
              }, [D(
                "div",
                {
                  class: c(e.n("text"))
                },
                ie(e.textFormatter(t, a.columnIndex)),
                3
                /* TEXT, CLASS */
              )], 14, Y0))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, U0)], 42, R0))),
            128
            /* KEYED_FRAGMENT */
          )), D(
            "div",
            {
              class: c(e.n("picked")),
              style: q({
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
              style: q({
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
var ev = ee({
  name: "VarPicker",
  components: {
    VarButton: vr,
    VarPopup: Rr
  },
  inheritAttrs: !1,
  props: N0,
  setup(e) {
    var r = P([]), n = R(() => ze(e.optionHeight)), a = R(() => ze(e.optionCount)), t = R(() => a.value * n.value / 2 - n.value / 2), o = R(() => a.value * n.value), l = [], i = !1, s = (A, z) => {
      z.scrollEl = A;
    }, u = (A) => {
      S(e["onUpdate:show"], A);
    }, d = (A) => {
      var z = t.value - A.column.texts.length * n.value, F = n.value + t.value;
      A.translate = Rn(A.translate, z, F);
    }, v = (A, z) => {
      var F = Math.round((t.value - z) / n.value);
      return rf(F, A.column.texts);
    }, f = (A) => (A.translate = t.value - A.index * n.value, A.translate), p = () => {
      var A = r.value.map((F) => F.column.texts[F.index]), z = r.value.map((F) => F.index);
      return {
        texts: A,
        indexes: z
      };
    }, y = function(A, z) {
      z === void 0 && (z = 0), f(A), A.duration = z;
    }, b = (A, z, F) => {
      A.translate += Math.abs(z / F) / 3e-3 * (z < 0 ? -1 : 1);
    }, g = (A, z) => {
      i || (A.index = z, A.scrolling = !0, y(A, ls));
    }, C = (A) => {
      A.touching = !0, A.translate = Vo(A.scrollEl);
    }, O = (A, z) => {
      if (z.touching) {
        i = !0, z.scrolling = !1, z.duration = 0;
        var {
          clientY: F
        } = A.touches[0], W = z.prevY !== void 0 ? F - z.prevY : 0;
        z.prevY = F, z.translate += W, d(z);
        var ae = performance.now();
        ae - z.momentumTime > is && (z.momentumTime = ae, z.momentumPrevY = z.translate);
      }
    }, T = (A, z) => {
      z.touching = !1, z.prevY = void 0;
      var F = z.translate - z.momentumPrevY, W = performance.now() - z.momentumTime, ae = Math.abs(F) >= z0 && W <= is;
      ae && b(z, F, W), z.index = v(z, z.translate);
      var M = z.translate, N = f(z);
      z.scrolling = N !== M, y(z, ae ? L0 : ls), z.scrolling || U(z), br(() => {
        i = !1;
      });
    }, k = (A) => {
      A.scrolling = !1, U(A);
    }, V = (A) => A.map((z, F) => {
      var W, ae = Ve(z) ? {
        texts: z
      } : z, M = {
        id: ss++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (W = ae.initialIndex) != null ? W : 0,
        columnIndex: F,
        duration: 0,
        momentumTime: 0,
        column: ae,
        scrollEl: null,
        scrolling: !1
      };
      return y(M), M;
    }), I = (A) => {
      var z = [];
      return E(z, A, 0, !0), z;
    }, E = function(A, z, F, W) {
      if (W === void 0 && (W = !1), Ve(z) && z.length) {
        var ae, M = W && (ae = e.cascadeInitialIndexes[A.length]) != null ? ae : 0, N = {
          id: ss++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: M,
          columnIndex: F,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: z.map((G) => G[e.textKey])
          },
          columns: z,
          scrollEl: null,
          scrolling: !1
        };
        A.push(N), y(N), E(A, N.columns[N.index].children, F + 1, W);
      }
    }, m = (A) => {
      r.value.splice(r.value.indexOf(A) + 1), E(r.value, A.columns[A.index].children, A.columnIndex + 1);
    }, w = () => {
      var {
        indexes: A
      } = p();
      return A.every((z, F) => z === l[F]);
    }, U = (A) => {
      var {
        cascade: z,
        onChange: F
      } = e;
      if (!w()) {
        z && m(A);
        var W = r.value.some((N) => N.scrolling);
        if (!W) {
          var {
            texts: ae,
            indexes: M
          } = p();
          l = [...M], S(F, ae, M);
        }
      }
    }, B = () => {
      if (e.cascade) {
        var A = r.value.find((z) => z.scrolling);
        A && (A.index = v(A, Vo(A.scrollEl)), A.scrolling = !1, y(A), m(A));
      } else
        r.value.forEach((z) => {
          z.index = v(z, Vo(z.scrollEl)), y(z);
        });
    }, X = () => {
      B();
      var {
        texts: A,
        indexes: z
      } = p();
      l = [...z], S(e.onConfirm, A, z);
    }, K = () => {
      B();
      var {
        texts: A,
        indexes: z
      } = p();
      l = [...z], S(e.onCancel, A, z);
    };
    return se(() => e.columns, (A) => {
      r.value = e.cascade ? I(al(A)) : V(al(A));
      var {
        indexes: z
      } = p();
      l = [...z];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: D0,
      classes: A0,
      pack: _e,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Ue,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: C,
      handleTouchmove: O,
      handleTouchend: T,
      handleTransitionend: k,
      confirm: X,
      cancel: K,
      dt: lo,
      handleClick: g
    };
  }
});
ev.render = H0;
const Mt = ev;
var cr;
function In(e) {
  return new Promise((r) => {
    In.close();
    var n = Ve(e) ? {
      columns: e
    } : e, a = Re(n);
    a.dynamic = !0, a.teleport = "body", cr = a;
    var {
      unmountInstance: t
    } = aa(Mt, a, {
      onConfirm: (o, l) => {
        S(a.onConfirm, o, l), r({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, cr === a && (cr = null);
      },
      onCancel: (o, l) => {
        S(a.onCancel, o, l), r({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, cr === a && (cr = null);
      },
      onClose: () => {
        S(a.onClose), r({
          state: "close"
        }), cr === a && (cr = null);
      },
      onClosed: () => {
        S(a.onClosed), t(), cr === a && (cr = null);
      },
      onRouteChange: () => {
        t(), cr === a && (cr = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
In.close = function() {
  if (cr != null) {
    var e = cr;
    cr = null, Le().then(() => {
      e.show = !1;
    });
  }
};
In.Component = Mt;
te(Mt);
te(Mt, In);
var qk = Mt;
function F0(e) {
  return ["linear", "circle"].includes(e);
}
function j0(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var W0 = {
  mode: {
    type: String,
    default: "linear",
    validator: F0
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
    validator: j0
  }
}, {
  n: G0,
  classes: q0
} = re("progress"), X0 = ["viewBox"], K0 = ["r", "stroke-width", "stroke-dasharray"], Z0 = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function J0(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [D(
        "div",
        {
          class: c(e.n("linear-block")),
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: q({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), e.indeterminate ? (h(), $(
          "div",
          {
            key: 1,
            class: c(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
          },
          [D(
            "div",
            {
              class: c(e.classes(e.n("linear--" + e.type))),
              style: q({
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
              style: q({
                background: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )) : (h(), $(
          "div",
          {
            key: 2,
            class: c(e.classes(e.n("linear-certain"), e.n("linear--" + e.type), [e.ripple, e.n("linear-ripple")])),
            style: q({
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
      ), e.label ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [ke(
          ie(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (h(), $(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), $("svg", {
        class: c(e.n("circle-svg")),
        style: q({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (h(), $("circle", {
        key: 0,
        class: c(e.n("circle-background")),
        cx: "50%",
        cy: "50%",
        r: e.RADIUS,
        fill: "transparent",
        "stroke-width": e.circleProps.strokeWidth,
        "stroke-dasharray": e.CIRCUMFERENCE,
        style: q({
          stroke: e.trackColor
        })
      }, null, 14, K0)) : x("v-if", !0), D("circle", {
        class: c(e.classes(e.n("circle-certain"), e.n("circle--" + e.type), [e.indeterminate, e.n("circle-overlay")])),
        cx: "50%",
        cy: "50%",
        r: e.RADIUS,
        fill: "transparent",
        "stroke-width": e.circleProps.strokeWidth,
        "stroke-dasharray": e.CIRCUMFERENCE,
        "stroke-dashoffset": e.circleProps.strokeOffset,
        style: q({
          stroke: e.color
        })
      }, null, 14, Z0)], 14, X0)), e.label ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [ke(
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
var rv = ee({
  name: "VarProgress",
  props: W0,
  setup(e) {
    var r = 100, n = 20, a = 2 * Math.PI * n, t = R(() => {
      var l = L(e.value), i = l > r ? r : l, s = l > r ? r : Math.round(l);
      return {
        width: i + "%",
        roundValue: s + "%"
      };
    }), o = R(() => {
      var {
        size: l,
        lineWidth: i,
        value: s
      } = e, u = n / (1 - ze(i) / ze(l)) * 2, d = "0 0 " + u + " " + u, v = L(s) > r ? r : Math.round(L(s)), f = "" + (r - v) / r * a, p = ze(i) / ze(l) * u;
      return {
        strokeWidth: p,
        viewBox: d,
        strokeOffset: f,
        roundValue: v + "%"
      };
    });
    return {
      n: G0,
      classes: q0,
      toSizeUnit: be,
      linearProps: t,
      CIRCUMFERENCE: a,
      RADIUS: n,
      circleProps: o
    };
  }
});
rv.render = J0;
const Ja = rv;
te(Ja);
var Xk = Ja, Q0 = {
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
  n: vs,
  classes: _0
} = re("pull-refresh"), fs = 150;
function x0(e, r) {
  var n = le("var-icon");
  return h(), $(
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
        style: q(e.controlStyle)
      },
      [Q(n, {
        name: e.iconName,
        transition: e.ICON_TRANSITION,
        class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
        "var-pull-refresh-cover": ""
      }, null, 8, ["name", "transition", "class"])],
      6
      /* CLASS, STYLE */
    ), j(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var nv = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ne
  },
  props: Q0,
  setup(e) {
    var r = P(0), n = P(null), a = P(null), t = P(0), o = P("-125%"), l = P("arrow-down"), i = P("default"), s = P(!1), u, d, v = 0, f = 0, p = /* @__PURE__ */ function() {
      var m = ds(function* (w) {
        if (l.value !== w)
          return l.value = w, new Promise((U) => {
            window.setTimeout(U, fs);
          });
      });
      return function(U) {
        return m.apply(this, arguments);
      };
    }(), y = R(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = R(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: C.value ? e.successBgColor : e.bgColor,
      color: C.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * r.value)), C = R(() => i.value === "success"), O = (m) => {
      var w = "classList" in u ? u : document.body;
      w.classList[m](vs() + "--lock");
    }, T = (m) => {
      if (r.value === 0) {
        var {
          width: w
        } = Qe(a.value);
        r.value = -(w + w * 0.25);
      }
      v = m.touches[0].clientY, f = 0, d = dn(m.target);
    }, k = (m) => {
      if (!(!y.value || !d) && !(d !== u && ma(d) > 0)) {
        var w = ma(u);
        if (!(w > 0)) {
          var U = w === 0, B = m.touches[0];
          f = B.clientY - v, U && f >= 0 && m.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = m.touches[0].clientY), U && nr(o.value) && o.value > r.value && O("add");
          var X = (m.touches[0].clientY - t.value) / 2 + r.value;
          o.value = X >= g.value ? g.value : X, p(o.value >= g.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, V = /* @__PURE__ */ function() {
      var m = ds(function* () {
        y.value && (s.value = !0, L(o.value) >= g.value * 0.2 ? (yield p("refresh"), i.value = "loading", o.value = g.value * 0.3, S(e["onUpdate:modelValue"], !0), Le(() => {
          S(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return m.apply(this, arguments);
      };
    }(), I = () => {
      u = e.target ? Os(e.target, "PullRefresh") : dn(n.value);
    }, E = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return se(() => e.modelValue, (m) => {
      m === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, E();
      }, L(e.successDuration)));
    }), or(I), vn(n, "touchmove", k), {
      n: vs,
      classes: _0,
      ICON_TRANSITION: fs,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: T,
      touchMove: k,
      touchEnd: V,
      iconName: l,
      controlStyle: b,
      isSuccess: C
    };
  }
});
nv.render = x0;
const Qa = nv;
te(Qa);
var Kk = Qa, e1 = {
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
}, av = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function r1() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(av);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function n1() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(av);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: a1,
  classes: t1
} = re("radio");
function o1(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return h(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      De({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [$e((h(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-marked",
          size: e.iconSize
        }, null, 8, ["class", "size"])]) : j(e.$slots, "unchecked-icon", {
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
      }], [l, e.handleHovering, "desktop"]]), D(
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
    ), Q(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var tv = ee({
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
  props: e1,
  setup(e) {
    var r = P(!1), n = R(() => r.value === e.checkedValue), a = P(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = n1(), {
      hovering: l,
      handleHovering: i
    } = cn(), {
      form: s,
      bindForm: u
    } = Vr(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: p
    } = Or(), y = (I) => {
      Le(() => {
        var {
          validateTrigger: E,
          rules: m,
          modelValue: w
        } = e;
        v(E, I, m, w);
      });
    }, b = (I) => {
      var {
        checkedValue: E,
        onChange: m
      } = e;
      t && r.value === E || (r.value = I, S(e["onUpdate:modelValue"], r.value), S(m, r.value), t == null || t.onToggle(E), y("onChange"));
    }, g = (I) => {
      var {
        disabled: E,
        readonly: m,
        uncheckedValue: w,
        checkedValue: U,
        onClick: B
      } = e;
      s != null && s.disabled.value || E || (S(B, I), !(s != null && s.readonly.value || m) && (a.value = !0, b(n.value ? w : U)));
    }, C = (I) => {
      var {
        checkedValue: E,
        uncheckedValue: m
      } = e;
      r.value = I === E ? E : m;
    }, O = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), p();
    }, T = () => f(e.rules, e.modelValue), k = (I) => {
      var {
        uncheckedValue: E,
        checkedValue: m
      } = e, w = ![E, m].includes(I);
      w && (I = n.value ? E : m), b(I);
    };
    se(() => e.modelValue, (I) => {
      r.value = I;
    }, {
      immediate: !0
    });
    var V = {
      sync: C,
      validate: T,
      resetValidation: p,
      reset: O
    };
    return S(o, V), S(u, V), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: a1,
      classes: t1,
      handleClick: g,
      toggle: k,
      reset: O,
      validate: T,
      resetValidation: p
    };
  }
});
tv.render = o1;
const _a = tv;
te(_a);
var Zk = _a;
function i1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var l1 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: i1
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
  n: s1,
  classes: u1
} = re("radio-group");
function d1(e, r) {
  var n = le("var-form-details");
  return h(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var ov = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: ar
  },
  props: l1,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = r1(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Or(), u = R(() => o.value), d = (g) => {
      Le(() => {
        var {
          validateTrigger: C,
          rules: O,
          modelValue: T
        } = e;
        l(C, g, O, T);
      });
    }, v = () => n.forEach((g) => {
      var {
        sync: C
      } = g;
      return C(e.modelValue);
    }), f = (g) => {
      S(e["onUpdate:modelValue"], g), S(e.onChange, g), d("onChange");
    }, p = () => i(e.rules, e.modelValue), y = () => {
      S(e["onUpdate:modelValue"], void 0), s();
    };
    se(() => e.modelValue, v), se(() => r.value, v);
    var b = {
      onToggle: f,
      validate: p,
      reset: y,
      resetValidation: s,
      errorMessage: u
    };
    return S(t, b), a(b), {
      errorMessage: o,
      n: s1,
      classes: u1,
      reset: y,
      validate: p,
      resetValidation: s
    };
  }
});
ov.render = d1;
const xa = ov;
te(xa);
var Jk = xa, v1 = {
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
  n: oa
} = re("rate"), f1 = ["onClick"];
function c1(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return h(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), $(
        Me,
        null,
        He(e.toNumber(e.count), (i) => $e((h(), $("div", {
          key: i,
          style: q(e.getStyle(i)),
          class: c(e.getClass(i)),
          onClick: (s) => e.handleClick(i, s)
        }, [Q(n, {
          class: c(e.n("content-icon")),
          "var-rate-cover": "",
          transition: 0,
          namespace: e.namespace,
          name: e.getCurrentState(i).name,
          style: q({
            fontSize: e.toSizeUnit(e.size)
          })
        }, null, 8, ["class", "namespace", "name", "style"]), Q(a, {
          hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])], 14, f1)), [[o, {
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
var iv = ee({
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
  props: v1,
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
    } = cn(), s = P(-1), u = Number(e.modelValue), d = (k) => {
      var {
        count: V,
        gap: I
      } = e;
      return {
        color: f(k).color,
        marginRight: k !== L(V) ? be(I) : 0
      };
    }, v = (k) => {
      var {
        name: V,
        color: I
      } = f(k);
      return {
        [oa("content")]: !0,
        [oa("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [oa("--error")]: a.value,
        [oa("--primary")]: V !== e.emptyIcon && !I
      };
    }, f = (k) => {
      var {
        modelValue: V,
        disabled: I,
        disabledColor: E,
        color: m,
        half: w,
        emptyColor: U,
        icon: B,
        halfIcon: X,
        emptyIcon: K
      } = e, A = m;
      return (I || r != null && r.disabled.value) && (A = E), k <= L(V) ? {
        color: A,
        name: B
      } : w && k <= L(V) + 0.5 ? {
        color: A,
        name: X
      } : {
        color: I || r != null && r.disabled.value ? E : U,
        name: K
      };
    }, p = (k, V) => {
      var {
        half: I,
        clearable: E
      } = e;
      if (I) {
        var {
          offsetWidth: m
        } = V.target;
        V.offsetX <= Math.floor(m / 2) && (k -= 0.5);
      }
      u === k && E && (k = 0), u = k, S(e["onUpdate:modelValue"], k);
    }, y = () => o(e.rules, L(e.modelValue)), b = () => Le(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = (k, V) => {
      var {
        readonly: I,
        disabled: E,
        onChange: m
      } = e;
      I || E || r != null && r.disabled.value || r != null && r.readonly.value || (p(k, V), S(m, k), b());
    }, C = (k) => (V) => {
      s.value = k, i.value = V;
    }, O = () => {
      S(e["onUpdate:modelValue"], 0), l();
    }, T = {
      reset: O,
      validate: y,
      resetValidation: l
    };
    return S(n, T), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: d,
      getClass: v,
      getCurrentState: f,
      handleClick: g,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: C,
      reset: O,
      validate: y,
      resetValidation: l,
      toSizeUnit: be,
      toNumber: L,
      n: oa
    };
  }
});
iv.render = c1;
const et = iv;
te(et);
var Qk = et;
function m1(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var p1 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: m1
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
}, h1 = (e) => (gn(""), e = e(), yn(), e), g1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, y1 = /* @__PURE__ */ h1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), b1 = [y1];
function w1(e, r) {
  return h(), $("svg", g1, b1);
}
var lv = ee({});
lv.render = w1;
const C1 = lv;
var S1 = (e) => (gn(""), e = e(), yn(), e), k1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, $1 = /* @__PURE__ */ S1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), T1 = [$1];
function P1(e, r) {
  return h(), $("svg", k1, T1);
}
var sv = ee({});
sv.render = P1;
const O1 = sv;
var V1 = (e) => (gn(""), e = e(), yn(), e), M1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, I1 = /* @__PURE__ */ V1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), E1 = [I1];
function B1(e, r) {
  return h(), $("svg", M1, E1);
}
var uv = ee({});
uv.render = B1;
const N1 = uv;
var {
  n: D1,
  classes: A1
} = re("result");
function z1(e, r) {
  return h(), $(
    Me,
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
        style: q({
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
        style: q({
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
        style: q({
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
        style: q({
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
var dv = ee({
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
      n: D1,
      classes: A1,
      toNumber: L
    };
  }
});
dv.render = z1;
const L1 = dv;
var R1 = (e) => (gn(""), e = e(), yn(), e), U1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Y1 = /* @__PURE__ */ R1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), H1 = [Y1];
function F1(e, r) {
  return h(), $("svg", U1, H1);
}
var vv = ee({});
vv.render = F1;
const j1 = vv;
var W1 = (e) => (gn(""), e = e(), yn(), e), G1 = {
  viewBox: "-4 -4 32 32"
}, q1 = /* @__PURE__ */ W1(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), X1 = [q1];
function K1(e, r) {
  return h(), $("svg", G1, X1);
}
var fv = ee({});
fv.render = K1;
const Z1 = fv;
var {
  n: J1,
  classes: Q1
} = re("result");
function _1(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "image", {}, () => [e.type ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: q({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), we(xn(e.type), {
          "border-size": e.borderSize,
          animation: e.animation
        }, null, 8, ["border-size", "animation"]))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : x("v-if", !0)]), j(e.$slots, "title", {}, () => [e.title ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ie(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ie(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var cv = ee({
  name: "VarResult",
  components: {
    Info: C1,
    Success: L1,
    Warning: N1,
    Error: O1,
    Question: j1,
    Empty: Z1
  },
  props: p1,
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
      n: J1,
      classes: Q1,
      toNumber: L,
      toPxNum: ze,
      toSizeUnit: be,
      circleSize: r,
      borderSize: n
    };
  }
});
cv.render = _1;
const rt = cv;
te(rt);
var _k = rt;
function x1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function ew(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var rw = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: x1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: ew
  },
  onClick: Y()
}, {
  n: nw,
  classes: aw
} = re("row");
function tw(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: q({
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
var mv = ee({
  name: "VarRow",
  props: rw,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = up(), t = R(() => {
      var s = ze(e.gutter);
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
    return se(() => a.value, o), se(() => e.gutter, o), n(i), {
      n: nw,
      classes: aw,
      average: t,
      handleClick: l,
      padStartFlex: Xt
    };
  }
});
mv.render = tw;
const nt = mv;
te(nt);
var xk = nt;
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
function ow(e) {
  return ["left", "right", "center"].includes(e);
}
var iw = Si({
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
    validator: ow
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
}, xe(Zi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: lw,
  classes: sw
} = re("select"), uw = {
  key: 1
};
function dw(e, r) {
  var n = le("var-chip"), a = le("var-icon"), t = le("var-field-decorator"), o = le("var-menu"), l = le("var-form-details");
  return h(), $(
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
      menu: ce(() => [D(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )]),
      default: ce(() => [Q(
        t,
        Ct(io({
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
        Gt({
          "append-icon": ce(() => [j(e.$slots, "append-icon")]),
          default: ce(() => [D(
            "div",
            {
              class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
              style: q({
                textAlign: e.textAlign,
                color: e.textColor
              })
            },
            [D(
              "div",
              {
                class: c(e.n("label"))
              },
              [e.isEmptyModelValue ? x("v-if", !0) : j(e.$slots, "selected", {
                key: 0
              }, () => [e.multiple ? (h(), $(
                Me,
                {
                  key: 0
                },
                [e.chip ? (h(), $(
                  "div",
                  {
                    key: 0,
                    class: c(e.n("chips"))
                  },
                  [(h(!0), $(
                    Me,
                    null,
                    He(e.labels, (i) => (h(), we(n, {
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
                        ie(i),
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
                )) : (h(), $(
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
              )) : (h(), $(
                "span",
                uw,
                ie(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.enableCustomPlaceholder ? (h(), $(
              "span",
              {
                key: 0,
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                style: q({
                  color: e.placeholderColor
                })
              },
              ie(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )) : x("v-if", !0), j(e.$slots, "arrow-icon", {
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
          fn: ce(() => [j(e.$slots, "prepend-icon")]),
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
var pv = ee({
  name: "VarSelect",
  components: {
    VarIcon: Ne,
    VarMenu: Mn,
    VarChip: jn,
    VarFieldDecorator: zd,
    VarFormDetails: ar
  },
  props: iw,
  setup(e) {
    var r = P(!1), n = P(!1), a = R(() => e.multiple), t = R(() => e.focusColor), o = P(""), l = P([]), i = R(() => Fr(e.modelValue)), s = R(() => e.disabled || e.readonly ? "" : "pointer"), u = P(0), {
      bindForm: d,
      form: v
    } = Vr(), {
      length: f,
      options: p,
      bindOptions: y
    } = h0(), {
      errorMessage: b,
      validateWithTrigger: g,
      validate: C,
      // expose
      resetValidation: O
    } = Or(), T = P(null), k = R(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), V = R(() => {
      var {
        hint: H,
        blurColor: Z,
        focusColor: _
      } = e;
      if (!H)
        return b.value ? "var(--field-decorator-error-color)" : r.value ? _ || "var(--field-decorator-focus-color)" : Z || "var(--field-decorator-blur-color)";
    }), I = R(() => !e.hint && Fr(e.modelValue)), E = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var _ = Z;
        l.value = _.map(U);
      }
      !H && !Fr(Z) && (o.value = U(Z)), !H && Fr(Z) && (o.value = "");
    }, m = (H) => {
      Le(() => {
        var {
          validateTrigger: Z,
          rules: _,
          modelValue: fe
        } = e;
        g(Z, H, _, fe);
      });
    }, w = (H) => {
      var {
        value: Z,
        label: _
      } = H;
      return Z.value != null ? Z.value : _.value;
    }, U = (H) => {
      var Z, _, fe = p.find((Se) => {
        var {
          value: Ie
        } = Se;
        return Ie.value === H;
      });
      return fe || (fe = p.find((Se) => {
        var {
          label: Ie
        } = Se;
        return Ie.value === H;
      })), (Z = (_ = fe) == null ? void 0 : _.label.value) != null ? Z : "";
    }, B = () => {
      var {
        disabled: H,
        readonly: Z,
        onFocus: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (u.value = ze(e.offsetY), r.value = !0, S(_), m("onFocus"));
    }, X = () => {
      var {
        disabled: H,
        readonly: Z,
        onBlur: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (M(), S(_), m("onBlur"));
    }, K = (H) => {
      var {
        disabled: Z,
        readonly: _,
        multiple: fe,
        onChange: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || _)) {
        var Ie = fe ? p.filter((oe) => {
          var {
            selected: ve
          } = oe;
          return ve.value;
        }).map(w) : w(H);
        S(e["onUpdate:modelValue"], Ie), S(Se, Ie), m("onChange"), fe || M();
      }
    }, A = () => {
      var {
        disabled: H,
        readonly: Z,
        multiple: _,
        clearable: fe,
        onClear: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || H || Z || !fe)) {
        var Ie = _ ? [] : void 0;
        S(e["onUpdate:modelValue"], Ie), S(Se, Ie), m("onClear");
      }
    }, z = (H) => {
      var {
        disabled: Z,
        onClick: _
      } = e;
      v != null && v.disabled.value || Z || (S(_, H), m("onClick"));
    }, F = (H) => {
      var {
        disabled: Z,
        readonly: _,
        modelValue: fe,
        onClose: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || _)) {
        var Ie = fe, oe = p.find((pe) => {
          var {
            label: Oe
          } = pe;
          return Oe.value === H;
        }), ve = Ie.filter((pe) => {
          var Oe;
          return pe !== ((Oe = oe.value.value) != null ? Oe : oe.label.value);
        });
        S(e["onUpdate:modelValue"], ve), S(Se, ve), m("onClose");
      }
    }, W = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var _ = Z;
        p.forEach((fe) => fe.sync(_.includes(w(fe))));
      } else
        p.forEach((fe) => fe.sync(Z === w(fe)));
      E();
    }, ae = () => {
      u.value = ze(e.offsetY), r.value = !0, n.value = !0;
    }, M = () => {
      r.value = !1, n.value = !1;
    }, N = () => C(e.rules, e.modelValue), G = () => {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    se(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      H && !Ve(Z) && Tr("Select", "The modelValue must be an array when multiple is true");
    }), se(() => e.modelValue, W, {
      deep: !0
    }), se(() => f.value, W);
    var ne = {
      multiple: a,
      focusColor: t,
      computeLabel: E,
      onSelect: K,
      reset: G,
      validate: N,
      resetValidation: O
    };
    return y(ne), S(d, ne), {
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
      placement: k,
      cursor: s,
      placeholderColor: V,
      enableCustomPlaceholder: I,
      n: lw,
      classes: sw,
      handleFocus: B,
      handleBlur: X,
      handleClear: A,
      handleClick: z,
      handleClose: F,
      reset: G,
      validate: N,
      resetValidation: O,
      focus: ae,
      blur: M
    };
  }
});
pv.render = dw;
const at = pv;
te(at);
var e$ = at, vw = {
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
  n: fw,
  classes: cw
} = re("skeleton");
function mw(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), $(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: q({
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), $(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: q({
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), $(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), $(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: q({
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
          )) : x("v-if", !0), (h(!0), $(
            Me,
            null,
            He(e.toNumber(e.rows), (n, a) => (h(), $(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: q({
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (h(), $(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: q({
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
var hv = ee({
  name: "VarSkeleton",
  props: vw,
  setup() {
    return {
      n: fw,
      classes: cw,
      toSizeUnit: be,
      toNumber: L
    };
  }
});
hv.render = mw;
const tt = hv;
te(tt);
var r$ = tt;
function pw(e) {
  return ["always", "normal", "never"].includes(e);
}
var qe = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), hw = {
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
    validator: pw
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
  n: cs,
  classes: gw
} = re("slider"), yw = ["onTouchstart"];
function bw(e, r) {
  var n = le("var-hover-overlay"), a = le("var-form-details"), t = Ae("hover");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(e.direction), e.n("$--box")))
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
            style: q({
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
            style: q(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (h(!0), $(
        Me,
        null,
        He(e.thumbList, (o) => (h(), $("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: q(e.thumbStyle(o)),
          onTouchstart: $r((l) => e.start(l, o.enumValue), ["stop"])
        }, [j(e.$slots, "button", {
          currentValue: o.text
        }, () => [$e(D(
          "div",
          {
            class: c(e.n(e.direction + "-thumb-block")),
            style: q({
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
            style: q({
              background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
            })
          },
          [Q(n, {
            hovering: o.hovering
          }, null, 8, ["hovering"])],
          6
          /* CLASS, STYLE */
        ), D(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-thumb-label"), [e.showLabel(o.enumValue), e.n(e.direction + "-thumb-label--active")])),
            style: q({
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
        )])], 46, yw))),
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
var gv = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  directives: {
    Hover: Ur
  },
  props: hw,
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
    } = cn(), {
      hovering: u,
      handleHovering: d
    } = cn(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), p = () => Le(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = P(null), b = P(0), g = P(!1), C = Re({
      [qe.First]: f(),
      [qe.Second]: f()
    }), O = R(() => L(e.max) - L(e.min)), T = R(() => b.value / O.value * L(e.step)), k = R(() => {
      var {
        modelValue: oe,
        range: ve
      } = e, pe = [];
      return ve && Ve(oe) ? pe = [{
        value: K(oe[0]),
        enumValue: qe.First,
        text: A(oe[0]),
        hovering: la(i),
        handleHovering: s
      }, {
        value: K(oe[1]),
        enumValue: qe.Second,
        text: A(oe[1]),
        hovering: la(u),
        handleHovering: d
      }] : nr(oe) && (pe = [{
        value: K(oe),
        enumValue: qe.First,
        text: A(oe),
        hovering: la(i),
        handleHovering: s
      }]), pe;
    }), V = R(() => {
      var {
        activeColor: oe,
        range: ve,
        modelValue: pe
      } = e, Oe = ve && Ve(pe) ? K(Math.min(pe[0], pe[1])) : 0, je = ve && Ve(pe) ? K(Math.max(pe[0], pe[1])) - Oe : K(pe);
      return m.value ? {
        left: "0px",
        height: je + "%",
        bottom: Oe + "%",
        background: oe
      } : {
        top: "0px",
        width: je + "%",
        left: Oe + "%",
        background: oe
      };
    }), I = R(() => e.disabled || (n == null ? void 0 : n.disabled.value)), E = R(() => e.readonly || (n == null ? void 0 : n.readonly.value)), m = R(() => e.direction === "vertical"), w, U = (oe) => {
      var ve = oe.currentTarget;
      return ve ? m.value ? b.value - (oe.clientY - Qe(ve).top) : oe.clientX - af(ve) : 0;
    }, B = (oe) => {
      var ve = m.value ? "bottom" : "left";
      return {
        [ve]: oe.value + "%",
        zIndex: C[oe.enumValue].active ? 1 : void 0
      };
    }, X = (oe) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : C[oe].active, K = (oe) => {
      var {
        min: ve,
        max: pe
      } = e;
      return oe < L(ve) ? 0 : oe > L(pe) ? 100 : (oe - L(ve)) / O.value * 100;
    }, A = (oe) => {
      if (!nr(oe))
        return 0;
      var ve = oe;
      ve < Number(e.min) && (ve = Number(e.min)), ve > Number(e.max) && (ve = Number(e.max));
      var pe = parseInt("" + ve, 10) === ve;
      return pe ? ve : L(ve.toPrecision(5));
    }, z = (oe, ve) => {
      I.value || ve.handleHovering(oe);
    }, F = (oe, ve) => {
      var pe = [], {
        step: Oe,
        range: je,
        modelValue: Ke,
        onChange: We,
        min: Ge
      } = e, ue = L(Oe), Ce = Math.round(oe / T.value), ge = Ce * ue + L(Ge), Te = C[ve].percentValue * ue + L(Ge);
      if (C[ve].percentValue = Ce, je && Ve(Ke) && (pe = ve === qe.First ? [ge, Ke[1]] : [Ke[0], ge]), Te !== ge) {
        var Pe = je ? pe.map((Ye) => A(Ye)) : A(ge);
        S(We, Pe), S(e["onUpdate:modelValue"], Pe), p();
      }
    }, W = (oe) => {
      if (!e.range)
        return qe.First;
      var ve = C[qe.First].percentValue * T.value, pe = C[qe.Second].percentValue * T.value, Oe = Math.abs(oe - ve), je = Math.abs(oe - pe);
      return Oe <= je ? qe.First : qe.Second;
    }, ae = () => {
      document.addEventListener("touchmove", G, {
        passive: !1
      }), document.addEventListener("touchend", ne), document.addEventListener("touchcancel", ne);
    }, M = () => {
      document.removeEventListener("touchmove", G), document.removeEventListener("touchend", ne), document.removeEventListener("touchcancel", ne);
    }, N = (oe, ve) => {
      if (b.value || (b.value = y.value.offsetWidth), I.value || (C[ve].active = !0), w = ve, ae(), !(I.value || E.value)) {
        S(e.onStart), g.value = !0;
        var {
          clientX: pe,
          clientY: Oe
        } = oe.touches[0];
        C[ve].startPosition = m.value ? Oe : pe;
      }
    }, G = (oe) => {
      if (oe.preventDefault(), !(I.value || E.value || !g.value)) {
        var {
          startPosition: ve,
          currentOffset: pe
        } = C[w], {
          clientX: Oe,
          clientY: je
        } = oe.touches[0], Ke = (m.value ? ve - je : Oe - ve) + pe;
        Ke <= 0 ? Ke = 0 : Ke >= b.value && (Ke = b.value), F(Ke, w);
      }
    }, ne = () => {
      M();
      var {
        range: oe,
        modelValue: ve,
        onEnd: pe,
        step: Oe,
        min: je
      } = e;
      if (I.value || (C[w].active = !1), !(I.value || E.value)) {
        var Ke = [];
        C[w].currentOffset = C[w].percentValue * T.value;
        var We = C[w].percentValue * L(Oe) + L(je);
        oe && Ve(ve) && (Ke = w === qe.First ? [We, ve[1]] : [ve[0], We]), S(pe, oe ? Ke : We), g.value = !1;
      }
    }, H = (oe) => {
      if (!(I.value || E.value) && !oe.target.closest("." + cs("thumb"))) {
        var ve = U(oe), pe = W(ve);
        w = pe, F(ve, pe), ne();
      }
    }, Z = () => {
      var oe = L(e.step);
      return isNaN(oe) ? (sl("Slider", 'type of prop "step" should be Number'), !1) : oe < 0 ? (sl("Slider", '"step" should be > 0'), !1) : !0;
    }, _ = () => {
      var {
        range: oe,
        modelValue: ve
      } = e;
      return oe && !Ve(ve) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !oe && Ve(ve) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : oe && Ve(ve) && ve.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, fe = function(oe, ve) {
      oe === void 0 && (oe = e.modelValue), ve === void 0 && (ve = L(e.step));
      var pe = (Oe) => {
        var {
          min: je,
          max: Ke
        } = e;
        return Oe < L(je) ? 0 : Oe > L(Ke) ? O.value / ve : (Oe - L(je)) / ve;
      };
      e.range && Ve(oe) ? (C[qe.First].percentValue = pe(oe[0]), C[qe.First].currentOffset = C[qe.First].percentValue * T.value, C[qe.Second].percentValue = pe(oe[1]), C[qe.Second].currentOffset = C[qe.Second].percentValue * T.value) : nr(oe) && (C[qe.First].currentOffset = pe(oe) * T.value);
    }, Se = () => {
      var oe = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], oe), l();
    }, Ie = {
      reset: Se,
      validate: v,
      resetValidation: l
    };
    return S(r, Ie), se([() => e.modelValue, () => e.step], (oe) => {
      var [ve, pe] = oe;
      !Z() || !_() || g.value || fe(ve, L(pe));
    }), se(b, () => fe()), or(() => {
      !Z() || !_() || (b.value = y.value[m.value ? "offsetHeight" : "offsetWidth"]);
    }), to(() => {
      M();
    }), {
      n: cs,
      classes: gw,
      Thumbs: qe,
      sliderEl: y,
      getFillStyle: V,
      isDisabled: I,
      isVertical: m,
      thumbStyle: B,
      errorMessage: a,
      thumbsProps: C,
      thumbList: k,
      hover: z,
      multiplySizeUnit: ur,
      toNumber: L,
      showLabel: X,
      start: N,
      move: G,
      end: ne,
      click: H
    };
  }
});
gv.render = bw;
const ot = gv;
te(ot);
var n$ = ot;
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
function ww(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function Cw(e) {
  return _i.includes(e);
}
var yv = {
  type: {
    type: String,
    validator: Cw
  },
  position: {
    type: String,
    default: "top",
    validator: ww
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
  loadingType: xe(on, "type"),
  loadingSize: xe(on, "size"),
  loadingRadius: xe(on, "radius"),
  loadingColor: ki({}, xe(on, "color"), {
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
    type: [String, Object],
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
  n: Sw,
  classes: kw
} = re("snackbar"), $w = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Tw(e, r) {
  var n = le("var-icon"), a = le("var-loading");
  return $e((h(), $(
    "div",
    {
      class: c(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [j(e.$slots, "default", {}, () => [ke(
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
        [e.iconName ? (h(), we(n, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : x("v-if", !0), e.type === "loading" ? (h(), we(a, {
          key: 1,
          type: e.loadingType,
          size: e.loadingSize,
          color: e.loadingColor,
          radius: e.loadingRadius
        }, null, 8, ["type", "size", "color", "radius"])) : x("v-if", !0), j(e.$slots, "icon")],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: c(e.n("action"))
        },
        [j(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[qr, e.show]]);
}
var bv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: fn,
    VarIcon: Ne
  },
  props: yv,
  setup(e) {
    var r = P(null), {
      zIndex: n
    } = $t(() => e.show, 1);
    fo(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? $w[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && S(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return se(() => e.show, (l) => {
      l ? (S(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), S(e.onClose));
    }), se(() => e._update, () => {
      clearTimeout(r.value), o();
    }), or(() => {
      e.show && (S(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: _i,
      n: Sw,
      classes: kw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
bv.render = Tw;
const wv = bv;
var {
  n: Pw
} = re("snackbar");
function Ow(e, r) {
  var n = le("var-snackbar-core");
  return h(), we(Jr, {
    to: e.teleport,
    disabled: e.disabled
  }, [Q(Ue, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: ce(() => [Q(n, De(e.$props, {
      class: e.n("transition")
    }), {
      icon: ce(() => [j(e.$slots, "icon")]),
      action: ce(() => [j(e.$slots, "action")]),
      default: ce(() => [j(e.$slots, "default", {}, () => [ke(
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
var Cv = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: wv
  },
  props: yv,
  setup() {
    var {
      disabled: e
    } = vo();
    return {
      n: Pw,
      disabled: e
    };
  }
});
Cv.render = Ow;
const To = Cv;
function it() {
  return it = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, it.apply(this, arguments);
}
function Vw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var _i = ["loading", "success", "warning", "info", "error"], ms = 0, $i = !1, Sv, Jn = !1, kv = {
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
}, kr = Re([]), xi = kv, Mw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, No = (e) => () => ea(e) ? e() : e, Iw = {
  setup() {
    return () => {
      var e = kr.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Jn && (a.position = "top");
        var l = Jn ? "relative" : "absolute", i = it({
          position: l
        }, zw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: No(s),
          icon: No(u),
          action: No(d)
        };
        return Q(wv, De(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Q(Jv, De(Mw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: Ew,
        onAfterLeave: Bw
      }), Vw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Zr = function(e) {
  var r = Dw(e), n = Re(it({}, xi, r));
  n.show = !0, $i || ($i = !0, Sv = aa(Iw).unmountInstance);
  var {
    length: a
  } = kr, t = {
    id: ms++,
    reactiveSnackOptions: n
  };
  if (a === 0 || Jn)
    Nw(t);
  else {
    var o = "update-" + ms;
    Aw(n, o);
  }
  return {
    clear() {
      !Jn && kr.length ? kr[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
_i.forEach((e) => {
  Zr[e] = (r) => (Vi(r) ? r.type = e : r = {
    content: r,
    type: e
  }, Zr(r));
});
Zr.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Jn && (kr.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), Jn = e);
};
Zr.clear = function() {
  kr.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Zr.setDefaultOptions = function(e) {
  xi = e;
};
Zr.resetDefaultOptions = function() {
  xi = kv;
};
function Ew(e) {
  var r = e.getAttribute("data-id"), n = kr.find((a) => a.id === L(r));
  n && S(n.reactiveSnackOptions.onOpened);
}
function Bw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = kr.find((t) => t.id === L(r));
  n && (n.animationEnd = !0, S(n.reactiveSnackOptions.onClosed));
  var a = kr.every((t) => t.animationEnd);
  a && (S(Sv), kr = Re([]), $i = !1);
}
function Nw(e) {
  kr.push(e);
}
function Dw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function Aw(e, r) {
  var [n] = kr;
  n.reactiveSnackOptions = it({}, n.reactiveSnackOptions, e), n._update = r;
}
function zw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Zr.Component = To;
te(To);
te(To, Zr);
var a$ = To;
const Ti = Zr;
var $v = (e) => ["mini", "small", "normal", "large"].includes(e), Lw = (e) => $v(e) || Ve(e) || nr(e) || Fe(e), Rw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Uw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Yw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Lw
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
    validator: Rw
  },
  align: {
    type: String,
    validator: Uw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Hw(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Do,
  classes: Fw
} = re("space");
const lt = ee({
  name: "VarSpace",
  props: Yw,
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
      } = e, v = (t = S(n.default)) != null ? t : [], f = $v(d), [p, y] = a(d, f);
      v = As(v);
      var b = v.length - 1, g = v.map((C, O) => {
        var T = Hw(p, y, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: b
        });
        return Q("div", {
          style: {
            margin: T
          }
        }, [C]);
      });
      return Q("div", {
        class: Fw(Do(), Do("$--box"), [o, Do("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Xt(l),
          alignItems: Xt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + p + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
te(lt);
var t$ = lt, jw = {
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
}, Tv = Symbol("STEPS_BIND_STEP_KEY");
function Ww() {
  var {
    bindChildren: e,
    childProviders: r
  } = lr(Tv);
  return {
    step: r,
    bindStep: e
  };
}
function Gw() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Tv);
  return n || Tr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: qw,
  classes: Xw
} = re("step"), Kw = {
  key: 3
};
function Zw(e, r) {
  var n = le("var-icon");
  return h(), $(
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
          style: q({
            backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
          }),
          onClick: r[0] || (r[0] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [e.isActive ? (h(), we(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.activeIcon
        }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (h(), we(n, {
          key: 1,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.currentIcon
        }, null, 8, ["class", "name"])) : e.inactiveIcon ? (h(), we(n, {
          key: 2,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.inactiveIcon
        }, null, 8, ["class", "name"])) : (h(), $(
          "span",
          Kw,
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
          onClick: r[1] || (r[1] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [j(e.$slots, "default")],
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
var Pv = ee({
  name: "VarStep",
  components: {
    VarIcon: Ne
  },
  props: jw,
  setup() {
    var {
      index: e,
      steps: r,
      bindSteps: n
    } = Gw(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = r, s = R(() => a.value === e.value), u = R(() => e.value !== -1 && L(a.value) > e.value), d = {
      index: e
    }, v = () => i(e.value);
    return n(d), {
      n: qw,
      classes: Xw,
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
Pv.render = Zw;
const st = Pv;
te(st);
var o$ = st;
function Jw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Qw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Jw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: _w
} = re("steps");
function xw(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n()),
      style: q({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ov = ee({
  name: "VarSteps",
  props: Qw,
  setup(e) {
    var r = R(() => e.active), n = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      bindStep: o
    } = Ww(), l = (s) => {
      S(e.onClickStep, s);
    }, i = {
      active: r,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: _w
    };
  }
});
Ov.render = xw;
const ut = Ov;
te(ut);
var i$ = ut, eC = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: rC
} = re("style-provider"), nC = ee({
  name: "VarStyleProvider",
  props: eC,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => Cs(e.tag, {
      class: rC(),
      style: Ns(e.styleVars)
    }, S(n.default));
  }
});
const Po = nC;
var Ao = [];
function dt(e) {
  Ao.forEach((n) => document.documentElement.style.removeProperty(n)), Ao.length = 0;
  var r = Ns(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Ao.push(a);
  });
}
dt.Component = Po;
te(Po);
te(Po, dt);
var l$ = Po, aC = {
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
  n: tC,
  classes: oC
} = re("switch"), iC = (e) => (gn(""), e = e(), yn(), e), lC = /* @__PURE__ */ iC(() => /* @__PURE__ */ D(
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
)), sC = [lC];
function uC(e, r) {
  var n = le("var-hover-overlay"), a = le("var-form-details"), t = Ae("ripple"), o = Ae("hover");
  return $e((h(), $(
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
        style: q(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: q(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), $e((h(), $(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: q(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), $(
            "span",
            {
              key: 0,
              class: c(e.n("loading")),
              style: q({
                width: e.multiplySizeUnit(e.radius, 2),
                height: e.multiplySizeUnit(e.radius, 2)
              })
            },
            sC,
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
var Vv = ee({
  name: "VarSwitch",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  directives: {
    Ripple: Xe,
    Hover: Ur
  },
  props: aC,
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
    } = cn(), u = () => o(e.rules, e.modelValue), d = () => Le(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = R(() => {
      var {
        size: C,
        modelValue: O,
        color: T,
        closeColor: k,
        loadingColor: V,
        activeValue: I
      } = e;
      return {
        handle: {
          width: ur(C),
          height: ur(C),
          backgroundColor: O === I ? T : k,
          color: V
        },
        ripple: {
          left: O === I ? ur(C, 0.5) : "-" + ur(C, 0.5),
          color: O === I ? T : k || "#999",
          width: ur(C, 2),
          height: ur(C, 2)
        },
        track: {
          height: ur(C, 0.72),
          width: ur(C, 1.9),
          borderRadius: ur(C, 2 / 3),
          filter: O === I || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === I ? T : k
        },
        switch: {
          height: ur(C, 1.2),
          width: ur(C, 2)
        }
      };
    }), f = R(() => ur(e.size, 0.4)), p = (C) => {
      var {
        onClick: O,
        onChange: T,
        disabled: k,
        loading: V,
        readonly: I,
        modelValue: E,
        activeValue: m,
        inactiveValue: w,
        "onUpdate:modelValue": U
      } = e;
      if (S(O, C), !(k || V || I || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var B = E === m ? w : m;
        S(T, B), S(U, B), d();
      }
    }, y = (C) => {
      e.disabled || n != null && n.disabled.value || s(C);
    }, b = () => {
      S(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, g = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return S(r, g), {
      n: tC,
      classes: oC,
      multiplySizeUnit: ur,
      switchActive: p,
      hovering: i,
      hover: y,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly
    };
  }
});
Vv.render = uC;
const vt = Vv;
te(vt);
var s$ = vt, dC = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, Mv = Symbol("TABS_BIND_TAB_KEY");
function vC() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Mv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function fC() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Mv);
  return r || Tr("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Rt,
  classes: cC
} = re("tab");
function mC(e, r) {
  var n = Ae("ripple");
  return $e((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: q({
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
var Iv = ee({
  name: "VarTab",
  directives: {
    Ripple: Xe
  },
  props: dC,
  setup(e) {
    var r = P(null), n = R(() => e.name), a = R(() => e.disabled), t = R(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = fC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: p,
      resize: y
    } = l, b = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var g = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), C = () => e.disabled ? f.value : g() ? d.value : v.value, O = () => e.disabled ? Rt("$-tab--disabled") : g() ? Rt("$-tab--active") : Rt("$-tab--inactive"), T = (k) => {
      var {
        disabled: V,
        name: I,
        onClick: E
      } = e;
      V || (S(E, I ?? o.value, k), s(b));
    };
    return se(() => e.name, y), se(() => e.disabled, y), {
      n: Rt,
      classes: cC,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: p,
      computeColorStyle: C,
      computeColorClass: O,
      handleClick: T
    };
  }
});
Iv.render = mC;
const ft = Iv;
te(ft);
var u$ = ft, pC = {
  name: {
    type: [String, Number]
  }
}, {
  n: hC,
  classes: gC
} = re("tab-item");
function yC(e, r) {
  var n = le("var-swipe-item");
  return h(), we(n, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Ev = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Lr
  },
  props: pC,
  setup(e) {
    var r = P(!1), n = R(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Kb(), {
      bindLists: o
    } = Zb(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: R(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: hC,
      classes: gC,
      current: r
    };
  }
});
Ev.render = yC;
const ct = Ev;
te(ct);
var d$ = ct, bC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: wC,
  classes: CC
} = re("table");
function SC(e, r) {
  return h(), $(
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
          style: q({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [j(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Bv = ee({
  name: "VarTable",
  props: bC,
  setup() {
    return {
      toSizeUnit: be,
      n: wC,
      classes: CC,
      formatElevation: hr
    };
  }
});
Bv.render = SC;
const mt = Bv;
te(mt);
var v$ = mt;
function ps(e) {
  return ["horizontal", "vertical"].includes(e);
}
function kC(e) {
  return ["auto", "always"].includes(e);
}
function $C(e) {
  return ["normal", "reverse"].includes(e);
}
var TC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: ps
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ps
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
    validator: kC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: $C
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: xe(Wt, "cssMode"),
  stickyZIndex: xe(Wt, "zIndex"),
  offsetTop: xe(Wt, "offsetTop"),
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
};
function hs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function gs(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        hs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        hs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: PC,
  classes: OC
} = re("tabs");
function VC(e, r) {
  return h(), we(xn(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [D(
      "div",
      De({
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
        [j(e.$slots, "default"), D(
          "div",
          {
            class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
            style: q({
              width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
              height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
              transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
            })
          },
          [D(
            "div",
            {
              class: c(e.classes(e.n("indicator-inner"), e.n("--layout-" + e.layoutDirection + "-indicator-inner"))),
              style: q({
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
var Nv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Vn
  },
  inheritAttrs: !1,
  props: TC,
  setup(e) {
    var r = P("0px"), n = P("0px"), a = P("0px"), t = P("0px"), o = P(!1), l = P(null), i = R(() => e.active), s = R(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = R(() => e.activeColor), d = R(() => e.inactiveColor), v = R(() => e.disabledColor), f = R(() => e.itemDirection), p = P(null), {
      tabList: y,
      bindTabList: b,
      length: g
    } = vC(), C = (B) => {
      var X, K = (X = B.name.value) != null ? X : B.index.value, {
        active: A,
        onChange: z,
        onClick: F
      } = e;
      S(e["onUpdate:active"], K), S(F, K), K !== A && S(z, K);
    }, O = () => y.find((B) => {
      var {
        name: X
      } = B;
      return e.active === X.value;
    }), T = (B) => y.find((X) => {
      var {
        index: K
      } = X;
      return (B ?? e.active) === K.value;
    }), k = () => {
      if (g.value !== 0) {
        var {
          active: B
        } = e;
        if (nr(B)) {
          var X = Rn(B, 0, g.value - 1);
          return S(e["onUpdate:active"], X), T(X);
        }
      }
    }, V = () => {
      o.value = e.scrollable === "always" || y.length >= 5;
    }, I = (B) => {
      var {
        element: X
      } = B, K = X.value;
      K && (e.layoutDirection === "horizontal" ? (r.value = K.offsetWidth + "px", a.value = K.offsetLeft + "px") : (n.value = K.offsetHeight + "px", t.value = K.offsetTop + "px"));
    }, E = (B) => {
      var {
        element: X
      } = B;
      if (o.value) {
        var K = l.value, A = X.value;
        if (e.layoutDirection === "horizontal") {
          var z = A.offsetLeft + A.offsetWidth / 2 - K.offsetWidth / 2;
          pa(K, {
            left: z,
            animation: Lo
          });
        } else {
          var F = A.offsetTop + A.offsetHeight / 2 - K.offsetHeight / 2;
          pa(K, {
            top: F,
            animation: Lo
          });
        }
      }
    }, m = () => {
      var B = O() || T() || k();
      !B || B.disabled.value || (V(), I(B), E(B));
    }, w = /* @__PURE__ */ function() {
      var B = gs(function* () {
        e.sticky && p.value && (yield p.value.resize());
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), U = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: m,
      onTabClick: C
    };
    return b(U), se(() => g.value, /* @__PURE__ */ gs(function* () {
      yield Dr(), m();
    })), se(() => e.active, m), se(() => e.scrollable, m), hn(m), St(m), {
      stickyComponent: p,
      indicatorWidth: r,
      indicatorHeight: n,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Ue,
      toSizeUnit: be,
      n: PC,
      classes: OC,
      resize: m,
      resizeSticky: w,
      formatElevation: hr
    };
  }
});
Nv.render = VC;
const pt = Nv;
te(pt);
var f$ = pt, MC = {
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
function ys(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function IC(e) {
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
  n: EC
} = re("tabs-items");
function BC(e, r) {
  var n = le("var-swipe");
  return h(), we(n, {
    class: c(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: ce(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
var Dv = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: On
  },
  props: MC,
  setup(e) {
    var r = P(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = Xb(), o = (v) => n.find((f) => {
      var {
        name: p
      } = f;
      return v === p.value;
    }), l = (v) => n.find((f) => {
      var {
        index: p
      } = f;
      return v === p.value;
    }), i = (v) => o(v) || l(v), s = (v) => {
      var f, p = i(v);
      p && (n.forEach((y) => {
        var {
          setCurrent: b
        } = y;
        return b(!1);
      }), p.setCurrent(!0), (f = r.value) == null || f.to(p.index.value));
    }, u = (v) => {
      var f, p = n.find((b) => {
        var {
          index: g
        } = b;
        return g.value === v;
      }), y = (f = p.name.value) != null ? f : p.index.value;
      S(e["onUpdate:active"], y);
    }, d = () => r.value;
    return a({}), se(() => e.active, s), se(() => t.value, /* @__PURE__ */ IC(function* () {
      yield Dr(), s(e.active);
    })), {
      swipe: r,
      n: EC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Dv.render = BC;
const ht = Dv;
te(ht);
var c$ = ht;
const NC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, DC = {
  "--badge-default-color": "#555"
}, AC = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, zC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, LC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, RC = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, UC = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, YC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, HC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, FC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, jC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, WC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, GC = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, qC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, XC = {
  "--popup-content-background-color": "#1e1e1e"
}, KC = {
  "--pull-refresh-background": "#303030"
}, ZC = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, JC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, QC = {
  "--select-scroller-background": "#303030"
}, _C = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, xC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, eS = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, rS = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, nS = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, aS = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, tS = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, oS = {
  "--tabs-background": "#1e1e1e"
}, iS = {
  "--app-bar-color": "#272727"
}, lS = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, sS = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, uS = {
  "--menu-background-color": "#272727"
}, dS = {
  "--breadcrumb-inactive-color": "#aaa"
}, vS = {
  "--paper-background": "#303030"
}, fS = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, cS = {
  "--link-default-color": "#fff"
}, mS = {
  "--progress-label-color": "#fff"
}, pS = {
  "--options-text-color": "#fff"
}, hS = {
  "--countdown-text-color": "#fff"
};
function Pi() {
  return Pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Pi.apply(this, arguments);
}
const gS = Pi({
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
}, AC, LC, zC, aS, HC, _C, oS, rS, XC, FC, NC, UC, DC, tS, YC, KC, eS, xC, GC, nS, WC, QC, ZC, RC, jC, qC, iS, lS, sS, uS, JC, dS, vS, fS, cS, mS, pS, hS);
var yS = {
  dark: gS
}, m$ = null;
const Oi = yS;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], dr = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], bs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function bS(e) {
  return ["ampm", "24hr"].includes(e);
}
var wS = {
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
    validator: bS
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
}, Av = (e, r) => e === "24hr" || r === "am", el = (e, r, n) => {
  var a = Cr.findIndex((o) => L(o) === L(n)), t = Av(e, r) ? n : dr[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, mr = (e) => {
  var [r, n, a] = e.split(":");
  return {
    hour: L(r),
    minute: L(n),
    second: L(a)
  };
}, zv = (e) => {
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
  } = el(t, o, l), f = !1, p = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: y,
      minute: b
    } = mr(i);
    f = y === v && a > b;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: C
    } = mr(s);
    f = g === v && a < C;
  }
  if (i && s) {
    var {
      hour: O,
      minute: T
    } = mr(i), {
      hour: k,
      minute: V
    } = mr(s);
    f = k === v && a < V || O === v && a > T;
  }
  return (r = e.allowedTime) != null && r.minutes && (p = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || p;
}, Lv = (e) => {
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
  } = el(t, o, l), p = !1, y = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: g,
      second: C
    } = mr(s);
    p = b === f && g < i || g === i && a > C;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: T,
      second: k
    } = mr(u);
    p = O === f && T > i || T === i && a > k;
  }
  if (s && u) {
    var {
      hour: V,
      minute: I,
      second: E
    } = mr(s), {
      hour: m,
      minute: w,
      second: U
    } = mr(u);
    p = V === f && I < i || m === f && w > i || V === f && I === i && a > E || m === f && w === i && a < U;
  }
  return (r = e.allowedTime) != null && r.seconds && (y = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), p || y;
}, {
  n: CS,
  classes: SS
} = re("time-picker");
function kS(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.n("clock"))
    },
    [D(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), $(
      Me,
      null,
      He(e.timeScales, (n, a) => (h(), $(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: q(e.getStyle(a, n, !1))
        },
        ie(n),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), $(
        Me,
        null,
        He(e.hours24, (n, a) => (h(), $(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: q(e.getStyle(a, n, !0))
          },
          ie(n),
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
var Rv = ee({
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
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? Cr : bs), u = (g, C) => {
      var O;
      g = (O = g) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var T = e.type === "minute" ? zv : Lv, k = {
        time: L(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return C && e.type === "minute" && Reflect.deleteProperty(k, "minute"), T(k);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? dr[i.value] : s.value[i.value];
      return s.value === bs ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, C) => C ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (Av(e.format, e.ampm))
          return t.value.includes(g);
        var C = Cr.findIndex((O) => O === g);
        return o.value.includes(C);
      }
      return u(g, !0);
    }, p = (g, C, O) => {
      var T = 2 * Math.PI / 12 * g - Math.PI / 2, k = 50 * (1 + Math.cos(T)), V = 50 * (1 + Math.sin(T)), I = () => v(g, O) ? f(C) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: E,
        color: m
      } = I();
      return {
        left: k + "%",
        top: V + "%",
        backgroundColor: E,
        color: m
      };
    }, y = () => {
      var {
        width: g,
        height: C
      } = Qe(a.value);
      return {
        width: g,
        height: C
      };
    }, b = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? Cr : dr;
        return kn(g[i.value], 2, "0");
      }
    };
    return se([i, () => e.isInner], (g, C) => {
      var [O, T] = g, [k, V] = C, I = O === k && T === V;
      if (!(I || e.type !== "hour" || i.value === void 0)) {
        var E = T ? dr[i.value] : b(), m = e.useSeconds ? ":" + e.time.second : "", w = E + ":" + e.time.minute + m;
        e.preventNextUpdate || n("update", w), n("change-prevent-update");
      }
    }), se(() => e.rad, (g, C) => {
      if (!(e.type === "hour" || g === void 0 || C === void 0)) {
        var O = g / 6 >= 0 ? g / 6 : g / 6 + 60, T = C / 6 >= 0 ? C / 6 : C / 6 + 60;
        if (O !== T) {
          var k, {
            hourStr: V
          } = el(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var I = de().minute(O).format("mm"), E = e.useSeconds ? ":" + e.time.second : "";
            k = V + ":" + I + E;
          }
          if (e.type === "second") {
            var m = de().second(O).format("ss"), w = e.useSeconds ? ":" + m : "";
            k = V + ":" + e.time.minute + w;
          }
          n("update", k);
        }
      }
    }), se([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [C, O, T] = g;
      if (t.value = [], C && !O) {
        var {
          hour: k
        } = mr(C), V = Cr.filter((W) => L(W) > k), I = dr.filter((W) => L(W) > k);
        t.value = [...V, ...I];
      }
      if (!C && O) {
        var {
          hour: E
        } = mr(O), m = Cr.filter((W) => L(W) < E), w = dr.filter((W) => L(W) < E);
        t.value = [...m, ...w];
      }
      if (C && O) {
        var {
          hour: U
        } = mr(C), {
          hour: B
        } = mr(O), X = Cr.filter((W) => L(W) < B || L(W) > U), K = dr.filter((W) => L(W) < B || L(W) > U);
        t.value = [...X, ...K];
      }
      if (T != null && T.hours) {
        var {
          hours: A
        } = T, z = Cr.filter((W) => !A(L(W))), F = dr.filter((W) => !A(L(W)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...z, ...F])];
      }
      o.value = t.value.map((W) => dr.findIndex((ae) => W === ae)).filter((W) => W >= 0);
    }, {
      immediate: !0
    }), {
      n: CS,
      classes: SS,
      hours24: dr,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: y,
      getStyle: p,
      activeItemIndex: i
    };
  }
});
Rv.render = kS;
const $S = Rv;
var {
  n: TS,
  classes: PS
} = re("time-picker"), OS = (e) => (gn(""), e = e(), yn(), e), VS = /* @__PURE__ */ OS(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), MS = {
  key: 0
};
function IS(e, r) {
  var n = le("clock");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: q({
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
          ie(e.time.hour),
          3
          /* TEXT, CLASS */
        ), VS, D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          ie(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), $("span", MS, ":")) : x("v-if", !0), e.useSeconds ? (h(), $(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          ie(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), $(
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
          default: ce(() => [(h(), we(n, {
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
var Uv = ee({
  name: "VarTimePicker",
  components: {
    Clock: $S
  },
  props: wS,
  setup(e) {
    var r = P(null), n = P(null), a = P(null), t = P(!1), o = P(!1), l = P(!1), i = P(!1), s = P(!1), u = P(void 0), d = P(0), v = P(0), f = P("hour"), p = P("am"), y = P(!1), b = P(!1), g = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = Re({
      x: 0,
      y: 0
    }), O = Re({
      x: [],
      y: []
    }), T = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), k = (N) => {
      S(e["onUpdate:modelValue"], N), S(e.onChange, N);
    }, V = (N) => N * 57.29577951308232, I = (N) => {
      i.value = !1, b.value = !1, f.value = N;
    }, E = (N) => {
      var {
        disableHour: G
      } = a.value, ne = Cr.findIndex((_) => L(_) === L(g.value.hour)), H = N === "am" ? Cr : dr, Z = [...H.slice(ne), ...H.slice(0, ne)];
      return Z.find((_, fe) => (o.value = fe !== 0, !G.includes(_)));
    }, m = (N) => {
      if (!e.readonly) {
        p.value = N;
        var G = E(N);
        if (G) {
          var ne = e.useSeconds ? ":" + g.value.second : "", H = kn(G, 2, "0") + ":" + g.value.minute + ne;
          k(H);
        }
      }
    }, w = (N, G) => {
      var ne = N >= O.x[0] && N <= O.x[1], H = G >= O.y[0] && G <= O.y[1];
      return ne && H;
    }, U = (N) => {
      var G = e.format === "24hr" ? "HH" : "hh", {
        hour: ne,
        minute: H,
        second: Z
      } = mr(N);
      return {
        hour: de().hour(ne).format(G),
        minute: de().minute(H).format("mm"),
        second: de().second(Z).format("ss")
      };
    }, B = (N) => {
      var G = N / 30;
      return G >= 0 ? G : G + 12;
    }, X = () => {
      var {
        width: N,
        height: G
      } = a.value.getSize(), ne = C.x - N / 2 - 8, H = C.x + N / 2 + 8, Z = C.y - G / 2 - 8, _ = C.y + G / 2 + 8;
      return {
        rangeXMin: ne,
        rangeXMax: H,
        rangeYMin: Z,
        rangeYMax: _
      };
    }, K = (N, G, ne) => {
      var {
        disableHour: H
      } = a.value;
      l.value = w(N, G);
      var Z = Math.round(ne / 30) * 30 + 90, _ = B(Z), fe = t.value ? Cr[_] : dr[_];
      if (H.includes(fe) || (t.value = e.format === "24hr" ? w(N, G) : !1), t.value === l.value) {
        var Se = t.value || p.value === "pm" ? dr[_] : Cr[_];
        y.value = H.includes(Se), !y.value && (u.value = Z, i.value = !0);
      }
    }, A = (N) => {
      var {
        disableHour: G
      } = a.value, ne = Math.round(N / 6) * 6 + 90, H = ne / 6 >= 0 ? ne / 6 : ne / 6 + 60, Z = {
        time: H,
        format: e.format,
        ampm: p.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: G,
        allowedTime: e.allowedTime
      };
      b.value = zv(Z), !b.value && (d.value = ne, s.value = !0);
    }, z = (N) => {
      var {
        disableHour: G
      } = a.value, ne = Math.round(N / 6) * 6 + 90, H = ne / 6 >= 0 ? ne / 6 : ne / 6 + 60, Z = {
        time: H,
        format: e.format,
        ampm: p.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: G,
        allowedTime: e.allowedTime
      };
      Lv(Z) || (v.value = ne);
    }, F = () => {
      var {
        left: N,
        top: G,
        width: ne,
        height: H
      } = Qe(r.value);
      if (C.x = N + ne / 2, C.y = G + H / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Z,
          rangeXMax: _,
          rangeYMin: fe,
          rangeYMax: Se
        } = X();
        O.x = [Z, _], O.y = [fe, Se];
      }
    }, W = (N) => {
      if (N.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: G,
          clientY: ne
        } = N.touches[0], H = G - C.x, Z = ne - C.y, _ = Math.round(V(Math.atan2(Z, H)));
        f.value === "hour" ? K(G, ne, _) : f.value === "minute" ? A(_) : z(_);
      }
    }, ae = () => {
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
    return se(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: G,
          minute: ne,
          second: H
        } = mr(N), Z = de().hour(G).format("hh"), _ = de().hour(G).format("HH"), fe = de().minute(ne).format("mm"), Se = de().second(H).format("ss");
        u.value = (Z === "12" ? 0 : L(Z)) * 30, d.value = L(fe) * 6, v.value = L(Se) * 6, g.value = U(N), e.format !== "24hr" && (p.value = kn("" + G, 2, "0") === _ && dr.includes(_) ? "pm" : "am"), t.value = e.format === "24hr" && dr.includes(_);
      }
    }, {
      immediate: !0
    }), {
      n: TS,
      classes: PS,
      getRad: T,
      time: g,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: p,
      isPreventNextUpdate: o,
      moveHand: W,
      checkPanel: I,
      checkAmpm: m,
      end: ae,
      update: k,
      changePreventUpdate: M,
      formatElevation: hr
    };
  }
});
Uv.render = IS;
const gt = Uv;
te(gt);
var p$ = gt, ES = {
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
function ws(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function zo(e) {
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
  n: BS,
  classes: NS
} = re("uploader"), DS = 0, AS = ["onClick"], zS = ["onClick"], LS = ["src", "alt"], RS = ["multiple", "accept", "capture", "disabled"], US = ["src"];
function YS(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = le("var-popup"), l = Ae("ripple"), i = Ae("hover");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), $(
        Me,
        null,
        He(e.files, (s) => $e((h(), $("div", {
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
        ), e.removable ? (h(), $("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: $r((u) => e.handleRemove(s), ["stop"])
        }, [Q(n, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, zS)) : x("v-if", !0), s.cover ? (h(), $("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: q({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, LS)) : x("v-if", !0), D(
          "div",
          {
            class: c(e.n("file-indicator"))
          },
          [D(
            "div",
            {
              class: c(e.classes(e.n("progress"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")])),
              style: q({
                width: s.state === "success" || s.state === "error" ? "100%" : s.progress + "%"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )], 10, AS)), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? $e((h(), $(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
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
          onChange: r[0] || (r[0] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        }, null, 42, RS), j(e.$slots, "default", {}, () => [Q(n, {
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
    }, Gt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ce(() => [j(e.$slots, "extra-message")]),
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
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), $("video", {
          key: 0,
          class: c(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, US)) : x("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var Yv = ee({
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
  props: ES,
  setup(e) {
    var r = P(null), n = P(!1), a = P(null), t = R(() => {
      var {
        maxlength: W,
        modelValue: {
          length: ae
        }
      } = e;
      return nr(W) ? ae + " / " + W : "";
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
    } = cn(), p = R(() => {
      var {
        modelValue: W,
        hideList: ae
      } = e;
      return ae ? [] : W;
    }), y = (W) => {
      var {
        disabled: ae,
        readonly: M,
        previewed: N
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || ae || M || !N)) {
        var {
          url: G
        } = W;
        if (Fe(G) && ol(G)) {
          zr(G);
          return;
        }
        Fe(G) && il(G) && (a.value = W, n.value = !0);
      }
    }, b = (W) => ({
      id: DS++,
      url: "",
      cover: "",
      name: W.name,
      file: W,
      progress: 0
    }), g = (W) => {
      var ae = W.target, {
        files: M
      } = ae;
      return Array.from(M);
    }, C = (W) => new Promise((ae) => {
      if (!W.file.type.startsWith("image")) {
        ae(W);
        return;
      }
      var M = new FileReader();
      M.onload = () => {
        var N = M.result;
        W.cover = N, W.url = N, ae(W);
      }, M.readAsDataURL(W.file);
    }), O = (W) => W.map(C), T = (W) => {
      var {
        onBeforeRead: ae
      } = e;
      return W.map((M) => new Promise((N) => {
        ae || N({
          valid: !0,
          varFile: M
        });
        var G = Ut(S(ae, Re(M)));
        Promise.all(G).then((ne) => {
          N({
            valid: ne.every(Boolean),
            varFile: M
          });
        });
      }));
    }, k = /* @__PURE__ */ function() {
      var W = zo(function* (ae) {
        var {
          maxsize: M,
          maxlength: N,
          modelValue: G,
          onOversize: ne,
          onAfterRead: H,
          onBeforeFilter: Z,
          readonly: _,
          disabled: fe
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || fe || _)) {
          var Se = (We) => We.filter((Ge) => Ge.file.size > L(M) ? (S(ne, Re(Ge)), !1) : !0), Ie = (We) => {
            var Ge = Math.min(We.length, L(N) - G.length);
            return We.slice(0, Ge);
          }, oe = /* @__PURE__ */ function() {
            var We = zo(function* (Ge) {
              if (!Z)
                return Ge;
              var ue = Ut(Z);
              for (var Ce of ue)
                Ge = yield Ce(Ge);
              return Ge;
            });
            return function(ue) {
              return We.apply(this, arguments);
            };
          }(), ve = g(ae), pe = ve.map(b);
          pe = yield oe(pe), pe = M != null ? Se(pe) : pe, pe = N != null ? Ie(pe) : pe;
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
          S(e["onUpdate:modelValue"], [...G, ...Ke]), ae.target.value = "", Ke.forEach((We) => S(H, Re(We)));
        }
      });
      return function(M) {
        return W.apply(this, arguments);
      };
    }(), V = /* @__PURE__ */ function() {
      var W = zo(function* (ae) {
        var {
          disabled: M,
          readonly: N,
          modelValue: G,
          onBeforeRemove: ne,
          onRemove: H
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || M || N)) {
          if (ne) {
            var Z = Ut(S(ne, Re(ae)));
            if ((yield Promise.all(Z)).some((fe) => !fe))
              return;
          }
          var _ = G.filter((fe) => fe !== ae);
          S(H, Re(ae)), X("onRemove"), S(e["onUpdate:modelValue"], _);
        }
      });
      return function(M) {
        return W.apply(this, arguments);
      };
    }(), I = () => e.modelValue.filter((W) => W.state === "success"), E = () => e.modelValue.filter((W) => W.state === "error"), m = () => e.modelValue.filter((W) => W.state === "loading"), w = () => {
      r.value.click();
    }, U = () => {
      a.value = null, n.value = !1, zr.close();
    }, B = {
      getSuccess: I,
      getError: E,
      getLoading: m
    }, X = (W) => {
      Le(() => {
        var {
          validateTrigger: ae,
          rules: M,
          modelValue: N
        } = e;
        s(ae, W, M, N, B);
      });
    }, K = !1, A = () => u(e.rules, e.modelValue, B), z = () => {
      K = !0, S(e["onUpdate:modelValue"], []), d();
    }, F = {
      validate: A,
      resetValidation: d,
      reset: z
    };
    return S(l, F), se(() => e.modelValue, () => {
      !K && X("onChange"), K = !1;
    }, {
      deep: !0
    }), {
      n: BS,
      classes: NS,
      formatElevation: hr,
      input: r,
      files: p,
      showPreview: n,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      toNumber: L,
      handleHovering: f,
      isHTMLSupportVideo: il,
      isHTMLSupportImage: ol,
      preview: y,
      handleChange: k,
      handleRemove: V,
      getSuccess: I,
      getError: E,
      getLoading: m,
      validate: A,
      resetValidation: d,
      reset: z,
      chooseFile: w,
      closePreview: U,
      toSizeUnit: be
    };
  }
});
Yv.render = YS;
const yt = Yv;
te(yt);
var h$ = yt;
const HS = "2.13.0";
function FS(e) {
  Xr.install && e.use(Xr), ha.install && e.use(ha), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), Yn.install && e.use(Yn), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), vr.install && e.use(vr), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Hn.install && e.use(Hn), Fn.install && e.use(Fn), Oa.install && e.use(Oa), jn.install && e.use(jn), Va.install && e.use(Va), Ma.install && e.use(Ma), Ia.install && e.use(Ia), yr.install && e.use(yr), Ea.install && e.use(Ea), Na.install && e.use(Na), Da.install && e.use(Da), Kr.install && e.use(Kr), Aa.install && e.use(Aa), za.install && e.use(za), Ua.install && e.use(Ua), Ya.install && e.use(Ya), Pn.install && e.use(Pn), ar.install && e.use(ar), Ur.install && e.use(Ur), Pr.install && e.use(Pr), Ne.install && e.use(Ne), Ha.install && e.use(Ha), zr.install && e.use(zr), Fa.install && e.use(Fa), ja.install && e.use(ja), Zn.install && e.use(Zn), ga.install && e.use(ga), Wa.install && e.use(Wa), Ga.install && e.use(Ga), fn.install && e.use(fn), wi.install && e.use(wi), Wo.install && e.use(Wo), Mn.install && e.use(Mn), qa.install && e.use(qa), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Za.install && e.use(Za), In.install && e.use(In), Rr.install && e.use(Rr), Ja.install && e.use(Ja), Qa.install && e.use(Qa), _a.install && e.use(_a), xa.install && e.use(xa), et.install && e.use(et), rt.install && e.use(rt), Xe.install && e.use(Xe), nt.install && e.use(nt), at.install && e.use(at), tt.install && e.use(tt), ot.install && e.use(ot), Ti.install && e.use(Ti), lt.install && e.use(lt), st.install && e.use(st), ut.install && e.use(ut), Vn.install && e.use(Vn), dt.install && e.use(dt), On.install && e.use(On), Lr.install && e.use(Lr), vt.install && e.use(vt), ft.install && e.use(ft), ct.install && e.use(ct), mt.install && e.use(mt), pt.install && e.use(pt), ht.install && e.use(ht), Oi.install && e.use(Oi), gt.install && e.use(gt), Kn.install && e.use(Kn), yt.install && e.use(yt);
}
const g$ = {
  version: HS,
  install: FS,
  ActionSheet: Xr,
  AppBar: ha,
  Avatar: ya,
  AvatarGroup: ba,
  BackTop: wa,
  Badge: Yn,
  BottomNavigation: Ca,
  BottomNavigationItem: Sa,
  Breadcrumb: ka,
  Breadcrumbs: $a,
  Button: vr,
  ButtonGroup: Ta,
  Card: Pa,
  Cell: Hn,
  Checkbox: Fn,
  CheckboxGroup: Oa,
  Chip: jn,
  Col: Va,
  Collapse: Ma,
  CollapseItem: Ia,
  Context: yr,
  Countdown: Ea,
  Counter: Na,
  DatePicker: Da,
  Dialog: Kr,
  Divider: Aa,
  Drag: za,
  Ellipsis: Ua,
  Fab: Ya,
  Form: Pn,
  FormDetails: ar,
  Hover: Ur,
  HoverOverlay: Pr,
  Icon: Ne,
  Image: Ha,
  ImagePreview: zr,
  IndexAnchor: Fa,
  IndexBar: ja,
  Input: Zn,
  Lazy: ga,
  Link: Wa,
  List: Ga,
  Loading: fn,
  LoadingBar: wi,
  Locale: Wo,
  Menu: Mn,
  Option: qa,
  Overlay: Xa,
  Pagination: Ka,
  Paper: Za,
  Picker: In,
  Popup: Rr,
  Progress: Ja,
  PullRefresh: Qa,
  Radio: _a,
  RadioGroup: xa,
  Rate: et,
  Result: rt,
  Ripple: Xe,
  Row: nt,
  Select: at,
  Skeleton: tt,
  Slider: ot,
  Snackbar: Ti,
  Space: lt,
  Step: st,
  Steps: ut,
  Sticky: Vn,
  StyleProvider: dt,
  Swipe: On,
  SwipeItem: Lr,
  Switch: vt,
  Tab: ft,
  TabItem: ct,
  Table: mt,
  Tabs: pt,
  TabsItems: ht,
  Themes: Oi,
  TimePicker: gt,
  Tooltip: Kn,
  Uploader: yt
};
export {
  Xr as ActionSheet,
  ha as AppBar,
  ya as Avatar,
  ba as AvatarGroup,
  wa as BackTop,
  Yn as Badge,
  Ca as BottomNavigation,
  Sa as BottomNavigationItem,
  ka as Breadcrumb,
  $a as Breadcrumbs,
  vr as Button,
  Ta as ButtonGroup,
  Pa as Card,
  Hn as Cell,
  Fn as Checkbox,
  Oa as CheckboxGroup,
  jn as Chip,
  Va as Col,
  Ma as Collapse,
  Ia as CollapseItem,
  yr as Context,
  Ea as Countdown,
  Na as Counter,
  Da as DatePicker,
  Kr as Dialog,
  Aa as Divider,
  za as Drag,
  Ua as Ellipsis,
  Ya as Fab,
  Pn as Form,
  ar as FormDetails,
  Ur as Hover,
  Pr as HoverOverlay,
  Ne as Icon,
  Ha as Image,
  zr as ImagePreview,
  Fa as IndexAnchor,
  ja as IndexBar,
  Zn as Input,
  ga as Lazy,
  Wa as Link,
  Ga as List,
  fn as Loading,
  wi as LoadingBar,
  Wo as Locale,
  Mn as Menu,
  qa as Option,
  Xa as Overlay,
  Xo as PIXEL,
  Ka as Pagination,
  Za as Paper,
  In as Picker,
  Rr as Popup,
  Ja as Progress,
  Qa as PullRefresh,
  _a as Radio,
  xa as RadioGroup,
  et as Rate,
  rt as Result,
  Xe as Ripple,
  nt as Row,
  _i as SNACKBAR_TYPE,
  at as Select,
  tt as Skeleton,
  ot as Slider,
  Ti as Snackbar,
  lt as Space,
  st as Step,
  ut as Steps,
  Vn as Sticky,
  dt as StyleProvider,
  On as Swipe,
  Lr as SwipeItem,
  vt as Switch,
  ft as Tab,
  ct as TabItem,
  mt as Table,
  pt as Tabs,
  ht as TabsItems,
  Oi as Themes,
  gt as TimePicker,
  Kn as Tooltip,
  yt as Uploader,
  ZS as _ActionSheetComponent,
  JS as _AppBarComponent,
  _S as _AvatarComponent,
  xS as _AvatarGroupComponent,
  tk as _BackTopComponent,
  ok as _BadgeComponent,
  ik as _BottomNavigationComponent,
  lk as _BottomNavigationItemComponent,
  sk as _BreadcrumbComponent,
  uk as _BreadcrumbsComponent,
  ak as _ButtonComponent,
  dk as _ButtonGroupComponent,
  vk as _CardComponent,
  fk as _CellComponent,
  mk as _CheckboxComponent,
  pk as _CheckboxGroupComponent,
  hk as _ChipComponent,
  gk as _ColComponent,
  yk as _CollapseComponent,
  bk as _CollapseItemComponent,
  WS as _ContextComponent,
  wk as _CountdownComponent,
  Ck as _CounterComponent,
  Sk as _DatePickerComponent,
  kk as _DialogComponent,
  $k as _DividerComponent,
  Tk as _DragComponent,
  Ok as _EllipsisComponent,
  Vk as _FabComponent,
  Mk as _FormComponent,
  ck as _FormDetailsComponent,
  nk as _HoverComponent,
  rk as _HoverOverlayComponent,
  XS as _IconComponent,
  Ik as _ImageComponent,
  Nk as _ImagePreviewComponent,
  Ak as _IndexAnchorComponent,
  zk as _IndexBarComponent,
  Lk as _InputComponent,
  QS as _LazyComponent,
  Rk as _LinkComponent,
  Uk as _ListComponent,
  Yk as _LoadingBarComponent,
  ek as _LoadingComponent,
  KS as _LocaleComponent,
  Hk as _MenuComponent,
  Fk as _OptionComponent,
  jk as _OverlayComponent,
  Wk as _PaginationComponent,
  Gk as _PaperComponent,
  qk as _PickerComponent,
  qS as _PopupComponent,
  Xk as _ProgressComponent,
  Kk as _PullRefreshComponent,
  Zk as _RadioComponent,
  Jk as _RadioGroupComponent,
  Qk as _RateComponent,
  _k as _ResultComponent,
  GS as _RippleComponent,
  xk as _RowComponent,
  e$ as _SelectComponent,
  r$ as _SkeletonComponent,
  n$ as _SliderComponent,
  a$ as _SnackbarComponent,
  t$ as _SpaceComponent,
  o$ as _StepComponent,
  i$ as _StepsComponent,
  Dk as _StickyComponent,
  l$ as _StyleProviderComponent,
  Ek as _SwipeComponent,
  Bk as _SwipeItemComponent,
  s$ as _SwitchComponent,
  u$ as _TabComponent,
  d$ as _TabItemComponent,
  v$ as _TableComponent,
  f$ as _TabsComponent,
  c$ as _TabsItemsComponent,
  m$ as _ThemesComponent,
  p$ as _TimePickerComponent,
  Pk as _TooltipComponent,
  h$ as _UploaderComponent,
  Nf as actionSheetProps,
  Di as add,
  Yf as appBarProps,
  vc as avatarGroupProps,
  oc as avatarProps,
  Fc as backTopProps,
  Kc as badgeProps,
  tm as bottomNavigationItemProps,
  _c as bottomNavigationProps,
  dm as breadcrumbProps,
  hm as breadcrumbsProps,
  Ac as buttonProps,
  Om as cardProps,
  Nm as cellProps,
  Jm as checkboxGroupProps,
  Fm as checkboxProps,
  np as chipProps,
  sp as colProps,
  yp as collapseItemProps,
  mp as collapseProps,
  Sp as countdownProps,
  yh as counterProps,
  Uh as datePickerProps,
  g$ as default,
  Ze as defaultLazyOptions,
  ng as dialogProps,
  lg as dividerProps,
  vg as dragProps,
  Gs as enUS,
  Lm as formDetailsProps,
  Ry as formProps,
  js as iconProps,
  Js as imageCache,
  ob as imagePreviewProps,
  jy as imageProps,
  yb as indexAnchorProps,
  Sb as indexBarProps,
  Nb as inputProps,
  FS as install,
  Fb as linkProps,
  qb as listProps,
  r0 as loadingBarProps,
  on as loadingProps,
  f0 as menuProps,
  Xs as merge,
  y0 as optionProps,
  S0 as overlayProps,
  _e as pack,
  qs as packs,
  $0 as paginationProps,
  M0 as paperProps,
  N0 as pickerProps,
  kt as popupProps,
  W0 as progressProps,
  Q0 as pullRefreshProps,
  l1 as radioGroupProps,
  e1 as radioProps,
  v1 as rateProps,
  p1 as resultProps,
  rw as rowProps,
  iw as selectProps,
  vw as skeletonProps,
  hw as sliderProps,
  yv as snackbarProps,
  Yw as spaceProps,
  jw as stepProps,
  Qw as stepsProps,
  Wt as stickyProps,
  eC as styleProviderProps,
  Od as swipeProps,
  aC as switchProps,
  pC as tabItemProps,
  dC as tabProps,
  bC as tableProps,
  MC as tabsItemsProps,
  TC as tabsProps,
  wS as timePickerProps,
  ky as tooltipProps,
  ES as uploaderProps,
  Ai as use,
  cn as useHoverOverlay,
  Ni as useLocale,
  HS as version,
  Bi as zhCN
};
