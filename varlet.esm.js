import { reactive as Ae, onMounted as ao, nextTick as Ne, onActivated as Mr, isRef as Nv, watch as ie, onBeforeUnmount as kt, onDeactivated as er, unref as ut, inject as Dv, getCurrentInstance as nt, computed as L, provide as Av, isVNode as $t, Comment as zv, Fragment as Ve, ref as M, createApp as Lv, h as ps, onBeforeMount as Rv, onUnmounted as rt, defineComponent as Q, createVNode as Z, Teleport as Ra, Transition as Le, withDirectives as ke, vShow as $r, mergeProps as Be, openBlock as p, createBlock as ye, resolveDynamicComponent as at, normalizeClass as c, normalizeStyle as G, resolveComponent as ae, resolveDirective as Ie, withCtx as ve, createElementVNode as z, renderSlot as Y, toDisplayString as ne, createElementBlock as P, renderList as Ue, createCommentVNode as x, onUpdated as Tt, createTextVNode as Ce, pushScopeId as Ua, popScopeId as Fa, withModifiers as Pn, normalizeProps as Pt, guardReactiveProps as to, vModelText as Uv, toRefs as Fv, withKeys as Qi, toRaw as _i, TransitionGroup as Hv } from "vue";
var hs = {
  locks: {},
  zIndex: 2e3,
  enableRipple: !0
}, wS = Ae(hs);
const bn = Ae(hs), Fe = (e) => typeof e == "string", Bo = (e) => typeof e == "boolean", on = (e) => typeof e == "number", ki = (e) => Object.prototype.toString.call(e) === "[object Object]", Yv = (e) => typeof e == "object" && e !== null, Ot = (e) => typeof e == "function", Te = (e) => Array.isArray(e), jv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, fr = (e) => e == null || e === "" || Array.isArray(e) && !e.length, $i = (e) => e === window, U = (e) => e == null ? 0 : Fe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Bo(e) ? Number(e) : e, qt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Ti = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, tt = () => typeof window < "u", xi = (e) => [...new Set(e)], gs = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Wv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Gv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
}, Ft = (e) => Te(e) ? e : [e];
var el = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), nl = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), qv = (e) => {
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
}, Io = (e) => e, rl = (e) => Math.pow(e, 3), ys = (e) => e < 0.5 ? rl(e * 2) / 2 : 1 - rl((1 - e) * 2) / 2, oo = (e, n) => e ?? n, bs = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Na = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function On(e, n) {
  throw Error("Varlet [" + e + "]: " + n);
}
function al(e, n) {
  console.warn("Varlet [" + e + "]: " + n);
}
function No() {
  return No = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, No.apply(this, arguments);
}
function Da(e) {
  return window.getComputedStyle(e);
}
function pn(e) {
  if ($i(e)) {
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
    return No({}, a, {
      toJSON: () => a
    });
  }
  return e.getBoundingClientRect();
}
function Xv(e) {
  var {
    left: n
  } = pn(e);
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function tl(e) {
  var {
    top: n
  } = pn(e);
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function pt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Pi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Kv(e) {
  var {
    top: n,
    bottom: r,
    left: a,
    right: t
  } = pn(e), {
    width: o,
    height: l
  } = pn(window), i = a <= o && t >= 0, s = n <= l && r >= 0;
  return i && s;
}
function ko(e) {
  var {
    transform: n
  } = Da(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Tr(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = Da(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function Zv(e) {
  for (var n = [], r = e; !$i(r); )
    r = Tr(r), n.push(r);
  return n;
}
function ws(e, n) {
  if (Fe(e)) {
    var r = document.querySelector(e);
    return r || On(n, "target element cannot found"), r;
  }
  if (Yv(e))
    return e;
  On(n, 'type of prop "target" should be a selector or an element object');
}
function ol() {
  var {
    width: e,
    height: n
  } = pn(window);
  return e > n ? {
    vMin: n,
    vMax: e
  } : {
    vMin: e,
    vMax: n
  };
}
var Cs = (e) => Fe(e) && e.endsWith("rem"), Jv = (e) => Fe(e) && e.endsWith("em") && !e.endsWith("rem"), Qv = (e) => Fe(e) && e.endsWith("px") || on(e), _v = (e) => Fe(e) && e.endsWith("%"), Ss = (e) => Fe(e) && e.endsWith("vw"), ks = (e) => Fe(e) && e.endsWith("vh"), $s = (e) => Fe(e) && e.endsWith("vmin"), Ts = (e) => Fe(e) && e.endsWith("vmax"), xv = (e) => Fe(e) && e.startsWith("calc("), ef = (e) => Fe(e) && e.startsWith("var("), je = (e) => {
  if (on(e))
    return e;
  if (Qv(e))
    return +e.replace("px", "");
  if (!tt())
    return 0;
  var {
    width: n,
    height: r
  } = pn(window);
  if (Ss(e))
    return +e.replace("vw", "") * n / 100;
  if (ks(e))
    return +e.replace("vh", "") * r / 100;
  if (Cs(e)) {
    var a = +e.replace("rem", ""), t = Da(document.documentElement).fontSize;
    return a * parseFloat(t);
  }
  return $s(e) ? ol().vMin : Ts(e) ? ol().vMax : Fe(e) ? U(e) : 0;
}, ge = (e) => {
  if (e != null)
    return _v(e) || Ss(e) || ks(e) || Jv(e) || Cs(e) || xv(e) || ef(e) || $s(e) || Ts(e) ? e : je(e) + "px";
}, an = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ge(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function wn(e) {
  var n = bs();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function il(e) {
  var n = bs();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function io(e) {
  wn(() => {
    wn(e);
  });
}
function Rn() {
  return new Promise((e) => {
    wn(() => {
      wn(e);
    });
  });
}
function nf() {
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
  } = n, l = Date.now(), i = pt(e), s = Pi(e);
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
function Ps(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Wv(a);
    return n[o] = t, n;
  }, {});
}
function rf() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Xt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ln(e) {
  let n = !1;
  ao(() => {
    e(), Ne(() => {
      n = !0;
    });
  }), Mr(() => {
    n && e();
  });
}
function Un(e, n, r, a = {}) {
  if (!tt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (m) => Ot(m) ? m() : ut(m), u = (m) => {
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
  Nv(e) && (v = ie(() => e.value, (m, g) => {
    d(g), u(m);
  }));
  const f = () => {
    v == null || v(), d(e), i = !0;
  };
  return ln(() => {
    u(e);
  }), kt(() => {
    d(e);
  }), er(() => {
    d(e);
  }), f;
}
function Os(e, n, r) {
  if (!tt())
    return;
  Un(document, n, (t) => {
    const o = ut(e);
    o && !o.contains(t.target) && r(t);
  });
}
var af = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function tf(e) {
  const n = nt();
  return e in n.provides;
}
function sn(e) {
  if (!tf(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = Dv(e), { childInstances: r, collect: a, clear: t } = n, o = af(n, ["childInstances", "collect", "clear"]), l = nt();
  return {
    index: L(() => r.indexOf(l)),
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
function of(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      $t(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function un(e) {
  const n = nt(), r = Ae([]), a = [], t = L(() => r.length), o = () => {
    const u = of(n.subTree);
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
      Av(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function sl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ll(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ll(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Do.apply(this, arguments);
}
function Je(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function lf(e) {
  var n = Lv(e), r = document.createElement("div");
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
      return () => ps(e, Do({}, n, r));
    }
  }, {
    unmount: t
  } = lf(a);
  return {
    unmountInstance: t
  };
}
function Vs(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== zv) {
      if (r.type === Ve && Te(r.children)) {
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
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = sl(function* (o, l, i) {
      if (!Te(o) || !o.length)
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
    var t = sl(function* (o, l, i, s, u) {
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
function sf(e) {
  Un(() => window, "hashchange", e), Un(() => window, "popstate", e);
}
function lo() {
  var e = M(!1);
  return Mr(() => {
    e.value = !1;
  }), er(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function _(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (Te(s)) {
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
function k(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Te(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function F(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function gn(e, n) {
  return e === !1 ? null : (e === !0 && n && (e = n), "var-elevation--" + e);
}
function Ms(e, n, r) {
  r === void 0 && (r = {});
  var {
    passive: a = !0,
    eventName: t,
    defaultValue: o,
    emit: l
  } = r, i = t ?? "onUpdate:" + n.toString(), s = () => e[n] != null ? e[n] : o;
  if (!a)
    return L({
      get() {
        return s();
      },
      set(d) {
        l ? l(i, d) : k(e[i], d);
      }
    });
  var u = M(s());
  return ie(() => e[n], () => {
    u.value = s();
  }), ie(() => u.value, (d) => {
    l ? l(i, d) : k(e[i], d);
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
  n: Es
} = _("ripple"), ul = 250;
function uf(e) {
  var {
    zIndex: n,
    position: r
  } = Da(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function df(e, n) {
  var {
    top: r,
    left: a
  } = pn(e), {
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
function Bs(e) {
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
      } = df(this, e), s = document.createElement("div");
      s.classList.add(Es()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), uf(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function Ao() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Es());
    if (r.length) {
      var a = r[r.length - 1], t = ul - performance.now() + Number(a.dataset.createdAt);
      window.setTimeout(() => {
        a.style.opacity = "0", window.setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, ul);
      }, t);
    }
  };
  e.tasker ? window.setTimeout(n, 30) : n();
}
function Is() {
  if (!(!rf() || !bn.enableRipple)) {
    var e = this._ripple;
    e.tasker && window.clearTimeout(e.tasker), e.tasker = null;
  }
}
function vf(e, n) {
  var r;
  e._ripple = Kt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    removeRipple: Ao.bind(e)
  }), e.addEventListener("touchstart", Bs, {
    passive: !0
  }), e.addEventListener("touchmove", Is, {
    passive: !0
  }), e.addEventListener("dragstart", Ao, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function ff(e) {
  e.removeEventListener("touchstart", Bs), e.removeEventListener("touchmove", Is), e.removeEventListener("dragstart", Ao), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function cf(e, n) {
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
var Ns = {
  mounted: vf,
  unmounted: ff,
  updated: cf,
  install(e) {
    e.directive("ripple", this);
  }
}, CS = Ns;
const We = Ns;
function mf(e) {
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
    validator: mf
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
function Ds() {
  var e = Object.keys(bn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Bt(e) {
  bn.locks[e] = 1, Ds();
}
function It(e) {
  delete bn.locks[e], Ds();
}
function so(e, n) {
  var {
    uid: r
  } = nt();
  n && ie(n, (a) => {
    a === !1 ? It(r) : a === !0 && e() === !0 && Bt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? Bt(r) : It(r));
  }), Rv(() => {
    n && n() === !1 || e() === !0 && Bt(r);
  }), rt(() => {
    n && n() === !1 || e() === !0 && It(r);
  }), Mr(() => {
    n && n() === !1 || e() === !0 && Bt(r);
  }), er(() => {
    n && n() === !1 || e() === !0 && It(r);
  });
}
function Mt(e, n) {
  var r = M(bn.zIndex);
  return ie(e, (a) => {
    a && (bn.zIndex += n, r.value = bn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function zo() {
  return zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, zo.apply(this, arguments);
}
function pf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: Bn,
  classes: $o
} = _("popup");
const kn = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Vt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Mt(() => e.show, 3), {
      disabled: o
    } = lo(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    so(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), sf(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Z("div", {
        class: $o(Bn("overlay"), d),
        style: zo({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => Z("div", Be({
      class: $o(Bn("content"), Bn("--" + e.position), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")], [e.safeArea, Bn("--safe-area")], [e.safeAreaTop, Bn("--safe-area-top")]),
      style: {
        zIndex: t.value
      }
    }, a), [k(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: g,
        position: h
      } = e;
      return Z(Le, {
        name: Bn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(Z("div", {
          class: $o(Bn("$--box"), Bn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), Z(Le, {
          name: g || Bn("$-pop-" + h)
        }, {
          default: () => [f && s()]
        })]), [[$r, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return Z(Ra, {
          to: d,
          disabled: o.value
        }, pf(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
kn.install = function(e) {
  e.component(kn.name, kn);
};
var SS = kn, As = {
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
function dl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function hf(e) {
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
var {
  n: gf,
  classes: yf
} = _("icon");
function bf(e, n) {
  return p(), ye(
    at(e.isURL(e.name) ? "img" : "i"),
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
var zs = Q({
  name: "VarIcon",
  props: As,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = hf(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || U(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ne(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, U(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
      immediate: !0
    }), {
      n: gf,
      classes: yf,
      nextName: n,
      animateInProgress: r,
      isURL: jv,
      toNumber: U,
      toSizeUnit: ge
    };
  }
});
zs.render = bf;
const Pe = zs;
Pe.install = function(e) {
  e.component(Pe.name, Pe);
};
var kS = Pe;
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
var wf = Lo({
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
const Oi = {
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
}, Ls = {
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
function Vi() {
  var e = {}, n = M({}), r = (o, l) => {
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
    e[o] = Ro({}, e[o], l), a(o);
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
  packs: Rs,
  pack: Ze,
  add: Mi,
  use: Ei,
  merge: Us
} = Vi();
Mi("zh-CN", Oi);
Ei("zh-CN");
var $S = {
  zhCN: Oi,
  enUS: Ls,
  packs: Rs,
  pack: Ze,
  add: Mi,
  use: Ei,
  merge: Us,
  useLocale: Vi
};
const Uo = {
  zhCN: Oi,
  enUS: Ls,
  packs: Rs,
  pack: Ze,
  add: Mi,
  use: Ei,
  merge: Us,
  useLocale: Vi
};
var {
  n: Cf,
  classes: Sf
} = _("action-sheet"), kf = ["onClick"];
function $f(e, n) {
  var r = ae("var-icon"), a = ae("var-popup"), t = Ie("ripple");
  return p(), ye(
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
      default: ve(() => [z(
        "div",
        Be({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [Y(e.$slots, "title", {}, () => [z(
          "div",
          {
            class: c(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), Y(e.$slots, "actions", {}, () => [(p(!0), P(
          Ve,
          null,
          Ue(e.actions, (o) => ke((p(), P(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), ye(
              r,
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
            )) : x("v-if", !0), z(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ne(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            kf
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
var Fs = Q({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: kn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: wf,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        k(l, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Cf,
      classes: Sf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ze,
      dt: oo,
      handleSelect: r
    };
  }
});
Fs.render = $f;
const cr = Fs;
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
var ir, Bi = {};
function Tf(e) {
  return e === void 0 && (e = {}), Fo({}, Bi, e);
}
function Qn(e) {
  return tt() ? new Promise((n) => {
    Qn.close();
    var r = Ae(Tf(e));
    r.teleport = "body", ir = r;
    var {
      unmountInstance: a
    } = ot(cr, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), a(), ir === r && (ir = null);
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
Qn.setDefaultOptions = function(e) {
  Bi = e;
};
Qn.resetDefaultOptions = function() {
  Bi = {};
};
Qn.close = function() {
  if (ir != null) {
    var e = ir;
    ir = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
Qn.Component = cr;
cr.install = function(e) {
  e.component(cr.name, cr);
};
Qn.install = function(e) {
  e.component(cr.name, cr);
};
var TS = cr;
function Pf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Of = {
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
    validator: Pf
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
  n: Vf,
  classes: Mf
} = _("app-bar");
function Ef(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.safeAreaTop, e.n("--safe-area-top")], [e.round, e.n("--round")], e.formatElevation(e.elevation, 3))),
      style: G(e.rootStyles)
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
        [Y(e.$slots, "left"), e.titlePosition === "left" ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [Y(e.$slots, "default", {}, () => [Ce(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [Y(e.$slots, "default", {}, () => [Ce(
          ne(e.title),
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
        [e.titlePosition === "right" ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingRight: e.paddingRight
            })
          },
          [Y(e.$slots, "default", {}, () => [Ce(
            ne(e.title),
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
var Hs = Q({
  name: "VarAppBar",
  props: Of,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
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
    return ln(o), Tt(o), {
      n: Vf,
      classes: Mf,
      formatElevation: gn,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Hs.render = Ef;
const Dr = Hs;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var PS = Dr;
function vl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function uo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
var Bf = "background-image", If = "lazy-loading", Nf = "lazy-error", fl = "lazy-attempt", Df = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Yo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Za = [], Zt = [], Ys = qv(100), qe = {
  loading: Yo,
  error: Yo,
  attempt: 3,
  throttleWait: 300,
  events: Df
}, Ii = Ti(Et, qe.throttleWait);
function vo(e, n) {
  e._lazy.arg === Bf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Af(e) {
  e._lazy.loading && vo(e, e._lazy.loading), Et();
}
function zf(e) {
  e._lazy.error && vo(e, e._lazy.error), e._lazy.state = "error", Di(e), Et();
}
function js(e, n) {
  vo(e, n), e._lazy.state = "success", Di(e), Et();
}
function Lf(e) {
  var n;
  Zt.includes(e) || (Zt.push(e), (n = qe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ii, {
      passive: !0
    });
  }));
}
function Rf() {
  Zt.forEach((e) => {
    var n;
    (n = qe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ii);
    });
  }), Zt.length = 0;
}
function Uf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(If)) != null ? r : qe.loading,
    error: (a = e.getAttribute(Nf)) != null ? a : qe.error,
    attempt: e.getAttribute(fl) ? Number(e.getAttribute(fl)) : qe.attempt
  };
  e._lazy = Ho({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), vo(e, Yo), k(qe.filter, e._lazy);
}
function Ff(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Ys.add(n), js(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? zf(e) : Ws(e);
  });
}
function Ws(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Ys.has(n)) {
      js(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Af(e), Ff(e, n);
  }
}
function Ni(e) {
  return jo.apply(this, arguments);
}
function jo() {
  return jo = uo(function* (e) {
    yield Rn(), Kv(e) && Ws(e);
  }), jo.apply(this, arguments);
}
function Et() {
  Za.forEach((e) => Ni(e));
}
function Hf(e) {
  return Wo.apply(this, arguments);
}
function Wo() {
  return Wo = uo(function* (e) {
    !Za.includes(e) && Za.push(e), Zv(e).forEach(Lf), yield Ni(e);
  }), Wo.apply(this, arguments);
}
function Di(e) {
  qt(Za, e), Za.length === 0 && Rf();
}
function Yf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Gs(e, n) {
  return Go.apply(this, arguments);
}
function Go() {
  return Go = uo(function* (e, n) {
    Uf(e, n), yield Hf(e);
  }), Go.apply(this, arguments);
}
function jf(e, n) {
  return qo.apply(this, arguments);
}
function qo() {
  return qo = uo(function* (e, n) {
    if (!Yf(e, n)) {
      Za.includes(e) && (yield Ni(e));
      return;
    }
    yield Gs(e, n);
  }), qo.apply(this, arguments);
}
function Wf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  qe.events = n ?? qe.events, qe.loading = r ?? qe.loading, qe.error = a ?? qe.error, qe.attempt = t ?? qe.attempt, qe.throttleWait = o ?? qe.throttleWait, qe.filter = l;
}
var qs = {
  mounted: Gs,
  unmounted: Di,
  updated: jf,
  install(e, n) {
    Wf(n), Ii = Ti(Et, qe.throttleWait), e.directive("lazy", this);
  }
}, OS = qs;
const gt = qs;
function Gf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Xs = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ks(e) {
  return Xs(e) || on(e) || Fe(e);
}
var qf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ks,
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
    validator: Gf,
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
  n: Xf,
  classes: Kf
} = _("avatar"), Zf = ["src", "lazy-loading", "lazy-error"], Jf = ["src"];
function Qf(e, n) {
  var r = Ie("lazy");
  return p(), P(
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
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), P(
      Ve,
      {
        key: 0
      },
      [e.lazy ? ke((p(), P(
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
          onLoad: n[0] || (n[0] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          })
        },
        null,
        46,
        Zf
      )), [[r, e.src]]) : (p(), P(
        "img",
        {
          key: 1,
          class: c(e.n("image")),
          src: e.src,
          style: G({
            objectFit: e.fit
          }),
          onLoad: n[1] || (n[1] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          }),
          onError: n[2] || (n[2] = function() {
            return e.handleError && e.handleError(...arguments);
          })
        },
        null,
        46,
        Jf
      ))],
      64
      /* STABLE_FRAGMENT */
    )) : (p(), P(
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
var Zs = Q({
  name: "VarAvatar",
  directives: {
    Lazy: gt
  },
  props: qf,
  setup(e) {
    var n = M(null), r = M(null), a = M(1), t = () => {
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
      d ? (u._lazy.state === "success" && k(v, s), u._lazy.state === "error" && k(f, s)) : k(v, s);
    }, l = (s) => {
      k(e.onError, s);
    }, i = (s) => {
      k(e.onClick, s);
    };
    return ln(t), Tt(t), {
      internalSizeValidator: Xs,
      sizeValidator: Ks,
      toSizeUnit: ge,
      n: Xf,
      classes: Kf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Zs.render = Qf;
const Ar = Zs;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var VS = Ar, _f = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: xf,
  classes: ec
} = _("avatar-group");
function nc(e, n) {
  return p(), P(
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
var Js = Q({
  name: "VarAvatarGroup",
  props: _f,
  setup(e) {
    var n = L(() => e.offset == null ? {} : {
      "--avatar-group-offset": ge(e.offset)
    });
    return {
      n: xf,
      classes: ec,
      toSizeUnit: ge,
      rootStyles: n
    };
  }
});
Js.render = nc;
const zr = Js;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var MS = zr;
function rc(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function ac(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ur = {
  type: {
    type: String,
    default: "circle",
    validator: rc
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: ac
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
  n: tc,
  classes: oc
} = _("loading"), ic = (e) => (Ua(""), e = e(), Fa(), e), lc = /* @__PURE__ */ ic(() => /* @__PURE__ */ z(
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
)), sc = [lc];
function uc(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [Y(e.$slots, "default"), e.loading ? (p(), P(
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
    )) : x("v-if", !0), e.isShow ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [z(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: G({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          sc,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (p(!0), P(
        Ve,
        null,
        Ue(e.loadingTypeDict, (r, a) => (p(), P(
          Ve,
          {
            key: a
          },
          [e.type === a ? (p(), P(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), P(
              Ve,
              null,
              Ue(r, (t) => (p(), P(
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
      )), e.$slots.description || e.description ? (p(), P(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: G({
            color: e.color
          })
        },
        [Y(e.$slots, "description", {}, () => [Ce(
          ne(e.description),
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
var Qs = Q({
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
    }, t = L(() => k(r.default) ? e.loading : !0);
    return {
      n: tc,
      classes: oc,
      multiplySizeUnit: an,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Qs.render = uc;
const Dn = Qs;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
var ES = Dn, dc = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: vc,
  classes: fc
} = _("hover-overlay");
function cc(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var _s = Q({
  name: "VarHoverOverlay",
  props: dc,
  setup() {
    return {
      n: vc,
      classes: fc
    };
  }
});
_s.render = cc;
const mn = _s;
mn.install = function(e) {
  e.component(mn.name, mn);
};
function Pr() {
  var e = M(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var BS = mn;
function xs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function mc(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[gs(t)] = o, r;
  }, {}) : {};
}
function pc(e) {
  var {
    value: n
  } = e._hover, r = mc(e);
  Object.keys(n).forEach((a) => {
    var t = gs(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Ai(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function hc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function eu(e) {
  hc(e), Ai(e, e._hover.rawStyle);
}
function nu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, Ot(e)) {
    e(this._hover.hovering);
    return;
  }
  Ai(this, e);
}
function ru() {
  if (this._hover.hovering = !1, Ot(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  eu(this);
}
function au(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  xs(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, pc(e), e.addEventListener("mouseenter", nu), e.addEventListener("mouseleave", ru));
}
function tu(e, n) {
  xs(n.arg) || (eu(e), e.removeEventListener("mouseenter", nu), e.removeEventListener("mouseleave", ru));
}
function gc(e, n) {
  e._hover && tu(e, n);
}
function yc(e, n) {
  return !Ot(n.value) && e._hover.hovering;
}
function bc(e, n) {
  au(e, n), yc(e, n) && Ai(e, n.value);
}
var ou = {
  mounted: au,
  unmounted: tu,
  beforeUpdate: gc,
  updated: bc,
  install(e) {
    e.directive("hover", this);
  }
}, IS = ou;
const Fn = ou;
function Xo() {
  return Xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Xo.apply(this, arguments);
}
function iu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Cc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Sc = {
  type: {
    type: String,
    validator: iu
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Cc
  },
  size: {
    type: String,
    validator: wc
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
  loadingType: Je(ur, "type"),
  loadingSize: Je(ur, "size"),
  loadingColor: Xo({}, Je(ur, "color"), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, lu = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function kc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(lu);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function $c() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(lu);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Tc,
  classes: Pc
} = _("button"), Oc = ["type", "disabled"];
function Vc(e, n) {
  var r = ae("var-loading"), a = ae("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return ke((p(), P(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.states.elevation], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: G({
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
    },
    [e.loading || e.pending ? (p(), ye(
      r,
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
    )) : x("v-if", !0), z(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
      a,
      {
        hovering: e.hovering
      },
      null,
      8,
      ["hovering"]
    )],
    46,
    Oc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var su = Q({
  name: "VarButton",
  components: {
    VarLoading: Dn,
    VarHoverOverlay: mn
  },
  directives: {
    Ripple: We,
    Hover: Fn
  },
  props: Sc,
  setup(e) {
    var n = M(!1), {
      buttonGroup: r
    } = $c(), {
      hovering: a,
      handleHovering: t
    } = Pr(), o = L(() => {
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
      e.autoLoading && (n.value = !0, u = Te(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || n.value || l(k(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || l(k(f, u));
    };
    return {
      n: Tc,
      classes: Pc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
su.render = Vc;
const en = su;
en.install = function(e) {
  e.component(en.name, en);
};
var NS = en, Mc = {
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
  n: Ec,
  classes: Bc
} = _("back-top");
function Ic(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return p(), ye(
    Ra,
    {
      to: "body",
      disabled: e.disabled
    },
    [z(
      "div",
      Be({
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
      [Y(e.$slots, "default", {}, () => [Z(
        a,
        {
          elevation: e.elevation,
          type: "primary",
          round: "",
          "var-back-top-cover": ""
        },
        {
          default: ve(() => [Z(r, {
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
var uu = Q({
  name: "VarBackTop",
  components: {
    VarButton: en,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Mc,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (d) => {
      k(e.onClick, d);
      var v = Pi(t);
      ht(t, {
        left: v,
        duration: e.duration,
        animation: ys
      });
    }, l = Ti(() => {
      n.value = pt(t) >= je(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ws(e.target, "BackTop") : Tr(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return ao(() => {
      i(), s(), a.value = !1;
    }), Mr(s), kt(u), er(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ge,
      n: Ec,
      classes: Bc,
      handleClick: o
    };
  }
});
uu.render = Ic;
const Lr = uu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var DS = Lr;
function Nc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Dc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Ac = {
  type: {
    type: String,
    default: "default",
    validator: Nc
  },
  position: {
    type: String,
    default: "right-top",
    validator: Dc
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
  n: zc,
  classes: Lc
} = _("badge");
function Rc(e, n) {
  var r = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "default"), Z(
      Le,
      {
        name: e.n("$-badge-fade"),
        persisted: ""
      },
      {
        default: ve(() => [ke(z(
          "span",
          Be({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (p(), ye(
            r,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-badge-cover": "",
              name: e.icon
            },
            null,
            8,
            ["class", "name"]
          )) : x("v-if", !0), Y(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), P(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ne(e.value),
            3
            /* TEXT, CLASS */
          )) : x("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[$r, !e.hidden]])]),
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
var du = Q({
  name: "VarBadge",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: Ac,
  setup(e) {
    var n = L(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && U(r) > U(a) ? a + "+" : r;
    });
    return {
      n: zc,
      classes: Lc,
      value: n
    };
  }
});
du.render = Rc;
const mr = du;
mr.install = function(e) {
  e.component(mr.name, mr);
};
var AS = mr, Uc = {
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
}, vu = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Fc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(vu);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
  };
}
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
var {
  n: Hc,
  classes: Yc
} = _("bottom-navigation"), {
  n: fo
} = _("bottom-navigation-item"), cl = fo("--right-half-space"), ml = fo("--left-half-space"), pl = fo("--right-space"), jc = {
  type: "primary"
};
function Wc(e, n) {
  var r = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [Y(e.$slots, "default"), e.$slots.fab ? (p(), ye(
      r,
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
var fu = Q({
  name: "VarBottomNavigation",
  components: {
    VarButton: en
  },
  props: Uc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = L(() => e.active), o = L(() => e.activeColor), l = L(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Fc(), v = () => {
      s.value === 0 || f() || m() || g();
    }, f = () => u.find((b) => {
      var {
        name: V
      } = b;
      return t.value === V.value;
    }), m = () => u.find((b) => {
      var {
        index: V
      } = b;
      return t.value === V.value;
    }), g = () => {
      on(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, h = (b) => {
      t.value !== b && (e.onBeforeChange ? y(b) : w(b));
    }, y = (b) => {
      var V = Ft(k(e.onBeforeChange, b));
      Promise.all(V).then((j) => {
        j.every(Boolean) && w(b);
      });
    }, w = (b) => {
      k(e["onUpdate:active"], b), k(e.onChange, b);
    }, O = () => {
      var b = I();
      b.forEach((V) => {
        V.classList.remove(cl, ml, pl);
      });
    }, S = (b) => {
      var V = I(), j = V.length, R = b % 2 === 0;
      V.forEach((K, X) => {
        $(R, K, X, j);
      });
    }, $ = (b, V, j, R) => {
      var K = j === R - 1;
      if (!b && K) {
        V.classList.add(pl);
        return;
      }
      var X = j === R / 2 - 1, te = j === R / 2;
      X ? V.classList.add(cl) : te && V.classList.add(ml);
    }, I = () => Array.from(a.value.querySelectorAll("." + fo())), T = () => {
      k(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: h
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (b) => {
      i.value = Ko({}, jc, b);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && S(s.value);
    }), Tt(() => {
      O(), r.fab && S(s.value);
    }), {
      n: Hc,
      classes: Yc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: T,
      fabProps: i
    };
  }
});
fu.render = Wc;
const Rr = fu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var zS = Rr, Gc = {
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
function qc() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(vu);
  return r || On("BottomNavigationItem", "<var-bottom-navigation-item/> must in <var-bottom-navigation/>"), {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: Xc,
  classes: Kc
} = _("bottom-navigation-item"), Zc = {
  type: "danger",
  dot: !0
};
function Jc(e, n) {
  var r = ae("var-icon"), a = ae("var-badge"), t = Ie("ripple");
  return ke((p(), P(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: G({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), ye(
      r,
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
    }), e.badge ? (p(), ye(
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
    )) : x("v-if", !0), z(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (p(), P(
        Ve,
        {
          key: 0
        },
        [Ce(
          ne(e.label),
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
var cu = Q({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: mr,
    VarIcon: Pe
  },
  directives: {
    Ripple: We
  },
  props: Gc,
  setup(e) {
    var n = L(() => e.name), r = L(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = qc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, g = (m = n.value) != null ? m : t.value;
      k(e.onClick, g), k(o.onToggle, g);
    };
    return l(d), ie(() => r.value, (m) => {
      a.value = m === !0 ? Zc : r.value;
    }, {
      immediate: !0
    }), {
      n: Xc,
      classes: Kc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
cu.render = Jc;
const Ur = cu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var LS = Ur, Qc = {
  separator: {
    type: String
  },
  onClick: F()
}, mu = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function _c() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(mu);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function xc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(mu);
  return n || On("Breadcrumb", "<var-breadcrumb/> must in <var-breadcrumbs/>"), {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: em,
  classes: nm
} = _("breadcrumb");
function rm(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
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
      return [z(
        "div",
        {
          class: c(e.n("separator"))
        },
        ne((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var pu = Q({
  name: "VarBreadcrumb",
  props: Qc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = xc(), t = L(() => n.value === r.length.value - 1), o = L(() => r.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: em,
      classes: nm,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
pu.render = rm;
const Fr = pu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var RS = Fr, am = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: tm
} = _("breadcrumbs");
function om(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var hu = Q({
  name: "VarBreadcrumbs",
  props: am,
  setup(e) {
    var n = L(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = _c(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: tm
    };
  }
});
hu.render = om;
const Hr = hu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var US = Hr;
function im(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function lm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function sm(e) {
  return ["normal", "text", "outline"].includes(e);
}
var um = {
  type: {
    type: String,
    default: "default",
    validator: im
  },
  size: {
    type: String,
    default: "normal",
    validator: lm
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
    validator: sm
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
  n: dm,
  classes: vm
} = _("button-group");
function fm(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.formatElevation(e.elevation, 2)]))
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var gu = Q({
  name: "VarButtonGroup",
  props: um,
  setup(e) {
    var {
      bindButtons: n
    } = kc(), r = {
      elevation: L(() => e.elevation),
      type: L(() => e.type),
      size: L(() => e.size),
      color: L(() => e.color),
      textColor: L(() => e.textColor),
      mode: L(() => e.mode)
    };
    return n(r), {
      n: dm,
      classes: vm,
      formatElevation: gn
    };
  }
});
gu.render = fm;
const Yr = gu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var FS = Yr;
function cm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var mm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: cm,
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
function hl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function gl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: pm,
  classes: hm
} = _("card"), gm = 500, ym = ["src", "alt"];
function bm(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = Ie("ripple");
  return ke((p(), P(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], e.formatElevation(e.elevation, 1))),
      style: G({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
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
      [Y(e.$slots, "image", {}, () => [e.src ? (p(), P(
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
        ym
      )) : x("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("container"))
        },
        [Y(e.$slots, "title", {}, () => [e.title ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [Y(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), P(
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
      ), e.showFloatingButtons ? (p(), P(
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
        [Y(e.$slots, "close-button", {}, () => [Z(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Pn(e.close, ["stop"])
          },
          {
            default: ve(() => [Z(
              r,
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
    ), z(
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
var yu = Q({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: Pe,
    VarButton: en
  },
  props: mm,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = L(() => e.layout === "row"), g = M(!1), h = M(!1), {
      zIndex: y
    } = Mt(() => e.floating, 1);
    so(() => e.floating, () => !m.value);
    var w = "auto", O = "auto", S = null, $ = M(null), I = /* @__PURE__ */ function() {
      var V = gl(function* () {
        clearTimeout($.value), clearTimeout(S), $.value = null, $.value = setTimeout(/* @__PURE__ */ gl(function* () {
          var {
            width: j,
            height: R,
            left: K,
            top: X
          } = pn(n.value);
          a.value = ge(j), t.value = ge(R), o.value = a.value, l.value = t.value, i.value = ge(X), s.value = ge(K), u.value = "fixed", w = i.value, O = s.value, g.value = !0, yield Rn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", h.value = !0;
        }), e.ripple ? gm : 0);
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), T = () => {
      clearTimeout(S), clearTimeout($.value), $.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = O, v.value = "0px", f.value = "0", g.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", O = "auto", d.value = "hidden", u.value = void 0, h.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      k(e["onUpdate:floating"], !1);
    }, b = (V) => {
      k(e.onClick, V);
    };
    return ie(() => e.floating, (V) => {
      m.value || Ne(() => {
        V ? I() : T();
      });
    }, {
      immediate: !0
    }), {
      n: pm,
      classes: hm,
      toSizeUnit: ge,
      card: n,
      cardFloater: r,
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
      close: D,
      showFloatingButtons: g,
      floated: h,
      formatElevation: gn,
      handleClick: b
    };
  }
});
yu.render = bm;
const jr = yu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var HS = jr, wm = {
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
  n: Cm,
  classes: Sm
} = _("cell");
function km(e, n) {
  var r = ae("var-icon"), a = Ie("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "icon", {}, () => [e.icon ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [Z(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0)]), z(
      "div",
      {
        class: c(e.n("content"))
      },
      [Y(e.$slots, "default", {}, () => [e.title ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ne(e.description),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), P(
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
var bu = Q({
  name: "VarCell",
  components: {
    VarIcon: Pe
  },
  directives: {
    Ripple: We
  },
  props: wm,
  setup(e) {
    var n = L(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ge(e.borderOffset),
      "--cell-border-right": ge(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: Cm,
      classes: Sm,
      toSizeUnit: ge,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
bu.render = km;
const pr = bu;
pr.install = function(e) {
  e.component(pr.name, pr);
};
var YS = pr, $m = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Tm
} = _("form-details"), Pm = {
  key: 0
}, Om = {
  key: 0
};
function Vm(e, n) {
  return p(), ye(
    Le,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), P(
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
          [Z(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), P(
                "div",
                Pm,
                ne(e.errorMessage),
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
        ), z(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [Z(
            Le,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (p(), P(
                "div",
                Om,
                ne(e.extraMessage),
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
var wu = Q({
  name: "VarFormDetails",
  props: $m,
  setup: () => ({
    n: Tm
  })
});
wu.render = Vm;
const _e = wu;
_e.install = function(e) {
  e.component(_e.name, _e);
};
var jS = _e, Mm = {
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
}, Cu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function Em() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Cu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Bm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(Cu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Zo.apply(this, arguments);
}
var Su = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Mn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Su), a = nt(), t = r ? (o) => {
    r(Zo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function Im() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(Su);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: Nm,
  classes: Dm
} = _("checkbox");
function Am(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("hover"), l = Ie("ripple");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [ke((p(), P(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [Z(
          r,
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
        }, () => [Z(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]), Z(
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
      }]]), z(
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
    ), Z(
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
var ku = Q({
  name: "VarCheckbox",
  directives: {
    Ripple: We,
    Hover: Fn
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  props: Mm,
  setup(e) {
    var n = M(!1), r = L(() => n.value === e.checkedValue), a = L(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = Bm(), {
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
      resetValidation: g
    } = Vn(), h = (b) => {
      Ne(() => {
        var {
          validateTrigger: V,
          rules: j,
          modelValue: R
        } = e;
        f(V, b, j, R);
      });
    }, y = (b) => {
      n.value = b;
      var {
        checkedValue: V,
        onChange: j
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(j, n.value), h("onChange"), b === V ? o == null || o.onChecked(V) : o == null || o.onUnchecked(V);
    }, w = (b) => {
      var {
        disabled: V,
        readonly: j,
        checkedValue: R,
        uncheckedValue: K,
        onClick: X
      } = e;
      if (!(u != null && u.disabled.value || V) && (k(X, b), !(u != null && u.readonly.value || j))) {
        t.value = !0;
        var te = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && te || y(r.value ? K : R);
      }
    }, O = (b) => {
      var {
        checkedValue: V,
        uncheckedValue: j
      } = e;
      n.value = b.includes(V) ? V : j;
    }, S = () => {
      t.value = !1;
    }, $ = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), g();
    }, I = (b) => {
      var {
        checkedValue: V,
        uncheckedValue: j
      } = e, R = ![V, j].includes(b);
      R && (b = r.value ? j : V), y(b);
    }, T = () => m(e.rules, e.modelValue);
    ie(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var D = {
      checkedValue: a,
      checked: r,
      sync: O,
      validate: T,
      resetValidation: g,
      reset: $,
      resetWithAnimation: S
    };
    return k(l, D), k(d, D), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: Nm,
      classes: Dm,
      handleClick: w,
      toggle: I,
      reset: $,
      validate: T,
      resetValidation: g
    };
  }
});
ku.render = Am;
const hr = ku;
hr.install = function(e) {
  e.component(hr.name, hr);
};
var WS = hr;
function zm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Lm = {
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
    validator: zm
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
  n: Rm,
  classes: Um
} = _("checkbox-group");
function Fm(e, n) {
  var r = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
      r,
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
var $u = Q({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: _e
  },
  props: Lm,
  setup(e) {
    var n = L(() => e.max), r = L(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Em(), {
      bindForm: l
    } = Mn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = Vn(), v = L(() => i.value), f = (D) => {
      Ne(() => {
        var {
          validateTrigger: b,
          rules: V,
          modelValue: j
        } = e;
        s(b, D, V, j);
      });
    }, m = (D) => {
      k(e["onUpdate:modelValue"], D), k(e.onChange, D), f("onChange");
    }, g = (D) => {
      var {
        modelValue: b
      } = e;
      b.includes(D) || m([...b, D]);
    }, h = (D) => {
      var {
        modelValue: b
      } = e;
      b.includes(D) && m(b.filter((V) => V !== D));
    }, y = () => t.forEach((D) => {
      var {
        sync: b
      } = D;
      return b(e.modelValue);
    }), w = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, O = () => {
      var D = t.map((V) => {
        var {
          checkedValue: j
        } = V;
        return j.value;
      }), b = xi(D);
      return w(), k(e["onUpdate:modelValue"], b), b;
    }, S = () => {
      var D = t.filter((V) => {
        var {
          checked: j
        } = V;
        return !j.value;
      }).map((V) => {
        var {
          checkedValue: j
        } = V;
        return j.value;
      }), b = xi(D);
      return w(), k(e["onUpdate:modelValue"], b), b;
    }, $ = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, y, {
      deep: !0
    }), ie(() => a.value, y);
    var T = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: h,
      validate: I,
      resetValidation: d,
      reset: $,
      errorMessage: v
    };
    return o(T), k(l, T), {
      errorMessage: i,
      n: Rm,
      classes: Um,
      checkAll: O,
      inverseAll: S,
      reset: $,
      validate: I,
      resetValidation: d
    };
  }
});
$u.render = Fm;
const Wr = $u;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var GS = Wr;
function Hm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ym(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var jm = {
  type: {
    type: String,
    default: "default",
    validator: Hm
  },
  size: {
    type: String,
    default: "normal",
    validator: Ym
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(As, "name"),
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
  n: nr,
  classes: Wm
} = _("chip");
function Gm(e, n) {
  var r = ae("var-icon");
  return p(), ye(
    Le,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [z(
        "span",
        Be({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [Y(e.$slots, "left"), z(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        ), Y(e.$slots, "right"), e.closable ? (p(), P(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [Z(
            r,
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
var Tu = Q({
  name: "VarChip",
  components: {
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: jm,
  setup(e) {
    var n = L(() => {
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
    }), r = L(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = nr(o ? "$--flex" : "$--inline-flex"), d = i ? nr("plain") + " " + nr("plain-" + l) : nr("--" + l), v = s ? nr("--round") : null;
      return [nr("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: nr,
      classes: Wm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Tu.render = Gm;
const gr = Tu;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var qS = gr;
function qm(e) {
  return ["row", "column"].includes(e);
}
function Xm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Km(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Zm = {
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
    validator: qm
  },
  justify: {
    type: String,
    validator: Xm
  },
  align: {
    type: String,
    validator: Km
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
}, Pu = Symbol("ROW_BIND_COL_KEY");
function Jm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Pu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Qm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Pu);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: Nt,
  classes: _m
} = _("col");
function xm(e, n) {
  return p(), P(
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
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [Y(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ou = Q({
  name: "VarCol",
  props: Zm,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = L(() => U(e.span)), a = L(() => U(e.offset)), {
      row: t,
      bindRow: o
    } = Qm(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (ki(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(Nt("--span-" + u + "-" + m)), f && v.push(Nt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Nt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: Nt,
      classes: _m,
      padding: n,
      toNumber: U,
      toSizeUnit: ge,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Xt
    };
  }
});
Ou.render = xm;
const Gr = Ou;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var XS = Gr, Vu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function ep() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(Vu);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var np = {
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
  n: rp
} = _("collapse");
function ap(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Mu = Q({
  name: "VarCollapse",
  props: np,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = ep(), t = L(() => e.modelValue), o = L(() => e.offset), l = L(() => e.divider), i = L(() => e.elevation), s = () => !e.accordion && !Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Te(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, u = (h, y) => s() ? y ? e.accordion ? h : [...e.modelValue, h] : e.accordion ? null : e.modelValue.filter((w) => w !== h) : null, d = (h, y) => {
      var w = u(h, y);
      k(e["onUpdate:modelValue"], w), k(e.onChange, w);
    }, v = () => {
      if (e.accordion)
        return r.find((y) => {
          var {
            name: w
          } = y;
          return e.modelValue === w.value;
        });
      var h = r.filter((y) => {
        var {
          name: w
        } = y;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return h.length ? h : void 0;
    }, f = () => e.accordion ? r.find((h) => {
      var {
        index: y,
        name: w
      } = h;
      return w.value === void 0 && e.modelValue === y.value;
    }) : r.filter((h) => {
      var {
        index: y,
        name: w
      } = h;
      return w.value === void 0 && e.modelValue.includes(y.value);
    }), m = () => {
      if (s()) {
        var h = v() || f();
        if (e.accordion && !h || !e.accordion && !h.length) {
          r.forEach((y) => {
            y.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((y) => {
          var w = e.accordion ? h === y : h.includes(y);
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
    return a(g), ie(() => n.value, () => Ne().then(m)), ie(() => e.modelValue, () => Ne().then(m)), {
      n: rp,
      divider: l
    };
  }
});
Mu.render = ap;
const qr = Mu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var KS = qr;
function tp() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Vu);
  return r || On("Collapse", "<var-collapse-item/> must in <var-collapse>"), {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var op = {
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
  n: ip,
  classes: lp
} = _("collapse-item");
function sp(e, n) {
  var r = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")])),
      style: G("--collapse-divider-top: " + (e.divider ? "var(--collapse-border-top)" : "none"))
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
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [z(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [Y(e.$slots, "title", {}, () => [Ce(
          ne(e.title),
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
        [Y(e.$slots, "icon", {}, () => [Z(
          r,
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
    ), ke(z(
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
      [z(
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
    ), [[$r, e.showContent]])],
    6
    /* CLASS, STYLE */
  );
}
var Eu = Q({
  name: "VarCollapseItem",
  components: {
    VarIcon: Pe
  },
  props: op,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = tp(), t = !0, o = M(null), l = M(!1), i = M(!1), {
      active: s,
      offset: u,
      divider: d,
      elevation: v,
      updateItem: f
    } = r, m = L(() => e.name), g = (I, T) => {
      s.value === void 0 || I && Te(s.value) || T === i.value || (i.value = T, h(!0));
    }, h = (I) => {
      e.disabled || I || f(e.name || n.value, !i.value);
    }, y = () => {
      o.value && (o.value.style.height = "", l.value = !0, wn(() => {
        var {
          offsetHeight: I
        } = o.value;
        o.value.style.height = "0px", wn(() => {
          o.value.style.height = I + "px", t && io(() => {
            t && S();
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
        o.value.style.height = I + "px", wn(() => {
          o.value.style.height = "0px";
        });
      }
    }, S = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, $ = {
      index: n,
      name: m,
      init: g
    };
    return a($), ie(i, (I) => {
      I ? y() : O();
    }), {
      n: ip,
      start: w,
      classes: lp,
      showContent: l,
      isShow: i,
      offset: u,
      divider: d,
      elevation: v,
      toggle: h,
      contentEl: o,
      transitionend: S,
      formatElevation: gn
    };
  }
});
Eu.render = sp;
const Xr = Eu;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var ZS = Xr, up = {
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
  n: dp
} = _("countdown"), Jo = 1e3, Qo = 60 * Jo, _o = 60 * Qo, yl = 24 * _o;
function vp(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default", Pt(to(e.timeData)), () => [Ce(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Bu = Q({
  name: "VarCountdown",
  props: up,
  setup(e) {
    var n = M(""), r = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (g, h) => {
      var y = Object.values(h), w = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (w.forEach(($, I) => {
        g.includes($) ? g = g.replace($, Na("" + y[I], 2, "0")) : y[I + 1] += y[I] * O[I];
      }), g.includes("S")) {
        var S = Na("" + y[y.length - 1], 3, "0");
        g.includes("SSS") ? g = g.replace("SSS", S) : g.includes("SS") ? g = g.replace("SS", S.slice(0, 2)) : g = g.replace("S", S.slice(0, 1));
      }
      return g;
    }, u = (g) => {
      var h = Math.floor(g / yl), y = Math.floor(g % yl / _o), w = Math.floor(g % _o / Qo), O = Math.floor(g % Qo / Jo), S = Math.floor(g % Jo), $ = {
        days: h,
        hours: y,
        minutes: w,
        seconds: O,
        milliseconds: S
      };
      r.value = $, k(e.onChange, r.value), n.value = s(e.format, $);
    }, d = () => {
      var {
        time: g,
        onEnd: h
      } = e, y = performance.now();
      if (a || (a = y + U(g)), l = a - y, l < 0 && (l = 0), u(l), l === 0) {
        k(h);
        return;
      }
      t && (o = wn(d));
    }, v = function(g) {
      g === void 0 && (g = !1), !(t && !g) && (t = !0, a = performance.now() + (l || U(e.time)), d());
    }, f = () => {
      t = !1, il(o);
    }, m = () => {
      a = 0, t = !1, il(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Mr(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), er(() => {
      i = t, f();
    }), rt(f), {
      showTime: n,
      timeData: r,
      n: dp,
      start: v,
      pause: f,
      reset: m
    };
  }
});
Bu.render = vp;
const Kr = Bu;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var JS = Kr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var ja = 9e15, Er = 1e9, xo = "0123456789abcdef", Jt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Qt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ei = {
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
  minE: -ja,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: ja,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Iu, jn, he = !0, co = "[DecimalError] ", Or = co + "Invalid argument: ", Nu = co + "Precision limit exceeded", Du = co + "crypto unavailable", Au = "[object Decimal]", nn = Math.floor, Xe = Math.pow, fp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, cp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, mp = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, zu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, An = 1e7, ce = 7, pp = 9007199254740991, hp = Jt.length - 1, ni = Qt.length - 1, q = { toStringTag: Au };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), fe(e);
};
q.ceil = function() {
  return fe(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Or + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
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
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = gp(a, Hu(a, r)), a.precision = e, a.rounding = n, fe(jn == 2 || jn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (he = !1, o = d.s * Xe(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = xe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Xe(r, 1 / 3), e = nn((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Ee(u.plus(d).times(i), u.plus(s), l + 2, 1), xe(i.d).slice(0, l) === (r = xe(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (fe(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (fe(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return he = !0, fe(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - nn(this.e / ce)) * ce, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return Ee(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return fe(Ee(n, new r(e), 0, 1, 1), r.precision, r.rounding);
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
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / po(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ja(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return fe(o, l.precision = r, l.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ja(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / po(5, e)), t = Ja(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, fe(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Ee(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Nn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Nn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Nn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, he = !1, r = r.times(r).minus(1).sqrt().plus(r), he = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, he = !1, r = r.times(r).plus(1).sqrt().plus(r), he = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? fe(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Ee(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Nn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= ni)
      return l = Nn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ni)
      return l = Nn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / ce + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (he = !1, n = Math.ceil(i / ce), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), he = !0, fe(l, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && nn(this.e / ce) > this.d.length - 2;
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
  if (he = !1, i = v + m, l = dr(u, i), a = n ? _t(d, i + 10) : dr(e, i), s = Ee(l, a, i, 1), yt(s.d, t = v, f))
    do
      if (i += 10, l = dr(u, i), a = n ? _t(d, i + 10) : dr(e, i), s = Ee(l, a, i, 1), !o) {
        +xe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = fe(s, v + 1, 0));
        break;
      }
    while (yt(s.d, t += 10, f));
  return he = !0, fe(s, v, f);
};
q.minus = q.sub = function(e) {
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
    return he ? fe(e, i, s) : e;
  }
  if (r = nn(e.e / ce), d = nn(m.e / ce), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / ce), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
  return u[0] ? (e.d = u, e.e = mo(u, r), he ? fe(e, i, s) : e) : new g(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? fe(new a(r), a.precision, a.rounding) : (he = !1, a.modulo == 9 ? (n = Ee(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Ee(r, e, 0, a.modulo, 1), n = n.times(e), he = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return ri(this);
};
q.naturalLogarithm = q.ln = function() {
  return dr(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, fe(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), he ? fe(e, i, s) : e;
  if (o = nn(v.e / ce), a = nn(e.e / ce), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / ce), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / An | 0, u[t] %= An;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = mo(u, a), he ? fe(e, i, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Or + e);
  return r.d ? (n = Lu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return fe(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ce, a.rounding = 1, r = bp(a, Hu(a, r)), a.precision = e, a.rounding = n, fe(jn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (he = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = xe(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = nn((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Ee(l, o, r + 2, 1)).times(0.5), xe(o.d).slice(0, r) === (n = xe(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (fe(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (fe(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return he = !0, fe(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Ee(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, fe(jn == 2 || jn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = nn(d.e / ce) + nn(e.e / ce), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % An | 0, n = i / An | 0;
    o[t] = (o[t] + n) % An | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = mo(o, r), he ? fe(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return zi(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (hn(e, 0, Er), n === void 0 ? n = a.rounding : hn(n, 0, 8), fe(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Hn(a, !0) : (hn(e, 0, Er), n === void 0 ? n = t.rounding : hn(n, 0, 8), a = fe(new t(a), e + 1, n), r = Hn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Hn(t) : (hn(e, 0, Er), n === void 0 ? n = o.rounding : hn(n, 0, 8), a = fe(new o(t), e + t.e + 1, n), r = Hn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, g = m.d, h = m.constructor;
  if (!g)
    return new h(m);
  if (u = r = new h(1), a = s = new h(0), n = new h(a), o = n.e = Lu(g) - m.e - 1, l = o % ce, n.d[0] = Xe(10, l < 0 ? ce + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new h(e), !i.isInt() || i.lt(u))
      throw Error(Or + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (he = !1, i = new h(xe(g)), d = h.precision, h.precision = o = g.length * ce * 2; v = Ee(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Ee(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Ee(u, a, o, 1).minus(m).abs().cmp(Ee(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], h.precision = d, he = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return zi(this, 16, e, n);
};
q.toNearest = function(e, n) {
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
  return e.d[0] ? (he = !1, r = Ee(r, e, 0, n, 1).times(e), he = !0, fe(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return zi(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Xe(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return fe(i, a, o);
  if (n = nn(e.e / ce), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= pp)
    return t = Ru(s, i, r, a), e.s < 0 ? new s(1).div(t) : fe(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Xe(+i, u), n = r == 0 || !isFinite(r) ? nn(u * (Math.log("0." + xe(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (he = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = ri(e.times(dr(i, a + r)), a), t.d && (t = fe(t, a + 5, 1), yt(t.d, a, o) && (n = a + 10, t = fe(ri(e.times(dr(i, n + r)), n), n + 5, 1), +xe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = fe(t, a + 1, 0)))), t.s = l, he = !0, s.rounding = o, fe(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Hn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (hn(e, 1, Er), n === void 0 ? n = t.rounding : hn(n, 0, 8), a = fe(new t(a), e, n), r = Hn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (hn(e, 1, Er), n === void 0 ? n = a.rounding : hn(n, 0, 8)), fe(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = Hn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return fe(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = Hn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function xe(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = ce - a.length, r && (o += ar(r)), o += a;
    l = e[n], a = l + "", r = ce - a.length, r && (o += ar(r));
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
  return --n < 0 ? (n += ce, t = 0) : (t = Math.ceil((n + 1) / ce), n %= ce), o = Xe(10, ce - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Xe(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Xe(10, n - 3) - 1, l;
}
function Ht(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += xo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function gp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / po(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ja(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Ee = function() {
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
    var u, d, v, f, m, g, h, y, w, O, S, $, I, T, D, b, V, j, R, K, X = a.constructor, te = a.s == t.s ? 1 : -1, B = a.d, C = t.d;
    if (!B || !B[0] || !C || !C[0])
      return new X(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (B ? C && B[0] == C[0] : !C) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          B && B[0] == 0 || !C ? te * 0 : te / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = An, m = ce, d = nn(a.e / m) - nn(t.e / m)), R = C.length, V = B.length, w = new X(te), O = w.d = [], v = 0; C[v] == (B[v] || 0); v++)
      ;
    if (C[v] > (B[v] || 0) && d--, o == null ? (T = o = X.precision, l = X.rounding) : i ? T = o + (a.e - t.e) + 1 : T = o, T < 0)
      O.push(1), g = !0;
    else {
      if (T = T / m + 2 | 0, v = 0, R == 1) {
        for (f = 0, C = C[0], T++; (v < V || f) && T--; v++)
          D = f * s + (B[v] || 0), O[v] = D / C | 0, f = D % C | 0;
        g = f || v < V;
      } else {
        for (f = s / (C[0] + 1) | 0, f > 1 && (C = e(C, f, s), B = e(B, f, s), R = C.length, V = B.length), b = R, S = B.slice(0, R), $ = S.length; $ < R; )
          S[$++] = 0;
        K = C.slice(), K.unshift(0), j = C[0], C[1] >= s / 2 && ++j;
        do
          f = 0, u = n(C, S, R, $), u < 0 ? (I = S[0], R != $ && (I = I * s + (S[1] || 0)), f = I / j | 0, f > 1 ? (f >= s && (f = s - 1), h = e(C, f, s), y = h.length, $ = S.length, u = n(h, S, y, $), u == 1 && (f--, r(h, R < y ? K : C, y, s))) : (f == 0 && (u = f = 1), h = C.slice()), y = h.length, y < $ && h.unshift(0), r(S, h, $, s), u == -1 && ($ = S.length, u = n(C, S, R, $), u < 1 && (f++, r(S, R < $ ? K : C, $, s))), $ = S.length) : u === 0 && (f++, S = [0]), O[v++] = f, u && S[0] ? S[$++] = B[b] || 0 : (S = [B[b]], $ = 1);
        while ((b++ < V || S[0] !== void 0) && T--);
        g = S[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (m == 1)
      w.e = d, Iu = g;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, fe(w, i ? o + w.e + 1 : o, l, g);
    }
    return w;
  };
}();
function fe(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += ce, l = n, d = v[f = 0], s = d / Xe(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ce), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ce, l = o - ce + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= ce, l = o - ce + t, s = l < 0 ? 0 : d / Xe(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Xe(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
      (o > 0 ? l > 0 ? d / Xe(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Xe(10, (ce - n % ce) % ce), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Xe(10, ce - o), v[f] = l > 0 ? (d / Xe(10, t - l) % Xe(10, l) | 0) * i : 0), u)
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
  return he && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Hn(e, n, r) {
  if (!e.isFinite())
    return Fu(e);
  var a, t = e.e, o = xe(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + ar(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + ar(-t - 1) + o, r && (a = r - l) > 0 && (o += ar(a))) : t >= l ? (o += ar(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + ar(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += ar(a))), o;
}
function mo(e, n) {
  var r = e[0];
  for (n *= ce; r >= 10; r /= 10)
    n++;
  return n;
}
function _t(e, n, r) {
  if (n > hp)
    throw he = !0, r && (e.precision = r), Error(Nu);
  return fe(new e(Jt), n, 1, !0);
}
function Nn(e, n, r) {
  if (n > ni)
    throw Error(Nu);
  return fe(new e(Qt), n, r, !0);
}
function Lu(e) {
  var n = e.length - 1, r = n * ce + 1;
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
function Ru(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / ce + 4);
  for (he = !1; ; ) {
    if (r % 2 && (o = o.times(n), wl(o.d, l) && (t = !0)), r = nn(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), wl(n.d, l);
  }
  return he = !0, o;
}
function bl(e) {
  return e.d[e.d.length - 1] & 1;
}
function Uu(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ri(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (he = !1, s = g) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Xe(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = fe(o.times(e), s, 1), r = r.times(++d), i = l.plus(Ee(o, r, s, 1)), xe(i.d).slice(0, s) === xe(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = fe(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && yt(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return fe(l, f.precision = g, m, he = !0);
      else
        return f.precision = g, l;
    }
    l = i;
  }
}
function dr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, g = 10, h = e, y = h.d, w = h.constructor, O = w.rounding, S = w.precision;
  if (h.s < 0 || !y || !y[0] || !h.e && y[0] == 1 && y.length == 1)
    return new w(y && !y[0] ? -1 / 0 : h.s != 1 ? NaN : y ? 0 : h);
  if (n == null ? (he = !1, d = S) : d = n, w.precision = d += g, r = xe(y), a = r.charAt(0), Math.abs(o = h.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = xe(h.d), a = r.charAt(0), m++;
    o = h.e, a > 1 ? (h = new w("0." + r), o++) : h = new w(a + "." + r.slice(1));
  } else
    return u = _t(w, d + 2, S).times(o + ""), h = dr(new w(a + "." + r.slice(1)), d - g).plus(u), w.precision = S, n == null ? fe(h, S, O, he = !0) : h;
  for (v = h, s = l = h = Ee(h.minus(1), h.plus(1), d, 1), f = fe(h.times(h), d, 1), t = 3; ; ) {
    if (l = fe(l.times(f), d, 1), u = s.plus(Ee(l, new w(t), d, 1)), xe(u.d).slice(0, d) === xe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(_t(w, d + 2, S).times(o + ""))), s = Ee(s, new w(m), d, 1), n == null)
        if (yt(s.d, d - g, O, i))
          w.precision = d += g, u = l = h = Ee(v.minus(1), v.plus(1), d, 1), f = fe(h.times(h), d, 1), t = i = 1;
        else
          return fe(s, w.precision = S, O, he = !0);
      else
        return w.precision = S, s;
    s = u, t += 2;
  }
}
function Fu(e) {
  return String(e.s * e.s / 0);
}
function ai(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ce, r < 0 && (a += ce), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ce; a < t; )
        e.d.push(+n.slice(a, a += ce));
      n = n.slice(a), a = ce - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), he && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function yp(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), zu.test(n))
      return ai(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (cp.test(n))
    r = 16, n = n.toLowerCase();
  else if (fp.test(n))
    r = 2;
  else if (mp.test(n))
    r = 8;
  else
    throw Error(Or + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Ru(a, new a(r), o, o * 2)), u = Ht(n, r, An), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = mo(u, d), e.d = u, he = !1, l && (e = Ee(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Xe(2, s) : vr.pow(2, s))), he = !0, e);
}
function bp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ja(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / po(5, r)), n = Ja(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Ja(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / ce);
  for (he = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Ee(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Ee(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return he = !0, l.d.length = d + 1, l;
}
function po(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Hu(e, n) {
  var r, a = n.s < 0, t = Nn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return jn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    jn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return jn = bl(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    jn = bl(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function zi(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, g = r !== void 0;
  if (g ? (hn(r, 1, Er), a === void 0 ? a = m.rounding : hn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Fu(e);
  else {
    for (d = Hn(e), l = d.indexOf("."), g ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Ht(Hn(f), 10, t), f.e = f.d.length), v = Ht(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Ee(e, f, r, a, 0, t), v = e.d, o = e.e, u = Iu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += xo.charAt(v[l]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = Ht(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += xo.charAt(v[l]);
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
function wl(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function wp(e) {
  return new this(e).abs();
}
function Cp(e) {
  return new this(e).acos();
}
function Sp(e) {
  return new this(e).acosh();
}
function kp(e, n) {
  return new this(e).plus(n);
}
function $p(e) {
  return new this(e).asin();
}
function Tp(e) {
  return new this(e).asinh();
}
function Pp(e) {
  return new this(e).atan();
}
function Op(e) {
  return new this(e).atanh();
}
function Vp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Nn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Nn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Nn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Ee(e, n, o, 1)), n = Nn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Ee(e, n, o, 1)), r;
}
function Mp(e) {
  return new this(e).cbrt();
}
function Ep(e) {
  return fe(e = new this(e), e.e + 1, 2);
}
function Bp(e, n, r) {
  return new this(e).clamp(n, r);
}
function Ip(e) {
  if (!e || typeof e != "object")
    throw Error(co + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    Er,
    "rounding",
    0,
    8,
    "toExpNeg",
    -ja,
    0,
    "toExpPos",
    0,
    ja,
    "maxE",
    0,
    ja,
    "minE",
    -ja,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = ei[r]), (a = e[r]) !== void 0)
      if (nn(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(Or + r + ": " + a);
  if (r = "crypto", t && (this[r] = ei[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Du);
      else
        this[r] = !1;
    else
      throw Error(Or + r + ": " + a);
  return this;
}
function Np(e) {
  return new this(e).cos();
}
function Dp(e) {
  return new this(e).cosh();
}
function Yu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Cl(o)) {
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
      return ai(u, o.toString());
    } else if (s !== "string")
      throw Error(Or + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), zu.test(o) ? ai(u, o) : yp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Ip, t.clone = Yu, t.isDecimal = Cl, t.abs = wp, t.acos = Cp, t.acosh = Sp, t.add = kp, t.asin = $p, t.asinh = Tp, t.atan = Pp, t.atanh = Op, t.atan2 = Vp, t.cbrt = Mp, t.ceil = Ep, t.clamp = Bp, t.cos = Np, t.cosh = Dp, t.div = Ap, t.exp = zp, t.floor = Lp, t.hypot = Rp, t.ln = Up, t.log = Fp, t.log10 = Yp, t.log2 = Hp, t.max = jp, t.min = Wp, t.mod = Gp, t.mul = qp, t.pow = Xp, t.random = Kp, t.round = Zp, t.sign = Jp, t.sin = Qp, t.sinh = _p, t.sqrt = xp, t.sub = eh, t.sum = nh, t.tan = rh, t.tanh = ah, t.trunc = th, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Ap(e, n) {
  return new this(e).div(n);
}
function zp(e) {
  return new this(e).exp();
}
function Lp(e) {
  return fe(e = new this(e), e.e + 1, 3);
}
function Rp() {
  var e, n, r = new this(0);
  for (he = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return he = !0, new this(1 / 0);
      r = n;
    }
  return he = !0, r.sqrt();
}
function Cl(e) {
  return e instanceof vr || e && e.toStringTag === Au || !1;
}
function Up(e) {
  return new this(e).ln();
}
function Fp(e, n) {
  return new this(e).log(n);
}
function Hp(e) {
  return new this(e).log(2);
}
function Yp(e) {
  return new this(e).log(10);
}
function jp() {
  return Uu(this, arguments, "lt");
}
function Wp() {
  return Uu(this, arguments, "gt");
}
function Gp(e, n) {
  return new this(e).mod(n);
}
function qp(e, n) {
  return new this(e).mul(n);
}
function Xp(e, n) {
  return new this(e).pow(n);
}
function Kp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : hn(e, 1, Er), a = Math.ceil(e / ce), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Du);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= ce, a && e && (t = Xe(10, ce - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= ce)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < ce && (r -= ce - a);
  }
  return l.e = r, l.d = i, l;
}
function Zp(e) {
  return fe(e = new this(e), e.e + 1, this.rounding);
}
function Jp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Qp(e) {
  return new this(e).sin();
}
function _p(e) {
  return new this(e).sinh();
}
function xp(e) {
  return new this(e).sqrt();
}
function eh(e, n) {
  return new this(e).sub(n);
}
function nh() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (he = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return he = !0, fe(r, this.precision, this.rounding);
}
function rh(e) {
  return new this(e).tan();
}
function ah(e) {
  return new this(e).tanh();
}
function th(e) {
  return fe(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var vr = q.constructor = Yu(ei);
Jt = new vr(Jt);
Qt = new vr(Qt);
var oh = {
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
  n: ih,
  classes: lh
} = _("counter"), Sl = 100, kl = 600, sh = ["inputmode", "readonly", "disabled"];
function uh(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      Be({
        class: e.classes(e.n("controller"), e.formatElevation(e.elevation, 2), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Z(
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
          default: ve(() => [Z(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), ke(z(
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
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.inputValue = o),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        sh
      ), [[Uv, e.inputValue]]), Z(
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
          default: ve(() => [Z(r, {
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
    ), Z(
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
var ju = Q({
  name: "VarCounter",
  components: {
    VarButton: en,
    VarIcon: Pe,
    VarFormDetails: _e
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: oh,
  setup(e) {
    var n = M(""), {
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
    } = a ?? {}, d, v, f, m, g = () => l(e.rules, e.modelValue), h = (C) => {
      Ne(() => {
        var {
          validateTrigger: N,
          rules: J,
          modelValue: H
        } = e;
        o(N, C, J, H);
      });
    }, y = () => {
      var {
        min: C
      } = e;
      k(e["onUpdate:modelValue"], C != null ? U(C) : 0), i();
    }, w = {
      reset: y,
      validate: g,
      resetValidation: i
    }, O = L(() => {
      var {
        max: C,
        modelValue: N
      } = e;
      return C != null && U(N) >= U(C);
    }), S = L(() => {
      var {
        min: C,
        modelValue: N
      } = e;
      return C != null && U(N) <= U(C);
    }), $ = (C) => {
      var {
        decimalLength: N,
        max: J,
        min: H
      } = e, A = U(C);
      return J != null && A > U(J) && (A = U(J)), H != null && A < U(H) && (A = U(H)), C = String(A), N != null && (C = A.toFixed(U(N))), C;
    }, I = (C) => {
      var {
        lazyChange: N,
        onBeforeChange: J
      } = e, {
        value: H
      } = C.target, A = $(H);
      N ? k(J, U(A), B) : te(A), h("onInputChange");
    }, T = () => {
      var {
        disabled: C,
        readonly: N,
        disableDecrement: J,
        decrementButton: H,
        lazyChange: A,
        step: E,
        modelValue: W,
        onDecrement: ee,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || C || N || J || !H) && !S.value) {
        var de = new vr(U(W)).minus(new vr(U(E))).toString(), we = $(de), Oe = U(we);
        k(ee, Oe), A ? k(se, Oe, B) : (te(we), h("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: C,
        readonly: N,
        disableIncrement: J,
        incrementButton: H,
        lazyChange: A,
        step: E,
        modelValue: W,
        onIncrement: ee,
        onBeforeChange: se
      } = e;
      if (!(u != null && u.value || s != null && s.value || C || N || J || !H) && !O.value) {
        var de = new vr(U(W)).plus(new vr(U(E))).toString(), we = $(de), Oe = U(we);
        k(ee, Oe), A ? k(se, Oe, B) : (te(we), h("onIncrement"));
      }
    }, b = () => {
      var {
        press: C,
        lazyChange: N
      } = e;
      !C || N || (m = window.setTimeout(() => {
        X();
      }, kl));
    }, V = () => {
      var {
        press: C,
        lazyChange: N
      } = e;
      !C || N || (f = window.setTimeout(() => {
        K();
      }, kl));
    }, j = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, R = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, K = () => {
      d = window.setTimeout(() => {
        D(), K();
      }, Sl);
    }, X = () => {
      v = window.setTimeout(() => {
        T(), X();
      }, Sl);
    }, te = (C) => {
      n.value = C;
      var N = U(C);
      k(e["onUpdate:modelValue"], N);
    }, B = (C) => {
      te($(String(C))), h("onLazyChange");
    };
    return k(r, w), ie(() => e.modelValue, (C) => {
      te($(String(C))), k(e.onChange, U(C));
    }), te($(String(e.modelValue))), {
      n: ih,
      classes: lh,
      formatElevation: gn,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: O,
      isMin: S,
      validate: g,
      reset: y,
      resetValidation: i,
      handleChange: I,
      decrement: T,
      increment: D,
      pressDecrement: b,
      pressIncrement: V,
      releaseDecrement: j,
      releaseIncrement: R,
      toSizeUnit: ge,
      toNumber: U
    };
  }
});
ju.render = uh;
const Zr = ju;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var QS = Zr, Wu = 60, Gu = Wu * 60, qu = Gu * 24, dh = qu * 7, Qa = 1e3, To = Wu * Qa, $l = Gu * Qa, vh = qu * Qa, fh = dh * Qa, Li = "millisecond", Wa = "second", Ga = "minute", qa = "hour", tr = "day", Yt = "week", In = "month", Xu = "quarter", or = "year", Xa = "date", ch = "YYYY-MM-DDTHH:mm:ssZ", Tl = "Invalid Date", mh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ph = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const hh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ti = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, gh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + ti(t, 2, "0") + ":" + ti(o, 2, "0");
}, yh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, In), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), In);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, bh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, wh = function(n) {
  var r = {
    M: In,
    y: or,
    w: Yt,
    d: tr,
    D: Xa,
    h: qa,
    m: Ga,
    s: Wa,
    ms: Li,
    Q: Xu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Ch = function(n) {
  return n === void 0;
};
const Sh = {
  s: ti,
  z: gh,
  m: yh,
  a: bh,
  p: wh,
  u: Ch
};
var dt = "en", Jr = {};
Jr[dt] = hh;
var Ri = function(n) {
  return n instanceof ho;
}, xt = function e(n, r, a) {
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
}, le = function(n, r) {
  if (Ri(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new ho(a);
}, kh = function(n, r) {
  return le(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Me = Sh;
Me.l = xt;
Me.i = Ri;
Me.w = kh;
var $h = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return /* @__PURE__ */ new Date(NaN);
  if (Me.u(r))
    return /* @__PURE__ */ new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(mh);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, ho = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = xt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = $h(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Me;
  }, n.isValid = function() {
    return this.$d.toString() !== Tl;
  }, n.isSame = function(a, t) {
    var o = le(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return le(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < le(a);
  }, n.$g = function(a, t, o) {
    return Me.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Me.u(t) ? !0 : t, i = Me.p(a), s = function(w, O) {
      var S = Me.w(o.$u ? Date.UTC(o.$y, O, w) : new Date(o.$y, O, w), o);
      return l ? S : S.endOf(tr);
    }, u = function(w, O) {
      var S = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Me.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? S : $).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case or:
        return l ? s(1, 0) : s(31, 11);
      case In:
        return l ? s(1, v) : s(0, v + 1);
      case Yt: {
        var g = this.$locale().weekStart || 0, h = (d < g ? d + 7 : d) - g;
        return s(l ? f - h : f + (6 - h), v);
      }
      case tr:
      case Xa:
        return u(m + "Hours", 0);
      case qa:
        return u(m + "Minutes", 1);
      case Ga:
        return u(m + "Seconds", 2);
      case Wa:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Me.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[tr] = i + "Date", o[Xa] = i + "Date", o[In] = i + "Month", o[or] = i + "FullYear", o[qa] = i + "Hours", o[Ga] = i + "Minutes", o[Wa] = i + "Seconds", o[Li] = i + "Milliseconds", o)[l], u = l === tr ? this.$D + (t - this.$W) : t;
    if (l === In || l === or) {
      var d = this.clone().set(Xa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Xa, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Me.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Me.p(t), s = function(f) {
      var m = le(o);
      return Me.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === In)
      return this.set(In, this.$M + a);
    if (i === or)
      return this.set(or, this.$y + a);
    if (i === tr)
      return s(1);
    if (i === Yt)
      return s(7);
    var u = (l = {}, l[Ga] = To, l[qa] = $l, l[Wa] = Qa, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Me.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Tl;
    var l = a || ch, i = Me.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, g = function(S, $, I, T) {
      return S && (S[$] || S(t, l)) || I[$].slice(0, T);
    }, h = function(S) {
      return Me.s(s % 12 || 12, S, "0");
    }, y = m || function(O, S, $) {
      var I = O < 12 ? "AM" : "PM";
      return $ ? I.toLowerCase() : I;
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
      h: h(1),
      hh: h(2),
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
    return l.replace(ph, function(O, S) {
      return S || w[O] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Me.p(t), s = le(a), u = (s.utcOffset() - this.utcOffset()) * To, d = this - s, v = Me.m(this, s);
    return v = (l = {}, l[or] = v / 12, l[In] = v, l[Xu] = v / 3, l[Yt] = (d - u) / fh, l[tr] = (d - u) / vh, l[qa] = d / $l, l[Ga] = d / To, l[Wa] = d / Qa, l)[i] || d, o ? v : Me.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(In).$D;
  }, n.$locale = function() {
    return Jr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = xt(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Me.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Ku = ho.prototype;
le.prototype = Ku;
[["$ms", Li], ["$s", Wa], ["$m", Ga], ["$H", qa], ["$W", tr], ["$M", In], ["$y", or], ["$D", Xa]].forEach(function(e) {
  Ku[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
le.extend = function(e, n) {
  return e.$i || (e(n, ho, le), e.$i = !0), le;
};
le.locale = xt;
le.isDayjs = Ri;
le.unix = function(e) {
  return le(e * 1e3);
};
le.en = Jr[dt];
le.Ls = Jr;
le.p = {};
const Zu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Ju = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Th(e) {
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
}], Ph = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Th
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
  n: Oh
} = _("picker-header");
function Vh(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Z(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ve(() => [Z(r, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), z(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [Z(
        Le,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), P(
            "div",
            {
              key: e.showDate
            },
            ne(e.showDate),
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
    ), Z(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ve(() => [Z(r, {
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
var Qu = Q({
  name: "PanelHeader",
  components: {
    VarButton: en,
    VarIcon: Pe
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
    } = n, a = M(!1), t = M(0), o = L(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return U(v) + t.value;
      var f = (i = Ze.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Ze.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: Oh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Qu.render = Vh;
const _u = Qu;
function oi() {
  return oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, oi.apply(this, arguments);
}
le.extend(Zu);
le.extend(Ju);
var {
  n: Dt,
  classes: Mh
} = _("month-picker"), {
  n: At
} = _("date-picker");
function Eh(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n("content"))
      },
      [Z(
        r,
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
      ), Z(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), P("ul", {
            key: e.panelKey
          }, [(p(!0), P(
            Ve,
            null,
            Ue(e.MONTH_LIST, (t) => (p(), P("li", {
              key: t.index
            }, [Z(
              a,
              Be({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1,
                elevation: e.componentProps.buttonElevation
              }, oi({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [Ce(
                  ne(e.getMonthAbbr(t.index)),
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
var xu = Q({
  name: "MonthPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: _u
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
    } = n, [a, t] = e.current.split("-"), o = M(!1), l = M(0), i = M(null), s = Ae({
      left: !1,
      right: !1
    }), u = L(() => e.choose.chooseYear === e.preview.previewYear), d = L(() => e.preview.previewYear === a), v = (O) => {
      var S, $;
      return (S = ($ = Ze.value.datePickerMonthDict) == null ? void 0 : $[O].abbr) != null ? S : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: $,
          max: I
        }
      } = e, T = !0, D = !0, b = S + "-" + O;
      return I && (T = le(b).isSameOrBefore(le(I), "month")), $ && (D = le(b).isSameOrAfter(le($), "month")), T && D;
    }, m = (O) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: $,
          chooseRangeMonth: I
        },
        componentProps: {
          type: T,
          range: D
        }
      } = e;
      if (D) {
        if (!I.length)
          return !1;
        var b = le(O).isSameOrBefore(le(I[1]), "month"), V = le(O).isSameOrAfter(le(I[0]), "month");
        return b && V;
      }
      return T === "month" ? S.includes(O) : $.some((j) => j.includes(O));
    }, g = (O) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: $
        },
        componentProps: {
          allowedDates: I,
          color: T,
          multiple: D,
          range: b
        }
      } = e, V = $ + "-" + O, j = () => b || D ? m(V) : (S == null ? void 0 : S.index) === O && u.value, R = () => f(O) ? I ? !I(V) : !1 : !0, K = R(), X = () => K ? !0 : b || D ? !m(V) : !u.value || (S == null ? void 0 : S.index) !== O, te = () => d.value && t === O && e.componentProps.showCurrent ? (b || D || u.value) && K ? !0 : b || D ? !m(V) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, B = () => K ? "" : te() ? T ?? "" : j() ? "" : At() + "-color-cover", C = B().startsWith(At());
      return {
        outline: te(),
        text: X(),
        color: X() ? "" : T,
        textColor: C ? "" : B(),
        [At() + "-color-cover"]: C,
        class: Mh(Dt("button"), [K, Dt("button--disabled")]),
        disabled: K
      };
    }, h = (O, S) => {
      var $ = S.currentTarget;
      $.classList.contains(Dt("button--disabled")) || r("choose-month", O);
    }, y = (O) => {
      o.value = O === "prev", l.value += O === "prev" ? -1 : 1, r("check-preview", "year", O);
    }, w = (O) => {
      i.value.checkDate(O);
    };
    return ie(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: S,
          max: $
        }
      } = e;
      $ && (s.right = !le("" + (U(O) + 1)).isSameOrBefore(le($), "year")), S && (s.left = !le("" + (U(O) - 1)).isSameOrAfter(le(S), "year"));
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
      chooseMonth: h,
      checkDate: y
    };
  }
});
xu.render = Eh;
const Bh = xu;
var {
  n: Pl,
  classes: Ih
} = _("year-picker"), Nh = ["onClick"];
function Dh(e, n) {
  return p(), P(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), P(
      Ve,
      null,
      Ue(e.yearList, (r) => (p(), P(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: G({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        Nh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var ed = Q({
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
    } = n, a = L(() => {
      var o = [], {
        preview: l,
        componentProps: {
          max: i,
          min: s
        }
      } = e;
      if (!l)
        return o;
      var u = [U(l) + 100, U(l) - 100];
      if (i) {
        var d = le(i).format("YYYY-MM-D"), v = U(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = le(s).format("YYYY-MM-D"), m = U(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return ln(() => {
      var o = document.querySelector("." + Pl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Pl,
      classes: Ih,
      yearList: a,
      chooseYear: t,
      toNumber: U
    };
  }
});
ed.render = Dh;
const Ah = ed;
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ii.apply(this, arguments);
}
le.extend(Zu);
le.extend(Ju);
var {
  n: Ya,
  classes: zh
} = _("day-picker"), {
  n: zt
} = _("date-picker");
function Lh(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n("content"))
      },
      [Z(
        r,
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
      ), Z(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), P("div", {
            key: e.panelKey
          }, [z(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), P(
              Ve,
              null,
              Ue(e.sortWeekList, (t) => (p(), P(
                "li",
                {
                  key: t.index
                },
                ne(e.getDayAbbr(t.index)),
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
            [(p(!0), P(
              Ve,
              null,
              Ue(e.days, (t, o) => (p(), P("li", {
                key: o
              }, [Z(
                a,
                Be({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1,
                  elevation: e.componentProps.buttonElevation
                }, ii({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [Ce(
                    ne(e.filterDay(t)),
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
var nd = Q({
  name: "DayPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: _u
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
    } = n, [a, t, o] = e.current.split("-"), l = M([]), i = M(!1), s = M(0), u = M(null), d = Ae({
      left: !1,
      right: !1
    }), v = L(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = L(() => {
      var b;
      return e.choose.chooseYear === e.preview.previewYear && ((b = e.choose.chooseMonth) == null ? void 0 : b.index) === e.preview.previewMonth.index;
    }), m = L(() => {
      var b = st.findIndex((V) => V.index === e.componentProps.firstDayOfWeek);
      return b === -1 || b === 0 ? st : st.slice(b).concat(st.slice(0, b));
    }), g = (b) => {
      var V, j;
      return (V = (j = Ze.value.datePickerWeekDict) == null ? void 0 : j[b].abbr) != null ? V : "";
    }, h = (b) => b > 0 ? b : "", y = () => {
      var {
        preview: {
          previewMonth: b,
          previewYear: V
        }
      } = e, j = le(V + "-" + b.index).daysInMonth(), R = le(V + "-" + b.index + "-01").day(), K = m.value.findIndex((X) => X.index === "" + R);
      l.value = [...Array(K).fill(-1), ...Array.from(Array(j + 1).keys())].filter((X) => X);
    }, w = () => {
      var {
        preview: {
          previewYear: b,
          previewMonth: V
        },
        componentProps: {
          max: j,
          min: R
        }
      } = e;
      if (j) {
        var K = b + "-" + (U(V.index) + 1);
        d.right = !le(K).isSameOrBefore(le(j), "month");
      }
      if (R) {
        var X = b + "-" + (U(V.index) - 1);
        d.left = !le(X).isSameOrAfter(le(R), "month");
      }
    }, O = (b) => {
      var {
        preview: {
          previewYear: V,
          previewMonth: j
        },
        componentProps: {
          min: R,
          max: K
        }
      } = e, X = !0, te = !0, B = V + "-" + j.index + "-" + b;
      return K && (X = le(B).isSameOrBefore(le(K), "day")), R && (te = le(B).isSameOrAfter(le(R), "day")), X && te;
    }, S = (b) => {
      var {
        choose: {
          chooseDays: V,
          chooseRangeDay: j
        },
        componentProps: {
          range: R
        }
      } = e;
      if (R) {
        if (!j.length)
          return !1;
        var K = le(b).isSameOrBefore(le(j[1]), "day"), X = le(b).isSameOrAfter(le(j[0]), "day");
        return K && X;
      }
      return V.includes(b);
    }, $ = (b) => {
      if (b < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ya("button"),
          disabled: !0
        };
      var {
        choose: {
          chooseDay: V
        },
        preview: {
          previewYear: j,
          previewMonth: R
        },
        componentProps: {
          allowedDates: K,
          color: X,
          multiple: te,
          range: B
        }
      } = e, C = j + "-" + R.index + "-" + b, N = () => B || te ? S(C) : U(V) === b && f.value, J = () => O(b) ? K ? !K(C) : !1 : !0, H = J(), A = () => H ? !0 : B || te ? !S(C) : !f.value || U(V) !== b, E = () => v.value && U(o) === b && e.componentProps.showCurrent ? (B || te || f.value) && H ? !0 : B || te ? !S(C) : f.value ? V !== o : !0 : !1, W = () => H ? "" : E() ? X ?? "" : N() ? "" : zt() + "-color-cover", ee = W().startsWith(zt());
      return {
        text: A(),
        outline: E(),
        textColor: ee ? "" : W(),
        [zt() + "-color-cover"]: ee,
        class: zh(Ya("button"), Ya("button--usable"), [H, Ya("button--disabled")]),
        disabled: H
      };
    }, I = (b) => {
      i.value = b === "prev", s.value += b === "prev" ? -1 : 1, r("check-preview", "month", b);
    }, T = (b, V) => {
      var j = V.currentTarget;
      j.classList.contains(Ya("button--disabled")) || r("choose-day", b);
    }, D = (b) => {
      u.value.checkDate(b);
    };
    return ln(() => {
      y(), w();
    }), ie(() => e.preview, () => {
      y(), w();
    }), {
      n: Ya,
      nDate: zt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: h,
      getDayAbbr: g,
      checkDate: I,
      chooseDay: T,
      buttonProps: $
    };
  }
});
nd.render = Lh;
const Rh = nd;
var {
  n: Uh,
  classes: Fh
} = _("date-picker");
function Hh(e, n) {
  var r = ae("year-picker-panel"), a = ae("month-picker-panel"), t = ae("day-picker-panel");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2)))
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: G({
          background: e.headerColor || e.color
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [Y(e.$slots, "year", {
          year: e.chooseYear
        }, () => [Ce(
          ne(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [Z(
          Le,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), P("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [Ce(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [Ce(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [Ce(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), P("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? Y(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [Ce(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? Y(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [Ce(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : Y(e.$slots, "date", Pt(Be({
                key: 2
              }, e.slotProps)), () => [Ce(
                ne(e.getDateTitle),
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
    ), z(
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
      [Z(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), ye(
            r,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (p(), ye(
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
          )) : e.getPanelType === "date" ? (p(), ye(
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
var rd = Q({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Bh,
    YearPickerPanel: Ah,
    DayPickerPanel: Rh
  },
  props: Ph,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = le().format("YYYY-MM-D"), [l, i] = o.split("-"), s = jt.find((oe) => oe.index === i), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), g = M(), h = M(s), y = M(l), w = M(!1), O = M([]), S = M([]), $ = M([]), I = M([]), T = M(null), D = M(null), b = Ae({
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
    }), V = L(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: g.value,
      chooseMonths: O.value,
      chooseDays: S.value,
      chooseRangeMonth: $.value,
      chooseRangeDay: I.value
    })), j = L(() => ({
      previewMonth: h.value,
      previewYear: y.value
    })), R = L(() => {
      var {
        multiple: oe,
        range: be
      } = e;
      if (be)
        return $.value.length ? $.value[0] + " ~ " + $.value[1] : "";
      var pe = "";
      if (f.value) {
        var Se, $e;
        pe = (Se = ($e = Ze.value.datePickerMonthDict) == null ? void 0 : $e[f.value.index].name) != null ? Se : "";
      }
      return oe ? "" + O.value.length + Ze.value.datePickerSelected : pe;
    }), K = L(() => {
      var oe, be, pe, Se, {
        multiple: $e,
        range: Re
      } = e;
      if (Re) {
        var rn = I.value.map((So) => le(So).format("YYYY-MM-DD"));
        return rn.length ? rn[0] + " ~ " + rn[1] : "";
      }
      if ($e)
        return "" + S.value.length + Ze.value.datePickerSelected;
      if (!m.value || !f.value || !g.value)
        return "";
      var Cn = le(m.value + "-" + f.value.index + "-" + g.value).day(), Ha = st.find((So) => So.index === "" + Cn), Ji = (oe = (be = Ze.value.datePickerWeekDict) == null ? void 0 : be[Ha.index].name) != null ? oe : "", Bv = (pe = (Se = Ze.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? pe : "", Iv = Na(g.value, 2, "0");
      return Ze.value.lang === "zh-CN" ? f.value.index + "-" + Iv + " " + Ji.slice(0, 3) : Ji.slice(0, 3) + ", " + Bv.slice(0, 3) + " " + g.value;
    }), X = L(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), te = L(() => !e.touchable || ["", "year"].includes(X.value)), B = L(() => {
      var oe, be, pe, Se, $e = le(m.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + g.value).day(), Re = g.value ? Na(g.value, 2, "0") : "";
      return {
        week: "" + $e,
        year: (be = m.value) != null ? be : "",
        month: (pe = (Se = f.value) == null ? void 0 : Se.index) != null ? pe : "",
        date: Re
      };
    }), C = L(() => V.value.chooseRangeDay.map((oe) => le(oe).format("YYYY-MM-DD"))), N = L(() => m.value === y.value), J = L(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === h.value.index;
    }), H = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, A = (oe) => {
      if (!te.value) {
        var {
          clientX: be,
          clientY: pe
        } = oe.touches[0];
        n = be, r = pe;
      }
    }, E = (oe, be) => oe >= be && oe > 20 ? "x" : "y", W = (oe) => {
      if (!te.value) {
        var {
          clientX: be,
          clientY: pe
        } = oe.touches[0], Se = be - n, $e = pe - r;
        t = E(Math.abs(Se), Math.abs($e)), a = Se > 0 ? "prev" : "next";
      }
    }, ee = () => {
      if (!(te.value || t !== "x")) {
        var oe = X.value === "month" ? T : D;
        io(() => {
          oe.value.forwardRef(a), Ye();
        });
      }
    }, se = (oe, be) => {
      var pe = be === "month" ? $ : I;
      if (pe.value = v.value ? [oe, oe] : [pe.value[0], oe], v.value = !v.value, v.value) {
        var Se = le(pe.value[0]).isAfter(pe.value[1]), $e = Se ? [pe.value[1], pe.value[0]] : [...pe.value];
        k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
      }
    }, de = (oe, be) => {
      var pe = be === "month" ? O : S, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-DD", $e = pe.value.map((rn) => le(rn).format(Se)), Re = $e.findIndex((rn) => rn === oe);
      Re === -1 ? $e.push(oe) : $e.splice(Re, 1), k(e["onUpdate:modelValue"], $e), k(e.onChange, $e);
    }, we = (oe, be) => !m.value || !f.value ? !1 : N.value ? oe === "month" ? be.index < f.value.index : J.value ? be < U(g.value) : f.value.index > h.value.index : m.value > y.value, Oe = (oe) => {
      var {
        readonly: be,
        range: pe,
        multiple: Se,
        onChange: $e,
        "onUpdate:modelValue": Re
      } = e;
      if (!(oe < 0 || be)) {
        w.value = we("day", oe);
        var rn = y.value + "-" + h.value.index + "-" + oe, Cn = le(rn).format("YYYY-MM-DD");
        pe ? se(Cn, "day") : Se ? de(Cn, "day") : (k(Re, Cn), k($e, Cn));
      }
    }, dn = (oe) => {
      var {
        type: be,
        readonly: pe,
        range: Se,
        multiple: $e,
        onChange: Re,
        onPreview: rn,
        "onUpdate:modelValue": Cn
      } = e;
      if (w.value = we("month", oe), be === "month" && !pe) {
        var Ha = y.value + "-" + oe.index;
        Se ? se(Ha, "month") : $e ? de(Ha, "month") : (k(Cn, Ha), k(Re, Ha));
      } else
        h.value = oe, k(rn, U(y.value), U(h.value.index));
      d.value = !1;
    }, re = (oe) => {
      y.value = "" + oe, u.value = !1, d.value = !0, k(e.onPreview, U(y.value), U(h.value.index));
    }, ue = (oe, be) => {
      var pe = be === "prev" ? -1 : 1;
      if (oe === "year")
        y.value = "" + (U(y.value) + pe);
      else {
        var Se = U(h.value.index) + pe;
        Se < 1 && (y.value = "" + (U(y.value) - 1), Se = 12), Se > 12 && (y.value = "" + (U(y.value) + 1), Se = 1), h.value = jt.find(($e) => U($e.index) === Se);
      }
      k(e.onPreview, U(y.value), U(h.value.index));
    }, me = () => (e.multiple || e.range) && !Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Te(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, De = (oe) => Te(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ke = (oe, be) => {
      var pe = be === "month" ? $ : I, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = oe.map((Cn) => le(Cn).format(Se)).slice(0, 2), Re = pe.value.some((Cn) => De(Cn));
      if (!Re) {
        pe.value = $e;
        var rn = le(pe.value[0]).isAfter(pe.value[1]);
        pe.value.length === 2 && rn && (pe.value = [pe.value[1], pe.value[0]]);
      }
    }, Ge = (oe, be) => {
      var pe = be === "month" ? O : S, Se = be === "month" ? "YYYY-MM" : "YYYY-MM-D", $e = Array.from(new Set(oe.map((Re) => le(Re).format(Se))));
      pe.value = $e.filter((Re) => Re !== "Invalid Date");
    }, He = (oe) => {
      var be = le(oe).format("YYYY-MM-D");
      if (!De(be)) {
        var [pe, Se, $e] = be.split("-"), Re = jt.find((rn) => rn.index === Se);
        f.value = Re, m.value = pe, g.value = $e, h.value = Re, y.value = pe;
      }
    }, Ye = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (oe) => {
      if (!(!me() || De(oe) || !oe))
        if (e.range) {
          if (!Te(oe))
            return;
          v.value = oe.length !== 1, Ke(oe, e.type);
        } else if (e.multiple) {
          if (!Te(oe))
            return;
          Ge(oe, e.type);
        } else
          He(oe);
    }, {
      immediate: !0
    }), ie(X, Ye), {
      n: Uh,
      classes: Fh,
      monthPanelEl: T,
      dayPanelEl: D,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: g,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: R,
      getDateTitle: K,
      getPanelType: X,
      getChoose: V,
      getPreview: j,
      componentProps: b,
      slotProps: B,
      formatRange: C,
      clickEl: H,
      handleTouchstart: A,
      handleTouchmove: W,
      handleTouchend: ee,
      getChooseDay: Oe,
      getChooseMonth: dn,
      getChooseYear: re,
      checkPreview: ue,
      formatElevation: gn
    };
  }
});
rd.render = Hh;
const Qr = rd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var _S = Qr;
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, li.apply(this, arguments);
}
function Yh(e) {
  return ["left", "center", "right"].includes(e);
}
var jh = li({
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
    validator: Yh
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
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, si.apply(this, arguments);
}
var {
  n: Wh,
  classes: Gh
} = _("dialog");
function qh(e, n) {
  var r = ae("var-button"), a = ae("var-popup");
  return p(), ye(
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
      default: ve(() => [z(
        "div",
        Be({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: si({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [z(
          "div",
          {
            class: c(e.n("title"))
          },
          [Y(e.$slots, "title", {}, () => [Ce(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), z(
          "div",
          {
            class: c(e.n("message")),
            style: G({
              textAlign: e.messageAlign
            })
          },
          [Y(e.$slots, "default", {}, () => [Ce(
            ne(e.message),
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
          [e.cancelButton ? (p(), ye(
            r,
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
              default: ve(() => [Ce(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (p(), ye(
            r,
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
              default: ve(() => [Ce(
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
var ad = Q({
  name: "VarDialog",
  components: {
    VarPopup: kn,
    VarButton: en
  },
  inheritAttrs: !1,
  props: jh,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (k(s), !!i) {
        if (u != null) {
          k(u, "close", a);
          return;
        }
        k(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (k(s), i != null) {
        k(i, "confirm", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (k(s), i != null) {
        k(i, "cancel", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), ie(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Wh,
      classes: Gh,
      pack: Ze,
      dt: oo,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: ge
    };
  }
});
ad.render = qh;
const yr = ad;
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
var lr, no = {};
function Xh(e) {
  return e === void 0 && (e = {}), Fe(e) ? eo({}, no, {
    message: e
  }) : eo({}, no, e);
}
function _n(e) {
  return tt() ? new Promise((n) => {
    _n.close();
    var r = Xh(e), a = Ae(r);
    a.teleport = "body", lr = a;
    var {
      unmountInstance: t
    } = ot(yr, a, {
      onConfirm: () => {
        k(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        k(a.onCancel), n("cancel");
      },
      onClose: () => {
        k(a.onClose), n("close");
      },
      onClosed: () => {
        k(a.onClosed), t(), lr === a && (lr = null);
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
_n.setDefaultOptions = function(e) {
  no = e;
};
_n.resetDefaultOptions = function() {
  no = {};
};
_n.close = function() {
  if (lr != null) {
    var e = lr;
    lr = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
yr.install = function(e) {
  e.component(yr.name, yr);
};
_n.install = function(e) {
  e.component(yr.name, yr);
};
_n.Component = yr;
var xS = yr, Kh = {
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
function Ka() {
  return Ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ka.apply(this, arguments);
}
var {
  n: Zh,
  classes: Jh
} = _("divider");
function Qh(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [Y(e.$slots, "default", {}, () => [e.description ? (p(), P(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var td = Q({
  name: "VarDivider",
  props: Kh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ae({
      withText: !1
    }), t = L(() => Bo(e.inset) ? e.inset : !0), o = L(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Bo(i) || i === 0)
        return Ka({}, d);
      var v = U(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Ka({}, d, {
        height: "calc(80% - " + ge(f) + ")"
      }) : Ka({}, d, {
        width: "calc(100% - " + ge(f) + ")",
        left: v > 0 ? ge(f) : ge(0)
      });
    }), l = () => {
      a.withText = !!r.default || !!e.description;
    };
    return ln(() => {
      l();
    }), Tt(() => {
      l();
    }), Ka({
      n: Zh,
      classes: Jh
    }, Fv(a), {
      style: o,
      isInset: t
    });
  }
});
td.render = Qh;
const _r = td;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var ek = _r, _h = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return _h[n];
  });
}
var Wn = "top", Vr = "bottom", Aa = "right", br = "left", go = "auto", yo = [Wn, Vr, Aa, br], bo = "start", bt = "end", xh = "clippingParents", od = "viewport", it = "popper", eg = "reference", Ol = /* @__PURE__ */ yo.reduce(function(e, n) {
  return e.concat([n + "-" + bo, n + "-" + bt]);
}, []), id = /* @__PURE__ */ [].concat(yo, [go]).reduce(function(e, n) {
  return e.concat([n, n + "-" + bo, n + "-" + bt]);
}, []), ng = "beforeRead", rg = "read", ag = "afterRead", tg = "beforeMain", og = "main", ig = "afterMain", lg = "beforeWrite", sg = "write", ug = "afterWrite", ui = [ng, rg, ag, tg, og, ig, lg, sg, ug];
function Gn(e) {
  return e.split("-")[0];
}
var dg = {
  start: "end",
  end: "start"
};
function Vl(e) {
  return e.replace(/start|end/g, function(n) {
    return dg[n];
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
function za(e) {
  var n = En(e).Element;
  return e instanceof n || e instanceof Element;
}
function $n(e) {
  var n = En(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ui(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = En(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Br(e) {
  return ((za(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var vt = Math.max, Ml = Math.min, _a = Math.round;
function di() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ld() {
  return !/^((?!chrome|android).)*safari/i.test(di());
}
function xa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && $n(e) && (t = e.offsetWidth > 0 && _a(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && _a(a.height) / e.offsetHeight || 1);
  var l = za(e) ? En(e) : window, i = l.visualViewport, s = !ld() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Fi(e) {
  var n = En(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Hi(e) {
  return xa(Br(e)).left + Fi(e).scrollLeft;
}
function vg(e, n) {
  var r = En(e), a = Br(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = ld();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Hi(e),
    y: s
  };
}
function zn(e) {
  return En(e).getComputedStyle(e);
}
function fg(e) {
  var n, r = Br(e), a = Fi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = vt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = vt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Hi(e), s = -a.scrollTop;
  return zn(t || r).direction === "rtl" && (i += vt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Yn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wo(e) {
  return Yn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ui(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Br(e)
  );
}
function Yi(e) {
  var n = zn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function sd(e) {
  return ["html", "body", "#document"].indexOf(Yn(e)) >= 0 ? e.ownerDocument.body : $n(e) && Yi(e) ? e : sd(wo(e));
}
function ft(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = sd(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = En(a), l = t ? [o].concat(o.visualViewport || [], Yi(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ft(wo(l)))
  );
}
function cg(e) {
  return ["table", "td", "th"].indexOf(Yn(e)) >= 0;
}
function El(e) {
  return !$n(e) || // https://github.com/popperjs/popper-core/issues/837
  zn(e).position === "fixed" ? null : e.offsetParent;
}
function mg(e) {
  var n = /firefox/i.test(di()), r = /Trident/i.test(di());
  if (r && $n(e)) {
    var a = zn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = wo(e);
  for (Ui(t) && (t = t.host); $n(t) && ["html", "body"].indexOf(Yn(t)) < 0; ) {
    var o = zn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function ji(e) {
  for (var n = En(e), r = El(e); r && cg(r) && zn(r).position === "static"; )
    r = El(r);
  return r && (Yn(r) === "html" || Yn(r) === "body" && zn(r).position === "static") ? n : r || mg(e) || n;
}
function pg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Ui(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function vi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function hg(e, n) {
  var r = xa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Bl(e, n, r) {
  return n === od ? vi(vg(e, r)) : za(n) ? hg(n, r) : vi(fg(Br(e)));
}
function gg(e) {
  var n = ft(wo(e)), r = ["absolute", "fixed"].indexOf(zn(e).position) >= 0, a = r && $n(e) ? ji(e) : e;
  return za(a) ? n.filter(function(t) {
    return za(t) && pg(t, a) && Yn(t) !== "body";
  }) : [];
}
function yg(e, n, r, a) {
  var t = n === "clippingParents" ? gg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = Bl(e, u, a);
    return s.top = vt(d.top, s.top), s.right = Ml(d.right, s.right), s.bottom = Ml(d.bottom, s.bottom), s.left = vt(d.left, s.left), s;
  }, Bl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function wt(e) {
  return e.split("-")[1];
}
function bg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ud(e) {
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
    case Aa:
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
  var u = t ? bg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case bo:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case bt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
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
function Sg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function dd(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? xh : i, u = r.rootBoundary, d = u === void 0 ? od : u, v = r.elementContext, f = v === void 0 ? it : v, m = r.altBoundary, g = m === void 0 ? !1 : m, h = r.padding, y = h === void 0 ? 0 : h, w = Cg(typeof y != "number" ? y : Sg(y, yo)), O = f === it ? eg : it, S = e.rects.popper, $ = e.elements[g ? O : f], I = yg(za($) ? $ : $.contextElement || Br(e.elements.popper), s, d, l), T = xa(e.elements.reference), D = ud({
    reference: T,
    element: S,
    strategy: "absolute",
    placement: t
  }), b = vi(Object.assign({}, S, D)), V = f === it ? b : T, j = {
    top: I.top - V.top + w.top,
    bottom: V.bottom - I.bottom + w.bottom,
    left: I.left - V.left + w.left,
    right: V.right - I.right + w.right
  }, R = e.modifiersData.offset;
  if (f === it && R) {
    var K = R[t];
    Object.keys(j).forEach(function(X) {
      var te = [Aa, Vr].indexOf(X) >= 0 ? 1 : -1, B = [Wn, Vr].indexOf(X) >= 0 ? "y" : "x";
      j[X] += K[B] * te;
    });
  }
  return j;
}
function kg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? id : s, d = wt(a), v = d ? i ? Ol : Ol.filter(function(g) {
    return wt(g) === d;
  }) : yo, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(g, h) {
    return g[h] = dd(e, {
      placement: h,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Gn(h)], g;
  }, {});
  return Object.keys(m).sort(function(g, h) {
    return m[g] - m[h];
  });
}
function $g(e) {
  if (Gn(e) === go)
    return [];
  var n = Wt(e);
  return [Vl(e), n, Vl(n)];
}
function Tg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, g = m === void 0 ? !0 : m, h = r.allowedAutoPlacements, y = n.options.placement, w = Gn(y), O = w === y, S = s || (O || !g ? [Wt(y)] : $g(y)), $ = [y].concat(S).reduce(function(se, de) {
      return se.concat(Gn(de) === go ? kg(n, {
        placement: de,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: h
      }) : de);
    }, []), I = n.rects.reference, T = n.rects.popper, D = /* @__PURE__ */ new Map(), b = !0, V = $[0], j = 0; j < $.length; j++) {
      var R = $[j], K = Gn(R), X = wt(R) === bo, te = [Wn, Vr].indexOf(K) >= 0, B = te ? "width" : "height", C = dd(n, {
        placement: R,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), N = te ? X ? Aa : br : X ? Vr : Wn;
      I[B] > T[B] && (N = Wt(N));
      var J = Wt(N), H = [];
      if (o && H.push(C[K] <= 0), i && H.push(C[N] <= 0, C[J] <= 0), H.every(function(se) {
        return se;
      })) {
        V = R, b = !1;
        break;
      }
      D.set(R, H);
    }
    if (b)
      for (var A = g ? 3 : 1, E = function(de) {
        var we = $.find(function(Oe) {
          var dn = D.get(Oe);
          if (dn)
            return dn.slice(0, de).every(function(re) {
              return re;
            });
        });
        if (we)
          return V = we, "break";
      }, W = A; W > 0; W--) {
        var ee = E(W);
        if (ee === "break")
          break;
      }
    n.placement !== V && (n.modifiersData[a]._skip = !0, n.placement = V, n.reset = !0);
  }
}
const Pg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Tg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Og(e, n, r) {
  var a = Gn(e), t = [br, Wn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [br, Aa].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function Vg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = id.reduce(function(d, v) {
    return d[v] = Og(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const Mg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vg
};
function Eg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bg(e) {
  return e === En(e) || !$n(e) ? Fi(e) : Eg(e);
}
function Ig(e) {
  var n = e.getBoundingClientRect(), r = _a(n.width) / e.offsetWidth || 1, a = _a(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Ng(e, n, r) {
  r === void 0 && (r = !1);
  var a = $n(n), t = $n(n) && Ig(n), o = Br(n), l = xa(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Yn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Yi(o)) && (i = Bg(n)), $n(n) ? (s = xa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Hi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Dg(e) {
  var n = xa(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Ag(e) {
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
function zg(e) {
  var n = Ag(e);
  return ui.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Lg(e) {
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
var Ir = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Rg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Il = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Ug(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Il).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(rr(Ir, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(rr(Ir, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ui.indexOf(n.phase) < 0 && console.error(rr(Ir, n.name, '"phase"', "either " + ui.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(rr(Ir, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(rr(Ir, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(rr(Ir, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(rr(Ir, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Il.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(rr(Rg, String(n.name), a, a));
      });
    });
  });
}
function Fg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Hg(e) {
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
var Nl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Yg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Dl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Al() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function jg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Dl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Dl, o),
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
        h(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: za(i) ? ft(i) : i.contextElement ? ft(i.contextElement) : [],
          popper: ft(s)
        };
        var S = zg(Hg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(R) {
          return R.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Fg([].concat(S, d.options.modifiers), function(R) {
            var K = R.name;
            return K;
          });
          if (Ug($), Gn(d.options.placement) === go) {
            var I = d.orderedModifiers.find(function(R) {
              var K = R.name;
              return K === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var T = zn(s), D = T.marginTop, b = T.marginRight, V = T.marginBottom, j = T.marginLeft;
          [D, b, V, j].some(function(R) {
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
          var w = d.elements, O = w.reference, S = w.popper;
          if (!Al(O, S)) {
            process.env.NODE_ENV !== "production" && console.error(Nl);
            return;
          }
          d.rects = {
            reference: Ng(O, ji(S), d.options.strategy === "fixed"),
            popper: Dg(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(R) {
            return d.modifiersData[R.name] = Object.assign({}, R.data);
          });
          for (var $ = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(Yg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var T = d.orderedModifiers[I], D = T.fn, b = T.options, V = b === void 0 ? {} : b, j = T.name;
            typeof D == "function" && (d = D({
              state: d,
              options: V,
              name: j,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Lg(function() {
        return new Promise(function(y) {
          m.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        h(), f = !0;
      }
    };
    if (!Al(i, s))
      return process.env.NODE_ENV !== "production" && console.error(Nl), m;
    m.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var w = y.name, O = y.options, S = O === void 0 ? {} : O, $ = y.effect;
        if (typeof $ == "function") {
          var I = $({
            state: d,
            name: w,
            instance: m,
            options: S
          }), T = function() {
          };
          v.push(I || T);
        }
      });
    }
    function h() {
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
function Wg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = En(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Lt);
  }), i && s.addEventListener("resize", r.update, Lt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Lt);
    }), i && s.removeEventListener("resize", r.update, Lt);
  };
}
const Gg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Wg,
  data: {}
};
function qg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ud({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Xg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: qg,
  data: {}
};
var Kg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Zg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: _a(n * t) / t || 0,
    y: _a(r * t) / t || 0
  };
}
function zl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, g = l.y, h = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  m = y.x, h = y.y;
  var w = l.hasOwnProperty("x"), O = l.hasOwnProperty("y"), S = br, $ = Wn, I = window;
  if (u) {
    var T = ji(r), D = "clientHeight", b = "clientWidth";
    if (T === En(r) && (T = Br(r), zn(T).position !== "static" && i === "absolute" && (D = "scrollHeight", b = "scrollWidth")), T = T, t === Wn || (t === br || t === Aa) && o === bt) {
      $ = Vr;
      var V = v && T === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[D]
      );
      h -= V - a.height, h *= s ? 1 : -1;
    }
    if (t === br || (t === Wn || t === Vr) && o === bt) {
      S = Aa;
      var j = v && T === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[b]
      );
      m -= j - a.width, m *= s ? 1 : -1;
    }
  }
  var R = Object.assign({
    position: i
  }, u && Kg), K = d === !0 ? Zg({
    x: m,
    y: h
  }) : {
    x: m,
    y: h
  };
  if (m = K.x, h = K.y, s) {
    var X;
    return Object.assign({}, R, (X = {}, X[$] = O ? "0" : "", X[S] = w ? "0" : "", X.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + h + "px)" : "translate3d(" + m + "px, " + h + "px, 0)", X));
  }
  return Object.assign({}, R, (n = {}, n[$] = O ? h + "px" : "", n[S] = w ? m + "px" : "", n.transform = "", n));
}
function Jg(e) {
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
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, zl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, zl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Qg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Jg,
  data: {}
};
function _g(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !$n(o) || !Yn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function xg(e) {
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
      !$n(t) || !Yn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const ey = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _g,
  effect: xg,
  requires: ["computeStyles"]
};
var ny = [Gg, Xg, Qg, ey], ry = /* @__PURE__ */ jg({
  defaultModifiers: ny
});
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
function Ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Rl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
function vd(e) {
  var n = M(null), r = M(null), a = M({
    width: 0,
    height: 0
  }), t = Ms(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(T, D) {
      D ? (S(), k(e.onOpen)) : k(e.onClose);
    }
  }), {
    zIndex: o
  } = Mt(() => t.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: T,
      height: D
    } = Da(n.value);
    a.value = {
      width: je(T),
      height: je(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, $());
  }, v = /* @__PURE__ */ function() {
    var T = Rl(function* () {
      e.trigger === "hover" && (s = !1, yield Rn(), !i && I());
    });
    return function() {
      return T.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var T = Rl(function* () {
      e.trigger === "hover" && (i = !1, yield Rn(), !s && I());
    });
    return function() {
      return T.apply(this, arguments);
    };
  }(), g = () => {
    $();
  }, h = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  }, y = () => {
    e.trigger === "click" && h();
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
      skidding: D,
      distance: b
    } = w(), V = [ro({}, Pg, {
      enabled: t.value
    }), ro({}, Mg, {
      options: {
        offset: [D, b]
      }
    })];
    return {
      placement: T,
      modifiers: V
    };
  }, S = () => {
    l.setOptions(O());
  }, $ = () => {
    var {
      disabled: T
    } = e;
    T || (t.value = !0, k(e["onUpdate:show"], !0));
  }, I = () => {
    t.value = !1, k(e["onUpdate:show"], !1);
  };
  return Os(n, "click", y), ie(() => e.offsetX, S), ie(() => e.offsetY, S), ie(() => e.placement, S), ie(() => e.disabled, I), ao(() => {
    var T, D = e.reference ? (T = n.value) == null ? void 0 : T.querySelector(e.reference) : n.value;
    l = ry(D ?? n.value, r.value, O());
  }), rt(() => {
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
    handlePopoverClose: h,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: S,
    open: $,
    close: I
  };
}
function ay(e) {
  return ["click", "hover"].includes(e);
}
function ty(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function oy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var iy = {
  type: {
    type: String,
    default: "default",
    validator: oy
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
    validator: ay
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ty
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
  n: ly,
  classes: sy
} = _("tooltip");
function uy(e, n) {
  return p(), P(
    "div",
    {
      ref: "host",
      class: c(e.n()),
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
    [Y(e.$slots, "default"), (p(), ye(
      Ra,
      {
        to: e.teleport
      },
      [Z(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed,
          persisted: ""
        },
        {
          default: ve(() => [ke(z(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
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
            [z(
              "div",
              {
                style: G({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: c(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [Y(e.$slots, "content", {}, () => [Ce(
                ne(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[$r, e.show]])]),
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
var fd = Q({
  name: "VarTooltip",
  props: iy,
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
    } = vd(e);
    return {
      toSizeUnit: ge,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: ly,
      classes: sy,
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
fd.render = uy;
const wr = fd;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var nk = wr;
function dy(e) {
  return ["click"].includes(e);
}
var vy = {
  expandTrigger: {
    type: String,
    validator: dy
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
  n: fy,
  classes: cy
} = _("ellipsis"), my = {
  key: 0
};
function py(e, n) {
  var r = ae("var-tooltip");
  return p(), ye(
    r,
    Pt(to(e.tooltip)),
    {
      content: ve(() => [Y(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), P(
          "span",
          my,
          ne(e.tooltip.content),
          1
          /* TEXT */
        )) : Y(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [z(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: G(e.rootStyles),
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
var cd = Q({
  name: "VarEllipsis",
  components: {
    VarTooltip: wr
  },
  props: vy,
  setup(e) {
    var n = M(!1), r = L(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = L(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : fi({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: fy,
      classes: cy,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
cd.render = py;
const xr = cd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var rk = xr;
function hy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function gy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function yy(e) {
  return ["click", "hover"].includes(e);
}
var by = {
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
    validator: iu
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: hy
  },
  direction: {
    type: String,
    default: "top",
    validator: gy
  },
  trigger: {
    type: String,
    default: "click",
    validator: yy
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
function Ul(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  classes: Fl,
  n: vn
} = _("fab");
const ea = Q({
  name: "VarFab",
  inheritAttrs: !1,
  props: by,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Ms(e, "active"), o = M(null), {
      disabled: l
    } = lo(), i = (f, m, g) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (g === 0) {
          k(e.onClick, t.value, f);
          return;
        }
        t.value = m, k(e.onClick, t.value, f), k(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, k(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, k(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : ke(Z(en, {
      "var-fab-cover": !0,
      class: vn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0,
      elevation: e.elevation
    }, {
      default: () => [Z(Pe, {
        "var-fab-cover": !0,
        class: Fl([t.value, vn("trigger-active-icon"), vn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: vn("--trigger-icon-animation")
      }, null)]
    }), [[$r, e.show]]), v = () => {
      var f, m, g = Vs((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return Z("div", Be({
        class: Fl(vn(), vn("--position-" + e.position), vn("--direction-" + e.direction), [e.fixed, vn("--fixed"), vn("--absolute")], [e.safeArea, vn("--safe-area")]),
        style: {
          zIndex: U(e.zIndex),
          top: ge(e.top),
          bottom: ge(e.bottom),
          left: ge(e.left),
          right: ge(e.right)
        },
        ref: o,
        onClick: (h) => i(h, !t.value, g.length),
        onMouseleave: () => s(!1, g.length),
        onMouseenter: () => s(!0, g.length)
      }, a), [Z(Le, {
        name: vn("--active-transition")
      }, Ul(f = d()) ? f : {
        default: () => [f]
      }), Z(Le, {
        name: vn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [ke(Z("div", {
          class: vn("actions"),
          onClick: (h) => h.stopPropagation()
        }, [g.map((h) => Z("div", {
          class: vn("action")
        }, [h]))]), [[$r, e.show && t.value && g.length]])]
      })]);
    };
    return ie(() => e.trigger, () => {
      t.value = !1;
    }), ie(() => e.disabled, () => {
      t.value = !1;
    }), Os(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return Z(Ra, {
          to: f,
          disabled: l.value
        }, Ul(m = v()) ? m : {
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
var ak = ea;
function wy(e) {
  return ["start", "end"].includes(e);
}
var Cy = {
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
    validator: wy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Hl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Sy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Hl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Hl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ky
} = _("form");
function $y(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [Y(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var md = Q({
  name: "VarForm",
  props: Cy,
  setup(e) {
    var n = L(() => e.disabled), r = L(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Im(), o = (d) => {
      setTimeout(() => {
        var v = Tr(d), f = v === window ? 0 : tl(v), m = tl(d) - f - je(e.scrollToErrorOffsetY);
        ht(v, {
          top: m,
          animation: Io
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Sy(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: w
          } = y;
          return w();
        }));
        if (e.scrollToError) {
          var [, f] = Gv(v, (y) => y === !1, e.scrollToError), m = f > -1;
          if (m) {
            var g, h = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(h);
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
      n: ky,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
md.render = $y;
const qn = md;
qn.install = function(e) {
  e.component(qn.name, qn);
};
qn.useValidation = Vn;
qn.useForm = Mn;
var tk = qn;
function Ty(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Py = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ty,
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
  n: Oy,
  classes: Vy
} = _("image"), My = ["alt", "title", "lazy-error", "lazy-loading"], Ey = ["alt", "title", "src"];
function By(e, n) {
  var r = Ie("lazy"), a = Ie("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((p(), P(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: G({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      My
    )), [[r, e.src]]) : (p(), P(
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
        onLoad: n[3] || (n[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[4] || (n[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[5] || (n[5] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      Ey
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var pd = Q({
  name: "VarImage",
  directives: {
    Lazy: gt,
    Ripple: We
  },
  props: Py,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && k(i, t), o._lazy.state === "error" && k(s, t)) : k(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && k(l, t);
    }, a = (t) => {
      k(e.onClick, t);
    };
    return {
      n: Oy,
      classes: Vy,
      toSizeUnit: ge,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
pd.render = By;
const na = pd;
na.install = function(e) {
  e.component(na.name, na);
};
var ok = na, hd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Iy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(hd);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var gd = {
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
function Yl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ny(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
var Dy = 250, Ay = 20, {
  n: zy,
  classes: Ly
} = _("swipe"), Ry = ["onClick"];
function Uy(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: G({
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
    }, () => [e.indicator && e.length ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.length, (r, a) => (p(), P(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: G({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Ry
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
var yd = Q({
  name: "VarSwipe",
  props: gd,
  setup(e) {
    var n = M(null), r = M(0), a = L(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Iy(), v = !1, f = !1, m = -1, g, h, y, w, O, S = (E) => s.find((W) => {
      var {
        index: ee
      } = W;
      return ee.value === E;
    }), $ = () => {
      e.loop && (o.value >= 0 && S(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && S(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, I = (E) => {
      var W = on(E) ? E : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: ee
      } = e;
      return W <= -1 ? ee ? -1 : 0 : W >= d.value ? ee ? d.value : d.value - 1 : W;
    }, T = (E) => {
      var {
        loop: W
      } = e;
      return E === -1 ? W ? d.value - 1 : 0 : E === d.value ? W ? 0 : d.value - 1 : E;
    }, D = (E) => {
      var {
        loop: W
      } = e;
      return E < 0 ? W ? d.value - 1 : 0 : E > d.value - 1 ? W ? 0 : d.value - 1 : E;
    }, b = (E) => {
      var W = o.value >= r.value, ee = o.value <= -t.value, se = 0, de = -(t.value - r.value);
      l.value = !0, (W || ee) && (l.value = !0, o.value = ee ? se : de, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), io(() => {
        l.value = !1, k(E);
      });
    }, V = () => {
      v || (i.value = D(U(e.initialIndex)), v = !0);
    }, j = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (R(), m = window.setTimeout(() => {
        N(), j();
      }, U(E)));
    }, R = () => {
      m && clearTimeout(m);
    }, K = (E, W) => {
      if (E > W && E > 10)
        return "horizontal";
      if (W > E && W > 10)
        return "vertical";
    }, X = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: W,
          clientY: ee
        } = E.touches[0];
        g = W, h = ee, y = performance.now(), f = !0, R(), b(() => {
          l.value = !0;
        });
      }
    }, te = (E) => {
      var {
        touchable: W,
        vertical: ee
      } = e;
      if (!(!f || !W)) {
        var {
          clientX: se,
          clientY: de
        } = E.touches[0], we = Math.abs(se - g), Oe = Math.abs(de - h), dn = K(we, Oe), re = ee ? "vertical" : "horizontal";
        if (dn === re) {
          E.preventDefault();
          var ue = w !== void 0 ? se - w : 0, me = O !== void 0 ? de - O : 0;
          w = se, O = de, o.value += ee ? me : ue, $();
        }
      }
    }, B = () => {
      if (f) {
        var {
          vertical: E,
          onChange: W
        } = e, ee = E ? O < h : w < g, se = Math.abs(E ? h - O : g - w), de = performance.now() - y <= Dy && se >= Ay, we = de ? I(ee ? i.value + 1 : i.value - 1) : I();
        f = !1, l.value = !1, w = void 0, O = void 0, o.value = we * -r.value;
        var Oe = i.value;
        i.value = T(we), j(), Oe !== i.value && k(W, i.value);
      }
    }, C = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((E) => {
        E.setTranslate(0);
      }), j(), setTimeout(() => {
        l.value = !1;
      }));
    }, N = (E) => {
      if (!(d.value <= 1)) {
        V();
        var {
          loop: W,
          onChange: ee
        } = e, se = i.value;
        i.value = D(se + 1), (E == null ? void 0 : E.event) !== !1 && k(ee, i.value), b(() => {
          if (se === d.value - 1 && W) {
            S(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          se !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, J = (E) => {
      if (!(d.value <= 1)) {
        V();
        var {
          loop: W,
          onChange: ee
        } = e, se = i.value;
        i.value = D(se - 1), (E == null ? void 0 : E.event) !== !1 && k(ee, i.value), b(() => {
          if (se === 0 && W) {
            S(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          se !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, H = (E, W) => {
      if (!(d.value <= 1 || E === i.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var ee = E > i.value ? N : J, se = Math.abs(E - i.value);
        Array.from({
          length: se
        }).forEach((de, we) => {
          ee({
            event: we === se - 1 ? W == null ? void 0 : W.event : !1
          });
        });
      }
    }, A = {
      size: r,
      vertical: a
    };
    return u(A), ie(() => d.value, /* @__PURE__ */ Ny(function* () {
      yield Rn(), V(), C();
    })), Mr(C), er(R), rt(R), Un(() => window, "resize", C), {
      n: zy,
      classes: Ly,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: X,
      handleTouchmove: te,
      handleTouchend: B,
      next: N,
      prev: J,
      to: H,
      resize: C,
      toNumber: U
    };
  }
});
yd.render = Uy;
const Xn = yd;
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ik = Xn;
function Fy() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = sn(hd);
  return e || On("SwipeItem", "<var-swipe-item/> must in <var-swipe/>"), {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: Hy
} = _("swipe-item");
function Yy(e, n) {
  return p(), P(
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
var bd = Q({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Fy(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Hy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
bd.render = Yy;
const Kn = bd;
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
var lk = Kn;
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}
var jy = ci({
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
}, Je(gd, ["loop", "indicator", "onChange"]), Je(Vt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: jl,
  classes: Wy
} = _("image-preview"), Po = 12, Wl = 200, Gy = 350, Gl = 200, qy = 500, Xy = ["onTouchstart"], Ky = ["src", "alt"];
function Zy(e, n) {
  var r = ae("var-swipe-item"), a = ae("var-swipe"), t = ae("var-icon"), o = ae("var-popup");
  return p(), ye(
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
      default: ve(() => [Z(
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
          default: ve(() => [(p(!0), P(
            Ve,
            null,
            Ue(e.images, (l, i) => (p(), ye(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [z(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: G({
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
                  },
                  [z(
                    "img",
                    {
                      class: c(e.classes(e.n("image"), [e.isPreventDefault, e.n("--prevent")])),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Ky
                  )],
                  46,
                  Xy
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
            }, () => [e.indicator && e.images.length > 1 ? (p(), P(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ne(i + 1) + " / " + ne(s),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), Y(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), ye(
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
      )) : x("v-if", !0)]), z(
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
var wd = Q({
  name: "VarImagePreview",
  components: {
    VarSwipe: Xn,
    VarSwipeItem: Kn,
    VarPopup: kn,
    VarIcon: Pe
  },
  inheritAttrs: !1,
  props: jy,
  setup(e) {
    var n = M(!1), r = L(() => {
      var {
        images: B,
        current: C
      } = e, N = B.findIndex((J) => J === C);
      return N >= 0 ? N : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, v = null, f = null, m = !1, g = L(() => {
      var {
        imagePreventDefault: B,
        show: C
      } = e;
      return C && B;
    }), h = (B, C) => {
      var {
        clientX: N,
        clientY: J
      } = B, {
        clientX: H,
        clientY: A
      } = C;
      return Math.abs(Math.sqrt(Math.pow(H - N, 2) + Math.pow(A - J, 2)));
    }, y = (B, C) => ({
      clientX: B.clientX,
      clientY: B.clientY,
      timestamp: performance.now(),
      target: C
    }), w = () => {
      a.value = U(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Gl);
    }, O = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, S = (B) => d ? h(d, B) <= Po && B.timestamp - d.timestamp <= Wl && d.target === B.target : !1, $ = (B) => !B || !u || !d ? !1 : h(u, d) <= Po && performance.now() - d.timestamp < Gy && (B === u.target || B.parentNode === u.target), I = () => {
      window.clearTimeout(f), m = !1, u = null;
    }, T = (B) => {
      if (window.clearTimeout(f), m) {
        m = !1;
        return;
      }
      var C = $(B.target);
      v = window.setTimeout(() => {
        C && X(), u = null;
      }, Wl);
    }, D = (B, C) => {
      window.clearTimeout(v), window.clearTimeout(f);
      var N = y(B.touches[0], B.currentTarget);
      if (u = N, f = window.setTimeout(() => {
        var {
          onLongPress: J
        } = e;
        m = !0, k(J, C);
      }, qy), S(N)) {
        a.value > 1 ? O() : w();
        return;
      }
      d = N;
    }, b = (B) => {
      var {
        offsetWidth: C,
        offsetHeight: N
      } = B, {
        naturalWidth: J,
        naturalHeight: H
      } = B.querySelector("." + jl("image"));
      return {
        width: C,
        height: N,
        imageRadio: H / J,
        rootRadio: N / C,
        zoom: U(e.zoom)
      };
    }, V = (B) => {
      var {
        zoom: C,
        imageRadio: N,
        rootRadio: J,
        width: H,
        height: A
      } = b(B);
      if (!N)
        return 0;
      var E = N > J ? A / N : H;
      return Math.max(0, (C * E - H) / 2) / C;
    }, j = (B) => {
      var {
        zoom: C,
        imageRadio: N,
        rootRadio: J,
        width: H,
        height: A
      } = b(B);
      if (!N)
        return 0;
      var E = N > J ? A : H * N;
      return Math.max(0, (C * E - A) / 2) / C;
    }, R = (B, C, N) => B + C >= N ? N : B + C <= -N ? -N : B + C, K = (B) => {
      if (d) {
        var C = B.currentTarget, N = y(B.touches[0], C);
        if (h(N, d) > Po && window.clearTimeout(f), a.value > 1) {
          var J = N.clientX - d.clientX, H = N.clientY - d.clientY, A = V(C), E = j(C);
          t.value = R(t.value, J, A), o.value = R(o.value, H, E);
        }
        d = N;
      }
    }, X = () => {
      if (a.value > 1) {
        O(), setTimeout(() => k(e["onUpdate:show"], !1), Gl);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, te = (B) => {
      e.imagePreventDefault && e.show && B.preventDefault();
    };
    return Un(() => document, "contextmenu", te), ie(() => e.show, (B) => {
      n.value = B;
    }, {
      immediate: !0
    }), {
      n: jl,
      classes: Wy,
      isPreventDefault: g,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: D,
      handleTouchmove: K,
      handleTouchend: T,
      handleTouchcancel: I,
      close: X
    };
  }
});
wd.render = Zy;
const Cr = wd;
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
function Jy(e) {
  return e === void 0 && (e = {}), Fe(e) ? ct({}, mt, {
    images: [e]
  }) : Te(e) ? ct({}, mt, {
    images: e
  }) : ct({}, mt, e);
}
function Ln(e) {
  if (tt()) {
    Ln.close();
    var n = Jy(e), r = Ae(n);
    r.teleport = "body", sr = r;
    var {
      unmountInstance: a
    } = ot(Cr, r, {
      onClose: () => k(r.onClose),
      onClosed: () => {
        k(r.onClosed), a(), sr === r && (sr = null);
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
Ln.close = () => {
  if (sr != null) {
    var e = sr;
    sr = null, Ne().then(() => {
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
var sk = Cr, Gt = {
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
var {
  n: Qy,
  classes: _y
} = _("sticky");
function xy(e, n) {
  return p(), P(
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
    [z(
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
var Cd = Q({
  name: "VarSticky",
  props: Gt,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = L(() => !e.disabled && e.cssMode), v = L(() => !e.disabled && !e.cssMode && a.value), f = L(() => je(e.offsetTop)), m, g = () => {
      var {
        cssMode: S,
        disabled: $
      } = e;
      if (!$) {
        var I = 0;
        if (m !== window) {
          var {
            top: T
          } = m.getBoundingClientRect();
          I = T;
        }
        var D = r.value, b = n.value, {
          top: V,
          left: j
        } = b.getBoundingClientRect(), R = V - I;
        return R <= f.value ? (S || (l.value = b.offsetWidth + "px", i.value = b.offsetHeight + "px", t.value = I + f.value + "px", o.value = j + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: R,
          isFixed: !1
        });
      }
    }, h = () => {
      if (m) {
        var S = g();
        S && k(e.onScroll, S.offsetTop, S.isFixed);
      }
    }, y = /* @__PURE__ */ function() {
      var S = Xl(function* () {
        a.value = !1, yield nf(), g();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var S = Xl(function* () {
        yield Rn(), m = Tr(n.value), m !== window && m.addEventListener("scroll", h), h();
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), O = () => {
      m !== window && m.removeEventListener("scroll", h);
    };
    return ie(() => e.disabled, y), ln(w), rt(O), er(O), Un(() => window, "scroll", h), Un(() => window, "resize", y), {
      n: Qy,
      classes: _y,
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
      toNumber: U
    };
  }
});
Cd.render = xy;
const Zn = Cd;
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
var uk = Zn, Sd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function eb() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(Sd);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function nb() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Sd);
  return r || On("IndexAnchor", 'You should use this component in "IndexBar"'), {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var rb = {
  index: {
    type: [Number, String]
  }
}, {
  n: ab,
  classes: tb
} = _("index-anchor");
function ob(e, n) {
  return p(), ye(
    at(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [z(
        "div",
        Be({
          class: e.n()
        }, e.$attrs),
        [Y(e.$slots, "default", {}, () => [Ce(
          ne(e.name),
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
var kd = Q({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Zn
  },
  inheritAttrs: !1,
  props: rb,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = nb(), t = M(0), o = M(!1), l = L(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, g = (y) => {
      o.value = y;
    }, h = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: g
    };
    return a(h), {
      n: ab,
      classes: tb,
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
kd.render = ob;
const ra = kd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var dk = ra, ib = {
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
function Kl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Rt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: lb,
  classes: sb
} = _("index-bar"), ub = ["onClick"];
function db(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [Y(e.$slots, "default"), z(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.anchorNameList, (r) => (p(), P(
          "li",
          {
            key: r,
            class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: G({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          ne(r),
          15,
          ub
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
var $d = Q({
  name: "VarIndexBar",
  props: ib,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = eb(), t = M(""), o = M(null), l = M([]), i = M(), s = L(() => e.sticky), u = L(() => e.stickyCssMode || e.cssMode), d = L(() => je(e.stickyOffsetTop)), v = L(() => e.zIndex), f = null, m = !1, g = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(g);
    var h = (D, b) => {
      var V = ki(D) ? D.name.value : D;
      V === i.value || V === void 0 || (i.value = V, (b == null ? void 0 : b.event) !== !1 && k(e.onChange, V));
    }, y = () => {
      if ($i(f))
        return 0;
      var {
        top: D
      } = pn(f), {
        scrollTop: b
      } = f, {
        top: V
      } = pn(o.value);
      return b - D + V;
    }, w = () => {
      var D = pt(f), b = f === window ? document.body.scrollHeight : f.scrollHeight, V = y();
      r.forEach((j, R) => {
        var K = j.ownTop.value, X = D - K + d.value - V, te = R === r.length - 1 ? b : r[R + 1].ownTop.value - j.ownTop.value;
        j.setDisabled(!0), X >= 0 && X < te && t.value === "" && (j.setDisabled(!1), h(j));
      });
    }, O = /* @__PURE__ */ function() {
      var D = Rt(function* (b) {
        var {
          anchorName: V,
          manualCall: j = !1,
          options: R
        } = b;
        if (j && k(e.onClick, V), !(V === i.value && !m)) {
          var K = r.find((C) => {
            var {
              name: N
            } = C;
            return V === N.value;
          });
          if (K) {
            var X = y(), te = K.ownTop.value - d.value + X, B = Pi(f);
            t.value = V, h(V, R), yield ht(f, {
              left: B,
              top: te,
              animation: ys,
              duration: U(e.duration)
            }), io(() => {
              t.value = "";
            });
          }
        }
      });
      return function(V) {
        return D.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var D = Rt(function* () {
        yield Rn(), f = Tr(o.value);
      });
      return function() {
        return D.apply(this, arguments);
      };
    }(), $ = () => {
      f.addEventListener("scroll", w);
    }, I = () => {
      f.removeEventListener("scroll", w);
    }, T = (D, b) => {
      wn(() => O({
        anchorName: D,
        options: b
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ Rt(function* () {
      yield Rn(), r.forEach((D) => {
        var {
          name: b,
          setOwnTop: V
        } = D;
        b.value && l.value.push(b.value), V();
      });
    })), ln(/* @__PURE__ */ Rt(function* () {
      yield S(), $();
    })), kt(I), er(() => {
      m = !0, I();
    }), Mr(() => {
      !m || i.value === void 0 || (O({
        anchorName: i.value,
        options: {
          event: !1
        }
      }), m = !1);
    }), {
      n: lb,
      classes: sb,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: U,
      scrollTo: T,
      anchorClick: O
    };
  }
});
$d.render = db;
const aa = $d;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var vk = aa;
function vb(e) {
  return ["small", "normal"].includes(e);
}
function fb(e) {
  return ["outlined", "standard"].includes(e);
}
var Wi = {
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
    validator: vb
  },
  variant: {
    type: String,
    default: "standard",
    validator: fb
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
  alwaysCustomPlaceholder: {
    type: Boolean,
    default: !0
  },
  onClick: F(),
  onClear: F()
}, {
  n: Zl,
  classes: cb
} = _("field-decorator"), mb = ["for"];
function pb(e, n) {
  var r = ae("var-icon");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.variant), [e.size === "small", e.n("--small")], [e.disabled, e.n("--disabled")])),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        ref: "controllerEl",
        style: G({
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
        [Y(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          ref: "middleEl",
          class: c(e.classes(e.n("middle"), [!e.hint, e.n("--middle-non-hint")]))
        },
        [Y(e.$slots, "default")],
        2
        /* CLASS */
      ), (e.hint || e.alwaysCustomPlaceholder) && e.placeholderTransform ? (p(), P(
        "label",
        {
          key: 0,
          class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [!e.hint, e.n("--placeholder-non-hint")], e.computePlaceholderState())),
          style: G({
            color: e.color,
            transform: e.placeholderTransform,
            maxWidth: e.placeholderMaxWidth
          }),
          for: e.id
        },
        [z(
          "span",
          null,
          ne(e.placeholder),
          1
          /* TEXT */
        )],
        14,
        mb
      )) : x("v-if", !0), e.variant === "outlined" ? (p(), P(
        "span",
        {
          key: 1,
          ref: "placeholderTextEl",
          class: c([e.n("placeholder-text"), e.n("$--ellipsis")])
        },
        ne(e.placeholder),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0), z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--icon-non-hint")]))
        },
        [e.clearable && !e.isEmpty(e.value) ? (p(), ye(
          r,
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
    ), e.line ? (p(), P(
      Ve,
      {
        key: 0
      },
      [e.variant === "outlined" ? (p(), P(
        "fieldset",
        {
          key: 0,
          class: c(e.classes(e.n("line"), [e.isFocus, e.n("--line-focus")], [e.errorMessage, e.n("--line-error")], [e.formDisabled || e.disabled, e.n("--line-disabled")])),
          style: G({
            borderColor: e.color
          })
        },
        [z(
          "legend",
          {
            class: c(e.classes(e.n("line-legend"), [e.isFloating, e.n("line-legend--hint")])),
            style: G({
              width: e.legendWidth
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )) : (p(), P(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: G({
            background: e.errorMessage ? void 0 : e.blurColor
          })
        },
        [z(
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
var Td = Q({
  name: "VarFieldDecorator",
  components: {
    VarIcon: Pe
  },
  props: Wi,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(""), o = M(""), l = M(""), i = L(() => e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor), s = L(() => e.hint && (!fr(e.value) || e.isFocus)), u = () => {
      var {
        hint: m,
        value: g,
        composing: h
      } = e;
      if (!m && (!fr(g) || h))
        return Zl("--placeholder-hidden");
    }, d = () => {
      var {
        size: m,
        hint: g,
        placeholder: h,
        variant: y
      } = e;
      if (!s.value || !h) {
        var w = pn(n.value), O = pn(r.value), S = O.left - w.left + "px";
        o.value = g ? "translate(" + S + ", calc(var(--field-decorator-" + y + "-" + m + "-placeholder-translate-y) + var(--field-decorator-middle-offset-y))) scale(1)" : "translate(" + S + ", -50%)", l.value = O.width + "px";
        return;
      }
      var $ = Da(n.value), I = y === "outlined" ? "-50%" : "0";
      if (o.value = "translate(" + $.paddingLeft + ", " + I + ") scale(0.75)", y === "outlined") {
        var T = Da(a.value), D = "var(--field-decorator-outlined-" + m + "-placeholder-space)";
        t.value = "calc(" + T.width + " * 0.75 + " + D + " * 2)", l.value = "calc((100% - var(--field-decorator-outlined-" + m + "-padding-left) - var(--field-decorator-outlined-" + m + "-padding-right)) * 1.33)";
      } else
        l.value = "133%";
    }, v = (m) => {
      k(e.onClear, m);
    }, f = (m) => {
      k(e.onClick, m);
    };
    return Tt(d), ln(d), Un(() => window, "resize", d), {
      controllerEl: n,
      middleEl: r,
      placeholderTextEl: a,
      placeholderTransform: o,
      placeholderMaxWidth: l,
      color: i,
      legendWidth: t,
      isFloating: s,
      computePlaceholderState: u,
      n: Zl,
      classes: cb,
      isEmpty: fr,
      handleClear: v,
      handleClick: f
    };
  }
});
Td.render = pb;
const Pd = Td;
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mi.apply(this, arguments);
}
function hb(e) {
  return ["text", "password", "number", "tel", "email"].includes(e);
}
var gb = mi({
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
    validator: hb
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
}, Je(Wi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: yb,
  classes: bb
} = _("input"), wb = ["placeholder", "enterkeyhint"], Cb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "rows", "enterkeyhint", "inputmode"], Sb = ["id", "disabled", "type", "value", "placeholder", "maxlength", "enterkeyhint", "inputmode"];
function kb(e, n) {
  var r = ae("var-field-decorator"), a = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      onMousedown: n[15] || (n[15] = function() {
        return e.handleMousedown && e.handleMousedown(...arguments);
      })
    },
    [Z(
      r,
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
        alwaysCustomPlaceholder: !1,
        onClick: e.handleClick,
        onClear: e.handleClear
      })),
      {
        "prepend-icon": ve(() => [Y(e.$slots, "prepend-icon")]),
        "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
        default: ve(() => [e.normalizedType === "password" ? (p(), P(
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
          wb
        )) : x("v-if", !0), e.textarea ? (p(), P(
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
          },
          `
      `,
          46,
          Cb
        )) : (p(), P(
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
          },
          null,
          46,
          Sb
        ))]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ), Z(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText,
        onMousedown: n[14] || (n[14] = Pn(() => {
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
var Od = Q({
  name: "VarInput",
  components: {
    VarFormDetails: _e,
    VarFieldDecorator: Pd
  },
  props: gb,
  setup(e) {
    var n = M("var-input-" + nt().uid), r = M(null), a = M(!1), t = M(!1), o = L(() => e.type === "number" ? "text" : e.type), l = L(() => {
      var {
        maxlength: H,
        modelValue: A
      } = e;
      return H ? fr(A) ? "0 / " + H : String(A).length + "/" + H : "";
    }), i = L(() => e.disabled || e.readonly ? "" : "text"), s = L(() => {
      var {
        hint: H,
        blurColor: A,
        focusColor: E
      } = e;
      if (!H)
        return v.value ? "var(--field-decorator-error-color)" : a.value ? E || "var(--field-decorator-focus-color)" : A || "var(--field-decorator-blur-color)";
    }), {
      bindForm: u,
      form: d
    } = Mn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: g
    } = Vn(), h = (H) => {
      Ne(() => {
        var {
          validateTrigger: A,
          rules: E,
          modelValue: W
        } = e;
        f(A, H, E, W);
      });
    }, y = (H) => {
      a.value = !0, k(e.onFocus, H), h("onFocus");
    }, w = (H) => {
      a.value = !1, k(e.onBlur, H), h("onBlur");
    }, O = (H) => {
      var A = H.target, {
        value: E
      } = A;
      return e.type === "number" && (E = V(E)), R(j(E));
    }, S = () => {
      t.value = !0;
    }, $ = (H) => {
      t.value && (t.value = !1, H.target.dispatchEvent(new Event("input")));
    }, I = (H) => {
      if (!t.value) {
        var A = O(H);
        k(e["onUpdate:modelValue"], A), k(e.onInput, A, H), h("onInput");
      }
    }, T = (H) => {
      var A = O(H);
      k(e.onChange, A, H), h("onChange");
    }, D = () => {
      var {
        disabled: H,
        readonly: A,
        clearable: E,
        onClear: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || H || A || !E || (k(e["onUpdate:modelValue"], ""), k(W, ""), h("onClear"));
    }, b = (H) => {
      var {
        disabled: A,
        onClick: E
      } = e;
      d != null && d.disabled.value || A || (k(E, H), h("onClick"));
    }, V = (H) => {
      var A = H.indexOf("-"), E = H.indexOf(".");
      return A > -1 && (H = A === 0 ? "-" + H.replace(/-/g, "") : H.replace(/-/g, "")), E > -1 && (H = H.slice(0, E + 1) + H.slice(E).replace(/\./g, "")), H.replace(/[^-0-9.]/g, "");
    }, j = (H) => e.modelModifiers.trim ? H.trim() : H, R = (H) => e.maxlength ? H.slice(0, U(e.maxlength)) : H, K = (H) => {
      var {
        disabled: A,
        readonly: E
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || A || E || H.stopPropagation();
    };
    function X(H) {
      var {
        disabled: A
      } = e;
      d != null && d.disabled.value || A || H.target === r.value || (C(), H.preventDefault());
    }
    var te = () => {
      k(e["onUpdate:modelValue"], ""), g();
    }, B = () => m(e.rules, e.modelValue), C = () => {
      var H;
      (H = r.value) == null || H.focus();
    }, N = () => {
      r.value.blur();
    }, J = {
      reset: te,
      validate: B,
      resetValidation: g
    };
    return k(u, J), ln(() => {
      e.autofocus && C();
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
      n: yb,
      classes: bb,
      isEmpty: fr,
      handleFocus: y,
      handleBlur: w,
      handleInput: I,
      handleChange: T,
      handleClear: D,
      handleClick: b,
      handleTouchstart: K,
      handleCompositionStart: S,
      handleCompositionEnd: $,
      handleMousedown: X,
      validate: B,
      resetValidation: g,
      reset: te,
      focus: C,
      blur: N
    };
  }
});
Od.render = kb;
const Sr = Od;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var fk = Sr;
function $b(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Tb(e) {
  return ["always", "hover", "none"].includes(e);
}
var Pb = {
  type: {
    type: String,
    default: "default",
    validator: $b
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
    validator: Tb
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
  n: Ob,
  classes: Vb
} = _("link");
function Mb(e, n) {
  return p(), ye(
    at(e.tag),
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
var Vd = Q({
  name: "VarLink",
  props: Pb,
  setup(e) {
    var n = L(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = L(() => {
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
      o || k(l, t);
    };
    return {
      n: Ob,
      classes: Vb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ge
    };
  }
});
Vd.render = Mb;
const ta = Vd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var ck = ta, Eb = {
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
}, Md = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Bb() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Md);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
var Ed = Symbol("TAB_ITEM_BIND_LIST_KEY");
function Ib() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(Md);
  return n || On("TabItem", "<var-tab-item/> must in <var-tabs-items/>"), {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
function Nb() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(Ed);
  return {
    length: r,
    lists: e,
    bindLists: n
  };
}
function Db() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(Ed);
  return {
    index: r,
    tabItem: e,
    bindTabItem: n
  };
}
function Jl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ab(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: zb,
  classes: Lb
} = _("list");
function Rb(e, n) {
  var r = ae("var-loading"), a = Ie("ripple");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [Y(e.$slots, "default"), e.loading ? Y(e.$slots, "loading", {
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
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Z(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? Y(e.$slots, "finished", {
      key: 1
    }, () => [z(
      "div",
      {
        class: c(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? Y(e.$slots, "error", {
      key: 2
    }, () => [ke((p(), P(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [Ce(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
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
var Bd = Q({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: Dn
  },
  props: Eb,
  setup(e) {
    var {
      tabItem: n,
      bindTabItem: r
    } = Db(), a = M(null), t = M(null), o, l = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, i = () => {
      var {
        bottom: d
      } = pn(o), {
        bottom: v
      } = pn(t.value);
      return Math.floor(v) - je(e.offset) <= d;
    }, s = () => {
      o.removeEventListener("scroll", u);
    }, u = /* @__PURE__ */ function() {
      var d = Ab(function* () {
        yield Ne(), !(e.loading || e.finished || e.error || (n == null ? void 0 : n.current.value) === !1 || !i()) && l();
      });
      return function() {
        return d.apply(this, arguments);
      };
    }();
    return k(r, {}), n && ie(() => n.current.value, u), ie(() => [e.loading, e.error, e.finished], u), ln(() => {
      o = Tr(a.value), o.addEventListener("scroll", u), e.immediateCheck && u();
    }), er(s), rt(s), {
      pack: Ze,
      listEl: a,
      detectorEl: t,
      dt: oo,
      isNumber: on,
      load: l,
      check: u,
      n: zb,
      classes: Lb
    };
  }
});
Bd.render = Rb;
const oa = Bd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var mk = oa, Ub = {
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
  classes: Fb,
  n: Ql
} = _("loading-bar");
const Hb = Q({
  name: "VarLoadingBar",
  props: Ub,
  setup(e) {
    return () => Z("div", {
      class: Fb(Ql(), [e.error, Ql("--error")]),
      style: {
        zIndex: bn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ge(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ge(e.top)
      }
    }, null);
  }
});
var Id, Nd, Co, Dd, _l, Ad = {}, Yb = {
  value: 0,
  opacity: 0,
  error: !1
}, Qe = Ae(Yb), jb = (e) => {
  Object.assign(Qe, e);
}, Wb = (e) => {
  Object.assign(Qe, e), Ad = e;
}, Gb = () => {
  Object.keys(Ad).forEach((e) => {
    Qe[e] !== void 0 && (Qe[e] = void 0);
  });
}, zd = () => {
  _l || (_l = !0, ot(Hb, Qe));
}, Gi = () => {
  Id = window.setTimeout(() => {
    if (!(Qe.value >= 95)) {
      var e = Math.random();
      Qe.value < 70 && (e = Math.round(5 * Math.random())), Qe.value += e, Gi();
    }
  }, 200);
}, qi = () => {
  window.clearTimeout(Nd), window.clearTimeout(Id), window.clearTimeout(Co), window.clearTimeout(Dd);
}, qb = () => {
  qi(), Qe.error = !1, Qe.value = 0, zd(), Co = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), Gi();
}, Ld = () => {
  qi(), Qe.value = 100, Co = window.setTimeout(() => {
    Qe.opacity = 0, Nd = window.setTimeout(() => {
      Qe.error = !1;
    }, 250);
  }, 300);
}, Xb = () => {
  qi(), Qe.error = !0, Qe.value === 100 && (Qe.value = 0), zd(), Co = window.setTimeout(() => {
    Qe.opacity = 1;
  }, 200), Gi(), Dd = window.setTimeout(Ld, 300);
}, Rd = {
  start: qb,
  finish: Ld,
  error: Xb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: jb,
  setDefaultOptions: Wb,
  resetDefaultOptions: Gb
}, pk = Rd;
const pi = Rd;
function Kb(e) {
  return ["click", "hover"].includes(e);
}
function Zb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Jb = {
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
    validator: Kb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Zb
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
  n: Qb,
  classes: _b
} = _("menu");
function xb(e, n) {
  return p(), P(
    "div",
    {
      ref: "host",
      class: c(e.n()),
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
    [Y(e.$slots, "default"), (p(), ye(
      Ra,
      {
        to: e.teleport
      },
      [Z(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed,
          persisted: ""
        },
        {
          default: ve(() => [ke(z(
            "div",
            {
              ref: "popover",
              style: G({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color")], [e.defaultStyle, e.formatElevation(e.elevation, 3)])),
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
          ), [[$r, e.show]])]),
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
var Ud = Q({
  name: "VarMenu",
  props: Jb,
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
    } = vd(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      formatElevation: gn,
      toSizeUnit: ge,
      n: Qb,
      classes: _b,
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
Ud.render = xb;
const Jn = Ud;
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
var hk = Jn, Fd = Symbol("SELECT_BIND_OPTION_KEY");
function e0() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = un(Fd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function n0() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = sn(Fd);
  return r || On("Option", "<var-option/> must in <var-select/>"), {
    index: e,
    select: n,
    bindSelect: r
  };
}
var r0 = {
  label: {},
  value: {}
}, {
  n: a0,
  classes: t0
} = _("option");
function o0(e, n) {
  var r = ae("var-checkbox"), a = Ie("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: G({
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
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
    ), e.multiple ? (p(), ye(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Pn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : x("v-if", !0), z(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [Y(e.$slots, "default", {}, () => [Ce(
        ne(e.label),
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
var Hd = Q({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: hr
  },
  props: r0,
  setup(e) {
    var n = M(!1), r = L(() => n.value), a = L(() => e.label), t = L(() => e.value), {
      select: o,
      bindSelect: l
    } = n0(), {
      multiple: i,
      focusColor: s,
      onSelect: u,
      computeLabel: d
    } = o, v = () => {
      n.value = !n.value, u(g);
    }, f = () => u(g), m = (h) => {
      n.value = h;
    }, g = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return ie([() => e.label, () => e.value], d), l(g), {
      n: a0,
      classes: t0,
      optionSelected: n,
      multiple: i,
      focusColor: s,
      handleClick: v,
      handleSelect: f
    };
  }
});
Hd.render = o0;
const ia = Hd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var gk = ia, i0 = {
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
function l0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: xl
} = _("overlay");
const la = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: i0,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Mt(() => e.show, 1), {
      disabled: o
    } = lo(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    so(() => e.show, () => e.lockScroll);
    var i = () => Z("div", Be({
      class: xl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [k(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return Z(Le, {
        name: xl("--fade")
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
        return Z(Ra, {
          to: u,
          disabled: o.value
        }, l0(d = s()) ? d : {
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
var yk = la, s0 = {
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
  n: u0,
  classes: d0
} = _("pagination"), v0 = ["item-mode", "onClick"];
function f0(e, n) {
  var r = ae("var-icon"), a = ae("var-input"), t = ae("var-cell"), o = ae("var-menu"), l = Ie("ripple");
  return p(), P(
    "ul",
    {
      class: c(e.n())
    },
    [ke((p(), P(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [Y(e.$slots, "prev", {}, () => [Z(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), P(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [Z(
        a,
        {
          "var-pagination-cover": "",
          hint: !1,
          disabled: e.disabled,
          modelValue: e.simpleCurrentValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleCurrentValue = i),
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleCurrentValue, i)),
          onKeydown: n[3] || (n[3] = Qi((i) => e.setPage("simple", e.simpleCurrentValue, i), ["enter"]))
        },
        null,
        8,
        ["disabled", "modelValue"]
      ), z("span", null, [Ce(
        " / " + ne(e.pageCount) + " ",
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
    )) : (p(!0), P(
      Ve,
      {
        key: 1
      },
      Ue(e.pageList, (i, s) => ke((p(), P(
        "li",
        {
          key: s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.formatElevation(e.elevation, 2), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [Ce(
          ne(i),
          1
          /* TEXT */
        )],
        10,
        v0
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((p(), P(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.formatElevation(e.elevation, 2)])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [Y(e.$slots, "next", {}, () => [Z(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), P(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [Z(
        o,
        {
          disabled: e.disabled,
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(p(!0), P(
            Ve,
            null,
            Ue(e.sizeOption, (i, s) => ke((p(), ye(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [Ce(
                  ne(i) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
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
          default: ve(() => [z(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = Pn(function() {
                return e.showMenu && e.showMenu(...arguments);
              }, ["stop"]))
            },
            [z(
              "span",
              null,
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
              /* TEXT */
            ), Z(
              r,
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (p(), P(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [Ce(
        ne(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Z(
        a,
        {
          modelValue: e.quickJumperValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.quickJumperValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.quickJumperValue, i)),
          onKeydown: n[9] || (n[9] = Qi((i) => e.setPage("quick", e.quickJumperValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (p(), P(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ne(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Yd = Q({
  name: "VarPagination",
  components: {
    VarMenu: Jn,
    VarIcon: Pe,
    VarCell: pr,
    VarInput: Sr
  },
  directives: {
    Ripple: We
  },
  props: s0,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(U(e.current) || 1), i = M(U(e.size) || 10), s = M([]), u = L(() => Math.ceil(e.maxPagerCount / 2)), d = L(() => Math.ceil(U(e.total) / U(i.value))), v = L(() => {
      var $ = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, U(e.total));
      return [$, I];
    }), f = L(() => e.showTotal ? e.showTotal(U(e.total), v.value) : ""), m = ($, I) => on($) ? !1 : I === 1 ? t.value : o.value, g = ($, I) => on($) ? "basic" : I === 1 ? "head" : "tail", h = ($, I) => {
      if (!($ === l.value || e.disabled)) {
        if ($ === "...") {
          l.value = I === 1 ? Math.max(l.value - e.maxPagerCount, 1) : Math.min(l.value + e.maxPagerCount, d.value);
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
        on($) && (l.value = $);
      }
    }, y = () => {
      e.disabled || (n.value = !0);
    }, w = ($) => {
      i.value = $, n.value = !1;
      var I = O(l.value);
      a.value = String(I), l.value = I;
    }, O = ($) => $ > d.value ? d.value : $ < 1 ? 1 : $, S = ($, I, T) => {
      T.target.blur();
      var D = O(U(I));
      a.value = String(D), l.value = D, $ === "quick" && (r.value = "");
    };
    return ie([() => e.current, () => e.size], ($) => {
      var [I, T] = $;
      l.value = U(I) || 1, i.value = U(T || 10);
    }), ie([l, i, d], ($, I) => {
      var [T, D, b] = $, [V, j] = I, R = [], {
        maxPagerCount: K,
        total: X,
        onChange: te
      } = e, B = Math.ceil(U(X) / U(j)), C = b - (K - u.value) - 1;
      if (a.value = "" + T, b - 2 > K) {
        if (V === void 0 || b !== B)
          for (var N = 2; N < K + 2; N++)
            R.push(N);
        if (T <= K && T < C) {
          R = [];
          for (var J = 1; J < K + 1; J++)
            R.push(J + 1);
          t.value = !0, o.value = !1;
        }
        if (T > K && T < C) {
          R = [];
          for (var H = 1; H < K + 1; H++)
            R.push(T + H - u.value);
          t.value = T === 2 && K === 1, o.value = !1;
        }
        if (T >= C) {
          R = [];
          for (var A = 1; A < K + 1; A++)
            R.push(b - (K - A) - 1);
          t.value = !1, o.value = !0;
        }
        R = [1, "...", ...R, "...", b];
      } else
        for (var E = 1; E <= b; E++)
          R.push(E);
      s.value = R, V != null && b > 0 && k(te, T, D), k(e["onUpdate:current"], T), k(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: u0,
      classes: d0,
      pack: Ze,
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
      clickItem: h,
      showMenu: y,
      clickSize: w,
      setPage: S,
      toNumber: U,
      formatElevation: gn
    };
  }
});
Yd.render = f0;
const sa = Yd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var bk = sa, c0 = {
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
  n: m0,
  classes: p0
} = _("paper");
function h0(e, n) {
  var r = Ie("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.formatElevation(e.elevation, 2), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: G({
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
var jd = Q({
  name: "VarPaper",
  directives: {
    Ripple: We
  },
  props: c0,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: m0,
      classes: p0,
      formatElevation: gn,
      toSizeUnit: ge,
      handleClick: n
    };
  }
});
jd.render = h0;
const ua = jd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var wk = ua;
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
var g0 = hi({
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
  n: y0,
  classes: b0
} = _("picker"), es = 300, w0 = 15, ns = 200, C0 = 1e3, rs = 0, S0 = ["onTouchstartPassive", "onTouchmove", "onTouchend"], k0 = ["onTransitionend"], $0 = ["onClick"];
function T0(e, n) {
  var r = ae("var-button");
  return p(), ye(
    at(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ve(() => [z(
        "div",
        Be({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [Y(e.$slots, "cancel", {}, () => [Z(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [Ce(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), Y(e.$slots, "title", {}, () => [z(
            "div",
            {
              class: c(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), Y(e.$slots, "confirm", {}, () => [Z(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [Ce(
                ne(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
        )) : x("v-if", !0), z(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), P(
            Ve,
            null,
            Ue(e.scrollColumns, (a) => (p(), P(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstartPassive: (t) => e.handleTouchstart(a),
                onTouchmove: Pn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [z(
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
                [(p(!0), P(
                  Ve,
                  null,
                  Ue(a.column.texts, (t, o) => (p(), P(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: G({
                        height: e.optionHeight + "px"
                      }),
                      key: t,
                      onClick: (l) => e.handleClick(a, o)
                    },
                    [z(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      ne(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    14,
                    $0
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                k0
              )],
              42,
              S0
            ))),
            128
            /* KEYED_FRAGMENT */
          )), z(
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
          ), z(
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
var Wd = Q({
  name: "VarPicker",
  components: {
    VarButton: en,
    VarPopup: kn
  },
  inheritAttrs: !1,
  props: g0,
  setup(e) {
    var n = M([]), r = L(() => je(e.optionHeight)), a = L(() => je(e.optionCount)), t = L(() => a.value * r.value / 2 - r.value / 2), o = L(() => a.value * r.value), l = [], i = !1, s = (B, C) => {
      C.scrollEl = B;
    }, u = (B) => {
      k(e["onUpdate:show"], B);
    }, d = (B) => {
      var C = r.value + t.value, N = t.value - B.column.texts.length * r.value;
      B.translate >= C && (B.translate = C), B.translate <= N && (B.translate = N);
    }, v = (B, C) => {
      var {
        length: N
      } = B.column.texts;
      return C = C >= N ? N - 1 : C, C = C <= 0 ? 0 : C, C;
    }, f = (B, C) => {
      var N = Math.round((t.value - C) / r.value);
      return v(B, N);
    }, m = (B) => (B.translate = t.value - B.index * r.value, B.translate), g = () => {
      var B = n.value.map((N) => N.column.texts[N.index]), C = n.value.map((N) => N.index);
      return {
        texts: B,
        indexes: C
      };
    }, h = function(B, C) {
      C === void 0 && (C = 0), m(B), B.duration = C;
    }, y = (B, C, N) => {
      B.translate += Math.abs(C / N) / 3e-3 * (C < 0 ? -1 : 1);
    }, w = (B, C) => {
      i || (B.index = C, B.scrolling = !0, h(B, ns));
    }, O = (B) => {
      B.touching = !0, B.translate = ko(B.scrollEl);
    }, S = (B, C) => {
      if (C.touching) {
        i = !0, C.scrolling = !1, C.duration = 0;
        var {
          clientY: N
        } = B.touches[0], J = C.prevY !== void 0 ? N - C.prevY : 0;
        C.prevY = N, C.translate += J, d(C);
        var H = performance.now();
        H - C.momentumTime > es && (C.momentumTime = H, C.momentumPrevY = C.translate);
      }
    }, $ = (B, C) => {
      C.touching = !1, C.prevY = void 0;
      var N = C.translate - C.momentumPrevY, J = performance.now() - C.momentumTime, H = Math.abs(N) >= w0 && J <= es;
      H && y(C, N, J), C.index = f(C, C.translate);
      var A = C.translate, E = m(C);
      C.scrolling = E !== A, h(C, H ? C0 : ns), C.scrolling || R(C), wn(() => {
        i = !1;
      });
    }, I = (B) => {
      B.scrolling = !1, R(B);
    }, T = (B) => B.map((C, N) => {
      var J, H = Te(C) ? {
        texts: C
      } : C, A = {
        id: rs++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (J = H.initialIndex) != null ? J : 0,
        columnIndex: N,
        duration: 0,
        momentumTime: 0,
        column: H,
        scrollEl: null,
        scrolling: !1
      };
      return h(A), A;
    }), D = (B) => {
      var C = [];
      return b(C, B, 0, !0), C;
    }, b = function(B, C, N, J) {
      if (J === void 0 && (J = !1), Te(C) && C.length) {
        var H, A = J && (H = e.cascadeInitialIndexes[B.length]) != null ? H : 0, E = {
          id: rs++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: A,
          columnIndex: N,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: C.map((W) => W[e.textKey])
          },
          columns: C,
          scrollEl: null,
          scrolling: !1
        };
        B.push(E), h(E), b(B, E.columns[E.index].children, N + 1, J);
      }
    }, V = (B) => {
      n.value.splice(n.value.indexOf(B) + 1), b(n.value, B.columns[B.index].children, B.columnIndex + 1);
    }, j = () => {
      var {
        indexes: B
      } = g();
      return B.every((C, N) => C === l[N]);
    }, R = (B) => {
      var {
        cascade: C,
        onChange: N
      } = e;
      if (!j()) {
        C && V(B);
        var J = n.value.some((E) => E.scrolling);
        if (!J) {
          var {
            texts: H,
            indexes: A
          } = g();
          l = [...A], k(N, H, A);
        }
      }
    }, K = () => {
      if (e.cascade) {
        var B = n.value.find((C) => C.scrolling);
        B && (B.index = f(B, ko(B.scrollEl)), B.scrolling = !1, h(B), V(B));
      } else
        n.value.forEach((C) => {
          C.index = f(C, ko(C.scrollEl)), h(C);
        });
    }, X = () => {
      K();
      var {
        texts: B,
        indexes: C
      } = g();
      l = [...C], k(e.onConfirm, B, C);
    }, te = () => {
      K();
      var {
        texts: B,
        indexes: C
      } = g();
      l = [...C], k(e.onCancel, B, C);
    };
    return ie(() => e.columns, (B) => {
      n.value = e.cascade ? D(_i(B)) : T(_i(B));
      var {
        indexes: C
      } = g();
      l = [...C];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: y0,
      classes: b0,
      pack: Ze,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Le,
      setScrollEl: s,
      handlePopupUpdateShow: u,
      handleTouchstart: O,
      handleTouchmove: S,
      handleTouchend: $,
      handleTransitionend: I,
      confirm: X,
      cancel: te,
      dt: oo,
      handleClick: w
    };
  }
});
Wd.render = T0;
const kr = Wd;
var fn;
function La(e) {
  return new Promise((n) => {
    La.close();
    var r = Te(e) ? {
      columns: e
    } : e, a = Ae(r);
    a.dynamic = !0, a.teleport = "body", fn = a;
    var {
      unmountInstance: t
    } = ot(kr, a, {
      onConfirm: (o, l) => {
        k(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, fn === a && (fn = null);
      },
      onCancel: (o, l) => {
        k(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, fn === a && (fn = null);
      },
      onClose: () => {
        k(a.onClose), n({
          state: "close"
        }), fn === a && (fn = null);
      },
      onClosed: () => {
        k(a.onClosed), t(), fn === a && (fn = null);
      },
      onRouteChange: () => {
        t(), fn === a && (fn = null);
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
La.Component = kr;
La.install = function(e) {
  e.component(kr.name, kr);
};
La.close = function() {
  if (fn != null) {
    var e = fn;
    fn = null, Ne().then(() => {
      e.show = !1;
    });
  }
};
var Ck = kr;
function P0(e) {
  return ["linear", "circle"].includes(e);
}
var O0 = {
  mode: {
    type: String,
    default: "linear",
    validator: P0
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
  n: V0,
  classes: M0
} = _("progress"), Nr = 100, E0 = ["viewBox"], B0 = ["cx", "cy", "r", "stroke-width"], I0 = ["cx", "cy", "r", "stroke-width"];
function N0(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [z(
        "div",
        {
          class: c(e.n("linear-block")),
          style: G({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), P(
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
        )) : x("v-if", !0), z(
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
      ), e.label ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Ce(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), P(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), P(
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
          B0
        )) : x("v-if", !0), z(
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
          I0
        )],
        14,
        E0
      )), e.label ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [Y(e.$slots, "default", {}, () => [Ce(
          ne(e.circleProps.roundValue),
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
var Gd = Q({
  name: "VarProgress",
  props: O0,
  setup(e) {
    var n = L(() => {
      var a = U(e.value), t = a > Nr ? Nr : a, o = a > Nr ? Nr : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = L(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + je(a) + " " + je(a), i = U(o) > Nr ? Nr : Math.round(U(o)), s = (je(a) - je(t)) / 2, u = 2 * Math.PI * s, d = i / Nr * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: V0,
      classes: M0,
      toSizeUnit: ge,
      multiplySizeUnit: an,
      linearProps: n,
      circleProps: r
    };
  }
});
Gd.render = N0;
const da = Gd;
da.install = function(e) {
  e.component(da.name, da);
};
var Sk = da, D0 = {
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
function as(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ts(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: os,
  classes: A0
} = _("pull-refresh"), is = 150;
function z0(e, n) {
  var r = ae("var-icon");
  return p(), P(
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
    [z(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: G(e.controlStyle)
      },
      [Z(
        r,
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
var qd = Q({
  name: "VarPullRefresh",
  components: {
    VarIcon: Pe
  },
  props: D0,
  setup(e) {
    var n = M(0), r = M(null), a = M(null), t = M(0), o = M("-125%"), l = M("arrow-down"), i = M("default"), s = M(!1), u, d, v = 0, f = 0, m = /* @__PURE__ */ function() {
      var b = ts(function* (V) {
        if (l.value !== V)
          return l.value = V, new Promise((j) => {
            window.setTimeout(j, is);
          });
      });
      return function(j) {
        return b.apply(this, arguments);
      };
    }(), g = L(() => i.value !== "loading" && i.value !== "success" && !e.disabled), h = L(() => ({
      transform: "translate3d(0px, " + (Fe(o.value) ? o.value : o.value + "px") + ", 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), y = L(() => Math.abs(2 * n.value)), w = L(() => i.value === "success"), O = (b) => {
      var V = "classList" in u ? u : document.body;
      V.classList[b](os() + "--lock");
    }, S = (b) => {
      if (n.value === 0) {
        var {
          width: V
        } = a.value.getBoundingClientRect();
        n.value = -(V + V * 0.25);
      }
      v = b.touches[0].clientY, f = 0, d = Tr(b.target);
    }, $ = (b) => {
      if (g.value && !(d !== u && pt(d) > 0)) {
        var V = pt(u);
        if (!(V > 0)) {
          var j = V === 0, R = b.touches[0];
          f = R.clientY - v, j && f >= 0 && b.preventDefault(), i.value !== "pulling" && (i.value = "pulling", t.value = b.touches[0].clientY), j && o.value > n.value && O("add");
          var K = (b.touches[0].clientY - t.value) / 2 + n.value;
          o.value = K >= y.value ? y.value : K, m(o.value >= y.value * 0.2 ? "refresh" : "arrow-down");
        }
      }
    }, I = /* @__PURE__ */ function() {
      var b = ts(function* () {
        g.value && (s.value = !0, o.value >= y.value * 0.2 ? (yield m("refresh"), i.value = "loading", o.value = y.value * 0.3, k(e["onUpdate:modelValue"], !0), Ne(() => {
          k(e.onRefresh);
        }), O("remove")) : (i.value = "loosing", l.value = "arrow-down", o.value = n.value, setTimeout(() => {
          s.value = !1, O("remove");
        }, U(e.animationDuration))), d = null);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), T = () => {
      u = e.target ? ws(e.target, "PullRefresh") : Tr(r.value);
    }, D = () => {
      setTimeout(() => {
        i.value = "default", l.value = "arrow-down", s.value = !1;
      }, U(e.animationDuration));
    };
    return ie(() => e.modelValue, (b) => {
      b === !1 && (s.value = !0, i.value = "success", l.value = "checkbox-marked-circle", setTimeout(() => {
        o.value = n.value, D();
      }, U(e.successDuration)));
    }), ln(T), Un(r, "touchmove", $), {
      n: os,
      classes: A0,
      ICON_TRANSITION: is,
      refreshStatus: i,
      freshNode: r,
      controlNode: a,
      touchStart: S,
      touchMove: $,
      touchEnd: I,
      iconName: l,
      controlStyle: h,
      isSuccess: w
    };
  }
});
qd.render = z0;
const va = qd;
va.install = function(e) {
  e.component(va.name, va);
};
var kk = va, L0 = {
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
}, Xd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function R0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Xd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function U0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(Xd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: F0,
  classes: H0
} = _("radio");
function Y0(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      Be({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((p(), P(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? Y(e.$slots, "checked-icon", {
          key: 0
        }, () => [Z(
          r,
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
        }, () => [Z(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]), Z(
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
      }], [l, e.handleHovering, "desktop"]]), z(
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
    ), Z(
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
var Kd = Q({
  name: "VarRadio",
  directives: {
    Ripple: We,
    Hover: Fn
  },
  components: {
    VarIcon: Pe,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  inheritAttrs: !1,
  props: L0,
  setup(e) {
    var n = M(!1), r = L(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = U0(), {
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
    } = Vn(), g = (T) => {
      Ne(() => {
        var {
          validateTrigger: D,
          rules: b,
          modelValue: V
        } = e;
        v(D, T, b, V);
      });
    }, h = (T) => {
      var {
        checkedValue: D,
        onChange: b
      } = e;
      t && n.value === D || (n.value = T, k(e["onUpdate:modelValue"], n.value), k(b, n.value), t == null || t.onToggle(D), g("onChange"));
    }, y = (T) => {
      var {
        disabled: D,
        readonly: b,
        uncheckedValue: V,
        checkedValue: j,
        onClick: R
      } = e;
      s != null && s.disabled.value || D || (k(R, T), !(s != null && s.readonly.value || b) && (a.value = !0, h(r.value ? V : j)));
    }, w = (T) => {
      var {
        checkedValue: D,
        uncheckedValue: b
      } = e;
      n.value = T === D ? D : b;
    }, O = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, S = () => f(e.rules, e.modelValue), $ = (T) => {
      var {
        uncheckedValue: D,
        checkedValue: b
      } = e, V = ![D, b].includes(T);
      V && (T = r.value ? D : b), h(T);
    };
    ie(() => e.modelValue, (T) => {
      n.value = T;
    }, {
      immediate: !0
    });
    var I = {
      sync: w,
      validate: S,
      resetValidation: m,
      reset: O
    };
    return k(o, I), k(u, I), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: l,
      handleHovering: i,
      n: F0,
      classes: H0,
      handleClick: y,
      toggle: $,
      reset: O,
      validate: S,
      resetValidation: m
    };
  }
});
Kd.render = Y0;
const fa = Kd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var $k = fa;
function j0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var W0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: j0
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
  n: G0,
  classes: q0
} = _("radio-group");
function X0(e, n) {
  var r = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    ), Z(
      r,
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
var Zd = Q({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: _e
  },
  props: W0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = R0(), {
      bindForm: t
    } = Mn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = Vn(), u = L(() => o.value), d = (y) => {
      Ne(() => {
        var {
          validateTrigger: w,
          rules: O,
          modelValue: S
        } = e;
        l(w, y, O, S);
      });
    }, v = () => r.forEach((y) => {
      var {
        sync: w
      } = y;
      return w(e.modelValue);
    }), f = (y) => {
      k(e["onUpdate:modelValue"], y), k(e.onChange, y), d("onChange");
    }, m = () => i(e.rules, e.modelValue), g = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var h = {
      onToggle: f,
      validate: m,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, h), a(h), {
      errorMessage: o,
      n: G0,
      classes: q0,
      reset: g,
      validate: m,
      resetValidation: s
    };
  }
});
Zd.render = X0;
const ca = Zd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var Tk = ca, K0 = {
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
} = _("rate"), Z0 = ["onClick"];
function J0(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return p(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.toNumber(e.count), (i) => ke((p(), P(
          "div",
          {
            key: i,
            style: G(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [Z(
            r,
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
          ), Z(
            a,
            {
              hovering: e.hovering && i === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          Z0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [l, e.createHoverHandler(i), "desktop"]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Z(
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
var Jd = Q({
  name: "VarRate",
  components: {
    VarIcon: Pe,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  directives: {
    Ripple: We,
    Hover: Fn
  },
  props: K0,
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
    } = Pr(), s = M(-1), u = (S) => {
      var {
        count: $,
        gap: I
      } = e;
      return {
        color: v(S).color,
        marginRight: S !== U($) ? ge(I) : 0
      };
    }, d = (S) => {
      var {
        name: $,
        color: I
      } = v(S);
      return {
        [lt("content")]: !0,
        [lt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [lt("--error")]: a.value,
        [lt("--primary")]: $ !== e.emptyIcon && !I
      };
    }, v = (S) => {
      var {
        modelValue: $,
        disabled: I,
        disabledColor: T,
        color: D,
        half: b,
        emptyColor: V,
        icon: j,
        halfIcon: R,
        emptyIcon: K
      } = e, X = D;
      return (I || n != null && n.disabled.value) && (X = T), S <= U($) ? {
        color: X,
        name: j
      } : b && S <= U($) + 0.5 ? {
        color: X,
        name: R
      } : {
        color: I || n != null && n.disabled.value ? T : V,
        name: K
      };
    }, f = (S, $) => {
      if (e.half) {
        var {
          offsetWidth: I
        } = $.target;
        $.offsetX <= Math.floor(I / 2) && (S -= 0.5);
      }
      k(e["onUpdate:modelValue"], S);
    }, m = () => o(e.rules, U(e.modelValue)), g = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = (S, $) => {
      var {
        readonly: I,
        disabled: T,
        onChange: D
      } = e;
      I || T || n != null && n.disabled.value || n != null && n.readonly.value || (f(S, $), k(D, S), g());
    }, y = (S) => ($) => {
      s.value = S, i.value = $;
    }, w = () => {
      k(e["onUpdate:modelValue"], 0), l();
    }, O = {
      reset: w,
      validate: m,
      resetValidation: l
    };
    return k(r, O), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: h,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: y,
      reset: w,
      validate: m,
      resetValidation: l,
      toSizeUnit: ge,
      toNumber: U,
      n: lt
    };
  }
});
Jd.render = J0;
const ma = Jd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Pk = ma;
function Q0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var _0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Q0
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
}, x0 = (e) => (Ua(""), e = e(), Fa(), e), e1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, n1 = /* @__PURE__ */ x0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), r1 = [n1];
function a1(e, n) {
  return p(), P("svg", e1, r1);
}
var Qd = Q({});
Qd.render = a1;
const t1 = Qd;
var o1 = (e) => (Ua(""), e = e(), Fa(), e), i1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, l1 = /* @__PURE__ */ o1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), s1 = [l1];
function u1(e, n) {
  return p(), P("svg", i1, s1);
}
var _d = Q({});
_d.render = u1;
const d1 = _d;
var v1 = (e) => (Ua(""), e = e(), Fa(), e), f1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, c1 = /* @__PURE__ */ v1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), m1 = [c1];
function p1(e, n) {
  return p(), P("svg", f1, m1);
}
var xd = Q({});
xd.render = p1;
const h1 = xd;
var {
  n: g1,
  classes: y1
} = _("result");
function b1(e, n) {
  return p(), P(
    Ve,
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
        style: G({
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
        style: G({
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
        style: G({
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
var ev = Q({
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
      n: g1,
      classes: y1,
      toNumber: U
    };
  }
});
ev.render = b1;
const w1 = ev;
var C1 = (e) => (Ua(""), e = e(), Fa(), e), S1 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, k1 = /* @__PURE__ */ C1(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), $1 = [k1];
function T1(e, n) {
  return p(), P("svg", S1, $1);
}
var nv = Q({});
nv.render = T1;
const P1 = nv;
var O1 = (e) => (Ua(""), e = e(), Fa(), e), V1 = {
  viewBox: "-4 -4 32 32"
}, M1 = /* @__PURE__ */ O1(() => /* @__PURE__ */ z(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), E1 = [M1];
function B1(e, n) {
  return p(), P("svg", V1, E1);
}
var rv = Q({});
rv.render = B1;
const I1 = rv;
var {
  n: N1,
  classes: D1
} = _("result");
function A1(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [Y(e.$slots, "image", {}, () => [e.type ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: G({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), ye(
          at(e.type),
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
    )) : x("v-if", !0)]), Y(e.$slots, "title", {}, () => [e.title ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), Y(e.$slots, "description", {}, () => [e.description ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (p(), P(
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
var av = Q({
  name: "VarResult",
  components: {
    Info: t1,
    Success: w1,
    Warning: h1,
    Error: d1,
    Question: P1,
    Empty: I1
  },
  props: _0,
  setup(e) {
    var n = L(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = L(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ge(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: N1,
      classes: D1,
      toNumber: U,
      toPxNum: je,
      toSizeUnit: ge,
      circleSize: n,
      borderSize: r
    };
  }
});
av.render = A1;
const pa = av;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Ok = pa;
function z1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function L1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var R1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: z1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: L1
  },
  onClick: F()
}, {
  n: U1,
  classes: F1
} = _("row");
function H1(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: G({
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
var tv = Q({
  name: "VarRow",
  props: R1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Jm(), t = L(() => {
      var s = je(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      k(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), r(i), {
      n: U1,
      classes: F1,
      average: t,
      handleClick: l,
      padStartFlex: Xt
    };
  }
});
tv.render = H1;
const ha = tv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Vk = ha;
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
function Y1(e) {
  return ["left", "right", "center"].includes(e);
}
var j1 = gi({
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
    validator: Y1
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
}, Je(Wi, ["size", "variant", "placeholder", "line", "hint", "textColor", "focusColor", "blurColor", "disabled", "clearable", "onClick"])), {
  n: W1,
  classes: G1
} = _("select"), q1 = {
  key: 1
};
function X1(e, n) {
  var r = ae("var-chip"), a = ae("var-icon"), t = ae("var-field-decorator"), o = ae("var-menu"), l = ae("var-form-details");
  return p(), P(
    "div",
    {
      class: c(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleFocus && e.handleFocus(...arguments);
      })
    },
    [Z(
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
        "onUpdate:show": n[1] || (n[1] = (i) => e.isFocus = i),
        onClose: e.handleBlur
      },
      {
        menu: ve(() => [z(
          "div",
          {
            ref: "menuEl",
            class: c(e.classes(e.n("scroller"), e.n("--scroller-" + e.variant), e.n("$-elevation--3"), [!e.hint, e.n("--scroller-non-hint")]))
          },
          [Y(e.$slots, "default")],
          2
          /* CLASS */
        )]),
        default: ve(() => [Z(
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
          {
            "prepend-icon": ve(() => [Y(e.$slots, "prepend-icon")]),
            "append-icon": ve(() => [Y(e.$slots, "append-icon")]),
            default: ve(() => [z(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: G({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [z(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : Y(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), P(
                  Ve,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), P(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(p(!0), P(
                      Ve,
                      null,
                      Ue(e.labels, (i) => (p(), ye(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = Pn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [Ce(
                            ne(i),
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
                  )) : (p(), P(
                    "div",
                    {
                      key: 1,
                      class: c(e.n("values"))
                    },
                    ne(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  64
                  /* STABLE_FRAGMENT */
                )) : (p(), P(
                  "span",
                  q1,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), Y(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [Z(
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
            _: 3
            /* FORWARDED */
          },
          16
          /* FULL_PROPS */
        )]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["class", "offset-y", "disabled", "placement", "show", "onClose"]
    ), Z(
      l,
      {
        "error-message": e.errorMessage,
        onClick: n[2] || (n[2] = Pn(() => {
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
var ov = Q({
  name: "VarSelect",
  components: {
    VarIcon: Pe,
    VarMenu: Jn,
    VarChip: gr,
    VarFieldDecorator: Pd,
    VarFormDetails: _e
  },
  props: j1,
  setup(e) {
    var n = M(!1), r = L(() => e.multiple), a = L(() => e.focusColor), t = M(""), o = M([]), l = L(() => fr(e.modelValue)), i = L(() => e.disabled || e.readonly ? "" : "pointer"), s = M(0), {
      bindForm: u,
      form: d
    } = Mn(), {
      length: v,
      options: f,
      bindOptions: m
    } = e0(), {
      errorMessage: g,
      validateWithTrigger: h,
      validate: y,
      // expose
      resetValidation: w
    } = Vn(), O = M(null), S = L(() => e.variant === "outlined" ? "bottom-start" : "cover-top-start"), $ = () => {
      var {
        multiple: A,
        modelValue: E
      } = e;
      if (A) {
        var W = E;
        o.value = W.map(D);
      }
      !A && !fr(E) && (t.value = D(E)), !A && fr(E) && (t.value = "");
    }, I = (A) => {
      Ne(() => {
        var {
          validateTrigger: E,
          rules: W,
          modelValue: ee
        } = e;
        h(E, A, W, ee);
      });
    }, T = (A) => {
      var {
        value: E,
        label: W
      } = A;
      return E.value != null ? E.value : W.value;
    }, D = (A) => {
      var E, W, ee = f.find((se) => {
        var {
          value: de
        } = se;
        return de.value === A;
      });
      return ee || (ee = f.find((se) => {
        var {
          label: de
        } = se;
        return de.value === A;
      })), (E = (W = ee) == null ? void 0 : W.label.value) != null ? E : "";
    }, b = () => {
      var {
        disabled: A,
        readonly: E,
        onFocus: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || A || E || (s.value = je(e.offsetY), n.value = !0, k(W), I("onFocus"));
    }, V = () => {
      var {
        disabled: A,
        readonly: E,
        onBlur: W
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || A || E || (k(W), I("onBlur"));
    }, j = (A) => {
      var {
        disabled: E,
        readonly: W,
        multiple: ee,
        onChange: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || W)) {
        var de = ee ? f.filter((we) => {
          var {
            selected: Oe
          } = we;
          return Oe.value;
        }).map(T) : T(A);
        k(e["onUpdate:modelValue"], de), k(se, de), I("onChange"), !ee && (n.value = !1);
      }
    }, R = () => {
      var {
        disabled: A,
        readonly: E,
        multiple: W,
        clearable: ee,
        onClear: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || A || E || !ee)) {
        var de = W ? [] : void 0;
        k(e["onUpdate:modelValue"], de), k(se, de), I("onClear");
      }
    }, K = (A) => {
      var {
        disabled: E,
        onClick: W
      } = e;
      d != null && d.disabled.value || E || (k(W, A), I("onClick"));
    }, X = (A) => {
      var {
        disabled: E,
        readonly: W,
        modelValue: ee,
        onClose: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || E || W)) {
        var de = ee, we = f.find((dn) => {
          var {
            label: re
          } = dn;
          return re.value === A;
        }), Oe = de.filter((dn) => {
          var re;
          return dn !== ((re = we.value.value) != null ? re : we.label.value);
        });
        k(e["onUpdate:modelValue"], Oe), k(se, Oe), I("onClose");
      }
    }, te = () => {
      var {
        multiple: A,
        modelValue: E
      } = e;
      if (A) {
        var W = E;
        f.forEach((ee) => ee.sync(W.includes(T(ee))));
      } else
        f.forEach((ee) => ee.sync(E === T(ee)));
      $();
    }, B = () => {
      s.value = je(e.offsetY), n.value = !0;
    }, C = () => {
      n.value = !1;
    }, N = () => y(e.rules, e.modelValue), J = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), w();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: A,
        modelValue: E
      } = e;
      A && !Te(E) && On("Select", "The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, te, {
      deep: !0
    }), ie(() => v.value, te);
    var H = {
      multiple: r,
      focusColor: a,
      computeLabel: $,
      onSelect: j,
      reset: J,
      validate: N,
      resetValidation: w
    };
    return m(H), k(u, H), {
      offsetY: s,
      isFocus: n,
      errorMessage: g,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: t,
      labels: o,
      isEmptyModelValue: l,
      menuEl: O,
      placement: S,
      cursor: i,
      n: W1,
      classes: G1,
      handleFocus: b,
      handleBlur: V,
      handleClear: R,
      handleClick: K,
      handleClose: X,
      reset: J,
      validate: N,
      resetValidation: w,
      focus: B,
      blur: C
    };
  }
});
ov.render = X1;
const ga = ov;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Mk = ga, K1 = {
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
  n: Z1,
  classes: J1
} = _("skeleton");
function Q1(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [Y(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), P(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: G({
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), P(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (p(), P(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: G({
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), P(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (p(), P(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: G({
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
          )) : x("v-if", !0), (p(!0), P(
            Ve,
            null,
            Ue(e.toNumber(e.rows), (r, a) => (p(), P(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: G({
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (p(), P(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: G({
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
var iv = Q({
  name: "VarSkeleton",
  props: K1,
  setup() {
    return {
      n: Z1,
      classes: J1,
      toSizeUnit: ge,
      toNumber: U
    };
  }
});
iv.render = Q1;
const ya = iv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Ek = ya;
function _1(e) {
  return ["always", "normal", "never"].includes(e);
}
var ze;
(function(e) {
  e.First = "1", e.Second = "2";
})(ze || (ze = {}));
var x1 = {
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
    validator: _1
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
  n: ls,
  classes: ew
} = _("slider"), nw = ["onTouchstart"];
function rw(e, n) {
  var r = ae("var-hover-overlay"), a = ae("var-form-details"), t = Ie("hover");
  return p(), P(
    "div",
    {
      class: c(e.n(e.direction))
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n(e.direction + "-block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n(e.direction + "--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
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
            style: G({
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
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), P(
        Ve,
        null,
        Ue(e.thumbList, (o) => (p(), P(
          "div",
          {
            class: c(e.n(e.direction + "-thumb")),
            key: o.enumValue,
            style: G(e.thumbStyle(o)),
            onTouchstart: Pn((l) => e.start(l, o.enumValue), ["stop"])
          },
          [Y(e.$slots, "button", {
            currentValue: o.text
          }, () => [ke(z(
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
          ), [[t, (l) => e.hover(l, o), "desktop"]]), z(
            "div",
            {
              class: c(e.classes(e.n(e.direction + "-thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n(e.direction + "-thumb-ripple--active")])),
              style: G({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [Z(
              r,
              {
                hovering: o.hovering
              },
              null,
              8,
              ["hovering"]
            )],
            6
            /* CLASS, STYLE */
          ), z(
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
            [z(
              "span",
              null,
              ne(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          nw
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), Z(
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
var lv = Q({
  name: "VarSlider",
  components: {
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  directives: {
    Hover: Fn
  },
  props: x1,
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
    }), m = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = M(null), h = M(0), y = M(!1), w = Ae({
      [ze.First]: f(),
      [ze.Second]: f()
    }), O = L(() => U(e.max) - U(e.min)), S = L(() => h.value / O.value * U(e.step)), $ = L(() => {
      var {
        modelValue: re,
        range: ue
      } = e, me = [];
      return ue && Te(re) ? me = [{
        value: X(re[0]),
        enumValue: ze.First,
        text: te(re[0]),
        hovering: ut(i),
        handleHovering: s
      }, {
        value: X(re[1]),
        enumValue: ze.Second,
        text: te(re[1]),
        hovering: ut(u),
        handleHovering: d
      }] : on(re) && (me = [{
        value: X(re),
        enumValue: ze.First,
        text: te(re),
        hovering: ut(i),
        handleHovering: s
      }]), me;
    }), I = L(() => {
      var {
        activeColor: re,
        range: ue,
        modelValue: me
      } = e, De = ue && Te(me) ? X(Math.min(me[0], me[1])) : 0, Ke = ue && Te(me) ? X(Math.max(me[0], me[1])) - De : X(me);
      return b.value ? {
        left: "0px",
        height: Ke + "%",
        bottom: De + "%",
        background: re
      } : {
        top: "0px",
        width: Ke + "%",
        left: De + "%",
        background: re
      };
    }), T = L(() => e.disabled || (r == null ? void 0 : r.disabled.value)), D = L(() => e.readonly || (r == null ? void 0 : r.readonly.value)), b = L(() => e.direction === "vertical"), V, j = (re) => {
      var ue = re.currentTarget;
      return ue ? b.value ? h.value - (re.clientY - ue.getBoundingClientRect().top) : re.clientX - Xv(ue) : 0;
    }, R = (re) => {
      var ue = b.value ? "bottom" : "left";
      return {
        [ue]: re.value + "%",
        zIndex: w[re.enumValue].active ? 1 : void 0
      };
    }, K = (re) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[re].active, X = (re) => {
      var {
        min: ue,
        max: me
      } = e;
      return re < U(ue) ? 0 : re > U(me) ? 100 : (re - U(ue)) / O.value * 100;
    }, te = (re) => {
      if (!on(re))
        return 0;
      var ue = re;
      ue < Number(e.min) && (ue = Number(e.min)), ue > Number(e.max) && (ue = Number(e.max));
      var me = parseInt("" + ue, 10) === ue;
      return me ? ue : U(ue.toPrecision(5));
    }, B = (re, ue) => {
      T.value || ue.handleHovering(re);
    }, C = (re, ue) => {
      var me = [], {
        step: De,
        range: Ke,
        modelValue: Ge,
        onChange: He,
        min: Ye
      } = e, oe = U(De), be = Math.round(re / S.value), pe = be * oe + U(Ye), Se = w[ue].percentValue * oe + U(Ye);
      if (w[ue].percentValue = be, Ke && Te(Ge) && (me = ue === ze.First ? [pe, Ge[1]] : [Ge[0], pe]), Se !== pe) {
        var $e = Ke ? me.map((Re) => te(Re)) : te(pe);
        k(He, $e), k(e["onUpdate:modelValue"], $e), m();
      }
    }, N = (re) => {
      if (!e.range)
        return ze.First;
      var ue = w[ze.First].percentValue * S.value, me = w[ze.Second].percentValue * S.value, De = Math.abs(re - ue), Ke = Math.abs(re - me);
      return De <= Ke ? ze.First : ze.Second;
    }, J = () => {
      document.addEventListener("touchmove", E, {
        passive: !1
      }), document.addEventListener("touchend", W), document.addEventListener("touchcancel", W);
    }, H = () => {
      document.removeEventListener("touchmove", E), document.removeEventListener("touchend", W), document.removeEventListener("touchcancel", W);
    }, A = (re, ue) => {
      if (h.value || (h.value = g.value.offsetWidth), T.value || (w[ue].active = !0), V = ue, J(), !(T.value || D.value)) {
        k(e.onStart), y.value = !0;
        var {
          clientX: me,
          clientY: De
        } = re.touches[0];
        w[ue].startPosition = b.value ? De : me;
      }
    }, E = (re) => {
      if (re.preventDefault(), !(T.value || D.value || !y.value)) {
        var {
          startPosition: ue,
          currentOffset: me
        } = w[V], {
          clientX: De,
          clientY: Ke
        } = re.touches[0], Ge = (b.value ? ue - Ke : De - ue) + me;
        Ge <= 0 ? Ge = 0 : Ge >= h.value && (Ge = h.value), C(Ge, V);
      }
    }, W = () => {
      H();
      var {
        range: re,
        modelValue: ue,
        onEnd: me,
        step: De,
        min: Ke
      } = e;
      if (T.value || (w[V].active = !1), !(T.value || D.value)) {
        var Ge = [];
        w[V].currentOffset = w[V].percentValue * S.value;
        var He = w[V].percentValue * U(De) + U(Ke);
        re && Te(ue) && (Ge = V === ze.First ? [He, ue[1]] : [ue[0], He]), k(me, re ? Ge : He), y.value = !1;
      }
    }, ee = (re) => {
      if (!(T.value || D.value) && !re.target.closest("." + ls("thumb"))) {
        var ue = j(re), me = N(ue);
        V = me, C(ue, me), W();
      }
    }, se = () => {
      var re = U(e.step);
      return isNaN(re) ? (al("Slider", 'type of prop "step" should be Number'), !1) : re < 0 ? (al("Slider", '"step" should be > 0'), !1) : !0;
    }, de = () => {
      var {
        range: re,
        modelValue: ue
      } = e;
      return re && !Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !re && Te(ue) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : re && Te(ue) && ue.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, we = function(re, ue) {
      re === void 0 && (re = e.modelValue), ue === void 0 && (ue = U(e.step));
      var me = (De) => {
        var {
          min: Ke,
          max: Ge
        } = e;
        return De < U(Ke) ? 0 : De > U(Ge) ? O.value / ue : (De - U(Ke)) / ue;
      };
      e.range && Te(re) ? (w[ze.First].percentValue = me(re[0]), w[ze.First].currentOffset = w[ze.First].percentValue * S.value, w[ze.Second].percentValue = me(re[1]), w[ze.Second].currentOffset = w[ze.Second].percentValue * S.value) : on(re) && (w[ze.First].currentOffset = me(re) * S.value);
    }, Oe = () => {
      var re = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], re), l();
    }, dn = {
      reset: Oe,
      validate: v,
      resetValidation: l
    };
    return k(n, dn), ie([() => e.modelValue, () => e.step], (re) => {
      var [ue, me] = re;
      !se() || !de() || y.value || we(ue, U(me));
    }), ie(h, () => we()), ln(() => {
      !se() || !de() || (h.value = g.value[b.value ? "offsetHeight" : "offsetWidth"]);
    }), kt(() => {
      H();
    }), {
      n: ls,
      classes: ew,
      Thumbs: ze,
      sliderEl: g,
      getFillStyle: I,
      isDisabled: T,
      isVertical: b,
      thumbStyle: R,
      errorMessage: a,
      thumbsProps: w,
      thumbList: $,
      hover: B,
      multiplySizeUnit: an,
      toNumber: U,
      showLabel: K,
      start: A,
      move: E,
      end: W,
      click: ee
    };
  }
});
lv.render = rw;
const ba = lv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Bk = ba;
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
function aw(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function tw(e) {
  return Xi.includes(e);
}
var sv = {
  type: {
    type: String,
    validator: tw
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: aw
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
  loadingType: Je(ur, "type"),
  loadingSize: Je(ur, "size"),
  loadingRadius: Je(ur, "radius"),
  loadingColor: yi({}, Je(ur, "color"), {
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
  n: ow,
  classes: iw
} = _("snackbar"), lw = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function sw(e, n) {
  var r = ae("var-icon"), a = ae("var-loading");
  return ke((p(), P(
    "div",
    {
      class: c(e.n()),
      style: G({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: G({
          zIndex: e.zIndex
        })
      },
      [z(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [Y(e.$slots, "default", {}, () => [Ce(
          ne(e.content),
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
        [Y(e.$slots, "icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (p(), ye(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (p(), ye(
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
        )) : x("v-if", !0), Y(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[$r, e.show]]);
}
var uv = Q({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Dn,
    VarIcon: Pe
  },
  props: sv,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = Mt(() => e.show, 1);
    so(() => e.show, () => e.lockScroll);
    var a = L(() => e.type === "loading" || e.forbidClick), t = L(() => e.type ? lw[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), k(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), ln(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Xi,
      n: ow,
      classes: iw,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
uv.render = sw;
const dv = uv;
var {
  n: uw
} = _("snackbar");
function dw(e, n) {
  var r = ae("var-snackbar-core");
  return p(), ye(
    Ra,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [Z(
      Le,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [Z(
          r,
          Be(e.$props, {
            class: e.n("transition")
          }),
          {
            icon: ve(() => [Y(e.$slots, "icon")]),
            action: ve(() => [Y(e.$slots, "action")]),
            default: ve(() => [Y(e.$slots, "default", {}, () => [Ce(
              ne(e.content),
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
var vv = Q({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: dv
  },
  props: sv,
  setup() {
    var {
      disabled: e
    } = lo();
    return {
      n: uw,
      disabled: e
    };
  }
});
vv.render = dw;
const wa = vv;
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
function vw(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var Xi = ["loading", "success", "warning", "info", "error"], ss = 0, bi = !1, fv, et = !1, cv = {
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
}, Tn = Ae([]), Ki = cv, fw = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Oo = (e) => () => Ot(e) ? e() : e, cw = {
  setup() {
    return () => {
      var e = Tn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), et && (a.position = "top");
        var l = et ? "relative" : "absolute", i = Ct({
          position: l
        }, bw(a.position)), {
          content: s,
          icon: u,
          action: d
        } = a, v = {
          default: Oo(s),
          icon: Oo(u),
          action: Oo(d)
        };
        return Z(dv, Be(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (f) => a.show = f
        }), v);
      });
      return Z(Hv, Be(fw, {
        style: {
          zIndex: bn.zIndex
        },
        onAfterEnter: mw,
        onAfterLeave: pw
      }), vw(e) ? e : {
        default: () => [e]
      });
    };
  }
}, xn = function(e) {
  var n = gw(e), r = Ae(Ct({}, Ki, n));
  r.show = !0, bi || (bi = !0, fv = ot(cw).unmountInstance);
  var {
    length: a
  } = Tn, t = {
    id: ss++,
    reactiveSnackOptions: r
  };
  if (a === 0 || et)
    hw(t);
  else {
    var o = "update-" + ss;
    yw(r, o);
  }
  return {
    clear() {
      !et && Tn.length ? Tn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Xi.forEach((e) => {
  xn[e] = (n) => (ki(n) ? n.type = e : n = {
    content: n,
    type: e
  }, xn(n));
});
xn.install = function(e) {
  e.component(wa.name, wa);
};
xn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== et && (Tn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), et = e);
};
xn.clear = function() {
  Tn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
xn.setDefaultOptions = function(e) {
  Ki = e;
};
xn.resetDefaultOptions = function() {
  Ki = cv;
};
xn.Component = wa;
function mw(e) {
  var n = e.getAttribute("data-id"), r = Tn.find((a) => a.id === U(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function pw(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = Tn.find((t) => t.id === U(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = Tn.every((t) => t.animationEnd);
  a && (k(fv), Tn = Ae([]), bi = !1);
}
function hw(e) {
  Tn.push(e);
}
function gw(e) {
  return e === void 0 && (e = {}), Fe(e) ? {
    content: e
  } : e;
}
function yw(e, n) {
  var [r] = Tn;
  r.reactiveSnackOptions = Ct({}, r.reactiveSnackOptions, e), r._update = n;
}
function bw(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Ik = wa;
const wi = xn;
var mv = (e) => ["mini", "small", "normal", "large"].includes(e), ww = (e) => mv(e) || Te(e) || on(e) || Fe(e), Cw = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Sw = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), kw = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: ww
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
    validator: Cw
  },
  align: {
    type: String,
    validator: Sw
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function yn(e) {
  return "calc(" + e + " / 2)";
}
function $w(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = yn(e) + " " + n + " " + yn(e) + " 0" : i = yn(e) + " 0" : t === "space-around" ? i = yn(e) + " " + yn(n) : t === "space-between" && (o === 0 ? i = yn(e) + " " + yn(n) + " " + yn(e) + " 0" : o === l ? i = yn(e) + " 0 " + yn(e) + " " + yn(n) : i = yn(e) + " " + yn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: Vo,
  classes: Tw
} = _("space");
const Ca = Q({
  name: "VarSpace",
  props: kw,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Te(t) ? t.map(ge) : [ge(t), ge(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = k(r.default)) != null ? t : [], f = mv(d), [m, g] = a(d, f);
      v = Vs(v);
      var h = v.length - 1, y = v.map((w, O) => {
        var S = $w(m, g, {
          direction: u,
          justify: l,
          index: O,
          lastIndex: h
        });
        return Z("div", {
          style: {
            margin: S
          }
        }, [w]);
      });
      return Z("div", {
        class: Tw(Vo(), Vo("$--box"), [o, Vo("--inline")]),
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
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var Nk = Ca, Pw = {
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
}, pv = Symbol("STEPS_BIND_STEP_KEY");
function Ow() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(pv);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function Vw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(pv);
  return r || On("Steps", "<step/> must in <steps>"), {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: Mw,
  classes: Ew
} = _("step"), Bw = {
  key: 3
};
function Iw(e, n) {
  var r = ae("var-icon");
  return p(), P(
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
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: G({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (p(), ye(
            r,
            {
              key: 0,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (p(), ye(
            r,
            {
              key: 1,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (p(), ye(
            r,
            {
              key: 2,
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (p(), P(
            "span",
            Bw,
            ne(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), z(
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
        )],
        2
        /* CLASS */
      ), e.isLastChild ? x("v-if", !0) : (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: G({
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
var hv = Q({
  name: "VarStep",
  components: {
    VarIcon: Pe
  },
  props: Pw,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Vw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = L(() => l.value === a.value), m = L(() => a.value !== -1 && l.value > a.value), g = {
      index: a
    }, h = () => v(a.value), y = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(g), ie(i, (w) => {
      if (r.value = w - 1 === a.value, e.value) {
        var O = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + O + "px";
      }
    }), {
      n: Mw,
      classes: Ew,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: h,
      getRef: y
    };
  }
});
hv.render = Iw;
const Sa = hv;
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Dk = Sa;
function Nw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Dw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Nw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: F()
}, {
  n: Aw
} = _("steps");
function zw(e, n) {
  return p(), P(
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
var gv = Q({
  name: "VarSteps",
  props: Dw,
  setup(e) {
    var n = L(() => e.active), r = L(() => e.activeColor), a = L(() => e.inactiveColor), t = L(() => e.direction), {
      length: o,
      bindStep: l
    } = Ow(), i = (u) => {
      k(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: Aw
    };
  }
});
gv.render = zw;
const ka = gv;
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Ak = ka, Lw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Rw
} = _("style-provider"), Uw = Q({
  name: "VarStyleProvider",
  props: Lw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => ps(e.tag, {
      class: Rw(),
      style: Ps(e.styleVars)
    }, k(r.default));
  }
});
const $a = Uw;
var Mo = [];
function St(e) {
  Mo.forEach((r) => document.documentElement.style.removeProperty(r)), Mo.length = 0;
  var n = Ps(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Mo.push(a);
  });
}
St.Component = $a;
$a.install = function(e) {
  e.component($a.name, $a);
};
St.install = function(e) {
  e.component($a.name, $a);
};
var zk = $a, Fw = {
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
  n: Hw,
  classes: Yw
} = _("switch");
function jw(e, n) {
  var r = ae("var-loading"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = Ie("ripple"), l = Ie("hover");
  return ke((p(), P(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: G(e.styleComputed.switch)
      },
      [z(
        "div",
        {
          style: G(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), ke((p(), P(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: G(e.styleComputed.ripple)
        },
        [z(
          "div",
          {
            style: G(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), ye(
            r,
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
        ), Z(
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
    ), Z(
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
var yv = Q({
  name: "VarSwitch",
  components: {
    VarLoading: Dn,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  directives: {
    Ripple: We,
    Hover: Fn
  },
  props: Fw,
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
    } = Pr(), u = () => o(e.rules, e.modelValue), d = () => Ne(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = L(() => {
      var {
        size: w,
        modelValue: O,
        color: S,
        closeColor: $,
        loadingColor: I,
        activeValue: T
      } = e;
      return {
        handle: {
          width: an(w),
          height: an(w),
          backgroundColor: O === T ? S : $,
          color: I
        },
        ripple: {
          left: O === T ? an(w, 0.5) : "-" + an(w, 0.5),
          color: O === T ? S : $ || "#999",
          width: an(w, 2),
          height: an(w, 2)
        },
        track: {
          height: an(w, 0.72),
          width: an(w, 1.9),
          borderRadius: an(w, 2 / 3),
          filter: O === T || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: O === T ? S : $
        },
        switch: {
          height: an(w, 1.2),
          width: an(w, 2)
        }
      };
    }), f = L(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return an(w, 0.4);
    }), m = (w) => {
      var {
        onClick: O,
        onChange: S,
        disabled: $,
        loading: I,
        readonly: T,
        modelValue: D,
        activeValue: b,
        inactiveValue: V,
        "onUpdate:modelValue": j
      } = e;
      if (k(O, w), !($ || I || T || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var R = D === b ? V : b;
        k(S, R), k(j, R), d();
      }
    }, g = (w) => {
      e.disabled || r != null && r.disabled.value || s(w);
    }, h = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, y = {
      reset: h,
      validate: u,
      resetValidation: l
    };
    return k(n, y), {
      n: Hw,
      classes: Yw,
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
yv.render = jw;
const Ta = yv;
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var Lk = Ta, Ww = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, bv = Symbol("TABS_BIND_TAB_KEY");
function Gw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(bv);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function qw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(bv);
  return n || On("Tab", "<var-tab/> must in <var-tabs/>"), {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Ut,
  classes: Xw
} = _("tab");
function Kw(e, n) {
  var r = Ie("ripple");
  return ke((p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: G({
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
var wv = Q({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Ww,
  setup(e) {
    var n = M(null), r = L(() => e.name), a = L(() => e.disabled), t = L(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = qw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: g
    } = l, h = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(h);
    var y = () => e.name != null ? u.value === e.name : u.value === (o == null ? void 0 : o.value), w = () => e.disabled ? f.value : y() ? d.value : v.value, O = () => e.disabled ? Ut("$-tab--disabled") : y() ? Ut("$-tab--active") : Ut("$-tab--inactive"), S = ($) => {
      var {
        disabled: I,
        name: T,
        onClick: D
      } = e;
      I || (k(D, T ?? o.value, $), s(h));
    };
    return ie(() => e.name, g), ie(() => e.disabled, g), {
      n: Ut,
      classes: Xw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: O,
      handleClick: S
    };
  }
});
wv.render = Kw;
const Pa = wv;
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
var Rk = Pa, Zw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Jw,
  classes: Qw
} = _("tab-item");
function _w(e, n) {
  var r = ae("var-swipe-item");
  return p(), ye(
    r,
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
var Cv = Q({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Kn
  },
  props: Zw,
  setup(e) {
    var n = M(!1), r = L(() => e.name), {
      index: a,
      bindTabsItems: t
    } = Ib(), {
      bindLists: o
    } = Nb(), l = (s) => {
      n.value = s;
    }, i = {
      index: a,
      name: r,
      current: L(() => n.value),
      setCurrent: l
    };
    return t(i), o(i), {
      n: Jw,
      classes: Qw,
      current: n
    };
  }
});
Cv.render = _w;
const Oa = Cv;
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var Uk = Oa, xw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  },
  elevation: {
    type: [Boolean, Number, String],
    default: !0
  }
}, {
  n: eC,
  classes: nC
} = _("table");
function rC(e, n) {
  return p(), P(
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
    ), e.$slots.footer ? (p(), P(
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
var Sv = Q({
  name: "VarTable",
  props: xw,
  setup() {
    return {
      toSizeUnit: ge,
      n: eC,
      classes: nC,
      formatElevation: gn
    };
  }
});
Sv.render = rC;
const Va = Sv;
Va.install = function(e) {
  e.component(Va.name, Va);
};
var Fk = Va;
function us(e) {
  return ["horizontal", "vertical"].includes(e);
}
function aC(e) {
  return ["auto", "always"].includes(e);
}
function tC(e) {
  return ["normal", "reverse"].includes(e);
}
var oC = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: us
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: us
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
    validator: aC
  },
  indicatorPosition: {
    type: String,
    default: "normal",
    validator: tC
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
function ds(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vs(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ds(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ds(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: iC,
  classes: lC
} = _("tabs");
function sC(e, n) {
  return p(), ye(
    at(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [z(
        "div",
        Be({
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
          [Y(e.$slots, "default"), z(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + e.indicatorPosition + "-indicator"))),
              style: G({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")"
              })
            },
            [z(
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
var kv = Q({
  name: "VarTabs",
  components: {
    VarSticky: Zn
  },
  inheritAttrs: !1,
  props: oC,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = L(() => e.active), s = L(() => e.indicatorPosition === "reverse" ? "-reverse" : ""), u = L(() => e.activeColor), d = L(() => e.inactiveColor), v = L(() => e.disabledColor), f = L(() => e.itemDirection), m = M(null), {
      tabList: g,
      bindTabList: h,
      length: y
    } = Gw(), w = (R) => {
      var K, X = (K = R.name.value) != null ? K : R.index.value, {
        active: te,
        onChange: B,
        onClick: C
      } = e;
      k(e["onUpdate:active"], X), k(C, X), X !== te && k(B, X);
    }, O = () => g.find((R) => {
      var {
        name: K
      } = R;
      return e.active === K.value;
    }), S = (R) => g.find((K) => {
      var {
        index: X
      } = K;
      return (R ?? e.active) === X.value;
    }), $ = () => {
      if (y.value !== 0) {
        var {
          active: R
        } = e;
        if (on(R)) {
          var K = R > y.value - 1 ? y.value - 1 : 0;
          return k(e["onUpdate:active"], K), S(K);
        }
      }
    }, I = () => {
      o.value = e.scrollable === "always" || g.length >= 5;
    }, T = (R) => {
      var {
        element: K
      } = R, X = K.value;
      X && (e.layoutDirection === "horizontal" ? (n.value = X.offsetWidth + "px", a.value = X.offsetLeft + "px") : (r.value = X.offsetHeight + "px", t.value = X.offsetTop + "px"));
    }, D = (R) => {
      var {
        element: K
      } = R;
      if (o.value) {
        var X = l.value, te = K.value;
        if (e.layoutDirection === "horizontal") {
          var B = te.offsetLeft + te.offsetWidth / 2 - X.offsetWidth / 2;
          ht(X, {
            left: B,
            animation: Io
          });
        } else {
          var C = te.offsetTop + te.offsetHeight / 2 - X.offsetHeight / 2;
          ht(X, {
            top: C,
            animation: Io
          });
        }
      }
    }, b = () => {
      var R = O() || S() || $();
      !R || R.disabled.value || (I(), T(R), D(R));
    }, V = /* @__PURE__ */ function() {
      var R = vs(function* () {
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
      resize: b,
      onTabClick: w
    };
    return h(j), ie(() => y.value, /* @__PURE__ */ vs(function* () {
      yield Rn(), b();
    })), ie(() => e.active, b), ie(() => e.scrollable, b), Mr(b), Un(() => window, "resize", b), {
      stickyComponent: m,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      indicatorPosition: s,
      localScrollable: o,
      scrollerEl: l,
      Transition: Le,
      toSizeUnit: ge,
      n: iC,
      classes: lC,
      resize: b,
      resizeSticky: V,
      formatElevation: gn
    };
  }
});
kv.render = sC;
const Ma = kv;
Ma.install = function(e) {
  e.component(Ma.name, Ma);
};
var Hk = Ma, uC = {
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
function fs(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function dC(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: vC
} = _("tabs-items");
function fC(e, n) {
  var r = ae("var-swipe");
  return p(), ye(
    r,
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
var $v = Q({
  name: "VarTabsItems",
  components: {
    VarSwipe: Xn
  },
  props: uC,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Bb(), o = (v) => r.find((f) => {
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
          setCurrent: h
        } = g;
        return h(!1);
      }), m.setCurrent(!0), (f = n.value) == null || f.to(m.index.value));
    }, u = (v) => {
      var f, m = r.find((h) => {
        var {
          index: y
        } = h;
        return y.value === v;
      }), g = (f = m.name.value) != null ? f : m.index.value;
      k(e["onUpdate:active"], g);
    }, d = () => n.value;
    return a({}), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ dC(function* () {
      yield Rn(), s(e.active);
    })), {
      swipe: n,
      n: vC,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
$v.render = fC;
const Ea = $v;
Ea.install = function(e) {
  e.component(Ea.name, Ea);
};
var Yk = Ea;
const cC = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, mC = {
  "--badge-default-color": "#555"
}, pC = {
  "--button-default-color": "#303030"
}, hC = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, gC = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, yC = {
  "--checkbox-unchecked-color": "#fff"
}, bC = {
  "--chip-default-color": "#555"
}, wC = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, CC = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, SC = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, kC = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, $C = {
  "--field-decorator-text-color": "#fff",
  "--field-decorator-blur-color": "rgb(255, 255, 255, .7)"
}, TC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, PC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, OC = {
  "--popup-content-background-color": "#1e1e1e"
}, VC = {
  "--pull-refresh-background": "#303030"
}, MC = {
  "--radio-unchecked-color": "#fff"
}, EC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, BC = {
  "--select-scroller-background": "#303030"
}, IC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, NC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, DC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, AC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, zC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, LC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, RC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, UC = {
  "--tabs-background": "#1e1e1e"
}, FC = {
  "--app-bar-color": "#272727"
}, HC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, YC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, jC = {
  "--menu-background-color": "#272727"
}, WC = {
  "--breadcrumb-inactive-color": "#aaa"
}, GC = {
  "--paper-background": "#303030"
}, qC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const XC = Ci({
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
}, pC, gC, hC, LC, CC, IC, UC, AC, OC, SC, cC, bC, mC, RC, wC, VC, DC, NC, TC, zC, $C, BC, MC, yC, kC, PC, FC, HC, YC, jC, EC, WC, GC, qC);
var KC = {
  dark: XC
}, jk = null;
const Si = KC;
var Sn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], tn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], cs = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function ZC(e) {
  return ["ampm", "24hr"].includes(e);
}
var JC = {
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
    validator: ZC
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
}, Tv = (e, n) => e === "24hr" || n === "am", Zi = (e, n, r) => {
  var a = Sn.findIndex((o) => U(o) === U(r)), t = Tv(e, n) ? r : tn[a];
  return {
    hourStr: t,
    hourNum: U(t)
  };
}, cn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: U(n),
    minute: U(r),
    second: U(a)
  };
}, Pv = (e) => {
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
  } = Zi(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: g,
      minute: h
    } = cn(i);
    f = g === v && a > h;
  }
  if (!i && s) {
    var {
      hour: y,
      minute: w
    } = cn(s);
    f = y === v && a < w;
  }
  if (i && s) {
    var {
      hour: O,
      minute: S
    } = cn(i), {
      hour: $,
      minute: I
    } = cn(s);
    f = $ === v && a < I || O === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Ov = (e) => {
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
  } = Zi(t, o, l), m = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: h,
      minute: y,
      second: w
    } = cn(s);
    m = h === f && y < i || y === i && a > w;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: S,
      second: $
    } = cn(u);
    m = O === f && S > i || S === i && a > $;
  }
  if (s && u) {
    var {
      hour: I,
      minute: T,
      second: D
    } = cn(s), {
      hour: b,
      minute: V,
      second: j
    } = cn(u);
    m = I === f && T < i || b === f && V > i || I === f && T === i && a > D || b === f && V === i && a < j;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || g;
}, {
  n: QC,
  classes: _C
} = _("time-picker");
function xC(e, n) {
  return p(), P(
    "div",
    {
      class: c(e.n("clock"))
    },
    [z(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: G(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), P(
      Ve,
      null,
      Ue(e.timeScales, (r, a) => (p(), P(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: G(e.getStyle(a, r, !1))
        },
        ne(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), P(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.hours24, (r, a) => (p(), P(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: G(e.getStyle(a, r, !0))
          },
          ne(r),
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
var Vv = Q({
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
    } = n, a = M(null), t = M([]), o = M([]), l = L(() => ({
      transform: "rotate(" + U(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = L(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = L(() => e.type === "hour" ? Sn : cs), u = (y, w) => {
      var O;
      y = (O = y) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? Pv : Ov, $ = {
        time: U(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: U(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return w && e.type === "minute" && Reflect.deleteProperty($, "minute"), S($);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var y = e.isInner ? tn[i.value] : s.value[i.value];
      return s.value === cs ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, w) => w ? i.value === y && e.isInner : i.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Tv(e.format, e.ampm))
          return t.value.includes(y);
        var w = Sn.findIndex((O) => O === y);
        return o.value.includes(w);
      }
      return u(y, !0);
    }, m = (y, w, O) => {
      var S = 2 * Math.PI / 12 * y - Math.PI / 2, $ = 50 * (1 + Math.cos(S)), I = 50 * (1 + Math.sin(S)), T = () => v(y, O) ? f(w) ? {
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
      } = T();
      return {
        left: $ + "%",
        top: I + "%",
        backgroundColor: D,
        color: b
      };
    }, g = () => {
      var {
        width: y,
        height: w
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: w
      };
    }, h = () => {
      if (i.value !== void 0) {
        var y = e.ampm === "am" ? Sn : tn;
        return Na(y[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (y, w) => {
      var [O, S] = y, [$, I] = w, T = O === $ && S === I;
      if (!(T || e.type !== "hour" || i.value === void 0)) {
        var D = S ? tn[i.value] : h(), b = e.useSeconds ? ":" + e.time.second : "", V = D + ":" + e.time.minute + b;
        e.preventNextUpdate || r("update", V), r("change-prevent-update");
      }
    }), ie(() => e.rad, (y, w) => {
      if (!(e.type === "hour" || y === void 0 || w === void 0)) {
        var O = y / 6 >= 0 ? y / 6 : y / 6 + 60, S = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (O !== S) {
          var $, {
            hourStr: I
          } = Zi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var T = le().minute(O).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            $ = I + ":" + T + D;
          }
          if (e.type === "second") {
            var b = le().second(O).format("ss"), V = e.useSeconds ? ":" + b : "";
            $ = I + ":" + e.time.minute + V;
          }
          r("update", $);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [w, O, S] = y;
      if (t.value = [], w && !O) {
        var {
          hour: $
        } = cn(w), I = Sn.filter((N) => U(N) > $), T = tn.filter((N) => U(N) > $);
        t.value = [...I, ...T];
      }
      if (!w && O) {
        var {
          hour: D
        } = cn(O), b = Sn.filter((N) => U(N) < D), V = tn.filter((N) => U(N) < D);
        t.value = [...b, ...V];
      }
      if (w && O) {
        var {
          hour: j
        } = cn(w), {
          hour: R
        } = cn(O), K = Sn.filter((N) => U(N) < R || U(N) > j), X = tn.filter((N) => U(N) < R || U(N) > j);
        t.value = [...K, ...X];
      }
      if (S != null && S.hours) {
        var {
          hours: te
        } = S, B = Sn.filter((N) => !te(U(N))), C = tn.filter((N) => !te(U(N)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...B, ...C])];
      }
      o.value = t.value.map((N) => tn.findIndex((J) => N === J)).filter((N) => N >= 0);
    }, {
      immediate: !0
    }), {
      n: QC,
      classes: _C,
      hours24: tn,
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
Vv.render = xC;
const eS = Vv;
var {
  n: nS,
  classes: rS
} = _("time-picker"), aS = (e) => (Ua(""), e = e(), Fa(), e), tS = /* @__PURE__ */ aS(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), oS = {
  key: 0
};
function iS(e, n) {
  var r = ae("clock");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.formatElevation(e.elevation, 2))),
      ref: "picker"
    },
    [z(
      "div",
      {
        class: c(e.n("title")),
        style: G({
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
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ne(e.time.hour),
          3
          /* TEXT, CLASS */
        ), tS, z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), P("span", oS, ":")) : x("v-if", !0), e.useSeconds ? (p(), P(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), P(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), z(
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
    ), z(
      "div",
      {
        class: c(e.n("body"))
      },
      [z(
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
        [Z(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), ye(
              r,
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
var Mv = Q({
  name: "VarTimePicker",
  components: {
    Clock: eS
  },
  props: JC,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), g = M(!1), h = M(!1), y = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Ae({
      x: 0,
      y: 0
    }), O = Ae({
      x: [],
      y: []
    }), S = L(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), $ = (A) => {
      k(e["onUpdate:modelValue"], A), k(e.onChange, A);
    }, I = (A) => A * 57.29577951308232, T = (A) => {
      i.value = !1, h.value = !1, f.value = A;
    }, D = (A) => {
      var {
        disableHour: E
      } = a.value, W = Sn.findIndex((de) => U(de) === U(y.value.hour)), ee = A === "am" ? Sn : tn, se = [...ee.slice(W), ...ee.slice(0, W)];
      return se.find((de, we) => (o.value = we !== 0, !E.includes(de)));
    }, b = (A) => {
      if (!e.readonly) {
        m.value = A;
        var E = D(A);
        if (E) {
          var W = e.useSeconds ? ":" + y.value.second : "", ee = Na(E, 2, "0") + ":" + y.value.minute + W;
          $(ee);
        }
      }
    }, V = (A, E) => {
      var W = A >= O.x[0] && A <= O.x[1], ee = E >= O.y[0] && E <= O.y[1];
      return W && ee;
    }, j = (A) => {
      var E = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: ee,
        second: se
      } = cn(A);
      return {
        hour: le().hour(W).format(E),
        minute: le().minute(ee).format("mm"),
        second: le().second(se).format("ss")
      };
    }, R = (A) => {
      var E = A / 30;
      return E >= 0 ? E : E + 12;
    }, K = () => {
      var {
        width: A,
        height: E
      } = a.value.getSize(), W = w.x - A / 2 - 8, ee = w.x + A / 2 + 8, se = w.y - E / 2 - 8, de = w.y + E / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: ee,
        rangeYMin: se,
        rangeYMax: de
      };
    }, X = (A, E, W) => {
      var {
        disableHour: ee
      } = a.value;
      l.value = V(A, E);
      var se = Math.round(W / 30) * 30 + 90, de = R(se), we = t.value ? Sn[de] : tn[de];
      if (ee.includes(we) || (t.value = e.format === "24hr" ? V(A, E) : !1), t.value === l.value) {
        var Oe = t.value || m.value === "pm" ? tn[de] : Sn[de];
        g.value = ee.includes(Oe), !g.value && (u.value = se, i.value = !0);
      }
    }, te = (A) => {
      var {
        disableHour: E
      } = a.value, W = Math.round(A / 6) * 6 + 90, ee = W / 6 >= 0 ? W / 6 : W / 6 + 60, se = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: E,
        allowedTime: e.allowedTime
      };
      h.value = Pv(se), !h.value && (d.value = W, s.value = !0);
    }, B = (A) => {
      var {
        disableHour: E
      } = a.value, W = Math.round(A / 6) * 6 + 90, ee = W / 6 >= 0 ? W / 6 : W / 6 + 60, se = {
        time: ee,
        format: e.format,
        ampm: m.value,
        hour: y.value.hour,
        minute: U(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: E,
        allowedTime: e.allowedTime
      };
      Ov(se) || (v.value = W);
    }, C = () => {
      var {
        left: A,
        top: E,
        width: W,
        height: ee
      } = n.value.getBoundingClientRect();
      if (w.x = A + W / 2, w.y = E + ee / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: se,
          rangeXMax: de,
          rangeYMin: we,
          rangeYMax: Oe
        } = K();
        O.x = [se, de], O.y = [we, Oe];
      }
    }, N = (A) => {
      if (A.preventDefault(), !e.readonly) {
        C();
        var {
          clientX: E,
          clientY: W
        } = A.touches[0], ee = E - w.x, se = W - w.y, de = Math.round(I(Math.atan2(se, ee)));
        f.value === "hour" ? X(E, W, de) : f.value === "minute" ? te(de) : B(de);
      }
    }, J = () => {
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
    return ie(() => e.modelValue, (A) => {
      if (A) {
        var {
          hour: E,
          minute: W,
          second: ee
        } = cn(A), se = le().hour(E).format("hh"), de = le().hour(E).format("HH"), we = le().minute(W).format("mm"), Oe = le().second(ee).format("ss");
        u.value = (se === "12" ? 0 : U(se)) * 30, d.value = U(we) * 6, v.value = U(Oe) * 6, y.value = j(A), e.format !== "24hr" && (m.value = Na("" + E, 2, "0") === de && tn.includes(de) ? "pm" : "am"), t.value = e.format === "24hr" && tn.includes(de);
      }
    }, {
      immediate: !0
    }), {
      n: nS,
      classes: rS,
      getRad: S,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: N,
      checkPanel: T,
      checkAmpm: b,
      end: J,
      update: $,
      changePreventUpdate: H,
      formatElevation: gn
    };
  }
});
Mv.render = iS;
const Ba = Mv;
Ba.install = function(e) {
  e.component(Ba.name, Ba);
};
var Wk = Ba, lS = {
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
function ms(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Eo(e) {
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
  n: sS,
  classes: uS
} = _("uploader"), dS = 0, vS = ["onClick"], fS = ["onClick"], cS = ["src", "alt"], mS = ["multiple", "accept", "capture", "disabled"], pS = ["src"];
function hS(e, n) {
  var r = ae("var-icon"), a = ae("var-hover-overlay"), t = ae("var-form-details"), o = ae("var-popup"), l = Ie("ripple"), i = Ie("hover");
  return p(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), P(
        Ve,
        null,
        Ue(e.files, (s) => ke((p(), P(
          "div",
          {
            class: c(e.classes(e.n("file"), e.formatElevation(e.elevation, 2), [s.state === "loading", e.n("--loading")])),
            key: s.id,
            onClick: (u) => e.preview(s)
          },
          [z(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ne(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), P(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Pn((u) => e.handleRemove(s), ["stop"])
            },
            [Z(
              r,
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
            fS
          )) : x("v-if", !0), s.cover ? (p(), P(
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
            cS
          )) : x("v-if", !0), z(
            "div",
            {
              class: c(e.n("file-indicator"))
            },
            [z(
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
          vS
        )), [[l, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((p(), P(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.formatElevation(e.elevation, 2)], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [z(
          "input",
          {
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
          },
          null,
          42,
          mS
        ), Y(e.$slots, "default", {}, () => [Z(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        ), Z(
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
    ), Z(
      t,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), Z(
      o,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
        onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), P(
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
            pS
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
var Ev = Q({
  name: "VarUploader",
  directives: {
    Ripple: We,
    Hover: Fn
  },
  components: {
    VarIcon: Pe,
    VarPopup: kn,
    VarFormDetails: _e,
    VarHoverOverlay: mn
  },
  props: lS,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = L(() => {
      var {
        maxlength: N,
        modelValue: {
          length: J
        }
      } = e;
      return on(N) ? J + " / " + N : "";
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
    } = Pr(), m = L(() => {
      var {
        modelValue: N,
        hideList: J
      } = e;
      return J ? [] : N;
    }), g = (N) => {
      var {
        disabled: J,
        readonly: H,
        previewed: A
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || H || !A)) {
        var {
          url: E
        } = N;
        if (Fe(E) && el(E)) {
          Ln(E);
          return;
        }
        Fe(E) && nl(E) && (a.value = N, r.value = !0);
      }
    }, h = (N) => ({
      id: dS++,
      url: "",
      cover: "",
      name: N.name,
      file: N,
      progress: 0
    }), y = (N) => {
      var J = N.target, {
        files: H
      } = J;
      return Array.from(H);
    }, w = (N) => new Promise((J) => {
      if (!N.file.type.startsWith("image")) {
        J(N);
        return;
      }
      var H = new FileReader();
      H.onload = () => {
        var A = H.result;
        N.cover = A, N.url = A, J(N);
      }, H.readAsDataURL(N.file);
    }), O = (N) => N.map(w), S = (N) => {
      var {
        onBeforeRead: J
      } = e;
      return N.map((H) => new Promise((A) => {
        J || A({
          valid: !0,
          varFile: H
        });
        var E = Ft(k(J, Ae(H)));
        Promise.all(E).then((W) => {
          A({
            valid: W.every(Boolean),
            varFile: H
          });
        });
      }));
    }, $ = /* @__PURE__ */ function() {
      var N = Eo(function* (J) {
        var {
          maxsize: H,
          maxlength: A,
          modelValue: E,
          onOversize: W,
          onAfterRead: ee,
          onBeforeFilter: se,
          readonly: de,
          disabled: we
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || we || de)) {
          var Oe = (He) => He.filter((Ye) => Ye.file.size > U(H) ? (k(W, Ae(Ye)), !1) : !0), dn = (He) => {
            var Ye = Math.min(He.length, U(A) - E.length);
            return He.slice(0, Ye);
          }, re = /* @__PURE__ */ function() {
            var He = Eo(function* (Ye) {
              if (!se)
                return Ye;
              var oe = Ft(se);
              for (var be of oe)
                Ye = yield be(Ye);
              return Ye;
            });
            return function(oe) {
              return He.apply(this, arguments);
            };
          }(), ue = y(J), me = ue.map(h);
          me = yield re(me), me = H != null ? Oe(me) : me, me = A != null ? dn(me) : me;
          var De = yield Promise.all(O(me)), Ke = yield Promise.all(S(De)), Ge = Ke.filter((He) => {
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
          k(e["onUpdate:modelValue"], [...E, ...Ge]), J.target.value = "", Ge.forEach((He) => k(ee, Ae(He)));
        }
      });
      return function(H) {
        return N.apply(this, arguments);
      };
    }(), I = /* @__PURE__ */ function() {
      var N = Eo(function* (J) {
        var {
          disabled: H,
          readonly: A,
          modelValue: E,
          onBeforeRemove: W,
          onRemove: ee
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || A)) {
          if (W) {
            var se = Ft(k(W, Ae(J)));
            if ((yield Promise.all(se)).some((we) => !we))
              return;
          }
          var de = E.filter((we) => we !== J);
          k(ee, Ae(J)), K("onRemove"), k(e["onUpdate:modelValue"], de);
        }
      });
      return function(H) {
        return N.apply(this, arguments);
      };
    }(), T = () => e.modelValue.filter((N) => N.state === "success"), D = () => e.modelValue.filter((N) => N.state === "error"), b = () => e.modelValue.filter((N) => N.state === "loading"), V = () => {
      n.value.click();
    }, j = () => {
      a.value = null, r.value = !1, Ln.close();
    }, R = {
      getSuccess: T,
      getError: D,
      getLoading: b
    }, K = (N) => {
      Ne(() => {
        var {
          validateTrigger: J,
          rules: H,
          modelValue: A
        } = e;
        s(J, N, H, A, R);
      });
    }, X = !1, te = () => u(e.rules, e.modelValue, R), B = () => {
      X = !0, k(e["onUpdate:modelValue"], []), d();
    }, C = {
      validate: te,
      resetValidation: d,
      reset: B
    };
    return k(l, C), ie(() => e.modelValue, () => {
      !X && K("onChange"), X = !1;
    }, {
      deep: !0
    }), {
      n: sS,
      classes: uS,
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
      handleHovering: f,
      isHTMLSupportVideo: nl,
      isHTMLSupportImage: el,
      preview: g,
      handleChange: $,
      handleRemove: I,
      getSuccess: T,
      getError: D,
      getLoading: b,
      validate: te,
      resetValidation: d,
      reset: B,
      chooseFile: V,
      closePreview: j,
      toSizeUnit: ge
    };
  }
});
Ev.render = hS;
const Ia = Ev;
Ia.install = function(e) {
  e.component(Ia.name, Ia);
};
var Gk = Ia;
const gS = "2.11.1";
function yS(e) {
  Qn.install && e.use(Qn), Dr.install && e.use(Dr), Ar.install && e.use(Ar), zr.install && e.use(zr), Lr.install && e.use(Lr), mr.install && e.use(mr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Fr.install && e.use(Fr), Hr.install && e.use(Hr), en.install && e.use(en), Yr.install && e.use(Yr), jr.install && e.use(jr), pr.install && e.use(pr), hr.install && e.use(hr), Wr.install && e.use(Wr), gr.install && e.use(gr), Gr.install && e.use(Gr), qr.install && e.use(qr), Xr.install && e.use(Xr), bn.install && e.use(bn), Kr.install && e.use(Kr), Zr.install && e.use(Zr), Qr.install && e.use(Qr), _n.install && e.use(_n), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), qn.install && e.use(qn), _e.install && e.use(_e), Fn.install && e.use(Fn), mn.install && e.use(mn), Pe.install && e.use(Pe), na.install && e.use(na), Ln.install && e.use(Ln), ra.install && e.use(ra), aa.install && e.use(aa), Sr.install && e.use(Sr), gt.install && e.use(gt), ta.install && e.use(ta), oa.install && e.use(oa), Dn.install && e.use(Dn), pi.install && e.use(pi), Uo.install && e.use(Uo), Jn.install && e.use(Jn), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), La.install && e.use(La), kn.install && e.use(kn), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), We.install && e.use(We), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), wi.install && e.use(wi), Ca.install && e.use(Ca), Sa.install && e.use(Sa), ka.install && e.use(ka), Zn.install && e.use(Zn), St.install && e.use(St), Xn.install && e.use(Xn), Kn.install && e.use(Kn), Ta.install && e.use(Ta), Pa.install && e.use(Pa), Oa.install && e.use(Oa), Va.install && e.use(Va), Ma.install && e.use(Ma), Ea.install && e.use(Ea), Si.install && e.use(Si), Ba.install && e.use(Ba), wr.install && e.use(wr), Ia.install && e.use(Ia);
}
const qk = {
  version: gS,
  install: yS,
  ActionSheet: Qn,
  AppBar: Dr,
  Avatar: Ar,
  AvatarGroup: zr,
  BackTop: Lr,
  Badge: mr,
  BottomNavigation: Rr,
  BottomNavigationItem: Ur,
  Breadcrumb: Fr,
  Breadcrumbs: Hr,
  Button: en,
  ButtonGroup: Yr,
  Card: jr,
  Cell: pr,
  Checkbox: hr,
  CheckboxGroup: Wr,
  Chip: gr,
  Col: Gr,
  Collapse: qr,
  CollapseItem: Xr,
  Context: bn,
  Countdown: Kr,
  Counter: Zr,
  DatePicker: Qr,
  Dialog: _n,
  Divider: _r,
  Ellipsis: xr,
  Fab: ea,
  Form: qn,
  FormDetails: _e,
  Hover: Fn,
  HoverOverlay: mn,
  Icon: Pe,
  Image: na,
  ImagePreview: Ln,
  IndexAnchor: ra,
  IndexBar: aa,
  Input: Sr,
  Lazy: gt,
  Link: ta,
  List: oa,
  Loading: Dn,
  LoadingBar: pi,
  Locale: Uo,
  Menu: Jn,
  Option: ia,
  Overlay: la,
  Pagination: sa,
  Paper: ua,
  Picker: La,
  Popup: kn,
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
  Snackbar: wi,
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
  Themes: Si,
  TimePicker: Ba,
  Tooltip: wr,
  Uploader: Ia
};
export {
  Qn as ActionSheet,
  Dr as AppBar,
  Ar as Avatar,
  zr as AvatarGroup,
  Lr as BackTop,
  mr as Badge,
  Rr as BottomNavigation,
  Ur as BottomNavigationItem,
  Fr as Breadcrumb,
  Hr as Breadcrumbs,
  en as Button,
  Yr as ButtonGroup,
  jr as Card,
  pr as Cell,
  hr as Checkbox,
  Wr as CheckboxGroup,
  gr as Chip,
  Gr as Col,
  qr as Collapse,
  Xr as CollapseItem,
  bn as Context,
  Kr as Countdown,
  Zr as Counter,
  Qr as DatePicker,
  _n as Dialog,
  _r as Divider,
  xr as Ellipsis,
  ea as Fab,
  qn as Form,
  _e as FormDetails,
  Fn as Hover,
  mn as HoverOverlay,
  Pe as Icon,
  na as Image,
  Ln as ImagePreview,
  ra as IndexAnchor,
  aa as IndexBar,
  Sr as Input,
  gt as Lazy,
  ta as Link,
  oa as List,
  Dn as Loading,
  pi as LoadingBar,
  Uo as Locale,
  Jn as Menu,
  ia as Option,
  la as Overlay,
  Yo as PIXEL,
  sa as Pagination,
  ua as Paper,
  La as Picker,
  kn as Popup,
  da as Progress,
  va as PullRefresh,
  fa as Radio,
  ca as RadioGroup,
  ma as Rate,
  pa as Result,
  We as Ripple,
  ha as Row,
  Xi as SNACKBAR_TYPE,
  ga as Select,
  ya as Skeleton,
  ba as Slider,
  wi as Snackbar,
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
  Si as Themes,
  Ba as TimePicker,
  wr as Tooltip,
  Ia as Uploader,
  TS as _ActionSheetComponent,
  PS as _AppBarComponent,
  VS as _AvatarComponent,
  MS as _AvatarGroupComponent,
  DS as _BackTopComponent,
  AS as _BadgeComponent,
  zS as _BottomNavigationComponent,
  LS as _BottomNavigationItemComponent,
  RS as _BreadcrumbComponent,
  US as _BreadcrumbsComponent,
  NS as _ButtonComponent,
  FS as _ButtonGroupComponent,
  HS as _CardComponent,
  YS as _CellComponent,
  WS as _CheckboxComponent,
  GS as _CheckboxGroupComponent,
  qS as _ChipComponent,
  XS as _ColComponent,
  KS as _CollapseComponent,
  ZS as _CollapseItemComponent,
  wS as _ContextComponent,
  JS as _CountdownComponent,
  QS as _CounterComponent,
  _S as _DatePickerComponent,
  xS as _DialogComponent,
  ek as _DividerComponent,
  rk as _EllipsisComponent,
  ak as _FabComponent,
  tk as _FormComponent,
  jS as _FormDetailsComponent,
  IS as _HoverComponent,
  BS as _HoverOverlayComponent,
  kS as _IconComponent,
  ok as _ImageComponent,
  sk as _ImagePreviewComponent,
  dk as _IndexAnchorComponent,
  vk as _IndexBarComponent,
  fk as _InputComponent,
  OS as _LazyComponent,
  ck as _LinkComponent,
  mk as _ListComponent,
  pk as _LoadingBarComponent,
  ES as _LoadingComponent,
  $S as _LocaleComponent,
  hk as _MenuComponent,
  gk as _OptionComponent,
  yk as _OverlayComponent,
  bk as _PaginationComponent,
  wk as _PaperComponent,
  Ck as _PickerComponent,
  SS as _PopupComponent,
  Sk as _ProgressComponent,
  kk as _PullRefreshComponent,
  $k as _RadioComponent,
  Tk as _RadioGroupComponent,
  Pk as _RateComponent,
  Ok as _ResultComponent,
  CS as _RippleComponent,
  Vk as _RowComponent,
  Mk as _SelectComponent,
  Ek as _SkeletonComponent,
  Bk as _SliderComponent,
  Ik as _SnackbarComponent,
  Nk as _SpaceComponent,
  Dk as _StepComponent,
  Ak as _StepsComponent,
  uk as _StickyComponent,
  zk as _StyleProviderComponent,
  ik as _SwipeComponent,
  lk as _SwipeItemComponent,
  Lk as _SwitchComponent,
  Rk as _TabComponent,
  Uk as _TabItemComponent,
  Fk as _TableComponent,
  Hk as _TabsComponent,
  Yk as _TabsItemsComponent,
  jk as _ThemesComponent,
  Wk as _TimePickerComponent,
  nk as _TooltipComponent,
  Gk as _UploaderComponent,
  wf as actionSheetProps,
  Mi as add,
  Of as appBarProps,
  _f as avatarGroupProps,
  qf as avatarProps,
  Mc as backTopProps,
  Ac as badgeProps,
  Gc as bottomNavigationItemProps,
  Uc as bottomNavigationProps,
  Qc as breadcrumbProps,
  am as breadcrumbsProps,
  Sc as buttonProps,
  mm as cardProps,
  wm as cellProps,
  Lm as checkboxGroupProps,
  Mm as checkboxProps,
  jm as chipProps,
  Zm as colProps,
  op as collapseItemProps,
  np as collapseProps,
  up as countdownProps,
  oh as counterProps,
  Ph as datePickerProps,
  qk as default,
  qe as defaultLazyOptions,
  jh as dialogProps,
  Kh as dividerProps,
  Ls as enUS,
  $m as formDetailsProps,
  Cy as formProps,
  As as iconProps,
  Ys as imageCache,
  jy as imagePreviewProps,
  Py as imageProps,
  rb as indexAnchorProps,
  ib as indexBarProps,
  gb as inputProps,
  yS as install,
  Pb as linkProps,
  Eb as listProps,
  Ub as loadingBarProps,
  ur as loadingProps,
  Jb as menuProps,
  Us as merge,
  r0 as optionProps,
  i0 as overlayProps,
  Ze as pack,
  Rs as packs,
  s0 as paginationProps,
  c0 as paperProps,
  g0 as pickerProps,
  Vt as popupProps,
  O0 as progressProps,
  D0 as pullRefreshProps,
  W0 as radioGroupProps,
  L0 as radioProps,
  K0 as rateProps,
  _0 as resultProps,
  R1 as rowProps,
  j1 as selectProps,
  K1 as skeletonProps,
  x1 as sliderProps,
  sv as snackbarProps,
  kw as spaceProps,
  Pw as stepProps,
  Dw as stepsProps,
  Gt as stickyProps,
  Lw as styleProviderProps,
  gd as swipeProps,
  Fw as switchProps,
  Zw as tabItemProps,
  Ww as tabProps,
  xw as tableProps,
  uC as tabsItemsProps,
  oC as tabsProps,
  JC as timePickerProps,
  iy as tooltipProps,
  lS as uploaderProps,
  Ei as use,
  Pr as useHoverOverlay,
  Vi as useLocale,
  gS as version,
  Oi as zhCN
};
