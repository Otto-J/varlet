import { reactive as Ae, onMounted as ao, nextTick as Ne, onActivated as Mn, isRef as Av, watch as ie, onBeforeUnmount as kt, onDeactivated as en, unref as ut, inject as zv, getCurrentInstance as et, computed as A, provide as Lv, isVNode as $t, Comment as Rv, Fragment as Ve, ref as V, createApp as Uv, h as hs, onBeforeMount as Fv, onUnmounted as rt, defineComponent as ee, createVNode as J, Teleport as En, Transition as Le, withDirectives as $e, vShow as $n, mergeProps as Be, openBlock as p, createBlock as be, resolveDynamicComponent as nt, normalizeClass as c, normalizeStyle as q, resolveComponent as oe, resolveDirective as Ie, withCtx as ve, createElementVNode as N, renderSlot as Y, toDisplayString as ae, createElementBlock as k, renderList as Ue, createCommentVNode as _, onUpdated as Tt, createTextVNode as Se, pushScopeId as Ra, popScopeId as Ua, withModifiers as Tr, normalizeProps as Pt, guardReactiveProps as to, vModelText as Hv, toRefs as Yv, createSlots as gs, withKeys as xi, toRaw as el, TransitionGroup as jv } from "vue";
var ys = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, kS = Ae(ys);
const yr = Ae(ys), Fe = (e) => typeof e == "string", No = (e) => typeof e == "boolean", lr = (e) => typeof e == "number", Ti = (e) => Object.prototype.toString.call(e) === "[object Object]", Wv = (e) => typeof e == "object" && e !== null, Ot = (e) => typeof e == "function", Pe = (e) => Array.isArray(e), Gv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Yr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, Pi = (e) => e === window, R = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : No(e) ? Number(e) : e, qt = (e, r) => {
  if (e.length) {
    const n = e.indexOf(r);
    if (n > -1)
      return e.splice(n, 1);
  }
}, Oi = (e, r = 200) => {
  let n, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), n && window.clearTimeout(n), i >= r ? (e.apply(this, o), a = l) : n = window.setTimeout(() => {
      t.apply(this, o);
    }, r - i);
  };
}, at = () => typeof window < "u", rl = (e) => [...new Set(e)], bs = (e) => e.replace(/-(\w)/g, (r, n) => n.toUpperCase()), qv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Xv = (e, r, n = "start") => {
  let a = n === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (r(e[a], a, e))
      return [e[a], a];
    n === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ft = (e) => Pe(e) ? e : [e], oo = (e, r, n) => Math.min(n, Math.max(r, e)), Kv = (e, r) => oo(e, 0, r.length - 1);
var nl = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), al = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Zv = (e) => {
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
}, Do = (e) => e, tl = (e) => Math.pow(e, 3), ws = (e) => e < 0.5 ? tl(e * 2) / 2 : 1 - tl((1 - e) * 2) / 2, io = (e, r) => e ?? r, Cs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Da = function(e, r, n) {
  if (e === void 0 && (e = ""), n === void 0 && (n = ""), e.length >= r)
    return e;
  var a = r - e.length, t = Math.floor(a / n.length);
  return n.repeat(t) + n.slice(0, a % n.length) + e;
};
function Pr(e, r) {
  throw Error("Varlet [" + e + "]: " + r);
}
function ol(e, r) {
  console.warn("Varlet [" + e + "]: " + r);
}
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
function tt(e) {
  return window.getComputedStyle(e);
}
function xe(e) {
  if (Pi(e)) {
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
    return Ao({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function Jv(e) {
  var {
    left: r
  } = xe(e);
  return r + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function il(e) {
  var {
    top: r
  } = xe(e);
  return r + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pt(e) {
  var r = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(r, 0);
}
function Vi(e) {
  var r = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(r, 0);
}
function Qv(e) {
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
function $o(e) {
  var {
    transform: r
  } = tt(e);
  return +r.slice(r.lastIndexOf(",") + 2, r.length - 1);
}
function Tn(e) {
  for (var r = e; r && !(!r.parentNode || (r = r.parentNode, r === document.body || r === document.documentElement)); ) {
    var n = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = tt(r);
    if (n.test(a) || n.test(t))
      return r;
  }
  return window;
}
function _v(e) {
  for (var r = [], n = e; !Pi(n); )
    n = Tn(n), r.push(n);
  return r;
}
function Ss(e, r) {
  if (Fe(e)) {
    var n = document.querySelector(e);
    return n || Pr(r, "target element cannot found"), n;
  }
  if (Wv(e))
    return e;
  Pr(r, 'type of prop "target" should be a selector or an element object');
}
function ll() {
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
var ks = (e) => Fe(e) && e.endsWith("rem"), xv = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), ef = (e) => Fe(e) && e.endsWith("px") || lr(e), rf = (e) => Fe(e) && e.endsWith("%"), $s = (e) => Fe(e) && e.endsWith("vw"), Ts = (e) => Fe(e) && e.endsWith("vh"), Ps = (e) => Fe(e) && e.endsWith("vmin"), Os = (e) => Fe(e) && e.endsWith("vmax"), nf = (e) => Fe(e) && e.startsWith("calc("), af = (e) => Fe(e) && e.startsWith("var("), je = (e) => {
  if (lr(e))
    return e;
  if (ef(e))
    return +e.replace("px", "");
  if (!at())
    return 0;
  var {
    width: r,
    height: n
  } = xe(window);
  if ($s(e))
    return +e.replace("vw", "") * r / 100;
  if (Ts(e))
    return +e.replace("vh", "") * n / 100;
  if (ks(e)) {
    var a = +e.replace("rem", ""), t = tt(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return Ps(e) ? ll().vMin : Os(e) ? ll().vMax : Fe(e) ? R(e) : 0;
}, ye = (e) => {
  if (e != null)
    return rf(e) || $s(e) || Ts(e) || xv(e) || ks(e) || nf(e) || af(e) || Ps(e) || Os(e) ? e : je(e) + "px";
}, or = function(e, r) {
  if (r === void 0 && (r = 1), e != null) {
    var n = ye(e), a = n.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(n) * r + a;
  }
};
function br(e) {
  var r = Cs();
  return r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 16);
}
function sl(e) {
  var r = Cs();
  r.cancelAnimationFrame ? r.cancelAnimationFrame(e) : r.clearTimeout(e);
}
function lo(e) {
  br(() => {
    br(e);
  });
}
function Lr() {
  return new Promise((e) => {
    br(() => {
      br(e);
    });
  });
}
function tf() {
  return new Promise((e) => {
    br(e);
  });
}
function ht(e, r) {
  var {
    top: n = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = r, l = Date.now(), i = pt(e), s = Vi(e);
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
function Vs(e) {
  return Object.entries(e ?? {}).reduce((r, n) => {
    var [a, t] = n, o = a.startsWith("--") ? a : "--" + qv(a);
    return r[o] = t, r;
  }, {});
}
function of() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Xt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function sr(e) {
  let r = !1;
  ao(() => {
    e(), Ne(() => {
      r = !0;
    });
  }), Mn(() => {
    r && e();
  });
}
function Rr(e, r, n, a = {}) {
  if (!at())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Ot(m) ? m() : ut(m), u = (m) => {
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
  Av(e) && (v = ie(() => e.value, (m, g) => {
    d(g), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return sr(() => {
    u(e);
  }), kt(() => {
    d(e);
  }), en(() => {
    d(e);
  }), f;
}
function Ms(e, r, n) {
  if (!at())
    return;
  Rr(document, r, (t) => {
    const o = ut(e);
    o && !o.contains(t.target) && n(t);
  });
}
var lf = globalThis && globalThis.__rest || function(e, r) {
  var n = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && r.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      r.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (n[a[t]] = e[a[t]]);
  return n;
};
function sf(e) {
  const r = et();
  return e in r.provides;
}
function ur(e) {
  if (!sf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const r = zv(e), { childInstances: n, collect: a, clear: t } = r, o = lf(r, ["childInstances", "collect", "clear"]), l = et();
  return {
    index: A(() => n.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      ao(() => {
        Ne().then(() => {
          a(l, u);
        });
      }), kt(() => {
        Ne().then(() => {
          t(l, u);
        });
      });
    }
  };
}
function uf(e) {
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
function dr(e) {
  const r = et(), n = Ae([]), a = [], t = A(() => n.length), o = () => {
    const u = uf(r.subTree);
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
      Lv(e, Object.assign({
        childInstances: n,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function ul(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function dl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        ul(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ul(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function zo() {
  return zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, zo.apply(this, arguments);
}
function Je(e, r) {
  return Array.isArray(r) ? r.reduce((n, a) => (n[a] = e[a], n), {}) : e[r];
}
function df(e) {
  var r = Uv(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: r.mount(n),
    unmount() {
      r.unmount(), document.body.removeChild(n);
    }
  };
}
function ot(e, r, n) {
  r === void 0 && (r = {}), n === void 0 && (n = {});
  var a = {
    setup() {
      return () => hs(e, zo({}, r, n));
    }
  }, {
    unmount: t
  } = df(a);
  return {
    unmountInstance: t
  };
}
function Es(e) {
  var r = [];
  return e.forEach((n) => {
    if (n.type !== Rv) {
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
  var e = V(""), r = /* @__PURE__ */ function() {
    var t = dl(function* (o, l, i) {
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
    var t = dl(function* (o, l, i, s, u) {
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
function vf(e) {
  Rr(() => window, "hashchange", e), Rr(() => window, "popstate", e);
}
function so() {
  var e = V(!1);
  return Mn(() => {
    e.value = !1;
  }), en(() => {
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
function Bs(e, r, n) {
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
        l ? l(i, d) : S(e[i], d);
      }
    });
  var u = V(s());
  return ie(() => e[r], () => {
    u.value = s();
  }), ie(() => u.value, (d) => {
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
  n: Is
} = re("ripple"), vl = 250;
function ff(e) {
  var {
    zIndex: r,
    position: n
  } = tt(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", n === "static" && (e.style.position = "relative"), r === "auto" && (e.style.zIndex = "1");
}
function cf(e, r) {
  var {
    top: n,
    left: a
  } = xe(e), {
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
function Ns(e) {
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
      } = cf(this, e), s = document.createElement("div");
      s.classList.add(Is()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", r.color && (s.style.backgroundColor = r.color), s.dataset.createdAt = String(performance.now()), ff(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    r.tasker = window.setTimeout(n, 30);
  }
}
function Lo() {
  var e = this._ripple, r = () => {
    var n = this.querySelectorAll("." + Is());
    if (n.length) {
      var a = n[n.length - 1], t = vl - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, vl);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(r, 30) : r();
}
function Ds() {
  if (!(!of() || !yr.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function mf(e, r) {
  var n;
  e._ripple = Kt({
    tasker: null
  }, (n = r.value) != null ? n : {}, {
    removeRipple: Lo.bind(e)
  }), e.addEventListener("touchstart", Ns, {
    passive: !0
  }), e.addEventListener("touchmove", Ds, {
    passive: !0
  }), e.addEventListener("dragstart", Lo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function pf(e) {
  e.removeEventListener("touchstart", Ns), e.removeEventListener("touchmove", Ds), e.removeEventListener("dragstart", Lo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function hf(e, r) {
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
var As = {
  mounted: mf,
  unmounted: pf,
  updated: hf,
  install(e) {
    e.directive("ripple", this);
  }
}, $S = As;
const We = As;
function gf(e) {
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
    validator: gf
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
function zs() {
  var e = Object.keys(yr.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Bt(e) {
  yr.locks[e] = 1, zs();
}
function It(e) {
  delete yr.locks[e], zs();
}
function uo(e, r) {
  var {
    uid: n
  } = et();
  r && ie(r, (a) => {
    a === !1 ? It(n) : a === !0 && e() === !0 && Bt(n);
  }), ie(e, (a) => {
    r && r() === !1 || (a === !0 ? Bt(n) : It(n));
  }), Fv(() => {
    r && r() === !1 || e() === !0 && Bt(n);
  }), rt(() => {
    r && r() === !1 || e() === !0 && It(n);
  }), Mn(() => {
    r && r() === !1 || e() === !0 && Bt(n);
  }), en(() => {
    r && r() === !1 || e() === !0 && It(n);
  });
}
function Mt(e, r) {
  var n = V(yr.zIndex);
  return ie(e, (a) => {
    a && (yr.zIndex += r, n.value = yr.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: n
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
function yf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: Er,
  classes: To
} = re("popup");
const Sr = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Vt,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Mt(() => e.show, 3), {
      disabled: o
    } = so(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      S(v), d && S(e["onUpdate:show"], !1);
    };
    uo(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      S(d ? e.onOpen : e.onClose);
    }), vf(() => S(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return J("div", {
        class: To(Er("overlay"), d),
        style: Ro({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => J("div", Be({
      class: To(Er("content"), Er("--" + e.position), [e.defaultStyle, Er("--content-background-color")], [e.defaultStyle, Er("$-elevation--3")], [e.safeArea, Er("--safe-area")], [e.safeAreaTop, Er("--safe-area-top")]),
      style: {
        zIndex: t.value
      }
    }, a), [S(n.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: g,
        position: b
      } = e;
      return J(Le, {
        name: Er("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [$e(J("div", {
          class: To(Er("$--box"), Er()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), J(Le, {
          name: g || Er("$-pop-" + b)
        }, {
          default: () => [f && s()]
        })]), [[$n, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return J(En, {
          to: d,
          disabled: o.value
        }, yf(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var TS = Sr, Ls = {
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
function fl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function bf(e) {
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
var {
  n: wf,
  classes: Cf
} = re("icon");
function Sf(e, r) {
  return p(), be(
    nt(e.isURL(e.name) ? "img" : "i"),
    {
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
    },
    null,
    8,
    ["class", "style", "src", "onClick"]
  );
}
var Rs = ee({
  name: "VarIcon",
  props: Ls,
  setup(e) {
    var r = V(""), n = V(!1), a = /* @__PURE__ */ function() {
      var t = bf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || R(i) === 0) {
          r.value = o;
          return;
        }
        n.value = !0, yield Ne(), setTimeout(() => {
          l != null && (r.value = o), n.value = !1;
        }, R(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
      immediate: !0
    }), {
      n: wf,
      classes: Cf,
      nextName: r,
      animateInProgress: n,
      isURL: Gv,
      toNumber: R,
      toSizeUnit: ye
    };
  }
});
Rs.render = Sf;
const Oe = Rs;
Oe.install = function(e) {
  e.component(Oe.name, Oe);
};
var PS = Oe;
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
var kf = Uo({
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
}, Je(Vt, [
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
const Mi = {
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
}, Us = {
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
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
function Ei() {
  var e = {}, r = V({}), n = (o, l) => {
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
    e[o] = Fo({}, e[o], l), a(o);
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
  packs: Fs,
  pack: Ze,
  add: Bi,
  use: Ii,
  merge: Hs
} = Ei();
Bi("zh-CN", Mi);
Ii("zh-CN");
var OS = {
  zhCN: Mi,
  enUS: Us,
  packs: Fs,
  pack: Ze,
  add: Bi,
  use: Ii,
  merge: Hs,
  useLocale: Ei
};
const Ho = {
  zhCN: Mi,
  enUS: Us,
  packs: Fs,
  pack: Ze,
  add: Bi,
  use: Ii,
  merge: Hs,
  useLocale: Ei
};
var {
  n: $f,
  classes: Tf
} = re("action-sheet"), Pf = ["onClick"];
function Of(e, r) {
  var n = oe("var-icon"), a = oe("var-popup"), t = Ie("ripple");
  return p(), be(
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
      default: ve(() => [N(
        "div",
        Be({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [Y(e.$slots, "title", {}, () => [N(
          "div",
          {
            class: c(e.n("title"))
          },
          ae(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), Y(e.$slots, "actions", {}, () => [(p(!0), k(
          Ve,
          null,
          Ue(e.actions, (o) => $e((p(), k(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), be(
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
            )) : _("v-if", !0), N(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ae(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            Pf
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
var Ys = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: kf,
  setup(e) {
    var r = V(!1), n = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        S(l, t), o && S(e["onUpdate:show"], !1);
      }
    }, a = (t) => S(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      r.value = t;
    }, {
      immediate: !0
    }), {
      n: $f,
      classes: Tf,
      handlePopupUpdateShow: a,
      popupShow: r,
      pack: Ze,
      dt: io,
      handleSelect: n
    };
  }
});
Ys.render = Of;
const cn = Ys;
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
var ln, Ni = {};
function Vf(e) {
  return e === void 0 && (e = {}), Yo({}, Ni, e);
}
function Qr(e) {
  return at() ? new Promise((r) => {
    Qr.close();
    var n = Ae(Vf(e));
    n.teleport = "body", ln = n;
    var {
      unmountInstance: a
    } = ot(cn, n, {
      onSelect: (t) => {
        S(n.onSelect, t), r(t);
      },
      onClose: () => {
        S(n.onClose), r("close");
      },
      onClosed: () => {
        S(n.onClosed), a(), ln === n && (ln = null);
      },
      onRouteChange: () => {
        a(), ln === n && (ln = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }) : Promise.resolve();
}
Qr.setDefaultOptions = function(e) {
  Ni = e;
};
Qr.resetDefaultOptions = function() {
  Ni = {};
};
Qr.close = function() {
  if (ln != null) {
    var e = ln;
    ln = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
Qr.Component = cn;
cn.install = function(e) {
  e.component(cn.name, cn);
};
Qr.install = function(e) {
  e.component(cn.name, cn);
};
var VS = cn;
function Mf(e) {
  var r = ["left", "center", "right"];
  return r.includes(e);
}
var Ef = {
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
    validator: Mf
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
  n: Bf,
  classes: If
} = re("app-bar");
function Nf(e, r) {
  return p(), k(
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
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (p(), k(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), k(
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
      )) : _("v-if", !0), N(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), k(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
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
        )) : _("v-if", !0), Y(e.$slots, "right")],
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
var js = ee({
  name: "VarAppBar",
  props: Ef,
  setup(e, r) {
    var {
      slots: n
    } = r, a = V(), t = V(), o = () => {
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
    return sr(o), Tt(o), {
      n: Bf,
      classes: If,
      formatElevation: hr,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
js.render = Nf;
const An = js;
An.install = function(e) {
  e.component(An.name, An);
};
var MS = An;
function cl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function vo(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        cl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        cl(o, a, t, l, i, "throw", s);
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
var Df = "background-image", Af = "lazy-loading", zf = "lazy-error", ml = "lazy-attempt", Lf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Wo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ka = [], Zt = [], Ws = Zv(100), qe = {
  loading: Wo,
  error: Wo,
  attempt: 3,
  throttleWait: 300,
  events: Lf
}, Di = Oi(Et, qe.throttleWait);
function fo(e, r) {
  e._lazy.arg === Df ? e.style.backgroundImage = "url(" + r + ")" : e.setAttribute("src", r);
}
function Rf(e) {
  e._lazy.loading && fo(e, e._lazy.loading), Et();
}
function Uf(e) {
  e._lazy.error && fo(e, e._lazy.error), e._lazy.state = "error", zi(e), Et();
}
function Gs(e, r) {
  fo(e, r), e._lazy.state = "success", zi(e), Et();
}
function Ff(e) {
  var r;
  Zt.includes(e) || (Zt.push(e), (r = qe.events) == null || r.forEach((n) => {
    e.addEventListener(n, Di, {
      passive: !0
    });
  }));
}
function Hf() {
  Zt.forEach((e) => {
    var r;
    (r = qe.events) == null || r.forEach((n) => {
      e.removeEventListener(n, Di);
    });
  }), Zt.length = 0;
}
function Yf(e, r) {
  var n, a, t = {
    loading: (n = e.getAttribute(Af)) != null ? n : qe.loading,
    error: (a = e.getAttribute(zf)) != null ? a : qe.error,
    attempt: e.getAttribute(ml) ? Number(e.getAttribute(ml)) : qe.attempt
  };
  e._lazy = jo({
    src: r.value,
    arg: r.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), fo(e, Wo), S(qe.filter, e._lazy);
}
function jf(e, r) {
  var n = new Image();
  n.src = r, e._lazy.preloadImage = n, n.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Ws.add(r), Gs(e, r);
  }), n.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Uf(e) : qs(e);
  });
}
function qs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: r
    } = e._lazy;
    if (Ws.has(r)) {
      Gs(e, r), e._lazy.attemptLock = !1;
      return;
    }
    Rf(e), jf(e, r);
  }
}
function Ai(e) {
  return Go.apply(this, arguments);
}
function Go() {
  return Go = vo(function* (e) {
    yield Lr(), Qv(e) && qs(e);
  }), Go.apply(this, arguments);
}
function Et() {
  Ka.forEach((e) => Ai(e));
}
function Wf(e) {
  return qo.apply(this, arguments);
}
function qo() {
  return qo = vo(function* (e) {
    !Ka.includes(e) && Ka.push(e), _v(e).forEach(Ff), yield Ai(e);
  }), qo.apply(this, arguments);
}
function zi(e) {
  qt(Ka, e), Ka.length === 0 && Hf();
}
function Gf(e, r) {
  var {
    src: n,
    arg: a
  } = e._lazy;
  return n !== r.value || a !== r.arg;
}
function Xs(e, r) {
  return Xo.apply(this, arguments);
}
function Xo() {
  return Xo = vo(function* (e, r) {
    Yf(e, r), yield Wf(e);
  }), Xo.apply(this, arguments);
}
function qf(e, r) {
  return Ko.apply(this, arguments);
}
function Ko() {
  return Ko = vo(function* (e, r) {
    if (!Gf(e, r)) {
      Ka.includes(e) && (yield Ai(e));
      return;
    }
    yield Xs(e, r);
  }), Ko.apply(this, arguments);
}
function Xf(e) {
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
var Ks = {
  mounted: Xs,
  unmounted: zi,
  updated: qf,
  install(e, r) {
    Xf(r), Di = Oi(Et, qe.throttleWait), e.directive("lazy", this);
  }
}, ES = Ks;
const gt = Ks;
function Kf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Zs = (e) => ["mini", "small", "normal", "large"].includes(e);
function Js(e) {
  return Zs(e) || lr(e) || Fe(e);
}
var Zf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Js,
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
    validator: Kf,
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
  n: Jf,
  classes: Qf
} = re("avatar"), _f = ["src", "lazy-loading", "lazy-error"], xf = ["src"];
function ec(e, r) {
  var n = Ie("lazy");
  return p(), k(
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
    [e.src ? (p(), k(
      Ve,
      {
        key: 0
      },
      [e.lazy ? $e((p(), k(
        "img",
        {
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
        },
        null,
        46,
        _f
      )), [[n, e.src]]) : (p(), k(
        "img",
        {
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
        },
        null,
        46,
        xf
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), k(
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
var Qs = ee({
  name: "VarAvatar",
  directives: {
    Lazy: gt
  },
  props: Zf,
  setup(e) {
    var r = V(null), n = V(null), a = V(1), t = () => {
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
    return sr(t), Tt(t), {
      internalSizeValidator: Zs,
      sizeValidator: Js,
      toSizeUnit: ye,
      n: Jf,
      classes: Qf,
      avatarElement: r,
      textElement: n,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Qs.render = ec;
const zn = Qs;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var BS = zn, rc = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: nc,
  classes: ac
} = re("avatar-group");
function tc(e, r) {
  return p(), k(
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
var _s = ee({
  name: "VarAvatarGroup",
  props: rc,
  setup(e) {
    var r = A(() => e.offset == null ? {} : {
      "--avatar-group-offset": ye(e.offset)
    });
    return {
      n: nc,
      classes: ac,
      toSizeUnit: ye,
      rootStyles: r
    };
  }
});
_s.render = tc;
const Ln = _s;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var IS = Ln;
function oc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function ic(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var dn = {
  type: {
    type: String,
    default: "circle",
    validator: oc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: ic
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
  n: lc,
  classes: sc
} = re("loading"), uc = (e) => (Ra(""), e = e(), Ua(), e), dc = /* @__PURE__ */ uc(() => /* @__PURE__ */ N(
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
)), vc = [dc];
function fc(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [Y(e.$slots, "default"), e.loading ? (p(), k(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.isShow ? (p(), k(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), k(
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
          vc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (p(!0), k(
        Ve,
        null,
        Ue(e.loadingTypeDict, (n, a) => (p(), k(
          Ve,
          {
            key: a
          },
          [e.type === a ? (p(), k(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), k(
              Ve,
              null,
              Ue(n, (t) => (p(), k(
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
          )) : _("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), k(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: q({
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
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var xs = ee({
  name: "VarLoading",
  props: dn,
  setup(e, r) {
    var {
      slots: n
    } = r, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = A(() => S(n.default) ? e.loading : !0);
    return {
      n: lc,
      classes: sc,
      multiplySizeUnit: or,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
xs.render = fc;
const Nr = xs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var NS = Nr, cc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: mc,
  classes: pc
} = re("hover-overlay");
function hc(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var eu = ee({
  name: "VarHoverOverlay",
  props: cc,
  setup() {
    return {
      n: mc,
      classes: pc
    };
  }
});
eu.render = hc;
const mr = eu;
mr.install = function(e) {
  e.component(mr.name, mr);
};
function Pn() {
  var e = V(!1), r = (n) => {
    e.value = n;
  };
  return {
    hovering: e,
    handleHovering: r
  };
}
var DS = mr;
function ru(e) {
  if (!e)
    return !1;
  var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && r || e === "mobile" && !r);
}
function gc(e) {
  var r = e.getAttribute("style");
  return r ? r.split(";").filter(Boolean).reduce((n, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return n[bs(t)] = o, n;
  }, {}) : {};
}
function yc(e) {
  var {
    value: r
  } = e._hover, n = gc(e);
  Object.keys(r).forEach((a) => {
    var t = bs(a), o = r[t];
    o != null && n[t] && (e._hover.rawStyle[t] = n[t]);
  });
}
function Li(e, r) {
  Object.keys(r).forEach((n) => {
    var a = r[n];
    a != null && (e.style[n] = a);
  });
}
function bc(e) {
  Object.keys(e._hover.value).forEach((r) => {
    var n = e._hover.value[r];
    n != null && (e.style[r] = "");
  });
}
function nu(e) {
  bc(e), Li(e, e._hover.rawStyle);
}
function au() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Ot(e)) {
    e(this._hover.hovering);
    return;
  }
  Li(this, e);
}
function tu() {
  if (this._hover.hovering = !1, Ot(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  nu(this);
}
function ou(e, r) {
  var n, a, {
    arg: t,
    value: o
  } = r;
  ru(t) || (e._hover = {
    value: o,
    hovering: (n = (a = e._hover) == null ? void 0 : a.hovering) != null ? n : !1,
    rawStyle: {}
  }, yc(e), e.addEventListener("mouseenter", au), e.addEventListener("mouseleave", tu));
}
function iu(e, r) {
  ru(r.arg) || (nu(e), e.removeEventListener("mouseenter", au), e.removeEventListener("mouseleave", tu));
}
function wc(e, r) {
  e._hover && iu(e, r);
}
function Cc(e, r) {
  return !Ot(r.value) && e._hover.hovering;
}
function Sc(e, r) {
  ou(e, r), Cc(e, r) && Li(e, r.value);
}
var lu = {
  mounted: ou,
  unmounted: iu,
  beforeUpdate: wc,
  updated: Sc,
  install(e) {
    e.directive("hover", this);
  }
}, AS = lu;
const Ur = lu;
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
function su(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function kc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function $c(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Tc = {
  type: {
    type: String,
    validator: su
  },
  nativeType: {
    type: String,
    default: "button",
    validator: $c
  },
  size: {
    type: String,
    validator: kc
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
  loadingType: Je(dn, "type"),
  loadingSize: Je(dn, "size"),
  loadingColor: Zo({}, Je(dn, "color"), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, uu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function Pc() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(uu);
  return {
    length: n,
    buttons: r,
    bindButtons: e
  };
}
function Oc() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ur(uu);
  return {
    index: n,
    buttonGroup: r,
    bindButtonGroup: e
  };
}
var {
  n: Vc,
  classes: Mc
} = re("button"), Ec = ["type", "disabled"];
function Bc(e, r) {
  var n = oe("var-loading"), a = oe("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return $e((p(), k(
    "button",
    {
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
    },
    [e.loading || e.pending ? (p(), be(
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
    )) : _("v-if", !0), N(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), J(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    Ec
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var du = ee({
  name: "VarButton",
  components: {
    VarLoading: Nr,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Ur
  },
  props: Tc,
  setup(e) {
    var r = V(!1), {
      buttonGroup: n
    } = Oc(), {
      hovering: a,
      handleHovering: t
    } = Pn(), o = A(() => {
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
      e.autoLoading && (r.value = !0, u = Pe(u) ? u : [u], Promise.all(u).then(() => {
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
      n: Vc,
      classes: Mc,
      pending: r,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
du.render = Bc;
const rr = du;
rr.install = function(e) {
  e.component(rr.name, rr);
};
var zS = rr, Ic = {
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
  n: Nc,
  classes: Dc
} = re("back-top");
function Ac(e, r) {
  var n = oe("var-icon"), a = oe("var-button");
  return p(), be(
    En,
    {
      to: "body",
      disabled: e.disabled
    },
    [N(
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
      [Y(e.$slots, "default", {}, () => [J(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ve(() => [J(n, {
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
var vu = ee({
  name: "VarBackTop",
  components: {
    VarButton: rr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Ic,
  setup(e) {
    var r = V(!1), n = V(null), a = V(!0), t, o = (d) => {
      S(e.onClick, d);
      var v = Vi(t);
      ht(t, {
        left: v,
        duration: e.duration,
        animation: ws
      });
    }, l = Oi(() => {
      r.value = pt(t) >= je(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? Ss(e.target, "BackTop") : Tn(n.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return ao(() => {
      i(), s(), a.value = !1;
    }), Mn(s), kt(u), en(u), {
      disabled: a,
      show: r,
      backTopEl: n,
      toSizeUnit: ye,
      n: Nc,
      classes: Dc,
      handleClick: o
    };
  }
});
vu.render = Ac;
const Rn = vu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var LS = Rn;
function zc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Lc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Rc = {
  type: {
    type: String,
    default: "default",
    validator: zc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Lc
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
  n: Uc,
  classes: Fc
} = re("badge");
function Hc(e, r) {
  var n = oe("var-icon");
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), J(
      Le,
      {
        name: e.n("$-badge-fade"),
        persisted: ""
      },
      {
        default: ve(() => [$e(N(
          "span",
          Be({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (p(), be(
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
          )) : _("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), k(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ae(e.value),
            3
            /* TEXT, CLASS */
          )) : _("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[$n, !e.hidden]])]),
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
var fu = ee({
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Rc,
  setup(e) {
    var r = A(() => {
      var {
        value: n,
        maxValue: a
      } = e;
      return n != null && a != null && R(n) > R(a) ? a + "+" : n;
    });
    return {
      n: Uc,
      classes: Fc,
      value: r
    };
  }
});
fu.render = Hc;
const mn = fu;
mn.install = function(e) {
  e.component(mn.name, mn);
};
var RS = mn, Yc = {
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
}, cu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function jc() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = dr(cu);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: Wc,
  classes: Gc
} = re("bottom-navigation"), {
  n: co
} = re("bottom-navigation-item"), pl = co("--right-half-space"), hl = co("--left-half-space"), gl = co("--right-space"), qc = {
  type: "primary"
};
function Xc(e, r) {
  var n = oe("var-button");
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (p(), be(
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
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var mu = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: rr
  },
  props: Yc,
  setup(e, r) {
    var {
      slots: n
    } = r, a = V(null), t = A(() => e.active), o = A(() => e.activeColor), l = A(() => e.inactiveColor), i = V({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = jc(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((h) => {
      var {
        name: P
      } = h;
      return t.value === P.value;
    }), m = () => u.find((h) => {
      var {
        index: P
      } = h;
      return t.value === P.value;
    }), g = () => {
      lr(t.value) && (t.value < 0 ? S(e["onUpdate:active"], 0) : t.value > s.value - 1 && S(e["onUpdate:active"], s.value - 1));
    }, b = (h) => {
      t.value !== h && (e.onBeforeChange ? y(h) : w(h));
    }, y = (h) => {
      var P = Ft(S(e.onBeforeChange, h));
      Promise.all(P).then((W) => {
        W.every(Boolean) && w(h);
      });
    }, w = (h) => {
      S(e["onUpdate:active"], h), S(e.onChange, h);
    }, O = () => {
      var h = E();
      h.forEach((P) => {
        P.classList.remove(pl, hl, gl);
      });
    }, C = (h) => {
      var P = E(), W = P.length, L = h % 2 === 0;
      P.forEach((Z, K) => {
        $(L, Z, K, W);
      });
    }, $ = (h, P, W, L) => {
      var Z = W === L - 1;
      if (!h && Z) {
        P.classList.add(gl);
        return;
      }
      var K = W === L / 2 - 1, U = W === L / 2;
      K ? P.classList.add(pl) : U && P.classList.add(hl);
    }, E = () => Array.from(a.value.querySelectorAll("." + co())), T = () => {
      S(e.onFabClick);
    }, B = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(B), ie(() => s.value, v), ie(() => e.fabProps, (h) => {
      i.value = Jo({}, qc, h);
    }, {
      immediate: !0,
      deep: !0
    }), sr(() => {
      n.fab && C(s.value);
    }), Tt(() => {
      O(), n.fab && C(s.value);
    }), {
      n: Wc,
      classes: Gc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: T,
      fabProps: i
    };
  }
});
mu.render = Xc;
const Un = mu;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var US = Un, Kc = {
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
function Zc() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(cu);
  return n || Pr("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Jc,
  classes: Qc
} = re("bottom-navigation-item"), _c = {
  type: "danger",
  dot: !0
};
function xc(e, r) {
  var n = oe("var-icon"), a = oe("var-badge"), t = Ie("ripple");
  return $e((p(), k(
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
    [e.icon && !e.$slots.icon ? (p(), be(
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
    )) : _("v-if", !0), Y(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), be(
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
    )) : _("v-if", !0), N(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (p(), k(
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
var pu = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: mn,
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: Kc,
  setup(e) {
    var r = A(() => e.name), n = A(() => e.badge), a = V({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Zc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: r,
      index: t
    }, v = () => i.value === r.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, g = (m = r.value) != null ? m : t.value;
      S(e.onClick, g), S(o.onToggle, g);
    };
    return l(d), ie(() => n.value, (m) => {
      a.value = m === !0 ? _c : n.value;
    }, {
      immediate: !0
    }), {
      n: Jc,
      classes: Qc,
      index: t,
      active: i,
      badge: n,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
pu.render = xc;
const Fn = pu;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var FS = Fn, em = {
  separator: {
    type: String
  },
  onClick: F()
}, hu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function rm() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = dr(hu);
  return {
    length: n,
    breadcrumbList: e,
    bindBreadcrumbList: r
  };
}
function nm() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ur(hu);
  return r || Pr("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: n,
    breadcrumb: e,
    bindBreadcrumb: r
  };
}
var {
  n: am,
  classes: tm
} = re("breadcrumb");
function om(e, r) {
  return p(), k(
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
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? _("v-if", !0) : Y(e.$slots, "separator", {
      key: 0
    }, () => {
      var n;
      return [N(
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
var gu = ee({
  name: "VarBreadcrumb",
  props: em,
  setup(e) {
    var {
      index: r,
      breadcrumb: n,
      bindBreadcrumb: a
    } = nm(), t = A(() => r.value === n.length.value - 1), o = A(() => n.separator.value), l = (i) => {
      t.value || S(e.onClick, i);
    };
    return a(null), {
      n: am,
      classes: tm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
gu.render = om;
const Hn = gu;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var HS = Hn, im = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: lm
} = re("breadcrumbs");
function sm(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var yu = ee({
  name: "VarBreadcrumbs",
  props: im,
  setup(e) {
    var r = A(() => e.separator), {
      bindBreadcrumbList: n,
      length: a
    } = rm(), t = {
      length: a,
      separator: r
    };
    return n(t), {
      n: lm
    };
  }
});
yu.render = sm;
const Yn = yu;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var YS = Yn;
function um(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function dm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function vm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var fm = {
  type: {
    type: String,
    default: "default",
    validator: um
  },
  size: {
    type: String,
    default: "normal",
    validator: dm
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
    validator: vm
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
  n: cm,
  classes: mm
} = re("button-group");
function pm(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var bu = ee({
  name: "VarButtonGroup",
  props: fm,
  setup(e) {
    var {
      bindButtons: r
    } = Pc(), n = {
      elevation: A(() => e.elevation),
      type: A(() => e.type),
      size: A(() => e.size),
      color: A(() => e.color),
      textColor: A(() => e.textColor),
      mode: A(() => e.mode)
    };
    return r(n), {
      n: cm,
      classes: mm,
      formatElevation: hr
    };
  }
});
bu.render = pm;
const jn = bu;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var jS = jn;
function hm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var gm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: hm,
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
function yl(e, r, n, a, t, o, l) {
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
        yl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        yl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ym,
  classes: bm
} = re("card"), wm = 500, Cm = ["src", "alt"];
function Sm(e, r) {
  var n = oe("var-icon"), a = oe("var-button"), t = Ie("ripple");
  return $e((p(), k(
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
      [Y(e.$slots, "image", {}, () => [e.src ? (p(), k(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: q({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        Cm
      )) : _("v-if", !0)]), N(
        "div",
        {
          class: c(e.n("container"))
        },
        [Y(e.$slots, "title", {}, () => [e.title ? (p(), k(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), k(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), k(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (p(), k(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), k(
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), k(
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
        [Y(e.$slots, "close-button", {}, () => [J(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Tr(e.close, ["stop"])
          },
          {
            default: ve(() => [J(
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
      )) : _("v-if", !0)],
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
var wu = ee({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Oe,
    VarButton: rr
  },
  props: gm,
  setup(e) {
    var r = V(null), n = V(null), a = V("auto"), t = V("auto"), o = V("100%"), l = V("100%"), i = V("auto"), s = V("auto"), u = V(void 0), d = V("hidden"), v = V("0px"), f = V("0"), m = A(() => e.layout === "row"), g = V(!1), b = V(!1), {
      zIndex: y
    } = Mt(() => e.floating, 1);
    uo(() => e.floating, () => !m.value);
    var w = "auto", O = "auto", C = null, $ = V(null), E = /* @__PURE__ */ function() {
      var P = bl(function* () {
        clearTimeout($.value), clearTimeout(C), $.value = null, $.value = setTimeout(/* @__PURE__ */ bl(function* () {
          var {
            width: W,
            height: L,
            left: Z,
            top: K
          } = xe(r.value);
          a.value = ye(W), t.value = ye(L), o.value = a.value, l.value = t.value, i.value = ye(K), s.value = ye(Z), u.value = "fixed", w = i.value, O = s.value, g.value = !0, yield Lr(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? wm : 0);
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), T = () => {
      clearTimeout(C), clearTimeout($.value), $.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = O, v.value = "0px", f.value = "0", g.value = !1, C = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", O = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, B = () => {
      S(e["onUpdate:floating"], !1);
    }, h = (P) => {
      S(e.onClick, P);
    };
    return ie(() => e.floating, (P) => {
      m.value || Ne(() => {
        P ? E() : T();
      });
    }, {
      immediate: !0
    }), {
      n: ym,
      classes: bm,
      toSizeUnit: ye,
      card: r,
      cardFloater: n,
      holderWidth: a,
      holderHeight: t,
      floater: $,
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
      close: B,
      showFloatingButtons: g,
      floated: b,
      formatElevation: hr,
      handleClick: h
    };
  }
});
wu.render = Sm;
const Wn = wu;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var WS = Wn, km = {
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
  n: $m,
  classes: Tm
} = re("cell");
function Pm(e, r) {
  var n = oe("var-icon"), a = Ie("ripple");
  return $e((p(), k(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: r[0] || (r[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "icon", {}, () => [e.icon ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [J(
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
    )) : _("v-if", !0)]), N(
      "div",
      {
        class: c(e.n("content"))
      },
      [Y(e.$slots, "default", {}, () => [e.title ? (p(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ae(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), k(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ae(e.description),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [Y(e.$slots, "extra")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Cu = ee({
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  directives: {
    Ripple: We
  },
  props: km,
  setup(e) {
    var r = A(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ye(e.borderOffset),
      "--cell-border-right": ye(e.borderOffset)
    }), n = (a) => {
      S(e.onClick, a);
    };
    return {
      n: $m,
      classes: Tm,
      toSizeUnit: ye,
      borderOffsetStyles: r,
      handleClick: n
    };
  }
});
Cu.render = Pm;
const pn = Cu;
pn.install = function(e) {
  e.component(pn.name, pn);
};
var GS = pn, Om = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Vm
} = re("form-details"), Mm = {
  key: 0
}, Em = {
  key: 0
};
function Bm(e, r) {
  return p(), be(
    Le,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), k(
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
          [J(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), k(
                "div",
                Mm,
                ae(e.errorMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        ), N(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [J(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (p(), k(
                "div",
                Em,
                ae(e.extraMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
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
      )) : _("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var Su = ee({
  name: "VarFormDetails",
  props: Om,
  setup: () => ({
    n: Vm
  })
});
Su.render = Bm;
const _e = Su;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var qS = _e, Im = {
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
}, ku = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Nm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(ku);
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
  } = ur(ku);
  return {
    index: n,
    checkboxGroup: r,
    bindCheckboxGroup: e
  };
}
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
var $u = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Vr() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur($u), a = et(), t = n ? (o) => {
    n(Qo({}, o, {
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
  } = dr($u);
  return {
    length: r,
    formItems: e,
    bindFormItems: n
  };
}
var {
  n: zm,
  classes: Lm
} = re("checkbox");
function Rm(e, r) {
  var n = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Ie("hover"), l = Ie("ripple");
  return p(), k(
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
      [$e((p(), k(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
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
        }, () => [J(
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
        )]), J(
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
    ), J(
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
var Tu = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: We,
    Hover: Ur
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  props: Im,
  setup(e) {
    var r = V(!1), n = A(() => r.value === e.checkedValue), a = A(() => e.checkedValue), t = V(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Dm(), {
      hovering: i,
      handleHovering: s
    } = Pn(), {
      form: u,
      bindForm: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Or(), b = (h) => {
      Ne(() => {
        var {
          validateTrigger: P,
          rules: W,
          modelValue: L
        } = e;
        f(P, h, W, L);
      });
    }, y = (h) => {
      r.value = h;
      var {
        checkedValue: P,
        onChange: W
      } = e;
      S(e["onUpdate:modelValue"], r.value), S(W, r.value), b("onChange"), h === P ? o == null || o.onChecked(P) : o == null || o.onUnchecked(P);
    }, w = (h) => {
      var {
        disabled: P,
        readonly: W,
        checkedValue: L,
        uncheckedValue: Z,
        onClick: K
      } = e;
      if (!(u != null && u.disabled.value || P) && (S(K, h), !(u != null && u.readonly.value || W))) {
        t.value = !0;
        var U = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !n.value && U || y(n.value ? Z : L);
      }
    }, O = (h) => {
      var {
        checkedValue: P,
        uncheckedValue: W
      } = e;
      r.value = h.includes(P) ? P : W;
    }, C = () => {
      t.value = !1;
    }, $ = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, E = (h) => {
      var {
        checkedValue: P,
        uncheckedValue: W
      } = e, L = ![P, W].includes(h);
      L && (h = n.value ? W : P), y(h);
    }, T = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (h) => {
      r.value = h;
    }, {
      immediate: !0
    });
    var B = {
      checkedValue: a,
      checked: n,
      sync: O,
      validate: T,
      resetValidation: g,
      reset: $,
      resetWithAnimation: C
    };
    return S(l, B), S(d, B), {
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
      handleClick: w,
      toggle: E,
      reset: $,
      validate: T,
      resetValidation: g
    };
  }
});
Tu.render = Rm;
const hn = Tu;
hn.install = function(e) {
  e.component(hn.name, hn);
};
var XS = hn;
function Um(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Fm = {
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
    validator: Um
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
  n: Hm,
  classes: Ym
} = re("checkbox-group");
function jm(e, r) {
  var n = oe("var-form-details");
  return p(), k(
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
    ), J(
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
var Pu = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: _e
  },
  props: Fm,
  setup(e) {
    var r = A(() => e.max), n = A(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Nm(), {
      bindForm: l
    } = Vr(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Or(), v = A(() => i.value), f = (B) => {
      Ne(() => {
        var {
          validateTrigger: h,
          rules: P,
          modelValue: W
        } = e;
        s(h, B, P, W);
      });
    }, m = (B) => {
      S(e["onUpdate:modelValue"], B), S(e.onChange, B), f("onChange");
    }, g = (B) => {
      var {
        modelValue: h
      } = e;
      h.includes(B) || m([...h, B]);
    }, b = (B) => {
      var {
        modelValue: h
      } = e;
      h.includes(B) && m(h.filter((P) => P !== B));
    }, y = () => t.forEach((B) => {
      var {
        sync: h
      } = B;
      return h(e.modelValue);
    }), w = () => {
      t.forEach((B) => B.resetWithAnimation());
    }, O = () => {
      var B = t.map((P) => {
        var {
          checkedValue: W
        } = P;
        return W.value;
      }), h = rl(B);
      return w(), S(e["onUpdate:modelValue"], h), h;
    }, C = () => {
      var B = t.filter((P) => {
        var {
          checked: W
        } = P;
        return !W.value;
      }).map((P) => {
        var {
          checkedValue: W
        } = P;
        return W.value;
      }), h = rl(B);
      return w(), S(e["onUpdate:modelValue"], h), h;
    }, $ = () => {
      S(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, y, {
      deep: !0
    }), ie(() => a.value, y);
    var T = {
      max: r,
      checkedCount: n,
      onChecked: g,
      onUnchecked: b,
      validate: E,
      resetValidation: d,
      reset: $,
      errorMessage: v
    };
    return o(T), S(l, T), {
      errorMessage: i,
      n: Hm,
      classes: Ym,
      checkAll: O,
      inverseAll: C,
      reset: $,
      validate: E,
      resetValidation: d
    };
  }
});
Pu.render = jm;
const Gn = Pu;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var KS = Gn;
function Wm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Gm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var qm = {
  type: {
    type: String,
    default: "default",
    validator: Wm
  },
  size: {
    type: String,
    default: "normal",
    validator: Gm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(Ls, "name"),
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
  n: rn,
  classes: Xm
} = re("chip");
function Km(e, r) {
  var n = oe("var-icon");
  return p(), be(
    Le,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [N(
        "span",
        Be({
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
        ), Y(e.$slots, "right"), e.closable ? (p(), k(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: r[0] || (r[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [J(
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
        )) : _("v-if", !0)],
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
var Ou = ee({
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: qm,
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
      } = e, u = rn(o ? "$--flex" : "$--inline-flex"), d = i ? rn("plain") + " " + rn("plain-" + l) : rn("--" + l), v = s ? rn("--round") : null;
      return [rn("--" + t), u, d, v];
    }), a = (t) => {
      S(e.onClose, t);
    };
    return {
      n: rn,
      classes: Xm,
      chipStyles: r,
      contentClass: n,
      handleClose: a
    };
  }
});
Ou.render = Km;
const gn = Ou;
gn.install = function(e) {
  e.component(gn.name, gn);
};
var ZS = gn;
function Zm(e) {
  return ["row", "column"].includes(e);
}
function Jm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Qm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var _m = {
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
    validator: Zm
  },
  justify: {
    type: String,
    validator: Jm
  },
  align: {
    type: String,
    validator: Qm
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
}, Vu = Symbol("ROW_BIND_COL_KEY");
function xm() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(Vu);
  return {
    length: n,
    cols: r,
    bindCols: e
  };
}
function ep() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(Vu);
  return {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Nt,
  classes: rp
} = re("col");
function np(e, r) {
  return p(), k(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Mu = ee({
  name: "VarCol",
  props: _m,
  setup(e) {
    var r = V({
      left: 0,
      right: 0
    }), n = A(() => R(e.span)), a = A(() => R(e.offset)), {
      row: t,
      bindRow: o
    } = ep(), l = {
      setPadding(u) {
        r.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Ti(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Nt("--span-" + u + "-" + m)), f && v.push(Nt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Nt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      S(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), S(o, l), {
      n: Nt,
      classes: rp,
      padding: r,
      toNumber: R,
      toSizeUnit: ye,
      getSize: i,
      span: n,
      offset: a,
      handleClick: s,
      padStartFlex: Xt
    };
  }
});
Mu.render = np;
const qn = Mu;
qn.install = function(e) {
  e.component(qn.name, qn);
};
var JS = qn, Eu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function ap() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = dr(Eu);
  return {
    length: r,
    collapseItem: e,
    bindCollapseItem: n
  };
}
var tp = {
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
  n: op
} = re("collapse");
function ip(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Bu = ee({
  name: "VarCollapse",
  props: tp,
  setup(e) {
    var {
      length: r,
      collapseItem: n,
      bindCollapseItem: a
    } = ap(), t = A(() => e.modelValue), o = A(() => e.offset), l = A(() => e.divider), i = A(() => e.elevation), s = () => !e.accordion && !Pe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Pe(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (b, y) => s() ? y ? e.accordion ? b : [...e.modelValue, b] : e.accordion ? null : e.modelValue.filter((w) => w !== b) : null, d = (b, y) => {
      var w = u(b, y);
      S(e["onUpdate:modelValue"], w), S(e.onChange, w);
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
    return a(g), ie(() => r.value, () => Ne().then(m)), ie(() => e.modelValue, () => Ne().then(m)), {
      n: op,
      divider: l
    };
  }
});
Bu.render = ip;
const Xn = Bu;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var QS = Xn;
function lp() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(Eu);
  return n || Pr("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var sp = {
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
  n: up,
  classes: dp
} = re("collapse-item");
function vp(e, r) {
  var n = oe("var-icon");
  return p(), k(
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
        onClick: r[0] || (r[0] = (a) => e.toggle())
      },
      [N(
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
      ), N(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [Y(e.$slots, "icon", {}, () => [J(
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
    ), $e(N(
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
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[$n, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Iu = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: sp,
  setup(e) {
    var {
      index: r,
      collapse: n,
      bindCollapse: a
    } = lp(), t = !0, o = V(null), l = V(!1), i = V(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = n, m = A(() => e.name), g = (E, T) => {
      s.value === void 0 || E && Pe(s.value) || T === i.value || (i.value = T, b(!0));
    }, b = (E) => {
      e.disabled || E || f(e.name || r.value, !i.value);
    }, y = () => {
      o.value && (o.value.style.height = "", l.value = !0, br(() => {
        var {
          offsetHeight: E
        } = o.value;
        o.value.style.height = "0px", br(() => {
          o.value.style.height = E + "px", t && lo(() => {
            t && C();
          });
        });
      }));
    }, w = () => {
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
    }, C = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, $ = {
      index: r,
      name: m,
      init: g
    };
    return a($), ie(i, (E) => {
      E ? y() : O();
    }), {
      n: up,
      start: w,
      classes: dp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: b,
      contentEl: o,
      transitionend: C,
      formatElevation: hr
    };
  }
});
Iu.render = vp;
const Kn = Iu;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var _S = Kn, fp = {
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
  n: cp
} = re("countdown"), _o = 1e3, xo = 60 * _o, ei = 60 * xo, wl = 24 * ei;
function mp(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", Pt(to(e.timeData)), () => [Se(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Nu = ee({
  name: "VarCountdown",
  props: fp,
  setup(e) {
    var r = V(""), n = V({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, b) => {
      var y = Object.values(b), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach(($, E) => {
        g.includes($) ? g = g.replace($, Da("" + y[E], 2, "0")) : y[E + 1] += y[E] * O[E];
      }), g.includes("S")) {
        var C = Da("" + y[y.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", C) : g.includes("SS") ? g = g.replace("SS", C.slice(0, 2)) : g = g.replace("S", C.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var b = Math.floor(g / wl), y = Math.floor(g % wl / ei), w = Math.floor(g % ei / xo), O = Math.floor(g % xo / _o), C = Math.floor(g % _o), $ = {
        days: b,
        hours: y,
        minutes: w,
        seconds: O,
        milliseconds: C
      };
      n.value = $, S(e.onChange, n.value), r.value = s(e.format, $);
    }, d = () => {
      var {
        time: g,
        onEnd: b
      } = e, y = performance.now();
      if (a || (a = y + R(g)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        S(b);
        return;
      }
      t && (o = br(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || R(e.time)), d());
    }, f = () => {
      t = !1, sl(o);
    }, m = () => {
      a = 0, t = !1, sl(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Mn(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), en(() => {
      i = t, f();
    }), rt(f), {
      showTime: r,
      timeData: n,
      n: cp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Nu.render = mp;
const Zn = Nu;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var xS = Zn;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ya = 9e15, Bn = 1e9, ri = "0123456789abcdef", Jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ni = {
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
  minE: -Ya,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ya,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Du, jr, he = !0, mo = "[DecimalError] ", On = mo + "Invalid argument: ", Au = mo + "Precision limit exceeded", zu = mo + "crypto unavailable", Lu = "[object Decimal]", nr = Math.floor, Xe = Math.pow, pp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, hp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, gp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ru = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Dr = 1e7, me = 7, yp = 9007199254740991, bp = Jt.length - 1, ai = Qt.length - 1, X = { toStringTag: Lu };
X.absoluteValue = X.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), fe(e);
};
X.ceil = function() {
  return fe(new this.constructor(this), this.e + 1, 2);
};
X.clampedTo = X.clamp = function(e, r) {
  var n, a = this, t = a.constructor;
  if (e = new t(e), r = new t(r), !e.s || !r.s)
    return new t(NaN);
  if (e.gt(r))
    throw Error(On + r);
  return n = a.cmp(e), n < 0 ? e : a.cmp(r) > 0 ? r : new t(a);
};
X.comparedTo = X.cmp = function(e) {
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
X.cosine = X.cos = function() {
  var e, r, n = this, a = n.constructor;
  return n.d ? n.d[0] ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + me, a.rounding = 1, n = wp(a, ju(a, n)), a.precision = e, a.rounding = r, fe(jr == 2 || jr == 3 ? n.neg() : n, e, r, !0)) : new a(1) : new a(NaN);
};
X.cubeRoot = X.cbrt = function() {
  var e, r, n, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (he = !1, o = d.s * Xe(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (n = er(d.d), e = d.e, (o = (e - n.length + 1) % 3) && (n += o == 1 || o == -2 ? "0" : "00"), o = Xe(n, 1 / 3), e = nr((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? n = "5e" + e : (n = o.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + e), a = new v(n), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ee(u.plus(d).times(i), u.plus(s), l + 2, 1), er(i.d).slice(0, l) === (n = er(a.d)).slice(0, l))
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
  return he = !0, fe(a, e, v.rounding, r);
};
X.decimalPlaces = X.dp = function() {
  var e, r = this.d, n = NaN;
  if (r) {
    if (e = r.length - 1, n = (e - nr(this.e / me)) * me, e = r[e], e)
      for (; e % 10 == 0; e /= 10)
        n--;
    n < 0 && (n = 0);
  }
  return n;
};
X.dividedBy = X.div = function(e) {
  return Ee(this, new this.constructor(e));
};
X.dividedToIntegerBy = X.divToInt = function(e) {
  var r = this, n = r.constructor;
  return fe(Ee(r, new n(e), 0, 1, 1), n.precision, n.rounding);
};
X.equals = X.eq = function(e) {
  return this.cmp(e) === 0;
};
X.floor = function() {
  return fe(new this.constructor(this), this.e + 1, 3);
};
X.greaterThan = X.gt = function(e) {
  return this.cmp(e) > 0;
};
X.greaterThanOrEqualTo = X.gte = function(e) {
  var r = this.cmp(e);
  return r == 1 || r === 0;
};
X.hyperbolicCosine = X.cosh = function() {
  var e, r, n, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  n = l.precision, a = l.rounding, l.precision = n + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), r = (1 / ho(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Za(l, 1, o.times(r), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = n, l.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (r = o.precision, n = o.rounding, o.precision = r + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Za(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / ho(5, e)), t = Za(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = r, o.rounding = n, fe(t, r, n, !0);
};
X.hyperbolicTangent = X.tanh = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 7, a.rounding = 1, Ee(n.sinh(), n.cosh(), a.precision = e, a.rounding = r)) : new a(n.s);
};
X.inverseCosine = X.acos = function() {
  var e, r = this, n = r.constructor, a = r.abs().cmp(1), t = n.precision, o = n.rounding;
  return a !== -1 ? a === 0 ? r.isNeg() ? Ir(n, t, o) : new n(0) : new n(NaN) : r.isZero() ? Ir(n, t + 4, o).times(0.5) : (n.precision = t + 6, n.rounding = 1, r = r.asin(), e = Ir(n, t + 4, o).times(0.5), n.precision = t, n.rounding = o, e.minus(r));
};
X.inverseHyperbolicCosine = X.acosh = function() {
  var e, r, n = this, a = n.constructor;
  return n.lte(1) ? new a(n.eq(1) ? 0 : NaN) : n.isFinite() ? (e = a.precision, r = a.rounding, a.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4, a.rounding = 1, he = !1, n = n.times(n).minus(1).sqrt().plus(n), he = !0, a.precision = e, a.rounding = r, n.ln()) : new a(n);
};
X.inverseHyperbolicSine = X.asinh = function() {
  var e, r, n = this, a = n.constructor;
  return !n.isFinite() || n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6, a.rounding = 1, he = !1, n = n.times(n).plus(1).sqrt().plus(n), he = !0, a.precision = e, a.rounding = r, n.ln());
};
X.inverseHyperbolicTangent = X.atanh = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, r = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, r, !0) : (o.precision = n = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), n + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = r, t.times(0.5))) : new o(NaN);
};
X.inverseSine = X.asin = function() {
  var e, r, n, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (r = t.abs().cmp(1), n = o.precision, a = o.rounding, r !== -1 ? r === 0 ? (e = Ir(o, n + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = n + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = n, o.rounding = a, t.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, r, n, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= ai)
      return l = Ir(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ai)
      return l = Ir(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, n = Math.min(28, i / me + 2 | 0), e = n; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (he = !1, r = Math.ceil(i / me), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[r] !== void 0)
      for (e = r; l.d[e] === o.d[e] && e--; )
        ;
  return n && (l = l.times(2 << n - 1)), he = !0, fe(l, d.precision = v, d.rounding = f, !0);
};
X.isFinite = function() {
  return !!this.d;
};
X.isInteger = X.isInt = function() {
  return !!this.d && nr(this.e / me) > this.d.length - 2;
};
X.isNaN = function() {
  return !this.s;
};
X.isNegative = X.isNeg = function() {
  return this.s < 0;
};
X.isPositive = X.isPos = function() {
  return this.s > 0;
};
X.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
X.lessThan = X.lt = function(e) {
  return this.cmp(e) < 0;
};
X.lessThanOrEqualTo = X.lte = function(e) {
  return this.cmp(e) < 1;
};
X.logarithm = X.log = function(e) {
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
  if (he = !1, i = v + m, l = vn(u, i), a = r ? _t(d, i + 10) : vn(e, i), s = Ee(l, a, i, 1), yt(s.d, t = v, f))
    do
      if (i += 10, l = vn(u, i), a = r ? _t(d, i + 10) : vn(e, i), s = Ee(l, a, i, 1), !o) {
        +er(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (yt(s.d, t += 10, f));
  return he = !0, fe(s, v, f);
};
X.minus = X.sub = function(e) {
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
    return he ? fe(e, i, s) : e;
  }
  if (n = nr(e.e / me), d = nr(m.e / me), u = u.slice(), o = d - n, o) {
    for (v = o < 0, v ? (r = u, o = -o, l = f.length) : (r = f, n = d, l = u.length), a = Math.max(Math.ceil(i / me), l) + 2, o > a && (o = a, r.length = 1), r.reverse(), a = o; a--; )
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
        u[t] = Dr - 1;
      --u[t], u[a] += Dr;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --n;
  return u[0] ? (e.d = u, e.e = po(u, n), he ? fe(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var r, n = this, a = n.constructor;
  return e = new a(e), !n.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || n.d && !n.d[0] ? fe(new a(n), a.precision, a.rounding) : (he = !1, a.modulo == 9 ? (r = Ee(n, e.abs(), 0, 3, 1), r.s *= e.s) : r = Ee(n, e, 0, a.modulo, 1), r = r.times(e), he = !0, n.minus(r));
};
X.naturalExponential = X.exp = function() {
  return ti(this);
};
X.naturalLogarithm = X.ln = function() {
  return vn(this);
};
X.negated = X.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
X.plus = X.add = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), he ? fe(e, i, s) : e;
  if (o = nr(v.e / me), a = nr(e.e / me), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (n = u, t = -t, l = d.length) : (n = d, a = o, l = u.length), o = Math.ceil(i / me), l = o > l ? o + 1 : l + 1, t > l && (t = l, n.length = 1), n.reverse(); t--; )
      n.push(0);
    n.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, n = d, d = u, u = n), r = 0; t; )
    r = (u[--t] = u[t] + d[t] + r) / Dr | 0, u[t] %= Dr;
  for (r && (u.unshift(r), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = po(u, a), he ? fe(e, i, s) : e;
};
X.precision = X.sd = function(e) {
  var r, n = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(On + e);
  return n.d ? (r = Uu(n.d), e && n.e + 1 > r && (r = n.e + 1)) : r = NaN, r;
};
X.round = function() {
  var e = this, r = e.constructor;
  return fe(new r(e), e.e + 1, r.rounding);
};
X.sine = X.sin = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + Math.max(n.e, n.sd()) + me, a.rounding = 1, n = Sp(a, ju(a, n)), a.precision = e, a.rounding = r, fe(jr > 2 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
X.squareRoot = X.sqrt = function() {
  var e, r, n, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (he = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (r = er(i), (r.length + s) % 2 == 0 && (r += "0"), u = Math.sqrt(r), s = nr((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? r = "5e" + s : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + s), a = new d(r)) : a = new d(u.toString()), n = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ee(l, o, n + 2, 1)).times(0.5), er(o.d).slice(0, n) === (r = er(a.d)).slice(0, n))
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
  return he = !0, fe(a, s, d.rounding, e);
};
X.tangent = X.tan = function() {
  var e, r, n = this, a = n.constructor;
  return n.isFinite() ? n.isZero() ? new a(n) : (e = a.precision, r = a.rounding, a.precision = e + 10, a.rounding = 1, n = n.sin(), n.s = 1, n = Ee(n, new a(1).minus(n.times(n)).sqrt(), e + 10, 0), a.precision = e, a.rounding = r, fe(jr == 2 || jr == 4 ? n.neg() : n, e, r, !0)) : new a(NaN);
};
X.times = X.mul = function(e) {
  var r, n, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (n = nr(d.e / me) + nr(e.e / me), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (r = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + r, o[t--] = i % Dr | 0, r = i / Dr | 0;
    o[t] = (o[t] + r) % Dr | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return r ? ++n : o.shift(), e.d = o, e.e = po(o, n), he ? fe(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, r) {
  return Ri(this, 2, e, r);
};
X.toDecimalPlaces = X.toDP = function(e, r) {
  var n = this, a = n.constructor;
  return n = new a(n), e === void 0 ? n : (pr(e, 0, Bn), r === void 0 ? r = a.rounding : pr(r, 0, 8), fe(n, e + n.e + 1, r));
};
X.toExponential = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Fr(a, !0) : (pr(e, 0, Bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e + 1, r), n = Fr(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
X.toFixed = function(e, r) {
  var n, a, t = this, o = t.constructor;
  return e === void 0 ? n = Fr(t) : (pr(e, 0, Bn), r === void 0 ? r = o.rounding : pr(r, 0, 8), a = fe(new o(t), e + t.e + 1, r), n = Fr(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + n : n;
};
X.toFraction = function(e) {
  var r, n, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, b = m.constructor;
  if (!g)
    return new b(m);
  if (u = n = new b(1), a = s = new b(0), r = new b(a), o = r.e = Uu(g) - m.e - 1, l = o % me, r.d[0] = Xe(10, l < 0 ? me + l : l), e == null)
    e = o > 0 ? r : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(On + i);
    e = i.gt(r) ? o > 0 ? r : u : i;
  }
  for (he = !1, i = new b(er(g)), d = b.precision, b.precision = o = g.length * me * 2; v = Ee(i, r, 0, 1, 1), t = n.plus(v.times(a)), t.cmp(e) != 1; )
    n = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = r, r = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(n), a, 0, 1, 1), s = s.plus(t.times(u)), n = n.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, n, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, n], b.precision = d, he = !0, f;
};
X.toHexadecimal = X.toHex = function(e, r) {
  return Ri(this, 16, e, r);
};
X.toNearest = function(e, r) {
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
  return e.d[0] ? (he = !1, n = Ee(n, e, 0, r, 1).times(e), he = !0, fe(n)) : (e.s = n.s, n = e), n;
};
X.toNumber = function() {
  return +this;
};
X.toOctal = function(e, r) {
  return Ri(this, 8, e, r);
};
X.toPower = X.pow = function(e) {
  var r, n, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Xe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (r = nr(e.e / me), r >= e.d.length - 1 && (n = u < 0 ? -u : u) <= yp)
    return t = Fu(s, i, n, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (r < e.d.length - 1)
      return new s(NaN);
    if (e.d[r] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return n = Xe(+i, u), r = n == 0 || !isFinite(n) ? nr(u * (Math.log("0." + er(i.d)) / Math.LN10 + i.e + 1)) : new s(n + "").e, r > s.maxE + 1 || r < s.minE - 1 ? new s(r > 0 ? l / 0 : 0) : (he = !1, s.rounding = i.s = 1, n = Math.min(12, (r + "").length), t = ti(e.times(vn(i, a + n)), a), t.d && (t = fe(t, a + 5, 1), yt(t.d, a, o) && (r = a + 10, t = fe(ti(e.times(vn(i, r + n)), r), r + 5, 1), +er(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, he = !0, s.rounding = o, fe(t, a, o));
};
X.toPrecision = function(e, r) {
  var n, a = this, t = a.constructor;
  return e === void 0 ? n = Fr(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (pr(e, 1, Bn), r === void 0 ? r = t.rounding : pr(r, 0, 8), a = fe(new t(a), e, r), n = Fr(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + n : n;
};
X.toSignificantDigits = X.toSD = function(e, r) {
  var n = this, a = n.constructor;
  return e === void 0 ? (e = a.precision, r = a.rounding) : (pr(e, 1, Bn), r === void 0 ? r = a.rounding : pr(r, 0, 8)), fe(new a(n), e, r);
};
X.toString = function() {
  var e = this, r = e.constructor, n = Fr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + n : n;
};
X.truncated = X.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
  var e = this, r = e.constructor, n = Fr(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
  return e.isNeg() ? "-" + n : n;
};
function er(e) {
  var r, n, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, r = 1; r < t; r++)
      a = e[r] + "", n = me - a.length, n && (o += an(n)), o += a;
    l = e[r], a = l + "", n = me - a.length, n && (o += an(n));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function pr(e, r, n) {
  if (e !== ~~e || e < r || e > n)
    throw Error(On + e);
}
function yt(e, r, n, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --r;
  return --r < 0 ? (r += me, t = 0) : (t = Math.ceil((r + 1) / me), r %= me), o = Xe(10, me - r), i = e[t] % o | 0, a == null ? r < 3 ? (r == 0 ? i = i / 100 | 0 : r == 1 && (i = i / 10 | 0), l = n < 4 && i == 99999 || n > 3 && i == 49999 || i == 5e4 || i == 0) : l = (n < 4 && i + 1 == o || n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Xe(10, r - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? i = i / 1e3 | 0 : r == 1 ? i = i / 100 | 0 : r == 2 && (i = i / 10 | 0), l = (a || n < 4) && i == 9999 || !a && n > 3 && i == 4999) : l = ((a || n < 4) && i + 1 == o || !a && n > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Xe(10, r - 3) - 1, l;
}
function Ht(e, r, n) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= r;
    for (t[0] += ri.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > n - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / n | 0, t[a] %= n);
  }
  return t.reverse();
}
function wp(e, r) {
  var n, a, t;
  if (r.isZero())
    return r;
  a = r.d.length, a < 32 ? (n = Math.ceil(a / 3), t = (1 / ho(4, n)).toString()) : (n = 16, t = "2.3283064365386962890625e-10"), e.precision += n, r = Za(e, 1, r.times(t), new e(1));
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
    var u, d, v, f, m, g, b, y, w, O, C, $, E, T, B, h, P, W, L, Z, K = a.constructor, U = a.s == t.s ? 1 : -1, M = a.d, I = t.d;
    if (!M || !M[0] || !I || !I[0])
      return new K(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (M ? I && M[0] == I[0] : !I) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          M && M[0] == 0 || !I ? U * 0 : U / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Dr, m = me, d = nr(a.e / m) - nr(t.e / m)), L = I.length, P = M.length, w = new K(U), O = w.d = [], v = 0; I[v] == (M[v] || 0); v++)
      ;
    if (I[v] > (M[v] || 0) && d--, o == null ? (T = o = K.precision, l = K.rounding) : i ? T = o + (a.e - t.e) + 1 : T = o, T < 0)
      O.push(1), g = !0;
    else {
      if (T = T / m + 2 | 0, v = 0, L == 1) {
        for (f = 0, I = I[0], T++; (v < P || f) && T--; v++)
          B = f * s + (M[v] || 0), O[v] = B / I | 0, f = B % I | 0;
        g = f || v < P;
      } else {
        for (f = s / (I[0] + 1) | 0, f > 1 && (I = e(I, f, s), M = e(M, f, s), L = I.length, P = M.length), h = L, C = M.slice(0, L), $ = C.length; $ < L; )
          C[$++] = 0;
        Z = I.slice(), Z.unshift(0), W = I[0], I[1] >= s / 2 && ++W;
        do
          f = 0, u = r(I, C, L, $), u < 0 ? (E = C[0], L != $ && (E = E * s + (C[1] || 0)), f = E / W | 0, f > 1 ? (f >= s && (f = s - 1), b = e(I, f, s), y = b.length, $ = C.length, u = r(b, C, y, $), u == 1 && (f--, n(b, L < y ? Z : I, y, s))) : (f == 0 && (u = f = 1), b = I.slice()), y = b.length, y < $ && b.unshift(0), n(C, b, $, s), u == -1 && ($ = C.length, u = r(I, C, L, $), u < 1 && (f++, n(C, L < $ ? Z : I, $, s))), $ = C.length) : u === 0 && (f++, C = [0]), O[v++] = f, u && C[0] ? C[$++] = M[h] || 0 : (C = [M[h]], $ = 1);
        while ((h++ < P || C[0] !== void 0) && T--);
        g = C[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      w.e = d, Du = g;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, fe(w, i ? o + w.e + 1 : o, l, g);
    }
    return w;
  };
}();
function fe(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (r != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = r - t, o < 0)
        o += me, l = r, d = v[f = 0], s = d / Xe(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / me), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= me, l = o - me + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= me, l = o - me + t, s = l < 0 ? 0 : d / Xe(10, t - l - 1) % 10 | 0;
      }
      if (a = a || r < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Xe(10, t - l - 1)), u = n < 4 ? (s || a) && (n == 0 || n == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (n == 4 || a || n == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Xe(10, t - l) : 0 : v[f - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !v[0])
        return v.length = 0, u ? (r -= e.e + 1, v[0] = Xe(10, (me - r % me) % me), e.e = -r || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Xe(10, me - o), v[f] = l > 0 ? (d / Xe(10, t - l) % Xe(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Dr && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Dr)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return he && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Fr(e, r, n) {
  if (!e.isFinite())
    return Yu(e);
  var a, t = e.e, o = er(e.d), l = o.length;
  return r ? (n && (a = n - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + an(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + an(-t - 1) + o, n && (a = n - l) > 0 && (o += an(a))) : t >= l ? (o += an(t + 1 - l), n && (a = n - t - 1) > 0 && (o = o + "." + an(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), n && (a = n - l) > 0 && (t + 1 === l && (o += "."), o += an(a))), o;
}
function po(e, r) {
  var n = e[0];
  for (r *= me; n >= 10; n /= 10)
    r++;
  return r;
}
function _t(e, r, n) {
  if (r > bp)
    throw he = !0, n && (e.precision = n), Error(Au);
  return fe(new e(Jt), r, 1, !0);
}
function Ir(e, r, n) {
  if (r > ai)
    throw Error(Au);
  return fe(new e(Qt), r, n, !0);
}
function Uu(e) {
  var r = e.length - 1, n = r * me + 1;
  if (r = e[r], r) {
    for (; r % 10 == 0; r /= 10)
      n--;
    for (r = e[0]; r >= 10; r /= 10)
      n++;
  }
  return n;
}
function an(e) {
  for (var r = ""; e--; )
    r += "0";
  return r;
}
function Fu(e, r, n, a) {
  var t, o = new e(1), l = Math.ceil(a / me + 4);
  for (he = !1; ; ) {
    if (n % 2 && (o = o.times(r), Sl(o.d, l) && (t = !0)), n = nr(n / 2), n === 0) {
      n = o.d.length - 1, t && o.d[n] === 0 && ++o.d[n];
      break;
    }
    r = r.times(r), Sl(r.d, l);
  }
  return he = !0, o;
}
function Cl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Hu(e, r, n) {
  for (var a, t = new e(r[0]), o = 0; ++o < r.length; )
    if (a = new e(r[o]), a.s)
      t[n](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ti(e, r) {
  var n, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (r == null ? (he = !1, s = g) : s = r, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Xe(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, n = o = l = new f(1), f.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), n = n.times(++d), i = l.plus(Ee(o, n, s, 1)), er(i.d).slice(0, s) === er(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = fe(l.times(l), s, 1);
      if (r == null)
        if (u < 3 && yt(l.d, s - a, m, u))
          f.precision = s += 10, n = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = g, m, he = !0);
      else
        return f.precision = g, l;
    }
    l = i;
  }
}
function vn(e, r) {
  var n, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, b = e, y = b.d, w = b.constructor, O = w.rounding, C = w.precision;
  if (b.s < 0 || !y || !y[0] || !b.e && y[0] == 1 && y.length == 1)
    return new w(y && !y[0] ? -1 / 0 : b.s != 1 ? NaN : y ? 0 : b);
  if (r == null ? (he = !1, d = C) : d = r, w.precision = d += g, n = er(y), a = n.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && n.charAt(1) > 3; )
      b = b.times(e), n = er(b.d), a = n.charAt(0), m++;
    o = b.e, a > 1 ? (b = new w("0." + n), o++) : b = new w(a + "." + n.slice(1));
  } else
    return u = _t(w, d + 2, C).times(o + ""), b = vn(new w(a + "." + n.slice(1)), d - g).plus(u), w.precision = C, r == null ? fe(b, C, O, he = !0) : b;
  for (v = b, s = l = b = Ee(b.minus(1), b.plus(1), d, 1), f = fe(b.times(b), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), er(u.d).slice(0, d) === er(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(_t(w, d + 2, C).times(o + ""))), s = Ee(s, new w(m), d, 1), r == null)
        if (yt(s.d, d - g, O, i))
          w.precision = d += g, u = l = b = Ee(v.minus(1), v.plus(1), d, 1), f = fe(b.times(b), d, 1), t = i = 1;
        else
          return fe(s, w.precision = C, O, he = !0);
      else
        return w.precision = C, s;
    s = u, t += 2;
  }
}
function Yu(e) {
  return String(e.s * e.s / 0);
}
function oi(e, r) {
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
    e.d.push(+r), he && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Cp(e, r) {
  var n, a, t, o, l, i, s, u, d;
  if (r.indexOf("_") > -1) {
    if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Ru.test(r))
      return oi(e, r);
  } else if (r === "Infinity" || r === "NaN")
    return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (hp.test(r))
    n = 16, r = r.toLowerCase();
  else if (pp.test(r))
    n = 2;
  else if (gp.test(r))
    n = 8;
  else
    throw Error(On + r);
  for (o = r.search(/p/i), o > 0 ? (s = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), l = o >= 0, a = e.constructor, l && (r = r.replace(".", ""), i = r.length, o = i - o, t = Fu(a, new a(n), o, o * 2)), u = Ht(r, n, Dr), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = po(u, d), e.d = u, he = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Xe(2, s) : fn.pow(2, s))), he = !0, e);
}
function Sp(e, r) {
  var n, a = r.d.length;
  if (a < 3)
    return r.isZero() ? r : Za(e, 2, r, r);
  n = 1.4 * Math.sqrt(a), n = n > 16 ? 16 : n | 0, r = r.times(1 / ho(5, n)), r = Za(e, 2, r, r);
  for (var t, o = new e(5), l = new e(16), i = new e(20); n--; )
    t = r.times(r), r = r.times(o.plus(t.times(l.times(t).minus(i))));
  return r;
}
function Za(e, r, n, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / me);
  for (he = !1, s = n.times(n), i = new e(a); ; ) {
    if (l = Ee(i.times(s), new e(r++ * r++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Ee(l.times(s), new e(r++ * r++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return he = !0, l.d.length = d + 1, l;
}
function ho(e, r) {
  for (var n = e; --r; )
    n *= e;
  return n;
}
function ju(e, r) {
  var n, a = r.s < 0, t = Ir(e, e.precision, 1), o = t.times(0.5);
  if (r = r.abs(), r.lte(o))
    return jr = a ? 4 : 1, r;
  if (n = r.divToInt(t), n.isZero())
    jr = a ? 3 : 2;
  else {
    if (r = r.minus(n.times(t)), r.lte(o))
      return jr = Cl(n) ? a ? 2 : 3 : a ? 4 : 1, r;
    jr = Cl(n) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return r.minus(t).abs();
}
function Ri(e, r, n, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = n !== void 0;
  if (g ? (pr(n, 1, Bn), a === void 0 ? a = m.rounding : pr(a, 0, 8)) : (n = m.precision, a = m.rounding), !e.isFinite())
    d = Yu(e);
  else {
    for (d = Fr(e), l = d.indexOf("."), g ? (t = 2, r == 16 ? n = n * 4 - 3 : r == 8 && (n = n * 3 - 2)) : t = r, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ht(Fr(f), 10, t), f.e = f.d.length), v = Ht(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, n, a, 0, t), v = e.d, o = e.e, u = Du), l = v[n], i = t / 2, u = u || v[n + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[n - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = n, u)
        for (; ++v[--n] > t - 1; )
          v[n] = 0, n || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += ri.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (r == 16 || r == 8) {
            for (l = r == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ht(d, t, r), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += ri.charAt(v[l]);
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
function Sl(e, r) {
  if (e.length > r)
    return e.length = r, !0;
}
function kp(e) {
  return new this(e).abs();
}
function $p(e) {
  return new this(e).acos();
}
function Tp(e) {
  return new this(e).acosh();
}
function Pp(e, r) {
  return new this(e).plus(r);
}
function Op(e) {
  return new this(e).asin();
}
function Vp(e) {
  return new this(e).asinh();
}
function Mp(e) {
  return new this(e).atan();
}
function Ep(e) {
  return new this(e).atanh();
}
function Bp(e, r) {
  e = new this(e), r = new this(r);
  var n, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !r.s ? n = new this(NaN) : !e.d && !r.d ? (n = Ir(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), n.s = e.s) : !r.d || e.isZero() ? (n = r.s < 0 ? Ir(this, a, t) : new this(0), n.s = e.s) : !e.d || r.isZero() ? (n = Ir(this, o, 1).times(0.5), n.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, n = this.atan(Ee(e, r, o, 1)), r = Ir(this, o, 1), this.precision = a, this.rounding = t, n = e.s < 0 ? n.minus(r) : n.plus(r)) : n = this.atan(Ee(e, r, o, 1)), n;
}
function Ip(e) {
  return new this(e).cbrt();
}
function Np(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Dp(e, r, n) {
  return new this(e).clamp(r, n);
}
function Ap(e) {
  if (!e || typeof e != "object")
    throw Error(mo + "Object expected");
  var r, n, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Bn,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ya,
    0,
    "toExpPos",
    0,
    Ya,
    "maxE",
    0,
    Ya,
    "minE",
    -Ya,
    0,
    "modulo",
    0,
    9
  ];
  for (r = 0; r < o.length; r += 3)
    if (n = o[r], t && (this[n] = ni[n]), (a = e[n]) !== void 0)
      if (nr(a) === a && a >= o[r + 1] && a <= o[r + 2])
        this[n] = a;
      else
        throw Error(On + n + ": " + a);
  if (n = "crypto", t && (this[n] = ni[n]), (a = e[n]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[n] = !0;
        else
          throw Error(zu);
      else
        this[n] = !1;
    else
      throw Error(On + n + ": " + a);
  return this;
}
function zp(e) {
  return new this(e).cos();
}
function Lp(e) {
  return new this(e).cosh();
}
function Wu(e) {
  var r, n, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, kl(o)) {
      u.s = o.s, he ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        he ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return oi(u, o.toString());
    } else if (s !== "string")
      throw Error(On + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), Ru.test(o) ? oi(u, o) : Cp(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Ap, t.clone = Wu, t.isDecimal = kl, t.abs = kp, t.acos = $p, t.acosh = Tp, t.add = Pp, t.asin = Op, t.asinh = Vp, t.atan = Mp, t.atanh = Ep, t.atan2 = Bp, t.cbrt = Ip, t.ceil = Np, t.clamp = Dp, t.cos = zp, t.cosh = Lp, t.div = Rp, t.exp = Up, t.floor = Fp, t.hypot = Hp, t.ln = Yp, t.log = jp, t.log10 = Gp, t.log2 = Wp, t.max = qp, t.min = Xp, t.mod = Kp, t.mul = Zp, t.pow = Jp, t.random = Qp, t.round = _p, t.sign = xp, t.sin = eh, t.sinh = rh, t.sqrt = nh, t.sub = ah, t.sum = th, t.tan = oh, t.tanh = ih, t.trunc = lh, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < a.length; )
      e.hasOwnProperty(n = a[r++]) || (e[n] = this[n]);
  return t.config(e), t;
}
function Rp(e, r) {
  return new this(e).div(r);
}
function Up(e) {
  return new this(e).exp();
}
function Fp(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Hp() {
  var e, r, n = new this(0);
  for (he = !1, e = 0; e < arguments.length; )
    if (r = new this(arguments[e++]), r.d)
      n.d && (n = n.plus(r.times(r)));
    else {
      if (r.s)
        return he = !0, new this(1 / 0);
      n = r;
    }
  return he = !0, n.sqrt();
}
function kl(e) {
  return e instanceof fn || e && e.toStringTag === Lu || !1;
}
function Yp(e) {
  return new this(e).ln();
}
function jp(e, r) {
  return new this(e).log(r);
}
function Wp(e) {
  return new this(e).log(2);
}
function Gp(e) {
  return new this(e).log(10);
}
function qp() {
  return Hu(this, arguments, "lt");
}
function Xp() {
  return Hu(this, arguments, "gt");
}
function Kp(e, r) {
  return new this(e).mod(r);
}
function Zp(e, r) {
  return new this(e).mul(r);
}
function Jp(e, r) {
  return new this(e).pow(r);
}
function Qp(e) {
  var r, n, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : pr(e, 1, Bn), a = Math.ceil(e / me), this.crypto)
    if (crypto.getRandomValues)
      for (r = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = r[o], t >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (r = crypto.randomBytes(a *= 4); o < a; )
        t = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(zu);
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
function _p(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function xp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function eh(e) {
  return new this(e).sin();
}
function rh(e) {
  return new this(e).sinh();
}
function nh(e) {
  return new this(e).sqrt();
}
function ah(e, r) {
  return new this(e).sub(r);
}
function th() {
  var e = 0, r = arguments, n = new this(r[e]);
  for (he = !1; n.s && ++e < r.length; )
    n = n.plus(r[e]);
  return he = !0, fe(n, this.precision, this.rounding);
}
function oh(e) {
  return new this(e).tan();
}
function ih(e) {
  return new this(e).tanh();
}
function lh(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var fn = X.constructor = Wu(ni);
Jt = new fn(Jt);
Qt = new fn(Qt);
var sh = {
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
  n: uh,
  classes: dh
} = re("counter"), $l = 100, Tl = 600, vh = ["inputmode", "readonly", "disabled"];
function fh(e, r) {
  var n = oe("var-icon"), a = oe("var-button"), t = oe("var-form-details");
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [N(
      "div",
      Be({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [J(
        a,
        {
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
        },
        {
          default: ve(() => [J(n, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), $e(N(
        "input",
        {
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
        },
        null,
        46,
        vh
      ), [[Hv, e.inputValue]]), J(
        a,
        {
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
        },
        {
          default: ve(() => [J(n, {
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
    ), J(
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
var Gu = ee({
  name: "VarCounter",
  components: {
    VarButton: rr,
    VarIcon: Oe,
    VarFormDetails: _e
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: sh,
  setup(e) {
    var r = V(""), {
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
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), b = (I) => {
      Ne(() => {
        var {
          validateTrigger: D,
          rules: x,
          modelValue: H
        } = e;
        o(D, I, x, H);
      });
    }, y = () => {
      var {
        min: I
      } = e;
      S(e["onUpdate:modelValue"], I != null ? R(I) : 0), i();
    }, w = {
      reset: y,
      validate: g,
      resetValidation: i
    }, O = A(() => {
      var {
        max: I,
        modelValue: D
      } = e;
      return I != null && R(D) >= R(I);
    }), C = A(() => {
      var {
        min: I,
        modelValue: D
      } = e;
      return I != null && R(D) <= R(I);
    }), $ = (I) => {
      var {
        decimalLength: D,
        max: x,
        min: H
      } = e, j = R(I);
      return x != null && j > R(x) && (j = R(x)), H != null && j < R(H) && (j = R(H)), I = String(j), D != null && (I = j.toFixed(R(D))), I;
    }, E = (I) => {
      var {
        lazyChange: D,
        onBeforeChange: x
      } = e, {
        value: H
      } = I.target, j = $(H);
      D ? S(x, R(j), M) : U(j), b("onInputChange");
    }, T = () => {
      var {
        disabled: I,
        readonly: D,
        disableDecrement: x,
        decrementButton: H,
        lazyChange: j,
        step: z,
        modelValue: G,
        onDecrement: Q,
        onBeforeChange: ne
      } = e;
      if (!(u != null && u.value || s != null && s.value || I || D || x || !H) && !C.value) {
        var ue = new fn(R(G)).minus(new fn(R(z))).toString(), ge = $(ue), Ce = R(ge);
        S(Q, Ce), j ? S(ne, Ce, M) : (U(ge), b("onDecrement"));
      }
    }, B = () => {
      var {
        disabled: I,
        readonly: D,
        disableIncrement: x,
        incrementButton: H,
        lazyChange: j,
        step: z,
        modelValue: G,
        onIncrement: Q,
        onBeforeChange: ne
      } = e;
      if (!(u != null && u.value || s != null && s.value || I || D || x || !H) && !O.value) {
        var ue = new fn(R(G)).plus(new fn(R(z))).toString(), ge = $(ue), Ce = R(ge);
        S(Q, Ce), j ? S(ne, Ce, M) : (U(ge), b("onIncrement"));
      }
    }, h = () => {
      var {
        press: I,
        lazyChange: D
      } = e;
      !I || D || (m = window.setTimeout(() => {
        K();
      }, Tl));
    }, P = () => {
      var {
        press: I,
        lazyChange: D
      } = e;
      !I || D || (f = window.setTimeout(() => {
        Z();
      }, Tl));
    }, W = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, L = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, Z = () => {
      d = window.setTimeout(() => {
        B(), Z();
      }, $l);
    }, K = () => {
      v = window.setTimeout(() => {
        T(), K();
      }, $l);
    }, U = (I) => {
      r.value = I;
      var D = R(I);
      S(e["onUpdate:modelValue"], D);
    }, M = (I) => {
      U($(String(I))), b("onLazyChange");
    };
    return S(n, w), ie(() => e.modelValue, (I) => {
      U($(String(I))), S(e.onChange, R(I));
    }), U($(String(e.modelValue))), {
      n: uh,
      classes: dh,
      formatElevation: hr,
      inputValue: r,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: C,
      validate: g,
      reset: y,
      resetValidation: i,
      handleChange: E,
      decrement: T,
      increment: B,
      pressDecrement: h,
      pressIncrement: P,
      releaseDecrement: W,
      releaseIncrement: L,
      toSizeUnit: ye,
      toNumber: R
    };
  }
});
Gu.render = fh;
const Jn = Gu;
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
var ek = Jn, qu = 60, Xu = qu * 60, Ku = Xu * 24, ch = Ku * 7, Ja = 1e3, Po = qu * Ja, Pl = Xu * Ja, mh = Ku * Ja, ph = ch * Ja, Ui = "millisecond", ja = "second", Wa = "minute", Ga = "hour", tn = "day", Yt = "week", Br = "month", Zu = "quarter", on = "year", qa = "date", hh = "YYYY-MM-DDTHH:mm:ssZ", Ol = "Invalid Date", gh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, yh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const bh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ii = function(r, n, a) {
  var t = String(r);
  return !t || t.length >= n ? r : "" + Array(n + 1 - t.length).join(a) + r;
}, wh = function(r) {
  var n = -r.utcOffset(), a = Math.abs(n), t = Math.floor(a / 60), o = a % 60;
  return (n <= 0 ? "+" : "-") + ii(t, 2, "0") + ":" + ii(o, 2, "0");
}, Ch = function e(r, n) {
  if (r.date() < n.date())
    return -e(n, r);
  var a = (n.year() - r.year()) * 12 + (n.month() - r.month()), t = r.clone().add(a, Br), o = n - t < 0, l = r.clone().add(a + (o ? -1 : 1), Br);
  return +(-(a + (n - t) / (o ? t - l : l - t)) || 0);
}, Sh = function(r) {
  return r < 0 ? Math.ceil(r) || 0 : Math.floor(r);
}, kh = function(r) {
  var n = {
    M: Br,
    y: on,
    w: Yt,
    d: tn,
    D: qa,
    h: Ga,
    m: Wa,
    s: ja,
    ms: Ui,
    Q: Zu
  };
  return n[r] || String(r || "").toLowerCase().replace(/s$/, "");
}, $h = function(r) {
  return r === void 0;
};
const Th = {
  s: ii,
  z: wh,
  m: Ch,
  a: Sh,
  p: kh,
  u: $h
};
var dt = "en", Qn = {};
Qn[dt] = bh;
var Fi = function(r) {
  return r instanceof go;
}, xt = function e(r, n, a) {
  var t;
  if (!r)
    return dt;
  if (typeof r == "string") {
    var o = r.toLowerCase();
    Qn[o] && (t = o), n && (Qn[o] = n, t = o);
    var l = r.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = r.name;
    Qn[i] = r, t = i;
  }
  return !a && t && (dt = t), t || !a && dt;
}, se = function(r, n) {
  if (Fi(r))
    return r.clone();
  var a = typeof n == "object" ? n : {};
  return a.date = r, a.args = arguments, new go(a);
}, Ph = function(r, n) {
  return se(r, {
    locale: n.$L,
    utc: n.$u,
    x: n.$x,
    $offset: n.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Me = Th;
Me.l = xt;
Me.i = Fi;
Me.w = Ph;
var Oh = function(r) {
  var n = r.date, a = r.utc;
  if (n === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Me.u(n))
    return /* @__PURE__ */ new Date();
  if (n instanceof Date)
    return new Date(n);
  if (typeof n == "string" && !/Z$/i.test(n)) {
    var t = n.match(gh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(n);
}, go = /* @__PURE__ */ function() {
  function e(n) {
    this.$L = xt(n.locale, null, !0), this.parse(n);
  }
  var r = e.prototype;
  return r.parse = function(a) {
    this.$d = Oh(a), this.$x = a.x || {}, this.init();
  }, r.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, r.$utils = function() {
    return Me;
  }, r.isValid = function() {
    return this.$d.toString() !== Ol;
  }, r.isSame = function(a, t) {
    var o = se(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, r.isAfter = function(a, t) {
    return se(a) < this.startOf(t);
  }, r.isBefore = function(a, t) {
    return this.endOf(t) < se(a);
  }, r.$g = function(a, t, o) {
    return Me.u(a) ? this[t] : this.set(o, a);
  }, r.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, r.valueOf = function() {
    return this.$d.getTime();
  }, r.startOf = function(a, t) {
    var o = this, l = Me.u(t) ? !0 : t, i = Me.p(a), s = function(w, O) {
      var C = Me.w(o.$u ? Date.UTC(o.$y, O, w) : new Date(o.$y, O, w), o);
      return l ? C : C.endOf(tn);
    }, u = function(w, O) {
      var C = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Me.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? C : $).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case on:
        return l ? s(1, 0) : s(31, 11);
      case Br:
        return l ? s(1, v) : s(0, v + 1);
      case Yt: {
        var g = this.$locale().weekStart || 0, b = (d < g ? d + 7 : d) - g;
        return s(l ? f - b : f + (6 - b), v);
      }
      case tn:
      case qa:
        return u(m + "Hours", 0);
      case Ga:
        return u(m + "Minutes", 1);
      case Wa:
        return u(m + "Seconds", 2);
      case ja:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, r.endOf = function(a) {
    return this.startOf(a, !1);
  }, r.$set = function(a, t) {
    var o, l = Me.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[tn] = i + "Date", o[qa] = i + "Date", o[Br] = i + "Month", o[on] = i + "FullYear", o[Ga] = i + "Hours", o[Wa] = i + "Minutes", o[ja] = i + "Seconds", o[Ui] = i + "Milliseconds", o)[l], u = l === tn ? this.$D + (t - this.$W) : t;
    if (l === Br || l === on) {
      var d = this.clone().set(qa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(qa, Math.min(this.$D, d.daysInMonth())).$d;
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
    var i = Me.p(t), s = function(f) {
      var m = se(o);
      return Me.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Br)
      return this.set(Br, this.$M + a);
    if (i === on)
      return this.set(on, this.$y + a);
    if (i === tn)
      return s(1);
    if (i === Yt)
      return s(7);
    var u = (l = {}, l[Wa] = Po, l[Ga] = Pl, l[ja] = Ja, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Me.w(d, this);
  }, r.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, r.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Ol;
    var l = a || hh, i = Me.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function(C, $, E, T) {
      return C && (C[$] || C(t, l)) || E[$].slice(0, T);
    }, b = function(C) {
      return Me.s(s % 12 || 12, C, "0");
    }, y = m || function(O, C, $) {
      var E = O < 12 ? "AM" : "PM";
      return $ ? E.toLowerCase() : E;
    }, w = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Me.s(d + 1, 2, "0"),
      MMM: g(o.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Me.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(o.weekdaysMin, this.$W, v, 2),
      ddd: g(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Me.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Me.s(u, 2, "0"),
      s: String(this.$s),
      ss: Me.s(this.$s, 2, "0"),
      SSS: Me.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(yh, function(O, C) {
      return C || w[O] || i.replace(":", "");
    });
  }, r.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, r.diff = function(a, t, o) {
    var l, i = Me.p(t), s = se(a), u = (s.utcOffset() - this.utcOffset()) * Po, d = this - s, v = Me.m(this, s);
    return v = (l = {}, l[on] = v / 12, l[Br] = v, l[Zu] = v / 3, l[Yt] = (d - u) / ph, l[tn] = (d - u) / mh, l[Ga] = d / Pl, l[Wa] = d / Po, l[ja] = d / Ja, l)[i] || d, o ? v : Me.a(v);
  }, r.daysInMonth = function() {
    return this.endOf(Br).$D;
  }, r.$locale = function() {
    return Qn[this.$L];
  }, r.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = xt(a, t, !0);
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
}(), Ju = go.prototype;
se.prototype = Ju;
[["$ms", Ui], ["$s", ja], ["$m", Wa], ["$H", Ga], ["$W", tn], ["$M", Br], ["$y", on], ["$D", qa]].forEach(function(e) {
  Ju[e[1]] = function(r) {
    return this.$g(r, e[0], e[1]);
  };
});
se.extend = function(e, r) {
  return e.$i || (e(r, go, se), e.$i = !0), se;
};
se.locale = xt;
se.isDayjs = Fi;
se.unix = function(e) {
  return se(e * 1e3);
};
se.en = Qn[dt];
se.Ls = Qn;
se.p = {};
const Qu = function(e, r) {
  r.prototype.isSameOrBefore = function(n, a) {
    return this.isSame(n, a) || this.isBefore(n, a);
  };
}, _u = function(e, r) {
  r.prototype.isSameOrAfter = function(n, a) {
    return this.isSame(n, a) || this.isAfter(n, a);
  };
};
function Vh(e) {
  return ["date", "month"].includes(e);
}
var jt = [{
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
}], Mh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Vh
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
  n: Eh
} = re("picker-header");
function Bh(e, r) {
  var n = oe("var-icon"), a = oe("var-button");
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [J(
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
        default: ve(() => [J(n, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), N(
      "div",
      {
        class: c(e.n("value")),
        onClick: r[1] || (r[1] = (t) => e.$emit("check-panel"))
      },
      [J(
        Le,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), k(
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
    ), J(
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
        default: ve(() => [J(n, {
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
var xu = ee({
  name: "PanelHeader",
  components: {
    VarButton: rr,
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
    } = r, a = V(!1), t = V(0), o = A(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return R(v) + t.value;
      var f = (i = Ze.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Ze.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (n("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: Eh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
xu.render = Bh;
const ed = xu;
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, li.apply(this, arguments);
}
se.extend(Qu);
se.extend(_u);
var {
  n: Dt,
  classes: Ih
} = re("month-picker"), {
  n: At
} = re("date-picker");
function Nh(e, r) {
  var n = oe("panel-header"), a = oe("var-button");
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
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
      ), J(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), k("ul", {
            key: e.panelKey
          }, [(p(!0), k(
            Ve,
            null,
            Ue(e.MONTH_LIST, (t) => (p(), k("li", {
              key: t.index
            }, [J(
              a,
              Be({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, li({}, e.buttonProps(t.index)), {
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
var rd = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: rr,
    PanelHeader: ed
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
    } = r, [a, t] = e.current.split("-"), o = V(!1), l = V(0), i = V(null), s = Ae({
      left: !1,
      right: !1
    }), u = A(() => e.choose.chooseYear === e.preview.previewYear), d = A(() => e.preview.previewYear === a), v = (O) => {
      var C, $;
      return (C = ($ = Ze.value.datePickerMonthDict) == null ? void 0 : $[O].abbr) != null ? C : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: C
        },
        componentProps: {
          min: $,
          max: E
        }
      } = e, T = !0, B = !0, h = C + "-" + O;
      return E && (T = se(h).isSameOrBefore(se(E), "month")), $ && (B = se(h).isSameOrAfter(se($), "month")), T && B;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: C,
          chooseDays: $,
          chooseRangeMonth: E
        },
        componentProps: {
          type: T,
          range: B
        }
      } = e;
      if (B) {
        if (!E.length)
          return !1;
        var h = se(O).isSameOrBefore(se(E[1]), "month"), P = se(O).isSameOrAfter(se(E[0]), "month");
        return h && P;
      }
      return T === "month" ? C.includes(O) : $.some((W) => W.includes(O));
    }, g = (O) => {
      var {
        choose: {
          chooseMonth: C
        },
        preview: {
          previewYear: $
        },
        componentProps: {
          allowedDates: E,
          color: T,
          multiple: B,
          range: h
        }
      } = e, P = $ + "-" + O, W = () => h || B ? m(P) : (C == null ? void 0 : C.index) === O && u.value, L = () => f(O) ? E ? !E(P) : !1 : !0, Z = L(), K = () => Z ? !0 : h || B ? !m(P) : !u.value || (C == null ? void 0 : C.index) !== O, U = () => d.value && t === O && e.componentProps.showCurrent ? (h || B || u.value) && Z ? !0 : h || B ? !m(P) : u.value ? (C == null ? void 0 : C.index) !== t : !0 : !1, M = () => Z ? "" : U() ? T ?? "" : W() ? "" : At() + "-color-cover", I = M().startsWith(At());
      return {
        outline: U(),
        text: K(),
        color: K() ? "" : T,
        textColor: I ? "" : M(),
        [At() + "-color-cover"]: I,
        class: Ih(Dt("button"), [Z, Dt("button--disabled")]),
        disabled: Z
      };
    }, b = (O, C) => {
      var $ = C.currentTarget;
      $.classList.contains(Dt("button--disabled")) || n("choose-month", O);
    }, y = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, n("check-preview", "year", O);
    }, w = (O) => {
      i.value.checkDate(O);
    };
    return ie(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: C,
          max: $
        }
      } = e;
      $ && (s.right = !se("" + (R(O) + 1)).isSameOrBefore(se($), "year")), C && (s.left = !se("" + (R(O) - 1)).isSameOrAfter(se(C), "year"));
    }, {
      immediate: !0
    }), {
      n: Dt,
      nDate: At,
      pack: Ze,
      MONTH_LIST: jt,
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
rd.render = Nh;
const Dh = rd;
var {
  n: Vl,
  classes: Ah
} = re("year-picker"), zh = ["onClick"];
function Lh(e, r) {
  return p(), k(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), k(
      Ve,
      null,
      Ue(e.yearList, (n) => (p(), k(
        "li",
        {
          key: n,
          class: c(e.classes(e.n("item"), [n === e.toNumber(e.preview), e.n("item--active")])),
          style: q({
            color: n === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(n)
        },
        ae(n),
        15,
        zh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var nd = ee({
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
      var u = [R(l) + 100, R(l) - 100];
      if (i) {
        var d = se(i).format("YYYY-MM-D"), v = R(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = se(s).format("YYYY-MM-D"), m = R(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      n("choose-year", o);
    };
    return sr(() => {
      var o = document.querySelector("." + Vl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Vl,
      classes: Ah,
      yearList: a,
      chooseYear: t,
      toNumber: R
    };
  }
});
nd.render = Lh;
const Rh = nd;
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, si.apply(this, arguments);
}
se.extend(Qu);
se.extend(_u);
var {
  n: Ha,
  classes: Uh
} = re("day-picker"), {
  n: zt
} = re("date-picker");
function Fh(e, r) {
  var n = oe("panel-header"), a = oe("var-button");
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
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
      ), J(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), k("div", {
            key: e.panelKey
          }, [N(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), k(
              Ve,
              null,
              Ue(e.sortWeekList, (t) => (p(), k(
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
          ), N(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(p(!0), k(
              Ve,
              null,
              Ue(e.days, (t, o) => (p(), k("li", {
                key: o
              }, [J(
                a,
                Be({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, si({}, e.buttonProps(t)), {
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
var ad = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: rr,
    PanelHeader: ed
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
    } = r, [a, t, o] = e.current.split("-"), l = V([]), i = V(!1), s = V(0), u = V(null), d = Ae({
      left: !1,
      right: !1
    }), v = A(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = A(() => {
      var h;
      return e.choose.chooseYear === e.preview.previewYear && ((h = e.choose.chooseMonth) == null ? void 0 : h.index) === e.preview.previewMonth.index;
    }), m = A(() => {
      var h = st.findIndex((P) => P.index === e.componentProps.firstDayOfWeek);
      return h === -1 || h === 0 ? st : st.slice(h).concat(st.slice(0, h));
    }), g = (h) => {
      var P, W;
      return (P = (W = Ze.value.datePickerWeekDict) == null ? void 0 : W[h].abbr) != null ? P : "";
    }, b = (h) => h > 0 ? h : "", y = () => {
      var {
        preview: {
          previewMonth: h,
          previewYear: P
        }
      } = e, W = se(P + "-" + h.index).daysInMonth(), L = se(P + "-" + h.index + "-01").day(), Z = m.value.findIndex((K) => K.index === "" + L);
      l.value = [...Array(Z).fill(-1), ...Array.from(Array(W + 1).keys())].filter((K) => K);
    }, w = () => {
      var {
        preview: {
          previewYear: h,
          previewMonth: P
        },
        componentProps: {
          max: W,
          min: L
        }
      } = e;
      if (W) {
        var Z = h + "-" + (R(P.index) + 1);
        d.right = !se(Z).isSameOrBefore(se(W), "month");
      }
      if (L) {
        var K = h + "-" + (R(P.index) - 1);
        d.left = !se(K).isSameOrAfter(se(L), "month");
      }
    }, O = (h) => {
      var {
        preview: {
          previewYear: P,
          previewMonth: W
        },
        componentProps: {
          min: L,
          max: Z
        }
      } = e, K = !0, U = !0, M = P + "-" + W.index + "-" + h;
      return Z && (K = se(M).isSameOrBefore(se(Z), "day")), L && (U = se(M).isSameOrAfter(se(L), "day")), K && U;
    }, C = (h) => {
      var {
        choose: {
          chooseDays: P,
          chooseRangeDay: W
        },
        componentProps: {
          range: L
        }
      } = e;
      if (L) {
        if (!W.length)
          return !1;
        var Z = se(h).isSameOrBefore(se(W[1]), "day"), K = se(h).isSameOrAfter(se(W[0]), "day");
        return Z && K;
      }
      return P.includes(h);
    }, $ = (h) => {
      if (h < 0)
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
          previewYear: W,
          previewMonth: L
        },
        componentProps: {
          allowedDates: Z,
          color: K,
          multiple: U,
          range: M
        }
      } = e, I = W + "-" + L.index + "-" + h, D = () => M || U ? C(I) : R(P) === h && f.value, x = () => O(h) ? Z ? !Z(I) : !1 : !0, H = x(), j = () => H ? !0 : M || U ? !C(I) : !f.value || R(P) !== h, z = () => v.value && R(o) === h && e.componentProps.showCurrent ? (M || U || f.value) && H ? !0 : M || U ? !C(I) : f.value ? P !== o : !0 : !1, G = () => H ? "" : z() ? K ?? "" : D() ? "" : zt() + "-color-cover", Q = G().startsWith(zt());
      return {
        text: j(),
        outline: z(),
        textColor: Q ? "" : G(),
        [zt() + "-color-cover"]: Q,
        class: Uh(Ha("button"), Ha("button--usable"), [H, Ha("button--disabled")]),
        disabled: H
      };
    }, E = (h) => {
      i.value = h === "prev", s.value += h === "prev" ? -1 : 1, n("check-preview", "month", h);
    }, T = (h, P) => {
      var W = P.currentTarget;
      W.classList.contains(Ha("button--disabled")) || n("choose-day", h);
    }, B = (h) => {
      u.value.checkDate(h);
    };
    return sr(() => {
      y(), w();
    }), ie(() => e.preview, () => {
      y(), w();
    }), {
      n: Ha,
      nDate: zt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: B,
      filterDay: b,
      getDayAbbr: g,
      checkDate: E,
      chooseDay: T,
      buttonProps: $
    };
  }
});
ad.render = Fh;
const Hh = ad;
var {
  n: Yh,
  classes: jh
} = re("date-picker");
function Wh(e, r) {
  var n = oe("year-picker-panel"), a = oe("month-picker-panel"), t = oe("day-picker-panel");
  return p(), k(
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
      ), N(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: r[1] || (r[1] = (o) => e.clickEl("date"))
        },
        [J(
          Le,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), k("div", {
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
              )])])) : (p(), k("div", {
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
              )]) : Y(e.$slots, "date", Pt(Be({
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
      [J(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), be(
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
          )) : e.getPanelType === "month" ? (p(), be(
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
          )) : e.getPanelType === "date" ? (p(), be(
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
          )) : _("v-if", !0)]),
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
var td = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Dh,
    YearPickerPanel: Rh,
    DayPickerPanel: Hh
  },
  props: Mh,
  setup(e) {
    var r = 0, n = 0, a = "", t, o = se().format("YYYY-MM-D"), [l, i] = o.split("-"), s = jt.find((le) => le.index === i), u = V(!1), d = V(!1), v = V(!0), f = V(), m = V(), g = V(), b = V(s), y = V(l), w = V(!1), O = V([]), C = V([]), $ = V([]), E = V([]), T = V(null), B = V(null), h = Ae({
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
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: O.value,
      chooseDays: C.value,
      chooseRangeMonth: $.value,
      chooseRangeDay: E.value
    })), W = A(() => ({
      previewMonth: b.value,
      previewYear: y.value
    })), L = A(() => {
      var {
        multiple: le,
        range: we
      } = e;
      if (we)
        return $.value.length ? $.value[0] + " ~ " + $.value[1] : "";
      var pe = "";
      if (f.value) {
        var ke, Te;
        pe = (ke = (Te = Ze.value.datePickerMonthDict) == null ? void 0 : Te[f.value.index].name) != null ? ke : "";
      }
      return le ? "" + O.value.length + Ze.value.datePickerSelected : pe;
    }), Z = A(() => {
      var le, we, pe, ke, {
        multiple: Te,
        range: Re
      } = e;
      if (Re) {
        var tr = E.value.map((ko) => se(ko).format("YYYY-MM-DD"));
        return tr.length ? tr[0] + " ~ " + tr[1] : "";
      }
      if (Te)
        return "" + C.value.length + Ze.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var wr = se(m.value + "-" + f.value.index + "-" + g.value).day(), Fa = st.find((ko) => ko.index === "" + wr), _i = (le = (we = Ze.value.datePickerWeekDict) == null ? void 0 : we[Fa.index].name) != null ? le : "", Nv = (pe = (ke = Ze.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? pe : "", Dv = Da(g.value, 2, "0");
      return Ze.value.lang === "zh-CN" ? f.value.index + "-" + Dv + " " + _i.slice(0, 3) : _i.slice(0, 3) + ", " + Nv.slice(0, 3) + " " + g.value;
    }), K = A(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), U = A(() => !e.touchable || ["", "year"].includes(K.value)), M = A(() => {
      var le, we, pe, ke, Te = se(m.value + "-" + ((le = f.value) == null ? void 0 : le.index) + "-" + g.value).day(), Re = g.value ? Da(g.value, 2, "0") : "";
      return {
        week: "" + Te,
        year: (we = m.value) != null ? we : "",
        month: (pe = (ke = f.value) == null ? void 0 : ke.index) != null ? pe : "",
        date: Re
      };
    }), I = A(() => P.value.chooseRangeDay.map((le) => se(le).format("YYYY-MM-DD"))), D = A(() => m.value === y.value), x = A(() => {
      var le;
      return ((le = f.value) == null ? void 0 : le.index) === b.value.index;
    }), H = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, j = (le) => {
      if (!U.value) {
        var {
          clientX: we,
          clientY: pe
        } = le.touches[0];
        r = we, n = pe;
      }
    }, z = (le, we) => le >= we && le > 20 ? "x" : "y", G = (le) => {
      if (!U.value) {
        var {
          clientX: we,
          clientY: pe
        } = le.touches[0], ke = we - r, Te = pe - n;
        t = z(Math.abs(ke), Math.abs(Te)), a = ke > 0 ? "prev" : "next";
      }
    }, Q = () => {
      if (!(U.value || t !== "x")) {
        var le = K.value === "month" ? T : B;
        lo(() => {
          le.value.forwardRef(a), Ye();
        });
      }
    }, ne = (le, we) => {
      var pe = we === "month" ? $ : E;
      if (pe.value = v.value ? [le, le] : [pe.value[0], le], v.value = !v.value, v.value) {
        var ke = se(pe.value[0]).isAfter(pe.value[1]), Te = ke ? [pe.value[1], pe.value[0]] : [...pe.value];
        S(e["onUpdate:modelValue"], Te), S(e.onChange, Te);
      }
    }, ue = (le, we) => {
      var pe = we === "month" ? O : C, ke = we === "month" ? "YYYY-MM" : "YYYY-MM-DD", Te = pe.value.map((tr) => se(tr).format(ke)), Re = Te.findIndex((tr) => tr === le);
      Re === -1 ? Te.push(le) : Te.splice(Re, 1), S(e["onUpdate:modelValue"], Te), S(e.onChange, Te);
    }, ge = (le, we) => !m.value || !f.value ? !1 : D.value ? le === "month" ? we.index < f.value.index : x.value ? we < R(g.value) : f.value.index > b.value.index : m.value > y.value, Ce = (le) => {
      var {
        readonly: we,
        range: pe,
        multiple: ke,
        onChange: Te,
        "onUpdate:modelValue": Re
      } = e;
      if (!(le < 0 || we)) {
        w.value = ge("day", le);
        var tr = y.value + "-" + b.value.index + "-" + le, wr = se(tr).format("YYYY-MM-DD");
        pe ? ne(wr, "day") : ke ? ue(wr, "day") : (S(Re, wr), S(Te, wr));
      }
    }, ar = (le) => {
      var {
        type: we,
        readonly: pe,
        range: ke,
        multiple: Te,
        onChange: Re,
        onPreview: tr,
        "onUpdate:modelValue": wr
      } = e;
      if (w.value = ge("month", le), we === "month" && !pe) {
        var Fa = y.value + "-" + le.index;
        ke ? ne(Fa, "month") : Te ? ue(Fa, "month") : (S(wr, Fa), S(Re, Fa));
      } else
        b.value = le, S(tr, R(y.value), R(b.value.index));
      d.value = !1;
    }, te = (le) => {
      y.value = "" + le, u.value = !1, d.value = !0, S(e.onPreview, R(y.value), R(b.value.index));
    }, de = (le, we) => {
      var pe = we === "prev" ? -1 : 1;
      if (le === "year")
        y.value = "" + (R(y.value) + pe);
      else {
        var ke = R(b.value.index) + pe;
        ke < 1 && (y.value = "" + (R(y.value) - 1), ke = 12), ke > 12 && (y.value = "" + (R(y.value) + 1), ke = 1), b.value = jt.find((Te) => R(Te.index) === ke);
      }
      S(e.onPreview, R(y.value), R(b.value.index));
    }, ce = () => (e.multiple || e.range) && !Pe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Pe(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, De = (le) => Pe(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ke = (le, we) => {
      var pe = we === "month" ? $ : E, ke = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = le.map((wr) => se(wr).format(ke)).slice(0, 2), Re = pe.value.some((wr) => De(wr));
      if (!Re) {
        pe.value = Te;
        var tr = se(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && tr && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, Ge = (le, we) => {
      var pe = we === "month" ? O : C, ke = we === "month" ? "YYYY-MM" : "YYYY-MM-D", Te = Array.from(new Set(le.map((Re) => se(Re).format(ke))));
      pe.value = Te.filter((Re) => Re !== "Invalid Date");
    }, He = (le) => {
      var we = se(le).format("YYYY-MM-D");
      if (!De(we)) {
        var [pe, ke, Te] = we.split("-"), Re = jt.find((tr) => tr.index === ke);
        f.value = Re, m.value = pe, g.value = Te, b.value = Re, y.value = pe;
      }
    }, Ye = () => {
      n = 0, r = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (le) => {
      if (!(!ce() || De(le) || !le))
        if (e.range) {
          if (!Pe(le))
            return;
          v.value = le.length !== 1, Ke(le, e.type);
        } else if (e.multiple) {
          if (!Pe(le))
            return;
          Ge(le, e.type);
        } else
          He(le);
    }, {
      immediate: !0
    }), ie(K, Ye), {
      n: Yh,
      classes: jh,
      monthPanelEl: T,
      dayPanelEl: B,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: L,
      getDateTitle: Z,
      getPanelType: K,
      getChoose: P,
      getPreview: W,
      componentProps: h,
      slotProps: M,
      formatRange: I,
      clickEl: H,
      handleTouchstart: j,
      handleTouchmove: G,
      handleTouchend: Q,
      getChooseDay: Ce,
      getChooseMonth: ar,
      getChooseYear: te,
      checkPreview: de,
      formatElevation: hr
    };
  }
});
td.render = Wh;
const _n = td;
_n.install = function(e) {
  e.component(_n.name, _n);
};
var rk = _n;
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
function Gh(e) {
  return ["left", "center", "right"].includes(e);
}
var qh = ui({
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
    validator: Gh
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
}, Je(Vt, [
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
var {
  n: Xh,
  classes: Kh
} = re("dialog");
function Zh(e, r) {
  var n = oe("var-button"), a = oe("var-popup");
  return p(), be(
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
      default: ve(() => [N(
        "div",
        Be({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: di({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [N(
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
        ), N(
          "div",
          {
            class: c(e.n("message")),
            style: q({
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
        ), N(
          "div",
          {
            class: c(e.n("actions"))
          },
          [e.cancelButton ? (p(), be(
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
          )) : _("v-if", !0), e.confirmButton ? (p(), be(
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
          )) : _("v-if", !0)],
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
var od = ee({
  name: "VarDialog",
  components: {
    VarPopup: Sr,
    VarButton: rr
  },
  inheritAttrs: !1,
  props: qh,
  setup(e) {
    var r = V(!1), n = V(!1), a = () => S(e["onUpdate:show"], !1), t = () => {
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
    return ie(() => e.show, (i) => {
      r.value = i;
    }, {
      immediate: !0
    }), ie(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        n.value = !1;
        return;
      }
      n.value = i;
    }, {
      immediate: !0
    }), {
      n: Xh,
      classes: Kh,
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
od.render = Zh;
const yn = od;
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
var sn, ro = {};
function Jh(e) {
  return e === void 0 && (e = {}), Fe(e) ? eo({}, ro, {
    message: e
  }) : eo({}, ro, e);
}
function _r(e) {
  return at() ? new Promise((r) => {
    _r.close();
    var n = Jh(e), a = Ae(n);
    a.teleport = "body", sn = a;
    var {
      unmountInstance: t
    } = ot(yn, a, {
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
        S(a.onClosed), t(), sn === a && (sn = null);
      },
      onRouteChange: () => {
        t(), sn === a && (sn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
_r.setDefaultOptions = function(e) {
  ro = e;
};
_r.resetDefaultOptions = function() {
  ro = {};
};
_r.close = function() {
  if (sn != null) {
    var e = sn;
    sn = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
yn.install = function(e) {
  e.component(yn.name, yn);
};
_r.install = function(e) {
  e.component(yn.name, yn);
};
_r.Component = yn;
var nk = yn, Qh = {
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
function Xa() {
  return Xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Xa.apply(this, arguments);
}
var {
  n: _h,
  classes: xh
} = re("divider");
function eg(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [Y(e.$slots, "default", {}, () => [e.description ? (p(), k(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var id = ee({
  name: "VarDivider",
  props: Qh,
  setup(e, r) {
    var {
      slots: n
    } = r, a = Ae({
      withText: !1
    }), t = A(() => No(e.inset) ? e.inset : !0), o = A(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (No(i) || i === 0)
        return Xa({}, d);
      var v = R(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Xa({}, d, {
        height: "calc(80% - " + ye(f) + ")"
      }) : Xa({}, d, {
        width: "calc(100% - " + ye(f) + ")",
        left: v > 0 ? ye(f) : ye(0)
      });
    }), l = () => {
      a.withText = !!n.default || !!e.description;
    };
    return sr(() => {
      l();
    }), Tt(() => {
      l();
    }), Xa({
      n: _h,
      classes: xh
    }, Yv(a), {
      style: o,
      isInset: t
    });
  }
});
id.render = eg;
const xn = id;
xn.install = function(e) {
  e.component(xn.name, xn);
};
var ak = xn, rg = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wt(e) {
  return e.replace(/left|right|bottom|top/g, function(r) {
    return rg[r];
  });
}
var Wr = "top", Vn = "bottom", Aa = "right", bn = "left", yo = "auto", bo = [Wr, Vn, Aa, bn], wo = "start", bt = "end", ng = "clippingParents", ld = "viewport", it = "popper", ag = "reference", Ml = /* @__PURE__ */ bo.reduce(function(e, r) {
  return e.concat([r + "-" + wo, r + "-" + bt]);
}, []), sd = /* @__PURE__ */ [].concat(bo, [yo]).reduce(function(e, r) {
  return e.concat([r, r + "-" + wo, r + "-" + bt]);
}, []), tg = "beforeRead", og = "read", ig = "afterRead", lg = "beforeMain", sg = "main", ug = "afterMain", dg = "beforeWrite", vg = "write", fg = "afterWrite", vi = [tg, og, ig, lg, sg, ug, dg, vg, fg];
function Gr(e) {
  return e.split("-")[0];
}
var cg = {
  start: "end",
  end: "start"
};
function El(e) {
  return e.replace(/start|end/g, function(r) {
    return cg[r];
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
function za(e) {
  var r = Mr(e).Element;
  return e instanceof r || e instanceof Element;
}
function kr(e) {
  var r = Mr(e).HTMLElement;
  return e instanceof r || e instanceof HTMLElement;
}
function Hi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var r = Mr(e).ShadowRoot;
  return e instanceof r || e instanceof ShadowRoot;
}
function In(e) {
  return ((za(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var vt = Math.max, Bl = Math.min, Qa = Math.round;
function fi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(r) {
    return r.brand + "/" + r.version;
  }).join(" ") : navigator.userAgent;
}
function ud() {
  return !/^((?!chrome|android).)*safari/i.test(fi());
}
function _a(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  r && kr(e) && (t = e.offsetWidth > 0 && Qa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Qa(a.height) / e.offsetHeight || 1);
  var l = za(e) ? Mr(e) : window, i = l.visualViewport, s = !ud() && n, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Yi(e) {
  var r = Mr(e), n = r.pageXOffset, a = r.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function ji(e) {
  return _a(In(e)).left + Yi(e).scrollLeft;
}
function mg(e, r) {
  var n = Mr(e), a = In(e), t = n.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = ud();
    (u || !u && r === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + ji(e),
    y: s
  };
}
function Ar(e) {
  return Mr(e).getComputedStyle(e);
}
function pg(e) {
  var r, n = In(e), a = Yi(e), t = (r = e.ownerDocument) == null ? void 0 : r.body, o = vt(n.scrollWidth, n.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = vt(n.scrollHeight, n.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + ji(e), s = -a.scrollTop;
  return Ar(t || n).direction === "rtl" && (i += vt(n.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Hr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Co(e) {
  return Hr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Hi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    In(e)
  );
}
function Wi(e) {
  var r = Ar(e), n = r.overflow, a = r.overflowX, t = r.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + t + a);
}
function dd(e) {
  return ["html", "body", "#document"].indexOf(Hr(e)) >= 0 ? e.ownerDocument.body : kr(e) && Wi(e) ? e : dd(Co(e));
}
function ft(e, r) {
  var n;
  r === void 0 && (r = []);
  var a = dd(e), t = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mr(a), l = t ? [o].concat(o.visualViewport || [], Wi(a) ? a : []) : a, i = r.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ft(Co(l)))
  );
}
function hg(e) {
  return ["table", "td", "th"].indexOf(Hr(e)) >= 0;
}
function Il(e) {
  return !kr(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function gg(e) {
  var r = /firefox/i.test(fi()), n = /Trident/i.test(fi());
  if (n && kr(e)) {
    var a = Ar(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Co(e);
  for (Hi(t) && (t = t.host); kr(t) && ["html", "body"].indexOf(Hr(t)) < 0; ) {
    var o = Ar(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || r && o.willChange === "filter" || r && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Gi(e) {
  for (var r = Mr(e), n = Il(e); n && hg(n) && Ar(n).position === "static"; )
    n = Il(n);
  return n && (Hr(n) === "html" || Hr(n) === "body" && Ar(n).position === "static") ? r : n || gg(e) || r;
}
function yg(e, r) {
  var n = r.getRootNode && r.getRootNode();
  if (e.contains(r))
    return !0;
  if (n && Hi(n)) {
    var a = r;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function ci(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function bg(e, r) {
  var n = _a(e, !1, r === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Nl(e, r, n) {
  return r === ld ? ci(mg(e, n)) : za(r) ? bg(r, n) : ci(pg(In(e)));
}
function wg(e) {
  var r = ft(Co(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, a = n && kr(e) ? Gi(e) : e;
  return za(a) ? r.filter(function(t) {
    return za(t) && yg(t, a) && Hr(t) !== "body";
  }) : [];
}
function Cg(e, r, n, a) {
  var t = r === "clippingParents" ? wg(e) : [].concat(r), o = [].concat(t, [n]), l = o[0], i = o.reduce(function(s, u) {
    var d = Nl(e, u, a);
    return s.top = vt(d.top, s.top), s.right = Bl(d.right, s.right), s.bottom = Bl(d.bottom, s.bottom), s.left = vt(d.left, s.left), s;
  }, Nl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function wt(e) {
  return e.split("-")[1];
}
function Sg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function vd(e) {
  var r = e.reference, n = e.element, a = e.placement, t = a ? Gr(a) : null, o = a ? wt(a) : null, l = r.x + r.width / 2 - n.width / 2, i = r.y + r.height / 2 - n.height / 2, s;
  switch (t) {
    case Wr:
      s = {
        x: l,
        y: r.y - n.height
      };
      break;
    case Vn:
      s = {
        x: l,
        y: r.y + r.height
      };
      break;
    case Aa:
      s = {
        x: r.x + r.width,
        y: i
      };
      break;
    case bn:
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
  var u = t ? Sg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case wo:
        s[u] = s[u] - (r[d] / 2 - n[d] / 2);
        break;
      case bt:
        s[u] = s[u] + (r[d] / 2 - n[d] / 2);
        break;
    }
  }
  return s;
}
function kg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function $g(e) {
  return Object.assign({}, kg(), e);
}
function Tg(e, r) {
  return r.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
function fd(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = a === void 0 ? e.placement : a, o = n.strategy, l = o === void 0 ? e.strategy : o, i = n.boundary, s = i === void 0 ? ng : i, u = n.rootBoundary, d = u === void 0 ? ld : u, v = n.elementContext, f = v === void 0 ? it : v, m = n.altBoundary, g = m === void 0 ? !1 : m, b = n.padding, y = b === void 0 ? 0 : b, w = $g(typeof y != "number" ? y : Tg(y, bo)), O = f === it ? ag : it, C = e.rects.popper, $ = e.elements[g ? O : f], E = Cg(za($) ? $ : $.contextElement || In(e.elements.popper), s, d, l), T = _a(e.elements.reference), B = vd({
    reference: T,
    element: C,
    strategy: "absolute",
    placement: t
  }), h = ci(Object.assign({}, C, B)), P = f === it ? h : T, W = {
    top: E.top - P.top + w.top,
    bottom: P.bottom - E.bottom + w.bottom,
    left: E.left - P.left + w.left,
    right: P.right - E.right + w.right
  }, L = e.modifiersData.offset;
  if (f === it && L) {
    var Z = L[t];
    Object.keys(W).forEach(function(K) {
      var U = [Aa, Vn].indexOf(K) >= 0 ? 1 : -1, M = [Wr, Vn].indexOf(K) >= 0 ? "y" : "x";
      W[K] += Z[M] * U;
    });
  }
  return W;
}
function Pg(e, r) {
  r === void 0 && (r = {});
  var n = r, a = n.placement, t = n.boundary, o = n.rootBoundary, l = n.padding, i = n.flipVariations, s = n.allowedAutoPlacements, u = s === void 0 ? sd : s, d = wt(a), v = d ? i ? Ml : Ml.filter(function(g) {
    return wt(g) === d;
  }) : bo, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, b) {
    return g[b] = fd(e, {
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
function Og(e) {
  if (Gr(e) === yo)
    return [];
  var r = Wt(e);
  return [El(e), r, El(r)];
}
function Vg(e) {
  var r = e.state, n = e.options, a = e.name;
  if (!r.modifiersData[a]._skip) {
    for (var t = n.mainAxis, o = t === void 0 ? !0 : t, l = n.altAxis, i = l === void 0 ? !0 : l, s = n.fallbackPlacements, u = n.padding, d = n.boundary, v = n.rootBoundary, f = n.altBoundary, m = n.flipVariations, g = m === void 0 ? !0 : m, b = n.allowedAutoPlacements, y = r.options.placement, w = Gr(y), O = w === y, C = s || (O || !g ? [Wt(y)] : Og(y)), $ = [y].concat(C).reduce(function(ne, ue) {
      return ne.concat(Gr(ue) === yo ? Pg(r, {
        placement: ue,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: b
      }) : ue);
    }, []), E = r.rects.reference, T = r.rects.popper, B = /* @__PURE__ */ new Map(), h = !0, P = $[0], W = 0; W < $.length; W++) {
      var L = $[W], Z = Gr(L), K = wt(L) === wo, U = [Wr, Vn].indexOf(Z) >= 0, M = U ? "width" : "height", I = fd(r, {
        placement: L,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), D = U ? K ? Aa : bn : K ? Vn : Wr;
      E[M] > T[M] && (D = Wt(D));
      var x = Wt(D), H = [];
      if (o && H.push(I[Z] <= 0), i && H.push(I[D] <= 0, I[x] <= 0), H.every(function(ne) {
        return ne;
      })) {
        P = L, h = !1;
        break;
      }
      B.set(L, H);
    }
    if (h)
      for (var j = g ? 3 : 1, z = function(ue) {
        var ge = $.find(function(Ce) {
          var ar = B.get(Ce);
          if (ar)
            return ar.slice(0, ue).every(function(te) {
              return te;
            });
        });
        if (ge)
          return P = ge, "break";
      }, G = j; G > 0; G--) {
        var Q = z(G);
        if (Q === "break")
          break;
      }
    r.placement !== P && (r.modifiersData[a]._skip = !0, r.placement = P, r.reset = !0);
  }
}
const Mg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Vg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Eg(e, r, n) {
  var a = Gr(e), t = [bn, Wr].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, r, {
    placement: e
  })) : n, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [bn, Aa].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Bg(e) {
  var r = e.state, n = e.options, a = e.name, t = n.offset, o = t === void 0 ? [0, 0] : t, l = sd.reduce(function(d, v) {
    return d[v] = Eg(v, r.rects, o), d;
  }, {}), i = l[r.placement], s = i.x, u = i.y;
  r.modifiersData.popperOffsets != null && (r.modifiersData.popperOffsets.x += s, r.modifiersData.popperOffsets.y += u), r.modifiersData[a] = l;
}
const Ig = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bg
};
function Ng(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Dg(e) {
  return e === Mr(e) || !kr(e) ? Yi(e) : Ng(e);
}
function Ag(e) {
  var r = e.getBoundingClientRect(), n = Qa(r.width) / e.offsetWidth || 1, a = Qa(r.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function zg(e, r, n) {
  n === void 0 && (n = !1);
  var a = kr(r), t = kr(r) && Ag(r), o = In(r), l = _a(e, t, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((Hr(r) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Wi(o)) && (i = Dg(r)), kr(r) ? (s = _a(r, !0), s.x += r.clientLeft, s.y += r.clientTop) : o && (s.x = ji(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Lg(e) {
  var r = _a(e), n = e.offsetWidth, a = e.offsetHeight;
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
  return vi.reduce(function(n, a) {
    return n.concat(r.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Fg(e) {
  var r;
  return function() {
    return r || (r = new Promise(function(n) {
      Promise.resolve().then(function() {
        r = void 0, n(e());
      });
    })), r;
  };
}
function nn(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return [].concat(n).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Nn = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Hg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Dl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Yg(e) {
  e.forEach(function(r) {
    [].concat(Object.keys(r), Dl).filter(function(n, a, t) {
      return t.indexOf(n) === a;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof r.name != "string" && console.error(nn(Nn, String(r.name), '"name"', '"string"', '"' + String(r.name) + '"'));
          break;
        case "enabled":
          typeof r.enabled != "boolean" && console.error(nn(Nn, r.name, '"enabled"', '"boolean"', '"' + String(r.enabled) + '"'));
          break;
        case "phase":
          vi.indexOf(r.phase) < 0 && console.error(nn(Nn, r.name, '"phase"', "either " + vi.join(", "), '"' + String(r.phase) + '"'));
          break;
        case "fn":
          typeof r.fn != "function" && console.error(nn(Nn, r.name, '"fn"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "effect":
          r.effect != null && typeof r.effect != "function" && console.error(nn(Nn, r.name, '"effect"', '"function"', '"' + String(r.fn) + '"'));
          break;
        case "requires":
          r.requires != null && !Array.isArray(r.requires) && console.error(nn(Nn, r.name, '"requires"', '"array"', '"' + String(r.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(r.requiresIfExists) || console.error(nn(Nn, r.name, '"requiresIfExists"', '"array"', '"' + String(r.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + r.name + '" modifier, valid properties are ' + Dl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      r.requires && r.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(nn(Hg, String(r.name), a, a));
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
var Al = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Gg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", zl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ll() {
  for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
    r[n] = arguments[n];
  return !r.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function qg(e) {
  e === void 0 && (e = {});
  var r = e, n = r.defaultModifiers, a = n === void 0 ? [] : n, t = r.defaultOptions, o = t === void 0 ? zl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, zl, o),
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
          reference: za(i) ? ft(i) : i.contextElement ? ft(i.contextElement) : [],
          popper: ft(s)
        };
        var C = Ug(Wg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = C.filter(function(L) {
          return L.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = jg([].concat(C, d.options.modifiers), function(L) {
            var Z = L.name;
            return Z;
          });
          if (Yg($), Gr(d.options.placement) === yo) {
            var E = d.orderedModifiers.find(function(L) {
              var Z = L.name;
              return Z === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var T = Ar(s), B = T.marginTop, h = T.marginRight, P = T.marginBottom, W = T.marginLeft;
          [B, h, P, W].some(function(L) {
            return parseFloat(L);
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
          var w = d.elements, O = w.reference, C = w.popper;
          if (!Ll(O, C)) {
            process.env.NODE_ENV !== "production" && console.error(Al);
            return;
          }
          d.rects = {
            reference: zg(O, Gi(C), d.options.strategy === "fixed"),
            popper: Lg(C)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(L) {
            return d.modifiersData[L.name] = Object.assign({}, L.data);
          });
          for (var $ = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(Gg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var T = d.orderedModifiers[E], B = T.fn, h = T.options, P = h === void 0 ? {} : h, W = T.name;
            typeof B == "function" && (d = B({
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
      update: Fg(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!Ll(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Al), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var w = y.name, O = y.options, C = O === void 0 ? {} : O, $ = y.effect;
        if (typeof $ == "function") {
          var E = $({
            state: d,
            name: w,
            instance: m,
            options: C
          }), T = function() {
          };
          v.push(E || T);
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
var Lt = {
  passive: !0
};
function Xg(e) {
  var r = e.state, n = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Mr(r.elements.popper), u = [].concat(r.scrollParents.reference, r.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Lt);
  }), i && s.addEventListener("resize", n.update, Lt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Lt);
    }), i && s.removeEventListener("resize", n.update, Lt);
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
  r.modifiersData[n] = vd({
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
var Qg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function _g(e) {
  var r = e.x, n = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Qa(r * t) / t || 0,
    y: Qa(n * t) / t || 0
  };
}
function Rl(e) {
  var r, n = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, b = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = y.x, b = y.y;
  var w = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), C = bn, $ = Wr, E = window;
  if (u) {
    var T = Gi(n), B = "clientHeight", h = "clientWidth";
    if (T === Mr(n) && (T = In(n), Ar(T).position !== "static" && i === "absolute" && (B = "scrollHeight", h = "scrollWidth")), T = T, t === Wr || (t === bn || t === Aa) && o === bt) {
      $ = Vn;
      var P = v && T === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[B]
      );
      b -= P - a.height, b *= s ? 1 : -1;
    }
    if (t === bn || (t === Wr || t === Vn) && o === bt) {
      C = Aa;
      var W = v && T === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[h]
      );
      m -= W - a.width, m *= s ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: i
  }, u && Qg), Z = d === !0 ? _g({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = Z.x, b = Z.y, s) {
    var K;
    return Object.assign({}, L, (K = {}, K[$] = O ? "0" : "", K[C] = w ? "0" : "", K.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", K));
  }
  return Object.assign({}, L, (r = {}, r[$] = O ? b + "px" : "", r[C] = w ? m + "px" : "", r.transform = "", r));
}
function xg(e) {
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
    variation: wt(r.placement),
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
const ey = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: xg,
  data: {}
};
function ry(e) {
  var r = e.state;
  Object.keys(r.elements).forEach(function(n) {
    var a = r.styles[n] || {}, t = r.attributes[n] || {}, o = r.elements[n];
    !kr(o) || !Hr(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function ny(e) {
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
const ay = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ry,
  effect: ny,
  requires: ["computeStyles"]
};
var ty = [Kg, Jg, ey, ay], oy = /* @__PURE__ */ qg({
  defaultModifiers: ty
});
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
function Ul(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Fl(e) {
  return function() {
    var r = this, n = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(r, n);
      function l(s) {
        Ul(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ul(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function cd(e) {
  var r = V(null), n = V(null), a = V({
    width: 0,
    height: 0
  }), t = Bs(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(T, B) {
      B ? (C(), S(e.onOpen)) : S(e.onClose);
    }
  }), {
    zIndex: o
  } = Mt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: T,
      height: B
    } = tt(r.value);
    a.value = {
      width: je(T),
      height: je(B)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, $());
  }, v = /* @__PURE__ */ function() {
    var T = Fl(function* () {
      e.trigger === "hover" && (s = !1, yield Lr(), !i && E());
    });
    return function() {
      return T.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var T = Fl(function* () {
      e.trigger === "hover" && (i = !1, yield Lr(), !s && E());
    });
    return function() {
      return T.apply(this, arguments);
    };
  }(), g = () => {
    $();
  }, b = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  }, y = () => {
    e.trigger === "click" && b();
  }, w = () => {
    u();
    var T = {
      x: je(e.offsetX),
      y: je(e.offsetY)
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
  }, O = () => {
    var {
      placement: T,
      skidding: B,
      distance: h
    } = w(), P = [no({}, Mg, {
      enabled: t.value
    }), no({}, Ig, {
      options: {
        offset: [B, h]
      }
    })];
    return {
      placement: T,
      modifiers: P
    };
  }, C = () => {
    l.setOptions(O());
  }, $ = () => {
    var {
      disabled: T
    } = e;
    T || (t.value = !0, S(e["onUpdate:show"], !0));
  }, E = () => {
    t.value = !1, S(e["onUpdate:show"], !1);
  };
  return Ms(r, "click", y), ie(() => e.offsetX, C), ie(() => e.offsetY, C), ie(() => e.placement, C), ie(() => e.disabled, E), ao(() => {
    var T, B = e.reference ? (T = r.value) == null ? void 0 : T.querySelector(e.reference) : r.value;
    l = oy(B ?? r.value, n.value, O());
  }), rt(() => {
    l.destroy();
  }), {
    show: t,
    popover: n,
    zIndex: o,
    host: r,
    hostSize: a,
    handleHostClick: g,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: b,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: C,
    open: $,
    close: E
  };
}
function iy(e) {
  return ["click", "hover"].includes(e);
}
function ly(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function sy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var uy = {
  type: {
    type: String,
    default: "default",
    validator: sy
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
    validator: iy
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ly
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
  n: dy,
  classes: vy
} = re("tooltip");
function fy(e, r) {
  return p(), k(
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
    [Y(e.$slots, "default"), (p(), be(
      En,
      {
        to: e.teleport
      },
      [J(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed,
          persisted: ""
        },
        {
          default: ve(() => [$e(N(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
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
                ae(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[$n, e.show]])]),
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
var md = ee({
  name: "VarTooltip",
  props: uy,
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
      // expose
      open: f,
      // expose
      close: m,
      // expose
      resize: g
    } = cd(e);
    return {
      toSizeUnit: ye,
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      n: dy,
      classes: vy,
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
md.render = fy;
const wn = md;
wn.install = function(e) {
  e.component(wn.name, wn);
};
var tk = wn;
function cy(e) {
  return ["click"].includes(e);
}
var my = {
  expandTrigger: {
    type: String,
    validator: cy
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
var {
  n: py,
  classes: hy
} = re("ellipsis"), gy = {
  key: 0
};
function yy(e, r) {
  var n = oe("var-tooltip");
  return p(), be(
    n,
    Pt(to(e.tooltip)),
    {
      content: ve(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), k(
          "span",
          gy,
          ae(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [N(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: q(e.rootStyles),
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
var pd = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: wn
  },
  props: my,
  setup(e) {
    var r = V(!1), n = A(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = A(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : mi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (r.value = !r.value);
    };
    return {
      n: py,
      classes: hy,
      tooltip: a,
      expanding: r,
      rootStyles: n,
      handleClick: t
    };
  }
});
pd.render = yy;
const ea = pd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var ok = ea;
function by(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function wy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function Cy(e) {
  return ["click", "hover"].includes(e);
}
var Sy = {
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
    validator: su
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: by
  },
  direction: {
    type: String,
    default: "top",
    validator: wy
  },
  trigger: {
    type: String,
    default: "click",
    validator: Cy
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
function Hl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  classes: Yl,
  n: vr
} = re("fab");
const ra = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: Sy,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, t = Bs(e, "active"), o = V(null), {
      disabled: l
    } = so(), i = (f, m, g) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (g === 0) {
          S(e.onClick, t.value, f);
          return;
        }
        t.value = m, S(e.onClick, t.value, f), S(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, S(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, S(e.onClose));
    }, d = () => n.trigger ? e.show ? n.trigger({
      active: t.value
    }) : null : $e(J(rr, {
      "var-fab-cover": !0,
      class: vr("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [J(Oe, {
        "var-fab-cover": !0,
        class: Yl([t.value, vr("trigger-active-icon"), vr("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: vr("--trigger-icon-animation")
      }, null)]
    }), [[$n, e.show]]), v = () => {
      var f, m, g = Es((m = n.default == null ? void 0 : n.default()) != null ? m : []);
      return J("div", Be({
        class: Yl(vr(), vr("--position-" + e.position), vr("--direction-" + e.direction), [e.fixed, vr("--fixed"), vr("--absolute")], [e.safeArea, vr("--safe-area")]),
        style: {
          zIndex: R(e.zIndex),
          top: ye(e.top),
          bottom: ye(e.bottom),
          left: ye(e.left),
          right: ye(e.right)
        },
        ref: o,
        onClick: (b) => i(b, !t.value, g.length),
        onMouseleave: () => s(!1, g.length),
        onMouseenter: () => s(!0, g.length)
      }, a), [J(Le, {
        name: vr("--active-transition")
      }, Hl(f = d()) ? f : {
        default: () => [f]
      }), J(Le, {
        name: vr("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [$e(J("div", {
          class: vr("actions"),
          onClick: (b) => b.stopPropagation()
        }, [g.map((b) => J("div", {
          class: vr("action")
        }, [b]))]), [[$n, e.show && t.value && g.length]])]
      })]);
    };
    return ie(() => e.trigger, () => {
      t.value = !1;
    }), ie(() => e.disabled, () => {
      t.value = !1;
    }), Ms(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return J(En, {
          to: f,
          disabled: l.value
        }, Hl(m = v()) ? m : {
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
var ik = ra;
function ky(e) {
  return ["start", "end"].includes(e);
}
var $y = {
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
    validator: ky
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function jl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Ty(e) {
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
var {
  n: Py
} = re("form");
function Oy(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var hd = ee({
  name: "VarForm",
  props: $y,
  setup(e) {
    var r = A(() => e.disabled), n = A(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Am(), o = (d) => {
      setTimeout(() => {
        var v = Tn(d), f = v === window ? 0 : il(v), m = il(d) - f - je(e.scrollToErrorOffsetY);
        ht(v, {
          top: m,
          animation: Do
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Ty(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: w
          } = y;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = Xv(v, (y) => y === !1, e.scrollToError), m = f > -1;
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
      n: Py,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
hd.render = Oy;
const qr = hd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
qr.useValidation = Or;
qr.useForm = Vr;
var lk = qr;
function Vy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var My = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Vy,
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
  n: Ey,
  classes: By
} = re("image"), Iy = ["alt", "title", "lazy-loading", "lazy-error"], Ny = ["alt", "title", "src"];
function Dy(e, r) {
  var n = Ie("lazy"), a = Ie("ripple");
  return $e((p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        borderRadius: e.toSizeUnit(e.radius)
      })
    },
    [e.lazy && !e.showErrorSlot ? $e((p(), k(
      "img",
      {
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
      },
      null,
      46,
      Iy
    )), [[n, e.src]]) : _("v-if", !0), !e.lazy && !e.showErrorSlot ? (p(), k(
      "img",
      {
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
      },
      null,
      46,
      Ny
    )) : _("v-if", !0), e.showErrorSlot ? Y(e.$slots, "error", {
      key: 2
    }) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var gd = ee({
  name: "VarImage",
  directives: {
    Lazy: gt,
    Ripple: We
  },
  props: My,
  setup(e, r) {
    var {
      slots: n
    } = r, a = V(!1), t = (i) => {
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
    return ie(() => e.src, () => {
      a.value = !1;
    }), {
      n: Ey,
      classes: By,
      showErrorSlot: a,
      toSizeUnit: ye,
      handleLoad: o,
      handleError: t,
      handleClick: l
    };
  }
});
gd.render = Dy;
const na = gd;
na.install = function(e) {
  e.component(na.name, na);
};
var sk = na, yd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Ay() {
  var {
    childProviders: e,
    length: r,
    bindChildren: n
  } = dr(yd);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var bd = {
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
function Wl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function zy(e) {
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
var Ly = 250, Ry = 20, {
  n: Uy,
  classes: Fy
} = re("swipe"), Hy = ["onClick"];
function Yy(e, r) {
  return p(), k(
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
    }, () => [e.indicator && e.length ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), k(
        Ve,
        null,
        Ue(e.length, (n, a) => (p(), k(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: q({
              background: e.indicatorColor
            }),
            key: n,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Hy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)])],
    2
    /* CLASS */
  );
}
var wd = ee({
  name: "VarSwipe",
  props: bd,
  setup(e) {
    var r = V(null), n = V(0), a = A(() => e.vertical), t = V(0), o = V(0), l = V(!1), i = V(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Ay(), v = !1, f = !1, m = -1, g, b, y, w, O, C = (z) => s.find((G) => {
      var {
        index: Q
      } = G;
      return Q.value === z;
    }), $ = () => {
      e.loop && (o.value >= 0 && C(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - n.value) && C(0).setTranslate(t.value), o.value > -(t.value - n.value) && o.value < 0 && (C(d.value - 1).setTranslate(0), C(0).setTranslate(0)));
    }, E = (z) => {
      var G = lr(z) ? z : Math.floor((o.value - n.value / 2) / -n.value), {
        loop: Q
      } = e;
      return G <= -1 ? Q ? -1 : 0 : G >= d.value ? Q ? d.value : d.value - 1 : G;
    }, T = (z) => {
      var {
        loop: G
      } = e;
      return z === -1 ? G ? d.value - 1 : 0 : z === d.value ? G ? 0 : d.value - 1 : z;
    }, B = (z) => e.loop ? z < 0 ? d.value + z : z >= d.value ? z - d.value : z : oo(z, 0, d.value - 1), h = (z) => {
      var G = o.value >= n.value, Q = o.value <= -t.value, ne = 0, ue = -(t.value - n.value);
      l.value = !0, (G || Q) && (l.value = !0, o.value = Q ? ne : ue, C(0).setTranslate(0), C(d.value - 1).setTranslate(0)), lo(() => {
        l.value = !1, S(z);
      });
    }, P = () => {
      v || (i.value = B(R(e.initialIndex)), v = !0);
    }, W = () => {
      var {
        autoplay: z
      } = e;
      !z || d.value <= 1 || (L(), m = window.setTimeout(() => {
        D(), W();
      }, R(z)));
    }, L = () => {
      m && clearTimeout(m);
    }, Z = (z, G) => {
      if (z > G && z > 10)
        return "horizontal";
      if (G > z && G > 10)
        return "vertical";
    }, K = (z) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: G,
          clientY: Q
        } = z.touches[0];
        g = G, b = Q, y = performance.now(), f = !0, L(), h(() => {
          l.value = !0;
        });
      }
    }, U = (z) => {
      var {
        touchable: G,
        vertical: Q
      } = e;
      if (!(!f || !G)) {
        var {
          clientX: ne,
          clientY: ue
        } = z.touches[0], ge = Math.abs(ne - g), Ce = Math.abs(ue - b), ar = Z(ge, Ce), te = Q ? "vertical" : "horizontal";
        if (ar === te) {
          z.preventDefault();
          var de = w !== void 0 ? ne - w : 0, ce = O !== void 0 ? ue - O : 0;
          w = ne, O = ue, o.value += Q ? ce : de, $();
        }
      }
    }, M = () => {
      if (f) {
        var {
          vertical: z,
          onChange: G
        } = e, Q = z ? O < b : w < g, ne = Math.abs(z ? b - O : g - w), ue = performance.now() - y <= Ly && ne >= Ry, ge = ue ? E(Q ? i.value + 1 : i.value - 1) : E();
        f = !1, l.value = !1, w = void 0, O = void 0, o.value = ge * -n.value;
        var Ce = i.value;
        i.value = T(ge), W(), Ce !== i.value && S(G, i.value);
      }
    }, I = () => {
      r.value && (l.value = !0, n.value = e.vertical ? r.value.offsetHeight : r.value.offsetWidth, t.value = n.value * d.value, o.value = i.value * -n.value, s.forEach((z) => {
        z.setTranslate(0);
      }), W(), setTimeout(() => {
        l.value = !1;
      }));
    }, D = (z) => {
      if (!(d.value <= 1)) {
        P();
        var {
          loop: G,
          onChange: Q
        } = e, ne = i.value;
        i.value = B(ne + 1), (z == null ? void 0 : z.event) !== !1 && S(Q, i.value), h(() => {
          if (ne === d.value - 1 && G) {
            C(0).setTranslate(t.value), o.value = d.value * -n.value;
            return;
          }
          ne !== d.value - 1 && (o.value = i.value * -n.value);
        });
      }
    }, x = (z) => {
      if (!(d.value <= 1)) {
        P();
        var {
          loop: G,
          onChange: Q
        } = e, ne = i.value;
        i.value = B(ne - 1), (z == null ? void 0 : z.event) !== !1 && S(Q, i.value), h(() => {
          if (ne === 0 && G) {
            C(d.value - 1).setTranslate(-t.value), o.value = n.value;
            return;
          }
          ne !== 0 && (o.value = i.value * -n.value);
        });
      }
    }, H = (z, G) => {
      if (!(d.value <= 1 || z === i.value)) {
        z = z < 0 ? 0 : z, z = z >= d.value ? d.value : z;
        var Q = z > i.value ? D : x, ne = Math.abs(z - i.value);
        Array.from({
          length: ne
        }).forEach((ue, ge) => {
          Q({
            event: ge === ne - 1 ? G == null ? void 0 : G.event : !1
          });
        });
      }
    }, j = {
      size: n,
      vertical: a
    };
    return u(j), ie(() => d.value, /* @__PURE__ */ zy(function* () {
      yield Lr(), P(), I();
    })), Mn(I), en(L), rt(L), Rr(() => window, "resize", I), {
      n: Uy,
      classes: Fy,
      length: d,
      index: i,
      swipeEl: r,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: K,
      handleTouchmove: U,
      handleTouchend: M,
      next: D,
      prev: x,
      to: H,
      resize: I,
      toNumber: R
    };
  }
});
wd.render = Yy;
const Xr = wd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var uk = Xr;
function jy() {
  var {
    bindParent: e,
    index: r,
    parentProvider: n
  } = ur(yd);
  return e || Pr("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Wy
} = re("swipe-item");
function Gy(e, r) {
  return p(), k(
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
var Cd = ee({
  name: "VarSwipeItem",
  setup() {
    var e = V(0), {
      swipe: r,
      bindSwipe: n,
      index: a
    } = jy(), {
      size: t,
      vertical: o
    } = r, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return n(i), {
      n: Wy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Cd.render = Gy;
const Kr = Cd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var dk = Kr;
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
var qy = pi({
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
}, Je(bd, ["loop", "indicator", "onChange"]), Je(Vt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Gl,
  classes: Xy
} = re("image-preview"), Oo = 12, ql = 200, Ky = 350, Xl = 200, Zy = 500, Jy = ["onTouchstart"], Qy = ["src", "alt"];
function _y(e, r) {
  var n = oe("var-swipe-item"), a = oe("var-swipe"), t = oe("var-icon"), o = oe("var-popup");
  return p(), be(
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
      default: ve(() => [J(
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
          default: ve(() => [(p(!0), k(
            Ve,
            null,
            Ue(e.images, (l, i) => (p(), be(
              n,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [N(
                  "div",
                  {
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
                  },
                  [N(
                    "img",
                    {
                      class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Qy
                  )],
                  46,
                  Jy
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
            }, () => [e.indicator && e.images.length > 1 ? (p(), k(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ae(i + 1) + " / " + ae(s),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), be(
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
      )) : _("v-if", !0)]), N(
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
var Sd = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: Xr,
    VarSwipeItem: Kr,
    VarPopup: Sr,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: qy,
  setup(e) {
    var r = V(!1), n = A(() => {
      var {
        images: M,
        current: I
      } = e, D = M.findIndex((x) => x === I);
      return D >= 0 ? D : 0;
    }), a = V(1), t = V(0), o = V(0), l = V(void 0), i = V(void 0), s = V(!0), u = null, d = null, v = null, f = null, m = !1, g = A(() => {
      var {
        imagePreventDefault: M,
        show: I
      } = e;
      return I && M;
    }), b = (M, I) => {
      var {
        clientX: D,
        clientY: x
      } = M, {
        clientX: H,
        clientY: j
      } = I;
      return Math.abs(Math.sqrt(Math.pow(H - D, 2) + Math.pow(j - x, 2)));
    }, y = (M, I) => ({
      clientX: M.clientX,
      clientY: M.clientY,
      timestamp: performance.now(),
      target: I
    }), w = () => {
      a.value = R(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Xl);
    }, O = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, C = (M) => d ? b(d, M) <= Oo && M.timestamp - d.timestamp <= ql && d.target === M.target : !1, $ = (M) => !M || !u || !d ? !1 : b(u, d) <= Oo && performance.now() - d.timestamp < Ky && (M === u.target || M.parentNode === u.target), E = () => {
      window.clearTimeout(f), m = !1, u = null;
    }, T = (M) => {
      if (window.clearTimeout(f), m) {
        m = !1;
        return;
      }
      var I = $(M.target);
      v = window.setTimeout(() => {
        I && K(), u = null;
      }, ql);
    }, B = (M, I) => {
      window.clearTimeout(v), window.clearTimeout(f);
      var D = y(M.touches[0], M.currentTarget);
      if (u = D, f = window.setTimeout(() => {
        var {
          onLongPress: x
        } = e;
        m = !0, S(x, I);
      }, Zy), C(D)) {
        a.value > 1 ? O() : w();
        return;
      }
      d = D;
    }, h = (M) => {
      var {
        offsetWidth: I,
        offsetHeight: D
      } = M, {
        naturalWidth: x,
        naturalHeight: H
      } = M.querySelector("." + Gl("image"));
      return {
        width: I,
        height: D,
        imageRadio: H / x,
        rootRadio: D / I,
        zoom: R(e.zoom)
      };
    }, P = (M) => {
      var {
        zoom: I,
        imageRadio: D,
        rootRadio: x,
        width: H,
        height: j
      } = h(M);
      if (!D)
        return 0;
      var z = D > x ? j / D : H;
      return Math.max(0, (I * z - H) / 2) / I;
    }, W = (M) => {
      var {
        zoom: I,
        imageRadio: D,
        rootRadio: x,
        width: H,
        height: j
      } = h(M);
      if (!D)
        return 0;
      var z = D > x ? j : H * D;
      return Math.max(0, (I * z - j) / 2) / I;
    }, L = (M, I, D) => M + I >= D ? D : M + I <= -D ? -D : M + I, Z = (M) => {
      if (d) {
        var I = M.currentTarget, D = y(M.touches[0], I);
        if (b(D, d) > Oo && window.clearTimeout(f), a.value > 1) {
          var x = D.clientX - d.clientX, H = D.clientY - d.clientY, j = P(I), z = W(I);
          t.value = L(t.value, x, j), o.value = L(o.value, H, z);
        }
        d = D;
      }
    }, K = () => {
      if (a.value > 1) {
        O(), setTimeout(() => S(e["onUpdate:show"], !1), Xl);
        return;
      }
      S(e["onUpdate:show"], !1);
    }, U = (M) => {
      e.imagePreventDefault && e.show && M.preventDefault();
    };
    return Rr(() => document, "contextmenu", U), ie(() => e.show, (M) => {
      r.value = M;
    }, {
      immediate: !0
    }), {
      n: Gl,
      classes: Xy,
      isPreventDefault: g,
      initialIndex: n,
      popupShow: r,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: B,
      handleTouchmove: Z,
      handleTouchend: T,
      handleTouchcancel: E,
      close: K
    };
  }
});
Sd.render = _y;
const Cn = Sd;
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ct.apply(this, arguments);
}
var un, mt = {};
function xy(e) {
  return e === void 0 && (e = {}), Fe(e) ? ct({}, mt, {
    images: [e]
  }) : Pe(e) ? ct({}, mt, {
    images: e
  }) : ct({}, mt, e);
}
function zr(e) {
  if (at()) {
    zr.close();
    var r = xy(e), n = Ae(r);
    n.teleport = "body", un = n;
    var {
      unmountInstance: a
    } = ot(Cn, n, {
      onClose: () => S(n.onClose),
      onClosed: () => {
        S(n.onClosed), a(), un === n && (un = null);
      },
      onRouteChange: () => {
        a(), un === n && (un = null);
      },
      "onUpdate:show": (t) => {
        n.show = t;
      }
    });
    n.show = !0;
  }
}
zr.close = () => {
  if (un != null) {
    var e = un;
    un = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
zr.setDefaultOptions = (e) => {
  mt = e;
};
zr.resetDefaultOptions = () => {
  mt = {};
};
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
zr.install = function(e) {
  e.component(Cn.name, Cn);
};
zr.Component = Cn;
var vk = Cn, Gt = {
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
var {
  n: eb,
  classes: rb
} = re("sticky");
function nb(e, r) {
  return p(), k(
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
var kd = ee({
  name: "VarSticky",
  props: Gt,
  setup(e) {
    var r = V(null), n = V(null), a = V(!1), t = V("0px"), o = V("0px"), l = V("auto"), i = V("auto"), s = V("auto"), u = V("auto"), d = A(() => !e.disabled && e.cssMode), v = A(() => !e.disabled && !e.cssMode && a.value), f = A(() => je(e.offsetTop)), m, g = () => {
      var {
        cssMode: C,
        disabled: $
      } = e;
      if (!$) {
        var E = 0;
        if (m !== window) {
          var {
            top: T
          } = xe(m);
          E = T;
        }
        var B = n.value, h = r.value, {
          top: P,
          left: W
        } = xe(h), L = P - E;
        return L <= f.value ? (C || (l.value = h.offsetWidth + "px", i.value = h.offsetHeight + "px", t.value = E + f.value + "px", o.value = W + "px", s.value = B.offsetWidth + "px", u.value = B.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: L,
          isFixed: !1
        });
      }
    }, b = () => {
      if (m) {
        var C = g();
        C && S(e.onScroll, C.offsetTop, C.isFixed);
      }
    }, y = /* @__PURE__ */ function() {
      var C = Zl(function* () {
        a.value = !1, yield tf(), g();
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var C = Zl(function* () {
        yield Lr(), m = Tn(r.value), m !== window && m.addEventListener("scroll", b), b();
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", b);
    };
    return ie(() => e.disabled, y), sr(w), rt(O), en(O), Rr(() => window, "scroll", b), Rr(() => window, "resize", y), {
      n: eb,
      classes: rb,
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
      toNumber: R
    };
  }
});
kd.render = nb;
const Zr = kd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var fk = Zr, $d = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function ab() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = dr($d);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function tb() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur($d);
  return n || Pr("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var ob = {
  index: {
    type: [Number, String]
  }
}, {
  n: ib,
  classes: lb
} = re("index-anchor");
function sb(e, r) {
  return p(), be(
    nt(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [N(
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
var Td = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Zr
  },
  inheritAttrs: !1,
  props: ob,
  setup(e) {
    var {
      index: r,
      indexBar: n,
      bindIndexBar: a
    } = tb(), t = V(0), o = V(!1), l = A(() => e.index), i = V(null), {
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
      n: ib,
      classes: lb,
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
Td.render = sb;
const aa = Td;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var ck = aa, ub = {
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
function Jl(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Rt(e) {
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
  n: db,
  classes: vb
} = re("index-bar"), fb = ["onClick"];
function cb(e, r) {
  return p(), k(
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
      [(p(!0), k(
        Ve,
        null,
        Ue(e.anchorNameList, (n) => (p(), k(
          "li",
          {
            key: n,
            class: c(e.classes(e.n("anchor-item"), [e.active === n, e.n("anchor-item--active")])),
            style: q({
              color: e.active === n && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: n,
              manualCall: !0
            })
          },
          ae(n),
          15,
          fb
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
var Pd = ee({
  name: "VarIndexBar",
  props: ub,
  setup(e) {
    var {
      length: r,
      indexAnchors: n,
      bindIndexAnchors: a
    } = ab(), t = V(""), o = V(null), l = V([]), i = V(), s = A(() => e.sticky), u = A(() => e.stickyCssMode || e.cssMode), d = A(() => je(e.stickyOffsetTop)), v = A(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var b = (B, h) => {
      var P = Ti(B) ? B.name.value : B;
      P === i.value || P === void 0 || (i.value = P, (h == null ? void 0 : h.event) !== !1 && S(e.onChange, P));
    }, y = () => {
      if (Pi(f))
        return 0;
      var {
        top: B
      } = xe(f), {
        scrollTop: h
      } = f, {
        top: P
      } = xe(o.value);
      return h - B + P;
    }, w = () => {
      var B = pt(f), h = f === window ? document.body.scrollHeight : f.scrollHeight, P = y();
      n.forEach((W, L) => {
        var Z = W.ownTop.value, K = B - Z + d.value - P, U = L === n.length - 1 ? h : n[L + 1].ownTop.value - W.ownTop.value;
        W.setDisabled(!0), K >= 0 && K < U && t.value === "" && (W.setDisabled(!1), b(W));
      });
    }, O = /* @__PURE__ */ function() {
      var B = Rt(function* (h) {
        var {
          anchorName: P,
          manualCall: W = !1,
          options: L
        } = h;
        if (W && S(e.onClick, P), !(P === i.value && !m)) {
          var Z = n.find((I) => {
            var {
              name: D
            } = I;
            return P === D.value;
          });
          if (Z) {
            var K = y(), U = Z.ownTop.value - d.value + K, M = Vi(f);
            t.value = P, b(P, L), yield ht(f, {
              left: M,
              top: U,
              animation: ws,
              duration: R(e.duration)
            }), lo(() => {
              t.value = "";
            });
          }
        }
      });
      return function(P) {
        return B.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var B = Rt(function* () {
        yield Lr(), f = Tn(o.value);
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), $ = () => {
      f.addEventListener("scroll", w);
    }, E = () => {
      f.removeEventListener("scroll", w);
    }, T = (B, h) => {
      br(() => O({
        anchorName: B,
        options: h
      }));
    };
    return ie(() => r.value, /* @__PURE__ */ Rt(function* () {
      yield Lr(), n.forEach((B) => {
        var {
          name: h,
          setOwnTop: P
        } = B;
        h.value && l.value.push(h.value), P();
      });
    })), sr(/* @__PURE__ */ Rt(function* () {
      yield C(), $();
    })), kt(E), en(() => {
      m = !0, E();
    }), Mn(() => {
      !m || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: db,
      classes: vb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: R,
      scrollTo: T,
      anchorClick: O
    };
  }
});
Pd.render = cb;
const ta = Pd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var mk = ta;
function mb(e) {
  return ["small", "normal"].includes(e);
}
function pb(e) {
  return ["outlined", "standard"].includes(e);
}
var qi = {
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
    validator: mb
  },
  variant: {
    type: String,
    default: "standard",
    validator: pb
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
  n: Vo,
  classes: hb
} = re("field-decorator"), gb = ["for"];
function yb(e, r) {
  var n = oe("var-icon");
  return p(), k(
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
      ), e.placeholder && e.hint ? (p(), k(
        "label",
        {
          key: 0,
          class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], e.computePlaceholderState())),
          style: q({
            color: e.color
          }),
          for: e.id
        },
        [N(
          "span",
          null,
          ae(e.placeholder),
          1
          /* TEXT */
        )],
        14,
        gb
      )) : _("v-if", !0), N(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), be(
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
        )) : _("v-if", !0), Y(e.$slots, "append-icon")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), k(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), k(
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
          [e.placeholder && e.hint ? (p(), be(En, {
            key: 0,
            to: "body"
          }, [N(
            "span",
            {
              ref: "placeholderTextEl",
              class: c(e.classes(e.n("placeholder-text"), e.n("$--ellipsis"), [e.size === "small", e.n("placeholder-text--small")]))
            },
            ae(e.placeholder),
            3
            /* TEXT, CLASS */
          )])) : _("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (p(), k(
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Od = ee({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Oe
  },
  props: qi,
  setup(e, r) {
    var {
      slots: n
    } = r, a = V(null), t = V(""), o = A(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), l = A(() => e.hint && (!Yr(e.value) || e.isFocus || n["prepend-icon"])), i = () => {
      var {
        hint: v,
        value: f,
        composing: m
      } = e;
      if (!v && (!Yr(f) || m))
        return Vo("--placeholder-hidden");
      if (l.value)
        return Vo("--placeholder-hint");
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
      S(e.onClear, v);
    }, d = (v) => {
      S(e.onClick, v);
    };
    return sr(s), Tt(s), Rr(() => window, "resize", s), {
      placeholderTextEl: a,
      color: o,
      legendWidth: t,
      isFloating: l,
      computePlaceholderState: i,
      n: Vo,
      classes: hb,
      isEmpty: Yr,
      handleClear: u,
      handleClick: d
    };
  }
});
Od.render = yb;
const Vd = Od;
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
function bb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var wb = hi({
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
    validator: bb
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
}, Je(qi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: Cb,
  classes: Sb
} = re("input"), kb = ["placeholder", "enterkeyhint"], $b = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Tb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function Pb(e, r) {
  var n = oe("var-field-decorator"), a = oe("var-form-details");
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: r[15] || (r[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [J(
      n,
      Pt(to({
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
      gs({
        "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
        default: ve(() => [e.normalizedType === "password" ? (p(), k(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete")),
            placeholder: e.hint ? void 0 : e.placeholder,
            style: q({
              "--input-placeholder-color": e.placeholderColor
            }),
            enterkeyhint: e.enterkeyhint
          },
          null,
          14,
          kb
        )) : _("v-if", !0), e.textarea ? (p(), k(
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
          },
          `
      `,
          46,
          $b
        )) : (p(), k(
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
          },
          null,
          46,
          Tb
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
    ), J(
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
var Md = ee({
  name: "VarInput",
  components: {
    VarFormDetails: _e,
    VarFieldDecorator: Vd
  },
  props: wb,
  setup(e) {
    var r = V("var-input-" + et().uid), n = V(null), a = V(!1), t = V(!1), o = A(() => e.type === "number" ? "text" : e.type), l = A(() => {
      var {
        maxlength: H,
        modelValue: j
      } = e;
      return H ? Yr(j) ? "0 / " + H : String(j).length + "/" + H : "";
    }), i = A(() => e.disabled || e.readonly ? "" : "text"), s = A(() => {
      var {
        hint: H,
        blurColor: j,
        focusColor: z
      } = e;
      if (!H)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? z || "var(--field-decorator-focus-color)" : j || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Vr(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Or(), b = (H) => {
      Ne(() => {
        var {
          validateTrigger: j,
          rules: z,
          modelValue: G
        } = e;
        f(j, H, z, G);
      });
    }, y = (H) => {
      a.value = !0, S(e.onFocus, H), b("onFocus");
    }, w = (H) => {
      a.value = !1, S(e.onBlur, H), b("onBlur");
    }, O = (H) => {
      var j = H.target, {
        value: z
      } = j;
      return e.type === "number" && (z = P(z)), L(W(z));
    }, C = () => {
      t.value = !0;
    }, $ = (H) => {
      t.value && (t.value = !1, H.target.dispatchEvent(new Event("input")));
    }, E = (H) => {
      if (!t.value) {
        var j = O(H);
        S(e["onUpdate:modelValue"], j), S(e.onInput, j, H), b("onInput");
      }
    }, T = (H) => {
      var j = O(H);
      S(e.onChange, j, H), b("onChange");
    }, B = () => {
      var {
        disabled: H,
        readonly: j,
        clearable: z,
        onClear: G
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || j || !z || (S(e["onUpdate:modelValue"], ""), S(G, ""), b("onClear"));
    }, h = (H) => {
      var {
        disabled: j,
        onClick: z
      } = e;
      d != null && d.disabled.value || j || (S(z, H), b("onClick"));
    }, P = (H) => {
      var j = H.indexOf("-"), z = H.indexOf(".");
      return j > -1 && (H = j === 0 ? "-" + H.replace(/-/g, "") : H.replace(/-/g, "")), z > -1 && (H = H.slice(0, z + 1) + H.slice(z).replace(/\./g, "")), H.replace(/[^-0-9.]/g, "");
    }, W = (H) => e.modelModifiers.trim ? H.trim() : H, L = (H) => e.maxlength ? H.slice(0, R(e.maxlength)) : H, Z = (H) => {
      var {
        disabled: j,
        readonly: z
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || j || z || H.stopPropagation();
    };
    function K(H) {
      var {
        disabled: j
      } = e;
      d != null && d.disabled.value || j || H.target === n.value || (I(), H.preventDefault());
    }
    var U = () => {
      S(e["onUpdate:modelValue"], ""), g();
    }, M = () => m(e.rules, e.modelValue), I = () => {
      var H;
      (H = n.value) == null || H.focus();
    }, D = () => {
      n.value.blur();
    }, x = {
      reset: U,
      validate: M,
      resetValidation: g
    };
    return S(u, x), sr(() => {
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
      n: Cb,
      classes: Sb,
      isEmpty: Yr,
      handleFocus: y,
      handleBlur: w,
      handleInput: E,
      handleChange: T,
      handleClear: B,
      handleClick: h,
      handleTouchstart: Z,
      handleCompositionStart: C,
      handleCompositionEnd: $,
      handleMousedown: K,
      validate: M,
      resetValidation: g,
      reset: U,
      focus: I,
      blur: D
    };
  }
});
Md.render = Pb;
const Sn = Md;
Sn.install = function(e) {
  e.component(Sn.name, Sn);
};
var pk = Sn;
function Ob(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Vb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Mb = {
  type: {
    type: String,
    default: "default",
    validator: Ob
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
    validator: Vb
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
  n: Eb,
  classes: Bb
} = re("link");
function Ib(e, r) {
  return p(), be(
    nt(e.tag),
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
var Ed = ee({
  name: "VarLink",
  props: Mb,
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
      o || S(l, t);
    };
    return {
      n: Eb,
      classes: Bb,
      tag: r,
      linkProps: n,
      handleClick: a,
      toSizeUnit: ye
    };
  }
});
Ed.render = Ib;
const oa = Ed;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var hk = oa, Nb = {
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
}, Bd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Db() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(Bd);
  return {
    length: n,
    tabItemList: r,
    bindTabItem: e
  };
}
var Id = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Ab() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ur(Bd);
  return r || Pr("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: n,
    tabsItems: e,
    bindTabsItems: r
  };
}
function zb() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = dr(Id);
  return {
    length: n,
    lists: e,
    bindLists: r
  };
}
function Lb() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ur(Id);
  return {
    index: n,
    tabItem: e,
    bindTabItem: r
  };
}
function Ql(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Rb(e) {
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
  n: Ub,
  classes: Fb
} = re("list");
function Hb(e, r) {
  var n = oe("var-loading"), a = Ie("ripple");
  return p(), k(
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
        ae(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), J(n, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : _("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [N(
      "div",
      {
        class: c(e.n("finished"))
      },
      ae(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => [$e((p(), k(
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
    )), [[a]])]) : _("v-if", !0), N(
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
var Nd = ee({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: Nr
  },
  props: Nb,
  setup(e) {
    var {
      tabItem: r,
      bindTabItem: n
    } = Lb(), a = V(null), t = V(null), o, l = () => {
      S(e["onUpdate:error"], !1), S(e["onUpdate:loading"], !0), S(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = xe(o), {
        bottom: v
      } = xe(t.value);
      return Math.floor(v) - je(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Rb(function* () {
        yield Ne(), !(e.loading || e.finished || e.error || (r == null ? void 0 : r.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return S(n, {}), r && ie(() => r.current.value, u), ie(() => [e.loading, e.error, e.finished], u), sr(() => {
      o = Tn(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), en(s), rt(s), {
      pack: Ze,
      listEl: a,
      detectorEl: t,
      dt: io,
      isNumber: lr,
      load: l,
      check: u,
      n: Ub,
      classes: Fb
    };
  }
});
Nd.render = Hb;
const ia = Nd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var gk = ia, Yb = {
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
  classes: jb,
  n: _l
} = re("loading-bar");
const Wb = ee({
  name: "VarLoadingBar",
  props: Yb,
  setup(e) {
    return () => J("div", {
      class: jb(_l(), [e.error, _l("--error")]),
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
var Dd, Ad, So, zd, xl, Ld = {}, Gb = {
  value: 0,
  opacity: 0,
  error: !1
}, Qe = Ae(Gb), qb = (e) => {
  Object.assign(Qe, e);
}, Xb = (e) => {
  Object.assign(Qe, e), Ld = e;
}, Kb = () => {
  Object.keys(Ld).forEach((e) => {
    Qe[e] !== void 0 && (Qe[e] = void 0);
  });
}, Rd = () => {
  xl || (xl = !0, ot(Wb, Qe));
}, Xi = () => {
  Dd = window.setTimeout(() => {
    if (!(Qe.value >= 95)) {
      var e = Math.random();
      Qe.value < 70 && (e = Math.round(5 * Math.random())), Qe.value += e, Xi();
    }
  }, 200);
}, Ki = () => {
  window.clearTimeout(Ad), window.clearTimeout(Dd), window.clearTimeout(So), window.clearTimeout(zd);
}, Zb = () => {
  Ki(), Qe.error = !1, Qe.value = 0, Rd(), So = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), Xi();
}, Ud = () => {
  Ki(), Qe.value = 100, So = window.setTimeout(() => {
    Qe.opacity = 0, Ad = window.setTimeout(() => {
      Qe.error = !1;
    }, 250);
  }, 300);
}, Jb = () => {
  Ki(), Qe.error = !0, Qe.value === 100 && (Qe.value = 0), Rd(), So = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), Xi(), zd = window.setTimeout(Ud, 300);
}, Fd = {
  start: Zb,
  finish: Ud,
  error: Jb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: qb,
  setDefaultOptions: Xb,
  resetDefaultOptions: Kb
}, yk = Fd;
const gi = Fd;
function Qb(e) {
  return ["click", "hover"].includes(e);
}
function _b(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var xb = {
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
    validator: Qb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: _b
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
  n: e0,
  classes: r0
} = re("menu");
function n0(e, r) {
  return p(), k(
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
    [Y(e.$slots, "default"), (p(), be(
      En,
      {
        to: e.teleport
      },
      [J(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed,
          persisted: ""
        },
        {
          default: ve(() => [$e(N(
            "div",
            {
              ref: "popover",
              style: q({
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
          ), [[$n, e.show]])]),
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
var Hd = ee({
  name: "VarMenu",
  props: xb,
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
      // expose
      open: f,
      // expose
      close: m,
      // expose
      resize: g
    } = cd(e);
    return {
      popover: r,
      host: n,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: hr,
      toSizeUnit: ye,
      n: e0,
      classes: r0,
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
Hd.render = n0;
const Jr = Hd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var bk = Jr, Yd = Symbol("SELECT_BIND_OPTION_KEY");
function a0() {
  var {
    length: e,
    childProviders: r,
    bindChildren: n
  } = dr(Yd);
  return {
    length: e,
    options: r,
    bindOptions: n
  };
}
function t0() {
  var {
    index: e,
    parentProvider: r,
    bindParent: n
  } = ur(Yd);
  return n || Pr("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: r,
    bindSelect: n
  };
}
var o0 = {
  label: {},
  value: {}
}, {
  n: i0,
  classes: l0
} = re("option");
function s0(e, r) {
  var n = oe("var-checkbox"), a = Ie("ripple");
  return $e((p(), k(
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
    ), e.multiple ? (p(), be(
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
    )) : _("v-if", !0), N(
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
var jd = ee({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: hn
  },
  props: o0,
  setup(e) {
    var r = V(!1), n = A(() => r.value), a = A(() => e.label), t = A(() => e.value), {
      select: o,
      bindSelect: l
    } = t0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      r.value = !r.value, u(g);
    }, f = () => u(g), m = (b) => {
      r.value = b;
    }, g = {
      label: a,
      value: t,
      selected: n,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(g), {
      n: i0,
      classes: l0,
      optionSelected: r,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
jd.render = s0;
const la = jd;
la.install = function(e) {
  e.component(la.name, la);
};
var wk = la, u0 = {
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
function d0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: es
} = re("overlay");
const sa = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: u0,
  setup(e, r) {
    var {
      slots: n,
      attrs: a
    } = r, {
      zIndex: t
    } = Mt(() => e.show, 1), {
      disabled: o
    } = so(), l = () => {
      S(e.onClick), S(e["onUpdate:show"], !1);
    };
    uo(() => e.show, () => e.lockScroll);
    var i = () => J("div", Be({
      class: es(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [S(n.default)]), s = () => {
      var {
        show: u
      } = e;
      return J(Le, {
        name: es("--fade")
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
        return J(En, {
          to: u,
          disabled: o.value
        }, d0(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
var Ck = sa, v0 = {
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
  n: f0,
  classes: c0
} = re("pagination"), m0 = ["item-mode", "onClick"];
function p0(e, r) {
  var n = oe("var-icon"), a = oe("var-input"), t = oe("var-cell"), o = oe("var-menu"), l = Ie("ripple");
  return p(), k(
    "ul",
    {
      class: c(e.n())
    },
    [$e((p(), k(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[0] || (r[0] = (i) => e.clickItem("prev"))
      },
      [Y(e.$slots, "prev", {}, () => [J(n, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), k(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        a,
        {
          "var-pagination-cover": "",
          hint: !1,
          disabled: e.disabled,
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": r[1] || (r[1] = (i) => e.simpleCurrentValue = i),
          onBlur: r[2] || (r[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: r[3] || (r[3] = xi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), N("span", null, [Se(
        " / " + ae(e.pageCount) + " ",
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
    )) : (p(!0), k(
      Ve,
      {
        key: 1
      },
      Ue(e.pageList, (i, s) => $e((p(), k(
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
        m0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), $e((p(), k(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: r[4] || (r[4] = (i) => e.clickItem("next"))
      },
      [Y(e.$slots, "next", {}, () => [J(n, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), k(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        o,
        {
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": r[6] || (r[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(p(!0), k(
            Ve,
            null,
            Ue(e.sizeOption, (i, s) => $e((p(), be(
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
          default: ve(() => [N(
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
              ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
              1
              /* TEXT */
            ), J(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (p(), k(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [Se(
        ae(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), J(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": r[7] || (r[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: r[8] || (r[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: r[9] || (r[9] = xi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (p(), k(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ae(e.totalText),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Wd = ee({
  name: "VarPagination",
  components: {
    VarMenu: Jr,
    VarIcon: Oe,
    VarCell: pn,
    VarInput: Sn
  },
  directives: {
    Ripple: We
  },
  props: v0,
  setup(e) {
    var r = V(!1), n = V(""), a = V("1"), t = V(!1), o = V(!1), l = V(R(e.current) || 1), i = V(R(e.size) || 10), s = V([]), u = A(() => Math.ceil(e.maxPagerCount / 2)), d = A(() => Math.ceil(R(e.total) / R(i.value))), v = A(() => {
      var $ = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, R(e.total));
      return [$, E];
    }), f = A(() => e.showTotal ? e.showTotal(R(e.total), v.value) : ""), m = ($, E) => lr($) ? !1 : E === 1 ? t.value : o.value, g = ($, E) => lr($) ? "basic" : E === 1 ? "head" : "tail", b = ($, E) => {
      if (!($ === l.value || e.disabled)) {
        if ($ === "...") {
          l.value = E === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
          return;
        }
        if ($ === "prev") {
          l.value = O(l.value - 1);
          return;
        }
        if ($ === "next") {
          l.value = O(l.value + 1);
          return;
        }
        lr($) && (l.value = $);
      }
    }, y = () => {
      e.disabled || (r.value = !0);
    }, w = ($) => {
      i.value = $, r.value = !1;
      var E = O(l.value);
      a.value = String(E), l.value = E;
    }, O = ($) => $ > d.value ? d.value : $ < 1 ? 1 : $, C = ($, E, T) => {
      T.target.blur();
      var B = O(R(E));
      a.value = String(B), l.value = B, $ === "quick" && (n.value = "");
    };
    return ie([() => e.current, () => e.size], ($) => {
      var [E, T] = $;
      l.value = R(E) || 1, i.value = R(T || 10);
    }), ie([l, i, d], ($, E) => {
      var [T, B, h] = $, [P, W] = E, L = [], {
        maxPagerCount: Z,
        total: K,
        onChange: U
      } = e, M = Math.ceil(R(K) / R(W)), I = h - (Z - u.value) - 1;
      if (a.value = "" + T, h - 2 > Z) {
        if (P === void 0 || h !== M)
          for (var D = 2; D < Z + 2; D++)
            L.push(D);
        if (T <= Z && T < I) {
          L = [];
          for (var x = 1; x < Z + 1; x++)
            L.push(x + 1);
          t.value = !0, o.value = !1;
        }
        if (T > Z && T < I) {
          L = [];
          for (var H = 1; H < Z + 1; H++)
            L.push(T + H - u.value);
          t.value = T === 2 && Z === 1, o.value = !1;
        }
        if (T >= I) {
          L = [];
          for (var j = 1; j < Z + 1; j++)
            L.push(h - (Z - j) - 1);
          t.value = !1, o.value = !0;
        }
        L = [1, "...", ...L, "...", h];
      } else
        for (var z = 1; z <= h; z++)
          L.push(z);
      s.value = L, P != null && h > 0 && S(U, T, B), S(e["onUpdate:current"], T), S(e["onUpdate:size"], B);
    }, {
      immediate: !0
    }), {
      n: f0,
      classes: c0,
      pack: Ze,
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
      setPage: C,
      toNumber: R,
      formatElevation: hr
    };
  }
});
Wd.render = p0;
const ua = Wd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var Sk = ua, h0 = {
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
  n: g0,
  classes: y0
} = re("paper");
function b0(e, r) {
  var n = Ie("ripple");
  return $e((p(), k(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: !e.ripple
  }]]);
}
var Gd = ee({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: h0,
  setup(e) {
    var r = (n) => {
      S(e.onClick, n);
    };
    return {
      n: g0,
      classes: y0,
      formatElevation: hr,
      toSizeUnit: ye,
      handleClick: r
    };
  }
});
Gd.render = b0;
const da = Gd;
da.install = function(e) {
  e.component(da.name, da);
};
var kk = da;
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
var w0 = yi({
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
}, Je(Vt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "safeArea", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: C0,
  classes: S0
} = re("picker"), rs = 300, k0 = 15, ns = 200, $0 = 1e3, as = 0, T0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], P0 = ["onTransitionend"], O0 = ["onClick"];
function V0(e, r) {
  var n = oe("var-button");
  return p(), be(
    nt(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ve(() => [N(
        "div",
        Be({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), k(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [Y(e.$slots, "cancel", {}, () => [J(
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
          )]), Y(e.$slots, "title", {}, () => [N(
            "div",
            {
              class: c(e.n("title"))
            },
            ae(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), Y(e.$slots, "confirm", {}, () => [J(
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
        )) : _("v-if", !0), N(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), k(
            Ve,
            null,
            Ue(e.scrollColumns, (a) => (p(), k(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstartPassive: (t) => e.handleTouchstart(a),
                onTouchmove: Tr((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [N(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.setScrollEl(t, a),
                  style: q({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(p(!0), k(
                  Ve,
                  null,
                  Ue(a.column.texts, (t, o) => (p(), k(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: q({
                        height: e.optionHeight + "px"
                      }),
                      key: t,
                      onClick: (l) => e.handleClick(a, o)
                    },
                    [N(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      ae(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    14,
                    O0
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                P0
              )],
              42,
              T0
            ))),
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
var qd = ee({
  name: "VarPicker",
  components: {
    VarButton: rr,
    VarPopup: Sr
  },
  inheritAttrs: !1,
  props: w0,
  setup(e) {
    var r = V([]), n = A(() => je(e.optionHeight)), a = A(() => je(e.optionCount)), t = A(() => a.value * n.value / 2 - n.value / 2), o = A(() => a.value * n.value), l = [], i = !1, s = (U, M) => {
      M.scrollEl = U;
    }, u = (U) => {
      S(e["onUpdate:show"], U);
    }, d = (U) => {
      var M = t.value - U.column.texts.length * n.value, I = n.value + t.value;
      U.translate = oo(U.translate, M, I);
    }, v = (U, M) => {
      var I = Math.round((t.value - M) / n.value);
      return Kv(I, U.column.texts);
    }, f = (U) => (U.translate = t.value - U.index * n.value, U.translate), m = () => {
      var U = r.value.map((I) => I.column.texts[I.index]), M = r.value.map((I) => I.index);
      return {
        texts: U,
        indexes: M
      };
    }, g = function(U, M) {
      M === void 0 && (M = 0), f(U), U.duration = M;
    }, b = (U, M, I) => {
      U.translate += Math.abs(M / I) / 3e-3 * (M < 0 ? -1 : 1);
    }, y = (U, M) => {
      i || (U.index = M, U.scrolling = !0, g(U, ns));
    }, w = (U) => {
      U.touching = !0, U.translate = $o(U.scrollEl);
    }, O = (U, M) => {
      if (M.touching) {
        i = !0, M.scrolling = !1, M.duration = 0;
        var {
          clientY: I
        } = U.touches[0], D = M.prevY !== void 0 ? I - M.prevY : 0;
        M.prevY = I, M.translate += D, d(M);
        var x = performance.now();
        x - M.momentumTime > rs && (M.momentumTime = x, M.momentumPrevY = M.translate);
      }
    }, C = (U, M) => {
      M.touching = !1, M.prevY = void 0;
      var I = M.translate - M.momentumPrevY, D = performance.now() - M.momentumTime, x = Math.abs(I) >= k0 && D <= rs;
      x && b(M, I, D), M.index = v(M, M.translate);
      var H = M.translate, j = f(M);
      M.scrolling = j !== H, g(M, x ? $0 : ns), M.scrolling || W(M), br(() => {
        i = !1;
      });
    }, $ = (U) => {
      U.scrolling = !1, W(U);
    }, E = (U) => U.map((M, I) => {
      var D, x = Pe(M) ? {
        texts: M
      } : M, H = {
        id: as++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (D = x.initialIndex) != null ? D : 0,
        columnIndex: I,
        duration: 0,
        momentumTime: 0,
        column: x,
        scrollEl: null,
        scrolling: !1
      };
      return g(H), H;
    }), T = (U) => {
      var M = [];
      return B(M, U, 0, !0), M;
    }, B = function(U, M, I, D) {
      if (D === void 0 && (D = !1), Pe(M) && M.length) {
        var x, H = D && (x = e.cascadeInitialIndexes[U.length]) != null ? x : 0, j = {
          id: as++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: H,
          columnIndex: I,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: M.map((z) => z[e.textKey])
          },
          columns: M,
          scrollEl: null,
          scrolling: !1
        };
        U.push(j), g(j), B(U, j.columns[j.index].children, I + 1, D);
      }
    }, h = (U) => {
      r.value.splice(r.value.indexOf(U) + 1), B(r.value, U.columns[U.index].children, U.columnIndex + 1);
    }, P = () => {
      var {
        indexes: U
      } = m();
      return U.every((M, I) => M === l[I]);
    }, W = (U) => {
      var {
        cascade: M,
        onChange: I
      } = e;
      if (!P()) {
        M && h(U);
        var D = r.value.some((j) => j.scrolling);
        if (!D) {
          var {
            texts: x,
            indexes: H
          } = m();
          l = [...H], S(I, x, H);
        }
      }
    }, L = () => {
      if (e.cascade) {
        var U = r.value.find((M) => M.scrolling);
        U && (U.index = v(U, $o(U.scrollEl)), U.scrolling = !1, g(U), h(U));
      } else
        r.value.forEach((M) => {
          M.index = v(M, $o(M.scrollEl)), g(M);
        });
    }, Z = () => {
      L();
      var {
        texts: U,
        indexes: M
      } = m();
      l = [...M], S(e.onConfirm, U, M);
    }, K = () => {
      L();
      var {
        texts: U,
        indexes: M
      } = m();
      l = [...M], S(e.onCancel, U, M);
    };
    return ie(() => e.columns, (U) => {
      r.value = e.cascade ? T(el(U)) : E(el(U));
      var {
        indexes: M
      } = m();
      l = [...M];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: C0,
      classes: S0,
      pack: Ze,
      optionHeight: n,
      optionCount: a,
      scrollColumns: r,
      columnHeight: o,
      center: t,
      Transition: Le,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: w,
      handleTouchmove: O,
      handleTouchend: C,
      handleTransitionend: $,
      confirm: Z,
      cancel: K,
      dt: io,
      handleClick: y
    };
  }
});
qd.render = V0;
const kn = qd;
var fr;
function La(e) {
  return new Promise((r) => {
    La.close();
    var n = Pe(e) ? {
      columns: e
    } : e, a = Ae(n);
    a.dynamic = !0, a.teleport = "body", fr = a;
    var {
      unmountInstance: t
    } = ot(kn, a, {
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
kn.install = function(e) {
  e.component(kn.name, kn);
};
La.Component = kn;
La.install = function(e) {
  e.component(kn.name, kn);
};
La.close = function() {
  if (fr != null) {
    var e = fr;
    fr = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
var $k = kn;
function M0(e) {
  return ["linear", "circle"].includes(e);
}
var E0 = {
  mode: {
    type: String,
    default: "linear",
    validator: M0
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
  n: B0,
  classes: I0
} = re("progress"), Dn = 100, N0 = ["viewBox"], D0 = ["cx", "cy", "r", "stroke-width"], A0 = ["cx", "cy", "r", "stroke-width"];
function z0(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), k(
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
        [e.track ? (p(), k(
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
        )) : _("v-if", !0), N(
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
      ), e.label ? (p(), k(
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
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (p(), k(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), k(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), k(
          "circle",
          {
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
          },
          null,
          14,
          D0
        )) : _("v-if", !0), N(
          "circle",
          {
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
          },
          null,
          14,
          A0
        )],
        14,
        N0
      )), e.label ? (p(), k(
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
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Xd = ee({
  name: "VarProgress",
  props: E0,
  setup(e) {
    var r = A(() => {
      var a = R(e.value), t = a > Dn ? Dn : a, o = a > Dn ? Dn : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), n = A(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + je(a) + " " + je(a), i = R(o) > Dn ? Dn : Math.round(R(o)), s = (je(a) - je(t)) / 2, u = 2 * Math.PI * s, d = i / Dn * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: B0,
      classes: I0,
      toSizeUnit: ye,
      multiplySizeUnit: or,
      linearProps: r,
      circleProps: n
    };
  }
});
Xd.render = z0;
const va = Xd;
va.install = function(e) {
  e.component(va.name, va);
};
var Tk = va, L0 = {
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
function ts(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function os(e) {
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
  n: is,
  classes: R0
} = re("pull-refresh"), ls = 150;
function U0(e, r) {
  var n = oe("var-icon");
  return p(), k(
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
        style: q(e.controlStyle)
      },
      [J(
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
var Kd = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: L0,
  setup(e) {
    var r = V(0), n = V(null), a = V(null), t = V(0), o = V("-125%"), l = V("arrow-down"), i = V("default"), s = V(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var h = os(function* (P) {
        if (l.value !== P)
          return l.value = P, new Promise((W) => {
            window.setTimeout(W, ls);
          });
      });
      return function(W) {
        return h.apply(this, arguments);
      };
    }(), g = A(() => i.value !== "loading" && i.value !== "success" && !e.disabled), b = A(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), y = A(() => Math.abs(2 * r.value)), w = A(() => i.value === "success"), O = (h) => {
      var P = "classList" in u ? u : document.body;
      P.classList[h](is() + "--lock");
    }, C = (h) => {
      if (r.value === 0) {
        var {
          width: P
        } = xe(a.value);
        r.value = -(P + P * 0.25);
      }
      v = h.touches[0].clientY, f = 0, d = Tn(h.target);
    }, $ = (h) => {
      if (g.value && !(d !== u && pt(d) > 0)) {
        var P = pt(u);
        if (!(P > 0)) {
          var W = P === 0, L = h.touches[0];
          f = L.clientY - v, W && f >= 0 && h.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = h.touches[0].clientY), W && o.value > r.value && O("add");
          var Z = (h.touches[0].clientY - t.value) / 2 + r.value;
          o.value = Z >= y.value ? y.value : Z, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, E = /* @__PURE__ */ function() {
      var h = os(function* () {
        g.value && (s.value = !0, o.value >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, S(e["onUpdate:modelValue"], !0), Ne(() => {
          S(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = r.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, R(e.animationDuration))), d = null);
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), T = () => {
      u = e.target ? Ss(e.target, "PullRefresh") : Tn(n.value);
    }, B = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, R(e.animationDuration));
    };
    return ie(() => e.modelValue, (h) => {
      h === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = r.value, B();
      }, R(e.successDuration)));
    }), sr(T), Rr(n, "touchmove", $), {
      n: is,
      classes: R0,
      ICON_TRANSITION: ls,
      refreshStatus: i,
      freshNode: n,
      controlNode: a,
      touchStart: C,
      touchMove: $,
      touchEnd: E,
      iconName: l,
      controlStyle: b,
      isSuccess: w
    };
  }
});
Kd.render = U0;
const fa = Kd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var Pk = fa, F0 = {
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
}, Zd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function H0() {
  var {
    bindChildren: e,
    childProviders: r,
    length: n
  } = dr(Zd);
  return {
    length: n,
    radios: r,
    bindRadios: e
  };
}
function Y0() {
  var {
    bindParent: e,
    parentProvider: r,
    index: n
  } = ur(Zd);
  return {
    index: n,
    radioGroup: r,
    bindRadioGroup: e
  };
}
var {
  n: j0,
  classes: W0
} = re("radio");
function G0(e, r) {
  var n = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      Be({
        class: e.n(),
        onClick: r[0] || (r[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [$e((p(), k(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
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
        }, () => [J(
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
        )]), J(
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
    ), J(
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
var Jd = ee({
  name: "VarRadio",
  directives: {
    Ripple: We,
    Hover: Ur
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  inheritAttrs: !1,
  props: F0,
  setup(e) {
    var r = V(!1), n = A(() => r.value === e.checkedValue), a = V(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = Y0(), {
      hovering: l,
      handleHovering: i
    } = Pn(), {
      form: s,
      bindForm: u
    } = Vr(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = Or(), g = (T) => {
      Ne(() => {
        var {
          validateTrigger: B,
          rules: h,
          modelValue: P
        } = e;
        v(B, T, h, P);
      });
    }, b = (T) => {
      var {
        checkedValue: B,
        onChange: h
      } = e;
      t && r.value === B || (r.value = T, S(e["onUpdate:modelValue"], r.value), S(h, r.value), t == null || t.onToggle(B), g("onChange"));
    }, y = (T) => {
      var {
        disabled: B,
        readonly: h,
        uncheckedValue: P,
        checkedValue: W,
        onClick: L
      } = e;
      s != null && s.disabled.value || B || (S(L, T), !(s != null && s.readonly.value || h) && (a.value = !0, b(n.value ? P : W)));
    }, w = (T) => {
      var {
        checkedValue: B,
        uncheckedValue: h
      } = e;
      r.value = T === B ? B : h;
    }, O = () => {
      S(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, C = () => f(e.rules, e.modelValue), $ = (T) => {
      var {
        uncheckedValue: B,
        checkedValue: h
      } = e, P = ![B, h].includes(T);
      P && (T = n.value ? B : h), b(T);
    };
    ie(() => e.modelValue, (T) => {
      r.value = T;
    }, {
      immediate: !0
    });
    var E = {
      sync: w,
      validate: C,
      resetValidation: m,
      reset: O
    };
    return S(o, E), S(u, E), {
      withAnimation: a,
      checked: n,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: j0,
      classes: W0,
      handleClick: y,
      toggle: $,
      reset: O,
      validate: C,
      resetValidation: m
    };
  }
});
Jd.render = G0;
const ca = Jd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var Ok = ca;
function q0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var X0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: q0
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
  n: K0,
  classes: Z0
} = re("radio-group");
function J0(e, r) {
  var n = oe("var-form-details");
  return p(), k(
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
    ), J(
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
var Qd = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: _e
  },
  props: X0,
  setup(e) {
    var {
      length: r,
      radios: n,
      bindRadios: a
    } = H0(), {
      bindForm: t
    } = Vr(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Or(), u = A(() => o.value), d = (y) => {
      Ne(() => {
        var {
          validateTrigger: w,
          rules: O,
          modelValue: C
        } = e;
        l(w, y, O, C);
      });
    }, v = () => n.forEach((y) => {
      var {
        sync: w
      } = y;
      return w(e.modelValue);
    }), f = (y) => {
      S(e["onUpdate:modelValue"], y), S(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      S(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => r.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return S(t, b), a(b), {
      errorMessage: o,
      n: K0,
      classes: Z0,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
Qd.render = J0;
const ma = Qd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Vk = ma, Q0 = {
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
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: lt
} = re("rate"), _0 = ["onClick"];
function x0(e, r) {
  var n = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), k(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), k(
        Ve,
        null,
        Ue(e.toNumber(e.count), (i) => $e((p(), k(
          "div",
          {
            key: i,
            style: q(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [J(
            n,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: q({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          ), J(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          _0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), J(
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
var _d = ee({
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Ur
  },
  props: Q0,
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
    } = Pn(), s = V(-1), u = (C) => {
      var {
        count: $,
        gap: E
      } = e;
      return {
        color: v(C).color,
        marginRight: C !== R($) ? ye(E) : 0
      };
    }, d = (C) => {
      var {
        name: $,
        color: E
      } = v(C);
      return {
        [lt("content")]: !0,
        [lt("--disabled")]: (r == null ? void 0 : r.disabled.value) || e.disabled,
        [lt("--error")]: a.value,
        [lt("--primary")]: $ !== e.emptyIcon && !E
      };
    }, v = (C) => {
      var {
        modelValue: $,
        disabled: E,
        disabledColor: T,
        color: B,
        half: h,
        emptyColor: P,
        icon: W,
        halfIcon: L,
        emptyIcon: Z
      } = e, K = B;
      return (E || r != null && r.disabled.value) && (K = T), C <= R($) ? {
        color: K,
        name: W
      } : h && C <= R($) + 0.5 ? {
        color: K,
        name: L
      } : {
        color: E || r != null && r.disabled.value ? T : P,
        name: Z
      };
    }, f = (C, $) => {
      if (e.half) {
        var {
          offsetWidth: E
        } = $.target;
        $.offsetX <= Math.floor(E / 2) && (C -= 0.5);
      }
      S(e["onUpdate:modelValue"], C);
    }, m = () => o(e.rules, R(e.modelValue)), g = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), b = (C, $) => {
      var {
        readonly: E,
        disabled: T,
        onChange: B
      } = e;
      E || T || r != null && r.disabled.value || r != null && r.readonly.value || (f(C, $), S(B, C), g());
    }, y = (C) => ($) => {
      s.value = C, i.value = $;
    }, w = () => {
      S(e["onUpdate:modelValue"], 0), l();
    }, O = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return S(n, O), {
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: b,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: y,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: ye,
      toNumber: R,
      n: lt
    };
  }
});
_d.render = x0;
const pa = _d;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Mk = pa;
function e1(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var r1 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: e1
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
}, n1 = (e) => (Ra(""), e = e(), Ua(), e), a1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, t1 = /* @__PURE__ */ n1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), o1 = [t1];
function i1(e, r) {
  return p(), k("svg", a1, o1);
}
var xd = ee({});
xd.render = i1;
const l1 = xd;
var s1 = (e) => (Ra(""), e = e(), Ua(), e), u1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, d1 = /* @__PURE__ */ s1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), v1 = [d1];
function f1(e, r) {
  return p(), k("svg", u1, v1);
}
var ev = ee({});
ev.render = f1;
const c1 = ev;
var m1 = (e) => (Ra(""), e = e(), Ua(), e), p1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, h1 = /* @__PURE__ */ m1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), g1 = [h1];
function y1(e, r) {
  return p(), k("svg", p1, g1);
}
var rv = ee({});
rv.render = y1;
const b1 = rv;
var {
  n: w1,
  classes: C1
} = re("result");
function S1(e, r) {
  return p(), k(
    Ve,
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
var nv = ee({
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
      n: w1,
      classes: C1,
      toNumber: R
    };
  }
});
nv.render = S1;
const k1 = nv;
var $1 = (e) => (Ra(""), e = e(), Ua(), e), T1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, P1 = /* @__PURE__ */ $1(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), O1 = [P1];
function V1(e, r) {
  return p(), k("svg", T1, O1);
}
var av = ee({});
av.render = V1;
const M1 = av;
var E1 = (e) => (Ra(""), e = e(), Ua(), e), B1 = {
  viewBox: "-4 -4 32 32"
}, I1 = /* @__PURE__ */ E1(() => /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), N1 = [I1];
function D1(e, r) {
  return p(), k("svg", B1, N1);
}
var tv = ee({});
tv.render = D1;
const A1 = tv;
var {
  n: z1,
  classes: L1
} = re("result");
function R1(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "image", {}, () => [e.type ? (p(), k(
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
        [(p(), be(
          nt(e.type),
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
    )) : _("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var ov = ee({
  name: "VarResult",
  components: {
    Info: l1,
    Success: k1,
    Warning: b1,
    Error: c1,
    Question: M1,
    Empty: A1
  },
  props: r1,
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
      n: z1,
      classes: L1,
      toNumber: R,
      toPxNum: je,
      toSizeUnit: ye,
      circleSize: r,
      borderSize: n
    };
  }
});
ov.render = R1;
const ha = ov;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Ek = ha;
function U1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function F1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var H1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: U1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: F1
  },
  onClick: F()
}, {
  n: Y1,
  classes: j1
} = re("row");
function W1(e, r) {
  return p(), k(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var iv = ee({
  name: "VarRow",
  props: H1,
  setup(e) {
    var {
      cols: r,
      bindCols: n,
      length: a
    } = xm(), t = A(() => {
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
      S(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), n(i), {
      n: Y1,
      classes: j1,
      average: t,
      handleClick: l,
      padStartFlex: Xt
    };
  }
});
iv.render = W1;
const ga = iv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Bk = ga;
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
function G1(e) {
  return ["left", "right", "center"].includes(e);
}
var q1 = bi({
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
    validator: G1
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
}, Je(qi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: X1,
  classes: K1
} = re("select"), Z1 = {
  key: 1
};
function J1(e, r) {
  var n = oe("var-chip"), a = oe("var-icon"), t = oe("var-field-decorator"), o = oe("var-menu"), l = oe("var-form-details");
  return p(), k(
    "div",
    {
      class: c(e.n()),
      onClick: r[3] || (r[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [J(
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
        menu: ve(() => [N(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ve(() => [J(
          t,
          Pt(to({
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
          gs({
            "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
            default: ve(() => [N(
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
                [e.isEmptyModelValue ? _("v-if", !0) : Y(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), k(
                  Ve,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), k(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(p(!0), k(
                      Ve,
                      null,
                      Ue(e.labels, (i) => (p(), be(
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
                  )) : (p(), k(
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
                )) : (p(), k(
                  "span",
                  Z1,
                  ae(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), e.useCustomPlaceholder ? (p(), k(
                "span",
                {
                  key: 0,
                  class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"))),
                  style: q({
                    color: e.placeholderColor
                  })
                },
                ae(e.placeholder),
                7
                /* TEXT, CLASS, STYLE */
              )) : _("v-if", !0), Y(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [J(
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
    ), J(
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
var lv = ee({
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: Jr,
    VarChip: gn,
    VarFieldDecorator: Vd,
    VarFormDetails: _e
  },
  props: q1,
  setup(e) {
    var r = V(!1), n = A(() => e.multiple), a = A(() => e.focusColor), t = V(""), o = V([]), l = A(() => Yr(e.modelValue)), i = A(() => e.disabled || e.readonly ? "" : "pointer"), s = V(0), {
      bindForm: u,
      form: d
    } = Vr(), {
      length: v,
      options: f,
      bindOptions: m
    } = a0(), {
      errorMessage: g,
      validateWithTrigger: b,
      validate: y,
      // expose
      resetValidation: w
    } = Or(), O = V(null), C = A(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), $ = A(() => {
      var {
        hint: G,
        blurColor: Q,
        focusColor: ne
      } = e;
      if (!G)
        return g.value ? "var(--field-decorator-error-color)" : r.value ? ne || "var(--field-decorator-focus-color)" : Q || "var(--field-decorator-blur-color)";
    }), E = A(() => !e.hint && Yr(e.modelValue) && !r.value), T = () => {
      var {
        multiple: G,
        modelValue: Q
      } = e;
      if (G) {
        var ne = Q;
        o.value = ne.map(P);
      }
      !G && !Yr(Q) && (t.value = P(Q)), !G && Yr(Q) && (t.value = "");
    }, B = (G) => {
      Ne(() => {
        var {
          validateTrigger: Q,
          rules: ne,
          modelValue: ue
        } = e;
        b(Q, G, ne, ue);
      });
    }, h = (G) => {
      var {
        value: Q,
        label: ne
      } = G;
      return Q.value != null ? Q.value : ne.value;
    }, P = (G) => {
      var Q, ne, ue = f.find((ge) => {
        var {
          value: Ce
        } = ge;
        return Ce.value === G;
      });
      return ue || (ue = f.find((ge) => {
        var {
          label: Ce
        } = ge;
        return Ce.value === G;
      })), (Q = (ne = ue) == null ? void 0 : ne.label.value) != null ? Q : "";
    }, W = () => {
      var {
        disabled: G,
        readonly: Q,
        onFocus: ne
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || G || Q || (s.value = je(e.offsetY), r.value = !0, S(ne), B("onFocus"));
    }, L = () => {
      var {
        disabled: G,
        readonly: Q,
        onBlur: ne
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || G || Q || (S(ne), B("onBlur"));
    }, Z = (G) => {
      var {
        disabled: Q,
        readonly: ne,
        multiple: ue,
        onChange: ge
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || Q || ne)) {
        var Ce = ue ? f.filter((ar) => {
          var {
            selected: te
          } = ar;
          return te.value;
        }).map(h) : h(G);
        S(e["onUpdate:modelValue"], Ce), S(ge, Ce), B("onChange"), !ue && (r.value = !1);
      }
    }, K = () => {
      var {
        disabled: G,
        readonly: Q,
        multiple: ne,
        clearable: ue,
        onClear: ge
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || G || Q || !ue)) {
        var Ce = ne ? [] : void 0;
        S(e["onUpdate:modelValue"], Ce), S(ge, Ce), B("onClear");
      }
    }, U = (G) => {
      var {
        disabled: Q,
        onClick: ne
      } = e;
      d != null && d.disabled.value || Q || (S(ne, G), B("onClick"));
    }, M = (G) => {
      var {
        disabled: Q,
        readonly: ne,
        modelValue: ue,
        onClose: ge
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || Q || ne)) {
        var Ce = ue, ar = f.find((de) => {
          var {
            label: ce
          } = de;
          return ce.value === G;
        }), te = Ce.filter((de) => {
          var ce;
          return de !== ((ce = ar.value.value) != null ? ce : ar.label.value);
        });
        S(e["onUpdate:modelValue"], te), S(ge, te), B("onClose");
      }
    }, I = () => {
      var {
        multiple: G,
        modelValue: Q
      } = e;
      if (G) {
        var ne = Q;
        f.forEach((ue) => ue.sync(ne.includes(h(ue))));
      } else
        f.forEach((ue) => ue.sync(Q === h(ue)));
      T();
    }, D = () => {
      s.value = je(e.offsetY), r.value = !0;
    }, x = () => {
      r.value = !1;
    }, H = () => y(e.rules, e.modelValue), j = () => {
      S(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: G,
        modelValue: Q
      } = e;
      G && !Pe(Q) && Pr("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, I, {
      deep: !0
    }), ie(() => v.value, I);
    var z = {
      multiple: n,
      focusColor: a,
      computeLabel: T,
      onSelect: Z,
      reset: j,
      validate: H,
      resetValidation: w
    };
    return m(z), S(u, z), {
      offsetY: s,
      isFocus: r,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: O,
      placement: C,
      cursor: i,
      placeholderColor: $,
      useCustomPlaceholder: E,
      n: X1,
      classes: K1,
      handleFocus: W,
      handleBlur: L,
      handleClear: K,
      handleClick: U,
      handleClose: M,
      reset: j,
      validate: H,
      resetValidation: w,
      focus: D,
      blur: x
    };
  }
});
lv.render = J1;
const ya = lv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Ik = ya, Q1 = {
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
  n: _1,
  classes: x1
} = re("skeleton");
function ew(e, r) {
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (p(), k(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), k(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), k(
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), k(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), k(
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), k(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), k(
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
          )) : _("v-if", !0), (p(!0), k(
            Ve,
            null,
            Ue(e.toNumber(e.rows), (n, a) => (p(), k(
              "div",
              {
                class: c(e.n("row")),
                key: n,
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
        )) : _("v-if", !0)],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.loading && e.fullscreen ? (p(), k(
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var sv = ee({
  name: "VarSkeleton",
  props: Q1,
  setup() {
    return {
      n: _1,
      classes: x1,
      toSizeUnit: ye,
      toNumber: R
    };
  }
});
sv.render = ew;
const ba = sv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Nk = ba;
function rw(e) {
  return ["always", "normal", "never"].includes(e);
}
var ze;
(function(e) {
  e.First = "1", e.Second = "2";
})(ze || (ze = {}));
var nw = {
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
    validator: rw
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
  n: ss,
  classes: aw
} = re("slider"), tw = ["onTouchstart"];
function ow(e, r) {
  var n = oe("var-hover-overlay"), a = oe("var-form-details"), t = Ie("hover");
  return p(), k(
    "div",
    {
      class: c(e.n(e.direction))
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
      ), (p(!0), k(
        Ve,
        null,
        Ue(e.thumbList, (o) => (p(), k(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: q(e.thumbStyle(o)),
            onTouchstart: Tr((l) => e.start(l, o.enumValue), ["stop"])
          },
          [Y(e.$slots, "button", {
            currentValue: o.text
          }, () => [$e(N(
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
            [J(
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
              ae(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          tw
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), J(
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
var uv = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Hover: Ur
  },
  props: nw,
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
    } = Pn(), {
      hovering: u,
      handleHovering: d
    } = Pn(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentOffset: 0,
      active: !1,
      percentValue: 0
    }), m = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = V(null), b = V(0), y = V(!1), w = Ae({
      [ze.First]: f(),
      [ze.Second]: f()
    }), O = A(() => R(e.max) - R(e.min)), C = A(() => b.value / O.value * R(e.step)), $ = A(() => {
      var {
        modelValue: te,
        range: de
      } = e, ce = [];
      return de && Pe(te) ? ce = [{
        value: K(te[0]),
        enumValue: ze.First,
        text: U(te[0]),
        hovering: ut(i),
        handleHovering: s
      }, {
        value: K(te[1]),
        enumValue: ze.Second,
        text: U(te[1]),
        hovering: ut(u),
        handleHovering: d
      }] : lr(te) && (ce = [{
        value: K(te),
        enumValue: ze.First,
        text: U(te),
        hovering: ut(i),
        handleHovering: s
      }]), ce;
    }), E = A(() => {
      var {
        activeColor: te,
        range: de,
        modelValue: ce
      } = e, De = de && Pe(ce) ? K(Math.min(ce[0], ce[1])) : 0, Ke = de && Pe(ce) ? K(Math.max(ce[0], ce[1])) - De : K(ce);
      return h.value ? {
        left: "0px",
        height: Ke + "%",
        bottom: De + "%",
        background: te
      } : {
        top: "0px",
        width: Ke + "%",
        left: De + "%",
        background: te
      };
    }), T = A(() => e.disabled || (n == null ? void 0 : n.disabled.value)), B = A(() => e.readonly || (n == null ? void 0 : n.readonly.value)), h = A(() => e.direction === "vertical"), P, W = (te) => {
      var de = te.currentTarget;
      return de ? h.value ? b.value - (te.clientY - xe(de).top) : te.clientX - Jv(de) : 0;
    }, L = (te) => {
      var de = h.value ? "bottom" : "left";
      return {
        [de]: te.value + "%",
        zIndex: w[te.enumValue].active ? 1 : void 0
      };
    }, Z = (te) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[te].active, K = (te) => {
      var {
        min: de,
        max: ce
      } = e;
      return te < R(de) ? 0 : te > R(ce) ? 100 : (te - R(de)) / O.value * 100;
    }, U = (te) => {
      if (!lr(te))
        return 0;
      var de = te;
      de < Number(e.min) && (de = Number(e.min)), de > Number(e.max) && (de = Number(e.max));
      var ce = parseInt("" + de, 10) === de;
      return ce ? de : R(de.toPrecision(5));
    }, M = (te, de) => {
      T.value || de.handleHovering(te);
    }, I = (te, de) => {
      var ce = [], {
        step: De,
        range: Ke,
        modelValue: Ge,
        onChange: He,
        min: Ye
      } = e, le = R(De), we = Math.round(te / C.value), pe = we * le + R(Ye), ke = w[de].percentValue * le + R(Ye);
      if (w[de].percentValue = we, Ke && Pe(Ge) && (ce = de === ze.First ? [pe, Ge[1]] : [Ge[0], pe]), ke !== pe) {
        var Te = Ke ? ce.map((Re) => U(Re)) : U(pe);
        S(He, Te), S(e["onUpdate:modelValue"], Te), m();
      }
    }, D = (te) => {
      if (!e.range)
        return ze.First;
      var de = w[ze.First].percentValue * C.value, ce = w[ze.Second].percentValue * C.value, De = Math.abs(te - de), Ke = Math.abs(te - ce);
      return De <= Ke ? ze.First : ze.Second;
    }, x = () => {
      document.addEventListener("touchmove", z, {
        passive: !1
      }), document.addEventListener("touchend", G), document.addEventListener("touchcancel", G);
    }, H = () => {
      document.removeEventListener("touchmove", z), document.removeEventListener("touchend", G), document.removeEventListener("touchcancel", G);
    }, j = (te, de) => {
      if (b.value || (b.value = g.value.offsetWidth), T.value || (w[de].active = !0), P = de, x(), !(T.value || B.value)) {
        S(e.onStart), y.value = !0;
        var {
          clientX: ce,
          clientY: De
        } = te.touches[0];
        w[de].startPosition = h.value ? De : ce;
      }
    }, z = (te) => {
      if (te.preventDefault(), !(T.value || B.value || !y.value)) {
        var {
          startPosition: de,
          currentOffset: ce
        } = w[P], {
          clientX: De,
          clientY: Ke
        } = te.touches[0], Ge = (h.value ? de - Ke : De - de) + ce;
        Ge <= 0 ? Ge = 0 : Ge >= b.value && (Ge = b.value), I(Ge, P);
      }
    }, G = () => {
      H();
      var {
        range: te,
        modelValue: de,
        onEnd: ce,
        step: De,
        min: Ke
      } = e;
      if (T.value || (w[P].active = !1), !(T.value || B.value)) {
        var Ge = [];
        w[P].currentOffset = w[P].percentValue * C.value;
        var He = w[P].percentValue * R(De) + R(Ke);
        te && Pe(de) && (Ge = P === ze.First ? [He, de[1]] : [de[0], He]), S(ce, te ? Ge : He), y.value = !1;
      }
    }, Q = (te) => {
      if (!(T.value || B.value) && !te.target.closest("." + ss("thumb"))) {
        var de = W(te), ce = D(de);
        P = ce, I(de, ce), G();
      }
    }, ne = () => {
      var te = R(e.step);
      return isNaN(te) ? (ol("Slider", 'type of prop "step" should be Number'), !1) : te < 0 ? (ol("Slider", '"step" should be > 0'), !1) : !0;
    }, ue = () => {
      var {
        range: te,
        modelValue: de
      } = e;
      return te && !Pe(de) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !te && Pe(de) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : te && Pe(de) && de.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, ge = function(te, de) {
      te === void 0 && (te = e.modelValue), de === void 0 && (de = R(e.step));
      var ce = (De) => {
        var {
          min: Ke,
          max: Ge
        } = e;
        return De < R(Ke) ? 0 : De > R(Ge) ? O.value / de : (De - R(Ke)) / de;
      };
      e.range && Pe(te) ? (w[ze.First].percentValue = ce(te[0]), w[ze.First].currentOffset = w[ze.First].percentValue * C.value, w[ze.Second].percentValue = ce(te[1]), w[ze.Second].currentOffset = w[ze.Second].percentValue * C.value) : lr(te) && (w[ze.First].currentOffset = ce(te) * C.value);
    }, Ce = () => {
      var te = e.range ? [0, 0] : 0;
      S(e["onUpdate:modelValue"], te), l();
    }, ar = {
      reset: Ce,
      validate: v,
      resetValidation: l
    };
    return S(r, ar), ie([() => e.modelValue, () => e.step], (te) => {
      var [de, ce] = te;
      !ne() || !ue() || y.value || ge(de, R(ce));
    }), ie(b, () => ge()), sr(() => {
      !ne() || !ue() || (b.value = g.value[h.value ? "offsetHeight" : "offsetWidth"]);
    }), kt(() => {
      H();
    }), {
      n: ss,
      classes: aw,
      Thumbs: ze,
      sliderEl: g,
      getFillStyle: E,
      isDisabled: T,
      isVertical: h,
      thumbStyle: L,
      errorMessage: a,
      thumbsProps: w,
      thumbList: $,
      hover: M,
      multiplySizeUnit: or,
      toNumber: R,
      showLabel: Z,
      start: j,
      move: z,
      end: G,
      click: Q
    };
  }
});
uv.render = ow;
const wa = uv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Dk = wa;
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
function iw(e) {
  var r = ["top", "center", "bottom"];
  return r.includes(e);
}
function lw(e) {
  return Zi.includes(e);
}
var dv = {
  type: {
    type: String,
    validator: lw
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: iw
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
  loadingType: Je(dn, "type"),
  loadingSize: Je(dn, "size"),
  loadingRadius: Je(dn, "radius"),
  loadingColor: wi({}, Je(dn, "color"), {
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
  n: sw,
  classes: uw
} = re("snackbar"), dw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function vw(e, r) {
  var n = oe("var-icon"), a = oe("var-loading");
  return $e((p(), k(
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
          ae(e.content),
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
        [e.iconName ? (p(), be(
          n,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (p(), be(
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
        )) : _("v-if", !0), Y(e.$slots, "icon")],
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
  )), [[$n, e.show]]);
}
var vv = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Nr,
    VarIcon: Oe
  },
  props: dv,
  setup(e) {
    var r = V(null), {
      zIndex: n
    } = Mt(() => e.show, 1);
    uo(() => e.show, () => e.lockScroll);
    var a = A(() => e.type === "loading" || e.forbidClick), t = A(() => e.type ? dw[e.type] : ""), o = () => {
      r.value = setTimeout(() => {
        e.type !== "loading" && S(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? (S(e.onOpen), o()) : l === !1 && (clearTimeout(r.value), S(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(r.value), o();
    }), sr(() => {
      e.show && (S(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Zi,
      n: sw,
      classes: uw,
      zIndex: n,
      iconName: t,
      isForbidClick: a
    };
  }
});
vv.render = vw;
const fv = vv;
var {
  n: fw
} = re("snackbar");
function cw(e, r) {
  var n = oe("var-snackbar-core");
  return p(), be(
    En,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [J(
      Le,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [J(
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
var cv = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: fv
  },
  props: dv,
  setup() {
    var {
      disabled: e
    } = so();
    return {
      n: fw,
      disabled: e
    };
  }
});
cv.render = cw;
const Ca = cv;
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
function mw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var Zi = ["loading", "success", "warning", "info", "error"], us = 0, Ci = !1, mv, xa = !1, pv = {
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
}, $r = Ae([]), Ji = pv, pw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Mo = (e) => () => Ot(e) ? e() : e, hw = {
  setup() {
    return () => {
      var e = $r.map((r) => {
        var {
          id: n,
          reactiveSnackOptions: a,
          _update: t
        } = r, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), xa && (a.position = "top");
        var l = xa ? "relative" : "absolute", i = Ct({
          position: l
        }, Sw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Mo(s),
          icon: Mo(u),
          action: Mo(d)
        };
        return J(fv, Be(a, {
          key: n,
          style: i,
          "data-id": n,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return J(jv, Be(pw, {
        style: {
          zIndex: yr.zIndex
        },
        onAfterEnter: gw,
        onAfterLeave: yw
      }), mw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, xr = function(e) {
  var r = ww(e), n = Ae(Ct({}, Ji, r));
  n.show = !0, Ci || (Ci = !0, mv = ot(hw).unmountInstance);
  var {
    length: a
  } = $r, t = {
    id: us++,
    reactiveSnackOptions: n
  };
  if (a === 0 || xa)
    bw(t);
  else {
    var o = "update-" + us;
    Cw(n, o);
  }
  return {
    clear() {
      !xa && $r.length ? $r[0].reactiveSnackOptions.show = !1 : n.show = !1;
    }
  };
};
Zi.forEach((e) => {
  xr[e] = (r) => (Ti(r) ? r.type = e : r = {
    content: r,
    type: e
  }, xr(r));
});
xr.install = function(e) {
  e.component(Ca.name, Ca);
};
xr.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== xa && ($r.forEach((r) => {
    r.reactiveSnackOptions.show = !1;
  }), xa = e);
};
xr.clear = function() {
  $r.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
xr.setDefaultOptions = function(e) {
  Ji = e;
};
xr.resetDefaultOptions = function() {
  Ji = pv;
};
xr.Component = Ca;
function gw(e) {
  var r = e.getAttribute("data-id"), n = $r.find((a) => a.id === R(r));
  n && S(n.reactiveSnackOptions.onOpened);
}
function yw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var r = e.getAttribute("data-id"), n = $r.find((t) => t.id === R(r));
  n && (n.animationEnd = !0, S(n.reactiveSnackOptions.onClosed));
  var a = $r.every((t) => t.animationEnd);
  a && (S(mv), $r = Ae([]), Ci = !1);
}
function bw(e) {
  $r.push(e);
}
function ww(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function Cw(e, r) {
  var [n] = $r;
  n.reactiveSnackOptions = Ct({}, n.reactiveSnackOptions, e), n._update = r;
}
function Sw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Ak = Ca;
const Si = xr;
var hv = (e) => ["mini", "small", "normal", "large"].includes(e), kw = (e) => hv(e) || Pe(e) || lr(e) || Fe(e), $w = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Tw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Pw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: kw
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
    validator: $w
  },
  align: {
    type: String,
    validator: Tw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function gr(e) {
  return "calc(" + e + " / 2)";
}
function Ow(e, r, n) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = n, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = gr(e) + " " + r + " " + gr(e) + " 0" : i = gr(e) + " 0" : t === "space-around" ? i = gr(e) + " " + gr(r) : t === "space-between" && (o === 0 ? i = gr(e) + " " + gr(r) + " " + gr(e) + " 0" : o === l ? i = gr(e) + " 0 " + gr(e) + " " + gr(r) : i = gr(e) + " " + gr(r))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Eo,
  classes: Vw
} = re("space");
const Sa = ee({
  name: "VarSpace",
  props: Pw,
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
      } = e, v = (t = S(n.default)) != null ? t : [], f = hv(d), [m, g] = a(d, f);
      v = Es(v);
      var b = v.length - 1, y = v.map((w, O) => {
        var C = Ow(m, g, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: b
        });
        return J("div", {
          style: {
            margin: C
          }
        }, [w]);
      });
      return J("div", {
        class: Vw(Eo(), Eo("$--box"), [o, Eo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Xt(l),
          alignItems: Xt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [y]);
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var zk = Sa, Mw = {
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
}, gv = Symbol("STEPS_BIND_STEP_KEY");
function Ew() {
  var {
    bindChildren: e,
    length: r,
    childProviders: n
  } = dr(gv);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Bw() {
  var {
    parentProvider: e,
    index: r,
    bindParent: n
  } = ur(gv);
  return n || Pr("Steps", "<step/> must in <steps>"), {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Iw,
  classes: Nw
} = re("step"), Dw = {
  key: 3
};
function Aw(e, r) {
  var n = oe("var-icon");
  return p(), k(
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
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [N(
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
          [e.isActive ? (p(), be(
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
          )) : e.isCurrent && e.currentIcon ? (p(), be(
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
          )) : e.inactiveIcon ? (p(), be(
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
          )) : (p(), k(
            "span",
            Dw,
            ae(e.index + 1),
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
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? _("v-if", !0) : (p(), k(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: q({
            margin: e.lineMargin
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ))],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var yv = ee({
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: Mw,
  setup() {
    var e = V(null), r = V(""), n = V(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Bw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = A(() => l.value === a.value), m = A(() => a.value !== -1 && l.value > a.value), g = {
      index: a
    }, b = () => v(a.value), y = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(g), ie(i, (w) => {
      if (n.value = w - 1 === a.value, e.value) {
        var O = e.value.offsetWidth / 2 - 14;
        r.value = "0 -" + O + "px";
      }
    }), {
      n: Iw,
      classes: Nw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: r,
      activeColor: s,
      inactiveColor: u,
      isLastChild: n,
      click: b,
      getRef: y
    };
  }
});
yv.render = Aw;
const ka = yv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Lk = ka;
function zw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Lw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: zw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: F()
}, {
  n: Rw
} = re("steps");
function Uw(e, r) {
  return p(), k(
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
var bv = ee({
  name: "VarSteps",
  props: Lw,
  setup(e) {
    var r = A(() => e.active), n = A(() => e.activeColor), a = A(() => e.inactiveColor), t = A(() => e.direction), {
      length: o,
      bindStep: l
    } = Ew(), i = (u) => {
      S(e.onClickStep, u);
    }, s = {
      active: r,
      length: o,
      direction: t,
      activeColor: n,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: Rw
    };
  }
});
bv.render = Uw;
const $a = bv;
$a.install = function(e) {
  e.component($a.name, $a);
};
var Rk = $a, Fw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Hw
} = re("style-provider"), Yw = ee({
  name: "VarStyleProvider",
  props: Fw,
  setup(e, r) {
    var {
      slots: n
    } = r;
    return () => hs(e.tag, {
      class: Hw(),
      style: Vs(e.styleVars)
    }, S(n.default));
  }
});
const Ta = Yw;
var Bo = [];
function St(e) {
  Bo.forEach((n) => document.documentElement.style.removeProperty(n)), Bo.length = 0;
  var r = Vs(e ?? {});
  Object.entries(r).forEach((n) => {
    var [a, t] = n;
    document.documentElement.style.setProperty(a, t), Bo.push(a);
  });
}
St.Component = Ta;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
St.install = function(e) {
  e.component(Ta.name, Ta);
};
var Uk = Ta, jw = {
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
  n: Ww,
  classes: Gw
} = re("switch");
function qw(e, r) {
  var n = oe("var-loading"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return $e((p(), k(
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
      ), $e((p(), k(
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
          [e.loading ? (p(), be(
            n,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : _("v-if", !0)],
          6
          /* CLASS, STYLE */
        ), J(
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
    ), J(
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
var wv = ee({
  name: "VarSwitch",
  components: {
    VarLoading: Nr,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  directives: {
    Ripple: We,
    Hover: Ur
  },
  props: jw,
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
    } = Pn(), u = () => o(e.rules, e.modelValue), d = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = A(() => {
      var {
        size: w,
        modelValue: O,
        color: C,
        closeColor: $,
        loadingColor: E,
        activeValue: T
      } = e;
      return {
        handle: {
          width: or(w),
          height: or(w),
          backgroundColor: O === T ? C : $,
          color: E
        },
        ripple: {
          left: O === T ? or(w, 0.5) : "-" + or(w, 0.5),
          color: O === T ? C : $ || "#999",
          width: or(w, 2),
          height: or(w, 2)
        },
        track: {
          height: or(w, 0.72),
          width: or(w, 1.9),
          borderRadius: or(w, 2 / 3),
          filter: O === T || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === T ? C : $
        },
        switch: {
          height: or(w, 1.2),
          width: or(w, 2)
        }
      };
    }), f = A(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return or(w, 0.4);
    }), m = (w) => {
      var {
        onClick: O,
        onChange: C,
        disabled: $,
        loading: E,
        readonly: T,
        modelValue: B,
        activeValue: h,
        inactiveValue: P,
        "onUpdate:modelValue": W
      } = e;
      if (S(O, w), !($ || E || T || n != null && n.disabled.value || n != null && n.readonly.value)) {
        var L = B === h ? P : h;
        S(C, L), S(W, L), d();
      }
    }, g = (w) => {
      e.disabled || n != null && n.disabled.value || s(w);
    }, b = () => {
      S(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: b,
      validate: u,
      resetValidation: l
    };
    return S(r, y), {
      n: Ww,
      classes: Gw,
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
wv.render = qw;
const Pa = wv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Fk = Pa, Xw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, Cv = Symbol("TABS_BIND_TAB_KEY");
function Kw() {
  var {
    childProviders: e,
    bindChildren: r,
    length: n
  } = dr(Cv);
  return {
    length: n,
    tabList: e,
    bindTabList: r
  };
}
function Zw() {
  var {
    parentProvider: e,
    bindParent: r,
    index: n
  } = ur(Cv);
  return r || Pr("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: n,
    tabs: e,
    bindTabs: r
  };
}
var {
  n: Ut,
  classes: Jw
} = re("tab");
function Qw(e, r) {
  var n = Ie("ripple");
  return $e((p(), k(
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
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[n, {
    disabled: e.disabled
  }]]);
}
var Sv = ee({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Xw,
  setup(e) {
    var r = V(null), n = A(() => e.name), a = A(() => e.disabled), t = A(() => r.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = Zw(), {
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
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : y() ? d.value : v.value, O = () => e.disabled ? Ut("$-tab--disabled") : y() ? Ut("$-tab--active") : Ut("$-tab--inactive"), C = ($) => {
      var {
        disabled: E,
        name: T,
        onClick: B
      } = e;
      E || (S(B, T ?? o.value, $), s(b));
    };
    return ie(() => e.name, g), ie(() => e.disabled, g), {
      n: Ut,
      classes: Jw,
      tabEl: r,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: O,
      handleClick: C
    };
  }
});
Sv.render = Qw;
const Oa = Sv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Hk = Oa, _w = {
  name: {
    type: [String, Number]
  }
}, {
  n: xw,
  classes: eC
} = re("tab-item");
function rC(e, r) {
  var n = oe("var-swipe-item");
  return p(), be(
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
var kv = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Kr
  },
  props: _w,
  setup(e) {
    var r = V(!1), n = A(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Ab(), {
      bindLists: o
    } = zb(), l = (s) => {
      r.value = s;
    }, i = {
      index: a,
      name: n,
      current: A(() => r.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: xw,
      classes: eC,
      current: r
    };
  }
});
kv.render = rC;
const Va = kv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Yk = Va, nC = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: aC,
  classes: tC
} = re("table");
function oC(e, r) {
  return p(), k(
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
    ), e.$slots.footer ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [Y(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var $v = ee({
  name: "VarTable",
  props: nC,
  setup() {
    return {
      toSizeUnit: ye,
      n: aC,
      classes: tC,
      formatElevation: hr
    };
  }
});
$v.render = oC;
const Ma = $v;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var jk = Ma;
function ds(e) {
  return ["horizontal", "vertical"].includes(e);
}
function iC(e) {
  return ["auto", "always"].includes(e);
}
function lC(e) {
  return ["normal", "reverse"].includes(e);
}
var sC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: ds
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ds
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
    validator: iC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: lC
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Je(Gt, "cssMode"),
  stickyZIndex: Je(Gt, "zIndex"),
  offsetTop: Je(Gt, "offsetTop"),
  onClick: F(),
  onChange: F(),
  "onUpdate:active": F()
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
  n: uC,
  classes: dC
} = re("tabs");
function vC(e, r) {
  return p(), be(
    nt(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [N(
        "div",
        Be({
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
    },
    8,
    ["css-mode", "offset-top", "z-index"]
  );
}
var Tv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Zr
  },
  inheritAttrs: !1,
  props: sC,
  setup(e) {
    var r = V("0px"), n = V("0px"), a = V("0px"), t = V("0px"), o = V(!1), l = V(null), i = A(() => e.active), s = A(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = A(() => e.activeColor), d = A(() => e.inactiveColor), v = A(() => e.disabledColor), f = A(() => e.itemDirection), m = V(null), {
      tabList: g,
      bindTabList: b,
      length: y
    } = Kw(), w = (L) => {
      var Z, K = (Z = L.name.value) != null ? Z : L.index.value, {
        active: U,
        onChange: M,
        onClick: I
      } = e;
      S(e["onUpdate:active"], K), S(I, K), K !== U && S(M, K);
    }, O = () => g.find((L) => {
      var {
        name: Z
      } = L;
      return e.active === Z.value;
    }), C = (L) => g.find((Z) => {
      var {
        index: K
      } = Z;
      return (L ?? e.active) === K.value;
    }), $ = () => {
      if (y.value !== 0) {
        var {
          active: L
        } = e;
        if (lr(L)) {
          var Z = oo(L, 0, y.value - 1);
          return S(e["onUpdate:active"], Z), C(Z);
        }
      }
    }, E = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, T = (L) => {
      var {
        element: Z
      } = L, K = Z.value;
      K && (e.layoutDirection === "horizontal" ? (r.value = K.offsetWidth + "px", a.value = K.offsetLeft + "px") : (n.value = K.offsetHeight + "px", t.value = K.offsetTop + "px"));
    }, B = (L) => {
      var {
        element: Z
      } = L;
      if (o.value) {
        var K = l.value, U = Z.value;
        if (e.layoutDirection === "horizontal") {
          var M = U.offsetLeft + U.offsetWidth / 2 - K.offsetWidth / 2;
          ht(K, {
            left: M,
            animation: Do
          });
        } else {
          var I = U.offsetTop + U.offsetHeight / 2 - K.offsetHeight / 2;
          ht(K, {
            top: I,
            animation: Do
          });
        }
      }
    }, h = () => {
      var L = O() || C() || $();
      !L || L.disabled.value || (E(), T(L), B(L));
    }, P = /* @__PURE__ */ function() {
      var L = fs(function* () {
        e.sticky && m.value && (yield m.value.resize());
      });
      return function() {
        return L.apply(this, arguments);
      };
    }(), W = {
      active: i,
      activeColor: u,
      inactiveColor: d,
      disabledColor: v,
      itemDirection: f,
      resize: h,
      onTabClick: w
    };
    return b(W), ie(() => y.value, /* @__PURE__ */ fs(function* () {
      yield Lr(), h();
    })), ie(() => e.active, h), ie(() => e.scrollable, h), Mn(h), Rr(() => window, "resize", h), {
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
      n: uC,
      classes: dC,
      resize: h,
      resizeSticky: P,
      formatElevation: hr
    };
  }
});
Tv.render = vC;
const Ea = Tv;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var Wk = Ea, fC = {
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
function cs(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function cC(e) {
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
  n: mC
} = re("tabs-items");
function pC(e, r) {
  var n = oe("var-swipe");
  return p(), be(
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
var Pv = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: Xr
  },
  props: fC,
  setup(e) {
    var r = V(null), {
      tabItemList: n,
      bindTabItem: a,
      length: t
    } = Db(), o = (v) => n.find((f) => {
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
      S(e["onUpdate:active"], g);
    }, d = () => r.value;
    return a({}), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ cC(function* () {
      yield Lr(), s(e.active);
    })), {
      swipe: r,
      n: mC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Pv.render = pC;
const Ba = Pv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var Gk = Ba;
const hC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, gC = {
  "--badge-default-color": "#555"
}, yC = {
  "--button-default-color": "#303030"
}, bC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, wC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, CC = {
  "--checkbox-unchecked-color": "#fff"
}, SC = {
  "--chip-default-color": "#555"
}, kC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, $C = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, TC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, PC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, OC = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, VC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, MC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-title-text-color": "#fff",
  "--picker-option-text-color": "#fff",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, EC = {
  "--popup-content-background-color": "#1e1e1e"
}, BC = {
  "--pull-refresh-background": "#303030"
}, IC = {
  "--radio-unchecked-color": "#fff"
}, NC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, DC = {
  "--select-scroller-background": "#303030"
}, AC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, zC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, LC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, RC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, UC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, FC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, HC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, YC = {
  "--tabs-background": "#1e1e1e"
}, jC = {
  "--app-bar-color": "#272727"
}, WC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, GC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, qC = {
  "--menu-background-color": "#272727"
}, XC = {
  "--breadcrumb-inactive-color": "#aaa"
}, KC = {
  "--paper-background": "#303030"
}, ZC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const JC = ki({
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
}, yC, wC, bC, FC, $C, AC, YC, RC, EC, TC, hC, SC, gC, HC, kC, BC, LC, zC, VC, UC, OC, DC, IC, CC, PC, MC, jC, WC, GC, qC, NC, XC, KC, ZC);
var QC = {
  dark: JC
}, qk = null;
const $i = QC;
var Cr = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], ir = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ms = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function _C(e) {
  return ["ampm", "24hr"].includes(e);
}
var xC = {
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
    validator: _C
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
}, Ov = (e, r) => e === "24hr" || r === "am", Qi = (e, r, n) => {
  var a = Cr.findIndex((o) => R(o) === R(n)), t = Ov(e, r) ? n : ir[a];
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
}, Vv = (e) => {
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
  } = Qi(t, o, l), f = !1, m = !1;
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
      minute: C
    } = cr(i), {
      hour: $,
      minute: E
    } = cr(s);
    f = $ === v && a < E || O === v && a > C;
  }
  return (r = e.allowedTime) != null && r.minutes && (m = (n = e.allowedTime) == null ? void 0 : n.minutes(a)), f || m;
}, Mv = (e) => {
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
  } = Qi(t, o, l), m = !1, g = !1;
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
      minute: C,
      second: $
    } = cr(u);
    m = O === f && C > i || C === i && a > $;
  }
  if (s && u) {
    var {
      hour: E,
      minute: T,
      second: B
    } = cr(s), {
      hour: h,
      minute: P,
      second: W
    } = cr(u);
    m = E === f && T < i || h === f && P > i || E === f && T === i && a > B || h === f && P === i && a < W;
  }
  return (r = e.allowedTime) != null && r.seconds && (g = (n = e.allowedTime) == null ? void 0 : n.seconds(a)), m || g;
}, {
  n: eS,
  classes: rS
} = re("time-picker");
function nS(e, r) {
  return p(), k(
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
    ), (p(!0), k(
      Ve,
      null,
      Ue(e.timeScales, (n, a) => (p(), k(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
          key: n,
          style: q(e.getStyle(a, n, !1))
        },
        ae(n),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), k(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), k(
        Ve,
        null,
        Ue(e.hours24, (n, a) => (p(), k(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(n), e.n("clock-item--disable")])),
            key: n,
            style: q(e.getStyle(a, n, !0))
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ev = ee({
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
    } = r, a = V(null), t = V([]), o = V([]), l = A(() => ({
      transform: "rotate(" + R(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = A(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = A(() => e.type === "hour" ? Cr : ms), u = (y, w) => {
      var O;
      y = (O = y) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var C = e.type === "minute" ? Vv : Mv, $ = {
        time: R(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: R(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty($, "minute"), C($);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var y = e.isInner ? ir[i.value] : s.value[i.value];
      return s.value === ms ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, w) => w ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Ov(e.format, e.ampm))
          return t.value.includes(y);
        var w = Cr.findIndex((O) => O === y);
        return o.value.includes(w);
      }
      return u(y, !0);
    }, m = (y, w, O) => {
      var C = 2 * Math.PI / 12 * y - Math.PI / 2, $ = 50 * (1 + Math.cos(C)), E = 50 * (1 + Math.sin(C)), T = () => v(y, O) ? f(w) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: B,
        color: h
      } = T();
      return {
        left: $ + "%",
        top: E + "%",
        backgroundColor: B,
        color: h
      };
    }, g = () => {
      var {
        width: y,
        height: w
      } = xe(a.value);
      return {
        width: y,
        height: w
      };
    }, b = () => {
      if (i.value !== void 0) {
        var y = e.ampm === "am" ? Cr : ir;
        return Da(y[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (y, w) => {
      var [O, C] = y, [$, E] = w, T = O === $ && C === E;
      if (!(T || e.type !== "hour" || i.value === void 0)) {
        var B = C ? ir[i.value] : b(), h = e.useSeconds ? ":" + e.time.second : "", P = B + ":" + e.time.minute + h;
        e.preventNextUpdate || n("update", P), n("change-prevent-update");
      }
    }), ie(() => e.rad, (y, w) => {
      if (!(e.type === "hour" || y === void 0 || w === void 0)) {
        var O = y / 6 >= 0 ? y / 6 : y / 6 + 60, C = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (O !== C) {
          var $, {
            hourStr: E
          } = Qi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var T = se().minute(O).format("mm"), B = e.useSeconds ? ":" + e.time.second : "";
            $ = E + ":" + T + B;
          }
          if (e.type === "second") {
            var h = se().second(O).format("ss"), P = e.useSeconds ? ":" + h : "";
            $ = E + ":" + e.time.minute + P;
          }
          n("update", $);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [w, O, C] = y;
      if (t.value = [], w && !O) {
        var {
          hour: $
        } = cr(w), E = Cr.filter((D) => R(D) > $), T = ir.filter((D) => R(D) > $);
        t.value = [...E, ...T];
      }
      if (!w && O) {
        var {
          hour: B
        } = cr(O), h = Cr.filter((D) => R(D) < B), P = ir.filter((D) => R(D) < B);
        t.value = [...h, ...P];
      }
      if (w && O) {
        var {
          hour: W
        } = cr(w), {
          hour: L
        } = cr(O), Z = Cr.filter((D) => R(D) < L || R(D) > W), K = ir.filter((D) => R(D) < L || R(D) > W);
        t.value = [...Z, ...K];
      }
      if (C != null && C.hours) {
        var {
          hours: U
        } = C, M = Cr.filter((D) => !U(R(D))), I = ir.filter((D) => !U(R(D)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...M, ...I])];
      }
      o.value = t.value.map((D) => ir.findIndex((x) => D === x)).filter((D) => D >= 0);
    }, {
      immediate: !0
    }), {
      n: eS,
      classes: rS,
      hours24: ir,
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
Ev.render = nS;
const aS = Ev;
var {
  n: tS,
  classes: oS
} = re("time-picker"), iS = (e) => (Ra(""), e = e(), Ua(), e), lS = /* @__PURE__ */ iS(() => /* @__PURE__ */ N(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), sS = {
  key: 0
};
function uS(e, r) {
  var n = oe("clock");
  return p(), k(
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
            onClick: r[0] || (r[0] = (a) => e.checkPanel("hour"))
          },
          ae(e.time.hour),
          3
          /* TEXT, CLASS */
        ), lS, N(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: r[1] || (r[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), k("span", sS, ":")) : _("v-if", !0), e.useSeconds ? (p(), k(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: r[2] || (r[2] = (a) => e.checkPanel("second"))
          },
          ae(e.time.second),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), k(
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
      )) : _("v-if", !0)],
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
        [J(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), be(
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
var Bv = ee({
  name: "VarTimePicker",
  components: {
    Clock: aS
  },
  props: xC,
  setup(e) {
    var r = V(null), n = V(null), a = V(null), t = V(!1), o = V(!1), l = V(!1), i = V(!1), s = V(!1), u = V(void 0), d = V(0), v = V(0), f = V("hour"), m = V("am"), g = V(!1), b = V(!1), y = V({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ae({
      x: 0,
      y: 0
    }), O = Ae({
      x: [],
      y: []
    }), C = A(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), $ = (j) => {
      S(e["onUpdate:modelValue"], j), S(e.onChange, j);
    }, E = (j) => j * 57.29577951308232, T = (j) => {
      i.value = !1, b.value = !1, f.value = j;
    }, B = (j) => {
      var {
        disableHour: z
      } = a.value, G = Cr.findIndex((ue) => R(ue) === R(y.value.hour)), Q = j === "am" ? Cr : ir, ne = [...Q.slice(G), ...Q.slice(0, G)];
      return ne.find((ue, ge) => (o.value = ge !== 0, !z.includes(ue)));
    }, h = (j) => {
      if (!e.readonly) {
        m.value = j;
        var z = B(j);
        if (z) {
          var G = e.useSeconds ? ":" + y.value.second : "", Q = Da(z, 2, "0") + ":" + y.value.minute + G;
          $(Q);
        }
      }
    }, P = (j, z) => {
      var G = j >= O.x[0] && j <= O.x[1], Q = z >= O.y[0] && z <= O.y[1];
      return G && Q;
    }, W = (j) => {
      var z = e.format === "24hr" ? "HH" : "hh", {
        hour: G,
        minute: Q,
        second: ne
      } = cr(j);
      return {
        hour: se().hour(G).format(z),
        minute: se().minute(Q).format("mm"),
        second: se().second(ne).format("ss")
      };
    }, L = (j) => {
      var z = j / 30;
      return z >= 0 ? z : z + 12;
    }, Z = () => {
      var {
        width: j,
        height: z
      } = a.value.getSize(), G = w.x - j / 2 - 8, Q = w.x + j / 2 + 8, ne = w.y - z / 2 - 8, ue = w.y + z / 2 + 8;
      return {
        rangeXMin: G,
        rangeXMax: Q,
        rangeYMin: ne,
        rangeYMax: ue
      };
    }, K = (j, z, G) => {
      var {
        disableHour: Q
      } = a.value;
      l.value = P(j, z);
      var ne = Math.round(G / 30) * 30 + 90, ue = L(ne), ge = t.value ? Cr[ue] : ir[ue];
      if (Q.includes(ge) || (t.value = e.format === "24hr" ? P(j, z) : !1), t.value === l.value) {
        var Ce = t.value || m.value === "pm" ? ir[ue] : Cr[ue];
        g.value = Q.includes(Ce), !g.value && (u.value = ne, i.value = !0);
      }
    }, U = (j) => {
      var {
        disableHour: z
      } = a.value, G = Math.round(j / 6) * 6 + 90, Q = G / 6 >= 0 ? G / 6 : G / 6 + 60, ne = {
        time: Q,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: z,
        allowedTime: e.allowedTime
      };
      b.value = Vv(ne), !b.value && (d.value = G, s.value = !0);
    }, M = (j) => {
      var {
        disableHour: z
      } = a.value, G = Math.round(j / 6) * 6 + 90, Q = G / 6 >= 0 ? G / 6 : G / 6 + 60, ne = {
        time: Q,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: R(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: z,
        allowedTime: e.allowedTime
      };
      Mv(ne) || (v.value = G);
    }, I = () => {
      var {
        left: j,
        top: z,
        width: G,
        height: Q
      } = xe(r.value);
      if (w.x = j + G / 2, w.y = z + Q / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ne,
          rangeXMax: ue,
          rangeYMin: ge,
          rangeYMax: Ce
        } = Z();
        O.x = [ne, ue], O.y = [ge, Ce];
      }
    }, D = (j) => {
      if (j.preventDefault(), !e.readonly) {
        I();
        var {
          clientX: z,
          clientY: G
        } = j.touches[0], Q = z - w.x, ne = G - w.y, ue = Math.round(E(Math.atan2(ne, Q)));
        f.value === "hour" ? K(z, G, ue) : f.value === "minute" ? U(ue) : M(ue);
      }
    }, x = () => {
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
    return ie(() => e.modelValue, (j) => {
      if (j) {
        var {
          hour: z,
          minute: G,
          second: Q
        } = cr(j), ne = se().hour(z).format("hh"), ue = se().hour(z).format("HH"), ge = se().minute(G).format("mm"), Ce = se().second(Q).format("ss");
        u.value = (ne === "12" ? 0 : R(ne)) * 30, d.value = R(ge) * 6, v.value = R(Ce) * 6, y.value = W(j), e.format !== "24hr" && (m.value = Da("" + z, 2, "0") === ue && ir.includes(ue) ? "pm" : "am"), t.value = e.format === "24hr" && ir.includes(ue);
      }
    }, {
      immediate: !0
    }), {
      n: tS,
      classes: oS,
      getRad: C,
      time: y,
      container: r,
      inner: a,
      picker: n,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: D,
      checkPanel: T,
      checkAmpm: h,
      end: x,
      update: $,
      changePreventUpdate: H,
      formatElevation: hr
    };
  }
});
Bv.render = uS;
const Ia = Bv;
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
var Xk = Ia, dS = {
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
function ps(e, r, n, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    n(u);
    return;
  }
  i.done ? r(s) : Promise.resolve(s).then(a, t);
}
function Io(e) {
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
  n: vS,
  classes: fS
} = re("uploader"), cS = 0, mS = ["onClick"], pS = ["onClick"], hS = ["src", "alt"], gS = ["multiple", "accept", "capture", "disabled"], yS = ["src"];
function bS(e, r) {
  var n = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = oe("var-popup"), l = Ie("ripple"), i = Ie("hover");
  return p(), k(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [N(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), k(
        Ve,
        null,
        Ue(e.files, (s) => $e((p(), k(
          "div",
          {
            class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
            key: s.id,
            onClick: (u) => e.preview(s)
          },
          [N(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ae(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), k(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Tr((u) => e.handleRemove(s), ["stop"])
            },
            [J(
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
            pS
          )) : _("v-if", !0), s.cover ? (p(), k(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: q({
                objectFit: s.fit
              }),
              src: s.cover,
              alt: s.name
            },
            null,
            14,
            hS
          )) : _("v-if", !0), N(
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
          )],
          10,
          mS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? $e((p(), k(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: r[1] || (r[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [N(
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
          gS
        ), Y(e.$slots, "default", {}, () => [J(
          n,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), J(
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
      }], [i, e.handleHovering, "desktop"]]) : _("v-if", !0)],
      2
      /* CLASS */
    ), J(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), J(
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
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), k(
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
            yS
          )) : _("v-if", !0)];
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
var Iv = ee({
  name: "VarUploader",
  directives: {
    Ripple: We,
    Hover: Ur
  },
  components: {
    VarIcon: Oe,
    VarPopup: Sr,
    VarFormDetails: _e,
    VarHoverOverlay: mr
  },
  props: dS,
  setup(e) {
    var r = V(null), n = V(!1), a = V(null), t = A(() => {
      var {
        maxlength: D,
        modelValue: {
          length: x
        }
      } = e;
      return lr(D) ? x + " / " + D : "";
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
    } = Pn(), m = A(() => {
      var {
        modelValue: D,
        hideList: x
      } = e;
      return x ? [] : D;
    }), g = (D) => {
      var {
        disabled: x,
        readonly: H,
        previewed: j
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || x || H || !j)) {
        var {
          url: z
        } = D;
        if (Fe(z) && nl(z)) {
          zr(z);
          return;
        }
        Fe(z) && al(z) && (a.value = D, n.value = !0);
      }
    }, b = (D) => ({
      id: cS++,
      url: "",
      cover: "",
      name: D.name,
      file: D,
      progress: 0
    }), y = (D) => {
      var x = D.target, {
        files: H
      } = x;
      return Array.from(H);
    }, w = (D) => new Promise((x) => {
      if (!D.file.type.startsWith("image")) {
        x(D);
        return;
      }
      var H = new FileReader();
      H.onload = () => {
        var j = H.result;
        D.cover = j, D.url = j, x(D);
      }, H.readAsDataURL(D.file);
    }), O = (D) => D.map(w), C = (D) => {
      var {
        onBeforeRead: x
      } = e;
      return D.map((H) => new Promise((j) => {
        x || j({
          valid: !0,
          varFile: H
        });
        var z = Ft(S(x, Ae(H)));
        Promise.all(z).then((G) => {
          j({
            valid: G.every(Boolean),
            varFile: H
          });
        });
      }));
    }, $ = /* @__PURE__ */ function() {
      var D = Io(function* (x) {
        var {
          maxsize: H,
          maxlength: j,
          modelValue: z,
          onOversize: G,
          onAfterRead: Q,
          onBeforeFilter: ne,
          readonly: ue,
          disabled: ge
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || ge || ue)) {
          var Ce = (He) => He.filter((Ye) => Ye.file.size > R(H) ? (S(G, Ae(Ye)), !1) : !0), ar = (He) => {
            var Ye = Math.min(He.length, R(j) - z.length);
            return He.slice(0, Ye);
          }, te = /* @__PURE__ */ function() {
            var He = Io(function* (Ye) {
              if (!ne)
                return Ye;
              var le = Ft(ne);
              for (var we of le)
                Ye = yield we(Ye);
              return Ye;
            });
            return function(le) {
              return He.apply(this, arguments);
            };
          }(), de = y(x), ce = de.map(b);
          ce = yield te(ce), ce = H != null ? Ce(ce) : ce, ce = j != null ? ar(ce) : ce;
          var De = yield Promise.all(O(ce)), Ke = yield Promise.all(C(De)), Ge = Ke.filter((He) => {
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
          S(e["onUpdate:modelValue"], [...z, ...Ge]), x.target.value = "", Ge.forEach((He) => S(Q, Ae(He)));
        }
      });
      return function(H) {
        return D.apply(this, arguments);
      };
    }(), E = /* @__PURE__ */ function() {
      var D = Io(function* (x) {
        var {
          disabled: H,
          readonly: j,
          modelValue: z,
          onBeforeRemove: G,
          onRemove: Q
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || j)) {
          if (G) {
            var ne = Ft(S(G, Ae(x)));
            if ((yield Promise.all(ne)).some((ge) => !ge))
              return;
          }
          var ue = z.filter((ge) => ge !== x);
          S(Q, Ae(x)), Z("onRemove"), S(e["onUpdate:modelValue"], ue);
        }
      });
      return function(H) {
        return D.apply(this, arguments);
      };
    }(), T = () => e.modelValue.filter((D) => D.state === "success"), B = () => e.modelValue.filter((D) => D.state === "error"), h = () => e.modelValue.filter((D) => D.state === "loading"), P = () => {
      r.value.click();
    }, W = () => {
      a.value = null, n.value = !1, zr.close();
    }, L = {
      getSuccess: T,
      getError: B,
      getLoading: h
    }, Z = (D) => {
      Ne(() => {
        var {
          validateTrigger: x,
          rules: H,
          modelValue: j
        } = e;
        s(x, D, H, j, L);
      });
    }, K = !1, U = () => u(e.rules, e.modelValue, L), M = () => {
      K = !0, S(e["onUpdate:modelValue"], []), d();
    }, I = {
      validate: U,
      resetValidation: d,
      reset: M
    };
    return S(l, I), ie(() => e.modelValue, () => {
      !K && Z("onChange"), K = !1;
    }, {
      deep: !0
    }), {
      n: vS,
      classes: fS,
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
      handleHovering: f,
      isHTMLSupportVideo: al,
      isHTMLSupportImage: nl,
      preview: g,
      handleChange: $,
      handleRemove: E,
      getSuccess: T,
      getError: B,
      getLoading: h,
      validate: U,
      resetValidation: d,
      reset: M,
      chooseFile: P,
      closePreview: W,
      toSizeUnit: ye
    };
  }
});
Iv.render = bS;
const Na = Iv;
Na.install = function(e) {
  e.component(Na.name, Na);
};
var Kk = Na;
const wS = "2.11.3";
function CS(e) {
  Qr.install && e.use(Qr), An.install && e.use(An), zn.install && e.use(zn), Ln.install && e.use(Ln), Rn.install && e.use(Rn), mn.install && e.use(mn), Un.install && e.use(Un), Fn.install && e.use(Fn), Hn.install && e.use(Hn), Yn.install && e.use(Yn), rr.install && e.use(rr), jn.install && e.use(jn), Wn.install && e.use(Wn), pn.install && e.use(pn), hn.install && e.use(hn), Gn.install && e.use(Gn), gn.install && e.use(gn), qn.install && e.use(qn), Xn.install && e.use(Xn), Kn.install && e.use(Kn), yr.install && e.use(yr), Zn.install && e.use(Zn), Jn.install && e.use(Jn), _n.install && e.use(_n), _r.install && e.use(_r), xn.install && e.use(xn), ea.install && e.use(ea), ra.install && e.use(ra), qr.install && e.use(qr), _e.install && e.use(_e), Ur.install && e.use(Ur), mr.install && e.use(mr), Oe.install && e.use(Oe), na.install && e.use(na), zr.install && e.use(zr), aa.install && e.use(aa), ta.install && e.use(ta), Sn.install && e.use(Sn), gt.install && e.use(gt), oa.install && e.use(oa), ia.install && e.use(ia), Nr.install && e.use(Nr), gi.install && e.use(gi), Ho.install && e.use(Ho), Jr.install && e.use(Jr), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), La.install && e.use(La), Sr.install && e.use(Sr), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), We.install && e.use(We), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), Si.install && e.use(Si), Sa.install && e.use(Sa), ka.install && e.use(ka), $a.install && e.use($a), Zr.install && e.use(Zr), St.install && e.use(St), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Va.install && e.use(Va), Ma.install && e.use(Ma), Ea.install && e.use(Ea), Ba.install && e.use(Ba), $i.install && e.use($i), Ia.install && e.use(Ia), wn.install && e.use(wn), Na.install && e.use(Na);
}
const Zk = {
  version: wS,
  install: CS,
  ActionSheet: Qr,
  AppBar: An,
  Avatar: zn,
  AvatarGroup: Ln,
  BackTop: Rn,
  Badge: mn,
  BottomNavigation: Un,
  BottomNavigationItem: Fn,
  Breadcrumb: Hn,
  Breadcrumbs: Yn,
  Button: rr,
  ButtonGroup: jn,
  Card: Wn,
  Cell: pn,
  Checkbox: hn,
  CheckboxGroup: Gn,
  Chip: gn,
  Col: qn,
  Collapse: Xn,
  CollapseItem: Kn,
  Context: yr,
  Countdown: Zn,
  Counter: Jn,
  DatePicker: _n,
  Dialog: _r,
  Divider: xn,
  Ellipsis: ea,
  Fab: ra,
  Form: qr,
  FormDetails: _e,
  Hover: Ur,
  HoverOverlay: mr,
  Icon: Oe,
  Image: na,
  ImagePreview: zr,
  IndexAnchor: aa,
  IndexBar: ta,
  Input: Sn,
  Lazy: gt,
  Link: oa,
  List: ia,
  Loading: Nr,
  LoadingBar: gi,
  Locale: Ho,
  Menu: Jr,
  Option: la,
  Overlay: sa,
  Pagination: ua,
  Paper: da,
  Picker: La,
  Popup: Sr,
  Progress: va,
  PullRefresh: fa,
  Radio: ca,
  RadioGroup: ma,
  Rate: pa,
  Result: ha,
  Ripple: We,
  Row: ga,
  Select: ya,
  Skeleton: ba,
  Slider: wa,
  Snackbar: Si,
  Space: Sa,
  Step: ka,
  Steps: $a,
  Sticky: Zr,
  StyleProvider: St,
  Swipe: Xr,
  SwipeItem: Kr,
  Switch: Pa,
  Tab: Oa,
  TabItem: Va,
  Table: Ma,
  Tabs: Ea,
  TabsItems: Ba,
  Themes: $i,
  TimePicker: Ia,
  Tooltip: wn,
  Uploader: Na
};
export {
  Qr as ActionSheet,
  An as AppBar,
  zn as Avatar,
  Ln as AvatarGroup,
  Rn as BackTop,
  mn as Badge,
  Un as BottomNavigation,
  Fn as BottomNavigationItem,
  Hn as Breadcrumb,
  Yn as Breadcrumbs,
  rr as Button,
  jn as ButtonGroup,
  Wn as Card,
  pn as Cell,
  hn as Checkbox,
  Gn as CheckboxGroup,
  gn as Chip,
  qn as Col,
  Xn as Collapse,
  Kn as CollapseItem,
  yr as Context,
  Zn as Countdown,
  Jn as Counter,
  _n as DatePicker,
  _r as Dialog,
  xn as Divider,
  ea as Ellipsis,
  ra as Fab,
  qr as Form,
  _e as FormDetails,
  Ur as Hover,
  mr as HoverOverlay,
  Oe as Icon,
  na as Image,
  zr as ImagePreview,
  aa as IndexAnchor,
  ta as IndexBar,
  Sn as Input,
  gt as Lazy,
  oa as Link,
  ia as List,
  Nr as Loading,
  gi as LoadingBar,
  Ho as Locale,
  Jr as Menu,
  la as Option,
  sa as Overlay,
  Wo as PIXEL,
  ua as Pagination,
  da as Paper,
  La as Picker,
  Sr as Popup,
  va as Progress,
  fa as PullRefresh,
  ca as Radio,
  ma as RadioGroup,
  pa as Rate,
  ha as Result,
  We as Ripple,
  ga as Row,
  Zi as SNACKBAR_TYPE,
  ya as Select,
  ba as Skeleton,
  wa as Slider,
  Si as Snackbar,
  Sa as Space,
  ka as Step,
  $a as Steps,
  Zr as Sticky,
  St as StyleProvider,
  Xr as Swipe,
  Kr as SwipeItem,
  Pa as Switch,
  Oa as Tab,
  Va as TabItem,
  Ma as Table,
  Ea as Tabs,
  Ba as TabsItems,
  $i as Themes,
  Ia as TimePicker,
  wn as Tooltip,
  Na as Uploader,
  VS as _ActionSheetComponent,
  MS as _AppBarComponent,
  BS as _AvatarComponent,
  IS as _AvatarGroupComponent,
  LS as _BackTopComponent,
  RS as _BadgeComponent,
  US as _BottomNavigationComponent,
  FS as _BottomNavigationItemComponent,
  HS as _BreadcrumbComponent,
  YS as _BreadcrumbsComponent,
  zS as _ButtonComponent,
  jS as _ButtonGroupComponent,
  WS as _CardComponent,
  GS as _CellComponent,
  XS as _CheckboxComponent,
  KS as _CheckboxGroupComponent,
  ZS as _ChipComponent,
  JS as _ColComponent,
  QS as _CollapseComponent,
  _S as _CollapseItemComponent,
  kS as _ContextComponent,
  xS as _CountdownComponent,
  ek as _CounterComponent,
  rk as _DatePickerComponent,
  nk as _DialogComponent,
  ak as _DividerComponent,
  ok as _EllipsisComponent,
  ik as _FabComponent,
  lk as _FormComponent,
  qS as _FormDetailsComponent,
  AS as _HoverComponent,
  DS as _HoverOverlayComponent,
  PS as _IconComponent,
  sk as _ImageComponent,
  vk as _ImagePreviewComponent,
  ck as _IndexAnchorComponent,
  mk as _IndexBarComponent,
  pk as _InputComponent,
  ES as _LazyComponent,
  hk as _LinkComponent,
  gk as _ListComponent,
  yk as _LoadingBarComponent,
  NS as _LoadingComponent,
  OS as _LocaleComponent,
  bk as _MenuComponent,
  wk as _OptionComponent,
  Ck as _OverlayComponent,
  Sk as _PaginationComponent,
  kk as _PaperComponent,
  $k as _PickerComponent,
  TS as _PopupComponent,
  Tk as _ProgressComponent,
  Pk as _PullRefreshComponent,
  Ok as _RadioComponent,
  Vk as _RadioGroupComponent,
  Mk as _RateComponent,
  Ek as _ResultComponent,
  $S as _RippleComponent,
  Bk as _RowComponent,
  Ik as _SelectComponent,
  Nk as _SkeletonComponent,
  Dk as _SliderComponent,
  Ak as _SnackbarComponent,
  zk as _SpaceComponent,
  Lk as _StepComponent,
  Rk as _StepsComponent,
  fk as _StickyComponent,
  Uk as _StyleProviderComponent,
  uk as _SwipeComponent,
  dk as _SwipeItemComponent,
  Fk as _SwitchComponent,
  Hk as _TabComponent,
  Yk as _TabItemComponent,
  jk as _TableComponent,
  Wk as _TabsComponent,
  Gk as _TabsItemsComponent,
  qk as _ThemesComponent,
  Xk as _TimePickerComponent,
  tk as _TooltipComponent,
  Kk as _UploaderComponent,
  kf as actionSheetProps,
  Bi as add,
  Ef as appBarProps,
  rc as avatarGroupProps,
  Zf as avatarProps,
  Ic as backTopProps,
  Rc as badgeProps,
  Kc as bottomNavigationItemProps,
  Yc as bottomNavigationProps,
  em as breadcrumbProps,
  im as breadcrumbsProps,
  Tc as buttonProps,
  gm as cardProps,
  km as cellProps,
  Fm as checkboxGroupProps,
  Im as checkboxProps,
  qm as chipProps,
  _m as colProps,
  sp as collapseItemProps,
  tp as collapseProps,
  fp as countdownProps,
  sh as counterProps,
  Mh as datePickerProps,
  Zk as default,
  qe as defaultLazyOptions,
  qh as dialogProps,
  Qh as dividerProps,
  Us as enUS,
  Om as formDetailsProps,
  $y as formProps,
  Ls as iconProps,
  Ws as imageCache,
  qy as imagePreviewProps,
  My as imageProps,
  ob as indexAnchorProps,
  ub as indexBarProps,
  wb as inputProps,
  CS as install,
  Mb as linkProps,
  Nb as listProps,
  Yb as loadingBarProps,
  dn as loadingProps,
  xb as menuProps,
  Hs as merge,
  o0 as optionProps,
  u0 as overlayProps,
  Ze as pack,
  Fs as packs,
  v0 as paginationProps,
  h0 as paperProps,
  w0 as pickerProps,
  Vt as popupProps,
  E0 as progressProps,
  L0 as pullRefreshProps,
  X0 as radioGroupProps,
  F0 as radioProps,
  Q0 as rateProps,
  r1 as resultProps,
  H1 as rowProps,
  q1 as selectProps,
  Q1 as skeletonProps,
  nw as sliderProps,
  dv as snackbarProps,
  Pw as spaceProps,
  Mw as stepProps,
  Lw as stepsProps,
  Gt as stickyProps,
  Fw as styleProviderProps,
  bd as swipeProps,
  jw as switchProps,
  _w as tabItemProps,
  Xw as tabProps,
  nC as tableProps,
  fC as tabsItemsProps,
  sC as tabsProps,
  xC as timePickerProps,
  uy as tooltipProps,
  dS as uploaderProps,
  Ii as use,
  Pn as useHoverOverlay,
  Ei as useLocale,
  wS as version,
  Mi as zhCN
};
