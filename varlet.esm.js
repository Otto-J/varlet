import { reactive as Le, onMounted as to, nextTick as ze, onActivated as Mr, isRef as Hv, watch as le, onBeforeUnmount as oo, onDeactivated as xa, unref as ut, onUnmounted as io, inject as Fv, getCurrentInstance as et, computed as R, provide as jv, isVNode as kt, ref as O, Comment as Wv, Fragment as Me, createApp as Gv, h as ws, onBeforeMount as qv, defineComponent as ee, createVNode as Q, Teleport as nr, Transition as Re, withDirectives as ke, vShow as Qn, mergeProps as Ne, openBlock as h, createBlock as be, resolveDynamicComponent as nt, normalizeClass as c, normalizeStyle as q, resolveComponent as ie, resolveDirective as De, withCtx as fe, createElementVNode as D, renderSlot as j, toDisplayString as oe, createElementBlock as $, renderList as Ye, createCommentVNode as x, onUpdated as $t, createTextVNode as Se, pushScopeId as Er, popScopeId as Ir, withModifiers as Pn, normalizeProps as Tt, guardReactiveProps as lo, vModelText as Xv, createSlots as Gt, withKeys as nl, toRaw as rl, TransitionGroup as Kv } from "vue";
var Cs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, jS = Le(Cs);
const bn = Le(Cs), He = (e) => typeof e == "string", Ss = (e) => typeof e == "boolean", an = (e) => typeof e == "number", Oi = (e) => Object.prototype.toString.call(e) === "[object Object]", Zv = (e) => typeof e == "object" && e !== null, rt = (e) => typeof e == "function", Oe = (e) => Array.isArray(e), Jv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Vi = (e) => e === window, L = (e) => e == null ? 0 : He(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ss(e) ? Number(e) : e, qt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Mi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, at = () => typeof window < "u", al = (e) => [...new Set(e)], ks = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Qv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), _v = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ut = (e) => Oe(e) ? e : [e], qa = (e, n, r) => Math.min(r, Math.max(n, e)), xv = (e, n) => qa(e, 0, n.length - 1);
var tl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ol = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), ef = (e) => {
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
      this.has(r) && qt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, zo = (e) => e, il = (e) => Math.pow(e, 3), $s = (e) => e < 0.5 ? il(e * 2) / 2 : 1 - il((1 - e) * 2) / 2, so = (e, n) => e ?? n, Ts = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Aa = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function On(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function ll(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lo.apply(this, arguments);
}
function tt(e) {
  return window.getComputedStyle(e);
}
function Je(e) {
  if (Vi(e)) {
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
    return Lo({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function nf(e) {
  var {
    left: n
  } = Je(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function sl(e) {
  var {
    top: n
  } = Je(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ei(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function rf(e) {
  var {
    top: n,
    bottom: r,
    left: a,
    right: t
  } = Je(e), {
    width: o,
    height: l
  } = Je(window), i = a <= o && t >= 0, s = n <= l && r >= 0;
  return i && s;
}
function Oo(e) {
  var {
    transform: n
  } = tt(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function $r(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = tt(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function af(e) {
  for (var n = [], r = e; !Vi(r); )
    r = $r(r), n.push(r);
  return n;
}
function Ps(e, n) {
  if (He(e)) {
    var r = document.querySelector(e);
    return r || On(n, "target element cannot found"), r;
  }
  if (Zv(e))
    return e;
  On(n, 'type of prop "target" should be a selector or an element object');
}
function tf() {
  var {
    width: e,
    height: n
  } = Je(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Os = (e) => He(e) && e.endsWith("rem"), of = (e) => He(e) && e.endsWith("em") && !e.endsWith("rem"), lf = (e) => He(e) && e.endsWith("px") || an(e), sf = (e) => He(e) && e.endsWith("%"), Vs = (e) => He(e) && e.endsWith("vw"), Ms = (e) => He(e) && e.endsWith("vh"), Es = (e) => He(e) && e.endsWith("vmin"), Is = (e) => He(e) && e.endsWith("vmax"), uf = (e) => He(e) && e.startsWith("calc("), df = (e) => He(e) && e.startsWith("var("), Ae = (e) => {
  if (an(e))
    return e;
  if (lf(e))
    return +e.replace("px", "");
  if (!at())
    return 0;
  var {
    vw: n,
    vh: r,
    vMin: a,
    vMax: t
  } = tf();
  if (Vs(e))
    return +e.replace("vw", "") * n / 100;
  if (Ms(e))
    return +e.replace("vh", "") * r / 100;
  if (Es(e))
    return +e.replace("vmin", "") * a / 100;
  if (Is(e))
    return +e.replace("vmax", "") * t / 100;
  if (Os(e)) {
    var o = +e.replace("rem", ""), l = tt(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return He(e) ? L(e) : 0;
}, ye = (e) => {
  if (e != null)
    return sf(e) || Vs(e) || Ms(e) || of(e) || Os(e) || uf(e) || df(e) || Es(e) || Is(e) ? e : Ae(e) + "px";
}, dn = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ye(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function wn(e) {
  var n = Ts();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function ul(e) {
  var n = Ts();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function uo(e) {
  wn(() => {
    wn(e);
  });
}
function An() {
  return new Promise((e) => {
    wn(() => {
      wn(e);
    });
  });
}
function vf() {
  return new Promise((e) => {
    wn(e);
  });
}
function ht(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = pt(e), s = Ei(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), wn(d);
      } else
        e.scrollTo(a, r), u();
    };
    wn(d);
  });
}
function Bs(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Qv(a);
    return n[o] = t, n;
  }, {});
}
function ff() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Xt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function on(e) {
  let n = !1;
  to(() => {
    e(), ze(() => {
      n = !0;
    });
  }), Mr(() => {
    n && e();
  });
}
function Tr(e, n, r, a = {}) {
  if (!at())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => rt(m) ? m() : ut(m), u = (m) => {
    if (l || i)
      return;
    const y = s(m);
    y && (y.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const y = s(m);
    y && (y.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let v;
  Hv(e) && (v = le(() => e.value, (m, y) => {
    d(y), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return on(() => {
    u(e);
  }), oo(() => {
    d(e);
  }), xa(() => {
    d(e);
  }), f;
}
function Ns(e, n, r) {
  if (!at())
    return;
  Tr(document, n, (t) => {
    const o = rt(e) ? e() : ut(e);
    o && !o.contains(t.target) && r(t);
  });
}
function vo(e) {
  io(() => {
    e();
  }), xa(() => {
    e();
  });
}
var cf = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function mf(e) {
  const n = et();
  return e in n.provides;
}
function ln(e) {
  if (!mf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Fv(e), { childInstances: r, collect: a, clear: t } = n, o = cf(n, ["childInstances", "collect", "clear"]), l = et();
  return {
    index: R(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      to(() => {
        ze().then(() => {
          a(l, u);
        });
      }), oo(() => {
        ze().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function pf(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      kt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function sn(e) {
  const n = et(), r = Le([]), a = [], t = R(() => r.length), o = () => {
    const u = pf(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    qt(r, u), qt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      jv(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function Pt(e) {
  Tr(() => window, "resize", e, { passive: !0 }), Tr(() => window, "orientationchange", e, { passive: !0 });
}
function hf(e, n) {
  const r = O(!1);
  return le(e, (a) => {
    n === a && (r.value = !0);
  }, { immediate: !0 }), r;
}
function dl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
function _e(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function gf(e) {
  var n = Gv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function ot(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => ws(e, Ro({}, n, r));
    }
  }, {
    unmount: t
  } = gf(a);
  return {
    unmountInstance: t
  };
}
function Ds(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Wv) {
      if (r.type === Me && Oe(r.children)) {
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
  var e = O(""), n = /* @__PURE__ */ function() {
    var t = vl(function* (o, l, i) {
      if (!Oe(o) || !o.length)
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
    var t = vl(function* (o, l, i, s, u) {
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
function yf(e) {
  Tr(() => window, "hashchange", e), Tr(() => window, "popstate", e);
}
function fo() {
  var e = O(!1);
  return Mr(() => {
    e.value = !1;
  }), xa(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Oe(s)) {
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
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Oe(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function Y(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function gn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), "var-elevation--" + e);
}
function As(e, n, r) {
  r === void 0 && (r = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = r, i = t ?? "onUpdate:" + n.toString(), s = () => e[n] != null ? e[n] : o;
  if (!a)
    return R({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : S(e[i], d);
      }
    });
  var u = O(s());
  return le(() => e[n], () => {
    u.value = s();
  }), le(() => u.value, (d) => {
    l ? l(i, d) : S(e[i], d);
  }), u;
}
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Kt.apply(this, arguments);
}
var {
  n: zs
} = ne("ripple"), fl = 250;
function bf(e) {
  var {
    zIndex: n,
    position: r
  } = tt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function wf(e, n) {
  var {
    top: r,
    left: a
  } = Je(e), {
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
function Ls(e) {
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
      } = wf(this, e), s = document.createElement("div");
      s.classList.add(zs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), bf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Uo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + zs());
    if (r.length) {
      var a = r[r.length - 1], t = fl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, fl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Rs() {
  if (!(!ff() || !bn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function Cf(e, n) {
  var r;
  e._ripple = Kt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Uo.bind(e)
  }), e.addEventListener("touchstart", Ls, {
    passive: !0
  }), e.addEventListener("touchmove", Rs, {
    passive: !0
  }), e.addEventListener("dragstart", Uo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Sf(e) {
  e.removeEventListener("touchstart", Ls), e.removeEventListener("touchmove", Rs), e.removeEventListener("dragstart", Uo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function kf(e, n) {
  var r, a, t, o, l = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
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
  mounted: Cf,
  unmounted: Sf,
  updated: kf,
  install(e) {
    e.directive("ripple", this);
  }
}, WS = Us;
const qe = Us;
function $f(e) {
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
    validator: $f
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
  var e = Object.keys(bn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Et(e) {
  bn.locks[e] = 1, Ys();
}
function It(e) {
  delete bn.locks[e], Ys();
}
function co(e, n) {
  var {
    uid: r
  } = et();
  n && le(n, (a) => {
    a === !1 ? It(r) : a === !0 && e() === !0 && Et(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? Et(r) : It(r));
  }), qv(() => {
    n && n() === !1 || e() === !0 && Et(r);
  }), io(() => {
    n && n() === !1 || e() === !0 && It(r);
  }), Mr(() => {
    n && n() === !1 || e() === !0 && Et(r);
  }), xa(() => {
    n && n() === !1 || e() === !0 && It(r);
  });
}
function Vt(e, n) {
  var r = O(bn.zIndex);
  return le(e, (a) => {
    a && (bn.zIndex += n, r.value = bn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
var Hs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Tf() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = ln(Hs);
  return {
    index: r,
    popup: n,
    bindPopup: e
  };
}
function Pf() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(Hs);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Yo.apply(this, arguments);
}
function cl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: In,
  classes: Vo
} = ne("popup");
const kn = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Ot,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = hf(() => e.show, !0), {
      zIndex: o
    } = Vt(() => e.show, 3), {
      disabled: l
    } = fo(), {
      bindPopupItems: i
    } = Pf(), s = () => {
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
        class: Vo(In("overlay"), f),
        style: Yo({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => ke(Q("div", Ne({
      class: Vo(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")], [e.safeArea, In("--safe-area")], [e.safeAreaTop, In("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && S(r.default)]), [[Qn, e.show]]), v = () => {
      var f;
      return Q(Re, {
        name: In("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Q("div", {
          class: Vo(In("$--box"), In()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), Q(Re, {
          name: e.transition || In("$-pop-" + e.position)
        }, cl(f = d()) ? f : {
          default: () => [f]
        })]), [[Qn, e.show]])]
      });
    };
    return co(() => e.show, () => e.lockScroll), le(() => e.show, (f) => {
      S(f ? e.onOpen : e.onClose);
    }), i({
      show: R(() => e.show)
    }), yf(() => S(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Q(nr, {
          to: f,
          disabled: l.value
        }, cl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
kn.install = function(e) {
  e.component(kn.name, kn);
};
var GS = kn, Fs = {
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
function ml(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Of(e) {
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
  n: Vf,
  classes: Mf
} = ne("icon");
function Ef(e, n) {
  return h(), be(nt(e.isURL(e.name) ? "img" : "i"), {
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
var js = ee({
  name: "VarIcon",
  props: Fs,
  setup(e) {
    var n = O(""), r = O(!1), a = /* @__PURE__ */ function() {
      var t = Of(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield ze(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: Vf,
      classes: Mf,
      nextName: n,
      animateInProgress: r,
      isURL: Jv,
      toNumber: L,
      toSizeUnit: ye
    };
  }
});
js.render = Ef;
const Ve = js;
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
var qS = Ve;
function Ho() {
  return Ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ho.apply(this, arguments);
}
var If = Ho({
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
}, _e(Ot, [
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
const Ii = {
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
function Fo() {
  return Fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
function Bi() {
  var e = {}, n = O({}), r = (o, l) => {
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
    e[o] = Fo({}, e[o], l), a(o);
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
  packs: Gs,
  pack: Qe,
  add: Ni,
  use: Di,
  merge: qs
} = Bi();
Ni("zh-CN", Ii);
Di("zh-CN");
var XS = {
  zhCN: Ii,
  enUS: Ws,
  packs: Gs,
  pack: Qe,
  add: Ni,
  use: Di,
  merge: qs,
  useLocale: Bi
};
const jo = {
  zhCN: Ii,
  enUS: Ws,
  packs: Gs,
  pack: Qe,
  add: Ni,
  use: Di,
  merge: qs,
  useLocale: Bi
};
var {
  n: Bf,
  classes: Nf
} = ne("action-sheet"), Df = ["onClick"];
function Af(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = De("ripple");
  return h(), be(a, Ne({
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
    default: fe(() => [D(
      "div",
      Ne({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [j(e.$slots, "title", {}, () => [D(
        "div",
        {
          class: c(e.n("title"))
        },
        oe(e.dt(e.title, e.pack.actionSheetTitle)),
        3
        /* TEXT, CLASS */
      )]), j(e.$slots, "actions", {}, () => [(h(!0), $(
        Me,
        null,
        Ye(e.actions, (o) => ke((h(), $("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: q({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (h(), be(r, {
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
          oe(o.name),
          3
          /* TEXT, CLASS */
        )], 14, Df)), [[t, {
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
    Ripple: qe
  },
  components: {
    VarPopup: kn,
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: If,
  setup(e) {
    var n = O(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        S(l, t), o && S(e["onUpdate:show"], !1);
      }
    }, a = (t) => S(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Bf,
      classes: Nf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Qe,
      dt: so,
      handleSelect: r
    };
  }
});
Xs.render = Af;
const cr = Xs;
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wo.apply(this, arguments);
}
var lr, Ai = {};
function zf(e) {
  return e === void 0 && (e = {}), Wo({}, Ai, e);
}
function _n(e) {
  return at() ? new Promise((n) => {
    _n.close();
    var r = Le(zf(e));
    r.teleport = "body", lr = r;
    var {
      unmountInstance: a
    } = ot(cr, r, {
      onSelect: (t) => {
        S(r.onSelect, t), n(t);
      },
      onClose: () => {
        S(r.onClose), n("close");
      },
      onClosed: () => {
        S(r.onClosed), a(), lr === r && (lr = null);
      },
      onRouteChange: () => {
        a(), lr === r && (lr = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
_n.setDefaultOptions = function(e) {
  Ai = e;
};
_n.resetDefaultOptions = function() {
  Ai = {};
};
_n.close = function() {
  if (lr != null) {
    var e = lr;
    lr = null, ze().then(() => {
      e.show = !1;
    });
  }
};
_n.Component = cr;
cr.install = function(e) {
  e.component(cr.name, cr);
};
_n.install = function(e) {
  e.component(cr.name, cr);
};
var KS = cr;
function Lf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Rf = {
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
    validator: Lf
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
  n: Uf,
  classes: Yf
} = ne("app-bar");
function Hf(e, n) {
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
          [j(e.$slots, "default", {}, () => [Se(
            oe(e.title),
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
        [j(e.$slots, "default", {}, () => [Se(
          oe(e.title),
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
          [j(e.$slots, "default", {}, () => [Se(
            oe(e.title),
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
  props: Rf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(), t = O(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
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
    return on(o), $t(o), {
      n: Uf,
      classes: Yf,
      formatElevation: gn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ks.render = Hf;
const Ar = Ks;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var ZS = Ar;
function pl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function mo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
var Ff = "background-image", jf = "lazy-loading", Wf = "lazy-error", hl = "lazy-attempt", Gf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], qo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Xa = [], Zt = [], Zs = ef(100), Ke = {
  loading: qo,
  error: qo,
  attempt: 3,
  throttleWait: 300,
  events: Gf
}, zi = Mi(Mt, Ke.throttleWait);
function po(e, n) {
  e._lazy.arg === Ff ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function qf(e) {
  e._lazy.loading && po(e, e._lazy.loading), Mt();
}
function Xf(e) {
  e._lazy.error && po(e, e._lazy.error), e._lazy.state = "error", Ri(e), Mt();
}
function Js(e, n) {
  po(e, n), e._lazy.state = "success", Ri(e), Mt();
}
function Kf(e) {
  var n;
  Zt.includes(e) || (Zt.push(e), (n = Ke.events) == null || n.forEach((r) => {
    e.addEventListener(r, zi, {
      passive: !0
    });
  }));
}
function Zf() {
  Zt.forEach((e) => {
    var n;
    (n = Ke.events) == null || n.forEach((r) => {
      e.removeEventListener(r, zi);
    });
  }), Zt.length = 0;
}
function Jf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(jf)) != null ? r : Ke.loading,
    error: (a = e.getAttribute(Wf)) != null ? a : Ke.error,
    attempt: e.getAttribute(hl) ? Number(e.getAttribute(hl)) : Ke.attempt
  };
  e._lazy = Go({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), po(e, qo), S(Ke.filter, e._lazy);
}
function Qf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Zs.add(n), Js(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Xf(e) : Qs(e);
  });
}
function Qs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Zs.has(n)) {
      Js(e, n), e._lazy.attemptLock = !1;
      return;
    }
    qf(e), Qf(e, n);
  }
}
function Li(e) {
  return Xo.apply(this, arguments);
}
function Xo() {
  return Xo = mo(function* (e) {
    yield An(), rf(e) && Qs(e);
  }), Xo.apply(this, arguments);
}
function Mt() {
  Xa.forEach((e) => Li(e));
}
function _f(e) {
  return Ko.apply(this, arguments);
}
function Ko() {
  return Ko = mo(function* (e) {
    !Xa.includes(e) && Xa.push(e), af(e).forEach(Kf), yield Li(e);
  }), Ko.apply(this, arguments);
}
function Ri(e) {
  qt(Xa, e), Xa.length === 0 && Zf();
}
function xf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function _s(e, n) {
  return Zo.apply(this, arguments);
}
function Zo() {
  return Zo = mo(function* (e, n) {
    Jf(e, n), yield _f(e);
  }), Zo.apply(this, arguments);
}
function ec(e, n) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = mo(function* (e, n) {
    if (!xf(e, n)) {
      Xa.includes(e) && (yield Li(e));
      return;
    }
    yield _s(e, n);
  }), Jo.apply(this, arguments);
}
function nc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ke.events = n ?? Ke.events, Ke.loading = r ?? Ke.loading, Ke.error = a ?? Ke.error, Ke.attempt = t ?? Ke.attempt, Ke.throttleWait = o ?? Ke.throttleWait, Ke.filter = l;
}
var xs = {
  mounted: _s,
  unmounted: Ri,
  updated: ec,
  install(e, n) {
    nc(n), zi = Mi(Mt, Ke.throttleWait), e.directive("lazy", this);
  }
}, JS = xs;
const gt = xs;
function rc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var eu = (e) => ["mini", "small", "normal", "large"].includes(e);
function nu(e) {
  return eu(e) || an(e) || He(e);
}
var ac = {
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
    validator: rc,
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
  n: tc,
  classes: oc
} = ne("avatar"), ic = ["src", "lazy-loading", "lazy-error"], lc = ["src"];
function sc(e, n) {
  var r = De("lazy");
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
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (h(), $(
      Me,
      {
        key: 0
      },
      [e.lazy ? ke((h(), $("img", {
        key: 0,
        class: c(e.n("image")),
        src: e.src,
        style: q({
          objectFit: e.fit
        }),
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        })
      }, null, 46, ic)), [[r, e.src]]) : (h(), $("img", {
        key: 1,
        class: c(e.n("image")),
        src: e.src,
        style: q({
          objectFit: e.fit
        }),
        onLoad: n[1] || (n[1] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[2] || (n[2] = function() {
          return e.handleError && e.handleError(...arguments);
        })
      }, null, 46, lc))],
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
var ru = ee({
  name: "VarAvatar",
  directives: {
    Lazy: gt
  },
  props: ac,
  setup(e) {
    var n = O(null), r = O(null), a = O(1), t = () => {
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
      d ? (u._lazy.state === "success" && S(v, s), u._lazy.state === "error" && S(f, s)) : S(v, s);
    }, l = (s) => {
      S(e.onError, s);
    }, i = (s) => {
      S(e.onClick, s);
    };
    return on(t), $t(t), {
      internalSizeValidator: eu,
      sizeValidator: nu,
      toSizeUnit: ye,
      n: tc,
      classes: oc,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
ru.render = sc;
const zr = ru;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var QS = zr, uc = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: dc,
  classes: vc
} = ne("avatar-group");
function fc(e, n) {
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
var au = ee({
  name: "VarAvatarGroup",
  props: uc,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": ye(e.offset)
    });
    return {
      n: dc,
      classes: vc,
      toSizeUnit: ye,
      rootStyles: n
    };
  }
});
au.render = fc;
const Lr = au;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var _S = Lr;
function cc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function mc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var dr = {
  type: {
    type: String,
    default: "circle",
    validator: cc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: mc
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
  n: pc,
  classes: hc
} = ne("loading"), gc = (e) => (Er(""), e = e(), Ir(), e), yc = /* @__PURE__ */ gc(() => /* @__PURE__ */ D(
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
)), bc = [yc];
function wc(e, n) {
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
          bc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (h(!0), $(
        Me,
        null,
        Ye(e.loadingTypeDict, (r, a) => (h(), $(
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
              Ye(r, (t) => (h(), $(
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
        [j(e.$slots, "description", {}, () => [Se(
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
var tu = ee({
  name: "VarLoading",
  props: dr,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => S(r.default) ? e.loading : !0);
    return {
      n: pc,
      classes: hc,
      multiplySizeUnit: dn,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
tu.render = wc;
const Rn = tu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var xS = Rn, Cc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Sc,
  classes: kc
} = ne("hover-overlay");
function $c(e, n) {
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
  props: Cc,
  setup() {
    return {
      n: Sc,
      classes: kc
    };
  }
});
ou.render = $c;
const pn = ou;
pn.install = function(e) {
  e.component(pn.name, pn);
};
function Pr() {
  var e = O(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var ek = pn;
function iu(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function Tc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[ks(t)] = o, r;
  }, {}) : {};
}
function Pc(e) {
  var {
    value: n
  } = e._hover, r = Tc(e);
  Object.keys(n).forEach((a) => {
    var t = ks(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Ui(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function Oc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function lu(e) {
  Oc(e), Ui(e, e._hover.rawStyle);
}
function su() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, rt(e)) {
    e(this._hover.hovering);
    return;
  }
  Ui(this, e);
}
function uu() {
  if (this._hover.hovering = !1, rt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  lu(this);
}
function du(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  iu(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, Pc(e), e.addEventListener("mouseenter", su), e.addEventListener("mouseleave", uu));
}
function vu(e, n) {
  iu(n.arg) || (lu(e), e.removeEventListener("mouseenter", su), e.removeEventListener("mouseleave", uu));
}
function Vc(e, n) {
  e._hover && vu(e, n);
}
function Mc(e, n) {
  return !rt(n.value) && e._hover.hovering;
}
function Ec(e, n) {
  du(e, n), Mc(e, n) && Ui(e, n.value);
}
var fu = {
  mounted: du,
  unmounted: vu,
  beforeUpdate: Vc,
  updated: Ec,
  install(e) {
    e.directive("hover", this);
  }
}, nk = fu;
const Un = fu;
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
function cu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ic(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Bc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Nc = {
  type: {
    type: String,
    validator: cu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Bc
  },
  size: {
    type: String,
    validator: Ic
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
  loadingType: _e(dr, "type"),
  loadingSize: _e(dr, "size"),
  loadingColor: Qo({}, _e(dr, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, mu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Dc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(mu);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function Ac() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = ln(mu);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: zc,
  classes: Lc
} = ne("button"), Rc = ["type", "disabled"];
function Uc(e, n) {
  var r = ie("var-loading"), a = ie("var-hover-overlay"), t = De("ripple"), o = De("hover");
  return ke((h(), $("button", {
    class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
    style: q({
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
  }, [e.loading || e.pending ? (h(), be(r, {
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
  }, null, 8, ["hovering"])], 46, Rc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var pu = ee({
  name: "VarButton",
  components: {
    VarLoading: Rn,
    VarHoverOverlay: pn
  },
  directives: {
    Ripple: qe,
    Hover: Un
  },
  props: Nc,
  setup(e) {
    var n = O(!1), {
      buttonGroup: r
    } = Ac(), {
      hovering: a,
      handleHovering: t
    } = Pr(), o = R(() => {
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
      e.autoLoading && (n.value = !0, u = Oe(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || n.value || l(S(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || l(S(f, u));
    };
    return {
      n: zc,
      classes: Lc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
pu.render = Uc;
const rn = pu;
rn.install = function(e) {
  e.component(rn.name, rn);
};
var rk = rn, Yc = {
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
  n: Hc,
  classes: Fc
} = ne("back-top");
function jc(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return h(), be(nr, {
    to: "body",
    disabled: e.disabled
  }, [D(
    "div",
    Ne({
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
    [j(e.$slots, "default", {}, () => [Q(a, {
      elevation: e.elevation,
      type: "primary",
      round: "",
      "var-back-top-cover": ""
    }, {
      default: fe(() => [Q(r, {
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
    VarButton: rn,
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: Yc,
  setup(e) {
    var n = O(!1), r = O(null), a = O(!0), t, o = (d) => {
      S(e.onClick, d);
      var v = Ei(t);
      ht(t, {
        left: v,
        duration: e.duration,
        animation: $s
      });
    }, l = Mi(() => {
      n.value = pt(t) >= Ae(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Ps(e.target, "BackTop") : $r(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return to(() => {
      i(), s(), a.value = !1;
    }), Mr(s), vo(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ye,
      n: Hc,
      classes: Fc,
      handleClick: o
    };
  }
});
hu.render = jc;
const Rr = hu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var ak = Rr;
function Wc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Gc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var qc = {
  type: {
    type: String,
    default: "default",
    validator: Wc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Gc
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
  n: Xc,
  classes: Kc
} = ne("badge");
function Zc(e, n) {
  var r = ie("var-icon");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "default"), Q(Re, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: fe(() => [ke(D(
        "span",
        Ne({
          class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [e.icon ? (h(), be(r, {
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
          oe(e.value),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)])],
        16
        /* FULL_PROPS */
      ), [[Qn, !e.hidden]])]),
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
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: qc,
  setup(e) {
    var n = R(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Xc,
      classes: Kc,
      value: n
    };
  }
});
gu.render = Zc;
const mr = gu;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var tk = mr, Jc = {
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
function Qc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = sn(yu);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _o.apply(this, arguments);
}
var {
  n: _c,
  classes: xc
} = ne("bottom-navigation"), {
  n: ho
} = ne("bottom-navigation-item"), gl = ho("--right-half-space"), yl = ho("--left-half-space"), bl = ho("--right-space"), em = {
  type: "primary"
};
function nm(e, n) {
  var r = ie("var-button");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (h(), be(r, Ne({
      key: 0,
      class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
      "var-bottom-navigation__fab": "",
      onClick: e.handleFabClick
    }, e.fabProps, {
      round: ""
    }), {
      default: fe(() => [j(e.$slots, "fab")]),
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
    VarButton: rn
  },
  props: Jc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = O({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Qc(), v = () => {
      s.value === 0 || f() || m() || y();
    }, f = () => u.find((p) => {
      var {
        name: w
      } = p;
      return t.value === w.value;
    }), m = () => u.find((p) => {
      var {
        index: w
      } = p;
      return t.value === w.value;
    }), y = () => {
      an(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > s.value - 1 && S(e["onUpdate:active"], s.value - 1));
    }, b = (p) => {
      t.value !== p && (e.onBeforeChange ? g(p) : C(p));
    }, g = (p) => {
      var w = Ut(S(e.onBeforeChange, p));
      Promise.all(w).then((U) => {
        U.every(Boolean) && C(p);
      });
    }, C = (p) => {
      S(e["onUpdate:active"], p), S(e.onChange, p);
    }, V = () => {
      var p = E();
      p.forEach((w) => {
        w.classList.remove(gl, yl, bl);
      });
    }, T = (p) => {
      var w = E(), U = w.length, N = p % 2 === 0;
      w.forEach((X, K) => {
        k(N, X, K, U);
      });
    }, k = (p, w, U, N) => {
      var X = U === N - 1;
      if (!p && X) {
        w.classList.add(bl);
        return;
      }
      var K = U === N / 2 - 1, A = U === N / 2;
      K ? w.classList.add(gl) : A && w.classList.add(yl);
    }, E = () => Array.from(a.value.querySelectorAll("." + ho())), M = () => {
      S(e.onFabClick);
    }, P = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(P), le(() => s.value, v), le(() => e.fabProps, (p) => {
      i.value = _o({}, em, p);
    }, {
      immediate: !0,
      deep: !0
    }), on(() => {
      r.fab && T(s.value);
    }), $t(() => {
      V(), r.fab && T(s.value);
    }), {
      n: _c,
      classes: xc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: M,
      fabProps: i
    };
  }
});
bu.render = nm;
const Ur = bu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var ok = Ur, rm = {
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
function am() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(yu);
  return r || On("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: tm,
  classes: om
} = ne("bottom-navigation-item"), im = {
  type: "danger",
  dot: !0
};
function lm(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = De("ripple");
  return ke((h(), $(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), be(r, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : x("v-if", !0), j(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), be(a, Ne({
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
        [Se(
          oe(e.label),
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
    VarBadge: mr,
    VarIcon: Ve
  },
  directives: {
    Ripple: qe
  },
  props: rm,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = O({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = am(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, y = (m = n.value) != null ? m : t.value;
      S(e.onClick, y), S(o.onToggle, y);
    };
    return l(d), le(() => r.value, (m) => {
      a.value = m === !0 ? im : r.value;
    }, {
      immediate: !0
    }), {
      n: tm,
      classes: om,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
wu.render = lm;
const Yr = wu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var ik = Yr, sm = {
  separator: {
    type: String
  },
  onClick: Y()
}, Cu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function um() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = sn(Cu);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function dm() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ln(Cu);
  return n || On("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: vm,
  classes: fm
} = ne("breadcrumb");
function cm(e, n) {
  return h(), $(
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
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : j(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [D(
        "div",
        {
          class: c(e.n("separator"))
        },
        oe((r = e.separator) != null ? r : e.parentSeparator),
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
  props: sm,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = dm(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || S(e.onClick, i);
    };
    return a(null), {
      n: vm,
      classes: fm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Su.render = cm;
const Hr = Su;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var lk = Hr, mm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: pm
} = ne("breadcrumbs");
function hm(e, n) {
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
  props: mm,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = um(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: pm
    };
  }
});
ku.render = hm;
const Fr = ku;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var sk = Fr;
function gm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ym(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function bm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var wm = {
  type: {
    type: String,
    default: "default",
    validator: gm
  },
  size: {
    type: String,
    default: "normal",
    validator: ym
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
    validator: bm
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
  n: Cm,
  classes: Sm
} = ne("button-group");
function km(e, n) {
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
  props: wm,
  setup(e) {
    var {
      bindButtons: n
    } = Dc(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: Cm,
      classes: Sm,
      formatElevation: gn
    };
  }
});
$u.render = km;
const jr = $u;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var uk = jr;
function $m(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Tm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: $m,
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
function wl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
var {
  n: Pm,
  classes: Om
} = ne("card"), Vm = 500, Mm = ["src", "alt"];
function Em(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = De("ripple");
  return ke((h(), $(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: q({
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
      }, null, 14, Mm)) : x("v-if", !0)]), D(
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
          oe(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          oe(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          oe(e.description),
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
          onClick: Pn(e.close, ["stop"])
        }, {
          default: fe(() => [Q(r, {
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
var Tu = ee({
  name: "VarCard",
  directives: {
    Ripple: qe
  },
  components: {
    VarIcon: Ve,
    VarButton: rn
  },
  props: Tm,
  setup(e) {
    var n = O(null), r = O(null), a = O("auto"), t = O("auto"), o = O("100%"), l = O("100%"), i = O("auto"), s = O("auto"), u = O(void 0), d = O("hidden"), v = O("0px"), f = O("0"), m = R(() => e.layout === "row"), y = O(!1), b = O(!1), {
      zIndex: g
    } = Vt(() => e.floating, 1);
    co(() => e.floating, () => !m.value);
    var C = "auto", V = "auto", T = null, k = O(null), E = /* @__PURE__ */ function() {
      var w = Cl(function* () {
        clearTimeout(k.value), clearTimeout(T), k.value = null, k.value = setTimeout(/* @__PURE__ */ Cl(function* () {
          var {
            width: U,
            height: N,
            left: X,
            top: K
          } = Je(n.value);
          a.value = ye(U), t.value = ye(N), o.value = a.value, l.value = t.value, i.value = ye(K), s.value = ye(X), u.value = "fixed", C = i.value, V = s.value, y.value = !0, yield An(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Vm : 0);
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), M = () => {
      clearTimeout(T), clearTimeout(k.value), k.value = null, o.value = a.value, l.value = t.value, i.value = C, s.value = V, v.value = "0px", f.value = "0", y.value = !1, T = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", C = "auto", V = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, P = () => {
      S(e["onUpdate:floating"], !1);
    }, p = (w) => {
      S(e.onClick, w);
    };
    return le(() => e.floating, (w) => {
      m.value || ze(() => {
        w ? E() : M();
      });
    }, {
      immediate: !0
    }), {
      n: Pm,
      classes: Om,
      toSizeUnit: ye,
      card: n,
      cardFloater: r,
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
      close: P,
      showFloatingButtons: y,
      floated: b,
      formatElevation: gn,
      handleClick: p
    };
  }
});
Tu.render = Em;
const Wr = Tu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var dk = Wr, Im = {
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
  n: Bm,
  classes: Nm
} = ne("cell");
function Dm(e, n) {
  var r = ie("var-icon"), a = De("ripple");
  return ke((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "icon", {}, () => [e.icon ? (h(), $(
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
      [j(e.$slots, "default", {}, () => [e.title ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        oe(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), $(
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
    VarIcon: Ve
  },
  directives: {
    Ripple: qe
  },
  props: Im,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ye(e.borderOffset),
      "--cell-border-right": ye(e.borderOffset)
    }), r = (a) => {
      S(e.onClick, a);
    };
    return {
      n: Bm,
      classes: Nm,
      toSizeUnit: ye,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
Pu.render = Dm;
const pr = Pu;
pr.install = function(e) {
  e.component(pr.name, pr);
};
var vk = pr, Am = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: zm
} = ne("form-details"), Lm = {
  key: 0
}, Rm = {
  key: 0
};
function Um(e, n) {
  return h(), be(Re, {
    name: e.n()
  }, {
    default: fe(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), $(
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
        [Q(Re, {
          name: e.n("message")
        }, {
          default: fe(() => [e.errorMessage ? (h(), $(
            "div",
            Lm,
            oe(e.errorMessage),
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
        [Q(Re, {
          name: e.n("message")
        }, {
          default: fe(() => [j(e.$slots, "extra-message", {}, () => [e.extraMessage ? (h(), $(
            "div",
            Rm,
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
var Ou = ee({
  name: "VarFormDetails",
  props: Am,
  setup: () => ({
    n: zm
  })
});
Ou.render = Um;
const en = Ou;
en.install = function(e) {
  e.component(en.name, en);
};
var fk = en, Ym = {
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
function Hm() {
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
function Fm() {
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
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xo.apply(this, arguments);
}
var Mu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Mu), a = et(), t = r ? (o) => {
    r(xo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function jm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = sn(Mu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Wm,
  classes: Gm
} = ne("checkbox");
function qm(e, n) {
  var r = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = De("hover"), l = De("ripple");
  return h(), $(
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
      [ke((h(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(r, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : j(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Q(r, {
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
    Ripple: qe,
    Hover: Un
  },
  components: {
    VarIcon: Ve,
    VarFormDetails: en,
    VarHoverOverlay: pn
  },
  props: Ym,
  setup(e) {
    var n = O(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = O(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Fm(), {
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
      resetValidation: y
    } = Vn(), b = (p) => {
      ze(() => {
        var {
          validateTrigger: w,
          rules: U,
          modelValue: N
        } = e;
        f(w, p, U, N);
      });
    }, g = (p) => {
      n.value = p;
      var {
        checkedValue: w,
        onChange: U
      } = e;
      S(e["onUpdate:modelValue"], n.value), S(U, n.value), b("onChange"), p === w ? o == null || o.onChecked(w) : o == null || o.onUnchecked(w);
    }, C = (p) => {
      var {
        disabled: w,
        readonly: U,
        checkedValue: N,
        uncheckedValue: X,
        onClick: K
      } = e;
      if (!(u != null && u.disabled.value || w) && (S(K, p), !(u != null && u.readonly.value || U))) {
        t.value = !0;
        var A = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && A || g(r.value ? X : N);
      }
    }, V = (p) => {
      var {
        checkedValue: w,
        uncheckedValue: U
      } = e;
      n.value = p.includes(w) ? w : U;
    }, T = () => {
      t.value = !1;
    }, k = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), y();
    }, E = (p) => {
      var {
        checkedValue: w,
        uncheckedValue: U
      } = e, N = ![w, U].includes(p);
      N && (p = r.value ? U : w), g(p);
    }, M = () => m(e.rules, e.modelValue);
    le(() => e.modelValue, (p) => {
      n.value = p;
    }, {
      immediate: !0
    });
    var P = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: M,
      resetValidation: y,
      reset: k,
      resetWithAnimation: T
    };
    return S(l, P), S(d, P), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Wm,
      classes: Gm,
      handleClick: C,
      toggle: E,
      reset: k,
      validate: M,
      resetValidation: y
    };
  }
});
Eu.render = qm;
const hr = Eu;
hr.install = function(e) {
  e.component(hr.name, hr);
};
var ck = hr;
function Xm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Km = {
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
    validator: Xm
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
  n: Zm,
  classes: Jm
} = ne("checkbox-group");
function Qm(e, n) {
  var r = ie("var-form-details");
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
    ), Q(r, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Iu = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: en
  },
  props: Km,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Hm(), {
      bindForm: l
    } = Mn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Vn(), v = R(() => i.value), f = (P) => {
      ze(() => {
        var {
          validateTrigger: p,
          rules: w,
          modelValue: U
        } = e;
        s(p, P, w, U);
      });
    }, m = (P) => {
      S(e["onUpdate:modelValue"], P), S(e.onChange, P), f("onChange");
    }, y = (P) => {
      var {
        modelValue: p
      } = e;
      p.includes(P) || m([...p, P]);
    }, b = (P) => {
      var {
        modelValue: p
      } = e;
      p.includes(P) && m(p.filter((w) => w !== P));
    }, g = () => t.forEach((P) => {
      var {
        sync: p
      } = P;
      return p(e.modelValue);
    }), C = () => {
      t.forEach((P) => P.resetWithAnimation());
    }, V = () => {
      var P = t.map((w) => {
        var {
          checkedValue: U
        } = w;
        return U.value;
      }), p = al(P);
      return C(), S(e["onUpdate:modelValue"], p), p;
    }, T = () => {
      var P = t.filter((w) => {
        var {
          checked: U
        } = w;
        return !U.value;
      }).map((w) => {
        var {
          checkedValue: U
        } = w;
        return U.value;
      }), p = al(P);
      return C(), S(e["onUpdate:modelValue"], p), p;
    }, k = () => {
      S(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, g, {
      deep: !0
    }), le(() => a.value, g);
    var M = {
      max: n,
      checkedCount: r,
      onChecked: y,
      onUnchecked: b,
      validate: E,
      resetValidation: d,
      reset: k,
      errorMessage: v
    };
    return o(M), S(l, M), {
      errorMessage: i,
      n: Zm,
      classes: Jm,
      checkAll: V,
      inverseAll: T,
      reset: k,
      validate: E,
      resetValidation: d
    };
  }
});
Iu.render = Qm;
const Gr = Iu;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var mk = Gr;
function _m(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function xm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ep = {
  type: {
    type: String,
    default: "default",
    validator: _m
  },
  size: {
    type: String,
    default: "normal",
    validator: xm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: _e(Fs, "name"),
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
  n: rr,
  classes: np
} = ne("chip");
function rp(e, n) {
  var r = ie("var-icon");
  return h(), be(Re, {
    name: e.n("$-fade")
  }, {
    default: fe(() => [D(
      "span",
      Ne({
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
var Bu = ee({
  name: "VarChip",
  components: {
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: ep,
  setup(e) {
    var n = R(() => {
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
    }), r = R(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = rr(o ? "$--flex" : "$--inline-flex"), d = i ? rr("plain") + " " + rr("plain-" + l) : rr("--" + l), v = s ? rr("--round") : null;
      return [rr("--" + t), u, d, v];
    }), a = (t) => {
      S(e.onClose, t);
    };
    return {
      n: rr,
      classes: np,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Bu.render = rp;
const gr = Bu;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var pk = gr;
function ap(e) {
  return ["row", "column"].includes(e);
}
function tp(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function op(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var ip = {
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
    validator: ap
  },
  justify: {
    type: String,
    validator: tp
  },
  align: {
    type: String,
    validator: op
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
function lp() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(Nu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function sp() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Nu);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: Bt,
  classes: up
} = ne("col");
function dp(e, n) {
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
      onClick: n[0] || (n[0] = function() {
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
  props: ip,
  setup(e) {
    var n = O({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = sp(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Oi(d)) {
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
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), S(o, l), {
      n: Bt,
      classes: up,
      padding: n,
      toNumber: L,
      toSizeUnit: ye,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Xt
    };
  }
});
Du.render = dp;
const qr = Du;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var hk = qr, Au = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function vp() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = sn(Au);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var fp = {
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
  n: cp
} = ne("collapse");
function mp(e, n) {
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
  props: fp,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = vp(), t = R(() => e.modelValue), o = R(() => e.offset), l = R(() => e.divider), i = R(() => e.elevation), s = () => !e.accordion && !Oe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Oe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, g) => s() ? g ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((C) => C !== b) : null, d = (b, g) => {
      var C = u(b, g);
      S(e["onUpdate:modelValue"], C), S(e.onChange, C);
    }, v = () => {
      if (e.accordion)
        return r.find((g) => {
          var {
            name: C
          } = g;
          return e.modelValue === C.value;
        });
      var b = r.filter((g) => {
        var {
          name: C
        } = g;
        return C.value === void 0 ? !1 : e.modelValue.includes(C.value);
      });
      return b.length ? b : void 0;
    }, f = () => e.accordion ? r.find((b) => {
      var {
        index: g,
        name: C
      } = b;
      return C.value === void 0 && e.modelValue === g.value;
    }) : r.filter((b) => {
      var {
        index: g,
        name: C
      } = b;
      return C.value === void 0 && e.modelValue.includes(g.value);
    }), m = () => {
      if (s()) {
        var b = v() || f();
        if (e.accordion && !b || !e.accordion && !b.length) {
          r.forEach((g) => {
            g.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((g) => {
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
    return a(y), le(() => n.value, () => ze().then(m)), le(() => e.modelValue, () => ze().then(m)), {
      n: cp,
      divider: l
    };
  }
});
zu.render = mp;
const Xr = zu;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var gk = Xr;
function pp() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Au);
  return r || On("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var hp = {
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
  n: gp,
  classes: yp
} = ne("collapse-item");
function bp(e, n) {
  var r = ie("var-icon");
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
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [D(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [j(e.$slots, "title", {}, () => [Se(
          oe(e.title),
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
        [j(e.$slots, "icon", {}, () => [Q(r, {
          name: e.icon,
          transition: 250,
          class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
        }, null, 8, ["name", "class"])])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), ke(D(
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
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Qn, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Lu = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ve
  },
  props: hp,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = pp(), t = !0, o = O(null), l = O(!1), i = O(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = R(() => e.name), y = (E, M) => {
      s.value === void 0 || E && Oe(s.value) || M === i.value || (i.value = M, b(!0));
    }, b = (E) => {
      e.disabled || E || f(e.name || n.value, !i.value);
    }, g = () => {
      o.value && (o.value.style.height = "", l.value = !0, wn(() => {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = "0px", wn(() => {
          o.value.style.height = E + "px", t && uo(() => {
            t && T();
          });
        });
      }));
    }, C = () => {
      t = !1;
    }, V = () => {
      if (o.value) {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = E + "px", wn(() => {
          o.value.style.height = "0px";
        });
      }
    }, T = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, k = {
      index: n,
      name: m,
      init: y
    };
    return a(k), le(i, (E) => {
      E ? g() : V();
    }), {
      n: gp,
      start: C,
      classes: yp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: b,
      contentEl: o,
      transitionend: T,
      formatElevation: gn
    };
  }
});
Lu.render = bp;
const Kr = Lu;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var yk = Kr, wp = {
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
  n: Cp
} = ne("countdown"), ei = 1e3, ni = 60 * ei, ri = 60 * ni, Sl = 24 * ri;
function Sp(e, n) {
  return h(), $(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", Tt(lo(e.timeData)), () => [Se(
      oe(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Ru = ee({
  name: "VarCountdown",
  props: wp,
  setup(e) {
    var n = O(""), r = O({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (y, b) => {
      var g = Object.values(b), C = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (C.forEach((k, E) => {
        y.includes(k) ? y = y.replace(k, Aa("" + g[E], 2, "0")) : g[E + 1] += g[E] * V[E];
      }), y.includes("S")) {
        var T = Aa("" + g[g.length - 1], 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", T) : y.includes("SS") ? y = y.replace("SS", T.slice(0, 2)) : y = y.replace("S", T.slice(0, 1));
      }
      return y;
    }, u = (y) => {
      var b = Math.floor(y / Sl), g = Math.floor(y % Sl / ri), C = Math.floor(y % ri / ni), V = Math.floor(y % ni / ei), T = Math.floor(y % ei), k = {
        days: b,
        hours: g,
        minutes: C,
        seconds: V,
        milliseconds: T
      };
      r.value = k, S(e.onChange, r.value), n.value = s(e.format, k);
    }, d = () => {
      var {
        time: y,
        onEnd: b
      } = e, g = performance.now();
      if (a || (a = g + L(y)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        S(b);
        return;
      }
      t && (o = wn(d));
    }, v = function(y) {
      y === void 0 && (y = !1), !(t && !y) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, ul(o);
    }, m = () => {
      a = 0, t = !1, ul(o), d();
    };
    return le(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Mr(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), xa(() => {
      i = t, f();
    }), io(f), {
      showTime: n,
      timeData: r,
      n: Cp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Ru.render = Sp;
const Zr = Ru;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var bk = Zr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ha = 9e15, Br = 1e9, ai = "0123456789abcdef", Jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ti = {
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
  minE: -Ha,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ha,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Uu, jn, ge = !0, go = "[DecimalError] ", Or = go + "Invalid argument: ", Yu = go + "Precision limit exceeded", Hu = go + "crypto unavailable", Fu = "[object Decimal]", tn = Math.floor, Ze = Math.pow, kp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, $p = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Tp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ju = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Dn = 1e7, pe = 7, Pp = 9007199254740991, Op = Jt.length - 1, oi = Qt.length - 1, J = { toStringTag: Fu };
J.absoluteValue = J.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ce(e);
};
J.ceil = function() {
  return ce(new this.constructor(this), this.e + 1, 2);
};
J.clampedTo = J.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Or + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
J.comparedTo = J.cmp = function(e) {
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
J.cosine = J.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + pe, a.rounding = 1, r = Vp(a, Ku(a, r)), a.precision = e, a.rounding = n, ce(jn == 2 || jn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
J.cubeRoot = J.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ge = !1, o = d.s * Ze(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = nn(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ze(r, 1 / 3), e = tn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Be(u.plus(d).times(i), u.plus(s), l + 2, 1), nn(i.d).slice(0, l) === (r = nn(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ce(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ce(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return ge = !0, ce(a, e, v.rounding, n);
};
J.decimalPlaces = J.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - tn(this.e / pe)) * pe, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
J.dividedBy = J.div = function(e) {
  return Be(this, new this.constructor(e));
};
J.dividedToIntegerBy = J.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ce(Be(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
J.equals = J.eq = function(e) {
  return this.cmp(e) === 0;
};
J.floor = function() {
  return ce(new this.constructor(this), this.e + 1, 3);
};
J.greaterThan = J.gt = function(e) {
  return this.cmp(e) > 0;
};
J.greaterThanOrEqualTo = J.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
J.hyperbolicCosine = J.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / bo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ka(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ce(o, l.precision = r, l.rounding = a, !0);
};
J.hyperbolicSine = J.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ka(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / bo(5, e)), t = Ka(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, ce(t, n, r, !0);
};
J.hyperbolicTangent = J.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Be(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
J.inverseCosine = J.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Nn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Nn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Nn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
J.inverseHyperbolicCosine = J.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ge = !1, r = r.times(r).minus(1).sqrt().plus(r), ge = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
J.inverseHyperbolicSine = J.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ge = !1, r = r.times(r).plus(1).sqrt().plus(r), ge = !0, a.precision = e, a.rounding = n, r.ln());
};
J.inverseHyperbolicTangent = J.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ce(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Be(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
J.inverseSine = J.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Nn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
J.inverseTangent = J.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= oi)
      return l = Nn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= oi)
      return l = Nn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / pe + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ge = !1, n = Math.ceil(i / pe), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), ge = !0, ce(l, d.precision = v, d.rounding = f, !0);
};
J.isFinite = function() {
  return !!this.d;
};
J.isInteger = J.isInt = function() {
  return !!this.d && tn(this.e / pe) > this.d.length - 2;
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
  if (ge = !1, i = v + m, l = vr(u, i), a = n ? _t(d, i + 10) : vr(e, i), s = Be(l, a, i, 1), yt(s.d, t = v, f))
    do
      if (i += 10, l = vr(u, i), a = n ? _t(d, i + 10) : vr(e, i), s = Be(l, a, i, 1), !o) {
        +nn(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ce(s, v + 1, 0));
        break;
      }
    while (yt(s.d, t += 10, f));
  return ge = !0, ce(s, v, f);
};
J.minus = J.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, y = m.constructor;
  if (e = new y(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new y(NaN) : m.d ? e.s = -e.s : e = new y(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = y.precision, s = y.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new y(m);
    else
      return new y(s === 3 ? -0 : 0);
    return ge ? ce(e, i, s) : e;
  }
  if (r = tn(e.e / pe), d = tn(m.e / pe), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / pe), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
        u[t] = Dn - 1;
      --u[t], u[a] += Dn;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = yo(u, r), ge ? ce(e, i, s) : e) : new y(s === 3 ? -0 : 0);
};
J.modulo = J.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ce(new a(r), a.precision, a.rounding) : (ge = !1, a.modulo == 9 ? (n = Be(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Be(r, e, 0, a.modulo, 1), n = n.times(e), ge = !0, r.minus(n));
};
J.naturalExponential = J.exp = function() {
  return ii(this);
};
J.naturalLogarithm = J.ln = function() {
  return vr(this);
};
J.negated = J.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ce(e);
};
J.plus = J.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ge ? ce(e, i, s) : e;
  if (o = tn(v.e / pe), a = tn(e.e / pe), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / pe), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Dn | 0, u[t] %= Dn;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = yo(u, a), ge ? ce(e, i, s) : e;
};
J.precision = J.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Or + e);
  return r.d ? (n = Wu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
J.round = function() {
  var e = this, n = e.constructor;
  return ce(new n(e), e.e + 1, n.rounding);
};
J.sine = J.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + pe, a.rounding = 1, r = Ep(a, Ku(a, r)), a.precision = e, a.rounding = n, ce(jn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
J.squareRoot = J.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ge = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = nn(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = tn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Be(l, o, r + 2, 1)).times(0.5), nn(o.d).slice(0, r) === (n = nn(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ce(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ce(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return ge = !0, ce(a, s, d.rounding, e);
};
J.tangent = J.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Be(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ce(jn == 2 || jn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
J.times = J.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = tn(d.e / pe) + tn(e.e / pe), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % Dn | 0, n = i / Dn | 0;
    o[t] = (o[t] + n) % Dn | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = yo(o, r), ge ? ce(e, v.precision, v.rounding) : e;
};
J.toBinary = function(e, n) {
  return Yi(this, 2, e, n);
};
J.toDecimalPlaces = J.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (hn(e, 0, Br), n === void 0 ? n = a.rounding : hn(n, 0, 8), ce(r, e + r.e + 1, n));
};
J.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Yn(a, !0) : (hn(e, 0, Br), n === void 0 ? n = t.rounding : hn(n, 0, 8), a = ce(new t(a), e + 1, n), r = Yn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
J.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Yn(t) : (hn(e, 0, Br), n === void 0 ? n = o.rounding : hn(n, 0, 8), a = ce(new o(t), e + t.e + 1, n), r = Yn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
J.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, y = m.d, b = m.constructor;
  if (!y)
    return new b(m);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), o = n.e = Wu(y) - m.e - 1, l = o % pe, n.d[0] = Ze(10, l < 0 ? pe + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(Or + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (ge = !1, i = new b(nn(y)), d = b.precision, b.precision = o = y.length * pe * 2; v = Be(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Be(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Be(u, a, o, 1).minus(m).abs().cmp(Be(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], b.precision = d, ge = !0, f;
};
J.toHexadecimal = J.toHex = function(e, n) {
  return Yi(this, 16, e, n);
};
J.toNearest = function(e, n) {
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
  return e.d[0] ? (ge = !1, r = Be(r, e, 0, n, 1).times(e), ge = !0, ce(r)) : (e.s = r.s, r = e), r;
};
J.toNumber = function() {
  return +this;
};
J.toOctal = function(e, n) {
  return Yi(this, 8, e, n);
};
J.toPower = J.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ze(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ce(i, a, o);
  if (n = tn(e.e / pe), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Pp)
    return t = Gu(s, i, r, a), e.s < 0 ? new s(1).div(t) : ce(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ze(+i, u), n = r == 0 || !isFinite(r) ? tn(u * (Math.log("0." + nn(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (ge = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = ii(e.times(vr(i, a + r)), a), t.d && (t = ce(t, a + 5, 1), yt(t.d, a, o) && (n = a + 10, t = ce(ii(e.times(vr(i, n + r)), n), n + 5, 1), +nn(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ce(t, a + 1, 0)))), t.s = l, ge = !0, s.rounding = o, ce(t, a, o));
};
J.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Yn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (hn(e, 1, Br), n === void 0 ? n = t.rounding : hn(n, 0, 8), a = ce(new t(a), e, n), r = Yn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
J.toSignificantDigits = J.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (hn(e, 1, Br), n === void 0 ? n = a.rounding : hn(n, 0, 8)), ce(new a(r), e, n);
};
J.toString = function() {
  var e = this, n = e.constructor, r = Yn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
J.truncated = J.trunc = function() {
  return ce(new this.constructor(this), this.e + 1, 1);
};
J.valueOf = J.toJSON = function() {
  var e = this, n = e.constructor, r = Yn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function nn(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = pe - a.length, r && (o += tr(r)), o += a;
    l = e[n], a = l + "", r = pe - a.length, r && (o += tr(r));
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
function yt(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += pe, t = 0) : (t = Math.ceil((n + 1) / pe), n %= pe), o = Ze(10, pe - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ze(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ze(10, n - 3) - 1, l;
}
function Yt(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += ai.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Vp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / bo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ka(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, m, y, b, g, C, V, T, k, E, M, P, p, w, U, N, X, K = a.constructor, A = a.s == t.s ? 1 : -1, z = a.d, F = t.d;
    if (!z || !z[0] || !F || !F[0])
      return new K(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (z ? F && z[0] == F[0] : !F) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          z && z[0] == 0 || !F ? A * 0 : A / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Dn, m = pe, d = tn(a.e / m) - tn(t.e / m)), N = F.length, w = z.length, C = new K(A), V = C.d = [], v = 0; F[v] == (z[v] || 0); v++)
      ;
    if (F[v] > (z[v] || 0) && d--, o == null ? (M = o = K.precision, l = K.rounding) : i ? M = o + (a.e - t.e) + 1 : M = o, M < 0)
      V.push(1), y = !0;
    else {
      if (M = M / m + 2 | 0, v = 0, N == 1) {
        for (f = 0, F = F[0], M++; (v < w || f) && M--; v++)
          P = f * s + (z[v] || 0), V[v] = P / F | 0, f = P % F | 0;
        y = f || v < w;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), z = e(z, f, s), N = F.length, w = z.length), p = N, T = z.slice(0, N), k = T.length; k < N; )
          T[k++] = 0;
        X = F.slice(), X.unshift(0), U = F[0], F[1] >= s / 2 && ++U;
        do
          f = 0, u = n(F, T, N, k), u < 0 ? (E = T[0], N != k && (E = E * s + (T[1] || 0)), f = E / U | 0, f > 1 ? (f >= s && (f = s - 1), b = e(F, f, s), g = b.length, k = T.length, u = n(b, T, g, k), u == 1 && (f--, r(b, N < g ? X : F, g, s))) : (f == 0 && (u = f = 1), b = F.slice()), g = b.length, g < k && b.unshift(0), r(T, b, k, s), u == -1 && (k = T.length, u = n(F, T, N, k), u < 1 && (f++, r(T, N < k ? X : F, k, s))), k = T.length) : u === 0 && (f++, T = [0]), V[v++] = f, u && T[0] ? T[k++] = z[p] || 0 : (T = [z[p]], k = 1);
        while ((p++ < w || T[0] !== void 0) && M--);
        y = T[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      C.e = d, Uu = y;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      C.e = v + d * m - 1, ce(C, i ? o + C.e + 1 : o, l, y);
    }
    return C;
  };
}();
function ce(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += pe, l = n, d = v[f = 0], s = d / Ze(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / pe), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= pe, l = o - pe + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= pe, l = o - pe + t, s = l < 0 ? 0 : d / Ze(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ze(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Ze(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ze(10, (pe - n % pe) % pe), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ze(10, pe - o), v[f] = l > 0 ? (d / Ze(10, t - l) % Ze(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Dn && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Dn)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return ge && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Yn(e, n, r) {
  if (!e.isFinite())
    return Xu(e);
  var a, t = e.e, o = nn(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + tr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + tr(-t - 1) + o, r && (a = r - l) > 0 && (o += tr(a))) : t >= l ? (o += tr(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + tr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += tr(a))), o;
}
function yo(e, n) {
  var r = e[0];
  for (n *= pe; r >= 10; r /= 10)
    n++;
  return n;
}
function _t(e, n, r) {
  if (n > Op)
    throw ge = !0, r && (e.precision = r), Error(Yu);
  return ce(new e(Jt), n, 1, !0);
}
function Nn(e, n, r) {
  if (n > oi)
    throw Error(Yu);
  return ce(new e(Qt), n, r, !0);
}
function Wu(e) {
  var n = e.length - 1, r = n * pe + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function tr(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Gu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / pe + 4);
  for (ge = !1; ; ) {
    if (r % 2 && (o = o.times(n), $l(o.d, l) && (t = !0)), r = tn(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), $l(n.d, l);
  }
  return ge = !0, o;
}
function kl(e) {
  return e.d[e.d.length - 1] & 1;
}
function qu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ii(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, y = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ge = !1, s = y) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ce(o.times(e), s, 1), r = r.times(++d), i = l.plus(Be(o, r, s, 1)), nn(i.d).slice(0, s) === nn(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ce(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && yt(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ce(l, f.precision = y, m, ge = !0);
      else
        return f.precision = y, l;
    }
    l = i;
  }
}
function vr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, y = 10, b = e, g = b.d, C = b.constructor, V = C.rounding, T = C.precision;
  if (b.s < 0 || !g || !g[0] || !b.e && g[0] == 1 && g.length == 1)
    return new C(g && !g[0] ? -1 / 0 : b.s != 1 ? NaN : g ? 0 : b);
  if (n == null ? (ge = !1, d = T) : d = n, C.precision = d += y, r = nn(g), a = r.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = nn(b.d), a = r.charAt(0), m++;
    o = b.e, a > 1 ? (b = new C("0." + r), o++) : b = new C(a + "." + r.slice(1));
  } else
    return u = _t(C, d + 2, T).times(o + ""), b = vr(new C(a + "." + r.slice(1)), d - y).plus(u), C.precision = T, n == null ? ce(b, T, V, ge = !0) : b;
  for (v = b, s = l = b = Be(b.minus(1), b.plus(1), d, 1), f = ce(b.times(b), d, 1), t = 3; ; ) {
    if (l = ce(l.times(f), d, 1), u = s.plus(Be(l, new C(t), d, 1)), nn(u.d).slice(0, d) === nn(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(_t(C, d + 2, T).times(o + ""))), s = Be(s, new C(m), d, 1), n == null)
        if (yt(s.d, d - y, V, i))
          C.precision = d += y, u = l = b = Be(v.minus(1), v.plus(1), d, 1), f = ce(b.times(b), d, 1), t = i = 1;
        else
          return ce(s, C.precision = T, V, ge = !0);
      else
        return C.precision = T, s;
    s = u, t += 2;
  }
}
function Xu(e) {
  return String(e.s * e.s / 0);
}
function li(e, n) {
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
    e.d.push(+n), ge && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Mp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), ju.test(n))
      return li(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if ($p.test(n))
    r = 16, n = n.toLowerCase();
  else if (kp.test(n))
    r = 2;
  else if (Tp.test(n))
    r = 8;
  else
    throw Error(Or + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Gu(a, new a(r), o, o * 2)), u = Yt(n, r, Dn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = yo(u, d), e.d = u, ge = !1, l && (e = Be(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ze(2, s) : fr.pow(2, s))), ge = !0, e);
}
function Ep(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ka(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / bo(5, r)), n = Ka(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Ka(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / pe);
  for (ge = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Be(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Be(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return ge = !0, l.d.length = d + 1, l;
}
function bo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Ku(e, n) {
  var r, a = n.s < 0, t = Nn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return jn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    jn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return jn = kl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    jn = kl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Yi(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, y = r !== void 0;
  if (y ? (hn(r, 1, Br), a === void 0 ? a = m.rounding : hn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Xu(e);
  else {
    for (d = Yn(e), l = d.indexOf("."), y ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Yt(Yn(f), 10, t), f.e = f.d.length), v = Yt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = y ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Be(e, f, r, a, 0, t), v = e.d, o = e.e, u = Uu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ai.charAt(v[l]);
      if (y) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Yt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += ai.charAt(v[l]);
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
function $l(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Ip(e) {
  return new this(e).abs();
}
function Bp(e) {
  return new this(e).acos();
}
function Np(e) {
  return new this(e).acosh();
}
function Dp(e, n) {
  return new this(e).plus(n);
}
function Ap(e) {
  return new this(e).asin();
}
function zp(e) {
  return new this(e).asinh();
}
function Lp(e) {
  return new this(e).atan();
}
function Rp(e) {
  return new this(e).atanh();
}
function Up(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Nn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Nn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Nn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Be(e, n, o, 1)), n = Nn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Be(e, n, o, 1)), r;
}
function Yp(e) {
  return new this(e).cbrt();
}
function Hp(e) {
  return ce(e = new this(e), e.e + 1, 2);
}
function Fp(e, n, r) {
  return new this(e).clamp(n, r);
}
function jp(e) {
  if (!e || typeof e != "object")
    throw Error(go + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Br,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ha,
    0,
    "toExpPos",
    0,
    Ha,
    "maxE",
    0,
    Ha,
    "minE",
    -Ha,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = ti[r]), (a = e[r]) !== void 0)
      if (tn(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(Or + r + ": " + a);
  if (r = "crypto", t && (this[r] = ti[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Hu);
      else
        this[r] = !1;
    else
      throw Error(Or + r + ": " + a);
  return this;
}
function Wp(e) {
  return new this(e).cos();
}
function Gp(e) {
  return new this(e).cosh();
}
function Zu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Tl(o)) {
      u.s = o.s, ge ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        ge ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return li(u, o.toString());
    } else if (s !== "string")
      throw Error(Or + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), ju.test(o) ? li(u, o) : Mp(u, o);
  }
  if (t.prototype = J, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = jp, t.clone = Zu, t.isDecimal = Tl, t.abs = Ip, t.acos = Bp, t.acosh = Np, t.add = Dp, t.asin = Ap, t.asinh = zp, t.atan = Lp, t.atanh = Rp, t.atan2 = Up, t.cbrt = Yp, t.ceil = Hp, t.clamp = Fp, t.cos = Wp, t.cosh = Gp, t.div = qp, t.exp = Xp, t.floor = Kp, t.hypot = Zp, t.ln = Jp, t.log = Qp, t.log10 = xp, t.log2 = _p, t.max = eh, t.min = nh, t.mod = rh, t.mul = ah, t.pow = th, t.random = oh, t.round = ih, t.sign = lh, t.sin = sh, t.sinh = uh, t.sqrt = dh, t.sub = vh, t.sum = fh, t.tan = ch, t.tanh = mh, t.trunc = ph, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function qp(e, n) {
  return new this(e).div(n);
}
function Xp(e) {
  return new this(e).exp();
}
function Kp(e) {
  return ce(e = new this(e), e.e + 1, 3);
}
function Zp() {
  var e, n, r = new this(0);
  for (ge = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return ge = !0, new this(1 / 0);
      r = n;
    }
  return ge = !0, r.sqrt();
}
function Tl(e) {
  return e instanceof fr || e && e.toStringTag === Fu || !1;
}
function Jp(e) {
  return new this(e).ln();
}
function Qp(e, n) {
  return new this(e).log(n);
}
function _p(e) {
  return new this(e).log(2);
}
function xp(e) {
  return new this(e).log(10);
}
function eh() {
  return qu(this, arguments, "lt");
}
function nh() {
  return qu(this, arguments, "gt");
}
function rh(e, n) {
  return new this(e).mod(n);
}
function ah(e, n) {
  return new this(e).mul(n);
}
function th(e, n) {
  return new this(e).pow(n);
}
function oh(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : hn(e, 1, Br), a = Math.ceil(e / pe), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Hu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= pe, a && e && (t = Ze(10, pe - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= pe)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < pe && (r -= pe - a);
  }
  return l.e = r, l.d = i, l;
}
function ih(e) {
  return ce(e = new this(e), e.e + 1, this.rounding);
}
function lh(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function sh(e) {
  return new this(e).sin();
}
function uh(e) {
  return new this(e).sinh();
}
function dh(e) {
  return new this(e).sqrt();
}
function vh(e, n) {
  return new this(e).sub(n);
}
function fh() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ge = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ge = !0, ce(r, this.precision, this.rounding);
}
function ch(e) {
  return new this(e).tan();
}
function mh(e) {
  return new this(e).tanh();
}
function ph(e) {
  return ce(e = new this(e), e.e + 1, 1);
}
J[Symbol.for("nodejs.util.inspect.custom")] = J.toString;
J[Symbol.toStringTag] = "Decimal";
var fr = J.constructor = Zu(ti);
Jt = new fr(Jt);
Qt = new fr(Qt);
var hh = {
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
  n: gh,
  classes: yh
} = ne("counter"), Pl = 100, Ol = 600, bh = ["inputmode", "readonly", "disabled"];
function wh(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = ie("var-form-details");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      Ne({
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
        default: fe(() => [Q(r, {
          name: "minus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), ke(D("input", {
        class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
        style: q({
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
      }, null, 46, bh), [[Xv, e.inputValue]]), Q(a, {
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
        default: fe(() => [Q(r, {
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
    VarButton: rn,
    VarIcon: Ve,
    VarFormDetails: en
  },
  directives: {
    Ripple: qe
  },
  inheritAttrs: !1,
  props: hh,
  setup(e) {
    var n = O(""), {
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
    } = a ?? {}, d, v, f, m, y = () => l(e.rules, e.modelValue), b = (F) => {
      ze(() => {
        var {
          validateTrigger: W,
          rules: ae,
          modelValue: I
        } = e;
        o(W, F, ae, I);
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
    }, V = R(() => {
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
        min: I
      } = e, B = L(F);
      return ae != null && B > L(ae) && (B = L(ae)), I != null && B < L(I) && (B = L(I)), F = String(B), W != null && (F = B.toFixed(L(W))), F;
    }, E = (F) => {
      var {
        lazyChange: W,
        onBeforeChange: ae
      } = e, {
        value: I
      } = F.target, B = k(I);
      W ? S(ae, L(B), z) : A(B), b("onInputChange");
    }, M = () => {
      var {
        disabled: F,
        readonly: W,
        disableDecrement: ae,
        decrementButton: I,
        lazyChange: B,
        step: G,
        modelValue: re,
        onDecrement: H,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || W || ae || !I) && !T.value) {
        var _ = new fr(L(re)).minus(new fr(L(G))).toString(), ve = k(_), Ce = L(ve);
        S(H, Ce), B ? S(Z, Ce, z) : (A(ve), b("onDecrement"));
      }
    }, P = () => {
      var {
        disabled: F,
        readonly: W,
        disableIncrement: ae,
        incrementButton: I,
        lazyChange: B,
        step: G,
        modelValue: re,
        onIncrement: H,
        onBeforeChange: Z
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || W || ae || !I) && !V.value) {
        var _ = new fr(L(re)).plus(new fr(L(G))).toString(), ve = k(_), Ce = L(ve);
        S(H, Ce), B ? S(Z, Ce, z) : (A(ve), b("onIncrement"));
      }
    }, p = () => {
      var {
        press: F,
        lazyChange: W
      } = e;
      !F || W || (m = window.setTimeout(() => {
        K();
      }, Ol));
    }, w = () => {
      var {
        press: F,
        lazyChange: W
      } = e;
      !F || W || (f = window.setTimeout(() => {
        X();
      }, Ol));
    }, U = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, N = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, X = () => {
      d = window.setTimeout(() => {
        P(), X();
      }, Pl);
    }, K = () => {
      v = window.setTimeout(() => {
        M(), K();
      }, Pl);
    }, A = (F) => {
      n.value = F;
      var W = L(F);
      S(e["onUpdate:modelValue"], W);
    }, z = (F) => {
      A(k(String(F))), b("onLazyChange");
    };
    return S(r, C), le(() => e.modelValue, (F) => {
      A(k(String(F))), S(e.onChange, L(F));
    }), A(k(String(e.modelValue))), {
      n: gh,
      classes: yh,
      formatElevation: gn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: T,
      validate: y,
      reset: g,
      resetValidation: i,
      handleChange: E,
      decrement: M,
      increment: P,
      pressDecrement: p,
      pressIncrement: w,
      releaseDecrement: U,
      releaseIncrement: N,
      toSizeUnit: ye,
      toNumber: L
    };
  }
});
Ju.render = wh;
const Jr = Ju;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var wk = Jr, Qu = 60, _u = Qu * 60, xu = _u * 24, Ch = xu * 7, Za = 1e3, Mo = Qu * Za, Vl = _u * Za, Sh = xu * Za, kh = Ch * Za, Hi = "millisecond", Fa = "second", ja = "minute", Wa = "hour", or = "day", Ht = "week", Bn = "month", ed = "quarter", ir = "year", Ga = "date", $h = "YYYY-MM-DDTHH:mm:ssZ", Ml = "Invalid Date", Th = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Ph = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Oh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var si = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Vh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + si(t, 2, "0") + ":" + si(o, 2, "0");
}, Mh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Bn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Bn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, Eh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Ih = function(n) {
  var r = {
    M: Bn,
    y: ir,
    w: Ht,
    d: or,
    D: Ga,
    h: Wa,
    m: ja,
    s: Fa,
    ms: Hi,
    Q: ed
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Bh = function(n) {
  return n === void 0;
};
const Nh = {
  s: si,
  z: Vh,
  m: Mh,
  a: Eh,
  p: Ih,
  u: Bh
};
var dt = "en", Qr = {};
Qr[dt] = Oh;
var Fi = function(n) {
  return n instanceof wo;
}, xt = function e(n, r, a) {
  var t;
  if (!n)
    return dt;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Qr[o] && (t = o), r && (Qr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Qr[i] = n, t = i;
  }
  return !a && t && (dt = t), t || !a && dt;
}, ue = function(n, r) {
  if (Fi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new wo(a);
}, Dh = function(n, r) {
  return ue(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ie = Nh;
Ie.l = xt;
Ie.i = Fi;
Ie.w = Dh;
var Ah = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ie.u(r))
    return /* @__PURE__ */ new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Th);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, wo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = xt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Ah(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Ie;
  }, n.isValid = function() {
    return this.$d.toString() !== Ml;
  }, n.isSame = function(a, t) {
    var o = ue(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return ue(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < ue(a);
  }, n.$g = function(a, t, o) {
    return Ie.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Ie.u(t) ? !0 : t, i = Ie.p(a), s = function(C, V) {
      var T = Ie.w(o.$u ? Date.UTC(o.$y, V, C) : new Date(o.$y, V, C), o);
      return l ? T : T.endOf(or);
    }, u = function(C, V) {
      var T = [0, 0, 0, 0], k = [23, 59, 59, 999];
      return Ie.w(o.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? T : k).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case ir:
        return l ? s(1, 0) : s(31, 11);
      case Bn:
        return l ? s(1, v) : s(0, v + 1);
      case Ht: {
        var y = this.$locale().weekStart || 0, b = (d < y ? d + 7 : d) - y;
        return s(l ? f - b : f + (6 - b), v);
      }
      case or:
      case Ga:
        return u(m + "Hours", 0);
      case Wa:
        return u(m + "Minutes", 1);
      case ja:
        return u(m + "Seconds", 2);
      case Fa:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Ie.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[or] = i + "Date", o[Ga] = i + "Date", o[Bn] = i + "Month", o[ir] = i + "FullYear", o[Wa] = i + "Hours", o[ja] = i + "Minutes", o[Fa] = i + "Seconds", o[Hi] = i + "Milliseconds", o)[l], u = l === or ? this.$D + (t - this.$W) : t;
    if (l === Bn || l === ir) {
      var d = this.clone().set(Ga, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ga, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Ie.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Ie.p(t), s = function(f) {
      var m = ue(o);
      return Ie.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Bn)
      return this.set(Bn, this.$M + a);
    if (i === ir)
      return this.set(ir, this.$y + a);
    if (i === or)
      return s(1);
    if (i === Ht)
      return s(7);
    var u = (l = {}, l[ja] = Mo, l[Wa] = Vl, l[Fa] = Za, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Ie.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Ml;
    var l = a || $h, i = Ie.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, y = function(T, k, E, M) {
      return T && (T[k] || T(t, l)) || E[k].slice(0, M);
    }, b = function(T) {
      return Ie.s(s % 12 || 12, T, "0");
    }, g = m || function(V, T, k) {
      var E = V < 12 ? "AM" : "PM";
      return k ? E.toLowerCase() : E;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ie.s(d + 1, 2, "0"),
      MMM: y(o.monthsShort, d, f, 3),
      MMMM: y(f, d),
      D: this.$D,
      DD: Ie.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: y(o.weekdaysMin, this.$W, v, 2),
      ddd: y(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Ie.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Ie.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ie.s(this.$s, 2, "0"),
      SSS: Ie.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(Ph, function(V, T) {
      return T || C[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Ie.p(t), s = ue(a), u = (s.utcOffset() - this.utcOffset()) * Mo, d = this - s, v = Ie.m(this, s);
    return v = (l = {}, l[ir] = v / 12, l[Bn] = v, l[ed] = v / 3, l[Ht] = (d - u) / kh, l[or] = (d - u) / Sh, l[Wa] = d / Vl, l[ja] = d / Mo, l[Fa] = d / Za, l)[i] || d, o ? v : Ie.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Bn).$D;
  }, n.$locale = function() {
    return Qr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = xt(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Ie.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), nd = wo.prototype;
ue.prototype = nd;
[["$ms", Hi], ["$s", Fa], ["$m", ja], ["$H", Wa], ["$W", or], ["$M", Bn], ["$y", ir], ["$D", Ga]].forEach(function(e) {
  nd[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ue.extend = function(e, n) {
  return e.$i || (e(n, wo, ue), e.$i = !0), ue;
};
ue.locale = xt;
ue.isDayjs = Fi;
ue.unix = function(e) {
  return ue(e * 1e3);
};
ue.en = Qr[dt];
ue.Ls = Qr;
ue.p = {};
const rd = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, ad = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function zh(e) {
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
}], Lh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: zh
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
  n: Rh
} = ne("picker-header");
function Uh(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
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
      onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
    }, {
      default: fe(() => [Q(r, {
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
      [Q(Re, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: fe(() => [(h(), $(
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
      onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
    }, {
      default: fe(() => [Q(r, {
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
    VarButton: rn,
    VarIcon: Ve
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
    } = n, a = O(!1), t = O(0), o = R(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (i = Qe.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Qe.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: Rh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
td.render = Uh;
const od = td;
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ui.apply(this, arguments);
}
ue.extend(rd);
ue.extend(ad);
var {
  n: Nt,
  classes: Yh
} = ne("month-picker"), {
  n: Dt
} = ne("date-picker");
function Hh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
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
      [Q(r, {
        ref: "headerEl",
        type: "month",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickYear,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), Q(Re, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: fe(() => [(h(), $("ul", {
          key: e.panelKey
        }, [(h(!0), $(
          Me,
          null,
          Ye(e.MONTH_LIST, (t) => (h(), $("li", {
            key: t.index
          }, [Q(a, Ne({
            type: "primary",
            "var-month-picker-cover": "",
            ripple: !1,
            elevation: e.componentProps.buttonElevation
          }, ui({}, e.buttonProps(t.index)), {
            onClick: (o) => e.chooseMonth(t, o)
          }), {
            default: fe(() => [Se(
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
var id = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: rn,
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
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t] = e.current.split("-"), o = O(!1), l = O(0), i = O(null), s = Le({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (V) => {
      var T, k;
      return (T = (k = Qe.value.datePickerMonthDict) == null ? void 0 : k[V].abbr) != null ? T : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: T
        },
        componentProps: {
          min: k,
          max: E
        }
      } = e, M = !0, P = !0, p = T + "-" + V;
      return E && (M = ue(p).isSameOrBefore(ue(E), "month")), k && (P = ue(p).isSameOrAfter(ue(k), "month")), M && P;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: T,
          chooseDays: k,
          chooseRangeMonth: E
        },
        componentProps: {
          type: M,
          range: P
        }
      } = e;
      if (P) {
        if (!E.length)
          return !1;
        var p = ue(V).isSameOrBefore(ue(E[1]), "month"), w = ue(V).isSameOrAfter(ue(E[0]), "month");
        return p && w;
      }
      return M === "month" ? T.includes(V) : k.some((U) => U.includes(V));
    }, y = (V) => {
      var {
        choose: {
          chooseMonth: T
        },
        preview: {
          previewYear: k
        },
        componentProps: {
          allowedDates: E,
          color: M,
          multiple: P,
          range: p
        }
      } = e, w = k + "-" + V, U = () => p || P ? m(w) : (T == null ? void 0 : T.index) === V && u.value, N = () => f(V) ? E ? !E(w) : !1 : !0, X = N(), K = () => X ? !0 : p || P ? !m(w) : !u.value || (T == null ? void 0 : T.index) !== V, A = () => d.value && t === V && e.componentProps.showCurrent ? (p || P || u.value) && X ? !0 : p || P ? !m(w) : u.value ? (T == null ? void 0 : T.index) !== t : !0 : !1, z = () => X ? "" : A() ? M ?? "" : U() ? "" : Dt() + "-color-cover", F = z().startsWith(Dt());
      return {
        outline: A(),
        text: K(),
        color: K() ? "" : M,
        textColor: F ? "" : z(),
        [Dt() + "-color-cover"]: F,
        class: Yh(Nt("button"), [X, Nt("button--disabled")]),
        disabled: X
      };
    }, b = (V, T) => {
      var k = T.currentTarget;
      k.classList.contains(Nt("button--disabled")) || r("choose-month", V);
    }, g = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, C = (V) => {
      i.value.checkDate(V);
    };
    return le(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: T,
          max: k
        }
      } = e;
      k && (s.right = !ue("" + (L(V) + 1)).isSameOrBefore(ue(k), "year")), T && (s.left = !ue("" + (L(V) - 1)).isSameOrAfter(ue(T), "year"));
    }, {
      immediate: !0
    }), {
      n: Nt,
      nDate: Dt,
      pack: Qe,
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
id.render = Hh;
const Fh = id;
var {
  n: El,
  classes: jh
} = ne("year-picker"), Wh = ["onClick"];
function Gh(e, n) {
  return h(), $(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), $(
      Me,
      null,
      Ye(e.yearList, (r) => (h(), $("li", {
        key: r,
        class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
        style: q({
          color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(r)
      }, oe(r), 15, Wh))),
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
  setup(e, n) {
    var {
      emit: r
    } = n, a = R(() => {
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
        var d = ue(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ue(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var y = u[0]; y >= u[1]; y--)
        o.push(y);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return on(() => {
      var o = document.querySelector("." + El("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: El,
      classes: jh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
ld.render = Gh;
const qh = ld;
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
ue.extend(rd);
ue.extend(ad);
var {
  n: Ya,
  classes: Xh
} = ne("day-picker"), {
  n: At
} = ne("date-picker");
function Kh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
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
      [Q(r, {
        ref: "headerEl",
        type: "day",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickMonth,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), Q(Re, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: fe(() => [(h(), $("div", {
          key: e.panelKey
        }, [D(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(h(!0), $(
            Me,
            null,
            Ye(e.sortWeekList, (t) => (h(), $(
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
        ), D(
          "ul",
          {
            class: c(e.n("body"))
          },
          [(h(!0), $(
            Me,
            null,
            Ye(e.days, (t, o) => (h(), $("li", {
              key: o
            }, [Q(a, Ne({
              type: "primary",
              "var-day-picker-cover": "",
              round: "",
              ripple: !1,
              elevation: e.componentProps.buttonElevation
            }, di({}, e.buttonProps(t)), {
              onClick: (l) => e.chooseDay(t, l)
            }), {
              default: fe(() => [Se(
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
var sd = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: rn,
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
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t, o] = e.current.split("-"), l = O([]), i = O(!1), s = O(0), u = O(null), d = Le({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var p;
      return e.choose.chooseYear === e.preview.previewYear && ((p = e.choose.chooseMonth) == null ? void 0 : p.index) === e.preview.previewMonth.index;
    }), m = R(() => {
      var p = st.findIndex((w) => w.index === e.componentProps.firstDayOfWeek);
      return p === -1 || p === 0 ? st : st.slice(p).concat(st.slice(0, p));
    }), y = (p) => {
      var w, U;
      return (w = (U = Qe.value.datePickerWeekDict) == null ? void 0 : U[p].abbr) != null ? w : "";
    }, b = (p) => p > 0 ? p : "", g = () => {
      var {
        preview: {
          previewMonth: p,
          previewYear: w
        }
      } = e, U = ue(w + "-" + p.index).daysInMonth(), N = ue(w + "-" + p.index + "-01").day(), X = m.value.findIndex((K) => K.index === "" + N);
      l.value = [...Array(X).fill(-1), ...Array.from(Array(U + 1).keys())].filter((K) => K);
    }, C = () => {
      var {
        preview: {
          previewYear: p,
          previewMonth: w
        },
        componentProps: {
          max: U,
          min: N
        }
      } = e;
      if (U) {
        var X = p + "-" + (L(w.index) + 1);
        d.right = !ue(X).isSameOrBefore(ue(U), "month");
      }
      if (N) {
        var K = p + "-" + (L(w.index) - 1);
        d.left = !ue(K).isSameOrAfter(ue(N), "month");
      }
    }, V = (p) => {
      var {
        preview: {
          previewYear: w,
          previewMonth: U
        },
        componentProps: {
          min: N,
          max: X
        }
      } = e, K = !0, A = !0, z = w + "-" + U.index + "-" + p;
      return X && (K = ue(z).isSameOrBefore(ue(X), "day")), N && (A = ue(z).isSameOrAfter(ue(N), "day")), K && A;
    }, T = (p) => {
      var {
        choose: {
          chooseDays: w,
          chooseRangeDay: U
        },
        componentProps: {
          range: N
        }
      } = e;
      if (N) {
        if (!U.length)
          return !1;
        var X = ue(p).isSameOrBefore(ue(U[1]), "day"), K = ue(p).isSameOrAfter(ue(U[0]), "day");
        return X && K;
      }
      return w.includes(p);
    }, k = (p) => {
      if (p < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ya("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: w
        },
        preview: {
          previewYear: U,
          previewMonth: N
        },
        componentProps: {
          allowedDates: X,
          color: K,
          multiple: A,
          range: z
        }
      } = e, F = U + "-" + N.index + "-" + p, W = () => z || A ? T(F) : L(w) === p && f.value, ae = () => V(p) ? X ? !X(F) : !1 : !0, I = ae(), B = () => I ? !0 : z || A ? !T(F) : !f.value || L(w) !== p, G = () => v.value && L(o) === p && e.componentProps.showCurrent ? (z || A || f.value) && I ? !0 : z || A ? !T(F) : f.value ? w !== o : !0 : !1, re = () => I ? "" : G() ? K ?? "" : W() ? "" : At() + "-color-cover", H = re().startsWith(At());
      return {
        text: B(),
        outline: G(),
        textColor: H ? "" : re(),
        [At() + "-color-cover"]: H,
        class: Xh(Ya("button"), Ya("button--usable"), [I, Ya("button--disabled")]),
        disabled: I
      };
    }, E = (p) => {
      i.value = p === "prev", s.value += p === "prev" ? -1 : 1, r("check-preview", "month", p);
    }, M = (p, w) => {
      var U = w.currentTarget;
      U.classList.contains(Ya("button--disabled")) || r("choose-day", p);
    }, P = (p) => {
      u.value.checkDate(p);
    };
    return on(() => {
      g(), C();
    }), le(() => e.preview, () => {
      g(), C();
    }), {
      n: Ya,
      nDate: At,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: P,
      filterDay: b,
      getDayAbbr: y,
      checkDate: E,
      chooseDay: M,
      buttonProps: k
    };
  }
});
sd.render = Kh;
const Zh = sd;
var {
  n: Jh,
  classes: Qh
} = ne("date-picker");
function _h(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
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
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [j(e.$slots, "year", {
          year: e.chooseYear
        }, () => [Se(
          oe(e.chooseYear),
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
        [Q(Re, {
          name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
        }, {
          default: fe(() => {
            var o, l, i;
            return [e.type === "month" ? (h(), $("div", {
              key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
            }, [e.range ? j(e.$slots, "range", {
              key: 0,
              choose: e.getChoose.chooseRangeMonth
            }, () => [Se(
              oe(e.getMonthTitle),
              1
              /* TEXT */
            )]) : e.multiple ? j(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseMonths
            }, () => [Se(
              oe(e.getMonthTitle),
              1
              /* TEXT */
            )]) : j(e.$slots, "month", {
              key: 2,
              month: (l = e.chooseMonth) == null ? void 0 : l.index,
              year: e.chooseYear
            }, () => [Se(
              oe(e.getMonthTitle),
              1
              /* TEXT */
            )])])) : (h(), $("div", {
              key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
            }, [e.range ? j(e.$slots, "range", {
              key: 0,
              choose: e.formatRange
            }, () => [Se(
              oe(e.getDateTitle),
              1
              /* TEXT */
            )]) : e.multiple ? j(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseDays
            }, () => [Se(
              oe(e.getDateTitle),
              1
              /* TEXT */
            )]) : j(e.$slots, "date", Tt(Ne({
              key: 2
            }, e.slotProps)), () => [Se(
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
      [Q(Re, {
        name: e.n() + "-panel-fade"
      }, {
        default: fe(() => [e.getPanelType === "year" ? (h(), be(r, {
          key: 0,
          "component-props": e.componentProps,
          preview: e.previewYear,
          onChooseYear: e.getChooseYear
        }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), be(a, {
          key: 1,
          ref: "monthPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "click-year": () => e.clickEl("year"),
          "component-props": e.componentProps,
          onChooseMonth: e.getChooseMonth,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), be(t, {
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
    MonthPickerPanel: Fh,
    YearPickerPanel: qh,
    DayPickerPanel: Zh
  },
  props: Lh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ue().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Ft.find((se) => se.index === i), u = O(!1), d = O(!1), v = O(!0), f = O(), m = O(), y = O(), b = O(s), g = O(l), C = O(!1), V = O([]), T = O([]), k = O([]), E = O([]), M = O(null), P = O(null), p = Le({
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
      chooseYear: m.value,
      chooseDay: y.value,
      chooseMonths: V.value,
      chooseDays: T.value,
      chooseRangeMonth: k.value,
      chooseRangeDay: E.value
    })), U = R(() => ({
      previewMonth: b.value,
      previewYear: g.value
    })), N = R(() => {
      var {
        multiple: se,
        range: we
      } = e;
      if (we)
        return k.value.length ? k.value[0] + " ~ " + k.value[1] : "";
      var he = "";
      if (f.value) {
        var $e, Te;
        he = ($e = (Te = Qe.value.datePickerMonthDict) == null ? void 0 : Te[f.value.index].name) != null ? $e : "";
      }
      return se ? "" + V.value.length + Qe.value.datePickerSelected : he;
    }), X = R(() => {
      var se, we, he, $e, {
        multiple: Te,
        range: Ue
      } = e;
      if (Ue) {
        var un = E.value.map((Po) => ue(Po).format("YYYY-MM-DD"));
        return un.length ? un[0] + " ~ " + un[1] : "";
      }
      if (Te)
        return "" + T.value.length + Qe.value.datePickerSelected;
      if (!m.value || !f.value || !y.value)
        return "";
      var Cn = ue(m.value + "-" + f.value.index + "-" + y.value).day(), Ua = st.find((Po) => Po.index === "" + Cn), el = (se = (we = Qe.value.datePickerWeekDict) == null ? void 0 : we[Ua.index].name) != null ? se : "", Uv = (he = ($e = Qe.value.datePickerMonthDict) == null ? void 0 : $e[f.value.index].name) != null ? he : "", Yv = Aa(y.value, 2, "0");
      return Qe.value.lang === "zh-CN" ? f.value.index + "-" + Yv + " " + el.slice(0, 3) : el.slice(0, 3) + ", " + Uv.slice(0, 3) + " " + y.value;
    }), K = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), A = R(() => !e.touchable || ["", "year"].includes(K.value)), z = R(() => {
      var se, we, he, $e, Te = ue(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + y.value).day(), Ue = y.value ? Aa(y.value, 2, "0") : "";
      return {
        week: "" + Te,
        year: (we = m.value) != null ? we : "",
        month: (he = ($e = f.value) == null ? void 0 : $e.index) != null ? he : "",
        date: Ue
      };
    }), F = R(() => w.value.chooseRangeDay.map((se) => ue(se).format("YYYY-MM-DD"))), W = R(() => m.value === g.value), ae = R(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === b.value.index;
    }), I = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, B = (se) => {
      if (!A.value) {
        var {
          clientX: we,
          clientY: he
        } = se.touches[0];
        n = we, r = he;
      }
    }, G = (se, we) => se >= we && se > 20 ? "x" : "y", re = (se) => {
      if (!A.value) {
        var {
          clientX: we,
          clientY: he
        } = se.touches[0], $e = we - n, Te = he - r;
        t = G(Math.abs($e), Math.abs(Te)), a = $e > 0 ? "prev" : "next";
      }
    }, H = () => {
      if (!(A.value || t !== "x")) {
        var se = K.value === "month" ? M : P;
        uo(() => {
          se.value.forwardRef(a), We();
        });
      }
    }, Z = (se, we) => {
      var he = we === "month" ? k : E;
      if (he.value = v.value ? [se, se] : [he.value[0], se], v.value = !v.value, v.value) {
        var $e = ue(he.value[0]).isAfter(he.value[1]), Te = $e ? [he.value[1], he.value[0]] : [...he.value];
        S(e["onUpdate:modelValue"], Te), S(e.onChange, Te);
      }
    }, _ = (se, we) => {
      var he = we === "month" ? V : T, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Te = he.value.map((un) => ue(un).format($e)), Ue = Te.findIndex((un) => un === se);
      Ue === -1 ? Te.push(se) : Te.splice(Ue, 1), S(e["onUpdate:modelValue"], Te), S(e.onChange, Te);
    }, ve = (se, we) => !m.value || !f.value ? !1 : W.value ? se === "month" ? we.index < f.value.index : ae.value ? we < L(y.value) : f.value.index > b.value.index : m.value > g.value, Ce = (se) => {
      var {
        readonly: we,
        range: he,
        multiple: $e,
        onChange: Te,
        "onUpdate:modelValue": Ue
      } = e;
      if (!(se < 0 || we)) {
        C.value = ve("day", se);
        var un = g.value + "-" + b.value.index + "-" + se, Cn = ue(un).format("YYYY-MM-DD");
        he ? Z(Cn, "day") : $e ? _(Cn, "day") : (S(Ue, Cn), S(Te, Cn));
      }
    }, Ee = (se) => {
      var {
        type: we,
        readonly: he,
        range: $e,
        multiple: Te,
        onChange: Ue,
        onPreview: un,
        "onUpdate:modelValue": Cn
      } = e;
      if (C.value = ve("month", se), we === "month" && !he) {
        var Ua = g.value + "-" + se.index;
        $e ? Z(Ua, "month") : Te ? _(Ua, "month") : (S(Cn, Ua), S(Ue, Ua));
      } else
        b.value = se, S(un, L(g.value), L(b.value.index));
      d.value = !1;
    }, te = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, S(e.onPreview, L(g.value), L(b.value.index));
    }, de = (se, we) => {
      var he = we === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + he);
      else {
        var $e = L(b.value.index) + he;
        $e < 1 && (g.value = "" + (L(g.value) - 1), $e = 12), $e > 12 && (g.value = "" + (L(g.value) + 1), $e = 1), b.value = Ft.find((Te) => L(Te.index) === $e);
      }
      S(e.onPreview, L(g.value), L(b.value.index));
    }, me = () => (e.multiple || e.range) && !Oe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Oe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Pe = (se) => Oe(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Fe = (se, we) => {
      var he = we === "month" ? k : E, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = se.map((Cn) => ue(Cn).format($e)).slice(0, 2), Ue = he.value.some((Cn) => Pe(Cn));
      if (!Ue) {
        he.value = Te;
        var un = ue(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && un && (he.value = [he.value[1], he.value[0]]);
      }
    }, Xe = (se, we) => {
      var he = we === "month" ? V : T, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = Array.from(new Set(se.map((Ue) => ue(Ue).format($e))));
      he.value = Te.filter((Ue) => Ue !== "Invalid Date");
    }, je = (se) => {
      var we = ue(se).format("YYYY-MM-D");
      if (!Pe(we)) {
        var [he, $e, Te] = we.split("-"), Ue = Ft.find((un) => un.index === $e);
        f.value = Ue, m.value = he, y.value = Te, b.value = Ue, g.value = he;
      }
    }, We = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!me() || Pe(se) || !se))
        if (e.range) {
          if (!Oe(se))
            return;
          v.value = se.length !== 1, Fe(se, e.type);
        } else if (e.multiple) {
          if (!Oe(se))
            return;
          Xe(se, e.type);
        } else
          je(se);
    }, {
      immediate: !0
    }), le(K, We), {
      n: Jh,
      classes: Qh,
      monthPanelEl: M,
      dayPanelEl: P,
      reverse: C,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: y,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: N,
      getDateTitle: X,
      getPanelType: K,
      getChoose: w,
      getPreview: U,
      componentProps: p,
      slotProps: z,
      formatRange: F,
      clickEl: I,
      handleTouchstart: B,
      handleTouchmove: re,
      handleTouchend: H,
      getChooseDay: Ce,
      getChooseMonth: Ee,
      getChooseYear: te,
      checkPreview: de,
      formatElevation: gn
    };
  }
});
ud.render = _h;
const _r = ud;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var Ck = _r;
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
function xh(e) {
  return ["left", "center", "right"].includes(e);
}
var eg = vi({
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
    validator: xh
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
}, _e(Ot, [
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
var {
  n: ng,
  classes: rg
} = ne("dialog");
function ag(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
  return h(), be(a, {
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
    default: fe(() => [D(
      "div",
      Ne({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: fi({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [D(
        "div",
        {
          class: c(e.n("title"))
        },
        [j(e.$slots, "title", {}, () => [Se(
          oe(e.dt(e.title, e.pack.dialogTitle)),
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
        [j(e.$slots, "default", {}, () => [Se(
          oe(e.message),
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
        [e.cancelButton ? (h(), be(r, {
          key: 0,
          class: c(e.classes(e.n("button"), e.n("cancel-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.cancelButtonTextColor,
          color: e.cancelButtonColor,
          onClick: e.cancel
        }, {
          default: fe(() => [Se(
            oe(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : x("v-if", !0), e.confirmButton ? (h(), be(r, {
          key: 1,
          class: c(e.classes(e.n("button"), e.n("confirm-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.confirmButtonTextColor,
          color: e.confirmButtonColor,
          onClick: e.confirm
        }, {
          default: fe(() => [Se(
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
var dd = ee({
  name: "VarDialog",
  components: {
    VarPopup: kn,
    VarButton: rn
  },
  inheritAttrs: !1,
  props: eg,
  setup(e) {
    var n = O(!1), r = O(!1), a = () => S(e["onUpdate:show"], !1), t = () => {
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
    return le(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: ng,
      classes: rg,
      pack: Qe,
      dt: so,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ye
    };
  }
});
dd.render = ag;
const yr = dd;
function eo() {
  return eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, eo.apply(this, arguments);
}
var sr, no = {};
function tg(e) {
  return e === void 0 && (e = {}), He(e) ? eo({}, no, {
    message: e
  }) : eo({}, no, e);
}
function xn(e) {
  return at() ? new Promise((n) => {
    xn.close();
    var r = tg(e), a = Le(r);
    a.teleport = "body", sr = a;
    var {
      unmountInstance: t
    } = ot(yr, a, {
      onConfirm: () => {
        S(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        S(a.onCancel), n("cancel");
      },
      onClose: () => {
        S(a.onClose), n("close");
      },
      onClosed: () => {
        S(a.onClosed), t(), sr === a && (sr = null);
      },
      onRouteChange: () => {
        t(), sr === a && (sr = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
xn.setDefaultOptions = function(e) {
  no = e;
};
xn.resetDefaultOptions = function() {
  no = {};
};
xn.close = function() {
  if (sr != null) {
    var e = sr;
    sr = null, ze().then(() => {
      e.show = !1;
    });
  }
};
yr.install = function(e) {
  e.component(yr.name, yr);
};
xn.install = function(e) {
  e.component(yr.name, yr);
};
xn.Component = yr;
var Sk = yr, og = {
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
  n: ig,
  classes: lg
} = ne("divider");
function sg(e, n) {
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
      oe(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var vd = ee({
  name: "VarDivider",
  props: og,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(!1), t = R(() => {
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
      if (Ss(i) || s)
        return {
          margin: u
        };
      var d = L(i), v = Math.abs(d) + (i + "").replace(d + "", "");
      return {
        margin: u,
        width: "calc(100% - " + ye(v) + ")",
        left: d > 0 ? ye(v) : ye(0)
      };
    }), l = () => {
      var {
        description: i,
        vertical: s
      } = e;
      a.value = (r.default || i != null) && !s;
    };
    return on(() => {
      l();
    }), $t(() => {
      l();
    }), {
      n: ig,
      classes: lg,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
vd.render = sg;
const xr = vd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var kk = xr, ug = {
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
function Il(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function dg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Il(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Il(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: vg,
  classes: fg
} = ne("drag");
function cg(e, n) {
  return h(), be(nr, {
    to: e.teleport
  }, [D(
    "div",
    Ne({
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
  props: ug,
  setup(e, n) {
    var {
      attrs: r
    } = n, a = O(null), t = O(0), o = O(0), l = Le({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), i = O(!1), s = O(!1), u = !1, d = 0, v = 0, f = (p) => {
      if (!e.disabled) {
        var {
          clientX: w,
          clientY: U
        } = p.touches[0];
        b(), d = w, v = U, u = !0;
      }
    }, m = /* @__PURE__ */ function() {
      var p = dg(function* (w) {
        if (!(!u || e.disabled)) {
          w.preventDefault(), s.value = !1, i.value = !0;
          var {
            clientX: U,
            clientY: N
          } = w.touches[0], X = U - d, K = N - v;
          d = U, v = N, e.direction.includes("x") && (t.value += X), e.direction.includes("y") && (o.value += K), T();
        }
      });
      return function(U) {
        return p.apply(this, arguments);
      };
    }(), y = () => {
      e.disabled || (u = !1, s.value = !0, V());
    }, b = () => {
      var {
        left: p,
        top: w
      } = g();
      t.value = p, o.value = w;
    }, g = () => {
      var p = Je(a.value), w = Je(window), U = p.top - w.top, N = w.bottom - p.bottom, X = p.left - w.left, K = w.right - p.right, {
        width: A,
        height: z
      } = p, {
        width: F,
        height: W
      } = w;
      return {
        top: U,
        bottom: N,
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
      var p = g(), w = l.left, U = p.windowWidth - l.right - p.width, N = l.top, X = p.windowHeight - l.bottom - p.height;
      return {
        minX: w,
        minY: N,
        // fallback the drag element overflows boundary
        maxX: w < U ? U : w,
        maxY: N < X ? X : N
      };
    }, V = () => {
      if (e.attraction != null) {
        var {
          halfWidth: p,
          halfHeight: w,
          top: U,
          bottom: N,
          left: X,
          right: K
        } = g(), {
          minX: A,
          minY: z,
          maxX: F,
          maxY: W
        } = C(), ae = X + p - l.left, I = K + p - l.right, B = U + w - l.top, G = N + w - l.bottom, re = ae <= I, H = B <= G;
        e.attraction.includes("x") && (t.value = re ? A : F), e.attraction.includes("y") && (o.value = H ? z : W);
      }
    }, T = () => {
      var {
        minX: p,
        minY: w,
        maxX: U,
        maxY: N
      } = C();
      t.value = qa(t.value, p, U), o.value = qa(o.value, w, N);
    }, k = () => {
      var {
        top: p = 0,
        bottom: w = 0,
        left: U = 0,
        right: N = 0
      } = e.boundary;
      l.top = Ae(p), l.bottom = Ae(w), l.left = Ae(U), l.right = Ae(N);
    }, E = () => {
      var p, w = (p = r.style) != null ? p : {};
      return ro({}, r, {
        style: ro({}, w, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : w.top,
          left: i.value ? 0 : w.left,
          right: i.value ? "auto" : w.right,
          bottom: i.value ? "auto" : w.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : w.transform
        })
      });
    }, M = () => {
      i.value && (b(), T());
    }, P = () => {
      s.value = !1, i.value = !1, t.value = 0, o.value = 0;
    };
    return le(() => e.boundary, k), Pt(M), on(() => {
      k(), M();
    }), {
      drag: a,
      x: t,
      y: o,
      enableTransition: s,
      n: vg,
      classes: fg,
      getAttrs: E,
      handleTouchstart: f,
      handleTouchmove: m,
      handleTouchend: y,
      resize: M,
      reset: P
    };
  }
});
fd.render = cg;
const ea = fd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var $k = ea, mg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return mg[n];
  });
}
var Wn = "top", Vr = "bottom", za = "right", br = "left", Co = "auto", So = [Wn, Vr, za, br], ko = "start", bt = "end", pg = "clippingParents", cd = "viewport", it = "popper", hg = "reference", Bl = /* @__PURE__ */ So.reduce(function(e, n) {
  return e.concat([n + "-" + ko, n + "-" + bt]);
}, []), md = /* @__PURE__ */ [].concat(So, [Co]).reduce(function(e, n) {
  return e.concat([n, n + "-" + ko, n + "-" + bt]);
}, []), gg = "beforeRead", yg = "read", bg = "afterRead", wg = "beforeMain", Cg = "main", Sg = "afterMain", kg = "beforeWrite", $g = "write", Tg = "afterWrite", ci = [gg, yg, bg, wg, Cg, Sg, kg, $g, Tg];
function Gn(e) {
  return e.split("-")[0];
}
var Pg = {
  start: "end",
  end: "start"
};
function Nl(e) {
  return e.replace(/start|end/g, function(n) {
    return Pg[n];
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
function La(e) {
  var n = En(e).Element;
  return e instanceof n || e instanceof Element;
}
function $n(e) {
  var n = En(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function ji(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = En(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Nr(e) {
  return ((La(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var vt = Math.max, Dl = Math.min, Ja = Math.round;
function mi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function pd() {
  return !/^((?!chrome|android).)*safari/i.test(mi());
}
function Qa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && $n(e) && (t = e.offsetWidth > 0 && Ja(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ja(a.height) / e.offsetHeight || 1);
  var l = La(e) ? En(e) : window, i = l.visualViewport, s = !pd() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Wi(e) {
  var n = En(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Gi(e) {
  return Qa(Nr(e)).left + Wi(e).scrollLeft;
}
function Og(e, n) {
  var r = En(e), a = Nr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = pd();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Gi(e),
    y: s
  };
}
function zn(e) {
  return En(e).getComputedStyle(e);
}
function Vg(e) {
  var n, r = Nr(e), a = Wi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = vt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = vt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Gi(e), s = -a.scrollTop;
  return zn(t || r).direction === "rtl" && (i += vt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Hn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $o(e) {
  return Hn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ji(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Nr(e)
  );
}
function qi(e) {
  var n = zn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function hd(e) {
  return ["html", "body", "#document"].indexOf(Hn(e)) >= 0 ? e.ownerDocument.body : $n(e) && qi(e) ? e : hd($o(e));
}
function ft(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = hd(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = En(a), l = t ? [o].concat(o.visualViewport || [], qi(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ft($o(l)))
  );
}
function Mg(e) {
  return ["table", "td", "th"].indexOf(Hn(e)) >= 0;
}
function Al(e) {
  return !$n(e) || // https://github.com/popperjs/popper-core/issues/837
  zn(e).position === "fixed" ? null : e.offsetParent;
}
function Eg(e) {
  var n = /firefox/i.test(mi()), r = /Trident/i.test(mi());
  if (r && $n(e)) {
    var a = zn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = $o(e);
  for (ji(t) && (t = t.host); $n(t) && ["html", "body"].indexOf(Hn(t)) < 0; ) {
    var o = zn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Xi(e) {
  for (var n = En(e), r = Al(e); r && Mg(r) && zn(r).position === "static"; )
    r = Al(r);
  return r && (Hn(r) === "html" || Hn(r) === "body" && zn(r).position === "static") ? n : r || Eg(e) || n;
}
function Ig(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && ji(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function pi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Bg(e, n) {
  var r = Qa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function zl(e, n, r) {
  return n === cd ? pi(Og(e, r)) : La(n) ? Bg(n, r) : pi(Vg(Nr(e)));
}
function Ng(e) {
  var n = ft($o(e)), r = ["absolute", "fixed"].indexOf(zn(e).position) >= 0, a = r && $n(e) ? Xi(e) : e;
  return La(a) ? n.filter(function(t) {
    return La(t) && Ig(t, a) && Hn(t) !== "body";
  }) : [];
}
function Dg(e, n, r, a) {
  var t = n === "clippingParents" ? Ng(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = zl(e, u, a);
    return s.top = vt(d.top, s.top), s.right = Dl(d.right, s.right), s.bottom = Dl(d.bottom, s.bottom), s.left = vt(d.left, s.left), s;
  }, zl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function wt(e) {
  return e.split("-")[1];
}
function Ag(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gd(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Gn(a) : null, o = a ? wt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Wn:
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
    case za:
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
  var u = t ? Ag(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case ko:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case bt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function zg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Lg(e) {
  return Object.assign({}, zg(), e);
}
function Rg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function yd(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? pg : i, u = r.rootBoundary, d = u === void 0 ? cd : u, v = r.elementContext, f = v === void 0 ? it : v, m = r.altBoundary, y = m === void 0 ? !1 : m, b = r.padding, g = b === void 0 ? 0 : b, C = Lg(typeof g != "number" ? g : Rg(g, So)), V = f === it ? hg : it, T = e.rects.popper, k = e.elements[y ? V : f], E = Dg(La(k) ? k : k.contextElement || Nr(e.elements.popper), s, d, l), M = Qa(e.elements.reference), P = gd({
    reference: M,
    element: T,
    strategy: "absolute",
    placement: t
  }), p = pi(Object.assign({}, T, P)), w = f === it ? p : M, U = {
    top: E.top - w.top + C.top,
    bottom: w.bottom - E.bottom + C.bottom,
    left: E.left - w.left + C.left,
    right: w.right - E.right + C.right
  }, N = e.modifiersData.offset;
  if (f === it && N) {
    var X = N[t];
    Object.keys(U).forEach(function(K) {
      var A = [za, Vr].indexOf(K) >= 0 ? 1 : -1, z = [Wn, Vr].indexOf(K) >= 0 ? "y" : "x";
      U[K] += X[z] * A;
    });
  }
  return U;
}
function Ug(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? md : s, d = wt(a), v = d ? i ? Bl : Bl.filter(function(y) {
    return wt(y) === d;
  }) : So, f = v.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(y, b) {
    return y[b] = yd(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gn(b)], y;
  }, {});
  return Object.keys(m).sort(function(y, b) {
    return m[y] - m[b];
  });
}
function Yg(e) {
  if (Gn(e) === Co)
    return [];
  var n = jt(e);
  return [Nl(e), n, Nl(n)];
}
function Hg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, y = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, g = n.options.placement, C = Gn(g), V = C === g, T = s || (V || !y ? [jt(g)] : Yg(g)), k = [g].concat(T).reduce(function(Z, _) {
      return Z.concat(Gn(_) === Co ? Ug(n, {
        placement: _,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : _);
    }, []), E = n.rects.reference, M = n.rects.popper, P = /* @__PURE__ */ new Map(), p = !0, w = k[0], U = 0; U < k.length; U++) {
      var N = k[U], X = Gn(N), K = wt(N) === ko, A = [Wn, Vr].indexOf(X) >= 0, z = A ? "width" : "height", F = yd(n, {
        placement: N,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), W = A ? K ? za : br : K ? Vr : Wn;
      E[z] > M[z] && (W = jt(W));
      var ae = jt(W), I = [];
      if (o && I.push(F[X] <= 0), i && I.push(F[W] <= 0, F[ae] <= 0), I.every(function(Z) {
        return Z;
      })) {
        w = N, p = !1;
        break;
      }
      P.set(N, I);
    }
    if (p)
      for (var B = y ? 3 : 1, G = function(_) {
        var ve = k.find(function(Ce) {
          var Ee = P.get(Ce);
          if (Ee)
            return Ee.slice(0, _).every(function(te) {
              return te;
            });
        });
        if (ve)
          return w = ve, "break";
      }, re = B; re > 0; re--) {
        var H = G(re);
        if (H === "break")
          break;
      }
    n.placement !== w && (n.modifiersData[a]._skip = !0, n.placement = w, n.reset = !0);
  }
}
const Fg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Hg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function jg(e, n, r) {
  var a = Gn(e), t = [br, Wn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [br, za].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Wg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = md.reduce(function(d, v) {
    return d[v] = jg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const Gg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Wg
};
function qg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Xg(e) {
  return e === En(e) || !$n(e) ? Wi(e) : qg(e);
}
function Kg(e) {
  var n = e.getBoundingClientRect(), r = Ja(n.width) / e.offsetWidth || 1, a = Ja(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Zg(e, n, r) {
  r === void 0 && (r = !1);
  var a = $n(n), t = $n(n) && Kg(n), o = Nr(n), l = Qa(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Hn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  qi(o)) && (i = Xg(n)), $n(n) ? (s = Qa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Gi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Jg(e) {
  var n = Qa(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Qg(e) {
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
function _g(e) {
  var n = Qg(e);
  return ci.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function xg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function ar(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Dr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', ey = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ll = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function ny(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Ll).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(ar(Dr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(ar(Dr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ci.indexOf(n.phase) < 0 && console.error(ar(Dr, n.name, '"phase"', "either " + ci.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(ar(Dr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(ar(Dr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(ar(Dr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(ar(Dr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Ll.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(ar(ey, String(n.name), a, a));
      });
    });
  });
}
function ry(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function ay(e) {
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
var Rl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", ty = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ul = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Yl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function oy(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Ul : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ul, o),
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
        var V = typeof C == "function" ? C(d.options) : C;
        b(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: La(i) ? ft(i) : i.contextElement ? ft(i.contextElement) : [],
          popper: ft(s)
        };
        var T = _g(ay([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = T.filter(function(N) {
          return N.enabled;
        }), process.env.NODE_ENV !== "production") {
          var k = ry([].concat(T, d.options.modifiers), function(N) {
            var X = N.name;
            return X;
          });
          if (ny(k), Gn(d.options.placement) === Co) {
            var E = d.orderedModifiers.find(function(N) {
              var X = N.name;
              return X === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var M = zn(s), P = M.marginTop, p = M.marginRight, w = M.marginBottom, U = M.marginLeft;
          [P, p, w, U].some(function(N) {
            return parseFloat(N);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return y(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = d.elements, V = C.reference, T = C.popper;
          if (!Yl(V, T)) {
            process.env.NODE_ENV !== "production" && console.error(Rl);
            return;
          }
          d.rects = {
            reference: Zg(V, Xi(T), d.options.strategy === "fixed"),
            popper: Jg(T)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
            return d.modifiersData[N.name] = Object.assign({}, N.data);
          });
          for (var k = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (k += 1, k > 100)) {
              console.error(ty);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var M = d.orderedModifiers[E], P = M.fn, p = M.options, w = p === void 0 ? {} : p, U = M.name;
            typeof P == "function" && (d = P({
              state: d,
              options: w,
              name: U,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: xg(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Yl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Rl), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function y() {
      d.orderedModifiers.forEach(function(g) {
        var C = g.name, V = g.options, T = V === void 0 ? {} : V, k = g.effect;
        if (typeof k == "function") {
          var E = k({
            state: d,
            name: C,
            instance: m,
            options: T
          }), M = function() {
          };
          v.push(E || M);
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
var zt = {
  passive: !0
};
function iy(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = En(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, zt);
  }), i && s.addEventListener("resize", r.update, zt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, zt);
    }), i && s.removeEventListener("resize", r.update, zt);
  };
}
const ly = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: iy,
  data: {}
};
function sy(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = gd({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const uy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: sy,
  data: {}
};
var dy = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function vy(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ja(n * t) / t || 0,
    y: Ja(r * t) / t || 0
  };
}
function Hl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, y = l.y, b = y === void 0 ? 0 : y, g = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = g.x, b = g.y;
  var C = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), T = br, k = Wn, E = window;
  if (u) {
    var M = Xi(r), P = "clientHeight", p = "clientWidth";
    if (M === En(r) && (M = Nr(r), zn(M).position !== "static" && i === "absolute" && (P = "scrollHeight", p = "scrollWidth")), M = M, t === Wn || (t === br || t === za) && o === bt) {
      k = Vr;
      var w = v && M === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[P]
      );
      b -= w - a.height, b *= s ? 1 : -1;
    }
    if (t === br || (t === Wn || t === Vr) && o === bt) {
      T = za;
      var U = v && M === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[p]
      );
      m -= U - a.width, m *= s ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: i
  }, u && dy), X = d === !0 ? vy({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = X.x, b = X.y, s) {
    var K;
    return Object.assign({}, N, (K = {}, K[k] = V ? "0" : "", K[T] = C ? "0" : "", K.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", K));
  }
  return Object.assign({}, N, (n = {}, n[k] = V ? b + "px" : "", n[T] = C ? m + "px" : "", n.transform = "", n));
}
function fy(e) {
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
    placement: Gn(n.placement),
    variation: wt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Hl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Hl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const cy = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: fy,
  data: {}
};
function my(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !$n(o) || !Hn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function py(e) {
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
const hy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: my,
  effect: py,
  requires: ["computeStyles"]
};
var gy = [ly, uy, cy, hy], yy = /* @__PURE__ */ oy({
  defaultModifiers: gy
});
function ao() {
  return ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ao.apply(this, arguments);
}
function Fl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jl(e) {
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
function bd(e) {
  var n = O(null), r = O(null), a = O({
    width: 0,
    height: 0
  }), t = As(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(P, p) {
      p ? (k(), S(e.onOpen)) : S(e.onClose);
    }
  }), {
    zIndex: o
  } = Vt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: P,
      height: p
    } = tt(n.value);
    a.value = {
      width: Ae(P),
      height: Ae(p)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, E());
  }, v = /* @__PURE__ */ function() {
    var P = jl(function* () {
      e.trigger === "hover" && (s = !1, yield An(), !i && M());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var P = jl(function* () {
      e.trigger === "hover" && (i = !1, yield An(), !s && M());
    });
    return function() {
      return P.apply(this, arguments);
    };
  }(), y = () => {
    e.closeOnClickReference && t.value ? M() : E();
  }, b = () => {
    M();
  }, g = (P) => {
    e.trigger === "click" && (b(), S(e.onClickOutside, P));
  }, C = () => {
    u();
    var P = {
      x: Ae(e.offsetX),
      y: Ae(e.offsetY)
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
      skidding: p,
      distance: w
    } = C(), U = [ao({}, Fg, {
      enabled: t.value
    }), ao({}, Gg, {
      options: {
        offset: [p, w]
      }
    })];
    return {
      placement: P,
      modifiers: U
    };
  }, T = () => e.reference ? n.value.querySelector(e.reference) : n.value, k = () => {
    l.setOptions(V());
  }, E = () => {
    var {
      disabled: P
    } = e;
    P || (t.value = !0, S(e["onUpdate:show"], !0));
  }, M = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  };
  return Ns(T, "click", g), le(() => e.offsetX, k), le(() => e.offsetY, k), le(() => e.placement, k), le(() => e.disabled, M), to(() => {
    var P;
    l = yy((P = T()) != null ? P : n.value, r.value, V());
  }), io(() => {
    l.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: y,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: b,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: k,
    open: E,
    close: M
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
} = ne("tooltip");
function Ty(e, n) {
  return h(), $(
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
    [j(e.$slots, "default"), (h(), be(nr, {
      to: e.teleport
    }, [Q(Re, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed,
      persisted: ""
    }, {
      default: fe(() => [ke(D(
        "div",
        {
          ref: "popover",
          class: c(e.classes(e.n("tooltip"), e.n("$--box"))),
          style: q({
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
            style: q({
              background: e.color,
              width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
            }),
            class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
          },
          [j(e.$slots, "content", {}, () => [Se(
            oe(e.content),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Qn, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var wd = ee({
  name: "VarTooltip",
  props: Sy,
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
      resize: y
    } = bd(e);
    return {
      toSizeUnit: ye,
      popover: n,
      host: r,
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
      resize: y,
      open: f,
      close: m
    };
  }
});
wd.render = Ty;
const wr = wd;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var Tk = wr;
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
var {
  n: Vy,
  classes: My
} = ne("ellipsis"), Ey = {
  key: 0
};
function Iy(e, n) {
  var r = ie("var-tooltip");
  return h(), be(
    r,
    Tt(lo(e.tooltip)),
    {
      content: fe(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), $(
          "span",
          Ey,
          oe(e.tooltip.content),
          1
          /* TEXT */
        )) : j(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: fe(() => [D(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: q(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
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
var Cd = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: wr
  },
  props: Oy,
  setup(e) {
    var n = O(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : hi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: Vy,
      classes: My,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Cd.render = Iy;
const na = Cd;
na.install = function(e) {
  e.component(na.name, na);
};
var Pk = na;
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
    type: String
  },
  onClick: Y(),
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:active": Y()
};
function Wl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  classes: Gl,
  n: fn
} = ne("fab");
const ra = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: Ay,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = As(e, "active"), o = O(null), {
      disabled: l
    } = fo(), i = (f, m, y) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (y === 0) {
          S(e.onClick, t.value, f);
          return;
        }
        t.value = m, S(e.onClick, t.value, f), S(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, S(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : ke(Q(rn, {
      "var-fab-cover": !0,
      class: fn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Q(Ve, {
        "var-fab-cover": !0,
        class: Gl([t.value, fn("trigger-active-icon"), fn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: fn("--trigger-icon-animation")
      }, null)]
    }), [[Qn, e.show]]), v = () => {
      var f, m, y = Ds((m = S(r.default)) != null ? m : []);
      return Q("div", Ne({
        class: Gl(fn(), fn("--position-" + e.position), fn("--direction-" + e.direction), [e.fixed, fn("--fixed"), fn("--absolute")], [e.safeArea, fn("--safe-area")]),
        style: {
          zIndex: L(e.zIndex),
          top: ye(e.top),
          bottom: ye(e.bottom),
          left: ye(e.left),
          right: ye(e.right)
        },
        ref: o,
        onClick: (b) => i(b, !t.value, y.length),
        onMouseleave: () => s(!1, y.length),
        onMouseenter: () => s(!0, y.length)
      }, a), [Q(Re, {
        name: fn("--active-transition")
      }, Wl(f = d()) ? f : {
        default: () => [f]
      }), Q(Re, {
        name: fn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Q("div", {
          class: fn("actions"),
          onClick: (b) => b.stopPropagation()
        }, [y.map((b) => Q("div", {
          class: fn("action")
        }, [b]))]), [[Qn, e.show && t.value && y.length]])]
      })]);
    };
    return le(() => e.trigger, () => {
      t.value = !1;
    }), le(() => e.disabled, () => {
      t.value = !1;
    }), Ns(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Q(nr, {
          to: f,
          disabled: l.value
        }, Wl(m = v()) ? m : {
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
var Ok = ra;
function zy(e) {
  return ["start", "end"].includes(e);
}
var Ly = {
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
    validator: zy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function ql(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ry(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: Uy
} = ne("form");
function Yy(e, n) {
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
var Sd = ee({
  name: "VarForm",
  props: Ly,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = jm(), o = (d) => {
      setTimeout(() => {
        var v = $r(d), f = v === window ? 0 : sl(v), m = sl(d) - f - Ae(e.scrollToErrorOffsetY);
        ht(v, {
          top: m,
          animation: zo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Ry(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: C
          } = g;
          return C();
        }));
        if (e.scrollToError) {
          var [, f] = _v(v, (g) => g === !1, e.scrollToError), m = f > -1;
          if (m) {
            var y, b = (y = a[f].instance.proxy) == null ? void 0 : y.$el;
            o(b);
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
      disabled: n,
      readonly: r
    };
    return t(u), {
      n: Uy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
Sd.render = Yy;
const qn = Sd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
qn.useValidation = Vn;
qn.useForm = Mn;
var Vk = qn;
function Hy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Fy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Hy,
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
  n: jy,
  classes: Wy
} = ne("image"), Gy = ["alt", "title", "lazy-loading", "lazy-error"], qy = ["alt", "title", "src"];
function Xy(e, n) {
  var r = De("lazy"), a = De("ripple");
  return ke((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? ke((h(), $("img", {
      key: 0,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      "lazy-loading": e.loading,
      "lazy-error": e.error,
      style: q({
        objectFit: e.fit
      }),
      onLoad: n[0] || (n[0] = function() {
        return e.handleLoad && e.handleLoad(...arguments);
      }),
      onClick: n[1] || (n[1] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, null, 46, Gy)), [[r, e.src]]) : x("v-if", !0), !e.lazy && !e.showErrorSlot ? (h(), $("img", {
      key: 1,
      class: c(e.n("image")),
      alt: e.alt,
      title: e.title,
      style: q({
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
    }, null, 46, qy)) : x("v-if", !0), e.showErrorSlot ? j(e.$slots, "error", {
      key: 2
    }) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var kd = ee({
  name: "VarImage",
  directives: {
    Lazy: gt,
    Ripple: qe
  },
  props: Fy,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(!1), t = (i) => {
      a.value = !!r.error, S(e.onError, i);
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
    return le(() => e.src, () => {
      a.value = !1;
    }), {
      n: jy,
      classes: Wy,
      showErrorSlot: a,
      toSizeUnit: ye,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
kd.render = Xy;
const aa = kd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var Mk = aa, $d = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Ky() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = sn($d);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var Td = {
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
function Xl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Kl(e) {
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
var Zy = 250, Jy = 20, {
  n: Qy,
  classes: _y
} = ne("swipe"), xy = ["onClick"];
function eb(e, n) {
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
        Ye(e.length, (r, a) => (h(), $("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: q({
            background: e.indicatorColor
          }),
          key: r,
          onClick: (t) => e.to(a)
        }, null, 14, xy))),
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
var Pd = ee({
  name: "VarSwipe",
  props: Td,
  setup(e) {
    var n = O(null), r = O(0), a = R(() => e.vertical), t = O(0), o = O(0), l = O(!1), i = O(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Ky(), {
      popup: v,
      bindPopup: f
    } = Tf(), m = !1, y = !1, b = -1, g, C, V, T, k, E = (H) => s.find((Z) => {
      var {
        index: _
      } = Z;
      return _.value === H;
    }), M = () => {
      e.loop && (o.value >= 0 && E(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && E(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (E(d.value - 1).setTranslate(0), E(0).setTranslate(0)));
    }, P = (H) => {
      var Z = an(H) ? H : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: _
      } = e;
      return Z <= -1 ? _ ? -1 : 0 : Z >= d.value ? _ ? d.value : d.value - 1 : Z;
    }, p = (H) => {
      var {
        loop: Z
      } = e;
      return H === -1 ? Z ? d.value - 1 : 0 : H === d.value ? Z ? 0 : d.value - 1 : H;
    }, w = (H) => e.loop ? H < 0 ? d.value + H : H >= d.value ? H - d.value : H : qa(H, 0, d.value - 1), U = (H) => {
      var Z = o.value >= r.value, _ = o.value <= -t.value, ve = 0, Ce = -(t.value - r.value);
      l.value = !0, (Z || _) && (l.value = !0, o.value = _ ? ve : Ce, E(0).setTranslate(0), E(d.value - 1).setTranslate(0)), uo(() => {
        l.value = !1, S(H);
      });
    }, N = () => {
      m || (i.value = w(L(e.initialIndex)), m = !0);
    }, X = () => {
      var {
        autoplay: H
      } = e;
      !H || d.value <= 1 || (K(), b = window.setTimeout(() => {
        I(), X();
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
        g = Z, C = _, V = performance.now(), y = !0, K(), U(() => {
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
          clientX: ve,
          clientY: Ce
        } = H.touches[0], Ee = Math.abs(ve - g), te = Math.abs(Ce - C), de = A(Ee, te), me = _ ? "vertical" : "horizontal";
        if (de === me) {
          H.preventDefault();
          var Pe = T !== void 0 ? ve - T : 0, Fe = k !== void 0 ? Ce - k : 0;
          T = ve, k = Ce, o.value += _ ? Fe : Pe, M();
        }
      }
    }, W = () => {
      if (y) {
        var {
          vertical: H,
          onChange: Z
        } = e, _ = H ? k < C : T < g, ve = Math.abs(H ? C - k : g - T), Ce = performance.now() - V <= Zy && ve >= Jy, Ee = Ce ? P(_ ? i.value + 1 : i.value - 1) : P();
        y = !1, l.value = !1, T = void 0, k = void 0, o.value = Ee * -r.value;
        var te = i.value;
        i.value = p(Ee), X(), te !== i.value && S(Z, i.value);
      }
    }, ae = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((H) => {
        H.setTranslate(0);
      }), X(), setTimeout(() => {
        l.value = !1;
      }));
    }, I = (H) => {
      if (!(d.value <= 1)) {
        N();
        var {
          loop: Z,
          onChange: _
        } = e, ve = i.value;
        i.value = w(ve + 1), (H == null ? void 0 : H.event) !== !1 && S(_, i.value), U(() => {
          if (ve === d.value - 1 && Z) {
            E(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          ve !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, B = (H) => {
      if (!(d.value <= 1)) {
        N();
        var {
          loop: Z,
          onChange: _
        } = e, ve = i.value;
        i.value = w(ve - 1), (H == null ? void 0 : H.event) !== !1 && S(_, i.value), U(() => {
          if (ve === 0 && Z) {
            E(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          ve !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, G = (H, Z) => {
      if (!(d.value <= 1 || H === i.value)) {
        H = H < 0 ? 0 : H, H = H >= d.value ? d.value : H;
        var _ = H > i.value ? I : B, ve = Math.abs(H - i.value);
        Array.from({
          length: ve
        }).forEach((Ce, Ee) => {
          _({
            event: Ee === ve - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, re = {
      size: r,
      vertical: a
    };
    return u(re), S(f, null), le(() => d.value, /* @__PURE__ */ Kl(function* () {
      yield An(), N(), ae();
    })), v && le(() => v.show.value, /* @__PURE__ */ function() {
      var H = Kl(function* (Z) {
        Z ? (yield An(), ae()) : K();
      });
      return function(Z) {
        return H.apply(this, arguments);
      };
    }()), Mr(ae), vo(K), Pt(ae), {
      n: Qy,
      classes: _y,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: z,
      handleTouchmove: F,
      handleTouchend: W,
      next: I,
      prev: B,
      to: G,
      resize: ae,
      toNumber: L
    };
  }
});
Pd.render = eb;
const Xn = Pd;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var Ek = Xn;
function nb() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = ln($d);
  return e || On("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: rb
} = ne("swipe-item");
function ab(e, n) {
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
var Od = ee({
  name: "VarSwipeItem",
  setup() {
    var e = O(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = nb(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: rb,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Od.render = ab;
const Kn = Od;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var Ik = Kn;
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
var tb = gi({
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
}, _e(Td, ["loop", "indicator", "onChange"]), _e(Ot, [
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
  classes: ob
} = ne("image-preview"), Eo = 12, Jl = 200, ib = 350, Ql = 200, lb = 500, sb = ["onTouchstart"], ub = ["src", "alt"];
function db(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), o = ie("var-popup");
  return h(), be(o, {
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
    default: fe(() => [Q(a, Ne({
      ref: "swipeRef",
      class: e.n("swipe"),
      "var-image-preview-cover": "",
      touchable: e.canSwipe,
      indicator: e.indicator && e.images.length > 1,
      "initial-index": e.initialIndex,
      loop: e.loop,
      onChange: e.onChange
    }, e.$attrs), {
      default: fe(() => [(h(!0), $(
        Me,
        null,
        Ye(e.images, (l, i) => (h(), be(r, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: l
        }, {
          default: fe(() => [D("div", {
            class: c(e.n("zoom-container")),
            style: q({
              transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
              transitionTimingFunction: e.transitionTimingFunction,
              transitionDuration: e.transitionDuration
            }),
            onTouchstart: (s) => e.handleTouchstart(s, i),
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
            src: l,
            alt: l
          }, null, 10, ub)], 46, sb)]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class"]))),
        128
        /* KEYED_FRAGMENT */
      ))]),
      indicator: fe((l) => {
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
          oe(i + 1) + " / " + oe(s),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)])];
      }),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), j(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), be(t, {
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
var Vd = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: Xn,
    VarSwipeItem: Kn,
    VarPopup: kn,
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: tb,
  setup(e) {
    var n = O(!1), r = R(() => {
      var {
        images: I,
        current: B,
        initialIndex: G
      } = e;
      if (G != null)
        return L(G);
      var re = I.findIndex((H) => H === B);
      return re >= 0 ? re : 0;
    }), a = O(1), t = O(0), o = O(0), l = O(void 0), i = O(void 0), s = O(!0), u = O(null), d = null, v = null, f = null, m = null, y = !1, b = R(() => {
      var {
        imagePreventDefault: I,
        show: B
      } = e;
      return B && I;
    }), g = (I, B) => {
      var {
        clientX: G,
        clientY: re
      } = I, {
        clientX: H,
        clientY: Z
      } = B;
      return Math.abs(Math.sqrt(Math.pow(H - G, 2) + Math.pow(Z - re, 2)));
    }, C = (I, B) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: performance.now(),
      target: B
    }), V = () => {
      a.value = L(e.zoom), s.value = !1, v = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Ql);
    }, T = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, v = null, l.value = void 0, i.value = void 0;
    }, k = (I) => v ? g(v, I) <= Eo && I.timestamp - v.timestamp <= Jl && v.target === I.target : !1, E = (I) => !I || !d || !v ? !1 : g(d, v) <= Eo && performance.now() - v.timestamp < ib && (I === d.target || I.parentNode === d.target), M = () => {
      window.clearTimeout(m), y = !1, d = null;
    }, P = (I) => {
      if (window.clearTimeout(m), y) {
        y = !1;
        return;
      }
      var B = E(I.target);
      f = window.setTimeout(() => {
        B && A(), d = null;
      }, Jl);
    }, p = (I, B) => {
      window.clearTimeout(f), window.clearTimeout(m);
      var G = C(I.touches[0], I.currentTarget);
      if (d = G, m = window.setTimeout(() => {
        var {
          onLongPress: re
        } = e;
        y = !0, S(re, B);
      }, lb), k(G)) {
        a.value > 1 ? T() : V();
        return;
      }
      v = G;
    }, w = (I) => {
      var {
        offsetWidth: B,
        offsetHeight: G
      } = I, {
        naturalWidth: re,
        naturalHeight: H
      } = I.querySelector("." + Zl("image"));
      return {
        width: B,
        height: G,
        imageRadio: H / re,
        rootRadio: G / B,
        zoom: L(e.zoom)
      };
    }, U = (I) => {
      var {
        zoom: B,
        imageRadio: G,
        rootRadio: re,
        width: H,
        height: Z
      } = w(I);
      if (!G)
        return 0;
      var _ = G > re ? Z / G : H;
      return Math.max(0, (B * _ - H) / 2) / B;
    }, N = (I) => {
      var {
        zoom: B,
        imageRadio: G,
        rootRadio: re,
        width: H,
        height: Z
      } = w(I);
      if (!G)
        return 0;
      var _ = G > re ? Z : H * G;
      return Math.max(0, (B * _ - Z) / 2) / B;
    }, X = (I, B, G) => I + B >= G ? G : I + B <= -G ? -G : I + B, K = (I) => {
      if (v) {
        var B = I.currentTarget, G = C(I.touches[0], B);
        if (g(G, v) > Eo && window.clearTimeout(m), a.value > 1) {
          var re = G.clientX - v.clientX, H = G.clientY - v.clientY, Z = U(B), _ = N(B);
          t.value = X(t.value, re, Z), o.value = X(o.value, H, _);
        }
        v = G;
      }
    }, A = () => {
      if (a.value > 1) {
        T(), setTimeout(() => S(e["onUpdate:show"], !1), Ql);
        return;
      }
      S(e["onUpdate:show"], !1);
    }, z = (I) => {
      var B;
      (B = u.value) == null || B.prev(I);
    }, F = (I) => {
      var B;
      (B = u.value) == null || B.next(I);
    }, W = (I, B) => {
      var G;
      (G = u.value) == null || G.to(I, B);
    }, ae = (I) => {
      e.imagePreventDefault && e.show && I.preventDefault();
    };
    return Tr(() => document, "contextmenu", ae), le(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: Zl,
      classes: ob,
      swipeRef: u,
      isPreventDefault: b,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: p,
      handleTouchmove: K,
      handleTouchend: P,
      handleTouchcancel: M,
      close: A,
      prev: z,
      next: F,
      to: W
    };
  }
});
Vd.render = db;
const Cr = Vd;
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ct.apply(this, arguments);
}
var ur, mt = {};
function vb(e) {
  return e === void 0 && (e = {}), He(e) ? ct({}, mt, {
    images: [e]
  }) : Oe(e) ? ct({}, mt, {
    images: e
  }) : ct({}, mt, e);
}
function Ln(e) {
  if (at()) {
    Ln.close();
    var n = vb(e), r = Le(n);
    r.teleport = "body", ur = r;
    var {
      unmountInstance: a
    } = ot(Cr, r, {
      onClose: () => S(r.onClose),
      onClosed: () => {
        S(r.onClosed), a(), ur === r && (ur = null);
      },
      onRouteChange: () => {
        a(), ur === r && (ur = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Ln.close = () => {
  if (ur != null) {
    var e = ur;
    ur = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Ln.setDefaultOptions = (e) => {
  mt = e;
};
Ln.resetDefaultOptions = () => {
  mt = {};
};
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
Ln.install = function(e) {
  e.component(Cr.name, Cr);
};
Ln.Component = Cr;
var Bk = Cr, Wt = {
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
function _l(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: fb,
  classes: cb
} = ne("sticky");
function mb(e, n) {
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
var Md = ee({
  name: "VarSticky",
  props: Wt,
  setup(e) {
    var n = O(null), r = O(null), a = O(!1), t = O("0px"), o = O("0px"), l = O("auto"), i = O("auto"), s = O("auto"), u = O("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => Ae(e.offsetTop)), m, y = () => {
      var {
        cssMode: T,
        disabled: k
      } = e;
      if (!k) {
        var E = 0;
        if (m !== window) {
          var {
            top: M
          } = Je(m);
          E = M;
        }
        var P = r.value, p = n.value, {
          top: w,
          left: U
        } = Je(p), N = w - E;
        return N <= f.value ? (T || (l.value = p.offsetWidth + "px", i.value = p.offsetHeight + "px", t.value = E + f.value + "px", o.value = U + "px", s.value = P.offsetWidth + "px", u.value = P.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: N,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var T = y();
        T && S(e.onScroll, T.offsetTop, T.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var T = xl(function* () {
        a.value = !1, yield vf(), y();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var T = xl(function* () {
        yield An(), m = $r(n.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return le(() => e.disabled, g), on(C), vo(V), Pt(g), Tr(() => window, "scroll", b), {
      n: fb,
      classes: cb,
      resize: g,
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
      toNumber: L
    };
  }
});
Md.render = mb;
const Zn = Md;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var Nk = Zn, Ed = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function pb() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = sn(Ed);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function hb() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(Ed);
  return r || On("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var gb = {
  index: {
    type: [Number, String]
  }
}, {
  n: yb,
  classes: bb
} = ne("index-anchor");
function wb(e, n) {
  return h(), be(nt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: fe(() => [D(
      "div",
      Ne({
        class: e.n()
      }, e.$attrs),
      [j(e.$slots, "default", {}, () => [Se(
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
var Id = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Zn
  },
  inheritAttrs: !1,
  props: gb,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = hb(), t = O(0), o = O(!1), l = R(() => e.index), i = O(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, y = (g) => {
      o.value = g;
    }, b = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: y
    };
    return a(b), {
      n: yb,
      classes: bb,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Re
    };
  }
});
Id.render = wb;
const ta = Id;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var Dk = ta, Cb = {
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
function es(e, n, r, a, t, o, l) {
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
  n: Sb,
  classes: kb
} = ne("index-bar"), $b = ["onClick"];
function Tb(e, n) {
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
        Ye(e.anchorNameList, (r) => (h(), $("li", {
          key: r,
          class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
          style: q({
            color: e.active === r && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: r,
            manualCall: !0
          })
        }, oe(r), 15, $b))),
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
var Bd = ee({
  name: "VarIndexBar",
  props: Cb,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = pb(), t = O(""), o = O(null), l = O([]), i = O(), s = R(() => e.sticky), u = R(() => e.stickyCssMode || e.cssMode), d = R(() => Ae(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, m = !1, y = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(y);
    var b = (P, p) => {
      var w = Oi(P) ? P.name.value : P;
      w === i.value || w === void 0 || (i.value = w, (p == null ? void 0 : p.event) !== !1 && S(e.onChange, w));
    }, g = () => {
      if (Vi(f))
        return 0;
      var {
        top: P
      } = Je(f), {
        scrollTop: p
      } = f, {
        top: w
      } = Je(o.value);
      return p - P + w;
    }, C = () => {
      var P = pt(f), p = f === window ? document.body.scrollHeight : f.scrollHeight, w = g();
      r.forEach((U, N) => {
        var X = U.ownTop.value, K = P - X + d.value - w, A = N === r.length - 1 ? p : r[N + 1].ownTop.value - U.ownTop.value;
        U.setDisabled(!0), K >= 0 && K < A && t.value === "" && (U.setDisabled(!1), b(U));
      });
    }, V = /* @__PURE__ */ function() {
      var P = Lt(function* (p) {
        var {
          anchorName: w,
          manualCall: U = !1,
          options: N
        } = p;
        if (U && S(e.onClick, w), !(w === i.value && !m)) {
          var X = r.find((F) => {
            var {
              name: W
            } = F;
            return w === W.value;
          });
          if (X) {
            var K = g(), A = X.ownTop.value - d.value + K, z = Ei(f);
            t.value = w, b(w, N), yield ht(f, {
              left: z,
              top: A,
              animation: $s,
              duration: L(e.duration)
            }), uo(() => {
              t.value = "";
            });
          }
        }
      });
      return function(w) {
        return P.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var P = Lt(function* () {
        yield An(), f = $r(o.value);
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), k = () => {
      f.addEventListener("scroll", C);
    }, E = () => {
      f.removeEventListener("scroll", C);
    }, M = (P, p) => {
      wn(() => V({
        anchorName: P,
        options: p
      }));
    };
    return le(() => n.value, /* @__PURE__ */ Lt(function* () {
      yield An(), r.forEach((P) => {
        var {
          name: p,
          setOwnTop: w
        } = P;
        p.value && l.value.push(p.value), w();
      });
    })), on(/* @__PURE__ */ Lt(function* () {
      yield T(), k();
    })), oo(E), xa(() => {
      m = !0, E();
    }), Mr(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: Sb,
      classes: kb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: M,
      anchorClick: V
    };
  }
});
Bd.render = Tb;
const oa = Bd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var Ak = oa;
function Pb(e) {
  return ["small", "normal"].includes(e);
}
function Ob(e) {
  return ["outlined", "standard"].includes(e);
}
var Ki = {
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
    validator: Pb
  },
  variant: {
    type: String,
    default: "standard",
    validator: Ob
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
  n: Io,
  classes: Vb
} = ne("field-decorator"), Mb = ["for"];
function Eb(e, n) {
  var r = ie("var-icon");
  return h(), $(
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
        oe(e.placeholder),
        1
        /* TEXT */
      )], 14, Mb)) : x("v-if", !0), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (h(), be(r, {
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
          [e.placeholder && e.hint ? (h(), be(nr, {
            key: 0,
            to: "body"
          }, [D(
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
var Nd = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ve
  },
  props: Ki,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(null), t = O(""), o = R(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = R(() => e.hint && (!Fn(e.value) || e.isFocus || r["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Fn(f) || m))
        return Io("--placeholder-hidden");
      if (l.value)
        return Io("--placeholder-hint");
    }, s = () => {
      var {
        size: v,
        hint: f,
        variant: m,
        placeholder: y
      } = e;
      if (!y || !f || m !== "outlined") {
        t.value = "";
        return;
      }
      var b = tt(a.value), g = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + b.width + " * 0.75 + " + g + " * 2)";
    }, u = (v) => {
      S(e.onClear, v);
    }, d = (v) => {
      S(e.onClick, v);
    };
    return Pt(s), on(s), $t(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Io,
      classes: Vb,
      isEmpty: Fn,
      handleClear: u,
      handleClick: d
    };
  }
});
Nd.render = Eb;
const Dd = Nd;
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yi.apply(this, arguments);
}
function Ib(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var Bb = yi({
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
    validator: Ib
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
}, _e(Ki, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Nb,
  classes: Db
} = ne("input"), Ab = ["placeholder", "enterkeyhint"], zb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Lb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Rb(e, n) {
  var r = ie("var-field-decorator"), a = ie("var-form-details");
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Q(
      r,
      Tt(lo({
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
        "append-icon": fe(() => [j(e.$slots, "append-icon")]),
        default: fe(() => [e.normalizedType === "password" ? (h(), $("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: q({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, Ab)) : x("v-if", !0), e.textarea ? (h(), $("textarea", {
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
        }, `
      `, 46, zb)) : (h(), $("input", {
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
        }, null, 46, Lb))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: fe(() => [j(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), Q(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: n[14] || (n[14] = Pn(() => {
      }, ["stop"]))
    }, Gt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: fe(() => [j(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"])],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Ad = ee({
  name: "VarInput",
  components: {
    VarFormDetails: en,
    VarFieldDecorator: Dd
  },
  props: Bb,
  setup(e) {
    var n = O("var-input-" + et().uid), r = O(null), a = O(!1), t = O(!1), o = R(() => e.type === "number" ? "text" : e.type), l = R(() => {
      var {
        maxlength: I,
        modelValue: B
      } = e;
      return I ? Fn(B) ? "0 / " + I : String(B).length + "/" + I : "";
    }), i = R(() => e.disabled || e.readonly ? "" : "text"), s = R(() => {
      var {
        hint: I,
        blurColor: B,
        focusColor: G
      } = e;
      if (!I)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? G || "var(--field-decorator-focus-color)" : B || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Mn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: y
    } = Vn(), b = (I) => {
      ze(() => {
        var {
          validateTrigger: B,
          rules: G,
          modelValue: re
        } = e;
        f(B, I, G, re);
      });
    }, g = (I) => {
      a.value = !0, S(e.onFocus, I), b("onFocus");
    }, C = (I) => {
      a.value = !1, S(e.onBlur, I), b("onBlur");
    }, V = (I) => {
      var B = I.target, {
        value: G
      } = B;
      return e.type === "number" && (G = w(G)), N(U(G));
    }, T = () => {
      t.value = !0;
    }, k = (I) => {
      t.value && (t.value = !1, I.target.dispatchEvent(new Event("input")));
    }, E = (I) => {
      if (!t.value) {
        var B = V(I);
        S(e["onUpdate:modelValue"], B), S(e.onInput, B, I), b("onInput");
      }
    }, M = (I) => {
      var B = V(I);
      S(e.onChange, B, I), b("onChange");
    }, P = () => {
      var {
        disabled: I,
        readonly: B,
        clearable: G,
        onClear: re
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || I || B || !G || (S(e["onUpdate:modelValue"], ""), S(re, ""), b("onClear"));
    }, p = (I) => {
      var {
        disabled: B,
        onClick: G
      } = e;
      d != null && d.disabled.value || B || (S(G, I), b("onClick"));
    }, w = (I) => {
      var B = I.indexOf("-"), G = I.indexOf(".");
      return B > -1 && (I = B === 0 ? "-" + I.replace(/-/g, "") : I.replace(/-/g, "")), G > -1 && (I = I.slice(0, G + 1) + I.slice(G).replace(/\./g, "")), I.replace(/[^-0-9.]/g, "");
    }, U = (I) => e.modelModifiers.trim ? I.trim() : I, N = (I) => e.maxlength ? I.slice(0, L(e.maxlength)) : I, X = (I) => {
      var {
        disabled: B,
        readonly: G
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || B || G || I.stopPropagation();
    };
    function K(I) {
      var {
        disabled: B
      } = e;
      d != null && d.disabled.value || B || I.target === r.value || (F(), I.preventDefault());
    }
    var A = () => {
      S(e["onUpdate:modelValue"], ""), y();
    }, z = () => m(e.rules, e.modelValue), F = () => {
      var I;
      (I = r.value) == null || I.focus();
    }, W = () => {
      r.value.blur();
    }, ae = {
      reset: A,
      validate: z,
      resetValidation: y
    };
    return S(u, ae), on(() => {
      e.autofocus && F();
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
      n: Nb,
      classes: Db,
      isEmpty: Fn,
      handleFocus: g,
      handleBlur: C,
      handleInput: E,
      handleChange: M,
      handleClear: P,
      handleClick: p,
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
Ad.render = Rb;
const Sr = Ad;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var zk = Sr;
function Ub(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Yb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Hb = {
  type: {
    type: String,
    default: "default",
    validator: Ub
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
    validator: Yb
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
  n: Fb,
  classes: jb
} = ne("link");
function Wb(e, n) {
  return h(), be(nt(e.tag), Ne(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: fe(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
var zd = ee({
  name: "VarLink",
  props: Hb,
  setup(e) {
    var n = R(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = R(() => {
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
      n: Fb,
      classes: jb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ye
    };
  }
});
zd.render = Wb;
const ia = zd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Lk = ia, Gb = {
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
}, Ld = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function qb() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(Ld);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var Rd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Xb() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ln(Ld);
  return n || On("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Kb() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = sn(Rd);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function Zb() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ln(Rd);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
function ns(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jb(e) {
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
  n: Qb,
  classes: _b
} = ne("list");
function xb(e, n) {
  var r = ie("var-loading"), a = De("ripple");
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
        oe(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Q(r, {
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
      oe(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? j(e.$slots, "error", {
      key: 2
    }, () => [ke((h(), $(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [Se(
        oe(e.dt(e.errorText, e.pack.listErrorText)),
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
var Ud = ee({
  name: "VarList",
  directives: {
    Ripple: qe
  },
  components: {
    VarLoading: Rn
  },
  props: Gb,
  setup(e) {
    var {
      tabItem: n,
      bindTabItem: r
    } = Zb(), a = O(null), t = O(null), o, l = () => {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = Je(o), {
        bottom: v
      } = Je(t.value);
      return Math.floor(v) - Ae(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Jb(function* () {
        yield ze(), !(e.loading || e.finished || e.error || (n == null ? void 0 : n.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return S(r, {}), n && le(() => n.current.value, u), le(() => [e.loading, e.error, e.finished], u), on(() => {
      o = $r(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), vo(s), {
      pack: Qe,
      listEl: a,
      detectorEl: t,
      dt: so,
      isNumber: an,
      load: l,
      check: u,
      n: Qb,
      classes: _b
    };
  }
});
Ud.render = xb;
const la = Ud;
la.install = function(e) {
  e.component(la.name, la);
};
var Rk = la, e0 = {
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
  n: rs
} = ne("loading-bar");
const r0 = ee({
  name: "VarLoadingBar",
  props: e0,
  setup(e) {
    return () => Q("div", {
      class: n0(rs(), [e.error, rs("--error")]),
      style: {
        zIndex: bn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ye(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ye(e.top)
      }
    }, null);
  }
});
var Yd, Hd, To, Fd, as, jd = {}, a0 = {
  value: 0,
  opacity: 0,
  error: !1
}, xe = Le(a0), t0 = (e) => {
  Object.assign(xe, e);
}, o0 = (e) => {
  Object.assign(xe, e), jd = e;
}, i0 = () => {
  Object.keys(jd).forEach((e) => {
    xe[e] !== void 0 && (xe[e] = void 0);
  });
}, Wd = () => {
  as || (as = !0, ot(r0, xe));
}, Zi = () => {
  Yd = window.setTimeout(() => {
    if (!(xe.value >= 95)) {
      var e = Math.random();
      xe.value < 70 && (e = Math.round(5 * Math.random())), xe.value += e, Zi();
    }
  }, 200);
}, Ji = () => {
  window.clearTimeout(Hd), window.clearTimeout(Yd), window.clearTimeout(To), window.clearTimeout(Fd);
}, l0 = () => {
  Ji(), xe.error = !1, xe.value = 0, Wd(), To = window.setTimeout(() => {
    xe.opacity = 1;
  }, 200), Zi();
}, Gd = () => {
  Ji(), xe.value = 100, To = window.setTimeout(() => {
    xe.opacity = 0, Hd = window.setTimeout(() => {
      xe.error = !1;
    }, 250);
  }, 300);
}, s0 = () => {
  Ji(), xe.error = !0, xe.value === 100 && (xe.value = 0), Wd(), To = window.setTimeout(() => {
    xe.opacity = 1;
  }, 200), Zi(), Fd = window.setTimeout(Gd, 300);
}, qd = {
  start: l0,
  finish: Gd,
  error: s0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: t0,
  setDefaultOptions: o0,
  resetDefaultOptions: i0
}, Uk = qd;
const bi = qd;
function u0(e) {
  return ["click", "hover"].includes(e);
}
function d0(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var v0 = {
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
    validator: u0
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: d0
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
  n: f0,
  classes: c0
} = ne("menu");
function m0(e, n) {
  return h(), $(
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
    [j(e.$slots, "default"), (h(), be(nr, {
      to: e.teleport
    }, [Q(Re, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed,
      persisted: ""
    }, {
      default: fe(() => [ke(D(
        "div",
        {
          ref: "popover",
          style: q({
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
        [j(e.$slots, "menu")],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Qn, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Xd = ee({
  name: "VarMenu",
  props: v0,
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
      resize: y
    } = bd(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: gn,
      toSizeUnit: ye,
      n: f0,
      classes: c0,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: y,
      open: f,
      close: m
    };
  }
});
Xd.render = m0;
const Jn = Xd;
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
var Yk = Jn, Kd = Symbol("SELECT_BIND_OPTION_KEY");
function p0() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = sn(Kd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function h0() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = ln(Kd);
  return r || On("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var g0 = {
  label: {},
  value: {}
}, {
  n: y0,
  classes: b0
} = ne("option");
function w0(e, n) {
  var r = ie("var-checkbox"), a = De("ripple");
  return ke((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: q({
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
        style: q({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (h(), be(r, {
      key: 0,
      ref: "checkbox",
      "checked-color": e.focusColor,
      modelValue: e.optionSelected,
      "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
      onClick: n[1] || (n[1] = Pn(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : x("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [j(e.$slots, "default", {}, () => [Se(
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
var Zd = ee({
  name: "VarOption",
  directives: {
    Ripple: qe
  },
  components: {
    VarCheckbox: hr
  },
  props: g0,
  setup(e) {
    var n = O(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = h0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      i.value && (n.value = !n.value), u(y);
    }, f = () => u(y), m = (b) => {
      n.value = b;
    }, y = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return le([() => e.label, () => e.value], d), l(y), {
      n: y0,
      classes: b0,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Zd.render = w0;
const sa = Zd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var Hk = sa, C0 = {
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
function S0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: ts
} = ne("overlay");
const ua = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: C0,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Vt(() => e.show, 1), {
      disabled: o
    } = fo(), l = () => {
      S(e.onClick), S(e["onUpdate:show"], !1);
    };
    co(() => e.show, () => e.lockScroll);
    var i = () => Q("div", Ne({
      class: ts(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [S(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return Q(Re, {
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
        return Q(nr, {
          to: u,
          disabled: o.value
        }, S0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
var Fk = ua, k0 = {
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
  n: $0,
  classes: T0
} = ne("pagination"), P0 = ["item-mode", "onClick"];
function O0(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), l = De("ripple");
  return h(), $(
    "ul",
    {
      class: c(e.n())
    },
    [ke((h(), $(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [j(e.$slots, "prev", {}, () => [Q(r, {
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
        "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleCurrentValue = i),
        onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
        onKeydown: n[3] || (n[3] = nl((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), D("span", null, [Se(
        " / " + oe(e.pageCount) + " ",
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
      Ye(e.pageList, (i, s) => ke((h(), $("li", {
        key: s,
        "item-mode": e.getMode(i, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(i, s)
      }, [Se(
        oe(i),
        1
        /* TEXT */
      )], 10, P0)), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((h(), $(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [j(e.$slots, "next", {}, () => [Q(r, {
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
        "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i)
      }, {
        menu: fe(() => [(h(!0), $(
          Me,
          null,
          Ye(e.sizeOption, (i, s) => ke((h(), be(t, {
            class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(i)
          }, {
            default: fe(() => [Se(
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
        default: fe(() => [D(
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
            oe(e.size) + oe(e.pack.paginationItem) + " / " + oe(e.pack.paginationPage),
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (h(), $(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [Se(
        oe(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Q(a, {
        modelValue: e.quickJumperValue,
        "onUpdate:modelValue": n[7] || (n[7] = (i) => e.quickJumperValue = i),
        disabled: e.disabled,
        "var-pagination-cover": "",
        onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
        onKeydown: n[9] || (n[9] = nl((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
      }, null, 8, ["modelValue", "disabled"])],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (h(), $(
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
var Jd = ee({
  name: "VarPagination",
  components: {
    VarMenu: Jn,
    VarIcon: Ve,
    VarCell: pr,
    VarInput: Sr
  },
  directives: {
    Ripple: qe
  },
  props: k0,
  setup(e) {
    var n = O(!1), r = O(""), a = O("1"), t = O(!1), o = O(!1), l = O(L(e.current) || 1), i = O(L(e.size) || 10), s = O([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var k = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, L(e.total));
      return [k, E];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (k, E) => an(k) ? !1 : E === 1 ? t.value : o.value, y = (k, E) => an(k) ? "basic" : E === 1 ? "head" : "tail", b = (k, E) => {
      if (!(k === l.value || e.disabled)) {
        if (k === "...") {
          l.value = E === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
        an(k) && (l.value = k);
      }
    }, g = () => {
      e.disabled || (n.value = !0);
    }, C = (k) => {
      i.value = k, n.value = !1;
      var E = V(l.value);
      a.value = String(E), l.value = E;
    }, V = (k) => k > d.value ? d.value : k < 1 ? 1 : k, T = (k, E, M) => {
      M.target.blur();
      var P = V(L(E));
      a.value = String(P), l.value = P, k === "quick" && (r.value = "");
    };
    return le([() => e.current, () => e.size], (k) => {
      var [E, M] = k;
      l.value = L(E) || 1, i.value = L(M || 10);
    }), le([l, i, d], (k, E) => {
      var [M, P, p] = k, [w, U] = E, N = [], {
        maxPagerCount: X,
        total: K,
        onChange: A
      } = e, z = Math.ceil(L(K) / L(U)), F = p - (X - u.value) - 1;
      if (a.value = "" + M, p - 2 > X) {
        if (w === void 0 || p !== z)
          for (var W = 2; W < X + 2; W++)
            N.push(W);
        if (M <= X && M < F) {
          N = [];
          for (var ae = 1; ae < X + 1; ae++)
            N.push(ae + 1);
          t.value = !0, o.value = !1;
        }
        if (M > X && M < F) {
          N = [];
          for (var I = 1; I < X + 1; I++)
            N.push(M + I - u.value);
          t.value = M === 2 && X === 1, o.value = !1;
        }
        if (M >= F) {
          N = [];
          for (var B = 1; B < X + 1; B++)
            N.push(p - (X - B) - 1);
          t.value = !1, o.value = !0;
        }
        N = [1, "...", ...N, "...", p];
      } else
        for (var G = 1; G <= p; G++)
          N.push(G);
      s.value = N, w != null && p > 0 && S(A, M, P), S(e["onUpdate:current"], M), S(e["onUpdate:size"], P);
    }, {
      immediate: !0
    }), {
      n: $0,
      classes: T0,
      pack: Qe,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: r,
      simpleCurrentValue: a,
      totalText: f,
      getMode: y,
      isHideEllipsis: m,
      clickItem: b,
      showMenu: g,
      clickSize: C,
      setPage: T,
      toNumber: L,
      formatElevation: gn
    };
  }
});
Jd.render = O0;
const da = Jd;
da.install = function(e) {
  e.component(da.name, da);
};
var jk = da, V0 = {
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
  n: M0,
  classes: E0
} = ne("paper");
function I0(e, n) {
  var r = De("ripple");
  return ke((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Qd = ee({
  name: "VarPaper",
  directives: {
    Ripple: qe
  },
  props: V0,
  setup(e) {
    var n = (r) => {
      S(e.onClick, r);
    };
    return {
      n: M0,
      classes: E0,
      formatElevation: gn,
      toSizeUnit: ye,
      handleClick: n
    };
  }
});
Qd.render = I0;
const va = Qd;
va.install = function(e) {
  e.component(va.name, va);
};
var Wk = va;
function wi() {
  return wi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, wi.apply(this, arguments);
}
var B0 = wi({
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
}, _e(Ot, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: N0,
  classes: D0
} = ne("picker"), os = 300, A0 = 15, is = 200, z0 = 1e3, ls = 0, L0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], R0 = ["onTransitionend"], U0 = ["onClick"];
function Y0(e, n) {
  var r = ie("var-button");
  return h(), be(
    nt(e.dynamic ? e.n("$-popup") : e.Transition),
    Ne(e.dynamic ? {
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
      default: fe(() => [D(
        "div",
        Ne({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), $(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [j(e.$slots, "cancel", {}, () => [Q(r, {
            class: c(e.n("cancel-button")),
            "var-picker-cover": "",
            text: "",
            "text-color": e.cancelButtonTextColor,
            onClick: e.cancel
          }, {
            default: fe(() => [Se(
              oe(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
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
            oe(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), j(e.$slots, "confirm", {}, () => [Q(r, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: fe(() => [Se(
              oe(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
            Ye(e.scrollColumns, (a) => (h(), $("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(a),
              onTouchmove: Pn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
              Ye(a.column.texts, (t, o) => (h(), $("div", {
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
                oe(e.textFormatter(t, a.columnIndex)),
                3
                /* TEXT, CLASS */
              )], 14, U0))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, R0)], 42, L0))),
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
var _d = ee({
  name: "VarPicker",
  components: {
    VarButton: rn,
    VarPopup: kn
  },
  inheritAttrs: !1,
  props: B0,
  setup(e) {
    var n = O([]), r = R(() => Ae(e.optionHeight)), a = R(() => Ae(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = !1, s = (A, z) => {
      z.scrollEl = A;
    }, u = (A) => {
      S(e["onUpdate:show"], A);
    }, d = (A) => {
      var z = t.value - A.column.texts.length * r.value, F = r.value + t.value;
      A.translate = qa(A.translate, z, F);
    }, v = (A, z) => {
      var F = Math.round((t.value - z) / r.value);
      return xv(F, A.column.texts);
    }, f = (A) => (A.translate = t.value - A.index * r.value, A.translate), m = () => {
      var A = n.value.map((F) => F.column.texts[F.index]), z = n.value.map((F) => F.index);
      return {
        texts: A,
        indexes: z
      };
    }, y = function(A, z) {
      z === void 0 && (z = 0), f(A), A.duration = z;
    }, b = (A, z, F) => {
      A.translate += Math.abs(z / F) / 3e-3 * (z < 0 ? -1 : 1);
    }, g = (A, z) => {
      i || (A.index = z, A.scrolling = !0, y(A, is));
    }, C = (A) => {
      A.touching = !0, A.translate = Oo(A.scrollEl);
    }, V = (A, z) => {
      if (z.touching) {
        i = !0, z.scrolling = !1, z.duration = 0;
        var {
          clientY: F
        } = A.touches[0], W = z.prevY !== void 0 ? F - z.prevY : 0;
        z.prevY = F, z.translate += W, d(z);
        var ae = performance.now();
        ae - z.momentumTime > os && (z.momentumTime = ae, z.momentumPrevY = z.translate);
      }
    }, T = (A, z) => {
      z.touching = !1, z.prevY = void 0;
      var F = z.translate - z.momentumPrevY, W = performance.now() - z.momentumTime, ae = Math.abs(F) >= A0 && W <= os;
      ae && b(z, F, W), z.index = v(z, z.translate);
      var I = z.translate, B = f(z);
      z.scrolling = B !== I, y(z, ae ? z0 : is), z.scrolling || U(z), wn(() => {
        i = !1;
      });
    }, k = (A) => {
      A.scrolling = !1, U(A);
    }, E = (A) => A.map((z, F) => {
      var W, ae = Oe(z) ? {
        texts: z
      } : z, I = {
        id: ls++,
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
      return y(I), I;
    }), M = (A) => {
      var z = [];
      return P(z, A, 0, !0), z;
    }, P = function(A, z, F, W) {
      if (W === void 0 && (W = !1), Oe(z) && z.length) {
        var ae, I = W && (ae = e.cascadeInitialIndexes[A.length]) != null ? ae : 0, B = {
          id: ls++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: I,
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
        A.push(B), y(B), P(A, B.columns[B.index].children, F + 1, W);
      }
    }, p = (A) => {
      n.value.splice(n.value.indexOf(A) + 1), P(n.value, A.columns[A.index].children, A.columnIndex + 1);
    }, w = () => {
      var {
        indexes: A
      } = m();
      return A.every((z, F) => z === l[F]);
    }, U = (A) => {
      var {
        cascade: z,
        onChange: F
      } = e;
      if (!w()) {
        z && p(A);
        var W = n.value.some((B) => B.scrolling);
        if (!W) {
          var {
            texts: ae,
            indexes: I
          } = m();
          l = [...I], S(F, ae, I);
        }
      }
    }, N = () => {
      if (e.cascade) {
        var A = n.value.find((z) => z.scrolling);
        A && (A.index = v(A, Oo(A.scrollEl)), A.scrolling = !1, y(A), p(A));
      } else
        n.value.forEach((z) => {
          z.index = v(z, Oo(z.scrollEl)), y(z);
        });
    }, X = () => {
      N();
      var {
        texts: A,
        indexes: z
      } = m();
      l = [...z], S(e.onConfirm, A, z);
    }, K = () => {
      N();
      var {
        texts: A,
        indexes: z
      } = m();
      l = [...z], S(e.onCancel, A, z);
    };
    return le(() => e.columns, (A) => {
      n.value = e.cascade ? M(rl(A)) : E(rl(A));
      var {
        indexes: z
      } = m();
      l = [...z];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: N0,
      classes: D0,
      pack: Qe,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Re,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: C,
      handleTouchmove: V,
      handleTouchend: T,
      handleTransitionend: k,
      confirm: X,
      cancel: K,
      dt: so,
      handleClick: g
    };
  }
});
_d.render = Y0;
const kr = _d;
var cn;
function Ra(e) {
  return new Promise((n) => {
    Ra.close();
    var r = Oe(e) ? {
      columns: e
    } : e, a = Le(r);
    a.dynamic = !0, a.teleport = "body", cn = a;
    var {
      unmountInstance: t
    } = ot(kr, a, {
      onConfirm: (o, l) => {
        S(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, cn === a && (cn = null);
      },
      onCancel: (o, l) => {
        S(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, cn === a && (cn = null);
      },
      onClose: () => {
        S(a.onClose), n({
          state: "close"
        }), cn === a && (cn = null);
      },
      onClosed: () => {
        S(a.onClosed), t(), cn === a && (cn = null);
      },
      onRouteChange: () => {
        t(), cn === a && (cn = null);
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
Ra.Component = kr;
Ra.install = function(e) {
  e.component(kr.name, kr);
};
Ra.close = function() {
  if (cn != null) {
    var e = cn;
    cn = null, ze().then(() => {
      e.show = !1;
    });
  }
};
var Gk = kr;
function H0(e) {
  return ["linear", "circle"].includes(e);
}
function F0(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var j0 = {
  mode: {
    type: String,
    default: "linear",
    validator: H0
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
    validator: F0
  }
}, {
  n: W0,
  classes: G0
} = ne("progress"), q0 = ["viewBox"], X0 = ["r", "stroke-width", "stroke-dasharray"], K0 = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function Z0(e, n) {
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
        [j(e.$slots, "default", {}, () => [Se(
          oe(e.linearProps.roundValue),
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
      }, null, 14, X0)) : x("v-if", !0), D("circle", {
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
      }, null, 14, K0)], 14, q0)), e.label ? (h(), $(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [Se(
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
var xd = ee({
  name: "VarProgress",
  props: j0,
  setup(e) {
    var n = 100, r = 20, a = 2 * Math.PI * r, t = R(() => {
      var l = L(e.value), i = l > n ? n : l, s = l > n ? n : Math.round(l);
      return {
        width: i + "%",
        roundValue: s + "%"
      };
    }), o = R(() => {
      var {
        size: l,
        lineWidth: i,
        value: s
      } = e, u = r / (1 - Ae(i) / Ae(l)) * 2, d = "0 0 " + u + " " + u, v = L(s) > n ? n : Math.round(L(s)), f = "" + (n - v) / n * a, m = Ae(i) / Ae(l) * u;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: v + "%"
      };
    });
    return {
      n: W0,
      classes: G0,
      toSizeUnit: ye,
      linearProps: t,
      CIRCUMFERENCE: a,
      RADIUS: r,
      circleProps: o
    };
  }
});
xd.render = Z0;
const fa = xd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var qk = fa, J0 = {
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
  n: ds,
  classes: Q0
} = ne("pull-refresh"), vs = 150;
function _0(e, n) {
  var r = ie("var-icon");
  return h(), $(
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
        style: q(e.controlStyle)
      },
      [Q(r, {
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
var ev = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ve
  },
  props: J0,
  setup(e) {
    var n = O(0), r = O(null), a = O(null), t = O(0), o = O("-125%"), l = O("arrow-down"), i = O("default"), s = O(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var p = us(function* (w) {
        if (l.value !== w)
          return l.value = w, new Promise((U) => {
            window.setTimeout(U, vs);
          });
      });
      return function(U) {
        return p.apply(this, arguments);
      };
    }(), y = R(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = R(() => ({
      transform: "translate3d(0px, " + (He(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: C.value ? e.successBgColor : e.bgColor,
      color: C.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * n.value)), C = R(() => i.value === "success"), V = (p) => {
      var w = "classList" in u ? u : document.body;
      w.classList[p](ds() + "--lock");
    }, T = (p) => {
      if (n.value === 0) {
        var {
          width: w
        } = Je(a.value);
        n.value = -(w + w * 0.25);
      }
      v = p.touches[0].clientY, f = 0, d = $r(p.target);
    }, k = (p) => {
      if (!(!y.value || !d) && !(d !== u && pt(d) > 0)) {
        var w = pt(u);
        if (!(w > 0)) {
          var U = w === 0, N = p.touches[0];
          f = N.clientY - v, U && f >= 0 && p.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = p.touches[0].clientY), U && an(o.value) && o.value > n.value && V("add");
          var X = (p.touches[0].clientY - t.value) / 2 + n.value;
          o.value = X >= g.value ? g.value : X, m(o.value >= g.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var p = us(function* () {
        y.value && (s.value = !0, L(o.value) >= g.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = g.value * 0.3, S(e["onUpdate:modelValue"], !0), ze(() => {
          S(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return p.apply(this, arguments);
      };
    }(), M = () => {
      u = e.target ? Ps(e.target, "PullRefresh") : $r(r.value);
    }, P = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (p) => {
      p === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, P();
      }, L(e.successDuration)));
    }), on(M), Tr(r, "touchmove", k), {
      n: ds,
      classes: Q0,
      ICON_TRANSITION: vs,
      refreshStatus: i,
      freshNode: r,
      controlNode: a,
      touchStart: T,
      touchMove: k,
      touchEnd: E,
      iconName: l,
      controlStyle: b,
      isSuccess: C
    };
  }
});
ev.render = _0;
const ca = ev;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var Xk = ca, x0 = {
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
function e1() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = sn(nv);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function n1() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = ln(nv);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: r1,
  classes: a1
} = ne("radio");
function t1(e, n) {
  var r = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = De("ripple"), l = De("hover");
  return h(), $(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      Ne({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((h(), $(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(r, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-marked",
          size: e.iconSize
        }, null, 8, ["class", "size"])]) : j(e.$slots, "unchecked-icon", {
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
var rv = ee({
  name: "VarRadio",
  directives: {
    Ripple: qe,
    Hover: Un
  },
  components: {
    VarIcon: Ve,
    VarFormDetails: en,
    VarHoverOverlay: pn
  },
  inheritAttrs: !1,
  props: x0,
  setup(e) {
    var n = O(!1), r = R(() => n.value === e.checkedValue), a = O(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = n1(), {
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
    } = Vn(), y = (M) => {
      ze(() => {
        var {
          validateTrigger: P,
          rules: p,
          modelValue: w
        } = e;
        v(P, M, p, w);
      });
    }, b = (M) => {
      var {
        checkedValue: P,
        onChange: p
      } = e;
      t && n.value === P || (n.value = M, S(e["onUpdate:modelValue"], n.value), S(p, n.value), t == null || t.onToggle(P), y("onChange"));
    }, g = (M) => {
      var {
        disabled: P,
        readonly: p,
        uncheckedValue: w,
        checkedValue: U,
        onClick: N
      } = e;
      s != null && s.disabled.value || P || (S(N, M), !(s != null && s.readonly.value || p) && (a.value = !0, b(r.value ? w : U)));
    }, C = (M) => {
      var {
        checkedValue: P,
        uncheckedValue: p
      } = e;
      n.value = M === P ? P : p;
    }, V = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, T = () => f(e.rules, e.modelValue), k = (M) => {
      var {
        uncheckedValue: P,
        checkedValue: p
      } = e, w = ![P, p].includes(M);
      w && (M = r.value ? P : p), b(M);
    };
    le(() => e.modelValue, (M) => {
      n.value = M;
    }, {
      immediate: !0
    });
    var E = {
      sync: C,
      validate: T,
      resetValidation: m,
      reset: V
    };
    return S(o, E), S(u, E), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: r1,
      classes: a1,
      handleClick: g,
      toggle: k,
      reset: V,
      validate: T,
      resetValidation: m
    };
  }
});
rv.render = t1;
const ma = rv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Kk = ma;
function o1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var i1 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: o1
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
  n: l1,
  classes: s1
} = ne("radio-group");
function u1(e, n) {
  var r = ie("var-form-details");
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
    ), Q(r, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var av = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: en
  },
  props: i1,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = e1(), {
      bindForm: t
    } = Mn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Vn(), u = R(() => o.value), d = (g) => {
      ze(() => {
        var {
          validateTrigger: C,
          rules: V,
          modelValue: T
        } = e;
        l(C, g, V, T);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: C
      } = g;
      return C(e.modelValue);
    }), f = (g) => {
      S(e["onUpdate:modelValue"], g), S(e.onChange, g), d("onChange");
    }, m = () => i(e.rules, e.modelValue), y = () => {
      S(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: y,
      resetValidation: s,
      errorMessage: u
    };
    return S(t, b), a(b), {
      errorMessage: o,
      n: l1,
      classes: s1,
      reset: y,
      validate: m,
      resetValidation: s
    };
  }
});
av.render = u1;
const pa = av;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Zk = pa, d1 = {
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
  n: lt
} = ne("rate"), v1 = ["onClick"];
function f1(e, n) {
  var r = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = De("ripple"), l = De("hover");
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
        Ye(e.toNumber(e.count), (i) => ke((h(), $("div", {
          key: i,
          style: q(e.getStyle(i)),
          class: c(e.getClass(i)),
          onClick: (s) => e.handleClick(i, s)
        }, [Q(r, {
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
        }, null, 8, ["hovering"])], 14, v1)), [[o, {
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
var tv = ee({
  name: "VarRate",
  components: {
    VarIcon: Ve,
    VarFormDetails: en,
    VarHoverOverlay: pn
  },
  directives: {
    Ripple: qe,
    Hover: Un
  },
  props: d1,
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
    } = Pr(), s = O(-1), u = Number(e.modelValue), d = (k) => {
      var {
        count: E,
        gap: M
      } = e;
      return {
        color: f(k).color,
        marginRight: k !== L(E) ? ye(M) : 0
      };
    }, v = (k) => {
      var {
        name: E,
        color: M
      } = f(k);
      return {
        [lt("content")]: !0,
        [lt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [lt("--error")]: a.value,
        [lt("--primary")]: E !== e.emptyIcon && !M
      };
    }, f = (k) => {
      var {
        modelValue: E,
        disabled: M,
        disabledColor: P,
        color: p,
        half: w,
        emptyColor: U,
        icon: N,
        halfIcon: X,
        emptyIcon: K
      } = e, A = p;
      return (M || n != null && n.disabled.value) && (A = P), k <= L(E) ? {
        color: A,
        name: N
      } : w && k <= L(E) + 0.5 ? {
        color: A,
        name: X
      } : {
        color: M || n != null && n.disabled.value ? P : U,
        name: K
      };
    }, m = (k, E) => {
      var {
        half: M,
        clearable: P
      } = e;
      if (M) {
        var {
          offsetWidth: p
        } = E.target;
        E.offsetX <= Math.floor(p / 2) && (k -= 0.5);
      }
      u === k && P && (k = 0), u = k, S(e["onUpdate:modelValue"], k);
    }, y = () => o(e.rules, L(e.modelValue)), b = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = (k, E) => {
      var {
        readonly: M,
        disabled: P,
        onChange: p
      } = e;
      M || P || n != null && n.disabled.value || n != null && n.readonly.value || (m(k, E), S(p, k), b());
    }, C = (k) => (E) => {
      s.value = k, i.value = E;
    }, V = () => {
      S(e["onUpdate:modelValue"], 0), l();
    }, T = {
      reset: V,
      validate: y,
      resetValidation: l
    };
    return S(r, T), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: d,
      getClass: v,
      getCurrentState: f,
      handleClick: g,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: C,
      reset: V,
      validate: y,
      resetValidation: l,
      toSizeUnit: ye,
      toNumber: L,
      n: lt
    };
  }
});
tv.render = f1;
const ha = tv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Jk = ha;
function c1(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var m1 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: c1
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
}, p1 = (e) => (Er(""), e = e(), Ir(), e), h1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, g1 = /* @__PURE__ */ p1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), y1 = [g1];
function b1(e, n) {
  return h(), $("svg", h1, y1);
}
var ov = ee({});
ov.render = b1;
const w1 = ov;
var C1 = (e) => (Er(""), e = e(), Ir(), e), S1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, k1 = /* @__PURE__ */ C1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), $1 = [k1];
function T1(e, n) {
  return h(), $("svg", S1, $1);
}
var iv = ee({});
iv.render = T1;
const P1 = iv;
var O1 = (e) => (Er(""), e = e(), Ir(), e), V1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, M1 = /* @__PURE__ */ O1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), E1 = [M1];
function I1(e, n) {
  return h(), $("svg", V1, E1);
}
var lv = ee({});
lv.render = I1;
const B1 = lv;
var {
  n: N1,
  classes: D1
} = ne("result");
function A1(e, n) {
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
var sv = ee({
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
      n: N1,
      classes: D1,
      toNumber: L
    };
  }
});
sv.render = A1;
const z1 = sv;
var L1 = (e) => (Er(""), e = e(), Ir(), e), R1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, U1 = /* @__PURE__ */ L1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), Y1 = [U1];
function H1(e, n) {
  return h(), $("svg", R1, Y1);
}
var uv = ee({});
uv.render = H1;
const F1 = uv;
var j1 = (e) => (Er(""), e = e(), Ir(), e), W1 = {
  viewBox: "-4 -4 32 32"
}, G1 = /* @__PURE__ */ j1(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), q1 = [G1];
function X1(e, n) {
  return h(), $("svg", W1, q1);
}
var dv = ee({});
dv.render = X1;
const K1 = dv;
var {
  n: Z1,
  classes: J1
} = ne("result");
function Q1(e, n) {
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
        [(h(), be(nt(e.type), {
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
      oe(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), $(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      oe(e.description),
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
var vv = ee({
  name: "VarResult",
  components: {
    Info: w1,
    Success: z1,
    Warning: B1,
    Error: P1,
    Question: F1,
    Empty: K1
  },
  props: m1,
  setup(e) {
    var n = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: Z1,
      classes: J1,
      toNumber: L,
      toPxNum: Ae,
      toSizeUnit: ye,
      circleSize: n,
      borderSize: r
    };
  }
});
vv.render = Q1;
const ga = vv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Qk = ga;
function _1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function x1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var ew = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: _1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: x1
  },
  onClick: Y()
}, {
  n: nw,
  classes: rw
} = ne("row");
function aw(e, n) {
  return h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: q({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var fv = ee({
  name: "VarRow",
  props: ew,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = lp(), t = R(() => {
      var s = Ae(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
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
    return le(() => a.value, o), le(() => e.gutter, o), r(i), {
      n: nw,
      classes: rw,
      average: t,
      handleClick: l,
      padStartFlex: Xt
    };
  }
});
fv.render = aw;
const ya = fv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var _k = ya;
function Ci() {
  return Ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ci.apply(this, arguments);
}
function tw(e) {
  return ["left", "right", "center"].includes(e);
}
var ow = Ci({
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
    validator: tw
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
}, _e(Ki, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: iw,
  classes: lw
} = ne("select"), sw = {
  key: 1
};
function uw(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-field-decorator"), o = ie("var-menu"), l = ie("var-form-details");
  return h(), $(
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
      "onUpdate:show": n[1] || (n[1] = (i) => e.showMenu = i),
      class: c(e.n("menu")),
      "popover-class": e.variant === "standard" && e.hint ? e.n("--menu-margin") : void 0,
      "offset-y": e.offsetY,
      disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
      placement: e.placement,
      "default-style": !1,
      onClickOutside: e.handleBlur
    }, {
      menu: fe(() => [D(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )]),
      default: fe(() => [Q(
        t,
        Tt(lo({
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
          "append-icon": fe(() => [j(e.$slots, "append-icon")]),
          default: fe(() => [D(
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
                    Ye(e.labels, (i) => (h(), be(r, {
                      class: c(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: i,
                      onClick: n[0] || (n[0] = Pn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(i)
                    }, {
                      default: fe(() => [Se(
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
                )) : (h(), $(
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
              )) : (h(), $(
                "span",
                sw,
                oe(e.label),
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
              oe(e.placeholder),
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
          fn: fe(() => [j(e.$slots, "prepend-icon")]),
          key: "0"
        } : void 0]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      )]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]), Q(l, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = Pn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var cv = ee({
  name: "VarSelect",
  components: {
    VarIcon: Ve,
    VarMenu: Jn,
    VarChip: gr,
    VarFieldDecorator: Dd,
    VarFormDetails: en
  },
  props: ow,
  setup(e) {
    var n = O(!1), r = O(!1), a = R(() => e.multiple), t = R(() => e.focusColor), o = O(""), l = O([]), i = R(() => Fn(e.modelValue)), s = R(() => e.disabled || e.readonly ? "" : "pointer"), u = O(0), {
      bindForm: d,
      form: v
    } = Mn(), {
      length: f,
      options: m,
      bindOptions: y
    } = p0(), {
      errorMessage: b,
      validateWithTrigger: g,
      validate: C,
      // expose
      resetValidation: V
    } = Vn(), T = O(null), k = R(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), E = R(() => {
      var {
        hint: H,
        blurColor: Z,
        focusColor: _
      } = e;
      if (!H)
        return b.value ? "var(--field-decorator-error-color)" : n.value ? _ || "var(--field-decorator-focus-color)" : Z || "var(--field-decorator-blur-color)";
    }), M = R(() => !e.hint && Fn(e.modelValue)), P = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var _ = Z;
        l.value = _.map(U);
      }
      !H && !Fn(Z) && (o.value = U(Z)), !H && Fn(Z) && (o.value = "");
    }, p = (H) => {
      ze(() => {
        var {
          validateTrigger: Z,
          rules: _,
          modelValue: ve
        } = e;
        g(Z, H, _, ve);
      });
    }, w = (H) => {
      var {
        value: Z,
        label: _
      } = H;
      return Z.value != null ? Z.value : _.value;
    }, U = (H) => {
      var Z, _, ve = m.find((Ce) => {
        var {
          value: Ee
        } = Ce;
        return Ee.value === H;
      });
      return ve || (ve = m.find((Ce) => {
        var {
          label: Ee
        } = Ce;
        return Ee.value === H;
      })), (Z = (_ = ve) == null ? void 0 : _.label.value) != null ? Z : "";
    }, N = () => {
      var {
        disabled: H,
        readonly: Z,
        onFocus: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (u.value = Ae(e.offsetY), n.value = !0, S(_), p("onFocus"));
    }, X = () => {
      var {
        disabled: H,
        readonly: Z,
        onBlur: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (I(), S(_), p("onBlur"));
    }, K = (H) => {
      var {
        disabled: Z,
        readonly: _,
        multiple: ve,
        onChange: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || _)) {
        var Ee = ve ? m.filter((te) => {
          var {
            selected: de
          } = te;
          return de.value;
        }).map(w) : w(H);
        S(e["onUpdate:modelValue"], Ee), S(Ce, Ee), p("onChange"), ve || I();
      }
    }, A = () => {
      var {
        disabled: H,
        readonly: Z,
        multiple: _,
        clearable: ve,
        onClear: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || H || Z || !ve)) {
        var Ee = _ ? [] : void 0;
        S(e["onUpdate:modelValue"], Ee), S(Ce, Ee), p("onClear");
      }
    }, z = (H) => {
      var {
        disabled: Z,
        onClick: _
      } = e;
      v != null && v.disabled.value || Z || (S(_, H), p("onClick"));
    }, F = (H) => {
      var {
        disabled: Z,
        readonly: _,
        modelValue: ve,
        onClose: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || _)) {
        var Ee = ve, te = m.find((me) => {
          var {
            label: Pe
          } = me;
          return Pe.value === H;
        }), de = Ee.filter((me) => {
          var Pe;
          return me !== ((Pe = te.value.value) != null ? Pe : te.label.value);
        });
        S(e["onUpdate:modelValue"], de), S(Ce, de), p("onClose");
      }
    }, W = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var _ = Z;
        m.forEach((ve) => ve.sync(_.includes(w(ve))));
      } else
        m.forEach((ve) => ve.sync(Z === w(ve)));
      P();
    }, ae = () => {
      u.value = Ae(e.offsetY), n.value = !0, r.value = !0;
    }, I = () => {
      n.value = !1, r.value = !1;
    }, B = () => C(e.rules, e.modelValue), G = () => {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), V();
    };
    le(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      H && !Oe(Z) && On("Select", "The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, W, {
      deep: !0
    }), le(() => f.value, W);
    var re = {
      multiple: a,
      focusColor: t,
      computeLabel: P,
      onSelect: K,
      reset: G,
      validate: B,
      resetValidation: V
    };
    return y(re), S(d, re), {
      offsetY: u,
      isFocus: n,
      showMenu: r,
      errorMessage: b,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: T,
      placement: k,
      cursor: s,
      placeholderColor: E,
      enableCustomPlaceholder: M,
      n: iw,
      classes: lw,
      handleFocus: N,
      handleBlur: X,
      handleClear: A,
      handleClick: z,
      handleClose: F,
      reset: G,
      validate: B,
      resetValidation: V,
      focus: ae,
      blur: I
    };
  }
});
cv.render = uw;
const ba = cv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var xk = ba, dw = {
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
  n: vw,
  classes: fw
} = ne("skeleton");
function cw(e, n) {
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
            Ye(e.toNumber(e.rows), (r, a) => (h(), $(
              "div",
              {
                class: c(e.n("row")),
                key: r,
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
var mv = ee({
  name: "VarSkeleton",
  props: dw,
  setup() {
    return {
      n: vw,
      classes: fw,
      toSizeUnit: ye,
      toNumber: L
    };
  }
});
mv.render = cw;
const wa = mv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var e$ = wa;
function mw(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ge = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), pw = {
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
    validator: mw
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
  classes: hw
} = ne("slider"), gw = ["onTouchstart"];
function yw(e, n) {
  var r = ie("var-hover-overlay"), a = ie("var-form-details"), t = De("hover");
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
        Ye(e.thumbList, (o) => (h(), $("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: q(e.thumbStyle(o)),
          onTouchstart: Pn((l) => e.start(l, o.enumValue), ["stop"])
        }, [j(e.$slots, "button", {
          currentValue: o.text
        }, () => [ke(D(
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
          [Q(r, {
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
            oe(o.text),
            1
            /* TEXT */
          )],
          6
          /* CLASS, STYLE */
        )])], 46, gw))),
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
var pv = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: en,
    VarHoverOverlay: pn
  },
  directives: {
    Hover: Un
  },
  props: pw,
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
    }), m = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = O(null), b = O(0), g = O(!1), C = Le({
      [Ge.First]: f(),
      [Ge.Second]: f()
    }), V = R(() => L(e.max) - L(e.min)), T = R(() => b.value / V.value * L(e.step)), k = R(() => {
      var {
        modelValue: te,
        range: de
      } = e, me = [];
      return de && Oe(te) ? me = [{
        value: K(te[0]),
        enumValue: Ge.First,
        text: A(te[0]),
        hovering: ut(i),
        handleHovering: s
      }, {
        value: K(te[1]),
        enumValue: Ge.Second,
        text: A(te[1]),
        hovering: ut(u),
        handleHovering: d
      }] : an(te) && (me = [{
        value: K(te),
        enumValue: Ge.First,
        text: A(te),
        hovering: ut(i),
        handleHovering: s
      }]), me;
    }), E = R(() => {
      var {
        activeColor: te,
        range: de,
        modelValue: me
      } = e, Pe = de && Oe(me) ? K(Math.min(me[0], me[1])) : 0, Fe = de && Oe(me) ? K(Math.max(me[0], me[1])) - Pe : K(me);
      return p.value ? {
        left: "0px",
        height: Fe + "%",
        bottom: Pe + "%",
        background: te
      } : {
        top: "0px",
        width: Fe + "%",
        left: Pe + "%",
        background: te
      };
    }), M = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), P = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), p = R(() => e.direction === "vertical"), w, U = (te) => {
      var de = te.currentTarget;
      return de ? p.value ? b.value - (te.clientY - Je(de).top) : te.clientX - nf(de) : 0;
    }, N = (te) => {
      var de = p.value ? "bottom" : "left";
      return {
        [de]: te.value + "%",
        zIndex: C[te.enumValue].active ? 1 : void 0
      };
    }, X = (te) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : C[te].active, K = (te) => {
      var {
        min: de,
        max: me
      } = e;
      return te < L(de) ? 0 : te > L(me) ? 100 : (te - L(de)) / V.value * 100;
    }, A = (te) => {
      if (!an(te))
        return 0;
      var de = te;
      de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max));
      var me = parseInt("" + de, 10) === de;
      return me ? de : L(de.toPrecision(5));
    }, z = (te, de) => {
      M.value || de.handleHovering(te);
    }, F = (te, de) => {
      var me = [], {
        step: Pe,
        range: Fe,
        modelValue: Xe,
        onChange: je,
        min: We
      } = e, se = L(Pe), we = Math.round(te / T.value), he = we * se + L(We), $e = C[de].percentValue * se + L(We);
      if (C[de].percentValue = we, Fe && Oe(Xe) && (me = de === Ge.First ? [he, Xe[1]] : [Xe[0], he]), $e !== he) {
        var Te = Fe ? me.map((Ue) => A(Ue)) : A(he);
        S(je, Te), S(e["onUpdate:modelValue"], Te), m();
      }
    }, W = (te) => {
      if (!e.range)
        return Ge.First;
      var de = C[Ge.First].percentValue * T.value, me = C[Ge.Second].percentValue * T.value, Pe = Math.abs(te - de), Fe = Math.abs(te - me);
      return Pe <= Fe ? Ge.First : Ge.Second;
    }, ae = () => {
      document.addEventListener("touchmove", G, {
        passive: !1
      }), document.addEventListener("touchend", re), document.addEventListener("touchcancel", re);
    }, I = () => {
      document.removeEventListener("touchmove", G), document.removeEventListener("touchend", re), document.removeEventListener("touchcancel", re);
    }, B = (te, de) => {
      if (b.value || (b.value = y.value.offsetWidth), M.value || (C[de].active = !0), w = de, ae(), !(M.value || P.value)) {
        S(e.onStart), g.value = !0;
        var {
          clientX: me,
          clientY: Pe
        } = te.touches[0];
        C[de].startPosition = p.value ? Pe : me;
      }
    }, G = (te) => {
      if (te.preventDefault(), !(M.value || P.value || !g.value)) {
        var {
          startPosition: de,
          currentOffset: me
        } = C[w], {
          clientX: Pe,
          clientY: Fe
        } = te.touches[0], Xe = (p.value ? de - Fe : Pe - de) + me;
        Xe <= 0 ? Xe = 0 : Xe >= b.value && (Xe = b.value), F(Xe, w);
      }
    }, re = () => {
      I();
      var {
        range: te,
        modelValue: de,
        onEnd: me,
        step: Pe,
        min: Fe
      } = e;
      if (M.value || (C[w].active = !1), !(M.value || P.value)) {
        var Xe = [];
        C[w].currentOffset = C[w].percentValue * T.value;
        var je = C[w].percentValue * L(Pe) + L(Fe);
        te && Oe(de) && (Xe = w === Ge.First ? [je, de[1]] : [de[0], je]), S(me, te ? Xe : je), g.value = !1;
      }
    }, H = (te) => {
      if (!(M.value || P.value) && !te.target.closest("." + fs("thumb"))) {
        var de = U(te), me = W(de);
        w = me, F(de, me), re();
      }
    }, Z = () => {
      var te = L(e.step);
      return isNaN(te) ? (ll("Slider", 'type of prop "step" should be Number'), !1) : te < 0 ? (ll("Slider", '"step" should be > 0'), !1) : !0;
    }, _ = () => {
      var {
        range: te,
        modelValue: de
      } = e;
      return te && !Oe(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !te && Oe(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : te && Oe(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ve = function(te, de) {
      te === void 0 && (te = e.modelValue), de === void 0 && (de = L(e.step));
      var me = (Pe) => {
        var {
          min: Fe,
          max: Xe
        } = e;
        return Pe < L(Fe) ? 0 : Pe > L(Xe) ? V.value / de : (Pe - L(Fe)) / de;
      };
      e.range && Oe(te) ? (C[Ge.First].percentValue = me(te[0]), C[Ge.First].currentOffset = C[Ge.First].percentValue * T.value, C[Ge.Second].percentValue = me(te[1]), C[Ge.Second].currentOffset = C[Ge.Second].percentValue * T.value) : an(te) && (C[Ge.First].currentOffset = me(te) * T.value);
    }, Ce = () => {
      var te = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], te), l();
    }, Ee = {
      reset: Ce,
      validate: v,
      resetValidation: l
    };
    return S(n, Ee), le([() => e.modelValue, () => e.step], (te) => {
      var [de, me] = te;
      !Z() || !_() || g.value || ve(de, L(me));
    }), le(b, () => ve()), on(() => {
      !Z() || !_() || (b.value = y.value[p.value ? "offsetHeight" : "offsetWidth"]);
    }), oo(() => {
      I();
    }), {
      n: fs,
      classes: hw,
      Thumbs: Ge,
      sliderEl: y,
      getFillStyle: E,
      isDisabled: M,
      isVertical: p,
      thumbStyle: N,
      errorMessage: a,
      thumbsProps: C,
      thumbList: k,
      hover: z,
      multiplySizeUnit: dn,
      toNumber: L,
      showLabel: X,
      start: B,
      move: G,
      end: re,
      click: H
    };
  }
});
pv.render = yw;
const Ca = pv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var n$ = Ca;
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
function bw(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function ww(e) {
  return Qi.includes(e);
}
var hv = {
  type: {
    type: String,
    validator: ww
  },
  position: {
    type: String,
    default: "top",
    validator: bw
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
  loadingType: _e(dr, "type"),
  loadingSize: _e(dr, "size"),
  loadingRadius: _e(dr, "radius"),
  loadingColor: Si({}, _e(dr, "color"), {
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
  n: Cw,
  classes: Sw
} = ne("snackbar"), kw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function $w(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return ke((h(), $(
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
        [j(e.$slots, "default", {}, () => [Se(
          oe(e.content),
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
        [e.iconName ? (h(), be(r, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : x("v-if", !0), e.type === "loading" ? (h(), be(a, {
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
  )), [[Qn, e.show]]);
}
var gv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Rn,
    VarIcon: Ve
  },
  props: hv,
  setup(e) {
    var n = O(null), {
      zIndex: r
    } = Vt(() => e.show, 1);
    co(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? kw[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && S(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (l) => {
      l ? (S(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), S(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), on(() => {
      e.show && (S(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Qi,
      n: Cw,
      classes: Sw,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
gv.render = $w;
const yv = gv;
var {
  n: Tw
} = ne("snackbar");
function Pw(e, n) {
  var r = ie("var-snackbar-core");
  return h(), be(nr, {
    to: e.teleport,
    disabled: e.disabled
  }, [Q(Re, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: fe(() => [Q(r, Ne(e.$props, {
      class: e.n("transition")
    }), {
      icon: fe(() => [j(e.$slots, "icon")]),
      action: fe(() => [j(e.$slots, "action")]),
      default: fe(() => [j(e.$slots, "default", {}, () => [Se(
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
var bv = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: yv
  },
  props: hv,
  setup() {
    var {
      disabled: e
    } = fo();
    return {
      n: Tw,
      disabled: e
    };
  }
});
bv.render = Pw;
const Sa = bv;
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
function Ow(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var Qi = ["loading", "success", "warning", "info", "error"], cs = 0, ki = !1, wv, _a = !1, Cv = {
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
}, Tn = Le([]), _i = Cv, Vw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Bo = (e) => () => rt(e) ? e() : e, Mw = {
  setup() {
    return () => {
      var e = Tn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), _a && (a.position = "top");
        var l = _a ? "relative" : "absolute", i = Ct({
          position: l
        }, Aw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Bo(s),
          icon: Bo(u),
          action: Bo(d)
        };
        return Q(yv, Ne(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Q(Kv, Ne(Vw, {
        style: {
          zIndex: bn.zIndex
        },
        onAfterEnter: Ew,
        onAfterLeave: Iw
      }), Ow(e) ? e : {
        default: () => [e]
      });
    };
  }
}, er = function(e) {
  var n = Nw(e), r = Le(Ct({}, _i, n));
  r.show = !0, ki || (ki = !0, wv = ot(Mw).unmountInstance);
  var {
    length: a
  } = Tn, t = {
    id: cs++,
    reactiveSnackOptions: r
  };
  if (a === 0 || _a)
    Bw(t);
  else {
    var o = "update-" + cs;
    Dw(r, o);
  }
  return {
    clear() {
      !_a && Tn.length ? Tn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Qi.forEach((e) => {
  er[e] = (n) => (Oi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, er(n));
});
er.install = function(e) {
  e.component(Sa.name, Sa);
};
er.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== _a && (Tn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), _a = e);
};
er.clear = function() {
  Tn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
er.setDefaultOptions = function(e) {
  _i = e;
};
er.resetDefaultOptions = function() {
  _i = Cv;
};
er.Component = Sa;
function Ew(e) {
  var n = e.getAttribute("data-id"), r = Tn.find((a) => a.id === L(n));
  r && S(r.reactiveSnackOptions.onOpened);
}
function Iw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Tn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, S(r.reactiveSnackOptions.onClosed));
  var a = Tn.every((t) => t.animationEnd);
  a && (S(wv), Tn = Le([]), ki = !1);
}
function Bw(e) {
  Tn.push(e);
}
function Nw(e) {
  return e === void 0 && (e = {}), He(e) ? {
    content: e
  } : e;
}
function Dw(e, n) {
  var [r] = Tn;
  r.reactiveSnackOptions = Ct({}, r.reactiveSnackOptions, e), r._update = n;
}
function Aw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var r$ = Sa;
const $i = er;
var Sv = (e) => ["mini", "small", "normal", "large"].includes(e), zw = (e) => Sv(e) || Oe(e) || an(e) || He(e), Lw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Rw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Uw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: zw
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
    validator: Lw
  },
  align: {
    type: String,
    validator: Rw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function yn(e) {
  return "calc(" + e + " / 2)";
}
function Yw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = yn(e) + " " + n + " " + yn(e) + " 0" : i = yn(e) + " 0" : t === "space-around" ? i = yn(e) + " " + yn(n) : t === "space-between" && (o === 0 ? i = yn(e) + " " + yn(n) + " " + yn(e) + " 0" : o === l ? i = yn(e) + " 0 " + yn(e) + " " + yn(n) : i = yn(e) + " " + yn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: No,
  classes: Hw
} = ne("space");
const ka = ee({
  name: "VarSpace",
  props: Uw,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Oe(t) ? t.map(ye) : [ye(t), ye(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = S(r.default)) != null ? t : [], f = Sv(d), [m, y] = a(d, f);
      v = Ds(v);
      var b = v.length - 1, g = v.map((C, V) => {
        var T = Yw(m, y, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: b
        });
        return Q("div", {
          style: {
            margin: T
          }
        }, [C]);
      });
      return Q("div", {
        class: Hw(No(), No("$--box"), [o, No("--inline")]),
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
ka.install = function(e) {
  e.component(ka.name, ka);
};
var a$ = ka, Fw = {
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
}, kv = Symbol("STEPS_BIND_STEP_KEY");
function jw() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(kv);
  return {
    step: n,
    bindStep: e
  };
}
function Ww() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = ln(kv);
  return r || On("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: Gw,
  classes: qw
} = ne("step"), Xw = {
  key: 3
};
function Kw(e, n) {
  var r = ie("var-icon");
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
          onClick: n[0] || (n[0] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [e.isActive ? (h(), be(r, {
          key: 0,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.activeIcon
        }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (h(), be(r, {
          key: 1,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.currentIcon
        }, null, 8, ["class", "name"])) : e.inactiveIcon ? (h(), be(r, {
          key: 2,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.inactiveIcon
        }, null, 8, ["class", "name"])) : (h(), $(
          "span",
          Xw,
          oe(e.index + 1),
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
var $v = ee({
  name: "VarStep",
  components: {
    VarIcon: Ve
  },
  props: Fw,
  setup() {
    var {
      index: e,
      steps: n,
      bindSteps: r
    } = Ww(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = n, s = R(() => a.value === e.value), u = R(() => e.value !== -1 && L(a.value) > e.value), d = {
      index: e
    }, v = () => i(e.value);
    return r(d), {
      n: Gw,
      classes: qw,
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
$v.render = Kw;
const $a = $v;
$a.install = function(e) {
  e.component($a.name, $a);
};
var t$ = $a;
function Zw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Jw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Zw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: Qw
} = ne("steps");
function _w(e, n) {
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
var Tv = ee({
  name: "VarSteps",
  props: Jw,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      bindStep: o
    } = jw(), l = (s) => {
      S(e.onClickStep, s);
    }, i = {
      active: n,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: Qw
    };
  }
});
Tv.render = _w;
const Ta = Tv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var o$ = Ta, xw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: eC
} = ne("style-provider"), nC = ee({
  name: "VarStyleProvider",
  props: xw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => ws(e.tag, {
      class: eC(),
      style: Bs(e.styleVars)
    }, S(r.default));
  }
});
const Pa = nC;
var Do = [];
function St(e) {
  Do.forEach((r) => document.documentElement.style.removeProperty(r)), Do.length = 0;
  var n = Bs(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Do.push(a);
  });
}
St.Component = Pa;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
St.install = function(e) {
  e.component(Pa.name, Pa);
};
var i$ = Pa, rC = {
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
  n: aC,
  classes: tC
} = ne("switch"), oC = (e) => (Er(""), e = e(), Ir(), e), iC = /* @__PURE__ */ oC(() => /* @__PURE__ */ D(
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
)), lC = [iC];
function sC(e, n) {
  var r = ie("var-hover-overlay"), a = ie("var-form-details"), t = De("ripple"), o = De("hover");
  return ke((h(), $(
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
      ), ke((h(), $(
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
            lC,
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
var Pv = ee({
  name: "VarSwitch",
  components: {
    VarFormDetails: en,
    VarHoverOverlay: pn
  },
  directives: {
    Ripple: qe,
    Hover: Un
  },
  props: rC,
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
    } = Pr(), u = () => o(e.rules, e.modelValue), d = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = R(() => {
      var {
        size: C,
        modelValue: V,
        color: T,
        closeColor: k,
        loadingColor: E,
        activeValue: M
      } = e;
      return {
        handle: {
          width: dn(C),
          height: dn(C),
          backgroundColor: V === M ? T : k,
          color: E
        },
        ripple: {
          left: V === M ? dn(C, 0.5) : "-" + dn(C, 0.5),
          color: V === M ? T : k || "#999",
          width: dn(C, 2),
          height: dn(C, 2)
        },
        track: {
          height: dn(C, 0.72),
          width: dn(C, 1.9),
          borderRadius: dn(C, 2 / 3),
          filter: V === M || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === M ? T : k
        },
        switch: {
          height: dn(C, 1.2),
          width: dn(C, 2)
        }
      };
    }), f = R(() => dn(e.size, 0.4)), m = (C) => {
      var {
        onClick: V,
        onChange: T,
        disabled: k,
        loading: E,
        readonly: M,
        modelValue: P,
        activeValue: p,
        inactiveValue: w,
        "onUpdate:modelValue": U
      } = e;
      if (S(V, C), !(k || E || M || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var N = P === p ? w : p;
        S(T, N), S(U, N), d();
      }
    }, y = (C) => {
      e.disabled || r != null && r.disabled.value || s(C);
    }, b = () => {
      S(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, g = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return S(n, g), {
      n: aC,
      classes: tC,
      multiplySizeUnit: dn,
      switchActive: m,
      hovering: i,
      hover: y,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
Pv.render = sC;
const Oa = Pv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var l$ = Oa, uC = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, Ov = Symbol("TABS_BIND_TAB_KEY");
function dC() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = sn(Ov);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function vC() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = ln(Ov);
  return n || On("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Rt,
  classes: fC
} = ne("tab");
function cC(e, n) {
  var r = De("ripple");
  return ke((h(), $(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var Vv = ee({
  name: "VarTab",
  directives: {
    Ripple: qe
  },
  props: uC,
  setup(e) {
    var n = O(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = vC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: y
    } = l, b = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var g = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), C = () => e.disabled ? f.value : g() ? d.value : v.value, V = () => e.disabled ? Rt("$-tab--disabled") : g() ? Rt("$-tab--active") : Rt("$-tab--inactive"), T = (k) => {
      var {
        disabled: E,
        name: M,
        onClick: P
      } = e;
      E || (S(P, M ?? o.value, k), s(b));
    };
    return le(() => e.name, y), le(() => e.disabled, y), {
      n: Rt,
      classes: fC,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: C,
      computeColorClass: V,
      handleClick: T
    };
  }
});
Vv.render = cC;
const Va = Vv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var s$ = Va, mC = {
  name: {
    type: [String, Number]
  }
}, {
  n: pC,
  classes: hC
} = ne("tab-item");
function gC(e, n) {
  var r = ie("var-swipe-item");
  return h(), be(r, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: fe(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Mv = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Kn
  },
  props: mC,
  setup(e) {
    var n = O(!1), r = R(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Xb(), {
      bindLists: o
    } = Kb(), l = (s) => {
      n.value = s;
    }, i = {
      index: a,
      name: r,
      current: R(() => n.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: pC,
      classes: hC,
      current: n
    };
  }
});
Mv.render = gC;
const Ma = Mv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var u$ = Ma, yC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: bC,
  classes: wC
} = ne("table");
function CC(e, n) {
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
var Ev = ee({
  name: "VarTable",
  props: yC,
  setup() {
    return {
      toSizeUnit: ye,
      n: bC,
      classes: wC,
      formatElevation: gn
    };
  }
});
Ev.render = CC;
const Ea = Ev;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var d$ = Ea;
function ms(e) {
  return ["horizontal", "vertical"].includes(e);
}
function SC(e) {
  return ["auto", "always"].includes(e);
}
function kC(e) {
  return ["normal", "reverse"].includes(e);
}
var $C = {
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
    validator: SC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: kC
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: _e(Wt, "cssMode"),
  stickyZIndex: _e(Wt, "zIndex"),
  offsetTop: _e(Wt, "offsetTop"),
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
};
function ps(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function hs(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: TC,
  classes: PC
} = ne("tabs");
function OC(e, n) {
  return h(), be(nt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: fe(() => [D(
      "div",
      Ne({
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
var Iv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Zn
  },
  inheritAttrs: !1,
  props: $C,
  setup(e) {
    var n = O("0px"), r = O("0px"), a = O("0px"), t = O("0px"), o = O(!1), l = O(null), i = R(() => e.active), s = R(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = R(() => e.activeColor), d = R(() => e.inactiveColor), v = R(() => e.disabledColor), f = R(() => e.itemDirection), m = O(null), {
      tabList: y,
      bindTabList: b,
      length: g
    } = dC(), C = (N) => {
      var X, K = (X = N.name.value) != null ? X : N.index.value, {
        active: A,
        onChange: z,
        onClick: F
      } = e;
      S(e["onUpdate:active"], K), S(F, K), K !== A && S(z, K);
    }, V = () => y.find((N) => {
      var {
        name: X
      } = N;
      return e.active === X.value;
    }), T = (N) => y.find((X) => {
      var {
        index: K
      } = X;
      return (N ?? e.active) === K.value;
    }), k = () => {
      if (g.value !== 0) {
        var {
          active: N
        } = e;
        if (an(N)) {
          var X = qa(N, 0, g.value - 1);
          return S(e["onUpdate:active"], X), T(X);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || y.length >= 5;
    }, M = (N) => {
      var {
        element: X
      } = N, K = X.value;
      K && (e.layoutDirection === "horizontal" ? (n.value = K.offsetWidth + "px", a.value = K.offsetLeft + "px") : (r.value = K.offsetHeight + "px", t.value = K.offsetTop + "px"));
    }, P = (N) => {
      var {
        element: X
      } = N;
      if (o.value) {
        var K = l.value, A = X.value;
        if (e.layoutDirection === "horizontal") {
          var z = A.offsetLeft + A.offsetWidth / 2 - K.offsetWidth / 2;
          ht(K, {
            left: z,
            animation: zo
          });
        } else {
          var F = A.offsetTop + A.offsetHeight / 2 - K.offsetHeight / 2;
          ht(K, {
            top: F,
            animation: zo
          });
        }
      }
    }, p = () => {
      var N = V() || T() || k();
      !N || N.disabled.value || (E(), M(N), P(N));
    }, w = /* @__PURE__ */ function() {
      var N = hs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), U = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: p,
      onTabClick: C
    };
    return b(U), le(() => g.value, /* @__PURE__ */ hs(function* () {
      yield An(), p();
    })), le(() => e.active, p), le(() => e.scrollable, p), Mr(p), Pt(p), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Re,
      toSizeUnit: ye,
      n: TC,
      classes: PC,
      resize: p,
      resizeSticky: w,
      formatElevation: gn
    };
  }
});
Iv.render = OC;
const Ia = Iv;
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
var v$ = Ia, VC = {
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
function gs(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function MC(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
} = ne("tabs-items");
function IC(e, n) {
  var r = ie("var-swipe");
  return h(), be(r, {
    class: c(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: fe(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
var Bv = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: Xn
  },
  props: VC,
  setup(e) {
    var n = O(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = qb(), o = (v) => r.find((f) => {
      var {
        name: m
      } = f;
      return v === m.value;
    }), l = (v) => r.find((f) => {
      var {
        index: m
      } = f;
      return v === m.value;
    }), i = (v) => o(v) || l(v), s = (v) => {
      var f, m = i(v);
      m && (r.forEach((y) => {
        var {
          setCurrent: b
        } = y;
        return b(!1);
      }), m.setCurrent(!0), (f = n.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = r.find((b) => {
        var {
          index: g
        } = b;
        return g.value === v;
      }), y = (f = m.name.value) != null ? f : m.index.value;
      S(e["onUpdate:active"], y);
    }, d = () => n.value;
    return a({}), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ MC(function* () {
      yield An(), s(e.active);
    })), {
      swipe: n,
      n: EC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Bv.render = IC;
const Ba = Bv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var f$ = Ba;
const BC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, NC = {
  "--badge-default-color": "#555"
}, DC = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, AC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, zC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, LC = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, RC = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, UC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, YC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, HC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, FC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, jC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, WC = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, GC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, qC = {
  "--popup-content-background-color": "#1e1e1e"
}, XC = {
  "--pull-refresh-background": "#303030"
}, KC = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, ZC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, JC = {
  "--select-scroller-background": "#303030"
}, QC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, _C = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, xC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, eS = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, nS = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, rS = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, aS = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, tS = {
  "--tabs-background": "#1e1e1e"
}, oS = {
  "--app-bar-color": "#272727"
}, iS = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, lS = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, sS = {
  "--menu-background-color": "#272727"
}, uS = {
  "--breadcrumb-inactive-color": "#aaa"
}, dS = {
  "--paper-background": "#303030"
}, vS = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, fS = {
  "--link-default-color": "#fff"
}, cS = {
  "--progress-label-color": "#fff"
}, mS = {
  "--options-text-color": "#fff"
}, pS = {
  "--countdown-text-color": "#fff"
};
function Ti() {
  return Ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ti.apply(this, arguments);
}
const hS = Ti({
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
}, DC, zC, AC, rS, YC, QC, tS, eS, qC, HC, BC, RC, NC, aS, UC, XC, xC, _C, WC, nS, jC, JC, KC, LC, FC, GC, oS, iS, lS, sS, ZC, uS, dS, vS, fS, cS, mS, pS);
var gS = {
  dark: hS
}, c$ = null;
const Pi = gS;
var Sn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], vn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ys = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function yS(e) {
  return ["ampm", "24hr"].includes(e);
}
var bS = {
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
    validator: yS
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
}, Nv = (e, n) => e === "24hr" || n === "am", xi = (e, n, r) => {
  var a = Sn.findIndex((o) => L(o) === L(r)), t = Nv(e, n) ? r : vn[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, mn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, Dv = (e) => {
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
  } = xi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: y,
      minute: b
    } = mn(i);
    f = y === v && a > b;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: C
    } = mn(s);
    f = g === v && a < C;
  }
  if (i && s) {
    var {
      hour: V,
      minute: T
    } = mn(i), {
      hour: k,
      minute: E
    } = mn(s);
    f = k === v && a < E || V === v && a > T;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Av = (e) => {
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
  } = xi(t, o, l), m = !1, y = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: g,
      second: C
    } = mn(s);
    m = b === f && g < i || g === i && a > C;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: T,
      second: k
    } = mn(u);
    m = V === f && T > i || T === i && a > k;
  }
  if (s && u) {
    var {
      hour: E,
      minute: M,
      second: P
    } = mn(s), {
      hour: p,
      minute: w,
      second: U
    } = mn(u);
    m = E === f && M < i || p === f && w > i || E === f && M === i && a > P || p === f && w === i && a < U;
  }
  return (n = e.allowedTime) != null && n.seconds && (y = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || y;
}, {
  n: wS,
  classes: CS
} = ne("time-picker");
function SS(e, n) {
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
      Ye(e.timeScales, (r, a) => (h(), $(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: q(e.getStyle(a, r, !1))
        },
        oe(r),
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
        Ye(e.hours24, (r, a) => (h(), $(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: q(e.getStyle(a, r, !0))
          },
          oe(r),
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
var zv = ee({
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
    } = n, a = O(null), t = O([]), o = O([]), l = R(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? Sn : ys), u = (g, C) => {
      var V;
      g = (V = g) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var T = e.type === "minute" ? Dv : Av, k = {
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
      var g = e.isInner ? vn[i.value] : s.value[i.value];
      return s.value === ys ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, C) => C ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (Nv(e.format, e.ampm))
          return t.value.includes(g);
        var C = Sn.findIndex((V) => V === g);
        return o.value.includes(C);
      }
      return u(g, !0);
    }, m = (g, C, V) => {
      var T = 2 * Math.PI / 12 * g - Math.PI / 2, k = 50 * (1 + Math.cos(T)), E = 50 * (1 + Math.sin(T)), M = () => v(g, V) ? f(C) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: P,
        color: p
      } = M();
      return {
        left: k + "%",
        top: E + "%",
        backgroundColor: P,
        color: p
      };
    }, y = () => {
      var {
        width: g,
        height: C
      } = Je(a.value);
      return {
        width: g,
        height: C
      };
    }, b = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? Sn : vn;
        return Aa(g[i.value], 2, "0");
      }
    };
    return le([i, () => e.isInner], (g, C) => {
      var [V, T] = g, [k, E] = C, M = V === k && T === E;
      if (!(M || e.type !== "hour" || i.value === void 0)) {
        var P = T ? vn[i.value] : b(), p = e.useSeconds ? ":" + e.time.second : "", w = P + ":" + e.time.minute + p;
        e.preventNextUpdate || r("update", w), r("change-prevent-update");
      }
    }), le(() => e.rad, (g, C) => {
      if (!(e.type === "hour" || g === void 0 || C === void 0)) {
        var V = g / 6 >= 0 ? g / 6 : g / 6 + 60, T = C / 6 >= 0 ? C / 6 : C / 6 + 60;
        if (V !== T) {
          var k, {
            hourStr: E
          } = xi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var M = ue().minute(V).format("mm"), P = e.useSeconds ? ":" + e.time.second : "";
            k = E + ":" + M + P;
          }
          if (e.type === "second") {
            var p = ue().second(V).format("ss"), w = e.useSeconds ? ":" + p : "";
            k = E + ":" + e.time.minute + w;
          }
          r("update", k);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [C, V, T] = g;
      if (t.value = [], C && !V) {
        var {
          hour: k
        } = mn(C), E = Sn.filter((W) => L(W) > k), M = vn.filter((W) => L(W) > k);
        t.value = [...E, ...M];
      }
      if (!C && V) {
        var {
          hour: P
        } = mn(V), p = Sn.filter((W) => L(W) < P), w = vn.filter((W) => L(W) < P);
        t.value = [...p, ...w];
      }
      if (C && V) {
        var {
          hour: U
        } = mn(C), {
          hour: N
        } = mn(V), X = Sn.filter((W) => L(W) < N || L(W) > U), K = vn.filter((W) => L(W) < N || L(W) > U);
        t.value = [...X, ...K];
      }
      if (T != null && T.hours) {
        var {
          hours: A
        } = T, z = Sn.filter((W) => !A(L(W))), F = vn.filter((W) => !A(L(W)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...z, ...F])];
      }
      o.value = t.value.map((W) => vn.findIndex((ae) => W === ae)).filter((W) => W >= 0);
    }, {
      immediate: !0
    }), {
      n: wS,
      classes: CS,
      hours24: vn,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: y,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
zv.render = SS;
const kS = zv;
var {
  n: $S,
  classes: TS
} = ne("time-picker"), PS = (e) => (Er(""), e = e(), Ir(), e), OS = /* @__PURE__ */ PS(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), VS = {
  key: 0
};
function MS(e, n) {
  var r = ie("clock");
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
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          oe(e.time.hour),
          3
          /* TEXT, CLASS */
        ), OS, D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          oe(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), $("span", VS, ":")) : x("v-if", !0), e.useSeconds ? (h(), $(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          oe(e.time.second),
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
        [Q(Re, {
          name: e.n() + "-panel-fade"
        }, {
          default: fe(() => [(h(), be(r, {
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
var Lv = ee({
  name: "VarTimePicker",
  components: {
    Clock: kS
  },
  props: bS,
  setup(e) {
    var n = O(null), r = O(null), a = O(null), t = O(!1), o = O(!1), l = O(!1), i = O(!1), s = O(!1), u = O(void 0), d = O(0), v = O(0), f = O("hour"), m = O("am"), y = O(!1), b = O(!1), g = O({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = Le({
      x: 0,
      y: 0
    }), V = Le({
      x: [],
      y: []
    }), T = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), k = (B) => {
      S(e["onUpdate:modelValue"], B), S(e.onChange, B);
    }, E = (B) => B * 57.29577951308232, M = (B) => {
      i.value = !1, b.value = !1, f.value = B;
    }, P = (B) => {
      var {
        disableHour: G
      } = a.value, re = Sn.findIndex((_) => L(_) === L(g.value.hour)), H = B === "am" ? Sn : vn, Z = [...H.slice(re), ...H.slice(0, re)];
      return Z.find((_, ve) => (o.value = ve !== 0, !G.includes(_)));
    }, p = (B) => {
      if (!e.readonly) {
        m.value = B;
        var G = P(B);
        if (G) {
          var re = e.useSeconds ? ":" + g.value.second : "", H = Aa(G, 2, "0") + ":" + g.value.minute + re;
          k(H);
        }
      }
    }, w = (B, G) => {
      var re = B >= V.x[0] && B <= V.x[1], H = G >= V.y[0] && G <= V.y[1];
      return re && H;
    }, U = (B) => {
      var G = e.format === "24hr" ? "HH" : "hh", {
        hour: re,
        minute: H,
        second: Z
      } = mn(B);
      return {
        hour: ue().hour(re).format(G),
        minute: ue().minute(H).format("mm"),
        second: ue().second(Z).format("ss")
      };
    }, N = (B) => {
      var G = B / 30;
      return G >= 0 ? G : G + 12;
    }, X = () => {
      var {
        width: B,
        height: G
      } = a.value.getSize(), re = C.x - B / 2 - 8, H = C.x + B / 2 + 8, Z = C.y - G / 2 - 8, _ = C.y + G / 2 + 8;
      return {
        rangeXMin: re,
        rangeXMax: H,
        rangeYMin: Z,
        rangeYMax: _
      };
    }, K = (B, G, re) => {
      var {
        disableHour: H
      } = a.value;
      l.value = w(B, G);
      var Z = Math.round(re / 30) * 30 + 90, _ = N(Z), ve = t.value ? Sn[_] : vn[_];
      if (H.includes(ve) || (t.value = e.format === "24hr" ? w(B, G) : !1), t.value === l.value) {
        var Ce = t.value || m.value === "pm" ? vn[_] : Sn[_];
        y.value = H.includes(Ce), !y.value && (u.value = Z, i.value = !0);
      }
    }, A = (B) => {
      var {
        disableHour: G
      } = a.value, re = Math.round(B / 6) * 6 + 90, H = re / 6 >= 0 ? re / 6 : re / 6 + 60, Z = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: G,
        allowedTime: e.allowedTime
      };
      b.value = Dv(Z), !b.value && (d.value = re, s.value = !0);
    }, z = (B) => {
      var {
        disableHour: G
      } = a.value, re = Math.round(B / 6) * 6 + 90, H = re / 6 >= 0 ? re / 6 : re / 6 + 60, Z = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: G,
        allowedTime: e.allowedTime
      };
      Av(Z) || (v.value = re);
    }, F = () => {
      var {
        left: B,
        top: G,
        width: re,
        height: H
      } = Je(n.value);
      if (C.x = B + re / 2, C.y = G + H / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Z,
          rangeXMax: _,
          rangeYMin: ve,
          rangeYMax: Ce
        } = X();
        V.x = [Z, _], V.y = [ve, Ce];
      }
    }, W = (B) => {
      if (B.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: G,
          clientY: re
        } = B.touches[0], H = G - C.x, Z = re - C.y, _ = Math.round(E(Math.atan2(Z, H)));
        f.value === "hour" ? K(G, re, _) : f.value === "minute" ? A(_) : z(_);
      }
    }, ae = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, I = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (B) => {
      if (B) {
        var {
          hour: G,
          minute: re,
          second: H
        } = mn(B), Z = ue().hour(G).format("hh"), _ = ue().hour(G).format("HH"), ve = ue().minute(re).format("mm"), Ce = ue().second(H).format("ss");
        u.value = (Z === "12" ? 0 : L(Z)) * 30, d.value = L(ve) * 6, v.value = L(Ce) * 6, g.value = U(B), e.format !== "24hr" && (m.value = Aa("" + G, 2, "0") === _ && vn.includes(_) ? "pm" : "am"), t.value = e.format === "24hr" && vn.includes(_);
      }
    }, {
      immediate: !0
    }), {
      n: $S,
      classes: TS,
      getRad: T,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: W,
      checkPanel: M,
      checkAmpm: p,
      end: ae,
      update: k,
      changePreventUpdate: I,
      formatElevation: gn
    };
  }
});
Lv.render = MS;
const Na = Lv;
Na.install = function(e) {
  e.component(Na.name, Na);
};
var m$ = Na, ES = {
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
function bs(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ao(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: IS,
  classes: BS
} = ne("uploader"), NS = 0, DS = ["onClick"], AS = ["onClick"], zS = ["src", "alt"], LS = ["multiple", "accept", "capture", "disabled"], RS = ["src"];
function US(e, n) {
  var r = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = ie("var-popup"), l = De("ripple"), i = De("hover");
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
        Ye(e.files, (s) => ke((h(), $("div", {
          class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
          key: s.id,
          onClick: (u) => e.preview(s)
        }, [D(
          "div",
          {
            class: c(e.n("file-name"))
          },
          oe(s.name || s.url),
          3
          /* TEXT, CLASS */
        ), e.removable ? (h(), $("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: Pn((u) => e.handleRemove(s), ["stop"])
        }, [Q(r, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, AS)) : x("v-if", !0), s.cover ? (h(), $("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: q({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, zS)) : x("v-if", !0), D(
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
        )], 10, DS)), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? ke((h(), $(
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
        }, null, 42, LS), j(e.$slots, "default", {}, () => [Q(r, {
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
      fn: fe(() => [j(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]), Q(o, {
      class: c(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      show: e.showPreview,
      "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
      onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
    }, {
      default: fe(() => {
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
        }, null, 10, RS)) : x("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var Rv = ee({
  name: "VarUploader",
  directives: {
    Ripple: qe,
    Hover: Un
  },
  components: {
    VarIcon: Ve,
    VarPopup: kn,
    VarFormDetails: en,
    VarHoverOverlay: pn
  },
  props: ES,
  setup(e) {
    var n = O(null), r = O(!1), a = O(null), t = R(() => {
      var {
        maxlength: W,
        modelValue: {
          length: ae
        }
      } = e;
      return an(W) ? ae + " / " + W : "";
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
    } = Pr(), m = R(() => {
      var {
        modelValue: W,
        hideList: ae
      } = e;
      return ae ? [] : W;
    }), y = (W) => {
      var {
        disabled: ae,
        readonly: I,
        previewed: B
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || ae || I || !B)) {
        var {
          url: G
        } = W;
        if (He(G) && tl(G)) {
          Ln(G);
          return;
        }
        He(G) && ol(G) && (a.value = W, r.value = !0);
      }
    }, b = (W) => ({
      id: NS++,
      url: "",
      cover: "",
      name: W.name,
      file: W,
      progress: 0
    }), g = (W) => {
      var ae = W.target, {
        files: I
      } = ae;
      return Array.from(I);
    }, C = (W) => new Promise((ae) => {
      if (!W.file.type.startsWith("image")) {
        ae(W);
        return;
      }
      var I = new FileReader();
      I.onload = () => {
        var B = I.result;
        W.cover = B, W.url = B, ae(W);
      }, I.readAsDataURL(W.file);
    }), V = (W) => W.map(C), T = (W) => {
      var {
        onBeforeRead: ae
      } = e;
      return W.map((I) => new Promise((B) => {
        ae || B({
          valid: !0,
          varFile: I
        });
        var G = Ut(S(ae, Le(I)));
        Promise.all(G).then((re) => {
          B({
            valid: re.every(Boolean),
            varFile: I
          });
        });
      }));
    }, k = /* @__PURE__ */ function() {
      var W = Ao(function* (ae) {
        var {
          maxsize: I,
          maxlength: B,
          modelValue: G,
          onOversize: re,
          onAfterRead: H,
          onBeforeFilter: Z,
          readonly: _,
          disabled: ve
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ve || _)) {
          var Ce = (je) => je.filter((We) => We.file.size > L(I) ? (S(re, Le(We)), !1) : !0), Ee = (je) => {
            var We = Math.min(je.length, L(B) - G.length);
            return je.slice(0, We);
          }, te = /* @__PURE__ */ function() {
            var je = Ao(function* (We) {
              if (!Z)
                return We;
              var se = Ut(Z);
              for (var we of se)
                We = yield we(We);
              return We;
            });
            return function(se) {
              return je.apply(this, arguments);
            };
          }(), de = g(ae), me = de.map(b);
          me = yield te(me), me = I != null ? Ce(me) : me, me = B != null ? Ee(me) : me;
          var Pe = yield Promise.all(V(me)), Fe = yield Promise.all(T(Pe)), Xe = Fe.filter((je) => {
            var {
              valid: We
            } = je;
            return We;
          }).map((je) => {
            var {
              varFile: We
            } = je;
            return We;
          });
          S(e["onUpdate:modelValue"], [...G, ...Xe]), ae.target.value = "", Xe.forEach((je) => S(H, Le(je)));
        }
      });
      return function(I) {
        return W.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var W = Ao(function* (ae) {
        var {
          disabled: I,
          readonly: B,
          modelValue: G,
          onBeforeRemove: re,
          onRemove: H
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || I || B)) {
          if (re) {
            var Z = Ut(S(re, Le(ae)));
            if ((yield Promise.all(Z)).some((ve) => !ve))
              return;
          }
          var _ = G.filter((ve) => ve !== ae);
          S(H, Le(ae)), X("onRemove"), S(e["onUpdate:modelValue"], _);
        }
      });
      return function(I) {
        return W.apply(this, arguments);
      };
    }(), M = () => e.modelValue.filter((W) => W.state === "success"), P = () => e.modelValue.filter((W) => W.state === "error"), p = () => e.modelValue.filter((W) => W.state === "loading"), w = () => {
      n.value.click();
    }, U = () => {
      a.value = null, r.value = !1, Ln.close();
    }, N = {
      getSuccess: M,
      getError: P,
      getLoading: p
    }, X = (W) => {
      ze(() => {
        var {
          validateTrigger: ae,
          rules: I,
          modelValue: B
        } = e;
        s(ae, W, I, B, N);
      });
    }, K = !1, A = () => u(e.rules, e.modelValue, N), z = () => {
      K = !0, S(e["onUpdate:modelValue"], []), d();
    }, F = {
      validate: A,
      resetValidation: d,
      reset: z
    };
    return S(l, F), le(() => e.modelValue, () => {
      !K && X("onChange"), K = !1;
    }, {
      deep: !0
    }), {
      n: IS,
      classes: BS,
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
      toNumber: L,
      handleHovering: f,
      isHTMLSupportVideo: ol,
      isHTMLSupportImage: tl,
      preview: y,
      handleChange: k,
      handleRemove: E,
      getSuccess: M,
      getError: P,
      getLoading: p,
      validate: A,
      resetValidation: d,
      reset: z,
      chooseFile: w,
      closePreview: U,
      toSizeUnit: ye
    };
  }
});
Rv.render = US;
const Da = Rv;
Da.install = function(e) {
  e.component(Da.name, Da);
};
var p$ = Da;
const YS = "2.13.0";
function HS(e) {
  _n.install && e.use(_n), Ar.install && e.use(Ar), zr.install && e.use(zr), Lr.install && e.use(Lr), Rr.install && e.use(Rr), mr.install && e.use(mr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), Hr.install && e.use(Hr), Fr.install && e.use(Fr), rn.install && e.use(rn), jr.install && e.use(jr), Wr.install && e.use(Wr), pr.install && e.use(pr), hr.install && e.use(hr), Gr.install && e.use(Gr), gr.install && e.use(gr), qr.install && e.use(qr), Xr.install && e.use(Xr), Kr.install && e.use(Kr), bn.install && e.use(bn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), _r.install && e.use(_r), xn.install && e.use(xn), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), qn.install && e.use(qn), en.install && e.use(en), Un.install && e.use(Un), pn.install && e.use(pn), Ve.install && e.use(Ve), aa.install && e.use(aa), Ln.install && e.use(Ln), ta.install && e.use(ta), oa.install && e.use(oa), Sr.install && e.use(Sr), gt.install && e.use(gt), ia.install && e.use(ia), la.install && e.use(la), Rn.install && e.use(Rn), bi.install && e.use(bi), jo.install && e.use(jo), Jn.install && e.use(Jn), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), Ra.install && e.use(Ra), kn.install && e.use(kn), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), qe.install && e.use(qe), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), Ca.install && e.use(Ca), $i.install && e.use($i), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), Zn.install && e.use(Zn), St.install && e.use(St), Xn.install && e.use(Xn), Kn.install && e.use(Kn), Oa.install && e.use(Oa), Va.install && e.use(Va), Ma.install && e.use(Ma), Ea.install && e.use(Ea), Ia.install && e.use(Ia), Ba.install && e.use(Ba), Pi.install && e.use(Pi), Na.install && e.use(Na), wr.install && e.use(wr), Da.install && e.use(Da);
}
const h$ = {
  version: YS,
  install: HS,
  ActionSheet: _n,
  AppBar: Ar,
  Avatar: zr,
  AvatarGroup: Lr,
  BackTop: Rr,
  Badge: mr,
  BottomNavigation: Ur,
  BottomNavigationItem: Yr,
  Breadcrumb: Hr,
  Breadcrumbs: Fr,
  Button: rn,
  ButtonGroup: jr,
  Card: Wr,
  Cell: pr,
  Checkbox: hr,
  CheckboxGroup: Gr,
  Chip: gr,
  Col: qr,
  Collapse: Xr,
  CollapseItem: Kr,
  Context: bn,
  Countdown: Zr,
  Counter: Jr,
  DatePicker: _r,
  Dialog: xn,
  Divider: xr,
  Drag: ea,
  Ellipsis: na,
  Fab: ra,
  Form: qn,
  FormDetails: en,
  Hover: Un,
  HoverOverlay: pn,
  Icon: Ve,
  Image: aa,
  ImagePreview: Ln,
  IndexAnchor: ta,
  IndexBar: oa,
  Input: Sr,
  Lazy: gt,
  Link: ia,
  List: la,
  Loading: Rn,
  LoadingBar: bi,
  Locale: jo,
  Menu: Jn,
  Option: sa,
  Overlay: ua,
  Pagination: da,
  Paper: va,
  Picker: Ra,
  Popup: kn,
  Progress: fa,
  PullRefresh: ca,
  Radio: ma,
  RadioGroup: pa,
  Rate: ha,
  Result: ga,
  Ripple: qe,
  Row: ya,
  Select: ba,
  Skeleton: wa,
  Slider: Ca,
  Snackbar: $i,
  Space: ka,
  Step: $a,
  Steps: Ta,
  Sticky: Zn,
  StyleProvider: St,
  Swipe: Xn,
  SwipeItem: Kn,
  Switch: Oa,
  Tab: Va,
  TabItem: Ma,
  Table: Ea,
  Tabs: Ia,
  TabsItems: Ba,
  Themes: Pi,
  TimePicker: Na,
  Tooltip: wr,
  Uploader: Da
};
export {
  _n as ActionSheet,
  Ar as AppBar,
  zr as Avatar,
  Lr as AvatarGroup,
  Rr as BackTop,
  mr as Badge,
  Ur as BottomNavigation,
  Yr as BottomNavigationItem,
  Hr as Breadcrumb,
  Fr as Breadcrumbs,
  rn as Button,
  jr as ButtonGroup,
  Wr as Card,
  pr as Cell,
  hr as Checkbox,
  Gr as CheckboxGroup,
  gr as Chip,
  qr as Col,
  Xr as Collapse,
  Kr as CollapseItem,
  bn as Context,
  Zr as Countdown,
  Jr as Counter,
  _r as DatePicker,
  xn as Dialog,
  xr as Divider,
  ea as Drag,
  na as Ellipsis,
  ra as Fab,
  qn as Form,
  en as FormDetails,
  Un as Hover,
  pn as HoverOverlay,
  Ve as Icon,
  aa as Image,
  Ln as ImagePreview,
  ta as IndexAnchor,
  oa as IndexBar,
  Sr as Input,
  gt as Lazy,
  ia as Link,
  la as List,
  Rn as Loading,
  bi as LoadingBar,
  jo as Locale,
  Jn as Menu,
  sa as Option,
  ua as Overlay,
  qo as PIXEL,
  da as Pagination,
  va as Paper,
  Ra as Picker,
  kn as Popup,
  fa as Progress,
  ca as PullRefresh,
  ma as Radio,
  pa as RadioGroup,
  ha as Rate,
  ga as Result,
  qe as Ripple,
  ya as Row,
  Qi as SNACKBAR_TYPE,
  ba as Select,
  wa as Skeleton,
  Ca as Slider,
  $i as Snackbar,
  ka as Space,
  $a as Step,
  Ta as Steps,
  Zn as Sticky,
  St as StyleProvider,
  Xn as Swipe,
  Kn as SwipeItem,
  Oa as Switch,
  Va as Tab,
  Ma as TabItem,
  Ea as Table,
  Ia as Tabs,
  Ba as TabsItems,
  Pi as Themes,
  Na as TimePicker,
  wr as Tooltip,
  Da as Uploader,
  KS as _ActionSheetComponent,
  ZS as _AppBarComponent,
  QS as _AvatarComponent,
  _S as _AvatarGroupComponent,
  ak as _BackTopComponent,
  tk as _BadgeComponent,
  ok as _BottomNavigationComponent,
  ik as _BottomNavigationItemComponent,
  lk as _BreadcrumbComponent,
  sk as _BreadcrumbsComponent,
  rk as _ButtonComponent,
  uk as _ButtonGroupComponent,
  dk as _CardComponent,
  vk as _CellComponent,
  ck as _CheckboxComponent,
  mk as _CheckboxGroupComponent,
  pk as _ChipComponent,
  hk as _ColComponent,
  gk as _CollapseComponent,
  yk as _CollapseItemComponent,
  jS as _ContextComponent,
  bk as _CountdownComponent,
  wk as _CounterComponent,
  Ck as _DatePickerComponent,
  Sk as _DialogComponent,
  kk as _DividerComponent,
  $k as _DragComponent,
  Pk as _EllipsisComponent,
  Ok as _FabComponent,
  Vk as _FormComponent,
  fk as _FormDetailsComponent,
  nk as _HoverComponent,
  ek as _HoverOverlayComponent,
  qS as _IconComponent,
  Mk as _ImageComponent,
  Bk as _ImagePreviewComponent,
  Dk as _IndexAnchorComponent,
  Ak as _IndexBarComponent,
  zk as _InputComponent,
  JS as _LazyComponent,
  Lk as _LinkComponent,
  Rk as _ListComponent,
  Uk as _LoadingBarComponent,
  xS as _LoadingComponent,
  XS as _LocaleComponent,
  Yk as _MenuComponent,
  Hk as _OptionComponent,
  Fk as _OverlayComponent,
  jk as _PaginationComponent,
  Wk as _PaperComponent,
  Gk as _PickerComponent,
  GS as _PopupComponent,
  qk as _ProgressComponent,
  Xk as _PullRefreshComponent,
  Kk as _RadioComponent,
  Zk as _RadioGroupComponent,
  Jk as _RateComponent,
  Qk as _ResultComponent,
  WS as _RippleComponent,
  _k as _RowComponent,
  xk as _SelectComponent,
  e$ as _SkeletonComponent,
  n$ as _SliderComponent,
  r$ as _SnackbarComponent,
  a$ as _SpaceComponent,
  t$ as _StepComponent,
  o$ as _StepsComponent,
  Nk as _StickyComponent,
  i$ as _StyleProviderComponent,
  Ek as _SwipeComponent,
  Ik as _SwipeItemComponent,
  l$ as _SwitchComponent,
  s$ as _TabComponent,
  u$ as _TabItemComponent,
  d$ as _TableComponent,
  v$ as _TabsComponent,
  f$ as _TabsItemsComponent,
  c$ as _ThemesComponent,
  m$ as _TimePickerComponent,
  Tk as _TooltipComponent,
  p$ as _UploaderComponent,
  If as actionSheetProps,
  Ni as add,
  Rf as appBarProps,
  uc as avatarGroupProps,
  ac as avatarProps,
  Yc as backTopProps,
  qc as badgeProps,
  rm as bottomNavigationItemProps,
  Jc as bottomNavigationProps,
  sm as breadcrumbProps,
  mm as breadcrumbsProps,
  Nc as buttonProps,
  Tm as cardProps,
  Im as cellProps,
  Km as checkboxGroupProps,
  Ym as checkboxProps,
  ep as chipProps,
  ip as colProps,
  hp as collapseItemProps,
  fp as collapseProps,
  wp as countdownProps,
  hh as counterProps,
  Lh as datePickerProps,
  h$ as default,
  Ke as defaultLazyOptions,
  eg as dialogProps,
  og as dividerProps,
  ug as dragProps,
  Ws as enUS,
  Am as formDetailsProps,
  Ly as formProps,
  Fs as iconProps,
  Zs as imageCache,
  tb as imagePreviewProps,
  Fy as imageProps,
  gb as indexAnchorProps,
  Cb as indexBarProps,
  Bb as inputProps,
  HS as install,
  Hb as linkProps,
  Gb as listProps,
  e0 as loadingBarProps,
  dr as loadingProps,
  v0 as menuProps,
  qs as merge,
  g0 as optionProps,
  C0 as overlayProps,
  Qe as pack,
  Gs as packs,
  k0 as paginationProps,
  V0 as paperProps,
  B0 as pickerProps,
  Ot as popupProps,
  j0 as progressProps,
  J0 as pullRefreshProps,
  i1 as radioGroupProps,
  x0 as radioProps,
  d1 as rateProps,
  m1 as resultProps,
  ew as rowProps,
  ow as selectProps,
  dw as skeletonProps,
  pw as sliderProps,
  hv as snackbarProps,
  Uw as spaceProps,
  Fw as stepProps,
  Jw as stepsProps,
  Wt as stickyProps,
  xw as styleProviderProps,
  Td as swipeProps,
  rC as switchProps,
  mC as tabItemProps,
  uC as tabProps,
  yC as tableProps,
  VC as tabsItemsProps,
  $C as tabsProps,
  bS as timePickerProps,
  Sy as tooltipProps,
  ES as uploaderProps,
  Di as use,
  Pr as useHoverOverlay,
  Bi as useLocale,
  YS as version,
  Ii as zhCN
};
