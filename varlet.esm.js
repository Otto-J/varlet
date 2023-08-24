import { reactive as Ye, onMounted as St, nextTick as ze, onActivated as hn, isRef as Kv, watch as de, onBeforeUnmount as so, onDeactivated as xn, unref as ua, onUnmounted as kt, inject as Zv, getCurrentInstance as ea, computed as L, provide as Jv, isVNode as $t, ref as $, Comment as Qv, Fragment as Me, createApp as _v, h as Os, onBeforeMount as xv, defineComponent as ne, createVNode as _, Teleport as Jr, Transition as Fe, withDirectives as Te, vShow as Rr, mergeProps as De, openBlock as h, createBlock as Ce, resolveDynamicComponent as ra, normalizeClass as c, normalizeStyle as q, resolveComponent as se, resolveDirective as Ae, withCtx as me, createElementVNode as E, renderSlot as j, toDisplayString as le, createElementBlock as T, renderList as We, createCommentVNode as ee, onUpdated as Tt, createTextVNode as $e, pushScopeId as gn, popScopeId as yn, withModifiers as Tr, normalizeProps as Pt, guardReactiveProps as uo, vModelText as ef, createSlots as Jt, withKeys as sl, toRaw as ul, TransitionGroup as rf } from "vue";
var Vs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, sk = Ye(Vs);
const yr = Ye(Vs), Ge = (e) => typeof e == "string", Ei = (e) => typeof e == "boolean", nr = (e) => typeof e == "number", Ni = (e) => Object.prototype.toString.call(e) === "[object Object]", nf = (e) => typeof e == "object" && e !== null, na = (e) => typeof e == "function", Ve = (e) => Array.isArray(e), af = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Di = (e) => e === window, R = (e) => e == null ? 0 : Ge(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ei(e) ? Number(e) : e, Qt = (e, r) => {
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
}, aa = () => typeof window < "u", dl = (e) => [...new Set(e)], Is = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), tf = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), of = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Wt = (e) => Ve(e) ? e : [e], dn = (e, r, n) => Math.min(n, Math.max(r, e)), lf = (e, r) => dn(e, 0, r.length - 1);
var vl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), fl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), sf = (e) => {
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
function Pr(e, r) {
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
function uf(e) {
  var {
    left: r
  } = Qe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function pl(e) {
  var {
    top: r
  } = Qe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function ha(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function zi(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function df(e) {
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
function vf(e) {
  for (var r = [], n = e; !Di(n); )
    n = vn(n), r.push(n);
  return r;
}
function Es(e, r) {
  if (Ge(e)) {
    var n = document.querySelector(e);
    return n || Pr(r, "target element cannot found"), n;
  }
  if (nf(e))
    return e;
  Pr(r, 'type of prop "target" should be a selector or an element object');
}
function ff() {
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
var Ns = (e) => Ge(e) && e.endsWith("rem"), cf = (e) => Ge(e) && e.endsWith("em") && !e.endsWith("rem"), mf = (e) => Ge(e) && e.endsWith("px") || nr(e), pf = (e) => Ge(e) && e.endsWith("%"), Ds = (e) => Ge(e) && e.endsWith("vw"), As = (e) => Ge(e) && e.endsWith("vh"), zs = (e) => Ge(e) && e.endsWith("vmin"), Ls = (e) => Ge(e) && e.endsWith("vmax"), hf = (e) => Ge(e) && e.startsWith("calc("), gf = (e) => Ge(e) && e.startsWith("var("), Re = (e) => {
  if (nr(e))
    return e;
  if (mf(e))
    return +e.replace("px", "");
  if (!aa())
    return 0;
  var {
    vw: r,
    vh: n,
    vMin: a,
    vMax: t
  } = ff();
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
  return Ge(e) ? R(e) : 0;
}, we = (e) => {
  if (e != null)
    return pf(e) || Ds(e) || As(e) || cf(e) || Ns(e) || hf(e) || gf(e) || zs(e) || Ls(e) ? e : Re(e) + "px";
}, ur = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = we(e), a = n.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = Bs();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function hl(e) {
  var r = Bs();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function fo(e) {
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
function yf() {
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
  } = r, l = Date.now(), i = ha(e), s = zi(e);
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
function Rs(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + tf(a);
    return r[o] = t, r;
  }, {});
}
function bf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function _t(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function or(e) {
  let r = !1;
  St(() => {
    e(), ze(() => {
      r = !0;
    });
  }), hn(() => {
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
  Kv(e) && (v = de(() => e.value, (m, b) => {
    d(b), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return or(() => {
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
var wf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function Cf(e) {
  const r = ea();
  return e in r.provides;
}
function ir(e) {
  if (!Cf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Zv(e), { childInstances: n, collect: a, clear: t } = r, o = wf(r, ["childInstances", "collect", "clear"]), l = ea();
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
function Sf(e) {
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
function lr(e) {
  const r = ea(), n = Ye([]), a = [], t = L(() => n.length), o = () => {
    const u = Sf(r.subTree);
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
      Jv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function Ot(e) {
  fn(() => window, "resize", e, { passive: !0 }), fn(() => window, "orientationchange", e, { passive: !0 });
}
function kf(e, r) {
  const n = $(!1);
  return de(e, (a) => {
    r === a && (n.value = !0);
  }, { immediate: !0 }), n;
}
function $f(e, r) {
  if (e > r)
    return "horizontal";
  if (r > e)
    return "vertical";
}
function Li() {
  const e = $(0), r = $(0), n = $(0), a = $(0), t = $(0), o = $(0), l = $(0), i = $(0), s = $(0), u = $(0), d = $(), v = $(!1), f = $(0), m = $(0), b = () => {
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
    resetTouch: b,
    startTouch: (O) => {
      b();
      const { clientX: P, clientY: S } = O.touches[0];
      e.value = P, r.value = S, l.value = P, i.value = S, v.value = !0, f.value = performance.now();
    },
    moveTouch: (O) => {
      const { clientX: P, clientY: S } = O.touches[0];
      n.value = P - e.value, a.value = S - r.value, t.value = Math.abs(n.value), o.value = Math.abs(a.value), m.value = Math.sqrt(t.value ** 2 + o.value ** 2), s.value = P - l.value, u.value = S - i.value, d.value || (d.value = $f(t.value, o.value)), l.value = P, i.value = S;
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
function Tf(e) {
  var r = _v(e), n = document.createElement("div");
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
      return () => Os(e, Fo({}, r, n));
    }
  }, {
    unmount: t
  } = Tf(a);
  return {
    unmountInstance: t
  };
}
function Ys(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Qv) {
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
  var e = $(""), r = /* @__PURE__ */ function() {
    var t = yl(function* (o, l, i) {
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
    var t = yl(function* (o, l, i, s, u) {
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
function Pf(e) {
  fn(() => window, "hashchange", e), fn(() => window, "popstate", e);
}
function oa() {
  var e = $(!1);
  return hn(() => {
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
function pr(e, r) {
  return e === !1 ? null : (e === !0 && r && (e = r), "var-elevation--" + e);
}
function ya(e, r, n) {
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
} = te("ripple"), bl = 250;
function Of(e) {
  var {
    zIndex: r,
    position: n
  } = En(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function Vf(e, r) {
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
  if (r.removeRipple(), !(r.disabled || r.tasker || !yr.enableRipple)) {
    var n = () => {
      r.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = Vf(this, e), s = document.createElement("div");
      s.classList.add(Hs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), Of(this), this.appendChild(s), window.setTimeout(() => {
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
      var a = n[n.length - 1], t = bl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, bl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function js() {
  if (!(!bf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function If(e, r) {
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
function Mf(e) {
  e.removeEventListener("touchstart", Fs), e.removeEventListener("touchmove", js), e.removeEventListener("dragstart", jo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Bf(e, r) {
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
  mounted: If,
  unmounted: Mf,
  updated: Bf,
  install(e) {
    e.directive("ripple", this);
  }
}, uk = Ws;
const Ke = Ws;
function Ef(e) {
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
    validator: Ef
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
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function At(e) {
  yr.locks[e] = 1, Gs();
}
function zt(e) {
  delete yr.locks[e], Gs();
}
function mo(e, r) {
  var {
    uid: n
  } = ea();
  r && de(r, (a) => {
    a === !1 ? zt(n) : a === !0 && e() === !0 && At(n);
  }), de(e, (a) => {
    r && r() === !1 || (a === !0 ? At(n) : zt(n));
  }), xv(() => {
    r && r() === !1 || e() === !0 && At(n);
  }), kt(() => {
    r && r() === !1 || e() === !0 && zt(n);
  }), hn(() => {
    r && r() === !1 || e() === !0 && At(n);
  }), xn(() => {
    r && r() === !1 || e() === !0 && zt(n);
  });
}
function It(e, r) {
  var n = $(yr.zIndex);
  return de(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
var qs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function Nf() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(qs);
  return {
    index: n,
    popup: r,
    bindPopup: e
  };
}
function Df() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(qs);
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
    } = r, t = kf(() => e.show, !0), {
      zIndex: o
    } = It(() => e.show, 3), {
      disabled: l
    } = oa(), {
      bindPopupItems: i
    } = Df(), s = () => {
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
    }), Pf(() => C(e.onRouteChange)), () => {
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
var dk = Ur, Xs = {
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
function Af(e) {
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
  n: zf,
  classes: Lf
} = te("icon");
function Rf(e, r) {
  return h(), Ce(ra(e.isURL(e.name) ? "img" : "i"), {
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
      var t = Af(function* (o, l) {
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
      n: zf,
      classes: Lf,
      nextName: r,
      animateInProgress: n,
      isURL: af,
      toNumber: R,
      toSizeUnit: we
    };
  }
});
Ks.render = Rf;
const Ne = Ks;
ie(Ne);
var vk = Ne;
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
var Uf = Go({
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
var fk = {
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
  n: Yf,
  classes: Hf
} = te("action-sheet"), Ff = ["onClick"];
function jf(e, r) {
  var n = se("var-icon"), a = se("var-popup"), t = Ae("ripple");
  return h(), Ce(a, De({
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
      )]), j(e.$slots, "actions", {}, () => [(h(!0), T(
        Me,
        null,
        We(e.actions, (o) => Te((h(), T("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: q({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (h(), Ce(n, {
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
        )], 14, Ff)), [[t, {
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
  props: Uf,
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
      n: Yf,
      classes: Hf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: _e,
      dt: vo,
      handleSelect: n
    };
  }
});
_s.render = jf;
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
function Wf(e) {
  return e === void 0 && (e = {}), Ko({}, Fi, e);
}
function qr(e) {
  return aa() ? new Promise((r) => {
    qr.close();
    var n = Ye(Wf(e));
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
var ck = Mt;
function Gf(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
}
var qf = {
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
    validator: Gf
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
  n: Xf,
  classes: Kf
} = te("app-bar");
function Zf(e, r) {
  return h(), T(
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
        [j(e.$slots, "left"), e.titlePosition === "left" ? (h(), T(
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
      ), e.titlePosition === "center" ? (h(), T(
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
        [e.titlePosition === "right" ? (h(), T(
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
  props: qf,
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
    return or(o), Tt(o), {
      n: Xf,
      classes: Kf,
      formatElevation: pr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
xs.render = Zf;
const ba = xs;
ie(ba);
var mk = ba;
function Sl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function po(e) {
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
var Jf = "background-image", Qf = "lazy-loading", _f = "lazy-error", kl = "lazy-attempt", xf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Jo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Yn = [], eo = [], eu = sf(100), Ze = {
  loading: Jo,
  error: Jo,
  attempt: 3,
  throttleWait: 300,
  events: xf
}, ji = Ai(Bt, Ze.throttleWait);
function ho(e, r) {
  e._lazy.arg === Jf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function ec(e) {
  e._lazy.loading && ho(e, e._lazy.loading), Bt();
}
function rc(e) {
  e._lazy.error && ho(e, e._lazy.error), e._lazy.state = "error", Gi(e), Bt();
}
function ru(e, r) {
  ho(e, r), e._lazy.state = "success", Gi(e), Bt();
}
function nc(e) {
  var r;
  eo.includes(e) || (eo.push(e), (r = Ze.events) == null || r.forEach((n) => {
    e.addEventListener(n, ji, {
      passive: !0
    });
  }));
}
function ac() {
  eo.forEach((e) => {
    var r;
    (r = Ze.events) == null || r.forEach((n) => {
      e.removeEventListener(n, ji);
    });
  }), eo.length = 0;
}
function tc(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Qf)) != null ? n : Ze.loading,
    error: (a = e.getAttribute(_f)) != null ? a : Ze.error,
    attempt: e.getAttribute(kl) ? Number(e.getAttribute(kl)) : Ze.attempt
  };
  e._lazy = Zo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), ho(e, Jo), C(Ze.filter, e._lazy);
}
function oc(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, eu.add(r), ru(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? rc(e) : nu(e);
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
    ec(e), oc(e, r);
  }
}
function Wi(e) {
  return Qo.apply(this, arguments);
}
function Qo() {
  return Qo = po(function* (e) {
    yield Dr(), df(e) && nu(e);
  }), Qo.apply(this, arguments);
}
function Bt() {
  Yn.forEach((e) => Wi(e));
}
function ic(e) {
  return _o.apply(this, arguments);
}
function _o() {
  return _o = po(function* (e) {
    !Yn.includes(e) && Yn.push(e), vf(e).forEach(nc), yield Wi(e);
  }), _o.apply(this, arguments);
}
function Gi(e) {
  Qt(Yn, e), Yn.length === 0 && ac();
}
function lc(e, r) {
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
  return xo = po(function* (e, r) {
    tc(e, r), yield ic(e);
  }), xo.apply(this, arguments);
}
function sc(e, r) {
  return ei.apply(this, arguments);
}
function ei() {
  return ei = po(function* (e, r) {
    if (!lc(e, r)) {
      Yn.includes(e) && (yield Wi(e));
      return;
    }
    yield au(e, r);
  }), ei.apply(this, arguments);
}
function uc(e) {
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
  updated: sc,
  install(e, r) {
    uc(r), ji = Ai(Bt, Ze.throttleWait), e.directive("lazy", this);
  }
}, pk = tu;
const wa = tu;
function dc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ou = (e) => ["mini", "small", "normal", "large"].includes(e);
function iu(e) {
  return ou(e) || nr(e) || Ge(e);
}
var vc = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: iu,
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
    validator: dc,
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
  n: fc,
  classes: cc
} = te("avatar"), mc = ["src", "alt", "lazy-loading", "lazy-error"], pc = ["src", "alt"];
function hc(e, r) {
  var n = Ae("lazy");
  return h(), T(
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
    [e.src ? (h(), T(
      Me,
      {
        key: 0
      },
      [e.lazy ? Te((h(), T("img", {
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
      }, null, 46, mc)), [[n, e.src]]) : (h(), T("img", {
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
      }, null, 46, pc))],
      64
      /* STABLE_FRAGMENT */
    )) : (h(), T(
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
var lu = ne({
  name: "VarAvatar",
  directives: {
    Lazy: wa
  },
  props: vc,
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
    return or(t), Tt(t), {
      internalSizeValidator: ou,
      sizeValidator: iu,
      toSizeUnit: we,
      n: fc,
      classes: cc,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
lu.render = hc;
const Ca = lu;
ie(Ca);
var hk = Ca, gc = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: yc,
  classes: bc
} = te("avatar-group");
function wc(e, r) {
  return h(), T(
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
var su = ne({
  name: "VarAvatarGroup",
  props: gc,
  setup(e) {
    var r = L(() => e.offset == null ? {} : {
      "--avatar-group-offset": we(e.offset)
    });
    return {
      n: yc,
      classes: bc,
      toSizeUnit: we,
      rootStyles: r
    };
  }
});
su.render = wc;
const Sa = su;
ie(Sa);
var gk = Sa;
function Cc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Sc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var on = {
  type: {
    type: String,
    default: "circle",
    validator: Cc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Sc
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
  n: kc,
  classes: $c
} = te("loading"), Tc = (e) => (gn(""), e = e(), yn(), e), Pc = /* @__PURE__ */ Tc(() => /* @__PURE__ */ E(
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
)), Oc = [Pc];
function Vc(e, r) {
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
      [j(e.$slots, "default"), e.loading ? (h(), T(
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
    )) : ee("v-if", !0), e.isShow ? (h(), T(
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
          Oc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (h(!0), T(
        Me,
        null,
        We(e.loadingTypeDict, (n, a) => (h(), T(
          Me,
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
              Me,
              null,
              We(n, (t) => (h(), T(
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
      )), e.$slots.description || e.description ? (h(), T(
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
var uu = ne({
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
      n: kc,
      classes: $c,
      multiplySizeUnit: ur,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
uu.render = Vc;
const cn = uu;
ie(cn);
var yk = cn, Ic = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Mc,
  classes: Bc
} = te("hover-overlay");
function Ec(e, r) {
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
var du = ne({
  name: "VarHoverOverlay",
  props: Ic,
  setup() {
    return {
      n: Mc,
      classes: Bc
    };
  }
});
du.render = Ec;
const wr = du;
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
var bk = wr;
function vu(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function Nc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[Is(t)] = o, n;
  }, {}) : {};
}
function Dc(e) {
  var {
    value: r
  } = e._hover, n = Nc(e);
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
function Ac(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function fu(e) {
  Ac(e), qi(e, e._hover.rawStyle);
}
function cu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, na(e)) {
    e(this._hover.hovering);
    return;
  }
  qi(this, e);
}
function mu() {
  if (this._hover.hovering = !1, na(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  fu(this);
}
function pu(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  vu(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, Dc(e), e.addEventListener("mouseenter", cu), e.addEventListener("mouseleave", mu));
}
function hu(e, r) {
  vu(r.arg) || (fu(e), e.removeEventListener("mouseenter", cu), e.removeEventListener("mouseleave", mu));
}
function zc(e, r) {
  e._hover && hu(e, r);
}
function Lc(e, r) {
  return !na(r.value) && e._hover.hovering;
}
function Rc(e, r) {
  pu(e, r), Lc(e, r) && qi(e, r.value);
}
var gu = {
  mounted: pu,
  unmounted: hu,
  beforeUpdate: zc,
  updated: Rc,
  install(e) {
    e.directive("hover", this);
  }
}, wk = gu;
const Ar = gu;
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
function yu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Uc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Yc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Hc = {
  type: {
    type: String,
    validator: yu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Yc
  },
  size: {
    type: String,
    validator: Uc
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
  loadingColor: ri({}, xe(on, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, bu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Fc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(bu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function jc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(bu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Wc,
  classes: Gc
} = te("button"), qc = ["type", "disabled"];
function Xc(e, r) {
  var n = se("var-loading"), a = se("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return Te((h(), T("button", {
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
  }, [e.loading || e.pending ? (h(), Ce(n, {
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
  }, null, 8, ["hovering"])], 46, qc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var wu = ne({
  name: "VarButton",
  components: {
    VarLoading: cn,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  props: Hc,
  setup(e) {
    var r = $(!1), {
      buttonGroup: n
    } = jc(), {
      hovering: a,
      handleHovering: t
    } = Xr(), o = L(() => {
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
      n: Wc,
      classes: Gc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
wu.render = Xc;
const vr = wu;
ie(vr);
var Ck = vr, Kc = {
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
  n: Zc,
  classes: Jc
} = te("back-top");
function Qc(e, r) {
  var n = se("var-icon"), a = se("var-button");
  return h(), Ce(Jr, {
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
var Cu = ne({
  name: "VarBackTop",
  components: {
    VarButton: vr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Kc,
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
      r.value = ha(t) >= Re(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Es(e.target, "BackTop") : vn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return St(() => {
      i(), s(), a.value = !1;
    }), hn(s), co(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: we,
      n: Zc,
      classes: Jc,
      handleClick: o
    };
  }
});
Cu.render = Qc;
const ka = Cu;
ie(ka);
var Sk = ka;
function _c(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function xc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var em = {
  type: {
    type: String,
    default: "default",
    validator: _c
  },
  position: {
    type: String,
    default: "right-top",
    validator: xc
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
  n: rm,
  classes: nm
} = te("badge");
function am(e, r) {
  var n = se("var-icon");
  return h(), T(
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
        [e.icon ? (h(), Ce(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-badge-cover": "",
          name: e.icon
        }, null, 8, ["class", "name"])) : ee("v-if", !0), j(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), T(
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
var Su = ne({
  name: "VarBadge",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: em,
  setup(e) {
    var r = L(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && R(n) > R(a) ? a + "+" : n;
    });
    return {
      n: rm,
      classes: nm,
      value: r
    };
  }
});
Su.render = am;
const Hn = Su;
ie(Hn);
var kk = Hn, tm = {
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
}, ku = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function om() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(ku);
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
  n: im,
  classes: lm
} = te("bottom-navigation"), {
  n: go
} = te("bottom-navigation-item"), $l = go("--right-half-space"), Tl = go("--left-half-space"), Pl = go("--right-space"), sm = {
  type: "primary"
};
function um(e, r) {
  var n = se("var-button");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (h(), Ce(n, De({
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
var $u = ne({
  name: "VarBottomNavigation",
  components: {
    VarButton: vr
  },
  props: tm,
  setup(e, r) {
    var {
      slots: n
    } = r, a = $(null), t = L(() => e.active), o = L(() => e.activeColor), l = L(() => e.inactiveColor), i = $({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = om(), v = () => {
      s.value === 0 || f() || m() || b();
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
    }), b = () => {
      nr(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > s.value - 1 && C(e["onUpdate:active"], s.value - 1));
    }, y = (g) => {
      t.value !== g && (e.onBeforeChange ? p(g) : w(g));
    }, p = (g) => {
      var k = Wt(C(e.onBeforeChange, g));
      Promise.all(k).then((Y) => {
        Y.every(Boolean) && w(g);
      });
    }, w = (g) => {
      C(e["onUpdate:active"], g), C(e.onChange, g);
    }, O = () => {
      var g = I();
      g.forEach((k) => {
        k.classList.remove($l, Tl, Pl);
      });
    }, P = (g) => {
      var k = I(), Y = k.length, M = g % 2 === 0;
      k.forEach((F, X) => {
        S(M, F, X, Y);
      });
    }, S = (g, k, Y, M) => {
      var F = Y === M - 1;
      if (!g && F) {
        k.classList.add(Pl);
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
      onToggle: y
    };
    return d(N), de(() => s.value, v), de(() => e.fabProps, (g) => {
      i.value = ni({}, sm, g);
    }, {
      immediate: !0,
      deep: !0
    }), or(() => {
      n.fab && P(s.value);
    }), Tt(() => {
      O(), n.fab && P(s.value);
    }), {
      n: im,
      classes: lm,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: V,
      fabProps: i
    };
  }
});
$u.render = um;
const $a = $u;
ie($a);
var $k = $a, dm = {
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
function vm() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(ku);
  return n || Pr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: fm,
  classes: cm
} = te("bottom-navigation-item"), mm = {
  type: "danger",
  dot: !0
};
function pm(e, r) {
  var n = se("var-icon"), a = se("var-badge"), t = Ae("ripple");
  return Te((h(), T(
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
    [e.icon && !e.$slots.icon ? (h(), Ce(n, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : ee("v-if", !0), j(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), Ce(a, De({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : ee("v-if", !0), E(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (h(), T(
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
var Tu = ne({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Hn,
    VarIcon: Ne
  },
  directives: {
    Ripple: Ke
  },
  props: dm,
  setup(e) {
    var r = L(() => e.name), n = L(() => e.badge), a = $({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = vm(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, b = (m = r.value) != null ? m : t.value;
      C(e.onClick, b), C(o.onToggle, b);
    };
    return l(d), de(() => n.value, (m) => {
      a.value = m === !0 ? mm : n.value;
    }, {
      immediate: !0
    }), {
      n: fm,
      classes: cm,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Tu.render = pm;
const Ta = Tu;
ie(Ta);
var Tk = Ta, hm = {
  separator: {
    type: String
  },
  onClick: U()
}, Pu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function gm() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Pu);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function ym() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Pu);
  return r || Pr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: bm,
  classes: wm
} = te("breadcrumb");
function Cm(e, r) {
  return h(), T(
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
var Ou = ne({
  name: "VarBreadcrumb",
  props: hm,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = ym(), t = L(() => r.value === n.length.value - 1), o = L(() => n.separator.value), l = (i) => {
      t.value || C(e.onClick, i);
    };
    return a(null), {
      n: bm,
      classes: wm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Ou.render = Cm;
const Pa = Ou;
ie(Pa);
var Pk = Pa, Sm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: km
} = te("breadcrumbs");
function $m(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Vu = ne({
  name: "VarBreadcrumbs",
  props: Sm,
  setup(e) {
    var r = L(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = gm(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: km
    };
  }
});
Vu.render = $m;
const Oa = Vu;
ie(Oa);
var Ok = Oa;
function Tm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Pm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Om(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Vm = {
  type: {
    type: String,
    default: "default",
    validator: Tm
  },
  size: {
    type: String,
    default: "normal",
    validator: Pm
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
    validator: Om
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
  n: Im,
  classes: Mm
} = te("button-group");
function Bm(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Iu = ne({
  name: "VarButtonGroup",
  props: Vm,
  setup(e) {
    var {
      bindButtons: r
    } = Fc(), n = {
      elevation: L(() => e.elevation),
      type: L(() => e.type),
      size: L(() => e.size),
      color: L(() => e.color),
      textColor: L(() => e.textColor),
      mode: L(() => e.mode)
    };
    return r(n), {
      n: Im,
      classes: Mm,
      formatElevation: pr
    };
  }
});
Iu.render = Bm;
const Va = Iu;
ie(Va);
var Vk = Va;
function Em(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Nm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Em,
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
function Ol(e, r, n, a, t, o, l) {
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
        Ol(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ol(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Dm,
  classes: Am
} = te("card"), zm = 500, Lm = ["src", "alt"];
function Rm(e, r) {
  var n = se("var-icon"), a = se("var-button"), t = Ae("ripple");
  return Te((h(), T(
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
      [j(e.$slots, "image", {}, () => [e.src ? (h(), T("img", {
        key: 0,
        class: c(e.n("image")),
        style: q({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Lm)) : ee("v-if", !0)]), E(
        "div",
        {
          class: c(e.n("container"))
        },
        [j(e.$slots, "title", {}, () => [e.title ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          le(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          le(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (h(), T(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [j(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), T(
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
      ), e.showFloatingButtons ? (h(), T(
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
var Mu = ne({
  name: "VarCard",
  directives: {
    Ripple: Ke
  },
  components: {
    VarIcon: Ne,
    VarButton: vr
  },
  props: Nm,
  setup(e) {
    var r = $(null), n = $(null), a = $("auto"), t = $("auto"), o = $("100%"), l = $("100%"), i = $("auto"), s = $("auto"), u = $(void 0), d = $("hidden"), v = $("0px"), f = $("0"), m = L(() => e.layout === "row"), b = $(!1), y = $(!1), {
      zIndex: p
    } = It(() => e.floating, 1);
    mo(() => e.floating, () => !m.value);
    var w = "auto", O = "auto", P = null, S = $(null), I = /* @__PURE__ */ function() {
      var k = Vl(function* () {
        clearTimeout(S.value), clearTimeout(P), S.value = null, S.value = setTimeout(/* @__PURE__ */ Vl(function* () {
          var {
            width: Y,
            height: M,
            left: F,
            top: X
          } = Qe(r.value);
          a.value = we(Y), t.value = we(M), o.value = a.value, l.value = t.value, i.value = we(X), s.value = we(F), u.value = "fixed", w = i.value, O = s.value, b.value = !0, yield Dr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? zm : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), V = () => {
      clearTimeout(P), clearTimeout(S.value), S.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = O, v.value = "0px", f.value = "0", b.value = !1, P = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", O = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
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
      n: Dm,
      classes: Am,
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
      zIndex: p,
      isRow: m,
      close: N,
      showFloatingButtons: b,
      floated: y,
      formatElevation: pr,
      handleClick: g
    };
  }
});
Mu.render = Rm;
const Ia = Mu;
ie(Ia);
var Ik = Ia, Um = {
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
  n: Ym,
  classes: Hm
} = te("cell");
function Fm(e, r) {
  var n = se("var-icon"), a = Ae("ripple");
  return Te((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "icon", {}, () => [e.icon ? (h(), T(
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
      [j(e.$slots, "default", {}, () => [e.title ? (h(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        le(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), T(
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
    ), e.$slots.extra ? (h(), T(
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
var Bu = ne({
  name: "VarCell",
  components: {
    VarIcon: Ne
  },
  directives: {
    Ripple: Ke
  },
  props: Um,
  setup(e) {
    var r = L(() => e.borderOffset == null ? {} : {
      "--cell-border-left": we(e.borderOffset),
      "--cell-border-right": we(e.borderOffset)
    }), n = (a) => {
      C(e.onClick, a);
    };
    return {
      n: Ym,
      classes: Hm,
      toSizeUnit: we,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Bu.render = Fm;
const Fn = Bu;
ie(Fn);
var Mk = Fn, jm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Wm
} = te("form-details"), Gm = {
  key: 0
}, qm = {
  key: 0
};
function Xm(e, r) {
  return h(), Ce(Fe, {
    name: e.n()
  }, {
    default: me(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (h(), T(
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
          default: me(() => [e.errorMessage ? (h(), T(
            "div",
            Gm,
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
          default: me(() => [j(e.$slots, "extra-message", {}, () => [e.extraMessage ? (h(), T(
            "div",
            qm,
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
var Eu = ne({
  name: "VarFormDetails",
  props: jm,
  setup: () => ({
    n: Wm
  })
});
Eu.render = Xm;
const ar = Eu;
ie(ar);
var Bk = ar, Km = {
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
  indeterminate: {
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
  "onUpdate:modelValue": U(),
  "onUpdate:indeterminate": U()
}, Nu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Zm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Nu);
  return {
    length: n,
    checkboxes: r,
    bindCheckboxes: e
  };
}
function Jm() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(Nu);
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
var Du = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Du), a = ea(), t = n ? (o) => {
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
function Qm() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Du);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: _m,
  classes: xm
} = te("checkbox");
function ep(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("hover"), l = Ae("ripple");
  return h(), T(
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
      [Te((h(), T(
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
var Au = ne({
  name: "VarCheckbox",
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  props: Km,
  setup(e) {
    var r = ya(e, "modelValue"), n = L(() => r.value === e.checkedValue), a = L(() => e.checkedValue), t = $(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Jm(), {
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
      resetValidation: b
    } = Or(), y = ya(e, "indeterminate"), p = (k) => {
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
      r.value = k, y.value = !1, C(M, r.value), p("onChange"), k === Y ? o == null || o.onChecked(Y) : o == null || o.onUnchecked(Y);
    }, O = (k) => {
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
    }, P = (k) => {
      var {
        checkedValue: Y,
        uncheckedValue: M
      } = e;
      r.value = k.includes(Y) ? Y : M;
    }, S = () => {
      t.value = !1;
    }, I = () => {
      r.value = e.uncheckedValue, b();
    }, V = (k) => {
      var {
        checkedValue: Y,
        uncheckedValue: M
      } = e, F = ![Y, M].includes(k);
      F && (k = n.value ? M : Y), w(k);
    }, N = () => m(e.rules, e.modelValue), g = {
      checkedValue: a,
      checked: n,
      sync: P,
      validate: N,
      resetValidation: b,
      reset: I,
      resetWithAnimation: S
    };
    return C(l, g), C(d, g), {
      isIndeterminate: y,
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: _m,
      classes: xm,
      handleClick: O,
      toggle: V,
      reset: I,
      validate: N,
      resetValidation: b
    };
  }
});
Au.render = ep;
const jn = Au;
ie(jn);
var Ek = jn;
function rp(e) {
  return ["horizontal", "vertical"].includes(e);
}
var np = {
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
    validator: rp
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
  n: ap,
  classes: tp
} = te("checkbox-group");
function op(e, r) {
  var n = se("var-form-details");
  return h(), T(
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
var zu = ne({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: ar
  },
  props: np,
  setup(e) {
    var r = L(() => e.max), n = L(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Zm(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), v = L(() => i.value), f = (N) => {
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
    }, b = (N) => {
      var {
        modelValue: g
      } = e;
      g.includes(N) || m([...g, N]);
    }, y = (N) => {
      var {
        modelValue: g
      } = e;
      g.includes(N) && m(g.filter((k) => k !== N));
    }, p = () => t.forEach((N) => {
      var {
        sync: g
      } = N;
      return g(e.modelValue);
    }), w = () => {
      t.forEach((N) => N.resetWithAnimation());
    }, O = () => {
      var N = t.map((k) => {
        var {
          checkedValue: Y
        } = k;
        return Y.value;
      }), g = dl(N);
      return w(), C(e["onUpdate:modelValue"], g), g;
    }, P = () => {
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
    de(() => e.modelValue, p, {
      deep: !0
    }), de(() => a.value, p);
    var V = {
      max: r,
      checkedCount: n,
      onChecked: b,
      onUnchecked: y,
      validate: I,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return o(V), C(l, V), {
      errorMessage: i,
      n: ap,
      classes: tp,
      checkAll: O,
      inverseAll: P,
      reset: S,
      validate: I,
      resetValidation: d
    };
  }
});
zu.render = op;
const Ma = zu;
ie(Ma);
var Nk = Ma;
function ip(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function lp(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var sp = {
  type: {
    type: String,
    default: "default",
    validator: ip
  },
  size: {
    type: String,
    default: "normal",
    validator: lp
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: xe(Xs, "name"),
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
  n: Qr,
  classes: up
} = te("chip");
function dp(e, r) {
  var n = se("var-icon");
  return h(), Ce(Fe, {
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
      ), j(e.$slots, "right"), e.closable ? (h(), T(
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
var Lu = ne({
  name: "VarChip",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: sp,
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
      classes: up,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Lu.render = dp;
const Wn = Lu;
ie(Wn);
var Dk = Wn;
function vp(e) {
  return ["row", "column"].includes(e);
}
function fp(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function cp(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var mp = {
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
    validator: vp
  },
  justify: {
    type: String,
    validator: fp
  },
  align: {
    type: String,
    validator: cp
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
}, Ru = Symbol("ROW_BIND_COL_KEY");
function pp() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(Ru);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function hp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Ru);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Lt,
  classes: gp
} = te("col");
function yp(e, r) {
  return h(), T(
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
var Uu = ne({
  name: "VarCol",
  props: mp,
  setup(e) {
    var r = $({
      left: 0,
      right: 0
    }), n = L(() => R(e.span)), a = L(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = hp(), l = {
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
      classes: gp,
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
Uu.render = yp;
const Ba = Uu;
ie(Ba);
var Ak = Ba, Yu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function bp() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Yu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var wp = {
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
  n: Cp
} = te("collapse");
function Sp(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Hu = ne({
  name: "VarCollapse",
  props: wp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = bp(), t = L(() => e.modelValue), o = L(() => e.offset), l = L(() => e.divider), i = L(() => e.elevation), s = () => !e.accordion && !Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (y, p) => s() ? p ? e.accordion ? y : [...e.modelValue, y] : e.accordion ? null : e.modelValue.filter((w) => w !== y) : null, d = (y, p) => {
      var w = u(y, p);
      C(e["onUpdate:modelValue"], w), C(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((p) => {
          var {
            name: w
          } = p;
          return e.modelValue === w.value;
        });
      var y = n.filter((p) => {
        var {
          name: w
        } = p;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return y.length ? y : void 0;
    }, f = () => e.accordion ? n.find((y) => {
      var {
        index: p,
        name: w
      } = y;
      return w.value === void 0 && e.modelValue === p.value;
    }) : n.filter((y) => {
      var {
        index: p,
        name: w
      } = y;
      return w.value === void 0 && e.modelValue.includes(p.value);
    }), m = () => {
      if (s()) {
        var y = v() || f();
        if (e.accordion && !y || !e.accordion && !y.length) {
          n.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((p) => {
          var w = e.accordion ? y === p : y.includes(p);
          p.init(e.accordion, w);
        });
      }
    }, b = {
      active: t,
      offset: o,
      divider: l,
      elevation: i,
      updateItem: d
    };
    return a(b), de(() => r.value, () => ze().then(m)), de(() => e.modelValue, () => ze().then(m)), {
      n: Cp,
      divider: l
    };
  }
});
Hu.render = Sp;
const Ea = Hu;
ie(Ea);
var zk = Ea;
function kp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Yu);
  return n || Pr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var $p = {
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
  n: Tp,
  classes: Pp
} = te("collapse-item");
function Op(e, r) {
  var n = se("var-icon");
  return h(), T(
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
var Fu = ne({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ne
  },
  props: $p,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = kp(), t = !0, o = $(null), l = $(!1), i = $(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = L(() => e.name), b = (I, V) => {
      s.value === void 0 || I && Ve(s.value) || V === i.value || (i.value = V, y(!0));
    }, y = (I) => {
      e.disabled || I || f(e.name || r.value, !i.value);
    }, p = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = I + "px", t && fo(() => {
            t && P();
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
    }, P = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, S = {
      index: r,
      name: m,
      init: b
    };
    return a(S), de(i, (I) => {
      I ? p() : O();
    }), {
      n: Tp,
      start: w,
      classes: Pp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: y,
      contentEl: o,
      transitionend: P,
      formatElevation: pr
    };
  }
});
Fu.render = Op;
const Na = Fu;
ie(Na);
var Lk = Na, Vp = {
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
  n: Ip
} = te("countdown"), ti = 1e3, oi = 60 * ti, ii = 60 * oi, Il = 24 * ii;
function Mp(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", Pt(uo(e.timeData)), () => [$e(
      le(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var ju = ne({
  name: "VarCountdown",
  props: Vp,
  setup(e) {
    var r = $(""), n = $({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (b, y) => {
      var p = Object.values(y), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach((S, I) => {
        b.includes(S) ? b = b.replace(S, kn("" + p[I], 2, "0")) : p[I + 1] += p[I] * O[I];
      }), b.includes("S")) {
        var P = kn("" + p[p.length - 1], 3, "0");
        b.includes("SSS") ? b = b.replace("SSS", P) : b.includes("SS") ? b = b.replace("SS", P.slice(0, 2)) : b = b.replace("S", P.slice(0, 1));
      }
      return b;
    }, u = (b) => {
      var y = Math.floor(b / Il), p = Math.floor(b % Il / ii), w = Math.floor(b % ii / oi), O = Math.floor(b % oi / ti), P = Math.floor(b % ti), S = {
        days: y,
        hours: p,
        minutes: w,
        seconds: O,
        milliseconds: P
      };
      n.value = S, C(e.onChange, n.value), r.value = s(e.format, S);
    }, d = () => {
      var {
        time: b,
        onEnd: y
      } = e, p = performance.now();
      if (a || (a = p + R(b)), l = a - p, l < 0 && (l = 0), u(l), l === 0) {
        C(y);
        return;
      }
      t && (o = br(d));
    }, v = function(b) {
      b === void 0 && (b = !1), !(t && !b) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, hl(o);
    }, m = () => {
      a = 0, t = !1, hl(o), d();
    };
    return de(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), hn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), xn(() => {
      i = t, f();
    }), kt(f), {
      showTime: r,
      timeData: n,
      n: Ip,
      start: v,
      pause: f,
      reset: m
    };
  }
});
ju.render = Mp;
const Da = ju;
ie(Da);
var Rk = Da;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var An = 9e15, bn = 1e9, li = "0123456789abcdef", ro = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", no = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", si = {
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
}, Wu, jr, ye = !0, yo = "[DecimalError] ", mn = yo + "Invalid argument: ", Gu = yo + "Precision limit exceeded", qu = yo + "crypto unavailable", Xu = "[object Decimal]", tr = Math.floor, Je = Math.pow, Bp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ep = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Np = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ku = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Nr = 1e7, he = 7, Dp = 9007199254740991, Ap = ro.length - 1, ui = no.length - 1, K = { toStringTag: Xu };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), pe(e);
};
K.ceil = function() {
  return pe(new this.constructor(this), this.e + 1, 2);
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
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + he, a.rounding = 1, n = zp(a, xu(a, n)), a.precision = e, a.rounding = r, pe(jr == 2 || jr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ye = !1, o = d.s * Je(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = rr(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Je(n, 1 / 3), e = tr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ee(u.plus(d).times(i), u.plus(s), l + 2, 1), rr(i.d).slice(0, l) === (n = rr(a.d)).slice(0, l))
      if (n = n.slice(l - 3, l + 1), n == "9999" || !t && n == "4999") {
        if (!t && (pe(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (pe(a, e + 1, 1), r = !a.times(a).times(a).eq(d));
        break;
      }
  return ye = !0, pe(a, e, v.rounding, r);
};
K.decimalPlaces = K.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - tr(this.e / he)) * he, e = r[e], e)
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
  return pe(Ee(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return pe(new this.constructor(this), this.e + 1, 3);
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
  return pe(o, l.precision = n, l.rounding = a, !0);
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
  return o.precision = r, o.rounding = n, pe(t, r, n, !0);
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
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, ye = !1, n = n.times(n).minus(1).sqrt().plus(n), ye = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, ye = !1, n = n.times(n).plus(1).sqrt().plus(n), ye = !0, a.precision = e, a.rounding = r, n.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? pe(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
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
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / he + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ye = !1, r = Math.ceil(i / he), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), ye = !0, pe(l, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && tr(this.e / he) > this.d.length - 2;
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
  if (ye = !1, i = v + m, l = ln(u, i), a = r ? ao(d, i + 10) : ln(e, i), s = Ee(l, a, i, 1), Aa(s.d, t = v, f))
    do
      if (i += 10, l = ln(u, i), a = r ? ao(d, i + 10) : ln(e, i), s = Ee(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = pe(s, v + 1, 0));
        break;
      }
    while (Aa(s.d, t += 10, f));
  return ye = !0, pe(s, v, f);
};
K.minus = K.sub = function(e) {
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
    return ye ? pe(e, i, s) : e;
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
  return u[0] ? (e.d = u, e.e = bo(u, n), ye ? pe(e, i, s) : e) : new b(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? pe(new a(n), a.precision, a.rounding) : (ye = !1, a.modulo == 9 ? (r = Ee(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ee(n, e, 0, a.modulo, 1), r = r.times(e), ye = !0, n.minus(r));
};
K.naturalExponential = K.exp = function() {
  return di(this);
};
K.naturalLogarithm = K.ln = function() {
  return ln(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, pe(e);
};
K.plus = K.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ye ? pe(e, i, s) : e;
  if (o = tr(v.e / he), a = tr(e.e / he), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / he), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Nr | 0, u[t] %= Nr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = bo(u, a), ye ? pe(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(mn + e);
  return n.d ? (r = Zu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
K.round = function() {
  var e = this, r = e.constructor;
  return pe(new r(e), e.e + 1, r.rounding);
};
K.sine = K.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + he, a.rounding = 1, n = Rp(a, xu(a, n)), a.precision = e, a.rounding = r, pe(jr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ye = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = rr(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = tr((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ee(l, o, n + 2, 1)).times(0.5), rr(o.d).slice(0, n) === (r = rr(a.d)).slice(0, n))
      if (r = r.slice(n - 3, n + 1), r == "9999" || !t && r == "4999") {
        if (!t && (pe(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        n += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (pe(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return ye = !0, pe(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, pe(jr == 2 || jr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
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
  return r ? ++n : o.shift(), e.d = o, e.e = bo(o, n), ye ? pe(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, r) {
  return Xi(this, 2, e, r);
};
K.toDecimalPlaces = K.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (mr(e, 0, bn), r === void 0 ? r = a.rounding : mr(r, 0, 8), pe(n, e + n.e + 1, r));
};
K.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, !0) : (mr(e, 0, bn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = pe(new t(a), e + 1, r), n = Yr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
K.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Yr(t) : (mr(e, 0, bn), r === void 0 ? r = o.rounding : mr(r, 0, 8), a = pe(new o(t), e + t.e + 1, r), n = Yr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
K.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, b = m.d, y = m.constructor;
  if (!b)
    return new y(m);
  if (u = n = new y(1), a = s = new y(0), r = new y(a), o = r.e = Zu(b) - m.e - 1, l = o % he, r.d[0] = Je(10, l < 0 ? he + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error(mn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (ye = !1, i = new y(rr(b)), d = y.precision, y.precision = o = b.length * he * 2; v = Ee(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], y.precision = d, ye = !0, f;
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
  return e.d[0] ? (ye = !1, n = Ee(n, e, 0, r, 1).times(e), ye = !0, pe(n)) : (e.s = n.s, n = e), n;
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
    return pe(i, a, o);
  if (r = tr(e.e / he), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= Dp)
    return t = Ju(s, i, n, a), e.s < 0 ? new s(1).div(t) : pe(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Je(+i, u), r = n == 0 || !isFinite(n) ? tr(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (ye = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = di(e.times(ln(i, a + n)), a), t.d && (t = pe(t, a + 5, 1), Aa(t.d, a, o) && (r = a + 10, t = pe(di(e.times(ln(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = pe(t, a + 1, 0)))), t.s = l, ye = !0, s.rounding = o, pe(t, a, o));
};
K.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (mr(e, 1, bn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = pe(new t(a), e, r), n = Yr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
K.toSignificantDigits = K.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (mr(e, 1, bn), r === void 0 ? r = a.rounding : mr(r, 0, 8)), pe(new a(n), e, r);
};
K.toString = function() {
  var e = this, r = e.constructor, n = Yr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
K.truncated = K.trunc = function() {
  return pe(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
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
function mr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(mn + e);
}
function Aa(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += he, t = 0) : (t = Math.ceil((r + 1) / he), r %= he), o = Je(10, he - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Je(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Je(10, r - 3) - 1, l;
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
function zp(e, r) {
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
    var u, d, v, f, m, b, y, p, w, O, P, S, I, V, N, g, k, Y, M, F, X = a.constructor, A = a.s == t.s ? 1 : -1, z = a.d, B = t.d;
    if (!z || !z[0] || !B || !B[0])
      return new X(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (z ? B && z[0] == B[0] : !B) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          z && z[0] == 0 || !B ? A * 0 : A / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Nr, m = he, d = tr(a.e / m) - tr(t.e / m)), M = B.length, k = z.length, w = new X(A), O = w.d = [], v = 0; B[v] == (z[v] || 0); v++)
      ;
    if (B[v] > (z[v] || 0) && d--, o == null ? (V = o = X.precision, l = X.rounding) : i ? V = o + (a.e - t.e) + 1 : V = o, V < 0)
      O.push(1), b = !0;
    else {
      if (V = V / m + 2 | 0, v = 0, M == 1) {
        for (f = 0, B = B[0], V++; (v < k || f) && V--; v++)
          N = f * s + (z[v] || 0), O[v] = N / B | 0, f = N % B | 0;
        b = f || v < k;
      } else {
        for (f = s / (B[0] + 1) | 0, f > 1 && (B = e(B, f, s), z = e(z, f, s), M = B.length, k = z.length), g = M, P = z.slice(0, M), S = P.length; S < M; )
          P[S++] = 0;
        F = B.slice(), F.unshift(0), Y = B[0], B[1] >= s / 2 && ++Y;
        do
          f = 0, u = r(B, P, M, S), u < 0 ? (I = P[0], M != S && (I = I * s + (P[1] || 0)), f = I / Y | 0, f > 1 ? (f >= s && (f = s - 1), y = e(B, f, s), p = y.length, S = P.length, u = r(y, P, p, S), u == 1 && (f--, n(y, M < p ? F : B, p, s))) : (f == 0 && (u = f = 1), y = B.slice()), p = y.length, p < S && y.unshift(0), n(P, y, S, s), u == -1 && (S = P.length, u = r(B, P, M, S), u < 1 && (f++, n(P, M < S ? F : B, S, s))), S = P.length) : u === 0 && (f++, P = [0]), O[v++] = f, u && P[0] ? P[S++] = z[g] || 0 : (P = [z[g]], S = 1);
        while ((g++ < k || P[0] !== void 0) && V--);
        b = P[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      w.e = d, Wu = b;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, pe(w, i ? o + w.e + 1 : o, l, b);
    }
    return w;
  };
}();
function pe(e, r, n, a) {
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
    return _u(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + xr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + xr(-t - 1) + o, n && (a = n - l) > 0 && (o += xr(a))) : t >= l ? (o += xr(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + xr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += xr(a))), o;
}
function bo(e, r) {
  var n = e[0];
  for (r *= he; n >= 10; n /= 10)
    r++;
  return r;
}
function ao(e, r, n) {
  if (r > Ap)
    throw ye = !0, n && (e.precision = n), Error(Gu);
  return pe(new e(ro), r, 1, !0);
}
function Er(e, r, n) {
  if (r > ui)
    throw Error(Gu);
  return pe(new e(no), r, n, !0);
}
function Zu(e) {
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
function Ju(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / he + 4);
  for (ye = !1; ; ) {
    if (n % 2 && (o = o.times(r), Bl(o.d, l) && (t = !0)), n = tr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Bl(r.d, l);
  }
  return ye = !0, o;
}
function Ml(e) {
  return e.d[e.d.length - 1] & 1;
}
function Qu(e, r, n) {
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
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, b = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (ye = !1, s = b) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Je(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = pe(o.times(e), s, 1), n = n.times(++d), i = l.plus(Ee(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = pe(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && Aa(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return pe(l, f.precision = b, m, ye = !0);
      else
        return f.precision = b, l;
    }
    l = i;
  }
}
function ln(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, b = 10, y = e, p = y.d, w = y.constructor, O = w.rounding, P = w.precision;
  if (y.s < 0 || !p || !p[0] || !y.e && p[0] == 1 && p.length == 1)
    return new w(p && !p[0] ? -1 / 0 : y.s != 1 ? NaN : p ? 0 : y);
  if (r == null ? (ye = !1, d = P) : d = r, w.precision = d += b, n = rr(p), a = n.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      y = y.times(e), n = rr(y.d), a = n.charAt(0), m++;
    o = y.e, a > 1 ? (y = new w("0." + n), o++) : y = new w(a + "." + n.slice(1));
  } else
    return u = ao(w, d + 2, P).times(o + ""), y = ln(new w(a + "." + n.slice(1)), d - b).plus(u), w.precision = P, r == null ? pe(y, P, O, ye = !0) : y;
  for (v = y, s = l = y = Ee(y.minus(1), y.plus(1), d, 1), f = pe(y.times(y), d, 1), t = 3; ; ) {
    if (l = pe(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(ao(w, d + 2, P).times(o + ""))), s = Ee(s, new w(m), d, 1), r == null)
        if (Aa(s.d, d - b, O, i))
          w.precision = d += b, u = l = y = Ee(v.minus(1), v.plus(1), d, 1), f = pe(y.times(y), d, 1), t = i = 1;
        else
          return pe(s, w.precision = P, O, ye = !0);
      else
        return w.precision = P, s;
    s = u, t += 2;
  }
}
function _u(e) {
  return String(e.s * e.s / 0);
}
function vi(e, r) {
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
function Lp(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Ku.test(r))
      return vi(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Ep.test(r))
    n = 16, r = r.toLowerCase();
  else if (Bp.test(r))
    n = 2;
  else if (Np.test(r))
    n = 8;
  else
    throw Error(mn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Ju(a, new a(n), o, o * 2)), u = Gt(r, n, Nr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = bo(u, d), e.d = u, ye = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Je(2, s) : sn.pow(2, s))), ye = !0, e);
}
function Rp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Gn(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / wo(5, n)), r = Gn(e, 2, r, r);
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
function wo(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function xu(e, r) {
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
  var t, o, l, i, s, u, d, v, f, m = e.constructor, b = n !== void 0;
  if (b ? (mr(n, 1, bn), a === void 0 ? a = m.rounding : mr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = _u(e);
  else {
    for (d = Yr(e), l = d.indexOf("."), b ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Gt(Yr(f), 10, t), f.e = f.d.length), v = Gt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = b ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, n, a, 0, t), v = e.d, o = e.e, u = Wu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += li.charAt(v[l]);
      if (b) {
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
function Up(e) {
  return new this(e).abs();
}
function Yp(e) {
  return new this(e).acos();
}
function Hp(e) {
  return new this(e).acosh();
}
function Fp(e, r) {
  return new this(e).plus(r);
}
function jp(e) {
  return new this(e).asin();
}
function Wp(e) {
  return new this(e).asinh();
}
function Gp(e) {
  return new this(e).atan();
}
function qp(e) {
  return new this(e).atanh();
}
function Xp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Er(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Er(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Er(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Ee(e, r, o, 1)), r = Er(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Ee(e, r, o, 1)), n;
}
function Kp(e) {
  return new this(e).cbrt();
}
function Zp(e) {
  return pe(e = new this(e), e.e + 1, 2);
}
function Jp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Qp(e) {
  if (!e || typeof e != "object")
    throw Error(yo + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    bn,
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
      if (tr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(mn + n + ": " + a);
  if (n = "crypto", t && (this[n] = si[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(qu);
      else
        this[n] = !1;
    else
      throw Error(mn + n + ": " + a);
  return this;
}
function _p(e) {
  return new this(e).cos();
}
function xp(e) {
  return new this(e).cosh();
}
function ed(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, El(o)) {
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
      return vi(u, o.toString());
    } else if (s !== "string")
      throw Error(mn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Ku.test(o) ? vi(u, o) : Lp(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Qp, t.clone = ed, t.isDecimal = El, t.abs = Up, t.acos = Yp, t.acosh = Hp, t.add = Fp, t.asin = jp, t.asinh = Wp, t.atan = Gp, t.atanh = qp, t.atan2 = Xp, t.cbrt = Kp, t.ceil = Zp, t.clamp = Jp, t.cos = _p, t.cosh = xp, t.div = eh, t.exp = rh, t.floor = nh, t.hypot = ah, t.ln = th, t.log = oh, t.log10 = lh, t.log2 = ih, t.max = sh, t.min = uh, t.mod = dh, t.mul = vh, t.pow = fh, t.random = ch, t.round = mh, t.sign = ph, t.sin = hh, t.sinh = gh, t.sqrt = yh, t.sub = bh, t.sum = wh, t.tan = Ch, t.tanh = Sh, t.trunc = kh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function eh(e, r) {
  return new this(e).div(r);
}
function rh(e) {
  return new this(e).exp();
}
function nh(e) {
  return pe(e = new this(e), e.e + 1, 3);
}
function ah() {
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
function El(e) {
  return e instanceof sn || e && e.toStringTag === Xu || !1;
}
function th(e) {
  return new this(e).ln();
}
function oh(e, r) {
  return new this(e).log(r);
}
function ih(e) {
  return new this(e).log(2);
}
function lh(e) {
  return new this(e).log(10);
}
function sh() {
  return Qu(this, arguments, "lt");
}
function uh() {
  return Qu(this, arguments, "gt");
}
function dh(e, r) {
  return new this(e).mod(r);
}
function vh(e, r) {
  return new this(e).mul(r);
}
function fh(e, r) {
  return new this(e).pow(r);
}
function ch(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : mr(e, 1, bn), a = Math.ceil(e / he), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = r[o], t >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); o < a; )
        t = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(qu);
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
function mh(e) {
  return pe(e = new this(e), e.e + 1, this.rounding);
}
function ph(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function hh(e) {
  return new this(e).sin();
}
function gh(e) {
  return new this(e).sinh();
}
function yh(e) {
  return new this(e).sqrt();
}
function bh(e, r) {
  return new this(e).sub(r);
}
function wh() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (ye = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return ye = !0, pe(n, this.precision, this.rounding);
}
function Ch(e) {
  return new this(e).tan();
}
function Sh(e) {
  return new this(e).tanh();
}
function kh(e) {
  return pe(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var sn = K.constructor = ed(si);
ro = new sn(ro);
no = new sn(no);
var $h = {
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
  n: Th,
  classes: Ph
} = te("counter"), Nl = 100, Dl = 600, Oh = ["inputmode", "readonly", "disabled"];
function Vh(e, r) {
  var n = se("var-icon"), a = se("var-button"), t = se("var-form-details");
  return h(), T(
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
      }, null, 46, Oh), [[ef, e.inputValue]]), _(a, {
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
var rd = ne({
  name: "VarCounter",
  components: {
    VarButton: vr,
    VarIcon: Ne,
    VarFormDetails: ar
  },
  directives: {
    Ripple: Ke
  },
  inheritAttrs: !1,
  props: $h,
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
    } = Or(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, b = () => l(e.rules, e.modelValue), y = (B) => {
      ze(() => {
        var {
          validateTrigger: D,
          rules: ae,
          modelValue: H
        } = e;
        o(D, B, ae, H);
      });
    }, p = () => {
      var {
        min: B
      } = e;
      C(e["onUpdate:modelValue"], B != null ? R(B) : 0), i();
    }, w = {
      reset: p,
      validate: b,
      resetValidation: i
    }, O = L(() => {
      var {
        max: B,
        modelValue: D
      } = e;
      return B != null && R(D) >= R(B);
    }), P = L(() => {
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
      D ? C(ae, R(G), z) : A(G), y("onInputChange");
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
      if (!(u != null && u.value || s != null && s.value || B || D || ae || !H) && !P.value) {
        var oe = new sn(R(Z)).minus(new sn(R(x))).toString(), ce = S(oe), ke = R(ce);
        C(J, ke), G ? C(Q, ke, z) : (A(ce), y("onDecrement"));
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
      if (!(u != null && u.value || s != null && s.value || B || D || ae || !H) && !O.value) {
        var oe = new sn(R(Z)).plus(new sn(R(x))).toString(), ce = S(oe), ke = R(ce);
        C(J, ke), G ? C(Q, ke, z) : (A(ce), y("onIncrement"));
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
      A(S(String(B))), y("onLazyChange");
    };
    return C(n, w), de(() => e.modelValue, (B) => {
      A(S(String(B))), C(e.onChange, R(B));
    }), A(S(String(e.modelValue))), {
      n: Th,
      classes: Ph,
      formatElevation: pr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: P,
      validate: b,
      reset: p,
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
rd.render = Vh;
const za = rd;
ie(za);
var Uk = za, nd = 60, ad = nd * 60, td = ad * 24, Ih = td * 7, qn = 1e3, Eo = nd * qn, Al = ad * qn, Mh = td * qn, Bh = Ih * qn, Ki = "millisecond", zn = "second", Ln = "minute", Rn = "hour", en = "day", qt = "week", Br = "month", od = "quarter", rn = "year", Un = "date", Eh = "YYYY-MM-DDTHH:mm:ssZ", zl = "Invalid Date", Nh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Dh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Ah = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var fi = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, zh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + fi(t, 2, "0") + ":" + fi(o, 2, "0");
}, Lh = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Br), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Br);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, Rh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, Uh = function(r) {
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
    Q: od
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Yh = function(r) {
  return r === void 0;
};
const Hh = {
  s: fi,
  z: zh,
  m: Lh,
  a: Rh,
  p: Uh,
  u: Yh
};
var da = "en", Sn = {};
Sn[da] = Ah;
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
}, Fh = function(r, n) {
  return fe(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Be = Hh;
Be.l = to;
Be.i = Zi;
Be.w = Fh;
var jh = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Be.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(Nh);
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
    this.$d = jh(a), this.$x = a.x || {}, this.init();
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
    var o = this, l = Be.u(t) ? !0 : t, i = Be.p(a), s = function(w, O) {
      var P = Be.w(o.$u ? Date.UTC(o.$y, O, w) : new Date(o.$y, O, w), o);
      return l ? P : P.endOf(en);
    }, u = function(w, O) {
      var P = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Be.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? P : S).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case rn:
        return l ? s(1, 0) : s(31, 11);
      case Br:
        return l ? s(1, v) : s(0, v + 1);
      case qt: {
        var b = this.$locale().weekStart || 0, y = (d < b ? d + 7 : d) - b;
        return s(l ? f - y : f + (6 - y), v);
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
    var l = a || Eh, i = Be.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, b = function(P, S, I, V) {
      return P && (P[S] || P(t, l)) || I[S].slice(0, V);
    }, y = function(P) {
      return Be.s(s % 12 || 12, P, "0");
    }, p = m || function(O, P, S) {
      var I = O < 12 ? "AM" : "PM";
      return S ? I.toLowerCase() : I;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Be.s(d + 1, 2, "0"),
      MMM: b(o.monthsShort, d, f, 3),
      MMMM: b(f, d),
      D: this.$D,
      DD: Be.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: b(o.weekdaysMin, this.$W, v, 2),
      ddd: b(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Be.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: p(s, u, !0),
      A: p(s, u, !1),
      m: String(u),
      mm: Be.s(u, 2, "0"),
      s: String(this.$s),
      ss: Be.s(this.$s, 2, "0"),
      SSS: Be.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(Dh, function(O, P) {
      return P || w[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Be.p(t), s = fe(a), u = (s.utcOffset() - this.utcOffset()) * Eo, d = this - s, v = Be.m(this, s);
    return v = (l = {}, l[rn] = v / 12, l[Br] = v, l[od] = v / 3, l[qt] = (d - u) / Bh, l[en] = (d - u) / Mh, l[Rn] = d / Al, l[Ln] = d / Eo, l[zn] = d / qn, l)[i] || d, o ? v : Be.a(v);
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
}(), id = Co.prototype;
fe.prototype = id;
[["$ms", Ki], ["$s", zn], ["$m", Ln], ["$H", Rn], ["$W", en], ["$M", Br], ["$y", rn], ["$D", Un]].forEach(function(e) {
  id[e[1]] = function(r) {
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
const ld = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, sd = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Wh(e) {
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
}], Gh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Wh
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
  n: qh
} = te("picker-header");
function Xh(e, r) {
  var n = se("var-icon"), a = se("var-button");
  return h(), T(
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
        default: me(() => [(h(), T(
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
var ud = ne({
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
      n: qh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
ud.render = Xh;
const dd = ud;
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
fe.extend(ld);
fe.extend(sd);
var {
  n: Rt,
  classes: Kh
} = te("month-picker"), {
  n: Ut
} = te("date-picker");
function Zh(e, r) {
  var n = se("panel-header"), a = se("var-button");
  return h(), T(
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
        default: me(() => [(h(), T("ul", {
          key: e.panelKey
        }, [(h(!0), T(
          Me,
          null,
          We(e.MONTH_LIST, (t) => (h(), T("li", {
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
var vd = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: dd
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
    }), u = L(() => e.choose.chooseYear === e.preview.previewYear), d = L(() => e.preview.previewYear === a), v = (O) => {
      var P, S;
      return (P = (S = _e.value.datePickerMonthDict) == null ? void 0 : S[O].abbr) != null ? P : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: P
        },
        componentProps: {
          min: S,
          max: I
        }
      } = e, V = !0, N = !0, g = P + "-" + O;
      return I && (V = fe(g).isSameOrBefore(fe(I), "month")), S && (N = fe(g).isSameOrAfter(fe(S), "month")), V && N;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: P,
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
        var g = fe(O).isSameOrBefore(fe(I[1]), "month"), k = fe(O).isSameOrAfter(fe(I[0]), "month");
        return g && k;
      }
      return V === "month" ? P.includes(O) : S.some((Y) => Y.includes(O));
    }, b = (O) => {
      var {
        choose: {
          chooseMonth: P
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
      } = e, k = S + "-" + O, Y = () => g || N ? m(k) : (P == null ? void 0 : P.index) === O && u.value, M = () => f(O) ? I ? !I(k) : !1 : !0, F = M(), X = () => F ? !0 : g || N ? !m(k) : !u.value || (P == null ? void 0 : P.index) !== O, A = () => d.value && t === O && e.componentProps.showCurrent ? (g || N || u.value) && F ? !0 : g || N ? !m(k) : u.value ? (P == null ? void 0 : P.index) !== t : !0 : !1, z = () => F ? "" : A() ? V ?? "" : Y() ? "" : Ut() + "-color-cover", B = z().startsWith(Ut());
      return {
        outline: A(),
        text: X(),
        color: X() ? "" : V,
        textColor: B ? "" : z(),
        [Ut() + "-color-cover"]: B,
        class: Kh(Rt("button"), [F, Rt("button--disabled")]),
        disabled: F
      };
    }, y = (O, P) => {
      var S = P.currentTarget;
      S.classList.contains(Rt("button--disabled")) || n("choose-month", O);
    }, p = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, w = (O) => {
      i.value.checkDate(O);
    };
    return de(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: P,
          max: S
        }
      } = e;
      S && (s.right = !fe("" + (R(O) + 1)).isSameOrBefore(fe(S), "year")), P && (s.left = !fe("" + (R(O) - 1)).isSameOrAfter(fe(P), "year"));
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
      buttonProps: b,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: p
    };
  }
});
vd.render = Zh;
const Jh = vd;
var {
  n: Ll,
  classes: Qh
} = te("year-picker"), _h = ["onClick"];
function xh(e, r) {
  return h(), T(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), T(
      Me,
      null,
      We(e.yearList, (n) => (h(), T("li", {
        key: n,
        class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
        style: q({
          color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(n)
      }, le(n), 15, _h))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var fd = ne({
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
      for (var b = u[0]; b >= u[1]; b--)
        o.push(b);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return or(() => {
      var o = document.querySelector("." + Ll("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Ll,
      classes: Qh,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
fd.render = xh;
const eg = fd;
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
fe.extend(ld);
fe.extend(sd);
var {
  n: Dn,
  classes: rg
} = te("day-picker"), {
  n: Yt
} = te("date-picker");
function ng(e, r) {
  var n = se("panel-header"), a = se("var-button");
  return h(), T(
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
        default: me(() => [(h(), T("div", {
          key: e.panelKey
        }, [E(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(h(!0), T(
            Me,
            null,
            We(e.sortWeekList, (t) => (h(), T(
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
          [(h(!0), T(
            Me,
            null,
            We(e.days, (t, o) => (h(), T("li", {
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
var cd = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: vr,
    PanelHeader: dd
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
    }), b = (g) => {
      var k, Y;
      return (k = (Y = _e.value.datePickerWeekDict) == null ? void 0 : Y[g].abbr) != null ? k : "";
    }, y = (g) => g > 0 ? g : "", p = () => {
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
    }, O = (g) => {
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
    }, P = (g) => {
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
      } = e, B = Y + "-" + M.index + "-" + g, D = () => z || A ? P(B) : R(k) === g && f.value, ae = () => O(g) ? F ? !F(B) : !1 : !0, H = ae(), G = () => H ? !0 : z || A ? !P(B) : !f.value || R(k) !== g, x = () => v.value && R(o) === g && e.componentProps.showCurrent ? (z || A || f.value) && H ? !0 : z || A ? !P(B) : f.value ? k !== o : !0 : !1, Z = () => H ? "" : x() ? X ?? "" : D() ? "" : Yt() + "-color-cover", J = Z().startsWith(Yt());
      return {
        text: G(),
        outline: x(),
        textColor: J ? "" : Z(),
        [Yt() + "-color-cover"]: J,
        class: rg(Dn("button"), Dn("button--usable"), [H, Dn("button--disabled")]),
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
    return or(() => {
      p(), w();
    }), de(() => e.preview, () => {
      p(), w();
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
      filterDay: y,
      getDayAbbr: b,
      checkDate: I,
      chooseDay: V,
      buttonProps: S
    };
  }
});
cd.render = ng;
const ag = cd;
var {
  n: tg,
  classes: og
} = te("date-picker");
function ig(e, r) {
  var n = se("year-picker-panel"), a = se("month-picker-panel"), t = se("day-picker-panel");
  return h(), T(
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
            return [e.type === "month" ? (h(), T("div", {
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
            )])])) : (h(), T("div", {
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
            )]) : j(e.$slots, "date", Pt(De({
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
        default: me(() => [e.getPanelType === "year" ? (h(), Ce(n, {
          key: 0,
          "component-props": e.componentProps,
          preview: e.previewYear,
          onChooseYear: e.getChooseYear
        }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (h(), Ce(a, {
          key: 1,
          ref: "monthPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "click-year": () => e.clickEl("year"),
          "component-props": e.componentProps,
          onChooseMonth: e.getChooseMonth,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (h(), Ce(t, {
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
var md = ne({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Jh,
    YearPickerPanel: eg,
    DayPickerPanel: ag
  },
  props: Gh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = fe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Xt.find((ve) => ve.index === i), u = $(!1), d = $(!1), v = $(!0), f = $(), m = $(), b = $(), y = $(s), p = $(l), w = $(!1), O = $([]), P = $([]), S = $([]), I = $([]), V = $(null), N = $(null), g = Ye({
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
      chooseDay: b.value,
      chooseMonths: O.value,
      chooseDays: P.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: I.value
    })), Y = L(() => ({
      previewMonth: y.value,
      previewYear: p.value
    })), M = L(() => {
      var {
        multiple: ve,
        range: Se
      } = e;
      if (Se)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var ge = "";
      if (f.value) {
        var Pe, Oe;
        ge = (Pe = (Oe = _e.value.datePickerMonthDict) == null ? void 0 : Oe[f.value.index].name) != null ? Pe : "";
      }
      return ve ? "" + O.value.length + _e.value.datePickerSelected : ge;
    }), F = L(() => {
      var ve, Se, ge, Pe, {
        multiple: Oe,
        range: je
      } = e;
      if (je) {
        var sr = I.value.map((Io) => fe(Io).format("YYYY-MM-DD"));
        return sr.length ? sr[0] + " ~ " + sr[1] : "";
      }
      if (Oe)
        return "" + P.value.length + _e.value.datePickerSelected;
      if (!m.value || !f.value || !b.value)
        return "";
      var Cr = fe(m.value + "-" + f.value.index + "-" + b.value).day(), Nn = sa.find((Io) => Io.index === "" + Cr), ll = (ve = (Se = _e.value.datePickerWeekDict) == null ? void 0 : Se[Nn.index].name) != null ? ve : "", qv = (ge = (Pe = _e.value.datePickerMonthDict) == null ? void 0 : Pe[f.value.index].name) != null ? ge : "", Xv = kn(b.value, 2, "0");
      return _e.value.lang === "zh-CN" ? f.value.index + "-" + Xv + " " + ll.slice(0, 3) : ll.slice(0, 3) + ", " + qv.slice(0, 3) + " " + b.value;
    }), X = L(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), A = L(() => !e.touchable || ["", "year"].includes(X.value)), z = L(() => {
      var ve, Se, ge, Pe, Oe = fe(m.value + "-" + ((ve = f.value) == null ? void 0 : ve.index) + "-" + b.value).day(), je = b.value ? kn(b.value, 2, "0") : "";
      return {
        week: "" + Oe,
        year: (Se = m.value) != null ? Se : "",
        month: (ge = (Pe = f.value) == null ? void 0 : Pe.index) != null ? ge : "",
        date: je
      };
    }), B = L(() => k.value.chooseRangeDay.map((ve) => fe(ve).format("YYYY-MM-DD"))), D = L(() => m.value === p.value), ae = L(() => {
      var ve;
      return ((ve = f.value) == null ? void 0 : ve.index) === y.value.index;
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
        } = ve.touches[0], Pe = Se - r, Oe = ge - n;
        t = x(Math.abs(Pe), Math.abs(Oe)), a = Pe > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(A.value || t !== "x")) {
        var ve = X.value === "month" ? V : N;
        fo(() => {
          ve.value.forwardRef(a), qe();
        });
      }
    }, Q = (ve, Se) => {
      var ge = Se === "month" ? S : I;
      if (ge.value = v.value ? [ve, ve] : [ge.value[0], ve], v.value = !v.value, v.value) {
        var Pe = fe(ge.value[0]).isAfter(ge.value[1]), Oe = Pe ? [ge.value[1], ge.value[0]] : [...ge.value];
        C(e["onUpdate:modelValue"], Oe), C(e.onChange, Oe);
      }
    }, oe = (ve, Se) => {
      var ge = Se === "month" ? O : P, Pe = Se === "month" ? "YYYY-MM" : "YYYY-MM-DD", Oe = ge.value.map((sr) => fe(sr).format(Pe)), je = Oe.findIndex((sr) => sr === ve);
      je === -1 ? Oe.push(ve) : Oe.splice(je, 1), C(e["onUpdate:modelValue"], Oe), C(e.onChange, Oe);
    }, ce = (ve, Se) => !m.value || !f.value ? !1 : D.value ? ve === "month" ? Se.index < f.value.index : ae.value ? Se < R(b.value) : f.value.index > y.value.index : m.value > p.value, ke = (ve) => {
      var {
        readonly: Se,
        range: ge,
        multiple: Pe,
        onChange: Oe,
        "onUpdate:modelValue": je
      } = e;
      if (!(ve < 0 || Se)) {
        w.value = ce("day", ve);
        var sr = p.value + "-" + y.value.index + "-" + ve, Cr = fe(sr).format("YYYY-MM-DD");
        ge ? Q(Cr, "day") : Pe ? oe(Cr, "day") : (C(je, Cr), C(Oe, Cr));
      }
    }, Ie = (ve) => {
      var {
        type: Se,
        readonly: ge,
        range: Pe,
        multiple: Oe,
        onChange: je,
        onPreview: sr,
        "onUpdate:modelValue": Cr
      } = e;
      if (w.value = ce("month", ve), Se === "month" && !ge) {
        var Nn = p.value + "-" + ve.index;
        Pe ? Q(Nn, "month") : Oe ? oe(Nn, "month") : (C(Cr, Nn), C(je, Nn));
      } else
        y.value = ve, C(sr, R(p.value), R(y.value.index));
      d.value = !1;
    }, W = (ve) => {
      p.value = "" + ve, u.value = !1, d.value = !0, C(e.onPreview, R(p.value), R(y.value.index));
    }, re = (ve, Se) => {
      var ge = Se === "prev" ? -1 : 1;
      if (ve === "year")
        p.value = "" + (R(p.value) + ge);
      else {
        var Pe = R(y.value.index) + ge;
        Pe < 1 && (p.value = "" + (R(p.value) - 1), Pe = 12), Pe > 12 && (p.value = "" + (R(p.value) + 1), Pe = 1), y.value = Xt.find((Oe) => R(Oe.index) === Pe);
      }
      C(e.onPreview, R(p.value), R(y.value.index));
    }, ue = () => (e.multiple || e.range) && !Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, be = (ve) => Ve(ve) ? !1 : ve === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ue = (ve, Se) => {
      var ge = Se === "month" ? S : I, Pe = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Oe = ve.map((Cr) => fe(Cr).format(Pe)).slice(0, 2), je = ge.value.some((Cr) => be(Cr));
      if (!je) {
        ge.value = Oe;
        var sr = fe(ge.value[0]).isAfter(ge.value[1]);
        ge.value.length === 2 && sr && (ge.value = [ge.value[1], ge.value[0]]);
      }
    }, Le = (ve, Se) => {
      var ge = Se === "month" ? O : P, Pe = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Oe = Array.from(new Set(ve.map((je) => fe(je).format(Pe))));
      ge.value = Oe.filter((je) => je !== "Invalid Date");
    }, He = (ve) => {
      var Se = fe(ve).format("YYYY-MM-D");
      if (!be(Se)) {
        var [ge, Pe, Oe] = Se.split("-"), je = Xt.find((sr) => sr.index === Pe);
        f.value = je, m.value = ge, b.value = Oe, y.value = je, p.value = ge;
      }
    }, qe = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return de(() => e.modelValue, (ve) => {
      if (!(!ue() || be(ve) || !ve))
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
    }), de(X, qe), {
      n: tg,
      classes: og,
      monthPanelEl: V,
      dayPanelEl: N,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: b,
      previewYear: p,
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
      formatElevation: pr
    };
  }
});
md.render = ig;
const La = md;
ie(La);
var Yk = La;
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
function lg(e) {
  return ["left", "center", "right"].includes(e);
}
var sg = pi({
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
    validator: lg
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
  n: ug,
  classes: dg
} = te("dialog");
function vg(e, r) {
  var n = se("var-button"), a = se("var-popup");
  return h(), Ce(a, {
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
        style: hi({
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
        [e.cancelButton ? (h(), Ce(n, {
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
        }, 8, ["class", "text-color", "color", "onClick"])) : ee("v-if", !0), e.confirmButton ? (h(), Ce(n, {
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
var pd = ne({
  name: "VarDialog",
  components: {
    VarPopup: Ur,
    VarButton: vr
  },
  inheritAttrs: !1,
  props: sg,
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
      n: ug,
      classes: dg,
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
pd.render = vg;
const Et = pd;
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
function fg(e) {
  return e === void 0 && (e = {}), Ge(e) ? oo({}, io, {
    message: e
  }) : oo({}, io, e);
}
function Kr(e) {
  return aa() ? new Promise((r) => {
    Kr.close();
    var n = fg(e), a = Ye(n);
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
var Hk = Et, cg = {
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
  n: mg,
  classes: pg
} = te("divider");
function hg(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [e.vertical ? ee("v-if", !0) : j(e.$slots, "default", {
      key: 0
    }, () => [e.description ? (h(), T(
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
var hd = ne({
  name: "VarDivider",
  props: cg,
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
    return or(() => {
      l();
    }), Tt(() => {
      l();
    }), {
      n: mg,
      classes: pg,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
hd.render = hg;
const Ra = hd;
ie(Ra);
var Fk = Ra, gg = {
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
function yg(e) {
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
  n: bg,
  classes: wg
} = te("drag");
function Cg(e, r) {
  return h(), Ce(Jr, {
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
var gd = ne({
  name: "VarDrag",
  inheritAttrs: !1,
  props: gg,
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
      moveTouch: b,
      endTouch: y,
      resetTouch: p
    } = Li(), {
      disabled: w
    } = oa(), O = null, P = (B) => {
      e.disabled || (O && window.clearTimeout(O), N(), m(B), u.value = !1);
    }, S = /* @__PURE__ */ function() {
      var B = yg(function* (D) {
        !d.value || e.disabled || (D.preventDefault(), s.value = !1, i.value = !0, u.value = !0, b(D), e.direction.includes("x") && (t.value += v.value), e.direction.includes("y") && (o.value += f.value), M());
      });
      return function(ae) {
        return B.apply(this, arguments);
      };
    }(), I = () => {
      e.disabled || (y(), s.value = !0, Y(), O = window.setTimeout(() => {
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
      s.value = !1, i.value = !1, u.value = !1, t.value = 0, o.value = 0, p();
    };
    return de(() => e.boundary, F), Ot(A), or(() => {
      F(), A();
    }), {
      drag: a,
      x: t,
      y: o,
      enableTransition: s,
      dragging: u,
      teleportDisabled: w,
      n: bg,
      classes: wg,
      getAttrs: X,
      handleTouchstart: P,
      handleTouchmove: S,
      handleTouchend: I,
      handleClick: V,
      resize: A,
      reset: z
    };
  }
});
gd.render = Cg;
const Xn = gd;
ie(Xn);
var jk = Xn, Sg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Kt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return Sg[r];
  });
}
var Wr = "top", pn = "bottom", $n = "right", un = "left", So = "auto", ko = [Wr, pn, $n, un], $o = "start", Ua = "end", kg = "clippingParents", yd = "viewport", ia = "popper", $g = "reference", Ul = /* @__PURE__ */ ko.reduce(function(e, r) {
  return e.concat([r + "-" + $o, r + "-" + Ua]);
}, []), bd = /* @__PURE__ */ [].concat(ko, [So]).reduce(function(e, r) {
  return e.concat([r, r + "-" + $o, r + "-" + Ua]);
}, []), Tg = "beforeRead", Pg = "read", Og = "afterRead", Vg = "beforeMain", Ig = "main", Mg = "afterMain", Bg = "beforeWrite", Eg = "write", Ng = "afterWrite", gi = [Tg, Pg, Og, Vg, Ig, Mg, Bg, Eg, Ng];
function Gr(e) {
  return e.split("-")[0];
}
var Dg = {
  start: "end",
  end: "start"
};
function Yl(e) {
  return e.replace(/start|end/g, function(r) {
    return Dg[r];
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
function yi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function wd() {
  return !/^((?!chrome|android).)*safari/i.test(yi());
}
function Zn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Kn(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Kn(a.height) / e.offsetHeight || 1);
  var l = Tn(e) ? Ir(e) : window, i = l.visualViewport, s = !wd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Ag(e, r) {
  var n = Ir(e), a = wn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = wd();
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
function zg(e) {
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
function Cd(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : kr(e) && xi(e) ? e : Cd(To(e));
}
function fa(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = Cd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Ir(a), l = t ? [o].concat(o.visualViewport || [], xi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(fa(To(l)))
  );
}
function Lg(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function Fl(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  zr(e).position === "fixed" ? null : e.offsetParent;
}
function Rg(e) {
  var r = /firefox/i.test(yi()), n = /Trident/i.test(yi());
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
  for (var r = Ir(e), n = Fl(e); n && Lg(n) && zr(n).position === "static"; )
    n = Fl(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && zr(n).position === "static") ? r : n || Rg(e) || r;
}
function Ug(e, r) {
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
function bi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Yg(e, r) {
  var n = Zn(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function jl(e, r, n) {
  return r === yd ? bi(Ag(e, n)) : Tn(r) ? Yg(r, n) : bi(zg(wn(e)));
}
function Hg(e) {
  var r = fa(To(e)), n = ["absolute", "fixed"].indexOf(zr(e).position) >= 0, a = n && kr(e) ? el(e) : e;
  return Tn(a) ? r.filter(function(t) {
    return Tn(t) && Ug(t, a) && Hr(t) !== "body";
  }) : [];
}
function Fg(e, r, n, a) {
  var t = r === "clippingParents" ? Hg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = jl(e, u, a);
    return s.top = va(d.top, s.top), s.right = Hl(d.right, s.right), s.bottom = Hl(d.bottom, s.bottom), s.left = va(d.left, s.left), s;
  }, jl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ya(e) {
  return e.split("-")[1];
}
function jg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Sd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Gr(a) : null, o = a ? Ya(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
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
  var u = t ? jg(t) : null;
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
function Wg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Gg(e) {
  return Object.assign({}, Wg(), e);
}
function qg(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function kd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? kg : i, u = n.rootBoundary, d = u === void 0 ? yd : u, v = n.elementContext, f = v === void 0 ? ia : v, m = n.altBoundary, b = m === void 0 ? !1 : m, y = n.padding, p = y === void 0 ? 0 : y, w = Gg(typeof p != "number" ? p : qg(p, ko)), O = f === ia ? $g : ia, P = e.rects.popper, S = e.elements[b ? O : f], I = Fg(Tn(S) ? S : S.contextElement || wn(e.elements.popper), s, d, l), V = Zn(e.elements.reference), N = Sd({
    reference: V,
    element: P,
    strategy: "absolute",
    placement: t
  }), g = bi(Object.assign({}, P, N)), k = f === ia ? g : V, Y = {
    top: I.top - k.top + w.top,
    bottom: k.bottom - I.bottom + w.bottom,
    left: I.left - k.left + w.left,
    right: k.right - I.right + w.right
  }, M = e.modifiersData.offset;
  if (f === ia && M) {
    var F = M[t];
    Object.keys(Y).forEach(function(X) {
      var A = [$n, pn].indexOf(X) >= 0 ? 1 : -1, z = [Wr, pn].indexOf(X) >= 0 ? "y" : "x";
      Y[X] += F[z] * A;
    });
  }
  return Y;
}
function Xg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? bd : s, d = Ya(a), v = d ? i ? Ul : Ul.filter(function(b) {
    return Ya(b) === d;
  }) : ko, f = v.filter(function(b) {
    return u.indexOf(b) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(b, y) {
    return b[y] = kd(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gr(y)], b;
  }, {});
  return Object.keys(m).sort(function(b, y) {
    return m[b] - m[y];
  });
}
function Kg(e) {
  if (Gr(e) === So)
    return [];
  var r = Kt(e);
  return [Yl(e), r, Yl(r)];
}
function Zg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, b = m === void 0 ? !0 : m, y = n.allowedAutoPlacements, p = r.options.placement, w = Gr(p), O = w === p, P = s || (O || !b ? [Kt(p)] : Kg(p)), S = [p].concat(P).reduce(function(Q, oe) {
      return Q.concat(Gr(oe) === So ? Xg(r, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: b,
        allowedAutoPlacements: y
      }) : oe);
    }, []), I = r.rects.reference, V = r.rects.popper, N = /* @__PURE__ */ new Map(), g = !0, k = S[0], Y = 0; Y < S.length; Y++) {
      var M = S[Y], F = Gr(M), X = Ya(M) === $o, A = [Wr, pn].indexOf(F) >= 0, z = A ? "width" : "height", B = kd(r, {
        placement: M,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), D = A ? X ? $n : un : X ? pn : Wr;
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
      for (var G = b ? 3 : 1, x = function(oe) {
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
const Jg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Zg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Qg(e, r, n) {
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
function _g(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = bd.reduce(function(d, v) {
    return d[v] = Qg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const xg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _g
};
var ey = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ry(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Kn(r * t) / t || 0,
    y: Kn(n * t) / t || 0
  };
}
function Wl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, b = l.y, y = b === void 0 ? 0 : b, p = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = p.x, y = p.y;
  var w = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), P = un, S = Wr, I = window;
  if (u) {
    var V = el(n), N = "clientHeight", g = "clientWidth";
    if (V === Ir(n) && (V = wn(n), zr(V).position !== "static" && i === "absolute" && (N = "scrollHeight", g = "scrollWidth")), V = V, t === Wr || (t === un || t === $n) && o === Ua) {
      S = pn;
      var k = v && V === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        V[N]
      );
      y -= k - a.height, y *= s ? 1 : -1;
    }
    if (t === un || (t === Wr || t === pn) && o === Ua) {
      P = $n;
      var Y = v && V === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        V[g]
      );
      m -= Y - a.width, m *= s ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: i
  }, u && ey), F = d === !0 ? ry({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = F.x, y = F.y, s) {
    var X;
    return Object.assign({}, M, (X = {}, X[S] = O ? "0" : "", X[P] = w ? "0" : "", X.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", X));
  }
  return Object.assign({}, M, (r = {}, r[S] = O ? y + "px" : "", r[P] = w ? m + "px" : "", r.transform = "", r));
}
function ny(e) {
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
const $d = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ny,
  data: {}
};
function ay(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ty(e) {
  return e === Ir(e) || !kr(e) ? Qi(e) : ay(e);
}
function oy(e) {
  var r = e.getBoundingClientRect(), n = Kn(r.width) / e.offsetWidth || 1, a = Kn(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function iy(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && oy(r), o = wn(r), l = Zn(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xi(o)) && (i = ty(r)), kr(r) ? (s = Zn(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = _i(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function ly(e) {
  var r = Zn(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function sy(e) {
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
function uy(e) {
  var r = sy(e);
  return gi.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function dy(e) {
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
var Cn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', vy = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Gl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function fy(e) {
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
        }) == null && console.error(_r(vy, String(r.name), a, a));
      });
    });
  });
}
function cy(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function my(e) {
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
var ql = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", py = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Xl = {
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
function hy(e) {
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
        var O = typeof w == "function" ? w(d.options) : w;
        y(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: Tn(i) ? fa(i) : i.contextElement ? fa(i.contextElement) : [],
          popper: fa(s)
        };
        var P = uy(my([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = P.filter(function(M) {
          return M.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = cy([].concat(P, d.options.modifiers), function(M) {
            var F = M.name;
            return F;
          });
          if (fy(S), Gr(d.options.placement) === So) {
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
        return b(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var w = d.elements, O = w.reference, P = w.popper;
          if (!Kl(O, P)) {
            process.env.NODE_ENV !== "production" && console.error(ql);
            return;
          }
          d.rects = {
            reference: iy(O, el(P), d.options.strategy === "fixed"),
            popper: ly(P)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
            return d.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var S = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(py);
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
      update: dy(function() {
        return new Promise(function(p) {
          m.forceUpdate(), p(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Kl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(ql), m;
    m.setOptions(u).then(function(p) {
      !f && u.onFirstUpdate && u.onFirstUpdate(p);
    });
    function b() {
      d.orderedModifiers.forEach(function(p) {
        var w = p.name, O = p.options, P = O === void 0 ? {} : O, S = p.effect;
        if (typeof S == "function") {
          var I = S({
            state: d,
            name: w,
            instance: m,
            options: P
          }), V = function() {
          };
          v.push(I || V);
        }
      });
    }
    function y() {
      v.forEach(function(p) {
        return p();
      }), v = [];
    }
    return m;
  };
}
var Ht = {
  passive: !0
};
function gy(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Ir(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Ht);
  }), i && s.addEventListener("resize", n.update, Ht), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Ht);
    }), i && s.removeEventListener("resize", n.update, Ht);
  };
}
const yy = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: gy,
  data: {}
};
function by(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = Sd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const wy = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: by,
  data: {}
};
function Cy(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !kr(o) || !Hr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Sy(e) {
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
const ky = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Cy,
  effect: Sy,
  requires: ["computeStyles"]
};
var $y = [yy, wy, $d, ky], Ty = /* @__PURE__ */ hy({
  defaultModifiers: $y
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
function Td(e) {
  var r = $(null), n = $(null), a = $({
    width: 0,
    height: 0
  }), t = ya(e, "show", {
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
  }, b = /* @__PURE__ */ function() {
    var k = Jl(function* () {
      e.trigger === "hover" && (i = !1, yield Dr(), !s && g());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), y = () => {
    e.closeOnClickReference && t.value ? g() : N();
  }, p = () => {
    g();
  }, w = (k) => {
    e.trigger === "click" && (p(), C(e.onClickOutside, k));
  }, O = () => {
    V(), C(e.onClosed);
  }, P = () => {
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
    } = P(), F = [ca({}, Jg, {
      enabled: t.value
    }), ca({}, xg, {
      options: {
        offset: [Y, M]
      }
    }), ca({}, $d, {
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
    l = Ty((k = I()) != null ? k : r.value, n.value, S());
  }), kt(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: y,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: p,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: b,
    handleClosed: O,
    resize: V,
    open: N,
    close: g
  };
}
function Py(e) {
  return ["click", "hover"].includes(e);
}
function Oy(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Vy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Iy(e) {
  return ["absolute", "fixed"].includes(e);
}
var My = {
  type: {
    type: String,
    default: "default",
    validator: Vy
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
    validator: Py
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Oy
  },
  strategy: {
    type: String,
    default: "absolute",
    validator: Iy
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
  n: By,
  classes: Ey
} = te("tooltip");
function Ny(e, r) {
  return h(), T(
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
    [j(e.$slots, "default"), (h(), Ce(Jr, {
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
var Pd = ne({
  name: "VarTooltip",
  props: My,
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
      open: b,
      // expose
      close: y,
      // expose
      resize: p
    } = Td(e);
    return {
      toSizeUnit: we,
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      n: By,
      classes: Ey,
      handleHostClick: i,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handleClosed: m,
      resize: p,
      open: b,
      close: y
    };
  }
});
Pd.render = Ny;
const Jn = Pd;
ie(Jn);
var Wk = Jn;
function Dy(e) {
  return ["click"].includes(e);
}
var Ay = {
  expandTrigger: {
    type: String,
    validator: Dy
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
  n: zy,
  classes: Ly
} = te("ellipsis"), Ry = {
  key: 0
};
function Uy(e, r) {
  var n = se("var-tooltip");
  return h(), Ce(
    n,
    Pt(uo(e.tooltip)),
    {
      content: me(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), T(
          "span",
          Ry,
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
var Od = ne({
  name: "VarEllipsis",
  components: {
    VarTooltip: Jn
  },
  props: Ay,
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
      n: zy,
      classes: Ly,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
Od.render = Uy;
const Ha = Od;
ie(Ha);
var Gk = Ha;
function Yy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function Hy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function Fy(e) {
  return ["click", "hover"].includes(e);
}
var jy = {
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
    validator: yu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: Yy
  },
  direction: {
    type: String,
    default: "top",
    validator: Hy
  },
  trigger: {
    type: String,
    default: "click",
    validator: Fy
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
  onClick: U(),
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:active": U()
};
function Wy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  classes: No,
  n: hr
} = te("fab");
const Fa = ne({
  name: "VarFab",
  inheritAttrs: !1,
  props: jy,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = ya(e, "active"), o = $(null), l = $(null), i = (v, f, m) => {
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
      class: hr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      elevation: e.elevation,
      round: !0
    }, {
      default: () => [_(Ne, {
        "var-fab-cover": !0,
        class: No([t.value, hr("trigger-active-icon"), hr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: hr("--trigger-icon-animation")
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
      var v, f, m = Ys((f = C(n.default)) != null ? f : []), b = Ei(e.drag) ? {} : e.drag;
      return _(Xn, De({
        ref: l,
        class: No(hr("--position-" + e.position), [!e.fixed, hr("--absolute")]),
        style: {
          top: we(e.top),
          bottom: we(e.bottom),
          left: we(e.left),
          right: we(e.right)
        },
        zIndex: e.zIndex,
        teleport: e.teleport,
        disabled: e.disabled || !e.drag || !e.fixed,
        direction: b.direction,
        attraction: b.attraction,
        boundary: b.boundary,
        onClick: (y) => i(y, !t.value, m.length)
      }, a), {
        default: () => [_("div", {
          class: No(hr(), hr("--direction-" + e.direction), [e.safeArea, hr("--safe-area")]),
          ref: o,
          onMouseleave: () => s(!1, m.length),
          onMouseenter: () => s(!0, m.length)
        }, [_(Fe, {
          name: hr("--active-transition")
        }, Wy(v = d()) ? v : {
          default: () => [v]
        }), _(Fe, {
          name: hr("--actions-transition-" + e.direction),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Te(_("div", {
            class: hr("actions"),
            onClick: (y) => y.stopPropagation()
          }, [m.map((y) => _("div", {
            class: hr("action")
          }, [y]))]), [[Rr, e.show && t.value && m.length]])]
        })])]
      });
    };
  }
});
ie(Fa);
var qk = Fa;
function Gy(e) {
  return ["start", "end"].includes(e);
}
var qy = {
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
    validator: Gy
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
function Xy(e) {
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
  n: Ky
} = te("form");
function Zy(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Vd = ne({
  name: "VarForm",
  props: qy,
  setup(e) {
    var r = L(() => e.disabled), n = L(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Qm(), o = (d) => {
      setTimeout(() => {
        var v = vn(d), f = v === window ? 0 : pl(v), m = pl(d) - f - Re(e.scrollToErrorOffsetY);
        ga(v, {
          top: m,
          animation: Yo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Xy(function* () {
        var v = yield Promise.all(a.map((p) => {
          var {
            validate: w
          } = p;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = of(v, (p) => p === !1, e.scrollToError), m = f > -1;
          if (m) {
            var b, y = (b = a[f].instance.proxy) == null ? void 0 : b.$el;
            o(y);
          }
          return !m;
        }
        return v.every((p) => p === !0);
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
      n: Ky,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
Vd.render = Zy;
const Pn = Vd;
Pn.useValidation = Or;
Pn.useForm = Vr;
ie(Pn);
var Xk = Pn;
function Jy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Qy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Jy,
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
  n: _y,
  classes: xy
} = te("image"), eb = ["alt", "title", "lazy-loading", "lazy-error"], rb = ["alt", "title", "src"];
function nb(e, r) {
  var n = Ae("lazy"), a = Ae("ripple");
  return Te((h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? Te((h(), T("img", {
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
    }, null, 46, eb)), [[n, e.src]]) : ee("v-if", !0), !e.lazy && !e.showErrorSlot ? (h(), T("img", {
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
    }, null, 46, rb)) : ee("v-if", !0), e.showErrorSlot ? j(e.$slots, "error", {
      key: 2
    }) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Id = ne({
  name: "VarImage",
  directives: {
    Lazy: wa,
    Ripple: Ke
  },
  props: Qy,
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
      n: _y,
      classes: xy,
      showErrorSlot: a,
      toSizeUnit: we,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
Id.render = nb;
const ja = Id;
ie(ja);
var Kk = ja, Md = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function ab() {
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
var Bd = {
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
var tb = 250, ob = 20, {
  n: ib,
  classes: lb
} = te("swipe"), sb = ["onClick"];
function ub(e, r) {
  return h(), T(
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
    }, () => [e.indicator && e.length ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), T(
        Me,
        null,
        We(e.length, (n, a) => (h(), T("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: q({
            background: e.indicatorColor
          }),
          key: n,
          onClick: (t) => e.to(a)
        }, null, 14, sb))),
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
var Ed = ne({
  name: "VarSwipe",
  props: Bd,
  setup(e) {
    var r = $(null), n = $(0), a = L(() => e.vertical), t = $(0), o = $(0), l = $(!1), i = $(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = ab(), {
      popup: v,
      bindPopup: f
    } = Nf(), {
      deltaX: m,
      deltaY: b,
      moveX: y,
      moveY: p,
      offsetX: w,
      offsetY: O,
      touching: P,
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
      var re = nr(W) ? W : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: ue
      } = e;
      return re <= -1 ? ue ? -1 : 0 : re >= d.value ? ue ? d.value : d.value - 1 : re;
    }, A = (W) => {
      var {
        loop: re
      } = e;
      return W === -1 ? re ? d.value - 1 : 0 : W === d.value ? re ? 0 : d.value - 1 : W;
    }, z = (W) => e.loop ? W < 0 ? d.value + W : W >= d.value ? W - d.value : W : dn(W, 0, d.value - 1), B = (W) => {
      var re = o.value >= n.value, ue = o.value <= -t.value, be = 0, Ue = -(t.value - n.value);
      l.value = !0, (re || ue) && (l.value = !0, o.value = ue ? be : Ue, M(0).setTranslate(0), M(d.value - 1).setTranslate(0)), fo(() => {
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
      if (!(!P.value || !re)) {
        N(W);
        var be = ue ? "vertical" : "horizontal";
        S.value === be && (W.preventDefault(), G(o.value + (ue ? p.value : y.value)));
      }
    }, J = () => {
      if (P.value) {
        var {
          vertical: W,
          onChange: re
        } = e;
        g();
        var ue = W ? b.value < 0 : m.value < 0, be = W ? O.value : w.value, Ue = performance.now() - I.value <= tb && be >= ob, Le = Ue ? X(ue ? i.value + 1 : i.value - 1) : X();
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
        } = e, be = i.value;
        i.value = z(be + 1), (W == null ? void 0 : W.event) !== !1 && C(ue, i.value), B(() => {
          if (be === d.value - 1 && re) {
            M(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          be !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, ce = (W) => {
      if (!(d.value <= 1)) {
        D();
        var {
          loop: re,
          onChange: ue
        } = e, be = i.value;
        i.value = z(be - 1), (W == null ? void 0 : W.event) !== !1 && C(ue, i.value), B(() => {
          if (be === 0 && re) {
            M(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          be !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, ke = (W, re) => {
      if (!(d.value <= 1 || W === i.value)) {
        W = W < 0 ? 0 : W, W = W >= d.value ? d.value : W;
        var ue = W > i.value ? oe : ce, be = Math.abs(W - i.value);
        Array.from({
          length: be
        }).forEach((Ue, Le) => {
          ue({
            event: Le === be - 1 ? re == null ? void 0 : re.event : !1
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
    }()), hn(Q), co(H), Ot(Q), {
      n: ib,
      classes: lb,
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
Ed.render = ub;
const On = Ed;
ie(On);
var Zk = On;
function db() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = ir(Md);
  return e || Pr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: vb
} = te("swipe-item");
function fb(e, r) {
  return h(), T(
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
var Nd = ne({
  name: "VarSwipeItem",
  setup() {
    var e = $(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = db(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: vb,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Nd.render = fb;
const Vn = Nd;
ie(Vn);
var Jk = Vn;
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
var cb = Ci({
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
}, xe(Bd, ["loop", "indicator", "onChange"]), xe(Vt, [
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
  classes: mb
} = te("image-preview"), Do = 12, rs = 200, pb = 350, ns = 200, hb = 500, gb = ["onTouchstart"], yb = ["src", "alt"];
function bb(e, r) {
  var n = se("var-swipe-item"), a = se("var-swipe"), t = se("var-icon"), o = se("var-popup");
  return h(), Ce(o, {
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
      default: me(() => [(h(!0), T(
        Me,
        null,
        We(e.images, (l, i) => (h(), Ce(n, {
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
          }, null, 10, yb)], 46, gb)]),
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
        }, () => [e.indicator && e.images.length > 1 ? (h(), T(
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
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), j(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), Ce(t, {
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
var Dd = ne({
  name: "VarImagePreview",
  components: {
    VarSwipe: On,
    VarSwipeItem: Vn,
    VarPopup: Ur,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: cb,
  setup(e) {
    var r = $(!1), n = $(1), a = $(0), t = $(0), o = $(void 0), l = $(void 0), i = $(!0), s = $(null), {
      moveX: u,
      moveY: d,
      distance: v,
      startTime: f,
      startTouch: m,
      moveTouch: b,
      endTouch: y
    } = Li(), p = {
      start: null,
      prev: null
    }, w = null, O = null, P = !1, S = L(() => {
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
      n.value = R(e.zoom), i.value = !1, p.prev = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, ns);
    }, N = () => {
      n.value = 1, a.value = 0, t.value = 0, i.value = !0, p.prev = null, o.value = void 0, l.value = void 0;
    }, g = (Z) => p.prev ? v.value <= Do && performance.now() - f.value <= rs && p.prev === Z : !1, k = (Z) => !Z || !p.start || !p.prev ? !1 : v.value <= Do && performance.now() - f.value < pb && (Z === p.start || Z.parentNode === p.start), Y = () => {
      y(), window.clearTimeout(O), P = !1, p.start = null;
    }, M = (Z) => {
      if (y(), window.clearTimeout(O), P) {
        P = !1;
        return;
      }
      var J = k(Z.target);
      w = window.setTimeout(() => {
        J && D(), p.start = null;
      }, rs);
    }, F = (Z, J) => {
      window.clearTimeout(w), window.clearTimeout(O);
      var Q = Z.currentTarget;
      if (p.start = Q, O = window.setTimeout(() => {
        P = !0, C(e.onLongPress, J);
      }, hb), g(Q)) {
        n.value > 1 ? N() : V();
        return;
      }
      m(Z), p.prev = Q;
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
      if (p.prev) {
        b(Z);
        var J = Z.currentTarget;
        if (v.value > Do && window.clearTimeout(O), n.value > 1) {
          var Q = A(J), oe = z(J);
          a.value = dn(a.value + u.value, -Q, Q), t.value = dn(t.value + d.value, -oe, oe);
        }
        p.prev = J;
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
      classes: mb,
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
Dd.render = bb;
const Nt = Dd;
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
var tn, pa = {};
function wb(e) {
  return e === void 0 && (e = {}), Ge(e) ? ma({}, pa, {
    images: [e]
  }) : Ve(e) ? ma({}, pa, {
    images: e
  }) : ma({}, pa, e);
}
function Lr(e) {
  if (aa()) {
    Lr.close();
    var r = wb(e), n = Ye(r);
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
  pa = e;
};
Lr.resetDefaultOptions = () => {
  pa = {};
};
Lr.Component = Nt;
ie(Nt);
ie(Nt, Lr);
var Qk = Nt, Zt = {
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
  n: Cb,
  classes: Sb
} = te("sticky");
function kb(e, r) {
  return h(), T(
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
var Ad = ne({
  name: "VarSticky",
  props: Zt,
  setup(e) {
    var r = $(null), n = $(null), a = $(!1), t = $("0px"), o = $("0px"), l = $("auto"), i = $("auto"), s = $("auto"), u = $("auto"), d = L(() => !e.disabled && e.cssMode), v = L(() => !e.disabled && !e.cssMode && a.value), f = L(() => Re(e.offsetTop)), m, b = () => {
      var {
        cssMode: P,
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
        return M <= f.value ? (P || (l.value = g.offsetWidth + "px", i.value = g.offsetHeight + "px", t.value = I + f.value + "px", o.value = Y + "px", s.value = N.offsetWidth + "px", u.value = N.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: M,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var P = b();
        P && C(e.onScroll, P.offsetTop, P.isFixed);
      }
    }, p = /* @__PURE__ */ function() {
      var P = ts(function* () {
        a.value = !1, yield yf(), b();
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var P = ts(function* () {
        yield Dr(), m = vn(r.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return de(() => e.disabled, p), or(w), co(O), Ot(p), fn(() => window, "scroll", y), {
      n: Cb,
      classes: Sb,
      resize: p,
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
Ad.render = kb;
const In = Ad;
ie(In);
var _k = In, zd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function $b() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = lr(zd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Tb() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(zd);
  return n || Pr("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Pb = {
  index: {
    type: [Number, String]
  }
}, {
  n: Ob,
  classes: Vb
} = te("index-anchor");
function Ib(e, r) {
  return h(), Ce(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
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
var Ld = ne({
  name: "VarIndexAnchor",
  components: {
    VarSticky: In
  },
  inheritAttrs: !1,
  props: Pb,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = Tb(), t = $(0), o = $(!1), l = L(() => e.index), i = $(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, b = (p) => {
      o.value = p;
    }, y = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: b
    };
    return a(y), {
      n: Ob,
      classes: Vb,
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
Ld.render = Ib;
const Wa = Ld;
ie(Wa);
var xk = Wa, Mb = {
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
  n: Bb,
  classes: Eb
} = te("index-bar"), Nb = ["onClick"];
function Db(e, r) {
  return h(), T(
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
      [(h(!0), T(
        Me,
        null,
        We(e.anchorNameList, (n) => (h(), T("li", {
          key: n,
          class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
          style: q({
            color: e.active === n && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: n,
            manualCall: !0
          })
        }, le(n), 15, Nb))),
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
var Rd = ne({
  name: "VarIndexBar",
  props: Mb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = $b(), t = $(""), o = $(null), l = $([]), i = $(), s = L(() => e.sticky), u = L(() => e.stickyCssMode || e.cssMode), d = L(() => Re(e.stickyOffsetTop)), v = L(() => e.zIndex), f = null, m = !1, b = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(b);
    var y = (N, g) => {
      var k = Ni(N) ? N.name.value : N;
      k === i.value || k === void 0 || (i.value = k, (g == null ? void 0 : g.event) !== !1 && C(e.onChange, k));
    }, p = () => {
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
      var N = ha(f), g = f === window ? document.body.scrollHeight : f.scrollHeight, k = p();
      n.forEach((Y, M) => {
        var F = Y.ownTop.value, X = N - F + d.value - k, A = M === n.length - 1 ? g : n[M + 1].ownTop.value - Y.ownTop.value;
        Y.setDisabled(!0), X >= 0 && X < A && t.value === "" && (Y.setDisabled(!1), y(Y));
      });
    }, O = /* @__PURE__ */ function() {
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
            var X = p(), A = F.ownTop.value - d.value + X, z = zi(f);
            t.value = k, y(k, M), yield ga(f, {
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
    }(), P = /* @__PURE__ */ function() {
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
      br(() => O({
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
    })), or(/* @__PURE__ */ Ft(function* () {
      yield P(), S();
    })), so(I), xn(() => {
      m = !0, I();
    }), hn(() => {
      !m || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: Bb,
      classes: Eb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: R,
      scrollTo: V,
      anchorClick: O
    };
  }
});
Rd.render = Db;
const Ga = Rd;
ie(Ga);
var e$ = Ga;
function Ab(e) {
  return ["small", "normal"].includes(e);
}
function zb(e) {
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
    validator: Ab
  },
  variant: {
    type: String,
    default: "standard",
    validator: zb
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
  classes: Lb
} = te("field-decorator"), Rb = ["for"];
function Ub(e, r) {
  var n = se("var-icon");
  return h(), T(
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
      ), e.placeholder && e.hint ? (h(), T("label", {
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
      )], 14, Rb)) : ee("v-if", !0), E(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (h(), Ce(n, {
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
    ), e.line ? (h(), T(
      Me,
      {
        key: 0
      },
      [e.variant === "outlined" ? (h(), T(
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
          [e.placeholder && e.hint ? (h(), Ce(Jr, {
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
      )) : (h(), T(
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
var Ud = ne({
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
        placeholder: b
      } = e;
      if (!b || !f || m !== "outlined") {
        t.value = "";
        return;
      }
      var y = En(a.value), p = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + y.width + " * 0.75 + " + p + " * 2)";
    }, u = (v) => {
      C(e.onClear, v);
    }, d = (v) => {
      C(e.onClick, v);
    };
    return Ot(s), or(s), Tt(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Ao,
      classes: Lb,
      isEmpty: Fr,
      handleClear: u,
      handleClick: d
    };
  }
});
Ud.render = Ub;
const Yd = Ud;
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
function Yb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var Hb = Si({
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
    validator: Yb
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
  n: Fb,
  classes: jb
} = te("input"), Wb = ["placeholder", "enterkeyhint"], Gb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], qb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Xb(e, r) {
  var n = se("var-field-decorator"), a = se("var-form-details");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [_(
      n,
      Pt(uo({
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
        default: me(() => [e.normalizedType === "password" ? (h(), T("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: q({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, Wb)) : ee("v-if", !0), e.textarea ? (h(), T("textarea", {
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
      `, 46, Gb)) : (h(), T("input", {
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
        }, null, 46, qb))]),
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
var Hd = ne({
  name: "VarInput",
  components: {
    VarFormDetails: ar,
    VarFieldDecorator: Yd
  },
  props: Hb,
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
      resetValidation: b
    } = Or(), y = (H) => {
      ze(() => {
        var {
          validateTrigger: G,
          rules: x,
          modelValue: Z
        } = e;
        f(G, H, x, Z);
      });
    }, p = (H) => {
      a.value = !0, C(e.onFocus, H), y("onFocus");
    }, w = (H) => {
      a.value = !1, C(e.onBlur, H), y("onBlur");
    }, O = (H) => {
      var G = H.target, {
        value: x
      } = G;
      return e.type === "number" && (x = k(x)), M(Y(x));
    }, P = () => {
      t.value = !0;
    }, S = (H) => {
      t.value && (t.value = !1, H.target.dispatchEvent(new Event("input")));
    }, I = (H) => {
      if (!t.value) {
        var G = O(H);
        C(e["onUpdate:modelValue"], G), C(e.onInput, G, H), y("onInput");
      }
    }, V = (H) => {
      var G = O(H);
      C(e.onChange, G, H), y("onChange");
    }, N = () => {
      var {
        disabled: H,
        readonly: G,
        clearable: x,
        onClear: Z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || G || !x || (C(e["onUpdate:modelValue"], ""), C(Z, ""), y("onClear"));
    }, g = (H) => {
      var {
        disabled: G,
        onClick: x
      } = e;
      d != null && d.disabled.value || G || (C(x, H), y("onClick"));
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
      C(e["onUpdate:modelValue"], ""), b();
    }, z = () => m(e.rules, e.modelValue), B = () => {
      var H;
      (H = n.value) == null || H.focus();
    }, D = () => {
      n.value.blur();
    }, ae = {
      reset: A,
      validate: z,
      resetValidation: b
    };
    return C(u, ae), or(() => {
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
      n: Fb,
      classes: jb,
      isEmpty: Fr,
      handleFocus: p,
      handleBlur: w,
      handleInput: I,
      handleChange: V,
      handleClear: N,
      handleClick: g,
      handleTouchstart: F,
      handleCompositionStart: P,
      handleCompositionEnd: S,
      handleMousedown: X,
      validate: z,
      resetValidation: b,
      reset: A,
      focus: B,
      blur: D
    };
  }
});
Hd.render = Xb;
const Qn = Hd;
ie(Qn);
var r$ = Qn;
function Kb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Zb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Jb = {
  type: {
    type: String,
    default: "default",
    validator: Kb
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
    validator: Zb
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
  n: Qb,
  classes: _b
} = te("link");
function xb(e, r) {
  return h(), Ce(ra(e.tag), De(e.linkProps, {
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
var Fd = ne({
  name: "VarLink",
  props: Jb,
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
      n: Qb,
      classes: _b,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
Fd.render = xb;
const qa = Fd;
ie(qa);
var n$ = qa, e0 = {
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
}, jd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function r0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(jd);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Wd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function n0() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(jd);
  return r || Pr("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function a0() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Wd);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function t0() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Wd);
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
function o0(e) {
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
  n: i0,
  classes: l0
} = te("list");
function s0(e, r) {
  var n = se("var-loading"), a = Ae("ripple");
  return h(), T(
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
    }, () => [Te((h(), T(
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
var Gd = ne({
  name: "VarList",
  directives: {
    Ripple: Ke
  },
  components: {
    VarLoading: cn
  },
  props: e0,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = t0(), a = $(null), t = $(null), o, l = () => {
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
      var d = o0(function* () {
        yield ze(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return C(n, {}), r && de(() => r.current.value, u), de(() => [e.loading, e.error, e.finished], u), or(() => {
      o = vn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), co(s), {
      pack: _e,
      listEl: a,
      detectorEl: t,
      dt: vo,
      isNumber: nr,
      load: l,
      check: u,
      n: i0,
      classes: l0
    };
  }
});
Gd.render = s0;
const Xa = Gd;
ie(Xa);
var a$ = Xa, u0 = {
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
  classes: d0,
  n: ls
} = te("loading-bar");
const v0 = ne({
  name: "VarLoadingBar",
  props: u0,
  setup(e) {
    return () => _("div", {
      class: d0(ls(), [e.error, ls("--error")]),
      style: {
        zIndex: yr.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
var qd, Xd, Po, Kd, ss, Zd = {}, f0 = {
  value: 0,
  opacity: 0,
  error: !1
}, er = Ye(f0), c0 = (e) => {
  Object.assign(er, e);
}, m0 = (e) => {
  Object.assign(er, e), Zd = e;
}, p0 = () => {
  Object.keys(Zd).forEach((e) => {
    er[e] !== void 0 && (er[e] = void 0);
  });
}, Jd = () => {
  ss || (ss = !0, ta(v0, er));
}, nl = () => {
  qd = window.setTimeout(() => {
    if (!(er.value >= 95)) {
      var e = Math.random();
      er.value < 70 && (e = Math.round(5 * Math.random())), er.value += e, nl();
    }
  }, 200);
}, al = () => {
  window.clearTimeout(Xd), window.clearTimeout(qd), window.clearTimeout(Po), window.clearTimeout(Kd);
}, h0 = () => {
  al(), er.error = !1, er.value = 0, Jd(), Po = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), nl();
}, Qd = () => {
  al(), er.value = 100, Po = window.setTimeout(() => {
    er.opacity = 0, Xd = window.setTimeout(() => {
      er.error = !1;
    }, 250);
  }, 300);
}, g0 = () => {
  al(), er.error = !0, er.value === 100 && (er.value = 0), Jd(), Po = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), nl(), Kd = window.setTimeout(Qd, 300);
}, _d = {
  start: h0,
  finish: Qd,
  error: g0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: c0,
  setDefaultOptions: m0,
  resetDefaultOptions: p0
}, t$ = _d;
const ki = _d;
function y0(e) {
  return ["click", "hover"].includes(e);
}
function b0(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
function w0(e) {
  return ["absolute", "fixed"].includes(e);
}
var C0 = {
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
    validator: y0
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: b0
  },
  strategy: {
    type: String,
    default: "absolute",
    validator: w0
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
  n: S0,
  classes: k0
} = te("menu");
function $0(e, r) {
  return h(), T(
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
    [j(e.$slots, "default"), (h(), Ce(Jr, {
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
var xd = ne({
  name: "VarMenu",
  props: C0,
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
      open: b,
      // expose
      close: y,
      // expose
      resize: p
    } = Td(e);
    return {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      formatElevation: pr,
      toSizeUnit: we,
      n: S0,
      classes: k0,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      resize: p,
      open: b,
      close: y
    };
  }
});
xd.render = $0;
const Mn = xd;
ie(Mn);
var o$ = Mn, ev = Symbol("SELECT_BIND_OPTION_KEY");
function T0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = lr(ev);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function P0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = ir(ev);
  return n || Pr("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var O0 = {
  label: {},
  value: {}
}, {
  n: V0,
  classes: I0
} = te("option");
function M0(e, r) {
  var n = se("var-checkbox"), a = se("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return Te((h(), T(
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
    ), e.multiple ? (h(), Ce(n, {
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
var rv = ne({
  name: "VarOption",
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  components: {
    VarCheckbox: jn,
    VarHoverOverlay: wr
  },
  props: O0,
  setup(e) {
    var r = $(!1), n = L(() => r.value), a = L(() => e.label), t = L(() => e.value), {
      select: o,
      bindSelect: l
    } = P0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, {
      hovering: v,
      handleHovering: f
    } = Xr(), m = () => {
      i.value && (r.value = !r.value), u(p);
    }, b = () => u(p), y = (w) => {
      r.value = w;
    }, p = {
      label: a,
      value: t,
      selected: n,
      sync: y
    };
    return de([() => e.label, () => e.value], d), l(p), {
      n: V0,
      classes: I0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      hovering: v,
      handleHovering: f,
      handleClick: m,
      handleSelect: b
    };
  }
});
rv.render = M0;
const Ka = rv;
ie(Ka);
var i$ = Ka, B0 = {
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
function E0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: us
} = te("overlay");
const Za = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: B0,
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
        }, E0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ie(Za);
var l$ = Za, N0 = {
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
  n: D0,
  classes: A0
} = te("pagination"), z0 = ["item-mode", "onClick"];
function L0(e, r) {
  var n = se("var-icon"), a = se("var-input"), t = se("var-cell"), o = se("var-menu"), l = Ae("ripple");
  return h(), T(
    "ul",
    {
      class: c(e.n())
    },
    [Te((h(), T(
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
    }]]), e.simple ? (h(), T(
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
    )) : (h(!0), T(
      Me,
      {
        key: 1
      },
      We(e.pageList, (i, s) => Te((h(), T("li", {
        key: s,
        "item-mode": e.getMode(i, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(i, s)
      }, [$e(
        le(i),
        1
        /* TEXT */
      )], 10, z0)), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Te((h(), T(
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
    }]]), e.showSizeChanger ? (h(), T(
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
        menu: me(() => [(h(!0), T(
          Me,
          null,
          We(e.sizeOption, (i, s) => Te((h(), Ce(t, {
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
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (h(), T(
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
    )) : ee("v-if", !0), e.totalText ? (h(), T(
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
var nv = ne({
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
  props: N0,
  setup(e) {
    var r = $(!1), n = $(""), a = $("1"), t = $(!1), o = $(!1), l = $(R(e.current) || 1), i = $(R(e.size) || 10), s = $([]), u = L(() => Math.ceil(e.maxPagerCount / 2)), d = L(() => Math.ceil(R(e.total) / R(i.value))), v = L(() => {
      var S = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, R(e.total));
      return [S, I];
    }), f = L(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = (S, I) => nr(S) ? !1 : I === 1 ? t.value : o.value, b = (S, I) => nr(S) ? "basic" : I === 1 ? "head" : "tail", y = (S, I) => {
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
    }, p = () => {
      e.disabled || (r.value = !0);
    }, w = (S) => {
      i.value = S, r.value = !1;
      var I = O(l.value);
      a.value = String(I), l.value = I;
    }, O = (S) => S > d.value ? d.value : S < 1 ? 1 : S, P = (S, I, V) => {
      V.target.blur();
      var N = O(R(I));
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
      n: D0,
      classes: A0,
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
      clickItem: y,
      showMenu: p,
      clickSize: w,
      setPage: P,
      toNumber: R,
      formatElevation: pr
    };
  }
});
nv.render = L0;
const Ja = nv;
ie(Ja);
var s$ = Ja, R0 = {
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
  n: U0,
  classes: Y0
} = te("paper");
function H0(e, r) {
  var n = Ae("ripple");
  return Te((h(), T(
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
var av = ne({
  name: "VarPaper",
  directives: {
    Ripple: Ke
  },
  props: R0,
  setup(e) {
    var r = (n) => {
      C(e.onClick, n);
    };
    return {
      n: U0,
      classes: Y0,
      formatElevation: pr,
      toSizeUnit: we,
      handleClick: r
    };
  }
});
av.render = H0;
const Qa = av;
ie(Qa);
var u$ = Qa;
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
var F0 = $i({
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
  n: j0,
  classes: W0
} = te("picker"), ds = 300, G0 = 15, vs = 200, q0 = 1e3, fs = 0, X0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], K0 = ["onTransitionend"], Z0 = ["onClick"];
function J0(e, r) {
  var n = se("var-button");
  return h(), Ce(
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
        [e.toolbar ? (h(), T(
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
          [(h(!0), T(
            Me,
            null,
            We(e.scrollColumns, (a) => (h(), T("div", {
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
            }, [(h(!0), T(
              Me,
              null,
              We(a.column.texts, (t, o) => (h(), T("div", {
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
              )], 14, Z0))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, K0)], 42, X0))),
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
var tv = ne({
  name: "VarPicker",
  components: {
    VarButton: vr,
    VarPopup: Ur
  },
  inheritAttrs: !1,
  props: F0,
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
      return lf(B, A.column.texts);
    }, f = (A) => (A.translate = t.value - A.index * n.value, A.translate), m = () => {
      var A = r.value.map((B) => B.column.texts[B.index]), z = r.value.map((B) => B.index);
      return {
        texts: A,
        indexes: z
      };
    }, b = function(A, z) {
      z === void 0 && (z = 0), f(A), A.duration = z;
    }, y = (A, z, B) => {
      A.translate += Math.abs(z / B) / 3e-3 * (z < 0 ? -1 : 1);
    }, p = (A, z) => {
      i || (A.index = z, A.scrolling = !0, b(A, vs));
    }, w = (A) => {
      A.touching = !0, A.translate = Mo(A.scrollEl);
    }, O = (A, z) => {
      if (z.touching) {
        i = !0, z.scrolling = !1, z.duration = 0;
        var {
          clientY: B
        } = A.touches[0], D = z.prevY !== void 0 ? B - z.prevY : 0;
        z.prevY = B, z.translate += D, d(z);
        var ae = performance.now();
        ae - z.momentumTime > ds && (z.momentumTime = ae, z.momentumPrevY = z.translate);
      }
    }, P = (A, z) => {
      z.touching = !1, z.prevY = void 0;
      var B = z.translate - z.momentumPrevY, D = performance.now() - z.momentumTime, ae = Math.abs(B) >= G0 && D <= ds;
      ae && y(z, B, D), z.index = v(z, z.translate);
      var H = z.translate, G = f(z);
      z.scrolling = G !== H, b(z, ae ? q0 : vs), z.scrolling || Y(z), br(() => {
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
      return b(H), H;
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
        A.push(G), b(G), N(A, G.columns[G.index].children, B + 1, D);
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
        A && (A.index = v(A, Mo(A.scrollEl)), A.scrolling = !1, b(A), g(A));
      } else
        r.value.forEach((z) => {
          z.index = v(z, Mo(z.scrollEl)), b(z);
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
      n: j0,
      classes: W0,
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
      handleTouchmove: O,
      handleTouchend: P,
      handleTransitionend: S,
      confirm: F,
      cancel: X,
      dt: vo,
      handleClick: p
    };
  }
});
tv.render = J0;
const Dt = tv;
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
var d$ = Dt;
function Q0(e) {
  return ["linear", "circle"].includes(e);
}
function _0(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var x0 = {
  mode: {
    type: String,
    default: "linear",
    validator: Q0
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
    validator: _0
  }
}, {
  n: e1,
  classes: r1
} = te("progress"), n1 = ["viewBox"], a1 = ["r", "stroke-width", "stroke-dasharray"], t1 = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function o1(e, r) {
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
      [E(
        "div",
        {
          class: c(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
          style: q({
            height: e.toSizeUnit(e.lineWidth),
            background: e.trackColor
          })
        },
        [e.indeterminate ? (h(), T(
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
        )) : (h(), T(
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
      ), e.label ? (h(), T(
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
    )) : ee("v-if", !0), e.mode === "circle" ? (h(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), T("svg", {
        class: c(e.n("circle-svg")),
        style: q({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (h(), T("circle", {
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
      }, null, 14, a1)) : ee("v-if", !0), E("circle", {
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
      }, null, 14, t1)], 14, n1)), e.label ? (h(), T(
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
var ov = ne({
  name: "VarProgress",
  props: x0,
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
      n: e1,
      classes: r1,
      toSizeUnit: we,
      linearProps: t,
      CIRCUMFERENCE: a,
      RADIUS: n,
      circleProps: o
    };
  }
});
ov.render = o1;
const _a = ov;
ie(_a);
var v$ = _a, i1 = {
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
  n: ps,
  classes: l1
} = te("pull-refresh"), hs = 150;
function s1(e, r) {
  var n = se("var-icon");
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
var iv = ne({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ne
  },
  props: i1,
  setup(e) {
    var r = $(0), n = $(null), a = $(null), t = $(0), o = $("-125%"), l = $("arrow-down"), i = $("default"), s = $(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var g = ms(function* (k) {
        if (l.value !== k)
          return l.value = k, new Promise((Y) => {
            window.setTimeout(Y, hs);
          });
      });
      return function(Y) {
        return g.apply(this, arguments);
      };
    }(), b = L(() => i.value !== "loading" && i.value !== "success" && !e.disabled), y = L(() => ({
      transform: "translate3d(0px, " + (Ge(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), p = L(() => Math.abs(2 * r.value)), w = L(() => i.value === "success"), O = (g) => {
      var k = "classList" in u ? u : document.body;
      k.classList[g](ps() + "--lock");
    }, P = (g) => {
      if (r.value === 0) {
        var {
          width: k
        } = Qe(a.value);
        r.value = -(k + k * 0.25);
      }
      v = g.touches[0].clientY, f = 0, d = vn(g.target);
    }, S = (g) => {
      if (!(!b.value || !d) && !(d !== u && ha(d) > 0)) {
        var k = ha(u);
        if (!(k > 0)) {
          var Y = k === 0, M = g.touches[0];
          f = M.clientY - v, Y && f >= 0 && g.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = g.touches[0].clientY), Y && nr(o.value) && o.value > r.value && O("add");
          var F = (g.touches[0].clientY - t.value) / 2 + r.value;
          o.value = F >= p.value ? p.value : F, m(o.value >= p.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var g = ms(function* () {
        b.value && (s.value = !0, R(o.value) >= p.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = p.value * 0.3, C(e["onUpdate:modelValue"], !0), ze(() => {
          C(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
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
    }), or(V), fn(n, "touchmove", S), {
      n: ps,
      classes: l1,
      ICON_TRANSITION: hs,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: P,
      touchMove: S,
      touchEnd: I,
      iconName: l,
      controlStyle: y,
      isSuccess: w
    };
  }
});
iv.render = s1;
const xa = iv;
ie(xa);
var f$ = xa, u1 = {
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
}, lv = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function d1() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = lr(lv);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function v1() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ir(lv);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: f1,
  classes: c1
} = te("radio");
function m1(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return h(), T(
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
      [Te((h(), T(
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
var sv = ne({
  name: "VarRadio",
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  inheritAttrs: !1,
  props: u1,
  setup(e) {
    var r = ya(e, "modelValue"), n = L(() => r.value === e.checkedValue), a = $(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = v1(), {
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
    } = Or(), b = (V) => {
      ze(() => {
        var {
          validateTrigger: N,
          rules: g,
          modelValue: k
        } = e;
        v(N, V, g, k);
      });
    }, y = (V) => {
      var {
        checkedValue: N,
        onChange: g
      } = e;
      t && r.value === N || (r.value = V, C(g, r.value), t == null || t.onToggle(N), b("onChange"));
    }, p = (V) => {
      var {
        disabled: N,
        readonly: g,
        uncheckedValue: k,
        checkedValue: Y,
        onClick: M
      } = e;
      s != null && s.disabled.value || N || (C(M, V), !(s != null && s.readonly.value || g) && (a.value = !0, y(n.value ? k : Y)));
    }, w = (V) => {
      var {
        checkedValue: N,
        uncheckedValue: g
      } = e;
      r.value = V === N ? N : g;
    }, O = () => {
      r.value = e.uncheckedValue, m();
    }, P = () => f(e.rules, e.modelValue), S = (V) => {
      var {
        uncheckedValue: N,
        checkedValue: g
      } = e, k = ![N, g].includes(V);
      k && (V = n.value ? N : g), y(V);
    }, I = {
      sync: w,
      validate: P,
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
      n: f1,
      classes: c1,
      handleClick: p,
      toggle: S,
      reset: O,
      validate: P,
      resetValidation: m
    };
  }
});
sv.render = m1;
const et = sv;
ie(et);
var c$ = et;
function p1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var h1 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: p1
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
  n: g1,
  classes: y1
} = te("radio-group");
function b1(e, r) {
  var n = se("var-form-details");
  return h(), T(
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
var uv = ne({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: ar
  },
  props: h1,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = d1(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Or(), u = L(() => o.value), d = (p) => {
      ze(() => {
        var {
          validateTrigger: w,
          rules: O,
          modelValue: P
        } = e;
        l(w, p, O, P);
      });
    }, v = () => n.forEach((p) => {
      var {
        sync: w
      } = p;
      return w(e.modelValue);
    }), f = (p) => {
      C(e["onUpdate:modelValue"], p), C(e.onChange, p), d("onChange");
    }, m = () => i(e.rules, e.modelValue), b = () => {
      C(e["onUpdate:modelValue"], void 0), s();
    };
    de(() => e.modelValue, v), de(() => r.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: b,
      resetValidation: s,
      errorMessage: u
    };
    return C(t, y), a(y), {
      errorMessage: o,
      n: g1,
      classes: y1,
      reset: b,
      validate: m,
      resetValidation: s
    };
  }
});
uv.render = b1;
const rt = uv;
ie(rt);
var m$ = rt, w1 = {
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
  n: la
} = te("rate"), C1 = ["onClick"];
function S1(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return h(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [E(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), T(
        Me,
        null,
        We(e.toNumber(e.count), (i) => Te((h(), T("div", {
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
        }, null, 8, ["hovering"])], 14, C1)), [[o, {
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
var dv = ne({
  name: "VarRate",
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  props: w1,
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
      } = e;
      if (V) {
        var {
          offsetWidth: g
        } = I.target;
        I.offsetX <= Math.floor(g / 2) && (S -= 0.5);
      }
      u === S && N && (S = 0), u = S, C(e["onUpdate:modelValue"], S);
    }, b = () => o(e.rules, R(e.modelValue)), y = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), p = (S, I) => {
      var {
        readonly: V,
        disabled: N,
        onChange: g
      } = e;
      V || N || r != null && r.disabled.value || r != null && r.readonly.value || (m(S, I), C(g, S), y());
    }, w = (S) => (I) => {
      s.value = S, i.value = I;
    }, O = () => {
      C(e["onUpdate:modelValue"], 0), l();
    }, P = {
      reset: O,
      validate: b,
      resetValidation: l
    };
    return C(n, P), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: d,
      getClass: v,
      getCurrentState: f,
      handleClick: p,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: w,
      reset: O,
      validate: b,
      resetValidation: l,
      toSizeUnit: we,
      toNumber: R,
      n: la
    };
  }
});
dv.render = S1;
const nt = dv;
ie(nt);
var p$ = nt;
function k1(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var $1 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: k1
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
}, T1 = (e) => (gn(""), e = e(), yn(), e), P1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, O1 = /* @__PURE__ */ T1(() => /* @__PURE__ */ E(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), V1 = [O1];
function I1(e, r) {
  return h(), T("svg", P1, V1);
}
var vv = ne({});
vv.render = I1;
const M1 = vv;
var B1 = (e) => (gn(""), e = e(), yn(), e), E1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, N1 = /* @__PURE__ */ B1(() => /* @__PURE__ */ E(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), D1 = [N1];
function A1(e, r) {
  return h(), T("svg", E1, D1);
}
var fv = ne({});
fv.render = A1;
const z1 = fv;
var L1 = (e) => (gn(""), e = e(), yn(), e), R1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, U1 = /* @__PURE__ */ L1(() => /* @__PURE__ */ E(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), Y1 = [U1];
function H1(e, r) {
  return h(), T("svg", R1, Y1);
}
var cv = ne({});
cv.render = H1;
const F1 = cv;
var {
  n: j1,
  classes: W1
} = te("result");
function G1(e, r) {
  return h(), T(
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
var mv = ne({
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
      n: j1,
      classes: W1,
      toNumber: R
    };
  }
});
mv.render = G1;
const q1 = mv;
var X1 = (e) => (gn(""), e = e(), yn(), e), K1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Z1 = /* @__PURE__ */ X1(() => /* @__PURE__ */ E(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), J1 = [Z1];
function Q1(e, r) {
  return h(), T("svg", K1, J1);
}
var pv = ne({});
pv.render = Q1;
const _1 = pv;
var x1 = (e) => (gn(""), e = e(), yn(), e), ew = {
  viewBox: "-4 -4 32 32"
}, rw = /* @__PURE__ */ x1(() => /* @__PURE__ */ E(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), nw = [rw];
function aw(e, r) {
  return h(), T("svg", ew, nw);
}
var hv = ne({});
hv.render = aw;
const tw = hv;
var {
  n: ow,
  classes: iw
} = te("result");
function lw(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "image", {}, () => [e.type ? (h(), T(
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
        [(h(), Ce(ra(e.type), {
          "border-size": e.borderSize,
          animation: e.animation
        }, null, 8, ["border-size", "animation"]))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "title", {}, () => [e.title ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      le(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      le(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (h(), T(
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
var gv = ne({
  name: "VarResult",
  components: {
    Info: M1,
    Success: q1,
    Warning: F1,
    Error: z1,
    Question: _1,
    Empty: tw
  },
  props: $1,
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
      n: ow,
      classes: iw,
      toNumber: R,
      toPxNum: Re,
      toSizeUnit: we,
      circleSize: r,
      borderSize: n
    };
  }
});
gv.render = lw;
const at = gv;
ie(at);
var h$ = at;
function sw(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function uw(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var dw = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: sw
  },
  align: {
    type: String,
    default: "flex-start",
    validator: uw
  },
  onClick: U()
}, {
  n: vw,
  classes: fw
} = te("row");
function cw(e, r) {
  return h(), T(
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
var yv = ne({
  name: "VarRow",
  props: dw,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = pp(), t = L(() => {
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
      n: vw,
      classes: fw,
      average: t,
      handleClick: l,
      padStartFlex: _t
    };
  }
});
yv.render = cw;
const tt = yv;
ie(tt);
var g$ = tt;
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
function mw(e) {
  return ["left", "right", "center"].includes(e);
}
var pw = Ti({
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
    validator: mw
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
  n: hw,
  classes: gw
} = te("select"), yw = {
  key: 1
};
function bw(e, r) {
  var n = se("var-chip"), a = se("var-icon"), t = se("var-field-decorator"), o = se("var-menu"), l = se("var-form-details");
  return h(), T(
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
        Pt(uo({
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
              }, () => [e.multiple ? (h(), T(
                Me,
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
                    Me,
                    null,
                    We(e.labels, (i) => (h(), Ce(n, {
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
                )) : (h(), T(
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
              )) : (h(), T(
                "span",
                yw,
                le(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.enableCustomPlaceholder ? (h(), T(
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
var bv = ne({
  name: "VarSelect",
  components: {
    VarIcon: Ne,
    VarMenu: Mn,
    VarChip: Wn,
    VarFieldDecorator: Yd,
    VarFormDetails: ar
  },
  props: pw,
  setup(e) {
    var r = $(!1), n = $(!1), a = L(() => e.multiple), t = L(() => e.focusColor), o = $(""), l = $([]), i = L(() => Fr(e.modelValue)), s = L(() => e.disabled || e.readonly ? "" : "pointer"), u = $(0), {
      bindForm: d,
      form: v
    } = Vr(), {
      length: f,
      options: m,
      bindOptions: b
    } = T0(), {
      errorMessage: y,
      validateWithTrigger: p,
      validate: w,
      // expose
      resetValidation: O
    } = Or(), P = $(null), S = L(() => e.variant === "outlined" ? "bottom" : "cover-top"), I = L(() => {
      var {
        hint: J,
        blurColor: Q,
        focusColor: oe
      } = e;
      if (!J)
        return y.value ? "var(--field-decorator-error-color)" : r.value ? oe || "var(--field-decorator-focus-color)" : Q || "var(--field-decorator-blur-color)";
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
        p(Q, J, oe, ce);
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
            label: be
          } = ue;
          return be.value === J;
        }), re = Ie.filter((ue) => {
          var be;
          return ue !== ((be = W.value.value) != null ? be : W.label.value);
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
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    de(() => e.multiple, () => {
      var {
        multiple: J,
        modelValue: Q
      } = e;
      J && !Ve(Q) && Pr("Select", "The modelValue must be an array when multiple is true");
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
      resetValidation: O
    };
    return b(Z), C(d, Z), {
      offsetY: u,
      isFocus: r,
      showMenu: n,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: P,
      placement: S,
      cursor: s,
      placeholderColor: I,
      enableCustomPlaceholder: V,
      n: hw,
      classes: gw,
      handleFocus: M,
      handleBlur: F,
      handleClear: A,
      handleClick: z,
      handleClose: B,
      reset: x,
      validate: G,
      resetValidation: O,
      focus: ae,
      blur: H
    };
  }
});
bv.render = bw;
const ot = bv;
ie(ot);
var y$ = ot, ww = {
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
  n: Cw,
  classes: Sw
} = te("skeleton");
function kw(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [j(e.$slots, "default")],
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
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), T(
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
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), T(
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
          )) : ee("v-if", !0), (h(!0), T(
            Me,
            null,
            We(e.toNumber(e.rows), (n, a) => (h(), T(
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
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (h(), T(
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
var wv = ne({
  name: "VarSkeleton",
  props: ww,
  setup() {
    return {
      n: Cw,
      classes: Sw,
      toSizeUnit: we,
      toNumber: R
    };
  }
});
wv.render = kw;
const it = wv;
ie(it);
var b$ = it;
function $w(e) {
  return ["always", "normal", "never"].includes(e);
}
var Xe = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), Tw = {
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
    validator: $w
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
  classes: Pw
} = te("slider"), Ow = ["onTouchstart"];
function Vw(e, r) {
  var n = se("var-hover-overlay"), a = se("var-form-details"), t = Ae("hover");
  return h(), T(
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
      ), (h(!0), T(
        Me,
        null,
        We(e.thumbList, (o) => (h(), T("div", {
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
        )])], 46, Ow))),
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
var Cv = ne({
  name: "VarSlider",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  directives: {
    Hover: Ar
  },
  props: Tw,
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
    } = Xr(), {
      hovering: u,
      handleHovering: d
    } = Xr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), b = $(null), y = $(0), p = $(!1), w = Ye({
      [Xe.First]: f(),
      [Xe.Second]: f()
    }), O = L(() => R(e.max) - R(e.min)), P = L(() => y.value / O.value * R(e.step)), S = L(() => {
      var {
        modelValue: W,
        range: re
      } = e, ue = [];
      return re && Ve(W) ? ue = [{
        value: X(W[0]),
        enumValue: Xe.First,
        text: A(W[0]),
        hovering: ua(i),
        handleHovering: s
      }, {
        value: X(W[1]),
        enumValue: Xe.Second,
        text: A(W[1]),
        hovering: ua(u),
        handleHovering: d
      }] : nr(W) && (ue = [{
        value: X(W),
        enumValue: Xe.First,
        text: A(W),
        hovering: ua(i),
        handleHovering: s
      }]), ue;
    }), I = L(() => {
      var {
        activeColor: W,
        range: re,
        modelValue: ue
      } = e, be = re && Ve(ue) ? X(Math.min(ue[0], ue[1])) : 0, Ue = re && Ve(ue) ? X(Math.max(ue[0], ue[1])) - be : X(ue);
      return g.value ? {
        left: "0px",
        height: Ue + "%",
        bottom: be + "%",
        background: W
      } : {
        top: "0px",
        width: Ue + "%",
        left: be + "%",
        background: W
      };
    }), V = L(() => e.disabled || (n == null ? void 0 : n.disabled.value)), N = L(() => e.readonly || (n == null ? void 0 : n.readonly.value)), g = L(() => e.direction === "vertical"), k, Y = (W) => {
      var re = W.currentTarget;
      return re ? g.value ? y.value - (W.clientY - Qe(re).top) : W.clientX - uf(re) : 0;
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
      return W < R(re) ? 0 : W > R(ue) ? 100 : (W - R(re)) / O.value * 100;
    }, A = (W) => {
      if (!nr(W))
        return 0;
      var re = W;
      re < Number(e.min) && (re = Number(e.min)), re > Number(e.max) && (re = Number(e.max));
      var ue = parseInt("" + re, 10) === re;
      return ue ? re : R(re.toPrecision(5));
    }, z = (W, re) => {
      V.value || re.handleHovering(W);
    }, B = (W, re) => {
      var ue = [], {
        step: be,
        range: Ue,
        modelValue: Le,
        onChange: He,
        min: qe
      } = e, ve = R(be), Se = Math.round(W / P.value), ge = Se * ve + R(qe), Pe = w[re].percentValue * ve + R(qe);
      if (w[re].percentValue = Se, Ue && Ve(Le) && (ue = re === Xe.First ? [ge, Le[1]] : [Le[0], ge]), Pe !== ge) {
        var Oe = Ue ? ue.map((je) => A(je)) : A(ge);
        C(He, Oe), C(e["onUpdate:modelValue"], Oe), m();
      }
    }, D = (W) => {
      if (!e.range)
        return Xe.First;
      var re = w[Xe.First].percentValue * P.value, ue = w[Xe.Second].percentValue * P.value, be = Math.abs(W - re), Ue = Math.abs(W - ue);
      return be <= Ue ? Xe.First : Xe.Second;
    }, ae = () => {
      document.addEventListener("touchmove", x, {
        passive: !1
      }), document.addEventListener("touchend", Z), document.addEventListener("touchcancel", Z);
    }, H = () => {
      document.removeEventListener("touchmove", x), document.removeEventListener("touchend", Z), document.removeEventListener("touchcancel", Z);
    }, G = (W, re) => {
      if (y.value || (y.value = b.value.offsetWidth), V.value || (w[re].active = !0), k = re, ae(), !(V.value || N.value)) {
        C(e.onStart), p.value = !0;
        var {
          clientX: ue,
          clientY: be
        } = W.touches[0];
        w[re].startPosition = g.value ? be : ue;
      }
    }, x = (W) => {
      if (W.preventDefault(), !(V.value || N.value || !p.value)) {
        var {
          startPosition: re,
          currentOffset: ue
        } = w[k], {
          clientX: be,
          clientY: Ue
        } = W.touches[0], Le = (g.value ? re - Ue : be - re) + ue;
        Le <= 0 ? Le = 0 : Le >= y.value && (Le = y.value), B(Le, k);
      }
    }, Z = () => {
      H();
      var {
        range: W,
        modelValue: re,
        onEnd: ue,
        step: be,
        min: Ue
      } = e;
      if (V.value || (w[k].active = !1), !(V.value || N.value)) {
        var Le = [];
        w[k].currentOffset = w[k].percentValue * P.value;
        var He = w[k].percentValue * R(be) + R(Ue);
        W && Ve(re) && (Le = k === Xe.First ? [He, re[1]] : [re[0], He]), C(ue, W ? Le : He), p.value = !1;
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
      var ue = (be) => {
        var {
          min: Ue,
          max: Le
        } = e;
        return be < R(Ue) ? 0 : be > R(Le) ? O.value / re : (be - R(Ue)) / re;
      };
      e.range && Ve(W) ? (w[Xe.First].percentValue = ue(W[0]), w[Xe.First].currentOffset = w[Xe.First].percentValue * P.value, w[Xe.Second].percentValue = ue(W[1]), w[Xe.Second].currentOffset = w[Xe.Second].percentValue * P.value) : nr(W) && (w[Xe.First].currentOffset = ue(W) * P.value);
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
      !Q() || !oe() || p.value || ce(re, R(ue));
    }), de(y, () => ce()), or(() => {
      !Q() || !oe() || (y.value = b.value[g.value ? "offsetHeight" : "offsetWidth"]);
    }), so(() => {
      H();
    }), {
      n: gs,
      classes: Pw,
      Thumbs: Xe,
      sliderEl: b,
      getFillStyle: I,
      isDisabled: V,
      isVertical: g,
      thumbStyle: M,
      errorMessage: a,
      thumbsProps: w,
      thumbList: S,
      hover: z,
      multiplySizeUnit: ur,
      toNumber: R,
      showLabel: F,
      start: G,
      move: x,
      end: Z,
      click: J
    };
  }
});
Cv.render = Vw;
const lt = Cv;
ie(lt);
var w$ = lt;
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
function Iw(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function Mw(e) {
  return tl.includes(e);
}
var Sv = {
  type: {
    type: String,
    validator: Mw
  },
  position: {
    type: String,
    default: "top",
    validator: Iw
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
  loadingColor: Pi({}, xe(on, "color"), {
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
  n: Bw,
  classes: Ew
} = te("snackbar"), Nw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Dw(e, r) {
  var n = se("var-icon"), a = se("var-loading");
  return Te((h(), T(
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
        [e.iconName ? (h(), Ce(n, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : ee("v-if", !0), e.type === "loading" ? (h(), Ce(a, {
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
var kv = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: cn,
    VarIcon: Ne
  },
  props: Sv,
  setup(e) {
    var r = $(null), {
      zIndex: n
    } = It(() => e.show, 1);
    mo(() => e.show, () => e.lockScroll);
    var a = L(() => e.type === "loading" || e.forbidClick), t = L(() => e.type ? Nw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return de(() => e.show, (l) => {
      l ? (C(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), C(e.onClose));
    }), de(() => e._update, () => {
      clearTimeout(r.value), o();
    }), or(() => {
      e.show && (C(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: tl,
      n: Bw,
      classes: Ew,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
kv.render = Dw;
const $v = kv;
var {
  n: Aw
} = te("snackbar");
function zw(e, r) {
  var n = se("var-snackbar-core");
  return h(), Ce(Jr, {
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
var Tv = ne({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: $v
  },
  props: Sv,
  setup() {
    var {
      disabled: e
    } = oa();
    return {
      n: Aw,
      disabled: e
    };
  }
});
Tv.render = zw;
const Oo = Tv;
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
function Lw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var tl = ["loading", "success", "warning", "info", "error"], ys = 0, Oi = !1, Pv, _n = !1, Ov = {
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
}, $r = Ye([]), ol = Ov, Rw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, zo = (e) => () => na(e) ? e() : e, Uw = {
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
        }, Gw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: zo(s),
          icon: zo(u),
          action: zo(d)
        };
        return _($v, De(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return _(rf, De(Rw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: Yw,
        onAfterLeave: Hw
      }), Lw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Zr = function(e) {
  var r = jw(e), n = Ye(st({}, ol, r));
  n.show = !0, Oi || (Oi = !0, Pv = ta(Uw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: ys++,
    reactiveSnackOptions: n
  };
  if (a === 0 || _n)
    Fw(t);
  else {
    var o = "update-" + ys;
    Ww(n, o);
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
  ol = Ov;
};
function Yw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === R(r));
  n && C(n.reactiveSnackOptions.onOpened);
}
function Hw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === R(r));
  n && (n.animationEnd = !0, C(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (C(Pv), $r = Ye([]), Oi = !1);
}
function Fw(e) {
  $r.push(e);
}
function jw(e) {
  return e === void 0 && (e = {}), Ge(e) ? {
    content: e
  } : e;
}
function Ww(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = st({}, n.reactiveSnackOptions, e), n._update = r;
}
function Gw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Zr.Component = Oo;
ie(Oo);
ie(Oo, Zr);
var C$ = Oo;
const Vi = Zr;
var Vv = (e) => ["mini", "small", "normal", "large"].includes(e), qw = (e) => Vv(e) || Ve(e) || nr(e) || Ge(e), Xw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Kw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Zw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: qw
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
    validator: Xw
  },
  align: {
    type: String,
    validator: Kw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Jw(e, r, n) {
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
  classes: Qw
} = te("space");
const ut = ne({
  name: "VarSpace",
  props: Zw,
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
      } = e, v = (t = C(n.default)) != null ? t : [], f = Vv(d), [m, b] = a(d, f);
      v = Ys(v);
      var y = v.length - 1, p = v.map((w, O) => {
        var P = Jw(m, b, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: y
        });
        return _("div", {
          style: {
            margin: P
          }
        }, [w]);
      });
      return _("div", {
        class: Qw(Lo(), Lo("$--box"), [o, Lo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: _t(l),
          alignItems: _t(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [p]);
    };
  }
});
ie(ut);
var S$ = ut, _w = {
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
}, Iv = Symbol("STEPS_BIND_STEP_KEY");
function xw() {
  var {
    bindChildren: e,
    childProviders: r
  } = lr(Iv);
  return {
    step: r,
    bindStep: e
  };
}
function eC() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Iv);
  return n || Pr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: rC,
  classes: nC
} = te("step"), aC = {
  key: 3
};
function tC(e, r) {
  var n = se("var-icon");
  return h(), T(
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
        [e.isActive ? (h(), Ce(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.activeIcon
        }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (h(), Ce(n, {
          key: 1,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.currentIcon
        }, null, 8, ["class", "name"])) : e.inactiveIcon ? (h(), Ce(n, {
          key: 2,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.inactiveIcon
        }, null, 8, ["class", "name"])) : (h(), T(
          "span",
          aC,
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
var Mv = ne({
  name: "VarStep",
  components: {
    VarIcon: Ne
  },
  props: _w,
  setup() {
    var {
      index: e,
      steps: r,
      bindSteps: n
    } = eC(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = r, s = L(() => a.value === e.value), u = L(() => e.value !== -1 && R(a.value) > e.value), d = {
      index: e
    }, v = () => i(e.value);
    return n(d), {
      n: rC,
      classes: nC,
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
Mv.render = tC;
const dt = Mv;
ie(dt);
var k$ = dt;
function oC(e) {
  return ["horizontal", "vertical"].includes(e);
}
var iC = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: oC
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: lC
} = te("steps");
function sC(e, r) {
  return h(), T(
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
var Bv = ne({
  name: "VarSteps",
  props: iC,
  setup(e) {
    var r = L(() => e.active), n = L(() => e.activeColor), a = L(() => e.inactiveColor), t = L(() => e.direction), {
      bindStep: o
    } = xw(), l = (s) => {
      C(e.onClickStep, s);
    }, i = {
      active: r,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: lC
    };
  }
});
Bv.render = sC;
const vt = Bv;
ie(vt);
var $$ = vt, uC = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: dC
} = te("style-provider"), vC = ne({
  name: "VarStyleProvider",
  props: uC,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => Os(e.tag, {
      class: dC(),
      style: Rs(e.styleVars)
    }, C(n.default));
  }
});
const Vo = vC;
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
var T$ = Vo, fC = {
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
  n: cC,
  classes: mC
} = te("switch"), pC = (e) => (gn(""), e = e(), yn(), e), hC = /* @__PURE__ */ pC(() => /* @__PURE__ */ E(
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
)), gC = [hC];
function yC(e, r) {
  var n = se("var-hover-overlay"), a = se("var-form-details"), t = Ae("ripple"), o = Ae("hover");
  return Te((h(), T(
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
      ), Te((h(), T(
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
          [e.loading ? (h(), T(
            "span",
            {
              key: 0,
              class: c(e.n("loading")),
              style: q({
                width: e.radius,
                height: e.radius
              })
            },
            gC,
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
var Ev = ne({
  name: "VarSwitch",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  props: fC,
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
    } = Xr(), u = () => o(e.rules, e.modelValue), d = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = L(() => {
      var {
        size: w,
        modelValue: O,
        color: P,
        closeColor: S,
        loadingColor: I,
        activeValue: V
      } = e;
      return {
        handle: {
          width: ur(w),
          height: ur(w),
          backgroundColor: O === V ? P : S,
          color: I
        },
        ripple: {
          left: O === V ? ur(w, 0.5) : "-" + ur(w, 0.5),
          color: O === V ? P : S || "#999",
          width: ur(w, 2),
          height: ur(w, 2)
        },
        track: {
          height: ur(w, 0.72),
          width: ur(w, 1.9),
          borderRadius: ur(w, 2 / 3),
          filter: O === V || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === V ? P : S
        },
        switch: {
          height: ur(w, 1.2),
          width: ur(w, 2)
        }
      };
    }), f = L(() => ur(e.size, 0.8)), m = (w) => {
      var {
        onClick: O,
        onChange: P,
        disabled: S,
        loading: I,
        readonly: V,
        modelValue: N,
        activeValue: g,
        inactiveValue: k,
        "onUpdate:modelValue": Y
      } = e;
      if (C(O, w), !(S || I || V || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var M = N === g ? k : g;
        C(P, M), C(Y, M), d();
      }
    }, b = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, y = () => {
      C(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, p = {
      reset: y,
      validate: u,
      resetValidation: l
    };
    return C(r, p), {
      n: cC,
      classes: mC,
      hovering: i,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      multiplySizeUnit: ur,
      switchActive: m,
      hover: b
    };
  }
});
Ev.render = yC;
const ct = Ev;
ie(ct);
var P$ = ct, bC = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, Nv = Symbol("TABS_BIND_TAB_KEY");
function wC() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = lr(Nv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function CC() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ir(Nv);
  return r || Pr("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: jt,
  classes: SC
} = te("tab");
function kC(e, r) {
  var n = Ae("ripple");
  return Te((h(), T(
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
var Dv = ne({
  name: "VarTab",
  directives: {
    Ripple: Ke
  },
  props: bC,
  setup(e) {
    var r = $(null), n = L(() => e.name), a = L(() => e.disabled), t = L(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = CC(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: b
    } = l, y = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(y);
    var p = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : p() ? d.value : v.value, O = () => e.disabled ? jt("$-tab--disabled") : p() ? jt("$-tab--active") : jt("$-tab--inactive"), P = (S) => {
      var {
        disabled: I,
        name: V,
        onClick: N
      } = e;
      I || (C(N, V ?? o.value, S), s(y));
    };
    return de(() => e.name, b), de(() => e.disabled, b), {
      n: jt,
      classes: SC,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: O,
      handleClick: P
    };
  }
});
Dv.render = kC;
const mt = Dv;
ie(mt);
var O$ = mt, $C = {
  name: {
    type: [String, Number]
  }
}, {
  n: TC,
  classes: PC
} = te("tab-item");
function OC(e, r) {
  var n = se("var-swipe-item");
  return h(), Ce(n, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: me(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Av = ne({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Vn
  },
  props: $C,
  setup(e) {
    var r = $(!1), n = L(() => e.name), {
      index: a,
      bindTabsItems: t
    } = n0(), {
      bindLists: o
    } = a0(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: L(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: TC,
      classes: PC,
      current: r
    };
  }
});
Av.render = OC;
const pt = Av;
ie(pt);
var V$ = pt, VC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: IC,
  classes: MC
} = te("table");
function BC(e, r) {
  return h(), T(
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
    ), e.$slots.footer ? (h(), T(
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
var zv = ne({
  name: "VarTable",
  props: VC,
  setup() {
    return {
      toSizeUnit: we,
      n: IC,
      classes: MC,
      formatElevation: pr
    };
  }
});
zv.render = BC;
const ht = zv;
ie(ht);
var I$ = ht;
function bs(e) {
  return ["horizontal", "vertical"].includes(e);
}
function EC(e) {
  return ["auto", "always"].includes(e);
}
function NC(e) {
  return ["normal", "reverse"].includes(e);
}
var DC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: bs
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: bs
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
    validator: EC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: NC
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
  n: AC,
  classes: zC
} = te("tabs");
function LC(e, r) {
  return h(), Ce(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
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
var Lv = ne({
  name: "VarTabs",
  components: {
    VarSticky: In
  },
  inheritAttrs: !1,
  props: DC,
  setup(e) {
    var r = $("0px"), n = $("0px"), a = $("0px"), t = $("0px"), o = $(!1), l = $(null), i = L(() => e.active), s = L(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = L(() => e.activeColor), d = L(() => e.inactiveColor), v = L(() => e.disabledColor), f = L(() => e.itemDirection), m = $(null), {
      tabList: b,
      bindTabList: y,
      length: p
    } = wC(), w = (M) => {
      var F, X = (F = M.name.value) != null ? F : M.index.value, {
        active: A,
        onChange: z,
        onClick: B
      } = e;
      C(e["onUpdate:active"], X), C(B, X), X !== A && C(z, X);
    }, O = () => b.find((M) => {
      var {
        name: F
      } = M;
      return e.active === F.value;
    }), P = (M) => b.find((F) => {
      var {
        index: X
      } = F;
      return (M ?? e.active) === X.value;
    }), S = () => {
      if (p.value !== 0) {
        var {
          active: M
        } = e;
        if (nr(M)) {
          var F = dn(M, 0, p.value - 1);
          return C(e["onUpdate:active"], F), P(F);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || b.length >= 5;
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
      var M = O() || P() || S();
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
    return y(Y), de(() => p.value, /* @__PURE__ */ Cs(function* () {
      yield Dr(), g();
    })), de(() => e.active, g), de(() => e.scrollable, g), hn(g), Ot(g), {
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
      n: AC,
      classes: zC,
      resize: g,
      resizeSticky: k,
      formatElevation: pr
    };
  }
});
Lv.render = LC;
const gt = Lv;
ie(gt);
var M$ = gt, RC = {
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
function UC(e) {
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
  n: YC
} = te("tabs-items");
function HC(e, r) {
  var n = se("var-swipe");
  return h(), Ce(n, {
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
var Rv = ne({
  name: "VarTabsItems",
  components: {
    VarSwipe: On
  },
  props: RC,
  setup(e) {
    var r = $(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = r0(), o = (v) => n.find((f) => {
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
          setCurrent: y
        } = b;
        return y(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((y) => {
        var {
          index: p
        } = y;
        return p.value === v;
      }), b = (f = m.name.value) != null ? f : m.index.value;
      C(e["onUpdate:active"], b);
    }, d = () => r.value;
    return a({}), de(() => e.active, s), de(() => t.value, /* @__PURE__ */ UC(function* () {
      yield Dr(), s(e.active);
    })), {
      swipe: r,
      n: YC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Rv.render = HC;
const yt = Rv;
ie(yt);
var B$ = yt;
const FC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, jC = {
  "--badge-default-color": "#555"
}, WC = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, GC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, qC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, XC = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, KC = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, ZC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, JC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, QC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, _C = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, xC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, eS = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, rS = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, nS = {
  "--popup-content-background-color": "#1e1e1e"
}, aS = {
  "--pull-refresh-background": "#303030"
}, tS = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, oS = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, iS = {
  "--select-scroller-background": "#303030"
}, lS = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, sS = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, uS = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, dS = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, vS = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, fS = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, cS = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, mS = {
  "--tabs-background": "#1e1e1e"
}, pS = {
  "--app-bar-color": "#272727"
}, hS = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, gS = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, yS = {
  "--menu-background-color": "#272727"
}, bS = {
  "--breadcrumb-inactive-color": "#aaa"
}, wS = {
  "--paper-background": "#303030"
}, CS = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, SS = {
  "--link-default-color": "#fff"
}, kS = {
  "--progress-label-color": "#fff"
}, $S = {
  "--options-text-color": "#fff"
}, TS = {
  "--countdown-text-color": "#fff"
}, PS = {
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
const OS = Ii({
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
}, WC, qC, GC, fS, JC, lS, mS, dS, nS, QC, FC, KC, jC, cS, ZC, aS, uS, sS, eS, vS, xC, iS, tS, XC, _C, rS, pS, hS, gS, yS, oS, bS, wS, CS, SS, kS, $S, TS, PS);
var VS = {
  dark: OS
}, E$ = null;
const Mi = VS;
var Sr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], dr = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ks = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function IS(e) {
  return ["ampm", "24hr"].includes(e);
}
var MS = {
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
    validator: IS
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
}, Uv = (e, r) => e === "24hr" || r === "am", il = (e, r, n) => {
  var a = Sr.findIndex((o) => R(o) === R(n)), t = Uv(e, r) ? n : dr[a];
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
}, Yv = (e) => {
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
      hour: b,
      minute: y
    } = cr(i);
    f = b === v && a > y;
  }
  if (!i && s) {
    var {
      hour: p,
      minute: w
    } = cr(s);
    f = p === v && a < w;
  }
  if (i && s) {
    var {
      hour: O,
      minute: P
    } = cr(i), {
      hour: S,
      minute: I
    } = cr(s);
    f = S === v && a < I || O === v && a > P;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, Hv = (e) => {
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
  } = il(t, o, l), m = !1, b = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: p,
      second: w
    } = cr(s);
    m = y === f && p < i || p === i && a > w;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: P,
      second: S
    } = cr(u);
    m = O === f && P > i || P === i && a > S;
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
  return (r = e.allowedTime) != null && r.seconds && (b = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || b;
}, {
  n: BS,
  classes: ES
} = te("time-picker");
function NS(e, r) {
  return h(), T(
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
    ), (h(!0), T(
      Me,
      null,
      We(e.timeScales, (n, a) => (h(), T(
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
    )), e.format === "24hr" && e.type === "hour" ? (h(), T(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), T(
        Me,
        null,
        We(e.hours24, (n, a) => (h(), T(
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
var Fv = ne({
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
        var p = e.rad / 30;
        return p >= 0 ? p : p + 12;
      }
    }), s = L(() => e.type === "hour" ? Sr : ks), u = (p, w) => {
      var O;
      p = (O = p) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var P = e.type === "minute" ? Yv : Hv, S = {
        time: R(p),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: R(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(S, "minute"), P(S);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var p = e.isInner ? dr[i.value] : s.value[i.value];
      return s.value === ks ? u() ? "#bdbdbd" : e.color : f(p) ? "#bdbdbd" : e.color;
    }, v = (p, w) => w ? i.value === p && e.isInner : i.value === p && (!e.isInner || e.type !== "hour"), f = (p) => {
      if (e.type === "hour") {
        if (Uv(e.format, e.ampm))
          return t.value.includes(p);
        var w = Sr.findIndex((O) => O === p);
        return o.value.includes(w);
      }
      return u(p, !0);
    }, m = (p, w, O) => {
      var P = 2 * Math.PI / 12 * p - Math.PI / 2, S = 50 * (1 + Math.cos(P)), I = 50 * (1 + Math.sin(P)), V = () => v(p, O) ? f(w) ? {
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
    }, b = () => {
      var {
        width: p,
        height: w
      } = Qe(a.value);
      return {
        width: p,
        height: w
      };
    }, y = () => {
      if (i.value !== void 0) {
        var p = e.ampm === "am" ? Sr : dr;
        return kn(p[i.value], 2, "0");
      }
    };
    return de([i, () => e.isInner], (p, w) => {
      var [O, P] = p, [S, I] = w, V = O === S && P === I;
      if (!(V || e.type !== "hour" || i.value === void 0)) {
        var N = P ? dr[i.value] : y(), g = e.useSeconds ? ":" + e.time.second : "", k = N + ":" + e.time.minute + g;
        e.preventNextUpdate || n("update", k), n("change-prevent-update");
      }
    }), de(() => e.rad, (p, w) => {
      if (!(e.type === "hour" || p === void 0 || w === void 0)) {
        var O = p / 6 >= 0 ? p / 6 : p / 6 + 60, P = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (O !== P) {
          var S, {
            hourStr: I
          } = il(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var V = fe().minute(O).format("mm"), N = e.useSeconds ? ":" + e.time.second : "";
            S = I + ":" + V + N;
          }
          if (e.type === "second") {
            var g = fe().second(O).format("ss"), k = e.useSeconds ? ":" + g : "";
            S = I + ":" + e.time.minute + k;
          }
          n("update", S);
        }
      }
    }), de([() => e.max, () => e.min, () => e.allowedTime], (p) => {
      var [w, O, P] = p;
      if (t.value = [], w && !O) {
        var {
          hour: S
        } = cr(w), I = Sr.filter((D) => R(D) > S), V = dr.filter((D) => R(D) > S);
        t.value = [...I, ...V];
      }
      if (!w && O) {
        var {
          hour: N
        } = cr(O), g = Sr.filter((D) => R(D) < N), k = dr.filter((D) => R(D) < N);
        t.value = [...g, ...k];
      }
      if (w && O) {
        var {
          hour: Y
        } = cr(w), {
          hour: M
        } = cr(O), F = Sr.filter((D) => R(D) < M || R(D) > Y), X = dr.filter((D) => R(D) < M || R(D) > Y);
        t.value = [...F, ...X];
      }
      if (P != null && P.hours) {
        var {
          hours: A
        } = P, z = Sr.filter((D) => !A(R(D))), B = dr.filter((D) => !A(R(D)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...z, ...B])];
      }
      o.value = t.value.map((D) => dr.findIndex((ae) => D === ae)).filter((D) => D >= 0);
    }, {
      immediate: !0
    }), {
      n: BS,
      classes: ES,
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
Fv.render = NS;
const DS = Fv;
var {
  n: AS,
  classes: zS
} = te("time-picker"), LS = (e) => (gn(""), e = e(), yn(), e), RS = /* @__PURE__ */ LS(() => /* @__PURE__ */ E(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), US = {
  key: 0
};
function YS(e, r) {
  var n = se("clock");
  return h(), T(
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
        ), RS, E(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          le(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), T("span", US, ":")) : ee("v-if", !0), e.useSeconds ? (h(), T(
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
      ), e.format === "ampm" ? (h(), T(
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
          default: me(() => [(h(), Ce(n, {
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
var jv = ne({
  name: "VarTimePicker",
  components: {
    Clock: DS
  },
  props: MS,
  setup(e) {
    var r = $(null), n = $(null), a = $(null), t = $(!1), o = $(!1), l = $(!1), i = $(!1), s = $(!1), u = $(void 0), d = $(0), v = $(0), f = $("hour"), m = $("am"), b = $(!1), y = $(!1), p = $({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ye({
      x: 0,
      y: 0
    }), O = Ye({
      x: [],
      y: []
    }), P = L(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (G) => {
      C(e["onUpdate:modelValue"], G), C(e.onChange, G);
    }, I = (G) => G * 57.29577951308232, V = (G) => {
      i.value = !1, y.value = !1, f.value = G;
    }, N = (G) => {
      var {
        disableHour: x
      } = a.value, Z = Sr.findIndex((oe) => R(oe) === R(p.value.hour)), J = G === "am" ? Sr : dr, Q = [...J.slice(Z), ...J.slice(0, Z)];
      return Q.find((oe, ce) => (o.value = ce !== 0, !x.includes(oe)));
    }, g = (G) => {
      if (!e.readonly) {
        m.value = G;
        var x = N(G);
        if (x) {
          var Z = e.useSeconds ? ":" + p.value.second : "", J = kn(x, 2, "0") + ":" + p.value.minute + Z;
          S(J);
        }
      }
    }, k = (G, x) => {
      var Z = G >= O.x[0] && G <= O.x[1], J = x >= O.y[0] && x <= O.y[1];
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
      var Q = Math.round(Z / 30) * 30 + 90, oe = M(Q), ce = t.value ? Sr[oe] : dr[oe];
      if (J.includes(ce) || (t.value = e.format === "24hr" ? k(G, x) : !1), t.value === l.value) {
        var ke = t.value || m.value === "pm" ? dr[oe] : Sr[oe];
        b.value = J.includes(ke), !b.value && (u.value = Q, i.value = !0);
      }
    }, A = (G) => {
      var {
        disableHour: x
      } = a.value, Z = Math.round(G / 6) * 6 + 90, J = Z / 6 >= 0 ? Z / 6 : Z / 6 + 60, Q = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: p.value.hour,
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      };
      y.value = Yv(Q), !y.value && (d.value = Z, s.value = !0);
    }, z = (G) => {
      var {
        disableHour: x
      } = a.value, Z = Math.round(G / 6) * 6 + 90, J = Z / 6 >= 0 ? Z / 6 : Z / 6 + 60, Q = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: p.value.hour,
        minute: R(p.value.minute),
        max: e.max,
        min: e.min,
        disableHour: x,
        allowedTime: e.allowedTime
      };
      Hv(Q) || (v.value = Z);
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
        O.x = [Q, oe], O.y = [ce, ke];
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
        u.value = (Q === "12" ? 0 : R(Q)) * 30, d.value = R(ce) * 6, v.value = R(ke) * 6, p.value = Y(G), e.format !== "24hr" && (m.value = kn("" + x, 2, "0") === oe && dr.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && dr.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: AS,
      classes: zS,
      getRad: P,
      time: p,
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
      formatElevation: pr
    };
  }
});
jv.render = YS;
const bt = jv;
ie(bt);
var N$ = bt, HS = {
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
  n: FS,
  classes: jS
} = te("uploader"), WS = 0, GS = ["onClick"], qS = ["onClick"], XS = ["src", "alt"], KS = ["multiple", "accept", "capture", "disabled"], ZS = ["src"];
function JS(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = se("var-popup"), l = Ae("ripple"), i = Ae("hover");
  return h(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [E(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), T(
        Me,
        null,
        We(e.files, (s) => Te((h(), T("div", {
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
        ), e.removable ? (h(), T("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: Tr((u) => e.handleRemove(s), ["stop"])
        }, [_(n, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, qS)) : ee("v-if", !0), s.cover ? (h(), T("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: q({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, XS)) : ee("v-if", !0), E(
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
        )], 10, GS)), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Te((h(), T(
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
        }, null, 42, KS), j(e.$slots, "default", {}, () => [_(n, {
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
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), T("video", {
          key: 0,
          class: c(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, ZS)) : ee("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var Wv = ne({
  name: "VarUploader",
  directives: {
    Ripple: Ke,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarPopup: Ur,
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  props: HS,
  setup(e) {
    var r = $(null), n = $(!1), a = $(null), t = L(() => {
      var {
        maxlength: D,
        modelValue: {
          length: ae
        }
      } = e;
      return nr(D) ? ae + " / " + D : "";
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
    } = Xr(), m = L(() => {
      var {
        modelValue: D,
        hideList: ae
      } = e;
      return ae ? [] : D;
    }), b = (D) => {
      var {
        disabled: ae,
        readonly: H,
        previewed: G
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || ae || H || !G)) {
        var {
          url: x
        } = D;
        if (Ge(x) && vl(x)) {
          Lr(x);
          return;
        }
        Ge(x) && fl(x) && (a.value = D, n.value = !0);
      }
    }, y = (D) => ({
      id: WS++,
      url: "",
      cover: "",
      name: D.name,
      file: D,
      progress: 0
    }), p = (D) => {
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
    }), O = (D) => D.map(w), P = (D) => {
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
          var ke = (He) => He.filter((qe) => qe.file.size > R(H) ? (C(Z, Ye(qe)), !1) : !0), Ie = (He) => {
            var qe = Math.min(He.length, R(G) - x.length);
            return He.slice(0, qe);
          }, W = /* @__PURE__ */ function() {
            var He = Uo(function* (qe) {
              if (!Q)
                return qe;
              var ve = Wt(Q);
              for (var Se of ve)
                qe = yield Se(qe);
              return qe;
            });
            return function(ve) {
              return He.apply(this, arguments);
            };
          }(), re = p(ae), ue = re.map(y);
          ue = yield W(ue), ue = H != null ? ke(ue) : ue, ue = G != null ? Ie(ue) : ue;
          var be = yield Promise.all(O(ue)), Ue = yield Promise.all(P(be)), Le = Ue.filter((He) => {
            var {
              valid: qe
            } = He;
            return qe;
          }).map((He) => {
            var {
              varFile: qe
            } = He;
            return qe;
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
      n: FS,
      classes: jS,
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
      isHTMLSupportVideo: fl,
      isHTMLSupportImage: vl,
      preview: b,
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
Wv.render = JS;
const wt = Wv;
ie(wt);
var D$ = wt, QS = {
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
function Ps(e) {
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
  n: _S,
  classes: xS
} = te("watermark"), ek = {
  ref: "svgRef"
}, rk = ["viewBox", "width", "height"], nk = ["width", "height"], ak = ["href", "xlink:href", "x", "y", "width", "height"];
function tk(e, r) {
  return h(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default"), (h(), Ce(Jr, {
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
        ek,
        [(h(), T("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 0 " + (e.width + e.gapX) + " " + (e.height + e.gapY),
          width: "" + (e.width + e.gapX),
          height: "" + (e.height + e.gapY),
          style: q({
            padding: "0 " + e.gapX + "px " + e.gapY + "px 0",
            opacity: e.opacity
          })
        }, [e.showContent() ? (h(), T("foreignObject", {
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
        )], 8, nk)) : ee("v-if", !0), !e.$slots.content && e.image ? (h(), T("image", {
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
        }, null, 12, ak)) : ee("v-if", !0)], 12, rk))],
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
var Gv = ne({
  name: "VarWatermark",
  props: QS,
  setup(e, r) {
    var {
      slots: n
    } = r, a = $(""), t = $(""), o = $(""), l = $(null), i = $(null), s = () => !!(n.content || e.content && !e.image), u = /* @__PURE__ */ function() {
      var m = Ps(function* () {
        return new Promise((b) => {
          var y = document.createElement("canvas"), p = y.getContext("2d"), w = new Image();
          w.crossOrigin = "anonymous", w.referrerPolicy = "no-referrer", w.src = e.image, w.onload = () => {
            y.width = w.width, y.height = w.height, p.drawImage(w, 0, 0), b(y.toDataURL());
          };
        });
      });
      return function() {
        return m.apply(this, arguments);
      };
    }(), d = (m) => {
      var b = new Blob([m], {
        type: "image/svg+xml"
      });
      return URL.createObjectURL(b);
    }, v = () => {
      a.value && URL.revokeObjectURL(a.value);
    }, f = /* @__PURE__ */ function() {
      var m = Ps(function* () {
        o.value = En(i.value).color, e.image && (t.value = yield u()), yield ze(), v(), a.value = d(l.value.innerHTML);
      });
      return function() {
        return m.apply(this, arguments);
      };
    }();
    return de(() => [e.image, e.font, e.content, e.height, e.width, e.rotate, e.gapX, e.gapY, e.offsetX, e.offsetY, e.opacity], f, {
      deep: !0
    }), St(f), kt(v), {
      n: _S,
      classes: xS,
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
Gv.render = tk;
const Ct = Gv;
ie(Ct);
var A$ = Ct;
const ok = "2.14.2";
function ik(e) {
  qr.install && e.use(qr), ba.install && e.use(ba), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), Hn.install && e.use(Hn), $a.install && e.use($a), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), vr.install && e.use(vr), Va.install && e.use(Va), Ia.install && e.use(Ia), Fn.install && e.use(Fn), jn.install && e.use(jn), Ma.install && e.use(Ma), Wn.install && e.use(Wn), Ba.install && e.use(Ba), Ea.install && e.use(Ea), Na.install && e.use(Na), yr.install && e.use(yr), Da.install && e.use(Da), za.install && e.use(za), La.install && e.use(La), Kr.install && e.use(Kr), Ra.install && e.use(Ra), Xn.install && e.use(Xn), Ha.install && e.use(Ha), Fa.install && e.use(Fa), Pn.install && e.use(Pn), ar.install && e.use(ar), Ar.install && e.use(Ar), wr.install && e.use(wr), Ne.install && e.use(Ne), ja.install && e.use(ja), Lr.install && e.use(Lr), Wa.install && e.use(Wa), Ga.install && e.use(Ga), Qn.install && e.use(Qn), wa.install && e.use(wa), qa.install && e.use(qa), Xa.install && e.use(Xa), cn.install && e.use(cn), ki.install && e.use(ki), Xo.install && e.use(Xo), Mn.install && e.use(Mn), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), Qa.install && e.use(Qa), Bn.install && e.use(Bn), Ur.install && e.use(Ur), _a.install && e.use(_a), xa.install && e.use(xa), et.install && e.use(et), rt.install && e.use(rt), nt.install && e.use(nt), at.install && e.use(at), Ke.install && e.use(Ke), tt.install && e.use(tt), ot.install && e.use(ot), it.install && e.use(it), lt.install && e.use(lt), Vi.install && e.use(Vi), ut.install && e.use(ut), dt.install && e.use(dt), vt.install && e.use(vt), In.install && e.use(In), ft.install && e.use(ft), On.install && e.use(On), Vn.install && e.use(Vn), ct.install && e.use(ct), mt.install && e.use(mt), pt.install && e.use(pt), ht.install && e.use(ht), gt.install && e.use(gt), yt.install && e.use(yt), Mi.install && e.use(Mi), bt.install && e.use(bt), Jn.install && e.use(Jn), wt.install && e.use(wt), Ct.install && e.use(Ct);
}
const z$ = {
  version: ok,
  install: ik,
  ActionSheet: qr,
  AppBar: ba,
  Avatar: Ca,
  AvatarGroup: Sa,
  BackTop: ka,
  Badge: Hn,
  BottomNavigation: $a,
  BottomNavigationItem: Ta,
  Breadcrumb: Pa,
  Breadcrumbs: Oa,
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
  Context: yr,
  Countdown: Da,
  Counter: za,
  DatePicker: La,
  Dialog: Kr,
  Divider: Ra,
  Drag: Xn,
  Ellipsis: Ha,
  Fab: Fa,
  Form: Pn,
  FormDetails: ar,
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
  Swipe: On,
  SwipeItem: Vn,
  Switch: ct,
  Tab: mt,
  TabItem: pt,
  Table: ht,
  Tabs: gt,
  TabsItems: yt,
  Themes: Mi,
  TimePicker: bt,
  Tooltip: Jn,
  Uploader: wt,
  Watermark: Ct
};
export {
  qr as ActionSheet,
  ba as AppBar,
  Ca as Avatar,
  Sa as AvatarGroup,
  ka as BackTop,
  Hn as Badge,
  $a as BottomNavigation,
  Ta as BottomNavigationItem,
  Pa as Breadcrumb,
  Oa as Breadcrumbs,
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
  yr as Context,
  Da as Countdown,
  za as Counter,
  La as DatePicker,
  Kr as Dialog,
  Ra as Divider,
  Xn as Drag,
  Ha as Ellipsis,
  Fa as Fab,
  Pn as Form,
  ar as FormDetails,
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
  On as Swipe,
  Vn as SwipeItem,
  ct as Switch,
  mt as Tab,
  pt as TabItem,
  ht as Table,
  gt as Tabs,
  yt as TabsItems,
  Mi as Themes,
  bt as TimePicker,
  Jn as Tooltip,
  wt as Uploader,
  Ct as Watermark,
  ck as _ActionSheetComponent,
  mk as _AppBarComponent,
  hk as _AvatarComponent,
  gk as _AvatarGroupComponent,
  Sk as _BackTopComponent,
  kk as _BadgeComponent,
  $k as _BottomNavigationComponent,
  Tk as _BottomNavigationItemComponent,
  Pk as _BreadcrumbComponent,
  Ok as _BreadcrumbsComponent,
  Ck as _ButtonComponent,
  Vk as _ButtonGroupComponent,
  Ik as _CardComponent,
  Mk as _CellComponent,
  Ek as _CheckboxComponent,
  Nk as _CheckboxGroupComponent,
  Dk as _ChipComponent,
  Ak as _ColComponent,
  zk as _CollapseComponent,
  Lk as _CollapseItemComponent,
  sk as _ContextComponent,
  Rk as _CountdownComponent,
  Uk as _CounterComponent,
  Yk as _DatePickerComponent,
  Hk as _DialogComponent,
  Fk as _DividerComponent,
  jk as _DragComponent,
  Gk as _EllipsisComponent,
  qk as _FabComponent,
  Xk as _FormComponent,
  Bk as _FormDetailsComponent,
  wk as _HoverComponent,
  bk as _HoverOverlayComponent,
  vk as _IconComponent,
  Kk as _ImageComponent,
  Qk as _ImagePreviewComponent,
  xk as _IndexAnchorComponent,
  e$ as _IndexBarComponent,
  r$ as _InputComponent,
  pk as _LazyComponent,
  n$ as _LinkComponent,
  a$ as _ListComponent,
  t$ as _LoadingBarComponent,
  yk as _LoadingComponent,
  fk as _LocaleComponent,
  o$ as _MenuComponent,
  i$ as _OptionComponent,
  l$ as _OverlayComponent,
  s$ as _PaginationComponent,
  u$ as _PaperComponent,
  d$ as _PickerComponent,
  dk as _PopupComponent,
  v$ as _ProgressComponent,
  f$ as _PullRefreshComponent,
  c$ as _RadioComponent,
  m$ as _RadioGroupComponent,
  p$ as _RateComponent,
  h$ as _ResultComponent,
  uk as _RippleComponent,
  g$ as _RowComponent,
  y$ as _SelectComponent,
  b$ as _SkeletonComponent,
  w$ as _SliderComponent,
  C$ as _SnackbarComponent,
  S$ as _SpaceComponent,
  k$ as _StepComponent,
  $$ as _StepsComponent,
  _k as _StickyComponent,
  T$ as _StyleProviderComponent,
  Zk as _SwipeComponent,
  Jk as _SwipeItemComponent,
  P$ as _SwitchComponent,
  O$ as _TabComponent,
  V$ as _TabItemComponent,
  I$ as _TableComponent,
  M$ as _TabsComponent,
  B$ as _TabsItemsComponent,
  E$ as _ThemesComponent,
  N$ as _TimePickerComponent,
  Wk as _TooltipComponent,
  D$ as _UploaderComponent,
  A$ as _WatermarkComponent,
  Uf as actionSheetProps,
  Yi as add,
  qf as appBarProps,
  gc as avatarGroupProps,
  vc as avatarProps,
  Kc as backTopProps,
  em as badgeProps,
  dm as bottomNavigationItemProps,
  tm as bottomNavigationProps,
  hm as breadcrumbProps,
  Sm as breadcrumbsProps,
  Hc as buttonProps,
  Nm as cardProps,
  Um as cellProps,
  np as checkboxGroupProps,
  Km as checkboxProps,
  sp as chipProps,
  mp as colProps,
  $p as collapseItemProps,
  wp as collapseProps,
  Vp as countdownProps,
  $h as counterProps,
  Gh as datePickerProps,
  z$ as default,
  Ze as defaultLazyOptions,
  sg as dialogProps,
  cg as dividerProps,
  gg as dragProps,
  Zs as enUS,
  jm as formDetailsProps,
  qy as formProps,
  Xs as iconProps,
  eu as imageCache,
  cb as imagePreviewProps,
  Qy as imageProps,
  Pb as indexAnchorProps,
  Mb as indexBarProps,
  Hb as inputProps,
  ik as install,
  Jb as linkProps,
  e0 as listProps,
  u0 as loadingBarProps,
  on as loadingProps,
  C0 as menuProps,
  Qs as merge,
  O0 as optionProps,
  B0 as overlayProps,
  _e as pack,
  Js as packs,
  N0 as paginationProps,
  R0 as paperProps,
  F0 as pickerProps,
  Vt as popupProps,
  x0 as progressProps,
  i1 as pullRefreshProps,
  h1 as radioGroupProps,
  u1 as radioProps,
  w1 as rateProps,
  $1 as resultProps,
  dw as rowProps,
  pw as selectProps,
  ww as skeletonProps,
  Tw as sliderProps,
  Sv as snackbarProps,
  Zw as spaceProps,
  _w as stepProps,
  iC as stepsProps,
  Zt as stickyProps,
  uC as styleProviderProps,
  Bd as swipeProps,
  fC as switchProps,
  $C as tabItemProps,
  bC as tabProps,
  VC as tableProps,
  RC as tabsItemsProps,
  DC as tabsProps,
  MS as timePickerProps,
  My as tooltipProps,
  HS as uploaderProps,
  Hi as use,
  Xr as useHoverOverlay,
  Ui as useLocale,
  ok as version,
  Ri as zhCN
};
