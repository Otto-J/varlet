import { reactive as Be, onMounted as Gt, nextTick as Me, onActivated as Xa, isRef as mv, watch as le, onBeforeUnmount as qt, onDeactivated as hr, unref as Ua, inject as pv, getCurrentInstance as Ka, computed as F, provide as hv, isVNode as ct, Comment as gv, Fragment as Oe, ref as M, createApp as yv, h as ns, onBeforeMount as bv, onUnmounted as Za, defineComponent as ee, createVNode as Q, Teleport as Pa, Transition as De, withDirectives as we, vShow as fr, mergeProps as Ve, openBlock as h, createBlock as ge, resolveDynamicComponent as Ja, normalizeClass as c, normalizeStyle as q, resolveComponent as te, resolveDirective as Ie, withCtx as ve, createElementVNode as N, renderSlot as W, toDisplayString as re, createElementBlock as O, renderList as Ae, createCommentVNode as x, onUpdated as Xt, createTextVNode as be, pushScopeId as Oa, popScopeId as Va, withModifiers as Mn, normalizeProps as vi, guardReactiveProps as rs, vModelText as wv, toRefs as Cv, withKeys as Ui, toRaw as Fi, TransitionGroup as Sv } from "vue";
var as = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, XC = Be(as);
const fn = Be(as), Ze = (e) => typeof e == "string", Co = (e) => typeof e == "boolean", rn = (e) => typeof e == "number", fi = (e) => Object.prototype.toString.call(e) === "[object Object]", kv = (e) => typeof e == "object" && e !== null, ci = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), $v = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ze(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Co(e) ? Number(e) : e, Nt = (e, n) => {
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
}, mt = () => typeof window < "u", Hi = (e) => [...new Set(e)], ts = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Tv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Pv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Yi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ji = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Ov = (e) => {
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
      this.has(r) && Nt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, So = (e) => e, Wi = (e) => Math.pow(e, 3), os = (e) => e < 0.5 ? Wi(e * 2) / 2 : 1 - Wi((1 - e) * 2) / 2, Kt = (e, n) => e ?? n, is = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ba = function(e, n, r) {
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
function Vv(e) {
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
function Mv(e) {
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
function Zt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function pi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Bv(e) {
  return ko.apply(this, arguments);
}
function ko() {
  return ko = Vv(function* (e) {
    yield Bn();
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
function Ma(e) {
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
function Iv(e) {
  for (var n = [], r = e; r !== window; )
    r = Ma(r), n.push(r);
  return n;
}
function ls(e, n) {
  if (Ze(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (kv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var ss = (e) => Ze(e) && e.endsWith("rem"), Ev = (e) => Ze(e) && e.endsWith("px") || rn(e), Dv = (e) => Ze(e) && e.endsWith("%"), us = (e) => Ze(e) && e.endsWith("vw"), ds = (e) => Ze(e) && e.endsWith("vh"), Nv = (e) => Ze(e) && e.startsWith("calc("), Av = (e) => Ze(e) && e.startsWith("var("), Le = (e) => {
  if (rn(e))
    return e;
  if (Ev(e))
    return +e.replace("px", "");
  if (us(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ds(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (ss(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ze(e) ? L(e) : 0;
}, pe = (e) => {
  if (e != null)
    return Dv(e) || us(e) || ds(e) || ss(e) || Nv(e) || Av(e) ? e : Le(e) + "px";
}, en = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = pe(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Pn(e) {
  var n = is();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Xi(e) {
  var n = is();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Jt(e) {
  Pn(() => {
    Pn(e);
  });
}
function Bn() {
  return new Promise((e) => {
    Pn(() => {
      Pn(e);
    });
  });
}
function zv() {
  return new Promise((e) => {
    Pn(e);
  });
}
function it(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = Zt(e), s = pi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), Pn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Pn(d);
  });
}
function vs(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Tv(a);
    return n[o] = t, n;
  }, {});
}
function Lv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function At(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ln(e) {
  let n = !1;
  Gt(() => {
    e(), Me(() => {
      n = !0;
    });
  }), Xa(() => {
    n && e();
  });
}
function wa(e, n, r, a = {}) {
  if (!mt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let i = !1, l = !1;
  const s = (f) => {
    if (i || l)
      return;
    const m = Ua(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), i = !0);
  }, u = (f) => {
    if (!i || l)
      return;
    const m = Ua(f);
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
  }), qt(() => {
    u(e);
  }), hr(() => {
    u(e);
  }), v;
}
function fs(e, n, r) {
  if (!mt())
    return;
  wa(document, n, (t) => {
    const o = Ua(e);
    o && !o.contains(t.target) && r(t);
  });
}
var Rv = globalThis && globalThis.__rest || function(e, n) {
  var r = {};
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) && n.indexOf(a) < 0 && (r[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var t = 0, a = Object.getOwnPropertySymbols(e); t < a.length; t++)
      n.indexOf(a[t]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[t]) && (r[a[t]] = e[a[t]]);
  return r;
};
function Uv(e) {
  const n = Ka();
  return e in n.provides;
}
function sn(e) {
  if (!Uv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = pv(e), { childInstances: r, collect: a, clear: t } = n, o = Rv(n, ["childInstances", "collect", "clear"]), i = Ka();
  return {
    index: F(() => r.indexOf(i)),
    parentProvider: o,
    bindParent: (u) => {
      Gt(() => {
        Me().then(() => {
          a(i, u);
        });
      }), qt(() => {
        Me().then(() => {
          t(i, u);
        });
      });
    }
  };
}
function Fv(e) {
  const n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      ct(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function un(e) {
  const n = Ka(), r = Be([]), a = [], t = F(() => r.length), o = () => {
    const u = Fv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, i = (u, d) => {
    r.push(u), a.push(d), o();
  }, l = (u, d) => {
    Nt(r, u), Nt(a, d);
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
function Hv(e) {
  var n = yv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Qa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => ns(e, $o({}, n, r));
    }
  }, {
    unmount: t
  } = Hv(a);
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
function Yv(e) {
  wa(window, "hashchange", e), wa(window, "popstate", e);
}
function Qt() {
  var e = M(!1);
  return Xa(() => {
    e.value = !1;
  }), hr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
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
function U(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function zt() {
  return zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, zt.apply(this, arguments);
}
var {
  n: ms
} = ne("ripple"), Ji = 250;
function jv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Wv(e, n) {
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
      } = Wv(this, e), s = document.createElement("div");
      s.classList.add(ms()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), jv(this), this.appendChild(s), window.setTimeout(() => {
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
  Lv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Gv(e, n) {
  var r, a, t;
  e._ripple = zt({
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
function qv(e) {
  e.removeEventListener("touchstart", ps), e.removeEventListener("touchmove", hs), e.removeEventListener("dragstart", To), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Xv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : fn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = zt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var gs = {
  mounted: Gv,
  unmounted: qv,
  updated: Xv,
  install(e) {
    e.directive("ripple", this);
  }
}, KC = gs;
const Re = gs;
function Kv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var pt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Kv
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOverlay: U(),
  "onUpdate:show": U(),
  // internal for Dialog
  onRouteChange: U()
};
function ys() {
  var e = Object.keys(fn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function wt(e) {
  fn.locks[e] = 1, ys();
}
function Ct(e) {
  delete fn.locks[e], ys();
}
function _t(e, n) {
  var {
    uid: r
  } = Ka();
  n && le(n, (a) => {
    a === !1 ? Ct(r) : a === !0 && e() === !0 && wt(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? wt(r) : Ct(r));
  }), bv(() => {
    n && n() === !1 || e() === !0 && wt(r);
  }), Za(() => {
    n && n() === !1 || e() === !0 && Ct(r);
  }), Xa(() => {
    n && n() === !1 || e() === !0 && wt(r);
  }), hr(() => {
    n && n() === !1 || e() === !0 && Ct(r);
  });
}
function ht(e, n) {
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
function Zv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ct(e);
}
var {
  n: Dn,
  classes: po
} = ne("popup");
const pn = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: pt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ht(() => e.show, 3), {
      disabled: o
    } = Qt(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      T(v), d && T(e["onUpdate:show"], !1);
    };
    _t(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      T(d ? e.onOpen : e.onClose);
    }), Yv(() => T(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Q("div", {
        class: po(Dn("overlay"), d),
        style: Po({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => Q("div", Ve({
      class: po(Dn("content"), Dn("--" + e.position), [e.defaultStyle, Dn("--content-background-color")], [e.defaultStyle, Dn("$-elevation--3")]),
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
        position: y
      } = e;
      return Q(De, {
        name: Dn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(Q("div", {
          class: po(Dn("$--box"), Dn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && l(), Q(De, {
          name: p || Dn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[fr, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return Q(Pa, {
          to: d,
          disabled: o.value
        }, Zv(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
pn.install = function(e) {
  e.component(pn.name, pn);
};
var ZC = pn, bs = {
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
function Qi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jv(e) {
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
  n: Qv,
  classes: _v
} = ne("icon");
function xv(e, n) {
  return h(), ge(
    Ja(e.isURL(e.name) ? "img" : "i"),
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
var ws = ee({
  name: "VarIcon",
  props: bs,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = Jv(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || L(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
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
      n: Qv,
      classes: _v,
      nextName: n,
      animateInProgress: r,
      isURL: $v,
      toNumber: L,
      toSizeUnit: pe
    };
  }
});
ws.render = xv;
const $e = ws;
$e.install = function(e) {
  e.component($e.name, $e);
};
var JC = $e;
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
var ef = Oo({
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
}, Je(pt, [
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
var QC = {
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
  n: nf,
  classes: rf
} = ne("action-sheet"), af = ["onClick"];
function tf(e, n) {
  var r = te("var-icon"), a = te("var-popup"), t = Ie("ripple");
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
      default: ve(() => [N(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [W(e.$slots, "title", {}, () => [N(
          "div",
          {
            class: c(e.n("title"))
          },
          re(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), W(e.$slots, "actions", {}, () => [(h(!0), O(
          Oe,
          null,
          Ae(e.actions, (o) => we((h(), O(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
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
            )) : x("v-if", !0), N(
              "div",
              {
                class: c(e.n("action-name"))
              },
              re(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            af
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
var $s = ee({
  name: "VarActionSheet",
  directives: {
    Ripple: Re
  },
  components: {
    VarPopup: pn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: ef,
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
      n: nf,
      classes: rf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ye,
      dt: Kt,
      handleSelect: r
    };
  }
});
$s.render = tf;
const nr = $s;
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
var Zn, wi = {};
function of(e) {
  return e === void 0 && (e = {}), Bo({}, wi, e);
}
function Ca(e) {
  return mt() ? new Promise((n) => {
    Ca.close();
    var r = Be(of(e));
    r.teleport = "body", Zn = r;
    var {
      unmountInstance: a
    } = Qa(nr, r, {
      onSelect: (t) => {
        T(r.onSelect, t), n(t);
      },
      onClose: () => {
        T(r.onClose), n("close");
      },
      onClosed: () => {
        T(r.onClosed), a(), Zn === r && (Zn = null);
      },
      onRouteChange: () => {
        a(), Zn === r && (Zn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function lf(e) {
  wi = e;
}
function sf() {
  wi = {};
}
function uf() {
  if (Zn != null) {
    var e = Zn;
    Zn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
Ca.Component = nr;
nr.install = function(e) {
  e.component(nr.name, nr);
};
Ca.install = function(e) {
  e.component(nr.name, nr);
};
Object.assign(Ca, {
  setDefaultOptions: lf,
  resetDefaultOptions: sf,
  close: uf
});
var _C = nr;
function df(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var vf = {
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
    validator: df
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
  n: ff,
  classes: cf
} = ne("app-bar");
function mf(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
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
        [W(e.$slots, "left"), e.titlePosition === "left" ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingLeft: e.paddingLeft
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.n("title"))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.title),
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
        [e.titlePosition === "right" ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title")),
            style: q({
              paddingRight: e.paddingRight
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            re(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), W(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), W(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var Ts = ee({
  name: "VarAppBar",
  props: vf,
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
    return ln(o), Xt(o), {
      n: ff,
      classes: cf,
      rootStyles: i,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ts.render = mf;
const wr = Ts;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var xC = wr;
function _i(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xt(e) {
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
var pf = "background-image", hf = "lazy-loading", gf = "lazy-error", xi = "lazy-attempt", yf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Eo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Fa = [], Lt = [], Ps = Ov(100), Fe = {
  loading: Eo,
  error: Eo,
  attempt: 3,
  throttleWait: 300,
  events: yf
}, Ci = mi(gt, Fe.throttleWait);
function eo(e, n) {
  e._lazy.arg === pf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function bf(e) {
  e._lazy.loading && eo(e, e._lazy.loading), gt();
}
function wf(e) {
  e._lazy.error && eo(e, e._lazy.error), e._lazy.state = "error", ki(e), gt();
}
function Os(e, n) {
  eo(e, n), e._lazy.state = "success", ki(e), gt();
}
function Cf(e) {
  var n;
  Lt.includes(e) || (Lt.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ci, {
      passive: !0
    });
  }));
}
function Sf() {
  Lt.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ci);
    });
  }), Lt.length = 0;
}
function kf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(hf)) != null ? r : Fe.loading,
    error: (a = e.getAttribute(gf)) != null ? a : Fe.error,
    attempt: e.getAttribute(xi) ? Number(e.getAttribute(xi)) : Fe.attempt
  };
  e._lazy = Io({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), eo(e, Eo), T(Fe.filter, e._lazy);
}
function $f(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Ps.add(n), Os(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? wf(e) : Vs(e);
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
    bf(e), $f(e, n);
  }
}
function Si(e) {
  return Do.apply(this, arguments);
}
function Do() {
  return Do = xt(function* (e) {
    (yield Bv(e)) && Vs(e);
  }), Do.apply(this, arguments);
}
function gt() {
  Fa.forEach((e) => Si(e));
}
function Tf(e) {
  return No.apply(this, arguments);
}
function No() {
  return No = xt(function* (e) {
    !Fa.includes(e) && Fa.push(e), Iv(e).forEach(Cf), yield Si(e);
  }), No.apply(this, arguments);
}
function ki(e) {
  Nt(Fa, e), Fa.length === 0 && Sf();
}
function Pf(e, n) {
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
  return Ao = xt(function* (e, n) {
    kf(e, n), yield Tf(e);
  }), Ao.apply(this, arguments);
}
function Of(e, n) {
  return zo.apply(this, arguments);
}
function zo() {
  return zo = xt(function* (e, n) {
    if (!Pf(e, n)) {
      Fa.includes(e) && (yield Si(e));
      return;
    }
    yield Ms(e, n);
  }), zo.apply(this, arguments);
}
function Vf(e) {
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
  updated: Of,
  install(e, n) {
    Vf(n), Ci = mi(gt, Fe.throttleWait), e.directive("lazy", this);
  }
}, eS = Bs;
const lt = Bs;
function Mf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Is = (e) => ["mini", "small", "normal", "large"].includes(e);
function Es(e) {
  return Is(e) || rn(e) || Ze(e);
}
var Bf = {
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
    validator: Mf,
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
  n: If,
  classes: Ef
} = ne("avatar"), Df = ["src", "lazy-loading", "lazy-error"], Nf = ["src"];
function Af(e, n) {
  var r = Ie("lazy");
  return h(), O(
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
          style: q({
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
        Df
      )), [[r, e.src]]) : (h(), O(
        "img",
        {
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
        },
        null,
        46,
        Nf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (h(), O(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: c(e.n("text")),
        style: q({
          transform: "scale(" + e.scale + ")"
        })
      },
      [W(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Ds = ee({
  name: "VarAvatar",
  directives: {
    Lazy: lt
  },
  props: Bf,
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
    return ln(t), Xt(t), {
      internalSizeValidator: Is,
      sizeValidator: Es,
      toSizeUnit: pe,
      n: If,
      classes: Ef,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: i,
      handleClick: l
    };
  }
});
Ds.render = Af;
const Cr = Ds;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var nS = Cr, zf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Lf,
  classes: Rf
} = ne("avatar-group");
function Uf(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ns = ee({
  name: "VarAvatarGroup",
  props: zf,
  setup(e) {
    var n = F(() => e.offset == null ? {} : {
      "--avatar-group-offset": pe(e.offset)
    });
    return {
      n: Lf,
      classes: Rf,
      toSizeUnit: pe,
      rootStyles: n
    };
  }
});
Ns.render = Uf;
const Sr = Ns;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var rS = Sr;
function Ff(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Hf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var _n = {
  type: {
    type: String,
    default: "circle",
    validator: Ff
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Hf
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
  n: Yf,
  classes: jf
} = ne("loading"), Wf = (e) => (Oa(""), e = e(), Va(), e), Gf = /* @__PURE__ */ Wf(() => /* @__PURE__ */ N(
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
)), qf = [Gf];
function Xf(e, n) {
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
      [W(e.$slots, "default"), e.loading ? (h(), O(
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
    )) : x("v-if", !0), e.isShow ? (h(), O(
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
          qf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (h(!0), O(
        Oe,
        null,
        Ae(e.loadingTypeDict, (r, a) => (h(), O(
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
              Ae(r, (t) => (h(), O(
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
      )), e.$slots.description || e.description ? (h(), O(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: q({
            color: e.color
          })
        },
        [W(e.$slots, "description", {}, () => [be(
          re(e.description),
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
var As = ee({
  name: "VarLoading",
  props: _n,
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
      n: Yf,
      classes: jf,
      multiplySizeUnit: en,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
As.render = Xf;
const $n = As;
$n.install = function(e) {
  e.component($n.name, $n);
};
var aS = $n, Kf = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Zf,
  classes: Jf
} = ne("hover-overlay");
function Qf(e, n) {
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
var zs = ee({
  name: "VarHoverOverlay",
  props: Kf,
  setup() {
    return {
      n: Zf,
      classes: Jf
    };
  }
});
zs.render = Qf;
const hn = zs;
hn.install = function(e) {
  e.component(hn.name, hn);
};
function Ha() {
  var e = M(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var tS = hn;
function Ls(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function _f(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((i) => i.trim());
    return r[ts(t)] = o, r;
  }, {}) : {};
}
function xf(e) {
  var {
    value: n
  } = e._hover, r = _f(e);
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
function ec(e) {
  Object.keys(e._hover.value).forEach((n) => {
    var r = e._hover.value[n];
    r != null && (e.style[n] = "");
  });
}
function Rs(e) {
  ec(e), $i(e, e._hover.rawStyle);
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
  }, xf(e), e.addEventListener("mouseenter", Us), e.addEventListener("mouseleave", Fs));
}
function Ys(e, n) {
  Ls(n.arg) || (Rs(e), e.removeEventListener("mouseenter", Us), e.removeEventListener("mouseleave", Fs));
}
function nc(e, n) {
  Ys(e, n);
}
function rc(e, n) {
  return !ci(n.value) && e._hover.hovering;
}
function ac(e, n) {
  Hs(e, n), rc(e, n) && $i(e, n.value);
}
var js = {
  mounted: Hs,
  unmounted: Ys,
  beforeUpdate: nc,
  updated: ac,
  install(e) {
    e.directive("hover", this);
  }
}, oS = js;
const cr = js;
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
function tc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function oc(e) {
  return ["button", "reset", "submit"].includes(e);
}
var ic = {
  type: {
    type: String,
    validator: Ws
  },
  nativeType: {
    type: String,
    default: "button",
    validator: oc
  },
  size: {
    type: String,
    validator: tc
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
  loadingType: Je(_n, "type"),
  loadingSize: Je(_n, "size"),
  loadingColor: Lo({}, Je(_n, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, Gs = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");
function lc() {
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
function sc() {
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
  n: uc,
  classes: dc
} = ne("button"), vc = ["type", "disabled"];
function fc(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = Ie("ripple"), o = Ie("hover");
  return we((h(), O(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.n("$-elevation--" + e.states.elevation)], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
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
    )) : x("v-if", !0), N(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [W(e.$slots, "default")],
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
    vc
  )), [[t, {
    disabled: e.disabled || !e.ripple
  }], [o, e.handleHovering, "desktop"]]);
}
var qs = ee({
  name: "VarButton",
  components: {
    VarLoading: $n,
    VarHoverOverlay: hn
  },
  directives: {
    Ripple: Re,
    Hover: cr
  },
  props: ic,
  setup(e) {
    var n = M(!1), {
      buttonGroup: r
    } = sc(), {
      hovering: a,
      handleHovering: t
    } = Ha(), o = F(() => {
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
      n: uc,
      classes: dc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: l,
      handleTouchstart: s
    };
  }
});
qs.render = fc;
const Ke = qs;
Ke.install = function(e) {
  e.component(Ke.name, Ke);
};
var iS = Ke, cc = {
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
  onClick: U()
}, {
  n: mc,
  classes: pc
} = ne("back-top");
function hc(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), ge(
    Pa,
    {
      to: "body",
      disabled: e.disabled
    },
    [N(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Mn(function() {
          return e.handleClick && e.handleClick(...arguments);
        }, ["stop"]))
      }),
      [W(e.$slots, "default", {}, () => [Q(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ve(() => [Q(r, {
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
var Xs = ee({
  name: "VarBackTop",
  components: {
    VarButton: Ke,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: cc,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (d) => {
      T(e.onClick, d);
      var v = pi(t);
      it(t, {
        left: v,
        duration: e.duration,
        animation: os
      });
    }, i = mi(() => {
      n.value = Zt(t) >= Le(e.visibilityHeight);
    }, 200), l = () => {
      t = e.target ? ls(e.target, "BackTop") : Ma(r.value);
    }, s = () => {
      t.addEventListener("scroll", i);
    }, u = () => {
      t.removeEventListener("scroll", i);
    };
    return Gt(() => {
      l(), s(), a.value = !1;
    }), Xa(s), qt(u), hr(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: pe,
      n: mc,
      classes: pc,
      handleClick: o
    };
  }
});
Xs.render = hc;
const kr = Xs;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var lS = kr;
function gc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function yc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var bc = {
  type: {
    type: String,
    default: "default",
    validator: gc
  },
  position: {
    type: String,
    default: "right-top",
    validator: yc
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
  n: wc,
  classes: Cc
} = ne("badge");
function Sc(e, n) {
  var r = te("var-icon");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "default"), Q(
      De,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [we(N(
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
          )) : x("v-if", !0), W(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), O(
            "span",
            {
              key: 0,
              class: c(e.n("value"))
            },
            re(e.value),
            3
            /* TEXT, CLASS */
          )) : x("v-if", !0)])],
          16
          /* FULL_PROPS */
        ), [[fr, !e.hidden]])]),
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
var Ks = ee({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: bc,
  setup(e) {
    var n = F(() => {
      var {
        value: r,
        maxValue: a
      } = e;
      return r != null && a != null && L(r) > L(a) ? a + "+" : r;
    });
    return {
      n: wc,
      classes: Cc,
      value: n
    };
  }
});
Ks.render = Sc;
const rr = Ks;
rr.install = function(e) {
  e.component(rr.name, rr);
};
var sS = rr, kc = {
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
}, Zs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY");
function $c() {
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
  n: Tc,
  classes: Pc
} = ne("bottom-navigation"), {
  n: no
} = ne("bottom-navigation-item"), el = no("--right-half-space"), nl = no("--left-half-space"), rl = no("--right-space"), Oc = {
  type: "primary"
};
function Vc(e, n) {
  var r = te("var-button");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (h(), ge(
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
        default: ve(() => [W(e.$slots, "fab")]),
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
var Js = ee({
  name: "VarBottomNavigation",
  components: {
    VarButton: Ke
  },
  props: kc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = F(() => e.active), o = F(() => e.activeColor), i = F(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = $c(), v = () => {
      s.value === 0 || f() || m() || p();
    }, f = () => u.find((P) => {
      var {
        name: E
      } = P;
      return t.value === E.value;
    }), m = () => u.find((P) => {
      var {
        index: E
      } = P;
      return t.value === E.value;
    }), p = () => {
      rn(t.value) && (t.value < 0 ? T(e["onUpdate:active"], 0) : t.value > s.value - 1 && T(e["onUpdate:active"], s.value - 1));
    }, y = (P) => {
      t.value !== P && (e.onBeforeChange ? g(P) : $(P));
    }, g = (P) => {
      var E = T(e.onBeforeChange, P);
      E = Ce(E) ? E : [E], Promise.all(E).then((V) => {
        V.some((b) => !b) || $(P);
      });
    }, $ = (P) => {
      T(e["onUpdate:active"], P), T(e.onChange, P);
    }, B = () => {
      var P = I();
      P.forEach((E) => {
        E.classList.remove(el, nl, rl);
      });
    }, w = (P) => {
      var E = I(), V = E.length, b = P % 2 === 0;
      E.forEach((k, H) => {
        C(b, k, H, V);
      });
    }, C = (P, E, V, b) => {
      var k = V === b - 1;
      if (!P && k) {
        E.classList.add(rl);
        return;
      }
      var H = V === b / 2 - 1, J = V === b / 2;
      H ? E.classList.add(el) : J && E.classList.add(nl);
    }, I = () => Array.from(a.value.querySelectorAll("." + no())), S = () => {
      T(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: y
    };
    return d(D), le(() => s.value, v), le(() => e.fabProps, (P) => {
      l.value = Ro({}, Oc, P);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && w(s.value);
    }), Xt(() => {
      B(), r.fab && w(s.value);
    }), {
      n: Tc,
      classes: Pc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: S,
      fabProps: l
    };
  }
});
Js.render = Vc;
const $r = Js;
$r.install = function(e) {
  e.component($r.name, $r);
};
var uS = $r, Mc = {
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
function Bc() {
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
  n: Ic,
  classes: Ec
} = ne("bottom-navigation-item"), Dc = {
  type: "danger",
  dot: !0
};
function Nc(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Ie("ripple");
  return we((h(), O(
    "button",
    {
      class: c(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: q({
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
    )) : x("v-if", !0), W(e.$slots, "icon", {
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
    )) : x("v-if", !0), N(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (h(), O(
        Oe,
        {
          key: 0
        },
        [be(
          re(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), W(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var Qs = ee({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: rr,
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: Mc,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = Bc(), {
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
      a.value = m === !0 ? Dc : r.value;
    }, {
      immediate: !0
    }), {
      n: Ic,
      classes: Ec,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Qs.render = Nc;
const Tr = Qs;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var dS = Tr, Ac = {
  separator: {
    type: String
  },
  onClick: U()
}, _s = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY");
function zc() {
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
function Lc() {
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
  n: Rc,
  classes: Uc
} = ne("breadcrumb");
function Fc(e, n) {
  return h(), O(
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
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : W(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [N(
        "div",
        {
          class: c(e.n("separator"))
        },
        re((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var xs = ee({
  name: "VarBreadcrumb",
  props: Ac,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Lc(), t = F(() => n.value === r.length.value - 1), o = F(() => r.separator.value), i = (l) => {
      t.value || T(e.onClick, l);
    };
    return a(null), {
      n: Rc,
      classes: Uc,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
xs.render = Fc;
const Pr = xs;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var vS = Pr, Hc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Yc
} = ne("breadcrumbs");
function jc(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var eu = ee({
  name: "VarBreadcrumbs",
  props: Hc,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = zc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Yc
    };
  }
});
eu.render = jc;
const Or = eu;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var fS = Or;
function Wc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Gc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function qc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Xc = {
  type: {
    type: String,
    default: "default",
    validator: Wc
  },
  size: {
    type: String,
    default: "normal",
    validator: Gc
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
    validator: qc
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
  n: Kc,
  classes: Zc
} = ne("button-group");
function Jc(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var nu = ee({
  name: "VarButtonGroup",
  props: Xc,
  setup(e) {
    var {
      bindButtons: n
    } = lc(), r = {
      elevation: F(() => e.elevation),
      type: F(() => e.type),
      size: F(() => e.size),
      color: F(() => e.color),
      textColor: F(() => e.textColor),
      mode: F(() => e.mode)
    };
    return n(r), {
      n: Kc,
      classes: Zc
    };
  }
});
nu.render = Jc;
const Vr = nu;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var cS = Vr;
function Qc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var _c = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Qc,
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
  onClick: U(),
  "onUpdate:floating": U()
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
  n: xc,
  classes: em
} = ne("card"), nm = 500, rm = ["src", "alt"];
function am(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Ie("ripple");
  return we((h(), O(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
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
      [W(e.$slots, "image", {}, () => [e.src ? (h(), O(
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
        rm
      )) : x("v-if", !0)]), N(
        "div",
        {
          class: c(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (h(), O(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), O(
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
          [W(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), O(
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
        [W(e.$slots, "close-button", {}, () => [Q(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Mn(e.close, ["stop"])
          },
          {
            default: ve(() => [Q(
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
var ru = ee({
  name: "VarCard",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarButton: Ke
  },
  props: _c,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), i = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = F(() => e.layout === "row"), p = M(!1), y = M(!1), {
      zIndex: g
    } = ht(() => e.floating, 1);
    _t(() => e.floating, () => !m.value);
    var $ = "auto", B = "auto", w = null, C = M(null), I = /* @__PURE__ */ function() {
      var E = tl(function* () {
        clearTimeout(C.value), clearTimeout(w), C.value = null, C.value = setTimeout(/* @__PURE__ */ tl(function* () {
          var {
            width: V,
            height: b,
            left: k,
            top: H
          } = n.value.getBoundingClientRect();
          a.value = pe(V), t.value = pe(b), o.value = a.value, i.value = t.value, l.value = pe(H), s.value = pe(k), u.value = "fixed", $ = l.value, B = s.value, p.value = !0, yield Bn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? nm : 0);
      });
      return function() {
        return E.apply(this, arguments);
      };
    }(), S = () => {
      clearTimeout(w), clearTimeout(C.value), C.value = null, o.value = a.value, i.value = t.value, l.value = $, s.value = B, v.value = "0px", f.value = "0", p.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", B = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      T(e["onUpdate:floating"], !1);
    }, P = (E) => {
      T(e.onClick, E);
    };
    return le(() => e.floating, (E) => {
      m.value || Me(() => {
        E ? I() : S();
      });
    }, {
      immediate: !0
    }), {
      n: xc,
      classes: em,
      toSizeUnit: pe,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: C,
      floaterWidth: o,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: g,
      isRow: m,
      close: D,
      showFloatingButtons: p,
      floated: y,
      handleClick: P
    };
  }
});
ru.render = am;
const Mr = ru;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var mS = Mr, tm = {
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
  n: om,
  classes: im
} = ne("cell");
function lm(e, n) {
  var r = te("var-icon"), a = Ie("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "icon", {}, () => [e.icon ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), e.iconClass))
      },
      [Q(
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
    )) : x("v-if", !0)]), N(
      "div",
      {
        class: c(e.n("content"))
      },
      [W(e.$slots, "default", {}, () => [e.title ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), e.descriptionClass))
        },
        re(e.description),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("extra"), e.extraClass))
      },
      [W(e.$slots, "extra")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var au = ee({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: tm,
  setup(e) {
    var n = F(() => e.borderOffset == null ? {} : {
      "--cell-border-left": pe(e.borderOffset),
      "--cell-border-right": pe(e.borderOffset)
    }), r = (a) => {
      T(e.onClick, a);
    };
    return {
      n: om,
      classes: im,
      toSizeUnit: pe,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
au.render = lm;
const ar = au;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var pS = ar, sm = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: um
} = ne("form-details"), dm = {
  key: 0
}, vm = {
  key: 0
};
function fm(e, n) {
  return h(), ge(
    De,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), O(
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
          [Q(
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), O(
                "div",
                dm,
                re(e.errorMessage),
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
        ), N(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [Q(
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), O(
                "div",
                vm,
                re(e.extraMessage),
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
var tu = ee({
  name: "VarFormDetails",
  props: sm,
  setup: () => ({
    n: um
  })
});
tu.render = fm;
const We = tu;
We.install = function(e) {
  e.component(We.name, We);
};
var hS = We, cm = {
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
}, ou = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY");
function mm() {
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
function pm() {
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
  } = sn(iu), a = Ka(), t = r ? (o) => {
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
function hm() {
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
  n: gm,
  classes: ym
} = ne("checkbox");
function bm(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("hover"), i = Ie("ripple");
  return h(), O(
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
      [we((h(), O(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(
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
        )]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Q(
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
      )), [[o, e.handleHovering, "desktop"], [i, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), N(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
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
var lu = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: Re,
    Hover: cr
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: hn
  },
  props: cm,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = pm(), {
      hovering: l,
      handleHovering: s
    } = Ha(), {
      form: u,
      bindForm: d
    } = wn(), {
      errorMessage: v,
      validateWithTrigger: f,
      validate: m,
      // expose
      resetValidation: p
    } = bn(), y = (P) => {
      Me(() => {
        var {
          validateTrigger: E,
          rules: V,
          modelValue: b
        } = e;
        f(E, P, V, b);
      });
    }, g = (P) => {
      n.value = P;
      var {
        checkedValue: E,
        onChange: V
      } = e;
      T(e["onUpdate:modelValue"], n.value), T(V, n.value), y("onChange"), P === E ? o == null || o.onChecked(E) : o == null || o.onUnchecked(E);
    }, $ = (P) => {
      var {
        disabled: E,
        readonly: V,
        checkedValue: b,
        uncheckedValue: k,
        onClick: H
      } = e;
      if (!(u != null && u.disabled.value || E) && (T(H, P), !(u != null && u.readonly.value || V))) {
        t.value = !0;
        var J = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && J || g(r.value ? k : b);
      }
    }, B = (P) => {
      var {
        checkedValue: E,
        uncheckedValue: V
      } = e;
      n.value = P.includes(E) ? E : V;
    }, w = () => {
      t.value = !1;
    }, C = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), p();
    }, I = (P) => {
      var {
        checkedValue: E,
        uncheckedValue: V
      } = e, b = ![E, V].includes(P);
      b && (P = r.value ? V : E), g(P);
    }, S = () => m(e.rules, e.modelValue);
    le(() => e.modelValue, (P) => {
      n.value = P;
    }, {
      immediate: !0
    });
    var D = {
      checkedValue: a,
      checked: r,
      sync: B,
      validate: S,
      resetValidation: p,
      reset: C,
      resetWithAnimation: w
    };
    return T(i, D), T(d, D), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: l,
      handleHovering: s,
      n: gm,
      classes: ym,
      handleClick: $,
      toggle: I,
      reset: C,
      validate: S,
      resetValidation: p
    };
  }
});
lu.render = bm;
const tr = lu;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var gS = tr;
function wm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Cm = {
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
    validator: wm
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
  n: Sm,
  classes: km
} = ne("checkbox-group");
function $m(e, n) {
  var r = te("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(
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
var su = ee({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: Cm,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = mm(), {
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = F(() => l.value), f = (D) => {
      Me(() => {
        var {
          validateTrigger: P,
          rules: E,
          modelValue: V
        } = e;
        s(P, D, E, V);
      });
    }, m = (D) => {
      T(e["onUpdate:modelValue"], D), T(e.onChange, D), f("onChange");
    }, p = (D) => {
      var {
        modelValue: P
      } = e;
      P.includes(D) || m([...P, D]);
    }, y = (D) => {
      var {
        modelValue: P
      } = e;
      P.includes(D) && m(P.filter((E) => E !== D));
    }, g = () => t.forEach((D) => {
      var {
        sync: P
      } = D;
      return P(e.modelValue);
    }), $ = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, B = () => {
      var D = t.map((E) => {
        var {
          checkedValue: V
        } = E;
        return V.value;
      }), P = Hi(D);
      return $(), T(e["onUpdate:modelValue"], P), P;
    }, w = () => {
      var D = t.filter((E) => {
        var {
          checked: V
        } = E;
        return !V.value;
      }).map((E) => {
        var {
          checkedValue: V
        } = E;
        return V.value;
      }), P = Hi(D);
      return $(), T(e["onUpdate:modelValue"], P), P;
    }, C = () => {
      T(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, g, {
      deep: !0
    }), le(() => a.value, g);
    var S = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: I,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return o(S), T(i, S), {
      errorMessage: l,
      n: Sm,
      classes: km,
      checkAll: B,
      inverseAll: w,
      reset: C,
      validate: I,
      resetValidation: d
    };
  }
});
su.render = $m;
const Br = su;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var yS = Br;
function Tm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Pm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Om = {
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
  onClose: U()
}, {
  n: Wn,
  classes: Vm
} = ne("chip");
function Mm(e, n) {
  var r = te("var-icon");
  return h(), ge(
    De,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [N(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [W(e.$slots, "left"), N(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        ), W(e.$slots, "right"), e.closable ? (h(), O(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [Q(
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
var uu = ee({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Om,
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
      } = e, u = Wn(o ? "$--flex" : "$--inline-flex"), d = l ? Wn("plain") + " " + Wn("plain-" + i) : Wn("--" + i), v = s ? Wn("--round") : null;
      return [Wn("--" + t), u, d, v];
    }), a = (t) => {
      T(e.onClose, t);
    };
    return {
      n: Wn,
      classes: Vm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
uu.render = Mm;
const or = uu;
or.install = function(e) {
  e.component(or.name, or);
};
var bS = or;
function Bm(e) {
  return ["row", "column"].includes(e);
}
function Im(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function Em(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Dm = {
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
    validator: Bm
  },
  justify: {
    type: String,
    validator: Im
  },
  align: {
    type: String,
    validator: Em
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
}, du = Symbol("ROW_BIND_COL_KEY");
function Nm() {
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
function Am() {
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
  n: St,
  classes: zm
} = ne("col");
function Lm(e, n) {
  return h(), O(
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
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var vu = ee({
  name: "VarCol",
  props: Dm,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = F(() => L(e.span)), a = F(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Am(), i = {
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
        Number(m) >= 0 && v.push(St("--span-" + u + "-" + m)), f && v.push(St("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(St("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      T(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), T(o, i), {
      n: St,
      classes: zm,
      padding: n,
      toNumber: L,
      toSizeUnit: pe,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: At
    };
  }
});
vu.render = Lm;
const Ir = vu;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var wS = Ir, fu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
function Rm() {
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
var Um = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Fm
} = ne("collapse");
function Hm(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var cu = ee({
  name: "VarCollapse",
  props: Um,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Rm(), t = F(() => e.modelValue), o = F(() => e.offset), i = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (m, p) => i() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((y) => y !== m) : null, s = (m, p) => {
      var y = l(m, p);
      T(e["onUpdate:modelValue"], y), T(e.onChange, y);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: y
          } = p;
          return e.modelValue === y.value;
        });
      var m = r.filter((p) => {
        var {
          name: y
        } = p;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return m.length ? m : void 0;
    }, d = () => e.accordion ? r.find((m) => {
      var {
        index: p,
        name: y
      } = m;
      return y.value === void 0 && e.modelValue === p.value;
    }) : r.filter((m) => {
      var {
        index: p,
        name: y
      } = m;
      return y.value === void 0 && e.modelValue.includes(p.value);
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
          var y = e.accordion ? m === p : m.includes(p);
          p.init(e.accordion, y);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), le(() => n.value, () => Me().then(v)), le(() => e.modelValue, () => Me().then(v)), {
      n: Fm
    };
  }
});
cu.render = Hm;
const Er = cu;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var CS = Er;
function Ym() {
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
var jm = {
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
  n: Wm,
  classes: Gm
} = ne("collapse-item");
function qm(e, n) {
  var r = te("var-icon");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [N(
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
        [W(e.$slots, "title", {}, () => [be(
          re(e.title),
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
        [W(e.$slots, "icon", {}, () => [Q(
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
    ), we(N(
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
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[fr, e.show]])],
    2
    /* CLASS */
  );
}
var mu = ee({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: jm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Ym(), t = !0, o = M(null), i = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (w, C) => {
      s.value === void 0 || w && Ce(s.value) || C === l.value || (l.value = C, m(!0));
    }, m = (w) => {
      e.disabled || w || d(e.name || n.value, !l.value);
    }, p = () => {
      o.value && (o.value.style.height = "", i.value = !0, Me(() => {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = 0 + "px", Pn(() => {
          o.value.style.height = w + "px", t && Jt(() => {
            t && $();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, g = () => {
      if (o.value) {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = w + "px", Pn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, $ = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, B = {
      index: n,
      name: v,
      init: f
    };
    return a(B), le(l, (w) => {
      w ? p() : g();
    }), {
      n: Wm,
      start: y,
      classes: Gm,
      show: i,
      isShow: l,
      offset: u,
      toggle: m,
      contentEl: o,
      transitionend: $
    };
  }
});
mu.render = qm;
const Dr = mu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var SS = Dr, Xm = {
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
  n: Km
} = ne("countdown"), Fo = 1e3, Ho = 60 * Fo, Yo = 60 * Ho, ol = 24 * Yo;
function Zm(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default", vi(rs(e.timeData)), () => [be(
      re(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var pu = ee({
  name: "VarCountdown",
  props: Xm,
  setup(e) {
    var n = M(""), r = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, i = 0, l, s = (p, y) => {
      var g = Object.values(y), $ = ["DD", "HH", "mm", "ss"], B = [24, 60, 60, 1e3];
      if ($.forEach((C, I) => {
        p.includes(C) ? p = p.replace(C, ba("" + g[I], 2, "0")) : g[I + 1] += g[I] * B[I];
      }), p.includes("S")) {
        var w = ba("" + g[g.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", w) : p.includes("SS") ? p = p.replace("SS", w.slice(0, 2)) : p = p.replace("S", w.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var y = Math.floor(p / ol), g = Math.floor(p % ol / Yo), $ = Math.floor(p % Yo / Ho), B = Math.floor(p % Ho / Fo), w = Math.floor(p % Fo), C = {
        days: y,
        hours: g,
        minutes: $,
        seconds: B,
        milliseconds: w
      };
      r.value = C, T(e.onChange, r.value), n.value = s(e.format, C);
    }, d = () => {
      var {
        time: p,
        onEnd: y
      } = e, g = performance.now();
      if (a || (a = g + L(p)), i = a - g, i < 0 && (i = 0), u(i), i === 0) {
        T(y);
        return;
      }
      t && (o = Pn(d));
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
    }), Xa(() => {
      l != null && (t = l, t === !0 && v(!0));
    }), hr(() => {
      l = t, f();
    }), Za(f), {
      showTime: n,
      timeData: r,
      n: Km,
      start: v,
      pause: f,
      reset: m
    };
  }
});
pu.render = Zm;
const Nr = pu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var kS = Nr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Da = 9e15, gr = 1e9, jo = "0123456789abcdef", Rt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ut = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Wo = {
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
  minE: -Da,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Da,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, hu, An, me = !0, ro = "[DecimalError] ", mr = ro + "Invalid argument: ", gu = ro + "Precision limit exceeded", yu = ro + "crypto unavailable", bu = "[object Decimal]", Qe = Math.floor, He = Math.pow, Jm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Qm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, _m = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, wu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, xm = 9007199254740991, ep = Rt.length - 1, Go = Ut.length - 1, X = { toStringTag: bu };
X.absoluteValue = X.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
X.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
X.clampedTo = X.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(mr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
X.comparedTo = X.cmp = function(e) {
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
X.cosine = X.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = np(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(An == 2 || An == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
X.cubeRoot = X.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (me = !1, o = d.s * He(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Xe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = He(r, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Pe(u.plus(d).times(l), u.plus(s), i + 2, 1), Xe(l.d).slice(0, i) === (r = Xe(a.d)).slice(0, i))
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
  return me = !0, ue(a, e, v.rounding, n);
};
X.decimalPlaces = X.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Qe(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
X.dividedBy = X.div = function(e) {
  return Pe(this, new this.constructor(e));
};
X.dividedToIntegerBy = X.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Pe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
X.equals = X.eq = function(e) {
  return this.cmp(e) === 0;
};
X.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
X.greaterThan = X.gt = function(e) {
  return this.cmp(e) > 0;
};
X.greaterThanOrEqualTo = X.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
X.hyperbolicCosine = X.cosh = function() {
  var e, n, r, a, t, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite())
    return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return l;
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / to(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ya(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ya(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / to(5, e)), t = Ya(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
X.hyperbolicTangent = X.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Pe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
X.inverseCosine = X.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? kn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? kn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = kn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
X.inverseHyperbolicCosine = X.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, me = !1, r = r.times(r).minus(1).sqrt().plus(r), me = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
X.inverseHyperbolicSine = X.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, me = !1, r = r.times(r).plus(1).sqrt().plus(r), me = !0, a.precision = e, a.rounding = n, r.ln());
};
X.inverseHyperbolicTangent = X.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Pe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
X.inverseSine = X.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = kn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Go)
      return i = kn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Go)
      return i = kn(d, v + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (me = !1, n = Math.ceil(l / de), a = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = i.minus(t.div(a += 2)), t = t.times(s), i = o.plus(t.div(a += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === o.d[e] && e--; )
        ;
  return r && (i = i.times(2 << r - 1)), me = !0, ue(i, d.precision = v, d.rounding = f, !0);
};
X.isFinite = function() {
  return !!this.d;
};
X.isInteger = X.isInt = function() {
  return !!this.d && Qe(this.e / de) > this.d.length - 2;
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
  if (me = !1, l = v + m, i = xn(u, l), a = n ? Ft(d, l + 10) : xn(e, l), s = Pe(i, a, l, 1), st(s.d, t = v, f))
    do
      if (l += 10, i = xn(u, l), a = n ? Ft(d, l + 10) : xn(e, l), s = Pe(i, a, l, 1), !o) {
        +Xe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (st(s.d, t += 10, f));
  return me = !0, ue(s, v, f);
};
X.minus = X.sub = function(e) {
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
    return me ? ue(e, l, s) : e;
  }
  if (r = Qe(e.e / de), d = Qe(m.e / de), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, i = f.length) : (n = f, r = d, i = u.length), a = Math.max(Math.ceil(l / de), i) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
        u[t] = Tn - 1;
      --u[t], u[a] += Tn;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = ao(u, r), me ? ue(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
X.modulo = X.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (me = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), me = !0, r.minus(n));
};
X.naturalExponential = X.exp = function() {
  return qo(this);
};
X.naturalLogarithm = X.ln = function() {
  return xn(this);
};
X.negated = X.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
X.plus = X.add = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), me ? ue(e, l, s) : e;
  if (o = Qe(v.e / de), a = Qe(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / de), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Tn | 0, u[t] %= Tn;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = ao(u, a), me ? ue(e, l, s) : e;
};
X.precision = X.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(mr + e);
  return r.d ? (n = Cu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
X.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
X.sine = X.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = ap(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(An > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.squareRoot = X.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (me = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Xe(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(i, o, r + 2, 1)).times(0.5), Xe(o.d).slice(0, r) === (n = Xe(a.d)).slice(0, r))
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
  return me = !0, ue(a, s, d.rounding, e);
};
X.tangent = X.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(An == 2 || An == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.times = X.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Qe(d.e / de) + Qe(e.e / de), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + m[a] * f[t - a - 1] + n, o[t--] = l % Tn | 0, n = l / Tn | 0;
    o[t] = (o[t] + n) % Tn | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = ao(o, r), me ? ue(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, n) {
  return Ti(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (on(e, 0, gr), n === void 0 ? n = a.rounding : on(n, 0, 8), ue(r, e + r.e + 1, n));
};
X.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = In(a, !0) : (on(e, 0, gr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = ue(new t(a), e + 1, n), r = In(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = In(t) : (on(e, 0, gr), n === void 0 ? n = o.rounding : on(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = In(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
X.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, m = this, p = m.d, y = m.constructor;
  if (!p)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = Cu(p) - m.e - 1, i = o % de, n.d[0] = He(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new y(e), !l.isInt() || l.lt(u))
      throw Error(mr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (me = !1, l = new y(Xe(p)), d = y.precision, y.precision = o = p.length * de * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = Pe(u, a, o, 1).minus(m).abs().cmp(Pe(s, r, o, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], y.precision = d, me = !0, f;
};
X.toHexadecimal = X.toHex = function(e, n) {
  return Ti(this, 16, e, n);
};
X.toNearest = function(e, n) {
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
  return e.d[0] ? (me = !1, r = Pe(r, e, 0, n, 1).times(e), me = !0, ue(r)) : (e.s = r.s, r = e), r;
};
X.toNumber = function() {
  return +this;
};
X.toOctal = function(e, n) {
  return Ti(this, 8, e, n);
};
X.toPower = X.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(He(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Qe(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= xm)
    return t = Su(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = He(+l, u), n = r == 0 || !isFinite(r) ? Qe(u * (Math.log("0." + Xe(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (me = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = qo(e.times(xn(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), st(t.d, a, o) && (n = a + 10, t = ue(qo(e.times(xn(l, n + r)), n), n + 5, 1), +Xe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, me = !0, s.rounding = o, ue(t, a, o));
};
X.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = In(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (on(e, 1, gr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = ue(new t(a), e, n), r = In(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (on(e, 1, gr), n === void 0 ? n = a.rounding : on(n, 0, 8)), ue(new a(r), e, n);
};
X.toString = function() {
  var e = this, n = e.constructor, r = In(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
X.truncated = X.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
X.valueOf = X.toJSON = function() {
  var e = this, n = e.constructor, r = In(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Xe(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += qn(r)), o += a;
    i = e[n], a = i + "", r = de - a.length, r && (o += qn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function on(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(mr + e);
}
function st(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = He(10, de - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == He(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == He(10, n - 3) - 1, i;
}
function Mt(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += jo.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function np(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / to(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ya(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, m, p, y, g, $, B, w, C, I, S, D, P, E, V, b, k, H = a.constructor, J = a.s == t.s ? 1 : -1, j = a.d, R = t.d;
    if (!j || !j[0] || !R || !R[0])
      return new H(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (j ? R && j[0] == R[0] : !R) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          j && j[0] == 0 || !R ? J * 0 : J / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Tn, m = de, d = Qe(a.e / m) - Qe(t.e / m)), b = R.length, E = j.length, $ = new H(J), B = $.d = [], v = 0; R[v] == (j[v] || 0); v++)
      ;
    if (R[v] > (j[v] || 0) && d--, o == null ? (S = o = H.precision, i = H.rounding) : l ? S = o + (a.e - t.e) + 1 : S = o, S < 0)
      B.push(1), p = !0;
    else {
      if (S = S / m + 2 | 0, v = 0, b == 1) {
        for (f = 0, R = R[0], S++; (v < E || f) && S--; v++)
          D = f * s + (j[v] || 0), B[v] = D / R | 0, f = D % R | 0;
        p = f || v < E;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), j = e(j, f, s), b = R.length, E = j.length), P = b, w = j.slice(0, b), C = w.length; C < b; )
          w[C++] = 0;
        k = R.slice(), k.unshift(0), V = R[0], R[1] >= s / 2 && ++V;
        do
          f = 0, u = n(R, w, b, C), u < 0 ? (I = w[0], b != C && (I = I * s + (w[1] || 0)), f = I / V | 0, f > 1 ? (f >= s && (f = s - 1), y = e(R, f, s), g = y.length, C = w.length, u = n(y, w, g, C), u == 1 && (f--, r(y, b < g ? k : R, g, s))) : (f == 0 && (u = f = 1), y = R.slice()), g = y.length, g < C && y.unshift(0), r(w, y, C, s), u == -1 && (C = w.length, u = n(R, w, b, C), u < 1 && (f++, r(w, b < C ? k : R, C, s))), C = w.length) : u === 0 && (f++, w = [0]), B[v++] = f, u && w[0] ? w[C++] = j[P] || 0 : (w = [j[P]], C = 1);
        while ((P++ < E || w[0] !== void 0) && S--);
        p = w[0] !== void 0;
      }
      B[0] || B.shift();
    }
    if (m == 1)
      $.e = d, hu = p;
    else {
      for (v = 1, f = B[0]; f >= 10; f /= 10)
        v++;
      $.e = v + d * m - 1, ue($, l ? o + $.e + 1 : o, i, p);
    }
    return $;
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
        o += de, i = n, d = v[f = 0], s = d / He(10, t - i - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / de), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= de, i = o - de + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        o %= de, i = o - de + t, s = i < 0 ? 0 : d / He(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % He(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / He(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = He(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = He(10, de - o), v[f] = i > 0 ? (d / He(10, t - i) % He(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, i = v[0]; i >= 10; i /= 10)
              o++;
            for (i = v[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            o != l && (e.e++, v[0] == Tn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != Tn)
              break;
            v[f--] = 0, l = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return me && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function In(e, n, r) {
  if (!e.isFinite())
    return $u(e);
  var a, t = e.e, o = Xe(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + qn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + qn(-t - 1) + o, r && (a = r - i) > 0 && (o += qn(a))) : t >= i ? (o += qn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + qn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += qn(a))), o;
}
function ao(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function Ft(e, n, r) {
  if (n > ep)
    throw me = !0, r && (e.precision = r), Error(gu);
  return ue(new e(Rt), n, 1, !0);
}
function kn(e, n, r) {
  if (n > Go)
    throw Error(gu);
  return ue(new e(Ut), n, r, !0);
}
function Cu(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function qn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Su(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (me = !1; ; ) {
    if (r % 2 && (o = o.times(n), ll(o.d, i) && (t = !0)), r = Qe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), ll(n.d, i);
  }
  return me = !0, o;
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
  for (n == null ? (me = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(He(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), Xe(l.d).slice(0, s) === Xe(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && st(i.d, s - a, m, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = p, m, me = !0);
      else
        return f.precision = p, i;
    }
    i = l;
  }
}
function xn(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, m = 1, p = 10, y = e, g = y.d, $ = y.constructor, B = $.rounding, w = $.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new $(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (me = !1, d = w) : d = n, $.precision = d += p, r = Xe(g), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = Xe(y.d), a = r.charAt(0), m++;
    o = y.e, a > 1 ? (y = new $("0." + r), o++) : y = new $(a + "." + r.slice(1));
  } else
    return u = Ft($, d + 2, w).times(o + ""), y = xn(new $(a + "." + r.slice(1)), d - p).plus(u), $.precision = w, n == null ? ue(y, w, B, me = !0) : y;
  for (v = y, s = i = y = Pe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new $(t), d, 1)), Xe(u.d).slice(0, d) === Xe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Ft($, d + 2, w).times(o + ""))), s = Pe(s, new $(m), d, 1), n == null)
        if (st(s.d, d - p, B, l))
          $.precision = d += p, u = i = y = Pe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = l = 1;
        else
          return ue(s, $.precision = w, B, me = !0);
      else
        return $.precision = w, s;
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
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % de, r < 0 && (a += de), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= de; a < t; )
        e.d.push(+n.slice(a, a += de));
      n = n.slice(a), a = de - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), me && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function rp(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), wu.test(n))
      return Xo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Qm.test(n))
    r = 16, n = n.toLowerCase();
  else if (Jm.test(n))
    r = 2;
  else if (_m.test(n))
    r = 8;
  else
    throw Error(mr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = Su(a, new a(r), o, o * 2)), u = Mt(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = ao(u, d), e.d = u, me = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? He(2, s) : er.pow(2, s))), me = !0, e);
}
function ap(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ya(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / to(5, r)), n = Ya(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Ya(e, n, r, a, t) {
  var o, i, l, s, u = e.precision, d = Math.ceil(u / de);
  for (me = !1, s = r.times(r), l = new e(a); ; ) {
    if (i = Pe(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(i) : a.minus(i), a = Pe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(a), i.d[d] !== void 0) {
      for (o = d; i.d[o] === l.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = l, l = a, a = i, i = o;
  }
  return me = !0, i.d.length = d + 1, i;
}
function to(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Tu(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return An = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    An = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return An = il(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    An = il(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ti(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (on(r, 1, gr), a === void 0 ? a = m.rounding : on(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = $u(e);
  else {
    for (d = In(e), i = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - i, f.d = Mt(In(f), 10, t), f.e = f.d.length), v = Mt(d, 10, t), o = s = v.length; v[--s] == 0; )
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
            for (v = Mt(d, t, n), s = v.length; !v[s - 1]; --s)
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
function tp(e) {
  return new this(e).abs();
}
function op(e) {
  return new this(e).acos();
}
function ip(e) {
  return new this(e).acosh();
}
function lp(e, n) {
  return new this(e).plus(n);
}
function sp(e) {
  return new this(e).asin();
}
function up(e) {
  return new this(e).asinh();
}
function dp(e) {
  return new this(e).atan();
}
function vp(e) {
  return new this(e).atanh();
}
function fp(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function cp(e) {
  return new this(e).cbrt();
}
function mp(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function pp(e, n, r) {
  return new this(e).clamp(n, r);
}
function hp(e) {
  if (!e || typeof e != "object")
    throw Error(ro + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    gr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Da,
    0,
    "toExpPos",
    0,
    Da,
    "maxE",
    0,
    Da,
    "minE",
    -Da,
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
        throw Error(mr + r + ": " + a);
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
      throw Error(mr + r + ": " + a);
  return this;
}
function gp(e) {
  return new this(e).cos();
}
function yp(e) {
  return new this(e).cosh();
}
function Pu(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, sl(o)) {
      u.s = o.s, me ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        me ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Xo(u, o.toString());
    } else if (s !== "string")
      throw Error(mr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), wu.test(o) ? Xo(u, o) : rp(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = hp, t.clone = Pu, t.isDecimal = sl, t.abs = tp, t.acos = op, t.acosh = ip, t.add = lp, t.asin = sp, t.asinh = up, t.atan = dp, t.atanh = vp, t.atan2 = fp, t.cbrt = cp, t.ceil = mp, t.clamp = pp, t.cos = gp, t.cosh = yp, t.div = bp, t.exp = wp, t.floor = Cp, t.hypot = Sp, t.ln = kp, t.log = $p, t.log10 = Pp, t.log2 = Tp, t.max = Op, t.min = Vp, t.mod = Mp, t.mul = Bp, t.pow = Ip, t.random = Ep, t.round = Dp, t.sign = Np, t.sin = Ap, t.sinh = zp, t.sqrt = Lp, t.sub = Rp, t.sum = Up, t.tan = Fp, t.tanh = Hp, t.trunc = Yp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function bp(e, n) {
  return new this(e).div(n);
}
function wp(e) {
  return new this(e).exp();
}
function Cp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function Sp() {
  var e, n, r = new this(0);
  for (me = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return me = !0, new this(1 / 0);
      r = n;
    }
  return me = !0, r.sqrt();
}
function sl(e) {
  return e instanceof er || e && e.toStringTag === bu || !1;
}
function kp(e) {
  return new this(e).ln();
}
function $p(e, n) {
  return new this(e).log(n);
}
function Tp(e) {
  return new this(e).log(2);
}
function Pp(e) {
  return new this(e).log(10);
}
function Op() {
  return ku(this, arguments, "lt");
}
function Vp() {
  return ku(this, arguments, "gt");
}
function Mp(e, n) {
  return new this(e).mod(n);
}
function Bp(e, n) {
  return new this(e).mul(n);
}
function Ip(e, n) {
  return new this(e).pow(n);
}
function Ep(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : on(e, 1, gr), a = Math.ceil(e / de), this.crypto)
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
  for (a = l[--o], e %= de, a && e && (t = He(10, de - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
    l.pop();
  if (o < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= de)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
  }
  return i.e = r, i.d = l, i;
}
function Dp(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Np(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Ap(e) {
  return new this(e).sin();
}
function zp(e) {
  return new this(e).sinh();
}
function Lp(e) {
  return new this(e).sqrt();
}
function Rp(e, n) {
  return new this(e).sub(n);
}
function Up() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (me = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return me = !0, ue(r, this.precision, this.rounding);
}
function Fp(e) {
  return new this(e).tan();
}
function Hp(e) {
  return new this(e).tanh();
}
function Yp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
X[Symbol.for("nodejs.util.inspect.custom")] = X.toString;
X[Symbol.toStringTag] = "Decimal";
var er = X.constructor = Pu(Wo);
Rt = new er(Rt);
Ut = new er(Ut);
var jp = {
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
  onBeforeChange: U(),
  onChange: U(),
  onIncrement: U(),
  onDecrement: U(),
  "onUpdate:modelValue": U()
}, {
  n: Wp,
  classes: Gp
} = ne("counter"), ul = 100, dl = 600, qp = ["inputmode", "readonly", "disabled"];
function Xp(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = te("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [N(
      "div",
      Ve({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Q(
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
          default: ve(() => [Q(r, {
            name: "minus"
          })]),
          _: 1
          /* STABLE */
        },
        8,
        ["class", "style", "ripple", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), we(N(
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
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.inputValue = o),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        qp
      ), [[wv, e.inputValue]]), Q(
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
          default: ve(() => [Q(r, {
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
var Ou = ee({
  name: "VarCounter",
  components: {
    VarButton: Ke,
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Re
  },
  inheritAttrs: !1,
  props: jp,
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
    } = a ?? {}, d, v, f, m, p = () => i(e.rules, e.modelValue), y = (R) => {
      Me(() => {
        var {
          validateTrigger: z,
          rules: ae,
          modelValue: oe
        } = e;
        o(z, R, ae, oe);
      });
    }, g = () => {
      var {
        min: R
      } = e;
      T(e["onUpdate:modelValue"], R != null ? L(R) : 0), l();
    }, $ = {
      reset: g,
      validate: p,
      resetValidation: l
    }, B = F(() => {
      var {
        max: R,
        modelValue: z
      } = e;
      return R != null && L(z) >= L(R);
    }), w = F(() => {
      var {
        min: R,
        modelValue: z
      } = e;
      return R != null && L(z) <= L(R);
    }), C = (R) => {
      var {
        decimalLength: z,
        max: ae,
        min: oe
      } = e, Y = L(R);
      return ae != null && Y > L(ae) && (Y = L(ae)), oe != null && Y < L(oe) && (Y = L(oe)), R = String(Y), z != null && (R = Y.toFixed(L(z))), R;
    }, I = (R) => {
      var {
        lazyChange: z,
        onBeforeChange: ae
      } = e, {
        value: oe
      } = R.target, Y = C(oe);
      z ? T(ae, L(Y), j) : J(Y), y("onInputChange");
    }, S = () => {
      var {
        disabled: R,
        readonly: z,
        disableDecrement: ae,
        decrementButton: oe,
        lazyChange: Y,
        step: _,
        modelValue: K,
        onDecrement: A,
        onBeforeChange: G
      } = e;
      if (!(u != null && u.value || s != null && s.value || R || z || ae || !oe) && !w.value) {
        var Z = new er(L(K)).minus(new er(L(_))).toString(), ce = C(Z), fe = L(ce);
        T(A, fe), Y ? T(G, fe, j) : (J(ce), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: R,
        readonly: z,
        disableIncrement: ae,
        incrementButton: oe,
        lazyChange: Y,
        step: _,
        modelValue: K,
        onIncrement: A,
        onBeforeChange: G
      } = e;
      if (!(u != null && u.value || s != null && s.value || R || z || ae || !oe) && !B.value) {
        var Z = new er(L(K)).plus(new er(L(_))).toString(), ce = C(Z), fe = L(ce);
        T(A, fe), Y ? T(G, fe, j) : (J(ce), y("onIncrement"));
      }
    }, P = () => {
      var {
        press: R,
        lazyChange: z
      } = e;
      !R || z || (m = window.setTimeout(() => {
        H();
      }, dl));
    }, E = () => {
      var {
        press: R,
        lazyChange: z
      } = e;
      !R || z || (f = window.setTimeout(() => {
        k();
      }, dl));
    }, V = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, b = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, k = () => {
      d = window.setTimeout(() => {
        D(), k();
      }, ul);
    }, H = () => {
      v = window.setTimeout(() => {
        S(), H();
      }, ul);
    }, J = (R) => {
      n.value = R;
      var z = L(R);
      T(e["onUpdate:modelValue"], z);
    }, j = (R) => {
      J(C(String(R))), y("onLazyChange");
    };
    return T(r, $), le(() => e.modelValue, (R) => {
      J(C(String(R))), T(e.onChange, L(R));
    }), J(C(String(e.modelValue))), {
      n: Wp,
      classes: Gp,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: B,
      isMin: w,
      validate: p,
      reset: g,
      resetValidation: l,
      handleChange: I,
      decrement: S,
      increment: D,
      pressDecrement: P,
      pressIncrement: E,
      releaseDecrement: V,
      releaseIncrement: b,
      toSizeUnit: pe,
      toNumber: L
    };
  }
});
Ou.render = Xp;
const Ar = Ou;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var $S = Ar, Vu = 60, Mu = Vu * 60, Bu = Mu * 24, Kp = Bu * 7, ja = 1e3, ho = Vu * ja, vl = Mu * ja, Zp = Bu * ja, Jp = Kp * ja, Pi = "millisecond", Na = "second", Aa = "minute", za = "hour", Xn = "day", Bt = "week", Sn = "month", Iu = "quarter", Kn = "year", La = "date", Qp = "YYYY-MM-DDTHH:mm:ssZ", fl = "Invalid Date", _p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, xp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const eh = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Ko = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, nh = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Ko(t, 2, "0") + ":" + Ko(o, 2, "0");
}, rh = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, ah = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, th = function(n) {
  var r = {
    M: Sn,
    y: Kn,
    w: Bt,
    d: Xn,
    D: La,
    h: za,
    m: Aa,
    s: Na,
    ms: Pi,
    Q: Iu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, oh = function(n) {
  return n === void 0;
};
const ih = {
  s: Ko,
  z: nh,
  m: rh,
  a: ah,
  p: th,
  u: oh
};
var nt = "en", zr = {};
zr[nt] = eh;
var Oi = function(n) {
  return n instanceof oo;
}, Ht = function e(n, r, a) {
  var t;
  if (!n)
    return nt;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    zr[o] && (t = o), r && (zr[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    zr[l] = n, t = l;
  }
  return !a && t && (nt = t), t || !a && nt;
}, ie = function(n, r) {
  if (Oi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new oo(a);
}, lh = function(n, r) {
  return ie(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = ih;
Te.l = Ht;
Te.i = Oi;
Te.w = lh;
var sh = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(_p);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, oo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Ht(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = sh(a), this.$x = a.x || {}, this.init();
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
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function($, B) {
      var w = Te.w(o.$u ? Date.UTC(o.$y, B, $) : new Date(o.$y, B, $), o);
      return i ? w : w.endOf(Xn);
    }, u = function($, B) {
      var w = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Te.w(o.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? w : C).slice(B)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Kn:
        return i ? s(1, 0) : s(31, 11);
      case Sn:
        return i ? s(1, v) : s(0, v + 1);
      case Bt: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(i ? f - y : f + (6 - y), v);
      }
      case Xn:
      case La:
        return u(m + "Hours", 0);
      case za:
        return u(m + "Minutes", 1);
      case Aa:
        return u(m + "Seconds", 2);
      case Na:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Xn] = l + "Date", o[La] = l + "Date", o[Sn] = l + "Month", o[Kn] = l + "FullYear", o[za] = l + "Hours", o[Aa] = l + "Minutes", o[Na] = l + "Seconds", o[Pi] = l + "Milliseconds", o)[i], u = i === Xn ? this.$D + (t - this.$W) : t;
    if (i === Sn || i === Kn) {
      var d = this.clone().set(La, 1);
      d.$d[s](u), d.init(), this.$d = d.set(La, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === Sn)
      return this.set(Sn, this.$M + a);
    if (l === Kn)
      return this.set(Kn, this.$y + a);
    if (l === Xn)
      return s(1);
    if (l === Bt)
      return s(7);
    var u = (i = {}, i[Aa] = ho, i[za] = vl, i[Na] = ja, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || fl;
    var i = a || Qp, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, p = function(w, C, I, S) {
      return w && (w[C] || w(t, i)) || I[C].slice(0, S);
    }, y = function(w) {
      return Te.s(s % 12 || 12, w, "0");
    }, g = m || function(B, w, C) {
      var I = B < 12 ? "AM" : "PM";
      return C ? I.toLowerCase() : I;
    }, $ = {
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
      h: y(1),
      hh: y(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(xp, function(B, w) {
      return w || $[B] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = ie(a), u = (s.utcOffset() - this.utcOffset()) * ho, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Kn] = v / 12, i[Sn] = v, i[Iu] = v / 3, i[Bt] = (d - u) / Jp, i[Xn] = (d - u) / Zp, i[za] = d / vl, i[Aa] = d / ho, i[Na] = d / ja, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return zr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = Ht(a, t, !0);
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
}(), Eu = oo.prototype;
ie.prototype = Eu;
[["$ms", Pi], ["$s", Na], ["$m", Aa], ["$H", za], ["$W", Xn], ["$M", Sn], ["$y", Kn], ["$D", La]].forEach(function(e) {
  Eu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ie.extend = function(e, n) {
  return e.$i || (e(n, oo, ie), e.$i = !0), ie;
};
ie.locale = Ht;
ie.isDayjs = Oi;
ie.unix = function(e) {
  return ie(e * 1e3);
};
ie.en = zr[nt];
ie.Ls = zr;
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
function uh(e) {
  return ["date", "month"].includes(e);
}
var It = [{
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
}], et = [{
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
}], dh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: uh
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
  onPreview: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: vh
} = ne("picker-header");
function fh(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), O(
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
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ve(() => [Q(r, {
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
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [Q(
        De,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), O(
            "div",
            {
              key: e.showDate
            },
            re(e.showDate),
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
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ve(() => [Q(r, {
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
var Au = ee({
  name: "PanelHeader",
  components: {
    VarButton: Ke,
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
      n: vh,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
Au.render = fh;
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
  n: kt,
  classes: ch
} = ne("month-picker"), {
  n: $t
} = ne("date-picker");
function mh(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(
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
      ), Q(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), O("ul", {
            key: e.panelKey
          }, [(h(!0), O(
            Oe,
            null,
            Ae(e.MONTH_LIST, (t) => (h(), O("li", {
              key: t.index
            }, [Q(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Zo({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [be(
                  re(e.getMonthAbbr(t.index)),
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
var Lu = ee({
  name: "MonthPickerPanel",
  components: {
    VarButton: Ke,
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
    } = n, [a, t] = e.current.split("-"), o = M(!1), i = M(0), l = M(null), s = Be({
      left: !1,
      right: !1
    }), u = F(() => e.choose.chooseYear === e.preview.previewYear), d = F(() => e.preview.previewYear === a), v = (B) => {
      var w, C;
      return (w = (C = Ye.value.datePickerMonthDict) == null ? void 0 : C[B].abbr) != null ? w : "";
    }, f = (B) => {
      var {
        preview: {
          previewYear: w
        },
        componentProps: {
          min: C,
          max: I
        }
      } = e, S = !0, D = !0, P = w + "-" + B;
      return I && (S = ie(P).isSameOrBefore(ie(I), "month")), C && (D = ie(P).isSameOrAfter(ie(C), "month")), S && D;
    }, m = (B) => {
      var {
        choose: {
          chooseMonths: w,
          chooseDays: C,
          chooseRangeMonth: I
        },
        componentProps: {
          type: S,
          range: D
        }
      } = e;
      if (D) {
        if (!I.length)
          return !1;
        var P = ie(B).isSameOrBefore(ie(I[1]), "month"), E = ie(B).isSameOrAfter(ie(I[0]), "month");
        return P && E;
      }
      return S === "month" ? w.includes(B) : C.some((V) => V.includes(B));
    }, p = (B) => {
      var {
        choose: {
          chooseMonth: w
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: I,
          color: S,
          multiple: D,
          range: P
        }
      } = e, E = C + "-" + B, V = () => P || D ? m(E) : (w == null ? void 0 : w.index) === B && u.value, b = () => f(B) ? I ? !I(E) : !1 : !0, k = b(), H = () => k ? !0 : P || D ? !m(E) : !u.value || (w == null ? void 0 : w.index) !== B, J = () => d.value && t === B && e.componentProps.showCurrent ? (P || D || u.value) && k ? !0 : P || D ? !m(E) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, j = () => k ? "" : J() ? S ?? "" : V() ? "" : $t() + "-color-cover", R = j().startsWith($t());
      return {
        outline: J(),
        text: H(),
        color: H() ? "" : S,
        textColor: R ? "" : j(),
        [$t() + "-color-cover"]: R,
        class: ch(kt("button"), [k, kt("button--disabled")])
      };
    }, y = (B, w) => {
      var C = w.currentTarget;
      C.classList.contains(kt("button--disabled")) || r("choose-month", B);
    }, g = (B) => {
      o.value = B === "prev", i.value += B === "prev" ? -1 : 1, r("check-preview", "year", B);
    }, $ = (B) => {
      l.value.checkDate(B);
    };
    return le(() => e.preview.previewYear, (B) => {
      var {
        componentProps: {
          min: w,
          max: C
        }
      } = e;
      C && (s.right = !ie("" + (L(B) + 1)).isSameOrBefore(ie(C), "year")), w && (s.left = !ie("" + (L(B) - 1)).isSameOrAfter(ie(w), "year"));
    }, {
      immediate: !0
    }), {
      n: kt,
      nDate: $t,
      pack: Ye,
      MONTH_LIST: It,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: $,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: g
    };
  }
});
Lu.render = mh;
const ph = Lu;
var {
  n: cl,
  classes: hh
} = ne("year-picker"), gh = ["onClick"];
function yh(e, n) {
  return h(), O(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), O(
      Oe,
      null,
      Ae(e.yearList, (r) => (h(), O(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: q({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        re(r),
        15,
        gh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Ru = ee({
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
      classes: hh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Ru.render = yh;
const bh = Ru;
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
  n: Ea,
  classes: wh
} = ne("day-picker"), {
  n: Tt
} = ne("date-picker");
function Ch(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.n("content"))
      },
      [Q(
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
      ), Q(
        De,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), O("div", {
            key: e.panelKey
          }, [N(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), O(
              Oe,
              null,
              Ae(e.sortWeekList, (t) => (h(), O(
                "li",
                {
                  key: t.index
                },
                re(e.getDayAbbr(t.index)),
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
            [(h(!0), O(
              Oe,
              null,
              Ae(e.days, (t, o) => (h(), O("li", {
                key: o
              }, [Q(
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
                  default: ve(() => [be(
                    re(e.filterDay(t)),
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
var Uu = ee({
  name: "DayPickerPanel",
  components: {
    VarButton: Ke,
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
    } = n, [a, t, o] = e.current.split("-"), i = M([]), l = M(!1), s = M(0), u = M(null), d = Be({
      left: !1,
      right: !1
    }), v = F(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = F(() => {
      var P;
      return e.choose.chooseYear === e.preview.previewYear && ((P = e.choose.chooseMonth) == null ? void 0 : P.index) === e.preview.previewMonth.index;
    }), m = F(() => {
      var P = et.findIndex((E) => E.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? et : et.slice(P).concat(et.slice(0, P));
    }), p = (P) => {
      var E, V;
      return (E = (V = Ye.value.datePickerWeekDict) == null ? void 0 : V[P].abbr) != null ? E : "";
    }, y = (P) => P > 0 ? P : "", g = () => {
      var {
        preview: {
          previewMonth: P,
          previewYear: E
        }
      } = e, V = ie(E + "-" + P.index).daysInMonth(), b = ie(E + "-" + P.index + "-01").day(), k = m.value.findIndex((H) => H.index === "" + b);
      i.value = [...Array(k).fill(-1), ...Array.from(Array(V + 1).keys())].filter((H) => H);
    }, $ = () => {
      var {
        preview: {
          previewYear: P,
          previewMonth: E
        },
        componentProps: {
          max: V,
          min: b
        }
      } = e;
      if (V) {
        var k = P + "-" + (L(E.index) + 1);
        d.right = !ie(k).isSameOrBefore(ie(V), "month");
      }
      if (b) {
        var H = P + "-" + (L(E.index) - 1);
        d.left = !ie(H).isSameOrAfter(ie(b), "month");
      }
    }, B = (P) => {
      var {
        preview: {
          previewYear: E,
          previewMonth: V
        },
        componentProps: {
          min: b,
          max: k
        }
      } = e, H = !0, J = !0, j = E + "-" + V.index + "-" + P;
      return k && (H = ie(j).isSameOrBefore(ie(k), "day")), b && (J = ie(j).isSameOrAfter(ie(b), "day")), H && J;
    }, w = (P) => {
      var {
        choose: {
          chooseDays: E,
          chooseRangeDay: V
        },
        componentProps: {
          range: b
        }
      } = e;
      if (b) {
        if (!V.length)
          return !1;
        var k = ie(P).isSameOrBefore(ie(V[1]), "day"), H = ie(P).isSameOrAfter(ie(V[0]), "day");
        return k && H;
      }
      return E.includes(P);
    }, C = (P) => {
      if (P < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ea("button")
        };
      var {
        choose: {
          chooseDay: E
        },
        preview: {
          previewYear: V,
          previewMonth: b
        },
        componentProps: {
          allowedDates: k,
          color: H,
          multiple: J,
          range: j
        }
      } = e, R = V + "-" + b.index + "-" + P, z = () => j || J ? w(R) : L(E) === P && f.value, ae = () => B(P) ? k ? !k(R) : !1 : !0, oe = ae(), Y = () => oe ? !0 : j || J ? !w(R) : !f.value || L(E) !== P, _ = () => v.value && L(o) === P && e.componentProps.showCurrent ? (j || J || f.value) && oe ? !0 : j || J ? !w(R) : f.value ? E !== o : !0 : !1, K = () => oe ? "" : _() ? H ?? "" : z() ? "" : Tt() + "-color-cover", A = K().startsWith(Tt());
      return {
        text: Y(),
        outline: _(),
        textColor: A ? "" : K(),
        [Tt() + "-color-cover"]: A,
        class: wh(Ea("button"), Ea("button--usable"), [oe, Ea("button--disabled")])
      };
    }, I = (P) => {
      l.value = P === "prev", s.value += P === "prev" ? -1 : 1, r("check-preview", "month", P);
    }, S = (P, E) => {
      var V = E.currentTarget;
      V.classList.contains(Ea("button--disabled")) || r("choose-day", P);
    }, D = (P) => {
      u.value.checkDate(P);
    };
    return ln(() => {
      g(), $();
    }), le(() => e.preview, () => {
      g(), $();
    }), {
      n: Ea,
      nDate: Tt,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: p,
      checkDate: I,
      chooseDay: S,
      buttonProps: C
    };
  }
});
Uu.render = Ch;
const Sh = Uu;
var {
  n: kh,
  classes: $h
} = ne("date-picker");
function Th(e, n) {
  var r = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
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
        [W(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          re(e.chooseYear),
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
        [Q(
          De,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, i, l;
              return [e.type === "month" ? (h(), O("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "month", {
                key: 2,
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [be(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), O("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                re(e.getDateTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "date", vi(Ve({
                key: 2
              }, e.slotProps)), () => [be(
                re(e.getDateTitle),
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
      [Q(
        De,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (h(), ge(
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
var Fu = ee({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: ph,
    YearPickerPanel: bh,
    DayPickerPanel: Sh
  },
  props: dh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ie().format("YYYY-MM-D"), [i, l] = o.split("-"), s = It.find((se) => se.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), p = M(), y = M(s), g = M(i), $ = M(!1), B = M([]), w = M([]), C = M([]), I = M([]), S = M(null), D = M(null), P = Be({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), E = F(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: B.value,
      chooseDays: w.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: I.value
    })), V = F(() => ({
      previewMonth: y.value,
      previewYear: g.value
    })), b = F(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
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
        var xe = I.value.map((co) => ie(co).format("YYYY-MM-DD"));
        return xe.length ? xe[0] + " ~ " + xe[1] : "";
      }
      if (ke)
        return "" + w.value.length + Ye.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var cn = ie(m.value + "-" + f.value.index + "-" + p.value).day(), Ia = et.find((co) => co.index === "" + cn), Ri = (se = (ye = Ye.value.datePickerWeekDict) == null ? void 0 : ye[Ia.index].name) != null ? se : "", fv = (he = (Se = Ye.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? he : "", cv = ba(p.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + cv + " " + Ri.slice(0, 3) : Ri.slice(0, 3) + ", " + fv.slice(0, 3) + " " + p.value;
    }), H = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), J = F(() => !e.touchable || ["", "year"].includes(H.value)), j = F(() => {
      var se, ye, he, Se, ke = ie(m.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + p.value).day(), Ue = p.value ? ba(p.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (he = (Se = f.value) == null ? void 0 : Se.index) != null ? he : "",
        date: Ue
      };
    }), R = F(() => E.value.chooseRangeDay.map((se) => ie(se).format("YYYY-MM-DD"))), z = F(() => m.value === g.value), ae = F(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), oe = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, Y = (se) => {
      if (!J.value) {
        var {
          clientX: ye,
          clientY: he
        } = se.touches[0];
        n = ye, r = he;
      }
    }, _ = (se, ye) => se >= ye && se > 20 ? "x" : "y", K = (se) => {
      if (!J.value) {
        var {
          clientX: ye,
          clientY: he
        } = se.touches[0], Se = ye - n, ke = he - r;
        t = _(Math.abs(Se), Math.abs(ke)), a = Se > 0 ? "prev" : "next";
      }
    }, A = () => {
      if (!(J.value || t !== "x")) {
        var se = H.value === "month" ? S : D;
        Jt(() => {
          se.value.forwardRef(a), bt();
        });
      }
    }, G = (se, ye) => {
      var he = ye === "month" ? C : I;
      if (he.value = v.value ? [se, se] : [he.value[0], se], v.value = !v.value, v.value) {
        var Se = ie(he.value[0]).isAfter(he.value[1]), ke = Se ? [he.value[1], he.value[0]] : [...he.value];
        T(e["onUpdate:modelValue"], ke), T(e.onChange, ke);
      }
    }, Z = (se, ye) => {
      var he = ye === "month" ? B : w, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = he.value.map((xe) => ie(xe).format(Se)), Ue = ke.findIndex((xe) => xe === se);
      Ue === -1 ? ke.push(se) : ke.splice(Ue, 1), T(e["onUpdate:modelValue"], ke), T(e.onChange, ke);
    }, ce = (se, ye) => !m.value || !f.value ? !1 : z.value ? se === "month" ? ye.index < f.value.index : ae.value ? ye < L(p.value) : f.value.index > y.value.index : m.value > g.value, fe = (se) => {
      var {
        readonly: ye,
        range: he,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": Ue
      } = e;
      if (!(se < 0 || ye)) {
        $.value = ce("day", se);
        var xe = g.value + "-" + y.value.index + "-" + se, cn = ie(xe).format("YYYY-MM-DD");
        he ? G(cn, "day") : Se ? Z(cn, "day") : (T(Ue, cn), T(ke, cn));
      }
    }, Ne = (se) => {
      var {
        type: ye,
        readonly: he,
        range: Se,
        multiple: ke,
        onChange: Ue,
        onPreview: xe,
        "onUpdate:modelValue": cn
      } = e;
      if ($.value = ce("month", se), ye === "month" && !he) {
        var Ia = g.value + "-" + se.index;
        Se ? G(Ia, "month") : ke ? Z(Ia, "month") : (T(cn, Ia), T(Ue, Ia));
      } else
        y.value = se, T(xe, L(g.value), L(y.value.index));
      d.value = !1;
    }, Ge = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, T(e.onPreview, L(g.value), L(y.value.index));
    }, qe = (se, ye) => {
      var he = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + he);
      else {
        var Se = L(y.value.index) + he;
        Se < 1 && (g.value = "" + (L(g.value) - 1), Se = 12), Se > 12 && (g.value = "" + (L(g.value) + 1), Se = 1), y.value = It.find((ke) => L(ke.index) === Se);
      }
      T(e.onPreview, L(g.value), L(y.value.index));
    }, ze = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, _e = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ba = (se, ye) => {
      var he = ye === "month" ? C : I, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((cn) => ie(cn).format(Se)).slice(0, 2), Ue = he.value.some((cn) => _e(cn));
      if (!Ue) {
        he.value = ke;
        var xe = ie(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && xe && (he.value = [he.value[1], he.value[0]]);
      }
    }, fo = (se, ye) => {
      var he = ye === "month" ? B : w, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Ue) => ie(Ue).format(Se))));
      he.value = ke.filter((Ue) => Ue !== "Invalid Date");
    }, yt = (se) => {
      var ye = ie(se).format("YYYY-MM-D");
      if (!_e(ye)) {
        var [he, Se, ke] = ye.split("-"), Ue = It.find((xe) => xe.index === Se);
        f.value = Ue, m.value = he, p.value = ke, y.value = Ue, g.value = he;
      }
    }, bt = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!ze() || _e(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, Ba(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          fo(se, e.type);
        } else
          yt(se);
    }, {
      immediate: !0
    }), le(H, bt), {
      n: kh,
      classes: $h,
      monthPanelEl: S,
      dayPanelEl: D,
      reverse: $,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: b,
      getDateTitle: k,
      getPanelType: H,
      getChoose: E,
      getPreview: V,
      componentProps: P,
      slotProps: j,
      formatRange: R,
      clickEl: oe,
      handleTouchstart: Y,
      handleTouchmove: K,
      handleTouchend: A,
      getChooseDay: fe,
      getChooseMonth: Ne,
      getChooseYear: Ge,
      checkPreview: qe
    };
  }
});
Fu.render = Th;
const Lr = Fu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var TS = Lr;
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
function Ph(e) {
  return ["left", "center", "right"].includes(e);
}
var Oh = Qo({
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
    validator: Ph
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
}, Je(pt, [
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
  n: Vh,
  classes: Mh
} = ne("dialog");
function Bh(e, n) {
  var r = te("var-button"), a = te("var-popup");
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
      default: ve(() => [N(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: _o({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [N(
          "div",
          {
            class: c(e.n("title"))
          },
          [W(e.$slots, "title", {}, () => [be(
            re(e.dt(e.title, e.pack.dialogTitle)),
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
          [W(e.$slots, "default", {}, () => [be(
            re(e.message),
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
              default: ve(() => [be(
                re(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (h(), ge(
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
              default: ve(() => [be(
                re(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
var Hu = ee({
  name: "VarDialog",
  components: {
    VarPopup: pn,
    VarButton: Ke
  },
  inheritAttrs: !1,
  props: Oh,
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
      n: Vh,
      classes: Mh,
      pack: Ye,
      dt: Kt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: pe
    };
  }
});
Hu.render = Bh;
const ir = Hu;
function Yt() {
  return Yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Yt.apply(this, arguments);
}
var Jn, jt = {};
function Ih(e) {
  return e === void 0 && (e = {}), Ze(e) ? Yt({}, jt, {
    message: e
  }) : Yt({}, jt, e);
}
function Sa(e) {
  return mt() ? new Promise((n) => {
    Sa.close();
    var r = Ih(e), a = Be(r);
    a.teleport = "body", Jn = a;
    var {
      unmountInstance: t
    } = Qa(ir, a, {
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
        T(a.onClosed), t(), Jn === a && (Jn = null);
      },
      onRouteChange: () => {
        t(), Jn === a && (Jn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function Eh(e) {
  jt = e;
}
function Dh() {
  jt = {};
}
function Nh() {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(Sa, {
  setDefaultOptions: Eh,
  resetDefaultOptions: Dh,
  close: Nh
});
ir.install = function(e) {
  e.component(ir.name, ir);
};
Sa.install = function(e) {
  e.component(ir.name, ir);
};
Sa.Component = ir;
var PS = ir, Ah = {
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
function Ra() {
  return Ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ra.apply(this, arguments);
}
var {
  n: zh,
  classes: Lh
} = ne("divider");
function Rh(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (h(), O(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Yu = ee({
  name: "VarDivider",
  props: Ah,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Be({
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
        return Ra({}, d);
      var v = L(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Ra({}, d, {
        height: "calc(80% - " + pe(f) + ")"
      }) : Ra({}, d, {
        width: "calc(100% - " + pe(f) + ")",
        left: v > 0 ? pe(f) : pe(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ln(() => {
      i();
    }), Xt(() => {
      i();
    }), Ra({
      n: zh,
      classes: Lh
    }, Cv(a), {
      style: o,
      isInset: t
    });
  }
});
Yu.render = Rh;
const Rr = Yu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var OS = Rr, Uh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Et(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Uh[n];
  });
}
var zn = "top", pr = "bottom", ka = "right", lr = "left", io = "auto", lo = [zn, pr, ka, lr], so = "start", ut = "end", Fh = "clippingParents", ju = "viewport", _a = "popper", Hh = "reference", ml = /* @__PURE__ */ lo.reduce(function(e, n) {
  return e.concat([n + "-" + so, n + "-" + ut]);
}, []), Wu = /* @__PURE__ */ [].concat(lo, [io]).reduce(function(e, n) {
  return e.concat([n, n + "-" + so, n + "-" + ut]);
}, []), Yh = "beforeRead", jh = "read", Wh = "afterRead", Gh = "beforeMain", qh = "main", Xh = "afterMain", Kh = "beforeWrite", Zh = "write", Jh = "afterWrite", xo = [Yh, jh, Wh, Gh, qh, Xh, Kh, Zh, Jh];
function Ln(e) {
  return e.split("-")[0];
}
var Qh = {
  start: "end",
  end: "start"
};
function pl(e) {
  return e.replace(/start|end/g, function(n) {
    return Qh[n];
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
function $a(e) {
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
function yr(e) {
  return (($a(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var rt = Math.max, hl = Math.min, Wa = Math.round;
function ei() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Gu() {
  return !/^((?!chrome|android).)*safari/i.test(ei());
}
function Ga(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && gn(e) && (t = e.offsetWidth > 0 && Wa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Wa(a.height) / e.offsetHeight || 1);
  var i = $a(e) ? Cn(e) : window, l = i.visualViewport, s = !Gu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
  return Ga(yr(e)).left + Mi(e).scrollLeft;
}
function _h(e, n) {
  var r = Cn(e), a = yr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
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
function On(e) {
  return Cn(e).getComputedStyle(e);
}
function xh(e) {
  var n, r = yr(e), a = Mi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = rt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = rt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Bi(e), s = -a.scrollTop;
  return On(t || r).direction === "rtl" && (l += rt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function En(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function uo(e) {
  return En(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Vi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    yr(e)
  );
}
function Ii(e) {
  var n = On(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function qu(e) {
  return ["html", "body", "#document"].indexOf(En(e)) >= 0 ? e.ownerDocument.body : gn(e) && Ii(e) ? e : qu(uo(e));
}
function at(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = qu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], Ii(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(at(uo(i)))
  );
}
function eg(e) {
  return ["table", "td", "th"].indexOf(En(e)) >= 0;
}
function gl(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  On(e).position === "fixed" ? null : e.offsetParent;
}
function ng(e) {
  var n = /firefox/i.test(ei()), r = /Trident/i.test(ei());
  if (r && gn(e)) {
    var a = On(e);
    if (a.position === "fixed")
      return null;
  }
  var t = uo(e);
  for (Vi(t) && (t = t.host); gn(t) && ["html", "body"].indexOf(En(t)) < 0; ) {
    var o = On(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ei(e) {
  for (var n = Cn(e), r = gl(e); r && eg(r) && On(r).position === "static"; )
    r = gl(r);
  return r && (En(r) === "html" || En(r) === "body" && On(r).position === "static") ? n : r || ng(e) || n;
}
function rg(e, n) {
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
function ag(e, n) {
  var r = Ga(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function yl(e, n, r) {
  return n === ju ? ni(_h(e, r)) : $a(n) ? ag(n, r) : ni(xh(yr(e)));
}
function tg(e) {
  var n = at(uo(e)), r = ["absolute", "fixed"].indexOf(On(e).position) >= 0, a = r && gn(e) ? Ei(e) : e;
  return $a(a) ? n.filter(function(t) {
    return $a(t) && rg(t, a) && En(t) !== "body";
  }) : [];
}
function og(e, n, r, a) {
  var t = n === "clippingParents" ? tg(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = yl(e, u, a);
    return s.top = rt(d.top, s.top), s.right = hl(d.right, s.right), s.bottom = hl(d.bottom, s.bottom), s.left = rt(d.left, s.left), s;
  }, yl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function dt(e) {
  return e.split("-")[1];
}
function ig(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Ln(a) : null, o = a ? dt(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case zn:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case pr:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case ka:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case lr:
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
  var u = t ? ig(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case so:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case ut:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function lg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function sg(e) {
  return Object.assign({}, lg(), e);
}
function ug(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Ku(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Fh : l, u = r.rootBoundary, d = u === void 0 ? ju : u, v = r.elementContext, f = v === void 0 ? _a : v, m = r.altBoundary, p = m === void 0 ? !1 : m, y = r.padding, g = y === void 0 ? 0 : y, $ = sg(typeof g != "number" ? g : ug(g, lo)), B = f === _a ? Hh : _a, w = e.rects.popper, C = e.elements[p ? B : f], I = og($a(C) ? C : C.contextElement || yr(e.elements.popper), s, d, i), S = Ga(e.elements.reference), D = Xu({
    reference: S,
    element: w,
    strategy: "absolute",
    placement: t
  }), P = ni(Object.assign({}, w, D)), E = f === _a ? P : S, V = {
    top: I.top - E.top + $.top,
    bottom: E.bottom - I.bottom + $.bottom,
    left: I.left - E.left + $.left,
    right: E.right - I.right + $.right
  }, b = e.modifiersData.offset;
  if (f === _a && b) {
    var k = b[t];
    Object.keys(V).forEach(function(H) {
      var J = [ka, pr].indexOf(H) >= 0 ? 1 : -1, j = [zn, pr].indexOf(H) >= 0 ? "y" : "x";
      V[H] += k[j] * J;
    });
  }
  return V;
}
function dg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Wu : s, d = dt(a), v = d ? l ? ml : ml.filter(function(p) {
    return dt(p) === d;
  }) : lo, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, y) {
    return p[y] = Ku(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Ln(y)], p;
  }, {});
  return Object.keys(m).sort(function(p, y) {
    return m[p] - m[y];
  });
}
function vg(e) {
  if (Ln(e) === io)
    return [];
  var n = Et(e);
  return [pl(e), n, pl(n)];
}
function fg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, g = n.options.placement, $ = Ln(g), B = $ === g, w = s || (B || !p ? [Et(g)] : vg(g)), C = [g].concat(w).reduce(function(G, Z) {
      return G.concat(Ln(Z) === io ? dg(n, {
        placement: Z,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : Z);
    }, []), I = n.rects.reference, S = n.rects.popper, D = /* @__PURE__ */ new Map(), P = !0, E = C[0], V = 0; V < C.length; V++) {
      var b = C[V], k = Ln(b), H = dt(b) === so, J = [zn, pr].indexOf(k) >= 0, j = J ? "width" : "height", R = Ku(n, {
        placement: b,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), z = J ? H ? ka : lr : H ? pr : zn;
      I[j] > S[j] && (z = Et(z));
      var ae = Et(z), oe = [];
      if (o && oe.push(R[k] <= 0), l && oe.push(R[z] <= 0, R[ae] <= 0), oe.every(function(G) {
        return G;
      })) {
        E = b, P = !1;
        break;
      }
      D.set(b, oe);
    }
    if (P)
      for (var Y = p ? 3 : 1, _ = function(Z) {
        var ce = C.find(function(fe) {
          var Ne = D.get(fe);
          if (Ne)
            return Ne.slice(0, Z).every(function(Ge) {
              return Ge;
            });
        });
        if (ce)
          return E = ce, "break";
      }, K = Y; K > 0; K--) {
        var A = _(K);
        if (A === "break")
          break;
      }
    n.placement !== E && (n.modifiersData[a]._skip = !0, n.placement = E, n.reset = !0);
  }
}
const cg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function mg(e, n, r) {
  var a = Ln(e), t = [lr, zn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [lr, ka].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function pg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = Wu.reduce(function(d, v) {
    return d[v] = mg(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const hg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pg
};
function gg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function yg(e) {
  return e === Cn(e) || !gn(e) ? Mi(e) : gg(e);
}
function bg(e) {
  var n = e.getBoundingClientRect(), r = Wa(n.width) / e.offsetWidth || 1, a = Wa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function wg(e, n, r) {
  r === void 0 && (r = !1);
  var a = gn(n), t = gn(n) && bg(n), o = yr(n), i = Ga(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((En(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(o)) && (l = yg(n)), gn(n) ? (s = Ga(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Bi(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Cg(e) {
  var n = Ga(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Sg(e) {
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
function kg(e) {
  var n = Sg(e);
  return xo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function $g(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Gn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var br = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Tg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', bl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), bl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Gn(br, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Gn(br, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          xo.indexOf(n.phase) < 0 && console.error(Gn(br, n.name, '"phase"', "either " + xo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Gn(br, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Gn(br, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Gn(br, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Gn(br, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
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
        }) == null && console.error(Gn(Tg, String(n.name), a, a));
      });
    });
  });
}
function Og(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Vg(e) {
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
var wl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Mg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Cl = {
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
function Bg(e) {
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
      setOptions: function($) {
        var B = typeof $ == "function" ? $(d.options) : $;
        y(), d.options = Object.assign({}, o, d.options, B), d.scrollParents = {
          reference: $a(l) ? at(l) : l.contextElement ? at(l.contextElement) : [],
          popper: at(s)
        };
        var w = kg(Vg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(b) {
          return b.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = Og([].concat(w, d.options.modifiers), function(b) {
            var k = b.name;
            return k;
          });
          if (Pg(C), Ln(d.options.placement) === io) {
            var I = d.orderedModifiers.find(function(b) {
              var k = b.name;
              return k === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = On(s), D = S.marginTop, P = S.marginRight, E = S.marginBottom, V = S.marginLeft;
          [D, P, E, V].some(function(b) {
            return parseFloat(b);
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
          var $ = d.elements, B = $.reference, w = $.popper;
          if (!Sl(B, w)) {
            process.env.NODE_ENV !== "production" && console.error(wl);
            return;
          }
          d.rects = {
            reference: wg(B, Ei(w), d.options.strategy === "fixed"),
            popper: Cg(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(b) {
            return d.modifiersData[b.name] = Object.assign({}, b.data);
          });
          for (var C = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Mg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var S = d.orderedModifiers[I], D = S.fn, P = S.options, E = P === void 0 ? {} : P, V = S.name;
            typeof D == "function" && (d = D({
              state: d,
              options: E,
              name: V,
              instance: m
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: $g(function() {
        return new Promise(function(g) {
          m.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Sl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(wl), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var $ = g.name, B = g.options, w = B === void 0 ? {} : B, C = g.effect;
        if (typeof C == "function") {
          var I = C({
            state: d,
            name: $,
            instance: m,
            options: w
          }), S = function() {
          };
          v.push(I || S);
        }
      });
    }
    function y() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return m;
  };
}
var Pt = {
  passive: !0
};
function Ig(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Pt);
  }), l && s.addEventListener("resize", r.update, Pt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Pt);
    }), l && s.removeEventListener("resize", r.update, Pt);
  };
}
const Eg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ig,
  data: {}
};
function Dg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Xu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Ng = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Dg,
  data: {}
};
var Ag = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function zg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Wa(n * t) / t || 0,
    y: Wa(r * t) / t || 0
  };
}
function kl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, m = f === void 0 ? 0 : f, p = i.y, y = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = g.x, y = g.y;
  var $ = i.hasOwnProperty("x"), B = i.hasOwnProperty("y"), w = lr, C = zn, I = window;
  if (u) {
    var S = Ei(r), D = "clientHeight", P = "clientWidth";
    if (S === Cn(r) && (S = yr(r), On(S).position !== "static" && l === "absolute" && (D = "scrollHeight", P = "scrollWidth")), S = S, t === zn || (t === lr || t === ka) && o === ut) {
      C = pr;
      var E = v && S === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[D]
      );
      y -= E - a.height, y *= s ? 1 : -1;
    }
    if (t === lr || (t === zn || t === pr) && o === ut) {
      w = ka;
      var V = v && S === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[P]
      );
      m -= V - a.width, m *= s ? 1 : -1;
    }
  }
  var b = Object.assign({
    position: l
  }, u && Ag), k = d === !0 ? zg({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = k.x, y = k.y, s) {
    var H;
    return Object.assign({}, b, (H = {}, H[C] = B ? "0" : "", H[w] = $ ? "0" : "", H.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", H));
  }
  return Object.assign({}, b, (n = {}, n[C] = B ? y + "px" : "", n[w] = $ ? m + "px" : "", n.transform = "", n));
}
function Lg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = On(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Ln(n.placement),
    variation: dt(n.placement),
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
const Rg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Lg,
  data: {}
};
function Ug(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !gn(o) || !En(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Fg(e) {
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
      !gn(t) || !En(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Hg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ug,
  effect: Fg,
  requires: ["computeStyles"]
};
var Yg = [Eg, Ng, Rg, Hg], jg = /* @__PURE__ */ Bg({
  defaultModifiers: Yg
});
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wt.apply(this, arguments);
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
  } = ht(() => a.value, 1), i = null, l = !1, s = !1, u = () => {
    var {
      width: S,
      height: D
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Le(S),
      height: Le(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, C());
  }, v = /* @__PURE__ */ function() {
    var S = Tl(function* () {
      e.trigger === "hover" && (s = !1, yield Bn(), !l && I());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (l = !0);
  }, m = /* @__PURE__ */ function() {
    var S = Tl(function* () {
      e.trigger === "hover" && (l = !1, yield Bn(), !s && I());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), p = () => {
    C();
  }, y = () => {
    a.value = !1, T(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && y();
  }, $ = () => {
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
          distance: S.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: S.x,
          distance: S.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: S.x,
          distance: S.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: S.y,
          distance: S.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: S.y,
          distance: -S.x - t.value.width
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
  }, B = () => {
    var {
      placement: S,
      skidding: D,
      distance: P
    } = $(), E = [Wt({}, cg, {
      enabled: a.value
    }), Wt({}, hg, {
      options: {
        offset: [D, P]
      }
    })];
    return {
      placement: S,
      modifiers: E
    };
  }, w = () => {
    i.setOptions(B());
  }, C = () => {
    var {
      disabled: S
    } = e;
    S || (a.value = !0, T(e["onUpdate:show"], !0));
  }, I = () => {
    a.value = !1, T(e["onUpdate:show"], !1);
  };
  return fs(n, "click", g), le(() => e.show, (S) => {
    a.value = S ?? !1;
  }, {
    immediate: !0
  }), le(() => e.offsetX, w), le(() => e.offsetY, w), le(() => e.placement, w), le(() => a.value, (S) => {
    S ? (w(), T(e.onOpen)) : T(e.onClose);
  }), le(() => e.disabled, I), Gt(() => {
    var S, D = e.reference ? (S = n.value) == null ? void 0 : S.querySelector(e.reference) : n.value;
    i = jg(D ?? n.value, r.value, B());
  }), Za(() => {
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
    handlePopoverClose: y,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: w,
    open: C,
    close: I
  };
}
function Wg(e) {
  return ["click", "hover"].includes(e);
}
function Gg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function qg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Xg = {
  type: {
    type: String,
    default: "default",
    validator: qg
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
    validator: Wg
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Gg
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: Kg,
  classes: Zg
} = ne("tooltip");
function Jg(e, n) {
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
    [W(e.$slots, "default"), (h(), ge(
      Pa,
      {
        to: e.teleport
      },
      [Q(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [we(N(
            "div",
            {
              ref: "popover",
              class: c(e.n("tooltip")),
              style: q({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = Mn(() => {
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
              [W(e.$slots, "content", {}, () => [be(
                re(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[fr, e.show]])]),
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
var Ju = ee({
  name: "VarTooltip",
  props: Xg,
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
      toSizeUnit: pe,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Kg,
      classes: Zg,
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
Ju.render = Jg;
const sr = Ju;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var VS = sr;
function Qg(e) {
  return ["click"].includes(e);
}
var _g = {
  expandTrigger: {
    type: String,
    validator: Qg
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
  n: xg,
  classes: ey
} = ne("ellipsis"), ny = {
  key: 0
};
function ry(e, n) {
  var r = te("var-tooltip");
  return h(), ge(
    r,
    vi(rs(e.tooltip)),
    {
      content: ve(() => [W(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), O(
          "span",
          ny,
          re(e.tooltip.content),
          1
          /* TEXT */
        )) : W(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [N(
        "span",
        {
          class: c(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: q(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [W(e.$slots, "default")],
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
var Qu = ee({
  name: "VarEllipsis",
  components: {
    VarTooltip: sr
  },
  props: _g,
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
      n: xg,
      classes: ey,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Qu.render = ry;
const Ur = Qu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var MS = Ur;
function ay(e) {
  return ["left-top", "right-top", "left-bottom", "right-bottom"].includes(e);
}
function ty(e) {
  return ["top", "right", "bottom", "left"].includes(e);
}
function oy(e) {
  return ["click", "hover"].includes(e);
}
var iy = {
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
    validator: ay
  },
  direction: {
    type: String,
    default: "top",
    validator: ty
  },
  trigger: {
    type: String,
    default: "click",
    validator: oy
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
  onClick: U(),
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:active": U()
};
function Pl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ct(e);
}
var {
  classes: Ol,
  n: dn
} = ne("fab");
const Fr = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: iy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = M(!1), o = M(null), {
      disabled: i
    } = Qt(), l = F({
      get() {
        return t.value;
      },
      set(m) {
        t.value = m, T(e["onUpdate:active"], m);
      }
    }), s = (m, p, y) => {
      if (m.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (y === 0) {
          T(e.onClick, l.value, m);
          return;
        }
        l.value = p, T(e.onClick, l.value, m), T(l.value ? e.onOpen : e.onClose);
      }
    }, u = (m, p) => {
      e.trigger !== "hover" || e.disabled || p === 0 || (l.value = m, T(l.value ? e.onOpen : e.onClose));
    }, d = () => {
      e.trigger !== "click" || e.disabled || l.value !== !1 && (l.value = !1, T(e.onClose));
    }, v = () => r.trigger ? e.show ? r.trigger({
      active: l.value
    }) : null : we(Q(Ke, {
      "var-fab-cover": !0,
      class: dn("trigger"),
      type: e.type,
      color: e.color,
      disabled: e.disabled,
      round: !0
    }, {
      default: () => [Q($e, {
        "var-fab-cover": !0,
        class: Ol([l.value, dn("trigger-active-icon"), dn("trigger-inactive-icon")]),
        name: l.value ? e.activeIcon : e.inactiveIcon,
        size: l.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: dn("--trigger-icon-animation")
      }, null)]
    }), [[fr, e.show]]), f = () => {
      var m, p, y = cs((p = r.default == null ? void 0 : r.default()) != null ? p : []);
      return Q("div", Ve({
        class: Ol(dn(), dn("--position-" + e.position), dn("--direction-" + e.direction), [e.fixed, dn("--fixed"), dn("--absolute")]),
        style: {
          zIndex: L(e.zIndex),
          top: pe(e.top),
          bottom: pe(e.bottom),
          left: pe(e.left),
          right: pe(e.right)
        },
        ref: o,
        onClick: (g) => s(g, !l.value, y.length),
        onMouseleave: () => u(!1, y.length),
        onMouseenter: () => u(!0, y.length)
      }, a), [Q(De, {
        name: dn("--active-transition")
      }, Pl(m = v()) ? m : {
        default: () => [m]
      }), Q(De, {
        name: dn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(Q("div", {
          class: dn("actions"),
          onClick: (g) => g.stopPropagation()
        }, [y.map((g) => Q("div", {
          class: dn("action")
        }, [g]))]), [[fr, e.show && l.value && y.length]])]
      })]);
    };
    return le(() => e.active, (m) => {
      t.value = m;
    }, {
      immediate: !0
    }), le(() => e.trigger, () => {
      l.value = !1;
    }), le(() => e.disabled, () => {
      l.value = !1;
    }), fs(o, "click", d), () => {
      var {
        teleport: m
      } = e;
      if (m) {
        var p;
        return Q(Pa, {
          to: m,
          disabled: i.value
        }, Pl(p = f()) ? p : {
          default: () => [p]
        });
      }
      return f();
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var BS = Fr;
function ly(e) {
  return ["start", "end"].includes(e);
}
var sy = {
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
    validator: ly
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
function uy(e) {
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
  n: dy
} = ne("form");
function vy(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var _u = ee({
  name: "VarForm",
  props: sy,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = hm(), o = (d) => {
      setTimeout(() => {
        var v = Ma(d), f = v === window ? 0 : qi(v), m = qi(d) - f - Le(e.scrollToErrorOffsetY);
        it(v, {
          top: m,
          animation: So
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = uy(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: $
          } = g;
          return $();
        }));
        if (e.scrollToError) {
          var [, f] = Pv(v, (g) => g === !1, e.scrollToError), m = f > -1;
          if (m) {
            var p, y = (p = a[f].instance.proxy) == null ? void 0 : p.$el;
            o(y);
          }
          return !m;
        }
        return v.every((g) => g === !0);
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
      n: dy,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
_u.render = vy;
const Rn = _u;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
Rn.useValidation = bn;
Rn.useForm = wn;
var IS = Rn;
function fy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var cy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: fy,
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
  n: my,
  classes: py
} = ne("image"), hy = ["alt", "title", "lazy-error", "lazy-loading"], gy = ["alt", "title", "src"];
function yy(e, n) {
  var r = Ie("lazy"), a = Ie("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
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
        style: q({
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
      hy
    )), [[r, e.src]]) : (h(), O(
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
      gy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var xu = ee({
  name: "VarImage",
  directives: {
    Lazy: lt,
    Ripple: Re
  },
  props: cy,
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
      n: my,
      classes: py,
      toSizeUnit: pe,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
xu.render = yy;
const Hr = xu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var ES = Hr, ed = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
function by() {
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
  onChange: U()
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
function wy(e) {
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
var Cy = 250, Sy = 20, {
  n: ky,
  classes: $y
} = ne("swipe"), Ty = ["onClick"];
function Py(e, n) {
  return h(), O(
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
      [W(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), W(e.$slots, "indicator", {
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
        Ae(e.length, (r, a) => (h(), O(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: q({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Ty
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
var rd = ee({
  name: "VarSwipe",
  props: nd,
  setup(e) {
    var n = M(null), r = M(0), a = F(() => e.vertical), t = M(0), o = M(0), i = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = by(), v = !1, f = -1, m, p, y, g, $, B = (Y) => s.find((_) => {
      var {
        index: K
      } = _;
      return K.value === Y;
    }), w = () => {
      e.loop && (o.value >= 0 && B(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && B(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (B(d.value - 1).setTranslate(0), B(0).setTranslate(0)));
    }, C = (Y) => {
      var _ = rn(Y) ? Y : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: K
      } = e;
      return _ <= -1 ? K ? -1 : 0 : _ >= d.value ? K ? d.value : d.value - 1 : _;
    }, I = (Y) => {
      var {
        loop: _
      } = e;
      return Y === -1 ? _ ? d.value - 1 : 0 : Y === d.value ? _ ? 0 : d.value - 1 : Y;
    }, S = (Y) => {
      var {
        loop: _
      } = e;
      return Y < 0 ? _ ? d.value - 1 : 0 : Y > d.value - 1 ? _ ? 0 : d.value - 1 : Y;
    }, D = (Y) => {
      var _ = o.value >= r.value, K = o.value <= -t.value, A = 0, G = -(t.value - r.value);
      i.value = !0, (_ || K) && (i.value = !0, o.value = K ? A : G, B(0).setTranslate(0), B(d.value - 1).setTranslate(0)), Jt(() => {
        i.value = !1, T(Y);
      });
    }, P = () => {
      l.value = S(L(e.initialIndex));
    }, E = () => {
      var {
        autoplay: Y
      } = e;
      !Y || d.value <= 1 || (V(), f = window.setTimeout(() => {
        R(), E();
      }, L(Y)));
    }, V = () => {
      f && clearTimeout(f);
    }, b = (Y, _) => {
      if (Y > _ && Y > 10)
        return "horizontal";
      if (_ > Y && _ > 10)
        return "vertical";
    }, k = (Y) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: _,
          clientY: K
        } = Y.touches[0];
        m = _, p = K, y = performance.now(), v = !0, V(), D(() => {
          i.value = !0;
        });
      }
    }, H = (Y) => {
      var {
        touchable: _,
        vertical: K
      } = e;
      if (!(!v || !_)) {
        var {
          clientX: A,
          clientY: G
        } = Y.touches[0], Z = Math.abs(A - m), ce = Math.abs(G - p), fe = b(Z, ce), Ne = K ? "vertical" : "horizontal";
        if (fe === Ne) {
          Y.preventDefault();
          var Ge = g !== void 0 ? A - g : 0, qe = $ !== void 0 ? G - $ : 0;
          g = A, $ = G, o.value += K ? qe : Ge, w();
        }
      }
    }, J = () => {
      if (v) {
        var {
          vertical: Y,
          onChange: _
        } = e, K = Y ? $ < p : g < m, A = Math.abs(Y ? p - $ : m - g), G = performance.now() - y <= Cy && A >= Sy, Z = G ? C(K ? l.value + 1 : l.value - 1) : C();
        v = !1, i.value = !1, g = void 0, $ = void 0, o.value = Z * -r.value;
        var ce = l.value;
        l.value = I(Z), E(), ce !== l.value && T(_, l.value);
      }
    }, j = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((Y) => {
        Y.setTranslate(0);
      }), E(), setTimeout(() => {
        i.value = !1;
      }));
    }, R = (Y) => {
      if (!(d.value <= 1)) {
        var {
          loop: _,
          onChange: K
        } = e, A = l.value;
        l.value = S(A + 1), (Y == null ? void 0 : Y.event) !== !1 && T(K, l.value), D(() => {
          if (A === d.value - 1 && _) {
            B(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          A !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, z = (Y) => {
      if (!(d.value <= 1)) {
        var {
          loop: _,
          onChange: K
        } = e, A = l.value;
        l.value = S(A - 1), (Y == null ? void 0 : Y.event) !== !1 && T(K, l.value), D(() => {
          if (A === 0 && _) {
            B(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          A !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, ae = (Y, _) => {
      if (!(d.value <= 1 || Y === l.value)) {
        Y = Y < 0 ? 0 : Y, Y = Y >= d.value ? d.value : Y;
        var K = Y > l.value ? R : z, A = Math.abs(Y - l.value);
        Array.from({
          length: A
        }).forEach((G, Z) => {
          K({
            event: Z === A - 1 ? _ == null ? void 0 : _.event : !1
          });
        });
      }
    }, oe = {
      size: r,
      vertical: a
    };
    return u(oe), le(() => d.value, /* @__PURE__ */ wy(function* () {
      yield Bn(), P(), j();
    })), Xa(j), hr(V), Za(V), wa(window, "resize", j), {
      n: ky,
      classes: $y,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: k,
      handleTouchmove: H,
      handleTouchend: J,
      next: R,
      prev: z,
      to: ae,
      resize: j,
      toNumber: L
    };
  }
});
rd.render = Py;
const Un = rd;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var DS = Un;
function Oy() {
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
  n: Vy
} = ne("swipe-item");
function My(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n()),
      style: q({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var ad = ee({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Oy(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: Vy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
ad.render = My;
const Fn = ad;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var NS = Fn;
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
var By = ai({
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
  "onUpdate:show": U()
}, Je(nd, ["loop", "indicator", "onChange"]), Je(pt, [
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
  classes: Iy
} = ne("image-preview"), Il = 12, El = 200, Ey = 350, Dl = 200, Dy = ["src", "alt"];
function Ny(e, n) {
  var r = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), o = te("var-popup");
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
      default: ve(() => [Q(
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
          default: ve(() => [(h(!0), O(
            Oe,
            null,
            Ae(e.images, (i) => (h(), ge(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: i
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
                  [N(
                    "img",
                    {
                      class: c(e.n("image")),
                      src: i,
                      alt: i
                    },
                    null,
                    10,
                    Dy
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
          indicator: ve((i) => {
            var {
              index: l,
              length: s
            } = i;
            return [W(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              re(l + 1) + " / " + re(s),
              3
              /* TEXT, CLASS */
            )) : x("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), W(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), ge(
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
      )) : x("v-if", !0)]), N(
        "div",
        {
          class: c(e.n("extra"))
        },
        [W(e.$slots, "extra")],
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
var td = ee({
  name: "VarImagePreview",
  components: {
    VarSwipe: Un,
    VarSwipeItem: Fn,
    VarPopup: pn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: By,
  setup(e) {
    var n = M(!1), r = F(() => {
      var {
        images: V,
        current: b
      } = e, k = V.findIndex((H) => H === b);
      return k >= 0 ? k : 0;
    }), a = M(1), t = M(0), o = M(0), i = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (V, b) => {
      var {
        clientX: k,
        clientY: H
      } = V, {
        clientX: J,
        clientY: j
      } = b;
      return Math.abs(Math.sqrt(Math.pow(J - k, 2) + Math.pow(j - H, 2)));
    }, m = (V, b) => ({
      clientX: V.clientX,
      clientY: V.clientY,
      timestamp: Date.now(),
      target: b
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, Dl);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, g = (V) => d ? f(d, V) <= Il && V.timestamp - d.timestamp <= El && d.target === V.target : !1, $ = (V) => !V || !u || !d ? !1 : f(u, d) <= Il && Date.now() - d.timestamp < Ey && (V === u.target || V.parentNode === u.target), B = (V) => {
      v = window.setTimeout(() => {
        $(V.target) && E(), u = null;
      }, El);
    }, w = (V) => {
      v && window.clearTimeout(v);
      var {
        touches: b
      } = V, k = m(b[0], V.currentTarget);
      if (u = k, g(k)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = k;
    }, C = (V) => {
      var {
        offsetWidth: b,
        offsetHeight: k
      } = V, {
        naturalWidth: H,
        naturalHeight: J
      } = V.querySelector("." + Bl("image"));
      return {
        width: b,
        height: k,
        imageRadio: J / H,
        rootRadio: k / b,
        zoom: L(e.zoom)
      };
    }, I = (V) => {
      var {
        zoom: b,
        imageRadio: k,
        rootRadio: H,
        width: J,
        height: j
      } = C(V);
      if (!k)
        return 0;
      var R = k > H ? j / k : J;
      return Math.max(0, (b * R - J) / 2) / b;
    }, S = (V) => {
      var {
        zoom: b,
        imageRadio: k,
        rootRadio: H,
        width: J,
        height: j
      } = C(V);
      if (!k)
        return 0;
      var R = k > H ? j : J * k;
      return Math.max(0, (b * R - j) / 2) / b;
    }, D = (V, b, k) => V + b >= k ? k : V + b <= -k ? -k : V + b, P = (V) => {
      if (d) {
        var b = V.currentTarget, {
          touches: k
        } = V, H = m(k[0], b);
        if (a.value > 1) {
          var J = H.clientX - d.clientX, j = H.clientY - d.clientY, R = I(b), z = S(b);
          t.value = D(t.value, J, R), o.value = D(o.value, j, z);
        }
        d = H;
      }
    }, E = () => {
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
      classes: Iy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: w,
      handleTouchmove: P,
      handleTouchend: B,
      close: E
    };
  }
});
td.render = Ny;
const ur = td;
function tt() {
  return tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, tt.apply(this, arguments);
}
var Qn, ot = {};
function Ay(e) {
  return e === void 0 && (e = {}), Ze(e) ? tt({}, ot, {
    images: [e]
  }) : Ce(e) ? tt({}, ot, {
    images: e
  }) : tt({}, ot, e);
}
function Vn(e) {
  if (mt()) {
    Vn.close();
    var n = Ay(e), r = Be(n);
    r.teleport = "body", Qn = r;
    var {
      unmountInstance: a
    } = Qa(ur, r, {
      onClose: () => T(r.onClose),
      onClosed: () => {
        T(r.onClosed), a(), Qn === r && (Qn = null);
      },
      onRouteChange: () => {
        a(), Qn === r && (Qn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Vn.close = () => {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
Vn.setDefaultOptions = (e) => {
  ot = e;
};
Vn.resetDefaultOptions = () => {
  ot = {};
};
ur.install = function(e) {
  e.component(ur.name, ur);
};
Vn.install = function(e) {
  e.component(ur.name, ur);
};
Vn.Component = ur;
var AS = ur, Dt = {
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
  n: zy,
  classes: Ly
} = ne("sticky");
function Ry(e, n) {
  return h(), O(
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
      [W(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var od = ee({
  name: "VarSticky",
  props: Dt,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), i = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => Le(e.offsetTop)), m, p = () => {
      var {
        cssMode: w,
        disabled: C
      } = e;
      if (!C) {
        var I = 0;
        if (m !== window) {
          var {
            top: S
          } = m.getBoundingClientRect();
          I = S;
        }
        var D = r.value, P = n.value, {
          top: E,
          left: V
        } = P.getBoundingClientRect(), b = E - I;
        return b <= f.value ? (w || (i.value = P.offsetWidth + "px", l.value = P.offsetHeight + "px", t.value = I + f.value + "px", o.value = V + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: b,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var w = p();
        w && T(e.onScroll, w.offsetTop, w.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var w = Al(function* () {
        a.value = !1, yield zv(), p();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var w = Al(function* () {
        yield Bn(), m = Ma(n.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), B = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return le(() => e.disabled, g), ln($), Za(B), hr(B), wa(window, "scroll", y), {
      n: zy,
      classes: Ly,
      resize: g,
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
od.render = Ry;
const Hn = od;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var zS = Hn, id = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
function Uy() {
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
function Fy() {
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
var Hy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Yy,
  classes: jy
} = ne("index-anchor");
function Wy(e, n) {
  return h(), ge(
    Ja(e.sticky ? e.n("$-sticky") : e.Transition),
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
        Ve({
          class: e.n()
        }, e.$attrs),
        [W(e.$slots, "default", {}, () => [be(
          re(e.name),
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
var ld = ee({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Hn
  },
  inheritAttrs: !1,
  props: Hy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Fy(), t = M(0), o = M(!1), i = F(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (g) => {
      o.value = g;
    }, y = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(y), {
      n: Yy,
      classes: jy,
      name: i,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: De
    };
  }
});
ld.render = Wy;
const Yr = ld;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var LS = Yr, Gy = {
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
  onClick: U(),
  onChange: U()
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
function Ot(e) {
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
  n: qy,
  classes: Xy
} = ne("index-bar"), Ky = ["onClick"];
function Zy(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [W(e.$slots, "default"), N(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), O(
        Oe,
        null,
        Ae(e.anchorNameList, (r) => (h(), O(
          "li",
          {
            key: r,
            class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: q({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          re(r),
          15,
          Ky
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
var sd = ee({
  name: "VarIndexBar",
  props: Gy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Uy(), t = M(""), o = M(null), i = M([]), l = M(), s = F(() => e.sticky), u = F(() => e.cssMode), d = F(() => Le(e.stickyOffsetTop)), v = F(() => e.zIndex), f = null, m = {
      active: l,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(m);
    var p = (S, D) => {
      var P = fi(S) ? S.name.value : S;
      P === l.value || P === void 0 || (l.value = P, (D == null ? void 0 : D.event) !== !1 && T(e.onChange, P));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: S
      } = f.getBoundingClientRect(), {
        scrollTop: D
      } = f, {
        top: P
      } = o.value.getBoundingClientRect();
      return D - S + P;
    }, g = () => {
      var S = Zt(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, P = y();
      r.forEach((E, V) => {
        var b = E.ownTop.value, k = S - b + d.value - P, H = V === r.length - 1 ? D : r[V + 1].ownTop.value - E.ownTop.value;
        k >= 0 && k < H && t.value === "" && (V && !e.cssMode && r[V - 1].setDisabled(!0), E.setDisabled(!1), p(E));
      });
    }, $ = /* @__PURE__ */ function() {
      var S = Ot(function* (D) {
        var {
          anchorName: P,
          manualCall: E = !1,
          options: V
        } = D;
        if (E && T(e.onClick, P), P !== l.value) {
          var b = r.find((j) => {
            var {
              name: R
            } = j;
            return P === R.value;
          });
          if (b) {
            var k = y(), H = b.ownTop.value - d.value + k, J = pi(f);
            t.value = P, p(P, V), yield it(f, {
              left: J,
              top: H,
              animation: os,
              duration: L(e.duration)
            }), Jt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(P) {
        return S.apply(this, arguments);
      };
    }(), B = /* @__PURE__ */ function() {
      var S = Ot(function* () {
        yield Bn(), f = Ma(o.value);
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = () => {
      f.addEventListener("scroll", g);
    }, C = () => {
      f.removeEventListener("scroll", g);
    }, I = (S, D) => {
      Pn(() => $({
        anchorName: S,
        options: D
      }));
    };
    return le(() => n.value, /* @__PURE__ */ Ot(function* () {
      yield Bn(), r.forEach((S) => {
        var {
          name: D,
          setOwnTop: P
        } = S;
        D.value && i.value.push(D.value), P();
      });
    })), ln(/* @__PURE__ */ Ot(function* () {
      yield B(), w();
    })), qt(C), hr(C), {
      n: qy,
      classes: Xy,
      barEl: o,
      active: l,
      zIndex: v,
      anchorNameList: i,
      toNumber: L,
      scrollTo: I,
      anchorClick: $
    };
  }
});
sd.render = Zy;
const jr = sd;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var RS = jr;
function Jy(e) {
  return ["text", "password", "number"].includes(e);
}
var Qy = {
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
    validator: Jy
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
  onFocus: U(),
  onBlur: U(),
  onClick: U(),
  onClear: U(),
  onInput: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: go,
  classes: _y
} = ne("input"), xy = ["id", "disabled", "type", "value", "maxlength", "rows"], eb = ["id", "disabled", "type", "value", "maxlength"], nb = ["for"];
function rb(e, n) {
  var r = te("var-icon"), a = te("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[14] || (n[14] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), N(
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
        )) : x("v-if", !0), e.textarea ? (h(), O(
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
            style: q({
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
          xy
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
            style: q({
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
          eb
        )), N(
          "label",
          {
            class: c(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: q({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          re(e.placeholder),
          15,
          nb
        )],
        2
        /* CLASS */
      ), N(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), ge(
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
        )) : x("v-if", !0)])],
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
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
    )) : x("v-if", !0), Q(
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
var ud = ee({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: Qy,
  setup(e) {
    var n = M("var-input-" + Ka().uid), r = M(null), a = M(!1), t = M(!1), o = F(() => e.type === "number" ? "text" : e.type), i = F(() => {
      var {
        maxlength: z,
        modelValue: ae
      } = e;
      return z ? Nn(ae) ? "0 / " + z : String(ae).length + "/" + z : "";
    }), {
      bindForm: l,
      form: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), m = (z) => {
      Me(() => {
        var {
          validateTrigger: ae,
          rules: oe,
          modelValue: Y
        } = e;
        d(ae, z, oe, Y);
      });
    }, p = () => {
      var {
        hint: z,
        modelValue: ae
      } = e;
      if (!z && (!Nn(ae) || t.value))
        return go("--placeholder-hidden");
      if (z && (!Nn(ae) || a.value))
        return go("--placeholder-hint");
    }, y = (z) => {
      a.value = !0, T(e.onFocus, z), m("onFocus");
    }, g = (z) => {
      a.value = !1, T(e.onBlur, z), m("onBlur");
    }, $ = (z) => {
      var ae = z.target, {
        value: oe
      } = ae;
      return e.type === "number" && (oe = P(oe)), V(E(oe));
    }, B = () => {
      t.value = !0;
    }, w = (z) => {
      t.value && (t.value = !1, z.target.dispatchEvent(new Event("input")));
    }, C = (z) => {
      if (!t.value) {
        var ae = $(z);
        T(e["onUpdate:modelValue"], ae), T(e.onInput, ae, z), m("onInput");
      }
    }, I = (z) => {
      var ae = $(z);
      T(e.onChange, ae, z), m("onChange");
    }, S = () => {
      var {
        disabled: z,
        readonly: ae,
        clearable: oe,
        onClear: Y
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || z || ae || !oe || (T(e["onUpdate:modelValue"], ""), T(Y, ""), m("onClear"));
    }, D = (z) => {
      var {
        disabled: ae,
        onClick: oe
      } = e;
      s != null && s.disabled.value || ae || (T(oe, z), m("onClick"));
    }, P = (z) => {
      var ae = z.indexOf("-"), oe = z.indexOf(".");
      return ae > -1 && (z = ae === 0 ? "-" + z.replace(/-/g, "") : z.replace(/-/g, "")), oe > -1 && (z = z.slice(0, oe + 1) + z.slice(oe).replace(/\./g, "")), z.replace(/[^-0-9.]/g, "");
    }, E = (z) => e.modelModifiers.trim ? z.trim() : z, V = (z) => e.maxlength ? z.slice(0, L(e.maxlength)) : z, b = (z) => {
      var {
        disabled: ae,
        readonly: oe
      } = e;
      s != null && s.disabled.value || s != null && s.readonly.value || ae || oe || z.stopPropagation();
    }, k = () => {
      T(e["onUpdate:modelValue"], ""), f();
    }, H = () => v(e.rules, e.modelValue), J = () => {
      var z;
      (z = r.value) == null || z.focus();
    }, j = () => {
      r.value.blur();
    }, R = {
      reset: k,
      validate: H,
      resetValidation: f
    };
    return T(l, R), ln(() => {
      e.autofocus && J();
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
      classes: _y,
      isEmpty: Nn,
      computePlaceholderState: p,
      handleFocus: y,
      handleBlur: g,
      handleInput: C,
      handleChange: I,
      handleClear: S,
      handleClick: D,
      handleTouchstart: b,
      handleCompositionStart: B,
      handleCompositionEnd: w,
      validate: H,
      resetValidation: f,
      reset: k,
      focus: J,
      blur: j
    };
  }
});
ud.render = rb;
const dr = ud;
dr.install = function(e) {
  e.component(dr.name, dr);
};
var US = dr;
function ab(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function tb(e) {
  return ["always", "hover", "none"].includes(e);
}
var ob = {
  type: {
    type: String,
    default: "default",
    validator: ab
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
    validator: tb
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
  n: ib,
  classes: lb
} = ne("link");
function sb(e, n) {
  return h(), ge(
    Ja(e.tag),
    Ve(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [W(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var dd = ee({
  name: "VarLink",
  props: ob,
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
      n: ib,
      classes: lb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: pe
    };
  }
});
dd.render = sb;
const Wr = dd;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var FS = Wr, ub = {
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
function db(e) {
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
  n: vb,
  classes: fb
} = ne("list");
function cb(e, n) {
  var r = te("var-loading"), a = Ie("ripple");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [W(e.$slots, "default"), e.loading ? W(e.$slots, "loading", {
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
        re(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), Q(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : x("v-if", !0), e.finished ? W(e.$slots, "finished", {
      key: 1
    }, () => [N(
      "div",
      {
        class: c(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? W(e.$slots, "error", {
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
        re(e.dt(e.errorText, e.pack.listErrorText)),
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
var vd = ee({
  name: "VarList",
  directives: {
    Ripple: Re
  },
  components: {
    VarLoading: $n
  },
  props: ub,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      T(e["onUpdate:error"], !1), T(e["onUpdate:loading"], !0), T(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = db(function* () {
        yield Me();
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
      a = Ma(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), Za(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: Ye,
      listEl: n,
      detectorEl: r,
      dt: Kt,
      isNumber: rn,
      load: t,
      check: i,
      n: vb,
      classes: fb
    };
  }
});
vd.render = cb;
const Gr = vd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var HS = Gr, mb = {
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
  classes: pb,
  n: Rl
} = ne("loading-bar");
const hb = ee({
  name: "VarLoadingBar",
  props: mb,
  setup(e) {
    return () => Q("div", {
      class: pb(Rl(), [e.error, Rl("--error")]),
      style: {
        zIndex: fn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: pe(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: pe(e.top)
      }
    }, null);
  }
});
var fd, cd, vo, md, Ul, pd = {}, gb = {
  value: 0,
  opacity: 0,
  error: !1
}, je = Be(gb), yb = (e) => {
  Object.assign(je, e);
}, bb = (e) => {
  Object.assign(je, e), pd = e;
}, wb = () => {
  Object.keys(pd).forEach((e) => {
    je[e] !== void 0 && (je[e] = void 0);
  });
}, hd = () => {
  Ul || (Ul = !0, Qa(hb, je));
}, Di = () => {
  fd = window.setTimeout(() => {
    if (!(je.value >= 95)) {
      var e = Math.random();
      je.value < 70 && (e = Math.round(5 * Math.random())), je.value += e, Di();
    }
  }, 200);
}, Ni = () => {
  window.clearTimeout(cd), window.clearTimeout(fd), window.clearTimeout(vo), window.clearTimeout(md);
}, Cb = () => {
  Ni(), je.error = !1, je.value = 0, hd(), vo = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di();
}, gd = () => {
  Ni(), je.value = 100, vo = window.setTimeout(() => {
    je.opacity = 0, cd = window.setTimeout(() => {
      je.error = !1;
    }, 250);
  }, 300);
}, Sb = () => {
  Ni(), je.error = !0, je.value === 100 && (je.value = 0), hd(), vo = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di(), md = window.setTimeout(gd, 300);
}, yd = {
  start: Cb,
  finish: gd,
  error: Sb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: yb,
  setDefaultOptions: bb,
  resetDefaultOptions: wb
}, YS = yd;
const ti = yd;
function kb(e) {
  return ["click", "hover"].includes(e);
}
function $b(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Tb = {
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
    validator: kb
  },
  reference: {
    type: String
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: $b
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: Pb,
  classes: Ob
} = ne("menu");
function Vb(e, n) {
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
    [W(e.$slots, "default"), (h(), ge(
      Pa,
      {
        to: e.teleport
      },
      [Q(
        De,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [we(N(
            "div",
            {
              ref: "popover",
              style: q({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Mn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [W(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[fr, e.show]])]),
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
  name: "VarMenu",
  props: Tb,
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
      toSizeUnit: pe,
      n: Pb,
      classes: Ob,
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
bd.render = Vb;
const Yn = bd;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var jS = Yn, wd = Symbol("SELECT_BIND_OPTION_KEY");
function Mb() {
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
function Bb() {
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
var Ib = {
  label: {},
  value: {}
}, {
  n: Eb,
  classes: Db
} = ne("option");
function Nb(e, n) {
  var r = te("var-checkbox"), a = Ie("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: q({
        width: e.wrapWidth,
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
    ), e.multiple ? (h(), ge(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Mn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : x("v-if", !0), N(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [W(e.$slots, "default", {}, () => [be(
        re(e.label),
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
var Cd = ee({
  name: "VarOption",
  directives: {
    Ripple: Re
  },
  components: {
    VarCheckbox: tr
  },
  props: Ib,
  setup(e) {
    var n = M(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: o,
      bindSelect: i
    } = Bb(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d,
      computeLabel: v
    } = o, f = () => {
      n.value = !n.value, d(y);
    }, m = () => d(y), p = (g) => {
      n.value = g;
    }, y = {
      label: a,
      value: t,
      selected: r,
      sync: p
    };
    return le([() => e.label, () => e.value], v), i(y), {
      n: Eb,
      classes: Db,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: f,
      handleSelect: m
    };
  }
});
Cd.render = Nb;
const qr = Cd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var WS = qr, Ab = {
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
function zb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ct(e);
}
var {
  n: Fl
} = ne("overlay");
const Xr = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Ab,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = ht(() => e.show, 1), {
      disabled: o
    } = Qt(), i = () => {
      T(e.onClick), T(e["onUpdate:show"], !1);
    };
    _t(() => e.show, () => e.lockScroll);
    var l = () => Q("div", Ve({
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
      return Q(De, {
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
        return Q(Pa, {
          to: u,
          disabled: o.value
        }, zb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var GS = Xr, Lb = {
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
  onChange: U(),
  "onUpdate:current": U(),
  "onUpdate:size": U()
}, {
  n: Rb,
  classes: Ub
} = ne("pagination"), Fb = ["item-mode", "onClick"];
function Hb(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), o = te("var-menu"), i = Ie("ripple");
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
      [W(e.$slots, "prev", {}, () => [Q(r, {
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
      [Q(
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
      ), N("span", null, [be(
        " / " + re(e.pageCount) + " ",
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
    )) : (h(!0), O(
      Oe,
      {
        key: 1
      },
      Ae(e.pageList, (l, s) => we((h(), O(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [be(
          re(l),
          1
          /* TEXT */
        )],
        10,
        Fb
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
      [W(e.$slots, "next", {}, () => [Q(r, {
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
      [Q(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), O(
            Oe,
            null,
            Ae(e.sizeOption, (l, s) => we((h(), ge(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ve(() => [be(
                  re(l) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
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
          default: ve(() => [N(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [N(
              "span",
              null,
              re(e.size) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
              1
              /* TEXT */
            ), Q(
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (h(), O(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        re(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), Q(
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
    )) : x("v-if", !0), e.totalText ? (h(), O(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      re(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Sd = ee({
  name: "VarPagination",
  components: {
    VarMenu: Yn,
    VarIcon: $e,
    VarCell: ar,
    VarInput: dr
  },
  directives: {
    Ripple: Re
  },
  props: Lb,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), i = M(L(e.current) || 1), l = M(L(e.size) || 10), s = M([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(L(e.total) / L(l.value))), v = F(() => {
      var C = l.value * (i.value - 1) + 1, I = Math.min(l.value * i.value, L(e.total));
      return [C, I];
    }), f = F(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (C, I) => rn(C) ? !1 : I === 1 ? t.value : o.value, p = (C, I) => rn(C) ? "basic" : I === 1 ? "head" : "tail", y = (C, I) => {
      C === i.value || e.disabled || (rn(C) ? i.value = C : C === "prev" ? i.value > 1 && (i.value -= 1) : C === "next" ? i.value < d.value && (i.value += 1) : C === "..." && (I === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, $ = (C) => {
      l.value = C, n.value = !1;
    }, B = (C) => {
      var I = /^[1-9][0-9]*$/;
      return I.test(C);
    }, w = (C, I, S) => {
      if (S.target.blur(), B(I)) {
        var D = L(I);
        D > d.value && (D = d.value, a.value = "" + D), D !== i.value && (i.value = D);
      }
      C === "quick" && (r.value = ""), C === "simple" && !B(I) && (a.value = "" + i.value);
    };
    return le([() => e.current, () => e.size], (C) => {
      var [I, S] = C;
      i.value = L(I) || 1, l.value = L(S || 10);
    }), le([i, l, d], (C, I) => {
      var [S, D, P] = C, [E, V] = I, b = [], {
        maxPagerCount: k,
        total: H,
        onChange: J
      } = e, j = Math.ceil(L(H) / L(V)), R = P - (k - u.value) - 1;
      if (a.value = "" + S, P - 2 > k) {
        if (E === void 0 || P !== j)
          for (var z = 2; z < k + 2; z++)
            b.push(z);
        if (S <= k && S < R) {
          b = [];
          for (var ae = 1; ae < k + 1; ae++)
            b.push(ae + 1);
          t.value = !0, o.value = !1;
        }
        if (S > k && S < R) {
          b = [];
          for (var oe = 1; oe < k + 1; oe++)
            b.push(S + oe - u.value);
          t.value = S === 2 && k === 1, o.value = !1;
        }
        if (S >= R) {
          b = [];
          for (var Y = 1; Y < k + 1; Y++)
            b.push(P - (k - Y) - 1);
          t.value = !1, o.value = !0;
        }
        b = [1, "...", ...b, "...", P];
      } else
        for (var _ = 1; _ <= P; _++)
          b.push(_);
      s.value = b, E !== void 0 && P > 0 && T(J, S, D), T(e["onUpdate:current"], S), T(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Rb,
      classes: Ub,
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
      clickItem: y,
      showMenu: g,
      clickSize: $,
      setPage: w,
      toNumber: L
    };
  }
});
Sd.render = Hb;
const Kr = Sd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var qS = Kr, Yb = {
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
  onClick: U()
}, {
  n: jb,
  classes: Wb
} = ne("paper");
function Gb(e, n) {
  var r = Ie("ripple");
  return we((h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.elevation != null, e.n("$-elevation--" + e.elevation)], [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var kd = ee({
  name: "VarPaper",
  directives: {
    Ripple: Re
  },
  props: Yb,
  setup(e) {
    var n = (r) => {
      T(e.onClick, r);
    };
    return {
      n: jb,
      classes: Wb,
      toSizeUnit: pe,
      handleClick: n
    };
  }
});
kd.render = Gb;
const Zr = kd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var XS = Zr;
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
var qb = oi({
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
}, Je(pt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Xb,
  classes: Kb
} = ne("picker"), Hl = 300, Zb = 15, Yl = 0, Jb = ["onTouchstart", "onTouchmove", "onTouchend"], Qb = ["onTransitionend"];
function _b(e, n) {
  var r = te("var-button");
  return h(), ge(
    Ja(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ve(() => [N(
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
          [W(e.$slots, "cancel", {}, () => [Q(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                re(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), W(e.$slots, "title", {}, () => [N(
            "div",
            {
              class: c(e.n("title"))
            },
            re(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), W(e.$slots, "confirm", {}, () => [Q(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                re(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
        )) : x("v-if", !0), N(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), O(
            Oe,
            null,
            Ae(e.scrollColumns, (a) => (h(), O(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Mn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [N(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: q({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), O(
                  Oe,
                  null,
                  Ae(a.column.texts, (t) => (h(), O(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: q({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [N(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      re(e.textFormatter(t, a.columnIndex)),
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
                Qb
              )],
              42,
              Jb
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
var $d = ee({
  name: "VarPicker",
  components: {
    VarButton: Ke,
    VarPopup: pn
  },
  inheritAttrs: !1,
  props: qb,
  setup(e) {
    var n = M([]), r = F(() => Le(e.optionHeight)), a = F(() => Le(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), o = F(() => a.value * r.value), i = [], l = (b, k) => {
      k.scrollEl = b;
    }, s = (b) => {
      T(e["onUpdate:show"], b);
    }, u = (b) => {
      var k = r.value + t.value, H = t.value - b.column.texts.length * r.value;
      b.translate >= k && (b.translate = k), b.translate <= H && (b.translate = H);
    }, d = (b, k) => {
      var {
        length: H
      } = b.column.texts;
      return k = k >= H ? H - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (b) => {
      var k = Math.round((t.value - b.translate) / r.value);
      return d(b, k);
    }, f = () => {
      var b = n.value.map((H) => H.column.texts[H.index]), k = n.value.map((H) => H.index);
      return {
        texts: b,
        indexes: k
      };
    }, m = function(b, k, H, J) {
      J === void 0 && (J = !1);
      var j = t.value - d(b, k) * r.value;
      j === b.translate && (b.scrolling = !1, !J && D(b)), b.translate = j, b.duration = H;
    }, p = (b, k, H) => {
      b.translate += Math.abs(k / H) / 3e-3 * (k < 0 ? -1 : 1);
    }, y = (b, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = mo(k.scrollEl);
    }, g = (b, k) => {
      if (k.touching) {
        var {
          clientY: H
        } = b.touches[0], J = k.prevY !== void 0 ? H - k.prevY : 0;
        k.prevY = H, k.translate += J, u(k);
        var j = performance.now();
        j - k.momentumTime > Hl && (k.momentumTime = j, k.momentumPrevY = k.translate);
      }
    }, $ = (b, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var H = k.translate - k.momentumPrevY, J = performance.now() - k.momentumTime, j = Math.abs(H) >= Zb && J <= Hl;
      j && p(k, H, J), k.index = v(k), m(k, k.index, j ? 1e3 : 200);
    }, B = (b) => {
      b.scrolling = !1, D(b);
    }, w = (b) => b.map((k, H) => {
      var J, j = Ce(k) ? {
        texts: k
      } : k, R = {
        id: Yl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (J = j.initialIndex) != null ? J : 0,
        columnIndex: H,
        duration: 0,
        momentumTime: 0,
        column: j,
        scrollEl: null,
        scrolling: !1
      };
      return m(R, R.index, 0, !0), R;
    }), C = (b) => {
      var k = [];
      return I(k, b, 0, !0), k;
    }, I = function(b, k, H, J) {
      if (J === void 0 && (J = !1), Ce(k) && k.length) {
        var j, R = J && (j = e.cascadeInitialIndexes[b.length]) != null ? j : 0, z = {
          id: Yl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: R,
          columnIndex: H,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: k.map((ae) => ae[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        b.push(z), m(z, z.index, 0, !0), I(b, z.columns[z.index].children, H + 1, J);
      }
    }, S = (b) => {
      n.value.splice(n.value.indexOf(b) + 1), I(n.value, b.columns[b.index].children, b.columnIndex + 1);
    }, D = (b) => {
      var {
        cascade: k,
        onChange: H
      } = e;
      k && S(b);
      var J = n.value.some((ae) => ae.scrolling);
      if (!J) {
        var {
          texts: j,
          indexes: R
        } = f(), z = R.every((ae, oe) => ae === i[oe]);
        z || (i = [...R], T(H, j, R));
      }
    }, P = () => {
      if (e.cascade) {
        var b = n.value.find((k) => k.scrolling);
        b && (b.translate = mo(b.scrollEl), b.index = v(b), m(b, b.index, 0, !0), b.scrolling = !1, S(b));
      } else
        n.value.forEach((k) => {
          k.translate = mo(k.scrollEl), k.index = v(k), m(k, k.index, 0);
        });
    }, E = () => {
      P();
      var {
        texts: b,
        indexes: k
      } = f();
      i = [...k], T(e.onConfirm, b, k);
    }, V = () => {
      P();
      var {
        texts: b,
        indexes: k
      } = f();
      i = [...k], T(e.onCancel, b, k);
    };
    return le(() => e.columns, (b) => {
      n.value = e.cascade ? C(Fi(b)) : w(Fi(b));
      var {
        indexes: k
      } = f();
      i = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Xb,
      classes: Kb,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: g,
      handleTouchend: $,
      handleTransitionend: B,
      confirm: E,
      cancel: V,
      dt: Kt
    };
  }
});
$d.render = _b;
const vr = $d;
var an;
function Ta(e) {
  return new Promise((n) => {
    Ta.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Be(r);
    a.dynamic = !0, a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = Qa(vr, a, {
      onConfirm: (o, i) => {
        T(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, an === a && (an = null);
      },
      onCancel: (o, i) => {
        T(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, an === a && (an = null);
      },
      onClose: () => {
        T(a.onClose), n({
          state: "close"
        }), an === a && (an = null);
      },
      onClosed: () => {
        T(a.onClosed), t(), an === a && (an = null);
      },
      onRouteChange: () => {
        t(), an === a && (an = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
vr.install = function(e) {
  e.component(vr.name, vr);
};
Ta.Component = vr;
Ta.install = function(e) {
  e.component(vr.name, vr);
};
Ta.close = () => {
  if (an != null) {
    var e = an;
    an = null, Me().then(() => {
      e.show = !1;
    });
  }
};
var KS = vr;
function xb(e) {
  return ["linear", "circle"].includes(e);
}
var e0 = {
  mode: {
    type: String,
    default: "linear",
    validator: xb
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
  n: n0,
  classes: r0
} = ne("progress"), a0 = ["viewBox"], t0 = ["cx", "cy", "r", "stroke-width"], o0 = ["cx", "cy", "r", "stroke-width"];
function i0(e, n) {
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
      [N(
        "div",
        {
          class: c(e.n("linear-block")),
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), O(
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
      ), e.label ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (h(), O(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), O(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: q({
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
            style: q({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          t0
        )) : x("v-if", !0), N(
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
          o0
        )],
        14,
        a0
      )), e.label ? (h(), O(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          re(e.circleProps.roundValue),
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
var Td = ee({
  name: "VarProgress",
  props: e0,
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
      n: n0,
      classes: r0,
      toSizeUnit: pe,
      multiplySizeUnit: en,
      linearProps: n,
      circleProps: r
    };
  }
});
Td.render = i0;
const Jr = Td;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var ZS = Jr, l0 = {
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
function jl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function s0(e) {
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
  classes: u0
} = ne("pull-refresh"), Gl = 150;
function d0(e, n) {
  var r = te("var-icon");
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
    [N(
      "div",
      {
        ref: "controlNode",
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: q(e.controlStyle)
      },
      [Q(
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
    ), W(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Pd = ee({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: l0,
  setup(e) {
    var n, r, a = M(0), t = M(null), o = M(null), i = M(0), l = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = 0, f = 0, m = M(!0), p = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: $.value ? e.successBgColor : e.bgColor,
      color: $.value ? e.successColor : e.color
    })), g = F(() => Math.abs(2 * a.value)), $ = F(() => u.value === "success"), B = () => new Promise((V) => {
      window.setTimeout(() => {
        m.value = !0, V();
      }, Gl);
    }), w = (V) => {
      var b = "classList" in n ? n : document.body;
      b.classList[V](Wl() + "--lock");
    }, C = (V) => {
      v = V.touches[0].clientY, f = 0;
    }, I = (V) => {
      if (p.value) {
        var b = Zt(n);
        if (!(b > 0)) {
          var k = b === 0, H = V.touches[0];
          f = H.clientY - v, k && f >= 0 && V.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = V.touches[0].clientY), k && l.value > a.value && w("add");
          var J = (V.touches[0].clientY - i.value) / 2 + a.value;
          l.value = J >= g.value ? g.value : J, l.value >= g.value * 0.2 ? (m.value = !1, s.value = "refresh", r = B()) : s.value = "arrow-down";
        }
      }
    }, S = /* @__PURE__ */ function() {
      var V = s0(function* () {
        p.value && (d.value = !0, l.value >= g.value * 0.2 ? (yield r, u.value = "loading", l.value = g.value * 0.3, T(e["onUpdate:modelValue"], !0), T(e.onRefresh), w("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, w("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), D = () => {
      var {
        width: V
      } = o.value.getBoundingClientRect();
      l.value = -(V + V * 0.25), a.value = -(V + V * 0.25);
    }, P = () => {
      n = e.target ? ls(e.target, "PullRefresh") : Ma(t.value);
    }, E = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (V) => {
      V === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, E();
      }, L(e.successDuration)));
    }), ln(() => {
      P(), D();
    }), wa(t, "touchmove", I), {
      n: Wl,
      classes: u0,
      iconHasChanged: m,
      ICON_TRANSITION: Gl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: C,
      touchMove: I,
      touchEnd: S,
      iconName: s,
      controlStyle: y,
      isSuccess: $
    };
  }
});
Pd.render = d0;
const Qr = Pd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var JS = Qr, v0 = {
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
}, Od = Symbol("RADIO_GROUP_BIND_RADIO_KEY");
function f0() {
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
function c0() {
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
  n: m0,
  classes: p0
} = ne("radio");
function h0(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ie("ripple");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
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
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [Q(
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
        )]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [Q(
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
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), N(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), Q(
      a,
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
var Vd = ee({
  name: "VarRadio",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  inheritAttrs: !1,
  props: v0,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = c0(), {
      form: i,
      bindForm: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (C) => {
      Me(() => {
        var {
          validateTrigger: I,
          rules: S,
          modelValue: D
        } = e;
        u(I, C, S, D);
      });
    }, m = (C) => {
      var {
        checkedValue: I,
        onChange: S
      } = e;
      t && n.value === I || (n.value = C, T(e["onUpdate:modelValue"], n.value), T(S, n.value), t == null || t.onToggle(I), f("onChange"));
    }, p = (C) => {
      var {
        disabled: I,
        readonly: S,
        uncheckedValue: D,
        checkedValue: P,
        onClick: E
      } = e;
      i != null && i.disabled.value || I || (T(E, C), !(i != null && i.readonly.value || S) && (a.value = !0, m(r.value ? D : P)));
    }, y = (C) => {
      var {
        checkedValue: I,
        uncheckedValue: S
      } = e;
      n.value = C === I ? I : S;
    }, g = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, $ = () => d(e.rules, e.modelValue), B = (C) => {
      var {
        uncheckedValue: I,
        checkedValue: S
      } = e, D = ![I, S].includes(C);
      D && (C = r.value ? I : S), m(C);
    };
    le(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var w = {
      sync: y,
      validate: $,
      resetValidation: v,
      reset: g
    };
    return T(o, w), T(l, w), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: m0,
      classes: p0,
      handleClick: p,
      toggle: B,
      reset: g,
      validate: $,
      resetValidation: v
    };
  }
});
Vd.render = h0;
const _r = Vd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var QS = _r;
function g0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var y0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: g0
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
  n: b0,
  classes: w0
} = ne("radio-group");
function C0(e, n) {
  var r = te("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), Q(
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
var Md = ee({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: y0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = f0(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = bn(), u = F(() => o.value), d = (g) => {
      Me(() => {
        var {
          validateTrigger: $,
          rules: B,
          modelValue: w
        } = e;
        i($, g, B, w);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: $
      } = g;
      return $(e.modelValue);
    }), f = (g) => {
      T(e["onUpdate:modelValue"], g), T(e.onChange, g), d("onChange");
    }, m = () => l(e.rules, e.modelValue), p = () => {
      T(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var y = {
      onToggle: f,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return T(t, y), a(y), {
      errorMessage: o,
      n: b0,
      classes: w0,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
Md.render = C0;
const xr = Md;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var _S = xr, S0 = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: xa
} = ne("rate"), k0 = ["onClick"];
function $0(e, n) {
  var r = te("var-icon"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), i = Ie("hover");
  return h(), O(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [N(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), O(
        Oe,
        null,
        Ae(e.toNumber(e.count), (l) => we((h(), O(
          "div",
          {
            key: l,
            style: q(e.getStyle(l)),
            class: c(e.getClass(l)),
            onClick: (s) => e.handleClick(l, s)
          },
          [Q(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(l).name,
              style: q({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          ), Q(
            a,
            {
              hovering: e.hovering && l === e.currentHoveringValue && !e.disabled && !e.formDisabled
            },
            null,
            8,
            ["hovering"]
          )],
          14,
          k0
        )), [[o, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }], [i, e.createHoverHandler(l), "desktop"]])),
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
var Bd = ee({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: hn
  },
  directives: {
    Ripple: Re,
    Hover: cr
  },
  props: S0,
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
    } = Ha(), s = M(-1), u = (w) => {
      var {
        count: C,
        gap: I
      } = e;
      return {
        color: v(w).color,
        marginRight: w !== L(C) ? pe(I) : 0
      };
    }, d = (w) => {
      var {
        name: C,
        color: I
      } = v(w);
      return {
        [xa("content")]: !0,
        [xa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [xa("--error")]: a.value,
        [xa("--primary")]: C !== e.emptyIcon && !I
      };
    }, v = (w) => {
      var {
        modelValue: C,
        disabled: I,
        disabledColor: S,
        color: D,
        half: P,
        emptyColor: E,
        icon: V,
        halfIcon: b,
        emptyIcon: k
      } = e, H = D;
      return (I || n != null && n.disabled.value) && (H = S), w <= L(C) ? {
        color: H,
        name: V
      } : P && w <= L(C) + 0.5 ? {
        color: H,
        name: b
      } : {
        color: I || n != null && n.disabled.value ? S : E,
        name: k
      };
    }, f = (w, C) => {
      if (e.half) {
        var {
          offsetWidth: I
        } = C.target;
        C.offsetX <= Math.floor(I / 2) && (w -= 0.5);
      }
      T(e["onUpdate:modelValue"], w);
    }, m = () => o(e.rules, L(e.modelValue)), p = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), y = (w, C) => {
      var {
        readonly: I,
        disabled: S,
        onChange: D
      } = e;
      I || S || n != null && n.disabled.value || n != null && n.readonly.value || (f(w, C), T(D, w), p());
    }, g = (w) => (C) => {
      s.value = w, l.value = C;
    }, $ = () => {
      T(e["onUpdate:modelValue"], 0), i();
    }, B = {
      reset: $,
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
      handleClick: y,
      hovering: l,
      currentHoveringValue: s,
      createHoverHandler: g,
      reset: $,
      validate: m,
      resetValidation: i,
      toSizeUnit: pe,
      toNumber: L,
      n: xa
    };
  }
});
Bd.render = $0;
const ea = Bd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var xS = ea;
function T0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var P0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: T0
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
}, O0 = (e) => (Oa(""), e = e(), Va(), e), V0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, M0 = /* @__PURE__ */ O0(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), B0 = [M0];
function I0(e, n) {
  return h(), O("svg", V0, B0);
}
var Id = ee({});
Id.render = I0;
const E0 = Id;
var D0 = (e) => (Oa(""), e = e(), Va(), e), N0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, A0 = /* @__PURE__ */ D0(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), z0 = [A0];
function L0(e, n) {
  return h(), O("svg", N0, z0);
}
var Ed = ee({});
Ed.render = L0;
const R0 = Ed;
var U0 = (e) => (Oa(""), e = e(), Va(), e), F0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, H0 = /* @__PURE__ */ U0(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), Y0 = [H0];
function j0(e, n) {
  return h(), O("svg", F0, Y0);
}
var Dd = ee({});
Dd.render = j0;
const W0 = Dd;
var {
  n: G0,
  classes: q0
} = ne("result");
function X0(e, n) {
  return h(), O(
    Oe,
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
var Nd = ee({
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
      n: G0,
      classes: q0,
      toNumber: L
    };
  }
});
Nd.render = X0;
const K0 = Nd;
var Z0 = (e) => (Oa(""), e = e(), Va(), e), J0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Q0 = /* @__PURE__ */ Z0(() => /* @__PURE__ */ N(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), _0 = [Q0];
function x0(e, n) {
  return h(), O("svg", J0, _0);
}
var Ad = ee({});
Ad.render = x0;
const e1 = Ad;
var n1 = (e) => (Oa(""), e = e(), Va(), e), r1 = {
  viewBox: "-4 -4 32 32"
}, a1 = /* @__PURE__ */ n1(() => /* @__PURE__ */ N(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), t1 = [a1];
function o1(e, n) {
  return h(), O("svg", r1, t1);
}
var zd = ee({});
zd.render = o1;
const i1 = zd;
var {
  n: l1,
  classes: s1
} = ne("result");
function u1(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (h(), O(
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
        [(h(), ge(
          Ja(e.type),
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
    )) : x("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ld = ee({
  name: "VarResult",
  components: {
    Info: E0,
    Success: K0,
    Warning: W0,
    Error: R0,
    Question: e1,
    Empty: i1
  },
  props: P0,
  setup(e) {
    var n = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? pe(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? pe(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: l1,
      classes: s1,
      toNumber: L,
      toPxNum: Le,
      toSizeUnit: pe,
      circleSize: n,
      borderSize: r
    };
  }
});
Ld.render = u1;
const na = Ld;
na.install = function(e) {
  e.component(na.name, na);
};
var ek = na;
function d1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function v1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var f1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: d1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: v1
  },
  onClick: U()
}, {
  n: c1,
  classes: m1
} = ne("row");
function p1(e, n) {
  return h(), O(
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
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Rd = ee({
  name: "VarRow",
  props: f1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Nm(), t = F(() => {
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
      n: c1,
      classes: m1,
      average: t,
      handleClick: i,
      padStartFlex: At
    };
  }
});
Rd.render = p1;
const ra = Rd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var nk = ra;
function h1(e) {
  return ["left", "right", "center"].includes(e);
}
var g1 = {
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
    validator: h1
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
  onClick: U(),
  onClear: U(),
  onClose: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: yo,
  classes: y1
} = ne("select"), b1 = {
  key: 1
};
function w1(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-menu"), o = te("var-form-details");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), N(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [Q(
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
            menu: ve(() => [N(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [W(e.$slots, "default")],
              2
              /* CLASS */
            )]),
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
                [e.isEmptyModelValue ? x("v-if", !0) : W(e.$slots, "selected", {
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
                      Ae(e.labels, (i) => (h(), ge(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = Mn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [be(
                            re(i),
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
                    re(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (h(), O(
                  "span",
                  b1,
                  re(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), W(e.$slots, "arrow-icon", {
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
            ), N(
              "label",
              {
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: q({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              re(e.placeholder),
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
      ), N(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), ge(
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
        )) : x("v-if", !0)])],
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
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [N(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
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
    )) : x("v-if", !0), Q(
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
var Ud = ee({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Yn,
    VarChip: or,
    VarFormDetails: We
  },
  props: g1,
  setup(e) {
    var n = M(null), r = M(!1), a = F(() => e.multiple), t = F(() => e.focusColor), o = M(""), i = M([]), l = F(() => Nn(e.modelValue)), s = M("0px"), u = M(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: m,
      bindOptions: p
    } = Mb(), {
      errorMessage: y,
      validateWithTrigger: g,
      validate: $,
      // expose
      resetValidation: B
    } = bn(), w = M(null), C = () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K) {
        var G = A;
        i.value = G.map(D);
      }
      !K && !Nn(A) && (o.value = D(A)), !K && Nn(A) && (o.value = "");
    }, I = (K) => {
      Me(() => {
        var {
          validateTrigger: A,
          rules: G,
          modelValue: Z
        } = e;
        g(A, K, G, Z);
      });
    }, S = (K) => {
      var {
        value: A,
        label: G
      } = K;
      return A.value != null ? A.value : G.value;
    }, D = (K) => {
      var A, G, Z = m.find((ce) => {
        var {
          value: fe
        } = ce;
        return fe.value === K;
      });
      return Z || (Z = m.find((ce) => {
        var {
          label: fe
        } = ce;
        return fe.value === K;
      })), (A = (G = Z) == null ? void 0 : G.label.value) != null ? A : "";
    }, P = () => {
      var {
        hint: K,
        modelValue: A
      } = e;
      if (!K && !Nn(A))
        return yo("--placeholder-hidden");
      if (K && (!Nn(A) || r.value))
        return yo("--placeholder-hint");
    }, E = () => n.value && window.getComputedStyle(n.value).width || "0px", V = () => {
      var {
        disabled: K,
        readonly: A,
        onFocus: G
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || A || (s.value = E(), u.value = Le(e.offsetY), r.value = !0, T(G), I("onFocus"));
    }, b = () => {
      var {
        disabled: K,
        readonly: A,
        onBlur: G
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || A || (T(G), I("onBlur"));
    }, k = (K) => {
      var {
        disabled: A,
        readonly: G,
        multiple: Z,
        onChange: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || A || G)) {
        var fe = Z ? m.filter((Ne) => {
          var {
            selected: Ge
          } = Ne;
          return Ge.value;
        }).map(S) : S(K);
        T(e["onUpdate:modelValue"], fe), T(ce, fe), I("onChange"), !Z && (r.value = !1);
      }
    }, H = () => {
      var {
        disabled: K,
        readonly: A,
        multiple: G,
        clearable: Z,
        onClear: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || K || A || !Z)) {
        var fe = G ? [] : void 0;
        T(e["onUpdate:modelValue"], fe), T(ce, fe), I("onClear");
      }
    }, J = (K) => {
      var {
        disabled: A,
        onClick: G
      } = e;
      v != null && v.disabled.value || A || (T(G, K), I("onClick"));
    }, j = (K) => {
      var {
        disabled: A,
        readonly: G,
        modelValue: Z,
        onClose: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || A || G)) {
        var fe = Z, Ne = m.find((qe) => {
          var {
            label: ze
          } = qe;
          return ze.value === K;
        }), Ge = fe.filter((qe) => {
          var ze;
          return qe !== ((ze = Ne.value.value) != null ? ze : Ne.label.value);
        });
        T(e["onUpdate:modelValue"], Ge), T(ce, Ge), I("onClose");
      }
    }, R = () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K) {
        var G = A;
        m.forEach((Z) => Z.sync(G.includes(S(Z))));
      } else
        m.forEach((Z) => Z.sync(A === S(Z)));
      C();
    }, z = () => {
      s.value = E(), u.value = Le(e.offsetY), r.value = !0;
    }, ae = () => {
      r.value = !1;
    }, oe = () => $(e.rules, e.modelValue), Y = () => {
      T(e["onUpdate:modelValue"], e.multiple ? [] : void 0), B();
    };
    le(() => e.multiple, () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K && !Ce(A))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, R, {
      deep: !0
    }), le(() => f.value, R);
    var _ = {
      wrapWidth: F(() => s.value),
      multiple: a,
      focusColor: t,
      computeLabel: C,
      onSelect: k,
      reset: Y,
      validate: oe,
      resetValidation: B
    };
    return p(_), T(d, _), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: w,
      n: yo,
      classes: y1,
      computePlaceholderState: P,
      handleFocus: V,
      handleBlur: b,
      handleClear: H,
      handleClick: J,
      handleClose: j,
      reset: Y,
      validate: oe,
      resetValidation: B,
      focus: z,
      blur: ae
    };
  }
});
Ud.render = w1;
const aa = Ud;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var rk = aa, C1 = {
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
  n: S1,
  classes: k1
} = ne("skeleton");
function $1(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (h(), O(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [W(e.$slots, "default")],
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), O(
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), O(
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
          )) : x("v-if", !0), (h(!0), O(
            Oe,
            null,
            Ae(e.toNumber(e.rows), (r, a) => (h(), O(
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (h(), O(
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
var Fd = ee({
  name: "VarSkeleton",
  props: C1,
  setup() {
    return {
      n: S1,
      classes: k1,
      toSizeUnit: pe,
      toNumber: L
    };
  }
});
Fd.render = $1;
const ta = Fd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var ak = ta;
function T1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ee;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ee || (Ee = {}));
var P1 = {
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
    validator: T1
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
  onChange: U(),
  onStart: U(),
  onEnd: U(),
  "onUpdate:modelValue": U()
}, {
  n: ql,
  classes: O1
} = ne("slider"), V1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function M1(e, n) {
  var r = te("var-hover-overlay"), a = te("var-form-details"), t = Ie("hover");
  return h(), O(
    "div",
    {
      class: c(e.n())
    },
    [N(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [N(
        "div",
        {
          class: c(e.n("track"))
        },
        [N(
          "div",
          {
            class: c(e.n("track-background")),
            style: q({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), N(
          "div",
          {
            class: c(e.n("track-fill")),
            style: q(e.getFillStyle)
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
        Ae(e.thumbList, (o) => (h(), O(
          "div",
          {
            class: c(e.n("thumb")),
            key: o.enumValue,
            style: q({
              left: o.value + "%",
              zIndex: e.thumbsProps[o.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Mn((i) => e.start(i, o.enumValue), ["stop"]),
            onTouchmove: Mn((i) => e.move(i, o.enumValue), ["stop"]),
            onTouchend: (i) => e.end(o.enumValue),
            onTouchcancel: (i) => e.end(o.enumValue)
          },
          [W(e.$slots, "button", {
            currentValue: o.text
          }, () => [we(N(
            "div",
            {
              class: c(e.n("thumb-block")),
              style: q({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), [[t, (i) => e.hover(i, o), "desktop"]]), N(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[o.enumValue].active, e.n("thumb-ripple--active")])),
              style: q({
                background: e.thumbsProps[o.enumValue].active ? e.thumbColor : void 0
              })
            },
            [Q(
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
          ), N(
            "div",
            {
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(o.enumValue), e.n("thumb-label--active")])),
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
              re(o.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          V1
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
var Hd = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: We,
    VarHoverOverlay: hn
  },
  directives: {
    Hover: cr
  },
  props: P1,
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
    } = Ha(), {
      hovering: u,
      handleHovering: d
    } = Ha(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), m = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), p = M(null), y = M(0), g = M(!1), $ = Be({
      [Ee.First]: f(),
      [Ee.Second]: f()
    }), B = F(() => L(e.max) - L(e.min)), w = F(() => y.value / B.value * L(e.step)), C = F(() => {
      var {
        modelValue: A,
        range: G
      } = e, Z = [];
      return G && Ce(A) ? Z = [{
        value: E(A[0]),
        enumValue: Ee.First,
        text: V(A[0]),
        hovering: Ua(l),
        handleHovering: s
      }, {
        value: E(A[1]),
        enumValue: Ee.Second,
        text: V(A[1]),
        hovering: Ua(u),
        handleHovering: d
      }] : rn(A) && (Z = [{
        value: E(A),
        enumValue: Ee.First,
        text: V(A),
        hovering: Ua(l),
        handleHovering: s
      }]), Z;
    }), I = F(() => {
      var {
        activeColor: A,
        range: G,
        modelValue: Z
      } = e, ce = G && Ce(Z) ? E(Math.min(Z[0], Z[1])) : 0, fe = G && Ce(Z) ? E(Math.max(Z[0], Z[1])) - ce : E(Z);
      return {
        width: fe + "%",
        left: ce + "%",
        background: A
      };
    }), S = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), D = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), P = (A) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : $[A].active, E = (A) => {
      var {
        min: G,
        max: Z
      } = e;
      return A < L(G) ? 0 : A > L(Z) ? 100 : (A - L(G)) / B.value * 100;
    }, V = (A) => {
      if (!rn(A))
        return 0;
      var G = A;
      G < Number(e.min) && (G = Number(e.min)), G > Number(e.max) && (G = Number(e.max));
      var Z = parseInt("" + G, 10) === G;
      return Z ? G : L(G.toPrecision(5));
    }, b = (A, G) => {
      S.value || G.handleHovering(A);
    }, k = (A, G) => {
      var Z = [], {
        step: ce,
        range: fe,
        modelValue: Ne,
        onChange: Ge,
        min: qe
      } = e, ze = L(ce), _e = Math.round(A / w.value), Ba = _e * ze + L(qe), fo = $[G].percentValue * ze + L(qe);
      if ($[G].percentValue = _e, fe && Ce(Ne) && (Z = G === Ee.First ? [Ba, Ne[1]] : [Ne[0], Ba]), fo !== Ba) {
        var yt = fe ? Z.map((bt) => V(bt)) : V(Ba);
        T(Ge, yt), T(e["onUpdate:modelValue"], yt), m();
      }
    }, H = (A) => {
      if (!e.range)
        return Ee.First;
      var G = $[Ee.First].percentValue * w.value, Z = $[Ee.Second].percentValue * w.value, ce = Math.abs(A - G), fe = Math.abs(A - Z);
      return ce <= fe ? Ee.First : Ee.Second;
    }, J = (A, G) => {
      y.value || (y.value = p.value.offsetWidth), S.value || ($[G].active = !0), !(S.value || D.value) && (T(e.onStart), g.value = !0, $[G].startPosition = A.touches[0].clientX);
    }, j = (A, G) => {
      if (!(S.value || D.value || !g.value)) {
        var Z = A.touches[0].clientX - $[G].startPosition + $[G].currentLeft;
        Z <= 0 ? Z = 0 : Z >= y.value && (Z = y.value), k(Z, G);
      }
    }, R = (A) => {
      var {
        range: G,
        modelValue: Z,
        onEnd: ce,
        step: fe,
        min: Ne
      } = e;
      if (S.value || ($[A].active = !1), !(S.value || D.value)) {
        var Ge = [];
        $[A].currentLeft = $[A].percentValue * w.value;
        var qe = $[A].percentValue * L(fe) + L(Ne);
        G && Ce(Z) && (Ge = A === Ee.First ? [qe, Z[1]] : [Z[0], qe]), T(ce, G ? Ge : qe), g.value = !1;
      }
    }, z = (A) => {
      if (!(S.value || D.value) && !A.target.closest("." + ql("thumb"))) {
        var G = A.clientX - Mv(A.currentTarget), Z = H(G);
        k(G, Z), R(Z);
      }
    }, ae = () => {
      var A = L(e.step);
      return isNaN(A) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : A < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, oe = () => {
      var {
        range: A,
        modelValue: G
      } = e;
      return A && !Ce(G) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !A && Ce(G) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : A && Ce(G) && G.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, Y = function(A, G) {
      A === void 0 && (A = e.modelValue), G === void 0 && (G = L(e.step));
      var Z = (ce) => {
        var {
          min: fe,
          max: Ne
        } = e;
        return ce < L(fe) ? 0 : ce > L(Ne) ? B.value / G : (ce - L(fe)) / G;
      };
      e.range && Ce(A) ? ($[Ee.First].percentValue = Z(A[0]), $[Ee.First].currentLeft = $[Ee.First].percentValue * w.value, $[Ee.Second].percentValue = Z(A[1]), $[Ee.Second].currentLeft = $[Ee.Second].percentValue * w.value) : rn(A) && ($[Ee.First].currentLeft = Z(A) * w.value);
    }, _ = () => {
      var A = e.range ? [0, 0] : 0;
      T(e["onUpdate:modelValue"], A), i();
    }, K = {
      reset: _,
      validate: v,
      resetValidation: i
    };
    return T(n, K), le([() => e.modelValue, () => e.step], (A) => {
      var [G, Z] = A;
      !ae() || !oe() || g.value || Y(G, L(Z));
    }), le(y, () => Y()), ln(() => {
      !ae() || !oe() || (y.value = p.value.offsetWidth);
    }), {
      n: ql,
      classes: O1,
      Thumbs: Ee,
      sliderEl: p,
      getFillStyle: I,
      isDisabled: S,
      errorMessage: a,
      thumbsProps: $,
      thumbList: C,
      hover: b,
      multiplySizeUnit: en,
      toNumber: L,
      showLabel: P,
      start: J,
      move: j,
      end: R,
      click: z
    };
  }
});
Hd.render = M1;
const oa = Hd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var tk = oa;
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
function B1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function I1(e) {
  return Ai.includes(e);
}
var Yd = {
  type: {
    type: String,
    validator: I1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: B1
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
  loadingType: Je(_n, "type"),
  loadingSize: Je(_n, "size"),
  loadingRadius: Je(_n, "radius"),
  loadingColor: ii({}, Je(_n, "color"), {
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
  n: E1,
  classes: D1
} = ne("snackbar"), N1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function A1(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return we((h(), O(
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
        [W(e.$slots, "default", {}, () => [be(
          re(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), N(
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
        )) : x("v-if", !0), e.type === "loading" ? (h(), ge(
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
        )) : x("v-if", !0), W(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[fr, e.show]]);
}
var jd = ee({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: Yd,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = ht(() => e.show, 1);
    _t(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? N1[e.type] : ""), o = () => {
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
      n: E1,
      classes: D1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
jd.render = A1;
const Wd = jd;
var {
  n: z1
} = ne("snackbar");
function L1(e, n) {
  var r = te("var-snackbar-core");
  return h(), ge(
    Pa,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [Q(
      De,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [Q(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ve(() => [W(e.$slots, "action")]),
            default: ve(() => [W(e.$slots, "default", {}, () => [be(
              re(e.content),
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
var Gd = ee({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Wd
  },
  props: Yd,
  setup() {
    var {
      disabled: e
    } = Qt();
    return {
      n: z1,
      disabled: e
    };
  }
});
Gd.render = L1;
const ia = Gd;
function vt() {
  return vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vt.apply(this, arguments);
}
function R1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ct(e);
}
var Ai = ["loading", "success", "warning", "info", "error"], Xl = 0, li = !1, qd, qa = !1, Xd = {
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
}, yn = Be([]), zi = Xd, U1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, F1 = {
  setup() {
    return () => {
      var e = yn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), qa && (a.position = "top");
        var i = qa ? "relative" : "absolute", l = vt({
          position: i
        }, q1(a.position));
        return Q(Wd, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return Q(Sv, Ve(U1, {
        style: {
          zIndex: fn.zIndex
        },
        onAfterEnter: H1,
        onAfterLeave: Y1
      }), R1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, jn = function(e) {
  var n = W1(e), r = Be(vt({}, zi, n));
  r.show = !0, li || (li = !0, qd = Qa(F1).unmountInstance);
  var {
    length: a
  } = yn, t = {
    id: Xl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || qa)
    j1(t);
  else {
    var o = "update-" + Xl;
    G1(r, o);
  }
  return {
    clear() {
      !qa && yn.length ? yn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Ai.forEach((e) => {
  jn[e] = (n) => (fi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, jn(n));
});
jn.install = function(e) {
  e.component(ia.name, ia);
};
jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== qa && (yn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), qa = e);
};
jn.clear = function() {
  yn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
jn.setDefaultOptions = function(e) {
  zi = e;
};
jn.resetDefaultOptions = function() {
  zi = Xd;
};
jn.Component = ia;
function H1(e) {
  var n = e.getAttribute("data-id"), r = yn.find((a) => a.id === L(n));
  r && T(r.reactiveSnackOptions.onOpened);
}
function Y1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = yn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, T(r.reactiveSnackOptions.onClosed));
  var a = yn.every((t) => t.animationEnd);
  a && (T(qd), yn = Be([]), li = !1);
}
function j1(e) {
  yn.push(e);
}
function W1(e) {
  return e === void 0 && (e = {}), Ze(e) ? {
    content: e
  } : e;
}
function G1(e, n) {
  var [r] = yn;
  r.reactiveSnackOptions = vt({}, r.reactiveSnackOptions, e), r._update = n;
}
function q1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ia.install = function(e) {
  e.component(ia.name, ia);
};
var ok = ia;
const si = jn;
var Kd = (e) => ["mini", "small", "normal", "large"].includes(e), X1 = (e) => Kd(e) || Ce(e) || rn(e) || Ze(e), K1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Z1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), J1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: X1
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
    validator: K1
  },
  align: {
    type: String,
    validator: Z1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function vn(e) {
  return "calc(" + e + " / 2)";
}
function Q1(e, n, r) {
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
  classes: _1
} = ne("space");
const la = ee({
  name: "VarSpace",
  props: J1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ce(t) ? t.map(pe) : [pe(t), pe(t)];
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
      var y = v.length - 1, g = v.map(($, B) => {
        var w = Q1(m, p, {
          direction: u,
          justify: i,
          index: B,
          lastIndex: y
        });
        return Q("div", {
          style: {
            margin: w
          }
        }, [$]);
      });
      return Q("div", {
        class: _1(bo(), bo("$--box"), [o, bo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: At(i),
          alignItems: At(l),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var ik = la, x1 = {
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
function ew() {
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
function nw() {
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
  n: rw,
  classes: aw
} = ne("step"), tw = {
  key: 3
};
function ow(e, n) {
  var r = te("var-icon");
  return h(), O(
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
            tw,
            re(e.index + 1),
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
          [W(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? x("v-if", !0) : (h(), O(
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
var Jd = ee({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: x1,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = nw(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => i.value === a.value), m = F(() => a.value !== -1 && i.value > a.value), p = {
      index: a
    }, y = () => v(a.value), g = ($) => {
      d.value === "horizontal" && (e.value = $);
    };
    return o(p), le(l, ($) => {
      if (r.value = $ - 1 === a.value, e.value) {
        var B = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + B + "px";
      }
    }), {
      n: rw,
      classes: aw,
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
      getRef: g
    };
  }
});
Jd.render = ow;
const sa = Jd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var lk = sa;
function iw(e) {
  return ["horizontal", "vertical"].includes(e);
}
var lw = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: iw
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: sw
} = ne("steps");
function uw(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.n()),
      style: q({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Qd = ee({
  name: "VarSteps",
  props: lw,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: o,
      bindStep: i
    } = ew(), l = (u) => {
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
      n: sw
    };
  }
});
Qd.render = uw;
const ua = Qd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var sk = ua, dw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: vw
} = ne("style-provider"), fw = ee({
  name: "VarStyleProvider",
  props: dw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => ns(e.tag, {
      class: vw(),
      style: vs(e.styleVars)
    }, T(r.default));
  }
});
const da = fw;
var wo = [];
function ft(e) {
  wo.forEach((r) => document.documentElement.style.removeProperty(r)), wo.length = 0;
  var n = vs(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), wo.push(a);
  });
}
ft.Component = da;
da.install = function(e) {
  e.component(da.name, da);
};
ft.install = function(e) {
  e.component(da.name, da);
};
var uk = da, cw = {
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
  n: mw,
  classes: pw
} = ne("switch");
function hw(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ie("ripple"), i = Ie("hover");
  return we((h(), O(
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
      ), we((h(), O(
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
  )), [[i, e.hover, "desktop"]]);
}
var _d = ee({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: We,
    VarHoverOverlay: hn
  },
  directives: {
    Ripple: Re,
    Hover: cr
  },
  props: cw,
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
    } = Ha(), u = () => o(e.rules, e.modelValue), d = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = F(() => {
      var {
        size: $,
        modelValue: B,
        color: w,
        closeColor: C,
        loadingColor: I,
        activeValue: S
      } = e;
      return {
        handle: {
          width: en($),
          height: en($),
          backgroundColor: B === S ? w : C,
          color: I
        },
        ripple: {
          left: B === S ? en($, 0.5) : "-" + en($, 0.5),
          color: B === S ? w : C || "#999",
          width: en($, 2),
          height: en($, 2)
        },
        track: {
          height: en($, 0.72),
          width: en($, 1.9),
          borderRadius: en($, 2 / 3),
          filter: B === S || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: B === S ? w : C
        },
        switch: {
          height: en($, 1.2),
          width: en($, 2)
        }
      };
    }), f = F(() => {
      var {
        size: $ = "5.333vw"
      } = e;
      return en($, 0.4);
    }), m = ($) => {
      var {
        onClick: B,
        onChange: w,
        disabled: C,
        loading: I,
        readonly: S,
        modelValue: D,
        activeValue: P,
        inactiveValue: E,
        "onUpdate:modelValue": V
      } = e;
      if (T(B, $), !(C || I || S || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var b = D === P ? E : P;
        T(w, b), T(V, b), d();
      }
    }, p = ($) => {
      e.disabled || r != null && r.disabled.value || s($);
    }, y = () => {
      T(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, g = {
      reset: y,
      validate: u,
      resetValidation: i
    };
    return T(n, g), {
      n: mw,
      classes: pw,
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
_d.render = hw;
const va = _d;
va.install = function(e) {
  e.component(va.name, va);
};
var dk = va, gw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, xd = Symbol("TABS_BIND_TAB_KEY");
function yw() {
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
function bw() {
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
  n: Vt,
  classes: ww
} = ne("tab");
function Cw(e, n) {
  var r = Ie("ripple");
  return we((h(), O(
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
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var ev = ee({
  name: "VarTab",
  directives: {
    Ripple: Re
  },
  props: gw,
  setup(e) {
    var n = M(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = bw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = i, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(y);
    var g = () => {
      var {
        disabled: w,
        name: C
      } = e;
      return w ? f.value : u.value === C || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, $ = () => {
      var {
        disabled: w,
        name: C
      } = e;
      return w ? Vt("$-tab--disabled") : u.value === C || u.value === (o == null ? void 0 : o.value) ? Vt("$-tab--active") : Vt("$-tab--inactive");
    }, B = (w) => {
      var {
        disabled: C,
        name: I,
        onClick: S
      } = e;
      C || (T(S, I ?? o.value, w), s(y));
    };
    return le(() => e.name, p), le(() => e.disabled, p), {
      n: Vt,
      classes: ww,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: g,
      computeColorClass: $,
      handleClick: B
    };
  }
});
ev.render = Cw;
const fa = ev;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var vk = fa, nv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
function Sw() {
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
function kw() {
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
var $w = {
  name: {
    type: [String, Number]
  }
}, {
  n: Tw,
  classes: Pw
} = ne("tab-item");
function Ow(e, n) {
  var r = te("var-swipe-item");
  return h(), ge(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? W(e.$slots, "default", {
        key: 0
      }) : x("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var rv = ee({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Fn
  },
  props: $w,
  setup(e) {
    var n = M(!1), r = M(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: o
    } = kw(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: Tw,
      classes: Pw,
      current: n,
      initSlot: r
    };
  }
});
rv.render = Ow;
const ca = rv;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var fk = ca, Vw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Mw,
  classes: Bw
} = ne("table");
function Iw(e, n) {
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
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
        [W(e.$slots, "default")],
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
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
var av = ee({
  name: "VarTable",
  props: Vw,
  setup() {
    return {
      toSizeUnit: pe,
      n: Mw,
      classes: Bw
    };
  }
});
av.render = Iw;
const ma = av;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var ck = ma;
function Kl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Ew = {
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
  stickyCssMode: Je(Dt, "cssMode"),
  stickyZIndex: Je(Dt, "zIndex"),
  offsetTop: Je(Dt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
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
  n: Dw,
  classes: Nw
} = ne("tabs");
function Aw(e, n) {
  return h(), ge(
    Ja(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [N(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [N(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [W(e.$slots, "default"), N(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: q({
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
var tv = ee({
  name: "VarTabs",
  components: {
    VarSticky: Hn
  },
  inheritAttrs: !1,
  props: Ew,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), i = M(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = M(null), {
      tabList: m,
      bindTabList: p,
      length: y
    } = yw(), g = (V) => {
      var b, k = (b = V.name.value) != null ? b : V.index.value, {
        active: H,
        onChange: J,
        onClick: j
      } = e;
      T(e["onUpdate:active"], k), T(j, k), k !== H && T(J, k);
    }, $ = () => m.find((V) => {
      var {
        name: b
      } = V;
      return e.active === b.value;
    }), B = (V) => m.find((b) => {
      var {
        index: k
      } = b;
      return (V ?? e.active) === k.value;
    }), w = () => {
      if (y.value !== 0) {
        var {
          active: V
        } = e;
        if (rn(V)) {
          var b = V > y.value - 1 ? y.value - 1 : 0;
          return T(e["onUpdate:active"], b), B(b);
        }
      }
    }, C = () => {
      o.value = m.length >= 5;
    }, I = (V) => {
      var {
        element: b
      } = V, k = b.value;
      k && (e.layoutDirection === "horizontal" ? (n.value = k.offsetWidth + "px", a.value = k.offsetLeft + "px") : (r.value = k.offsetHeight + "px", t.value = k.offsetTop + "px"));
    }, S = (V) => {
      var {
        element: b
      } = V;
      if (o.value) {
        var k = i.value, H = b.value;
        if (e.layoutDirection === "horizontal") {
          var J = H.offsetLeft + H.offsetWidth / 2 - k.offsetWidth / 2;
          it(k, {
            left: J,
            animation: So
          });
        } else {
          var j = H.offsetTop + H.offsetHeight / 2 - k.offsetHeight / 2;
          it(k, {
            top: j,
            animation: So
          });
        }
      }
    }, D = () => {
      var V = $() || B() || w();
      !V || V.disabled.value || (C(), I(V), S(V));
    }, P = /* @__PURE__ */ function() {
      var V = Jl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), E = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: D,
      onTabClick: g
    };
    return p(E), le(() => y.value, /* @__PURE__ */ Jl(function* () {
      yield Bn(), D();
    })), le(() => e.active, D), wa(window, "resize", D), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: De,
      toSizeUnit: pe,
      n: Dw,
      classes: Nw,
      resize: D,
      resizeSticky: P
    };
  }
});
tv.render = Aw;
const pa = tv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var mk = pa, zw = {
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
function Ql(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Lw(e) {
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
  n: Rw
} = ne("tabs-items");
function Uw(e, n) {
  var r = te("var-swipe");
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
      default: ve(() => [W(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var ov = ee({
  name: "VarTabsItems",
  components: {
    VarSwipe: Un
  },
  props: zw,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Sw(), o = (f) => r.find((m) => {
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
      p && (r.forEach((y) => {
        var {
          setCurrent: g
        } = y;
        return g(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((g) => {
        var {
          index: $
        } = g;
        return $.value === f;
      }), y = (m = p.name.value) != null ? m : p.index.value;
      T(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ Lw(function* () {
      yield Bn(), s(e.active);
    })), {
      swipe: n,
      n: Rw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
ov.render = Uw;
const ha = ov;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var pk = ha;
const Fw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Hw = {
  "--badge-default-color": "#555"
}, Yw = {
  "--button-default-color": "#303030"
}, jw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Ww = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Gw = {
  "--checkbox-unchecked-color": "#fff"
}, qw = {
  "--chip-default-color": "#555"
}, Xw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Kw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Zw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, Jw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Qw = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, _w = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, xw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, eC = {
  "--popup-content-background-color": "#1e1e1e"
}, nC = {
  "--pull-refresh-background": "#303030"
}, rC = {
  "--radio-unchecked-color": "#fff"
}, aC = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, tC = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, oC = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, iC = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, lC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, sC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, uC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, dC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, vC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, fC = {
  "--tabs-background": "#1e1e1e"
}, cC = {
  "--app-bar-color": "#272727"
}, mC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, pC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, hC = {
  "--menu-background-color": "#272727"
}, gC = {
  "--breadcrumb-inactive-color": "#aaa"
}, yC = {
  "--paper-background": "#303030"
}, bC = {
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
const wC = ui({
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
}, Yw, Ww, jw, dC, Kw, oC, fC, sC, eC, Zw, Fw, qw, Hw, vC, Xw, nC, lC, iC, _w, uC, Qw, tC, rC, Gw, Jw, xw, cC, mC, pC, hC, aC, gC, yC, bC);
var CC = {
  dark: wC
}, hk = null;
const di = CC;
var mn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], nn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], _l = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function SC(e) {
  return ["ampm", "24hr"].includes(e);
}
var kC = {
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
    validator: SC
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
}, iv = (e, n) => e === "24hr" || n === "am", Li = (e, n, r) => {
  var a = mn.findIndex((o) => L(o) === L(r)), t = iv(e, n) ? r : nn[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, tn = (e) => {
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
      minute: y
    } = tn(l);
    f = p === v && a > y;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: $
    } = tn(s);
    f = g === v && a < $;
  }
  if (l && s) {
    var {
      hour: B,
      minute: w
    } = tn(l), {
      hour: C,
      minute: I
    } = tn(s);
    f = C === v && a < I || B === v && a > w;
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
      hour: y,
      minute: g,
      second: $
    } = tn(s);
    m = y === f && g < l || g === l && a > $;
  }
  if (!s && u) {
    var {
      hour: B,
      minute: w,
      second: C
    } = tn(u);
    m = B === f && w > l || w === l && a > C;
  }
  if (s && u) {
    var {
      hour: I,
      minute: S,
      second: D
    } = tn(s), {
      hour: P,
      minute: E,
      second: V
    } = tn(u);
    m = I === f && S < l || P === f && E > l || I === f && S === l && a > D || P === f && E === l && a < V;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: $C,
  classes: TC
} = ne("time-picker");
function PC(e, n) {
  return h(), O(
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
    ), (h(!0), O(
      Oe,
      null,
      Ae(e.timeScales, (r, a) => (h(), O(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: q(e.getStyle(a, r, !1))
        },
        re(r),
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
        Ae(e.hours24, (r, a) => (h(), O(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: q(e.getStyle(a, r, !0))
          },
          re(r),
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
var uv = ee({
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
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = F(() => e.type === "hour" ? mn : _l), u = (g, $) => {
      var B;
      g = (B = g) != null ? B : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? lv : sv, C = {
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
      return $ && e.type === "minute" && Reflect.deleteProperty(C, "minute"), w(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var g = e.isInner ? nn[l.value] : s.value[l.value];
      return s.value === _l ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, $) => $ ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (iv(e.format, e.ampm))
          return t.value.includes(g);
        var $ = mn.findIndex((B) => B === g);
        return o.value.includes($);
      }
      return u(g, !0);
    }, m = (g, $, B) => {
      var w = 2 * Math.PI / 12 * g - Math.PI / 2, C = 50 * (1 + Math.cos(w)), I = 50 * (1 + Math.sin(w)), S = () => v(g, B) ? f($) ? {
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
        color: P
      } = S();
      return {
        left: C + "%",
        top: I + "%",
        backgroundColor: D,
        color: P
      };
    }, p = () => {
      var {
        width: g,
        height: $
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: $
      };
    }, y = () => {
      if (l.value !== void 0) {
        var g = e.ampm === "am" ? mn : nn;
        return ba(g[l.value], 2, "0");
      }
    };
    return le([l, () => e.isInner], (g, $) => {
      var [B, w] = g, [C, I] = $, S = B === C && w === I;
      if (!(S || e.type !== "hour" || l.value === void 0)) {
        var D = w ? nn[l.value] : y(), P = e.useSeconds ? ":" + e.time.second : "", E = D + ":" + e.time.minute + P;
        e.preventNextUpdate || r("update", E), r("change-prevent-update");
      }
    }), le(() => e.rad, (g, $) => {
      if (!(e.type === "hour" || g === void 0 || $ === void 0)) {
        var B = g / 6 >= 0 ? g / 6 : g / 6 + 60, w = $ / 6 >= 0 ? $ / 6 : $ / 6 + 60;
        if (B !== w) {
          var C, {
            hourStr: I
          } = Li(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var S = ie().minute(B).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            C = I + ":" + S + D;
          }
          if (e.type === "second") {
            var P = ie().second(B).format("ss"), E = e.useSeconds ? ":" + P : "";
            C = I + ":" + e.time.minute + E;
          }
          r("update", C);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [$, B, w] = g;
      if (t.value = [], $ && !B) {
        var {
          hour: C
        } = tn($), I = mn.filter((z) => L(z) > C), S = nn.filter((z) => L(z) > C);
        t.value = [...I, ...S];
      }
      if (!$ && B) {
        var {
          hour: D
        } = tn(B), P = mn.filter((z) => L(z) < D), E = nn.filter((z) => L(z) < D);
        t.value = [...P, ...E];
      }
      if ($ && B) {
        var {
          hour: V
        } = tn($), {
          hour: b
        } = tn(B), k = mn.filter((z) => L(z) < b || L(z) > V), H = nn.filter((z) => L(z) < b || L(z) > V);
        t.value = [...k, ...H];
      }
      if (w != null && w.hours) {
        var {
          hours: J
        } = w, j = mn.filter((z) => !J(L(z))), R = nn.filter((z) => !J(L(z)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...j, ...R])];
      }
      o.value = t.value.map((z) => nn.findIndex((ae) => z === ae)).filter((z) => z >= 0);
    }, {
      immediate: !0
    }), {
      n: $C,
      classes: TC,
      hours24: nn,
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
uv.render = PC;
const OC = uv;
var {
  n: VC,
  classes: MC
} = ne("time-picker"), BC = (e) => (Oa(""), e = e(), Va(), e), IC = /* @__PURE__ */ BC(() => /* @__PURE__ */ N(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), EC = {
  key: 0
};
function DC(e, n) {
  var r = te("clock");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
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
          re(e.time.hour),
          3
          /* TEXT, CLASS */
        ), IC, N(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), O("span", EC, ":")) : x("v-if", !0), e.useSeconds ? (h(), O(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          re(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (h(), O(
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
        [Q(
          De,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(h(), ge(
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
var dv = ee({
  name: "VarTimePicker",
  components: {
    Clock: OC
  },
  props: kC,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), i = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), p = M(!1), y = M(!1), g = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = Be({
      x: 0,
      y: 0
    }), B = Be({
      x: [],
      y: []
    }), w = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (Y) => {
      T(e["onUpdate:modelValue"], Y), T(e.onChange, Y);
    }, I = (Y) => Y * 57.29577951308232, S = (Y) => {
      l.value = !1, y.value = !1, f.value = Y;
    }, D = (Y) => {
      var {
        disableHour: _
      } = a.value, K = mn.findIndex((Z) => L(Z) === L(g.value.hour)), A = Y === "am" ? mn : nn, G = [...A.slice(K), ...A.slice(0, K)];
      return G.find((Z, ce) => (o.value = ce !== 0, !_.includes(Z)));
    }, P = (Y) => {
      if (!e.readonly) {
        m.value = Y;
        var _ = D(Y);
        if (_) {
          var K = e.useSeconds ? ":" + g.value.second : "", A = ba(_, 2, "0") + ":" + g.value.minute + K;
          C(A);
        }
      }
    }, E = (Y, _) => {
      var K = Y >= B.x[0] && Y <= B.x[1], A = _ >= B.y[0] && _ <= B.y[1];
      return K && A;
    }, V = (Y) => {
      var _ = e.format === "24hr" ? "HH" : "hh", {
        hour: K,
        minute: A,
        second: G
      } = tn(Y);
      return {
        hour: ie().hour(K).format(_),
        minute: ie().minute(A).format("mm"),
        second: ie().second(G).format("ss")
      };
    }, b = (Y) => {
      var _ = Y / 30;
      return _ >= 0 ? _ : _ + 12;
    }, k = () => {
      var {
        width: Y,
        height: _
      } = a.value.getSize(), K = $.x - Y / 2 - 8, A = $.x + Y / 2 + 8, G = $.y - _ / 2 - 8, Z = $.y + _ / 2 + 8;
      return {
        rangeXMin: K,
        rangeXMax: A,
        rangeYMin: G,
        rangeYMax: Z
      };
    }, H = (Y, _, K) => {
      var {
        disableHour: A
      } = a.value;
      i.value = E(Y, _);
      var G = Math.round(K / 30) * 30 + 90, Z = b(G), ce = t.value ? mn[Z] : nn[Z];
      if (A.includes(ce) || (t.value = e.format === "24hr" ? E(Y, _) : !1), t.value === i.value) {
        var fe = t.value || m.value === "pm" ? nn[Z] : mn[Z];
        p.value = A.includes(fe), !p.value && (u.value = G, l.value = !0);
      }
    }, J = (Y) => {
      var {
        disableHour: _
      } = a.value, K = Math.round(Y / 6) * 6 + 90, A = K / 6 >= 0 ? K / 6 : K / 6 + 60, G = {
        time: A,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: _,
        allowedTime: e.allowedTime
      };
      y.value = lv(G), !y.value && (d.value = K, s.value = !0);
    }, j = (Y) => {
      var {
        disableHour: _
      } = a.value, K = Math.round(Y / 6) * 6 + 90, A = K / 6 >= 0 ? K / 6 : K / 6 + 60, G = {
        time: A,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: _,
        allowedTime: e.allowedTime
      };
      sv(G) || (v.value = K);
    }, R = () => {
      var {
        left: Y,
        top: _,
        width: K,
        height: A
      } = n.value.getBoundingClientRect();
      if ($.x = Y + K / 2, $.y = _ + A / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: G,
          rangeXMax: Z,
          rangeYMin: ce,
          rangeYMax: fe
        } = k();
        B.x = [G, Z], B.y = [ce, fe];
      }
    }, z = (Y) => {
      if (Y.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: _,
          clientY: K
        } = Y.touches[0], A = _ - $.x, G = K - $.y, Z = Math.round(I(Math.atan2(G, A)));
        f.value === "hour" ? H(_, K, Z) : f.value === "minute" ? J(Z) : j(Z);
      }
    }, ae = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, oe = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (Y) => {
      if (Y) {
        var {
          hour: _,
          minute: K,
          second: A
        } = tn(Y), G = ie().hour(_).format("hh"), Z = ie().hour(_).format("HH"), ce = ie().minute(K).format("mm"), fe = ie().second(A).format("ss");
        u.value = (G === "12" ? 0 : L(G)) * 30, d.value = L(ce) * 6, v.value = L(fe) * 6, g.value = V(Y), e.format !== "24hr" && (m.value = ba("" + _, 2, "0") === Z && nn.includes(Z) ? "pm" : "am"), t.value = e.format === "24hr" && nn.includes(Z);
      }
    }, {
      immediate: !0
    }), {
      n: VC,
      classes: MC,
      getRad: w,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: z,
      checkPanel: S,
      checkAmpm: P,
      end: ae,
      update: C,
      changePreventUpdate: oe
    };
  }
});
dv.render = DC;
const ga = dv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var gk = ga, NC = {
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
  onBeforeRead: U(),
  onAfterRead: U(),
  onBeforeRemove: U(),
  onRemove: U(),
  onOversize: U(),
  "onUpdate:modelValue": U()
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
  n: AC,
  classes: zC
} = ne("uploader"), LC = 0, RC = ["onClick"], UC = ["onClick"], FC = ["src", "alt"], HC = ["multiple", "accept", "capture", "disabled"], YC = ["src"];
function jC(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = te("var-popup"), o = Ie("ripple");
  return h(), O(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [N(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), O(
        Oe,
        null,
        Ae(e.files, (i) => we((h(), O(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [i.state === "loading", e.n("--loading")])),
            key: i.id,
            onClick: (l) => e.preview(i)
          },
          [N(
            "div",
            {
              class: c(e.n("file-name"))
            },
            re(i.name || i.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), O(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Mn((l) => e.handleRemove(i), ["stop"])
            },
            [Q(
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
            UC
          )) : x("v-if", !0), i.cover ? (h(), O(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: q({
                objectFit: i.fit
              }),
              src: i.cover,
              alt: i.name
            },
            null,
            14,
            FC
          )) : x("v-if", !0), N(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [i.state === "success", e.n("--success")], [i.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          RC
        )), [[o, {
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
            onChange: n[0] || (n[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          HC
        ), W(e.$slots, "default", {}, () => [Q(
          r,
          {
            class: c(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
        /* CLASS */
      )), [[o, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : x("v-if", !0)],
      2
      /* CLASS */
    ), Q(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), Q(
      t,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (i) => e.showPreview = i),
        onClosed: n[3] || (n[3] = (i) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var i, l;
          return [e.currentPreview && e.isHTMLSupportVideo((i = e.currentPreview) == null ? void 0 : i.url) ? (h(), O(
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
              src: (l = e.currentPreview) == null ? void 0 : l.url
            },
            null,
            10,
            YC
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
var vv = ee({
  name: "VarUploader",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarPopup: pn,
    VarFormDetails: We
  },
  props: NC,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = F(() => {
      var {
        maxlength: j,
        modelValue: {
          length: R
        }
      } = e;
      return rn(j) ? R + " / " + j : "";
    }), {
      form: o,
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = F(() => {
      var {
        modelValue: j,
        hideList: R
      } = e;
      return R ? [] : j;
    }), f = (j) => {
      var {
        disabled: R,
        readonly: z,
        previewed: ae
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || R || z || !ae)) {
        var {
          url: oe
        } = j;
        if (Ze(oe) && Yi(oe)) {
          Vn(oe);
          return;
        }
        Ze(oe) && ji(oe) && (a.value = j, r.value = !0);
      }
    }, m = (j) => ({
      id: LC++,
      url: "",
      cover: "",
      name: j.name,
      file: j
    }), p = (j) => {
      var R = j.target, {
        files: z
      } = R;
      return Array.from(z);
    }, y = (j) => new Promise((R) => {
      var z = new FileReader();
      z.onload = () => {
        var ae = z.result;
        j.file.type.startsWith("image") && (j.cover = ae), j.url = ae, R(j);
      }, z.readAsDataURL(j.file);
    }), g = (j) => j.map(y), $ = (j) => {
      var {
        onBeforeRead: R
      } = e;
      return j.map((z) => new Promise((ae) => {
        R || ae({
          valid: !0,
          varFile: z
        });
        var oe = T(R, Be(z));
        oe = Ce(oe) ? oe : [oe], Promise.all(oe).then((Y) => {
          ae({
            valid: !Y.some((_) => !_),
            varFile: z
          });
        });
      }));
    }, B = /* @__PURE__ */ function() {
      var j = es(function* (R) {
        var {
          maxsize: z,
          maxlength: ae,
          modelValue: oe,
          onOversize: Y,
          onAfterRead: _,
          readonly: K,
          disabled: A
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || A || K)) {
          var G = (ze) => ze.filter((_e) => _e.file.size > L(z) ? (T(Y, Be(_e)), !1) : !0), Z = (ze) => {
            var _e = Math.min(ze.length, L(ae) - oe.length);
            return ze.slice(0, _e);
          }, ce = p(R), fe = ce.map(m);
          fe = z != null ? G(fe) : fe, fe = ae != null ? Z(fe) : fe;
          var Ne = yield Promise.all(g(fe)), Ge = yield Promise.all($(Ne)), qe = Ge.filter((ze) => {
            var {
              valid: _e
            } = ze;
            return _e;
          }).map((ze) => {
            var {
              varFile: _e
            } = ze;
            return _e;
          });
          T(e["onUpdate:modelValue"], [...oe, ...qe]), R.target.value = "", qe.forEach((ze) => T(_, Be(ze)));
        }
      });
      return function(z) {
        return j.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var j = es(function* (R) {
        var {
          disabled: z,
          readonly: ae,
          modelValue: oe,
          onBeforeRemove: Y,
          onRemove: _
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || z || ae)) {
          if (Y) {
            var K = T(Y, Be(R));
            if (K = Ce(K) ? K : [K], (yield Promise.all(K)).some((G) => !G))
              return;
          }
          var A = oe.filter((G) => G !== R);
          T(_, Be(R)), V("onRemove"), T(e["onUpdate:modelValue"], A);
        }
      });
      return function(z) {
        return j.apply(this, arguments);
      };
    }(), C = () => e.modelValue.filter((j) => j.state === "success"), I = () => e.modelValue.filter((j) => j.state === "error"), S = () => e.modelValue.filter((j) => j.state === "loading"), D = () => {
      n.value.click();
    }, P = () => {
      a.value = null, r.value = !1, Vn.close();
    }, E = {
      getSuccess: C,
      getError: I,
      getLoading: S
    }, V = (j) => {
      Me(() => {
        var {
          validateTrigger: R,
          rules: z,
          modelValue: ae
        } = e;
        s(R, j, z, ae, E);
      });
    }, b = !1, k = () => u(e.rules, e.modelValue, E), H = () => {
      b = !0, T(e["onUpdate:modelValue"], []), d();
    }, J = {
      validate: k,
      resetValidation: d,
      reset: H
    };
    return T(i, J), le(() => e.modelValue, () => {
      !b && V("onChange"), b = !1;
    }, {
      deep: !0
    }), {
      n: AC,
      classes: zC,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: ji,
      isHTMLSupportImage: Yi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: B,
      handleRemove: w,
      getSuccess: C,
      getError: I,
      getLoading: S,
      validate: k,
      resetValidation: d,
      reset: H,
      chooseFile: D,
      closePreview: P
    };
  }
});
vv.render = jC;
const ya = vv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var yk = ya;
const WC = "2.9.0";
function GC(e) {
  Ca.install && e.use(Ca), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), kr.install && e.use(kr), rr.install && e.use(rr), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), Or.install && e.use(Or), Ke.install && e.use(Ke), Vr.install && e.use(Vr), Mr.install && e.use(Mr), ar.install && e.use(ar), tr.install && e.use(tr), Br.install && e.use(Br), or.install && e.use(or), Ir.install && e.use(Ir), Er.install && e.use(Er), Dr.install && e.use(Dr), fn.install && e.use(fn), Nr.install && e.use(Nr), Ar.install && e.use(Ar), Lr.install && e.use(Lr), Sa.install && e.use(Sa), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Fr.install && e.use(Fr), Rn.install && e.use(Rn), We.install && e.use(We), cr.install && e.use(cr), hn.install && e.use(hn), $e.install && e.use($e), Hr.install && e.use(Hr), Vn.install && e.use(Vn), Yr.install && e.use(Yr), jr.install && e.use(jr), dr.install && e.use(dr), lt.install && e.use(lt), Wr.install && e.use(Wr), Gr.install && e.use(Gr), $n.install && e.use($n), ti.install && e.use(ti), Mo.install && e.use(Mo), Yn.install && e.use(Yn), qr.install && e.use(qr), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Zr.install && e.use(Zr), Ta.install && e.use(Ta), pn.install && e.use(pn), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), Re.install && e.use(Re), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), si.install && e.use(si), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), Hn.install && e.use(Hn), ft.install && e.use(ft), Un.install && e.use(Un), Fn.install && e.use(Fn), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), di.install && e.use(di), ga.install && e.use(ga), sr.install && e.use(sr), ya.install && e.use(ya);
}
const bk = {
  version: WC,
  install: GC,
  ActionSheet: Ca,
  AppBar: wr,
  Avatar: Cr,
  AvatarGroup: Sr,
  BackTop: kr,
  Badge: rr,
  BottomNavigation: $r,
  BottomNavigationItem: Tr,
  Breadcrumb: Pr,
  Breadcrumbs: Or,
  Button: Ke,
  ButtonGroup: Vr,
  Card: Mr,
  Cell: ar,
  Checkbox: tr,
  CheckboxGroup: Br,
  Chip: or,
  Col: Ir,
  Collapse: Er,
  CollapseItem: Dr,
  Context: fn,
  Countdown: Nr,
  Counter: Ar,
  DatePicker: Lr,
  Dialog: Sa,
  Divider: Rr,
  Ellipsis: Ur,
  Fab: Fr,
  Form: Rn,
  FormDetails: We,
  Hover: cr,
  HoverOverlay: hn,
  Icon: $e,
  Image: Hr,
  ImagePreview: Vn,
  IndexAnchor: Yr,
  IndexBar: jr,
  Input: dr,
  Lazy: lt,
  Link: Wr,
  List: Gr,
  Loading: $n,
  LoadingBar: ti,
  Locale: Mo,
  Menu: Yn,
  Option: qr,
  Overlay: Xr,
  Pagination: Kr,
  Paper: Zr,
  Picker: Ta,
  Popup: pn,
  Progress: Jr,
  PullRefresh: Qr,
  Radio: _r,
  RadioGroup: xr,
  Rate: ea,
  Result: na,
  Ripple: Re,
  Row: ra,
  Select: aa,
  Skeleton: ta,
  Slider: oa,
  Snackbar: si,
  Space: la,
  Step: sa,
  Steps: ua,
  Sticky: Hn,
  StyleProvider: ft,
  Swipe: Un,
  SwipeItem: Fn,
  Switch: va,
  Tab: fa,
  TabItem: ca,
  Table: ma,
  Tabs: pa,
  TabsItems: ha,
  Themes: di,
  TimePicker: ga,
  Tooltip: sr,
  Uploader: ya
};
export {
  Ca as ActionSheet,
  wr as AppBar,
  Cr as Avatar,
  Sr as AvatarGroup,
  kr as BackTop,
  rr as Badge,
  $r as BottomNavigation,
  Tr as BottomNavigationItem,
  Pr as Breadcrumb,
  Or as Breadcrumbs,
  Ke as Button,
  Vr as ButtonGroup,
  Mr as Card,
  ar as Cell,
  tr as Checkbox,
  Br as CheckboxGroup,
  or as Chip,
  Ir as Col,
  Er as Collapse,
  Dr as CollapseItem,
  fn as Context,
  Nr as Countdown,
  Ar as Counter,
  Lr as DatePicker,
  Sa as Dialog,
  Rr as Divider,
  Ur as Ellipsis,
  Fr as Fab,
  Rn as Form,
  We as FormDetails,
  cr as Hover,
  hn as HoverOverlay,
  $e as Icon,
  Hr as Image,
  Vn as ImagePreview,
  Yr as IndexAnchor,
  jr as IndexBar,
  dr as Input,
  lt as Lazy,
  Wr as Link,
  Gr as List,
  $n as Loading,
  ti as LoadingBar,
  Mo as Locale,
  Yn as Menu,
  qr as Option,
  Xr as Overlay,
  Eo as PIXEL,
  Kr as Pagination,
  Zr as Paper,
  Ta as Picker,
  pn as Popup,
  Jr as Progress,
  Qr as PullRefresh,
  _r as Radio,
  xr as RadioGroup,
  ea as Rate,
  na as Result,
  Re as Ripple,
  ra as Row,
  Ai as SNACKBAR_TYPE,
  aa as Select,
  ta as Skeleton,
  oa as Slider,
  si as Snackbar,
  la as Space,
  sa as Step,
  ua as Steps,
  Hn as Sticky,
  ft as StyleProvider,
  Un as Swipe,
  Fn as SwipeItem,
  va as Switch,
  fa as Tab,
  ca as TabItem,
  ma as Table,
  pa as Tabs,
  ha as TabsItems,
  di as Themes,
  ga as TimePicker,
  sr as Tooltip,
  ya as Uploader,
  _C as _ActionSheetComponent,
  xC as _AppBarComponent,
  nS as _AvatarComponent,
  rS as _AvatarGroupComponent,
  lS as _BackTopComponent,
  sS as _BadgeComponent,
  uS as _BottomNavigationComponent,
  dS as _BottomNavigationItemComponent,
  vS as _BreadcrumbComponent,
  fS as _BreadcrumbsComponent,
  iS as _ButtonComponent,
  cS as _ButtonGroupComponent,
  mS as _CardComponent,
  pS as _CellComponent,
  gS as _CheckboxComponent,
  yS as _CheckboxGroupComponent,
  bS as _ChipComponent,
  wS as _ColComponent,
  CS as _CollapseComponent,
  SS as _CollapseItemComponent,
  XC as _ContextComponent,
  kS as _CountdownComponent,
  $S as _CounterComponent,
  TS as _DatePickerComponent,
  PS as _DialogComponent,
  OS as _DividerComponent,
  MS as _EllipsisComponent,
  BS as _FabComponent,
  IS as _FormComponent,
  hS as _FormDetailsComponent,
  oS as _HoverComponent,
  tS as _HoverOverlayComponent,
  JC as _IconComponent,
  ES as _ImageComponent,
  AS as _ImagePreviewComponent,
  LS as _IndexAnchorComponent,
  RS as _IndexBarComponent,
  US as _InputComponent,
  eS as _LazyComponent,
  FS as _LinkComponent,
  HS as _ListComponent,
  YS as _LoadingBarComponent,
  aS as _LoadingComponent,
  QC as _LocaleComponent,
  jS as _MenuComponent,
  WS as _OptionComponent,
  GS as _OverlayComponent,
  qS as _PaginationComponent,
  XS as _PaperComponent,
  KS as _PickerComponent,
  ZC as _PopupComponent,
  ZS as _ProgressComponent,
  JS as _PullRefreshComponent,
  QS as _RadioComponent,
  _S as _RadioGroupComponent,
  xS as _RateComponent,
  ek as _ResultComponent,
  KC as _RippleComponent,
  nk as _RowComponent,
  rk as _SelectComponent,
  ak as _SkeletonComponent,
  tk as _SliderComponent,
  ok as _SnackbarComponent,
  ik as _SpaceComponent,
  lk as _StepComponent,
  sk as _StepsComponent,
  zS as _StickyComponent,
  uk as _StyleProviderComponent,
  DS as _SwipeComponent,
  NS as _SwipeItemComponent,
  dk as _SwitchComponent,
  vk as _TabComponent,
  fk as _TabItemComponent,
  ck as _TableComponent,
  mk as _TabsComponent,
  pk as _TabsItemsComponent,
  hk as _ThemesComponent,
  gk as _TimePickerComponent,
  VS as _TooltipComponent,
  yk as _UploaderComponent,
  ef as actionSheetProps,
  yi as add,
  vf as appBarProps,
  zf as avatarGroupProps,
  Bf as avatarProps,
  cc as backTopProps,
  bc as badgeProps,
  Mc as bottomNavigationItemProps,
  kc as bottomNavigationProps,
  Ac as breadcrumbProps,
  Hc as breadcrumbsProps,
  ic as buttonProps,
  _c as cardProps,
  tm as cellProps,
  Cm as checkboxGroupProps,
  cm as checkboxProps,
  Om as chipProps,
  Dm as colProps,
  jm as collapseItemProps,
  Um as collapseProps,
  Xm as countdownProps,
  jp as counterProps,
  dh as datePickerProps,
  bk as default,
  Fe as defaultLazyOptions,
  Oh as dialogProps,
  Ah as dividerProps,
  Cs as enUS,
  sm as formDetailsProps,
  sy as formProps,
  bs as iconProps,
  Ps as imageCache,
  By as imagePreviewProps,
  cy as imageProps,
  Hy as indexAnchorProps,
  Gy as indexBarProps,
  Qy as inputProps,
  GC as install,
  ob as linkProps,
  ub as listProps,
  mb as loadingBarProps,
  _n as loadingProps,
  Tb as menuProps,
  ks as merge,
  Ib as optionProps,
  Ab as overlayProps,
  Ye as pack,
  Ss as packs,
  Lb as paginationProps,
  Yb as paperProps,
  qb as pickerProps,
  pt as popupProps,
  e0 as progressProps,
  l0 as pullRefreshProps,
  y0 as radioGroupProps,
  v0 as radioProps,
  S0 as rateProps,
  P0 as resultProps,
  f1 as rowProps,
  g1 as selectProps,
  C1 as skeletonProps,
  P1 as sliderProps,
  Yd as snackbarProps,
  J1 as spaceProps,
  x1 as stepProps,
  lw as stepsProps,
  Dt as stickyProps,
  dw as styleProviderProps,
  nd as swipeProps,
  cw as switchProps,
  $w as tabItemProps,
  gw as tabProps,
  Vw as tableProps,
  zw as tabsItemsProps,
  Ew as tabsProps,
  kC as timePickerProps,
  Xg as tooltipProps,
  NC as uploaderProps,
  bi as use,
  Ha as useHoverOverlay,
  gi as useLocale,
  WC as version,
  hi as zhCN
};
