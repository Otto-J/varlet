import { reactive as Ee, onMounted as qt, nextTick as Be, onActivated as Za, isRef as mv, watch as le, onBeforeUnmount as Xt, onDeactivated as br, unref as Ya, inject as pv, getCurrentInstance as Ma, computed as F, provide as hv, isVNode as mt, ref as M, Comment as gv, Fragment as Oe, createApp as yv, h as ns, onBeforeMount as bv, onUnmounted as Ja, defineComponent as ne, createVNode as J, Teleport as Ba, Transition as Ne, withDirectives as we, vShow as pr, mergeProps as Ve, openBlock as h, createBlock as ge, resolveDynamicComponent as Qa, normalizeClass as c, normalizeStyle as G, resolveComponent as oe, resolveDirective as Me, withCtx as fe, createElementVNode as z, renderSlot as j, toDisplayString as ae, createElementBlock as O, renderList as ze, createCommentVNode as ee, onUpdated as Kt, createTextVNode as be, pushScopeId as Ia, popScopeId as Ea, withModifiers as Bn, normalizeProps as vi, guardReactiveProps as rs, vModelText as wv, toRefs as Cv, withKeys as Ui, toRaw as Fi, TransitionGroup as Sv } from "vue";
var as = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, ZC = Ee(as);
const fn = Ee(as), Ke = (e) => typeof e == "string", Co = (e) => typeof e == "boolean", nn = (e) => typeof e == "number", fi = (e) => Object.prototype.toString.call(e) === "[object Object]", kv = (e) => typeof e == "object" && e !== null, ci = (e) => typeof e == "function", $v = (e) => typeof e < "u", Ce = (e) => Array.isArray(e), Tv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Ln = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ke(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Co(e) ? Number(e) : e, At = (e, n) => {
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
  if (kv(e))
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
  mv(e) && (d = le(() => e.value, (f, m) => {
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
  const n = pv(e), { childInstances: r, collect: a, clear: t } = n, o = Uv(n, ["childInstances", "collect", "clear"]), i = Ma();
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
      hv(e, Object.assign({
        childInstances: r,
        collect: i,
        clear: l
      }, u));
    }
  };
}
function Yv(e, n, r, a = {}) {
  var t, o, i;
  const { passive: l = !0, eventName: s, defaultValue: u } = a, d = Ma(), v = r || (d == null ? void 0 : d.emit) || ((t = d == null ? void 0 : d.$emit) === null || t === void 0 ? void 0 : t.bind(d)) || ((i = (o = d == null ? void 0 : d.proxy) === null || o === void 0 ? void 0 : o.$emit) === null || i === void 0 ? void 0 : i.bind(d == null ? void 0 : d.proxy));
  n || (n = "modelValue");
  const f = () => $v(e[n]) ? e[n] : u;
  let m = s;
  if (m = s || m || `update:${n.toString()}`, l) {
    const p = f(), g = M(p);
    return le(
      () => e[n],
      // eslint-disable-next-line no-return-assign
      (b) => g.value = b,
      { immediate: !0 }
    ), le(g, (b, S) => {
      b !== S && v(m, b);
    }), g;
  }
  return F({
    get() {
      return f();
    },
    set(p) {
      v(m, p);
    }
  });
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
function jv(e) {
  var n = yv(e), r = document.createElement("div");
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
  } = jv(a);
  return {
    unmountInstance: t
  };
}
function cs(e) {
  var n = [];
  return e.forEach((r) => {
    if (r.type !== gv) {
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
  var e = M(""), n = /* @__PURE__ */ function() {
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
function Wv(e) {
  ka(window, "hashchange", e), ka(window, "popstate", e);
}
function _t() {
  var e = M(!1);
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
  n: ms
} = re("ripple"), Ji = 250;
function Gv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function qv(e, n) {
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
function ps(e) {
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
      } = qv(this, e), s = document.createElement("div");
      s.classList.add(ms()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Gv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function To() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + ms());
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
function hs() {
  var e = this._ripple;
  Rv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Xv(e, n) {
  var r, a, t;
  e._ripple = Lt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : fn.touchmoveForbid,
    removeRipple: To.bind(e)
  }), e.addEventListener("touchstart", ps, {
    passive: !0
  }), e.addEventListener("touchmove", hs, {
    passive: !0
  }), e.addEventListener("dragstart", To, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Kv(e) {
  e.removeEventListener("touchstart", ps), e.removeEventListener("touchmove", hs), e.removeEventListener("dragstart", To), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Zv(e, n) {
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
var gs = {
  mounted: Xv,
  unmounted: Kv,
  updated: Zv,
  install(e) {
    e.directive("ripple", this);
  }
}, JC = gs;
const Re = gs;
function Jv(e) {
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
    validator: Jv
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
function ys() {
  var e = Object.keys(fn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ct(e) {
  fn.locks[e] = 1, ys();
}
function St(e) {
  delete fn.locks[e], ys();
}
function xt(e, n) {
  var {
    uid: r
  } = Ma();
  n && le(n, (a) => {
    a === !1 ? St(r) : a === !0 && e() === !0 && Ct(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? Ct(r) : St(r));
  }), bv(() => {
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
  var r = M(fn.zIndex);
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
function Qv(e) {
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
    }), Wv(() => T(e.onRouteChange));
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
        transition: p,
        position: g
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
          name: p || zn("$-pop-" + g)
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
        }, Qv(v = u()) ? v : {
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
var QC = hn, bs = {
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
function _v(e) {
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
  n: xv,
  classes: ef
} = re("icon");
function nf(e, n) {
  return h(), ge(
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
var ws = ne({
  name: "VarIcon",
  props: bs,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = _v(function* (o, i) {
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
      n: xv,
      classes: ef,
      nextName: n,
      animateInProgress: r,
      isURL: Tv,
      toNumber: L,
      toSizeUnit: me
    };
  }
});
ws.render = nf;
const $e = ws;
$e.install = function(e) {
  e.component($e.name, $e);
};
var _C = $e;
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
var rf = Oo({
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
}, Cs = {
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
  var e = {}, n = M({}), r = (o, i) => {
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
  packs: Ss,
  pack: Ye,
  add: yi,
  use: bi,
  merge: ks
} = gi();
yi("zh-CN", hi);
bi("zh-CN");
var xC = {
  zhCN: hi,
  enUS: Cs,
  packs: Ss,
  pack: Ye,
  add: yi,
  use: bi,
  merge: ks,
  useLocale: gi
};
const Mo = {
  zhCN: hi,
  enUS: Cs,
  packs: Ss,
  pack: Ye,
  add: yi,
  use: bi,
  merge: ks,
  useLocale: gi
};
var {
  n: af,
  classes: tf
} = re("action-sheet"), of = ["onClick"];
function lf(e, n) {
  var r = oe("var-icon"), a = oe("var-popup"), t = Me("ripple");
  return h(), ge(
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
        )]), j(e.$slots, "actions", {}, () => [(h(!0), O(
          Oe,
          null,
          ze(e.actions, (o) => we((h(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: G({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (h(), ge(
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
            of
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
var $s = ne({
  name: "VarActionSheet",
  directives: {
    Ripple: Re
  },
  components: {
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: rf,
  setup(e) {
    var n = M(!1), r = (t) => {
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
      n: af,
      classes: tf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ye,
      dt: Zt,
      handleSelect: r
    };
  }
});
$s.render = lf;
const tr = $s;
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
function sf(e) {
  return e === void 0 && (e = {}), Bo({}, wi, e);
}
function $a(e) {
  return pt() ? new Promise((n) => {
    $a.close();
    var r = Ee(sf(e));
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
function uf(e) {
  wi = e;
}
function df() {
  wi = {};
}
function vf() {
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
  setDefaultOptions: uf,
  resetDefaultOptions: df,
  close: vf
});
var eS = tr;
function ff(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var cf = {
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
    validator: ff
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
  n: mf,
  classes: pf
} = re("app-bar");
function hf(e, n) {
  return h(), O(
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
        [j(e.$slots, "left"), e.titlePosition === "left" ? (h(), O(
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
      ), e.titlePosition === "center" ? (h(), O(
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
        [e.titlePosition === "right" ? (h(), O(
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
var Ts = ne({
  name: "VarAppBar",
  props: cf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), o = () => {
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
      n: mf,
      classes: pf,
      rootStyles: i,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ts.render = hf;
const kr = Ts;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var nS = kr;
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
var gf = "background-image", yf = "lazy-loading", bf = "lazy-error", xi = "lazy-attempt", wf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Eo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ja = [], Rt = [], Ps = Vv(100), Fe = {
  loading: Eo,
  error: Eo,
  attempt: 3,
  throttleWait: 300,
  events: wf
}, Ci = mi(yt, Fe.throttleWait);
function no(e, n) {
  e._lazy.arg === gf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Cf(e) {
  e._lazy.loading && no(e, e._lazy.loading), yt();
}
function Sf(e) {
  e._lazy.error && no(e, e._lazy.error), e._lazy.state = "error", ki(e), yt();
}
function Os(e, n) {
  no(e, n), e._lazy.state = "success", ki(e), yt();
}
function kf(e) {
  var n;
  Rt.includes(e) || (Rt.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ci, {
      passive: !0
    });
  }));
}
function $f() {
  Rt.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ci);
    });
  }), Rt.length = 0;
}
function Tf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(yf)) != null ? r : Fe.loading,
    error: (a = e.getAttribute(bf)) != null ? a : Fe.error,
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
function Pf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Ps.add(n), Os(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Sf(e) : Vs(e);
  });
}
function Vs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Ps.has(n)) {
      Os(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Cf(e), Pf(e, n);
  }
}
function Si(e) {
  return Do.apply(this, arguments);
}
function Do() {
  return Do = eo(function* (e) {
    (yield Iv(e)) && Vs(e);
  }), Do.apply(this, arguments);
}
function yt() {
  ja.forEach((e) => Si(e));
}
function Of(e) {
  return No.apply(this, arguments);
}
function No() {
  return No = eo(function* (e) {
    !ja.includes(e) && ja.push(e), Ev(e).forEach(kf), yield Si(e);
  }), No.apply(this, arguments);
}
function ki(e) {
  At(ja, e), ja.length === 0 && $f();
}
function Vf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Ms(e, n) {
  return Ao.apply(this, arguments);
}
function Ao() {
  return Ao = eo(function* (e, n) {
    Tf(e, n), yield Of(e);
  }), Ao.apply(this, arguments);
}
function Mf(e, n) {
  return zo.apply(this, arguments);
}
function zo() {
  return zo = eo(function* (e, n) {
    if (!Vf(e, n)) {
      ja.includes(e) && (yield Si(e));
      return;
    }
    yield Ms(e, n);
  }), zo.apply(this, arguments);
}
function Bf(e) {
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
var Bs = {
  mounted: Ms,
  unmounted: ki,
  updated: Mf,
  install(e, n) {
    Bf(n), Ci = mi(yt, Fe.throttleWait), e.directive("lazy", this);
  }
}, rS = Bs;
const st = Bs;
function If(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Is = (e) => ["mini", "small", "normal", "large"].includes(e);
function Es(e) {
  return Is(e) || nn(e) || Ke(e);
}
var Ef = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Es,
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
    validator: If,
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
  n: Df,
  classes: Nf
} = re("avatar"), Af = ["src", "lazy-loading", "lazy-error"], zf = ["src"];
function Lf(e, n) {
  var r = Me("lazy");
  return h(), O(
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
    [e.src ? (h(), O(
      Oe,
      {
        key: 0
      },
      [e.lazy ? we((h(), O(
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
        Af
      )), [[r, e.src]]) : (h(), O(
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
        zf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (h(), O(
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
var Ds = ne({
  name: "VarAvatar",
  directives: {
    Lazy: st
  },
  props: Ef,
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
      d ? (u._lazy.state === "success" && T(v, s), u._lazy.state === "error" && T(f, s)) : T(v, s);
    }, i = (s) => {
      T(e.onError, s);
    }, l = (s) => {
      T(e.onClick, s);
    };
    return ln(t), Kt(t), {
      internalSizeValidator: Is,
      sizeValidator: Es,
      toSizeUnit: me,
      n: Df,
      classes: Nf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: i,
      handleClick: l
    };
  }
});
Ds.render = Lf;
const $r = Ds;
$r.install = function(e) {
  e.component($r.name, $r);
};
var aS = $r, Rf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Uf,
  classes: Ff
} = re("avatar-group");
function Hf(e, n) {
  return h(), O(
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
var Ns = ne({
  name: "VarAvatarGroup",
  props: Rf,
  setup(e) {
    var n = F(() => e.offset == null ? {} : {
      "--avatar-group-offset": me(e.offset)
    });
    return {
      n: Uf,
      classes: Ff,
      toSizeUnit: me,
      rootStyles: n
    };
  }
});
Ns.render = Hf;
const Tr = Ns;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var tS = Tr;
function Yf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function jf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var nr = {
  type: {
    type: String,
    default: "circle",
    validator: Yf
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: jf
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
  n: Wf,
  classes: Gf
} = re("loading"), qf = (e) => (Ia(""), e = e(), Ea(), e), Xf = /* @__PURE__ */ qf(() => /* @__PURE__ */ z(
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
)), Kf = [Xf];
function Zf(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [j(e.$slots, "default"), e.loading ? (h(), O(
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
    )) : ee("v-if", !0), e.isShow ? (h(), O(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), O(
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
          Kf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : ee("v-if", !0), (h(!0), O(
        Oe,
        null,
        ze(e.loadingTypeDict, (r, a) => (h(), O(
          Oe,
          {
            key: a
          },
          [e.type === a ? (h(), O(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), O(
              Oe,
              null,
              ze(r, (t) => (h(), O(
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
      )), e.$slots.description || e.description ? (h(), O(
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
var As = ne({
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
      n: Wf,
      classes: Gf,
      multiplySizeUnit: xe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
As.render = Zf;
const Tn = As;
Tn.install = function(e) {
  e.component(Tn.name, Tn);
};
var oS = Tn, Jf = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Qf,
  classes: _f
} = re("hover-overlay");
function xf(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.hovering, e.n("--hovering")]))
    },
    null,
    2
    /* CLASS */
  );
}
var zs = ne({
  name: "VarHoverOverlay",
  props: Jf,
  setup() {
    return {
      n: Qf,
      classes: _f
    };
  }
});
zs.render = xf;
const tn = zs;
tn.install = function(e) {
  e.component(tn.name, tn);
};
function hr() {
  var e = M(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var iS = tn;
function Ls(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function ec(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((i) => i.trim());
    return r[ts(t)] = o, r;
  }, {}) : {};
}
function nc(e) {
  var {
    value: n
  } = e._hover, r = ec(e);
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
function rc(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Rs(e) {
  rc(e), $i(e, e._hover.rawStyle);
}
function Us() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, ci(e)) {
    e(this._hover.hovering);
    return;
  }
  $i(this, e);
}
function Fs() {
  if (this._hover.hovering = !1, ci(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Rs(this);
}
function Hs(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Ls(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, nc(e), e.addEventListener("mouseenter", Us), e.addEventListener("mouseleave", Fs));
}
function Ys(e, n) {
  Ls(n.arg) || (Rs(e), e.removeEventListener("mouseenter", Us), e.removeEventListener("mouseleave", Fs));
}
function ac(e, n) {
  Ys(e, n);
}
function tc(e, n) {
  return !ci(n.value) && e._hover.hovering;
}
function oc(e, n) {
  Hs(e, n), tc(e, n) && $i(e, n.value);
}
var js = {
  mounted: Hs,
  unmounted: Ys,
  beforeUpdate: ac,
  updated: oc,
  install(e) {
    e.directive("hover", this);
  }
}, lS = js;
const En = js;
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
function Ws(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ic(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function lc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var sc = {
  type: {
    type: String,
    validator: Ws
  },
  nativeType: {
    type: String,
    default: "button",
    validator: lc
  },
  size: {
    type: String,
    validator: ic
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
}, Gs = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function uc() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Gs);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function dc() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(Gs);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: vc,
  classes: fc
} = re("button"), cc = ["type", "disabled"];
function mc(e, n) {
  var r = oe("var-loading"), a = oe("var-hover-overlay"), t = Me("ripple"), o = Me("hover");
  return we((h(), O(
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
    [e.loading || e.pending ? (h(), ge(
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
    cc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var qs = ne({
  name: "VarButton",
  components: {
    VarLoading: Tn,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Re,
    Hover: En
  },
  props: sc,
  setup(e) {
    var n = M(!1), {
      buttonGroup: r
    } = dc(), {
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
      n: vc,
      classes: fc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
qs.render = mc;
const Xe = qs;
Xe.install = function(e) {
  e.component(Xe.name, Xe);
};
var sS = Xe, pc = {
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
  n: hc,
  classes: gc
} = re("back-top");
function yc(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), ge(
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
var Xs = ne({
  name: "VarBackTop",
  components: {
    VarButton: Xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: pc,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (d) => {
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
      n: hc,
      classes: gc,
      handleClick: o
    };
  }
});
Xs.render = yc;
const Pr = Xs;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var uS = Pr;
function bc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Cc = {
  type: {
    type: String,
    default: "default",
    validator: bc
  },
  position: {
    type: String,
    default: "right-top",
    validator: wc
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
  n: Sc,
  classes: kc
} = re("badge");
function $c(e, n) {
  var r = oe("var-icon");
  return h(), O(
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
          [e.icon ? (h(), ge(
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
          )) : ee("v-if", !0), j(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), O(
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
var Ks = ne({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Cc,
  setup(e) {
    var n = F(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: Sc,
      classes: kc,
      value: n
    };
  }
});
Ks.render = $c;
const or = Ks;
or.install = function(e) {
  e.component(or.name, or);
};
var dS = or, Tc = {
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
}, Zs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function Pc() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(Zs);
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
  n: Oc,
  classes: Vc
} = re("bottom-navigation"), {
  n: ro
} = re("bottom-navigation-item"), el = ro("--right-half-space"), nl = ro("--left-half-space"), rl = ro("--right-space"), Mc = {
  type: "primary"
};
function Bc(e, n) {
  var r = oe("var-button");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: G("z-index:" + e.zIndex)
    },
    [j(e.$slots, "default"), e.$slots.fab ? (h(), ge(
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
var Js = ne({
  name: "VarBottomNavigation",
  components: {
    VarButton: Xe
  },
  props: Tc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = F(() => e.active), o = F(() => e.activeColor), i = F(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Pc(), v = () => {
      s.value === 0 || f() || m() || p();
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
    }), p = () => {
      nn(t.value) && (t.value < 0 ? T(e["onUpdate:active"], 0) : t.value > s.value - 1 && T(e["onUpdate:active"], s.value - 1));
    }, g = ($) => {
      t.value !== $ && (e.onBeforeChange ? b($) : S($));
    }, b = ($) => {
      var I = T(e.onBeforeChange, $);
      I = Ce(I) ? I : [I], Promise.all(I).then((V) => {
        V.some((y) => !y) || S($);
      });
    }, S = ($) => {
      T(e["onUpdate:active"], $), T(e.onChange, $);
    }, B = () => {
      var $ = D();
      $.forEach((I) => {
        I.classList.remove(el, nl, rl);
      });
    }, w = ($) => {
      var I = D(), V = I.length, y = $ % 2 === 0;
      I.forEach((k, H) => {
        P(y, k, H, V);
      });
    }, P = ($, I, V, y) => {
      var k = V === y - 1;
      if (!$ && k) {
        I.classList.add(rl);
        return;
      }
      var H = V === y / 2 - 1, Q = V === y / 2;
      H ? I.classList.add(el) : Q && I.classList.add(nl);
    }, D = () => Array.from(a.value.querySelectorAll("." + ro())), C = () => {
      T(e.onFabClick);
    }, E = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: g
    };
    return d(E), le(() => s.value, v), le(() => e.fabProps, ($) => {
      l.value = Ro({}, Mc, $);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && w(s.value);
    }), Kt(() => {
      B(), r.fab && w(s.value);
    }), {
      n: Oc,
      classes: Vc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: C,
      fabProps: l
    };
  }
});
Js.render = Bc;
const Or = Js;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var vS = Or, Ic = {
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
function Ec() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Zs);
  if (!r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: n,
    bottomNavigation: e,
    bindBottomNavigation: r
  };
}
var {
  n: Dc,
  classes: Nc
} = re("bottom-navigation-item"), Ac = {
  type: "danger",
  dot: !0
};
function zc(e, n) {
  var r = oe("var-icon"), a = oe("var-badge"), t = Me("ripple");
  return we((h(), O(
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
    [e.icon && !e.$slots.icon ? (h(), ge(
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
    }), e.badge ? (h(), ge(
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
      [e.$slots.default ? ee("v-if", !0) : (h(), O(
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
var Qs = ne({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: or,
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: Ic,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = Ec(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var m, p = (m = n.value) != null ? m : t.value;
      T(e.onClick, p), T(o.onToggle, p);
    };
    return i(d), le(() => r.value, (m) => {
      a.value = m === !0 ? Ac : r.value;
    }, {
      immediate: !0
    }), {
      n: Dc,
      classes: Nc,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Qs.render = zc;
const Vr = Qs;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var fS = Vr, Lc = {
  separator: {
    type: String
  },
  onClick: R()
}, _s = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function Rc() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(_s);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Uc() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(_s);
  if (!n)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Fc,
  classes: Hc
} = re("breadcrumb");
function Yc(e, n) {
  return h(), O(
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
var xs = ne({
  name: "VarBreadcrumb",
  props: Lc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Uc(), t = F(() => n.value === r.length.value - 1), o = F(() => r.separator.value), i = (l) => {
      t.value || T(e.onClick, l);
    };
    return a(null), {
      n: Fc,
      classes: Hc,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
xs.render = Yc;
const Mr = xs;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var cS = Mr, jc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Wc
} = re("breadcrumbs");
function Gc(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var eu = ne({
  name: "VarBreadcrumbs",
  props: jc,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Rc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Wc
    };
  }
});
eu.render = Gc;
const Br = eu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var mS = Br;
function qc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Xc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Kc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Zc = {
  type: {
    type: String,
    default: "default",
    validator: qc
  },
  size: {
    type: String,
    default: "normal",
    validator: Xc
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
    validator: Kc
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
  n: Jc,
  classes: Qc
} = re("button-group");
function _c(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var nu = ne({
  name: "VarButtonGroup",
  props: Zc,
  setup(e) {
    var {
      bindButtons: n
    } = uc(), r = {
      elevation: F(() => e.elevation),
      type: F(() => e.type),
      size: F(() => e.size),
      color: F(() => e.color),
      textColor: F(() => e.textColor),
      mode: F(() => e.mode)
    };
    return n(r), {
      n: Jc,
      classes: Qc
    };
  }
});
nu.render = _c;
const Ir = nu;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var pS = Ir;
function xc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var em = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: xc,
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
  n: nm,
  classes: rm
} = re("card"), am = 500, tm = ["src", "alt"];
function om(e, n) {
  var r = oe("var-icon"), a = oe("var-button"), t = Me("ripple");
  return we((h(), O(
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
      [j(e.$slots, "image", {}, () => [e.src ? (h(), O(
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
        tm
      )) : ee("v-if", !0)]), z(
        "div",
        {
          class: c(e.n("container"))
        },
        [j(e.$slots, "title", {}, () => [e.title ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          ae(e.title),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          ae(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          ae(e.description),
          3
          /* TEXT, CLASS */
        )) : ee("v-if", !0)]), e.$slots.extra ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [j(e.$slots, "extra")],
          2
          /* CLASS */
        )) : ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), O(
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
      ), e.showFloatingButtons ? (h(), O(
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
var ru = ne({
  name: "VarCard",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarButton: Xe
  },
  props: em,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), i = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = F(() => e.layout === "row"), p = M(!1), g = M(!1), {
      zIndex: b
    } = gt(() => e.floating, 1);
    xt(() => e.floating, () => !m.value);
    var S = "auto", B = "auto", w = null, P = M(null), D = /* @__PURE__ */ function() {
      var I = tl(function* () {
        clearTimeout(P.value), clearTimeout(w), P.value = null, P.value = setTimeout(/* @__PURE__ */ tl(function* () {
          var {
            width: V,
            height: y,
            left: k,
            top: H
          } = n.value.getBoundingClientRect();
          a.value = me(V), t.value = me(y), o.value = a.value, i.value = t.value, l.value = me(H), s.value = me(k), u.value = "fixed", S = l.value, B = s.value, p.value = !0, yield In(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", g.value = !0;
        }), e.ripple ? am : 0);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), C = () => {
      clearTimeout(w), clearTimeout(P.value), P.value = null, o.value = a.value, i.value = t.value, l.value = S, s.value = B, v.value = "0px", f.value = "0", p.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", S = "auto", B = "auto", d.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }, E = () => {
      T(e["onUpdate:floating"], !1);
    }, $ = (I) => {
      T(e.onClick, I);
    };
    return le(() => e.floating, (I) => {
      m.value || Be(() => {
        I ? D() : C();
      });
    }, {
      immediate: !0
    }), {
      n: nm,
      classes: rm,
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
      zIndex: b,
      isRow: m,
      close: E,
      showFloatingButtons: p,
      floated: g,
      handleClick: $
    };
  }
});
ru.render = om;
const Er = ru;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var hS = Er, im = {
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
  n: lm,
  classes: sm
} = re("cell");
function um(e, n) {
  var r = oe("var-icon"), a = Me("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: G(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [j(e.$slots, "icon", {}, () => [e.icon ? (h(), O(
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
      [j(e.$slots, "default", {}, () => [e.title ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        ae(e.title),
        3
        /* TEXT, CLASS */
      )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), O(
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
    ), e.$slots.extra ? (h(), O(
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
var au = ne({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: im,
  setup(e) {
    var n = F(() => e.borderOffset == null ? {} : {
      "--cell-border-left": me(e.borderOffset),
      "--cell-border-right": me(e.borderOffset)
    }), r = (a) => {
      T(e.onClick, a);
    };
    return {
      n: lm,
      classes: sm,
      toSizeUnit: me,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
au.render = um;
const ir = au;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var gS = ir, dm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: vm
} = re("form-details"), fm = {
  key: 0
}, cm = {
  key: 0
};
function mm(e, n) {
  return h(), ge(
    Ne,
    {
      name: e.n()
    },
    {
      default: fe(() => [e.errorMessage || e.extraMessage ? (h(), O(
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
              default: fe(() => [e.errorMessage ? (h(), O(
                "div",
                fm,
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
              default: fe(() => [e.extraMessage ? (h(), O(
                "div",
                cm,
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
var tu = ne({
  name: "VarFormDetails",
  props: dm,
  setup: () => ({
    n: vm
  })
});
tu.render = mm;
const We = tu;
We.install = function(e) {
  e.component(We.name, We);
};
var yS = We, pm = {
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
}, ou = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function hm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(ou);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function gm() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(ou);
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
var iu = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(iu), a = Ma(), t = r ? (o) => {
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
function ym() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(iu);
  return {
    length: n,
    formItems: e,
    bindFormItems: r
  };
}
var {
  n: bm,
  classes: wm
} = re("checkbox");
function Cm(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("hover"), i = Me("ripple");
  return h(), O(
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
      [we((h(), O(
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
var lu = ne({
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
  props: pm,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = gm(), {
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
      resetValidation: p
    } = bn(), g = ($) => {
      Be(() => {
        var {
          validateTrigger: I,
          rules: V,
          modelValue: y
        } = e;
        f(I, $, V, y);
      });
    }, b = ($) => {
      n.value = $;
      var {
        checkedValue: I,
        onChange: V
      } = e;
      T(e["onUpdate:modelValue"], n.value), T(V, n.value), g("onChange"), $ === I ? o == null || o.onChecked(I) : o == null || o.onUnchecked(I);
    }, S = ($) => {
      var {
        disabled: I,
        readonly: V,
        checkedValue: y,
        uncheckedValue: k,
        onClick: H
      } = e;
      if (!(u != null && u.disabled.value || I) && (T(H, $), !(u != null && u.readonly.value || V))) {
        t.value = !0;
        var Q = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && Q || b(r.value ? k : y);
      }
    }, B = ($) => {
      var {
        checkedValue: I,
        uncheckedValue: V
      } = e;
      n.value = $.includes(I) ? I : V;
    }, w = () => {
      t.value = !1;
    }, P = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), p();
    }, D = ($) => {
      var {
        checkedValue: I,
        uncheckedValue: V
      } = e, y = ![I, V].includes($);
      y && ($ = r.value ? V : I), b($);
    }, C = () => m(e.rules, e.modelValue);
    le(() => e.modelValue, ($) => {
      n.value = $;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: r,
      sync: B,
      validate: C,
      resetValidation: p,
      reset: P,
      resetWithAnimation: w
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
      n: bm,
      classes: wm,
      handleClick: S,
      toggle: D,
      reset: P,
      validate: C,
      resetValidation: p
    };
  }
});
lu.render = Cm;
const lr = lu;
lr.install = function(e) {
  e.component(lr.name, lr);
};
var bS = lr;
function Sm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var km = {
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
    validator: Sm
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
  n: $m,
  classes: Tm
} = re("checkbox-group");
function Pm(e, n) {
  var r = oe("var-form-details");
  return h(), O(
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
var su = ne({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: km,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = hm(), {
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
    }, p = (E) => {
      var {
        modelValue: $
      } = e;
      $.includes(E) || m([...$, E]);
    }, g = (E) => {
      var {
        modelValue: $
      } = e;
      $.includes(E) && m($.filter((I) => I !== E));
    }, b = () => t.forEach((E) => {
      var {
        sync: $
      } = E;
      return $(e.modelValue);
    }), S = () => {
      t.forEach((E) => E.resetWithAnimation());
    }, B = () => {
      var E = t.map((I) => {
        var {
          checkedValue: V
        } = I;
        return V.value;
      }), $ = Hi(E);
      return S(), T(e["onUpdate:modelValue"], $), $;
    }, w = () => {
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
      return S(), T(e["onUpdate:modelValue"], $), $;
    }, P = () => {
      T(e["onUpdate:modelValue"], []), d();
    }, D = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, b, {
      deep: !0
    }), le(() => a.value, b);
    var C = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: g,
      validate: D,
      resetValidation: d,
      reset: P,
      errorMessage: v
    };
    return o(C), T(i, C), {
      errorMessage: l,
      n: $m,
      classes: Tm,
      checkAll: B,
      inverseAll: w,
      reset: P,
      validate: D,
      resetValidation: d
    };
  }
});
su.render = Pm;
const Dr = su;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var wS = Dr;
function Om(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Vm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Mm = {
  type: {
    type: String,
    default: "default",
    validator: Om
  },
  size: {
    type: String,
    default: "normal",
    validator: Vm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Je(bs, "name"),
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
  classes: Bm
} = re("chip");
function Im(e, n) {
  var r = oe("var-icon");
  return h(), ge(
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
        ), j(e.$slots, "right"), e.closable ? (h(), O(
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
var uu = ne({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Mm,
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
      classes: Bm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
uu.render = Im;
const sr = uu;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var CS = sr;
function Em(e) {
  return ["row", "column"].includes(e);
}
function Dm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Nm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Am = {
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
    validator: Em
  },
  justify: {
    type: String,
    validator: Dm
  },
  align: {
    type: String,
    validator: Nm
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
}, du = Symbol("ROW_BIND_COL_KEY");
function zm() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(du);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Lm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(du);
  return {
    index: n,
    row: e,
    bindRow: r
  };
}
var {
  n: kt,
  classes: Rm
} = re("col");
function Um(e, n) {
  return h(), O(
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
var vu = ne({
  name: "VarCol",
  props: Am,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = F(() => L(e.span)), a = F(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Lm(), i = {
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
      classes: Rm,
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
vu.render = Um;
const Nr = vu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var SS = Nr, fu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Fm() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(fu);
  return {
    length: n,
    collapseItem: e,
    bindCollapseItem: r
  };
}
var Hm = {
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
  n: Ym
} = re("collapse");
function jm(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var cu = ne({
  name: "VarCollapse",
  props: Hm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Fm(), t = F(() => e.modelValue), o = F(() => e.offset), i = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (m, p) => i() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((g) => g !== m) : null, s = (m, p) => {
      var g = l(m, p);
      T(e["onUpdate:modelValue"], g), T(e.onChange, g);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: g
          } = p;
          return e.modelValue === g.value;
        });
      var m = r.filter((p) => {
        var {
          name: g
        } = p;
        return g.value === void 0 ? !1 : e.modelValue.includes(g.value);
      });
      return m.length ? m : void 0;
    }, d = () => e.accordion ? r.find((m) => {
      var {
        index: p,
        name: g
      } = m;
      return g.value === void 0 && e.modelValue === p.value;
    }) : r.filter((m) => {
      var {
        index: p,
        name: g
      } = m;
      return g.value === void 0 && e.modelValue.includes(p.value);
    }), v = () => {
      if (i()) {
        var m = u() || d();
        if (e.accordion && !m || !e.accordion && !m.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var g = e.accordion ? m === p : m.includes(p);
          p.init(e.accordion, g);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), le(() => n.value, () => Be().then(v)), le(() => e.modelValue, () => Be().then(v)), {
      n: Ym
    };
  }
});
cu.render = jm;
const Ar = cu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var kS = Ar;
function Wm() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(fu);
  if (!r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: n,
    collapse: e,
    bindCollapse: r
  };
}
var Gm = {
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
  n: qm,
  classes: Xm
} = re("collapse-item");
function Km(e, n) {
  var r = oe("var-icon");
  return h(), O(
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
var mu = ne({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Gm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Wm(), t = !0, o = M(null), i = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (w, P) => {
      s.value === void 0 || w && Ce(s.value) || P === l.value || (l.value = P, m(!0));
    }, m = (w) => {
      e.disabled || w || d(e.name || n.value, !l.value);
    }, p = () => {
      o.value && (o.value.style.height = "", i.value = !0, Be(() => {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = 0 + "px", On(() => {
          o.value.style.height = w + "px", t && Qt(() => {
            t && S();
          });
        });
      }));
    }, g = () => {
      t = !1;
    }, b = () => {
      if (o.value) {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = w + "px", On(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, S = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, B = {
      index: n,
      name: v,
      init: f
    };
    return a(B), le(l, (w) => {
      w ? p() : b();
    }), {
      n: qm,
      start: g,
      classes: Xm,
      show: i,
      isShow: l,
      offset: u,
      toggle: m,
      contentEl: o,
      transitionend: S
    };
  }
});
mu.render = Km;
const zr = mu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var $S = zr, Zm = {
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
  n: Jm
} = re("countdown"), Fo = 1e3, Ho = 60 * Fo, Yo = 60 * Ho, ol = 24 * Yo;
function Qm(e, n) {
  return h(), O(
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
var pu = ne({
  name: "VarCountdown",
  props: Zm,
  setup(e) {
    var n = M(""), r = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, i = 0, l, s = (p, g) => {
      var b = Object.values(g), S = ["DD", "HH", "mm", "ss"], B = [24, 60, 60, 1e3];
      if (S.forEach((P, D) => {
        p.includes(P) ? p = p.replace(P, Sa("" + b[D], 2, "0")) : b[D + 1] += b[D] * B[D];
      }), p.includes("S")) {
        var w = Sa("" + b[b.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", w) : p.includes("SS") ? p = p.replace("SS", w.slice(0, 2)) : p = p.replace("S", w.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var g = Math.floor(p / ol), b = Math.floor(p % ol / Yo), S = Math.floor(p % Yo / Ho), B = Math.floor(p % Ho / Fo), w = Math.floor(p % Fo), P = {
        days: g,
        hours: b,
        minutes: S,
        seconds: B,
        milliseconds: w
      };
      r.value = P, T(e.onChange, r.value), n.value = s(e.format, P);
    }, d = () => {
      var {
        time: p,
        onEnd: g
      } = e, b = performance.now();
      if (a || (a = b + L(p)), i = a - b, i < 0 && (i = 0), u(i), i === 0) {
        T(g);
        return;
      }
      t && (o = On(d));
    }, v = function(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (i || L(e.time)), d());
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
      n: Jm,
      start: v,
      pause: f,
      reset: m
    };
  }
});
pu.render = Qm;
const Lr = pu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var TS = Lr;
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
}, hu, Rn, ce = !0, ao = "[DecimalError] ", gr = ao + "Invalid argument: ", gu = ao + "Precision limit exceeded", yu = ao + "crypto unavailable", bu = "[object Decimal]", Qe = Math.floor, He = Math.pow, _m = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, xm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, ep = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, wu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Pn = 1e7, ve = 7, np = 9007199254740991, rp = Ut.length - 1, Go = Ft.length - 1, q = { toStringTag: bu };
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = ap(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(Rn == 2 || Rn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
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
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
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
  return u[0] ? (e.d = u, e.e = to(u, r), ce ? ue(e, l, s) : e) : new p(s === 3 ? -0 : 0);
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
  return r.d ? (n = Cu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = op(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(Rn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
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
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, p = m.d, g = m.constructor;
  if (!p)
    return new g(m);
  if (u = r = new g(1), a = s = new g(0), n = new g(a), o = n.e = Cu(p) - m.e - 1, i = o % ve, n.d[0] = He(10, i < 0 ? ve + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new g(e), !l.isInt() || l.lt(u))
      throw Error(gr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (ce = !1, l = new g(qe(p)), d = g.precision, g.precision = o = p.length * ve * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Pe(u, a, o, 1).minus(m).abs().cmp(Pe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], g.precision = d, ce = !0, f;
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
  if (n = Qe(e.e / ve), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= np)
    return t = Su(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
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
function ap(e, n) {
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
    var u, d, v, f, m, p, g, b, S, B, w, P, D, C, E, $, I, V, y, k, H = a.constructor, Q = a.s == t.s ? 1 : -1, _ = a.d, W = t.d;
    if (!_ || !_[0] || !W || !W[0])
      return new H(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (_ ? W && _[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          _ && _[0] == 0 || !W ? Q * 0 : Q / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Pn, m = ve, d = Qe(a.e / m) - Qe(t.e / m)), y = W.length, I = _.length, S = new H(Q), B = S.d = [], v = 0; W[v] == (_[v] || 0); v++)
      ;
    if (W[v] > (_[v] || 0) && d--, o == null ? (C = o = H.precision, i = H.rounding) : l ? C = o + (a.e - t.e) + 1 : C = o, C < 0)
      B.push(1), p = !0;
    else {
      if (C = C / m + 2 | 0, v = 0, y == 1) {
        for (f = 0, W = W[0], C++; (v < I || f) && C--; v++)
          E = f * s + (_[v] || 0), B[v] = E / W | 0, f = E % W | 0;
        p = f || v < I;
      } else {
        for (f = s / (W[0] + 1) | 0, f > 1 && (W = e(W, f, s), _ = e(_, f, s), y = W.length, I = _.length), $ = y, w = _.slice(0, y), P = w.length; P < y; )
          w[P++] = 0;
        k = W.slice(), k.unshift(0), V = W[0], W[1] >= s / 2 && ++V;
        do
          f = 0, u = n(W, w, y, P), u < 0 ? (D = w[0], y != P && (D = D * s + (w[1] || 0)), f = D / V | 0, f > 1 ? (f >= s && (f = s - 1), g = e(W, f, s), b = g.length, P = w.length, u = n(g, w, b, P), u == 1 && (f--, r(g, y < b ? k : W, b, s))) : (f == 0 && (u = f = 1), g = W.slice()), b = g.length, b < P && g.unshift(0), r(w, g, P, s), u == -1 && (P = w.length, u = n(W, w, y, P), u < 1 && (f++, r(w, y < P ? k : W, P, s))), P = w.length) : u === 0 && (f++, w = [0]), B[v++] = f, u && w[0] ? w[P++] = _[$] || 0 : (w = [_[$]], P = 1);
        while (($++ < I || w[0] !== void 0) && C--);
        p = w[0] !== void 0;
      }
      B[0] || B.shift();
    }
    if (m == 1)
      S.e = d, hu = p;
    else {
      for (v = 1, f = B[0]; f >= 10; f /= 10)
        v++;
      S.e = v + d * m - 1, ue(S, l ? o + S.e + 1 : o, i, p);
    }
    return S;
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
    return $u(e);
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
  if (n > rp)
    throw ce = !0, r && (e.precision = r), Error(gu);
  return ue(new e(Ut), n, 1, !0);
}
function $n(e, n, r) {
  if (n > Go)
    throw Error(gu);
  return ue(new e(Ft), n, r, !0);
}
function Cu(e) {
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
function Su(e, n, r, a) {
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
function ku(e, n, r) {
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
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ce = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(He(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), qe(l.d).slice(0, s) === qe(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && ut(i.d, s - a, m, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = p, m, ce = !0);
      else
        return f.precision = p, i;
    }
    i = l;
  }
}
function rr(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, m = 1, p = 10, g = e, b = g.d, S = g.constructor, B = S.rounding, w = S.precision;
  if (g.s < 0 || !b || !b[0] || !g.e && b[0] == 1 && b.length == 1)
    return new S(b && !b[0] ? -1 / 0 : g.s != 1 ? NaN : b ? 0 : g);
  if (n == null ? (ce = !1, d = w) : d = n, S.precision = d += p, r = qe(b), a = r.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = qe(g.d), a = r.charAt(0), m++;
    o = g.e, a > 1 ? (g = new S("0." + r), o++) : g = new S(a + "." + r.slice(1));
  } else
    return u = Ht(S, d + 2, w).times(o + ""), g = rr(new S(a + "." + r.slice(1)), d - p).plus(u), S.precision = w, n == null ? ue(g, w, B, ce = !0) : g;
  for (v = g, s = i = g = Pe(g.minus(1), g.plus(1), d, 1), f = ue(g.times(g), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new S(t), d, 1)), qe(u.d).slice(0, d) === qe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Ht(S, d + 2, w).times(o + ""))), s = Pe(s, new S(m), d, 1), n == null)
        if (ut(s.d, d - p, B, l))
          S.precision = d += p, u = i = g = Pe(v.minus(1), v.plus(1), d, 1), f = ue(g.times(g), d, 1), t = l = 1;
        else
          return ue(s, S.precision = w, B, ce = !0);
      else
        return S.precision = w, s;
    s = u, t += 2;
  }
}
function $u(e) {
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
function tp(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), wu.test(n))
      return Xo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (xm.test(n))
    r = 16, n = n.toLowerCase();
  else if (_m.test(n))
    r = 2;
  else if (ep.test(n))
    r = 8;
  else
    throw Error(gr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = Su(a, new a(r), o, o * 2)), u = Bt(n, r, Pn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = to(u, d), e.d = u, ce = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? He(2, s) : ar.pow(2, s))), ce = !0, e);
}
function op(e, n) {
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
function Tu(e, n) {
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
  var t, o, i, l, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (on(r, 1, wr), a === void 0 ? a = m.rounding : on(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = $u(e);
  else {
    for (d = Dn(e), i = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Bt(Dn(f), 10, t), f.e = f.d.length), v = Bt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = hu), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += jo.charAt(v[i]);
      if (p) {
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
function ip(e) {
  return new this(e).abs();
}
function lp(e) {
  return new this(e).acos();
}
function sp(e) {
  return new this(e).acosh();
}
function up(e, n) {
  return new this(e).plus(n);
}
function dp(e) {
  return new this(e).asin();
}
function vp(e) {
  return new this(e).asinh();
}
function fp(e) {
  return new this(e).atan();
}
function cp(e) {
  return new this(e).atanh();
}
function mp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = $n(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? $n(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = $n(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = $n(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function pp(e) {
  return new this(e).cbrt();
}
function hp(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function gp(e, n, r) {
  return new this(e).clamp(n, r);
}
function yp(e) {
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
          throw Error(yu);
      else
        this[r] = !1;
    else
      throw Error(gr + r + ": " + a);
  return this;
}
function bp(e) {
  return new this(e).cos();
}
function wp(e) {
  return new this(e).cosh();
}
function Pu(e) {
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
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), wu.test(o) ? Xo(u, o) : tp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = yp, t.clone = Pu, t.isDecimal = sl, t.abs = ip, t.acos = lp, t.acosh = sp, t.add = up, t.asin = dp, t.asinh = vp, t.atan = fp, t.atanh = cp, t.atan2 = mp, t.cbrt = pp, t.ceil = hp, t.clamp = gp, t.cos = bp, t.cosh = wp, t.div = Cp, t.exp = Sp, t.floor = kp, t.hypot = $p, t.ln = Tp, t.log = Pp, t.log10 = Vp, t.log2 = Op, t.max = Mp, t.min = Bp, t.mod = Ip, t.mul = Ep, t.pow = Dp, t.random = Np, t.round = Ap, t.sign = zp, t.sin = Lp, t.sinh = Rp, t.sqrt = Up, t.sub = Fp, t.sum = Hp, t.tan = Yp, t.tanh = jp, t.trunc = Wp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Cp(e, n) {
  return new this(e).div(n);
}
function Sp(e) {
  return new this(e).exp();
}
function kp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function $p() {
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
  return e instanceof ar || e && e.toStringTag === bu || !1;
}
function Tp(e) {
  return new this(e).ln();
}
function Pp(e, n) {
  return new this(e).log(n);
}
function Op(e) {
  return new this(e).log(2);
}
function Vp(e) {
  return new this(e).log(10);
}
function Mp() {
  return ku(this, arguments, "lt");
}
function Bp() {
  return ku(this, arguments, "gt");
}
function Ip(e, n) {
  return new this(e).mod(n);
}
function Ep(e, n) {
  return new this(e).mul(n);
}
function Dp(e, n) {
  return new this(e).pow(n);
}
function Np(e) {
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
      throw Error(yu);
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
function Ap(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function zp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Lp(e) {
  return new this(e).sin();
}
function Rp(e) {
  return new this(e).sinh();
}
function Up(e) {
  return new this(e).sqrt();
}
function Fp(e, n) {
  return new this(e).sub(n);
}
function Hp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ce = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ce = !0, ue(r, this.precision, this.rounding);
}
function Yp(e) {
  return new this(e).tan();
}
function jp(e) {
  return new this(e).tanh();
}
function Wp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var ar = q.constructor = Pu(Wo);
Ut = new ar(Ut);
Ft = new ar(Ft);
var Gp = {
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
  n: qp,
  classes: Xp
} = re("counter"), ul = 100, dl = 600, Kp = ["inputmode", "readonly", "disabled"];
function Zp(e, n) {
  var r = oe("var-icon"), a = oe("var-button"), t = oe("var-form-details");
  return h(), O(
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
        Kp
      ), [[wv, e.inputValue]]), J(
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
var Ou = ne({
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
  props: Gp,
  setup(e) {
    var n = M(""), {
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
    } = a ?? {}, d, v, f, m, p = () => i(e.rules, e.modelValue), g = (W) => {
      Be(() => {
        var {
          validateTrigger: N,
          rules: x,
          modelValue: te
        } = e;
        o(N, W, x, te);
      });
    }, b = () => {
      var {
        min: W
      } = e;
      T(e["onUpdate:modelValue"], W != null ? L(W) : 0), l();
    }, S = {
      reset: b,
      validate: p,
      resetValidation: l
    }, B = F(() => {
      var {
        max: W,
        modelValue: N
      } = e;
      return W != null && L(N) >= L(W);
    }), w = F(() => {
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
      N ? T(x, L(U), _) : Q(U), g("onInputChange");
    }, C = () => {
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
      if (!(u != null && u.value || s != null && s.value || W || N || x || !te) && !w.value) {
        var X = new ar(L(K)).minus(new ar(L(Z))).toString(), de = P(X), pe = L(de);
        T(A, pe), U ? T(Y, pe, _) : (Q(de), g("onDecrement"));
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
      if (!(u != null && u.value || s != null && s.value || W || N || x || !te) && !B.value) {
        var X = new ar(L(K)).plus(new ar(L(Z))).toString(), de = P(X), pe = L(de);
        T(A, pe), U ? T(Y, pe, _) : (Q(de), g("onIncrement"));
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
        k();
      }, dl));
    }, V = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, y = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, k = () => {
      d = window.setTimeout(() => {
        E(), k();
      }, ul);
    }, H = () => {
      v = window.setTimeout(() => {
        C(), H();
      }, ul);
    }, Q = (W) => {
      n.value = W;
      var N = L(W);
      T(e["onUpdate:modelValue"], N);
    }, _ = (W) => {
      Q(P(String(W))), g("onLazyChange");
    };
    return T(r, S), le(() => e.modelValue, (W) => {
      Q(P(String(W))), T(e.onChange, L(W));
    }), Q(P(String(e.modelValue))), {
      n: qp,
      classes: Xp,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: B,
      isMin: w,
      validate: p,
      reset: b,
      resetValidation: l,
      handleChange: D,
      decrement: C,
      increment: E,
      pressDecrement: $,
      pressIncrement: I,
      releaseDecrement: V,
      releaseIncrement: y,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Ou.render = Zp;
const Rr = Ou;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var PS = Rr, Vu = 60, Mu = Vu * 60, Bu = Mu * 24, Jp = Bu * 7, Ga = 1e3, ho = Vu * Ga, vl = Mu * Ga, Qp = Bu * Ga, _p = Jp * Ga, Pi = "millisecond", La = "second", Ra = "minute", Ua = "hour", Jn = "day", It = "week", kn = "month", Iu = "quarter", Qn = "year", Fa = "date", xp = "YYYY-MM-DDTHH:mm:ssZ", fl = "Invalid Date", eh = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, nh = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const rh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ko = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ah = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Ko(t, 2, "0") + ":" + Ko(o, 2, "0");
}, th = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, kn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), kn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, oh = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ih = function(n) {
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
    Q: Iu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, lh = function(n) {
  return n === void 0;
};
const sh = {
  s: Ko,
  z: ah,
  m: th,
  a: oh,
  p: ih,
  u: lh
};
var rt = "en", Ur = {};
Ur[rt] = rh;
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
}, uh = function(n, r) {
  return ie(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = sh;
Te.l = Yt;
Te.i = Oi;
Te.w = uh;
var dh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(eh);
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
    this.$d = dh(a), this.$x = a.x || {}, this.init();
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
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function(S, B) {
      var w = Te.w(o.$u ? Date.UTC(o.$y, B, S) : new Date(o.$y, B, S), o);
      return i ? w : w.endOf(Jn);
    }, u = function(S, B) {
      var w = [0, 0, 0, 0], P = [23, 59, 59, 999];
      return Te.w(o.toDate()[S].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? w : P).slice(B)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Qn:
        return i ? s(1, 0) : s(31, 11);
      case kn:
        return i ? s(1, v) : s(0, v + 1);
      case It: {
        var p = this.$locale().weekStart || 0, g = (d < p ? d + 7 : d) - p;
        return s(i ? f - g : f + (6 - g), v);
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
    var i = a || xp, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, p = function(w, P, D, C) {
      return w && (w[P] || w(t, i)) || D[P].slice(0, C);
    }, g = function(w) {
      return Te.s(s % 12 || 12, w, "0");
    }, b = m || function(B, w, P) {
      var D = B < 12 ? "AM" : "PM";
      return P ? D.toLowerCase() : D;
    }, S = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Te.s(d + 1, 2, "0"),
      MMM: p(o.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: Te.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(o.weekdaysMin, this.$W, v, 2),
      ddd: p(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Te.s(s, 2, "0"),
      h: g(1),
      hh: g(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(nh, function(B, w) {
      return w || S[B] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = ie(a), u = (s.utcOffset() - this.utcOffset()) * ho, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Qn] = v / 12, i[kn] = v, i[Iu] = v / 3, i[It] = (d - u) / _p, i[Jn] = (d - u) / Qp, i[Ua] = d / vl, i[Ra] = d / ho, i[La] = d / Ga, i)[l] || d, o ? v : Te.a(v);
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
}(), Eu = io.prototype;
ie.prototype = Eu;
[["$ms", Pi], ["$s", La], ["$m", Ra], ["$H", Ua], ["$W", Jn], ["$M", kn], ["$y", Qn], ["$D", Fa]].forEach(function(e) {
  Eu[e[1]] = function(n) {
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
const Du = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Nu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function vh(e) {
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
}], fh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: vh
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
  n: ch
} = re("picker-header");
function mh(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), O(
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
          default: fe(() => [(h(), O(
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
var Au = ne({
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
    } = n, a = M(!1), t = M(0), o = F(() => {
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
      n: ch,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
Au.render = mh;
const zu = Au;
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
ie.extend(Du);
ie.extend(Nu);
var {
  n: $t,
  classes: ph
} = re("month-picker"), {
  n: Tt
} = re("date-picker");
function hh(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return h(), O(
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
          default: fe(() => [(h(), O("ul", {
            key: e.panelKey
          }, [(h(!0), O(
            Oe,
            null,
            ze(e.MONTH_LIST, (t) => (h(), O("li", {
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
var Lu = ne({
  name: "MonthPickerPanel",
  components: {
    VarButton: Xe,
    PanelHeader: zu
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
    } = n, [a, t] = e.current.split("-"), o = M(!1), i = M(0), l = M(null), s = Ee({
      left: !1,
      right: !1
    }), u = F(() => e.choose.chooseYear === e.preview.previewYear), d = F(() => e.preview.previewYear === a), v = (B) => {
      var w, P;
      return (w = (P = Ye.value.datePickerMonthDict) == null ? void 0 : P[B].abbr) != null ? w : "";
    }, f = (B) => {
      var {
        preview: {
          previewYear: w
        },
        componentProps: {
          min: P,
          max: D
        }
      } = e, C = !0, E = !0, $ = w + "-" + B;
      return D && (C = ie($).isSameOrBefore(ie(D), "month")), P && (E = ie($).isSameOrAfter(ie(P), "month")), C && E;
    }, m = (B) => {
      var {
        choose: {
          chooseMonths: w,
          chooseDays: P,
          chooseRangeMonth: D
        },
        componentProps: {
          type: C,
          range: E
        }
      } = e;
      if (E) {
        if (!D.length)
          return !1;
        var $ = ie(B).isSameOrBefore(ie(D[1]), "month"), I = ie(B).isSameOrAfter(ie(D[0]), "month");
        return $ && I;
      }
      return C === "month" ? w.includes(B) : P.some((V) => V.includes(B));
    }, p = (B) => {
      var {
        choose: {
          chooseMonth: w
        },
        preview: {
          previewYear: P
        },
        componentProps: {
          allowedDates: D,
          color: C,
          multiple: E,
          range: $
        }
      } = e, I = P + "-" + B, V = () => $ || E ? m(I) : (w == null ? void 0 : w.index) === B && u.value, y = () => f(B) ? D ? !D(I) : !1 : !0, k = y(), H = () => k ? !0 : $ || E ? !m(I) : !u.value || (w == null ? void 0 : w.index) !== B, Q = () => d.value && t === B && e.componentProps.showCurrent ? ($ || E || u.value) && k ? !0 : $ || E ? !m(I) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, _ = () => k ? "" : Q() ? C ?? "" : V() ? "" : Tt() + "-color-cover", W = _().startsWith(Tt());
      return {
        outline: Q(),
        text: H(),
        color: H() ? "" : C,
        textColor: W ? "" : _(),
        [Tt() + "-color-cover"]: W,
        class: ph($t("button"), [k, $t("button--disabled")])
      };
    }, g = (B, w) => {
      var P = w.currentTarget;
      P.classList.contains($t("button--disabled")) || r("choose-month", B);
    }, b = (B) => {
      o.value = B === "prev", i.value += B === "prev" ? -1 : 1, r("check-preview", "year", B);
    }, S = (B) => {
      l.value.checkDate(B);
    };
    return le(() => e.preview.previewYear, (B) => {
      var {
        componentProps: {
          min: w,
          max: P
        }
      } = e;
      P && (s.right = !ie("" + (L(B) + 1)).isSameOrBefore(ie(P), "year")), w && (s.left = !ie("" + (L(B) - 1)).isSameOrAfter(ie(w), "year"));
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
      forwardRef: S,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: g,
      checkDate: b
    };
  }
});
Lu.render = hh;
const gh = Lu;
var {
  n: cl,
  classes: yh
} = re("year-picker"), bh = ["onClick"];
function wh(e, n) {
  return h(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), O(
      Oe,
      null,
      ze(e.yearList, (r) => (h(), O(
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
        bh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Ru = ne({
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
      for (var p = u[0]; p >= u[1]; p--)
        o.push(p);
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
      classes: yh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Ru.render = wh;
const Ch = Ru;
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
ie.extend(Du);
ie.extend(Nu);
var {
  n: Aa,
  classes: Sh
} = re("day-picker"), {
  n: Pt
} = re("date-picker");
function kh(e, n) {
  var r = oe("panel-header"), a = oe("var-button");
  return h(), O(
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
          default: fe(() => [(h(), O("div", {
            key: e.panelKey
          }, [z(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), O(
              Oe,
              null,
              ze(e.sortWeekList, (t) => (h(), O(
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
            [(h(!0), O(
              Oe,
              null,
              ze(e.days, (t, o) => (h(), O("li", {
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
var Uu = ne({
  name: "DayPickerPanel",
  components: {
    VarButton: Xe,
    PanelHeader: zu
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
    } = n, [a, t, o] = e.current.split("-"), i = M([]), l = M(!1), s = M(0), u = M(null), d = Ee({
      left: !1,
      right: !1
    }), v = F(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = F(() => {
      var $;
      return e.choose.chooseYear === e.preview.previewYear && (($ = e.choose.chooseMonth) == null ? void 0 : $.index) === e.preview.previewMonth.index;
    }), m = F(() => {
      var $ = nt.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return $ === -1 || $ === 0 ? nt : nt.slice($).concat(nt.slice(0, $));
    }), p = ($) => {
      var I, V;
      return (I = (V = Ye.value.datePickerWeekDict) == null ? void 0 : V[$].abbr) != null ? I : "";
    }, g = ($) => $ > 0 ? $ : "", b = () => {
      var {
        preview: {
          previewMonth: $,
          previewYear: I
        }
      } = e, V = ie(I + "-" + $.index).daysInMonth(), y = ie(I + "-" + $.index + "-01").day(), k = m.value.findIndex((H) => H.index === "" + y);
      i.value = [...Array(k).fill(-1), ...Array.from(Array(V + 1).keys())].filter((H) => H);
    }, S = () => {
      var {
        preview: {
          previewYear: $,
          previewMonth: I
        },
        componentProps: {
          max: V,
          min: y
        }
      } = e;
      if (V) {
        var k = $ + "-" + (L(I.index) + 1);
        d.right = !ie(k).isSameOrBefore(ie(V), "month");
      }
      if (y) {
        var H = $ + "-" + (L(I.index) - 1);
        d.left = !ie(H).isSameOrAfter(ie(y), "month");
      }
    }, B = ($) => {
      var {
        preview: {
          previewYear: I,
          previewMonth: V
        },
        componentProps: {
          min: y,
          max: k
        }
      } = e, H = !0, Q = !0, _ = I + "-" + V.index + "-" + $;
      return k && (H = ie(_).isSameOrBefore(ie(k), "day")), y && (Q = ie(_).isSameOrAfter(ie(y), "day")), H && Q;
    }, w = ($) => {
      var {
        choose: {
          chooseDays: I,
          chooseRangeDay: V
        },
        componentProps: {
          range: y
        }
      } = e;
      if (y) {
        if (!V.length)
          return !1;
        var k = ie($).isSameOrBefore(ie(V[1]), "day"), H = ie($).isSameOrAfter(ie(V[0]), "day");
        return k && H;
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
          previewMonth: y
        },
        componentProps: {
          allowedDates: k,
          color: H,
          multiple: Q,
          range: _
        }
      } = e, W = V + "-" + y.index + "-" + $, N = () => _ || Q ? w(W) : L(I) === $ && f.value, x = () => B($) ? k ? !k(W) : !1 : !0, te = x(), U = () => te ? !0 : _ || Q ? !w(W) : !f.value || L(I) !== $, Z = () => v.value && L(o) === $ && e.componentProps.showCurrent ? (_ || Q || f.value) && te ? !0 : _ || Q ? !w(W) : f.value ? I !== o : !0 : !1, K = () => te ? "" : Z() ? H ?? "" : N() ? "" : Pt() + "-color-cover", A = K().startsWith(Pt());
      return {
        text: U(),
        outline: Z(),
        textColor: A ? "" : K(),
        [Pt() + "-color-cover"]: A,
        class: Sh(Aa("button"), Aa("button--usable"), [te, Aa("button--disabled")])
      };
    }, D = ($) => {
      l.value = $ === "prev", s.value += $ === "prev" ? -1 : 1, r("check-preview", "month", $);
    }, C = ($, I) => {
      var V = I.currentTarget;
      V.classList.contains(Aa("button--disabled")) || r("choose-day", $);
    }, E = ($) => {
      u.value.checkDate($);
    };
    return ln(() => {
      b(), S();
    }), le(() => e.preview, () => {
      b(), S();
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
      filterDay: g,
      getDayAbbr: p,
      checkDate: D,
      chooseDay: C,
      buttonProps: P
    };
  }
});
Uu.render = kh;
const $h = Uu;
var {
  n: Th,
  classes: Ph
} = re("date-picker");
function Oh(e, n) {
  var r = oe("year-picker-panel"), a = oe("month-picker-panel"), t = oe("day-picker-panel");
  return h(), O(
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
              return [e.type === "month" ? (h(), O("div", {
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
              )])])) : (h(), O("div", {
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
          default: fe(() => [e.getPanelType === "year" ? (h(), ge(
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
          )) : e.getPanelType === "month" ? (h(), ge(
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
          )) : e.getPanelType === "date" ? (h(), ge(
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
var Fu = ne({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: gh,
    YearPickerPanel: Ch,
    DayPickerPanel: $h
  },
  props: fh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ie().format("YYYY-MM-D"), [i, l] = o.split("-"), s = Et.find((se) => se.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), p = M(), g = M(s), b = M(i), S = M(!1), B = M([]), w = M([]), P = M([]), D = M([]), C = M(null), E = M(null), $ = Ee({
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
      chooseDay: p.value,
      chooseMonths: B.value,
      chooseDays: w.value,
      chooseRangeMonth: P.value,
      chooseRangeDay: D.value
    })), V = F(() => ({
      previewMonth: g.value,
      previewYear: b.value
    })), y = F(() => {
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
      return se ? "" + B.value.length + Ye.value.datePickerSelected : he;
    }), k = F(() => {
      var se, ye, he, Se, {
        multiple: ke,
        range: Ue
      } = e;
      if (Ue) {
        var _e = D.value.map((co) => ie(co).format("YYYY-MM-DD"));
        return _e.length ? _e[0] + " ~ " + _e[1] : "";
      }
      if (ke)
        return "" + w.value.length + Ye.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var mn = ie(m.value + "-" + f.value.index + "-" + p.value).day(), Na = nt.find((co) => co.index === "" + mn), Ri = (se = (ye = Ye.value.datePickerWeekDict) == null ? void 0 : ye[Na.index].name) != null ? se : "", fv = (he = (Se = Ye.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? he : "", cv = Sa(p.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + cv + " " + Ri.slice(0, 3) : Ri.slice(0, 3) + ", " + fv.slice(0, 3) + " " + p.value;
    }), H = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = F(() => !e.touchable || ["", "year"].includes(H.value)), _ = F(() => {
      var se, ye, he, Se, ke = ie(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + p.value).day(), Ue = p.value ? Sa(p.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (he = (Se = f.value) == null ? void 0 : Se.index) != null ? he : "",
        date: Ue
      };
    }), W = F(() => I.value.chooseRangeDay.map((se) => ie(se).format("YYYY-MM-DD"))), N = F(() => m.value === b.value), x = F(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === g.value.index;
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
        var se = H.value === "month" ? C : E;
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
      var he = ye === "month" ? B : w, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = he.value.map((_e) => ie(_e).format(Se)), Ue = ke.findIndex((_e) => _e === se);
      Ue === -1 ? ke.push(se) : ke.splice(Ue, 1), T(e["onUpdate:modelValue"], ke), T(e.onChange, ke);
    }, de = (se, ye) => !m.value || !f.value ? !1 : N.value ? se === "month" ? ye.index < f.value.index : x.value ? ye < L(p.value) : f.value.index > g.value.index : m.value > b.value, pe = (se) => {
      var {
        readonly: ye,
        range: he,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": Ue
      } = e;
      if (!(se < 0 || ye)) {
        S.value = de("day", se);
        var _e = b.value + "-" + g.value.index + "-" + se, mn = ie(_e).format("YYYY-MM-DD");
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
      if (S.value = de("month", se), ye === "month" && !he) {
        var Na = b.value + "-" + se.index;
        Se ? Y(Na, "month") : ke ? X(Na, "month") : (T(mn, Na), T(Ue, Na));
      } else
        g.value = se, T(_e, L(b.value), L(g.value.index));
      d.value = !1;
    }, Ie = (se) => {
      b.value = "" + se, u.value = !1, d.value = !0, T(e.onPreview, L(b.value), L(g.value.index));
    }, Ze = (se, ye) => {
      var he = ye === "prev" ? -1 : 1;
      if (se === "year")
        b.value = "" + (L(b.value) + he);
      else {
        var Se = L(g.value.index) + he;
        Se < 1 && (b.value = "" + (L(b.value) - 1), Se = 12), Se > 12 && (b.value = "" + (L(b.value) + 1), Se = 1), g.value = Et.find((ke) => L(ke.index) === Se);
      }
      T(e.onPreview, L(b.value), L(g.value.index));
    }, Sn = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, An = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ge = (se, ye) => {
      var he = ye === "month" ? P : D, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((mn) => ie(mn).format(Se)).slice(0, 2), Ue = he.value.some((mn) => An(mn));
      if (!Ue) {
        he.value = ke;
        var _e = ie(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && _e && (he.value = [he.value[1], he.value[0]]);
      }
    }, cn = (se, ye) => {
      var he = ye === "month" ? B : w, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Ue) => ie(Ue).format(Se))));
      he.value = ke.filter((Ue) => Ue !== "Invalid Date");
    }, bt = (se) => {
      var ye = ie(se).format("YYYY-MM-D");
      if (!An(ye)) {
        var [he, Se, ke] = ye.split("-"), Ue = Et.find((_e) => _e.index === Se);
        f.value = Ue, m.value = he, p.value = ke, g.value = Ue, b.value = he;
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
      n: Th,
      classes: Ph,
      monthPanelEl: C,
      dayPanelEl: E,
      reverse: S,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: b,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: y,
      getDateTitle: k,
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
Fu.render = Oh;
const Fr = Fu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var OS = Fr;
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
function Vh(e) {
  return ["left", "center", "right"].includes(e);
}
var Mh = Qo({
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
    validator: Vh
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
  n: Bh,
  classes: Ih
} = re("dialog");
function Eh(e, n) {
  var r = oe("var-button"), a = oe("var-popup");
  return h(), ge(
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
          [e.cancelButton ? (h(), ge(
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
          )) : ee("v-if", !0), e.confirmButton ? (h(), ge(
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
var Hu = ne({
  name: "VarDialog",
  components: {
    VarPopup: hn,
    VarButton: Xe
  },
  inheritAttrs: !1,
  props: Mh,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => T(e["onUpdate:show"], !1), t = () => {
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
      n: Bh,
      classes: Ih,
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
Hu.render = Eh;
const ur = Hu;
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
function Dh(e) {
  return e === void 0 && (e = {}), Ke(e) ? jt({}, Wt, {
    message: e
  }) : jt({}, Wt, e);
}
function Ta(e) {
  return pt() ? new Promise((n) => {
    Ta.close();
    var r = Dh(e), a = Ee(r);
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
function Nh(e) {
  Wt = e;
}
function Ah() {
  Wt = {};
}
function zh() {
  if (xn != null) {
    var e = xn;
    xn = null, Be().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(Ta, {
  setDefaultOptions: Nh,
  resetDefaultOptions: Ah,
  close: zh
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
Ta.install = function(e) {
  e.component(ur.name, ur);
};
Ta.Component = ur;
var VS = ur, Lh = {
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
  n: Rh,
  classes: Uh
} = re("divider");
function Fh(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: G(e.style)
    },
    [j(e.$slots, "default", {}, () => [e.description ? (h(), O(
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
var Yu = ne({
  name: "VarDivider",
  props: Lh,
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
      n: Rh,
      classes: Uh
    }, Cv(a), {
      style: o,
      isInset: t
    });
  }
});
Yu.render = Fh;
const Hr = Yu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var MS = Hr, Hh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Dt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Hh[n];
  });
}
var Un = "top", yr = "bottom", Pa = "right", dr = "left", lo = "auto", so = [Un, yr, Pa, dr], uo = "start", dt = "end", Yh = "clippingParents", ju = "viewport", xa = "popper", jh = "reference", ml = /* @__PURE__ */ so.reduce(function(e, n) {
  return e.concat([n + "-" + uo, n + "-" + dt]);
}, []), Wu = /* @__PURE__ */ [].concat(so, [lo]).reduce(function(e, n) {
  return e.concat([n, n + "-" + uo, n + "-" + dt]);
}, []), Wh = "beforeRead", Gh = "read", qh = "afterRead", Xh = "beforeMain", Kh = "main", Zh = "afterMain", Jh = "beforeWrite", Qh = "write", _h = "afterWrite", xo = [Wh, Gh, qh, Xh, Kh, Zh, Jh, Qh, _h];
function Fn(e) {
  return e.split("-")[0];
}
var xh = {
  start: "end",
  end: "start"
};
function pl(e) {
  return e.replace(/start|end/g, function(n) {
    return xh[n];
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
function Gu() {
  return !/^((?!chrome|android).)*safari/i.test(ei());
}
function Xa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && gn(e) && (t = e.offsetWidth > 0 && qa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && qa(a.height) / e.offsetHeight || 1);
  var i = Oa(e) ? Cn(e) : window, l = i.visualViewport, s = !Gu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function eg(e, n) {
  var r = Cn(e), a = Cr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = Gu();
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
function ng(e) {
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
function qu(e) {
  return ["html", "body", "#document"].indexOf(Nn(e)) >= 0 ? e.ownerDocument.body : gn(e) && Ii(e) ? e : qu(vo(e));
}
function tt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = qu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], Ii(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(tt(vo(i)))
  );
}
function rg(e) {
  return ["table", "td", "th"].indexOf(Nn(e)) >= 0;
}
function gl(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Vn(e).position === "fixed" ? null : e.offsetParent;
}
function ag(e) {
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
  for (var n = Cn(e), r = gl(e); r && rg(r) && Vn(r).position === "static"; )
    r = gl(r);
  return r && (Nn(r) === "html" || Nn(r) === "body" && Vn(r).position === "static") ? n : r || ag(e) || n;
}
function tg(e, n) {
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
function og(e, n) {
  var r = Xa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function yl(e, n, r) {
  return n === ju ? ni(eg(e, r)) : Oa(n) ? og(n, r) : ni(ng(Cr(e)));
}
function ig(e) {
  var n = tt(vo(e)), r = ["absolute", "fixed"].indexOf(Vn(e).position) >= 0, a = r && gn(e) ? Ei(e) : e;
  return Oa(a) ? n.filter(function(t) {
    return Oa(t) && tg(t, a) && Nn(t) !== "body";
  }) : [];
}
function lg(e, n, r, a) {
  var t = n === "clippingParents" ? ig(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = yl(e, u, a);
    return s.top = at(d.top, s.top), s.right = hl(d.right, s.right), s.bottom = hl(d.bottom, s.bottom), s.left = at(d.left, s.left), s;
  }, yl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vt(e) {
  return e.split("-")[1];
}
function sg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xu(e) {
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
  var u = t ? sg(t) : null;
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
function ug() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function dg(e) {
  return Object.assign({}, ug(), e);
}
function vg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Ku(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Yh : l, u = r.rootBoundary, d = u === void 0 ? ju : u, v = r.elementContext, f = v === void 0 ? xa : v, m = r.altBoundary, p = m === void 0 ? !1 : m, g = r.padding, b = g === void 0 ? 0 : g, S = dg(typeof b != "number" ? b : vg(b, so)), B = f === xa ? jh : xa, w = e.rects.popper, P = e.elements[p ? B : f], D = lg(Oa(P) ? P : P.contextElement || Cr(e.elements.popper), s, d, i), C = Xa(e.elements.reference), E = Xu({
    reference: C,
    element: w,
    strategy: "absolute",
    placement: t
  }), $ = ni(Object.assign({}, w, E)), I = f === xa ? $ : C, V = {
    top: D.top - I.top + S.top,
    bottom: I.bottom - D.bottom + S.bottom,
    left: D.left - I.left + S.left,
    right: I.right - D.right + S.right
  }, y = e.modifiersData.offset;
  if (f === xa && y) {
    var k = y[t];
    Object.keys(V).forEach(function(H) {
      var Q = [Pa, yr].indexOf(H) >= 0 ? 1 : -1, _ = [Un, yr].indexOf(H) >= 0 ? "y" : "x";
      V[H] += k[_] * Q;
    });
  }
  return V;
}
function fg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Wu : s, d = vt(a), v = d ? l ? ml : ml.filter(function(p) {
    return vt(p) === d;
  }) : so, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, g) {
    return p[g] = Ku(e, {
      placement: g,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Fn(g)], p;
  }, {});
  return Object.keys(m).sort(function(p, g) {
    return m[p] - m[g];
  });
}
function cg(e) {
  if (Fn(e) === lo)
    return [];
  var n = Dt(e);
  return [pl(e), n, pl(n)];
}
function mg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, g = r.allowedAutoPlacements, b = n.options.placement, S = Fn(b), B = S === b, w = s || (B || !p ? [Dt(b)] : cg(b)), P = [b].concat(w).reduce(function(Y, X) {
      return Y.concat(Fn(X) === lo ? fg(n, {
        placement: X,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : X);
    }, []), D = n.rects.reference, C = n.rects.popper, E = /* @__PURE__ */ new Map(), $ = !0, I = P[0], V = 0; V < P.length; V++) {
      var y = P[V], k = Fn(y), H = vt(y) === uo, Q = [Un, yr].indexOf(k) >= 0, _ = Q ? "width" : "height", W = Ku(n, {
        placement: y,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), N = Q ? H ? Pa : dr : H ? yr : Un;
      D[_] > C[_] && (N = Dt(N));
      var x = Dt(N), te = [];
      if (o && te.push(W[k] <= 0), l && te.push(W[N] <= 0, W[x] <= 0), te.every(function(Y) {
        return Y;
      })) {
        I = y, $ = !1;
        break;
      }
      E.set(y, te);
    }
    if ($)
      for (var U = p ? 3 : 1, Z = function(X) {
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
const pg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hg(e, n, r) {
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
function gg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = Wu.reduce(function(d, v) {
    return d[v] = hg(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const yg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: gg
};
function bg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function wg(e) {
  return e === Cn(e) || !gn(e) ? Mi(e) : bg(e);
}
function Cg(e) {
  var n = e.getBoundingClientRect(), r = qa(n.width) / e.offsetWidth || 1, a = qa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Sg(e, n, r) {
  r === void 0 && (r = !1);
  var a = gn(n), t = gn(n) && Cg(n), o = Cr(n), i = Xa(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Nn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(o)) && (l = wg(n)), gn(n) ? (s = Xa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Bi(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function kg(e) {
  var n = Xa(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function $g(e) {
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
function Tg(e) {
  var n = $g(e);
  return xo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Pg(e) {
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
var Sr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Og = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', bl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Vg(e) {
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
        }) == null && console.error(Kn(Og, String(n.name), a, a));
      });
    });
  });
}
function Mg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Bg(e) {
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
var wl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Ig = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Cl = {
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
function Eg(e) {
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
      setOptions: function(S) {
        var B = typeof S == "function" ? S(d.options) : S;
        g(), d.options = Object.assign({}, o, d.options, B), d.scrollParents = {
          reference: Oa(l) ? tt(l) : l.contextElement ? tt(l.contextElement) : [],
          popper: tt(s)
        };
        var w = Tg(Bg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(y) {
          return y.enabled;
        }), process.env.NODE_ENV !== "production") {
          var P = Mg([].concat(w, d.options.modifiers), function(y) {
            var k = y.name;
            return k;
          });
          if (Vg(P), Fn(d.options.placement) === lo) {
            var D = d.orderedModifiers.find(function(y) {
              var k = y.name;
              return k === "flip";
            });
            D || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var C = Vn(s), E = C.marginTop, $ = C.marginRight, I = C.marginBottom, V = C.marginLeft;
          [E, $, I, V].some(function(y) {
            return parseFloat(y);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var S = d.elements, B = S.reference, w = S.popper;
          if (!Sl(B, w)) {
            process.env.NODE_ENV !== "production" && console.error(wl);
            return;
          }
          d.rects = {
            reference: Sg(B, Ei(w), d.options.strategy === "fixed"),
            popper: kg(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(y) {
            return d.modifiersData[y.name] = Object.assign({}, y.data);
          });
          for (var P = 0, D = 0; D < d.orderedModifiers.length; D++) {
            if (process.env.NODE_ENV !== "production" && (P += 1, P > 100)) {
              console.error(Ig);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, D = -1;
              continue;
            }
            var C = d.orderedModifiers[D], E = C.fn, $ = C.options, I = $ === void 0 ? {} : $, V = C.name;
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
      update: Pg(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Sl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(wl), m;
    m.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function p() {
      d.orderedModifiers.forEach(function(b) {
        var S = b.name, B = b.options, w = B === void 0 ? {} : B, P = b.effect;
        if (typeof P == "function") {
          var D = P({
            state: d,
            name: S,
            instance: m,
            options: w
          }), C = function() {
          };
          v.push(D || C);
        }
      });
    }
    function g() {
      v.forEach(function(b) {
        return b();
      }), v = [];
    }
    return m;
  };
}
var Ot = {
  passive: !0
};
function Dg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ot);
  }), l && s.addEventListener("resize", r.update, Ot), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ot);
    }), l && s.removeEventListener("resize", r.update, Ot);
  };
}
const Ng = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Dg,
  data: {}
};
function Ag(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Xu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const zg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ag,
  data: {}
};
var Lg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Rg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: qa(n * t) / t || 0,
    y: qa(r * t) / t || 0
  };
}
function kl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, p = i.y, g = p === void 0 ? 0 : p, b = typeof d == "function" ? d({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = b.x, g = b.y;
  var S = i.hasOwnProperty("x"), B = i.hasOwnProperty("y"), w = dr, P = Un, D = window;
  if (u) {
    var C = Ei(r), E = "clientHeight", $ = "clientWidth";
    if (C === Cn(r) && (C = Cr(r), Vn(C).position !== "static" && l === "absolute" && (E = "scrollHeight", $ = "scrollWidth")), C = C, t === Un || (t === dr || t === Pa) && o === dt) {
      P = yr;
      var I = v && C === D && D.visualViewport ? D.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[E]
      );
      g -= I - a.height, g *= s ? 1 : -1;
    }
    if (t === dr || (t === Un || t === yr) && o === dt) {
      w = Pa;
      var V = v && C === D && D.visualViewport ? D.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[$]
      );
      m -= V - a.width, m *= s ? 1 : -1;
    }
  }
  var y = Object.assign({
    position: l
  }, u && Lg), k = d === !0 ? Rg({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = k.x, g = k.y, s) {
    var H;
    return Object.assign({}, y, (H = {}, H[P] = B ? "0" : "", H[w] = S ? "0" : "", H.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", H));
  }
  return Object.assign({}, y, (n = {}, n[P] = B ? g + "px" : "", n[w] = S ? m + "px" : "", n.transform = "", n));
}
function Ug(e) {
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
const Fg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ug,
  data: {}
};
function Hg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !gn(o) || !Nn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Yg(e) {
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
const jg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Hg,
  effect: Yg,
  requires: ["computeStyles"]
};
var Wg = [Ng, zg, Fg, jg], Gg = /* @__PURE__ */ Eg({
  defaultModifiers: Wg
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
function Zu(e) {
  var n = M(null), r = M(null), a = M(!1), t = M({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = gt(() => a.value, 1), i = null, l = !1, s = !1, u = () => {
    var {
      width: C,
      height: E
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Le(C),
      height: Le(E)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, P());
  }, v = /* @__PURE__ */ function() {
    var C = Tl(function* () {
      e.trigger === "hover" && (s = !1, yield In(), !l && D());
    });
    return function() {
      return C.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (l = !0);
  }, m = /* @__PURE__ */ function() {
    var C = Tl(function* () {
      e.trigger === "hover" && (l = !1, yield In(), !s && D());
    });
    return function() {
      return C.apply(this, arguments);
    };
  }(), p = () => {
    P();
  }, g = () => {
    a.value = !1, T(e["onUpdate:show"], !1);
  }, b = () => {
    e.trigger === "click" && g();
  }, S = () => {
    u();
    var C = {
      x: Le(e.offsetX),
      y: Le(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: C.x,
          distance: C.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: C.x,
          distance: C.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: C.x,
          distance: C.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: C.x,
          distance: -C.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: C.x,
          distance: -C.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: C.x,
          distance: -C.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: C.y,
          distance: C.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: C.y,
          distance: -C.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: C.y,
          distance: -C.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: C.x,
          distance: -C.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: C.x,
          distance: C.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: C.y,
          distance: C.x
        };
    }
  }, B = () => {
    var {
      placement: C,
      skidding: E,
      distance: $
    } = S(), I = [Gt({}, pg, {
      enabled: a.value
    }), Gt({}, yg, {
      options: {
        offset: [E, $]
      }
    })];
    return {
      placement: C,
      modifiers: I
    };
  }, w = () => {
    i.setOptions(B());
  }, P = () => {
    var {
      disabled: C
    } = e;
    C || (a.value = !0, T(e["onUpdate:show"], !0));
  }, D = () => {
    a.value = !1, T(e["onUpdate:show"], !1);
  };
  return fs(n, "click", b), le(() => e.show, (C) => {
    a.value = C ?? !1;
  }, {
    immediate: !0
  }), le(() => e.offsetX, w), le(() => e.offsetY, w), le(() => e.placement, w), le(() => a.value, (C) => {
    C ? (w(), T(e.onOpen)) : T(e.onClose);
  }), le(() => e.disabled, D), qt(() => {
    var C, E = e.reference ? (C = n.value) == null ? void 0 : C.querySelector(e.reference) : n.value;
    i = Gg(E ?? n.value, r.value, B());
  }), Ja(() => {
    i.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: t,
    handleHostClick: p,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: g,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: w,
    open: P,
    close: D
  };
}
function qg(e) {
  return ["click", "hover"].includes(e);
}
function Xg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Kg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Zg = {
  type: {
    type: String,
    default: "default",
    validator: Kg
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
    validator: qg
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Xg
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
  n: Jg,
  classes: Qg
} = re("tooltip");
function _g(e, n) {
  return h(), O(
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
    [j(e.$slots, "default"), (h(), ge(
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
var Ju = ne({
  name: "VarTooltip",
  props: Zg,
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
      resize: p
    } = Zu(e);
    return {
      toSizeUnit: me,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Jg,
      classes: Qg,
      handleHostClick: i,
      handlePopoverClose: v,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: p,
      open: f,
      close: m
    };
  }
});
Ju.render = _g;
const vr = Ju;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var BS = vr;
function xg(e) {
  return ["click"].includes(e);
}
var ey = {
  expandTrigger: {
    type: String,
    validator: xg
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
  n: ny,
  classes: ry
} = re("ellipsis"), ay = {
  key: 0
};
function ty(e, n) {
  var r = oe("var-tooltip");
  return h(), ge(
    r,
    vi(rs(e.tooltip)),
    {
      content: fe(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), O(
          "span",
          ay,
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
var Qu = ne({
  name: "VarEllipsis",
  components: {
    VarTooltip: vr
  },
  props: ey,
  setup(e) {
    var n = M(!1), r = F(() => e.lineClamp ? {
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
      n: ny,
      classes: ry,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Qu.render = ty;
const Yr = Qu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var IS = Yr;
function oy(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function iy(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function ly(e) {
  return ["click", "hover"].includes(e);
}
var sy = {
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
    validator: Ws
  },
  position: {
    type: String,
    default: "right-bottom",
    validator: oy
  },
  direction: {
    type: String,
    default: "top",
    validator: iy
  },
  trigger: {
    type: String,
    default: "click",
    validator: ly
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
  props: sy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = Yv(e, "active", (f, m) => T(e["onUpdate:active"], m)), o = M(null), {
      disabled: i
    } = _t(), l = (f, m, p) => {
      if (f.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (p === 0) {
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
      var f, m, p = cs((m = r.default == null ? void 0 : r.default()) != null ? m : []);
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
        onClick: (g) => l(g, !t.value, p.length),
        onMouseleave: () => s(!1, p.length),
        onMouseenter: () => s(!0, p.length)
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
          onClick: (g) => g.stopPropagation()
        }, [p.map((g) => J("div", {
          class: dn("action")
        }, [g]))]), [[pr, e.show && t.value && p.length]])]
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
var ES = jr;
function uy(e) {
  return ["start", "end"].includes(e);
}
var dy = {
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
    validator: uy
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
function vy(e) {
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
  n: fy
} = re("form");
function cy(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [j(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var _u = ne({
  name: "VarForm",
  props: dy,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = ym(), o = (d) => {
      setTimeout(() => {
        var v = Da(d), f = v === window ? 0 : qi(v), m = qi(d) - f - Le(e.scrollToErrorOffsetY);
        lt(v, {
          top: m,
          animation: So
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = vy(function* () {
        var v = yield Promise.all(a.map((b) => {
          var {
            validate: S
          } = b;
          return S();
        }));
        if (e.scrollToError) {
          var [, f] = Ov(v, (b) => b === !1, e.scrollToError), m = f > -1;
          if (m) {
            var p, g = (p = a[f].instance.proxy) == null ? void 0 : p.$el;
            o(g);
          }
          return !m;
        }
        return v.every((b) => b === !0);
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
      n: fy,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
_u.render = cy;
const Hn = _u;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
Hn.useValidation = bn;
Hn.useForm = wn;
var DS = Hn;
function my(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var py = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: my,
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
  n: hy,
  classes: gy
} = re("image"), yy = ["alt", "title", "lazy-error", "lazy-loading"], by = ["alt", "title", "src"];
function wy(e, n) {
  var r = Me("lazy"), a = Me("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: G({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? we((h(), O(
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
      yy
    )), [[r, e.src]]) : (h(), O(
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
      by
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var xu = ne({
  name: "VarImage",
  directives: {
    Lazy: st,
    Ripple: Re
  },
  props: py,
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
      n: hy,
      classes: gy,
      toSizeUnit: me,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
xu.render = wy;
const Wr = xu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var NS = Wr, ed = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function Cy() {
  var {
    childProviders: e,
    length: n,
    bindChildren: r
  } = un(ed);
  return {
    length: n,
    swipeItems: e,
    bindSwipeItems: r
  };
}
var nd = {
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
function Sy(e) {
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
var ky = 250, $y = 20, {
  n: Ty,
  classes: Py
} = re("swipe"), Oy = ["onClick"];
function Vy(e, n) {
  return h(), O(
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
    }, () => [e.indicator && e.length ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.length, (r, a) => (h(), O(
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
          Oy
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
var rd = ne({
  name: "VarSwipe",
  props: nd,
  setup(e) {
    var n = M(null), r = M(0), a = F(() => e.vertical), t = M(0), o = M(0), i = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Cy(), v = !1, f = -1, m, p, g, b, S, B = (U) => s.find((Z) => {
      var {
        index: K
      } = Z;
      return K.value === U;
    }), w = () => {
      e.loop && (o.value >= 0 && B(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && B(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (B(d.value - 1).setTranslate(0), B(0).setTranslate(0)));
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
    }, C = (U) => {
      var {
        loop: Z
      } = e;
      return U < 0 ? Z ? d.value - 1 : 0 : U > d.value - 1 ? Z ? 0 : d.value - 1 : U;
    }, E = (U) => {
      var Z = o.value >= r.value, K = o.value <= -t.value, A = 0, Y = -(t.value - r.value);
      i.value = !0, (Z || K) && (i.value = !0, o.value = K ? A : Y, B(0).setTranslate(0), B(d.value - 1).setTranslate(0)), Qt(() => {
        i.value = !1, T(U);
      });
    }, $ = () => {
      l.value = C(L(e.initialIndex));
    }, I = () => {
      var {
        autoplay: U
      } = e;
      !U || d.value <= 1 || (V(), f = window.setTimeout(() => {
        W(), I();
      }, L(U)));
    }, V = () => {
      f && clearTimeout(f);
    }, y = (U, Z) => {
      if (U > Z && U > 10)
        return "horizontal";
      if (Z > U && Z > 10)
        return "vertical";
    }, k = (U) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: K
        } = U.touches[0];
        m = Z, p = K, g = performance.now(), v = !0, V(), E(() => {
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
        } = U.touches[0], X = Math.abs(A - m), de = Math.abs(Y - p), pe = y(X, de), Ae = K ? "vertical" : "horizontal";
        if (pe === Ae) {
          U.preventDefault();
          var Ie = b !== void 0 ? A - b : 0, Ze = S !== void 0 ? Y - S : 0;
          b = A, S = Y, o.value += K ? Ze : Ie, w();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: U,
          onChange: Z
        } = e, K = U ? S < p : b < m, A = Math.abs(U ? p - S : m - b), Y = performance.now() - g <= ky && A >= $y, X = Y ? P(K ? l.value + 1 : l.value - 1) : P();
        v = !1, i.value = !1, b = void 0, S = void 0, o.value = X * -r.value;
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
        l.value = C(A + 1), (U == null ? void 0 : U.event) !== !1 && T(K, l.value), E(() => {
          if (A === d.value - 1 && Z) {
            B(0).setTranslate(t.value), o.value = d.value * -r.value;
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
        l.value = C(A - 1), (U == null ? void 0 : U.event) !== !1 && T(K, l.value), E(() => {
          if (A === 0 && Z) {
            B(d.value - 1).setTranslate(-t.value), o.value = r.value;
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
    return u(te), le(() => d.value, /* @__PURE__ */ Sy(function* () {
      yield In(), $(), _();
    })), Za(_), br(V), Ja(V), ka(window, "resize", _), {
      n: Ty,
      classes: Py,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: k,
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
rd.render = Vy;
const Yn = rd;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var AS = Yn;
function My() {
  var {
    bindParent: e,
    index: n,
    parentProvider: r
  } = sn(ed);
  if (!e)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: n,
    swipe: r,
    bindSwipe: e
  };
}
var {
  n: By
} = re("swipe-item");
function Iy(e, n) {
  return h(), O(
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
var ad = ne({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = My(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: By,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
ad.render = Iy;
const jn = ad;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var zS = jn;
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
var Ey = ai({
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
}, Je(nd, ["loop", "indicator", "onChange"]), Je(ht, [
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
  classes: Dy
} = re("image-preview"), Il = 12, El = 200, Ny = 350, Dl = 200, Ay = ["src", "alt"];
function zy(e, n) {
  var r = oe("var-swipe-item"), a = oe("var-swipe"), t = oe("var-icon"), o = oe("var-popup");
  return h(), ge(
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
          default: fe(() => [(h(!0), O(
            Oe,
            null,
            ze(e.images, (i) => (h(), ge(
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
                    Ay
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
            }, () => [e.indicator && e.images.length > 1 ? (h(), O(
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
      ), j(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), ge(
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
var td = ne({
  name: "VarImagePreview",
  components: {
    VarSwipe: Yn,
    VarSwipeItem: jn,
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Ey,
  setup(e) {
    var n = M(!1), r = F(() => {
      var {
        images: V,
        current: y
      } = e, k = V.findIndex((H) => H === y);
      return k >= 0 ? k : 0;
    }), a = M(1), t = M(0), o = M(0), i = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (V, y) => {
      var {
        clientX: k,
        clientY: H
      } = V, {
        clientX: Q,
        clientY: _
      } = y;
      return Math.abs(Math.sqrt(Math.pow(Q - k, 2) + Math.pow(_ - H, 2)));
    }, m = (V, y) => ({
      clientX: V.clientX,
      clientY: V.clientY,
      timestamp: Date.now(),
      target: y
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, Dl);
    }, g = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, b = (V) => d ? f(d, V) <= Il && V.timestamp - d.timestamp <= El && d.target === V.target : !1, S = (V) => !V || !u || !d ? !1 : f(u, d) <= Il && Date.now() - d.timestamp < Ny && (V === u.target || V.parentNode === u.target), B = (V) => {
      v = window.setTimeout(() => {
        S(V.target) && I(), u = null;
      }, El);
    }, w = (V) => {
      v && window.clearTimeout(v);
      var {
        touches: y
      } = V, k = m(y[0], V.currentTarget);
      if (u = k, b(k)) {
        a.value > 1 ? g() : p();
        return;
      }
      d = k;
    }, P = (V) => {
      var {
        offsetWidth: y,
        offsetHeight: k
      } = V, {
        naturalWidth: H,
        naturalHeight: Q
      } = V.querySelector("." + Bl("image"));
      return {
        width: y,
        height: k,
        imageRadio: Q / H,
        rootRadio: k / y,
        zoom: L(e.zoom)
      };
    }, D = (V) => {
      var {
        zoom: y,
        imageRadio: k,
        rootRadio: H,
        width: Q,
        height: _
      } = P(V);
      if (!k)
        return 0;
      var W = k > H ? _ / k : Q;
      return Math.max(0, (y * W - Q) / 2) / y;
    }, C = (V) => {
      var {
        zoom: y,
        imageRadio: k,
        rootRadio: H,
        width: Q,
        height: _
      } = P(V);
      if (!k)
        return 0;
      var W = k > H ? _ : Q * k;
      return Math.max(0, (y * W - _) / 2) / y;
    }, E = (V, y, k) => V + y >= k ? k : V + y <= -k ? -k : V + y, $ = (V) => {
      if (d) {
        var y = V.currentTarget, {
          touches: k
        } = V, H = m(k[0], y);
        if (a.value > 1) {
          var Q = H.clientX - d.clientX, _ = H.clientY - d.clientY, W = D(y), N = C(y);
          t.value = E(t.value, Q, W), o.value = E(o.value, _, N);
        }
        d = H;
      }
    }, I = () => {
      if (a.value > 1) {
        g(), setTimeout(() => T(e["onUpdate:show"], !1), Dl);
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
      classes: Dy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: w,
      handleTouchmove: $,
      handleTouchend: B,
      close: I
    };
  }
});
td.render = zy;
const fr = td;
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
function Ly(e) {
  return e === void 0 && (e = {}), Ke(e) ? ot({}, it, {
    images: [e]
  }) : Ce(e) ? ot({}, it, {
    images: e
  }) : ot({}, it, e);
}
function Mn(e) {
  if (pt()) {
    Mn.close();
    var n = Ly(e), r = Ee(n);
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
var LS = fr, Nt = {
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
  n: Ry,
  classes: Uy
} = re("sticky");
function Fy(e, n) {
  return h(), O(
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
var od = ne({
  name: "VarSticky",
  props: Nt,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), i = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => Le(e.offsetTop)), m, p = () => {
      var {
        cssMode: w,
        disabled: P
      } = e;
      if (!P) {
        var D = 0;
        if (m !== window) {
          var {
            top: C
          } = m.getBoundingClientRect();
          D = C;
        }
        var E = r.value, $ = n.value, {
          top: I,
          left: V
        } = $.getBoundingClientRect(), y = I - D;
        return y <= f.value ? (w || (i.value = $.offsetWidth + "px", l.value = $.offsetHeight + "px", t.value = D + f.value + "px", o.value = V + "px", s.value = E.offsetWidth + "px", u.value = E.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: y,
          isFixed: !1
        });
      }
    }, g = () => {
      if (m) {
        var w = p();
        w && T(e.onScroll, w.offsetTop, w.isFixed);
      }
    }, b = /* @__PURE__ */ function() {
      var w = Al(function* () {
        a.value = !1, yield Lv(), p();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var w = Al(function* () {
        yield In(), m = Da(n.value), m !== window && m.addEventListener("scroll", g), g();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), B = () => {
      m !== window && m.removeEventListener("scroll", g);
    };
    return le(() => e.disabled, b), ln(S), Ja(B), br(B), ka(window, "scroll", g), {
      n: Ry,
      classes: Uy,
      resize: b,
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
od.render = Fy;
const Wn = od;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var RS = Wn, id = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Hy() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(id);
  return {
    length: n,
    indexAnchors: r,
    bindIndexAnchors: e
  };
}
function Yy() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(id);
  if (!r)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: n,
    indexBar: e,
    bindIndexBar: r
  };
}
var jy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Wy,
  classes: Gy
} = re("index-anchor");
function qy(e, n) {
  return h(), ge(
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
var ld = ne({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Wn
  },
  inheritAttrs: !1,
  props: jy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Yy(), t = M(0), o = M(!1), i = F(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (b) => {
      o.value = b;
    }, g = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(g), {
      n: Wy,
      classes: Gy,
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
ld.render = qy;
const Gr = ld;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var US = Gr, Xy = {
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
  n: Ky,
  classes: Zy
} = re("index-bar"), Jy = ["onClick"];
function Qy(e, n) {
  return h(), O(
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
      [(h(!0), O(
        Oe,
        null,
        ze(e.anchorNameList, (r) => (h(), O(
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
          Jy
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
var sd = ne({
  name: "VarIndexBar",
  props: Xy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Hy(), t = M(""), o = M(null), i = M([]), l = M(), s = F(() => e.sticky), u = F(() => e.cssMode), d = F(() => Le(e.stickyOffsetTop)), v = F(() => e.zIndex), f = null, m = {
      active: l,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(m);
    var p = (C, E) => {
      var $ = fi(C) ? C.name.value : C;
      $ === l.value || $ === void 0 || (l.value = $, (E == null ? void 0 : E.event) !== !1 && T(e.onChange, $));
    }, g = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: C
      } = f.getBoundingClientRect(), {
        scrollTop: E
      } = f, {
        top: $
      } = o.value.getBoundingClientRect();
      return E - C + $;
    }, b = () => {
      var C = Jt(f), E = f === window ? document.body.scrollHeight : f.scrollHeight, $ = g();
      r.forEach((I, V) => {
        var y = I.ownTop.value, k = C - y + d.value - $, H = V === r.length - 1 ? E : r[V + 1].ownTop.value - I.ownTop.value;
        k >= 0 && k < H && t.value === "" && (V && !e.cssMode && r[V - 1].setDisabled(!0), I.setDisabled(!1), p(I));
      });
    }, S = /* @__PURE__ */ function() {
      var C = Vt(function* (E) {
        var {
          anchorName: $,
          manualCall: I = !1,
          options: V
        } = E;
        if (I && T(e.onClick, $), $ !== l.value) {
          var y = r.find((_) => {
            var {
              name: W
            } = _;
            return $ === W.value;
          });
          if (y) {
            var k = g(), H = y.ownTop.value - d.value + k, Q = pi(f);
            t.value = $, p($, V), yield lt(f, {
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
        return C.apply(this, arguments);
      };
    }(), B = /* @__PURE__ */ function() {
      var C = Vt(function* () {
        yield In(), f = Da(o.value);
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), w = () => {
      f.addEventListener("scroll", b);
    }, P = () => {
      f.removeEventListener("scroll", b);
    }, D = (C, E) => {
      On(() => S({
        anchorName: C,
        options: E
      }));
    };
    return le(() => n.value, /* @__PURE__ */ Vt(function* () {
      yield In(), r.forEach((C) => {
        var {
          name: E,
          setOwnTop: $
        } = C;
        E.value && i.value.push(E.value), $();
      });
    })), ln(/* @__PURE__ */ Vt(function* () {
      yield B(), w();
    })), Xt(P), br(P), {
      n: Ky,
      classes: Zy,
      barEl: o,
      active: l,
      zIndex: v,
      anchorNameList: i,
      toNumber: L,
      scrollTo: D,
      anchorClick: S
    };
  }
});
sd.render = Qy;
const qr = sd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var FS = qr;
function _y(e) {
  return ["text", "password", "number"].includes(e);
}
var xy = {
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
    validator: _y
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
  classes: eb
} = re("input"), nb = ["id", "disabled", "type", "value", "maxlength", "rows"], rb = ["id", "disabled", "type", "value", "maxlength"], ab = ["for"];
function tb(e, n) {
  var r = oe("var-icon"), a = oe("var-form-details");
  return h(), O(
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
        [e.type === "password" ? (h(), O(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : ee("v-if", !0), e.textarea ? (h(), O(
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
          nb
        )) : (h(), O(
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
          rb
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
          ab
        )],
        2
        /* CLASS */
      ), z(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [j(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), ge(
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
    ), e.line ? (h(), O(
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
var ud = ne({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: xy,
  setup(e) {
    var n = M("var-input-" + Ma().uid), r = M(null), a = M(!1), t = M(!1), o = F(() => e.type === "number" ? "text" : e.type), i = F(() => {
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
    }, p = () => {
      var {
        hint: N,
        modelValue: x
      } = e;
      if (!N && (!Ln(x) || t.value))
        return go("--placeholder-hidden");
      if (N && (!Ln(x) || a.value))
        return go("--placeholder-hint");
    }, g = (N) => {
      a.value = !0, T(e.onFocus, N), m("onFocus");
    }, b = (N) => {
      a.value = !1, T(e.onBlur, N), m("onBlur");
    }, S = (N) => {
      var x = N.target, {
        value: te
      } = x;
      return e.type === "number" && (te = $(te)), V(I(te));
    }, B = () => {
      t.value = !0;
    }, w = (N) => {
      t.value && (t.value = !1, N.target.dispatchEvent(new Event("input")));
    }, P = (N) => {
      if (!t.value) {
        var x = S(N);
        T(e["onUpdate:modelValue"], x), T(e.onInput, x, N), m("onInput");
      }
    }, D = (N) => {
      var x = S(N);
      T(e.onChange, x, N), m("onChange");
    }, C = () => {
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
    }, I = (N) => e.modelModifiers.trim ? N.trim() : N, V = (N) => e.maxlength ? N.slice(0, L(e.maxlength)) : N, y = (N) => {
      var {
        disabled: x,
        readonly: te
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || x || te || N.stopPropagation();
    }, k = () => {
      T(e["onUpdate:modelValue"], ""), f();
    }, H = () => v(e.rules, e.modelValue), Q = () => {
      var N;
      (N = r.value) == null || N.focus();
    }, _ = () => {
      r.value.blur();
    }, W = {
      reset: k,
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
      classes: eb,
      isEmpty: Ln,
      computePlaceholderState: p,
      handleFocus: g,
      handleBlur: b,
      handleInput: P,
      handleChange: D,
      handleClear: C,
      handleClick: E,
      handleTouchstart: y,
      handleCompositionStart: B,
      handleCompositionEnd: w,
      validate: H,
      resetValidation: f,
      reset: k,
      focus: Q,
      blur: _
    };
  }
});
ud.render = tb;
const cr = ud;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var HS = cr;
function ob(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ib(e) {
  return ["always", "hover", "none"].includes(e);
}
var lb = {
  type: {
    type: String,
    default: "default",
    validator: ob
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
    validator: ib
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
  n: sb,
  classes: ub
} = re("link");
function db(e, n) {
  return h(), ge(
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
var dd = ne({
  name: "VarLink",
  props: lb,
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
      n: sb,
      classes: ub,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: me
    };
  }
});
dd.render = db;
const Xr = dd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var YS = Xr, vb = {
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
function fb(e) {
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
  n: cb,
  classes: mb
} = re("list");
function pb(e, n) {
  var r = oe("var-loading"), a = Me("ripple");
  return h(), O(
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
    }, () => [we((h(), O(
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
var vd = ne({
  name: "VarList",
  directives: {
    Ripple: Re
  },
  components: {
    VarLoading: Tn
  },
  props: vb,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      T(e["onUpdate:error"], !1), T(e["onUpdate:loading"], !0), T(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = fb(function* () {
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
      n: cb,
      classes: mb
    };
  }
});
vd.render = pb;
const Kr = vd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var jS = Kr, hb = {
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
  classes: gb,
  n: Rl
} = re("loading-bar");
const yb = ne({
  name: "VarLoadingBar",
  props: hb,
  setup(e) {
    return () => J("div", {
      class: gb(Rl(), [e.error, Rl("--error")]),
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
var fd, cd, fo, md, Ul, pd = {}, bb = {
  value: 0,
  opacity: 0,
  error: !1
}, je = Ee(bb), wb = (e) => {
  Object.assign(je, e);
}, Cb = (e) => {
  Object.assign(je, e), pd = e;
}, Sb = () => {
  Object.keys(pd).forEach((e) => {
    je[e] !== void 0 && (je[e] = void 0);
  });
}, hd = () => {
  Ul || (Ul = !0, _a(yb, je));
}, Di = () => {
  fd = window.setTimeout(() => {
    if (!(je.value >= 95)) {
      var e = Math.random();
      je.value < 70 && (e = Math.round(5 * Math.random())), je.value += e, Di();
    }
  }, 200);
}, Ni = () => {
  window.clearTimeout(cd), window.clearTimeout(fd), window.clearTimeout(fo), window.clearTimeout(md);
}, kb = () => {
  Ni(), je.error = !1, je.value = 0, hd(), fo = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di();
}, gd = () => {
  Ni(), je.value = 100, fo = window.setTimeout(() => {
    je.opacity = 0, cd = window.setTimeout(() => {
      je.error = !1;
    }, 250);
  }, 300);
}, $b = () => {
  Ni(), je.error = !0, je.value === 100 && (je.value = 0), hd(), fo = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di(), md = window.setTimeout(gd, 300);
}, yd = {
  start: kb,
  finish: gd,
  error: $b,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: wb,
  setDefaultOptions: Cb,
  resetDefaultOptions: Sb
}, WS = yd;
const ti = yd;
function Tb(e) {
  return ["click", "hover"].includes(e);
}
function Pb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Ob = {
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
    validator: Tb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Pb
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
  n: Vb,
  classes: Mb
} = re("menu");
function Bb(e, n) {
  return h(), O(
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
    [j(e.$slots, "default"), (h(), ge(
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
var bd = ne({
  name: "VarMenu",
  props: Ob,
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
      resize: p
    } = Zu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: me,
      n: Vb,
      classes: Mb,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: p,
      open: f,
      close: m
    };
  }
});
bd.render = Bb;
const Gn = bd;
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
var GS = Gn, wd = Symbol("SELECT_BIND_OPTION_KEY");
function Ib() {
  var {
    length: e,
    childProviders: n,
    bindChildren: r
  } = un(wd);
  return {
    length: e,
    options: n,
    bindOptions: r
  };
}
function Eb() {
  var {
    index: e,
    parentProvider: n,
    bindParent: r
  } = sn(wd);
  if (!r)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: e,
    select: n,
    bindSelect: r
  };
}
var Db = {
  label: {},
  value: {}
}, {
  n: Nb,
  classes: Ab
} = re("option");
function zb(e, n) {
  var r = oe("var-checkbox"), a = Me("ripple");
  return we((h(), O(
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
    ), e.multiple ? (h(), ge(
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
var Cd = ne({
  name: "VarOption",
  directives: {
    Ripple: Re
  },
  components: {
    VarCheckbox: lr
  },
  props: Db,
  setup(e) {
    var n = M(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: o,
      bindSelect: i
    } = Eb(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d,
      computeLabel: v
    } = o, f = () => {
      n.value = !n.value, d(g);
    }, m = () => d(g), p = (b) => {
      n.value = b;
    }, g = {
      label: a,
      value: t,
      selected: r,
      sync: p
    };
    return le([() => e.label, () => e.value], v), i(g), {
      n: Nb,
      classes: Ab,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: f,
      handleSelect: m
    };
  }
});
Cd.render = zb;
const Zr = Cd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var qS = Zr, Lb = {
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
function Rb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !mt(e);
}
var {
  n: Fl
} = re("overlay");
const Jr = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Lb,
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
        }, Rb(d = s()) ? d : {
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
var XS = Jr, Ub = {
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
  n: Fb,
  classes: Hb
} = re("pagination"), Yb = ["item-mode", "onClick"];
function jb(e, n) {
  var r = oe("var-icon"), a = oe("var-input"), t = oe("var-cell"), o = oe("var-menu"), i = Me("ripple");
  return h(), O(
    "ul",
    {
      class: c(e.n())
    },
    [we((h(), O(
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
    }]]), e.simple ? (h(), O(
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
    )) : (h(!0), O(
      Oe,
      {
        key: 1
      },
      ze(e.pageList, (l, s) => we((h(), O(
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
        Yb
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), we((h(), O(
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
    }]]), e.showSizeChanger ? (h(), O(
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
          menu: fe(() => [(h(!0), O(
            Oe,
            null,
            ze(e.sizeOption, (l, s) => we((h(), ge(
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
    )) : ee("v-if", !0), e.showQuickJumper && !e.simple ? (h(), O(
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
    )) : ee("v-if", !0), e.totalText ? (h(), O(
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
var Sd = ne({
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
  props: Ub,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), i = M(L(e.current) || 1), l = M(L(e.size) || 10), s = M([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(L(e.total) / L(l.value))), v = F(() => {
      var P = l.value * (i.value - 1) + 1, D = Math.min(l.value * i.value, L(e.total));
      return [P, D];
    }), f = F(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (P, D) => nn(P) ? !1 : D === 1 ? t.value : o.value, p = (P, D) => nn(P) ? "basic" : D === 1 ? "head" : "tail", g = (P, D) => {
      P === i.value || e.disabled || (nn(P) ? i.value = P : P === "prev" ? i.value > 1 && (i.value -= 1) : P === "next" ? i.value < d.value && (i.value += 1) : P === "..." && (D === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, b = () => {
      e.disabled || (n.value = !0);
    }, S = (P) => {
      l.value = P, n.value = !1;
    }, B = (P) => {
      var D = /^[1-9][0-9]*$/;
      return D.test(P);
    }, w = (P, D, C) => {
      if (C.target.blur(), B(D)) {
        var E = L(D);
        E > d.value && (E = d.value, a.value = "" + E), E !== i.value && (i.value = E);
      }
      P === "quick" && (r.value = ""), P === "simple" && !B(D) && (a.value = "" + i.value);
    };
    return le([() => e.current, () => e.size], (P) => {
      var [D, C] = P;
      i.value = L(D) || 1, l.value = L(C || 10);
    }), le([i, l, d], (P, D) => {
      var [C, E, $] = P, [I, V] = D, y = [], {
        maxPagerCount: k,
        total: H,
        onChange: Q
      } = e, _ = Math.ceil(L(H) / L(V)), W = $ - (k - u.value) - 1;
      if (a.value = "" + C, $ - 2 > k) {
        if (I === void 0 || $ !== _)
          for (var N = 2; N < k + 2; N++)
            y.push(N);
        if (C <= k && C < W) {
          y = [];
          for (var x = 1; x < k + 1; x++)
            y.push(x + 1);
          t.value = !0, o.value = !1;
        }
        if (C > k && C < W) {
          y = [];
          for (var te = 1; te < k + 1; te++)
            y.push(C + te - u.value);
          t.value = C === 2 && k === 1, o.value = !1;
        }
        if (C >= W) {
          y = [];
          for (var U = 1; U < k + 1; U++)
            y.push($ - (k - U) - 1);
          t.value = !1, o.value = !0;
        }
        y = [1, "...", ...y, "...", $];
      } else
        for (var Z = 1; Z <= $; Z++)
          y.push(Z);
      s.value = y, I !== void 0 && $ > 0 && T(Q, C, E), T(e["onUpdate:current"], C), T(e["onUpdate:size"], E);
    }, {
      immediate: !0
    }), {
      n: Fb,
      classes: Hb,
      pack: Ye,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: p,
      isHideEllipsis: m,
      clickItem: g,
      showMenu: b,
      clickSize: S,
      setPage: w,
      toNumber: L
    };
  }
});
Sd.render = jb;
const Qr = Sd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var KS = Qr, Wb = {
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
  n: Gb,
  classes: qb
} = re("paper");
function Xb(e, n) {
  var r = Me("ripple");
  return we((h(), O(
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
var kd = ne({
  name: "VarPaper",
  directives: {
    Ripple: Re
  },
  props: Wb,
  setup(e) {
    var n = (r) => {
      T(e.onClick, r);
    };
    return {
      n: Gb,
      classes: qb,
      toSizeUnit: me,
      handleClick: n
    };
  }
});
kd.render = Xb;
const _r = kd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var ZS = _r;
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
var Kb = oi({
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
  n: Zb,
  classes: Jb
} = re("picker"), Hl = 300, Qb = 15, Yl = 0, _b = ["onTouchstart", "onTouchmove", "onTouchend"], xb = ["onTransitionend"];
function e0(e, n) {
  var r = oe("var-button");
  return h(), ge(
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
        [e.toolbar ? (h(), O(
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
          [(h(!0), O(
            Oe,
            null,
            ze(e.scrollColumns, (a) => (h(), O(
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
                [(h(!0), O(
                  Oe,
                  null,
                  ze(a.column.texts, (t) => (h(), O(
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
                xb
              )],
              42,
              _b
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
var $d = ne({
  name: "VarPicker",
  components: {
    VarButton: Xe,
    VarPopup: hn
  },
  inheritAttrs: !1,
  props: Kb,
  setup(e) {
    var n = M([]), r = F(() => Le(e.optionHeight)), a = F(() => Le(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), o = F(() => a.value * r.value), i = [], l = (y, k) => {
      k.scrollEl = y;
    }, s = (y) => {
      T(e["onUpdate:show"], y);
    }, u = (y) => {
      var k = r.value + t.value, H = t.value - y.column.texts.length * r.value;
      y.translate >= k && (y.translate = k), y.translate <= H && (y.translate = H);
    }, d = (y, k) => {
      var {
        length: H
      } = y.column.texts;
      return k = k >= H ? H - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (y) => {
      var k = Math.round((t.value - y.translate) / r.value);
      return d(y, k);
    }, f = () => {
      var y = n.value.map((H) => H.column.texts[H.index]), k = n.value.map((H) => H.index);
      return {
        texts: y,
        indexes: k
      };
    }, m = function(y, k, H, Q) {
      Q === void 0 && (Q = !1);
      var _ = t.value - d(y, k) * r.value;
      _ === y.translate && (y.scrolling = !1, !Q && E(y)), y.translate = _, y.duration = H;
    }, p = (y, k, H) => {
      y.translate += Math.abs(k / H) / 3e-3 * (k < 0 ? -1 : 1);
    }, g = (y, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = mo(k.scrollEl);
    }, b = (y, k) => {
      if (k.touching) {
        var {
          clientY: H
        } = y.touches[0], Q = k.prevY !== void 0 ? H - k.prevY : 0;
        k.prevY = H, k.translate += Q, u(k);
        var _ = performance.now();
        _ - k.momentumTime > Hl && (k.momentumTime = _, k.momentumPrevY = k.translate);
      }
    }, S = (y, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var H = k.translate - k.momentumPrevY, Q = performance.now() - k.momentumTime, _ = Math.abs(H) >= Qb && Q <= Hl;
      _ && p(k, H, Q), k.index = v(k), m(k, k.index, _ ? 1e3 : 200);
    }, B = (y) => {
      y.scrolling = !1, E(y);
    }, w = (y) => y.map((k, H) => {
      var Q, _ = Ce(k) ? {
        texts: k
      } : k, W = {
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
    }), P = (y) => {
      var k = [];
      return D(k, y, 0, !0), k;
    }, D = function(y, k, H, Q) {
      if (Q === void 0 && (Q = !1), Ce(k) && k.length) {
        var _, W = Q && (_ = e.cascadeInitialIndexes[y.length]) != null ? _ : 0, N = {
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
            texts: k.map((x) => x[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        y.push(N), m(N, N.index, 0, !0), D(y, N.columns[N.index].children, H + 1, Q);
      }
    }, C = (y) => {
      n.value.splice(n.value.indexOf(y) + 1), D(n.value, y.columns[y.index].children, y.columnIndex + 1);
    }, E = (y) => {
      var {
        cascade: k,
        onChange: H
      } = e;
      k && C(y);
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
        var y = n.value.find((k) => k.scrolling);
        y && (y.translate = mo(y.scrollEl), y.index = v(y), m(y, y.index, 0, !0), y.scrolling = !1, C(y));
      } else
        n.value.forEach((k) => {
          k.translate = mo(k.scrollEl), k.index = v(k), m(k, k.index, 0);
        });
    }, I = () => {
      $();
      var {
        texts: y,
        indexes: k
      } = f();
      i = [...k], T(e.onConfirm, y, k);
    }, V = () => {
      $();
      var {
        texts: y,
        indexes: k
      } = f();
      i = [...k], T(e.onCancel, y, k);
    };
    return le(() => e.columns, (y) => {
      n.value = e.cascade ? P(Fi(y)) : w(Fi(y));
      var {
        indexes: k
      } = f();
      i = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Zb,
      classes: Jb,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Ne,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: g,
      handleTouchmove: b,
      handleTouchend: S,
      handleTransitionend: B,
      confirm: I,
      cancel: V,
      dt: Zt
    };
  }
});
$d.render = e0;
const mr = $d;
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
var JS = mr;
function n0(e) {
  return ["linear", "circle"].includes(e);
}
var r0 = {
  mode: {
    type: String,
    default: "linear",
    validator: n0
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
  n: a0,
  classes: t0
} = re("progress"), o0 = ["viewBox"], i0 = ["cx", "cy", "r", "stroke-width"], l0 = ["cx", "cy", "r", "stroke-width"];
function s0(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), O(
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
        [e.track ? (h(), O(
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
      ), e.label ? (h(), O(
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
    )) : ee("v-if", !0), e.mode === "circle" ? (h(), O(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: G({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: G({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), O(
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
          i0
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
          l0
        )],
        14,
        o0
      )), e.label ? (h(), O(
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
var Td = ne({
  name: "VarProgress",
  props: r0,
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
      n: a0,
      classes: t0,
      toSizeUnit: me,
      multiplySizeUnit: xe,
      linearProps: n,
      circleProps: r
    };
  }
});
Td.render = s0;
const xr = Td;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var QS = xr, u0 = {
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
function d0(e) {
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
  classes: v0
} = re("pull-refresh"), Gl = 150;
function f0(e, n) {
  var r = oe("var-icon");
  return h(), O(
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
var Pd = ne({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: u0,
  setup(e) {
    var n, r, a = M(0), t = M(null), o = M(null), i = M(0), l = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = 0, f = 0, m = M(!0), p = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), g = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: S.value ? e.successBgColor : e.bgColor,
      color: S.value ? e.successColor : e.color
    })), b = F(() => Math.abs(2 * a.value)), S = F(() => u.value === "success"), B = () => new Promise((V) => {
      window.setTimeout(() => {
        m.value = !0, V();
      }, Gl);
    }), w = (V) => {
      var y = "classList" in n ? n : document.body;
      y.classList[V](Wl() + "--lock");
    }, P = (V) => {
      v = V.touches[0].clientY, f = 0;
    }, D = (V) => {
      if (p.value) {
        var y = Jt(n);
        if (!(y > 0)) {
          var k = y === 0, H = V.touches[0];
          f = H.clientY - v, k && f >= 0 && V.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = V.touches[0].clientY), k && l.value > a.value && w("add");
          var Q = (V.touches[0].clientY - i.value) / 2 + a.value;
          l.value = Q >= b.value ? b.value : Q, l.value >= b.value * 0.2 ? (m.value = !1, s.value = "refresh", r = B()) : s.value = "arrow-down";
        }
      }
    }, C = /* @__PURE__ */ function() {
      var V = d0(function* () {
        p.value && (d.value = !0, l.value >= b.value * 0.2 ? (yield r, u.value = "loading", l.value = b.value * 0.3, T(e["onUpdate:modelValue"], !0), T(e.onRefresh), w("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, w("remove");
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
      classes: v0,
      iconHasChanged: m,
      ICON_TRANSITION: Gl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: P,
      touchMove: D,
      touchEnd: C,
      iconName: s,
      controlStyle: g,
      isSuccess: S
    };
  }
});
Pd.render = f0;
const ea = Pd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var _S = ea, c0 = {
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
}, Od = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function m0() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(Od);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function p0() {
  var {
    bindParent: e,
    parentProvider: n,
    index: r
  } = sn(Od);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: h0,
  classes: g0
} = re("radio");
function y0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return h(), O(
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
      [we((h(), O(
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
var Vd = ne({
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
  props: c0,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = p0(), {
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
    } = bn(), p = (C) => {
      Be(() => {
        var {
          validateTrigger: E,
          rules: $,
          modelValue: I
        } = e;
        v(E, C, $, I);
      });
    }, g = (C) => {
      var {
        checkedValue: E,
        onChange: $
      } = e;
      t && n.value === E || (n.value = C, T(e["onUpdate:modelValue"], n.value), T($, n.value), t == null || t.onToggle(E), p("onChange"));
    }, b = (C) => {
      var {
        disabled: E,
        readonly: $,
        uncheckedValue: I,
        checkedValue: V,
        onClick: y
      } = e;
      s != null && s.disabled.value || E || (T(y, C), !(s != null && s.readonly.value || $) && (a.value = !0, g(r.value ? I : V)));
    }, S = (C) => {
      var {
        checkedValue: E,
        uncheckedValue: $
      } = e;
      n.value = C === E ? E : $;
    }, B = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), m();
    }, w = () => f(e.rules, e.modelValue), P = (C) => {
      var {
        uncheckedValue: E,
        checkedValue: $
      } = e, I = ![E, $].includes(C);
      I && (C = r.value ? E : $), g(C);
    };
    le(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var D = {
      sync: S,
      validate: w,
      resetValidation: m,
      reset: B
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
      n: h0,
      classes: g0,
      handleClick: b,
      toggle: P,
      reset: B,
      validate: w,
      resetValidation: m
    };
  }
});
Vd.render = y0;
const na = Vd;
na.install = function(e) {
  e.component(na.name, na);
};
var xS = na;
function b0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var w0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: b0
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
  n: C0,
  classes: S0
} = re("radio-group");
function k0(e, n) {
  var r = oe("var-form-details");
  return h(), O(
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
var Md = ne({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: w0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = m0(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = bn(), u = F(() => o.value), d = (b) => {
      Be(() => {
        var {
          validateTrigger: S,
          rules: B,
          modelValue: w
        } = e;
        i(S, b, B, w);
      });
    }, v = () => r.forEach((b) => {
      var {
        sync: S
      } = b;
      return S(e.modelValue);
    }), f = (b) => {
      T(e["onUpdate:modelValue"], b), T(e.onChange, b), d("onChange");
    }, m = () => l(e.rules, e.modelValue), p = () => {
      T(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var g = {
      onToggle: f,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return T(t, g), a(g), {
      errorMessage: o,
      n: C0,
      classes: S0,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
Md.render = k0;
const ra = Md;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ek = ra, $0 = {
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
} = re("rate"), T0 = ["onClick"];
function P0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.toNumber(e.count), (l) => we((h(), O(
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
          T0
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
var Bd = ne({
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
  props: $0,
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
    } = hr(), s = M(-1), u = (w) => {
      var {
        count: P,
        gap: D
      } = e;
      return {
        color: v(w).color,
        marginRight: w !== L(P) ? me(D) : 0
      };
    }, d = (w) => {
      var {
        name: P,
        color: D
      } = v(w);
      return {
        [et("content")]: !0,
        [et("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [et("--error")]: a.value,
        [et("--primary")]: P !== e.emptyIcon && !D
      };
    }, v = (w) => {
      var {
        modelValue: P,
        disabled: D,
        disabledColor: C,
        color: E,
        half: $,
        emptyColor: I,
        icon: V,
        halfIcon: y,
        emptyIcon: k
      } = e, H = E;
      return (D || n != null && n.disabled.value) && (H = C), w <= L(P) ? {
        color: H,
        name: V
      } : $ && w <= L(P) + 0.5 ? {
        color: H,
        name: y
      } : {
        color: D || n != null && n.disabled.value ? C : I,
        name: k
      };
    }, f = (w, P) => {
      if (e.half) {
        var {
          offsetWidth: D
        } = P.target;
        P.offsetX <= Math.floor(D / 2) && (w -= 0.5);
      }
      T(e["onUpdate:modelValue"], w);
    }, m = () => o(e.rules, L(e.modelValue)), p = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), g = (w, P) => {
      var {
        readonly: D,
        disabled: C,
        onChange: E
      } = e;
      D || C || n != null && n.disabled.value || n != null && n.readonly.value || (f(w, P), T(E, w), p());
    }, b = (w) => (P) => {
      s.value = w, l.value = P;
    }, S = () => {
      T(e["onUpdate:modelValue"], 0), i();
    }, B = {
      reset: S,
      validate: m,
      resetValidation: i
    };
    return T(r, B), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: g,
      hovering: l,
      currentHoveringValue: s,
      createHoverHandler: b,
      reset: S,
      validate: m,
      resetValidation: i,
      toSizeUnit: me,
      toNumber: L,
      n: et
    };
  }
});
Bd.render = P0;
const aa = Bd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var nk = aa;
function O0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var V0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: O0
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
}, M0 = (e) => (Ia(""), e = e(), Ea(), e), B0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, I0 = /* @__PURE__ */ M0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), E0 = [I0];
function D0(e, n) {
  return h(), O("svg", B0, E0);
}
var Id = ne({});
Id.render = D0;
const N0 = Id;
var A0 = (e) => (Ia(""), e = e(), Ea(), e), z0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, L0 = /* @__PURE__ */ A0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), R0 = [L0];
function U0(e, n) {
  return h(), O("svg", z0, R0);
}
var Ed = ne({});
Ed.render = U0;
const F0 = Ed;
var H0 = (e) => (Ia(""), e = e(), Ea(), e), Y0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, j0 = /* @__PURE__ */ H0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), W0 = [j0];
function G0(e, n) {
  return h(), O("svg", Y0, W0);
}
var Dd = ne({});
Dd.render = G0;
const q0 = Dd;
var {
  n: X0,
  classes: K0
} = re("result");
function Z0(e, n) {
  return h(), O(
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
var Nd = ne({
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
      n: X0,
      classes: K0,
      toNumber: L
    };
  }
});
Nd.render = Z0;
const J0 = Nd;
var Q0 = (e) => (Ia(""), e = e(), Ea(), e), _0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, x0 = /* @__PURE__ */ Q0(() => /* @__PURE__ */ z(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), e1 = [x0];
function n1(e, n) {
  return h(), O("svg", _0, e1);
}
var Ad = ne({});
Ad.render = n1;
const r1 = Ad;
var a1 = (e) => (Ia(""), e = e(), Ea(), e), t1 = {
  viewBox: "-4 -4 32 32"
}, o1 = /* @__PURE__ */ a1(() => /* @__PURE__ */ z(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), i1 = [o1];
function l1(e, n) {
  return h(), O("svg", t1, i1);
}
var zd = ne({});
zd.render = l1;
const s1 = zd;
var {
  n: u1,
  classes: d1
} = re("result");
function v1(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [j(e.$slots, "image", {}, () => [e.type ? (h(), O(
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
        [(h(), ge(
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
    )) : ee("v-if", !0)]), j(e.$slots, "title", {}, () => [e.title ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      ae(e.title),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), j(e.$slots, "description", {}, () => [e.description ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      ae(e.description),
      3
      /* TEXT, CLASS */
    )) : ee("v-if", !0)]), e.$slots.footer ? (h(), O(
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
var Ld = ne({
  name: "VarResult",
  components: {
    Info: N0,
    Success: J0,
    Warning: q0,
    Error: F0,
    Question: r1,
    Empty: s1
  },
  props: V0,
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
      n: u1,
      classes: d1,
      toNumber: L,
      toPxNum: Le,
      toSizeUnit: me,
      circleSize: n,
      borderSize: r
    };
  }
});
Ld.render = v1;
const ta = Ld;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var rk = ta;
function f1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function c1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var m1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: f1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: c1
  },
  onClick: R()
}, {
  n: p1,
  classes: h1
} = re("row");
function g1(e, n) {
  return h(), O(
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
var Rd = ne({
  name: "VarRow",
  props: m1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = zm(), t = F(() => {
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
      n: p1,
      classes: h1,
      average: t,
      handleClick: i,
      padStartFlex: zt
    };
  }
});
Rd.render = g1;
const oa = Rd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var ak = oa;
function y1(e) {
  return ["left", "right", "center"].includes(e);
}
var b1 = {
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
    validator: y1
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
  classes: w1
} = re("select"), C1 = {
  key: 1
};
function S1(e, n) {
  var r = oe("var-chip"), a = oe("var-icon"), t = oe("var-menu"), o = oe("var-form-details");
  return h(), O(
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
                }, () => [e.multiple ? (h(), O(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), O(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(h(!0), O(
                      Oe,
                      null,
                      ze(e.labels, (i) => (h(), ge(
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
                  )) : (h(), O(
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
                )) : (h(), O(
                  "span",
                  C1,
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
        [j(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), ge(
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
    ), e.line ? (h(), O(
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
var Ud = ne({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Gn,
    VarChip: sr,
    VarFormDetails: We
  },
  props: b1,
  setup(e) {
    var n = M(null), r = M(!1), a = F(() => e.multiple), t = F(() => e.focusColor), o = M(""), i = M([]), l = F(() => Ln(e.modelValue)), s = M("0px"), u = M(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: m,
      bindOptions: p
    } = Ib(), {
      errorMessage: g,
      validateWithTrigger: b,
      validate: S,
      // expose
      resetValidation: B
    } = bn(), w = M(null), P = () => {
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
        b(A, K, Y, X);
      });
    }, C = (K) => {
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
    }, y = () => {
      var {
        disabled: K,
        readonly: A,
        onBlur: Y
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || A || (T(Y), D("onBlur"));
    }, k = (K) => {
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
        }).map(C) : C(K);
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
        m.forEach((X) => X.sync(Y.includes(C(X))));
      } else
        m.forEach((X) => X.sync(A === C(X)));
      P();
    }, N = () => {
      s.value = I(), u.value = Le(e.offsetY), r.value = !0;
    }, x = () => {
      r.value = !1;
    }, te = () => S(e.rules, e.modelValue), U = () => {
      T(e["onUpdate:modelValue"], e.multiple ? [] : void 0), B();
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
      onSelect: k,
      reset: U,
      validate: te,
      resetValidation: B
    };
    return p(Z), T(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: g,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: w,
      n: yo,
      classes: w1,
      computePlaceholderState: $,
      handleFocus: V,
      handleBlur: y,
      handleClear: H,
      handleClick: Q,
      handleClose: _,
      reset: U,
      validate: te,
      resetValidation: B,
      focus: N,
      blur: x
    };
  }
});
Ud.render = S1;
const ia = Ud;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var tk = ia, k1 = {
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
  n: $1,
  classes: T1
} = re("skeleton");
function P1(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? ee("v-if", !0) : (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [j(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), O(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), O(
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
      )) : ee("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), O(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), O(
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
        )) : ee("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), O(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), O(
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
          )) : ee("v-if", !0), (h(!0), O(
            Oe,
            null,
            ze(e.toNumber(e.rows), (r, a) => (h(), O(
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
    )) : ee("v-if", !0), e.loading && e.fullscreen ? (h(), O(
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
var Fd = ne({
  name: "VarSkeleton",
  props: k1,
  setup() {
    return {
      n: $1,
      classes: T1,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Fd.render = P1;
const la = Fd;
la.install = function(e) {
  e.component(la.name, la);
};
var ok = la;
function O1(e) {
  return ["always", "normal", "never"].includes(e);
}
var De;
(function(e) {
  e.First = "1", e.Second = "2";
})(De || (De = {}));
var V1 = {
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
    validator: O1
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
  classes: M1
} = re("slider"), B1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function I1(e, n) {
  var r = oe("var-hover-overlay"), a = oe("var-form-details"), t = Me("hover");
  return h(), O(
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
      ), (h(!0), O(
        Oe,
        null,
        ze(e.thumbList, (o) => (h(), O(
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
          B1
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
var Hd = ne({
  name: "VarSlider",
  components: {
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  directives: {
    Hover: En
  },
  props: V1,
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
    }), m = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), p = M(null), g = M(0), b = M(!1), S = Ee({
      [De.First]: f(),
      [De.Second]: f()
    }), B = F(() => L(e.max) - L(e.min)), w = F(() => g.value / B.value * L(e.step)), P = F(() => {
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
    }), C = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), E = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), $ = (A) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : S[A].active, I = (A) => {
      var {
        min: Y,
        max: X
      } = e;
      return A < L(Y) ? 0 : A > L(X) ? 100 : (A - L(Y)) / B.value * 100;
    }, V = (A) => {
      if (!nn(A))
        return 0;
      var Y = A;
      Y < Number(e.min) && (Y = Number(e.min)), Y > Number(e.max) && (Y = Number(e.max));
      var X = parseInt("" + Y, 10) === Y;
      return X ? Y : L(Y.toPrecision(5));
    }, y = (A, Y) => {
      C.value || Y.handleHovering(A);
    }, k = (A, Y) => {
      var X = [], {
        step: de,
        range: pe,
        modelValue: Ae,
        onChange: Ie,
        min: Ze
      } = e, Sn = L(de), An = Math.round(A / w.value), Ge = An * Sn + L(Ze), cn = S[Y].percentValue * Sn + L(Ze);
      if (S[Y].percentValue = An, pe && Ce(Ae) && (X = Y === De.First ? [Ge, Ae[1]] : [Ae[0], Ge]), cn !== Ge) {
        var bt = pe ? X.map((wt) => V(wt)) : V(Ge);
        T(Ie, bt), T(e["onUpdate:modelValue"], bt), m();
      }
    }, H = (A) => {
      if (!e.range)
        return De.First;
      var Y = S[De.First].percentValue * w.value, X = S[De.Second].percentValue * w.value, de = Math.abs(A - Y), pe = Math.abs(A - X);
      return de <= pe ? De.First : De.Second;
    }, Q = (A, Y) => {
      g.value || (g.value = p.value.offsetWidth), C.value || (S[Y].active = !0), !(C.value || E.value) && (T(e.onStart), b.value = !0, S[Y].startPosition = A.touches[0].clientX);
    }, _ = (A, Y) => {
      if (!(C.value || E.value || !b.value)) {
        var X = A.touches[0].clientX - S[Y].startPosition + S[Y].currentLeft;
        X <= 0 ? X = 0 : X >= g.value && (X = g.value), k(X, Y);
      }
    }, W = (A) => {
      var {
        range: Y,
        modelValue: X,
        onEnd: de,
        step: pe,
        min: Ae
      } = e;
      if (C.value || (S[A].active = !1), !(C.value || E.value)) {
        var Ie = [];
        S[A].currentLeft = S[A].percentValue * w.value;
        var Ze = S[A].percentValue * L(pe) + L(Ae);
        Y && Ce(X) && (Ie = A === De.First ? [Ze, X[1]] : [X[0], Ze]), T(de, Y ? Ie : Ze), b.value = !1;
      }
    }, N = (A) => {
      if (!(C.value || E.value) && !A.target.closest("." + ql("thumb"))) {
        var Y = A.clientX - Bv(A.currentTarget), X = H(Y);
        k(Y, X), W(X);
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
        return de < L(pe) ? 0 : de > L(Ae) ? B.value / Y : (de - L(pe)) / Y;
      };
      e.range && Ce(A) ? (S[De.First].percentValue = X(A[0]), S[De.First].currentLeft = S[De.First].percentValue * w.value, S[De.Second].percentValue = X(A[1]), S[De.Second].currentLeft = S[De.Second].percentValue * w.value) : nn(A) && (S[De.First].currentLeft = X(A) * w.value);
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
      !x() || !te() || b.value || U(Y, L(X));
    }), le(g, () => U()), ln(() => {
      !x() || !te() || (g.value = p.value.offsetWidth);
    }), {
      n: ql,
      classes: M1,
      Thumbs: De,
      sliderEl: p,
      getFillStyle: D,
      isDisabled: C,
      errorMessage: a,
      thumbsProps: S,
      thumbList: P,
      hover: y,
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
Hd.render = I1;
const sa = Hd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var ik = sa;
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
function E1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function D1(e) {
  return Ai.includes(e);
}
var Yd = {
  type: {
    type: String,
    validator: D1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: E1
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
  n: N1,
  classes: A1
} = re("snackbar"), z1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function L1(e, n) {
  var r = oe("var-icon"), a = oe("var-loading");
  return we((h(), O(
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
        [e.iconName ? (h(), ge(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : ee("v-if", !0), e.type === "loading" ? (h(), ge(
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
var jd = ne({
  name: "VarSnackbarCore",
  components: {
    VarLoading: Tn,
    VarIcon: $e
  },
  props: Yd,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = gt(() => e.show, 1);
    xt(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? z1[e.type] : ""), o = () => {
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
      n: N1,
      classes: A1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
jd.render = L1;
const Wd = jd;
var {
  n: R1
} = re("snackbar");
function U1(e, n) {
  var r = oe("var-snackbar-core");
  return h(), ge(
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
var Gd = ne({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Wd
  },
  props: Yd,
  setup() {
    var {
      disabled: e
    } = _t();
    return {
      n: R1,
      disabled: e
    };
  }
});
Gd.render = U1;
const ua = Gd;
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
function F1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !mt(e);
}
var Ai = ["loading", "success", "warning", "info", "error"], Xl = 0, li = !1, qd, Ka = !1, Xd = {
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
}, yn = Ee([]), zi = Xd, H1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Y1 = {
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
        }, K1(a.position));
        return J(Wd, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return J(Sv, Ve(H1, {
        style: {
          zIndex: fn.zIndex
        },
        onAfterEnter: j1,
        onAfterLeave: W1
      }), F1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, qn = function(e) {
  var n = q1(e), r = Ee(ft({}, zi, n));
  r.show = !0, li || (li = !0, qd = _a(Y1).unmountInstance);
  var {
    length: a
  } = yn, t = {
    id: Xl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ka)
    G1(t);
  else {
    var o = "update-" + Xl;
    X1(r, o);
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
  zi = Xd;
};
qn.Component = ua;
function j1(e) {
  var n = e.getAttribute("data-id"), r = yn.find((a) => a.id === L(n));
  r && T(r.reactiveSnackOptions.onOpened);
}
function W1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = yn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, T(r.reactiveSnackOptions.onClosed));
  var a = yn.every((t) => t.animationEnd);
  a && (T(qd), yn = Ee([]), li = !1);
}
function G1(e) {
  yn.push(e);
}
function q1(e) {
  return e === void 0 && (e = {}), Ke(e) ? {
    content: e
  } : e;
}
function X1(e, n) {
  var [r] = yn;
  r.reactiveSnackOptions = ft({}, r.reactiveSnackOptions, e), r._update = n;
}
function K1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ua.install = function(e) {
  e.component(ua.name, ua);
};
var lk = ua;
const si = qn;
var Kd = (e) => ["mini", "small", "normal", "large"].includes(e), Z1 = (e) => Kd(e) || Ce(e) || nn(e) || Ke(e), J1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Q1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), _1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Z1
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
    validator: J1
  },
  align: {
    type: String,
    validator: Q1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function vn(e) {
  return "calc(" + e + " / 2)";
}
function x1(e, n, r) {
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
  classes: ew
} = re("space");
const da = ne({
  name: "VarSpace",
  props: _1,
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
      } = e, v = (t = T(r.default)) != null ? t : [], f = Kd(d), [m, p] = a(d, f);
      v = cs(v);
      var g = v.length - 1, b = v.map((S, B) => {
        var w = x1(m, p, {
          direction: u,
          justify: i,
          index: B,
          lastIndex: g
        });
        return J("div", {
          style: {
            margin: w
          }
        }, [S]);
      });
      return J("div", {
        class: ew(bo(), bo("$--box"), [o, bo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: zt(i),
          alignItems: zt(l),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [b]);
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
var sk = da, nw = {
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
}, Zd = Symbol("STEPS_BIND_STEP_KEY");
function rw() {
  var {
    bindChildren: e,
    length: n,
    childProviders: r
  } = un(Zd);
  return {
    length: n,
    step: r,
    bindStep: e
  };
}
function aw() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(Zd);
  if (!r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: n,
    steps: e,
    bindSteps: r
  };
}
var {
  n: tw,
  classes: ow
} = re("step"), iw = {
  key: 3
};
function lw(e, n) {
  var r = oe("var-icon");
  return h(), O(
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
          [e.isActive ? (h(), ge(
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
          )) : e.isCurrent && e.currentIcon ? (h(), ge(
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
          )) : e.inactiveIcon ? (h(), ge(
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
          )) : (h(), O(
            "span",
            iw,
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
      ), e.isLastChild ? ee("v-if", !0) : (h(), O(
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
var Jd = ne({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: nw,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = aw(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => i.value === a.value), m = F(() => a.value !== -1 && i.value > a.value), p = {
      index: a
    }, g = () => v(a.value), b = (S) => {
      d.value === "horizontal" && (e.value = S);
    };
    return o(p), le(l, (S) => {
      if (r.value = S - 1 === a.value, e.value) {
        var B = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + B + "px";
      }
    }), {
      n: tw,
      classes: ow,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: g,
      getRef: b
    };
  }
});
Jd.render = lw;
const va = Jd;
va.install = function(e) {
  e.component(va.name, va);
};
var uk = va;
function sw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var uw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: sw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: R()
}, {
  n: dw
} = re("steps");
function vw(e, n) {
  return h(), O(
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
var Qd = ne({
  name: "VarSteps",
  props: uw,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: o,
      bindStep: i
    } = rw(), l = (u) => {
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
      n: dw
    };
  }
});
Qd.render = vw;
const fa = Qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var dk = fa, fw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: cw
} = re("style-provider"), mw = ne({
  name: "VarStyleProvider",
  props: fw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => ns(e.tag, {
      class: cw(),
      style: vs(e.styleVars)
    }, T(r.default));
  }
});
const ca = mw;
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
var vk = ca, pw = {
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
  n: hw,
  classes: gw
} = re("switch");
function yw(e, n) {
  var r = oe("var-loading"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), i = Me("hover");
  return we((h(), O(
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
      ), we((h(), O(
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
          [e.loading ? (h(), ge(
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
var _d = ne({
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
  props: pw,
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
        size: S,
        modelValue: B,
        color: w,
        closeColor: P,
        loadingColor: D,
        activeValue: C
      } = e;
      return {
        handle: {
          width: xe(S),
          height: xe(S),
          backgroundColor: B === C ? w : P,
          color: D
        },
        ripple: {
          left: B === C ? xe(S, 0.5) : "-" + xe(S, 0.5),
          color: B === C ? w : P || "#999",
          width: xe(S, 2),
          height: xe(S, 2)
        },
        track: {
          height: xe(S, 0.72),
          width: xe(S, 1.9),
          borderRadius: xe(S, 2 / 3),
          filter: B === C || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: B === C ? w : P
        },
        switch: {
          height: xe(S, 1.2),
          width: xe(S, 2)
        }
      };
    }), f = F(() => {
      var {
        size: S = "5.333vw"
      } = e;
      return xe(S, 0.4);
    }), m = (S) => {
      var {
        onClick: B,
        onChange: w,
        disabled: P,
        loading: D,
        readonly: C,
        modelValue: E,
        activeValue: $,
        inactiveValue: I,
        "onUpdate:modelValue": V
      } = e;
      if (T(B, S), !(P || D || C || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var y = E === $ ? I : $;
        T(w, y), T(V, y), d();
      }
    }, p = (S) => {
      e.disabled || r != null && r.disabled.value || s(S);
    }, g = () => {
      T(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, b = {
      reset: g,
      validate: u,
      resetValidation: i
    };
    return T(n, b), {
      n: hw,
      classes: gw,
      switchActive: m,
      hovering: l,
      hover: p,
      radius: f,
      styleComputed: v,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
_d.render = yw;
const ma = _d;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var fk = ma, bw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: R()
}, xd = Symbol("TABS_BIND_TAB_KEY");
function ww() {
  var {
    childProviders: e,
    bindChildren: n,
    length: r
  } = un(xd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Cw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(xd);
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
  classes: Sw
} = re("tab");
function kw(e, n) {
  var r = Me("ripple");
  return we((h(), O(
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
var ev = ne({
  name: "VarTab",
  directives: {
    Ripple: Re
  },
  props: bw,
  setup(e) {
    var n = M(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = Cw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = i, g = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(g);
    var b = () => {
      var {
        disabled: w,
        name: P
      } = e;
      return w ? f.value : u.value === P || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, S = () => {
      var {
        disabled: w,
        name: P
      } = e;
      return w ? Mt("$-tab--disabled") : u.value === P || u.value === (o == null ? void 0 : o.value) ? Mt("$-tab--active") : Mt("$-tab--inactive");
    }, B = (w) => {
      var {
        disabled: P,
        name: D,
        onClick: C
      } = e;
      P || (T(C, D ?? o.value, w), s(g));
    };
    return le(() => e.name, p), le(() => e.disabled, p), {
      n: Mt,
      classes: Sw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: b,
      computeColorClass: S,
      handleClick: B
    };
  }
});
ev.render = kw;
const pa = ev;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var ck = pa, nv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function $w() {
  var {
    bindChildren: e,
    childProviders: n,
    length: r
  } = un(nv);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Tw() {
  var {
    parentProvider: e,
    bindParent: n,
    index: r
  } = sn(nv);
  if (!n)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Pw = {
  name: {
    type: [String, Number]
  }
}, {
  n: Ow,
  classes: Vw
} = re("tab-item");
function Mw(e, n) {
  var r = oe("var-swipe-item");
  return h(), ge(
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
var rv = ne({
  name: "VarTabItem",
  components: {
    VarSwipeItem: jn
  },
  props: Pw,
  setup(e) {
    var n = M(!1), r = M(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Tw(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: Ow,
      classes: Vw,
      current: n,
      initSlot: r
    };
  }
});
rv.render = Mw;
const ha = rv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var mk = ha, Bw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Iw,
  classes: Ew
} = re("table");
function Dw(e, n) {
  return h(), O(
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
    ), e.$slots.footer ? (h(), O(
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
var av = ne({
  name: "VarTable",
  props: Bw,
  setup() {
    return {
      toSizeUnit: me,
      n: Iw,
      classes: Ew
    };
  }
});
av.render = Dw;
const ga = av;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var pk = ga;
function Kl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Nw = {
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
  n: Aw,
  classes: zw
} = re("tabs");
function Lw(e, n) {
  return h(), ge(
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
var tv = ne({
  name: "VarTabs",
  components: {
    VarSticky: Wn
  },
  inheritAttrs: !1,
  props: Nw,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), i = M(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = M(null), {
      tabList: m,
      bindTabList: p,
      length: g
    } = ww(), b = (V) => {
      var y, k = (y = V.name.value) != null ? y : V.index.value, {
        active: H,
        onChange: Q,
        onClick: _
      } = e;
      T(e["onUpdate:active"], k), T(_, k), k !== H && T(Q, k);
    }, S = () => m.find((V) => {
      var {
        name: y
      } = V;
      return e.active === y.value;
    }), B = (V) => m.find((y) => {
      var {
        index: k
      } = y;
      return (V ?? e.active) === k.value;
    }), w = () => {
      if (g.value !== 0) {
        var {
          active: V
        } = e;
        if (nn(V)) {
          var y = V > g.value - 1 ? g.value - 1 : 0;
          return T(e["onUpdate:active"], y), B(y);
        }
      }
    }, P = () => {
      o.value = m.length >= 5;
    }, D = (V) => {
      var {
        element: y
      } = V, k = y.value;
      k && (e.layoutDirection === "horizontal" ? (n.value = k.offsetWidth + "px", a.value = k.offsetLeft + "px") : (r.value = k.offsetHeight + "px", t.value = k.offsetTop + "px"));
    }, C = (V) => {
      var {
        element: y
      } = V;
      if (o.value) {
        var k = i.value, H = y.value;
        if (e.layoutDirection === "horizontal") {
          var Q = H.offsetLeft + H.offsetWidth / 2 - k.offsetWidth / 2;
          lt(k, {
            left: Q,
            animation: So
          });
        } else {
          var _ = H.offsetTop + H.offsetHeight / 2 - k.offsetHeight / 2;
          lt(k, {
            top: _,
            animation: So
          });
        }
      }
    }, E = () => {
      var V = S() || B() || w();
      !V || V.disabled.value || (P(), D(V), C(V));
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
      onTabClick: b
    };
    return p(I), le(() => g.value, /* @__PURE__ */ Jl(function* () {
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
      n: Aw,
      classes: zw,
      resize: E,
      resizeSticky: $
    };
  }
});
tv.render = Lw;
const ya = tv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var hk = ya, Rw = {
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
function Uw(e) {
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
  n: Fw
} = re("tabs-items");
function Hw(e, n) {
  var r = oe("var-swipe");
  return h(), ge(
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
var ov = ne({
  name: "VarTabsItems",
  components: {
    VarSwipe: Yn
  },
  props: Rw,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = $w(), o = (f) => r.find((m) => {
      var {
        name: p
      } = m;
      return f === p.value;
    }), i = (f) => r.find((m) => {
      var {
        index: p
      } = m;
      return f === p.value;
    }), l = (f) => o(f) || i(f), s = (f) => {
      var m, p = l(f);
      p && (r.forEach((g) => {
        var {
          setCurrent: b
        } = g;
        return b(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((b) => {
        var {
          index: S
        } = b;
        return S.value === f;
      }), g = (m = p.name.value) != null ? m : p.index.value;
      T(e["onUpdate:active"], g);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ Uw(function* () {
      yield In(), s(e.active);
    })), {
      swipe: n,
      n: Fw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
ov.render = Hw;
const ba = ov;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var gk = ba;
const Yw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, jw = {
  "--badge-default-color": "#555"
}, Ww = {
  "--button-default-color": "#303030"
}, Gw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, qw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Xw = {
  "--checkbox-unchecked-color": "#fff"
}, Kw = {
  "--chip-default-color": "#555"
}, Zw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Jw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Qw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, _w = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, xw = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, eC = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, nC = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, rC = {
  "--popup-content-background-color": "#1e1e1e"
}, aC = {
  "--pull-refresh-background": "#303030"
}, tC = {
  "--radio-unchecked-color": "#fff"
}, oC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, iC = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, lC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, sC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, uC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, dC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, vC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, fC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, cC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, mC = {
  "--tabs-background": "#1e1e1e"
}, pC = {
  "--app-bar-color": "#272727"
}, hC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, gC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, yC = {
  "--menu-background-color": "#272727"
}, bC = {
  "--breadcrumb-inactive-color": "#aaa"
}, wC = {
  "--paper-background": "#303030"
}, CC = {
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
const SC = ui({
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
}, Ww, qw, Gw, fC, Jw, lC, mC, dC, rC, Qw, Yw, Kw, jw, cC, Zw, aC, uC, sC, eC, vC, xw, iC, tC, Xw, _w, nC, pC, hC, gC, yC, oC, bC, wC, CC);
var kC = {
  dark: SC
}, yk = null;
const di = kC;
var pn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], _l = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function $C(e) {
  return ["ampm", "24hr"].includes(e);
}
var TC = {
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
    validator: $C
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
}, iv = (e, n) => e === "24hr" || n === "am", Li = (e, n, r) => {
  var a = pn.findIndex((o) => L(o) === L(r)), t = iv(e, n) ? r : en[a];
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
}, lv = (e) => {
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
      hour: p,
      minute: g
    } = an(l);
    f = p === v && a > g;
  }
  if (!l && s) {
    var {
      hour: b,
      minute: S
    } = an(s);
    f = b === v && a < S;
  }
  if (l && s) {
    var {
      hour: B,
      minute: w
    } = an(l), {
      hour: P,
      minute: D
    } = an(s);
    f = P === v && a < D || B === v && a > w;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, sv = (e) => {
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
  } = Li(t, o, i), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: g,
      minute: b,
      second: S
    } = an(s);
    m = g === f && b < l || b === l && a > S;
  }
  if (!s && u) {
    var {
      hour: B,
      minute: w,
      second: P
    } = an(u);
    m = B === f && w > l || w === l && a > P;
  }
  if (s && u) {
    var {
      hour: D,
      minute: C,
      second: E
    } = an(s), {
      hour: $,
      minute: I,
      second: V
    } = an(u);
    m = D === f && C < l || $ === f && I > l || D === f && C === l && a > E || $ === f && I === l && a < V;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: PC,
  classes: OC
} = re("time-picker");
function VC(e, n) {
  return h(), O(
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
    ), (h(!0), O(
      Oe,
      null,
      ze(e.timeScales, (r, a) => (h(), O(
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
    )), e.format === "24hr" && e.type === "hour" ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.hours24, (r, a) => (h(), O(
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
var uv = ne({
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
    } = n, a = M(null), t = M([]), o = M([]), i = F(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = F(() => {
      if (e.rad !== void 0) {
        var b = e.rad / 30;
        return b >= 0 ? b : b + 12;
      }
    }), s = F(() => e.type === "hour" ? pn : _l), u = (b, S) => {
      var B;
      b = (B = b) != null ? B : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? lv : sv, P = {
        time: L(b),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return S && e.type === "minute" && Reflect.deleteProperty(P, "minute"), w(P);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var b = e.isInner ? en[l.value] : s.value[l.value];
      return s.value === _l ? u() ? "#bdbdbd" : e.color : f(b) ? "#bdbdbd" : e.color;
    }, v = (b, S) => S ? l.value === b && e.isInner : l.value === b && (!e.isInner || e.type !== "hour"), f = (b) => {
      if (e.type === "hour") {
        if (iv(e.format, e.ampm))
          return t.value.includes(b);
        var S = pn.findIndex((B) => B === b);
        return o.value.includes(S);
      }
      return u(b, !0);
    }, m = (b, S, B) => {
      var w = 2 * Math.PI / 12 * b - Math.PI / 2, P = 50 * (1 + Math.cos(w)), D = 50 * (1 + Math.sin(w)), C = () => v(b, B) ? f(S) ? {
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
      } = C();
      return {
        left: P + "%",
        top: D + "%",
        backgroundColor: E,
        color: $
      };
    }, p = () => {
      var {
        width: b,
        height: S
      } = a.value.getBoundingClientRect();
      return {
        width: b,
        height: S
      };
    }, g = () => {
      if (l.value !== void 0) {
        var b = e.ampm === "am" ? pn : en;
        return Sa(b[l.value], 2, "0");
      }
    };
    return le([l, () => e.isInner], (b, S) => {
      var [B, w] = b, [P, D] = S, C = B === P && w === D;
      if (!(C || e.type !== "hour" || l.value === void 0)) {
        var E = w ? en[l.value] : g(), $ = e.useSeconds ? ":" + e.time.second : "", I = E + ":" + e.time.minute + $;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), le(() => e.rad, (b, S) => {
      if (!(e.type === "hour" || b === void 0 || S === void 0)) {
        var B = b / 6 >= 0 ? b / 6 : b / 6 + 60, w = S / 6 >= 0 ? S / 6 : S / 6 + 60;
        if (B !== w) {
          var P, {
            hourStr: D
          } = Li(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var C = ie().minute(B).format("mm"), E = e.useSeconds ? ":" + e.time.second : "";
            P = D + ":" + C + E;
          }
          if (e.type === "second") {
            var $ = ie().second(B).format("ss"), I = e.useSeconds ? ":" + $ : "";
            P = D + ":" + e.time.minute + I;
          }
          r("update", P);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (b) => {
      var [S, B, w] = b;
      if (t.value = [], S && !B) {
        var {
          hour: P
        } = an(S), D = pn.filter((N) => L(N) > P), C = en.filter((N) => L(N) > P);
        t.value = [...D, ...C];
      }
      if (!S && B) {
        var {
          hour: E
        } = an(B), $ = pn.filter((N) => L(N) < E), I = en.filter((N) => L(N) < E);
        t.value = [...$, ...I];
      }
      if (S && B) {
        var {
          hour: V
        } = an(S), {
          hour: y
        } = an(B), k = pn.filter((N) => L(N) < y || L(N) > V), H = en.filter((N) => L(N) < y || L(N) > V);
        t.value = [...k, ...H];
      }
      if (w != null && w.hours) {
        var {
          hours: Q
        } = w, _ = pn.filter((N) => !Q(L(N))), W = en.filter((N) => !Q(L(N)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ..._, ...W])];
      }
      o.value = t.value.map((N) => en.findIndex((x) => N === x)).filter((N) => N >= 0);
    }, {
      immediate: !0
    }), {
      n: PC,
      classes: OC,
      hours24: en,
      timeScales: s,
      inner: a,
      handStyle: i,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: m,
      activeItemIndex: l
    };
  }
});
uv.render = VC;
const MC = uv;
var {
  n: BC,
  classes: IC
} = re("time-picker"), EC = (e) => (Ia(""), e = e(), Ea(), e), DC = /* @__PURE__ */ EC(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), NC = {
  key: 0
};
function AC(e, n) {
  var r = oe("clock");
  return h(), O(
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
        ), DC, z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), O("span", NC, ":")) : ee("v-if", !0), e.useSeconds ? (h(), O(
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
      ), e.format === "ampm" ? (h(), O(
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
            default: fe(() => [(h(), ge(
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
var dv = ne({
  name: "VarTimePicker",
  components: {
    Clock: MC
  },
  props: TC,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), i = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), p = M(!1), g = M(!1), b = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), S = Ee({
      x: 0,
      y: 0
    }), B = Ee({
      x: [],
      y: []
    }), w = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), P = (U) => {
      T(e["onUpdate:modelValue"], U), T(e.onChange, U);
    }, D = (U) => U * 57.29577951308232, C = (U) => {
      l.value = !1, g.value = !1, f.value = U;
    }, E = (U) => {
      var {
        disableHour: Z
      } = a.value, K = pn.findIndex((X) => L(X) === L(b.value.hour)), A = U === "am" ? pn : en, Y = [...A.slice(K), ...A.slice(0, K)];
      return Y.find((X, de) => (o.value = de !== 0, !Z.includes(X)));
    }, $ = (U) => {
      if (!e.readonly) {
        m.value = U;
        var Z = E(U);
        if (Z) {
          var K = e.useSeconds ? ":" + b.value.second : "", A = Sa(Z, 2, "0") + ":" + b.value.minute + K;
          P(A);
        }
      }
    }, I = (U, Z) => {
      var K = U >= B.x[0] && U <= B.x[1], A = Z >= B.y[0] && Z <= B.y[1];
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
    }, y = (U) => {
      var Z = U / 30;
      return Z >= 0 ? Z : Z + 12;
    }, k = () => {
      var {
        width: U,
        height: Z
      } = a.value.getSize(), K = S.x - U / 2 - 8, A = S.x + U / 2 + 8, Y = S.y - Z / 2 - 8, X = S.y + Z / 2 + 8;
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
      var Y = Math.round(K / 30) * 30 + 90, X = y(Y), de = t.value ? pn[X] : en[X];
      if (A.includes(de) || (t.value = e.format === "24hr" ? I(U, Z) : !1), t.value === i.value) {
        var pe = t.value || m.value === "pm" ? en[X] : pn[X];
        p.value = A.includes(pe), !p.value && (u.value = Y, l.value = !0);
      }
    }, Q = (U) => {
      var {
        disableHour: Z
      } = a.value, K = Math.round(U / 6) * 6 + 90, A = K / 6 >= 0 ? K / 6 : K / 6 + 60, Y = {
        time: A,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      g.value = lv(Y), !g.value && (d.value = K, s.value = !0);
    }, _ = (U) => {
      var {
        disableHour: Z
      } = a.value, K = Math.round(U / 6) * 6 + 90, A = K / 6 >= 0 ? K / 6 : K / 6 + 60, Y = {
        time: A,
        format: e.format,
        ampm: m.value,
        hour: b.value.hour,
        minute: L(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      sv(Y) || (v.value = K);
    }, W = () => {
      var {
        left: U,
        top: Z,
        width: K,
        height: A
      } = n.value.getBoundingClientRect();
      if (S.x = U + K / 2, S.y = Z + A / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Y,
          rangeXMax: X,
          rangeYMin: de,
          rangeYMax: pe
        } = k();
        B.x = [Y, X], B.y = [de, pe];
      }
    }, N = (U) => {
      if (U.preventDefault(), !e.readonly) {
        W();
        var {
          clientX: Z,
          clientY: K
        } = U.touches[0], A = Z - S.x, Y = K - S.y, X = Math.round(D(Math.atan2(Y, A)));
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
        u.value = (Y === "12" ? 0 : L(Y)) * 30, d.value = L(de) * 6, v.value = L(pe) * 6, b.value = V(U), e.format !== "24hr" && (m.value = Sa("" + Z, 2, "0") === X && en.includes(X) ? "pm" : "am"), t.value = e.format === "24hr" && en.includes(X);
      }
    }, {
      immediate: !0
    }), {
      n: BC,
      classes: IC,
      getRad: w,
      time: b,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: N,
      checkPanel: C,
      checkAmpm: $,
      end: x,
      update: P,
      changePreventUpdate: te
    };
  }
});
dv.render = AC;
const wa = dv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var bk = wa, zC = {
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
  n: LC,
  classes: RC
} = re("uploader"), UC = 0, FC = ["onClick"], HC = ["onClick"], YC = ["src", "alt"], jC = ["multiple", "accept", "capture", "disabled"], WC = ["src"];
function GC(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = oe("var-popup"), i = Me("ripple"), l = Me("hover");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [z(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), O(
        Oe,
        null,
        ze(e.files, (s) => we((h(), O(
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
          ), e.removable ? (h(), O(
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
            HC
          )) : ee("v-if", !0), s.cover ? (h(), O(
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
            YC
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
          FC
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? we((h(), O(
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
          jC
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
          return [e.currentPreview && e.isHTMLSupportVideo((s = e.currentPreview) == null ? void 0 : s.url) ? (h(), O(
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
            WC
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
var vv = ne({
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
  props: zC,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = F(() => {
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
    }), p = (N) => {
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
    }, g = (N) => ({
      id: UC++,
      url: "",
      cover: "",
      name: N.name,
      file: N
    }), b = (N) => {
      var x = N.target, {
        files: te
      } = x;
      return Array.from(te);
    }, S = (N) => new Promise((x) => {
      var te = new FileReader();
      te.onload = () => {
        var U = te.result;
        N.file.type.startsWith("image") && (N.cover = U), N.url = U, x(N);
      }, te.readAsDataURL(N.file);
    }), B = (N) => N.map(S), w = (N) => {
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
          }, Ae = b(x), Ie = Ae.map(g);
          Ie = te != null ? de(Ie) : Ie, Ie = U != null ? pe(Ie) : Ie;
          var Ze = yield Promise.all(B(Ie)), Sn = yield Promise.all(w(Ze)), An = Sn.filter((Ge) => {
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
          T(A, Ee(x)), k("onRemove"), T(e["onUpdate:modelValue"], X);
        }
      });
      return function(te) {
        return N.apply(this, arguments);
      };
    }(), C = () => e.modelValue.filter((N) => N.state === "success"), E = () => e.modelValue.filter((N) => N.state === "error"), $ = () => e.modelValue.filter((N) => N.state === "loading"), I = () => {
      n.value.click();
    }, V = () => {
      a.value = null, r.value = !1, Mn.close();
    }, y = {
      getSuccess: C,
      getError: E,
      getLoading: $
    }, k = (N) => {
      Be(() => {
        var {
          validateTrigger: x,
          rules: te,
          modelValue: U
        } = e;
        s(x, N, te, U, y);
      });
    }, H = !1, Q = () => u(e.rules, e.modelValue, y), _ = () => {
      H = !0, T(e["onUpdate:modelValue"], []), d();
    }, W = {
      validate: Q,
      resetValidation: d,
      reset: _
    };
    return T(i, W), le(() => e.modelValue, () => {
      !H && k("onChange"), H = !1;
    }, {
      deep: !0
    }), {
      n: LC,
      classes: RC,
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
      preview: p,
      handleChange: P,
      handleRemove: D,
      getSuccess: C,
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
vv.render = GC;
const Ca = vv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var wk = Ca;
const qC = "2.9.2";
function XC(e) {
  $a.install && e.use($a), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), or.install && e.use(or), Or.install && e.use(Or), Vr.install && e.use(Vr), Mr.install && e.use(Mr), Br.install && e.use(Br), Xe.install && e.use(Xe), Ir.install && e.use(Ir), Er.install && e.use(Er), ir.install && e.use(ir), lr.install && e.use(lr), Dr.install && e.use(Dr), sr.install && e.use(sr), Nr.install && e.use(Nr), Ar.install && e.use(Ar), zr.install && e.use(zr), fn.install && e.use(fn), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Fr.install && e.use(Fr), Ta.install && e.use(Ta), Hr.install && e.use(Hr), Yr.install && e.use(Yr), jr.install && e.use(jr), Hn.install && e.use(Hn), We.install && e.use(We), En.install && e.use(En), tn.install && e.use(tn), $e.install && e.use($e), Wr.install && e.use(Wr), Mn.install && e.use(Mn), Gr.install && e.use(Gr), qr.install && e.use(qr), cr.install && e.use(cr), st.install && e.use(st), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Tn.install && e.use(Tn), ti.install && e.use(ti), Mo.install && e.use(Mo), Gn.install && e.use(Gn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), Va.install && e.use(Va), hn.install && e.use(hn), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), Re.install && e.use(Re), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), si.install && e.use(si), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), Wn.install && e.use(Wn), ct.install && e.use(ct), Yn.install && e.use(Yn), jn.install && e.use(jn), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), di.install && e.use(di), wa.install && e.use(wa), vr.install && e.use(vr), Ca.install && e.use(Ca);
}
const Ck = {
  version: qC,
  install: XC,
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
  eS as _ActionSheetComponent,
  nS as _AppBarComponent,
  aS as _AvatarComponent,
  tS as _AvatarGroupComponent,
  uS as _BackTopComponent,
  dS as _BadgeComponent,
  vS as _BottomNavigationComponent,
  fS as _BottomNavigationItemComponent,
  cS as _BreadcrumbComponent,
  mS as _BreadcrumbsComponent,
  sS as _ButtonComponent,
  pS as _ButtonGroupComponent,
  hS as _CardComponent,
  gS as _CellComponent,
  bS as _CheckboxComponent,
  wS as _CheckboxGroupComponent,
  CS as _ChipComponent,
  SS as _ColComponent,
  kS as _CollapseComponent,
  $S as _CollapseItemComponent,
  ZC as _ContextComponent,
  TS as _CountdownComponent,
  PS as _CounterComponent,
  OS as _DatePickerComponent,
  VS as _DialogComponent,
  MS as _DividerComponent,
  IS as _EllipsisComponent,
  ES as _FabComponent,
  DS as _FormComponent,
  yS as _FormDetailsComponent,
  lS as _HoverComponent,
  iS as _HoverOverlayComponent,
  _C as _IconComponent,
  NS as _ImageComponent,
  LS as _ImagePreviewComponent,
  US as _IndexAnchorComponent,
  FS as _IndexBarComponent,
  HS as _InputComponent,
  rS as _LazyComponent,
  YS as _LinkComponent,
  jS as _ListComponent,
  WS as _LoadingBarComponent,
  oS as _LoadingComponent,
  xC as _LocaleComponent,
  GS as _MenuComponent,
  qS as _OptionComponent,
  XS as _OverlayComponent,
  KS as _PaginationComponent,
  ZS as _PaperComponent,
  JS as _PickerComponent,
  QC as _PopupComponent,
  QS as _ProgressComponent,
  _S as _PullRefreshComponent,
  xS as _RadioComponent,
  ek as _RadioGroupComponent,
  nk as _RateComponent,
  rk as _ResultComponent,
  JC as _RippleComponent,
  ak as _RowComponent,
  tk as _SelectComponent,
  ok as _SkeletonComponent,
  ik as _SliderComponent,
  lk as _SnackbarComponent,
  sk as _SpaceComponent,
  uk as _StepComponent,
  dk as _StepsComponent,
  RS as _StickyComponent,
  vk as _StyleProviderComponent,
  AS as _SwipeComponent,
  zS as _SwipeItemComponent,
  fk as _SwitchComponent,
  ck as _TabComponent,
  mk as _TabItemComponent,
  pk as _TableComponent,
  hk as _TabsComponent,
  gk as _TabsItemsComponent,
  yk as _ThemesComponent,
  bk as _TimePickerComponent,
  BS as _TooltipComponent,
  wk as _UploaderComponent,
  rf as actionSheetProps,
  yi as add,
  cf as appBarProps,
  Rf as avatarGroupProps,
  Ef as avatarProps,
  pc as backTopProps,
  Cc as badgeProps,
  Ic as bottomNavigationItemProps,
  Tc as bottomNavigationProps,
  Lc as breadcrumbProps,
  jc as breadcrumbsProps,
  sc as buttonProps,
  em as cardProps,
  im as cellProps,
  km as checkboxGroupProps,
  pm as checkboxProps,
  Mm as chipProps,
  Am as colProps,
  Gm as collapseItemProps,
  Hm as collapseProps,
  Zm as countdownProps,
  Gp as counterProps,
  fh as datePickerProps,
  Ck as default,
  Fe as defaultLazyOptions,
  Mh as dialogProps,
  Lh as dividerProps,
  Cs as enUS,
  dm as formDetailsProps,
  dy as formProps,
  bs as iconProps,
  Ps as imageCache,
  Ey as imagePreviewProps,
  py as imageProps,
  jy as indexAnchorProps,
  Xy as indexBarProps,
  xy as inputProps,
  XC as install,
  lb as linkProps,
  vb as listProps,
  hb as loadingBarProps,
  nr as loadingProps,
  Ob as menuProps,
  ks as merge,
  Db as optionProps,
  Lb as overlayProps,
  Ye as pack,
  Ss as packs,
  Ub as paginationProps,
  Wb as paperProps,
  Kb as pickerProps,
  ht as popupProps,
  r0 as progressProps,
  u0 as pullRefreshProps,
  w0 as radioGroupProps,
  c0 as radioProps,
  $0 as rateProps,
  V0 as resultProps,
  m1 as rowProps,
  b1 as selectProps,
  k1 as skeletonProps,
  V1 as sliderProps,
  Yd as snackbarProps,
  _1 as spaceProps,
  nw as stepProps,
  uw as stepsProps,
  Nt as stickyProps,
  fw as styleProviderProps,
  nd as swipeProps,
  pw as switchProps,
  Pw as tabItemProps,
  bw as tabProps,
  Bw as tableProps,
  Rw as tabsItemsProps,
  Nw as tabsProps,
  TC as timePickerProps,
  Zg as tooltipProps,
  zC as uploaderProps,
  bi as use,
  hr as useHoverOverlay,
  gi as useLocale,
  qC as version,
  hi as zhCN
};
