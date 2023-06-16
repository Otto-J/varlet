import { reactive as Ae, onMounted as ro, nextTick as De, onActivated as Vn, isRef as Fv, watch as le, onBeforeUnmount as no, onDeactivated as xa, unref as st, onUnmounted as ao, inject as Hv, getCurrentInstance as et, computed as A, provide as Yv, isVNode as St, ref as M, Comment as jv, Fragment as Ve, createApp as Wv, h as ws, onBeforeMount as Gv, defineComponent as ee, createVNode as Q, Teleport as Mn, Transition as Le, withDirectives as ke, vShow as Jr, mergeProps as Be, openBlock as h, createBlock as be, resolveDynamicComponent as rt, normalizeClass as c, normalizeStyle as G, resolveComponent as ie, resolveDirective as Ne, withCtx as ve, createElementVNode as D, renderSlot as Y, toDisplayString as ae, createElementBlock as T, renderList as Ue, createCommentVNode as x, onUpdated as kt, createTextVNode as Se, pushScopeId as La, popScopeId as Ra, withModifiers as Tr, normalizeProps as $t, guardReactiveProps as to, vModelText as qv, toRefs as Xv, createSlots as Cs, withKeys as rl, toRaw as nl, TransitionGroup as Kv } from "vue";
var Ss = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, IS = Ae(Ss);
const yr = Ae(Ss), Fe = (e) => typeof e == "string", Ao = (e) => typeof e == "boolean", ur = (e) => typeof e == "number", Oi = (e) => Object.prototype.toString.call(e) === "[object Object]", Zv = (e) => typeof e == "object" && e !== null, Tt = (e) => typeof e == "function", Pe = (e) => Array.isArray(e), Jv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Hr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Vi = (e) => e === window, L = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ao(e) ? Number(e) : e, Wt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, Mi = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, nt = () => typeof window < "u", al = (e) => [...new Set(e)], ks = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), Qv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), _v = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Rt = (e) => Pe(e) ? e : [e], oo = (e, r, n) => Math.min(n, Math.max(r, e)), xv = (e, r) => oo(e, 0, r.length - 1);
var tl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ol = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), ef = (e) => {
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
      this.has(n) && Wt(this.cache, n);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, zo = (e) => e, il = (e) => Math.pow(e, 3), $s = (e) => e < 0.5 ? il(e * 2) / 2 : 1 - il((1 - e) * 2) / 2, io = (e, r) => e ?? r, Ts = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Na = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Pr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function ll(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
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
function at(e) {
  return window.getComputedStyle(e);
}
function xe(e) {
  if (Vi(e)) {
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
    return Lo({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function rf(e) {
  var {
    left: r
  } = xe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function sl(e) {
  var {
    top: r
  } = xe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function mt(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Ei(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function nf(e) {
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
function Po(e) {
  var {
    transform: r
  } = at(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function kn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = at(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function af(e) {
  for (var r = [], n = e; !Vi(n); )
    n = kn(n), r.push(n);
  return r;
}
function Ps(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Pr(r, "target element cannot found"), n;
  }
  if (Zv(e))
    return e;
  Pr(r, 'type of prop "target" should be a selector or an element object');
}
function ul() {
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
var Os = (e) => Fe(e) && e.endsWith("rem"), tf = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), of = (e) => Fe(e) && e.endsWith("px") || ur(e), lf = (e) => Fe(e) && e.endsWith("%"), Vs = (e) => Fe(e) && e.endsWith("vw"), Ms = (e) => Fe(e) && e.endsWith("vh"), Es = (e) => Fe(e) && e.endsWith("vmin"), Is = (e) => Fe(e) && e.endsWith("vmax"), sf = (e) => Fe(e) && e.startsWith("calc("), uf = (e) => Fe(e) && e.startsWith("var("), je = (e) => {
  if (ur(e))
    return e;
  if (of(e))
    return +e.replace("px", "");
  if (!nt())
    return 0;
  var {
    width: r,
    height: n
  } = xe(window);
  if (Vs(e))
    return +e.replace("vw", "") * r / 100;
  if (Ms(e))
    return +e.replace("vh", "") * n / 100;
  if (Os(e)) {
    var a = +e.replace("rem", ""), t = at(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return Es(e) ? ul().vMin : Is(e) ? ul().vMax : Fe(e) ? L(e) : 0;
}, ye = (e) => {
  if (e != null)
    return lf(e) || Vs(e) || Ms(e) || tf(e) || Os(e) || sf(e) || uf(e) || Es(e) || Is(e) ? e : je(e) + "px";
}, lr = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = ye(e), a = n.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = Ts();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function dl(e) {
  var r = Ts();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function lo(e) {
  br(() => {
    br(e);
  });
}
function Ar() {
  return new Promise((e) => {
    br(() => {
      br(e);
    });
  });
}
function df() {
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
  } = r, l = Date.now(), i = mt(e), s = Ei(e);
  return new Promise((u) => {
    var d = () => {
      var f = (Date.now() - l) / t;
      if (f < 1) {
        var v = i + (n - i) * o(f), m = s + (a - s) * o(f);
        e.scrollTo(m, v), br(d);
      } else
        e.scrollTo(a, n), u();
    };
    br(d);
  });
}
function Bs(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + Qv(a);
    return r[o] = t, r;
  }, {});
}
function vf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Gt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function dr(e) {
  let r = !1;
  ro(() => {
    e(), De(() => {
      r = !0;
    });
  }), Vn(() => {
    r && e();
  });
}
function $n(e, r, n, a = {}) {
  if (!nt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Tt(m) ? m() : st(m), u = (m) => {
    if (l || i)
      return;
    const y = s(m);
    y && (y.addEventListener(r, n, {
      passive: t,
      capture: o
    }), l = !0);
  }, d = (m) => {
    if (!l || i)
      return;
    const y = s(m);
    y && (y.removeEventListener(r, n, {
      capture: o
    }), l = !1);
  };
  let f;
  Fv(e) && (f = le(() => e.value, (m, y) => {
    d(y), u(m);
  }));
  const v = () => {
    f == null || f(), d(e), i = !0;
  };
  return dr(() => {
    u(e);
  }), no(() => {
    d(e);
  }), xa(() => {
    d(e);
  }), v;
}
function Ns(e, r, n) {
  if (!nt())
    return;
  $n(document, r, (t) => {
    const o = st(e);
    o && !o.contains(t.target) && n(t);
  });
}
function so(e) {
  ao(() => {
    e();
  }), xa(() => {
    e();
  });
}
var ff = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function cf(e) {
  const r = et();
  return e in r.provides;
}
function tr(e) {
  if (!cf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Hv(e), { childInstances: n, collect: a, clear: t } = r, o = ff(r, ["childInstances", "collect", "clear"]), l = et();
  return {
    index: A(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      ro(() => {
        De().then(() => {
          a(l, u);
        });
      }), no(() => {
        De().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function mf(e) {
  const r = [], n = (a) => {
    if (a != null && a.component) {
      n(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      St(t) && (r.push(t), n(t));
    });
  };
  return n(e), r;
}
function or(e) {
  const r = et(), n = Ae([]), a = [], t = A(() => n.length), o = () => {
    const u = mf(r.subTree);
    n.sort((d, f) => u.indexOf(d.vnode) - u.indexOf(f.vnode));
  }, l = (u, d) => {
    n.push(u), a.push(d), o();
  }, i = (u, d) => {
    Wt(n, u), Wt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Yv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function uo(e) {
  $n(() => window, "resize", e, { passive: !0 }), $n(() => window, "orientationchange", e, { passive: !0 });
}
function pf(e, r) {
  const n = M(!1);
  return le(e, (a) => {
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
function Je(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function hf(e) {
  var r = Wv(e), n = document.createElement("div");
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
      return () => ws(e, Ro({}, r, n));
    }
  }, {
    unmount: t
  } = hf(a);
  return {
    unmountInstance: t
  };
}
function Ds(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== jv) {
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
    var t = fl(function* (o, l, i) {
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
function gf(e) {
  $n(() => window, "hashchange", e), $n(() => window, "popstate", e);
}
function vo() {
  var e = M(!1);
  return Vn(() => {
    e.value = !1;
  }), xa(() => {
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
      if (Pe(s)) {
        var [u, d, f = null] = s;
        return u ? d : f;
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
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  if (Pe(e))
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
function As(e, r, n) {
  n === void 0 && (n = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = n, i = t ?? "onUpdate:" + r.toString(), s = () => e[r] != null ? e[r] : o;
  if (!a)
    return A({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : w(e[i], d);
      }
    });
  var u = M(s());
  return le(() => e[r], () => {
    u.value = s();
  }), le(() => u.value, (d) => {
    l ? l(i, d) : w(e[i], d);
  }), u;
}
function qt() {
  return qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, qt.apply(this, arguments);
}
var {
  n: zs
} = re("ripple"), cl = 250;
function yf(e) {
  var {
    zIndex: r,
    position: n
  } = at(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function bf(e, r) {
  var {
    top: n,
    left: a
  } = xe(e), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = r.touches[0].clientX - a, u = r.touches[0].clientY - n, d = (t - l * 2) / 2, f = (o - l * 2) / 2, v = s - l, m = u - l;
  return {
    x: v,
    y: m,
    centerX: d,
    centerY: f,
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
      } = bf(this, e), s = document.createElement("div");
      s.classList.add(zs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), yf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function Uo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + zs());
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
function Rs() {
  if (!(!vf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function wf(e, r) {
  var n;
  e._ripple = qt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
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
function Cf(e) {
  e.removeEventListener("touchstart", Ls), e.removeEventListener("touchmove", Rs), e.removeEventListener("dragstart", Uo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Sf(e, r) {
  var n, a, t, o, l = {
    color: (n = r.value) == null ? void 0 : n.color,
    disabled: (a = r.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = qt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Us = {
  mounted: wf,
  unmounted: Cf,
  updated: Sf,
  install(e) {
    e.directive("ripple", this);
  }
}, BS = Us;
const We = Us;
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
function Fs() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Mt(e) {
  yr.locks[e] = 1, Fs();
}
function Et(e) {
  delete yr.locks[e], Fs();
}
function fo(e, r) {
  var {
    uid: n
  } = et();
  r && le(r, (a) => {
    a === !1 ? Et(n) : a === !0 && e() === !0 && Mt(n);
  }), le(e, (a) => {
    r && r() === !1 || (a === !0 ? Mt(n) : Et(n));
  }), Gv(() => {
    r && r() === !1 || e() === !0 && Mt(n);
  }), ao(() => {
    r && r() === !1 || e() === !0 && Et(n);
  }), Vn(() => {
    r && r() === !1 || e() === !0 && Mt(n);
  }), xa(() => {
    r && r() === !1 || e() === !0 && Et(n);
  });
}
function Ot(e, r) {
  var n = M(yr.zIndex);
  return le(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
var Hs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function $f() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = tr(Hs);
  return {
    index: n,
    popup: r,
    bindPopup: e
  };
}
function Tf() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = or(Hs);
  return {
    length: n,
    popupItems: r,
    bindPopupItems: e
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
function ml(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  n: Er,
  classes: Oo
} = re("popup");
const Sr = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Pt,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = pf(() => e.show, !0), {
      zIndex: o
    } = Ot(() => e.show, 3), {
      disabled: l
    } = vo(), {
      bindPopupItems: i
    } = Tf(), s = () => {
      var {
        closeOnClickOverlay: v,
        onClickOverlay: m
      } = e;
      w(m), v && w(e["onUpdate:show"], !1);
    }, u = () => {
      var {
        overlayClass: v = "",
        overlayStyle: m
      } = e;
      return Q("div", {
        class: Oo(Er("overlay"), v),
        style: Fo({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => ke(Q("div", Be({
      class: Oo(Er("content"), Er("--" + e.position), [e.defaultStyle, Er("--content-background-color")], [e.defaultStyle, Er("$-elevation--3")], [e.safeArea, Er("--safe-area")], [e.safeAreaTop, Er("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && w(n.default)]), [[Jr, e.show]]), f = () => {
      var v;
      return Q(Le, {
        name: Er("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Q("div", {
          class: Oo(Er("$--box"), Er()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), Q(Le, {
          name: e.transition || Er("$-pop-" + e.position)
        }, ml(v = d()) ? v : {
          default: () => [v]
        })]), [[Jr, e.show]])]
      });
    };
    return fo(() => e.show, () => e.lockScroll), le(() => e.show, (v) => {
      w(v ? e.onOpen : e.onClose);
    }), i({
      show: A(() => e.show)
    }), gf(() => w(e.onRouteChange)), () => {
      var {
        teleport: v
      } = e;
      if (v) {
        var m;
        return Q(Mn, {
          to: v,
          disabled: l.value
        }, ml(m = f()) ? m : {
          default: () => [m]
        });
      }
      return f();
    };
  }
});
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var NS = Sr, Ys = {
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
function pl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Pf(e) {
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
  n: Of,
  classes: Vf
} = re("icon");
function Mf(e, r) {
  return h(), be(
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
var js = ee({
  name: "VarIcon",
  props: Ys,
  setup(e) {
    var r = M(""), n = M(!1), a = /* @__PURE__ */ function() {
      var t = Pf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield De(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, L(i));
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
      nextName: r,
      animateInProgress: n,
      isURL: Jv,
      toNumber: L,
      toSizeUnit: ye
    };
  }
});
js.render = Mf;
const Oe = js;
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
var DS = Oe;
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
var Ef = Ho({
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
function Bi() {
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
    e[o] = Yo({}, e[o], l), a(o);
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
  pack: Ze,
  add: Ni,
  use: Di,
  merge: qs
} = Bi();
Ni("zh-CN", Ii);
Di("zh-CN");
var AS = {
  zhCN: Ii,
  enUS: Ws,
  packs: Gs,
  pack: Ze,
  add: Ni,
  use: Di,
  merge: qs,
  useLocale: Bi
};
const jo = {
  zhCN: Ii,
  enUS: Ws,
  packs: Gs,
  pack: Ze,
  add: Ni,
  use: Di,
  merge: qs,
  useLocale: Bi
};
var {
  n: If,
  classes: Bf
} = re("action-sheet"), Nf = ["onClick"];
function Df(e, r) {
  var n = ie("var-icon"), a = ie("var-popup"), t = Ne("ripple");
  return h(), be(
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
          ae(e.dt(e.title, e.pack.actionSheetTitle)),
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
              style: G({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (h(), be(
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
            )) : x("v-if", !0), D(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ae(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            Nf
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
var Xs = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Ef,
  setup(e) {
    var r = M(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        w(l, t), o && w(e["onUpdate:show"], !1);
      }
    }, a = (t) => w(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: If,
      classes: Bf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: Ze,
      dt: io,
      handleSelect: n
    };
  }
});
Xs.render = Df;
const fn = Xs;
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
var on, Ai = {};
function Af(e) {
  return e === void 0 && (e = {}), Wo({}, Ai, e);
}
function Qr(e) {
  return nt() ? new Promise((r) => {
    Qr.close();
    var n = Ae(Af(e));
    n.teleport = "body", on = n;
    var {
      unmountInstance: a
    } = tt(fn, n, {
      onSelect: (t) => {
        w(n.onSelect, t), r(t);
      },
      onClose: () => {
        w(n.onClose), r("close");
      },
      onClosed: () => {
        w(n.onClosed), a(), on === n && (on = null);
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
Qr.setDefaultOptions = function(e) {
  Ai = e;
};
Qr.resetDefaultOptions = function() {
  Ai = {};
};
Qr.close = function() {
  if (on != null) {
    var e = on;
    on = null, De().then(() => {
      e.show = !1;
    });
  }
};
Qr.Component = fn;
fn.install = function(e) {
  e.component(fn.name, fn);
};
Qr.install = function(e) {
  e.component(fn.name, fn);
};
var zS = fn;
function zf(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
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
} = re("app-bar");
function Ff(e, r) {
  return h(), T(
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
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [Y(e.$slots, "default", {}, () => [Se(
            ae(e.title),
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
        [Y(e.$slots, "default", {}, () => [Se(
          ae(e.title),
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
        [e.titlePosition === "right" ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [Y(e.$slots, "default", {}, () => [Se(
            ae(e.title),
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
var Ks = ee({
  name: "VarAppBar",
  props: Lf,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(), t = M(), o = () => {
      a.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }, l = A(() => {
      var {
        image: i,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (i != null) {
        var f = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": f + "url(" + i + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return dr(o), kt(o), {
      n: Rf,
      classes: Uf,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ks.render = Ff;
const Dn = Ks;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
var LS = Dn;
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
var Hf = "background-image", Yf = "lazy-loading", jf = "lazy-error", gl = "lazy-attempt", Wf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], qo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Xa = [], Xt = [], Zs = ef(100), qe = {
  loading: qo,
  error: qo,
  attempt: 3,
  throttleWait: 300,
  events: Wf
}, zi = Mi(Vt, qe.throttleWait);
function mo(e, r) {
  e._lazy.arg === Hf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Gf(e) {
  e._lazy.loading && mo(e, e._lazy.loading), Vt();
}
function qf(e) {
  e._lazy.error && mo(e, e._lazy.error), e._lazy.state = "error", Ri(e), Vt();
}
function Js(e, r) {
  mo(e, r), e._lazy.state = "success", Ri(e), Vt();
}
function Xf(e) {
  var r;
  Xt.includes(e) || (Xt.push(e), (r = qe.events) == null || r.forEach((n) => {
    e.addEventListener(n, zi, {
      passive: !0
    });
  }));
}
function Kf() {
  Xt.forEach((e) => {
    var r;
    (r = qe.events) == null || r.forEach((n) => {
      e.removeEventListener(n, zi);
    });
  }), Xt.length = 0;
}
function Zf(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Yf)) != null ? n : qe.loading,
    error: (a = e.getAttribute(jf)) != null ? a : qe.error,
    attempt: e.getAttribute(gl) ? Number(e.getAttribute(gl)) : qe.attempt
  };
  e._lazy = Go({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), mo(e, qo), w(qe.filter, e._lazy);
}
function Jf(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Zs.add(r), Js(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? qf(e) : Qs(e);
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
    Gf(e), Jf(e, r);
  }
}
function Li(e) {
  return Xo.apply(this, arguments);
}
function Xo() {
  return Xo = co(function* (e) {
    yield Ar(), nf(e) && Qs(e);
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
    !Xa.includes(e) && Xa.push(e), af(e).forEach(Xf), yield Li(e);
  }), Ko.apply(this, arguments);
}
function Ri(e) {
  Wt(Xa, e), Xa.length === 0 && Kf();
}
function _f(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function _s(e, r) {
  return Zo.apply(this, arguments);
}
function Zo() {
  return Zo = co(function* (e, r) {
    Zf(e, r), yield Qf(e);
  }), Zo.apply(this, arguments);
}
function xf(e, r) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = co(function* (e, r) {
    if (!_f(e, r)) {
      Xa.includes(e) && (yield Li(e));
      return;
    }
    yield _s(e, r);
  }), Jo.apply(this, arguments);
}
function ec(e) {
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
var xs = {
  mounted: _s,
  unmounted: Ri,
  updated: xf,
  install(e, r) {
    ec(r), zi = Mi(Vt, qe.throttleWait), e.directive("lazy", this);
  }
}, RS = xs;
const ht = xs;
function rc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var eu = (e) => ["mini", "small", "normal", "large"].includes(e);
function ru(e) {
  return eu(e) || ur(e) || Fe(e);
}
var nc = {
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: ac,
  classes: tc
} = re("avatar"), oc = ["src", "lazy-loading", "lazy-error"], ic = ["src"];
function lc(e, r) {
  var n = Ne("lazy");
  return h(), T(
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
        oc
      )), [[n, e.src]]) : (h(), T(
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
        ic
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (h(), T(
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
var nu = ee({
  name: "VarAvatar",
  directives: {
    Lazy: ht
  },
  props: nc,
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
        onLoad: f,
        onError: v
      } = e;
      d ? (u._lazy.state === "success" && w(f, s), u._lazy.state === "error" && w(v, s)) : w(f, s);
    }, l = (s) => {
      w(e.onError, s);
    }, i = (s) => {
      w(e.onClick, s);
    };
    return dr(t), kt(t), {
      internalSizeValidator: eu,
      sizeValidator: ru,
      toSizeUnit: ye,
      n: ac,
      classes: tc,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
nu.render = lc;
const An = nu;
An.install = function(e) {
  e.component(An.name, An);
};
var US = An, sc = {
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
} = re("avatar-group");
function vc(e, r) {
  return h(), T(
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
var au = ee({
  name: "VarAvatarGroup",
  props: sc,
  setup(e) {
    var r = A(() => e.offset == null ? {} : {
      "--avatar-group-offset": ye(e.offset)
    });
    return {
      n: uc,
      classes: dc,
      toSizeUnit: ye,
      rootStyles: r
    };
  }
});
au.render = vc;
const zn = au;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var FS = zn;
function fc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function cc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var un = {
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
} = re("loading"), hc = (e) => (La(""), e = e(), Ra(), e), gc = /* @__PURE__ */ hc(() => /* @__PURE__ */ D(
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
)), yc = [gc];
function bc(e, r) {
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
          yc,
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
      )), e.$slots.description || e.description ? (h(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
            color: e.color
          })
        },
        [Y(e.$slots, "description", {}, () => [Se(
          ae(e.description),
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
  props: un,
  setup(e, r) {
    var {
      slots: n
    } = r, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = A(() => w(n.default) ? e.loading : !0);
    return {
      n: mc,
      classes: pc,
      multiplySizeUnit: lr,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
tu.render = bc;
const Nr = tu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var HS = Nr, wc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Cc,
  classes: Sc
} = re("hover-overlay");
function kc(e, r) {
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
var ou = ee({
  name: "VarHoverOverlay",
  props: wc,
  setup() {
    return {
      n: Cc,
      classes: Sc
    };
  }
});
ou.render = kc;
const mr = ou;
mr.install = function(e) {
  e.component(mr.name, mr);
};
function Tn() {
  var e = M(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var YS = mr;
function iu(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function $c(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[ks(t)] = o, n;
  }, {}) : {};
}
function Tc(e) {
  var {
    value: r
  } = e._hover, n = $c(e);
  Object.keys(r).forEach((a) => {
    var t = ks(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function Ui(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function Pc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function lu(e) {
  Pc(e), Ui(e, e._hover.rawStyle);
}
function su() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Tt(e)) {
    e(this._hover.hovering);
    return;
  }
  Ui(this, e);
}
function uu() {
  if (this._hover.hovering = !1, Tt(this._hover.value)) {
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
  }, Tc(e), e.addEventListener("mouseenter", su), e.addEventListener("mouseleave", uu));
}
function vu(e, r) {
  iu(r.arg) || (lu(e), e.removeEventListener("mouseenter", su), e.removeEventListener("mouseleave", uu));
}
function Oc(e, r) {
  e._hover && vu(e, r);
}
function Vc(e, r) {
  return !Tt(r.value) && e._hover.hovering;
}
function Mc(e, r) {
  du(e, r), Vc(e, r) && Ui(e, r.value);
}
var fu = {
  mounted: du,
  unmounted: vu,
  beforeUpdate: Oc,
  updated: Mc,
  install(e) {
    e.directive("hover", this);
  }
}, jS = fu;
const Rr = fu;
function Qo() {
  return Qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Qo.apply(this, arguments);
}
function cu(e) {
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
    validator: cu
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
  loadingType: Je(un, "type"),
  loadingSize: Je(un, "size"),
  loadingColor: Qo({}, Je(un, "color"), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, mu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Nc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = or(mu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function Dc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = tr(mu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Ac,
  classes: zc
} = re("button"), Lc = ["type", "disabled"];
function Rc(e, r) {
  var n = ie("var-loading"), a = ie("var-hover-overlay"), t = Ne("ripple"), o = Ne("hover");
  return ke((h(), T(
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
    [e.loading || e.pending ? (h(), be(
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
    )) : x("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    Lc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var pu = ee({
  name: "VarButton",
  components: {
    VarLoading: Nr,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Rr
  },
  props: Bc,
  setup(e) {
    var r = M(!1), {
      buttonGroup: n
    } = Dc(), {
      hovering: a,
      handleHovering: t
    } = Tn(), o = A(() => {
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
        color: f,
        textColor: v,
        mode: m
      } = n;
      return {
        elevation: "",
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : f.value,
        textColor: e.textColor != null ? e.textColor : v.value,
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
        disabled: f,
        onClick: v
      } = e;
      !v || d || f || r.value || l(w(v, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: f,
        onTouchstart: v
      } = e;
      !v || d || f || r.value || l(w(v, u));
    };
    return {
      n: Ac,
      classes: zc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
pu.render = Rc;
const nr = pu;
nr.install = function(e) {
  e.component(nr.name, nr);
};
var WS = nr, Uc = {
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
  n: Fc,
  classes: Hc
} = re("back-top");
function Yc(e, r) {
  var n = ie("var-icon"), a = ie("var-button");
  return h(), be(
    Mn,
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
      [Y(e.$slots, "default", {}, () => [Q(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ve(() => [Q(n, {
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
var hu = ee({
  name: "VarBackTop",
  components: {
    VarButton: nr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Uc,
  setup(e) {
    var r = M(!1), n = M(null), a = M(!0), t, o = (d) => {
      w(e.onClick, d);
      var f = Ei(t);
      pt(t, {
        left: f,
        duration: e.duration,
        animation: $s
      });
    }, l = Mi(() => {
      r.value = mt(t) >= je(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Ps(e.target, "BackTop") : kn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return ro(() => {
      i(), s(), a.value = !1;
    }), Vn(s), so(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: ye,
      n: Fc,
      classes: Hc,
      handleClick: o
    };
  }
});
hu.render = Yc;
const Ln = hu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var GS = Ln;
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
} = re("badge");
function Kc(e, r) {
  var n = ie("var-icon");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), Q(
      Le,
      {
        name: e.n("$-badge-fade"),
        persisted: ""
      },
      {
        default: ve(() => [ke(D(
          "span",
          Be({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (h(), be(
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
            ae(e.value),
            3
            /* TEXT, CLASS */
          )) : x("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[Jr, !e.hidden]])]),
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
var gu = ee({
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Gc,
  setup(e) {
    var r = A(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && L(n) > L(a) ? a + "+" : n;
    });
    return {
      n: qc,
      classes: Xc,
      value: r
    };
  }
});
gu.render = Kc;
const cn = gu;
cn.install = function(e) {
  e.component(cn.name, cn);
};
var qS = cn, Zc = {
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
}, yu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Jc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = or(yu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
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
var {
  n: Qc,
  classes: _c
} = re("bottom-navigation"), {
  n: po
} = re("bottom-navigation-item"), yl = po("--right-half-space"), bl = po("--left-half-space"), wl = po("--right-space"), xc = {
  type: "primary"
};
function em(e, r) {
  var n = ie("var-button");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (h(), be(
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
var bu = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: nr
  },
  props: Zc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(null), t = A(() => e.active), o = A(() => e.activeColor), l = A(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Jc(), f = () => {
      s.value === 0 || v() || m() || y();
    }, v = () => u.find((p) => {
      var {
        name: P
      } = p;
      return t.value === P.value;
    }), m = () => u.find((p) => {
      var {
        index: P
      } = p;
      return t.value === P.value;
    }), y = () => {
      ur(t.value) && (t.value < 0 ? w(e["onUpdate:active"], 0) : t.value > s.value - 1 && w(e["onUpdate:active"], s.value - 1));
    }, b = (p) => {
      t.value !== p && (e.onBeforeChange ? g(p) : C(p));
    }, g = (p) => {
      var P = Rt(w(e.onBeforeChange, p));
      Promise.all(P).then((W) => {
        W.every(Boolean) && C(p);
      });
    }, C = (p) => {
      w(e["onUpdate:active"], p), w(e.onChange, p);
    }, O = () => {
      var p = E();
      p.forEach((P) => {
        P.classList.remove(yl, bl, wl);
      });
    }, $ = (p) => {
      var P = E(), W = P.length, R = p % 2 === 0;
      P.forEach((X, K) => {
        S(R, X, K, W);
      });
    }, S = (p, P, W, R) => {
      var X = W === R - 1;
      if (!p && X) {
        P.classList.add(wl);
        return;
      }
      var K = W === R / 2 - 1, U = W === R / 2;
      K ? P.classList.add(yl) : U && P.classList.add(bl);
    }, E = () => Array.from(a.value.querySelectorAll("." + po())), k = () => {
      w(e.onFabClick);
    }, I = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(I), le(() => s.value, f), le(() => e.fabProps, (p) => {
      i.value = _o({}, xc, p);
    }, {
      immediate: !0,
      deep: !0
    }), dr(() => {
      n.fab && $(s.value);
    }), kt(() => {
      O(), n.fab && $(s.value);
    }), {
      n: Qc,
      classes: _c,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: i
    };
  }
});
bu.render = em;
const Rn = bu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var XS = Rn, rm = {
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
function nm() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = tr(yu);
  return n || Pr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: am,
  classes: tm
} = re("bottom-navigation-item"), om = {
  type: "danger",
  dot: !0
};
function im(e, r) {
  var n = ie("var-icon"), a = ie("var-badge"), t = Ne("ripple");
  return ke((h(), T(
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
    [e.icon && !e.$slots.icon ? (h(), be(
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
    }), e.badge ? (h(), be(
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
    )) : x("v-if", !0), D(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (h(), T(
        Ve,
        {
          key: 0
        },
        [Se(
          ae(e.label),
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
var wu = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: cn,
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: rm,
  setup(e) {
    var r = A(() => e.name), n = A(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = nm(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, f = () => i.value === r.value || i.value === t.value ? s.value : u.value, v = () => {
      var m, y = (m = r.value) != null ? m : t.value;
      w(e.onClick, y), w(o.onToggle, y);
    };
    return l(d), le(() => n.value, (m) => {
      a.value = m === !0 ? om : n.value;
    }, {
      immediate: !0
    }), {
      n: am,
      classes: tm,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: f,
      handleClick: v
    };
  }
});
wu.render = im;
const Un = wu;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var KS = Un, lm = {
  separator: {
    type: String
  },
  onClick: F()
}, Cu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function sm() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = or(Cu);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function um() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = tr(Cu);
  return r || Pr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: dm,
  classes: vm
} = re("breadcrumb");
function fm(e, r) {
  return h(), T(
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
    ), e.isLast ? x("v-if", !0) : Y(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [D(
        "div",
        {
          class: c(e.n("separator"))
        },
        ae((n = e.separator) != null ? n : e.parentSeparator),
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
  props: lm,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = um(), t = A(() => r.value === n.length.value - 1), o = A(() => n.separator.value), l = (i) => {
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
Su.render = fm;
const Fn = Su;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var ZS = Fn, cm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: mm
} = re("breadcrumbs");
function pm(e, r) {
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
var ku = ee({
  name: "VarBreadcrumbs",
  props: cm,
  setup(e) {
    var r = A(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = sm(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: mm
    };
  }
});
ku.render = pm;
const Hn = ku;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var JS = Hn;
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
} = re("button-group");
function Sm(e, r) {
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
var $u = ee({
  name: "VarButtonGroup",
  props: bm,
  setup(e) {
    var {
      bindButtons: r
    } = Nc(), n = {
      elevation: A(() => e.elevation),
      type: A(() => e.type),
      size: A(() => e.size),
      color: A(() => e.color),
      textColor: A(() => e.textColor),
      mode: A(() => e.mode)
    };
    return r(n), {
      n: wm,
      classes: Cm,
      formatElevation: hr
    };
  }
});
$u.render = Sm;
const Yn = $u;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var QS = Yn;
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
  onClick: F(),
  "onUpdate:floating": F()
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
  n: Tm,
  classes: Pm
} = re("card"), Om = 500, Vm = ["src", "alt"];
function Mm(e, r) {
  var n = ie("var-icon"), a = ie("var-button"), t = Ne("ripple");
  return ke((h(), T(
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
      [Y(e.$slots, "image", {}, () => [e.src ? (h(), T(
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
        Vm
      )) : x("v-if", !0)]), D(
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
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
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
      ), e.showFloatingButtons ? (h(), T(
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
        [Y(e.$slots, "close-button", {}, () => [Q(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Tr(e.close, ["stop"])
          },
          {
            default: ve(() => [Q(
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
var Tu = ee({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Oe,
    VarButton: nr
  },
  props: $m,
  setup(e) {
    var r = M(null), n = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), f = M("0px"), v = M("0"), m = A(() => e.layout === "row"), y = M(!1), b = M(!1), {
      zIndex: g
    } = Ot(() => e.floating, 1);
    fo(() => e.floating, () => !m.value);
    var C = "auto", O = "auto", $ = null, S = M(null), E = /* @__PURE__ */ function() {
      var P = Sl(function* () {
        clearTimeout(S.value), clearTimeout($), S.value = null, S.value = setTimeout(/* @__PURE__ */ Sl(function* () {
          var {
            width: W,
            height: R,
            left: X,
            top: K
          } = xe(r.value);
          a.value = ye(W), t.value = ye(R), o.value = a.value, l.value = t.value, i.value = ye(K), s.value = ye(X), u.value = "fixed", C = i.value, O = s.value, y.value = !0, yield Ar(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", f.value = "auto", v.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Om : 0);
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout($), clearTimeout(S.value), S.value = null, o.value = a.value, l.value = t.value, i.value = C, s.value = O, f.value = "0px", v.value = "0", y.value = !1, $ = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", C = "auto", O = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, I = () => {
      w(e["onUpdate:floating"], !1);
    }, p = (P) => {
      w(e.onClick, P);
    };
    return le(() => e.floating, (P) => {
      m.value || De(() => {
        P ? E() : k();
      });
    }, {
      immediate: !0
    }), {
      n: Tm,
      classes: Pm,
      toSizeUnit: ye,
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
      contentHeight: f,
      opacity: v,
      zIndex: g,
      isRow: m,
      close: I,
      showFloatingButtons: y,
      floated: b,
      formatElevation: hr,
      handleClick: p
    };
  }
});
Tu.render = Mm;
const jn = Tu;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var _S = jn, Em = {
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
  n: Im,
  classes: Bm
} = re("cell");
function Nm(e, r) {
  var n = ie("var-icon"), a = Ne("ripple");
  return ke((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
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
      [Q(
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
    )) : x("v-if", !0)]), D(
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
        ae(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ae(e.description),
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
var Pu = ee({
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: Em,
  setup(e) {
    var r = A(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ye(e.borderOffset),
      "--cell-border-right": ye(e.borderOffset)
    }), n = (a) => {
      w(e.onClick, a);
    };
    return {
      n: Im,
      classes: Bm,
      toSizeUnit: ye,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Pu.render = Nm;
const mn = Pu;
mn.install = function(e) {
  e.component(mn.name, mn);
};
var xS = mn, Dm = {
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
} = re("form-details"), zm = {
  key: 0
}, Lm = {
  key: 0
};
function Rm(e, r) {
  return h(), be(
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
        [D(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [Q(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), T(
                "div",
                zm,
                ae(e.errorMessage),
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
        ), D(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [Q(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), T(
                "div",
                Lm,
                ae(e.extraMessage),
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
var Ou = ee({
  name: "VarFormDetails",
  props: Dm,
  setup: () => ({
    n: Am
  })
});
Ou.render = Rm;
const _e = Ou;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var ek = _e, Um = {
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
}, Vu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Fm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = or(Vu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Hm() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = tr(Vu);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
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
var Mu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = tr(Mu), a = et(), t = n ? (o) => {
    n(xo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: r,
    form: e,
    bindForm: t
  };
}
function Ym() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = or(Mu);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: jm,
  classes: Wm
} = re("checkbox");
function Gm(e, r) {
  var n = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = Ne("hover"), l = Ne("ripple");
  return h(), T(
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
      [ke((h(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(
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
        }, () => [Q(
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
        )]), Q(
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
    ), Q(
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
var Eu = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: We,
    Hover: Rr
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  props: Um,
  setup(e) {
    var r = M(!1), n = A(() => r.value === e.checkedValue), a = A(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Hm(), {
      hovering: i,
      handleHovering: s
    } = Tn(), {
      form: u,
      bindForm: d
    } = Vr(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: m,
      // expose
      resetValidation: y
    } = Or(), b = (p) => {
      De(() => {
        var {
          validateTrigger: P,
          rules: W,
          modelValue: R
        } = e;
        v(P, p, W, R);
      });
    }, g = (p) => {
      r.value = p;
      var {
        checkedValue: P,
        onChange: W
      } = e;
      w(e["onUpdate:modelValue"], r.value), w(W, r.value), b("onChange"), p === P ? o == null || o.onChecked(P) : o == null || o.onUnchecked(P);
    }, C = (p) => {
      var {
        disabled: P,
        readonly: W,
        checkedValue: R,
        uncheckedValue: X,
        onClick: K
      } = e;
      if (!(u != null && u.disabled.value || P) && (w(K, p), !(u != null && u.readonly.value || W))) {
        t.value = !0;
        var U = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && U || g(n.value ? X : R);
      }
    }, O = (p) => {
      var {
        checkedValue: P,
        uncheckedValue: W
      } = e;
      r.value = p.includes(P) ? P : W;
    }, $ = () => {
      t.value = !1;
    }, S = () => {
      w(e["onUpdate:modelValue"], e.uncheckedValue), y();
    }, E = (p) => {
      var {
        checkedValue: P,
        uncheckedValue: W
      } = e, R = ![P, W].includes(p);
      R && (p = n.value ? W : P), g(p);
    }, k = () => m(e.rules, e.modelValue);
    le(() => e.modelValue, (p) => {
      r.value = p;
    }, {
      immediate: !0
    });
    var I = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: k,
      resetValidation: y,
      reset: S,
      resetWithAnimation: $
    };
    return w(l, I), w(d, I), {
      withAnimation: t,
      checked: n,
      errorMessage: f,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: jm,
      classes: Wm,
      handleClick: C,
      toggle: E,
      reset: S,
      validate: k,
      resetValidation: y
    };
  }
});
Eu.render = Gm;
const pn = Eu;
pn.install = function(e) {
  e.component(pn.name, pn);
};
var rk = pn;
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Km,
  classes: Zm
} = re("checkbox-group");
function Jm(e, r) {
  var n = ie("var-form-details");
  return h(), T(
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
    ), Q(
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
var Iu = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: _e
  },
  props: Xm,
  setup(e) {
    var r = A(() => e.max), n = A(() => e.modelValue.length), {
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
    } = Or(), f = A(() => i.value), v = (I) => {
      De(() => {
        var {
          validateTrigger: p,
          rules: P,
          modelValue: W
        } = e;
        s(p, I, P, W);
      });
    }, m = (I) => {
      w(e["onUpdate:modelValue"], I), w(e.onChange, I), v("onChange");
    }, y = (I) => {
      var {
        modelValue: p
      } = e;
      p.includes(I) || m([...p, I]);
    }, b = (I) => {
      var {
        modelValue: p
      } = e;
      p.includes(I) && m(p.filter((P) => P !== I));
    }, g = () => t.forEach((I) => {
      var {
        sync: p
      } = I;
      return p(e.modelValue);
    }), C = () => {
      t.forEach((I) => I.resetWithAnimation());
    }, O = () => {
      var I = t.map((P) => {
        var {
          checkedValue: W
        } = P;
        return W.value;
      }), p = al(I);
      return C(), w(e["onUpdate:modelValue"], p), p;
    }, $ = () => {
      var I = t.filter((P) => {
        var {
          checked: W
        } = P;
        return !W.value;
      }).map((P) => {
        var {
          checkedValue: W
        } = P;
        return W.value;
      }), p = al(I);
      return C(), w(e["onUpdate:modelValue"], p), p;
    }, S = () => {
      w(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, g, {
      deep: !0
    }), le(() => a.value, g);
    var k = {
      max: r,
      checkedCount: n,
      onChecked: y,
      onUnchecked: b,
      validate: E,
      resetValidation: d,
      reset: S,
      errorMessage: f
    };
    return o(k), w(l, k), {
      errorMessage: i,
      n: Km,
      classes: Zm,
      checkAll: O,
      inverseAll: $,
      reset: S,
      validate: E,
      resetValidation: d
    };
  }
});
Iu.render = Jm;
const Wn = Iu;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var nk = Wn;
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
  iconName: Je(Ys, "name"),
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
  classes: ep
} = re("chip");
function rp(e, r) {
  var n = ie("var-icon");
  return h(), be(
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
        ), Y(e.$slots, "right"), e.closable ? (h(), T(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: r[0] || (r[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [Q(
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
var Bu = ee({
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: xm,
  setup(e) {
    var r = A(() => {
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
    }), n = A(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = en(o ? "$--flex" : "$--inline-flex"), d = i ? en("plain") + " " + en("plain-" + l) : en("--" + l), f = s ? en("--round") : null;
      return [en("--" + t), u, d, f];
    }), a = (t) => {
      w(e.onClose, t);
    };
    return {
      n: en,
      classes: ep,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Bu.render = rp;
const hn = Bu;
hn.install = function(e) {
  e.component(hn.name, hn);
};
var ak = hn;
function np(e) {
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
    validator: np
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
  onClick: F()
}, Nu = Symbol("ROW_BIND_COL_KEY");
function ip() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = or(Nu);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function lp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = tr(Nu);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: It,
  classes: sp
} = re("col");
function up(e, r) {
  return h(), T(
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
var Du = ee({
  name: "VarCol",
  props: op,
  setup(e) {
    var r = M({
      left: 0,
      right: 0
    }), n = A(() => L(e.span)), a = A(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = lp(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var f = [];
      if (d == null)
        return f;
      if (Oi(d)) {
        var {
          offset: v,
          span: m
        } = d;
        Number(m) >= 0 && f.push(It("--span-" + u + "-" + m)), v && f.push(It("--offset-" + u + "-" + v));
      } else
        Number(d) >= 0 && f.push(It("--span-" + u + "-" + d));
      return f;
    }, s = (u) => {
      w(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), w(o, l), {
      n: It,
      classes: sp,
      padding: r,
      toNumber: L,
      toSizeUnit: ye,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: Gt
    };
  }
});
Du.render = up;
const Gn = Du;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var tk = Gn, Au = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function dp() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = or(Au);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: fp
} = re("collapse");
function cp(e, r) {
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
var zu = ee({
  name: "VarCollapse",
  props: vp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = dp(), t = A(() => e.modelValue), o = A(() => e.offset), l = A(() => e.divider), i = A(() => e.elevation), s = () => !e.accordion && !Pe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Pe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, g) => s() ? g ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((C) => C !== b) : null, d = (b, g) => {
      var C = u(b, g);
      w(e["onUpdate:modelValue"], C), w(e.onChange, C);
    }, f = () => {
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
    }, v = () => e.accordion ? n.find((b) => {
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
    }), m = () => {
      if (s()) {
        var b = f() || v();
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
    return a(y), le(() => r.value, () => De().then(m)), le(() => e.modelValue, () => De().then(m)), {
      n: fp,
      divider: l
    };
  }
});
zu.render = cp;
const qn = zu;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var ok = qn;
function mp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = tr(Au);
  return n || Pr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
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
} = re("collapse-item");
function yp(e, r) {
  var n = ie("var-icon");
  return h(), T(
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
          ae(e.title),
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
        [Y(e.$slots, "icon", {}, () => [Q(
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
    ), ke(D(
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
    ), [[Jr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Lu = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: pp,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = mp(), t = !0, o = M(null), l = M(!1), i = M(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: f,
      updateItem: v
    } = n, m = A(() => e.name), y = (E, k) => {
      s.value === void 0 || E && Pe(s.value) || k === i.value || (i.value = k, b(!0));
    }, b = (E) => {
      e.disabled || E || v(e.name || r.value, !i.value);
    }, g = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = E + "px", t && lo(() => {
            t && $();
          });
        });
      }));
    }, C = () => {
      t = !1;
    }, O = () => {
      if (o.value) {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = E + "px", br(() => {
          o.value.style.height = "0px";
        });
      }
    }, $ = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, S = {
      index: r,
      name: m,
      init: y
    };
    return a(S), le(i, (E) => {
      E ? g() : O();
    }), {
      n: hp,
      start: C,
      classes: gp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: f,
      toggle: b,
      contentEl: o,
      transitionend: $,
      formatElevation: hr
    };
  }
});
Lu.render = yp;
const Xn = Lu;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ik = Xn, bp = {
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
  n: wp
} = re("countdown"), ei = 1e3, ri = 60 * ei, ni = 60 * ri, kl = 24 * ni;
function Cp(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", $t(to(e.timeData)), () => [Se(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Ru = ee({
  name: "VarCountdown",
  props: bp,
  setup(e) {
    var r = M(""), n = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (y, b) => {
      var g = Object.values(b), C = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (C.forEach((S, E) => {
        y.includes(S) ? y = y.replace(S, Na("" + g[E], 2, "0")) : g[E + 1] += g[E] * O[E];
      }), y.includes("S")) {
        var $ = Na("" + g[g.length - 1], 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", $) : y.includes("SS") ? y = y.replace("SS", $.slice(0, 2)) : y = y.replace("S", $.slice(0, 1));
      }
      return y;
    }, u = (y) => {
      var b = Math.floor(y / kl), g = Math.floor(y % kl / ni), C = Math.floor(y % ni / ri), O = Math.floor(y % ri / ei), $ = Math.floor(y % ei), S = {
        days: b,
        hours: g,
        minutes: C,
        seconds: O,
        milliseconds: $
      };
      n.value = S, w(e.onChange, n.value), r.value = s(e.format, S);
    }, d = () => {
      var {
        time: y,
        onEnd: b
      } = e, g = performance.now();
      if (a || (a = g + L(y)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        w(b);
        return;
      }
      t && (o = br(d));
    }, f = function(y) {
      y === void 0 && (y = !1), !(t && !y) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, v = () => {
      t = !1, dl(o);
    }, m = () => {
      a = 0, t = !1, dl(o), d();
    };
    return le(() => e.time, () => {
      m(), e.autoStart && f();
    }, {
      immediate: !0
    }), Vn(() => {
      i != null && (t = i, t === !0 && f(!0));
    }), xa(() => {
      i = t, v();
    }), ao(v), {
      showTime: r,
      timeData: n,
      n: wp,
      start: f,
      pause: v,
      reset: m
    };
  }
});
Ru.render = Cp;
const Kn = Ru;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var lk = Kn;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ha = 9e15, En = 1e9, ai = "0123456789abcdef", Kt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Zt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ti = {
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
}, Uu, Yr, ge = !0, ho = "[DecimalError] ", Pn = ho + "Invalid argument: ", Fu = ho + "Precision limit exceeded", Hu = ho + "crypto unavailable", Yu = "[object Decimal]", ar = Math.floor, Xe = Math.pow, Sp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, kp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, $p = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ju = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Dr = 1e7, me = 7, Tp = 9007199254740991, Pp = Kt.length - 1, oi = Zt.length - 1, q = { toStringTag: Yu };
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
    throw Error(Pn + r);
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
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + me, a.rounding = 1, n = Op(a, Ku(a, n)), a.precision = e, a.rounding = r, fe(Yr == 2 || Yr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, f = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new f(d);
  for (ge = !1, o = d.s * Xe(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = rr(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Xe(n, 1 / 3), e = ar((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new f(n), a.s = d.s) : a = new f(o.toString()), l = (e = f.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ee(u.plus(d).times(i), u.plus(s), l + 2, 1), rr(i.d).slice(0, l) === (n = rr(a.d)).slice(0, l))
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
  return ge = !0, fe(a, e, f.rounding, r);
};
q.decimalPlaces = q.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - ar(this.e / me)) * me, e = r[e], e)
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
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / yo(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Ka(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = n, l.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ka(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / yo(5, e)), t = Ka(o, 2, t, t, !0);
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
  return a !== -1 ? a === 0 ? r.isNeg() ? Br(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Br(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Br(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, ge = !1, n = n.times(n).minus(1).sqrt().plus(n), ge = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, ge = !1, n = n.times(n).plus(1).sqrt().plus(n), ge = !0, a.precision = e, a.rounding = r, n.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Br(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, f = d.precision, v = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && f + 4 <= oi)
      return l = Br(d, f + 4, v).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (f + 4 <= oi)
      return l = Br(d, f + 4, v).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = f + 10, d.rounding = 1, n = Math.min(28, i / me + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ge = !1, r = Math.ceil(i / me), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), ge = !0, fe(l, d.precision = f, d.rounding = v, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && ar(this.e / me) > this.d.length - 2;
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
  var r, n, a, t, o, l, i, s, u = this, d = u.constructor, f = d.precision, v = d.rounding, m = 5;
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
  if (ge = !1, i = f + m, l = dn(u, i), a = r ? Jt(d, i + 10) : dn(e, i), s = Ee(l, a, i, 1), gt(s.d, t = f, v))
    do
      if (i += 10, l = dn(u, i), a = r ? Jt(d, i + 10) : dn(e, i), s = Ee(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, f + 1, 0));
        break;
      }
    while (gt(s.d, t += 10, v));
  return ge = !0, fe(s, f, v);
};
q.minus = q.sub = function(e) {
  var r, n, a, t, o, l, i, s, u, d, f, v, m = this, y = m.constructor;
  if (e = new y(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new y(NaN) : m.d ? e.s = -e.s : e = new y(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, v = e.d, i = y.precision, s = y.rounding, !u[0] || !v[0]) {
    if (v[0])
      e.s = -e.s;
    else if (u[0])
      e = new y(m);
    else
      return new y(s === 3 ? -0 : 0);
    return ge ? fe(e, i, s) : e;
  }
  if (n = ar(e.e / me), d = ar(m.e / me), u = u.slice(), o = d - n, o) {
    for (f = o < 0, f ? (r = u, o = -o, l = v.length) : (r = v, n = d, l = u.length), a = Math.max(Math.ceil(i / me), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; )
      r.push(0);
    r.reverse();
  } else {
    for (a = u.length, l = v.length, f = a < l, f && (l = a), a = 0; a < l; a++)
      if (u[a] != v[a]) {
        f = u[a] < v[a];
        break;
      }
    o = 0;
  }
  for (f && (r = u, u = v, v = r, e.s = -e.s), l = u.length, a = v.length - l; a > 0; --a)
    u[l++] = 0;
  for (a = v.length; a > o; ) {
    if (u[--a] < v[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = Dr - 1;
      --u[t], u[a] += Dr;
    }
    u[a] -= v[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --n;
  return u[0] ? (e.d = u, e.e = go(u, n), ge ? fe(e, i, s) : e) : new y(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? fe(new a(n), a.precision, a.rounding) : (ge = !1, a.modulo == 9 ? (r = Ee(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ee(n, e, 0, a.modulo, 1), r = r.times(e), ge = !0, n.minus(r));
};
q.naturalExponential = q.exp = function() {
  return ii(this);
};
q.naturalLogarithm = q.ln = function() {
  return dn(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
q.plus = q.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, f = this, v = f.constructor;
  if (e = new v(e), !f.d || !e.d)
    return !f.s || !e.s ? e = new v(NaN) : f.d || (e = new v(e.d || f.s === e.s ? f : NaN)), e;
  if (f.s != e.s)
    return e.s = -e.s, f.minus(e);
  if (u = f.d, d = e.d, i = v.precision, s = v.rounding, !u[0] || !d[0])
    return d[0] || (e = new v(f)), ge ? fe(e, i, s) : e;
  if (o = ar(f.e / me), a = ar(e.e / me), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / me), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Dr | 0, u[t] %= Dr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = go(u, a), ge ? fe(e, i, s) : e;
};
q.precision = q.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Pn + e);
  return n.d ? (r = Wu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
q.round = function() {
  var e = this, r = e.constructor;
  return fe(new r(e), e.e + 1, r.rounding);
};
q.sine = q.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + me, a.rounding = 1, n = Mp(a, Ku(a, n)), a.precision = e, a.rounding = r, fe(Yr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ge = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = rr(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = ar((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ee(l, o, n + 2, 1)).times(0.5), rr(o.d).slice(0, n) === (r = rr(a.d)).slice(0, n))
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
  return ge = !0, fe(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, fe(Yr == 2 || Yr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, f = d.constructor, v = d.d, m = (e = new f(e)).d;
  if (e.s *= d.s, !v || !v[0] || !m || !m[0])
    return new f(!e.s || v && !v[0] && !m || m && !m[0] && !v ? NaN : !v || !m ? e.s / 0 : e.s * 0);
  for (n = ar(d.e / me) + ar(e.e / me), s = v.length, u = m.length, s < u && (o = v, v = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + m[a] * v[t - a - 1] + r, o[t--] = i % Dr | 0, r = i / Dr | 0;
    o[t] = (o[t] + r) % Dr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = go(o, n), ge ? fe(e, f.precision, f.rounding) : e;
};
q.toBinary = function(e, r) {
  return Fi(this, 2, e, r);
};
q.toDecimalPlaces = q.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (pr(e, 0, En), r === void 0 ? r = a.rounding : pr(r, 0, 8), fe(n, e + n.e + 1, r));
};
q.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, !0) : (pr(e, 0, En), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e + 1, r), n = Ur(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
q.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Ur(t) : (pr(e, 0, En), r === void 0 ? r = o.rounding : pr(r, 0, 8), a = fe(new o(t), e + t.e + 1, r), n = Ur(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
q.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, f, v, m = this, y = m.d, b = m.constructor;
  if (!y)
    return new b(m);
  if (u = n = new b(1), a = s = new b(0), r = new b(a), o = r.e = Wu(y) - m.e - 1, l = o % me, r.d[0] = Xe(10, l < 0 ? me + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(Pn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (ge = !1, i = new b(rr(y)), d = b.precision, b.precision = o = y.length * me * 2; f = Ee(i, r, 0, 1, 1), t = n.plus(f.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(f.times(t)), s = t, t = r, r = i.minus(f.times(t)), i = t;
  return t = Ee(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, v = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], b.precision = d, ge = !0, v;
};
q.toHexadecimal = q.toHex = function(e, r) {
  return Fi(this, 16, e, r);
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
  return e.d[0] ? (ge = !1, n = Ee(n, e, 0, r, 1).times(e), ge = !0, fe(n)) : (e.s = n.s, n = e), n;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, r) {
  return Fi(this, 8, e, r);
};
q.toPower = q.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Xe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (r = ar(e.e / me), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= Tp)
    return t = Gu(s, i, n, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Xe(+i, u), r = n == 0 || !isFinite(n) ? ar(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (ge = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = ii(e.times(dn(i, a + n)), a), t.d && (t = fe(t, a + 5, 1), gt(t.d, a, o) && (r = a + 10, t = fe(ii(e.times(dn(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, ge = !0, s.rounding = o, fe(t, a, o));
};
q.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Ur(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (pr(e, 1, En), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e, r), n = Ur(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
q.toSignificantDigits = q.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (pr(e, 1, En), r === void 0 ? r = a.rounding : pr(r, 0, 8)), fe(new a(n), e, r);
};
q.toString = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
q.truncated = q.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, r = e.constructor, n = Ur(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function rr(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = me - a.length, n && (o += nn(n)), o += a;
    l = e[r], a = l + "", n = me - a.length, n && (o += nn(n));
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
  return --r < 0 ? (r += me, t = 0) : (t = Math.ceil((r + 1) / me), r %= me), o = Xe(10, me - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Xe(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Xe(10, r - 3) - 1, l;
}
function Ut(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += ai.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function Op(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / yo(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Ka(e, 1, r.times(t), new e(1));
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
    var u, d, f, v, m, y, b, g, C, O, $, S, E, k, I, p, P, W, R, X, K = a.constructor, U = a.s == t.s ? 1 : -1, V = a.d, B = t.d;
    if (!V || !V[0] || !B || !B[0])
      return new K(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (V ? B && V[0] == B[0] : !B) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          V && V[0] == 0 || !B ? U * 0 : U / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Dr, m = me, d = ar(a.e / m) - ar(t.e / m)), R = B.length, P = V.length, C = new K(U), O = C.d = [], f = 0; B[f] == (V[f] || 0); f++)
      ;
    if (B[f] > (V[f] || 0) && d--, o == null ? (k = o = K.precision, l = K.rounding) : i ? k = o + (a.e - t.e) + 1 : k = o, k < 0)
      O.push(1), y = !0;
    else {
      if (k = k / m + 2 | 0, f = 0, R == 1) {
        for (v = 0, B = B[0], k++; (f < P || v) && k--; f++)
          I = v * s + (V[f] || 0), O[f] = I / B | 0, v = I % B | 0;
        y = v || f < P;
      } else {
        for (v = s / (B[0] + 1) | 0, v > 1 && (B = e(B, v, s), V = e(V, v, s), R = B.length, P = V.length), p = R, $ = V.slice(0, R), S = $.length; S < R; )
          $[S++] = 0;
        X = B.slice(), X.unshift(0), W = B[0], B[1] >= s / 2 && ++W;
        do
          v = 0, u = r(B, $, R, S), u < 0 ? (E = $[0], R != S && (E = E * s + ($[1] || 0)), v = E / W | 0, v > 1 ? (v >= s && (v = s - 1), b = e(B, v, s), g = b.length, S = $.length, u = r(b, $, g, S), u == 1 && (v--, n(b, R < g ? X : B, g, s))) : (v == 0 && (u = v = 1), b = B.slice()), g = b.length, g < S && b.unshift(0), n($, b, S, s), u == -1 && (S = $.length, u = r(B, $, R, S), u < 1 && (v++, n($, R < S ? X : B, S, s))), S = $.length) : u === 0 && (v++, $ = [0]), O[f++] = v, u && $[0] ? $[S++] = V[p] || 0 : ($ = [V[p]], S = 1);
        while ((p++ < P || $[0] !== void 0) && k--);
        y = $[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      C.e = d, Uu = y;
    else {
      for (f = 1, v = O[0]; v >= 10; v /= 10)
        f++;
      C.e = f + d * m - 1, fe(C, i ? o + C.e + 1 : o, l, y);
    }
    return C;
  };
}();
function fe(e, r, n, a) {
  var t, o, l, i, s, u, d, f, v, m = e.constructor;
  e:
    if (r != null) {
      if (f = e.d, !f)
        return e;
      for (t = 1, i = f[0]; i >= 10; i /= 10)
        t++;
      if (o = r - t, o < 0)
        o += me, l = r, d = f[v = 0], s = d / Xe(10, t - l - 1) % 10 | 0;
      else if (v = Math.ceil((o + 1) / me), i = f.length, v >= i)
        if (a) {
          for (; i++ <= v; )
            f.push(0);
          d = s = 0, t = 1, o %= me, l = o - me + 1;
        } else
          break e;
      else {
        for (d = i = f[v], t = 1; i >= 10; i /= 10)
          t++;
        o %= me, l = o - me + t, s = l < 0 ? 0 : d / Xe(10, t - l - 1) % 10 | 0;
      }
      if (a = a || r < 0 || f[v + 1] !== void 0 || (l < 0 ? d : d % Xe(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Xe(10, t - l) : 0 : f[v - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !f[0])
        return f.length = 0, u ? (r -= e.e + 1, f[0] = Xe(10, (me - r % me) % me), e.e = -r || 0) : f[0] = e.e = 0, e;
      if (o == 0 ? (f.length = v, i = 1, v--) : (f.length = v + 1, i = Xe(10, me - o), f[v] = l > 0 ? (d / Xe(10, t - l) % Xe(10, l) | 0) * i : 0), u)
        for (; ; )
          if (v == 0) {
            for (o = 1, l = f[0]; l >= 10; l /= 10)
              o++;
            for (l = f[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, f[0] == Dr && (f[0] = 1));
            break;
          } else {
            if (f[v] += i, f[v] != Dr)
              break;
            f[v--] = 0, i = 1;
          }
      for (o = f.length; f[--o] === 0; )
        f.pop();
    }
  return ge && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Ur(e, r, n) {
  if (!e.isFinite())
    return Xu(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + nn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + nn(-t - 1) + o, n && (a = n - l) > 0 && (o += nn(a))) : t >= l ? (o += nn(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + nn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += nn(a))), o;
}
function go(e, r) {
  var n = e[0];
  for (r *= me; n >= 10; n /= 10)
    r++;
  return r;
}
function Jt(e, r, n) {
  if (r > Pp)
    throw ge = !0, n && (e.precision = n), Error(Fu);
  return fe(new e(Kt), r, 1, !0);
}
function Br(e, r, n) {
  if (r > oi)
    throw Error(Fu);
  return fe(new e(Zt), r, n, !0);
}
function Wu(e) {
  var r = e.length - 1, n = r * me + 1;
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
function Gu(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / me + 4);
  for (ge = !1; ; ) {
    if (n % 2 && (o = o.times(r), Tl(o.d, l) && (t = !0)), n = ar(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Tl(r.d, l);
  }
  return ge = !0, o;
}
function $l(e) {
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
function ii(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, f = 0, v = e.constructor, m = v.rounding, y = v.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (ge = !1, s = y) : s = r, i = new v(0.03125); e.e > -2; )
    e = e.times(i), f += 5;
  for (a = Math.log(Xe(2, f)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new v(1), v.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), n = n.times(++d), i = l.plus(Ee(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
      for (t = f; t--; )
        l = fe(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && gt(l.d, s - a, m, u))
          v.precision = s += 10, n = o = i = new v(1), d = 0, u++;
        else
          return fe(l, v.precision = y, m, ge = !0);
      else
        return v.precision = y, l;
    }
    l = i;
  }
}
function dn(e, r) {
  var n, a, t, o, l, i, s, u, d, f, v, m = 1, y = 10, b = e, g = b.d, C = b.constructor, O = C.rounding, $ = C.precision;
  if (b.s < 0 || !g || !g[0] || !b.e && g[0] == 1 && g.length == 1)
    return new C(g && !g[0] ? -1 / 0 : b.s != 1 ? NaN : g ? 0 : b);
  if (r == null ? (ge = !1, d = $) : d = r, C.precision = d += y, n = rr(g), a = n.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      b = b.times(e), n = rr(b.d), a = n.charAt(0), m++;
    o = b.e, a > 1 ? (b = new C("0." + n), o++) : b = new C(a + "." + n.slice(1));
  } else
    return u = Jt(C, d + 2, $).times(o + ""), b = dn(new C(a + "." + n.slice(1)), d - y).plus(u), C.precision = $, r == null ? fe(b, $, O, ge = !0) : b;
  for (f = b, s = l = b = Ee(b.minus(1), b.plus(1), d, 1), v = fe(b.times(b), d, 1), t = 3; ; ) {
    if (l = fe(l.times(v), d, 1), u = s.plus(Ee(l, new C(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Jt(C, d + 2, $).times(o + ""))), s = Ee(s, new C(m), d, 1), r == null)
        if (gt(s.d, d - y, O, i))
          C.precision = d += y, u = l = b = Ee(f.minus(1), f.plus(1), d, 1), v = fe(b.times(b), d, 1), t = i = 1;
        else
          return fe(s, C.precision = $, O, ge = !0);
      else
        return C.precision = $, s;
    s = u, t += 2;
  }
}
function Xu(e) {
  return String(e.s * e.s / 0);
}
function li(e, r) {
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
    e.d.push(+r), ge && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Vp(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), ju.test(r))
      return li(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (kp.test(r))
    n = 16, r = r.toLowerCase();
  else if (Sp.test(r))
    n = 2;
  else if ($p.test(r))
    n = 8;
  else
    throw Error(Pn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Gu(a, new a(n), o, o * 2)), u = Ut(r, n, Dr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = go(u, d), e.d = u, ge = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Xe(2, s) : vn.pow(2, s))), ge = !0, e);
}
function Mp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Ka(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / yo(5, n)), r = Ka(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Ka(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / me);
  for (ge = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = Ee(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Ee(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return ge = !0, l.d.length = d + 1, l;
}
function yo(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Ku(e, r) {
  var n, a = r.s < 0, t = Br(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return Yr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    Yr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return Yr = $l(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    Yr = $l(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Fi(e, r, n, a) {
  var t, o, l, i, s, u, d, f, v, m = e.constructor, y = n !== void 0;
  if (y ? (pr(n, 1, En), a === void 0 ? a = m.rounding : pr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Xu(e);
  else {
    for (d = Ur(e), l = d.indexOf("."), y ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), v = new m(1), v.e = d.length - l, v.d = Ut(Ur(v), 10, t), v.e = v.d.length), f = Ut(d, 10, t), o = s = f.length; f[--s] == 0; )
      f.pop();
    if (!f[0])
      d = y ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = f, e.e = o, e = Ee(e, v, n, a, 0, t), f = e.d, o = e.e, u = Uu), l = f[n], i = t / 2, u = u || f[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && f[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), f.length = n, u)
        for (; ++f[--n] > t - 1; )
          f[n] = 0, n || (++o, f.unshift(1));
      for (s = f.length; !f[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ai.charAt(f[l]);
      if (y) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (f = Ut(d, t, r), s = f.length; !f[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += ai.charAt(f[l]);
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
function Ep(e) {
  return new this(e).abs();
}
function Ip(e) {
  return new this(e).acos();
}
function Bp(e) {
  return new this(e).acosh();
}
function Np(e, r) {
  return new this(e).plus(r);
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
function Rp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Br(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Br(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Br(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Ee(e, r, o, 1)), r = Br(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Ee(e, r, o, 1)), n;
}
function Up(e) {
  return new this(e).cbrt();
}
function Fp(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Hp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Yp(e) {
  if (!e || typeof e != "object")
    throw Error(ho + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    En,
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
  for (r = 0; r < o.length; r += 3)
    if (n = o[r], t && (this[n] = ti[n]), (a = e[n]) !== void 0)
      if (ar(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(Pn + n + ": " + a);
  if (n = "crypto", t && (this[n] = ti[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(Hu);
      else
        this[n] = !1;
    else
      throw Error(Pn + n + ": " + a);
  return this;
}
function jp(e) {
  return new this(e).cos();
}
function Wp(e) {
  return new this(e).cosh();
}
function Zu(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Pl(o)) {
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
      throw Error(Pn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), ju.test(o) ? li(u, o) : Vp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Yp, t.clone = Zu, t.isDecimal = Pl, t.abs = Ep, t.acos = Ip, t.acosh = Bp, t.add = Np, t.asin = Dp, t.asinh = Ap, t.atan = zp, t.atanh = Lp, t.atan2 = Rp, t.cbrt = Up, t.ceil = Fp, t.clamp = Hp, t.cos = jp, t.cosh = Wp, t.div = Gp, t.exp = qp, t.floor = Xp, t.hypot = Kp, t.ln = Zp, t.log = Jp, t.log10 = _p, t.log2 = Qp, t.max = xp, t.min = eh, t.mod = rh, t.mul = nh, t.pow = ah, t.random = th, t.round = oh, t.sign = ih, t.sin = lh, t.sinh = sh, t.sqrt = uh, t.sub = dh, t.sum = vh, t.tan = fh, t.tanh = ch, t.trunc = mh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Gp(e, r) {
  return new this(e).div(r);
}
function qp(e) {
  return new this(e).exp();
}
function Xp(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Kp() {
  var e, r, n = new this(0);
  for (ge = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      n.d && (n = n.plus(r.times(r)));
    else {
      if (r.s)
        return ge = !0, new this(1 / 0);
      n = r;
    }
  return ge = !0, n.sqrt();
}
function Pl(e) {
  return e instanceof vn || e && e.toStringTag === Yu || !1;
}
function Zp(e) {
  return new this(e).ln();
}
function Jp(e, r) {
  return new this(e).log(r);
}
function Qp(e) {
  return new this(e).log(2);
}
function _p(e) {
  return new this(e).log(10);
}
function xp() {
  return qu(this, arguments, "lt");
}
function eh() {
  return qu(this, arguments, "gt");
}
function rh(e, r) {
  return new this(e).mod(r);
}
function nh(e, r) {
  return new this(e).mul(r);
}
function ah(e, r) {
  return new this(e).pow(r);
}
function th(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : pr(e, 1, En), a = Math.ceil(e / me), this.crypto)
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
function oh(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
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
function dh(e, r) {
  return new this(e).sub(r);
}
function vh() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (ge = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return ge = !0, fe(n, this.precision, this.rounding);
}
function fh(e) {
  return new this(e).tan();
}
function ch(e) {
  return new this(e).tanh();
}
function mh(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var vn = q.constructor = Zu(ti);
Kt = new vn(Kt);
Zt = new vn(Zt);
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
  onBeforeChange: F(),
  onChange: F(),
  onIncrement: F(),
  onDecrement: F(),
  "onUpdate:modelValue": F()
}, {
  n: hh,
  classes: gh
} = re("counter"), Ol = 100, Vl = 600, yh = ["inputmode", "readonly", "disabled"];
function bh(e, r) {
  var n = ie("var-icon"), a = ie("var-button"), t = ie("var-form-details");
  return h(), T(
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
      [Q(
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
          default: ve(() => [Q(n, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), ke(D(
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
        yh
      ), [[qv, e.inputValue]]), Q(
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
          default: ve(() => [Q(n, {
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
    ), Q(
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
var Ju = ee({
  name: "VarCounter",
  components: {
    VarButton: nr,
    VarIcon: Oe,
    VarFormDetails: _e
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: ph,
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
    } = a ?? {}, d, f, v, m, y = () => l(e.rules, e.modelValue), b = (B) => {
      De(() => {
        var {
          validateTrigger: N,
          rules: _,
          modelValue: H
        } = e;
        o(N, B, _, H);
      });
    }, g = () => {
      var {
        min: B
      } = e;
      w(e["onUpdate:modelValue"], B != null ? L(B) : 0), i();
    }, C = {
      reset: g,
      validate: y,
      resetValidation: i
    }, O = A(() => {
      var {
        max: B,
        modelValue: N
      } = e;
      return B != null && L(N) >= L(B);
    }), $ = A(() => {
      var {
        min: B,
        modelValue: N
      } = e;
      return B != null && L(N) <= L(B);
    }), S = (B) => {
      var {
        decimalLength: N,
        max: _,
        min: H
      } = e, j = L(B);
      return _ != null && j > L(_) && (j = L(_)), H != null && j < L(H) && (j = L(H)), B = String(j), N != null && (B = j.toFixed(L(N))), B;
    }, E = (B) => {
      var {
        lazyChange: N,
        onBeforeChange: _
      } = e, {
        value: H
      } = B.target, j = S(H);
      N ? w(_, L(j), V) : U(j), b("onInputChange");
    }, k = () => {
      var {
        disabled: B,
        readonly: N,
        disableDecrement: _,
        decrementButton: H,
        lazyChange: j,
        step: J,
        modelValue: z,
        onDecrement: Z,
        onBeforeChange: ne
      } = e;
      if (!(u != null && u.value || s != null && s.value || B || N || _ || !H) && !$.value) {
        var te = new vn(L(z)).minus(new vn(L(J))).toString(), he = S(te), Ce = L(he);
        w(Z, Ce), j ? w(ne, Ce, V) : (U(he), b("onDecrement"));
      }
    }, I = () => {
      var {
        disabled: B,
        readonly: N,
        disableIncrement: _,
        incrementButton: H,
        lazyChange: j,
        step: J,
        modelValue: z,
        onIncrement: Z,
        onBeforeChange: ne
      } = e;
      if (!(u != null && u.value || s != null && s.value || B || N || _ || !H) && !O.value) {
        var te = new vn(L(z)).plus(new vn(L(J))).toString(), he = S(te), Ce = L(he);
        w(Z, Ce), j ? w(ne, Ce, V) : (U(he), b("onIncrement"));
      }
    }, p = () => {
      var {
        press: B,
        lazyChange: N
      } = e;
      !B || N || (m = window.setTimeout(() => {
        K();
      }, Vl));
    }, P = () => {
      var {
        press: B,
        lazyChange: N
      } = e;
      !B || N || (v = window.setTimeout(() => {
        X();
      }, Vl));
    }, W = () => {
      f && clearTimeout(f), m && clearTimeout(m);
    }, R = () => {
      d && clearTimeout(d), v && clearTimeout(v);
    }, X = () => {
      d = window.setTimeout(() => {
        I(), X();
      }, Ol);
    }, K = () => {
      f = window.setTimeout(() => {
        k(), K();
      }, Ol);
    }, U = (B) => {
      r.value = B;
      var N = L(B);
      w(e["onUpdate:modelValue"], N);
    }, V = (B) => {
      U(S(String(B))), b("onLazyChange");
    };
    return w(n, C), le(() => e.modelValue, (B) => {
      U(S(String(B))), w(e.onChange, L(B));
    }), U(S(String(e.modelValue))), {
      n: hh,
      classes: gh,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: $,
      validate: y,
      reset: g,
      resetValidation: i,
      handleChange: E,
      decrement: k,
      increment: I,
      pressDecrement: p,
      pressIncrement: P,
      releaseDecrement: W,
      releaseIncrement: R,
      toSizeUnit: ye,
      toNumber: L
    };
  }
});
Ju.render = bh;
const Zn = Ju;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var sk = Zn, Qu = 60, _u = Qu * 60, xu = _u * 24, wh = xu * 7, Za = 1e3, Vo = Qu * Za, Ml = _u * Za, Ch = xu * Za, Sh = wh * Za, Hi = "millisecond", Ya = "second", ja = "minute", Wa = "hour", an = "day", Ft = "week", Ir = "month", ed = "quarter", tn = "year", Ga = "date", kh = "YYYY-MM-DDTHH:mm:ssZ", El = "Invalid Date", $h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Th = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Ph = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var si = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, Oh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + si(t, 2, "0") + ":" + si(o, 2, "0");
}, Vh = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Ir), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Ir);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, Mh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, Eh = function(r) {
  var n = {
    M: Ir,
    y: tn,
    w: Ft,
    d: an,
    D: Ga,
    h: Wa,
    m: ja,
    s: Ya,
    ms: Hi,
    Q: ed
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Ih = function(r) {
  return r === void 0;
};
const Bh = {
  s: si,
  z: Oh,
  m: Vh,
  a: Mh,
  p: Eh,
  u: Ih
};
var ut = "en", Jn = {};
Jn[ut] = Ph;
var Yi = function(r) {
  return r instanceof bo;
}, Qt = function e(r, n, a) {
  var t;
  if (!r)
    return ut;
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
  return !a && t && (ut = t), t || !a && ut;
}, ue = function(r, n) {
  if (Yi(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new bo(a);
}, Nh = function(r, n) {
  return ue(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Me = Bh;
Me.l = Qt;
Me.i = Yi;
Me.w = Nh;
var Dh = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Me.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match($h);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, bo = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = Qt(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = Dh(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Me;
  }, r.isValid = function() {
    return this.$d.toString() !== El;
  }, r.isSame = function(a, t) {
    var o = ue(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return ue(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < ue(a);
  }, r.$g = function(a, t, o) {
    return Me.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Me.u(t) ? !0 : t, i = Me.p(a), s = function(C, O) {
      var $ = Me.w(o.$u ? Date.UTC(o.$y, O, C) : new Date(o.$y, O, C), o);
      return l ? $ : $.endOf(an);
    }, u = function(C, O) {
      var $ = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Me.w(o.toDate()[C].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? $ : S).slice(O)
      ), o);
    }, d = this.$W, f = this.$M, v = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case tn:
        return l ? s(1, 0) : s(31, 11);
      case Ir:
        return l ? s(1, f) : s(0, f + 1);
      case Ft: {
        var y = this.$locale().weekStart || 0, b = (d < y ? d + 7 : d) - y;
        return s(l ? v - b : v + (6 - b), f);
      }
      case an:
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
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Me.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[an] = i + "Date", o[Ga] = i + "Date", o[Ir] = i + "Month", o[tn] = i + "FullYear", o[Wa] = i + "Hours", o[ja] = i + "Minutes", o[Ya] = i + "Seconds", o[Hi] = i + "Milliseconds", o)[l], u = l === an ? this.$D + (t - this.$W) : t;
    if (l === Ir || l === tn) {
      var d = this.clone().set(Ga, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ga, Math.min(this.$D, d.daysInMonth())).$d;
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
    var i = Me.p(t), s = function(v) {
      var m = ue(o);
      return Me.w(m.date(m.date() + Math.round(v * a)), o);
    };
    if (i === Ir)
      return this.set(Ir, this.$M + a);
    if (i === tn)
      return this.set(tn, this.$y + a);
    if (i === an)
      return s(1);
    if (i === Ft)
      return s(7);
    var u = (l = {}, l[ja] = Vo, l[Wa] = Ml, l[Ya] = Za, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Me.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || El;
    var l = a || kh, i = Me.z(this), s = this.$H, u = this.$m, d = this.$M, f = o.weekdays, v = o.months, m = o.meridiem, y = function($, S, E, k) {
      return $ && ($[S] || $(t, l)) || E[S].slice(0, k);
    }, b = function($) {
      return Me.s(s % 12 || 12, $, "0");
    }, g = m || function(O, $, S) {
      var E = O < 12 ? "AM" : "PM";
      return S ? E.toLowerCase() : E;
    }, C = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Me.s(d + 1, 2, "0"),
      MMM: y(o.monthsShort, d, v, 3),
      MMMM: y(v, d),
      D: this.$D,
      DD: Me.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: y(o.weekdaysMin, this.$W, f, 2),
      ddd: y(o.weekdaysShort, this.$W, f, 3),
      dddd: f[this.$W],
      H: String(s),
      HH: Me.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Me.s(u, 2, "0"),
      s: String(this.$s),
      ss: Me.s(this.$s, 2, "0"),
      SSS: Me.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(Th, function(O, $) {
      return $ || C[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Me.p(t), s = ue(a), u = (s.utcOffset() - this.utcOffset()) * Vo, d = this - s, f = Me.m(this, s);
    return f = (l = {}, l[tn] = f / 12, l[Ir] = f, l[ed] = f / 3, l[Ft] = (d - u) / Sh, l[an] = (d - u) / Ch, l[Wa] = d / Ml, l[ja] = d / Vo, l[Ya] = d / Za, l)[i] || d, o ? f : Me.a(f);
  }, r.daysInMonth = function() {
    return this.endOf(Ir).$D;
  }, r.$locale = function() {
    return Jn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Qt(a, t, !0);
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
}(), rd = bo.prototype;
ue.prototype = rd;
[["$ms", Hi], ["$s", Ya], ["$m", ja], ["$H", Wa], ["$W", an], ["$M", Ir], ["$y", tn], ["$D", Ga]].forEach(function(e) {
  rd[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
ue.extend = function(e, r) {
  return e.$i || (e(r, bo, ue), e.$i = !0), ue;
};
ue.locale = Qt;
ue.isDayjs = Yi;
ue.unix = function(e) {
  return ue(e * 1e3);
};
ue.en = Jn[ut];
ue.Ls = Jn;
ue.p = {};
const nd = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, ad = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Ah(e) {
  return ["date", "month"].includes(e);
}
var Ht = [{
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
  onPreview: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Lh
} = re("picker-header");
function Rh(e, r) {
  var n = ie("var-icon"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [Q(
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
        default: ve(() => [Q(n, {
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
      [Q(
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
            ae(e.showDate),
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
    ), Q(
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
        default: ve(() => [Q(n, {
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
var td = ee({
  name: "PanelHeader",
  components: {
    VarButton: nr,
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
    } = r, a = M(!1), t = M(0), o = A(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: f
      } = s;
      if (u === "month")
        return L(f) + t.value;
      var v = (i = Ze.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Ze.value.lang === "zh-CN" ? f + " " + v : v + " " + f;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
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
td.render = Rh;
const od = td;
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
ue.extend(nd);
ue.extend(ad);
var {
  n: Bt,
  classes: Uh
} = re("month-picker"), {
  n: Nt
} = re("date-picker");
function Fh(e, r) {
  var n = ie("panel-header"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(
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
      ), Q(
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
            }, [Q(
              a,
              Be({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, ui({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [Se(
                  ae(e.getMonthAbbr(t.index)),
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
var id = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: nr,
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
    } = r, [a, t] = e.current.split("-"), o = M(!1), l = M(0), i = M(null), s = Ae({
      left: !1,
      right: !1
    }), u = A(() => e.choose.chooseYear === e.preview.previewYear), d = A(() => e.preview.previewYear === a), f = (O) => {
      var $, S;
      return ($ = (S = Ze.value.datePickerMonthDict) == null ? void 0 : S[O].abbr) != null ? $ : "";
    }, v = (O) => {
      var {
        preview: {
          previewYear: $
        },
        componentProps: {
          min: S,
          max: E
        }
      } = e, k = !0, I = !0, p = $ + "-" + O;
      return E && (k = ue(p).isSameOrBefore(ue(E), "month")), S && (I = ue(p).isSameOrAfter(ue(S), "month")), k && I;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: $,
          chooseDays: S,
          chooseRangeMonth: E
        },
        componentProps: {
          type: k,
          range: I
        }
      } = e;
      if (I) {
        if (!E.length)
          return !1;
        var p = ue(O).isSameOrBefore(ue(E[1]), "month"), P = ue(O).isSameOrAfter(ue(E[0]), "month");
        return p && P;
      }
      return k === "month" ? $.includes(O) : S.some((W) => W.includes(O));
    }, y = (O) => {
      var {
        choose: {
          chooseMonth: $
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: E,
          color: k,
          multiple: I,
          range: p
        }
      } = e, P = S + "-" + O, W = () => p || I ? m(P) : ($ == null ? void 0 : $.index) === O && u.value, R = () => v(O) ? E ? !E(P) : !1 : !0, X = R(), K = () => X ? !0 : p || I ? !m(P) : !u.value || ($ == null ? void 0 : $.index) !== O, U = () => d.value && t === O && e.componentProps.showCurrent ? (p || I || u.value) && X ? !0 : p || I ? !m(P) : u.value ? ($ == null ? void 0 : $.index) !== t : !0 : !1, V = () => X ? "" : U() ? k ?? "" : W() ? "" : Nt() + "-color-cover", B = V().startsWith(Nt());
      return {
        outline: U(),
        text: K(),
        color: K() ? "" : k,
        textColor: B ? "" : V(),
        [Nt() + "-color-cover"]: B,
        class: Uh(Bt("button"), [X, Bt("button--disabled")]),
        disabled: X
      };
    }, b = (O, $) => {
      var S = $.currentTarget;
      S.classList.contains(Bt("button--disabled")) || n("choose-month", O);
    }, g = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, C = (O) => {
      i.value.checkDate(O);
    };
    return le(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: $,
          max: S
        }
      } = e;
      S && (s.right = !ue("" + (L(O) + 1)).isSameOrBefore(ue(S), "year")), $ && (s.left = !ue("" + (L(O) - 1)).isSameOrAfter(ue($), "year"));
    }, {
      immediate: !0
    }), {
      n: Bt,
      nDate: Nt,
      pack: Ze,
      MONTH_LIST: Ht,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: C,
      buttonProps: y,
      getMonthAbbr: f,
      chooseMonth: b,
      checkDate: g
    };
  }
});
id.render = Fh;
const Hh = id;
var {
  n: Il,
  classes: Yh
} = re("year-picker"), jh = ["onClick"];
function Wh(e, r) {
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
          style: G({
            color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(n)
        },
        ae(n),
        15,
        jh
      ))),
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
    } = r, a = A(() => {
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
        var d = ue(i).format("YYYY-MM-D"), f = L(d.split("-")[0]);
        if (f < u[0] && f > u[1] && (u = [f, u[1]]), f <= u[1])
          return [f];
      }
      if (s) {
        var v = ue(s).format("YYYY-MM-D"), m = L(v.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var y = u[0]; y >= u[1]; y--)
        o.push(y);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return dr(() => {
      var o = document.querySelector("." + Il("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Il,
      classes: Yh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
ld.render = Wh;
const Gh = ld;
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
ue.extend(nd);
ue.extend(ad);
var {
  n: Fa,
  classes: qh
} = re("day-picker"), {
  n: Dt
} = re("date-picker");
function Xh(e, r) {
  var n = ie("panel-header"), a = ie("var-button");
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(
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
      ), Q(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), T("div", {
            key: e.panelKey
          }, [D(
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
                ae(e.getDayAbbr(t.index)),
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
            [(h(!0), T(
              Ve,
              null,
              Ue(e.days, (t, o) => (h(), T("li", {
                key: o
              }, [Q(
                a,
                Be({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, di({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [Se(
                    ae(e.filterDay(t)),
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
var sd = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: nr,
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
    } = r, [a, t, o] = e.current.split("-"), l = M([]), i = M(!1), s = M(0), u = M(null), d = Ae({
      left: !1,
      right: !1
    }), f = A(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), v = A(() => {
      var p;
      return e.choose.chooseYear === e.preview.previewYear && ((p = e.choose.chooseMonth) == null ? void 0 : p.index) === e.preview.previewMonth.index;
    }), m = A(() => {
      var p = lt.findIndex((P) => P.index === e.componentProps.firstDayOfWeek);
      return p === -1 || p === 0 ? lt : lt.slice(p).concat(lt.slice(0, p));
    }), y = (p) => {
      var P, W;
      return (P = (W = Ze.value.datePickerWeekDict) == null ? void 0 : W[p].abbr) != null ? P : "";
    }, b = (p) => p > 0 ? p : "", g = () => {
      var {
        preview: {
          previewMonth: p,
          previewYear: P
        }
      } = e, W = ue(P + "-" + p.index).daysInMonth(), R = ue(P + "-" + p.index + "-01").day(), X = m.value.findIndex((K) => K.index === "" + R);
      l.value = [...Array(X).fill(-1), ...Array.from(Array(W + 1).keys())].filter((K) => K);
    }, C = () => {
      var {
        preview: {
          previewYear: p,
          previewMonth: P
        },
        componentProps: {
          max: W,
          min: R
        }
      } = e;
      if (W) {
        var X = p + "-" + (L(P.index) + 1);
        d.right = !ue(X).isSameOrBefore(ue(W), "month");
      }
      if (R) {
        var K = p + "-" + (L(P.index) - 1);
        d.left = !ue(K).isSameOrAfter(ue(R), "month");
      }
    }, O = (p) => {
      var {
        preview: {
          previewYear: P,
          previewMonth: W
        },
        componentProps: {
          min: R,
          max: X
        }
      } = e, K = !0, U = !0, V = P + "-" + W.index + "-" + p;
      return X && (K = ue(V).isSameOrBefore(ue(X), "day")), R && (U = ue(V).isSameOrAfter(ue(R), "day")), K && U;
    }, $ = (p) => {
      var {
        choose: {
          chooseDays: P,
          chooseRangeDay: W
        },
        componentProps: {
          range: R
        }
      } = e;
      if (R) {
        if (!W.length)
          return !1;
        var X = ue(p).isSameOrBefore(ue(W[1]), "day"), K = ue(p).isSameOrAfter(ue(W[0]), "day");
        return X && K;
      }
      return P.includes(p);
    }, S = (p) => {
      if (p < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Fa("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: P
        },
        preview: {
          previewYear: W,
          previewMonth: R
        },
        componentProps: {
          allowedDates: X,
          color: K,
          multiple: U,
          range: V
        }
      } = e, B = W + "-" + R.index + "-" + p, N = () => V || U ? $(B) : L(P) === p && v.value, _ = () => O(p) ? X ? !X(B) : !1 : !0, H = _(), j = () => H ? !0 : V || U ? !$(B) : !v.value || L(P) !== p, J = () => f.value && L(o) === p && e.componentProps.showCurrent ? (V || U || v.value) && H ? !0 : V || U ? !$(B) : v.value ? P !== o : !0 : !1, z = () => H ? "" : J() ? K ?? "" : N() ? "" : Dt() + "-color-cover", Z = z().startsWith(Dt());
      return {
        text: j(),
        outline: J(),
        textColor: Z ? "" : z(),
        [Dt() + "-color-cover"]: Z,
        class: qh(Fa("button"), Fa("button--usable"), [H, Fa("button--disabled")]),
        disabled: H
      };
    }, E = (p) => {
      i.value = p === "prev", s.value += p === "prev" ? -1 : 1, n("check-preview", "month", p);
    }, k = (p, P) => {
      var W = P.currentTarget;
      W.classList.contains(Fa("button--disabled")) || n("choose-day", p);
    }, I = (p) => {
      u.value.checkDate(p);
    };
    return dr(() => {
      g(), C();
    }), le(() => e.preview, () => {
      g(), C();
    }), {
      n: Fa,
      nDate: Dt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: I,
      filterDay: b,
      getDayAbbr: y,
      checkDate: E,
      chooseDay: k,
      buttonProps: S
    };
  }
});
sd.render = Xh;
const Kh = sd;
var {
  n: Zh,
  classes: Jh
} = re("date-picker");
function Qh(e, r) {
  var n = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return h(), T(
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
          ae(e.chooseYear),
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
        [Q(
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
              }, () => [Se(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [Se(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [Se(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), T("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [Se(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [Se(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "date", $t(Be({
                key: 2
              }, e.slotProps)), () => [Se(
                ae(e.getDateTitle),
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
      [Q(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (h(), be(
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
          )) : e.getPanelType === "month" ? (h(), be(
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
          )) : e.getPanelType === "date" ? (h(), be(
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
var ud = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Hh,
    YearPickerPanel: Gh,
    DayPickerPanel: Kh
  },
  props: zh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = ue().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Ht.find((se) => se.index === i), u = M(!1), d = M(!1), f = M(!0), v = M(), m = M(), y = M(), b = M(s), g = M(l), C = M(!1), O = M([]), $ = M([]), S = M([]), E = M([]), k = M(null), I = M(null), p = Ae({
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
    }), P = A(() => ({
      chooseMonth: v.value,
      chooseYear: m.value,
      chooseDay: y.value,
      chooseMonths: O.value,
      chooseDays: $.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: E.value
    })), W = A(() => ({
      previewMonth: b.value,
      previewYear: g.value
    })), R = A(() => {
      var {
        multiple: se,
        range: we
      } = e;
      if (we)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var pe = "";
      if (v.value) {
        var $e, Te;
        pe = ($e = (Te = Ze.value.datePickerMonthDict) == null ? void 0 : Te[v.value.index].name) != null ? $e : "";
      }
      return se ? "" + O.value.length + Ze.value.datePickerSelected : pe;
    }), X = A(() => {
      var se, we, pe, $e, {
        multiple: Te,
        range: Re
      } = e;
      if (Re) {
        var ir = E.value.map((To) => ue(To).format("YYYY-MM-DD"));
        return ir.length ? ir[0] + " ~ " + ir[1] : "";
      }
      if (Te)
        return "" + $.value.length + Ze.value.datePickerSelected;
      if (!m.value || !v.value || !y.value)
        return "";
      var wr = ue(m.value + "-" + v.value.index + "-" + y.value).day(), Ua = lt.find((To) => To.index === "" + wr), el = (se = (we = Ze.value.datePickerWeekDict) == null ? void 0 : we[Ua.index].name) != null ? se : "", Rv = (pe = ($e = Ze.value.datePickerMonthDict) == null ? void 0 : $e[v.value.index].name) != null ? pe : "", Uv = Na(y.value, 2, "0");
      return Ze.value.lang === "zh-CN" ? v.value.index + "-" + Uv + " " + el.slice(0, 3) : el.slice(0, 3) + ", " + Rv.slice(0, 3) + " " + y.value;
    }), K = A(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), U = A(() => !e.touchable || ["", "year"].includes(K.value)), V = A(() => {
      var se, we, pe, $e, Te = ue(m.value + "-" + ((se = v.value) == null ? void 0 : se.index) + "-" + y.value).day(), Re = y.value ? Na(y.value, 2, "0") : "";
      return {
        week: "" + Te,
        year: (we = m.value) != null ? we : "",
        month: (pe = ($e = v.value) == null ? void 0 : $e.index) != null ? pe : "",
        date: Re
      };
    }), B = A(() => P.value.chooseRangeDay.map((se) => ue(se).format("YYYY-MM-DD"))), N = A(() => m.value === g.value), _ = A(() => {
      var se;
      return ((se = v.value) == null ? void 0 : se.index) === b.value.index;
    }), H = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, j = (se) => {
      if (!U.value) {
        var {
          clientX: we,
          clientY: pe
        } = se.touches[0];
        r = we, n = pe;
      }
    }, J = (se, we) => se >= we && se > 20 ? "x" : "y", z = (se) => {
      if (!U.value) {
        var {
          clientX: we,
          clientY: pe
        } = se.touches[0], $e = we - r, Te = pe - n;
        t = J(Math.abs($e), Math.abs(Te)), a = $e > 0 ? "prev" : "next";
      }
    }, Z = () => {
      if (!(U.value || t !== "x")) {
        var se = K.value === "month" ? k : I;
        lo(() => {
          se.value.forwardRef(a), Ye();
        });
      }
    }, ne = (se, we) => {
      var pe = we === "month" ? S : E;
      if (pe.value = f.value ? [se, se] : [pe.value[0], se], f.value = !f.value, f.value) {
        var $e = ue(pe.value[0]).isAfter(pe.value[1]), Te = $e ? [pe.value[1], pe.value[0]] : [...pe.value];
        w(e["onUpdate:modelValue"], Te), w(e.onChange, Te);
      }
    }, te = (se, we) => {
      var pe = we === "month" ? O : $, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Te = pe.value.map((ir) => ue(ir).format($e)), Re = Te.findIndex((ir) => ir === se);
      Re === -1 ? Te.push(se) : Te.splice(Re, 1), w(e["onUpdate:modelValue"], Te), w(e.onChange, Te);
    }, he = (se, we) => !m.value || !v.value ? !1 : N.value ? se === "month" ? we.index < v.value.index : _.value ? we < L(y.value) : v.value.index > b.value.index : m.value > g.value, Ce = (se) => {
      var {
        readonly: we,
        range: pe,
        multiple: $e,
        onChange: Te,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || we)) {
        C.value = he("day", se);
        var ir = g.value + "-" + b.value.index + "-" + se, wr = ue(ir).format("YYYY-MM-DD");
        pe ? ne(wr, "day") : $e ? te(wr, "day") : (w(Re, wr), w(Te, wr));
      }
    }, er = (se) => {
      var {
        type: we,
        readonly: pe,
        range: $e,
        multiple: Te,
        onChange: Re,
        onPreview: ir,
        "onUpdate:modelValue": wr
      } = e;
      if (C.value = he("month", se), we === "month" && !pe) {
        var Ua = g.value + "-" + se.index;
        $e ? ne(Ua, "month") : Te ? te(Ua, "month") : (w(wr, Ua), w(Re, Ua));
      } else
        b.value = se, w(ir, L(g.value), L(b.value.index));
      d.value = !1;
    }, oe = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, w(e.onPreview, L(g.value), L(b.value.index));
    }, de = (se, we) => {
      var pe = we === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + pe);
      else {
        var $e = L(b.value.index) + pe;
        $e < 1 && (g.value = "" + (L(g.value) - 1), $e = 12), $e > 12 && (g.value = "" + (L(g.value) + 1), $e = 1), b.value = Ht.find((Te) => L(Te.index) === $e);
      }
      w(e.onPreview, L(g.value), L(b.value.index));
    }, ce = () => (e.multiple || e.range) && !Pe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Pe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ie = (se) => Pe(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ke = (se, we) => {
      var pe = we === "month" ? S : E, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = se.map((wr) => ue(wr).format($e)).slice(0, 2), Re = pe.value.some((wr) => Ie(wr));
      if (!Re) {
        pe.value = Te;
        var ir = ue(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && ir && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, Ge = (se, we) => {
      var pe = we === "month" ? O : $, $e = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = Array.from(new Set(se.map((Re) => ue(Re).format($e))));
      pe.value = Te.filter((Re) => Re !== "Invalid Date");
    }, He = (se) => {
      var we = ue(se).format("YYYY-MM-D");
      if (!Ie(we)) {
        var [pe, $e, Te] = we.split("-"), Re = Ht.find((ir) => ir.index === $e);
        v.value = Re, m.value = pe, y.value = Te, b.value = Re, g.value = pe;
      }
    }, Ye = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!ce() || Ie(se) || !se))
        if (e.range) {
          if (!Pe(se))
            return;
          f.value = se.length !== 1, Ke(se, e.type);
        } else if (e.multiple) {
          if (!Pe(se))
            return;
          Ge(se, e.type);
        } else
          He(se);
    }, {
      immediate: !0
    }), le(K, Ye), {
      n: Zh,
      classes: Jh,
      monthPanelEl: k,
      dayPanelEl: I,
      reverse: C,
      currentDate: o,
      chooseMonth: v,
      chooseYear: m,
      chooseDay: y,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: R,
      getDateTitle: X,
      getPanelType: K,
      getChoose: P,
      getPreview: W,
      componentProps: p,
      slotProps: V,
      formatRange: B,
      clickEl: H,
      handleTouchstart: j,
      handleTouchmove: z,
      handleTouchend: Z,
      getChooseDay: Ce,
      getChooseMonth: er,
      getChooseYear: oe,
      checkPreview: de,
      formatElevation: hr
    };
  }
});
ud.render = Qh;
const Qn = ud;
Qn.install = function(e) {
  e.component(Qn.name, Qn);
};
var uk = Qn;
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
  onBeforeClose: F(),
  onConfirm: F(),
  onCancel: F(),
  "onUpdate:show": F()
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
  n: eg,
  classes: rg
} = re("dialog");
function ng(e, r) {
  var n = ie("var-button"), a = ie("var-popup");
  return h(), be(
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
          style: fi({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: c(e.n("title"))
          },
          [Y(e.$slots, "title", {}, () => [Se(
            ae(e.dt(e.title, e.pack.dialogTitle)),
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
            ae(e.message),
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
          [e.cancelButton ? (h(), be(
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
                ae(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (h(), be(
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
                ae(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
var dd = ee({
  name: "VarDialog",
  components: {
    VarPopup: Sr,
    VarButton: nr
  },
  inheritAttrs: !1,
  props: xh,
  setup(e) {
    var r = M(!1), n = M(!1), a = () => w(e["onUpdate:show"], !1), t = () => {
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
      r.value = i;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        n.value = !1;
        return;
      }
      n.value = i;
    }, {
      immediate: !0
    }), {
      n: eg,
      classes: rg,
      pack: Ze,
      dt: io,
      popupShow: r,
      popupCloseOnClickOverlay: n,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ye
    };
  }
});
dd.render = ng;
const gn = dd;
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
var ln, xt = {};
function ag(e) {
  return e === void 0 && (e = {}), Fe(e) ? _t({}, xt, {
    message: e
  }) : _t({}, xt, e);
}
function _r(e) {
  return nt() ? new Promise((r) => {
    _r.close();
    var n = ag(e), a = Ae(n);
    a.teleport = "body", ln = a;
    var {
      unmountInstance: t
    } = tt(gn, a, {
      onConfirm: () => {
        w(a.onConfirm), r("confirm");
      },
      onCancel: () => {
        w(a.onCancel), r("cancel");
      },
      onClose: () => {
        w(a.onClose), r("close");
      },
      onClosed: () => {
        w(a.onClosed), t(), ln === a && (ln = null);
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
_r.setDefaultOptions = function(e) {
  xt = e;
};
_r.resetDefaultOptions = function() {
  xt = {};
};
_r.close = function() {
  if (ln != null) {
    var e = ln;
    ln = null, De().then(() => {
      e.show = !1;
    });
  }
};
gn.install = function(e) {
  e.component(gn.name, gn);
};
_r.install = function(e) {
  e.component(gn.name, gn);
};
_r.Component = gn;
var dk = gn, tg = {
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, qa.apply(this, arguments);
}
var {
  n: og,
  classes: ig
} = re("divider");
function lg(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [Y(e.$slots, "default", {}, () => [e.description ? (h(), T(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var vd = ee({
  name: "VarDivider",
  props: tg,
  setup(e, r) {
    var {
      slots: n
    } = r, a = Ae({
      withText: !1
    }), t = A(() => Ao(e.inset) ? e.inset : !0), o = A(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Ao(i) || i === 0)
        return qa({}, d);
      var f = L(i), v = Math.abs(f) + (i + "").replace(f + "", "");
      return s ? qa({}, d, {
        height: "calc(80% - " + ye(v) + ")"
      }) : qa({}, d, {
        width: "calc(100% - " + ye(v) + ")",
        left: f > 0 ? ye(v) : ye(0)
      });
    }), l = () => {
      a.withText = !!n.default || !!e.description;
    };
    return dr(() => {
      l();
    }), kt(() => {
      l();
    }), qa({
      n: og,
      classes: ig
    }, Xv(a), {
      style: o,
      isInset: t
    });
  }
});
vd.render = lg;
const _n = vd;
_n.install = function(e) {
  e.component(_n.name, _n);
};
var vk = _n, sg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Yt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return sg[r];
  });
}
var jr = "top", On = "bottom", Da = "right", yn = "left", wo = "auto", Co = [jr, On, Da, yn], So = "start", yt = "end", ug = "clippingParents", fd = "viewport", ot = "popper", dg = "reference", Bl = /* @__PURE__ */ Co.reduce(function(e, r) {
  return e.concat([r + "-" + So, r + "-" + yt]);
}, []), cd = /* @__PURE__ */ [].concat(Co, [wo]).reduce(function(e, r) {
  return e.concat([r, r + "-" + So, r + "-" + yt]);
}, []), vg = "beforeRead", fg = "read", cg = "afterRead", mg = "beforeMain", pg = "main", hg = "afterMain", gg = "beforeWrite", yg = "write", bg = "afterWrite", ci = [vg, fg, cg, mg, pg, hg, gg, yg, bg];
function Wr(e) {
  return e.split("-")[0];
}
var wg = {
  start: "end",
  end: "start"
};
function Nl(e) {
  return e.replace(/start|end/g, function(r) {
    return wg[r];
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
function ji(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function In(e) {
  return ((Aa(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var dt = Math.max, Dl = Math.min, Ja = Math.round;
function mi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function md() {
  return !/^((?!chrome|android).)*safari/i.test(mi());
}
function Qa(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Ja(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ja(a.height) / e.offsetHeight || 1);
  var l = Aa(e) ? Mr(e) : window, i = l.visualViewport, s = !md() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, f = a.width / t, v = a.height / o;
  return {
    width: f,
    height: v,
    top: d,
    right: u + f,
    bottom: d + v,
    left: u,
    x: u,
    y: d
  };
}
function Wi(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Gi(e) {
  return Qa(In(e)).left + Wi(e).scrollLeft;
}
function Cg(e, r) {
  var n = Mr(e), a = In(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = md();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Gi(e),
    y: s
  };
}
function zr(e) {
  return Mr(e).getComputedStyle(e);
}
function Sg(e) {
  var r, n = In(e), a = Wi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = dt(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = dt(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Gi(e), s = -a.scrollTop;
  return zr(t || n).direction === "rtl" && (i += dt(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Fr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ko(e) {
  return Fr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ji(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    In(e)
  );
}
function qi(e) {
  var r = zr(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function pd(e) {
  return ["html", "body", "#document"].indexOf(Fr(e)) >= 0 ? e.ownerDocument.body : kr(e) && qi(e) ? e : pd(ko(e));
}
function vt(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = pd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], qi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(vt(ko(l)))
  );
}
function kg(e) {
  return ["table", "td", "th"].indexOf(Fr(e)) >= 0;
}
function Al(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  zr(e).position === "fixed" ? null : e.offsetParent;
}
function $g(e) {
  var r = /firefox/i.test(mi()), n = /Trident/i.test(mi());
  if (n && kr(e)) {
    var a = zr(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ko(e);
  for (ji(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Fr(t)) < 0; ) {
    var o = zr(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Xi(e) {
  for (var r = Mr(e), n = Al(e); n && kg(n) && zr(n).position === "static"; )
    n = Al(n);
  return n && (Fr(n) === "html" || Fr(n) === "body" && zr(n).position === "static") ? r : n || $g(e) || r;
}
function Tg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && ji(n)) {
    var a = r;
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
function Pg(e, r) {
  var n = Qa(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function zl(e, r, n) {
  return r === fd ? pi(Cg(e, n)) : Aa(r) ? Pg(r, n) : pi(Sg(In(e)));
}
function Og(e) {
  var r = vt(ko(e)), n = ["absolute", "fixed"].indexOf(zr(e).position) >= 0, a = n && kr(e) ? Xi(e) : e;
  return Aa(a) ? r.filter(function(t) {
    return Aa(t) && Tg(t, a) && Fr(t) !== "body";
  }) : [];
}
function Vg(e, r, n, a) {
  var t = r === "clippingParents" ? Og(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = zl(e, u, a);
    return s.top = dt(d.top, s.top), s.right = Dl(d.right, s.right), s.bottom = Dl(d.bottom, s.bottom), s.left = dt(d.left, s.left), s;
  }, zl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function bt(e) {
  return e.split("-")[1];
}
function Mg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function hd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Wr(a) : null, o = a ? bt(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case jr:
      s = {
        x: l,
        y: r.y - n.height
      };
      break;
    case On:
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
    case yn:
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
  var u = t ? Mg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case So:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case yt:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
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
function Bg(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function gd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? ug : i, u = n.rootBoundary, d = u === void 0 ? fd : u, f = n.elementContext, v = f === void 0 ? ot : f, m = n.altBoundary, y = m === void 0 ? !1 : m, b = n.padding, g = b === void 0 ? 0 : b, C = Ig(typeof g != "number" ? g : Bg(g, Co)), O = v === ot ? dg : ot, $ = e.rects.popper, S = e.elements[y ? O : v], E = Vg(Aa(S) ? S : S.contextElement || In(e.elements.popper), s, d, l), k = Qa(e.elements.reference), I = hd({
    reference: k,
    element: $,
    strategy: "absolute",
    placement: t
  }), p = pi(Object.assign({}, $, I)), P = v === ot ? p : k, W = {
    top: E.top - P.top + C.top,
    bottom: P.bottom - E.bottom + C.bottom,
    left: E.left - P.left + C.left,
    right: P.right - E.right + C.right
  }, R = e.modifiersData.offset;
  if (v === ot && R) {
    var X = R[t];
    Object.keys(W).forEach(function(K) {
      var U = [Da, On].indexOf(K) >= 0 ? 1 : -1, V = [jr, On].indexOf(K) >= 0 ? "y" : "x";
      W[K] += X[V] * U;
    });
  }
  return W;
}
function Ng(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? cd : s, d = bt(a), f = d ? i ? Bl : Bl.filter(function(y) {
    return bt(y) === d;
  }) : Co, v = f.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  v.length === 0 && (v = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = v.reduce(function(y, b) {
    return y[b] = gd(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Wr(b)], y;
  }, {});
  return Object.keys(m).sort(function(y, b) {
    return m[y] - m[b];
  });
}
function Dg(e) {
  if (Wr(e) === wo)
    return [];
  var r = Yt(e);
  return [Nl(e), r, Nl(r)];
}
function Ag(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, v = n.altBoundary, m = n.flipVariations, y = m === void 0 ? !0 : m, b = n.allowedAutoPlacements, g = r.options.placement, C = Wr(g), O = C === g, $ = s || (O || !y ? [Yt(g)] : Dg(g)), S = [g].concat($).reduce(function(ne, te) {
      return ne.concat(Wr(te) === wo ? Ng(r, {
        placement: te,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : te);
    }, []), E = r.rects.reference, k = r.rects.popper, I = /* @__PURE__ */ new Map(), p = !0, P = S[0], W = 0; W < S.length; W++) {
      var R = S[W], X = Wr(R), K = bt(R) === So, U = [jr, On].indexOf(X) >= 0, V = U ? "width" : "height", B = gd(r, {
        placement: R,
        boundary: d,
        rootBoundary: f,
        altBoundary: v,
        padding: u
      }), N = U ? K ? Da : yn : K ? On : jr;
      E[V] > k[V] && (N = Yt(N));
      var _ = Yt(N), H = [];
      if (o && H.push(B[X] <= 0), i && H.push(B[N] <= 0, B[_] <= 0), H.every(function(ne) {
        return ne;
      })) {
        P = R, p = !1;
        break;
      }
      I.set(R, H);
    }
    if (p)
      for (var j = y ? 3 : 1, J = function(te) {
        var he = S.find(function(Ce) {
          var er = I.get(Ce);
          if (er)
            return er.slice(0, te).every(function(oe) {
              return oe;
            });
        });
        if (he)
          return P = he, "break";
      }, z = j; z > 0; z--) {
        var Z = J(z);
        if (Z === "break")
          break;
      }
    r.placement !== P && (r.modifiersData[a]._skip = !0, r.placement = P, r.reset = !0);
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
function Lg(e, r, n) {
  var a = Wr(e), t = [yn, jr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e
  })) : n, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [yn, Da].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Rg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = cd.reduce(function(d, f) {
    return d[f] = Lg(f, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Ug = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Rg
};
function Fg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Hg(e) {
  return e === Mr(e) || !kr(e) ? Wi(e) : Fg(e);
}
function Yg(e) {
  var r = e.getBoundingClientRect(), n = Ja(r.width) / e.offsetWidth || 1, a = Ja(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function jg(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Yg(r), o = In(r), l = Qa(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Fr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  qi(o)) && (i = Hg(r)), kr(r) ? (s = Qa(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = Gi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Wg(e) {
  var r = Qa(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function Gg(e) {
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
function qg(e) {
  var r = Gg(e);
  return ci.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Xg(e) {
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
var Bn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Kg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ll = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Zg(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Ll).filter(function(n, a, t) {
      return t.indexOf(n) === a;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof r.name != "string" && console.error(rn(Bn, String(r.name), '"name"', '"string"', '"' + String(r.name) + '"'));
          break;
        case "enabled":
          typeof r.enabled != "boolean" && console.error(rn(Bn, r.name, '"enabled"', '"boolean"', '"' + String(r.enabled) + '"'));
          break;
        case "phase":
          ci.indexOf(r.phase) < 0 && console.error(rn(Bn, r.name, '"phase"', "either " + ci.join(", "), '"' + String(r.phase) + '"'));
          break;
        case "fn":
          typeof r.fn != "function" && console.error(rn(Bn, r.name, '"fn"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "effect":
          r.effect != null && typeof r.effect != "function" && console.error(rn(Bn, r.name, '"effect"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "requires":
          r.requires != null && !Array.isArray(r.requires) && console.error(rn(Bn, r.name, '"requires"', '"array"', '"' + String(r.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(r.requiresIfExists) || console.error(rn(Bn, r.name, '"requiresIfExists"', '"array"', '"' + String(r.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Ll.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(rn(Kg, String(r.name), a, a));
      });
    });
  });
}
function Jg(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function Qg(e) {
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
var Rl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", _g = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ul = {
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
function xg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Ul : t;
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
    }, f = [], v = !1, m = {
      state: d,
      setOptions: function(C) {
        var O = typeof C == "function" ? C(d.options) : C;
        b(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: Aa(i) ? vt(i) : i.contextElement ? vt(i.contextElement) : [],
          popper: vt(s)
        };
        var $ = qg(Qg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = $.filter(function(R) {
          return R.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Jg([].concat($, d.options.modifiers), function(R) {
            var X = R.name;
            return X;
          });
          if (Zg(S), Wr(d.options.placement) === wo) {
            var E = d.orderedModifiers.find(function(R) {
              var X = R.name;
              return X === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = zr(s), I = k.marginTop, p = k.marginRight, P = k.marginBottom, W = k.marginLeft;
          [I, p, P, W].some(function(R) {
            return parseFloat(R);
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
        if (!v) {
          var C = d.elements, O = C.reference, $ = C.popper;
          if (!Fl(O, $)) {
            process.env.NODE_ENV !== "production" && console.error(Rl);
            return;
          }
          d.rects = {
            reference: jg(O, Xi($), d.options.strategy === "fixed"),
            popper: Wg($)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
            return d.modifiersData[R.name] = Object.assign({}, R.data);
          });
          for (var S = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(_g);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var k = d.orderedModifiers[E], I = k.fn, p = k.options, P = p === void 0 ? {} : p, W = k.name;
            typeof I == "function" && (d = I({
              state: d,
              options: P,
              name: W,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Xg(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!Fl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Rl), m;
    m.setOptions(u).then(function(g) {
      !v && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function y() {
      d.orderedModifiers.forEach(function(g) {
        var C = g.name, O = g.options, $ = O === void 0 ? {} : O, S = g.effect;
        if (typeof S == "function") {
          var E = S({
            state: d,
            name: C,
            instance: m,
            options: $
          }), k = function() {
          };
          f.push(E || k);
        }
      });
    }
    function b() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return m;
  };
}
var At = {
  passive: !0
};
function ey(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, At);
  }), i && s.addEventListener("resize", n.update, At), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, At);
    }), i && s.removeEventListener("resize", n.update, At);
  };
}
const ry = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ey,
  data: {}
};
function ny(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = hd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const ay = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ny,
  data: {}
};
var ty = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function oy(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ja(r * t) / t || 0,
    y: Ja(n * t) / t || 0
  };
}
function Hl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, v = l.x, m = v === void 0 ? 0 : v, y = l.y, b = y === void 0 ? 0 : y, g = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = g.x, b = g.y;
  var C = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), $ = yn, S = jr, E = window;
  if (u) {
    var k = Xi(n), I = "clientHeight", p = "clientWidth";
    if (k === Mr(n) && (k = In(n), zr(k).position !== "static" && i === "absolute" && (I = "scrollHeight", p = "scrollWidth")), k = k, t === jr || (t === yn || t === Da) && o === yt) {
      S = On;
      var P = f && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[I]
      );
      b -= P - a.height, b *= s ? 1 : -1;
    }
    if (t === yn || (t === jr || t === On) && o === yt) {
      $ = Da;
      var W = f && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[p]
      );
      m -= W - a.width, m *= s ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: i
  }, u && ty), X = d === !0 ? oy({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = X.x, b = X.y, s) {
    var K;
    return Object.assign({}, R, (K = {}, K[S] = O ? "0" : "", K[$] = C ? "0" : "", K.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", K));
  }
  return Object.assign({}, R, (r = {}, r[S] = O ? b + "px" : "", r[$] = C ? m + "px" : "", r.transform = "", r));
}
function iy(e) {
  var r = e.state, n = e.options, a = n.gpuAcceleration, t = a === void 0 ? !0 : a, o = n.adaptive, l = o === void 0 ? !0 : o, i = n.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = zr(r.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Wr(r.placement),
    variation: bt(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Hl(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Hl(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
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
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !kr(o) || !Fr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function uy(e) {
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
const dy = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: sy,
  effect: uy,
  requires: ["computeStyles"]
};
var vy = [ry, ay, ly, dy], fy = /* @__PURE__ */ xg({
  defaultModifiers: vy
});
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
function Yl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function jl(e) {
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
function yd(e) {
  var r = M(null), n = M(null), a = M({
    width: 0,
    height: 0
  }), t = As(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(k, I) {
      I ? ($(), w(e.onOpen)) : w(e.onClose);
    }
  }), {
    zIndex: o
  } = Ot(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: k,
      height: I
    } = at(r.value);
    a.value = {
      width: je(k),
      height: je(I)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, S());
  }, f = /* @__PURE__ */ function() {
    var k = jl(function* () {
      e.trigger === "hover" && (s = !1, yield Ar(), !i && E());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), v = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var k = jl(function* () {
      e.trigger === "hover" && (i = !1, yield Ar(), !s && E());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), y = () => {
    S();
  }, b = () => {
    t.value = !1, w(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && b();
  }, C = () => {
    u();
    var k = {
      x: je(e.offsetX),
      y: je(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: k.x,
          distance: k.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: k.x,
          distance: k.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: k.x,
          distance: k.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: k.x,
          distance: -k.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: k.x,
          distance: -k.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: k.x,
          distance: -k.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: k.y,
          distance: k.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: k.y,
          distance: -k.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: -k.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: -k.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: k.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: k.x
        };
    }
  }, O = () => {
    var {
      placement: k,
      skidding: I,
      distance: p
    } = C(), P = [eo({}, zg, {
      enabled: t.value
    }), eo({}, Ug, {
      options: {
        offset: [I, p]
      }
    })];
    return {
      placement: k,
      modifiers: P
    };
  }, $ = () => {
    l.setOptions(O());
  }, S = () => {
    var {
      disabled: k
    } = e;
    k || (t.value = !0, w(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, w(e["onUpdate:show"], !1);
  };
  return Ns(r, "click", g), le(() => e.offsetX, $), le(() => e.offsetY, $), le(() => e.placement, $), le(() => e.disabled, E), ro(() => {
    var k, I = e.reference ? (k = r.value) == null ? void 0 : k.querySelector(e.reference) : r.value;
    l = fy(I ?? r.value, n.value, O());
  }), ao(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: y,
    handleHostMouseenter: d,
    handleHostMouseleave: f,
    handlePopoverClose: b,
    handlePopoverMouseenter: v,
    handlePopoverMouseleave: m,
    resize: $,
    open: S,
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: gy,
  classes: yy
} = re("tooltip");
function by(e, r) {
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
    [Y(e.$slots, "default"), (h(), be(
      Mn,
      {
        to: e.teleport
      },
      [Q(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed,
          persisted: ""
        },
        {
          default: ve(() => [ke(D(
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
                ae(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Jr, e.show]])]),
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
var bd = ee({
  name: "VarTooltip",
  props: hy,
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
      handlePopoverClose: f,
      // expose
      open: v,
      // expose
      close: m,
      // expose
      resize: y
    } = yd(e);
    return {
      toSizeUnit: ye,
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      n: gy,
      classes: yy,
      handleHostClick: l,
      handlePopoverClose: f,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: y,
      open: v,
      close: m
    };
  }
});
bd.render = by;
const bn = bd;
bn.install = function(e) {
  e.component(bn.name, bn);
};
var fk = bn;
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, hi.apply(this, arguments);
}
var {
  n: Sy,
  classes: ky
} = re("ellipsis"), $y = {
  key: 0
};
function Ty(e, r) {
  var n = ie("var-tooltip");
  return h(), be(
    n,
    $t(to(e.tooltip)),
    {
      content: ve(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), T(
          "span",
          $y,
          ae(e.tooltip.content),
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
var wd = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: bn
  },
  props: Cy,
  setup(e) {
    var r = M(!1), n = A(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = A(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : hi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: Sy,
      classes: ky,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
wd.render = Ty;
const xn = wd;
xn.install = function(e) {
  e.component(xn.name, xn);
};
var ck = xn;
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
    validator: cu
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
  onClick: F(),
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:active": F()
};
function Wl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  classes: Gl,
  n: vr
} = re("fab");
const ea = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: My,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = As(e, "active"), o = M(null), {
      disabled: l
    } = vo(), i = (v, m, y) => {
      if (v.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (y === 0) {
          w(e.onClick, t.value, v);
          return;
        }
        t.value = m, w(e.onClick, t.value, v), w(t.value ? e.onOpen : e.onClose);
      }
    }, s = (v, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = v, w(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, w(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : ke(Q(nr, {
      "var-fab-cover": !0,
      class: vr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Q(Oe, {
        "var-fab-cover": !0,
        class: Gl([t.value, vr("trigger-active-icon"), vr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: vr("--trigger-icon-animation")
      }, null)]
    }), [[Jr, e.show]]), f = () => {
      var v, m, y = Ds((m = n.default == null ? void 0 : n.default()) != null ? m : []);
      return Q("div", Be({
        class: Gl(vr(), vr("--position-" + e.position), vr("--direction-" + e.direction), [e.fixed, vr("--fixed"), vr("--absolute")], [e.safeArea, vr("--safe-area")]),
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
      }, a), [Q(Le, {
        name: vr("--active-transition")
      }, Wl(v = d()) ? v : {
        default: () => [v]
      }), Q(Le, {
        name: vr("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Q("div", {
          class: vr("actions"),
          onClick: (b) => b.stopPropagation()
        }, [y.map((b) => Q("div", {
          class: vr("action")
        }, [b]))]), [[Jr, e.show && t.value && y.length]])]
      })]);
    };
    return le(() => e.trigger, () => {
      t.value = !1;
    }), le(() => e.disabled, () => {
      t.value = !1;
    }), Ns(o, "click", u), () => {
      var {
        teleport: v
      } = e;
      if (v) {
        var m;
        return Q(Mn, {
          to: v,
          disabled: l.value
        }, Wl(m = f()) ? m : {
          default: () => [m]
        });
      }
      return f();
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var mk = ea;
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
function ql(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function By(e) {
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
  n: Ny
} = re("form");
function Dy(e, r) {
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
var Cd = ee({
  name: "VarForm",
  props: Iy,
  setup(e) {
    var r = A(() => e.disabled), n = A(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Ym(), o = (d) => {
      setTimeout(() => {
        var f = kn(d), v = f === window ? 0 : sl(f), m = sl(d) - v - je(e.scrollToErrorOffsetY);
        pt(f, {
          top: m,
          animation: zo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = By(function* () {
        var f = yield Promise.all(a.map((g) => {
          var {
            validate: C
          } = g;
          return C();
        }));
        if (e.scrollToError) {
          var [, v] = _v(f, (g) => g === !1, e.scrollToError), m = v > -1;
          if (m) {
            var y, b = (y = a[v].instance.proxy) == null ? void 0 : y.$el;
            o(b);
          }
          return !m;
        }
        return f.every((g) => g === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), i = () => a.forEach((d) => {
      var {
        reset: f
      } = d;
      return f();
    }), s = () => a.forEach((d) => {
      var {
        resetValidation: f
      } = d;
      return f();
    }), u = {
      disabled: r,
      readonly: n
    };
    return t(u), {
      n: Ny,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
Cd.render = Dy;
const Gr = Cd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
Gr.useValidation = Or;
Gr.useForm = Vr;
var pk = Gr;
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: Ly,
  classes: Ry
} = re("image"), Uy = ["alt", "title", "lazy-loading", "lazy-error"], Fy = ["alt", "title", "src"];
function Hy(e, r) {
  var n = Ne("lazy"), a = Ne("ripple");
  return ke((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? ke((h(), T(
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
      Uy
    )), [[n, e.src]]) : x("v-if", !0), !e.lazy && !e.showErrorSlot ? (h(), T(
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
      Fy
    )) : x("v-if", !0), e.showErrorSlot ? Y(e.$slots, "error", {
      key: 2
    }) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Sd = ee({
  name: "VarImage",
  directives: {
    Lazy: ht,
    Ripple: We
  },
  props: zy,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(!1), t = (i) => {
      a.value = !!n.error, w(e.onError, i);
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
Sd.render = Hy;
const ra = Sd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var hk = ra, kd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Yy() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = or(kd);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var $d = {
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
var jy = 250, Wy = 20, {
  n: Gy,
  classes: qy
} = re("swipe"), Xy = ["onClick"];
function Ky(e, r) {
  return h(), T(
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
            style: G({
              background: e.indicatorColor
            }),
            key: n,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Xy
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
var Td = ee({
  name: "VarSwipe",
  props: $d,
  setup(e) {
    var r = M(null), n = M(0), a = A(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Yy(), {
      popup: f
    } = $f(), v = !1, m = !1, y = -1, b, g, C, O, $, S = (z) => s.find((Z) => {
      var {
        index: ne
      } = Z;
      return ne.value === z;
    }), E = () => {
      e.loop && (o.value >= 0 && S(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && S(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, k = (z) => {
      var Z = ur(z) ? z : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: ne
      } = e;
      return Z <= -1 ? ne ? -1 : 0 : Z >= d.value ? ne ? d.value : d.value - 1 : Z;
    }, I = (z) => {
      var {
        loop: Z
      } = e;
      return z === -1 ? Z ? d.value - 1 : 0 : z === d.value ? Z ? 0 : d.value - 1 : z;
    }, p = (z) => e.loop ? z < 0 ? d.value + z : z >= d.value ? z - d.value : z : oo(z, 0, d.value - 1), P = (z) => {
      var Z = o.value >= n.value, ne = o.value <= -t.value, te = 0, he = -(t.value - n.value);
      l.value = !0, (Z || ne) && (l.value = !0, o.value = ne ? te : he, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), lo(() => {
        l.value = !1, w(z);
      });
    }, W = () => {
      v || (i.value = p(L(e.initialIndex)), v = !0);
    }, R = () => {
      var {
        autoplay: z
      } = e;
      !z || d.value <= 1 || (X(), y = window.setTimeout(() => {
        _(), R();
      }, L(z)));
    }, X = () => {
      y && clearTimeout(y);
    }, K = (z, Z) => {
      if (z > Z && z > 10)
        return "horizontal";
      if (Z > z && Z > 10)
        return "vertical";
    }, U = (z) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: ne
        } = z.touches[0];
        b = Z, g = ne, C = performance.now(), m = !0, X(), P(() => {
          l.value = !0;
        });
      }
    }, V = (z) => {
      var {
        touchable: Z,
        vertical: ne
      } = e;
      if (!(!m || !Z)) {
        var {
          clientX: te,
          clientY: he
        } = z.touches[0], Ce = Math.abs(te - b), er = Math.abs(he - g), oe = K(Ce, er), de = ne ? "vertical" : "horizontal";
        if (oe === de) {
          z.preventDefault();
          var ce = O !== void 0 ? te - O : 0, Ie = $ !== void 0 ? he - $ : 0;
          O = te, $ = he, o.value += ne ? Ie : ce, E();
        }
      }
    }, B = () => {
      if (m) {
        var {
          vertical: z,
          onChange: Z
        } = e, ne = z ? $ < g : O < b, te = Math.abs(z ? g - $ : b - O), he = performance.now() - C <= jy && te >= Wy, Ce = he ? k(ne ? i.value + 1 : i.value - 1) : k();
        m = !1, l.value = !1, O = void 0, $ = void 0, o.value = Ce * -n.value;
        var er = i.value;
        i.value = I(Ce), R(), er !== i.value && w(Z, i.value);
      }
    }, N = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((z) => {
        z.setTranslate(0);
      }), R(), setTimeout(() => {
        l.value = !1;
      }));
    }, _ = (z) => {
      if (!(d.value <= 1)) {
        W();
        var {
          loop: Z,
          onChange: ne
        } = e, te = i.value;
        i.value = p(te + 1), (z == null ? void 0 : z.event) !== !1 && w(ne, i.value), P(() => {
          if (te === d.value - 1 && Z) {
            S(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          te !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, H = (z) => {
      if (!(d.value <= 1)) {
        W();
        var {
          loop: Z,
          onChange: ne
        } = e, te = i.value;
        i.value = p(te - 1), (z == null ? void 0 : z.event) !== !1 && w(ne, i.value), P(() => {
          if (te === 0 && Z) {
            S(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          te !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, j = (z, Z) => {
      if (!(d.value <= 1 || z === i.value)) {
        z = z < 0 ? 0 : z, z = z >= d.value ? d.value : z;
        var ne = z > i.value ? _ : H, te = Math.abs(z - i.value);
        Array.from({
          length: te
        }).forEach((he, Ce) => {
          ne({
            event: Ce === te - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, J = {
      size: n,
      vertical: a
    };
    return u(J), le(() => d.value, /* @__PURE__ */ Kl(function* () {
      yield Ar(), W(), N();
    })), f && le(() => f.show.value, /* @__PURE__ */ function() {
      var z = Kl(function* (Z) {
        Z ? (yield Ar(), N()) : X();
      });
      return function(Z) {
        return z.apply(this, arguments);
      };
    }()), Vn(N), so(X), uo(N), {
      n: Gy,
      classes: qy,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: U,
      handleTouchmove: V,
      handleTouchend: B,
      next: _,
      prev: H,
      to: j,
      resize: N,
      toNumber: L
    };
  }
});
Td.render = Ky;
const qr = Td;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var gk = qr;
function Zy() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = tr(kd);
  return e || Pr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Jy
} = re("swipe-item");
function Qy(e, r) {
  return h(), T(
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
var Pd = ee({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = Zy(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: Jy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Pd.render = Qy;
const Xr = Pd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var yk = Xr;
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
}, Je($d, ["loop", "indicator", "onChange"]), Je(Pt, [
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
  classes: xy
} = re("image-preview"), Mo = 12, Jl = 200, eb = 350, Ql = 200, rb = 500, nb = ["onTouchstart"], ab = ["src", "alt"];
function tb(e, r) {
  var n = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), o = ie("var-popup");
  return h(), be(
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
      default: ve(() => [Q(
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
          default: ve(() => [(h(!0), T(
            Ve,
            null,
            Ue(e.images, (l, i) => (h(), be(
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
                    ab
                  )],
                  46,
                  nb
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
              ae(i + 1) + " / " + ae(s),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), be(
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
      )) : x("v-if", !0)]), D(
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
var Od = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: qr,
    VarSwipeItem: Xr,
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: _y,
  setup(e) {
    var r = M(!1), n = A(() => {
      var {
        images: V,
        current: B
      } = e, N = V.findIndex((_) => _ === B);
      return N >= 0 ? N : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, f = null, v = null, m = !1, y = A(() => {
      var {
        imagePreventDefault: V,
        show: B
      } = e;
      return B && V;
    }), b = (V, B) => {
      var {
        clientX: N,
        clientY: _
      } = V, {
        clientX: H,
        clientY: j
      } = B;
      return Math.abs(Math.sqrt(Math.pow(H - N, 2) + Math.pow(j - _, 2)));
    }, g = (V, B) => ({
      clientX: V.clientX,
      clientY: V.clientY,
      timestamp: performance.now(),
      target: B
    }), C = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Ql);
    }, O = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, $ = (V) => d ? b(d, V) <= Mo && V.timestamp - d.timestamp <= Jl && d.target === V.target : !1, S = (V) => !V || !u || !d ? !1 : b(u, d) <= Mo && performance.now() - d.timestamp < eb && (V === u.target || V.parentNode === u.target), E = () => {
      window.clearTimeout(v), m = !1, u = null;
    }, k = (V) => {
      if (window.clearTimeout(v), m) {
        m = !1;
        return;
      }
      var B = S(V.target);
      f = window.setTimeout(() => {
        B && K(), u = null;
      }, Jl);
    }, I = (V, B) => {
      window.clearTimeout(f), window.clearTimeout(v);
      var N = g(V.touches[0], V.currentTarget);
      if (u = N, v = window.setTimeout(() => {
        var {
          onLongPress: _
        } = e;
        m = !0, w(_, B);
      }, rb), $(N)) {
        a.value > 1 ? O() : C();
        return;
      }
      d = N;
    }, p = (V) => {
      var {
        offsetWidth: B,
        offsetHeight: N
      } = V, {
        naturalWidth: _,
        naturalHeight: H
      } = V.querySelector("." + Zl("image"));
      return {
        width: B,
        height: N,
        imageRadio: H / _,
        rootRadio: N / B,
        zoom: L(e.zoom)
      };
    }, P = (V) => {
      var {
        zoom: B,
        imageRadio: N,
        rootRadio: _,
        width: H,
        height: j
      } = p(V);
      if (!N)
        return 0;
      var J = N > _ ? j / N : H;
      return Math.max(0, (B * J - H) / 2) / B;
    }, W = (V) => {
      var {
        zoom: B,
        imageRadio: N,
        rootRadio: _,
        width: H,
        height: j
      } = p(V);
      if (!N)
        return 0;
      var J = N > _ ? j : H * N;
      return Math.max(0, (B * J - j) / 2) / B;
    }, R = (V, B, N) => V + B >= N ? N : V + B <= -N ? -N : V + B, X = (V) => {
      if (d) {
        var B = V.currentTarget, N = g(V.touches[0], B);
        if (b(N, d) > Mo && window.clearTimeout(v), a.value > 1) {
          var _ = N.clientX - d.clientX, H = N.clientY - d.clientY, j = P(B), J = W(B);
          t.value = R(t.value, _, j), o.value = R(o.value, H, J);
        }
        d = N;
      }
    }, K = () => {
      if (a.value > 1) {
        O(), setTimeout(() => w(e["onUpdate:show"], !1), Ql);
        return;
      }
      w(e["onUpdate:show"], !1);
    }, U = (V) => {
      e.imagePreventDefault && e.show && V.preventDefault();
    };
    return $n(() => document, "contextmenu", U), le(() => e.show, (V) => {
      r.value = V;
    }, {
      immediate: !0
    }), {
      n: Zl,
      classes: xy,
      isPreventDefault: y,
      initialIndex: n,
      popupShow: r,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: I,
      handleTouchmove: X,
      handleTouchend: k,
      handleTouchcancel: E,
      close: K
    };
  }
});
Od.render = tb;
const wn = Od;
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
function ob(e) {
  return e === void 0 && (e = {}), Fe(e) ? ft({}, ct, {
    images: [e]
  }) : Pe(e) ? ft({}, ct, {
    images: e
  }) : ft({}, ct, e);
}
function Lr(e) {
  if (nt()) {
    Lr.close();
    var r = ob(e), n = Ae(r);
    n.teleport = "body", sn = n;
    var {
      unmountInstance: a
    } = tt(wn, n, {
      onClose: () => w(n.onClose),
      onClosed: () => {
        w(n.onClosed), a(), sn === n && (sn = null);
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
Lr.close = () => {
  if (sn != null) {
    var e = sn;
    sn = null, De().then(() => {
      e.show = !1;
    });
  }
};
Lr.setDefaultOptions = (e) => {
  ct = e;
};
Lr.resetDefaultOptions = () => {
  ct = {};
};
wn.install = function(e) {
  e.component(wn.name, wn);
};
Lr.install = function(e) {
  e.component(wn.name, wn);
};
Lr.Component = wn;
var bk = wn, jt = {
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
  n: ib,
  classes: lb
} = re("sticky");
function sb(e, r) {
  return h(), T(
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
var Vd = ee({
  name: "VarSticky",
  props: jt,
  setup(e) {
    var r = M(null), n = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = A(() => !e.disabled && e.cssMode), f = A(() => !e.disabled && !e.cssMode && a.value), v = A(() => je(e.offsetTop)), m, y = () => {
      var {
        cssMode: $,
        disabled: S
      } = e;
      if (!S) {
        var E = 0;
        if (m !== window) {
          var {
            top: k
          } = xe(m);
          E = k;
        }
        var I = n.value, p = r.value, {
          top: P,
          left: W
        } = xe(p), R = P - E;
        return R <= v.value ? ($ || (l.value = p.offsetWidth + "px", i.value = p.offsetHeight + "px", t.value = E + v.value + "px", o.value = W + "px", s.value = I.offsetWidth + "px", u.value = I.offsetHeight + "px", a.value = !0), {
          offsetTop: v.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: R,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var $ = y();
        $ && w(e.onScroll, $.offsetTop, $.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var $ = xl(function* () {
        a.value = !1, yield df(), y();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var $ = xl(function* () {
        yield Ar(), m = kn(r.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return le(() => e.disabled, g), dr(C), so(O), uo(g), $n(() => window, "scroll", b), {
      n: ib,
      classes: lb,
      resize: g,
      stickyEl: r,
      wrapperEl: n,
      isFixed: a,
      offsetTop: v,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: l,
      fixedHeight: i,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: f,
      toNumber: L
    };
  }
});
Vd.render = sb;
const Kr = Vd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var wk = Kr, Md = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function ub() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = or(Md);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function db() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = tr(Md);
  return n || Pr("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var vb = {
  index: {
    type: [Number, String]
  }
}, {
  n: fb,
  classes: cb
} = re("index-anchor");
function mb(e, r) {
  return h(), be(
    rt(e.sticky ? e.n("$-sticky") : e.Transition),
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
          ae(e.name),
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
var Ed = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Kr
  },
  inheritAttrs: !1,
  props: vb,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = db(), t = M(0), o = M(!1), l = A(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: f,
      zIndex: v
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, y = (g) => {
      o.value = g;
    }, b = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: y
    };
    return a(b), {
      n: fb,
      classes: cb,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: v,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: f,
      Transition: Le
    };
  }
});
Ed.render = mb;
const na = Ed;
na.install = function(e) {
  e.component(na.name, na);
};
var Ck = na, pb = {
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
function es(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function zt(e) {
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
  n: hb,
  classes: gb
} = re("index-bar"), yb = ["onClick"];
function bb(e, r) {
  return h(), T(
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
      [(h(!0), T(
        Ve,
        null,
        Ue(e.anchorNameList, (n) => (h(), T(
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
          ae(n),
          15,
          yb
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
var Id = ee({
  name: "VarIndexBar",
  props: pb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = ub(), t = M(""), o = M(null), l = M([]), i = M(), s = A(() => e.sticky), u = A(() => e.stickyCssMode || e.cssMode), d = A(() => je(e.stickyOffsetTop)), f = A(() => e.zIndex), v = null, m = !1, y = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: f
    };
    a(y);
    var b = (I, p) => {
      var P = Oi(I) ? I.name.value : I;
      P === i.value || P === void 0 || (i.value = P, (p == null ? void 0 : p.event) !== !1 && w(e.onChange, P));
    }, g = () => {
      if (Vi(v))
        return 0;
      var {
        top: I
      } = xe(v), {
        scrollTop: p
      } = v, {
        top: P
      } = xe(o.value);
      return p - I + P;
    }, C = () => {
      var I = mt(v), p = v === window ? document.body.scrollHeight : v.scrollHeight, P = g();
      n.forEach((W, R) => {
        var X = W.ownTop.value, K = I - X + d.value - P, U = R === n.length - 1 ? p : n[R + 1].ownTop.value - W.ownTop.value;
        W.setDisabled(!0), K >= 0 && K < U && t.value === "" && (W.setDisabled(!1), b(W));
      });
    }, O = /* @__PURE__ */ function() {
      var I = zt(function* (p) {
        var {
          anchorName: P,
          manualCall: W = !1,
          options: R
        } = p;
        if (W && w(e.onClick, P), !(P === i.value && !m)) {
          var X = n.find((B) => {
            var {
              name: N
            } = B;
            return P === N.value;
          });
          if (X) {
            var K = g(), U = X.ownTop.value - d.value + K, V = Ei(v);
            t.value = P, b(P, R), yield pt(v, {
              left: V,
              top: U,
              animation: $s,
              duration: L(e.duration)
            }), lo(() => {
              t.value = "";
            });
          }
        }
      });
      return function(P) {
        return I.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var I = zt(function* () {
        yield Ar(), v = kn(o.value);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), S = () => {
      v.addEventListener("scroll", C);
    }, E = () => {
      v.removeEventListener("scroll", C);
    }, k = (I, p) => {
      br(() => O({
        anchorName: I,
        options: p
      }));
    };
    return le(() => r.value, /* @__PURE__ */ zt(function* () {
      yield Ar(), n.forEach((I) => {
        var {
          name: p,
          setOwnTop: P
        } = I;
        p.value && l.value.push(p.value), P();
      });
    })), dr(/* @__PURE__ */ zt(function* () {
      yield $(), S();
    })), no(E), xa(() => {
      m = !0, E();
    }), Vn(() => {
      !m || i.value === void 0 || (O({
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
      zIndex: f,
      anchorNameList: l,
      toNumber: L,
      scrollTo: k,
      anchorClick: O
    };
  }
});
Id.render = bb;
const aa = Id;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var Sk = aa;
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
  onClick: F(),
  onClear: F()
}, {
  n: Eo,
  classes: Sb
} = re("field-decorator"), kb = ["for"];
function $b(e, r) {
  var n = ie("var-icon");
  return h(), T(
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
      ), e.placeholder && e.hint ? (h(), T(
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
          ae(e.placeholder),
          1
          /* TEXT */
        )],
        14,
        kb
      )) : x("v-if", !0), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (h(), be(
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
          [e.placeholder && e.hint ? (h(), be(Mn, {
            key: 0,
            to: "body"
          }, [D(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            ae(e.placeholder),
            3
            /* TEXT, CLASS */
          )])) : x("v-if", !0)],
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
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Bd = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Oe
  },
  props: Ki,
  setup(e, r) {
    var {
      slots: n
    } = r, a = M(null), t = M(""), o = A(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = A(() => e.hint && (!Hr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: f,
        value: v,
        composing: m
      } = e;
      if (!f && (!Hr(v) || m))
        return Eo("--placeholder-hidden");
      if (l.value)
        return Eo("--placeholder-hint");
    }, s = () => {
      var {
        size: f,
        hint: v,
        variant: m,
        placeholder: y
      } = e;
      if (!y || !v || m !== "outlined") {
        t.value = "";
        return;
      }
      var b = at(a.value), g = "var(--field-decorator-outlined-" + f + "-placeholder-space)";
      t.value = "calc(" + b.width + " * 0.75 + " + g + " * 2)";
    }, u = (f) => {
      w(e.onClear, f);
    }, d = (f) => {
      w(e.onClick, f);
    };
    return uo(s), dr(s), kt(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Eo,
      classes: Sb,
      isEmpty: Hr,
      handleClear: u,
      handleClick: d
    };
  }
});
Bd.render = $b;
const Nd = Bd;
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
  onFocus: F(),
  onBlur: F(),
  onInput: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, Je(Ki, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Ob,
  classes: Vb
} = re("input"), Mb = ["placeholder", "enterkeyhint"], Eb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Ib = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Bb(e, r) {
  var n = ie("var-field-decorator"), a = ie("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Q(
      n,
      $t(to({
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
      Cs({
        "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
        default: ve(() => [e.normalizedType === "password" ? (h(), T(
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
          Mb
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
          Eb
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
          Ib
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
    ), Q(
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
var Dd = ee({
  name: "VarInput",
  components: {
    VarFormDetails: _e,
    VarFieldDecorator: Nd
  },
  props: Pb,
  setup(e) {
    var r = M("var-input-" + et().uid), n = M(null), a = M(!1), t = M(!1), o = A(() => e.type === "number" ? "text" : e.type), l = A(() => {
      var {
        maxlength: H,
        modelValue: j
      } = e;
      return H ? Hr(j) ? "0 / " + H : String(j).length + "/" + H : "";
    }), i = A(() => e.disabled || e.readonly ? "" : "text"), s = A(() => {
      var {
        hint: H,
        blurColor: j,
        focusColor: J
      } = e;
      if (!H)
        return f.value ? "var(--field-decorator-error-color)" : a.value ? J || "var(--field-decorator-focus-color)" : j || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: f,
      validateWithTrigger: v,
      validate: m,
      // expose
      resetValidation: y
    } = Or(), b = (H) => {
      De(() => {
        var {
          validateTrigger: j,
          rules: J,
          modelValue: z
        } = e;
        v(j, H, J, z);
      });
    }, g = (H) => {
      a.value = !0, w(e.onFocus, H), b("onFocus");
    }, C = (H) => {
      a.value = !1, w(e.onBlur, H), b("onBlur");
    }, O = (H) => {
      var j = H.target, {
        value: J
      } = j;
      return e.type === "number" && (J = P(J)), R(W(J));
    }, $ = () => {
      t.value = !0;
    }, S = (H) => {
      t.value && (t.value = !1, H.target.dispatchEvent(new Event("input")));
    }, E = (H) => {
      if (!t.value) {
        var j = O(H);
        w(e["onUpdate:modelValue"], j), w(e.onInput, j, H), b("onInput");
      }
    }, k = (H) => {
      var j = O(H);
      w(e.onChange, j, H), b("onChange");
    }, I = () => {
      var {
        disabled: H,
        readonly: j,
        clearable: J,
        onClear: z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || j || !J || (w(e["onUpdate:modelValue"], ""), w(z, ""), b("onClear"));
    }, p = (H) => {
      var {
        disabled: j,
        onClick: J
      } = e;
      d != null && d.disabled.value || j || (w(J, H), b("onClick"));
    }, P = (H) => {
      var j = H.indexOf("-"), J = H.indexOf(".");
      return j > -1 && (H = j === 0 ? "-" + H.replace(/-/g, "") : H.replace(/-/g, "")), J > -1 && (H = H.slice(0, J + 1) + H.slice(J).replace(/\./g, "")), H.replace(/[^-0-9.]/g, "");
    }, W = (H) => e.modelModifiers.trim ? H.trim() : H, R = (H) => e.maxlength ? H.slice(0, L(e.maxlength)) : H, X = (H) => {
      var {
        disabled: j,
        readonly: J
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || j || J || H.stopPropagation();
    };
    function K(H) {
      var {
        disabled: j
      } = e;
      d != null && d.disabled.value || j || H.target === n.value || (B(), H.preventDefault());
    }
    var U = () => {
      w(e["onUpdate:modelValue"], ""), y();
    }, V = () => m(e.rules, e.modelValue), B = () => {
      var H;
      (H = n.value) == null || H.focus();
    }, N = () => {
      n.value.blur();
    }, _ = {
      reset: U,
      validate: V,
      resetValidation: y
    };
    return w(u, _), dr(() => {
      e.autofocus && B();
    }), {
      el: n,
      id: r,
      isFocus: a,
      isComposing: t,
      errorMessage: f,
      placeholderColor: s,
      normalizedType: o,
      cursor: i,
      maxlengthText: l,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      n: Ob,
      classes: Vb,
      isEmpty: Hr,
      handleFocus: g,
      handleBlur: C,
      handleInput: E,
      handleChange: k,
      handleClear: I,
      handleClick: p,
      handleTouchstart: X,
      handleCompositionStart: $,
      handleCompositionEnd: S,
      handleMousedown: K,
      validate: V,
      resetValidation: y,
      reset: U,
      focus: B,
      blur: N
    };
  }
});
Dd.render = Bb;
const Cn = Dd;
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
var kk = Cn;
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
  onClick: F()
}, {
  n: zb,
  classes: Lb
} = re("link");
function Rb(e, r) {
  return h(), be(
    rt(e.tag),
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
var Ad = ee({
  name: "VarLink",
  props: Ab,
  setup(e) {
    var r = A(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), n = A(() => {
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
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: ye
    };
  }
});
Ad.render = Rb;
const ta = Ad;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var $k = ta, Ub = {
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
}, zd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Fb() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = or(zd);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Ld = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Hb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = tr(zd);
  return r || Pr("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function Yb() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = or(Ld);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function jb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = tr(Ld);
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
function Wb(e) {
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
  n: Gb,
  classes: qb
} = re("list");
function Xb(e, r) {
  var n = ie("var-loading"), a = Ne("ripple");
  return h(), T(
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
        ae(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Q(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: c(e.n("finished"))
      },
      ae(e.dt(e.finishedText, e.pack.listFinishedText)),
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
      [Se(
        ae(e.dt(e.errorText, e.pack.listErrorText)),
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
var Rd = ee({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: Nr
  },
  props: Ub,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = jb(), a = M(null), t = M(null), o, l = () => {
      w(e["onUpdate:error"], !1), w(e["onUpdate:loading"], !0), w(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = xe(o), {
        bottom: f
      } = xe(t.value);
      return Math.floor(f) - je(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Wb(function* () {
        yield De(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return w(n, {}), r && le(() => r.current.value, u), le(() => [e.loading, e.error, e.finished], u), dr(() => {
      o = kn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), so(s), {
      pack: Ze,
      listEl: a,
      detectorEl: t,
      dt: io,
      isNumber: ur,
      load: l,
      check: u,
      n: Gb,
      classes: qb
    };
  }
});
Rd.render = Xb;
const oa = Rd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var Tk = oa, Kb = {
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
} = re("loading-bar");
const Jb = ee({
  name: "VarLoadingBar",
  props: Kb,
  setup(e) {
    return () => Q("div", {
      class: Zb(ns(), [e.error, ns("--error")]),
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
var Ud, Fd, $o, Hd, as, Yd = {}, Qb = {
  value: 0,
  opacity: 0,
  error: !1
}, Qe = Ae(Qb), _b = (e) => {
  Object.assign(Qe, e);
}, xb = (e) => {
  Object.assign(Qe, e), Yd = e;
}, e0 = () => {
  Object.keys(Yd).forEach((e) => {
    Qe[e] !== void 0 && (Qe[e] = void 0);
  });
}, jd = () => {
  as || (as = !0, tt(Jb, Qe));
}, Zi = () => {
  Ud = window.setTimeout(() => {
    if (!(Qe.value >= 95)) {
      var e = Math.random();
      Qe.value < 70 && (e = Math.round(5 * Math.random())), Qe.value += e, Zi();
    }
  }, 200);
}, Ji = () => {
  window.clearTimeout(Fd), window.clearTimeout(Ud), window.clearTimeout($o), window.clearTimeout(Hd);
}, r0 = () => {
  Ji(), Qe.error = !1, Qe.value = 0, jd(), $o = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), Zi();
}, Wd = () => {
  Ji(), Qe.value = 100, $o = window.setTimeout(() => {
    Qe.opacity = 0, Fd = window.setTimeout(() => {
      Qe.error = !1;
    }, 250);
  }, 300);
}, n0 = () => {
  Ji(), Qe.error = !0, Qe.value === 100 && (Qe.value = 0), jd(), $o = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), Zi(), Hd = window.setTimeout(Wd, 300);
}, Gd = {
  start: r0,
  finish: Wd,
  error: n0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: _b,
  setDefaultOptions: xb,
  resetDefaultOptions: e0
}, Pk = Gd;
const bi = Gd;
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
}, {
  n: i0,
  classes: l0
} = re("menu");
function s0(e, r) {
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
    [Y(e.$slots, "default"), (h(), be(
      Mn,
      {
        to: e.teleport
      },
      [Q(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed,
          persisted: ""
        },
        {
          default: ve(() => [ke(D(
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
          ), [[Jr, e.show]])]),
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
var qd = ee({
  name: "VarMenu",
  props: o0,
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
      handlePopoverClose: f,
      // expose
      open: v,
      // expose
      close: m,
      // expose
      resize: y
    } = yd(e);
    return {
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: hr,
      toSizeUnit: ye,
      n: i0,
      classes: l0,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: f,
      resize: y,
      open: v,
      close: m
    };
  }
});
qd.render = s0;
const Zr = qd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var Ok = Zr, Xd = Symbol("SELECT_BIND_OPTION_KEY");
function u0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = or(Xd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function d0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = tr(Xd);
  return n || Pr("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var v0 = {
  label: {},
  value: {}
}, {
  n: f0,
  classes: c0
} = re("option");
function m0(e, r) {
  var n = ie("var-checkbox"), a = Ne("ripple");
  return ke((h(), T(
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
    ), e.multiple ? (h(), be(
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
    )) : x("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [Y(e.$slots, "default", {}, () => [Se(
        ae(e.label),
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
var Kd = ee({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: pn
  },
  props: v0,
  setup(e) {
    var r = M(!1), n = A(() => r.value), a = A(() => e.label), t = A(() => e.value), {
      select: o,
      bindSelect: l
    } = d0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, f = () => {
      r.value = !r.value, u(y);
    }, v = () => u(y), m = (b) => {
      r.value = b;
    }, y = {
      label: a,
      value: t,
      selected: n,
      sync: m
    };
    return le([() => e.label, () => e.value], d), l(y), {
      n: f0,
      classes: c0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      handleClick: f,
      handleSelect: v
    };
  }
});
Kd.render = m0;
const ia = Kd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Vk = ia, p0 = {
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
function h0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var {
  n: ts
} = re("overlay");
const la = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: p0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Ot(() => e.show, 1), {
      disabled: o
    } = vo(), l = () => {
      w(e.onClick), w(e["onUpdate:show"], !1);
    };
    fo(() => e.show, () => e.lockScroll);
    var i = () => Q("div", Be({
      class: ts(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [w(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return Q(Le, {
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
        return Q(Mn, {
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
var Mk = la, g0 = {
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
  n: y0,
  classes: b0
} = re("pagination"), w0 = ["item-mode", "onClick"];
function C0(e, r) {
  var n = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), l = Ne("ripple");
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
      [Y(e.$slots, "prev", {}, () => [Q(n, {
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
      [Q(
        a,
        {
          "var-pagination-cover": "",
          hint: !1,
          disabled: e.disabled,
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": r[1] || (r[1] = (i) => e.simpleCurrentValue = i),
          onBlur: r[2] || (r[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: r[3] || (r[3] = rl((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), D("span", null, [Se(
        " / " + ae(e.pageCount) + " ",
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
        [Se(
          ae(i),
          1
          /* TEXT */
        )],
        10,
        w0
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
      [Y(e.$slots, "next", {}, () => [Q(n, {
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
      [Q(
        o,
        {
          placement: "cover-top",
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": r[6] || (r[6] = (i) => e.menuVisible = i)
        },
        {
          menu: ve(() => [(h(!0), T(
            Ve,
            null,
            Ue(e.sizeOption, (i, s) => ke((h(), be(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [Se(
                  ae(i) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
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
              ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
              1
              /* TEXT */
            ), Q(
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
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [Se(
        ae(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Q(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: r[9] || (r[9] = rl((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
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
        class: c(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
      },
      ae(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Zd = ee({
  name: "VarPagination",
  components: {
    VarMenu: Zr,
    VarIcon: Oe,
    VarCell: mn,
    VarInput: Cn
  },
  directives: {
    Ripple: We
  },
  props: g0,
  setup(e) {
    var r = M(!1), n = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(L(e.current) || 1), i = M(L(e.size) || 10), s = M([]), u = A(() => Math.ceil(e.maxPagerCount / 2)), d = A(() => Math.ceil(L(e.total) / L(i.value))), f = A(() => {
      var S = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, L(e.total));
      return [S, E];
    }), v = A(() => e.showTotal ? e.showTotal(L(e.total), f.value) : ""), m = (S, E) => ur(S) ? !1 : E === 1 ? t.value : o.value, y = (S, E) => ur(S) ? "basic" : E === 1 ? "head" : "tail", b = (S, E) => {
      if (!(S === l.value || e.disabled)) {
        if (S === "...") {
          l.value = E === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
        ur(S) && (l.value = S);
      }
    }, g = () => {
      e.disabled || (r.value = !0);
    }, C = (S) => {
      i.value = S, r.value = !1;
      var E = O(l.value);
      a.value = String(E), l.value = E;
    }, O = (S) => S > d.value ? d.value : S < 1 ? 1 : S, $ = (S, E, k) => {
      k.target.blur();
      var I = O(L(E));
      a.value = String(I), l.value = I, S === "quick" && (n.value = "");
    };
    return le([() => e.current, () => e.size], (S) => {
      var [E, k] = S;
      l.value = L(E) || 1, i.value = L(k || 10);
    }), le([l, i, d], (S, E) => {
      var [k, I, p] = S, [P, W] = E, R = [], {
        maxPagerCount: X,
        total: K,
        onChange: U
      } = e, V = Math.ceil(L(K) / L(W)), B = p - (X - u.value) - 1;
      if (a.value = "" + k, p - 2 > X) {
        if (P === void 0 || p !== V)
          for (var N = 2; N < X + 2; N++)
            R.push(N);
        if (k <= X && k < B) {
          R = [];
          for (var _ = 1; _ < X + 1; _++)
            R.push(_ + 1);
          t.value = !0, o.value = !1;
        }
        if (k > X && k < B) {
          R = [];
          for (var H = 1; H < X + 1; H++)
            R.push(k + H - u.value);
          t.value = k === 2 && X === 1, o.value = !1;
        }
        if (k >= B) {
          R = [];
          for (var j = 1; j < X + 1; j++)
            R.push(p - (X - j) - 1);
          t.value = !1, o.value = !0;
        }
        R = [1, "...", ...R, "...", p];
      } else
        for (var J = 1; J <= p; J++)
          R.push(J);
      s.value = R, P != null && p > 0 && w(U, k, I), w(e["onUpdate:current"], k), w(e["onUpdate:size"], I);
    }, {
      immediate: !0
    }), {
      n: y0,
      classes: b0,
      pack: Ze,
      current: l,
      menuVisible: r,
      size: i,
      pageCount: d,
      pageList: s,
      quickJumperValue: n,
      simpleCurrentValue: a,
      totalText: v,
      getMode: y,
      isHideEllipsis: m,
      clickItem: b,
      showMenu: g,
      clickSize: C,
      setPage: $,
      toNumber: L,
      formatElevation: hr
    };
  }
});
Zd.render = C0;
const sa = Zd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var Ek = sa, S0 = {
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
  n: k0,
  classes: $0
} = re("paper");
function T0(e, r) {
  var n = Ne("ripple");
  return ke((h(), T(
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
var Jd = ee({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: S0,
  setup(e) {
    var r = (n) => {
      w(e.onClick, n);
    };
    return {
      n: k0,
      classes: $0,
      formatElevation: hr,
      toSizeUnit: ye,
      handleClick: r
    };
  }
});
Jd.render = T0;
const ua = Jd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var Ik = ua;
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
  onChange: F(),
  onConfirm: F(),
  onCancel: F()
}, Je(Pt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: O0,
  classes: V0
} = re("picker"), os = 300, M0 = 15, is = 200, E0 = 1e3, ls = 0, I0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], B0 = ["onTransitionend"], N0 = ["onClick"];
function D0(e, r) {
  var n = ie("var-button");
  return h(), be(
    rt(e.dynamic ? e.n("$-popup") : e.Transition),
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
        [e.toolbar ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [Y(e.$slots, "cancel", {}, () => [Q(
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
                ae(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
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
            ae(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), Y(e.$slots, "confirm", {}, () => [Q(
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
                ae(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
        )) : x("v-if", !0), D(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
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
                [(h(!0), T(
                  Ve,
                  null,
                  Ue(a.column.texts, (t, o) => (h(), T(
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
                      ae(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    14,
                    N0
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                B0
              )],
              42,
              I0
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
var Qd = ee({
  name: "VarPicker",
  components: {
    VarButton: nr,
    VarPopup: Sr
  },
  inheritAttrs: !1,
  props: P0,
  setup(e) {
    var r = M([]), n = A(() => je(e.optionHeight)), a = A(() => je(e.optionCount)), t = A(() => a.value * n.value / 2 - n.value / 2), o = A(() => a.value * n.value), l = [], i = !1, s = (U, V) => {
      V.scrollEl = U;
    }, u = (U) => {
      w(e["onUpdate:show"], U);
    }, d = (U) => {
      var V = t.value - U.column.texts.length * n.value, B = n.value + t.value;
      U.translate = oo(U.translate, V, B);
    }, f = (U, V) => {
      var B = Math.round((t.value - V) / n.value);
      return xv(B, U.column.texts);
    }, v = (U) => (U.translate = t.value - U.index * n.value, U.translate), m = () => {
      var U = r.value.map((B) => B.column.texts[B.index]), V = r.value.map((B) => B.index);
      return {
        texts: U,
        indexes: V
      };
    }, y = function(U, V) {
      V === void 0 && (V = 0), v(U), U.duration = V;
    }, b = (U, V, B) => {
      U.translate += Math.abs(V / B) / 3e-3 * (V < 0 ? -1 : 1);
    }, g = (U, V) => {
      i || (U.index = V, U.scrolling = !0, y(U, is));
    }, C = (U) => {
      U.touching = !0, U.translate = Po(U.scrollEl);
    }, O = (U, V) => {
      if (V.touching) {
        i = !0, V.scrolling = !1, V.duration = 0;
        var {
          clientY: B
        } = U.touches[0], N = V.prevY !== void 0 ? B - V.prevY : 0;
        V.prevY = B, V.translate += N, d(V);
        var _ = performance.now();
        _ - V.momentumTime > os && (V.momentumTime = _, V.momentumPrevY = V.translate);
      }
    }, $ = (U, V) => {
      V.touching = !1, V.prevY = void 0;
      var B = V.translate - V.momentumPrevY, N = performance.now() - V.momentumTime, _ = Math.abs(B) >= M0 && N <= os;
      _ && b(V, B, N), V.index = f(V, V.translate);
      var H = V.translate, j = v(V);
      V.scrolling = j !== H, y(V, _ ? E0 : is), V.scrolling || W(V), br(() => {
        i = !1;
      });
    }, S = (U) => {
      U.scrolling = !1, W(U);
    }, E = (U) => U.map((V, B) => {
      var N, _ = Pe(V) ? {
        texts: V
      } : V, H = {
        id: ls++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (N = _.initialIndex) != null ? N : 0,
        columnIndex: B,
        duration: 0,
        momentumTime: 0,
        column: _,
        scrollEl: null,
        scrolling: !1
      };
      return y(H), H;
    }), k = (U) => {
      var V = [];
      return I(V, U, 0, !0), V;
    }, I = function(U, V, B, N) {
      if (N === void 0 && (N = !1), Pe(V) && V.length) {
        var _, H = N && (_ = e.cascadeInitialIndexes[U.length]) != null ? _ : 0, j = {
          id: ls++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: H,
          columnIndex: B,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: V.map((J) => J[e.textKey])
          },
          columns: V,
          scrollEl: null,
          scrolling: !1
        };
        U.push(j), y(j), I(U, j.columns[j.index].children, B + 1, N);
      }
    }, p = (U) => {
      r.value.splice(r.value.indexOf(U) + 1), I(r.value, U.columns[U.index].children, U.columnIndex + 1);
    }, P = () => {
      var {
        indexes: U
      } = m();
      return U.every((V, B) => V === l[B]);
    }, W = (U) => {
      var {
        cascade: V,
        onChange: B
      } = e;
      if (!P()) {
        V && p(U);
        var N = r.value.some((j) => j.scrolling);
        if (!N) {
          var {
            texts: _,
            indexes: H
          } = m();
          l = [...H], w(B, _, H);
        }
      }
    }, R = () => {
      if (e.cascade) {
        var U = r.value.find((V) => V.scrolling);
        U && (U.index = f(U, Po(U.scrollEl)), U.scrolling = !1, y(U), p(U));
      } else
        r.value.forEach((V) => {
          V.index = f(V, Po(V.scrollEl)), y(V);
        });
    }, X = () => {
      R();
      var {
        texts: U,
        indexes: V
      } = m();
      l = [...V], w(e.onConfirm, U, V);
    }, K = () => {
      R();
      var {
        texts: U,
        indexes: V
      } = m();
      l = [...V], w(e.onCancel, U, V);
    };
    return le(() => e.columns, (U) => {
      r.value = e.cascade ? k(nl(U)) : E(nl(U));
      var {
        indexes: V
      } = m();
      l = [...V];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: O0,
      classes: V0,
      pack: Ze,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Le,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: C,
      handleTouchmove: O,
      handleTouchend: $,
      handleTransitionend: S,
      confirm: X,
      cancel: K,
      dt: io,
      handleClick: g
    };
  }
});
Qd.render = D0;
const Sn = Qd;
var fr;
function za(e) {
  return new Promise((r) => {
    za.close();
    var n = Pe(e) ? {
      columns: e
    } : e, a = Ae(n);
    a.dynamic = !0, a.teleport = "body", fr = a;
    var {
      unmountInstance: t
    } = tt(Sn, a, {
      onConfirm: (o, l) => {
        w(a.onConfirm, o, l), r({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onCancel: (o, l) => {
        w(a.onCancel, o, l), r({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, fr === a && (fr = null);
      },
      onClose: () => {
        w(a.onClose), r({
          state: "close"
        }), fr === a && (fr = null);
      },
      onClosed: () => {
        w(a.onClosed), t(), fr === a && (fr = null);
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
Sn.install = function(e) {
  e.component(Sn.name, Sn);
};
za.Component = Sn;
za.install = function(e) {
  e.component(Sn.name, Sn);
};
za.close = function() {
  if (fr != null) {
    var e = fr;
    fr = null, De().then(() => {
      e.show = !1;
    });
  }
};
var Bk = Sn;
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
} = re("progress"), Nn = 100, U0 = ["viewBox"], F0 = ["cx", "cy", "r", "stroke-width"], H0 = ["cx", "cy", "r", "stroke-width"];
function Y0(e, r) {
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
      [D(
        "div",
        {
          class: c(e.n("linear-block")),
          style: G({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), T(
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
        )) : x("v-if", !0), D(
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
      ), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Se(
          ae(e.linearProps.roundValue),
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
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), T(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
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
            style: G({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          F0
        )) : x("v-if", !0), D(
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
          H0
        )],
        14,
        U0
      )), e.label ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Se(
          ae(e.circleProps.roundValue),
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
var _d = ee({
  name: "VarProgress",
  props: z0,
  setup(e) {
    var r = A(() => {
      var a = L(e.value), t = a > Nn ? Nn : a, o = a > Nn ? Nn : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), n = A(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + je(a) + " " + je(a), i = L(o) > Nn ? Nn : Math.round(L(o)), s = (je(a) - je(t)) / 2, u = 2 * Math.PI * s, d = i / Nn * u + ", " + u;
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
      multiplySizeUnit: lr,
      linearProps: r,
      circleProps: n
    };
  }
});
_d.render = Y0;
const da = _d;
da.install = function(e) {
  e.component(da.name, da);
};
var Nk = da, j0 = {
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
  classes: W0
} = re("pull-refresh"), vs = 150;
function G0(e, r) {
  var n = ie("var-icon");
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
    [D(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: G(e.controlStyle)
      },
      [Q(
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
var xd = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: j0,
  setup(e) {
    var r = M(0), n = M(null), a = M(null), t = M(0), o = M("-125%"), l = M("arrow-down"), i = M("default"), s = M(!1), u, d, f = 0, v = 0, m = /* @__PURE__ */ function() {
      var p = us(function* (P) {
        if (l.value !== P)
          return l.value = P, new Promise((W) => {
            window.setTimeout(W, vs);
          });
      });
      return function(W) {
        return p.apply(this, arguments);
      };
    }(), y = A(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = A(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: C.value ? e.successBgColor : e.bgColor,
      color: C.value ? e.successColor : e.color
    })), g = A(() => Math.abs(2 * r.value)), C = A(() => i.value === "success"), O = (p) => {
      var P = "classList" in u ? u : document.body;
      P.classList[p](ds() + "--lock");
    }, $ = (p) => {
      if (r.value === 0) {
        var {
          width: P
        } = xe(a.value);
        r.value = -(P + P * 0.25);
      }
      f = p.touches[0].clientY, v = 0, d = kn(p.target);
    }, S = (p) => {
      if (y.value && !(d !== u && mt(d) > 0)) {
        var P = mt(u);
        if (!(P > 0)) {
          var W = P === 0, R = p.touches[0];
          v = R.clientY - f, W && v >= 0 && p.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = p.touches[0].clientY), W && o.value > r.value && O("add");
          var X = (p.touches[0].clientY - t.value) / 2 + r.value;
          o.value = X >= g.value ? g.value : X, m(o.value >= g.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var p = us(function* () {
        y.value && (s.value = !0, o.value >= g.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = g.value * 0.3, w(e["onUpdate:modelValue"], !0), De(() => {
          w(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, L(e.animationDuration))), d = null);
      });
      return function() {
        return p.apply(this, arguments);
      };
    }(), k = () => {
      u = e.target ? Ps(e.target, "PullRefresh") : kn(n.value);
    }, I = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (p) => {
      p === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, I();
      }, L(e.successDuration)));
    }), dr(k), $n(n, "touchmove", S), {
      n: ds,
      classes: W0,
      ICON_TRANSITION: vs,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: $,
      touchMove: S,
      touchEnd: E,
      iconName: l,
      controlStyle: b,
      isSuccess: C
    };
  }
});
xd.render = G0;
const va = xd;
va.install = function(e) {
  e.component(va.name, va);
};
var Dk = va, q0 = {
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
}, ev = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function X0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = or(ev);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function K0() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = tr(ev);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: Z0,
  classes: J0
} = re("radio");
function Q0(e, r) {
  var n = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = Ne("ripple"), l = Ne("hover");
  return h(), T(
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
      [ke((h(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(
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
        }, () => [Q(
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
        )]), Q(
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
    ), Q(
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
var rv = ee({
  name: "VarRadio",
  directives: {
    Ripple: We,
    Hover: Rr
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  inheritAttrs: !1,
  props: q0,
  setup(e) {
    var r = M(!1), n = A(() => r.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = K0(), {
      hovering: l,
      handleHovering: i
    } = Tn(), {
      form: s,
      bindForm: u
    } = Vr(), {
      errorMessage: d,
      validateWithTrigger: f,
      validate: v,
      // expose
      resetValidation: m
    } = Or(), y = (k) => {
      De(() => {
        var {
          validateTrigger: I,
          rules: p,
          modelValue: P
        } = e;
        f(I, k, p, P);
      });
    }, b = (k) => {
      var {
        checkedValue: I,
        onChange: p
      } = e;
      t && r.value === I || (r.value = k, w(e["onUpdate:modelValue"], r.value), w(p, r.value), t == null || t.onToggle(I), y("onChange"));
    }, g = (k) => {
      var {
        disabled: I,
        readonly: p,
        uncheckedValue: P,
        checkedValue: W,
        onClick: R
      } = e;
      s != null && s.disabled.value || I || (w(R, k), !(s != null && s.readonly.value || p) && (a.value = !0, b(n.value ? P : W)));
    }, C = (k) => {
      var {
        checkedValue: I,
        uncheckedValue: p
      } = e;
      r.value = k === I ? I : p;
    }, O = () => {
      w(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, $ = () => v(e.rules, e.modelValue), S = (k) => {
      var {
        uncheckedValue: I,
        checkedValue: p
      } = e, P = ![I, p].includes(k);
      P && (k = n.value ? I : p), b(k);
    };
    le(() => e.modelValue, (k) => {
      r.value = k;
    }, {
      immediate: !0
    });
    var E = {
      sync: C,
      validate: $,
      resetValidation: m,
      reset: O
    };
    return w(o, E), w(u, E), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: Z0,
      classes: J0,
      handleClick: g,
      toggle: S,
      reset: O,
      validate: $,
      resetValidation: m
    };
  }
});
rv.render = Q0;
const fa = rv;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var Ak = fa;
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: e1,
  classes: r1
} = re("radio-group");
function n1(e, r) {
  var n = ie("var-form-details");
  return h(), T(
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
    ), Q(
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
var nv = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: _e
  },
  props: x0,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = X0(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Or(), u = A(() => o.value), d = (g) => {
      De(() => {
        var {
          validateTrigger: C,
          rules: O,
          modelValue: $
        } = e;
        l(C, g, O, $);
      });
    }, f = () => n.forEach((g) => {
      var {
        sync: C
      } = g;
      return C(e.modelValue);
    }), v = (g) => {
      w(e["onUpdate:modelValue"], g), w(e.onChange, g), d("onChange");
    }, m = () => i(e.rules, e.modelValue), y = () => {
      w(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, f), le(() => r.value, f);
    var b = {
      onToggle: v,
      validate: m,
      reset: y,
      resetValidation: s,
      errorMessage: u
    };
    return w(t, b), a(b), {
      errorMessage: o,
      n: e1,
      classes: r1,
      reset: y,
      validate: m,
      resetValidation: s
    };
  }
});
nv.render = n1;
const ca = nv;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var zk = ca, a1 = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: it
} = re("rate"), t1 = ["onClick"];
function o1(e, r) {
  var n = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = Ne("ripple"), l = Ne("hover");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
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
            style: G(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [Q(
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
          ), Q(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          t1
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Q(
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
var av = ee({
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Rr
  },
  props: a1,
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
    } = Tn(), s = M(-1), u = Number(e.modelValue), d = (S) => {
      var {
        count: E,
        gap: k
      } = e;
      return {
        color: v(S).color,
        marginRight: S !== L(E) ? ye(k) : 0
      };
    }, f = (S) => {
      var {
        name: E,
        color: k
      } = v(S);
      return {
        [it("content")]: !0,
        [it("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [it("--error")]: a.value,
        [it("--primary")]: E !== e.emptyIcon && !k
      };
    }, v = (S) => {
      var {
        modelValue: E,
        disabled: k,
        disabledColor: I,
        color: p,
        half: P,
        emptyColor: W,
        icon: R,
        halfIcon: X,
        emptyIcon: K
      } = e, U = p;
      return (k || r != null && r.disabled.value) && (U = I), S <= L(E) ? {
        color: U,
        name: R
      } : P && S <= L(E) + 0.5 ? {
        color: U,
        name: X
      } : {
        color: k || r != null && r.disabled.value ? I : W,
        name: K
      };
    }, m = (S, E) => {
      var {
        half: k,
        clearable: I
      } = e;
      if (k) {
        var {
          offsetWidth: p
        } = E.target;
        E.offsetX <= Math.floor(p / 2) && (S -= 0.5);
      }
      u === S && I && (S = 0), u = S, w(e["onUpdate:modelValue"], S);
    }, y = () => o(e.rules, L(e.modelValue)), b = () => De(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = (S, E) => {
      var {
        readonly: k,
        disabled: I,
        onChange: p
      } = e;
      k || I || r != null && r.disabled.value || r != null && r.readonly.value || (m(S, E), w(p, S), b());
    }, C = (S) => (E) => {
      s.value = S, i.value = E;
    }, O = () => {
      w(e["onUpdate:modelValue"], 0), l();
    }, $ = {
      reset: O,
      validate: y,
      resetValidation: l
    };
    return w(n, $), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: d,
      getClass: f,
      getCurrentState: v,
      handleClick: g,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: C,
      reset: O,
      validate: y,
      resetValidation: l,
      toSizeUnit: ye,
      toNumber: L,
      n: it
    };
  }
});
av.render = o1;
const ma = av;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Lk = ma;
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
}, d1 = /* @__PURE__ */ s1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), v1 = [d1];
function f1(e, r) {
  return h(), T("svg", u1, v1);
}
var tv = ee({});
tv.render = f1;
const c1 = tv;
var m1 = (e) => (La(""), e = e(), Ra(), e), p1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, h1 = /* @__PURE__ */ m1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), g1 = [h1];
function y1(e, r) {
  return h(), T("svg", p1, g1);
}
var ov = ee({});
ov.render = y1;
const b1 = ov;
var w1 = (e) => (La(""), e = e(), Ra(), e), C1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, S1 = /* @__PURE__ */ w1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), k1 = [S1];
function $1(e, r) {
  return h(), T("svg", C1, k1);
}
var iv = ee({});
iv.render = $1;
const T1 = iv;
var {
  n: P1,
  classes: O1
} = re("result");
function V1(e, r) {
  return h(), T(
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
var lv = ee({
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
      toNumber: L
    };
  }
});
lv.render = V1;
const M1 = lv;
var E1 = (e) => (La(""), e = e(), Ra(), e), I1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, B1 = /* @__PURE__ */ E1(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), N1 = [B1];
function D1(e, r) {
  return h(), T("svg", I1, N1);
}
var sv = ee({});
sv.render = D1;
const A1 = sv;
var z1 = (e) => (La(""), e = e(), Ra(), e), L1 = {
  viewBox: "-4 -4 32 32"
}, R1 = /* @__PURE__ */ z1(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), U1 = [R1];
function F1(e, r) {
  return h(), T("svg", L1, U1);
}
var uv = ee({});
uv.render = F1;
const H1 = uv;
var {
  n: Y1,
  classes: j1
} = re("result");
function W1(e, r) {
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
        [(h(), be(
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
    )) : x("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
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
var dv = ee({
  name: "VarResult",
  components: {
    Info: c1,
    Success: M1,
    Warning: T1,
    Error: b1,
    Question: A1,
    Empty: H1
  },
  props: l1,
  setup(e) {
    var r = A(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = A(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: Y1,
      classes: j1,
      toNumber: L,
      toPxNum: je,
      toSizeUnit: ye,
      circleSize: r,
      borderSize: n
    };
  }
});
dv.render = W1;
const pa = dv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Rk = pa;
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
  onClick: F()
}, {
  n: K1,
  classes: Z1
} = re("row");
function J1(e, r) {
  return h(), T(
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
var vv = ee({
  name: "VarRow",
  props: X1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = ip(), t = A(() => {
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
      w(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), n(i), {
      n: K1,
      classes: Z1,
      average: t,
      handleClick: l,
      padStartFlex: Gt
    };
  }
});
vv.render = J1;
const ha = vv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Uk = ha;
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
  onFocus: F(),
  onBlur: F(),
  onClose: F(),
  onChange: F(),
  onClear: F(),
  "onUpdate:modelValue": F()
}, Je(Ki, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: x1,
  classes: ew
} = re("select"), rw = {
  key: 1
};
function nw(e, r) {
  var n = ie("var-chip"), a = ie("var-icon"), t = ie("var-field-decorator"), o = ie("var-menu"), l = ie("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.n()),
      onClick: r[3] || (r[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [Q(
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
        default: ve(() => [Q(
          t,
          $t(to({
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
          Cs({
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
                      Ue(e.labels, (i) => (h(), be(
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
                            ae(i),
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
                    ae(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  64
                  /* STABLE_FRAGMENT */
                )) : (h(), T(
                  "span",
                  rw,
                  ae(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), e.useCustomPlaceholder ? (h(), T(
                "span",
                {
                  key: 0,
                  class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                  style: G({
                    color: e.placeholderColor
                  })
                },
                ae(e.placeholder),
                7
                /* TEXT, CLASS, STYLE */
              )) : x("v-if", !0), Y(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [Q(
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
    ), Q(
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
var fv = ee({
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: Zr,
    VarChip: hn,
    VarFieldDecorator: Nd,
    VarFormDetails: _e
  },
  props: _1,
  setup(e) {
    var r = M(!1), n = A(() => e.multiple), a = A(() => e.focusColor), t = M(""), o = M([]), l = A(() => Hr(e.modelValue)), i = A(() => e.disabled || e.readonly ? "" : "pointer"), s = M(0), {
      bindForm: u,
      form: d
    } = Vr(), {
      length: f,
      options: v,
      bindOptions: m
    } = u0(), {
      errorMessage: y,
      validateWithTrigger: b,
      validate: g,
      // expose
      resetValidation: C
    } = Or(), O = M(null), $ = A(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), S = A(() => {
      var {
        hint: z,
        blurColor: Z,
        focusColor: ne
      } = e;
      if (!z)
        return y.value ? "var(--field-decorator-error-color)" : r.value ? ne || "var(--field-decorator-focus-color)" : Z || "var(--field-decorator-blur-color)";
    }), E = A(() => !e.hint && Hr(e.modelValue) && !r.value), k = () => {
      var {
        multiple: z,
        modelValue: Z
      } = e;
      if (z) {
        var ne = Z;
        o.value = ne.map(P);
      }
      !z && !Hr(Z) && (t.value = P(Z)), !z && Hr(Z) && (t.value = "");
    }, I = (z) => {
      De(() => {
        var {
          validateTrigger: Z,
          rules: ne,
          modelValue: te
        } = e;
        b(Z, z, ne, te);
      });
    }, p = (z) => {
      var {
        value: Z,
        label: ne
      } = z;
      return Z.value != null ? Z.value : ne.value;
    }, P = (z) => {
      var Z, ne, te = v.find((he) => {
        var {
          value: Ce
        } = he;
        return Ce.value === z;
      });
      return te || (te = v.find((he) => {
        var {
          label: Ce
        } = he;
        return Ce.value === z;
      })), (Z = (ne = te) == null ? void 0 : ne.label.value) != null ? Z : "";
    }, W = () => {
      var {
        disabled: z,
        readonly: Z,
        onFocus: ne
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || z || Z || (s.value = je(e.offsetY), r.value = !0, w(ne), I("onFocus"));
    }, R = () => {
      var {
        disabled: z,
        readonly: Z,
        onBlur: ne
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || z || Z || (w(ne), I("onBlur"));
    }, X = (z) => {
      var {
        disabled: Z,
        readonly: ne,
        multiple: te,
        onChange: he
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || Z || ne)) {
        var Ce = te ? v.filter((er) => {
          var {
            selected: oe
          } = er;
          return oe.value;
        }).map(p) : p(z);
        w(e["onUpdate:modelValue"], Ce), w(he, Ce), I("onChange"), !te && (r.value = !1);
      }
    }, K = () => {
      var {
        disabled: z,
        readonly: Z,
        multiple: ne,
        clearable: te,
        onClear: he
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || z || Z || !te)) {
        var Ce = ne ? [] : void 0;
        w(e["onUpdate:modelValue"], Ce), w(he, Ce), I("onClear");
      }
    }, U = (z) => {
      var {
        disabled: Z,
        onClick: ne
      } = e;
      d != null && d.disabled.value || Z || (w(ne, z), I("onClick"));
    }, V = (z) => {
      var {
        disabled: Z,
        readonly: ne,
        modelValue: te,
        onClose: he
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || Z || ne)) {
        var Ce = te, er = v.find((de) => {
          var {
            label: ce
          } = de;
          return ce.value === z;
        }), oe = Ce.filter((de) => {
          var ce;
          return de !== ((ce = er.value.value) != null ? ce : er.label.value);
        });
        w(e["onUpdate:modelValue"], oe), w(he, oe), I("onClose");
      }
    }, B = () => {
      var {
        multiple: z,
        modelValue: Z
      } = e;
      if (z) {
        var ne = Z;
        v.forEach((te) => te.sync(ne.includes(p(te))));
      } else
        v.forEach((te) => te.sync(Z === p(te)));
      k();
    }, N = () => {
      s.value = je(e.offsetY), r.value = !0;
    }, _ = () => {
      r.value = !1;
    }, H = () => g(e.rules, e.modelValue), j = () => {
      w(e["onUpdate:modelValue"], e.multiple ? [] : void 0), C();
    };
    le(() => e.multiple, () => {
      var {
        multiple: z,
        modelValue: Z
      } = e;
      z && !Pe(Z) && Pr("Select", "The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, B, {
      deep: !0
    }), le(() => f.value, B);
    var J = {
      multiple: n,
      focusColor: a,
      computeLabel: k,
      onSelect: X,
      reset: j,
      validate: H,
      resetValidation: C
    };
    return m(J), w(u, J), {
      offsetY: s,
      isFocus: r,
      errorMessage: y,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: O,
      placement: $,
      cursor: i,
      placeholderColor: S,
      useCustomPlaceholder: E,
      n: x1,
      classes: ew,
      handleFocus: W,
      handleBlur: R,
      handleClear: K,
      handleClick: U,
      handleClose: V,
      reset: j,
      validate: H,
      resetValidation: C,
      focus: N,
      blur: _
    };
  }
});
fv.render = nw;
const ga = fv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Fk = ga, aw = {
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
} = re("skeleton");
function iw(e, r) {
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
          )) : x("v-if", !0), (h(!0), T(
            Ve,
            null,
            Ue(e.toNumber(e.rows), (n, a) => (h(), T(
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
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var cv = ee({
  name: "VarSkeleton",
  props: aw,
  setup() {
    return {
      n: tw,
      classes: ow,
      toSizeUnit: ye,
      toNumber: L
    };
  }
});
cv.render = iw;
const ya = cv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Hk = ya;
function lw(e) {
  return ["always", "normal", "never"].includes(e);
}
var ze;
(function(e) {
  e.First = "1", e.Second = "2";
})(ze || (ze = {}));
var sw = {
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
  onChange: F(),
  onStart: F(),
  onEnd: F(),
  "onUpdate:modelValue": F()
}, {
  n: fs,
  classes: uw
} = re("slider"), dw = ["onTouchstart"];
function vw(e, r) {
  var n = ie("var-hover-overlay"), a = ie("var-form-details"), t = Ne("hover");
  return h(), T(
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
      ), (h(!0), T(
        Ve,
        null,
        Ue(e.thumbList, (o) => (h(), T(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: G(e.thumbStyle(o)),
            onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
          },
          [Y(e.$slots, "button", {
            currentValue: o.text
          }, () => [ke(D(
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
            [Q(
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
              ae(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          dw
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Q(
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
var mv = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Hover: Rr
  },
  props: sw,
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
    } = Tn(), {
      hovering: u,
      handleHovering: d
    } = Tn(), f = () => o(e.rules, e.modelValue), v = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => De(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = M(null), b = M(0), g = M(!1), C = Ae({
      [ze.First]: v(),
      [ze.Second]: v()
    }), O = A(() => L(e.max) - L(e.min)), $ = A(() => b.value / O.value * L(e.step)), S = A(() => {
      var {
        modelValue: oe,
        range: de
      } = e, ce = [];
      return de && Pe(oe) ? ce = [{
        value: K(oe[0]),
        enumValue: ze.First,
        text: U(oe[0]),
        hovering: st(i),
        handleHovering: s
      }, {
        value: K(oe[1]),
        enumValue: ze.Second,
        text: U(oe[1]),
        hovering: st(u),
        handleHovering: d
      }] : ur(oe) && (ce = [{
        value: K(oe),
        enumValue: ze.First,
        text: U(oe),
        hovering: st(i),
        handleHovering: s
      }]), ce;
    }), E = A(() => {
      var {
        activeColor: oe,
        range: de,
        modelValue: ce
      } = e, Ie = de && Pe(ce) ? K(Math.min(ce[0], ce[1])) : 0, Ke = de && Pe(ce) ? K(Math.max(ce[0], ce[1])) - Ie : K(ce);
      return p.value ? {
        left: "0px",
        height: Ke + "%",
        bottom: Ie + "%",
        background: oe
      } : {
        top: "0px",
        width: Ke + "%",
        left: Ie + "%",
        background: oe
      };
    }), k = A(() => e.disabled || (n == null ? void 0 : n.disabled.value)), I = A(() => e.readonly || (n == null ? void 0 : n.readonly.value)), p = A(() => e.direction === "vertical"), P, W = (oe) => {
      var de = oe.currentTarget;
      return de ? p.value ? b.value - (oe.clientY - xe(de).top) : oe.clientX - rf(de) : 0;
    }, R = (oe) => {
      var de = p.value ? "bottom" : "left";
      return {
        [de]: oe.value + "%",
        zIndex: C[oe.enumValue].active ? 1 : void 0
      };
    }, X = (oe) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : C[oe].active, K = (oe) => {
      var {
        min: de,
        max: ce
      } = e;
      return oe < L(de) ? 0 : oe > L(ce) ? 100 : (oe - L(de)) / O.value * 100;
    }, U = (oe) => {
      if (!ur(oe))
        return 0;
      var de = oe;
      de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max));
      var ce = parseInt("" + de, 10) === de;
      return ce ? de : L(de.toPrecision(5));
    }, V = (oe, de) => {
      k.value || de.handleHovering(oe);
    }, B = (oe, de) => {
      var ce = [], {
        step: Ie,
        range: Ke,
        modelValue: Ge,
        onChange: He,
        min: Ye
      } = e, se = L(Ie), we = Math.round(oe / $.value), pe = we * se + L(Ye), $e = C[de].percentValue * se + L(Ye);
      if (C[de].percentValue = we, Ke && Pe(Ge) && (ce = de === ze.First ? [pe, Ge[1]] : [Ge[0], pe]), $e !== pe) {
        var Te = Ke ? ce.map((Re) => U(Re)) : U(pe);
        w(He, Te), w(e["onUpdate:modelValue"], Te), m();
      }
    }, N = (oe) => {
      if (!e.range)
        return ze.First;
      var de = C[ze.First].percentValue * $.value, ce = C[ze.Second].percentValue * $.value, Ie = Math.abs(oe - de), Ke = Math.abs(oe - ce);
      return Ie <= Ke ? ze.First : ze.Second;
    }, _ = () => {
      document.addEventListener("touchmove", J, {
        passive: !1
      }), document.addEventListener("touchend", z), document.addEventListener("touchcancel", z);
    }, H = () => {
      document.removeEventListener("touchmove", J), document.removeEventListener("touchend", z), document.removeEventListener("touchcancel", z);
    }, j = (oe, de) => {
      if (b.value || (b.value = y.value.offsetWidth), k.value || (C[de].active = !0), P = de, _(), !(k.value || I.value)) {
        w(e.onStart), g.value = !0;
        var {
          clientX: ce,
          clientY: Ie
        } = oe.touches[0];
        C[de].startPosition = p.value ? Ie : ce;
      }
    }, J = (oe) => {
      if (oe.preventDefault(), !(k.value || I.value || !g.value)) {
        var {
          startPosition: de,
          currentOffset: ce
        } = C[P], {
          clientX: Ie,
          clientY: Ke
        } = oe.touches[0], Ge = (p.value ? de - Ke : Ie - de) + ce;
        Ge <= 0 ? Ge = 0 : Ge >= b.value && (Ge = b.value), B(Ge, P);
      }
    }, z = () => {
      H();
      var {
        range: oe,
        modelValue: de,
        onEnd: ce,
        step: Ie,
        min: Ke
      } = e;
      if (k.value || (C[P].active = !1), !(k.value || I.value)) {
        var Ge = [];
        C[P].currentOffset = C[P].percentValue * $.value;
        var He = C[P].percentValue * L(Ie) + L(Ke);
        oe && Pe(de) && (Ge = P === ze.First ? [He, de[1]] : [de[0], He]), w(ce, oe ? Ge : He), g.value = !1;
      }
    }, Z = (oe) => {
      if (!(k.value || I.value) && !oe.target.closest("." + fs("thumb"))) {
        var de = W(oe), ce = N(de);
        P = ce, B(de, ce), z();
      }
    }, ne = () => {
      var oe = L(e.step);
      return isNaN(oe) ? (ll("Slider", 'type of prop "step" should be Number'), !1) : oe < 0 ? (ll("Slider", '"step" should be > 0'), !1) : !0;
    }, te = () => {
      var {
        range: oe,
        modelValue: de
      } = e;
      return oe && !Pe(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !oe && Pe(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : oe && Pe(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, he = function(oe, de) {
      oe === void 0 && (oe = e.modelValue), de === void 0 && (de = L(e.step));
      var ce = (Ie) => {
        var {
          min: Ke,
          max: Ge
        } = e;
        return Ie < L(Ke) ? 0 : Ie > L(Ge) ? O.value / de : (Ie - L(Ke)) / de;
      };
      e.range && Pe(oe) ? (C[ze.First].percentValue = ce(oe[0]), C[ze.First].currentOffset = C[ze.First].percentValue * $.value, C[ze.Second].percentValue = ce(oe[1]), C[ze.Second].currentOffset = C[ze.Second].percentValue * $.value) : ur(oe) && (C[ze.First].currentOffset = ce(oe) * $.value);
    }, Ce = () => {
      var oe = e.range ? [0, 0] : 0;
      w(e["onUpdate:modelValue"], oe), l();
    }, er = {
      reset: Ce,
      validate: f,
      resetValidation: l
    };
    return w(r, er), le([() => e.modelValue, () => e.step], (oe) => {
      var [de, ce] = oe;
      !ne() || !te() || g.value || he(de, L(ce));
    }), le(b, () => he()), dr(() => {
      !ne() || !te() || (b.value = y.value[p.value ? "offsetHeight" : "offsetWidth"]);
    }), no(() => {
      H();
    }), {
      n: fs,
      classes: uw,
      Thumbs: ze,
      sliderEl: y,
      getFillStyle: E,
      isDisabled: k,
      isVertical: p,
      thumbStyle: R,
      errorMessage: a,
      thumbsProps: C,
      thumbList: S,
      hover: V,
      multiplySizeUnit: lr,
      toNumber: L,
      showLabel: X,
      start: j,
      move: J,
      end: z,
      click: Z
    };
  }
});
mv.render = vw;
const ba = mv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Yk = ba;
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
function fw(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function cw(e) {
  return Qi.includes(e);
}
var pv = {
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
  loadingType: Je(un, "type"),
  loadingSize: Je(un, "size"),
  loadingRadius: Je(un, "radius"),
  loadingColor: Si({}, Je(un, "color"), {
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
  n: mw,
  classes: pw
} = re("snackbar"), hw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function gw(e, r) {
  var n = ie("var-icon"), a = ie("var-loading");
  return ke((h(), T(
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
          ae(e.content),
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
        [e.iconName ? (h(), be(
          n,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (h(), be(
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
        )) : x("v-if", !0), Y(e.$slots, "icon")],
        2
        /* CLASS */
      ), D(
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
  )), [[Jr, e.show]]);
}
var hv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Nr,
    VarIcon: Oe
  },
  props: pv,
  setup(e) {
    var r = M(null), {
      zIndex: n
    } = Ot(() => e.show, 1);
    fo(() => e.show, () => e.lockScroll);
    var a = A(() => e.type === "loading" || e.forbidClick), t = A(() => e.type ? hw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && w(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (l) => {
      l ? (w(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), w(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(r.value), o();
    }), dr(() => {
      e.show && (w(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Qi,
      n: mw,
      classes: pw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
hv.render = gw;
const gv = hv;
var {
  n: yw
} = re("snackbar");
function bw(e, r) {
  var n = ie("var-snackbar-core");
  return h(), be(
    Mn,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [Q(
      Le,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [Q(
          n,
          Be(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: ve(() => [Y(e.$slots, "icon")]),
            action: ve(() => [Y(e.$slots, "action")]),
            default: ve(() => [Y(e.$slots, "default", {}, () => [Se(
              ae(e.content),
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
var yv = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: gv
  },
  props: pv,
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
yv.render = bw;
const wa = yv;
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
function ww(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !St(e);
}
var Qi = ["loading", "success", "warning", "info", "error"], cs = 0, ki = !1, bv, _a = !1, wv = {
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
}, $r = Ae([]), _i = wv, Cw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Io = (e) => () => Tt(e) ? e() : e, Sw = {
  setup() {
    return () => {
      var e = $r.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), _a && (a.position = "top");
        var l = _a ? "relative" : "absolute", i = wt({
          position: l
        }, Vw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, f = {
          default: Io(s),
          icon: Io(u),
          action: Io(d)
        };
        return Q(gv, Be(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (v) => a.show = v
        }), f);
      });
      return Q(Kv, Be(Cw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: kw,
        onAfterLeave: $w
      }), ww(e) ? e : {
        default: () => [e]
      });
    };
  }
}, xr = function(e) {
  var r = Pw(e), n = Ae(wt({}, _i, r));
  n.show = !0, ki || (ki = !0, bv = tt(Sw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: cs++,
    reactiveSnackOptions: n
  };
  if (a === 0 || _a)
    Tw(t);
  else {
    var o = "update-" + cs;
    Ow(n, o);
  }
  return {
    clear() {
      !_a && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
Qi.forEach((e) => {
  xr[e] = (r) => (Oi(r) ? r.type = e : r = {
    content: r,
    type: e
  }, xr(r));
});
xr.install = function(e) {
  e.component(wa.name, wa);
};
xr.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== _a && ($r.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), _a = e);
};
xr.clear = function() {
  $r.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
xr.setDefaultOptions = function(e) {
  _i = e;
};
xr.resetDefaultOptions = function() {
  _i = wv;
};
xr.Component = wa;
function kw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === L(r));
  n && w(n.reactiveSnackOptions.onOpened);
}
function $w(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === L(r));
  n && (n.animationEnd = !0, w(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (w(bv), $r = Ae([]), ki = !1);
}
function Tw(e) {
  $r.push(e);
}
function Pw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function Ow(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = wt({}, n.reactiveSnackOptions, e), n._update = r;
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
var jk = wa;
const $i = xr;
var Cv = (e) => ["mini", "small", "normal", "large"].includes(e), Mw = (e) => Cv(e) || Pe(e) || ur(e) || Fe(e), Ew = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Iw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Bw = {
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
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Nw(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Bo,
  classes: Dw
} = re("space");
const Ca = ee({
  name: "VarSpace",
  props: Bw,
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
      } = e, f = (t = w(n.default)) != null ? t : [], v = Cv(d), [m, y] = a(d, v);
      f = Ds(f);
      var b = f.length - 1, g = f.map((C, O) => {
        var $ = Nw(m, y, {
          direction: u,
          justify: l,
          index: O,
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
      }, [g]);
    };
  }
});
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Wk = Ca, Aw = {
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
}, Sv = Symbol("STEPS_BIND_STEP_KEY");
function zw() {
  var {
    bindChildren: e,
    childProviders: r
  } = or(Sv);
  return {
    step: r,
    bindStep: e
  };
}
function Lw() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = tr(Sv);
  return n || Pr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Rw,
  classes: Uw
} = re("step"), Fw = {
  key: 3
};
function Hw(e, r) {
  var n = ie("var-icon");
  return h(), T(
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
          style: G({
            backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
          }),
          onClick: r[0] || (r[0] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [e.isActive ? (h(), be(
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
        )) : e.isCurrent && e.currentIcon ? (h(), be(
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
        )) : e.inactiveIcon ? (h(), be(
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
          Fw,
          ae(e.index + 1),
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
var kv = ee({
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: Aw,
  setup() {
    var {
      index: e,
      steps: r,
      bindSteps: n
    } = Lw(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = r, s = A(() => a.value === e.value), u = A(() => e.value !== -1 && a.value > e.value), d = {
      index: e
    }, f = () => i(e.value);
    return n(d), {
      n: Rw,
      classes: Uw,
      index: e,
      isActive: u,
      isCurrent: s,
      direction: l,
      activeColor: t,
      inactiveColor: o,
      click: f
    };
  }
});
kv.render = Hw;
const Sa = kv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Gk = Sa;
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
  onClickStep: F()
}, {
  n: Ww
} = re("steps");
function Gw(e, r) {
  return h(), T(
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
var $v = ee({
  name: "VarSteps",
  props: jw,
  setup(e) {
    var r = A(() => e.active), n = A(() => e.activeColor), a = A(() => e.inactiveColor), t = A(() => e.direction), {
      bindStep: o
    } = zw(), l = (s) => {
      w(e.onClickStep, s);
    }, i = {
      active: r,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: Ww
    };
  }
});
$v.render = Gw;
const ka = $v;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var qk = ka, qw = {
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
} = re("style-provider"), Kw = ee({
  name: "VarStyleProvider",
  props: qw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => ws(e.tag, {
      class: Xw(),
      style: Bs(e.styleVars)
    }, w(n.default));
  }
});
const $a = Kw;
var No = [];
function Ct(e) {
  No.forEach((n) => document.documentElement.style.removeProperty(n)), No.length = 0;
  var r = Bs(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), No.push(a);
  });
}
Ct.Component = $a;
$a.install = function(e) {
  e.component($a.name, $a);
};
Ct.install = function(e) {
  e.component($a.name, $a);
};
var Xk = $a, Zw = {
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
  n: Jw,
  classes: Qw
} = re("switch");
function _w(e, r) {
  var n = ie("var-loading"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = Ne("ripple"), l = Ne("hover");
  return ke((h(), T(
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
      ), ke((h(), T(
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
          [e.loading ? (h(), be(
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
        ), Q(
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
    ), Q(
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
var Tv = ee({
  name: "VarSwitch",
  components: {
    VarLoading: Nr,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Rr
  },
  props: Zw,
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
    } = Tn(), u = () => o(e.rules, e.modelValue), d = () => De(() => t(["onChange"], "onChange", e.rules, e.modelValue)), f = A(() => {
      var {
        size: C,
        modelValue: O,
        color: $,
        closeColor: S,
        loadingColor: E,
        activeValue: k
      } = e;
      return {
        handle: {
          width: lr(C),
          height: lr(C),
          backgroundColor: O === k ? $ : S,
          color: E
        },
        ripple: {
          left: O === k ? lr(C, 0.5) : "-" + lr(C, 0.5),
          color: O === k ? $ : S || "#999",
          width: lr(C, 2),
          height: lr(C, 2)
        },
        track: {
          height: lr(C, 0.72),
          width: lr(C, 1.9),
          borderRadius: lr(C, 2 / 3),
          filter: O === k || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === k ? $ : S
        },
        switch: {
          height: lr(C, 1.2),
          width: lr(C, 2)
        }
      };
    }), v = A(() => lr(e.size || 0, 0.4)), m = (C) => {
      var {
        onClick: O,
        onChange: $,
        disabled: S,
        loading: E,
        readonly: k,
        modelValue: I,
        activeValue: p,
        inactiveValue: P,
        "onUpdate:modelValue": W
      } = e;
      if (w(O, C), !(S || E || k || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var R = I === p ? P : p;
        w($, R), w(W, R), d();
      }
    }, y = (C) => {
      e.disabled || n != null && n.disabled.value || s(C);
    }, b = () => {
      w(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, g = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return w(r, g), {
      n: Jw,
      classes: Qw,
      switchActive: m,
      hovering: i,
      hover: y,
      radius: v,
      styleComputed: f,
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly
    };
  }
});
Tv.render = _w;
const Ta = Tv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Kk = Ta, xw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, Pv = Symbol("TABS_BIND_TAB_KEY");
function eC() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = or(Pv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function rC() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = tr(Pv);
  return r || Pr("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Lt,
  classes: nC
} = re("tab");
function aC(e, r) {
  var n = Ne("ripple");
  return ke((h(), T(
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
var Ov = ee({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: xw,
  setup(e) {
    var r = M(null), n = A(() => e.name), a = A(() => e.disabled), t = A(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = rC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: f,
      disabledColor: v,
      itemDirection: m,
      resize: y
    } = l, b = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var g = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), C = () => e.disabled ? v.value : g() ? d.value : f.value, O = () => e.disabled ? Lt("$-tab--disabled") : g() ? Lt("$-tab--active") : Lt("$-tab--inactive"), $ = (S) => {
      var {
        disabled: E,
        name: k,
        onClick: I
      } = e;
      E || (w(I, k ?? o.value, S), s(b));
    };
    return le(() => e.name, y), le(() => e.disabled, y), {
      n: Lt,
      classes: nC,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: f,
      itemDirection: m,
      computeColorStyle: C,
      computeColorClass: O,
      handleClick: $
    };
  }
});
Ov.render = aC;
const Pa = Ov;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Zk = Pa, tC = {
  name: {
    type: [String, Number]
  }
}, {
  n: oC,
  classes: iC
} = re("tab-item");
function lC(e, r) {
  var n = ie("var-swipe-item");
  return h(), be(
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
var Vv = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Xr
  },
  props: tC,
  setup(e) {
    var r = M(!1), n = A(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Hb(), {
      bindLists: o
    } = Yb(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: A(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: oC,
      classes: iC,
      current: r
    };
  }
});
Vv.render = lC;
const Oa = Vv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Jk = Oa, sC = {
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
} = re("table");
function vC(e, r) {
  return h(), T(
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
var Mv = ee({
  name: "VarTable",
  props: sC,
  setup() {
    return {
      toSizeUnit: ye,
      n: uC,
      classes: dC,
      formatElevation: hr
    };
  }
});
Mv.render = vC;
const Va = Mv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Qk = Va;
function ms(e) {
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
  stickyCssMode: Je(jt, "cssMode"),
  stickyZIndex: Je(jt, "zIndex"),
  offsetTop: Je(jt, "offsetTop"),
  onClick: F(),
  onChange: F(),
  "onUpdate:active": F()
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
  n: pC,
  classes: hC
} = re("tabs");
function gC(e, r) {
  return h(), be(
    rt(e.sticky ? e.n("$-sticky") : e.Transition),
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
var Ev = ee({
  name: "VarTabs",
  components: {
    VarSticky: Kr
  },
  inheritAttrs: !1,
  props: mC,
  setup(e) {
    var r = M("0px"), n = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = A(() => e.active), s = A(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = A(() => e.activeColor), d = A(() => e.inactiveColor), f = A(() => e.disabledColor), v = A(() => e.itemDirection), m = M(null), {
      tabList: y,
      bindTabList: b,
      length: g
    } = eC(), C = (R) => {
      var X, K = (X = R.name.value) != null ? X : R.index.value, {
        active: U,
        onChange: V,
        onClick: B
      } = e;
      w(e["onUpdate:active"], K), w(B, K), K !== U && w(V, K);
    }, O = () => y.find((R) => {
      var {
        name: X
      } = R;
      return e.active === X.value;
    }), $ = (R) => y.find((X) => {
      var {
        index: K
      } = X;
      return (R ?? e.active) === K.value;
    }), S = () => {
      if (g.value !== 0) {
        var {
          active: R
        } = e;
        if (ur(R)) {
          var X = oo(R, 0, g.value - 1);
          return w(e["onUpdate:active"], X), $(X);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || y.length >= 5;
    }, k = (R) => {
      var {
        element: X
      } = R, K = X.value;
      K && (e.layoutDirection === "horizontal" ? (r.value = K.offsetWidth + "px", a.value = K.offsetLeft + "px") : (n.value = K.offsetHeight + "px", t.value = K.offsetTop + "px"));
    }, I = (R) => {
      var {
        element: X
      } = R;
      if (o.value) {
        var K = l.value, U = X.value;
        if (e.layoutDirection === "horizontal") {
          var V = U.offsetLeft + U.offsetWidth / 2 - K.offsetWidth / 2;
          pt(K, {
            left: V,
            animation: zo
          });
        } else {
          var B = U.offsetTop + U.offsetHeight / 2 - K.offsetHeight / 2;
          pt(K, {
            top: B,
            animation: zo
          });
        }
      }
    }, p = () => {
      var R = O() || $() || S();
      !R || R.disabled.value || (E(), k(R), I(R));
    }, P = /* @__PURE__ */ function() {
      var R = hs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return R.apply(this, arguments);
      };
    }(), W = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: f,
      itemDirection: v,
      resize: p,
      onTabClick: C
    };
    return b(W), le(() => g.value, /* @__PURE__ */ hs(function* () {
      yield Ar(), p();
    })), le(() => e.active, p), le(() => e.scrollable, p), Vn(p), uo(p), {
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
      n: pC,
      classes: hC,
      resize: p,
      resizeSticky: P,
      formatElevation: hr
    };
  }
});
Ev.render = gC;
const Ma = Ev;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var _k = Ma, yC = {
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
function gs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function bC(e) {
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
  n: wC
} = re("tabs-items");
function CC(e, r) {
  var n = ie("var-swipe");
  return h(), be(
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
var Iv = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: qr
  },
  props: yC,
  setup(e) {
    var r = M(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = Fb(), o = (f) => n.find((v) => {
      var {
        name: m
      } = v;
      return f === m.value;
    }), l = (f) => n.find((v) => {
      var {
        index: m
      } = v;
      return f === m.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var v, m = i(f);
      m && (n.forEach((y) => {
        var {
          setCurrent: b
        } = y;
        return b(!1);
      }), m.setCurrent(!0), (v = r.value) == null || v.to(m.index.value));
    }, u = (f) => {
      var v, m = n.find((b) => {
        var {
          index: g
        } = b;
        return g.value === f;
      }), y = (v = m.name.value) != null ? v : m.index.value;
      w(e["onUpdate:active"], y);
    }, d = () => r.value;
    return a({}), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ bC(function* () {
      yield Ar(), s(e.active);
    })), {
      swipe: r,
      n: wC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Iv.render = CC;
const Ea = Iv;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var xk = Ea;
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
  "--checkbox-unchecked-color": "#fff"
}, VC = {
  "--chip-default-color": "#555"
}, MC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, EC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
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
  "--radio-unchecked-color": "#fff"
}, UC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, FC = {
  "--select-scroller-background": "#303030"
}, HC = {
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
  "--time-picker-clock-item-disable-color": "#aaaaaa"
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
}, rS = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, nS = {
  "--link-default-color": "#fff"
}, aS = {
  "--progress-label-color": "#fff"
};
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
const tS = Ti({
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
}, $C, PC, TC, qC, EC, HC, KC, WC, zC, IC, SC, VC, kC, XC, MC, LC, jC, YC, DC, GC, NC, FC, RC, OC, BC, AC, ZC, JC, QC, _C, UC, xC, eS, rS, nS, aS);
var oS = {
  dark: tS
}, e$ = null;
const Pi = oS;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], sr = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ys = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function iS(e) {
  return ["ampm", "24hr"].includes(e);
}
var lS = {
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
    validator: iS
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
}, Bv = (e, r) => e === "24hr" || r === "am", xi = (e, r, n) => {
  var a = Cr.findIndex((o) => L(o) === L(n)), t = Bv(e, r) ? n : sr[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, cr = (e) => {
  var [r, n, a] = e.split(":");
  return {
    hour: L(r),
    minute: L(n),
    second: L(a)
  };
}, Nv = (e) => {
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
    hourNum: f
  } = xi(t, o, l), v = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: y,
      minute: b
    } = cr(i);
    v = y === f && a > b;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: C
    } = cr(s);
    v = g === f && a < C;
  }
  if (i && s) {
    var {
      hour: O,
      minute: $
    } = cr(i), {
      hour: S,
      minute: E
    } = cr(s);
    v = S === f && a < E || O === f && a > $;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), v || m;
}, Dv = (e) => {
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
    hourStr: f,
    hourNum: v
  } = xi(t, o, l), m = !1, y = !1;
  if (d.includes(f))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: g,
      second: C
    } = cr(s);
    m = b === v && g < i || g === i && a > C;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: $,
      second: S
    } = cr(u);
    m = O === v && $ > i || $ === i && a > S;
  }
  if (s && u) {
    var {
      hour: E,
      minute: k,
      second: I
    } = cr(s), {
      hour: p,
      minute: P,
      second: W
    } = cr(u);
    m = E === v && k < i || p === v && P > i || E === v && k === i && a > I || p === v && P === i && a < W;
  }
  return (r = e.allowedTime) != null && r.seconds && (y = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || y;
}, {
  n: sS,
  classes: uS
} = re("time-picker");
function dS(e, r) {
  return h(), T(
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
    ), (h(!0), T(
      Ve,
      null,
      Ue(e.timeScales, (n, a) => (h(), T(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: G(e.getStyle(a, n, !1))
        },
        ae(n),
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
            style: G(e.getStyle(a, n, !0))
          },
          ae(n),
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
var Av = ee({
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
    } = r, a = M(null), t = M([]), o = M([]), l = A(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = A(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = A(() => e.type === "hour" ? Cr : ys), u = (g, C) => {
      var O;
      g = (O = g) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var $ = e.type === "minute" ? Nv : Dv, S = {
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
      return C && e.type === "minute" && Reflect.deleteProperty(S, "minute"), $(S);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? sr[i.value] : s.value[i.value];
      return s.value === ys ? u() ? "#bdbdbd" : e.color : v(g) ? "#bdbdbd" : e.color;
    }, f = (g, C) => C ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), v = (g) => {
      if (e.type === "hour") {
        if (Bv(e.format, e.ampm))
          return t.value.includes(g);
        var C = Cr.findIndex((O) => O === g);
        return o.value.includes(C);
      }
      return u(g, !0);
    }, m = (g, C, O) => {
      var $ = 2 * Math.PI / 12 * g - Math.PI / 2, S = 50 * (1 + Math.cos($)), E = 50 * (1 + Math.sin($)), k = () => f(g, O) ? v(C) ? {
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
        color: p
      } = k();
      return {
        left: S + "%",
        top: E + "%",
        backgroundColor: I,
        color: p
      };
    }, y = () => {
      var {
        width: g,
        height: C
      } = xe(a.value);
      return {
        width: g,
        height: C
      };
    }, b = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? Cr : sr;
        return Na(g[i.value], 2, "0");
      }
    };
    return le([i, () => e.isInner], (g, C) => {
      var [O, $] = g, [S, E] = C, k = O === S && $ === E;
      if (!(k || e.type !== "hour" || i.value === void 0)) {
        var I = $ ? sr[i.value] : b(), p = e.useSeconds ? ":" + e.time.second : "", P = I + ":" + e.time.minute + p;
        e.preventNextUpdate || n("update", P), n("change-prevent-update");
      }
    }), le(() => e.rad, (g, C) => {
      if (!(e.type === "hour" || g === void 0 || C === void 0)) {
        var O = g / 6 >= 0 ? g / 6 : g / 6 + 60, $ = C / 6 >= 0 ? C / 6 : C / 6 + 60;
        if (O !== $) {
          var S, {
            hourStr: E
          } = xi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = ue().minute(O).format("mm"), I = e.useSeconds ? ":" + e.time.second : "";
            S = E + ":" + k + I;
          }
          if (e.type === "second") {
            var p = ue().second(O).format("ss"), P = e.useSeconds ? ":" + p : "";
            S = E + ":" + e.time.minute + P;
          }
          n("update", S);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [C, O, $] = g;
      if (t.value = [], C && !O) {
        var {
          hour: S
        } = cr(C), E = Cr.filter((N) => L(N) > S), k = sr.filter((N) => L(N) > S);
        t.value = [...E, ...k];
      }
      if (!C && O) {
        var {
          hour: I
        } = cr(O), p = Cr.filter((N) => L(N) < I), P = sr.filter((N) => L(N) < I);
        t.value = [...p, ...P];
      }
      if (C && O) {
        var {
          hour: W
        } = cr(C), {
          hour: R
        } = cr(O), X = Cr.filter((N) => L(N) < R || L(N) > W), K = sr.filter((N) => L(N) < R || L(N) > W);
        t.value = [...X, ...K];
      }
      if ($ != null && $.hours) {
        var {
          hours: U
        } = $, V = Cr.filter((N) => !U(L(N))), B = sr.filter((N) => !U(L(N)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...V, ...B])];
      }
      o.value = t.value.map((N) => sr.findIndex((_) => N === _)).filter((N) => N >= 0);
    }, {
      immediate: !0
    }), {
      n: sS,
      classes: uS,
      hours24: sr,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: f,
      isDisable: v,
      getSize: y,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
Av.render = dS;
const vS = Av;
var {
  n: fS,
  classes: cS
} = re("time-picker"), mS = (e) => (La(""), e = e(), Ra(), e), pS = /* @__PURE__ */ mS(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), hS = {
  key: 0
};
function gS(e, r) {
  var n = ie("clock");
  return h(), T(
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
          ae(e.time.hour),
          3
          /* TEXT, CLASS */
        ), pS, D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), T("span", hS, ":")) : x("v-if", !0), e.useSeconds ? (h(), T(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          ae(e.time.second),
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
        [Q(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(h(), be(
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
var zv = ee({
  name: "VarTimePicker",
  components: {
    Clock: vS
  },
  props: lS,
  setup(e) {
    var r = M(null), n = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), f = M(0), v = M("hour"), m = M("am"), y = M(!1), b = M(!1), g = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), C = Ae({
      x: 0,
      y: 0
    }), O = Ae({
      x: [],
      y: []
    }), $ = A(() => v.value === "hour" ? u.value : v.value === "minute" ? d.value : f.value), S = (j) => {
      w(e["onUpdate:modelValue"], j), w(e.onChange, j);
    }, E = (j) => j * 57.29577951308232, k = (j) => {
      i.value = !1, b.value = !1, v.value = j;
    }, I = (j) => {
      var {
        disableHour: J
      } = a.value, z = Cr.findIndex((te) => L(te) === L(g.value.hour)), Z = j === "am" ? Cr : sr, ne = [...Z.slice(z), ...Z.slice(0, z)];
      return ne.find((te, he) => (o.value = he !== 0, !J.includes(te)));
    }, p = (j) => {
      if (!e.readonly) {
        m.value = j;
        var J = I(j);
        if (J) {
          var z = e.useSeconds ? ":" + g.value.second : "", Z = Na(J, 2, "0") + ":" + g.value.minute + z;
          S(Z);
        }
      }
    }, P = (j, J) => {
      var z = j >= O.x[0] && j <= O.x[1], Z = J >= O.y[0] && J <= O.y[1];
      return z && Z;
    }, W = (j) => {
      var J = e.format === "24hr" ? "HH" : "hh", {
        hour: z,
        minute: Z,
        second: ne
      } = cr(j);
      return {
        hour: ue().hour(z).format(J),
        minute: ue().minute(Z).format("mm"),
        second: ue().second(ne).format("ss")
      };
    }, R = (j) => {
      var J = j / 30;
      return J >= 0 ? J : J + 12;
    }, X = () => {
      var {
        width: j,
        height: J
      } = a.value.getSize(), z = C.x - j / 2 - 8, Z = C.x + j / 2 + 8, ne = C.y - J / 2 - 8, te = C.y + J / 2 + 8;
      return {
        rangeXMin: z,
        rangeXMax: Z,
        rangeYMin: ne,
        rangeYMax: te
      };
    }, K = (j, J, z) => {
      var {
        disableHour: Z
      } = a.value;
      l.value = P(j, J);
      var ne = Math.round(z / 30) * 30 + 90, te = R(ne), he = t.value ? Cr[te] : sr[te];
      if (Z.includes(he) || (t.value = e.format === "24hr" ? P(j, J) : !1), t.value === l.value) {
        var Ce = t.value || m.value === "pm" ? sr[te] : Cr[te];
        y.value = Z.includes(Ce), !y.value && (u.value = ne, i.value = !0);
      }
    }, U = (j) => {
      var {
        disableHour: J
      } = a.value, z = Math.round(j / 6) * 6 + 90, Z = z / 6 >= 0 ? z / 6 : z / 6 + 60, ne = {
        time: Z,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      b.value = Nv(ne), !b.value && (d.value = z, s.value = !0);
    }, V = (j) => {
      var {
        disableHour: J
      } = a.value, z = Math.round(j / 6) * 6 + 90, Z = z / 6 >= 0 ? z / 6 : z / 6 + 60, ne = {
        time: Z,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      Dv(ne) || (f.value = z);
    }, B = () => {
      var {
        left: j,
        top: J,
        width: z,
        height: Z
      } = xe(r.value);
      if (C.x = j + z / 2, C.y = J + Z / 2, v.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ne,
          rangeXMax: te,
          rangeYMin: he,
          rangeYMax: Ce
        } = X();
        O.x = [ne, te], O.y = [he, Ce];
      }
    }, N = (j) => {
      if (j.preventDefault(), !e.readonly) {
        B();
        var {
          clientX: J,
          clientY: z
        } = j.touches[0], Z = J - C.x, ne = z - C.y, te = Math.round(E(Math.atan2(ne, Z)));
        v.value === "hour" ? K(J, z, te) : v.value === "minute" ? U(te) : V(te);
      }
    }, _ = () => {
      if (!e.readonly) {
        if (v.value === "hour" && i.value) {
          v.value = "minute";
          return;
        }
        v.value === "minute" && e.useSeconds && s.value && (v.value = "second");
      }
    }, H = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (j) => {
      if (j) {
        var {
          hour: J,
          minute: z,
          second: Z
        } = cr(j), ne = ue().hour(J).format("hh"), te = ue().hour(J).format("HH"), he = ue().minute(z).format("mm"), Ce = ue().second(Z).format("ss");
        u.value = (ne === "12" ? 0 : L(ne)) * 30, d.value = L(he) * 6, f.value = L(Ce) * 6, g.value = W(j), e.format !== "24hr" && (m.value = Na("" + J, 2, "0") === te && sr.includes(te) ? "pm" : "am"), t.value = e.format === "24hr" && sr.includes(te);
      }
    }, {
      immediate: !0
    }), {
      n: fS,
      classes: cS,
      getRad: $,
      time: g,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: v,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: N,
      checkPanel: k,
      checkAmpm: p,
      end: _,
      update: S,
      changePreventUpdate: H,
      formatElevation: hr
    };
  }
});
zv.render = gS;
const Ia = zv;
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
var r$ = Ia, yS = {
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
function bs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Do(e) {
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
  n: bS,
  classes: wS
} = re("uploader"), CS = 0, SS = ["onClick"], kS = ["onClick"], $S = ["src", "alt"], TS = ["multiple", "accept", "capture", "disabled"], PS = ["src"];
function OS(e, r) {
  var n = ie("var-icon"), a = ie("var-hover-overlay"), t = ie("var-form-details"), o = ie("var-popup"), l = Ne("ripple"), i = Ne("hover");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
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
          [D(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ae(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), T(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Tr((u) => e.handleRemove(s), ["stop"])
            },
            [Q(
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
            kS
          )) : x("v-if", !0), s.cover ? (h(), T(
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
            $S
          )) : x("v-if", !0), D(
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
          SS
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
          TS
        ), Y(e.$slots, "default", {}, () => [Q(
          n,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), Q(
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
    ), Q(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), Q(
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
            PS
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
var Lv = ee({
  name: "VarUploader",
  directives: {
    Ripple: We,
    Hover: Rr
  },
  components: {
    VarIcon: Oe,
    VarPopup: Sr,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  props: yS,
  setup(e) {
    var r = M(null), n = M(!1), a = M(null), t = A(() => {
      var {
        maxlength: N,
        modelValue: {
          length: _
        }
      } = e;
      return ur(N) ? _ + " / " + N : "";
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
      hovering: f,
      handleHovering: v
    } = Tn(), m = A(() => {
      var {
        modelValue: N,
        hideList: _
      } = e;
      return _ ? [] : N;
    }), y = (N) => {
      var {
        disabled: _,
        readonly: H,
        previewed: j
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || _ || H || !j)) {
        var {
          url: J
        } = N;
        if (Fe(J) && tl(J)) {
          Lr(J);
          return;
        }
        Fe(J) && ol(J) && (a.value = N, n.value = !0);
      }
    }, b = (N) => ({
      id: CS++,
      url: "",
      cover: "",
      name: N.name,
      file: N,
      progress: 0
    }), g = (N) => {
      var _ = N.target, {
        files: H
      } = _;
      return Array.from(H);
    }, C = (N) => new Promise((_) => {
      if (!N.file.type.startsWith("image")) {
        _(N);
        return;
      }
      var H = new FileReader();
      H.onload = () => {
        var j = H.result;
        N.cover = j, N.url = j, _(N);
      }, H.readAsDataURL(N.file);
    }), O = (N) => N.map(C), $ = (N) => {
      var {
        onBeforeRead: _
      } = e;
      return N.map((H) => new Promise((j) => {
        _ || j({
          valid: !0,
          varFile: H
        });
        var J = Rt(w(_, Ae(H)));
        Promise.all(J).then((z) => {
          j({
            valid: z.every(Boolean),
            varFile: H
          });
        });
      }));
    }, S = /* @__PURE__ */ function() {
      var N = Do(function* (_) {
        var {
          maxsize: H,
          maxlength: j,
          modelValue: J,
          onOversize: z,
          onAfterRead: Z,
          onBeforeFilter: ne,
          readonly: te,
          disabled: he
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || he || te)) {
          var Ce = (He) => He.filter((Ye) => Ye.file.size > L(H) ? (w(z, Ae(Ye)), !1) : !0), er = (He) => {
            var Ye = Math.min(He.length, L(j) - J.length);
            return He.slice(0, Ye);
          }, oe = /* @__PURE__ */ function() {
            var He = Do(function* (Ye) {
              if (!ne)
                return Ye;
              var se = Rt(ne);
              for (var we of se)
                Ye = yield we(Ye);
              return Ye;
            });
            return function(se) {
              return He.apply(this, arguments);
            };
          }(), de = g(_), ce = de.map(b);
          ce = yield oe(ce), ce = H != null ? Ce(ce) : ce, ce = j != null ? er(ce) : ce;
          var Ie = yield Promise.all(O(ce)), Ke = yield Promise.all($(Ie)), Ge = Ke.filter((He) => {
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
          w(e["onUpdate:modelValue"], [...J, ...Ge]), _.target.value = "", Ge.forEach((He) => w(Z, Ae(He)));
        }
      });
      return function(H) {
        return N.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var N = Do(function* (_) {
        var {
          disabled: H,
          readonly: j,
          modelValue: J,
          onBeforeRemove: z,
          onRemove: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || j)) {
          if (z) {
            var ne = Rt(w(z, Ae(_)));
            if ((yield Promise.all(ne)).some((he) => !he))
              return;
          }
          var te = J.filter((he) => he !== _);
          w(Z, Ae(_)), X("onRemove"), w(e["onUpdate:modelValue"], te);
        }
      });
      return function(H) {
        return N.apply(this, arguments);
      };
    }(), k = () => e.modelValue.filter((N) => N.state === "success"), I = () => e.modelValue.filter((N) => N.state === "error"), p = () => e.modelValue.filter((N) => N.state === "loading"), P = () => {
      r.value.click();
    }, W = () => {
      a.value = null, n.value = !1, Lr.close();
    }, R = {
      getSuccess: k,
      getError: I,
      getLoading: p
    }, X = (N) => {
      De(() => {
        var {
          validateTrigger: _,
          rules: H,
          modelValue: j
        } = e;
        s(_, N, H, j, R);
      });
    }, K = !1, U = () => u(e.rules, e.modelValue, R), V = () => {
      K = !0, w(e["onUpdate:modelValue"], []), d();
    }, B = {
      validate: U,
      resetValidation: d,
      reset: V
    };
    return w(l, B), le(() => e.modelValue, () => {
      !K && X("onChange"), K = !1;
    }, {
      deep: !0
    }), {
      n: bS,
      classes: wS,
      formatElevation: hr,
      input: r,
      files: m,
      showPreview: n,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      hovering: f,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      handleHovering: v,
      isHTMLSupportVideo: ol,
      isHTMLSupportImage: tl,
      preview: y,
      handleChange: S,
      handleRemove: E,
      getSuccess: k,
      getError: I,
      getLoading: p,
      validate: U,
      resetValidation: d,
      reset: V,
      chooseFile: P,
      closePreview: W,
      toSizeUnit: ye
    };
  }
});
Lv.render = OS;
const Ba = Lv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var n$ = Ba;
const VS = "2.11.6";
function MS(e) {
  Qr.install && e.use(Qr), Dn.install && e.use(Dn), An.install && e.use(An), zn.install && e.use(zn), Ln.install && e.use(Ln), cn.install && e.use(cn), Rn.install && e.use(Rn), Un.install && e.use(Un), Fn.install && e.use(Fn), Hn.install && e.use(Hn), nr.install && e.use(nr), Yn.install && e.use(Yn), jn.install && e.use(jn), mn.install && e.use(mn), pn.install && e.use(pn), Wn.install && e.use(Wn), hn.install && e.use(hn), Gn.install && e.use(Gn), qn.install && e.use(qn), Xn.install && e.use(Xn), yr.install && e.use(yr), Kn.install && e.use(Kn), Zn.install && e.use(Zn), Qn.install && e.use(Qn), _r.install && e.use(_r), _n.install && e.use(_n), xn.install && e.use(xn), ea.install && e.use(ea), Gr.install && e.use(Gr), _e.install && e.use(_e), Rr.install && e.use(Rr), mr.install && e.use(mr), Oe.install && e.use(Oe), ra.install && e.use(ra), Lr.install && e.use(Lr), na.install && e.use(na), aa.install && e.use(aa), Cn.install && e.use(Cn), ht.install && e.use(ht), ta.install && e.use(ta), oa.install && e.use(oa), Nr.install && e.use(Nr), bi.install && e.use(bi), jo.install && e.use(jo), Zr.install && e.use(Zr), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), za.install && e.use(za), Sr.install && e.use(Sr), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), We.install && e.use(We), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), $i.install && e.use($i), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), Kr.install && e.use(Kr), Ct.install && e.use(Ct), qr.install && e.use(qr), Xr.install && e.use(Xr), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Va.install && e.use(Va), Ma.install && e.use(Ma), Ea.install && e.use(Ea), Pi.install && e.use(Pi), Ia.install && e.use(Ia), bn.install && e.use(bn), Ba.install && e.use(Ba);
}
const a$ = {
  version: VS,
  install: MS,
  ActionSheet: Qr,
  AppBar: Dn,
  Avatar: An,
  AvatarGroup: zn,
  BackTop: Ln,
  Badge: cn,
  BottomNavigation: Rn,
  BottomNavigationItem: Un,
  Breadcrumb: Fn,
  Breadcrumbs: Hn,
  Button: nr,
  ButtonGroup: Yn,
  Card: jn,
  Cell: mn,
  Checkbox: pn,
  CheckboxGroup: Wn,
  Chip: hn,
  Col: Gn,
  Collapse: qn,
  CollapseItem: Xn,
  Context: yr,
  Countdown: Kn,
  Counter: Zn,
  DatePicker: Qn,
  Dialog: _r,
  Divider: _n,
  Ellipsis: xn,
  Fab: ea,
  Form: Gr,
  FormDetails: _e,
  Hover: Rr,
  HoverOverlay: mr,
  Icon: Oe,
  Image: ra,
  ImagePreview: Lr,
  IndexAnchor: na,
  IndexBar: aa,
  Input: Cn,
  Lazy: ht,
  Link: ta,
  List: oa,
  Loading: Nr,
  LoadingBar: bi,
  Locale: jo,
  Menu: Zr,
  Option: ia,
  Overlay: la,
  Pagination: sa,
  Paper: ua,
  Picker: za,
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
  Snackbar: $i,
  Space: Ca,
  Step: Sa,
  Steps: ka,
  Sticky: Kr,
  StyleProvider: Ct,
  Swipe: qr,
  SwipeItem: Xr,
  Switch: Ta,
  Tab: Pa,
  TabItem: Oa,
  Table: Va,
  Tabs: Ma,
  TabsItems: Ea,
  Themes: Pi,
  TimePicker: Ia,
  Tooltip: bn,
  Uploader: Ba
};
export {
  Qr as ActionSheet,
  Dn as AppBar,
  An as Avatar,
  zn as AvatarGroup,
  Ln as BackTop,
  cn as Badge,
  Rn as BottomNavigation,
  Un as BottomNavigationItem,
  Fn as Breadcrumb,
  Hn as Breadcrumbs,
  nr as Button,
  Yn as ButtonGroup,
  jn as Card,
  mn as Cell,
  pn as Checkbox,
  Wn as CheckboxGroup,
  hn as Chip,
  Gn as Col,
  qn as Collapse,
  Xn as CollapseItem,
  yr as Context,
  Kn as Countdown,
  Zn as Counter,
  Qn as DatePicker,
  _r as Dialog,
  _n as Divider,
  xn as Ellipsis,
  ea as Fab,
  Gr as Form,
  _e as FormDetails,
  Rr as Hover,
  mr as HoverOverlay,
  Oe as Icon,
  ra as Image,
  Lr as ImagePreview,
  na as IndexAnchor,
  aa as IndexBar,
  Cn as Input,
  ht as Lazy,
  ta as Link,
  oa as List,
  Nr as Loading,
  bi as LoadingBar,
  jo as Locale,
  Zr as Menu,
  ia as Option,
  la as Overlay,
  qo as PIXEL,
  sa as Pagination,
  ua as Paper,
  za as Picker,
  Sr as Popup,
  da as Progress,
  va as PullRefresh,
  fa as Radio,
  ca as RadioGroup,
  ma as Rate,
  pa as Result,
  We as Ripple,
  ha as Row,
  Qi as SNACKBAR_TYPE,
  ga as Select,
  ya as Skeleton,
  ba as Slider,
  $i as Snackbar,
  Ca as Space,
  Sa as Step,
  ka as Steps,
  Kr as Sticky,
  Ct as StyleProvider,
  qr as Swipe,
  Xr as SwipeItem,
  Ta as Switch,
  Pa as Tab,
  Oa as TabItem,
  Va as Table,
  Ma as Tabs,
  Ea as TabsItems,
  Pi as Themes,
  Ia as TimePicker,
  bn as Tooltip,
  Ba as Uploader,
  zS as _ActionSheetComponent,
  LS as _AppBarComponent,
  US as _AvatarComponent,
  FS as _AvatarGroupComponent,
  GS as _BackTopComponent,
  qS as _BadgeComponent,
  XS as _BottomNavigationComponent,
  KS as _BottomNavigationItemComponent,
  ZS as _BreadcrumbComponent,
  JS as _BreadcrumbsComponent,
  WS as _ButtonComponent,
  QS as _ButtonGroupComponent,
  _S as _CardComponent,
  xS as _CellComponent,
  rk as _CheckboxComponent,
  nk as _CheckboxGroupComponent,
  ak as _ChipComponent,
  tk as _ColComponent,
  ok as _CollapseComponent,
  ik as _CollapseItemComponent,
  IS as _ContextComponent,
  lk as _CountdownComponent,
  sk as _CounterComponent,
  uk as _DatePickerComponent,
  dk as _DialogComponent,
  vk as _DividerComponent,
  ck as _EllipsisComponent,
  mk as _FabComponent,
  pk as _FormComponent,
  ek as _FormDetailsComponent,
  jS as _HoverComponent,
  YS as _HoverOverlayComponent,
  DS as _IconComponent,
  hk as _ImageComponent,
  bk as _ImagePreviewComponent,
  Ck as _IndexAnchorComponent,
  Sk as _IndexBarComponent,
  kk as _InputComponent,
  RS as _LazyComponent,
  $k as _LinkComponent,
  Tk as _ListComponent,
  Pk as _LoadingBarComponent,
  HS as _LoadingComponent,
  AS as _LocaleComponent,
  Ok as _MenuComponent,
  Vk as _OptionComponent,
  Mk as _OverlayComponent,
  Ek as _PaginationComponent,
  Ik as _PaperComponent,
  Bk as _PickerComponent,
  NS as _PopupComponent,
  Nk as _ProgressComponent,
  Dk as _PullRefreshComponent,
  Ak as _RadioComponent,
  zk as _RadioGroupComponent,
  Lk as _RateComponent,
  Rk as _ResultComponent,
  BS as _RippleComponent,
  Uk as _RowComponent,
  Fk as _SelectComponent,
  Hk as _SkeletonComponent,
  Yk as _SliderComponent,
  jk as _SnackbarComponent,
  Wk as _SpaceComponent,
  Gk as _StepComponent,
  qk as _StepsComponent,
  wk as _StickyComponent,
  Xk as _StyleProviderComponent,
  gk as _SwipeComponent,
  yk as _SwipeItemComponent,
  Kk as _SwitchComponent,
  Zk as _TabComponent,
  Jk as _TabItemComponent,
  Qk as _TableComponent,
  _k as _TabsComponent,
  xk as _TabsItemsComponent,
  e$ as _ThemesComponent,
  r$ as _TimePickerComponent,
  fk as _TooltipComponent,
  n$ as _UploaderComponent,
  Ef as actionSheetProps,
  Ni as add,
  Lf as appBarProps,
  sc as avatarGroupProps,
  nc as avatarProps,
  Uc as backTopProps,
  Gc as badgeProps,
  rm as bottomNavigationItemProps,
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
  a$ as default,
  qe as defaultLazyOptions,
  xh as dialogProps,
  tg as dividerProps,
  Ws as enUS,
  Dm as formDetailsProps,
  Iy as formProps,
  Ys as iconProps,
  Zs as imageCache,
  _y as imagePreviewProps,
  zy as imageProps,
  vb as indexAnchorProps,
  pb as indexBarProps,
  Pb as inputProps,
  MS as install,
  Ab as linkProps,
  Ub as listProps,
  Kb as loadingBarProps,
  un as loadingProps,
  o0 as menuProps,
  qs as merge,
  v0 as optionProps,
  p0 as overlayProps,
  Ze as pack,
  Gs as packs,
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
  pv as snackbarProps,
  Bw as spaceProps,
  Aw as stepProps,
  jw as stepsProps,
  jt as stickyProps,
  qw as styleProviderProps,
  $d as swipeProps,
  Zw as switchProps,
  tC as tabItemProps,
  xw as tabProps,
  sC as tableProps,
  yC as tabsItemsProps,
  mC as tabsProps,
  lS as timePickerProps,
  hy as tooltipProps,
  yS as uploaderProps,
  Di as use,
  Tn as useHoverOverlay,
  Bi as useLocale,
  VS as version,
  Ii as zhCN
};
