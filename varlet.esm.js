import { reactive as Ye, onMounted as St, nextTick as ze, onActivated as pn, isRef as Wv, watch as de, onBeforeUnmount as so, onDeactivated as xn, unref as ua, onUnmounted as kt, inject as Gv, getCurrentInstance as ea, computed as A, provide as qv, isVNode as $t, ref as T, Comment as Xv, Fragment as Be, createApp as Kv, h as Os, onBeforeMount as Zv, defineComponent as ne, createVNode as _, Teleport as Jr, Transition as Fe, withDirectives as Te, vShow as Rr, mergeProps as De, openBlock as p, createBlock as Ce, resolveDynamicComponent as ra, normalizeClass as c, normalizeStyle as G, resolveComponent as le, resolveDirective as Ae, withCtx as me, createElementVNode as N, renderSlot as F, toDisplayString as ie, createElementBlock as O, renderList as We, createCommentVNode as ee, onUpdated as Tt, createTextVNode as $e, pushScopeId as gn, popScopeId as bn, withModifiers as Tr, normalizeProps as Ot, guardReactiveProps as uo, vModelText as Jv, createSlots as Jt, withKeys as ll, toRaw as sl, TransitionGroup as Qv } from "vue";
var Ps = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, aS = Ye(Ps);
const br = Ye(Ps), Je = (e) => typeof e == "string", Ni = (e) => typeof e == "boolean", cr = (e) => typeof e == "number", Di = (e) => Object.prototype.toString.call(e) === "[object Object]", _v = (e) => typeof e == "object" && e !== null, na = (e) => typeof e == "function", Ie = (e) => Array.isArray(e), xv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Ai = (e) => e === window, z = (e) => e == null ? 0 : Je(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ni(e) ? Number(e) : e, Qt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, zi = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, aa = () => typeof window < "u", ul = (e) => [...new Set(e)], Is = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), ef = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), rf = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Wt = (e) => Ie(e) ? e : [e], dn = (e, r, n) => Math.min(n, Math.max(r, e)), nf = (e, r) => dn(e, 0, r.length - 1);
var dl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), vl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), af = (e) => {
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
}, Ho = (e) => e, fl = (e) => Math.pow(e, 3), Ms = (e) => e < 0.5 ? fl(e * 2) / 2 : 1 - fl((1 - e) * 2) / 2, vo = (e, r) => e ?? r, Bs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, kn = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Or(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function cl(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
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
function Vn(e) {
  return window.getComputedStyle(e);
}
function Qe(e) {
  if (Ai(e)) {
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
    return Fo({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function tf(e) {
  var {
    left: r
  } = Qe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ml(e) {
  var {
    top: r
  } = Qe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pa(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Li(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function of(e) {
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
function Eo(e) {
  var {
    transform: r
  } = Vn(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function vn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = Vn(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function lf(e) {
  for (var r = [], n = e; !Ai(n); )
    n = vn(n), r.push(n);
  return r;
}
function Es(e, r) {
  if (Je(e)) {
    var n = document.querySelector(e);
    return n || Or(r, "target element cannot found"), n;
  }
  if (_v(e))
    return e;
  Or(r, 'type of prop "target" should be a selector or an element object');
}
function sf() {
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
var Vs = (e) => Je(e) && e.endsWith("rem"), uf = (e) => Je(e) && e.endsWith("em") && !e.endsWith("rem"), df = (e) => Je(e) && e.endsWith("px") || cr(e), vf = (e) => Je(e) && e.endsWith("%"), Ns = (e) => Je(e) && e.endsWith("vw"), Ds = (e) => Je(e) && e.endsWith("vh"), As = (e) => Je(e) && e.endsWith("vmin"), zs = (e) => Je(e) && e.endsWith("vmax"), ff = (e) => Je(e) && e.startsWith("calc("), cf = (e) => Je(e) && e.startsWith("var("), Re = (e) => {
  if (cr(e))
    return e;
  if (df(e))
    return +e.replace("px", "");
  if (!aa())
    return 0;
  var {
    vw: r,
    vh: n,
    vMin: a,
    vMax: t
  } = sf();
  if (Ns(e))
    return +e.replace("vw", "") * r / 100;
  if (Ds(e))
    return +e.replace("vh", "") * n / 100;
  if (As(e))
    return +e.replace("vmin", "") * a / 100;
  if (zs(e))
    return +e.replace("vmax", "") * t / 100;
  if (Vs(e)) {
    var o = +e.replace("rem", ""), l = Vn(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return Je(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return vf(e) || Ns(e) || Ds(e) || uf(e) || Vs(e) || ff(e) || cf(e) || As(e) || zs(e) ? e : Re(e) + "px";
}, sr = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = we(e), a = n.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function Sr(e) {
  var r = Bs();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function hl(e) {
  var r = Bs();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function fo(e) {
  Sr(() => {
    Sr(e);
  });
}
function Dr() {
  return new Promise((e) => {
    Sr(() => {
      Sr(e);
    });
  });
}
function mf() {
  return new Promise((e) => {
    Sr(e);
  });
}
function ga(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = pa(e), s = Li(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (n - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), Sr(d);
      } else
        e.scrollTo(a, n), u();
    };
    Sr(d);
  });
}
function Ls(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + ef(a);
    return r[o] = t, r;
  }, {});
}
function hf() {
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
  Wv(e) && (v = de(() => e.value, (m, y) => {
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
function Rs(e, r, n) {
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
var pf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function gf(e) {
  const r = ea();
  return e in r.provides;
}
function or(e) {
  if (!gf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = Gv(e), { childInstances: n, collect: a, clear: t } = r, o = pf(r, ["childInstances", "collect", "clear"]), l = ea();
  return {
    index: A(() => n.indexOf(l)),
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
function bf(e) {
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
  const r = ea(), n = Ye([]), a = [], t = A(() => n.length), o = () => {
    const u = bf(r.subTree);
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
      qv(e, Object.assign({
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
function yf(e, r) {
  const n = T(!1);
  return de(e, (a) => {
    r === a && (n.value = !0);
  }, { immediate: !0 }), n;
}
function wf(e, r) {
  if (e > r)
    return "horizontal";
  if (r > e)
    return "vertical";
}
function mo() {
  const e = T(0), r = T(0), n = T(0), a = T(0), t = T(0), o = T(0), l = T(0), i = T(0), s = T(0), u = T(0), d = T(), v = T(!1), f = T(0), m = T(0), y = () => {
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
      const { clientX: k, clientY: S } = P.touches[0];
      e.value = k, r.value = S, l.value = k, i.value = S, v.value = !0, f.value = performance.now();
    },
    moveTouch: (P) => {
      const { clientX: k, clientY: S } = P.touches[0];
      n.value = k - e.value, a.value = S - r.value, t.value = Math.abs(n.value), o.value = Math.abs(a.value), m.value = Math.sqrt(t.value ** 2 + o.value ** 2), s.value = k - l.value, u.value = S - i.value, d.value || (d.value = wf(t.value, o.value)), l.value = k, i.value = S;
    },
    endTouch: () => {
      v.value = !1;
    }
  };
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
function gl(e) {
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
function xe(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function oe(e, r) {
  var n = r ?? e;
  return n.install = function(a) {
    var {
      name: t
    } = e;
    t && a.component(t, e);
  }, n;
}
function Cf(e) {
  var r = Kv(e), n = document.createElement("div");
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
      return () => Os(e, jo({}, r, n));
    }
  }, {
    unmount: t
  } = Cf(a);
  return {
    unmountInstance: t
  };
}
function Us(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Xv) {
      if (n.type === Be && Ie(n.children)) {
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
  var e = T(""), r = /* @__PURE__ */ function() {
    var t = gl(function* (o, l, i) {
      if (!Ie(o) || !o.length)
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
    var t = gl(function* (o, l, i, s, u) {
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
function Sf(e) {
  fn(() => window, "hashchange", e), fn(() => window, "popstate", e);
}
function oa() {
  var e = T(!1);
  return pn(() => {
    e.value = !1;
  }), xn(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ae(e) {
  var r = "var", n = r + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", r) : o.startsWith("--") ? "" + n + o : n + "__" + o : n, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Ie(s)) {
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
  if (Ie(e))
    return e.map((t) => t(...n));
  if (e)
    return e(...n);
}
function L(e) {
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
    return A({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : C(e[i], d);
      }
    });
  var u = T(s());
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
  n: Ys
} = ae("ripple"), bl = 250;
function kf(e) {
  var {
    zIndex: r,
    position: n
  } = Vn(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function $f(e, r) {
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
  if (r.removeRipple(), !(r.disabled || r.tasker || !br.enableRipple)) {
    var n = () => {
      r.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = $f(this, e), s = document.createElement("div");
      s.classList.add(Ys()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), kf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function Wo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Ys());
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
function Fs() {
  if (!(!hf() || !br.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function Tf(e, r) {
  var n;
  e._ripple = xt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: Wo.bind(e)
  }), e.addEventListener("touchstart", Hs, {
    passive: !0
  }), e.addEventListener("touchmove", Fs, {
    passive: !0
  }), e.addEventListener("dragstart", Wo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Of(e) {
  e.removeEventListener("touchstart", Hs), e.removeEventListener("touchmove", Fs), e.removeEventListener("dragstart", Wo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Pf(e, r) {
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
var js = {
  mounted: Tf,
  unmounted: Of,
  updated: Pf,
  install(e) {
    e.directive("ripple", this);
  }
}, tS = js;
const Xe = js;
var It = {
  show: Boolean,
  position: {
    type: String,
    default: "center"
  },
  transition: String,
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: String,
  overlayStyle: Object,
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
  safeArea: Boolean,
  safeAreaTop: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  onClickOverlay: L(),
  "onUpdate:show": L(),
  // internal for Dialog
  onRouteChange: L()
};
function Ws() {
  var e = Object.keys(br.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function At(e) {
  br.locks[e] = 1, Ws();
}
function zt(e) {
  delete br.locks[e], Ws();
}
function ho(e, r) {
  var {
    uid: n
  } = ea();
  r && de(r, (a) => {
    a === !1 ? zt(n) : a === !0 && e() === !0 && At(n);
  }), de(e, (a) => {
    r && r() === !1 || (a === !0 ? At(n) : zt(n));
  }), Zv(() => {
    r && r() === !1 || e() === !0 && At(n);
  }), kt(() => {
    r && r() === !1 || e() === !0 && zt(n);
  }), pn(() => {
    r && r() === !1 || e() === !0 && At(n);
  }), xn(() => {
    r && r() === !1 || e() === !0 && zt(n);
  });
}
function Mt(e, r) {
  var n = T(br.zIndex);
  return de(e, (a) => {
    a && (br.zIndex += r, n.value = br.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
  };
}
var Gs = Symbol("POPUP_BIND_POPUP_ITEM_KEY");
function If() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(Gs);
  return {
    index: n,
    popup: r,
    bindPopup: e
  };
}
function Mf() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Gs);
  return {
    length: n,
    popupItems: r,
    bindPopupItems: e
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
function yl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: Br,
  classes: Vo
} = ae("popup");
const Ur = ne({
  name: "VarPopup",
  inheritAttrs: !1,
  props: It,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = yf(() => e.show, !0), {
      zIndex: o
    } = Mt(() => e.show, 3), {
      disabled: l
    } = oa(), {
      bindPopupItems: i
    } = Mf(), s = () => {
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
        class: Vo(Br("overlay"), f),
        style: Go({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => Te(_("div", De({
      class: Vo(Br("content"), Br("--" + e.position), [e.defaultStyle, Br("--content-background-color")], [e.defaultStyle, Br("$-elevation--3")], [e.safeArea, Br("--safe-area")], [e.safeAreaTop, Br("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && C(n.default)]), [[Rr, e.show]]), v = () => {
      var f;
      return _(Fe, {
        name: Br("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Te(_("div", {
          class: Vo(Br("$--box"), Br()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), _(Fe, {
          name: e.transition || Br("$-pop-" + e.position)
        }, yl(f = d()) ? f : {
          default: () => [f]
        })]), [[Rr, e.show]])]
      });
    };
    return ho(() => e.show, () => e.lockScroll), de(() => e.show, (f) => {
      C(f ? e.onOpen : e.onClose);
    }), i({
      show: A(() => e.show)
    }), Sf(() => C(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return _(Jr, {
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
oe(Ur);
var oS = Ur, qs = {
  name: String,
  size: [Number, String],
  color: String,
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  animationClass: String,
  onClick: L()
};
function wl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Bf(e) {
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
var {
  n: Ef,
  classes: Vf
} = ae("icon");
function Nf(e, r) {
  return p(), Ce(ra(e.isURL(e.name) ? "img" : "i"), {
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
  }, null, 8, ["class", "style", "src", "onClick"]);
}
var Xs = ne({
  name: "VarIcon",
  props: qs,
  setup(e) {
    var r = T(""), n = T(!1), a = /* @__PURE__ */ function() {
      var t = Bf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || z(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield ze(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, z(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return de(() => e.name, a, {
      immediate: !0
    }), {
      n: Ef,
      classes: Vf,
      nextName: r,
      animateInProgress: n,
      isURL: xv,
      toNumber: z,
      toSizeUnit: we
    };
  }
});
Xs.render = Nf;
const Ne = Xs;
oe(Ne);
var iS = Ne;
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
var Df = qo({
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
  onSelect: L(),
  "onUpdate:show": L()
}, xe(It, [
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
function Ui() {
  var e = {}, r = T({}), n = (o, l) => {
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
    e[o] = Xo({}, e[o], l), a(o);
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
  add: Yi,
  use: Hi,
  merge: Js
} = Ui();
Yi("zh-CN", Ri);
Hi("zh-CN");
var lS = {
  zhCN: Ri,
  enUS: Ks,
  packs: Zs,
  pack: _e,
  add: Yi,
  use: Hi,
  merge: Js,
  useLocale: Ui
};
const Ko = {
  zhCN: Ri,
  enUS: Ks,
  packs: Zs,
  pack: _e,
  add: Yi,
  use: Hi,
  merge: Js,
  useLocale: Ui
};
var {
  n: Af,
  classes: zf
} = ae("action-sheet"), Lf = ["onClick"];
function Rf(e, r) {
  var n = le("var-icon"), a = le("var-popup"), t = Ae("ripple");
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
    default: me(() => [N(
      "div",
      De({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [F(e.$slots, "title", {}, () => [N(
        "div",
        {
          class: c(e.n("title"))
        },
        ie(e.dt(e.title, e.pack.actionSheetTitle)),
        3
        /* TEXT, CLASS */
      )]), F(e.$slots, "actions", {}, () => [(p(!0), O(
        Be,
        null,
        We(e.actions, (o) => Te((p(), O("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: G({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (p(), Ce(n, {
          key: 0,
          class: c(e.n("action-icon")),
          "var-action-sheet-cover": "",
          name: o.icon,
          size: o.iconSize
        }, null, 8, ["class", "name", "size"])) : ee("v-if", !0), N(
          "div",
          {
            class: c(e.n("action-name"))
          },
          ie(o.name),
          3
          /* TEXT, CLASS */
        )], 14, Lf)), [[t, {
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
var Qs = ne({
  name: "VarActionSheet",
  directives: {
    Ripple: Xe
  },
  components: {
    VarPopup: Ur,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Df,
  setup(e) {
    var r = T(!1), n = (t) => {
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
      n: Af,
      classes: zf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: _e,
      dt: vo,
      handleSelect: n
    };
  }
});
Qs.render = Rf;
const Bt = Qs;
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
var nn, Fi = {};
function Uf(e) {
  return e === void 0 && (e = {}), Zo({}, Fi, e);
}
function qr(e) {
  return aa() ? new Promise((r) => {
    qr.close();
    var n = Ye(Uf(e));
    n.teleport = "body", nn = n;
    var {
      unmountInstance: a
    } = ta(Bt, n, {
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
qr.Component = Bt;
oe(Bt);
oe(Bt, qr);
var sS = Bt, Yf = {
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
  n: Hf,
  classes: Ff
} = ae("app-bar");
function jf(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: G(e.rootStyles)
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
        [F(e.$slots, "left"), e.titlePosition === "left" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [F(e.$slots, "default", {}, () => [$e(
            ie(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [F(e.$slots, "default", {}, () => [$e(
          ie(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0), N(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [F(e.$slots, "default", {}, () => [$e(
            ie(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0), F(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), F(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var _s = ne({
  name: "VarAppBar",
  props: Yf,
  setup(e, r) {
    var {
      slots: n
    } = r, a = T(), t = T(), o = () => {
      a.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }, l = A(() => {
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
      n: Hf,
      classes: Ff,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
_s.render = jf;
const ya = _s;
oe(ya);
var uS = ya;
function Cl(e, r, n, a, t, o, l) {
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
        Cl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Cl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Jo.apply(this, arguments);
}
var Wf = "background-image", Gf = "lazy-loading", qf = "lazy-error", Sl = "lazy-attempt", Xf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Qo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Yn = [], eo = [], xs = af(100), Ke = {
  loading: Qo,
  error: Qo,
  attempt: 3,
  throttleWait: 300,
  events: Xf
}, ji = zi(Et, Ke.throttleWait);
function go(e, r) {
  e._lazy.arg === Wf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Kf(e) {
  e._lazy.loading && go(e, e._lazy.loading), Et();
}
function Zf(e) {
  e._lazy.error && go(e, e._lazy.error), e._lazy.state = "error", Gi(e), Et();
}
function eu(e, r) {
  go(e, r), e._lazy.state = "success", Gi(e), Et();
}
function Jf(e) {
  var r;
  eo.includes(e) || (eo.push(e), (r = Ke.events) == null || r.forEach((n) => {
    e.addEventListener(n, ji, {
      passive: !0
    });
  }));
}
function Qf() {
  eo.forEach((e) => {
    var r;
    (r = Ke.events) == null || r.forEach((n) => {
      e.removeEventListener(n, ji);
    });
  }), eo.length = 0;
}
function _f(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Gf)) != null ? n : Ke.loading,
    error: (a = e.getAttribute(qf)) != null ? a : Ke.error,
    attempt: e.getAttribute(Sl) ? Number(e.getAttribute(Sl)) : Ke.attempt
  };
  e._lazy = Jo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), go(e, Qo), C(Ke.filter, e._lazy);
}
function xf(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, xs.add(r), eu(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Zf(e) : ru(e);
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
    Kf(e), xf(e, r);
  }
}
function Wi(e) {
  return _o.apply(this, arguments);
}
function _o() {
  return _o = po(function* (e) {
    yield Dr(), of(e) && ru(e);
  }), _o.apply(this, arguments);
}
function Et() {
  Yn.forEach((e) => Wi(e));
}
function ec(e) {
  return xo.apply(this, arguments);
}
function xo() {
  return xo = po(function* (e) {
    !Yn.includes(e) && Yn.push(e), lf(e).forEach(Jf), yield Wi(e);
  }), xo.apply(this, arguments);
}
function Gi(e) {
  Qt(Yn, e), Yn.length === 0 && Qf();
}
function rc(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function nu(e, r) {
  return ei.apply(this, arguments);
}
function ei() {
  return ei = po(function* (e, r) {
    _f(e, r), yield ec(e);
  }), ei.apply(this, arguments);
}
function nc(e, r) {
  return ri.apply(this, arguments);
}
function ri() {
  return ri = po(function* (e, r) {
    if (!rc(e, r)) {
      Yn.includes(e) && (yield Wi(e));
      return;
    }
    yield nu(e, r);
  }), ri.apply(this, arguments);
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
  Ke.events = r ?? Ke.events, Ke.loading = n ?? Ke.loading, Ke.error = a ?? Ke.error, Ke.attempt = t ?? Ke.attempt, Ke.throttleWait = o ?? Ke.throttleWait, Ke.filter = l;
}
var au = {
  mounted: nu,
  unmounted: Gi,
  updated: nc,
  install(e, r) {
    ac(r), ji = zi(Et, Ke.throttleWait), e.directive("lazy", this);
  }
}, dS = au;
const wa = au;
var tc = {
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
  onClick: L(),
  onLoad: L(),
  onError: L()
}, oc = (e) => ["mini", "small", "normal", "large"].includes(e), {
  n: ic,
  classes: lc
} = ae("avatar"), sc = ["src", "alt", "lazy-loading", "lazy-error"], uc = ["src", "alt"];
function dc(e, r) {
  var n = Ae("lazy");
  return p(), O(
    "div",
    {
      ref: "avatarElement",
      class: c(e.classes(e.n(), e.n("$--box"), [e.isInternalSize(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: G({
        width: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.isInternalSize(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: r[3] || (r[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), O(
      Be,
      {
        key: 0
      },
      [e.lazy ? Te((p(), O("img", {
        key: 0,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: G({
          objectFit: e.fit
        }),
        "lazy-loading": e.loading,
        "lazy-error": e.error,
        onLoad: r[0] || (r[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        })
      }, null, 46, sc)), [[n, e.src]]) : (p(), O("img", {
        key: 1,
        class: c(e.n("image")),
        src: e.src,
        alt: e.alt,
        style: G({
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
    )) : (p(), O(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: G({
          transform: "scale(" + e.scale + ")"
        })
      },
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var tu = ne({
  name: "VarAvatar",
  directives: {
    Lazy: wa
  },
  props: tc,
  setup(e) {
    var r = T(null), n = T(null), a = T(1), t = () => {
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
      isInternalSize: oc,
      toSizeUnit: we,
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
tu.render = dc;
const Ca = tu;
oe(Ca);
var vS = Ca, vc = {
  offset: [Number, String],
  vertical: Boolean
}, {
  n: fc,
  classes: cc
} = ae("avatar-group");
function mc(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: G(e.rootStyles)
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var ou = ne({
  name: "VarAvatarGroup",
  props: vc,
  setup(e) {
    var r = A(() => e.offset == null ? {} : {
      "--avatar-group-offset": we(e.offset)
    });
    return {
      n: fc,
      classes: cc,
      toSizeUnit: we,
      rootStyles: r
    };
  }
});
ou.render = mc;
const Sa = ou;
oe(Sa);
var fS = Sa, on = {
  type: {
    type: String,
    default: "circle"
  },
  radius: [String, Number],
  size: {
    type: String,
    default: "normal"
  },
  color: String,
  description: String,
  loading: Boolean
}, {
  n: hc,
  classes: pc
} = ae("loading"), gc = (e) => (gn(""), e = e(), bn(), e), bc = /* @__PURE__ */ gc(() => /* @__PURE__ */ N(
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
)), yc = [bc];
function wc(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [F(e.$slots, "default"), e.loading ? (p(), O(
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
    )) : ee("v-if", !0), e.isShow ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [N(
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
      )) : ee("v-if", !0), (p(!0), O(
        Be,
        null,
        We(e.loadingTypeDict, (n, a) => (p(), O(
          Be,
          {
            key: a
          },
          [e.type === a ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), O(
              Be,
              null,
              We(n, (t) => (p(), O(
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
          )) : ee("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
            color: e.color
          })
        },
        [F(e.$slots, "description", {}, () => [$e(
          ie(e.description),
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
var iu = ne({
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
    }, t = A(() => C(n.default) ? e.loading : !0);
    return {
      n: hc,
      classes: pc,
      multiplySizeUnit: sr,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
iu.render = wc;
const cn = iu;
oe(cn);
var cS = cn, Cc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Sc,
  classes: kc
} = ae("hover-overlay");
function $c(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var lu = ne({
  name: "VarHoverOverlay",
  props: Cc,
  setup() {
    return {
      n: Sc,
      classes: kc
    };
  }
});
lu.render = $c;
const yr = lu;
oe(yr);
function Xr() {
  var e = T(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var mS = yr;
function su(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function Tc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[Is(t)] = o, n;
  }, {}) : {};
}
function Oc(e) {
  var {
    value: r
  } = e._hover, n = Tc(e);
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
function Pc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function uu(e) {
  Pc(e), qi(e, e._hover.rawStyle);
}
function du() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, na(e)) {
    e(this._hover.hovering);
    return;
  }
  qi(this, e);
}
function vu() {
  if (this._hover.hovering = !1, na(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  uu(this);
}
function fu(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  su(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, Oc(e), e.addEventListener("mouseenter", du), e.addEventListener("mouseleave", vu));
}
function cu(e, r) {
  su(r.arg) || (uu(e), e.removeEventListener("mouseenter", du), e.removeEventListener("mouseleave", vu));
}
function Ic(e, r) {
  e._hover && cu(e, r);
}
function Mc(e, r) {
  return !na(r.value) && e._hover.hovering;
}
function Bc(e, r) {
  fu(e, r), Mc(e, r) && qi(e, r.value);
}
var mu = {
  mounted: fu,
  unmounted: cu,
  beforeUpdate: Ic,
  updated: Bc,
  install(e) {
    e.directive("hover", this);
  }
}, hS = mu;
const Ar = mu;
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
var Ec = {
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
  loadingColor: ni({}, xe(on, "color"), {
    default: "currentColor"
  }),
  onClick: L(),
  onTouchstart: L()
}, hu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Vc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(hu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function Nc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(hu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Dc,
  classes: Ac
} = ae("button"), zc = ["type", "disabled"];
function Lc(e, r) {
  var n = le("var-loading"), a = le("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return Te((p(), O("button", {
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
  }, [e.loading || e.pending ? (p(), Ce(n, {
    key: 0,
    class: c(e.n("loading")),
    "var-button-cover": "",
    color: e.loadingColor,
    type: e.loadingType,
    size: e.loadingSize,
    radius: e.loadingRadius
  }, null, 8, ["class", "color", "type", "size", "radius"])) : ee("v-if", !0), N(
    "div",
    {
      class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  ), _(a, {
    hovering: e.hovering
  }, null, 8, ["hovering"])], 46, zc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var pu = ne({
  name: "VarButton",
  components: {
    VarLoading: cn,
    VarHoverOverlay: yr
  },
  directives: {
    Ripple: Xe,
    Hover: Ar
  },
  props: Ec,
  setup(e) {
    var r = T(!1), {
      buttonGroup: n
    } = Nc(), {
      hovering: a,
      handleHovering: t
    } = Xr(), o = A(() => {
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
      e.autoLoading && (r.value = !0, u = Ie(u) ? u : [u], Promise.all(u).then(() => {
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
      n: Dc,
      classes: Ac,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
pu.render = Lc;
const dr = pu;
oe(dr);
var pS = dr, Rc = {
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
  onClick: L()
}, {
  n: Uc,
  classes: Yc
} = ae("back-top");
function Hc(e, r) {
  var n = le("var-icon"), a = le("var-button");
  return p(), Ce(Jr, {
    to: "body",
    disabled: e.disabled
  }, [N(
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
    [F(e.$slots, "default", {}, () => [_(a, {
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
var gu = ne({
  name: "VarBackTop",
  components: {
    VarButton: dr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Rc,
  setup(e) {
    var r = T(!1), n = T(null), a = T(!0), t, o = (d) => {
      C(e.onClick, d);
      var v = Li(t);
      ga(t, {
        left: v,
        duration: e.duration,
        animation: Ms
      });
    }, l = zi(() => {
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
      n: Uc,
      classes: Yc,
      handleClick: o
    };
  }
});
gu.render = Hc;
const ka = gu;
oe(ka);
var gS = ka, Fc = {
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
  n: jc,
  classes: Wc
} = ae("badge");
function Gc(e, r) {
  var n = le("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "default"), _(Fe, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: me(() => [Te(N(
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
        }, null, 8, ["class", "name"])) : ee("v-if", !0), F(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), O(
          "span",
          {
            key: 0,
            class: c(e.n("value"))
          },
          ie(e.value),
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
var bu = ne({
  name: "VarBadge",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Fc,
  setup(e) {
    var r = A(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && z(n) > z(a) ? a + "+" : n;
    });
    return {
      n: jc,
      classes: Wc,
      value: r
    };
  }
});
bu.render = Gc;
const Hn = bu;
oe(Hn);
var bS = Hn, qc = {
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
  onChange: L(),
  onBeforeChange: L(),
  onFabClick: L(),
  "onUpdate:active": L()
}, yu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Xc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(yu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: Kc,
  classes: Zc
} = ae("bottom-navigation"), {
  n: bo
} = ae("bottom-navigation-item"), kl = bo("--right-half-space"), $l = bo("--left-half-space"), Tl = bo("--right-space"), Jc = {
  type: "primary"
};
function Qc(e, r) {
  var n = le("var-button");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [F(e.$slots, "default"), e.$slots.fab ? (p(), Ce(n, De({
      key: 0,
      class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
      "var-bottom-navigation__fab": "",
      onClick: e.handleFabClick
    }, e.fabProps, {
      round: ""
    }), {
      default: me(() => [F(e.$slots, "fab")]),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "onClick"])) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var wu = ne({
  name: "VarBottomNavigation",
  components: {
    VarButton: dr
  },
  props: qc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = T(null), t = A(() => e.active), o = A(() => e.activeColor), l = A(() => e.inactiveColor), i = T({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Xc(), v = () => {
      s.value === 0 || f() || m() || y();
    }, f = () => u.find((b) => {
      var {
        name: $
      } = b;
      return t.value === $.value;
    }), m = () => u.find((b) => {
      var {
        index: $
      } = b;
      return t.value === $.value;
    }), y = () => {
      cr(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > s.value - 1 && C(e["onUpdate:active"], s.value - 1));
    }, g = (b) => {
      t.value !== b && (e.onBeforeChange ? h(b) : w(b));
    }, h = (b) => {
      var $ = Wt(C(e.onBeforeChange, b));
      Promise.all($).then((U) => {
        U.every(Boolean) && w(b);
      });
    }, w = (b) => {
      C(e["onUpdate:active"], b), C(e.onChange, b);
    }, P = () => {
      var b = E();
      b.forEach(($) => {
        $.classList.remove(kl, $l, Tl);
      });
    }, k = (b) => {
      var $ = E(), U = $.length, V = b % 2 === 0;
      $.forEach((Y, Z) => {
        S(V, Y, Z, U);
      });
    }, S = (b, $, U, V) => {
      var Y = U === V - 1;
      if (!b && Y) {
        $.classList.add(Tl);
        return;
      }
      var Z = U === V / 2 - 1, te = U === V / 2;
      Z ? $.classList.add(kl) : te && $.classList.add($l);
    }, E = () => Array.from(a.value.querySelectorAll("." + bo())), M = () => {
      C(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: g
    };
    return d(D), de(() => s.value, v), de(() => e.fabProps, (b) => {
      i.value = ai({}, Jc, b);
    }, {
      immediate: !0,
      deep: !0
    }), tr(() => {
      n.fab && k(s.value);
    }), Tt(() => {
      P(), n.fab && k(s.value);
    }), {
      n: Kc,
      classes: Zc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: M,
      fabProps: i
    };
  }
});
wu.render = Qc;
const $a = wu;
oe($a);
var yS = $a, _c = {
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
  onClick: L()
};
function xc() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(yu);
  return n || Or("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: em,
  classes: rm
} = ae("bottom-navigation-item"), nm = {
  type: "danger",
  dot: !0
};
function am(e, r) {
  var n = le("var-icon"), a = le("var-badge"), t = Ae("ripple");
  return Te((p(), O(
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
    [e.icon && !e.$slots.icon ? (p(), Ce(n, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : ee("v-if", !0), F(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), Ce(a, De({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : ee("v-if", !0), N(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (p(), O(
        Be,
        {
          key: 0
        },
        [$e(
          ie(e.label),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      )), F(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var Cu = ne({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Hn,
    VarIcon: Ne
  },
  directives: {
    Ripple: Xe
  },
  props: _c,
  setup(e) {
    var r = A(() => e.name), n = A(() => e.badge), a = T({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = xc(), {
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
      a.value = m === !0 ? nm : n.value;
    }, {
      immediate: !0
    }), {
      n: em,
      classes: rm,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Cu.render = am;
const Ta = Cu;
oe(Ta);
var wS = Ta, tm = {
  separator: String,
  onClick: L()
}, Su = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function om() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ir(Su);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function im() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Su);
  return r || Or("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: lm,
  classes: sm
} = ae("breadcrumb");
function um(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ee("v-if", !0) : F(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [N(
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
var ku = ne({
  name: "VarBreadcrumb",
  props: tm,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = im(), t = A(() => r.value === n.length.value - 1), o = A(() => n.separator.value), l = (i) => {
      t.value || C(e.onClick, i);
    };
    return a(null), {
      n: lm,
      classes: sm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
ku.render = um;
const Oa = ku;
oe(Oa);
var CS = Oa, dm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: vm
} = ae("breadcrumbs");
function fm(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var $u = ne({
  name: "VarBreadcrumbs",
  props: dm,
  setup(e) {
    var r = A(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = om(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: vm
    };
  }
});
$u.render = fm;
const Pa = $u;
oe(Pa);
var SS = Pa, cm = {
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
  n: mm,
  classes: hm
} = ae("button-group");
function pm(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Tu = ne({
  name: "VarButtonGroup",
  props: cm,
  setup(e) {
    var {
      bindButtons: r
    } = Vc(), n = {
      elevation: A(() => e.elevation),
      type: A(() => e.type),
      size: A(() => e.size),
      color: A(() => e.color),
      textColor: A(() => e.textColor),
      mode: A(() => e.mode)
    };
    return r(n), {
      n: mm,
      classes: hm,
      formatElevation: hr
    };
  }
});
Tu.render = pm;
const Ia = Tu;
oe(Ia);
var kS = Ia, gm = {
  src: String,
  fit: {
    type: String,
    default: "cover"
  },
  imageHeight: [String, Number],
  imageWidth: [String, Number],
  outline: Boolean,
  layout: {
    type: String,
    default: "column"
  },
  floating: Boolean,
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: String,
  title: String,
  subtitle: String,
  description: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  ripple: Boolean,
  onClick: L(),
  "onUpdate:floating": L()
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
function Pl(e) {
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
  n: bm,
  classes: ym
} = ae("card"), wm = 500, Cm = ["src", "alt"];
function Sm(e, r) {
  var n = le("var-icon"), a = le("var-button"), t = Ae("ripple");
  return Te((p(), O(
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
    [N(
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
      [F(e.$slots, "image", {}, () => [e.src ? (p(), O("img", {
        key: 0,
        class: c(e.n("image")),
        style: G({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Cm)) : ee("v-if", !0)]), N(
        "div",
        {
          class: c(e.n("container"))
        },
        [F(e.$slots, "title", {}, () => [e.title ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ie(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), F(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ie(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ie(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [F(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), O(
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
          [F(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), O(
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
        [F(e.$slots, "close-button", {}, () => [_(a, {
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
    ), N(
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
var Ou = ne({
  name: "VarCard",
  directives: {
    Ripple: Xe
  },
  components: {
    VarIcon: Ne,
    VarButton: dr
  },
  props: gm,
  setup(e) {
    var r = T(null), n = T(null), a = T("auto"), t = T("auto"), o = T("100%"), l = T("100%"), i = T("auto"), s = T("auto"), u = T(void 0), d = T("hidden"), v = T("0px"), f = T("0"), m = A(() => e.layout === "row"), y = T(!1), g = T(!1), {
      zIndex: h
    } = Mt(() => e.floating, 1);
    ho(() => e.floating, () => !m.value);
    var w = "auto", P = "auto", k = null, S = T(null), E = /* @__PURE__ */ function() {
      var $ = Pl(function* () {
        clearTimeout(S.value), clearTimeout(k), S.value = null, S.value = setTimeout(/* @__PURE__ */ Pl(function* () {
          var {
            width: U,
            height: V,
            left: Y,
            top: Z
          } = Qe(r.value);
          a.value = we(U), t.value = we(V), o.value = a.value, l.value = t.value, i.value = we(Z), s.value = we(Y), u.value = "fixed", w = i.value, P = s.value, y.value = !0, yield Dr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", g.value = !0;
        }), e.ripple ? wm : 0);
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), M = () => {
      clearTimeout(k), clearTimeout(S.value), S.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = P, v.value = "0px", f.value = "0", y.value = !1, k = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", P = "auto", d.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      C(e["onUpdate:floating"], !1);
    }, b = ($) => {
      C(e.onClick, $);
    };
    return de(() => e.floating, ($) => {
      m.value || ze(() => {
        $ ? E() : M();
      });
    }, {
      immediate: !0
    }), {
      n: bm,
      classes: ym,
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
      close: D,
      showFloatingButtons: y,
      floated: g,
      formatElevation: hr,
      handleClick: b
    };
  }
});
Ou.render = Sm;
const Ma = Ou;
oe(Ma);
var $S = Ma, km = {
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
  onClick: L()
}, {
  n: $m,
  classes: Tm
} = ae("cell");
function Om(e, r) {
  var n = le("var-icon"), a = Ae("ripple");
  return Te((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "icon", {}, () => [e.icon ? (p(), O(
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
    )) : ee("v-if", !0)]), N(
      "div",
      {
        class: c(e.n("content"))
      },
      [F(e.$slots, "default", {}, () => [e.title ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ie(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ie(e.description),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [F(e.$slots, "extra")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Pu = ne({
  name: "VarCell",
  components: {
    VarIcon: Ne
  },
  directives: {
    Ripple: Xe
  },
  props: km,
  setup(e) {
    var r = A(() => e.borderOffset == null ? {} : {
      "--cell-border-left": we(e.borderOffset),
      "--cell-border-right": we(e.borderOffset)
    }), n = (a) => {
      C(e.onClick, a);
    };
    return {
      n: $m,
      classes: Tm,
      toSizeUnit: we,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Pu.render = Om;
const Fn = Pu;
oe(Fn);
var TS = Fn, Pm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Im
} = ae("form-details"), Mm = {
  key: 0
}, Bm = {
  key: 0
};
function Em(e, r) {
  return p(), Ce(Fe, {
    name: e.n()
  }, {
    default: me(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (p(), O(
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
        [_(Fe, {
          name: e.n("message")
        }, {
          default: me(() => [e.errorMessage ? (p(), O(
            "div",
            Mm,
            ie(e.errorMessage),
            1
            /* TEXT */
          )) : ee("v-if", !0)]),
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
        [_(Fe, {
          name: e.n("message")
        }, {
          default: me(() => [F(e.$slots, "extra-message", {}, () => [e.extraMessage ? (p(), O(
            "div",
            Bm,
            ie(e.extraMessage),
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
  props: Pm,
  setup: () => ({
    n: Im
  })
});
Iu.render = Em;
const nr = Iu;
oe(nr);
var OS = nr, Vm = {
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
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L(),
  "onUpdate:indeterminate": L()
}, Mu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Nm() {
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
function Dm() {
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
var Bu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Ir() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Bu), a = ea(), t = n ? (o) => {
    n(ti({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: r,
    form: e,
    bindForm: t
  };
}
function Am() {
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
  n: zm,
  classes: Lm
} = ae("checkbox");
function Rm(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ae("hover"), l = Ae("ripple");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [N(
      "div",
      {
        class: c(e.n())
      },
      [Te((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked || e.isIndeterminate, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked || e.isIndeterminate ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.isIndeterminate ? F(e.$slots, "indeterminate-icon", {
          key: 0
        }, () => [_(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "minus-box",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : ee("v-if", !0), e.checked && !e.isIndeterminate ? F(e.$slots, "checked-icon", {
          key: 1
        }, () => [_(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : ee("v-if", !0), !e.checked && !e.isIndeterminate ? F(e.$slots, "unchecked-icon", {
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
      }]]), N(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
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
    Ripple: Xe,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: nr,
    VarHoverOverlay: yr
  },
  props: Vm,
  setup(e) {
    var r = ba(e, "modelValue"), n = A(() => r.value === e.checkedValue), a = A(() => e.checkedValue), t = T(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Dm(), {
      hovering: i,
      handleHovering: s
    } = Xr(), {
      form: u,
      bindForm: d
    } = Ir(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: y
    } = Pr(), g = ba(e, "indeterminate"), h = ($) => {
      ze(() => {
        var {
          validateTrigger: U,
          rules: V,
          modelValue: Y
        } = e;
        f(U, $, V, Y);
      });
    }, w = ($) => {
      var {
        checkedValue: U,
        onChange: V
      } = e;
      r.value = $, g.value = !1, C(V, r.value), h("onChange"), $ === U ? o == null || o.onChecked(U) : o == null || o.onUnchecked(U);
    }, P = ($) => {
      var {
        disabled: U,
        readonly: V,
        checkedValue: Y,
        uncheckedValue: Z,
        onClick: te
      } = e;
      if (!(u != null && u.disabled.value || U) && (C(te, $), !(u != null && u.readonly.value || V))) {
        t.value = !0;
        var se = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && se || w(n.value ? Z : Y);
      }
    }, k = ($) => {
      var {
        checkedValue: U,
        uncheckedValue: V
      } = e;
      r.value = $.includes(U) ? U : V;
    }, S = () => {
      t.value = !1;
    }, E = () => {
      r.value = e.uncheckedValue, y();
    }, M = ($) => {
      var {
        checkedValue: U,
        uncheckedValue: V
      } = e, Y = ![U, V].includes($);
      Y && ($ = n.value ? V : U), w($);
    }, D = () => m(e.rules, e.modelValue), b = {
      checkedValue: a,
      checked: n,
      sync: k,
      validate: D,
      resetValidation: y,
      reset: E,
      resetWithAnimation: S
    };
    return C(l, b), C(d, b), {
      isIndeterminate: g,
      withAnimation: t,
      checked: n,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: zm,
      classes: Lm,
      handleClick: P,
      toggle: M,
      reset: E,
      validate: D,
      resetValidation: y
    };
  }
});
Eu.render = Rm;
const jn = Eu;
oe(jn);
var PS = jn, Um = {
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
  onChange: L(),
  "onUpdate:modelValue": L()
}, {
  n: Ym,
  classes: Hm
} = ae("checkbox-group");
function Fm(e, r) {
  var n = le("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), _(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Vu = ne({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: nr
  },
  props: Um,
  setup(e) {
    var r = A(() => e.max), n = A(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Nm(), {
      bindForm: l
    } = Ir(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Pr(), v = A(() => i.value), f = (D) => {
      ze(() => {
        var {
          validateTrigger: b,
          rules: $,
          modelValue: U
        } = e;
        s(b, D, $, U);
      });
    }, m = (D) => {
      C(e["onUpdate:modelValue"], D), C(e.onChange, D), f("onChange");
    }, y = (D) => {
      var {
        modelValue: b
      } = e;
      b.includes(D) || m([...b, D]);
    }, g = (D) => {
      var {
        modelValue: b
      } = e;
      b.includes(D) && m(b.filter(($) => $ !== D));
    }, h = () => t.forEach((D) => {
      var {
        sync: b
      } = D;
      return b(e.modelValue);
    }), w = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, P = () => {
      var D = t.map(($) => {
        var {
          checkedValue: U
        } = $;
        return U.value;
      }), b = ul(D);
      return w(), C(e["onUpdate:modelValue"], b), b;
    }, k = () => {
      var D = t.filter(($) => {
        var {
          checked: U
        } = $;
        return !U.value;
      }).map(($) => {
        var {
          checkedValue: U
        } = $;
        return U.value;
      }), b = ul(D);
      return w(), C(e["onUpdate:modelValue"], b), b;
    }, S = () => {
      C(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    de(() => e.modelValue, h, {
      deep: !0
    }), de(() => a.value, h);
    var M = {
      max: r,
      checkedCount: n,
      onChecked: y,
      onUnchecked: g,
      validate: E,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return o(M), C(l, M), {
      errorMessage: i,
      n: Ym,
      classes: Hm,
      checkAll: P,
      inverseAll: k,
      reset: S,
      validate: E,
      resetValidation: d
    };
  }
});
Vu.render = Fm;
const Ba = Vu;
oe(Ba);
var IS = Ba, jm = {
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
  iconName: xe(qs, "name"),
  plain: Boolean,
  round: {
    type: Boolean,
    default: !0
  },
  block: Boolean,
  closable: Boolean,
  onClose: L()
}, {
  n: Qr,
  classes: Wm
} = ae("chip");
function Gm(e, r) {
  var n = le("var-icon");
  return p(), Ce(Fe, {
    name: e.n("$-fade")
  }, {
    default: me(() => [N(
      "span",
      De({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [F(e.$slots, "left"), N(
        "span",
        {
          class: c(e.n("text-" + e.size))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      ), F(e.$slots, "right"), e.closable ? (p(), O(
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
var Nu = ne({
  name: "VarChip",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: jm,
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
      } = e, u = Qr(o ? "$--flex" : "$--inline-flex"), d = i ? Qr("plain") + " " + Qr("plain-" + l) : Qr("--" + l), v = s ? Qr("--round") : null;
      return [Qr("--" + t), u, d, v];
    }), a = (t) => {
      C(e.onClose, t);
    };
    return {
      n: Qr,
      classes: Wm,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Nu.render = Gm;
const Wn = Nu;
oe(Wn);
var MS = Wn, qm = {
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
  onClick: L()
}, Du = Symbol("ROW_BIND_COL_KEY");
function Xm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Du);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function Km() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Du);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Lt,
  classes: Zm
} = ae("col");
function Jm(e, r) {
  return p(), O(
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Au = ne({
  name: "VarCol",
  props: qm,
  setup(e) {
    var r = T({
      left: 0,
      right: 0
    }), n = A(() => z(e.span)), a = A(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = Km(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Di(d)) {
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
      classes: Zm,
      padding: r,
      toNumber: z,
      toSizeUnit: we,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: _t
    };
  }
});
Au.render = Jm;
const Ea = Au;
oe(Ea);
var BS = Ea, zu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Qm() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(zu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var _m = {
  modelValue: [Array, String, Number],
  accordion: Boolean,
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
  onChange: L(),
  "onUpdate:modelValue": L()
}, {
  n: xm
} = ae("collapse");
function eh(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Lu = ne({
  name: "VarCollapse",
  props: _m,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = Qm(), t = A(() => e.modelValue), o = A(() => e.offset), l = A(() => e.divider), i = A(() => e.elevation), s = () => !e.accordion && !Ie(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ie(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (g, h) => s() ? h ? e.accordion ? g : [...e.modelValue, g] : e.accordion ? null : e.modelValue.filter((w) => w !== g) : null, d = (g, h) => {
      var w = u(g, h);
      C(e["onUpdate:modelValue"], w), C(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return n.find((h) => {
          var {
            name: w
          } = h;
          return e.modelValue === w.value;
        });
      var g = n.filter((h) => {
        var {
          name: w
        } = h;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return g.length ? g : void 0;
    }, f = () => e.accordion ? n.find((g) => {
      var {
        index: h,
        name: w
      } = g;
      return w.value === void 0 && e.modelValue === h.value;
    }) : n.filter((g) => {
      var {
        index: h,
        name: w
      } = g;
      return w.value === void 0 && e.modelValue.includes(h.value);
    }), m = () => {
      if (s()) {
        var g = v() || f();
        if (e.accordion && !g || !e.accordion && !g.length) {
          n.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        n.forEach((h) => {
          var w = e.accordion ? g === h : g.includes(h);
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
      n: xm,
      divider: l
    };
  }
});
Lu.render = eh;
const Va = Lu;
oe(Va);
var ES = Va;
function rh() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(zu);
  return n || Or("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var nh = {
  name: [String, Number],
  title: String,
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: Boolean
}, {
  n: ah,
  classes: th
} = ae("collapse-item");
function oh(e, r) {
  var n = le("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: G("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
        onClick: r[0] || (r[0] = (a) => e.toggle())
      },
      [N(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [F(e.$slots, "title", {}, () => [$e(
          ie(e.title),
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
        [F(e.$slots, "icon", {}, () => [_(n, {
          name: e.icon,
          transition: 250,
          class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
        }, null, 8, ["name", "class"])])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Te(N(
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
      [N(
        "div",
        {
          class: c(e.n("content-wrap"))
        },
        [F(e.$slots, "default")],
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
var Ru = ne({
  name: "VarCollapseItem",
  components: {
    VarIcon: Ne
  },
  props: nh,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = rh(), t = !0, o = T(null), l = T(!1), i = T(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = A(() => e.name), y = (E, M) => {
      s.value === void 0 || E && Ie(s.value) || M === i.value || (i.value = M, g(!0));
    }, g = (E) => {
      e.disabled || E || f(e.name || r.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, Sr(() => {
        if (o.value) {
          var {
            offsetHeight: E
          } = o.value;
          o.value.style.height = "0px", Sr(() => {
            o.value && (o.value.style.height = E + "px", t && fo(() => {
              t && k();
            }));
          });
        }
      }));
    }, w = () => {
      t = !1;
    }, P = () => {
      if (o.value) {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = E + "px", Sr(() => {
          o.value.style.height = "0px";
        });
      }
    }, k = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, S = {
      index: r,
      name: m,
      init: y
    };
    return a(S), de(i, (E) => {
      E ? h() : P();
    }), {
      n: ah,
      start: w,
      classes: th,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: g,
      contentEl: o,
      transitionend: k,
      formatElevation: hr
    };
  }
});
Ru.render = oh;
const Na = Ru;
oe(Na);
var VS = Na, ih = {
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
  onEnd: L(),
  onChange: L()
}, {
  n: lh
} = ae("countdown"), oi = 1e3, ii = 60 * oi, li = 60 * ii, Il = 24 * li;
function sh(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default", Ot(uo(e.timeData)), () => [$e(
      ie(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Uu = ne({
  name: "VarCountdown",
  props: ih,
  setup(e) {
    var r = T(""), n = T({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (y, g) => {
      var h = Object.values(g), w = ["DD", "HH", "mm", "ss"], P = [24, 60, 60, 1e3];
      if (w.forEach((S, E) => {
        y.includes(S) ? y = y.replace(S, kn("" + h[E], 2, "0")) : h[E + 1] += h[E] * P[E];
      }), y.includes("S")) {
        var k = kn("" + h[h.length - 1], 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", k) : y.includes("SS") ? y = y.replace("SS", k.slice(0, 2)) : y = y.replace("S", k.slice(0, 1));
      }
      return y;
    }, u = (y) => {
      var g = Math.floor(y / Il), h = Math.floor(y % Il / li), w = Math.floor(y % li / ii), P = Math.floor(y % ii / oi), k = Math.floor(y % oi), S = {
        days: g,
        hours: h,
        minutes: w,
        seconds: P,
        milliseconds: k
      };
      n.value = S, C(e.onChange, n.value), r.value = s(e.format, S);
    }, d = () => {
      var {
        time: y,
        onEnd: g
      } = e, h = performance.now();
      if (a || (a = h + z(y)), l = a - h, l < 0 && (l = 0), u(l), l === 0) {
        C(g);
        return;
      }
      t && (o = Sr(d));
    }, v = function(y) {
      y === void 0 && (y = !1), !(t && !y) && (t = !0, a = performance.now() + (l || z(e.time)), d());
    }, f = () => {
      t = !1, hl(o);
    }, m = () => {
      a = 0, t = !1, hl(o), d();
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
      n: lh,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Uu.render = sh;
const Da = Uu;
oe(Da);
var NS = Da;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var An = 9e15, yn = 1e9, si = "0123456789abcdef", ro = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", no = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ui = {
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
}, Yu, jr, be = !0, yo = "[DecimalError] ", mn = yo + "Invalid argument: ", Hu = yo + "Precision limit exceeded", Fu = yo + "crypto unavailable", ju = "[object Decimal]", ar = Math.floor, Ze = Math.pow, uh = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, dh = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, vh = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Wu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Nr = 1e7, pe = 7, fh = 9007199254740991, ch = ro.length - 1, di = no.length - 1, J = { toStringTag: ju };
J.absoluteValue = J.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), he(e);
};
J.ceil = function() {
  return he(new this.constructor(this), this.e + 1, 2);
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
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + pe, a.rounding = 1, n = mh(a, Zu(a, n)), a.precision = e, a.rounding = r, he(jr == 2 || jr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
J.cubeRoot = J.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (be = !1, o = d.s * Ze(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = rr(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Ze(n, 1 / 3), e = ar((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ve(u.plus(d).times(i), u.plus(s), l + 2, 1), rr(i.d).slice(0, l) === (n = rr(a.d)).slice(0, l))
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
J.decimalPlaces = J.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - ar(this.e / pe)) * pe, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
J.dividedBy = J.div = function(e) {
  return Ve(this, new this.constructor(e));
};
J.dividedToIntegerBy = J.divToInt = function(e) {
  var r = this, n = r.constructor;
  return he(Ve(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
J.equals = J.eq = function(e) {
  return this.cmp(e) === 0;
};
J.floor = function() {
  return he(new this.constructor(this), this.e + 1, 3);
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
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / Co(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Gn(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return he(o, l.precision = n, l.rounding = a, !0);
};
J.hyperbolicSine = J.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Gn(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Co(5, e)), t = Gn(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, he(t, r, n, !0);
};
J.hyperbolicTangent = J.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Ve(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
J.inverseCosine = J.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Vr(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Vr(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Vr(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
J.inverseHyperbolicCosine = J.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, be = !1, n = n.times(n).minus(1).sqrt().plus(n), be = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
J.inverseHyperbolicSine = J.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, be = !1, n = n.times(n).plus(1).sqrt().plus(n), be = !0, a.precision = e, a.rounding = r, n.ln());
};
J.inverseHyperbolicTangent = J.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? he(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Ve(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
J.inverseSine = J.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Vr(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
J.inverseTangent = J.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= di)
      return l = Vr(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= di)
      return l = Vr(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / pe + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (be = !1, r = Math.ceil(i / pe), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), be = !0, he(l, d.precision = v, d.rounding = f, !0);
};
J.isFinite = function() {
  return !!this.d;
};
J.isInteger = J.isInt = function() {
  return !!this.d && ar(this.e / pe) > this.d.length - 2;
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
  if (be = !1, i = v + m, l = ln(u, i), a = r ? ao(d, i + 10) : ln(e, i), s = Ve(l, a, i, 1), Aa(s.d, t = v, f))
    do
      if (i += 10, l = ln(u, i), a = r ? ao(d, i + 10) : ln(e, i), s = Ve(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = he(s, v + 1, 0));
        break;
      }
    while (Aa(s.d, t += 10, f));
  return be = !0, he(s, v, f);
};
J.minus = J.sub = function(e) {
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
  return u[0] ? (e.d = u, e.e = wo(u, n), be ? he(e, i, s) : e) : new y(s === 3 ? -0 : 0);
};
J.modulo = J.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? he(new a(n), a.precision, a.rounding) : (be = !1, a.modulo == 9 ? (r = Ve(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ve(n, e, 0, a.modulo, 1), r = r.times(e), be = !0, n.minus(r));
};
J.naturalExponential = J.exp = function() {
  return vi(this);
};
J.naturalLogarithm = J.ln = function() {
  return ln(this);
};
J.negated = J.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, he(e);
};
J.plus = J.add = function(e) {
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
  return e.d = u, e.e = wo(u, a), be ? he(e, i, s) : e;
};
J.precision = J.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(mn + e);
  return n.d ? (r = Gu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
J.round = function() {
  var e = this, r = e.constructor;
  return he(new r(e), e.e + 1, r.rounding);
};
J.sine = J.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + pe, a.rounding = 1, n = ph(a, Zu(a, n)), a.precision = e, a.rounding = r, he(jr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
J.squareRoot = J.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (be = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = rr(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = ar((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ve(l, o, n + 2, 1)).times(0.5), rr(o.d).slice(0, n) === (r = rr(a.d)).slice(0, n))
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
J.tangent = J.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ve(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, he(jr == 2 || jr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
J.times = J.mul = function(e) {
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
  return r ? ++n : o.shift(), e.d = o, e.e = wo(o, n), be ? he(e, v.precision, v.rounding) : e;
};
J.toBinary = function(e, r) {
  return Xi(this, 2, e, r);
};
J.toDecimalPlaces = J.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (mr(e, 0, yn), r === void 0 ? r = a.rounding : mr(r, 0, 8), he(n, e + n.e + 1, r));
};
J.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, !0) : (mr(e, 0, yn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = he(new t(a), e + 1, r), n = Yr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
J.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Yr(t) : (mr(e, 0, yn), r === void 0 ? r = o.rounding : mr(r, 0, 8), a = he(new o(t), e + t.e + 1, r), n = Yr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
J.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, y = m.d, g = m.constructor;
  if (!y)
    return new g(m);
  if (u = n = new g(1), a = s = new g(0), r = new g(a), o = r.e = Gu(y) - m.e - 1, l = o % pe, r.d[0] = Ze(10, l < 0 ? pe + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new g(e), !i.isInt() || i.lt(u))
      throw Error(mn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (be = !1, i = new g(rr(y)), d = g.precision, g.precision = o = y.length * pe * 2; v = Ve(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Ve(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Ve(u, a, o, 1).minus(m).abs().cmp(Ve(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], g.precision = d, be = !0, f;
};
J.toHexadecimal = J.toHex = function(e, r) {
  return Xi(this, 16, e, r);
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
  return e.d[0] ? (be = !1, n = Ve(n, e, 0, r, 1).times(e), be = !0, he(n)) : (e.s = n.s, n = e), n;
};
J.toNumber = function() {
  return +this;
};
J.toOctal = function(e, r) {
  return Xi(this, 8, e, r);
};
J.toPower = J.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ze(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return he(i, a, o);
  if (r = ar(e.e / pe), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= fh)
    return t = qu(s, i, n, a), e.s < 0 ? new s(1).div(t) : he(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Ze(+i, u), r = n == 0 || !isFinite(n) ? ar(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (be = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = vi(e.times(ln(i, a + n)), a), t.d && (t = he(t, a + 5, 1), Aa(t.d, a, o) && (r = a + 10, t = he(vi(e.times(ln(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = he(t, a + 1, 0)))), t.s = l, be = !0, s.rounding = o, he(t, a, o));
};
J.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Yr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (mr(e, 1, yn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = he(new t(a), e, r), n = Yr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
J.toSignificantDigits = J.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (mr(e, 1, yn), r === void 0 ? r = a.rounding : mr(r, 0, 8)), he(new a(n), e, r);
};
J.toString = function() {
  var e = this, r = e.constructor, n = Yr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
J.truncated = J.trunc = function() {
  return he(new this.constructor(this), this.e + 1, 1);
};
J.valueOf = J.toJSON = function() {
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
  return --r < 0 ? (r += pe, t = 0) : (t = Math.ceil((r + 1) / pe), r %= pe), o = Ze(10, pe - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ze(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ze(10, r - 3) - 1, l;
}
function Gt(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += si.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function mh(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / Co(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Gn(e, 1, r.times(t), new e(1));
  for (var o = n; o--; ) {
    var l = r.times(r);
    r = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= n, r;
}
var Ve = function() {
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
    var u, d, v, f, m, y, g, h, w, P, k, S, E, M, D, b, $, U, V, Y, Z = a.constructor, te = a.s == t.s ? 1 : -1, se = a.d, H = t.d;
    if (!se || !se[0] || !H || !H[0])
      return new Z(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (se ? H && se[0] == H[0] : !H) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          se && se[0] == 0 || !H ? te * 0 : te / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Nr, m = pe, d = ar(a.e / m) - ar(t.e / m)), V = H.length, $ = se.length, w = new Z(te), P = w.d = [], v = 0; H[v] == (se[v] || 0); v++)
      ;
    if (H[v] > (se[v] || 0) && d--, o == null ? (M = o = Z.precision, l = Z.rounding) : i ? M = o + (a.e - t.e) + 1 : M = o, M < 0)
      P.push(1), y = !0;
    else {
      if (M = M / m + 2 | 0, v = 0, V == 1) {
        for (f = 0, H = H[0], M++; (v < $ || f) && M--; v++)
          D = f * s + (se[v] || 0), P[v] = D / H | 0, f = D % H | 0;
        y = f || v < $;
      } else {
        for (f = s / (H[0] + 1) | 0, f > 1 && (H = e(H, f, s), se = e(se, f, s), V = H.length, $ = se.length), b = V, k = se.slice(0, V), S = k.length; S < V; )
          k[S++] = 0;
        Y = H.slice(), Y.unshift(0), U = H[0], H[1] >= s / 2 && ++U;
        do
          f = 0, u = r(H, k, V, S), u < 0 ? (E = k[0], V != S && (E = E * s + (k[1] || 0)), f = E / U | 0, f > 1 ? (f >= s && (f = s - 1), g = e(H, f, s), h = g.length, S = k.length, u = r(g, k, h, S), u == 1 && (f--, n(g, V < h ? Y : H, h, s))) : (f == 0 && (u = f = 1), g = H.slice()), h = g.length, h < S && g.unshift(0), n(k, g, S, s), u == -1 && (S = k.length, u = r(H, k, V, S), u < 1 && (f++, n(k, V < S ? Y : H, S, s))), S = k.length) : u === 0 && (f++, k = [0]), P[v++] = f, u && k[0] ? k[S++] = se[b] || 0 : (k = [se[b]], S = 1);
        while ((b++ < $ || k[0] !== void 0) && M--);
        y = k[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (m == 1)
      w.e = d, Yu = y;
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
        o += pe, l = r, d = v[f = 0], s = d / Ze(10, t - l - 1) % 10 | 0;
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
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ze(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Ze(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Ze(10, (pe - r % pe) % pe), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ze(10, pe - o), v[f] = l > 0 ? (d / Ze(10, t - l) % Ze(10, l) | 0) * i : 0), u)
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
    return Ku(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + xr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + xr(-t - 1) + o, n && (a = n - l) > 0 && (o += xr(a))) : t >= l ? (o += xr(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + xr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += xr(a))), o;
}
function wo(e, r) {
  var n = e[0];
  for (r *= pe; n >= 10; n /= 10)
    r++;
  return r;
}
function ao(e, r, n) {
  if (r > ch)
    throw be = !0, n && (e.precision = n), Error(Hu);
  return he(new e(ro), r, 1, !0);
}
function Vr(e, r, n) {
  if (r > di)
    throw Error(Hu);
  return he(new e(no), r, n, !0);
}
function Gu(e) {
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
function qu(e, r, n, a) {
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
function vi(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, y = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (be = !1, s = y) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = he(o.times(e), s, 1), n = n.times(++d), i = l.plus(Ve(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
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
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, y = 10, g = e, h = g.d, w = g.constructor, P = w.rounding, k = w.precision;
  if (g.s < 0 || !h || !h[0] || !g.e && h[0] == 1 && h.length == 1)
    return new w(h && !h[0] ? -1 / 0 : g.s != 1 ? NaN : h ? 0 : g);
  if (r == null ? (be = !1, d = k) : d = r, w.precision = d += y, n = rr(h), a = n.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      g = g.times(e), n = rr(g.d), a = n.charAt(0), m++;
    o = g.e, a > 1 ? (g = new w("0." + n), o++) : g = new w(a + "." + n.slice(1));
  } else
    return u = ao(w, d + 2, k).times(o + ""), g = ln(new w(a + "." + n.slice(1)), d - y).plus(u), w.precision = k, r == null ? he(g, k, P, be = !0) : g;
  for (v = g, s = l = g = Ve(g.minus(1), g.plus(1), d, 1), f = he(g.times(g), d, 1), t = 3; ; ) {
    if (l = he(l.times(f), d, 1), u = s.plus(Ve(l, new w(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(ao(w, d + 2, k).times(o + ""))), s = Ve(s, new w(m), d, 1), r == null)
        if (Aa(s.d, d - y, P, i))
          w.precision = d += y, u = l = g = Ve(v.minus(1), v.plus(1), d, 1), f = he(g.times(g), d, 1), t = i = 1;
        else
          return he(s, w.precision = k, P, be = !0);
      else
        return w.precision = k, s;
    s = u, t += 2;
  }
}
function Ku(e) {
  return String(e.s * e.s / 0);
}
function fi(e, r) {
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
function hh(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Wu.test(r))
      return fi(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (dh.test(r))
    n = 16, r = r.toLowerCase();
  else if (uh.test(r))
    n = 2;
  else if (vh.test(r))
    n = 8;
  else
    throw Error(mn + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = qu(a, new a(n), o, o * 2)), u = Gt(r, n, Nr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = wo(u, d), e.d = u, be = !1, l && (e = Ve(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ze(2, s) : sn.pow(2, s))), be = !0, e);
}
function ph(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Gn(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / Co(5, n)), r = Gn(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Gn(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / pe);
  for (be = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = Ve(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Ve(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return be = !0, l.d.length = d + 1, l;
}
function Co(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function Zu(e, r) {
  var n, a = r.s < 0, t = Vr(e, e.precision, 1), o = t.times(0.5);
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
    d = Ku(e);
  else {
    for (d = Yr(e), l = d.indexOf("."), y ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Gt(Yr(f), 10, t), f.e = f.d.length), v = Gt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = y ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ve(e, f, n, a, 0, t), v = e.d, o = e.e, u = Yu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += si.charAt(v[l]);
      if (y) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Gt(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += si.charAt(v[l]);
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
function gh(e) {
  return new this(e).abs();
}
function bh(e) {
  return new this(e).acos();
}
function yh(e) {
  return new this(e).acosh();
}
function wh(e, r) {
  return new this(e).plus(r);
}
function Ch(e) {
  return new this(e).asin();
}
function Sh(e) {
  return new this(e).asinh();
}
function kh(e) {
  return new this(e).atan();
}
function $h(e) {
  return new this(e).atanh();
}
function Th(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Vr(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Vr(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Vr(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Ve(e, r, o, 1)), r = Vr(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Ve(e, r, o, 1)), n;
}
function Oh(e) {
  return new this(e).cbrt();
}
function Ph(e) {
  return he(e = new this(e), e.e + 1, 2);
}
function Ih(e, r, n) {
  return new this(e).clamp(r, n);
}
function Mh(e) {
  if (!e || typeof e != "object")
    throw Error(yo + "Object expected");
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
    if (n = o[r], t && (this[n] = ui[n]), (a = e[n]) !== void 0)
      if (ar(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(mn + n + ": " + a);
  if (n = "crypto", t && (this[n] = ui[n]), (a = e[n]) !== void 0)
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
function Bh(e) {
  return new this(e).cos();
}
function Eh(e) {
  return new this(e).cosh();
}
function Ju(e) {
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
      return fi(u, o.toString());
    } else if (s !== "string")
      throw Error(mn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Wu.test(o) ? fi(u, o) : hh(u, o);
  }
  if (t.prototype = J, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Mh, t.clone = Ju, t.isDecimal = El, t.abs = gh, t.acos = bh, t.acosh = yh, t.add = wh, t.asin = Ch, t.asinh = Sh, t.atan = kh, t.atanh = $h, t.atan2 = Th, t.cbrt = Oh, t.ceil = Ph, t.clamp = Ih, t.cos = Bh, t.cosh = Eh, t.div = Vh, t.exp = Nh, t.floor = Dh, t.hypot = Ah, t.ln = zh, t.log = Lh, t.log10 = Uh, t.log2 = Rh, t.max = Yh, t.min = Hh, t.mod = Fh, t.mul = jh, t.pow = Wh, t.random = Gh, t.round = qh, t.sign = Xh, t.sin = Kh, t.sinh = Zh, t.sqrt = Jh, t.sub = Qh, t.sum = _h, t.tan = xh, t.tanh = ep, t.trunc = rp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Vh(e, r) {
  return new this(e).div(r);
}
function Nh(e) {
  return new this(e).exp();
}
function Dh(e) {
  return he(e = new this(e), e.e + 1, 3);
}
function Ah() {
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
  return e instanceof sn || e && e.toStringTag === ju || !1;
}
function zh(e) {
  return new this(e).ln();
}
function Lh(e, r) {
  return new this(e).log(r);
}
function Rh(e) {
  return new this(e).log(2);
}
function Uh(e) {
  return new this(e).log(10);
}
function Yh() {
  return Xu(this, arguments, "lt");
}
function Hh() {
  return Xu(this, arguments, "gt");
}
function Fh(e, r) {
  return new this(e).mod(r);
}
function jh(e, r) {
  return new this(e).mul(r);
}
function Wh(e, r) {
  return new this(e).pow(r);
}
function Gh(e) {
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
      throw Error(Fu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= pe, a && e && (t = Ze(10, pe - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
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
function qh(e) {
  return he(e = new this(e), e.e + 1, this.rounding);
}
function Xh(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Kh(e) {
  return new this(e).sin();
}
function Zh(e) {
  return new this(e).sinh();
}
function Jh(e) {
  return new this(e).sqrt();
}
function Qh(e, r) {
  return new this(e).sub(r);
}
function _h() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (be = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return be = !0, he(n, this.precision, this.rounding);
}
function xh(e) {
  return new this(e).tan();
}
function ep(e) {
  return new this(e).tanh();
}
function rp(e) {
  return he(e = new this(e), e.e + 1, 1);
}
J[Symbol.for("nodejs.util.inspect.custom")] = J.toString;
J[Symbol.toStringTag] = "Decimal";
var sn = J.constructor = Ju(ui);
ro = new sn(ro);
no = new sn(no);
var np = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: [String, Number],
  max: [String, Number],
  step: {
    type: [String, Number],
    default: 1
  },
  color: String,
  inputWidth: [String, Number],
  inputTextSize: [String, Number],
  buttonSize: [String, Number],
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  decimalLength: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  disableIncrement: Boolean,
  disableDecrement: Boolean,
  disableInput: Boolean,
  lazyChange: Boolean,
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
  rules: Array,
  onBeforeChange: L(),
  onChange: L(),
  onIncrement: L(),
  onDecrement: L(),
  "onUpdate:modelValue": L()
}, {
  n: ap,
  classes: tp
} = ae("counter"), Vl = 100, Nl = 600, op = ["inputmode", "readonly", "disabled"];
function ip(e, r) {
  var n = le("var-icon"), a = le("var-button"), t = le("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [N(
      "div",
      De({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [_(a, {
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
      }, {
        default: me(() => [_(n, {
          name: "minus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), Te(N("input", {
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
      }, null, 46, op), [[Jv, e.inputValue]]), _(a, {
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
var Qu = ne({
  name: "VarCounter",
  components: {
    VarButton: dr,
    VarIcon: Ne,
    VarFormDetails: nr
  },
  directives: {
    Ripple: Xe
  },
  inheritAttrs: !1,
  props: np,
  setup(e) {
    var r = T(""), {
      bindForm: n,
      form: a
    } = Ir(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = Pr(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, y = () => l(e.rules, e.modelValue), g = (H) => {
      ze(() => {
        var {
          validateTrigger: R,
          rules: W,
          modelValue: B
        } = e;
        o(R, H, W, B);
      });
    }, h = () => {
      var {
        min: H
      } = e;
      C(e["onUpdate:modelValue"], H != null ? z(H) : 0), i();
    }, w = {
      reset: h,
      validate: y,
      resetValidation: i
    }, P = A(() => {
      var {
        max: H,
        modelValue: R
      } = e;
      return H != null && z(R) >= z(H);
    }), k = A(() => {
      var {
        min: H,
        modelValue: R
      } = e;
      return H != null && z(R) <= z(H);
    }), S = (H) => {
      var {
        decimalLength: R,
        max: W,
        min: B
      } = e, I = z(H);
      return W != null && I > z(W) && (I = z(W)), B != null && I < z(B) && (I = z(B)), H = String(I), R != null && (H = I.toFixed(z(R))), H;
    }, E = (H) => {
      var {
        lazyChange: R,
        onBeforeChange: W
      } = e, {
        value: B
      } = H.target, I = S(B);
      R ? C(W, z(I), se) : te(I), g("onInputChange");
    }, M = () => {
      var {
        disabled: H,
        readonly: R,
        disableDecrement: W,
        decrementButton: B,
        lazyChange: I,
        step: Q,
        modelValue: q,
        onDecrement: X,
        onBeforeChange: K
      } = e;
      if (!(u != null && u.value || s != null && s.value || H || R || W || !B) && !k.value) {
        var x = new sn(z(q)).minus(new sn(z(Q))).toString(), ce = S(x), ke = z(ce);
        C(X, ke), I ? C(K, ke, se) : (te(ce), g("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: H,
        readonly: R,
        disableIncrement: W,
        incrementButton: B,
        lazyChange: I,
        step: Q,
        modelValue: q,
        onIncrement: X,
        onBeforeChange: K
      } = e;
      if (!(u != null && u.value || s != null && s.value || H || R || W || !B) && !P.value) {
        var x = new sn(z(q)).plus(new sn(z(Q))).toString(), ce = S(x), ke = z(ce);
        C(X, ke), I ? C(K, ke, se) : (te(ce), g("onIncrement"));
      }
    }, b = () => {
      var {
        press: H,
        lazyChange: R
      } = e;
      !H || R || (m = window.setTimeout(() => {
        Z();
      }, Nl));
    }, $ = () => {
      var {
        press: H,
        lazyChange: R
      } = e;
      !H || R || (f = window.setTimeout(() => {
        Y();
      }, Nl));
    }, U = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, V = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, Y = () => {
      d = window.setTimeout(() => {
        D(), Y();
      }, Vl);
    }, Z = () => {
      v = window.setTimeout(() => {
        M(), Z();
      }, Vl);
    }, te = (H) => {
      r.value = H;
      var R = z(H);
      C(e["onUpdate:modelValue"], R);
    }, se = (H) => {
      te(S(String(H))), g("onLazyChange");
    };
    return C(n, w), de(() => e.modelValue, (H) => {
      te(S(String(H))), C(e.onChange, z(H));
    }), te(S(String(e.modelValue))), {
      n: ap,
      classes: tp,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: P,
      isMin: k,
      validate: y,
      reset: h,
      resetValidation: i,
      handleChange: E,
      decrement: M,
      increment: D,
      pressDecrement: b,
      pressIncrement: $,
      releaseDecrement: U,
      releaseIncrement: V,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Qu.render = ip;
const za = Qu;
oe(za);
var DS = za, _u = 60, xu = _u * 60, ed = xu * 24, lp = ed * 7, qn = 1e3, No = _u * qn, Dl = xu * qn, sp = ed * qn, up = lp * qn, Ki = "millisecond", zn = "second", Ln = "minute", Rn = "hour", en = "day", qt = "week", Er = "month", rd = "quarter", rn = "year", Un = "date", dp = "YYYY-MM-DDTHH:mm:ssZ", Al = "Invalid Date", vp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, fp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const cp = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ci = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, mp = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + ci(t, 2, "0") + ":" + ci(o, 2, "0");
}, hp = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Er), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Er);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, pp = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, gp = function(r) {
  var n = {
    M: Er,
    y: rn,
    w: qt,
    d: en,
    D: Un,
    h: Rn,
    m: Ln,
    s: zn,
    ms: Ki,
    Q: rd
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, bp = function(r) {
  return r === void 0;
};
const yp = {
  s: ci,
  z: mp,
  m: hp,
  a: pp,
  p: gp,
  u: bp
};
var da = "en", Sn = {};
Sn[da] = cp;
var Zi = function(r) {
  return r instanceof So;
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
  return a.date = r, a.args = arguments, new So(a);
}, wp = function(r, n) {
  return fe(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Ee = yp;
Ee.l = to;
Ee.i = Zi;
Ee.w = wp;
var Cp = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Ee.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(vp);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, So = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = to(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = Cp(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Ee;
  }, r.isValid = function() {
    return this.$d.toString() !== Al;
  }, r.isSame = function(a, t) {
    var o = fe(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return fe(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < fe(a);
  }, r.$g = function(a, t, o) {
    return Ee.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Ee.u(t) ? !0 : t, i = Ee.p(a), s = function(w, P) {
      var k = Ee.w(o.$u ? Date.UTC(o.$y, P, w) : new Date(o.$y, P, w), o);
      return l ? k : k.endOf(en);
    }, u = function(w, P) {
      var k = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Ee.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? k : S).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case rn:
        return l ? s(1, 0) : s(31, 11);
      case Er:
        return l ? s(1, v) : s(0, v + 1);
      case qt: {
        var y = this.$locale().weekStart || 0, g = (d < y ? d + 7 : d) - y;
        return s(l ? f - g : f + (6 - g), v);
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
    var o, l = Ee.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[en] = i + "Date", o[Un] = i + "Date", o[Er] = i + "Month", o[rn] = i + "FullYear", o[Rn] = i + "Hours", o[Ln] = i + "Minutes", o[zn] = i + "Seconds", o[Ki] = i + "Milliseconds", o)[l], u = l === en ? this.$D + (t - this.$W) : t;
    if (l === Er || l === rn) {
      var d = this.clone().set(Un, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Un, Math.min(this.$D, d.daysInMonth())).$d;
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
      var m = fe(o);
      return Ee.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Er)
      return this.set(Er, this.$M + a);
    if (i === rn)
      return this.set(rn, this.$y + a);
    if (i === en)
      return s(1);
    if (i === qt)
      return s(7);
    var u = (l = {}, l[Ln] = No, l[Rn] = Dl, l[zn] = qn, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Ee.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Al;
    var l = a || dp, i = Ee.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, y = function(k, S, E, M) {
      return k && (k[S] || k(t, l)) || E[S].slice(0, M);
    }, g = function(k) {
      return Ee.s(s % 12 || 12, k, "0");
    }, h = m || function(P, k, S) {
      var E = P < 12 ? "AM" : "PM";
      return S ? E.toLowerCase() : E;
    }, w = {
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
      h: g(1),
      hh: g(2),
      a: h(s, u, !0),
      A: h(s, u, !1),
      m: String(u),
      mm: Ee.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ee.s(this.$s, 2, "0"),
      SSS: Ee.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(fp, function(P, k) {
      return k || w[P] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Ee.p(t), s = fe(a), u = (s.utcOffset() - this.utcOffset()) * No, d = this - s, v = Ee.m(this, s);
    return v = (l = {}, l[rn] = v / 12, l[Er] = v, l[rd] = v / 3, l[qt] = (d - u) / up, l[en] = (d - u) / sp, l[Rn] = d / Dl, l[Ln] = d / No, l[zn] = d / qn, l)[i] || d, o ? v : Ee.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Er).$D;
  }, r.$locale = function() {
    return Sn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = to(a, t, !0);
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
}(), nd = So.prototype;
fe.prototype = nd;
[["$ms", Ki], ["$s", zn], ["$m", Ln], ["$H", Rn], ["$W", en], ["$M", Er], ["$y", rn], ["$D", Un]].forEach(function(e) {
  nd[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
fe.extend = function(e, r) {
  return e.$i || (e(r, So, fe), e.$i = !0), fe;
};
fe.locale = to;
fe.isDayjs = Zi;
fe.unix = function(e) {
  return fe(e * 1e3);
};
fe.en = Sn[da];
fe.Ls = Sn;
fe.p = {};
const ad = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, td = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
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
}], Sp = {
  modelValue: [String, Array],
  type: {
    type: String,
    default: "date"
  },
  allowedDates: Function,
  color: String,
  headerColor: String,
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
  min: String,
  max: String,
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: Boolean,
  multiple: Boolean,
  range: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, {
  n: kp
} = ae("picker-header");
function $p(e, r) {
  var n = le("var-icon"), a = le("var-button");
  return p(), O(
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
    }, 8, ["disabled"]), N(
      "div",
      {
        class: c(e.n("value")),
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [_(Fe, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: me(() => [(p(), O(
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
var od = ne({
  name: "PanelHeader",
  components: {
    VarButton: dr,
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
    } = r, a = T(!1), t = T(0), o = A(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (i = _e.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return _e.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return de(() => e.date, () => {
      t.value = 0;
    }), {
      n: kp,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
od.render = $p;
const id = od;
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
fe.extend(ad);
fe.extend(td);
var {
  n: Rt,
  classes: Tp
} = ae("month-picker"), {
  n: Ut
} = ae("date-picker");
function Op(e, r) {
  var n = le("panel-header"), a = le("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [N(
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
        default: me(() => [(p(), O("ul", {
          key: e.panelKey
        }, [(p(!0), O(
          Be,
          null,
          We(e.MONTH_LIST, (t) => (p(), O("li", {
            key: t.index
          }, [_(a, De({
            type: "primary",
            "var-month-picker-cover": "",
            ripple: !1,
            elevation: e.componentProps.buttonElevation
          }, mi({}, e.buttonProps(t.index)), {
            onClick: (o) => e.chooseMonth(t, o)
          }), {
            default: me(() => [$e(
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
var ld = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: dr,
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
    } = r, [a, t] = e.current.split("-"), o = T(!1), l = T(0), i = T(null), s = Ye({
      left: !1,
      right: !1
    }), u = A(() => e.choose.chooseYear === e.preview.previewYear), d = A(() => e.preview.previewYear === a), v = (P) => {
      var k, S;
      return (k = (S = _e.value.datePickerMonthDict) == null ? void 0 : S[P].abbr) != null ? k : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: k
        },
        componentProps: {
          min: S,
          max: E
        }
      } = e, M = !0, D = !0, b = k + "-" + P;
      return E && (M = fe(b).isSameOrBefore(fe(E), "month")), S && (D = fe(b).isSameOrAfter(fe(S), "month")), M && D;
    }, m = (P) => {
      var {
        choose: {
          chooseMonths: k,
          chooseDays: S,
          chooseRangeMonth: E
        },
        componentProps: {
          type: M,
          range: D
        }
      } = e;
      if (D) {
        if (!E.length)
          return !1;
        var b = fe(P).isSameOrBefore(fe(E[1]), "month"), $ = fe(P).isSameOrAfter(fe(E[0]), "month");
        return b && $;
      }
      return M === "month" ? k.includes(P) : S.some((U) => U.includes(P));
    }, y = (P) => {
      var {
        choose: {
          chooseMonth: k
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: E,
          color: M,
          multiple: D,
          range: b
        }
      } = e, $ = S + "-" + P, U = () => b || D ? m($) : (k == null ? void 0 : k.index) === P && u.value, V = () => f(P) ? E ? !E($) : !1 : !0, Y = V(), Z = () => Y ? !0 : b || D ? !m($) : !u.value || (k == null ? void 0 : k.index) !== P, te = () => d.value && t === P && e.componentProps.showCurrent ? (b || D || u.value) && Y ? !0 : b || D ? !m($) : u.value ? (k == null ? void 0 : k.index) !== t : !0 : !1, se = () => Y ? "" : te() ? M ?? "" : U() ? "" : Ut() + "-color-cover", H = se().startsWith(Ut());
      return {
        outline: te(),
        text: Z(),
        color: Z() ? "" : M,
        textColor: H ? "" : se(),
        [Ut() + "-color-cover"]: H,
        class: Tp(Rt("button"), [Y, Rt("button--disabled")]),
        disabled: Y
      };
    }, g = (P, k) => {
      var S = k.currentTarget;
      S.classList.contains(Rt("button--disabled")) || n("choose-month", P);
    }, h = (P) => {
      o.value = P === "prev", l.value += P === "prev" ? -1 : 1, n("check-preview", "year", P);
    }, w = (P) => {
      i.value.checkDate(P);
    };
    return de(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: k,
          max: S
        }
      } = e;
      S && (s.right = !fe("" + (z(P) + 1)).isSameOrBefore(fe(S), "year")), k && (s.left = !fe("" + (z(P) - 1)).isSameOrAfter(fe(k), "year"));
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
      chooseMonth: g,
      checkDate: h
    };
  }
});
ld.render = Op;
const Pp = ld;
var {
  n: zl,
  classes: Ip
} = ae("year-picker"), Mp = ["onClick"];
function Bp(e, r) {
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), O(
      Be,
      null,
      We(e.yearList, (n) => (p(), O("li", {
        key: n,
        class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
        style: G({
          color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
        }),
        onClick: (a) => e.chooseYear(n)
      }, ie(n), 15, Mp))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var sd = ne({
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
      var u = [z(l) + 100, z(l) - 100];
      if (i) {
        var d = fe(i).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = fe(s).format("YYYY-MM-D"), m = z(f.split("-")[0]);
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
      var o = document.querySelector("." + zl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: zl,
      classes: Ip,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
sd.render = Bp;
const Ep = sd;
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
fe.extend(ad);
fe.extend(td);
var {
  n: Dn,
  classes: Vp
} = ae("day-picker"), {
  n: Yt
} = ae("date-picker");
function Np(e, r) {
  var n = le("panel-header"), a = le("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [N(
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
        default: me(() => [(p(), O("div", {
          key: e.panelKey
        }, [N(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(p(!0), O(
            Be,
            null,
            We(e.sortWeekList, (t) => (p(), O(
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
        ), N(
          "ul",
          {
            class: c(e.n("body"))
          },
          [(p(!0), O(
            Be,
            null,
            We(e.days, (t, o) => (p(), O("li", {
              key: o
            }, [_(a, De({
              type: "primary",
              "var-day-picker-cover": "",
              round: "",
              ripple: !1,
              elevation: e.componentProps.buttonElevation
            }, hi({}, e.buttonProps(t)), {
              onClick: (l) => e.chooseDay(t, l)
            }), {
              default: me(() => [$e(
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
var ud = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: dr,
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
    } = r, [a, t, o] = e.current.split("-"), l = T([]), i = T(!1), s = T(0), u = T(null), d = Ye({
      left: !1,
      right: !1
    }), v = A(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = A(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = A(() => {
      var b = sa.findIndex(($) => $.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? sa : sa.slice(b).concat(sa.slice(0, b));
    }), y = (b) => {
      var $, U;
      return ($ = (U = _e.value.datePickerWeekDict) == null ? void 0 : U[b].abbr) != null ? $ : "";
    }, g = (b) => b > 0 ? b : "", h = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: $
        }
      } = e, U = fe($ + "-" + b.index).daysInMonth(), V = fe($ + "-" + b.index + "-01").day(), Y = m.value.findIndex((Z) => Z.index === "" + V);
      l.value = [...Array(Y).fill(-1), ...Array.from(Array(U + 1).keys())].filter((Z) => Z);
    }, w = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: $
        },
        componentProps: {
          max: U,
          min: V
        }
      } = e;
      if (U) {
        var Y = b + "-" + (z($.index) + 1);
        d.right = !fe(Y).isSameOrBefore(fe(U), "month");
      }
      if (V) {
        var Z = b + "-" + (z($.index) - 1);
        d.left = !fe(Z).isSameOrAfter(fe(V), "month");
      }
    }, P = (b) => {
      var {
        preview: {
          previewYear: $,
          previewMonth: U
        },
        componentProps: {
          min: V,
          max: Y
        }
      } = e, Z = !0, te = !0, se = $ + "-" + U.index + "-" + b;
      return Y && (Z = fe(se).isSameOrBefore(fe(Y), "day")), V && (te = fe(se).isSameOrAfter(fe(V), "day")), Z && te;
    }, k = (b) => {
      var {
        choose: {
          chooseDays: $,
          chooseRangeDay: U
        },
        componentProps: {
          range: V
        }
      } = e;
      if (V) {
        if (!U.length)
          return !1;
        var Y = fe(b).isSameOrBefore(fe(U[1]), "day"), Z = fe(b).isSameOrAfter(fe(U[0]), "day");
        return Y && Z;
      }
      return $.includes(b);
    }, S = (b) => {
      if (b < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Dn("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: $
        },
        preview: {
          previewYear: U,
          previewMonth: V
        },
        componentProps: {
          allowedDates: Y,
          color: Z,
          multiple: te,
          range: se
        }
      } = e, H = U + "-" + V.index + "-" + b, R = () => se || te ? k(H) : z($) === b && f.value, W = () => P(b) ? Y ? !Y(H) : !1 : !0, B = W(), I = () => B ? !0 : se || te ? !k(H) : !f.value || z($) !== b, Q = () => v.value && z(o) === b && e.componentProps.showCurrent ? (se || te || f.value) && B ? !0 : se || te ? !k(H) : f.value ? $ !== o : !0 : !1, q = () => B ? "" : Q() ? Z ?? "" : R() ? "" : Yt() + "-color-cover", X = q().startsWith(Yt());
      return {
        text: I(),
        outline: Q(),
        textColor: X ? "" : q(),
        [Yt() + "-color-cover"]: X,
        class: Vp(Dn("button"), Dn("button--usable"), [B, Dn("button--disabled")]),
        disabled: B
      };
    }, E = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, n("check-preview", "month", b);
    }, M = (b, $) => {
      var U = $.currentTarget;
      U.classList.contains(Dn("button--disabled")) || n("choose-day", b);
    }, D = (b) => {
      u.value.checkDate(b);
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
      forwardRef: D,
      filterDay: g,
      getDayAbbr: y,
      checkDate: E,
      chooseDay: M,
      buttonProps: S
    };
  }
});
ud.render = Np;
const Dp = ud;
var {
  n: Ap,
  classes: zp
} = ae("date-picker");
function Lp(e, r) {
  var n = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [N(
      "div",
      {
        class: c(e.n("title")),
        style: G({
          background: e.headerColor || e.color
        })
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: r[0] || (r[0] = (o) => e.clickEl("year"))
        },
        [F(e.$slots, "year", {
          year: e.chooseYear
        }, () => [$e(
          ie(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), N(
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
            return [e.type === "month" ? (p(), O("div", {
              key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
            }, [e.range ? F(e.$slots, "range", {
              key: 0,
              choose: e.getChoose.chooseRangeMonth
            }, () => [$e(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )]) : e.multiple ? F(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseMonths
            }, () => [$e(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )]) : F(e.$slots, "month", {
              key: 2,
              month: (l = e.chooseMonth) == null ? void 0 : l.index,
              year: e.chooseYear
            }, () => [$e(
              ie(e.getMonthTitle),
              1
              /* TEXT */
            )])])) : (p(), O("div", {
              key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
            }, [e.range ? F(e.$slots, "range", {
              key: 0,
              choose: e.formatRange
            }, () => [$e(
              ie(e.getDateTitle),
              1
              /* TEXT */
            )]) : e.multiple ? F(e.$slots, "multiple", {
              key: 1,
              choose: e.getChoose.chooseDays
            }, () => [$e(
              ie(e.getDateTitle),
              1
              /* TEXT */
            )]) : F(e.$slots, "date", Ot(De({
              key: 2
            }, e.slotProps)), () => [$e(
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
    ), N(
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
var dd = ne({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Pp,
    YearPickerPanel: Ep,
    DayPickerPanel: Dp
  },
  props: Sp,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = fe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Xt.find((ve) => ve.index === i), u = T(!1), d = T(!1), v = T(!0), f = T(), m = T(), y = T(), g = T(s), h = T(l), w = T(!1), P = T([]), k = T([]), S = T([]), E = T([]), M = T(null), D = T(null), b = Ye({
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
    }), $ = A(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: y.value,
      chooseMonths: P.value,
      chooseDays: k.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: E.value
    })), U = A(() => ({
      previewMonth: g.value,
      previewYear: h.value
    })), V = A(() => {
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
    }), Y = A(() => {
      var ve, Se, ge, Oe, {
        multiple: Pe,
        range: je
      } = e;
      if (je) {
        var lr = E.value.map((Bo) => fe(Bo).format("YYYY-MM-DD"));
        return lr.length ? lr[0] + " ~ " + lr[1] : "";
      }
      if (Pe)
        return "" + k.value.length + _e.value.datePickerSelected;
      if (!m.value || !f.value || !y.value)
        return "";
      var wr = fe(m.value + "-" + f.value.index + "-" + y.value).day(), Nn = sa.find((Bo) => Bo.index === "" + wr), il = (ve = (Se = _e.value.datePickerWeekDict) == null ? void 0 : Se[Nn.index].name) != null ? ve : "", Fv = (ge = (Oe = _e.value.datePickerMonthDict) == null ? void 0 : Oe[f.value.index].name) != null ? ge : "", jv = kn(y.value, 2, "0");
      return _e.value.lang === "zh-CN" ? f.value.index + "-" + jv + " " + il.slice(0, 3) : il.slice(0, 3) + ", " + Fv.slice(0, 3) + " " + y.value;
    }), Z = A(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), te = A(() => !e.touchable || ["", "year"].includes(Z.value)), se = A(() => {
      var ve, Se, ge, Oe, Pe = fe(m.value + "-" + ((ve = f.value) == null ? void 0 : ve.index) + "-" + y.value).day(), je = y.value ? kn(y.value, 2, "0") : "";
      return {
        week: "" + Pe,
        year: (Se = m.value) != null ? Se : "",
        month: (ge = (Oe = f.value) == null ? void 0 : Oe.index) != null ? ge : "",
        date: je
      };
    }), H = A(() => $.value.chooseRangeDay.map((ve) => fe(ve).format("YYYY-MM-DD"))), R = A(() => m.value === h.value), W = A(() => {
      var ve;
      return ((ve = f.value) == null ? void 0 : ve.index) === g.value.index;
    }), B = (ve) => {
      ve === "year" ? u.value = !0 : ve === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, I = (ve) => {
      if (!te.value) {
        var {
          clientX: Se,
          clientY: ge
        } = ve.touches[0];
        r = Se, n = ge;
      }
    }, Q = (ve, Se) => ve >= Se && ve > 20 ? "x" : "y", q = (ve) => {
      if (!te.value) {
        var {
          clientX: Se,
          clientY: ge
        } = ve.touches[0], Oe = Se - r, Pe = ge - n;
        t = Q(Math.abs(Oe), Math.abs(Pe)), a = Oe > 0 ? "prev" : "next";
      }
    }, X = () => {
      if (!(te.value || t !== "x")) {
        var ve = Z.value === "month" ? M : D;
        fo(() => {
          ve.value.forwardRef(a), Ge();
        });
      }
    }, K = (ve, Se) => {
      var ge = Se === "month" ? S : E;
      if (ge.value = v.value ? [ve, ve] : [ge.value[0], ve], v.value = !v.value, v.value) {
        var Oe = fe(ge.value[0]).isAfter(ge.value[1]), Pe = Oe ? [ge.value[1], ge.value[0]] : [...ge.value];
        C(e["onUpdate:modelValue"], Pe), C(e.onChange, Pe);
      }
    }, x = (ve, Se) => {
      var ge = Se === "month" ? P : k, Oe = Se === "month" ? "YYYY-MM" : "YYYY-MM-DD", Pe = ge.value.map((lr) => fe(lr).format(Oe)), je = Pe.findIndex((lr) => lr === ve);
      je === -1 ? Pe.push(ve) : Pe.splice(je, 1), C(e["onUpdate:modelValue"], Pe), C(e.onChange, Pe);
    }, ce = (ve, Se) => !m.value || !f.value ? !1 : R.value ? ve === "month" ? Se.index < f.value.index : W.value ? Se < z(y.value) : f.value.index > g.value.index : m.value > h.value, ke = (ve) => {
      var {
        readonly: Se,
        range: ge,
        multiple: Oe,
        onChange: Pe,
        "onUpdate:modelValue": je
      } = e;
      if (!(ve < 0 || Se)) {
        w.value = ce("day", ve);
        var lr = h.value + "-" + g.value.index + "-" + ve, wr = fe(lr).format("YYYY-MM-DD");
        ge ? K(wr, "day") : Oe ? x(wr, "day") : (C(je, wr), C(Pe, wr));
      }
    }, Me = (ve) => {
      var {
        type: Se,
        readonly: ge,
        range: Oe,
        multiple: Pe,
        onChange: je,
        onPreview: lr,
        "onUpdate:modelValue": wr
      } = e;
      if (w.value = ce("month", ve), Se === "month" && !ge) {
        var Nn = h.value + "-" + ve.index;
        Oe ? K(Nn, "month") : Pe ? x(Nn, "month") : (C(wr, Nn), C(je, Nn));
      } else
        g.value = ve, C(lr, z(h.value), z(g.value.index));
      d.value = !1;
    }, j = (ve) => {
      h.value = "" + ve, u.value = !1, d.value = !0, C(e.onPreview, z(h.value), z(g.value.index));
    }, re = (ve, Se) => {
      var ge = Se === "prev" ? -1 : 1;
      if (ve === "year")
        h.value = "" + (z(h.value) + ge);
      else {
        var Oe = z(g.value.index) + ge;
        Oe < 1 && (h.value = "" + (z(h.value) - 1), Oe = 12), Oe > 12 && (h.value = "" + (z(h.value) + 1), Oe = 1), g.value = Xt.find((Pe) => z(Pe.index) === Oe);
      }
      C(e.onPreview, z(h.value), z(g.value.index));
    }, ue = () => (e.multiple || e.range) && !Ie(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ie(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, ye = (ve) => Ie(ve) ? !1 : ve === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ue = (ve, Se) => {
      var ge = Se === "month" ? S : E, Oe = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Pe = ve.map((wr) => fe(wr).format(Oe)).slice(0, 2), je = ge.value.some((wr) => ye(wr));
      if (!je) {
        ge.value = Pe;
        var lr = fe(ge.value[0]).isAfter(ge.value[1]);
        ge.value.length === 2 && lr && (ge.value = [ge.value[1], ge.value[0]]);
      }
    }, Le = (ve, Se) => {
      var ge = Se === "month" ? P : k, Oe = Se === "month" ? "YYYY-MM" : "YYYY-MM-D", Pe = Array.from(new Set(ve.map((je) => fe(je).format(Oe))));
      ge.value = Pe.filter((je) => je !== "Invalid Date");
    }, He = (ve) => {
      var Se = fe(ve).format("YYYY-MM-D");
      if (!ye(Se)) {
        var [ge, Oe, Pe] = Se.split("-"), je = Xt.find((lr) => lr.index === Oe);
        f.value = je, m.value = ge, y.value = Pe, g.value = je, h.value = ge;
      }
    }, Ge = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return de(() => e.modelValue, (ve) => {
      if (!(!ue() || ye(ve) || !ve))
        if (e.range) {
          if (!Ie(ve))
            return;
          v.value = ve.length !== 1, Ue(ve, e.type);
        } else if (e.multiple) {
          if (!Ie(ve))
            return;
          Le(ve, e.type);
        } else
          He(ve);
    }, {
      immediate: !0
    }), de(Z, Ge), {
      n: Ap,
      classes: zp,
      monthPanelEl: M,
      dayPanelEl: D,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: y,
      previewYear: h,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: V,
      getDateTitle: Y,
      getPanelType: Z,
      getChoose: $,
      getPreview: U,
      componentProps: b,
      slotProps: se,
      formatRange: H,
      clickEl: B,
      handleTouchstart: I,
      handleTouchmove: q,
      handleTouchend: X,
      getChooseDay: ke,
      getChooseMonth: Me,
      getChooseYear: j,
      checkPreview: re,
      formatElevation: hr
    };
  }
});
dd.render = Lp;
const La = dd;
oe(La);
var AS = La;
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
var Rp = pi({
  show: Boolean,
  width: [Number, String],
  title: String,
  message: String,
  messageAlign: {
    type: String,
    default: "left"
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  confirmButtonColor: String,
  cancelButtonColor: String,
  dialogClass: String,
  dialogStyle: Object,
  onBeforeClose: L(),
  onConfirm: L(),
  onCancel: L(),
  "onUpdate:show": L()
}, xe(It, [
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
  n: Up,
  classes: Yp
} = ae("dialog");
function Hp(e, r) {
  var n = le("var-button"), a = le("var-popup");
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
    default: me(() => [N(
      "div",
      De({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: gi({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [N(
        "div",
        {
          class: c(e.n("title"))
        },
        [F(e.$slots, "title", {}, () => [$e(
          ie(e.dt(e.title, e.pack.dialogTitle)),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), N(
        "div",
        {
          class: c(e.n("message")),
          style: G({
            textAlign: e.messageAlign
          })
        },
        [F(e.$slots, "default", {}, () => [$e(
          ie(e.message),
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
            ie(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
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
            ie(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
var vd = ne({
  name: "VarDialog",
  components: {
    VarPopup: Ur,
    VarButton: dr
  },
  inheritAttrs: !1,
  props: Rp,
  setup(e) {
    var r = T(!1), n = T(!1), a = () => C(e["onUpdate:show"], !1), t = () => {
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
      n: Up,
      classes: Yp,
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
vd.render = Hp;
const Vt = vd;
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
function Fp(e) {
  return e === void 0 && (e = {}), Je(e) ? oo({}, io, {
    message: e
  }) : oo({}, io, e);
}
function Kr(e) {
  return aa() ? new Promise((r) => {
    Kr.close();
    var n = Fp(e), a = Ye(n);
    a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = ta(Vt, a, {
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
Kr.Component = Vt;
oe(Vt);
oe(Vt, Kr);
var zS = Vt, jp = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: Boolean,
  description: String,
  margin: String,
  dashed: Boolean,
  hairline: Boolean
}, {
  n: Wp,
  classes: Gp
} = ae("divider");
function qp(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [e.vertical ? ee("v-if", !0) : F(e.$slots, "default", {
      key: 0
    }, () => [e.description ? (p(), O(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ie(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var fd = ne({
  name: "VarDivider",
  props: jp,
  setup(e, r) {
    var {
      slots: n
    } = r, a = T(!1), t = A(() => {
      var {
        vertical: i,
        inset: s
      } = e;
      return !i && s === !0;
    }), o = A(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e;
      if (Ni(i) || s)
        return {
          margin: u
        };
      var d = z(i), v = Math.abs(d) + (i + "").replace(d + "", "");
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
      n: Wp,
      classes: Gp,
      withText: a,
      style: o,
      withPresetInset: t
    };
  }
});
fd.render = qp;
const Ra = fd;
oe(Ra);
var LS = Ra, Xp = {
  direction: {
    type: String,
    default: "xy"
  },
  attraction: String,
  disabled: Boolean,
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
  onClick: L()
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
function Ll(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Kp(e) {
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
var {
  n: Zp,
  classes: Jp
} = ae("drag");
function Qp(e, r) {
  return p(), Ce(Jr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [N(
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
    [F(e.$slots, "default")],
    16
    /* FULL_PROPS */
  )], 8, ["to", "disabled"]);
}
var cd = ne({
  name: "VarDrag",
  inheritAttrs: !1,
  props: Xp,
  setup(e, r) {
    var {
      attrs: n
    } = r, a = T(null), t = T(0), o = T(0), l = Ye({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), i = T(!1), s = T(!1), u = T(!1), {
      touching: d,
      moveX: v,
      moveY: f,
      startTouch: m,
      moveTouch: y,
      endTouch: g,
      resetTouch: h
    } = mo(), {
      disabled: w
    } = oa(), P = null, k = (H) => {
      e.disabled || (P && window.clearTimeout(P), D(), m(H), u.value = !1);
    }, S = /* @__PURE__ */ function() {
      var H = Kp(function* (R) {
        !d.value || e.disabled || (R.preventDefault(), s.value = !1, i.value = !0, u.value = !0, y(R), e.direction.includes("x") && (t.value += v.value), e.direction.includes("y") && (o.value += f.value), V());
      });
      return function(W) {
        return H.apply(this, arguments);
      };
    }(), E = () => {
      e.disabled || (g(), s.value = !0, U(), P = window.setTimeout(() => {
        u.value = !1;
      }));
    }, M = (H) => {
      u.value || C(e.onClick, H);
    }, D = () => {
      var {
        left: H,
        top: R
      } = b();
      t.value = H, o.value = R;
    }, b = () => {
      var H = Qe(a.value), R = Qe(window), W = H.top - R.top, B = R.bottom - H.bottom, I = H.left - R.left, Q = R.right - H.right, {
        width: q,
        height: X
      } = H, {
        width: K,
        height: x
      } = R;
      return {
        top: W,
        bottom: B,
        left: I,
        right: Q,
        width: q,
        height: X,
        halfWidth: q / 2,
        halfHeight: X / 2,
        windowWidth: K,
        windowHeight: x
      };
    }, $ = () => {
      var H = b(), R = l.left, W = H.windowWidth - l.right - H.width, B = l.top, I = H.windowHeight - l.bottom - H.height;
      return {
        minX: R,
        minY: B,
        // fallback the drag element overflows boundary
        maxX: R < W ? W : R,
        maxY: B < I ? I : B
      };
    }, U = () => {
      if (e.attraction != null) {
        var {
          halfWidth: H,
          halfHeight: R,
          top: W,
          bottom: B,
          left: I,
          right: Q
        } = b(), {
          minX: q,
          minY: X,
          maxX: K,
          maxY: x
        } = $(), ce = I + H - l.left, ke = Q + H - l.right, Me = W + R - l.top, j = B + R - l.bottom, re = ce <= ke, ue = Me <= j;
        e.attraction.includes("x") && (t.value = re ? q : K), e.attraction.includes("y") && (o.value = ue ? X : x);
      }
    }, V = () => {
      var {
        minX: H,
        minY: R,
        maxX: W,
        maxY: B
      } = $();
      t.value = dn(t.value, H, W), o.value = dn(o.value, R, B);
    }, Y = () => {
      var {
        top: H = 0,
        bottom: R = 0,
        left: W = 0,
        right: B = 0
      } = e.boundary;
      l.top = Re(H), l.bottom = Re(R), l.left = Re(W), l.right = Re(B);
    }, Z = () => {
      var H, R = (H = n.style) != null ? H : {};
      return lo({}, n, {
        style: lo({}, R, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : R.top,
          left: i.value ? 0 : R.left,
          right: i.value ? "auto" : R.right,
          bottom: i.value ? "auto" : R.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : R.transform
        })
      });
    }, te = () => {
      i.value && (D(), V());
    }, se = () => {
      s.value = !1, i.value = !1, u.value = !1, t.value = 0, o.value = 0, h();
    };
    return de(() => e.boundary, Y), Pt(te), tr(() => {
      Y(), te();
    }), {
      drag: a,
      x: t,
      y: o,
      enableTransition: s,
      dragging: u,
      teleportDisabled: w,
      n: Zp,
      classes: Jp,
      getAttrs: Z,
      handleTouchstart: k,
      handleTouchmove: S,
      handleTouchend: E,
      handleClick: M,
      resize: te,
      reset: se
    };
  }
});
cd.render = Qp;
const Xn = cd;
oe(Xn);
var RS = Xn, _p = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Kt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return _p[r];
  });
}
var Wr = "top", hn = "bottom", $n = "right", un = "left", ko = "auto", $o = [Wr, hn, $n, un], To = "start", Ua = "end", xp = "clippingParents", md = "viewport", ia = "popper", eg = "reference", Rl = /* @__PURE__ */ $o.reduce(function(e, r) {
  return e.concat([r + "-" + To, r + "-" + Ua]);
}, []), hd = /* @__PURE__ */ [].concat($o, [ko]).reduce(function(e, r) {
  return e.concat([r, r + "-" + To, r + "-" + Ua]);
}, []), rg = "beforeRead", ng = "read", ag = "afterRead", tg = "beforeMain", og = "main", ig = "afterMain", lg = "beforeWrite", sg = "write", ug = "afterWrite", bi = [rg, ng, ag, tg, og, ig, lg, sg, ug];
function Gr(e) {
  return e.split("-")[0];
}
var dg = {
  start: "end",
  end: "start"
};
function Ul(e) {
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
function Tn(e) {
  var r = Mr(e).Element;
  return e instanceof r || e instanceof Element;
}
function kr(e) {
  var r = Mr(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function Ji(e) {
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
var va = Math.max, Yl = Math.min, Kn = Math.round;
function yi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function pd() {
  return !/^((?!chrome|android).)*safari/i.test(yi());
}
function Zn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Kn(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Kn(a.height) / e.offsetHeight || 1);
  var l = Tn(e) ? Mr(e) : window, i = l.visualViewport, s = !pd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function _i(e) {
  return Zn(wn(e)).left + Qi(e).scrollLeft;
}
function vg(e, r) {
  var n = Mr(e), a = wn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = pd();
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
  return Mr(e).getComputedStyle(e);
}
function fg(e) {
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
function Oo(e) {
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
function gd(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : kr(e) && xi(e) ? e : gd(Oo(e));
}
function fa(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = gd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], xi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(fa(Oo(l)))
  );
}
function cg(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function Hl(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  zr(e).position === "fixed" ? null : e.offsetParent;
}
function mg(e) {
  var r = /firefox/i.test(yi()), n = /Trident/i.test(yi());
  if (n && kr(e)) {
    var a = zr(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Oo(e);
  for (Ji(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Hr(t)) < 0; ) {
    var o = zr(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function el(e) {
  for (var r = Mr(e), n = Hl(e); n && cg(n) && zr(n).position === "static"; )
    n = Hl(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && zr(n).position === "static") ? r : n || mg(e) || r;
}
function hg(e, r) {
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
function wi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pg(e, r) {
  var n = Zn(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Fl(e, r, n) {
  return r === md ? wi(vg(e, n)) : Tn(r) ? pg(r, n) : wi(fg(wn(e)));
}
function gg(e) {
  var r = fa(Oo(e)), n = ["absolute", "fixed"].indexOf(zr(e).position) >= 0, a = n && kr(e) ? el(e) : e;
  return Tn(a) ? r.filter(function(t) {
    return Tn(t) && hg(t, a) && Hr(t) !== "body";
  }) : [];
}
function bg(e, r, n, a) {
  var t = r === "clippingParents" ? gg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Fl(e, u, a);
    return s.top = va(d.top, s.top), s.right = Yl(d.right, s.right), s.bottom = Yl(d.bottom, s.bottom), s.left = va(d.left, s.left), s;
  }, Fl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ya(e) {
  return e.split("-")[1];
}
function yg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bd(e) {
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
  var u = t ? yg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case To:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case Ua:
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
function yd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? xp : i, u = n.rootBoundary, d = u === void 0 ? md : u, v = n.elementContext, f = v === void 0 ? ia : v, m = n.altBoundary, y = m === void 0 ? !1 : m, g = n.padding, h = g === void 0 ? 0 : g, w = Cg(typeof h != "number" ? h : Sg(h, $o)), P = f === ia ? eg : ia, k = e.rects.popper, S = e.elements[y ? P : f], E = bg(Tn(S) ? S : S.contextElement || wn(e.elements.popper), s, d, l), M = Zn(e.elements.reference), D = bd({
    reference: M,
    element: k,
    strategy: "absolute",
    placement: t
  }), b = wi(Object.assign({}, k, D)), $ = f === ia ? b : M, U = {
    top: E.top - $.top + w.top,
    bottom: $.bottom - E.bottom + w.bottom,
    left: E.left - $.left + w.left,
    right: $.right - E.right + w.right
  }, V = e.modifiersData.offset;
  if (f === ia && V) {
    var Y = V[t];
    Object.keys(U).forEach(function(Z) {
      var te = [$n, hn].indexOf(Z) >= 0 ? 1 : -1, se = [Wr, hn].indexOf(Z) >= 0 ? "y" : "x";
      U[Z] += Y[se] * te;
    });
  }
  return U;
}
function kg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? hd : s, d = Ya(a), v = d ? i ? Rl : Rl.filter(function(y) {
    return Ya(y) === d;
  }) : $o, f = v.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(y, g) {
    return y[g] = yd(e, {
      placement: g,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gr(g)], y;
  }, {});
  return Object.keys(m).sort(function(y, g) {
    return m[y] - m[g];
  });
}
function $g(e) {
  if (Gr(e) === ko)
    return [];
  var r = Kt(e);
  return [Ul(e), r, Ul(r)];
}
function Tg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, y = m === void 0 ? !0 : m, g = n.allowedAutoPlacements, h = r.options.placement, w = Gr(h), P = w === h, k = s || (P || !y ? [Kt(h)] : $g(h)), S = [h].concat(k).reduce(function(K, x) {
      return K.concat(Gr(x) === ko ? kg(r, {
        placement: x,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: g
      }) : x);
    }, []), E = r.rects.reference, M = r.rects.popper, D = /* @__PURE__ */ new Map(), b = !0, $ = S[0], U = 0; U < S.length; U++) {
      var V = S[U], Y = Gr(V), Z = Ya(V) === To, te = [Wr, hn].indexOf(Y) >= 0, se = te ? "width" : "height", H = yd(r, {
        placement: V,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), R = te ? Z ? $n : un : Z ? hn : Wr;
      E[se] > M[se] && (R = Kt(R));
      var W = Kt(R), B = [];
      if (o && B.push(H[Y] <= 0), i && B.push(H[R] <= 0, H[W] <= 0), B.every(function(K) {
        return K;
      })) {
        $ = V, b = !1;
        break;
      }
      D.set(V, B);
    }
    if (b)
      for (var I = y ? 3 : 1, Q = function(x) {
        var ce = S.find(function(ke) {
          var Me = D.get(ke);
          if (Me)
            return Me.slice(0, x).every(function(j) {
              return j;
            });
        });
        if (ce)
          return $ = ce, "break";
      }, q = I; q > 0; q--) {
        var X = Q(q);
        if (X === "break")
          break;
      }
    r.placement !== $ && (r.modifiersData[a]._skip = !0, r.placement = $, r.reset = !0);
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
function Ig(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = hd.reduce(function(d, v) {
    return d[v] = Pg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Mg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Ig
};
var Bg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Eg(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Kn(r * t) / t || 0,
    y: Kn(n * t) / t || 0
  };
}
function jl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, y = l.y, g = y === void 0 ? 0 : y, h = typeof d == "function" ? d({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = h.x, g = h.y;
  var w = l.hasOwnProperty("x"), P = l.hasOwnProperty("y"), k = un, S = Wr, E = window;
  if (u) {
    var M = el(n), D = "clientHeight", b = "clientWidth";
    if (M === Mr(n) && (M = wn(n), zr(M).position !== "static" && i === "absolute" && (D = "scrollHeight", b = "scrollWidth")), M = M, t === Wr || (t === un || t === $n) && o === Ua) {
      S = hn;
      var $ = v && M === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        M[D]
      );
      g -= $ - a.height, g *= s ? 1 : -1;
    }
    if (t === un || (t === Wr || t === hn) && o === Ua) {
      k = $n;
      var U = v && M === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        M[b]
      );
      m -= U - a.width, m *= s ? 1 : -1;
    }
  }
  var V = Object.assign({
    position: i
  }, u && Bg), Y = d === !0 ? Eg({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = Y.x, g = Y.y, s) {
    var Z;
    return Object.assign({}, V, (Z = {}, Z[S] = P ? "0" : "", Z[k] = w ? "0" : "", Z.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", Z));
  }
  return Object.assign({}, V, (r = {}, r[S] = P ? g + "px" : "", r[k] = w ? m + "px" : "", r.transform = "", r));
}
function Vg(e) {
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
  r.modifiersData.popperOffsets != null && (r.styles.popper = Object.assign({}, r.styles.popper, jl(Object.assign({}, d, {
    offsets: r.modifiersData.popperOffsets,
    position: r.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), r.modifiersData.arrow != null && (r.styles.arrow = Object.assign({}, r.styles.arrow, jl(Object.assign({}, d, {
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
  fn: Vg,
  data: {}
};
function Ng(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Dg(e) {
  return e === Mr(e) || !kr(e) ? Qi(e) : Ng(e);
}
function Ag(e) {
  var r = e.getBoundingClientRect(), n = Kn(r.width) / e.offsetWidth || 1, a = Kn(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function zg(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Ag(r), o = wn(r), l = Zn(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xi(o)) && (i = Dg(r)), kr(r) ? (s = Zn(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = _i(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Lg(e) {
  var r = Zn(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(r.width - n) <= 1 && (n = r.width), Math.abs(r.height - a) <= 1 && (a = r.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function Rg(e) {
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
function Ug(e) {
  var r = Rg(e);
  return bi.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Yg(e) {
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
var Cn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Hg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Wl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Fg(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Wl).filter(function(n, a, t) {
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
          bi.indexOf(r.phase) < 0 && console.error(_r(Cn, r.name, '"phase"', "either " + bi.join(", "), '"' + String(r.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Wl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(_r(Hg, String(r.name), a, a));
      });
    });
  });
}
function jg(e, r) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = r(a);
    if (!n.has(t))
      return n.add(t), !0;
  });
}
function Wg(e) {
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
var Gl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Gg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ql = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xl() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function qg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? ql : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ql, o),
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
        g(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: Tn(i) ? fa(i) : i.contextElement ? fa(i.contextElement) : [],
          popper: fa(s)
        };
        var k = Ug(Wg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = k.filter(function(V) {
          return V.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = jg([].concat(k, d.options.modifiers), function(V) {
            var Y = V.name;
            return Y;
          });
          if (Fg(S), Gr(d.options.placement) === ko) {
            var E = d.orderedModifiers.find(function(V) {
              var Y = V.name;
              return Y === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var M = zr(s), D = M.marginTop, b = M.marginRight, $ = M.marginBottom, U = M.marginLeft;
          [D, b, $, U].some(function(V) {
            return parseFloat(V);
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
          var w = d.elements, P = w.reference, k = w.popper;
          if (!Xl(P, k)) {
            process.env.NODE_ENV !== "production" && console.error(Gl);
            return;
          }
          d.rects = {
            reference: zg(P, el(k), d.options.strategy === "fixed"),
            popper: Lg(k)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(V) {
            return d.modifiersData[V.name] = Object.assign({}, V.data);
          });
          for (var S = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Gg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var M = d.orderedModifiers[E], D = M.fn, b = M.options, $ = b === void 0 ? {} : b, U = M.name;
            typeof D == "function" && (d = D({
              state: d,
              options: $,
              name: U,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Yg(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Xl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Gl), m;
    m.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function y() {
      d.orderedModifiers.forEach(function(h) {
        var w = h.name, P = h.options, k = P === void 0 ? {} : P, S = h.effect;
        if (typeof S == "function") {
          var E = S({
            state: d,
            name: w,
            instance: m,
            options: k
          }), M = function() {
          };
          v.push(E || M);
        }
      });
    }
    function g() {
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
function Xg(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Ht);
  }), i && s.addEventListener("resize", n.update, Ht), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Ht);
    }), i && s.removeEventListener("resize", n.update, Ht);
  };
}
const Kg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Xg,
  data: {}
};
function Zg(e) {
  var r = e.state, n = e.name;
  r.modifiersData[n] = bd({
    reference: r.rects.reference,
    element: r.rects.popper,
    strategy: "absolute",
    placement: r.placement
  });
}
const Jg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Zg,
  data: {}
};
function Qg(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !kr(o) || !Hr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function _g(e) {
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
const xg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qg,
  effect: _g,
  requires: ["computeStyles"]
};
var eb = [Kg, Jg, wd, xg], rb = /* @__PURE__ */ qg({
  defaultModifiers: eb
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
function Cd(e) {
  var r = T(null), n = T(null), a = T({
    width: 0,
    height: 0
  }), t = ba(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit($, U) {
      U ? (M(), C(e.onOpen)) : C(e.onClose);
    }
  }), {
    zIndex: o
  } = Mt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: $,
      height: U
    } = Vn(r.value);
    a.value = {
      width: Re($),
      height: Re(U)
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
    e.trigger === "hover" && (s = !0, D());
  }, f = /* @__PURE__ */ function() {
    var $ = Zl(function* () {
      e.trigger === "hover" && (s = !1, yield Dr(), !i && b());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), m = () => {
    e.trigger === "hover" && (i = !0);
  }, y = /* @__PURE__ */ function() {
    var $ = Zl(function* () {
      e.trigger === "hover" && (i = !1, yield Dr(), !s && b());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), g = () => {
    e.closeOnClickReference && t.value ? b() : D();
  }, h = () => {
    b();
  }, w = ($) => {
    e.trigger === "click" && (h(), C(e.onClickOutside, $));
  }, P = () => {
    M(), C(e.onClosed);
  }, k = () => {
    var {
      offsetX: $,
      offsetY: U,
      placement: V
    } = e;
    u();
    var Y = {
      x: Re($),
      y: Re(U)
    };
    switch (V) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: Y.x,
          distance: Y.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: Y.x,
          distance: Y.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: Y.x,
          distance: Y.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: Y.x,
          distance: -Y.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: Y.x,
          distance: -Y.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: Y.x,
          distance: -Y.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: Y.y,
          distance: Y.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: Y.y,
          distance: -Y.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: V,
          skidding: Y.y,
          distance: -Y.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: V,
          skidding: Y.x,
          distance: -Y.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: V,
          skidding: Y.x,
          distance: Y.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: V,
          skidding: Y.y,
          distance: Y.x
        };
    }
  }, S = () => {
    var {
      placement: $,
      skidding: U,
      distance: V
    } = k(), Y = [ca({}, Og, {
      enabled: t.value
    }), ca({}, Mg, {
      options: {
        offset: [U, V]
      }
    }), ca({}, wd, {
      options: {
        adaptive: !1,
        gpuAcceleration: !1
      },
      enabled: t.value
    }), {
      name: "applyTransformOrigin",
      enabled: t.value,
      phase: "beforeWrite",
      fn(Z) {
        var {
          state: te
        } = Z;
        te.styles.popper.transformOrigin = d();
      }
    }];
    return {
      placement: $,
      modifiers: Y,
      strategy: e.strategy
    };
  }, E = () => e.reference ? r.value.querySelector(e.reference) : r.value, M = () => {
    l.setOptions(S());
  }, D = () => {
    var {
      disabled: $
    } = e;
    $ || (t.value = !0, C(e["onUpdate:show"], !0));
  }, b = () => {
    t.value = !1, C(e["onUpdate:show"], !1);
  };
  return Rs(E, "click", w), de(() => [e.offsetX, e.offsetY, e.placement, e.strategy], M), de(() => e.disabled, b), St(() => {
    var $;
    l = rb(($ = E()) != null ? $ : r.value, n.value, S());
  }), kt(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: g,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: h,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: y,
    handleClosed: P,
    resize: M,
    open: D,
    close: b
  };
}
var nb = {
  type: {
    type: String,
    default: "default"
  },
  color: String,
  content: String,
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  reference: String,
  placement: {
    type: String,
    default: "bottom"
  },
  strategy: {
    type: String,
    default: "absolute"
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
  sameWidth: Boolean,
  closeOnClickReference: Boolean,
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  onClickOutside: L(),
  "onUpdate:show": L()
}, {
  n: ab,
  classes: tb
} = ae("tooltip");
function ob(e, r) {
  return p(), O(
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
    [F(e.$slots, "default"), (p(), Ce(Jr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [_(Fe, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: me(() => [Te(N(
        "div",
        {
          ref: "popover",
          class: c(e.classes(e.n("tooltip"), e.n("$--box"))),
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
        [N(
          "div",
          {
            style: G({
              background: e.color,
              width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
            }),
            class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
          },
          [F(e.$slots, "content", {}, () => [$e(
            ie(e.content),
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
var Sd = ne({
  name: "VarTooltip",
  props: nb,
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
      close: g,
      // expose
      resize: h
    } = Cd(e);
    return {
      toSizeUnit: we,
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      n: ab,
      classes: tb,
      handleHostClick: i,
      handlePopoverClose: f,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handleClosed: m,
      resize: h,
      open: y,
      close: g
    };
  }
});
Sd.render = ob;
const Jn = Sd;
oe(Jn);
var US = Jn, ib = {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
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
var {
  n: lb,
  classes: sb
} = ae("ellipsis"), ub = {
  key: 0
};
function db(e, r) {
  var n = le("var-tooltip");
  return p(), Ce(
    n,
    Ot(uo(e.tooltip)),
    {
      content: me(() => [F(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), O(
          "span",
          ub,
          ie(e.tooltip.content),
          1
          /* TEXT */
        )) : F(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: me(() => [N(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: G(e.rootStyles),
          onClick: r[0] || (r[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [F(e.$slots, "default")],
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
var kd = ne({
  name: "VarEllipsis",
  components: {
    VarTooltip: Jn
  },
  props: ib,
  setup(e) {
    var r = T(!1), n = A(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = A(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Ci({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: lb,
      classes: sb,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
kd.render = db;
const Ha = kd;
oe(Ha);
var YS = Ha, vb = {
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
  zIndex: {
    type: [Number, String],
    default: 90
  },
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
  onClick: L(),
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  "onUpdate:active": L()
};
function fb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  classes: Do,
  n: pr
} = ae("fab");
const Fa = ne({
  name: "VarFab",
  inheritAttrs: !1,
  props: vb,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = ba(e, "active"), o = T(null), l = T(null), i = (v, f, m) => {
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
    }) : null : Te(_(dr, {
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
        class: Do([t.value, pr("trigger-active-icon"), pr("trigger-inactive-icon")]),
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
    }), Rs(o, "click", u), () => {
      var v, f, m = Us((f = C(n.default)) != null ? f : []), y = Ni(e.drag) ? {} : e.drag;
      return _(Xn, De({
        ref: l,
        class: Do(pr("--position-" + e.position), [!e.fixed, pr("--absolute")]),
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
        onClick: (g) => i(g, !t.value, m.length)
      }, a), {
        default: () => [_("div", {
          class: Do(pr(), pr("--direction-" + e.direction), [e.safeArea, pr("--safe-area")]),
          ref: o,
          onMouseleave: () => s(!1, m.length),
          onMouseenter: () => s(!0, m.length)
        }, [_(Fe, {
          name: pr("--active-transition")
        }, fb(v = d()) ? v : {
          default: () => [v]
        }), _(Fe, {
          name: pr("--actions-transition-" + e.direction),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Te(_("div", {
            class: pr("actions"),
            onClick: (g) => g.stopPropagation()
          }, [m.map((g) => _("div", {
            class: pr("action")
          }, [g]))]), [[Rr, e.show && t.value && m.length]])]
        })])]
      });
    };
  }
});
oe(Fa);
var HS = Fa, cb = {
  disabled: Boolean,
  readonly: Boolean,
  scrollToError: String,
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  },
  onSubmit: L(),
  onReset: L()
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
var {
  n: mb
} = ae("form");
function hb(e, r) {
  return p(), O(
    "form",
    {
      class: c(e.n()),
      onSubmit: r[0] || (r[0] = function() {
        return e.handleSubmit && e.handleSubmit(...arguments);
      }),
      onReset: r[1] || (r[1] = function() {
        return e.handleReset && e.handleReset(...arguments);
      })
    },
    [F(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var $d = ne({
  name: "VarForm",
  props: cb,
  setup(e) {
    var r = A(() => e.disabled), n = A(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Am(), o = (f) => {
      setTimeout(() => {
        var m = vn(f), y = m === window ? 0 : ml(m), g = ml(f) - y - Re(e.scrollToErrorOffsetY);
        ga(m, {
          top: g,
          animation: Ho
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var f = Ql(function* (m) {
        m.preventDefault();
        var y = yield s();
        C(e.onSubmit, y);
      });
      return function(y) {
        return f.apply(this, arguments);
      };
    }(), i = (f) => {
      f.preventDefault(), u(), C(e.onReset);
    }, s = /* @__PURE__ */ function() {
      var f = Ql(function* () {
        var m = yield Promise.all(a.map((P) => {
          var {
            validate: k
          } = P;
          return k();
        }));
        if (e.scrollToError) {
          var [, y] = rf(m, (P) => P === !1, e.scrollToError), g = y > -1;
          if (g) {
            var h, w = (h = a[y].instance.proxy) == null ? void 0 : h.$el;
            o(w);
          }
          return !g;
        }
        return m.every((P) => P === !0);
      });
      return function() {
        return f.apply(this, arguments);
      };
    }(), u = () => a.forEach((f) => {
      var {
        reset: m
      } = f;
      return m();
    }), d = () => a.forEach((f) => {
      var {
        resetValidation: m
      } = f;
      return m();
    }), v = {
      disabled: r,
      readonly: n
    };
    return t(v), {
      n: mb,
      handleSubmit: l,
      handleReset: i,
      validate: s,
      reset: u,
      resetValidation: d
    };
  }
});
$d.render = hb;
const On = $d;
On.useValidation = Pr;
On.useForm = Ir;
oe(On);
var FS = On, pb = {
  src: String,
  fit: {
    type: String,
    default: "fill"
  },
  alt: String,
  title: String,
  width: [String, Number],
  height: [String, Number],
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: String,
  error: String,
  lazy: Boolean,
  ripple: Boolean,
  block: {
    type: Boolean,
    default: !0
  },
  onClick: L(),
  onLoad: L(),
  onError: L()
}, {
  n: gb,
  classes: bb
} = ae("image"), yb = ["alt", "title", "lazy-loading", "lazy-error"], wb = ["alt", "title", "src"];
function Cb(e, r) {
  var n = Ae("lazy"), a = Ae("ripple");
  return Te((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? Te((p(), O("img", {
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
    }, null, 46, yb)), [[n, e.src]]) : ee("v-if", !0), !e.lazy && !e.showErrorSlot ? (p(), O("img", {
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
    }, null, 46, wb)) : ee("v-if", !0), e.showErrorSlot ? F(e.$slots, "error", {
      key: 2
    }) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Td = ne({
  name: "VarImage",
  directives: {
    Lazy: wa,
    Ripple: Xe
  },
  props: pb,
  setup(e, r) {
    var {
      slots: n
    } = r, a = T(!1), t = (i) => {
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
      n: gb,
      classes: bb,
      showErrorSlot: a,
      toSizeUnit: we,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
Td.render = Cb;
const ja = Td;
oe(ja);
var jS = ja, Od = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Sb() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = ir(Od);
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
  autoplay: [String, Number],
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
  indicatorColor: String,
  vertical: Boolean,
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: L()
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
var kb = 250, $b = 20, {
  n: Tb,
  classes: Ob
} = ae("swipe"), Pb = ["onClick"];
function Ib(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: G({
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
      [F(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), F(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), O(
        Be,
        null,
        We(e.length, (n, a) => (p(), O("div", {
          class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
          style: G({
            background: e.indicatorColor
          }),
          key: n,
          onClick: (t) => e.to(a)
        }, null, 14, Pb))),
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
  props: Pd,
  setup(e) {
    var r = T(null), n = T(0), a = A(() => e.vertical), t = T(0), o = T(0), l = T(!1), i = T(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Sb(), {
      popup: v,
      bindPopup: f
    } = If(), {
      deltaX: m,
      deltaY: y,
      moveX: g,
      moveY: h,
      offsetX: w,
      offsetY: P,
      touching: k,
      direction: S,
      startTime: E,
      startTouch: M,
      moveTouch: D,
      endTouch: b
    } = mo(), $ = !1, U = -1, V = (j) => s.find((re) => {
      var {
        index: ue
      } = re;
      return ue.value === j;
    }), Y = () => {
      e.loop && (o.value >= 0 && V(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && V(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (V(d.value - 1).setTranslate(0), V(0).setTranslate(0)));
    }, Z = (j) => {
      var re = cr(j) ? j : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: ue
      } = e;
      return re <= -1 ? ue ? -1 : 0 : re >= d.value ? ue ? d.value : d.value - 1 : re;
    }, te = (j) => {
      var {
        loop: re
      } = e;
      return j === -1 ? re ? d.value - 1 : 0 : j === d.value ? re ? 0 : d.value - 1 : j;
    }, se = (j) => e.loop ? j < 0 ? d.value + j : j >= d.value ? j - d.value : j : dn(j, 0, d.value - 1), H = (j) => {
      var re = o.value >= n.value, ue = o.value <= -t.value, ye = 0, Ue = -(t.value - n.value);
      l.value = !0, (re || ue) && (l.value = !0, o.value = ue ? ye : Ue, V(0).setTranslate(0), V(d.value - 1).setTranslate(0)), fo(() => {
        l.value = !1, C(j);
      });
    }, R = () => {
      $ || (i.value = se(z(e.initialIndex)), $ = !0);
    }, W = () => {
      var {
        autoplay: j
      } = e;
      !j || d.value <= 1 || (B(), U = window.setTimeout(() => {
        x(), W();
      }, z(j)));
    }, B = () => {
      U && clearTimeout(U);
    }, I = (j) => {
      o.value = j, Y();
    }, Q = (j) => {
      d.value <= 1 || !e.touchable || (M(j), B(), H(() => {
        l.value = !0;
      }));
    }, q = (j) => {
      var {
        touchable: re,
        vertical: ue
      } = e;
      if (!(!k.value || !re)) {
        D(j);
        var ye = ue ? "vertical" : "horizontal";
        S.value === ye && (j.preventDefault(), I(o.value + (ue ? h.value : g.value)));
      }
    }, X = () => {
      if (k.value) {
        var {
          vertical: j,
          onChange: re
        } = e;
        b();
        var ue = j ? y.value < 0 : m.value < 0, ye = j ? P.value : w.value, Ue = performance.now() - E.value <= kb && ye >= $b, Le = Ue ? Z(ue ? i.value + 1 : i.value - 1) : Z();
        l.value = !1, I(Le * -n.value);
        var He = i.value;
        i.value = te(Le), W(), He !== i.value && C(re, i.value);
      }
    }, K = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((j) => {
        j.setTranslate(0);
      }), W(), setTimeout(() => {
        l.value = !1;
      }));
    }, x = (j) => {
      if (!(d.value <= 1)) {
        R();
        var {
          loop: re,
          onChange: ue
        } = e, ye = i.value;
        i.value = se(ye + 1), (j == null ? void 0 : j.event) !== !1 && C(ue, i.value), H(() => {
          if (ye === d.value - 1 && re) {
            V(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          ye !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, ce = (j) => {
      if (!(d.value <= 1)) {
        R();
        var {
          loop: re,
          onChange: ue
        } = e, ye = i.value;
        i.value = se(ye - 1), (j == null ? void 0 : j.event) !== !1 && C(ue, i.value), H(() => {
          if (ye === 0 && re) {
            V(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          ye !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, ke = (j, re) => {
      if (!(d.value <= 1 || j === i.value)) {
        j = j < 0 ? 0 : j, j = j >= d.value ? d.value : j;
        var ue = j > i.value ? x : ce, ye = Math.abs(j - i.value);
        Array.from({
          length: ye
        }).forEach((Ue, Le) => {
          ue({
            event: Le === ye - 1 ? re == null ? void 0 : re.event : !1
          });
        });
      }
    }, Me = {
      size: n,
      vertical: a
    };
    return u(Me), C(f, null), de(() => d.value, /* @__PURE__ */ xl(function* () {
      yield Dr(), R(), K();
    })), v && de(() => v.show.value, /* @__PURE__ */ function() {
      var j = xl(function* (re) {
        re ? (yield Dr(), K()) : B();
      });
      return function(re) {
        return j.apply(this, arguments);
      };
    }()), pn(K), co(B), Pt(K), {
      n: Tb,
      classes: Ob,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      trackTranslate: o,
      lockDuration: l,
      handleTouchstart: Q,
      handleTouchmove: q,
      handleTouchend: X,
      next: x,
      prev: ce,
      to: ke,
      resize: K,
      toNumber: z
    };
  }
});
Id.render = Ib;
const Pn = Id;
oe(Pn);
var WS = Pn;
function Mb() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = or(Od);
  return e || Or("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Bb
} = ae("swipe-item");
function Eb(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Md = ne({
  name: "VarSwipeItem",
  setup() {
    var e = T(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = Mb(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: Bb,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Md.render = Eb;
const In = Md;
oe(In);
var GS = In;
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
var Vb = Si({
  show: Boolean,
  imagePreventDefault: Boolean,
  images: {
    type: Array,
    default: () => []
  },
  /** @deprecated Use initialIndex to instead. */
  current: String,
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: Boolean,
  "onUpdate:show": L(),
  onLongPress: L()
}, xe(Pd, ["loop", "indicator", "onChange"]), xe(It, [
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
  classes: Nb
} = ae("image-preview"), Ao = 12, rs = 200, Db = 350, ns = 200, Ab = 500, zb = ["onTouchstart"], Lb = ["src", "alt"];
function Rb(e, r) {
  var n = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
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
      default: me(() => [(p(!0), O(
        Be,
        null,
        We(e.images, (l, i) => (p(), Ce(n, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: l
        }, {
          default: me(() => [N("div", {
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
          }, [N("img", {
            class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
            src: l,
            alt: l
          }, null, 10, Lb)], 46, zb)]),
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
        return [F(e.$slots, "indicator", {
          index: i,
          length: s
        }, () => [e.indicator && e.images.length > 1 ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("indicators"))
          },
          ie(i + 1) + " / " + ie(s),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)])];
      }),
      _: 3
      /* FORWARDED */
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), F(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), Ce(t, {
      key: 0,
      class: c(e.n("close-icon")),
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: e.close
    }, null, 8, ["class", "onClick"])) : ee("v-if", !0)]), N(
      "div",
      {
        class: c(e.n("extra"))
      },
      [F(e.$slots, "extra")],
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
    VarSwipeItem: In,
    VarPopup: Ur,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Vb,
  setup(e) {
    var r = T(!1), n = T(1), a = T(0), t = T(0), o = T(void 0), l = T(void 0), i = T(!0), s = T(null), {
      moveX: u,
      moveY: d,
      distance: v,
      startTime: f,
      startTouch: m,
      moveTouch: y,
      endTouch: g
    } = mo(), h = {
      start: null,
      prev: null
    }, w = null, P = null, k = !1, S = A(() => {
      var {
        images: q,
        current: X,
        initialIndex: K
      } = e;
      if (K != null)
        return z(K);
      var x = q.findIndex((ce) => ce === X);
      return Math.max(x, 0);
    }), E = A(() => {
      var {
        imagePreventDefault: q,
        show: X
      } = e;
      return X && q;
    }), M = () => {
      n.value = z(e.zoom), i.value = !1, h.prev = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, ns);
    }, D = () => {
      n.value = 1, a.value = 0, t.value = 0, i.value = !0, h.prev = null, o.value = void 0, l.value = void 0;
    }, b = (q) => h.prev ? v.value <= Ao && performance.now() - f.value <= rs && h.prev === q : !1, $ = (q) => !q || !h.start || !h.prev ? !1 : v.value <= Ao && performance.now() - f.value < Db && (q === h.start || q.parentNode === h.start), U = () => {
      g(), window.clearTimeout(P), k = !1, h.start = null;
    }, V = (q) => {
      if (g(), window.clearTimeout(P), k) {
        k = !1;
        return;
      }
      var X = $(q.target);
      w = window.setTimeout(() => {
        X && R(), h.start = null;
      }, rs);
    }, Y = (q, X) => {
      window.clearTimeout(w), window.clearTimeout(P);
      var K = q.currentTarget;
      if (h.start = K, P = window.setTimeout(() => {
        k = !0, C(e.onLongPress, X);
      }, Ab), b(K)) {
        n.value > 1 ? D() : M();
        return;
      }
      m(q), h.prev = K;
    }, Z = (q) => {
      var {
        offsetWidth: X,
        offsetHeight: K
      } = q, {
        naturalWidth: x,
        naturalHeight: ce
      } = q.querySelector("." + es("image"));
      return {
        width: X,
        height: K,
        imageRadio: ce / x,
        rootRadio: K / X,
        zoom: z(e.zoom)
      };
    }, te = (q) => {
      var {
        zoom: X,
        imageRadio: K,
        rootRadio: x,
        width: ce,
        height: ke
      } = Z(q);
      if (!K)
        return 0;
      var Me = K > x ? ke / K : ce;
      return Math.max(0, (X * Me - ce) / 2) / X;
    }, se = (q) => {
      var {
        zoom: X,
        imageRadio: K,
        rootRadio: x,
        width: ce,
        height: ke
      } = Z(q);
      if (!K)
        return 0;
      var Me = K > x ? ke : ce * K;
      return Math.max(0, (X * Me - ke) / 2) / X;
    }, H = (q) => {
      if (h.prev) {
        y(q);
        var X = q.currentTarget;
        if (v.value > Ao && window.clearTimeout(P), n.value > 1) {
          var K = te(X), x = se(X);
          a.value = dn(a.value + u.value, -K, K), t.value = dn(t.value + d.value, -x, x);
        }
        h.prev = X;
      }
    }, R = () => {
      if (n.value > 1) {
        D(), setTimeout(() => C(e["onUpdate:show"], !1), ns);
        return;
      }
      C(e["onUpdate:show"], !1);
    }, W = (q) => {
      var X;
      (X = s.value) == null || X.prev(q);
    }, B = (q) => {
      var X;
      (X = s.value) == null || X.next(q);
    }, I = (q, X) => {
      var K;
      (K = s.value) == null || K.to(q, X);
    }, Q = (q) => {
      e.imagePreventDefault && e.show && q.preventDefault();
    };
    return fn(() => document, "contextmenu", Q), de(() => e.show, (q) => {
      r.value = q;
    }, {
      immediate: !0
    }), {
      n: es,
      classes: Nb,
      swipeRef: s,
      isPreventDefault: E,
      initialIndex: S,
      popupShow: r,
      scale: n,
      translateX: a,
      translateY: t,
      canSwipe: i,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: Y,
      handleTouchmove: H,
      handleTouchend: V,
      handleTouchcancel: U,
      close: R,
      prev: W,
      next: B,
      to: I
    };
  }
});
Bd.render = Rb;
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
function Ub(e) {
  return e === void 0 && (e = {}), Je(e) ? ma({}, ha, {
    images: [e]
  }) : Ie(e) ? ma({}, ha, {
    images: e
  }) : ma({}, ha, e);
}
function Lr(e) {
  if (aa()) {
    Lr.close();
    var r = Ub(e), n = Ye(r);
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
oe(Nt);
oe(Nt, Lr);
var qS = Nt, Zt = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: Boolean,
  disabled: Boolean,
  onScroll: L()
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
  n: Yb,
  classes: Hb
} = ae("sticky");
function Fb(e, r) {
  return p(), O(
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
    [N(
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
      [F(e.$slots, "default")],
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
    var r = T(null), n = T(null), a = T(!1), t = T("0px"), o = T("0px"), l = T("auto"), i = T("auto"), s = T("auto"), u = T("auto"), d = A(() => !e.disabled && e.cssMode), v = A(() => !e.disabled && !e.cssMode && a.value), f = A(() => Re(e.offsetTop)), m, y = () => {
      var {
        cssMode: k,
        disabled: S
      } = e;
      if (!S) {
        var E = 0;
        if (m !== window) {
          var {
            top: M
          } = Qe(m);
          E = M;
        }
        var D = n.value, b = r.value, {
          top: $,
          left: U
        } = Qe(b), V = $ - E;
        return V <= f.value ? (k || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = E + f.value + "px", o.value = U + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: V,
          isFixed: !1
        });
      }
    }, g = () => {
      if (m) {
        var k = y();
        k && C(e.onScroll, k.offsetTop, k.isFixed);
      }
    }, h = /* @__PURE__ */ function() {
      var k = ts(function* () {
        a.value = !1, yield mf(), y();
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var k = ts(function* () {
        yield Dr(), m = vn(r.value), m !== window && m.addEventListener("scroll", g), g();
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), P = () => {
      m !== window && m.removeEventListener("scroll", g);
    };
    return de(() => e.disabled, h), tr(w), co(P), Pt(h), fn(() => window, "scroll", g), {
      n: Yb,
      classes: Hb,
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
      toNumber: z
    };
  }
});
Ed.render = Fb;
const Mn = Ed;
oe(Mn);
var XS = Mn, Vd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function jb() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = ir(Vd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Wb() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Vd);
  return n || Or("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Gb = {
  index: [Number, String]
}, {
  n: qb,
  classes: Xb
} = ae("index-anchor");
function Kb(e, r) {
  return p(), Ce(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: me(() => [N(
      "div",
      De({
        class: e.n()
      }, e.$attrs),
      [F(e.$slots, "default", {}, () => [$e(
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
var Nd = ne({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Mn
  },
  inheritAttrs: !1,
  props: Gb,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = Wb(), t = T(0), o = T(!1), l = A(() => e.index), i = T(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = n, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, y = (h) => {
      o.value = h;
    }, g = {
      index: r,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: y
    };
    return a(g), {
      n: qb,
      classes: Xb,
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
Nd.render = Kb;
const Wa = Nd;
oe(Wa);
var KS = Wa, Zb = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  /** @deprecated Use stickyCssMode to instead. */
  cssMode: Boolean,
  stickyCssMode: Boolean,
  hideList: Boolean,
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: String,
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: L(),
  onChange: L()
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
  n: Jb,
  classes: Qb
} = ae("index-bar"), _b = ["onClick"];
function xb(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [F(e.$slots, "default"), N(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), O(
        Be,
        null,
        We(e.anchorNameList, (n) => (p(), O("li", {
          key: n,
          class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
          style: G({
            color: e.active === n && e.highlightColor ? e.highlightColor : ""
          }),
          onClick: (a) => e.anchorClick({
            anchorName: n,
            manualCall: !0
          })
        }, ie(n), 15, _b))),
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
var Dd = ne({
  name: "VarIndexBar",
  props: Zb,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = jb(), t = T(""), o = T(null), l = T([]), i = T(), s = A(() => e.sticky), u = A(() => e.stickyCssMode || e.cssMode), d = A(() => Re(e.stickyOffsetTop)), v = A(() => e.zIndex), f = null, m = !1, y = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(y);
    var g = (D, b) => {
      var $ = Di(D) ? D.name.value : D;
      $ === i.value || $ === void 0 || (i.value = $, (b == null ? void 0 : b.event) !== !1 && C(e.onChange, $));
    }, h = () => {
      if (Ai(f))
        return 0;
      var {
        top: D
      } = Qe(f), {
        scrollTop: b
      } = f, {
        top: $
      } = Qe(o.value);
      return b - D + $;
    }, w = () => {
      var D = pa(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, $ = h();
      n.forEach((U, V) => {
        var Y = U.ownTop.value, Z = D - Y + d.value - $, te = V === n.length - 1 ? b : n[V + 1].ownTop.value - U.ownTop.value;
        U.setDisabled(!0), Z >= 0 && Z < te && t.value === "" && (U.setDisabled(!1), g(U));
      });
    }, P = /* @__PURE__ */ function() {
      var D = Ft(function* (b) {
        var {
          anchorName: $,
          manualCall: U = !1,
          options: V
        } = b;
        if (U && C(e.onClick, $), !($ === i.value && !m)) {
          var Y = n.find((H) => {
            var {
              name: R
            } = H;
            return $ === R.value;
          });
          if (Y) {
            var Z = h(), te = Y.ownTop.value - d.value + Z, se = Li(f);
            t.value = $, g($, V), yield ga(f, {
              left: se,
              top: te,
              animation: Ms,
              duration: z(e.duration)
            }), fo(() => {
              t.value = "";
            });
          }
        }
      });
      return function($) {
        return D.apply(this, arguments);
      };
    }(), k = /* @__PURE__ */ function() {
      var D = Ft(function* () {
        yield Dr(), f = vn(o.value);
      });
      return function() {
        return D.apply(this, arguments);
      };
    }(), S = () => {
      f.addEventListener("scroll", w);
    }, E = () => {
      f.removeEventListener("scroll", w);
    }, M = (D, b) => {
      Sr(() => P({
        anchorName: D,
        options: b
      }));
    };
    return de(() => r.value, /* @__PURE__ */ Ft(function* () {
      yield Dr(), n.forEach((D) => {
        var {
          name: b,
          setOwnTop: $
        } = D;
        b.value && l.value.push(b.value), $();
      });
    })), tr(/* @__PURE__ */ Ft(function* () {
      yield k(), S();
    })), so(E), xn(() => {
      m = !0, E();
    }), pn(() => {
      !m || i.value === void 0 || (P({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: Jb,
      classes: Qb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: z,
      scrollTo: M,
      anchorClick: P
    };
  }
});
Dd.render = xb;
const Ga = Dd;
oe(Ga);
var ZS = Ga, rl = {
  value: {
    type: null,
    required: !0
  },
  id: {
    type: String,
    default: ""
  },
  isFocus: Boolean,
  size: {
    type: String,
    default: "normal"
  },
  variant: {
    type: String,
    default: "standard"
  },
  placeholder: String,
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: String,
  focusColor: String,
  blurColor: String,
  errorMessage: String,
  formDisabled: Boolean,
  disabled: Boolean,
  clearable: Boolean,
  cursor: String,
  composing: Boolean,
  onClick: L(),
  onClear: L()
}, {
  n: zo,
  classes: e0
} = ae("field-decorator"), r0 = ["for"];
function n0(e, r) {
  var n = le("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: G({
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
        [F(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), N(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      ), e.placeholder && e.hint ? (p(), O("label", {
        key: 0,
        class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
        style: G({
          color: e.color
        }),
        for: e.id
      }, [N(
        "span",
        null,
        ie(e.placeholder),
        1
        /* TEXT */
      )], 14, r0)) : ee("v-if", !0), N(
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
        }, null, 8, ["class", "onClick"])) : ee("v-if", !0), F(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), O(
      Be,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), O(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: G({
            borderColor: e.color
          })
        },
        [N(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: G({
              width: e.legendWidth
            })
          },
          [e.placeholder && e.hint ? (p(), Ce(Jr, {
            key: 0,
            to: "body"
          }, [N(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            ie(e.placeholder),
            3
            /* TEXT, CLASS */
          )])) : ee("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (p(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [N(
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ad = ne({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ne
  },
  props: rl,
  setup(e, r) {
    var {
      slots: n
    } = r, a = T(null), t = T(""), o = A(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = A(() => e.hint && (!Fr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Fr(f) || m))
        return zo("--placeholder-hidden");
      if (l.value)
        return zo("--placeholder-hint");
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
      var g = Vn(a.value), h = "var(--field-decorator-outlined-" + v + "-placeholder-space)";
      t.value = "calc(" + g.width + " * 0.75 + " + h + " * 2)";
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
      n: zo,
      classes: e0,
      isEmpty: Fr,
      handleClear: u,
      handleClick: d
    };
  }
});
Ad.render = n0;
const zd = Ad;
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
var a0 = ki({
  modelValue: String,
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text"
  },
  textarea: Boolean,
  rows: {
    type: [String, Number],
    default: 8
  },
  maxlength: [String, Number],
  readonly: Boolean,
  resize: Boolean,
  autofocus: Boolean,
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: Array,
  enterkeyhint: String,
  onFocus: L(),
  onBlur: L(),
  onInput: L(),
  onChange: L(),
  onClear: L(),
  "onUpdate:modelValue": L()
}, xe(rl, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: t0,
  classes: o0
} = ae("input"), i0 = ["placeholder", "enterkeyhint"], l0 = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], s0 = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function u0(e, r) {
  var n = le("var-field-decorator"), a = le("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[13] || (r[13] = function() {
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
        "append-icon": me(() => [F(e.$slots, "append-icon")]),
        default: me(() => [e.normalizedType === "password" ? (p(), O("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: G({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, i0)) : ee("v-if", !0), e.textarea ? (p(), O("textarea", {
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
          onCompositionstart: r[4] || (r[4] = function() {
            return e.handleCompositionStart && e.handleCompositionStart(...arguments);
          }),
          onCompositionend: r[5] || (r[5] = function() {
            return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
          })
        }, `
      `, 46, l0)) : (p(), O("input", {
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
          onFocus: r[6] || (r[6] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          }),
          onBlur: r[7] || (r[7] = function() {
            return e.handleBlur && e.handleBlur(...arguments);
          }),
          onInput: r[8] || (r[8] = function() {
            return e.handleInput && e.handleInput(...arguments);
          }),
          onChange: r[9] || (r[9] = function() {
            return e.handleChange && e.handleChange(...arguments);
          }),
          onCompositionstart: r[10] || (r[10] = function() {
            return e.handleCompositionStart && e.handleCompositionStart(...arguments);
          }),
          onCompositionend: r[11] || (r[11] = function() {
            return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
          })
        }, null, 46, s0))]),
        _: 2
        /* DYNAMIC */
      }, [e.$slots["prepend-icon"] ? {
        name: "prepend-icon",
        fn: me(() => [F(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), _(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: r[12] || (r[12] = Tr(() => {
      }, ["stop"]))
    }, Jt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: me(() => [F(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"])],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Ld = ne({
  name: "VarInput",
  components: {
    VarFormDetails: nr,
    VarFieldDecorator: zd
  },
  props: a0,
  setup(e) {
    var r = T("var-input-" + ea().uid), n = T(null), a = T(!1), t = T(!1), o = A(() => e.type === "number" ? "text" : e.type), l = A(() => {
      var {
        maxlength: W,
        modelValue: B
      } = e;
      return W ? Fr(B) ? "0 / " + W : String(B).length + "/" + W : "";
    }), i = A(() => e.disabled || e.readonly ? "" : "text"), s = A(() => {
      var {
        hint: W,
        blurColor: B,
        focusColor: I
      } = e;
      if (!W)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? I || "var(--field-decorator-focus-color)" : B || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Ir(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: y
    } = Pr(), g = (W) => {
      ze(() => {
        var {
          validateTrigger: B,
          rules: I,
          modelValue: Q
        } = e;
        f(B, W, I, Q);
      });
    }, h = (W) => {
      a.value = !0, C(e.onFocus, W), g("onFocus");
    }, w = (W) => {
      a.value = !1, C(e.onBlur, W), g("onBlur");
    }, P = (W) => {
      var B = W.target, {
        value: I
      } = B;
      return e.type === "number" && (I = $(I)), V(U(I));
    }, k = () => {
      t.value = !0;
    }, S = (W) => {
      t.value && (t.value = !1, W.target.dispatchEvent(new Event("input")));
    }, E = (W) => {
      if (!t.value) {
        var B = P(W);
        C(e["onUpdate:modelValue"], B), C(e.onInput, B, W), g("onInput");
      }
    }, M = (W) => {
      var B = P(W);
      C(e.onChange, B, W), g("onChange");
    }, D = () => {
      var {
        disabled: W,
        readonly: B,
        clearable: I,
        onClear: Q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || W || B || !I || (C(e["onUpdate:modelValue"], ""), C(Q, ""), g("onClear"));
    }, b = (W) => {
      var {
        disabled: B,
        onClick: I
      } = e;
      d != null && d.disabled.value || B || (C(I, W), g("onClick"));
    }, $ = (W) => {
      var B = W.indexOf("-"), I = W.indexOf(".");
      return B > -1 && (W = B === 0 ? "-" + W.replace(/-/g, "") : W.replace(/-/g, "")), I > -1 && (W = W.slice(0, I + 1) + W.slice(I).replace(/\./g, "")), W.replace(/[^-0-9.]/g, "");
    }, U = (W) => e.modelModifiers.trim ? W.trim() : W, V = (W) => e.maxlength ? W.slice(0, z(e.maxlength)) : W, Y = (W) => {
      var {
        disabled: B
      } = e;
      d != null && d.disabled.value || B || W.target === n.value || (se(), W.preventDefault());
    }, Z = () => {
      C(e["onUpdate:modelValue"], ""), y();
    }, te = () => m(e.rules, e.modelValue), se = () => {
      var W;
      (W = n.value) == null || W.focus();
    }, H = () => {
      n.value.blur();
    }, R = {
      reset: Z,
      validate: te,
      resetValidation: y
    };
    return C(u, R), tr(() => {
      e.autofocus && se();
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
      n: t0,
      classes: o0,
      isEmpty: Fr,
      handleFocus: h,
      handleBlur: w,
      handleInput: E,
      handleChange: M,
      handleClear: D,
      handleClick: b,
      handleCompositionStart: k,
      handleCompositionEnd: S,
      handleMousedown: Y,
      validate: te,
      resetValidation: y,
      reset: Z,
      focus: se,
      blur: H
    };
  }
});
Ld.render = u0;
const Qn = Ld;
oe(Qn);
var JS = Qn, d0 = {
  type: {
    type: String,
    default: "default"
  },
  href: String,
  target: String,
  rel: String,
  to: [String, Object],
  replace: Boolean,
  underline: {
    type: String,
    default: "always"
  },
  disabled: Boolean,
  textSize: [String, Number],
  textColor: String,
  onClick: L()
}, {
  n: v0,
  classes: f0
} = ae("link");
function c0(e, r) {
  return p(), Ce(ra(e.tag), De(e.linkProps, {
    class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
    style: {
      color: e.textColor,
      fontSize: e.toSizeUnit(e.textSize)
    },
    onClick: e.handleClick
  }), {
    default: me(() => [F(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 16, ["class", "style", "onClick"]);
}
var Rd = ne({
  name: "VarLink",
  props: d0,
  setup(e) {
    var r = A(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), n = A(() => {
      var {
        disabled: t,
        href: o,
        target: l,
        to: i,
        replace: s,
        rel: u
      } = e;
      return t ? {} : o ? {
        href: o,
        target: l,
        rel: u
      } : i ? {
        to: i,
        target: l,
        replace: s
      } : {};
    }), a = (t) => {
      e.disabled || C(e.onClick, t);
    };
    return {
      n: v0,
      classes: f0,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
Rd.render = c0;
const qa = Rd;
oe(qa);
var QS = qa, m0 = {
  loading: Boolean,
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: Boolean,
  error: Boolean,
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: String,
  finishedText: String,
  errorText: String,
  onLoad: L(),
  "onUpdate:loading": L(),
  "onUpdate:error": L()
}, Ud = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function h0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(Ud);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Yd = Symbol("TAB_ITEM_BIND_LIST_KEY");
function p0() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Ud);
  return r || Or("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function g0() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = ir(Yd);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function b0() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = or(Yd);
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
function y0(e) {
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
  n: w0,
  classes: C0
} = ae("list");
function S0(e, r) {
  var n = le("var-loading"), a = Ae("ripple");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [F(e.$slots, "default"), e.loading ? F(e.$slots, "loading", {
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
        ie(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), _(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? F(e.$slots, "finished", {
      key: 1
    }, () => [N(
      "div",
      {
        class: c(e.n("finished"))
      },
      ie(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? F(e.$slots, "error", {
      key: 2
    }, () => [Te((p(), O(
      "div",
      {
        class: c(e.n("error")),
        onClick: r[0] || (r[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [$e(
        ie(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : ee("v-if", !0), N(
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
var Hd = ne({
  name: "VarList",
  directives: {
    Ripple: Xe
  },
  components: {
    VarLoading: cn
  },
  props: m0,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = b0(), a = T(null), t = T(null), o, l = () => {
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
      var d = y0(function* () {
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
      isNumber: cr,
      load: l,
      check: u,
      n: w0,
      classes: C0
    };
  }
});
Hd.render = S0;
const Xa = Hd;
oe(Xa);
var _S = Xa, k0 = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: Boolean,
  color: String,
  errorColor: String,
  height: [Number, String],
  top: [Number, String]
}, {
  classes: $0,
  n: ls
} = ae("loading-bar");
const T0 = ne({
  name: "VarLoadingBar",
  props: k0,
  setup(e) {
    return () => _("div", {
      class: $0(ls(), [e.error, ls("--error")]),
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
var Fd, jd, Po, Wd, ss, Gd = {}, O0 = {
  value: 0,
  opacity: 0,
  error: !1
}, er = Ye(O0), P0 = (e) => {
  Object.assign(er, e);
}, I0 = (e) => {
  Object.assign(er, e), Gd = e;
}, M0 = () => {
  Object.keys(Gd).forEach((e) => {
    er[e] !== void 0 && (er[e] = void 0);
  });
}, qd = () => {
  ss || (ss = !0, ta(T0, er));
}, nl = () => {
  Fd = window.setTimeout(() => {
    if (!(er.value >= 95)) {
      var e = Math.random();
      er.value < 70 && (e = Math.round(5 * Math.random())), er.value += e, nl();
    }
  }, 200);
}, al = () => {
  window.clearTimeout(jd), window.clearTimeout(Fd), window.clearTimeout(Po), window.clearTimeout(Wd);
}, B0 = () => {
  al(), er.error = !1, er.value = 0, qd(), Po = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), nl();
}, Xd = () => {
  al(), er.value = 100, Po = window.setTimeout(() => {
    er.opacity = 0, jd = window.setTimeout(() => {
      er.error = !1;
    }, 250);
  }, 300);
}, E0 = () => {
  al(), er.error = !0, er.value === 100 && (er.value = 0), qd(), Po = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), nl(), Wd = window.setTimeout(Xd, 300);
}, Kd = {
  start: B0,
  finish: Xd,
  error: E0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: P0,
  setDefaultOptions: I0,
  resetDefaultOptions: M0
}, xS = Kd;
const $i = Kd;
var V0 = {
  show: Boolean,
  disabled: Boolean,
  trigger: {
    type: String,
    default: "click"
  },
  reference: String,
  placement: {
    type: String,
    default: "cover-top-start"
  },
  strategy: {
    type: String,
    default: "absolute"
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
  sameWidth: Boolean,
  elevation: {
    type: [Boolean, String, Number],
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  popoverClass: String,
  closeOnClickReference: Boolean,
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  onClickOutside: L(),
  "onUpdate:show": L()
}, {
  n: N0,
  classes: D0
} = ae("menu");
function A0(e, r) {
  return p(), O(
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
    [F(e.$slots, "default"), (p(), Ce(Jr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [_(Fe, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: me(() => [Te(N(
        "div",
        {
          ref: "popover",
          style: G({
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
        [F(e.$slots, "menu")],
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
var Zd = ne({
  name: "VarMenu",
  props: V0,
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
      close: g,
      // expose
      resize: h
    } = Cd(e);
    return {
      popover: n,
      host: a,
      hostSize: t,
      show: o,
      zIndex: l,
      teleportDisabled: r,
      formatElevation: hr,
      toSizeUnit: we,
      n: N0,
      classes: D0,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: d,
      handlePopoverMouseleave: v,
      handlePopoverClose: f,
      handleClosed: m,
      resize: h,
      open: y,
      close: g
    };
  }
});
Zd.render = A0;
const Bn = Zd;
oe(Bn);
var ek = Bn, Jd = Symbol("SELECT_BIND_OPTION_KEY");
function z0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = ir(Jd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function L0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = or(Jd);
  return n || Or("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var R0 = {
  label: {},
  value: {}
}, {
  n: U0,
  classes: Y0
} = ae("option");
function H0(e, r) {
  var n = le("var-checkbox"), a = le("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return Te((p(), O(
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
    [N(
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
    ), e.multiple ? (p(), Ce(n, {
      key: 0,
      ref: "checkbox",
      "checked-color": e.focusColor,
      modelValue: e.optionSelected,
      "onUpdate:modelValue": r[0] || (r[0] = (l) => e.optionSelected = l),
      onClick: r[1] || (r[1] = Tr(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : ee("v-if", !0), N(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [F(e.$slots, "default", {}, () => [$e(
        ie(e.label),
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
var Qd = ne({
  name: "VarOption",
  directives: {
    Ripple: Xe,
    Hover: Ar
  },
  components: {
    VarCheckbox: jn,
    VarHoverOverlay: yr
  },
  props: R0,
  setup(e) {
    var r = T(!1), n = A(() => r.value), a = A(() => e.label), t = A(() => e.value), {
      select: o,
      bindSelect: l
    } = L0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, {
      hovering: v,
      handleHovering: f
    } = Xr(), m = () => {
      i.value && (r.value = !r.value), u(h);
    }, y = () => u(h), g = (w) => {
      r.value = w;
    }, h = {
      label: a,
      value: t,
      selected: n,
      sync: g
    };
    return de([() => e.label, () => e.value], d), l(h), {
      n: U0,
      classes: Y0,
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
Qd.render = H0;
const Ka = Qd;
oe(Ka);
var rk = Ka, F0 = {
  show: Boolean,
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: [String, Object, Boolean],
  onClick: L(),
  "onUpdate:show": L()
};
function j0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: us
} = ae("overlay");
const Za = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: F0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Mt(() => e.show, 1), {
      disabled: o
    } = oa(), l = () => {
      C(e.onClick), C(e["onUpdate:show"], !1);
    };
    ho(() => e.show, () => e.lockScroll);
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
        }, j0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
oe(Za);
var nk = Za, W0 = {
  current: [Number, String],
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
  disabled: Boolean,
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: Boolean,
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: Function,
  onChange: L(),
  "onUpdate:current": L(),
  "onUpdate:size": L()
}, {
  n: G0,
  classes: q0
} = ae("pagination"), X0 = ["item-mode", "onClick"];
function K0(e, r) {
  var n = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), l = Ae("ripple");
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [Te((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [F(e.$slots, "prev", {}, () => [_(n, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), O(
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
        onKeydown: r[3] || (r[3] = ll((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), N("span", null, [$e(
        " / " + ie(e.pageCount) + " ",
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
    )) : (p(!0), O(
      Be,
      {
        key: 1
      },
      We(e.pageList, (i, s) => Te((p(), O("li", {
        key: s,
        "item-mode": e.getMode(i, s),
        class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
        onClick: (u) => e.clickItem(i, s)
      }, [$e(
        ie(i),
        1
        /* TEXT */
      )], 10, X0)), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Te((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [F(e.$slots, "next", {}, () => [_(n, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), O(
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
        menu: me(() => [(p(!0), O(
          Be,
          null,
          We(e.sizeOption, (i, s) => Te((p(), Ce(t, {
            class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(i)
          }, {
            default: me(() => [$e(
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
        default: me(() => [N(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: r[5] || (r[5] = Tr(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [N(
            "span",
            null,
            ie(e.size) + ie(e.pack.paginationItem) + " / " + ie(e.pack.paginationPage),
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
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (p(), O(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [$e(
        ie(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), _(a, {
        modelValue: e.quickJumperValue,
        "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
        disabled: e.disabled,
        "var-pagination-cover": "",
        onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
        onKeydown: r[9] || (r[9] = ll((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
      }, null, 8, ["modelValue", "disabled"])],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (p(), O(
      "li",
      {
        key: 4,
        class: c(e.classes(e.n("total"), [e.disabled, e.n("item--disabled")]))
      },
      ie(e.totalText),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var _d = ne({
  name: "VarPagination",
  components: {
    VarMenu: Bn,
    VarIcon: Ne,
    VarCell: Fn,
    VarInput: Qn
  },
  directives: {
    Ripple: Xe
  },
  props: W0,
  setup(e) {
    var r = T(!1), n = T(""), a = T("1"), t = T(!1), o = T(!1), l = T(z(e.current) || 1), i = T(z(e.size) || 10), s = T([]), u = A(() => Math.ceil(e.maxPagerCount / 2)), d = A(() => Math.ceil(z(e.total) / z(i.value))), v = A(() => {
      var S = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, z(e.total));
      return [S, E];
    }), f = A(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), m = (S, E) => cr(S) ? !1 : E === 1 ? t.value : o.value, y = (S, E) => cr(S) ? "basic" : E === 1 ? "head" : "tail", g = (S, E) => {
      if (!(S === l.value || e.disabled)) {
        if (S === "...") {
          l.value = E === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
        cr(S) && (l.value = S);
      }
    }, h = () => {
      e.disabled || (r.value = !0);
    }, w = (S) => {
      i.value = S, r.value = !1;
      var E = P(l.value);
      a.value = String(E), l.value = E;
    }, P = (S) => S > d.value ? d.value : S < 1 ? 1 : S, k = (S, E, M) => {
      M.target.blur();
      var D = P(z(E));
      a.value = String(D), l.value = D, S === "quick" && (n.value = "");
    };
    return de([() => e.current, () => e.size], (S) => {
      var [E, M] = S;
      l.value = z(E) || 1, i.value = z(M || 10);
    }), de([l, i, d], (S, E) => {
      var [M, D, b] = S, [$, U] = E, V = [], {
        maxPagerCount: Y,
        total: Z,
        onChange: te
      } = e, se = Math.ceil(z(Z) / z(U)), H = b - (Y - u.value) - 1;
      if (a.value = "" + M, b - 2 > Y) {
        if ($ === void 0 || b !== se)
          for (var R = 2; R < Y + 2; R++)
            V.push(R);
        if (M <= Y && M < H) {
          V = [];
          for (var W = 1; W < Y + 1; W++)
            V.push(W + 1);
          t.value = !0, o.value = !1;
        }
        if (M > Y && M < H) {
          V = [];
          for (var B = 1; B < Y + 1; B++)
            V.push(M + B - u.value);
          t.value = M === 2 && Y === 1, o.value = !1;
        }
        if (M >= H) {
          V = [];
          for (var I = 1; I < Y + 1; I++)
            V.push(b - (Y - I) - 1);
          t.value = !1, o.value = !0;
        }
        V = [1, "...", ...V, "...", b];
      } else
        for (var Q = 1; Q <= b; Q++)
          V.push(Q);
      s.value = V, $ != null && b > 0 && C(te, M, D), C(e["onUpdate:current"], M), C(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: G0,
      classes: q0,
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
      clickItem: g,
      showMenu: h,
      clickSize: w,
      setPage: k,
      toNumber: z,
      formatElevation: hr
    };
  }
});
_d.render = K0;
const Ja = _d;
oe(Ja);
var ak = Ja, Z0 = {
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  ripple: Boolean,
  radius: [Number, String],
  width: [Number, String],
  height: [Number, String],
  round: Boolean,
  inline: Boolean,
  onClick: L()
}, {
  n: J0,
  classes: Q0
} = ae("paper");
function _0(e, r) {
  var n = Ae("ripple");
  return Te((p(), O(
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: !e.ripple
  }]]);
}
var xd = ne({
  name: "VarPaper",
  directives: {
    Ripple: Xe
  },
  props: Z0,
  setup(e) {
    var r = (n) => {
      C(e.onClick, n);
    };
    return {
      n: J0,
      classes: Q0,
      formatElevation: hr,
      toSizeUnit: we,
      handleClick: r
    };
  }
});
xd.render = _0;
const Qa = xd;
oe(Qa);
var tk = Qa;
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
var x0 = Ti({
  columns: {
    type: Array,
    default: () => []
  },
  title: String,
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: Boolean,
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
  confirmButtonText: String,
  cancelButtonText: String,
  confirmButtonTextColor: String,
  cancelButtonTextColor: String,
  // dynamic internal
  dynamic: Boolean,
  textFormatter: {
    type: Function,
    default: (e) => e
  },
  onChange: L(),
  onConfirm: L(),
  onCancel: L()
}, xe(It, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: ey,
  classes: ry
} = ae("picker"), ds = 300, ny = 15, vs = 200, ay = 1e3, fs = 0, ty = ["onTouchstartPassive", "onTouchmove", "onTouchend"], oy = ["onTransitionend"], iy = ["onClick"];
function ly(e, r) {
  var n = le("var-button");
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
      default: me(() => [N(
        "div",
        De({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [F(e.$slots, "cancel", {}, () => [_(n, {
            class: c(e.n("cancel-button")),
            "var-picker-cover": "",
            text: "",
            "text-color": e.cancelButtonTextColor,
            onClick: e.cancel
          }, {
            default: me(() => [$e(
              ie(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])]), F(e.$slots, "title", {}, () => [N(
            "div",
            {
              class: c(e.n("title"))
            },
            ie(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), F(e.$slots, "confirm", {}, () => [_(n, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: me(() => [$e(
              ie(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])])],
          2
          /* CLASS */
        )) : ee("v-if", !0), N(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), O(
            Be,
            null,
            We(e.scrollColumns, (a) => (p(), O("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(t, a),
              onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
              onTouchend: (t) => e.handleTouchend(t, a)
            }, [N("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: G({
                transform: "translateY(" + a.translate + "px)",
                transitionDuration: a.duration + "ms",
                transitionProperty: a.duration ? "transform" : "none"
              }),
              onTransitionend: (t) => e.handleTransitionend(a)
            }, [(p(!0), O(
              Be,
              null,
              We(a.column.texts, (t, o) => (p(), O("div", {
                class: c(e.n("option")),
                style: G({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (l) => e.handleClick(a, o)
              }, [N(
                "div",
                {
                  class: c(e.n("text"))
                },
                ie(e.textFormatter(t, a.columnIndex)),
                3
                /* TEXT, CLASS */
              )], 14, iy))),
              128
              /* KEYED_FRAGMENT */
            ))], 46, oy)], 42, ty))),
            128
            /* KEYED_FRAGMENT */
          )), N(
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
          ), N(
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
var ev = ne({
  name: "VarPicker",
  components: {
    VarButton: dr,
    VarPopup: Ur
  },
  inheritAttrs: !1,
  props: x0,
  setup(e) {
    var r = T([]), n = A(() => Re(e.optionHeight)), a = A(() => Re(e.optionCount)), t = A(() => a.value * n.value / 2 - n.value / 2), o = A(() => a.value * n.value), l = [], {
      prevY: i,
      moveY: s,
      touching: u,
      startTouch: d,
      moveTouch: v,
      endTouch: f
    } = mo(), m = (B, I) => {
      I.scrollEl = B;
    }, y = (B) => {
      C(e["onUpdate:show"], B);
    }, g = (B) => {
      var I = t.value - B.column.texts.length * n.value, Q = n.value + t.value;
      B.translate = dn(B.translate, I, Q);
    }, h = (B, I) => {
      var Q = Math.round((t.value - I) / n.value);
      return nf(Q, B.column.texts);
    }, w = (B) => (B.translate = t.value - B.index * n.value, B.translate), P = () => {
      var B = r.value.map((Q) => Q.column.texts[Q.index]), I = r.value.map((Q) => Q.index);
      return {
        texts: B,
        indexes: I
      };
    }, k = function(B, I) {
      I === void 0 && (I = 0), w(B), B.duration = I;
    }, S = (B, I, Q) => {
      B.translate += Math.abs(I / Q) / 3e-3 * (I < 0 ? -1 : 1);
    }, E = (B, I) => {
      u.value || (B.index = I, B.scrolling = !0, k(B, vs));
    }, M = (B, I) => {
      I.touching = !0, I.translate = Eo(I.scrollEl), d(B);
    }, D = (B, I) => {
      if (I.touching) {
        v(B), I.scrolling = !1, I.duration = 0;
        var Q = I.prevY !== void 0 ? s.value : 0;
        I.prevY = i.value, I.translate += Q, g(I);
        var q = performance.now();
        q - I.momentumTime > ds && (I.momentumTime = q, I.momentumPrevY = I.translate);
      }
    }, b = (B, I) => {
      f(), I.touching = !1, I.prevY = void 0;
      var Q = I.translate - I.momentumPrevY, q = performance.now() - I.momentumTime, X = Math.abs(Q) >= ny && q <= ds;
      X && S(I, Q, q), I.index = h(I, I.translate);
      var K = I.translate, x = w(I);
      I.scrolling = x !== K, k(I, X ? ay : vs), I.scrolling || se(I);
    }, $ = (B) => {
      B.scrolling = !1, se(B);
    }, U = (B) => B.map((I, Q) => {
      var q, X = Ie(I) ? {
        texts: I
      } : I, K = {
        id: fs++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (q = X.initialIndex) != null ? q : 0,
        columnIndex: Q,
        duration: 0,
        momentumTime: 0,
        column: X,
        scrollEl: null,
        scrolling: !1
      };
      return k(K), K;
    }), V = (B) => {
      var I = [];
      return Y(I, B, 0, !0), I;
    }, Y = function(B, I, Q, q) {
      if (q === void 0 && (q = !1), Ie(I) && I.length) {
        var X, K = q && (X = e.cascadeInitialIndexes[B.length]) != null ? X : 0, x = {
          id: fs++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: K,
          columnIndex: Q,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: I.map((ce) => ce[e.textKey])
          },
          columns: I,
          scrollEl: null,
          scrolling: !1
        };
        B.push(x), k(x), Y(B, x.columns[x.index].children, Q + 1, q);
      }
    }, Z = (B) => {
      r.value.splice(r.value.indexOf(B) + 1), Y(r.value, B.columns[B.index].children, B.columnIndex + 1);
    }, te = () => {
      var {
        indexes: B
      } = P();
      return B.every((I, Q) => I === l[Q]);
    }, se = (B) => {
      var {
        cascade: I,
        onChange: Q
      } = e;
      if (!te()) {
        I && Z(B);
        var q = r.value.some((x) => x.scrolling);
        if (!q) {
          var {
            texts: X,
            indexes: K
          } = P();
          l = [...K], C(Q, X, K);
        }
      }
    }, H = () => {
      if (e.cascade) {
        var B = r.value.find((I) => I.scrolling);
        B && (B.index = h(B, Eo(B.scrollEl)), B.scrolling = !1, k(B), Z(B));
      } else
        r.value.forEach((I) => {
          I.index = h(I, Eo(I.scrollEl)), k(I);
        });
    }, R = () => {
      H();
      var {
        texts: B,
        indexes: I
      } = P();
      l = [...I], C(e.onConfirm, B, I);
    }, W = () => {
      H();
      var {
        texts: B,
        indexes: I
      } = P();
      l = [...I], C(e.onCancel, B, I);
    };
    return de(() => e.columns, (B) => {
      r.value = e.cascade ? V(sl(B)) : U(sl(B));
      var {
        indexes: I
      } = P();
      l = [...I];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: ey,
      classes: ry,
      pack: _e,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Fe,
      setScrollEl: m,
      handlePopupUpdateShow: y,
      handleTouchstart: M,
      handleTouchmove: D,
      handleTouchend: b,
      handleTransitionend: $,
      confirm: R,
      cancel: W,
      dt: vo,
      handleClick: E
    };
  }
});
ev.render = ly;
const Dt = ev;
var vr;
function En(e) {
  return new Promise((r) => {
    En.close();
    var n = Ie(e) ? {
      columns: e
    } : e, a = Ye(n);
    a.dynamic = !0, a.teleport = "body", vr = a;
    var {
      unmountInstance: t
    } = ta(Dt, a, {
      onConfirm: (o, l) => {
        C(a.onConfirm, o, l), r({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, vr === a && (vr = null);
      },
      onCancel: (o, l) => {
        C(a.onCancel, o, l), r({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, vr === a && (vr = null);
      },
      onClose: () => {
        C(a.onClose), r({
          state: "close"
        }), vr === a && (vr = null);
      },
      onClosed: () => {
        C(a.onClosed), t(), vr === a && (vr = null);
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
En.close = function() {
  if (vr != null) {
    var e = vr;
    vr = null, ze().then(() => {
      e.show = !1;
    });
  }
};
En.Component = Dt;
oe(Dt);
oe(Dt, En);
var ok = Dt, sy = {
  mode: {
    type: String,
    default: "linear"
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: String,
  trackColor: String,
  ripple: Boolean,
  value: {
    type: [Number, String],
    default: 0
  },
  label: Boolean,
  labelClass: String,
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
  indeterminate: Boolean,
  type: {
    type: String,
    default: "primary"
  }
}, {
  n: uy,
  classes: dy
} = ae("progress"), vy = ["viewBox"], fy = ["r", "stroke-width", "stroke-dasharray"], cy = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function my(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
          style: G({
            height: e.toSizeUnit(e.lineWidth),
            background: e.trackColor
          })
        },
        [e.indeterminate ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
          },
          [N(
            "div",
            {
              class: c(e.classes(e.n("linear--" + e.type))),
              style: G({
                background: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), N(
            "div",
            {
              class: c(e.classes(e.n("linear--" + e.type))),
              style: G({
                background: e.color
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )) : (p(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("linear-certain"), e.n("linear--" + e.type), [e.ripple, e.n("linear-ripple")])),
            style: G({
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
      ), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [$e(
          ie(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.mode === "circle" ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), O("svg", {
        class: c(e.n("circle-svg")),
        style: G({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (p(), O("circle", {
        key: 0,
        class: c(e.n("circle-background")),
        cx: "50%",
        cy: "50%",
        r: e.RADIUS,
        fill: "transparent",
        "stroke-width": e.circleProps.strokeWidth,
        "stroke-dasharray": e.CIRCUMFERENCE,
        style: G({
          stroke: e.trackColor
        })
      }, null, 14, fy)) : ee("v-if", !0), N("circle", {
        class: c(e.classes(e.n("circle-certain"), e.n("circle--" + e.type), [e.indeterminate, e.n("circle-overlay")])),
        cx: "50%",
        cy: "50%",
        r: e.RADIUS,
        fill: "transparent",
        "stroke-width": e.circleProps.strokeWidth,
        "stroke-dasharray": e.CIRCUMFERENCE,
        "stroke-dashoffset": e.circleProps.strokeOffset,
        style: G({
          stroke: e.color
        })
      }, null, 14, cy)], 14, vy)), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [$e(
          ie(e.circleProps.roundValue),
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
var rv = ne({
  name: "VarProgress",
  props: sy,
  setup(e) {
    var r = 100, n = 20, a = 2 * Math.PI * n, t = A(() => {
      var l = z(e.value), i = l > r ? r : l, s = l > r ? r : Math.round(l);
      return {
        width: i + "%",
        roundValue: s + "%"
      };
    }), o = A(() => {
      var {
        size: l,
        lineWidth: i,
        value: s
      } = e, u = n / (1 - Re(i) / Re(l)) * 2, d = "0 0 " + u + " " + u, v = z(s) > r ? r : Math.round(z(s)), f = "" + (r - v) / r * a, m = Re(i) / Re(l) * u;
      return {
        strokeWidth: m,
        viewBox: d,
        strokeOffset: f,
        roundValue: v + "%"
      };
    });
    return {
      n: uy,
      classes: dy,
      toSizeUnit: we,
      linearProps: t,
      CIRCUMFERENCE: a,
      RADIUS: n,
      circleProps: o
    };
  }
});
rv.render = my;
const _a = rv;
oe(_a);
var ik = _a, hy = {
  modelValue: Boolean,
  disabled: Boolean,
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: String,
  successBgColor: String,
  color: String,
  successColor: String,
  target: [String, Object],
  onRefresh: L(),
  "onUpdate:modelValue": L()
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
  classes: py
} = ae("pull-refresh"), ps = 150;
function gy(e, r) {
  var n = le("var-icon");
  return p(), O(
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
    [N(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: G(e.controlStyle)
      },
      [_(n, {
        name: e.iconName,
        transition: e.ICON_TRANSITION,
        class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading", e.n("animation")])),
        "var-pull-refresh-cover": ""
      }, null, 8, ["name", "transition", "class"])],
      6
      /* CLASS, STYLE */
    ), F(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var nv = ne({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ne
  },
  props: hy,
  setup(e) {
    var r = T(0), n = T(null), a = T(null), t = T(0), o = T("-125%"), l = T("arrow-down"), i = T("default"), s = T(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = ms(function* ($) {
        if (l.value !== $)
          return l.value = $, new Promise((U) => {
            window.setTimeout(U, ps);
          });
      });
      return function(U) {
        return b.apply(this, arguments);
      };
    }(), y = A(() => i.value !== "loading" && i.value !== "success" && !e.disabled), g = A(() => ({
      transform: "translate3d(0px, " + (Je(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), h = A(() => Math.abs(2 * r.value)), w = A(() => i.value === "success"), P = (b) => {
      var $ = "classList" in u ? u : document.body;
      $.classList[b](hs() + "--lock");
    }, k = (b) => {
      if (r.value === 0) {
        var {
          width: $
        } = Qe(a.value);
        r.value = -($ + $ * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = vn(b.target);
    }, S = (b) => {
      if (!(!y.value || !d) && !(d !== u && pa(d) > 0)) {
        var $ = pa(u);
        if (!($ > 0)) {
          var U = $ === 0, V = b.touches[0];
          f = V.clientY - v, U && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), U && cr(o.value) && o.value > r.value && P("add");
          var Y = (b.touches[0].clientY - t.value) / 2 + r.value;
          o.value = Y >= h.value ? h.value : Y, m(o.value >= h.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var b = ms(function* () {
        y.value && (s.value = !0, z(o.value) >= h.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = h.value * 0.3, C(e["onUpdate:modelValue"], !0), ze(() => {
          C(e.onRefresh);
        }), P("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, P("remove");
        }, z(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), M = () => {
      u = e.target ? Es(e.target, "PullRefresh") : vn(n.value);
    }, D = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, z(e.animationDuration));
    };
    return de(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, D();
      }, z(e.successDuration)));
    }), tr(M), fn(n, "touchmove", S), {
      n: hs,
      classes: py,
      ICON_TRANSITION: ps,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: k,
      touchMove: S,
      touchEnd: E,
      iconName: l,
      controlStyle: g,
      isSuccess: w
    };
  }
});
nv.render = gy;
const xa = nv;
oe(xa);
var lk = xa, by = {
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
  disabled: Boolean,
  readonly: Boolean,
  checkedColor: String,
  uncheckedColor: String,
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
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, av = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function yy() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = ir(av);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function wy() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = or(av);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: Cy,
  classes: Sy
} = ae("radio");
function ky(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      De({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Te((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
          key: 0
        }, () => [_(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-marked",
          size: e.iconSize
        }, null, 8, ["class", "size"])]) : F(e.$slots, "unchecked-icon", {
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
      }], [l, e.handleHovering, "desktop"]]), N(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
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
var tv = ne({
  name: "VarRadio",
  directives: {
    Ripple: Xe,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: nr,
    VarHoverOverlay: yr
  },
  inheritAttrs: !1,
  props: by,
  setup(e) {
    var r = ba(e, "modelValue"), n = A(() => r.value === e.checkedValue), a = T(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = wy(), {
      hovering: l,
      handleHovering: i
    } = Xr(), {
      form: s,
      bindForm: u
    } = Ir(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Pr(), y = (M) => {
      ze(() => {
        var {
          validateTrigger: D,
          rules: b,
          modelValue: $
        } = e;
        v(D, M, b, $);
      });
    }, g = (M) => {
      var {
        checkedValue: D,
        onChange: b
      } = e;
      t && r.value === D || (r.value = M, C(b, r.value), t == null || t.onToggle(D), y("onChange"));
    }, h = (M) => {
      var {
        disabled: D,
        readonly: b,
        uncheckedValue: $,
        checkedValue: U,
        onClick: V
      } = e;
      s != null && s.disabled.value || D || (C(V, M), !(s != null && s.readonly.value || b) && (a.value = !0, g(n.value ? $ : U)));
    }, w = (M) => {
      var {
        checkedValue: D,
        uncheckedValue: b
      } = e;
      r.value = M === D ? D : b;
    }, P = () => {
      r.value = e.uncheckedValue, m();
    }, k = () => f(e.rules, e.modelValue), S = (M) => {
      var {
        uncheckedValue: D,
        checkedValue: b
      } = e, $ = ![D, b].includes(M);
      $ && (M = n.value ? D : b), g(M);
    }, E = {
      sync: w,
      validate: k,
      resetValidation: m,
      reset: P
    };
    return C(o, E), C(u, E), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: Cy,
      classes: Sy,
      handleClick: h,
      toggle: S,
      reset: P,
      validate: k,
      resetValidation: m
    };
  }
});
tv.render = ky;
const et = tv;
oe(et);
var sk = et, $y = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: Array,
  onChange: L(),
  "onUpdate:modelValue": L()
}, {
  n: Ty,
  classes: Oy
} = ae("radio-group");
function Py(e, r) {
  var n = le("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), _(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var ov = ne({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: nr
  },
  props: $y,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = yy(), {
      bindForm: t
    } = Ir(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Pr(), u = A(() => o.value), d = (h) => {
      ze(() => {
        var {
          validateTrigger: w,
          rules: P,
          modelValue: k
        } = e;
        l(w, h, P, k);
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
    var g = {
      onToggle: f,
      validate: m,
      reset: y,
      resetValidation: s,
      errorMessage: u
    };
    return C(t, g), a(g), {
      errorMessage: o,
      n: Ty,
      classes: Oy,
      reset: y,
      validate: m,
      resetValidation: s
    };
  }
});
ov.render = Py;
const rt = ov;
oe(rt);
var uk = rt, Iy = {
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
  onChange: L(),
  "onUpdate:modelValue": L()
}, {
  n: la
} = ae("rate"), My = ["onClick"];
function By(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), O(
        Be,
        null,
        We(e.toNumber(e.count), (i) => Te((p(), O("div", {
          key: i,
          style: G(e.getStyle(i)),
          class: c(e.getClass(i)),
          onClick: (s) => e.handleClick(i, s)
        }, [_(n, {
          class: c(e.n("content-icon")),
          "var-rate-cover": "",
          transition: 0,
          namespace: e.namespace,
          name: e.getCurrentState(i).name,
          style: G({
            fontSize: e.toSizeUnit(e.size)
          })
        }, null, 8, ["class", "namespace", "name", "style"]), _(a, {
          hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])], 14, My)), [[o, {
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
var iv = ne({
  name: "VarRate",
  components: {
    VarIcon: Ne,
    VarFormDetails: nr,
    VarHoverOverlay: yr
  },
  directives: {
    Ripple: Xe,
    Hover: Ar
  },
  props: Iy,
  setup(e) {
    var {
      form: r,
      bindForm: n
    } = Ir(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Pr(), {
      hovering: i
    } = Xr(), s = T(-1), u = Number(e.modelValue), d = (S) => {
      var {
        count: E,
        gap: M
      } = e;
      return {
        color: f(S).color,
        marginRight: S !== z(E) ? we(M) : 0
      };
    }, v = (S) => {
      var {
        name: E,
        color: M
      } = f(S);
      return {
        [la("content")]: !0,
        [la("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [la("--error")]: a.value,
        [la("--primary")]: E !== e.emptyIcon && !M
      };
    }, f = (S) => {
      var {
        modelValue: E,
        disabled: M,
        disabledColor: D,
        color: b,
        half: $,
        emptyColor: U,
        icon: V,
        halfIcon: Y,
        emptyIcon: Z
      } = e, te = b;
      return (M || r != null && r.disabled.value) && (te = D), S <= z(E) ? {
        color: te,
        name: V
      } : $ && S <= z(E) + 0.5 ? {
        color: te,
        name: Y
      } : {
        color: M || r != null && r.disabled.value ? D : U,
        name: Z
      };
    }, m = (S, E) => {
      var {
        half: M,
        clearable: D
      } = e, {
        offsetWidth: b
      } = E.target;
      M && E.offsetX <= Math.floor(b / 2) && (S -= 0.5), u === S && D && (S = 0), u = S, C(e["onUpdate:modelValue"], S);
    }, y = () => o(e.rules, z(e.modelValue)), g = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = (S, E) => {
      var {
        readonly: M,
        disabled: D,
        onChange: b
      } = e;
      M || D || r != null && r.disabled.value || r != null && r.readonly.value || (m(S, E), C(b, S), g());
    }, w = (S) => (E) => {
      s.value = S, i.value = E;
    }, P = () => {
      C(e["onUpdate:modelValue"], 0), l();
    }, k = {
      reset: P,
      validate: y,
      resetValidation: l
    };
    return C(n, k), {
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
      toNumber: z,
      n: la
    };
  }
});
iv.render = By;
const nt = iv;
oe(nt);
var dk = nt, Ey = {
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
}, Vy = (e) => (gn(""), e = e(), bn(), e), Ny = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Dy = /* @__PURE__ */ Vy(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), Ay = [Dy];
function zy(e, r) {
  return p(), O("svg", Ny, Ay);
}
var lv = ne({});
lv.render = zy;
const Ly = lv;
var Ry = (e) => (gn(""), e = e(), bn(), e), Uy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Yy = /* @__PURE__ */ Ry(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), Hy = [Yy];
function Fy(e, r) {
  return p(), O("svg", Uy, Hy);
}
var sv = ne({});
sv.render = Fy;
const jy = sv;
var Wy = (e) => (gn(""), e = e(), bn(), e), Gy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, qy = /* @__PURE__ */ Wy(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), Xy = [qy];
function Ky(e, r) {
  return p(), O("svg", Gy, Xy);
}
var uv = ne({});
uv.render = Ky;
const Zy = uv;
var {
  n: Jy,
  classes: Qy
} = ae("result");
function _y(e, r) {
  return p(), O(
    Be,
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
        style: G({
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
        style: G({
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
        style: G({
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
var dv = ne({
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
      n: Jy,
      classes: Qy,
      toNumber: z
    };
  }
});
dv.render = _y;
const xy = dv;
var e1 = (e) => (gn(""), e = e(), bn(), e), r1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, n1 = /* @__PURE__ */ e1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), a1 = [n1];
function t1(e, r) {
  return p(), O("svg", r1, a1);
}
var vv = ne({});
vv.render = t1;
const o1 = vv;
var i1 = (e) => (gn(""), e = e(), bn(), e), l1 = {
  viewBox: "-4 -4 32 32"
}, s1 = /* @__PURE__ */ i1(() => /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), u1 = [s1];
function d1(e, r) {
  return p(), O("svg", l1, u1);
}
var fv = ne({});
fv.render = d1;
const v1 = fv;
var {
  n: f1,
  classes: c1
} = ae("result");
function m1(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "image", {}, () => [e.type ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: G({
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
    )) : ee("v-if", !0)]), F(e.$slots, "title", {}, () => [e.title ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ie(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ie(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var cv = ne({
  name: "VarResult",
  components: {
    Info: Ly,
    Success: xy,
    Warning: Zy,
    Error: jy,
    Question: o1,
    Empty: v1
  },
  props: Ey,
  setup(e) {
    var r = A(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = A(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: f1,
      classes: c1,
      toNumber: z,
      toPxNum: Re,
      toSizeUnit: we,
      circleSize: r,
      borderSize: n
    };
  }
});
cv.render = m1;
const at = cv;
oe(at);
var vk = at, h1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start"
  },
  align: {
    type: String,
    default: "flex-start"
  },
  onClick: L()
}, {
  n: p1,
  classes: g1
} = ae("row");
function b1(e, r) {
  return p(), O(
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var mv = ne({
  name: "VarRow",
  props: h1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = Xm(), t = A(() => {
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
      n: p1,
      classes: g1,
      average: t,
      handleClick: l,
      padStartFlex: _t
    };
  }
});
mv.render = b1;
const tt = mv;
oe(tt);
var fk = tt;
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
var y1 = Oi({
  modelValue: {
    default: void 0
  },
  multiple: Boolean,
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: Boolean,
  readonly: Boolean,
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left"
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: Array,
  onFocus: L(),
  onBlur: L(),
  onClose: L(),
  onChange: L(),
  onClear: L(),
  "onUpdate:modelValue": L()
}, xe(rl, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: w1,
  classes: C1
} = ae("select"), S1 = {
  key: 1
};
function k1(e, r) {
  var n = le("var-chip"), a = le("var-icon"), t = le("var-field-decorator"), o = le("var-menu"), l = le("var-form-details");
  return p(), O(
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
      menu: me(() => [N(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
        },
        [F(e.$slots, "default")],
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
          "append-icon": me(() => [F(e.$slots, "append-icon")]),
          default: me(() => [N(
            "div",
            {
              class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
              style: G({
                textAlign: e.textAlign,
                color: e.textColor
              })
            },
            [N(
              "div",
              {
                class: c(e.n("label"))
              },
              [e.isEmptyModelValue ? ee("v-if", !0) : F(e.$slots, "selected", {
                key: 0
              }, () => [e.multiple ? (p(), O(
                Be,
                {
                  key: 0
                },
                [e.chip ? (p(), O(
                  "div",
                  {
                    key: 0,
                    class: c(e.n("chips"))
                  },
                  [(p(!0), O(
                    Be,
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
                )) : (p(), O(
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
              )) : (p(), O(
                "span",
                S1,
                ie(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.enableCustomPlaceholder ? (p(), O(
              "span",
              {
                key: 0,
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                style: G({
                  color: e.placeholderColor
                })
              },
              ie(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )) : ee("v-if", !0), F(e.$slots, "arrow-icon", {
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
          fn: me(() => [F(e.$slots, "prepend-icon")]),
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
var hv = ne({
  name: "VarSelect",
  components: {
    VarIcon: Ne,
    VarMenu: Bn,
    VarChip: Wn,
    VarFieldDecorator: zd,
    VarFormDetails: nr
  },
  props: y1,
  setup(e) {
    var r = T(!1), n = T(!1), a = A(() => e.multiple), t = A(() => e.focusColor), o = T(""), l = T([]), i = A(() => Fr(e.modelValue)), s = A(() => e.disabled || e.readonly ? "" : "pointer"), u = T(0), {
      bindForm: d,
      form: v
    } = Ir(), {
      length: f,
      options: m,
      bindOptions: y
    } = z0(), {
      errorMessage: g,
      validateWithTrigger: h,
      validate: w,
      // expose
      resetValidation: P
    } = Pr(), k = T(null), S = A(() => e.variant === "outlined" ? "bottom" : "cover-top"), E = A(() => {
      var {
        hint: X,
        blurColor: K,
        focusColor: x
      } = e;
      if (!X)
        return g.value ? "var(--field-decorator-error-color)" : r.value ? x || "var(--field-decorator-focus-color)" : K || "var(--field-decorator-blur-color)";
    }), M = A(() => !e.hint && Fr(e.modelValue)), D = () => {
      var {
        multiple: X,
        modelValue: K
      } = e;
      if (X) {
        var x = K;
        l.value = x.map(U);
      }
      !X && !Fr(K) && (o.value = U(K)), !X && Fr(K) && (o.value = "");
    }, b = (X) => {
      ze(() => {
        var {
          validateTrigger: K,
          rules: x,
          modelValue: ce
        } = e;
        h(K, X, x, ce);
      });
    }, $ = (X) => {
      var {
        value: K,
        label: x
      } = X;
      return K.value != null ? K.value : x.value;
    }, U = (X) => {
      var K, x, ce = m.find((ke) => {
        var {
          value: Me
        } = ke;
        return Me.value === X;
      });
      return ce || (ce = m.find((ke) => {
        var {
          label: Me
        } = ke;
        return Me.value === X;
      })), (K = (x = ce) == null ? void 0 : x.label.value) != null ? K : "";
    }, V = () => {
      var {
        disabled: X,
        readonly: K,
        onFocus: x
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || X || K || (u.value = Re(e.offsetY), r.value = !0, C(x), b("onFocus"));
    }, Y = () => {
      var {
        disabled: X,
        readonly: K,
        onBlur: x
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || X || K || (B(), C(x), b("onBlur"));
    }, Z = (X) => {
      var {
        disabled: K,
        readonly: x,
        multiple: ce,
        onChange: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || K || x)) {
        var Me = ce ? m.filter((j) => {
          var {
            selected: re
          } = j;
          return re.value;
        }).map($) : $(X);
        C(e["onUpdate:modelValue"], Me), C(ke, Me), b("onChange"), ce || B();
      }
    }, te = () => {
      var {
        disabled: X,
        readonly: K,
        multiple: x,
        clearable: ce,
        onClear: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || X || K || !ce)) {
        var Me = x ? [] : void 0;
        C(e["onUpdate:modelValue"], Me), C(ke, Me), b("onClear");
      }
    }, se = (X) => {
      var {
        disabled: K,
        onClick: x
      } = e;
      v != null && v.disabled.value || K || (C(x, X), b("onClick"));
    }, H = (X) => {
      var {
        disabled: K,
        readonly: x,
        modelValue: ce,
        onClose: ke
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || K || x)) {
        var Me = ce, j = m.find((ue) => {
          var {
            label: ye
          } = ue;
          return ye.value === X;
        }), re = Me.filter((ue) => {
          var ye;
          return ue !== ((ye = j.value.value) != null ? ye : j.label.value);
        });
        C(e["onUpdate:modelValue"], re), C(ke, re), b("onClose");
      }
    }, R = () => {
      var {
        multiple: X,
        modelValue: K
      } = e;
      if (X) {
        var x = K;
        m.forEach((ce) => ce.sync(x.includes($(ce))));
      } else
        m.forEach((ce) => ce.sync(K === $(ce)));
      D();
    }, W = () => {
      u.value = Re(e.offsetY), r.value = !0, n.value = !0;
    }, B = () => {
      r.value = !1, n.value = !1;
    }, I = () => w(e.rules, e.modelValue), Q = () => {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    de(() => e.multiple, () => {
      var {
        multiple: X,
        modelValue: K
      } = e;
      X && !Ie(K) && Or("Select", "The modelValue must be an array when multiple is true");
    }), de(() => e.modelValue, R, {
      deep: !0
    }), de(() => f.value, R);
    var q = {
      multiple: a,
      focusColor: t,
      computeLabel: D,
      onSelect: Z,
      reset: Q,
      validate: I,
      resetValidation: P
    };
    return y(q), C(d, q), {
      offsetY: u,
      isFocus: r,
      showMenu: n,
      errorMessage: g,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: k,
      placement: S,
      cursor: s,
      placeholderColor: E,
      enableCustomPlaceholder: M,
      n: w1,
      classes: C1,
      handleFocus: V,
      handleBlur: Y,
      handleClear: te,
      handleClick: se,
      handleClose: H,
      reset: Q,
      validate: I,
      resetValidation: P,
      focus: W,
      blur: B
    };
  }
});
hv.render = k1;
const ot = hv;
oe(ot);
var ck = ot, $1 = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: Boolean,
  card: Boolean,
  avatar: Boolean,
  fullscreen: Boolean,
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: [Number, String],
  cardHeight: [Number, String],
  avatarSize: [Number, String],
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: T1,
  classes: O1
} = ae("skeleton");
function P1(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), O(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: G({
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
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), O(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: G({
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
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: G({
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
          )) : ee("v-if", !0), (p(!0), O(
            Be,
            null,
            We(e.toNumber(e.rows), (n, a) => (p(), O(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: G({
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
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      )) : ee("v-if", !0)],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (p(), O(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: G({
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var pv = ne({
  name: "VarSkeleton",
  props: $1,
  setup() {
    return {
      n: T1,
      classes: O1,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
pv.render = P1;
const it = pv;
oe(it);
var mk = it, qe = /* @__PURE__ */ function(e) {
  return e.First = "1", e.Second = "2", e;
}({}), I1 = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: Boolean,
  labelVisible: {
    type: String,
    default: "normal"
  },
  activeColor: String,
  trackColor: String,
  thumbColor: String,
  labelColor: String,
  labelTextColor: String,
  trackHeight: [String, Number],
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: [String, Number],
  disabled: Boolean,
  readonly: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  rules: Array,
  onChange: L(),
  onStart: L(),
  onEnd: L(),
  "onUpdate:modelValue": L()
}, {
  n: gs,
  classes: M1
} = ae("slider"), B1 = ["onTouchstart"];
function E1(e, r) {
  var n = le("var-hover-overlay"), a = le("var-form-details"), t = Ae("hover");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: r[0] || (r[0] = function() {
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
            style: G({
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
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), O(
        Be,
        null,
        We(e.thumbList, (o) => (p(), O("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: G(e.thumbStyle(o)),
          onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
        }, [F(e.$slots, "button", {
          currentValue: o.text
        }, () => [Te(N(
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
        ), [[t, (l) => e.hover(l, o), "desktop"]]), N(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
            style: G({
              background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
            })
          },
          [_(n, {
            hovering: o.hovering
          }, null, 8, ["hovering"])],
          6
          /* CLASS, STYLE */
        ), N(
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
          [N(
            "span",
            null,
            ie(o.text),
            1
            /* TEXT */
          )],
          6
          /* CLASS, STYLE */
        )])], 46, B1))),
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
var gv = ne({
  name: "VarSlider",
  components: {
    VarFormDetails: nr,
    VarHoverOverlay: yr
  },
  directives: {
    Hover: Ar
  },
  props: I1,
  setup(e) {
    var {
      bindForm: r,
      form: n
    } = Ir(), {
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
    }), m = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = T(null), g = T(0), h = T(!1), w = Ye({
      [qe.First]: f(),
      [qe.Second]: f()
    }), P = A(() => z(e.max) - z(e.min)), k = A(() => g.value / P.value * z(e.step)), S = A(() => {
      var {
        modelValue: j,
        range: re
      } = e, ue = [];
      return re && Ie(j) ? ue = [{
        value: Z(j[0]),
        enumValue: qe.First,
        text: te(j[0]),
        hovering: ua(i),
        handleHovering: s
      }, {
        value: Z(j[1]),
        enumValue: qe.Second,
        text: te(j[1]),
        hovering: ua(u),
        handleHovering: d
      }] : cr(j) && (ue = [{
        value: Z(j),
        enumValue: qe.First,
        text: te(j),
        hovering: ua(i),
        handleHovering: s
      }]), ue;
    }), E = A(() => {
      var {
        activeColor: j,
        range: re,
        modelValue: ue
      } = e, ye = re && Ie(ue) ? Z(Math.min(ue[0], ue[1])) : 0, Ue = re && Ie(ue) ? Z(Math.max(ue[0], ue[1])) - ye : Z(ue);
      return b.value ? {
        left: "0px",
        height: Ue + "%",
        bottom: ye + "%",
        background: j
      } : {
        top: "0px",
        width: Ue + "%",
        left: ye + "%",
        background: j
      };
    }), M = A(() => e.disabled || (n == null ? void 0 : n.disabled.value)), D = A(() => e.readonly || (n == null ? void 0 : n.readonly.value)), b = A(() => e.direction === "vertical"), $, U = (j) => {
      var re = j.currentTarget;
      return re ? b.value ? g.value - (j.clientY - Qe(re).top) : j.clientX - tf(re) : 0;
    }, V = (j) => {
      var re = b.value ? "bottom" : "left";
      return {
        [re]: j.value + "%",
        zIndex: w[j.enumValue].active ? 1 : void 0
      };
    }, Y = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[j].active, Z = (j) => {
      var {
        min: re,
        max: ue
      } = e;
      return j < z(re) ? 0 : j > z(ue) ? 100 : (j - z(re)) / P.value * 100;
    }, te = (j) => {
      if (!cr(j))
        return 0;
      var re = j;
      re < Number(e.min) && (re = Number(e.min)), re > Number(e.max) && (re = Number(e.max));
      var ue = parseInt("" + re, 10) === re;
      return ue ? re : z(re.toPrecision(5));
    }, se = (j, re) => {
      M.value || re.handleHovering(j);
    }, H = (j, re) => {
      var ue = [], {
        step: ye,
        range: Ue,
        modelValue: Le,
        onChange: He,
        min: Ge
      } = e, ve = z(ye), Se = Math.round(j / k.value), ge = Se * ve + z(Ge), Oe = w[re].percentValue * ve + z(Ge);
      if (w[re].percentValue = Se, Ue && Ie(Le) && (ue = re === qe.First ? [ge, Le[1]] : [Le[0], ge]), Oe !== ge) {
        var Pe = Ue ? ue.map((je) => te(je)) : te(ge);
        C(He, Pe), C(e["onUpdate:modelValue"], Pe), m();
      }
    }, R = (j) => {
      if (!e.range)
        return qe.First;
      var re = w[qe.First].percentValue * k.value, ue = w[qe.Second].percentValue * k.value, ye = Math.abs(j - re), Ue = Math.abs(j - ue);
      return ye <= Ue ? qe.First : qe.Second;
    }, W = () => {
      document.addEventListener("touchmove", Q, {
        passive: !1
      }), document.addEventListener("touchend", q), document.addEventListener("touchcancel", q);
    }, B = () => {
      document.removeEventListener("touchmove", Q), document.removeEventListener("touchend", q), document.removeEventListener("touchcancel", q);
    }, I = (j, re) => {
      if (g.value || (g.value = y.value.offsetWidth), M.value || (w[re].active = !0), $ = re, W(), !(M.value || D.value)) {
        C(e.onStart), h.value = !0;
        var {
          clientX: ue,
          clientY: ye
        } = j.touches[0];
        w[re].startPosition = b.value ? ye : ue;
      }
    }, Q = (j) => {
      if (j.preventDefault(), !(M.value || D.value || !h.value)) {
        var {
          startPosition: re,
          currentOffset: ue
        } = w[$], {
          clientX: ye,
          clientY: Ue
        } = j.touches[0], Le = (b.value ? re - Ue : ye - re) + ue;
        Le <= 0 ? Le = 0 : Le >= g.value && (Le = g.value), H(Le, $);
      }
    }, q = () => {
      B();
      var {
        range: j,
        modelValue: re,
        onEnd: ue,
        step: ye,
        min: Ue
      } = e;
      if (M.value || (w[$].active = !1), !(M.value || D.value)) {
        var Le = [];
        w[$].currentOffset = w[$].percentValue * k.value;
        var He = w[$].percentValue * z(ye) + z(Ue);
        j && Ie(re) && (Le = $ === qe.First ? [He, re[1]] : [re[0], He]), C(ue, j ? Le : He), h.value = !1;
      }
    }, X = (j) => {
      if (!(M.value || D.value) && !j.target.closest("." + gs("thumb"))) {
        var re = U(j), ue = R(re);
        $ = ue, H(re, ue), q();
      }
    }, K = () => {
      var j = z(e.step);
      return isNaN(j) ? (cl("Slider", 'type of prop "step" should be Number'), !1) : j < 0 ? (cl("Slider", '"step" should be > 0'), !1) : !0;
    }, x = () => {
      var {
        range: j,
        modelValue: re
      } = e;
      return j && !Ie(re) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !j && Ie(re) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : j && Ie(re) && re.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ce = function(j, re) {
      j === void 0 && (j = e.modelValue), re === void 0 && (re = z(e.step));
      var ue = (ye) => {
        var {
          min: Ue,
          max: Le
        } = e;
        return ye < z(Ue) ? 0 : ye > z(Le) ? P.value / re : (ye - z(Ue)) / re;
      };
      e.range && Ie(j) ? (w[qe.First].percentValue = ue(j[0]), w[qe.First].currentOffset = w[qe.First].percentValue * k.value, w[qe.Second].percentValue = ue(j[1]), w[qe.Second].currentOffset = w[qe.Second].percentValue * k.value) : cr(j) && (w[qe.First].currentOffset = ue(j) * k.value);
    }, ke = () => {
      var j = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], j), l();
    }, Me = {
      reset: ke,
      validate: v,
      resetValidation: l
    };
    return C(r, Me), de([() => e.modelValue, () => e.step], (j) => {
      var [re, ue] = j;
      !K() || !x() || h.value || ce(re, z(ue));
    }), de(g, () => ce()), tr(() => {
      !K() || !x() || (g.value = y.value[b.value ? "offsetHeight" : "offsetWidth"]);
    }), so(() => {
      B();
    }), {
      n: gs,
      classes: M1,
      Thumbs: qe,
      sliderEl: y,
      getFillStyle: E,
      isDisabled: M,
      isVertical: b,
      thumbStyle: V,
      errorMessage: a,
      thumbsProps: w,
      thumbList: S,
      hover: se,
      multiplySizeUnit: sr,
      toNumber: z,
      showLabel: Y,
      start: I,
      move: Q,
      end: q,
      click: X
    };
  }
});
gv.render = E1;
const lt = gv;
oe(lt);
var hk = lt;
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
var bv = {
  type: String,
  position: {
    type: String,
    default: "top"
  },
  content: {
    type: [String, Function, Object]
  },
  contentClass: String,
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: Boolean,
  loadingType: xe(on, "type"),
  loadingSize: xe(on, "size"),
  loadingRadius: xe(on, "radius"),
  loadingColor: Pi({}, xe(on, "color"), {
    default: "currentColor"
  }),
  lockScroll: Boolean,
  show: Boolean,
  teleport: {
    type: [String, Object, Boolean],
    default: "body"
  },
  forbidClick: Boolean,
  onOpen: L(),
  onOpened: L(),
  onClose: L(),
  onClosed: L(),
  "onUpdate:show": L(),
  _update: String
}, {
  n: V1,
  classes: N1
} = ae("snackbar"), D1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function A1(e, r) {
  var n = le("var-icon"), a = le("var-loading");
  return Te((p(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: G({
          zIndex: e.zIndex
        })
      },
      [N(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [F(e.$slots, "default", {}, () => [$e(
          ie(e.content),
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
        [e.iconName ? (p(), Ce(n, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : ee("v-if", !0), e.type === "loading" ? (p(), Ce(a, {
          key: 1,
          type: e.loadingType,
          size: e.loadingSize,
          color: e.loadingColor,
          radius: e.loadingRadius
        }, null, 8, ["type", "size", "color", "radius"])) : ee("v-if", !0), F(e.$slots, "icon")],
        2
        /* CLASS */
      ), N(
        "div",
        {
          class: c(e.n("action"))
        },
        [F(e.$slots, "action")],
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
var yv = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: cn,
    VarIcon: Ne
  },
  props: bv,
  setup(e) {
    var r = T(null), {
      zIndex: n
    } = Mt(() => e.show, 1);
    ho(() => e.show, () => e.lockScroll);
    var a = A(() => e.type === "loading" || e.forbidClick), t = A(() => e.type ? D1[e.type] : ""), o = () => {
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
      SNACKBAR_TYPE: Sv,
      n: V1,
      classes: N1,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
yv.render = A1;
const wv = yv;
var {
  n: z1
} = ae("snackbar");
function L1(e, r) {
  var n = le("var-snackbar-core");
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
      icon: me(() => [F(e.$slots, "icon")]),
      action: me(() => [F(e.$slots, "action")]),
      default: me(() => [F(e.$slots, "default", {}, () => [$e(
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
var Cv = ne({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: wv
  },
  props: bv,
  setup() {
    var {
      disabled: e
    } = oa();
    return {
      n: z1,
      disabled: e
    };
  }
});
Cv.render = L1;
const Io = Cv;
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
function R1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var Sv = ["loading", "success", "warning", "info", "error"], bs = 0, Ii = !1, kv, _n = !1, $v = {
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
}, $r = Ye([]), tl = $v, U1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Lo = (e) => () => na(e) ? e() : e, Y1 = {
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
        }, q1(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Lo(s),
          icon: Lo(u),
          action: Lo(d)
        };
        return _(wv, De(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return _(Qv, De(U1, {
        style: {
          zIndex: br.zIndex
        },
        onAfterEnter: H1,
        onAfterLeave: F1
      }), R1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Zr = function(e) {
  var r = W1(e), n = Ye(st({}, tl, r));
  n.show = !0, Ii || (Ii = !0, kv = ta(Y1).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: bs++,
    reactiveSnackOptions: n
  };
  if (a === 0 || _n)
    j1(t);
  else {
    var o = "update-" + bs;
    G1(n, o);
  }
  return {
    clear() {
      !_n && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
Sv.forEach((e) => {
  Zr[e] = (r) => (Di(r) ? r.type = e : r = {
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
  tl = e;
};
Zr.resetDefaultOptions = function() {
  tl = $v;
};
function H1(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === z(r));
  n && C(n.reactiveSnackOptions.onOpened);
}
function F1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === z(r));
  n && (n.animationEnd = !0, C(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (C(kv), $r = Ye([]), Ii = !1);
}
function j1(e) {
  $r.push(e);
}
function W1(e) {
  return e === void 0 && (e = {}), Je(e) ? {
    content: e
  } : e;
}
function G1(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = st({}, n.reactiveSnackOptions, e), n._update = r;
}
function q1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Zr.Component = Io;
oe(Io);
oe(Io, Zr);
var pk = Io;
const Mi = Zr;
var X1 = {
  size: {
    type: [String, Number, Array],
    default: "normal"
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
    default: "flex-start"
  },
  align: String,
  inline: Boolean
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function K1(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var Z1 = (e) => ["mini", "small", "normal", "large"].includes(e), {
  n: Ro,
  classes: J1
} = ae("space");
const ut = ne({
  name: "VarSpace",
  props: X1,
  setup(e, r) {
    var {
      slots: n
    } = r, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ie(t) ? t.map(we) : [we(t), we(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = C(n.default)) != null ? t : [], [f, m] = a(d, Z1(d));
      v = Us(v);
      var y = v.length - 1, g = v.map((h, w) => {
        var P = K1(f, m, {
          direction: u,
          justify: l,
          index: w,
          lastIndex: y
        });
        return _("div", {
          style: {
            margin: P
          }
        }, [h]);
      });
      return _("div", {
        class: J1(Ro(), Ro("$--box"), [o, Ro("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: _t(l),
          alignItems: _t(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + f + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
oe(ut);
var gk = ut, Q1 = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: String,
  inactiveIcon: String
}, Tv = Symbol("STEPS_BIND_STEP_KEY");
function _1() {
  var {
    bindChildren: e,
    childProviders: r
  } = ir(Tv);
  return {
    step: r,
    bindStep: e
  };
}
function x1() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = or(Tv);
  return n || Or("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: ew,
  classes: rw
} = ae("step"), nw = {
  key: 3
};
function aw(e, r) {
  var n = le("var-icon");
  return p(), O(
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
          style: G({
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
        }, null, 8, ["class", "name"])) : (p(), O(
          "span",
          nw,
          ie(e.index + 1),
          1
          /* TEXT */
        ))],
        6
        /* CLASS, STYLE */
      ), N(
        "div",
        {
          class: c(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
          onClick: r[1] || (r[1] = function() {
            return e.click && e.click(...arguments);
          })
        },
        [F(e.$slots, "default")],
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
var Ov = ne({
  name: "VarStep",
  components: {
    VarIcon: Ne
  },
  props: Q1,
  setup() {
    var {
      index: e,
      steps: r,
      bindSteps: n
    } = x1(), {
      active: a,
      activeColor: t,
      inactiveColor: o,
      direction: l,
      clickStep: i
    } = r, s = A(() => a.value === e.value), u = A(() => e.value !== -1 && z(a.value) > e.value), d = {
      index: e
    }, v = () => i(e.value);
    return n(d), {
      n: ew,
      classes: rw,
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
Ov.render = aw;
const dt = Ov;
oe(dt);
var bk = dt, tw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  activeColor: String,
  inactiveColor: String,
  onClickStep: L()
}, {
  n: ow
} = ae("steps");
function iw(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Pv = ne({
  name: "VarSteps",
  props: tw,
  setup(e) {
    var r = A(() => e.active), n = A(() => e.activeColor), a = A(() => e.inactiveColor), t = A(() => e.direction), {
      bindStep: o
    } = _1(), l = (s) => {
      C(e.onClickStep, s);
    }, i = {
      active: r,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: l
    };
    return o(i), {
      n: ow
    };
  }
});
Pv.render = iw;
const vt = Pv;
oe(vt);
var yk = vt, lw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: sw
} = ae("style-provider"), uw = ne({
  name: "VarStyleProvider",
  props: lw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => Os(e.tag, {
      class: sw(),
      style: Ls(e.styleVars)
    }, C(n.default));
  }
});
const Mo = uw;
var Uo = [];
function ft(e) {
  Uo.forEach((n) => document.documentElement.style.removeProperty(n)), Uo.length = 0;
  var r = Ls(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Uo.push(a);
  });
}
ft.Component = Mo;
oe(Mo);
oe(Mo, ft);
var wk = Mo, dw = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: Boolean,
  readonly: Boolean,
  loading: Boolean,
  color: String,
  loadingColor: String,
  closeColor: String,
  size: [String, Number],
  rules: Array,
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: L(),
  onChange: L(),
  "onUpdate:modelValue": L()
}, {
  n: vw,
  classes: fw
} = ae("switch"), cw = (e) => (gn(""), e = e(), bn(), e), mw = /* @__PURE__ */ cw(() => /* @__PURE__ */ N(
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
)), hw = [mw];
function pw(e, r) {
  var n = le("var-hover-overlay"), a = le("var-form-details"), t = Ae("ripple"), o = Ae("hover");
  return Te((p(), O(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: r[0] || (r[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: G(e.styleComputed.switch)
      },
      [N(
        "div",
        {
          style: G(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Te((p(), O(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: G(e.styleComputed.ripple)
        },
        [N(
          "div",
          {
            style: G(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), O(
            "span",
            {
              key: 0,
              class: c(e.n("loading")),
              style: G({
                width: e.radius,
                height: e.radius
              })
            },
            hw,
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
    VarHoverOverlay: yr
  },
  directives: {
    Ripple: Xe,
    Hover: Ar
  },
  props: dw,
  setup(e) {
    var {
      bindForm: r,
      form: n
    } = Ir(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = Pr(), {
      hovering: i,
      handleHovering: s
    } = Xr(), u = () => o(e.rules, e.modelValue), d = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = A(() => {
      var {
        size: w,
        modelValue: P,
        color: k,
        closeColor: S,
        loadingColor: E,
        activeValue: M
      } = e;
      return {
        handle: {
          width: sr(w),
          height: sr(w),
          backgroundColor: P === M ? k : S,
          color: E
        },
        ripple: {
          left: P === M ? sr(w, 0.5) : "-" + sr(w, 0.5),
          color: P === M ? k : S || "#999",
          width: sr(w, 2),
          height: sr(w, 2)
        },
        track: {
          height: sr(w, 0.72),
          width: sr(w, 1.9),
          borderRadius: sr(w, 2 / 3),
          filter: P === M || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: P === M ? k : S
        },
        switch: {
          height: sr(w, 1.2),
          width: sr(w, 2)
        }
      };
    }), f = A(() => sr(e.size, 0.8)), m = (w) => {
      var {
        onClick: P,
        onChange: k,
        disabled: S,
        loading: E,
        readonly: M,
        modelValue: D,
        activeValue: b,
        inactiveValue: $,
        "onUpdate:modelValue": U
      } = e;
      if (C(P, w), !(S || E || M || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var V = D === b ? $ : b;
        C(k, V), C(U, V), d();
      }
    }, y = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, g = () => {
      C(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, h = {
      reset: g,
      validate: u,
      resetValidation: l
    };
    return C(r, h), {
      n: vw,
      classes: fw,
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
Iv.render = pw;
const ct = Iv;
oe(ct);
var Ck = ct, gw = {
  name: [String, Number],
  disabled: Boolean,
  onClick: L()
}, Mv = Symbol("TABS_BIND_TAB_KEY");
function bw() {
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
function yw() {
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
  classes: ww
} = ae("tab");
function Cw(e, r) {
  var n = Ae("ripple");
  return Te((p(), O(
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
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: e.disabled
  }]]);
}
var Bv = ne({
  name: "VarTab",
  directives: {
    Ripple: Xe
  },
  props: gw,
  setup(e) {
    var r = T(null), n = A(() => e.name), a = A(() => e.disabled), t = A(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = yw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: y
    } = l, g = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(g);
    var h = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : h() ? d.value : v.value, P = () => e.disabled ? jt("$-tab--disabled") : h() ? jt("$-tab--active") : jt("$-tab--inactive"), k = (S) => {
      var {
        disabled: E,
        name: M,
        onClick: D
      } = e;
      E || (C(D, M ?? o.value, S), s(g));
    };
    return de(() => e.name, y), de(() => e.disabled, y), {
      n: jt,
      classes: ww,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: P,
      handleClick: k
    };
  }
});
Bv.render = Cw;
const mt = Bv;
oe(mt);
var Sk = mt, Sw = {
  name: [String, Number]
}, {
  n: kw,
  classes: $w
} = ae("tab-item");
function Tw(e, r) {
  var n = le("var-swipe-item");
  return p(), Ce(n, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: me(() => [F(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Ev = ne({
  name: "VarTabItem",
  components: {
    VarSwipeItem: In
  },
  props: Sw,
  setup(e) {
    var r = T(!1), n = A(() => e.name), {
      index: a,
      bindTabsItems: t
    } = p0(), {
      bindLists: o
    } = g0(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: A(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: kw,
      classes: $w,
      current: r
    };
  }
});
Ev.render = Tw;
const ht = Ev;
oe(ht);
var kk = ht, Ow = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: Pw,
  classes: Iw
} = ae("table");
function Mw(e, r) {
  return p(), O(
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
          style: G({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [F(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Vv = ne({
  name: "VarTable",
  props: Ow,
  setup() {
    return {
      toSizeUnit: we,
      n: Pw,
      classes: Iw,
      formatElevation: hr
    };
  }
});
Vv.render = Mw;
const pt = Vv;
oe(pt);
var $k = pt, Bw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal"
  },
  itemDirection: {
    type: String,
    default: "horizontal"
  },
  fixedBottom: Boolean,
  activeColor: String,
  inactiveColor: String,
  disabledColor: String,
  color: String,
  indicatorColor: String,
  indicatorSize: [String, Number],
  elevation: {
    type: [Boolean, String, Number],
    default: !1
  },
  scrollable: {
    type: String,
    default: "auto"
  },
  indicatorPosition: {
    type: String,
    default: "normal"
  },
  safeArea: Boolean,
  sticky: Boolean,
  stickyCssMode: xe(Zt, "cssMode"),
  stickyZIndex: xe(Zt, "zIndex"),
  offsetTop: xe(Zt, "offsetTop"),
  onClick: L(),
  onChange: L(),
  "onUpdate:active": L()
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
function ws(e) {
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
  n: Ew,
  classes: Vw
} = ae("tabs");
function Nw(e, r) {
  return p(), Ce(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: me(() => [N(
      "div",
      De({
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
        [F(e.$slots, "default"), N(
          "div",
          {
            class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
            style: G({
              width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
              height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
              transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
            })
          },
          [N(
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
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
var Nv = ne({
  name: "VarTabs",
  components: {
    VarSticky: Mn
  },
  inheritAttrs: !1,
  props: Bw,
  setup(e) {
    var r = T("0px"), n = T("0px"), a = T("0px"), t = T("0px"), o = T(!1), l = T(null), i = A(() => e.active), s = A(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = A(() => e.activeColor), d = A(() => e.inactiveColor), v = A(() => e.disabledColor), f = A(() => e.itemDirection), m = T(null), {
      tabList: y,
      bindTabList: g,
      length: h
    } = bw(), w = (V) => {
      var Y, Z = (Y = V.name.value) != null ? Y : V.index.value, {
        active: te,
        onChange: se,
        onClick: H
      } = e;
      C(e["onUpdate:active"], Z), C(H, Z), Z !== te && C(se, Z);
    }, P = () => y.find((V) => {
      var {
        name: Y
      } = V;
      return e.active === Y.value;
    }), k = (V) => y.find((Y) => {
      var {
        index: Z
      } = Y;
      return (V ?? e.active) === Z.value;
    }), S = () => {
      if (h.value !== 0) {
        var {
          active: V
        } = e;
        if (cr(V)) {
          var Y = dn(V, 0, h.value - 1);
          return C(e["onUpdate:active"], Y), k(Y);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || y.length >= 5;
    }, M = (V) => {
      var {
        element: Y
      } = V, Z = Y.value;
      Z && (e.layoutDirection === "horizontal" ? (r.value = Z.offsetWidth + "px", a.value = Z.offsetLeft + "px") : (n.value = Z.offsetHeight + "px", t.value = Z.offsetTop + "px"));
    }, D = (V) => {
      var {
        element: Y
      } = V;
      if (o.value) {
        var Z = l.value, te = Y.value;
        if (e.layoutDirection === "horizontal") {
          var se = te.offsetLeft + te.offsetWidth / 2 - Z.offsetWidth / 2;
          ga(Z, {
            left: se,
            animation: Ho
          });
        } else {
          var H = te.offsetTop + te.offsetHeight / 2 - Z.offsetHeight / 2;
          ga(Z, {
            top: H,
            animation: Ho
          });
        }
      }
    }, b = () => {
      var V = P() || k() || S();
      !V || V.disabled.value || (E(), M(V), D(V));
    }, $ = /* @__PURE__ */ function() {
      var V = ws(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), U = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: b,
      onTabClick: w
    };
    return g(U), de(() => h.value, /* @__PURE__ */ ws(function* () {
      yield Dr(), b();
    })), de(() => e.active, b), de(() => e.scrollable, b), pn(b), Pt(b), {
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
      n: Ew,
      classes: Vw,
      resize: b,
      resizeSticky: $,
      formatElevation: hr
    };
  }
});
Nv.render = Nw;
const gt = Nv;
oe(gt);
var Tk = gt, Dw = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: Boolean,
  "onUpdate:active": L()
};
function Cs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Aw(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Cs(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Cs(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: zw
} = ae("tabs-items");
function Lw(e, r) {
  var n = le("var-swipe");
  return p(), Ce(n, {
    class: c(e.n()),
    ref: "swipe",
    loop: e.loop,
    touchable: e.canSwipe,
    indicator: !1,
    onChange: e.handleSwipeChange
  }, {
    default: me(() => [F(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class", "loop", "touchable", "onChange"]);
}
var Dv = ne({
  name: "VarTabsItems",
  components: {
    VarSwipe: Pn
  },
  props: Dw,
  setup(e) {
    var r = T(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = h0(), o = (v) => n.find((f) => {
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
          setCurrent: g
        } = y;
        return g(!1);
      }), m.setCurrent(!0), (f = r.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = n.find((g) => {
        var {
          index: h
        } = g;
        return h.value === v;
      }), y = (f = m.name.value) != null ? f : m.index.value;
      C(e["onUpdate:active"], y);
    }, d = () => r.value;
    return a({}), de(() => e.active, s), de(() => t.value, /* @__PURE__ */ Aw(function* () {
      yield Dr(), s(e.active);
    })), {
      swipe: r,
      n: zw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Dv.render = Lw;
const bt = Dv;
oe(bt);
var Ok = bt;
const Rw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Uw = {
  "--badge-default-color": "#555"
}, Yw = {
  "--button-default-color": "#303030",
  "--button-default-text-color": "#fff"
}, Hw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Fw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, jw = {
  "--checkbox-unchecked-color": "#fff",
  "--checkbox-text-color": "#fff"
}, Ww = {
  "--chip-default-color": "#555",
  "--chip-default-text-color": "#fff"
}, Gw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, qw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa",
  "--year-picker-item-color": "#fff",
  "--picker-header-color": "#fff"
}, Xw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-title-color": "#fff",
  "--dialog-message-color": "#bbb"
}, Kw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Zw = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, Jw = {
  "--pagination-text-color": "#fff",
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "rgba(255, 255, 255, .15)",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Qw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, _w = {
  "--popup-content-background-color": "#1e1e1e"
}, xw = {
  "--pull-refresh-background": "#303030"
}, eC = {
  "--radio-unchecked-color": "#fff",
  "--radio-text-color": "#fff"
}, rC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, nC = {
  "--select-scroller-background": "#303030"
}, aC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, tC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, oC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, iC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, lC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-td-text-color": "#fff",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, sC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa",
  "--time-picker-clock-item-text-color": "#fff"
}, uC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, dC = {
  "--tabs-background": "#1e1e1e"
}, vC = {
  "--app-bar-color": "#272727"
}, fC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, cC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, mC = {
  "--menu-background-color": "#272727"
}, hC = {
  "--breadcrumb-inactive-color": "#aaa"
}, pC = {
  "--paper-background": "#303030"
}, gC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
}, bC = {
  "--link-default-color": "#fff"
}, yC = {
  "--progress-label-color": "#fff"
}, wC = {
  "--options-text-color": "#fff"
}, CC = {
  "--countdown-text-color": "#fff"
}, SC = {
  "--watermark-content-color": "#ffffff"
};
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
const kC = Bi({
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
}, Yw, Fw, Hw, sC, qw, aC, dC, iC, _w, Xw, Rw, Ww, Uw, uC, Gw, xw, oC, tC, Jw, lC, Zw, nC, eC, jw, Kw, Qw, vC, fC, cC, mC, rC, hC, pC, gC, bC, yC, wC, CC, SC);
var $C = {
  dark: kC
}, Pk = null;
const Ei = $C;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], ur = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Ss = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"], TC = {
  modelValue: String,
  elevation: {
    type: [Boolean, Number, String],
    default: !1
  },
  color: String,
  headerColor: String,
  format: {
    type: String,
    default: "ampm"
  },
  allowedTime: Object,
  min: String,
  max: String,
  useSeconds: Boolean,
  readonly: Boolean,
  "onUpdate:modelValue": L(),
  onChange: L()
}, Av = (e, r) => e === "24hr" || r === "am", ol = (e, r, n) => {
  var a = Cr.findIndex((o) => z(o) === z(n)), t = Av(e, r) ? n : ur[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, fr = (e) => {
  var [r, n, a] = e.split(":");
  return {
    hour: z(r),
    minute: z(n),
    second: z(a)
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
  } = ol(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: y,
      minute: g
    } = fr(i);
    f = y === v && a > g;
  }
  if (!i && s) {
    var {
      hour: h,
      minute: w
    } = fr(s);
    f = h === v && a < w;
  }
  if (i && s) {
    var {
      hour: P,
      minute: k
    } = fr(i), {
      hour: S,
      minute: E
    } = fr(s);
    f = S === v && a < E || P === v && a > k;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
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
  } = ol(t, o, l), m = !1, y = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: g,
      minute: h,
      second: w
    } = fr(s);
    m = g === f && h < i || h === i && a > w;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: k,
      second: S
    } = fr(u);
    m = P === f && k > i || k === i && a > S;
  }
  if (s && u) {
    var {
      hour: E,
      minute: M,
      second: D
    } = fr(s), {
      hour: b,
      minute: $,
      second: U
    } = fr(u);
    m = E === f && M < i || b === f && $ > i || E === f && M === i && a > D || b === f && $ === i && a < U;
  }
  return (r = e.allowedTime) != null && r.seconds && (y = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || y;
}, {
  n: OC,
  classes: PC
} = ae("time-picker");
function IC(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n("clock"))
    },
    [N(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: G(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), O(
      Be,
      null,
      We(e.timeScales, (n, a) => (p(), O(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: G(e.getStyle(a, n, !1))
        },
        ie(n),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), O(
        Be,
        null,
        We(e.hours24, (n, a) => (p(), O(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: G(e.getStyle(a, n, !0))
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Rv = ne({
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
    } = r, a = T(null), t = T([]), o = T([]), l = A(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = A(() => {
      if (e.rad !== void 0) {
        var h = e.rad / 30;
        return h >= 0 ? h : h + 12;
      }
    }), s = A(() => e.type === "hour" ? Cr : Ss), u = (h, w) => {
      var P;
      h = (P = h) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var k = e.type === "minute" ? zv : Lv, S = {
        time: z(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty(S, "minute"), k(S);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var h = e.isInner ? ur[i.value] : s.value[i.value];
      return s.value === Ss ? u() ? "#bdbdbd" : e.color : f(h) ? "#bdbdbd" : e.color;
    }, v = (h, w) => w ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), f = (h) => {
      if (e.type === "hour") {
        if (Av(e.format, e.ampm))
          return t.value.includes(h);
        var w = Cr.findIndex((P) => P === h);
        return o.value.includes(w);
      }
      return u(h, !0);
    }, m = (h, w, P) => {
      var k = 2 * Math.PI / 12 * h - Math.PI / 2, S = 50 * (1 + Math.cos(k)), E = 50 * (1 + Math.sin(k)), M = () => v(h, P) ? f(w) ? {
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
      } = M();
      return {
        left: S + "%",
        top: E + "%",
        backgroundColor: D,
        color: b
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
    }, g = () => {
      if (i.value !== void 0) {
        var h = e.ampm === "am" ? Cr : ur;
        return kn(h[i.value], 2, "0");
      }
    };
    return de([i, () => e.isInner], (h, w) => {
      var [P, k] = h, [S, E] = w, M = P === S && k === E;
      if (!(M || e.type !== "hour" || i.value === void 0)) {
        var D = k ? ur[i.value] : g(), b = e.useSeconds ? ":" + e.time.second : "", $ = D + ":" + e.time.minute + b;
        e.preventNextUpdate || n("update", $), n("change-prevent-update");
      }
    }), de(() => e.rad, (h, w) => {
      if (!(e.type === "hour" || h === void 0 || w === void 0)) {
        var P = h / 6 >= 0 ? h / 6 : h / 6 + 60, k = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (P !== k) {
          var S, {
            hourStr: E
          } = ol(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var M = fe().minute(P).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            S = E + ":" + M + D;
          }
          if (e.type === "second") {
            var b = fe().second(P).format("ss"), $ = e.useSeconds ? ":" + b : "";
            S = E + ":" + e.time.minute + $;
          }
          n("update", S);
        }
      }
    }), de([() => e.max, () => e.min, () => e.allowedTime], (h) => {
      var [w, P, k] = h;
      if (t.value = [], w && !P) {
        var {
          hour: S
        } = fr(w), E = Cr.filter((R) => z(R) > S), M = ur.filter((R) => z(R) > S);
        t.value = [...E, ...M];
      }
      if (!w && P) {
        var {
          hour: D
        } = fr(P), b = Cr.filter((R) => z(R) < D), $ = ur.filter((R) => z(R) < D);
        t.value = [...b, ...$];
      }
      if (w && P) {
        var {
          hour: U
        } = fr(w), {
          hour: V
        } = fr(P), Y = Cr.filter((R) => z(R) < V || z(R) > U), Z = ur.filter((R) => z(R) < V || z(R) > U);
        t.value = [...Y, ...Z];
      }
      if (k != null && k.hours) {
        var {
          hours: te
        } = k, se = Cr.filter((R) => !te(z(R))), H = ur.filter((R) => !te(z(R)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...se, ...H])];
      }
      o.value = t.value.map((R) => ur.findIndex((W) => R === W)).filter((R) => R >= 0);
    }, {
      immediate: !0
    }), {
      n: OC,
      classes: PC,
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
Rv.render = IC;
const MC = Rv;
var {
  n: BC,
  classes: EC
} = ae("time-picker"), VC = (e) => (gn(""), e = e(), bn(), e), NC = /* @__PURE__ */ VC(() => /* @__PURE__ */ N(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), DC = {
  key: 0
};
function AC(e, r) {
  var n = le("clock");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [N(
      "div",
      {
        class: c(e.n("title")),
        style: G({
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
            onClick: r[0] || (r[0] = (a) => e.checkPanel("hour"))
          },
          ie(e.time.hour),
          3
          /* TEXT, CLASS */
        ), NC, N(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          ie(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), O("span", DC, ":")) : ee("v-if", !0), e.useSeconds ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          ie(e.time.second),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [N(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: r[3] || (r[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), N(
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
    ), N(
      "div",
      {
        class: c(e.n("body"))
      },
      [N(
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
var Uv = ne({
  name: "VarTimePicker",
  components: {
    Clock: MC
  },
  props: TC,
  setup(e) {
    var r = T(null), n = T(null), a = T(null), t = T(!1), o = T(!1), l = T(!1), i = T(!1), s = T(!1), u = T(void 0), d = T(0), v = T(0), f = T("hour"), m = T("am"), y = T(!1), g = T(!1), h = T({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ye({
      x: 0,
      y: 0
    }), P = Ye({
      x: [],
      y: []
    }), k = A(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (I) => {
      C(e["onUpdate:modelValue"], I), C(e.onChange, I);
    }, E = (I) => I * 57.29577951308232, M = (I) => {
      i.value = !1, g.value = !1, f.value = I;
    }, D = (I) => {
      var {
        disableHour: Q
      } = a.value, q = Cr.findIndex((x) => z(x) === z(h.value.hour)), X = I === "am" ? Cr : ur, K = [...X.slice(q), ...X.slice(0, q)];
      return K.find((x, ce) => (o.value = ce !== 0, !Q.includes(x)));
    }, b = (I) => {
      if (!e.readonly) {
        m.value = I;
        var Q = D(I);
        if (Q) {
          var q = e.useSeconds ? ":" + h.value.second : "", X = kn(Q, 2, "0") + ":" + h.value.minute + q;
          S(X);
        }
      }
    }, $ = (I, Q) => {
      var q = I >= P.x[0] && I <= P.x[1], X = Q >= P.y[0] && Q <= P.y[1];
      return q && X;
    }, U = (I) => {
      var Q = e.format === "24hr" ? "HH" : "hh", {
        hour: q,
        minute: X,
        second: K
      } = fr(I);
      return {
        hour: fe().hour(q).format(Q),
        minute: fe().minute(X).format("mm"),
        second: fe().second(K).format("ss")
      };
    }, V = (I) => {
      var Q = I / 30;
      return Q >= 0 ? Q : Q + 12;
    }, Y = () => {
      var {
        width: I,
        height: Q
      } = a.value.getSize(), q = w.x - I / 2 - 8, X = w.x + I / 2 + 8, K = w.y - Q / 2 - 8, x = w.y + Q / 2 + 8;
      return {
        rangeXMin: q,
        rangeXMax: X,
        rangeYMin: K,
        rangeYMax: x
      };
    }, Z = (I, Q, q) => {
      var {
        disableHour: X
      } = a.value;
      l.value = $(I, Q);
      var K = Math.round(q / 30) * 30 + 90, x = V(K), ce = t.value ? Cr[x] : ur[x];
      if (X.includes(ce) || (t.value = e.format === "24hr" ? $(I, Q) : !1), t.value === l.value) {
        var ke = t.value || m.value === "pm" ? ur[x] : Cr[x];
        y.value = X.includes(ke), !y.value && (u.value = K, i.value = !0);
      }
    }, te = (I) => {
      var {
        disableHour: Q
      } = a.value, q = Math.round(I / 6) * 6 + 90, X = q / 6 >= 0 ? q / 6 : q / 6 + 60, K = {
        time: X,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Q,
        allowedTime: e.allowedTime
      };
      g.value = zv(K), !g.value && (d.value = q, s.value = !0);
    }, se = (I) => {
      var {
        disableHour: Q
      } = a.value, q = Math.round(I / 6) * 6 + 90, X = q / 6 >= 0 ? q / 6 : q / 6 + 60, K = {
        time: X,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        minute: z(h.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Q,
        allowedTime: e.allowedTime
      };
      Lv(K) || (v.value = q);
    }, H = () => {
      var {
        left: I,
        top: Q,
        width: q,
        height: X
      } = Qe(r.value);
      if (w.x = I + q / 2, w.y = Q + X / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: K,
          rangeXMax: x,
          rangeYMin: ce,
          rangeYMax: ke
        } = Y();
        P.x = [K, x], P.y = [ce, ke];
      }
    }, R = (I) => {
      if (I.preventDefault(), !e.readonly) {
        H();
        var {
          clientX: Q,
          clientY: q
        } = I.touches[0], X = Q - w.x, K = q - w.y, x = Math.round(E(Math.atan2(K, X)));
        f.value === "hour" ? Z(Q, q, x) : f.value === "minute" ? te(x) : se(x);
      }
    }, W = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, B = () => {
      o.value = !1;
    };
    return de(() => e.modelValue, (I) => {
      if (I) {
        var {
          hour: Q,
          minute: q,
          second: X
        } = fr(I), K = fe().hour(Q).format("hh"), x = fe().hour(Q).format("HH"), ce = fe().minute(q).format("mm"), ke = fe().second(X).format("ss");
        u.value = (K === "12" ? 0 : z(K)) * 30, d.value = z(ce) * 6, v.value = z(ke) * 6, h.value = U(I), e.format !== "24hr" && (m.value = kn("" + Q, 2, "0") === x && ur.includes(x) ? "pm" : "am"), t.value = e.format === "24hr" && ur.includes(x);
      }
    }, {
      immediate: !0
    }), {
      n: BC,
      classes: EC,
      getRad: k,
      time: h,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: R,
      checkPanel: M,
      checkAmpm: b,
      end: W,
      update: S,
      changePreventUpdate: B,
      formatElevation: hr
    };
  }
});
Uv.render = AC;
const yt = Uv;
oe(yt);
var Ik = yt, zC = {
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
  multiple: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: [Number, String],
  maxsize: [Number, String],
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
  rules: Array,
  hideList: Boolean,
  onBeforeFilter: L(),
  onBeforeRead: L(),
  onAfterRead: L(),
  onBeforeRemove: L(),
  onRemove: L(),
  onOversize: L(),
  "onUpdate:modelValue": L()
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
function Yo(e) {
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
var {
  n: LC,
  classes: RC
} = ae("uploader"), UC = 0, YC = ["onClick"], HC = ["onClick"], FC = ["src", "alt"], jC = ["multiple", "accept", "capture", "disabled"], WC = ["src"];
function GC(e, r) {
  var n = le("var-icon"), a = le("var-hover-overlay"), t = le("var-form-details"), o = le("var-popup"), l = Ae("ripple"), i = Ae("hover");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [N(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), O(
        Be,
        null,
        We(e.files, (s) => Te((p(), O("div", {
          class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
          key: s.id,
          onClick: (u) => e.preview(s)
        }, [N(
          "div",
          {
            class: c(e.n("file-name"))
          },
          ie(s.name || s.url),
          3
          /* TEXT, CLASS */
        ), e.removable ? (p(), O("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: Tr((u) => e.handleRemove(s), ["stop"])
        }, [_(n, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, HC)) : ee("v-if", !0), s.cover ? (p(), O("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: G({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, FC)) : ee("v-if", !0), N(
          "div",
          {
            class: c(e.n("file-indicator"))
          },
          [N(
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
        )], 10, YC)), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Te((p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
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
          onChange: r[0] || (r[0] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        }, null, 42, jC), F(e.$slots, "default", {}, () => [_(n, {
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
      fn: me(() => [F(e.$slots, "extra-message")]),
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
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), O("video", {
          key: 0,
          class: c(e.n("preview-video")),
          playsinline: "true",
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
          controls: "",
          src: (u = e.currentPreview) == null ? void 0 : u.url
        }, null, 10, WC)) : ee("v-if", !0)];
      }),
      _: 1
      /* STABLE */
    }, 8, ["class", "show"])],
    2
    /* CLASS */
  );
}
var Yv = ne({
  name: "VarUploader",
  directives: {
    Ripple: Xe,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarPopup: Ur,
    VarFormDetails: nr,
    VarHoverOverlay: yr
  },
  props: zC,
  setup(e) {
    var r = T(null), n = T(!1), a = T(null), t = A(() => {
      var {
        maxlength: R,
        modelValue: {
          length: W
        }
      } = e;
      return cr(R) ? W + " / " + R : "";
    }), {
      form: o,
      bindForm: l
    } = Ir(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Pr(), {
      hovering: v,
      handleHovering: f
    } = Xr(), m = A(() => {
      var {
        modelValue: R,
        hideList: W
      } = e;
      return W ? [] : R;
    }), y = (R) => {
      var {
        disabled: W,
        readonly: B,
        previewed: I
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || W || B || !I)) {
        var {
          url: Q
        } = R;
        if (Je(Q) && dl(Q)) {
          Lr(Q);
          return;
        }
        Je(Q) && vl(Q) && (a.value = R, n.value = !0);
      }
    }, g = (R) => ({
      id: UC++,
      url: "",
      cover: "",
      name: R.name,
      file: R,
      progress: 0
    }), h = (R) => {
      var W = R.target, {
        files: B
      } = W;
      return Array.from(B);
    }, w = (R) => new Promise((W) => {
      if (!R.file.type.startsWith("image")) {
        W(R);
        return;
      }
      var B = new FileReader();
      B.onload = () => {
        var I = B.result;
        R.cover = I, R.url = I, W(R);
      }, B.readAsDataURL(R.file);
    }), P = (R) => R.map(w), k = (R) => {
      var {
        onBeforeRead: W
      } = e;
      return R.map((B) => new Promise((I) => {
        W || I({
          valid: !0,
          varFile: B
        });
        var Q = Wt(C(W, Ye(B)));
        Promise.all(Q).then((q) => {
          I({
            valid: q.every(Boolean),
            varFile: B
          });
        });
      }));
    }, S = /* @__PURE__ */ function() {
      var R = Yo(function* (W) {
        var {
          maxsize: B,
          maxlength: I,
          modelValue: Q,
          onOversize: q,
          onAfterRead: X,
          onBeforeFilter: K,
          readonly: x,
          disabled: ce
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ce || x)) {
          var ke = (He) => He.filter((Ge) => Ge.file.size > z(B) ? (C(q, Ye(Ge)), !1) : !0), Me = (He) => {
            var Ge = Math.min(He.length, z(I) - Q.length);
            return He.slice(0, Ge);
          }, j = /* @__PURE__ */ function() {
            var He = Yo(function* (Ge) {
              if (!K)
                return Ge;
              var ve = Wt(K);
              for (var Se of ve)
                Ge = yield Se(Ge);
              return Ge;
            });
            return function(ve) {
              return He.apply(this, arguments);
            };
          }(), re = h(W), ue = re.map(g);
          ue = yield j(ue), ue = B != null ? ke(ue) : ue, ue = I != null ? Me(ue) : ue;
          var ye = yield Promise.all(P(ue)), Ue = yield Promise.all(k(ye)), Le = Ue.filter((He) => {
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
          C(e["onUpdate:modelValue"], [...Q, ...Le]), W.target.value = "", Le.forEach((He) => C(X, Ye(He)));
        }
      });
      return function(B) {
        return R.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var R = Yo(function* (W) {
        var {
          disabled: B,
          readonly: I,
          modelValue: Q,
          onBeforeRemove: q,
          onRemove: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || B || I)) {
          if (q) {
            var K = Wt(C(q, Ye(W)));
            if ((yield Promise.all(K)).some((ce) => !ce))
              return;
          }
          var x = Q.filter((ce) => ce !== W);
          C(X, Ye(W)), Y("onRemove"), C(e["onUpdate:modelValue"], x);
        }
      });
      return function(B) {
        return R.apply(this, arguments);
      };
    }(), M = () => e.modelValue.filter((R) => R.state === "success"), D = () => e.modelValue.filter((R) => R.state === "error"), b = () => e.modelValue.filter((R) => R.state === "loading"), $ = () => {
      r.value.click();
    }, U = () => {
      a.value = null, n.value = !1, Lr.close();
    }, V = {
      getSuccess: M,
      getError: D,
      getLoading: b
    }, Y = (R) => {
      ze(() => {
        var {
          validateTrigger: W,
          rules: B,
          modelValue: I
        } = e;
        s(W, R, B, I, V);
      });
    }, Z = !1, te = () => u(e.rules, e.modelValue, V), se = () => {
      Z = !0, C(e["onUpdate:modelValue"], []), d();
    }, H = {
      validate: te,
      resetValidation: d,
      reset: se
    };
    return C(l, H), de(() => e.modelValue, () => {
      !Z && Y("onChange"), Z = !1;
    }, {
      deep: !0
    }), {
      n: LC,
      classes: RC,
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
      toNumber: z,
      handleHovering: f,
      isHTMLSupportVideo: vl,
      isHTMLSupportImage: dl,
      preview: y,
      handleChange: S,
      handleRemove: E,
      getSuccess: M,
      getError: D,
      getLoading: b,
      validate: te,
      resetValidation: d,
      reset: se,
      chooseFile: $,
      closePreview: U,
      toSizeUnit: we
    };
  }
});
Yv.render = GC;
const wt = Yv;
oe(wt);
var Mk = wt, qC = {
  width: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 100
  },
  content: String,
  image: String,
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
  fullscreen: Boolean,
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
function $s(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ts(e) {
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
var {
  n: XC,
  classes: KC
} = ae("watermark"), ZC = {
  ref: "svgRef"
}, JC = ["viewBox", "width", "height"], QC = ["width", "height"], _C = ["href", "xlink:href", "x", "y", "width", "height"];
function xC(e, r) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [F(e.$slots, "default"), (p(), Ce(Jr, {
      to: "body",
      disabled: !e.fullscreen
    }, [N(
      "div",
      {
        ref: "containerRef",
        class: c(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
        style: G({
          backgroundImage: "url(" + e.watermarkUrl + ")",
          zIndex: e.zIndex
        })
      },
      [Te(N(
        "div",
        ZC,
        [(p(), O("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 0 " + (e.width + e.gapX) + " " + (e.height + e.gapY),
          width: "" + (e.width + e.gapX),
          height: "" + (e.height + e.gapY),
          style: G({
            padding: "0 " + e.gapX + "px " + e.gapY + "px 0",
            opacity: e.opacity
          })
        }, [e.showContent() ? (p(), O("foreignObject", {
          key: 0,
          x: "0",
          y: "0",
          width: e.width,
          height: e.height
        }, [N(
          "div",
          {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: G({
              transform: "translate(" + e.offsetX + "px, " + e.offsetY + "px) rotate(" + e.rotate + "deg)",
              transformOrigin: "center"
            })
          },
          [F(e.$slots, "content", {}, () => [N(
            "span",
            {
              style: G(Vi({}, e.font, {
                fontSize: e.font.fontSize + "px",
                color: e.textColor
              }))
            },
            ie(e.content),
            5
            /* TEXT, STYLE */
          )])],
          4
          /* STYLE */
        )], 8, QC)) : ee("v-if", !0), !e.$slots.content && e.image ? (p(), O("image", {
          key: 1,
          href: e.imageUrl,
          "xlink:href": e.imageUrl,
          x: e.offsetX,
          y: e.offsetY,
          width: e.width,
          height: e.height,
          style: G({
            transform: "rotate(" + e.rotate + "deg)",
            transformOrigin: "center"
          })
        }, null, 12, _C)) : ee("v-if", !0)], 12, JC))],
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
var Hv = ne({
  name: "VarWatermark",
  props: qC,
  setup(e, r) {
    var {
      slots: n
    } = r, a = T(""), t = T(""), o = T(""), l = T(null), i = T(null), s = () => !!(n.content || e.content && !e.image), u = /* @__PURE__ */ function() {
      var m = Ts(function* () {
        return new Promise((y) => {
          var g = document.createElement("canvas"), h = g.getContext("2d"), w = new Image();
          w.crossOrigin = "anonymous", w.referrerPolicy = "no-referrer", w.src = e.image, w.onload = () => {
            g.width = w.width, g.height = w.height, h.drawImage(w, 0, 0), y(g.toDataURL());
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
      var m = Ts(function* () {
        o.value = Vn(i.value).color, e.image && (t.value = yield u()), yield ze(), v(), a.value = d(l.value.innerHTML);
      });
      return function() {
        return m.apply(this, arguments);
      };
    }();
    return de(() => [e.image, e.font, e.content, e.height, e.width, e.rotate, e.gapX, e.gapY, e.offsetX, e.offsetY, e.opacity], f, {
      deep: !0
    }), St(f), kt(v), {
      n: XC,
      classes: KC,
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
Hv.render = xC;
const Ct = Hv;
oe(Ct);
var Bk = Ct;
const eS = "2.14.2";
function rS(e) {
  qr.install && e.use(qr), ya.install && e.use(ya), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), Hn.install && e.use(Hn), $a.install && e.use($a), Ta.install && e.use(Ta), Oa.install && e.use(Oa), Pa.install && e.use(Pa), dr.install && e.use(dr), Ia.install && e.use(Ia), Ma.install && e.use(Ma), Fn.install && e.use(Fn), jn.install && e.use(jn), Ba.install && e.use(Ba), Wn.install && e.use(Wn), Ea.install && e.use(Ea), Va.install && e.use(Va), Na.install && e.use(Na), br.install && e.use(br), Da.install && e.use(Da), za.install && e.use(za), La.install && e.use(La), Kr.install && e.use(Kr), Ra.install && e.use(Ra), Xn.install && e.use(Xn), Ha.install && e.use(Ha), Fa.install && e.use(Fa), On.install && e.use(On), nr.install && e.use(nr), Ar.install && e.use(Ar), yr.install && e.use(yr), Ne.install && e.use(Ne), ja.install && e.use(ja), Lr.install && e.use(Lr), Wa.install && e.use(Wa), Ga.install && e.use(Ga), Qn.install && e.use(Qn), wa.install && e.use(wa), qa.install && e.use(qa), Xa.install && e.use(Xa), cn.install && e.use(cn), $i.install && e.use($i), Ko.install && e.use(Ko), Bn.install && e.use(Bn), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), Qa.install && e.use(Qa), En.install && e.use(En), Ur.install && e.use(Ur), _a.install && e.use(_a), xa.install && e.use(xa), et.install && e.use(et), rt.install && e.use(rt), nt.install && e.use(nt), at.install && e.use(at), Xe.install && e.use(Xe), tt.install && e.use(tt), ot.install && e.use(ot), it.install && e.use(it), lt.install && e.use(lt), Mi.install && e.use(Mi), ut.install && e.use(ut), dt.install && e.use(dt), vt.install && e.use(vt), Mn.install && e.use(Mn), ft.install && e.use(ft), Pn.install && e.use(Pn), In.install && e.use(In), ct.install && e.use(ct), mt.install && e.use(mt), ht.install && e.use(ht), pt.install && e.use(pt), gt.install && e.use(gt), bt.install && e.use(bt), Ei.install && e.use(Ei), yt.install && e.use(yt), Jn.install && e.use(Jn), wt.install && e.use(wt), Ct.install && e.use(Ct);
}
const Ek = {
  version: eS,
  install: rS,
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
  Button: dr,
  ButtonGroup: Ia,
  Card: Ma,
  Cell: Fn,
  Checkbox: jn,
  CheckboxGroup: Ba,
  Chip: Wn,
  Col: Ea,
  Collapse: Va,
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
  HoverOverlay: yr,
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
  LoadingBar: $i,
  Locale: Ko,
  Menu: Bn,
  Option: Ka,
  Overlay: Za,
  Pagination: Ja,
  Paper: Qa,
  Picker: En,
  Popup: Ur,
  Progress: _a,
  PullRefresh: xa,
  Radio: et,
  RadioGroup: rt,
  Rate: nt,
  Result: at,
  Ripple: Xe,
  Row: tt,
  Select: ot,
  Skeleton: it,
  Slider: lt,
  Snackbar: Mi,
  Space: ut,
  Step: dt,
  Steps: vt,
  Sticky: Mn,
  StyleProvider: ft,
  Swipe: Pn,
  SwipeItem: In,
  Switch: ct,
  Tab: mt,
  TabItem: ht,
  Table: pt,
  Tabs: gt,
  TabsItems: bt,
  Themes: Ei,
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
  dr as Button,
  Ia as ButtonGroup,
  Ma as Card,
  Fn as Cell,
  jn as Checkbox,
  Ba as CheckboxGroup,
  Wn as Chip,
  Ea as Col,
  Va as Collapse,
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
  yr as HoverOverlay,
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
  $i as LoadingBar,
  Ko as Locale,
  Bn as Menu,
  Ka as Option,
  Za as Overlay,
  Qo as PIXEL,
  Ja as Pagination,
  Qa as Paper,
  En as Picker,
  Ur as Popup,
  _a as Progress,
  xa as PullRefresh,
  et as Radio,
  rt as RadioGroup,
  nt as Rate,
  at as Result,
  Xe as Ripple,
  tt as Row,
  Sv as SNACKBAR_TYPE,
  ot as Select,
  it as Skeleton,
  lt as Slider,
  Mi as Snackbar,
  ut as Space,
  dt as Step,
  vt as Steps,
  Mn as Sticky,
  ft as StyleProvider,
  Pn as Swipe,
  In as SwipeItem,
  ct as Switch,
  mt as Tab,
  ht as TabItem,
  pt as Table,
  gt as Tabs,
  bt as TabsItems,
  Ei as Themes,
  yt as TimePicker,
  Jn as Tooltip,
  wt as Uploader,
  Ct as Watermark,
  sS as _ActionSheetComponent,
  uS as _AppBarComponent,
  vS as _AvatarComponent,
  fS as _AvatarGroupComponent,
  gS as _BackTopComponent,
  bS as _BadgeComponent,
  yS as _BottomNavigationComponent,
  wS as _BottomNavigationItemComponent,
  CS as _BreadcrumbComponent,
  SS as _BreadcrumbsComponent,
  pS as _ButtonComponent,
  kS as _ButtonGroupComponent,
  $S as _CardComponent,
  TS as _CellComponent,
  PS as _CheckboxComponent,
  IS as _CheckboxGroupComponent,
  MS as _ChipComponent,
  BS as _ColComponent,
  ES as _CollapseComponent,
  VS as _CollapseItemComponent,
  aS as _ContextComponent,
  NS as _CountdownComponent,
  DS as _CounterComponent,
  AS as _DatePickerComponent,
  zS as _DialogComponent,
  LS as _DividerComponent,
  RS as _DragComponent,
  YS as _EllipsisComponent,
  HS as _FabComponent,
  FS as _FormComponent,
  OS as _FormDetailsComponent,
  hS as _HoverComponent,
  mS as _HoverOverlayComponent,
  iS as _IconComponent,
  jS as _ImageComponent,
  qS as _ImagePreviewComponent,
  KS as _IndexAnchorComponent,
  ZS as _IndexBarComponent,
  JS as _InputComponent,
  dS as _LazyComponent,
  QS as _LinkComponent,
  _S as _ListComponent,
  xS as _LoadingBarComponent,
  cS as _LoadingComponent,
  lS as _LocaleComponent,
  ek as _MenuComponent,
  rk as _OptionComponent,
  nk as _OverlayComponent,
  ak as _PaginationComponent,
  tk as _PaperComponent,
  ok as _PickerComponent,
  oS as _PopupComponent,
  ik as _ProgressComponent,
  lk as _PullRefreshComponent,
  sk as _RadioComponent,
  uk as _RadioGroupComponent,
  dk as _RateComponent,
  vk as _ResultComponent,
  tS as _RippleComponent,
  fk as _RowComponent,
  ck as _SelectComponent,
  mk as _SkeletonComponent,
  hk as _SliderComponent,
  pk as _SnackbarComponent,
  gk as _SpaceComponent,
  bk as _StepComponent,
  yk as _StepsComponent,
  XS as _StickyComponent,
  wk as _StyleProviderComponent,
  WS as _SwipeComponent,
  GS as _SwipeItemComponent,
  Ck as _SwitchComponent,
  Sk as _TabComponent,
  kk as _TabItemComponent,
  $k as _TableComponent,
  Tk as _TabsComponent,
  Ok as _TabsItemsComponent,
  Pk as _ThemesComponent,
  Ik as _TimePickerComponent,
  US as _TooltipComponent,
  Mk as _UploaderComponent,
  Bk as _WatermarkComponent,
  Df as actionSheetProps,
  Yi as add,
  Yf as appBarProps,
  vc as avatarGroupProps,
  tc as avatarProps,
  Rc as backTopProps,
  Fc as badgeProps,
  _c as bottomNavigationItemProps,
  qc as bottomNavigationProps,
  tm as breadcrumbProps,
  dm as breadcrumbsProps,
  Ec as buttonProps,
  gm as cardProps,
  km as cellProps,
  Um as checkboxGroupProps,
  Vm as checkboxProps,
  jm as chipProps,
  qm as colProps,
  nh as collapseItemProps,
  _m as collapseProps,
  ih as countdownProps,
  np as counterProps,
  Sp as datePickerProps,
  Ek as default,
  Ke as defaultLazyOptions,
  Rp as dialogProps,
  jp as dividerProps,
  Xp as dragProps,
  Ks as enUS,
  Pm as formDetailsProps,
  cb as formProps,
  qs as iconProps,
  xs as imageCache,
  Vb as imagePreviewProps,
  pb as imageProps,
  Gb as indexAnchorProps,
  Zb as indexBarProps,
  a0 as inputProps,
  rS as install,
  d0 as linkProps,
  m0 as listProps,
  k0 as loadingBarProps,
  on as loadingProps,
  V0 as menuProps,
  Js as merge,
  R0 as optionProps,
  F0 as overlayProps,
  _e as pack,
  Zs as packs,
  W0 as paginationProps,
  Z0 as paperProps,
  x0 as pickerProps,
  It as popupProps,
  sy as progressProps,
  hy as pullRefreshProps,
  $y as radioGroupProps,
  by as radioProps,
  Iy as rateProps,
  Ey as resultProps,
  h1 as rowProps,
  y1 as selectProps,
  $1 as skeletonProps,
  I1 as sliderProps,
  bv as snackbarProps,
  X1 as spaceProps,
  Q1 as stepProps,
  tw as stepsProps,
  Zt as stickyProps,
  lw as styleProviderProps,
  Pd as swipeProps,
  dw as switchProps,
  Sw as tabItemProps,
  gw as tabProps,
  Ow as tableProps,
  Dw as tabsItemsProps,
  Bw as tabsProps,
  TC as timePickerProps,
  nb as tooltipProps,
  zC as uploaderProps,
  Hi as use,
  Xr as useHoverOverlay,
  Ui as useLocale,
  eS as version,
  Ri as zhCN
};
