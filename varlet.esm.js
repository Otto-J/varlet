import { reactive as Re, onMounted as ao, nextTick as Le, onActivated as mn, isRef as Fv, watch as se, onBeforeUnmount as to, onDeactivated as _n, unref as sa, onUnmounted as oo, inject as jv, getCurrentInstance as xn, computed as U, provide as Wv, isVNode as bt, ref as P, Comment as Gv, Fragment as Me, createApp as qv, h as ws, onBeforeMount as Xv, defineComponent as ee, createVNode as Q, Teleport as pn, Transition as Ue, withDirectives as $e, vShow as Gr, mergeProps as De, openBlock as h, createBlock as we, resolveDynamicComponent as ea, normalizeClass as c, normalizeStyle as K, resolveComponent as le, resolveDirective as Ae, withCtx as ce, createElementVNode as z, renderSlot as j, toDisplayString as ie, createElementBlock as $, renderList as He, createCommentVNode as x, onUpdated as wt, createTextVNode as ke, pushScopeId as hn, popScopeId as gn, withModifiers as $r, normalizeProps as Ct, guardReactiveProps as io, vModelText as Kv, createSlots as Gt, withKeys as al, toRaw as tl, TransitionGroup as Zv } from "vue";
var Cs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, WS = Re(Cs);
const yr = Re(Cs), Fe = (e) => typeof e == "string", Ss = (e) => typeof e == "boolean", nr = (e) => typeof e == "number", Vi = (e) => Object.prototype.toString.call(e) === "[object Object]", Jv = (e) => typeof e == "object" && e !== null, ra = (e) => typeof e == "function", Ve = (e) => Array.isArray(e), Qv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Hr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Mi = (e) => e === window, R = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ss(e) ? Number(e) : e, qt = (e, r) => {
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
}, na = () => typeof window < "u", ol = (e) => [...new Set(e)], ks = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), _v = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), xv = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ut = (e) => Ve(e) ? e : [e], Rn = (e, r, n) => Math.min(n, Math.max(r, e)), ef = (e, r) => Rn(e, 0, r.length - 1);
var il = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ll = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), rf = (e) => {
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
}, Lo = (e) => e, sl = (e) => Math.pow(e, 3), $s = (e) => e < 0.5 ? sl(e * 2) / 2 : 1 - sl((1 - e) * 2) / 2, lo = (e, r) => e ?? r, Ts = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Sn = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Tr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function ul(e, r) {
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
function aa(e) {
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
function nf(e) {
  var {
    left: r
  } = Qe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function dl(e) {
  var {
    top: r
  } = Qe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pa(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Ei(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function af(e) {
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
function Oo(e) {
  var {
    transform: r
  } = aa(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function sn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = aa(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function tf(e) {
  for (var r = [], n = e; !Mi(n); )
    n = sn(n), r.push(n);
  return r;
}
function Ps(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Tr(r, "target element cannot found"), n;
  }
  if (Jv(e))
    return e;
  Tr(r, 'type of prop "target" should be a selector or an element object');
}
function of() {
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
var Os = (e) => Fe(e) && e.endsWith("rem"), lf = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), sf = (e) => Fe(e) && e.endsWith("px") || nr(e), uf = (e) => Fe(e) && e.endsWith("%"), Vs = (e) => Fe(e) && e.endsWith("vw"), Ms = (e) => Fe(e) && e.endsWith("vh"), Is = (e) => Fe(e) && e.endsWith("vmin"), Es = (e) => Fe(e) && e.endsWith("vmax"), df = (e) => Fe(e) && e.startsWith("calc("), vf = (e) => Fe(e) && e.startsWith("var("), ze = (e) => {
  if (nr(e))
    return e;
  if (sf(e))
    return +e.replace("px", "");
  if (!na())
    return 0;
  var {
    vw: r,
    vh: n,
    vMin: a,
    vMax: t
  } = of();
  if (Vs(e))
    return +e.replace("vw", "") * r / 100;
  if (Ms(e))
    return +e.replace("vh", "") * n / 100;
  if (Is(e))
    return +e.replace("vmin", "") * a / 100;
  if (Es(e))
    return +e.replace("vmax", "") * t / 100;
  if (Os(e)) {
    var o = +e.replace("rem", ""), l = aa(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return Fe(e) ? R(e) : 0;
}, be = (e) => {
  if (e != null)
    return uf(e) || Vs(e) || Ms(e) || lf(e) || Os(e) || df(e) || vf(e) || Is(e) || Es(e) ? e : ze(e) + "px";
}, ur = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = be(e), a = n.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = Ts();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function vl(e) {
  var r = Ts();
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
function ff() {
  return new Promise((e) => {
    br(e);
  });
}
function ha(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = pa(e), s = Ei(e);
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
function Bs(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + _v(a);
    return r[o] = t, r;
  }, {});
}
function cf() {
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
  }), mn(() => {
    r && e();
  });
}
function un(e, r, n, a = {}) {
  if (!na())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => ra(m) ? m() : sa(m), u = (m) => {
    if (l || i)
      return;
    const b = s(m);
    b && (b.addEventListener(r, n, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const b = s(m);
    b && (b.removeEventListener(r, n, {
      capture: o
    }), l = !1);
  };
  let v;
  Fv(e) && (v = se(() => e.value, (m, b) => {
    d(b), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return or(() => {
    u(e);
  }), to(() => {
    d(e);
  }), _n(() => {
    d(e);
  }), f;
}
function Ns(e, r, n) {
  if (!na())
    return;
  un(document, r, (t) => {
    const o = ra(e) ? e() : sa(e);
    o && !o.contains(t.target) && n(t);
  });
}
function uo(e) {
  oo(() => {
    e();
  }), _n(() => {
    e();
  });
}
var mf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function pf(e) {
  const r = xn();
  return e in r.provides;
}
function ir(e) {
  if (!pf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = jv(e), { childInstances: n, collect: a, clear: t } = r, o = mf(r, ["childInstances", "collect", "clear"]), l = xn();
  return {
    index: U(() => n.indexOf(l)),
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
function hf(e) {
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
  const r = xn(), n = Re([]), a = [], t = U(() => n.length), o = () => {
    const u = hf(r.subTree);
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
      Wv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function St(e) {
  un(() => window, "resize", e, { passive: !0 }), un(() => window, "orientationchange", e, { passive: !0 });
}
function gf(e, r) {
  const n = P(!1);
  return se(e, (a) => {
    r === a && (n.value = !0);
  }, { immediate: !0 }), n;
}
function fl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function cl(e) {
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
function yf(e) {
  var r = qv(e), n = document.createElement("div");
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
      return () => ws(e, Uo({}, r, n));
    }
  }, {
    unmount: t
  } = yf(a);
  return {
    unmountInstance: t
  };
}
function Ds(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Gv) {
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
    var t = cl(function* (o, l, i) {
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
    var t = cl(function* (o, l, i, s, u) {
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
function bf(e) {
  un(() => window, "hashchange", e), un(() => window, "popstate", e);
}
function Bi() {
  var e = P(!1);
  return mn(() => {
    e.value = !1;
  }), _n(() => {
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
function pr(e, r) {
  return e === !1 ? null : (e === !0 && r && (e = r), "var-elevation--" + e);
}
function As(e, r, n) {
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
  n: zs
} = re("ripple"), ml = 250;
function wf(e) {
  var {
    zIndex: r,
    position: n
  } = aa(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function Cf(e, r) {
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
function Ls(e) {
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
      } = Cf(this, e), s = document.createElement("div");
      s.classList.add(zs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), wf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function Yo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + zs());
    if (n.length) {
      var a = n[n.length - 1], t = ml - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, ml);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function Rs() {
  if (!(!cf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function Sf(e, r) {
  var n;
  e._ripple = Kt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: Yo.bind(e)
  }), e.addEventListener("touchstart", Ls, {
    passive: !0
  }), e.addEventListener("touchmove", Rs, {
    passive: !0
  }), e.addEventListener("dragstart", Yo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function kf(e) {
  e.removeEventListener("touchstart", Ls), e.removeEventListener("touchmove", Rs), e.removeEventListener("dragstart", Yo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function $f(e, r) {
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
var Us = {
  mounted: Sf,
  unmounted: kf,
  updated: $f,
  install(e) {
    e.directive("ripple", this);
  }
}, GS = Us;
const Xe = Us;
function Tf(e) {
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
    validator: Tf
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
function Ys() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function It(e) {
  yr.locks[e] = 1, Ys();
}
function Et(e) {
  delete yr.locks[e], Ys();
}
function vo(e, r) {
  var {
    uid: n
  } = xn();
  r && se(r, (a) => {
    a === !1 ? Et(n) : a === !0 && e() === !0 && It(n);
  }), se(e, (a) => {
    r && r() === !1 || (a === !0 ? It(n) : Et(n));
  }), Xv(() => {
    r && r() === !1 || e() === !0 && It(n);
  }), oo(() => {
    r && r() === !1 || e() === !0 && Et(n);
  }), mn(() => {
    r && r() === !1 || e() === !0 && It(n);
  }), _n(() => {
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
var Hs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Pf() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(Hs);
  return {
    index: n,
    popup: r,
    bindPopup: e
  };
}
function Of() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Hs);
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
function pl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var {
  n: Ir,
  classes: Vo
} = re("popup");
const Lr = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: kt,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = gf(() => e.show, !0), {
      zIndex: o
    } = $t(() => e.show, 3), {
      disabled: l
    } = Bi(), {
      bindPopupItems: i
    } = Of(), s = () => {
      var {
        closeOnClickOverlay: f,
        onClickOverlay: m
      } = e;
      S(m), f && S(e["onUpdate:show"], !1);
    }, u = () => {
      var {
        overlayClass: f = "",
        overlayStyle: m
      } = e;
      return Q("div", {
        class: Vo(Ir("overlay"), f),
        style: Ho({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => $e(Q("div", De({
      class: Vo(Ir("content"), Ir("--" + e.position), [e.defaultStyle, Ir("--content-background-color")], [e.defaultStyle, Ir("$-elevation--3")], [e.safeArea, Ir("--safe-area")], [e.safeAreaTop, Ir("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && S(n.default)]), [[Gr, e.show]]), v = () => {
      var f;
      return Q(Ue, {
        name: Ir("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [$e(Q("div", {
          class: Vo(Ir("$--box"), Ir()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), Q(Ue, {
          name: e.transition || Ir("$-pop-" + e.position)
        }, pl(f = d()) ? f : {
          default: () => [f]
        })]), [[Gr, e.show]])]
      });
    };
    return vo(() => e.show, () => e.lockScroll), se(() => e.show, (f) => {
      S(f ? e.onOpen : e.onClose);
    }), i({
      show: U(() => e.show)
    }), bf(() => S(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Q(pn, {
          to: f,
          disabled: l.value
        }, pl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
te(Lr);
var qS = Lr, Fs = {
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
function hl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Vf(e) {
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
  n: Mf,
  classes: If
} = re("icon");
function Ef(e, r) {
  return h(), we(ea(e.isURL(e.name) ? "img" : "i"), {
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
var js = ee({
  name: "VarIcon",
  props: Fs,
  setup(e) {
    var r = P(""), n = P(!1), a = /* @__PURE__ */ function() {
      var t = Vf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || R(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield Le(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, R(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return se(() => e.name, a, {
      immediate: !0
    }), {
      n: Mf,
      classes: If,
      nextName: r,
      animateInProgress: n,
      isURL: Qv,
      toNumber: R,
      toSizeUnit: be
    };
  }
});
js.render = Ef;
const Ne = js;
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
var Bf = Fo({
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
const Ni = {
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
}, Ws = {
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
function Di() {
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
  packs: Gs,
  pack: _e,
  add: Ai,
  use: zi,
  merge: qs
} = Di();
Ai("zh-CN", Ni);
zi("zh-CN");
var KS = {
  zhCN: Ni,
  enUS: Ws,
  packs: Gs,
  pack: _e,
  add: Ai,
  use: zi,
  merge: qs,
  useLocale: Di
};
const Wo = {
  zhCN: Ni,
  enUS: Ws,
  packs: Gs,
  pack: _e,
  add: Ai,
  use: zi,
  merge: qs,
  useLocale: Di
};
var {
  n: Nf,
  classes: Df
} = re("action-sheet"), Af = ["onClick"];
function zf(e, r) {
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
    default: ce(() => [z(
      "div",
      De({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [j(e.$slots, "title", {}, () => [z(
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
          style: K({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (h(), we(n, {
          key: 0,
          class: c(e.n("action-icon")),
          "var-action-sheet-cover": "",
          name: o.icon,
          size: o.iconSize
        }, null, 8, ["class", "name", "size"])) : x("v-if", !0), z(
          "div",
          {
            class: c(e.n("action-name"))
          },
          ie(o.name),
          3
          /* TEXT, CLASS */
        )], 14, Af)), [[t, {
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
var Xs = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: Xe
  },
  components: {
    VarPopup: Lr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Bf,
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
      n: Nf,
      classes: Df,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: _e,
      dt: lo,
      handleSelect: n
    };
  }
});
Xs.render = zf;
const Tt = Xs;
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
var en, Li = {};
function Lf(e) {
  return e === void 0 && (e = {}), Go({}, Li, e);
}
function qr(e) {
  return na() ? new Promise((r) => {
    qr.close();
    var n = Re(Lf(e));
    n.teleport = "body", en = n;
    var {
      unmountInstance: a
    } = ta(Tt, n, {
      onSelect: (t) => {
        S(n.onSelect, t), r(t);
      },
      onClose: () => {
        S(n.onClose), r("close");
      },
      onClosed: () => {
        S(n.onClosed), a(), en === n && (en = null);
      },
      onRouteChange: () => {
        a(), en === n && (en = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }) : Promise.resolve();
}
qr.setDefaultOptions = function(e) {
  Li = e;
};
qr.resetDefaultOptions = function() {
  Li = {};
};
qr.close = function() {
  if (en != null) {
    var e = en;
    en = null, Le().then(() => {
      e.show = !1;
    });
  }
};
qr.Component = Tt;
te(Tt);
te(Tt, qr);
var ZS = Tt;
function Rf(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
}
var Uf = {
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
    validator: Rf
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
  n: Yf,
  classes: Hf
} = re("app-bar");
function Ff(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: K(e.rootStyles)
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
        [j(e.$slots, "left"), e.titlePosition === "left" ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: K({
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
      )) : x("v-if", !0), z(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: K({
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
var Ks = ee({
  name: "VarAppBar",
  props: Uf,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(), t = P(), o = () => {
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
    return or(o), wt(o), {
      n: Yf,
      classes: Hf,
      formatElevation: pr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ks.render = Ff;
const ga = Ks;
te(ga);
var JS = ga;
function gl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function fo(e) {
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
var jf = "background-image", Wf = "lazy-loading", Gf = "lazy-error", yl = "lazy-attempt", qf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Xo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Un = [], Zt = [], Zs = rf(100), Ze = {
  loading: Xo,
  error: Xo,
  attempt: 3,
  throttleWait: 300,
  events: qf
}, Ri = Ii(Pt, Ze.throttleWait);
function co(e, r) {
  e._lazy.arg === jf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Xf(e) {
  e._lazy.loading && co(e, e._lazy.loading), Pt();
}
function Kf(e) {
  e._lazy.error && co(e, e._lazy.error), e._lazy.state = "error", Yi(e), Pt();
}
function Js(e, r) {
  co(e, r), e._lazy.state = "success", Yi(e), Pt();
}
function Zf(e) {
  var r;
  Zt.includes(e) || (Zt.push(e), (r = Ze.events) == null || r.forEach((n) => {
    e.addEventListener(n, Ri, {
      passive: !0
    });
  }));
}
function Jf() {
  Zt.forEach((e) => {
    var r;
    (r = Ze.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Ri);
    });
  }), Zt.length = 0;
}
function Qf(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Wf)) != null ? n : Ze.loading,
    error: (a = e.getAttribute(Gf)) != null ? a : Ze.error,
    attempt: e.getAttribute(yl) ? Number(e.getAttribute(yl)) : Ze.attempt
  };
  e._lazy = qo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), co(e, Xo), S(Ze.filter, e._lazy);
}
function _f(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Zs.add(r), Js(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Kf(e) : Qs(e);
  });
}
function Qs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (Zs.has(r)) {
      Js(e, r), e._lazy.attemptLock = !1;
      return;
    }
    Xf(e), _f(e, r);
  }
}
function Ui(e) {
  return Ko.apply(this, arguments);
}
function Ko() {
  return Ko = fo(function* (e) {
    yield Dr(), af(e) && Qs(e);
  }), Ko.apply(this, arguments);
}
function Pt() {
  Un.forEach((e) => Ui(e));
}
function xf(e) {
  return Zo.apply(this, arguments);
}
function Zo() {
  return Zo = fo(function* (e) {
    !Un.includes(e) && Un.push(e), tf(e).forEach(Zf), yield Ui(e);
  }), Zo.apply(this, arguments);
}
function Yi(e) {
  qt(Un, e), Un.length === 0 && Jf();
}
function ec(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function _s(e, r) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = fo(function* (e, r) {
    Qf(e, r), yield xf(e);
  }), Jo.apply(this, arguments);
}
function rc(e, r) {
  return Qo.apply(this, arguments);
}
function Qo() {
  return Qo = fo(function* (e, r) {
    if (!ec(e, r)) {
      Un.includes(e) && (yield Ui(e));
      return;
    }
    yield _s(e, r);
  }), Qo.apply(this, arguments);
}
function nc(e) {
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
var xs = {
  mounted: _s,
  unmounted: Yi,
  updated: rc,
  install(e, r) {
    nc(r), Ri = Ii(Pt, Ze.throttleWait), e.directive("lazy", this);
  }
}, QS = xs;
const ya = xs;
function ac(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var eu = (e) => ["mini", "small", "normal", "large"].includes(e);
function ru(e) {
  return eu(e) || nr(e) || Fe(e);
}
var tc = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: ru,
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
    validator: ac,
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
  n: oc,
  classes: ic
} = re("avatar"), lc = ["src", "lazy-loading", "lazy-error"], sc = ["src"];
function uc(e, r) {
  var n = Ae("lazy");
  return h(), $(
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
    [e.src ? (h(), $(
      Me,
      {
        key: 0
      },
      [e.lazy ? $e((h(), $("img", {
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
      }, null, 46, lc)), [[n, e.src]]) : (h(), $("img", {
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
      }, null, 46, sc))],
      64
      /* STABLE_FRAGMENT */
    )) : (h(), $(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: K({
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
var nu = ee({
  name: "VarAvatar",
  directives: {
    Lazy: ya
  },
  props: tc,
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
      internalSizeValidator: eu,
      sizeValidator: ru,
      toSizeUnit: be,
      n: oc,
      classes: ic,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
nu.render = uc;
const ba = nu;
te(ba);
var _S = ba, dc = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: vc,
  classes: fc
} = re("avatar-group");
function cc(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: K(e.rootStyles)
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var au = ee({
  name: "VarAvatarGroup",
  props: dc,
  setup(e) {
    var r = U(() => e.offset == null ? {} : {
      "--avatar-group-offset": be(e.offset)
    });
    return {
      n: vc,
      classes: fc,
      toSizeUnit: be,
      rootStyles: r
    };
  }
});
au.render = cc;
const wa = au;
te(wa);
var xS = wa;
function mc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function pc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var an = {
  type: {
    type: String,
    default: "circle",
    validator: mc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: pc
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
  n: hc,
  classes: gc
} = re("loading"), yc = (e) => (hn(""), e = e(), gn(), e), bc = /* @__PURE__ */ yc(() => /* @__PURE__ */ z(
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
)), wc = [bc];
function Cc(e, r) {
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
        [z(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          wc,
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
      )), e.$slots.description || e.description ? (h(), $(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: K({
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
var tu = ee({
  name: "VarLoading",
  props: an,
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
      n: hc,
      classes: gc,
      multiplySizeUnit: ur,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
tu.render = Cc;
const dn = tu;
te(dn);
var ek = dn, Sc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: kc,
  classes: $c
} = re("hover-overlay");
function Tc(e, r) {
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
var ou = ee({
  name: "VarHoverOverlay",
  props: Sc,
  setup() {
    return {
      n: kc,
      classes: $c
    };
  }
});
ou.render = Tc;
const Pr = ou;
te(Pr);
function vn() {
  var e = P(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var rk = Pr;
function iu(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function Pc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[ks(t)] = o, n;
  }, {}) : {};
}
function Oc(e) {
  var {
    value: r
  } = e._hover, n = Pc(e);
  Object.keys(r).forEach((a) => {
    var t = ks(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function Hi(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function Vc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function lu(e) {
  Vc(e), Hi(e, e._hover.rawStyle);
}
function su() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, ra(e)) {
    e(this._hover.hovering);
    return;
  }
  Hi(this, e);
}
function uu() {
  if (this._hover.hovering = !1, ra(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  lu(this);
}
function du(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  iu(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, Oc(e), e.addEventListener("mouseenter", su), e.addEventListener("mouseleave", uu));
}
function vu(e, r) {
  iu(r.arg) || (lu(e), e.removeEventListener("mouseenter", su), e.removeEventListener("mouseleave", uu));
}
function Mc(e, r) {
  e._hover && vu(e, r);
}
function Ic(e, r) {
  return !ra(r.value) && e._hover.hovering;
}
function Ec(e, r) {
  du(e, r), Ic(e, r) && Hi(e, r.value);
}
var fu = {
  mounted: du,
  unmounted: vu,
  beforeUpdate: Mc,
  updated: Ec,
  install(e) {
    e.directive("hover", this);
  }
}, nk = fu;
const Rr = fu;
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
function cu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Bc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Nc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Dc = {
  type: {
    type: String,
    validator: cu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Nc
  },
  size: {
    type: String,
    validator: Bc
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
  loadingType: xe(an, "type"),
  loadingSize: xe(an, "size"),
  loadingColor: _o({}, xe(an, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, mu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Ac() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(mu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function zc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(mu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Lc,
  classes: Rc
} = re("button"), Uc = ["type", "disabled"];
function Yc(e, r) {
  var n = le("var-loading"), a = le("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return $e((h(), $("button", {
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
  }, [e.loading || e.pending ? (h(), we(n, {
    key: 0,
    class: c(e.n("loading")),
    "var-button-cover": "",
    color: e.loadingColor,
    type: e.loadingType,
    size: e.loadingSize,
    radius: e.loadingRadius
  }, null, 8, ["class", "color", "type", "size", "radius"])) : x("v-if", !0), z(
    "div",
    {
      class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  ), Q(a, {
    hovering: e.hovering
  }, null, 8, ["hovering"])], 46, Uc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var pu = ee({
  name: "VarButton",
  components: {
    VarLoading: dn,
    VarHoverOverlay: Pr
  },
  directives: {
    Ripple: Xe,
    Hover: Rr
  },
  props: Dc,
  setup(e) {
    var r = P(!1), {
      buttonGroup: n
    } = zc(), {
      hovering: a,
      handleHovering: t
    } = vn(), o = U(() => {
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
      n: Lc,
      classes: Rc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
pu.render = Yc;
const vr = pu;
te(vr);
var ak = vr, Hc = {
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
  n: Fc,
  classes: jc
} = re("back-top");
function Wc(e, r) {
  var n = le("var-icon"), a = le("var-button");
  return h(), we(pn, {
    to: "body",
    disabled: e.disabled
  }, [z(
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
var hu = ee({
  name: "VarBackTop",
  components: {
    VarButton: vr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Hc,
  setup(e) {
    var r = P(!1), n = P(null), a = P(!0), t, o = (d) => {
      S(e.onClick, d);
      var v = Ei(t);
      ha(t, {
        left: v,
        duration: e.duration,
        animation: $s
      });
    }, l = Ii(() => {
      r.value = pa(t) >= ze(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Ps(e.target, "BackTop") : sn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return ao(() => {
      i(), s(), a.value = !1;
    }), mn(s), uo(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: be,
      n: Fc,
      classes: jc,
      handleClick: o
    };
  }
});
hu.render = Wc;
const Ca = hu;
te(Ca);
var tk = Ca;
function Gc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function qc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Xc = {
  type: {
    type: String,
    default: "default",
    validator: Gc
  },
  position: {
    type: String,
    default: "right-top",
    validator: qc
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
  n: Kc,
  classes: Zc
} = re("badge");
function Jc(e, r) {
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
      default: ce(() => [$e(z(
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
      ), [[Gr, !e.hidden]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"])],
    2
    /* CLASS */
  );
}
var gu = ee({
  name: "VarBadge",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Xc,
  setup(e) {
    var r = U(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && R(n) > R(a) ? a + "+" : n;
    });
    return {
      n: Kc,
      classes: Zc,
      value: r
    };
  }
});
gu.render = Jc;
const Yn = gu;
te(Yn);
var ok = Yn, Qc = {
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
}, yu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function _c() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(yu);
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
  n: xc,
  classes: em
} = re("bottom-navigation"), {
  n: mo
} = re("bottom-navigation-item"), bl = mo("--right-half-space"), wl = mo("--left-half-space"), Cl = mo("--right-space"), rm = {
  type: "primary"
};
function nm(e, r) {
  var n = le("var-button");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
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
var bu = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: vr
  },
  props: Qc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(null), t = U(() => e.active), o = U(() => e.activeColor), l = U(() => e.inactiveColor), i = P({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = _c(), v = () => {
      s.value === 0 || f() || m() || b();
    }, f = () => u.find((p) => {
      var {
        name: y
      } = p;
      return t.value === y.value;
    }), m = () => u.find((p) => {
      var {
        index: y
      } = p;
      return t.value === y.value;
    }), b = () => {
      nr(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > s.value - 1 && S(e["onUpdate:active"], s.value - 1));
    }, w = (p) => {
      t.value !== p && (e.onBeforeChange ? g(p) : C(p));
    }, g = (p) => {
      var y = Ut(S(e.onBeforeChange, p));
      Promise.all(y).then((B) => {
        B.every(Boolean) && C(p);
      });
    }, C = (p) => {
      S(e["onUpdate:active"], p), S(e.onChange, p);
    }, O = () => {
      var p = M();
      p.forEach((y) => {
        y.classList.remove(bl, wl, Cl);
      });
    }, T = (p) => {
      var y = M(), B = y.length, V = p % 2 === 0;
      y.forEach((G, W) => {
        k(V, G, W, B);
      });
    }, k = (p, y, B, V) => {
      var G = B === V - 1;
      if (!p && G) {
        y.classList.add(Cl);
        return;
      }
      var W = B === V / 2 - 1, D = B === V / 2;
      W ? y.classList.add(bl) : D && y.classList.add(wl);
    }, M = () => Array.from(a.value.querySelectorAll("." + mo())), I = () => {
      S(e.onFabClick);
    }, N = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: w
    };
    return d(N), se(() => s.value, v), se(() => e.fabProps, (p) => {
      i.value = xo({}, rm, p);
    }, {
      immediate: !0,
      deep: !0
    }), or(() => {
      n.fab && T(s.value);
    }), wt(() => {
      O(), n.fab && T(s.value);
    }), {
      n: xc,
      classes: em,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: I,
      fabProps: i
    };
  }
});
bu.render = nm;
const Sa = bu;
te(Sa);
var ik = Sa, am = {
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
function tm() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(yu);
  return n || Tr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: om,
  classes: im
} = re("bottom-navigation-item"), lm = {
  type: "danger",
  dot: !0
};
function sm(e, r) {
  var n = le("var-icon"), a = le("var-badge"), t = Ae("ripple");
  return $e((h(), $(
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
    }), null, 16, ["class"])) : x("v-if", !0), z(
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
var wu = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Yn,
    VarIcon: Ne
  },
  directives: {
    Ripple: Xe
  },
  props: am,
  setup(e) {
    var r = U(() => e.name), n = U(() => e.badge), a = P({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = tm(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, b = (m = r.value) != null ? m : t.value;
      S(e.onClick, b), S(o.onToggle, b);
    };
    return l(d), se(() => n.value, (m) => {
      a.value = m === !0 ? lm : n.value;
    }, {
      immediate: !0
    }), {
      n: om,
      classes: im,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
wu.render = sm;
const ka = wu;
te(ka);
var lk = ka, um = {
  separator: {
    type: String
  },
  onClick: Y()
}, Cu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function dm() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Cu);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function vm() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Cu);
  return r || Tr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: fm,
  classes: cm
} = re("breadcrumb");
function mm(e, r) {
  return h(), $(
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
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : j(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [z(
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
var Su = ee({
  name: "VarBreadcrumb",
  props: um,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = vm(), t = U(() => r.value === n.length.value - 1), o = U(() => n.separator.value), l = (i) => {
      t.value || S(e.onClick, i);
    };
    return a(null), {
      n: fm,
      classes: cm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Su.render = mm;
const $a = Su;
te($a);
var sk = $a, pm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: hm
} = re("breadcrumbs");
function gm(e, r) {
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
var ku = ee({
  name: "VarBreadcrumbs",
  props: pm,
  setup(e) {
    var r = U(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = dm(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: hm
    };
  }
});
ku.render = gm;
const Ta = ku;
te(Ta);
var uk = Ta;
function ym(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function bm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function wm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Cm = {
  type: {
    type: String,
    default: "default",
    validator: ym
  },
  size: {
    type: String,
    default: "normal",
    validator: bm
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
    validator: wm
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
  n: Sm,
  classes: km
} = re("button-group");
function $m(e, r) {
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
var $u = ee({
  name: "VarButtonGroup",
  props: Cm,
  setup(e) {
    var {
      bindButtons: r
    } = Ac(), n = {
      elevation: U(() => e.elevation),
      type: U(() => e.type),
      size: U(() => e.size),
      color: U(() => e.color),
      textColor: U(() => e.textColor),
      mode: U(() => e.mode)
    };
    return r(n), {
      n: Sm,
      classes: km,
      formatElevation: pr
    };
  }
});
$u.render = $m;
const Pa = $u;
te(Pa);
var dk = Pa;
function Tm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Pm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Tm,
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
function Sl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function kl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Sl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Sl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Om,
  classes: Vm
} = re("card"), Mm = 500, Im = ["src", "alt"];
function Em(e, r) {
  var n = le("var-icon"), a = le("var-button"), t = Ae("ripple");
  return $e((h(), $(
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
    [z(
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
      [j(e.$slots, "image", {}, () => [e.src ? (h(), $("img", {
        key: 0,
        class: c(e.n("image")),
        style: K({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Im)) : x("v-if", !0)]), z(
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
            style: K({
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
          style: K({
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
    ), z(
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
var Tu = ee({
  name: "VarCard",
  directives: {
    Ripple: Xe
  },
  components: {
    VarIcon: Ne,
    VarButton: vr
  },
  props: Pm,
  setup(e) {
    var r = P(null), n = P(null), a = P("auto"), t = P("auto"), o = P("100%"), l = P("100%"), i = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), v = P("0px"), f = P("0"), m = U(() => e.layout === "row"), b = P(!1), w = P(!1), {
      zIndex: g
    } = $t(() => e.floating, 1);
    vo(() => e.floating, () => !m.value);
    var C = "auto", O = "auto", T = null, k = P(null), M = /* @__PURE__ */ function() {
      var y = kl(function* () {
        clearTimeout(k.value), clearTimeout(T), k.value = null, k.value = setTimeout(/* @__PURE__ */ kl(function* () {
          var {
            width: B,
            height: V,
            left: G,
            top: W
          } = Qe(r.value);
          a.value = be(B), t.value = be(V), o.value = a.value, l.value = t.value, i.value = be(W), s.value = be(G), u.value = "fixed", C = i.value, O = s.value, b.value = !0, yield Dr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", w.value = !0;
        }), e.ripple ? Mm : 0);
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), I = () => {
      clearTimeout(T), clearTimeout(k.value), k.value = null, o.value = a.value, l.value = t.value, i.value = C, s.value = O, v.value = "0px", f.value = "0", b.value = !1, T = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", C = "auto", O = "auto", d.value = "hidden", u.value = void 0, w.value = !1;
      }, e.floatingDuration);
    }, N = () => {
      S(e["onUpdate:floating"], !1);
    }, p = (y) => {
      S(e.onClick, y);
    };
    return se(() => e.floating, (y) => {
      m.value || Le(() => {
        y ? M() : I();
      });
    }, {
      immediate: !0
    }), {
      n: Om,
      classes: Vm,
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
      isRow: m,
      close: N,
      showFloatingButtons: b,
      floated: w,
      formatElevation: pr,
      handleClick: p
    };
  }
});
Tu.render = Em;
const Oa = Tu;
te(Oa);
var vk = Oa, Bm = {
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
  n: Nm,
  classes: Dm
} = re("cell");
function Am(e, r) {
  var n = le("var-icon"), a = Ae("ripple");
  return $e((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: K(e.borderOffsetStyles),
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
    )) : x("v-if", !0)]), z(
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
var Pu = ee({
  name: "VarCell",
  components: {
    VarIcon: Ne
  },
  directives: {
    Ripple: Xe
  },
  props: Bm,
  setup(e) {
    var r = U(() => e.borderOffset == null ? {} : {
      "--cell-border-left": be(e.borderOffset),
      "--cell-border-right": be(e.borderOffset)
    }), n = (a) => {
      S(e.onClick, a);
    };
    return {
      n: Nm,
      classes: Dm,
      toSizeUnit: be,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Pu.render = Am;
const Hn = Pu;
te(Hn);
var fk = Hn, zm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Lm
} = re("form-details"), Rm = {
  key: 0
}, Um = {
  key: 0
};
function Ym(e, r) {
  return h(), we(Ue, {
    name: e.n()
  }, {
    default: ce(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), $(
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
        [Q(Ue, {
          name: e.n("message")
        }, {
          default: ce(() => [e.errorMessage ? (h(), $(
            "div",
            Rm,
            ie(e.errorMessage),
            1
            /* TEXT */
          )) : x("v-if", !0)]),
          _: 1
          /* STABLE */
        }, 8, ["name"])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.n("extra-message"))
        },
        [Q(Ue, {
          name: e.n("message")
        }, {
          default: ce(() => [j(e.$slots, "extra-message", {}, () => [e.extraMessage ? (h(), $(
            "div",
            Um,
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
var Ou = ee({
  name: "VarFormDetails",
  props: zm,
  setup: () => ({
    n: Lm
  })
});
Ou.render = Ym;
const ar = Ou;
te(ar);
var ck = ar, Hm = {
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
}, Vu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Fm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Vu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function jm() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(Vu);
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
var Mu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Mu), a = xn(), t = n ? (o) => {
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
function Wm() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Mu);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: Gm,
  classes: qm
} = re("checkbox");
function Xm(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ae("hover"), l = Ae("ripple");
  return h(), $(
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
      [$e((h(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
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
      }]]), z(
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
var Iu = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: Xe,
    Hover: Rr
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  props: Hm,
  setup(e) {
    var r = P(!1), n = U(() => r.value === e.checkedValue), a = U(() => e.checkedValue), t = P(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = jm(), {
      hovering: i,
      handleHovering: s
    } = vn(), {
      form: u,
      bindForm: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: b
    } = Or(), w = (p) => {
      Le(() => {
        var {
          validateTrigger: y,
          rules: B,
          modelValue: V
        } = e;
        f(y, p, B, V);
      });
    }, g = (p) => {
      r.value = p;
      var {
        checkedValue: y,
        onChange: B
      } = e;
      S(e["onUpdate:modelValue"], r.value), S(B, r.value), w("onChange"), p === y ? o == null || o.onChecked(y) : o == null || o.onUnchecked(y);
    }, C = (p) => {
      var {
        disabled: y,
        readonly: B,
        checkedValue: V,
        uncheckedValue: G,
        onClick: W
      } = e;
      if (!(u != null && u.disabled.value || y) && (S(W, p), !(u != null && u.readonly.value || B))) {
        t.value = !0;
        var D = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && D || g(n.value ? G : V);
      }
    }, O = (p) => {
      var {
        checkedValue: y,
        uncheckedValue: B
      } = e;
      r.value = p.includes(y) ? y : B;
    }, T = () => {
      t.value = !1;
    }, k = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), b();
    }, M = (p) => {
      var {
        checkedValue: y,
        uncheckedValue: B
      } = e, V = ![y, B].includes(p);
      V && (p = n.value ? B : y), g(p);
    }, I = () => m(e.rules, e.modelValue);
    se(() => e.modelValue, (p) => {
      r.value = p;
    }, {
      immediate: !0
    });
    var N = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: I,
      resetValidation: b,
      reset: k,
      resetWithAnimation: T
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
      n: Gm,
      classes: qm,
      handleClick: C,
      toggle: M,
      reset: k,
      validate: I,
      resetValidation: b
    };
  }
});
Iu.render = Xm;
const Fn = Iu;
te(Fn);
var mk = Fn;
function Km(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Zm = {
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
    validator: Km
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
  n: Jm,
  classes: Qm
} = re("checkbox-group");
function _m(e, r) {
  var n = le("var-form-details");
  return h(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
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
var Eu = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: ar
  },
  props: Zm,
  setup(e) {
    var r = U(() => e.max), n = U(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Fm(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), v = U(() => i.value), f = (N) => {
      Le(() => {
        var {
          validateTrigger: p,
          rules: y,
          modelValue: B
        } = e;
        s(p, N, y, B);
      });
    }, m = (N) => {
      S(e["onUpdate:modelValue"], N), S(e.onChange, N), f("onChange");
    }, b = (N) => {
      var {
        modelValue: p
      } = e;
      p.includes(N) || m([...p, N]);
    }, w = (N) => {
      var {
        modelValue: p
      } = e;
      p.includes(N) && m(p.filter((y) => y !== N));
    }, g = () => t.forEach((N) => {
      var {
        sync: p
      } = N;
      return p(e.modelValue);
    }), C = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, O = () => {
      var N = t.map((y) => {
        var {
          checkedValue: B
        } = y;
        return B.value;
      }), p = ol(N);
      return C(), S(e["onUpdate:modelValue"], p), p;
    }, T = () => {
      var N = t.filter((y) => {
        var {
          checked: B
        } = y;
        return !B.value;
      }).map((y) => {
        var {
          checkedValue: B
        } = y;
        return B.value;
      }), p = ol(N);
      return C(), S(e["onUpdate:modelValue"], p), p;
    }, k = () => {
      S(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    se(() => e.modelValue, g, {
      deep: !0
    }), se(() => a.value, g);
    var I = {
      max: r,
      checkedCount: n,
      onChecked: b,
      onUnchecked: w,
      validate: M,
      resetValidation: d,
      reset: k,
      errorMessage: v
    };
    return o(I), S(l, I), {
      errorMessage: i,
      n: Jm,
      classes: Qm,
      checkAll: O,
      inverseAll: T,
      reset: k,
      validate: M,
      resetValidation: d
    };
  }
});
Eu.render = _m;
const Va = Eu;
te(Va);
var pk = Va;
function xm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ep(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var rp = {
  type: {
    type: String,
    default: "default",
    validator: xm
  },
  size: {
    type: String,
    default: "normal",
    validator: ep
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: xe(Fs, "name"),
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
  n: Zr,
  classes: np
} = re("chip");
function ap(e, r) {
  var n = le("var-icon");
  return h(), we(Ue, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [z(
      "span",
      De({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [j(e.$slots, "left"), z(
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
var Bu = ee({
  name: "VarChip",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: rp,
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
      } = e, u = Zr(o ? "$--flex" : "$--inline-flex"), d = i ? Zr("plain") + " " + Zr("plain-" + l) : Zr("--" + l), v = s ? Zr("--round") : null;
      return [Zr("--" + t), u, d, v];
    }), a = (t) => {
      S(e.onClose, t);
    };
    return {
      n: Zr,
      classes: np,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Bu.render = ap;
const jn = Bu;
te(jn);
var hk = jn;
function tp(e) {
  return ["row", "column"].includes(e);
}
function op(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function ip(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var lp = {
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
    validator: tp
  },
  justify: {
    type: String,
    validator: op
  },
  align: {
    type: String,
    validator: ip
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
}, Nu = Symbol("ROW_BIND_COL_KEY");
function sp() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Nu);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function up() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Nu);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Bt,
  classes: dp
} = re("col");
function vp(e, r) {
  return h(), $(
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
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Du = ee({
  name: "VarCol",
  props: lp,
  setup(e) {
    var r = P({
      left: 0,
      right: 0
    }), n = U(() => R(e.span)), a = U(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = up(), l = {
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
          span: m
        } = d;
        Number(m) >= 0 && v.push(Bt("--span-" + u + "-" + m)), f && v.push(Bt("--offset-" + u + "-" + f));
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
      classes: dp,
      padding: r,
      toNumber: R,
      toSizeUnit: be,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: Xt
    };
  }
});
Du.render = vp;
const Ma = Du;
te(Ma);
var gk = Ma, Au = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function fp() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Au);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var cp = {
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
  n: mp
} = re("collapse");
function pp(e, r) {
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
var zu = ee({
  name: "VarCollapse",
  props: cp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = fp(), t = U(() => e.modelValue), o = U(() => e.offset), l = U(() => e.divider), i = U(() => e.elevation), s = () => !e.accordion && !Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (w, g) => s() ? g ? e.accordion ? w : [...e.modelValue, w] : e.accordion ? null : e.modelValue.filter((C) => C !== w) : null, d = (w, g) => {
      var C = u(w, g);
      S(e["onUpdate:modelValue"], C), S(e.onChange, C);
    }, v = () => {
      if (e.accordion)
        return n.find((g) => {
          var {
            name: C
          } = g;
          return e.modelValue === C.value;
        });
      var w = n.filter((g) => {
        var {
          name: C
        } = g;
        return C.value === void 0 ? !1 : e.modelValue.includes(C.value);
      });
      return w.length ? w : void 0;
    }, f = () => e.accordion ? n.find((w) => {
      var {
        index: g,
        name: C
      } = w;
      return C.value === void 0 && e.modelValue === g.value;
    }) : n.filter((w) => {
      var {
        index: g,
        name: C
      } = w;
      return C.value === void 0 && e.modelValue.includes(g.value);
    }), m = () => {
      if (s()) {
        var w = v() || f();
        if (e.accordion && !w || !e.accordion && !w.length) {
          n.forEach((g) => {
            g.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((g) => {
          var C = e.accordion ? w === g : w.includes(g);
          g.init(e.accordion, C);
        });
      }
    }, b = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(b), se(() => r.value, () => Le().then(m)), se(() => e.modelValue, () => Le().then(m)), {
      n: mp,
      divider: l
    };
  }
});
zu.render = pp;
const Ia = zu;
te(Ia);
var yk = Ia;
function hp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Au);
  return n || Tr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var gp = {
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
  n: yp,
  classes: bp
} = re("collapse-item");
function wp(e, r) {
  var n = le("var-icon");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: K("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
        [j(e.$slots, "title", {}, () => [ke(
          ie(e.title),
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
    ), $e(z(
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
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Gr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Lu = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ne
  },
  props: gp,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = hp(), t = !0, o = P(null), l = P(!1), i = P(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = U(() => e.name), b = (M, I) => {
      s.value === void 0 || M && Ve(s.value) || I === i.value || (i.value = I, w(!0));
    }, w = (M) => {
      e.disabled || M || f(e.name || r.value, !i.value);
    }, g = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: M
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = M + "px", t && so(() => {
            t && T();
          });
        });
      }));
    }, C = () => {
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
    }, T = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, k = {
      index: r,
      name: m,
      init: b
    };
    return a(k), se(i, (M) => {
      M ? g() : O();
    }), {
      n: yp,
      start: C,
      classes: bp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: w,
      contentEl: o,
      transitionend: T,
      formatElevation: pr
    };
  }
});
Lu.render = wp;
const Ea = Lu;
te(Ea);
var bk = Ea, Cp = {
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
  n: Sp
} = re("countdown"), ri = 1e3, ni = 60 * ri, ai = 60 * ni, $l = 24 * ai;
function kp(e, r) {
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
var Ru = ee({
  name: "VarCountdown",
  props: Cp,
  setup(e) {
    var r = P(""), n = P({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (b, w) => {
      var g = Object.values(w), C = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (C.forEach((k, M) => {
        b.includes(k) ? b = b.replace(k, Sn("" + g[M], 2, "0")) : g[M + 1] += g[M] * O[M];
      }), b.includes("S")) {
        var T = Sn("" + g[g.length - 1], 3, "0");
        b.includes("SSS") ? b = b.replace("SSS", T) : b.includes("SS") ? b = b.replace("SS", T.slice(0, 2)) : b = b.replace("S", T.slice(0, 1));
      }
      return b;
    }, u = (b) => {
      var w = Math.floor(b / $l), g = Math.floor(b % $l / ai), C = Math.floor(b % ai / ni), O = Math.floor(b % ni / ri), T = Math.floor(b % ri), k = {
        days: w,
        hours: g,
        minutes: C,
        seconds: O,
        milliseconds: T
      };
      n.value = k, S(e.onChange, n.value), r.value = s(e.format, k);
    }, d = () => {
      var {
        time: b,
        onEnd: w
      } = e, g = performance.now();
      if (a || (a = g + R(b)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        S(w);
        return;
      }
      t && (o = br(d));
    }, v = function(b) {
      b === void 0 && (b = !1), !(t && !b) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, vl(o);
    }, m = () => {
      a = 0, t = !1, vl(o), d();
    };
    return se(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), mn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), _n(() => {
      i = t, f();
    }), oo(f), {
      showTime: r,
      timeData: n,
      n: Sp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Ru.render = kp;
const Ba = Ru;
te(Ba);
var wk = Ba;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Nn = 9e15, yn = 1e9, ti = "0123456789abcdef", Jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", oi = {
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
}, Uu, Fr, ye = !0, po = "[DecimalError] ", fn = po + "Invalid argument: ", Yu = po + "Precision limit exceeded", Hu = po + "crypto unavailable", Fu = "[object Decimal]", tr = Math.floor, Je = Math.pow, $p = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Tp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Pp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ju = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Nr = 1e7, he = 7, Op = 9007199254740991, Vp = Jt.length - 1, ii = Qt.length - 1, J = { toStringTag: Fu };
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
    throw Error(fn + r);
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
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + he, a.rounding = 1, n = Mp(a, Ku(a, n)), a.precision = e, a.rounding = r, me(Fr == 2 || Fr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
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
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / go(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Wn(l, 1, o.times(r), new l(1), !0);
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
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / go(5, e)), t = Wn(o, 2, t, t, !0);
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
  if (ye = !1, i = v + m, l = tn(u, i), a = r ? _t(d, i + 10) : tn(e, i), s = Be(l, a, i, 1), Na(s.d, t = v, f))
    do
      if (i += 10, l = tn(u, i), a = r ? _t(d, i + 10) : tn(e, i), s = Be(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = me(s, v + 1, 0));
        break;
      }
    while (Na(s.d, t += 10, f));
  return ye = !0, me(s, v, f);
};
J.minus = J.sub = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, b = m.constructor;
  if (e = new b(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new b(NaN) : m.d ? e.s = -e.s : e = new b(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = b.precision, s = b.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new b(m);
    else
      return new b(s === 3 ? -0 : 0);
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
  return u[0] ? (e.d = u, e.e = ho(u, n), ye ? me(e, i, s) : e) : new b(s === 3 ? -0 : 0);
};
J.modulo = J.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? me(new a(n), a.precision, a.rounding) : (ye = !1, a.modulo == 9 ? (r = Be(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Be(n, e, 0, a.modulo, 1), r = r.times(e), ye = !0, n.minus(r));
};
J.naturalExponential = J.exp = function() {
  return li(this);
};
J.naturalLogarithm = J.ln = function() {
  return tn(this);
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
  return e.d = u, e.e = ho(u, a), ye ? me(e, i, s) : e;
};
J.precision = J.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(fn + e);
  return n.d ? (r = Wu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
J.round = function() {
  var e = this, r = e.constructor;
  return me(new r(e), e.e + 1, r.rounding);
};
J.sine = J.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + he, a.rounding = 1, n = Ep(a, Ku(a, n)), a.precision = e, a.rounding = r, me(Fr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
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
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Be(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, me(Fr == 2 || Fr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
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
  return r ? ++n : o.shift(), e.d = o, e.e = ho(o, n), ye ? me(e, v.precision, v.rounding) : e;
};
J.toBinary = function(e, r) {
  return Fi(this, 2, e, r);
};
J.toDecimalPlaces = J.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (mr(e, 0, yn), r === void 0 ? r = a.rounding : mr(r, 0, 8), me(n, e + n.e + 1, r));
};
J.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, !0) : (mr(e, 0, yn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = me(new t(a), e + 1, r), n = Ur(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
J.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Ur(t) : (mr(e, 0, yn), r === void 0 ? r = o.rounding : mr(r, 0, 8), a = me(new o(t), e + t.e + 1, r), n = Ur(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
J.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, b = m.d, w = m.constructor;
  if (!b)
    return new w(m);
  if (u = n = new w(1), a = s = new w(0), r = new w(a), o = r.e = Wu(b) - m.e - 1, l = o % he, r.d[0] = Je(10, l < 0 ? he + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new w(e), !i.isInt() || i.lt(u))
      throw Error(fn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (ye = !1, i = new w(rr(b)), d = w.precision, w.precision = o = b.length * he * 2; v = Be(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Be(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Be(u, a, o, 1).minus(m).abs().cmp(Be(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], w.precision = d, ye = !0, f;
};
J.toHexadecimal = J.toHex = function(e, r) {
  return Fi(this, 16, e, r);
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
  return e.d[0] ? (ye = !1, n = Be(n, e, 0, r, 1).times(e), ye = !0, me(n)) : (e.s = n.s, n = e), n;
};
J.toNumber = function() {
  return +this;
};
J.toOctal = function(e, r) {
  return Fi(this, 8, e, r);
};
J.toPower = J.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Je(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return me(i, a, o);
  if (r = tr(e.e / he), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= Op)
    return t = Gu(s, i, n, a), e.s < 0 ? new s(1).div(t) : me(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Je(+i, u), r = n == 0 || !isFinite(n) ? tr(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (ye = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = li(e.times(tn(i, a + n)), a), t.d && (t = me(t, a + 5, 1), Na(t.d, a, o) && (r = a + 10, t = me(li(e.times(tn(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = me(t, a + 1, 0)))), t.s = l, ye = !0, s.rounding = o, me(t, a, o));
};
J.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (mr(e, 1, yn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = me(new t(a), e, r), n = Ur(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
J.toSignificantDigits = J.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (mr(e, 1, yn), r === void 0 ? r = a.rounding : mr(r, 0, 8)), me(new a(n), e, r);
};
J.toString = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
J.truncated = J.trunc = function() {
  return me(new this.constructor(this), this.e + 1, 1);
};
J.valueOf = J.toJSON = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function rr(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = he - a.length, n && (o += Qr(n)), o += a;
    l = e[r], a = l + "", n = he - a.length, n && (o += Qr(n));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function mr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(fn + e);
}
function Na(e, r, n, a) {
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
function Mp(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / go(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Wn(e, 1, r.times(t), new e(1));
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
    var u, d, v, f, m, b, w, g, C, O, T, k, M, I, N, p, y, B, V, G, W = a.constructor, D = a.s == t.s ? 1 : -1, L = a.d, F = t.d;
    if (!L || !L[0] || !F || !F[0])
      return new W(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (L ? F && L[0] == F[0] : !F) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          L && L[0] == 0 || !F ? D * 0 : D / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Nr, m = he, d = tr(a.e / m) - tr(t.e / m)), V = F.length, y = L.length, C = new W(D), O = C.d = [], v = 0; F[v] == (L[v] || 0); v++)
      ;
    if (F[v] > (L[v] || 0) && d--, o == null ? (I = o = W.precision, l = W.rounding) : i ? I = o + (a.e - t.e) + 1 : I = o, I < 0)
      O.push(1), b = !0;
    else {
      if (I = I / m + 2 | 0, v = 0, V == 1) {
        for (f = 0, F = F[0], I++; (v < y || f) && I--; v++)
          N = f * s + (L[v] || 0), O[v] = N / F | 0, f = N % F | 0;
        b = f || v < y;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), L = e(L, f, s), V = F.length, y = L.length), p = V, T = L.slice(0, V), k = T.length; k < V; )
          T[k++] = 0;
        G = F.slice(), G.unshift(0), B = F[0], F[1] >= s / 2 && ++B;
        do
          f = 0, u = r(F, T, V, k), u < 0 ? (M = T[0], V != k && (M = M * s + (T[1] || 0)), f = M / B | 0, f > 1 ? (f >= s && (f = s - 1), w = e(F, f, s), g = w.length, k = T.length, u = r(w, T, g, k), u == 1 && (f--, n(w, V < g ? G : F, g, s))) : (f == 0 && (u = f = 1), w = F.slice()), g = w.length, g < k && w.unshift(0), n(T, w, k, s), u == -1 && (k = T.length, u = r(F, T, V, k), u < 1 && (f++, n(T, V < k ? G : F, k, s))), k = T.length) : u === 0 && (f++, T = [0]), O[v++] = f, u && T[0] ? T[k++] = L[p] || 0 : (T = [L[p]], k = 1);
        while ((p++ < y || T[0] !== void 0) && I--);
        b = T[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      C.e = d, Uu = b;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      C.e = v + d * m - 1, me(C, i ? o + C.e + 1 : o, l, b);
    }
    return C;
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
function Ur(e, r, n) {
  if (!e.isFinite())
    return Xu(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Qr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Qr(-t - 1) + o, n && (a = n - l) > 0 && (o += Qr(a))) : t >= l ? (o += Qr(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + Qr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += Qr(a))), o;
}
function ho(e, r) {
  var n = e[0];
  for (r *= he; n >= 10; n /= 10)
    r++;
  return r;
}
function _t(e, r, n) {
  if (r > Vp)
    throw ye = !0, n && (e.precision = n), Error(Yu);
  return me(new e(Jt), r, 1, !0);
}
function Br(e, r, n) {
  if (r > ii)
    throw Error(Yu);
  return me(new e(Qt), r, n, !0);
}
function Wu(e) {
  var r = e.length - 1, n = r * he + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      n--;
    for (r = e[0]; r >= 10; r /= 10)
      n++;
  }
  return n;
}
function Qr(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Gu(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / he + 4);
  for (ye = !1; ; ) {
    if (n % 2 && (o = o.times(r), Pl(o.d, l) && (t = !0)), n = tr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Pl(r.d, l);
  }
  return ye = !0, o;
}
function Tl(e) {
  return e.d[e.d.length - 1] & 1;
}
function qu(e, r, n) {
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
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, b = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (ye = !1, s = b) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Je(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = me(o.times(e), s, 1), n = n.times(++d), i = l.plus(Be(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = me(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && Na(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return me(l, f.precision = b, m, ye = !0);
      else
        return f.precision = b, l;
    }
    l = i;
  }
}
function tn(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, b = 10, w = e, g = w.d, C = w.constructor, O = C.rounding, T = C.precision;
  if (w.s < 0 || !g || !g[0] || !w.e && g[0] == 1 && g.length == 1)
    return new C(g && !g[0] ? -1 / 0 : w.s != 1 ? NaN : g ? 0 : w);
  if (r == null ? (ye = !1, d = T) : d = r, C.precision = d += b, n = rr(g), a = n.charAt(0), Math.abs(o = w.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      w = w.times(e), n = rr(w.d), a = n.charAt(0), m++;
    o = w.e, a > 1 ? (w = new C("0." + n), o++) : w = new C(a + "." + n.slice(1));
  } else
    return u = _t(C, d + 2, T).times(o + ""), w = tn(new C(a + "." + n.slice(1)), d - b).plus(u), C.precision = T, r == null ? me(w, T, O, ye = !0) : w;
  for (v = w, s = l = w = Be(w.minus(1), w.plus(1), d, 1), f = me(w.times(w), d, 1), t = 3; ; ) {
    if (l = me(l.times(f), d, 1), u = s.plus(Be(l, new C(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(_t(C, d + 2, T).times(o + ""))), s = Be(s, new C(m), d, 1), r == null)
        if (Na(s.d, d - b, O, i))
          C.precision = d += b, u = l = w = Be(v.minus(1), v.plus(1), d, 1), f = me(w.times(w), d, 1), t = i = 1;
        else
          return me(s, C.precision = T, O, ye = !0);
      else
        return C.precision = T, s;
    s = u, t += 2;
  }
}
function Xu(e) {
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
function Ip(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), ju.test(r))
      return si(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Tp.test(r))
    n = 16, r = r.toLowerCase();
  else if ($p.test(r))
    n = 2;
  else if (Pp.test(r))
    n = 8;
  else
    throw Error(fn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Gu(a, new a(n), o, o * 2)), u = Yt(r, n, Nr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = ho(u, d), e.d = u, ye = !1, l && (e = Be(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : on.pow(2, s))), ye = !0, e);
}
function Ep(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Wn(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / go(5, n)), r = Wn(e, 2, r, r);
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
function go(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Ku(e, r) {
  var n, a = r.s < 0, t = Br(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Fr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    Fr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return Fr = Tl(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    Fr = Tl(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Fi(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, b = n !== void 0;
  if (b ? (mr(n, 1, yn), a === void 0 ? a = m.rounding : mr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Xu(e);
  else {
    for (d = Ur(e), l = d.indexOf("."), b ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Yt(Ur(f), 10, t), f.e = f.d.length), v = Yt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = b ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Be(e, f, n, a, 0, t), v = e.d, o = e.e, u = Uu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ti.charAt(v[l]);
      if (b) {
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
function Pl(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Bp(e) {
  return new this(e).abs();
}
function Np(e) {
  return new this(e).acos();
}
function Dp(e) {
  return new this(e).acosh();
}
function Ap(e, r) {
  return new this(e).plus(r);
}
function zp(e) {
  return new this(e).asin();
}
function Lp(e) {
  return new this(e).asinh();
}
function Rp(e) {
  return new this(e).atan();
}
function Up(e) {
  return new this(e).atanh();
}
function Yp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Br(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Br(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Br(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Be(e, r, o, 1)), r = Br(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Be(e, r, o, 1)), n;
}
function Hp(e) {
  return new this(e).cbrt();
}
function Fp(e) {
  return me(e = new this(e), e.e + 1, 2);
}
function jp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Wp(e) {
  if (!e || typeof e != "object")
    throw Error(po + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    yn,
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
        throw Error(fn + n + ": " + a);
  if (n = "crypto", t && (this[n] = oi[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Hu);
      else
        this[n] = !1;
    else
      throw Error(fn + n + ": " + a);
  return this;
}
function Gp(e) {
  return new this(e).cos();
}
function qp(e) {
  return new this(e).cosh();
}
function Zu(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Ol(o)) {
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
      throw Error(fn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), ju.test(o) ? si(u, o) : Ip(u, o);
  }
  if (t.prototype = J, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Wp, t.clone = Zu, t.isDecimal = Ol, t.abs = Bp, t.acos = Np, t.acosh = Dp, t.add = Ap, t.asin = zp, t.asinh = Lp, t.atan = Rp, t.atanh = Up, t.atan2 = Yp, t.cbrt = Hp, t.ceil = Fp, t.clamp = jp, t.cos = Gp, t.cosh = qp, t.div = Xp, t.exp = Kp, t.floor = Zp, t.hypot = Jp, t.ln = Qp, t.log = _p, t.log10 = eh, t.log2 = xp, t.max = rh, t.min = nh, t.mod = ah, t.mul = th, t.pow = oh, t.random = ih, t.round = lh, t.sign = sh, t.sin = uh, t.sinh = dh, t.sqrt = vh, t.sub = fh, t.sum = ch, t.tan = mh, t.tanh = ph, t.trunc = hh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Xp(e, r) {
  return new this(e).div(r);
}
function Kp(e) {
  return new this(e).exp();
}
function Zp(e) {
  return me(e = new this(e), e.e + 1, 3);
}
function Jp() {
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
function Ol(e) {
  return e instanceof on || e && e.toStringTag === Fu || !1;
}
function Qp(e) {
  return new this(e).ln();
}
function _p(e, r) {
  return new this(e).log(r);
}
function xp(e) {
  return new this(e).log(2);
}
function eh(e) {
  return new this(e).log(10);
}
function rh() {
  return qu(this, arguments, "lt");
}
function nh() {
  return qu(this, arguments, "gt");
}
function ah(e, r) {
  return new this(e).mod(r);
}
function th(e, r) {
  return new this(e).mul(r);
}
function oh(e, r) {
  return new this(e).pow(r);
}
function ih(e) {
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
      throw Error(Hu);
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
function lh(e) {
  return me(e = new this(e), e.e + 1, this.rounding);
}
function sh(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function uh(e) {
  return new this(e).sin();
}
function dh(e) {
  return new this(e).sinh();
}
function vh(e) {
  return new this(e).sqrt();
}
function fh(e, r) {
  return new this(e).sub(r);
}
function ch() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (ye = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return ye = !0, me(n, this.precision, this.rounding);
}
function mh(e) {
  return new this(e).tan();
}
function ph(e) {
  return new this(e).tanh();
}
function hh(e) {
  return me(e = new this(e), e.e + 1, 1);
}
J[Symbol.for("nodejs.util.inspect.custom")] = J.toString;
J[Symbol.toStringTag] = "Decimal";
var on = J.constructor = Zu(oi);
Jt = new on(Jt);
Qt = new on(Qt);
var gh = {
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
  n: yh,
  classes: bh
} = re("counter"), Vl = 100, Ml = 600, wh = ["inputmode", "readonly", "disabled"];
function Ch(e, r) {
  var n = le("var-icon"), a = le("var-button"), t = le("var-form-details");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
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
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), $e(z("input", {
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
      }, null, 46, wh), [[Kv, e.inputValue]]), Q(a, {
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
var Ju = ee({
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
  props: gh,
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
    } = a ?? {}, d, v, f, m, b = () => l(e.rules, e.modelValue), w = (F) => {
      Le(() => {
        var {
          validateTrigger: q,
          rules: ne,
          modelValue: E
        } = e;
        o(q, F, ne, E);
      });
    }, g = () => {
      var {
        min: F
      } = e;
      S(e["onUpdate:modelValue"], F != null ? R(F) : 0), i();
    }, C = {
      reset: g,
      validate: b,
      resetValidation: i
    }, O = U(() => {
      var {
        max: F,
        modelValue: q
      } = e;
      return F != null && R(q) >= R(F);
    }), T = U(() => {
      var {
        min: F,
        modelValue: q
      } = e;
      return F != null && R(q) <= R(F);
    }), k = (F) => {
      var {
        decimalLength: q,
        max: ne,
        min: E
      } = e, A = R(F);
      return ne != null && A > R(ne) && (A = R(ne)), E != null && A < R(E) && (A = R(E)), F = String(A), q != null && (F = A.toFixed(R(q))), F;
    }, M = (F) => {
      var {
        lazyChange: q,
        onBeforeChange: ne
      } = e, {
        value: E
      } = F.target, A = k(E);
      q ? S(ne, R(A), L) : D(A), w("onInputChange");
    }, I = () => {
      var {
        disabled: F,
        readonly: q,
        disableDecrement: ne,
        decrementButton: E,
        lazyChange: A,
        step: X,
        modelValue: ae,
        onDecrement: H,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || q || ne || !E) && !T.value) {
        var _ = new on(R(ae)).minus(new on(R(X))).toString(), fe = k(_), Se = R(fe);
        S(H, Se), A ? S(Z, Se, L) : (D(fe), w("onDecrement"));
      }
    }, N = () => {
      var {
        disabled: F,
        readonly: q,
        disableIncrement: ne,
        incrementButton: E,
        lazyChange: A,
        step: X,
        modelValue: ae,
        onIncrement: H,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || q || ne || !E) && !O.value) {
        var _ = new on(R(ae)).plus(new on(R(X))).toString(), fe = k(_), Se = R(fe);
        S(H, Se), A ? S(Z, Se, L) : (D(fe), w("onIncrement"));
      }
    }, p = () => {
      var {
        press: F,
        lazyChange: q
      } = e;
      !F || q || (m = window.setTimeout(() => {
        W();
      }, Ml));
    }, y = () => {
      var {
        press: F,
        lazyChange: q
      } = e;
      !F || q || (f = window.setTimeout(() => {
        G();
      }, Ml));
    }, B = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, V = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, G = () => {
      d = window.setTimeout(() => {
        N(), G();
      }, Vl);
    }, W = () => {
      v = window.setTimeout(() => {
        I(), W();
      }, Vl);
    }, D = (F) => {
      r.value = F;
      var q = R(F);
      S(e["onUpdate:modelValue"], q);
    }, L = (F) => {
      D(k(String(F))), w("onLazyChange");
    };
    return S(n, C), se(() => e.modelValue, (F) => {
      D(k(String(F))), S(e.onChange, R(F));
    }), D(k(String(e.modelValue))), {
      n: yh,
      classes: bh,
      formatElevation: pr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: T,
      validate: b,
      reset: g,
      resetValidation: i,
      handleChange: M,
      decrement: I,
      increment: N,
      pressDecrement: p,
      pressIncrement: y,
      releaseDecrement: B,
      releaseIncrement: V,
      toSizeUnit: be,
      toNumber: R
    };
  }
});
Ju.render = Ch;
const Da = Ju;
te(Da);
var Ck = Da, Qu = 60, _u = Qu * 60, xu = _u * 24, Sh = xu * 7, Gn = 1e3, Mo = Qu * Gn, Il = _u * Gn, kh = xu * Gn, $h = Sh * Gn, ji = "millisecond", Dn = "second", An = "minute", zn = "hour", _r = "day", Ht = "week", Er = "month", ed = "quarter", xr = "year", Ln = "date", Th = "YYYY-MM-DDTHH:mm:ssZ", El = "Invalid Date", Ph = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Oh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Vh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ui = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, Mh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + ui(t, 2, "0") + ":" + ui(o, 2, "0");
}, Ih = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Er), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Er);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, Eh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, Bh = function(r) {
  var n = {
    M: Er,
    y: xr,
    w: Ht,
    d: _r,
    D: Ln,
    h: zn,
    m: An,
    s: Dn,
    ms: ji,
    Q: ed
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Nh = function(r) {
  return r === void 0;
};
const Dh = {
  s: ui,
  z: Mh,
  m: Ih,
  a: Eh,
  p: Bh,
  u: Nh
};
var ua = "en", Cn = {};
Cn[ua] = Vh;
var Wi = function(r) {
  return r instanceof yo;
}, xt = function e(r, n, a) {
  var t;
  if (!r)
    return ua;
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
  return !a && t && (ua = t), t || !a && ua;
}, de = function(r, n) {
  if (Wi(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new yo(a);
}, Ah = function(r, n) {
  return de(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ee = Dh;
Ee.l = xt;
Ee.i = Wi;
Ee.w = Ah;
var zh = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ee.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(Ph);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, yo = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = xt(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = zh(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Ee;
  }, r.isValid = function() {
    return this.$d.toString() !== El;
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
      return l ? T : T.endOf(_r);
    }, u = function(C, O) {
      var T = [0, 0, 0, 0], k = [23, 59, 59, 999];
      return Ee.w(o.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? T : k).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case xr:
        return l ? s(1, 0) : s(31, 11);
      case Er:
        return l ? s(1, v) : s(0, v + 1);
      case Ht: {
        var b = this.$locale().weekStart || 0, w = (d < b ? d + 7 : d) - b;
        return s(l ? f - w : f + (6 - w), v);
      }
      case _r:
      case Ln:
        return u(m + "Hours", 0);
      case zn:
        return u(m + "Minutes", 1);
      case An:
        return u(m + "Seconds", 2);
      case Dn:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Ee.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[_r] = i + "Date", o[Ln] = i + "Date", o[Er] = i + "Month", o[xr] = i + "FullYear", o[zn] = i + "Hours", o[An] = i + "Minutes", o[Dn] = i + "Seconds", o[ji] = i + "Milliseconds", o)[l], u = l === _r ? this.$D + (t - this.$W) : t;
    if (l === Er || l === xr) {
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
      var m = de(o);
      return Ee.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Er)
      return this.set(Er, this.$M + a);
    if (i === xr)
      return this.set(xr, this.$y + a);
    if (i === _r)
      return s(1);
    if (i === Ht)
      return s(7);
    var u = (l = {}, l[An] = Mo, l[zn] = Il, l[Dn] = Gn, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Ee.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || El;
    var l = a || Th, i = Ee.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, b = function(T, k, M, I) {
      return T && (T[k] || T(t, l)) || M[k].slice(0, I);
    }, w = function(T) {
      return Ee.s(s % 12 || 12, T, "0");
    }, g = m || function(O, T, k) {
      var M = O < 12 ? "AM" : "PM";
      return k ? M.toLowerCase() : M;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ee.s(d + 1, 2, "0"),
      MMM: b(o.monthsShort, d, f, 3),
      MMMM: b(f, d),
      D: this.$D,
      DD: Ee.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: b(o.weekdaysMin, this.$W, v, 2),
      ddd: b(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Ee.s(s, 2, "0"),
      h: w(1),
      hh: w(2),
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
    return l.replace(Oh, function(O, T) {
      return T || C[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Ee.p(t), s = de(a), u = (s.utcOffset() - this.utcOffset()) * Mo, d = this - s, v = Ee.m(this, s);
    return v = (l = {}, l[xr] = v / 12, l[Er] = v, l[ed] = v / 3, l[Ht] = (d - u) / $h, l[_r] = (d - u) / kh, l[zn] = d / Il, l[An] = d / Mo, l[Dn] = d / Gn, l)[i] || d, o ? v : Ee.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Er).$D;
  }, r.$locale = function() {
    return Cn[this.$L];
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
}(), rd = yo.prototype;
de.prototype = rd;
[["$ms", ji], ["$s", Dn], ["$m", An], ["$H", zn], ["$W", _r], ["$M", Er], ["$y", xr], ["$D", Ln]].forEach(function(e) {
  rd[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
de.extend = function(e, r) {
  return e.$i || (e(r, yo, de), e.$i = !0), de;
};
de.locale = xt;
de.isDayjs = Wi;
de.unix = function(e) {
  return de(e * 1e3);
};
de.en = Cn[ua];
de.Ls = Cn;
de.p = {};
const nd = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, ad = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Lh(e) {
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
}], la = [{
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
}], Rh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Lh
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
  n: Uh
} = re("picker-header");
function Yh(e, r) {
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
    }, 8, ["disabled"]), z(
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
var td = ee({
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
    } = r, a = P(!1), t = P(0), o = U(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return R(v) + t.value;
      var f = (i = _e.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return _e.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return se(() => e.date, () => {
      t.value = 0;
    }), {
      n: Uh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
td.render = Yh;
const od = td;
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
de.extend(nd);
de.extend(ad);
var {
  n: Nt,
  classes: Hh
} = re("month-picker"), {
  n: Dt
} = re("date-picker");
function Fh(e, r) {
  var n = le("panel-header"), a = le("var-button");
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [z(
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
var id = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: od
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
    }), u = U(() => e.choose.chooseYear === e.preview.previewYear), d = U(() => e.preview.previewYear === a), v = (O) => {
      var T, k;
      return (T = (k = _e.value.datePickerMonthDict) == null ? void 0 : k[O].abbr) != null ? T : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: T
        },
        componentProps: {
          min: k,
          max: M
        }
      } = e, I = !0, N = !0, p = T + "-" + O;
      return M && (I = de(p).isSameOrBefore(de(M), "month")), k && (N = de(p).isSameOrAfter(de(k), "month")), I && N;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: T,
          chooseDays: k,
          chooseRangeMonth: M
        },
        componentProps: {
          type: I,
          range: N
        }
      } = e;
      if (N) {
        if (!M.length)
          return !1;
        var p = de(O).isSameOrBefore(de(M[1]), "month"), y = de(O).isSameOrAfter(de(M[0]), "month");
        return p && y;
      }
      return I === "month" ? T.includes(O) : k.some((B) => B.includes(O));
    }, b = (O) => {
      var {
        choose: {
          chooseMonth: T
        },
        preview: {
          previewYear: k
        },
        componentProps: {
          allowedDates: M,
          color: I,
          multiple: N,
          range: p
        }
      } = e, y = k + "-" + O, B = () => p || N ? m(y) : (T == null ? void 0 : T.index) === O && u.value, V = () => f(O) ? M ? !M(y) : !1 : !0, G = V(), W = () => G ? !0 : p || N ? !m(y) : !u.value || (T == null ? void 0 : T.index) !== O, D = () => d.value && t === O && e.componentProps.showCurrent ? (p || N || u.value) && G ? !0 : p || N ? !m(y) : u.value ? (T == null ? void 0 : T.index) !== t : !0 : !1, L = () => G ? "" : D() ? I ?? "" : B() ? "" : Dt() + "-color-cover", F = L().startsWith(Dt());
      return {
        outline: D(),
        text: W(),
        color: W() ? "" : I,
        textColor: F ? "" : L(),
        [Dt() + "-color-cover"]: F,
        class: Hh(Nt("button"), [G, Nt("button--disabled")]),
        disabled: G
      };
    }, w = (O, T) => {
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
      k && (s.right = !de("" + (R(O) + 1)).isSameOrBefore(de(k), "year")), T && (s.left = !de("" + (R(O) - 1)).isSameOrAfter(de(T), "year"));
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
      buttonProps: b,
      getMonthAbbr: v,
      chooseMonth: w,
      checkDate: g
    };
  }
});
id.render = Fh;
const jh = id;
var {
  n: Bl,
  classes: Wh
} = re("year-picker"), Gh = ["onClick"];
function qh(e, r) {
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
        style: K({
          color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(n)
      }, ie(n), 15, Gh))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var ld = ee({
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
        var d = de(i).format("YYYY-MM-D"), v = R(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = de(s).format("YYYY-MM-D"), m = R(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var b = u[0]; b >= u[1]; b--)
        o.push(b);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return or(() => {
      var o = document.querySelector("." + Bl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Bl,
      classes: Wh,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
ld.render = qh;
const Xh = ld;
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
de.extend(nd);
de.extend(ad);
var {
  n: Bn,
  classes: Kh
} = re("day-picker"), {
  n: At
} = re("date-picker");
function Zh(e, r) {
  var n = le("panel-header"), a = le("var-button");
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [z(
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
        }, [z(
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
        ), z(
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
var sd = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: od
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
    }), v = U(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = U(() => {
      var p;
      return e.choose.chooseYear === e.preview.previewYear && ((p = e.choose.chooseMonth) == null ? void 0 : p.index) === e.preview.previewMonth.index;
    }), m = U(() => {
      var p = la.findIndex((y) => y.index === e.componentProps.firstDayOfWeek);
      return p === -1 || p === 0 ? la : la.slice(p).concat(la.slice(0, p));
    }), b = (p) => {
      var y, B;
      return (y = (B = _e.value.datePickerWeekDict) == null ? void 0 : B[p].abbr) != null ? y : "";
    }, w = (p) => p > 0 ? p : "", g = () => {
      var {
        preview: {
          previewMonth: p,
          previewYear: y
        }
      } = e, B = de(y + "-" + p.index).daysInMonth(), V = de(y + "-" + p.index + "-01").day(), G = m.value.findIndex((W) => W.index === "" + V);
      l.value = [...Array(G).fill(-1), ...Array.from(Array(B + 1).keys())].filter((W) => W);
    }, C = () => {
      var {
        preview: {
          previewYear: p,
          previewMonth: y
        },
        componentProps: {
          max: B,
          min: V
        }
      } = e;
      if (B) {
        var G = p + "-" + (R(y.index) + 1);
        d.right = !de(G).isSameOrBefore(de(B), "month");
      }
      if (V) {
        var W = p + "-" + (R(y.index) - 1);
        d.left = !de(W).isSameOrAfter(de(V), "month");
      }
    }, O = (p) => {
      var {
        preview: {
          previewYear: y,
          previewMonth: B
        },
        componentProps: {
          min: V,
          max: G
        }
      } = e, W = !0, D = !0, L = y + "-" + B.index + "-" + p;
      return G && (W = de(L).isSameOrBefore(de(G), "day")), V && (D = de(L).isSameOrAfter(de(V), "day")), W && D;
    }, T = (p) => {
      var {
        choose: {
          chooseDays: y,
          chooseRangeDay: B
        },
        componentProps: {
          range: V
        }
      } = e;
      if (V) {
        if (!B.length)
          return !1;
        var G = de(p).isSameOrBefore(de(B[1]), "day"), W = de(p).isSameOrAfter(de(B[0]), "day");
        return G && W;
      }
      return y.includes(p);
    }, k = (p) => {
      if (p < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Bn("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: y
        },
        preview: {
          previewYear: B,
          previewMonth: V
        },
        componentProps: {
          allowedDates: G,
          color: W,
          multiple: D,
          range: L
        }
      } = e, F = B + "-" + V.index + "-" + p, q = () => L || D ? T(F) : R(y) === p && f.value, ne = () => O(p) ? G ? !G(F) : !1 : !0, E = ne(), A = () => E ? !0 : L || D ? !T(F) : !f.value || R(y) !== p, X = () => v.value && R(o) === p && e.componentProps.showCurrent ? (L || D || f.value) && E ? !0 : L || D ? !T(F) : f.value ? y !== o : !0 : !1, ae = () => E ? "" : X() ? W ?? "" : q() ? "" : At() + "-color-cover", H = ae().startsWith(At());
      return {
        text: A(),
        outline: X(),
        textColor: H ? "" : ae(),
        [At() + "-color-cover"]: H,
        class: Kh(Bn("button"), Bn("button--usable"), [E, Bn("button--disabled")]),
        disabled: E
      };
    }, M = (p) => {
      i.value = p === "prev", s.value += p === "prev" ? -1 : 1, n("check-preview", "month", p);
    }, I = (p, y) => {
      var B = y.currentTarget;
      B.classList.contains(Bn("button--disabled")) || n("choose-day", p);
    }, N = (p) => {
      u.value.checkDate(p);
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
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: N,
      filterDay: w,
      getDayAbbr: b,
      checkDate: M,
      chooseDay: I,
      buttonProps: k
    };
  }
});
sd.render = Zh;
const Jh = sd;
var {
  n: Qh,
  classes: _h
} = re("date-picker");
function xh(e, r) {
  var n = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [z(
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
      ), z(
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
var ud = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: jh,
    YearPickerPanel: Xh,
    DayPickerPanel: Jh
  },
  props: Rh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = de().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Ft.find((ue) => ue.index === i), u = P(!1), d = P(!1), v = P(!0), f = P(), m = P(), b = P(), w = P(s), g = P(l), C = P(!1), O = P([]), T = P([]), k = P([]), M = P([]), I = P(null), N = P(null), p = Re({
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
    }), y = U(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: b.value,
      chooseMonths: O.value,
      chooseDays: T.value,
      chooseRangeMonth: k.value,
      chooseRangeDay: M.value
    })), B = U(() => ({
      previewMonth: w.value,
      previewYear: g.value
    })), V = U(() => {
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
    }), G = U(() => {
      var ue, Ce, ge, Te, {
        multiple: Pe,
        range: Ye
      } = e;
      if (Ye) {
        var sr = M.value.map((Po) => de(Po).format("YYYY-MM-DD"));
        return sr.length ? sr[0] + " ~ " + sr[1] : "";
      }
      if (Pe)
        return "" + T.value.length + _e.value.datePickerSelected;
      if (!m.value || !f.value || !b.value)
        return "";
      var wr = de(m.value + "-" + f.value.index + "-" + b.value).day(), En = la.find((Po) => Po.index === "" + wr), nl = (ue = (Ce = _e.value.datePickerWeekDict) == null ? void 0 : Ce[En.index].name) != null ? ue : "", Yv = (ge = (Te = _e.value.datePickerMonthDict) == null ? void 0 : Te[f.value.index].name) != null ? ge : "", Hv = Sn(b.value, 2, "0");
      return _e.value.lang === "zh-CN" ? f.value.index + "-" + Hv + " " + nl.slice(0, 3) : nl.slice(0, 3) + ", " + Yv.slice(0, 3) + " " + b.value;
    }), W = U(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), D = U(() => !e.touchable || ["", "year"].includes(W.value)), L = U(() => {
      var ue, Ce, ge, Te, Pe = de(m.value + "-" + ((ue = f.value) == null ? void 0 : ue.index) + "-" + b.value).day(), Ye = b.value ? Sn(b.value, 2, "0") : "";
      return {
        week: "" + Pe,
        year: (Ce = m.value) != null ? Ce : "",
        month: (ge = (Te = f.value) == null ? void 0 : Te.index) != null ? ge : "",
        date: Ye
      };
    }), F = U(() => y.value.chooseRangeDay.map((ue) => de(ue).format("YYYY-MM-DD"))), q = U(() => m.value === g.value), ne = U(() => {
      var ue;
      return ((ue = f.value) == null ? void 0 : ue.index) === w.value.index;
    }), E = (ue) => {
      ue === "year" ? u.value = !0 : ue === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, A = (ue) => {
      if (!D.value) {
        var {
          clientX: Ce,
          clientY: ge
        } = ue.touches[0];
        r = Ce, n = ge;
      }
    }, X = (ue, Ce) => ue >= Ce && ue > 20 ? "x" : "y", ae = (ue) => {
      if (!D.value) {
        var {
          clientX: Ce,
          clientY: ge
        } = ue.touches[0], Te = Ce - r, Pe = ge - n;
        t = X(Math.abs(Te), Math.abs(Pe)), a = Te > 0 ? "prev" : "next";
      }
    }, H = () => {
      if (!(D.value || t !== "x")) {
        var ue = W.value === "month" ? I : N;
        so(() => {
          ue.value.forwardRef(a), Ge();
        });
      }
    }, Z = (ue, Ce) => {
      var ge = Ce === "month" ? k : M;
      if (ge.value = v.value ? [ue, ue] : [ge.value[0], ue], v.value = !v.value, v.value) {
        var Te = de(ge.value[0]).isAfter(ge.value[1]), Pe = Te ? [ge.value[1], ge.value[0]] : [...ge.value];
        S(e["onUpdate:modelValue"], Pe), S(e.onChange, Pe);
      }
    }, _ = (ue, Ce) => {
      var ge = Ce === "month" ? O : T, Te = Ce === "month" ? "YYYY-MM" : "YYYY-MM-DD", Pe = ge.value.map((sr) => de(sr).format(Te)), Ye = Pe.findIndex((sr) => sr === ue);
      Ye === -1 ? Pe.push(ue) : Pe.splice(Ye, 1), S(e["onUpdate:modelValue"], Pe), S(e.onChange, Pe);
    }, fe = (ue, Ce) => !m.value || !f.value ? !1 : q.value ? ue === "month" ? Ce.index < f.value.index : ne.value ? Ce < R(b.value) : f.value.index > w.value.index : m.value > g.value, Se = (ue) => {
      var {
        readonly: Ce,
        range: ge,
        multiple: Te,
        onChange: Pe,
        "onUpdate:modelValue": Ye
      } = e;
      if (!(ue < 0 || Ce)) {
        C.value = fe("day", ue);
        var sr = g.value + "-" + w.value.index + "-" + ue, wr = de(sr).format("YYYY-MM-DD");
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
        w.value = ue, S(sr, R(g.value), R(w.value.index));
      d.value = !1;
    }, oe = (ue) => {
      g.value = "" + ue, u.value = !1, d.value = !0, S(e.onPreview, R(g.value), R(w.value.index));
    }, ve = (ue, Ce) => {
      var ge = Ce === "prev" ? -1 : 1;
      if (ue === "year")
        g.value = "" + (R(g.value) + ge);
      else {
        var Te = R(w.value.index) + ge;
        Te < 1 && (g.value = "" + (R(g.value) - 1), Te = 12), Te > 12 && (g.value = "" + (R(g.value) + 1), Te = 1), w.value = Ft.find((Pe) => R(Pe.index) === Te);
      }
      S(e.onPreview, R(g.value), R(w.value.index));
    }, pe = () => (e.multiple || e.range) && !Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Oe = (ue) => Ve(ue) ? !1 : ue === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, je = (ue, Ce) => {
      var ge = Ce === "month" ? k : M, Te = Ce === "month" ? "YYYY-MM" : "YYYY-MM-D", Pe = ue.map((wr) => de(wr).format(Te)).slice(0, 2), Ye = ge.value.some((wr) => Oe(wr));
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
        f.value = Ye, m.value = ge, b.value = Pe, w.value = Ye, g.value = ge;
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
    }), se(W, Ge), {
      n: Qh,
      classes: _h,
      monthPanelEl: I,
      dayPanelEl: N,
      reverse: C,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: b,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: V,
      getDateTitle: G,
      getPanelType: W,
      getChoose: y,
      getPreview: B,
      componentProps: p,
      slotProps: L,
      formatRange: F,
      clickEl: E,
      handleTouchstart: A,
      handleTouchmove: ae,
      handleTouchend: H,
      getChooseDay: Se,
      getChooseMonth: Ie,
      getChooseYear: oe,
      checkPreview: ve,
      formatElevation: pr
    };
  }
});
ud.render = xh;
const Aa = ud;
te(Aa);
var Sk = Aa;
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
function eg(e) {
  return ["left", "center", "right"].includes(e);
}
var rg = fi({
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
    validator: eg
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
  n: ng,
  classes: ag
} = re("dialog");
function tg(e, r) {
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
    default: ce(() => [z(
      "div",
      De({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: ci({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [z(
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
      ), z(
        "div",
        {
          class: c(e.n("message")),
          style: K({
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
      ), z(
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
var dd = ee({
  name: "VarDialog",
  components: {
    VarPopup: Lr,
    VarButton: vr
  },
  inheritAttrs: !1,
  props: rg,
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
      n: ng,
      classes: ag,
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
dd.render = tg;
const Ot = dd;
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
var rn, ro = {};
function og(e) {
  return e === void 0 && (e = {}), Fe(e) ? eo({}, ro, {
    message: e
  }) : eo({}, ro, e);
}
function Xr(e) {
  return na() ? new Promise((r) => {
    Xr.close();
    var n = og(e), a = Re(n);
    a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = ta(Ot, a, {
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
        S(a.onClosed), t(), rn === a && (rn = null);
      },
      onRouteChange: () => {
        t(), rn === a && (rn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
Xr.setDefaultOptions = function(e) {
  ro = e;
};
Xr.resetDefaultOptions = function() {
  ro = {};
};
Xr.close = function() {
  if (rn != null) {
    var e = rn;
    rn = null, Le().then(() => {
      e.show = !1;
    });
  }
};
Xr.Component = Ot;
te(Ot);
te(Ot, Xr);
var kk = Ot, ig = {
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
  n: lg,
  classes: sg
} = re("divider");
function ug(e, r) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
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
var vd = ee({
  name: "VarDivider",
  props: ig,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(!1), t = U(() => {
      var {
        vertical: i,
        inset: s
      } = e;
      return !i && s === !0;
    }), o = U(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e;
      if (Ss(i) || s)
        return {
          margin: u
        };
      var d = R(i), v = Math.abs(d) + (i + "").replace(d + "", "");
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
      n: lg,
      classes: sg,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
vd.render = ug;
const za = vd;
te(za);
var $k = za, dg = {
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
function Nl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function vg(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Nl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Nl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: fg,
  classes: cg
} = re("drag");
function mg(e, r) {
  return h(), we(pn, {
    to: e.teleport
  }, [z(
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
var fd = ee({
  name: "VarDrag",
  inheritAttrs: !1,
  props: dg,
  setup(e, r) {
    var {
      attrs: n
    } = r, a = P(null), t = P(0), o = P(0), l = Re({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), i = P(!1), s = P(!1), u = P(!1), d = !1, v = 0, f = 0, m = null, b = (B) => {
      if (!e.disabled) {
        m && window.clearTimeout(m);
        var {
          clientX: V,
          clientY: G
        } = B.touches[0];
        C(), v = V, f = G, d = !0, u.value = !1;
      }
    }, w = /* @__PURE__ */ function() {
      var B = vg(function* (V) {
        if (!(!d || e.disabled)) {
          V.preventDefault(), s.value = !1, i.value = !0, u.value = !0;
          var {
            clientX: G,
            clientY: W
          } = V.touches[0], D = G - v, L = W - f;
          v = G, f = W, e.direction.includes("x") && (t.value += D), e.direction.includes("y") && (o.value += L), M();
        }
      });
      return function(G) {
        return B.apply(this, arguments);
      };
    }(), g = () => {
      e.disabled || (d = !1, s.value = !0, k(), m = window.setTimeout(() => {
        u.value = !1;
      }));
    }, C = () => {
      var {
        left: B,
        top: V
      } = O();
      t.value = B, o.value = V;
    }, O = () => {
      var B = Qe(a.value), V = Qe(window), G = B.top - V.top, W = V.bottom - B.bottom, D = B.left - V.left, L = V.right - B.right, {
        width: F,
        height: q
      } = B, {
        width: ne,
        height: E
      } = V;
      return {
        top: G,
        bottom: W,
        left: D,
        right: L,
        width: F,
        height: q,
        halfWidth: F / 2,
        halfHeight: q / 2,
        windowWidth: ne,
        windowHeight: E
      };
    }, T = () => {
      var B = O(), V = l.left, G = B.windowWidth - l.right - B.width, W = l.top, D = B.windowHeight - l.bottom - B.height;
      return {
        minX: V,
        minY: W,
        // fallback the drag element overflows boundary
        maxX: V < G ? G : V,
        maxY: W < D ? D : W
      };
    }, k = () => {
      if (e.attraction != null) {
        var {
          halfWidth: B,
          halfHeight: V,
          top: G,
          bottom: W,
          left: D,
          right: L
        } = O(), {
          minX: F,
          minY: q,
          maxX: ne,
          maxY: E
        } = T(), A = D + B - l.left, X = L + B - l.right, ae = G + V - l.top, H = W + V - l.bottom, Z = A <= X, _ = ae <= H;
        e.attraction.includes("x") && (t.value = Z ? F : ne), e.attraction.includes("y") && (o.value = _ ? q : E);
      }
    }, M = () => {
      var {
        minX: B,
        minY: V,
        maxX: G,
        maxY: W
      } = T();
      t.value = Rn(t.value, B, G), o.value = Rn(o.value, V, W);
    }, I = () => {
      var {
        top: B = 0,
        bottom: V = 0,
        left: G = 0,
        right: W = 0
      } = e.boundary;
      l.top = ze(B), l.bottom = ze(V), l.left = ze(G), l.right = ze(W);
    }, N = () => {
      var B, V = (B = n.style) != null ? B : {};
      return no({}, n, {
        style: no({}, V, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : V.top,
          left: i.value ? 0 : V.left,
          right: i.value ? "auto" : V.right,
          bottom: i.value ? "auto" : V.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : V.transform
        })
      });
    }, p = () => {
      i.value && (C(), M());
    }, y = () => {
      s.value = !1, i.value = !1, u.value = !1, t.value = 0, o.value = 0, d = !1, v = 0, f = 0;
    };
    return se(() => e.boundary, I), St(p), or(() => {
      I(), p();
    }), {
      drag: a,
      x: t,
      y: o,
      enableTransition: s,
      dragging: u,
      n: fg,
      classes: cg,
      getAttrs: N,
      handleTouchstart: b,
      handleTouchmove: w,
      handleTouchend: g,
      resize: p,
      reset: y
    };
  }
});
fd.render = mg;
const qn = fd;
te(qn);
var Tk = qn, pg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return pg[r];
  });
}
var jr = "top", cn = "bottom", kn = "right", ln = "left", bo = "auto", wo = [jr, cn, kn, ln], Co = "start", La = "end", hg = "clippingParents", cd = "viewport", oa = "popper", gg = "reference", Dl = /* @__PURE__ */ wo.reduce(function(e, r) {
  return e.concat([r + "-" + Co, r + "-" + La]);
}, []), md = /* @__PURE__ */ [].concat(wo, [bo]).reduce(function(e, r) {
  return e.concat([r, r + "-" + Co, r + "-" + La]);
}, []), yg = "beforeRead", bg = "read", wg = "afterRead", Cg = "beforeMain", Sg = "main", kg = "afterMain", $g = "beforeWrite", Tg = "write", Pg = "afterWrite", mi = [yg, bg, wg, Cg, Sg, kg, $g, Tg, Pg];
function Wr(e) {
  return e.split("-")[0];
}
var Og = {
  start: "end",
  end: "start"
};
function Al(e) {
  return e.replace(/start|end/g, function(r) {
    return Og[r];
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
function Gi(e) {
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
var da = Math.max, zl = Math.min, Xn = Math.round;
function pi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function pd() {
  return !/^((?!chrome|android).)*safari/i.test(pi());
}
function Kn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && Sr(e) && (t = e.offsetWidth > 0 && Xn(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Xn(a.height) / e.offsetHeight || 1);
  var l = $n(e) ? Mr(e) : window, i = l.visualViewport, s = !pd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function qi(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Xi(e) {
  return Kn(bn(e)).left + qi(e).scrollLeft;
}
function Vg(e, r) {
  var n = Mr(e), a = bn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = pd();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Xi(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function Mg(e) {
  var r, n = bn(e), a = qi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = da(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = da(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Xi(e), s = -a.scrollTop;
  return Ar(t || n).direction === "rtl" && (i += da(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Yr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function So(e) {
  return Yr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Gi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    bn(e)
  );
}
function Ki(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function hd(e) {
  return ["html", "body", "#document"].indexOf(Yr(e)) >= 0 ? e.ownerDocument.body : Sr(e) && Ki(e) ? e : hd(So(e));
}
function va(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = hd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], Ki(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(va(So(l)))
  );
}
function Ig(e) {
  return ["table", "td", "th"].indexOf(Yr(e)) >= 0;
}
function Ll(e) {
  return !Sr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function Eg(e) {
  var r = /firefox/i.test(pi()), n = /Trident/i.test(pi());
  if (n && Sr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = So(e);
  for (Gi(t) && (t = t.host); Sr(t) && ["html", "body"].indexOf(Yr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Zi(e) {
  for (var r = Mr(e), n = Ll(e); n && Ig(n) && Ar(n).position === "static"; )
    n = Ll(n);
  return n && (Yr(n) === "html" || Yr(n) === "body" && Ar(n).position === "static") ? r : n || Eg(e) || r;
}
function Bg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Gi(n)) {
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
function Ng(e, r) {
  var n = Kn(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Rl(e, r, n) {
  return r === cd ? hi(Vg(e, n)) : $n(r) ? Ng(r, n) : hi(Mg(bn(e)));
}
function Dg(e) {
  var r = va(So(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && Sr(e) ? Zi(e) : e;
  return $n(a) ? r.filter(function(t) {
    return $n(t) && Bg(t, a) && Yr(t) !== "body";
  }) : [];
}
function Ag(e, r, n, a) {
  var t = r === "clippingParents" ? Dg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Rl(e, u, a);
    return s.top = da(d.top, s.top), s.right = zl(d.right, s.right), s.bottom = zl(d.bottom, s.bottom), s.left = da(d.left, s.left), s;
  }, Rl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ra(e) {
  return e.split("-")[1];
}
function zg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Wr(a) : null, o = a ? Ra(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case jr:
      s = {
        x: l,
        y: r.y - n.height
      };
      break;
    case cn:
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
    case ln:
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
  var u = t ? zg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Co:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case La:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function Lg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Rg(e) {
  return Object.assign({}, Lg(), e);
}
function Ug(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function yd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? hg : i, u = n.rootBoundary, d = u === void 0 ? cd : u, v = n.elementContext, f = v === void 0 ? oa : v, m = n.altBoundary, b = m === void 0 ? !1 : m, w = n.padding, g = w === void 0 ? 0 : w, C = Rg(typeof g != "number" ? g : Ug(g, wo)), O = f === oa ? gg : oa, T = e.rects.popper, k = e.elements[b ? O : f], M = Ag($n(k) ? k : k.contextElement || bn(e.elements.popper), s, d, l), I = Kn(e.elements.reference), N = gd({
    reference: I,
    element: T,
    strategy: "absolute",
    placement: t
  }), p = hi(Object.assign({}, T, N)), y = f === oa ? p : I, B = {
    top: M.top - y.top + C.top,
    bottom: y.bottom - M.bottom + C.bottom,
    left: M.left - y.left + C.left,
    right: y.right - M.right + C.right
  }, V = e.modifiersData.offset;
  if (f === oa && V) {
    var G = V[t];
    Object.keys(B).forEach(function(W) {
      var D = [kn, cn].indexOf(W) >= 0 ? 1 : -1, L = [jr, cn].indexOf(W) >= 0 ? "y" : "x";
      B[W] += G[L] * D;
    });
  }
  return B;
}
function Yg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? md : s, d = Ra(a), v = d ? i ? Dl : Dl.filter(function(b) {
    return Ra(b) === d;
  }) : wo, f = v.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(b, w) {
    return b[w] = yd(e, {
      placement: w,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Wr(w)], b;
  }, {});
  return Object.keys(m).sort(function(b, w) {
    return m[b] - m[w];
  });
}
function Hg(e) {
  if (Wr(e) === bo)
    return [];
  var r = jt(e);
  return [Al(e), r, Al(r)];
}
function Fg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, b = m === void 0 ? !0 : m, w = n.allowedAutoPlacements, g = r.options.placement, C = Wr(g), O = C === g, T = s || (O || !b ? [jt(g)] : Hg(g)), k = [g].concat(T).reduce(function(Z, _) {
      return Z.concat(Wr(_) === bo ? Yg(r, {
        placement: _,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: w
      }) : _);
    }, []), M = r.rects.reference, I = r.rects.popper, N = /* @__PURE__ */ new Map(), p = !0, y = k[0], B = 0; B < k.length; B++) {
      var V = k[B], G = Wr(V), W = Ra(V) === Co, D = [jr, cn].indexOf(G) >= 0, L = D ? "width" : "height", F = yd(r, {
        placement: V,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), q = D ? W ? kn : ln : W ? cn : jr;
      M[L] > I[L] && (q = jt(q));
      var ne = jt(q), E = [];
      if (o && E.push(F[G] <= 0), i && E.push(F[q] <= 0, F[ne] <= 0), E.every(function(Z) {
        return Z;
      })) {
        y = V, p = !1;
        break;
      }
      N.set(V, E);
    }
    if (p)
      for (var A = b ? 3 : 1, X = function(_) {
        var fe = k.find(function(Se) {
          var Ie = N.get(Se);
          if (Ie)
            return Ie.slice(0, _).every(function(oe) {
              return oe;
            });
        });
        if (fe)
          return y = fe, "break";
      }, ae = A; ae > 0; ae--) {
        var H = X(ae);
        if (H === "break")
          break;
      }
    r.placement !== y && (r.modifiersData[a]._skip = !0, r.placement = y, r.reset = !0);
  }
}
const jg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Fg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Wg(e, r, n) {
  var a = Wr(e), t = [ln, jr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e
  })) : n, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [ln, kn].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Gg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = md.reduce(function(d, v) {
    return d[v] = Wg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const qg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Gg
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
    x: Xn(r * t) / t || 0,
    y: Xn(n * t) / t || 0
  };
}
function Ul(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, b = l.y, w = b === void 0 ? 0 : b, g = typeof d == "function" ? d({
    x: m,
    y: w
  }) : {
    x: m,
    y: w
  };
  m = g.x, w = g.y;
  var C = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), T = ln, k = jr, M = window;
  if (u) {
    var I = Zi(n), N = "clientHeight", p = "clientWidth";
    if (I === Mr(n) && (I = bn(n), Ar(I).position !== "static" && i === "absolute" && (N = "scrollHeight", p = "scrollWidth")), I = I, t === jr || (t === ln || t === kn) && o === La) {
      k = cn;
      var y = v && I === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[N]
      );
      w -= y - a.height, w *= s ? 1 : -1;
    }
    if (t === ln || (t === jr || t === cn) && o === La) {
      T = kn;
      var B = v && I === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[p]
      );
      m -= B - a.width, m *= s ? 1 : -1;
    }
  }
  var V = Object.assign({
    position: i
  }, u && Xg), G = d === !0 ? Kg({
    x: m,
    y: w
  }) : {
    x: m,
    y: w
  };
  if (m = G.x, w = G.y, s) {
    var W;
    return Object.assign({}, V, (W = {}, W[k] = O ? "0" : "", W[T] = C ? "0" : "", W.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + w + "px)" : "translate3d(" + m + "px, " + w + "px, 0)", W));
  }
  return Object.assign({}, V, (r = {}, r[k] = O ? w + "px" : "", r[T] = C ? m + "px" : "", r.transform = "", r));
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
    placement: Wr(r.placement),
    variation: Ra(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Ul(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Ul(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const bd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Zg,
  data: {}
};
function Jg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Qg(e) {
  return e === Mr(e) || !Sr(e) ? qi(e) : Jg(e);
}
function _g(e) {
  var r = e.getBoundingClientRect(), n = Xn(r.width) / e.offsetWidth || 1, a = Xn(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function xg(e, r, n) {
  n === void 0 && (n = !1);
  var a = Sr(r), t = Sr(r) && _g(r), o = bn(r), l = Kn(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Yr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ki(o)) && (i = Qg(r)), Sr(r) ? (s = Kn(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = Xi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function ey(e) {
  var r = Kn(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function ry(e) {
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
function ny(e) {
  var r = ry(e);
  return mi.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function ay(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e());
      });
    })), r;
  };
}
function Jr(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return [].concat(n).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var wn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', ty = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Yl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function oy(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Yl).filter(function(n, a, t) {
      return t.indexOf(n) === a;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof r.name != "string" && console.error(Jr(wn, String(r.name), '"name"', '"string"', '"' + String(r.name) + '"'));
          break;
        case "enabled":
          typeof r.enabled != "boolean" && console.error(Jr(wn, r.name, '"enabled"', '"boolean"', '"' + String(r.enabled) + '"'));
          break;
        case "phase":
          mi.indexOf(r.phase) < 0 && console.error(Jr(wn, r.name, '"phase"', "either " + mi.join(", "), '"' + String(r.phase) + '"'));
          break;
        case "fn":
          typeof r.fn != "function" && console.error(Jr(wn, r.name, '"fn"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "effect":
          r.effect != null && typeof r.effect != "function" && console.error(Jr(wn, r.name, '"effect"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "requires":
          r.requires != null && !Array.isArray(r.requires) && console.error(Jr(wn, r.name, '"requires"', '"array"', '"' + String(r.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(r.requiresIfExists) || console.error(Jr(wn, r.name, '"requiresIfExists"', '"array"', '"' + String(r.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Yl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Jr(ty, String(r.name), a, a));
      });
    });
  });
}
function iy(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function ly(e) {
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
var Hl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", sy = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Fl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function jl() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function uy(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Fl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Fl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(C) {
        var O = typeof C == "function" ? C(d.options) : C;
        w(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: $n(i) ? va(i) : i.contextElement ? va(i.contextElement) : [],
          popper: va(s)
        };
        var T = ny(ly([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = T.filter(function(V) {
          return V.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = iy([].concat(T, d.options.modifiers), function(V) {
            var G = V.name;
            return G;
          });
          if (oy(k), Wr(d.options.placement) === bo) {
            var M = d.orderedModifiers.find(function(V) {
              var G = V.name;
              return G === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var I = Ar(s), N = I.marginTop, p = I.marginRight, y = I.marginBottom, B = I.marginLeft;
          [N, p, y, B].some(function(V) {
            return parseFloat(V);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return b(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = d.elements, O = C.reference, T = C.popper;
          if (!jl(O, T)) {
            process.env.NODE_ENV !== "production" && console.error(Hl);
            return;
          }
          d.rects = {
            reference: xg(O, Zi(T), d.options.strategy === "fixed"),
            popper: ey(T)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(V) {
            return d.modifiersData[V.name] = Object.assign({}, V.data);
          });
          for (var k = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(sy);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var I = d.orderedModifiers[M], N = I.fn, p = I.options, y = p === void 0 ? {} : p, B = I.name;
            typeof N == "function" && (d = N({
              state: d,
              options: y,
              name: B,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ay(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        w(), f = !0;
      }
    };
    if (!jl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Hl), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function b() {
      d.orderedModifiers.forEach(function(g) {
        var C = g.name, O = g.options, T = O === void 0 ? {} : O, k = g.effect;
        if (typeof k == "function") {
          var M = k({
            state: d,
            name: C,
            instance: m,
            options: T
          }), I = function() {
          };
          v.push(M || I);
        }
      });
    }
    function w() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return m;
  };
}
var zt = {
  passive: !0
};
function dy(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, zt);
  }), i && s.addEventListener("resize", n.update, zt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, zt);
    }), i && s.removeEventListener("resize", n.update, zt);
  };
}
const vy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: dy,
  data: {}
};
function fy(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = gd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const cy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: fy,
  data: {}
};
function my(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !Sr(o) || !Yr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function py(e) {
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
      !Sr(t) || !Yr(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const hy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: my,
  effect: py,
  requires: ["computeStyles"]
};
var gy = [vy, cy, bd, hy], yy = /* @__PURE__ */ uy({
  defaultModifiers: gy
});
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
function Wl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Gl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Wl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Wl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function wd(e) {
  var r = P(null), n = P(null), a = P({
    width: 0,
    height: 0
  }), t = As(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(y, B) {
      B ? (I(), S(e.onOpen)) : S(e.onClose);
    }
  }), {
    zIndex: o
  } = $t(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: y,
      height: B
    } = aa(r.value);
    a.value = {
      width: ze(y),
      height: ze(B)
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
    e.trigger === "hover" && (s = !0, N());
  }, f = /* @__PURE__ */ function() {
    var y = Gl(function* () {
      e.trigger === "hover" && (s = !1, yield Dr(), !i && p());
    });
    return function() {
      return y.apply(this, arguments);
    };
  }(), m = () => {
    e.trigger === "hover" && (i = !0);
  }, b = /* @__PURE__ */ function() {
    var y = Gl(function* () {
      e.trigger === "hover" && (i = !1, yield Dr(), !s && p());
    });
    return function() {
      return y.apply(this, arguments);
    };
  }(), w = () => {
    e.closeOnClickReference && t.value ? p() : N();
  }, g = () => {
    p();
  }, C = (y) => {
    e.trigger === "click" && (g(), S(e.onClickOutside, y));
  }, O = () => {
    I(), S(e.onClosed);
  }, T = () => {
    u();
    var y = {
      x: ze(e.offsetX),
      y: ze(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: y.x,
          distance: y.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: y.x,
          distance: y.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: y.x,
          distance: y.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: y.x,
          distance: -y.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: y.x,
          distance: -y.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: y.x,
          distance: -y.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: y.y,
          distance: y.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: y.y,
          distance: -y.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: y.y,
          distance: -y.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: y.x,
          distance: -y.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: y.x,
          distance: y.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: y.y,
          distance: y.x
        };
    }
  }, k = () => {
    var {
      placement: y,
      skidding: B,
      distance: V
    } = T(), G = [fa({}, jg, {
      enabled: t.value
    }), fa({}, qg, {
      options: {
        offset: [B, V]
      }
    }), fa({}, bd, {
      options: {
        adaptive: !1,
        gpuAcceleration: !1
      },
      enabled: t.value
    }), {
      name: "applyTransformOrigin",
      enabled: t.value,
      phase: "beforeWrite",
      fn(W) {
        var {
          state: D
        } = W;
        D.styles.popper.transformOrigin = d();
      }
    }];
    return {
      placement: y,
      modifiers: G
    };
  }, M = () => e.reference ? r.value.querySelector(e.reference) : r.value, I = () => {
    l.setOptions(k());
  }, N = () => {
    var {
      disabled: y
    } = e;
    y || (t.value = !0, S(e["onUpdate:show"], !0));
  }, p = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  };
  return Ns(M, "click", C), se(() => e.offsetX, I), se(() => e.offsetY, I), se(() => e.placement, I), se(() => e.disabled, p), ao(() => {
    var y;
    l = yy((y = M()) != null ? y : r.value, n.value, k());
  }), oo(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: w,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: g,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: b,
    handleClosed: O,
    resize: I,
    open: N,
    close: p
  };
}
function by(e) {
  return ["click", "hover"].includes(e);
}
function wy(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Cy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Sy = {
  type: {
    type: String,
    default: "default",
    validator: Cy
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
    validator: by
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: wy
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
  n: ky,
  classes: $y
} = re("tooltip");
function Ty(e, r) {
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
    [j(e.$slots, "default"), (h(), we(pn, {
      to: e.teleport
    }, [Q(Ue, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: ce(() => [$e(z(
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
        [z(
          "div",
          {
            style: K({
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
      ), [[Gr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Cd = ee({
  name: "VarTooltip",
  props: Sy,
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
      open: m,
      // expose
      close: b,
      // expose
      resize: w
    } = wd(e);
    return {
      toSizeUnit: be,
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ky,
      classes: $y,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handleClosed: f,
      resize: w,
      open: m,
      close: b
    };
  }
});
Cd.render = Ty;
const Zn = Cd;
te(Zn);
var Pk = Zn;
function Py(e) {
  return ["click"].includes(e);
}
var Oy = {
  expandTrigger: {
    type: String,
    validator: Py
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
  n: Vy,
  classes: My
} = re("ellipsis"), Iy = {
  key: 0
};
function Ey(e, r) {
  var n = le("var-tooltip");
  return h(), we(
    n,
    Ct(io(e.tooltip)),
    {
      content: ce(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), $(
          "span",
          Iy,
          ie(e.tooltip.content),
          1
          /* TEXT */
        )) : j(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ce(() => [z(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: K(e.rootStyles),
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
var Sd = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: Zn
  },
  props: Oy,
  setup(e) {
    var r = P(!1), n = U(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = U(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : gi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: Vy,
      classes: My,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
Sd.render = Ey;
const Ua = Sd;
te(Ua);
var Ok = Ua;
function By(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function Ny(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function Dy(e) {
  return ["click", "hover"].includes(e);
}
var Ay = {
  active: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !0
  },
  drag: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    default: "primary",
    validator: cu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: By
  },
  direction: {
    type: String,
    default: "top",
    validator: Ny
  },
  trigger: {
    type: String,
    default: "click",
    validator: Dy
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
    type: [String, Object]
  },
  onClick: Y(),
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:active": Y()
};
function zy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var {
  classes: Io,
  n: hr
} = re("fab");
const Ya = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: Ay,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = As(e, "active"), o = P(null), l = P(null), i = (f, m, b) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (b === 0) {
          S(e.onClick, t.value, f);
          return;
        }
        l.value && l.value.dragging || (t.value = m, S(e.onClick, t.value, f), S(t.value ? e.onOpen : e.onClose));
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, S(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : $e(Q(vr, {
      "var-fab-cover": !0,
      class: hr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Q(Ne, {
        "var-fab-cover": !0,
        class: Io([t.value, hr("trigger-active-icon"), hr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: hr("--trigger-icon-animation")
      }, null)]
    }), [[Gr, e.show]]), v = () => {
      var f, m, {
        top: b,
        left: w,
        right: g,
        bottom: C,
        position: O,
        drag: T,
        disabled: k,
        teleport: M,
        zIndex: I,
        direction: N,
        safeArea: p,
        fixed: y,
        show: B,
        onOpened: V,
        onClosed: G
      } = e, W = Ds((m = S(n.default)) != null ? m : []);
      return Q(qn, {
        ref: l,
        zIndex: R(I),
        class: Io(hr("--position-" + O), [!y, hr("--absolute")]),
        teleport: M,
        disabled: !T || k || !y,
        style: {
          top: be(b),
          bottom: be(C),
          left: be(w),
          right: be(g)
        }
      }, {
        default: () => [Q("div", De({
          class: Io(hr(), hr("--direction-" + N), [p, hr("--safe-area")]),
          ref: o,
          onClick: (D) => i(D, !t.value, W.length),
          onMouseleave: () => s(!1, W.length),
          onMouseenter: () => s(!0, W.length)
        }, a), [Q(Ue, {
          name: hr("--active-transition")
        }, zy(f = d()) ? f : {
          default: () => [f]
        }), Q(Ue, {
          name: hr("--actions-transition-" + N),
          onAfterEnter: V,
          onAfterLeave: G
        }, {
          default: () => [$e(Q("div", {
            class: hr("actions"),
            onClick: (D) => D.stopPropagation()
          }, [W.map((D) => Q("div", {
            class: hr("action")
          }, [D]))]), [[Gr, B && t.value && W.length]])]
        })])]
      });
    };
    return se(() => e.trigger, () => {
      t.value = !1;
    }), se(() => e.disabled, () => {
      t.value = !1;
    }), se(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      l.value && l.value.reset();
    }), Ns(o, "click", u), () => v();
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
function ql(e, r, n, a, t, o, l) {
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
var kd = ee({
  name: "VarForm",
  props: Ry,
  setup(e) {
    var r = U(() => e.disabled), n = U(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Wm(), o = (d) => {
      setTimeout(() => {
        var v = sn(d), f = v === window ? 0 : dl(v), m = dl(d) - f - ze(e.scrollToErrorOffsetY);
        ha(v, {
          top: m,
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
          var [, f] = xv(v, (g) => g === !1, e.scrollToError), m = f > -1;
          if (m) {
            var b, w = (b = a[f].instance.proxy) == null ? void 0 : b.$el;
            o(w);
          }
          return !m;
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
kd.render = Hy;
const Tn = kd;
Tn.useValidation = Or;
Tn.useForm = Vr;
te(Tn);
var Mk = Tn;
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
      style: K({
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
      style: K({
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
    }, null, 46, Xy)) : x("v-if", !0), e.showErrorSlot ? j(e.$slots, "error", {
      key: 2
    }) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var $d = ee({
  name: "VarImage",
  directives: {
    Lazy: ya,
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
$d.render = Ky;
const Ha = $d;
te(Ha);
var Ik = Ha, Td = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Zy() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Td);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Pd = {
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
    [z(
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
          style: K({
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
var Od = ee({
  name: "VarSwipe",
  props: Pd,
  setup(e) {
    var r = P(null), n = P(0), a = U(() => e.vertical), t = P(0), o = P(0), l = P(!1), i = P(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Zy(), {
      popup: v,
      bindPopup: f
    } = Pf(), m = !1, b = !1, w = -1, g, C, O, T, k, M = (H) => s.find((Z) => {
      var {
        index: _
      } = Z;
      return _.value === H;
    }), I = () => {
      e.loop && (o.value >= 0 && M(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && M(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (M(d.value - 1).setTranslate(0), M(0).setTranslate(0)));
    }, N = (H) => {
      var Z = nr(H) ? H : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: _
      } = e;
      return Z <= -1 ? _ ? -1 : 0 : Z >= d.value ? _ ? d.value : d.value - 1 : Z;
    }, p = (H) => {
      var {
        loop: Z
      } = e;
      return H === -1 ? Z ? d.value - 1 : 0 : H === d.value ? Z ? 0 : d.value - 1 : H;
    }, y = (H) => e.loop ? H < 0 ? d.value + H : H >= d.value ? H - d.value : H : Rn(H, 0, d.value - 1), B = (H) => {
      var Z = o.value >= n.value, _ = o.value <= -t.value, fe = 0, Se = -(t.value - n.value);
      l.value = !0, (Z || _) && (l.value = !0, o.value = _ ? fe : Se, M(0).setTranslate(0), M(d.value - 1).setTranslate(0)), so(() => {
        l.value = !1, S(H);
      });
    }, V = () => {
      m || (i.value = y(R(e.initialIndex)), m = !0);
    }, G = () => {
      var {
        autoplay: H
      } = e;
      !H || d.value <= 1 || (W(), w = window.setTimeout(() => {
        E(), G();
      }, R(H)));
    }, W = () => {
      w && clearTimeout(w);
    }, D = (H, Z) => {
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
        g = Z, C = _, O = performance.now(), b = !0, W(), B(() => {
          l.value = !0;
        });
      }
    }, F = (H) => {
      var {
        touchable: Z,
        vertical: _
      } = e;
      if (!(!b || !Z)) {
        var {
          clientX: fe,
          clientY: Se
        } = H.touches[0], Ie = Math.abs(fe - g), oe = Math.abs(Se - C), ve = D(Ie, oe), pe = _ ? "vertical" : "horizontal";
        if (ve === pe) {
          H.preventDefault();
          var Oe = T !== void 0 ? fe - T : 0, je = k !== void 0 ? Se - k : 0;
          T = fe, k = Se, o.value += _ ? je : Oe, I();
        }
      }
    }, q = () => {
      if (b) {
        var {
          vertical: H,
          onChange: Z
        } = e, _ = H ? k < C : T < g, fe = Math.abs(H ? C - k : g - T), Se = performance.now() - O <= Jy && fe >= Qy, Ie = Se ? N(_ ? i.value + 1 : i.value - 1) : N();
        b = !1, l.value = !1, T = void 0, k = void 0, o.value = Ie * -n.value;
        var oe = i.value;
        i.value = p(Ie), G(), oe !== i.value && S(Z, i.value);
      }
    }, ne = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((H) => {
        H.setTranslate(0);
      }), G(), setTimeout(() => {
        l.value = !1;
      }));
    }, E = (H) => {
      if (!(d.value <= 1)) {
        V();
        var {
          loop: Z,
          onChange: _
        } = e, fe = i.value;
        i.value = y(fe + 1), (H == null ? void 0 : H.event) !== !1 && S(_, i.value), B(() => {
          if (fe === d.value - 1 && Z) {
            M(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          fe !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, A = (H) => {
      if (!(d.value <= 1)) {
        V();
        var {
          loop: Z,
          onChange: _
        } = e, fe = i.value;
        i.value = y(fe - 1), (H == null ? void 0 : H.event) !== !1 && S(_, i.value), B(() => {
          if (fe === 0 && Z) {
            M(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          fe !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, X = (H, Z) => {
      if (!(d.value <= 1 || H === i.value)) {
        H = H < 0 ? 0 : H, H = H >= d.value ? d.value : H;
        var _ = H > i.value ? E : A, fe = Math.abs(H - i.value);
        Array.from({
          length: fe
        }).forEach((Se, Ie) => {
          _({
            event: Ie === fe - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, ae = {
      size: n,
      vertical: a
    };
    return u(ae), S(f, null), se(() => d.value, /* @__PURE__ */ Kl(function* () {
      yield Dr(), V(), ne();
    })), v && se(() => v.show.value, /* @__PURE__ */ function() {
      var H = Kl(function* (Z) {
        Z ? (yield Dr(), ne()) : W();
      });
      return function(Z) {
        return H.apply(this, arguments);
      };
    }()), mn(ne), uo(W), St(ne), {
      n: _y,
      classes: xy,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: L,
      handleTouchmove: F,
      handleTouchend: q,
      next: E,
      prev: A,
      to: X,
      resize: ne,
      toNumber: R
    };
  }
});
Od.render = rb;
const Pn = Od;
te(Pn);
var Ek = Pn;
function nb() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = ir(Td);
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
      style: K({
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
var Vd = ee({
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
Vd.render = tb;
const On = Vd;
te(On);
var Bk = On;
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
}, xe(Pd, ["loop", "indicator", "onChange"]), xe(kt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Zl,
  classes: ib
} = re("image-preview"), Eo = 12, Jl = 200, lb = 350, Ql = 200, sb = 500, ub = ["onTouchstart"], db = ["src", "alt"];
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
          default: ce(() => [z("div", {
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
          }, [z("img", {
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
    }, null, 8, ["class", "onClick"])) : x("v-if", !0)]), z(
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
var Md = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: Pn,
    VarSwipeItem: On,
    VarPopup: Lr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: ob,
  setup(e) {
    var r = P(!1), n = U(() => {
      var {
        images: E,
        current: A,
        initialIndex: X
      } = e;
      if (X != null)
        return R(X);
      var ae = E.findIndex((H) => H === A);
      return ae >= 0 ? ae : 0;
    }), a = P(1), t = P(0), o = P(0), l = P(void 0), i = P(void 0), s = P(!0), u = P(null), d = null, v = null, f = null, m = null, b = !1, w = U(() => {
      var {
        imagePreventDefault: E,
        show: A
      } = e;
      return A && E;
    }), g = (E, A) => {
      var {
        clientX: X,
        clientY: ae
      } = E, {
        clientX: H,
        clientY: Z
      } = A;
      return Math.abs(Math.sqrt(Math.pow(H - X, 2) + Math.pow(Z - ae, 2)));
    }, C = (E, A) => ({
      clientX: E.clientX,
      clientY: E.clientY,
      timestamp: performance.now(),
      target: A
    }), O = () => {
      a.value = R(e.zoom), s.value = !1, v = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Ql);
    }, T = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, v = null, l.value = void 0, i.value = void 0;
    }, k = (E) => v ? g(v, E) <= Eo && E.timestamp - v.timestamp <= Jl && v.target === E.target : !1, M = (E) => !E || !d || !v ? !1 : g(d, v) <= Eo && performance.now() - v.timestamp < lb && (E === d.target || E.parentNode === d.target), I = () => {
      window.clearTimeout(m), b = !1, d = null;
    }, N = (E) => {
      if (window.clearTimeout(m), b) {
        b = !1;
        return;
      }
      var A = M(E.target);
      f = window.setTimeout(() => {
        A && D(), d = null;
      }, Jl);
    }, p = (E, A) => {
      window.clearTimeout(f), window.clearTimeout(m);
      var X = C(E.touches[0], E.currentTarget);
      if (d = X, m = window.setTimeout(() => {
        var {
          onLongPress: ae
        } = e;
        b = !0, S(ae, A);
      }, sb), k(X)) {
        a.value > 1 ? T() : O();
        return;
      }
      v = X;
    }, y = (E) => {
      var {
        offsetWidth: A,
        offsetHeight: X
      } = E, {
        naturalWidth: ae,
        naturalHeight: H
      } = E.querySelector("." + Zl("image"));
      return {
        width: A,
        height: X,
        imageRadio: H / ae,
        rootRadio: X / A,
        zoom: R(e.zoom)
      };
    }, B = (E) => {
      var {
        zoom: A,
        imageRadio: X,
        rootRadio: ae,
        width: H,
        height: Z
      } = y(E);
      if (!X)
        return 0;
      var _ = X > ae ? Z / X : H;
      return Math.max(0, (A * _ - H) / 2) / A;
    }, V = (E) => {
      var {
        zoom: A,
        imageRadio: X,
        rootRadio: ae,
        width: H,
        height: Z
      } = y(E);
      if (!X)
        return 0;
      var _ = X > ae ? Z : H * X;
      return Math.max(0, (A * _ - Z) / 2) / A;
    }, G = (E, A, X) => E + A >= X ? X : E + A <= -X ? -X : E + A, W = (E) => {
      if (v) {
        var A = E.currentTarget, X = C(E.touches[0], A);
        if (g(X, v) > Eo && window.clearTimeout(m), a.value > 1) {
          var ae = X.clientX - v.clientX, H = X.clientY - v.clientY, Z = B(A), _ = V(A);
          t.value = G(t.value, ae, Z), o.value = G(o.value, H, _);
        }
        v = X;
      }
    }, D = () => {
      if (a.value > 1) {
        T(), setTimeout(() => S(e["onUpdate:show"], !1), Ql);
        return;
      }
      S(e["onUpdate:show"], !1);
    }, L = (E) => {
      var A;
      (A = u.value) == null || A.prev(E);
    }, F = (E) => {
      var A;
      (A = u.value) == null || A.next(E);
    }, q = (E, A) => {
      var X;
      (X = u.value) == null || X.to(E, A);
    }, ne = (E) => {
      e.imagePreventDefault && e.show && E.preventDefault();
    };
    return un(() => document, "contextmenu", ne), se(() => e.show, (E) => {
      r.value = E;
    }, {
      immediate: !0
    }), {
      n: Zl,
      classes: ib,
      swipeRef: u,
      isPreventDefault: w,
      initialIndex: n,
      popupShow: r,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: p,
      handleTouchmove: W,
      handleTouchend: N,
      handleTouchcancel: I,
      close: D,
      prev: L,
      next: F,
      to: q
    };
  }
});
Md.render = vb;
const Vt = Md;
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
var nn, ma = {};
function fb(e) {
  return e === void 0 && (e = {}), Fe(e) ? ca({}, ma, {
    images: [e]
  }) : Ve(e) ? ca({}, ma, {
    images: e
  }) : ca({}, ma, e);
}
function zr(e) {
  if (na()) {
    zr.close();
    var r = fb(e), n = Re(r);
    n.teleport = "body", nn = n;
    var {
      unmountInstance: a
    } = ta(Vt, n, {
      onClose: () => S(n.onClose),
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
  }
}
zr.close = () => {
  if (nn != null) {
    var e = nn;
    nn = null, Le().then(() => {
      e.show = !1;
    });
  }
};
zr.setDefaultOptions = (e) => {
  ma = e;
};
zr.resetDefaultOptions = () => {
  ma = {};
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
function _l(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function xl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        _l(o, a, t, l, i, "next", s);
      }
      function i(s) {
        _l(o, a, t, l, i, "throw", s);
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
      style: K({
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
        style: K({
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
var Id = ee({
  name: "VarSticky",
  props: Wt,
  setup(e) {
    var r = P(null), n = P(null), a = P(!1), t = P("0px"), o = P("0px"), l = P("auto"), i = P("auto"), s = P("auto"), u = P("auto"), d = U(() => !e.disabled && e.cssMode), v = U(() => !e.disabled && !e.cssMode && a.value), f = U(() => ze(e.offsetTop)), m, b = () => {
      var {
        cssMode: T,
        disabled: k
      } = e;
      if (!k) {
        var M = 0;
        if (m !== window) {
          var {
            top: I
          } = Qe(m);
          M = I;
        }
        var N = n.value, p = r.value, {
          top: y,
          left: B
        } = Qe(p), V = y - M;
        return V <= f.value ? (T || (l.value = p.offsetWidth + "px", i.value = p.offsetHeight + "px", t.value = M + f.value + "px", o.value = B + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: V,
          isFixed: !1
        });
      }
    }, w = () => {
      if (m) {
        var T = b();
        T && S(e.onScroll, T.offsetTop, T.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var T = xl(function* () {
        a.value = !1, yield ff(), b();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var T = xl(function* () {
        yield Dr(), m = sn(r.value), m !== window && m.addEventListener("scroll", w), w();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", w);
    };
    return se(() => e.disabled, g), or(C), uo(O), St(g), un(() => window, "scroll", w), {
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
      toNumber: R
    };
  }
});
Id.render = pb;
const Vn = Id;
te(Vn);
var Dk = Vn, Ed = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function hb() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = lr(Ed);
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
  } = ir(Ed);
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
  return h(), we(ea(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: ce(() => [z(
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
var Bd = ee({
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
    } = gb(), t = P(0), o = P(!1), l = U(() => e.index), i = P(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, b = (g) => {
      o.value = g;
    }, w = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: b
    };
    return a(w), {
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
Bd.render = Cb;
const Fa = Bd;
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
function es(e, r, n, a, t, o, l) {
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
        es(o, a, t, l, i, "next", s);
      }
      function i(s) {
        es(o, a, t, l, i, "throw", s);
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
    [j(e.$slots, "default"), z(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: K({
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
          style: K({
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
var Nd = ee({
  name: "VarIndexBar",
  props: Sb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = hb(), t = P(""), o = P(null), l = P([]), i = P(), s = U(() => e.sticky), u = U(() => e.stickyCssMode || e.cssMode), d = U(() => ze(e.stickyOffsetTop)), v = U(() => e.zIndex), f = null, m = !1, b = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(b);
    var w = (N, p) => {
      var y = Vi(N) ? N.name.value : N;
      y === i.value || y === void 0 || (i.value = y, (p == null ? void 0 : p.event) !== !1 && S(e.onChange, y));
    }, g = () => {
      if (Mi(f))
        return 0;
      var {
        top: N
      } = Qe(f), {
        scrollTop: p
      } = f, {
        top: y
      } = Qe(o.value);
      return p - N + y;
    }, C = () => {
      var N = pa(f), p = f === window ? document.body.scrollHeight : f.scrollHeight, y = g();
      n.forEach((B, V) => {
        var G = B.ownTop.value, W = N - G + d.value - y, D = V === n.length - 1 ? p : n[V + 1].ownTop.value - B.ownTop.value;
        B.setDisabled(!0), W >= 0 && W < D && t.value === "" && (B.setDisabled(!1), w(B));
      });
    }, O = /* @__PURE__ */ function() {
      var N = Lt(function* (p) {
        var {
          anchorName: y,
          manualCall: B = !1,
          options: V
        } = p;
        if (B && S(e.onClick, y), !(y === i.value && !m)) {
          var G = n.find((F) => {
            var {
              name: q
            } = F;
            return y === q.value;
          });
          if (G) {
            var W = g(), D = G.ownTop.value - d.value + W, L = Ei(f);
            t.value = y, w(y, V), yield ha(f, {
              left: L,
              top: D,
              animation: $s,
              duration: R(e.duration)
            }), so(() => {
              t.value = "";
            });
          }
        }
      });
      return function(y) {
        return N.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var N = Lt(function* () {
        yield Dr(), f = sn(o.value);
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), k = () => {
      f.addEventListener("scroll", C);
    }, M = () => {
      f.removeEventListener("scroll", C);
    }, I = (N, p) => {
      br(() => O({
        anchorName: N,
        options: p
      }));
    };
    return se(() => r.value, /* @__PURE__ */ Lt(function* () {
      yield Dr(), n.forEach((N) => {
        var {
          name: p,
          setOwnTop: y
        } = N;
        p.value && l.value.push(p.value), y();
      });
    })), or(/* @__PURE__ */ Lt(function* () {
      yield T(), k();
    })), to(M), _n(() => {
      m = !0, M();
    }), mn(() => {
      !m || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: kb,
      classes: $b,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: R,
      scrollTo: I,
      anchorClick: O
    };
  }
});
Nd.render = Pb;
const ja = Nd;
te(ja);
var zk = ja;
function Ob(e) {
  return ["small", "normal"].includes(e);
}
function Vb(e) {
  return ["outlined", "standard"].includes(e);
}
var Ji = {
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
    [z(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
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
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
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
        style: K({
          color: e.color
        }),
        for: e.id
      }, [z(
        "span",
        null,
        ie(e.placeholder),
        1
        /* TEXT */
      )], 14, Ib)) : x("v-if", !0), z(
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
          style: K({
            borderColor: e.color
          })
        },
        [z(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: K({
              width: e.legendWidth
            })
          },
          [e.placeholder && e.hint ? (h(), we(pn, {
            key: 0,
            to: "body"
          }, [z(
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
          style: K({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [z(
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
var Dd = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ne
  },
  props: Ji,
  setup(e, r) {
    var {
      slots: n
    } = r, a = P(null), t = P(""), o = U(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = U(() => e.hint && (!Hr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Hr(f) || m))
        return Bo("--placeholder-hidden");
      if (l.value)
        return Bo("--placeholder-hint");
    }, s = () => {
      var {
        size: v,
        hint: f,
        variant: m,
        placeholder: b
      } = e;
      if (!b || !f || m !== "outlined") {
        t.value = "";
        return;
      }
      var w = aa(a.value), g = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + w.width + " * 0.75 + " + g + " * 2)";
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
      isEmpty: Hr,
      handleClear: u,
      handleClick: d
    };
  }
});
Dd.render = Eb;
const Ad = Dd;
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
}, xe(Ji, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
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
          style: K({
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
var zd = ee({
  name: "VarInput",
  components: {
    VarFormDetails: ar,
    VarFieldDecorator: Ad
  },
  props: Nb,
  setup(e) {
    var r = P("var-input-" + xn().uid), n = P(null), a = P(!1), t = P(!1), o = U(() => e.type === "number" ? "text" : e.type), l = U(() => {
      var {
        maxlength: E,
        modelValue: A
      } = e;
      return E ? Hr(A) ? "0 / " + E : String(A).length + "/" + E : "";
    }), i = U(() => e.disabled || e.readonly ? "" : "text"), s = U(() => {
      var {
        hint: E,
        blurColor: A,
        focusColor: X
      } = e;
      if (!E)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? X || "var(--field-decorator-focus-color)" : A || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: b
    } = Or(), w = (E) => {
      Le(() => {
        var {
          validateTrigger: A,
          rules: X,
          modelValue: ae
        } = e;
        f(A, E, X, ae);
      });
    }, g = (E) => {
      a.value = !0, S(e.onFocus, E), w("onFocus");
    }, C = (E) => {
      a.value = !1, S(e.onBlur, E), w("onBlur");
    }, O = (E) => {
      var A = E.target, {
        value: X
      } = A;
      return e.type === "number" && (X = y(X)), V(B(X));
    }, T = () => {
      t.value = !0;
    }, k = (E) => {
      t.value && (t.value = !1, E.target.dispatchEvent(new Event("input")));
    }, M = (E) => {
      if (!t.value) {
        var A = O(E);
        S(e["onUpdate:modelValue"], A), S(e.onInput, A, E), w("onInput");
      }
    }, I = (E) => {
      var A = O(E);
      S(e.onChange, A, E), w("onChange");
    }, N = () => {
      var {
        disabled: E,
        readonly: A,
        clearable: X,
        onClear: ae
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || E || A || !X || (S(e["onUpdate:modelValue"], ""), S(ae, ""), w("onClear"));
    }, p = (E) => {
      var {
        disabled: A,
        onClick: X
      } = e;
      d != null && d.disabled.value || A || (S(X, E), w("onClick"));
    }, y = (E) => {
      var A = E.indexOf("-"), X = E.indexOf(".");
      return A > -1 && (E = A === 0 ? "-" + E.replace(/-/g, "") : E.replace(/-/g, "")), X > -1 && (E = E.slice(0, X + 1) + E.slice(X).replace(/\./g, "")), E.replace(/[^-0-9.]/g, "");
    }, B = (E) => e.modelModifiers.trim ? E.trim() : E, V = (E) => e.maxlength ? E.slice(0, R(e.maxlength)) : E, G = (E) => {
      var {
        disabled: A,
        readonly: X
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || A || X || E.stopPropagation();
    };
    function W(E) {
      var {
        disabled: A
      } = e;
      d != null && d.disabled.value || A || E.target === n.value || (F(), E.preventDefault());
    }
    var D = () => {
      S(e["onUpdate:modelValue"], ""), b();
    }, L = () => m(e.rules, e.modelValue), F = () => {
      var E;
      (E = n.value) == null || E.focus();
    }, q = () => {
      n.value.blur();
    }, ne = {
      reset: D,
      validate: L,
      resetValidation: b
    };
    return S(u, ne), or(() => {
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
      isEmpty: Hr,
      handleFocus: g,
      handleBlur: C,
      handleInput: M,
      handleChange: I,
      handleClear: N,
      handleClick: p,
      handleTouchstart: G,
      handleCompositionStart: T,
      handleCompositionEnd: k,
      handleMousedown: W,
      validate: L,
      resetValidation: b,
      reset: D,
      focus: F,
      blur: q
    };
  }
});
zd.render = Ub;
const Jn = zd;
te(Jn);
var Lk = Jn;
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
  return h(), we(ea(e.tag), De(e.linkProps, {
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
var Ld = ee({
  name: "VarLink",
  props: Fb,
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
      n: jb,
      classes: Wb,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: be
    };
  }
});
Ld.render = Gb;
const Wa = Ld;
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
}, Rd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Xb() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Rd);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Ud = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Kb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Rd);
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
  } = lr(Ud);
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
  } = ir(Ud);
  return {
    index: n,
    tabItem: e,
    bindTabItem: r
  };
}
function rs(e, r, n, a, t, o, l) {
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
    }, () => [z(
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
var Yd = ee({
  name: "VarList",
  directives: {
    Ripple: Xe
  },
  components: {
    VarLoading: dn
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
      o = sn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
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
Yd.render = e0;
const Ga = Yd;
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
  n: ns
} = re("loading-bar");
const a0 = ee({
  name: "VarLoadingBar",
  props: r0,
  setup(e) {
    return () => Q("div", {
      class: n0(ns(), [e.error, ns("--error")]),
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
var Hd, Fd, ko, jd, as, Wd = {}, t0 = {
  value: 0,
  opacity: 0,
  error: !1
}, er = Re(t0), o0 = (e) => {
  Object.assign(er, e);
}, i0 = (e) => {
  Object.assign(er, e), Wd = e;
}, l0 = () => {
  Object.keys(Wd).forEach((e) => {
    er[e] !== void 0 && (er[e] = void 0);
  });
}, Gd = () => {
  as || (as = !0, ta(a0, er));
}, Qi = () => {
  Hd = window.setTimeout(() => {
    if (!(er.value >= 95)) {
      var e = Math.random();
      er.value < 70 && (e = Math.round(5 * Math.random())), er.value += e, Qi();
    }
  }, 200);
}, _i = () => {
  window.clearTimeout(Fd), window.clearTimeout(Hd), window.clearTimeout(ko), window.clearTimeout(jd);
}, s0 = () => {
  _i(), er.error = !1, er.value = 0, Gd(), ko = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), Qi();
}, qd = () => {
  _i(), er.value = 100, ko = window.setTimeout(() => {
    er.opacity = 0, Fd = window.setTimeout(() => {
      er.error = !1;
    }, 250);
  }, 300);
}, u0 = () => {
  _i(), er.error = !0, er.value === 100 && (er.value = 0), Gd(), ko = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), Qi(), jd = window.setTimeout(qd, 300);
}, Xd = {
  start: s0,
  finish: qd,
  error: u0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: o0,
  setDefaultOptions: i0,
  resetDefaultOptions: l0
}, Yk = Xd;
const wi = Xd;
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
    [j(e.$slots, "default"), (h(), we(pn, {
      to: e.teleport
    }, [Q(Ue, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: ce(() => [$e(z(
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
        [j(e.$slots, "menu")],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Gr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Kd = ee({
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
      open: m,
      // expose
      close: b,
      // expose
      resize: w
    } = wd(e);
    return {
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: pr,
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
      resize: w,
      open: m,
      close: b
    };
  }
});
Kd.render = p0;
const Mn = Kd;
te(Mn);
var Hk = Mn, Zd = Symbol("SELECT_BIND_OPTION_KEY");
function h0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = lr(Zd);
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
  } = ir(Zd);
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
      style: K({
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
        style: K({
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
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : x("v-if", !0), z(
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
var Jd = ee({
  name: "VarOption",
  directives: {
    Ripple: Xe
  },
  components: {
    VarCheckbox: Fn
  },
  props: y0,
  setup(e) {
    var r = P(!1), n = U(() => r.value), a = U(() => e.label), t = U(() => e.value), {
      select: o,
      bindSelect: l
    } = g0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      i.value && (r.value = !r.value), u(b);
    }, f = () => u(b), m = (w) => {
      r.value = w;
    }, b = {
      label: a,
      value: t,
      selected: n,
      sync: m
    };
    return se([() => e.label, () => e.value], d), l(b), {
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
Jd.render = C0;
const qa = Jd;
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
  n: ts
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
    } = Bi(), l = () => {
      S(e.onClick), S(e["onUpdate:show"], !1);
    };
    vo(() => e.show, () => e.lockScroll);
    var i = () => Q("div", De({
      class: ts(),
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
        name: ts("--fade")
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
        return Q(pn, {
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
        onKeydown: r[3] || (r[3] = al((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), z("span", null, [ke(
        " / " + ie(e.pageCount) + " ",
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
        default: ce(() => [z(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: r[5] || (r[5] = $r(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [z(
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
        onKeydown: r[9] || (r[9] = al((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
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
var Qd = ee({
  name: "VarPagination",
  components: {
    VarMenu: Mn,
    VarIcon: Ne,
    VarCell: Hn,
    VarInput: Jn
  },
  directives: {
    Ripple: Xe
  },
  props: $0,
  setup(e) {
    var r = P(!1), n = P(""), a = P("1"), t = P(!1), o = P(!1), l = P(R(e.current) || 1), i = P(R(e.size) || 10), s = P([]), u = U(() => Math.ceil(e.maxPagerCount / 2)), d = U(() => Math.ceil(R(e.total) / R(i.value))), v = U(() => {
      var k = i.value * (l.value - 1) + 1, M = Math.min(i.value * l.value, R(e.total));
      return [k, M];
    }), f = U(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = (k, M) => nr(k) ? !1 : M === 1 ? t.value : o.value, b = (k, M) => nr(k) ? "basic" : M === 1 ? "head" : "tail", w = (k, M) => {
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
        nr(k) && (l.value = k);
      }
    }, g = () => {
      e.disabled || (r.value = !0);
    }, C = (k) => {
      i.value = k, r.value = !1;
      var M = O(l.value);
      a.value = String(M), l.value = M;
    }, O = (k) => k > d.value ? d.value : k < 1 ? 1 : k, T = (k, M, I) => {
      I.target.blur();
      var N = O(R(M));
      a.value = String(N), l.value = N, k === "quick" && (n.value = "");
    };
    return se([() => e.current, () => e.size], (k) => {
      var [M, I] = k;
      l.value = R(M) || 1, i.value = R(I || 10);
    }), se([l, i, d], (k, M) => {
      var [I, N, p] = k, [y, B] = M, V = [], {
        maxPagerCount: G,
        total: W,
        onChange: D
      } = e, L = Math.ceil(R(W) / R(B)), F = p - (G - u.value) - 1;
      if (a.value = "" + I, p - 2 > G) {
        if (y === void 0 || p !== L)
          for (var q = 2; q < G + 2; q++)
            V.push(q);
        if (I <= G && I < F) {
          V = [];
          for (var ne = 1; ne < G + 1; ne++)
            V.push(ne + 1);
          t.value = !0, o.value = !1;
        }
        if (I > G && I < F) {
          V = [];
          for (var E = 1; E < G + 1; E++)
            V.push(I + E - u.value);
          t.value = I === 2 && G === 1, o.value = !1;
        }
        if (I >= F) {
          V = [];
          for (var A = 1; A < G + 1; A++)
            V.push(p - (G - A) - 1);
          t.value = !1, o.value = !0;
        }
        V = [1, "...", ...V, "...", p];
      } else
        for (var X = 1; X <= p; X++)
          V.push(X);
      s.value = V, y != null && p > 0 && S(D, I, N), S(e["onUpdate:current"], I), S(e["onUpdate:size"], N);
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
      getMode: b,
      isHideEllipsis: m,
      clickItem: w,
      showMenu: g,
      clickSize: C,
      setPage: T,
      toNumber: R,
      formatElevation: pr
    };
  }
});
Qd.render = V0;
const Ka = Qd;
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
      style: K({
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
var _d = ee({
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
      formatElevation: pr,
      toSizeUnit: be,
      handleClick: r
    };
  }
});
_d.render = B0;
const Za = _d;
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
} = re("picker"), os = 300, z0 = 15, is = 200, L0 = 1e3, ls = 0, R0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], U0 = ["onTransitionend"], Y0 = ["onClick"];
function H0(e, r) {
  var n = le("var-button");
  return h(), we(
    ea(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ce(() => [z(
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
          }, 8, ["class", "text-color", "onClick"])]), j(e.$slots, "title", {}, () => [z(
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
        )) : x("v-if", !0), z(
          "div",
          {
            class: c(e.n("columns")),
            style: K({
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
            }, [z("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: K({
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
                style: K({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (l) => e.handleClick(a, o)
              }, [z(
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
          )), z(
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
          ), z(
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
var xd = ee({
  name: "VarPicker",
  components: {
    VarButton: vr,
    VarPopup: Lr
  },
  inheritAttrs: !1,
  props: N0,
  setup(e) {
    var r = P([]), n = U(() => ze(e.optionHeight)), a = U(() => ze(e.optionCount)), t = U(() => a.value * n.value / 2 - n.value / 2), o = U(() => a.value * n.value), l = [], i = !1, s = (D, L) => {
      L.scrollEl = D;
    }, u = (D) => {
      S(e["onUpdate:show"], D);
    }, d = (D) => {
      var L = t.value - D.column.texts.length * n.value, F = n.value + t.value;
      D.translate = Rn(D.translate, L, F);
    }, v = (D, L) => {
      var F = Math.round((t.value - L) / n.value);
      return ef(F, D.column.texts);
    }, f = (D) => (D.translate = t.value - D.index * n.value, D.translate), m = () => {
      var D = r.value.map((F) => F.column.texts[F.index]), L = r.value.map((F) => F.index);
      return {
        texts: D,
        indexes: L
      };
    }, b = function(D, L) {
      L === void 0 && (L = 0), f(D), D.duration = L;
    }, w = (D, L, F) => {
      D.translate += Math.abs(L / F) / 3e-3 * (L < 0 ? -1 : 1);
    }, g = (D, L) => {
      i || (D.index = L, D.scrolling = !0, b(D, is));
    }, C = (D) => {
      D.touching = !0, D.translate = Oo(D.scrollEl);
    }, O = (D, L) => {
      if (L.touching) {
        i = !0, L.scrolling = !1, L.duration = 0;
        var {
          clientY: F
        } = D.touches[0], q = L.prevY !== void 0 ? F - L.prevY : 0;
        L.prevY = F, L.translate += q, d(L);
        var ne = performance.now();
        ne - L.momentumTime > os && (L.momentumTime = ne, L.momentumPrevY = L.translate);
      }
    }, T = (D, L) => {
      L.touching = !1, L.prevY = void 0;
      var F = L.translate - L.momentumPrevY, q = performance.now() - L.momentumTime, ne = Math.abs(F) >= z0 && q <= os;
      ne && w(L, F, q), L.index = v(L, L.translate);
      var E = L.translate, A = f(L);
      L.scrolling = A !== E, b(L, ne ? L0 : is), L.scrolling || B(L), br(() => {
        i = !1;
      });
    }, k = (D) => {
      D.scrolling = !1, B(D);
    }, M = (D) => D.map((L, F) => {
      var q, ne = Ve(L) ? {
        texts: L
      } : L, E = {
        id: ls++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (q = ne.initialIndex) != null ? q : 0,
        columnIndex: F,
        duration: 0,
        momentumTime: 0,
        column: ne,
        scrollEl: null,
        scrolling: !1
      };
      return b(E), E;
    }), I = (D) => {
      var L = [];
      return N(L, D, 0, !0), L;
    }, N = function(D, L, F, q) {
      if (q === void 0 && (q = !1), Ve(L) && L.length) {
        var ne, E = q && (ne = e.cascadeInitialIndexes[D.length]) != null ? ne : 0, A = {
          id: ls++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: E,
          columnIndex: F,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: L.map((X) => X[e.textKey])
          },
          columns: L,
          scrollEl: null,
          scrolling: !1
        };
        D.push(A), b(A), N(D, A.columns[A.index].children, F + 1, q);
      }
    }, p = (D) => {
      r.value.splice(r.value.indexOf(D) + 1), N(r.value, D.columns[D.index].children, D.columnIndex + 1);
    }, y = () => {
      var {
        indexes: D
      } = m();
      return D.every((L, F) => L === l[F]);
    }, B = (D) => {
      var {
        cascade: L,
        onChange: F
      } = e;
      if (!y()) {
        L && p(D);
        var q = r.value.some((A) => A.scrolling);
        if (!q) {
          var {
            texts: ne,
            indexes: E
          } = m();
          l = [...E], S(F, ne, E);
        }
      }
    }, V = () => {
      if (e.cascade) {
        var D = r.value.find((L) => L.scrolling);
        D && (D.index = v(D, Oo(D.scrollEl)), D.scrolling = !1, b(D), p(D));
      } else
        r.value.forEach((L) => {
          L.index = v(L, Oo(L.scrollEl)), b(L);
        });
    }, G = () => {
      V();
      var {
        texts: D,
        indexes: L
      } = m();
      l = [...L], S(e.onConfirm, D, L);
    }, W = () => {
      V();
      var {
        texts: D,
        indexes: L
      } = m();
      l = [...L], S(e.onCancel, D, L);
    };
    return se(() => e.columns, (D) => {
      r.value = e.cascade ? I(tl(D)) : M(tl(D));
      var {
        indexes: L
      } = m();
      l = [...L];
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
      confirm: G,
      cancel: W,
      dt: lo,
      handleClick: g
    };
  }
});
xd.render = H0;
const Mt = xd;
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
    } = ta(Mt, a, {
      onConfirm: (o, l) => {
        S(a.onConfirm, o, l), r({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onCancel: (o, l) => {
        S(a.onCancel, o, l), r({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onClose: () => {
        S(a.onClose), r({
          state: "close"
        }), fr === a && (fr = null);
      },
      onClosed: () => {
        S(a.onClosed), t(), fr === a && (fr = null);
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
    fr = null, Le().then(() => {
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
      [z(
        "div",
        {
          class: c(e.n("linear-block")),
          style: K({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), $(
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
        )) : x("v-if", !0), e.indeterminate ? (h(), $(
          "div",
          {
            key: 1,
            class: c(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
          },
          [z(
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
          ), z(
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
        )) : (h(), $(
          "div",
          {
            key: 2,
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
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), $("svg", {
        class: c(e.n("circle-svg")),
        style: K({
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
        style: K({
          stroke: e.trackColor
        })
      }, null, 14, K0)) : x("v-if", !0), z("circle", {
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
var ev = ee({
  name: "VarProgress",
  props: W0,
  setup(e) {
    var r = 100, n = 20, a = 2 * Math.PI * n, t = U(() => {
      var l = R(e.value), i = l > r ? r : l, s = l > r ? r : Math.round(l);
      return {
        width: i + "%",
        roundValue: s + "%"
      };
    }), o = U(() => {
      var {
        size: l,
        lineWidth: i,
        value: s
      } = e, u = n / (1 - ze(i) / ze(l)) * 2, d = "0 0 " + u + " " + u, v = R(s) > r ? r : Math.round(R(s)), f = "" + (r - v) / r * a, m = ze(i) / ze(l) * u;
      return {
        strokeWidth: m,
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
ev.render = J0;
const Ja = ev;
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
function ss(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function us(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: ds,
  classes: _0
} = re("pull-refresh"), vs = 150;
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
    [z(
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
    ), j(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var rv = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ne
  },
  props: Q0,
  setup(e) {
    var r = P(0), n = P(null), a = P(null), t = P(0), o = P("-125%"), l = P("arrow-down"), i = P("default"), s = P(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var p = us(function* (y) {
        if (l.value !== y)
          return l.value = y, new Promise((B) => {
            window.setTimeout(B, vs);
          });
      });
      return function(B) {
        return p.apply(this, arguments);
      };
    }(), b = U(() => i.value !== "loading" && i.value !== "success" && !e.disabled), w = U(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: C.value ? e.successBgColor : e.bgColor,
      color: C.value ? e.successColor : e.color
    })), g = U(() => Math.abs(2 * r.value)), C = U(() => i.value === "success"), O = (p) => {
      var y = "classList" in u ? u : document.body;
      y.classList[p](ds() + "--lock");
    }, T = (p) => {
      if (r.value === 0) {
        var {
          width: y
        } = Qe(a.value);
        r.value = -(y + y * 0.25);
      }
      v = p.touches[0].clientY, f = 0, d = sn(p.target);
    }, k = (p) => {
      if (!(!b.value || !d) && !(d !== u && pa(d) > 0)) {
        var y = pa(u);
        if (!(y > 0)) {
          var B = y === 0, V = p.touches[0];
          f = V.clientY - v, B && f >= 0 && p.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = p.touches[0].clientY), B && nr(o.value) && o.value > r.value && O("add");
          var G = (p.touches[0].clientY - t.value) / 2 + r.value;
          o.value = G >= g.value ? g.value : G, m(o.value >= g.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, M = /* @__PURE__ */ function() {
      var p = us(function* () {
        b.value && (s.value = !0, R(o.value) >= g.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = g.value * 0.3, S(e["onUpdate:modelValue"], !0), Le(() => {
          S(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, R(e.animationDuration))), d = null);
      });
      return function() {
        return p.apply(this, arguments);
      };
    }(), I = () => {
      u = e.target ? Ps(e.target, "PullRefresh") : sn(n.value);
    }, N = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    };
    return se(() => e.modelValue, (p) => {
      p === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, N();
      }, R(e.successDuration)));
    }), or(I), un(n, "touchmove", k), {
      n: ds,
      classes: _0,
      ICON_TRANSITION: vs,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: T,
      touchMove: k,
      touchEnd: M,
      iconName: l,
      controlStyle: w,
      isSuccess: C
    };
  }
});
rv.render = x0;
const Qa = rv;
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
}, nv = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function r1() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(nv);
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
  } = ir(nv);
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
    [z(
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
          style: K({
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
      }], [l, e.handleHovering, "desktop"]]), z(
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
var av = ee({
  name: "VarRadio",
  directives: {
    Ripple: Xe,
    Hover: Rr
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  inheritAttrs: !1,
  props: e1,
  setup(e) {
    var r = P(!1), n = U(() => r.value === e.checkedValue), a = P(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = n1(), {
      hovering: l,
      handleHovering: i
    } = vn(), {
      form: s,
      bindForm: u
    } = Vr(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Or(), b = (I) => {
      Le(() => {
        var {
          validateTrigger: N,
          rules: p,
          modelValue: y
        } = e;
        v(N, I, p, y);
      });
    }, w = (I) => {
      var {
        checkedValue: N,
        onChange: p
      } = e;
      t && r.value === N || (r.value = I, S(e["onUpdate:modelValue"], r.value), S(p, r.value), t == null || t.onToggle(N), b("onChange"));
    }, g = (I) => {
      var {
        disabled: N,
        readonly: p,
        uncheckedValue: y,
        checkedValue: B,
        onClick: V
      } = e;
      s != null && s.disabled.value || N || (S(V, I), !(s != null && s.readonly.value || p) && (a.value = !0, w(n.value ? y : B)));
    }, C = (I) => {
      var {
        checkedValue: N,
        uncheckedValue: p
      } = e;
      r.value = I === N ? N : p;
    }, O = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, T = () => f(e.rules, e.modelValue), k = (I) => {
      var {
        uncheckedValue: N,
        checkedValue: p
      } = e, y = ![N, p].includes(I);
      y && (I = n.value ? N : p), w(I);
    };
    se(() => e.modelValue, (I) => {
      r.value = I;
    }, {
      immediate: !0
    });
    var M = {
      sync: C,
      validate: T,
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
      n: a1,
      classes: t1,
      handleClick: g,
      toggle: k,
      reset: O,
      validate: T,
      resetValidation: m
    };
  }
});
av.render = o1;
const _a = av;
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
    [z(
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
var tv = ee({
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
    } = Or(), u = U(() => o.value), d = (g) => {
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
    }, m = () => i(e.rules, e.modelValue), b = () => {
      S(e["onUpdate:modelValue"], void 0), s();
    };
    se(() => e.modelValue, v), se(() => r.value, v);
    var w = {
      onToggle: f,
      validate: m,
      reset: b,
      resetValidation: s,
      errorMessage: u
    };
    return S(t, w), a(w), {
      errorMessage: o,
      n: s1,
      classes: u1,
      reset: b,
      validate: m,
      resetValidation: s
    };
  }
});
tv.render = d1;
const xa = tv;
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
  n: ia
} = re("rate"), f1 = ["onClick"];
function c1(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return h(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), $(
        Me,
        null,
        He(e.toNumber(e.count), (i) => $e((h(), $("div", {
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
var ov = ee({
  name: "VarRate",
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  directives: {
    Ripple: Xe,
    Hover: Rr
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
    } = vn(), s = P(-1), u = Number(e.modelValue), d = (k) => {
      var {
        count: M,
        gap: I
      } = e;
      return {
        color: f(k).color,
        marginRight: k !== R(M) ? be(I) : 0
      };
    }, v = (k) => {
      var {
        name: M,
        color: I
      } = f(k);
      return {
        [ia("content")]: !0,
        [ia("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [ia("--error")]: a.value,
        [ia("--primary")]: M !== e.emptyIcon && !I
      };
    }, f = (k) => {
      var {
        modelValue: M,
        disabled: I,
        disabledColor: N,
        color: p,
        half: y,
        emptyColor: B,
        icon: V,
        halfIcon: G,
        emptyIcon: W
      } = e, D = p;
      return (I || r != null && r.disabled.value) && (D = N), k <= R(M) ? {
        color: D,
        name: V
      } : y && k <= R(M) + 0.5 ? {
        color: D,
        name: G
      } : {
        color: I || r != null && r.disabled.value ? N : B,
        name: W
      };
    }, m = (k, M) => {
      var {
        half: I,
        clearable: N
      } = e;
      if (I) {
        var {
          offsetWidth: p
        } = M.target;
        M.offsetX <= Math.floor(p / 2) && (k -= 0.5);
      }
      u === k && N && (k = 0), u = k, S(e["onUpdate:modelValue"], k);
    }, b = () => o(e.rules, R(e.modelValue)), w = () => Le(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = (k, M) => {
      var {
        readonly: I,
        disabled: N,
        onChange: p
      } = e;
      I || N || r != null && r.disabled.value || r != null && r.readonly.value || (m(k, M), S(p, k), w());
    }, C = (k) => (M) => {
      s.value = k, i.value = M;
    }, O = () => {
      S(e["onUpdate:modelValue"], 0), l();
    }, T = {
      reset: O,
      validate: b,
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
      validate: b,
      resetValidation: l,
      toSizeUnit: be,
      toNumber: R,
      n: ia
    };
  }
});
ov.render = c1;
const et = ov;
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
}, h1 = (e) => (hn(""), e = e(), gn(), e), g1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, y1 = /* @__PURE__ */ h1(() => /* @__PURE__ */ z(
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
var iv = ee({});
iv.render = w1;
const C1 = iv;
var S1 = (e) => (hn(""), e = e(), gn(), e), k1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, $1 = /* @__PURE__ */ S1(() => /* @__PURE__ */ z(
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
var lv = ee({});
lv.render = P1;
const O1 = lv;
var V1 = (e) => (hn(""), e = e(), gn(), e), M1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, I1 = /* @__PURE__ */ V1(() => /* @__PURE__ */ z(
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
var sv = ee({});
sv.render = B1;
const N1 = sv;
var {
  n: D1,
  classes: A1
} = re("result");
function z1(e, r) {
  return h(), $(
    Me,
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
        style: K({
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
        style: K({
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
        style: K({
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
var uv = ee({
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
      toNumber: R
    };
  }
});
uv.render = z1;
const L1 = uv;
var R1 = (e) => (hn(""), e = e(), gn(), e), U1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Y1 = /* @__PURE__ */ R1(() => /* @__PURE__ */ z(
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
var dv = ee({});
dv.render = F1;
const j1 = dv;
var W1 = (e) => (hn(""), e = e(), gn(), e), G1 = {
  viewBox: "-4 -4 32 32"
}, q1 = /* @__PURE__ */ W1(() => /* @__PURE__ */ z(
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
var vv = ee({});
vv.render = K1;
const Z1 = vv;
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
      [z(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: K({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), we(ea(e.type), {
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
var fv = ee({
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
    var r = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? be(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? be(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: J1,
      classes: Q1,
      toNumber: R,
      toPxNum: ze,
      toSizeUnit: be,
      circleSize: r,
      borderSize: n
    };
  }
});
fv.render = _1;
const rt = fv;
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
      style: K({
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
var cv = ee({
  name: "VarRow",
  props: rw,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = sp(), t = U(() => {
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
cv.render = tw;
const nt = cv;
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
}, xe(Ji, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
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
      menu: ce(() => [z(
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
          default: ce(() => [z(
            "div",
            {
              class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
              style: K({
                textAlign: e.textAlign,
                color: e.textColor
              })
            },
            [z(
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
                style: K({
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
var mv = ee({
  name: "VarSelect",
  components: {
    VarIcon: Ne,
    VarMenu: Mn,
    VarChip: jn,
    VarFieldDecorator: Ad,
    VarFormDetails: ar
  },
  props: iw,
  setup(e) {
    var r = P(!1), n = P(!1), a = U(() => e.multiple), t = U(() => e.focusColor), o = P(""), l = P([]), i = U(() => Hr(e.modelValue)), s = U(() => e.disabled || e.readonly ? "" : "pointer"), u = P(0), {
      bindForm: d,
      form: v
    } = Vr(), {
      length: f,
      options: m,
      bindOptions: b
    } = h0(), {
      errorMessage: w,
      validateWithTrigger: g,
      validate: C,
      // expose
      resetValidation: O
    } = Or(), T = P(null), k = U(() => e.variant === "outlined" ? "bottom" : "cover-top"), M = U(() => {
      var {
        hint: H,
        blurColor: Z,
        focusColor: _
      } = e;
      if (!H)
        return w.value ? "var(--field-decorator-error-color)" : r.value ? _ || "var(--field-decorator-focus-color)" : Z || "var(--field-decorator-blur-color)";
    }), I = U(() => !e.hint && Hr(e.modelValue)), N = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var _ = Z;
        l.value = _.map(B);
      }
      !H && !Hr(Z) && (o.value = B(Z)), !H && Hr(Z) && (o.value = "");
    }, p = (H) => {
      Le(() => {
        var {
          validateTrigger: Z,
          rules: _,
          modelValue: fe
        } = e;
        g(Z, H, _, fe);
      });
    }, y = (H) => {
      var {
        value: Z,
        label: _
      } = H;
      return Z.value != null ? Z.value : _.value;
    }, B = (H) => {
      var Z, _, fe = m.find((Se) => {
        var {
          value: Ie
        } = Se;
        return Ie.value === H;
      });
      return fe || (fe = m.find((Se) => {
        var {
          label: Ie
        } = Se;
        return Ie.value === H;
      })), (Z = (_ = fe) == null ? void 0 : _.label.value) != null ? Z : "";
    }, V = () => {
      var {
        disabled: H,
        readonly: Z,
        onFocus: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (u.value = ze(e.offsetY), r.value = !0, S(_), p("onFocus"));
    }, G = () => {
      var {
        disabled: H,
        readonly: Z,
        onBlur: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (E(), S(_), p("onBlur"));
    }, W = (H) => {
      var {
        disabled: Z,
        readonly: _,
        multiple: fe,
        onChange: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || _)) {
        var Ie = fe ? m.filter((oe) => {
          var {
            selected: ve
          } = oe;
          return ve.value;
        }).map(y) : y(H);
        S(e["onUpdate:modelValue"], Ie), S(Se, Ie), p("onChange"), fe || E();
      }
    }, D = () => {
      var {
        disabled: H,
        readonly: Z,
        multiple: _,
        clearable: fe,
        onClear: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || H || Z || !fe)) {
        var Ie = _ ? [] : void 0;
        S(e["onUpdate:modelValue"], Ie), S(Se, Ie), p("onClear");
      }
    }, L = (H) => {
      var {
        disabled: Z,
        onClick: _
      } = e;
      v != null && v.disabled.value || Z || (S(_, H), p("onClick"));
    }, F = (H) => {
      var {
        disabled: Z,
        readonly: _,
        modelValue: fe,
        onClose: Se
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || _)) {
        var Ie = fe, oe = m.find((pe) => {
          var {
            label: Oe
          } = pe;
          return Oe.value === H;
        }), ve = Ie.filter((pe) => {
          var Oe;
          return pe !== ((Oe = oe.value.value) != null ? Oe : oe.label.value);
        });
        S(e["onUpdate:modelValue"], ve), S(Se, ve), p("onClose");
      }
    }, q = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var _ = Z;
        m.forEach((fe) => fe.sync(_.includes(y(fe))));
      } else
        m.forEach((fe) => fe.sync(Z === y(fe)));
      N();
    }, ne = () => {
      u.value = ze(e.offsetY), r.value = !0, n.value = !0;
    }, E = () => {
      r.value = !1, n.value = !1;
    }, A = () => C(e.rules, e.modelValue), X = () => {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    se(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      H && !Ve(Z) && Tr("Select", "The modelValue must be an array when multiple is true");
    }), se(() => e.modelValue, q, {
      deep: !0
    }), se(() => f.value, q);
    var ae = {
      multiple: a,
      focusColor: t,
      computeLabel: N,
      onSelect: W,
      reset: X,
      validate: A,
      resetValidation: O
    };
    return b(ae), S(d, ae), {
      offsetY: u,
      isFocus: r,
      showMenu: n,
      errorMessage: w,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: T,
      placement: k,
      cursor: s,
      placeholderColor: M,
      enableCustomPlaceholder: I,
      n: lw,
      classes: sw,
      handleFocus: V,
      handleBlur: G,
      handleClear: D,
      handleClick: L,
      handleClose: F,
      reset: X,
      validate: A,
      resetValidation: O,
      focus: ne,
      blur: E
    };
  }
});
mv.render = dw;
const at = mv;
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
          style: K({
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
            style: K({
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
              style: K({
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
          )) : x("v-if", !0), (h(!0), $(
            Me,
            null,
            He(e.toNumber(e.rows), (n, a) => (h(), $(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: K({
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (h(), $(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: K({
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
var pv = ee({
  name: "VarSkeleton",
  props: vw,
  setup() {
    return {
      n: fw,
      classes: cw,
      toSizeUnit: be,
      toNumber: R
    };
  }
});
pv.render = mw;
const tt = pv;
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
  n: fs,
  classes: gw
} = re("slider"), yw = ["onTouchstart"];
function bw(e, r) {
  var n = le("var-hover-overlay"), a = le("var-form-details"), t = Ae("hover");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(e.direction), e.n("$--box")))
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
            style: K({
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
            style: K(e.getFillStyle)
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
          style: K(e.thumbStyle(o)),
          onTouchstart: $r((l) => e.start(l, o.enumValue), ["stop"])
        }, [j(e.$slots, "button", {
          currentValue: o.text
        }, () => [$e(z(
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
        ), [[t, (l) => e.hover(l, o), "desktop"]]), z(
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
        ), z(
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
          [z(
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
var hv = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  directives: {
    Hover: Rr
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
    } = vn(), {
      hovering: u,
      handleHovering: d
    } = vn(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Le(() => t(["onChange"], "onChange", e.rules, e.modelValue)), b = P(null), w = P(0), g = P(!1), C = Re({
      [qe.First]: f(),
      [qe.Second]: f()
    }), O = U(() => R(e.max) - R(e.min)), T = U(() => w.value / O.value * R(e.step)), k = U(() => {
      var {
        modelValue: oe,
        range: ve
      } = e, pe = [];
      return ve && Ve(oe) ? pe = [{
        value: W(oe[0]),
        enumValue: qe.First,
        text: D(oe[0]),
        hovering: sa(i),
        handleHovering: s
      }, {
        value: W(oe[1]),
        enumValue: qe.Second,
        text: D(oe[1]),
        hovering: sa(u),
        handleHovering: d
      }] : nr(oe) && (pe = [{
        value: W(oe),
        enumValue: qe.First,
        text: D(oe),
        hovering: sa(i),
        handleHovering: s
      }]), pe;
    }), M = U(() => {
      var {
        activeColor: oe,
        range: ve,
        modelValue: pe
      } = e, Oe = ve && Ve(pe) ? W(Math.min(pe[0], pe[1])) : 0, je = ve && Ve(pe) ? W(Math.max(pe[0], pe[1])) - Oe : W(pe);
      return p.value ? {
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
    }), I = U(() => e.disabled || (n == null ? void 0 : n.disabled.value)), N = U(() => e.readonly || (n == null ? void 0 : n.readonly.value)), p = U(() => e.direction === "vertical"), y, B = (oe) => {
      var ve = oe.currentTarget;
      return ve ? p.value ? w.value - (oe.clientY - Qe(ve).top) : oe.clientX - nf(ve) : 0;
    }, V = (oe) => {
      var ve = p.value ? "bottom" : "left";
      return {
        [ve]: oe.value + "%",
        zIndex: C[oe.enumValue].active ? 1 : void 0
      };
    }, G = (oe) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : C[oe].active, W = (oe) => {
      var {
        min: ve,
        max: pe
      } = e;
      return oe < R(ve) ? 0 : oe > R(pe) ? 100 : (oe - R(ve)) / O.value * 100;
    }, D = (oe) => {
      if (!nr(oe))
        return 0;
      var ve = oe;
      ve < Number(e.min) && (ve = Number(e.min)), ve > Number(e.max) && (ve = Number(e.max));
      var pe = parseInt("" + ve, 10) === ve;
      return pe ? ve : R(ve.toPrecision(5));
    }, L = (oe, ve) => {
      I.value || ve.handleHovering(oe);
    }, F = (oe, ve) => {
      var pe = [], {
        step: Oe,
        range: je,
        modelValue: Ke,
        onChange: We,
        min: Ge
      } = e, ue = R(Oe), Ce = Math.round(oe / T.value), ge = Ce * ue + R(Ge), Te = C[ve].percentValue * ue + R(Ge);
      if (C[ve].percentValue = Ce, je && Ve(Ke) && (pe = ve === qe.First ? [ge, Ke[1]] : [Ke[0], ge]), Te !== ge) {
        var Pe = je ? pe.map((Ye) => D(Ye)) : D(ge);
        S(We, Pe), S(e["onUpdate:modelValue"], Pe), m();
      }
    }, q = (oe) => {
      if (!e.range)
        return qe.First;
      var ve = C[qe.First].percentValue * T.value, pe = C[qe.Second].percentValue * T.value, Oe = Math.abs(oe - ve), je = Math.abs(oe - pe);
      return Oe <= je ? qe.First : qe.Second;
    }, ne = () => {
      document.addEventListener("touchmove", X, {
        passive: !1
      }), document.addEventListener("touchend", ae), document.addEventListener("touchcancel", ae);
    }, E = () => {
      document.removeEventListener("touchmove", X), document.removeEventListener("touchend", ae), document.removeEventListener("touchcancel", ae);
    }, A = (oe, ve) => {
      if (w.value || (w.value = b.value.offsetWidth), I.value || (C[ve].active = !0), y = ve, ne(), !(I.value || N.value)) {
        S(e.onStart), g.value = !0;
        var {
          clientX: pe,
          clientY: Oe
        } = oe.touches[0];
        C[ve].startPosition = p.value ? Oe : pe;
      }
    }, X = (oe) => {
      if (oe.preventDefault(), !(I.value || N.value || !g.value)) {
        var {
          startPosition: ve,
          currentOffset: pe
        } = C[y], {
          clientX: Oe,
          clientY: je
        } = oe.touches[0], Ke = (p.value ? ve - je : Oe - ve) + pe;
        Ke <= 0 ? Ke = 0 : Ke >= w.value && (Ke = w.value), F(Ke, y);
      }
    }, ae = () => {
      E();
      var {
        range: oe,
        modelValue: ve,
        onEnd: pe,
        step: Oe,
        min: je
      } = e;
      if (I.value || (C[y].active = !1), !(I.value || N.value)) {
        var Ke = [];
        C[y].currentOffset = C[y].percentValue * T.value;
        var We = C[y].percentValue * R(Oe) + R(je);
        oe && Ve(ve) && (Ke = y === qe.First ? [We, ve[1]] : [ve[0], We]), S(pe, oe ? Ke : We), g.value = !1;
      }
    }, H = (oe) => {
      if (!(I.value || N.value) && !oe.target.closest("." + fs("thumb"))) {
        var ve = B(oe), pe = q(ve);
        y = pe, F(ve, pe), ae();
      }
    }, Z = () => {
      var oe = R(e.step);
      return isNaN(oe) ? (ul("Slider", 'type of prop "step" should be Number'), !1) : oe < 0 ? (ul("Slider", '"step" should be > 0'), !1) : !0;
    }, _ = () => {
      var {
        range: oe,
        modelValue: ve
      } = e;
      return oe && !Ve(ve) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !oe && Ve(ve) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : oe && Ve(ve) && ve.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, fe = function(oe, ve) {
      oe === void 0 && (oe = e.modelValue), ve === void 0 && (ve = R(e.step));
      var pe = (Oe) => {
        var {
          min: je,
          max: Ke
        } = e;
        return Oe < R(je) ? 0 : Oe > R(Ke) ? O.value / ve : (Oe - R(je)) / ve;
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
      !Z() || !_() || g.value || fe(ve, R(pe));
    }), se(w, () => fe()), or(() => {
      !Z() || !_() || (w.value = b.value[p.value ? "offsetHeight" : "offsetWidth"]);
    }), to(() => {
      E();
    }), {
      n: fs,
      classes: gw,
      Thumbs: qe,
      sliderEl: b,
      getFillStyle: M,
      isDisabled: I,
      isVertical: p,
      thumbStyle: V,
      errorMessage: a,
      thumbsProps: C,
      thumbList: k,
      hover: L,
      multiplySizeUnit: ur,
      toNumber: R,
      showLabel: G,
      start: A,
      move: X,
      end: ae,
      click: H
    };
  }
});
hv.render = bw;
const ot = hv;
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
  return xi.includes(e);
}
var gv = {
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
  loadingType: xe(an, "type"),
  loadingSize: xe(an, "size"),
  loadingRadius: xe(an, "radius"),
  loadingColor: ki({}, xe(an, "color"), {
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
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [z(
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
      ), z(
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
      ), z(
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
  )), [[Gr, e.show]]);
}
var yv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: dn,
    VarIcon: Ne
  },
  props: gv,
  setup(e) {
    var r = P(null), {
      zIndex: n
    } = $t(() => e.show, 1);
    vo(() => e.show, () => e.lockScroll);
    var a = U(() => e.type === "loading" || e.forbidClick), t = U(() => e.type ? $w[e.type] : ""), o = () => {
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
      SNACKBAR_TYPE: xi,
      n: Sw,
      classes: kw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
yv.render = Tw;
const bv = yv;
var {
  n: Pw
} = re("snackbar");
function Ow(e, r) {
  var n = le("var-snackbar-core");
  return h(), we(pn, {
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
var wv = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: bv
  },
  props: gv,
  setup() {
    var {
      disabled: e
    } = Bi();
    return {
      n: Pw,
      disabled: e
    };
  }
});
wv.render = Ow;
const $o = wv;
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
var xi = ["loading", "success", "warning", "info", "error"], cs = 0, $i = !1, Cv, Qn = !1, Sv = {
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
}, kr = Re([]), el = Sv, Mw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, No = (e) => () => ra(e) ? e() : e, Iw = {
  setup() {
    return () => {
      var e = kr.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Qn && (a.position = "top");
        var l = Qn ? "relative" : "absolute", i = it({
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
        return Q(bv, De(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Q(Zv, De(Mw, {
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
}, Kr = function(e) {
  var r = Dw(e), n = Re(it({}, el, r));
  n.show = !0, $i || ($i = !0, Cv = ta(Iw).unmountInstance);
  var {
    length: a
  } = kr, t = {
    id: cs++,
    reactiveSnackOptions: n
  };
  if (a === 0 || Qn)
    Nw(t);
  else {
    var o = "update-" + cs;
    Aw(n, o);
  }
  return {
    clear() {
      !Qn && kr.length ? kr[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
xi.forEach((e) => {
  Kr[e] = (r) => (Vi(r) ? r.type = e : r = {
    content: r,
    type: e
  }, Kr(r));
});
Kr.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Qn && (kr.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), Qn = e);
};
Kr.clear = function() {
  kr.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Kr.setDefaultOptions = function(e) {
  el = e;
};
Kr.resetDefaultOptions = function() {
  el = Sv;
};
function Ew(e) {
  var r = e.getAttribute("data-id"), n = kr.find((a) => a.id === R(r));
  n && S(n.reactiveSnackOptions.onOpened);
}
function Bw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = kr.find((t) => t.id === R(r));
  n && (n.animationEnd = !0, S(n.reactiveSnackOptions.onClosed));
  var a = kr.every((t) => t.animationEnd);
  a && (S(Cv), kr = Re([]), $i = !1);
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
Kr.Component = $o;
te($o);
te($o, Kr);
var a$ = $o;
const Ti = Kr;
var kv = (e) => ["mini", "small", "normal", "large"].includes(e), Lw = (e) => kv(e) || Ve(e) || nr(e) || Fe(e), Rw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Uw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Yw = {
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
      } = e, v = (t = S(n.default)) != null ? t : [], f = kv(d), [m, b] = a(d, f);
      v = Ds(v);
      var w = v.length - 1, g = v.map((C, O) => {
        var T = Hw(m, b, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: w
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
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
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
}, $v = Symbol("STEPS_BIND_STEP_KEY");
function Ww() {
  var {
    bindChildren: e,
    childProviders: r
  } = lr($v);
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
  } = ir($v);
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
    [z(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [z(
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
      ), z(
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
      ), z(
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
var Tv = ee({
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
    } = r, s = U(() => a.value === e.value), u = U(() => e.value !== -1 && R(a.value) > e.value), d = {
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
Tv.render = Zw;
const st = Tv;
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
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Pv = ee({
  name: "VarSteps",
  props: Qw,
  setup(e) {
    var r = U(() => e.active), n = U(() => e.activeColor), a = U(() => e.inactiveColor), t = U(() => e.direction), {
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
Pv.render = xw;
const ut = Pv;
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
    return () => ws(e.tag, {
      class: rC(),
      style: Bs(e.styleVars)
    }, S(n.default));
  }
});
const To = nC;
var Ao = [];
function dt(e) {
  Ao.forEach((n) => document.documentElement.style.removeProperty(n)), Ao.length = 0;
  var r = Bs(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Ao.push(a);
  });
}
dt.Component = To;
te(To);
te(To, dt);
var l$ = To, aC = {
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
} = re("switch"), iC = (e) => (hn(""), e = e(), gn(), e), lC = /* @__PURE__ */ iC(() => /* @__PURE__ */ z(
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
)), sC = [lC];
function uC(e, r) {
  var n = le("var-hover-overlay"), a = le("var-form-details"), t = Ae("ripple"), o = Ae("hover");
  return $e((h(), $(
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
        style: K(e.styleComputed.switch)
      },
      [z(
        "div",
        {
          style: K(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), $e((h(), $(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [z(
          "div",
          {
            style: K(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), $(
            "span",
            {
              key: 0,
              class: c(e.n("loading")),
              style: K({
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
var Ov = ee({
  name: "VarSwitch",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  directives: {
    Ripple: Xe,
    Hover: Rr
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
    } = vn(), u = () => o(e.rules, e.modelValue), d = () => Le(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = U(() => {
      var {
        size: C,
        modelValue: O,
        color: T,
        closeColor: k,
        loadingColor: M,
        activeValue: I
      } = e;
      return {
        handle: {
          width: ur(C),
          height: ur(C),
          backgroundColor: O === I ? T : k,
          color: M
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
    }), f = U(() => ur(e.size, 0.4)), m = (C) => {
      var {
        onClick: O,
        onChange: T,
        disabled: k,
        loading: M,
        readonly: I,
        modelValue: N,
        activeValue: p,
        inactiveValue: y,
        "onUpdate:modelValue": B
      } = e;
      if (S(O, C), !(k || M || I || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var V = N === p ? y : p;
        S(T, V), S(B, V), d();
      }
    }, b = (C) => {
      e.disabled || n != null && n.disabled.value || s(C);
    }, w = () => {
      S(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, g = {
      reset: w,
      validate: u,
      resetValidation: l
    };
    return S(r, g), {
      n: tC,
      classes: oC,
      multiplySizeUnit: ur,
      switchActive: m,
      hovering: i,
      hover: b,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly
    };
  }
});
Ov.render = uC;
const vt = Ov;
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
}, Vv = Symbol("TABS_BIND_TAB_KEY");
function vC() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Vv);
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
  } = ir(Vv);
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
      style: K({
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
var Mv = ee({
  name: "VarTab",
  directives: {
    Ripple: Xe
  },
  props: dC,
  setup(e) {
    var r = P(null), n = U(() => e.name), a = U(() => e.disabled), t = U(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = fC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: b
    } = l, w = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(w);
    var g = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), C = () => e.disabled ? f.value : g() ? d.value : v.value, O = () => e.disabled ? Rt("$-tab--disabled") : g() ? Rt("$-tab--active") : Rt("$-tab--inactive"), T = (k) => {
      var {
        disabled: M,
        name: I,
        onClick: N
      } = e;
      M || (S(N, I ?? o.value, k), s(w));
    };
    return se(() => e.name, b), se(() => e.disabled, b), {
      n: Rt,
      classes: cC,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: C,
      computeColorClass: O,
      handleClick: T
    };
  }
});
Mv.render = mC;
const ft = Mv;
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
var Iv = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: On
  },
  props: pC,
  setup(e) {
    var r = P(!1), n = U(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Kb(), {
      bindLists: o
    } = Zb(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: U(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: hC,
      classes: gC,
      current: r
    };
  }
});
Iv.render = yC;
const ct = Iv;
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
    [z(
      "div",
      {
        class: c(e.n("main"))
      },
      [z(
        "table",
        {
          class: c(e.n("table")),
          style: K({
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
var Ev = ee({
  name: "VarTable",
  props: bC,
  setup() {
    return {
      toSizeUnit: be,
      n: wC,
      classes: CC,
      formatElevation: pr
    };
  }
});
Ev.render = SC;
const mt = Ev;
te(mt);
var v$ = mt;
function ms(e) {
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
    validator: ms
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ms
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
function ps(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function hs(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ps(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ps(o, a, t, l, i, "throw", s);
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
  return h(), we(ea(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [z(
      "div",
      De({
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
        [j(e.$slots, "default"), z(
          "div",
          {
            class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
            style: K({
              width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
              height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
              transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
            })
          },
          [z(
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
var Bv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Vn
  },
  inheritAttrs: !1,
  props: TC,
  setup(e) {
    var r = P("0px"), n = P("0px"), a = P("0px"), t = P("0px"), o = P(!1), l = P(null), i = U(() => e.active), s = U(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = U(() => e.activeColor), d = U(() => e.inactiveColor), v = U(() => e.disabledColor), f = U(() => e.itemDirection), m = P(null), {
      tabList: b,
      bindTabList: w,
      length: g
    } = vC(), C = (V) => {
      var G, W = (G = V.name.value) != null ? G : V.index.value, {
        active: D,
        onChange: L,
        onClick: F
      } = e;
      S(e["onUpdate:active"], W), S(F, W), W !== D && S(L, W);
    }, O = () => b.find((V) => {
      var {
        name: G
      } = V;
      return e.active === G.value;
    }), T = (V) => b.find((G) => {
      var {
        index: W
      } = G;
      return (V ?? e.active) === W.value;
    }), k = () => {
      if (g.value !== 0) {
        var {
          active: V
        } = e;
        if (nr(V)) {
          var G = Rn(V, 0, g.value - 1);
          return S(e["onUpdate:active"], G), T(G);
        }
      }
    }, M = () => {
      o.value = e.scrollable === "always" || b.length >= 5;
    }, I = (V) => {
      var {
        element: G
      } = V, W = G.value;
      W && (e.layoutDirection === "horizontal" ? (r.value = W.offsetWidth + "px", a.value = W.offsetLeft + "px") : (n.value = W.offsetHeight + "px", t.value = W.offsetTop + "px"));
    }, N = (V) => {
      var {
        element: G
      } = V;
      if (o.value) {
        var W = l.value, D = G.value;
        if (e.layoutDirection === "horizontal") {
          var L = D.offsetLeft + D.offsetWidth / 2 - W.offsetWidth / 2;
          ha(W, {
            left: L,
            animation: Lo
          });
        } else {
          var F = D.offsetTop + D.offsetHeight / 2 - W.offsetHeight / 2;
          ha(W, {
            top: F,
            animation: Lo
          });
        }
      }
    }, p = () => {
      var V = O() || T() || k();
      !V || V.disabled.value || (M(), I(V), N(V));
    }, y = /* @__PURE__ */ function() {
      var V = hs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), B = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: p,
      onTabClick: C
    };
    return w(B), se(() => g.value, /* @__PURE__ */ hs(function* () {
      yield Dr(), p();
    })), se(() => e.active, p), se(() => e.scrollable, p), mn(p), St(p), {
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
      n: PC,
      classes: OC,
      resize: p,
      resizeSticky: y,
      formatElevation: pr
    };
  }
});
Bv.render = VC;
const pt = Bv;
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
function gs(e, r, n, a, t, o, l) {
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
        gs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        gs(o, a, t, l, i, "throw", s);
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
var Nv = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: Pn
  },
  props: MC,
  setup(e) {
    var r = P(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = Xb(), o = (v) => n.find((f) => {
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
      m && (n.forEach((b) => {
        var {
          setCurrent: w
        } = b;
        return w(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((w) => {
        var {
          index: g
        } = w;
        return g.value === v;
      }), b = (f = m.name.value) != null ? f : m.index.value;
      S(e["onUpdate:active"], b);
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
Nv.render = BC;
const ht = Nv;
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
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], dr = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ys = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
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
}, Dv = (e, r) => e === "24hr" || r === "am", rl = (e, r, n) => {
  var a = Cr.findIndex((o) => R(o) === R(n)), t = Dv(e, r) ? n : dr[a];
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
}, Av = (e) => {
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
  } = rl(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: b,
      minute: w
    } = cr(i);
    f = b === v && a > w;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: C
    } = cr(s);
    f = g === v && a < C;
  }
  if (i && s) {
    var {
      hour: O,
      minute: T
    } = cr(i), {
      hour: k,
      minute: M
    } = cr(s);
    f = k === v && a < M || O === v && a > T;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, zv = (e) => {
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
  } = rl(t, o, l), m = !1, b = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: w,
      minute: g,
      second: C
    } = cr(s);
    m = w === f && g < i || g === i && a > C;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: T,
      second: k
    } = cr(u);
    m = O === f && T > i || T === i && a > k;
  }
  if (s && u) {
    var {
      hour: M,
      minute: I,
      second: N
    } = cr(s), {
      hour: p,
      minute: y,
      second: B
    } = cr(u);
    m = M === f && I < i || p === f && y > i || M === f && I === i && a > N || p === f && y === i && a < B;
  }
  return (r = e.allowedTime) != null && r.seconds && (b = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || b;
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
    [z(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: K(e.handStyle)
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
          style: K(e.getStyle(a, n, !1))
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
            style: K(e.getStyle(a, n, !0))
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
var Lv = ee({
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
    } = r, a = P(null), t = P([]), o = P([]), l = U(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = U(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = U(() => e.type === "hour" ? Cr : ys), u = (g, C) => {
      var O;
      g = (O = g) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var T = e.type === "minute" ? Av : zv, k = {
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
      return C && e.type === "minute" && Reflect.deleteProperty(k, "minute"), T(k);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? dr[i.value] : s.value[i.value];
      return s.value === ys ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, C) => C ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (Dv(e.format, e.ampm))
          return t.value.includes(g);
        var C = Cr.findIndex((O) => O === g);
        return o.value.includes(C);
      }
      return u(g, !0);
    }, m = (g, C, O) => {
      var T = 2 * Math.PI / 12 * g - Math.PI / 2, k = 50 * (1 + Math.cos(T)), M = 50 * (1 + Math.sin(T)), I = () => v(g, O) ? f(C) ? {
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
        color: p
      } = I();
      return {
        left: k + "%",
        top: M + "%",
        backgroundColor: N,
        color: p
      };
    }, b = () => {
      var {
        width: g,
        height: C
      } = Qe(a.value);
      return {
        width: g,
        height: C
      };
    }, w = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? Cr : dr;
        return Sn(g[i.value], 2, "0");
      }
    };
    return se([i, () => e.isInner], (g, C) => {
      var [O, T] = g, [k, M] = C, I = O === k && T === M;
      if (!(I || e.type !== "hour" || i.value === void 0)) {
        var N = T ? dr[i.value] : w(), p = e.useSeconds ? ":" + e.time.second : "", y = N + ":" + e.time.minute + p;
        e.preventNextUpdate || n("update", y), n("change-prevent-update");
      }
    }), se(() => e.rad, (g, C) => {
      if (!(e.type === "hour" || g === void 0 || C === void 0)) {
        var O = g / 6 >= 0 ? g / 6 : g / 6 + 60, T = C / 6 >= 0 ? C / 6 : C / 6 + 60;
        if (O !== T) {
          var k, {
            hourStr: M
          } = rl(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var I = de().minute(O).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            k = M + ":" + I + N;
          }
          if (e.type === "second") {
            var p = de().second(O).format("ss"), y = e.useSeconds ? ":" + p : "";
            k = M + ":" + e.time.minute + y;
          }
          n("update", k);
        }
      }
    }), se([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [C, O, T] = g;
      if (t.value = [], C && !O) {
        var {
          hour: k
        } = cr(C), M = Cr.filter((q) => R(q) > k), I = dr.filter((q) => R(q) > k);
        t.value = [...M, ...I];
      }
      if (!C && O) {
        var {
          hour: N
        } = cr(O), p = Cr.filter((q) => R(q) < N), y = dr.filter((q) => R(q) < N);
        t.value = [...p, ...y];
      }
      if (C && O) {
        var {
          hour: B
        } = cr(C), {
          hour: V
        } = cr(O), G = Cr.filter((q) => R(q) < V || R(q) > B), W = dr.filter((q) => R(q) < V || R(q) > B);
        t.value = [...G, ...W];
      }
      if (T != null && T.hours) {
        var {
          hours: D
        } = T, L = Cr.filter((q) => !D(R(q))), F = dr.filter((q) => !D(R(q)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...L, ...F])];
      }
      o.value = t.value.map((q) => dr.findIndex((ne) => q === ne)).filter((q) => q >= 0);
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
      getSize: b,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
Lv.render = kS;
const $S = Lv;
var {
  n: TS,
  classes: PS
} = re("time-picker"), OS = (e) => (hn(""), e = e(), gn(), e), VS = /* @__PURE__ */ OS(() => /* @__PURE__ */ z(
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
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: K({
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
          ie(e.time.hour),
          3
          /* TEXT, CLASS */
        ), VS, z(
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
var Rv = ee({
  name: "VarTimePicker",
  components: {
    Clock: $S
  },
  props: wS,
  setup(e) {
    var r = P(null), n = P(null), a = P(null), t = P(!1), o = P(!1), l = P(!1), i = P(!1), s = P(!1), u = P(void 0), d = P(0), v = P(0), f = P("hour"), m = P("am"), b = P(!1), w = P(!1), g = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = Re({
      x: 0,
      y: 0
    }), O = Re({
      x: [],
      y: []
    }), T = U(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), k = (A) => {
      S(e["onUpdate:modelValue"], A), S(e.onChange, A);
    }, M = (A) => A * 57.29577951308232, I = (A) => {
      i.value = !1, w.value = !1, f.value = A;
    }, N = (A) => {
      var {
        disableHour: X
      } = a.value, ae = Cr.findIndex((_) => R(_) === R(g.value.hour)), H = A === "am" ? Cr : dr, Z = [...H.slice(ae), ...H.slice(0, ae)];
      return Z.find((_, fe) => (o.value = fe !== 0, !X.includes(_)));
    }, p = (A) => {
      if (!e.readonly) {
        m.value = A;
        var X = N(A);
        if (X) {
          var ae = e.useSeconds ? ":" + g.value.second : "", H = Sn(X, 2, "0") + ":" + g.value.minute + ae;
          k(H);
        }
      }
    }, y = (A, X) => {
      var ae = A >= O.x[0] && A <= O.x[1], H = X >= O.y[0] && X <= O.y[1];
      return ae && H;
    }, B = (A) => {
      var X = e.format === "24hr" ? "HH" : "hh", {
        hour: ae,
        minute: H,
        second: Z
      } = cr(A);
      return {
        hour: de().hour(ae).format(X),
        minute: de().minute(H).format("mm"),
        second: de().second(Z).format("ss")
      };
    }, V = (A) => {
      var X = A / 30;
      return X >= 0 ? X : X + 12;
    }, G = () => {
      var {
        width: A,
        height: X
      } = a.value.getSize(), ae = C.x - A / 2 - 8, H = C.x + A / 2 + 8, Z = C.y - X / 2 - 8, _ = C.y + X / 2 + 8;
      return {
        rangeXMin: ae,
        rangeXMax: H,
        rangeYMin: Z,
        rangeYMax: _
      };
    }, W = (A, X, ae) => {
      var {
        disableHour: H
      } = a.value;
      l.value = y(A, X);
      var Z = Math.round(ae / 30) * 30 + 90, _ = V(Z), fe = t.value ? Cr[_] : dr[_];
      if (H.includes(fe) || (t.value = e.format === "24hr" ? y(A, X) : !1), t.value === l.value) {
        var Se = t.value || m.value === "pm" ? dr[_] : Cr[_];
        b.value = H.includes(Se), !b.value && (u.value = Z, i.value = !0);
      }
    }, D = (A) => {
      var {
        disableHour: X
      } = a.value, ae = Math.round(A / 6) * 6 + 90, H = ae / 6 >= 0 ? ae / 6 : ae / 6 + 60, Z = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      w.value = Av(Z), !w.value && (d.value = ae, s.value = !0);
    }, L = (A) => {
      var {
        disableHour: X
      } = a.value, ae = Math.round(A / 6) * 6 + 90, H = ae / 6 >= 0 ? ae / 6 : ae / 6 + 60, Z = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: R(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      zv(Z) || (v.value = ae);
    }, F = () => {
      var {
        left: A,
        top: X,
        width: ae,
        height: H
      } = Qe(r.value);
      if (C.x = A + ae / 2, C.y = X + H / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Z,
          rangeXMax: _,
          rangeYMin: fe,
          rangeYMax: Se
        } = G();
        O.x = [Z, _], O.y = [fe, Se];
      }
    }, q = (A) => {
      if (A.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: X,
          clientY: ae
        } = A.touches[0], H = X - C.x, Z = ae - C.y, _ = Math.round(M(Math.atan2(Z, H)));
        f.value === "hour" ? W(X, ae, _) : f.value === "minute" ? D(_) : L(_);
      }
    }, ne = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, E = () => {
      o.value = !1;
    };
    return se(() => e.modelValue, (A) => {
      if (A) {
        var {
          hour: X,
          minute: ae,
          second: H
        } = cr(A), Z = de().hour(X).format("hh"), _ = de().hour(X).format("HH"), fe = de().minute(ae).format("mm"), Se = de().second(H).format("ss");
        u.value = (Z === "12" ? 0 : R(Z)) * 30, d.value = R(fe) * 6, v.value = R(Se) * 6, g.value = B(A), e.format !== "24hr" && (m.value = Sn("" + X, 2, "0") === _ && dr.includes(_) ? "pm" : "am"), t.value = e.format === "24hr" && dr.includes(_);
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
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: q,
      checkPanel: I,
      checkAmpm: p,
      end: ne,
      update: k,
      changePreventUpdate: E,
      formatElevation: pr
    };
  }
});
Rv.render = IS;
const gt = Rv;
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
function bs(e, r, n, a, t, o, l) {
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
        bs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        bs(o, a, t, l, i, "throw", s);
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
    [z(
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
        }, [z(
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
          style: K({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, LS)) : x("v-if", !0), z(
          "div",
          {
            class: c(e.n("file-indicator"))
          },
          [z(
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
        [z("input", {
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
var Uv = ee({
  name: "VarUploader",
  directives: {
    Ripple: Xe,
    Hover: Rr
  },
  components: {
    VarIcon: Ne,
    VarPopup: Lr,
    VarFormDetails: ar,
    VarHoverOverlay: Pr
  },
  props: ES,
  setup(e) {
    var r = P(null), n = P(!1), a = P(null), t = U(() => {
      var {
        maxlength: q,
        modelValue: {
          length: ne
        }
      } = e;
      return nr(q) ? ne + " / " + q : "";
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
    } = vn(), m = U(() => {
      var {
        modelValue: q,
        hideList: ne
      } = e;
      return ne ? [] : q;
    }), b = (q) => {
      var {
        disabled: ne,
        readonly: E,
        previewed: A
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || ne || E || !A)) {
        var {
          url: X
        } = q;
        if (Fe(X) && il(X)) {
          zr(X);
          return;
        }
        Fe(X) && ll(X) && (a.value = q, n.value = !0);
      }
    }, w = (q) => ({
      id: DS++,
      url: "",
      cover: "",
      name: q.name,
      file: q,
      progress: 0
    }), g = (q) => {
      var ne = q.target, {
        files: E
      } = ne;
      return Array.from(E);
    }, C = (q) => new Promise((ne) => {
      if (!q.file.type.startsWith("image")) {
        ne(q);
        return;
      }
      var E = new FileReader();
      E.onload = () => {
        var A = E.result;
        q.cover = A, q.url = A, ne(q);
      }, E.readAsDataURL(q.file);
    }), O = (q) => q.map(C), T = (q) => {
      var {
        onBeforeRead: ne
      } = e;
      return q.map((E) => new Promise((A) => {
        ne || A({
          valid: !0,
          varFile: E
        });
        var X = Ut(S(ne, Re(E)));
        Promise.all(X).then((ae) => {
          A({
            valid: ae.every(Boolean),
            varFile: E
          });
        });
      }));
    }, k = /* @__PURE__ */ function() {
      var q = zo(function* (ne) {
        var {
          maxsize: E,
          maxlength: A,
          modelValue: X,
          onOversize: ae,
          onAfterRead: H,
          onBeforeFilter: Z,
          readonly: _,
          disabled: fe
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || fe || _)) {
          var Se = (We) => We.filter((Ge) => Ge.file.size > R(E) ? (S(ae, Re(Ge)), !1) : !0), Ie = (We) => {
            var Ge = Math.min(We.length, R(A) - X.length);
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
          }(), ve = g(ne), pe = ve.map(w);
          pe = yield oe(pe), pe = E != null ? Se(pe) : pe, pe = A != null ? Ie(pe) : pe;
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
          S(e["onUpdate:modelValue"], [...X, ...Ke]), ne.target.value = "", Ke.forEach((We) => S(H, Re(We)));
        }
      });
      return function(E) {
        return q.apply(this, arguments);
      };
    }(), M = /* @__PURE__ */ function() {
      var q = zo(function* (ne) {
        var {
          disabled: E,
          readonly: A,
          modelValue: X,
          onBeforeRemove: ae,
          onRemove: H
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || E || A)) {
          if (ae) {
            var Z = Ut(S(ae, Re(ne)));
            if ((yield Promise.all(Z)).some((fe) => !fe))
              return;
          }
          var _ = X.filter((fe) => fe !== ne);
          S(H, Re(ne)), G("onRemove"), S(e["onUpdate:modelValue"], _);
        }
      });
      return function(E) {
        return q.apply(this, arguments);
      };
    }(), I = () => e.modelValue.filter((q) => q.state === "success"), N = () => e.modelValue.filter((q) => q.state === "error"), p = () => e.modelValue.filter((q) => q.state === "loading"), y = () => {
      r.value.click();
    }, B = () => {
      a.value = null, n.value = !1, zr.close();
    }, V = {
      getSuccess: I,
      getError: N,
      getLoading: p
    }, G = (q) => {
      Le(() => {
        var {
          validateTrigger: ne,
          rules: E,
          modelValue: A
        } = e;
        s(ne, q, E, A, V);
      });
    }, W = !1, D = () => u(e.rules, e.modelValue, V), L = () => {
      W = !0, S(e["onUpdate:modelValue"], []), d();
    }, F = {
      validate: D,
      resetValidation: d,
      reset: L
    };
    return S(l, F), se(() => e.modelValue, () => {
      !W && G("onChange"), W = !1;
    }, {
      deep: !0
    }), {
      n: BS,
      classes: NS,
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
      toNumber: R,
      handleHovering: f,
      isHTMLSupportVideo: ll,
      isHTMLSupportImage: il,
      preview: b,
      handleChange: k,
      handleRemove: M,
      getSuccess: I,
      getError: N,
      getLoading: p,
      validate: D,
      resetValidation: d,
      reset: L,
      chooseFile: y,
      closePreview: B,
      toSizeUnit: be
    };
  }
});
Uv.render = YS;
const yt = Uv;
te(yt);
var h$ = yt;
const HS = "2.13.1";
function FS(e) {
  qr.install && e.use(qr), ga.install && e.use(ga), ba.install && e.use(ba), wa.install && e.use(wa), Ca.install && e.use(Ca), Yn.install && e.use(Yn), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), vr.install && e.use(vr), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Hn.install && e.use(Hn), Fn.install && e.use(Fn), Va.install && e.use(Va), jn.install && e.use(jn), Ma.install && e.use(Ma), Ia.install && e.use(Ia), Ea.install && e.use(Ea), yr.install && e.use(yr), Ba.install && e.use(Ba), Da.install && e.use(Da), Aa.install && e.use(Aa), Xr.install && e.use(Xr), za.install && e.use(za), qn.install && e.use(qn), Ua.install && e.use(Ua), Ya.install && e.use(Ya), Tn.install && e.use(Tn), ar.install && e.use(ar), Rr.install && e.use(Rr), Pr.install && e.use(Pr), Ne.install && e.use(Ne), Ha.install && e.use(Ha), zr.install && e.use(zr), Fa.install && e.use(Fa), ja.install && e.use(ja), Jn.install && e.use(Jn), ya.install && e.use(ya), Wa.install && e.use(Wa), Ga.install && e.use(Ga), dn.install && e.use(dn), wi.install && e.use(wi), Wo.install && e.use(Wo), Mn.install && e.use(Mn), qa.install && e.use(qa), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Za.install && e.use(Za), In.install && e.use(In), Lr.install && e.use(Lr), Ja.install && e.use(Ja), Qa.install && e.use(Qa), _a.install && e.use(_a), xa.install && e.use(xa), et.install && e.use(et), rt.install && e.use(rt), Xe.install && e.use(Xe), nt.install && e.use(nt), at.install && e.use(at), tt.install && e.use(tt), ot.install && e.use(ot), Ti.install && e.use(Ti), lt.install && e.use(lt), st.install && e.use(st), ut.install && e.use(ut), Vn.install && e.use(Vn), dt.install && e.use(dt), Pn.install && e.use(Pn), On.install && e.use(On), vt.install && e.use(vt), ft.install && e.use(ft), ct.install && e.use(ct), mt.install && e.use(mt), pt.install && e.use(pt), ht.install && e.use(ht), Oi.install && e.use(Oi), gt.install && e.use(gt), Zn.install && e.use(Zn), yt.install && e.use(yt);
}
const g$ = {
  version: HS,
  install: FS,
  ActionSheet: qr,
  AppBar: ga,
  Avatar: ba,
  AvatarGroup: wa,
  BackTop: Ca,
  Badge: Yn,
  BottomNavigation: Sa,
  BottomNavigationItem: ka,
  Breadcrumb: $a,
  Breadcrumbs: Ta,
  Button: vr,
  ButtonGroup: Pa,
  Card: Oa,
  Cell: Hn,
  Checkbox: Fn,
  CheckboxGroup: Va,
  Chip: jn,
  Col: Ma,
  Collapse: Ia,
  CollapseItem: Ea,
  Context: yr,
  Countdown: Ba,
  Counter: Da,
  DatePicker: Aa,
  Dialog: Xr,
  Divider: za,
  Drag: qn,
  Ellipsis: Ua,
  Fab: Ya,
  Form: Tn,
  FormDetails: ar,
  Hover: Rr,
  HoverOverlay: Pr,
  Icon: Ne,
  Image: Ha,
  ImagePreview: zr,
  IndexAnchor: Fa,
  IndexBar: ja,
  Input: Jn,
  Lazy: ya,
  Link: Wa,
  List: Ga,
  Loading: dn,
  LoadingBar: wi,
  Locale: Wo,
  Menu: Mn,
  Option: qa,
  Overlay: Xa,
  Pagination: Ka,
  Paper: Za,
  Picker: In,
  Popup: Lr,
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
  Swipe: Pn,
  SwipeItem: On,
  Switch: vt,
  Tab: ft,
  TabItem: ct,
  Table: mt,
  Tabs: pt,
  TabsItems: ht,
  Themes: Oi,
  TimePicker: gt,
  Tooltip: Zn,
  Uploader: yt
};
export {
  qr as ActionSheet,
  ga as AppBar,
  ba as Avatar,
  wa as AvatarGroup,
  Ca as BackTop,
  Yn as Badge,
  Sa as BottomNavigation,
  ka as BottomNavigationItem,
  $a as Breadcrumb,
  Ta as Breadcrumbs,
  vr as Button,
  Pa as ButtonGroup,
  Oa as Card,
  Hn as Cell,
  Fn as Checkbox,
  Va as CheckboxGroup,
  jn as Chip,
  Ma as Col,
  Ia as Collapse,
  Ea as CollapseItem,
  yr as Context,
  Ba as Countdown,
  Da as Counter,
  Aa as DatePicker,
  Xr as Dialog,
  za as Divider,
  qn as Drag,
  Ua as Ellipsis,
  Ya as Fab,
  Tn as Form,
  ar as FormDetails,
  Rr as Hover,
  Pr as HoverOverlay,
  Ne as Icon,
  Ha as Image,
  zr as ImagePreview,
  Fa as IndexAnchor,
  ja as IndexBar,
  Jn as Input,
  ya as Lazy,
  Wa as Link,
  Ga as List,
  dn as Loading,
  wi as LoadingBar,
  Wo as Locale,
  Mn as Menu,
  qa as Option,
  Xa as Overlay,
  Xo as PIXEL,
  Ka as Pagination,
  Za as Paper,
  In as Picker,
  Lr as Popup,
  Ja as Progress,
  Qa as PullRefresh,
  _a as Radio,
  xa as RadioGroup,
  et as Rate,
  rt as Result,
  Xe as Ripple,
  nt as Row,
  xi as SNACKBAR_TYPE,
  at as Select,
  tt as Skeleton,
  ot as Slider,
  Ti as Snackbar,
  lt as Space,
  st as Step,
  ut as Steps,
  Vn as Sticky,
  dt as StyleProvider,
  Pn as Swipe,
  On as SwipeItem,
  vt as Switch,
  ft as Tab,
  ct as TabItem,
  mt as Table,
  pt as Tabs,
  ht as TabsItems,
  Oi as Themes,
  gt as TimePicker,
  Zn as Tooltip,
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
  Bf as actionSheetProps,
  Ai as add,
  Uf as appBarProps,
  dc as avatarGroupProps,
  tc as avatarProps,
  Hc as backTopProps,
  Xc as badgeProps,
  am as bottomNavigationItemProps,
  Qc as bottomNavigationProps,
  um as breadcrumbProps,
  pm as breadcrumbsProps,
  Dc as buttonProps,
  Pm as cardProps,
  Bm as cellProps,
  Zm as checkboxGroupProps,
  Hm as checkboxProps,
  rp as chipProps,
  lp as colProps,
  gp as collapseItemProps,
  cp as collapseProps,
  Cp as countdownProps,
  gh as counterProps,
  Rh as datePickerProps,
  g$ as default,
  Ze as defaultLazyOptions,
  rg as dialogProps,
  ig as dividerProps,
  dg as dragProps,
  Ws as enUS,
  zm as formDetailsProps,
  Ry as formProps,
  Fs as iconProps,
  Zs as imageCache,
  ob as imagePreviewProps,
  jy as imageProps,
  yb as indexAnchorProps,
  Sb as indexBarProps,
  Nb as inputProps,
  FS as install,
  Fb as linkProps,
  qb as listProps,
  r0 as loadingBarProps,
  an as loadingProps,
  f0 as menuProps,
  qs as merge,
  y0 as optionProps,
  S0 as overlayProps,
  _e as pack,
  Gs as packs,
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
  gv as snackbarProps,
  Yw as spaceProps,
  jw as stepProps,
  Qw as stepsProps,
  Wt as stickyProps,
  eC as styleProviderProps,
  Pd as swipeProps,
  aC as switchProps,
  pC as tabItemProps,
  dC as tabProps,
  bC as tableProps,
  MC as tabsItemsProps,
  TC as tabsProps,
  wS as timePickerProps,
  Sy as tooltipProps,
  ES as uploaderProps,
  zi as use,
  vn as useHoverOverlay,
  Di as useLocale,
  HS as version,
  Ni as zhCN
};
