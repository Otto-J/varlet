import { reactive as ze, onMounted as no, nextTick as Ae, onActivated as Vr, isRef as Uv, watch as le, onBeforeUnmount as ro, onDeactivated as xa, unref as ut, onUnmounted as ao, inject as Hv, getCurrentInstance as et, computed as D, provide as Fv, isVNode as kt, ref as O, Comment as Yv, Fragment as Me, createApp as jv, h as bs, onBeforeMount as Wv, defineComponent as ee, createVNode as Q, Teleport as Mr, Transition as Le, withDirectives as ke, vShow as Qn, mergeProps as Ne, openBlock as h, createBlock as be, resolveDynamicComponent as nt, normalizeClass as c, normalizeStyle as q, resolveComponent as ie, resolveDirective as De, withCtx as fe, createElementVNode as N, renderSlot as Y, toDisplayString as te, createElementBlock as k, renderList as Ue, createCommentVNode as x, onUpdated as $t, createTextVNode as Se, pushScopeId as La, popScopeId as Ra, withModifiers as Pn, normalizeProps as Tt, guardReactiveProps as to, vModelText as Gv, toRefs as qv, createSlots as ws, withKeys as nl, toRaw as rl, TransitionGroup as Xv } from "vue";
var Cs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, NS = ze(Cs);
const bn = ze(Cs), He = (e) => typeof e == "string", Ao = (e) => typeof e == "boolean", dn = (e) => typeof e == "number", Oi = (e) => Object.prototype.toString.call(e) === "[object Object]", Kv = (e) => typeof e == "object" && e !== null, rt = (e) => typeof e == "function", Oe = (e) => Array.isArray(e), Zv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Yn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Vi = (e) => e === window, A = (e) => e == null ? 0 : He(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ao(e) ? Number(e) : e, Wt = (e, n) => {
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
}, at = () => typeof window < "u", al = (e) => [...new Set(e)], Ss = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Jv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Qv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Rt = (e) => Oe(e) ? e : [e], oo = (e, n, r) => Math.min(r, Math.max(n, e)), _v = (e, n) => oo(e, 0, n.length - 1);
var tl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ol = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), xv = (e) => {
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
      this.has(r) && Wt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, zo = (e) => e, il = (e) => Math.pow(e, 3), ks = (e) => e < 0.5 ? il(e * 2) / 2 : 1 - il((1 - e) * 2) / 2, io = (e, n) => e ?? n, $s = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Na = function(e, n, r) {
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
function rn(e) {
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
function ef(e) {
  var {
    left: n
  } = rn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function sl(e) {
  var {
    top: n
  } = rn(e);
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
function nf(e) {
  var {
    top: n,
    bottom: r,
    left: a,
    right: t
  } = rn(e), {
    width: o,
    height: l
  } = rn(window), i = a <= o && t >= 0, s = n <= l && r >= 0;
  return i && s;
}
function Po(e) {
  var {
    transform: n
  } = tt(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function kr(e) {
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
function rf(e) {
  for (var n = [], r = e; !Vi(r); )
    r = kr(r), n.push(r);
  return n;
}
function Ts(e, n) {
  if (He(e)) {
    var r = document.querySelector(e);
    return r || On(n, "target element cannot found"), r;
  }
  if (Kv(e))
    return e;
  On(n, 'type of prop "target" should be a selector or an element object');
}
function af() {
  var {
    width: e,
    height: n
  } = rn(window);
  return {
    vw: e,
    vh: n,
    vMin: Math.min(e, n),
    vMax: Math.max(e, n)
  };
}
var Ps = (e) => He(e) && e.endsWith("rem"), tf = (e) => He(e) && e.endsWith("em") && !e.endsWith("rem"), of = (e) => He(e) && e.endsWith("px") || dn(e), lf = (e) => He(e) && e.endsWith("%"), Os = (e) => He(e) && e.endsWith("vw"), Vs = (e) => He(e) && e.endsWith("vh"), Ms = (e) => He(e) && e.endsWith("vmin"), Es = (e) => He(e) && e.endsWith("vmax"), sf = (e) => He(e) && e.startsWith("calc("), uf = (e) => He(e) && e.startsWith("var("), Ge = (e) => {
  if (dn(e))
    return e;
  if (of(e))
    return +e.replace("px", "");
  if (!at())
    return 0;
  var {
    vw: n,
    vh: r,
    vMin: a,
    vMax: t
  } = af();
  if (Os(e))
    return +e.replace("vw", "") * n / 100;
  if (Vs(e))
    return +e.replace("vh", "") * r / 100;
  if (Ms(e))
    return +e.replace("vmin", "") * a / 100;
  if (Es(e))
    return +e.replace("vmax", "") * t / 100;
  if (Ps(e)) {
    var o = +e.replace("rem", ""), l = tt(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return He(e) ? A(e) : 0;
}, ye = (e) => {
  if (e != null)
    return lf(e) || Os(e) || Vs(e) || tf(e) || Ps(e) || sf(e) || uf(e) || Ms(e) || Es(e) ? e : Ge(e) + "px";
}, sn = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ye(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function wn(e) {
  var n = $s();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function ul(e) {
  var n = $s();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function lo(e) {
  wn(() => {
    wn(e);
  });
}
function zn() {
  return new Promise((e) => {
    wn(() => {
      wn(e);
    });
  });
}
function df() {
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
function Is(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Jv(a);
    return n[o] = t, n;
  }, {});
}
function vf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Gt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function vn(e) {
  let n = !1;
  no(() => {
    e(), Ae(() => {
      n = !0;
    });
  }), Vr(() => {
    n && e();
  });
}
function $r(e, n, r, a = {}) {
  if (!at())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => rt(m) ? m() : ut(m), u = (m) => {
    if (l || i)
      return;
    const g = s(m);
    g && (g.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const g = s(m);
    g && (g.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let v;
  Uv(e) && (v = le(() => e.value, (m, g) => {
    d(g), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return vn(() => {
    u(e);
  }), ro(() => {
    d(e);
  }), xa(() => {
    d(e);
  }), f;
}
function Bs(e, n, r) {
  if (!at())
    return;
  $r(document, n, (t) => {
    const o = rt(e) ? e() : ut(e);
    o && !o.contains(t.target) && r(t);
  });
}
function so(e) {
  ao(() => {
    e();
  }), xa(() => {
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
  const n = et();
  return e in n.provides;
}
function tn(e) {
  if (!cf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Hv(e), { childInstances: r, collect: a, clear: t } = n, o = ff(n, ["childInstances", "collect", "clear"]), l = et();
  return {
    index: D(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      no(() => {
        Ae().then(() => {
          a(l, u);
        });
      }), ro(() => {
        Ae().then(() => {
          t(l, u);
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
      kt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function on(e) {
  const n = et(), r = ze([]), a = [], t = D(() => r.length), o = () => {
    const u = mf(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Wt(r, u), Wt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Fv(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function uo(e) {
  $r(() => window, "resize", e, { passive: !0 }), $r(() => window, "orientationchange", e, { passive: !0 });
}
function pf(e, n) {
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
function Qe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function hf(e) {
  var n = jv(e), r = document.createElement("div");
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
      return () => bs(e, Ro({}, n, r));
    }
  }, {
    unmount: t
  } = hf(a);
  return {
    unmountInstance: t
  };
}
function Ns(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== Yv) {
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
function gf(e) {
  $r(() => window, "hashchange", e), $r(() => window, "popstate", e);
}
function vo() {
  var e = O(!1);
  return Vr(() => {
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
function w(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Oe(e))
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
function Ds(e, n, r) {
  r === void 0 && (r = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = r, i = t ?? "onUpdate:" + n.toString(), s = () => e[n] != null ? e[n] : o;
  if (!a)
    return D({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : w(e[i], d);
      }
    });
  var u = O(s());
  return le(() => e[n], () => {
    u.value = s();
  }), le(() => u.value, (d) => {
    l ? l(i, d) : w(e[i], d);
  }), u;
}
function qt() {
  return qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qt.apply(this, arguments);
}
var {
  n: As
} = ne("ripple"), fl = 250;
function yf(e) {
  var {
    zIndex: n,
    position: r
  } = tt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function bf(e, n) {
  var {
    top: r,
    left: a
  } = rn(e), {
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
function zs(e) {
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
      } = bf(this, e), s = document.createElement("div");
      s.classList.add(As()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), yf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Uo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + As());
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
function Ls() {
  if (!(!vf() || !bn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function wf(e, n) {
  var r;
  e._ripple = qt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Uo.bind(e)
  }), e.addEventListener("touchstart", zs, {
    passive: !0
  }), e.addEventListener("touchmove", Ls, {
    passive: !0
  }), e.addEventListener("dragstart", Uo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Cf(e) {
  e.removeEventListener("touchstart", zs), e.removeEventListener("touchmove", Ls), e.removeEventListener("dragstart", Uo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Sf(e, n) {
  var r, a, t, o, l = {
    color: (r = n.value) == null ? void 0 : r.color,
    disabled: (a = n.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = qt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Rs = {
  mounted: wf,
  unmounted: Cf,
  updated: Sf,
  install(e) {
    e.directive("ripple", this);
  }
}, DS = Rs;
const qe = Rs;
function kf(e) {
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
    validator: kf
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
    type: String,
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
function Us() {
  var e = Object.keys(bn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Mt(e) {
  bn.locks[e] = 1, Us();
}
function Et(e) {
  delete bn.locks[e], Us();
}
function fo(e, n) {
  var {
    uid: r
  } = et();
  n && le(n, (a) => {
    a === !1 ? Et(r) : a === !0 && e() === !0 && Mt(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? Mt(r) : Et(r));
  }), Wv(() => {
    n && n() === !1 || e() === !0 && Mt(r);
  }), ao(() => {
    n && n() === !1 || e() === !0 && Et(r);
  }), Vr(() => {
    n && n() === !1 || e() === !0 && Mt(r);
  }), xa(() => {
    n && n() === !1 || e() === !0 && Et(r);
  });
}
function Ot(e, n) {
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
function $f() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = tn(Hs);
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
  } = on(Hs);
  return {
    length: r,
    popupItems: n,
    bindPopupItems: e
  };
}
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
function cl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: In,
  classes: Oo
} = ne("popup");
const kn = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Pt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = pf(() => e.show, !0), {
      zIndex: o
    } = Ot(() => e.show, 3), {
      disabled: l
    } = vo(), {
      bindPopupItems: i
    } = Tf(), s = () => {
      var {
        closeOnClickOverlay: f,
        onClickOverlay: m
      } = e;
      w(m), f && w(e["onUpdate:show"], !1);
    }, u = () => {
      var {
        overlayClass: f = "",
        overlayStyle: m
      } = e;
      return Q("div", {
        class: Oo(In("overlay"), f),
        style: Ho({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => ke(Q("div", Ne({
      class: Oo(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")], [e.safeArea, In("--safe-area")], [e.safeAreaTop, In("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && w(r.default)]), [[Qn, e.show]]), v = () => {
      var f;
      return Q(Le, {
        name: In("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Q("div", {
          class: Oo(In("$--box"), In()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), Q(Le, {
          name: e.transition || In("$-pop-" + e.position)
        }, cl(f = d()) ? f : {
          default: () => [f]
        })]), [[Qn, e.show]])]
      });
    };
    return fo(() => e.show, () => e.lockScroll), le(() => e.show, (f) => {
      w(f ? e.onOpen : e.onClose);
    }), i({
      show: D(() => e.show)
    }), gf(() => w(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Q(Mr, {
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
var AS = kn, Fs = {
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
function ml(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Pf(e) {
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
  n: Of,
  classes: Vf
} = ne("icon");
function Mf(e, n) {
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
var Ys = ee({
  name: "VarIcon",
  props: Fs,
  setup(e) {
    var n = O(""), r = O(!1), a = /* @__PURE__ */ function() {
      var t = Pf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || A(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ae(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, A(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: Of,
      classes: Vf,
      nextName: n,
      animateInProgress: r,
      isURL: Zv,
      toNumber: A,
      toSizeUnit: ye
    };
  }
});
Ys.render = Mf;
const Ve = Ys;
Ve.install = function(e) {
  e.component(Ve.name, Ve);
};
var zS = Ve;
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
var Ef = Fo({
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
}, Qe(Pt, [
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
}, js = {
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
    e[o] = Yo({}, e[o], l), a(o);
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
  packs: Ws,
  pack: Je,
  add: Ni,
  use: Di,
  merge: Gs
} = Bi();
Ni("zh-CN", Ii);
Di("zh-CN");
var LS = {
  zhCN: Ii,
  enUS: js,
  packs: Ws,
  pack: Je,
  add: Ni,
  use: Di,
  merge: Gs,
  useLocale: Bi
};
const jo = {
  zhCN: Ii,
  enUS: js,
  packs: Ws,
  pack: Je,
  add: Ni,
  use: Di,
  merge: Gs,
  useLocale: Bi
};
var {
  n: If,
  classes: Bf
} = ne("action-sheet"), Nf = ["onClick"];
function Df(e, n) {
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
    default: fe(() => [N(
      "div",
      Ne({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [Y(e.$slots, "title", {}, () => [N(
        "div",
        {
          class: c(e.n("title"))
        },
        te(e.dt(e.title, e.pack.actionSheetTitle)),
        3
        /* TEXT, CLASS */
      )]), Y(e.$slots, "actions", {}, () => [(h(!0), k(
        Me,
        null,
        Ue(e.actions, (o) => ke((h(), k("div", {
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
        }, null, 8, ["class", "name", "size"])) : x("v-if", !0), N(
          "div",
          {
            class: c(e.n("action-name"))
          },
          te(o.name),
          3
          /* TEXT, CLASS */
        )], 14, Nf)), [[t, {
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
var qs = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: qe
  },
  components: {
    VarPopup: kn,
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: Ef,
  setup(e) {
    var n = O(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        w(l, t), o && w(e["onUpdate:show"], !1);
      }
    }, a = (t) => w(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: If,
      classes: Bf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Je,
      dt: io,
      handleSelect: r
    };
  }
});
qs.render = Df;
const fr = qs;
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
var ir, Ai = {};
function Af(e) {
  return e === void 0 && (e = {}), Wo({}, Ai, e);
}
function _n(e) {
  return at() ? new Promise((n) => {
    _n.close();
    var r = ze(Af(e));
    r.teleport = "body", ir = r;
    var {
      unmountInstance: a
    } = ot(fr, r, {
      onSelect: (t) => {
        w(r.onSelect, t), n(t);
      },
      onClose: () => {
        w(r.onClose), n("close");
      },
      onClosed: () => {
        w(r.onClosed), a(), ir === r && (ir = null);
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
_n.setDefaultOptions = function(e) {
  Ai = e;
};
_n.resetDefaultOptions = function() {
  Ai = {};
};
_n.close = function() {
  if (ir != null) {
    var e = ir;
    ir = null, Ae().then(() => {
      e.show = !1;
    });
  }
};
_n.Component = fr;
fr.install = function(e) {
  e.component(fr.name, fr);
};
_n.install = function(e) {
  e.component(fr.name, fr);
};
var RS = fr;
function zf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Lf = {
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
    validator: zf
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
  n: Rf,
  classes: Uf
} = ne("app-bar");
function Hf(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: q(e.rootStyles)
    },
    [N(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [N(
        "div",
        {
          class: c(e.n("left"))
        },
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingLeft: e.paddingLeft
            })
          },
          [Y(e.$slots, "default", {}, () => [Se(
            te(e.title),
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
        [Y(e.$slots, "default", {}, () => [Se(
          te(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0), N(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingRight: e.paddingRight
            })
          },
          [Y(e.$slots, "default", {}, () => [Se(
            te(e.title),
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
var Xs = ee({
  name: "VarAppBar",
  props: Lf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(), t = O(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = D(() => {
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
    return vn(o), $t(o), {
      n: Rf,
      classes: Uf,
      formatElevation: gn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Xs.render = Hf;
const Dr = Xs;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var US = Dr;
function pl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function co(e) {
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
var Ff = "background-image", Yf = "lazy-loading", jf = "lazy-error", hl = "lazy-attempt", Wf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], qo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Xa = [], Xt = [], Ks = xv(100), Ke = {
  loading: qo,
  error: qo,
  attempt: 3,
  throttleWait: 300,
  events: Wf
}, zi = Mi(Vt, Ke.throttleWait);
function mo(e, n) {
  e._lazy.arg === Ff ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Gf(e) {
  e._lazy.loading && mo(e, e._lazy.loading), Vt();
}
function qf(e) {
  e._lazy.error && mo(e, e._lazy.error), e._lazy.state = "error", Ri(e), Vt();
}
function Zs(e, n) {
  mo(e, n), e._lazy.state = "success", Ri(e), Vt();
}
function Xf(e) {
  var n;
  Xt.includes(e) || (Xt.push(e), (n = Ke.events) == null || n.forEach((r) => {
    e.addEventListener(r, zi, {
      passive: !0
    });
  }));
}
function Kf() {
  Xt.forEach((e) => {
    var n;
    (n = Ke.events) == null || n.forEach((r) => {
      e.removeEventListener(r, zi);
    });
  }), Xt.length = 0;
}
function Zf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Yf)) != null ? r : Ke.loading,
    error: (a = e.getAttribute(jf)) != null ? a : Ke.error,
    attempt: e.getAttribute(hl) ? Number(e.getAttribute(hl)) : Ke.attempt
  };
  e._lazy = Go({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), mo(e, qo), w(Ke.filter, e._lazy);
}
function Jf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Ks.add(n), Zs(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? qf(e) : Js(e);
  });
}
function Js(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Ks.has(n)) {
      Zs(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Gf(e), Jf(e, n);
  }
}
function Li(e) {
  return Xo.apply(this, arguments);
}
function Xo() {
  return Xo = co(function* (e) {
    yield zn(), nf(e) && Js(e);
  }), Xo.apply(this, arguments);
}
function Vt() {
  Xa.forEach((e) => Li(e));
}
function Qf(e) {
  return Ko.apply(this, arguments);
}
function Ko() {
  return Ko = co(function* (e) {
    !Xa.includes(e) && Xa.push(e), rf(e).forEach(Xf), yield Li(e);
  }), Ko.apply(this, arguments);
}
function Ri(e) {
  Wt(Xa, e), Xa.length === 0 && Kf();
}
function _f(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Qs(e, n) {
  return Zo.apply(this, arguments);
}
function Zo() {
  return Zo = co(function* (e, n) {
    Zf(e, n), yield Qf(e);
  }), Zo.apply(this, arguments);
}
function xf(e, n) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = co(function* (e, n) {
    if (!_f(e, n)) {
      Xa.includes(e) && (yield Li(e));
      return;
    }
    yield Qs(e, n);
  }), Jo.apply(this, arguments);
}
function ec(e) {
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
var _s = {
  mounted: Qs,
  unmounted: Ri,
  updated: xf,
  install(e, n) {
    ec(n), zi = Mi(Vt, Ke.throttleWait), e.directive("lazy", this);
  }
}, HS = _s;
const gt = _s;
function nc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var xs = (e) => ["mini", "small", "normal", "large"].includes(e);
function eu(e) {
  return xs(e) || dn(e) || He(e);
}
var rc = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: eu,
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
    validator: nc,
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
  n: ac,
  classes: tc
} = ne("avatar"), oc = ["src", "lazy-loading", "lazy-error"], ic = ["src"];
function lc(e, n) {
  var r = De("lazy");
  return h(), k(
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
    [e.src ? (h(), k(
      Me,
      {
        key: 0
      },
      [e.lazy ? ke((h(), k("img", {
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
      }, null, 46, oc)), [[r, e.src]]) : (h(), k("img", {
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
      }, null, 46, ic))],
      64
      /* STABLE_FRAGMENT */
    )) : (h(), k(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: q({
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
var nu = ee({
  name: "VarAvatar",
  directives: {
    Lazy: gt
  },
  props: rc,
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
      d ? (u._lazy.state === "success" && w(v, s), u._lazy.state === "error" && w(f, s)) : w(v, s);
    }, l = (s) => {
      w(e.onError, s);
    }, i = (s) => {
      w(e.onClick, s);
    };
    return vn(t), $t(t), {
      internalSizeValidator: xs,
      sizeValidator: eu,
      toSizeUnit: ye,
      n: ac,
      classes: tc,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
nu.render = lc;
const Ar = nu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var FS = Ar, sc = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: uc,
  classes: dc
} = ne("avatar-group");
function vc(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var ru = ee({
  name: "VarAvatarGroup",
  props: sc,
  setup(e) {
    var n = D(() => e.offset == null ? {} : {
      "--avatar-group-offset": ye(e.offset)
    });
    return {
      n: uc,
      classes: dc,
      toSizeUnit: ye,
      rootStyles: n
    };
  }
});
ru.render = vc;
const zr = ru;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var YS = zr;
function fc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function cc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ur = {
  type: {
    type: String,
    default: "circle",
    validator: fc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: cc
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
  n: mc,
  classes: pc
} = ne("loading"), hc = (e) => (La(""), e = e(), Ra(), e), gc = /* @__PURE__ */ hc(() => /* @__PURE__ */ N(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ N("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), yc = [gc];
function bc(e, n) {
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
        [N(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: q({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          yc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (h(!0), k(
        Me,
        null,
        Ue(e.loadingTypeDict, (r, a) => (h(), k(
          Me,
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
              Me,
              null,
              Ue(r, (t) => (h(), k(
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
      )), e.$slots.description || e.description ? (h(), k(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: q({
            color: e.color
          })
        },
        [Y(e.$slots, "description", {}, () => [Se(
          te(e.description),
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
var au = ee({
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
    }, t = D(() => w(r.default) ? e.loading : !0);
    return {
      n: mc,
      classes: pc,
      multiplySizeUnit: sn,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
au.render = bc;
const Dn = au;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
var jS = Dn, wc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Cc,
  classes: Sc
} = ne("hover-overlay");
function kc(e, n) {
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
var tu = ee({
  name: "VarHoverOverlay",
  props: wc,
  setup() {
    return {
      n: Cc,
      classes: Sc
    };
  }
});
tu.render = kc;
const pn = tu;
pn.install = function(e) {
  e.component(pn.name, pn);
};
function Tr() {
  var e = O(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var WS = pn;
function ou(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function $c(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[Ss(t)] = o, r;
  }, {}) : {};
}
function Tc(e) {
  var {
    value: n
  } = e._hover, r = $c(e);
  Object.keys(n).forEach((a) => {
    var t = Ss(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Ui(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function Pc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function iu(e) {
  Pc(e), Ui(e, e._hover.rawStyle);
}
function lu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, rt(e)) {
    e(this._hover.hovering);
    return;
  }
  Ui(this, e);
}
function su() {
  if (this._hover.hovering = !1, rt(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  iu(this);
}
function uu(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  ou(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, Tc(e), e.addEventListener("mouseenter", lu), e.addEventListener("mouseleave", su));
}
function du(e, n) {
  ou(n.arg) || (iu(e), e.removeEventListener("mouseenter", lu), e.removeEventListener("mouseleave", su));
}
function Oc(e, n) {
  e._hover && du(e, n);
}
function Vc(e, n) {
  return !rt(n.value) && e._hover.hovering;
}
function Mc(e, n) {
  uu(e, n), Vc(e, n) && Ui(e, n.value);
}
var vu = {
  mounted: uu,
  unmounted: du,
  beforeUpdate: Oc,
  updated: Mc,
  install(e) {
    e.directive("hover", this);
  }
}, GS = vu;
const Un = vu;
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
function fu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ec(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Ic(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Bc = {
  type: {
    type: String,
    validator: fu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Ic
  },
  size: {
    type: String,
    validator: Ec
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
  loadingType: Qe(ur, "type"),
  loadingSize: Qe(ur, "size"),
  loadingColor: Qo({}, Qe(ur, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, cu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Nc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = on(cu);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function Dc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = tn(cu);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Ac,
  classes: zc
} = ne("button"), Lc = ["type", "disabled"];
function Rc(e, n) {
  var r = ie("var-loading"), a = ie("var-hover-overlay"), t = De("ripple"), o = De("hover");
  return ke((h(), k("button", {
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
  }, null, 8, ["class", "color", "type", "size", "radius"])) : x("v-if", !0), N(
    "div",
    {
      class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  ), Q(a, {
    hovering: e.hovering
  }, null, 8, ["hovering"])], 46, Lc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var mu = ee({
  name: "VarButton",
  components: {
    VarLoading: Dn,
    VarHoverOverlay: pn
  },
  directives: {
    Ripple: qe,
    Hover: Un
  },
  props: Bc,
  setup(e) {
    var n = O(!1), {
      buttonGroup: r
    } = Dc(), {
      hovering: a,
      handleHovering: t
    } = Tr(), o = D(() => {
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
      !f || d || v || n.value || l(w(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || l(w(f, u));
    };
    return {
      n: Ac,
      classes: zc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
mu.render = Rc;
const nn = mu;
nn.install = function(e) {
  e.component(nn.name, nn);
};
var qS = nn, Uc = {
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
  n: Hc,
  classes: Fc
} = ne("back-top");
function Yc(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return h(), be(Mr, {
    to: "body",
    disabled: e.disabled
  }, [N(
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
    [Y(e.$slots, "default", {}, () => [Q(a, {
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
var pu = ee({
  name: "VarBackTop",
  components: {
    VarButton: nn,
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: Uc,
  setup(e) {
    var n = O(!1), r = O(null), a = O(!0), t, o = (d) => {
      w(e.onClick, d);
      var v = Ei(t);
      ht(t, {
        left: v,
        duration: e.duration,
        animation: ks
      });
    }, l = Mi(() => {
      n.value = pt(t) >= Ge(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Ts(e.target, "BackTop") : kr(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return no(() => {
      i(), s(), a.value = !1;
    }), Vr(s), so(u), {
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
pu.render = Yc;
const Lr = pu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var XS = Lr;
function jc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Wc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Gc = {
  type: {
    type: String,
    default: "default",
    validator: jc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Wc
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
  n: qc,
  classes: Xc
} = ne("badge");
function Kc(e, n) {
  var r = ie("var-icon");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), Q(Le, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: fe(() => [ke(N(
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
        }, null, 8, ["class", "name"])) : x("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), k(
          "span",
          {
            key: 0,
            class: c(e.n("value"))
          },
          te(e.value),
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
var hu = ee({
  name: "VarBadge",
  components: {
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: Gc,
  setup(e) {
    var n = D(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && A(r) > A(a) ? a + "+" : r;
    });
    return {
      n: qc,
      classes: Xc,
      value: n
    };
  }
});
hu.render = Kc;
const cr = hu;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var KS = cr, Zc = {
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
}, gu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Jc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = on(gu);
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
  n: Qc,
  classes: _c
} = ne("bottom-navigation"), {
  n: po
} = ne("bottom-navigation-item"), gl = po("--right-half-space"), yl = po("--left-half-space"), bl = po("--right-space"), xc = {
  type: "primary"
};
function em(e, n) {
  var r = ie("var-button");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (h(), be(r, Ne({
      key: 0,
      class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
      "var-bottom-navigation__fab": "",
      onClick: e.handleFabClick
    }, e.fabProps, {
      round: ""
    }), {
      default: fe(() => [Y(e.$slots, "fab")]),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "onClick"])) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var yu = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: nn
  },
  props: Zc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(null), t = D(() => e.active), o = D(() => e.activeColor), l = D(() => e.inactiveColor), i = O({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Jc(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((p) => {
      var {
        name: P
      } = p;
      return t.value === P.value;
    }), m = () => u.find((p) => {
      var {
        index: P
      } = p;
      return t.value === P.value;
    }), g = () => {
      dn(t.value) && (t.value < 0 ? w(e["onUpdate:active"], 0) : t.value > s.value - 1 && w(e["onUpdate:active"], s.value - 1));
    }, b = (p) => {
      t.value !== p && (e.onBeforeChange ? y(p) : C(p));
    }, y = (p) => {
      var P = Rt(w(e.onBeforeChange, p));
      Promise.all(P).then((j) => {
        j.every(Boolean) && C(p);
      });
    }, C = (p) => {
      w(e["onUpdate:active"], p), w(e.onChange, p);
    }, V = () => {
      var p = M();
      p.forEach((P) => {
        P.classList.remove(gl, yl, bl);
      });
    }, $ = (p) => {
      var P = M(), j = P.length, R = p % 2 === 0;
      P.forEach((Z, J) => {
        S(R, Z, J, j);
      });
    }, S = (p, P, j, R) => {
      var Z = j === R - 1;
      if (!p && Z) {
        P.classList.add(bl);
        return;
      }
      var J = j === R / 2 - 1, z = j === R / 2;
      J ? P.classList.add(gl) : z && P.classList.add(yl);
    }, M = () => Array.from(a.value.querySelectorAll("." + po())), E = () => {
      w(e.onFabClick);
    }, T = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(T), le(() => s.value, v), le(() => e.fabProps, (p) => {
      i.value = _o({}, xc, p);
    }, {
      immediate: !0,
      deep: !0
    }), vn(() => {
      r.fab && $(s.value);
    }), $t(() => {
      V(), r.fab && $(s.value);
    }), {
      n: Qc,
      classes: _c,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: E,
      fabProps: i
    };
  }
});
yu.render = em;
const Rr = yu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var ZS = Rr, nm = {
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
function rm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = tn(gu);
  return r || On("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: am,
  classes: tm
} = ne("bottom-navigation-item"), om = {
  type: "danger",
  dot: !0
};
function im(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = De("ripple");
  return ke((h(), k(
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
    }, null, 8, ["name", "namespace", "class"])) : x("v-if", !0), Y(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), be(a, Ne({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : x("v-if", !0), N(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (h(), k(
        Me,
        {
          key: 0
        },
        [Se(
          te(e.label),
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
var bu = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: cr,
    VarIcon: Ve
  },
  directives: {
    Ripple: qe
  },
  props: nm,
  setup(e) {
    var n = D(() => e.name), r = D(() => e.badge), a = O({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = rm(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, g = (m = n.value) != null ? m : t.value;
      w(e.onClick, g), w(o.onToggle, g);
    };
    return l(d), le(() => r.value, (m) => {
      a.value = m === !0 ? om : r.value;
    }, {
      immediate: !0
    }), {
      n: am,
      classes: tm,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
bu.render = im;
const Ur = bu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var JS = Ur, lm = {
  separator: {
    type: String
  },
  onClick: U()
}, wu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function sm() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = on(wu);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function um() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = tn(wu);
  return n || On("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: dm,
  classes: vm
} = ne("breadcrumb");
function fm(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [N(
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
      return [N(
        "div",
        {
          class: c(e.n("separator"))
        },
        te((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var Cu = ee({
  name: "VarBreadcrumb",
  props: lm,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = um(), t = D(() => n.value === r.length.value - 1), o = D(() => r.separator.value), l = (i) => {
      t.value || w(e.onClick, i);
    };
    return a(null), {
      n: dm,
      classes: vm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Cu.render = fm;
const Hr = Cu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var QS = Hr, cm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: mm
} = ne("breadcrumbs");
function pm(e, n) {
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
var Su = ee({
  name: "VarBreadcrumbs",
  props: cm,
  setup(e) {
    var n = D(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = sm(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: mm
    };
  }
});
Su.render = pm;
const Fr = Su;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var _S = Fr;
function hm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function gm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function ym(e) {
  return ["normal", "text", "outline"].includes(e);
}
var bm = {
  type: {
    type: String,
    default: "default",
    validator: hm
  },
  size: {
    type: String,
    default: "normal",
    validator: gm
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
    validator: ym
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
  n: wm,
  classes: Cm
} = ne("button-group");
function Sm(e, n) {
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
var ku = ee({
  name: "VarButtonGroup",
  props: bm,
  setup(e) {
    var {
      bindButtons: n
    } = Nc(), r = {
      elevation: D(() => e.elevation),
      type: D(() => e.type),
      size: D(() => e.size),
      color: D(() => e.color),
      textColor: D(() => e.textColor),
      mode: D(() => e.mode)
    };
    return n(r), {
      n: wm,
      classes: Cm,
      formatElevation: gn
    };
  }
});
ku.render = Sm;
const Yr = ku;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var xS = Yr;
function km(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var $m = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: km,
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
  n: Tm,
  classes: Pm
} = ne("card"), Om = 500, Vm = ["src", "alt"];
function Mm(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = De("ripple");
  return ke((h(), k(
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
    [N(
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
      [Y(e.$slots, "image", {}, () => [e.src ? (h(), k("img", {
        key: 0,
        class: c(e.n("image")),
        style: q({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Vm)) : x("v-if", !0)]), N(
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
          te(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          te(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          te(e.description),
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
            style: q({
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
          style: q({
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
    ), N(
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
var $u = ee({
  name: "VarCard",
  directives: {
    Ripple: qe
  },
  components: {
    VarIcon: Ve,
    VarButton: nn
  },
  props: $m,
  setup(e) {
    var n = O(null), r = O(null), a = O("auto"), t = O("auto"), o = O("100%"), l = O("100%"), i = O("auto"), s = O("auto"), u = O(void 0), d = O("hidden"), v = O("0px"), f = O("0"), m = D(() => e.layout === "row"), g = O(!1), b = O(!1), {
      zIndex: y
    } = Ot(() => e.floating, 1);
    fo(() => e.floating, () => !m.value);
    var C = "auto", V = "auto", $ = null, S = O(null), M = /* @__PURE__ */ function() {
      var P = Cl(function* () {
        clearTimeout(S.value), clearTimeout($), S.value = null, S.value = setTimeout(/* @__PURE__ */ Cl(function* () {
          var {
            width: j,
            height: R,
            left: Z,
            top: J
          } = rn(n.value);
          a.value = ye(j), t.value = ye(R), o.value = a.value, l.value = t.value, i.value = ye(J), s.value = ye(Z), u.value = "fixed", C = i.value, V = s.value, g.value = !0, yield zn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Om : 0);
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), E = () => {
      clearTimeout($), clearTimeout(S.value), S.value = null, o.value = a.value, l.value = t.value, i.value = C, s.value = V, v.value = "0px", f.value = "0", g.value = !1, $ = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", C = "auto", V = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, T = () => {
      w(e["onUpdate:floating"], !1);
    }, p = (P) => {
      w(e.onClick, P);
    };
    return le(() => e.floating, (P) => {
      m.value || Ae(() => {
        P ? M() : E();
      });
    }, {
      immediate: !0
    }), {
      n: Tm,
      classes: Pm,
      toSizeUnit: ye,
      card: n,
      cardFloater: r,
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
      close: T,
      showFloatingButtons: g,
      floated: b,
      formatElevation: gn,
      handleClick: p
    };
  }
});
$u.render = Mm;
const jr = $u;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var ek = jr, Em = {
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
  n: Im,
  classes: Bm
} = ne("cell");
function Nm(e, n) {
  var r = ie("var-icon"), a = De("ripple");
  return ke((h(), k(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
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
    )) : x("v-if", !0)]), N(
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
        te(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        te(e.description),
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
var Tu = ee({
  name: "VarCell",
  components: {
    VarIcon: Ve
  },
  directives: {
    Ripple: qe
  },
  props: Em,
  setup(e) {
    var n = D(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ye(e.borderOffset),
      "--cell-border-right": ye(e.borderOffset)
    }), r = (a) => {
      w(e.onClick, a);
    };
    return {
      n: Im,
      classes: Bm,
      toSizeUnit: ye,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
Tu.render = Nm;
const mr = Tu;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var nk = mr, Dm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Am
} = ne("form-details"), zm = {
  key: 0
}, Lm = {
  key: 0
};
function Rm(e, n) {
  return h(), be(Le, {
    name: e.n()
  }, {
    default: fe(() => [e.errorMessage || e.extraMessage ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n())
      },
      [N(
        "div",
        {
          class: c(e.n("error-message"))
        },
        [Q(Le, {
          name: e.n("message")
        }, {
          default: fe(() => [e.errorMessage ? (h(), k(
            "div",
            zm,
            te(e.errorMessage),
            1
            /* TEXT */
          )) : x("v-if", !0)]),
          _: 1
          /* STABLE */
        }, 8, ["name"])],
        2
        /* CLASS */
      ), N(
        "div",
        {
          class: c(e.n("extra-message"))
        },
        [Q(Le, {
          name: e.n("message")
        }, {
          default: fe(() => [e.extraMessage ? (h(), k(
            "div",
            Lm,
            te(e.extraMessage),
            1
            /* TEXT */
          )) : x("v-if", !0)]),
          _: 1
          /* STABLE */
        }, 8, ["name"])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    )) : x("v-if", !0)]),
    _: 1
    /* STABLE */
  }, 8, ["name"]);
}
var Pu = ee({
  name: "VarFormDetails",
  props: Dm,
  setup: () => ({
    n: Am
  })
});
Pu.render = Rm;
const xe = Pu;
xe.install = function(e) {
  e.component(xe.name, xe);
};
var rk = xe, Um = {
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
}, Ou = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Hm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = on(Ou);
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
  } = tn(Ou);
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
var Vu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = tn(Vu), a = et(), t = r ? (o) => {
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
function Ym() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = on(Vu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: jm,
  classes: Wm
} = ne("checkbox");
function Gm(e, n) {
  var r = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = De("hover"), l = De("ripple");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [N(
      "div",
      {
        class: c(e.n())
      },
      [ke((h(), k(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(r, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : Y(e.$slots, "unchecked-icon", {
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
      }]]), N(
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
var Mu = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: qe,
    Hover: Un
  },
  components: {
    VarIcon: Ve,
    VarFormDetails: xe,
    VarHoverOverlay: pn
  },
  props: Um,
  setup(e) {
    var n = O(!1), r = D(() => n.value === e.checkedValue), a = D(() => e.checkedValue), t = O(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Fm(), {
      hovering: i,
      handleHovering: s
    } = Tr(), {
      form: u,
      bindForm: d
    } = Mn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Vn(), b = (p) => {
      Ae(() => {
        var {
          validateTrigger: P,
          rules: j,
          modelValue: R
        } = e;
        f(P, p, j, R);
      });
    }, y = (p) => {
      n.value = p;
      var {
        checkedValue: P,
        onChange: j
      } = e;
      w(e["onUpdate:modelValue"], n.value), w(j, n.value), b("onChange"), p === P ? o == null || o.onChecked(P) : o == null || o.onUnchecked(P);
    }, C = (p) => {
      var {
        disabled: P,
        readonly: j,
        checkedValue: R,
        uncheckedValue: Z,
        onClick: J
      } = e;
      if (!(u != null && u.disabled.value || P) && (w(J, p), !(u != null && u.readonly.value || j))) {
        t.value = !0;
        var z = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && z || y(r.value ? Z : R);
      }
    }, V = (p) => {
      var {
        checkedValue: P,
        uncheckedValue: j
      } = e;
      n.value = p.includes(P) ? P : j;
    }, $ = () => {
      t.value = !1;
    }, S = () => {
      w(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, M = (p) => {
      var {
        checkedValue: P,
        uncheckedValue: j
      } = e, R = ![P, j].includes(p);
      R && (p = r.value ? j : P), y(p);
    }, E = () => m(e.rules, e.modelValue);
    le(() => e.modelValue, (p) => {
      n.value = p;
    }, {
      immediate: !0
    });
    var T = {
      checkedValue: a,
      checked: r,
      sync: V,
      validate: E,
      resetValidation: g,
      reset: S,
      resetWithAnimation: $
    };
    return w(l, T), w(d, T), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: jm,
      classes: Wm,
      handleClick: C,
      toggle: M,
      reset: S,
      validate: E,
      resetValidation: g
    };
  }
});
Mu.render = Gm;
const pr = Mu;
pr.install = function(e) {
  e.component(pr.name, pr);
};
var ak = pr;
function qm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Xm = {
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
    validator: qm
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
  n: Km,
  classes: Zm
} = ne("checkbox-group");
function Jm(e, n) {
  var r = ie("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
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
var Eu = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: xe
  },
  props: Xm,
  setup(e) {
    var n = D(() => e.max), r = D(() => e.modelValue.length), {
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
    } = Vn(), v = D(() => i.value), f = (T) => {
      Ae(() => {
        var {
          validateTrigger: p,
          rules: P,
          modelValue: j
        } = e;
        s(p, T, P, j);
      });
    }, m = (T) => {
      w(e["onUpdate:modelValue"], T), w(e.onChange, T), f("onChange");
    }, g = (T) => {
      var {
        modelValue: p
      } = e;
      p.includes(T) || m([...p, T]);
    }, b = (T) => {
      var {
        modelValue: p
      } = e;
      p.includes(T) && m(p.filter((P) => P !== T));
    }, y = () => t.forEach((T) => {
      var {
        sync: p
      } = T;
      return p(e.modelValue);
    }), C = () => {
      t.forEach((T) => T.resetWithAnimation());
    }, V = () => {
      var T = t.map((P) => {
        var {
          checkedValue: j
        } = P;
        return j.value;
      }), p = al(T);
      return C(), w(e["onUpdate:modelValue"], p), p;
    }, $ = () => {
      var T = t.filter((P) => {
        var {
          checked: j
        } = P;
        return !j.value;
      }).map((P) => {
        var {
          checkedValue: j
        } = P;
        return j.value;
      }), p = al(T);
      return C(), w(e["onUpdate:modelValue"], p), p;
    }, S = () => {
      w(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, y, {
      deep: !0
    }), le(() => a.value, y);
    var E = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: b,
      validate: M,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return o(E), w(l, E), {
      errorMessage: i,
      n: Km,
      classes: Zm,
      checkAll: V,
      inverseAll: $,
      reset: S,
      validate: M,
      resetValidation: d
    };
  }
});
Eu.render = Jm;
const Wr = Eu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var tk = Wr;
function Qm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function _m(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xm = {
  type: {
    type: String,
    default: "default",
    validator: Qm
  },
  size: {
    type: String,
    default: "normal",
    validator: _m
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Qe(Fs, "name"),
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
  classes: ep
} = ne("chip");
function np(e, n) {
  var r = ie("var-icon");
  return h(), be(Le, {
    name: e.n("$-fade")
  }, {
    default: fe(() => [N(
      "span",
      Ne({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [Y(e.$slots, "left"), N(
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
var Iu = ee({
  name: "VarChip",
  components: {
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: xm,
  setup(e) {
    var n = D(() => {
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
    }), r = D(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = nr(o ? "$--flex" : "$--inline-flex"), d = i ? nr("plain") + " " + nr("plain-" + l) : nr("--" + l), v = s ? nr("--round") : null;
      return [nr("--" + t), u, d, v];
    }), a = (t) => {
      w(e.onClose, t);
    };
    return {
      n: nr,
      classes: ep,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Iu.render = np;
const hr = Iu;
hr.install = function(e) {
  e.component(hr.name, hr);
};
var ok = hr;
function rp(e) {
  return ["row", "column"].includes(e);
}
function ap(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function tp(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var op = {
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
    validator: rp
  },
  justify: {
    type: String,
    validator: ap
  },
  align: {
    type: String,
    validator: tp
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
}, Bu = Symbol("ROW_BIND_COL_KEY");
function ip() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = on(Bu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function lp() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = tn(Bu);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: It,
  classes: sp
} = ne("col");
function up(e, n) {
  return h(), k(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Nu = ee({
  name: "VarCol",
  props: op,
  setup(e) {
    var n = O({
      left: 0,
      right: 0
    }), r = D(() => A(e.span)), a = D(() => A(e.offset)), {
      row: t,
      bindRow: o
    } = lp(), l = {
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
        Number(m) >= 0 && v.push(It("--span-" + u + "-" + m)), f && v.push(It("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(It("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      w(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), w(o, l), {
      n: It,
      classes: sp,
      padding: n,
      toNumber: A,
      toSizeUnit: ye,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Gt
    };
  }
});
Nu.render = up;
const Gr = Nu;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var ik = Gr, Du = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function dp() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = on(Du);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var vp = {
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
  n: fp
} = ne("collapse");
function cp(e, n) {
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
var Au = ee({
  name: "VarCollapse",
  props: vp,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = dp(), t = D(() => e.modelValue), o = D(() => e.offset), l = D(() => e.divider), i = D(() => e.elevation), s = () => !e.accordion && !Oe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Oe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, y) => s() ? y ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((C) => C !== b) : null, d = (b, y) => {
      var C = u(b, y);
      w(e["onUpdate:modelValue"], C), w(e.onChange, C);
    }, v = () => {
      if (e.accordion)
        return r.find((y) => {
          var {
            name: C
          } = y;
          return e.modelValue === C.value;
        });
      var b = r.filter((y) => {
        var {
          name: C
        } = y;
        return C.value === void 0 ? !1 : e.modelValue.includes(C.value);
      });
      return b.length ? b : void 0;
    }, f = () => e.accordion ? r.find((b) => {
      var {
        index: y,
        name: C
      } = b;
      return C.value === void 0 && e.modelValue === y.value;
    }) : r.filter((b) => {
      var {
        index: y,
        name: C
      } = b;
      return C.value === void 0 && e.modelValue.includes(y.value);
    }), m = () => {
      if (s()) {
        var b = v() || f();
        if (e.accordion && !b || !e.accordion && !b.length) {
          r.forEach((y) => {
            y.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((y) => {
          var C = e.accordion ? b === y : b.includes(y);
          y.init(e.accordion, C);
        });
      }
    }, g = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(g), le(() => n.value, () => Ae().then(m)), le(() => e.modelValue, () => Ae().then(m)), {
      n: fp,
      divider: l
    };
  }
});
Au.render = cp;
const qr = Au;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var lk = qr;
function mp() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = tn(Du);
  return r || On("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var pp = {
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
  n: hp,
  classes: gp
} = ne("collapse-item");
function yp(e, n) {
  var r = ie("var-icon");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: q("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), N(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [N(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [Y(e.$slots, "title", {}, () => [Se(
          te(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), N(
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
    ), ke(N(
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
      [N(
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
    ), [[Qn, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var zu = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ve
  },
  props: pp,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = mp(), t = !0, o = O(null), l = O(!1), i = O(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = D(() => e.name), g = (M, E) => {
      s.value === void 0 || M && Oe(s.value) || E === i.value || (i.value = E, b(!0));
    }, b = (M) => {
      e.disabled || M || f(e.name || n.value, !i.value);
    }, y = () => {
      o.value && (o.value.style.height = "", l.value = !0, wn(() => {
        var {
          offsetHeight: M
        } = o.value;
        o.value.style.height = "0px", wn(() => {
          o.value.style.height = M + "px", t && lo(() => {
            t && $();
          });
        });
      }));
    }, C = () => {
      t = !1;
    }, V = () => {
      if (o.value) {
        var {
          offsetHeight: M
        } = o.value;
        o.value.style.height = M + "px", wn(() => {
          o.value.style.height = "0px";
        });
      }
    }, $ = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, S = {
      index: n,
      name: m,
      init: g
    };
    return a(S), le(i, (M) => {
      M ? y() : V();
    }), {
      n: hp,
      start: C,
      classes: gp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: b,
      contentEl: o,
      transitionend: $,
      formatElevation: gn
    };
  }
});
zu.render = yp;
const Xr = zu;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var sk = Xr, bp = {
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
  n: wp
} = ne("countdown"), ei = 1e3, ni = 60 * ei, ri = 60 * ni, Sl = 24 * ri;
function Cp(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", Tt(to(e.timeData)), () => [Se(
      te(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Lu = ee({
  name: "VarCountdown",
  props: bp,
  setup(e) {
    var n = O(""), r = O({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, b) => {
      var y = Object.values(b), C = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (C.forEach((S, M) => {
        g.includes(S) ? g = g.replace(S, Na("" + y[M], 2, "0")) : y[M + 1] += y[M] * V[M];
      }), g.includes("S")) {
        var $ = Na("" + y[y.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", $) : g.includes("SS") ? g = g.replace("SS", $.slice(0, 2)) : g = g.replace("S", $.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var b = Math.floor(g / Sl), y = Math.floor(g % Sl / ri), C = Math.floor(g % ri / ni), V = Math.floor(g % ni / ei), $ = Math.floor(g % ei), S = {
        days: b,
        hours: y,
        minutes: C,
        seconds: V,
        milliseconds: $
      };
      r.value = S, w(e.onChange, r.value), n.value = s(e.format, S);
    }, d = () => {
      var {
        time: g,
        onEnd: b
      } = e, y = performance.now();
      if (a || (a = y + A(g)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        w(b);
        return;
      }
      t && (o = wn(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || A(e.time)), d());
    }, f = () => {
      t = !1, ul(o);
    }, m = () => {
      a = 0, t = !1, ul(o), d();
    };
    return le(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Vr(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), xa(() => {
      i = t, f();
    }), ao(f), {
      showTime: n,
      timeData: r,
      n: wp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Lu.render = Cp;
const Kr = Lu;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var uk = Kr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Fa = 9e15, Er = 1e9, ai = "0123456789abcdef", Kt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Zt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ti = {
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
  minE: -Fa,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Fa,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Ru, jn, ge = !0, ho = "[DecimalError] ", Pr = ho + "Invalid argument: ", Uu = ho + "Precision limit exceeded", Hu = ho + "crypto unavailable", Fu = "[object Decimal]", an = Math.floor, Ze = Math.pow, Sp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, kp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, $p = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Yu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, pe = 7, Tp = 9007199254740991, Pp = Kt.length - 1, oi = Zt.length - 1, K = { toStringTag: Fu };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ce(e);
};
K.ceil = function() {
  return ce(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Pr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
K.comparedTo = K.cmp = function(e) {
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
K.cosine = K.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + pe, a.rounding = 1, r = Op(a, Xu(a, r)), a.precision = e, a.rounding = n, ce(jn == 2 || jn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ge = !1, o = d.s * Ze(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = en(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ze(r, 1 / 3), e = an((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Be(u.plus(d).times(i), u.plus(s), l + 2, 1), en(i.d).slice(0, l) === (r = en(a.d)).slice(0, l))
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
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - an(this.e / pe)) * pe, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
K.dividedBy = K.div = function(e) {
  return Be(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ce(Be(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return ce(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / yo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ka(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ce(o, l.precision = r, l.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ka(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / yo(5, e)), t = Ka(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, ce(t, n, r, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Be(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Nn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Nn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Nn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ge = !1, r = r.times(r).minus(1).sqrt().plus(r), ge = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ge = !1, r = r.times(r).plus(1).sqrt().plus(r), ge = !0, a.precision = e, a.rounding = n, r.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ce(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Be(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Nn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
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
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && an(this.e / pe) > this.d.length - 2;
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
  if (ge = !1, i = v + m, l = dr(u, i), a = n ? Jt(d, i + 10) : dr(e, i), s = Be(l, a, i, 1), yt(s.d, t = v, f))
    do
      if (i += 10, l = dr(u, i), a = n ? Jt(d, i + 10) : dr(e, i), s = Be(l, a, i, 1), !o) {
        +en(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ce(s, v + 1, 0));
        break;
      }
    while (yt(s.d, t += 10, f));
  return ge = !0, ce(s, v, f);
};
K.minus = K.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, g = m.constructor;
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
    return ge ? ce(e, i, s) : e;
  }
  if (r = an(e.e / pe), d = an(m.e / pe), u = u.slice(), o = d - r, o) {
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
        u[t] = An - 1;
      --u[t], u[a] += An;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = go(u, r), ge ? ce(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ce(new a(r), a.precision, a.rounding) : (ge = !1, a.modulo == 9 ? (n = Be(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Be(r, e, 0, a.modulo, 1), n = n.times(e), ge = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return ii(this);
};
K.naturalLogarithm = K.ln = function() {
  return dr(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ce(e);
};
K.plus = K.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ge ? ce(e, i, s) : e;
  if (o = an(v.e / pe), a = an(e.e / pe), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / pe), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / An | 0, u[t] %= An;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = go(u, a), ge ? ce(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Pr + e);
  return r.d ? (n = ju(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ce(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + pe, a.rounding = 1, r = Mp(a, Xu(a, r)), a.precision = e, a.rounding = n, ce(jn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ge = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = en(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = an((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Be(l, o, r + 2, 1)).times(0.5), en(o.d).slice(0, r) === (n = en(a.d)).slice(0, r))
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
K.tangent = K.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Be(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ce(jn == 2 || jn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = an(d.e / pe) + an(e.e / pe), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % An | 0, n = i / An | 0;
    o[t] = (o[t] + n) % An | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = go(o, r), ge ? ce(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return Hi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (hn(e, 0, Er), n === void 0 ? n = a.rounding : hn(n, 0, 8), ce(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Hn(a, !0) : (hn(e, 0, Er), n === void 0 ? n = t.rounding : hn(n, 0, 8), a = ce(new t(a), e + 1, n), r = Hn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Hn(t) : (hn(e, 0, Er), n === void 0 ? n = o.rounding : hn(n, 0, 8), a = ce(new o(t), e + t.e + 1, n), r = Hn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, b = m.constructor;
  if (!g)
    return new b(m);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), o = n.e = ju(g) - m.e - 1, l = o % pe, n.d[0] = Ze(10, l < 0 ? pe + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(Pr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (ge = !1, i = new b(en(g)), d = b.precision, b.precision = o = g.length * pe * 2; v = Be(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Be(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Be(u, a, o, 1).minus(m).abs().cmp(Be(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], b.precision = d, ge = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return Hi(this, 16, e, n);
};
K.toNearest = function(e, n) {
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
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return Hi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ze(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ce(i, a, o);
  if (n = an(e.e / pe), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Tp)
    return t = Wu(s, i, r, a), e.s < 0 ? new s(1).div(t) : ce(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ze(+i, u), n = r == 0 || !isFinite(r) ? an(u * (Math.log("0." + en(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (ge = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = ii(e.times(dr(i, a + r)), a), t.d && (t = ce(t, a + 5, 1), yt(t.d, a, o) && (n = a + 10, t = ce(ii(e.times(dr(i, n + r)), n), n + 5, 1), +en(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ce(t, a + 1, 0)))), t.s = l, ge = !0, s.rounding = o, ce(t, a, o));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Hn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (hn(e, 1, Er), n === void 0 ? n = t.rounding : hn(n, 0, 8), a = ce(new t(a), e, n), r = Hn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (hn(e, 1, Er), n === void 0 ? n = a.rounding : hn(n, 0, 8)), ce(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = Hn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return ce(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = Hn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function en(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = pe - a.length, r && (o += ar(r)), o += a;
    l = e[n], a = l + "", r = pe - a.length, r && (o += ar(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function hn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(Pr + e);
}
function yt(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += pe, t = 0) : (t = Math.ceil((n + 1) / pe), n %= pe), o = Ze(10, pe - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ze(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ze(10, n - 3) - 1, l;
}
function Ut(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += ai.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Op(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / yo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ka(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, m, g, b, y, C, V, $, S, M, E, T, p, P, j, R, Z, J = a.constructor, z = a.s == t.s ? 1 : -1, L = a.d, F = t.d;
    if (!L || !L[0] || !F || !F[0])
      return new J(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (L ? F && L[0] == F[0] : !F) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          L && L[0] == 0 || !F ? z * 0 : z / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = An, m = pe, d = an(a.e / m) - an(t.e / m)), R = F.length, P = L.length, C = new J(z), V = C.d = [], v = 0; F[v] == (L[v] || 0); v++)
      ;
    if (F[v] > (L[v] || 0) && d--, o == null ? (E = o = J.precision, l = J.rounding) : i ? E = o + (a.e - t.e) + 1 : E = o, E < 0)
      V.push(1), g = !0;
    else {
      if (E = E / m + 2 | 0, v = 0, R == 1) {
        for (f = 0, F = F[0], E++; (v < P || f) && E--; v++)
          T = f * s + (L[v] || 0), V[v] = T / F | 0, f = T % F | 0;
        g = f || v < P;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), L = e(L, f, s), R = F.length, P = L.length), p = R, $ = L.slice(0, R), S = $.length; S < R; )
          $[S++] = 0;
        Z = F.slice(), Z.unshift(0), j = F[0], F[1] >= s / 2 && ++j;
        do
          f = 0, u = n(F, $, R, S), u < 0 ? (M = $[0], R != S && (M = M * s + ($[1] || 0)), f = M / j | 0, f > 1 ? (f >= s && (f = s - 1), b = e(F, f, s), y = b.length, S = $.length, u = n(b, $, y, S), u == 1 && (f--, r(b, R < y ? Z : F, y, s))) : (f == 0 && (u = f = 1), b = F.slice()), y = b.length, y < S && b.unshift(0), r($, b, S, s), u == -1 && (S = $.length, u = n(F, $, R, S), u < 1 && (f++, r($, R < S ? Z : F, S, s))), S = $.length) : u === 0 && (f++, $ = [0]), V[v++] = f, u && $[0] ? $[S++] = L[p] || 0 : ($ = [L[p]], S = 1);
        while ((p++ < P || $[0] !== void 0) && E--);
        g = $[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      C.e = d, Ru = g;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      C.e = v + d * m - 1, ce(C, i ? o + C.e + 1 : o, l, g);
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
  return ge && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Hn(e, n, r) {
  if (!e.isFinite())
    return qu(e);
  var a, t = e.e, o = en(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ar(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + ar(-t - 1) + o, r && (a = r - l) > 0 && (o += ar(a))) : t >= l ? (o += ar(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + ar(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += ar(a))), o;
}
function go(e, n) {
  var r = e[0];
  for (n *= pe; r >= 10; r /= 10)
    n++;
  return n;
}
function Jt(e, n, r) {
  if (n > Pp)
    throw ge = !0, r && (e.precision = r), Error(Uu);
  return ce(new e(Kt), n, 1, !0);
}
function Nn(e, n, r) {
  if (n > oi)
    throw Error(Uu);
  return ce(new e(Zt), n, r, !0);
}
function ju(e) {
  var n = e.length - 1, r = n * pe + 1;
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
function Wu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / pe + 4);
  for (ge = !1; ; ) {
    if (r % 2 && (o = o.times(n), $l(o.d, l) && (t = !0)), r = an(r / 2), r === 0) {
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
function Gu(e, n, r) {
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
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ge = !1, s = g) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ce(o.times(e), s, 1), r = r.times(++d), i = l.plus(Be(o, r, s, 1)), en(i.d).slice(0, s) === en(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ce(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && yt(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ce(l, f.precision = g, m, ge = !0);
      else
        return f.precision = g, l;
    }
    l = i;
  }
}
function dr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, b = e, y = b.d, C = b.constructor, V = C.rounding, $ = C.precision;
  if (b.s < 0 || !y || !y[0] || !b.e && y[0] == 1 && y.length == 1)
    return new C(y && !y[0] ? -1 / 0 : b.s != 1 ? NaN : y ? 0 : b);
  if (n == null ? (ge = !1, d = $) : d = n, C.precision = d += g, r = en(y), a = r.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = en(b.d), a = r.charAt(0), m++;
    o = b.e, a > 1 ? (b = new C("0." + r), o++) : b = new C(a + "." + r.slice(1));
  } else
    return u = Jt(C, d + 2, $).times(o + ""), b = dr(new C(a + "." + r.slice(1)), d - g).plus(u), C.precision = $, n == null ? ce(b, $, V, ge = !0) : b;
  for (v = b, s = l = b = Be(b.minus(1), b.plus(1), d, 1), f = ce(b.times(b), d, 1), t = 3; ; ) {
    if (l = ce(l.times(f), d, 1), u = s.plus(Be(l, new C(t), d, 1)), en(u.d).slice(0, d) === en(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Jt(C, d + 2, $).times(o + ""))), s = Be(s, new C(m), d, 1), n == null)
        if (yt(s.d, d - g, V, i))
          C.precision = d += g, u = l = b = Be(v.minus(1), v.plus(1), d, 1), f = ce(b.times(b), d, 1), t = i = 1;
        else
          return ce(s, C.precision = $, V, ge = !0);
      else
        return C.precision = $, s;
    s = u, t += 2;
  }
}
function qu(e) {
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
function Vp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Yu.test(n))
      return li(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (kp.test(n))
    r = 16, n = n.toLowerCase();
  else if (Sp.test(n))
    r = 2;
  else if ($p.test(n))
    r = 8;
  else
    throw Error(Pr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Wu(a, new a(r), o, o * 2)), u = Ut(n, r, An), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = go(u, d), e.d = u, ge = !1, l && (e = Be(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ze(2, s) : vr.pow(2, s))), ge = !0, e);
}
function Mp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ka(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / yo(5, r)), n = Ka(e, 2, n, n);
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
function yo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Xu(e, n) {
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
function Hi(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = r !== void 0;
  if (g ? (hn(r, 1, Er), a === void 0 ? a = m.rounding : hn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = qu(e);
  else {
    for (d = Hn(e), l = d.indexOf("."), g ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ut(Hn(f), 10, t), f.e = f.d.length), v = Ut(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Be(e, f, r, a, 0, t), v = e.d, o = e.e, u = Ru), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ai.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ut(d, t, n), s = v.length; !v[s - 1]; --s)
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
function Ep(e) {
  return new this(e).abs();
}
function Ip(e) {
  return new this(e).acos();
}
function Bp(e) {
  return new this(e).acosh();
}
function Np(e, n) {
  return new this(e).plus(n);
}
function Dp(e) {
  return new this(e).asin();
}
function Ap(e) {
  return new this(e).asinh();
}
function zp(e) {
  return new this(e).atan();
}
function Lp(e) {
  return new this(e).atanh();
}
function Rp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Nn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Nn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Nn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Be(e, n, o, 1)), n = Nn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Be(e, n, o, 1)), r;
}
function Up(e) {
  return new this(e).cbrt();
}
function Hp(e) {
  return ce(e = new this(e), e.e + 1, 2);
}
function Fp(e, n, r) {
  return new this(e).clamp(n, r);
}
function Yp(e) {
  if (!e || typeof e != "object")
    throw Error(ho + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Er,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Fa,
    0,
    "toExpPos",
    0,
    Fa,
    "maxE",
    0,
    Fa,
    "minE",
    -Fa,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = ti[r]), (a = e[r]) !== void 0)
      if (an(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(Pr + r + ": " + a);
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
      throw Error(Pr + r + ": " + a);
  return this;
}
function jp(e) {
  return new this(e).cos();
}
function Wp(e) {
  return new this(e).cosh();
}
function Ku(e) {
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
      throw Error(Pr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Yu.test(o) ? li(u, o) : Vp(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Yp, t.clone = Ku, t.isDecimal = Tl, t.abs = Ep, t.acos = Ip, t.acosh = Bp, t.add = Np, t.asin = Dp, t.asinh = Ap, t.atan = zp, t.atanh = Lp, t.atan2 = Rp, t.cbrt = Up, t.ceil = Hp, t.clamp = Fp, t.cos = jp, t.cosh = Wp, t.div = Gp, t.exp = qp, t.floor = Xp, t.hypot = Kp, t.ln = Zp, t.log = Jp, t.log10 = _p, t.log2 = Qp, t.max = xp, t.min = eh, t.mod = nh, t.mul = rh, t.pow = ah, t.random = th, t.round = oh, t.sign = ih, t.sin = lh, t.sinh = sh, t.sqrt = uh, t.sub = dh, t.sum = vh, t.tan = fh, t.tanh = ch, t.trunc = mh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Gp(e, n) {
  return new this(e).div(n);
}
function qp(e) {
  return new this(e).exp();
}
function Xp(e) {
  return ce(e = new this(e), e.e + 1, 3);
}
function Kp() {
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
  return e instanceof vr || e && e.toStringTag === Fu || !1;
}
function Zp(e) {
  return new this(e).ln();
}
function Jp(e, n) {
  return new this(e).log(n);
}
function Qp(e) {
  return new this(e).log(2);
}
function _p(e) {
  return new this(e).log(10);
}
function xp() {
  return Gu(this, arguments, "lt");
}
function eh() {
  return Gu(this, arguments, "gt");
}
function nh(e, n) {
  return new this(e).mod(n);
}
function rh(e, n) {
  return new this(e).mul(n);
}
function ah(e, n) {
  return new this(e).pow(n);
}
function th(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : hn(e, 1, Er), a = Math.ceil(e / pe), this.crypto)
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
function oh(e) {
  return ce(e = new this(e), e.e + 1, this.rounding);
}
function ih(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function lh(e) {
  return new this(e).sin();
}
function sh(e) {
  return new this(e).sinh();
}
function uh(e) {
  return new this(e).sqrt();
}
function dh(e, n) {
  return new this(e).sub(n);
}
function vh() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ge = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ge = !0, ce(r, this.precision, this.rounding);
}
function fh(e) {
  return new this(e).tan();
}
function ch(e) {
  return new this(e).tanh();
}
function mh(e) {
  return ce(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var vr = K.constructor = Ku(ti);
Kt = new vr(Kt);
Zt = new vr(Zt);
var ph = {
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
  n: hh,
  classes: gh
} = ne("counter"), Pl = 100, Ol = 600, yh = ["inputmode", "readonly", "disabled"];
function bh(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = ie("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [N(
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
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), ke(N("input", {
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
      }, null, 46, yh), [[Gv, e.inputValue]]), Q(a, {
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
var Zu = ee({
  name: "VarCounter",
  components: {
    VarButton: nn,
    VarIcon: Ve,
    VarFormDetails: xe
  },
  directives: {
    Ripple: qe
  },
  inheritAttrs: !1,
  props: ph,
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
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), b = (F) => {
      Ae(() => {
        var {
          validateTrigger: G,
          rules: oe,
          modelValue: I
        } = e;
        o(G, F, oe, I);
      });
    }, y = () => {
      var {
        min: F
      } = e;
      w(e["onUpdate:modelValue"], F != null ? A(F) : 0), i();
    }, C = {
      reset: y,
      validate: g,
      resetValidation: i
    }, V = D(() => {
      var {
        max: F,
        modelValue: G
      } = e;
      return F != null && A(G) >= A(F);
    }), $ = D(() => {
      var {
        min: F,
        modelValue: G
      } = e;
      return F != null && A(G) <= A(F);
    }), S = (F) => {
      var {
        decimalLength: G,
        max: oe,
        min: I
      } = e, B = A(F);
      return oe != null && B > A(oe) && (B = A(oe)), I != null && B < A(I) && (B = A(I)), F = String(B), G != null && (F = B.toFixed(A(G))), F;
    }, M = (F) => {
      var {
        lazyChange: G,
        onBeforeChange: oe
      } = e, {
        value: I
      } = F.target, B = S(I);
      G ? w(oe, A(B), L) : z(B), b("onInputChange");
    }, E = () => {
      var {
        disabled: F,
        readonly: G,
        disableDecrement: oe,
        decrementButton: I,
        lazyChange: B,
        step: W,
        modelValue: re,
        onDecrement: H,
        onBeforeChange: X
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || G || oe || !I) && !$.value) {
        var _ = new vr(A(re)).minus(new vr(A(W))).toString(), ve = S(_), Ce = A(ve);
        w(H, Ce), B ? w(X, Ce, L) : (z(ve), b("onDecrement"));
      }
    }, T = () => {
      var {
        disabled: F,
        readonly: G,
        disableIncrement: oe,
        incrementButton: I,
        lazyChange: B,
        step: W,
        modelValue: re,
        onIncrement: H,
        onBeforeChange: X
      } = e;
      if (!(u != null && u.value || s != null && s.value || F || G || oe || !I) && !V.value) {
        var _ = new vr(A(re)).plus(new vr(A(W))).toString(), ve = S(_), Ce = A(ve);
        w(H, Ce), B ? w(X, Ce, L) : (z(ve), b("onIncrement"));
      }
    }, p = () => {
      var {
        press: F,
        lazyChange: G
      } = e;
      !F || G || (m = window.setTimeout(() => {
        J();
      }, Ol));
    }, P = () => {
      var {
        press: F,
        lazyChange: G
      } = e;
      !F || G || (f = window.setTimeout(() => {
        Z();
      }, Ol));
    }, j = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, R = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, Z = () => {
      d = window.setTimeout(() => {
        T(), Z();
      }, Pl);
    }, J = () => {
      v = window.setTimeout(() => {
        E(), J();
      }, Pl);
    }, z = (F) => {
      n.value = F;
      var G = A(F);
      w(e["onUpdate:modelValue"], G);
    }, L = (F) => {
      z(S(String(F))), b("onLazyChange");
    };
    return w(r, C), le(() => e.modelValue, (F) => {
      z(S(String(F))), w(e.onChange, A(F));
    }), z(S(String(e.modelValue))), {
      n: hh,
      classes: gh,
      formatElevation: gn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: $,
      validate: g,
      reset: y,
      resetValidation: i,
      handleChange: M,
      decrement: E,
      increment: T,
      pressDecrement: p,
      pressIncrement: P,
      releaseDecrement: j,
      releaseIncrement: R,
      toSizeUnit: ye,
      toNumber: A
    };
  }
});
Zu.render = bh;
const Zr = Zu;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var dk = Zr, Ju = 60, Qu = Ju * 60, _u = Qu * 24, wh = _u * 7, Za = 1e3, Vo = Ju * Za, Vl = Qu * Za, Ch = _u * Za, Sh = wh * Za, Fi = "millisecond", Ya = "second", ja = "minute", Wa = "hour", tr = "day", Ht = "week", Bn = "month", xu = "quarter", or = "year", Ga = "date", kh = "YYYY-MM-DDTHH:mm:ssZ", Ml = "Invalid Date", $h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Th = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Ph = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var si = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Oh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + si(t, 2, "0") + ":" + si(o, 2, "0");
}, Vh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Bn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Bn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, Mh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Eh = function(n) {
  var r = {
    M: Bn,
    y: or,
    w: Ht,
    d: tr,
    D: Ga,
    h: Wa,
    m: ja,
    s: Ya,
    ms: Fi,
    Q: xu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Ih = function(n) {
  return n === void 0;
};
const Bh = {
  s: si,
  z: Oh,
  m: Vh,
  a: Mh,
  p: Eh,
  u: Ih
};
var dt = "en", Jr = {};
Jr[dt] = Ph;
var Yi = function(n) {
  return n instanceof bo;
}, Qt = function e(n, r, a) {
  var t;
  if (!n)
    return dt;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Jr[o] && (t = o), r && (Jr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Jr[i] = n, t = i;
  }
  return !a && t && (dt = t), t || !a && dt;
}, ue = function(n, r) {
  if (Yi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new bo(a);
}, Nh = function(n, r) {
  return ue(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ie = Bh;
Ie.l = Qt;
Ie.i = Yi;
Ie.w = Nh;
var Dh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ie.u(r))
    return /* @__PURE__ */ new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match($h);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, bo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Qt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Dh(a), this.$x = a.x || {}, this.init();
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
      var $ = Ie.w(o.$u ? Date.UTC(o.$y, V, C) : new Date(o.$y, V, C), o);
      return l ? $ : $.endOf(tr);
    }, u = function(C, V) {
      var $ = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Ie.w(o.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? $ : S).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case or:
        return l ? s(1, 0) : s(31, 11);
      case Bn:
        return l ? s(1, v) : s(0, v + 1);
      case Ht: {
        var g = this.$locale().weekStart || 0, b = (d < g ? d + 7 : d) - g;
        return s(l ? f - b : f + (6 - b), v);
      }
      case tr:
      case Ga:
        return u(m + "Hours", 0);
      case Wa:
        return u(m + "Minutes", 1);
      case ja:
        return u(m + "Seconds", 2);
      case Ya:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Ie.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[tr] = i + "Date", o[Ga] = i + "Date", o[Bn] = i + "Month", o[or] = i + "FullYear", o[Wa] = i + "Hours", o[ja] = i + "Minutes", o[Ya] = i + "Seconds", o[Fi] = i + "Milliseconds", o)[l], u = l === tr ? this.$D + (t - this.$W) : t;
    if (l === Bn || l === or) {
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
    if (i === or)
      return this.set(or, this.$y + a);
    if (i === tr)
      return s(1);
    if (i === Ht)
      return s(7);
    var u = (l = {}, l[ja] = Vo, l[Wa] = Vl, l[Ya] = Za, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Ie.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Ml;
    var l = a || kh, i = Ie.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function($, S, M, E) {
      return $ && ($[S] || $(t, l)) || M[S].slice(0, E);
    }, b = function($) {
      return Ie.s(s % 12 || 12, $, "0");
    }, y = m || function(V, $, S) {
      var M = V < 12 ? "AM" : "PM";
      return S ? M.toLowerCase() : M;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ie.s(d + 1, 2, "0"),
      MMM: g(o.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Ie.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(o.weekdaysMin, this.$W, v, 2),
      ddd: g(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Ie.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Ie.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ie.s(this.$s, 2, "0"),
      SSS: Ie.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(Th, function(V, $) {
      return $ || C[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Ie.p(t), s = ue(a), u = (s.utcOffset() - this.utcOffset()) * Vo, d = this - s, v = Ie.m(this, s);
    return v = (l = {}, l[or] = v / 12, l[Bn] = v, l[xu] = v / 3, l[Ht] = (d - u) / Sh, l[tr] = (d - u) / Ch, l[Wa] = d / Vl, l[ja] = d / Vo, l[Ya] = d / Za, l)[i] || d, o ? v : Ie.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Bn).$D;
  }, n.$locale = function() {
    return Jr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Qt(a, t, !0);
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
}(), ed = bo.prototype;
ue.prototype = ed;
[["$ms", Fi], ["$s", Ya], ["$m", ja], ["$H", Wa], ["$W", tr], ["$M", Bn], ["$y", or], ["$D", Ga]].forEach(function(e) {
  ed[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ue.extend = function(e, n) {
  return e.$i || (e(n, bo, ue), e.$i = !0), ue;
};
ue.locale = Qt;
ue.isDayjs = Yi;
ue.unix = function(e) {
  return ue(e * 1e3);
};
ue.en = Jr[dt];
ue.Ls = Jr;
ue.p = {};
const nd = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, rd = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Ah(e) {
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
}], zh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Ah
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
  n: Lh
} = ne("picker-header");
function Rh(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
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
      default: fe(() => [Q(r, {
        name: "chevron-left"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), N(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [Q(Le, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: fe(() => [(h(), k(
          "div",
          {
            key: e.showDate
          },
          te(e.showDate),
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
var ad = ee({
  name: "PanelHeader",
  components: {
    VarButton: nn,
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
    } = n, a = O(!1), t = O(0), o = D(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return A(v) + t.value;
      var f = (i = Je.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Je.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: Lh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
ad.render = Rh;
const td = ad;
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
ue.extend(nd);
ue.extend(rd);
var {
  n: Bt,
  classes: Uh
} = ne("month-picker"), {
  n: Nt
} = ne("date-picker");
function Hh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [N(
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
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), Q(Le, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: fe(() => [(h(), k("ul", {
          key: e.panelKey
        }, [(h(!0), k(
          Me,
          null,
          Ue(e.MONTH_LIST, (t) => (h(), k("li", {
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
              te(e.getMonthAbbr(t.index)),
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
var od = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: td
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
    } = n, [a, t] = e.current.split("-"), o = O(!1), l = O(0), i = O(null), s = ze({
      left: !1,
      right: !1
    }), u = D(() => e.choose.chooseYear === e.preview.previewYear), d = D(() => e.preview.previewYear === a), v = (V) => {
      var $, S;
      return ($ = (S = Je.value.datePickerMonthDict) == null ? void 0 : S[V].abbr) != null ? $ : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: $
        },
        componentProps: {
          min: S,
          max: M
        }
      } = e, E = !0, T = !0, p = $ + "-" + V;
      return M && (E = ue(p).isSameOrBefore(ue(M), "month")), S && (T = ue(p).isSameOrAfter(ue(S), "month")), E && T;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: $,
          chooseDays: S,
          chooseRangeMonth: M
        },
        componentProps: {
          type: E,
          range: T
        }
      } = e;
      if (T) {
        if (!M.length)
          return !1;
        var p = ue(V).isSameOrBefore(ue(M[1]), "month"), P = ue(V).isSameOrAfter(ue(M[0]), "month");
        return p && P;
      }
      return E === "month" ? $.includes(V) : S.some((j) => j.includes(V));
    }, g = (V) => {
      var {
        choose: {
          chooseMonth: $
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: M,
          color: E,
          multiple: T,
          range: p
        }
      } = e, P = S + "-" + V, j = () => p || T ? m(P) : ($ == null ? void 0 : $.index) === V && u.value, R = () => f(V) ? M ? !M(P) : !1 : !0, Z = R(), J = () => Z ? !0 : p || T ? !m(P) : !u.value || ($ == null ? void 0 : $.index) !== V, z = () => d.value && t === V && e.componentProps.showCurrent ? (p || T || u.value) && Z ? !0 : p || T ? !m(P) : u.value ? ($ == null ? void 0 : $.index) !== t : !0 : !1, L = () => Z ? "" : z() ? E ?? "" : j() ? "" : Nt() + "-color-cover", F = L().startsWith(Nt());
      return {
        outline: z(),
        text: J(),
        color: J() ? "" : E,
        textColor: F ? "" : L(),
        [Nt() + "-color-cover"]: F,
        class: Uh(Bt("button"), [Z, Bt("button--disabled")]),
        disabled: Z
      };
    }, b = (V, $) => {
      var S = $.currentTarget;
      S.classList.contains(Bt("button--disabled")) || r("choose-month", V);
    }, y = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, C = (V) => {
      i.value.checkDate(V);
    };
    return le(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: $,
          max: S
        }
      } = e;
      S && (s.right = !ue("" + (A(V) + 1)).isSameOrBefore(ue(S), "year")), $ && (s.left = !ue("" + (A(V) - 1)).isSameOrAfter(ue($), "year"));
    }, {
      immediate: !0
    }), {
      n: Bt,
      nDate: Nt,
      pack: Je,
      MONTH_LIST: Ft,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: C,
      buttonProps: g,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: y
    };
  }
});
od.render = Hh;
const Fh = od;
var {
  n: El,
  classes: Yh
} = ne("year-picker"), jh = ["onClick"];
function Wh(e, n) {
  return h(), k(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), k(
      Me,
      null,
      Ue(e.yearList, (r) => (h(), k("li", {
        key: r,
        class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
        style: q({
          color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(r)
      }, te(r), 15, jh))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var id = ee({
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
    } = n, a = D(() => {
      var o = [], {
        preview: l,
        componentProps: {
          max: i,
          min: s
        }
      } = e;
      if (!l)
        return o;
      var u = [A(l) + 100, A(l) - 100];
      if (i) {
        var d = ue(i).format("YYYY-MM-D"), v = A(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ue(s).format("YYYY-MM-D"), m = A(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return vn(() => {
      var o = document.querySelector("." + El("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: El,
      classes: Yh,
      yearList: a,
      chooseYear: t,
      toNumber: A
    };
  }
});
id.render = Wh;
const Gh = id;
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
ue.extend(nd);
ue.extend(rd);
var {
  n: Ha,
  classes: qh
} = ne("day-picker"), {
  n: Dt
} = ne("date-picker");
function Xh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [N(
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
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), Q(Le, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: fe(() => [(h(), k("div", {
          key: e.panelKey
        }, [N(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(h(!0), k(
            Me,
            null,
            Ue(e.sortWeekList, (t) => (h(), k(
              "li",
              {
                key: t.index
              },
              te(e.getDayAbbr(t.index)),
              1
              /* TEXT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        ), N(
          "ul",
          {
            class: c(e.n("body"))
          },
          [(h(!0), k(
            Me,
            null,
            Ue(e.days, (t, o) => (h(), k("li", {
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
                te(e.filterDay(t)),
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
var ld = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: td
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
    } = n, [a, t, o] = e.current.split("-"), l = O([]), i = O(!1), s = O(0), u = O(null), d = ze({
      left: !1,
      right: !1
    }), v = D(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = D(() => {
      var p;
      return e.choose.chooseYear === e.preview.previewYear && ((p = e.choose.chooseMonth) == null ? void 0 : p.index) === e.preview.previewMonth.index;
    }), m = D(() => {
      var p = st.findIndex((P) => P.index === e.componentProps.firstDayOfWeek);
      return p === -1 || p === 0 ? st : st.slice(p).concat(st.slice(0, p));
    }), g = (p) => {
      var P, j;
      return (P = (j = Je.value.datePickerWeekDict) == null ? void 0 : j[p].abbr) != null ? P : "";
    }, b = (p) => p > 0 ? p : "", y = () => {
      var {
        preview: {
          previewMonth: p,
          previewYear: P
        }
      } = e, j = ue(P + "-" + p.index).daysInMonth(), R = ue(P + "-" + p.index + "-01").day(), Z = m.value.findIndex((J) => J.index === "" + R);
      l.value = [...Array(Z).fill(-1), ...Array.from(Array(j + 1).keys())].filter((J) => J);
    }, C = () => {
      var {
        preview: {
          previewYear: p,
          previewMonth: P
        },
        componentProps: {
          max: j,
          min: R
        }
      } = e;
      if (j) {
        var Z = p + "-" + (A(P.index) + 1);
        d.right = !ue(Z).isSameOrBefore(ue(j), "month");
      }
      if (R) {
        var J = p + "-" + (A(P.index) - 1);
        d.left = !ue(J).isSameOrAfter(ue(R), "month");
      }
    }, V = (p) => {
      var {
        preview: {
          previewYear: P,
          previewMonth: j
        },
        componentProps: {
          min: R,
          max: Z
        }
      } = e, J = !0, z = !0, L = P + "-" + j.index + "-" + p;
      return Z && (J = ue(L).isSameOrBefore(ue(Z), "day")), R && (z = ue(L).isSameOrAfter(ue(R), "day")), J && z;
    }, $ = (p) => {
      var {
        choose: {
          chooseDays: P,
          chooseRangeDay: j
        },
        componentProps: {
          range: R
        }
      } = e;
      if (R) {
        if (!j.length)
          return !1;
        var Z = ue(p).isSameOrBefore(ue(j[1]), "day"), J = ue(p).isSameOrAfter(ue(j[0]), "day");
        return Z && J;
      }
      return P.includes(p);
    }, S = (p) => {
      if (p < 0)
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
          previewYear: j,
          previewMonth: R
        },
        componentProps: {
          allowedDates: Z,
          color: J,
          multiple: z,
          range: L
        }
      } = e, F = j + "-" + R.index + "-" + p, G = () => L || z ? $(F) : A(P) === p && f.value, oe = () => V(p) ? Z ? !Z(F) : !1 : !0, I = oe(), B = () => I ? !0 : L || z ? !$(F) : !f.value || A(P) !== p, W = () => v.value && A(o) === p && e.componentProps.showCurrent ? (L || z || f.value) && I ? !0 : L || z ? !$(F) : f.value ? P !== o : !0 : !1, re = () => I ? "" : W() ? J ?? "" : G() ? "" : Dt() + "-color-cover", H = re().startsWith(Dt());
      return {
        text: B(),
        outline: W(),
        textColor: H ? "" : re(),
        [Dt() + "-color-cover"]: H,
        class: qh(Ha("button"), Ha("button--usable"), [I, Ha("button--disabled")]),
        disabled: I
      };
    }, M = (p) => {
      i.value = p === "prev", s.value += p === "prev" ? -1 : 1, r("check-preview", "month", p);
    }, E = (p, P) => {
      var j = P.currentTarget;
      j.classList.contains(Ha("button--disabled")) || r("choose-day", p);
    }, T = (p) => {
      u.value.checkDate(p);
    };
    return vn(() => {
      y(), C();
    }), le(() => e.preview, () => {
      y(), C();
    }), {
      n: Ha,
      nDate: Dt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: T,
      filterDay: b,
      getDayAbbr: g,
      checkDate: M,
      chooseDay: E,
      buttonProps: S
    };
  }
});
ld.render = Xh;
const Kh = ld;
var {
  n: Zh,
  classes: Jh
} = ne("date-picker");
function Qh(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [N(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [Y(e.$slots, "year", {
          year: e.chooseYear
        }, () => [Se(
          te(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), N(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [Q(Le, {
          name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
        }, {
          default: fe(() => {
            var o, l, i;
            return [e.type === "month" ? (h(), k("div", {
              key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
            }, [e.range ? Y(e.$slots, "range", {
              key: 0,
              choose: e.getChoose.chooseRangeMonth
            }, () => [Se(
              te(e.getMonthTitle),
              1
              /* TEXT */
            )]) : e.multiple ? Y(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseMonths
            }, () => [Se(
              te(e.getMonthTitle),
              1
              /* TEXT */
            )]) : Y(e.$slots, "month", {
              key: 2,
              month: (l = e.chooseMonth) == null ? void 0 : l.index,
              year: e.chooseYear
            }, () => [Se(
              te(e.getMonthTitle),
              1
              /* TEXT */
            )])])) : (h(), k("div", {
              key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
            }, [e.range ? Y(e.$slots, "range", {
              key: 0,
              choose: e.formatRange
            }, () => [Se(
              te(e.getDateTitle),
              1
              /* TEXT */
            )]) : e.multiple ? Y(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseDays
            }, () => [Se(
              te(e.getDateTitle),
              1
              /* TEXT */
            )]) : Y(e.$slots, "date", Tt(Ne({
              key: 2
            }, e.slotProps)), () => [Se(
              te(e.getDateTitle),
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
    ), N(
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
      [Q(Le, {
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
var sd = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Fh,
    YearPickerPanel: Gh,
    DayPickerPanel: Kh
  },
  props: zh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ue().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Ft.find((se) => se.index === i), u = O(!1), d = O(!1), v = O(!0), f = O(), m = O(), g = O(), b = O(s), y = O(l), C = O(!1), V = O([]), $ = O([]), S = O([]), M = O([]), E = O(null), T = O(null), p = ze({
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
    }), P = D(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: V.value,
      chooseDays: $.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: M.value
    })), j = D(() => ({
      previewMonth: b.value,
      previewYear: y.value
    })), R = D(() => {
      var {
        multiple: se,
        range: we
      } = e;
      if (we)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var he = "";
      if (f.value) {
        var $e, Te;
        he = ($e = (Te = Je.value.datePickerMonthDict) == null ? void 0 : Te[f.value.index].name) != null ? $e : "";
      }
      return se ? "" + V.value.length + Je.value.datePickerSelected : he;
    }), Z = D(() => {
      var se, we, he, $e, {
        multiple: Te,
        range: Re
      } = e;
      if (Re) {
        var ln = M.value.map((To) => ue(To).format("YYYY-MM-DD"));
        return ln.length ? ln[0] + " ~ " + ln[1] : "";
      }
      if (Te)
        return "" + $.value.length + Je.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var Cn = ue(m.value + "-" + f.value.index + "-" + g.value).day(), Ua = st.find((To) => To.index === "" + Cn), el = (se = (we = Je.value.datePickerWeekDict) == null ? void 0 : we[Ua.index].name) != null ? se : "", Lv = (he = ($e = Je.value.datePickerMonthDict) == null ? void 0 : $e[f.value.index].name) != null ? he : "", Rv = Na(g.value, 2, "0");
      return Je.value.lang === "zh-CN" ? f.value.index + "-" + Rv + " " + el.slice(0, 3) : el.slice(0, 3) + ", " + Lv.slice(0, 3) + " " + g.value;
    }), J = D(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), z = D(() => !e.touchable || ["", "year"].includes(J.value)), L = D(() => {
      var se, we, he, $e, Te = ue(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + g.value).day(), Re = g.value ? Na(g.value, 2, "0") : "";
      return {
        week: "" + Te,
        year: (we = m.value) != null ? we : "",
        month: (he = ($e = f.value) == null ? void 0 : $e.index) != null ? he : "",
        date: Re
      };
    }), F = D(() => P.value.chooseRangeDay.map((se) => ue(se).format("YYYY-MM-DD"))), G = D(() => m.value === y.value), oe = D(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === b.value.index;
    }), I = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, B = (se) => {
      if (!z.value) {
        var {
          clientX: we,
          clientY: he
        } = se.touches[0];
        n = we, r = he;
      }
    }, W = (se, we) => se >= we && se > 20 ? "x" : "y", re = (se) => {
      if (!z.value) {
        var {
          clientX: we,
          clientY: he
        } = se.touches[0], $e = we - n, Te = he - r;
        t = W(Math.abs($e), Math.abs(Te)), a = $e > 0 ? "prev" : "next";
      }
    }, H = () => {
      if (!(z.value || t !== "x")) {
        var se = J.value === "month" ? E : T;
        lo(() => {
          se.value.forwardRef(a), je();
        });
      }
    }, X = (se, we) => {
      var he = we === "month" ? S : M;
      if (he.value = v.value ? [se, se] : [he.value[0], se], v.value = !v.value, v.value) {
        var $e = ue(he.value[0]).isAfter(he.value[1]), Te = $e ? [he.value[1], he.value[0]] : [...he.value];
        w(e["onUpdate:modelValue"], Te), w(e.onChange, Te);
      }
    }, _ = (se, we) => {
      var he = we === "month" ? V : $, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Te = he.value.map((ln) => ue(ln).format($e)), Re = Te.findIndex((ln) => ln === se);
      Re === -1 ? Te.push(se) : Te.splice(Re, 1), w(e["onUpdate:modelValue"], Te), w(e.onChange, Te);
    }, ve = (se, we) => !m.value || !f.value ? !1 : G.value ? se === "month" ? we.index < f.value.index : oe.value ? we < A(g.value) : f.value.index > b.value.index : m.value > y.value, Ce = (se) => {
      var {
        readonly: we,
        range: he,
        multiple: $e,
        onChange: Te,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || we)) {
        C.value = ve("day", se);
        var ln = y.value + "-" + b.value.index + "-" + se, Cn = ue(ln).format("YYYY-MM-DD");
        he ? X(Cn, "day") : $e ? _(Cn, "day") : (w(Re, Cn), w(Te, Cn));
      }
    }, Ee = (se) => {
      var {
        type: we,
        readonly: he,
        range: $e,
        multiple: Te,
        onChange: Re,
        onPreview: ln,
        "onUpdate:modelValue": Cn
      } = e;
      if (C.value = ve("month", se), we === "month" && !he) {
        var Ua = y.value + "-" + se.index;
        $e ? X(Ua, "month") : Te ? _(Ua, "month") : (w(Cn, Ua), w(Re, Ua));
      } else
        b.value = se, w(ln, A(y.value), A(b.value.index));
      d.value = !1;
    }, ae = (se) => {
      y.value = "" + se, u.value = !1, d.value = !0, w(e.onPreview, A(y.value), A(b.value.index));
    }, de = (se, we) => {
      var he = we === "prev" ? -1 : 1;
      if (se === "year")
        y.value = "" + (A(y.value) + he);
      else {
        var $e = A(b.value.index) + he;
        $e < 1 && (y.value = "" + (A(y.value) - 1), $e = 12), $e > 12 && (y.value = "" + (A(y.value) + 1), $e = 1), b.value = Ft.find((Te) => A(Te.index) === $e);
      }
      w(e.onPreview, A(y.value), A(b.value.index));
    }, me = () => (e.multiple || e.range) && !Oe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Oe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Pe = (se) => Oe(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Fe = (se, we) => {
      var he = we === "month" ? S : M, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = se.map((Cn) => ue(Cn).format($e)).slice(0, 2), Re = he.value.some((Cn) => Pe(Cn));
      if (!Re) {
        he.value = Te;
        var ln = ue(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && ln && (he.value = [he.value[1], he.value[0]]);
      }
    }, Xe = (se, we) => {
      var he = we === "month" ? V : $, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = Array.from(new Set(se.map((Re) => ue(Re).format($e))));
      he.value = Te.filter((Re) => Re !== "Invalid Date");
    }, Ye = (se) => {
      var we = ue(se).format("YYYY-MM-D");
      if (!Pe(we)) {
        var [he, $e, Te] = we.split("-"), Re = Ft.find((ln) => ln.index === $e);
        f.value = Re, m.value = he, g.value = Te, b.value = Re, y.value = he;
      }
    }, je = () => {
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
          Ye(se);
    }, {
      immediate: !0
    }), le(J, je), {
      n: Zh,
      classes: Jh,
      monthPanelEl: E,
      dayPanelEl: T,
      reverse: C,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: R,
      getDateTitle: Z,
      getPanelType: J,
      getChoose: P,
      getPreview: j,
      componentProps: p,
      slotProps: L,
      formatRange: F,
      clickEl: I,
      handleTouchstart: B,
      handleTouchmove: re,
      handleTouchend: H,
      getChooseDay: Ce,
      getChooseMonth: Ee,
      getChooseYear: ae,
      checkPreview: de,
      formatElevation: gn
    };
  }
});
sd.render = Qh;
const Qr = sd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var vk = Qr;
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
function _h(e) {
  return ["left", "center", "right"].includes(e);
}
var xh = vi({
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
    validator: _h
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
}, Qe(Pt, [
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
  n: eg,
  classes: ng
} = ne("dialog");
function rg(e, n) {
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
    default: fe(() => [N(
      "div",
      Ne({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: fi({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [N(
        "div",
        {
          class: c(e.n("title"))
        },
        [Y(e.$slots, "title", {}, () => [Se(
          te(e.dt(e.title, e.pack.dialogTitle)),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), N(
        "div",
        {
          class: c(e.n("message")),
          style: q({
            textAlign: e.messageAlign
          })
        },
        [Y(e.$slots, "default", {}, () => [Se(
          te(e.message),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      ), N(
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
            te(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
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
            te(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
var ud = ee({
  name: "VarDialog",
  components: {
    VarPopup: kn,
    VarButton: nn
  },
  inheritAttrs: !1,
  props: xh,
  setup(e) {
    var n = O(!1), r = O(!1), a = () => w(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (w(s), !!i) {
        if (u != null) {
          w(u, "close", a);
          return;
        }
        w(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (w(s), i != null) {
        w(i, "confirm", a);
        return;
      }
      w(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (w(s), i != null) {
        w(i, "cancel", a);
        return;
      }
      w(e["onUpdate:show"], !1);
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
      n: eg,
      classes: ng,
      pack: Je,
      dt: io,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ye
    };
  }
});
ud.render = rg;
const gr = ud;
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _t.apply(this, arguments);
}
var lr, xt = {};
function ag(e) {
  return e === void 0 && (e = {}), He(e) ? _t({}, xt, {
    message: e
  }) : _t({}, xt, e);
}
function xn(e) {
  return at() ? new Promise((n) => {
    xn.close();
    var r = ag(e), a = ze(r);
    a.teleport = "body", lr = a;
    var {
      unmountInstance: t
    } = ot(gr, a, {
      onConfirm: () => {
        w(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        w(a.onCancel), n("cancel");
      },
      onClose: () => {
        w(a.onClose), n("close");
      },
      onClosed: () => {
        w(a.onClosed), t(), lr === a && (lr = null);
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
xn.setDefaultOptions = function(e) {
  xt = e;
};
xn.resetDefaultOptions = function() {
  xt = {};
};
xn.close = function() {
  if (lr != null) {
    var e = lr;
    lr = null, Ae().then(() => {
      e.show = !1;
    });
  }
};
gr.install = function(e) {
  e.component(gr.name, gr);
};
xn.install = function(e) {
  e.component(gr.name, gr);
};
xn.Component = gr;
var fk = gr, tg = {
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
function qa() {
  return qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qa.apply(this, arguments);
}
var {
  n: og,
  classes: ig
} = ne("divider");
function lg(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [Y(e.$slots, "default", {}, () => [e.description ? (h(), k(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      te(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var dd = ee({
  name: "VarDivider",
  props: tg,
  setup(e, n) {
    var {
      slots: r
    } = n, a = ze({
      withText: !1
    }), t = D(() => Ao(e.inset) ? e.inset : !0), o = D(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Ao(i) || i === 0)
        return qa({}, d);
      var v = A(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? qa({}, d, {
        height: "calc(80% - " + ye(f) + ")"
      }) : qa({}, d, {
        width: "calc(100% - " + ye(f) + ")",
        left: v > 0 ? ye(f) : ye(0)
      });
    }), l = () => {
      a.withText = !!r.default || !!e.description;
    };
    return vn(() => {
      l();
    }), $t(() => {
      l();
    }), qa({
      n: og,
      classes: ig
    }, qv(a), {
      style: o,
      isInset: t
    });
  }
});
dd.render = lg;
const _r = dd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var ck = _r, sg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return sg[n];
  });
}
var Wn = "top", Or = "bottom", Da = "right", yr = "left", wo = "auto", Co = [Wn, Or, Da, yr], So = "start", bt = "end", ug = "clippingParents", vd = "viewport", it = "popper", dg = "reference", Il = /* @__PURE__ */ Co.reduce(function(e, n) {
  return e.concat([n + "-" + So, n + "-" + bt]);
}, []), fd = /* @__PURE__ */ [].concat(Co, [wo]).reduce(function(e, n) {
  return e.concat([n, n + "-" + So, n + "-" + bt]);
}, []), vg = "beforeRead", fg = "read", cg = "afterRead", mg = "beforeMain", pg = "main", hg = "afterMain", gg = "beforeWrite", yg = "write", bg = "afterWrite", ci = [vg, fg, cg, mg, pg, hg, gg, yg, bg];
function Gn(e) {
  return e.split("-")[0];
}
var wg = {
  start: "end",
  end: "start"
};
function Bl(e) {
  return e.replace(/start|end/g, function(n) {
    return wg[n];
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
function Aa(e) {
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
function Ir(e) {
  return ((Aa(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var vt = Math.max, Nl = Math.min, Ja = Math.round;
function mi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function cd() {
  return !/^((?!chrome|android).)*safari/i.test(mi());
}
function Qa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && $n(e) && (t = e.offsetWidth > 0 && Ja(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ja(a.height) / e.offsetHeight || 1);
  var l = Aa(e) ? En(e) : window, i = l.visualViewport, s = !cd() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
  return Qa(Ir(e)).left + Wi(e).scrollLeft;
}
function Cg(e, n) {
  var r = En(e), a = Ir(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = cd();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Gi(e),
    y: s
  };
}
function Ln(e) {
  return En(e).getComputedStyle(e);
}
function Sg(e) {
  var n, r = Ir(e), a = Wi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = vt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = vt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Gi(e), s = -a.scrollTop;
  return Ln(t || r).direction === "rtl" && (i += vt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Fn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ko(e) {
  return Fn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ji(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ir(e)
  );
}
function qi(e) {
  var n = Ln(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function md(e) {
  return ["html", "body", "#document"].indexOf(Fn(e)) >= 0 ? e.ownerDocument.body : $n(e) && qi(e) ? e : md(ko(e));
}
function ft(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = md(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = En(a), l = t ? [o].concat(o.visualViewport || [], qi(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ft(ko(l)))
  );
}
function kg(e) {
  return ["table", "td", "th"].indexOf(Fn(e)) >= 0;
}
function Dl(e) {
  return !$n(e) || // https://github.com/popperjs/popper-core/issues/837
  Ln(e).position === "fixed" ? null : e.offsetParent;
}
function $g(e) {
  var n = /firefox/i.test(mi()), r = /Trident/i.test(mi());
  if (r && $n(e)) {
    var a = Ln(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ko(e);
  for (ji(t) && (t = t.host); $n(t) && ["html", "body"].indexOf(Fn(t)) < 0; ) {
    var o = Ln(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Xi(e) {
  for (var n = En(e), r = Dl(e); r && kg(r) && Ln(r).position === "static"; )
    r = Dl(r);
  return r && (Fn(r) === "html" || Fn(r) === "body" && Ln(r).position === "static") ? n : r || $g(e) || n;
}
function Tg(e, n) {
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
function Pg(e, n) {
  var r = Qa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Al(e, n, r) {
  return n === vd ? pi(Cg(e, r)) : Aa(n) ? Pg(n, r) : pi(Sg(Ir(e)));
}
function Og(e) {
  var n = ft(ko(e)), r = ["absolute", "fixed"].indexOf(Ln(e).position) >= 0, a = r && $n(e) ? Xi(e) : e;
  return Aa(a) ? n.filter(function(t) {
    return Aa(t) && Tg(t, a) && Fn(t) !== "body";
  }) : [];
}
function Vg(e, n, r, a) {
  var t = n === "clippingParents" ? Og(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Al(e, u, a);
    return s.top = vt(d.top, s.top), s.right = Nl(d.right, s.right), s.bottom = Nl(d.bottom, s.bottom), s.left = vt(d.left, s.left), s;
  }, Al(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function wt(e) {
  return e.split("-")[1];
}
function Mg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pd(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Gn(a) : null, o = a ? wt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Wn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case Or:
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
    case yr:
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
  var u = t ? Mg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case So:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case bt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Eg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ig(e) {
  return Object.assign({}, Eg(), e);
}
function Bg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function hd(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? ug : i, u = r.rootBoundary, d = u === void 0 ? vd : u, v = r.elementContext, f = v === void 0 ? it : v, m = r.altBoundary, g = m === void 0 ? !1 : m, b = r.padding, y = b === void 0 ? 0 : b, C = Ig(typeof y != "number" ? y : Bg(y, Co)), V = f === it ? dg : it, $ = e.rects.popper, S = e.elements[g ? V : f], M = Vg(Aa(S) ? S : S.contextElement || Ir(e.elements.popper), s, d, l), E = Qa(e.elements.reference), T = pd({
    reference: E,
    element: $,
    strategy: "absolute",
    placement: t
  }), p = pi(Object.assign({}, $, T)), P = f === it ? p : E, j = {
    top: M.top - P.top + C.top,
    bottom: P.bottom - M.bottom + C.bottom,
    left: M.left - P.left + C.left,
    right: P.right - M.right + C.right
  }, R = e.modifiersData.offset;
  if (f === it && R) {
    var Z = R[t];
    Object.keys(j).forEach(function(J) {
      var z = [Da, Or].indexOf(J) >= 0 ? 1 : -1, L = [Wn, Or].indexOf(J) >= 0 ? "y" : "x";
      j[J] += Z[L] * z;
    });
  }
  return j;
}
function Ng(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? fd : s, d = wt(a), v = d ? i ? Il : Il.filter(function(g) {
    return wt(g) === d;
  }) : Co, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, b) {
    return g[b] = hd(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gn(b)], g;
  }, {});
  return Object.keys(m).sort(function(g, b) {
    return m[g] - m[b];
  });
}
function Dg(e) {
  if (Gn(e) === wo)
    return [];
  var n = Yt(e);
  return [Bl(e), n, Bl(n)];
}
function Ag(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, g = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, y = n.options.placement, C = Gn(y), V = C === y, $ = s || (V || !g ? [Yt(y)] : Dg(y)), S = [y].concat($).reduce(function(X, _) {
      return X.concat(Gn(_) === wo ? Ng(n, {
        placement: _,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: b
      }) : _);
    }, []), M = n.rects.reference, E = n.rects.popper, T = /* @__PURE__ */ new Map(), p = !0, P = S[0], j = 0; j < S.length; j++) {
      var R = S[j], Z = Gn(R), J = wt(R) === So, z = [Wn, Or].indexOf(Z) >= 0, L = z ? "width" : "height", F = hd(n, {
        placement: R,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), G = z ? J ? Da : yr : J ? Or : Wn;
      M[L] > E[L] && (G = Yt(G));
      var oe = Yt(G), I = [];
      if (o && I.push(F[Z] <= 0), i && I.push(F[G] <= 0, F[oe] <= 0), I.every(function(X) {
        return X;
      })) {
        P = R, p = !1;
        break;
      }
      T.set(R, I);
    }
    if (p)
      for (var B = g ? 3 : 1, W = function(_) {
        var ve = S.find(function(Ce) {
          var Ee = T.get(Ce);
          if (Ee)
            return Ee.slice(0, _).every(function(ae) {
              return ae;
            });
        });
        if (ve)
          return P = ve, "break";
      }, re = B; re > 0; re--) {
        var H = W(re);
        if (H === "break")
          break;
      }
    n.placement !== P && (n.modifiersData[a]._skip = !0, n.placement = P, n.reset = !0);
  }
}
const zg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ag,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Lg(e, n, r) {
  var a = Gn(e), t = [yr, Wn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [yr, Da].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Rg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = fd.reduce(function(d, v) {
    return d[v] = Lg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const Ug = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Rg
};
function Hg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fg(e) {
  return e === En(e) || !$n(e) ? Wi(e) : Hg(e);
}
function Yg(e) {
  var n = e.getBoundingClientRect(), r = Ja(n.width) / e.offsetWidth || 1, a = Ja(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function jg(e, n, r) {
  r === void 0 && (r = !1);
  var a = $n(n), t = $n(n) && Yg(n), o = Ir(n), l = Qa(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Fn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  qi(o)) && (i = Fg(n)), $n(n) ? (s = Qa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Gi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Wg(e) {
  var n = Qa(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Gg(e) {
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
function qg(e) {
  var n = Gg(e);
  return ci.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Xg(e) {
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
var Br = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Kg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', zl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Zg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), zl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(rr(Br, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(rr(Br, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ci.indexOf(n.phase) < 0 && console.error(rr(Br, n.name, '"phase"', "either " + ci.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(rr(Br, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(rr(Br, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(rr(Br, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(rr(Br, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + zl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(rr(Kg, String(n.name), a, a));
      });
    });
  });
}
function Jg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Qg(e) {
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
var Ll = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", _g = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Rl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ul() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function xg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Rl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Rl, o),
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
          reference: Aa(i) ? ft(i) : i.contextElement ? ft(i.contextElement) : [],
          popper: ft(s)
        };
        var $ = qg(Qg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = $.filter(function(R) {
          return R.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Jg([].concat($, d.options.modifiers), function(R) {
            var Z = R.name;
            return Z;
          });
          if (Zg(S), Gn(d.options.placement) === wo) {
            var M = d.orderedModifiers.find(function(R) {
              var Z = R.name;
              return Z === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var E = Ln(s), T = E.marginTop, p = E.marginRight, P = E.marginBottom, j = E.marginLeft;
          [T, p, P, j].some(function(R) {
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
          var C = d.elements, V = C.reference, $ = C.popper;
          if (!Ul(V, $)) {
            process.env.NODE_ENV !== "production" && console.error(Ll);
            return;
          }
          d.rects = {
            reference: jg(V, Xi($), d.options.strategy === "fixed"),
            popper: Wg($)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
            return d.modifiersData[R.name] = Object.assign({}, R.data);
          });
          for (var S = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(_g);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var E = d.orderedModifiers[M], T = E.fn, p = E.options, P = p === void 0 ? {} : p, j = E.name;
            typeof T == "function" && (d = T({
              state: d,
              options: P,
              name: j,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Xg(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Ul(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Ll), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var C = y.name, V = y.options, $ = V === void 0 ? {} : V, S = y.effect;
        if (typeof S == "function") {
          var M = S({
            state: d,
            name: C,
            instance: m,
            options: $
          }), E = function() {
          };
          v.push(M || E);
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
var At = {
  passive: !0
};
function ey(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = En(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, At);
  }), i && s.addEventListener("resize", r.update, At), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, At);
    }), i && s.removeEventListener("resize", r.update, At);
  };
}
const ny = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ey,
  data: {}
};
function ry(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = pd({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const ay = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ry,
  data: {}
};
var ty = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function oy(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ja(n * t) / t || 0,
    y: Ja(r * t) / t || 0
  };
}
function Hl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, b = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = y.x, b = y.y;
  var C = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), $ = yr, S = Wn, M = window;
  if (u) {
    var E = Xi(r), T = "clientHeight", p = "clientWidth";
    if (E === En(r) && (E = Ir(r), Ln(E).position !== "static" && i === "absolute" && (T = "scrollHeight", p = "scrollWidth")), E = E, t === Wn || (t === yr || t === Da) && o === bt) {
      S = Or;
      var P = v && E === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[T]
      );
      b -= P - a.height, b *= s ? 1 : -1;
    }
    if (t === yr || (t === Wn || t === Or) && o === bt) {
      $ = Da;
      var j = v && E === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[p]
      );
      m -= j - a.width, m *= s ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: i
  }, u && ty), Z = d === !0 ? oy({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = Z.x, b = Z.y, s) {
    var J;
    return Object.assign({}, R, (J = {}, J[S] = V ? "0" : "", J[$] = C ? "0" : "", J.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", J));
  }
  return Object.assign({}, R, (n = {}, n[S] = V ? b + "px" : "", n[$] = C ? m + "px" : "", n.transform = "", n));
}
function iy(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = Ln(n.elements.popper).transitionProperty || "";
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
const ly = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: iy,
  data: {}
};
function sy(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !$n(o) || !Fn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function uy(e) {
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
      !$n(t) || !Fn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const dy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: sy,
  effect: uy,
  requires: ["computeStyles"]
};
var vy = [ny, ay, ly, dy], fy = /* @__PURE__ */ xg({
  defaultModifiers: vy
});
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
function Fl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yl(e) {
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
function gd(e) {
  var n = O(null), r = O(null), a = O({
    width: 0,
    height: 0
  }), t = Ds(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(T, p) {
      p ? (S(), w(e.onOpen)) : w(e.onClose);
    }
  }), {
    zIndex: o
  } = Ot(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: T,
      height: p
    } = tt(n.value);
    a.value = {
      width: Ge(T),
      height: Ge(p)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, M());
  }, v = /* @__PURE__ */ function() {
    var T = Yl(function* () {
      e.trigger === "hover" && (s = !1, yield zn(), !i && E());
    });
    return function() {
      return T.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var T = Yl(function* () {
      e.trigger === "hover" && (i = !1, yield zn(), !s && E());
    });
    return function() {
      return T.apply(this, arguments);
    };
  }(), g = () => {
    e.closeOnClickReference && t.value ? E() : M();
  }, b = () => {
    E();
  }, y = (T) => {
    e.trigger === "click" && (b(), w(e.onClickOutside, T));
  }, C = () => {
    u();
    var T = {
      x: Ge(e.offsetX),
      y: Ge(e.offsetY)
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
  }, V = () => {
    var {
      placement: T,
      skidding: p,
      distance: P
    } = C(), j = [eo({}, zg, {
      enabled: t.value
    }), eo({}, Ug, {
      options: {
        offset: [p, P]
      }
    })];
    return {
      placement: T,
      modifiers: j
    };
  }, $ = () => e.reference ? n.value.querySelector(e.reference) : n.value, S = () => {
    l.setOptions(V());
  }, M = () => {
    var {
      disabled: T
    } = e;
    T || (t.value = !0, w(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, w(e["onUpdate:show"], !1);
  };
  return Bs($, "click", y), le(() => e.offsetX, S), le(() => e.offsetY, S), le(() => e.placement, S), le(() => e.disabled, E), no(() => {
    var T;
    l = fy((T = $()) != null ? T : n.value, r.value, V());
  }), ao(() => {
    l.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: g,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: b,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: S,
    open: M,
    close: E
  };
}
function cy(e) {
  return ["click", "hover"].includes(e);
}
function my(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function py(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var hy = {
  type: {
    type: String,
    default: "default",
    validator: py
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
    validator: cy
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: my
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOutside: U(),
  "onUpdate:show": U()
}, {
  n: gy,
  classes: yy
} = ne("tooltip");
function by(e, n) {
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
    [Y(e.$slots, "default"), (h(), be(Mr, {
      to: e.teleport
    }, [Q(Le, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed,
      persisted: ""
    }, {
      default: fe(() => [ke(N(
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
        [N(
          "div",
          {
            style: q({
              background: e.color,
              width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
            }),
            class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
          },
          [Y(e.$slots, "content", {}, () => [Se(
            te(e.content),
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
var yd = ee({
  name: "VarTooltip",
  props: hy,
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
      resize: g
    } = gd(e);
    return {
      toSizeUnit: ye,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: gy,
      classes: yy,
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
yd.render = by;
const br = yd;
br.install = function(e) {
  e.component(br.name, br);
};
var mk = br;
function wy(e) {
  return ["click"].includes(e);
}
var Cy = {
  expandTrigger: {
    type: String,
    validator: wy
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
  n: Sy,
  classes: ky
} = ne("ellipsis"), $y = {
  key: 0
};
function Ty(e, n) {
  var r = ie("var-tooltip");
  return h(), be(
    r,
    Tt(to(e.tooltip)),
    {
      content: fe(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), k(
          "span",
          $y,
          te(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: fe(() => [N(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: q(e.rootStyles),
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
var bd = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: br
  },
  props: Cy,
  setup(e) {
    var n = O(!1), r = D(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = D(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : hi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: Sy,
      classes: ky,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
bd.render = Ty;
const xr = bd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var pk = xr;
function Py(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function Oy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function Vy(e) {
  return ["click", "hover"].includes(e);
}
var My = {
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
    validator: fu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: Py
  },
  direction: {
    type: String,
    default: "top",
    validator: Oy
  },
  trigger: {
    type: String,
    default: "click",
    validator: Vy
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
function jl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  classes: Wl,
  n: fn
} = ne("fab");
const ea = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: My,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Ds(e, "active"), o = O(null), {
      disabled: l
    } = vo(), i = (f, m, g) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (g === 0) {
          w(e.onClick, t.value, f);
          return;
        }
        t.value = m, w(e.onClick, t.value, f), w(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, w(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, w(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : ke(Q(nn, {
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
        class: Wl([t.value, fn("trigger-active-icon"), fn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: fn("--trigger-icon-animation")
      }, null)]
    }), [[Qn, e.show]]), v = () => {
      var f, m, g = Ns((m = w(r.default)) != null ? m : []);
      return Q("div", Ne({
        class: Wl(fn(), fn("--position-" + e.position), fn("--direction-" + e.direction), [e.fixed, fn("--fixed"), fn("--absolute")], [e.safeArea, fn("--safe-area")]),
        style: {
          zIndex: A(e.zIndex),
          top: ye(e.top),
          bottom: ye(e.bottom),
          left: ye(e.left),
          right: ye(e.right)
        },
        ref: o,
        onClick: (b) => i(b, !t.value, g.length),
        onMouseleave: () => s(!1, g.length),
        onMouseenter: () => s(!0, g.length)
      }, a), [Q(Le, {
        name: fn("--active-transition")
      }, jl(f = d()) ? f : {
        default: () => [f]
      }), Q(Le, {
        name: fn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Q("div", {
          class: fn("actions"),
          onClick: (b) => b.stopPropagation()
        }, [g.map((b) => Q("div", {
          class: fn("action")
        }, [b]))]), [[Qn, e.show && t.value && g.length]])]
      })]);
    };
    return le(() => e.trigger, () => {
      t.value = !1;
    }), le(() => e.disabled, () => {
      t.value = !1;
    }), Bs(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Q(Mr, {
          to: f,
          disabled: l.value
        }, jl(m = v()) ? m : {
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
var hk = ea;
function Ey(e) {
  return ["start", "end"].includes(e);
}
var Iy = {
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
    validator: Ey
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
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
function By(e) {
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
  n: Ny
} = ne("form");
function Dy(e, n) {
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
var wd = ee({
  name: "VarForm",
  props: Iy,
  setup(e) {
    var n = D(() => e.disabled), r = D(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Ym(), o = (d) => {
      setTimeout(() => {
        var v = kr(d), f = v === window ? 0 : sl(v), m = sl(d) - f - Ge(e.scrollToErrorOffsetY);
        ht(v, {
          top: m,
          animation: zo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = By(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: C
          } = y;
          return C();
        }));
        if (e.scrollToError) {
          var [, f] = Qv(v, (y) => y === !1, e.scrollToError), m = f > -1;
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
      disabled: n,
      readonly: r
    };
    return t(u), {
      n: Ny,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
wd.render = Dy;
const qn = wd;
qn.install = function(e) {
  e.component(qn.name, qn);
};
qn.useValidation = Vn;
qn.useForm = Mn;
var gk = qn;
function Ay(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var zy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ay,
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
  n: Ly,
  classes: Ry
} = ne("image"), Uy = ["alt", "title", "lazy-loading", "lazy-error"], Hy = ["alt", "title", "src"];
function Fy(e, n) {
  var r = De("lazy"), a = De("ripple");
  return ke((h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? ke((h(), k("img", {
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
    }, null, 46, Uy)), [[r, e.src]]) : x("v-if", !0), !e.lazy && !e.showErrorSlot ? (h(), k("img", {
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
    }, null, 46, Hy)) : x("v-if", !0), e.showErrorSlot ? Y(e.$slots, "error", {
      key: 2
    }) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Cd = ee({
  name: "VarImage",
  directives: {
    Lazy: gt,
    Ripple: qe
  },
  props: zy,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(!1), t = (i) => {
      a.value = !!r.error, w(e.onError, i);
    }, o = (i) => {
      var s = i.currentTarget;
      if (e.lazy) {
        if (s._lazy.state === "success") {
          w(e.onLoad, i);
          return;
        }
        s._lazy.state === "error" && t(i);
      } else
        w(e.onLoad, i);
    }, l = (i) => {
      w(e.onClick, i);
    };
    return le(() => e.src, () => {
      a.value = !1;
    }), {
      n: Ly,
      classes: Ry,
      showErrorSlot: a,
      toSizeUnit: ye,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
Cd.render = Fy;
const na = Cd;
na.install = function(e) {
  e.component(na.name, na);
};
var yk = na, Sd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Yy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = on(Sd);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var kd = {
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
function ql(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Xl(e) {
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
var jy = 250, Wy = 20, {
  n: Gy,
  classes: qy
} = ne("swipe"), Xy = ["onClick"];
function Ky(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [N(
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
      [Y(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), Y(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), k(
        Me,
        null,
        Ue(e.length, (r, a) => (h(), k("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: q({
            background: e.indicatorColor
          }),
          key: r,
          onClick: (t) => e.to(a)
        }, null, 14, Xy))),
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
var $d = ee({
  name: "VarSwipe",
  props: kd,
  setup(e) {
    var n = O(null), r = O(0), a = D(() => e.vertical), t = O(0), o = O(0), l = O(!1), i = O(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Yy(), {
      popup: v,
      bindPopup: f
    } = $f(), m = !1, g = !1, b = -1, y, C, V, $, S, M = (H) => s.find((X) => {
      var {
        index: _
      } = X;
      return _.value === H;
    }), E = () => {
      e.loop && (o.value >= 0 && M(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && M(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (M(d.value - 1).setTranslate(0), M(0).setTranslate(0)));
    }, T = (H) => {
      var X = dn(H) ? H : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: _
      } = e;
      return X <= -1 ? _ ? -1 : 0 : X >= d.value ? _ ? d.value : d.value - 1 : X;
    }, p = (H) => {
      var {
        loop: X
      } = e;
      return H === -1 ? X ? d.value - 1 : 0 : H === d.value ? X ? 0 : d.value - 1 : H;
    }, P = (H) => e.loop ? H < 0 ? d.value + H : H >= d.value ? H - d.value : H : oo(H, 0, d.value - 1), j = (H) => {
      var X = o.value >= r.value, _ = o.value <= -t.value, ve = 0, Ce = -(t.value - r.value);
      l.value = !0, (X || _) && (l.value = !0, o.value = _ ? ve : Ce, M(0).setTranslate(0), M(d.value - 1).setTranslate(0)), lo(() => {
        l.value = !1, w(H);
      });
    }, R = () => {
      m || (i.value = P(A(e.initialIndex)), m = !0);
    }, Z = () => {
      var {
        autoplay: H
      } = e;
      !H || d.value <= 1 || (J(), b = window.setTimeout(() => {
        I(), Z();
      }, A(H)));
    }, J = () => {
      b && clearTimeout(b);
    }, z = (H, X) => {
      if (H > X && H > 10)
        return "horizontal";
      if (X > H && X > 10)
        return "vertical";
    }, L = (H) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: X,
          clientY: _
        } = H.touches[0];
        y = X, C = _, V = performance.now(), g = !0, J(), j(() => {
          l.value = !0;
        });
      }
    }, F = (H) => {
      var {
        touchable: X,
        vertical: _
      } = e;
      if (!(!g || !X)) {
        var {
          clientX: ve,
          clientY: Ce
        } = H.touches[0], Ee = Math.abs(ve - y), ae = Math.abs(Ce - C), de = z(Ee, ae), me = _ ? "vertical" : "horizontal";
        if (de === me) {
          H.preventDefault();
          var Pe = $ !== void 0 ? ve - $ : 0, Fe = S !== void 0 ? Ce - S : 0;
          $ = ve, S = Ce, o.value += _ ? Fe : Pe, E();
        }
      }
    }, G = () => {
      if (g) {
        var {
          vertical: H,
          onChange: X
        } = e, _ = H ? S < C : $ < y, ve = Math.abs(H ? C - S : y - $), Ce = performance.now() - V <= jy && ve >= Wy, Ee = Ce ? T(_ ? i.value + 1 : i.value - 1) : T();
        g = !1, l.value = !1, $ = void 0, S = void 0, o.value = Ee * -r.value;
        var ae = i.value;
        i.value = p(Ee), Z(), ae !== i.value && w(X, i.value);
      }
    }, oe = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((H) => {
        H.setTranslate(0);
      }), Z(), setTimeout(() => {
        l.value = !1;
      }));
    }, I = (H) => {
      if (!(d.value <= 1)) {
        R();
        var {
          loop: X,
          onChange: _
        } = e, ve = i.value;
        i.value = P(ve + 1), (H == null ? void 0 : H.event) !== !1 && w(_, i.value), j(() => {
          if (ve === d.value - 1 && X) {
            M(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          ve !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, B = (H) => {
      if (!(d.value <= 1)) {
        R();
        var {
          loop: X,
          onChange: _
        } = e, ve = i.value;
        i.value = P(ve - 1), (H == null ? void 0 : H.event) !== !1 && w(_, i.value), j(() => {
          if (ve === 0 && X) {
            M(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          ve !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, W = (H, X) => {
      if (!(d.value <= 1 || H === i.value)) {
        H = H < 0 ? 0 : H, H = H >= d.value ? d.value : H;
        var _ = H > i.value ? I : B, ve = Math.abs(H - i.value);
        Array.from({
          length: ve
        }).forEach((Ce, Ee) => {
          _({
            event: Ee === ve - 1 ? X == null ? void 0 : X.event : !1
          });
        });
      }
    }, re = {
      size: r,
      vertical: a
    };
    return u(re), w(f, null), le(() => d.value, /* @__PURE__ */ Xl(function* () {
      yield zn(), R(), oe();
    })), v && le(() => v.show.value, /* @__PURE__ */ function() {
      var H = Xl(function* (X) {
        X ? (yield zn(), oe()) : J();
      });
      return function(X) {
        return H.apply(this, arguments);
      };
    }()), Vr(oe), so(J), uo(oe), {
      n: Gy,
      classes: qy,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: L,
      handleTouchmove: F,
      handleTouchend: G,
      next: I,
      prev: B,
      to: W,
      resize: oe,
      toNumber: A
    };
  }
});
$d.render = Ky;
const Xn = $d;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var bk = Xn;
function Zy() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = tn(Sd);
  return e || On("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: Jy
} = ne("swipe-item");
function Qy(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n()),
      style: q({
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
var Td = ee({
  name: "VarSwipeItem",
  setup() {
    var e = O(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Zy(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Jy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Td.render = Qy;
const Kn = Td;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var wk = Kn;
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
var _y = gi({
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
  "onUpdate:show": U(),
  onLongPress: U()
}, Qe(kd, ["loop", "indicator", "onChange"]), Qe(Pt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Kl,
  classes: xy
} = ne("image-preview"), Mo = 12, Zl = 200, eb = 350, Jl = 200, nb = 500, rb = ["onTouchstart"], ab = ["src", "alt"];
function tb(e, n) {
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
      default: fe(() => [(h(!0), k(
        Me,
        null,
        Ue(e.images, (l, i) => (h(), be(r, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: l
        }, {
          default: fe(() => [N("div", {
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
          }, [N("img", {
            class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: l,
            alt: l
          }, null, 10, ab)], 46, rb)]),
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
        return [Y(e.$slots, "indicator", {
          index: i,
          length: s
        }, () => [e.indicator && e.images.length > 1 ? (h(), k(
          "div",
          {
            key: 0,
            class: c(e.n("indicators"))
          },
          te(i + 1) + " / " + te(s),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)])];
      }),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), be(t, {
      key: 0,
      class: c(e.n("close-icon")),
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: e.close
    }, null, 8, ["class", "onClick"])) : x("v-if", !0)]), N(
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
var Pd = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: Xn,
    VarSwipeItem: Kn,
    VarPopup: kn,
    VarIcon: Ve
  },
  inheritAttrs: !1,
  props: _y,
  setup(e) {
    var n = O(!1), r = D(() => {
      var {
        images: I,
        current: B,
        initialIndex: W
      } = e;
      if (W != null)
        return A(W);
      var re = I.findIndex((H) => H === B);
      return re >= 0 ? re : 0;
    }), a = O(1), t = O(0), o = O(0), l = O(void 0), i = O(void 0), s = O(!0), u = O(null), d = null, v = null, f = null, m = null, g = !1, b = D(() => {
      var {
        imagePreventDefault: I,
        show: B
      } = e;
      return B && I;
    }), y = (I, B) => {
      var {
        clientX: W,
        clientY: re
      } = I, {
        clientX: H,
        clientY: X
      } = B;
      return Math.abs(Math.sqrt(Math.pow(H - W, 2) + Math.pow(X - re, 2)));
    }, C = (I, B) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: performance.now(),
      target: B
    }), V = () => {
      a.value = A(e.zoom), s.value = !1, v = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Jl);
    }, $ = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, v = null, l.value = void 0, i.value = void 0;
    }, S = (I) => v ? y(v, I) <= Mo && I.timestamp - v.timestamp <= Zl && v.target === I.target : !1, M = (I) => !I || !d || !v ? !1 : y(d, v) <= Mo && performance.now() - v.timestamp < eb && (I === d.target || I.parentNode === d.target), E = () => {
      window.clearTimeout(m), g = !1, d = null;
    }, T = (I) => {
      if (window.clearTimeout(m), g) {
        g = !1;
        return;
      }
      var B = M(I.target);
      f = window.setTimeout(() => {
        B && z(), d = null;
      }, Zl);
    }, p = (I, B) => {
      window.clearTimeout(f), window.clearTimeout(m);
      var W = C(I.touches[0], I.currentTarget);
      if (d = W, m = window.setTimeout(() => {
        var {
          onLongPress: re
        } = e;
        g = !0, w(re, B);
      }, nb), S(W)) {
        a.value > 1 ? $() : V();
        return;
      }
      v = W;
    }, P = (I) => {
      var {
        offsetWidth: B,
        offsetHeight: W
      } = I, {
        naturalWidth: re,
        naturalHeight: H
      } = I.querySelector("." + Kl("image"));
      return {
        width: B,
        height: W,
        imageRadio: H / re,
        rootRadio: W / B,
        zoom: A(e.zoom)
      };
    }, j = (I) => {
      var {
        zoom: B,
        imageRadio: W,
        rootRadio: re,
        width: H,
        height: X
      } = P(I);
      if (!W)
        return 0;
      var _ = W > re ? X / W : H;
      return Math.max(0, (B * _ - H) / 2) / B;
    }, R = (I) => {
      var {
        zoom: B,
        imageRadio: W,
        rootRadio: re,
        width: H,
        height: X
      } = P(I);
      if (!W)
        return 0;
      var _ = W > re ? X : H * W;
      return Math.max(0, (B * _ - X) / 2) / B;
    }, Z = (I, B, W) => I + B >= W ? W : I + B <= -W ? -W : I + B, J = (I) => {
      if (v) {
        var B = I.currentTarget, W = C(I.touches[0], B);
        if (y(W, v) > Mo && window.clearTimeout(m), a.value > 1) {
          var re = W.clientX - v.clientX, H = W.clientY - v.clientY, X = j(B), _ = R(B);
          t.value = Z(t.value, re, X), o.value = Z(o.value, H, _);
        }
        v = W;
      }
    }, z = () => {
      if (a.value > 1) {
        $(), setTimeout(() => w(e["onUpdate:show"], !1), Jl);
        return;
      }
      w(e["onUpdate:show"], !1);
    }, L = (I) => {
      var B;
      (B = u.value) == null || B.prev(I);
    }, F = (I) => {
      var B;
      (B = u.value) == null || B.next(I);
    }, G = (I, B) => {
      var W;
      (W = u.value) == null || W.to(I, B);
    }, oe = (I) => {
      e.imagePreventDefault && e.show && I.preventDefault();
    };
    return $r(() => document, "contextmenu", oe), le(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: Kl,
      classes: xy,
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
      handleTouchmove: J,
      handleTouchend: T,
      handleTouchcancel: E,
      close: z,
      prev: L,
      next: F,
      to: G
    };
  }
});
Pd.render = tb;
const wr = Pd;
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
var sr, mt = {};
function ob(e) {
  return e === void 0 && (e = {}), He(e) ? ct({}, mt, {
    images: [e]
  }) : Oe(e) ? ct({}, mt, {
    images: e
  }) : ct({}, mt, e);
}
function Rn(e) {
  if (at()) {
    Rn.close();
    var n = ob(e), r = ze(n);
    r.teleport = "body", sr = r;
    var {
      unmountInstance: a
    } = ot(wr, r, {
      onClose: () => w(r.onClose),
      onClosed: () => {
        w(r.onClosed), a(), sr === r && (sr = null);
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
Rn.close = () => {
  if (sr != null) {
    var e = sr;
    sr = null, Ae().then(() => {
      e.show = !1;
    });
  }
};
Rn.setDefaultOptions = (e) => {
  mt = e;
};
Rn.resetDefaultOptions = () => {
  mt = {};
};
wr.install = function(e) {
  e.component(wr.name, wr);
};
Rn.install = function(e) {
  e.component(wr.name, wr);
};
Rn.Component = wr;
var Ck = wr, jt = {
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
function Ql(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function _l(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ql(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ql(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ib,
  classes: lb
} = ne("sticky");
function sb(e, n) {
  return h(), k(
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
    [N(
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
      [Y(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var Od = ee({
  name: "VarSticky",
  props: jt,
  setup(e) {
    var n = O(null), r = O(null), a = O(!1), t = O("0px"), o = O("0px"), l = O("auto"), i = O("auto"), s = O("auto"), u = O("auto"), d = D(() => !e.disabled && e.cssMode), v = D(() => !e.disabled && !e.cssMode && a.value), f = D(() => Ge(e.offsetTop)), m, g = () => {
      var {
        cssMode: $,
        disabled: S
      } = e;
      if (!S) {
        var M = 0;
        if (m !== window) {
          var {
            top: E
          } = rn(m);
          M = E;
        }
        var T = r.value, p = n.value, {
          top: P,
          left: j
        } = rn(p), R = P - M;
        return R <= f.value ? ($ || (l.value = p.offsetWidth + "px", i.value = p.offsetHeight + "px", t.value = M + f.value + "px", o.value = j + "px", s.value = T.offsetWidth + "px", u.value = T.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: R,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var $ = g();
        $ && w(e.onScroll, $.offsetTop, $.isFixed);
      }
    }, y = /* @__PURE__ */ function() {
      var $ = _l(function* () {
        a.value = !1, yield df(), g();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var $ = _l(function* () {
        yield zn(), m = kr(n.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return le(() => e.disabled, y), vn(C), so(V), uo(y), $r(() => window, "scroll", b), {
      n: ib,
      classes: lb,
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
      toNumber: A
    };
  }
});
Od.render = sb;
const Zn = Od;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var Sk = Zn, Vd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function ub() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = on(Vd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function db() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = tn(Vd);
  return r || On("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var vb = {
  index: {
    type: [Number, String]
  }
}, {
  n: fb,
  classes: cb
} = ne("index-anchor");
function mb(e, n) {
  return h(), be(nt(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: fe(() => [N(
      "div",
      Ne({
        class: e.n()
      }, e.$attrs),
      [Y(e.$slots, "default", {}, () => [Se(
        te(e.name),
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
var Md = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Zn
  },
  inheritAttrs: !1,
  props: vb,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = db(), t = O(0), o = O(!1), l = D(() => e.index), i = O(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, g = (y) => {
      o.value = y;
    }, b = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: g
    };
    return a(b), {
      n: fb,
      classes: cb,
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
Md.render = mb;
const ra = Md;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var kk = ra, pb = {
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
function xl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: hb,
  classes: gb
} = ne("index-bar"), yb = ["onClick"];
function bb(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [Y(e.$slots, "default"), N(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), k(
        Me,
        null,
        Ue(e.anchorNameList, (r) => (h(), k("li", {
          key: r,
          class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
          style: q({
            color: e.active === r && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: r,
            manualCall: !0
          })
        }, te(r), 15, yb))),
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
var Ed = ee({
  name: "VarIndexBar",
  props: pb,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = ub(), t = O(""), o = O(null), l = O([]), i = O(), s = D(() => e.sticky), u = D(() => e.stickyCssMode || e.cssMode), d = D(() => Ge(e.stickyOffsetTop)), v = D(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var b = (T, p) => {
      var P = Oi(T) ? T.name.value : T;
      P === i.value || P === void 0 || (i.value = P, (p == null ? void 0 : p.event) !== !1 && w(e.onChange, P));
    }, y = () => {
      if (Vi(f))
        return 0;
      var {
        top: T
      } = rn(f), {
        scrollTop: p
      } = f, {
        top: P
      } = rn(o.value);
      return p - T + P;
    }, C = () => {
      var T = pt(f), p = f === window ? document.body.scrollHeight : f.scrollHeight, P = y();
      r.forEach((j, R) => {
        var Z = j.ownTop.value, J = T - Z + d.value - P, z = R === r.length - 1 ? p : r[R + 1].ownTop.value - j.ownTop.value;
        j.setDisabled(!0), J >= 0 && J < z && t.value === "" && (j.setDisabled(!1), b(j));
      });
    }, V = /* @__PURE__ */ function() {
      var T = zt(function* (p) {
        var {
          anchorName: P,
          manualCall: j = !1,
          options: R
        } = p;
        if (j && w(e.onClick, P), !(P === i.value && !m)) {
          var Z = r.find((F) => {
            var {
              name: G
            } = F;
            return P === G.value;
          });
          if (Z) {
            var J = y(), z = Z.ownTop.value - d.value + J, L = Ei(f);
            t.value = P, b(P, R), yield ht(f, {
              left: L,
              top: z,
              animation: ks,
              duration: A(e.duration)
            }), lo(() => {
              t.value = "";
            });
          }
        }
      });
      return function(P) {
        return T.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var T = zt(function* () {
        yield zn(), f = kr(o.value);
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), S = () => {
      f.addEventListener("scroll", C);
    }, M = () => {
      f.removeEventListener("scroll", C);
    }, E = (T, p) => {
      wn(() => V({
        anchorName: T,
        options: p
      }));
    };
    return le(() => n.value, /* @__PURE__ */ zt(function* () {
      yield zn(), r.forEach((T) => {
        var {
          name: p,
          setOwnTop: P
        } = T;
        p.value && l.value.push(p.value), P();
      });
    })), vn(/* @__PURE__ */ zt(function* () {
      yield $(), S();
    })), ro(M), xa(() => {
      m = !0, M();
    }), Vr(() => {
      !m || i.value === void 0 || (V({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: hb,
      classes: gb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: A,
      scrollTo: E,
      anchorClick: V
    };
  }
});
Ed.render = bb;
const aa = Ed;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var $k = aa;
function wb(e) {
  return ["small", "normal"].includes(e);
}
function Cb(e) {
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
    validator: wb
  },
  variant: {
    type: String,
    default: "standard",
    validator: Cb
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
  n: Eo,
  classes: Sb
} = ne("field-decorator"), kb = ["for"];
function $b(e, n) {
  var r = ie("var-icon");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.color,
          cursor: e.cursor,
          overflow: e.isFloating ? "visible" : "hidden"
        })
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [Y(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), N(
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
        style: q({
          color: e.color
        }),
        for: e.id
      }, [N(
        "span",
        null,
        te(e.placeholder),
        1
        /* TEXT */
      )], 14, kb)) : x("v-if", !0), N(
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
        }, null, 8, ["class", "onClick"])) : x("v-if", !0), Y(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (h(), k(
      Me,
      {
        key: 0
      },
      [e.variant === "outlined" ? (h(), k(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: q({
            borderColor: e.color
          })
        },
        [N(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: q({
              width: e.legendWidth
            })
          },
          [e.placeholder && e.hint ? (h(), be(Mr, {
            key: 0,
            to: "body"
          }, [N(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            te(e.placeholder),
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
          style: q({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [N(
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
var Id = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ve
  },
  props: Ki,
  setup(e, n) {
    var {
      slots: r
    } = n, a = O(null), t = O(""), o = D(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = D(() => e.hint && (!Yn(e.value) || e.isFocus || r["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Yn(f) || m))
        return Eo("--placeholder-hidden");
      if (l.value)
        return Eo("--placeholder-hint");
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
      var b = tt(a.value), y = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + b.width + " * 0.75 + " + y + " * 2)";
    }, u = (v) => {
      w(e.onClear, v);
    }, d = (v) => {
      w(e.onClick, v);
    };
    return uo(s), vn(s), $t(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Eo,
      classes: Sb,
      isEmpty: Yn,
      handleClear: u,
      handleClick: d
    };
  }
});
Id.render = $b;
const Bd = Id;
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
function Tb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var Pb = yi({
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
    validator: Tb
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
}, Qe(Ki, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Ob,
  classes: Vb
} = ne("input"), Mb = ["placeholder", "enterkeyhint"], Eb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Ib = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Bb(e, n) {
  var r = ie("var-field-decorator"), a = ie("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Q(
      r,
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
      ws({
        "append-icon": fe(() => [Y(e.$slots, "append-icon")]),
        default: fe(() => [e.normalizedType === "password" ? (h(), k("input", {
          key: 0,
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: q({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, Mb)) : x("v-if", !0), e.textarea ? (h(), k("textarea", {
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
      `, 46, Eb)) : (h(), k("input", {
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
        }, null, 46, Ib))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: fe(() => [Y(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), Q(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: n[14] || (n[14] = Pn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message", "extra-message"])],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Nd = ee({
  name: "VarInput",
  components: {
    VarFormDetails: xe,
    VarFieldDecorator: Bd
  },
  props: Pb,
  setup(e) {
    var n = O("var-input-" + et().uid), r = O(null), a = O(!1), t = O(!1), o = D(() => e.type === "number" ? "text" : e.type), l = D(() => {
      var {
        maxlength: I,
        modelValue: B
      } = e;
      return I ? Yn(B) ? "0 / " + I : String(B).length + "/" + I : "";
    }), i = D(() => e.disabled || e.readonly ? "" : "text"), s = D(() => {
      var {
        hint: I,
        blurColor: B,
        focusColor: W
      } = e;
      if (!I)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? W || "var(--field-decorator-focus-color)" : B || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Mn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Vn(), b = (I) => {
      Ae(() => {
        var {
          validateTrigger: B,
          rules: W,
          modelValue: re
        } = e;
        f(B, I, W, re);
      });
    }, y = (I) => {
      a.value = !0, w(e.onFocus, I), b("onFocus");
    }, C = (I) => {
      a.value = !1, w(e.onBlur, I), b("onBlur");
    }, V = (I) => {
      var B = I.target, {
        value: W
      } = B;
      return e.type === "number" && (W = P(W)), R(j(W));
    }, $ = () => {
      t.value = !0;
    }, S = (I) => {
      t.value && (t.value = !1, I.target.dispatchEvent(new Event("input")));
    }, M = (I) => {
      if (!t.value) {
        var B = V(I);
        w(e["onUpdate:modelValue"], B), w(e.onInput, B, I), b("onInput");
      }
    }, E = (I) => {
      var B = V(I);
      w(e.onChange, B, I), b("onChange");
    }, T = () => {
      var {
        disabled: I,
        readonly: B,
        clearable: W,
        onClear: re
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || I || B || !W || (w(e["onUpdate:modelValue"], ""), w(re, ""), b("onClear"));
    }, p = (I) => {
      var {
        disabled: B,
        onClick: W
      } = e;
      d != null && d.disabled.value || B || (w(W, I), b("onClick"));
    }, P = (I) => {
      var B = I.indexOf("-"), W = I.indexOf(".");
      return B > -1 && (I = B === 0 ? "-" + I.replace(/-/g, "") : I.replace(/-/g, "")), W > -1 && (I = I.slice(0, W + 1) + I.slice(W).replace(/\./g, "")), I.replace(/[^-0-9.]/g, "");
    }, j = (I) => e.modelModifiers.trim ? I.trim() : I, R = (I) => e.maxlength ? I.slice(0, A(e.maxlength)) : I, Z = (I) => {
      var {
        disabled: B,
        readonly: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || B || W || I.stopPropagation();
    };
    function J(I) {
      var {
        disabled: B
      } = e;
      d != null && d.disabled.value || B || I.target === r.value || (F(), I.preventDefault());
    }
    var z = () => {
      w(e["onUpdate:modelValue"], ""), g();
    }, L = () => m(e.rules, e.modelValue), F = () => {
      var I;
      (I = r.value) == null || I.focus();
    }, G = () => {
      r.value.blur();
    }, oe = {
      reset: z,
      validate: L,
      resetValidation: g
    };
    return w(u, oe), vn(() => {
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
      n: Ob,
      classes: Vb,
      isEmpty: Yn,
      handleFocus: y,
      handleBlur: C,
      handleInput: M,
      handleChange: E,
      handleClear: T,
      handleClick: p,
      handleTouchstart: Z,
      handleCompositionStart: $,
      handleCompositionEnd: S,
      handleMousedown: J,
      validate: L,
      resetValidation: g,
      reset: z,
      focus: F,
      blur: G
    };
  }
});
Nd.render = Bb;
const Cr = Nd;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var Tk = Cr;
function Nb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Db(e) {
  return ["always", "hover", "none"].includes(e);
}
var Ab = {
  type: {
    type: String,
    default: "default",
    validator: Nb
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
    validator: Db
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
  n: zb,
  classes: Lb
} = ne("link");
function Rb(e, n) {
  return h(), be(nt(e.tag), Ne(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: fe(() => [Y(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
var Dd = ee({
  name: "VarLink",
  props: Ab,
  setup(e) {
    var n = D(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = D(() => {
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
      o || w(l, t);
    };
    return {
      n: zb,
      classes: Lb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ye
    };
  }
});
Dd.render = Rb;
const ta = Dd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var Pk = ta, Ub = {
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
}, Ad = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Hb() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = on(Ad);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var zd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Fb() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = tn(Ad);
  return n || On("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Yb() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = on(zd);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function jb() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = tn(zd);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
function es(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Wb(e) {
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
  n: Gb,
  classes: qb
} = ne("list");
function Xb(e, n) {
  var r = ie("var-loading"), a = De("ripple");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [Y(e.$slots, "default"), e.loading ? Y(e.$slots, "loading", {
      key: 0
    }, () => [N(
      "div",
      {
        class: c(e.n("loading"))
      },
      [N(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        te(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Q(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [N(
      "div",
      {
        class: c(e.n("finished"))
      },
      te(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => [ke((h(), k(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [Se(
        te(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : x("v-if", !0), N(
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
var Ld = ee({
  name: "VarList",
  directives: {
    Ripple: qe
  },
  components: {
    VarLoading: Dn
  },
  props: Ub,
  setup(e) {
    var {
      tabItem: n,
      bindTabItem: r
    } = jb(), a = O(null), t = O(null), o, l = () => {
      w(e["onUpdate:error"], !1), w(e["onUpdate:loading"], !0), w(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = rn(o), {
        bottom: v
      } = rn(t.value);
      return Math.floor(v) - Ge(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Wb(function* () {
        yield Ae(), !(e.loading || e.finished || e.error || (n == null ? void 0 : n.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return w(r, {}), n && le(() => n.current.value, u), le(() => [e.loading, e.error, e.finished], u), vn(() => {
      o = kr(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), so(s), {
      pack: Je,
      listEl: a,
      detectorEl: t,
      dt: io,
      isNumber: dn,
      load: l,
      check: u,
      n: Gb,
      classes: qb
    };
  }
});
Ld.render = Xb;
const oa = Ld;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var Ok = oa, Kb = {
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
  classes: Zb,
  n: ns
} = ne("loading-bar");
const Jb = ee({
  name: "VarLoadingBar",
  props: Kb,
  setup(e) {
    return () => Q("div", {
      class: Zb(ns(), [e.error, ns("--error")]),
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
var Rd, Ud, $o, Hd, rs, Fd = {}, Qb = {
  value: 0,
  opacity: 0,
  error: !1
}, _e = ze(Qb), _b = (e) => {
  Object.assign(_e, e);
}, xb = (e) => {
  Object.assign(_e, e), Fd = e;
}, e0 = () => {
  Object.keys(Fd).forEach((e) => {
    _e[e] !== void 0 && (_e[e] = void 0);
  });
}, Yd = () => {
  rs || (rs = !0, ot(Jb, _e));
}, Zi = () => {
  Rd = window.setTimeout(() => {
    if (!(_e.value >= 95)) {
      var e = Math.random();
      _e.value < 70 && (e = Math.round(5 * Math.random())), _e.value += e, Zi();
    }
  }, 200);
}, Ji = () => {
  window.clearTimeout(Ud), window.clearTimeout(Rd), window.clearTimeout($o), window.clearTimeout(Hd);
}, n0 = () => {
  Ji(), _e.error = !1, _e.value = 0, Yd(), $o = window.setTimeout(() => {
    _e.opacity = 1;
  }, 200), Zi();
}, jd = () => {
  Ji(), _e.value = 100, $o = window.setTimeout(() => {
    _e.opacity = 0, Ud = window.setTimeout(() => {
      _e.error = !1;
    }, 250);
  }, 300);
}, r0 = () => {
  Ji(), _e.error = !0, _e.value === 100 && (_e.value = 0), Yd(), $o = window.setTimeout(() => {
    _e.opacity = 1;
  }, 200), Zi(), Hd = window.setTimeout(jd, 300);
}, Wd = {
  start: n0,
  finish: jd,
  error: r0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: _b,
  setDefaultOptions: xb,
  resetDefaultOptions: e0
}, Vk = Wd;
const bi = Wd;
function a0(e) {
  return ["click", "hover"].includes(e);
}
function t0(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var o0 = {
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
    validator: a0
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: t0
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
  closeOnClickReference: {
    type: Boolean,
    default: !1
  },
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOutside: U(),
  "onUpdate:show": U()
}, {
  n: i0,
  classes: l0
} = ne("menu");
function s0(e, n) {
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
    [Y(e.$slots, "default"), (h(), be(Mr, {
      to: e.teleport
    }, [Q(Le, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.onClosed,
      persisted: ""
    }, {
      default: fe(() => [ke(N(
        "div",
        {
          ref: "popover",
          style: q({
            zIndex: e.zIndex,
            width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
          }),
          class: c(e.classes(e.n("menu"), e.n("$--box"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
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
      ), [[Qn, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Gd = ee({
  name: "VarMenu",
  props: o0,
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
      resize: g
    } = gd(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: gn,
      toSizeUnit: ye,
      n: i0,
      classes: l0,
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
Gd.render = s0;
const Jn = Gd;
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
var Mk = Jn, qd = Symbol("SELECT_BIND_OPTION_KEY");
function u0() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = on(qd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function d0() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = tn(qd);
  return r || On("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var v0 = {
  label: {},
  value: {}
}, {
  n: f0,
  classes: c0
} = ne("option");
function m0(e, n) {
  var r = ie("var-checkbox"), a = De("ripple");
  return ke((h(), k(
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
    [N(
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
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : x("v-if", !0), N(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [Y(e.$slots, "default", {}, () => [Se(
        te(e.label),
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
var Xd = ee({
  name: "VarOption",
  directives: {
    Ripple: qe
  },
  components: {
    VarCheckbox: pr
  },
  props: v0,
  setup(e) {
    var n = O(!1), r = D(() => n.value), a = D(() => e.label), t = D(() => e.value), {
      select: o,
      bindSelect: l
    } = d0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      n.value = !n.value, u(g);
    }, f = () => u(g), m = (b) => {
      n.value = b;
    }, g = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return le([() => e.label, () => e.value], d), l(g), {
      n: f0,
      classes: c0,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Xd.render = m0;
const ia = Xd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Ek = ia, p0 = {
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
function h0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: as
} = ne("overlay");
const la = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: p0,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ot(() => e.show, 1), {
      disabled: o
    } = vo(), l = () => {
      w(e.onClick), w(e["onUpdate:show"], !1);
    };
    fo(() => e.show, () => e.lockScroll);
    var i = () => Q("div", Ne({
      class: as(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [w(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return Q(Le, {
        name: as("--fade")
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
        return Q(Mr, {
          to: u,
          disabled: o.value
        }, h0(d = s()) ? d : {
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
var Ik = la, g0 = {
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
  n: y0,
  classes: b0
} = ne("pagination"), w0 = ["item-mode", "onClick"];
function C0(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), l = De("ripple");
  return h(), k(
    "ul",
    {
      class: c(e.n())
    },
    [ke((h(), k(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [Y(e.$slots, "prev", {}, () => [Q(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
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
        "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleCurrentValue = i),
        onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
        onKeydown: n[3] || (n[3] = nl((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), N("span", null, [Se(
        " / " + te(e.pageCount) + " ",
        1
        /* TEXT */
      ), N(
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
      Me,
      {
        key: 1
      },
      Ue(e.pageList, (i, s) => ke((h(), k("li", {
        key: s,
        "item-mode": e.getMode(i, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(i, s)
      }, [Se(
        te(i),
        1
        /* TEXT */
      )], 10, w0)), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((h(), k(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [Y(e.$slots, "next", {}, () => [Q(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
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
        "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i)
      }, {
        menu: fe(() => [(h(!0), k(
          Me,
          null,
          Ue(e.sizeOption, (i, s) => ke((h(), be(t, {
            class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(i)
          }, {
            default: fe(() => [Se(
              te(i) + te(e.pack.paginationItem) + " / " + te(e.pack.paginationPage),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["class", "onClick"])), [[l]])),
          128
          /* KEYED_FRAGMENT */
        ))]),
        default: fe(() => [N(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: n[5] || (n[5] = Pn(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [N(
            "span",
            null,
            te(e.size) + te(e.pack.paginationItem) + " / " + te(e.pack.paginationPage),
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
      [Se(
        te(e.pack.paginationJump) + " ",
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
    )) : x("v-if", !0), e.totalText ? (h(), k(
      "li",
      {
        key: 4,
        class: c(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
      },
      te(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Kd = ee({
  name: "VarPagination",
  components: {
    VarMenu: Jn,
    VarIcon: Ve,
    VarCell: mr,
    VarInput: Cr
  },
  directives: {
    Ripple: qe
  },
  props: g0,
  setup(e) {
    var n = O(!1), r = O(""), a = O("1"), t = O(!1), o = O(!1), l = O(A(e.current) || 1), i = O(A(e.size) || 10), s = O([]), u = D(() => Math.ceil(e.maxPagerCount / 2)), d = D(() => Math.ceil(A(e.total) / A(i.value))), v = D(() => {
      var S = i.value * (l.value - 1) + 1, M = Math.min(i.value * l.value, A(e.total));
      return [S, M];
    }), f = D(() => e.showTotal ? e.showTotal(A(e.total), v.value) : ""), m = (S, M) => dn(S) ? !1 : M === 1 ? t.value : o.value, g = (S, M) => dn(S) ? "basic" : M === 1 ? "head" : "tail", b = (S, M) => {
      if (!(S === l.value || e.disabled)) {
        if (S === "...") {
          l.value = M === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (S === "prev") {
          l.value = V(l.value - 1);
          return;
        }
        if (S === "next") {
          l.value = V(l.value + 1);
          return;
        }
        dn(S) && (l.value = S);
      }
    }, y = () => {
      e.disabled || (n.value = !0);
    }, C = (S) => {
      i.value = S, n.value = !1;
      var M = V(l.value);
      a.value = String(M), l.value = M;
    }, V = (S) => S > d.value ? d.value : S < 1 ? 1 : S, $ = (S, M, E) => {
      E.target.blur();
      var T = V(A(M));
      a.value = String(T), l.value = T, S === "quick" && (r.value = "");
    };
    return le([() => e.current, () => e.size], (S) => {
      var [M, E] = S;
      l.value = A(M) || 1, i.value = A(E || 10);
    }), le([l, i, d], (S, M) => {
      var [E, T, p] = S, [P, j] = M, R = [], {
        maxPagerCount: Z,
        total: J,
        onChange: z
      } = e, L = Math.ceil(A(J) / A(j)), F = p - (Z - u.value) - 1;
      if (a.value = "" + E, p - 2 > Z) {
        if (P === void 0 || p !== L)
          for (var G = 2; G < Z + 2; G++)
            R.push(G);
        if (E <= Z && E < F) {
          R = [];
          for (var oe = 1; oe < Z + 1; oe++)
            R.push(oe + 1);
          t.value = !0, o.value = !1;
        }
        if (E > Z && E < F) {
          R = [];
          for (var I = 1; I < Z + 1; I++)
            R.push(E + I - u.value);
          t.value = E === 2 && Z === 1, o.value = !1;
        }
        if (E >= F) {
          R = [];
          for (var B = 1; B < Z + 1; B++)
            R.push(p - (Z - B) - 1);
          t.value = !1, o.value = !0;
        }
        R = [1, "...", ...R, "...", p];
      } else
        for (var W = 1; W <= p; W++)
          R.push(W);
      s.value = R, P != null && p > 0 && w(z, E, T), w(e["onUpdate:current"], E), w(e["onUpdate:size"], T);
    }, {
      immediate: !0
    }), {
      n: y0,
      classes: b0,
      pack: Je,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: r,
      simpleCurrentValue: a,
      totalText: f,
      getMode: g,
      isHideEllipsis: m,
      clickItem: b,
      showMenu: y,
      clickSize: C,
      setPage: $,
      toNumber: A,
      formatElevation: gn
    };
  }
});
Kd.render = C0;
const sa = Kd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var Bk = sa, S0 = {
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
  n: k0,
  classes: $0
} = ne("paper");
function T0(e, n) {
  var r = De("ripple");
  return ke((h(), k(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Zd = ee({
  name: "VarPaper",
  directives: {
    Ripple: qe
  },
  props: S0,
  setup(e) {
    var n = (r) => {
      w(e.onClick, r);
    };
    return {
      n: k0,
      classes: $0,
      formatElevation: gn,
      toSizeUnit: ye,
      handleClick: n
    };
  }
});
Zd.render = T0;
const ua = Zd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var Nk = ua;
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
var P0 = wi({
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
}, Qe(Pt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: O0,
  classes: V0
} = ne("picker"), ts = 300, M0 = 15, os = 200, E0 = 1e3, is = 0, I0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], B0 = ["onTransitionend"], N0 = ["onClick"];
function D0(e, n) {
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
      default: fe(() => [N(
        "div",
        Ne({
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
            default: fe(() => [Se(
              te(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])]), Y(e.$slots, "title", {}, () => [N(
            "div",
            {
              class: c(e.n("title"))
            },
            te(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), Y(e.$slots, "confirm", {}, () => [Q(r, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: fe(() => [Se(
              te(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])])],
          2
          /* CLASS */
        )) : x("v-if", !0), N(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), k(
            Me,
            null,
            Ue(e.scrollColumns, (a) => (h(), k("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(a),
              onTouchmove: Pn((t) => e.handleTouchmove(t, a), ["prevent"]),
              onTouchend: (t) => e.handleTouchend(t, a)
            }, [N("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: q({
                transform: "translateY(" + a.translate + "px)",
                transitionDuration: a.duration + "ms",
                transitionProperty: a.duration ? "transform" : "none"
              }),
              onTransitionend: (t) => e.handleTransitionend(a)
            }, [(h(!0), k(
              Me,
              null,
              Ue(a.column.texts, (t, o) => (h(), k("div", {
                class: c(e.n("option")),
                style: q({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (l) => e.handleClick(a, o)
              }, [N(
                "div",
                {
                  class: c(e.n("text"))
                },
                te(e.textFormatter(t, a.columnIndex)),
                3
                /* TEXT, CLASS */
              )], 14, N0))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, B0)], 42, I0))),
            128
            /* KEYED_FRAGMENT */
          )), N(
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
          ), N(
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
var Jd = ee({
  name: "VarPicker",
  components: {
    VarButton: nn,
    VarPopup: kn
  },
  inheritAttrs: !1,
  props: P0,
  setup(e) {
    var n = O([]), r = D(() => Ge(e.optionHeight)), a = D(() => Ge(e.optionCount)), t = D(() => a.value * r.value / 2 - r.value / 2), o = D(() => a.value * r.value), l = [], i = !1, s = (z, L) => {
      L.scrollEl = z;
    }, u = (z) => {
      w(e["onUpdate:show"], z);
    }, d = (z) => {
      var L = t.value - z.column.texts.length * r.value, F = r.value + t.value;
      z.translate = oo(z.translate, L, F);
    }, v = (z, L) => {
      var F = Math.round((t.value - L) / r.value);
      return _v(F, z.column.texts);
    }, f = (z) => (z.translate = t.value - z.index * r.value, z.translate), m = () => {
      var z = n.value.map((F) => F.column.texts[F.index]), L = n.value.map((F) => F.index);
      return {
        texts: z,
        indexes: L
      };
    }, g = function(z, L) {
      L === void 0 && (L = 0), f(z), z.duration = L;
    }, b = (z, L, F) => {
      z.translate += Math.abs(L / F) / 3e-3 * (L < 0 ? -1 : 1);
    }, y = (z, L) => {
      i || (z.index = L, z.scrolling = !0, g(z, os));
    }, C = (z) => {
      z.touching = !0, z.translate = Po(z.scrollEl);
    }, V = (z, L) => {
      if (L.touching) {
        i = !0, L.scrolling = !1, L.duration = 0;
        var {
          clientY: F
        } = z.touches[0], G = L.prevY !== void 0 ? F - L.prevY : 0;
        L.prevY = F, L.translate += G, d(L);
        var oe = performance.now();
        oe - L.momentumTime > ts && (L.momentumTime = oe, L.momentumPrevY = L.translate);
      }
    }, $ = (z, L) => {
      L.touching = !1, L.prevY = void 0;
      var F = L.translate - L.momentumPrevY, G = performance.now() - L.momentumTime, oe = Math.abs(F) >= M0 && G <= ts;
      oe && b(L, F, G), L.index = v(L, L.translate);
      var I = L.translate, B = f(L);
      L.scrolling = B !== I, g(L, oe ? E0 : os), L.scrolling || j(L), wn(() => {
        i = !1;
      });
    }, S = (z) => {
      z.scrolling = !1, j(z);
    }, M = (z) => z.map((L, F) => {
      var G, oe = Oe(L) ? {
        texts: L
      } : L, I = {
        id: is++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (G = oe.initialIndex) != null ? G : 0,
        columnIndex: F,
        duration: 0,
        momentumTime: 0,
        column: oe,
        scrollEl: null,
        scrolling: !1
      };
      return g(I), I;
    }), E = (z) => {
      var L = [];
      return T(L, z, 0, !0), L;
    }, T = function(z, L, F, G) {
      if (G === void 0 && (G = !1), Oe(L) && L.length) {
        var oe, I = G && (oe = e.cascadeInitialIndexes[z.length]) != null ? oe : 0, B = {
          id: is++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: I,
          columnIndex: F,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: L.map((W) => W[e.textKey])
          },
          columns: L,
          scrollEl: null,
          scrolling: !1
        };
        z.push(B), g(B), T(z, B.columns[B.index].children, F + 1, G);
      }
    }, p = (z) => {
      n.value.splice(n.value.indexOf(z) + 1), T(n.value, z.columns[z.index].children, z.columnIndex + 1);
    }, P = () => {
      var {
        indexes: z
      } = m();
      return z.every((L, F) => L === l[F]);
    }, j = (z) => {
      var {
        cascade: L,
        onChange: F
      } = e;
      if (!P()) {
        L && p(z);
        var G = n.value.some((B) => B.scrolling);
        if (!G) {
          var {
            texts: oe,
            indexes: I
          } = m();
          l = [...I], w(F, oe, I);
        }
      }
    }, R = () => {
      if (e.cascade) {
        var z = n.value.find((L) => L.scrolling);
        z && (z.index = v(z, Po(z.scrollEl)), z.scrolling = !1, g(z), p(z));
      } else
        n.value.forEach((L) => {
          L.index = v(L, Po(L.scrollEl)), g(L);
        });
    }, Z = () => {
      R();
      var {
        texts: z,
        indexes: L
      } = m();
      l = [...L], w(e.onConfirm, z, L);
    }, J = () => {
      R();
      var {
        texts: z,
        indexes: L
      } = m();
      l = [...L], w(e.onCancel, z, L);
    };
    return le(() => e.columns, (z) => {
      n.value = e.cascade ? E(rl(z)) : M(rl(z));
      var {
        indexes: L
      } = m();
      l = [...L];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: O0,
      classes: V0,
      pack: Je,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Le,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: C,
      handleTouchmove: V,
      handleTouchend: $,
      handleTransitionend: S,
      confirm: Z,
      cancel: J,
      dt: io,
      handleClick: y
    };
  }
});
Jd.render = D0;
const Sr = Jd;
var cn;
function za(e) {
  return new Promise((n) => {
    za.close();
    var r = Oe(e) ? {
      columns: e
    } : e, a = ze(r);
    a.dynamic = !0, a.teleport = "body", cn = a;
    var {
      unmountInstance: t
    } = ot(Sr, a, {
      onConfirm: (o, l) => {
        w(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, cn === a && (cn = null);
      },
      onCancel: (o, l) => {
        w(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, cn === a && (cn = null);
      },
      onClose: () => {
        w(a.onClose), n({
          state: "close"
        }), cn === a && (cn = null);
      },
      onClosed: () => {
        w(a.onClosed), t(), cn === a && (cn = null);
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
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
za.Component = Sr;
za.install = function(e) {
  e.component(Sr.name, Sr);
};
za.close = function() {
  if (cn != null) {
    var e = cn;
    cn = null, Ae().then(() => {
      e.show = !1;
    });
  }
};
var Dk = Sr;
function A0(e) {
  return ["linear", "circle"].includes(e);
}
var z0 = {
  mode: {
    type: String,
    default: "linear",
    validator: A0
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
  n: L0,
  classes: R0
} = ne("progress"), Nr = 100, U0 = ["viewBox"], H0 = ["cx", "cy", "r", "stroke-width"], F0 = ["cx", "cy", "r", "stroke-width"];
function Y0(e, n) {
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
      [N(
        "div",
        {
          class: c(e.n("linear-block")),
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), k(
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
        )) : x("v-if", !0), N(
          "div",
          {
            class: c(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: q({
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
      ), e.label ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Se(
          te(e.linearProps.roundValue),
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
        class: c(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), k("svg", {
        class: c(e.n("circle-svg")),
        style: q({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (h(), k("circle", {
        key: 0,
        class: c(e.n("circle-background")),
        cx: e.multiplySizeUnit(e.size, 0.5),
        cy: e.multiplySizeUnit(e.size, 0.5),
        r: e.circleProps.radius,
        fill: "transparent",
        "stroke-width": e.toSizeUnit(e.lineWidth),
        style: q({
          strokeDasharray: e.circleProps.perimeter,
          stroke: e.trackColor
        })
      }, null, 14, H0)) : x("v-if", !0), N("circle", {
        class: c(e.n("circle-certain")),
        cx: e.multiplySizeUnit(e.size, 0.5),
        cy: e.multiplySizeUnit(e.size, 0.5),
        r: e.circleProps.radius,
        fill: "transparent",
        "stroke-width": e.toSizeUnit(e.lineWidth),
        style: q({
          strokeDasharray: e.circleProps.strokeDasharray,
          stroke: e.color
        })
      }, null, 14, F0)], 14, U0)), e.label ? (h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Se(
          te(e.circleProps.roundValue),
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
var Qd = ee({
  name: "VarProgress",
  props: z0,
  setup(e) {
    var n = D(() => {
      var a = A(e.value), t = a > Nr ? Nr : a, o = a > Nr ? Nr : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = D(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + Ge(a) + " " + Ge(a), i = A(o) > Nr ? Nr : Math.round(A(o)), s = (Ge(a) - Ge(t)) / 2, u = 2 * Math.PI * s, d = i / Nr * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: L0,
      classes: R0,
      toSizeUnit: ye,
      multiplySizeUnit: sn,
      linearProps: n,
      circleProps: r
    };
  }
});
Qd.render = Y0;
const da = Qd;
da.install = function(e) {
  e.component(da.name, da);
};
var Ak = da, j0 = {
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
function ls(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ss(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ls(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ls(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: us,
  classes: W0
} = ne("pull-refresh"), ds = 150;
function G0(e, n) {
  var r = ie("var-icon");
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
    [N(
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
    ), Y(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var _d = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ve
  },
  props: j0,
  setup(e) {
    var n = O(0), r = O(null), a = O(null), t = O(0), o = O("-125%"), l = O("arrow-down"), i = O("default"), s = O(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var p = ss(function* (P) {
        if (l.value !== P)
          return l.value = P, new Promise((j) => {
            window.setTimeout(j, ds);
          });
      });
      return function(j) {
        return p.apply(this, arguments);
      };
    }(), g = D(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = D(() => ({
      transform: "translate3d(0px, " + (He(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: C.value ? e.successBgColor : e.bgColor,
      color: C.value ? e.successColor : e.color
    })), y = D(() => Math.abs(2 * n.value)), C = D(() => i.value === "success"), V = (p) => {
      var P = "classList" in u ? u : document.body;
      P.classList[p](us() + "--lock");
    }, $ = (p) => {
      if (n.value === 0) {
        var {
          width: P
        } = rn(a.value);
        n.value = -(P + P * 0.25);
      }
      v = p.touches[0].clientY, f = 0, d = kr(p.target);
    }, S = (p) => {
      if (g.value && !(d !== u && pt(d) > 0)) {
        var P = pt(u);
        if (!(P > 0)) {
          var j = P === 0, R = p.touches[0];
          f = R.clientY - v, j && f >= 0 && p.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = p.touches[0].clientY), j && o.value > n.value && V("add");
          var Z = (p.touches[0].clientY - t.value) / 2 + n.value;
          o.value = Z >= y.value ? y.value : Z, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, M = /* @__PURE__ */ function() {
      var p = ss(function* () {
        g.value && (s.value = !0, o.value >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, w(e["onUpdate:modelValue"], !0), Ae(() => {
          w(e.onRefresh);
        }), V("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, V("remove");
        }, A(e.animationDuration))), d = null);
      });
      return function() {
        return p.apply(this, arguments);
      };
    }(), E = () => {
      u = e.target ? Ts(e.target, "PullRefresh") : kr(r.value);
    }, T = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, A(e.animationDuration));
    };
    return le(() => e.modelValue, (p) => {
      p === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, T();
      }, A(e.successDuration)));
    }), vn(E), $r(r, "touchmove", S), {
      n: us,
      classes: W0,
      ICON_TRANSITION: ds,
      refreshStatus: i,
      freshNode: r,
      controlNode: a,
      touchStart: $,
      touchMove: S,
      touchEnd: M,
      iconName: l,
      controlStyle: b,
      isSuccess: C
    };
  }
});
_d.render = G0;
const va = _d;
va.install = function(e) {
  e.component(va.name, va);
};
var zk = va, q0 = {
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
}, xd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function X0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = on(xd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function K0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = tn(xd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Z0,
  classes: J0
} = ne("radio");
function Q0(e, n) {
  var r = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = De("ripple"), l = De("hover");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      Ne({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((h(), k(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
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
      }], [l, e.handleHovering, "desktop"]]), N(
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
var ev = ee({
  name: "VarRadio",
  directives: {
    Ripple: qe,
    Hover: Un
  },
  components: {
    VarIcon: Ve,
    VarFormDetails: xe,
    VarHoverOverlay: pn
  },
  inheritAttrs: !1,
  props: q0,
  setup(e) {
    var n = O(!1), r = D(() => n.value === e.checkedValue), a = O(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = K0(), {
      hovering: l,
      handleHovering: i
    } = Tr(), {
      form: s,
      bindForm: u
    } = Mn(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Vn(), g = (E) => {
      Ae(() => {
        var {
          validateTrigger: T,
          rules: p,
          modelValue: P
        } = e;
        v(T, E, p, P);
      });
    }, b = (E) => {
      var {
        checkedValue: T,
        onChange: p
      } = e;
      t && n.value === T || (n.value = E, w(e["onUpdate:modelValue"], n.value), w(p, n.value), t == null || t.onToggle(T), g("onChange"));
    }, y = (E) => {
      var {
        disabled: T,
        readonly: p,
        uncheckedValue: P,
        checkedValue: j,
        onClick: R
      } = e;
      s != null && s.disabled.value || T || (w(R, E), !(s != null && s.readonly.value || p) && (a.value = !0, b(r.value ? P : j)));
    }, C = (E) => {
      var {
        checkedValue: T,
        uncheckedValue: p
      } = e;
      n.value = E === T ? T : p;
    }, V = () => {
      w(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, $ = () => f(e.rules, e.modelValue), S = (E) => {
      var {
        uncheckedValue: T,
        checkedValue: p
      } = e, P = ![T, p].includes(E);
      P && (E = r.value ? T : p), b(E);
    };
    le(() => e.modelValue, (E) => {
      n.value = E;
    }, {
      immediate: !0
    });
    var M = {
      sync: C,
      validate: $,
      resetValidation: m,
      reset: V
    };
    return w(o, M), w(u, M), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: Z0,
      classes: J0,
      handleClick: y,
      toggle: S,
      reset: V,
      validate: $,
      resetValidation: m
    };
  }
});
ev.render = Q0;
const fa = ev;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var Lk = fa;
function _0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var x0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: _0
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
  n: e1,
  classes: n1
} = ne("radio-group");
function r1(e, n) {
  var r = ie("var-form-details");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
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
var nv = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: xe
  },
  props: x0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = X0(), {
      bindForm: t
    } = Mn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Vn(), u = D(() => o.value), d = (y) => {
      Ae(() => {
        var {
          validateTrigger: C,
          rules: V,
          modelValue: $
        } = e;
        l(C, y, V, $);
      });
    }, v = () => r.forEach((y) => {
      var {
        sync: C
      } = y;
      return C(e.modelValue);
    }), f = (y) => {
      w(e["onUpdate:modelValue"], y), w(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      w(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return w(t, b), a(b), {
      errorMessage: o,
      n: e1,
      classes: n1,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
nv.render = r1;
const ca = nv;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var Rk = ca, a1 = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: lt
} = ne("rate"), t1 = ["onClick"];
function o1(e, n) {
  var r = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = De("ripple"), l = De("hover");
  return h(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), k(
        Me,
        null,
        Ue(e.toNumber(e.count), (i) => ke((h(), k("div", {
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
        }, null, 8, ["hovering"])], 14, t1)), [[o, {
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
var rv = ee({
  name: "VarRate",
  components: {
    VarIcon: Ve,
    VarFormDetails: xe,
    VarHoverOverlay: pn
  },
  directives: {
    Ripple: qe,
    Hover: Un
  },
  props: a1,
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
    } = Tr(), s = O(-1), u = Number(e.modelValue), d = (S) => {
      var {
        count: M,
        gap: E
      } = e;
      return {
        color: f(S).color,
        marginRight: S !== A(M) ? ye(E) : 0
      };
    }, v = (S) => {
      var {
        name: M,
        color: E
      } = f(S);
      return {
        [lt("content")]: !0,
        [lt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [lt("--error")]: a.value,
        [lt("--primary")]: M !== e.emptyIcon && !E
      };
    }, f = (S) => {
      var {
        modelValue: M,
        disabled: E,
        disabledColor: T,
        color: p,
        half: P,
        emptyColor: j,
        icon: R,
        halfIcon: Z,
        emptyIcon: J
      } = e, z = p;
      return (E || n != null && n.disabled.value) && (z = T), S <= A(M) ? {
        color: z,
        name: R
      } : P && S <= A(M) + 0.5 ? {
        color: z,
        name: Z
      } : {
        color: E || n != null && n.disabled.value ? T : j,
        name: J
      };
    }, m = (S, M) => {
      var {
        half: E,
        clearable: T
      } = e;
      if (E) {
        var {
          offsetWidth: p
        } = M.target;
        M.offsetX <= Math.floor(p / 2) && (S -= 0.5);
      }
      u === S && T && (S = 0), u = S, w(e["onUpdate:modelValue"], S);
    }, g = () => o(e.rules, A(e.modelValue)), b = () => Ae(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = (S, M) => {
      var {
        readonly: E,
        disabled: T,
        onChange: p
      } = e;
      E || T || n != null && n.disabled.value || n != null && n.readonly.value || (m(S, M), w(p, S), b());
    }, C = (S) => (M) => {
      s.value = S, i.value = M;
    }, V = () => {
      w(e["onUpdate:modelValue"], 0), l();
    }, $ = {
      reset: V,
      validate: g,
      resetValidation: l
    };
    return w(r, $), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: d,
      getClass: v,
      getCurrentState: f,
      handleClick: y,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: C,
      reset: V,
      validate: g,
      resetValidation: l,
      toSizeUnit: ye,
      toNumber: A,
      n: lt
    };
  }
});
rv.render = o1;
const ma = rv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Uk = ma;
function i1(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var l1 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: i1
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
}, s1 = (e) => (La(""), e = e(), Ra(), e), u1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, d1 = /* @__PURE__ */ s1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), v1 = [d1];
function f1(e, n) {
  return h(), k("svg", u1, v1);
}
var av = ee({});
av.render = f1;
const c1 = av;
var m1 = (e) => (La(""), e = e(), Ra(), e), p1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, h1 = /* @__PURE__ */ m1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), g1 = [h1];
function y1(e, n) {
  return h(), k("svg", p1, g1);
}
var tv = ee({});
tv.render = y1;
const b1 = tv;
var w1 = (e) => (La(""), e = e(), Ra(), e), C1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, S1 = /* @__PURE__ */ w1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), k1 = [S1];
function $1(e, n) {
  return h(), k("svg", C1, k1);
}
var ov = ee({});
ov.render = $1;
const T1 = ov;
var {
  n: P1,
  classes: O1
} = ne("result");
function V1(e, n) {
  return h(), k(
    Me,
    null,
    [N(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), N(
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
    ), N(
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
    ), N(
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
    ), N(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), N(
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
var iv = ee({
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
      n: P1,
      classes: O1,
      toNumber: A
    };
  }
});
iv.render = V1;
const M1 = iv;
var E1 = (e) => (La(""), e = e(), Ra(), e), I1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, B1 = /* @__PURE__ */ E1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), N1 = [B1];
function D1(e, n) {
  return h(), k("svg", I1, N1);
}
var lv = ee({});
lv.render = D1;
const A1 = lv;
var z1 = (e) => (La(""), e = e(), Ra(), e), L1 = {
  viewBox: "-4 -4 32 32"
}, R1 = /* @__PURE__ */ z1(() => /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), U1 = [R1];
function H1(e, n) {
  return h(), k("svg", L1, U1);
}
var sv = ee({});
sv.render = H1;
const F1 = sv;
var {
  n: Y1,
  classes: j1
} = ne("result");
function W1(e, n) {
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
      [N(
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
    )) : x("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      te(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), k(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      te(e.description),
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
var uv = ee({
  name: "VarResult",
  components: {
    Info: c1,
    Success: M1,
    Warning: T1,
    Error: b1,
    Question: A1,
    Empty: F1
  },
  props: l1,
  setup(e) {
    var n = D(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = D(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: Y1,
      classes: j1,
      toNumber: A,
      toPxNum: Ge,
      toSizeUnit: ye,
      circleSize: n,
      borderSize: r
    };
  }
});
uv.render = W1;
const pa = uv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Hk = pa;
function G1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function q1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var X1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: G1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: q1
  },
  onClick: U()
}, {
  n: K1,
  classes: Z1
} = ne("row");
function J1(e, n) {
  return h(), k(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var dv = ee({
  name: "VarRow",
  props: X1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = ip(), t = D(() => {
      var s = Ge(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      w(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(i), {
      n: K1,
      classes: Z1,
      average: t,
      handleClick: l,
      padStartFlex: Gt
    };
  }
});
dv.render = J1;
const ha = dv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Fk = ha;
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
function Q1(e) {
  return ["left", "right", "center"].includes(e);
}
var _1 = Ci({
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
    validator: Q1
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
}, Qe(Ki, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: x1,
  classes: ew
} = ne("select"), nw = {
  key: 1
};
function rw(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-field-decorator"), o = ie("var-menu"), l = ie("var-form-details");
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
      "onUpdate:show": n[1] || (n[1] = (i) => e.showMenu = i),
      class: c(e.n("menu")),
      "offset-y": e.offsetY,
      disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
      placement: e.placement,
      "default-style": !1,
      onClickOutside: e.handleBlur
    }, {
      menu: fe(() => [N(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )]),
      default: fe(() => [Q(
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
        ws({
          "append-icon": fe(() => [Y(e.$slots, "append-icon")]),
          default: fe(() => [N(
            "div",
            {
              class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
              style: q({
                textAlign: e.textAlign,
                color: e.textColor
              })
            },
            [N(
              "div",
              {
                class: c(e.n("label"))
              },
              [e.isEmptyModelValue ? x("v-if", !0) : Y(e.$slots, "selected", {
                key: 0
              }, () => [e.multiple ? (h(), k(
                Me,
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
                    Me,
                    null,
                    Ue(e.labels, (i) => (h(), be(r, {
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
                        te(i),
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
                  te(e.labels.join(e.separator)),
                  3
                  /* TEXT, CLASS */
                ))],
                64
                /* STABLE_FRAGMENT */
              )) : (h(), k(
                "span",
                nw,
                te(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.useCustomPlaceholder ? (h(), k(
              "span",
              {
                key: 0,
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                style: q({
                  color: e.placeholderColor
                })
              },
              te(e.placeholder),
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
          fn: fe(() => [Y(e.$slots, "prepend-icon")]),
          key: "0"
        } : void 0]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      )]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "class", "offset-y", "disabled", "placement", "onClickOutside"]), Q(l, {
      "error-message": e.errorMessage,
      onClick: n[2] || (n[2] = Pn(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var vv = ee({
  name: "VarSelect",
  components: {
    VarIcon: Ve,
    VarMenu: Jn,
    VarChip: hr,
    VarFieldDecorator: Bd,
    VarFormDetails: xe
  },
  props: _1,
  setup(e) {
    var n = O(!1), r = O(!1), a = D(() => e.multiple), t = D(() => e.focusColor), o = O(""), l = O([]), i = D(() => Yn(e.modelValue)), s = D(() => e.disabled || e.readonly ? "" : "pointer"), u = O(0), {
      bindForm: d,
      form: v
    } = Mn(), {
      length: f,
      options: m,
      bindOptions: g
    } = u0(), {
      errorMessage: b,
      validateWithTrigger: y,
      validate: C,
      // expose
      resetValidation: V
    } = Vn(), $ = O(null), S = D(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), M = D(() => {
      var {
        hint: H,
        blurColor: X,
        focusColor: _
      } = e;
      if (!H)
        return b.value ? "var(--field-decorator-error-color)" : n.value ? _ || "var(--field-decorator-focus-color)" : X || "var(--field-decorator-blur-color)";
    }), E = D(() => !e.hint && Yn(e.modelValue) && !n.value), T = () => {
      var {
        multiple: H,
        modelValue: X
      } = e;
      if (H) {
        var _ = X;
        l.value = _.map(j);
      }
      !H && !Yn(X) && (o.value = j(X)), !H && Yn(X) && (o.value = "");
    }, p = (H) => {
      Ae(() => {
        var {
          validateTrigger: X,
          rules: _,
          modelValue: ve
        } = e;
        y(X, H, _, ve);
      });
    }, P = (H) => {
      var {
        value: X,
        label: _
      } = H;
      return X.value != null ? X.value : _.value;
    }, j = (H) => {
      var X, _, ve = m.find((Ce) => {
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
      })), (X = (_ = ve) == null ? void 0 : _.label.value) != null ? X : "";
    }, R = () => {
      var {
        disabled: H,
        readonly: X,
        onFocus: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || X || (u.value = Ge(e.offsetY), n.value = !0, w(_), p("onFocus"));
    }, Z = () => {
      var {
        disabled: H,
        readonly: X,
        onBlur: _
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || X || (I(), w(_), p("onBlur"));
    }, J = (H) => {
      var {
        disabled: X,
        readonly: _,
        multiple: ve,
        onChange: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || X || _)) {
        var Ee = ve ? m.filter((ae) => {
          var {
            selected: de
          } = ae;
          return de.value;
        }).map(P) : P(H);
        w(e["onUpdate:modelValue"], Ee), w(Ce, Ee), p("onChange"), ve || I();
      }
    }, z = () => {
      var {
        disabled: H,
        readonly: X,
        multiple: _,
        clearable: ve,
        onClear: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || H || X || !ve)) {
        var Ee = _ ? [] : void 0;
        w(e["onUpdate:modelValue"], Ee), w(Ce, Ee), p("onClear");
      }
    }, L = (H) => {
      var {
        disabled: X,
        onClick: _
      } = e;
      v != null && v.disabled.value || X || (w(_, H), p("onClick"));
    }, F = (H) => {
      var {
        disabled: X,
        readonly: _,
        modelValue: ve,
        onClose: Ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || X || _)) {
        var Ee = ve, ae = m.find((me) => {
          var {
            label: Pe
          } = me;
          return Pe.value === H;
        }), de = Ee.filter((me) => {
          var Pe;
          return me !== ((Pe = ae.value.value) != null ? Pe : ae.label.value);
        });
        w(e["onUpdate:modelValue"], de), w(Ce, de), p("onClose");
      }
    }, G = () => {
      var {
        multiple: H,
        modelValue: X
      } = e;
      if (H) {
        var _ = X;
        m.forEach((ve) => ve.sync(_.includes(P(ve))));
      } else
        m.forEach((ve) => ve.sync(X === P(ve)));
      T();
    }, oe = () => {
      u.value = Ge(e.offsetY), n.value = !0, r.value = !0;
    }, I = () => {
      n.value = !1, r.value = !1;
    }, B = () => C(e.rules, e.modelValue), W = () => {
      w(e["onUpdate:modelValue"], e.multiple ? [] : void 0), V();
    };
    le(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: X
      } = e;
      H && !Oe(X) && On("Select", "The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, G, {
      deep: !0
    }), le(() => f.value, G);
    var re = {
      multiple: a,
      focusColor: t,
      computeLabel: T,
      onSelect: J,
      reset: W,
      validate: B,
      resetValidation: V
    };
    return g(re), w(d, re), {
      offsetY: u,
      isFocus: n,
      showMenu: r,
      errorMessage: b,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: $,
      placement: S,
      cursor: s,
      placeholderColor: M,
      useCustomPlaceholder: E,
      n: x1,
      classes: ew,
      handleFocus: R,
      handleBlur: Z,
      handleClear: z,
      handleClick: L,
      handleClose: F,
      reset: W,
      validate: B,
      resetValidation: V,
      focus: oe,
      blur: I
    };
  }
});
vv.render = rw;
const ga = vv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Yk = ga, aw = {
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
  n: tw,
  classes: ow
} = ne("skeleton");
function iw(e, n) {
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
          style: q({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [N(
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
            style: q({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [N(
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
              style: q({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [N(
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
            Me,
            null,
            Ue(e.toNumber(e.rows), (r, a) => (h(), k(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: q({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [N(
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
        style: q({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [N(
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
var fv = ee({
  name: "VarSkeleton",
  props: aw,
  setup() {
    return {
      n: tw,
      classes: ow,
      toSizeUnit: ye,
      toNumber: A
    };
  }
});
fv.render = iw;
const ya = fv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var jk = ya;
function lw(e) {
  return ["always", "normal", "never"].includes(e);
}
var We = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), sw = {
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
    validator: lw
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
  n: vs,
  classes: uw
} = ne("slider"), dw = ["onTouchstart"];
function vw(e, n) {
  var r = ie("var-hover-overlay"), a = ie("var-form-details"), t = De("hover");
  return h(), k(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [N(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [N(
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
        ), N(
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
      ), (h(!0), k(
        Me,
        null,
        Ue(e.thumbList, (o) => (h(), k("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: q(e.thumbStyle(o)),
          onTouchstart: Pn((l) => e.start(l, o.enumValue), ["stop"])
        }, [Y(e.$slots, "button", {
          currentValue: o.text
        }, () => [ke(N(
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
        ), [[t, (l) => e.hover(l, o), "desktop"]]), N(
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
        ), N(
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
          [N(
            "span",
            null,
            te(o.text),
            1
            /* TEXT */
          )],
          6
          /* CLASS, STYLE */
        )])], 46, dw))),
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
var cv = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: xe,
    VarHoverOverlay: pn
  },
  directives: {
    Hover: Un
  },
  props: sw,
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
    } = Tr(), {
      hovering: u,
      handleHovering: d
    } = Tr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Ae(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = O(null), b = O(0), y = O(!1), C = ze({
      [We.First]: f(),
      [We.Second]: f()
    }), V = D(() => A(e.max) - A(e.min)), $ = D(() => b.value / V.value * A(e.step)), S = D(() => {
      var {
        modelValue: ae,
        range: de
      } = e, me = [];
      return de && Oe(ae) ? me = [{
        value: J(ae[0]),
        enumValue: We.First,
        text: z(ae[0]),
        hovering: ut(i),
        handleHovering: s
      }, {
        value: J(ae[1]),
        enumValue: We.Second,
        text: z(ae[1]),
        hovering: ut(u),
        handleHovering: d
      }] : dn(ae) && (me = [{
        value: J(ae),
        enumValue: We.First,
        text: z(ae),
        hovering: ut(i),
        handleHovering: s
      }]), me;
    }), M = D(() => {
      var {
        activeColor: ae,
        range: de,
        modelValue: me
      } = e, Pe = de && Oe(me) ? J(Math.min(me[0], me[1])) : 0, Fe = de && Oe(me) ? J(Math.max(me[0], me[1])) - Pe : J(me);
      return p.value ? {
        left: "0px",
        height: Fe + "%",
        bottom: Pe + "%",
        background: ae
      } : {
        top: "0px",
        width: Fe + "%",
        left: Pe + "%",
        background: ae
      };
    }), E = D(() => e.disabled || (r == null ? void 0 : r.disabled.value)), T = D(() => e.readonly || (r == null ? void 0 : r.readonly.value)), p = D(() => e.direction === "vertical"), P, j = (ae) => {
      var de = ae.currentTarget;
      return de ? p.value ? b.value - (ae.clientY - rn(de).top) : ae.clientX - ef(de) : 0;
    }, R = (ae) => {
      var de = p.value ? "bottom" : "left";
      return {
        [de]: ae.value + "%",
        zIndex: C[ae.enumValue].active ? 1 : void 0
      };
    }, Z = (ae) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : C[ae].active, J = (ae) => {
      var {
        min: de,
        max: me
      } = e;
      return ae < A(de) ? 0 : ae > A(me) ? 100 : (ae - A(de)) / V.value * 100;
    }, z = (ae) => {
      if (!dn(ae))
        return 0;
      var de = ae;
      de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max));
      var me = parseInt("" + de, 10) === de;
      return me ? de : A(de.toPrecision(5));
    }, L = (ae, de) => {
      E.value || de.handleHovering(ae);
    }, F = (ae, de) => {
      var me = [], {
        step: Pe,
        range: Fe,
        modelValue: Xe,
        onChange: Ye,
        min: je
      } = e, se = A(Pe), we = Math.round(ae / $.value), he = we * se + A(je), $e = C[de].percentValue * se + A(je);
      if (C[de].percentValue = we, Fe && Oe(Xe) && (me = de === We.First ? [he, Xe[1]] : [Xe[0], he]), $e !== he) {
        var Te = Fe ? me.map((Re) => z(Re)) : z(he);
        w(Ye, Te), w(e["onUpdate:modelValue"], Te), m();
      }
    }, G = (ae) => {
      if (!e.range)
        return We.First;
      var de = C[We.First].percentValue * $.value, me = C[We.Second].percentValue * $.value, Pe = Math.abs(ae - de), Fe = Math.abs(ae - me);
      return Pe <= Fe ? We.First : We.Second;
    }, oe = () => {
      document.addEventListener("touchmove", W, {
        passive: !1
      }), document.addEventListener("touchend", re), document.addEventListener("touchcancel", re);
    }, I = () => {
      document.removeEventListener("touchmove", W), document.removeEventListener("touchend", re), document.removeEventListener("touchcancel", re);
    }, B = (ae, de) => {
      if (b.value || (b.value = g.value.offsetWidth), E.value || (C[de].active = !0), P = de, oe(), !(E.value || T.value)) {
        w(e.onStart), y.value = !0;
        var {
          clientX: me,
          clientY: Pe
        } = ae.touches[0];
        C[de].startPosition = p.value ? Pe : me;
      }
    }, W = (ae) => {
      if (ae.preventDefault(), !(E.value || T.value || !y.value)) {
        var {
          startPosition: de,
          currentOffset: me
        } = C[P], {
          clientX: Pe,
          clientY: Fe
        } = ae.touches[0], Xe = (p.value ? de - Fe : Pe - de) + me;
        Xe <= 0 ? Xe = 0 : Xe >= b.value && (Xe = b.value), F(Xe, P);
      }
    }, re = () => {
      I();
      var {
        range: ae,
        modelValue: de,
        onEnd: me,
        step: Pe,
        min: Fe
      } = e;
      if (E.value || (C[P].active = !1), !(E.value || T.value)) {
        var Xe = [];
        C[P].currentOffset = C[P].percentValue * $.value;
        var Ye = C[P].percentValue * A(Pe) + A(Fe);
        ae && Oe(de) && (Xe = P === We.First ? [Ye, de[1]] : [de[0], Ye]), w(me, ae ? Xe : Ye), y.value = !1;
      }
    }, H = (ae) => {
      if (!(E.value || T.value) && !ae.target.closest("." + vs("thumb"))) {
        var de = j(ae), me = G(de);
        P = me, F(de, me), re();
      }
    }, X = () => {
      var ae = A(e.step);
      return isNaN(ae) ? (ll("Slider", 'type of prop "step" should be Number'), !1) : ae < 0 ? (ll("Slider", '"step" should be > 0'), !1) : !0;
    }, _ = () => {
      var {
        range: ae,
        modelValue: de
      } = e;
      return ae && !Oe(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !ae && Oe(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : ae && Oe(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ve = function(ae, de) {
      ae === void 0 && (ae = e.modelValue), de === void 0 && (de = A(e.step));
      var me = (Pe) => {
        var {
          min: Fe,
          max: Xe
        } = e;
        return Pe < A(Fe) ? 0 : Pe > A(Xe) ? V.value / de : (Pe - A(Fe)) / de;
      };
      e.range && Oe(ae) ? (C[We.First].percentValue = me(ae[0]), C[We.First].currentOffset = C[We.First].percentValue * $.value, C[We.Second].percentValue = me(ae[1]), C[We.Second].currentOffset = C[We.Second].percentValue * $.value) : dn(ae) && (C[We.First].currentOffset = me(ae) * $.value);
    }, Ce = () => {
      var ae = e.range ? [0, 0] : 0;
      w(e["onUpdate:modelValue"], ae), l();
    }, Ee = {
      reset: Ce,
      validate: v,
      resetValidation: l
    };
    return w(n, Ee), le([() => e.modelValue, () => e.step], (ae) => {
      var [de, me] = ae;
      !X() || !_() || y.value || ve(de, A(me));
    }), le(b, () => ve()), vn(() => {
      !X() || !_() || (b.value = g.value[p.value ? "offsetHeight" : "offsetWidth"]);
    }), ro(() => {
      I();
    }), {
      n: vs,
      classes: uw,
      Thumbs: We,
      sliderEl: g,
      getFillStyle: M,
      isDisabled: E,
      isVertical: p,
      thumbStyle: R,
      errorMessage: a,
      thumbsProps: C,
      thumbList: S,
      hover: L,
      multiplySizeUnit: sn,
      toNumber: A,
      showLabel: Z,
      start: B,
      move: W,
      end: re,
      click: H
    };
  }
});
cv.render = vw;
const ba = cv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Wk = ba;
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
function fw(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function cw(e) {
  return Qi.includes(e);
}
var mv = {
  type: {
    type: String,
    validator: cw
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: fw
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
  loadingType: Qe(ur, "type"),
  loadingSize: Qe(ur, "size"),
  loadingRadius: Qe(ur, "radius"),
  loadingColor: Si({}, Qe(ur, "color"), {
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
  n: mw,
  classes: pw
} = ne("snackbar"), hw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function gw(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return ke((h(), k(
    "div",
    {
      class: c(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [N(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [Y(e.$slots, "default", {}, () => [Se(
          te(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), N(
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
        }, null, 8, ["type", "size", "color", "radius"])) : x("v-if", !0), Y(e.$slots, "icon")],
        2
        /* CLASS */
      ), N(
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
  )), [[Qn, e.show]]);
}
var pv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Dn,
    VarIcon: Ve
  },
  props: mv,
  setup(e) {
    var n = O(null), {
      zIndex: r
    } = Ot(() => e.show, 1);
    fo(() => e.show, () => e.lockScroll);
    var a = D(() => e.type === "loading" || e.forbidClick), t = D(() => e.type ? hw[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && w(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (l) => {
      l ? (w(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), w(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), vn(() => {
      e.show && (w(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Qi,
      n: mw,
      classes: pw,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
pv.render = gw;
const hv = pv;
var {
  n: yw
} = ne("snackbar");
function bw(e, n) {
  var r = ie("var-snackbar-core");
  return h(), be(Mr, {
    to: e.teleport,
    disabled: e.disabled
  }, [Q(Le, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: fe(() => [Q(r, Ne(e.$props, {
      class: e.n("transition")
    }), {
      icon: fe(() => [Y(e.$slots, "icon")]),
      action: fe(() => [Y(e.$slots, "action")]),
      default: fe(() => [Y(e.$slots, "default", {}, () => [Se(
        te(e.content),
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
var gv = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: hv
  },
  props: mv,
  setup() {
    var {
      disabled: e
    } = vo();
    return {
      n: yw,
      disabled: e
    };
  }
});
gv.render = bw;
const wa = gv;
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
function ww(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var Qi = ["loading", "success", "warning", "info", "error"], fs = 0, ki = !1, yv, _a = !1, bv = {
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
}, Tn = ze([]), _i = bv, Cw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Io = (e) => () => rt(e) ? e() : e, Sw = {
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
        }, Vw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Io(s),
          icon: Io(u),
          action: Io(d)
        };
        return Q(hv, Ne(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Q(Xv, Ne(Cw, {
        style: {
          zIndex: bn.zIndex
        },
        onAfterEnter: kw,
        onAfterLeave: $w
      }), ww(e) ? e : {
        default: () => [e]
      });
    };
  }
}, er = function(e) {
  var n = Pw(e), r = ze(Ct({}, _i, n));
  r.show = !0, ki || (ki = !0, yv = ot(Sw).unmountInstance);
  var {
    length: a
  } = Tn, t = {
    id: fs++,
    reactiveSnackOptions: r
  };
  if (a === 0 || _a)
    Tw(t);
  else {
    var o = "update-" + fs;
    Ow(r, o);
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
  e.component(wa.name, wa);
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
  _i = bv;
};
er.Component = wa;
function kw(e) {
  var n = e.getAttribute("data-id"), r = Tn.find((a) => a.id === A(n));
  r && w(r.reactiveSnackOptions.onOpened);
}
function $w(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Tn.find((t) => t.id === A(n));
  r && (r.animationEnd = !0, w(r.reactiveSnackOptions.onClosed));
  var a = Tn.every((t) => t.animationEnd);
  a && (w(yv), Tn = ze([]), ki = !1);
}
function Tw(e) {
  Tn.push(e);
}
function Pw(e) {
  return e === void 0 && (e = {}), He(e) ? {
    content: e
  } : e;
}
function Ow(e, n) {
  var [r] = Tn;
  r.reactiveSnackOptions = Ct({}, r.reactiveSnackOptions, e), r._update = n;
}
function Vw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Gk = wa;
const $i = er;
var wv = (e) => ["mini", "small", "normal", "large"].includes(e), Mw = (e) => wv(e) || Oe(e) || dn(e) || He(e), Ew = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Iw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Bw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Mw
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
    validator: Ew
  },
  align: {
    type: String,
    validator: Iw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function yn(e) {
  return "calc(" + e + " / 2)";
}
function Nw(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = yn(e) + " " + n + " " + yn(e) + " 0" : i = yn(e) + " 0" : t === "space-around" ? i = yn(e) + " " + yn(n) : t === "space-between" && (o === 0 ? i = yn(e) + " " + yn(n) + " " + yn(e) + " 0" : o === l ? i = yn(e) + " 0 " + yn(e) + " " + yn(n) : i = yn(e) + " " + yn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Bo,
  classes: Dw
} = ne("space");
const Ca = ee({
  name: "VarSpace",
  props: Bw,
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
      } = e, v = (t = w(r.default)) != null ? t : [], f = wv(d), [m, g] = a(d, f);
      v = Ns(v);
      var b = v.length - 1, y = v.map((C, V) => {
        var $ = Nw(m, g, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: b
        });
        return Q("div", {
          style: {
            margin: $
          }
        }, [C]);
      });
      return Q("div", {
        class: Dw(Bo(), Bo("$--box"), [o, Bo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Gt(l),
          alignItems: Gt(i),
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
var qk = Ca, Aw = {
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
}, Cv = Symbol("STEPS_BIND_STEP_KEY");
function zw() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Cv);
  return {
    step: n,
    bindStep: e
  };
}
function Lw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = tn(Cv);
  return r || On("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: Rw,
  classes: Uw
} = ne("step"), Hw = {
  key: 3
};
function Fw(e, n) {
  var r = ie("var-icon");
  return h(), k(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [N(
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
        }, null, 8, ["class", "name"])) : (h(), k(
          "span",
          Hw,
          te(e.index + 1),
          1
          /* TEXT */
        ))],
        6
        /* CLASS, STYLE */
      ), N(
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
      ), N(
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
var Sv = ee({
  name: "VarStep",
  components: {
    VarIcon: Ve
  },
  props: Aw,
  setup() {
    var {
      index: e,
      steps: n,
      bindSteps: r
    } = Lw(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = n, s = D(() => a.value === e.value), u = D(() => e.value !== -1 && a.value > e.value), d = {
      index: e
    }, v = () => i(e.value);
    return r(d), {
      n: Rw,
      classes: Uw,
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
Sv.render = Fw;
const Sa = Sv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Xk = Sa;
function Yw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var jw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Yw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Ww
} = ne("steps");
function Gw(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n()),
      style: q({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var kv = ee({
  name: "VarSteps",
  props: jw,
  setup(e) {
    var n = D(() => e.active), r = D(() => e.activeColor), a = D(() => e.inactiveColor), t = D(() => e.direction), {
      bindStep: o
    } = zw(), l = (s) => {
      w(e.onClickStep, s);
    }, i = {
      active: n,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: Ww
    };
  }
});
kv.render = Gw;
const ka = kv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Kk = ka, qw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Xw
} = ne("style-provider"), Kw = ee({
  name: "VarStyleProvider",
  props: qw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => bs(e.tag, {
      class: Xw(),
      style: Is(e.styleVars)
    }, w(r.default));
  }
});
const $a = Kw;
var No = [];
function St(e) {
  No.forEach((r) => document.documentElement.style.removeProperty(r)), No.length = 0;
  var n = Is(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), No.push(a);
  });
}
St.Component = $a;
$a.install = function(e) {
  e.component($a.name, $a);
};
St.install = function(e) {
  e.component($a.name, $a);
};
var Zk = $a, Zw = {
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
  n: Jw,
  classes: Qw
} = ne("switch");
function _w(e, n) {
  var r = ie("var-loading"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = De("ripple"), l = De("hover");
  return ke((h(), k(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: q(e.styleComputed.switch)
      },
      [N(
        "div",
        {
          style: q(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), ke((h(), k(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [N(
          "div",
          {
            style: q(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), be(r, {
            key: 0,
            radius: e.radius,
            color: "currentColor"
          }, null, 8, ["radius"])) : x("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), Q(a, {
          hovering: e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), Q(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  )), [[l, e.hover, "desktop"]]);
}
var $v = ee({
  name: "VarSwitch",
  components: {
    VarLoading: Dn,
    VarFormDetails: xe,
    VarHoverOverlay: pn
  },
  directives: {
    Ripple: qe,
    Hover: Un
  },
  props: Zw,
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
    } = Tr(), u = () => o(e.rules, e.modelValue), d = () => Ae(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = D(() => {
      var {
        size: C,
        modelValue: V,
        color: $,
        closeColor: S,
        loadingColor: M,
        activeValue: E
      } = e;
      return {
        handle: {
          width: sn(C),
          height: sn(C),
          backgroundColor: V === E ? $ : S,
          color: M
        },
        ripple: {
          left: V === E ? sn(C, 0.5) : "-" + sn(C, 0.5),
          color: V === E ? $ : S || "#999",
          width: sn(C, 2),
          height: sn(C, 2)
        },
        track: {
          height: sn(C, 0.72),
          width: sn(C, 1.9),
          borderRadius: sn(C, 2 / 3),
          filter: V === E || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === E ? $ : S
        },
        switch: {
          height: sn(C, 1.2),
          width: sn(C, 2)
        }
      };
    }), f = D(() => sn(e.size || 0, 0.4)), m = (C) => {
      var {
        onClick: V,
        onChange: $,
        disabled: S,
        loading: M,
        readonly: E,
        modelValue: T,
        activeValue: p,
        inactiveValue: P,
        "onUpdate:modelValue": j
      } = e;
      if (w(V, C), !(S || M || E || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var R = T === p ? P : p;
        w($, R), w(j, R), d();
      }
    }, g = (C) => {
      e.disabled || r != null && r.disabled.value || s(C);
    }, b = () => {
      w(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return w(n, y), {
      n: Jw,
      classes: Qw,
      switchActive: m,
      hovering: i,
      hover: g,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
$v.render = _w;
const Ta = $v;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Jk = Ta, xw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, Tv = Symbol("TABS_BIND_TAB_KEY");
function eC() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = on(Tv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function nC() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = tn(Tv);
  return n || On("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Lt,
  classes: rC
} = ne("tab");
function aC(e, n) {
  var r = De("ripple");
  return ke((h(), k(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var Pv = ee({
  name: "VarTab",
  directives: {
    Ripple: qe
  },
  props: xw,
  setup(e) {
    var n = O(null), r = D(() => e.name), a = D(() => e.disabled), t = D(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = nC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: g
    } = l, b = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), C = () => e.disabled ? f.value : y() ? d.value : v.value, V = () => e.disabled ? Lt("$-tab--disabled") : y() ? Lt("$-tab--active") : Lt("$-tab--inactive"), $ = (S) => {
      var {
        disabled: M,
        name: E,
        onClick: T
      } = e;
      M || (w(T, E ?? o.value, S), s(b));
    };
    return le(() => e.name, g), le(() => e.disabled, g), {
      n: Lt,
      classes: rC,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: C,
      computeColorClass: V,
      handleClick: $
    };
  }
});
Pv.render = aC;
const Pa = Pv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Qk = Pa, tC = {
  name: {
    type: [String, Number]
  }
}, {
  n: oC,
  classes: iC
} = ne("tab-item");
function lC(e, n) {
  var r = ie("var-swipe-item");
  return h(), be(r, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: fe(() => [Y(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Ov = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Kn
  },
  props: tC,
  setup(e) {
    var n = O(!1), r = D(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Fb(), {
      bindLists: o
    } = Yb(), l = (s) => {
      n.value = s;
    }, i = {
      index: a,
      name: r,
      current: D(() => n.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: oC,
      classes: iC,
      current: n
    };
  }
});
Ov.render = lC;
const Oa = Ov;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var _k = Oa, sC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: uC,
  classes: dC
} = ne("table");
function vC(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [N(
      "div",
      {
        class: c(e.n("main"))
      },
      [N(
        "table",
        {
          class: c(e.n("table")),
          style: q({
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
var Vv = ee({
  name: "VarTable",
  props: sC,
  setup() {
    return {
      toSizeUnit: ye,
      n: uC,
      classes: dC,
      formatElevation: gn
    };
  }
});
Vv.render = vC;
const Va = Vv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var xk = Va;
function cs(e) {
  return ["horizontal", "vertical"].includes(e);
}
function fC(e) {
  return ["auto", "always"].includes(e);
}
function cC(e) {
  return ["normal", "reverse"].includes(e);
}
var mC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: cs
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: cs
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
    validator: fC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: cC
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Qe(jt, "cssMode"),
  stickyZIndex: Qe(jt, "zIndex"),
  offsetTop: Qe(jt, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function ms(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ps(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: pC,
  classes: hC
} = ne("tabs");
function gC(e, n) {
  return h(), be(nt(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: fe(() => [N(
      "div",
      Ne({
        class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
        style: {
          background: e.color
        }
      }, e.$attrs),
      [N(
        "div",
        {
          ref: "scrollerEl",
          class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
        },
        [Y(e.$slots, "default"), N(
          "div",
          {
            class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
            style: q({
              width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
              height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
              transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
            })
          },
          [N(
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
var Mv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Zn
  },
  inheritAttrs: !1,
  props: mC,
  setup(e) {
    var n = O("0px"), r = O("0px"), a = O("0px"), t = O("0px"), o = O(!1), l = O(null), i = D(() => e.active), s = D(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = D(() => e.activeColor), d = D(() => e.inactiveColor), v = D(() => e.disabledColor), f = D(() => e.itemDirection), m = O(null), {
      tabList: g,
      bindTabList: b,
      length: y
    } = eC(), C = (R) => {
      var Z, J = (Z = R.name.value) != null ? Z : R.index.value, {
        active: z,
        onChange: L,
        onClick: F
      } = e;
      w(e["onUpdate:active"], J), w(F, J), J !== z && w(L, J);
    }, V = () => g.find((R) => {
      var {
        name: Z
      } = R;
      return e.active === Z.value;
    }), $ = (R) => g.find((Z) => {
      var {
        index: J
      } = Z;
      return (R ?? e.active) === J.value;
    }), S = () => {
      if (y.value !== 0) {
        var {
          active: R
        } = e;
        if (dn(R)) {
          var Z = oo(R, 0, y.value - 1);
          return w(e["onUpdate:active"], Z), $(Z);
        }
      }
    }, M = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, E = (R) => {
      var {
        element: Z
      } = R, J = Z.value;
      J && (e.layoutDirection === "horizontal" ? (n.value = J.offsetWidth + "px", a.value = J.offsetLeft + "px") : (r.value = J.offsetHeight + "px", t.value = J.offsetTop + "px"));
    }, T = (R) => {
      var {
        element: Z
      } = R;
      if (o.value) {
        var J = l.value, z = Z.value;
        if (e.layoutDirection === "horizontal") {
          var L = z.offsetLeft + z.offsetWidth / 2 - J.offsetWidth / 2;
          ht(J, {
            left: L,
            animation: zo
          });
        } else {
          var F = z.offsetTop + z.offsetHeight / 2 - J.offsetHeight / 2;
          ht(J, {
            top: F,
            animation: zo
          });
        }
      }
    }, p = () => {
      var R = V() || $() || S();
      !R || R.disabled.value || (M(), E(R), T(R));
    }, P = /* @__PURE__ */ function() {
      var R = ps(function* () {
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
      resize: p,
      onTabClick: C
    };
    return b(j), le(() => y.value, /* @__PURE__ */ ps(function* () {
      yield zn(), p();
    })), le(() => e.active, p), le(() => e.scrollable, p), Vr(p), uo(p), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Le,
      toSizeUnit: ye,
      n: pC,
      classes: hC,
      resize: p,
      resizeSticky: P,
      formatElevation: gn
    };
  }
});
Mv.render = gC;
const Ma = Mv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var e$ = Ma, yC = {
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
function hs(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function bC(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: wC
} = ne("tabs-items");
function CC(e, n) {
  var r = ie("var-swipe");
  return h(), be(r, {
    class: c(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: fe(() => [Y(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
var Ev = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: Xn
  },
  props: yC,
  setup(e) {
    var n = O(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Hb(), o = (v) => r.find((f) => {
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
      m && (r.forEach((g) => {
        var {
          setCurrent: b
        } = g;
        return b(!1);
      }), m.setCurrent(!0), (f = n.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = r.find((b) => {
        var {
          index: y
        } = b;
        return y.value === v;
      }), g = (f = m.name.value) != null ? f : m.index.value;
      w(e["onUpdate:active"], g);
    }, d = () => n.value;
    return a({}), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ bC(function* () {
      yield zn(), s(e.active);
    })), {
      swipe: n,
      n: wC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Ev.render = CC;
const Ea = Ev;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var n$ = Ea;
const SC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, kC = {
  "--badge-default-color": "#555"
}, $C = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, TC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, PC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, OC = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, VC = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, MC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, EC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, IC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, BC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, NC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, DC = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, AC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, zC = {
  "--popup-content-background-color": "#1e1e1e"
}, LC = {
  "--pull-refresh-background": "#303030"
}, RC = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, UC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, HC = {
  "--select-scroller-background": "#303030"
}, FC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, YC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, jC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, WC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, GC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, qC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, XC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, KC = {
  "--tabs-background": "#1e1e1e"
}, ZC = {
  "--app-bar-color": "#272727"
}, JC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, QC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, _C = {
  "--menu-background-color": "#272727"
}, xC = {
  "--breadcrumb-inactive-color": "#aaa"
}, eS = {
  "--paper-background": "#303030"
}, nS = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, rS = {
  "--link-default-color": "#fff"
}, aS = {
  "--progress-label-color": "#fff"
}, tS = {
  "--options-text-color": "#fff"
}, oS = {
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
const iS = Ti({
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
}, $C, PC, TC, qC, EC, FC, KC, WC, zC, IC, SC, VC, kC, XC, MC, LC, jC, YC, DC, GC, NC, HC, RC, OC, BC, AC, ZC, JC, QC, _C, UC, xC, eS, nS, rS, aS, tS, oS);
var lS = {
  dark: iS
}, r$ = null;
const Pi = lS;
var Sn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], un = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], gs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function sS(e) {
  return ["ampm", "24hr"].includes(e);
}
var uS = {
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
    validator: sS
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
}, Iv = (e, n) => e === "24hr" || n === "am", xi = (e, n, r) => {
  var a = Sn.findIndex((o) => A(o) === A(r)), t = Iv(e, n) ? r : un[a];
  return {
    hourStr: t,
    hourNum: A(t)
  };
}, mn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: A(n),
    minute: A(r),
    second: A(a)
  };
}, Bv = (e) => {
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
      hour: g,
      minute: b
    } = mn(i);
    f = g === v && a > b;
  }
  if (!i && s) {
    var {
      hour: y,
      minute: C
    } = mn(s);
    f = y === v && a < C;
  }
  if (i && s) {
    var {
      hour: V,
      minute: $
    } = mn(i), {
      hour: S,
      minute: M
    } = mn(s);
    f = S === v && a < M || V === v && a > $;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Nv = (e) => {
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
  } = xi(t, o, l), m = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: y,
      second: C
    } = mn(s);
    m = b === f && y < i || y === i && a > C;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: $,
      second: S
    } = mn(u);
    m = V === f && $ > i || $ === i && a > S;
  }
  if (s && u) {
    var {
      hour: M,
      minute: E,
      second: T
    } = mn(s), {
      hour: p,
      minute: P,
      second: j
    } = mn(u);
    m = M === f && E < i || p === f && P > i || M === f && E === i && a > T || p === f && P === i && a < j;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || g;
}, {
  n: dS,
  classes: vS
} = ne("time-picker");
function fS(e, n) {
  return h(), k(
    "div",
    {
      class: c(e.n("clock"))
    },
    [N(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), k(
      Me,
      null,
      Ue(e.timeScales, (r, a) => (h(), k(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: q(e.getStyle(a, r, !1))
        },
        te(r),
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
        Me,
        null,
        Ue(e.hours24, (r, a) => (h(), k(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: q(e.getStyle(a, r, !0))
          },
          te(r),
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
var Dv = ee({
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
    } = n, a = O(null), t = O([]), o = O([]), l = D(() => ({
      transform: "rotate(" + A(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = D(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = D(() => e.type === "hour" ? Sn : gs), u = (y, C) => {
      var V;
      y = (V = y) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var $ = e.type === "minute" ? Bv : Nv, S = {
        time: A(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: A(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return C && e.type === "minute" && Reflect.deleteProperty(S, "minute"), $(S);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var y = e.isInner ? un[i.value] : s.value[i.value];
      return s.value === gs ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, C) => C ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Iv(e.format, e.ampm))
          return t.value.includes(y);
        var C = Sn.findIndex((V) => V === y);
        return o.value.includes(C);
      }
      return u(y, !0);
    }, m = (y, C, V) => {
      var $ = 2 * Math.PI / 12 * y - Math.PI / 2, S = 50 * (1 + Math.cos($)), M = 50 * (1 + Math.sin($)), E = () => v(y, V) ? f(C) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: T,
        color: p
      } = E();
      return {
        left: S + "%",
        top: M + "%",
        backgroundColor: T,
        color: p
      };
    }, g = () => {
      var {
        width: y,
        height: C
      } = rn(a.value);
      return {
        width: y,
        height: C
      };
    }, b = () => {
      if (i.value !== void 0) {
        var y = e.ampm === "am" ? Sn : un;
        return Na(y[i.value], 2, "0");
      }
    };
    return le([i, () => e.isInner], (y, C) => {
      var [V, $] = y, [S, M] = C, E = V === S && $ === M;
      if (!(E || e.type !== "hour" || i.value === void 0)) {
        var T = $ ? un[i.value] : b(), p = e.useSeconds ? ":" + e.time.second : "", P = T + ":" + e.time.minute + p;
        e.preventNextUpdate || r("update", P), r("change-prevent-update");
      }
    }), le(() => e.rad, (y, C) => {
      if (!(e.type === "hour" || y === void 0 || C === void 0)) {
        var V = y / 6 >= 0 ? y / 6 : y / 6 + 60, $ = C / 6 >= 0 ? C / 6 : C / 6 + 60;
        if (V !== $) {
          var S, {
            hourStr: M
          } = xi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var E = ue().minute(V).format("mm"), T = e.useSeconds ? ":" + e.time.second : "";
            S = M + ":" + E + T;
          }
          if (e.type === "second") {
            var p = ue().second(V).format("ss"), P = e.useSeconds ? ":" + p : "";
            S = M + ":" + e.time.minute + P;
          }
          r("update", S);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [C, V, $] = y;
      if (t.value = [], C && !V) {
        var {
          hour: S
        } = mn(C), M = Sn.filter((G) => A(G) > S), E = un.filter((G) => A(G) > S);
        t.value = [...M, ...E];
      }
      if (!C && V) {
        var {
          hour: T
        } = mn(V), p = Sn.filter((G) => A(G) < T), P = un.filter((G) => A(G) < T);
        t.value = [...p, ...P];
      }
      if (C && V) {
        var {
          hour: j
        } = mn(C), {
          hour: R
        } = mn(V), Z = Sn.filter((G) => A(G) < R || A(G) > j), J = un.filter((G) => A(G) < R || A(G) > j);
        t.value = [...Z, ...J];
      }
      if ($ != null && $.hours) {
        var {
          hours: z
        } = $, L = Sn.filter((G) => !z(A(G))), F = un.filter((G) => !z(A(G)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...L, ...F])];
      }
      o.value = t.value.map((G) => un.findIndex((oe) => G === oe)).filter((G) => G >= 0);
    }, {
      immediate: !0
    }), {
      n: dS,
      classes: vS,
      hours24: un,
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
Dv.render = fS;
const cS = Dv;
var {
  n: mS,
  classes: pS
} = ne("time-picker"), hS = (e) => (La(""), e = e(), Ra(), e), gS = /* @__PURE__ */ hS(() => /* @__PURE__ */ N(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), yS = {
  key: 0
};
function bS(e, n) {
  var r = ie("clock");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [N(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [N(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [N(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          te(e.time.hour),
          3
          /* TEXT, CLASS */
        ), gS, N(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          te(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), k("span", yS, ":")) : x("v-if", !0), e.useSeconds ? (h(), k(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          te(e.time.second),
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
        [N(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), N(
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
    ), N(
      "div",
      {
        class: c(e.n("body"))
      },
      [N(
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
        [Q(Le, {
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
var Av = ee({
  name: "VarTimePicker",
  components: {
    Clock: cS
  },
  props: uS,
  setup(e) {
    var n = O(null), r = O(null), a = O(null), t = O(!1), o = O(!1), l = O(!1), i = O(!1), s = O(!1), u = O(void 0), d = O(0), v = O(0), f = O("hour"), m = O("am"), g = O(!1), b = O(!1), y = O({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = ze({
      x: 0,
      y: 0
    }), V = ze({
      x: [],
      y: []
    }), $ = D(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (B) => {
      w(e["onUpdate:modelValue"], B), w(e.onChange, B);
    }, M = (B) => B * 57.29577951308232, E = (B) => {
      i.value = !1, b.value = !1, f.value = B;
    }, T = (B) => {
      var {
        disableHour: W
      } = a.value, re = Sn.findIndex((_) => A(_) === A(y.value.hour)), H = B === "am" ? Sn : un, X = [...H.slice(re), ...H.slice(0, re)];
      return X.find((_, ve) => (o.value = ve !== 0, !W.includes(_)));
    }, p = (B) => {
      if (!e.readonly) {
        m.value = B;
        var W = T(B);
        if (W) {
          var re = e.useSeconds ? ":" + y.value.second : "", H = Na(W, 2, "0") + ":" + y.value.minute + re;
          S(H);
        }
      }
    }, P = (B, W) => {
      var re = B >= V.x[0] && B <= V.x[1], H = W >= V.y[0] && W <= V.y[1];
      return re && H;
    }, j = (B) => {
      var W = e.format === "24hr" ? "HH" : "hh", {
        hour: re,
        minute: H,
        second: X
      } = mn(B);
      return {
        hour: ue().hour(re).format(W),
        minute: ue().minute(H).format("mm"),
        second: ue().second(X).format("ss")
      };
    }, R = (B) => {
      var W = B / 30;
      return W >= 0 ? W : W + 12;
    }, Z = () => {
      var {
        width: B,
        height: W
      } = a.value.getSize(), re = C.x - B / 2 - 8, H = C.x + B / 2 + 8, X = C.y - W / 2 - 8, _ = C.y + W / 2 + 8;
      return {
        rangeXMin: re,
        rangeXMax: H,
        rangeYMin: X,
        rangeYMax: _
      };
    }, J = (B, W, re) => {
      var {
        disableHour: H
      } = a.value;
      l.value = P(B, W);
      var X = Math.round(re / 30) * 30 + 90, _ = R(X), ve = t.value ? Sn[_] : un[_];
      if (H.includes(ve) || (t.value = e.format === "24hr" ? P(B, W) : !1), t.value === l.value) {
        var Ce = t.value || m.value === "pm" ? un[_] : Sn[_];
        g.value = H.includes(Ce), !g.value && (u.value = X, i.value = !0);
      }
    }, z = (B) => {
      var {
        disableHour: W
      } = a.value, re = Math.round(B / 6) * 6 + 90, H = re / 6 >= 0 ? re / 6 : re / 6 + 60, X = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: W,
        allowedTime: e.allowedTime
      };
      b.value = Bv(X), !b.value && (d.value = re, s.value = !0);
    }, L = (B) => {
      var {
        disableHour: W
      } = a.value, re = Math.round(B / 6) * 6 + 90, H = re / 6 >= 0 ? re / 6 : re / 6 + 60, X = {
        time: H,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: A(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: W,
        allowedTime: e.allowedTime
      };
      Nv(X) || (v.value = re);
    }, F = () => {
      var {
        left: B,
        top: W,
        width: re,
        height: H
      } = rn(n.value);
      if (C.x = B + re / 2, C.y = W + H / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: X,
          rangeXMax: _,
          rangeYMin: ve,
          rangeYMax: Ce
        } = Z();
        V.x = [X, _], V.y = [ve, Ce];
      }
    }, G = (B) => {
      if (B.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: W,
          clientY: re
        } = B.touches[0], H = W - C.x, X = re - C.y, _ = Math.round(M(Math.atan2(X, H)));
        f.value === "hour" ? J(W, re, _) : f.value === "minute" ? z(_) : L(_);
      }
    }, oe = () => {
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
          hour: W,
          minute: re,
          second: H
        } = mn(B), X = ue().hour(W).format("hh"), _ = ue().hour(W).format("HH"), ve = ue().minute(re).format("mm"), Ce = ue().second(H).format("ss");
        u.value = (X === "12" ? 0 : A(X)) * 30, d.value = A(ve) * 6, v.value = A(Ce) * 6, y.value = j(B), e.format !== "24hr" && (m.value = Na("" + W, 2, "0") === _ && un.includes(_) ? "pm" : "am"), t.value = e.format === "24hr" && un.includes(_);
      }
    }, {
      immediate: !0
    }), {
      n: mS,
      classes: pS,
      getRad: $,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: G,
      checkPanel: E,
      checkAmpm: p,
      end: oe,
      update: S,
      changePreventUpdate: I,
      formatElevation: gn
    };
  }
});
Av.render = bS;
const Ia = Av;
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
var a$ = Ia, wS = {
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
function ys(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Do(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: CS,
  classes: SS
} = ne("uploader"), kS = 0, $S = ["onClick"], TS = ["onClick"], PS = ["src", "alt"], OS = ["multiple", "accept", "capture", "disabled"], VS = ["src"];
function MS(e, n) {
  var r = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = ie("var-popup"), l = De("ripple"), i = De("hover");
  return h(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [N(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), k(
        Me,
        null,
        Ue(e.files, (s) => ke((h(), k("div", {
          class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
          key: s.id,
          onClick: (u) => e.preview(s)
        }, [N(
          "div",
          {
            class: c(e.n("file-name"))
          },
          te(s.name || s.url),
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
        }, null, 8, ["class"])], 10, TS)) : x("v-if", !0), s.cover ? (h(), k("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: q({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, PS)) : x("v-if", !0), N(
          "div",
          {
            class: c(e.n("file-indicator"))
          },
          [N(
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
        )], 10, $S)), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? ke((h(), k(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [N("input", {
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
        }, null, 42, OS), Y(e.$slots, "default", {}, () => [Q(r, {
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
    }, null, 8, ["error-message", "extra-message"]), Q(o, {
      class: c(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      show: e.showPreview,
      "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
      onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
    }, {
      default: fe(() => {
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
        }, null, 10, VS)) : x("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var zv = ee({
  name: "VarUploader",
  directives: {
    Ripple: qe,
    Hover: Un
  },
  components: {
    VarIcon: Ve,
    VarPopup: kn,
    VarFormDetails: xe,
    VarHoverOverlay: pn
  },
  props: wS,
  setup(e) {
    var n = O(null), r = O(!1), a = O(null), t = D(() => {
      var {
        maxlength: G,
        modelValue: {
          length: oe
        }
      } = e;
      return dn(G) ? oe + " / " + G : "";
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
    } = Tr(), m = D(() => {
      var {
        modelValue: G,
        hideList: oe
      } = e;
      return oe ? [] : G;
    }), g = (G) => {
      var {
        disabled: oe,
        readonly: I,
        previewed: B
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || oe || I || !B)) {
        var {
          url: W
        } = G;
        if (He(W) && tl(W)) {
          Rn(W);
          return;
        }
        He(W) && ol(W) && (a.value = G, r.value = !0);
      }
    }, b = (G) => ({
      id: kS++,
      url: "",
      cover: "",
      name: G.name,
      file: G,
      progress: 0
    }), y = (G) => {
      var oe = G.target, {
        files: I
      } = oe;
      return Array.from(I);
    }, C = (G) => new Promise((oe) => {
      if (!G.file.type.startsWith("image")) {
        oe(G);
        return;
      }
      var I = new FileReader();
      I.onload = () => {
        var B = I.result;
        G.cover = B, G.url = B, oe(G);
      }, I.readAsDataURL(G.file);
    }), V = (G) => G.map(C), $ = (G) => {
      var {
        onBeforeRead: oe
      } = e;
      return G.map((I) => new Promise((B) => {
        oe || B({
          valid: !0,
          varFile: I
        });
        var W = Rt(w(oe, ze(I)));
        Promise.all(W).then((re) => {
          B({
            valid: re.every(Boolean),
            varFile: I
          });
        });
      }));
    }, S = /* @__PURE__ */ function() {
      var G = Do(function* (oe) {
        var {
          maxsize: I,
          maxlength: B,
          modelValue: W,
          onOversize: re,
          onAfterRead: H,
          onBeforeFilter: X,
          readonly: _,
          disabled: ve
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ve || _)) {
          var Ce = (Ye) => Ye.filter((je) => je.file.size > A(I) ? (w(re, ze(je)), !1) : !0), Ee = (Ye) => {
            var je = Math.min(Ye.length, A(B) - W.length);
            return Ye.slice(0, je);
          }, ae = /* @__PURE__ */ function() {
            var Ye = Do(function* (je) {
              if (!X)
                return je;
              var se = Rt(X);
              for (var we of se)
                je = yield we(je);
              return je;
            });
            return function(se) {
              return Ye.apply(this, arguments);
            };
          }(), de = y(oe), me = de.map(b);
          me = yield ae(me), me = I != null ? Ce(me) : me, me = B != null ? Ee(me) : me;
          var Pe = yield Promise.all(V(me)), Fe = yield Promise.all($(Pe)), Xe = Fe.filter((Ye) => {
            var {
              valid: je
            } = Ye;
            return je;
          }).map((Ye) => {
            var {
              varFile: je
            } = Ye;
            return je;
          });
          w(e["onUpdate:modelValue"], [...W, ...Xe]), oe.target.value = "", Xe.forEach((Ye) => w(H, ze(Ye)));
        }
      });
      return function(I) {
        return G.apply(this, arguments);
      };
    }(), M = /* @__PURE__ */ function() {
      var G = Do(function* (oe) {
        var {
          disabled: I,
          readonly: B,
          modelValue: W,
          onBeforeRemove: re,
          onRemove: H
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || I || B)) {
          if (re) {
            var X = Rt(w(re, ze(oe)));
            if ((yield Promise.all(X)).some((ve) => !ve))
              return;
          }
          var _ = W.filter((ve) => ve !== oe);
          w(H, ze(oe)), Z("onRemove"), w(e["onUpdate:modelValue"], _);
        }
      });
      return function(I) {
        return G.apply(this, arguments);
      };
    }(), E = () => e.modelValue.filter((G) => G.state === "success"), T = () => e.modelValue.filter((G) => G.state === "error"), p = () => e.modelValue.filter((G) => G.state === "loading"), P = () => {
      n.value.click();
    }, j = () => {
      a.value = null, r.value = !1, Rn.close();
    }, R = {
      getSuccess: E,
      getError: T,
      getLoading: p
    }, Z = (G) => {
      Ae(() => {
        var {
          validateTrigger: oe,
          rules: I,
          modelValue: B
        } = e;
        s(oe, G, I, B, R);
      });
    }, J = !1, z = () => u(e.rules, e.modelValue, R), L = () => {
      J = !0, w(e["onUpdate:modelValue"], []), d();
    }, F = {
      validate: z,
      resetValidation: d,
      reset: L
    };
    return w(l, F), le(() => e.modelValue, () => {
      !J && Z("onChange"), J = !1;
    }, {
      deep: !0
    }), {
      n: CS,
      classes: SS,
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
      toNumber: A,
      handleHovering: f,
      isHTMLSupportVideo: ol,
      isHTMLSupportImage: tl,
      preview: g,
      handleChange: S,
      handleRemove: M,
      getSuccess: E,
      getError: T,
      getLoading: p,
      validate: z,
      resetValidation: d,
      reset: L,
      chooseFile: P,
      closePreview: j,
      toSizeUnit: ye
    };
  }
});
zv.render = MS;
const Ba = zv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var t$ = Ba;
const ES = "2.12.1";
function IS(e) {
  _n.install && e.use(_n), Dr.install && e.use(Dr), Ar.install && e.use(Ar), zr.install && e.use(zr), Lr.install && e.use(Lr), cr.install && e.use(cr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Hr.install && e.use(Hr), Fr.install && e.use(Fr), nn.install && e.use(nn), Yr.install && e.use(Yr), jr.install && e.use(jr), mr.install && e.use(mr), pr.install && e.use(pr), Wr.install && e.use(Wr), hr.install && e.use(hr), Gr.install && e.use(Gr), qr.install && e.use(qr), Xr.install && e.use(Xr), bn.install && e.use(bn), Kr.install && e.use(Kr), Zr.install && e.use(Zr), Qr.install && e.use(Qr), xn.install && e.use(xn), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), qn.install && e.use(qn), xe.install && e.use(xe), Un.install && e.use(Un), pn.install && e.use(pn), Ve.install && e.use(Ve), na.install && e.use(na), Rn.install && e.use(Rn), ra.install && e.use(ra), aa.install && e.use(aa), Cr.install && e.use(Cr), gt.install && e.use(gt), ta.install && e.use(ta), oa.install && e.use(oa), Dn.install && e.use(Dn), bi.install && e.use(bi), jo.install && e.use(jo), Jn.install && e.use(Jn), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), za.install && e.use(za), kn.install && e.use(kn), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), qe.install && e.use(qe), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), $i.install && e.use($i), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), Zn.install && e.use(Zn), St.install && e.use(St), Xn.install && e.use(Xn), Kn.install && e.use(Kn), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Va.install && e.use(Va), Ma.install && e.use(Ma), Ea.install && e.use(Ea), Pi.install && e.use(Pi), Ia.install && e.use(Ia), br.install && e.use(br), Ba.install && e.use(Ba);
}
const o$ = {
  version: ES,
  install: IS,
  ActionSheet: _n,
  AppBar: Dr,
  Avatar: Ar,
  AvatarGroup: zr,
  BackTop: Lr,
  Badge: cr,
  BottomNavigation: Rr,
  BottomNavigationItem: Ur,
  Breadcrumb: Hr,
  Breadcrumbs: Fr,
  Button: nn,
  ButtonGroup: Yr,
  Card: jr,
  Cell: mr,
  Checkbox: pr,
  CheckboxGroup: Wr,
  Chip: hr,
  Col: Gr,
  Collapse: qr,
  CollapseItem: Xr,
  Context: bn,
  Countdown: Kr,
  Counter: Zr,
  DatePicker: Qr,
  Dialog: xn,
  Divider: _r,
  Ellipsis: xr,
  Fab: ea,
  Form: qn,
  FormDetails: xe,
  Hover: Un,
  HoverOverlay: pn,
  Icon: Ve,
  Image: na,
  ImagePreview: Rn,
  IndexAnchor: ra,
  IndexBar: aa,
  Input: Cr,
  Lazy: gt,
  Link: ta,
  List: oa,
  Loading: Dn,
  LoadingBar: bi,
  Locale: jo,
  Menu: Jn,
  Option: ia,
  Overlay: la,
  Pagination: sa,
  Paper: ua,
  Picker: za,
  Popup: kn,
  Progress: da,
  PullRefresh: va,
  Radio: fa,
  RadioGroup: ca,
  Rate: ma,
  Result: pa,
  Ripple: qe,
  Row: ha,
  Select: ga,
  Skeleton: ya,
  Slider: ba,
  Snackbar: $i,
  Space: Ca,
  Step: Sa,
  Steps: ka,
  Sticky: Zn,
  StyleProvider: St,
  Swipe: Xn,
  SwipeItem: Kn,
  Switch: Ta,
  Tab: Pa,
  TabItem: Oa,
  Table: Va,
  Tabs: Ma,
  TabsItems: Ea,
  Themes: Pi,
  TimePicker: Ia,
  Tooltip: br,
  Uploader: Ba
};
export {
  _n as ActionSheet,
  Dr as AppBar,
  Ar as Avatar,
  zr as AvatarGroup,
  Lr as BackTop,
  cr as Badge,
  Rr as BottomNavigation,
  Ur as BottomNavigationItem,
  Hr as Breadcrumb,
  Fr as Breadcrumbs,
  nn as Button,
  Yr as ButtonGroup,
  jr as Card,
  mr as Cell,
  pr as Checkbox,
  Wr as CheckboxGroup,
  hr as Chip,
  Gr as Col,
  qr as Collapse,
  Xr as CollapseItem,
  bn as Context,
  Kr as Countdown,
  Zr as Counter,
  Qr as DatePicker,
  xn as Dialog,
  _r as Divider,
  xr as Ellipsis,
  ea as Fab,
  qn as Form,
  xe as FormDetails,
  Un as Hover,
  pn as HoverOverlay,
  Ve as Icon,
  na as Image,
  Rn as ImagePreview,
  ra as IndexAnchor,
  aa as IndexBar,
  Cr as Input,
  gt as Lazy,
  ta as Link,
  oa as List,
  Dn as Loading,
  bi as LoadingBar,
  jo as Locale,
  Jn as Menu,
  ia as Option,
  la as Overlay,
  qo as PIXEL,
  sa as Pagination,
  ua as Paper,
  za as Picker,
  kn as Popup,
  da as Progress,
  va as PullRefresh,
  fa as Radio,
  ca as RadioGroup,
  ma as Rate,
  pa as Result,
  qe as Ripple,
  ha as Row,
  Qi as SNACKBAR_TYPE,
  ga as Select,
  ya as Skeleton,
  ba as Slider,
  $i as Snackbar,
  Ca as Space,
  Sa as Step,
  ka as Steps,
  Zn as Sticky,
  St as StyleProvider,
  Xn as Swipe,
  Kn as SwipeItem,
  Ta as Switch,
  Pa as Tab,
  Oa as TabItem,
  Va as Table,
  Ma as Tabs,
  Ea as TabsItems,
  Pi as Themes,
  Ia as TimePicker,
  br as Tooltip,
  Ba as Uploader,
  RS as _ActionSheetComponent,
  US as _AppBarComponent,
  FS as _AvatarComponent,
  YS as _AvatarGroupComponent,
  XS as _BackTopComponent,
  KS as _BadgeComponent,
  ZS as _BottomNavigationComponent,
  JS as _BottomNavigationItemComponent,
  QS as _BreadcrumbComponent,
  _S as _BreadcrumbsComponent,
  qS as _ButtonComponent,
  xS as _ButtonGroupComponent,
  ek as _CardComponent,
  nk as _CellComponent,
  ak as _CheckboxComponent,
  tk as _CheckboxGroupComponent,
  ok as _ChipComponent,
  ik as _ColComponent,
  lk as _CollapseComponent,
  sk as _CollapseItemComponent,
  NS as _ContextComponent,
  uk as _CountdownComponent,
  dk as _CounterComponent,
  vk as _DatePickerComponent,
  fk as _DialogComponent,
  ck as _DividerComponent,
  pk as _EllipsisComponent,
  hk as _FabComponent,
  gk as _FormComponent,
  rk as _FormDetailsComponent,
  GS as _HoverComponent,
  WS as _HoverOverlayComponent,
  zS as _IconComponent,
  yk as _ImageComponent,
  Ck as _ImagePreviewComponent,
  kk as _IndexAnchorComponent,
  $k as _IndexBarComponent,
  Tk as _InputComponent,
  HS as _LazyComponent,
  Pk as _LinkComponent,
  Ok as _ListComponent,
  Vk as _LoadingBarComponent,
  jS as _LoadingComponent,
  LS as _LocaleComponent,
  Mk as _MenuComponent,
  Ek as _OptionComponent,
  Ik as _OverlayComponent,
  Bk as _PaginationComponent,
  Nk as _PaperComponent,
  Dk as _PickerComponent,
  AS as _PopupComponent,
  Ak as _ProgressComponent,
  zk as _PullRefreshComponent,
  Lk as _RadioComponent,
  Rk as _RadioGroupComponent,
  Uk as _RateComponent,
  Hk as _ResultComponent,
  DS as _RippleComponent,
  Fk as _RowComponent,
  Yk as _SelectComponent,
  jk as _SkeletonComponent,
  Wk as _SliderComponent,
  Gk as _SnackbarComponent,
  qk as _SpaceComponent,
  Xk as _StepComponent,
  Kk as _StepsComponent,
  Sk as _StickyComponent,
  Zk as _StyleProviderComponent,
  bk as _SwipeComponent,
  wk as _SwipeItemComponent,
  Jk as _SwitchComponent,
  Qk as _TabComponent,
  _k as _TabItemComponent,
  xk as _TableComponent,
  e$ as _TabsComponent,
  n$ as _TabsItemsComponent,
  r$ as _ThemesComponent,
  a$ as _TimePickerComponent,
  mk as _TooltipComponent,
  t$ as _UploaderComponent,
  Ef as actionSheetProps,
  Ni as add,
  Lf as appBarProps,
  sc as avatarGroupProps,
  rc as avatarProps,
  Uc as backTopProps,
  Gc as badgeProps,
  nm as bottomNavigationItemProps,
  Zc as bottomNavigationProps,
  lm as breadcrumbProps,
  cm as breadcrumbsProps,
  Bc as buttonProps,
  $m as cardProps,
  Em as cellProps,
  Xm as checkboxGroupProps,
  Um as checkboxProps,
  xm as chipProps,
  op as colProps,
  pp as collapseItemProps,
  vp as collapseProps,
  bp as countdownProps,
  ph as counterProps,
  zh as datePickerProps,
  o$ as default,
  Ke as defaultLazyOptions,
  xh as dialogProps,
  tg as dividerProps,
  js as enUS,
  Dm as formDetailsProps,
  Iy as formProps,
  Fs as iconProps,
  Ks as imageCache,
  _y as imagePreviewProps,
  zy as imageProps,
  vb as indexAnchorProps,
  pb as indexBarProps,
  Pb as inputProps,
  IS as install,
  Ab as linkProps,
  Ub as listProps,
  Kb as loadingBarProps,
  ur as loadingProps,
  o0 as menuProps,
  Gs as merge,
  v0 as optionProps,
  p0 as overlayProps,
  Je as pack,
  Ws as packs,
  g0 as paginationProps,
  S0 as paperProps,
  P0 as pickerProps,
  Pt as popupProps,
  z0 as progressProps,
  j0 as pullRefreshProps,
  x0 as radioGroupProps,
  q0 as radioProps,
  a1 as rateProps,
  l1 as resultProps,
  X1 as rowProps,
  _1 as selectProps,
  aw as skeletonProps,
  sw as sliderProps,
  mv as snackbarProps,
  Bw as spaceProps,
  Aw as stepProps,
  jw as stepsProps,
  jt as stickyProps,
  qw as styleProviderProps,
  kd as swipeProps,
  Zw as switchProps,
  tC as tabItemProps,
  xw as tabProps,
  sC as tableProps,
  yC as tabsItemsProps,
  mC as tabsProps,
  uS as timePickerProps,
  hy as tooltipProps,
  wS as uploaderProps,
  Di as use,
  Tr as useHoverOverlay,
  Bi as useLocale,
  ES as version,
  Ii as zhCN
};
