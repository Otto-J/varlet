import { reactive as Re, onMounted as Ct, nextTick as ze, onActivated as hn, isRef as Kv, watch as ue, onBeforeUnmount as lo, onDeactivated as xn, unref as ua, onUnmounted as St, inject as Zv, getCurrentInstance as ea, computed as z, provide as Jv, isVNode as kt, ref as k, Comment as Qv, Fragment as Ie, createApp as _v, h as Ps, onBeforeMount as xv, defineComponent as re, createVNode as x, Teleport as Jr, Transition as Ue, withDirectives as Te, vShow as Rr, mergeProps as De, openBlock as g, createBlock as Ce, resolveDynamicComponent as ra, normalizeClass as c, normalizeStyle as q, resolveComponent as se, resolveDirective as Ae, withCtx as ce, createElementVNode as B, renderSlot as j, toDisplayString as le, createElementBlock as T, renderList as Ye, createCommentVNode as ee, onUpdated as $t, createTextVNode as $e, pushScopeId as gn, popScopeId as yn, withModifiers as Tr, normalizeProps as Tt, guardReactiveProps as so, vModelText as ef, createSlots as Zt, withKeys as ll, toRaw as sl, TransitionGroup as rf } from "vue";
var Os = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, sk = Re(Os);
const yr = Re(Os), Fe = (e) => typeof e == "string", Bi = (e) => typeof e == "boolean", nr = (e) => typeof e == "number", Ei = (e) => Object.prototype.toString.call(e) === "[object Object]", nf = (e) => typeof e == "object" && e !== null, na = (e) => typeof e == "function", Ve = (e) => Array.isArray(e), af = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Fr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Ni = (e) => e === window, R = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Bi(e) ? Number(e) : e, Jt = (e, r) => {
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
}, aa = () => typeof window < "u", ul = (e) => [...new Set(e)], Vs = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), tf = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), of = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, jt = (e) => Ve(e) ? e : [e], dn = (e, r, n) => Math.min(n, Math.max(r, e)), lf = (e, r) => dn(e, 0, r.length - 1);
var dl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), vl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), sf = (e) => {
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
}, Uo = (e) => e, fl = (e) => Math.pow(e, 3), Ms = (e) => e < 0.5 ? fl(e * 2) / 2 : 1 - fl((1 - e) * 2) / 2, uo = (e, r) => e ?? r, Is = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, kn = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Pr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function cl(e, r) {
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
function Je(e) {
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
    return Ho({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function uf(e) {
  var {
    left: r
  } = Je(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ml(e) {
  var {
    top: r
  } = Je(e);
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
function df(e) {
  var {
    top: r,
    bottom: n,
    left: a,
    right: t
  } = Je(e), {
    width: o,
    height: l
  } = Je(window), i = a <= o && t >= 0, s = r <= l && n >= 0;
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
  for (var r = [], n = e; !Ni(n); )
    n = vn(n), r.push(n);
  return r;
}
function Bs(e, r) {
  if (Fe(e)) {
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
  } = Je(window);
  return {
    vw: e,
    vh: r,
    vMin: Math.min(e, r),
    vMax: Math.max(e, r)
  };
}
var Es = (e) => Fe(e) && e.endsWith("rem"), cf = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), mf = (e) => Fe(e) && e.endsWith("px") || nr(e), pf = (e) => Fe(e) && e.endsWith("%"), Ns = (e) => Fe(e) && e.endsWith("vw"), Ds = (e) => Fe(e) && e.endsWith("vh"), As = (e) => Fe(e) && e.endsWith("vmin"), zs = (e) => Fe(e) && e.endsWith("vmax"), hf = (e) => Fe(e) && e.startsWith("calc("), gf = (e) => Fe(e) && e.startsWith("var("), Le = (e) => {
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
  if (Ns(e))
    return +e.replace("vw", "") * r / 100;
  if (Ds(e))
    return +e.replace("vh", "") * n / 100;
  if (As(e))
    return +e.replace("vmin", "") * a / 100;
  if (zs(e))
    return +e.replace("vmax", "") * t / 100;
  if (Es(e)) {
    var o = +e.replace("rem", ""), l = En(document.documentElement).fontSize;
    return o * parseFloat(l);
  }
  return Fe(e) ? R(e) : 0;
}, we = (e) => {
  if (e != null)
    return pf(e) || Ns(e) || Ds(e) || cf(e) || Es(e) || hf(e) || gf(e) || As(e) || zs(e) ? e : Le(e) + "px";
}, ur = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = we(e), a = n.match(/(vh|%|r?em|px|vw|vmin|vmax)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = Is();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function pl(e) {
  var r = Is();
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
function Ls(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + tf(a);
    return r[o] = t, r;
  }, {});
}
function bf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Qt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function or(e) {
  let r = !1;
  Ct(() => {
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
  Kv(e) && (v = ue(() => e.value, (m, y) => {
    d(y), u(m);
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
function Rs(e, r, n) {
  if (!aa())
    return;
  fn(document, r, (t) => {
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
    index: z(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Ct(() => {
        ze().then(() => {
          a(l, u);
        });
      }), lo(() => {
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
      kt(t) && (r.push(t), n(t));
    });
  };
  return n(e), r;
}
function lr(e) {
  const r = ea(), n = Re([]), a = [], t = z(() => n.length), o = () => {
    const u = Sf(r.subTree);
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
      Jv(e, Object.assign({
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
function kf(e, r) {
  const n = k(!1);
  return ue(e, (a) => {
    r === a && (n.value = !0);
  }, { immediate: !0 }), n;
}
function $f(e, r) {
  if (e > r)
    return "horizontal";
  if (r > e)
    return "vertical";
}
function zi() {
  const e = k(0), r = k(0), n = k(0), a = k(0), t = k(0), o = k(0), l = k(0), i = k(0), s = k(0), u = k(0), d = k(), v = k(!1), f = k(0), m = k(0), y = () => {
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
    startTouch: (O) => {
      y();
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
      return () => Ps(e, Yo({}, r, n));
    }
  }, {
    unmount: t
  } = Tf(a);
  return {
    unmountInstance: t
  };
}
function Us(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Qv) {
      if (n.type === Ie && Ve(n.children)) {
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
  var e = k(""), r = /* @__PURE__ */ function() {
    var t = gl(function* (o, l, i) {
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
function Pf(e) {
  fn(() => window, "hashchange", e), fn(() => window, "popstate", e);
}
function oa() {
  var e = k(!1);
  return hn(() => {
    e.value = !1;
  }), xn(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
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
function Hs(e, r, n) {
  n === void 0 && (n = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = n, i = t ?? "onUpdate:" + r.toString(), s = () => e[r] != null ? e[r] : o;
  if (!a)
    return z({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : C(e[i], d);
      }
    });
  var u = k(s());
  return ue(() => e[r], () => {
    u.value = s();
  }), ue(() => u.value, (d) => {
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
} = ne("ripple"), yl = 250;
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
  } = Je(e), {
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
      s.classList.add(Ys()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), Of(this), this.appendChild(s), window.setTimeout(() => {
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
  if (!(!bf() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function Mf(e, r) {
  var n;
  e._ripple = _t({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: Fo.bind(e)
  }), e.addEventListener("touchstart", Fs, {
    passive: !0
  }), e.addEventListener("touchmove", js, {
    passive: !0
  }), e.addEventListener("dragstart", Fo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function If(e) {
  e.removeEventListener("touchstart", Fs), e.removeEventListener("touchmove", js), e.removeEventListener("dragstart", Fo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Bf(e, r) {
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
var Ws = {
  mounted: Mf,
  unmounted: If,
  updated: Bf,
  install(e) {
    e.directive("ripple", this);
  }
}, uk = Ws;
const qe = Ws;
function Ef(e) {
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
function Dt(e) {
  yr.locks[e] = 1, Gs();
}
function At(e) {
  delete yr.locks[e], Gs();
}
function co(e, r) {
  var {
    uid: n
  } = ea();
  r && ue(r, (a) => {
    a === !1 ? At(n) : a === !0 && e() === !0 && Dt(n);
  }), ue(e, (a) => {
    r && r() === !1 || (a === !0 ? Dt(n) : At(n));
  }), xv(() => {
    r && r() === !1 || e() === !0 && Dt(n);
  }), St(() => {
    r && r() === !1 || e() === !0 && At(n);
  }), hn(() => {
    r && r() === !1 || e() === !0 && Dt(n);
  }), xn(() => {
    r && r() === !1 || e() === !0 && At(n);
  });
}
function Vt(e, r) {
  var n = k(yr.zIndex);
  return ue(e, (a) => {
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
function bl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: Ir,
  classes: Io
} = ne("popup");
const Ur = re({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Ot,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = kf(() => e.show, !0), {
      zIndex: o
    } = Vt(() => e.show, 3), {
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
      return x("div", {
        class: Io(Ir("overlay"), f),
        style: jo({
          zIndex: o.value - 1
        }, m),
        onClick: s
      }, null);
    }, d = () => Te(x("div", De({
      class: Io(Ir("content"), Ir("--" + e.position), [e.defaultStyle, Ir("--content-background-color")], [e.defaultStyle, Ir("$-elevation--3")], [e.safeArea, Ir("--safe-area")], [e.safeAreaTop, Ir("--safe-area-top")]),
      style: {
        zIndex: o.value
      }
    }, a), [t.value && C(n.default)]), [[Rr, e.show]]), v = () => {
      var f;
      return x(Ue, {
        name: Ir("$-fade"),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [Te(x("div", {
          class: Io(Ir("$--box"), Ir()),
          style: {
            zIndex: o.value - 2
          }
        }, [e.overlay && u(), x(Ue, {
          name: e.transition || Ir("$-pop-" + e.position)
        }, bl(f = d()) ? f : {
          default: () => [f]
        })]), [[Rr, e.show]])]
      });
    };
    return co(() => e.show, () => e.lockScroll), ue(() => e.show, (f) => {
      C(f ? e.onOpen : e.onClose);
    }), i({
      show: z(() => e.show)
    }), Pf(() => C(e.onRouteChange)), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return x(Jr, {
          to: f,
          disabled: l.value
        }, bl(m = v()) ? m : {
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
function wl(e, r, n, a, t, o, l) {
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
  n: zf,
  classes: Lf
} = ne("icon");
function Rf(e, r) {
  return g(), Ce(ra(e.isURL(e.name) ? "img" : "i"), {
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
var Ks = re({
  name: "VarIcon",
  props: Xs,
  setup(e) {
    var r = k(""), n = k(!1), a = /* @__PURE__ */ function() {
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
    return ue(() => e.name, a, {
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
var Uf = Wo({
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
const Li = {
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
function Ri() {
  var e = {}, r = k({}), n = (o, l) => {
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
  packs: Js,
  pack: _e,
  add: Ui,
  use: Hi,
  merge: Qs
} = Ri();
Ui("zh-CN", Li);
Hi("zh-CN");
var fk = {
  zhCN: Li,
  enUS: Zs,
  packs: Js,
  pack: _e,
  add: Ui,
  use: Hi,
  merge: Qs,
  useLocale: Ri
};
const qo = {
  zhCN: Li,
  enUS: Zs,
  packs: Js,
  pack: _e,
  add: Ui,
  use: Hi,
  merge: Qs,
  useLocale: Ri
};
var {
  n: Hf,
  classes: Yf
} = ne("action-sheet"), Ff = ["onClick"];
function jf(e, r) {
  var n = se("var-icon"), a = se("var-popup"), t = Ae("ripple");
  return g(), Ce(a, De({
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
    default: ce(() => [B(
      "div",
      De({
        class: e.classes(e.n(), e.n("$--box"))
      }, e.$attrs),
      [j(e.$slots, "title", {}, () => [B(
        "div",
        {
          class: c(e.n("title"))
        },
        le(e.dt(e.title, e.pack.actionSheetTitle)),
        3
        /* TEXT, CLASS */
      )]), j(e.$slots, "actions", {}, () => [(g(!0), T(
        Ie,
        null,
        Ye(e.actions, (o) => Te((g(), T("div", {
          class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
          key: o.name,
          style: q({
            color: o.color
          }),
          onClick: (l) => e.handleSelect(o)
        }, [o.icon ? (g(), Ce(n, {
          key: 0,
          class: c(e.n("action-icon")),
          "var-action-sheet-cover": "",
          name: o.icon,
          size: o.iconSize
        }, null, 8, ["class", "name", "size"])) : ee("v-if", !0), B(
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
var _s = re({
  name: "VarActionSheet",
  directives: {
    Ripple: qe
  },
  components: {
    VarPopup: Ur,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Uf,
  setup(e) {
    var r = k(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        C(l, t), o && C(e["onUpdate:show"], !1);
      }
    }, a = (t) => C(e["onUpdate:show"], t);
    return ue(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: Hf,
      classes: Yf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: _e,
      dt: uo,
      handleSelect: n
    };
  }
});
_s.render = jf;
const Mt = _s;
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
var nn, Yi = {};
function Wf(e) {
  return e === void 0 && (e = {}), Xo({}, Yi, e);
}
function qr(e) {
  return aa() ? new Promise((r) => {
    qr.close();
    var n = Re(Wf(e));
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
  Yi = e;
};
qr.resetDefaultOptions = function() {
  Yi = {};
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
} = ne("app-bar");
function Zf(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: q(e.rootStyles)
    },
    [B(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [B(
        "div",
        {
          class: c(e.n("left"))
        },
        [j(e.$slots, "left"), e.titlePosition === "left" ? (g(), T(
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
      ), e.titlePosition === "center" ? (g(), T(
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
      )) : ee("v-if", !0), B(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (g(), T(
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
var xs = re({
  name: "VarAppBar",
  props: qf,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(), t = k(), o = () => {
      a.value = n.left ? 0 : void 0, t.value = n.right ? 0 : void 0;
    }, l = z(() => {
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
const ya = xs;
ie(ya);
var mk = ya;
function Cl(e, r, n, a, t, o, l) {
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
        Cl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Cl(o, a, t, l, i, "throw", s);
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
var Jf = "background-image", Qf = "lazy-loading", _f = "lazy-error", Sl = "lazy-attempt", xf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Zo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Hn = [], xt = [], eu = sf(100), Ke = {
  loading: Zo,
  error: Zo,
  attempt: 3,
  throttleWait: 300,
  events: xf
}, Fi = Di(It, Ke.throttleWait);
function po(e, r) {
  e._lazy.arg === Jf ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function ec(e) {
  e._lazy.loading && po(e, e._lazy.loading), It();
}
function rc(e) {
  e._lazy.error && po(e, e._lazy.error), e._lazy.state = "error", Wi(e), It();
}
function ru(e, r) {
  po(e, r), e._lazy.state = "success", Wi(e), It();
}
function nc(e) {
  var r;
  xt.includes(e) || (xt.push(e), (r = Ke.events) == null || r.forEach((n) => {
    e.addEventListener(n, Fi, {
      passive: !0
    });
  }));
}
function ac() {
  xt.forEach((e) => {
    var r;
    (r = Ke.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Fi);
    });
  }), xt.length = 0;
}
function tc(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Qf)) != null ? n : Ke.loading,
    error: (a = e.getAttribute(_f)) != null ? a : Ke.error,
    attempt: e.getAttribute(Sl) ? Number(e.getAttribute(Sl)) : Ke.attempt
  };
  e._lazy = Ko({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), po(e, Zo), C(Ke.filter, e._lazy);
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
function ji(e) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = mo(function* (e) {
    yield Dr(), df(e) && nu(e);
  }), Jo.apply(this, arguments);
}
function It() {
  Hn.forEach((e) => ji(e));
}
function ic(e) {
  return Qo.apply(this, arguments);
}
function Qo() {
  return Qo = mo(function* (e) {
    !Hn.includes(e) && Hn.push(e), vf(e).forEach(nc), yield ji(e);
  }), Qo.apply(this, arguments);
}
function Wi(e) {
  Jt(Hn, e), Hn.length === 0 && ac();
}
function lc(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function au(e, r) {
  return _o.apply(this, arguments);
}
function _o() {
  return _o = mo(function* (e, r) {
    tc(e, r), yield ic(e);
  }), _o.apply(this, arguments);
}
function sc(e, r) {
  return xo.apply(this, arguments);
}
function xo() {
  return xo = mo(function* (e, r) {
    if (!lc(e, r)) {
      Hn.includes(e) && (yield ji(e));
      return;
    }
    yield au(e, r);
  }), xo.apply(this, arguments);
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
  Ke.events = r ?? Ke.events, Ke.loading = n ?? Ke.loading, Ke.error = a ?? Ke.error, Ke.attempt = t ?? Ke.attempt, Ke.throttleWait = o ?? Ke.throttleWait, Ke.filter = l;
}
var tu = {
  mounted: au,
  unmounted: Wi,
  updated: sc,
  install(e, r) {
    uc(r), Fi = Di(It, Ke.throttleWait), e.directive("lazy", this);
  }
}, pk = tu;
const ba = tu;
function dc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ou = (e) => ["mini", "small", "normal", "large"].includes(e);
function iu(e) {
  return ou(e) || nr(e) || Fe(e);
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
} = ne("avatar"), mc = ["src", "alt", "lazy-loading", "lazy-error"], pc = ["src", "alt"];
function hc(e, r) {
  var n = Ae("lazy");
  return g(), T(
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
    [e.src ? (g(), T(
      Ie,
      {
        key: 0
      },
      [e.lazy ? Te((g(), T("img", {
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
      }, null, 46, mc)), [[n, e.src]]) : (g(), T("img", {
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
    )) : (g(), T(
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
var lu = re({
  name: "VarAvatar",
  directives: {
    Lazy: ba
  },
  props: vc,
  setup(e) {
    var r = k(null), n = k(null), a = k(1), t = () => {
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
const wa = lu;
ie(wa);
var hk = wa, gc = {
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
} = ne("avatar-group");
function wc(e, r) {
  return g(), T(
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
var su = re({
  name: "VarAvatarGroup",
  props: gc,
  setup(e) {
    var r = z(() => e.offset == null ? {} : {
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
const Ca = su;
ie(Ca);
var gk = Ca;
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
} = ne("loading"), Tc = (e) => (gn(""), e = e(), yn(), e), Pc = /* @__PURE__ */ Tc(() => /* @__PURE__ */ B(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ B("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), Oc = [Pc];
function Vc(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [j(e.$slots, "default"), e.loading ? (g(), T(
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
    )) : ee("v-if", !0), e.isShow ? (g(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (g(), T(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [B(
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
      )) : ee("v-if", !0), (g(!0), T(
        Ie,
        null,
        Ye(e.loadingTypeDict, (n, a) => (g(), T(
          Ie,
          {
            key: a
          },
          [e.type === a ? (g(), T(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(g(!0), T(
              Ie,
              null,
              Ye(n, (t) => (g(), T(
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
      )), e.$slots.description || e.description ? (g(), T(
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
var uu = re({
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
    }, t = z(() => C(n.default) ? e.loading : !0);
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
var yk = cn, Mc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Ic,
  classes: Bc
} = ne("hover-overlay");
function Ec(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var du = re({
  name: "VarHoverOverlay",
  props: Mc,
  setup() {
    return {
      n: Ic,
      classes: Bc
    };
  }
});
du.render = Ec;
const wr = du;
ie(wr);
function Xr() {
  var e = k(!1), r = (n) => {
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
    return n[Vs(t)] = o, n;
  }, {}) : {};
}
function Dc(e) {
  var {
    value: r
  } = e._hover, n = Nc(e);
  Object.keys(r).forEach((a) => {
    var t = Vs(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function Gi(e, r) {
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
  Ac(e), Gi(e, e._hover.rawStyle);
}
function cu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, na(e)) {
    e(this._hover.hovering);
    return;
  }
  Gi(this, e);
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
  pu(e, r), Lc(e, r) && Gi(e, r.value);
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
function yu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Uc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Hc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Yc = {
  type: {
    type: String,
    validator: yu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Hc
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
  loadingColor: ei({}, xe(on, "color"), {
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
} = ne("button"), qc = ["type", "disabled"];
function Xc(e, r) {
  var n = se("var-loading"), a = se("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return Te((g(), T("button", {
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
  }, [e.loading || e.pending ? (g(), Ce(n, {
    key: 0,
    class: c(e.n("loading")),
    "var-button-cover": "",
    color: e.loadingColor,
    type: e.loadingType,
    size: e.loadingSize,
    radius: e.loadingRadius
  }, null, 8, ["class", "color", "type", "size", "radius"])) : ee("v-if", !0), B(
    "div",
    {
      class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  ), x(a, {
    hovering: e.hovering
  }, null, 8, ["hovering"])], 46, qc)), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var wu = re({
  name: "VarButton",
  components: {
    VarLoading: cn,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: qe,
    Hover: Ar
  },
  props: Yc,
  setup(e) {
    var r = k(!1), {
      buttonGroup: n
    } = jc(), {
      hovering: a,
      handleHovering: t
    } = Xr(), o = z(() => {
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
} = ne("back-top");
function Qc(e, r) {
  var n = se("var-icon"), a = se("var-button");
  return g(), Ce(Jr, {
    to: "body",
    disabled: e.disabled
  }, [B(
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
    [j(e.$slots, "default", {}, () => [x(a, {
      elevation: e.elevation,
      type: "primary",
      round: "",
      "var-back-top-cover": ""
    }, {
      default: ce(() => [x(n, {
        name: "chevron-up"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["elevation"])])],
    16
    /* FULL_PROPS */
  )], 8, ["disabled"]);
}
var Cu = re({
  name: "VarBackTop",
  components: {
    VarButton: vr,
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: Kc,
  setup(e) {
    var r = k(!1), n = k(null), a = k(!0), t, o = (d) => {
      C(e.onClick, d);
      var v = Ai(t);
      ga(t, {
        left: v,
        duration: e.duration,
        animation: Ms
      });
    }, l = Di(() => {
      r.value = ha(t) >= Le(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Bs(e.target, "BackTop") : vn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Ct(() => {
      i(), s(), a.value = !1;
    }), hn(s), fo(u), {
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
const Sa = Cu;
ie(Sa);
var Sk = Sa;
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
} = ne("badge");
function am(e, r) {
  var n = se("var-icon");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "default"), x(Ue, {
      name: e.n("$-badge-fade"),
      persisted: ""
    }, {
      default: ce(() => [Te(B(
        "span",
        De({
          class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [e.icon ? (g(), Ce(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-badge-cover": "",
          name: e.icon
        }, null, 8, ["class", "name"])) : ee("v-if", !0), j(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (g(), T(
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
var Su = re({
  name: "VarBadge",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: em,
  setup(e) {
    var r = z(() => {
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
const Yn = Su;
ie(Yn);
var kk = Yn, tm = {
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
  n: im,
  classes: lm
} = ne("bottom-navigation"), {
  n: ho
} = ne("bottom-navigation-item"), kl = ho("--right-half-space"), $l = ho("--left-half-space"), Tl = ho("--right-space"), sm = {
  type: "primary"
};
function um(e, r) {
  var n = se("var-button");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (g(), Ce(n, De({
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
    }, 16, ["class", "onClick"])) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var $u = re({
  name: "VarBottomNavigation",
  components: {
    VarButton: vr
  },
  props: tm,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(null), t = z(() => e.active), o = z(() => e.activeColor), l = z(() => e.inactiveColor), i = k({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = om(), v = () => {
      s.value === 0 || f() || m() || y();
    }, f = () => u.find((p) => {
      var {
        name: $
      } = p;
      return t.value === $.value;
    }), m = () => u.find((p) => {
      var {
        index: $
      } = p;
      return t.value === $.value;
    }), y = () => {
      nr(t.value) && (t.value < 0 ? C(e["onUpdate:active"], 0) : t.value > s.value - 1 && C(e["onUpdate:active"], s.value - 1));
    }, b = (p) => {
      t.value !== p && (e.onBeforeChange ? h(p) : w(p));
    }, h = (p) => {
      var $ = jt(C(e.onBeforeChange, p));
      Promise.all($).then((H) => {
        H.every(Boolean) && w(p);
      });
    }, w = (p) => {
      C(e["onUpdate:active"], p), C(e.onChange, p);
    }, O = () => {
      var p = M();
      p.forEach(($) => {
        $.classList.remove(kl, $l, Tl);
      });
    }, P = (p) => {
      var $ = M(), H = $.length, D = p % 2 === 0;
      $.forEach((Y, X) => {
        S(D, Y, X, H);
      });
    }, S = (p, $, H, D) => {
      var Y = H === D - 1;
      if (!p && Y) {
        $.classList.add(Tl);
        return;
      }
      var X = H === D / 2 - 1, A = H === D / 2;
      X ? $.classList.add(kl) : A && $.classList.add($l);
    }, M = () => Array.from(a.value.querySelectorAll("." + ho())), V = () => {
      C(e.onFabClick);
    }, E = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(E), ue(() => s.value, v), ue(() => e.fabProps, (p) => {
      i.value = ri({}, sm, p);
    }, {
      immediate: !0,
      deep: !0
    }), or(() => {
      n.fab && P(s.value);
    }), $t(() => {
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
const ka = $u;
ie(ka);
var $k = ka, dm = {
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
} = ne("bottom-navigation-item"), mm = {
  type: "danger",
  dot: !0
};
function pm(e, r) {
  var n = se("var-icon"), a = se("var-badge"), t = Ae("ripple");
  return Te((g(), T(
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
    [e.icon && !e.$slots.icon ? (g(), Ce(n, {
      key: 0,
      name: e.icon,
      namespace: e.namespace,
      class: c(e.n("icon")),
      "var-bottom-navigation-item-cover": ""
    }, null, 8, ["name", "namespace", "class"])) : ee("v-if", !0), j(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (g(), Ce(a, De({
      key: 1
    }, e.badgeProps, {
      class: e.n("badge"),
      "var-bottom-navigation-item-cover": ""
    }), null, 16, ["class"])) : ee("v-if", !0), B(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (g(), T(
        Ie,
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
var Tu = re({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Yn,
    VarIcon: Ne
  },
  directives: {
    Ripple: qe
  },
  props: dm,
  setup(e) {
    var r = z(() => e.name), n = z(() => e.badge), a = k({}), {
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
      var m, y = (m = r.value) != null ? m : t.value;
      C(e.onClick, y), C(o.onToggle, y);
    };
    return l(d), ue(() => n.value, (m) => {
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
const $a = Tu;
ie($a);
var Tk = $a, hm = {
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
} = ne("breadcrumb");
function Cm(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [B(
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
      return [B(
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
var Ou = re({
  name: "VarBreadcrumb",
  props: hm,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = ym(), t = z(() => r.value === n.length.value - 1), o = z(() => n.separator.value), l = (i) => {
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
const Ta = Ou;
ie(Ta);
var Pk = Ta, Sm = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: km
} = ne("breadcrumbs");
function $m(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Vu = re({
  name: "VarBreadcrumbs",
  props: Sm,
  setup(e) {
    var r = z(() => e.separator), {
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
const Pa = Vu;
ie(Pa);
var Ok = Pa;
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
  n: Mm,
  classes: Im
} = ne("button-group");
function Bm(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Mu = re({
  name: "VarButtonGroup",
  props: Vm,
  setup(e) {
    var {
      bindButtons: r
    } = Fc(), n = {
      elevation: z(() => e.elevation),
      type: z(() => e.type),
      size: z(() => e.size),
      color: z(() => e.color),
      textColor: z(() => e.textColor),
      mode: z(() => e.mode)
    };
    return r(n), {
      n: Mm,
      classes: Im,
      formatElevation: pr
    };
  }
});
Mu.render = Bm;
const Oa = Mu;
ie(Oa);
var Vk = Oa;
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
function Pl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ol(e) {
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
  n: Dm,
  classes: Am
} = ne("card"), zm = 500, Lm = ["src", "alt"];
function Rm(e, r) {
  var n = se("var-icon"), a = se("var-button"), t = Ae("ripple");
  return Te((g(), T(
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
    [B(
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
      [j(e.$slots, "image", {}, () => [e.src ? (g(), T("img", {
        key: 0,
        class: c(e.n("image")),
        style: q({
          objectFit: e.fit,
          height: e.toSizeUnit(e.imageHeight),
          width: e.toSizeUnit(e.imageWidth)
        }),
        src: e.src,
        alt: e.alt
      }, null, 14, Lm)) : ee("v-if", !0)]), B(
        "div",
        {
          class: c(e.n("container"))
        },
        [j(e.$slots, "title", {}, () => [e.title ? (g(), T(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          le(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (g(), T(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          le(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (g(), T(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          le(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (g(), T(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [j(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (g(), T(
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
      ), e.showFloatingButtons ? (g(), T(
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
        [j(e.$slots, "close-button", {}, () => [x(a, {
          "var-card-cover": "",
          round: "",
          class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
          onClick: Tr(e.close, ["stop"])
        }, {
          default: ce(() => [x(n, {
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
    ), B(
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
var Iu = re({
  name: "VarCard",
  directives: {
    Ripple: qe
  },
  components: {
    VarIcon: Ne,
    VarButton: vr
  },
  props: Nm,
  setup(e) {
    var r = k(null), n = k(null), a = k("auto"), t = k("auto"), o = k("100%"), l = k("100%"), i = k("auto"), s = k("auto"), u = k(void 0), d = k("hidden"), v = k("0px"), f = k("0"), m = z(() => e.layout === "row"), y = k(!1), b = k(!1), {
      zIndex: h
    } = Vt(() => e.floating, 1);
    co(() => e.floating, () => !m.value);
    var w = "auto", O = "auto", P = null, S = k(null), M = /* @__PURE__ */ function() {
      var $ = Ol(function* () {
        clearTimeout(S.value), clearTimeout(P), S.value = null, S.value = setTimeout(/* @__PURE__ */ Ol(function* () {
          var {
            width: H,
            height: D,
            left: Y,
            top: X
          } = Je(r.value);
          a.value = we(H), t.value = we(D), o.value = a.value, l.value = t.value, i.value = we(X), s.value = we(Y), u.value = "fixed", w = i.value, O = s.value, y.value = !0, yield Dr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? zm : 0);
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), V = () => {
      clearTimeout(P), clearTimeout(S.value), S.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = O, v.value = "0px", f.value = "0", y.value = !1, P = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", O = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, E = () => {
      C(e["onUpdate:floating"], !1);
    }, p = ($) => {
      C(e.onClick, $);
    };
    return ue(() => e.floating, ($) => {
      m.value || ze(() => {
        $ ? M() : V();
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
      zIndex: h,
      isRow: m,
      close: E,
      showFloatingButtons: y,
      floated: b,
      formatElevation: pr,
      handleClick: p
    };
  }
});
Iu.render = Rm;
const Va = Iu;
ie(Va);
var Mk = Va, Um = {
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
  n: Hm,
  classes: Ym
} = ne("cell");
function Fm(e, r) {
  var n = se("var-icon"), a = Ae("ripple");
  return Te((g(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "icon", {}, () => [e.icon ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [x(n, {
        name: e.icon
      }, null, 8, ["name"])],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), B(
      "div",
      {
        class: c(e.n("content"))
      },
      [j(e.$slots, "default", {}, () => [e.title ? (g(), T(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        le(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (g(), T(
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
    ), e.$slots.extra ? (g(), T(
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
var Bu = re({
  name: "VarCell",
  components: {
    VarIcon: Ne
  },
  directives: {
    Ripple: qe
  },
  props: Um,
  setup(e) {
    var r = z(() => e.borderOffset == null ? {} : {
      "--cell-border-left": we(e.borderOffset),
      "--cell-border-right": we(e.borderOffset)
    }), n = (a) => {
      C(e.onClick, a);
    };
    return {
      n: Hm,
      classes: Ym,
      toSizeUnit: we,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Bu.render = Fm;
const Fn = Bu;
ie(Fn);
var Ik = Fn, jm = {
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
} = ne("form-details"), Gm = {
  key: 0
}, qm = {
  key: 0
};
function Xm(e, r) {
  return g(), Ce(Ue, {
    name: e.n()
  }, {
    default: ce(() => [e.errorMessage || e.extraMessage || e.$slots["extra-message"] ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.n())
      },
      [B(
        "div",
        {
          class: c(e.n("error-message"))
        },
        [x(Ue, {
          name: e.n("message")
        }, {
          default: ce(() => [e.errorMessage ? (g(), T(
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
      ), B(
        "div",
        {
          class: c(e.n("extra-message"))
        },
        [x(Ue, {
          name: e.n("message")
        }, {
          default: ce(() => [j(e.$slots, "extra-message", {}, () => [e.extraMessage ? (g(), T(
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
var Eu = re({
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
var Du = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Du), a = ea(), t = n ? (o) => {
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
} = ne("checkbox");
function ep(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("hover"), l = Ae("ripple");
  return g(), T(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: c(e.n())
      },
      [Te((g(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-marked",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]) : j(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          name: "checkbox-blank-outline",
          size: e.iconSize,
          "var-checkbox-cover": ""
        }, null, 8, ["class", "size"])]), x(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, e.handleHovering, "desktop"], [l, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), B(
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
    ), x(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var Au = re({
  name: "VarCheckbox",
  directives: {
    Ripple: qe,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  props: Km,
  setup(e) {
    var r = k(!1), n = z(() => r.value === e.checkedValue), a = z(() => e.checkedValue), t = k(!1), {
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
      resetValidation: y
    } = Or(), b = (p) => {
      ze(() => {
        var {
          validateTrigger: $,
          rules: H,
          modelValue: D
        } = e;
        f($, p, H, D);
      });
    }, h = (p) => {
      r.value = p;
      var {
        checkedValue: $,
        onChange: H
      } = e;
      C(e["onUpdate:modelValue"], r.value), C(H, r.value), b("onChange"), p === $ ? o == null || o.onChecked($) : o == null || o.onUnchecked($);
    }, w = (p) => {
      var {
        disabled: $,
        readonly: H,
        checkedValue: D,
        uncheckedValue: Y,
        onClick: X
      } = e;
      if (!(u != null && u.disabled.value || $) && (C(X, p), !(u != null && u.readonly.value || H))) {
        t.value = !0;
        var A = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && A || h(n.value ? Y : D);
      }
    }, O = (p) => {
      var {
        checkedValue: $,
        uncheckedValue: H
      } = e;
      r.value = p.includes($) ? $ : H;
    }, P = () => {
      t.value = !1;
    }, S = () => {
      C(e["onUpdate:modelValue"], e.uncheckedValue), y();
    }, M = (p) => {
      var {
        checkedValue: $,
        uncheckedValue: H
      } = e, D = ![$, H].includes(p);
      D && (p = n.value ? H : $), h(p);
    }, V = () => m(e.rules, e.modelValue);
    ue(() => e.modelValue, (p) => {
      r.value = p;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: V,
      resetValidation: y,
      reset: S,
      resetWithAnimation: P
    };
    return C(l, E), C(d, E), {
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
      handleClick: w,
      toggle: M,
      reset: S,
      validate: V,
      resetValidation: y
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
} = ne("checkbox-group");
function op(e, r) {
  var n = se("var-form-details");
  return g(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), x(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var zu = re({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: ar
  },
  props: np,
  setup(e) {
    var r = z(() => e.max), n = z(() => e.modelValue.length), {
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
    } = Or(), v = z(() => i.value), f = (E) => {
      ze(() => {
        var {
          validateTrigger: p,
          rules: $,
          modelValue: H
        } = e;
        s(p, E, $, H);
      });
    }, m = (E) => {
      C(e["onUpdate:modelValue"], E), C(e.onChange, E), f("onChange");
    }, y = (E) => {
      var {
        modelValue: p
      } = e;
      p.includes(E) || m([...p, E]);
    }, b = (E) => {
      var {
        modelValue: p
      } = e;
      p.includes(E) && m(p.filter(($) => $ !== E));
    }, h = () => t.forEach((E) => {
      var {
        sync: p
      } = E;
      return p(e.modelValue);
    }), w = () => {
      t.forEach((E) => E.resetWithAnimation());
    }, O = () => {
      var E = t.map(($) => {
        var {
          checkedValue: H
        } = $;
        return H.value;
      }), p = ul(E);
      return w(), C(e["onUpdate:modelValue"], p), p;
    }, P = () => {
      var E = t.filter(($) => {
        var {
          checked: H
        } = $;
        return !H.value;
      }).map(($) => {
        var {
          checkedValue: H
        } = $;
        return H.value;
      }), p = ul(E);
      return w(), C(e["onUpdate:modelValue"], p), p;
    }, S = () => {
      C(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    ue(() => e.modelValue, h, {
      deep: !0
    }), ue(() => a.value, h);
    var V = {
      max: r,
      checkedCount: n,
      onChecked: y,
      onUnchecked: b,
      validate: M,
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
      validate: M,
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
} = ne("chip");
function dp(e, r) {
  var n = se("var-icon");
  return g(), Ce(Ue, {
    name: e.n("$-fade")
  }, {
    default: ce(() => [B(
      "span",
      De({
        class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [j(e.$slots, "left"), B(
        "span",
        {
          class: c(e.n("text-" + e.size))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      ), j(e.$slots, "right"), e.closable ? (g(), T(
        "span",
        {
          key: 0,
          class: c(e.n("--close")),
          onClick: r[0] || (r[0] = function() {
            return e.handleClose && e.handleClose(...arguments);
          })
        },
        [x(n, {
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
var Lu = re({
  name: "VarChip",
  components: {
    VarIcon: Ne
  },
  inheritAttrs: !1,
  props: sp,
  setup(e) {
    var r = z(() => {
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
    }), n = z(() => {
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
  n: zt,
  classes: gp
} = ne("col");
function yp(e, r) {
  return g(), T(
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
var Uu = re({
  name: "VarCol",
  props: mp,
  setup(e) {
    var r = k({
      left: 0,
      right: 0
    }), n = z(() => R(e.span)), a = z(() => R(e.offset)), {
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
    return ue([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), C(o, l), {
      n: zt,
      classes: gp,
      padding: r,
      toNumber: R,
      toSizeUnit: we,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: Qt
    };
  }
});
Uu.render = yp;
const Ia = Uu;
ie(Ia);
var Ak = Ia, Hu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function bp() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Hu);
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
} = ne("collapse");
function Sp(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Yu = re({
  name: "VarCollapse",
  props: wp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = bp(), t = z(() => e.modelValue), o = z(() => e.offset), l = z(() => e.divider), i = z(() => e.elevation), s = () => !e.accordion && !Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ve(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, h) => s() ? h ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((w) => w !== b) : null, d = (b, h) => {
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
    return a(y), ue(() => r.value, () => ze().then(m)), ue(() => e.modelValue, () => ze().then(m)), {
      n: Cp,
      divider: l
    };
  }
});
Yu.render = Sp;
const Ba = Yu;
ie(Ba);
var zk = Ba;
function kp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ir(Hu);
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
} = ne("collapse-item");
function Op(e, r) {
  var n = se("var-icon");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: q("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("shadow"), e.formatElevation(e.elevation, 2)))
      },
      null,
      2
      /* CLASS */
    ), B(
      "div",
      {
        class: c(e.n("header")),
        onClick: r[0] || (r[0] = (a) => e.toggle())
      },
      [B(
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
      ), B(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [j(e.$slots, "icon", {}, () => [x(n, {
          name: e.icon,
          transition: 250,
          class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
        }, null, 8, ["name", "class"])])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Te(B(
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
      [B(
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
var Fu = re({
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
    } = kp(), t = !0, o = k(null), l = k(!1), i = k(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = z(() => e.name), y = (M, V) => {
      s.value === void 0 || M && Ve(s.value) || V === i.value || (i.value = V, b(!0));
    }, b = (M) => {
      e.disabled || M || f(e.name || r.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: M
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = M + "px", t && vo(() => {
            t && P();
          });
        });
      }));
    }, w = () => {
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
    }, P = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, S = {
      index: r,
      name: m,
      init: y
    };
    return a(S), ue(i, (M) => {
      M ? h() : O();
    }), {
      n: Tp,
      start: w,
      classes: Pp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: b,
      contentEl: o,
      transitionend: P,
      formatElevation: pr
    };
  }
});
Fu.render = Op;
const Ea = Fu;
ie(Ea);
var Lk = Ea, Vp = {
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
  n: Mp
} = ne("countdown"), ai = 1e3, ti = 60 * ai, oi = 60 * ti, Vl = 24 * oi;
function Ip(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", Tt(so(e.timeData)), () => [$e(
      le(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var ju = re({
  name: "VarCountdown",
  props: Vp,
  setup(e) {
    var r = k(""), n = k({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (y, b) => {
      var h = Object.values(b), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach((S, M) => {
        y.includes(S) ? y = y.replace(S, kn("" + h[M], 2, "0")) : h[M + 1] += h[M] * O[M];
      }), y.includes("S")) {
        var P = kn("" + h[h.length - 1], 3, "0");
        y.includes("SSS") ? y = y.replace("SSS", P) : y.includes("SS") ? y = y.replace("SS", P.slice(0, 2)) : y = y.replace("S", P.slice(0, 1));
      }
      return y;
    }, u = (y) => {
      var b = Math.floor(y / Vl), h = Math.floor(y % Vl / oi), w = Math.floor(y % oi / ti), O = Math.floor(y % ti / ai), P = Math.floor(y % ai), S = {
        days: b,
        hours: h,
        minutes: w,
        seconds: O,
        milliseconds: P
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
      t && (o = br(d));
    }, v = function(y) {
      y === void 0 && (y = !1), !(t && !y) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, pl(o);
    }, m = () => {
      a = 0, t = !1, pl(o), d();
    };
    return ue(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), hn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), xn(() => {
      i = t, f();
    }), St(f), {
      showTime: r,
      timeData: n,
      n: Mp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
ju.render = Ip;
const Na = ju;
ie(Na);
var Rk = Na;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var An = 9e15, bn = 1e9, ii = "0123456789abcdef", eo = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ro = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", li = {
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
}, Wu, jr, be = !0, go = "[DecimalError] ", mn = go + "Invalid argument: ", Gu = go + "Precision limit exceeded", qu = go + "crypto unavailable", Xu = "[object Decimal]", tr = Math.floor, Ze = Math.pow, Bp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ep = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Np = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ku = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Nr = 1e7, ge = 7, Dp = 9007199254740991, Ap = eo.length - 1, si = ro.length - 1, Z = { toStringTag: Xu };
Z.absoluteValue = Z.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), me(e);
};
Z.ceil = function() {
  return me(new this.constructor(this), this.e + 1, 2);
};
Z.clampedTo = Z.clamp = function(e, r) {
  var n, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(mn + r);
  return n = a.cmp(e), n < 0 ? e : a.cmp(r) > 0 ? r : new t(a);
};
Z.comparedTo = Z.cmp = function(e) {
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
Z.cosine = Z.cos = function() {
  var e, r, n = this, a = n.constructor;
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + ge, a.rounding = 1, n = zp(a, xu(a, n)), a.precision = e, a.rounding = r, me(jr == 2 || jr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
Z.cubeRoot = Z.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (be = !1, o = d.s * Ze(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = rr(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Ze(n, 1 / 3), e = tr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
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
  return be = !0, me(a, e, v.rounding, r);
};
Z.decimalPlaces = Z.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - tr(this.e / ge)) * ge, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
Z.dividedBy = Z.div = function(e) {
  return Ee(this, new this.constructor(e));
};
Z.dividedToIntegerBy = Z.divToInt = function(e) {
  var r = this, n = r.constructor;
  return me(Ee(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
Z.equals = Z.eq = function(e) {
  return this.cmp(e) === 0;
};
Z.floor = function() {
  return me(new this.constructor(this), this.e + 1, 3);
};
Z.greaterThan = Z.gt = function(e) {
  return this.cmp(e) > 0;
};
Z.greaterThanOrEqualTo = Z.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
Z.hyperbolicCosine = Z.cosh = function() {
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
Z.hyperbolicSine = Z.sinh = function() {
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
Z.hyperbolicTangent = Z.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Ee(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
Z.inverseCosine = Z.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Er(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Er(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Er(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
Z.inverseHyperbolicCosine = Z.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, be = !1, n = n.times(n).minus(1).sqrt().plus(n), be = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
Z.inverseHyperbolicSine = Z.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, be = !1, n = n.times(n).plus(1).sqrt().plus(n), be = !0, a.precision = e, a.rounding = r, n.ln());
};
Z.inverseHyperbolicTangent = Z.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? me(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
Z.inverseSine = Z.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Er(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
Z.inverseTangent = Z.atan = function() {
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
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / ge + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (be = !1, r = Math.ceil(i / ge), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), be = !0, me(l, d.precision = v, d.rounding = f, !0);
};
Z.isFinite = function() {
  return !!this.d;
};
Z.isInteger = Z.isInt = function() {
  return !!this.d && tr(this.e / ge) > this.d.length - 2;
};
Z.isNaN = function() {
  return !this.s;
};
Z.isNegative = Z.isNeg = function() {
  return this.s < 0;
};
Z.isPositive = Z.isPos = function() {
  return this.s > 0;
};
Z.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
Z.lessThan = Z.lt = function(e) {
  return this.cmp(e) < 0;
};
Z.lessThanOrEqualTo = Z.lte = function(e) {
  return this.cmp(e) < 1;
};
Z.logarithm = Z.log = function(e) {
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
  if (be = !1, i = v + m, l = ln(u, i), a = r ? no(d, i + 10) : ln(e, i), s = Ee(l, a, i, 1), Da(s.d, t = v, f))
    do
      if (i += 10, l = ln(u, i), a = r ? no(d, i + 10) : ln(e, i), s = Ee(l, a, i, 1), !o) {
        +rr(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = me(s, v + 1, 0));
        break;
      }
    while (Da(s.d, t += 10, f));
  return be = !0, me(s, v, f);
};
Z.minus = Z.sub = function(e) {
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
    return be ? me(e, i, s) : e;
  }
  if (n = tr(e.e / ge), d = tr(m.e / ge), u = u.slice(), o = d - n, o) {
    for (v = o < 0, v ? (r = u, o = -o, l = f.length) : (r = f, n = d, l = u.length), a = Math.max(Math.ceil(i / ge), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; )
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
  return u[0] ? (e.d = u, e.e = yo(u, n), be ? me(e, i, s) : e) : new y(s === 3 ? -0 : 0);
};
Z.modulo = Z.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? me(new a(n), a.precision, a.rounding) : (be = !1, a.modulo == 9 ? (r = Ee(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ee(n, e, 0, a.modulo, 1), r = r.times(e), be = !0, n.minus(r));
};
Z.naturalExponential = Z.exp = function() {
  return ui(this);
};
Z.naturalLogarithm = Z.ln = function() {
  return ln(this);
};
Z.negated = Z.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, me(e);
};
Z.plus = Z.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), be ? me(e, i, s) : e;
  if (o = tr(v.e / ge), a = tr(e.e / ge), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / ge), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Nr | 0, u[t] %= Nr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = yo(u, a), be ? me(e, i, s) : e;
};
Z.precision = Z.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(mn + e);
  return n.d ? (r = Zu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
Z.round = function() {
  var e = this, r = e.constructor;
  return me(new r(e), e.e + 1, r.rounding);
};
Z.sine = Z.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + ge, a.rounding = 1, n = Rp(a, xu(a, n)), a.precision = e, a.rounding = r, me(jr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
Z.squareRoot = Z.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (be = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = rr(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = tr((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
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
  return be = !0, me(a, s, d.rounding, e);
};
Z.tangent = Z.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, me(jr == 2 || jr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
Z.times = Z.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (n = tr(d.e / ge) + tr(e.e / ge), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + r, o[t--] = i % Nr | 0, r = i / Nr | 0;
    o[t] = (o[t] + r) % Nr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = yo(o, n), be ? me(e, v.precision, v.rounding) : e;
};
Z.toBinary = function(e, r) {
  return qi(this, 2, e, r);
};
Z.toDecimalPlaces = Z.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (mr(e, 0, bn), r === void 0 ? r = a.rounding : mr(r, 0, 8), me(n, e + n.e + 1, r));
};
Z.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Hr(a, !0) : (mr(e, 0, bn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = me(new t(a), e + 1, r), n = Hr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
Z.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Hr(t) : (mr(e, 0, bn), r === void 0 ? r = o.rounding : mr(r, 0, 8), a = me(new o(t), e + t.e + 1, r), n = Hr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
Z.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, y = m.d, b = m.constructor;
  if (!y)
    return new b(m);
  if (u = n = new b(1), a = s = new b(0), r = new b(a), o = r.e = Zu(y) - m.e - 1, l = o % ge, r.d[0] = Ze(10, l < 0 ? ge + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(mn + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (be = !1, i = new b(rr(y)), d = b.precision, b.precision = o = y.length * ge * 2; v = Ee(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], b.precision = d, be = !0, f;
};
Z.toHexadecimal = Z.toHex = function(e, r) {
  return qi(this, 16, e, r);
};
Z.toNearest = function(e, r) {
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
  return e.d[0] ? (be = !1, n = Ee(n, e, 0, r, 1).times(e), be = !0, me(n)) : (e.s = n.s, n = e), n;
};
Z.toNumber = function() {
  return +this;
};
Z.toOctal = function(e, r) {
  return qi(this, 8, e, r);
};
Z.toPower = Z.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ze(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return me(i, a, o);
  if (r = tr(e.e / ge), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= Dp)
    return t = Ju(s, i, n, a), e.s < 0 ? new s(1).div(t) : me(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Ze(+i, u), r = n == 0 || !isFinite(n) ? tr(u * (Math.log("0." + rr(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (be = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = ui(e.times(ln(i, a + n)), a), t.d && (t = me(t, a + 5, 1), Da(t.d, a, o) && (r = a + 10, t = me(ui(e.times(ln(i, r + n)), r), r + 5, 1), +rr(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = me(t, a + 1, 0)))), t.s = l, be = !0, s.rounding = o, me(t, a, o));
};
Z.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Hr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (mr(e, 1, bn), r === void 0 ? r = t.rounding : mr(r, 0, 8), a = me(new t(a), e, r), n = Hr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
Z.toSignificantDigits = Z.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (mr(e, 1, bn), r === void 0 ? r = a.rounding : mr(r, 0, 8)), me(new a(n), e, r);
};
Z.toString = function() {
  var e = this, r = e.constructor, n = Hr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
Z.truncated = Z.trunc = function() {
  return me(new this.constructor(this), this.e + 1, 1);
};
Z.valueOf = Z.toJSON = function() {
  var e = this, r = e.constructor, n = Hr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function rr(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = ge - a.length, n && (o += xr(n)), o += a;
    l = e[r], a = l + "", n = ge - a.length, n && (o += xr(n));
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
function Da(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += ge, t = 0) : (t = Math.ceil((r + 1) / ge), r %= ge), o = Ze(10, ge - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ze(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ze(10, r - 3) - 1, l;
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
function zp(e, r) {
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
    var u, d, v, f, m, y, b, h, w, O, P, S, M, V, E, p, $, H, D, Y, X = a.constructor, A = a.s == t.s ? 1 : -1, L = a.d, I = t.d;
    if (!L || !L[0] || !I || !I[0])
      return new X(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (L ? I && L[0] == I[0] : !I) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          L && L[0] == 0 || !I ? A * 0 : A / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Nr, m = ge, d = tr(a.e / m) - tr(t.e / m)), D = I.length, $ = L.length, w = new X(A), O = w.d = [], v = 0; I[v] == (L[v] || 0); v++)
      ;
    if (I[v] > (L[v] || 0) && d--, o == null ? (V = o = X.precision, l = X.rounding) : i ? V = o + (a.e - t.e) + 1 : V = o, V < 0)
      O.push(1), y = !0;
    else {
      if (V = V / m + 2 | 0, v = 0, D == 1) {
        for (f = 0, I = I[0], V++; (v < $ || f) && V--; v++)
          E = f * s + (L[v] || 0), O[v] = E / I | 0, f = E % I | 0;
        y = f || v < $;
      } else {
        for (f = s / (I[0] + 1) | 0, f > 1 && (I = e(I, f, s), L = e(L, f, s), D = I.length, $ = L.length), p = D, P = L.slice(0, D), S = P.length; S < D; )
          P[S++] = 0;
        Y = I.slice(), Y.unshift(0), H = I[0], I[1] >= s / 2 && ++H;
        do
          f = 0, u = r(I, P, D, S), u < 0 ? (M = P[0], D != S && (M = M * s + (P[1] || 0)), f = M / H | 0, f > 1 ? (f >= s && (f = s - 1), b = e(I, f, s), h = b.length, S = P.length, u = r(b, P, h, S), u == 1 && (f--, n(b, D < h ? Y : I, h, s))) : (f == 0 && (u = f = 1), b = I.slice()), h = b.length, h < S && b.unshift(0), n(P, b, S, s), u == -1 && (S = P.length, u = r(I, P, D, S), u < 1 && (f++, n(P, D < S ? Y : I, S, s))), S = P.length) : u === 0 && (f++, P = [0]), O[v++] = f, u && P[0] ? P[S++] = L[p] || 0 : (P = [L[p]], S = 1);
        while ((p++ < $ || P[0] !== void 0) && V--);
        y = P[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      w.e = d, Wu = y;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, me(w, i ? o + w.e + 1 : o, l, y);
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
        o += ge, l = r, d = v[f = 0], s = d / Ze(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ge), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ge, l = o - ge + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= ge, l = o - ge + t, s = l < 0 ? 0 : d / Ze(10, t - l - 1) % 10 | 0;
      }
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ze(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Ze(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Ze(10, (ge - r % ge) % ge), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ze(10, ge - o), v[f] = l > 0 ? (d / Ze(10, t - l) % Ze(10, l) | 0) * i : 0), u)
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
function Hr(e, r, n) {
  if (!e.isFinite())
    return _u(e);
  var a, t = e.e, o = rr(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + xr(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + xr(-t - 1) + o, n && (a = n - l) > 0 && (o += xr(a))) : t >= l ? (o += xr(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + xr(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += xr(a))), o;
}
function yo(e, r) {
  var n = e[0];
  for (r *= ge; n >= 10; n /= 10)
    r++;
  return r;
}
function no(e, r, n) {
  if (r > Ap)
    throw be = !0, n && (e.precision = n), Error(Gu);
  return me(new e(eo), r, 1, !0);
}
function Er(e, r, n) {
  if (r > si)
    throw Error(Gu);
  return me(new e(ro), r, n, !0);
}
function Zu(e) {
  var r = e.length - 1, n = r * ge + 1;
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
  var t, o = new e(1), l = Math.ceil(a / ge + 4);
  for (be = !1; ; ) {
    if (n % 2 && (o = o.times(r), Il(o.d, l) && (t = !0)), n = tr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Il(r.d, l);
  }
  return be = !0, o;
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
function ui(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, y = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (be = !1, s = y) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = me(o.times(e), s, 1), n = n.times(++d), i = l.plus(Ee(o, n, s, 1)), rr(i.d).slice(0, s) === rr(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = me(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && Da(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return me(l, f.precision = y, m, be = !0);
      else
        return f.precision = y, l;
    }
    l = i;
  }
}
function ln(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, y = 10, b = e, h = b.d, w = b.constructor, O = w.rounding, P = w.precision;
  if (b.s < 0 || !h || !h[0] || !b.e && h[0] == 1 && h.length == 1)
    return new w(h && !h[0] ? -1 / 0 : b.s != 1 ? NaN : h ? 0 : b);
  if (r == null ? (be = !1, d = P) : d = r, w.precision = d += y, n = rr(h), a = n.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      b = b.times(e), n = rr(b.d), a = n.charAt(0), m++;
    o = b.e, a > 1 ? (b = new w("0." + n), o++) : b = new w(a + "." + n.slice(1));
  } else
    return u = no(w, d + 2, P).times(o + ""), b = ln(new w(a + "." + n.slice(1)), d - y).plus(u), w.precision = P, r == null ? me(b, P, O, be = !0) : b;
  for (v = b, s = l = b = Ee(b.minus(1), b.plus(1), d, 1), f = me(b.times(b), d, 1), t = 3; ; ) {
    if (l = me(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), rr(u.d).slice(0, d) === rr(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(no(w, d + 2, P).times(o + ""))), s = Ee(s, new w(m), d, 1), r == null)
        if (Da(s.d, d - y, O, i))
          w.precision = d += y, u = l = b = Ee(v.minus(1), v.plus(1), d, 1), f = me(b.times(b), d, 1), t = i = 1;
        else
          return me(s, w.precision = P, O, be = !0);
      else
        return w.precision = P, s;
    s = u, t += 2;
  }
}
function _u(e) {
  return String(e.s * e.s / 0);
}
function di(e, r) {
  var n, a, t;
  for ((n = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (a = r.search(/e/i)) > 0 ? (n < 0 && (n = a), n += +r.slice(a + 1), r = r.substring(0, a)) : n < 0 && (n = r.length), a = 0; r.charCodeAt(a) === 48; a++)
    ;
  for (t = r.length; r.charCodeAt(t - 1) === 48; --t)
    ;
  if (r = r.slice(a, t), r) {
    if (t -= a, e.e = n = n - a - 1, e.d = [], a = (n + 1) % ge, n < 0 && (a += ge), a < t) {
      for (a && e.d.push(+r.slice(0, a)), t -= ge; a < t; )
        e.d.push(+r.slice(a, a += ge));
      r = r.slice(a), a = ge - r.length;
    } else
      a -= t;
    for (; a--; )
      r += "0";
    e.d.push(+r), be && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Lp(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Ku.test(r))
      return di(e, r);
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
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Ju(a, new a(n), o, o * 2)), u = Wt(r, n, Nr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = yo(u, d), e.d = u, be = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ze(2, s) : sn.pow(2, s))), be = !0, e);
}
function Rp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Gn(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / bo(5, n)), r = Gn(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Gn(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / ge);
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
function bo(e, r) {
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
function qi(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, y = n !== void 0;
  if (y ? (mr(n, 1, bn), a === void 0 ? a = m.rounding : mr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = _u(e);
  else {
    for (d = Hr(e), l = d.indexOf("."), y ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Wt(Hr(f), 10, t), f.e = f.d.length), v = Wt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = y ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, n, a, 0, t), v = e.d, o = e.e, u = Wu), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ii.charAt(v[l]);
      if (y) {
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
function Il(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function Up(e) {
  return new this(e).abs();
}
function Hp(e) {
  return new this(e).acos();
}
function Yp(e) {
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
  return me(e = new this(e), e.e + 1, 2);
}
function Jp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Qp(e) {
  if (!e || typeof e != "object")
    throw Error(go + "Object expected");
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
    if (n = o[r], t && (this[n] = li[n]), (a = e[n]) !== void 0)
      if (tr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(mn + n + ": " + a);
  if (n = "crypto", t && (this[n] = li[n]), (a = e[n]) !== void 0)
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
    if (u.constructor = t, Bl(o)) {
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
      return di(u, o.toString());
    } else if (s !== "string")
      throw Error(mn + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Ku.test(o) ? di(u, o) : Lp(u, o);
  }
  if (t.prototype = Z, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Qp, t.clone = ed, t.isDecimal = Bl, t.abs = Up, t.acos = Hp, t.acosh = Yp, t.add = Fp, t.asin = jp, t.asinh = Wp, t.atan = Gp, t.atanh = qp, t.atan2 = Xp, t.cbrt = Kp, t.ceil = Zp, t.clamp = Jp, t.cos = _p, t.cosh = xp, t.div = eh, t.exp = rh, t.floor = nh, t.hypot = ah, t.ln = th, t.log = oh, t.log10 = lh, t.log2 = ih, t.max = sh, t.min = uh, t.mod = dh, t.mul = vh, t.pow = fh, t.random = ch, t.round = mh, t.sign = ph, t.sin = hh, t.sinh = gh, t.sqrt = yh, t.sub = bh, t.sum = wh, t.tan = Ch, t.tanh = Sh, t.trunc = kh, e === void 0 && (e = {}), e && e.defaults !== !0)
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
  return me(e = new this(e), e.e + 1, 3);
}
function ah() {
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
function Bl(e) {
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
  if (e === void 0 ? e = this.precision : mr(e, 1, bn), a = Math.ceil(e / ge), this.crypto)
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
  for (a = i[--o], e %= ge, a && e && (t = Ze(10, ge - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    n = 0, i = [0];
  else {
    for (n = -1; i[0] === 0; n -= ge)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < ge && (n -= ge - a);
  }
  return l.e = n, l.d = i, l;
}
function mh(e) {
  return me(e = new this(e), e.e + 1, this.rounding);
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
  for (be = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return be = !0, me(n, this.precision, this.rounding);
}
function Ch(e) {
  return new this(e).tan();
}
function Sh(e) {
  return new this(e).tanh();
}
function kh(e) {
  return me(e = new this(e), e.e + 1, 1);
}
Z[Symbol.for("nodejs.util.inspect.custom")] = Z.toString;
Z[Symbol.toStringTag] = "Decimal";
var sn = Z.constructor = ed(li);
eo = new sn(eo);
ro = new sn(ro);
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
} = ne("counter"), El = 100, Nl = 600, Oh = ["inputmode", "readonly", "disabled"];
function Vh(e, r) {
  var n = se("var-icon"), a = se("var-button"), t = se("var-form-details");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      De({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [x(a, {
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
        default: ce(() => [x(n, {
          name: "minus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]), Te(B("input", {
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
      }, null, 46, Oh), [[ef, e.inputValue]]), x(a, {
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
        default: ce(() => [x(n, {
          name: "plus"
        })]),
        _: 1
        /* STABLE */
      }, 8, ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"])],
      16
      /* FULL_PROPS */
    ), x(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var rd = re({
  name: "VarCounter",
  components: {
    VarButton: vr,
    VarIcon: Ne,
    VarFormDetails: ar
  },
  directives: {
    Ripple: qe
  },
  inheritAttrs: !1,
  props: $h,
  setup(e) {
    var r = k(""), {
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
    } = a ?? {}, d, v, f, m, y = () => l(e.rules, e.modelValue), b = (I) => {
      ze(() => {
        var {
          validateTrigger: N,
          rules: ae,
          modelValue: F
        } = e;
        o(N, I, ae, F);
      });
    }, h = () => {
      var {
        min: I
      } = e;
      C(e["onUpdate:modelValue"], I != null ? R(I) : 0), i();
    }, w = {
      reset: h,
      validate: y,
      resetValidation: i
    }, O = z(() => {
      var {
        max: I,
        modelValue: N
      } = e;
      return I != null && R(N) >= R(I);
    }), P = z(() => {
      var {
        min: I,
        modelValue: N
      } = e;
      return I != null && R(N) <= R(I);
    }), S = (I) => {
      var {
        decimalLength: N,
        max: ae,
        min: F
      } = e, W = R(I);
      return ae != null && W > R(ae) && (W = R(ae)), F != null && W < R(F) && (W = R(F)), I = String(W), N != null && (I = W.toFixed(R(N))), I;
    }, M = (I) => {
      var {
        lazyChange: N,
        onBeforeChange: ae
      } = e, {
        value: F
      } = I.target, W = S(F);
      N ? C(ae, R(W), L) : A(W), b("onInputChange");
    }, V = () => {
      var {
        disabled: I,
        readonly: N,
        disableDecrement: ae,
        decrementButton: F,
        lazyChange: W,
        step: _,
        modelValue: K,
        onDecrement: J,
        onBeforeChange: Q
      } = e;
      if (!(u != null && u.value || s != null && s.value || I || N || ae || !F) && !P.value) {
        var G = new sn(R(K)).minus(new sn(R(_))).toString(), te = S(G), pe = R(te);
        C(J, pe), W ? C(Q, pe, L) : (A(te), b("onDecrement"));
      }
    }, E = () => {
      var {
        disabled: I,
        readonly: N,
        disableIncrement: ae,
        incrementButton: F,
        lazyChange: W,
        step: _,
        modelValue: K,
        onIncrement: J,
        onBeforeChange: Q
      } = e;
      if (!(u != null && u.value || s != null && s.value || I || N || ae || !F) && !O.value) {
        var G = new sn(R(K)).plus(new sn(R(_))).toString(), te = S(G), pe = R(te);
        C(J, pe), W ? C(Q, pe, L) : (A(te), b("onIncrement"));
      }
    }, p = () => {
      var {
        press: I,
        lazyChange: N
      } = e;
      !I || N || (m = window.setTimeout(() => {
        X();
      }, Nl));
    }, $ = () => {
      var {
        press: I,
        lazyChange: N
      } = e;
      !I || N || (f = window.setTimeout(() => {
        Y();
      }, Nl));
    }, H = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, D = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, Y = () => {
      d = window.setTimeout(() => {
        E(), Y();
      }, El);
    }, X = () => {
      v = window.setTimeout(() => {
        V(), X();
      }, El);
    }, A = (I) => {
      r.value = I;
      var N = R(I);
      C(e["onUpdate:modelValue"], N);
    }, L = (I) => {
      A(S(String(I))), b("onLazyChange");
    };
    return C(n, w), ue(() => e.modelValue, (I) => {
      A(S(String(I))), C(e.onChange, R(I));
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
      validate: y,
      reset: h,
      resetValidation: i,
      handleChange: M,
      decrement: V,
      increment: E,
      pressDecrement: p,
      pressIncrement: $,
      releaseDecrement: H,
      releaseIncrement: D,
      toSizeUnit: we,
      toNumber: R
    };
  }
});
rd.render = Vh;
const Aa = rd;
ie(Aa);
var Uk = Aa, nd = 60, ad = nd * 60, td = ad * 24, Mh = td * 7, qn = 1e3, Bo = nd * qn, Dl = ad * qn, Ih = td * qn, Bh = Mh * qn, Xi = "millisecond", zn = "second", Ln = "minute", Rn = "hour", en = "day", Gt = "week", Br = "month", od = "quarter", rn = "year", Un = "date", Eh = "YYYY-MM-DDTHH:mm:ssZ", Al = "Invalid Date", Nh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Dh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Ah = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var vi = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, zh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + vi(t, 2, "0") + ":" + vi(o, 2, "0");
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
    w: Gt,
    d: en,
    D: Un,
    h: Rn,
    m: Ln,
    s: zn,
    ms: Xi,
    Q: od
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, Hh = function(r) {
  return r === void 0;
};
const Yh = {
  s: vi,
  z: zh,
  m: Lh,
  a: Rh,
  p: Uh,
  u: Hh
};
var da = "en", Sn = {};
Sn[da] = Ah;
var Ki = function(r) {
  return r instanceof wo;
}, ao = function e(r, n, a) {
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
  if (Ki(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new wo(a);
}, Fh = function(r, n) {
  return fe(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Be = Yh;
Be.l = ao;
Be.i = Ki;
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
}, wo = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = ao(n.locale, null, !0), this.parse(n);
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
    return this.$d.toString() !== Al;
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
      case Gt: {
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
    var o, l = Be.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[en] = i + "Date", o[Un] = i + "Date", o[Br] = i + "Month", o[rn] = i + "FullYear", o[Rn] = i + "Hours", o[Ln] = i + "Minutes", o[zn] = i + "Seconds", o[Xi] = i + "Milliseconds", o)[l], u = l === en ? this.$D + (t - this.$W) : t;
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
    if (i === Gt)
      return s(7);
    var u = (l = {}, l[Ln] = Bo, l[Rn] = Dl, l[zn] = qn, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Be.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Al;
    var l = a || Eh, i = Be.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, y = function(P, S, M, V) {
      return P && (P[S] || P(t, l)) || M[S].slice(0, V);
    }, b = function(P) {
      return Be.s(s % 12 || 12, P, "0");
    }, h = m || function(O, P, S) {
      var M = O < 12 ? "AM" : "PM";
      return S ? M.toLowerCase() : M;
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
    return l.replace(Dh, function(O, P) {
      return P || w[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Be.p(t), s = fe(a), u = (s.utcOffset() - this.utcOffset()) * Bo, d = this - s, v = Be.m(this, s);
    return v = (l = {}, l[rn] = v / 12, l[Br] = v, l[od] = v / 3, l[Gt] = (d - u) / Bh, l[en] = (d - u) / Ih, l[Rn] = d / Dl, l[Ln] = d / Bo, l[zn] = d / qn, l)[i] || d, o ? v : Be.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Br).$D;
  }, r.$locale = function() {
    return Sn[this.$L];
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
}(), id = wo.prototype;
fe.prototype = id;
[["$ms", Xi], ["$s", zn], ["$m", Ln], ["$H", Rn], ["$W", en], ["$M", Br], ["$y", rn], ["$D", Un]].forEach(function(e) {
  id[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
fe.extend = function(e, r) {
  return e.$i || (e(r, wo, fe), e.$i = !0), fe;
};
fe.locale = ao;
fe.isDayjs = Ki;
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
} = ne("picker-header");
function Xh(e, r) {
  var n = se("var-icon"), a = se("var-button");
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [x(a, {
      round: "",
      text: "",
      style: {
        filter: "opacity(0.54)"
      },
      disabled: e.disabled.left,
      onClick: r[0] || (r[0] = (t) => e.checkDate("prev"))
    }, {
      default: ce(() => [x(n, {
        name: "chevron-left"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"]), B(
      "div",
      {
        class: c(e.n("value")),
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [x(Ue, {
        name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: ce(() => [(g(), T(
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
    ), x(a, {
      round: "",
      text: "",
      style: {
        filter: "opacity(0.54)"
      },
      disabled: e.disabled.right,
      onClick: r[2] || (r[2] = (t) => e.checkDate("next"))
    }, {
      default: ce(() => [x(n, {
        name: "chevron-right"
      })]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])],
    2
    /* CLASS */
  );
}
var ud = re({
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
    } = r, a = k(!1), t = k(0), o = z(() => {
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
    return ue(() => e.date, () => {
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
fe.extend(ld);
fe.extend(sd);
var {
  n: Lt,
  classes: Kh
} = ne("month-picker"), {
  n: Rt
} = ne("date-picker");
function Zh(e, r) {
  var n = se("panel-header"), a = se("var-button");
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.n("content"))
      },
      [x(n, {
        ref: "headerEl",
        type: "month",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickYear,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), x(Ue, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: ce(() => [(g(), T("ul", {
          key: e.panelKey
        }, [(g(!0), T(
          Ie,
          null,
          Ye(e.MONTH_LIST, (t) => (g(), T("li", {
            key: t.index
          }, [x(a, De({
            type: "primary",
            "var-month-picker-cover": "",
            ripple: !1,
            elevation: e.componentProps.buttonElevation
          }, fi({}, e.buttonProps(t.index)), {
            onClick: (o) => e.chooseMonth(t, o)
          }), {
            default: ce(() => [$e(
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
var vd = re({
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
    } = r, [a, t] = e.current.split("-"), o = k(!1), l = k(0), i = k(null), s = Re({
      left: !1,
      right: !1
    }), u = z(() => e.choose.chooseYear === e.preview.previewYear), d = z(() => e.preview.previewYear === a), v = (O) => {
      var P, S;
      return (P = (S = _e.value.datePickerMonthDict) == null ? void 0 : S[O].abbr) != null ? P : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: P
        },
        componentProps: {
          min: S,
          max: M
        }
      } = e, V = !0, E = !0, p = P + "-" + O;
      return M && (V = fe(p).isSameOrBefore(fe(M), "month")), S && (E = fe(p).isSameOrAfter(fe(S), "month")), V && E;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: P,
          chooseDays: S,
          chooseRangeMonth: M
        },
        componentProps: {
          type: V,
          range: E
        }
      } = e;
      if (E) {
        if (!M.length)
          return !1;
        var p = fe(O).isSameOrBefore(fe(M[1]), "month"), $ = fe(O).isSameOrAfter(fe(M[0]), "month");
        return p && $;
      }
      return V === "month" ? P.includes(O) : S.some((H) => H.includes(O));
    }, y = (O) => {
      var {
        choose: {
          chooseMonth: P
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: M,
          color: V,
          multiple: E,
          range: p
        }
      } = e, $ = S + "-" + O, H = () => p || E ? m($) : (P == null ? void 0 : P.index) === O && u.value, D = () => f(O) ? M ? !M($) : !1 : !0, Y = D(), X = () => Y ? !0 : p || E ? !m($) : !u.value || (P == null ? void 0 : P.index) !== O, A = () => d.value && t === O && e.componentProps.showCurrent ? (p || E || u.value) && Y ? !0 : p || E ? !m($) : u.value ? (P == null ? void 0 : P.index) !== t : !0 : !1, L = () => Y ? "" : A() ? V ?? "" : H() ? "" : Rt() + "-color-cover", I = L().startsWith(Rt());
      return {
        outline: A(),
        text: X(),
        color: X() ? "" : V,
        textColor: I ? "" : L(),
        [Rt() + "-color-cover"]: I,
        class: Kh(Lt("button"), [Y, Lt("button--disabled")]),
        disabled: Y
      };
    }, b = (O, P) => {
      var S = P.currentTarget;
      S.classList.contains(Lt("button--disabled")) || n("choose-month", O);
    }, h = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, w = (O) => {
      i.value.checkDate(O);
    };
    return ue(() => e.preview.previewYear, (O) => {
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
      n: Lt,
      nDate: Rt,
      pack: _e,
      MONTH_LIST: qt,
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
vd.render = Zh;
const Jh = vd;
var {
  n: zl,
  classes: Qh
} = ne("year-picker"), _h = ["onClick"];
function xh(e, r) {
  return g(), T(
    "ul",
    {
      class: c(e.n())
    },
    [(g(!0), T(
      Ie,
      null,
      Ye(e.yearList, (n) => (g(), T("li", {
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
var fd = re({
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
    } = r, a = z(() => {
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
    return or(() => {
      var o = document.querySelector("." + zl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: zl,
      classes: Qh,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
fd.render = xh;
const eg = fd;
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
  n: Dn,
  classes: rg
} = ne("day-picker"), {
  n: Ut
} = ne("date-picker");
function ng(e, r) {
  var n = se("panel-header"), a = se("var-button");
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.n("content"))
      },
      [x(n, {
        ref: "headerEl",
        type: "day",
        date: e.preview,
        disabled: e.panelBtnDisabled,
        onCheckPanel: e.clickMonth,
        onCheckDate: e.checkDate
      }, null, 8, ["date", "disabled", "onCheckPanel", "onCheckDate"]), x(Ue, {
        name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
      }, {
        default: ce(() => [(g(), T("div", {
          key: e.panelKey
        }, [B(
          "ul",
          {
            class: c(e.n("head"))
          },
          [(g(!0), T(
            Ie,
            null,
            Ye(e.sortWeekList, (t) => (g(), T(
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
        ), B(
          "ul",
          {
            class: c(e.n("body"))
          },
          [(g(!0), T(
            Ie,
            null,
            Ye(e.days, (t, o) => (g(), T("li", {
              key: o
            }, [x(a, De({
              type: "primary",
              "var-day-picker-cover": "",
              round: "",
              ripple: !1,
              elevation: e.componentProps.buttonElevation
            }, ci({}, e.buttonProps(t)), {
              onClick: (l) => e.chooseDay(t, l)
            }), {
              default: ce(() => [$e(
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
var cd = re({
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
    } = r, [a, t, o] = e.current.split("-"), l = k([]), i = k(!1), s = k(0), u = k(null), d = Re({
      left: !1,
      right: !1
    }), v = z(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = z(() => {
      var p;
      return e.choose.chooseYear === e.preview.previewYear && ((p = e.choose.chooseMonth) == null ? void 0 : p.index) === e.preview.previewMonth.index;
    }), m = z(() => {
      var p = sa.findIndex(($) => $.index === e.componentProps.firstDayOfWeek);
      return p === -1 || p === 0 ? sa : sa.slice(p).concat(sa.slice(0, p));
    }), y = (p) => {
      var $, H;
      return ($ = (H = _e.value.datePickerWeekDict) == null ? void 0 : H[p].abbr) != null ? $ : "";
    }, b = (p) => p > 0 ? p : "", h = () => {
      var {
        preview: {
          previewMonth: p,
          previewYear: $
        }
      } = e, H = fe($ + "-" + p.index).daysInMonth(), D = fe($ + "-" + p.index + "-01").day(), Y = m.value.findIndex((X) => X.index === "" + D);
      l.value = [...Array(Y).fill(-1), ...Array.from(Array(H + 1).keys())].filter((X) => X);
    }, w = () => {
      var {
        preview: {
          previewYear: p,
          previewMonth: $
        },
        componentProps: {
          max: H,
          min: D
        }
      } = e;
      if (H) {
        var Y = p + "-" + (R($.index) + 1);
        d.right = !fe(Y).isSameOrBefore(fe(H), "month");
      }
      if (D) {
        var X = p + "-" + (R($.index) - 1);
        d.left = !fe(X).isSameOrAfter(fe(D), "month");
      }
    }, O = (p) => {
      var {
        preview: {
          previewYear: $,
          previewMonth: H
        },
        componentProps: {
          min: D,
          max: Y
        }
      } = e, X = !0, A = !0, L = $ + "-" + H.index + "-" + p;
      return Y && (X = fe(L).isSameOrBefore(fe(Y), "day")), D && (A = fe(L).isSameOrAfter(fe(D), "day")), X && A;
    }, P = (p) => {
      var {
        choose: {
          chooseDays: $,
          chooseRangeDay: H
        },
        componentProps: {
          range: D
        }
      } = e;
      if (D) {
        if (!H.length)
          return !1;
        var Y = fe(p).isSameOrBefore(fe(H[1]), "day"), X = fe(p).isSameOrAfter(fe(H[0]), "day");
        return Y && X;
      }
      return $.includes(p);
    }, S = (p) => {
      if (p < 0)
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
          previewYear: H,
          previewMonth: D
        },
        componentProps: {
          allowedDates: Y,
          color: X,
          multiple: A,
          range: L
        }
      } = e, I = H + "-" + D.index + "-" + p, N = () => L || A ? P(I) : R($) === p && f.value, ae = () => O(p) ? Y ? !Y(I) : !1 : !0, F = ae(), W = () => F ? !0 : L || A ? !P(I) : !f.value || R($) !== p, _ = () => v.value && R(o) === p && e.componentProps.showCurrent ? (L || A || f.value) && F ? !0 : L || A ? !P(I) : f.value ? $ !== o : !0 : !1, K = () => F ? "" : _() ? X ?? "" : N() ? "" : Ut() + "-color-cover", J = K().startsWith(Ut());
      return {
        text: W(),
        outline: _(),
        textColor: J ? "" : K(),
        [Ut() + "-color-cover"]: J,
        class: rg(Dn("button"), Dn("button--usable"), [F, Dn("button--disabled")]),
        disabled: F
      };
    }, M = (p) => {
      i.value = p === "prev", s.value += p === "prev" ? -1 : 1, n("check-preview", "month", p);
    }, V = (p, $) => {
      var H = $.currentTarget;
      H.classList.contains(Dn("button--disabled")) || n("choose-day", p);
    }, E = (p) => {
      u.value.checkDate(p);
    };
    return or(() => {
      h(), w();
    }), ue(() => e.preview, () => {
      h(), w();
    }), {
      n: Dn,
      nDate: Ut,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: E,
      filterDay: b,
      getDayAbbr: y,
      checkDate: M,
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
} = ne("date-picker");
function ig(e, r) {
  var n = se("year-picker-panel"), a = se("month-picker-panel"), t = se("day-picker-panel");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [B(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [B(
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
      ), B(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: r[1] || (r[1] = (o) => e.clickEl("date"))
        },
        [x(Ue, {
          name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
        }, {
          default: ce(() => {
            var o, l, i;
            return [e.type === "month" ? (g(), T("div", {
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
            )])])) : (g(), T("div", {
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
            )]) : j(e.$slots, "date", Tt(De({
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
    ), B(
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
      [x(Ue, {
        name: e.n() + "-panel-fade"
      }, {
        default: ce(() => [e.getPanelType === "year" ? (g(), Ce(n, {
          key: 0,
          "component-props": e.componentProps,
          preview: e.previewYear,
          onChooseYear: e.getChooseYear
        }, null, 8, ["component-props", "preview", "onChooseYear"])) : e.getPanelType === "month" ? (g(), Ce(a, {
          key: 1,
          ref: "monthPanelEl",
          current: e.currentDate,
          choose: e.getChoose,
          preview: e.getPreview,
          "click-year": () => e.clickEl("year"),
          "component-props": e.componentProps,
          onChooseMonth: e.getChooseMonth,
          onCheckPreview: e.checkPreview
        }, null, 8, ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"])) : e.getPanelType === "date" ? (g(), Ce(t, {
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
var md = re({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Jh,
    YearPickerPanel: eg,
    DayPickerPanel: ag
  },
  props: Gh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = fe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = qt.find((ve) => ve.index === i), u = k(!1), d = k(!1), v = k(!0), f = k(), m = k(), y = k(), b = k(s), h = k(l), w = k(!1), O = k([]), P = k([]), S = k([]), M = k([]), V = k(null), E = k(null), p = Re({
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
    }), $ = z(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: y.value,
      chooseMonths: O.value,
      chooseDays: P.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: M.value
    })), H = z(() => ({
      previewMonth: b.value,
      previewYear: h.value
    })), D = z(() => {
      var {
        multiple: ve,
        range: ke
      } = e;
      if (ke)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var ye = "";
      if (f.value) {
        var Pe, Oe;
        ye = (Pe = (Oe = _e.value.datePickerMonthDict) == null ? void 0 : Oe[f.value.index].name) != null ? Pe : "";
      }
      return ve ? "" + O.value.length + _e.value.datePickerSelected : ye;
    }), Y = z(() => {
      var ve, ke, ye, Pe, {
        multiple: Oe,
        range: He
      } = e;
      if (He) {
        var sr = M.value.map((Vo) => fe(Vo).format("YYYY-MM-DD"));
        return sr.length ? sr[0] + " ~ " + sr[1] : "";
      }
      if (Oe)
        return "" + P.value.length + _e.value.datePickerSelected;
      if (!m.value || !f.value || !y.value)
        return "";
      var Cr = fe(m.value + "-" + f.value.index + "-" + y.value).day(), Nn = sa.find((Vo) => Vo.index === "" + Cr), il = (ve = (ke = _e.value.datePickerWeekDict) == null ? void 0 : ke[Nn.index].name) != null ? ve : "", qv = (ye = (Pe = _e.value.datePickerMonthDict) == null ? void 0 : Pe[f.value.index].name) != null ? ye : "", Xv = kn(y.value, 2, "0");
      return _e.value.lang === "zh-CN" ? f.value.index + "-" + Xv + " " + il.slice(0, 3) : il.slice(0, 3) + ", " + qv.slice(0, 3) + " " + y.value;
    }), X = z(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), A = z(() => !e.touchable || ["", "year"].includes(X.value)), L = z(() => {
      var ve, ke, ye, Pe, Oe = fe(m.value + "-" + ((ve = f.value) == null ? void 0 : ve.index) + "-" + y.value).day(), He = y.value ? kn(y.value, 2, "0") : "";
      return {
        week: "" + Oe,
        year: (ke = m.value) != null ? ke : "",
        month: (ye = (Pe = f.value) == null ? void 0 : Pe.index) != null ? ye : "",
        date: He
      };
    }), I = z(() => $.value.chooseRangeDay.map((ve) => fe(ve).format("YYYY-MM-DD"))), N = z(() => m.value === h.value), ae = z(() => {
      var ve;
      return ((ve = f.value) == null ? void 0 : ve.index) === b.value.index;
    }), F = (ve) => {
      ve === "year" ? u.value = !0 : ve === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, W = (ve) => {
      if (!A.value) {
        var {
          clientX: ke,
          clientY: ye
        } = ve.touches[0];
        r = ke, n = ye;
      }
    }, _ = (ve, ke) => ve >= ke && ve > 20 ? "x" : "y", K = (ve) => {
      if (!A.value) {
        var {
          clientX: ke,
          clientY: ye
        } = ve.touches[0], Pe = ke - r, Oe = ye - n;
        t = _(Math.abs(Pe), Math.abs(Oe)), a = Pe > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(A.value || t !== "x")) {
        var ve = X.value === "month" ? V : E;
        vo(() => {
          ve.value.forwardRef(a), We();
        });
      }
    }, Q = (ve, ke) => {
      var ye = ke === "month" ? S : M;
      if (ye.value = v.value ? [ve, ve] : [ye.value[0], ve], v.value = !v.value, v.value) {
        var Pe = fe(ye.value[0]).isAfter(ye.value[1]), Oe = Pe ? [ye.value[1], ye.value[0]] : [...ye.value];
        C(e["onUpdate:modelValue"], Oe), C(e.onChange, Oe);
      }
    }, G = (ve, ke) => {
      var ye = ke === "month" ? O : P, Pe = ke === "month" ? "YYYY-MM" : "YYYY-MM-DD", Oe = ye.value.map((sr) => fe(sr).format(Pe)), He = Oe.findIndex((sr) => sr === ve);
      He === -1 ? Oe.push(ve) : Oe.splice(He, 1), C(e["onUpdate:modelValue"], Oe), C(e.onChange, Oe);
    }, te = (ve, ke) => !m.value || !f.value ? !1 : N.value ? ve === "month" ? ke.index < f.value.index : ae.value ? ke < R(y.value) : f.value.index > b.value.index : m.value > h.value, pe = (ve) => {
      var {
        readonly: ke,
        range: ye,
        multiple: Pe,
        onChange: Oe,
        "onUpdate:modelValue": He
      } = e;
      if (!(ve < 0 || ke)) {
        w.value = te("day", ve);
        var sr = h.value + "-" + b.value.index + "-" + ve, Cr = fe(sr).format("YYYY-MM-DD");
        ye ? Q(Cr, "day") : Pe ? G(Cr, "day") : (C(He, Cr), C(Oe, Cr));
      }
    }, Se = (ve) => {
      var {
        type: ke,
        readonly: ye,
        range: Pe,
        multiple: Oe,
        onChange: He,
        onPreview: sr,
        "onUpdate:modelValue": Cr
      } = e;
      if (w.value = te("month", ve), ke === "month" && !ye) {
        var Nn = h.value + "-" + ve.index;
        Pe ? Q(Nn, "month") : Oe ? G(Nn, "month") : (C(Cr, Nn), C(He, Nn));
      } else
        b.value = ve, C(sr, R(h.value), R(b.value.index));
      d.value = !1;
    }, oe = (ve) => {
      h.value = "" + ve, u.value = !1, d.value = !0, C(e.onPreview, R(h.value), R(b.value.index));
    }, de = (ve, ke) => {
      var ye = ke === "prev" ? -1 : 1;
      if (ve === "year")
        h.value = "" + (R(h.value) + ye);
      else {
        var Pe = R(b.value.index) + ye;
        Pe < 1 && (h.value = "" + (R(h.value) - 1), Pe = 12), Pe > 12 && (h.value = "" + (R(h.value) + 1), Pe = 1), b.value = qt.find((Oe) => R(Oe.index) === Pe);
      }
      C(e.onPreview, R(h.value), R(b.value.index));
    }, he = () => (e.multiple || e.range) && !Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ve(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Me = (ve) => Ve(ve) ? !1 : ve === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Qe = (ve, ke) => {
      var ye = ke === "month" ? S : M, Pe = ke === "month" ? "YYYY-MM" : "YYYY-MM-D", Oe = ve.map((Cr) => fe(Cr).format(Pe)).slice(0, 2), He = ye.value.some((Cr) => Me(Cr));
      if (!He) {
        ye.value = Oe;
        var sr = fe(ye.value[0]).isAfter(ye.value[1]);
        ye.value.length === 2 && sr && (ye.value = [ye.value[1], ye.value[0]]);
      }
    }, Xe = (ve, ke) => {
      var ye = ke === "month" ? O : P, Pe = ke === "month" ? "YYYY-MM" : "YYYY-MM-D", Oe = Array.from(new Set(ve.map((He) => fe(He).format(Pe))));
      ye.value = Oe.filter((He) => He !== "Invalid Date");
    }, je = (ve) => {
      var ke = fe(ve).format("YYYY-MM-D");
      if (!Me(ke)) {
        var [ye, Pe, Oe] = ke.split("-"), He = qt.find((sr) => sr.index === Pe);
        f.value = He, m.value = ye, y.value = Oe, b.value = He, h.value = ye;
      }
    }, We = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return ue(() => e.modelValue, (ve) => {
      if (!(!he() || Me(ve) || !ve))
        if (e.range) {
          if (!Ve(ve))
            return;
          v.value = ve.length !== 1, Qe(ve, e.type);
        } else if (e.multiple) {
          if (!Ve(ve))
            return;
          Xe(ve, e.type);
        } else
          je(ve);
    }, {
      immediate: !0
    }), ue(X, We), {
      n: tg,
      classes: og,
      monthPanelEl: V,
      dayPanelEl: E,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: y,
      previewYear: h,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: D,
      getDateTitle: Y,
      getPanelType: X,
      getChoose: $,
      getPreview: H,
      componentProps: p,
      slotProps: L,
      formatRange: I,
      clickEl: F,
      handleTouchstart: W,
      handleTouchmove: K,
      handleTouchend: J,
      getChooseDay: pe,
      getChooseMonth: Se,
      getChooseYear: oe,
      checkPreview: de,
      formatElevation: pr
    };
  }
});
md.render = ig;
const za = md;
ie(za);
var Hk = za;
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
function lg(e) {
  return ["left", "center", "right"].includes(e);
}
var sg = mi({
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
  n: ug,
  classes: dg
} = ne("dialog");
function vg(e, r) {
  var n = se("var-button"), a = se("var-popup");
  return g(), Ce(a, {
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
    default: ce(() => [B(
      "div",
      De({
        class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
        style: pi({
          width: e.toSizeUnit(e.width)
        }, e.dialogStyle)
      }, e.$attrs),
      [B(
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
      ), B(
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
      ), B(
        "div",
        {
          class: c(e.n("actions"))
        },
        [e.cancelButton ? (g(), Ce(n, {
          key: 0,
          class: c(e.classes(e.n("button"), e.n("cancel-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.cancelButtonTextColor,
          color: e.cancelButtonColor,
          onClick: e.cancel
        }, {
          default: ce(() => [$e(
            le(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
            1
            /* TEXT */
          )]),
          _: 1
          /* STABLE */
        }, 8, ["class", "text-color", "color", "onClick"])) : ee("v-if", !0), e.confirmButton ? (g(), Ce(n, {
          key: 1,
          class: c(e.classes(e.n("button"), e.n("confirm-button"))),
          "var-dialog-cover": "",
          text: "",
          "text-color": e.confirmButtonTextColor,
          color: e.confirmButtonColor,
          onClick: e.confirm
        }, {
          default: ce(() => [$e(
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
var pd = re({
  name: "VarDialog",
  components: {
    VarPopup: Ur,
    VarButton: vr
  },
  inheritAttrs: !1,
  props: sg,
  setup(e) {
    var r = k(!1), n = k(!1), a = () => C(e["onUpdate:show"], !1), t = () => {
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
    return ue(() => e.show, (i) => {
      r.value = i;
    }, {
      immediate: !0
    }), ue(() => e.closeOnClickOverlay, (i) => {
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
      dt: uo,
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
const Bt = pd;
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
var an, oo = {};
function fg(e) {
  return e === void 0 && (e = {}), Fe(e) ? to({}, oo, {
    message: e
  }) : to({}, oo, e);
}
function Kr(e) {
  return aa() ? new Promise((r) => {
    Kr.close();
    var n = fg(e), a = Re(n);
    a.teleport = "body", an = a;
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
  oo = e;
};
Kr.resetDefaultOptions = function() {
  oo = {};
};
Kr.close = function() {
  if (an != null) {
    var e = an;
    an = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Kr.Component = Bt;
ie(Bt);
ie(Bt, Kr);
var Yk = Bt, cg = {
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
} = ne("divider");
function hg(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.withPresetInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [e.vertical ? ee("v-if", !0) : j(e.$slots, "default", {
      key: 0
    }, () => [e.description ? (g(), T(
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
var hd = re({
  name: "VarDivider",
  props: cg,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(!1), t = z(() => {
      var {
        vertical: i,
        inset: s
      } = e;
      return !i && s === !0;
    }), o = z(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e;
      if (Bi(i) || s)
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
    }), $t(() => {
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
const La = hd;
ie(La);
var Fk = La, gg = {
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
function Ll(e, r, n, a, t, o, l) {
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
  n: bg,
  classes: wg
} = ne("drag");
function Cg(e, r) {
  return g(), Ce(Jr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.teleportDisabled || e.teleport === !1
  }, [B(
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
var gd = re({
  name: "VarDrag",
  inheritAttrs: !1,
  props: gg,
  setup(e, r) {
    var {
      attrs: n
    } = r, a = k(null), t = k(0), o = k(0), l = Re({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }), i = k(!1), s = k(!1), u = k(!1), {
      touching: d,
      moveX: v,
      moveY: f,
      startTouch: m,
      moveTouch: y,
      endTouch: b,
      resetTouch: h
    } = zi(), {
      disabled: w
    } = oa(), O = null, P = (I) => {
      e.disabled || (O && window.clearTimeout(O), E(), m(I), u.value = !1);
    }, S = /* @__PURE__ */ function() {
      var I = yg(function* (N) {
        !d.value || e.disabled || (N.preventDefault(), s.value = !1, i.value = !0, u.value = !0, y(N), e.direction.includes("x") && (t.value += v.value), e.direction.includes("y") && (o.value += f.value), D());
      });
      return function(ae) {
        return I.apply(this, arguments);
      };
    }(), M = () => {
      e.disabled || (b(), s.value = !0, H(), O = window.setTimeout(() => {
        u.value = !1;
      }));
    }, V = (I) => {
      u.value || C(e.onClick, I);
    }, E = () => {
      var {
        left: I,
        top: N
      } = p();
      t.value = I, o.value = N;
    }, p = () => {
      var I = Je(a.value), N = Je(window), ae = I.top - N.top, F = N.bottom - I.bottom, W = I.left - N.left, _ = N.right - I.right, {
        width: K,
        height: J
      } = I, {
        width: Q,
        height: G
      } = N;
      return {
        top: ae,
        bottom: F,
        left: W,
        right: _,
        width: K,
        height: J,
        halfWidth: K / 2,
        halfHeight: J / 2,
        windowWidth: Q,
        windowHeight: G
      };
    }, $ = () => {
      var I = p(), N = l.left, ae = I.windowWidth - l.right - I.width, F = l.top, W = I.windowHeight - l.bottom - I.height;
      return {
        minX: N,
        minY: F,
        // fallback the drag element overflows boundary
        maxX: N < ae ? ae : N,
        maxY: F < W ? W : F
      };
    }, H = () => {
      if (e.attraction != null) {
        var {
          halfWidth: I,
          halfHeight: N,
          top: ae,
          bottom: F,
          left: W,
          right: _
        } = p(), {
          minX: K,
          minY: J,
          maxX: Q,
          maxY: G
        } = $(), te = W + I - l.left, pe = _ + I - l.right, Se = ae + N - l.top, oe = F + N - l.bottom, de = te <= pe, he = Se <= oe;
        e.attraction.includes("x") && (t.value = de ? K : Q), e.attraction.includes("y") && (o.value = he ? J : G);
      }
    }, D = () => {
      var {
        minX: I,
        minY: N,
        maxX: ae,
        maxY: F
      } = $();
      t.value = dn(t.value, I, ae), o.value = dn(o.value, N, F);
    }, Y = () => {
      var {
        top: I = 0,
        bottom: N = 0,
        left: ae = 0,
        right: F = 0
      } = e.boundary;
      l.top = Le(I), l.bottom = Le(N), l.left = Le(ae), l.right = Le(F);
    }, X = () => {
      var I, N = (I = n.style) != null ? I : {};
      return io({}, n, {
        style: io({}, N, {
          // when the drag element is dragged for the first time, the inset should be cleared to avoid affecting translateX and translateY.
          top: i.value ? 0 : N.top,
          left: i.value ? 0 : N.left,
          right: i.value ? "auto" : N.right,
          bottom: i.value ? "auto" : N.bottom,
          transform: i.value ? "translate(" + t.value + "px, " + o.value + "px)" : N.transform
        })
      });
    }, A = () => {
      i.value && (E(), D());
    }, L = () => {
      s.value = !1, i.value = !1, u.value = !1, t.value = 0, o.value = 0, h();
    };
    return ue(() => e.boundary, Y), Pt(A), or(() => {
      Y(), A();
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
      handleTouchend: M,
      handleClick: V,
      resize: A,
      reset: L
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
function Xt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return Sg[r];
  });
}
var Wr = "top", pn = "bottom", $n = "right", un = "left", Co = "auto", So = [Wr, pn, $n, un], ko = "start", Ra = "end", kg = "clippingParents", yd = "viewport", ia = "popper", $g = "reference", Rl = /* @__PURE__ */ So.reduce(function(e, r) {
  return e.concat([r + "-" + ko, r + "-" + Ra]);
}, []), bd = /* @__PURE__ */ [].concat(So, [Co]).reduce(function(e, r) {
  return e.concat([r, r + "-" + ko, r + "-" + Ra]);
}, []), Tg = "beforeRead", Pg = "read", Og = "afterRead", Vg = "beforeMain", Mg = "main", Ig = "afterMain", Bg = "beforeWrite", Eg = "write", Ng = "afterWrite", hi = [Tg, Pg, Og, Vg, Mg, Ig, Bg, Eg, Ng];
function Gr(e) {
  return e.split("-")[0];
}
var Dg = {
  start: "end",
  end: "start"
};
function Ul(e) {
  return e.replace(/start|end/g, function(r) {
    return Dg[r];
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
function Zi(e) {
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
var va = Math.max, Hl = Math.min, Kn = Math.round;
function gi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function wd() {
  return !/^((?!chrome|android).)*safari/i.test(gi());
}
function Zn(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Kn(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Kn(a.height) / e.offsetHeight || 1);
  var l = Tn(e) ? Mr(e) : window, i = l.visualViewport, s = !wd() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Ji(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Qi(e) {
  return Zn(wn(e)).left + Ji(e).scrollLeft;
}
function Ag(e, r) {
  var n = Mr(e), a = wn(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = wd();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Qi(e),
    y: s
  };
}
function zr(e) {
  return Mr(e).getComputedStyle(e);
}
function zg(e) {
  var r, n = wn(e), a = Ji(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = va(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = va(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Qi(e), s = -a.scrollTop;
  return zr(t || n).direction === "rtl" && (i += va(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Yr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function $o(e) {
  return Yr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Zi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    wn(e)
  );
}
function _i(e) {
  var r = zr(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function Cd(e) {
  return ["html", "body", "#document"].indexOf(Yr(e)) >= 0 ? e.ownerDocument.body : kr(e) && _i(e) ? e : Cd($o(e));
}
function fa(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = Cd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], _i(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(fa($o(l)))
  );
}
function Lg(e) {
  return ["table", "td", "th"].indexOf(Yr(e)) >= 0;
}
function Yl(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  zr(e).position === "fixed" ? null : e.offsetParent;
}
function Rg(e) {
  var r = /firefox/i.test(gi()), n = /Trident/i.test(gi());
  if (n && kr(e)) {
    var a = zr(e);
    if (a.position === "fixed")
      return null;
  }
  var t = $o(e);
  for (Zi(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Yr(t)) < 0; ) {
    var o = zr(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function xi(e) {
  for (var r = Mr(e), n = Yl(e); n && Lg(n) && zr(n).position === "static"; )
    n = Yl(n);
  return n && (Yr(n) === "html" || Yr(n) === "body" && zr(n).position === "static") ? r : n || Rg(e) || r;
}
function Ug(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Zi(n)) {
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
function Hg(e, r) {
  var n = Zn(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Fl(e, r, n) {
  return r === yd ? yi(Ag(e, n)) : Tn(r) ? Hg(r, n) : yi(zg(wn(e)));
}
function Yg(e) {
  var r = fa($o(e)), n = ["absolute", "fixed"].indexOf(zr(e).position) >= 0, a = n && kr(e) ? xi(e) : e;
  return Tn(a) ? r.filter(function(t) {
    return Tn(t) && Ug(t, a) && Yr(t) !== "body";
  }) : [];
}
function Fg(e, r, n, a) {
  var t = r === "clippingParents" ? Yg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Fl(e, u, a);
    return s.top = va(d.top, s.top), s.right = Hl(d.right, s.right), s.bottom = Hl(d.bottom, s.bottom), s.left = va(d.left, s.left), s;
  }, Fl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ua(e) {
  return e.split("-")[1];
}
function jg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Sd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Gr(a) : null, o = a ? Ua(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
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
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? kg : i, u = n.rootBoundary, d = u === void 0 ? yd : u, v = n.elementContext, f = v === void 0 ? ia : v, m = n.altBoundary, y = m === void 0 ? !1 : m, b = n.padding, h = b === void 0 ? 0 : b, w = Gg(typeof h != "number" ? h : qg(h, So)), O = f === ia ? $g : ia, P = e.rects.popper, S = e.elements[y ? O : f], M = Fg(Tn(S) ? S : S.contextElement || wn(e.elements.popper), s, d, l), V = Zn(e.elements.reference), E = Sd({
    reference: V,
    element: P,
    strategy: "absolute",
    placement: t
  }), p = yi(Object.assign({}, P, E)), $ = f === ia ? p : V, H = {
    top: M.top - $.top + w.top,
    bottom: $.bottom - M.bottom + w.bottom,
    left: M.left - $.left + w.left,
    right: $.right - M.right + w.right
  }, D = e.modifiersData.offset;
  if (f === ia && D) {
    var Y = D[t];
    Object.keys(H).forEach(function(X) {
      var A = [$n, pn].indexOf(X) >= 0 ? 1 : -1, L = [Wr, pn].indexOf(X) >= 0 ? "y" : "x";
      H[X] += Y[L] * A;
    });
  }
  return H;
}
function Xg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? bd : s, d = Ua(a), v = d ? i ? Rl : Rl.filter(function(y) {
    return Ua(y) === d;
  }) : So, f = v.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(y, b) {
    return y[b] = kd(e, {
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
function Kg(e) {
  if (Gr(e) === Co)
    return [];
  var r = Xt(e);
  return [Ul(e), r, Ul(r)];
}
function Zg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, y = m === void 0 ? !0 : m, b = n.allowedAutoPlacements, h = r.options.placement, w = Gr(h), O = w === h, P = s || (O || !y ? [Xt(h)] : Kg(h)), S = [h].concat(P).reduce(function(Q, G) {
      return Q.concat(Gr(G) === Co ? Xg(r, {
        placement: G,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: b
      }) : G);
    }, []), M = r.rects.reference, V = r.rects.popper, E = /* @__PURE__ */ new Map(), p = !0, $ = S[0], H = 0; H < S.length; H++) {
      var D = S[H], Y = Gr(D), X = Ua(D) === ko, A = [Wr, pn].indexOf(Y) >= 0, L = A ? "width" : "height", I = kd(r, {
        placement: D,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), N = A ? X ? $n : un : X ? pn : Wr;
      M[L] > V[L] && (N = Xt(N));
      var ae = Xt(N), F = [];
      if (o && F.push(I[Y] <= 0), i && F.push(I[N] <= 0, I[ae] <= 0), F.every(function(Q) {
        return Q;
      })) {
        $ = D, p = !1;
        break;
      }
      E.set(D, F);
    }
    if (p)
      for (var W = y ? 3 : 1, _ = function(G) {
        var te = S.find(function(pe) {
          var Se = E.get(pe);
          if (Se)
            return Se.slice(0, G).every(function(oe) {
              return oe;
            });
        });
        if (te)
          return $ = te, "break";
      }, K = W; K > 0; K--) {
        var J = _(K);
        if (J === "break")
          break;
      }
    r.placement !== $ && (r.modifiersData[a]._skip = !0, r.placement = $, r.reset = !0);
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
function jl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, y = l.y, b = y === void 0 ? 0 : y, h = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = h.x, b = h.y;
  var w = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), P = un, S = Wr, M = window;
  if (u) {
    var V = xi(n), E = "clientHeight", p = "clientWidth";
    if (V === Mr(n) && (V = wn(n), zr(V).position !== "static" && i === "absolute" && (E = "scrollHeight", p = "scrollWidth")), V = V, t === Wr || (t === un || t === $n) && o === Ra) {
      S = pn;
      var $ = v && V === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        V[E]
      );
      b -= $ - a.height, b *= s ? 1 : -1;
    }
    if (t === un || (t === Wr || t === pn) && o === Ra) {
      P = $n;
      var H = v && V === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        V[p]
      );
      m -= H - a.width, m *= s ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: i
  }, u && ey), Y = d === !0 ? ry({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = Y.x, b = Y.y, s) {
    var X;
    return Object.assign({}, D, (X = {}, X[S] = O ? "0" : "", X[P] = w ? "0" : "", X.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", X));
  }
  return Object.assign({}, D, (r = {}, r[S] = O ? b + "px" : "", r[P] = w ? m + "px" : "", r.transform = "", r));
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
    variation: Ua(r.placement),
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
  return e === Mr(e) || !kr(e) ? Ji(e) : ay(e);
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
  return (a || !a && !n) && ((Yr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  _i(o)) && (i = ty(r)), kr(r) ? (s = Zn(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = Qi(o))), {
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
  return hi.reduce(function(n, a) {
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
var Cn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', vy = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Wl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function fy(e) {
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
          hi.indexOf(r.phase) < 0 && console.error(_r(Cn, r.name, '"phase"', "either " + hi.join(", "), '"' + String(r.phase) + '"'));
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
var Gl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", py = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ql = {
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
function hy(e) {
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
        var O = typeof w == "function" ? w(d.options) : w;
        b(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: Tn(i) ? fa(i) : i.contextElement ? fa(i.contextElement) : [],
          popper: fa(s)
        };
        var P = uy(my([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = P.filter(function(D) {
          return D.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = cy([].concat(P, d.options.modifiers), function(D) {
            var Y = D.name;
            return Y;
          });
          if (fy(S), Gr(d.options.placement) === Co) {
            var M = d.orderedModifiers.find(function(D) {
              var Y = D.name;
              return Y === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var V = zr(s), E = V.marginTop, p = V.marginRight, $ = V.marginBottom, H = V.marginLeft;
          [E, p, $, H].some(function(D) {
            return parseFloat(D);
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
          var w = d.elements, O = w.reference, P = w.popper;
          if (!Xl(O, P)) {
            process.env.NODE_ENV !== "production" && console.error(Gl);
            return;
          }
          d.rects = {
            reference: iy(O, xi(P), d.options.strategy === "fixed"),
            popper: ly(P)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(D) {
            return d.modifiersData[D.name] = Object.assign({}, D.data);
          });
          for (var S = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(py);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var V = d.orderedModifiers[M], E = V.fn, p = V.options, $ = p === void 0 ? {} : p, H = V.name;
            typeof E == "function" && (d = E({
              state: d,
              options: $,
              name: H,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: dy(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Xl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Gl), m;
    m.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function y() {
      d.orderedModifiers.forEach(function(h) {
        var w = h.name, O = h.options, P = O === void 0 ? {} : O, S = h.effect;
        if (typeof S == "function") {
          var M = S({
            state: d,
            name: w,
            instance: m,
            options: P
          }), V = function() {
          };
          v.push(M || V);
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
function gy(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
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
    !kr(o) || !Yr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
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
      !kr(t) || !Yr(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
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
function Td(e) {
  var r = k(null), n = k(null), a = k({
    width: 0,
    height: 0
  }), t = Hs(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit($, H) {
      H ? (V(), C(e.onOpen)) : C(e.onClose);
    }
  }), {
    zIndex: o
  } = Vt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: $,
      height: H
    } = En(r.value);
    a.value = {
      width: Le($),
      height: Le(H)
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
    e.trigger === "hover" && (s = !0, E());
  }, f = /* @__PURE__ */ function() {
    var $ = Zl(function* () {
      e.trigger === "hover" && (s = !1, yield Dr(), !i && p());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), m = () => {
    e.trigger === "hover" && (i = !0);
  }, y = /* @__PURE__ */ function() {
    var $ = Zl(function* () {
      e.trigger === "hover" && (i = !1, yield Dr(), !s && p());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), b = () => {
    e.closeOnClickReference && t.value ? p() : E();
  }, h = () => {
    p();
  }, w = ($) => {
    e.trigger === "click" && (h(), C(e.onClickOutside, $));
  }, O = () => {
    V(), C(e.onClosed);
  }, P = () => {
    var {
      offsetX: $,
      offsetY: H,
      placement: D
    } = e;
    u();
    var Y = {
      x: Le($),
      y: Le(H)
    };
    switch (D) {
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
          placement: D,
          skidding: Y.y,
          distance: -Y.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: D,
          skidding: Y.x,
          distance: -Y.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: D,
          skidding: Y.x,
          distance: Y.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: D,
          skidding: Y.y,
          distance: Y.x
        };
    }
  }, S = () => {
    var {
      placement: $,
      skidding: H,
      distance: D
    } = P(), Y = [ca({}, Jg, {
      enabled: t.value
    }), ca({}, xg, {
      options: {
        offset: [H, D]
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
      placement: $,
      modifiers: Y,
      strategy: e.strategy
    };
  }, M = () => e.reference ? r.value.querySelector(e.reference) : r.value, V = () => {
    l.setOptions(S());
  }, E = () => {
    var {
      disabled: $
    } = e;
    $ || (t.value = !0, C(e["onUpdate:show"], !0));
  }, p = () => {
    t.value = !1, C(e["onUpdate:show"], !1);
  };
  return Rs(M, "click", w), ue(() => [e.offsetX, e.offsetY, e.placement, e.strategy], V), ue(() => e.disabled, p), Ct(() => {
    var $;
    l = Ty(($ = M()) != null ? $ : r.value, n.value, S());
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
    handlePopoverClose: h,
    handlePopoverMouseenter: m,
    handlePopoverMouseleave: y,
    handleClosed: O,
    resize: V,
    open: E,
    close: p
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
function My(e) {
  return ["absolute", "fixed"].includes(e);
}
var Iy = {
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
    validator: My
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
} = ne("tooltip");
function Ny(e, r) {
  return g(), T(
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
    [j(e.$slots, "default"), (g(), Ce(Jr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [x(Ue, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: ce(() => [Te(B(
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
        [B(
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
var Pd = re({
  name: "VarTooltip",
  props: Iy,
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
      resize: h,
      open: y,
      close: b
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
  n: zy,
  classes: Ly
} = ne("ellipsis"), Ry = {
  key: 0
};
function Uy(e, r) {
  var n = se("var-tooltip");
  return g(), Ce(
    n,
    Tt(so(e.tooltip)),
    {
      content: ce(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (g(), T(
          "span",
          Ry,
          le(e.tooltip.content),
          1
          /* TEXT */
        )) : j(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ce(() => [B(
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
var Od = re({
  name: "VarEllipsis",
  components: {
    VarTooltip: Jn
  },
  props: Ay,
  setup(e) {
    var r = k(!1), n = z(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = z(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : bi({
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
function Hy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function Yy(e) {
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
    validator: Hy
  },
  direction: {
    type: String,
    default: "top",
    validator: Yy
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
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  classes: Eo,
  n: hr
} = ne("fab");
const Ya = re({
  name: "VarFab",
  inheritAttrs: !1,
  props: jy,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = Hs(e, "active"), o = k(null), l = k(null), i = (v, f, m) => {
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
    }) : null : Te(x(vr, {
      "var-fab-cover": !0,
      class: hr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      elevation: e.elevation,
      round: !0
    }, {
      default: () => [x(Ne, {
        "var-fab-cover": !0,
        class: Eo([t.value, hr("trigger-active-icon"), hr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: hr("--trigger-icon-animation")
      }, null)]
    }), [[Rr, e.show]]);
    return ue(() => e.trigger, () => {
      t.value = !1;
    }), ue(() => e.disabled, () => {
      t.value = !1;
    }), ue(() => [e.position, e.fixed, e.top, e.bottom, e.left, e.right], () => {
      var v;
      (v = l.value) == null || v.reset();
    }), Rs(o, "click", u), () => {
      var v, f, m = Us((f = C(n.default)) != null ? f : []), y = Bi(e.drag) ? {} : e.drag;
      return x(Xn, De({
        ref: l,
        class: Eo(hr("--position-" + e.position), [!e.fixed, hr("--absolute")]),
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
        default: () => [x("div", {
          class: Eo(hr(), hr("--direction-" + e.direction), [e.safeArea, hr("--safe-area")]),
          ref: o,
          onMouseleave: () => s(!1, m.length),
          onMouseenter: () => s(!0, m.length)
        }, [x(Ue, {
          name: hr("--active-transition")
        }, Wy(v = d()) ? v : {
          default: () => [v]
        }), x(Ue, {
          name: hr("--actions-transition-" + e.direction),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        }, {
          default: () => [Te(x("div", {
            class: hr("actions"),
            onClick: (b) => b.stopPropagation()
          }, [m.map((b) => x("div", {
            class: hr("action")
          }, [b]))]), [[Rr, e.show && t.value && m.length]])]
        })])]
      });
    };
  }
});
ie(Ya);
var qk = Ya;
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
function Jl(e, r, n, a, t, o, l) {
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
  n: Ky
} = ne("form");
function Zy(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Vd = re({
  name: "VarForm",
  props: qy,
  setup(e) {
    var r = z(() => e.disabled), n = z(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Qm(), o = (d) => {
      setTimeout(() => {
        var v = vn(d), f = v === window ? 0 : ml(v), m = ml(d) - f - Le(e.scrollToErrorOffsetY);
        ga(v, {
          top: m,
          animation: Uo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Xy(function* () {
        var v = yield Promise.all(a.map((h) => {
          var {
            validate: w
          } = h;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = of(v, (h) => h === !1, e.scrollToError), m = f > -1;
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
} = ne("image"), eb = ["alt", "title", "lazy-loading", "lazy-error"], rb = ["alt", "title", "src"];
function nb(e, r) {
  var n = Ae("lazy"), a = Ae("ripple");
  return Te((g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? Te((g(), T("img", {
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
    }, null, 46, eb)), [[n, e.src]]) : ee("v-if", !0), !e.lazy && !e.showErrorSlot ? (g(), T("img", {
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
var Md = re({
  name: "VarImage",
  directives: {
    Lazy: ba,
    Ripple: qe
  },
  props: Qy,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(!1), t = (i) => {
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
    return ue(() => e.src, () => {
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
Md.render = nb;
const Fa = Md;
ie(Fa);
var Kk = Fa, Id = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function ab() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = lr(Id);
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
function Ql(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function _l(e) {
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
var tb = 250, ob = 20, {
  n: ib,
  classes: lb
} = ne("swipe"), sb = ["onClick"];
function ub(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [B(
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
    }, () => [e.indicator && e.length ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(g(!0), T(
        Ie,
        null,
        Ye(e.length, (n, a) => (g(), T("div", {
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
var Ed = re({
  name: "VarSwipe",
  props: Bd,
  setup(e) {
    var r = k(null), n = k(0), a = z(() => e.vertical), t = k(0), o = k(0), l = k(!1), i = k(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = ab(), {
      popup: v,
      bindPopup: f
    } = Nf(), {
      moveX: m,
      moveY: y,
      touching: b,
      direction: h,
      startTime: w,
      distance: O,
      startTouch: P,
      moveTouch: S,
      endTouch: M
    } = zi(), V = !1, E = -1, p = (G) => s.find((te) => {
      var {
        index: pe
      } = te;
      return pe.value === G;
    }), $ = () => {
      e.loop && (o.value >= 0 && p(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && p(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (p(d.value - 1).setTranslate(0), p(0).setTranslate(0)));
    }, H = (G) => {
      var te = nr(G) ? G : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: pe
      } = e;
      return te <= -1 ? pe ? -1 : 0 : te >= d.value ? pe ? d.value : d.value - 1 : te;
    }, D = (G) => {
      var {
        loop: te
      } = e;
      return G === -1 ? te ? d.value - 1 : 0 : G === d.value ? te ? 0 : d.value - 1 : G;
    }, Y = (G) => e.loop ? G < 0 ? d.value + G : G >= d.value ? G - d.value : G : dn(G, 0, d.value - 1), X = (G) => {
      var te = o.value >= n.value, pe = o.value <= -t.value, Se = 0, oe = -(t.value - n.value);
      l.value = !0, (te || pe) && (l.value = !0, o.value = pe ? Se : oe, p(0).setTranslate(0), p(d.value - 1).setTranslate(0)), vo(() => {
        l.value = !1, C(G);
      });
    }, A = () => {
      V || (i.value = Y(R(e.initialIndex)), V = !0);
    }, L = () => {
      var {
        autoplay: G
      } = e;
      !G || d.value <= 1 || (I(), E = window.setTimeout(() => {
        _(), L();
      }, R(G)));
    }, I = () => {
      E && clearTimeout(E);
    }, N = (G) => {
      d.value <= 1 || !e.touchable || (P(G), I(), X(() => {
        l.value = !0;
      }));
    }, ae = (G) => {
      var {
        touchable: te,
        vertical: pe
      } = e;
      if (!(!b.value || !te)) {
        S(G);
        var Se = pe ? "vertical" : "horizontal";
        h.value === Se && (G.preventDefault(), o.value += pe ? y.value : m.value, $());
      }
    }, F = () => {
      if (b.value) {
        var {
          vertical: G,
          onChange: te
        } = e;
        M();
        var pe = G ? y.value < 0 : m.value < 0, Se = performance.now() - w.value <= tb && O.value >= ob, oe = Se ? H(pe ? i.value + 1 : i.value - 1) : H();
        l.value = !1, o.value = oe * -n.value;
        var de = i.value;
        i.value = D(oe), L(), de !== i.value && C(te, i.value);
      }
    }, W = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((G) => {
        G.setTranslate(0);
      }), L(), setTimeout(() => {
        l.value = !1;
      }));
    }, _ = (G) => {
      if (!(d.value <= 1)) {
        A();
        var {
          loop: te,
          onChange: pe
        } = e, Se = i.value;
        i.value = Y(Se + 1), (G == null ? void 0 : G.event) !== !1 && C(pe, i.value), X(() => {
          if (Se === d.value - 1 && te) {
            p(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          Se !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, K = (G) => {
      if (!(d.value <= 1)) {
        A();
        var {
          loop: te,
          onChange: pe
        } = e, Se = i.value;
        i.value = Y(Se - 1), (G == null ? void 0 : G.event) !== !1 && C(pe, i.value), X(() => {
          if (Se === 0 && te) {
            p(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          Se !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, J = (G, te) => {
      if (!(d.value <= 1 || G === i.value)) {
        G = G < 0 ? 0 : G, G = G >= d.value ? d.value : G;
        var pe = G > i.value ? _ : K, Se = Math.abs(G - i.value);
        Array.from({
          length: Se
        }).forEach((oe, de) => {
          pe({
            event: de === Se - 1 ? te == null ? void 0 : te.event : !1
          });
        });
      }
    }, Q = {
      size: n,
      vertical: a
    };
    return u(Q), C(f, null), ue(() => d.value, /* @__PURE__ */ _l(function* () {
      yield Dr(), A(), W();
    })), v && ue(() => v.show.value, /* @__PURE__ */ function() {
      var G = _l(function* (te) {
        te ? (yield Dr(), W()) : I();
      });
      return function(te) {
        return G.apply(this, arguments);
      };
    }()), hn(W), fo(I), Pt(W), {
      n: ib,
      classes: lb,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: N,
      handleTouchmove: ae,
      handleTouchend: F,
      next: _,
      prev: K,
      to: J,
      resize: W,
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
  } = ir(Id);
  return e || Pr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: vb
} = ne("swipe-item");
function fb(e, r) {
  return g(), T(
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
var Nd = re({
  name: "VarSwipeItem",
  setup() {
    var e = k(0), {
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
var cb = wi({
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
}, xe(Bd, ["loop", "indicator", "onChange"]), xe(Ot, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: xl,
  classes: mb
} = ne("image-preview"), No = 12, es = 200, pb = 350, rs = 200, hb = 500, gb = ["onTouchstart"], yb = ["src", "alt"];
function bb(e, r) {
  var n = se("var-swipe-item"), a = se("var-swipe"), t = se("var-icon"), o = se("var-popup");
  return g(), Ce(o, {
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
    default: ce(() => [x(a, De({
      ref: "swipeRef",
      class: e.n("swipe"),
      "var-image-preview-cover": "",
      touchable: e.canSwipe,
      indicator: e.indicator && e.images.length > 1,
      "initial-index": e.initialIndex,
      loop: e.loop,
      onChange: e.onChange
    }, e.$attrs), {
      default: ce(() => [(g(!0), T(
        Ie,
        null,
        Ye(e.images, (l, i) => (g(), Ce(n, {
          class: c(e.n("swipe-item")),
          "var-image-preview-cover": "",
          key: l
        }, {
          default: ce(() => [B("div", {
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
          }, [B("img", {
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
      indicator: ce((l) => {
        var {
          index: i,
          length: s
        } = l;
        return [j(e.$slots, "indicator", {
          index: i,
          length: s
        }, () => [e.indicator && e.images.length > 1 ? (g(), T(
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
    }, 16, ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]), j(e.$slots, "close-icon", {}, () => [e.closeable ? (g(), Ce(t, {
      key: 0,
      class: c(e.n("close-icon")),
      name: "close-circle",
      "var-image-preview-cover": "",
      onClick: e.close
    }, null, 8, ["class", "onClick"])) : ee("v-if", !0)]), B(
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
var Dd = re({
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
    var r = k(!1), n = k(1), a = k(0), t = k(0), o = k(void 0), l = k(void 0), i = k(!0), s = k(null), {
      moveX: u,
      moveY: d,
      distance: v,
      startTime: f,
      startTouch: m,
      moveTouch: y,
      endTouch: b
    } = zi(), h = {
      start: null,
      prev: null
    }, w = null, O = null, P = !1, S = z(() => {
      var {
        images: K,
        current: J,
        initialIndex: Q
      } = e;
      if (Q != null)
        return R(Q);
      var G = K.findIndex((te) => te === J);
      return Math.max(G, 0);
    }), M = z(() => {
      var {
        imagePreventDefault: K,
        show: J
      } = e;
      return J && K;
    }), V = () => {
      n.value = R(e.zoom), i.value = !1, h.prev = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, rs);
    }, E = () => {
      n.value = 1, a.value = 0, t.value = 0, i.value = !0, h.prev = null, o.value = void 0, l.value = void 0;
    }, p = (K) => h.prev ? v.value <= No && performance.now() - f.value <= es && h.prev === K : !1, $ = (K) => !K || !h.start || !h.prev ? !1 : v.value <= No && performance.now() - f.value < pb && (K === h.start || K.parentNode === h.start), H = () => {
      b(), window.clearTimeout(O), P = !1, h.start = null;
    }, D = (K) => {
      if (window.clearTimeout(O), b(), P) {
        P = !1;
        return;
      }
      var J = $(K.target);
      w = window.setTimeout(() => {
        J && N(), h.start = null;
      }, es);
    }, Y = (K, J) => {
      window.clearTimeout(w), window.clearTimeout(O);
      var Q = K.currentTarget;
      if (h.start = Q, O = window.setTimeout(() => {
        P = !0, C(e.onLongPress, J);
      }, hb), p(Q)) {
        n.value > 1 ? E() : V();
        return;
      }
      m(K), h.prev = Q;
    }, X = (K) => {
      var {
        offsetWidth: J,
        offsetHeight: Q
      } = K, {
        naturalWidth: G,
        naturalHeight: te
      } = K.querySelector("." + xl("image"));
      return {
        width: J,
        height: Q,
        imageRadio: te / G,
        rootRadio: Q / J,
        zoom: R(e.zoom)
      };
    }, A = (K) => {
      var {
        zoom: J,
        imageRadio: Q,
        rootRadio: G,
        width: te,
        height: pe
      } = X(K);
      if (!Q)
        return 0;
      var Se = Q > G ? pe / Q : te;
      return Math.max(0, (J * Se - te) / 2) / J;
    }, L = (K) => {
      var {
        zoom: J,
        imageRadio: Q,
        rootRadio: G,
        width: te,
        height: pe
      } = X(K);
      if (!Q)
        return 0;
      var Se = Q > G ? pe : te * Q;
      return Math.max(0, (J * Se - pe) / 2) / J;
    }, I = (K) => {
      if (h.prev) {
        y(K);
        var J = K.currentTarget;
        if (v.value > No && window.clearTimeout(O), n.value > 1) {
          var Q = A(J), G = L(J);
          a.value = dn(a.value + u.value, -Q, Q), t.value = dn(t.value + d.value, -G, G);
        }
        h.prev = J;
      }
    }, N = () => {
      if (n.value > 1) {
        E(), setTimeout(() => C(e["onUpdate:show"], !1), rs);
        return;
      }
      C(e["onUpdate:show"], !1);
    }, ae = (K) => {
      var J;
      (J = s.value) == null || J.prev(K);
    }, F = (K) => {
      var J;
      (J = s.value) == null || J.next(K);
    }, W = (K, J) => {
      var Q;
      (Q = s.value) == null || Q.to(K, J);
    }, _ = (K) => {
      e.imagePreventDefault && e.show && K.preventDefault();
    };
    return fn(() => document, "contextmenu", _), ue(() => e.show, (K) => {
      r.value = K;
    }, {
      immediate: !0
    }), {
      n: xl,
      classes: mb,
      swipeRef: s,
      isPreventDefault: M,
      initialIndex: S,
      popupShow: r,
      scale: n,
      translateX: a,
      translateY: t,
      canSwipe: i,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: Y,
      handleTouchmove: I,
      handleTouchend: D,
      handleTouchcancel: H,
      close: N,
      prev: ae,
      next: F,
      to: W
    };
  }
});
Dd.render = bb;
const Et = Dd;
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
  return e === void 0 && (e = {}), Fe(e) ? ma({}, pa, {
    images: [e]
  }) : Ve(e) ? ma({}, pa, {
    images: e
  }) : ma({}, pa, e);
}
function Lr(e) {
  if (aa()) {
    Lr.close();
    var r = wb(e), n = Re(r);
    n.teleport = "body", tn = n;
    var {
      unmountInstance: a
    } = ta(Et, n, {
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
Lr.Component = Et;
ie(Et);
ie(Et, Lr);
var Qk = Et, Kt = {
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
function ns(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function as(e) {
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
  n: Cb,
  classes: Sb
} = ne("sticky");
function kb(e, r) {
  return g(), T(
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
    [B(
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
var Ad = re({
  name: "VarSticky",
  props: Kt,
  setup(e) {
    var r = k(null), n = k(null), a = k(!1), t = k("0px"), o = k("0px"), l = k("auto"), i = k("auto"), s = k("auto"), u = k("auto"), d = z(() => !e.disabled && e.cssMode), v = z(() => !e.disabled && !e.cssMode && a.value), f = z(() => Le(e.offsetTop)), m, y = () => {
      var {
        cssMode: P,
        disabled: S
      } = e;
      if (!S) {
        var M = 0;
        if (m !== window) {
          var {
            top: V
          } = Je(m);
          M = V;
        }
        var E = n.value, p = r.value, {
          top: $,
          left: H
        } = Je(p), D = $ - M;
        return D <= f.value ? (P || (l.value = p.offsetWidth + "px", i.value = p.offsetHeight + "px", t.value = M + f.value + "px", o.value = H + "px", s.value = E.offsetWidth + "px", u.value = E.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: D,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var P = y();
        P && C(e.onScroll, P.offsetTop, P.isFixed);
      }
    }, h = /* @__PURE__ */ function() {
      var P = as(function* () {
        a.value = !1, yield yf(), y();
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var P = as(function* () {
        yield Dr(), m = vn(r.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return ue(() => e.disabled, h), or(w), fo(O), Pt(h), fn(() => window, "scroll", b), {
      n: Cb,
      classes: Sb,
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
Ad.render = kb;
const Mn = Ad;
ie(Mn);
var _k = Mn, zd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
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
} = ne("index-anchor");
function Mb(e, r) {
  return g(), Ce(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
    "offset-top": e.sticky ? e.stickyOffsetTop : null,
    "z-index": e.sticky ? e.zIndex : null,
    disabled: e.disabled && !e.cssMode,
    "css-mode": e.cssMode,
    ref: "anchorEl"
  }, {
    default: ce(() => [B(
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
var Ld = re({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Mn
  },
  inheritAttrs: !1,
  props: Pb,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = Tb(), t = k(0), o = k(!1), l = z(() => e.index), i = k(null), {
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
      Transition: Ue
    };
  }
});
Ld.render = Mb;
const ja = Ld;
ie(ja);
var xk = ja, Ib = {
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
function ts(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Yt(e) {
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
  n: Bb,
  classes: Eb
} = ne("index-bar"), Nb = ["onClick"];
function Db(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [j(e.$slots, "default"), B(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(g(!0), T(
        Ie,
        null,
        Ye(e.anchorNameList, (n) => (g(), T("li", {
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
var Rd = re({
  name: "VarIndexBar",
  props: Ib,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = $b(), t = k(""), o = k(null), l = k([]), i = k(), s = z(() => e.sticky), u = z(() => e.stickyCssMode || e.cssMode), d = z(() => Le(e.stickyOffsetTop)), v = z(() => e.zIndex), f = null, m = !1, y = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(y);
    var b = (E, p) => {
      var $ = Ei(E) ? E.name.value : E;
      $ === i.value || $ === void 0 || (i.value = $, (p == null ? void 0 : p.event) !== !1 && C(e.onChange, $));
    }, h = () => {
      if (Ni(f))
        return 0;
      var {
        top: E
      } = Je(f), {
        scrollTop: p
      } = f, {
        top: $
      } = Je(o.value);
      return p - E + $;
    }, w = () => {
      var E = ha(f), p = f === window ? document.body.scrollHeight : f.scrollHeight, $ = h();
      n.forEach((H, D) => {
        var Y = H.ownTop.value, X = E - Y + d.value - $, A = D === n.length - 1 ? p : n[D + 1].ownTop.value - H.ownTop.value;
        H.setDisabled(!0), X >= 0 && X < A && t.value === "" && (H.setDisabled(!1), b(H));
      });
    }, O = /* @__PURE__ */ function() {
      var E = Yt(function* (p) {
        var {
          anchorName: $,
          manualCall: H = !1,
          options: D
        } = p;
        if (H && C(e.onClick, $), !($ === i.value && !m)) {
          var Y = n.find((I) => {
            var {
              name: N
            } = I;
            return $ === N.value;
          });
          if (Y) {
            var X = h(), A = Y.ownTop.value - d.value + X, L = Ai(f);
            t.value = $, b($, D), yield ga(f, {
              left: L,
              top: A,
              animation: Ms,
              duration: R(e.duration)
            }), vo(() => {
              t.value = "";
            });
          }
        }
      });
      return function($) {
        return E.apply(this, arguments);
      };
    }(), P = /* @__PURE__ */ function() {
      var E = Yt(function* () {
        yield Dr(), f = vn(o.value);
      });
      return function() {
        return E.apply(this, arguments);
      };
    }(), S = () => {
      f.addEventListener("scroll", w);
    }, M = () => {
      f.removeEventListener("scroll", w);
    }, V = (E, p) => {
      br(() => O({
        anchorName: E,
        options: p
      }));
    };
    return ue(() => r.value, /* @__PURE__ */ Yt(function* () {
      yield Dr(), n.forEach((E) => {
        var {
          name: p,
          setOwnTop: $
        } = E;
        p.value && l.value.push(p.value), $();
      });
    })), or(/* @__PURE__ */ Yt(function* () {
      yield P(), S();
    })), lo(M), xn(() => {
      m = !0, M();
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
const Wa = Rd;
ie(Wa);
var e$ = Wa;
function Ab(e) {
  return ["small", "normal"].includes(e);
}
function zb(e) {
  return ["outlined", "standard"].includes(e);
}
var el = {
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
  n: Do,
  classes: Lb
} = ne("field-decorator"), Rb = ["for"];
function Ub(e, r) {
  var n = se("var-icon");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.color,
          cursor: e.cursor,
          overflow: e.isFloating ? "visible" : "hidden"
        })
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), B(
        "div",
        {
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      ), e.placeholder && e.hint ? (g(), T("label", {
        key: 0,
        class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
        style: q({
          color: e.color
        }),
        for: e.id
      }, [B(
        "span",
        null,
        le(e.placeholder),
        1
        /* TEXT */
      )], 14, Rb)) : ee("v-if", !0), B(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (g(), Ce(n, {
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
    ), e.line ? (g(), T(
      Ie,
      {
        key: 0
      },
      [e.variant === "outlined" ? (g(), T(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: q({
            borderColor: e.color
          })
        },
        [B(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: q({
              width: e.legendWidth
            })
          },
          [e.placeholder && e.hint ? (g(), Ce(Jr, {
            key: 0,
            to: "body"
          }, [B(
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
      )) : (g(), T(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: q({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [B(
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
var Ud = re({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Ne
  },
  props: el,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(null), t = k(""), o = z(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = z(() => e.hint && (!Fr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
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
    return Pt(s), or(s), $t(s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Do,
      classes: Lb,
      isEmpty: Fr,
      handleClear: u,
      handleClick: d
    };
  }
});
Ud.render = Ub;
const Hd = Ud;
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
function Hb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var Yb = Ci({
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
    validator: Hb
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
}, xe(el, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Fb,
  classes: jb
} = ne("input"), Wb = ["placeholder", "enterkeyhint"], Gb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], qb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Xb(e, r) {
  var n = se("var-field-decorator"), a = se("var-form-details");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [x(
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
        "append-icon": ce(() => [j(e.$slots, "append-icon")]),
        default: ce(() => [e.normalizedType === "password" ? (g(), T("input", {
          key: 0,
          tabindex: "-1",
          class: c(e.n("autocomplete")),
          placeholder: e.hint ? void 0 : e.placeholder,
          style: q({
            "--input-placeholder-color": e.placeholderColor
          }),
          enterkeyhint: e.enterkeyhint
        }, null, 14, Wb)) : ee("v-if", !0), e.textarea ? (g(), T("textarea", {
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
      `, 46, Gb)) : (g(), T("input", {
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
        fn: ce(() => [j(e.$slots, "prepend-icon")]),
        key: "0"
      } : void 0]),
      1040
      /* FULL_PROPS, DYNAMIC_SLOTS */
    ), x(a, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText,
      onMousedown: r[14] || (r[14] = Tr(() => {
      }, ["stop"]))
    }, Zt({
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
var Yd = re({
  name: "VarInput",
  components: {
    VarFormDetails: ar,
    VarFieldDecorator: Hd
  },
  props: Yb,
  setup(e) {
    var r = k("var-input-" + ea().uid), n = k(null), a = k(!1), t = k(!1), o = z(() => e.type === "number" ? "text" : e.type), l = z(() => {
      var {
        maxlength: F,
        modelValue: W
      } = e;
      return F ? Fr(W) ? "0 / " + F : String(W).length + "/" + F : "";
    }), i = z(() => e.disabled || e.readonly ? "" : "text"), s = z(() => {
      var {
        hint: F,
        blurColor: W,
        focusColor: _
      } = e;
      if (!F)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? _ || "var(--field-decorator-focus-color)" : W || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: y
    } = Or(), b = (F) => {
      ze(() => {
        var {
          validateTrigger: W,
          rules: _,
          modelValue: K
        } = e;
        f(W, F, _, K);
      });
    }, h = (F) => {
      a.value = !0, C(e.onFocus, F), b("onFocus");
    }, w = (F) => {
      a.value = !1, C(e.onBlur, F), b("onBlur");
    }, O = (F) => {
      var W = F.target, {
        value: _
      } = W;
      return e.type === "number" && (_ = $(_)), D(H(_));
    }, P = () => {
      t.value = !0;
    }, S = (F) => {
      t.value && (t.value = !1, F.target.dispatchEvent(new Event("input")));
    }, M = (F) => {
      if (!t.value) {
        var W = O(F);
        C(e["onUpdate:modelValue"], W), C(e.onInput, W, F), b("onInput");
      }
    }, V = (F) => {
      var W = O(F);
      C(e.onChange, W, F), b("onChange");
    }, E = () => {
      var {
        disabled: F,
        readonly: W,
        clearable: _,
        onClear: K
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || F || W || !_ || (C(e["onUpdate:modelValue"], ""), C(K, ""), b("onClear"));
    }, p = (F) => {
      var {
        disabled: W,
        onClick: _
      } = e;
      d != null && d.disabled.value || W || (C(_, F), b("onClick"));
    }, $ = (F) => {
      var W = F.indexOf("-"), _ = F.indexOf(".");
      return W > -1 && (F = W === 0 ? "-" + F.replace(/-/g, "") : F.replace(/-/g, "")), _ > -1 && (F = F.slice(0, _ + 1) + F.slice(_).replace(/\./g, "")), F.replace(/[^-0-9.]/g, "");
    }, H = (F) => e.modelModifiers.trim ? F.trim() : F, D = (F) => e.maxlength ? F.slice(0, R(e.maxlength)) : F, Y = (F) => {
      var {
        disabled: W,
        readonly: _
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || W || _ || F.stopPropagation();
    };
    function X(F) {
      var {
        disabled: W
      } = e;
      d != null && d.disabled.value || W || F.target === n.value || (I(), F.preventDefault());
    }
    var A = () => {
      C(e["onUpdate:modelValue"], ""), y();
    }, L = () => m(e.rules, e.modelValue), I = () => {
      var F;
      (F = n.value) == null || F.focus();
    }, N = () => {
      n.value.blur();
    }, ae = {
      reset: A,
      validate: L,
      resetValidation: y
    };
    return C(u, ae), or(() => {
      e.autofocus && I();
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
      handleFocus: h,
      handleBlur: w,
      handleInput: M,
      handleChange: V,
      handleClear: E,
      handleClick: p,
      handleTouchstart: Y,
      handleCompositionStart: P,
      handleCompositionEnd: S,
      handleMousedown: X,
      validate: L,
      resetValidation: y,
      reset: A,
      focus: I,
      blur: N
    };
  }
});
Yd.render = Xb;
const Qn = Yd;
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
} = ne("link");
function xb(e, r) {
  return g(), Ce(ra(e.tag), De(e.linkProps, {
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
var Fd = re({
  name: "VarLink",
  props: Jb,
  setup(e) {
    var r = z(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), n = z(() => {
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
const Ga = Fd;
ie(Ga);
var n$ = Ga, e0 = {
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
function os(e, r, n, a, t, o, l) {
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
  n: i0,
  classes: l0
} = ne("list");
function s0(e, r) {
  var n = se("var-loading"), a = Ae("ripple");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [j(e.$slots, "default"), e.loading ? j(e.$slots, "loading", {
      key: 0
    }, () => [B(
      "div",
      {
        class: c(e.n("loading"))
      },
      [B(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        le(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), x(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? j(e.$slots, "finished", {
      key: 1
    }, () => [B(
      "div",
      {
        class: c(e.n("finished"))
      },
      le(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? j(e.$slots, "error", {
      key: 2
    }, () => [Te((g(), T(
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
    )), [[a]])]) : ee("v-if", !0), B(
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
var Gd = re({
  name: "VarList",
  directives: {
    Ripple: qe
  },
  components: {
    VarLoading: cn
  },
  props: e0,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = t0(), a = k(null), t = k(null), o, l = () => {
      C(e["onUpdate:error"], !1), C(e["onUpdate:loading"], !0), C(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = Je(o), {
        bottom: v
      } = Je(t.value);
      return Math.floor(v) - Le(e.offset) <= d;
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
    return C(n, {}), r && ue(() => r.current.value, u), ue(() => [e.loading, e.error, e.finished], u), or(() => {
      o = vn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), fo(s), {
      pack: _e,
      listEl: a,
      detectorEl: t,
      dt: uo,
      isNumber: nr,
      load: l,
      check: u,
      n: i0,
      classes: l0
    };
  }
});
Gd.render = s0;
const qa = Gd;
ie(qa);
var a$ = qa, u0 = {
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
  n: is
} = ne("loading-bar");
const v0 = re({
  name: "VarLoadingBar",
  props: u0,
  setup(e) {
    return () => x("div", {
      class: d0(is(), [e.error, is("--error")]),
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
var qd, Xd, To, Kd, ls, Zd = {}, f0 = {
  value: 0,
  opacity: 0,
  error: !1
}, er = Re(f0), c0 = (e) => {
  Object.assign(er, e);
}, m0 = (e) => {
  Object.assign(er, e), Zd = e;
}, p0 = () => {
  Object.keys(Zd).forEach((e) => {
    er[e] !== void 0 && (er[e] = void 0);
  });
}, Jd = () => {
  ls || (ls = !0, ta(v0, er));
}, rl = () => {
  qd = window.setTimeout(() => {
    if (!(er.value >= 95)) {
      var e = Math.random();
      er.value < 70 && (e = Math.round(5 * Math.random())), er.value += e, rl();
    }
  }, 200);
}, nl = () => {
  window.clearTimeout(Xd), window.clearTimeout(qd), window.clearTimeout(To), window.clearTimeout(Kd);
}, h0 = () => {
  nl(), er.error = !1, er.value = 0, Jd(), To = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), rl();
}, Qd = () => {
  nl(), er.value = 100, To = window.setTimeout(() => {
    er.opacity = 0, Xd = window.setTimeout(() => {
      er.error = !1;
    }, 250);
  }, 300);
}, g0 = () => {
  nl(), er.error = !0, er.value === 100 && (er.value = 0), Jd(), To = window.setTimeout(() => {
    er.opacity = 1;
  }, 200), rl(), Kd = window.setTimeout(Qd, 300);
}, _d = {
  start: h0,
  finish: Qd,
  error: g0,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: c0,
  setDefaultOptions: m0,
  resetDefaultOptions: p0
}, t$ = _d;
const Si = _d;
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
} = ne("menu");
function $0(e, r) {
  return g(), T(
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
    [j(e.$slots, "default"), (g(), Ce(Jr, {
      to: e.teleport === !1 ? void 0 : e.teleport,
      disabled: e.teleportDisabled || e.teleport === !1
    }, [x(Ue, {
      name: e.n(),
      onAfterEnter: e.onOpened,
      onAfterLeave: e.handleClosed,
      persisted: ""
    }, {
      default: ce(() => [Te(B(
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
var xd = re({
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
      open: y,
      // expose
      close: b,
      // expose
      resize: h
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
      resize: h,
      open: y,
      close: b
    };
  }
});
xd.render = $0;
const In = xd;
ie(In);
var o$ = In, ev = Symbol("SELECT_BIND_OPTION_KEY");
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
  classes: M0
} = ne("option");
function I0(e, r) {
  var n = se("var-checkbox"), a = se("var-hover-overlay"), t = Ae("ripple"), o = Ae("hover");
  return Te((g(), T(
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
    [B(
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
    ), e.multiple ? (g(), Ce(n, {
      key: 0,
      ref: "checkbox",
      "checked-color": e.focusColor,
      modelValue: e.optionSelected,
      "onUpdate:modelValue": r[0] || (r[0] = (l) => e.optionSelected = l),
      onClick: r[1] || (r[1] = Tr(() => {
      }, ["stop"])),
      onChange: e.handleSelect
    }, null, 8, ["checked-color", "modelValue", "onChange"])) : ee("v-if", !0), B(
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
    ), x(a, {
      hovering: e.hovering
    }, null, 8, ["hovering"])],
    6
    /* CLASS, STYLE */
  )), [[t], [o, e.handleHovering, "desktop"]]);
}
var rv = re({
  name: "VarOption",
  directives: {
    Ripple: qe,
    Hover: Ar
  },
  components: {
    VarCheckbox: jn,
    VarHoverOverlay: wr
  },
  props: O0,
  setup(e) {
    var r = k(!1), n = z(() => r.value), a = z(() => e.label), t = z(() => e.value), {
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
      i.value && (r.value = !r.value), u(h);
    }, y = () => u(h), b = (w) => {
      r.value = w;
    }, h = {
      label: a,
      value: t,
      selected: n,
      sync: b
    };
    return ue([() => e.label, () => e.value], d), l(h), {
      n: V0,
      classes: M0,
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
rv.render = I0;
const Xa = rv;
ie(Xa);
var i$ = Xa, B0 = {
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
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: ss
} = ne("overlay");
const Ka = re({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: B0,
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
    var i = () => x("div", De({
      class: ss(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [C(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return x(Ue, {
        name: ss("--fade")
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
        return x(Jr, {
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
ie(Ka);
var l$ = Ka, N0 = {
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
} = ne("pagination"), z0 = ["item-mode", "onClick"];
function L0(e, r) {
  var n = se("var-icon"), a = se("var-input"), t = se("var-cell"), o = se("var-menu"), l = Ae("ripple");
  return g(), T(
    "ul",
    {
      class: c(e.n())
    },
    [Te((g(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [j(e.$slots, "prev", {}, () => [x(n, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (g(), T(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [x(a, {
        "var-pagination-cover": "",
        hint: !1,
        disabled: e.disabled,
        modelValue: e.simpleCurrentValue,
        "onUpdate:modelValue": r[1] || (r[1] = (i) => e.simpleCurrentValue = i),
        onBlur: r[2] || (r[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
        onKeydown: r[3] || (r[3] = ll((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
      }, null, 8, ["disabled", "modelValue"]), B("span", null, [$e(
        " / " + le(e.pageCount) + " ",
        1
        /* TEXT */
      ), B(
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
    )) : (g(!0), T(
      Ie,
      {
        key: 1
      },
      Ye(e.pageList, (i, s) => Te((g(), T("li", {
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
    )), Te((g(), T(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [j(e.$slots, "next", {}, () => [x(n, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (g(), T(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [x(o, {
        placement: "cover-top",
        disabled: e.disabled,
        show: e.menuVisible,
        "onUpdate:show": r[6] || (r[6] = (i) => e.menuVisible = i)
      }, {
        menu: ce(() => [(g(!0), T(
          Ie,
          null,
          Ye(e.sizeOption, (i, s) => Te((g(), Ce(t, {
            class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
            key: s,
            onClick: (u) => e.clickSize(i)
          }, {
            default: ce(() => [$e(
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
        default: ce(() => [B(
          "div",
          {
            class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
            onClick: r[5] || (r[5] = Tr(function() {
              return e.showMenu && e.showMenu(...arguments);
            }, ["stop"]))
          },
          [B(
            "span",
            null,
            le(e.size) + le(e.pack.paginationItem) + " / " + le(e.pack.paginationPage),
            1
            /* TEXT */
          ), x(n, {
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
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (g(), T(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, e.n("item--disabled")]))
      },
      [$e(
        le(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), x(a, {
        modelValue: e.quickJumperValue,
        "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
        disabled: e.disabled,
        "var-pagination-cover": "",
        onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
        onKeydown: r[9] || (r[9] = ll((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
      }, null, 8, ["modelValue", "disabled"])],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (g(), T(
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
var nv = re({
  name: "VarPagination",
  components: {
    VarMenu: In,
    VarIcon: Ne,
    VarCell: Fn,
    VarInput: Qn
  },
  directives: {
    Ripple: qe
  },
  props: N0,
  setup(e) {
    var r = k(!1), n = k(""), a = k("1"), t = k(!1), o = k(!1), l = k(R(e.current) || 1), i = k(R(e.size) || 10), s = k([]), u = z(() => Math.ceil(e.maxPagerCount / 2)), d = z(() => Math.ceil(R(e.total) / R(i.value))), v = z(() => {
      var S = i.value * (l.value - 1) + 1, M = Math.min(i.value * l.value, R(e.total));
      return [S, M];
    }), f = z(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = (S, M) => nr(S) ? !1 : M === 1 ? t.value : o.value, y = (S, M) => nr(S) ? "basic" : M === 1 ? "head" : "tail", b = (S, M) => {
      if (!(S === l.value || e.disabled)) {
        if (S === "...") {
          l.value = M === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
    }, h = () => {
      e.disabled || (r.value = !0);
    }, w = (S) => {
      i.value = S, r.value = !1;
      var M = O(l.value);
      a.value = String(M), l.value = M;
    }, O = (S) => S > d.value ? d.value : S < 1 ? 1 : S, P = (S, M, V) => {
      V.target.blur();
      var E = O(R(M));
      a.value = String(E), l.value = E, S === "quick" && (n.value = "");
    };
    return ue([() => e.current, () => e.size], (S) => {
      var [M, V] = S;
      l.value = R(M) || 1, i.value = R(V || 10);
    }), ue([l, i, d], (S, M) => {
      var [V, E, p] = S, [$, H] = M, D = [], {
        maxPagerCount: Y,
        total: X,
        onChange: A
      } = e, L = Math.ceil(R(X) / R(H)), I = p - (Y - u.value) - 1;
      if (a.value = "" + V, p - 2 > Y) {
        if ($ === void 0 || p !== L)
          for (var N = 2; N < Y + 2; N++)
            D.push(N);
        if (V <= Y && V < I) {
          D = [];
          for (var ae = 1; ae < Y + 1; ae++)
            D.push(ae + 1);
          t.value = !0, o.value = !1;
        }
        if (V > Y && V < I) {
          D = [];
          for (var F = 1; F < Y + 1; F++)
            D.push(V + F - u.value);
          t.value = V === 2 && Y === 1, o.value = !1;
        }
        if (V >= I) {
          D = [];
          for (var W = 1; W < Y + 1; W++)
            D.push(p - (Y - W) - 1);
          t.value = !1, o.value = !0;
        }
        D = [1, "...", ...D, "...", p];
      } else
        for (var _ = 1; _ <= p; _++)
          D.push(_);
      s.value = D, $ != null && p > 0 && C(A, V, E), C(e["onUpdate:current"], V), C(e["onUpdate:size"], E);
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
      getMode: y,
      isHideEllipsis: m,
      clickItem: b,
      showMenu: h,
      clickSize: w,
      setPage: P,
      toNumber: R,
      formatElevation: pr
    };
  }
});
nv.render = L0;
const Za = nv;
ie(Za);
var s$ = Za, R0 = {
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
  classes: H0
} = ne("paper");
function Y0(e, r) {
  var n = Ae("ripple");
  return Te((g(), T(
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
var av = re({
  name: "VarPaper",
  directives: {
    Ripple: qe
  },
  props: R0,
  setup(e) {
    var r = (n) => {
      C(e.onClick, n);
    };
    return {
      n: U0,
      classes: H0,
      formatElevation: pr,
      toSizeUnit: we,
      handleClick: r
    };
  }
});
av.render = Y0;
const Ja = av;
ie(Ja);
var u$ = Ja;
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
var F0 = ki({
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
}, xe(Ot, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: j0,
  classes: W0
} = ne("picker"), us = 300, G0 = 15, ds = 200, q0 = 1e3, vs = 0, X0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], K0 = ["onTransitionend"], Z0 = ["onClick"];
function J0(e, r) {
  var n = se("var-button");
  return g(), Ce(
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
      default: ce(() => [B(
        "div",
        De({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (g(), T(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [j(e.$slots, "cancel", {}, () => [x(n, {
            class: c(e.n("cancel-button")),
            "var-picker-cover": "",
            text: "",
            "text-color": e.cancelButtonTextColor,
            onClick: e.cancel
          }, {
            default: ce(() => [$e(
              le(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])]), j(e.$slots, "title", {}, () => [B(
            "div",
            {
              class: c(e.n("title"))
            },
            le(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), j(e.$slots, "confirm", {}, () => [x(n, {
            class: c(e.n("confirm-button")),
            text: "",
            "var-picker-cover": "",
            "text-color": e.confirmButtonTextColor,
            onClick: e.confirm
          }, {
            default: ce(() => [$e(
              le(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
              1
              /* TEXT */
            )]),
            _: 1
            /* STABLE */
          }, 8, ["class", "text-color", "onClick"])])],
          2
          /* CLASS */
        )) : ee("v-if", !0), B(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(g(!0), T(
            Ie,
            null,
            Ye(e.scrollColumns, (a) => (g(), T("div", {
              class: c(e.n("column")),
              key: a.id,
              onTouchstartPassive: (t) => e.handleTouchstart(a),
              onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
              onTouchend: (t) => e.handleTouchend(t, a)
            }, [B("div", {
              class: c(e.n("scroller")),
              ref_for: !0,
              ref: (t) => e.setScrollEl(t, a),
              style: q({
                transform: "translateY(" + a.translate + "px)",
                transitionDuration: a.duration + "ms",
                transitionProperty: a.duration ? "transform" : "none"
              }),
              onTransitionend: (t) => e.handleTransitionend(a)
            }, [(g(!0), T(
              Ie,
              null,
              Ye(a.column.texts, (t, o) => (g(), T("div", {
                class: c(e.n("option")),
                style: q({
                  height: e.optionHeight + "px"
                }),
                key: t,
                onClick: (l) => e.handleClick(a, o)
              }, [B(
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
          )), B(
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
          ), B(
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
var tv = re({
  name: "VarPicker",
  components: {
    VarButton: vr,
    VarPopup: Ur
  },
  inheritAttrs: !1,
  props: F0,
  setup(e) {
    var r = k([]), n = z(() => Le(e.optionHeight)), a = z(() => Le(e.optionCount)), t = z(() => a.value * n.value / 2 - n.value / 2), o = z(() => a.value * n.value), l = [], i = !1, s = (A, L) => {
      L.scrollEl = A;
    }, u = (A) => {
      C(e["onUpdate:show"], A);
    }, d = (A) => {
      var L = t.value - A.column.texts.length * n.value, I = n.value + t.value;
      A.translate = dn(A.translate, L, I);
    }, v = (A, L) => {
      var I = Math.round((t.value - L) / n.value);
      return lf(I, A.column.texts);
    }, f = (A) => (A.translate = t.value - A.index * n.value, A.translate), m = () => {
      var A = r.value.map((I) => I.column.texts[I.index]), L = r.value.map((I) => I.index);
      return {
        texts: A,
        indexes: L
      };
    }, y = function(A, L) {
      L === void 0 && (L = 0), f(A), A.duration = L;
    }, b = (A, L, I) => {
      A.translate += Math.abs(L / I) / 3e-3 * (L < 0 ? -1 : 1);
    }, h = (A, L) => {
      i || (A.index = L, A.scrolling = !0, y(A, ds));
    }, w = (A) => {
      A.touching = !0, A.translate = Mo(A.scrollEl);
    }, O = (A, L) => {
      if (L.touching) {
        i = !0, L.scrolling = !1, L.duration = 0;
        var {
          clientY: I
        } = A.touches[0], N = L.prevY !== void 0 ? I - L.prevY : 0;
        L.prevY = I, L.translate += N, d(L);
        var ae = performance.now();
        ae - L.momentumTime > us && (L.momentumTime = ae, L.momentumPrevY = L.translate);
      }
    }, P = (A, L) => {
      L.touching = !1, L.prevY = void 0;
      var I = L.translate - L.momentumPrevY, N = performance.now() - L.momentumTime, ae = Math.abs(I) >= G0 && N <= us;
      ae && b(L, I, N), L.index = v(L, L.translate);
      var F = L.translate, W = f(L);
      L.scrolling = W !== F, y(L, ae ? q0 : ds), L.scrolling || H(L), br(() => {
        i = !1;
      });
    }, S = (A) => {
      A.scrolling = !1, H(A);
    }, M = (A) => A.map((L, I) => {
      var N, ae = Ve(L) ? {
        texts: L
      } : L, F = {
        id: vs++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (N = ae.initialIndex) != null ? N : 0,
        columnIndex: I,
        duration: 0,
        momentumTime: 0,
        column: ae,
        scrollEl: null,
        scrolling: !1
      };
      return y(F), F;
    }), V = (A) => {
      var L = [];
      return E(L, A, 0, !0), L;
    }, E = function(A, L, I, N) {
      if (N === void 0 && (N = !1), Ve(L) && L.length) {
        var ae, F = N && (ae = e.cascadeInitialIndexes[A.length]) != null ? ae : 0, W = {
          id: vs++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: F,
          columnIndex: I,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: L.map((_) => _[e.textKey])
          },
          columns: L,
          scrollEl: null,
          scrolling: !1
        };
        A.push(W), y(W), E(A, W.columns[W.index].children, I + 1, N);
      }
    }, p = (A) => {
      r.value.splice(r.value.indexOf(A) + 1), E(r.value, A.columns[A.index].children, A.columnIndex + 1);
    }, $ = () => {
      var {
        indexes: A
      } = m();
      return A.every((L, I) => L === l[I]);
    }, H = (A) => {
      var {
        cascade: L,
        onChange: I
      } = e;
      if (!$()) {
        L && p(A);
        var N = r.value.some((W) => W.scrolling);
        if (!N) {
          var {
            texts: ae,
            indexes: F
          } = m();
          l = [...F], C(I, ae, F);
        }
      }
    }, D = () => {
      if (e.cascade) {
        var A = r.value.find((L) => L.scrolling);
        A && (A.index = v(A, Mo(A.scrollEl)), A.scrolling = !1, y(A), p(A));
      } else
        r.value.forEach((L) => {
          L.index = v(L, Mo(L.scrollEl)), y(L);
        });
    }, Y = () => {
      D();
      var {
        texts: A,
        indexes: L
      } = m();
      l = [...L], C(e.onConfirm, A, L);
    }, X = () => {
      D();
      var {
        texts: A,
        indexes: L
      } = m();
      l = [...L], C(e.onCancel, A, L);
    };
    return ue(() => e.columns, (A) => {
      r.value = e.cascade ? V(sl(A)) : M(sl(A));
      var {
        indexes: L
      } = m();
      l = [...L];
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
      Transition: Ue,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: w,
      handleTouchmove: O,
      handleTouchend: P,
      handleTransitionend: S,
      confirm: Y,
      cancel: X,
      dt: uo,
      handleClick: h
    };
  }
});
tv.render = J0;
const Nt = tv;
var fr;
function Bn(e) {
  return new Promise((r) => {
    Bn.close();
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
Bn.close = function() {
  if (fr != null) {
    var e = fr;
    fr = null, ze().then(() => {
      e.show = !1;
    });
  }
};
Bn.Component = Nt;
ie(Nt);
ie(Nt, Bn);
var d$ = Nt;
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
} = ne("progress"), n1 = ["viewBox"], a1 = ["r", "stroke-width", "stroke-dasharray"], t1 = ["r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
function o1(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("linear-block"), [e.track, e.n("linear-background")])),
          style: q({
            height: e.toSizeUnit(e.lineWidth),
            background: e.trackColor
          })
        },
        [e.indeterminate ? (g(), T(
          "div",
          {
            key: 0,
            class: c(e.classes([e.indeterminate, e.n("linear-indeterminate")]))
          },
          [B(
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
          ), B(
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
        )) : (g(), T(
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
      ), e.label ? (g(), T(
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
    )) : ee("v-if", !0), e.mode === "circle" ? (g(), T(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("circle"), [e.indeterminate, e.n("circle-indeterminate")])),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(g(), T("svg", {
        class: c(e.n("circle-svg")),
        style: q({
          transform: "rotate(" + (e.rotate - 90) + "deg)"
        }),
        viewBox: e.circleProps.viewBox
      }, [e.track ? (g(), T("circle", {
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
      }, null, 14, a1)) : ee("v-if", !0), B("circle", {
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
      }, null, 14, t1)], 14, n1)), e.label ? (g(), T(
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
var ov = re({
  name: "VarProgress",
  props: x0,
  setup(e) {
    var r = 100, n = 20, a = 2 * Math.PI * n, t = z(() => {
      var l = R(e.value), i = l > r ? r : l, s = l > r ? r : Math.round(l);
      return {
        width: i + "%",
        roundValue: s + "%"
      };
    }), o = z(() => {
      var {
        size: l,
        lineWidth: i,
        value: s
      } = e, u = n / (1 - Le(i) / Le(l)) * 2, d = "0 0 " + u + " " + u, v = R(s) > r ? r : Math.round(R(s)), f = "" + (r - v) / r * a, m = Le(i) / Le(l) * u;
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
const Qa = ov;
ie(Qa);
var v$ = Qa, i1 = {
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
function fs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function cs(e) {
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
  n: ms,
  classes: l1
} = ne("pull-refresh"), ps = 150;
function s1(e, r) {
  var n = se("var-icon");
  return g(), T(
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
    [B(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: q(e.controlStyle)
      },
      [x(n, {
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
var iv = re({
  name: "VarPullRefresh",
  components: {
    VarIcon: Ne
  },
  props: i1,
  setup(e) {
    var r = k(0), n = k(null), a = k(null), t = k(0), o = k("-125%"), l = k("arrow-down"), i = k("default"), s = k(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var p = cs(function* ($) {
        if (l.value !== $)
          return l.value = $, new Promise((H) => {
            window.setTimeout(H, ps);
          });
      });
      return function(H) {
        return p.apply(this, arguments);
      };
    }(), y = z(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = z(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), h = z(() => Math.abs(2 * r.value)), w = z(() => i.value === "success"), O = (p) => {
      var $ = "classList" in u ? u : document.body;
      $.classList[p](ms() + "--lock");
    }, P = (p) => {
      if (r.value === 0) {
        var {
          width: $
        } = Je(a.value);
        r.value = -($ + $ * 0.25);
      }
      v = p.touches[0].clientY, f = 0, d = vn(p.target);
    }, S = (p) => {
      if (!(!y.value || !d) && !(d !== u && ha(d) > 0)) {
        var $ = ha(u);
        if (!($ > 0)) {
          var H = $ === 0, D = p.touches[0];
          f = D.clientY - v, H && f >= 0 && p.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = p.touches[0].clientY), H && nr(o.value) && o.value > r.value && O("add");
          var Y = (p.touches[0].clientY - t.value) / 2 + r.value;
          o.value = Y >= h.value ? h.value : Y, m(o.value >= h.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, M = /* @__PURE__ */ function() {
      var p = cs(function* () {
        y.value && (s.value = !0, R(o.value) >= h.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = h.value * 0.3, C(e["onUpdate:modelValue"], !0), ze(() => {
          C(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, R(e.animationDuration))), d = null);
      });
      return function() {
        return p.apply(this, arguments);
      };
    }(), V = () => {
      u = e.target ? Bs(e.target, "PullRefresh") : vn(n.value);
    }, E = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    };
    return ue(() => e.modelValue, (p) => {
      p === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, E();
      }, R(e.successDuration)));
    }), or(V), fn(n, "touchmove", S), {
      n: ms,
      classes: l1,
      ICON_TRANSITION: ps,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: P,
      touchMove: S,
      touchEnd: M,
      iconName: l,
      controlStyle: b,
      isSuccess: w
    };
  }
});
iv.render = s1;
const _a = iv;
ie(_a);
var f$ = _a, u1 = {
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
} = ne("radio");
function m1(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return g(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [B(
      "div",
      De({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Te((g(), T(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-marked",
          size: e.iconSize
        }, null, 8, ["class", "size"])]) : j(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [x(n, {
          class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
          "var-radio-cover": "",
          name: "radio-blank",
          size: e.iconSize
        }, null, 8, ["class", "size"])]), x(a, {
          hovering: !e.disabled && !e.formDisabled && e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[o, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }], [l, e.handleHovering, "desktop"]]), B(
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
    ), x(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var sv = re({
  name: "VarRadio",
  directives: {
    Ripple: qe,
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
    var r = k(!1), n = z(() => r.value === e.checkedValue), a = k(!1), {
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
    } = Or(), y = (V) => {
      ze(() => {
        var {
          validateTrigger: E,
          rules: p,
          modelValue: $
        } = e;
        v(E, V, p, $);
      });
    }, b = (V) => {
      var {
        checkedValue: E,
        onChange: p
      } = e;
      t && r.value === E || (r.value = V, C(e["onUpdate:modelValue"], r.value), C(p, r.value), t == null || t.onToggle(E), y("onChange"));
    }, h = (V) => {
      var {
        disabled: E,
        readonly: p,
        uncheckedValue: $,
        checkedValue: H,
        onClick: D
      } = e;
      s != null && s.disabled.value || E || (C(D, V), !(s != null && s.readonly.value || p) && (a.value = !0, b(n.value ? $ : H)));
    }, w = (V) => {
      var {
        checkedValue: E,
        uncheckedValue: p
      } = e;
      r.value = V === E ? E : p;
    }, O = () => {
      C(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, P = () => f(e.rules, e.modelValue), S = (V) => {
      var {
        uncheckedValue: E,
        checkedValue: p
      } = e, $ = ![E, p].includes(V);
      $ && (V = n.value ? E : p), b(V);
    };
    ue(() => e.modelValue, (V) => {
      r.value = V;
    }, {
      immediate: !0
    });
    var M = {
      sync: w,
      validate: P,
      resetValidation: m,
      reset: O
    };
    return C(o, M), C(u, M), {
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
      handleClick: h,
      toggle: S,
      reset: O,
      validate: P,
      resetValidation: m
    };
  }
});
sv.render = m1;
const xa = sv;
ie(xa);
var c$ = xa;
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
} = ne("radio-group");
function b1(e, r) {
  var n = se("var-form-details");
  return g(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), x(n, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var uv = re({
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
    } = Or(), u = z(() => o.value), d = (h) => {
      ze(() => {
        var {
          validateTrigger: w,
          rules: O,
          modelValue: P
        } = e;
        l(w, h, O, P);
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
    ue(() => e.modelValue, v), ue(() => r.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: y,
      resetValidation: s,
      errorMessage: u
    };
    return C(t, b), a(b), {
      errorMessage: o,
      n: g1,
      classes: y1,
      reset: y,
      validate: m,
      resetValidation: s
    };
  }
});
uv.render = b1;
const et = uv;
ie(et);
var m$ = et, w1 = {
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
} = ne("rate"), C1 = ["onClick"];
function S1(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = Ae("ripple"), l = Ae("hover");
  return g(), T(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: c(e.n())
      },
      [(g(!0), T(
        Ie,
        null,
        Ye(e.toNumber(e.count), (i) => Te((g(), T("div", {
          key: i,
          style: q(e.getStyle(i)),
          class: c(e.getClass(i)),
          onClick: (s) => e.handleClick(i, s)
        }, [x(n, {
          class: c(e.n("content-icon")),
          "var-rate-cover": "",
          transition: 0,
          namespace: e.namespace,
          name: e.getCurrentState(i).name,
          style: q({
            fontSize: e.toSizeUnit(e.size)
          })
        }, null, 8, ["class", "namespace", "name", "style"]), x(a, {
          hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])], 14, C1)), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), x(t, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var dv = re({
  name: "VarRate",
  components: {
    VarIcon: Ne,
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: qe,
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
    } = Xr(), s = k(-1), u = Number(e.modelValue), d = (S) => {
      var {
        count: M,
        gap: V
      } = e;
      return {
        color: f(S).color,
        marginRight: S !== R(M) ? we(V) : 0
      };
    }, v = (S) => {
      var {
        name: M,
        color: V
      } = f(S);
      return {
        [la("content")]: !0,
        [la("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [la("--error")]: a.value,
        [la("--primary")]: M !== e.emptyIcon && !V
      };
    }, f = (S) => {
      var {
        modelValue: M,
        disabled: V,
        disabledColor: E,
        color: p,
        half: $,
        emptyColor: H,
        icon: D,
        halfIcon: Y,
        emptyIcon: X
      } = e, A = p;
      return (V || r != null && r.disabled.value) && (A = E), S <= R(M) ? {
        color: A,
        name: D
      } : $ && S <= R(M) + 0.5 ? {
        color: A,
        name: Y
      } : {
        color: V || r != null && r.disabled.value ? E : H,
        name: X
      };
    }, m = (S, M) => {
      var {
        half: V,
        clearable: E
      } = e;
      if (V) {
        var {
          offsetWidth: p
        } = M.target;
        M.offsetX <= Math.floor(p / 2) && (S -= 0.5);
      }
      u === S && E && (S = 0), u = S, C(e["onUpdate:modelValue"], S);
    }, y = () => o(e.rules, R(e.modelValue)), b = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = (S, M) => {
      var {
        readonly: V,
        disabled: E,
        onChange: p
      } = e;
      V || E || r != null && r.disabled.value || r != null && r.readonly.value || (m(S, M), C(p, S), b());
    }, w = (S) => (M) => {
      s.value = S, i.value = M;
    }, O = () => {
      C(e["onUpdate:modelValue"], 0), l();
    }, P = {
      reset: O,
      validate: y,
      resetValidation: l
    };
    return C(n, P), {
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
      reset: O,
      validate: y,
      resetValidation: l,
      toSizeUnit: we,
      toNumber: R,
      n: la
    };
  }
});
dv.render = S1;
const rt = dv;
ie(rt);
var p$ = rt;
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
}, O1 = /* @__PURE__ */ T1(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), V1 = [O1];
function M1(e, r) {
  return g(), T("svg", P1, V1);
}
var vv = re({});
vv.render = M1;
const I1 = vv;
var B1 = (e) => (gn(""), e = e(), yn(), e), E1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, N1 = /* @__PURE__ */ B1(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), D1 = [N1];
function A1(e, r) {
  return g(), T("svg", E1, D1);
}
var fv = re({});
fv.render = A1;
const z1 = fv;
var L1 = (e) => (gn(""), e = e(), yn(), e), R1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, U1 = /* @__PURE__ */ L1(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), H1 = [U1];
function Y1(e, r) {
  return g(), T("svg", R1, H1);
}
var cv = re({});
cv.render = Y1;
const F1 = cv;
var {
  n: j1,
  classes: W1
} = ne("result");
function G1(e, r) {
  return g(), T(
    Ie,
    null,
    [B(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), B(
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
    ), B(
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
    ), B(
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
    ), B(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), B(
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
var mv = re({
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
}, Z1 = /* @__PURE__ */ X1(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), J1 = [Z1];
function Q1(e, r) {
  return g(), T("svg", K1, J1);
}
var pv = re({});
pv.render = Q1;
const _1 = pv;
var x1 = (e) => (gn(""), e = e(), yn(), e), ew = {
  viewBox: "-4 -4 32 32"
}, rw = /* @__PURE__ */ x1(() => /* @__PURE__ */ B(
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
  return g(), T("svg", ew, nw);
}
var hv = re({});
hv.render = aw;
const tw = hv;
var {
  n: ow,
  classes: iw
} = ne("result");
function lw(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "image", {}, () => [e.type ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [B(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: q({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(g(), Ce(ra(e.type), {
          "border-size": e.borderSize,
          animation: e.animation
        }, null, 8, ["border-size", "animation"]))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "title", {}, () => [e.title ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      le(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      le(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (g(), T(
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
var gv = re({
  name: "VarResult",
  components: {
    Info: I1,
    Success: q1,
    Warning: F1,
    Error: z1,
    Question: _1,
    Empty: tw
  },
  props: $1,
  setup(e) {
    var r = z(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(a) : "var(--result-image-size)") + " * 0.9)";
    }), n = z(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: ow,
      classes: iw,
      toNumber: R,
      toPxNum: Le,
      toSizeUnit: we,
      circleSize: r,
      borderSize: n
    };
  }
});
gv.render = lw;
const nt = gv;
ie(nt);
var h$ = nt;
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
} = ne("row");
function cw(e, r) {
  return g(), T(
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
var yv = re({
  name: "VarRow",
  props: dw,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = pp(), t = z(() => {
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
    return ue(() => a.value, o), ue(() => e.gutter, o), n(i), {
      n: vw,
      classes: fw,
      average: t,
      handleClick: l,
      padStartFlex: Qt
    };
  }
});
yv.render = cw;
const at = yv;
ie(at);
var g$ = at;
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
function mw(e) {
  return ["left", "right", "center"].includes(e);
}
var pw = $i({
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
}, xe(el, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: hw,
  classes: gw
} = ne("select"), yw = {
  key: 1
};
function bw(e, r) {
  var n = se("var-chip"), a = se("var-icon"), t = se("var-field-decorator"), o = se("var-menu"), l = se("var-form-details");
  return g(), T(
    "div",
    {
      class: c(e.n()),
      onClick: r[3] || (r[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [x(o, {
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
      menu: ce(() => [B(
        "div",
        {
          ref: "menuEl",
          class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
        },
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )]),
      default: ce(() => [x(
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
          "append-icon": ce(() => [j(e.$slots, "append-icon")]),
          default: ce(() => [B(
            "div",
            {
              class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
              style: q({
                textAlign: e.textAlign,
                color: e.textColor
              })
            },
            [B(
              "div",
              {
                class: c(e.n("label"))
              },
              [e.isEmptyModelValue ? ee("v-if", !0) : j(e.$slots, "selected", {
                key: 0
              }, () => [e.multiple ? (g(), T(
                Ie,
                {
                  key: 0
                },
                [e.chip ? (g(), T(
                  "div",
                  {
                    key: 0,
                    class: c(e.n("chips"))
                  },
                  [(g(!0), T(
                    Ie,
                    null,
                    Ye(e.labels, (i) => (g(), Ce(n, {
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
                      default: ce(() => [$e(
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
                )) : (g(), T(
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
              )) : (g(), T(
                "span",
                yw,
                le(e.label),
                1
                /* TEXT */
              ))])],
              2
              /* CLASS */
            ), e.enableCustomPlaceholder ? (g(), T(
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
            }, () => [x(a, {
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
    }, 8, ["show", "class", "popover-class", "offset-y", "disabled", "placement", "onClickOutside"]), x(l, {
      "error-message": e.errorMessage,
      onClick: r[2] || (r[2] = Tr(() => {
      }, ["stop"]))
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  );
}
var bv = re({
  name: "VarSelect",
  components: {
    VarIcon: Ne,
    VarMenu: In,
    VarChip: Wn,
    VarFieldDecorator: Hd,
    VarFormDetails: ar
  },
  props: pw,
  setup(e) {
    var r = k(!1), n = k(!1), a = z(() => e.multiple), t = z(() => e.focusColor), o = k(""), l = k([]), i = z(() => Fr(e.modelValue)), s = z(() => e.disabled || e.readonly ? "" : "pointer"), u = k(0), {
      bindForm: d,
      form: v
    } = Vr(), {
      length: f,
      options: m,
      bindOptions: y
    } = T0(), {
      errorMessage: b,
      validateWithTrigger: h,
      validate: w,
      // expose
      resetValidation: O
    } = Or(), P = k(null), S = z(() => e.variant === "outlined" ? "bottom" : "cover-top"), M = z(() => {
      var {
        hint: J,
        blurColor: Q,
        focusColor: G
      } = e;
      if (!J)
        return b.value ? "var(--field-decorator-error-color)" : r.value ? G || "var(--field-decorator-focus-color)" : Q || "var(--field-decorator-blur-color)";
    }), V = z(() => !e.hint && Fr(e.modelValue)), E = () => {
      var {
        multiple: J,
        modelValue: Q
      } = e;
      if (J) {
        var G = Q;
        l.value = G.map(H);
      }
      !J && !Fr(Q) && (o.value = H(Q)), !J && Fr(Q) && (o.value = "");
    }, p = (J) => {
      ze(() => {
        var {
          validateTrigger: Q,
          rules: G,
          modelValue: te
        } = e;
        h(Q, J, G, te);
      });
    }, $ = (J) => {
      var {
        value: Q,
        label: G
      } = J;
      return Q.value != null ? Q.value : G.value;
    }, H = (J) => {
      var Q, G, te = m.find((pe) => {
        var {
          value: Se
        } = pe;
        return Se.value === J;
      });
      return te || (te = m.find((pe) => {
        var {
          label: Se
        } = pe;
        return Se.value === J;
      })), (Q = (G = te) == null ? void 0 : G.label.value) != null ? Q : "";
    }, D = () => {
      var {
        disabled: J,
        readonly: Q,
        onFocus: G
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || J || Q || (u.value = Le(e.offsetY), r.value = !0, C(G), p("onFocus"));
    }, Y = () => {
      var {
        disabled: J,
        readonly: Q,
        onBlur: G
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || J || Q || (F(), C(G), p("onBlur"));
    }, X = (J) => {
      var {
        disabled: Q,
        readonly: G,
        multiple: te,
        onChange: pe
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Q || G)) {
        var Se = te ? m.filter((oe) => {
          var {
            selected: de
          } = oe;
          return de.value;
        }).map($) : $(J);
        C(e["onUpdate:modelValue"], Se), C(pe, Se), p("onChange"), te || F();
      }
    }, A = () => {
      var {
        disabled: J,
        readonly: Q,
        multiple: G,
        clearable: te,
        onClear: pe
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || Q || !te)) {
        var Se = G ? [] : void 0;
        C(e["onUpdate:modelValue"], Se), C(pe, Se), p("onClear");
      }
    }, L = (J) => {
      var {
        disabled: Q,
        onClick: G
      } = e;
      v != null && v.disabled.value || Q || (C(G, J), p("onClick"));
    }, I = (J) => {
      var {
        disabled: Q,
        readonly: G,
        modelValue: te,
        onClose: pe
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Q || G)) {
        var Se = te, oe = m.find((he) => {
          var {
            label: Me
          } = he;
          return Me.value === J;
        }), de = Se.filter((he) => {
          var Me;
          return he !== ((Me = oe.value.value) != null ? Me : oe.label.value);
        });
        C(e["onUpdate:modelValue"], de), C(pe, de), p("onClose");
      }
    }, N = () => {
      var {
        multiple: J,
        modelValue: Q
      } = e;
      if (J) {
        var G = Q;
        m.forEach((te) => te.sync(G.includes($(te))));
      } else
        m.forEach((te) => te.sync(Q === $(te)));
      E();
    }, ae = () => {
      u.value = Le(e.offsetY), r.value = !0, n.value = !0;
    }, F = () => {
      r.value = !1, n.value = !1;
    }, W = () => w(e.rules, e.modelValue), _ = () => {
      C(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    ue(() => e.multiple, () => {
      var {
        multiple: J,
        modelValue: Q
      } = e;
      J && !Ve(Q) && Pr("Select", "The modelValue must be an array when multiple is true");
    }), ue(() => e.modelValue, N, {
      deep: !0
    }), ue(() => f.value, N);
    var K = {
      multiple: a,
      focusColor: t,
      computeLabel: E,
      onSelect: X,
      reset: _,
      validate: W,
      resetValidation: O
    };
    return y(K), C(d, K), {
      offsetY: u,
      isFocus: r,
      showMenu: n,
      errorMessage: b,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: P,
      placement: S,
      cursor: s,
      placeholderColor: M,
      enableCustomPlaceholder: V,
      n: hw,
      classes: gw,
      handleFocus: D,
      handleBlur: Y,
      handleClear: A,
      handleClick: L,
      handleClose: I,
      reset: _,
      validate: W,
      resetValidation: O,
      focus: ae,
      blur: F
    };
  }
});
bv.render = bw;
const tt = bv;
ie(tt);
var y$ = tt, ww = {
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
} = ne("skeleton");
function kw(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (g(), T(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (g(), T(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (g(), T(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: q({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [B(
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
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), T(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (g(), T(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: q({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [B(
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
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (g(), T(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (g(), T(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: q({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [B(
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
          )) : ee("v-if", !0), (g(!0), T(
            Ie,
            null,
            Ye(e.toNumber(e.rows), (n, a) => (g(), T(
              "div",
              {
                class: c(e.n("row")),
                key: n,
                style: q({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [B(
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
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (g(), T(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: q({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [B(
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
var wv = re({
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
const ot = wv;
ie(ot);
var b$ = ot;
function $w(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ge = /* @__PURE__ */ function(e) {
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
  n: hs,
  classes: Pw
} = ne("slider"), Ow = ["onTouchstart"];
function Vw(e, r) {
  var n = se("var-hover-overlay"), a = se("var-form-details"), t = Ae("hover");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(e.direction), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: r[0] || (r[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [B(
        "div",
        {
          class: c(e.n(e.direction + "-track"))
        },
        [B(
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
        ), B(
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
      ), (g(!0), T(
        Ie,
        null,
        Ye(e.thumbList, (o) => (g(), T("div", {
          class: c(e.n(e.direction + "-thumb")),
          key: o.enumValue,
          style: q(e.thumbStyle(o)),
          onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
        }, [j(e.$slots, "button", {
          currentValue: o.text
        }, () => [Te(B(
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
        ), [[t, (l) => e.hover(l, o), "desktop"]]), B(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
            style: q({
              background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
            })
          },
          [x(n, {
            hovering: o.hovering
          }, null, 8, ["hovering"])],
          6
          /* CLASS, STYLE */
        ), B(
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
          [B(
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
    ), x(a, {
      "error-message": e.errorMessage,
      class: c(e.n("form")),
      "var-slider-cover": ""
    }, null, 8, ["error-message", "class"])],
    2
    /* CLASS */
  );
}
var Cv = re({
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
    }), m = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = k(null), b = k(0), h = k(!1), w = Re({
      [Ge.First]: f(),
      [Ge.Second]: f()
    }), O = z(() => R(e.max) - R(e.min)), P = z(() => b.value / O.value * R(e.step)), S = z(() => {
      var {
        modelValue: oe,
        range: de
      } = e, he = [];
      return de && Ve(oe) ? he = [{
        value: X(oe[0]),
        enumValue: Ge.First,
        text: A(oe[0]),
        hovering: ua(i),
        handleHovering: s
      }, {
        value: X(oe[1]),
        enumValue: Ge.Second,
        text: A(oe[1]),
        hovering: ua(u),
        handleHovering: d
      }] : nr(oe) && (he = [{
        value: X(oe),
        enumValue: Ge.First,
        text: A(oe),
        hovering: ua(i),
        handleHovering: s
      }]), he;
    }), M = z(() => {
      var {
        activeColor: oe,
        range: de,
        modelValue: he
      } = e, Me = de && Ve(he) ? X(Math.min(he[0], he[1])) : 0, Qe = de && Ve(he) ? X(Math.max(he[0], he[1])) - Me : X(he);
      return p.value ? {
        left: "0px",
        height: Qe + "%",
        bottom: Me + "%",
        background: oe
      } : {
        top: "0px",
        width: Qe + "%",
        left: Me + "%",
        background: oe
      };
    }), V = z(() => e.disabled || (n == null ? void 0 : n.disabled.value)), E = z(() => e.readonly || (n == null ? void 0 : n.readonly.value)), p = z(() => e.direction === "vertical"), $, H = (oe) => {
      var de = oe.currentTarget;
      return de ? p.value ? b.value - (oe.clientY - Je(de).top) : oe.clientX - uf(de) : 0;
    }, D = (oe) => {
      var de = p.value ? "bottom" : "left";
      return {
        [de]: oe.value + "%",
        zIndex: w[oe.enumValue].active ? 1 : void 0
      };
    }, Y = (oe) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[oe].active, X = (oe) => {
      var {
        min: de,
        max: he
      } = e;
      return oe < R(de) ? 0 : oe > R(he) ? 100 : (oe - R(de)) / O.value * 100;
    }, A = (oe) => {
      if (!nr(oe))
        return 0;
      var de = oe;
      de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max));
      var he = parseInt("" + de, 10) === de;
      return he ? de : R(de.toPrecision(5));
    }, L = (oe, de) => {
      V.value || de.handleHovering(oe);
    }, I = (oe, de) => {
      var he = [], {
        step: Me,
        range: Qe,
        modelValue: Xe,
        onChange: je,
        min: We
      } = e, ve = R(Me), ke = Math.round(oe / P.value), ye = ke * ve + R(We), Pe = w[de].percentValue * ve + R(We);
      if (w[de].percentValue = ke, Qe && Ve(Xe) && (he = de === Ge.First ? [ye, Xe[1]] : [Xe[0], ye]), Pe !== ye) {
        var Oe = Qe ? he.map((He) => A(He)) : A(ye);
        C(je, Oe), C(e["onUpdate:modelValue"], Oe), m();
      }
    }, N = (oe) => {
      if (!e.range)
        return Ge.First;
      var de = w[Ge.First].percentValue * P.value, he = w[Ge.Second].percentValue * P.value, Me = Math.abs(oe - de), Qe = Math.abs(oe - he);
      return Me <= Qe ? Ge.First : Ge.Second;
    }, ae = () => {
      document.addEventListener("touchmove", _, {
        passive: !1
      }), document.addEventListener("touchend", K), document.addEventListener("touchcancel", K);
    }, F = () => {
      document.removeEventListener("touchmove", _), document.removeEventListener("touchend", K), document.removeEventListener("touchcancel", K);
    }, W = (oe, de) => {
      if (b.value || (b.value = y.value.offsetWidth), V.value || (w[de].active = !0), $ = de, ae(), !(V.value || E.value)) {
        C(e.onStart), h.value = !0;
        var {
          clientX: he,
          clientY: Me
        } = oe.touches[0];
        w[de].startPosition = p.value ? Me : he;
      }
    }, _ = (oe) => {
      if (oe.preventDefault(), !(V.value || E.value || !h.value)) {
        var {
          startPosition: de,
          currentOffset: he
        } = w[$], {
          clientX: Me,
          clientY: Qe
        } = oe.touches[0], Xe = (p.value ? de - Qe : Me - de) + he;
        Xe <= 0 ? Xe = 0 : Xe >= b.value && (Xe = b.value), I(Xe, $);
      }
    }, K = () => {
      F();
      var {
        range: oe,
        modelValue: de,
        onEnd: he,
        step: Me,
        min: Qe
      } = e;
      if (V.value || (w[$].active = !1), !(V.value || E.value)) {
        var Xe = [];
        w[$].currentOffset = w[$].percentValue * P.value;
        var je = w[$].percentValue * R(Me) + R(Qe);
        oe && Ve(de) && (Xe = $ === Ge.First ? [je, de[1]] : [de[0], je]), C(he, oe ? Xe : je), h.value = !1;
      }
    }, J = (oe) => {
      if (!(V.value || E.value) && !oe.target.closest("." + hs("thumb"))) {
        var de = H(oe), he = N(de);
        $ = he, I(de, he), K();
      }
    }, Q = () => {
      var oe = R(e.step);
      return isNaN(oe) ? (cl("Slider", 'type of prop "step" should be Number'), !1) : oe < 0 ? (cl("Slider", '"step" should be > 0'), !1) : !0;
    }, G = () => {
      var {
        range: oe,
        modelValue: de
      } = e;
      return oe && !Ve(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !oe && Ve(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : oe && Ve(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, te = function(oe, de) {
      oe === void 0 && (oe = e.modelValue), de === void 0 && (de = R(e.step));
      var he = (Me) => {
        var {
          min: Qe,
          max: Xe
        } = e;
        return Me < R(Qe) ? 0 : Me > R(Xe) ? O.value / de : (Me - R(Qe)) / de;
      };
      e.range && Ve(oe) ? (w[Ge.First].percentValue = he(oe[0]), w[Ge.First].currentOffset = w[Ge.First].percentValue * P.value, w[Ge.Second].percentValue = he(oe[1]), w[Ge.Second].currentOffset = w[Ge.Second].percentValue * P.value) : nr(oe) && (w[Ge.First].currentOffset = he(oe) * P.value);
    }, pe = () => {
      var oe = e.range ? [0, 0] : 0;
      C(e["onUpdate:modelValue"], oe), l();
    }, Se = {
      reset: pe,
      validate: v,
      resetValidation: l
    };
    return C(r, Se), ue([() => e.modelValue, () => e.step], (oe) => {
      var [de, he] = oe;
      !Q() || !G() || h.value || te(de, R(he));
    }), ue(b, () => te()), or(() => {
      !Q() || !G() || (b.value = y.value[p.value ? "offsetHeight" : "offsetWidth"]);
    }), lo(() => {
      F();
    }), {
      n: hs,
      classes: Pw,
      Thumbs: Ge,
      sliderEl: y,
      getFillStyle: M,
      isDisabled: V,
      isVertical: p,
      thumbStyle: D,
      errorMessage: a,
      thumbsProps: w,
      thumbList: S,
      hover: L,
      multiplySizeUnit: ur,
      toNumber: R,
      showLabel: Y,
      start: W,
      move: _,
      end: K,
      click: J
    };
  }
});
Cv.render = Vw;
const it = Cv;
ie(it);
var w$ = it;
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
function Mw(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function Iw(e) {
  return al.includes(e);
}
var Sv = {
  type: {
    type: String,
    validator: Iw
  },
  position: {
    type: String,
    default: "top",
    validator: Mw
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
  loadingColor: Ti({}, xe(on, "color"), {
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
} = ne("snackbar"), Nw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Dw(e, r) {
  var n = se("var-icon"), a = se("var-loading");
  return Te((g(), T(
    "div",
    {
      class: c(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [B(
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
      ), B(
        "div",
        {
          class: c([e.n("icon")])
        },
        [e.iconName ? (g(), Ce(n, {
          key: 0,
          name: e.iconName
        }, null, 8, ["name"])) : ee("v-if", !0), e.type === "loading" ? (g(), Ce(a, {
          key: 1,
          type: e.loadingType,
          size: e.loadingSize,
          color: e.loadingColor,
          radius: e.loadingRadius
        }, null, 8, ["type", "size", "color", "radius"])) : ee("v-if", !0), j(e.$slots, "icon")],
        2
        /* CLASS */
      ), B(
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
var kv = re({
  name: "VarSnackbarCore",
  components: {
    VarLoading: cn,
    VarIcon: Ne
  },
  props: Sv,
  setup(e) {
    var r = k(null), {
      zIndex: n
    } = Vt(() => e.show, 1);
    co(() => e.show, () => e.lockScroll);
    var a = z(() => e.type === "loading" || e.forbidClick), t = z(() => e.type ? Nw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && C(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ue(() => e.show, (l) => {
      l ? (C(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), C(e.onClose));
    }), ue(() => e._update, () => {
      clearTimeout(r.value), o();
    }), or(() => {
      e.show && (C(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: al,
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
} = ne("snackbar");
function zw(e, r) {
  var n = se("var-snackbar-core");
  return g(), Ce(Jr, {
    to: e.teleport === !1 ? void 0 : e.teleport,
    disabled: e.disabled || e.teleport === !1
  }, [x(Ue, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: ce(() => [x(n, De(e.$props, {
      class: e.n("transition")
    }), {
      icon: ce(() => [j(e.$slots, "icon")]),
      action: ce(() => [j(e.$slots, "action")]),
      default: ce(() => [j(e.$slots, "default", {}, () => [$e(
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
var Tv = re({
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
const Po = Tv;
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
function Lw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var al = ["loading", "success", "warning", "info", "error"], gs = 0, Pi = !1, Pv, _n = !1, Ov = {
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
}, $r = Re([]), tl = Ov, Rw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Ao = (e) => () => na(e) ? e() : e, Uw = {
  setup() {
    return () => {
      var e = $r.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), _n && (a.position = "top");
        var l = _n ? "relative" : "absolute", i = lt({
          position: l
        }, Gw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Ao(s),
          icon: Ao(u),
          action: Ao(d)
        };
        return x($v, De(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return x(rf, De(Rw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: Hw,
        onAfterLeave: Yw
      }), Lw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Zr = function(e) {
  var r = jw(e), n = Re(lt({}, tl, r));
  n.show = !0, Pi || (Pi = !0, Pv = ta(Uw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: gs++,
    reactiveSnackOptions: n
  };
  if (a === 0 || _n)
    Fw(t);
  else {
    var o = "update-" + gs;
    Ww(n, o);
  }
  return {
    clear() {
      !_n && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
al.forEach((e) => {
  Zr[e] = (r) => (Ei(r) ? r.type = e : r = {
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
  tl = Ov;
};
function Hw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === R(r));
  n && C(n.reactiveSnackOptions.onOpened);
}
function Yw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === R(r));
  n && (n.animationEnd = !0, C(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (C(Pv), $r = Re([]), Pi = !1);
}
function Fw(e) {
  $r.push(e);
}
function jw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function Ww(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = lt({}, n.reactiveSnackOptions, e), n._update = r;
}
function Gw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Zr.Component = Po;
ie(Po);
ie(Po, Zr);
var C$ = Po;
const Oi = Zr;
var Vv = (e) => ["mini", "small", "normal", "large"].includes(e), qw = (e) => Vv(e) || Ve(e) || nr(e) || Fe(e), Xw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Kw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Zw = {
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
  n: zo,
  classes: Qw
} = ne("space");
const st = re({
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
      } = e, v = (t = C(n.default)) != null ? t : [], f = Vv(d), [m, y] = a(d, f);
      v = Us(v);
      var b = v.length - 1, h = v.map((w, O) => {
        var P = Jw(m, y, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: b
        });
        return x("div", {
          style: {
            margin: P
          }
        }, [w]);
      });
      return x("div", {
        class: Qw(zo(), zo("$--box"), [o, zo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Qt(l),
          alignItems: Qt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [h]);
    };
  }
});
ie(st);
var S$ = st, _w = {
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
}, Mv = Symbol("STEPS_BIND_STEP_KEY");
function xw() {
  var {
    bindChildren: e,
    childProviders: r
  } = lr(Mv);
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
  } = ir(Mv);
  return n || Pr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: rC,
  classes: nC
} = ne("step"), aC = {
  key: 3
};
function tC(e, r) {
  var n = se("var-icon");
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [B(
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
        [e.isActive ? (g(), Ce(n, {
          key: 0,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.activeIcon
        }, null, 8, ["class", "name"])) : e.isCurrent && e.currentIcon ? (g(), Ce(n, {
          key: 1,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.currentIcon
        }, null, 8, ["class", "name"])) : e.inactiveIcon ? (g(), Ce(n, {
          key: 2,
          class: c(e.n("icon")),
          "var-step-cover": "",
          name: e.inactiveIcon
        }, null, 8, ["class", "name"])) : (g(), T(
          "span",
          aC,
          le(e.index + 1),
          1
          /* TEXT */
        ))],
        6
        /* CLASS, STYLE */
      ), B(
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
      ), B(
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
var Iv = re({
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
    } = r, s = z(() => a.value === e.value), u = z(() => e.value !== -1 && R(a.value) > e.value), d = {
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
Iv.render = tC;
const ut = Iv;
ie(ut);
var k$ = ut;
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
} = ne("steps");
function sC(e, r) {
  return g(), T(
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
var Bv = re({
  name: "VarSteps",
  props: iC,
  setup(e) {
    var r = z(() => e.active), n = z(() => e.activeColor), a = z(() => e.inactiveColor), t = z(() => e.direction), {
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
const dt = Bv;
ie(dt);
var $$ = dt, uC = {
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
} = ne("style-provider"), vC = re({
  name: "VarStyleProvider",
  props: uC,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => Ps(e.tag, {
      class: dC(),
      style: Ls(e.styleVars)
    }, C(n.default));
  }
});
const Oo = vC;
var Lo = [];
function vt(e) {
  Lo.forEach((n) => document.documentElement.style.removeProperty(n)), Lo.length = 0;
  var r = Ls(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Lo.push(a);
  });
}
vt.Component = Oo;
ie(Oo);
ie(Oo, vt);
var T$ = Oo, fC = {
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
} = ne("switch"), pC = (e) => (gn(""), e = e(), yn(), e), hC = /* @__PURE__ */ pC(() => /* @__PURE__ */ B(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ B("circle", {
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
  return Te((g(), T(
    "div",
    {
      class: c(e.n())
    },
    [B(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: r[0] || (r[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: q(e.styleComputed.switch)
      },
      [B(
        "div",
        {
          style: q(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Te((g(), T(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [B(
          "div",
          {
            style: q(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (g(), T(
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
        ), x(n, {
          hovering: e.hovering
        }, null, 8, ["hovering"])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), x(a, {
      "error-message": e.errorMessage
    }, null, 8, ["error-message"])],
    2
    /* CLASS */
  )), [[o, e.hover, "desktop"]]);
}
var Ev = re({
  name: "VarSwitch",
  components: {
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  directives: {
    Ripple: qe,
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
    } = Xr(), u = () => o(e.rules, e.modelValue), d = () => ze(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = z(() => {
      var {
        size: w,
        modelValue: O,
        color: P,
        closeColor: S,
        loadingColor: M,
        activeValue: V
      } = e;
      return {
        handle: {
          width: ur(w),
          height: ur(w),
          backgroundColor: O === V ? P : S,
          color: M
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
    }), f = z(() => ur(e.size, 0.8)), m = (w) => {
      var {
        onClick: O,
        onChange: P,
        disabled: S,
        loading: M,
        readonly: V,
        modelValue: E,
        activeValue: p,
        inactiveValue: $,
        "onUpdate:modelValue": H
      } = e;
      if (C(O, w), !(S || M || V || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var D = E === p ? $ : p;
        C(P, D), C(H, D), d();
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
      n: cC,
      classes: mC,
      multiplySizeUnit: ur,
      switchActive: m,
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
Ev.render = yC;
const ft = Ev;
ie(ft);
var P$ = ft, bC = {
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
  n: Ft,
  classes: SC
} = ne("tab");
function kC(e, r) {
  var n = Ae("ripple");
  return Te((g(), T(
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
var Dv = re({
  name: "VarTab",
  directives: {
    Ripple: qe
  },
  props: bC,
  setup(e) {
    var r = k(null), n = z(() => e.name), a = z(() => e.disabled), t = z(() => r.value), {
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
      resize: y
    } = l, b = {
      name: n,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var h = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : h() ? d.value : v.value, O = () => e.disabled ? Ft("$-tab--disabled") : h() ? Ft("$-tab--active") : Ft("$-tab--inactive"), P = (S) => {
      var {
        disabled: M,
        name: V,
        onClick: E
      } = e;
      M || (C(E, V ?? o.value, S), s(b));
    };
    return ue(() => e.name, y), ue(() => e.disabled, y), {
      n: Ft,
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
const ct = Dv;
ie(ct);
var O$ = ct, $C = {
  name: {
    type: [String, Number]
  }
}, {
  n: TC,
  classes: PC
} = ne("tab-item");
function OC(e, r) {
  var n = se("var-swipe-item");
  return g(), Ce(n, {
    class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
    "var-tab-item-cover": ""
  }, {
    default: ce(() => [j(e.$slots, "default")]),
    _: 3
    /* FORWARDED */
  }, 8, ["class"]);
}
var Av = re({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Vn
  },
  props: $C,
  setup(e) {
    var r = k(!1), n = z(() => e.name), {
      index: a,
      bindTabsItems: t
    } = n0(), {
      bindLists: o
    } = a0(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: z(() => r.value),
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
const mt = Av;
ie(mt);
var V$ = mt, VC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: MC,
  classes: IC
} = ne("table");
function BC(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 1), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: c(e.n("main"))
      },
      [B(
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
    ), e.$slots.footer ? (g(), T(
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
var zv = re({
  name: "VarTable",
  props: VC,
  setup() {
    return {
      toSizeUnit: we,
      n: MC,
      classes: IC,
      formatElevation: pr
    };
  }
});
zv.render = BC;
const pt = zv;
ie(pt);
var M$ = pt;
function ys(e) {
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
  stickyCssMode: xe(Kt, "cssMode"),
  stickyZIndex: xe(Kt, "zIndex"),
  offsetTop: xe(Kt, "offsetTop"),
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
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
function ws(e) {
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
  n: AC,
  classes: zC
} = ne("tabs");
function LC(e, r) {
  return g(), Ce(ra(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: ce(() => [B(
      "div",
      De({
        class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), e.formatElevation(e.elevation, 4), [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
        style: {
          background: e.color
        }
      }, e.$attrs),
      [B(
        "div",
        {
          ref: "scrollerEl",
          class: c(e.classes(e.n("tab-wrap"), [e.localScrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
        },
        [j(e.$slots, "default"), B(
          "div",
          {
            class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
            style: q({
              width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
              height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
              transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
            })
          },
          [B(
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
var Lv = re({
  name: "VarTabs",
  components: {
    VarSticky: Mn
  },
  inheritAttrs: !1,
  props: DC,
  setup(e) {
    var r = k("0px"), n = k("0px"), a = k("0px"), t = k("0px"), o = k(!1), l = k(null), i = z(() => e.active), s = z(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = z(() => e.activeColor), d = z(() => e.inactiveColor), v = z(() => e.disabledColor), f = z(() => e.itemDirection), m = k(null), {
      tabList: y,
      bindTabList: b,
      length: h
    } = wC(), w = (D) => {
      var Y, X = (Y = D.name.value) != null ? Y : D.index.value, {
        active: A,
        onChange: L,
        onClick: I
      } = e;
      C(e["onUpdate:active"], X), C(I, X), X !== A && C(L, X);
    }, O = () => y.find((D) => {
      var {
        name: Y
      } = D;
      return e.active === Y.value;
    }), P = (D) => y.find((Y) => {
      var {
        index: X
      } = Y;
      return (D ?? e.active) === X.value;
    }), S = () => {
      if (h.value !== 0) {
        var {
          active: D
        } = e;
        if (nr(D)) {
          var Y = dn(D, 0, h.value - 1);
          return C(e["onUpdate:active"], Y), P(Y);
        }
      }
    }, M = () => {
      o.value = e.scrollable === "always" || y.length >= 5;
    }, V = (D) => {
      var {
        element: Y
      } = D, X = Y.value;
      X && (e.layoutDirection === "horizontal" ? (r.value = X.offsetWidth + "px", a.value = X.offsetLeft + "px") : (n.value = X.offsetHeight + "px", t.value = X.offsetTop + "px"));
    }, E = (D) => {
      var {
        element: Y
      } = D;
      if (o.value) {
        var X = l.value, A = Y.value;
        if (e.layoutDirection === "horizontal") {
          var L = A.offsetLeft + A.offsetWidth / 2 - X.offsetWidth / 2;
          ga(X, {
            left: L,
            animation: Uo
          });
        } else {
          var I = A.offsetTop + A.offsetHeight / 2 - X.offsetHeight / 2;
          ga(X, {
            top: I,
            animation: Uo
          });
        }
      }
    }, p = () => {
      var D = O() || P() || S();
      !D || D.disabled.value || (M(), V(D), E(D));
    }, $ = /* @__PURE__ */ function() {
      var D = ws(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return D.apply(this, arguments);
      };
    }(), H = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: p,
      onTabClick: w
    };
    return b(H), ue(() => h.value, /* @__PURE__ */ ws(function* () {
      yield Dr(), p();
    })), ue(() => e.active, p), ue(() => e.scrollable, p), hn(p), Pt(p), {
      stickyComponent: m,
      indicatorWidth: r,
      indicatorHeight: n,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Ue,
      toSizeUnit: we,
      n: AC,
      classes: zC,
      resize: p,
      resizeSticky: $,
      formatElevation: pr
    };
  }
});
Lv.render = LC;
const ht = Lv;
ie(ht);
var I$ = ht, RC = {
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
function Cs(e, r, n, a, t, o, l) {
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
  n: HC
} = ne("tabs-items");
function YC(e, r) {
  var n = se("var-swipe");
  return g(), Ce(n, {
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
var Rv = re({
  name: "VarTabsItems",
  components: {
    VarSwipe: On
  },
  props: RC,
  setup(e) {
    var r = k(null), {
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
    return a({}), ue(() => e.active, s), ue(() => t.value, /* @__PURE__ */ UC(function* () {
      yield Dr(), s(e.active);
    })), {
      swipe: r,
      n: HC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Rv.render = YC;
const gt = Rv;
ie(gt);
var B$ = gt;
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
const OS = Vi({
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
var Sr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], dr = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Ss = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function MS(e) {
  return ["ampm", "24hr"].includes(e);
}
var IS = {
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
    validator: MS
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
}, Uv = (e, r) => e === "24hr" || r === "am", ol = (e, r, n) => {
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
}, Hv = (e) => {
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
      hour: O,
      minute: P
    } = cr(i), {
      hour: S,
      minute: M
    } = cr(s);
    f = S === v && a < M || O === v && a > P;
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
  } = ol(t, o, l), m = !1, y = !1;
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
      hour: O,
      minute: P,
      second: S
    } = cr(u);
    m = O === f && P > i || P === i && a > S;
  }
  if (s && u) {
    var {
      hour: M,
      minute: V,
      second: E
    } = cr(s), {
      hour: p,
      minute: $,
      second: H
    } = cr(u);
    m = M === f && V < i || p === f && $ > i || M === f && V === i && a > E || p === f && $ === i && a < H;
  }
  return (r = e.allowedTime) != null && r.seconds && (y = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || y;
}, {
  n: BS,
  classes: ES
} = ne("time-picker");
function NS(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n("clock"))
    },
    [B(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (g(!0), T(
      Ie,
      null,
      Ye(e.timeScales, (n, a) => (g(), T(
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
    )), e.format === "24hr" && e.type === "hour" ? (g(), T(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(g(!0), T(
        Ie,
        null,
        Ye(e.hours24, (n, a) => (g(), T(
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
var Fv = re({
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
    } = r, a = k(null), t = k([]), o = k([]), l = z(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = z(() => {
      if (e.rad !== void 0) {
        var h = e.rad / 30;
        return h >= 0 ? h : h + 12;
      }
    }), s = z(() => e.type === "hour" ? Sr : Ss), u = (h, w) => {
      var O;
      h = (O = h) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var P = e.type === "minute" ? Hv : Yv, S = {
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
      return w && e.type === "minute" && Reflect.deleteProperty(S, "minute"), P(S);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var h = e.isInner ? dr[i.value] : s.value[i.value];
      return s.value === Ss ? u() ? "#bdbdbd" : e.color : f(h) ? "#bdbdbd" : e.color;
    }, v = (h, w) => w ? i.value === h && e.isInner : i.value === h && (!e.isInner || e.type !== "hour"), f = (h) => {
      if (e.type === "hour") {
        if (Uv(e.format, e.ampm))
          return t.value.includes(h);
        var w = Sr.findIndex((O) => O === h);
        return o.value.includes(w);
      }
      return u(h, !0);
    }, m = (h, w, O) => {
      var P = 2 * Math.PI / 12 * h - Math.PI / 2, S = 50 * (1 + Math.cos(P)), M = 50 * (1 + Math.sin(P)), V = () => v(h, O) ? f(w) ? {
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
        color: p
      } = V();
      return {
        left: S + "%",
        top: M + "%",
        backgroundColor: E,
        color: p
      };
    }, y = () => {
      var {
        width: h,
        height: w
      } = Je(a.value);
      return {
        width: h,
        height: w
      };
    }, b = () => {
      if (i.value !== void 0) {
        var h = e.ampm === "am" ? Sr : dr;
        return kn(h[i.value], 2, "0");
      }
    };
    return ue([i, () => e.isInner], (h, w) => {
      var [O, P] = h, [S, M] = w, V = O === S && P === M;
      if (!(V || e.type !== "hour" || i.value === void 0)) {
        var E = P ? dr[i.value] : b(), p = e.useSeconds ? ":" + e.time.second : "", $ = E + ":" + e.time.minute + p;
        e.preventNextUpdate || n("update", $), n("change-prevent-update");
      }
    }), ue(() => e.rad, (h, w) => {
      if (!(e.type === "hour" || h === void 0 || w === void 0)) {
        var O = h / 6 >= 0 ? h / 6 : h / 6 + 60, P = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (O !== P) {
          var S, {
            hourStr: M
          } = ol(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var V = fe().minute(O).format("mm"), E = e.useSeconds ? ":" + e.time.second : "";
            S = M + ":" + V + E;
          }
          if (e.type === "second") {
            var p = fe().second(O).format("ss"), $ = e.useSeconds ? ":" + p : "";
            S = M + ":" + e.time.minute + $;
          }
          n("update", S);
        }
      }
    }), ue([() => e.max, () => e.min, () => e.allowedTime], (h) => {
      var [w, O, P] = h;
      if (t.value = [], w && !O) {
        var {
          hour: S
        } = cr(w), M = Sr.filter((N) => R(N) > S), V = dr.filter((N) => R(N) > S);
        t.value = [...M, ...V];
      }
      if (!w && O) {
        var {
          hour: E
        } = cr(O), p = Sr.filter((N) => R(N) < E), $ = dr.filter((N) => R(N) < E);
        t.value = [...p, ...$];
      }
      if (w && O) {
        var {
          hour: H
        } = cr(w), {
          hour: D
        } = cr(O), Y = Sr.filter((N) => R(N) < D || R(N) > H), X = dr.filter((N) => R(N) < D || R(N) > H);
        t.value = [...Y, ...X];
      }
      if (P != null && P.hours) {
        var {
          hours: A
        } = P, L = Sr.filter((N) => !A(R(N))), I = dr.filter((N) => !A(R(N)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...L, ...I])];
      }
      o.value = t.value.map((N) => dr.findIndex((ae) => N === ae)).filter((N) => N >= 0);
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
      getSize: y,
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
} = ne("time-picker"), LS = (e) => (gn(""), e = e(), yn(), e), RS = /* @__PURE__ */ LS(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), US = {
  key: 0
};
function HS(e, r) {
  var n = se("clock");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [B(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [B(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [B(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: r[0] || (r[0] = (a) => e.checkPanel("hour"))
          },
          le(e.time.hour),
          3
          /* TEXT, CLASS */
        ), RS, B(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          le(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (g(), T("span", US, ":")) : ee("v-if", !0), e.useSeconds ? (g(), T(
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
      ), e.format === "ampm" ? (g(), T(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [B(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: r[3] || (r[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), B(
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
    ), B(
      "div",
      {
        class: c(e.n("body"))
      },
      [B(
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
        [x(Ue, {
          name: e.n() + "-panel-fade"
        }, {
          default: ce(() => [(g(), Ce(n, {
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
var jv = re({
  name: "VarTimePicker",
  components: {
    Clock: DS
  },
  props: IS,
  setup(e) {
    var r = k(null), n = k(null), a = k(null), t = k(!1), o = k(!1), l = k(!1), i = k(!1), s = k(!1), u = k(void 0), d = k(0), v = k(0), f = k("hour"), m = k("am"), y = k(!1), b = k(!1), h = k({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Re({
      x: 0,
      y: 0
    }), O = Re({
      x: [],
      y: []
    }), P = z(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (W) => {
      C(e["onUpdate:modelValue"], W), C(e.onChange, W);
    }, M = (W) => W * 57.29577951308232, V = (W) => {
      i.value = !1, b.value = !1, f.value = W;
    }, E = (W) => {
      var {
        disableHour: _
      } = a.value, K = Sr.findIndex((G) => R(G) === R(h.value.hour)), J = W === "am" ? Sr : dr, Q = [...J.slice(K), ...J.slice(0, K)];
      return Q.find((G, te) => (o.value = te !== 0, !_.includes(G)));
    }, p = (W) => {
      if (!e.readonly) {
        m.value = W;
        var _ = E(W);
        if (_) {
          var K = e.useSeconds ? ":" + h.value.second : "", J = kn(_, 2, "0") + ":" + h.value.minute + K;
          S(J);
        }
      }
    }, $ = (W, _) => {
      var K = W >= O.x[0] && W <= O.x[1], J = _ >= O.y[0] && _ <= O.y[1];
      return K && J;
    }, H = (W) => {
      var _ = e.format === "24hr" ? "HH" : "hh", {
        hour: K,
        minute: J,
        second: Q
      } = cr(W);
      return {
        hour: fe().hour(K).format(_),
        minute: fe().minute(J).format("mm"),
        second: fe().second(Q).format("ss")
      };
    }, D = (W) => {
      var _ = W / 30;
      return _ >= 0 ? _ : _ + 12;
    }, Y = () => {
      var {
        width: W,
        height: _
      } = a.value.getSize(), K = w.x - W / 2 - 8, J = w.x + W / 2 + 8, Q = w.y - _ / 2 - 8, G = w.y + _ / 2 + 8;
      return {
        rangeXMin: K,
        rangeXMax: J,
        rangeYMin: Q,
        rangeYMax: G
      };
    }, X = (W, _, K) => {
      var {
        disableHour: J
      } = a.value;
      l.value = $(W, _);
      var Q = Math.round(K / 30) * 30 + 90, G = D(Q), te = t.value ? Sr[G] : dr[G];
      if (J.includes(te) || (t.value = e.format === "24hr" ? $(W, _) : !1), t.value === l.value) {
        var pe = t.value || m.value === "pm" ? dr[G] : Sr[G];
        y.value = J.includes(pe), !y.value && (u.value = Q, i.value = !0);
      }
    }, A = (W) => {
      var {
        disableHour: _
      } = a.value, K = Math.round(W / 6) * 6 + 90, J = K / 6 >= 0 ? K / 6 : K / 6 + 60, Q = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        max: e.max,
        min: e.min,
        disableHour: _,
        allowedTime: e.allowedTime
      };
      b.value = Hv(Q), !b.value && (d.value = K, s.value = !0);
    }, L = (W) => {
      var {
        disableHour: _
      } = a.value, K = Math.round(W / 6) * 6 + 90, J = K / 6 >= 0 ? K / 6 : K / 6 + 60, Q = {
        time: J,
        format: e.format,
        ampm: m.value,
        hour: h.value.hour,
        minute: R(h.value.minute),
        max: e.max,
        min: e.min,
        disableHour: _,
        allowedTime: e.allowedTime
      };
      Yv(Q) || (v.value = K);
    }, I = () => {
      var {
        left: W,
        top: _,
        width: K,
        height: J
      } = Je(r.value);
      if (w.x = W + K / 2, w.y = _ + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Q,
          rangeXMax: G,
          rangeYMin: te,
          rangeYMax: pe
        } = Y();
        O.x = [Q, G], O.y = [te, pe];
      }
    }, N = (W) => {
      if (W.preventDefault(), !e.readonly) {
        I();
        var {
          clientX: _,
          clientY: K
        } = W.touches[0], J = _ - w.x, Q = K - w.y, G = Math.round(M(Math.atan2(Q, J)));
        f.value === "hour" ? X(_, K, G) : f.value === "minute" ? A(G) : L(G);
      }
    }, ae = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, F = () => {
      o.value = !1;
    };
    return ue(() => e.modelValue, (W) => {
      if (W) {
        var {
          hour: _,
          minute: K,
          second: J
        } = cr(W), Q = fe().hour(_).format("hh"), G = fe().hour(_).format("HH"), te = fe().minute(K).format("mm"), pe = fe().second(J).format("ss");
        u.value = (Q === "12" ? 0 : R(Q)) * 30, d.value = R(te) * 6, v.value = R(pe) * 6, h.value = H(W), e.format !== "24hr" && (m.value = kn("" + _, 2, "0") === G && dr.includes(G) ? "pm" : "am"), t.value = e.format === "24hr" && dr.includes(G);
      }
    }, {
      immediate: !0
    }), {
      n: AS,
      classes: zS,
      getRad: P,
      time: h,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: N,
      checkPanel: V,
      checkAmpm: p,
      end: ae,
      update: S,
      changePreventUpdate: F,
      formatElevation: pr
    };
  }
});
jv.render = HS;
const yt = jv;
ie(yt);
var N$ = yt, YS = {
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
function ks(e, r, n, a, t, o, l) {
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
  n: FS,
  classes: jS
} = ne("uploader"), WS = 0, GS = ["onClick"], qS = ["onClick"], XS = ["src", "alt"], KS = ["multiple", "accept", "capture", "disabled"], ZS = ["src"];
function JS(e, r) {
  var n = se("var-icon"), a = se("var-hover-overlay"), t = se("var-form-details"), o = se("var-popup"), l = Ae("ripple"), i = Ae("hover");
  return g(), T(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(g(!0), T(
        Ie,
        null,
        Ye(e.files, (s) => Te((g(), T("div", {
          class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
          key: s.id,
          onClick: (u) => e.preview(s)
        }, [B(
          "div",
          {
            class: c(e.n("file-name"))
          },
          le(s.name || s.url),
          3
          /* TEXT, CLASS */
        ), e.removable ? (g(), T("div", {
          key: 0,
          class: c(e.n("file-close")),
          onClick: Tr((u) => e.handleRemove(s), ["stop"])
        }, [x(n, {
          class: c(e.n("file-close-icon")),
          "var-uploader-cover": "",
          name: "delete"
        }, null, 8, ["class"])], 10, qS)) : ee("v-if", !0), s.cover ? (g(), T("img", {
          key: 1,
          class: c(e.n("file-cover")),
          style: q({
            objectFit: s.fit
          }),
          src: s.cover,
          alt: s.name
        }, null, 14, XS)) : ee("v-if", !0), B(
          "div",
          {
            class: c(e.n("file-indicator"))
          },
          [B(
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
      )), !e.maxlength || e.modelValue.length < e.toNumber(e.maxlength) ? Te((g(), T(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [B("input", {
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
        }, null, 42, KS), j(e.$slots, "default", {}, () => [x(n, {
          class: c(e.n("action-icon")),
          "var-uploader-cover": "",
          name: "plus"
        }, null, 8, ["class"]), x(a, {
          hovering: e.hovering && !e.disabled && !e.formDisabled
        }, null, 8, ["hovering"])])],
        2
        /* CLASS */
      )), [[l, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [i, e.handleHovering, "desktop"]]) : ee("v-if", !0)],
      2
      /* CLASS */
    ), x(t, {
      "error-message": e.errorMessage,
      "extra-message": e.maxlengthText
    }, Zt({
      _: 2
      /* DYNAMIC */
    }, [e.$slots["extra-message"] ? {
      name: "extra-message",
      fn: ce(() => [j(e.$slots, "extra-message")]),
      key: "0"
    } : void 0]), 1032, ["error-message", "extra-message"]), x(o, {
      class: c(e.n("preview")),
      "var-uploader-cover": "",
      position: "center",
      show: e.showPreview,
      "onUpdate:show": r[2] || (r[2] = (s) => e.showPreview = s),
      onClosed: r[3] || (r[3] = (s) => e.currentPreview = null)
    }, {
      default: ce(() => {
        var s, u;
        return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (g(), T("video", {
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
var Wv = re({
  name: "VarUploader",
  directives: {
    Ripple: qe,
    Hover: Ar
  },
  components: {
    VarIcon: Ne,
    VarPopup: Ur,
    VarFormDetails: ar,
    VarHoverOverlay: wr
  },
  props: YS,
  setup(e) {
    var r = k(null), n = k(!1), a = k(null), t = z(() => {
      var {
        maxlength: N,
        modelValue: {
          length: ae
        }
      } = e;
      return nr(N) ? ae + " / " + N : "";
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
    } = Xr(), m = z(() => {
      var {
        modelValue: N,
        hideList: ae
      } = e;
      return ae ? [] : N;
    }), y = (N) => {
      var {
        disabled: ae,
        readonly: F,
        previewed: W
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || ae || F || !W)) {
        var {
          url: _
        } = N;
        if (Fe(_) && dl(_)) {
          Lr(_);
          return;
        }
        Fe(_) && vl(_) && (a.value = N, n.value = !0);
      }
    }, b = (N) => ({
      id: WS++,
      url: "",
      cover: "",
      name: N.name,
      file: N,
      progress: 0
    }), h = (N) => {
      var ae = N.target, {
        files: F
      } = ae;
      return Array.from(F);
    }, w = (N) => new Promise((ae) => {
      if (!N.file.type.startsWith("image")) {
        ae(N);
        return;
      }
      var F = new FileReader();
      F.onload = () => {
        var W = F.result;
        N.cover = W, N.url = W, ae(N);
      }, F.readAsDataURL(N.file);
    }), O = (N) => N.map(w), P = (N) => {
      var {
        onBeforeRead: ae
      } = e;
      return N.map((F) => new Promise((W) => {
        ae || W({
          valid: !0,
          varFile: F
        });
        var _ = jt(C(ae, Re(F)));
        Promise.all(_).then((K) => {
          W({
            valid: K.every(Boolean),
            varFile: F
          });
        });
      }));
    }, S = /* @__PURE__ */ function() {
      var N = Ro(function* (ae) {
        var {
          maxsize: F,
          maxlength: W,
          modelValue: _,
          onOversize: K,
          onAfterRead: J,
          onBeforeFilter: Q,
          readonly: G,
          disabled: te
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || te || G)) {
          var pe = (je) => je.filter((We) => We.file.size > R(F) ? (C(K, Re(We)), !1) : !0), Se = (je) => {
            var We = Math.min(je.length, R(W) - _.length);
            return je.slice(0, We);
          }, oe = /* @__PURE__ */ function() {
            var je = Ro(function* (We) {
              if (!Q)
                return We;
              var ve = jt(Q);
              for (var ke of ve)
                We = yield ke(We);
              return We;
            });
            return function(ve) {
              return je.apply(this, arguments);
            };
          }(), de = h(ae), he = de.map(b);
          he = yield oe(he), he = F != null ? pe(he) : he, he = W != null ? Se(he) : he;
          var Me = yield Promise.all(O(he)), Qe = yield Promise.all(P(Me)), Xe = Qe.filter((je) => {
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
          C(e["onUpdate:modelValue"], [..._, ...Xe]), ae.target.value = "", Xe.forEach((je) => C(J, Re(je)));
        }
      });
      return function(F) {
        return N.apply(this, arguments);
      };
    }(), M = /* @__PURE__ */ function() {
      var N = Ro(function* (ae) {
        var {
          disabled: F,
          readonly: W,
          modelValue: _,
          onBeforeRemove: K,
          onRemove: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || F || W)) {
          if (K) {
            var Q = jt(C(K, Re(ae)));
            if ((yield Promise.all(Q)).some((te) => !te))
              return;
          }
          var G = _.filter((te) => te !== ae);
          C(J, Re(ae)), Y("onRemove"), C(e["onUpdate:modelValue"], G);
        }
      });
      return function(F) {
        return N.apply(this, arguments);
      };
    }(), V = () => e.modelValue.filter((N) => N.state === "success"), E = () => e.modelValue.filter((N) => N.state === "error"), p = () => e.modelValue.filter((N) => N.state === "loading"), $ = () => {
      r.value.click();
    }, H = () => {
      a.value = null, n.value = !1, Lr.close();
    }, D = {
      getSuccess: V,
      getError: E,
      getLoading: p
    }, Y = (N) => {
      ze(() => {
        var {
          validateTrigger: ae,
          rules: F,
          modelValue: W
        } = e;
        s(ae, N, F, W, D);
      });
    }, X = !1, A = () => u(e.rules, e.modelValue, D), L = () => {
      X = !0, C(e["onUpdate:modelValue"], []), d();
    }, I = {
      validate: A,
      resetValidation: d,
      reset: L
    };
    return C(l, I), ue(() => e.modelValue, () => {
      !X && Y("onChange"), X = !1;
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
      isHTMLSupportVideo: vl,
      isHTMLSupportImage: dl,
      preview: y,
      handleChange: S,
      handleRemove: M,
      getSuccess: V,
      getError: E,
      getLoading: p,
      validate: A,
      resetValidation: d,
      reset: L,
      chooseFile: $,
      closePreview: H,
      toSizeUnit: we
    };
  }
});
Wv.render = JS;
const bt = Wv;
ie(bt);
var D$ = bt, QS = {
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
  n: _S,
  classes: xS
} = ne("watermark"), ek = {
  ref: "svgRef"
}, rk = ["viewBox", "width", "height"], nk = ["width", "height"], ak = ["href", "xlink:href", "x", "y", "width", "height"];
function tk(e, r) {
  return g(), T(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default"), (g(), Ce(Jr, {
      to: "body",
      disabled: !e.fullscreen
    }, [B(
      "div",
      {
        ref: "containerRef",
        class: c(e.classes(e.n("container"), [e.fullscreen, e.n("--fullscreen")])),
        style: q({
          backgroundImage: "url(" + e.watermarkUrl + ")",
          zIndex: e.zIndex
        })
      },
      [Te(B(
        "div",
        ek,
        [(g(), T("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 0 " + (e.width + e.gapX) + " " + (e.height + e.gapY),
          width: "" + (e.width + e.gapX),
          height: "" + (e.height + e.gapY),
          style: q({
            padding: "0 " + e.gapX + "px " + e.gapY + "px 0",
            opacity: e.opacity
          })
        }, [e.showContent() ? (g(), T("foreignObject", {
          key: 0,
          x: "0",
          y: "0",
          width: e.width,
          height: e.height
        }, [B(
          "div",
          {
            xmlns: "http://www.w3.org/1999/xhtml",
            style: q({
              transform: "translate(" + e.offsetX + "px, " + e.offsetY + "px) rotate(" + e.rotate + "deg)",
              transformOrigin: "center"
            })
          },
          [j(e.$slots, "content", {}, () => [B(
            "span",
            {
              style: q(Ii({}, e.font, {
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
        )], 8, nk)) : ee("v-if", !0), !e.$slots.content && e.image ? (g(), T("image", {
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
var Gv = re({
  name: "VarWatermark",
  props: QS,
  setup(e, r) {
    var {
      slots: n
    } = r, a = k(""), t = k(""), o = k(""), l = k(null), i = k(null), s = () => !!(n.content || e.content && !e.image), u = /* @__PURE__ */ function() {
      var m = Ts(function* () {
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
      var m = Ts(function* () {
        o.value = En(i.value).color, e.image && (t.value = yield u()), yield ze(), v(), a.value = d(l.value.innerHTML);
      });
      return function() {
        return m.apply(this, arguments);
      };
    }();
    return ue(() => [e.image, e.font, e.content, e.height, e.width, e.rotate, e.gapX, e.gapY, e.offsetX, e.offsetY, e.opacity], f, {
      deep: !0
    }), Ct(f), St(v), {
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
const wt = Gv;
ie(wt);
var A$ = wt;
const ok = "2.14.2";
function ik(e) {
  qr.install && e.use(qr), ya.install && e.use(ya), wa.install && e.use(wa), Ca.install && e.use(Ca), Sa.install && e.use(Sa), Yn.install && e.use(Yn), ka.install && e.use(ka), $a.install && e.use($a), Ta.install && e.use(Ta), Pa.install && e.use(Pa), vr.install && e.use(vr), Oa.install && e.use(Oa), Va.install && e.use(Va), Fn.install && e.use(Fn), jn.install && e.use(jn), Ma.install && e.use(Ma), Wn.install && e.use(Wn), Ia.install && e.use(Ia), Ba.install && e.use(Ba), Ea.install && e.use(Ea), yr.install && e.use(yr), Na.install && e.use(Na), Aa.install && e.use(Aa), za.install && e.use(za), Kr.install && e.use(Kr), La.install && e.use(La), Xn.install && e.use(Xn), Ha.install && e.use(Ha), Ya.install && e.use(Ya), Pn.install && e.use(Pn), ar.install && e.use(ar), Ar.install && e.use(Ar), wr.install && e.use(wr), Ne.install && e.use(Ne), Fa.install && e.use(Fa), Lr.install && e.use(Lr), ja.install && e.use(ja), Wa.install && e.use(Wa), Qn.install && e.use(Qn), ba.install && e.use(ba), Ga.install && e.use(Ga), qa.install && e.use(qa), cn.install && e.use(cn), Si.install && e.use(Si), qo.install && e.use(qo), In.install && e.use(In), Xa.install && e.use(Xa), Ka.install && e.use(Ka), Za.install && e.use(Za), Ja.install && e.use(Ja), Bn.install && e.use(Bn), Ur.install && e.use(Ur), Qa.install && e.use(Qa), _a.install && e.use(_a), xa.install && e.use(xa), et.install && e.use(et), rt.install && e.use(rt), nt.install && e.use(nt), qe.install && e.use(qe), at.install && e.use(at), tt.install && e.use(tt), ot.install && e.use(ot), it.install && e.use(it), Oi.install && e.use(Oi), st.install && e.use(st), ut.install && e.use(ut), dt.install && e.use(dt), Mn.install && e.use(Mn), vt.install && e.use(vt), On.install && e.use(On), Vn.install && e.use(Vn), ft.install && e.use(ft), ct.install && e.use(ct), mt.install && e.use(mt), pt.install && e.use(pt), ht.install && e.use(ht), gt.install && e.use(gt), Mi.install && e.use(Mi), yt.install && e.use(yt), Jn.install && e.use(Jn), bt.install && e.use(bt), wt.install && e.use(wt);
}
const z$ = {
  version: ok,
  install: ik,
  ActionSheet: qr,
  AppBar: ya,
  Avatar: wa,
  AvatarGroup: Ca,
  BackTop: Sa,
  Badge: Yn,
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
  Dialog: Kr,
  Divider: La,
  Drag: Xn,
  Ellipsis: Ha,
  Fab: Ya,
  Form: Pn,
  FormDetails: ar,
  Hover: Ar,
  HoverOverlay: wr,
  Icon: Ne,
  Image: Fa,
  ImagePreview: Lr,
  IndexAnchor: ja,
  IndexBar: Wa,
  Input: Qn,
  Lazy: ba,
  Link: Ga,
  List: qa,
  Loading: cn,
  LoadingBar: Si,
  Locale: qo,
  Menu: In,
  Option: Xa,
  Overlay: Ka,
  Pagination: Za,
  Paper: Ja,
  Picker: Bn,
  Popup: Ur,
  Progress: Qa,
  PullRefresh: _a,
  Radio: xa,
  RadioGroup: et,
  Rate: rt,
  Result: nt,
  Ripple: qe,
  Row: at,
  Select: tt,
  Skeleton: ot,
  Slider: it,
  Snackbar: Oi,
  Space: st,
  Step: ut,
  Steps: dt,
  Sticky: Mn,
  StyleProvider: vt,
  Swipe: On,
  SwipeItem: Vn,
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
  Yn as Badge,
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
  Kr as Dialog,
  La as Divider,
  Xn as Drag,
  Ha as Ellipsis,
  Ya as Fab,
  Pn as Form,
  ar as FormDetails,
  Ar as Hover,
  wr as HoverOverlay,
  Ne as Icon,
  Fa as Image,
  Lr as ImagePreview,
  ja as IndexAnchor,
  Wa as IndexBar,
  Qn as Input,
  ba as Lazy,
  Ga as Link,
  qa as List,
  cn as Loading,
  Si as LoadingBar,
  qo as Locale,
  In as Menu,
  Xa as Option,
  Ka as Overlay,
  Zo as PIXEL,
  Za as Pagination,
  Ja as Paper,
  Bn as Picker,
  Ur as Popup,
  Qa as Progress,
  _a as PullRefresh,
  xa as Radio,
  et as RadioGroup,
  rt as Rate,
  nt as Result,
  qe as Ripple,
  at as Row,
  al as SNACKBAR_TYPE,
  tt as Select,
  ot as Skeleton,
  it as Slider,
  Oi as Snackbar,
  st as Space,
  ut as Step,
  dt as Steps,
  Mn as Sticky,
  vt as StyleProvider,
  On as Swipe,
  Vn as SwipeItem,
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
  Mk as _CardComponent,
  Ik as _CellComponent,
  Ek as _CheckboxComponent,
  Nk as _CheckboxGroupComponent,
  Dk as _ChipComponent,
  Ak as _ColComponent,
  zk as _CollapseComponent,
  Lk as _CollapseItemComponent,
  sk as _ContextComponent,
  Rk as _CountdownComponent,
  Uk as _CounterComponent,
  Hk as _DatePickerComponent,
  Yk as _DialogComponent,
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
  M$ as _TableComponent,
  I$ as _TabsComponent,
  B$ as _TabsItemsComponent,
  E$ as _ThemesComponent,
  N$ as _TimePickerComponent,
  Wk as _TooltipComponent,
  D$ as _UploaderComponent,
  A$ as _WatermarkComponent,
  Uf as actionSheetProps,
  Ui as add,
  qf as appBarProps,
  gc as avatarGroupProps,
  vc as avatarProps,
  Kc as backTopProps,
  em as badgeProps,
  dm as bottomNavigationItemProps,
  tm as bottomNavigationProps,
  hm as breadcrumbProps,
  Sm as breadcrumbsProps,
  Yc as buttonProps,
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
  Ke as defaultLazyOptions,
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
  Ib as indexBarProps,
  Yb as inputProps,
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
  Ot as popupProps,
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
  Kt as stickyProps,
  uC as styleProviderProps,
  Bd as swipeProps,
  fC as switchProps,
  $C as tabItemProps,
  bC as tabProps,
  VC as tableProps,
  RC as tabsItemsProps,
  DC as tabsProps,
  IS as timePickerProps,
  Iy as tooltipProps,
  YS as uploaderProps,
  Hi as use,
  Xr as useHoverOverlay,
  Ri as useLocale,
  ok as version,
  Li as zhCN
};
