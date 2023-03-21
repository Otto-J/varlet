import { reactive as Ee, onMounted as qt, nextTick as Be, onActivated as Za, isRef as pv, watch as le, onBeforeUnmount as Xt, onDeactivated as br, unref as Ya, inject as hv, getCurrentInstance as Ma, computed as F, provide as gv, isVNode as mt, ref as B, Comment as yv, Fragment as Oe, createApp as bv, h as ns, onBeforeMount as wv, onUnmounted as Ja, defineComponent as ne, createVNode as J, Teleport as Ba, Transition as Ne, withDirectives as we, vShow as pr, mergeProps as Ve, openBlock as p, createBlock as ge, resolveDynamicComponent as Qa, normalizeClass as c, normalizeStyle as G, resolveComponent as oe, resolveDirective as Me, withCtx as fe, createElementVNode as z, renderSlot as j, toDisplayString as ae, createElementBlock as O, renderList as ze, createCommentVNode as ee, onUpdated as Kt, createTextVNode as be, pushScopeId as Ia, popScopeId as Ea, withModifiers as Bn, normalizeProps as vi, guardReactiveProps as rs, vModelText as Cv, toRefs as Sv, withKeys as Ui, toRaw as Fi, TransitionGroup as kv } from "vue";
var as = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, KC = Ee(as);
const fn = Ee(as), Ke = (e) => typeof e == "string", Co = (e) => typeof e == "boolean", nn = (e) => typeof e == "number", fi = (e) => Object.prototype.toString.call(e) === "[object Object]", $v = (e) => typeof e == "object" && e !== null, ci = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), Tv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Ln = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ke(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Co(e) ? Number(e) : e, At = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, mi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, pt = () => typeof window < "u", Hi = (e) => [...new Set(e)], ts = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Pv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Ov = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Yi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ji = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Vv = (e) => {
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
      this.has(r) && At(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, So = (e) => e, Wi = (e) => Math.pow(e, 3), os = (e) => e < 0.5 ? Wi(e * 2) / 2 : 1 - Wi((1 - e) * 2) / 2, Zt = (e, n) => e ?? n, is = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Sa = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Gi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Gi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Gi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Bv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function qi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Jt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function pi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Iv(e) {
  return ko.apply(this, arguments);
}
function ko() {
  return ko = Mv(function* (e) {
    yield In();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: o,
      innerHeight: i
    } = window, l = a <= o && t >= 0, s = n <= i && r >= 0;
    return l && s;
  }), ko.apply(this, arguments);
}
function mo(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Da(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = window.getComputedStyle(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function Ev(e) {
  for (var n = [], r = e; r !== window; )
    r = Da(r), n.push(r);
  return n;
}
function ls(e, n) {
  if (Ke(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if ($v(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var ss = (e) => Ke(e) && e.endsWith("rem"), Dv = (e) => Ke(e) && e.endsWith("px") || nn(e), Nv = (e) => Ke(e) && e.endsWith("%"), us = (e) => Ke(e) && e.endsWith("vw"), ds = (e) => Ke(e) && e.endsWith("vh"), Av = (e) => Ke(e) && e.startsWith("calc("), zv = (e) => Ke(e) && e.startsWith("var("), Le = (e) => {
  if (nn(e))
    return e;
  if (Dv(e))
    return +e.replace("px", "");
  if (us(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ds(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (ss(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ke(e) ? L(e) : 0;
}, me = (e) => {
  if (e != null)
    return Nv(e) || us(e) || ds(e) || ss(e) || Av(e) || zv(e) ? e : Le(e) + "px";
}, xe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = me(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function On(e) {
  var n = is();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Xi(e) {
  var n = is();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Qt(e) {
  On(() => {
    On(e);
  });
}
function In() {
  return new Promise((e) => {
    On(() => {
      On(e);
    });
  });
}
function Lv() {
  return new Promise((e) => {
    On(e);
  });
}
function lt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = Jt(e), s = pi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), On(d);
      } else
        e.scrollTo(a, r), u();
    };
    On(d);
  });
}
function vs(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Pv(a);
    return n[o] = t, n;
  }, {});
}
function Rv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function zt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ln(e) {
  let n = !1;
  qt(() => {
    e(), Be(() => {
      n = !0;
    });
  }), Za(() => {
    n && e();
  });
}
function ka(e, n, r, a = {}) {
  if (!pt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let i = !1, l = !1;
  const s = (f) => {
    if (i || l)
      return;
    const m = Ya(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), i = !0);
  }, u = (f) => {
    if (!i || l)
      return;
    const m = Ya(f);
    m && (m.removeEventListener(n, r, {
      capture: o
    }), i = !1);
  };
  let d;
  pv(e) && (d = le(() => e.value, (f, m) => {
    u(m), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), l = !0;
  };
  return ln(() => {
    s(e);
  }), Xt(() => {
    u(e);
  }), br(() => {
    u(e);
  }), v;
}
function fs(e, n, r) {
  if (!pt())
    return;
  ka(document, n, (t) => {
    const o = Ya(e);
    o && !o.contains(t.target) && r(t);
  });
}
var Uv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function Fv(e) {
  const n = Ma();
  return e in n.provides;
}
function sn(e) {
  if (!Fv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = hv(e), { childInstances: r, collect: a, clear: t } = n, o = Uv(n, ["childInstances", "collect", "clear"]), i = Ma();
  return {
    index: F(() => r.indexOf(i)),
    parentProvider: o,
    bindParent: (u) => {
      qt(() => {
        Be().then(() => {
          a(i, u);
        });
      }), Xt(() => {
        Be().then(() => {
          t(i, u);
        });
      });
    }
  };
}
function Hv(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      mt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function un(e) {
  const n = Ma(), r = Ee([]), a = [], t = F(() => r.length), o = () => {
    const u = Hv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, i = (u, d) => {
    r.push(u), a.push(d), o();
  }, l = (u, d) => {
    At(r, u), At(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      gv(e, Object.assign({
        childInstances: r,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function cs(e, n, r = {}) {
  const a = Ma(), { passive: t = !0, eventName: o, defaultValue: i, emit: l = a == null ? void 0 : a.emit } = r, s = o ?? `update:${n.toString()}`, u = () => e[n] != null ? e[n] : i;
  if (!t)
    return F({
      get() {
        return u();
      },
      set(v) {
        l(s, v);
      }
    });
  const d = B(u());
  return le(() => e[n], () => {
    d.value = u();
  }), le(() => d.value, (v) => {
    l(s, v);
  }), d;
}
function Ki(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ki(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ki(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, $o.apply(this, arguments);
}
function Je(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Yv(e) {
  var n = bv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function _a(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => ns(e, $o({}, n, r));
    }
  }, {
    unmount: t
  } = Yv(a);
  return {
    unmountInstance: t
  };
}
function ms(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== yv) {
      if (r.type === Oe && Ce(r.children)) {
        r.children.forEach((a) => {
          n.push(a);
        });
        return;
      }
      n.push(r);
    }
  }), n;
}
function bn() {
  var e = B(""), n = /* @__PURE__ */ function() {
    var t = Zi(function* (o, i, l) {
      if (!Ce(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(i, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(i, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = Zi(function* (o, i, l, s, u) {
      o.includes(i) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(i, l, s, u, d) {
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
function jv(e) {
  ka(window, "hashchange", e), ka(window, "popstate", e);
}
function _t() {
  var e = B(!1);
  return Za(() => {
    e.value = !1;
  }), br(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function re(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return i.map((s) => {
      if (Ce(s)) {
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
function T(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (Ce(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function R(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
var {
  n: ps
} = re("ripple"), Ji = 250;
function Wv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Gv(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, i = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, l = i * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - i * 2) / 2, v = (o - i * 2) / 2, f = s - i, m = u - i;
  return {
    x: f,
    y: m,
    centerX: d,
    centerY: v,
    size: l
  };
}
function hs(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: i,
        size: l
      } = Gv(this, e), s = document.createElement("div");
      s.classList.add(ps()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Wv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function To() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + ps());
    if (r.length) {
      var a = r[r.length - 1], t = Ji - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Ji);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function gs() {
  var e = this._ripple;
  Rv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function qv(e, n) {
  var r, a, t;
  e._ripple = Lt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : fn.touchmoveForbid,
    removeRipple: To.bind(e)
  }), e.addEventListener("touchstart", hs, {
    passive: !0
  }), e.addEventListener("touchmove", gs, {
    passive: !0
  }), e.addEventListener("dragstart", To, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Xv(e) {
  e.removeEventListener("touchstart", hs), e.removeEventListener("touchmove", gs), e.removeEventListener("dragstart", To), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Kv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : fn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = Lt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var ys = {
  mounted: qv,
  unmounted: Xv,
  updated: Kv,
  install(e) {
    e.directive("ripple", this);
  }
}, ZC = ys;
const Re = ys;
function Zv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var ht = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Zv
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
  teleport: {
    type: String
  },
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  onClickOverlay: R(),
  "onUpdate:show": R(),
  // internal for Dialog
  onRouteChange: R()
};
function bs() {
  var e = Object.keys(fn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ct(e) {
  fn.locks[e] = 1, bs();
}
function St(e) {
  delete fn.locks[e], bs();
}
function xt(e, n) {
  var {
    uid: r
  } = Ma();
  n && le(n, (a) => {
    a === !1 ? St(r) : a === !0 && e() === !0 && Ct(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? Ct(r) : St(r));
  }), wv(() => {
    n && n() === !1 || e() === !0 && Ct(r);
  }), Ja(() => {
    n && n() === !1 || e() === !0 && St(r);
  }), Za(() => {
    n && n() === !1 || e() === !0 && Ct(r);
  }), br(() => {
    n && n() === !1 || e() === !0 && St(r);
  });
}
function gt(e, n) {
  var r = B(fn.zIndex);
  return le(e, (a) => {
    a && (fn.zIndex += n, r.value = fn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Po.apply(this, arguments);
}
function Jv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !mt(e);
}
var {
  n: zn,
  classes: po
} = re("popup");
const hn = ne({
  name: "VarPopup",
  inheritAttrs: !1,
  props: ht,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = gt(() => e.show, 3), {
      disabled: o
    } = _t(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      T(v), d && T(e["onUpdate:show"], !1);
    };
    xt(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      T(d ? e.onOpen : e.onClose);
    }), jv(() => T(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return J("div", {
        class: po(zn("overlay"), d),
        style: Po({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => J("div", Ve({
      class: po(zn("content"), zn("--" + e.position), [e.defaultStyle, zn("--content-background-color")], [e.defaultStyle, zn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [T(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: h,
        position: y
      } = e;
      return J(Ne, {
        name: zn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(J("div", {
          class: po(zn("$--box"), zn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && l(), J(Ne, {
          name: h || zn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[pr, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return J(Ba, {
          to: d,
          disabled: o.value
        }, Jv(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
hn.install = function(e) {
  e.component(hn.name, hn);
};
var JC = hn, ws = {
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
  onClick: R()
};
function Qi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Qv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Qi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Qi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: _v,
  classes: xv
} = re("icon");
function ef(e, n) {
  return p(), ge(
    Qa(e.isURL(e.name) ? "img" : "i"),
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
var Cs = ne({
  name: "VarIcon",
  props: ws,
  setup(e) {
    var n = B(""), r = B(!1), a = /* @__PURE__ */ function() {
      var t = Qv(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || L(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Be(), setTimeout(() => {
          i != null && (n.value = o), r.value = !1;
        }, L(l));
      });
      return function(i, l) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: _v,
      classes: xv,
      nextName: n,
      animateInProgress: r,
      isURL: Tv,
      toNumber: L,
      toSizeUnit: me
    };
  }
});
Cs.render = ef;
const $e = Cs;
$e.install = function(e) {
  e.component($e.name, $e);
};
var QC = $e;
function Oo() {
  return Oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Oo.apply(this, arguments);
}
var nf = Oo({
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
  onSelect: R(),
  "onUpdate:show": R()
}, Je(ht, [
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
const hi = {
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
}, Ss = {
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
function Vo() {
  return Vo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Vo.apply(this, arguments);
}
function gi() {
  var e = {}, n = B({}), r = (o, i) => {
    i.lang = o, e[o] = i;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[o];
  }, t = (o, i) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = Vo({}, e[o], i), a(o);
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
  packs: ks,
  pack: Ye,
  add: yi,
  use: bi,
  merge: $s
} = gi();
yi("zh-CN", hi);
bi("zh-CN");
var _C = {
  zhCN: hi,
  enUS: Ss,
  packs: ks,
  pack: Ye,
  add: yi,
  use: bi,
  merge: $s,
  useLocale: gi
};
const Mo = {
  zhCN: hi,
  enUS: Ss,
  packs: ks,
  pack: Ye,
  add: yi,
  use: bi,
  merge: $s,
  useLocale: gi
};
var {
  n: rf,
  classes: af
} = re("action-sheet"), tf = ["onClick"];
function of(e, n) {
  var r = oe("var-icon"), a = oe("var-popup"), t = Me("ripple");
  return p(), ge(
    a,
    Ve({
      class: e.n("popup-radius"),
      position: "bottom",
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.popupShow
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
      default: fe(() => [z(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [j(e.$slots, "title", {}, () => [z(
          "div",
          {
            class: c(e.n("title"))
          },
          ae(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), j(e.$slots, "actions", {}, () => [(p(!0), O(
          Oe,
          null,
          ze(e.actions, (o) => we((p(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (p(), ge(
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
            )) : ee("v-if", !0), z(
              "div",
              {
                class: c(e.n("action-name"))
              },
              ae(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            tf
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
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var Ts = ne({
  name: "VarActionSheet",
  directives: {
    Ripple: Re
  },
  components: {
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: nf,
  setup(e) {
    var n = B(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        T(i, t), o && T(e["onUpdate:show"], !1);
      }
    }, a = (t) => T(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: rf,
      classes: af,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ye,
      dt: Zt,
      handleSelect: r
    };
  }
});
Ts.render = of;
const tr = Ts;
function Bo() {
  return Bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Bo.apply(this, arguments);
}
var _n, wi = {};
function lf(e) {
  return e === void 0 && (e = {}), Bo({}, wi, e);
}
function $a(e) {
  return pt() ? new Promise((n) => {
    $a.close();
    var r = Ee(lf(e));
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = _a(tr, r, {
      onSelect: (t) => {
        T(r.onSelect, t), n(t);
      },
      onClose: () => {
        T(r.onClose), n("close");
      },
      onClosed: () => {
        T(r.onClosed), a(), _n === r && (_n = null);
      },
      onRouteChange: () => {
        a(), _n === r && (_n = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function sf(e) {
  wi = e;
}
function uf() {
  wi = {};
}
function df() {
  if (_n != null) {
    var e = _n;
    _n = null, Be().then(() => {
      e.show = !1;
    });
  }
}
$a.Component = tr;
tr.install = function(e) {
  e.component(tr.name, tr);
};
$a.install = function(e) {
  e.component(tr.name, tr);
};
Object.assign($a, {
  setDefaultOptions: sf,
  resetDefaultOptions: uf,
  close: df
});
var xC = tr;
function vf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var ff = {
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
    validator: vf
  },
  elevation: {
    type: Boolean,
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
  }
}, {
  n: cf,
  classes: mf
} = re("app-bar");
function pf(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
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
        [j(e.$slots, "left"), e.titlePosition === "left" ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: G({
              paddingLeft: e.paddingLeft
            })
          },
          [j(e.$slots, "default", {}, () => [be(
            ae(e.title),
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
        [j(e.$slots, "default", {}, () => [be(
          ae(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : ee("v-if", !0), z(
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
          [j(e.$slots, "default", {}, () => [be(
            ae(e.title),
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
var Ps = ne({
  name: "VarAppBar",
  props: ff,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(), t = B(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, i = F(() => {
      var {
        image: l,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (l != null) {
        var v = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": v + "url(" + l + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return ln(o), Kt(o), {
      n: cf,
      classes: mf,
      rootStyles: i,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ps.render = pf;
const kr = Ps;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var eS = kr;
function _i(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function eo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        _i(o, a, t, i, l, "next", s);
      }
      function l(s) {
        _i(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Io.apply(this, arguments);
}
var hf = "background-image", gf = "lazy-loading", yf = "lazy-error", xi = "lazy-attempt", bf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Eo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ja = [], Rt = [], Os = Vv(100), Fe = {
  loading: Eo,
  error: Eo,
  attempt: 3,
  throttleWait: 300,
  events: bf
}, Ci = mi(yt, Fe.throttleWait);
function no(e, n) {
  e._lazy.arg === hf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function wf(e) {
  e._lazy.loading && no(e, e._lazy.loading), yt();
}
function Cf(e) {
  e._lazy.error && no(e, e._lazy.error), e._lazy.state = "error", ki(e), yt();
}
function Vs(e, n) {
  no(e, n), e._lazy.state = "success", ki(e), yt();
}
function Sf(e) {
  var n;
  Rt.includes(e) || (Rt.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ci, {
      passive: !0
    });
  }));
}
function kf() {
  Rt.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ci);
    });
  }), Rt.length = 0;
}
function $f(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(gf)) != null ? r : Fe.loading,
    error: (a = e.getAttribute(yf)) != null ? a : Fe.error,
    attempt: e.getAttribute(xi) ? Number(e.getAttribute(xi)) : Fe.attempt
  };
  e._lazy = Io({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), no(e, Eo), T(Fe.filter, e._lazy);
}
function Tf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Os.add(n), Vs(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Cf(e) : Ms(e);
  });
}
function Ms(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Os.has(n)) {
      Vs(e, n), e._lazy.attemptLock = !1;
      return;
    }
    wf(e), Tf(e, n);
  }
}
function Si(e) {
  return Do.apply(this, arguments);
}
function Do() {
  return Do = eo(function* (e) {
    (yield Iv(e)) && Ms(e);
  }), Do.apply(this, arguments);
}
function yt() {
  ja.forEach((e) => Si(e));
}
function Pf(e) {
  return No.apply(this, arguments);
}
function No() {
  return No = eo(function* (e) {
    !ja.includes(e) && ja.push(e), Ev(e).forEach(Sf), yield Si(e);
  }), No.apply(this, arguments);
}
function ki(e) {
  At(ja, e), ja.length === 0 && kf();
}
function Of(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Bs(e, n) {
  return Ao.apply(this, arguments);
}
function Ao() {
  return Ao = eo(function* (e, n) {
    $f(e, n), yield Pf(e);
  }), Ao.apply(this, arguments);
}
function Vf(e, n) {
  return zo.apply(this, arguments);
}
function zo() {
  return zo = eo(function* (e, n) {
    if (!Of(e, n)) {
      ja.includes(e) && (yield Si(e));
      return;
    }
    yield Bs(e, n);
  }), zo.apply(this, arguments);
}
function Mf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: i
  } = e;
  Fe.events = n ?? Fe.events, Fe.loading = r ?? Fe.loading, Fe.error = a ?? Fe.error, Fe.attempt = t ?? Fe.attempt, Fe.throttleWait = o ?? Fe.throttleWait, Fe.filter = i;
}
var Is = {
  mounted: Bs,
  unmounted: ki,
  updated: Vf,
  install(e, n) {
    Mf(n), Ci = mi(yt, Fe.throttleWait), e.directive("lazy", this);
  }
}, nS = Is;
const st = Is;
function Bf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Es = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ds(e) {
  return Es(e) || nn(e) || Ke(e);
}
var If = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ds,
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
    validator: Bf,
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
  onClick: R(),
  onLoad: R(),
  onError: R()
}, {
  n: Ef,
  classes: Df
} = re("avatar"), Nf = ["src", "lazy-loading", "lazy-error"], Af = ["src"];
function zf(e, n) {
  var r = Me("lazy");
  return p(), O(
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
    [e.src ? (p(), O(
      Oe,
      {
        key: 0
      },
      [e.lazy ? we((p(), O(
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
        Nf
      )), [[r, e.src]]) : (p(), O(
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
        Af
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
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
      [j(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Ns = ne({
  name: "VarAvatar",
  directives: {
    Lazy: st
  },
  props: If,
  setup(e) {
    var n = B(null), r = B(null), a = B(1), t = () => {
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
      d ? (u._lazy.state === "success" && T(v, s), u._lazy.state === "error" && T(f, s)) : T(v, s);
    }, i = (s) => {
      T(e.onError, s);
    }, l = (s) => {
      T(e.onClick, s);
    };
    return ln(t), Kt(t), {
      internalSizeValidator: Es,
      sizeValidator: Ds,
      toSizeUnit: me,
      n: Ef,
      classes: Df,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: i,
      handleClick: l
    };
  }
});
Ns.render = zf;
const $r = Ns;
$r.install = function(e) {
  e.component($r.name, $r);
};
var rS = $r, Lf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Rf,
  classes: Uf
} = re("avatar-group");
function Ff(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: G(e.rootStyles)
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var As = ne({
  name: "VarAvatarGroup",
  props: Lf,
  setup(e) {
    var n = F(() => e.offset == null ? {} : {
      "--avatar-group-offset": me(e.offset)
    });
    return {
      n: Rf,
      classes: Uf,
      toSizeUnit: me,
      rootStyles: n
    };
  }
});
As.render = Ff;
const Tr = As;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var aS = Tr;
function Hf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Yf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var nr = {
  type: {
    type: String,
    default: "circle",
    validator: Hf
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Yf
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
  n: jf,
  classes: Wf
} = re("loading"), Gf = (e) => (Ia(""), e = e(), Ea(), e), qf = /* @__PURE__ */ Gf(() => /* @__PURE__ */ z(
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
)), Xf = [qf];
function Kf(e, n) {
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
      [j(e.$slots, "default"), e.loading ? (p(), O(
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
          Xf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (p(!0), O(
        Oe,
        null,
        ze(e.loadingTypeDict, (r, a) => (p(), O(
          Oe,
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
              Oe,
              null,
              ze(r, (t) => (p(), O(
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
        [j(e.$slots, "description", {}, () => [be(
          ae(e.description),
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
var zs = ne({
  name: "VarLoading",
  props: nr,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = F(() => T(r.default) ? e.loading : !0);
    return {
      n: jf,
      classes: Wf,
      multiplySizeUnit: xe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
zs.render = Kf;
const Tn = zs;
Tn.install = function(e) {
  e.component(Tn.name, Tn);
};
var tS = Tn, Zf = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Jf,
  classes: Qf
} = re("hover-overlay");
function _f(e, n) {
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
var Ls = ne({
  name: "VarHoverOverlay",
  props: Zf,
  setup() {
    return {
      n: Jf,
      classes: Qf
    };
  }
});
Ls.render = _f;
const tn = Ls;
tn.install = function(e) {
  e.component(tn.name, tn);
};
function hr() {
  var e = B(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var oS = tn;
function Rs(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function xf(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((i) => i.trim());
    return r[ts(t)] = o, r;
  }, {}) : {};
}
function ec(e) {
  var {
    value: n
  } = e._hover, r = xf(e);
  Object.keys(n).forEach((a) => {
    var t = ts(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function $i(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function nc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Us(e) {
  nc(e), $i(e, e._hover.rawStyle);
}
function Fs() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, ci(e)) {
    e(this._hover.hovering);
    return;
  }
  $i(this, e);
}
function Hs() {
  if (this._hover.hovering = !1, ci(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Us(this);
}
function Ys(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Rs(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, ec(e), e.addEventListener("mouseenter", Fs), e.addEventListener("mouseleave", Hs));
}
function js(e, n) {
  Rs(n.arg) || (Us(e), e.removeEventListener("mouseenter", Fs), e.removeEventListener("mouseleave", Hs));
}
function rc(e, n) {
  js(e, n);
}
function ac(e, n) {
  return !ci(n.value) && e._hover.hovering;
}
function tc(e, n) {
  Ys(e, n), ac(e, n) && $i(e, n.value);
}
var Ws = {
  mounted: Ys,
  unmounted: js,
  beforeUpdate: rc,
  updated: tc,
  install(e) {
    e.directive("hover", this);
  }
}, iS = Ws;
const En = Ws;
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
function Gs(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function oc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function ic(e) {
  return ["button", "reset", "submit"].includes(e);
}
var lc = {
  type: {
    type: String,
    validator: Gs
  },
  nativeType: {
    type: String,
    default: "button",
    validator: ic
  },
  size: {
    type: String,
    validator: oc
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
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String]
  },
  loadingType: Je(nr, "type"),
  loadingSize: Je(nr, "size"),
  loadingColor: Lo({}, Je(nr, "color"), {
    default: "currentColor"
  }),
  onClick: R(),
  onTouchstart: R()
}, qs = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function sc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(qs);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function uc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(qs);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: dc,
  classes: vc
} = re("button"), fc = ["type", "disabled"];
function cc(e, n) {
  var r = oe("var-loading"), a = oe("var-hover-overlay"), t = Me("ripple"), o = Me("hover");
  return we((p(), O(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.n("$-elevation--" + e.states.elevation)], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
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
    [e.loading || e.pending ? (p(), ge(
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
    )) : ee("v-if", !0), z(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [j(e.$slots, "default")],
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
    fc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var Xs = ne({
  name: "VarButton",
  components: {
    VarLoading: Tn,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Re,
    Hover: En
  },
  props: lc,
  setup(e) {
    var n = B(!1), {
      buttonGroup: r
    } = uc(), {
      hovering: a,
      handleHovering: t
    } = hr(), o = F(() => {
      if (!r)
        return {
          elevation: 2,
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
        elevation: 0,
        type: e.type != null ? e.type : u.value,
        size: e.size != null ? e.size : d.value,
        color: e.color != null ? e.color : v.value,
        textColor: e.textColor != null ? e.textColor : f.value,
        text: m.value !== "normal",
        outline: m.value === "outline"
      };
    }), i = (u) => {
      e.autoLoading && (n.value = !0, u = Ce(u) ? u : [u], Promise.all(u).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, l = (u) => {
      var {
        loading: d,
        disabled: v,
        onClick: f
      } = e;
      !f || d || v || n.value || i(T(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || i(T(f, u));
    };
    return {
      n: dc,
      classes: vc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
Xs.render = cc;
const Xe = Xs;
Xe.install = function(e) {
  e.component(Xe.name, Xe);
};
var lS = Xe, mc = {
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
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: R()
}, {
  n: pc,
  classes: hc
} = re("back-top");
function gc(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return p(), ge(
    Ba,
    {
      to: "body",
      disabled: e.disabled
    },
    [z(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Bn(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [j(e.$slots, "default", {}, () => [J(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: fe(() => [J(r, {
          name: "chevron-up"
        })]),
        _: 1
        /* STABLE */
      })])],
      16
      /* FULL_PROPS */
    )],
    8,
    ["disabled"]
  );
}
var Ks = ne({
  name: "VarBackTop",
  components: {
    VarButton: Xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: mc,
  setup(e) {
    var n = B(!1), r = B(null), a = B(!0), t, o = (d) => {
      T(e.onClick, d);
      var v = pi(t);
      lt(t, {
        left: v,
        duration: e.duration,
        animation: os
      });
    }, i = mi(() => {
      n.value = Jt(t) >= Le(e.visibilityHeight);
    }, 200), l = () => {
      t = e.target ? ls(e.target, "BackTop") : Da(r.value);
    }, s = () => {
      t.addEventListener("scroll", i);
    }, u = () => {
      t.removeEventListener("scroll", i);
    };
    return qt(() => {
      l(), s(), a.value = !1;
    }), Za(s), Xt(u), br(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: me,
      n: pc,
      classes: hc,
      handleClick: o
    };
  }
});
Ks.render = gc;
const Pr = Ks;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var sS = Pr;
function yc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function bc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var wc = {
  type: {
    type: String,
    default: "default",
    validator: yc
  },
  position: {
    type: String,
    default: "right-top",
    validator: bc
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
  n: Cc,
  classes: Sc
} = re("badge");
function kc(e, n) {
  var r = oe("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "default"), J(
      Ne,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: fe(() => [we(z(
          "span",
          Ve({
            class: e.classes(e.n("content"), e.n("--" + e.type), [e.$slots.default, e.n("--" + e.position)], [e.dot, e.n("--dot")], [e.icon, e.n("--icon")]),
            style: {
              background: e.color
            }
          }, e.$attrs),
          [e.icon ? (p(), ge(
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
          )) : ee("v-if", !0), j(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (p(), O(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            ae(e.value),
            3
            /* TEXT, CLASS */
          )) : ee("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[pr, !e.hidden]])]),
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
var Zs = ne({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: wc,
  setup(e) {
    var n = F(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Cc,
      classes: Sc,
      value: n
    };
  }
});
Zs.render = kc;
const or = Zs;
or.install = function(e) {
  e.component(or.name, or);
};
var uS = or, $c = {
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
  onChange: R(),
  "onUpdate:active": R(),
  onBeforeChange: R(),
  onFabClick: R(),
  fabProps: {
    type: Object
  }
}, Js = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Tc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(Js);
  return {
    length: n,
    bottomNavigationItems: e,
    bindBottomNavigationItem: r
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
var {
  n: Pc,
  classes: Oc
} = re("bottom-navigation"), {
  n: ro
} = re("bottom-navigation-item"), el = ro("--right-half-space"), nl = ro("--left-half-space"), rl = ro("--right-space"), Vc = {
  type: "primary"
};
function Mc(e, n) {
  var r = oe("var-button");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (p(), ge(
      r,
      Ve({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: fe(() => [j(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : ee("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Qs = ne({
  name: "VarBottomNavigation",
  components: {
    VarButton: Xe
  },
  props: $c,
  setup(e, n) {
    var {
      slots: r
    } = n, a = B(null), t = F(() => e.active), o = F(() => e.activeColor), i = F(() => e.inactiveColor), l = B({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Tc(), v = () => {
      s.value === 0 || f() || m() || h();
    }, f = () => u.find(($) => {
      var {
        name: I
      } = $;
      return t.value === I.value;
    }), m = () => u.find(($) => {
      var {
        index: I
      } = $;
      return t.value === I.value;
    }), h = () => {
      nn(t.value) && (t.value < 0 ? T(e["onUpdate:active"], 0) : t.value > s.value - 1 && T(e["onUpdate:active"], s.value - 1));
    }, y = ($) => {
      t.value !== $ && (e.onBeforeChange ? w($) : k($));
    }, w = ($) => {
      var I = T(e.onBeforeChange, $);
      I = Ce(I) ? I : [I], Promise.all(I).then((V) => {
        V.some((g) => !g) || k($);
      });
    }, k = ($) => {
      T(e["onUpdate:active"], $), T(e.onChange, $);
    }, M = () => {
      var $ = D();
      $.forEach((I) => {
        I.classList.remove(el, nl, rl);
      });
    }, b = ($) => {
      var I = D(), V = I.length, g = $ % 2 === 0;
      I.forEach((C, H) => {
        P(g, C, H, V);
      });
    }, P = ($, I, V, g) => {
      var C = V === g - 1;
      if (!$ && C) {
        I.classList.add(rl);
        return;
      }
      var H = V === g / 2 - 1, Q = V === g / 2;
      H ? I.classList.add(el) : Q && I.classList.add(nl);
    }, D = () => Array.from(a.value.querySelectorAll("." + ro())), S = () => {
      T(e.onFabClick);
    }, E = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: y
    };
    return d(E), le(() => s.value, v), le(() => e.fabProps, ($) => {
      l.value = Ro({}, Vc, $);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && b(s.value);
    }), Kt(() => {
      M(), r.fab && b(s.value);
    }), {
      n: Pc,
      classes: Oc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: S,
      fabProps: l
    };
  }
});
Qs.render = Mc;
const Or = Qs;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var dS = Or, Bc = {
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
  onClick: R()
};
function Ic() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Js);
  if (!r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: Ec,
  classes: Dc
} = re("bottom-navigation-item"), Nc = {
  type: "danger",
  dot: !0
};
function Ac(e, n) {
  var r = oe("var-icon"), a = oe("var-badge"), t = Me("ripple");
  return we((p(), O(
    "button",
    {
      class: c(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: G({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), ge(
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
    )) : ee("v-if", !0), j(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), ge(
      a,
      Ve({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : ee("v-if", !0), z(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? ee("v-if", !0) : (p(), O(
        Oe,
        {
          key: 0
        },
        [be(
          ae(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), j(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var _s = ne({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: or,
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: Bc,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = B({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = Ic(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var m, h = (m = n.value) != null ? m : t.value;
      T(e.onClick, h), T(o.onToggle, h);
    };
    return i(d), le(() => r.value, (m) => {
      a.value = m === !0 ? Nc : r.value;
    }, {
      immediate: !0
    }), {
      n: Ec,
      classes: Dc,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
_s.render = Ac;
const Vr = _s;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var vS = Vr, zc = {
  separator: {
    type: String
  },
  onClick: R()
}, xs = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Lc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(xs);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Rc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(xs);
  if (!n)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Uc,
  classes: Fc
} = re("breadcrumb");
function Hc(e, n) {
  return p(), O(
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
      [j(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? ee("v-if", !0) : j(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [z(
        "div",
        {
          class: c(e.n("separator"))
        },
        ae((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var eu = ne({
  name: "VarBreadcrumb",
  props: zc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Rc(), t = F(() => n.value === r.length.value - 1), o = F(() => r.separator.value), i = (l) => {
      t.value || T(e.onClick, l);
    };
    return a(null), {
      n: Uc,
      classes: Fc,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
eu.render = Hc;
const Mr = eu;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var fS = Mr, Yc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: jc
} = re("breadcrumbs");
function Wc(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var nu = ne({
  name: "VarBreadcrumbs",
  props: Yc,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Lc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: jc
    };
  }
});
nu.render = Wc;
const Br = nu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var cS = Br;
function Gc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function qc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Xc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Kc = {
  type: {
    type: String,
    default: "default",
    validator: Gc
  },
  size: {
    type: String,
    default: "normal",
    validator: qc
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
    validator: Xc
  },
  elevation: {
    type: [Number, String],
    default: 2
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Zc,
  classes: Jc
} = re("button-group");
function Qc(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var ru = ne({
  name: "VarButtonGroup",
  props: Kc,
  setup(e) {
    var {
      bindButtons: n
    } = sc(), r = {
      elevation: F(() => e.elevation),
      type: F(() => e.type),
      size: F(() => e.size),
      color: F(() => e.color),
      textColor: F(() => e.textColor),
      mode: F(() => e.mode)
    };
    return n(r), {
      n: Zc,
      classes: Jc
    };
  }
});
ru.render = Qc;
const Ir = ru;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var mS = Ir;
function _c(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var xc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: _c,
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
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: R(),
  "onUpdate:floating": R()
};
function al(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function tl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        al(o, a, t, i, l, "next", s);
      }
      function l(s) {
        al(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: em,
  classes: nm
} = re("card"), rm = 500, am = ["src", "alt"];
function tm(e, n) {
  var r = oe("var-icon"), a = oe("var-button"), t = Me("ripple");
  return we((p(), O(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
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
      [j(e.$slots, "image", {}, () => [e.src ? (p(), O(
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
        am
      )) : ee("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("container"))
        },
        [j(e.$slots, "title", {}, () => [e.title ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [j(e.$slots, "extra")],
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
          [j(e.$slots, "floating-content")],
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
        [j(e.$slots, "close-button", {}, () => [J(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Bn(e.close, ["stop"])
          },
          {
            default: fe(() => [J(
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
      )) : ee("v-if", !0)],
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
var au = ne({
  name: "VarCard",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarButton: Xe
  },
  props: xc,
  setup(e) {
    var n = B(null), r = B(null), a = B("auto"), t = B("auto"), o = B("100%"), i = B("100%"), l = B("auto"), s = B("auto"), u = B(void 0), d = B("hidden"), v = B("0px"), f = B("0"), m = F(() => e.layout === "row"), h = B(!1), y = B(!1), {
      zIndex: w
    } = gt(() => e.floating, 1);
    xt(() => e.floating, () => !m.value);
    var k = "auto", M = "auto", b = null, P = B(null), D = /* @__PURE__ */ function() {
      var I = tl(function* () {
        clearTimeout(P.value), clearTimeout(b), P.value = null, P.value = setTimeout(/* @__PURE__ */ tl(function* () {
          var {
            width: V,
            height: g,
            left: C,
            top: H
          } = n.value.getBoundingClientRect();
          a.value = me(V), t.value = me(g), o.value = a.value, i.value = t.value, l.value = me(H), s.value = me(C), u.value = "fixed", k = l.value, M = s.value, h.value = !0, yield In(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? rm : 0);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), S = () => {
      clearTimeout(b), clearTimeout(P.value), P.value = null, o.value = a.value, i.value = t.value, l.value = k, s.value = M, v.value = "0px", f.value = "0", h.value = !1, b = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", k = "auto", M = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, E = () => {
      T(e["onUpdate:floating"], !1);
    }, $ = (I) => {
      T(e.onClick, I);
    };
    return le(() => e.floating, (I) => {
      m.value || Be(() => {
        I ? D() : S();
      });
    }, {
      immediate: !0
    }), {
      n: em,
      classes: nm,
      toSizeUnit: me,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: P,
      floaterWidth: o,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: w,
      isRow: m,
      close: E,
      showFloatingButtons: h,
      floated: y,
      handleClick: $
    };
  }
});
au.render = tm;
const Er = au;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var pS = Er, om = {
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
  onClick: R()
}, {
  n: im,
  classes: lm
} = re("cell");
function sm(e, n) {
  var r = oe("var-icon"), a = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "icon", {}, () => [e.icon ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [J(
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
    )) : ee("v-if", !0)]), z(
      "div",
      {
        class: c(e.n("content"))
      },
      [j(e.$slots, "default", {}, () => [e.title ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ae(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        ae(e.description),
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
var tu = ne({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: om,
  setup(e) {
    var n = F(() => e.borderOffset == null ? {} : {
      "--cell-border-left": me(e.borderOffset),
      "--cell-border-right": me(e.borderOffset)
    }), r = (a) => {
      T(e.onClick, a);
    };
    return {
      n: im,
      classes: lm,
      toSizeUnit: me,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
tu.render = sm;
const ir = tu;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var hS = ir, um = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: dm
} = re("form-details"), vm = {
  key: 0
}, fm = {
  key: 0
};
function cm(e, n) {
  return p(), ge(
    Ne,
    {
      name: e.n()
    },
    {
      default: fe(() => [e.errorMessage || e.extraMessage ? (p(), O(
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
          [J(
            Ne,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.errorMessage ? (p(), O(
                "div",
                vm,
                ae(e.errorMessage),
                1
                /* TEXT */
              )) : ee("v-if", !0)]),
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
          [J(
            Ne,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.extraMessage ? (p(), O(
                "div",
                fm,
                ae(e.extraMessage),
                1
                /* TEXT */
              )) : ee("v-if", !0)]),
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
      )) : ee("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var ou = ne({
  name: "VarFormDetails",
  props: um,
  setup: () => ({
    n: dm
  })
});
ou.render = cm;
const We = ou;
We.install = function(e) {
  e.component(We.name, We);
};
var gS = We, mm = {
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
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, iu = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function pm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(iu);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function hm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(iu);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Uo.apply(this, arguments);
}
var lu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(lu), a = Ma(), t = r ? (o) => {
    r(Uo({}, o, {
      instance: a
    }));
  } : null;
  return {
    index: n,
    form: e,
    bindForm: t
  };
}
function gm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(lu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: ym,
  classes: bm
} = re("checkbox");
function wm(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("hover"), i = Me("ripple");
  return p(), O(
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
      [we((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
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
        )]) : j(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [J(
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
      )), [[o, e.handleHovering, "desktop"], [i, {
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
var su = ne({
  name: "VarCheckbox",
  directives: {
    Ripple: Re,
    Hover: En
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  props: mm,
  setup(e) {
    var n = B(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = B(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = hm(), {
      hovering: l,
      handleHovering: s
    } = hr(), {
      form: u,
      bindForm: d
    } = wn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: h
    } = bn(), y = ($) => {
      Be(() => {
        var {
          validateTrigger: I,
          rules: V,
          modelValue: g
        } = e;
        f(I, $, V, g);
      });
    }, w = ($) => {
      n.value = $;
      var {
        checkedValue: I,
        onChange: V
      } = e;
      T(e["onUpdate:modelValue"], n.value), T(V, n.value), y("onChange"), $ === I ? o == null || o.onChecked(I) : o == null || o.onUnchecked(I);
    }, k = ($) => {
      var {
        disabled: I,
        readonly: V,
        checkedValue: g,
        uncheckedValue: C,
        onClick: H
      } = e;
      if (!(u != null && u.disabled.value || I) && (T(H, $), !(u != null && u.readonly.value || V))) {
        t.value = !0;
        var Q = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && Q || w(r.value ? C : g);
      }
    }, M = ($) => {
      var {
        checkedValue: I,
        uncheckedValue: V
      } = e;
      n.value = $.includes(I) ? I : V;
    }, b = () => {
      t.value = !1;
    }, P = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), h();
    }, D = ($) => {
      var {
        checkedValue: I,
        uncheckedValue: V
      } = e, g = ![I, V].includes($);
      g && ($ = r.value ? V : I), w($);
    }, S = () => m(e.rules, e.modelValue);
    le(() => e.modelValue, ($) => {
      n.value = $;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: r,
      sync: M,
      validate: S,
      resetValidation: h,
      reset: P,
      resetWithAnimation: b
    };
    return T(i, E), T(d, E), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: l,
      handleHovering: s,
      n: ym,
      classes: bm,
      handleClick: k,
      toggle: D,
      reset: P,
      validate: S,
      resetValidation: h
    };
  }
});
su.render = wm;
const lr = su;
lr.install = function(e) {
  e.component(lr.name, lr);
};
var yS = lr;
function Cm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Sm = {
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
    validator: Cm
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: km,
  classes: $m
} = re("checkbox-group");
function Tm(e, n) {
  var r = oe("var-form-details");
  return p(), O(
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
    ), J(
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
var uu = ne({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: Sm,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = pm(), {
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = F(() => l.value), f = (E) => {
      Be(() => {
        var {
          validateTrigger: $,
          rules: I,
          modelValue: V
        } = e;
        s($, E, I, V);
      });
    }, m = (E) => {
      T(e["onUpdate:modelValue"], E), T(e.onChange, E), f("onChange");
    }, h = (E) => {
      var {
        modelValue: $
      } = e;
      $.includes(E) || m([...$, E]);
    }, y = (E) => {
      var {
        modelValue: $
      } = e;
      $.includes(E) && m($.filter((I) => I !== E));
    }, w = () => t.forEach((E) => {
      var {
        sync: $
      } = E;
      return $(e.modelValue);
    }), k = () => {
      t.forEach((E) => E.resetWithAnimation());
    }, M = () => {
      var E = t.map((I) => {
        var {
          checkedValue: V
        } = I;
        return V.value;
      }), $ = Hi(E);
      return k(), T(e["onUpdate:modelValue"], $), $;
    }, b = () => {
      var E = t.filter((I) => {
        var {
          checked: V
        } = I;
        return !V.value;
      }).map((I) => {
        var {
          checkedValue: V
        } = I;
        return V.value;
      }), $ = Hi(E);
      return k(), T(e["onUpdate:modelValue"], $), $;
    }, P = () => {
      T(e["onUpdate:modelValue"], []), d();
    }, D = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, w, {
      deep: !0
    }), le(() => a.value, w);
    var S = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: y,
      validate: D,
      resetValidation: d,
      reset: P,
      errorMessage: v
    };
    return o(S), T(i, S), {
      errorMessage: l,
      n: km,
      classes: $m,
      checkAll: M,
      inverseAll: b,
      reset: P,
      validate: D,
      resetValidation: d
    };
  }
});
uu.render = Tm;
const Dr = uu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var bS = Dr;
function Pm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Om(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Vm = {
  type: {
    type: String,
    default: "default",
    validator: Pm
  },
  size: {
    type: String,
    default: "normal",
    validator: Om
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(ws, "name"),
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
  onClose: R()
}, {
  n: Xn,
  classes: Mm
} = re("chip");
function Bm(e, n) {
  var r = oe("var-icon");
  return p(), ge(
    Ne,
    {
      name: e.n("$-fade")
    },
    {
      default: fe(() => [z(
        "span",
        Ve({
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
        ), j(e.$slots, "right"), e.closable ? (p(), O(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [J(
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
        )) : ee("v-if", !0)],
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
var du = ne({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Vm,
  setup(e) {
    var n = F(() => {
      var {
        plain: t,
        textColor: o,
        color: i
      } = e;
      return t ? {
        color: o || i,
        borderColor: i
      } : {
        color: o,
        background: i
      };
    }), r = F(() => {
      var {
        size: t,
        block: o,
        type: i,
        plain: l,
        round: s
      } = e, u = Xn(o ? "$--flex" : "$--inline-flex"), d = l ? Xn("plain") + " " + Xn("plain-" + i) : Xn("--" + i), v = s ? Xn("--round") : null;
      return [Xn("--" + t), u, d, v];
    }), a = (t) => {
      T(e.onClose, t);
    };
    return {
      n: Xn,
      classes: Mm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
du.render = Bm;
const sr = du;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var wS = sr;
function Im(e) {
  return ["row", "column"].includes(e);
}
function Em(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Dm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Nm = {
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
    validator: Im
  },
  justify: {
    type: String,
    validator: Em
  },
  align: {
    type: String,
    validator: Dm
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
  onClick: R()
}, vu = Symbol("ROW_BIND_COL_KEY");
function Am() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(vu);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function zm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(vu);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: kt,
  classes: Lm
} = re("col");
function Rm(e, n) {
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
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var fu = ne({
  name: "VarCol",
  props: Nm,
  setup(e) {
    var n = B({
      left: 0,
      right: 0
    }), r = F(() => L(e.span)), a = F(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = zm(), i = {
      setPadding(u) {
        n.value = u;
      }
    }, l = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (fi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push(kt("--span-" + u + "-" + m)), f && v.push(kt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(kt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      T(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), T(o, i), {
      n: kt,
      classes: Lm,
      padding: n,
      toNumber: L,
      toSizeUnit: me,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: zt
    };
  }
});
fu.render = Rm;
const Nr = fu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var CS = Nr, cu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Um() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(cu);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Fm = {
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: Hm
} = re("collapse");
function Ym(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var mu = ne({
  name: "VarCollapse",
  props: Fm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Um(), t = F(() => e.modelValue), o = F(() => e.offset), i = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (m, h) => i() ? h ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((y) => y !== m) : null, s = (m, h) => {
      var y = l(m, h);
      T(e["onUpdate:modelValue"], y), T(e.onChange, y);
    }, u = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: y
          } = h;
          return e.modelValue === y.value;
        });
      var m = r.filter((h) => {
        var {
          name: y
        } = h;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return m.length ? m : void 0;
    }, d = () => e.accordion ? r.find((m) => {
      var {
        index: h,
        name: y
      } = m;
      return y.value === void 0 && e.modelValue === h.value;
    }) : r.filter((m) => {
      var {
        index: h,
        name: y
      } = m;
      return y.value === void 0 && e.modelValue.includes(h.value);
    }), v = () => {
      if (i()) {
        var m = u() || d();
        if (e.accordion && !m || !e.accordion && !m.length) {
          r.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((h) => {
          var y = e.accordion ? m === h : m.includes(h);
          h.init(e.accordion, y);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), le(() => n.value, () => Be().then(v)), le(() => e.modelValue, () => Be().then(v)), {
      n: Hm
    };
  }
});
mu.render = Ym;
const Ar = mu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var SS = Ar;
function jm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(cu);
  if (!r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var Wm = {
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
  n: Gm,
  classes: qm
} = re("collapse-item");
function Xm(e, n) {
  var r = oe("var-icon");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [z(
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
        [j(e.$slots, "title", {}, () => [be(
          ae(e.title),
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
        [j(e.$slots, "icon", {}, () => [J(
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
    ), we(z(
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
        [j(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[pr, e.show]])],
    2
    /* CLASS */
  );
}
var pu = ne({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Wm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = jm(), t = !0, o = B(null), i = B(!1), l = B(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (b, P) => {
      s.value === void 0 || b && Ce(s.value) || P === l.value || (l.value = P, m(!0));
    }, m = (b) => {
      e.disabled || b || d(e.name || n.value, !l.value);
    }, h = () => {
      o.value && (o.value.style.height = "", i.value = !0, Be(() => {
        var {
          offsetHeight: b
        } = o.value;
        o.value.style.height = 0 + "px", On(() => {
          o.value.style.height = b + "px", t && Qt(() => {
            t && k();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, w = () => {
      if (o.value) {
        var {
          offsetHeight: b
        } = o.value;
        o.value.style.height = b + "px", On(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, k = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, M = {
      index: n,
      name: v,
      init: f
    };
    return a(M), le(l, (b) => {
      b ? h() : w();
    }), {
      n: Gm,
      start: y,
      classes: qm,
      show: i,
      isShow: l,
      offset: u,
      toggle: m,
      contentEl: o,
      transitionend: k
    };
  }
});
pu.render = Xm;
const zr = pu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var kS = zr, Km = {
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
  onEnd: R(),
  onChange: R()
}, {
  n: Zm
} = re("countdown"), Fo = 1e3, Ho = 60 * Fo, Yo = 60 * Ho, ol = 24 * Yo;
function Jm(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default", vi(rs(e.timeData)), () => [be(
      ae(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var hu = ne({
  name: "VarCountdown",
  props: Km,
  setup(e) {
    var n = B(""), r = B({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, i = 0, l, s = (h, y) => {
      var w = Object.values(y), k = ["DD", "HH", "mm", "ss"], M = [24, 60, 60, 1e3];
      if (k.forEach((P, D) => {
        h.includes(P) ? h = h.replace(P, Sa("" + w[D], 2, "0")) : w[D + 1] += w[D] * M[D];
      }), h.includes("S")) {
        var b = Sa("" + w[w.length - 1], 3, "0");
        h.includes("SSS") ? h = h.replace("SSS", b) : h.includes("SS") ? h = h.replace("SS", b.slice(0, 2)) : h = h.replace("S", b.slice(0, 1));
      }
      return h;
    }, u = (h) => {
      var y = Math.floor(h / ol), w = Math.floor(h % ol / Yo), k = Math.floor(h % Yo / Ho), M = Math.floor(h % Ho / Fo), b = Math.floor(h % Fo), P = {
        days: y,
        hours: w,
        minutes: k,
        seconds: M,
        milliseconds: b
      };
      r.value = P, T(e.onChange, r.value), n.value = s(e.format, P);
    }, d = () => {
      var {
        time: h,
        onEnd: y
      } = e, w = performance.now();
      if (a || (a = w + L(h)), i = a - w, i < 0 && (i = 0), u(i), i === 0) {
        T(y);
        return;
      }
      t && (o = On(d));
    }, v = function(h) {
      h === void 0 && (h = !1), !(t && !h) && (t = !0, a = performance.now() + (i || L(e.time)), d());
    }, f = () => {
      t = !1, Xi(o);
    }, m = () => {
      a = 0, t = !1, Xi(o), d();
    };
    return le(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), Za(() => {
      l != null && (t = l, t === !0 && v(!0));
    }), br(() => {
      l = t, f();
    }), Ja(f), {
      showTime: n,
      timeData: r,
      n: Zm,
      start: v,
      pause: f,
      reset: m
    };
  }
});
hu.render = Jm;
const Lr = hu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var $S = Lr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var za = 9e15, wr = 1e9, jo = "0123456789abcdef", Ut = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ft = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Wo = {
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
  minE: -za,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: za,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, gu, Rn, ce = !0, ao = "[DecimalError] ", gr = ao + "Invalid argument: ", yu = ao + "Precision limit exceeded", bu = ao + "crypto unavailable", wu = "[object Decimal]", Qe = Math.floor, He = Math.pow, Qm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, _m = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, xm = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Cu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Pn = 1e7, ve = 7, ep = 9007199254740991, np = Ut.length - 1, Go = Ft.length - 1, q = { toStringTag: wu };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
q.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(gr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
  var n, r, a, t, o = this, i = o.d, l = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = i.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = rp(a, Pu(a, r)), a.precision = e, a.rounding = n, ue(Rn == 2 || Rn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ce = !1, o = d.s * He(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = qe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = He(r, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Pe(u.plus(d).times(l), u.plus(s), i + 2, 1), qe(l.d).slice(0, i) === (r = qe(a.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return ce = !0, ue(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Qe(this.e / ve)) * ve, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return Pe(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Pe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, n, r, a, t, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite())
    return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return l;
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / oo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Wa(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Wa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / oo(5, e)), t = Wa(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Pe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? $n(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? $n(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = $n(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ce = !1, r = r.times(r).minus(1).sqrt().plus(r), ce = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ce = !1, r = r.times(r).plus(1).sqrt().plus(r), ce = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Pe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = $n(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Go)
      return i = $n(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Go)
      return i = $n(d, v + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / ve + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ce = !1, n = Math.ceil(l / ve), a = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = i.minus(t.div(a += 2)), t = t.times(s), i = o.plus(t.div(a += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === o.d[e] && e--; )
        ;
  return r && (i = i.times(2 << r - 1)), ce = !0, ue(i, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Qe(this.e / ve) > this.d.length - 2;
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
  var n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, m = 5;
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
  if (ce = !1, l = v + m, i = rr(u, l), a = n ? Ht(d, l + 10) : rr(e, l), s = Pe(i, a, l, 1), ut(s.d, t = v, f))
    do
      if (l += 10, i = rr(u, l), a = n ? Ht(d, l + 10) : rr(e, l), s = Pe(i, a, l, 1), !o) {
        +qe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (ut(s.d, t += 10, f));
  return ce = !0, ue(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, h = m.constructor;
  if (e = new h(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new h(NaN) : m.d ? e.s = -e.s : e = new h(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = h.precision, s = h.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new h(m);
    else
      return new h(s === 3 ? -0 : 0);
    return ce ? ue(e, l, s) : e;
  }
  if (r = Qe(e.e / ve), d = Qe(m.e / ve), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, i = f.length) : (n = f, r = d, i = u.length), a = Math.max(Math.ceil(l / ve), i) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, i = f.length, v = a < i, v && (i = a), a = 0; a < i; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), i = u.length, a = f.length - i; a > 0; --a)
    u[i++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = Pn - 1;
      --u[t], u[a] += Pn;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = to(u, r), ce ? ue(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (ce = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), ce = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return qo(this);
};
q.naturalLogarithm = q.ln = function() {
  return rr(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ce ? ue(e, l, s) : e;
  if (o = Qe(v.e / ve), a = Qe(e.e / ve), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / ve), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Pn | 0, u[t] %= Pn;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = to(u, a), ce ? ue(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(gr + e);
  return r.d ? (n = Su(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = tp(a, Pu(a, r)), a.precision = e, a.rounding = n, ue(Rn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (ce = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = qe(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(i, o, r + 2, 1)).times(0.5), qe(o.d).slice(0, r) === (n = qe(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(o, s + 1, 0), o.times(o).eq(i))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(i));
        break;
      }
  return ce = !0, ue(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Rn == 2 || Rn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Qe(d.e / ve) + Qe(e.e / ve), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + m[a] * f[t - a - 1] + n, o[t--] = l % Pn | 0, n = l / Pn | 0;
    o[t] = (o[t] + n) % Pn | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = to(o, r), ce ? ue(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return Ti(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (on(e, 0, wr), n === void 0 ? n = a.rounding : on(n, 0, 8), ue(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Dn(a, !0) : (on(e, 0, wr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = ue(new t(a), e + 1, n), r = Dn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Dn(t) : (on(e, 0, wr), n === void 0 ? n = o.rounding : on(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Dn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, h = m.d, y = m.constructor;
  if (!h)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = Su(h) - m.e - 1, i = o % ve, n.d[0] = He(10, i < 0 ? ve + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new y(e), !l.isInt() || l.lt(u))
      throw Error(gr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (ce = !1, l = new y(qe(h)), d = y.precision, y.precision = o = h.length * ve * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Pe(u, a, o, 1).minus(m).abs().cmp(Pe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], y.precision = d, ce = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Ti(this, 16, e, n);
};
q.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : on(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (ce = !1, r = Pe(r, e, 0, n, 1).times(e), ce = !0, ue(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return Ti(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(He(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Qe(e.e / ve), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= ep)
    return t = ku(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = He(+l, u), n = r == 0 || !isFinite(r) ? Qe(u * (Math.log("0." + qe(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (ce = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = qo(e.times(rr(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), ut(t.d, a, o) && (n = a + 10, t = ue(qo(e.times(rr(l, n + r)), n), n + 5, 1), +qe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, ce = !0, s.rounding = o, ue(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Dn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (on(e, 1, wr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = ue(new t(a), e, n), r = Dn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (on(e, 1, wr), n === void 0 ? n = a.rounding : on(n, 0, 8)), ue(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = Dn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = Dn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function qe(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = ve - a.length, r && (o += Zn(r)), o += a;
    i = e[n], a = i + "", r = ve - a.length, r && (o += Zn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function on(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(gr + e);
}
function ut(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ve, t = 0) : (t = Math.ceil((n + 1) / ve), n %= ve), o = He(10, ve - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == He(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == He(10, n - 3) - 1, i;
}
function Bt(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += jo.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function rp(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / oo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Wa(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Pe = function() {
  function e(a, t, o) {
    var i, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      i = a[s] * t + l, a[s] = i % o | 0, l = i / o | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, o, i) {
    var l, s;
    if (o != i)
      s = o > i ? 1 : -1;
    else
      for (l = s = 0; l < o; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, o, i) {
    for (var l = 0; o--; )
      a[o] -= l, l = a[o] < t[o] ? 1 : 0, a[o] = l * i + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, i, l, s) {
    var u, d, v, f, m, h, y, w, k, M, b, P, D, S, E, $, I, V, g, C, H = a.constructor, Q = a.s == t.s ? 1 : -1, _ = a.d, W = t.d;
    if (!_ || !_[0] || !W || !W[0])
      return new H(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (_ ? W && _[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          _ && _[0] == 0 || !W ? Q * 0 : Q / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Pn, m = ve, d = Qe(a.e / m) - Qe(t.e / m)), g = W.length, I = _.length, k = new H(Q), M = k.d = [], v = 0; W[v] == (_[v] || 0); v++)
      ;
    if (W[v] > (_[v] || 0) && d--, o == null ? (S = o = H.precision, i = H.rounding) : l ? S = o + (a.e - t.e) + 1 : S = o, S < 0)
      M.push(1), h = !0;
    else {
      if (S = S / m + 2 | 0, v = 0, g == 1) {
        for (f = 0, W = W[0], S++; (v < I || f) && S--; v++)
          E = f * s + (_[v] || 0), M[v] = E / W | 0, f = E % W | 0;
        h = f || v < I;
      } else {
        for (f = s / (W[0] + 1) | 0, f > 1 && (W = e(W, f, s), _ = e(_, f, s), g = W.length, I = _.length), $ = g, b = _.slice(0, g), P = b.length; P < g; )
          b[P++] = 0;
        C = W.slice(), C.unshift(0), V = W[0], W[1] >= s / 2 && ++V;
        do
          f = 0, u = n(W, b, g, P), u < 0 ? (D = b[0], g != P && (D = D * s + (b[1] || 0)), f = D / V | 0, f > 1 ? (f >= s && (f = s - 1), y = e(W, f, s), w = y.length, P = b.length, u = n(y, b, w, P), u == 1 && (f--, r(y, g < w ? C : W, w, s))) : (f == 0 && (u = f = 1), y = W.slice()), w = y.length, w < P && y.unshift(0), r(b, y, P, s), u == -1 && (P = b.length, u = n(W, b, g, P), u < 1 && (f++, r(b, g < P ? C : W, P, s))), P = b.length) : u === 0 && (f++, b = [0]), M[v++] = f, u && b[0] ? b[P++] = _[$] || 0 : (b = [_[$]], P = 1);
        while (($++ < I || b[0] !== void 0) && S--);
        h = b[0] !== void 0;
      }
      M[0] || M.shift();
    }
    if (m == 1)
      k.e = d, gu = h;
    else {
      for (v = 1, f = M[0]; f >= 10; f /= 10)
        v++;
      k.e = v + d * m - 1, ue(k, l ? o + k.e + 1 : o, i, h);
    }
    return k;
  };
}();
function ue(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (o = n - t, o < 0)
        o += ve, i = n, d = v[f = 0], s = d / He(10, t - i - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ve), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ve, i = o - ve + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        o %= ve, i = o - ve + t, s = i < 0 ? 0 : d / He(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % He(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / He(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = He(10, (ve - n % ve) % ve), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = He(10, ve - o), v[f] = i > 0 ? (d / He(10, t - i) % He(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, i = v[0]; i >= 10; i /= 10)
              o++;
            for (i = v[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            o != l && (e.e++, v[0] == Pn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != Pn)
              break;
            v[f--] = 0, l = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return ce && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function Dn(e, n, r) {
  if (!e.isFinite())
    return Tu(e);
  var a, t = e.e, o = qe(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Zn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Zn(-t - 1) + o, r && (a = r - i) > 0 && (o += Zn(a))) : t >= i ? (o += Zn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + Zn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += Zn(a))), o;
}
function to(e, n) {
  var r = e[0];
  for (n *= ve; r >= 10; r /= 10)
    n++;
  return n;
}
function Ht(e, n, r) {
  if (n > np)
    throw ce = !0, r && (e.precision = r), Error(yu);
  return ue(new e(Ut), n, 1, !0);
}
function $n(e, n, r) {
  if (n > Go)
    throw Error(yu);
  return ue(new e(Ft), n, r, !0);
}
function Su(e) {
  var n = e.length - 1, r = n * ve + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Zn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function ku(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / ve + 4);
  for (ce = !1; ; ) {
    if (r % 2 && (o = o.times(n), ll(o.d, i) && (t = !0)), r = Qe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), ll(n.d, i);
  }
  return ce = !0, o;
}
function il(e) {
  return e.d[e.d.length - 1] & 1;
}
function $u(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function qo(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ce = !1, s = h) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(He(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), qe(l.d).slice(0, s) === qe(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && ut(i.d, s - a, m, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = h, m, ce = !0);
      else
        return f.precision = h, i;
    }
    i = l;
  }
}
function rr(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, m = 1, h = 10, y = e, w = y.d, k = y.constructor, M = k.rounding, b = k.precision;
  if (y.s < 0 || !w || !w[0] || !y.e && w[0] == 1 && w.length == 1)
    return new k(w && !w[0] ? -1 / 0 : y.s != 1 ? NaN : w ? 0 : y);
  if (n == null ? (ce = !1, d = b) : d = n, k.precision = d += h, r = qe(w), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = qe(y.d), a = r.charAt(0), m++;
    o = y.e, a > 1 ? (y = new k("0." + r), o++) : y = new k(a + "." + r.slice(1));
  } else
    return u = Ht(k, d + 2, b).times(o + ""), y = rr(new k(a + "." + r.slice(1)), d - h).plus(u), k.precision = b, n == null ? ue(y, b, M, ce = !0) : y;
  for (v = y, s = i = y = Pe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new k(t), d, 1)), qe(u.d).slice(0, d) === qe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Ht(k, d + 2, b).times(o + ""))), s = Pe(s, new k(m), d, 1), n == null)
        if (ut(s.d, d - h, M, l))
          k.precision = d += h, u = i = y = Pe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = l = 1;
        else
          return ue(s, k.precision = b, M, ce = !0);
      else
        return k.precision = b, s;
    s = u, t += 2;
  }
}
function Tu(e) {
  return String(e.s * e.s / 0);
}
function Xo(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ve, r < 0 && (a += ve), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ve; a < t; )
        e.d.push(+n.slice(a, a += ve));
      n = n.slice(a), a = ve - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), ce && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function ap(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Cu.test(n))
      return Xo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (_m.test(n))
    r = 16, n = n.toLowerCase();
  else if (Qm.test(n))
    r = 2;
  else if (xm.test(n))
    r = 8;
  else
    throw Error(gr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = ku(a, new a(r), o, o * 2)), u = Bt(n, r, Pn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = to(u, d), e.d = u, ce = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? He(2, s) : ar.pow(2, s))), ce = !0, e);
}
function tp(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Wa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / oo(5, r)), n = Wa(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Wa(e, n, r, a, t) {
  var o, i, l, s, u = e.precision, d = Math.ceil(u / ve);
  for (ce = !1, s = r.times(r), l = new e(a); ; ) {
    if (i = Pe(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(i) : a.minus(i), a = Pe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(a), i.d[d] !== void 0) {
      for (o = d; i.d[o] === l.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = l, l = a, a = i, i = o;
  }
  return ce = !0, i.d.length = d + 1, i;
}
function oo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Pu(e, n) {
  var r, a = n.s < 0, t = $n(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Rn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Rn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Rn = il(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Rn = il(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ti(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor, h = r !== void 0;
  if (h ? (on(r, 1, wr), a === void 0 ? a = m.rounding : on(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Tu(e);
  else {
    for (d = Dn(e), i = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Bt(Dn(f), 10, t), f.e = f.d.length), v = Bt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = gu), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += jo.charAt(v[i]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = Bt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += jo.charAt(v[i]);
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
function ll(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function op(e) {
  return new this(e).abs();
}
function ip(e) {
  return new this(e).acos();
}
function lp(e) {
  return new this(e).acosh();
}
function sp(e, n) {
  return new this(e).plus(n);
}
function up(e) {
  return new this(e).asin();
}
function dp(e) {
  return new this(e).asinh();
}
function vp(e) {
  return new this(e).atan();
}
function fp(e) {
  return new this(e).atanh();
}
function cp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = $n(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? $n(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = $n(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = $n(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function mp(e) {
  return new this(e).cbrt();
}
function pp(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function hp(e, n, r) {
  return new this(e).clamp(n, r);
}
function gp(e) {
  if (!e || typeof e != "object")
    throw Error(ao + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    wr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -za,
    0,
    "toExpPos",
    0,
    za,
    "maxE",
    0,
    za,
    "minE",
    -za,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Wo[r]), (a = e[r]) !== void 0)
      if (Qe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(gr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Wo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(bu);
      else
        this[r] = !1;
    else
      throw Error(gr + r + ": " + a);
  return this;
}
function yp(e) {
  return new this(e).cos();
}
function bp(e) {
  return new this(e).cosh();
}
function Ou(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, sl(o)) {
      u.s = o.s, ce ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (i = 0, l = o; l >= 10; l /= 10)
          i++;
        ce ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Xo(u, o.toString());
    } else if (s !== "string")
      throw Error(gr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), Cu.test(o) ? Xo(u, o) : ap(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = gp, t.clone = Ou, t.isDecimal = sl, t.abs = op, t.acos = ip, t.acosh = lp, t.add = sp, t.asin = up, t.asinh = dp, t.atan = vp, t.atanh = fp, t.atan2 = cp, t.cbrt = mp, t.ceil = pp, t.clamp = hp, t.cos = yp, t.cosh = bp, t.div = wp, t.exp = Cp, t.floor = Sp, t.hypot = kp, t.ln = $p, t.log = Tp, t.log10 = Op, t.log2 = Pp, t.max = Vp, t.min = Mp, t.mod = Bp, t.mul = Ip, t.pow = Ep, t.random = Dp, t.round = Np, t.sign = Ap, t.sin = zp, t.sinh = Lp, t.sqrt = Rp, t.sub = Up, t.sum = Fp, t.tan = Hp, t.tanh = Yp, t.trunc = jp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function wp(e, n) {
  return new this(e).div(n);
}
function Cp(e) {
  return new this(e).exp();
}
function Sp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function kp() {
  var e, n, r = new this(0);
  for (ce = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return ce = !0, new this(1 / 0);
      r = n;
    }
  return ce = !0, r.sqrt();
}
function sl(e) {
  return e instanceof ar || e && e.toStringTag === wu || !1;
}
function $p(e) {
  return new this(e).ln();
}
function Tp(e, n) {
  return new this(e).log(n);
}
function Pp(e) {
  return new this(e).log(2);
}
function Op(e) {
  return new this(e).log(10);
}
function Vp() {
  return $u(this, arguments, "lt");
}
function Mp() {
  return $u(this, arguments, "gt");
}
function Bp(e, n) {
  return new this(e).mod(n);
}
function Ip(e, n) {
  return new this(e).mul(n);
}
function Ep(e, n) {
  return new this(e).pow(n);
}
function Dp(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : on(e, 1, wr), a = Math.ceil(e / ve), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(bu);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= ve, a && e && (t = He(10, ve - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
    l.pop();
  if (o < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= ve)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < ve && (r -= ve - a);
  }
  return i.e = r, i.d = l, i;
}
function Np(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Ap(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function zp(e) {
  return new this(e).sin();
}
function Lp(e) {
  return new this(e).sinh();
}
function Rp(e) {
  return new this(e).sqrt();
}
function Up(e, n) {
  return new this(e).sub(n);
}
function Fp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ce = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ce = !0, ue(r, this.precision, this.rounding);
}
function Hp(e) {
  return new this(e).tan();
}
function Yp(e) {
  return new this(e).tanh();
}
function jp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var ar = q.constructor = Ou(Wo);
Ut = new ar(Ut);
Ft = new ar(Ft);
var Wp = {
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
  onBeforeChange: R(),
  onChange: R(),
  onIncrement: R(),
  onDecrement: R(),
  "onUpdate:modelValue": R()
}, {
  n: Gp,
  classes: qp
} = re("counter"), ul = 100, dl = 600, Xp = ["inputmode", "readonly", "disabled"];
function Kp(e, n) {
  var r = oe("var-icon"), a = oe("var-button"), t = oe("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      Ve({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [J(
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
          default: fe(() => [J(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), we(z(
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
        Xp
      ), [[Cv, e.inputValue]]), J(
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
          default: fe(() => [J(r, {
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
var Vu = ne({
  name: "VarCounter",
  components: {
    VarButton: Xe,
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Re
  },
  inheritAttrs: !1,
  props: Wp,
  setup(e) {
    var n = B(""), {
      bindForm: r,
      form: a
    } = wn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: i,
      // expose
      resetValidation: l
    } = bn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, h = () => i(e.rules, e.modelValue), y = (W) => {
      Be(() => {
        var {
          validateTrigger: N,
          rules: x,
          modelValue: te
        } = e;
        o(N, W, x, te);
      });
    }, w = () => {
      var {
        min: W
      } = e;
      T(e["onUpdate:modelValue"], W != null ? L(W) : 0), l();
    }, k = {
      reset: w,
      validate: h,
      resetValidation: l
    }, M = F(() => {
      var {
        max: W,
        modelValue: N
      } = e;
      return W != null && L(N) >= L(W);
    }), b = F(() => {
      var {
        min: W,
        modelValue: N
      } = e;
      return W != null && L(N) <= L(W);
    }), P = (W) => {
      var {
        decimalLength: N,
        max: x,
        min: te
      } = e, U = L(W);
      return x != null && U > L(x) && (U = L(x)), te != null && U < L(te) && (U = L(te)), W = String(U), N != null && (W = U.toFixed(L(N))), W;
    }, D = (W) => {
      var {
        lazyChange: N,
        onBeforeChange: x
      } = e, {
        value: te
      } = W.target, U = P(te);
      N ? T(x, L(U), _) : Q(U), y("onInputChange");
    }, S = () => {
      var {
        disabled: W,
        readonly: N,
        disableDecrement: x,
        decrementButton: te,
        lazyChange: U,
        step: Z,
        modelValue: K,
        onDecrement: A,
        onBeforeChange: Y
      } = e;
      if (!(u != null && u.value || s != null && s.value || W || N || x || !te) && !b.value) {
        var X = new ar(L(K)).minus(new ar(L(Z))).toString(), de = P(X), pe = L(de);
        T(A, pe), U ? T(Y, pe, _) : (Q(de), y("onDecrement"));
      }
    }, E = () => {
      var {
        disabled: W,
        readonly: N,
        disableIncrement: x,
        incrementButton: te,
        lazyChange: U,
        step: Z,
        modelValue: K,
        onIncrement: A,
        onBeforeChange: Y
      } = e;
      if (!(u != null && u.value || s != null && s.value || W || N || x || !te) && !M.value) {
        var X = new ar(L(K)).plus(new ar(L(Z))).toString(), de = P(X), pe = L(de);
        T(A, pe), U ? T(Y, pe, _) : (Q(de), y("onIncrement"));
      }
    }, $ = () => {
      var {
        press: W,
        lazyChange: N
      } = e;
      !W || N || (m = window.setTimeout(() => {
        H();
      }, dl));
    }, I = () => {
      var {
        press: W,
        lazyChange: N
      } = e;
      !W || N || (f = window.setTimeout(() => {
        C();
      }, dl));
    }, V = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, g = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, C = () => {
      d = window.setTimeout(() => {
        E(), C();
      }, ul);
    }, H = () => {
      v = window.setTimeout(() => {
        S(), H();
      }, ul);
    }, Q = (W) => {
      n.value = W;
      var N = L(W);
      T(e["onUpdate:modelValue"], N);
    }, _ = (W) => {
      Q(P(String(W))), y("onLazyChange");
    };
    return T(r, k), le(() => e.modelValue, (W) => {
      Q(P(String(W))), T(e.onChange, L(W));
    }), Q(P(String(e.modelValue))), {
      n: Gp,
      classes: qp,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: M,
      isMin: b,
      validate: h,
      reset: w,
      resetValidation: l,
      handleChange: D,
      decrement: S,
      increment: E,
      pressDecrement: $,
      pressIncrement: I,
      releaseDecrement: V,
      releaseIncrement: g,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Vu.render = Kp;
const Rr = Vu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var TS = Rr, Mu = 60, Bu = Mu * 60, Iu = Bu * 24, Zp = Iu * 7, Ga = 1e3, ho = Mu * Ga, vl = Bu * Ga, Jp = Iu * Ga, Qp = Zp * Ga, Pi = "millisecond", La = "second", Ra = "minute", Ua = "hour", Jn = "day", It = "week", kn = "month", Eu = "quarter", Qn = "year", Fa = "date", _p = "YYYY-MM-DDTHH:mm:ssZ", fl = "Invalid Date", xp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, eh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const nh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ko = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, rh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Ko(t, 2, "0") + ":" + Ko(o, 2, "0");
}, ah = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, kn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), kn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, th = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, oh = function(n) {
  var r = {
    M: kn,
    y: Qn,
    w: It,
    d: Jn,
    D: Fa,
    h: Ua,
    m: Ra,
    s: La,
    ms: Pi,
    Q: Eu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, ih = function(n) {
  return n === void 0;
};
const lh = {
  s: Ko,
  z: rh,
  m: ah,
  a: th,
  p: oh,
  u: ih
};
var rt = "en", Ur = {};
Ur[rt] = nh;
var Oi = function(n) {
  return n instanceof io;
}, Yt = function e(n, r, a) {
  var t;
  if (!n)
    return rt;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Ur[o] && (t = o), r && (Ur[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Ur[l] = n, t = l;
  }
  return !a && t && (rt = t), t || !a && rt;
}, ie = function(n, r) {
  if (Oi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new io(a);
}, sh = function(n, r) {
  return ie(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = lh;
Te.l = Yt;
Te.i = Oi;
Te.w = sh;
var uh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(xp);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, io = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Yt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = uh(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== fl;
  }, n.isSame = function(a, t) {
    var o = ie(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return ie(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < ie(a);
  }, n.$g = function(a, t, o) {
    return Te.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function(k, M) {
      var b = Te.w(o.$u ? Date.UTC(o.$y, M, k) : new Date(o.$y, M, k), o);
      return i ? b : b.endOf(Jn);
    }, u = function(k, M) {
      var b = [0, 0, 0, 0], P = [23, 59, 59, 999];
      return Te.w(o.toDate()[k].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? b : P).slice(M)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Qn:
        return i ? s(1, 0) : s(31, 11);
      case kn:
        return i ? s(1, v) : s(0, v + 1);
      case It: {
        var h = this.$locale().weekStart || 0, y = (d < h ? d + 7 : d) - h;
        return s(i ? f - y : f + (6 - y), v);
      }
      case Jn:
      case Fa:
        return u(m + "Hours", 0);
      case Ua:
        return u(m + "Minutes", 1);
      case Ra:
        return u(m + "Seconds", 2);
      case La:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Jn] = l + "Date", o[Fa] = l + "Date", o[kn] = l + "Month", o[Qn] = l + "FullYear", o[Ua] = l + "Hours", o[Ra] = l + "Minutes", o[La] = l + "Seconds", o[Pi] = l + "Milliseconds", o)[i], u = i === Jn ? this.$D + (t - this.$W) : t;
    if (i === kn || i === Qn) {
      var d = this.clone().set(Fa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Fa, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Te.p(a)]();
  }, n.add = function(a, t) {
    var o = this, i;
    a = Number(a);
    var l = Te.p(t), s = function(f) {
      var m = ie(o);
      return Te.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (l === kn)
      return this.set(kn, this.$M + a);
    if (l === Qn)
      return this.set(Qn, this.$y + a);
    if (l === Jn)
      return s(1);
    if (l === It)
      return s(7);
    var u = (i = {}, i[Ra] = ho, i[Ua] = vl, i[La] = Ga, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || fl;
    var i = a || _p, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, h = function(b, P, D, S) {
      return b && (b[P] || b(t, i)) || D[P].slice(0, S);
    }, y = function(b) {
      return Te.s(s % 12 || 12, b, "0");
    }, w = m || function(M, b, P) {
      var D = M < 12 ? "AM" : "PM";
      return P ? D.toLowerCase() : D;
    }, k = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Te.s(d + 1, 2, "0"),
      MMM: h(o.monthsShort, d, f, 3),
      MMMM: h(f, d),
      D: this.$D,
      DD: Te.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(o.weekdaysMin, this.$W, v, 2),
      ddd: h(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Te.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: w(s, u, !0),
      A: w(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(eh, function(M, b) {
      return b || k[M] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = ie(a), u = (s.utcOffset() - this.utcOffset()) * ho, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Qn] = v / 12, i[kn] = v, i[Eu] = v / 3, i[It] = (d - u) / Qp, i[Jn] = (d - u) / Jp, i[Ua] = d / vl, i[Ra] = d / ho, i[La] = d / Ga, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(kn).$D;
  }, n.$locale = function() {
    return Ur[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = Yt(a, t, !0);
    return i && (o.$L = i), o;
  }, n.clone = function() {
    return Te.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), Du = io.prototype;
ie.prototype = Du;
[["$ms", Pi], ["$s", La], ["$m", Ra], ["$H", Ua], ["$W", Jn], ["$M", kn], ["$y", Qn], ["$D", Fa]].forEach(function(e) {
  Du[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ie.extend = function(e, n) {
  return e.$i || (e(n, io, ie), e.$i = !0), ie;
};
ie.locale = Yt;
ie.isDayjs = Oi;
ie.unix = function(e) {
  return ie(e * 1e3);
};
ie.en = Ur[rt];
ie.Ls = Ur;
ie.p = {};
const Nu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Au = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function dh(e) {
  return ["date", "month"].includes(e);
}
var Et = [{
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
}], nt = [{
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
}], vh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: dh
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
    type: Boolean,
    default: !1
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
  onPreview: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: fh
} = re("picker-header");
function ch(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return p(), O(
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
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: fe(() => [J(r, {
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
      [J(
        Ne,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(p(), O(
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
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: fe(() => [J(r, {
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
var zu = ne({
  name: "PanelHeader",
  components: {
    VarButton: Xe,
    VarIcon: $e
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
    } = n, a = B(!1), t = B(0), o = F(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (l = Ye.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return Ye.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: fh,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
zu.render = ch;
const Lu = zu;
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
ie.extend(Nu);
ie.extend(Au);
var {
  n: $t,
  classes: mh
} = re("month-picker"), {
  n: Tt
} = re("date-picker");
function ph(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
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
      ), J(
        Ne,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(p(), O("ul", {
            key: e.panelKey
          }, [(p(!0), O(
            Oe,
            null,
            ze(e.MONTH_LIST, (t) => (p(), O("li", {
              key: t.index
            }, [J(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Zo({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: fe(() => [be(
                  ae(e.getMonthAbbr(t.index)),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1040,
              ["onClick"]
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
var Ru = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: Xe,
    PanelHeader: Lu
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
    } = n, [a, t] = e.current.split("-"), o = B(!1), i = B(0), l = B(null), s = Ee({
      left: !1,
      right: !1
    }), u = F(() => e.choose.chooseYear === e.preview.previewYear), d = F(() => e.preview.previewYear === a), v = (M) => {
      var b, P;
      return (b = (P = Ye.value.datePickerMonthDict) == null ? void 0 : P[M].abbr) != null ? b : "";
    }, f = (M) => {
      var {
        preview: {
          previewYear: b
        },
        componentProps: {
          min: P,
          max: D
        }
      } = e, S = !0, E = !0, $ = b + "-" + M;
      return D && (S = ie($).isSameOrBefore(ie(D), "month")), P && (E = ie($).isSameOrAfter(ie(P), "month")), S && E;
    }, m = (M) => {
      var {
        choose: {
          chooseMonths: b,
          chooseDays: P,
          chooseRangeMonth: D
        },
        componentProps: {
          type: S,
          range: E
        }
      } = e;
      if (E) {
        if (!D.length)
          return !1;
        var $ = ie(M).isSameOrBefore(ie(D[1]), "month"), I = ie(M).isSameOrAfter(ie(D[0]), "month");
        return $ && I;
      }
      return S === "month" ? b.includes(M) : P.some((V) => V.includes(M));
    }, h = (M) => {
      var {
        choose: {
          chooseMonth: b
        },
        preview: {
          previewYear: P
        },
        componentProps: {
          allowedDates: D,
          color: S,
          multiple: E,
          range: $
        }
      } = e, I = P + "-" + M, V = () => $ || E ? m(I) : (b == null ? void 0 : b.index) === M && u.value, g = () => f(M) ? D ? !D(I) : !1 : !0, C = g(), H = () => C ? !0 : $ || E ? !m(I) : !u.value || (b == null ? void 0 : b.index) !== M, Q = () => d.value && t === M && e.componentProps.showCurrent ? ($ || E || u.value) && C ? !0 : $ || E ? !m(I) : u.value ? (b == null ? void 0 : b.index) !== t : !0 : !1, _ = () => C ? "" : Q() ? S ?? "" : V() ? "" : Tt() + "-color-cover", W = _().startsWith(Tt());
      return {
        outline: Q(),
        text: H(),
        color: H() ? "" : S,
        textColor: W ? "" : _(),
        [Tt() + "-color-cover"]: W,
        class: mh($t("button"), [C, $t("button--disabled")])
      };
    }, y = (M, b) => {
      var P = b.currentTarget;
      P.classList.contains($t("button--disabled")) || r("choose-month", M);
    }, w = (M) => {
      o.value = M === "prev", i.value += M === "prev" ? -1 : 1, r("check-preview", "year", M);
    }, k = (M) => {
      l.value.checkDate(M);
    };
    return le(() => e.preview.previewYear, (M) => {
      var {
        componentProps: {
          min: b,
          max: P
        }
      } = e;
      P && (s.right = !ie("" + (L(M) + 1)).isSameOrBefore(ie(P), "year")), b && (s.left = !ie("" + (L(M) - 1)).isSameOrAfter(ie(b), "year"));
    }, {
      immediate: !0
    }), {
      n: $t,
      nDate: Tt,
      pack: Ye,
      MONTH_LIST: Et,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: k,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: w
    };
  }
});
Ru.render = ph;
const hh = Ru;
var {
  n: cl,
  classes: gh
} = re("year-picker"), yh = ["onClick"];
function bh(e, n) {
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(p(!0), O(
      Oe,
      null,
      ze(e.yearList, (r) => (p(), O(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: G({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ae(r),
        15,
        yh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Uu = ne({
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
    } = n, a = F(() => {
      var o = [], {
        preview: i,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!i)
        return o;
      var u = [L(i) + 100, L(i) - 100];
      if (l) {
        var d = ie(l).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ie(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var h = u[0]; h >= u[1]; h--)
        o.push(h);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return ln(() => {
      var o = document.querySelector("." + cl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: cl,
      classes: gh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Uu.render = bh;
const wh = Uu;
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Jo.apply(this, arguments);
}
ie.extend(Nu);
ie.extend(Au);
var {
  n: Aa,
  classes: Ch
} = re("day-picker"), {
  n: Pt
} = re("date-picker");
function Sh(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.n("content"))
      },
      [J(
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
      ), J(
        Ne,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(p(), O("div", {
            key: e.panelKey
          }, [z(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(p(!0), O(
              Oe,
              null,
              ze(e.sortWeekList, (t) => (p(), O(
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
          ), z(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(p(!0), O(
              Oe,
              null,
              ze(e.days, (t, o) => (p(), O("li", {
                key: o
              }, [J(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Jo({}, e.buttonProps(t)), {
                  onClick: (i) => e.chooseDay(t, i)
                }),
                {
                  default: fe(() => [be(
                    ae(e.filterDay(t)),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                },
                1040,
                ["onClick"]
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
var Fu = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: Xe,
    PanelHeader: Lu
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
    } = n, [a, t, o] = e.current.split("-"), i = B([]), l = B(!1), s = B(0), u = B(null), d = Ee({
      left: !1,
      right: !1
    }), v = F(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = F(() => {
      var $;
      return e.choose.chooseYear === e.preview.previewYear && (($ = e.choose.chooseMonth) == null ? void 0 : $.index) === e.preview.previewMonth.index;
    }), m = F(() => {
      var $ = nt.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return $ === -1 || $ === 0 ? nt : nt.slice($).concat(nt.slice(0, $));
    }), h = ($) => {
      var I, V;
      return (I = (V = Ye.value.datePickerWeekDict) == null ? void 0 : V[$].abbr) != null ? I : "";
    }, y = ($) => $ > 0 ? $ : "", w = () => {
      var {
        preview: {
          previewMonth: $,
          previewYear: I
        }
      } = e, V = ie(I + "-" + $.index).daysInMonth(), g = ie(I + "-" + $.index + "-01").day(), C = m.value.findIndex((H) => H.index === "" + g);
      i.value = [...Array(C).fill(-1), ...Array.from(Array(V + 1).keys())].filter((H) => H);
    }, k = () => {
      var {
        preview: {
          previewYear: $,
          previewMonth: I
        },
        componentProps: {
          max: V,
          min: g
        }
      } = e;
      if (V) {
        var C = $ + "-" + (L(I.index) + 1);
        d.right = !ie(C).isSameOrBefore(ie(V), "month");
      }
      if (g) {
        var H = $ + "-" + (L(I.index) - 1);
        d.left = !ie(H).isSameOrAfter(ie(g), "month");
      }
    }, M = ($) => {
      var {
        preview: {
          previewYear: I,
          previewMonth: V
        },
        componentProps: {
          min: g,
          max: C
        }
      } = e, H = !0, Q = !0, _ = I + "-" + V.index + "-" + $;
      return C && (H = ie(_).isSameOrBefore(ie(C), "day")), g && (Q = ie(_).isSameOrAfter(ie(g), "day")), H && Q;
    }, b = ($) => {
      var {
        choose: {
          chooseDays: I,
          chooseRangeDay: V
        },
        componentProps: {
          range: g
        }
      } = e;
      if (g) {
        if (!V.length)
          return !1;
        var C = ie($).isSameOrBefore(ie(V[1]), "day"), H = ie($).isSameOrAfter(ie(V[0]), "day");
        return C && H;
      }
      return I.includes($);
    }, P = ($) => {
      if ($ < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Aa("button")
        };
      var {
        choose: {
          chooseDay: I
        },
        preview: {
          previewYear: V,
          previewMonth: g
        },
        componentProps: {
          allowedDates: C,
          color: H,
          multiple: Q,
          range: _
        }
      } = e, W = V + "-" + g.index + "-" + $, N = () => _ || Q ? b(W) : L(I) === $ && f.value, x = () => M($) ? C ? !C(W) : !1 : !0, te = x(), U = () => te ? !0 : _ || Q ? !b(W) : !f.value || L(I) !== $, Z = () => v.value && L(o) === $ && e.componentProps.showCurrent ? (_ || Q || f.value) && te ? !0 : _ || Q ? !b(W) : f.value ? I !== o : !0 : !1, K = () => te ? "" : Z() ? H ?? "" : N() ? "" : Pt() + "-color-cover", A = K().startsWith(Pt());
      return {
        text: U(),
        outline: Z(),
        textColor: A ? "" : K(),
        [Pt() + "-color-cover"]: A,
        class: Ch(Aa("button"), Aa("button--usable"), [te, Aa("button--disabled")])
      };
    }, D = ($) => {
      l.value = $ === "prev", s.value += $ === "prev" ? -1 : 1, r("check-preview", "month", $);
    }, S = ($, I) => {
      var V = I.currentTarget;
      V.classList.contains(Aa("button--disabled")) || r("choose-day", $);
    }, E = ($) => {
      u.value.checkDate($);
    };
    return ln(() => {
      w(), k();
    }), le(() => e.preview, () => {
      w(), k();
    }), {
      n: Aa,
      nDate: Pt,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: E,
      filterDay: y,
      getDayAbbr: h,
      checkDate: D,
      chooseDay: S,
      buttonProps: P
    };
  }
});
Fu.render = Sh;
const kh = Fu;
var {
  n: $h,
  classes: Th
} = re("date-picker");
function Ph(e, n) {
  var r = oe("year-picker-panel"), a = oe("month-picker-panel"), t = oe("day-picker-panel");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
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
        [j(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          ae(e.chooseYear),
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
        [J(
          Ne,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: fe(() => {
              var o, i, l;
              return [e.type === "month" ? (p(), O("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? j(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? j(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )]) : j(e.$slots, "month", {
                key: 2,
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), O("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? j(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? j(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                ae(e.getDateTitle),
                1
                /* TEXT */
              )]) : j(e.$slots, "date", vi(Ve({
                key: 2
              }, e.slotProps)), () => [be(
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
      [J(
        Ne,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: fe(() => [e.getPanelType === "year" ? (p(), ge(
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
          )) : e.getPanelType === "month" ? (p(), ge(
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
          )) : e.getPanelType === "date" ? (p(), ge(
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
          )) : ee("v-if", !0)]),
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
var Hu = ne({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: hh,
    YearPickerPanel: wh,
    DayPickerPanel: kh
  },
  props: vh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ie().format("YYYY-MM-D"), [i, l] = o.split("-"), s = Et.find((se) => se.index === l), u = B(!1), d = B(!1), v = B(!0), f = B(), m = B(), h = B(), y = B(s), w = B(i), k = B(!1), M = B([]), b = B([]), P = B([]), D = B([]), S = B(null), E = B(null), $ = Ee({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), I = F(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: h.value,
      chooseMonths: M.value,
      chooseDays: b.value,
      chooseRangeMonth: P.value,
      chooseRangeDay: D.value
    })), V = F(() => ({
      previewMonth: y.value,
      previewYear: w.value
    })), g = F(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return P.value.length ? P.value[0] + " ~ " + P.value[1] : "";
      var he = "";
      if (f.value) {
        var Se, ke;
        he = (Se = (ke = Ye.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Se : "";
      }
      return se ? "" + M.value.length + Ye.value.datePickerSelected : he;
    }), C = F(() => {
      var se, ye, he, Se, {
        multiple: ke,
        range: Ue
      } = e;
      if (Ue) {
        var _e = D.value.map((co) => ie(co).format("YYYY-MM-DD"));
        return _e.length ? _e[0] + " ~ " + _e[1] : "";
      }
      if (ke)
        return "" + b.value.length + Ye.value.datePickerSelected;
      if (!m.value || !f.value || !h.value)
        return "";
      var mn = ie(m.value + "-" + f.value.index + "-" + h.value).day(), Na = nt.find((co) => co.index === "" + mn), Ri = (se = (ye = Ye.value.datePickerWeekDict) == null ? void 0 : ye[Na.index].name) != null ? se : "", cv = (he = (Se = Ye.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? he : "", mv = Sa(h.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + mv + " " + Ri.slice(0, 3) : Ri.slice(0, 3) + ", " + cv.slice(0, 3) + " " + h.value;
    }), H = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = F(() => !e.touchable || ["", "year"].includes(H.value)), _ = F(() => {
      var se, ye, he, Se, ke = ie(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), Ue = h.value ? Sa(h.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (he = (Se = f.value) == null ? void 0 : Se.index) != null ? he : "",
        date: Ue
      };
    }), W = F(() => I.value.chooseRangeDay.map((se) => ie(se).format("YYYY-MM-DD"))), N = F(() => m.value === w.value), x = F(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), te = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, U = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: he
        } = se.touches[0];
        n = ye, r = he;
      }
    }, Z = (se, ye) => se >= ye && se > 20 ? "x" : "y", K = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: he
        } = se.touches[0], Se = ye - n, ke = he - r;
        t = Z(Math.abs(Se), Math.abs(ke)), a = Se > 0 ? "prev" : "next";
      }
    }, A = () => {
      if (!(Q.value || t !== "x")) {
        var se = H.value === "month" ? S : E;
        Qt(() => {
          se.value.forwardRef(a), wt();
        });
      }
    }, Y = (se, ye) => {
      var he = ye === "month" ? P : D;
      if (he.value = v.value ? [se, se] : [he.value[0], se], v.value = !v.value, v.value) {
        var Se = ie(he.value[0]).isAfter(he.value[1]), ke = Se ? [he.value[1], he.value[0]] : [...he.value];
        T(e["onUpdate:modelValue"], ke), T(e.onChange, ke);
      }
    }, X = (se, ye) => {
      var he = ye === "month" ? M : b, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = he.value.map((_e) => ie(_e).format(Se)), Ue = ke.findIndex((_e) => _e === se);
      Ue === -1 ? ke.push(se) : ke.splice(Ue, 1), T(e["onUpdate:modelValue"], ke), T(e.onChange, ke);
    }, de = (se, ye) => !m.value || !f.value ? !1 : N.value ? se === "month" ? ye.index < f.value.index : x.value ? ye < L(h.value) : f.value.index > y.value.index : m.value > w.value, pe = (se) => {
      var {
        readonly: ye,
        range: he,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": Ue
      } = e;
      if (!(se < 0 || ye)) {
        k.value = de("day", se);
        var _e = w.value + "-" + y.value.index + "-" + se, mn = ie(_e).format("YYYY-MM-DD");
        he ? Y(mn, "day") : Se ? X(mn, "day") : (T(Ue, mn), T(ke, mn));
      }
    }, Ae = (se) => {
      var {
        type: ye,
        readonly: he,
        range: Se,
        multiple: ke,
        onChange: Ue,
        onPreview: _e,
        "onUpdate:modelValue": mn
      } = e;
      if (k.value = de("month", se), ye === "month" && !he) {
        var Na = w.value + "-" + se.index;
        Se ? Y(Na, "month") : ke ? X(Na, "month") : (T(mn, Na), T(Ue, Na));
      } else
        y.value = se, T(_e, L(w.value), L(y.value.index));
      d.value = !1;
    }, Ie = (se) => {
      w.value = "" + se, u.value = !1, d.value = !0, T(e.onPreview, L(w.value), L(y.value.index));
    }, Ze = (se, ye) => {
      var he = ye === "prev" ? -1 : 1;
      if (se === "year")
        w.value = "" + (L(w.value) + he);
      else {
        var Se = L(y.value.index) + he;
        Se < 1 && (w.value = "" + (L(w.value) - 1), Se = 12), Se > 12 && (w.value = "" + (L(w.value) + 1), Se = 1), y.value = Et.find((ke) => L(ke.index) === Se);
      }
      T(e.onPreview, L(w.value), L(y.value.index));
    }, Sn = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, An = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ge = (se, ye) => {
      var he = ye === "month" ? P : D, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((mn) => ie(mn).format(Se)).slice(0, 2), Ue = he.value.some((mn) => An(mn));
      if (!Ue) {
        he.value = ke;
        var _e = ie(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && _e && (he.value = [he.value[1], he.value[0]]);
      }
    }, cn = (se, ye) => {
      var he = ye === "month" ? M : b, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Ue) => ie(Ue).format(Se))));
      he.value = ke.filter((Ue) => Ue !== "Invalid Date");
    }, bt = (se) => {
      var ye = ie(se).format("YYYY-MM-D");
      if (!An(ye)) {
        var [he, Se, ke] = ye.split("-"), Ue = Et.find((_e) => _e.index === Se);
        f.value = Ue, m.value = he, h.value = ke, y.value = Ue, w.value = he;
      }
    }, wt = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Sn() || An(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, Ge(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          cn(se, e.type);
        } else
          bt(se);
    }, {
      immediate: !0
    }), le(H, wt), {
      n: $h,
      classes: Th,
      monthPanelEl: S,
      dayPanelEl: E,
      reverse: k,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: h,
      previewYear: w,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: g,
      getDateTitle: C,
      getPanelType: H,
      getChoose: I,
      getPreview: V,
      componentProps: $,
      slotProps: _,
      formatRange: W,
      clickEl: te,
      handleTouchstart: U,
      handleTouchmove: K,
      handleTouchend: A,
      getChooseDay: pe,
      getChooseMonth: Ae,
      getChooseYear: Ie,
      checkPreview: Ze
    };
  }
});
Hu.render = Ph;
const Fr = Hu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var PS = Fr;
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
function Oh(e) {
  return ["left", "center", "right"].includes(e);
}
var Vh = Qo({
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
    validator: Oh
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
  onBeforeClose: R(),
  onConfirm: R(),
  onCancel: R(),
  "onUpdate:show": R()
}, Je(ht, [
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
  n: Mh,
  classes: Bh
} = re("dialog");
function Ih(e, n) {
  var r = oe("var-button"), a = oe("var-popup");
  return p(), ge(
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
      default: fe(() => [z(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: _o({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [z(
          "div",
          {
            class: c(e.n("title"))
          },
          [j(e.$slots, "title", {}, () => [be(
            ae(e.dt(e.title, e.pack.dialogTitle)),
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
          [j(e.$slots, "default", {}, () => [be(
            ae(e.message),
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
          [e.cancelButton ? (p(), ge(
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
              default: fe(() => [be(
                ae(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ee("v-if", !0), e.confirmButton ? (p(), ge(
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
              default: fe(() => [be(
                ae(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : ee("v-if", !0)],
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
var Yu = ne({
  name: "VarDialog",
  components: {
    VarPopup: hn,
    VarButton: Xe
  },
  inheritAttrs: !1,
  props: Vh,
  setup(e) {
    var n = B(!1), r = B(!1), a = () => T(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (T(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        T(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (T(s), l != null) {
        l("confirm", a);
        return;
      }
      T(e["onUpdate:show"], !1);
    }, i = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (T(s), l != null) {
        l("cancel", a);
        return;
      }
      T(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: Mh,
      classes: Bh,
      pack: Ye,
      dt: Zt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: me
    };
  }
});
Yu.render = Ih;
const ur = Yu;
function jt() {
  return jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, jt.apply(this, arguments);
}
var xn, Wt = {};
function Eh(e) {
  return e === void 0 && (e = {}), Ke(e) ? jt({}, Wt, {
    message: e
  }) : jt({}, Wt, e);
}
function Ta(e) {
  return pt() ? new Promise((n) => {
    Ta.close();
    var r = Eh(e), a = Ee(r);
    a.teleport = "body", xn = a;
    var {
      unmountInstance: t
    } = _a(ur, a, {
      onConfirm: () => {
        T(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        T(a.onCancel), n("cancel");
      },
      onClose: () => {
        T(a.onClose), n("close");
      },
      onClosed: () => {
        T(a.onClosed), t(), xn === a && (xn = null);
      },
      onRouteChange: () => {
        t(), xn === a && (xn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function Dh(e) {
  Wt = e;
}
function Nh() {
  Wt = {};
}
function Ah() {
  if (xn != null) {
    var e = xn;
    xn = null, Be().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(Ta, {
  setDefaultOptions: Dh,
  resetDefaultOptions: Nh,
  close: Ah
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
Ta.install = function(e) {
  e.component(ur.name, ur);
};
Ta.Component = ur;
var OS = ur, zh = {
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
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ha.apply(this, arguments);
}
var {
  n: Lh,
  classes: Rh
} = re("divider");
function Uh(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [j(e.$slots, "default", {}, () => [e.description ? (p(), O(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var ju = ne({
  name: "VarDivider",
  props: zh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ee({
      withText: !1
    }), t = F(() => Co(e.inset) ? e.inset : !0), o = F(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Co(l) || l === 0)
        return Ha({}, d);
      var v = L(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Ha({}, d, {
        height: "calc(80% - " + me(f) + ")"
      }) : Ha({}, d, {
        width: "calc(100% - " + me(f) + ")",
        left: v > 0 ? me(f) : me(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ln(() => {
      i();
    }), Kt(() => {
      i();
    }), Ha({
      n: Lh,
      classes: Rh
    }, Sv(a), {
      style: o,
      isInset: t
    });
  }
});
ju.render = Uh;
const Hr = ju;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var VS = Hr, Fh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Fh[n];
  });
}
var Un = "top", yr = "bottom", Pa = "right", dr = "left", lo = "auto", so = [Un, yr, Pa, dr], uo = "start", dt = "end", Hh = "clippingParents", Wu = "viewport", xa = "popper", Yh = "reference", ml = /* @__PURE__ */ so.reduce(function(e, n) {
  return e.concat([n + "-" + uo, n + "-" + dt]);
}, []), Gu = /* @__PURE__ */ [].concat(so, [lo]).reduce(function(e, n) {
  return e.concat([n, n + "-" + uo, n + "-" + dt]);
}, []), jh = "beforeRead", Wh = "read", Gh = "afterRead", qh = "beforeMain", Xh = "main", Kh = "afterMain", Zh = "beforeWrite", Jh = "write", Qh = "afterWrite", xo = [jh, Wh, Gh, qh, Xh, Kh, Zh, Jh, Qh];
function Fn(e) {
  return e.split("-")[0];
}
var _h = {
  start: "end",
  end: "start"
};
function pl(e) {
  return e.replace(/start|end/g, function(n) {
    return _h[n];
  });
}
function Cn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Oa(e) {
  var n = Cn(e).Element;
  return e instanceof n || e instanceof Element;
}
function gn(e) {
  var n = Cn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Vi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function Cr(e) {
  return ((Oa(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var at = Math.max, hl = Math.min, qa = Math.round;
function ei() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function qu() {
  return !/^((?!chrome|android).)*safari/i.test(ei());
}
function Xa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && gn(e) && (t = e.offsetWidth > 0 && qa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && qa(a.height) / e.offsetHeight || 1);
  var i = Oa(e) ? Cn(e) : window, l = i.visualViewport, s = !qu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Mi(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Bi(e) {
  return Xa(Cr(e)).left + Mi(e).scrollLeft;
}
function xh(e, n) {
  var r = Cn(e), a = Cr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = qu();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + Bi(e),
    y: s
  };
}
function Vn(e) {
  return Cn(e).getComputedStyle(e);
}
function eg(e) {
  var n, r = Cr(e), a = Mi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = at(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = at(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Bi(e), s = -a.scrollTop;
  return Vn(t || r).direction === "rtl" && (l += at(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function Nn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vo(e) {
  return Nn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Cr(e)
  );
}
function Ii(e) {
  var n = Vn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Xu(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : gn(e) && Ii(e) ? e : Xu(vo(e));
}
function tt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Xu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], Ii(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(tt(vo(i)))
  );
}
function ng(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0;
}
function gl(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Vn(e).position === "fixed" ? null : e.offsetParent;
}
function rg(e) {
  var n = /firefox/i.test(ei()), r = /Trident/i.test(ei());
  if (r && gn(e)) {
    var a = Vn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = vo(e);
  for (Vi(t) && (t = t.host); gn(t) && ["html", "body"].indexOf(Nn(t)) < 0; ) {
    var o = Vn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ei(e) {
  for (var n = Cn(e), r = gl(e); r && ng(r) && Vn(r).position === "static"; )
    r = gl(r);
  return r && (Nn(r) === "html" || Nn(r) === "body" && Vn(r).position === "static") ? n : r || rg(e) || n;
}
function ag(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Vi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function ni(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function tg(e, n) {
  var r = Xa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function yl(e, n, r) {
  return n === Wu ? ni(xh(e, r)) : Oa(n) ? tg(n, r) : ni(eg(Cr(e)));
}
function og(e) {
  var n = tt(vo(e)), r = ["absolute", "fixed"].indexOf(Vn(e).position) >= 0, a = r && gn(e) ? Ei(e) : e;
  return Oa(a) ? n.filter(function(t) {
    return Oa(t) && ag(t, a) && Nn(t) !== "body";
  }) : [];
}
function ig(e, n, r, a) {
  var t = n === "clippingParents" ? og(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = yl(e, u, a);
    return s.top = at(d.top, s.top), s.right = hl(d.right, s.right), s.bottom = hl(d.bottom, s.bottom), s.left = at(d.left, s.left), s;
  }, yl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vt(e) {
  return e.split("-")[1];
}
function lg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ku(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Fn(a) : null, o = a ? vt(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Un:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case yr:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case Pa:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case dr:
      s = {
        x: n.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? lg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case uo:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case dt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function sg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ug(e) {
  return Object.assign({}, sg(), e);
}
function dg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Zu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Hh : l, u = r.rootBoundary, d = u === void 0 ? Wu : u, v = r.elementContext, f = v === void 0 ? xa : v, m = r.altBoundary, h = m === void 0 ? !1 : m, y = r.padding, w = y === void 0 ? 0 : y, k = ug(typeof w != "number" ? w : dg(w, so)), M = f === xa ? Yh : xa, b = e.rects.popper, P = e.elements[h ? M : f], D = ig(Oa(P) ? P : P.contextElement || Cr(e.elements.popper), s, d, i), S = Xa(e.elements.reference), E = Ku({
    reference: S,
    element: b,
    strategy: "absolute",
    placement: t
  }), $ = ni(Object.assign({}, b, E)), I = f === xa ? $ : S, V = {
    top: D.top - I.top + k.top,
    bottom: I.bottom - D.bottom + k.bottom,
    left: D.left - I.left + k.left,
    right: I.right - D.right + k.right
  }, g = e.modifiersData.offset;
  if (f === xa && g) {
    var C = g[t];
    Object.keys(V).forEach(function(H) {
      var Q = [Pa, yr].indexOf(H) >= 0 ? 1 : -1, _ = [Un, yr].indexOf(H) >= 0 ? "y" : "x";
      V[H] += C[_] * Q;
    });
  }
  return V;
}
function vg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Gu : s, d = vt(a), v = d ? l ? ml : ml.filter(function(h) {
    return vt(h) === d;
  }) : so, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(h, y) {
    return h[y] = Zu(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Fn(y)], h;
  }, {});
  return Object.keys(m).sort(function(h, y) {
    return m[h] - m[y];
  });
}
function fg(e) {
  if (Fn(e) === lo)
    return [];
  var n = Dt(e);
  return [pl(e), n, pl(n)];
}
function cg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, h = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, w = n.options.placement, k = Fn(w), M = k === w, b = s || (M || !h ? [Dt(w)] : fg(w)), P = [w].concat(b).reduce(function(Y, X) {
      return Y.concat(Fn(X) === lo ? vg(n, {
        placement: X,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : X);
    }, []), D = n.rects.reference, S = n.rects.popper, E = /* @__PURE__ */ new Map(), $ = !0, I = P[0], V = 0; V < P.length; V++) {
      var g = P[V], C = Fn(g), H = vt(g) === uo, Q = [Un, yr].indexOf(C) >= 0, _ = Q ? "width" : "height", W = Zu(n, {
        placement: g,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), N = Q ? H ? Pa : dr : H ? yr : Un;
      D[_] > S[_] && (N = Dt(N));
      var x = Dt(N), te = [];
      if (o && te.push(W[C] <= 0), l && te.push(W[N] <= 0, W[x] <= 0), te.every(function(Y) {
        return Y;
      })) {
        I = g, $ = !1;
        break;
      }
      E.set(g, te);
    }
    if ($)
      for (var U = h ? 3 : 1, Z = function(X) {
        var de = P.find(function(pe) {
          var Ae = E.get(pe);
          if (Ae)
            return Ae.slice(0, X).every(function(Ie) {
              return Ie;
            });
        });
        if (de)
          return I = de, "break";
      }, K = U; K > 0; K--) {
        var A = Z(K);
        if (A === "break")
          break;
      }
    n.placement !== I && (n.modifiersData[a]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const mg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: cg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function pg(e, n, r) {
  var a = Fn(e), t = [dr, Un].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [dr, Pa].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function hg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = Gu.reduce(function(d, v) {
    return d[v] = pg(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const gg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: hg
};
function yg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function bg(e) {
  return e === Cn(e) || !gn(e) ? Mi(e) : yg(e);
}
function wg(e) {
  var n = e.getBoundingClientRect(), r = qa(n.width) / e.offsetWidth || 1, a = qa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Cg(e, n, r) {
  r === void 0 && (r = !1);
  var a = gn(n), t = gn(n) && wg(n), o = Cr(n), i = Xa(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Nn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(o)) && (l = bg(n)), gn(n) ? (s = Xa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Bi(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Sg(e) {
  var n = Xa(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function kg(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    n.set(o.name, o);
  });
  function t(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || t(o);
  }), a;
}
function $g(e) {
  var n = kg(e);
  return xo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Tg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Kn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Sr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Pg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', bl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Og(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), bl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Kn(Sr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Kn(Sr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          xo.indexOf(n.phase) < 0 && console.error(Kn(Sr, n.name, '"phase"', "either " + xo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Kn(Sr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Kn(Sr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Kn(Sr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Kn(Sr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + bl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Kn(Pg, String(n.name), a, a));
      });
    });
  });
}
function Vg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Mg(e) {
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
var wl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Bg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Cl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Sl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Ig(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? Cl : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Cl, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(k) {
        var M = typeof k == "function" ? k(d.options) : k;
        y(), d.options = Object.assign({}, o, d.options, M), d.scrollParents = {
          reference: Oa(l) ? tt(l) : l.contextElement ? tt(l.contextElement) : [],
          popper: tt(s)
        };
        var b = $g(Mg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = b.filter(function(g) {
          return g.enabled;
        }), process.env.NODE_ENV !== "production") {
          var P = Vg([].concat(b, d.options.modifiers), function(g) {
            var C = g.name;
            return C;
          });
          if (Og(P), Fn(d.options.placement) === lo) {
            var D = d.orderedModifiers.find(function(g) {
              var C = g.name;
              return C === "flip";
            });
            D || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = Vn(s), E = S.marginTop, $ = S.marginRight, I = S.marginBottom, V = S.marginLeft;
          [E, $, I, V].some(function(g) {
            return parseFloat(g);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var k = d.elements, M = k.reference, b = k.popper;
          if (!Sl(M, b)) {
            process.env.NODE_ENV !== "production" && console.error(wl);
            return;
          }
          d.rects = {
            reference: Cg(M, Ei(b), d.options.strategy === "fixed"),
            popper: Sg(b)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(g) {
            return d.modifiersData[g.name] = Object.assign({}, g.data);
          });
          for (var P = 0, D = 0; D < d.orderedModifiers.length; D++) {
            if (process.env.NODE_ENV !== "production" && (P += 1, P > 100)) {
              console.error(Bg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, D = -1;
              continue;
            }
            var S = d.orderedModifiers[D], E = S.fn, $ = S.options, I = $ === void 0 ? {} : $, V = S.name;
            typeof E == "function" && (d = E({
              state: d,
              options: I,
              name: V,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Tg(function() {
        return new Promise(function(w) {
          m.forceUpdate(), w(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Sl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(wl), m;
    m.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function h() {
      d.orderedModifiers.forEach(function(w) {
        var k = w.name, M = w.options, b = M === void 0 ? {} : M, P = w.effect;
        if (typeof P == "function") {
          var D = P({
            state: d,
            name: k,
            instance: m,
            options: b
          }), S = function() {
          };
          v.push(D || S);
        }
      });
    }
    function y() {
      v.forEach(function(w) {
        return w();
      }), v = [];
    }
    return m;
  };
}
var Ot = {
  passive: !0
};
function Eg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ot);
  }), l && s.addEventListener("resize", r.update, Ot), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ot);
    }), l && s.removeEventListener("resize", r.update, Ot);
  };
}
const Dg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Eg,
  data: {}
};
function Ng(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Ku({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Ag = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ng,
  data: {}
};
var zg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Lg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: qa(n * t) / t || 0,
    y: qa(r * t) / t || 0
  };
}
function kl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, h = i.y, y = h === void 0 ? 0 : h, w = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = w.x, y = w.y;
  var k = i.hasOwnProperty("x"), M = i.hasOwnProperty("y"), b = dr, P = Un, D = window;
  if (u) {
    var S = Ei(r), E = "clientHeight", $ = "clientWidth";
    if (S === Cn(r) && (S = Cr(r), Vn(S).position !== "static" && l === "absolute" && (E = "scrollHeight", $ = "scrollWidth")), S = S, t === Un || (t === dr || t === Pa) && o === dt) {
      P = yr;
      var I = v && S === D && D.visualViewport ? D.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[E]
      );
      y -= I - a.height, y *= s ? 1 : -1;
    }
    if (t === dr || (t === Un || t === yr) && o === dt) {
      b = Pa;
      var V = v && S === D && D.visualViewport ? D.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[$]
      );
      m -= V - a.width, m *= s ? 1 : -1;
    }
  }
  var g = Object.assign({
    position: l
  }, u && zg), C = d === !0 ? Lg({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = C.x, y = C.y, s) {
    var H;
    return Object.assign({}, g, (H = {}, H[P] = M ? "0" : "", H[b] = k ? "0" : "", H.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", H));
  }
  return Object.assign({}, g, (n = {}, n[P] = M ? y + "px" : "", n[b] = k ? m + "px" : "", n.transform = "", n));
}
function Rg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Vn(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Fn(n.placement),
    variation: vt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, kl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, kl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Ug = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Rg,
  data: {}
};
function Fg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !gn(o) || !Nn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Hg(e) {
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
      var t = n.elements[a], o = n.attributes[a] || {}, i = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !gn(t) || !Nn(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Yg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Fg,
  effect: Hg,
  requires: ["computeStyles"]
};
var jg = [Dg, Ag, Ug, Yg], Wg = /* @__PURE__ */ Ig({
  defaultModifiers: jg
});
function Gt() {
  return Gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Gt.apply(this, arguments);
}
function $l(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Tl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        $l(o, a, t, i, l, "next", s);
      }
      function l(s) {
        $l(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Ju(e) {
  var n = B(null), r = B(null), a = B({
    width: 0,
    height: 0
  }), t = cs(e, "show", {
    passive: !0,
    defaultValue: !1,
    emit(S, E) {
      E ? (b(), T(e.onOpen)) : T(e.onClose);
    }
  }), {
    zIndex: o
  } = gt(() => t.value, 1), i = null, l = !1, s = !1, u = () => {
    var {
      width: S,
      height: E
    } = window.getComputedStyle(n.value);
    a.value = {
      width: Le(S),
      height: Le(E)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, P());
  }, v = /* @__PURE__ */ function() {
    var S = Tl(function* () {
      e.trigger === "hover" && (s = !1, yield In(), !l && D());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (l = !0);
  }, m = /* @__PURE__ */ function() {
    var S = Tl(function* () {
      e.trigger === "hover" && (l = !1, yield In(), !s && D());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), h = () => {
    P();
  }, y = () => {
    t.value = !1, T(e["onUpdate:show"], !1);
  }, w = () => {
    e.trigger === "click" && y();
  }, k = () => {
    u();
    var S = {
      x: Le(e.offsetX),
      y: Le(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: S.x,
          distance: S.y - a.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: S.x,
          distance: S.y - a.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: S.x,
          distance: S.y - a.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: S.x,
          distance: -S.y - a.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: S.x,
          distance: -S.y - a.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: S.x,
          distance: -S.y - a.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: S.y,
          distance: S.x - a.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: S.y,
          distance: -S.x - a.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: S.y,
          distance: -S.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: S.x,
          distance: -S.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: S.x,
          distance: S.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: S.y,
          distance: S.x
        };
    }
  }, M = () => {
    var {
      placement: S,
      skidding: E,
      distance: $
    } = k(), I = [Gt({}, mg, {
      enabled: t.value
    }), Gt({}, gg, {
      options: {
        offset: [E, $]
      }
    })];
    return {
      placement: S,
      modifiers: I
    };
  }, b = () => {
    i.setOptions(M());
  }, P = () => {
    var {
      disabled: S
    } = e;
    S || (t.value = !0, T(e["onUpdate:show"], !0));
  }, D = () => {
    t.value = !1, T(e["onUpdate:show"], !1);
  };
  return fs(n, "click", w), le(() => e.offsetX, b), le(() => e.offsetY, b), le(() => e.placement, b), le(() => e.disabled, D), qt(() => {
    var S, E = e.reference ? (S = n.value) == null ? void 0 : S.querySelector(e.reference) : n.value;
    i = Wg(E ?? n.value, r.value, M());
  }), Ja(() => {
    i.destroy();
  }), {
    show: t,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: a,
    handleHostClick: h,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: y,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: b,
    open: P,
    close: D
  };
}
function Gg(e) {
  return ["click", "hover"].includes(e);
}
function qg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Xg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Kg = {
  type: {
    type: String,
    default: "default",
    validator: Xg
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
    validator: Gg
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: qg
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
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:show": R()
}, {
  n: Zg,
  classes: Jg
} = re("tooltip");
function Qg(e, n) {
  return p(), O(
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
    [j(e.$slots, "default"), (p(), ge(
      Ba,
      {
        to: e.teleport
      },
      [J(
        Ne,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [we(z(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: G({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = Bn(() => {
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
              [j(e.$slots, "content", {}, () => [be(
                ae(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[pr, e.show]])]),
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
var Qu = ne({
  name: "VarTooltip",
  props: Kg,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: m,
      // expose
      resize: h
    } = Ju(e);
    return {
      toSizeUnit: me,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Zg,
      classes: Jg,
      handleHostClick: i,
      handlePopoverClose: v,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: h,
      open: f,
      close: m
    };
  }
});
Qu.render = Qg;
const vr = Qu;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var MS = vr;
function _g(e) {
  return ["click"].includes(e);
}
var xg = {
  expandTrigger: {
    type: String,
    validator: _g
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ri.apply(this, arguments);
}
var {
  n: ey,
  classes: ny
} = re("ellipsis"), ry = {
  key: 0
};
function ay(e, n) {
  var r = oe("var-tooltip");
  return p(), ge(
    r,
    vi(rs(e.tooltip)),
    {
      content: fe(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), O(
          "span",
          ry,
          ae(e.tooltip.content),
          1
          /* TEXT */
        )) : j(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: fe(() => [z(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: G(e.rootStyles),
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
var _u = ne({
  name: "VarEllipsis",
  components: {
    VarTooltip: vr
  },
  props: xg,
  setup(e) {
    var n = B(!1), r = F(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = F(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : ri({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: ey,
      classes: ny,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
_u.render = ay;
const Yr = _u;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var BS = Yr;
function ty(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function oy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function iy(e) {
  return ["click", "hover"].includes(e);
}
var ly = {
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
    validator: Gs
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: ty
  },
  direction: {
    type: String,
    default: "top",
    validator: oy
  },
  trigger: {
    type: String,
    default: "click",
    validator: iy
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
  teleport: {
    type: String
  },
  onClick: R(),
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:active": R()
};
function Pl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !mt(e);
}
var {
  classes: Ol,
  n: dn
} = re("fab");
const jr = ne({
  name: "VarFab",
  inheritAttrs: !1,
  props: ly,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = cs(e, "active", {
      emit: (f, m) => T(e["onUpdate:active"], m)
    }), o = B(null), {
      disabled: i
    } = _t(), l = (f, m, h) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (h === 0) {
          T(e.onClick, t.value, f);
          return;
        }
        t.value = m, T(e.onClick, t.value, f), T(t.value ? e.onOpen : e.onClose);
      }
    }, s = (f, m) => {
      e.trigger !== "hover" || e.disabled || m === 0 || (t.value = f, T(t.value ? e.onOpen : e.onClose));
    }, u = () => {
      e.trigger !== "click" || e.disabled || t.value !== !1 && (t.value = !1, T(e.onClose));
    }, d = () => r.trigger ? e.show ? r.trigger({
      active: t.value
    }) : null : we(J(Xe, {
      "var-fab-cover": !0,
      class: dn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0
    }, {
      default: () => [J($e, {
        "var-fab-cover": !0,
        class: Ol([t.value, dn("trigger-active-icon"), dn("trigger-inactive-icon")]),
        name: t.value ? e.activeIcon : e.inactiveIcon,
        size: t.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: dn("--trigger-icon-animation")
      }, null)]
    }), [[pr, e.show]]), v = () => {
      var f, m, h = ms((m = r.default == null ? void 0 : r.default()) != null ? m : []);
      return J("div", Ve({
        class: Ol(dn(), dn("--position-" + e.position), dn("--direction-" + e.direction), [e.fixed, dn("--fixed"), dn("--absolute")]),
        style: {
          zIndex: L(e.zIndex),
          top: me(e.top),
          bottom: me(e.bottom),
          left: me(e.left),
          right: me(e.right)
        },
        ref: o,
        onClick: (y) => l(y, !t.value, h.length),
        onMouseleave: () => s(!1, h.length),
        onMouseenter: () => s(!0, h.length)
      }, a), [J(Ne, {
        name: dn("--active-transition")
      }, Pl(f = d()) ? f : {
        default: () => [f]
      }), J(Ne, {
        name: dn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(J("div", {
          class: dn("actions"),
          onClick: (y) => y.stopPropagation()
        }, [h.map((y) => J("div", {
          class: dn("action")
        }, [y]))]), [[pr, e.show && t.value && h.length]])]
      })]);
    };
    return le(() => e.trigger, () => {
      t.value = !1;
    }), le(() => e.disabled, () => {
      t.value = !1;
    }), fs(o, "click", u), () => {
      var {
        teleport: f
      } = e;
      if (f) {
        var m;
        return J(Ba, {
          to: f,
          disabled: i.value
        }, Pl(m = v()) ? m : {
          default: () => [m]
        });
      }
      return v();
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var IS = jr;
function sy(e) {
  return ["start", "end"].includes(e);
}
var uy = {
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
    validator: sy
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Vl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function dy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Vl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Vl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: vy
} = re("form");
function fy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var xu = ne({
  name: "VarForm",
  props: uy,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = gm(), o = (d) => {
      setTimeout(() => {
        var v = Da(d), f = v === window ? 0 : qi(v), m = qi(d) - f - Le(e.scrollToErrorOffsetY);
        lt(v, {
          top: m,
          animation: So
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = dy(function* () {
        var v = yield Promise.all(a.map((w) => {
          var {
            validate: k
          } = w;
          return k();
        }));
        if (e.scrollToError) {
          var [, f] = Ov(v, (w) => w === !1, e.scrollToError), m = f > -1;
          if (m) {
            var h, y = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(y);
          }
          return !m;
        }
        return v.every((w) => w === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), l = () => a.forEach((d) => {
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
      n: vy,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
xu.render = fy;
const Hn = xu;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
Hn.useValidation = bn;
Hn.useForm = wn;
var ES = Hn;
function cy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var my = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: cy,
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
  onClick: R(),
  onLoad: R(),
  onError: R()
}, {
  n: py,
  classes: hy
} = re("image"), gy = ["alt", "title", "lazy-error", "lazy-loading"], yy = ["alt", "title", "src"];
function by(e, n) {
  var r = Me("lazy"), a = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? we((p(), O(
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
      gy
    )), [[r, e.src]]) : (p(), O(
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
      yy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var ed = ne({
  name: "VarImage",
  directives: {
    Lazy: st,
    Ripple: Re
  },
  props: my,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: i,
        onLoad: l,
        onError: s
      } = e;
      i ? (o._lazy.state === "success" && T(l, t), o._lazy.state === "error" && T(s, t)) : T(l, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: i
      } = e;
      !o && T(i, t);
    }, a = (t) => {
      T(e.onClick, t);
    };
    return {
      n: py,
      classes: hy,
      toSizeUnit: me,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
ed.render = by;
const Wr = ed;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var DS = Wr, nd = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function wy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(nd);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var rd = {
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
  onChange: R()
};
function Ml(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Cy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ml(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ml(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var Sy = 250, ky = 20, {
  n: $y,
  classes: Ty
} = re("swipe"), Py = ["onClick"];
function Oy(e, n) {
  return p(), O(
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
      [j(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), j(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), O(
        Oe,
        null,
        ze(e.length, (r, a) => (p(), O(
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
          Py
        ))),
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
var ad = ne({
  name: "VarSwipe",
  props: rd,
  setup(e) {
    var n = B(null), r = B(0), a = F(() => e.vertical), t = B(0), o = B(0), i = B(!1), l = B(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = wy(), v = !1, f = -1, m, h, y, w, k, M = (U) => s.find((Z) => {
      var {
        index: K
      } = Z;
      return K.value === U;
    }), b = () => {
      e.loop && (o.value >= 0 && M(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && M(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (M(d.value - 1).setTranslate(0), M(0).setTranslate(0)));
    }, P = (U) => {
      var Z = nn(U) ? U : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: K
      } = e;
      return Z <= -1 ? K ? -1 : 0 : Z >= d.value ? K ? d.value : d.value - 1 : Z;
    }, D = (U) => {
      var {
        loop: Z
      } = e;
      return U === -1 ? Z ? d.value - 1 : 0 : U === d.value ? Z ? 0 : d.value - 1 : U;
    }, S = (U) => {
      var {
        loop: Z
      } = e;
      return U < 0 ? Z ? d.value - 1 : 0 : U > d.value - 1 ? Z ? 0 : d.value - 1 : U;
    }, E = (U) => {
      var Z = o.value >= r.value, K = o.value <= -t.value, A = 0, Y = -(t.value - r.value);
      i.value = !0, (Z || K) && (i.value = !0, o.value = K ? A : Y, M(0).setTranslate(0), M(d.value - 1).setTranslate(0)), Qt(() => {
        i.value = !1, T(U);
      });
    }, $ = () => {
      l.value = S(L(e.initialIndex));
    }, I = () => {
      var {
        autoplay: U
      } = e;
      !U || d.value <= 1 || (V(), f = window.setTimeout(() => {
        W(), I();
      }, L(U)));
    }, V = () => {
      f && clearTimeout(f);
    }, g = (U, Z) => {
      if (U > Z && U > 10)
        return "horizontal";
      if (Z > U && Z > 10)
        return "vertical";
    }, C = (U) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: K
        } = U.touches[0];
        m = Z, h = K, y = performance.now(), v = !0, V(), E(() => {
          i.value = !0;
        });
      }
    }, H = (U) => {
      var {
        touchable: Z,
        vertical: K
      } = e;
      if (!(!v || !Z)) {
        var {
          clientX: A,
          clientY: Y
        } = U.touches[0], X = Math.abs(A - m), de = Math.abs(Y - h), pe = g(X, de), Ae = K ? "vertical" : "horizontal";
        if (pe === Ae) {
          U.preventDefault();
          var Ie = w !== void 0 ? A - w : 0, Ze = k !== void 0 ? Y - k : 0;
          w = A, k = Y, o.value += K ? Ze : Ie, b();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: U,
          onChange: Z
        } = e, K = U ? k < h : w < m, A = Math.abs(U ? h - k : m - w), Y = performance.now() - y <= Sy && A >= ky, X = Y ? P(K ? l.value + 1 : l.value - 1) : P();
        v = !1, i.value = !1, w = void 0, k = void 0, o.value = X * -r.value;
        var de = l.value;
        l.value = D(X), I(), de !== l.value && T(Z, l.value);
      }
    }, _ = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((U) => {
        U.setTranslate(0);
      }), I(), setTimeout(() => {
        i.value = !1;
      }));
    }, W = (U) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: K
        } = e, A = l.value;
        l.value = S(A + 1), (U == null ? void 0 : U.event) !== !1 && T(K, l.value), E(() => {
          if (A === d.value - 1 && Z) {
            M(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          A !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, N = (U) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: K
        } = e, A = l.value;
        l.value = S(A - 1), (U == null ? void 0 : U.event) !== !1 && T(K, l.value), E(() => {
          if (A === 0 && Z) {
            M(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          A !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, x = (U, Z) => {
      if (!(d.value <= 1 || U === l.value)) {
        U = U < 0 ? 0 : U, U = U >= d.value ? d.value : U;
        var K = U > l.value ? W : N, A = Math.abs(U - l.value);
        Array.from({
          length: A
        }).forEach((Y, X) => {
          K({
            event: X === A - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, te = {
      size: r,
      vertical: a
    };
    return u(te), le(() => d.value, /* @__PURE__ */ Cy(function* () {
      yield In(), $(), _();
    })), Za(_), br(V), Ja(V), ka(window, "resize", _), {
      n: $y,
      classes: Ty,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: C,
      handleTouchmove: H,
      handleTouchend: Q,
      next: W,
      prev: N,
      to: x,
      resize: _,
      toNumber: L
    };
  }
});
ad.render = Oy;
const Yn = ad;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var NS = Yn;
function Vy() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = sn(nd);
  if (!e)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: My
} = re("swipe-item");
function By(e, n) {
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
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var td = ne({
  name: "VarSwipeItem",
  setup() {
    var e = B(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Vy(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: My,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
td.render = By;
const jn = td;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var AS = jn;
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
var Iy = ai({
  show: {
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
  "onUpdate:show": R()
}, Je(rd, ["loop", "indicator", "onChange"]), Je(ht, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Bl,
  classes: Ey
} = re("image-preview"), Il = 12, El = 200, Dy = 350, Dl = 200, Ny = ["src", "alt"];
function Ay(e, n) {
  var r = oe("var-swipe-item"), a = oe("var-swipe"), t = oe("var-icon"), o = oe("var-popup");
  return p(), ge(
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
      default: fe(() => [J(
        a,
        Ve({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: fe(() => [(p(!0), O(
            Oe,
            null,
            ze(e.images, (i) => (p(), ge(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: i
              },
              {
                default: fe(() => [z(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: G({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
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
                  [z(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: i,
                      alt: i
                    },
                    null,
                    10,
                    Ny
                  )],
                  38
                  /* CLASS, STYLE, HYDRATE_EVENTS */
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
          indicator: fe((i) => {
            var {
              index: l,
              length: s
            } = i;
            return [j(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (p(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ae(l + 1) + " / " + ae(s),
              3
              /* TEXT, CLASS */
            )) : ee("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), j(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), ge(
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
      )) : ee("v-if", !0)]), z(
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
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var od = ne({
  name: "VarImagePreview",
  components: {
    VarSwipe: Yn,
    VarSwipeItem: jn,
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Iy,
  setup(e) {
    var n = B(!1), r = F(() => {
      var {
        images: V,
        current: g
      } = e, C = V.findIndex((H) => H === g);
      return C >= 0 ? C : 0;
    }), a = B(1), t = B(0), o = B(0), i = B(void 0), l = B(void 0), s = B(!0), u = null, d = null, v = null, f = (V, g) => {
      var {
        clientX: C,
        clientY: H
      } = V, {
        clientX: Q,
        clientY: _
      } = g;
      return Math.abs(Math.sqrt(Math.pow(Q - C, 2) + Math.pow(_ - H, 2)));
    }, m = (V, g) => ({
      clientX: V.clientX,
      clientY: V.clientY,
      timestamp: Date.now(),
      target: g
    }), h = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, Dl);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, w = (V) => d ? f(d, V) <= Il && V.timestamp - d.timestamp <= El && d.target === V.target : !1, k = (V) => !V || !u || !d ? !1 : f(u, d) <= Il && Date.now() - d.timestamp < Dy && (V === u.target || V.parentNode === u.target), M = (V) => {
      v = window.setTimeout(() => {
        k(V.target) && I(), u = null;
      }, El);
    }, b = (V) => {
      v && window.clearTimeout(v);
      var {
        touches: g
      } = V, C = m(g[0], V.currentTarget);
      if (u = C, w(C)) {
        a.value > 1 ? y() : h();
        return;
      }
      d = C;
    }, P = (V) => {
      var {
        offsetWidth: g,
        offsetHeight: C
      } = V, {
        naturalWidth: H,
        naturalHeight: Q
      } = V.querySelector("." + Bl("image"));
      return {
        width: g,
        height: C,
        imageRadio: Q / H,
        rootRadio: C / g,
        zoom: L(e.zoom)
      };
    }, D = (V) => {
      var {
        zoom: g,
        imageRadio: C,
        rootRadio: H,
        width: Q,
        height: _
      } = P(V);
      if (!C)
        return 0;
      var W = C > H ? _ / C : Q;
      return Math.max(0, (g * W - Q) / 2) / g;
    }, S = (V) => {
      var {
        zoom: g,
        imageRadio: C,
        rootRadio: H,
        width: Q,
        height: _
      } = P(V);
      if (!C)
        return 0;
      var W = C > H ? _ : Q * C;
      return Math.max(0, (g * W - _) / 2) / g;
    }, E = (V, g, C) => V + g >= C ? C : V + g <= -C ? -C : V + g, $ = (V) => {
      if (d) {
        var g = V.currentTarget, {
          touches: C
        } = V, H = m(C[0], g);
        if (a.value > 1) {
          var Q = H.clientX - d.clientX, _ = H.clientY - d.clientY, W = D(g), N = S(g);
          t.value = E(t.value, Q, W), o.value = E(o.value, _, N);
        }
        d = H;
      }
    }, I = () => {
      if (a.value > 1) {
        y(), setTimeout(() => T(e["onUpdate:show"], !1), Dl);
        return;
      }
      T(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (V) => {
      n.value = V;
    }, {
      immediate: !0
    }), {
      n: Bl,
      classes: Ey,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: b,
      handleTouchmove: $,
      handleTouchend: M,
      close: I
    };
  }
});
od.render = Ay;
const fr = od;
function ot() {
  return ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ot.apply(this, arguments);
}
var er, it = {};
function zy(e) {
  return e === void 0 && (e = {}), Ke(e) ? ot({}, it, {
    images: [e]
  }) : Ce(e) ? ot({}, it, {
    images: e
  }) : ot({}, it, e);
}
function Mn(e) {
  if (pt()) {
    Mn.close();
    var n = zy(e), r = Ee(n);
    r.teleport = "body", er = r;
    var {
      unmountInstance: a
    } = _a(fr, r, {
      onClose: () => T(r.onClose),
      onClosed: () => {
        T(r.onClosed), a(), er === r && (er = null);
      },
      onRouteChange: () => {
        a(), er === r && (er = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Mn.close = () => {
  if (er != null) {
    var e = er;
    er = null, Be().then(() => {
      e.show = !1;
    });
  }
};
Mn.setDefaultOptions = (e) => {
  it = e;
};
Mn.resetDefaultOptions = () => {
  it = {};
};
fr.install = function(e) {
  e.component(fr.name, fr);
};
Mn.install = function(e) {
  e.component(fr.name, fr);
};
Mn.Component = fr;
var zS = fr, Nt = {
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
  onScroll: R()
};
function Nl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Al(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Nl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Nl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Ly,
  classes: Ry
} = re("sticky");
function Uy(e, n) {
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
      [j(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var id = ne({
  name: "VarSticky",
  props: Nt,
  setup(e) {
    var n = B(null), r = B(null), a = B(!1), t = B("0px"), o = B("0px"), i = B("auto"), l = B("auto"), s = B("auto"), u = B("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => Le(e.offsetTop)), m, h = () => {
      var {
        cssMode: b,
        disabled: P
      } = e;
      if (!P) {
        var D = 0;
        if (m !== window) {
          var {
            top: S
          } = m.getBoundingClientRect();
          D = S;
        }
        var E = r.value, $ = n.value, {
          top: I,
          left: V
        } = $.getBoundingClientRect(), g = I - D;
        return g <= f.value ? (b || (i.value = $.offsetWidth + "px", l.value = $.offsetHeight + "px", t.value = D + f.value + "px", o.value = V + "px", s.value = E.offsetWidth + "px", u.value = E.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: g,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var b = h();
        b && T(e.onScroll, b.offsetTop, b.isFixed);
      }
    }, w = /* @__PURE__ */ function() {
      var b = Al(function* () {
        a.value = !1, yield Lv(), h();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), k = /* @__PURE__ */ function() {
      var b = Al(function* () {
        yield In(), m = Da(n.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), M = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return le(() => e.disabled, w), ln(k), Ja(M), br(M), ka(window, "scroll", y), {
      n: Ly,
      classes: Ry,
      resize: w,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: L
    };
  }
});
id.render = Uy;
const Wn = id;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var LS = Wn, ld = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Fy() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(ld);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Hy() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(ld);
  if (!r)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var Yy = {
  index: {
    type: [Number, String]
  }
}, {
  n: jy,
  classes: Wy
} = re("index-anchor");
function Gy(e, n) {
  return p(), ge(
    Qa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: fe(() => [z(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [j(e.$slots, "default", {}, () => [be(
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
var sd = ne({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Wn
  },
  inheritAttrs: !1,
  props: Yy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Hy(), t = B(0), o = B(!1), i = F(() => e.index), l = B(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, h = (w) => {
      o.value = w;
    }, y = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: m,
      setDisabled: h
    };
    return a(y), {
      n: jy,
      classes: Wy,
      name: i,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Ne
    };
  }
});
sd.render = Gy;
const Gr = sd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var RS = Gr, qy = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
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
  onClick: R(),
  onChange: R()
};
function zl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        zl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        zl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Xy,
  classes: Ky
} = re("index-bar"), Zy = ["onClick"];
function Jy(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [j(e.$slots, "default"), z(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: G({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), O(
        Oe,
        null,
        ze(e.anchorNameList, (r) => (p(), O(
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
          ae(r),
          15,
          Zy
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
var ud = ne({
  name: "VarIndexBar",
  props: qy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Fy(), t = B(""), o = B(null), i = B([]), l = B(), s = F(() => e.sticky), u = F(() => e.cssMode), d = F(() => Le(e.stickyOffsetTop)), v = F(() => e.zIndex), f = null, m = {
      active: l,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(m);
    var h = (S, E) => {
      var $ = fi(S) ? S.name.value : S;
      $ === l.value || $ === void 0 || (l.value = $, (E == null ? void 0 : E.event) !== !1 && T(e.onChange, $));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: S
      } = f.getBoundingClientRect(), {
        scrollTop: E
      } = f, {
        top: $
      } = o.value.getBoundingClientRect();
      return E - S + $;
    }, w = () => {
      var S = Jt(f), E = f === window ? document.body.scrollHeight : f.scrollHeight, $ = y();
      r.forEach((I, V) => {
        var g = I.ownTop.value, C = S - g + d.value - $, H = V === r.length - 1 ? E : r[V + 1].ownTop.value - I.ownTop.value;
        C >= 0 && C < H && t.value === "" && (V && !e.cssMode && r[V - 1].setDisabled(!0), I.setDisabled(!1), h(I));
      });
    }, k = /* @__PURE__ */ function() {
      var S = Vt(function* (E) {
        var {
          anchorName: $,
          manualCall: I = !1,
          options: V
        } = E;
        if (I && T(e.onClick, $), $ !== l.value) {
          var g = r.find((_) => {
            var {
              name: W
            } = _;
            return $ === W.value;
          });
          if (g) {
            var C = y(), H = g.ownTop.value - d.value + C, Q = pi(f);
            t.value = $, h($, V), yield lt(f, {
              left: Q,
              top: H,
              animation: os,
              duration: L(e.duration)
            }), Qt(() => {
              t.value = "";
            });
          }
        }
      });
      return function($) {
        return S.apply(this, arguments);
      };
    }(), M = /* @__PURE__ */ function() {
      var S = Vt(function* () {
        yield In(), f = Da(o.value);
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), b = () => {
      f.addEventListener("scroll", w);
    }, P = () => {
      f.removeEventListener("scroll", w);
    }, D = (S, E) => {
      On(() => k({
        anchorName: S,
        options: E
      }));
    };
    return le(() => n.value, /* @__PURE__ */ Vt(function* () {
      yield In(), r.forEach((S) => {
        var {
          name: E,
          setOwnTop: $
        } = S;
        E.value && i.value.push(E.value), $();
      });
    })), ln(/* @__PURE__ */ Vt(function* () {
      yield M(), b();
    })), Xt(P), br(P), {
      n: Xy,
      classes: Ky,
      barEl: o,
      active: l,
      zIndex: v,
      anchorNameList: i,
      toNumber: L,
      scrollTo: D,
      anchorClick: k
    };
  }
});
ud.render = Jy;
const qr = ud;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var US = qr;
function Qy(e) {
  return ["text", "password", "number"].includes(e);
}
var _y = {
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
    validator: Qy
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
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
  maxlength: {
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
  clearable: {
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
  onFocus: R(),
  onBlur: R(),
  onClick: R(),
  onClear: R(),
  onInput: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: go,
  classes: xy
} = re("input"), eb = ["id", "disabled", "type", "value", "maxlength", "rows"], nb = ["id", "disabled", "type", "value", "maxlength"], rb = ["for"];
function ab(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[14] || (n[14] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: G({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (p(), O(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : ee("v-if", !0), e.textarea ? (p(), O(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: G({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none"
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
          eb
        )) : (p(), O(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: G({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
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
          nb
        )), z(
          "label",
          {
            class: c(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: G({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ae(e.placeholder),
          15,
          rb
        )],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (p(), ge(
          r,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : ee("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: G({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
    )) : ee("v-if", !0), J(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    2
    /* CLASS */
  );
}
var dd = ne({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: _y,
  setup(e) {
    var n = B("var-input-" + Ma().uid), r = B(null), a = B(!1), t = B(!1), o = F(() => e.type === "number" ? "text" : e.type), i = F(() => {
      var {
        maxlength: N,
        modelValue: x
      } = e;
      return N ? Ln(x) ? "0 / " + N : String(x).length + "/" + N : "";
    }), {
      bindForm: l,
      form: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), m = (N) => {
      Be(() => {
        var {
          validateTrigger: x,
          rules: te,
          modelValue: U
        } = e;
        d(x, N, te, U);
      });
    }, h = () => {
      var {
        hint: N,
        modelValue: x
      } = e;
      if (!N && (!Ln(x) || t.value))
        return go("--placeholder-hidden");
      if (N && (!Ln(x) || a.value))
        return go("--placeholder-hint");
    }, y = (N) => {
      a.value = !0, T(e.onFocus, N), m("onFocus");
    }, w = (N) => {
      a.value = !1, T(e.onBlur, N), m("onBlur");
    }, k = (N) => {
      var x = N.target, {
        value: te
      } = x;
      return e.type === "number" && (te = $(te)), V(I(te));
    }, M = () => {
      t.value = !0;
    }, b = (N) => {
      t.value && (t.value = !1, N.target.dispatchEvent(new Event("input")));
    }, P = (N) => {
      if (!t.value) {
        var x = k(N);
        T(e["onUpdate:modelValue"], x), T(e.onInput, x, N), m("onInput");
      }
    }, D = (N) => {
      var x = k(N);
      T(e.onChange, x, N), m("onChange");
    }, S = () => {
      var {
        disabled: N,
        readonly: x,
        clearable: te,
        onClear: U
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || N || x || !te || (T(e["onUpdate:modelValue"], ""), T(U, ""), m("onClear"));
    }, E = (N) => {
      var {
        disabled: x,
        onClick: te
      } = e;
      s != null && s.disabled.value || x || (T(te, N), m("onClick"));
    }, $ = (N) => {
      var x = N.indexOf("-"), te = N.indexOf(".");
      return x > -1 && (N = x === 0 ? "-" + N.replace(/-/g, "") : N.replace(/-/g, "")), te > -1 && (N = N.slice(0, te + 1) + N.slice(te).replace(/\./g, "")), N.replace(/[^-0-9.]/g, "");
    }, I = (N) => e.modelModifiers.trim ? N.trim() : N, V = (N) => e.maxlength ? N.slice(0, L(e.maxlength)) : N, g = (N) => {
      var {
        disabled: x,
        readonly: te
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || x || te || N.stopPropagation();
    }, C = () => {
      T(e["onUpdate:modelValue"], ""), f();
    }, H = () => v(e.rules, e.modelValue), Q = () => {
      var N;
      (N = r.value) == null || N.focus();
    }, _ = () => {
      r.value.blur();
    }, W = {
      reset: C,
      validate: H,
      resetValidation: f
    };
    return T(l, W), ln(() => {
      e.autofocus && Q();
    }), {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: u,
      type: o,
      maxlengthText: i,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      n: go,
      classes: xy,
      isEmpty: Ln,
      computePlaceholderState: h,
      handleFocus: y,
      handleBlur: w,
      handleInput: P,
      handleChange: D,
      handleClear: S,
      handleClick: E,
      handleTouchstart: g,
      handleCompositionStart: M,
      handleCompositionEnd: b,
      validate: H,
      resetValidation: f,
      reset: C,
      focus: Q,
      blur: _
    };
  }
});
dd.render = ab;
const cr = dd;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var FS = cr;
function tb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ob(e) {
  return ["always", "hover", "none"].includes(e);
}
var ib = {
  type: {
    type: String,
    default: "default",
    validator: tb
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
    validator: ob
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
  onClick: R()
}, {
  n: lb,
  classes: sb
} = re("link");
function ub(e, n) {
  return p(), ge(
    Qa(e.tag),
    Ve(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: fe(() => [j(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var vd = ne({
  name: "VarLink",
  props: ib,
  setup(e) {
    var n = F(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = F(() => {
      var {
        disabled: t,
        href: o,
        target: i,
        to: l,
        replace: s
      } = e;
      return t ? {} : o ? {
        href: o,
        target: i
      } : l ? {
        to: l,
        target: i,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: o,
        onClick: i
      } = e;
      o || T(i, t);
    };
    return {
      n: lb,
      classes: sb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: me
    };
  }
});
vd.render = ub;
const Xr = vd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var HS = Xr, db = {
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
  onLoad: R(),
  "onUpdate:loading": R(),
  "onUpdate:error": R()
};
function Ll(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ll(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ll(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: fb,
  classes: cb
} = re("list");
function mb(e, n) {
  var r = oe("var-loading"), a = Me("ripple");
  return p(), O(
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
        ae(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), J(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : ee("v-if", !0), e.finished ? j(e.$slots, "finished", {
      key: 1
    }, () => [z(
      "div",
      {
        class: c(e.n("finished"))
      },
      ae(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : ee("v-if", !0), e.error ? j(e.$slots, "error", {
      key: 2
    }, () => [we((p(), O(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [be(
        ae(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : ee("v-if", !0), z(
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
var fd = ne({
  name: "VarList",
  directives: {
    Ripple: Re
  },
  components: {
    VarLoading: Tn
  },
  props: db,
  setup(e) {
    var n = B(null), r = B(null), a, t = () => {
      T(e["onUpdate:error"], !1), T(e["onUpdate:loading"], !0), T(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = vb(function* () {
        yield Be();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && o() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return ln(() => {
      a = Da(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), Ja(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: Ye,
      listEl: n,
      detectorEl: r,
      dt: Zt,
      isNumber: nn,
      load: t,
      check: i,
      n: fb,
      classes: cb
    };
  }
});
fd.render = mb;
const Kr = fd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var YS = Kr, pb = {
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
  classes: hb,
  n: Rl
} = re("loading-bar");
const gb = ne({
  name: "VarLoadingBar",
  props: pb,
  setup(e) {
    return () => J("div", {
      class: hb(Rl(), [e.error, Rl("--error")]),
      style: {
        zIndex: fn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: me(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: me(e.top)
      }
    }, null);
  }
});
var cd, md, fo, pd, Ul, hd = {}, yb = {
  value: 0,
  opacity: 0,
  error: !1
}, je = Ee(yb), bb = (e) => {
  Object.assign(je, e);
}, wb = (e) => {
  Object.assign(je, e), hd = e;
}, Cb = () => {
  Object.keys(hd).forEach((e) => {
    je[e] !== void 0 && (je[e] = void 0);
  });
}, gd = () => {
  Ul || (Ul = !0, _a(gb, je));
}, Di = () => {
  cd = window.setTimeout(() => {
    if (!(je.value >= 95)) {
      var e = Math.random();
      je.value < 70 && (e = Math.round(5 * Math.random())), je.value += e, Di();
    }
  }, 200);
}, Ni = () => {
  window.clearTimeout(md), window.clearTimeout(cd), window.clearTimeout(fo), window.clearTimeout(pd);
}, Sb = () => {
  Ni(), je.error = !1, je.value = 0, gd(), fo = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di();
}, yd = () => {
  Ni(), je.value = 100, fo = window.setTimeout(() => {
    je.opacity = 0, md = window.setTimeout(() => {
      je.error = !1;
    }, 250);
  }, 300);
}, kb = () => {
  Ni(), je.error = !0, je.value === 100 && (je.value = 0), gd(), fo = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di(), pd = window.setTimeout(yd, 300);
}, bd = {
  start: Sb,
  finish: yd,
  error: kb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: bb,
  setDefaultOptions: wb,
  resetDefaultOptions: Cb
}, jS = bd;
const ti = bd;
function $b(e) {
  return ["click", "hover"].includes(e);
}
function Tb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Pb = {
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
    validator: $b
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Tb
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
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:show": R()
}, {
  n: Ob,
  classes: Vb
} = re("menu");
function Mb(e, n) {
  return p(), O(
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
    [j(e.$slots, "default"), (p(), ge(
      Ba,
      {
        to: e.teleport
      },
      [J(
        Ne,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [we(z(
            "div",
            {
              ref: "popover",
              style: G({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Bn(() => {
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
          ), [[pr, e.show]])]),
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
var wd = ne({
  name: "VarMenu",
  props: Pb,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: m,
      // expose
      resize: h
    } = Ju(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: me,
      n: Ob,
      classes: Vb,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: h,
      open: f,
      close: m
    };
  }
});
wd.render = Mb;
const Gn = wd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var WS = Gn, Cd = Symbol("SELECT_BIND_OPTION_KEY");
function Bb() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = un(Cd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function Ib() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = sn(Cd);
  if (!r)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: e,
    select: n,
    bindSelect: r
  };
}
var Eb = {
  label: {},
  value: {}
}, {
  n: Db,
  classes: Nb
} = re("option");
function Ab(e, n) {
  var r = oe("var-checkbox"), a = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: G({
        width: e.wrapWidth,
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
    ), e.multiple ? (p(), ge(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Bn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : ee("v-if", !0), z(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [j(e.$slots, "default", {}, () => [be(
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
var Sd = ne({
  name: "VarOption",
  directives: {
    Ripple: Re
  },
  components: {
    VarCheckbox: lr
  },
  props: Eb,
  setup(e) {
    var n = B(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: o,
      bindSelect: i
    } = Ib(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d,
      computeLabel: v
    } = o, f = () => {
      n.value = !n.value, d(y);
    }, m = () => d(y), h = (w) => {
      n.value = w;
    }, y = {
      label: a,
      value: t,
      selected: r,
      sync: h
    };
    return le([() => e.label, () => e.value], v), i(y), {
      n: Db,
      classes: Nb,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: f,
      handleSelect: m
    };
  }
});
Sd.render = Ab;
const Zr = Sd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var GS = Zr, zb = {
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
  onClick: R(),
  "onUpdate:show": R()
};
function Lb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !mt(e);
}
var {
  n: Fl
} = re("overlay");
const Jr = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: zb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = gt(() => e.show, 1), {
      disabled: o
    } = _t(), i = () => {
      T(e.onClick), T(e["onUpdate:show"], !1);
    };
    xt(() => e.show, () => e.lockScroll);
    var l = () => J("div", Ve({
      class: Fl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [T(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return J(Ne, {
        name: Fl("--fade")
      }, {
        default: () => [u && l()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return J(Ba, {
          to: u,
          disabled: o.value
        }, Lb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var qS = Jr, Rb = {
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
  onChange: R(),
  "onUpdate:current": R(),
  "onUpdate:size": R()
}, {
  n: Ub,
  classes: Fb
} = re("pagination"), Hb = ["item-mode", "onClick"];
function Yb(e, n) {
  var r = oe("var-icon"), a = oe("var-input"), t = oe("var-cell"), o = oe("var-menu"), i = Me("ripple");
  return p(), O(
    "ul",
    {
      class: c(e.n())
    },
    [we((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [j(e.$slots, "prev", {}, () => [J(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), O(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = Ui((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), z("span", null, [be(
        " / " + ae(e.pageCount) + " ",
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
    )) : (p(!0), O(
      Oe,
      {
        key: 1
      },
      ze(e.pageList, (l, s) => we((p(), O(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [be(
          ae(l),
          1
          /* TEXT */
        )],
        10,
        Hb
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), we((p(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [j(e.$slots, "next", {}, () => [J(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), O(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [J(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: fe(() => [(p(!0), O(
            Oe,
            null,
            ze(e.sizeOption, (l, s) => we((p(), ge(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: fe(() => [be(
                  ae(l) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class", "onClick"]
            )), [[i]])),
            128
            /* KEYED_FRAGMENT */
          ))]),
          default: fe(() => [z(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [z(
              "span",
              null,
              ae(e.size) + ae(e.pack.paginationItem) + " / " + ae(e.pack.paginationPage),
              1
              /* TEXT */
            ), J(
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
        ["show"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (p(), O(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        ae(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), J(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = Ui((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : ee("v-if", !0), e.totalText ? (p(), O(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      ae(e.totalText),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var kd = ne({
  name: "VarPagination",
  components: {
    VarMenu: Gn,
    VarIcon: $e,
    VarCell: ir,
    VarInput: cr
  },
  directives: {
    Ripple: Re
  },
  props: Rb,
  setup(e) {
    var n = B(!1), r = B(""), a = B("1"), t = B(!1), o = B(!1), i = B(L(e.current) || 1), l = B(L(e.size) || 10), s = B([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(L(e.total) / L(l.value))), v = F(() => {
      var P = l.value * (i.value - 1) + 1, D = Math.min(l.value * i.value, L(e.total));
      return [P, D];
    }), f = F(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (P, D) => nn(P) ? !1 : D === 1 ? t.value : o.value, h = (P, D) => nn(P) ? "basic" : D === 1 ? "head" : "tail", y = (P, D) => {
      P === i.value || e.disabled || (nn(P) ? i.value = P : P === "prev" ? i.value > 1 && (i.value -= 1) : P === "next" ? i.value < d.value && (i.value += 1) : P === "..." && (D === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, w = () => {
      e.disabled || (n.value = !0);
    }, k = (P) => {
      l.value = P, n.value = !1;
    }, M = (P) => {
      var D = /^[1-9][0-9]*$/;
      return D.test(P);
    }, b = (P, D, S) => {
      if (S.target.blur(), M(D)) {
        var E = L(D);
        E > d.value && (E = d.value, a.value = "" + E), E !== i.value && (i.value = E);
      }
      P === "quick" && (r.value = ""), P === "simple" && !M(D) && (a.value = "" + i.value);
    };
    return le([() => e.current, () => e.size], (P) => {
      var [D, S] = P;
      i.value = L(D) || 1, l.value = L(S || 10);
    }), le([i, l, d], (P, D) => {
      var [S, E, $] = P, [I, V] = D, g = [], {
        maxPagerCount: C,
        total: H,
        onChange: Q
      } = e, _ = Math.ceil(L(H) / L(V)), W = $ - (C - u.value) - 1;
      if (a.value = "" + S, $ - 2 > C) {
        if (I === void 0 || $ !== _)
          for (var N = 2; N < C + 2; N++)
            g.push(N);
        if (S <= C && S < W) {
          g = [];
          for (var x = 1; x < C + 1; x++)
            g.push(x + 1);
          t.value = !0, o.value = !1;
        }
        if (S > C && S < W) {
          g = [];
          for (var te = 1; te < C + 1; te++)
            g.push(S + te - u.value);
          t.value = S === 2 && C === 1, o.value = !1;
        }
        if (S >= W) {
          g = [];
          for (var U = 1; U < C + 1; U++)
            g.push($ - (C - U) - 1);
          t.value = !1, o.value = !0;
        }
        g = [1, "...", ...g, "...", $];
      } else
        for (var Z = 1; Z <= $; Z++)
          g.push(Z);
      s.value = g, I !== void 0 && $ > 0 && T(Q, S, E), T(e["onUpdate:current"], S), T(e["onUpdate:size"], E);
    }, {
      immediate: !0
    }), {
      n: Ub,
      classes: Fb,
      pack: Ye,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: h,
      isHideEllipsis: m,
      clickItem: y,
      showMenu: w,
      clickSize: k,
      setPage: b,
      toNumber: L
    };
  }
});
kd.render = Yb;
const Qr = kd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var XS = Qr, jb = {
  elevation: {
    type: [Number, String]
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
  onClick: R()
}, {
  n: Wb,
  classes: Gb
} = re("paper");
function qb(e, n) {
  var r = Me("ripple");
  return we((p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.elevation != null, e.n("$-elevation--" + e.elevation)], [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: G({
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
var $d = ne({
  name: "VarPaper",
  directives: {
    Ripple: Re
  },
  props: jb,
  setup(e) {
    var n = (r) => {
      T(e.onClick, r);
    };
    return {
      n: Wb,
      classes: Gb,
      toSizeUnit: me,
      handleClick: n
    };
  }
});
$d.render = qb;
const _r = $d;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var KS = _r;
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
var Xb = oi({
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
  onChange: R(),
  onConfirm: R(),
  onCancel: R()
}, Je(ht, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Kb,
  classes: Zb
} = re("picker"), Hl = 300, Jb = 15, Yl = 0, Qb = ["onTouchstart", "onTouchmove", "onTouchend"], _b = ["onTransitionend"];
function xb(e, n) {
  var r = oe("var-button");
  return p(), ge(
    Qa(e.dynamic ? e.n("$-popup") : e.Transition),
    Ve(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: fe(() => [z(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), O(
          "div",
          {
            key: 0,
            class: c(e.n("toolbar"))
          },
          [j(e.$slots, "cancel", {}, () => [J(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: fe(() => [be(
                ae(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), j(e.$slots, "title", {}, () => [z(
            "div",
            {
              class: c(e.n("title"))
            },
            ae(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), j(e.$slots, "confirm", {}, () => [J(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: fe(() => [be(
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
        )) : ee("v-if", !0), z(
          "div",
          {
            class: c(e.n("columns")),
            style: G({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), O(
            Oe,
            null,
            ze(e.scrollColumns, (a) => (p(), O(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Bn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [z(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: G({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(p(!0), O(
                  Oe,
                  null,
                  ze(a.column.texts, (t) => (p(), O(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: G({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [z(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      ae(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    6
                    /* CLASS, STYLE */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                _b
              )],
              42,
              Qb
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
var Td = ne({
  name: "VarPicker",
  components: {
    VarButton: Xe,
    VarPopup: hn
  },
  inheritAttrs: !1,
  props: Xb,
  setup(e) {
    var n = B([]), r = F(() => Le(e.optionHeight)), a = F(() => Le(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), o = F(() => a.value * r.value), i = [], l = (g, C) => {
      C.scrollEl = g;
    }, s = (g) => {
      T(e["onUpdate:show"], g);
    }, u = (g) => {
      var C = r.value + t.value, H = t.value - g.column.texts.length * r.value;
      g.translate >= C && (g.translate = C), g.translate <= H && (g.translate = H);
    }, d = (g, C) => {
      var {
        length: H
      } = g.column.texts;
      return C = C >= H ? H - 1 : C, C = C <= 0 ? 0 : C, C;
    }, v = (g) => {
      var C = Math.round((t.value - g.translate) / r.value);
      return d(g, C);
    }, f = () => {
      var g = n.value.map((H) => H.column.texts[H.index]), C = n.value.map((H) => H.index);
      return {
        texts: g,
        indexes: C
      };
    }, m = function(g, C, H, Q) {
      Q === void 0 && (Q = !1);
      var _ = t.value - d(g, C) * r.value;
      _ === g.translate && (g.scrolling = !1, !Q && E(g)), g.translate = _, g.duration = H;
    }, h = (g, C, H) => {
      g.translate += Math.abs(C / H) / 3e-3 * (C < 0 ? -1 : 1);
    }, y = (g, C) => {
      C.touching = !0, C.scrolling = !1, C.duration = 0, C.translate = mo(C.scrollEl);
    }, w = (g, C) => {
      if (C.touching) {
        var {
          clientY: H
        } = g.touches[0], Q = C.prevY !== void 0 ? H - C.prevY : 0;
        C.prevY = H, C.translate += Q, u(C);
        var _ = performance.now();
        _ - C.momentumTime > Hl && (C.momentumTime = _, C.momentumPrevY = C.translate);
      }
    }, k = (g, C) => {
      C.touching = !1, C.scrolling = !0, C.prevY = void 0;
      var H = C.translate - C.momentumPrevY, Q = performance.now() - C.momentumTime, _ = Math.abs(H) >= Jb && Q <= Hl;
      _ && h(C, H, Q), C.index = v(C), m(C, C.index, _ ? 1e3 : 200);
    }, M = (g) => {
      g.scrolling = !1, E(g);
    }, b = (g) => g.map((C, H) => {
      var Q, _ = Ce(C) ? {
        texts: C
      } : C, W = {
        id: Yl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = _.initialIndex) != null ? Q : 0,
        columnIndex: H,
        duration: 0,
        momentumTime: 0,
        column: _,
        scrollEl: null,
        scrolling: !1
      };
      return m(W, W.index, 0, !0), W;
    }), P = (g) => {
      var C = [];
      return D(C, g, 0, !0), C;
    }, D = function(g, C, H, Q) {
      if (Q === void 0 && (Q = !1), Ce(C) && C.length) {
        var _, W = Q && (_ = e.cascadeInitialIndexes[g.length]) != null ? _ : 0, N = {
          id: Yl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: W,
          columnIndex: H,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: C.map((x) => x[e.textKey])
          },
          columns: C,
          scrollEl: null,
          scrolling: !1
        };
        g.push(N), m(N, N.index, 0, !0), D(g, N.columns[N.index].children, H + 1, Q);
      }
    }, S = (g) => {
      n.value.splice(n.value.indexOf(g) + 1), D(n.value, g.columns[g.index].children, g.columnIndex + 1);
    }, E = (g) => {
      var {
        cascade: C,
        onChange: H
      } = e;
      C && S(g);
      var Q = n.value.some((x) => x.scrolling);
      if (!Q) {
        var {
          texts: _,
          indexes: W
        } = f(), N = W.every((x, te) => x === i[te]);
        N || (i = [...W], T(H, _, W));
      }
    }, $ = () => {
      if (e.cascade) {
        var g = n.value.find((C) => C.scrolling);
        g && (g.translate = mo(g.scrollEl), g.index = v(g), m(g, g.index, 0, !0), g.scrolling = !1, S(g));
      } else
        n.value.forEach((C) => {
          C.translate = mo(C.scrollEl), C.index = v(C), m(C, C.index, 0);
        });
    }, I = () => {
      $();
      var {
        texts: g,
        indexes: C
      } = f();
      i = [...C], T(e.onConfirm, g, C);
    }, V = () => {
      $();
      var {
        texts: g,
        indexes: C
      } = f();
      i = [...C], T(e.onCancel, g, C);
    };
    return le(() => e.columns, (g) => {
      n.value = e.cascade ? P(Fi(g)) : b(Fi(g));
      var {
        indexes: C
      } = f();
      i = [...C];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Kb,
      classes: Zb,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Ne,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: w,
      handleTouchend: k,
      handleTransitionend: M,
      confirm: I,
      cancel: V,
      dt: Zt
    };
  }
});
Td.render = xb;
const mr = Td;
var rn;
function Va(e) {
  return new Promise((n) => {
    Va.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Ee(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = _a(mr, a, {
      onConfirm: (o, i) => {
        T(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, i) => {
        T(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, rn === a && (rn = null);
      },
      onClose: () => {
        T(a.onClose), n({
          state: "close"
        }), rn === a && (rn = null);
      },
      onClosed: () => {
        T(a.onClosed), t(), rn === a && (rn = null);
      },
      onRouteChange: () => {
        t(), rn === a && (rn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
mr.install = function(e) {
  e.component(mr.name, mr);
};
Va.Component = mr;
Va.install = function(e) {
  e.component(mr.name, mr);
};
Va.close = () => {
  if (rn != null) {
    var e = rn;
    rn = null, Be().then(() => {
      e.show = !1;
    });
  }
};
var ZS = mr;
function e0(e) {
  return ["linear", "circle"].includes(e);
}
var n0 = {
  mode: {
    type: String,
    default: "linear",
    validator: e0
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
  n: r0,
  classes: a0
} = re("progress"), t0 = ["viewBox"], o0 = ["cx", "cy", "r", "stroke-width"], i0 = ["cx", "cy", "r", "stroke-width"];
function l0(e, n) {
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
      [z(
        "div",
        {
          class: c(e.n("linear-block")),
          style: G({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), O(
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
        )) : ee("v-if", !0), z(
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
      ), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [be(
          ae(e.linearProps.roundValue),
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
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), O(
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
          o0
        )) : ee("v-if", !0), z(
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
          i0
        )],
        14,
        t0
      )), e.label ? (p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [j(e.$slots, "default", {}, () => [be(
          ae(e.circleProps.roundValue),
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
var Pd = ne({
  name: "VarProgress",
  props: n0,
  setup(e) {
    var n = F(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = F(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, i = "0 0 " + Le(a) + " " + Le(a), l = L(o) > 100 ? 100 : Math.round(L(o)), s = (Le(a) - Le(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: i,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: r0,
      classes: a0,
      toSizeUnit: me,
      multiplySizeUnit: xe,
      linearProps: n,
      circleProps: r
    };
  }
});
Pd.render = l0;
const xr = Pd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var JS = xr, s0 = {
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
  onRefresh: R(),
  "onUpdate:modelValue": R()
};
function jl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function u0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        jl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        jl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Wl,
  classes: d0
} = re("pull-refresh"), Gl = 150;
function v0(e, n) {
  var r = oe("var-icon");
  return p(), O(
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
      [J(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
      /* CLASS, STYLE */
    ), j(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Od = ne({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: s0,
  setup(e) {
    var n, r, a = B(0), t = B(null), o = B(null), i = B(0), l = B(-999), s = B("arrow-down"), u = B("default"), d = B(!1), v = 0, f = 0, m = B(!0), h = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: k.value ? e.successBgColor : e.bgColor,
      color: k.value ? e.successColor : e.color
    })), w = F(() => Math.abs(2 * a.value)), k = F(() => u.value === "success"), M = () => new Promise((V) => {
      window.setTimeout(() => {
        m.value = !0, V();
      }, Gl);
    }), b = (V) => {
      var g = "classList" in n ? n : document.body;
      g.classList[V](Wl() + "--lock");
    }, P = (V) => {
      v = V.touches[0].clientY, f = 0;
    }, D = (V) => {
      if (h.value) {
        var g = Jt(n);
        if (!(g > 0)) {
          var C = g === 0, H = V.touches[0];
          f = H.clientY - v, C && f >= 0 && V.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = V.touches[0].clientY), C && l.value > a.value && b("add");
          var Q = (V.touches[0].clientY - i.value) / 2 + a.value;
          l.value = Q >= w.value ? w.value : Q, l.value >= w.value * 0.2 ? (m.value = !1, s.value = "refresh", r = M()) : s.value = "arrow-down";
        }
      }
    }, S = /* @__PURE__ */ function() {
      var V = u0(function* () {
        h.value && (d.value = !0, l.value >= w.value * 0.2 ? (yield r, u.value = "loading", l.value = w.value * 0.3, T(e["onUpdate:modelValue"], !0), T(e.onRefresh), b("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, b("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), E = () => {
      var {
        width: V
      } = o.value.getBoundingClientRect();
      l.value = -(V + V * 0.25), a.value = -(V + V * 0.25);
    }, $ = () => {
      n = e.target ? ls(e.target, "PullRefresh") : Da(t.value);
    }, I = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (V) => {
      V === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, I();
      }, L(e.successDuration)));
    }), ln(() => {
      $(), E();
    }), ka(t, "touchmove", D), {
      n: Wl,
      classes: d0,
      iconHasChanged: m,
      ICON_TRANSITION: Gl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: P,
      touchMove: D,
      touchEnd: S,
      iconName: s,
      controlStyle: y,
      isSuccess: k
    };
  }
});
Od.render = v0;
const ea = Od;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var QS = ea, f0 = {
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
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, Vd = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function c0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Vd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function m0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(Vd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: p0,
  classes: h0
} = re("radio");
function g0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [we((p(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: G({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? j(e.$slots, "checked-icon", {
          key: 0
        }, () => [J(
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
        )]) : j(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [J(
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
      }], [i, e.handleHovering, "desktop"]]), z(
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
var Md = ne({
  name: "VarRadio",
  directives: {
    Ripple: Re,
    Hover: En
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  inheritAttrs: !1,
  props: f0,
  setup(e) {
    var n = B(!1), r = F(() => n.value === e.checkedValue), a = B(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = m0(), {
      hovering: i,
      handleHovering: l
    } = hr(), {
      form: s,
      bindForm: u
    } = wn(), {
      errorMessage: d,
      validateWithTrigger: v,
      validate: f,
      // expose
      resetValidation: m
    } = bn(), h = (S) => {
      Be(() => {
        var {
          validateTrigger: E,
          rules: $,
          modelValue: I
        } = e;
        v(E, S, $, I);
      });
    }, y = (S) => {
      var {
        checkedValue: E,
        onChange: $
      } = e;
      t && n.value === E || (n.value = S, T(e["onUpdate:modelValue"], n.value), T($, n.value), t == null || t.onToggle(E), h("onChange"));
    }, w = (S) => {
      var {
        disabled: E,
        readonly: $,
        uncheckedValue: I,
        checkedValue: V,
        onClick: g
      } = e;
      s != null && s.disabled.value || E || (T(g, S), !(s != null && s.readonly.value || $) && (a.value = !0, y(r.value ? I : V)));
    }, k = (S) => {
      var {
        checkedValue: E,
        uncheckedValue: $
      } = e;
      n.value = S === E ? E : $;
    }, M = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, b = () => f(e.rules, e.modelValue), P = (S) => {
      var {
        uncheckedValue: E,
        checkedValue: $
      } = e, I = ![E, $].includes(S);
      I && (S = r.value ? E : $), y(S);
    };
    le(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var D = {
      sync: k,
      validate: b,
      resetValidation: m,
      reset: M
    };
    return T(o, D), T(u, D), {
      withAnimation: a,
      checked: r,
      errorMessage: d,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      hovering: i,
      handleHovering: l,
      n: p0,
      classes: h0,
      handleClick: w,
      toggle: P,
      reset: M,
      validate: b,
      resetValidation: m
    };
  }
});
Md.render = g0;
const na = Md;
na.install = function(e) {
  e.component(na.name, na);
};
var _S = na;
function y0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var b0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: y0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: w0,
  classes: C0
} = re("radio-group");
function S0(e, n) {
  var r = oe("var-form-details");
  return p(), O(
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
    ), J(
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
var Bd = ne({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: b0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = c0(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = bn(), u = F(() => o.value), d = (w) => {
      Be(() => {
        var {
          validateTrigger: k,
          rules: M,
          modelValue: b
        } = e;
        i(k, w, M, b);
      });
    }, v = () => r.forEach((w) => {
      var {
        sync: k
      } = w;
      return k(e.modelValue);
    }), f = (w) => {
      T(e["onUpdate:modelValue"], w), T(e.onChange, w), d("onChange");
    }, m = () => l(e.rules, e.modelValue), h = () => {
      T(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return T(t, y), a(y), {
      errorMessage: o,
      n: w0,
      classes: C0,
      reset: h,
      validate: m,
      resetValidation: s
    };
  }
});
Bd.render = S0;
const ra = Bd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var xS = ra, k0 = {
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: et
} = re("rate"), $0 = ["onClick"];
function T0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return p(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [(p(!0), O(
        Oe,
        null,
        ze(e.toNumber(e.count), (l) => we((p(), O(
          "div",
          {
            key: l,
            style: G(e.getStyle(l)),
            class: c(e.getClass(l)),
            onClick: (s) => e.handleClick(l, s)
          },
          [J(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(l).name,
              style: G({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          ), J(
            a,
            {
              hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          $0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [i, e.createHoverHandler(l), "desktop"]])),
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
var Id = ne({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Re,
    Hover: En
  },
  props: k0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), {
      hovering: l
    } = hr(), s = B(-1), u = (b) => {
      var {
        count: P,
        gap: D
      } = e;
      return {
        color: v(b).color,
        marginRight: b !== L(P) ? me(D) : 0
      };
    }, d = (b) => {
      var {
        name: P,
        color: D
      } = v(b);
      return {
        [et("content")]: !0,
        [et("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [et("--error")]: a.value,
        [et("--primary")]: P !== e.emptyIcon && !D
      };
    }, v = (b) => {
      var {
        modelValue: P,
        disabled: D,
        disabledColor: S,
        color: E,
        half: $,
        emptyColor: I,
        icon: V,
        halfIcon: g,
        emptyIcon: C
      } = e, H = E;
      return (D || n != null && n.disabled.value) && (H = S), b <= L(P) ? {
        color: H,
        name: V
      } : $ && b <= L(P) + 0.5 ? {
        color: H,
        name: g
      } : {
        color: D || n != null && n.disabled.value ? S : I,
        name: C
      };
    }, f = (b, P) => {
      if (e.half) {
        var {
          offsetWidth: D
        } = P.target;
        P.offsetX <= Math.floor(D / 2) && (b -= 0.5);
      }
      T(e["onUpdate:modelValue"], b);
    }, m = () => o(e.rules, L(e.modelValue)), h = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = (b, P) => {
      var {
        readonly: D,
        disabled: S,
        onChange: E
      } = e;
      D || S || n != null && n.disabled.value || n != null && n.readonly.value || (f(b, P), T(E, b), h());
    }, w = (b) => (P) => {
      s.value = b, l.value = P;
    }, k = () => {
      T(e["onUpdate:modelValue"], 0), i();
    }, M = {
      reset: k,
      validate: m,
      resetValidation: i
    };
    return T(r, M), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: y,
      hovering: l,
      currentHoveringValue: s,
      createHoverHandler: w,
      reset: k,
      validate: m,
      resetValidation: i,
      toSizeUnit: me,
      toNumber: L,
      n: et
    };
  }
});
Id.render = T0;
const aa = Id;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var ek = aa;
function P0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var O0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: P0
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
}, V0 = (e) => (Ia(""), e = e(), Ea(), e), M0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, B0 = /* @__PURE__ */ V0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), I0 = [B0];
function E0(e, n) {
  return p(), O("svg", M0, I0);
}
var Ed = ne({});
Ed.render = E0;
const D0 = Ed;
var N0 = (e) => (Ia(""), e = e(), Ea(), e), A0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, z0 = /* @__PURE__ */ N0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), L0 = [z0];
function R0(e, n) {
  return p(), O("svg", A0, L0);
}
var Dd = ne({});
Dd.render = R0;
const U0 = Dd;
var F0 = (e) => (Ia(""), e = e(), Ea(), e), H0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Y0 = /* @__PURE__ */ F0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), j0 = [Y0];
function W0(e, n) {
  return p(), O("svg", H0, j0);
}
var Nd = ne({});
Nd.render = W0;
const G0 = Nd;
var {
  n: q0,
  classes: X0
} = re("result");
function K0(e, n) {
  return p(), O(
    Oe,
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
var Ad = ne({
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
      n: q0,
      classes: X0,
      toNumber: L
    };
  }
});
Ad.render = K0;
const Z0 = Ad;
var J0 = (e) => (Ia(""), e = e(), Ea(), e), Q0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, _0 = /* @__PURE__ */ J0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), x0 = [_0];
function e1(e, n) {
  return p(), O("svg", Q0, x0);
}
var zd = ne({});
zd.render = e1;
const n1 = zd;
var r1 = (e) => (Ia(""), e = e(), Ea(), e), a1 = {
  viewBox: "-4 -4 32 32"
}, t1 = /* @__PURE__ */ r1(() => /* @__PURE__ */ z(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), o1 = [t1];
function i1(e, n) {
  return p(), O("svg", a1, o1);
}
var Ld = ne({});
Ld.render = i1;
const l1 = Ld;
var {
  n: s1,
  classes: u1
} = re("result");
function d1(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "image", {}, () => [e.type ? (p(), O(
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
        [(p(), ge(
          Qa(e.type),
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
    )) : ee("v-if", !0)]), j(e.$slots, "title", {}, () => [e.title ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (p(), O(
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
var Rd = ne({
  name: "VarResult",
  components: {
    Info: D0,
    Success: Z0,
    Warning: G0,
    Error: U0,
    Question: n1,
    Empty: l1
  },
  props: O0,
  setup(e) {
    var n = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: s1,
      classes: u1,
      toNumber: L,
      toPxNum: Le,
      toSizeUnit: me,
      circleSize: n,
      borderSize: r
    };
  }
});
Rd.render = d1;
const ta = Rd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var nk = ta;
function v1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function f1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var c1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: v1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: f1
  },
  onClick: R()
}, {
  n: m1,
  classes: p1
} = re("row");
function h1(e, n) {
  return p(), O(
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
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ud = ne({
  name: "VarRow",
  props: c1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Am(), t = F(() => {
      var s = Le(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, i = (s) => {
      T(e.onClick, s);
    }, l = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(l), {
      n: m1,
      classes: p1,
      average: t,
      handleClick: i,
      padStartFlex: zt
    };
  }
});
Ud.render = h1;
const oa = Ud;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var rk = oa;
function g1(e) {
  return ["left", "right", "center"].includes(e);
}
var y1 = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
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
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
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
    validator: g1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: R(),
  onBlur: R(),
  onClick: R(),
  onClear: R(),
  onClose: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: yo,
  classes: b1
} = re("select"), w1 = {
  key: 1
};
function C1(e, n) {
  var r = oe("var-chip"), a = oe("var-icon"), t = oe("var-menu"), o = oe("var-form-details");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: G({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [J(
          t,
          {
            "var-select-cover": "",
            class: c(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (i) => e.isFocus = i),
            onClose: e.handleBlur
          },
          {
            menu: fe(() => [z(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [j(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: fe(() => [z(
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
                [e.isEmptyModelValue ? ee("v-if", !0) : j(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), O(
                  Oe,
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
                      Oe,
                      null,
                      ze(e.labels, (i) => (p(), ge(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = Bn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: fe(() => [be(
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
                  )) : (p(), O(
                    "div",
                    {
                      key: 1,
                      class: c(e.n("values"))
                    },
                    ae(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (p(), O(
                  "span",
                  w1,
                  ae(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), j(e.$slots, "arrow-icon", {
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
            ), z(
              "label",
              {
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: G({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              ae(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )]),
            _: 3
            /* FORWARDED */
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "append-icon", {}, () => [e.clearable ? (p(), ge(
          a,
          {
            key: 0,
            class: c(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : ee("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: G({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
    )) : ee("v-if", !0), J(
      o,
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
var Fd = ne({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Gn,
    VarChip: sr,
    VarFormDetails: We
  },
  props: y1,
  setup(e) {
    var n = B(null), r = B(!1), a = F(() => e.multiple), t = F(() => e.focusColor), o = B(""), i = B([]), l = F(() => Ln(e.modelValue)), s = B("0px"), u = B(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: m,
      bindOptions: h
    } = Bb(), {
      errorMessage: y,
      validateWithTrigger: w,
      validate: k,
      // expose
      resetValidation: M
    } = bn(), b = B(null), P = () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K) {
        var Y = A;
        i.value = Y.map(E);
      }
      !K && !Ln(A) && (o.value = E(A)), !K && Ln(A) && (o.value = "");
    }, D = (K) => {
      Be(() => {
        var {
          validateTrigger: A,
          rules: Y,
          modelValue: X
        } = e;
        w(A, K, Y, X);
      });
    }, S = (K) => {
      var {
        value: A,
        label: Y
      } = K;
      return A.value != null ? A.value : Y.value;
    }, E = (K) => {
      var A, Y, X = m.find((de) => {
        var {
          value: pe
        } = de;
        return pe.value === K;
      });
      return X || (X = m.find((de) => {
        var {
          label: pe
        } = de;
        return pe.value === K;
      })), (A = (Y = X) == null ? void 0 : Y.label.value) != null ? A : "";
    }, $ = () => {
      var {
        hint: K,
        modelValue: A
      } = e;
      if (!K && !Ln(A))
        return yo("--placeholder-hidden");
      if (K && (!Ln(A) || r.value))
        return yo("--placeholder-hint");
    }, I = () => n.value && window.getComputedStyle(n.value).width || "0px", V = () => {
      var {
        disabled: K,
        readonly: A,
        onFocus: Y
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || A || (s.value = I(), u.value = Le(e.offsetY), r.value = !0, T(Y), D("onFocus"));
    }, g = () => {
      var {
        disabled: K,
        readonly: A,
        onBlur: Y
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || A || (T(Y), D("onBlur"));
    }, C = (K) => {
      var {
        disabled: A,
        readonly: Y,
        multiple: X,
        onChange: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || A || Y)) {
        var pe = X ? m.filter((Ae) => {
          var {
            selected: Ie
          } = Ae;
          return Ie.value;
        }).map(S) : S(K);
        T(e["onUpdate:modelValue"], pe), T(de, pe), D("onChange"), !X && (r.value = !1);
      }
    }, H = () => {
      var {
        disabled: K,
        readonly: A,
        multiple: Y,
        clearable: X,
        onClear: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || K || A || !X)) {
        var pe = Y ? [] : void 0;
        T(e["onUpdate:modelValue"], pe), T(de, pe), D("onClear");
      }
    }, Q = (K) => {
      var {
        disabled: A,
        onClick: Y
      } = e;
      v != null && v.disabled.value || A || (T(Y, K), D("onClick"));
    }, _ = (K) => {
      var {
        disabled: A,
        readonly: Y,
        modelValue: X,
        onClose: de
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || A || Y)) {
        var pe = X, Ae = m.find((Ze) => {
          var {
            label: Sn
          } = Ze;
          return Sn.value === K;
        }), Ie = pe.filter((Ze) => {
          var Sn;
          return Ze !== ((Sn = Ae.value.value) != null ? Sn : Ae.label.value);
        });
        T(e["onUpdate:modelValue"], Ie), T(de, Ie), D("onClose");
      }
    }, W = () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K) {
        var Y = A;
        m.forEach((X) => X.sync(Y.includes(S(X))));
      } else
        m.forEach((X) => X.sync(A === S(X)));
      P();
    }, N = () => {
      s.value = I(), u.value = Le(e.offsetY), r.value = !0;
    }, x = () => {
      r.value = !1;
    }, te = () => k(e.rules, e.modelValue), U = () => {
      T(e["onUpdate:modelValue"], e.multiple ? [] : void 0), M();
    };
    le(() => e.multiple, () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K && !Ce(A))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, W, {
      deep: !0
    }), le(() => f.value, W);
    var Z = {
      wrapWidth: F(() => s.value),
      multiple: a,
      focusColor: t,
      computeLabel: P,
      onSelect: C,
      reset: U,
      validate: te,
      resetValidation: M
    };
    return h(Z), T(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: b,
      n: yo,
      classes: b1,
      computePlaceholderState: $,
      handleFocus: V,
      handleBlur: g,
      handleClear: H,
      handleClick: Q,
      handleClose: _,
      reset: U,
      validate: te,
      resetValidation: M,
      focus: N,
      blur: x
    };
  }
});
Fd.render = C1;
const ia = Fd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var ak = ia, S1 = {
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
  n: k1,
  classes: $1
} = re("skeleton");
function T1(e, n) {
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
      [j(e.$slots, "default")],
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
          )) : ee("v-if", !0), (p(!0), O(
            Oe,
            null,
            ze(e.toNumber(e.rows), (r, a) => (p(), O(
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
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var Hd = ne({
  name: "VarSkeleton",
  props: S1,
  setup() {
    return {
      n: k1,
      classes: $1,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Hd.render = T1;
const la = Hd;
la.install = function(e) {
  e.component(la.name, la);
};
var tk = la;
function P1(e) {
  return ["always", "normal", "never"].includes(e);
}
var De;
(function(e) {
  e.First = "1", e.Second = "2";
})(De || (De = {}));
var O1 = {
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
    validator: P1
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
  rules: {
    type: Array
  },
  onChange: R(),
  onStart: R(),
  onEnd: R(),
  "onUpdate:modelValue": R()
}, {
  n: ql,
  classes: V1
} = re("slider"), M1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function B1(e, n) {
  var r = oe("var-hover-overlay"), a = oe("var-form-details"), t = Me("hover");
  return p(), O(
    "div",
    {
      class: c(e.n())
    },
    [z(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [z(
        "div",
        {
          class: c(e.n("track"))
        },
        [z(
          "div",
          {
            class: c(e.n("track-background")),
            style: G({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), z(
          "div",
          {
            class: c(e.n("track-fill")),
            style: G(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), O(
        Oe,
        null,
        ze(e.thumbList, (o) => (p(), O(
          "div",
          {
            class: c(e.n("thumb")),
            key: o.enumValue,
            style: G({
              left: o.value + "%",
              zIndex: e.thumbsProps[o.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Bn((i) => e.start(i, o.enumValue), ["stop"]),
            onTouchmove: Bn((i) => e.move(i, o.enumValue), ["stop"]),
            onTouchend: (i) => e.end(o.enumValue),
            onTouchcancel: (i) => e.end(o.enumValue)
          },
          [j(e.$slots, "button", {
            currentValue: o.text
          }, () => [we(z(
            "div",
            {
              class: c(e.n("thumb-block")),
              style: G({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), [[t, (i) => e.hover(i, o), "desktop"]]), z(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n("thumb-ripple--active")])),
              style: G({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [J(
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
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(o.enumValue), e.n("thumb-label--active")])),
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
              ae(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          M1
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
var Yd = ne({
  name: "VarSlider",
  components: {
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  directives: {
    Hover: En
  },
  props: O1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), {
      hovering: l,
      handleHovering: s
    } = hr(), {
      hovering: u,
      handleHovering: d
    } = hr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), m = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), h = B(null), y = B(0), w = B(!1), k = Ee({
      [De.First]: f(),
      [De.Second]: f()
    }), M = F(() => L(e.max) - L(e.min)), b = F(() => y.value / M.value * L(e.step)), P = F(() => {
      var {
        modelValue: A,
        range: Y
      } = e, X = [];
      return Y && Ce(A) ? X = [{
        value: I(A[0]),
        enumValue: De.First,
        text: V(A[0]),
        hovering: Ya(l),
        handleHovering: s
      }, {
        value: I(A[1]),
        enumValue: De.Second,
        text: V(A[1]),
        hovering: Ya(u),
        handleHovering: d
      }] : nn(A) && (X = [{
        value: I(A),
        enumValue: De.First,
        text: V(A),
        hovering: Ya(l),
        handleHovering: s
      }]), X;
    }), D = F(() => {
      var {
        activeColor: A,
        range: Y,
        modelValue: X
      } = e, de = Y && Ce(X) ? I(Math.min(X[0], X[1])) : 0, pe = Y && Ce(X) ? I(Math.max(X[0], X[1])) - de : I(X);
      return {
        width: pe + "%",
        left: de + "%",
        background: A
      };
    }), S = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), E = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), $ = (A) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : k[A].active, I = (A) => {
      var {
        min: Y,
        max: X
      } = e;
      return A < L(Y) ? 0 : A > L(X) ? 100 : (A - L(Y)) / M.value * 100;
    }, V = (A) => {
      if (!nn(A))
        return 0;
      var Y = A;
      Y < Number(e.min) && (Y = Number(e.min)), Y > Number(e.max) && (Y = Number(e.max));
      var X = parseInt("" + Y, 10) === Y;
      return X ? Y : L(Y.toPrecision(5));
    }, g = (A, Y) => {
      S.value || Y.handleHovering(A);
    }, C = (A, Y) => {
      var X = [], {
        step: de,
        range: pe,
        modelValue: Ae,
        onChange: Ie,
        min: Ze
      } = e, Sn = L(de), An = Math.round(A / b.value), Ge = An * Sn + L(Ze), cn = k[Y].percentValue * Sn + L(Ze);
      if (k[Y].percentValue = An, pe && Ce(Ae) && (X = Y === De.First ? [Ge, Ae[1]] : [Ae[0], Ge]), cn !== Ge) {
        var bt = pe ? X.map((wt) => V(wt)) : V(Ge);
        T(Ie, bt), T(e["onUpdate:modelValue"], bt), m();
      }
    }, H = (A) => {
      if (!e.range)
        return De.First;
      var Y = k[De.First].percentValue * b.value, X = k[De.Second].percentValue * b.value, de = Math.abs(A - Y), pe = Math.abs(A - X);
      return de <= pe ? De.First : De.Second;
    }, Q = (A, Y) => {
      y.value || (y.value = h.value.offsetWidth), S.value || (k[Y].active = !0), !(S.value || E.value) && (T(e.onStart), w.value = !0, k[Y].startPosition = A.touches[0].clientX);
    }, _ = (A, Y) => {
      if (!(S.value || E.value || !w.value)) {
        var X = A.touches[0].clientX - k[Y].startPosition + k[Y].currentLeft;
        X <= 0 ? X = 0 : X >= y.value && (X = y.value), C(X, Y);
      }
    }, W = (A) => {
      var {
        range: Y,
        modelValue: X,
        onEnd: de,
        step: pe,
        min: Ae
      } = e;
      if (S.value || (k[A].active = !1), !(S.value || E.value)) {
        var Ie = [];
        k[A].currentLeft = k[A].percentValue * b.value;
        var Ze = k[A].percentValue * L(pe) + L(Ae);
        Y && Ce(X) && (Ie = A === De.First ? [Ze, X[1]] : [X[0], Ze]), T(de, Y ? Ie : Ze), w.value = !1;
      }
    }, N = (A) => {
      if (!(S.value || E.value) && !A.target.closest("." + ql("thumb"))) {
        var Y = A.clientX - Bv(A.currentTarget), X = H(Y);
        C(Y, X), W(X);
      }
    }, x = () => {
      var A = L(e.step);
      return isNaN(A) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : A < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, te = () => {
      var {
        range: A,
        modelValue: Y
      } = e;
      return A && !Ce(Y) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !A && Ce(Y) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : A && Ce(Y) && Y.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, U = function(A, Y) {
      A === void 0 && (A = e.modelValue), Y === void 0 && (Y = L(e.step));
      var X = (de) => {
        var {
          min: pe,
          max: Ae
        } = e;
        return de < L(pe) ? 0 : de > L(Ae) ? M.value / Y : (de - L(pe)) / Y;
      };
      e.range && Ce(A) ? (k[De.First].percentValue = X(A[0]), k[De.First].currentLeft = k[De.First].percentValue * b.value, k[De.Second].percentValue = X(A[1]), k[De.Second].currentLeft = k[De.Second].percentValue * b.value) : nn(A) && (k[De.First].currentLeft = X(A) * b.value);
    }, Z = () => {
      var A = e.range ? [0, 0] : 0;
      T(e["onUpdate:modelValue"], A), i();
    }, K = {
      reset: Z,
      validate: v,
      resetValidation: i
    };
    return T(n, K), le([() => e.modelValue, () => e.step], (A) => {
      var [Y, X] = A;
      !x() || !te() || w.value || U(Y, L(X));
    }), le(y, () => U()), ln(() => {
      !x() || !te() || (y.value = h.value.offsetWidth);
    }), {
      n: ql,
      classes: V1,
      Thumbs: De,
      sliderEl: h,
      getFillStyle: D,
      isDisabled: S,
      errorMessage: a,
      thumbsProps: k,
      thumbList: P,
      hover: g,
      multiplySizeUnit: xe,
      toNumber: L,
      showLabel: $,
      start: Q,
      move: _,
      end: W,
      click: N
    };
  }
});
Yd.render = B1;
const sa = Yd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var ok = sa;
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
function I1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function E1(e) {
  return Ai.includes(e);
}
var jd = {
  type: {
    type: String,
    validator: E1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: I1
  },
  // content内容
  content: {
    type: String
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
  loadingType: Je(nr, "type"),
  loadingSize: Je(nr, "size"),
  loadingRadius: Je(nr, "radius"),
  loadingColor: ii({}, Je(nr, "color"), {
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
  onOpen: R(),
  // 打开动画结束时的回调
  onOpened: R(),
  // 关闭时的回调函数
  onClose: R(),
  // 关闭动画结束时的回调
  onClosed: R(),
  "onUpdate:show": R(),
  _update: {
    type: String
  }
}, {
  n: D1,
  classes: N1
} = re("snackbar"), A1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function z1(e, n) {
  var r = oe("var-icon"), a = oe("var-loading");
  return we((p(), O(
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
        [j(e.$slots, "default", {}, () => [be(
          ae(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.n("action"))
        },
        [e.iconName ? (p(), ge(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : ee("v-if", !0), e.type === "loading" ? (p(), ge(
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
        )) : ee("v-if", !0), j(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[pr, e.show]]);
}
var Wd = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Tn,
    VarIcon: $e
  },
  props: jd,
  setup(e) {
    var n = B(null), {
      zIndex: r
    } = gt(() => e.show, 1);
    xt(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? A1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && T(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (i) => {
      i ? (T(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), T(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), ln(() => {
      e.show && (T(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Ai,
      n: D1,
      classes: N1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Wd.render = z1;
const Gd = Wd;
var {
  n: L1
} = re("snackbar");
function R1(e, n) {
  var r = oe("var-snackbar-core");
  return p(), ge(
    Ba,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [J(
      Ne,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: fe(() => [J(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: fe(() => [j(e.$slots, "action")]),
            default: fe(() => [j(e.$slots, "default", {}, () => [be(
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
var qd = ne({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Gd
  },
  props: jd,
  setup() {
    var {
      disabled: e
    } = _t();
    return {
      n: L1,
      disabled: e
    };
  }
});
qd.render = R1;
const ua = qd;
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ft.apply(this, arguments);
}
function U1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !mt(e);
}
var Ai = ["loading", "success", "warning", "info", "error"], Xl = 0, li = !1, Xd, Ka = !1, Kd = {
  type: void 0,
  content: "",
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
}, yn = Ee([]), zi = Kd, F1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, H1 = {
  setup() {
    return () => {
      var e = yn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ka && (a.position = "top");
        var i = Ka ? "relative" : "absolute", l = ft({
          position: i
        }, X1(a.position));
        return J(Gd, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return J(kv, Ve(F1, {
        style: {
          zIndex: fn.zIndex
        },
        onAfterEnter: Y1,
        onAfterLeave: j1
      }), U1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, qn = function(e) {
  var n = G1(e), r = Ee(ft({}, zi, n));
  r.show = !0, li || (li = !0, Xd = _a(H1).unmountInstance);
  var {
    length: a
  } = yn, t = {
    id: Xl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ka)
    W1(t);
  else {
    var o = "update-" + Xl;
    q1(r, o);
  }
  return {
    clear() {
      !Ka && yn.length ? yn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Ai.forEach((e) => {
  qn[e] = (n) => (fi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, qn(n));
});
qn.install = function(e) {
  e.component(ua.name, ua);
};
qn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ka && (yn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ka = e);
};
qn.clear = function() {
  yn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
qn.setDefaultOptions = function(e) {
  zi = e;
};
qn.resetDefaultOptions = function() {
  zi = Kd;
};
qn.Component = ua;
function Y1(e) {
  var n = e.getAttribute("data-id"), r = yn.find((a) => a.id === L(n));
  r && T(r.reactiveSnackOptions.onOpened);
}
function j1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = yn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, T(r.reactiveSnackOptions.onClosed));
  var a = yn.every((t) => t.animationEnd);
  a && (T(Xd), yn = Ee([]), li = !1);
}
function W1(e) {
  yn.push(e);
}
function G1(e) {
  return e === void 0 && (e = {}), Ke(e) ? {
    content: e
  } : e;
}
function q1(e, n) {
  var [r] = yn;
  r.reactiveSnackOptions = ft({}, r.reactiveSnackOptions, e), r._update = n;
}
function X1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ua.install = function(e) {
  e.component(ua.name, ua);
};
var ik = ua;
const si = qn;
var Zd = (e) => ["mini", "small", "normal", "large"].includes(e), K1 = (e) => Zd(e) || Ce(e) || nn(e) || Ke(e), Z1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), J1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), Q1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: K1
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
    validator: Z1
  },
  align: {
    type: String,
    validator: J1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function vn(e) {
  return "calc(" + e + " / 2)";
}
function _1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== i ? l = vn(e) + " " + n + " " + vn(e) + " 0" : l = vn(e) + " 0" : t === "space-around" ? l = vn(e) + " " + vn(n) : t === "space-between" && (o === 0 ? l = vn(e) + " " + vn(n) + " " + vn(e) + " 0" : o === i ? l = vn(e) + " 0 " + vn(e) + " " + vn(n) : l = vn(e) + " " + vn(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: bo,
  classes: x1
} = re("space");
const da = ne({
  name: "VarSpace",
  props: Q1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ce(t) ? t.map(me) : [me(t), me(t)];
    return () => {
      var t, {
        inline: o,
        justify: i,
        align: l,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = T(r.default)) != null ? t : [], f = Zd(d), [m, h] = a(d, f);
      v = ms(v);
      var y = v.length - 1, w = v.map((k, M) => {
        var b = _1(m, h, {
          direction: u,
          justify: i,
          index: M,
          lastIndex: y
        });
        return J("div", {
          style: {
            margin: b
          }
        }, [k]);
      });
      return J("div", {
        class: x1(bo(), bo("$--box"), [o, bo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: zt(i),
          alignItems: zt(l),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [w]);
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
var lk = da, ew = {
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
}, Jd = Symbol("STEPS_BIND_STEP_KEY");
function nw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(Jd);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function rw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Jd);
  if (!r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: aw,
  classes: tw
} = re("step"), ow = {
  key: 3
};
function iw(e, n) {
  var r = oe("var-icon");
  return p(), O(
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
          [e.isActive ? (p(), ge(
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
          )) : e.isCurrent && e.currentIcon ? (p(), ge(
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
          )) : e.inactiveIcon ? (p(), ge(
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
          )) : (p(), O(
            "span",
            ow,
            ae(e.index + 1),
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
          [j(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? ee("v-if", !0) : (p(), O(
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
var Qd = ne({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: ew,
  setup() {
    var e = B(null), n = B(""), r = B(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = rw(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => i.value === a.value), m = F(() => a.value !== -1 && i.value > a.value), h = {
      index: a
    }, y = () => v(a.value), w = (k) => {
      d.value === "horizontal" && (e.value = k);
    };
    return o(h), le(l, (k) => {
      if (r.value = k - 1 === a.value, e.value) {
        var M = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + M + "px";
      }
    }), {
      n: aw,
      classes: tw,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: y,
      getRef: w
    };
  }
});
Qd.render = iw;
const va = Qd;
va.install = function(e) {
  e.component(va.name, va);
};
var sk = va;
function lw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var sw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: lw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: R()
}, {
  n: uw
} = re("steps");
function dw(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.n()),
      style: G({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var _d = ne({
  name: "VarSteps",
  props: sw,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: o,
      bindStep: i
    } = nw(), l = (u) => {
      T(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return i(s), {
      n: uw
    };
  }
});
_d.render = dw;
const fa = _d;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var uk = fa, vw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: fw
} = re("style-provider"), cw = ne({
  name: "VarStyleProvider",
  props: vw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => ns(e.tag, {
      class: fw(),
      style: vs(e.styleVars)
    }, T(r.default));
  }
});
const ca = cw;
var wo = [];
function ct(e) {
  wo.forEach((r) => document.documentElement.style.removeProperty(r)), wo.length = 0;
  var n = vs(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), wo.push(a);
  });
}
ct.Component = ca;
ca.install = function(e) {
  e.component(ca.name, ca);
};
ct.install = function(e) {
  e.component(ca.name, ca);
};
var dk = ca, mw = {
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
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: pw,
  classes: hw
} = re("switch");
function gw(e, n) {
  var r = oe("var-loading"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return we((p(), O(
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
      ), we((p(), O(
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
          [e.loading ? (p(), ge(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : ee("v-if", !0)],
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
  )), [[i, e.hover, "desktop"]]);
}
var xd = ne({
  name: "VarSwitch",
  components: {
    VarLoading: Tn,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Re,
    Hover: En
  },
  props: mw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), {
      hovering: l,
      handleHovering: s
    } = hr(), u = () => o(e.rules, e.modelValue), d = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = F(() => {
      var {
        size: k,
        modelValue: M,
        color: b,
        closeColor: P,
        loadingColor: D,
        activeValue: S
      } = e;
      return {
        handle: {
          width: xe(k),
          height: xe(k),
          backgroundColor: M === S ? b : P,
          color: D
        },
        ripple: {
          left: M === S ? xe(k, 0.5) : "-" + xe(k, 0.5),
          color: M === S ? b : P || "#999",
          width: xe(k, 2),
          height: xe(k, 2)
        },
        track: {
          height: xe(k, 0.72),
          width: xe(k, 1.9),
          borderRadius: xe(k, 2 / 3),
          filter: M === S || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: M === S ? b : P
        },
        switch: {
          height: xe(k, 1.2),
          width: xe(k, 2)
        }
      };
    }), f = F(() => {
      var {
        size: k = "5.333vw"
      } = e;
      return xe(k, 0.4);
    }), m = (k) => {
      var {
        onClick: M,
        onChange: b,
        disabled: P,
        loading: D,
        readonly: S,
        modelValue: E,
        activeValue: $,
        inactiveValue: I,
        "onUpdate:modelValue": V
      } = e;
      if (T(M, k), !(P || D || S || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var g = E === $ ? I : $;
        T(b, g), T(V, g), d();
      }
    }, h = (k) => {
      e.disabled || r != null && r.disabled.value || s(k);
    }, y = () => {
      T(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, w = {
      reset: y,
      validate: u,
      resetValidation: i
    };
    return T(n, w), {
      n: pw,
      classes: hw,
      switchActive: m,
      hovering: l,
      hover: h,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
xd.render = gw;
const ma = xd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var vk = ma, yw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: R()
}, ev = Symbol("TABS_BIND_TAB_KEY");
function bw() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(ev);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function ww() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(ev);
  if (!n)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: Mt,
  classes: Cw
} = re("tab");
function Sw(e, n) {
  var r = Me("ripple");
  return we((p(), O(
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
    [j(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var nv = ne({
  name: "VarTab",
  directives: {
    Ripple: Re
  },
  props: yw,
  setup(e) {
    var n = B(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = ww(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: h
    } = i, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(y);
    var w = () => {
      var {
        disabled: b,
        name: P
      } = e;
      return b ? f.value : u.value === P || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, k = () => {
      var {
        disabled: b,
        name: P
      } = e;
      return b ? Mt("$-tab--disabled") : u.value === P || u.value === (o == null ? void 0 : o.value) ? Mt("$-tab--active") : Mt("$-tab--inactive");
    }, M = (b) => {
      var {
        disabled: P,
        name: D,
        onClick: S
      } = e;
      P || (T(S, D ?? o.value, b), s(y));
    };
    return le(() => e.name, h), le(() => e.disabled, h), {
      n: Mt,
      classes: Cw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: k,
      handleClick: M
    };
  }
});
nv.render = Sw;
const pa = nv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var fk = pa, rv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function kw() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(rv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function $w() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(rv);
  if (!n)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Tw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Pw,
  classes: Ow
} = re("tab-item");
function Vw(e, n) {
  var r = oe("var-swipe-item");
  return p(), ge(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: fe(() => [e.initSlot ? j(e.$slots, "default", {
        key: 0
      }) : ee("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var av = ne({
  name: "VarTabItem",
  components: {
    VarSwipeItem: jn
  },
  props: Tw,
  setup(e) {
    var n = B(!1), r = B(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: o
    } = $w(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: Pw,
      classes: Ow,
      current: n,
      initSlot: r
    };
  }
});
av.render = Vw;
const ha = av;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var ck = ha, Mw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Bw,
  classes: Iw
} = re("table");
function Ew(e, n) {
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
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
        [j(e.$slots, "default")],
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
      [j(e.$slots, "footer")],
      2
      /* CLASS */
    )) : ee("v-if", !0)],
    2
    /* CLASS */
  );
}
var tv = ne({
  name: "VarTable",
  props: Mw,
  setup() {
    return {
      toSizeUnit: me,
      n: Bw,
      classes: Iw
    };
  }
});
tv.render = Ew;
const ga = tv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var mk = ga;
function Kl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Dw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Kl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Kl
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
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Je(Nt, "cssMode"),
  stickyZIndex: Je(Nt, "zIndex"),
  offsetTop: Je(Nt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: R(),
  onChange: R(),
  "onUpdate:active": R()
};
function Zl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Zl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Zl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Nw,
  classes: Aw
} = re("tabs");
function zw(e, n) {
  return p(), ge(
    Qa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: fe(() => [z(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [z(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [j(e.$slots, "default"), z(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: G({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
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
var ov = ne({
  name: "VarTabs",
  components: {
    VarSticky: Wn
  },
  inheritAttrs: !1,
  props: Dw,
  setup(e) {
    var n = B("0px"), r = B("0px"), a = B("0px"), t = B("0px"), o = B(!1), i = B(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = B(null), {
      tabList: m,
      bindTabList: h,
      length: y
    } = bw(), w = (V) => {
      var g, C = (g = V.name.value) != null ? g : V.index.value, {
        active: H,
        onChange: Q,
        onClick: _
      } = e;
      T(e["onUpdate:active"], C), T(_, C), C !== H && T(Q, C);
    }, k = () => m.find((V) => {
      var {
        name: g
      } = V;
      return e.active === g.value;
    }), M = (V) => m.find((g) => {
      var {
        index: C
      } = g;
      return (V ?? e.active) === C.value;
    }), b = () => {
      if (y.value !== 0) {
        var {
          active: V
        } = e;
        if (nn(V)) {
          var g = V > y.value - 1 ? y.value - 1 : 0;
          return T(e["onUpdate:active"], g), M(g);
        }
      }
    }, P = () => {
      o.value = m.length >= 5;
    }, D = (V) => {
      var {
        element: g
      } = V, C = g.value;
      C && (e.layoutDirection === "horizontal" ? (n.value = C.offsetWidth + "px", a.value = C.offsetLeft + "px") : (r.value = C.offsetHeight + "px", t.value = C.offsetTop + "px"));
    }, S = (V) => {
      var {
        element: g
      } = V;
      if (o.value) {
        var C = i.value, H = g.value;
        if (e.layoutDirection === "horizontal") {
          var Q = H.offsetLeft + H.offsetWidth / 2 - C.offsetWidth / 2;
          lt(C, {
            left: Q,
            animation: So
          });
        } else {
          var _ = H.offsetTop + H.offsetHeight / 2 - C.offsetHeight / 2;
          lt(C, {
            top: _,
            animation: So
          });
        }
      }
    }, E = () => {
      var V = k() || M() || b();
      !V || V.disabled.value || (P(), D(V), S(V));
    }, $ = /* @__PURE__ */ function() {
      var V = Jl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), I = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: E,
      onTabClick: w
    };
    return h(I), le(() => y.value, /* @__PURE__ */ Jl(function* () {
      yield In(), E();
    })), le(() => e.active, E), ka(window, "resize", E), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: Ne,
      toSizeUnit: me,
      n: Nw,
      classes: Aw,
      resize: E,
      resizeSticky: $
    };
  }
});
ov.render = zw;
const ya = ov;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var pk = ya, Lw = {
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
  "onUpdate:active": R()
};
function Ql(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Rw(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ql(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ql(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Uw
} = re("tabs-items");
function Fw(e, n) {
  var r = oe("var-swipe");
  return p(), ge(
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
      default: fe(() => [j(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var iv = ne({
  name: "VarTabsItems",
  components: {
    VarSwipe: Yn
  },
  props: Lw,
  setup(e) {
    var n = B(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = kw(), o = (f) => r.find((m) => {
      var {
        name: h
      } = m;
      return f === h.value;
    }), i = (f) => r.find((m) => {
      var {
        index: h
      } = m;
      return f === h.value;
    }), l = (f) => o(f) || i(f), s = (f) => {
      var m, h = l(f);
      h && (r.forEach((y) => {
        var {
          setCurrent: w
        } = y;
        return w(!1);
      }), h.setCurrent(!0), (m = n.value) == null || m.to(h.index.value));
    }, u = (f) => {
      var m, h = r.find((w) => {
        var {
          index: k
        } = w;
        return k.value === f;
      }), y = (m = h.name.value) != null ? m : h.index.value;
      T(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ Rw(function* () {
      yield In(), s(e.active);
    })), {
      swipe: n,
      n: Uw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
iv.render = Fw;
const ba = iv;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var hk = ba;
const Hw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Yw = {
  "--badge-default-color": "#555"
}, jw = {
  "--button-default-color": "#303030"
}, Ww = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Gw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, qw = {
  "--checkbox-unchecked-color": "#fff"
}, Xw = {
  "--chip-default-color": "#555"
}, Kw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Zw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Jw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, Qw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, _w = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, xw = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, eC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, nC = {
  "--popup-content-background-color": "#1e1e1e"
}, rC = {
  "--pull-refresh-background": "#303030"
}, aC = {
  "--radio-unchecked-color": "#fff"
}, tC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, oC = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, iC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, lC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, sC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, uC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, dC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, vC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, fC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, cC = {
  "--tabs-background": "#1e1e1e"
}, mC = {
  "--app-bar-color": "#272727"
}, pC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, hC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, gC = {
  "--menu-background-color": "#272727"
}, yC = {
  "--breadcrumb-inactive-color": "#aaa"
}, bC = {
  "--paper-background": "#303030"
}, wC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
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
const CC = ui({
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
}, jw, Gw, Ww, vC, Zw, iC, cC, uC, nC, Jw, Hw, Xw, Yw, fC, Kw, rC, sC, lC, xw, dC, _w, oC, aC, qw, Qw, eC, mC, pC, hC, gC, tC, yC, bC, wC);
var SC = {
  dark: CC
}, gk = null;
const di = SC;
var pn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], _l = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function kC(e) {
  return ["ampm", "24hr"].includes(e);
}
var $C = {
  modelValue: {
    type: String
  },
  elevation: {
    type: Boolean,
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
    validator: kC
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
  "onUpdate:modelValue": R(),
  onChange: R()
}, lv = (e, n) => e === "24hr" || n === "am", Li = (e, n, r) => {
  var a = pn.findIndex((o) => L(o) === L(r)), t = lv(e, n) ? r : en[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, an = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, sv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: i,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Li(t, o, i), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: h,
      minute: y
    } = an(l);
    f = h === v && a > y;
  }
  if (!l && s) {
    var {
      hour: w,
      minute: k
    } = an(s);
    f = w === v && a < k;
  }
  if (l && s) {
    var {
      hour: M,
      minute: b
    } = an(l), {
      hour: P,
      minute: D
    } = an(s);
    f = P === v && a < D || M === v && a > b;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, uv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: i,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Li(t, o, i), m = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: w,
      second: k
    } = an(s);
    m = y === f && w < l || w === l && a > k;
  }
  if (!s && u) {
    var {
      hour: M,
      minute: b,
      second: P
    } = an(u);
    m = M === f && b > l || b === l && a > P;
  }
  if (s && u) {
    var {
      hour: D,
      minute: S,
      second: E
    } = an(s), {
      hour: $,
      minute: I,
      second: V
    } = an(u);
    m = D === f && S < l || $ === f && I > l || D === f && S === l && a > E || $ === f && I === l && a < V;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || h;
}, {
  n: TC,
  classes: PC
} = re("time-picker");
function OC(e, n) {
  return p(), O(
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
    ), (p(!0), O(
      Oe,
      null,
      ze(e.timeScales, (r, a) => (p(), O(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: G(e.getStyle(a, r, !1))
        },
        ae(r),
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
        Oe,
        null,
        ze(e.hours24, (r, a) => (p(), O(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: G(e.getStyle(a, r, !0))
          },
          ae(r),
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
var dv = ne({
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
    } = n, a = B(null), t = B([]), o = B([]), i = F(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = F(() => {
      if (e.rad !== void 0) {
        var w = e.rad / 30;
        return w >= 0 ? w : w + 12;
      }
    }), s = F(() => e.type === "hour" ? pn : _l), u = (w, k) => {
      var M;
      w = (M = w) != null ? M : e.type === "minute" ? e.time.minute : e.time.second;
      var b = e.type === "minute" ? sv : uv, P = {
        time: L(w),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return k && e.type === "minute" && Reflect.deleteProperty(P, "minute"), b(P);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var w = e.isInner ? en[l.value] : s.value[l.value];
      return s.value === _l ? u() ? "#bdbdbd" : e.color : f(w) ? "#bdbdbd" : e.color;
    }, v = (w, k) => k ? l.value === w && e.isInner : l.value === w && (!e.isInner || e.type !== "hour"), f = (w) => {
      if (e.type === "hour") {
        if (lv(e.format, e.ampm))
          return t.value.includes(w);
        var k = pn.findIndex((M) => M === w);
        return o.value.includes(k);
      }
      return u(w, !0);
    }, m = (w, k, M) => {
      var b = 2 * Math.PI / 12 * w - Math.PI / 2, P = 50 * (1 + Math.cos(b)), D = 50 * (1 + Math.sin(b)), S = () => v(w, M) ? f(k) ? {
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
        color: $
      } = S();
      return {
        left: P + "%",
        top: D + "%",
        backgroundColor: E,
        color: $
      };
    }, h = () => {
      var {
        width: w,
        height: k
      } = a.value.getBoundingClientRect();
      return {
        width: w,
        height: k
      };
    }, y = () => {
      if (l.value !== void 0) {
        var w = e.ampm === "am" ? pn : en;
        return Sa(w[l.value], 2, "0");
      }
    };
    return le([l, () => e.isInner], (w, k) => {
      var [M, b] = w, [P, D] = k, S = M === P && b === D;
      if (!(S || e.type !== "hour" || l.value === void 0)) {
        var E = b ? en[l.value] : y(), $ = e.useSeconds ? ":" + e.time.second : "", I = E + ":" + e.time.minute + $;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), le(() => e.rad, (w, k) => {
      if (!(e.type === "hour" || w === void 0 || k === void 0)) {
        var M = w / 6 >= 0 ? w / 6 : w / 6 + 60, b = k / 6 >= 0 ? k / 6 : k / 6 + 60;
        if (M !== b) {
          var P, {
            hourStr: D
          } = Li(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var S = ie().minute(M).format("mm"), E = e.useSeconds ? ":" + e.time.second : "";
            P = D + ":" + S + E;
          }
          if (e.type === "second") {
            var $ = ie().second(M).format("ss"), I = e.useSeconds ? ":" + $ : "";
            P = D + ":" + e.time.minute + I;
          }
          r("update", P);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (w) => {
      var [k, M, b] = w;
      if (t.value = [], k && !M) {
        var {
          hour: P
        } = an(k), D = pn.filter((N) => L(N) > P), S = en.filter((N) => L(N) > P);
        t.value = [...D, ...S];
      }
      if (!k && M) {
        var {
          hour: E
        } = an(M), $ = pn.filter((N) => L(N) < E), I = en.filter((N) => L(N) < E);
        t.value = [...$, ...I];
      }
      if (k && M) {
        var {
          hour: V
        } = an(k), {
          hour: g
        } = an(M), C = pn.filter((N) => L(N) < g || L(N) > V), H = en.filter((N) => L(N) < g || L(N) > V);
        t.value = [...C, ...H];
      }
      if (b != null && b.hours) {
        var {
          hours: Q
        } = b, _ = pn.filter((N) => !Q(L(N))), W = en.filter((N) => !Q(L(N)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ..._, ...W])];
      }
      o.value = t.value.map((N) => en.findIndex((x) => N === x)).filter((N) => N >= 0);
    }, {
      immediate: !0
    }), {
      n: TC,
      classes: PC,
      hours24: en,
      timeScales: s,
      inner: a,
      handStyle: i,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: h,
      getStyle: m,
      activeItemIndex: l
    };
  }
});
dv.render = OC;
const VC = dv;
var {
  n: MC,
  classes: BC
} = re("time-picker"), IC = (e) => (Ia(""), e = e(), Ea(), e), EC = /* @__PURE__ */ IC(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), DC = {
  key: 0
};
function NC(e, n) {
  var r = oe("clock");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
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
          ae(e.time.hour),
          3
          /* TEXT, CLASS */
        ), EC, z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), O("span", DC, ":")) : ee("v-if", !0), e.useSeconds ? (p(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ae(e.time.second),
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
      )) : ee("v-if", !0)],
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
        [J(
          Ne,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: fe(() => [(p(), ge(
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
var vv = ne({
  name: "VarTimePicker",
  components: {
    Clock: VC
  },
  props: $C,
  setup(e) {
    var n = B(null), r = B(null), a = B(null), t = B(!1), o = B(!1), i = B(!1), l = B(!1), s = B(!1), u = B(void 0), d = B(0), v = B(0), f = B("hour"), m = B("am"), h = B(!1), y = B(!1), w = B({
      hour: "00",
      minute: "00",
      second: "00"
    }), k = Ee({
      x: 0,
      y: 0
    }), M = Ee({
      x: [],
      y: []
    }), b = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), P = (U) => {
      T(e["onUpdate:modelValue"], U), T(e.onChange, U);
    }, D = (U) => U * 57.29577951308232, S = (U) => {
      l.value = !1, y.value = !1, f.value = U;
    }, E = (U) => {
      var {
        disableHour: Z
      } = a.value, K = pn.findIndex((X) => L(X) === L(w.value.hour)), A = U === "am" ? pn : en, Y = [...A.slice(K), ...A.slice(0, K)];
      return Y.find((X, de) => (o.value = de !== 0, !Z.includes(X)));
    }, $ = (U) => {
      if (!e.readonly) {
        m.value = U;
        var Z = E(U);
        if (Z) {
          var K = e.useSeconds ? ":" + w.value.second : "", A = Sa(Z, 2, "0") + ":" + w.value.minute + K;
          P(A);
        }
      }
    }, I = (U, Z) => {
      var K = U >= M.x[0] && U <= M.x[1], A = Z >= M.y[0] && Z <= M.y[1];
      return K && A;
    }, V = (U) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: K,
        minute: A,
        second: Y
      } = an(U);
      return {
        hour: ie().hour(K).format(Z),
        minute: ie().minute(A).format("mm"),
        second: ie().second(Y).format("ss")
      };
    }, g = (U) => {
      var Z = U / 30;
      return Z >= 0 ? Z : Z + 12;
    }, C = () => {
      var {
        width: U,
        height: Z
      } = a.value.getSize(), K = k.x - U / 2 - 8, A = k.x + U / 2 + 8, Y = k.y - Z / 2 - 8, X = k.y + Z / 2 + 8;
      return {
        rangeXMin: K,
        rangeXMax: A,
        rangeYMin: Y,
        rangeYMax: X
      };
    }, H = (U, Z, K) => {
      var {
        disableHour: A
      } = a.value;
      i.value = I(U, Z);
      var Y = Math.round(K / 30) * 30 + 90, X = g(Y), de = t.value ? pn[X] : en[X];
      if (A.includes(de) || (t.value = e.format === "24hr" ? I(U, Z) : !1), t.value === i.value) {
        var pe = t.value || m.value === "pm" ? en[X] : pn[X];
        h.value = A.includes(pe), !h.value && (u.value = Y, l.value = !0);
      }
    }, Q = (U) => {
      var {
        disableHour: Z
      } = a.value, K = Math.round(U / 6) * 6 + 90, A = K / 6 >= 0 ? K / 6 : K / 6 + 60, Y = {
        time: A,
        format: e.format,
        ampm: m.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      y.value = sv(Y), !y.value && (d.value = K, s.value = !0);
    }, _ = (U) => {
      var {
        disableHour: Z
      } = a.value, K = Math.round(U / 6) * 6 + 90, A = K / 6 >= 0 ? K / 6 : K / 6 + 60, Y = {
        time: A,
        format: e.format,
        ampm: m.value,
        hour: w.value.hour,
        minute: L(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      uv(Y) || (v.value = K);
    }, W = () => {
      var {
        left: U,
        top: Z,
        width: K,
        height: A
      } = n.value.getBoundingClientRect();
      if (k.x = U + K / 2, k.y = Z + A / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Y,
          rangeXMax: X,
          rangeYMin: de,
          rangeYMax: pe
        } = C();
        M.x = [Y, X], M.y = [de, pe];
      }
    }, N = (U) => {
      if (U.preventDefault(), !e.readonly) {
        W();
        var {
          clientX: Z,
          clientY: K
        } = U.touches[0], A = Z - k.x, Y = K - k.y, X = Math.round(D(Math.atan2(Y, A)));
        f.value === "hour" ? H(Z, K, X) : f.value === "minute" ? Q(X) : _(X);
      }
    }, x = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, te = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (U) => {
      if (U) {
        var {
          hour: Z,
          minute: K,
          second: A
        } = an(U), Y = ie().hour(Z).format("hh"), X = ie().hour(Z).format("HH"), de = ie().minute(K).format("mm"), pe = ie().second(A).format("ss");
        u.value = (Y === "12" ? 0 : L(Y)) * 30, d.value = L(de) * 6, v.value = L(pe) * 6, w.value = V(U), e.format !== "24hr" && (m.value = Sa("" + Z, 2, "0") === X && en.includes(X) ? "pm" : "am"), t.value = e.format === "24hr" && en.includes(X);
      }
    }, {
      immediate: !0
    }), {
      n: MC,
      classes: BC,
      getRad: b,
      time: w,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: N,
      checkPanel: S,
      checkAmpm: $,
      end: x,
      update: P,
      changePreventUpdate: te
    };
  }
});
vv.render = NC;
const wa = vv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var yk = wa, AC = {
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
  onBeforeRead: R(),
  onAfterRead: R(),
  onBeforeRemove: R(),
  onRemove: R(),
  onOversize: R(),
  "onUpdate:modelValue": R()
};
function xl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function es(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        xl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        xl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: zC,
  classes: LC
} = re("uploader"), RC = 0, UC = ["onClick"], FC = ["onClick"], HC = ["src", "alt"], YC = ["multiple", "accept", "capture", "disabled"], jC = ["src"];
function WC(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = oe("var-popup"), i = Me("ripple"), l = Me("hover");
  return p(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(p(!0), O(
        Oe,
        null,
        ze(e.files, (s) => we((p(), O(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [s.state === "loading", e.n("--loading")])),
            key: s.id,
            onClick: (u) => e.preview(s)
          },
          [z(
            "div",
            {
              class: c(e.n("file-name"))
            },
            ae(s.name || s.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), O(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Bn((u) => e.handleRemove(s), ["stop"])
            },
            [J(
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
            FC
          )) : ee("v-if", !0), s.cover ? (p(), O(
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
            HC
          )) : ee("v-if", !0), z(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [s.state === "success", e.n("--success")], [s.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          UC
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? we((p(), O(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
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
          YC
        ), j(e.$slots, "default", {}, () => [J(
          r,
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
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [l, e.handleHovering, "desktop"]]) : ee("v-if", !0)],
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
        "onUpdate:show": n[2] || (n[2] = (s) => e.showPreview = s),
        onClosed: n[3] || (n[3] = (s) => e.currentPreview = null)
      },
      {
        default: fe(() => {
          var s, u;
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (p(), O(
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
            jC
          )) : ee("v-if", !0)];
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
var fv = ne({
  name: "VarUploader",
  directives: {
    Ripple: Re,
    Hover: En
  },
  components: {
    VarIcon: $e,
    VarPopup: hn,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  props: AC,
  setup(e) {
    var n = B(null), r = B(!1), a = B(null), t = F(() => {
      var {
        maxlength: N,
        modelValue: {
          length: x
        }
      } = e;
      return nn(N) ? x + " / " + N : "";
    }), {
      form: o,
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), {
      hovering: v,
      handleHovering: f
    } = hr(), m = F(() => {
      var {
        modelValue: N,
        hideList: x
      } = e;
      return x ? [] : N;
    }), h = (N) => {
      var {
        disabled: x,
        readonly: te,
        previewed: U
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || x || te || !U)) {
        var {
          url: Z
        } = N;
        if (Ke(Z) && Yi(Z)) {
          Mn(Z);
          return;
        }
        Ke(Z) && ji(Z) && (a.value = N, r.value = !0);
      }
    }, y = (N) => ({
      id: RC++,
      url: "",
      cover: "",
      name: N.name,
      file: N
    }), w = (N) => {
      var x = N.target, {
        files: te
      } = x;
      return Array.from(te);
    }, k = (N) => new Promise((x) => {
      var te = new FileReader();
      te.onload = () => {
        var U = te.result;
        N.file.type.startsWith("image") && (N.cover = U), N.url = U, x(N);
      }, te.readAsDataURL(N.file);
    }), M = (N) => N.map(k), b = (N) => {
      var {
        onBeforeRead: x
      } = e;
      return N.map((te) => new Promise((U) => {
        x || U({
          valid: !0,
          varFile: te
        });
        var Z = T(x, Ee(te));
        Z = Ce(Z) ? Z : [Z], Promise.all(Z).then((K) => {
          U({
            valid: !K.some((A) => !A),
            varFile: te
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var N = es(function* (x) {
        var {
          maxsize: te,
          maxlength: U,
          modelValue: Z,
          onOversize: K,
          onAfterRead: A,
          readonly: Y,
          disabled: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || X || Y)) {
          var de = (Ge) => Ge.filter((cn) => cn.file.size > L(te) ? (T(K, Ee(cn)), !1) : !0), pe = (Ge) => {
            var cn = Math.min(Ge.length, L(U) - Z.length);
            return Ge.slice(0, cn);
          }, Ae = w(x), Ie = Ae.map(y);
          Ie = te != null ? de(Ie) : Ie, Ie = U != null ? pe(Ie) : Ie;
          var Ze = yield Promise.all(M(Ie)), Sn = yield Promise.all(b(Ze)), An = Sn.filter((Ge) => {
            var {
              valid: cn
            } = Ge;
            return cn;
          }).map((Ge) => {
            var {
              varFile: cn
            } = Ge;
            return cn;
          });
          T(e["onUpdate:modelValue"], [...Z, ...An]), x.target.value = "", An.forEach((Ge) => T(A, Ee(Ge)));
        }
      });
      return function(te) {
        return N.apply(this, arguments);
      };
    }(), D = /* @__PURE__ */ function() {
      var N = es(function* (x) {
        var {
          disabled: te,
          readonly: U,
          modelValue: Z,
          onBeforeRemove: K,
          onRemove: A
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || te || U)) {
          if (K) {
            var Y = T(K, Ee(x));
            if (Y = Ce(Y) ? Y : [Y], (yield Promise.all(Y)).some((de) => !de))
              return;
          }
          var X = Z.filter((de) => de !== x);
          T(A, Ee(x)), C("onRemove"), T(e["onUpdate:modelValue"], X);
        }
      });
      return function(te) {
        return N.apply(this, arguments);
      };
    }(), S = () => e.modelValue.filter((N) => N.state === "success"), E = () => e.modelValue.filter((N) => N.state === "error"), $ = () => e.modelValue.filter((N) => N.state === "loading"), I = () => {
      n.value.click();
    }, V = () => {
      a.value = null, r.value = !1, Mn.close();
    }, g = {
      getSuccess: S,
      getError: E,
      getLoading: $
    }, C = (N) => {
      Be(() => {
        var {
          validateTrigger: x,
          rules: te,
          modelValue: U
        } = e;
        s(x, N, te, U, g);
      });
    }, H = !1, Q = () => u(e.rules, e.modelValue, g), _ = () => {
      H = !0, T(e["onUpdate:modelValue"], []), d();
    }, W = {
      validate: Q,
      resetValidation: d,
      reset: _
    };
    return T(i, W), le(() => e.modelValue, () => {
      !H && C("onChange"), H = !1;
    }, {
      deep: !0
    }), {
      n: zC,
      classes: LC,
      input: n,
      files: m,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      hovering: v,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      handleHovering: f,
      isHTMLSupportVideo: ji,
      isHTMLSupportImage: Yi,
      preview: h,
      handleChange: P,
      handleRemove: D,
      getSuccess: S,
      getError: E,
      getLoading: $,
      validate: Q,
      resetValidation: d,
      reset: _,
      chooseFile: I,
      closePreview: V
    };
  }
});
fv.render = WC;
const Ca = fv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var bk = Ca;
const GC = "2.9.2";
function qC(e) {
  $a.install && e.use($a), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), or.install && e.use(or), Or.install && e.use(Or), Vr.install && e.use(Vr), Mr.install && e.use(Mr), Br.install && e.use(Br), Xe.install && e.use(Xe), Ir.install && e.use(Ir), Er.install && e.use(Er), ir.install && e.use(ir), lr.install && e.use(lr), Dr.install && e.use(Dr), sr.install && e.use(sr), Nr.install && e.use(Nr), Ar.install && e.use(Ar), zr.install && e.use(zr), fn.install && e.use(fn), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Fr.install && e.use(Fr), Ta.install && e.use(Ta), Hr.install && e.use(Hr), Yr.install && e.use(Yr), jr.install && e.use(jr), Hn.install && e.use(Hn), We.install && e.use(We), En.install && e.use(En), tn.install && e.use(tn), $e.install && e.use($e), Wr.install && e.use(Wr), Mn.install && e.use(Mn), Gr.install && e.use(Gr), qr.install && e.use(qr), cr.install && e.use(cr), st.install && e.use(st), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Tn.install && e.use(Tn), ti.install && e.use(ti), Mo.install && e.use(Mo), Gn.install && e.use(Gn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), Va.install && e.use(Va), hn.install && e.use(hn), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), Re.install && e.use(Re), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), si.install && e.use(si), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), Wn.install && e.use(Wn), ct.install && e.use(ct), Yn.install && e.use(Yn), jn.install && e.use(jn), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), di.install && e.use(di), wa.install && e.use(wa), vr.install && e.use(vr), Ca.install && e.use(Ca);
}
const wk = {
  version: GC,
  install: qC,
  ActionSheet: $a,
  AppBar: kr,
  Avatar: $r,
  AvatarGroup: Tr,
  BackTop: Pr,
  Badge: or,
  BottomNavigation: Or,
  BottomNavigationItem: Vr,
  Breadcrumb: Mr,
  Breadcrumbs: Br,
  Button: Xe,
  ButtonGroup: Ir,
  Card: Er,
  Cell: ir,
  Checkbox: lr,
  CheckboxGroup: Dr,
  Chip: sr,
  Col: Nr,
  Collapse: Ar,
  CollapseItem: zr,
  Context: fn,
  Countdown: Lr,
  Counter: Rr,
  DatePicker: Fr,
  Dialog: Ta,
  Divider: Hr,
  Ellipsis: Yr,
  Fab: jr,
  Form: Hn,
  FormDetails: We,
  Hover: En,
  HoverOverlay: tn,
  Icon: $e,
  Image: Wr,
  ImagePreview: Mn,
  IndexAnchor: Gr,
  IndexBar: qr,
  Input: cr,
  Lazy: st,
  Link: Xr,
  List: Kr,
  Loading: Tn,
  LoadingBar: ti,
  Locale: Mo,
  Menu: Gn,
  Option: Zr,
  Overlay: Jr,
  Pagination: Qr,
  Paper: _r,
  Picker: Va,
  Popup: hn,
  Progress: xr,
  PullRefresh: ea,
  Radio: na,
  RadioGroup: ra,
  Rate: aa,
  Result: ta,
  Ripple: Re,
  Row: oa,
  Select: ia,
  Skeleton: la,
  Slider: sa,
  Snackbar: si,
  Space: da,
  Step: va,
  Steps: fa,
  Sticky: Wn,
  StyleProvider: ct,
  Swipe: Yn,
  SwipeItem: jn,
  Switch: ma,
  Tab: pa,
  TabItem: ha,
  Table: ga,
  Tabs: ya,
  TabsItems: ba,
  Themes: di,
  TimePicker: wa,
  Tooltip: vr,
  Uploader: Ca
};
export {
  $a as ActionSheet,
  kr as AppBar,
  $r as Avatar,
  Tr as AvatarGroup,
  Pr as BackTop,
  or as Badge,
  Or as BottomNavigation,
  Vr as BottomNavigationItem,
  Mr as Breadcrumb,
  Br as Breadcrumbs,
  Xe as Button,
  Ir as ButtonGroup,
  Er as Card,
  ir as Cell,
  lr as Checkbox,
  Dr as CheckboxGroup,
  sr as Chip,
  Nr as Col,
  Ar as Collapse,
  zr as CollapseItem,
  fn as Context,
  Lr as Countdown,
  Rr as Counter,
  Fr as DatePicker,
  Ta as Dialog,
  Hr as Divider,
  Yr as Ellipsis,
  jr as Fab,
  Hn as Form,
  We as FormDetails,
  En as Hover,
  tn as HoverOverlay,
  $e as Icon,
  Wr as Image,
  Mn as ImagePreview,
  Gr as IndexAnchor,
  qr as IndexBar,
  cr as Input,
  st as Lazy,
  Xr as Link,
  Kr as List,
  Tn as Loading,
  ti as LoadingBar,
  Mo as Locale,
  Gn as Menu,
  Zr as Option,
  Jr as Overlay,
  Eo as PIXEL,
  Qr as Pagination,
  _r as Paper,
  Va as Picker,
  hn as Popup,
  xr as Progress,
  ea as PullRefresh,
  na as Radio,
  ra as RadioGroup,
  aa as Rate,
  ta as Result,
  Re as Ripple,
  oa as Row,
  Ai as SNACKBAR_TYPE,
  ia as Select,
  la as Skeleton,
  sa as Slider,
  si as Snackbar,
  da as Space,
  va as Step,
  fa as Steps,
  Wn as Sticky,
  ct as StyleProvider,
  Yn as Swipe,
  jn as SwipeItem,
  ma as Switch,
  pa as Tab,
  ha as TabItem,
  ga as Table,
  ya as Tabs,
  ba as TabsItems,
  di as Themes,
  wa as TimePicker,
  vr as Tooltip,
  Ca as Uploader,
  xC as _ActionSheetComponent,
  eS as _AppBarComponent,
  rS as _AvatarComponent,
  aS as _AvatarGroupComponent,
  sS as _BackTopComponent,
  uS as _BadgeComponent,
  dS as _BottomNavigationComponent,
  vS as _BottomNavigationItemComponent,
  fS as _BreadcrumbComponent,
  cS as _BreadcrumbsComponent,
  lS as _ButtonComponent,
  mS as _ButtonGroupComponent,
  pS as _CardComponent,
  hS as _CellComponent,
  yS as _CheckboxComponent,
  bS as _CheckboxGroupComponent,
  wS as _ChipComponent,
  CS as _ColComponent,
  SS as _CollapseComponent,
  kS as _CollapseItemComponent,
  KC as _ContextComponent,
  $S as _CountdownComponent,
  TS as _CounterComponent,
  PS as _DatePickerComponent,
  OS as _DialogComponent,
  VS as _DividerComponent,
  BS as _EllipsisComponent,
  IS as _FabComponent,
  ES as _FormComponent,
  gS as _FormDetailsComponent,
  iS as _HoverComponent,
  oS as _HoverOverlayComponent,
  QC as _IconComponent,
  DS as _ImageComponent,
  zS as _ImagePreviewComponent,
  RS as _IndexAnchorComponent,
  US as _IndexBarComponent,
  FS as _InputComponent,
  nS as _LazyComponent,
  HS as _LinkComponent,
  YS as _ListComponent,
  jS as _LoadingBarComponent,
  tS as _LoadingComponent,
  _C as _LocaleComponent,
  WS as _MenuComponent,
  GS as _OptionComponent,
  qS as _OverlayComponent,
  XS as _PaginationComponent,
  KS as _PaperComponent,
  ZS as _PickerComponent,
  JC as _PopupComponent,
  JS as _ProgressComponent,
  QS as _PullRefreshComponent,
  _S as _RadioComponent,
  xS as _RadioGroupComponent,
  ek as _RateComponent,
  nk as _ResultComponent,
  ZC as _RippleComponent,
  rk as _RowComponent,
  ak as _SelectComponent,
  tk as _SkeletonComponent,
  ok as _SliderComponent,
  ik as _SnackbarComponent,
  lk as _SpaceComponent,
  sk as _StepComponent,
  uk as _StepsComponent,
  LS as _StickyComponent,
  dk as _StyleProviderComponent,
  NS as _SwipeComponent,
  AS as _SwipeItemComponent,
  vk as _SwitchComponent,
  fk as _TabComponent,
  ck as _TabItemComponent,
  mk as _TableComponent,
  pk as _TabsComponent,
  hk as _TabsItemsComponent,
  gk as _ThemesComponent,
  yk as _TimePickerComponent,
  MS as _TooltipComponent,
  bk as _UploaderComponent,
  nf as actionSheetProps,
  yi as add,
  ff as appBarProps,
  Lf as avatarGroupProps,
  If as avatarProps,
  mc as backTopProps,
  wc as badgeProps,
  Bc as bottomNavigationItemProps,
  $c as bottomNavigationProps,
  zc as breadcrumbProps,
  Yc as breadcrumbsProps,
  lc as buttonProps,
  xc as cardProps,
  om as cellProps,
  Sm as checkboxGroupProps,
  mm as checkboxProps,
  Vm as chipProps,
  Nm as colProps,
  Wm as collapseItemProps,
  Fm as collapseProps,
  Km as countdownProps,
  Wp as counterProps,
  vh as datePickerProps,
  wk as default,
  Fe as defaultLazyOptions,
  Vh as dialogProps,
  zh as dividerProps,
  Ss as enUS,
  um as formDetailsProps,
  uy as formProps,
  ws as iconProps,
  Os as imageCache,
  Iy as imagePreviewProps,
  my as imageProps,
  Yy as indexAnchorProps,
  qy as indexBarProps,
  _y as inputProps,
  qC as install,
  ib as linkProps,
  db as listProps,
  pb as loadingBarProps,
  nr as loadingProps,
  Pb as menuProps,
  $s as merge,
  Eb as optionProps,
  zb as overlayProps,
  Ye as pack,
  ks as packs,
  Rb as paginationProps,
  jb as paperProps,
  Xb as pickerProps,
  ht as popupProps,
  n0 as progressProps,
  s0 as pullRefreshProps,
  b0 as radioGroupProps,
  f0 as radioProps,
  k0 as rateProps,
  O0 as resultProps,
  c1 as rowProps,
  y1 as selectProps,
  S1 as skeletonProps,
  O1 as sliderProps,
  jd as snackbarProps,
  Q1 as spaceProps,
  ew as stepProps,
  sw as stepsProps,
  Nt as stickyProps,
  vw as styleProviderProps,
  rd as swipeProps,
  mw as switchProps,
  Tw as tabItemProps,
  yw as tabProps,
  Mw as tableProps,
  Lw as tabsItemsProps,
  Dw as tabsProps,
  $C as timePickerProps,
  Kg as tooltipProps,
  AC as uploaderProps,
  bi as use,
  hr as useHoverOverlay,
  gi as useLocale,
  GC as version,
  hi as zhCN
};
