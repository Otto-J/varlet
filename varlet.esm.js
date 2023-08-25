import { reactive as Ye, onMounted as St, nextTick as ze, onActivated as pn, isRef as Gv, watch as de, onBeforeUnmount as so, onDeactivated as xn, unref as ua, onUnmounted as kt, inject as qv, getCurrentInstance as ea, computed as L, provide as Xv, isVNode as $t, ref as $, Comment as Kv, Fragment as Me, createApp as Zv, h as Ps, onBeforeMount as Jv, defineComponent as ne, createVNode as _, Teleport as Jr, Transition as Fe, withDirectives as Te, vShow as Rr, mergeProps as De, openBlock as p, createBlock as Ce, resolveDynamicComponent as ra, normalizeClass as c, normalizeStyle as q, resolveComponent as se, resolveDirective as Ae, withCtx as me, createElementVNode as E, renderSlot as j, toDisplayString as le, createElementBlock as T, renderList as We, createCommentVNode as ee, onUpdated as Tt, createTextVNode as $e, pushScopeId as gn, popScopeId as bn, withModifiers as Tr, normalizeProps as Ot, guardReactiveProps as uo, vModelText as Qv, createSlots as Jt, withKeys as sl, toRaw as ul, TransitionGroup as _v } from "vue";
var Vs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, HS = Ye(Vs);
const br = Ye(Vs), Xe = (e) => typeof e == "string", Ei = (e) => typeof e == "boolean", dr = (e) => typeof e == "number", Ni = (e) => Object.prototype.toString.call(e) === "[object Object]", xv = (e) => typeof e == "object" && e !== null, na = (e) => typeof e == "function", Ve = (e) => Array.isArray(e), ef = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Di = (e) => e === window, R = (e) => e == null ? 0 : Xe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ei(e) ? Number(e) : e, Qt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, Ai = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, aa = () => typeof window < "u", dl = (e) => [...new Set(e)], Is = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), rf = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), nf = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Wt = (e) => Ve(e) ? e : [e], dn = (e, r, n) => Math.min(n, Math.max(r, e)), af = (e, r) => dn(e, 0, r.length - 1);
var vl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), fl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), tf = (e) => {
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
      this.has(n) && Qt(this.cache, n);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Yo = (e) => e, cl = (e) => Math.pow(e, 3), Ms = (e) => e < 0.5 ? cl(e * 2) / 2 : 1 - cl((1 - e) * 2) / 2, vo = (e, r) => e ?? r, Bs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, kn = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Or(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function ml(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
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
function En(e) {
  return window.getComputedStyle(e);
}
function Qe(e) {
  if (Di(e)) {
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
    return Ho({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function of(e) {
  var {
    left: r
  } = Qe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function hl(e) {
  var {
    top: r
  } = Qe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pa(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function zi(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function lf(e) {
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
  } = En(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function vn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = En(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function sf(e) {
  for (var r = [], n = e; !Di(n); )
    n = vn(n), r.push(n);
  return r;
}
function Es(e, r) {
  if (Xe(e)) {
    var n = document.querySelector(e);
    return n || Or(r, "target element cannot found"), n;
  }
  if (xv(e))
    return e;
  Or(r, 'type of prop "target" should be a selector or an element object');
}
function uf() {
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
var Ns = (e) => Xe(e) && e.endsWith("rem"), df = (e) => Xe(e) && e.endsWith("em") && !e.endsWith("rem"), vf = (e) => Xe(e) && e.endsWith("px") || dr(e), ff = (e) => Xe(e) && e.endsWith("%"), Ds = (e) => Xe(e) && e.endsWith("vw"), As = (e) => Xe(e) && e.endsWith("vh"), zs = (e) => Xe(e) && e.endsWith("vmin"), Ls = (e) => Xe(e) && e.endsWith("vmax"), cf = (e) => Xe(e) && e.startsWith("calc("), mf = (e) => Xe(e) && e.startsWith("var("), Re = (e) => {
  if (dr(e))
    return e;
  if (vf(e))
    return +e.replace("px", "");
  if (!aa())
    return 0;
  var {
    vw: r,
    vh: n,
    vMin: a,
    vMax: t
  } = uf();
  if (Ds(e))
    return +e.replace("vw", "") * r / 100;
  if (As(e))
    return +e.replace("vh", "") * n / 100;
  if (zs(e))
    return +e.replace("vmin", "") * a / 100;
  if (Ls(e))
    return +e.replace("vmax", "") * t / 100;
  if (Ns(e)) {
    var o = +e.replace("rem", ""), l = En(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return Xe(e) ? R(e) : 0;
}, we = (e) => {
  if (e != null)
    return ff(e) || Ds(e) || As(e) || df(e) || Ns(e) || cf(e) || mf(e) || zs(e) || Ls(e) ? e : Re(e) + "px";
}, sr = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = we(e), a = n.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function yr(e) {
  var r = Bs();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function pl(e) {
  var r = Bs();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function fo(e) {
  yr(() => {
    yr(e);
  });
}
function Dr() {
  return new Promise((e) => {
    yr(() => {
      yr(e);
    });
  });
}
function hf() {
  return new Promise((e) => {
    yr(e);
  });
}
function ga(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = pa(e), s = zi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (n - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), yr(d);
      } else
        e.scrollTo(a, n), u();
    };
    yr(d);
  });
}
function Rs(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + rf(a);
    return r[o] = t, r;
  }, {});
}
function pf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function _t(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function tr(e) {
  let r = !1;
  St(() => {
    e(), ze(() => {
      r = !0;
    });
  }), pn(() => {
    r && e();
  });
}
function fn(e, r, n, a = {}) {
  if (!aa())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => na(m) ? m() : ua(m), u = (m) => {
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
  let v;
  Gv(e) && (v = de(() => e.value, (m, y) => {
    d(y), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return tr(() => {
    u(e);
  }), so(() => {
    d(e);
  }), xn(() => {
    d(e);
  }), f;
}
function Us(e, r, n) {
  if (!aa())
    return;
  fn(document, r, (t) => {
    const o = na(e) ? e() : ua(e);
    o && !o.contains(t.target) && n(t);
  });
}
function co(e) {
  kt(() => {
    e();
  }), xn(() => {
    e();
  });
}
var gf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function bf(e) {
  const r = ea();
  return e in r.provides;
}
function or(e) {
  if (!bf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = qv(e), { childInstances: n, collect: a, clear: t } = r, o = gf(r, ["childInstances", "collect", "clear"]), l = ea();
  return {
    index: L(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      St(() => {
        ze().then(() => {
          a(l, u);
        });
      }), so(() => {
        ze().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function yf(e) {
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
function ir(e) {
  const r = ea(), n = Ye([]), a = [], t = L(() => n.length), o = () => {
    const u = yf(r.subTree);
    n.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    n.push(u), a.push(d), o();
  }, i = (u, d) => {
    Qt(n, u), Qt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      Xv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function Pt(e) {
  fn(() => window, "resize", e, { passive: !0 }), fn(() => window, "orientationchange", e, { passive: !0 });
}
function wf(e, r) {
  const n = $(!1);
  return de(e, (a) => {
    r === a && (n.value = !0);
  }, { immediate: !0 }), n;
}
function Cf(e, r) {
  if (e > r)
    return "horizontal";
  if (r > e)
    return "vertical";
}
function Li() {
  const e = $(0), r = $(0), n = $(0), a = $(0), t = $(0), o = $(0), l = $(0), i = $(0), s = $(0), u = $(0), d = $(), v = $(!1), f = $(0), m = $(0), y = () => {
    e.value = 0, r.value = 0, n.value = 0, a.value = 0, t.value = 0, o.value = 0, l.value = 0, i.value = 0, s.value = 0, u.value = 0, d.value = void 0, v.value = !1, f.value = 0, m.value = 0;
  };
  return {
    startX: e,
    startY: r,
    deltaX: n,
    deltaY: a,
    offsetX: t,
    offsetY: o,
    prevX: l,
    prevY: i,
    moveX: s,
    moveY: u,
    direction: d,
    touching: v,
    startTime: f,
    distance: m,
    resetTouch: y,
    startTouch: (P) => {
      y();
      const { clientX: O, clientY: S } = P.touches[0];
      e.value = O, r.value = S, l.value = O, i.value = S, v.value = !0, f.value = performance.now();
    },
    moveTouch: (P) => {
      const { clientX: O, clientY: S } = P.touches[0];
      n.value = O - e.value, a.value = S - r.value, t.value = Math.abs(n.value), o.value = Math.abs(a.value), m.value = Math.sqrt(t.value ** 2 + o.value ** 2), s.value = O - l.value, u.value = S - i.value, d.value || (d.value = Cf(t.value, o.value)), l.value = O, i.value = S;
    },
    endTouch: () => {
      v.value = !1;
    }
  };
}
function gl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function bl(e) {
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
function xe(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function ie(e, r) {
  var n = r ?? e;
  return n.install = function(a) {
    var {
      name: t
    } = e;
    t && a.component(t, e);
  }, n;
}
function Sf(e) {
  var r = Zv(e), n = document.createElement("div");
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
      return () => Ps(e, Fo({}, r, n));
    }
  }, {
    unmount: t
  } = Sf(a);
  return {
    unmountInstance: t
  };
}
function Ys(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Kv) {
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
function Pr() {
  var e = $(""), r = /* @__PURE__ */ function() {
    var t = bl(function* (o, l, i) {
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
    var t = bl(function* (o, l, i, s, u) {
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
function kf(e) {
  fn(() => window, "hashchange", e), fn(() => window, "popstate", e);
}
function oa() {
  var e = $(!1);
  return pn(() => {
    e.value = !1;
  }), xn(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function te(e) {
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
function U(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function hr(e, r) {
  return e === !1 ? null : (e === !0 && r && (e = r), "var-elevation--" + e);
}
function ba(e, r, n) {
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
        l ? l(i, d) : C(e[i], d);
      }
    });
  var u = $(s());
  return de(() => e[r], () => {
    u.value = s();
  }), de(() => u.value, (d) => {
    l ? l(i, d) : C(e[i], d);
  }), u;
}
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
var {
  n: Hs
} = te("ripple"), yl = 250;
function $f(e) {
  var {
    zIndex: r,
    position: n
  } = En(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function Tf(e, r) {
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
function Fs(e) {
  var r = this._ripple;
  if (r.removeRipple(), !(r.disabled || r.tasker || !br.enableRipple)) {
    var n = () => {
      r.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = Tf(this, e), s = document.createElement("div");
      s.classList.add(Hs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), $f(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function jo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Hs());
    if (n.length) {
      var a = n[n.length - 1], t = yl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, yl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function js() {
  if (!(!pf() || !br.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function Of(e, r) {
  var n;
  e._ripple = xt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: jo.bind(e)
  }), e.addEventListener("touchstart", Fs, {
    passive: !0
  }), e.addEventListener("touchmove", js, {
    passive: !0
  }), e.addEventListener("dragstart", jo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Pf(e) {
  e.removeEventListener("touchstart", Fs), e.removeEventListener("touchmove", js), e.removeEventListener("dragstart", jo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Vf(e, r) {
  var n, a, t, o, l = {
    color: (n = r.value) == null ? void 0 : n.color,
    disabled: (a = r.value) == null ? void 0 : a.disabled
  }, i = l.color !== ((t = e._ripple) == null ? void 0 : t.color) || l.disabled !== ((o = e._ripple) == null ? void 0 : o.disabled);
  if (i) {
    var s, u;
    e._ripple = xt({
      tasker: l.disabled ? null : (s = e._ripple) == null ? void 0 : s.tasker,
      removeRipple: (u = e._ripple) == null ? void 0 : u.removeRipple
    }, l);
  }
}
var Ws = {
  mounted: Of,
  unmounted: Pf,
  updated: Vf,
  install(e) {
    e.directive("ripple", this);
  }
}, FS = Ws;
const Ke = Ws;
function If(e) {
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOverlay: U(),
  "onUpdate:show": U(),
  // internal for Dialog
  onRouteChange: U()
};
function Gs() {
  var e = Object.keys(br.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function At(e) {
  br.locks[e] = 1, Gs();
}
function zt(e) {
  delete br.locks[e], Gs();
}
function mo(e, r) {
  var {
    uid: n
  } = ea();
  r && de(r, (a) => {
    a === !1 ? zt(n) : a === !0 && e() === !0 && At(n);
  }), de(e, (a) => {
    r && r() === !1 || (a === !0 ? At(n) : zt(n));
  }), Jv(() => {
    r && r() === !1 || e() === !0 && At(n);
  }), kt(() => {
    r && r() === !1 || e() === !0 && zt(n);
  }), pn(() => {
    r && r() === !1 || e() === !0 && At(n);
  }), xn(() => {
    r && r() === !1 || e() === !0 && zt(n);
  });
}
function It(e, r) {
  var n = $(br.zIndex);
  return de(e, (a) => {
    a && (br.zIndex += r, n.value = br.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
var qs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Mf() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(qs);
  return {
    index: n,
    popup: r,
    bindPopup: e
  };
}
function Bf() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(qs);
  return {
    length: n,
    popupItems: r,
    bindPopupItems: e
  };
}
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
function wl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: Mr,
  classes: Bo
} = te("popup");
const Ur = ne({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Vt,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = wf(() => e.show, !0), {
      zIndex: o
    } = It(() => e.show, 3), {
      disabled: l
    } = oa(), {
      bindPopupItems: i
    } = Bf(), s = () => {
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
      return _("div", {
        class: Bo(Mr("overlay"), f),
        style: Wo({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => Te(_("div", De({
      class: Bo(Mr("content"), Mr("--" + e.position), [e.defaultStyle, Mr("--content-background-color")], [e.defaultStyle, Mr("$-elevation--3")], [e.safeArea, Mr("--safe-area")], [e.safeAreaTop, Mr("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && C(n.default)]), [[Rr, e.show]]), v = () => {
      var f;
      return _(Fe, {
        name: Mr("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Te(_("div", {
          class: Bo(Mr("$--box"), Mr()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), _(Fe, {
          name: e.transition || Mr("$-pop-" + e.position)
        }, wl(f = d()) ? f : {
          default: () => [f]
        })]), [[Rr, e.show]])]
      });
    };
    return mo(() => e.show, () => e.lockScroll), de(() => e.show, (f) => {
      C(f ? e.onOpen : e.onClose);
    }), i({
      show: L(() => e.show)
    }), kf(() => C(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return _(Jr, {
          to: f,
          disabled: l.value
        }, wl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
ie(Ur);
var jS = Ur, Xs = {
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
function Cl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ef(e) {
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
  n: Nf,
  classes: Df
} = te("icon");
function Af(e, r) {
  return p(), Ce(ra(e.isURL(e.name) ? "img" : "i"), {
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
var Ks = ne({
  name: "VarIcon",
  props: Xs,
  setup(e) {
    var r = $(""), n = $(!1), a = /* @__PURE__ */ function() {
      var t = Ef(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || R(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield ze(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, R(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return de(() => e.name, a, {
      immediate: !0
    }), {
      n: Nf,
      classes: Df,
      nextName: r,
      animateInProgress: n,
      isURL: ef,
      toNumber: R,
      toSizeUnit: we
    };
  }
});
Ks.render = Af;
const Ne = Ks;
ie(Ne);
var WS = Ne;
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
var zf = Go({
  show: Boolean,
  title: String,
  actions: {
    type: Array,
    default: () => []
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: U(),
  "onUpdate:show": U()
}, xe(Vt, [
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
const Ri = {
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
}, Zs = {
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
function Ui() {
  var e = {}, r = $({}), n = (o, l) => {
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
    e[o] = qo({}, e[o], l), a(o);
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
  packs: Js,
  pack: _e,
  add: Yi,
  use: Hi,
  merge: Qs
} = Ui();
Yi("zh-CN", Ri);
Hi("zh-CN");
var GS = {
  zhCN: Ri,
  enUS: Zs,
  packs: Js,
  pack: _e,
  add: Yi,
  use: Hi,
  merge: Qs,
  useLocale: Ui
};
const Xo = {
  zhCN: Ri,
  enUS: Zs,
  packs: Js,
  pack: _e,
  add: Yi,
  use: Hi,
  merge: Qs,
  useLocale: Ui
};
var {
  n: Lf,
  classes: Rf
} = te("action-sheet"), Uf = ["onClick"];
function Yf(e, r) {
  var n = se("var-icon"), a = se("var-popup"), t = Ae("ripple");
  return p(), Ce(a, De({
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
    default: me(() => [E(
      "div",
      De({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [j(e.$slots, "title", {}, () => [E(
        "div",
        {
          class: c(e.n("title"))
        },
        le(e.dt(e.title, e.pack.actionSheetTitle)),
        3
        /* TEXT, CLASS */
      )]), j(e.$slots, "actions", {}, () => [(p(!0), T(
        Me,
        null,
        We(e.actions, (o) => Te((p(), T("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: q({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (p(), Ce(n, {
          key: 0,
          class: c(e.n("action-icon")),
          "var-action-sheet-cover": "",
          name: o.icon,
          size: o.iconSize
        }, null, 8, ["class", "name", "size"])) : ee("v-if", !0), E(
          "div",
          {
            class: c(e.n("action-name"))
          },
          le(o.name),
          3
          /* TEXT, CLASS */
        )], 14, Uf)), [[t, {
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
var _s = ne({
  name: "VarActionSheet",
  directives: {
    Ripple: Ke
  },
  components: {
    VarPopup: Ur,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: zf,
  setup(e) {
    var r = $(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        C(l, t), o && C(e["onUpdate:show"], !1);
      }
    }, a = (t) => C(e["onUpdate:show"], t);
    return de(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: Lf,
      classes: Rf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: _e,
      dt: vo,
      handleSelect: n
    };
  }
});
_s.render = Yf;
const Mt = _s;
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
var nn, Fi = {};
function Hf(e) {
  return e === void 0 && (e = {}), Ko({}, Fi, e);
}
function qr(e) {
  return aa() ? new Promise((r) => {
    qr.close();
    var n = Ye(Hf(e));
    n.teleport = "body", nn = n;
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
        C(n.onClosed), a(), nn === n && (nn = null);
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
qr.setDefaultOptions = function(e) {
  Fi = e;
};
qr.resetDefaultOptions = function() {
  Fi = {};
};
qr.close = function() {
  if (nn != null) {
    var e = nn;
    nn = null, ze().then(() => {
      e.show = !1;
    });
  }
};
qr.Component = Mt;
ie(Mt);
ie(Mt, qr);
var qS = Mt, Ff = {
  color: String,
  textColor: String,
  title: String,
  titlePosition: {
    type: String,
    default: "left"
  },
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  round: Boolean,
  image: String,
  imageLinearGradient: String,
  safeAreaTop: Boolean
}, {
  n: jf,
  classes: Wf
} = te("app-bar");
function Gf(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: q(e.rootStyles)
    },
    [E(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [E(
        "div",
        {
          class: c(e.n("left"))
        },
        [j(e.$slots, "left"), e.titlePosition === "left" ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingLeft: e.paddingLeft
            })
          },
          [j(e.$slots, "default", {}, () => [$e(
            le(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [j(e.$slots, "default", {}, () => [$e(
          le(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0), E(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingRight: e.paddingRight
            })
          },
          [j(e.$slots, "default", {}, () => [$e(
            le(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), j(e.$slots, "right")],
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
var xs = ne({
  name: "VarAppBar",
  props: Ff,
  setup(e, r) {
    var {
      slots: n
    } = r, a = $(), t = $(), o = () => {
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
    return tr(o), Tt(o), {
      n: jf,
      classes: Wf,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
xs.render = Gf;
const ya = xs;
ie(ya);
var XS = ya;
function Sl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ho(e) {
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
var qf = "background-image", Xf = "lazy-loading", Kf = "lazy-error", kl = "lazy-attempt", Zf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Jo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Yn = [], eo = [], eu = tf(100), Ze = {
  loading: Jo,
  error: Jo,
  attempt: 3,
  throttleWait: 300,
  events: Zf
}, ji = Ai(Bt, Ze.throttleWait);
function po(e, r) {
  e._lazy.arg === qf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Jf(e) {
  e._lazy.loading && po(e, e._lazy.loading), Bt();
}
function Qf(e) {
  e._lazy.error && po(e, e._lazy.error), e._lazy.state = "error", Gi(e), Bt();
}
function ru(e, r) {
  po(e, r), e._lazy.state = "success", Gi(e), Bt();
}
function _f(e) {
  var r;
  eo.includes(e) || (eo.push(e), (r = Ze.events) == null || r.forEach((n) => {
    e.addEventListener(n, ji, {
      passive: !0
    });
  }));
}
function xf() {
  eo.forEach((e) => {
    var r;
    (r = Ze.events) == null || r.forEach((n) => {
      e.removeEventListener(n, ji);
    });
  }), eo.length = 0;
}
function ec(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Xf)) != null ? n : Ze.loading,
    error: (a = e.getAttribute(Kf)) != null ? a : Ze.error,
    attempt: e.getAttribute(kl) ? Number(e.getAttribute(kl)) : Ze.attempt
  };
  e._lazy = Zo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), po(e, Jo), C(Ze.filter, e._lazy);
}
function rc(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, eu.add(r), ru(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Qf(e) : nu(e);
  });
}
function nu(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (eu.has(r)) {
      ru(e, r), e._lazy.attemptLock = !1;
      return;
    }
    Jf(e), rc(e, r);
  }
}
function Wi(e) {
  return Qo.apply(this, arguments);
}
function Qo() {
  return Qo = ho(function* (e) {
    yield Dr(), lf(e) && nu(e);
  }), Qo.apply(this, arguments);
}
function Bt() {
  Yn.forEach((e) => Wi(e));
}
function nc(e) {
  return _o.apply(this, arguments);
}
function _o() {
  return _o = ho(function* (e) {
    !Yn.includes(e) && Yn.push(e), sf(e).forEach(_f), yield Wi(e);
  }), _o.apply(this, arguments);
}
function Gi(e) {
  Qt(Yn, e), Yn.length === 0 && xf();
}
function ac(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function au(e, r) {
  return xo.apply(this, arguments);
}
function xo() {
  return xo = ho(function* (e, r) {
    ec(e, r), yield nc(e);
  }), xo.apply(this, arguments);
}
function tc(e, r) {
  return ei.apply(this, arguments);
}
function ei() {
  return ei = ho(function* (e, r) {
    if (!ac(e, r)) {
      Yn.includes(e) && (yield Wi(e));
      return;
    }
    yield au(e, r);
  }), ei.apply(this, arguments);
}
function oc(e) {
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
var tu = {
  mounted: au,
  unmounted: Gi,
  updated: tc,
  install(e, r) {
    oc(r), ji = Ai(Bt, Ze.throttleWait), e.directive("lazy", this);
  }
}, KS = tu;
const wa = tu;
var ic = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    default: "normal"
  },
  alt: String,
  color: String,
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  bordered: Boolean,
  borderColor: String,
  loading: String,
  error: String,
  lazy: Boolean,
  onClick: U(),
  onLoad: U(),
  onError: U()
}, lc = (e) => ["mini", "small", "normal", "large"].includes(e), {
  n: sc,
  classes: uc
} = te("avatar"), dc = ["src", "alt", "lazy-loading", "lazy-error"], vc = ["src", "alt"];
function fc(e, r) {
  var n = Ae("lazy");
  return p(), T(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: q({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: r[3] || (r[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), T(
      Me,
      {
        key: 0
      },
      [e.lazy ? Te((p(), T("img", {
        key: 0,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: q({
          objectFit: e.fit
        }),
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        onLoad: r[0] || (r[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        })
      }, null, 46, dc)), [[n, e.src]]) : (p(), T("img", {
        key: 1,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: q({
          objectFit: e.fit
        }),
        onLoad: r[1] || (r[1] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: r[2] || (r[2] = function() {
          return e.handleError && e.handleError(...arguments);
        })
      }, null, 46, vc))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), T(
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
var ou = ne({
  name: "VarAvatar",
  directives: {
    Lazy: wa
  },
  props: ic,
  setup(e) {
    var r = $(null), n = $(null), a = $(1), t = () => {
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
    return tr(t), Tt(t), {
      isInternalSize: lc,
      toSizeUnit: we,
      n: sc,
      classes: uc,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
ou.render = fc;
const Ca = ou;
ie(Ca);
var ZS = Ca, cc = {
  offset: [Number, String],
  vertical: Boolean
}, {
  n: mc,
  classes: hc
} = te("avatar-group");
function pc(e, r) {
  return p(), T(
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
var iu = ne({
  name: "VarAvatarGroup",
  props: cc,
  setup(e) {
    var r = L(() => e.offset == null ? {} : {
      "--avatar-group-offset": we(e.offset)
    });
    return {
      n: mc,
      classes: hc,
      toSizeUnit: we,
      rootStyles: r
    };
  }
});
iu.render = pc;
const Sa = iu;
ie(Sa);
var JS = Sa;
function gc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function bc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var on = {
  type: {
    type: String,
    default: "circle",
    validator: gc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: bc
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
  n: yc,
  classes: wc
} = te("loading"), Cc = (e) => (gn(""), e = e(), bn(), e), Sc = /* @__PURE__ */ Cc(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ E("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), kc = [Sc];
function $c(e, r) {
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
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.isShow ? (p(), T(
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
        [E(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: q({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          kc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (p(!0), T(
        Me,
        null,
        We(e.loadingTypeDict, (n, a) => (p(), T(
          Me,
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
              Me,
              null,
              We(n, (t) => (p(), T(
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
          )) : ee("v-if", !0)],
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
          style: q({
            color: e.color
          })
        },
        [j(e.$slots, "description", {}, () => [$e(
          le(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var lu = ne({
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
    }, t = L(() => C(n.default) ? e.loading : !0);
    return {
      n: yc,
      classes: wc,
      multiplySizeUnit: sr,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
lu.render = $c;
const cn = lu;
ie(cn);
var QS = cn, Tc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Oc,
  classes: Pc
} = te("hover-overlay");
function Vc(e, r) {
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
var su = ne({
  name: "VarHoverOverlay",
  props: Tc,
  setup() {
    return {
      n: Oc,
      classes: Pc
    };
  }
});
su.render = Vc;
const wr = su;
ie(wr);
function Xr() {
  var e = $(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var _S = wr;
function uu(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function Ic(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[Is(t)] = o, n;
  }, {}) : {};
}
function Mc(e) {
  var {
    value: r
  } = e._hover, n = Ic(e);
  Object.keys(r).forEach((a) => {
    var t = Is(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function qi(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function Bc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function du(e) {
  Bc(e), qi(e, e._hover.rawStyle);
}
function vu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, na(e)) {
    e(this._hover.hovering);
    return;
  }
  qi(this, e);
}
function fu() {
  if (this._hover.hovering = !1, na(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  du(this);
}
function cu(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  uu(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, Mc(e), e.addEventListener("mouseenter", vu), e.addEventListener("mouseleave", fu));
}
function mu(e, r) {
  uu(r.arg) || (du(e), e.removeEventListener("mouseenter", vu), e.removeEventListener("mouseleave", fu));
}
function Ec(e, r) {
  e._hover && mu(e, r);
}
function Nc(e, r) {
  return !na(r.value) && e._hover.hovering;
}
function Dc(e, r) {
  cu(e, r), Nc(e, r) && qi(e, r.value);
}
var hu = {
  mounted: cu,
  unmounted: mu,
  beforeUpdate: Ec,
  updated: Dc,
  install(e) {
    e.directive("hover", this);
  }
}, xS = hu;
const Ar = hu;
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
var Ac = {
  type: String,
  nativeType: {
    type: String,
    default: "button"
  },
  size: String,
  loading: Boolean,
  round: Boolean,
  block: Boolean,
  text: Boolean,
  outline: Boolean,
  disabled: Boolean,
  autoLoading: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  color: String,
  textColor: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  loadingRadius: [Number, String],
  loadingType: xe(on, "type"),
  loadingSize: xe(on, "size"),
  loadingColor: ri({}, xe(on, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, pu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function zc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(pu);
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
  } = or(pu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Rc,
  classes: Uc
} = te("button"), Yc = ["type", "disabled"];
function Hc(e, r) {
  var n = se("var-loading"), a = se("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return Te((p(), T("button", {
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
  }, [e.loading || e.pending ? (p(), Ce(n, {
    key: 0,
    class: c(e.n("loading")),
    "var-button-cover": "",
    color: e.loadingColor,
    type: e.loadingType,
    size: e.loadingSize,
    radius: e.loadingRadius
  }, null, 8, ["class", "color", "type", "size", "radius"])) : ee("v-if", !0), E(
    "div",
    {
      class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  ), _(a, {
    hovering: e.hovering
  }, null, 8, ["hovering"])], 46, Yc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var gu = ne({
  name: "VarButton",
  components: {
    VarLoading: cn,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  props: Ac,
  setup(e) {
    var r = $(!1), {
      buttonGroup: n
    } = Lc(), {
      hovering: a,
      handleHovering: t
    } = Xr(), o = L(() => {
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
gu.render = Hc;
const vr = gu;
ie(vr);
var ek = vr, Fc = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  bottom: [Number, String],
  target: [String, Object],
  onClick: U()
}, {
  n: jc,
  classes: Wc
} = te("back-top");
function Gc(e, r) {
  var n = se("var-icon"), a = se("var-button");
  return p(), Ce(Jr, {
    to: "body",
    disabled: e.disabled
  }, [E(
    "div",
    De({
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
    [j(e.$slots, "default", {}, () => [_(a, {
      elevation: e.elevation,
      type: "primary",
      round: "",
      "var-back-top-cover": ""
    }, {
      default: me(() => [_(n, {
        name: "chevron-up"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["elevation"])])],
    16
    /* FULL_PROPS */
  )], 8, ["disabled"]);
}
var bu = ne({
  name: "VarBackTop",
  components: {
    VarButton: vr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Fc,
  setup(e) {
    var r = $(!1), n = $(null), a = $(!0), t, o = (d) => {
      C(e.onClick, d);
      var v = zi(t);
      ga(t, {
        left: v,
        duration: e.duration,
        animation: Ms
      });
    }, l = Ai(() => {
      r.value = pa(t) >= Re(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Es(e.target, "BackTop") : vn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return St(() => {
      i(), s(), a.value = !1;
    }), pn(s), co(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: we,
      n: jc,
      classes: Wc,
      handleClick: o
    };
  }
});
bu.render = Gc;
const ka = bu;
ie(ka);
var rk = ka, qc = {
  type: {
    type: String,
    default: "default"
  },
  position: {
    type: String,
    default: "right-top"
  },
  hidden: Boolean,
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: [String, Number],
  dot: Boolean,
  icon: String,
  color: String
}, {
  n: Xc,
  classes: Kc
} = te("badge");
function Zc(e, r) {
  var n = se("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "default"), _(Fe, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: me(() => [Te(E(
        "span",
        De({
          class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [e.icon ? (p(), Ce(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-badge-cover": "",
          name: e.icon
        }, null, 8, ["class", "name"])) : ee("v-if", !0), j(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), T(
          "span",
          {
            key: 0,
            class: c(e.n("value"))
          },
          le(e.value),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)])],
        16
        /* FULL_PROPS */
      ), [[Rr, !e.hidden]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name"])],
    2
    /* CLASS */
  );
}
var yu = ne({
  name: "VarBadge",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: qc,
  setup(e) {
    var r = L(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && R(n) > R(a) ? a + "+" : n;
    });
    return {
      n: Xc,
      classes: Kc,
      value: r
    };
  }
});
yu.render = Zc;
const Hn = yu;
ie(Hn);
var nk = Hn, Jc = {
  active: {
    type: [Number, String],
    default: 0
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  fixed: Boolean,
  border: Boolean,
  safeArea: Boolean,
  activeColor: String,
  inactiveColor: String,
  fabProps: Object,
  onChange: U(),
  onBeforeChange: U(),
  onFabClick: U(),
  "onUpdate:active": U()
}, wu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Qc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(wu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: _c,
  classes: xc
} = te("bottom-navigation"), {
  n: go
} = te("bottom-navigation-item"), $l = go("--right-half-space"), Tl = go("--left-half-space"), Ol = go("--right-space"), em = {
  type: "primary"
};
function rm(e, r) {
  var n = se("var-button");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (p(), Ce(n, De({
      key: 0,
      class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
      "var-bottom-navigation__fab": "",
      onClick: e.handleFabClick
    }, e.fabProps, {
      round: ""
    }), {
      default: me(() => [j(e.$slots, "fab")]),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "onClick"])) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Cu = ne({
  name: "VarBottomNavigation",
  components: {
    VarButton: vr
  },
  props: Jc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = $(null), t = L(() => e.active), o = L(() => e.activeColor), l = L(() => e.inactiveColor), i = $({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Qc(), v = () => {
      s.value === 0 || f() || m() || y();
    }, f = () => u.find((g) => {
      var {
        name: k
      } = g;
      return t.value === k.value;
    }), m = () => u.find((g) => {
      var {
        index: k
      } = g;
      return t.value === k.value;
    }), y = () => {
      dr(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > s.value - 1 && C(e["onUpdate:active"], s.value - 1));
    }, b = (g) => {
      t.value !== g && (e.onBeforeChange ? h(g) : w(g));
    }, h = (g) => {
      var k = Wt(C(e.onBeforeChange, g));
      Promise.all(k).then((Y) => {
        Y.every(Boolean) && w(g);
      });
    }, w = (g) => {
      C(e["onUpdate:active"], g), C(e.onChange, g);
    }, P = () => {
      var g = I();
      g.forEach((k) => {
        k.classList.remove($l, Tl, Ol);
      });
    }, O = (g) => {
      var k = I(), Y = k.length, M = g % 2 === 0;
      k.forEach((F, X) => {
        S(M, F, X, Y);
      });
    }, S = (g, k, Y, M) => {
      var F = Y === M - 1;
      if (!g && F) {
        k.classList.add(Ol);
        return;
      }
      var X = Y === M / 2 - 1, A = Y === M / 2;
      X ? k.classList.add($l) : A && k.classList.add(Tl);
    }, I = () => Array.from(a.value.querySelectorAll("." + go())), V = () => {
      C(e.onFabClick);
    }, N = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(N), de(() => s.value, v), de(() => e.fabProps, (g) => {
      i.value = ni({}, em, g);
    }, {
      immediate: !0,
      deep: !0
    }), tr(() => {
      n.fab && O(s.value);
    }), Tt(() => {
      P(), n.fab && O(s.value);
    }), {
      n: _c,
      classes: xc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: V,
      fabProps: i
    };
  }
});
Cu.render = rm;
const $a = Cu;
ie($a);
var ak = $a, nm = {
  name: String,
  icon: String,
  label: String,
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
function am() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(wu);
  return n || Or("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: tm,
  classes: om
} = te("bottom-navigation-item"), im = {
  type: "danger",
  dot: !0
};
function lm(e, r) {
  var n = se("var-icon"), a = se("var-badge"), t = Ae("ripple");
  return Te((p(), T(
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
    [e.icon && !e.$slots.icon ? (p(), Ce(n, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : ee("v-if", !0), j(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), Ce(a, De({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : ee("v-if", !0), E(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (p(), T(
        Me,
        {
          key: 0
        },
        [$e(
          le(e.label),
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
var Su = ne({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Hn,
    VarIcon: Ne
  },
  directives: {
    Ripple: Ke
  },
  props: nm,
  setup(e) {
    var r = L(() => e.name), n = L(() => e.badge), a = $({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = am(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, y = (m = r.value) != null ? m : t.value;
      C(e.onClick, y), C(o.onToggle, y);
    };
    return l(d), de(() => n.value, (m) => {
      a.value = m === !0 ? im : n.value;
    }, {
      immediate: !0
    }), {
      n: tm,
      classes: om,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Su.render = lm;
const Ta = Su;
ie(Ta);
var tk = Ta, sm = {
  separator: String,
  onClick: U()
}, ku = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function um() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ir(ku);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function dm() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(ku);
  return r || Or("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: vm,
  classes: fm
} = te("breadcrumb");
function cm(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [E(
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
    ), e.isLast ? ee("v-if", !0) : j(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [E(
        "div",
        {
          class: c(e.n("separator"))
        },
        le((n = e.separator) != null ? n : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var $u = ne({
  name: "VarBreadcrumb",
  props: sm,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = dm(), t = L(() => r.value === n.length.value - 1), o = L(() => n.separator.value), l = (i) => {
      t.value || C(e.onClick, i);
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
$u.render = cm;
const Oa = $u;
ie(Oa);
var ok = Oa, mm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: hm
} = te("breadcrumbs");
function pm(e, r) {
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
var Tu = ne({
  name: "VarBreadcrumbs",
  props: mm,
  setup(e) {
    var r = L(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = um(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: hm
    };
  }
});
Tu.render = pm;
const Pa = Tu;
ie(Pa);
var ik = Pa, gm = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  mode: {
    type: String,
    default: "normal"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  vertical: Boolean
}, {
  n: bm,
  classes: ym
} = te("button-group");
function wm(e, r) {
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
var Ou = ne({
  name: "VarButtonGroup",
  props: gm,
  setup(e) {
    var {
      bindButtons: r
    } = zc(), n = {
      elevation: L(() => e.elevation),
      type: L(() => e.type),
      size: L(() => e.size),
      color: L(() => e.color),
      textColor: L(() => e.textColor),
      mode: L(() => e.mode)
    };
    return r(n), {
      n: bm,
      classes: ym,
      formatElevation: hr
    };
  }
});
Ou.render = wm;
const Va = Ou;
ie(Va);
var lk = Va;
function Cm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Sm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Cm,
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
function Pl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Vl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Pl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Pl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: km,
  classes: $m
} = te("card"), Tm = 500, Om = ["src", "alt"];
function Pm(e, r) {
  var n = se("var-icon"), a = se("var-button"), t = Ae("ripple");
  return Te((p(), T(
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
    [E(
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
      [j(e.$slots, "image", {}, () => [e.src ? (p(), T("img", {
        key: 0,
        class: c(e.n("image")),
        style: q({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Om)) : ee("v-if", !0)]), E(
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
          le(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          le(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [j(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), T(
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
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), T(
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
        [j(e.$slots, "close-button", {}, () => [_(a, {
          "var-card-cover": "",
          round: "",
          class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
          onClick: Tr(e.close, ["stop"])
        }, {
          default: me(() => [_(n, {
            "var-card-cover": "",
            name: "window-close",
            class: c(e.n("close-button-icon"))
          }, null, 8, ["class"])]),
          _: 1
          /* STABLE */
        }, 8, ["class", "onClick"])])],
        6
        /* CLASS, STYLE */
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), E(
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
var Pu = ne({
  name: "VarCard",
  directives: {
    Ripple: Ke
  },
  components: {
    VarIcon: Ne,
    VarButton: vr
  },
  props: Sm,
  setup(e) {
    var r = $(null), n = $(null), a = $("auto"), t = $("auto"), o = $("100%"), l = $("100%"), i = $("auto"), s = $("auto"), u = $(void 0), d = $("hidden"), v = $("0px"), f = $("0"), m = L(() => e.layout === "row"), y = $(!1), b = $(!1), {
      zIndex: h
    } = It(() => e.floating, 1);
    mo(() => e.floating, () => !m.value);
    var w = "auto", P = "auto", O = null, S = $(null), I = /* @__PURE__ */ function() {
      var k = Vl(function* () {
        clearTimeout(S.value), clearTimeout(O), S.value = null, S.value = setTimeout(/* @__PURE__ */ Vl(function* () {
          var {
            width: Y,
            height: M,
            left: F,
            top: X
          } = Qe(r.value);
          a.value = we(Y), t.value = we(M), o.value = a.value, l.value = t.value, i.value = we(X), s.value = we(F), u.value = "fixed", w = i.value, P = s.value, y.value = !0, yield Dr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Tm : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), V = () => {
      clearTimeout(O), clearTimeout(S.value), S.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = P, v.value = "0px", f.value = "0", y.value = !1, O = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", P = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, N = () => {
      C(e["onUpdate:floating"], !1);
    }, g = (k) => {
      C(e.onClick, k);
    };
    return de(() => e.floating, (k) => {
      m.value || ze(() => {
        k ? I() : V();
      });
    }, {
      immediate: !0
    }), {
      n: km,
      classes: $m,
      toSizeUnit: we,
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
      zIndex: h,
      isRow: m,
      close: N,
      showFloatingButtons: y,
      floated: b,
      formatElevation: hr,
      handleClick: g
    };
  }
});
Pu.render = Pm;
const Ia = Pu;
ie(Ia);
var sk = Ia, Vm = {
  title: [Number, String],
  icon: String,
  description: String,
  border: Boolean,
  borderOffset: [Number, String],
  iconClass: String,
  titleClass: String,
  descriptionClass: String,
  extraClass: String,
  ripple: Boolean,
  onClick: U()
}, {
  n: Im,
  classes: Mm
} = te("cell");
function Bm(e, r) {
  var n = se("var-icon"), a = Ae("ripple");
  return Te((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
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
      [_(n, {
        name: e.icon
      }, null, 8, ["name"])],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), E(
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
        le(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        le(e.description),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)])],
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
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Vu = ne({
  name: "VarCell",
  components: {
    VarIcon: Ne
  },
  directives: {
    Ripple: Ke
  },
  props: Vm,
  setup(e) {
    var r = L(() => e.borderOffset == null ? {} : {
      "--cell-border-left": we(e.borderOffset),
      "--cell-border-right": we(e.borderOffset)
    }), n = (a) => {
      C(e.onClick, a);
    };
    return {
      n: Im,
      classes: Mm,
      toSizeUnit: we,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Vu.render = Bm;
const Fn = Vu;
ie(Fn);
var uk = Fn, Em = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Nm
} = te("form-details"), Dm = {
  key: 0
}, Am = {
  key: 0
};
function zm(e, r) {
  return p(), Ce(Fe, {
    name: e.n()
  }, {
    default: me(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n())
      },
      [E(
        "div",
        {
          class: c(e.n("error-message"))
        },
        [_(Fe, {
          name: e.n("message")
        }, {
          default: me(() => [e.errorMessage ? (p(), T(
            "div",
            Dm,
            le(e.errorMessage),
            1
            /* TEXT */
          )) : ee("v-if", !0)]),
          _: 1
          /* STABLE */
        }, 8, ["name"])],
        2
        /* CLASS */
      ), E(
        "div",
        {
          class: c(e.n("extra-message"))
        },
        [_(Fe, {
          name: e.n("message")
        }, {
          default: me(() => [j(e.$slots, "extra-message", {}, () => [e.extraMessage ? (p(), T(
            "div",
            Am,
            le(e.extraMessage),
            1
            /* TEXT */
          )) : ee("v-if", !0)])]),
          _: 3
          /* FORWARDED */
        }, 8, ["name"])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0)]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
var Iu = ne({
  name: "VarFormDetails",
  props: Em,
  setup: () => ({
    n: Nm
  })
});
Iu.render = zm;
const nr = Iu;
ie(nr);
var dk = nr, Lm = {
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
  checkedColor: String,
  uncheckedColor: String,
  disabled: Boolean,
  readonly: Boolean,
  indeterminate: Boolean,
  iconSize: [String, Number],
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U(),
  "onUpdate:indeterminate": U()
}, Mu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Rm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Mu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Um() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(Mu);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
  };
}
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
var Bu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Bu), a = ea(), t = n ? (o) => {
    n(ai({}, o, {
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
  } = ir(Bu);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: Hm,
  classes: Fm
} = te("checkbox");
function jm(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("hover"), l = Ae("ripple");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [E(
      "div",
      {
        class: c(e.n())
      },
      [Te((p(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.isIndeterminate ? j(e.$slots, "indeterminate-icon", {
          key: 0
        }, () => [_(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "minus-box",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : ee("v-if", !0), e.checked && !e.isIndeterminate ? j(e.$slots, "checked-icon", {
          key: 1
        }, () => [_(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : ee("v-if", !0), !e.checked && !e.isIndeterminate ? j(e.$slots, "unchecked-icon", {
          key: 2
        }, () => [_(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-blank-outline",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : ee("v-if", !0), _(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, e.handleHovering, "desktop"], [l, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), E(
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
    ), _(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Eu = ne({
  name: "VarCheckbox",
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  props: Lm,
  setup(e) {
    var r = ba(e, "modelValue"), n = L(() => r.value === e.checkedValue), a = L(() => e.checkedValue), t = $(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Um(), {
      hovering: i,
      handleHovering: s
    } = Xr(), {
      form: u,
      bindForm: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: y
    } = Pr(), b = ba(e, "indeterminate"), h = (k) => {
      ze(() => {
        var {
          validateTrigger: Y,
          rules: M,
          modelValue: F
        } = e;
        f(Y, k, M, F);
      });
    }, w = (k) => {
      var {
        checkedValue: Y,
        onChange: M
      } = e;
      r.value = k, b.value = !1, C(M, r.value), h("onChange"), k === Y ? o == null || o.onChecked(Y) : o == null || o.onUnchecked(Y);
    }, P = (k) => {
      var {
        disabled: Y,
        readonly: M,
        checkedValue: F,
        uncheckedValue: X,
        onClick: A
      } = e;
      if (!(u != null && u.disabled.value || Y) && (C(A, k), !(u != null && u.readonly.value || M))) {
        t.value = !0;
        var z = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && z || w(n.value ? X : F);
      }
    }, O = (k) => {
      var {
        checkedValue: Y,
        uncheckedValue: M
      } = e;
      r.value = k.includes(Y) ? Y : M;
    }, S = () => {
      t.value = !1;
    }, I = () => {
      r.value = e.uncheckedValue, y();
    }, V = (k) => {
      var {
        checkedValue: Y,
        uncheckedValue: M
      } = e, F = ![Y, M].includes(k);
      F && (k = n.value ? M : Y), w(k);
    }, N = () => m(e.rules, e.modelValue), g = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: N,
      resetValidation: y,
      reset: I,
      resetWithAnimation: S
    };
    return C(l, g), C(d, g), {
      isIndeterminate: b,
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Hm,
      classes: Fm,
      handleClick: P,
      toggle: V,
      reset: I,
      validate: N,
      resetValidation: y
    };
  }
});
Eu.render = jm;
const jn = Eu;
ie(jn);
var vk = jn, Wm = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: [String, Number],
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Gm,
  classes: qm
} = te("checkbox-group");
function Xm(e, r) {
  var n = se("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [E(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), _(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Nu = ne({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: nr
  },
  props: Wm,
  setup(e) {
    var r = L(() => e.max), n = L(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Rm(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Pr(), v = L(() => i.value), f = (N) => {
      ze(() => {
        var {
          validateTrigger: g,
          rules: k,
          modelValue: Y
        } = e;
        s(g, N, k, Y);
      });
    }, m = (N) => {
      C(e["onUpdate:modelValue"], N), C(e.onChange, N), f("onChange");
    }, y = (N) => {
      var {
        modelValue: g
      } = e;
      g.includes(N) || m([...g, N]);
    }, b = (N) => {
      var {
        modelValue: g
      } = e;
      g.includes(N) && m(g.filter((k) => k !== N));
    }, h = () => t.forEach((N) => {
      var {
        sync: g
      } = N;
      return g(e.modelValue);
    }), w = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, P = () => {
      var N = t.map((k) => {
        var {
          checkedValue: Y
        } = k;
        return Y.value;
      }), g = dl(N);
      return w(), C(e["onUpdate:modelValue"], g), g;
    }, O = () => {
      var N = t.filter((k) => {
        var {
          checked: Y
        } = k;
        return !Y.value;
      }).map((k) => {
        var {
          checkedValue: Y
        } = k;
        return Y.value;
      }), g = dl(N);
      return w(), C(e["onUpdate:modelValue"], g), g;
    }, S = () => {
      C(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    de(() => e.modelValue, h, {
      deep: !0
    }), de(() => a.value, h);
    var V = {
      max: r,
      checkedCount: n,
      onChecked: y,
      onUnchecked: b,
      validate: I,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return o(V), C(l, V), {
      errorMessage: i,
      n: Gm,
      classes: qm,
      checkAll: P,
      inverseAll: O,
      reset: S,
      validate: I,
      resetValidation: d
    };
  }
});
Nu.render = Xm;
const Ma = Nu;
ie(Ma);
var fk = Ma, Km = {
  type: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  textColor: String,
  iconName: xe(Xs, "name"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closable: Boolean,
  onClose: U()
}, {
  n: Qr,
  classes: Zm
} = te("chip");
function Jm(e, r) {
  var n = se("var-icon");
  return p(), Ce(Fe, {
    name: e.n("$-fade")
  }, {
    default: me(() => [E(
      "span",
      De({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [j(e.$slots, "left"), E(
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
        [_(n, {
          name: "" + (e.iconName ? e.iconName : "close-circle")
        }, null, 8, ["name"])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      16
      /* FULL_PROPS */
    )]),
    _: 3
    /* FORWARDED */
  }, 8, ["name"]);
}
var Du = ne({
  name: "VarChip",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Km,
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
      } = e, u = Qr(o ? "$--flex" : "$--inline-flex"), d = i ? Qr("plain") + " " + Qr("plain-" + l) : Qr("--" + l), v = s ? Qr("--round") : null;
      return [Qr("--" + t), u, d, v];
    }), a = (t) => {
      C(e.onClose, t);
    };
    return {
      n: Qr,
      classes: Zm,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Du.render = Jm;
const Wn = Du;
ie(Wn);
var ck = Wn, Qm = {
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
    default: "row"
  },
  justify: String,
  align: String,
  xs: [Object, Number, String],
  sm: [Object, Number, String],
  md: [Object, Number, String],
  lg: [Object, Number, String],
  xl: [Object, Number, String],
  onClick: U()
}, Au = Symbol("ROW_BIND_COL_KEY");
function _m() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Au);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function xm() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Au);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Lt,
  classes: eh
} = te("col");
function rh(e, r) {
  return p(), T(
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
var zu = ne({
  name: "VarCol",
  props: Qm,
  setup(e) {
    var r = $({
      left: 0,
      right: 0
    }), n = L(() => R(e.span)), a = L(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = xm(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Ni(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Lt("--span-" + u + "-" + m)), f && v.push(Lt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Lt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      C(e.onClick, u);
    };
    return de([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), C(o, l), {
      n: Lt,
      classes: eh,
      padding: r,
      toNumber: R,
      toSizeUnit: we,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: _t
    };
  }
});
zu.render = rh;
const Ba = zu;
ie(Ba);
var mk = Ba, Lu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function nh() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(Lu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var ah = {
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
  n: th
} = te("collapse");
function oh(e, r) {
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
var Ru = ne({
  name: "VarCollapse",
  props: ah,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = nh(), t = L(() => e.modelValue), o = L(() => e.offset), l = L(() => e.divider), i = L(() => e.elevation), s = () => !e.accordion && !Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, h) => s() ? h ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((w) => w !== b) : null, d = (b, h) => {
      var w = u(b, h);
      C(e["onUpdate:modelValue"], w), C(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((h) => {
          var {
            name: w
          } = h;
          return e.modelValue === w.value;
        });
      var b = n.filter((h) => {
        var {
          name: w
        } = h;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return b.length ? b : void 0;
    }, f = () => e.accordion ? n.find((b) => {
      var {
        index: h,
        name: w
      } = b;
      return w.value === void 0 && e.modelValue === h.value;
    }) : n.filter((b) => {
      var {
        index: h,
        name: w
      } = b;
      return w.value === void 0 && e.modelValue.includes(h.value);
    }), m = () => {
      if (s()) {
        var b = v() || f();
        if (e.accordion && !b || !e.accordion && !b.length) {
          n.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((h) => {
          var w = e.accordion ? b === h : b.includes(h);
          h.init(e.accordion, w);
        });
      }
    }, y = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(y), de(() => r.value, () => ze().then(m)), de(() => e.modelValue, () => ze().then(m)), {
      n: th,
      divider: l
    };
  }
});
Ru.render = oh;
const Ea = Ru;
ie(Ea);
var hk = Ea;
function ih() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Lu);
  return n || Or("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var lh = {
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
  n: sh,
  classes: uh
} = te("collapse-item");
function dh(e, r) {
  var n = se("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: q("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
    },
    [E(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), E(
      "div",
      {
        class: c(e.n("header")),
        onClick: r[0] || (r[0] = (a) => e.toggle())
      },
      [E(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [j(e.$slots, "title", {}, () => [$e(
          le(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), E(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [j(e.$slots, "icon", {}, () => [_(n, {
          name: e.icon,
          transition: 250,
          class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
        }, null, 8, ["name", "class"])])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Te(E(
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
      [E(
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
    ), [[Rr, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Uu = ne({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ne
  },
  props: lh,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = ih(), t = !0, o = $(null), l = $(!1), i = $(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = L(() => e.name), y = (I, V) => {
      s.value === void 0 || I && Ve(s.value) || V === i.value || (i.value = V, b(!0));
    }, b = (I) => {
      e.disabled || I || f(e.name || r.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, yr(() => {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = "0px", yr(() => {
          o.value.style.height = I + "px", t && fo(() => {
            t && O();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, P = () => {
      if (o.value) {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = I + "px", yr(() => {
          o.value.style.height = "0px";
        });
      }
    }, O = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, S = {
      index: r,
      name: m,
      init: y
    };
    return a(S), de(i, (I) => {
      I ? h() : P();
    }), {
      n: sh,
      start: w,
      classes: uh,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: b,
      contentEl: o,
      transitionend: O,
      formatElevation: hr
    };
  }
});
Uu.render = dh;
const Na = Uu;
ie(Na);
var pk = Na, vh = {
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
  n: fh
} = te("countdown"), ti = 1e3, oi = 60 * ti, ii = 60 * oi, Il = 24 * ii;
function ch(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", Ot(uo(e.timeData)), () => [$e(
      le(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Yu = ne({
  name: "VarCountdown",
  props: vh,
  setup(e) {
    var r = $(""), n = $({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (y, b) => {
      var h = Object.values(b), w = ["DD", "HH", "mm", "ss"], P = [24, 60, 60, 1e3];
      if (w.forEach((S, I) => {
        y.includes(S) ? y = y.replace(S, kn("" + h[I], 2, "0")) : h[I + 1] += h[I] * P[I];
      }), y.includes("S")) {
        var O = kn("" + h[h.length - 1], 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", O) : y.includes("SS") ? y = y.replace("SS", O.slice(0, 2)) : y = y.replace("S", O.slice(0, 1));
      }
      return y;
    }, u = (y) => {
      var b = Math.floor(y / Il), h = Math.floor(y % Il / ii), w = Math.floor(y % ii / oi), P = Math.floor(y % oi / ti), O = Math.floor(y % ti), S = {
        days: b,
        hours: h,
        minutes: w,
        seconds: P,
        milliseconds: O
      };
      n.value = S, C(e.onChange, n.value), r.value = s(e.format, S);
    }, d = () => {
      var {
        time: y,
        onEnd: b
      } = e, h = performance.now();
      if (a || (a = h + R(y)), l = a - h, l < 0 && (l = 0), u(l), l === 0) {
        C(b);
        return;
      }
      t && (o = yr(d));
    }, v = function(y) {
      y === void 0 && (y = !1), !(t && !y) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, pl(o);
    }, m = () => {
      a = 0, t = !1, pl(o), d();
    };
    return de(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), pn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), xn(() => {
      i = t, f();
    }), kt(f), {
      showTime: r,
      timeData: n,
      n: fh,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Yu.render = ch;
const Da = Yu;
ie(Da);
var gk = Da;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var An = 9e15, yn = 1e9, li = "0123456789abcdef", ro = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", no = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", si = {
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
  minE: -An,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: An,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Hu, jr, be = !0, bo = "[DecimalError] ", mn = bo + "Invalid argument: ", Fu = bo + "Precision limit exceeded", ju = bo + "crypto unavailable", Wu = "[object Decimal]", ar = Math.floor, Je = Math.pow, mh = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, hh = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ph = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Gu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Nr = 1e7, pe = 7, gh = 9007199254740991, bh = ro.length - 1, ui = no.length - 1, K = { toStringTag: Wu };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), he(e);
};
K.ceil = function() {
  return he(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, r) {
  var n, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(mn + r);
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
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + pe, a.rounding = 1, n = yh(a, Ju(a, n)), a.precision = e, a.rounding = r, he(jr == 2 || jr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (be = !1, o = d.s * Je(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = rr(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Je(n, 1 / 3), e = ar((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ee(u.plus(d).times(i), u.plus(s), l + 2, 1), rr(i.d).slice(0, l) === (n = rr(a.d)).slice(0, l))
      if (n = n.slice(l - 3, l + 1), n == "9999" || !t && n == "4999") {
        if (!t && (he(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (he(a, e + 1, 1), r = !a.times(a).times(a).eq(d));
        break;
      }
  return be = !0, he(a, e, v.rounding, r);
};
K.decimalPlaces = K.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - ar(this.e / pe)) * pe, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
K.dividedBy = K.div = function(e) {
  return Ee(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var r = this, n = r.constructor;
  return he(Ee(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return he(new this.constructor(this), this.e + 1, 3);
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
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / wo(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Gn(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return he(o, l.precision = n, l.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Gn(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / wo(5, e)), t = Gn(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, he(t, r, n, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Ee(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
K.inverseCosine = K.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Er(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Er(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Er(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, be = !1, n = n.times(n).minus(1).sqrt().plus(n), be = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, be = !1, n = n.times(n).plus(1).sqrt().plus(n), be = !0, a.precision = e, a.rounding = r, n.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? he(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
K.inverseSine = K.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Er(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= ui)
      return l = Er(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ui)
      return l = Er(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / pe + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (be = !1, r = Math.ceil(i / pe), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), be = !0, he(l, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && ar(this.e / pe) > this.d.length - 2;
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
  if (be = !1, i = v + m, l = ln(u, i), a = r ? ao(d, i + 10) : ln(e, i), s = Ee(l, a, i, 1), Aa(s.d, t = v, f))
    do
      if (i += 10, l = ln(u, i), a = r ? ao(d, i + 10) : ln(e, i), s = Ee(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = he(s, v + 1, 0));
        break;
      }
    while (Aa(s.d, t += 10, f));
  return be = !0, he(s, v, f);
};
K.minus = K.sub = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, y = m.constructor;
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
    return be ? he(e, i, s) : e;
  }
  if (n = ar(e.e / pe), d = ar(m.e / pe), u = u.slice(), o = d - n, o) {
    for (v = o < 0, v ? (r = u, o = -o, l = f.length) : (r = f, n = d, l = u.length), a = Math.max(Math.ceil(i / pe), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; )
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
  return u[0] ? (e.d = u, e.e = yo(u, n), be ? he(e, i, s) : e) : new y(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? he(new a(n), a.precision, a.rounding) : (be = !1, a.modulo == 9 ? (r = Ee(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ee(n, e, 0, a.modulo, 1), r = r.times(e), be = !0, n.minus(r));
};
K.naturalExponential = K.exp = function() {
  return di(this);
};
K.naturalLogarithm = K.ln = function() {
  return ln(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, he(e);
};
K.plus = K.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), be ? he(e, i, s) : e;
  if (o = ar(v.e / pe), a = ar(e.e / pe), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / pe), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Nr | 0, u[t] %= Nr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = yo(u, a), be ? he(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(mn + e);
  return n.d ? (r = qu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
K.round = function() {
  var e = this, r = e.constructor;
  return he(new r(e), e.e + 1, r.rounding);
};
K.sine = K.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + pe, a.rounding = 1, n = Ch(a, Ju(a, n)), a.precision = e, a.rounding = r, he(jr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (be = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = rr(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = ar((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ee(l, o, n + 2, 1)).times(0.5), rr(o.d).slice(0, n) === (r = rr(a.d)).slice(0, n))
      if (r = r.slice(n - 3, n + 1), r == "9999" || !t && r == "4999") {
        if (!t && (he(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        n += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (he(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return be = !0, he(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, he(jr == 2 || jr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (n = ar(d.e / pe) + ar(e.e / pe), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + r, o[t--] = i % Nr | 0, r = i / Nr | 0;
    o[t] = (o[t] + r) % Nr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = yo(o, n), be ? he(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, r) {
  return Xi(this, 2, e, r);
};
K.toDecimalPlaces = K.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (mr(e, 0, yn), r === void 0 ? r = a.rounding : mr(r, 0, 8), he(n, e + n.e + 1, r));
};
K.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, !0) : (mr(e, 0, yn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = he(new t(a), e + 1, r), n = Yr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
K.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Yr(t) : (mr(e, 0, yn), r === void 0 ? r = o.rounding : mr(r, 0, 8), a = he(new o(t), e + t.e + 1, r), n = Yr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
K.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, y = m.d, b = m.constructor;
  if (!y)
    return new b(m);
  if (u = n = new b(1), a = s = new b(0), r = new b(a), o = r.e = qu(y) - m.e - 1, l = o % pe, r.d[0] = Je(10, l < 0 ? pe + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(mn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (be = !1, i = new b(rr(y)), d = b.precision, b.precision = o = y.length * pe * 2; v = Ee(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], b.precision = d, be = !0, f;
};
K.toHexadecimal = K.toHex = function(e, r) {
  return Xi(this, 16, e, r);
};
K.toNearest = function(e, r) {
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
  return e.d[0] ? (be = !1, n = Ee(n, e, 0, r, 1).times(e), be = !0, he(n)) : (e.s = n.s, n = e), n;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, r) {
  return Xi(this, 8, e, r);
};
K.toPower = K.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Je(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return he(i, a, o);
  if (r = ar(e.e / pe), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= gh)
    return t = Xu(s, i, n, a), e.s < 0 ? new s(1).div(t) : he(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Je(+i, u), r = n == 0 || !isFinite(n) ? ar(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (be = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = di(e.times(ln(i, a + n)), a), t.d && (t = he(t, a + 5, 1), Aa(t.d, a, o) && (r = a + 10, t = he(di(e.times(ln(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = he(t, a + 1, 0)))), t.s = l, be = !0, s.rounding = o, he(t, a, o));
};
K.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (mr(e, 1, yn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = he(new t(a), e, r), n = Yr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
K.toSignificantDigits = K.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (mr(e, 1, yn), r === void 0 ? r = a.rounding : mr(r, 0, 8)), he(new a(n), e, r);
};
K.toString = function() {
  var e = this, r = e.constructor, n = Yr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
K.truncated = K.trunc = function() {
  return he(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, r = e.constructor, n = Yr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function rr(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = pe - a.length, n && (o += xr(n)), o += a;
    l = e[r], a = l + "", n = pe - a.length, n && (o += xr(n));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function mr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(mn + e);
}
function Aa(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += pe, t = 0) : (t = Math.ceil((r + 1) / pe), r %= pe), o = Je(10, pe - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Je(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Je(10, r - 3) - 1, l;
}
function Gt(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += li.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function yh(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / wo(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Gn(e, 1, r.times(t), new e(1));
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
    var u, d, v, f, m, y, b, h, w, P, O, S, I, V, N, g, k, Y, M, F, X = a.constructor, A = a.s == t.s ? 1 : -1, z = a.d, B = t.d;
    if (!z || !z[0] || !B || !B[0])
      return new X(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (z ? B && z[0] == B[0] : !B) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          z && z[0] == 0 || !B ? A * 0 : A / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Nr, m = pe, d = ar(a.e / m) - ar(t.e / m)), M = B.length, k = z.length, w = new X(A), P = w.d = [], v = 0; B[v] == (z[v] || 0); v++)
      ;
    if (B[v] > (z[v] || 0) && d--, o == null ? (V = o = X.precision, l = X.rounding) : i ? V = o + (a.e - t.e) + 1 : V = o, V < 0)
      P.push(1), y = !0;
    else {
      if (V = V / m + 2 | 0, v = 0, M == 1) {
        for (f = 0, B = B[0], V++; (v < k || f) && V--; v++)
          N = f * s + (z[v] || 0), P[v] = N / B | 0, f = N % B | 0;
        y = f || v < k;
      } else {
        for (f = s / (B[0] + 1) | 0, f > 1 && (B = e(B, f, s), z = e(z, f, s), M = B.length, k = z.length), g = M, O = z.slice(0, M), S = O.length; S < M; )
          O[S++] = 0;
        F = B.slice(), F.unshift(0), Y = B[0], B[1] >= s / 2 && ++Y;
        do
          f = 0, u = r(B, O, M, S), u < 0 ? (I = O[0], M != S && (I = I * s + (O[1] || 0)), f = I / Y | 0, f > 1 ? (f >= s && (f = s - 1), b = e(B, f, s), h = b.length, S = O.length, u = r(b, O, h, S), u == 1 && (f--, n(b, M < h ? F : B, h, s))) : (f == 0 && (u = f = 1), b = B.slice()), h = b.length, h < S && b.unshift(0), n(O, b, S, s), u == -1 && (S = O.length, u = r(B, O, M, S), u < 1 && (f++, n(O, M < S ? F : B, S, s))), S = O.length) : u === 0 && (f++, O = [0]), P[v++] = f, u && O[0] ? O[S++] = z[g] || 0 : (O = [z[g]], S = 1);
        while ((g++ < k || O[0] !== void 0) && V--);
        y = O[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (m == 1)
      w.e = d, Hu = y;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, he(w, i ? o + w.e + 1 : o, l, y);
    }
    return w;
  };
}();
function he(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (r != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = r - t, o < 0)
        o += pe, l = r, d = v[f = 0], s = d / Je(10, t - l - 1) % 10 | 0;
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
        o %= pe, l = o - pe + t, s = l < 0 ? 0 : d / Je(10, t - l - 1) % 10 | 0;
      }
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Je(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Je(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Je(10, (pe - r % pe) % pe), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Je(10, pe - o), v[f] = l > 0 ? (d / Je(10, t - l) % Je(10, l) | 0) * i : 0), u)
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
  return be && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Yr(e, r, n) {
  if (!e.isFinite())
    return Zu(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + xr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + xr(-t - 1) + o, n && (a = n - l) > 0 && (o += xr(a))) : t >= l ? (o += xr(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + xr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += xr(a))), o;
}
function yo(e, r) {
  var n = e[0];
  for (r *= pe; n >= 10; n /= 10)
    r++;
  return r;
}
function ao(e, r, n) {
  if (r > bh)
    throw be = !0, n && (e.precision = n), Error(Fu);
  return he(new e(ro), r, 1, !0);
}
function Er(e, r, n) {
  if (r > ui)
    throw Error(Fu);
  return he(new e(no), r, n, !0);
}
function qu(e) {
  var r = e.length - 1, n = r * pe + 1;
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
function Xu(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / pe + 4);
  for (be = !1; ; ) {
    if (n % 2 && (o = o.times(r), Bl(o.d, l) && (t = !0)), n = ar(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Bl(r.d, l);
  }
  return be = !0, o;
}
function Ml(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ku(e, r, n) {
  for (var a, t = new e(r[0]), o = 0; ++o < r.length; )
    if (a = new e(r[o]), a.s)
      t[n](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function di(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, y = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (be = !1, s = y) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Je(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = he(o.times(e), s, 1), n = n.times(++d), i = l.plus(Ee(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = he(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && Aa(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return he(l, f.precision = y, m, be = !0);
      else
        return f.precision = y, l;
    }
    l = i;
  }
}
function ln(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, y = 10, b = e, h = b.d, w = b.constructor, P = w.rounding, O = w.precision;
  if (b.s < 0 || !h || !h[0] || !b.e && h[0] == 1 && h.length == 1)
    return new w(h && !h[0] ? -1 / 0 : b.s != 1 ? NaN : h ? 0 : b);
  if (r == null ? (be = !1, d = O) : d = r, w.precision = d += y, n = rr(h), a = n.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      b = b.times(e), n = rr(b.d), a = n.charAt(0), m++;
    o = b.e, a > 1 ? (b = new w("0." + n), o++) : b = new w(a + "." + n.slice(1));
  } else
    return u = ao(w, d + 2, O).times(o + ""), b = ln(new w(a + "." + n.slice(1)), d - y).plus(u), w.precision = O, r == null ? he(b, O, P, be = !0) : b;
  for (v = b, s = l = b = Ee(b.minus(1), b.plus(1), d, 1), f = he(b.times(b), d, 1), t = 3; ; ) {
    if (l = he(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(ao(w, d + 2, O).times(o + ""))), s = Ee(s, new w(m), d, 1), r == null)
        if (Aa(s.d, d - y, P, i))
          w.precision = d += y, u = l = b = Ee(v.minus(1), v.plus(1), d, 1), f = he(b.times(b), d, 1), t = i = 1;
        else
          return he(s, w.precision = O, P, be = !0);
      else
        return w.precision = O, s;
    s = u, t += 2;
  }
}
function Zu(e) {
  return String(e.s * e.s / 0);
}
function vi(e, r) {
  var n, a, t;
  for ((n = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (a = r.search(/e/i)) > 0 ? (n < 0 && (n = a), n += +r.slice(a + 1), r = r.substring(0, a)) : n < 0 && (n = r.length), a = 0; r.charCodeAt(a) === 48; a++)
    ;
  for (t = r.length; r.charCodeAt(t - 1) === 48; --t)
    ;
  if (r = r.slice(a, t), r) {
    if (t -= a, e.e = n = n - a - 1, e.d = [], a = (n + 1) % pe, n < 0 && (a += pe), a < t) {
      for (a && e.d.push(+r.slice(0, a)), t -= pe; a < t; )
        e.d.push(+r.slice(a, a += pe));
      r = r.slice(a), a = pe - r.length;
    } else
      a -= t;
    for (; a--; )
      r += "0";
    e.d.push(+r), be && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function wh(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Gu.test(r))
      return vi(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (hh.test(r))
    n = 16, r = r.toLowerCase();
  else if (mh.test(r))
    n = 2;
  else if (ph.test(r))
    n = 8;
  else
    throw Error(mn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Xu(a, new a(n), o, o * 2)), u = Gt(r, n, Nr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = yo(u, d), e.d = u, be = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : sn.pow(2, s))), be = !0, e);
}
function Ch(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Gn(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / wo(5, n)), r = Gn(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Gn(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / pe);
  for (be = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = Ee(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Ee(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return be = !0, l.d.length = d + 1, l;
}
function wo(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Ju(e, r) {
  var n, a = r.s < 0, t = Er(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return jr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    jr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return jr = Ml(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    jr = Ml(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Xi(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, y = n !== void 0;
  if (y ? (mr(n, 1, yn), a === void 0 ? a = m.rounding : mr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Zu(e);
  else {
    for (d = Yr(e), l = d.indexOf("."), y ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Gt(Yr(f), 10, t), f.e = f.d.length), v = Gt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = y ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, n, a, 0, t), v = e.d, o = e.e, u = Hu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += li.charAt(v[l]);
      if (y) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Gt(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += li.charAt(v[l]);
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
function Bl(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Sh(e) {
  return new this(e).abs();
}
function kh(e) {
  return new this(e).acos();
}
function $h(e) {
  return new this(e).acosh();
}
function Th(e, r) {
  return new this(e).plus(r);
}
function Oh(e) {
  return new this(e).asin();
}
function Ph(e) {
  return new this(e).asinh();
}
function Vh(e) {
  return new this(e).atan();
}
function Ih(e) {
  return new this(e).atanh();
}
function Mh(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Er(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Er(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Er(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Ee(e, r, o, 1)), r = Er(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Ee(e, r, o, 1)), n;
}
function Bh(e) {
  return new this(e).cbrt();
}
function Eh(e) {
  return he(e = new this(e), e.e + 1, 2);
}
function Nh(e, r, n) {
  return new this(e).clamp(r, n);
}
function Dh(e) {
  if (!e || typeof e != "object")
    throw Error(bo + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    yn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -An,
    0,
    "toExpPos",
    0,
    An,
    "maxE",
    0,
    An,
    "minE",
    -An,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (n = o[r], t && (this[n] = si[n]), (a = e[n]) !== void 0)
      if (ar(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(mn + n + ": " + a);
  if (n = "crypto", t && (this[n] = si[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(ju);
      else
        this[n] = !1;
    else
      throw Error(mn + n + ": " + a);
  return this;
}
function Ah(e) {
  return new this(e).cos();
}
function zh(e) {
  return new this(e).cosh();
}
function Qu(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, El(o)) {
      u.s = o.s, be ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        be ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return vi(u, o.toString());
    } else if (s !== "string")
      throw Error(mn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Gu.test(o) ? vi(u, o) : wh(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Dh, t.clone = Qu, t.isDecimal = El, t.abs = Sh, t.acos = kh, t.acosh = $h, t.add = Th, t.asin = Oh, t.asinh = Ph, t.atan = Vh, t.atanh = Ih, t.atan2 = Mh, t.cbrt = Bh, t.ceil = Eh, t.clamp = Nh, t.cos = Ah, t.cosh = zh, t.div = Lh, t.exp = Rh, t.floor = Uh, t.hypot = Yh, t.ln = Hh, t.log = Fh, t.log10 = Wh, t.log2 = jh, t.max = Gh, t.min = qh, t.mod = Xh, t.mul = Kh, t.pow = Zh, t.random = Jh, t.round = Qh, t.sign = _h, t.sin = xh, t.sinh = ep, t.sqrt = rp, t.sub = np, t.sum = ap, t.tan = tp, t.tanh = op, t.trunc = ip, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Lh(e, r) {
  return new this(e).div(r);
}
function Rh(e) {
  return new this(e).exp();
}
function Uh(e) {
  return he(e = new this(e), e.e + 1, 3);
}
function Yh() {
  var e, r, n = new this(0);
  for (be = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      n.d && (n = n.plus(r.times(r)));
    else {
      if (r.s)
        return be = !0, new this(1 / 0);
      n = r;
    }
  return be = !0, n.sqrt();
}
function El(e) {
  return e instanceof sn || e && e.toStringTag === Wu || !1;
}
function Hh(e) {
  return new this(e).ln();
}
function Fh(e, r) {
  return new this(e).log(r);
}
function jh(e) {
  return new this(e).log(2);
}
function Wh(e) {
  return new this(e).log(10);
}
function Gh() {
  return Ku(this, arguments, "lt");
}
function qh() {
  return Ku(this, arguments, "gt");
}
function Xh(e, r) {
  return new this(e).mod(r);
}
function Kh(e, r) {
  return new this(e).mul(r);
}
function Zh(e, r) {
  return new this(e).pow(r);
}
function Jh(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : mr(e, 1, yn), a = Math.ceil(e / pe), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = r[o], t >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); o < a; )
        t = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(ju);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= pe, a && e && (t = Je(10, pe - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    n = 0, i = [0];
  else {
    for (n = -1; i[0] === 0; n -= pe)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < pe && (n -= pe - a);
  }
  return l.e = n, l.d = i, l;
}
function Qh(e) {
  return he(e = new this(e), e.e + 1, this.rounding);
}
function _h(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function xh(e) {
  return new this(e).sin();
}
function ep(e) {
  return new this(e).sinh();
}
function rp(e) {
  return new this(e).sqrt();
}
function np(e, r) {
  return new this(e).sub(r);
}
function ap() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (be = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return be = !0, he(n, this.precision, this.rounding);
}
function tp(e) {
  return new this(e).tan();
}
function op(e) {
  return new this(e).tanh();
}
function ip(e) {
  return he(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var sn = K.constructor = Qu(si);
ro = new sn(ro);
no = new sn(no);
var lp = {
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
  n: sp,
  classes: up
} = te("counter"), Nl = 100, Dl = 600, dp = ["inputmode", "readonly", "disabled"];
function vp(e, r) {
  var n = se("var-icon"), a = se("var-button"), t = se("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [E(
      "div",
      De({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [_(a, {
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
        default: me(() => [_(n, {
          name: "minus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), Te(E("input", {
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
      }, null, 46, dp), [[Qv, e.inputValue]]), _(a, {
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
        default: me(() => [_(n, {
          name: "plus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])],
      16
      /* FULL_PROPS */
    ), _(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var _u = ne({
  name: "VarCounter",
  components: {
    VarButton: vr,
    VarIcon: Ne,
    VarFormDetails: nr
  },
  directives: {
    Ripple: Ke
  },
  inheritAttrs: !1,
  props: lp,
  setup(e) {
    var r = $(""), {
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
    } = a ?? {}, d, v, f, m, y = () => l(e.rules, e.modelValue), b = (B) => {
      ze(() => {
        var {
          validateTrigger: D,
          rules: ae,
          modelValue: H
        } = e;
        o(D, B, ae, H);
      });
    }, h = () => {
      var {
        min: B
      } = e;
      C(e["onUpdate:modelValue"], B != null ? R(B) : 0), i();
    }, w = {
      reset: h,
      validate: y,
      resetValidation: i
    }, P = L(() => {
      var {
        max: B,
        modelValue: D
      } = e;
      return B != null && R(D) >= R(B);
    }), O = L(() => {
      var {
        min: B,
        modelValue: D
      } = e;
      return B != null && R(D) <= R(B);
    }), S = (B) => {
      var {
        decimalLength: D,
        max: ae,
        min: H
      } = e, G = R(B);
      return ae != null && G > R(ae) && (G = R(ae)), H != null && G < R(H) && (G = R(H)), B = String(G), D != null && (B = G.toFixed(R(D))), B;
    }, I = (B) => {
      var {
        lazyChange: D,
        onBeforeChange: ae
      } = e, {
        value: H
      } = B.target, G = S(H);
      D ? C(ae, R(G), z) : A(G), b("onInputChange");
    }, V = () => {
      var {
        disabled: B,
        readonly: D,
        disableDecrement: ae,
        decrementButton: H,
        lazyChange: G,
        step: x,
        modelValue: Z,
        onDecrement: J,
        onBeforeChange: Q
      } = e;
      if (!(u != null && u.value || s != null && s.value || B || D || ae || !H) && !O.value) {
        var oe = new sn(R(Z)).minus(new sn(R(x))).toString(), ce = S(oe), ke = R(ce);
        C(J, ke), G ? C(Q, ke, z) : (A(ce), b("onDecrement"));
      }
    }, N = () => {
      var {
        disabled: B,
        readonly: D,
        disableIncrement: ae,
        incrementButton: H,
        lazyChange: G,
        step: x,
        modelValue: Z,
        onIncrement: J,
        onBeforeChange: Q
      } = e;
      if (!(u != null && u.value || s != null && s.value || B || D || ae || !H) && !P.value) {
        var oe = new sn(R(Z)).plus(new sn(R(x))).toString(), ce = S(oe), ke = R(ce);
        C(J, ke), G ? C(Q, ke, z) : (A(ce), b("onIncrement"));
      }
    }, g = () => {
      var {
        press: B,
        lazyChange: D
      } = e;
      !B || D || (m = window.setTimeout(() => {
        X();
      }, Dl));
    }, k = () => {
      var {
        press: B,
        lazyChange: D
      } = e;
      !B || D || (f = window.setTimeout(() => {
        F();
      }, Dl));
    }, Y = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, M = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, F = () => {
      d = window.setTimeout(() => {
        N(), F();
      }, Nl);
    }, X = () => {
      v = window.setTimeout(() => {
        V(), X();
      }, Nl);
    }, A = (B) => {
      r.value = B;
      var D = R(B);
      C(e["onUpdate:modelValue"], D);
    }, z = (B) => {
      A(S(String(B))), b("onLazyChange");
    };
    return C(n, w), de(() => e.modelValue, (B) => {
      A(S(String(B))), C(e.onChange, R(B));
    }), A(S(String(e.modelValue))), {
      n: sp,
      classes: up,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: P,
      isMin: O,
      validate: y,
      reset: h,
      resetValidation: i,
      handleChange: I,
      decrement: V,
      increment: N,
      pressDecrement: g,
      pressIncrement: k,
      releaseDecrement: Y,
      releaseIncrement: M,
      toSizeUnit: we,
      toNumber: R
    };
  }
});
_u.render = vp;
const za = _u;
ie(za);
var bk = za, xu = 60, ed = xu * 60, rd = ed * 24, fp = rd * 7, qn = 1e3, Eo = xu * qn, Al = ed * qn, cp = rd * qn, mp = fp * qn, Ki = "millisecond", zn = "second", Ln = "minute", Rn = "hour", en = "day", qt = "week", Br = "month", nd = "quarter", rn = "year", Un = "date", hp = "YYYY-MM-DDTHH:mm:ssZ", zl = "Invalid Date", pp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, gp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const bp = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var fi = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, yp = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + fi(t, 2, "0") + ":" + fi(o, 2, "0");
}, wp = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Br), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Br);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, Cp = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, Sp = function(r) {
  var n = {
    M: Br,
    y: rn,
    w: qt,
    d: en,
    D: Un,
    h: Rn,
    m: Ln,
    s: zn,
    ms: Ki,
    Q: nd
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, kp = function(r) {
  return r === void 0;
};
const $p = {
  s: fi,
  z: yp,
  m: wp,
  a: Cp,
  p: Sp,
  u: kp
};
var da = "en", Sn = {};
Sn[da] = bp;
var Zi = function(r) {
  return r instanceof Co;
}, to = function e(r, n, a) {
  var t;
  if (!r)
    return da;
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
  return !a && t && (da = t), t || !a && da;
}, fe = function(r, n) {
  if (Zi(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new Co(a);
}, Tp = function(r, n) {
  return fe(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Be = $p;
Be.l = to;
Be.i = Zi;
Be.w = Tp;
var Op = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Be.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(pp);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, Co = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = to(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = Op(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Be;
  }, r.isValid = function() {
    return this.$d.toString() !== zl;
  }, r.isSame = function(a, t) {
    var o = fe(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return fe(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < fe(a);
  }, r.$g = function(a, t, o) {
    return Be.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Be.u(t) ? !0 : t, i = Be.p(a), s = function(w, P) {
      var O = Be.w(o.$u ? Date.UTC(o.$y, P, w) : new Date(o.$y, P, w), o);
      return l ? O : O.endOf(en);
    }, u = function(w, P) {
      var O = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Be.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? O : S).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case rn:
        return l ? s(1, 0) : s(31, 11);
      case Br:
        return l ? s(1, v) : s(0, v + 1);
      case qt: {
        var y = this.$locale().weekStart || 0, b = (d < y ? d + 7 : d) - y;
        return s(l ? f - b : f + (6 - b), v);
      }
      case en:
      case Un:
        return u(m + "Hours", 0);
      case Rn:
        return u(m + "Minutes", 1);
      case Ln:
        return u(m + "Seconds", 2);
      case zn:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Be.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[en] = i + "Date", o[Un] = i + "Date", o[Br] = i + "Month", o[rn] = i + "FullYear", o[Rn] = i + "Hours", o[Ln] = i + "Minutes", o[zn] = i + "Seconds", o[Ki] = i + "Milliseconds", o)[l], u = l === en ? this.$D + (t - this.$W) : t;
    if (l === Br || l === rn) {
      var d = this.clone().set(Un, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Un, Math.min(this.$D, d.daysInMonth())).$d;
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
      var m = fe(o);
      return Be.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Br)
      return this.set(Br, this.$M + a);
    if (i === rn)
      return this.set(rn, this.$y + a);
    if (i === en)
      return s(1);
    if (i === qt)
      return s(7);
    var u = (l = {}, l[Ln] = Eo, l[Rn] = Al, l[zn] = qn, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Be.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || zl;
    var l = a || hp, i = Be.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, y = function(O, S, I, V) {
      return O && (O[S] || O(t, l)) || I[S].slice(0, V);
    }, b = function(O) {
      return Be.s(s % 12 || 12, O, "0");
    }, h = m || function(P, O, S) {
      var I = P < 12 ? "AM" : "PM";
      return S ? I.toLowerCase() : I;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Be.s(d + 1, 2, "0"),
      MMM: y(o.monthsShort, d, f, 3),
      MMMM: y(f, d),
      D: this.$D,
      DD: Be.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: y(o.weekdaysMin, this.$W, v, 2),
      ddd: y(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Be.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: h(s, u, !0),
      A: h(s, u, !1),
      m: String(u),
      mm: Be.s(u, 2, "0"),
      s: String(this.$s),
      ss: Be.s(this.$s, 2, "0"),
      SSS: Be.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(gp, function(P, O) {
      return O || w[P] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Be.p(t), s = fe(a), u = (s.utcOffset() - this.utcOffset()) * Eo, d = this - s, v = Be.m(this, s);
    return v = (l = {}, l[rn] = v / 12, l[Br] = v, l[nd] = v / 3, l[qt] = (d - u) / mp, l[en] = (d - u) / cp, l[Rn] = d / Al, l[Ln] = d / Eo, l[zn] = d / qn, l)[i] || d, o ? v : Be.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Br).$D;
  }, r.$locale = function() {
    return Sn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = to(a, t, !0);
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
}(), ad = Co.prototype;
fe.prototype = ad;
[["$ms", Ki], ["$s", zn], ["$m", Ln], ["$H", Rn], ["$W", en], ["$M", Br], ["$y", rn], ["$D", Un]].forEach(function(e) {
  ad[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
fe.extend = function(e, r) {
  return e.$i || (e(r, Co, fe), e.$i = !0), fe;
};
fe.locale = to;
fe.isDayjs = Zi;
fe.unix = function(e) {
  return fe(e * 1e3);
};
fe.en = Sn[da];
fe.Ls = Sn;
fe.p = {};
const td = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, od = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Pp(e) {
  return ["date", "month"].includes(e);
}
var Xt = [{
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
}], Vp = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Pp
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
  n: Ip
} = te("picker-header");
function Mp(e, r) {
  var n = se("var-icon"), a = se("var-button");
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [_(a, {
      round: "",
      text: "",
      style: {
        filter: "opacity(0.54)"
      },
      disabled: e.disabled.left,
      onClick: r[0] || (r[0] = (t) => e.checkDate("prev"))
    }, {
      default: me(() => [_(n, {
        name: "chevron-left"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), E(
      "div",
      {
        class: c(e.n("value")),
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [_(Fe, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(p(), T(
          "div",
          {
            key: e.showDate
          },
          le(e.showDate),
          1
          /* TEXT */
        ))]),
        _: 1
        /* STABLE */
      }, 8, ["name"])],
      2
      /* CLASS */
    ), _(a, {
      round: "",
      text: "",
      style: {
        filter: "opacity(0.54)"
      },
      disabled: e.disabled.right,
      onClick: r[2] || (r[2] = (t) => e.checkDate("next"))
    }, {
      default: me(() => [_(n, {
        name: "chevron-right"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])],
    2
    /* CLASS */
  );
}
var id = ne({
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
    } = r, a = $(!1), t = $(0), o = L(() => {
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
    return de(() => e.date, () => {
      t.value = 0;
    }), {
      n: Ip,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
id.render = Mp;
const ld = id;
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
fe.extend(td);
fe.extend(od);
var {
  n: Rt,
  classes: Bp
} = te("month-picker"), {
  n: Ut
} = te("date-picker");
function Ep(e, r) {
  var n = se("panel-header"), a = se("var-button");
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [E(
      "div",
      {
        class: c(e.n("content"))
      },
      [_(n, {
        ref: "headerEl",
        type: "month",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickYear,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), _(Fe, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(p(), T("ul", {
          key: e.panelKey
        }, [(p(!0), T(
          Me,
          null,
          We(e.MONTH_LIST, (t) => (p(), T("li", {
            key: t.index
          }, [_(a, De({
            type: "primary",
            "var-month-picker-cover": "",
            ripple: !1,
            elevation: e.componentProps.buttonElevation
          }, ci({}, e.buttonProps(t.index)), {
            onClick: (o) => e.chooseMonth(t, o)
          }), {
            default: me(() => [$e(
              le(e.getMonthAbbr(t.index)),
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
var sd = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: ld
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
    } = r, [a, t] = e.current.split("-"), o = $(!1), l = $(0), i = $(null), s = Ye({
      left: !1,
      right: !1
    }), u = L(() => e.choose.chooseYear === e.preview.previewYear), d = L(() => e.preview.previewYear === a), v = (P) => {
      var O, S;
      return (O = (S = _e.value.datePickerMonthDict) == null ? void 0 : S[P].abbr) != null ? O : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: O
        },
        componentProps: {
          min: S,
          max: I
        }
      } = e, V = !0, N = !0, g = O + "-" + P;
      return I && (V = fe(g).isSameOrBefore(fe(I), "month")), S && (N = fe(g).isSameOrAfter(fe(S), "month")), V && N;
    }, m = (P) => {
      var {
        choose: {
          chooseMonths: O,
          chooseDays: S,
          chooseRangeMonth: I
        },
        componentProps: {
          type: V,
          range: N
        }
      } = e;
      if (N) {
        if (!I.length)
          return !1;
        var g = fe(P).isSameOrBefore(fe(I[1]), "month"), k = fe(P).isSameOrAfter(fe(I[0]), "month");
        return g && k;
      }
      return V === "month" ? O.includes(P) : S.some((Y) => Y.includes(P));
    }, y = (P) => {
      var {
        choose: {
          chooseMonth: O
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: I,
          color: V,
          multiple: N,
          range: g
        }
      } = e, k = S + "-" + P, Y = () => g || N ? m(k) : (O == null ? void 0 : O.index) === P && u.value, M = () => f(P) ? I ? !I(k) : !1 : !0, F = M(), X = () => F ? !0 : g || N ? !m(k) : !u.value || (O == null ? void 0 : O.index) !== P, A = () => d.value && t === P && e.componentProps.showCurrent ? (g || N || u.value) && F ? !0 : g || N ? !m(k) : u.value ? (O == null ? void 0 : O.index) !== t : !0 : !1, z = () => F ? "" : A() ? V ?? "" : Y() ? "" : Ut() + "-color-cover", B = z().startsWith(Ut());
      return {
        outline: A(),
        text: X(),
        color: X() ? "" : V,
        textColor: B ? "" : z(),
        [Ut() + "-color-cover"]: B,
        class: Bp(Rt("button"), [F, Rt("button--disabled")]),
        disabled: F
      };
    }, b = (P, O) => {
      var S = O.currentTarget;
      S.classList.contains(Rt("button--disabled")) || n("choose-month", P);
    }, h = (P) => {
      o.value = P === "prev", l.value += P === "prev" ? -1 : 1, n("check-preview", "year", P);
    }, w = (P) => {
      i.value.checkDate(P);
    };
    return de(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: O,
          max: S
        }
      } = e;
      S && (s.right = !fe("" + (R(P) + 1)).isSameOrBefore(fe(S), "year")), O && (s.left = !fe("" + (R(P) - 1)).isSameOrAfter(fe(O), "year"));
    }, {
      immediate: !0
    }), {
      n: Rt,
      nDate: Ut,
      pack: _e,
      MONTH_LIST: Xt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
      buttonProps: y,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: h
    };
  }
});
sd.render = Ep;
const Np = sd;
var {
  n: Ll,
  classes: Dp
} = te("year-picker"), Ap = ["onClick"];
function zp(e, r) {
  return p(), T(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), T(
      Me,
      null,
      We(e.yearList, (n) => (p(), T("li", {
        key: n,
        class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
        style: q({
          color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(n)
      }, le(n), 15, Ap))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var ud = ne({
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
        var d = fe(i).format("YYYY-MM-D"), v = R(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = fe(s).format("YYYY-MM-D"), m = R(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var y = u[0]; y >= u[1]; y--)
        o.push(y);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return tr(() => {
      var o = document.querySelector("." + Ll("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Ll,
      classes: Dp,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
ud.render = zp;
const Lp = ud;
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
fe.extend(td);
fe.extend(od);
var {
  n: Dn,
  classes: Rp
} = te("day-picker"), {
  n: Yt
} = te("date-picker");
function Up(e, r) {
  var n = se("panel-header"), a = se("var-button");
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [E(
      "div",
      {
        class: c(e.n("content"))
      },
      [_(n, {
        ref: "headerEl",
        type: "day",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickMonth,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), _(Fe, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(p(), T("div", {
          key: e.panelKey
        }, [E(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(p(!0), T(
            Me,
            null,
            We(e.sortWeekList, (t) => (p(), T(
              "li",
              {
                key: t.index
              },
              le(e.getDayAbbr(t.index)),
              1
              /* TEXT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        ), E(
          "ul",
          {
            class: c(e.n("body"))
          },
          [(p(!0), T(
            Me,
            null,
            We(e.days, (t, o) => (p(), T("li", {
              key: o
            }, [_(a, De({
              type: "primary",
              "var-day-picker-cover": "",
              round: "",
              ripple: !1,
              elevation: e.componentProps.buttonElevation
            }, mi({}, e.buttonProps(t)), {
              onClick: (l) => e.chooseDay(t, l)
            }), {
              default: me(() => [$e(
                le(e.filterDay(t)),
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
var dd = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: ld
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
    } = r, [a, t, o] = e.current.split("-"), l = $([]), i = $(!1), s = $(0), u = $(null), d = Ye({
      left: !1,
      right: !1
    }), v = L(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = L(() => {
      var g;
      return e.choose.chooseYear === e.preview.previewYear && ((g = e.choose.chooseMonth) == null ? void 0 : g.index) === e.preview.previewMonth.index;
    }), m = L(() => {
      var g = sa.findIndex((k) => k.index === e.componentProps.firstDayOfWeek);
      return g === -1 || g === 0 ? sa : sa.slice(g).concat(sa.slice(0, g));
    }), y = (g) => {
      var k, Y;
      return (k = (Y = _e.value.datePickerWeekDict) == null ? void 0 : Y[g].abbr) != null ? k : "";
    }, b = (g) => g > 0 ? g : "", h = () => {
      var {
        preview: {
          previewMonth: g,
          previewYear: k
        }
      } = e, Y = fe(k + "-" + g.index).daysInMonth(), M = fe(k + "-" + g.index + "-01").day(), F = m.value.findIndex((X) => X.index === "" + M);
      l.value = [...Array(F).fill(-1), ...Array.from(Array(Y + 1).keys())].filter((X) => X);
    }, w = () => {
      var {
        preview: {
          previewYear: g,
          previewMonth: k
        },
        componentProps: {
          max: Y,
          min: M
        }
      } = e;
      if (Y) {
        var F = g + "-" + (R(k.index) + 1);
        d.right = !fe(F).isSameOrBefore(fe(Y), "month");
      }
      if (M) {
        var X = g + "-" + (R(k.index) - 1);
        d.left = !fe(X).isSameOrAfter(fe(M), "month");
      }
    }, P = (g) => {
      var {
        preview: {
          previewYear: k,
          previewMonth: Y
        },
        componentProps: {
          min: M,
          max: F
        }
      } = e, X = !0, A = !0, z = k + "-" + Y.index + "-" + g;
      return F && (X = fe(z).isSameOrBefore(fe(F), "day")), M && (A = fe(z).isSameOrAfter(fe(M), "day")), X && A;
    }, O = (g) => {
      var {
        choose: {
          chooseDays: k,
          chooseRangeDay: Y
        },
        componentProps: {
          range: M
        }
      } = e;
      if (M) {
        if (!Y.length)
          return !1;
        var F = fe(g).isSameOrBefore(fe(Y[1]), "day"), X = fe(g).isSameOrAfter(fe(Y[0]), "day");
        return F && X;
      }
      return k.includes(g);
    }, S = (g) => {
      if (g < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Dn("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: k
        },
        preview: {
          previewYear: Y,
          previewMonth: M
        },
        componentProps: {
          allowedDates: F,
          color: X,
          multiple: A,
          range: z
        }
      } = e, B = Y + "-" + M.index + "-" + g, D = () => z || A ? O(B) : R(k) === g && f.value, ae = () => P(g) ? F ? !F(B) : !1 : !0, H = ae(), G = () => H ? !0 : z || A ? !O(B) : !f.value || R(k) !== g, x = () => v.value && R(o) === g && e.componentProps.showCurrent ? (z || A || f.value) && H ? !0 : z || A ? !O(B) : f.value ? k !== o : !0 : !1, Z = () => H ? "" : x() ? X ?? "" : D() ? "" : Yt() + "-color-cover", J = Z().startsWith(Yt());
      return {
        text: G(),
        outline: x(),
        textColor: J ? "" : Z(),
        [Yt() + "-color-cover"]: J,
        class: Rp(Dn("button"), Dn("button--usable"), [H, Dn("button--disabled")]),
        disabled: H
      };
    }, I = (g) => {
      i.value = g === "prev", s.value += g === "prev" ? -1 : 1, n("check-preview", "month", g);
    }, V = (g, k) => {
      var Y = k.currentTarget;
      Y.classList.contains(Dn("button--disabled")) || n("choose-day", g);
    }, N = (g) => {
      u.value.checkDate(g);
    };
    return tr(() => {
      h(), w();
    }), de(() => e.preview, () => {
      h(), w();
    }), {
      n: Dn,
      nDate: Yt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: N,
      filterDay: b,
      getDayAbbr: y,
      checkDate: I,
      chooseDay: V,
      buttonProps: S
    };
  }
});
dd.render = Up;
const Yp = dd;
var {
  n: Hp,
  classes: Fp
} = te("date-picker");
function jp(e, r) {
  var n = se("year-picker-panel"), a = se("month-picker-panel"), t = se("day-picker-panel");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [E(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [E(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: r[0] || (r[0] = (o) => e.clickEl("year"))
        },
        [j(e.$slots, "year", {
          year: e.chooseYear
        }, () => [$e(
          le(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), E(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: r[1] || (r[1] = (o) => e.clickEl("date"))
        },
        [_(Fe, {
          name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
        }, {
          default: me(() => {
            var o, l, i;
            return [e.type === "month" ? (p(), T("div", {
              key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
            }, [e.range ? j(e.$slots, "range", {
              key: 0,
              choose: e.getChoose.chooseRangeMonth
            }, () => [$e(
              le(e.getMonthTitle),
              1
              /* TEXT */
            )]) : e.multiple ? j(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseMonths
            }, () => [$e(
              le(e.getMonthTitle),
              1
              /* TEXT */
            )]) : j(e.$slots, "month", {
              key: 2,
              month: (l = e.chooseMonth) == null ? void 0 : l.index,
              year: e.chooseYear
            }, () => [$e(
              le(e.getMonthTitle),
              1
              /* TEXT */
            )])])) : (p(), T("div", {
              key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
            }, [e.range ? j(e.$slots, "range", {
              key: 0,
              choose: e.formatRange
            }, () => [$e(
              le(e.getDateTitle),
              1
              /* TEXT */
            )]) : e.multiple ? j(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseDays
            }, () => [$e(
              le(e.getDateTitle),
              1
              /* TEXT */
            )]) : j(e.$slots, "date", Ot(De({
              key: 2
            }, e.slotProps)), () => [$e(
              le(e.getDateTitle),
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
    ), E(
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
      [_(Fe, {
        name: e.n() + "-panel-fade"
      }, {
        default: me(() => [e.getPanelType === "year" ? (p(), Ce(n, {
          key: 0,
          "component-props": e.componentProps,
          preview: e.previewYear,
          onChooseYear: e.getChooseYear
        }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (p(), Ce(a, {
          key: 1,
          ref: "monthPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "click-year": () => e.clickEl("year"),
          "component-props": e.componentProps,
          onChooseMonth: e.getChooseMonth,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (p(), Ce(t, {
          key: 2,
          ref: "dayPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "component-props": e.componentProps,
          "click-month": () => e.clickEl("month"),
          onChooseDay: e.getChooseDay,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"])) : ee("v-if", !0)]),
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
var vd = ne({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Np,
    YearPickerPanel: Lp,
    DayPickerPanel: Yp
  },
  props: Vp,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = fe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Xt.find((ve) => ve.index === i), u = $(!1), d = $(!1), v = $(!0), f = $(), m = $(), y = $(), b = $(s), h = $(l), w = $(!1), P = $([]), O = $([]), S = $([]), I = $([]), V = $(null), N = $(null), g = Ye({
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
    }), k = L(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: y.value,
      chooseMonths: P.value,
      chooseDays: O.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: I.value
    })), Y = L(() => ({
      previewMonth: b.value,
      previewYear: h.value
    })), M = L(() => {
      var {
        multiple: ve,
        range: Se
      } = e;
      if (Se)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var ge = "";
      if (f.value) {
        var Oe, Pe;
        ge = (Oe = (Pe = _e.value.datePickerMonthDict) == null ? void 0 : Pe[f.value.index].name) != null ? Oe : "";
      }
      return ve ? "" + P.value.length + _e.value.datePickerSelected : ge;
    }), F = L(() => {
      var ve, Se, ge, Oe, {
        multiple: Pe,
        range: je
      } = e;
      if (je) {
        var lr = I.value.map((Io) => fe(Io).format("YYYY-MM-DD"));
        return lr.length ? lr[0] + " ~ " + lr[1] : "";
      }
      if (Pe)
        return "" + O.value.length + _e.value.datePickerSelected;
      if (!m.value || !f.value || !y.value)
        return "";
      var Cr = fe(m.value + "-" + f.value.index + "-" + y.value).day(), Nn = sa.find((Io) => Io.index === "" + Cr), ll = (ve = (Se = _e.value.datePickerWeekDict) == null ? void 0 : Se[Nn.index].name) != null ? ve : "", jv = (ge = (Oe = _e.value.datePickerMonthDict) == null ? void 0 : Oe[f.value.index].name) != null ? ge : "", Wv = kn(y.value, 2, "0");
      return _e.value.lang === "zh-CN" ? f.value.index + "-" + Wv + " " + ll.slice(0, 3) : ll.slice(0, 3) + ", " + jv.slice(0, 3) + " " + y.value;
    }), X = L(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), A = L(() => !e.touchable || ["", "year"].includes(X.value)), z = L(() => {
      var ve, Se, ge, Oe, Pe = fe(m.value + "-" + ((ve = f.value) == null ? void 0 : ve.index) + "-" + y.value).day(), je = y.value ? kn(y.value, 2, "0") : "";
      return {
        week: "" + Pe,
        year: (Se = m.value) != null ? Se : "",
        month: (ge = (Oe = f.value) == null ? void 0 : Oe.index) != null ? ge : "",
        date: je
      };
    }), B = L(() => k.value.chooseRangeDay.map((ve) => fe(ve).format("YYYY-MM-DD"))), D = L(() => m.value === h.value), ae = L(() => {
      var ve;
      return ((ve = f.value) == null ? void 0 : ve.index) === b.value.index;
    }), H = (ve) => {
      ve === "year" ? u.value = !0 : ve === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, G = (ve) => {
      if (!A.value) {
        var {
          clientX: Se,
          clientY: ge
        } = ve.touches[0];
        r = Se, n = ge;
      }
    }, x = (ve, Se) => ve >= Se && ve > 20 ? "x" : "y", Z = (ve) => {
      if (!A.value) {
        var {
          clientX: Se,
          clientY: ge
        } = ve.touches[0], Oe = Se - r, Pe = ge - n;
        t = x(Math.abs(Oe), Math.abs(Pe)), a = Oe > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(A.value || t !== "x")) {
        var ve = X.value === "month" ? V : N;
        fo(() => {
          ve.value.forwardRef(a), Ge();
        });
      }
    }, Q = (ve, Se) => {
      var ge = Se === "month" ? S : I;
      if (ge.value = v.value ? [ve, ve] : [ge.value[0], ve], v.value = !v.value, v.value) {
        var Oe = fe(ge.value[0]).isAfter(ge.value[1]), Pe = Oe ? [ge.value[1], ge.value[0]] : [...ge.value];
        C(e["onUpdate:modelValue"], Pe), C(e.onChange, Pe);
      }
    }, oe = (ve, Se) => {
      var ge = Se === "month" ? P : O, Oe = Se === "month" ? "YYYY-MM" : "YYYY-MM-DD", Pe = ge.value.map((lr) => fe(lr).format(Oe)), je = Pe.findIndex((lr) => lr === ve);
      je === -1 ? Pe.push(ve) : Pe.splice(je, 1), C(e["onUpdate:modelValue"], Pe), C(e.onChange, Pe);
    }, ce = (ve, Se) => !m.value || !f.value ? !1 : D.value ? ve === "month" ? Se.index < f.value.index : ae.value ? Se < R(y.value) : f.value.index > b.value.index : m.value > h.value, ke = (ve) => {
      var {
        readonly: Se,
        range: ge,
        multiple: Oe,
        onChange: Pe,
        "onUpdate:modelValue": je
      } = e;
      if (!(ve < 0 || Se)) {
        w.value = ce("day", ve);
        var lr = h.value + "-" + b.value.index + "-" + ve, Cr = fe(lr).format("YYYY-MM-DD");
        ge ? Q(Cr, "day") : Oe ? oe(Cr, "day") : (C(je, Cr), C(Pe, Cr));
      }
    }, Ie = (ve) => {
      var {
        type: Se,
        readonly: ge,
        range: Oe,
        multiple: Pe,
        onChange: je,
        onPreview: lr,
        "onUpdate:modelValue": Cr
      } = e;
      if (w.value = ce("month", ve), Se === "month" && !ge) {
        var Nn = h.value + "-" + ve.index;
        Oe ? Q(Nn, "month") : Pe ? oe(Nn, "month") : (C(Cr, Nn), C(je, Nn));
      } else
        b.value = ve, C(lr, R(h.value), R(b.value.index));
      d.value = !1;
    }, W = (ve) => {
      h.value = "" + ve, u.value = !1, d.value = !0, C(e.onPreview, R(h.value), R(b.value.index));
    }, re = (ve, Se) => {
      var ge = Se === "prev" ? -1 : 1;
      if (ve === "year")
        h.value = "" + (R(h.value) + ge);
      else {
        var Oe = R(b.value.index) + ge;
        Oe < 1 && (h.value = "" + (R(h.value) - 1), Oe = 12), Oe > 12 && (h.value = "" + (R(h.value) + 1), Oe = 1), b.value = Xt.find((Pe) => R(Pe.index) === Oe);
      }
      C(e.onPreview, R(h.value), R(b.value.index));
    }, ue = () => (e.multiple || e.range) && !Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, ye = (ve) => Ve(ve) ? !1 : ve === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ue = (ve, Se) => {
      var ge = Se === "month" ? S : I, Oe = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Pe = ve.map((Cr) => fe(Cr).format(Oe)).slice(0, 2), je = ge.value.some((Cr) => ye(Cr));
      if (!je) {
        ge.value = Pe;
        var lr = fe(ge.value[0]).isAfter(ge.value[1]);
        ge.value.length === 2 && lr && (ge.value = [ge.value[1], ge.value[0]]);
      }
    }, Le = (ve, Se) => {
      var ge = Se === "month" ? P : O, Oe = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Pe = Array.from(new Set(ve.map((je) => fe(je).format(Oe))));
      ge.value = Pe.filter((je) => je !== "Invalid Date");
    }, He = (ve) => {
      var Se = fe(ve).format("YYYY-MM-D");
      if (!ye(Se)) {
        var [ge, Oe, Pe] = Se.split("-"), je = Xt.find((lr) => lr.index === Oe);
        f.value = je, m.value = ge, y.value = Pe, b.value = je, h.value = ge;
      }
    }, Ge = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return de(() => e.modelValue, (ve) => {
      if (!(!ue() || ye(ve) || !ve))
        if (e.range) {
          if (!Ve(ve))
            return;
          v.value = ve.length !== 1, Ue(ve, e.type);
        } else if (e.multiple) {
          if (!Ve(ve))
            return;
          Le(ve, e.type);
        } else
          He(ve);
    }, {
      immediate: !0
    }), de(X, Ge), {
      n: Hp,
      classes: Fp,
      monthPanelEl: V,
      dayPanelEl: N,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: y,
      previewYear: h,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: M,
      getDateTitle: F,
      getPanelType: X,
      getChoose: k,
      getPreview: Y,
      componentProps: g,
      slotProps: z,
      formatRange: B,
      clickEl: H,
      handleTouchstart: G,
      handleTouchmove: Z,
      handleTouchend: J,
      getChooseDay: ke,
      getChooseMonth: Ie,
      getChooseYear: W,
      checkPreview: re,
      formatElevation: hr
    };
  }
});
vd.render = jp;
const La = vd;
ie(La);
var yk = La;
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
function Wp(e) {
  return ["left", "center", "right"].includes(e);
}
var Gp = hi({
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
    validator: Wp
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
}, xe(Vt, [
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
  n: qp,
  classes: Xp
} = te("dialog");
function Kp(e, r) {
  var n = se("var-button"), a = se("var-popup");
  return p(), Ce(a, {
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
    default: me(() => [E(
      "div",
      De({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: pi({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [E(
        "div",
        {
          class: c(e.n("title"))
        },
        [j(e.$slots, "title", {}, () => [$e(
          le(e.dt(e.title, e.pack.dialogTitle)),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), E(
        "div",
        {
          class: c(e.n("message")),
          style: q({
            textAlign: e.messageAlign
          })
        },
        [j(e.$slots, "default", {}, () => [$e(
          le(e.message),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      ), E(
        "div",
        {
          class: c(e.n("actions"))
        },
        [e.cancelButton ? (p(), Ce(n, {
          key: 0,
          class: c(e.classes(e.n("button"), e.n("cancel-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.cancelButtonTextColor,
          color: e.cancelButtonColor,
          onClick: e.cancel
        }, {
          default: me(() => [$e(
            le(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : ee("v-if", !0), e.confirmButton ? (p(), Ce(n, {
          key: 1,
          class: c(e.classes(e.n("button"), e.n("confirm-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.confirmButtonTextColor,
          color: e.confirmButtonColor,
          onClick: e.confirm
        }, {
          default: me(() => [$e(
            le(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : ee("v-if", !0)],
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
var fd = ne({
  name: "VarDialog",
  components: {
    VarPopup: Ur,
    VarButton: vr
  },
  inheritAttrs: !1,
  props: Gp,
  setup(e) {
    var r = $(!1), n = $(!1), a = () => C(e["onUpdate:show"], !1), t = () => {
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
    return de(() => e.show, (i) => {
      r.value = i;
    }, {
      immediate: !0
    }), de(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        n.value = !1;
        return;
      }
      n.value = i;
    }, {
      immediate: !0
    }), {
      n: qp,
      classes: Xp,
      pack: _e,
      dt: vo,
      popupShow: r,
      popupCloseOnClickOverlay: n,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: we
    };
  }
});
fd.render = Kp;
const Et = fd;
function oo() {
  return oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, oo.apply(this, arguments);
}
var an, io = {};
function Zp(e) {
  return e === void 0 && (e = {}), Xe(e) ? oo({}, io, {
    message: e
  }) : oo({}, io, e);
}
function Kr(e) {
  return aa() ? new Promise((r) => {
    Kr.close();
    var n = Zp(e), a = Ye(n);
    a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = ta(Et, a, {
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
        C(a.onClosed), t(), an === a && (an = null);
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
  io = e;
};
Kr.resetDefaultOptions = function() {
  io = {};
};
Kr.close = function() {
  if (an != null) {
    var e = an;
    an = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Kr.Component = Et;
ie(Et);
ie(Et, Kr);
var wk = Et, Jp = {
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
  n: Qp,
  classes: _p
} = te("divider");
function xp(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [e.vertical ? ee("v-if", !0) : j(e.$slots, "default", {
      key: 0
    }, () => [e.description ? (p(), T(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      le(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var cd = ne({
  name: "VarDivider",
  props: Jp,
  setup(e, r) {
    var {
      slots: n
    } = r, a = $(!1), t = L(() => {
      var {
        vertical: i,
        inset: s
      } = e;
      return !i && s === !0;
    }), o = L(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e;
      if (Ei(i) || s)
        return {
          margin: u
        };
      var d = R(i), v = Math.abs(d) + (i + "").replace(d + "", "");
      return {
        margin: u,
        width: "calc(100% - " + we(v) + ")",
        left: d > 0 ? we(v) : we(0)
      };
    }), l = () => {
      var {
        description: i,
        vertical: s
      } = e;
      a.value = (n.default || i != null) && !s;
    };
    return tr(() => {
      l();
    }), Tt(() => {
      l();
    }), {
      n: Qp,
      classes: _p,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
cd.render = xp;
const Ra = cd;
ie(Ra);
var Ck = Ra, eg = {
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
  },
  onClick: U()
};
function lo() {
  return lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, lo.apply(this, arguments);
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
function rg(e) {
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
var {
  n: ng,
  classes: ag
} = te("drag");
function tg(e, r) {
  return p(), Ce(Jr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [E(
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
      }),
      onClick: r[4] || (r[4] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    }, e.getAttrs()),
    [j(e.$slots, "default")],
    16
    /* FULL_PROPS */
  )], 8, ["to", "disabled"]);
}
var md = ne({
  name: "VarDrag",
  inheritAttrs: !1,
  props: eg,
  setup(e, r) {
    var {
      attrs: n
    } = r, a = $(null), t = $(0), o = $(0), l = Ye({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), i = $(!1), s = $(!1), u = $(!1), {
      touching: d,
      moveX: v,
      moveY: f,
      startTouch: m,
      moveTouch: y,
      endTouch: b,
      resetTouch: h
    } = Li(), {
      disabled: w
    } = oa(), P = null, O = (B) => {
      e.disabled || (P && window.clearTimeout(P), N(), m(B), u.value = !1);
    }, S = /* @__PURE__ */ function() {
      var B = rg(function* (D) {
        !d.value || e.disabled || (D.preventDefault(), s.value = !1, i.value = !0, u.value = !0, y(D), e.direction.includes("x") && (t.value += v.value), e.direction.includes("y") && (o.value += f.value), M());
      });
      return function(ae) {
        return B.apply(this, arguments);
      };
    }(), I = () => {
      e.disabled || (b(), s.value = !0, Y(), P = window.setTimeout(() => {
        u.value = !1;
      }));
    }, V = (B) => {
      u.value || C(e.onClick, B);
    }, N = () => {
      var {
        left: B,
        top: D
      } = g();
      t.value = B, o.value = D;
    }, g = () => {
      var B = Qe(a.value), D = Qe(window), ae = B.top - D.top, H = D.bottom - B.bottom, G = B.left - D.left, x = D.right - B.right, {
        width: Z,
        height: J
      } = B, {
        width: Q,
        height: oe
      } = D;
      return {
        top: ae,
        bottom: H,
        left: G,
        right: x,
        width: Z,
        height: J,
        halfWidth: Z / 2,
        halfHeight: J / 2,
        windowWidth: Q,
        windowHeight: oe
      };
    }, k = () => {
      var B = g(), D = l.left, ae = B.windowWidth - l.right - B.width, H = l.top, G = B.windowHeight - l.bottom - B.height;
      return {
        minX: D,
        minY: H,
        // fallback the drag element overflows boundary
        maxX: D < ae ? ae : D,
        maxY: H < G ? G : H
      };
    }, Y = () => {
      if (e.attraction != null) {
        var {
          halfWidth: B,
          halfHeight: D,
          top: ae,
          bottom: H,
          left: G,
          right: x
        } = g(), {
          minX: Z,
          minY: J,
          maxX: Q,
          maxY: oe
        } = k(), ce = G + B - l.left, ke = x + B - l.right, Ie = ae + D - l.top, W = H + D - l.bottom, re = ce <= ke, ue = Ie <= W;
        e.attraction.includes("x") && (t.value = re ? Z : Q), e.attraction.includes("y") && (o.value = ue ? J : oe);
      }
    }, M = () => {
      var {
        minX: B,
        minY: D,
        maxX: ae,
        maxY: H
      } = k();
      t.value = dn(t.value, B, ae), o.value = dn(o.value, D, H);
    }, F = () => {
      var {
        top: B = 0,
        bottom: D = 0,
        left: ae = 0,
        right: H = 0
      } = e.boundary;
      l.top = Re(B), l.bottom = Re(D), l.left = Re(ae), l.right = Re(H);
    }, X = () => {
      var B, D = (B = n.style) != null ? B : {};
      return lo({}, n, {
        style: lo({}, D, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : D.top,
          left: i.value ? 0 : D.left,
          right: i.value ? "auto" : D.right,
          bottom: i.value ? "auto" : D.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : D.transform
        })
      });
    }, A = () => {
      i.value && (N(), M());
    }, z = () => {
      s.value = !1, i.value = !1, u.value = !1, t.value = 0, o.value = 0, h();
    };
    return de(() => e.boundary, F), Pt(A), tr(() => {
      F(), A();
    }), {
      drag: a,
      x: t,
      y: o,
      enableTransition: s,
      dragging: u,
      teleportDisabled: w,
      n: ng,
      classes: ag,
      getAttrs: X,
      handleTouchstart: O,
      handleTouchmove: S,
      handleTouchend: I,
      handleClick: V,
      resize: A,
      reset: z
    };
  }
});
md.render = tg;
const Xn = md;
ie(Xn);
var Sk = Xn, og = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Kt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return og[r];
  });
}
var Wr = "top", hn = "bottom", $n = "right", un = "left", So = "auto", ko = [Wr, hn, $n, un], $o = "start", Ua = "end", ig = "clippingParents", hd = "viewport", ia = "popper", lg = "reference", Ul = /* @__PURE__ */ ko.reduce(function(e, r) {
  return e.concat([r + "-" + $o, r + "-" + Ua]);
}, []), pd = /* @__PURE__ */ [].concat(ko, [So]).reduce(function(e, r) {
  return e.concat([r, r + "-" + $o, r + "-" + Ua]);
}, []), sg = "beforeRead", ug = "read", dg = "afterRead", vg = "beforeMain", fg = "main", cg = "afterMain", mg = "beforeWrite", hg = "write", pg = "afterWrite", gi = [sg, ug, dg, vg, fg, cg, mg, hg, pg];
function Gr(e) {
  return e.split("-")[0];
}
var gg = {
  start: "end",
  end: "start"
};
function Yl(e) {
  return e.replace(/start|end/g, function(r) {
    return gg[r];
  });
}
function Ir(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var r = e.ownerDocument;
    return r && r.defaultView || window;
  }
  return e;
}
function Tn(e) {
  var r = Ir(e).Element;
  return e instanceof r || e instanceof Element;
}
function kr(e) {
  var r = Ir(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function Ji(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Ir(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function wn(e) {
  return ((Tn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var va = Math.max, Hl = Math.min, Kn = Math.round;
function bi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function gd() {
  return !/^((?!chrome|android).)*safari/i.test(bi());
}
function Zn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Kn(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Kn(a.height) / e.offsetHeight || 1);
  var l = Tn(e) ? Ir(e) : window, i = l.visualViewport, s = !gd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Qi(e) {
  var r = Ir(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function _i(e) {
  return Zn(wn(e)).left + Qi(e).scrollLeft;
}
function bg(e, r) {
  var n = Ir(e), a = wn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = gd();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + _i(e),
    y: s
  };
}
function zr(e) {
  return Ir(e).getComputedStyle(e);
}
function yg(e) {
  var r, n = wn(e), a = Qi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = va(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = va(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + _i(e), s = -a.scrollTop;
  return zr(t || n).direction === "rtl" && (i += va(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Hr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function To(e) {
  return Hr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ji(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wn(e)
  );
}
function xi(e) {
  var r = zr(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function bd(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : kr(e) && xi(e) ? e : bd(To(e));
}
function fa(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = bd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Ir(a), l = t ? [o].concat(o.visualViewport || [], xi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(fa(To(l)))
  );
}
function wg(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function Fl(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  zr(e).position === "fixed" ? null : e.offsetParent;
}
function Cg(e) {
  var r = /firefox/i.test(bi()), n = /Trident/i.test(bi());
  if (n && kr(e)) {
    var a = zr(e);
    if (a.position === "fixed")
      return null;
  }
  var t = To(e);
  for (Ji(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Hr(t)) < 0; ) {
    var o = zr(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function el(e) {
  for (var r = Ir(e), n = Fl(e); n && wg(n) && zr(n).position === "static"; )
    n = Fl(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && zr(n).position === "static") ? r : n || Cg(e) || r;
}
function Sg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Ji(n)) {
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
function kg(e, r) {
  var n = Zn(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function jl(e, r, n) {
  return r === hd ? yi(bg(e, n)) : Tn(r) ? kg(r, n) : yi(yg(wn(e)));
}
function $g(e) {
  var r = fa(To(e)), n = ["absolute", "fixed"].indexOf(zr(e).position) >= 0, a = n && kr(e) ? el(e) : e;
  return Tn(a) ? r.filter(function(t) {
    return Tn(t) && Sg(t, a) && Hr(t) !== "body";
  }) : [];
}
function Tg(e, r, n, a) {
  var t = r === "clippingParents" ? $g(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = jl(e, u, a);
    return s.top = va(d.top, s.top), s.right = Hl(d.right, s.right), s.bottom = Hl(d.bottom, s.bottom), s.left = va(d.left, s.left), s;
  }, jl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ya(e) {
  return e.split("-")[1];
}
function Og(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Gr(a) : null, o = a ? Ya(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case Wr:
      s = {
        x: l,
        y: r.y - n.height
      };
      break;
    case hn:
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
  var u = t ? Og(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case $o:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case Ua:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function Pg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Vg(e) {
  return Object.assign({}, Pg(), e);
}
function Ig(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function wd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? ig : i, u = n.rootBoundary, d = u === void 0 ? hd : u, v = n.elementContext, f = v === void 0 ? ia : v, m = n.altBoundary, y = m === void 0 ? !1 : m, b = n.padding, h = b === void 0 ? 0 : b, w = Vg(typeof h != "number" ? h : Ig(h, ko)), P = f === ia ? lg : ia, O = e.rects.popper, S = e.elements[y ? P : f], I = Tg(Tn(S) ? S : S.contextElement || wn(e.elements.popper), s, d, l), V = Zn(e.elements.reference), N = yd({
    reference: V,
    element: O,
    strategy: "absolute",
    placement: t
  }), g = yi(Object.assign({}, O, N)), k = f === ia ? g : V, Y = {
    top: I.top - k.top + w.top,
    bottom: k.bottom - I.bottom + w.bottom,
    left: I.left - k.left + w.left,
    right: k.right - I.right + w.right
  }, M = e.modifiersData.offset;
  if (f === ia && M) {
    var F = M[t];
    Object.keys(Y).forEach(function(X) {
      var A = [$n, hn].indexOf(X) >= 0 ? 1 : -1, z = [Wr, hn].indexOf(X) >= 0 ? "y" : "x";
      Y[X] += F[z] * A;
    });
  }
  return Y;
}
function Mg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? pd : s, d = Ya(a), v = d ? i ? Ul : Ul.filter(function(y) {
    return Ya(y) === d;
  }) : ko, f = v.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(y, b) {
    return y[b] = wd(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gr(b)], y;
  }, {});
  return Object.keys(m).sort(function(y, b) {
    return m[y] - m[b];
  });
}
function Bg(e) {
  if (Gr(e) === So)
    return [];
  var r = Kt(e);
  return [Yl(e), r, Yl(r)];
}
function Eg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, y = m === void 0 ? !0 : m, b = n.allowedAutoPlacements, h = r.options.placement, w = Gr(h), P = w === h, O = s || (P || !y ? [Kt(h)] : Bg(h)), S = [h].concat(O).reduce(function(Q, oe) {
      return Q.concat(Gr(oe) === So ? Mg(r, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : oe);
    }, []), I = r.rects.reference, V = r.rects.popper, N = /* @__PURE__ */ new Map(), g = !0, k = S[0], Y = 0; Y < S.length; Y++) {
      var M = S[Y], F = Gr(M), X = Ya(M) === $o, A = [Wr, hn].indexOf(F) >= 0, z = A ? "width" : "height", B = wd(r, {
        placement: M,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), D = A ? X ? $n : un : X ? hn : Wr;
      I[z] > V[z] && (D = Kt(D));
      var ae = Kt(D), H = [];
      if (o && H.push(B[F] <= 0), i && H.push(B[D] <= 0, B[ae] <= 0), H.every(function(Q) {
        return Q;
      })) {
        k = M, g = !1;
        break;
      }
      N.set(M, H);
    }
    if (g)
      for (var G = y ? 3 : 1, x = function(oe) {
        var ce = S.find(function(ke) {
          var Ie = N.get(ke);
          if (Ie)
            return Ie.slice(0, oe).every(function(W) {
              return W;
            });
        });
        if (ce)
          return k = ce, "break";
      }, Z = G; Z > 0; Z--) {
        var J = x(Z);
        if (J === "break")
          break;
      }
    r.placement !== k && (r.modifiersData[a]._skip = !0, r.placement = k, r.reset = !0);
  }
}
const Ng = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Eg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Dg(e, r, n) {
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
function Ag(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = pd.reduce(function(d, v) {
    return d[v] = Dg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const zg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ag
};
var Lg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rg(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Kn(r * t) / t || 0,
    y: Kn(n * t) / t || 0
  };
}
function Wl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, y = l.y, b = y === void 0 ? 0 : y, h = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = h.x, b = h.y;
  var w = l.hasOwnProperty("x"), P = l.hasOwnProperty("y"), O = un, S = Wr, I = window;
  if (u) {
    var V = el(n), N = "clientHeight", g = "clientWidth";
    if (V === Ir(n) && (V = wn(n), zr(V).position !== "static" && i === "absolute" && (N = "scrollHeight", g = "scrollWidth")), V = V, t === Wr || (t === un || t === $n) && o === Ua) {
      S = hn;
      var k = v && V === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        V[N]
      );
      b -= k - a.height, b *= s ? 1 : -1;
    }
    if (t === un || (t === Wr || t === hn) && o === Ua) {
      O = $n;
      var Y = v && V === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        V[g]
      );
      m -= Y - a.width, m *= s ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: i
  }, u && Lg), F = d === !0 ? Rg({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = F.x, b = F.y, s) {
    var X;
    return Object.assign({}, M, (X = {}, X[S] = P ? "0" : "", X[O] = w ? "0" : "", X.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", X));
  }
  return Object.assign({}, M, (r = {}, r[S] = P ? b + "px" : "", r[O] = w ? m + "px" : "", r.transform = "", r));
}
function Ug(e) {
  var r = e.state, n = e.options, a = n.gpuAcceleration, t = a === void 0 ? !0 : a, o = n.adaptive, l = o === void 0 ? !0 : o, i = n.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = zr(r.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Gr(r.placement),
    variation: Ya(r.placement),
    popper: r.elements.popper,
    popperRect: r.rects.popper,
    gpuAcceleration: t,
    isFixed: r.options.strategy === "fixed"
  };
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, Wl(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, Wl(Object.assign({}, d, {
    offsets: r.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), r.attributes.popper = Object.assign({}, r.attributes.popper, {
    "data-popper-placement": r.placement
  });
}
const Cd = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ug,
  data: {}
};
function Yg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Hg(e) {
  return e === Ir(e) || !kr(e) ? Qi(e) : Yg(e);
}
function Fg(e) {
  var r = e.getBoundingClientRect(), n = Kn(r.width) / e.offsetWidth || 1, a = Kn(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function jg(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Fg(r), o = wn(r), l = Zn(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xi(o)) && (i = Hg(r)), kr(r) ? (s = Zn(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = _i(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Wg(e) {
  var r = Zn(e), n = e.offsetWidth, a = e.offsetHeight;
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
  return gi.reduce(function(n, a) {
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
function _r(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return [].concat(n).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Cn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Kg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Gl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Zg(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Gl).filter(function(n, a, t) {
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
          gi.indexOf(r.phase) < 0 && console.error(_r(Cn, r.name, '"phase"', "either " + gi.join(", "), '"' + String(r.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Gl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(_r(Kg, String(r.name), a, a));
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
var ql = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", _g = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Xl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Kl() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function xg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? Xl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xl, o),
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
        var P = typeof w == "function" ? w(d.options) : w;
        b(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: Tn(i) ? fa(i) : i.contextElement ? fa(i.contextElement) : [],
          popper: fa(s)
        };
        var O = qg(Qg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = O.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Jg([].concat(O, d.options.modifiers), function(M) {
            var F = M.name;
            return F;
          });
          if (Zg(S), Gr(d.options.placement) === So) {
            var I = d.orderedModifiers.find(function(M) {
              var F = M.name;
              return F === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var V = zr(s), N = V.marginTop, g = V.marginRight, k = V.marginBottom, Y = V.marginLeft;
          [N, g, k, Y].some(function(M) {
            return parseFloat(M);
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
          var w = d.elements, P = w.reference, O = w.popper;
          if (!Kl(P, O)) {
            process.env.NODE_ENV !== "production" && console.error(ql);
            return;
          }
          d.rects = {
            reference: jg(P, el(O), d.options.strategy === "fixed"),
            popper: Wg(O)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
            return d.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var S = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(_g);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var V = d.orderedModifiers[I], N = V.fn, g = V.options, k = g === void 0 ? {} : g, Y = V.name;
            typeof N == "function" && (d = N({
              state: d,
              options: k,
              name: Y,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Xg(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Kl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(ql), m;
    m.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function y() {
      d.orderedModifiers.forEach(function(h) {
        var w = h.name, P = h.options, O = P === void 0 ? {} : P, S = h.effect;
        if (typeof S == "function") {
          var I = S({
            state: d,
            name: w,
            instance: m,
            options: O
          }), V = function() {
          };
          v.push(I || V);
        }
      });
    }
    function b() {
      v.forEach(function(h) {
        return h();
      }), v = [];
    }
    return m;
  };
}
var Ht = {
  passive: !0
};
function eb(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Ir(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Ht);
  }), i && s.addEventListener("resize", n.update, Ht), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Ht);
    }), i && s.removeEventListener("resize", n.update, Ht);
  };
}
const rb = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: eb,
  data: {}
};
function nb(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = yd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const ab = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: nb,
  data: {}
};
function tb(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !kr(o) || !Hr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function ob(e) {
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
const ib = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: tb,
  effect: ob,
  requires: ["computeStyles"]
};
var lb = [rb, ab, Cd, ib], sb = /* @__PURE__ */ xg({
  defaultModifiers: lb
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
function Zl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Jl(e) {
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
function Sd(e) {
  var r = $(null), n = $(null), a = $({
    width: 0,
    height: 0
  }), t = ba(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(k, Y) {
      Y ? (V(), C(e.onOpen)) : C(e.onClose);
    }
  }), {
    zIndex: o
  } = It(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: k,
      height: Y
    } = En(r.value);
    a.value = {
      width: Re(k),
      height: Re(Y)
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
    var k = Jl(function* () {
      e.trigger === "hover" && (s = !1, yield Dr(), !i && g());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), m = () => {
    e.trigger === "hover" && (i = !0);
  }, y = /* @__PURE__ */ function() {
    var k = Jl(function* () {
      e.trigger === "hover" && (i = !1, yield Dr(), !s && g());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), b = () => {
    e.closeOnClickReference && t.value ? g() : N();
  }, h = () => {
    g();
  }, w = (k) => {
    e.trigger === "click" && (h(), C(e.onClickOutside, k));
  }, P = () => {
    V(), C(e.onClosed);
  }, O = () => {
    var {
      offsetX: k,
      offsetY: Y,
      placement: M
    } = e;
    u();
    var F = {
      x: Re(k),
      y: Re(Y)
    };
    switch (M) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: F.x,
          distance: F.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: F.x,
          distance: F.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: F.x,
          distance: F.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: F.x,
          distance: -F.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: F.x,
          distance: -F.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: F.x,
          distance: -F.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: F.y,
          distance: F.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: F.y,
          distance: -F.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: M,
          skidding: F.y,
          distance: -F.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: M,
          skidding: F.x,
          distance: -F.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: M,
          skidding: F.x,
          distance: F.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: M,
          skidding: F.y,
          distance: F.x
        };
    }
  }, S = () => {
    var {
      placement: k,
      skidding: Y,
      distance: M
    } = O(), F = [ca({}, Ng, {
      enabled: t.value
    }), ca({}, zg, {
      options: {
        offset: [Y, M]
      }
    }), ca({}, Cd, {
      options: {
        adaptive: !1,
        gpuAcceleration: !1
      },
      enabled: t.value
    }), {
      name: "applyTransformOrigin",
      enabled: t.value,
      phase: "beforeWrite",
      fn(X) {
        var {
          state: A
        } = X;
        A.styles.popper.transformOrigin = d();
      }
    }];
    return {
      placement: k,
      modifiers: F,
      strategy: e.strategy
    };
  }, I = () => e.reference ? r.value.querySelector(e.reference) : r.value, V = () => {
    l.setOptions(S());
  }, N = () => {
    var {
      disabled: k
    } = e;
    k || (t.value = !0, C(e["onUpdate:show"], !0));
  }, g = () => {
    t.value = !1, C(e["onUpdate:show"], !1);
  };
  return Us(I, "click", w), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], V), de(() => e.disabled, g), St(() => {
    var k;
    l = sb((k = I()) != null ? k : r.value, n.value, S());
  }), kt(() => {
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
    handlePopoverClose: h,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: y,
    handleClosed: P,
    resize: V,
    open: N,
    close: g
  };
}
function ub(e) {
  return ["click", "hover"].includes(e);
}
function db(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function vb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function fb(e) {
  return ["absolute", "fixed"].includes(e);
}
var cb = {
  type: {
    type: String,
    default: "default",
    validator: vb
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
    validator: ub
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: db
  },
  strategy: {
    type: String,
    default: "absolute",
    validator: fb
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOutside: U(),
  "onUpdate:show": U()
}, {
  n: mb,
  classes: hb
} = te("tooltip");
function pb(e, r) {
  return p(), T(
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
    [j(e.$slots, "default"), (p(), Ce(Jr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [_(Fe, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: me(() => [Te(E(
        "div",
        {
          ref: "popover",
          class: c(e.classes(e.n("tooltip"), e.n("$--box"))),
          style: q({
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
        [E(
          "div",
          {
            style: q({
              background: e.color,
              width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
            }),
            class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
          },
          [j(e.$slots, "content", {}, () => [$e(
            le(e.content),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )],
        38
        /* CLASS, STYLE, HYDRATE_EVENTS */
      ), [[Rr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var kd = ne({
  name: "VarTooltip",
  props: cb,
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
      open: y,
      // expose
      close: b,
      // expose
      resize: h
    } = Sd(e);
    return {
      toSizeUnit: we,
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      n: mb,
      classes: hb,
      handleHostClick: i,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handleClosed: m,
      resize: h,
      open: y,
      close: b
    };
  }
});
kd.render = pb;
const Jn = kd;
ie(Jn);
var kk = Jn;
function gb(e) {
  return ["click"].includes(e);
}
var bb = {
  expandTrigger: {
    type: String,
    validator: gb
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
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
var {
  n: yb,
  classes: wb
} = te("ellipsis"), Cb = {
  key: 0
};
function Sb(e, r) {
  var n = se("var-tooltip");
  return p(), Ce(
    n,
    Ot(uo(e.tooltip)),
    {
      content: me(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), T(
          "span",
          Cb,
          le(e.tooltip.content),
          1
          /* TEXT */
        )) : j(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: me(() => [E(
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
var $d = ne({
  name: "VarEllipsis",
  components: {
    VarTooltip: Jn
  },
  props: bb,
  setup(e) {
    var r = $(!1), n = L(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = L(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : wi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: yb,
      classes: wb,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
$d.render = Sb;
const Ha = $d;
ie(Ha);
var $k = Ha, kb = {
  active: Boolean,
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
    default: "primary"
  },
  position: {
    type: String,
    default: "right-bottom"
  },
  direction: {
    type: String,
    default: "top"
  },
  trigger: {
    type: String,
    default: "click"
  },
  disabled: Boolean,
  color: String,
  inactiveIcon: {
    type: String,
    default: "plus"
  },
  activeIcon: {
    type: String,
    default: "window-close"
  },
  inactiveIconSize: [Number, String],
  activeIconSize: [Number, String],
  fixed: {
    type: Boolean,
    default: !0
  },
  zIndex: [Number, String],
  top: [Number, String],
  bottom: [Number, String],
  left: [Number, String],
  right: [Number, String],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  safeArea: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onClick: U(),
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:active": U()
};
function $b(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  classes: No,
  n: pr
} = te("fab");
const Fa = ne({
  name: "VarFab",
  inheritAttrs: !1,
  props: kb,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = ba(e, "active"), o = $(null), l = $(null), i = (v, f, m) => {
      if (v.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (m === 0) {
          C(e.onClick, t.value, v);
          return;
        }
        t.value = f, C(e.onClick, t.value, v), C(t.value ? e.onOpen : e.onClose);
      }
    }, s = (v, f) => {
      e.trigger !== "hover" || e.disabled || f === 0 || (t.value = v, C(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, C(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : Te(_(vr, {
      "var-fab-cover": !0,
      class: pr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      elevation: e.elevation,
      round: !0
    }, {
      default: () => [_(Ne, {
        "var-fab-cover": !0,
        class: No([t.value, pr("trigger-active-icon"), pr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: pr("--trigger-icon-animation")
      }, null)]
    }), [[Rr, e.show]]);
    return de(() => e.trigger, () => {
      t.value = !1;
    }), de(() => e.disabled, () => {
      t.value = !1;
    }), de(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var v;
      (v = l.value) == null || v.reset();
    }), Us(o, "click", u), () => {
      var v, f, m = Ys((f = C(n.default)) != null ? f : []), y = Ei(e.drag) ? {} : e.drag;
      return _(Xn, De({
        ref: l,
        class: No(pr("--position-" + e.position), [!e.fixed, pr("--absolute")]),
        style: {
          top: we(e.top),
          bottom: we(e.bottom),
          left: we(e.left),
          right: we(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: y.direction,
        attraction: y.attraction,
        boundary: y.boundary,
        onClick: (b) => i(b, !t.value, m.length)
      }, a), {
        default: () => [_("div", {
          class: No(pr(), pr("--direction-" + e.direction), [e.safeArea, pr("--safe-area")]),
          ref: o,
          onMouseleave: () => s(!1, m.length),
          onMouseenter: () => s(!0, m.length)
        }, [_(Fe, {
          name: pr("--active-transition")
        }, $b(v = d()) ? v : {
          default: () => [v]
        }), _(Fe, {
          name: pr("--actions-transition-" + e.direction),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Te(_("div", {
            class: pr("actions"),
            onClick: (b) => b.stopPropagation()
          }, [m.map((b) => _("div", {
            class: pr("action")
          }, [b]))]), [[Rr, e.show && t.value && m.length]])]
        })])]
      });
    };
  }
});
ie(Fa);
var Tk = Fa;
function Tb(e) {
  return ["start", "end"].includes(e);
}
var Ob = {
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
    validator: Tb
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Ql(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Pb(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
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
  n: Vb
} = te("form");
function Ib(e, r) {
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
var Td = ne({
  name: "VarForm",
  props: Ob,
  setup(e) {
    var r = L(() => e.disabled), n = L(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Ym(), o = (d) => {
      setTimeout(() => {
        var v = vn(d), f = v === window ? 0 : hl(v), m = hl(d) - f - Re(e.scrollToErrorOffsetY);
        ga(v, {
          top: m,
          animation: Yo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Pb(function* () {
        var v = yield Promise.all(a.map((h) => {
          var {
            validate: w
          } = h;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = nf(v, (h) => h === !1, e.scrollToError), m = f > -1;
          if (m) {
            var y, b = (y = a[f].instance.proxy) == null ? void 0 : y.$el;
            o(b);
          }
          return !m;
        }
        return v.every((h) => h === !0);
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
      n: Vb,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
Td.render = Ib;
const On = Td;
On.useValidation = Pr;
On.useForm = Vr;
ie(On);
var Ok = On;
function Mb(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Bb = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Mb,
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
  n: Eb,
  classes: Nb
} = te("image"), Db = ["alt", "title", "lazy-loading", "lazy-error"], Ab = ["alt", "title", "src"];
function zb(e, r) {
  var n = Ae("lazy"), a = Ae("ripple");
  return Te((p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? Te((p(), T("img", {
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
    }, null, 46, Db)), [[n, e.src]]) : ee("v-if", !0), !e.lazy && !e.showErrorSlot ? (p(), T("img", {
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
    }, null, 46, Ab)) : ee("v-if", !0), e.showErrorSlot ? j(e.$slots, "error", {
      key: 2
    }) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Od = ne({
  name: "VarImage",
  directives: {
    Lazy: wa,
    Ripple: Ke
  },
  props: Bb,
  setup(e, r) {
    var {
      slots: n
    } = r, a = $(!1), t = (i) => {
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
    return de(() => e.src, () => {
      a.value = !1;
    }), {
      n: Eb,
      classes: Nb,
      showErrorSlot: a,
      toSizeUnit: we,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
Od.render = zb;
const ja = Od;
ie(ja);
var Pk = ja, Pd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Lb() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(Pd);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Vd = {
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
var Rb = 250, Ub = 20, {
  n: Yb,
  classes: Hb
} = te("swipe"), Fb = ["onClick"];
function jb(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [E(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: q({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.trackTranslate + "px)",
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
        Me,
        null,
        We(e.length, (n, a) => (p(), T("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: q({
            background: e.indicatorColor
          }),
          key: n,
          onClick: (t) => e.to(a)
        }, null, 14, Fb))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : ee("v-if", !0)])],
    2
    /* CLASS */
  );
}
var Id = ne({
  name: "VarSwipe",
  props: Vd,
  setup(e) {
    var r = $(null), n = $(0), a = L(() => e.vertical), t = $(0), o = $(0), l = $(!1), i = $(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Lb(), {
      popup: v,
      bindPopup: f
    } = Mf(), {
      deltaX: m,
      deltaY: y,
      moveX: b,
      moveY: h,
      offsetX: w,
      offsetY: P,
      touching: O,
      direction: S,
      startTime: I,
      startTouch: V,
      moveTouch: N,
      endTouch: g
    } = Li(), k = !1, Y = -1, M = (W) => s.find((re) => {
      var {
        index: ue
      } = re;
      return ue.value === W;
    }), F = () => {
      e.loop && (o.value >= 0 && M(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && M(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (M(d.value - 1).setTranslate(0), M(0).setTranslate(0)));
    }, X = (W) => {
      var re = dr(W) ? W : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: ue
      } = e;
      return re <= -1 ? ue ? -1 : 0 : re >= d.value ? ue ? d.value : d.value - 1 : re;
    }, A = (W) => {
      var {
        loop: re
      } = e;
      return W === -1 ? re ? d.value - 1 : 0 : W === d.value ? re ? 0 : d.value - 1 : W;
    }, z = (W) => e.loop ? W < 0 ? d.value + W : W >= d.value ? W - d.value : W : dn(W, 0, d.value - 1), B = (W) => {
      var re = o.value >= n.value, ue = o.value <= -t.value, ye = 0, Ue = -(t.value - n.value);
      l.value = !0, (re || ue) && (l.value = !0, o.value = ue ? ye : Ue, M(0).setTranslate(0), M(d.value - 1).setTranslate(0)), fo(() => {
        l.value = !1, C(W);
      });
    }, D = () => {
      k || (i.value = z(R(e.initialIndex)), k = !0);
    }, ae = () => {
      var {
        autoplay: W
      } = e;
      !W || d.value <= 1 || (H(), Y = window.setTimeout(() => {
        oe(), ae();
      }, R(W)));
    }, H = () => {
      Y && clearTimeout(Y);
    }, G = (W) => {
      o.value = W, F();
    }, x = (W) => {
      d.value <= 1 || !e.touchable || (V(W), H(), B(() => {
        l.value = !0;
      }));
    }, Z = (W) => {
      var {
        touchable: re,
        vertical: ue
      } = e;
      if (!(!O.value || !re)) {
        N(W);
        var ye = ue ? "vertical" : "horizontal";
        S.value === ye && (W.preventDefault(), G(o.value + (ue ? h.value : b.value)));
      }
    }, J = () => {
      if (O.value) {
        var {
          vertical: W,
          onChange: re
        } = e;
        g();
        var ue = W ? y.value < 0 : m.value < 0, ye = W ? P.value : w.value, Ue = performance.now() - I.value <= Rb && ye >= Ub, Le = Ue ? X(ue ? i.value + 1 : i.value - 1) : X();
        l.value = !1, G(Le * -n.value);
        var He = i.value;
        i.value = A(Le), ae(), He !== i.value && C(re, i.value);
      }
    }, Q = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((W) => {
        W.setTranslate(0);
      }), ae(), setTimeout(() => {
        l.value = !1;
      }));
    }, oe = (W) => {
      if (!(d.value <= 1)) {
        D();
        var {
          loop: re,
          onChange: ue
        } = e, ye = i.value;
        i.value = z(ye + 1), (W == null ? void 0 : W.event) !== !1 && C(ue, i.value), B(() => {
          if (ye === d.value - 1 && re) {
            M(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          ye !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, ce = (W) => {
      if (!(d.value <= 1)) {
        D();
        var {
          loop: re,
          onChange: ue
        } = e, ye = i.value;
        i.value = z(ye - 1), (W == null ? void 0 : W.event) !== !1 && C(ue, i.value), B(() => {
          if (ye === 0 && re) {
            M(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          ye !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, ke = (W, re) => {
      if (!(d.value <= 1 || W === i.value)) {
        W = W < 0 ? 0 : W, W = W >= d.value ? d.value : W;
        var ue = W > i.value ? oe : ce, ye = Math.abs(W - i.value);
        Array.from({
          length: ye
        }).forEach((Ue, Le) => {
          ue({
            event: Le === ye - 1 ? re == null ? void 0 : re.event : !1
          });
        });
      }
    }, Ie = {
      size: n,
      vertical: a
    };
    return u(Ie), C(f, null), de(() => d.value, /* @__PURE__ */ xl(function* () {
      yield Dr(), D(), Q();
    })), v && de(() => v.show.value, /* @__PURE__ */ function() {
      var W = xl(function* (re) {
        re ? (yield Dr(), Q()) : H();
      });
      return function(re) {
        return W.apply(this, arguments);
      };
    }()), pn(Q), co(H), Pt(Q), {
      n: Yb,
      classes: Hb,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      trackTranslate: o,
      lockDuration: l,
      handleTouchstart: x,
      handleTouchmove: Z,
      handleTouchend: J,
      next: oe,
      prev: ce,
      to: ke,
      resize: Q,
      toNumber: R
    };
  }
});
Id.render = jb;
const Pn = Id;
ie(Pn);
var Vk = Pn;
function Wb() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = or(Pd);
  return e || Or("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Gb
} = te("swipe-item");
function qb(e, r) {
  return p(), T(
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
var Md = ne({
  name: "VarSwipeItem",
  setup() {
    var e = $(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = Wb(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: Gb,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Md.render = qb;
const Vn = Md;
ie(Vn);
var Ik = Vn;
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
var Xb = Ci({
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
}, xe(Vd, ["loop", "indicator", "onChange"]), xe(Vt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: es,
  classes: Kb
} = te("image-preview"), Do = 12, rs = 200, Zb = 350, ns = 200, Jb = 500, Qb = ["onTouchstart"], _b = ["src", "alt"];
function xb(e, r) {
  var n = se("var-swipe-item"), a = se("var-swipe"), t = se("var-icon"), o = se("var-popup");
  return p(), Ce(o, {
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
    default: me(() => [_(a, De({
      ref: "swipeRef",
      class: e.n("swipe"),
      "var-image-preview-cover": "",
      touchable: e.canSwipe,
      indicator: e.indicator && e.images.length > 1,
      "initial-index": e.initialIndex,
      loop: e.loop,
      onChange: e.onChange
    }, e.$attrs), {
      default: me(() => [(p(!0), T(
        Me,
        null,
        We(e.images, (l, i) => (p(), Ce(n, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: l
        }, {
          default: me(() => [E("div", {
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
          }, [E("img", {
            class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: l,
            alt: l
          }, null, 10, _b)], 46, Qb)]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class"]))),
        128
        /* KEYED_FRAGMENT */
      ))]),
      indicator: me((l) => {
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
          le(i + 1) + " / " + le(s),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)])];
      }),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), j(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), Ce(t, {
      key: 0,
      class: c(e.n("close-icon")),
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: e.close
    }, null, 8, ["class", "onClick"])) : ee("v-if", !0)]), E(
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
var Bd = ne({
  name: "VarImagePreview",
  components: {
    VarSwipe: Pn,
    VarSwipeItem: Vn,
    VarPopup: Ur,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Xb,
  setup(e) {
    var r = $(!1), n = $(1), a = $(0), t = $(0), o = $(void 0), l = $(void 0), i = $(!0), s = $(null), {
      moveX: u,
      moveY: d,
      distance: v,
      startTime: f,
      startTouch: m,
      moveTouch: y,
      endTouch: b
    } = Li(), h = {
      start: null,
      prev: null
    }, w = null, P = null, O = !1, S = L(() => {
      var {
        images: Z,
        current: J,
        initialIndex: Q
      } = e;
      if (Q != null)
        return R(Q);
      var oe = Z.findIndex((ce) => ce === J);
      return Math.max(oe, 0);
    }), I = L(() => {
      var {
        imagePreventDefault: Z,
        show: J
      } = e;
      return J && Z;
    }), V = () => {
      n.value = R(e.zoom), i.value = !1, h.prev = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, ns);
    }, N = () => {
      n.value = 1, a.value = 0, t.value = 0, i.value = !0, h.prev = null, o.value = void 0, l.value = void 0;
    }, g = (Z) => h.prev ? v.value <= Do && performance.now() - f.value <= rs && h.prev === Z : !1, k = (Z) => !Z || !h.start || !h.prev ? !1 : v.value <= Do && performance.now() - f.value < Zb && (Z === h.start || Z.parentNode === h.start), Y = () => {
      b(), window.clearTimeout(P), O = !1, h.start = null;
    }, M = (Z) => {
      if (b(), window.clearTimeout(P), O) {
        O = !1;
        return;
      }
      var J = k(Z.target);
      w = window.setTimeout(() => {
        J && D(), h.start = null;
      }, rs);
    }, F = (Z, J) => {
      window.clearTimeout(w), window.clearTimeout(P);
      var Q = Z.currentTarget;
      if (h.start = Q, P = window.setTimeout(() => {
        O = !0, C(e.onLongPress, J);
      }, Jb), g(Q)) {
        n.value > 1 ? N() : V();
        return;
      }
      m(Z), h.prev = Q;
    }, X = (Z) => {
      var {
        offsetWidth: J,
        offsetHeight: Q
      } = Z, {
        naturalWidth: oe,
        naturalHeight: ce
      } = Z.querySelector("." + es("image"));
      return {
        width: J,
        height: Q,
        imageRadio: ce / oe,
        rootRadio: Q / J,
        zoom: R(e.zoom)
      };
    }, A = (Z) => {
      var {
        zoom: J,
        imageRadio: Q,
        rootRadio: oe,
        width: ce,
        height: ke
      } = X(Z);
      if (!Q)
        return 0;
      var Ie = Q > oe ? ke / Q : ce;
      return Math.max(0, (J * Ie - ce) / 2) / J;
    }, z = (Z) => {
      var {
        zoom: J,
        imageRadio: Q,
        rootRadio: oe,
        width: ce,
        height: ke
      } = X(Z);
      if (!Q)
        return 0;
      var Ie = Q > oe ? ke : ce * Q;
      return Math.max(0, (J * Ie - ke) / 2) / J;
    }, B = (Z) => {
      if (h.prev) {
        y(Z);
        var J = Z.currentTarget;
        if (v.value > Do && window.clearTimeout(P), n.value > 1) {
          var Q = A(J), oe = z(J);
          a.value = dn(a.value + u.value, -Q, Q), t.value = dn(t.value + d.value, -oe, oe);
        }
        h.prev = J;
      }
    }, D = () => {
      if (n.value > 1) {
        N(), setTimeout(() => C(e["onUpdate:show"], !1), ns);
        return;
      }
      C(e["onUpdate:show"], !1);
    }, ae = (Z) => {
      var J;
      (J = s.value) == null || J.prev(Z);
    }, H = (Z) => {
      var J;
      (J = s.value) == null || J.next(Z);
    }, G = (Z, J) => {
      var Q;
      (Q = s.value) == null || Q.to(Z, J);
    }, x = (Z) => {
      e.imagePreventDefault && e.show && Z.preventDefault();
    };
    return fn(() => document, "contextmenu", x), de(() => e.show, (Z) => {
      r.value = Z;
    }, {
      immediate: !0
    }), {
      n: es,
      classes: Kb,
      swipeRef: s,
      isPreventDefault: I,
      initialIndex: S,
      popupShow: r,
      scale: n,
      translateX: a,
      translateY: t,
      canSwipe: i,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: F,
      handleTouchmove: B,
      handleTouchend: M,
      handleTouchcancel: Y,
      close: D,
      prev: ae,
      next: H,
      to: G
    };
  }
});
Bd.render = xb;
const Nt = Bd;
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
var tn, ha = {};
function ey(e) {
  return e === void 0 && (e = {}), Xe(e) ? ma({}, ha, {
    images: [e]
  }) : Ve(e) ? ma({}, ha, {
    images: e
  }) : ma({}, ha, e);
}
function Lr(e) {
  if (aa()) {
    Lr.close();
    var r = ey(e), n = Ye(r);
    n.teleport = "body", tn = n;
    var {
      unmountInstance: a
    } = ta(Nt, n, {
      onClose: () => C(n.onClose),
      onClosed: () => {
        C(n.onClosed), a(), tn === n && (tn = null);
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
Lr.close = () => {
  if (tn != null) {
    var e = tn;
    tn = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Lr.setDefaultOptions = (e) => {
  ha = e;
};
Lr.resetDefaultOptions = () => {
  ha = {};
};
Lr.Component = Nt;
ie(Nt);
ie(Nt, Lr);
var Mk = Nt, Zt = {
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
  n: ry,
  classes: ny
} = te("sticky");
function ay(e, r) {
  return p(), T(
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
    [E(
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
var Ed = ne({
  name: "VarSticky",
  props: Zt,
  setup(e) {
    var r = $(null), n = $(null), a = $(!1), t = $("0px"), o = $("0px"), l = $("auto"), i = $("auto"), s = $("auto"), u = $("auto"), d = L(() => !e.disabled && e.cssMode), v = L(() => !e.disabled && !e.cssMode && a.value), f = L(() => Re(e.offsetTop)), m, y = () => {
      var {
        cssMode: O,
        disabled: S
      } = e;
      if (!S) {
        var I = 0;
        if (m !== window) {
          var {
            top: V
          } = Qe(m);
          I = V;
        }
        var N = n.value, g = r.value, {
          top: k,
          left: Y
        } = Qe(g), M = k - I;
        return M <= f.value ? (O || (l.value = g.offsetWidth + "px", i.value = g.offsetHeight + "px", t.value = I + f.value + "px", o.value = Y + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: M,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var O = y();
        O && C(e.onScroll, O.offsetTop, O.isFixed);
      }
    }, h = /* @__PURE__ */ function() {
      var O = ts(function* () {
        a.value = !1, yield hf(), y();
      });
      return function() {
        return O.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var O = ts(function* () {
        yield Dr(), m = vn(r.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return O.apply(this, arguments);
      };
    }(), P = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return de(() => e.disabled, h), tr(w), co(P), Pt(h), fn(() => window, "scroll", b), {
      n: ry,
      classes: ny,
      resize: h,
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
Ed.render = ay;
const In = Ed;
ie(In);
var Bk = In, Nd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function ty() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = ir(Nd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function oy() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Nd);
  return n || Or("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var iy = {
  index: {
    type: [Number, String]
  }
}, {
  n: ly,
  classes: sy
} = te("index-anchor");
function uy(e, r) {
  return p(), Ce(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: me(() => [E(
      "div",
      De({
        class: e.n()
      }, e.$attrs),
      [j(e.$slots, "default", {}, () => [$e(
        le(e.name),
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
var Dd = ne({
  name: "VarIndexAnchor",
  components: {
    VarSticky: In
  },
  inheritAttrs: !1,
  props: iy,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = oy(), t = $(0), o = $(!1), l = L(() => e.index), i = $(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, y = (h) => {
      o.value = h;
    }, b = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: y
    };
    return a(b), {
      n: ly,
      classes: sy,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Fe
    };
  }
});
Dd.render = uy;
const Wa = Dd;
ie(Wa);
var Ek = Wa, dy = {
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
function os(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ft(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        os(o, a, t, l, i, "next", s);
      }
      function i(s) {
        os(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: vy,
  classes: fy
} = te("index-bar"), cy = ["onClick"];
function my(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [j(e.$slots, "default"), E(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), T(
        Me,
        null,
        We(e.anchorNameList, (n) => (p(), T("li", {
          key: n,
          class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
          style: q({
            color: e.active === n && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: n,
            manualCall: !0
          })
        }, le(n), 15, cy))),
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
var Ad = ne({
  name: "VarIndexBar",
  props: dy,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = ty(), t = $(""), o = $(null), l = $([]), i = $(), s = L(() => e.sticky), u = L(() => e.stickyCssMode || e.cssMode), d = L(() => Re(e.stickyOffsetTop)), v = L(() => e.zIndex), f = null, m = !1, y = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(y);
    var b = (N, g) => {
      var k = Ni(N) ? N.name.value : N;
      k === i.value || k === void 0 || (i.value = k, (g == null ? void 0 : g.event) !== !1 && C(e.onChange, k));
    }, h = () => {
      if (Di(f))
        return 0;
      var {
        top: N
      } = Qe(f), {
        scrollTop: g
      } = f, {
        top: k
      } = Qe(o.value);
      return g - N + k;
    }, w = () => {
      var N = pa(f), g = f === window ? document.body.scrollHeight : f.scrollHeight, k = h();
      n.forEach((Y, M) => {
        var F = Y.ownTop.value, X = N - F + d.value - k, A = M === n.length - 1 ? g : n[M + 1].ownTop.value - Y.ownTop.value;
        Y.setDisabled(!0), X >= 0 && X < A && t.value === "" && (Y.setDisabled(!1), b(Y));
      });
    }, P = /* @__PURE__ */ function() {
      var N = Ft(function* (g) {
        var {
          anchorName: k,
          manualCall: Y = !1,
          options: M
        } = g;
        if (Y && C(e.onClick, k), !(k === i.value && !m)) {
          var F = n.find((B) => {
            var {
              name: D
            } = B;
            return k === D.value;
          });
          if (F) {
            var X = h(), A = F.ownTop.value - d.value + X, z = zi(f);
            t.value = k, b(k, M), yield ga(f, {
              left: z,
              top: A,
              animation: Ms,
              duration: R(e.duration)
            }), fo(() => {
              t.value = "";
            });
          }
        }
      });
      return function(k) {
        return N.apply(this, arguments);
      };
    }(), O = /* @__PURE__ */ function() {
      var N = Ft(function* () {
        yield Dr(), f = vn(o.value);
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), S = () => {
      f.addEventListener("scroll", w);
    }, I = () => {
      f.removeEventListener("scroll", w);
    }, V = (N, g) => {
      yr(() => P({
        anchorName: N,
        options: g
      }));
    };
    return de(() => r.value, /* @__PURE__ */ Ft(function* () {
      yield Dr(), n.forEach((N) => {
        var {
          name: g,
          setOwnTop: k
        } = N;
        g.value && l.value.push(g.value), k();
      });
    })), tr(/* @__PURE__ */ Ft(function* () {
      yield O(), S();
    })), so(I), xn(() => {
      m = !0, I();
    }), pn(() => {
      !m || i.value === void 0 || (P({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: vy,
      classes: fy,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: R,
      scrollTo: V,
      anchorClick: P
    };
  }
});
Ad.render = my;
const Ga = Ad;
ie(Ga);
var Nk = Ga;
function hy(e) {
  return ["small", "normal"].includes(e);
}
function py(e) {
  return ["outlined", "standard"].includes(e);
}
var rl = {
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
    validator: hy
  },
  variant: {
    type: String,
    default: "standard",
    validator: py
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
  n: Ao,
  classes: gy
} = te("field-decorator"), by = ["for"];
function yy(e, r) {
  var n = se("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [E(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.color,
          cursor: e.cursor,
          overflow: e.isFloating ? "visible" : "hidden"
        })
      },
      [E(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), E(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      ), e.placeholder && e.hint ? (p(), T("label", {
        key: 0,
        class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
        style: q({
          color: e.color
        }),
        for: e.id
      }, [E(
        "span",
        null,
        le(e.placeholder),
        1
        /* TEXT */
      )], 14, by)) : ee("v-if", !0), E(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), Ce(n, {
          key: 0,
          class: c(e.n("clear-icon")),
          "var-field-decorator-cover": "",
          name: "close-circle",
          onClick: e.handleClear
        }, null, 8, ["class", "onClick"])) : ee("v-if", !0), j(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), T(
      Me,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), T(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: q({
            borderColor: e.color
          })
        },
        [E(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: q({
              width: e.legendWidth
            })
          },
          [e.placeholder && e.hint ? (p(), Ce(Jr, {
            key: 0,
            to: "body"
          }, [E(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            le(e.placeholder),
            3
            /* TEXT, CLASS */
          )])) : ee("v-if", !0)],
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
          style: q({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [E(
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var zd = ne({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ne
  },
  props: rl,
  setup(e, r) {
    var {
      slots: n
    } = r, a = $(null), t = $(""), o = L(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = L(() => e.hint && (!Fr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Fr(f) || m))
        return Ao("--placeholder-hidden");
      if (l.value)
        return Ao("--placeholder-hint");
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
      var b = En(a.value), h = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + b.width + " * 0.75 + " + h + " * 2)";
    }, u = (v) => {
      C(e.onClear, v);
    }, d = (v) => {
      C(e.onClick, v);
    };
    return Pt(s), tr(s), Tt(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Ao,
      classes: gy,
      isEmpty: Fr,
      handleClear: u,
      handleClick: d
    };
  }
});
zd.render = yy;
const Ld = zd;
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
function wy(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var Cy = Si({
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
    validator: wy
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
}, xe(rl, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Sy,
  classes: ky
} = te("input"), $y = ["placeholder", "enterkeyhint"], Ty = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Oy = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Py(e, r) {
  var n = se("var-field-decorator"), a = se("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [_(
      n,
      Ot(uo({
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
      Jt({
        "append-icon": me(() => [j(e.$slots, "append-icon")]),
        default: me(() => [e.normalizedType === "password" ? (p(), T("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: q({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, $y)) : ee("v-if", !0), e.textarea ? (p(), T("textarea", {
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
      `, 46, Ty)) : (p(), T("input", {
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
        }, null, 46, Oy))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: me(() => [j(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), _(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: r[14] || (r[14] = Tr(() => {
      }, ["stop"]))
    }, Jt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: me(() => [j(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"])],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Rd = ne({
  name: "VarInput",
  components: {
    VarFormDetails: nr,
    VarFieldDecorator: Ld
  },
  props: Cy,
  setup(e) {
    var r = $("var-input-" + ea().uid), n = $(null), a = $(!1), t = $(!1), o = L(() => e.type === "number" ? "text" : e.type), l = L(() => {
      var {
        maxlength: H,
        modelValue: G
      } = e;
      return H ? Fr(G) ? "0 / " + H : String(G).length + "/" + H : "";
    }), i = L(() => e.disabled || e.readonly ? "" : "text"), s = L(() => {
      var {
        hint: H,
        blurColor: G,
        focusColor: x
      } = e;
      if (!H)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? x || "var(--field-decorator-focus-color)" : G || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: y
    } = Pr(), b = (H) => {
      ze(() => {
        var {
          validateTrigger: G,
          rules: x,
          modelValue: Z
        } = e;
        f(G, H, x, Z);
      });
    }, h = (H) => {
      a.value = !0, C(e.onFocus, H), b("onFocus");
    }, w = (H) => {
      a.value = !1, C(e.onBlur, H), b("onBlur");
    }, P = (H) => {
      var G = H.target, {
        value: x
      } = G;
      return e.type === "number" && (x = k(x)), M(Y(x));
    }, O = () => {
      t.value = !0;
    }, S = (H) => {
      t.value && (t.value = !1, H.target.dispatchEvent(new Event("input")));
    }, I = (H) => {
      if (!t.value) {
        var G = P(H);
        C(e["onUpdate:modelValue"], G), C(e.onInput, G, H), b("onInput");
      }
    }, V = (H) => {
      var G = P(H);
      C(e.onChange, G, H), b("onChange");
    }, N = () => {
      var {
        disabled: H,
        readonly: G,
        clearable: x,
        onClear: Z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || G || !x || (C(e["onUpdate:modelValue"], ""), C(Z, ""), b("onClear"));
    }, g = (H) => {
      var {
        disabled: G,
        onClick: x
      } = e;
      d != null && d.disabled.value || G || (C(x, H), b("onClick"));
    }, k = (H) => {
      var G = H.indexOf("-"), x = H.indexOf(".");
      return G > -1 && (H = G === 0 ? "-" + H.replace(/-/g, "") : H.replace(/-/g, "")), x > -1 && (H = H.slice(0, x + 1) + H.slice(x).replace(/\./g, "")), H.replace(/[^-0-9.]/g, "");
    }, Y = (H) => e.modelModifiers.trim ? H.trim() : H, M = (H) => e.maxlength ? H.slice(0, R(e.maxlength)) : H, F = (H) => {
      var {
        disabled: G,
        readonly: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || G || x || H.stopPropagation();
    };
    function X(H) {
      var {
        disabled: G
      } = e;
      d != null && d.disabled.value || G || H.target === n.value || (B(), H.preventDefault());
    }
    var A = () => {
      C(e["onUpdate:modelValue"], ""), y();
    }, z = () => m(e.rules, e.modelValue), B = () => {
      var H;
      (H = n.value) == null || H.focus();
    }, D = () => {
      n.value.blur();
    }, ae = {
      reset: A,
      validate: z,
      resetValidation: y
    };
    return C(u, ae), tr(() => {
      e.autofocus && B();
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
      n: Sy,
      classes: ky,
      isEmpty: Fr,
      handleFocus: h,
      handleBlur: w,
      handleInput: I,
      handleChange: V,
      handleClear: N,
      handleClick: g,
      handleTouchstart: F,
      handleCompositionStart: O,
      handleCompositionEnd: S,
      handleMousedown: X,
      validate: z,
      resetValidation: y,
      reset: A,
      focus: B,
      blur: D
    };
  }
});
Rd.render = Py;
const Qn = Rd;
ie(Qn);
var Dk = Qn;
function Vy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Iy(e) {
  return ["always", "hover", "none"].includes(e);
}
var My = {
  type: {
    type: String,
    default: "default",
    validator: Vy
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
    validator: Iy
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
  n: By,
  classes: Ey
} = te("link");
function Ny(e, r) {
  return p(), Ce(ra(e.tag), De(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: me(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
var Ud = ne({
  name: "VarLink",
  props: My,
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
      o || C(l, t);
    };
    return {
      n: By,
      classes: Ey,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
Ud.render = Ny;
const qa = Ud;
ie(qa);
var Ak = qa, Dy = {
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
}, Yd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Ay() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Yd);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Hd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function zy() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Yd);
  return r || Or("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function Ly() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ir(Hd);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function Ry() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Hd);
  return {
    index: n,
    tabItem: e,
    bindTabItem: r
  };
}
function is(e, r, n, a, t, o, l) {
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
        is(o, a, t, l, i, "next", s);
      }
      function i(s) {
        is(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Yy,
  classes: Hy
} = te("list");
function Fy(e, r) {
  var n = se("var-loading"), a = Ae("ripple");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [j(e.$slots, "default"), e.loading ? j(e.$slots, "loading", {
      key: 0
    }, () => [E(
      "div",
      {
        class: c(e.n("loading"))
      },
      [E(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        le(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), _(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? j(e.$slots, "finished", {
      key: 1
    }, () => [E(
      "div",
      {
        class: c(e.n("finished"))
      },
      le(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? j(e.$slots, "error", {
      key: 2
    }, () => [Te((p(), T(
      "div",
      {
        class: c(e.n("error")),
        onClick: r[0] || (r[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [$e(
        le(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : ee("v-if", !0), E(
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
var Fd = ne({
  name: "VarList",
  directives: {
    Ripple: Ke
  },
  components: {
    VarLoading: cn
  },
  props: Dy,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = Ry(), a = $(null), t = $(null), o, l = () => {
      C(e["onUpdate:error"], !1), C(e["onUpdate:loading"], !0), C(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = Qe(o), {
        bottom: v
      } = Qe(t.value);
      return Math.floor(v) - Re(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Uy(function* () {
        yield ze(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return C(n, {}), r && de(() => r.current.value, u), de(() => [e.loading, e.error, e.finished], u), tr(() => {
      o = vn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), co(s), {
      pack: _e,
      listEl: a,
      detectorEl: t,
      dt: vo,
      isNumber: dr,
      load: l,
      check: u,
      n: Yy,
      classes: Hy
    };
  }
});
Fd.render = Fy;
const Xa = Fd;
ie(Xa);
var zk = Xa, jy = {
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
  classes: Wy,
  n: ls
} = te("loading-bar");
const Gy = ne({
  name: "VarLoadingBar",
  props: jy,
  setup(e) {
    return () => _("div", {
      class: Wy(ls(), [e.error, ls("--error")]),
      style: {
        zIndex: br.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
var jd, Wd, Oo, Gd, ss, qd = {}, qy = {
  value: 0,
  opacity: 0,
  error: !1
}, er = Ye(qy), Xy = (e) => {
  Object.assign(er, e);
}, Ky = (e) => {
  Object.assign(er, e), qd = e;
}, Zy = () => {
  Object.keys(qd).forEach((e) => {
    er[e] !== void 0 && (er[e] = void 0);
  });
}, Xd = () => {
  ss || (ss = !0, ta(Gy, er));
}, nl = () => {
  jd = window.setTimeout(() => {
    if (!(er.value >= 95)) {
      var e = Math.random();
      er.value < 70 && (e = Math.round(5 * Math.random())), er.value += e, nl();
    }
  }, 200);
}, al = () => {
  window.clearTimeout(Wd), window.clearTimeout(jd), window.clearTimeout(Oo), window.clearTimeout(Gd);
}, Jy = () => {
  al(), er.error = !1, er.value = 0, Xd(), Oo = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), nl();
}, Kd = () => {
  al(), er.value = 100, Oo = window.setTimeout(() => {
    er.opacity = 0, Wd = window.setTimeout(() => {
      er.error = !1;
    }, 250);
  }, 300);
}, Qy = () => {
  al(), er.error = !0, er.value === 100 && (er.value = 0), Xd(), Oo = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), nl(), Gd = window.setTimeout(Kd, 300);
}, Zd = {
  start: Jy,
  finish: Kd,
  error: Qy,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Xy,
  setDefaultOptions: Ky,
  resetDefaultOptions: Zy
}, Lk = Zd;
const ki = Zd;
function _y(e) {
  return ["click", "hover"].includes(e);
}
function xy(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
function e0(e) {
  return ["absolute", "fixed"].includes(e);
}
var r0 = {
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
    validator: _y
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: xy
  },
  strategy: {
    type: String,
    default: "absolute",
    validator: e0
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOutside: U(),
  "onUpdate:show": U()
}, {
  n: n0,
  classes: a0
} = te("menu");
function t0(e, r) {
  return p(), T(
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
    [j(e.$slots, "default"), (p(), Ce(Jr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [_(Fe, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: me(() => [Te(E(
        "div",
        {
          ref: "popover",
          style: q({
            zIndex: e.zIndex,
            width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
          }),
          class: c(e.classes(e.n("menu"), e.n("$--box"), e.popoverClass, [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
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
      ), [[Rr, e.show]])]),
      _: 3
      /* FORWARDED */
    }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Jd = ne({
  name: "VarMenu",
  props: r0,
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
      open: y,
      // expose
      close: b,
      // expose
      resize: h
    } = Sd(e);
    return {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      formatElevation: hr,
      toSizeUnit: we,
      n: n0,
      classes: a0,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      resize: h,
      open: y,
      close: b
    };
  }
});
Jd.render = t0;
const Mn = Jd;
ie(Mn);
var Rk = Mn, Qd = Symbol("SELECT_BIND_OPTION_KEY");
function o0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = ir(Qd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function i0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = or(Qd);
  return n || Or("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var l0 = {
  label: {},
  value: {}
}, {
  n: s0,
  classes: u0
} = te("option");
function d0(e, r) {
  var n = se("var-checkbox"), a = se("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return Te((p(), T(
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
    [E(
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
    ), e.multiple ? (p(), Ce(n, {
      key: 0,
      ref: "checkbox",
      "checked-color": e.focusColor,
      modelValue: e.optionSelected,
      "onUpdate:modelValue": r[0] || (r[0] = (l) => e.optionSelected = l),
      onClick: r[1] || (r[1] = Tr(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : ee("v-if", !0), E(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [j(e.$slots, "default", {}, () => [$e(
        le(e.label),
        1
        /* TEXT */
      )])],
      2
      /* CLASS */
    ), _(a, {
      hovering: e.hovering
    }, null, 8, ["hovering"])],
    6
    /* CLASS, STYLE */
  )), [[t], [o, e.handleHovering, "desktop"]]);
}
var _d = ne({
  name: "VarOption",
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  components: {
    VarCheckbox: jn,
    VarHoverOverlay: wr
  },
  props: l0,
  setup(e) {
    var r = $(!1), n = L(() => r.value), a = L(() => e.label), t = L(() => e.value), {
      select: o,
      bindSelect: l
    } = i0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, {
      hovering: v,
      handleHovering: f
    } = Xr(), m = () => {
      i.value && (r.value = !r.value), u(h);
    }, y = () => u(h), b = (w) => {
      r.value = w;
    }, h = {
      label: a,
      value: t,
      selected: n,
      sync: b
    };
    return de([() => e.label, () => e.value], d), l(h), {
      n: s0,
      classes: u0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      hovering: v,
      handleHovering: f,
      handleClick: m,
      handleSelect: y
    };
  }
});
_d.render = d0;
const Ka = _d;
ie(Ka);
var Uk = Ka, v0 = {
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
function f0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: us
} = te("overlay");
const Za = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: v0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = It(() => e.show, 1), {
      disabled: o
    } = oa(), l = () => {
      C(e.onClick), C(e["onUpdate:show"], !1);
    };
    mo(() => e.show, () => e.lockScroll);
    var i = () => _("div", De({
      class: us(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [C(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return _(Fe, {
        name: us("--fade")
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
        return _(Jr, {
          to: u,
          disabled: o.value
        }, f0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ie(Za);
var Yk = Za, c0 = {
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
  n: m0,
  classes: h0
} = te("pagination"), p0 = ["item-mode", "onClick"];
function g0(e, r) {
  var n = se("var-icon"), a = se("var-input"), t = se("var-cell"), o = se("var-menu"), l = Ae("ripple");
  return p(), T(
    "ul",
    {
      class: c(e.n())
    },
    [Te((p(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [j(e.$slots, "prev", {}, () => [_(n, {
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
      [_(a, {
        "var-pagination-cover": "",
        hint: !1,
        disabled: e.disabled,
        modelValue: e.simpleCurrentValue,
        "onUpdate:modelValue": r[1] || (r[1] = (i) => e.simpleCurrentValue = i),
        onBlur: r[2] || (r[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
        onKeydown: r[3] || (r[3] = sl((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), E("span", null, [$e(
        " / " + le(e.pageCount) + " ",
        1
        /* TEXT */
      ), E(
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
      Me,
      {
        key: 1
      },
      We(e.pageList, (i, s) => Te((p(), T("li", {
        key: s,
        "item-mode": e.getMode(i, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(i, s)
      }, [$e(
        le(i),
        1
        /* TEXT */
      )], 10, p0)), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Te((p(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [j(e.$slots, "next", {}, () => [_(n, {
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
      [_(o, {
        placement: "cover-top",
        disabled: e.disabled,
        show: e.menuVisible,
        "onUpdate:show": r[6] || (r[6] = (i) => e.menuVisible = i)
      }, {
        menu: me(() => [(p(!0), T(
          Me,
          null,
          We(e.sizeOption, (i, s) => Te((p(), Ce(t, {
            class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(i)
          }, {
            default: me(() => [$e(
              le(i) + le(e.pack.paginationItem) + " / " + le(e.pack.paginationPage),
              1
              /* TEXT */
            )]),
            _: 2
            /* DYNAMIC */
          }, 1032, ["class", "onClick"])), [[l]])),
          128
          /* KEYED_FRAGMENT */
        ))]),
        default: me(() => [E(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: r[5] || (r[5] = Tr(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [E(
            "span",
            null,
            le(e.size) + le(e.pack.paginationItem) + " / " + le(e.pack.paginationPage),
            1
            /* TEXT */
          ), _(n, {
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
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (p(), T(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [$e(
        le(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), _(a, {
        modelValue: e.quickJumperValue,
        "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
        disabled: e.disabled,
        "var-pagination-cover": "",
        onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
        onKeydown: r[9] || (r[9] = sl((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
      }, null, 8, ["modelValue", "disabled"])],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (p(), T(
      "li",
      {
        key: 4,
        class: c(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
      },
      le(e.totalText),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var xd = ne({
  name: "VarPagination",
  components: {
    VarMenu: Mn,
    VarIcon: Ne,
    VarCell: Fn,
    VarInput: Qn
  },
  directives: {
    Ripple: Ke
  },
  props: c0,
  setup(e) {
    var r = $(!1), n = $(""), a = $("1"), t = $(!1), o = $(!1), l = $(R(e.current) || 1), i = $(R(e.size) || 10), s = $([]), u = L(() => Math.ceil(e.maxPagerCount / 2)), d = L(() => Math.ceil(R(e.total) / R(i.value))), v = L(() => {
      var S = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, R(e.total));
      return [S, I];
    }), f = L(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = (S, I) => dr(S) ? !1 : I === 1 ? t.value : o.value, y = (S, I) => dr(S) ? "basic" : I === 1 ? "head" : "tail", b = (S, I) => {
      if (!(S === l.value || e.disabled)) {
        if (S === "...") {
          l.value = I === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if (S === "prev") {
          l.value = P(l.value - 1);
          return;
        }
        if (S === "next") {
          l.value = P(l.value + 1);
          return;
        }
        dr(S) && (l.value = S);
      }
    }, h = () => {
      e.disabled || (r.value = !0);
    }, w = (S) => {
      i.value = S, r.value = !1;
      var I = P(l.value);
      a.value = String(I), l.value = I;
    }, P = (S) => S > d.value ? d.value : S < 1 ? 1 : S, O = (S, I, V) => {
      V.target.blur();
      var N = P(R(I));
      a.value = String(N), l.value = N, S === "quick" && (n.value = "");
    };
    return de([() => e.current, () => e.size], (S) => {
      var [I, V] = S;
      l.value = R(I) || 1, i.value = R(V || 10);
    }), de([l, i, d], (S, I) => {
      var [V, N, g] = S, [k, Y] = I, M = [], {
        maxPagerCount: F,
        total: X,
        onChange: A
      } = e, z = Math.ceil(R(X) / R(Y)), B = g - (F - u.value) - 1;
      if (a.value = "" + V, g - 2 > F) {
        if (k === void 0 || g !== z)
          for (var D = 2; D < F + 2; D++)
            M.push(D);
        if (V <= F && V < B) {
          M = [];
          for (var ae = 1; ae < F + 1; ae++)
            M.push(ae + 1);
          t.value = !0, o.value = !1;
        }
        if (V > F && V < B) {
          M = [];
          for (var H = 1; H < F + 1; H++)
            M.push(V + H - u.value);
          t.value = V === 2 && F === 1, o.value = !1;
        }
        if (V >= B) {
          M = [];
          for (var G = 1; G < F + 1; G++)
            M.push(g - (F - G) - 1);
          t.value = !1, o.value = !0;
        }
        M = [1, "...", ...M, "...", g];
      } else
        for (var x = 1; x <= g; x++)
          M.push(x);
      s.value = M, k != null && g > 0 && C(A, V, N), C(e["onUpdate:current"], V), C(e["onUpdate:size"], N);
    }, {
      immediate: !0
    }), {
      n: m0,
      classes: h0,
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
      isHideEllipsis: m,
      clickItem: b,
      showMenu: h,
      clickSize: w,
      setPage: O,
      toNumber: R,
      formatElevation: hr
    };
  }
});
xd.render = g0;
const Ja = xd;
ie(Ja);
var Hk = Ja, b0 = {
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
  n: y0,
  classes: w0
} = te("paper");
function C0(e, r) {
  var n = Ae("ripple");
  return Te((p(), T(
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
var ev = ne({
  name: "VarPaper",
  directives: {
    Ripple: Ke
  },
  props: b0,
  setup(e) {
    var r = (n) => {
      C(e.onClick, n);
    };
    return {
      n: y0,
      classes: w0,
      formatElevation: hr,
      toSizeUnit: we,
      handleClick: r
    };
  }
});
ev.render = C0;
const Qa = ev;
ie(Qa);
var Fk = Qa;
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
var S0 = $i({
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
}, xe(Vt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: k0,
  classes: $0
} = te("picker"), ds = 300, T0 = 15, vs = 200, O0 = 1e3, fs = 0, P0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], V0 = ["onTransitionend"], I0 = ["onClick"];
function M0(e, r) {
  var n = se("var-button");
  return p(), Ce(
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
      default: me(() => [E(
        "div",
        De({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [j(e.$slots, "cancel", {}, () => [_(n, {
            class: c(e.n("cancel-button")),
            "var-picker-cover": "",
            text: "",
            "text-color": e.cancelButtonTextColor,
            onClick: e.cancel
          }, {
            default: me(() => [$e(
              le(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])]), j(e.$slots, "title", {}, () => [E(
            "div",
            {
              class: c(e.n("title"))
            },
            le(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), j(e.$slots, "confirm", {}, () => [_(n, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: me(() => [$e(
              le(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])])],
          2
          /* CLASS */
        )) : ee("v-if", !0), E(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), T(
            Me,
            null,
            We(e.scrollColumns, (a) => (p(), T("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(a),
              onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
              onTouchend: (t) => e.handleTouchend(t, a)
            }, [E("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: q({
                transform: "translateY(" + a.translate + "px)",
                transitionDuration: a.duration + "ms",
                transitionProperty: a.duration ? "transform" : "none"
              }),
              onTransitionend: (t) => e.handleTransitionend(a)
            }, [(p(!0), T(
              Me,
              null,
              We(a.column.texts, (t, o) => (p(), T("div", {
                class: c(e.n("option")),
                style: q({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (l) => e.handleClick(a, o)
              }, [E(
                "div",
                {
                  class: c(e.n("text"))
                },
                le(e.textFormatter(t, a.columnIndex)),
                3
                /* TEXT, CLASS */
              )], 14, I0))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, V0)], 42, P0))),
            128
            /* KEYED_FRAGMENT */
          )), E(
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
          ), E(
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
var rv = ne({
  name: "VarPicker",
  components: {
    VarButton: vr,
    VarPopup: Ur
  },
  inheritAttrs: !1,
  props: S0,
  setup(e) {
    var r = $([]), n = L(() => Re(e.optionHeight)), a = L(() => Re(e.optionCount)), t = L(() => a.value * n.value / 2 - n.value / 2), o = L(() => a.value * n.value), l = [], i = !1, s = (A, z) => {
      z.scrollEl = A;
    }, u = (A) => {
      C(e["onUpdate:show"], A);
    }, d = (A) => {
      var z = t.value - A.column.texts.length * n.value, B = n.value + t.value;
      A.translate = dn(A.translate, z, B);
    }, v = (A, z) => {
      var B = Math.round((t.value - z) / n.value);
      return af(B, A.column.texts);
    }, f = (A) => (A.translate = t.value - A.index * n.value, A.translate), m = () => {
      var A = r.value.map((B) => B.column.texts[B.index]), z = r.value.map((B) => B.index);
      return {
        texts: A,
        indexes: z
      };
    }, y = function(A, z) {
      z === void 0 && (z = 0), f(A), A.duration = z;
    }, b = (A, z, B) => {
      A.translate += Math.abs(z / B) / 3e-3 * (z < 0 ? -1 : 1);
    }, h = (A, z) => {
      i || (A.index = z, A.scrolling = !0, y(A, vs));
    }, w = (A) => {
      A.touching = !0, A.translate = Mo(A.scrollEl);
    }, P = (A, z) => {
      if (z.touching) {
        i = !0, z.scrolling = !1, z.duration = 0;
        var {
          clientY: B
        } = A.touches[0], D = z.prevY !== void 0 ? B - z.prevY : 0;
        z.prevY = B, z.translate += D, d(z);
        var ae = performance.now();
        ae - z.momentumTime > ds && (z.momentumTime = ae, z.momentumPrevY = z.translate);
      }
    }, O = (A, z) => {
      z.touching = !1, z.prevY = void 0;
      var B = z.translate - z.momentumPrevY, D = performance.now() - z.momentumTime, ae = Math.abs(B) >= T0 && D <= ds;
      ae && b(z, B, D), z.index = v(z, z.translate);
      var H = z.translate, G = f(z);
      z.scrolling = G !== H, y(z, ae ? O0 : vs), z.scrolling || Y(z), yr(() => {
        i = !1;
      });
    }, S = (A) => {
      A.scrolling = !1, Y(A);
    }, I = (A) => A.map((z, B) => {
      var D, ae = Ve(z) ? {
        texts: z
      } : z, H = {
        id: fs++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (D = ae.initialIndex) != null ? D : 0,
        columnIndex: B,
        duration: 0,
        momentumTime: 0,
        column: ae,
        scrollEl: null,
        scrolling: !1
      };
      return y(H), H;
    }), V = (A) => {
      var z = [];
      return N(z, A, 0, !0), z;
    }, N = function(A, z, B, D) {
      if (D === void 0 && (D = !1), Ve(z) && z.length) {
        var ae, H = D && (ae = e.cascadeInitialIndexes[A.length]) != null ? ae : 0, G = {
          id: fs++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: H,
          columnIndex: B,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: z.map((x) => x[e.textKey])
          },
          columns: z,
          scrollEl: null,
          scrolling: !1
        };
        A.push(G), y(G), N(A, G.columns[G.index].children, B + 1, D);
      }
    }, g = (A) => {
      r.value.splice(r.value.indexOf(A) + 1), N(r.value, A.columns[A.index].children, A.columnIndex + 1);
    }, k = () => {
      var {
        indexes: A
      } = m();
      return A.every((z, B) => z === l[B]);
    }, Y = (A) => {
      var {
        cascade: z,
        onChange: B
      } = e;
      if (!k()) {
        z && g(A);
        var D = r.value.some((G) => G.scrolling);
        if (!D) {
          var {
            texts: ae,
            indexes: H
          } = m();
          l = [...H], C(B, ae, H);
        }
      }
    }, M = () => {
      if (e.cascade) {
        var A = r.value.find((z) => z.scrolling);
        A && (A.index = v(A, Mo(A.scrollEl)), A.scrolling = !1, y(A), g(A));
      } else
        r.value.forEach((z) => {
          z.index = v(z, Mo(z.scrollEl)), y(z);
        });
    }, F = () => {
      M();
      var {
        texts: A,
        indexes: z
      } = m();
      l = [...z], C(e.onConfirm, A, z);
    }, X = () => {
      M();
      var {
        texts: A,
        indexes: z
      } = m();
      l = [...z], C(e.onCancel, A, z);
    };
    return de(() => e.columns, (A) => {
      r.value = e.cascade ? V(ul(A)) : I(ul(A));
      var {
        indexes: z
      } = m();
      l = [...z];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: k0,
      classes: $0,
      pack: _e,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Fe,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: w,
      handleTouchmove: P,
      handleTouchend: O,
      handleTransitionend: S,
      confirm: F,
      cancel: X,
      dt: vo,
      handleClick: h
    };
  }
});
rv.render = M0;
const Dt = rv;
var fr;
function Bn(e) {
  return new Promise((r) => {
    Bn.close();
    var n = Ve(e) ? {
      columns: e
    } : e, a = Ye(n);
    a.dynamic = !0, a.teleport = "body", fr = a;
    var {
      unmountInstance: t
    } = ta(Dt, a, {
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
Bn.close = function() {
  if (fr != null) {
    var e = fr;
    fr = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Bn.Component = Dt;
ie(Dt);
ie(Dt, Bn);
var jk = Dt;
function B0(e) {
  return ["linear", "circle"].includes(e);
}
function E0(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var N0 = {
  mode: {
    type: String,
    default: "linear",
    validator: B0
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
    validator: E0
  }
}, {
  n: D0,
  classes: A0
} = te("progress"), z0 = ["viewBox"], L0 = ["r", "stroke-width", "stroke-dasharray"], R0 = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function U0(e, r) {
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
      [E(
        "div",
        {
          class: c(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
          style: q({
            height: e.toSizeUnit(e.lineWidth),
            background: e.trackColor
          })
        },
        [e.indeterminate ? (p(), T(
          "div",
          {
            key: 0,
            class: c(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
          },
          [E(
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
          ), E(
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
        )) : (p(), T(
          "div",
          {
            key: 1,
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
      ), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [$e(
          le(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.mode === "circle" ? (p(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), T("svg", {
        class: c(e.n("circle-svg")),
        style: q({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (p(), T("circle", {
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
      }, null, 14, L0)) : ee("v-if", !0), E("circle", {
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
      }, null, 14, R0)], 14, z0)), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [$e(
          le(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var nv = ne({
  name: "VarProgress",
  props: N0,
  setup(e) {
    var r = 100, n = 20, a = 2 * Math.PI * n, t = L(() => {
      var l = R(e.value), i = l > r ? r : l, s = l > r ? r : Math.round(l);
      return {
        width: i + "%",
        roundValue: s + "%"
      };
    }), o = L(() => {
      var {
        size: l,
        lineWidth: i,
        value: s
      } = e, u = n / (1 - Re(i) / Re(l)) * 2, d = "0 0 " + u + " " + u, v = R(s) > r ? r : Math.round(R(s)), f = "" + (r - v) / r * a, m = Re(i) / Re(l) * u;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: v + "%"
      };
    });
    return {
      n: D0,
      classes: A0,
      toSizeUnit: we,
      linearProps: t,
      CIRCUMFERENCE: a,
      RADIUS: n,
      circleProps: o
    };
  }
});
nv.render = U0;
const _a = nv;
ie(_a);
var Wk = _a, Y0 = {
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
function cs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function ms(e) {
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
  n: hs,
  classes: H0
} = te("pull-refresh"), ps = 150;
function F0(e, r) {
  var n = se("var-icon");
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
    [E(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: q(e.controlStyle)
      },
      [_(n, {
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
var av = ne({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ne
  },
  props: Y0,
  setup(e) {
    var r = $(0), n = $(null), a = $(null), t = $(0), o = $("-125%"), l = $("arrow-down"), i = $("default"), s = $(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var g = ms(function* (k) {
        if (l.value !== k)
          return l.value = k, new Promise((Y) => {
            window.setTimeout(Y, ps);
          });
      });
      return function(Y) {
        return g.apply(this, arguments);
      };
    }(), y = L(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = L(() => ({
      transform: "translate3d(0px, " + (Xe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), h = L(() => Math.abs(2 * r.value)), w = L(() => i.value === "success"), P = (g) => {
      var k = "classList" in u ? u : document.body;
      k.classList[g](hs() + "--lock");
    }, O = (g) => {
      if (r.value === 0) {
        var {
          width: k
        } = Qe(a.value);
        r.value = -(k + k * 0.25);
      }
      v = g.touches[0].clientY, f = 0, d = vn(g.target);
    }, S = (g) => {
      if (!(!y.value || !d) && !(d !== u && pa(d) > 0)) {
        var k = pa(u);
        if (!(k > 0)) {
          var Y = k === 0, M = g.touches[0];
          f = M.clientY - v, Y && f >= 0 && g.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = g.touches[0].clientY), Y && dr(o.value) && o.value > r.value && P("add");
          var F = (g.touches[0].clientY - t.value) / 2 + r.value;
          o.value = F >= h.value ? h.value : F, m(o.value >= h.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var g = ms(function* () {
        y.value && (s.value = !0, R(o.value) >= h.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = h.value * 0.3, C(e["onUpdate:modelValue"], !0), ze(() => {
          C(e.onRefresh);
        }), P("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, P("remove");
        }, R(e.animationDuration))), d = null);
      });
      return function() {
        return g.apply(this, arguments);
      };
    }(), V = () => {
      u = e.target ? Es(e.target, "PullRefresh") : vn(n.value);
    }, N = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    };
    return de(() => e.modelValue, (g) => {
      g === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, N();
      }, R(e.successDuration)));
    }), tr(V), fn(n, "touchmove", S), {
      n: hs,
      classes: H0,
      ICON_TRANSITION: ps,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: O,
      touchMove: S,
      touchEnd: I,
      iconName: l,
      controlStyle: b,
      isSuccess: w
    };
  }
});
av.render = F0;
const xa = av;
ie(xa);
var Gk = xa, j0 = {
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
}, tv = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function W0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(tv);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function G0() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(tv);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: q0,
  classes: X0
} = te("radio");
function K0(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [E(
      "div",
      De({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Te((p(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [_(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-marked",
          size: e.iconSize
        }, null, 8, ["class", "size"])]) : j(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [_(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-blank",
          size: e.iconSize
        }, null, 8, ["class", "size"])]), _(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }], [l, e.handleHovering, "desktop"]]), E(
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
    ), _(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var ov = ne({
  name: "VarRadio",
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  inheritAttrs: !1,
  props: j0,
  setup(e) {
    var r = ba(e, "modelValue"), n = L(() => r.value === e.checkedValue), a = $(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = G0(), {
      hovering: l,
      handleHovering: i
    } = Xr(), {
      form: s,
      bindForm: u
    } = Vr(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Pr(), y = (V) => {
      ze(() => {
        var {
          validateTrigger: N,
          rules: g,
          modelValue: k
        } = e;
        v(N, V, g, k);
      });
    }, b = (V) => {
      var {
        checkedValue: N,
        onChange: g
      } = e;
      t && r.value === N || (r.value = V, C(g, r.value), t == null || t.onToggle(N), y("onChange"));
    }, h = (V) => {
      var {
        disabled: N,
        readonly: g,
        uncheckedValue: k,
        checkedValue: Y,
        onClick: M
      } = e;
      s != null && s.disabled.value || N || (C(M, V), !(s != null && s.readonly.value || g) && (a.value = !0, b(n.value ? k : Y)));
    }, w = (V) => {
      var {
        checkedValue: N,
        uncheckedValue: g
      } = e;
      r.value = V === N ? N : g;
    }, P = () => {
      r.value = e.uncheckedValue, m();
    }, O = () => f(e.rules, e.modelValue), S = (V) => {
      var {
        uncheckedValue: N,
        checkedValue: g
      } = e, k = ![N, g].includes(V);
      k && (V = n.value ? N : g), b(V);
    }, I = {
      sync: w,
      validate: O,
      resetValidation: m,
      reset: P
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
      n: q0,
      classes: X0,
      handleClick: h,
      toggle: S,
      reset: P,
      validate: O,
      resetValidation: m
    };
  }
});
ov.render = K0;
const et = ov;
ie(et);
var qk = et;
function Z0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var J0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Z0
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
  n: Q0,
  classes: _0
} = te("radio-group");
function x0(e, r) {
  var n = se("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [E(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), _(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var iv = ne({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: nr
  },
  props: J0,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = W0(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Pr(), u = L(() => o.value), d = (h) => {
      ze(() => {
        var {
          validateTrigger: w,
          rules: P,
          modelValue: O
        } = e;
        l(w, h, P, O);
      });
    }, v = () => n.forEach((h) => {
      var {
        sync: w
      } = h;
      return w(e.modelValue);
    }), f = (h) => {
      C(e["onUpdate:modelValue"], h), C(e.onChange, h), d("onChange");
    }, m = () => i(e.rules, e.modelValue), y = () => {
      C(e["onUpdate:modelValue"], void 0), s();
    };
    de(() => e.modelValue, v), de(() => r.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: y,
      resetValidation: s,
      errorMessage: u
    };
    return C(t, b), a(b), {
      errorMessage: o,
      n: Q0,
      classes: _0,
      reset: y,
      validate: m,
      resetValidation: s
    };
  }
});
iv.render = x0;
const rt = iv;
ie(rt);
var Xk = rt, e1 = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: String,
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: String,
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: [String, Number],
  gap: [String, Number],
  namespace: String,
  half: Boolean,
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: Boolean,
  disabledColor: String,
  readonly: Boolean,
  ripple: {
    type: Boolean,
    default: !0
  },
  clearable: Boolean,
  rules: Array,
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: la
} = te("rate"), r1 = ["onClick"];
function n1(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return p(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [E(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), T(
        Me,
        null,
        We(e.toNumber(e.count), (i) => Te((p(), T("div", {
          key: i,
          style: q(e.getStyle(i)),
          class: c(e.getClass(i)),
          onClick: (s) => e.handleClick(i, s)
        }, [_(n, {
          class: c(e.n("content-icon")),
          "var-rate-cover": "",
          transition: 0,
          namespace: e.namespace,
          name: e.getCurrentState(i).name,
          style: q({
            fontSize: e.toSizeUnit(e.size)
          })
        }, null, 8, ["class", "namespace", "name", "style"]), _(a, {
          hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])], 14, r1)), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), _(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var lv = ne({
  name: "VarRate",
  components: {
    VarIcon: Ne,
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  props: e1,
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
    } = Xr(), s = $(-1), u = Number(e.modelValue), d = (S) => {
      var {
        count: I,
        gap: V
      } = e;
      return {
        color: f(S).color,
        marginRight: S !== R(I) ? we(V) : 0
      };
    }, v = (S) => {
      var {
        name: I,
        color: V
      } = f(S);
      return {
        [la("content")]: !0,
        [la("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [la("--error")]: a.value,
        [la("--primary")]: I !== e.emptyIcon && !V
      };
    }, f = (S) => {
      var {
        modelValue: I,
        disabled: V,
        disabledColor: N,
        color: g,
        half: k,
        emptyColor: Y,
        icon: M,
        halfIcon: F,
        emptyIcon: X
      } = e, A = g;
      return (V || r != null && r.disabled.value) && (A = N), S <= R(I) ? {
        color: A,
        name: M
      } : k && S <= R(I) + 0.5 ? {
        color: A,
        name: F
      } : {
        color: V || r != null && r.disabled.value ? N : Y,
        name: X
      };
    }, m = (S, I) => {
      var {
        half: V,
        clearable: N
      } = e, {
        offsetWidth: g
      } = I.target;
      V && I.offsetX <= Math.floor(g / 2) && (S -= 0.5), u === S && N && (S = 0), u = S, C(e["onUpdate:modelValue"], S);
    }, y = () => o(e.rules, R(e.modelValue)), b = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = (S, I) => {
      var {
        readonly: V,
        disabled: N,
        onChange: g
      } = e;
      V || N || r != null && r.disabled.value || r != null && r.readonly.value || (m(S, I), C(g, S), b());
    }, w = (S) => (I) => {
      s.value = S, i.value = I;
    }, P = () => {
      C(e["onUpdate:modelValue"], 0), l();
    }, O = {
      reset: P,
      validate: y,
      resetValidation: l
    };
    return C(n, O), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: d,
      getClass: v,
      getCurrentState: f,
      handleClick: h,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: w,
      reset: P,
      validate: y,
      resetValidation: l,
      toSizeUnit: we,
      toNumber: R,
      n: la
    };
  }
});
lv.render = n1;
const nt = lv;
ie(nt);
var Kk = nt, a1 = {
  imageSize: [String, Number],
  type: {
    type: String,
    default: "success"
  },
  title: String,
  description: String,
  animation: {
    type: Boolean,
    default: !0
  }
}, t1 = (e) => (gn(""), e = e(), bn(), e), o1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, i1 = /* @__PURE__ */ t1(() => /* @__PURE__ */ E(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), l1 = [i1];
function s1(e, r) {
  return p(), T("svg", o1, l1);
}
var sv = ne({});
sv.render = s1;
const u1 = sv;
var d1 = (e) => (gn(""), e = e(), bn(), e), v1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, f1 = /* @__PURE__ */ d1(() => /* @__PURE__ */ E(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), c1 = [f1];
function m1(e, r) {
  return p(), T("svg", v1, c1);
}
var uv = ne({});
uv.render = m1;
const h1 = uv;
var p1 = (e) => (gn(""), e = e(), bn(), e), g1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, b1 = /* @__PURE__ */ p1(() => /* @__PURE__ */ E(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), y1 = [b1];
function w1(e, r) {
  return p(), T("svg", g1, y1);
}
var dv = ne({});
dv.render = w1;
const C1 = dv;
var {
  n: S1,
  classes: k1
} = te("result");
function $1(e, r) {
  return p(), T(
    Me,
    null,
    [E(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), E(
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
    ), E(
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
    ), E(
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
    ), E(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), E(
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
var vv = ne({
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
      n: S1,
      classes: k1,
      toNumber: R
    };
  }
});
vv.render = $1;
const T1 = vv;
var O1 = (e) => (gn(""), e = e(), bn(), e), P1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, V1 = /* @__PURE__ */ O1(() => /* @__PURE__ */ E(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), I1 = [V1];
function M1(e, r) {
  return p(), T("svg", P1, I1);
}
var fv = ne({});
fv.render = M1;
const B1 = fv;
var E1 = (e) => (gn(""), e = e(), bn(), e), N1 = {
  viewBox: "-4 -4 32 32"
}, D1 = /* @__PURE__ */ E1(() => /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), A1 = [D1];
function z1(e, r) {
  return p(), T("svg", N1, A1);
}
var cv = ne({});
cv.render = z1;
const L1 = cv;
var {
  n: R1,
  classes: U1
} = te("result");
function Y1(e, r) {
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
      [E(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: q({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), Ce(ra(e.type), {
          "border-size": e.borderSize,
          animation: e.animation
        }, null, 8, ["border-size", "animation"]))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "title", {}, () => [e.title ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      le(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      le(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var mv = ne({
  name: "VarResult",
  components: {
    Info: u1,
    Success: T1,
    Warning: C1,
    Error: h1,
    Question: B1,
    Empty: L1
  },
  props: a1,
  setup(e) {
    var r = L(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = L(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: R1,
      classes: U1,
      toNumber: R,
      toPxNum: Re,
      toSizeUnit: we,
      circleSize: r,
      borderSize: n
    };
  }
});
mv.render = Y1;
const at = mv;
ie(at);
var Zk = at;
function H1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function F1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var j1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: H1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: F1
  },
  onClick: U()
}, {
  n: W1,
  classes: G1
} = te("row");
function q1(e, r) {
  return p(), T(
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
var hv = ne({
  name: "VarRow",
  props: j1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = _m(), t = L(() => {
      var s = Re(e.gutter);
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
    return de(() => a.value, o), de(() => e.gutter, o), n(i), {
      n: W1,
      classes: G1,
      average: t,
      handleClick: l,
      padStartFlex: _t
    };
  }
});
hv.render = q1;
const tt = hv;
ie(tt);
var Jk = tt;
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
function X1(e) {
  return ["left", "right", "center"].includes(e);
}
var K1 = Ti({
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
    validator: X1
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
}, xe(rl, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Z1,
  classes: J1
} = te("select"), Q1 = {
  key: 1
};
function _1(e, r) {
  var n = se("var-chip"), a = se("var-icon"), t = se("var-field-decorator"), o = se("var-menu"), l = se("var-form-details");
  return p(), T(
    "div",
    {
      class: c(e.n()),
      onClick: r[3] || (r[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [_(o, {
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
      menu: me(() => [E(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )]),
      default: me(() => [_(
        t,
        Ot(uo({
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
        Jt({
          "append-icon": me(() => [j(e.$slots, "append-icon")]),
          default: me(() => [E(
            "div",
            {
              class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
              style: q({
                textAlign: e.textAlign,
                color: e.textColor
              })
            },
            [E(
              "div",
              {
                class: c(e.n("label"))
              },
              [e.isEmptyModelValue ? ee("v-if", !0) : j(e.$slots, "selected", {
                key: 0
              }, () => [e.multiple ? (p(), T(
                Me,
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
                    Me,
                    null,
                    We(e.labels, (i) => (p(), Ce(n, {
                      class: c(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: i,
                      onClick: r[0] || (r[0] = Tr(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(i)
                    }, {
                      default: me(() => [$e(
                        le(i),
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
                )) : (p(), T(
                  "div",
                  {
                    key: 1,
                    class: c(e.n("values"))
                  },
                  le(e.labels.join(e.separator)),
                  3
                  /* TEXT, CLASS */
                ))],
                64
                /* STABLE_FRAGMENT */
              )) : (p(), T(
                "span",
                Q1,
                le(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.enableCustomPlaceholder ? (p(), T(
              "span",
              {
                key: 0,
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                style: q({
                  color: e.placeholderColor
                })
              },
              le(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )) : ee("v-if", !0), j(e.$slots, "arrow-icon", {
              focus: e.showMenu
            }, () => [_(a, {
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
          fn: me(() => [j(e.$slots, "prepend-icon")]),
          key: "0"
        } : void 0]),
        1040
        /* FULL_PROPS, DYNAMIC_SLOTS */
      )]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]), _(l, {
      "error-message": e.errorMessage,
      onClick: r[2] || (r[2] = Tr(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var pv = ne({
  name: "VarSelect",
  components: {
    VarIcon: Ne,
    VarMenu: Mn,
    VarChip: Wn,
    VarFieldDecorator: Ld,
    VarFormDetails: nr
  },
  props: K1,
  setup(e) {
    var r = $(!1), n = $(!1), a = L(() => e.multiple), t = L(() => e.focusColor), o = $(""), l = $([]), i = L(() => Fr(e.modelValue)), s = L(() => e.disabled || e.readonly ? "" : "pointer"), u = $(0), {
      bindForm: d,
      form: v
    } = Vr(), {
      length: f,
      options: m,
      bindOptions: y
    } = o0(), {
      errorMessage: b,
      validateWithTrigger: h,
      validate: w,
      // expose
      resetValidation: P
    } = Pr(), O = $(null), S = L(() => e.variant === "outlined" ? "bottom" : "cover-top"), I = L(() => {
      var {
        hint: J,
        blurColor: Q,
        focusColor: oe
      } = e;
      if (!J)
        return b.value ? "var(--field-decorator-error-color)" : r.value ? oe || "var(--field-decorator-focus-color)" : Q || "var(--field-decorator-blur-color)";
    }), V = L(() => !e.hint && Fr(e.modelValue)), N = () => {
      var {
        multiple: J,
        modelValue: Q
      } = e;
      if (J) {
        var oe = Q;
        l.value = oe.map(Y);
      }
      !J && !Fr(Q) && (o.value = Y(Q)), !J && Fr(Q) && (o.value = "");
    }, g = (J) => {
      ze(() => {
        var {
          validateTrigger: Q,
          rules: oe,
          modelValue: ce
        } = e;
        h(Q, J, oe, ce);
      });
    }, k = (J) => {
      var {
        value: Q,
        label: oe
      } = J;
      return Q.value != null ? Q.value : oe.value;
    }, Y = (J) => {
      var Q, oe, ce = m.find((ke) => {
        var {
          value: Ie
        } = ke;
        return Ie.value === J;
      });
      return ce || (ce = m.find((ke) => {
        var {
          label: Ie
        } = ke;
        return Ie.value === J;
      })), (Q = (oe = ce) == null ? void 0 : oe.label.value) != null ? Q : "";
    }, M = () => {
      var {
        disabled: J,
        readonly: Q,
        onFocus: oe
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || J || Q || (u.value = Re(e.offsetY), r.value = !0, C(oe), g("onFocus"));
    }, F = () => {
      var {
        disabled: J,
        readonly: Q,
        onBlur: oe
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || J || Q || (H(), C(oe), g("onBlur"));
    }, X = (J) => {
      var {
        disabled: Q,
        readonly: oe,
        multiple: ce,
        onChange: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Q || oe)) {
        var Ie = ce ? m.filter((W) => {
          var {
            selected: re
          } = W;
          return re.value;
        }).map(k) : k(J);
        C(e["onUpdate:modelValue"], Ie), C(ke, Ie), g("onChange"), ce || H();
      }
    }, A = () => {
      var {
        disabled: J,
        readonly: Q,
        multiple: oe,
        clearable: ce,
        onClear: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || Q || !ce)) {
        var Ie = oe ? [] : void 0;
        C(e["onUpdate:modelValue"], Ie), C(ke, Ie), g("onClear");
      }
    }, z = (J) => {
      var {
        disabled: Q,
        onClick: oe
      } = e;
      v != null && v.disabled.value || Q || (C(oe, J), g("onClick"));
    }, B = (J) => {
      var {
        disabled: Q,
        readonly: oe,
        modelValue: ce,
        onClose: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Q || oe)) {
        var Ie = ce, W = m.find((ue) => {
          var {
            label: ye
          } = ue;
          return ye.value === J;
        }), re = Ie.filter((ue) => {
          var ye;
          return ue !== ((ye = W.value.value) != null ? ye : W.label.value);
        });
        C(e["onUpdate:modelValue"], re), C(ke, re), g("onClose");
      }
    }, D = () => {
      var {
        multiple: J,
        modelValue: Q
      } = e;
      if (J) {
        var oe = Q;
        m.forEach((ce) => ce.sync(oe.includes(k(ce))));
      } else
        m.forEach((ce) => ce.sync(Q === k(ce)));
      N();
    }, ae = () => {
      u.value = Re(e.offsetY), r.value = !0, n.value = !0;
    }, H = () => {
      r.value = !1, n.value = !1;
    }, G = () => w(e.rules, e.modelValue), x = () => {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    de(() => e.multiple, () => {
      var {
        multiple: J,
        modelValue: Q
      } = e;
      J && !Ve(Q) && Or("Select", "The modelValue must be an array when multiple is true");
    }), de(() => e.modelValue, D, {
      deep: !0
    }), de(() => f.value, D);
    var Z = {
      multiple: a,
      focusColor: t,
      computeLabel: N,
      onSelect: X,
      reset: x,
      validate: G,
      resetValidation: P
    };
    return y(Z), C(d, Z), {
      offsetY: u,
      isFocus: r,
      showMenu: n,
      errorMessage: b,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: O,
      placement: S,
      cursor: s,
      placeholderColor: I,
      enableCustomPlaceholder: V,
      n: Z1,
      classes: J1,
      handleFocus: M,
      handleBlur: F,
      handleClear: A,
      handleClick: z,
      handleClose: B,
      reset: x,
      validate: G,
      resetValidation: P,
      focus: ae,
      blur: H
    };
  }
});
pv.render = _1;
const ot = pv;
ie(ot);
var Qk = ot, x1 = {
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
  n: ew,
  classes: rw
} = te("skeleton");
function nw(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (p(), T(
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
          style: q({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [E(
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
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), T(
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
            style: q({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [E(
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
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), T(
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
              style: q({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [E(
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
          )) : ee("v-if", !0), (p(!0), T(
            Me,
            null,
            We(e.toNumber(e.rows), (n, a) => (p(), T(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: q({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [E(
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
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (p(), T(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: q({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [E(
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var gv = ne({
  name: "VarSkeleton",
  props: x1,
  setup() {
    return {
      n: ew,
      classes: rw,
      toSizeUnit: we,
      toNumber: R
    };
  }
});
gv.render = nw;
const it = gv;
ie(it);
var _k = it;
function aw(e) {
  return ["always", "normal", "never"].includes(e);
}
var qe = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), tw = {
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
    validator: aw
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
  n: gs,
  classes: ow
} = te("slider"), iw = ["onTouchstart"];
function lw(e, r) {
  var n = se("var-hover-overlay"), a = se("var-form-details"), t = Ae("hover");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [E(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: r[0] || (r[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [E(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [E(
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
        ), E(
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
      ), (p(!0), T(
        Me,
        null,
        We(e.thumbList, (o) => (p(), T("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: q(e.thumbStyle(o)),
          onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
        }, [j(e.$slots, "button", {
          currentValue: o.text
        }, () => [Te(E(
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
        ), [[t, (l) => e.hover(l, o), "desktop"]]), E(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
            style: q({
              background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
            })
          },
          [_(n, {
            hovering: o.hovering
          }, null, 8, ["hovering"])],
          6
          /* CLASS, STYLE */
        ), E(
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
          [E(
            "span",
            null,
            le(o.text),
            1
            /* TEXT */
          )],
          6
          /* CLASS, STYLE */
        )])], 46, iw))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), _(a, {
      "error-message": e.errorMessage,
      class: c(e.n("form")),
      "var-slider-cover": ""
    }, null, 8, ["error-message", "class"])],
    2
    /* CLASS */
  );
}
var bv = ne({
  name: "VarSlider",
  components: {
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  directives: {
    Hover: Ar
  },
  props: tw,
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
    } = Xr(), {
      hovering: u,
      handleHovering: d
    } = Xr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = $(null), b = $(0), h = $(!1), w = Ye({
      [qe.First]: f(),
      [qe.Second]: f()
    }), P = L(() => R(e.max) - R(e.min)), O = L(() => b.value / P.value * R(e.step)), S = L(() => {
      var {
        modelValue: W,
        range: re
      } = e, ue = [];
      return re && Ve(W) ? ue = [{
        value: X(W[0]),
        enumValue: qe.First,
        text: A(W[0]),
        hovering: ua(i),
        handleHovering: s
      }, {
        value: X(W[1]),
        enumValue: qe.Second,
        text: A(W[1]),
        hovering: ua(u),
        handleHovering: d
      }] : dr(W) && (ue = [{
        value: X(W),
        enumValue: qe.First,
        text: A(W),
        hovering: ua(i),
        handleHovering: s
      }]), ue;
    }), I = L(() => {
      var {
        activeColor: W,
        range: re,
        modelValue: ue
      } = e, ye = re && Ve(ue) ? X(Math.min(ue[0], ue[1])) : 0, Ue = re && Ve(ue) ? X(Math.max(ue[0], ue[1])) - ye : X(ue);
      return g.value ? {
        left: "0px",
        height: Ue + "%",
        bottom: ye + "%",
        background: W
      } : {
        top: "0px",
        width: Ue + "%",
        left: ye + "%",
        background: W
      };
    }), V = L(() => e.disabled || (n == null ? void 0 : n.disabled.value)), N = L(() => e.readonly || (n == null ? void 0 : n.readonly.value)), g = L(() => e.direction === "vertical"), k, Y = (W) => {
      var re = W.currentTarget;
      return re ? g.value ? b.value - (W.clientY - Qe(re).top) : W.clientX - of(re) : 0;
    }, M = (W) => {
      var re = g.value ? "bottom" : "left";
      return {
        [re]: W.value + "%",
        zIndex: w[W.enumValue].active ? 1 : void 0
      };
    }, F = (W) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[W].active, X = (W) => {
      var {
        min: re,
        max: ue
      } = e;
      return W < R(re) ? 0 : W > R(ue) ? 100 : (W - R(re)) / P.value * 100;
    }, A = (W) => {
      if (!dr(W))
        return 0;
      var re = W;
      re < Number(e.min) && (re = Number(e.min)), re > Number(e.max) && (re = Number(e.max));
      var ue = parseInt("" + re, 10) === re;
      return ue ? re : R(re.toPrecision(5));
    }, z = (W, re) => {
      V.value || re.handleHovering(W);
    }, B = (W, re) => {
      var ue = [], {
        step: ye,
        range: Ue,
        modelValue: Le,
        onChange: He,
        min: Ge
      } = e, ve = R(ye), Se = Math.round(W / O.value), ge = Se * ve + R(Ge), Oe = w[re].percentValue * ve + R(Ge);
      if (w[re].percentValue = Se, Ue && Ve(Le) && (ue = re === qe.First ? [ge, Le[1]] : [Le[0], ge]), Oe !== ge) {
        var Pe = Ue ? ue.map((je) => A(je)) : A(ge);
        C(He, Pe), C(e["onUpdate:modelValue"], Pe), m();
      }
    }, D = (W) => {
      if (!e.range)
        return qe.First;
      var re = w[qe.First].percentValue * O.value, ue = w[qe.Second].percentValue * O.value, ye = Math.abs(W - re), Ue = Math.abs(W - ue);
      return ye <= Ue ? qe.First : qe.Second;
    }, ae = () => {
      document.addEventListener("touchmove", x, {
        passive: !1
      }), document.addEventListener("touchend", Z), document.addEventListener("touchcancel", Z);
    }, H = () => {
      document.removeEventListener("touchmove", x), document.removeEventListener("touchend", Z), document.removeEventListener("touchcancel", Z);
    }, G = (W, re) => {
      if (b.value || (b.value = y.value.offsetWidth), V.value || (w[re].active = !0), k = re, ae(), !(V.value || N.value)) {
        C(e.onStart), h.value = !0;
        var {
          clientX: ue,
          clientY: ye
        } = W.touches[0];
        w[re].startPosition = g.value ? ye : ue;
      }
    }, x = (W) => {
      if (W.preventDefault(), !(V.value || N.value || !h.value)) {
        var {
          startPosition: re,
          currentOffset: ue
        } = w[k], {
          clientX: ye,
          clientY: Ue
        } = W.touches[0], Le = (g.value ? re - Ue : ye - re) + ue;
        Le <= 0 ? Le = 0 : Le >= b.value && (Le = b.value), B(Le, k);
      }
    }, Z = () => {
      H();
      var {
        range: W,
        modelValue: re,
        onEnd: ue,
        step: ye,
        min: Ue
      } = e;
      if (V.value || (w[k].active = !1), !(V.value || N.value)) {
        var Le = [];
        w[k].currentOffset = w[k].percentValue * O.value;
        var He = w[k].percentValue * R(ye) + R(Ue);
        W && Ve(re) && (Le = k === qe.First ? [He, re[1]] : [re[0], He]), C(ue, W ? Le : He), h.value = !1;
      }
    }, J = (W) => {
      if (!(V.value || N.value) && !W.target.closest("." + gs("thumb"))) {
        var re = Y(W), ue = D(re);
        k = ue, B(re, ue), Z();
      }
    }, Q = () => {
      var W = R(e.step);
      return isNaN(W) ? (ml("Slider", 'type of prop "step" should be Number'), !1) : W < 0 ? (ml("Slider", '"step" should be > 0'), !1) : !0;
    }, oe = () => {
      var {
        range: W,
        modelValue: re
      } = e;
      return W && !Ve(re) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !W && Ve(re) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : W && Ve(re) && re.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ce = function(W, re) {
      W === void 0 && (W = e.modelValue), re === void 0 && (re = R(e.step));
      var ue = (ye) => {
        var {
          min: Ue,
          max: Le
        } = e;
        return ye < R(Ue) ? 0 : ye > R(Le) ? P.value / re : (ye - R(Ue)) / re;
      };
      e.range && Ve(W) ? (w[qe.First].percentValue = ue(W[0]), w[qe.First].currentOffset = w[qe.First].percentValue * O.value, w[qe.Second].percentValue = ue(W[1]), w[qe.Second].currentOffset = w[qe.Second].percentValue * O.value) : dr(W) && (w[qe.First].currentOffset = ue(W) * O.value);
    }, ke = () => {
      var W = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], W), l();
    }, Ie = {
      reset: ke,
      validate: v,
      resetValidation: l
    };
    return C(r, Ie), de([() => e.modelValue, () => e.step], (W) => {
      var [re, ue] = W;
      !Q() || !oe() || h.value || ce(re, R(ue));
    }), de(b, () => ce()), tr(() => {
      !Q() || !oe() || (b.value = y.value[g.value ? "offsetHeight" : "offsetWidth"]);
    }), so(() => {
      H();
    }), {
      n: gs,
      classes: ow,
      Thumbs: qe,
      sliderEl: y,
      getFillStyle: I,
      isDisabled: V,
      isVertical: g,
      thumbStyle: M,
      errorMessage: a,
      thumbsProps: w,
      thumbList: S,
      hover: z,
      multiplySizeUnit: sr,
      toNumber: R,
      showLabel: F,
      start: G,
      move: x,
      end: Z,
      click: J
    };
  }
});
bv.render = lw;
const lt = bv;
ie(lt);
var xk = lt;
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
function sw(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function uw(e) {
  return tl.includes(e);
}
var yv = {
  type: {
    type: String,
    validator: uw
  },
  position: {
    type: String,
    default: "top",
    validator: sw
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
  loadingColor: Oi({}, xe(on, "color"), {
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U(),
  _update: {
    type: String
  }
}, {
  n: dw,
  classes: vw
} = te("snackbar"), fw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function cw(e, r) {
  var n = se("var-icon"), a = se("var-loading");
  return Te((p(), T(
    "div",
    {
      class: c(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [E(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [E(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [j(e.$slots, "default", {}, () => [$e(
          le(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), E(
        "div",
        {
          class: c([e.n("icon")])
        },
        [e.iconName ? (p(), Ce(n, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : ee("v-if", !0), e.type === "loading" ? (p(), Ce(a, {
          key: 1,
          type: e.loadingType,
          size: e.loadingSize,
          color: e.loadingColor,
          radius: e.loadingRadius
        }, null, 8, ["type", "size", "color", "radius"])) : ee("v-if", !0), j(e.$slots, "icon")],
        2
        /* CLASS */
      ), E(
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
  )), [[Rr, e.show]]);
}
var wv = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: cn,
    VarIcon: Ne
  },
  props: yv,
  setup(e) {
    var r = $(null), {
      zIndex: n
    } = It(() => e.show, 1);
    mo(() => e.show, () => e.lockScroll);
    var a = L(() => e.type === "loading" || e.forbidClick), t = L(() => e.type ? fw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return de(() => e.show, (l) => {
      l ? (C(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), C(e.onClose));
    }), de(() => e._update, () => {
      clearTimeout(r.value), o();
    }), tr(() => {
      e.show && (C(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: tl,
      n: dw,
      classes: vw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
wv.render = cw;
const Cv = wv;
var {
  n: mw
} = te("snackbar");
function hw(e, r) {
  var n = se("var-snackbar-core");
  return p(), Ce(Jr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [_(Fe, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: me(() => [_(n, De(e.$props, {
      class: e.n("transition")
    }), {
      icon: me(() => [j(e.$slots, "icon")]),
      action: me(() => [j(e.$slots, "action")]),
      default: me(() => [j(e.$slots, "default", {}, () => [$e(
        le(e.content),
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
var Sv = ne({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Cv
  },
  props: yv,
  setup() {
    var {
      disabled: e
    } = oa();
    return {
      n: mw,
      disabled: e
    };
  }
});
Sv.render = hw;
const Po = Sv;
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, st.apply(this, arguments);
}
function pw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var tl = ["loading", "success", "warning", "info", "error"], bs = 0, Pi = !1, kv, _n = !1, $v = {
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
}, $r = Ye([]), ol = $v, gw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, zo = (e) => () => na(e) ? e() : e, bw = {
  setup() {
    return () => {
      var e = $r.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), _n && (a.position = "top");
        var l = _n ? "relative" : "absolute", i = st({
          position: l
        }, $w(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: zo(s),
          icon: zo(u),
          action: zo(d)
        };
        return _(Cv, De(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return _(_v, De(gw, {
        style: {
          zIndex: br.zIndex
        },
        onAfterEnter: yw,
        onAfterLeave: ww
      }), pw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Zr = function(e) {
  var r = Sw(e), n = Ye(st({}, ol, r));
  n.show = !0, Pi || (Pi = !0, kv = ta(bw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: bs++,
    reactiveSnackOptions: n
  };
  if (a === 0 || _n)
    Cw(t);
  else {
    var o = "update-" + bs;
    kw(n, o);
  }
  return {
    clear() {
      !_n && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
tl.forEach((e) => {
  Zr[e] = (r) => (Ni(r) ? r.type = e : r = {
    content: r,
    type: e
  }, Zr(r));
});
Zr.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== _n && ($r.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), _n = e);
};
Zr.clear = function() {
  $r.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Zr.setDefaultOptions = function(e) {
  ol = e;
};
Zr.resetDefaultOptions = function() {
  ol = $v;
};
function yw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === R(r));
  n && C(n.reactiveSnackOptions.onOpened);
}
function ww(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === R(r));
  n && (n.animationEnd = !0, C(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (C(kv), $r = Ye([]), Pi = !1);
}
function Cw(e) {
  $r.push(e);
}
function Sw(e) {
  return e === void 0 && (e = {}), Xe(e) ? {
    content: e
  } : e;
}
function kw(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = st({}, n.reactiveSnackOptions, e), n._update = r;
}
function $w(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Zr.Component = Po;
ie(Po);
ie(Po, Zr);
var e$ = Po;
const Vi = Zr;
var Tv = (e) => ["mini", "small", "normal", "large"].includes(e), Tw = (e) => Tv(e) || Ve(e) || dr(e) || Xe(e), Ow = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Pw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Vw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Tw
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
    validator: Ow
  },
  align: {
    type: String,
    validator: Pw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Iw(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Lo,
  classes: Mw
} = te("space");
const ut = ne({
  name: "VarSpace",
  props: Vw,
  setup(e, r) {
    var {
      slots: n
    } = r, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ve(t) ? t.map(we) : [we(t), we(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = C(n.default)) != null ? t : [], f = Tv(d), [m, y] = a(d, f);
      v = Ys(v);
      var b = v.length - 1, h = v.map((w, P) => {
        var O = Iw(m, y, {
          direction: u,
          justify: l,
          index: P,
          lastIndex: b
        });
        return _("div", {
          style: {
            margin: O
          }
        }, [w]);
      });
      return _("div", {
        class: Mw(Lo(), Lo("$--box"), [o, Lo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: _t(l),
          alignItems: _t(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [h]);
    };
  }
});
ie(ut);
var r$ = ut, Bw = {
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
}, Ov = Symbol("STEPS_BIND_STEP_KEY");
function Ew() {
  var {
    bindChildren: e,
    childProviders: r
  } = ir(Ov);
  return {
    step: r,
    bindStep: e
  };
}
function Nw() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Ov);
  return n || Or("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Dw,
  classes: Aw
} = te("step"), zw = {
  key: 3
};
function Lw(e, r) {
  var n = se("var-icon");
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [E(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [E(
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
        [e.isActive ? (p(), Ce(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.activeIcon
        }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (p(), Ce(n, {
          key: 1,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.currentIcon
        }, null, 8, ["class", "name"])) : e.inactiveIcon ? (p(), Ce(n, {
          key: 2,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.inactiveIcon
        }, null, 8, ["class", "name"])) : (p(), T(
          "span",
          zw,
          le(e.index + 1),
          1
          /* TEXT */
        ))],
        6
        /* CLASS, STYLE */
      ), E(
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
      ), E(
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
var Pv = ne({
  name: "VarStep",
  components: {
    VarIcon: Ne
  },
  props: Bw,
  setup() {
    var {
      index: e,
      steps: r,
      bindSteps: n
    } = Nw(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = r, s = L(() => a.value === e.value), u = L(() => e.value !== -1 && R(a.value) > e.value), d = {
      index: e
    }, v = () => i(e.value);
    return n(d), {
      n: Dw,
      classes: Aw,
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
Pv.render = Lw;
const dt = Pv;
ie(dt);
var n$ = dt;
function Rw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Uw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Rw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Yw
} = te("steps");
function Hw(e, r) {
  return p(), T(
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
var Vv = ne({
  name: "VarSteps",
  props: Uw,
  setup(e) {
    var r = L(() => e.active), n = L(() => e.activeColor), a = L(() => e.inactiveColor), t = L(() => e.direction), {
      bindStep: o
    } = Ew(), l = (s) => {
      C(e.onClickStep, s);
    }, i = {
      active: r,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: Yw
    };
  }
});
Vv.render = Hw;
const vt = Vv;
ie(vt);
var a$ = vt, Fw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: jw
} = te("style-provider"), Ww = ne({
  name: "VarStyleProvider",
  props: Fw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => Ps(e.tag, {
      class: jw(),
      style: Rs(e.styleVars)
    }, C(n.default));
  }
});
const Vo = Ww;
var Ro = [];
function ft(e) {
  Ro.forEach((n) => document.documentElement.style.removeProperty(n)), Ro.length = 0;
  var r = Rs(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Ro.push(a);
  });
}
ft.Component = Vo;
ie(Vo);
ie(Vo, ft);
var t$ = Vo, Gw = {
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
  n: qw,
  classes: Xw
} = te("switch"), Kw = (e) => (gn(""), e = e(), bn(), e), Zw = /* @__PURE__ */ Kw(() => /* @__PURE__ */ E(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ E("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), Jw = [Zw];
function Qw(e, r) {
  var n = se("var-hover-overlay"), a = se("var-form-details"), t = Ae("ripple"), o = Ae("hover");
  return Te((p(), T(
    "div",
    {
      class: c(e.n())
    },
    [E(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: r[0] || (r[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: q(e.styleComputed.switch)
      },
      [E(
        "div",
        {
          style: q(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Te((p(), T(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [E(
          "div",
          {
            style: q(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), T(
            "span",
            {
              key: 0,
              class: c(e.n("loading")),
              style: q({
                width: e.radius,
                height: e.radius
              })
            },
            Jw,
            6
            /* CLASS, STYLE */
          )) : ee("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), _(n, {
          hovering: e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), _(a, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  )), [[o, e.hover, "desktop"]]);
}
var Iv = ne({
  name: "VarSwitch",
  components: {
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  props: Gw,
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
    } = Xr(), u = () => o(e.rules, e.modelValue), d = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = L(() => {
      var {
        size: w,
        modelValue: P,
        color: O,
        closeColor: S,
        loadingColor: I,
        activeValue: V
      } = e;
      return {
        handle: {
          width: sr(w),
          height: sr(w),
          backgroundColor: P === V ? O : S,
          color: I
        },
        ripple: {
          left: P === V ? sr(w, 0.5) : "-" + sr(w, 0.5),
          color: P === V ? O : S || "#999",
          width: sr(w, 2),
          height: sr(w, 2)
        },
        track: {
          height: sr(w, 0.72),
          width: sr(w, 1.9),
          borderRadius: sr(w, 2 / 3),
          filter: P === V || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: P === V ? O : S
        },
        switch: {
          height: sr(w, 1.2),
          width: sr(w, 2)
        }
      };
    }), f = L(() => sr(e.size, 0.8)), m = (w) => {
      var {
        onClick: P,
        onChange: O,
        disabled: S,
        loading: I,
        readonly: V,
        modelValue: N,
        activeValue: g,
        inactiveValue: k,
        "onUpdate:modelValue": Y
      } = e;
      if (C(P, w), !(S || I || V || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var M = N === g ? k : g;
        C(O, M), C(Y, M), d();
      }
    }, y = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, b = () => {
      C(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, h = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return C(r, h), {
      n: qw,
      classes: Xw,
      hovering: i,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      multiplySizeUnit: sr,
      switchActive: m,
      hover: y
    };
  }
});
Iv.render = Qw;
const ct = Iv;
ie(ct);
var o$ = ct, _w = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, Mv = Symbol("TABS_BIND_TAB_KEY");
function xw() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ir(Mv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function eC() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Mv);
  return r || Or("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: jt,
  classes: rC
} = te("tab");
function nC(e, r) {
  var n = Ae("ripple");
  return Te((p(), T(
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
var Bv = ne({
  name: "VarTab",
  directives: {
    Ripple: Ke
  },
  props: _w,
  setup(e) {
    var r = $(null), n = L(() => e.name), a = L(() => e.disabled), t = L(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = eC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: y
    } = l, b = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var h = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : h() ? d.value : v.value, P = () => e.disabled ? jt("$-tab--disabled") : h() ? jt("$-tab--active") : jt("$-tab--inactive"), O = (S) => {
      var {
        disabled: I,
        name: V,
        onClick: N
      } = e;
      I || (C(N, V ?? o.value, S), s(b));
    };
    return de(() => e.name, y), de(() => e.disabled, y), {
      n: jt,
      classes: rC,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: P,
      handleClick: O
    };
  }
});
Bv.render = nC;
const mt = Bv;
ie(mt);
var i$ = mt, aC = {
  name: {
    type: [String, Number]
  }
}, {
  n: tC,
  classes: oC
} = te("tab-item");
function iC(e, r) {
  var n = se("var-swipe-item");
  return p(), Ce(n, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: me(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Ev = ne({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Vn
  },
  props: aC,
  setup(e) {
    var r = $(!1), n = L(() => e.name), {
      index: a,
      bindTabsItems: t
    } = zy(), {
      bindLists: o
    } = Ly(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: L(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: tC,
      classes: oC,
      current: r
    };
  }
});
Ev.render = iC;
const ht = Ev;
ie(ht);
var l$ = ht, lC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: sC,
  classes: uC
} = te("table");
function dC(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [E(
      "div",
      {
        class: c(e.n("main"))
      },
      [E(
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
    ), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Nv = ne({
  name: "VarTable",
  props: lC,
  setup() {
    return {
      toSizeUnit: we,
      n: sC,
      classes: uC,
      formatElevation: hr
    };
  }
});
Nv.render = dC;
const pt = Nv;
ie(pt);
var s$ = pt;
function ys(e) {
  return ["horizontal", "vertical"].includes(e);
}
function vC(e) {
  return ["auto", "always"].includes(e);
}
function fC(e) {
  return ["normal", "reverse"].includes(e);
}
var cC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: ys
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ys
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
    validator: vC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: fC
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: xe(Zt, "cssMode"),
  stickyZIndex: xe(Zt, "zIndex"),
  offsetTop: xe(Zt, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
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
function Cs(e) {
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
  n: mC,
  classes: hC
} = te("tabs");
function pC(e, r) {
  return p(), Ce(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: me(() => [E(
      "div",
      De({
        class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
        style: {
          background: e.color
        }
      }, e.$attrs),
      [E(
        "div",
        {
          ref: "scrollerEl",
          class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
        },
        [j(e.$slots, "default"), E(
          "div",
          {
            class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
            style: q({
              width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
              height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
              transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
            })
          },
          [E(
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
var Dv = ne({
  name: "VarTabs",
  components: {
    VarSticky: In
  },
  inheritAttrs: !1,
  props: cC,
  setup(e) {
    var r = $("0px"), n = $("0px"), a = $("0px"), t = $("0px"), o = $(!1), l = $(null), i = L(() => e.active), s = L(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = L(() => e.activeColor), d = L(() => e.inactiveColor), v = L(() => e.disabledColor), f = L(() => e.itemDirection), m = $(null), {
      tabList: y,
      bindTabList: b,
      length: h
    } = xw(), w = (M) => {
      var F, X = (F = M.name.value) != null ? F : M.index.value, {
        active: A,
        onChange: z,
        onClick: B
      } = e;
      C(e["onUpdate:active"], X), C(B, X), X !== A && C(z, X);
    }, P = () => y.find((M) => {
      var {
        name: F
      } = M;
      return e.active === F.value;
    }), O = (M) => y.find((F) => {
      var {
        index: X
      } = F;
      return (M ?? e.active) === X.value;
    }), S = () => {
      if (h.value !== 0) {
        var {
          active: M
        } = e;
        if (dr(M)) {
          var F = dn(M, 0, h.value - 1);
          return C(e["onUpdate:active"], F), O(F);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || y.length >= 5;
    }, V = (M) => {
      var {
        element: F
      } = M, X = F.value;
      X && (e.layoutDirection === "horizontal" ? (r.value = X.offsetWidth + "px", a.value = X.offsetLeft + "px") : (n.value = X.offsetHeight + "px", t.value = X.offsetTop + "px"));
    }, N = (M) => {
      var {
        element: F
      } = M;
      if (o.value) {
        var X = l.value, A = F.value;
        if (e.layoutDirection === "horizontal") {
          var z = A.offsetLeft + A.offsetWidth / 2 - X.offsetWidth / 2;
          ga(X, {
            left: z,
            animation: Yo
          });
        } else {
          var B = A.offsetTop + A.offsetHeight / 2 - X.offsetHeight / 2;
          ga(X, {
            top: B,
            animation: Yo
          });
        }
      }
    }, g = () => {
      var M = P() || O() || S();
      !M || M.disabled.value || (I(), V(M), N(M));
    }, k = /* @__PURE__ */ function() {
      var M = Cs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), Y = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: g,
      onTabClick: w
    };
    return b(Y), de(() => h.value, /* @__PURE__ */ Cs(function* () {
      yield Dr(), g();
    })), de(() => e.active, g), de(() => e.scrollable, g), pn(g), Pt(g), {
      stickyComponent: m,
      indicatorWidth: r,
      indicatorHeight: n,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Fe,
      toSizeUnit: we,
      n: mC,
      classes: hC,
      resize: g,
      resizeSticky: k,
      formatElevation: hr
    };
  }
});
Dv.render = pC;
const gt = Dv;
ie(gt);
var u$ = gt, gC = {
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
function Ss(e, r, n, a, t, o, l) {
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
  n: yC
} = te("tabs-items");
function wC(e, r) {
  var n = se("var-swipe");
  return p(), Ce(n, {
    class: c(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: me(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
var Av = ne({
  name: "VarTabsItems",
  components: {
    VarSwipe: Pn
  },
  props: gC,
  setup(e) {
    var r = $(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = Ay(), o = (v) => n.find((f) => {
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
      m && (n.forEach((y) => {
        var {
          setCurrent: b
        } = y;
        return b(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((b) => {
        var {
          index: h
        } = b;
        return h.value === v;
      }), y = (f = m.name.value) != null ? f : m.index.value;
      C(e["onUpdate:active"], y);
    }, d = () => r.value;
    return a({}), de(() => e.active, s), de(() => t.value, /* @__PURE__ */ bC(function* () {
      yield Dr(), s(e.active);
    })), {
      swipe: r,
      n: yC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Av.render = wC;
const bt = Av;
ie(bt);
var d$ = bt;
const CC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, SC = {
  "--badge-default-color": "#555"
}, kC = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, $C = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, TC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, OC = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, PC = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, VC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, IC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, MC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, BC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, EC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, NC = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, DC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, AC = {
  "--popup-content-background-color": "#1e1e1e"
}, zC = {
  "--pull-refresh-background": "#303030"
}, LC = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, RC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, UC = {
  "--select-scroller-background": "#303030"
}, YC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, HC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, FC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, jC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, WC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, GC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, qC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, XC = {
  "--tabs-background": "#1e1e1e"
}, KC = {
  "--app-bar-color": "#272727"
}, ZC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, JC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, QC = {
  "--menu-background-color": "#272727"
}, _C = {
  "--breadcrumb-inactive-color": "#aaa"
}, xC = {
  "--paper-background": "#303030"
}, eS = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, rS = {
  "--link-default-color": "#fff"
}, nS = {
  "--progress-label-color": "#fff"
}, aS = {
  "--options-text-color": "#fff"
}, tS = {
  "--countdown-text-color": "#fff"
}, oS = {
  "--watermark-content-color": "#ffffff"
};
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
const iS = Ii({
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
}, kC, TC, $C, GC, IC, YC, XC, jC, AC, MC, CC, PC, SC, qC, VC, zC, FC, HC, NC, WC, EC, UC, LC, OC, BC, DC, KC, ZC, JC, QC, RC, _C, xC, eS, rS, nS, aS, tS, oS);
var lS = {
  dark: iS
}, v$ = null;
const Mi = lS;
var Sr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], ur = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ks = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
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
}, zv = (e, r) => e === "24hr" || r === "am", il = (e, r, n) => {
  var a = Sr.findIndex((o) => R(o) === R(n)), t = zv(e, r) ? n : ur[a];
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
}, Lv = (e) => {
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
  } = il(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: y,
      minute: b
    } = cr(i);
    f = y === v && a > b;
  }
  if (!i && s) {
    var {
      hour: h,
      minute: w
    } = cr(s);
    f = h === v && a < w;
  }
  if (i && s) {
    var {
      hour: P,
      minute: O
    } = cr(i), {
      hour: S,
      minute: I
    } = cr(s);
    f = S === v && a < I || P === v && a > O;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, Rv = (e) => {
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
  } = il(t, o, l), m = !1, y = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: h,
      second: w
    } = cr(s);
    m = b === f && h < i || h === i && a > w;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: O,
      second: S
    } = cr(u);
    m = P === f && O > i || O === i && a > S;
  }
  if (s && u) {
    var {
      hour: I,
      minute: V,
      second: N
    } = cr(s), {
      hour: g,
      minute: k,
      second: Y
    } = cr(u);
    m = I === f && V < i || g === f && k > i || I === f && V === i && a > N || g === f && k === i && a < Y;
  }
  return (r = e.allowedTime) != null && r.seconds && (y = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || y;
}, {
  n: dS,
  classes: vS
} = te("time-picker");
function fS(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n("clock"))
    },
    [E(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), T(
      Me,
      null,
      We(e.timeScales, (n, a) => (p(), T(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: q(e.getStyle(a, n, !1))
        },
        le(n),
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
        Me,
        null,
        We(e.hours24, (n, a) => (p(), T(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: q(e.getStyle(a, n, !0))
          },
          le(n),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Uv = ne({
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
    } = r, a = $(null), t = $([]), o = $([]), l = L(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = L(() => {
      if (e.rad !== void 0) {
        var h = e.rad / 30;
        return h >= 0 ? h : h + 12;
      }
    }), s = L(() => e.type === "hour" ? Sr : ks), u = (h, w) => {
      var P;
      h = (P = h) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var O = e.type === "minute" ? Lv : Rv, S = {
        time: R(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: R(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(S, "minute"), O(S);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var h = e.isInner ? ur[i.value] : s.value[i.value];
      return s.value === ks ? u() ? "#bdbdbd" : e.color : f(h) ? "#bdbdbd" : e.color;
    }, v = (h, w) => w ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), f = (h) => {
      if (e.type === "hour") {
        if (zv(e.format, e.ampm))
          return t.value.includes(h);
        var w = Sr.findIndex((P) => P === h);
        return o.value.includes(w);
      }
      return u(h, !0);
    }, m = (h, w, P) => {
      var O = 2 * Math.PI / 12 * h - Math.PI / 2, S = 50 * (1 + Math.cos(O)), I = 50 * (1 + Math.sin(O)), V = () => v(h, P) ? f(w) ? {
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
        color: g
      } = V();
      return {
        left: S + "%",
        top: I + "%",
        backgroundColor: N,
        color: g
      };
    }, y = () => {
      var {
        width: h,
        height: w
      } = Qe(a.value);
      return {
        width: h,
        height: w
      };
    }, b = () => {
      if (i.value !== void 0) {
        var h = e.ampm === "am" ? Sr : ur;
        return kn(h[i.value], 2, "0");
      }
    };
    return de([i, () => e.isInner], (h, w) => {
      var [P, O] = h, [S, I] = w, V = P === S && O === I;
      if (!(V || e.type !== "hour" || i.value === void 0)) {
        var N = O ? ur[i.value] : b(), g = e.useSeconds ? ":" + e.time.second : "", k = N + ":" + e.time.minute + g;
        e.preventNextUpdate || n("update", k), n("change-prevent-update");
      }
    }), de(() => e.rad, (h, w) => {
      if (!(e.type === "hour" || h === void 0 || w === void 0)) {
        var P = h / 6 >= 0 ? h / 6 : h / 6 + 60, O = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (P !== O) {
          var S, {
            hourStr: I
          } = il(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var V = fe().minute(P).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            S = I + ":" + V + N;
          }
          if (e.type === "second") {
            var g = fe().second(P).format("ss"), k = e.useSeconds ? ":" + g : "";
            S = I + ":" + e.time.minute + k;
          }
          n("update", S);
        }
      }
    }), de([() => e.max, () => e.min, () => e.allowedTime], (h) => {
      var [w, P, O] = h;
      if (t.value = [], w && !P) {
        var {
          hour: S
        } = cr(w), I = Sr.filter((D) => R(D) > S), V = ur.filter((D) => R(D) > S);
        t.value = [...I, ...V];
      }
      if (!w && P) {
        var {
          hour: N
        } = cr(P), g = Sr.filter((D) => R(D) < N), k = ur.filter((D) => R(D) < N);
        t.value = [...g, ...k];
      }
      if (w && P) {
        var {
          hour: Y
        } = cr(w), {
          hour: M
        } = cr(P), F = Sr.filter((D) => R(D) < M || R(D) > Y), X = ur.filter((D) => R(D) < M || R(D) > Y);
        t.value = [...F, ...X];
      }
      if (O != null && O.hours) {
        var {
          hours: A
        } = O, z = Sr.filter((D) => !A(R(D))), B = ur.filter((D) => !A(R(D)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...z, ...B])];
      }
      o.value = t.value.map((D) => ur.findIndex((ae) => D === ae)).filter((D) => D >= 0);
    }, {
      immediate: !0
    }), {
      n: dS,
      classes: vS,
      hours24: ur,
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
Uv.render = fS;
const cS = Uv;
var {
  n: mS,
  classes: hS
} = te("time-picker"), pS = (e) => (gn(""), e = e(), bn(), e), gS = /* @__PURE__ */ pS(() => /* @__PURE__ */ E(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), bS = {
  key: 0
};
function yS(e, r) {
  var n = se("clock");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [E(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [E(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [E(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: r[0] || (r[0] = (a) => e.checkPanel("hour"))
          },
          le(e.time.hour),
          3
          /* TEXT, CLASS */
        ), gS, E(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          le(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), T("span", bS, ":")) : ee("v-if", !0), e.useSeconds ? (p(), T(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          le(e.time.second),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [E(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: r[3] || (r[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), E(
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
      )) : ee("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), E(
      "div",
      {
        class: c(e.n("body"))
      },
      [E(
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
        [_(Fe, {
          name: e.n() + "-panel-fade"
        }, {
          default: me(() => [(p(), Ce(n, {
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
var Yv = ne({
  name: "VarTimePicker",
  components: {
    Clock: cS
  },
  props: uS,
  setup(e) {
    var r = $(null), n = $(null), a = $(null), t = $(!1), o = $(!1), l = $(!1), i = $(!1), s = $(!1), u = $(void 0), d = $(0), v = $(0), f = $("hour"), m = $("am"), y = $(!1), b = $(!1), h = $({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ye({
      x: 0,
      y: 0
    }), P = Ye({
      x: [],
      y: []
    }), O = L(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (G) => {
      C(e["onUpdate:modelValue"], G), C(e.onChange, G);
    }, I = (G) => G * 57.29577951308232, V = (G) => {
      i.value = !1, b.value = !1, f.value = G;
    }, N = (G) => {
      var {
        disableHour: x
      } = a.value, Z = Sr.findIndex((oe) => R(oe) === R(h.value.hour)), J = G === "am" ? Sr : ur, Q = [...J.slice(Z), ...J.slice(0, Z)];
      return Q.find((oe, ce) => (o.value = ce !== 0, !x.includes(oe)));
    }, g = (G) => {
      if (!e.readonly) {
        m.value = G;
        var x = N(G);
        if (x) {
          var Z = e.useSeconds ? ":" + h.value.second : "", J = kn(x, 2, "0") + ":" + h.value.minute + Z;
          S(J);
        }
      }
    }, k = (G, x) => {
      var Z = G >= P.x[0] && G <= P.x[1], J = x >= P.y[0] && x <= P.y[1];
      return Z && J;
    }, Y = (G) => {
      var x = e.format === "24hr" ? "HH" : "hh", {
        hour: Z,
        minute: J,
        second: Q
      } = cr(G);
      return {
        hour: fe().hour(Z).format(x),
        minute: fe().minute(J).format("mm"),
        second: fe().second(Q).format("ss")
      };
    }, M = (G) => {
      var x = G / 30;
      return x >= 0 ? x : x + 12;
    }, F = () => {
      var {
        width: G,
        height: x
      } = a.value.getSize(), Z = w.x - G / 2 - 8, J = w.x + G / 2 + 8, Q = w.y - x / 2 - 8, oe = w.y + x / 2 + 8;
      return {
        rangeXMin: Z,
        rangeXMax: J,
        rangeYMin: Q,
        rangeYMax: oe
      };
    }, X = (G, x, Z) => {
      var {
        disableHour: J
      } = a.value;
      l.value = k(G, x);
      var Q = Math.round(Z / 30) * 30 + 90, oe = M(Q), ce = t.value ? Sr[oe] : ur[oe];
      if (J.includes(ce) || (t.value = e.format === "24hr" ? k(G, x) : !1), t.value === l.value) {
        var ke = t.value || m.value === "pm" ? ur[oe] : Sr[oe];
        y.value = J.includes(ke), !y.value && (u.value = Q, i.value = !0);
      }
    }, A = (G) => {
      var {
        disableHour: x
      } = a.value, Z = Math.round(G / 6) * 6 + 90, J = Z / 6 >= 0 ? Z / 6 : Z / 6 + 60, Q = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      };
      b.value = Lv(Q), !b.value && (d.value = Z, s.value = !0);
    }, z = (G) => {
      var {
        disableHour: x
      } = a.value, Z = Math.round(G / 6) * 6 + 90, J = Z / 6 >= 0 ? Z / 6 : Z / 6 + 60, Q = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        minute: R(h.value.minute),
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      };
      Rv(Q) || (v.value = Z);
    }, B = () => {
      var {
        left: G,
        top: x,
        width: Z,
        height: J
      } = Qe(r.value);
      if (w.x = G + Z / 2, w.y = x + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Q,
          rangeXMax: oe,
          rangeYMin: ce,
          rangeYMax: ke
        } = F();
        P.x = [Q, oe], P.y = [ce, ke];
      }
    }, D = (G) => {
      if (G.preventDefault(), !e.readonly) {
        B();
        var {
          clientX: x,
          clientY: Z
        } = G.touches[0], J = x - w.x, Q = Z - w.y, oe = Math.round(I(Math.atan2(Q, J)));
        f.value === "hour" ? X(x, Z, oe) : f.value === "minute" ? A(oe) : z(oe);
      }
    }, ae = () => {
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
    return de(() => e.modelValue, (G) => {
      if (G) {
        var {
          hour: x,
          minute: Z,
          second: J
        } = cr(G), Q = fe().hour(x).format("hh"), oe = fe().hour(x).format("HH"), ce = fe().minute(Z).format("mm"), ke = fe().second(J).format("ss");
        u.value = (Q === "12" ? 0 : R(Q)) * 30, d.value = R(ce) * 6, v.value = R(ke) * 6, h.value = Y(G), e.format !== "24hr" && (m.value = kn("" + x, 2, "0") === oe && ur.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && ur.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: mS,
      classes: hS,
      getRad: O,
      time: h,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: D,
      checkPanel: V,
      checkAmpm: g,
      end: ae,
      update: S,
      changePreventUpdate: H,
      formatElevation: hr
    };
  }
});
Yv.render = yS;
const yt = Yv;
ie(yt);
var f$ = yt, wS = {
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
function $s(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Uo(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        $s(o, a, t, l, i, "next", s);
      }
      function i(s) {
        $s(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: CS,
  classes: SS
} = te("uploader"), kS = 0, $S = ["onClick"], TS = ["onClick"], OS = ["src", "alt"], PS = ["multiple", "accept", "capture", "disabled"], VS = ["src"];
function IS(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = se("var-popup"), l = Ae("ripple"), i = Ae("hover");
  return p(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [E(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), T(
        Me,
        null,
        We(e.files, (s) => Te((p(), T("div", {
          class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
          key: s.id,
          onClick: (u) => e.preview(s)
        }, [E(
          "div",
          {
            class: c(e.n("file-name"))
          },
          le(s.name || s.url),
          3
          /* TEXT, CLASS */
        ), e.removable ? (p(), T("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: Tr((u) => e.handleRemove(s), ["stop"])
        }, [_(n, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, TS)) : ee("v-if", !0), s.cover ? (p(), T("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: q({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, OS)) : ee("v-if", !0), E(
          "div",
          {
            class: c(e.n("file-indicator"))
          },
          [E(
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
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Te((p(), T(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [E("input", {
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
        }, null, 42, PS), j(e.$slots, "default", {}, () => [_(n, {
          class: c(e.n("action-icon")),
          "var-uploader-cover": "",
          name: "plus"
        }, null, 8, ["class"]), _(a, {
          hovering: e.hovering && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])])],
        2
        /* CLASS */
      )), [[l, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [i, e.handleHovering, "desktop"]]) : ee("v-if", !0)],
      2
      /* CLASS */
    ), _(t, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Jt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: me(() => [j(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]), _(o, {
      class: c(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      show: e.showPreview,
      "onUpdate:show": r[2] || (r[2] = (s) => e.showPreview = s),
      onClosed: r[3] || (r[3] = (s) => e.currentPreview = null)
    }, {
      default: me(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), T("video", {
          key: 0,
          class: c(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, VS)) : ee("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var Hv = ne({
  name: "VarUploader",
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarPopup: Ur,
    VarFormDetails: nr,
    VarHoverOverlay: wr
  },
  props: wS,
  setup(e) {
    var r = $(null), n = $(!1), a = $(null), t = L(() => {
      var {
        maxlength: D,
        modelValue: {
          length: ae
        }
      } = e;
      return dr(D) ? ae + " / " + D : "";
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
    } = Xr(), m = L(() => {
      var {
        modelValue: D,
        hideList: ae
      } = e;
      return ae ? [] : D;
    }), y = (D) => {
      var {
        disabled: ae,
        readonly: H,
        previewed: G
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || ae || H || !G)) {
        var {
          url: x
        } = D;
        if (Xe(x) && vl(x)) {
          Lr(x);
          return;
        }
        Xe(x) && fl(x) && (a.value = D, n.value = !0);
      }
    }, b = (D) => ({
      id: kS++,
      url: "",
      cover: "",
      name: D.name,
      file: D,
      progress: 0
    }), h = (D) => {
      var ae = D.target, {
        files: H
      } = ae;
      return Array.from(H);
    }, w = (D) => new Promise((ae) => {
      if (!D.file.type.startsWith("image")) {
        ae(D);
        return;
      }
      var H = new FileReader();
      H.onload = () => {
        var G = H.result;
        D.cover = G, D.url = G, ae(D);
      }, H.readAsDataURL(D.file);
    }), P = (D) => D.map(w), O = (D) => {
      var {
        onBeforeRead: ae
      } = e;
      return D.map((H) => new Promise((G) => {
        ae || G({
          valid: !0,
          varFile: H
        });
        var x = Wt(C(ae, Ye(H)));
        Promise.all(x).then((Z) => {
          G({
            valid: Z.every(Boolean),
            varFile: H
          });
        });
      }));
    }, S = /* @__PURE__ */ function() {
      var D = Uo(function* (ae) {
        var {
          maxsize: H,
          maxlength: G,
          modelValue: x,
          onOversize: Z,
          onAfterRead: J,
          onBeforeFilter: Q,
          readonly: oe,
          disabled: ce
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ce || oe)) {
          var ke = (He) => He.filter((Ge) => Ge.file.size > R(H) ? (C(Z, Ye(Ge)), !1) : !0), Ie = (He) => {
            var Ge = Math.min(He.length, R(G) - x.length);
            return He.slice(0, Ge);
          }, W = /* @__PURE__ */ function() {
            var He = Uo(function* (Ge) {
              if (!Q)
                return Ge;
              var ve = Wt(Q);
              for (var Se of ve)
                Ge = yield Se(Ge);
              return Ge;
            });
            return function(ve) {
              return He.apply(this, arguments);
            };
          }(), re = h(ae), ue = re.map(b);
          ue = yield W(ue), ue = H != null ? ke(ue) : ue, ue = G != null ? Ie(ue) : ue;
          var ye = yield Promise.all(P(ue)), Ue = yield Promise.all(O(ye)), Le = Ue.filter((He) => {
            var {
              valid: Ge
            } = He;
            return Ge;
          }).map((He) => {
            var {
              varFile: Ge
            } = He;
            return Ge;
          });
          C(e["onUpdate:modelValue"], [...x, ...Le]), ae.target.value = "", Le.forEach((He) => C(J, Ye(He)));
        }
      });
      return function(H) {
        return D.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var D = Uo(function* (ae) {
        var {
          disabled: H,
          readonly: G,
          modelValue: x,
          onBeforeRemove: Z,
          onRemove: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || G)) {
          if (Z) {
            var Q = Wt(C(Z, Ye(ae)));
            if ((yield Promise.all(Q)).some((ce) => !ce))
              return;
          }
          var oe = x.filter((ce) => ce !== ae);
          C(J, Ye(ae)), F("onRemove"), C(e["onUpdate:modelValue"], oe);
        }
      });
      return function(H) {
        return D.apply(this, arguments);
      };
    }(), V = () => e.modelValue.filter((D) => D.state === "success"), N = () => e.modelValue.filter((D) => D.state === "error"), g = () => e.modelValue.filter((D) => D.state === "loading"), k = () => {
      r.value.click();
    }, Y = () => {
      a.value = null, n.value = !1, Lr.close();
    }, M = {
      getSuccess: V,
      getError: N,
      getLoading: g
    }, F = (D) => {
      ze(() => {
        var {
          validateTrigger: ae,
          rules: H,
          modelValue: G
        } = e;
        s(ae, D, H, G, M);
      });
    }, X = !1, A = () => u(e.rules, e.modelValue, M), z = () => {
      X = !0, C(e["onUpdate:modelValue"], []), d();
    }, B = {
      validate: A,
      resetValidation: d,
      reset: z
    };
    return C(l, B), de(() => e.modelValue, () => {
      !X && F("onChange"), X = !1;
    }, {
      deep: !0
    }), {
      n: CS,
      classes: SS,
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
      toNumber: R,
      handleHovering: f,
      isHTMLSupportVideo: fl,
      isHTMLSupportImage: vl,
      preview: y,
      handleChange: S,
      handleRemove: I,
      getSuccess: V,
      getError: N,
      getLoading: g,
      validate: A,
      resetValidation: d,
      reset: z,
      chooseFile: k,
      closePreview: Y,
      toSizeUnit: we
    };
  }
});
Hv.render = IS;
const wt = Hv;
ie(wt);
var c$ = wt, MS = {
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
function Ts(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Os(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Ts(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ts(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Bi() {
  return Bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Bi.apply(this, arguments);
}
var {
  n: BS,
  classes: ES
} = te("watermark"), NS = {
  ref: "svgRef"
}, DS = ["viewBox", "width", "height"], AS = ["width", "height"], zS = ["href", "xlink:href", "x", "y", "width", "height"];
function LS(e, r) {
  return p(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default"), (p(), Ce(Jr, {
      to: "body",
      disabled: !e.fullscreen
    }, [E(
      "div",
      {
        ref: "containerRef",
        class: c(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
        style: q({
          backgroundImage: "url(" + e.watermarkUrl + ")",
          zIndex: e.zIndex
        })
      },
      [Te(E(
        "div",
        NS,
        [(p(), T("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 0 " + (e.width + e.gapX) + " " + (e.height + e.gapY),
          width: "" + (e.width + e.gapX),
          height: "" + (e.height + e.gapY),
          style: q({
            padding: "0 " + e.gapX + "px " + e.gapY + "px 0",
            opacity: e.opacity
          })
        }, [e.showContent() ? (p(), T("foreignObject", {
          key: 0,
          x: "0",
          y: "0",
          width: e.width,
          height: e.height
        }, [E(
          "div",
          {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: q({
              transform: "translate(" + e.offsetX + "px, " + e.offsetY + "px) rotate(" + e.rotate + "deg)",
              transformOrigin: "center"
            })
          },
          [j(e.$slots, "content", {}, () => [E(
            "span",
            {
              style: q(Bi({}, e.font, {
                fontSize: e.font.fontSize + "px",
                color: e.textColor
              }))
            },
            le(e.content),
            5
            /* TEXT, STYLE */
          )])],
          4
          /* STYLE */
        )], 8, AS)) : ee("v-if", !0), !e.$slots.content && e.image ? (p(), T("image", {
          key: 1,
          href: e.imageUrl,
          "xlink:href": e.imageUrl,
          x: e.offsetX,
          y: e.offsetY,
          width: e.width,
          height: e.height,
          style: q({
            transform: "rotate(" + e.rotate + "deg)",
            transformOrigin: "center"
          })
        }, null, 12, zS)) : ee("v-if", !0)], 12, DS))],
        512
        /* NEED_PATCH */
      ), [[Rr, !1]])],
      6
      /* CLASS, STYLE */
    )], 8, ["disabled"]))],
    2
    /* CLASS */
  );
}
var Fv = ne({
  name: "VarWatermark",
  props: MS,
  setup(e, r) {
    var {
      slots: n
    } = r, a = $(""), t = $(""), o = $(""), l = $(null), i = $(null), s = () => !!(n.content || e.content && !e.image), u = /* @__PURE__ */ function() {
      var m = Os(function* () {
        return new Promise((y) => {
          var b = document.createElement("canvas"), h = b.getContext("2d"), w = new Image();
          w.crossOrigin = "anonymous", w.referrerPolicy = "no-referrer", w.src = e.image, w.onload = () => {
            b.width = w.width, b.height = w.height, h.drawImage(w, 0, 0), y(b.toDataURL());
          };
        });
      });
      return function() {
        return m.apply(this, arguments);
      };
    }(), d = (m) => {
      var y = new Blob([m], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(y);
    }, v = () => {
      a.value && URL.revokeObjectURL(a.value);
    }, f = /* @__PURE__ */ function() {
      var m = Os(function* () {
        o.value = En(i.value).color, e.image && (t.value = yield u()), yield ze(), v(), a.value = d(l.value.innerHTML);
      });
      return function() {
        return m.apply(this, arguments);
      };
    }();
    return de(() => [e.image, e.font, e.content, e.height, e.width, e.rotate, e.gapX, e.gapY, e.offsetX, e.offsetY, e.opacity], f, {
      deep: !0
    }), St(f), kt(v), {
      n: BS,
      classes: ES,
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
Fv.render = LS;
const Ct = Fv;
ie(Ct);
var m$ = Ct;
const RS = "2.14.2";
function US(e) {
  qr.install && e.use(qr), ya.install && e.use(ya), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), Hn.install && e.use(Hn), $a.install && e.use($a), Ta.install && e.use(Ta), Oa.install && e.use(Oa), Pa.install && e.use(Pa), vr.install && e.use(vr), Va.install && e.use(Va), Ia.install && e.use(Ia), Fn.install && e.use(Fn), jn.install && e.use(jn), Ma.install && e.use(Ma), Wn.install && e.use(Wn), Ba.install && e.use(Ba), Ea.install && e.use(Ea), Na.install && e.use(Na), br.install && e.use(br), Da.install && e.use(Da), za.install && e.use(za), La.install && e.use(La), Kr.install && e.use(Kr), Ra.install && e.use(Ra), Xn.install && e.use(Xn), Ha.install && e.use(Ha), Fa.install && e.use(Fa), On.install && e.use(On), nr.install && e.use(nr), Ar.install && e.use(Ar), wr.install && e.use(wr), Ne.install && e.use(Ne), ja.install && e.use(ja), Lr.install && e.use(Lr), Wa.install && e.use(Wa), Ga.install && e.use(Ga), Qn.install && e.use(Qn), wa.install && e.use(wa), qa.install && e.use(qa), Xa.install && e.use(Xa), cn.install && e.use(cn), ki.install && e.use(ki), Xo.install && e.use(Xo), Mn.install && e.use(Mn), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), Qa.install && e.use(Qa), Bn.install && e.use(Bn), Ur.install && e.use(Ur), _a.install && e.use(_a), xa.install && e.use(xa), et.install && e.use(et), rt.install && e.use(rt), nt.install && e.use(nt), at.install && e.use(at), Ke.install && e.use(Ke), tt.install && e.use(tt), ot.install && e.use(ot), it.install && e.use(it), lt.install && e.use(lt), Vi.install && e.use(Vi), ut.install && e.use(ut), dt.install && e.use(dt), vt.install && e.use(vt), In.install && e.use(In), ft.install && e.use(ft), Pn.install && e.use(Pn), Vn.install && e.use(Vn), ct.install && e.use(ct), mt.install && e.use(mt), ht.install && e.use(ht), pt.install && e.use(pt), gt.install && e.use(gt), bt.install && e.use(bt), Mi.install && e.use(Mi), yt.install && e.use(yt), Jn.install && e.use(Jn), wt.install && e.use(wt), Ct.install && e.use(Ct);
}
const h$ = {
  version: RS,
  install: US,
  ActionSheet: qr,
  AppBar: ya,
  Avatar: Ca,
  AvatarGroup: Sa,
  BackTop: ka,
  Badge: Hn,
  BottomNavigation: $a,
  BottomNavigationItem: Ta,
  Breadcrumb: Oa,
  Breadcrumbs: Pa,
  Button: vr,
  ButtonGroup: Va,
  Card: Ia,
  Cell: Fn,
  Checkbox: jn,
  CheckboxGroup: Ma,
  Chip: Wn,
  Col: Ba,
  Collapse: Ea,
  CollapseItem: Na,
  Context: br,
  Countdown: Da,
  Counter: za,
  DatePicker: La,
  Dialog: Kr,
  Divider: Ra,
  Drag: Xn,
  Ellipsis: Ha,
  Fab: Fa,
  Form: On,
  FormDetails: nr,
  Hover: Ar,
  HoverOverlay: wr,
  Icon: Ne,
  Image: ja,
  ImagePreview: Lr,
  IndexAnchor: Wa,
  IndexBar: Ga,
  Input: Qn,
  Lazy: wa,
  Link: qa,
  List: Xa,
  Loading: cn,
  LoadingBar: ki,
  Locale: Xo,
  Menu: Mn,
  Option: Ka,
  Overlay: Za,
  Pagination: Ja,
  Paper: Qa,
  Picker: Bn,
  Popup: Ur,
  Progress: _a,
  PullRefresh: xa,
  Radio: et,
  RadioGroup: rt,
  Rate: nt,
  Result: at,
  Ripple: Ke,
  Row: tt,
  Select: ot,
  Skeleton: it,
  Slider: lt,
  Snackbar: Vi,
  Space: ut,
  Step: dt,
  Steps: vt,
  Sticky: In,
  StyleProvider: ft,
  Swipe: Pn,
  SwipeItem: Vn,
  Switch: ct,
  Tab: mt,
  TabItem: ht,
  Table: pt,
  Tabs: gt,
  TabsItems: bt,
  Themes: Mi,
  TimePicker: yt,
  Tooltip: Jn,
  Uploader: wt,
  Watermark: Ct
};
export {
  qr as ActionSheet,
  ya as AppBar,
  Ca as Avatar,
  Sa as AvatarGroup,
  ka as BackTop,
  Hn as Badge,
  $a as BottomNavigation,
  Ta as BottomNavigationItem,
  Oa as Breadcrumb,
  Pa as Breadcrumbs,
  vr as Button,
  Va as ButtonGroup,
  Ia as Card,
  Fn as Cell,
  jn as Checkbox,
  Ma as CheckboxGroup,
  Wn as Chip,
  Ba as Col,
  Ea as Collapse,
  Na as CollapseItem,
  br as Context,
  Da as Countdown,
  za as Counter,
  La as DatePicker,
  Kr as Dialog,
  Ra as Divider,
  Xn as Drag,
  Ha as Ellipsis,
  Fa as Fab,
  On as Form,
  nr as FormDetails,
  Ar as Hover,
  wr as HoverOverlay,
  Ne as Icon,
  ja as Image,
  Lr as ImagePreview,
  Wa as IndexAnchor,
  Ga as IndexBar,
  Qn as Input,
  wa as Lazy,
  qa as Link,
  Xa as List,
  cn as Loading,
  ki as LoadingBar,
  Xo as Locale,
  Mn as Menu,
  Ka as Option,
  Za as Overlay,
  Jo as PIXEL,
  Ja as Pagination,
  Qa as Paper,
  Bn as Picker,
  Ur as Popup,
  _a as Progress,
  xa as PullRefresh,
  et as Radio,
  rt as RadioGroup,
  nt as Rate,
  at as Result,
  Ke as Ripple,
  tt as Row,
  tl as SNACKBAR_TYPE,
  ot as Select,
  it as Skeleton,
  lt as Slider,
  Vi as Snackbar,
  ut as Space,
  dt as Step,
  vt as Steps,
  In as Sticky,
  ft as StyleProvider,
  Pn as Swipe,
  Vn as SwipeItem,
  ct as Switch,
  mt as Tab,
  ht as TabItem,
  pt as Table,
  gt as Tabs,
  bt as TabsItems,
  Mi as Themes,
  yt as TimePicker,
  Jn as Tooltip,
  wt as Uploader,
  Ct as Watermark,
  qS as _ActionSheetComponent,
  XS as _AppBarComponent,
  ZS as _AvatarComponent,
  JS as _AvatarGroupComponent,
  rk as _BackTopComponent,
  nk as _BadgeComponent,
  ak as _BottomNavigationComponent,
  tk as _BottomNavigationItemComponent,
  ok as _BreadcrumbComponent,
  ik as _BreadcrumbsComponent,
  ek as _ButtonComponent,
  lk as _ButtonGroupComponent,
  sk as _CardComponent,
  uk as _CellComponent,
  vk as _CheckboxComponent,
  fk as _CheckboxGroupComponent,
  ck as _ChipComponent,
  mk as _ColComponent,
  hk as _CollapseComponent,
  pk as _CollapseItemComponent,
  HS as _ContextComponent,
  gk as _CountdownComponent,
  bk as _CounterComponent,
  yk as _DatePickerComponent,
  wk as _DialogComponent,
  Ck as _DividerComponent,
  Sk as _DragComponent,
  $k as _EllipsisComponent,
  Tk as _FabComponent,
  Ok as _FormComponent,
  dk as _FormDetailsComponent,
  xS as _HoverComponent,
  _S as _HoverOverlayComponent,
  WS as _IconComponent,
  Pk as _ImageComponent,
  Mk as _ImagePreviewComponent,
  Ek as _IndexAnchorComponent,
  Nk as _IndexBarComponent,
  Dk as _InputComponent,
  KS as _LazyComponent,
  Ak as _LinkComponent,
  zk as _ListComponent,
  Lk as _LoadingBarComponent,
  QS as _LoadingComponent,
  GS as _LocaleComponent,
  Rk as _MenuComponent,
  Uk as _OptionComponent,
  Yk as _OverlayComponent,
  Hk as _PaginationComponent,
  Fk as _PaperComponent,
  jk as _PickerComponent,
  jS as _PopupComponent,
  Wk as _ProgressComponent,
  Gk as _PullRefreshComponent,
  qk as _RadioComponent,
  Xk as _RadioGroupComponent,
  Kk as _RateComponent,
  Zk as _ResultComponent,
  FS as _RippleComponent,
  Jk as _RowComponent,
  Qk as _SelectComponent,
  _k as _SkeletonComponent,
  xk as _SliderComponent,
  e$ as _SnackbarComponent,
  r$ as _SpaceComponent,
  n$ as _StepComponent,
  a$ as _StepsComponent,
  Bk as _StickyComponent,
  t$ as _StyleProviderComponent,
  Vk as _SwipeComponent,
  Ik as _SwipeItemComponent,
  o$ as _SwitchComponent,
  i$ as _TabComponent,
  l$ as _TabItemComponent,
  s$ as _TableComponent,
  u$ as _TabsComponent,
  d$ as _TabsItemsComponent,
  v$ as _ThemesComponent,
  f$ as _TimePickerComponent,
  kk as _TooltipComponent,
  c$ as _UploaderComponent,
  m$ as _WatermarkComponent,
  zf as actionSheetProps,
  Yi as add,
  Ff as appBarProps,
  cc as avatarGroupProps,
  ic as avatarProps,
  Fc as backTopProps,
  qc as badgeProps,
  nm as bottomNavigationItemProps,
  Jc as bottomNavigationProps,
  sm as breadcrumbProps,
  mm as breadcrumbsProps,
  Ac as buttonProps,
  Sm as cardProps,
  Vm as cellProps,
  Wm as checkboxGroupProps,
  Lm as checkboxProps,
  Km as chipProps,
  Qm as colProps,
  lh as collapseItemProps,
  ah as collapseProps,
  vh as countdownProps,
  lp as counterProps,
  Vp as datePickerProps,
  h$ as default,
  Ze as defaultLazyOptions,
  Gp as dialogProps,
  Jp as dividerProps,
  eg as dragProps,
  Zs as enUS,
  Em as formDetailsProps,
  Ob as formProps,
  Xs as iconProps,
  eu as imageCache,
  Xb as imagePreviewProps,
  Bb as imageProps,
  iy as indexAnchorProps,
  dy as indexBarProps,
  Cy as inputProps,
  US as install,
  My as linkProps,
  Dy as listProps,
  jy as loadingBarProps,
  on as loadingProps,
  r0 as menuProps,
  Qs as merge,
  l0 as optionProps,
  v0 as overlayProps,
  _e as pack,
  Js as packs,
  c0 as paginationProps,
  b0 as paperProps,
  S0 as pickerProps,
  Vt as popupProps,
  N0 as progressProps,
  Y0 as pullRefreshProps,
  J0 as radioGroupProps,
  j0 as radioProps,
  e1 as rateProps,
  a1 as resultProps,
  j1 as rowProps,
  K1 as selectProps,
  x1 as skeletonProps,
  tw as sliderProps,
  yv as snackbarProps,
  Vw as spaceProps,
  Bw as stepProps,
  Uw as stepsProps,
  Zt as stickyProps,
  Fw as styleProviderProps,
  Vd as swipeProps,
  Gw as switchProps,
  aC as tabItemProps,
  _w as tabProps,
  lC as tableProps,
  gC as tabsItemsProps,
  cC as tabsProps,
  uS as timePickerProps,
  cb as tooltipProps,
  wS as uploaderProps,
  Hi as use,
  Xr as useHoverOverlay,
  Ui as useLocale,
  RS as version,
  Ri as zhCN
};
