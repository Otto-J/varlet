import { reactive as Ee, onMounted as Xt, nextTick as Be, onActivated as Za, isRef as mv, watch as le, onBeforeUnmount as Kt, onDeactivated as br, unref as Ha, inject as pv, getCurrentInstance as Ja, computed as F, provide as hv, isVNode as pt, Comment as gv, Fragment as Oe, ref as M, createApp as yv, h as ns, onBeforeMount as bv, onUnmounted as Qa, defineComponent as ne, createVNode as J, Teleport as Ma, Transition as Ne, withDirectives as we, vShow as pr, mergeProps as Ve, openBlock as h, createBlock as ge, resolveDynamicComponent as _a, normalizeClass as c, normalizeStyle as G, resolveComponent as oe, resolveDirective as Me, withCtx as fe, createElementVNode as z, renderSlot as j, toDisplayString as ae, createElementBlock as O, renderList as ze, createCommentVNode as ee, onUpdated as Zt, createTextVNode as be, pushScopeId as Ba, popScopeId as Ia, withModifiers as Mn, normalizeProps as vi, guardReactiveProps as rs, vModelText as wv, toRefs as Cv, withKeys as Ui, toRaw as Fi, TransitionGroup as Sv } from "vue";
var as = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, XC = Ee(as);
const fn = Ee(as), Ke = (e) => typeof e == "string", Co = (e) => typeof e == "boolean", nn = (e) => typeof e == "number", fi = (e) => Object.prototype.toString.call(e) === "[object Object]", kv = (e) => typeof e == "object" && e !== null, ci = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), $v = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, zn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ke(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Co(e) ? Number(e) : e, zt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, mi = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, ht = () => typeof window < "u", Hi = (e) => [...new Set(e)], ts = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Tv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Pv = (e, n, r = "start") => {
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
      this.has(r) && zt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, So = (e) => e, Wi = (e) => Math.pow(e, 3), os = (e) => e < 0.5 ? Wi(e * 2) / 2 : 1 - Wi((1 - e) * 2) / 2, Jt = (e, n) => e ?? n, is = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, Sa = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Gi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Gi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Gi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
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
function Qt(e) {
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
      innerHeight: l
    } = window, i = a <= o && t >= 0, s = n <= l && r >= 0;
    return i && s;
  }), ko.apply(this, arguments);
}
function mo(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ea(e) {
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
    r = Ea(r), n.push(r);
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
var ss = (e) => Ke(e) && e.endsWith("rem"), Ev = (e) => Ke(e) && e.endsWith("px") || nn(e), Dv = (e) => Ke(e) && e.endsWith("%"), us = (e) => Ke(e) && e.endsWith("vw"), ds = (e) => Ke(e) && e.endsWith("vh"), Nv = (e) => Ke(e) && e.startsWith("calc("), Av = (e) => Ke(e) && e.startsWith("var("), Le = (e) => {
  if (nn(e))
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
  return Ke(e) ? L(e) : 0;
}, me = (e) => {
  if (e != null)
    return Dv(e) || us(e) || ds(e) || ss(e) || Nv(e) || Av(e) ? e : Le(e) + "px";
}, xe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = me(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Gn(e) {
  var n = is();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Xi(e) {
  var n = is();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Ya(e) {
  Gn(() => {
    Gn(e);
  });
}
function Bn() {
  return new Promise((e) => {
    Gn(() => {
      Gn(e);
    });
  });
}
function zv() {
  return new Promise((e) => {
    Gn(e);
  });
}
function st(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = Qt(e), s = pi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), Gn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Gn(d);
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
function Lt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ln(e) {
  let n = !1;
  Xt(() => {
    e(), Be(() => {
      n = !0;
    });
  }), Za(() => {
    n && e();
  });
}
function ka(e, n, r, a = {}) {
  if (!ht())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (f) => {
    if (l || i)
      return;
    const m = Ha(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, u = (f) => {
    if (!l || i)
      return;
    const m = Ha(f);
    m && (m.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let d;
  mv(e) && (d = le(() => e.value, (f, m) => {
    u(m), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), i = !0;
  };
  return ln(() => {
    s(e);
  }), Kt(() => {
    u(e);
  }), br(() => {
    u(e);
  }), v;
}
function fs(e, n, r) {
  if (!ht())
    return;
  ka(document, n, (t) => {
    const o = Ha(e);
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
  const n = Ja();
  return e in n.provides;
}
function sn(e) {
  if (!Uv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = pv(e), { childInstances: r, collect: a, clear: t } = n, o = Rv(n, ["childInstances", "collect", "clear"]), l = Ja();
  return {
    index: F(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Xt(() => {
        Be().then(() => {
          a(l, u);
        });
      }), Kt(() => {
        Be().then(() => {
          t(l, u);
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
      pt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function un(e) {
  const n = Ja(), r = Ee([]), a = [], t = F(() => r.length), o = () => {
    const u = Fv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    zt(r, u), zt(a, d);
  };
  return {
    length: t,
    childProviders: a,
    bindChildren: (u) => {
      hv(e, Object.assign({
        childInstances: r,
        collect: l,
        clear: i
      }, u));
    }
  };
}
function Ki(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ki(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ki(o, a, t, l, i, "throw", s);
      }
      l(void 0);
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
function xa(e, n, r) {
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
    var t = Zi(function* (o, l, i) {
      if (!Ce(o) || !o.length)
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
    var t = Zi(function* (o, l, i, s, u) {
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
function Yv(e) {
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
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
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
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Rt.apply(this, arguments);
}
var {
  n: ms
} = re("ripple"), Ji = 250;
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
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - l * 2) / 2, v = (o - l * 2) / 2, f = s - l, m = u - l;
  return {
    x: f,
    y: m,
    centerX: d,
    centerY: v,
    size: i
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
        centerY: l,
        size: i
      } = Wv(this, e), s = document.createElement("div");
      s.classList.add(ms()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), jv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
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
  e._ripple = Rt({
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
  var r, a, t, o, l, i, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : fn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((l = e._ripple) == null ? void 0 : l.touchmoveForbid) || u.color !== ((i = e._ripple) == null ? void 0 : i.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = Rt({
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
var gt = {
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
function St(e) {
  fn.locks[e] = 1, ys();
}
function kt(e) {
  delete fn.locks[e], ys();
}
function xt(e, n) {
  var {
    uid: r
  } = Ja();
  n && le(n, (a) => {
    a === !1 ? kt(r) : a === !0 && e() === !0 && St(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? St(r) : kt(r));
  }), bv(() => {
    n && n() === !1 || e() === !0 && St(r);
  }), Qa(() => {
    n && n() === !1 || e() === !0 && kt(r);
  }), Za(() => {
    n && n() === !1 || e() === !0 && St(r);
  }), br(() => {
    n && n() === !1 || e() === !0 && kt(r);
  });
}
function yt(e, n) {
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
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
var {
  n: An,
  classes: po
} = re("popup");
const hn = ne({
  name: "VarPopup",
  inheritAttrs: !1,
  props: gt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = yt(() => e.show, 3), {
      disabled: o
    } = _t(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      T(v), d && T(e["onUpdate:show"], !1);
    };
    xt(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      T(d ? e.onOpen : e.onClose);
    }), Yv(() => T(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return J("div", {
        class: po(An("overlay"), d),
        style: Po({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => J("div", Ve({
      class: po(An("content"), An("--" + e.position), [e.defaultStyle, An("--content-background-color")], [e.defaultStyle, An("$-elevation--3")]),
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
        name: An("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(J("div", {
          class: po(An("$--box"), An()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), J(Ne, {
          name: p || An("$-pop-" + g)
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
        return J(Ma, {
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
hn.install = function(e) {
  e.component(hn.name, hn);
};
var ZC = hn, bs = {
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
function Qi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Qi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Qi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Qv,
  classes: _v
} = re("icon");
function xv(e, n) {
  return h(), ge(
    _a(e.isURL(e.name) ? "img" : "i"),
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
      var t = Jv(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Be(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
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
      toSizeUnit: me
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
  onSelect: R(),
  "onUpdate:show": R()
}, Je(gt, [
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
    e[o] = Vo({}, e[o], l), a(o);
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
} = re("action-sheet"), af = ["onClick"];
function tf(e, n) {
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
              onClick: (l) => e.handleSelect(o)
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
  props: ef,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        T(l, t), o && T(e["onUpdate:show"], !1);
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
      dt: Jt,
      handleSelect: r
    };
  }
});
$s.render = tf;
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
function of(e) {
  return e === void 0 && (e = {}), Bo({}, wi, e);
}
function $a(e) {
  return ht() ? new Promise((n) => {
    $a.close();
    var r = Ee(of(e));
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = xa(tr, r, {
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
function lf(e) {
  wi = e;
}
function sf() {
  wi = {};
}
function uf() {
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
  setDefaultOptions: lf,
  resetDefaultOptions: sf,
  close: uf
});
var _C = tr;
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
} = re("app-bar");
function mf(e, n) {
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
  props: vf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = F(() => {
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
    return ln(o), Zt(o), {
      n: ff,
      classes: cf,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ts.render = mf;
const kr = Ts;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var xC = kr;
function _i(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function eo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        _i(o, a, t, l, i, "next", s);
      }
      function i(s) {
        _i(o, a, t, l, i, "throw", s);
      }
      l(void 0);
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
var pf = "background-image", hf = "lazy-loading", gf = "lazy-error", xi = "lazy-attempt", yf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Eo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ja = [], Ut = [], Ps = Ov(100), Fe = {
  loading: Eo,
  error: Eo,
  attempt: 3,
  throttleWait: 300,
  events: yf
}, Ci = mi(bt, Fe.throttleWait);
function no(e, n) {
  e._lazy.arg === pf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function bf(e) {
  e._lazy.loading && no(e, e._lazy.loading), bt();
}
function wf(e) {
  e._lazy.error && no(e, e._lazy.error), e._lazy.state = "error", ki(e), bt();
}
function Os(e, n) {
  no(e, n), e._lazy.state = "success", ki(e), bt();
}
function Cf(e) {
  var n;
  Ut.includes(e) || (Ut.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ci, {
      passive: !0
    });
  }));
}
function Sf() {
  Ut.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ci);
    });
  }), Ut.length = 0;
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
  }, t), no(e, Eo), T(Fe.filter, e._lazy);
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
  return Do = eo(function* (e) {
    (yield Bv(e)) && Vs(e);
  }), Do.apply(this, arguments);
}
function bt() {
  ja.forEach((e) => Si(e));
}
function Tf(e) {
  return No.apply(this, arguments);
}
function No() {
  return No = eo(function* (e) {
    !ja.includes(e) && ja.push(e), Iv(e).forEach(Cf), yield Si(e);
  }), No.apply(this, arguments);
}
function ki(e) {
  zt(ja, e), ja.length === 0 && Sf();
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
  return Ao = eo(function* (e, n) {
    kf(e, n), yield Tf(e);
  }), Ao.apply(this, arguments);
}
function Of(e, n) {
  return zo.apply(this, arguments);
}
function zo() {
  return zo = eo(function* (e, n) {
    if (!Pf(e, n)) {
      ja.includes(e) && (yield Si(e));
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
    filter: l
  } = e;
  Fe.events = n ?? Fe.events, Fe.loading = r ?? Fe.loading, Fe.error = a ?? Fe.error, Fe.attempt = t ?? Fe.attempt, Fe.throttleWait = o ?? Fe.throttleWait, Fe.filter = l;
}
var Bs = {
  mounted: Ms,
  unmounted: ki,
  updated: Of,
  install(e, n) {
    Vf(n), Ci = mi(bt, Fe.throttleWait), e.directive("lazy", this);
  }
}, eS = Bs;
const ut = Bs;
function Mf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Is = (e) => ["mini", "small", "normal", "large"].includes(e);
function Es(e) {
  return Is(e) || nn(e) || Ke(e);
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
  onClick: R(),
  onLoad: R(),
  onError: R()
}, {
  n: If,
  classes: Ef
} = re("avatar"), Df = ["src", "lazy-loading", "lazy-error"], Nf = ["src"];
function Af(e, n) {
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
        Df
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
    Lazy: ut
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
    }, l = (s) => {
      T(e.onError, s);
    }, i = (s) => {
      T(e.onClick, s);
    };
    return ln(t), Zt(t), {
      internalSizeValidator: Is,
      sizeValidator: Es,
      toSizeUnit: me,
      n: If,
      classes: Ef,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Ds.render = Af;
const $r = Ds;
$r.install = function(e) {
  e.component($r.name, $r);
};
var nS = $r, zf = {
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
} = re("avatar-group");
function Uf(e, n) {
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
  props: zf,
  setup(e) {
    var n = F(() => e.offset == null ? {} : {
      "--avatar-group-offset": me(e.offset)
    });
    return {
      n: Lf,
      classes: Rf,
      toSizeUnit: me,
      rootStyles: n
    };
  }
});
Ns.render = Uf;
const Tr = Ns;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var rS = Tr;
function Ff(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Hf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var nr = {
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
} = re("loading"), Wf = (e) => (Ba(""), e = e(), Ia(), e), Gf = /* @__PURE__ */ Wf(() => /* @__PURE__ */ z(
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
          qf,
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
      n: Yf,
      classes: jf,
      multiplySizeUnit: xe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
As.render = Xf;
const Tn = As;
Tn.install = function(e) {
  e.component(Tn.name, Tn);
};
var aS = Tn, Kf = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Zf,
  classes: Jf
} = re("hover-overlay");
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
var zs = ne({
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
var tS = tn;
function Ls(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function _f(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
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
const In = js;
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
  loadingType: Je(nr, "type"),
  loadingSize: Je(nr, "size"),
  loadingColor: Lo({}, Je(nr, "color"), {
    default: "currentColor"
  }),
  onClick: R(),
  onTouchstart: R()
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
} = re("button"), vc = ["type", "disabled"];
function fc(e, n) {
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
    vc
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
    Hover: In
  },
  props: ic,
  setup(e) {
    var n = M(!1), {
      buttonGroup: r
    } = sc(), {
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
    }), l = (u) => {
      e.autoLoading && (n.value = !0, u = Ce(u) ? u : [u], Promise.all(u).then(() => {
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
      !f || d || v || n.value || l(T(f, u));
    }, s = (u) => {
      var {
        loading: d,
        disabled: v,
        onTouchstart: f
      } = e;
      !f || d || v || n.value || l(T(f, u));
    };
    return {
      n: uc,
      classes: dc,
      pending: n,
      states: o,
      hovering: a,
      handleHovering: t,
      handleClick: i,
      handleTouchstart: s
    };
  }
});
qs.render = fc;
const Xe = qs;
Xe.install = function(e) {
  e.component(Xe.name, Xe);
};
var iS = Xe, cc = {
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
  n: mc,
  classes: pc
} = re("back-top");
function hc(e, n) {
  var r = oe("var-icon"), a = oe("var-button");
  return h(), ge(
    Ma,
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
        onClick: n[0] || (n[0] = Mn(function() {
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
  props: cc,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (d) => {
      T(e.onClick, d);
      var v = pi(t);
      st(t, {
        left: v,
        duration: e.duration,
        animation: os
      });
    }, l = mi(() => {
      n.value = Qt(t) >= Le(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ls(e.target, "BackTop") : Ea(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Xt(() => {
      i(), s(), a.value = !1;
    }), Za(s), Kt(u), br(u), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: me,
      n: mc,
      classes: pc,
      handleClick: o
    };
  }
});
Xs.render = hc;
const Pr = Xs;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var lS = Pr;
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
} = re("badge");
function Sc(e, n) {
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
const or = Ks;
or.install = function(e) {
  e.component(or.name, or);
};
var sS = or, kc = {
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
} = re("bottom-navigation"), {
  n: ro
} = re("bottom-navigation-item"), el = ro("--right-half-space"), nl = ro("--left-half-space"), rl = ro("--right-space"), Oc = {
  type: "primary"
};
function Vc(e, n) {
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
  props: kc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = F(() => e.active), o = F(() => e.activeColor), l = F(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = $c(), v = () => {
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
      t.value !== $ && (e.onBeforeChange ? b($) : k($));
    }, b = ($) => {
      var I = T(e.onBeforeChange, $);
      I = Ce(I) ? I : [I], Promise.all(I).then((V) => {
        V.some((y) => !y) || k($);
      });
    }, k = ($) => {
      T(e["onUpdate:active"], $), T(e.onChange, $);
    }, B = () => {
      var $ = D();
      $.forEach((I) => {
        I.classList.remove(el, nl, rl);
      });
    }, w = ($) => {
      var I = D(), V = I.length, y = $ % 2 === 0;
      I.forEach((S, H) => {
        P(y, S, H, V);
      });
    }, P = ($, I, V, y) => {
      var S = V === y - 1;
      if (!$ && S) {
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
      inactiveColor: l,
      onToggle: g
    };
    return d(E), le(() => s.value, v), le(() => e.fabProps, ($) => {
      i.value = Ro({}, Oc, $);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && w(s.value);
    }), Zt(() => {
      B(), r.fab && w(s.value);
    }), {
      n: Tc,
      classes: Pc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: C,
      fabProps: i
    };
  }
});
Js.render = Vc;
const Or = Js;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var uS = Or, Mc = {
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
} = re("bottom-navigation-item"), Dc = {
  type: "danger",
  dot: !0
};
function Nc(e, n) {
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
  props: Mc,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Bc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var m, p = (m = n.value) != null ? m : t.value;
      T(e.onClick, p), T(o.onToggle, p);
    };
    return l(d), le(() => r.value, (m) => {
      a.value = m === !0 ? Dc : r.value;
    }, {
      immediate: !0
    }), {
      n: Ic,
      classes: Ec,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Qs.render = Nc;
const Vr = Qs;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var dS = Vr, Ac = {
  separator: {
    type: String
  },
  onClick: R()
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
} = re("breadcrumb");
function Fc(e, n) {
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
  props: Ac,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Lc(), t = F(() => n.value === r.length.value - 1), o = F(() => r.separator.value), l = (i) => {
      t.value || T(e.onClick, i);
    };
    return a(null), {
      n: Rc,
      classes: Uc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
xs.render = Fc;
const Mr = xs;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var vS = Mr, Hc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Yc
} = re("breadcrumbs");
function jc(e, n) {
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
const Br = eu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var fS = Br;
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
} = re("button-group");
function Jc(e, n) {
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
const Ir = nu;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var cS = Ir;
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
  onClick: R(),
  "onUpdate:floating": R()
};
function al(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function tl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        al(o, a, t, l, i, "next", s);
      }
      function i(s) {
        al(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: xc,
  classes: em
} = re("card"), nm = 500, rm = ["src", "alt"];
function am(e, n) {
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
        rm
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
            onClick: Mn(e.close, ["stop"])
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
  props: _c,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = F(() => e.layout === "row"), p = M(!1), g = M(!1), {
      zIndex: b
    } = yt(() => e.floating, 1);
    xt(() => e.floating, () => !m.value);
    var k = "auto", B = "auto", w = null, P = M(null), D = /* @__PURE__ */ function() {
      var I = tl(function* () {
        clearTimeout(P.value), clearTimeout(w), P.value = null, P.value = setTimeout(/* @__PURE__ */ tl(function* () {
          var {
            width: V,
            height: y,
            left: S,
            top: H
          } = n.value.getBoundingClientRect();
          a.value = me(V), t.value = me(y), o.value = a.value, l.value = t.value, i.value = me(H), s.value = me(S), u.value = "fixed", k = i.value, B = s.value, p.value = !0, yield Bn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", g.value = !0;
        }), e.ripple ? nm : 0);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), C = () => {
      clearTimeout(w), clearTimeout(P.value), P.value = null, o.value = a.value, l.value = t.value, i.value = k, s.value = B, v.value = "0px", f.value = "0", p.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", k = "auto", B = "auto", d.value = "hidden", u.value = void 0, g.value = !1;
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
      n: xc,
      classes: em,
      toSizeUnit: me,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: P,
      floaterWidth: o,
      floaterHeight: l,
      floaterTop: i,
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
ru.render = am;
const Er = ru;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var mS = Er, tm = {
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
  n: om,
  classes: im
} = re("cell");
function lm(e, n) {
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
  props: tm,
  setup(e) {
    var n = F(() => e.borderOffset == null ? {} : {
      "--cell-border-left": me(e.borderOffset),
      "--cell-border-right": me(e.borderOffset)
    }), r = (a) => {
      T(e.onClick, a);
    };
    return {
      n: om,
      classes: im,
      toSizeUnit: me,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
au.render = lm;
const ir = au;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var pS = ir, sm = {
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
} = re("form-details"), dm = {
  key: 0
}, vm = {
  key: 0
};
function fm(e, n) {
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
                dm,
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
                vm,
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
  onClick: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
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
  } = sn(iu), a = Ja(), t = r ? (o) => {
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
} = re("checkbox");
function bm(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("hover"), l = Me("ripple");
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
      )), [[o, e.handleHovering, "desktop"], [l, {
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
    Hover: In
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  props: cm,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = pm(), {
      hovering: i,
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
    }, k = ($) => {
      var {
        disabled: I,
        readonly: V,
        checkedValue: y,
        uncheckedValue: S,
        onClick: H
      } = e;
      if (!(u != null && u.disabled.value || I) && (T(H, $), !(u != null && u.readonly.value || V))) {
        t.value = !0;
        var Q = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && Q || b(r.value ? S : y);
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
    return T(l, E), T(d, E), {
      withAnimation: t,
      checked: r,
      errorMessage: v,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: u == null ? void 0 : u.disabled,
      formReadonly: u == null ? void 0 : u.readonly,
      hovering: i,
      handleHovering: s,
      n: gm,
      classes: ym,
      handleClick: k,
      toggle: D,
      reset: P,
      validate: C,
      resetValidation: p
    };
  }
});
lu.render = bm;
const lr = lu;
lr.install = function(e) {
  e.component(lr.name, lr);
};
var gS = lr;
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: Sm,
  classes: km
} = re("checkbox-group");
function $m(e, n) {
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
  props: Cm,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = mm(), {
      bindForm: l
    } = wn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = F(() => i.value), f = (E) => {
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
    }), k = () => {
      t.forEach((E) => E.resetWithAnimation());
    }, B = () => {
      var E = t.map((I) => {
        var {
          checkedValue: V
        } = I;
        return V.value;
      }), $ = Hi(E);
      return k(), T(e["onUpdate:modelValue"], $), $;
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
      return k(), T(e["onUpdate:modelValue"], $), $;
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
    return o(C), T(l, C), {
      errorMessage: i,
      n: Sm,
      classes: km,
      checkAll: B,
      inverseAll: w,
      reset: P,
      validate: D,
      resetValidation: d
    };
  }
});
su.render = $m;
const Dr = su;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var yS = Dr;
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
  onClose: R()
}, {
  n: Xn,
  classes: Vm
} = re("chip");
function Mm(e, n) {
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
  props: Om,
  setup(e) {
    var n = F(() => {
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
    }), r = F(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = Xn(o ? "$--flex" : "$--inline-flex"), d = i ? Xn("plain") + " " + Xn("plain-" + l) : Xn("--" + l), v = s ? Xn("--round") : null;
      return [Xn("--" + t), u, d, v];
    }), a = (t) => {
      T(e.onClose, t);
    };
    return {
      n: Xn,
      classes: Vm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
uu.render = Mm;
const sr = uu;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var bS = sr;
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
  onClick: R()
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
  n: $t,
  classes: zm
} = re("col");
function Lm(e, n) {
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
  props: Dm,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = F(() => L(e.span)), a = F(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Am(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (fi(d)) {
        var {
          offset: f,
          span: m
        } = d;
        Number(m) >= 0 && v.push($t("--span-" + u + "-" + m)), f && v.push($t("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push($t("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      T(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), T(o, l), {
      n: $t,
      classes: zm,
      padding: n,
      toNumber: L,
      toSizeUnit: me,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Lt
    };
  }
});
vu.render = Lm;
const Nr = vu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var wS = Nr, fu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: Fm
} = re("collapse");
function Hm(e, n) {
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
  props: Um,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Rm(), t = F(() => e.modelValue), o = F(() => e.offset), l = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, i = (m, p) => l() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((g) => g !== m) : null, s = (m, p) => {
      var g = i(m, p);
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
      if (l()) {
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
      n: Fm
    };
  }
});
cu.render = Hm;
const Ar = cu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var CS = Ar;
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
} = re("collapse-item");
function qm(e, n) {
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
  props: jm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Ym(), t = !0, o = M(null), l = M(!1), i = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (w, P) => {
      s.value === void 0 || w && Ce(s.value) || P === i.value || (i.value = P, m(!0));
    }, m = (w) => {
      e.disabled || w || d(e.name || n.value, !i.value);
    }, p = () => {
      o.value && (o.value.style.height = "", l.value = !0, Be(() => {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = 0 + "px", Ya(() => {
          o.value.style.height = w + "px", t && Ya(() => {
            t && k();
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
        o.value.style.height = w + "px", Ya(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, k = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, B = {
      index: n,
      name: v,
      init: f
    };
    return a(B), le(i, (w) => {
      w ? p() : b();
    }), {
      n: Wm,
      start: g,
      classes: Gm,
      show: l,
      isShow: i,
      offset: u,
      toggle: m,
      contentEl: o,
      transitionend: k
    };
  }
});
mu.render = qm;
const zr = mu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var SS = zr, Xm = {
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
  n: Km
} = re("countdown"), Fo = 1e3, Ho = 60 * Fo, Yo = 60 * Ho, ol = 24 * Yo;
function Zm(e, n) {
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
  props: Xm,
  setup(e) {
    var n = M(""), r = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (p, g) => {
      var b = Object.values(g), k = ["DD", "HH", "mm", "ss"], B = [24, 60, 60, 1e3];
      if (k.forEach((P, D) => {
        p.includes(P) ? p = p.replace(P, Sa("" + b[D], 2, "0")) : b[D + 1] += b[D] * B[D];
      }), p.includes("S")) {
        var w = Sa("" + b[b.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", w) : p.includes("SS") ? p = p.replace("SS", w.slice(0, 2)) : p = p.replace("S", w.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var g = Math.floor(p / ol), b = Math.floor(p % ol / Yo), k = Math.floor(p % Yo / Ho), B = Math.floor(p % Ho / Fo), w = Math.floor(p % Fo), P = {
        days: g,
        hours: b,
        minutes: k,
        seconds: B,
        milliseconds: w
      };
      r.value = P, T(e.onChange, r.value), n.value = s(e.format, P);
    }, d = () => {
      var {
        time: p,
        onEnd: g
      } = e, b = performance.now();
      if (a || (a = b + L(p)), l = a - b, l < 0 && (l = 0), u(l), l === 0) {
        T(g);
        return;
      }
      t && (o = Gn(d));
    }, v = function(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (l || L(e.time)), d());
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
      i != null && (t = i, t === !0 && v(!0));
    }), br(() => {
      i = t, f();
    }), Qa(f), {
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
const Lr = pu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var kS = Lr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Aa = 9e15, wr = 1e9, jo = "0123456789abcdef", Ft = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ht = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Wo = {
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
  minE: -Aa,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Aa,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, hu, Ln, ce = !0, ao = "[DecimalError] ", gr = ao + "Invalid argument: ", gu = ao + "Precision limit exceeded", yu = ao + "crypto unavailable", bu = "[object Decimal]", Qe = Math.floor, He = Math.pow, Jm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Qm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, _m = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, wu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Pn = 1e7, ve = 7, xm = 9007199254740991, ep = Ft.length - 1, Go = Ht.length - 1, q = { toStringTag: bu };
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = np(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(Ln == 2 || Ln == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ce = !1, o = d.s * He(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = qe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = He(r, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Pe(u.plus(d).times(i), u.plus(s), l + 2, 1), qe(i.d).slice(0, l) === (r = qe(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
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
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / oo(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Wa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ue(o, l.precision = r, l.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Wa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / oo(5, e)), t = Wa(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
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
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Go)
      return l = $n(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Go)
      return l = $n(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / ve + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ce = !1, n = Math.ceil(i / ve), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), ce = !0, ue(l, d.precision = v, d.rounding = f, !0);
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
  if (ce = !1, i = v + m, l = rr(u, i), a = n ? Yt(d, i + 10) : rr(e, i), s = Pe(l, a, i, 1), dt(s.d, t = v, f))
    do
      if (i += 10, l = rr(u, i), a = n ? Yt(d, i + 10) : rr(e, i), s = Pe(l, a, i, 1), !o) {
        +qe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (dt(s.d, t += 10, f));
  return ce = !0, ue(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, i = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
    return ce ? ue(e, i, s) : e;
  }
  if (r = Qe(e.e / ve), d = Qe(m.e / ve), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / ve), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
        u[t] = Pn - 1;
      --u[t], u[a] += Pn;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = to(u, r), ce ? ue(e, i, s) : e) : new p(s === 3 ? -0 : 0);
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
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ce ? ue(e, i, s) : e;
  if (o = Qe(v.e / ve), a = Qe(e.e / ve), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / ve), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Pn | 0, u[t] %= Pn;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = to(u, a), ce ? ue(e, i, s) : e;
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
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ve, a.rounding = 1, r = ap(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(Ln > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (ce = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = qe(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(l, o, r + 2, 1)).times(0.5), qe(o.d).slice(0, r) === (n = qe(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return ce = !0, ue(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Ln == 2 || Ln == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Qe(d.e / ve) + Qe(e.e / ve), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % Pn | 0, n = i / Pn | 0;
    o[t] = (o[t] + n) % Pn | 0;
  }
  for (; !o[--l]; )
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
  return e === void 0 ? r = En(a, !0) : (on(e, 0, wr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = ue(new t(a), e + 1, n), r = En(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = En(t) : (on(e, 0, wr), n === void 0 ? n = o.rounding : on(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = En(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, p = m.d, g = m.constructor;
  if (!p)
    return new g(m);
  if (u = r = new g(1), a = s = new g(0), n = new g(a), o = n.e = Cu(p) - m.e - 1, l = o % ve, n.d[0] = He(10, l < 0 ? ve + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new g(e), !i.isInt() || i.lt(u))
      throw Error(gr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (ce = !1, i = new g(qe(p)), d = g.precision, g.precision = o = p.length * ve * 2; v = Pe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
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
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(He(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(i, a, o);
  if (n = Qe(e.e / ve), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= xm)
    return t = Su(s, i, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = He(+i, u), n = r == 0 || !isFinite(r) ? Qe(u * (Math.log("0." + qe(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (ce = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = qo(e.times(rr(i, a + r)), a), t.d && (t = ue(t, a + 5, 1), dt(t.d, a, o) && (n = a + 10, t = ue(qo(e.times(rr(i, n + r)), n), n + 5, 1), +qe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = l, ce = !0, s.rounding = o, ue(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (on(e, 1, wr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = ue(new t(a), e, n), r = En(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (on(e, 1, wr), n === void 0 ? n = a.rounding : on(n, 0, 8)), ue(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function qe(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = ve - a.length, r && (o += Zn(r)), o += a;
    l = e[n], a = l + "", r = ve - a.length, r && (o += Zn(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function on(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(gr + e);
}
function dt(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += ve, t = 0) : (t = Math.ceil((n + 1) / ve), n %= ve), o = He(10, ve - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == He(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == He(10, n - 3) - 1, l;
}
function It(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += jo.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function np(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / oo(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Wa(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Pe = function() {
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
    var u, d, v, f, m, p, g, b, k, B, w, P, D, C, E, $, I, V, y, S, H = a.constructor, Q = a.s == t.s ? 1 : -1, _ = a.d, W = t.d;
    if (!_ || !_[0] || !W || !W[0])
      return new H(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (_ ? W && _[0] == W[0] : !W) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          _ && _[0] == 0 || !W ? Q * 0 : Q / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = Pn, m = ve, d = Qe(a.e / m) - Qe(t.e / m)), y = W.length, I = _.length, k = new H(Q), B = k.d = [], v = 0; W[v] == (_[v] || 0); v++)
      ;
    if (W[v] > (_[v] || 0) && d--, o == null ? (C = o = H.precision, l = H.rounding) : i ? C = o + (a.e - t.e) + 1 : C = o, C < 0)
      B.push(1), p = !0;
    else {
      if (C = C / m + 2 | 0, v = 0, y == 1) {
        for (f = 0, W = W[0], C++; (v < I || f) && C--; v++)
          E = f * s + (_[v] || 0), B[v] = E / W | 0, f = E % W | 0;
        p = f || v < I;
      } else {
        for (f = s / (W[0] + 1) | 0, f > 1 && (W = e(W, f, s), _ = e(_, f, s), y = W.length, I = _.length), $ = y, w = _.slice(0, y), P = w.length; P < y; )
          w[P++] = 0;
        S = W.slice(), S.unshift(0), V = W[0], W[1] >= s / 2 && ++V;
        do
          f = 0, u = n(W, w, y, P), u < 0 ? (D = w[0], y != P && (D = D * s + (w[1] || 0)), f = D / V | 0, f > 1 ? (f >= s && (f = s - 1), g = e(W, f, s), b = g.length, P = w.length, u = n(g, w, b, P), u == 1 && (f--, r(g, y < b ? S : W, b, s))) : (f == 0 && (u = f = 1), g = W.slice()), b = g.length, b < P && g.unshift(0), r(w, g, P, s), u == -1 && (P = w.length, u = n(W, w, y, P), u < 1 && (f++, r(w, y < P ? S : W, P, s))), P = w.length) : u === 0 && (f++, w = [0]), B[v++] = f, u && w[0] ? w[P++] = _[$] || 0 : (w = [_[$]], P = 1);
        while (($++ < I || w[0] !== void 0) && C--);
        p = w[0] !== void 0;
      }
      B[0] || B.shift();
    }
    if (m == 1)
      k.e = d, hu = p;
    else {
      for (v = 1, f = B[0]; f >= 10; f /= 10)
        v++;
      k.e = v + d * m - 1, ue(k, i ? o + k.e + 1 : o, l, p);
    }
    return k;
  };
}();
function ue(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += ve, l = n, d = v[f = 0], s = d / He(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / ve), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= ve, l = o - ve + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= ve, l = o - ve + t, s = l < 0 ? 0 : d / He(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % He(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / He(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = He(10, (ve - n % ve) % ve), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = He(10, ve - o), v[f] = l > 0 ? (d / He(10, t - l) % He(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Pn && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Pn)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return ce && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function En(e, n, r) {
  if (!e.isFinite())
    return $u(e);
  var a, t = e.e, o = qe(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Zn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Zn(-t - 1) + o, r && (a = r - l) > 0 && (o += Zn(a))) : t >= l ? (o += Zn(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + Zn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += Zn(a))), o;
}
function to(e, n) {
  var r = e[0];
  for (n *= ve; r >= 10; r /= 10)
    n++;
  return n;
}
function Yt(e, n, r) {
  if (n > ep)
    throw ce = !0, r && (e.precision = r), Error(gu);
  return ue(new e(Ft), n, 1, !0);
}
function $n(e, n, r) {
  if (n > Go)
    throw Error(gu);
  return ue(new e(Ht), n, r, !0);
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
  var t, o = new e(1), l = Math.ceil(a / ve + 4);
  for (ce = !1; ; ) {
    if (r % 2 && (o = o.times(n), ll(o.d, l) && (t = !0)), r = Qe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), ll(n.d, l);
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
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ce = !1, s = p) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(He(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), i = l.plus(Pe(o, r, s, 1)), qe(i.d).slice(0, s) === qe(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ue(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && dt(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ue(l, f.precision = p, m, ce = !0);
      else
        return f.precision = p, l;
    }
    l = i;
  }
}
function rr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, p = 10, g = e, b = g.d, k = g.constructor, B = k.rounding, w = k.precision;
  if (g.s < 0 || !b || !b[0] || !g.e && b[0] == 1 && b.length == 1)
    return new k(b && !b[0] ? -1 / 0 : g.s != 1 ? NaN : b ? 0 : g);
  if (n == null ? (ce = !1, d = w) : d = n, k.precision = d += p, r = qe(b), a = r.charAt(0), Math.abs(o = g.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = qe(g.d), a = r.charAt(0), m++;
    o = g.e, a > 1 ? (g = new k("0." + r), o++) : g = new k(a + "." + r.slice(1));
  } else
    return u = Yt(k, d + 2, w).times(o + ""), g = rr(new k(a + "." + r.slice(1)), d - p).plus(u), k.precision = w, n == null ? ue(g, w, B, ce = !0) : g;
  for (v = g, s = l = g = Pe(g.minus(1), g.plus(1), d, 1), f = ue(g.times(g), d, 1), t = 3; ; ) {
    if (l = ue(l.times(f), d, 1), u = s.plus(Pe(l, new k(t), d, 1)), qe(u.d).slice(0, d) === qe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Yt(k, d + 2, w).times(o + ""))), s = Pe(s, new k(m), d, 1), n == null)
        if (dt(s.d, d - p, B, i))
          k.precision = d += p, u = l = g = Pe(v.minus(1), v.plus(1), d, 1), f = ue(g.times(g), d, 1), t = i = 1;
        else
          return ue(s, k.precision = w, B, ce = !0);
      else
        return k.precision = w, s;
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
function rp(e, n) {
  var r, a, t, o, l, i, s, u, d;
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
    throw Error(gr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Su(a, new a(r), o, o * 2)), u = It(n, r, Pn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = to(u, d), e.d = u, ce = !1, l && (e = Pe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? He(2, s) : ar.pow(2, s))), ce = !0, e);
}
function ap(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Wa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / oo(5, r)), n = Wa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Wa(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / ve);
  for (ce = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Pe(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Pe(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return ce = !0, l.d.length = d + 1, l;
}
function oo(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Tu(e, n) {
  var r, a = n.s < 0, t = $n(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Ln = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Ln = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Ln = il(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Ln = il(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ti(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (on(r, 1, wr), a === void 0 ? a = m.rounding : on(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = $u(e);
  else {
    for (d = En(e), l = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = It(En(f), 10, t), f.e = f.d.length), v = It(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new m(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = hu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += jo.charAt(v[l]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = It(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += jo.charAt(v[l]);
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
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = $n(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? $n(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = $n(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = $n(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
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
    throw Error(ao + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    wr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Aa,
    0,
    "toExpPos",
    0,
    Aa,
    "maxE",
    0,
    Aa,
    "minE",
    -Aa,
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
function gp(e) {
  return new this(e).cos();
}
function yp(e) {
  return new this(e).cosh();
}
function Pu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
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
        for (l = 0, i = o; i >= 10; i /= 10)
          l++;
        ce ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Xo(u, o.toString());
    } else if (s !== "string")
      throw Error(gr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), wu.test(o) ? Xo(u, o) : rp(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = hp, t.clone = Pu, t.isDecimal = sl, t.abs = tp, t.acos = op, t.acosh = ip, t.add = lp, t.asin = sp, t.asinh = up, t.atan = dp, t.atanh = vp, t.atan2 = fp, t.cbrt = cp, t.ceil = mp, t.clamp = pp, t.cos = gp, t.cosh = yp, t.div = bp, t.exp = wp, t.floor = Cp, t.hypot = Sp, t.ln = kp, t.log = $p, t.log10 = Pp, t.log2 = Tp, t.max = Op, t.min = Vp, t.mod = Mp, t.mul = Bp, t.pow = Ip, t.random = Ep, t.round = Dp, t.sign = Np, t.sin = Ap, t.sinh = zp, t.sqrt = Lp, t.sub = Rp, t.sum = Up, t.tan = Fp, t.tanh = Hp, t.trunc = Yp, e === void 0 && (e = {}), e && e.defaults !== !0)
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
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : on(e, 1, wr), a = Math.ceil(e / ve), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(yu);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= ve, a && e && (t = He(10, ve - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= ve)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < ve && (r -= ve - a);
  }
  return l.e = r, l.d = i, l;
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
  for (ce = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ce = !0, ue(r, this.precision, this.rounding);
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
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var ar = q.constructor = Pu(Wo);
Ft = new ar(Ft);
Ht = new ar(Ht);
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
  onBeforeChange: R(),
  onChange: R(),
  onIncrement: R(),
  onDecrement: R(),
  "onUpdate:modelValue": R()
}, {
  n: Wp,
  classes: Gp
} = re("counter"), ul = 100, dl = 600, qp = ["inputmode", "readonly", "disabled"];
function Xp(e, n) {
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
        qp
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
  props: jp,
  setup(e) {
    var n = M(""), {
      bindForm: r,
      form: a
    } = wn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = bn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, p = () => l(e.rules, e.modelValue), g = (W) => {
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
      T(e["onUpdate:modelValue"], W != null ? L(W) : 0), i();
    }, k = {
      reset: b,
      validate: p,
      resetValidation: i
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
        S();
      }, dl));
    }, V = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, y = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, S = () => {
      d = window.setTimeout(() => {
        E(), S();
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
    return T(r, k), le(() => e.modelValue, (W) => {
      Q(P(String(W))), T(e.onChange, L(W));
    }), Q(P(String(e.modelValue))), {
      n: Wp,
      classes: Gp,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: B,
      isMin: w,
      validate: p,
      reset: b,
      resetValidation: i,
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
Ou.render = Xp;
const Rr = Ou;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var $S = Rr, Vu = 60, Mu = Vu * 60, Bu = Mu * 24, Kp = Bu * 7, Ga = 1e3, ho = Vu * Ga, vl = Mu * Ga, Zp = Bu * Ga, Jp = Kp * Ga, Pi = "millisecond", za = "second", La = "minute", Ra = "hour", Jn = "day", Et = "week", kn = "month", Iu = "quarter", Qn = "year", Ua = "date", Qp = "YYYY-MM-DDTHH:mm:ssZ", fl = "Invalid Date", _p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, xp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
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
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, kn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), kn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, ah = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, th = function(n) {
  var r = {
    M: kn,
    y: Qn,
    w: Et,
    d: Jn,
    D: Ua,
    h: Ra,
    m: La,
    s: za,
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
var at = "en", Ur = {};
Ur[at] = eh;
var Oi = function(n) {
  return n instanceof io;
}, jt = function e(n, r, a) {
  var t;
  if (!n)
    return at;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Ur[o] && (t = o), r && (Ur[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Ur[i] = n, t = i;
  }
  return !a && t && (at = t), t || !a && at;
}, ie = function(n, r) {
  if (Oi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new io(a);
}, lh = function(n, r) {
  return ie(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = ih;
Te.l = jt;
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
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, io = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = jt(r.locale, null, !0), this.parse(r);
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
    var o = this, l = Te.u(t) ? !0 : t, i = Te.p(a), s = function(k, B) {
      var w = Te.w(o.$u ? Date.UTC(o.$y, B, k) : new Date(o.$y, B, k), o);
      return l ? w : w.endOf(Jn);
    }, u = function(k, B) {
      var w = [0, 0, 0, 0], P = [23, 59, 59, 999];
      return Te.w(o.toDate()[k].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? w : P).slice(B)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case Qn:
        return l ? s(1, 0) : s(31, 11);
      case kn:
        return l ? s(1, v) : s(0, v + 1);
      case Et: {
        var p = this.$locale().weekStart || 0, g = (d < p ? d + 7 : d) - p;
        return s(l ? f - g : f + (6 - g), v);
      }
      case Jn:
      case Ua:
        return u(m + "Hours", 0);
      case Ra:
        return u(m + "Minutes", 1);
      case La:
        return u(m + "Seconds", 2);
      case za:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Te.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Jn] = i + "Date", o[Ua] = i + "Date", o[kn] = i + "Month", o[Qn] = i + "FullYear", o[Ra] = i + "Hours", o[La] = i + "Minutes", o[za] = i + "Seconds", o[Pi] = i + "Milliseconds", o)[l], u = l === Jn ? this.$D + (t - this.$W) : t;
    if (l === kn || l === Qn) {
      var d = this.clone().set(Ua, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ua, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Te.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Te.p(t), s = function(f) {
      var m = ie(o);
      return Te.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === kn)
      return this.set(kn, this.$M + a);
    if (i === Qn)
      return this.set(Qn, this.$y + a);
    if (i === Jn)
      return s(1);
    if (i === Et)
      return s(7);
    var u = (l = {}, l[La] = ho, l[Ra] = vl, l[za] = Ga, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || fl;
    var l = a || Qp, i = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, p = function(w, P, D, C) {
      return w && (w[P] || w(t, l)) || D[P].slice(0, C);
    }, g = function(w) {
      return Te.s(s % 12 || 12, w, "0");
    }, b = m || function(B, w, P) {
      var D = B < 12 ? "AM" : "PM";
      return P ? D.toLowerCase() : D;
    }, k = {
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
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(xp, function(B, w) {
      return w || k[B] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Te.p(t), s = ie(a), u = (s.utcOffset() - this.utcOffset()) * ho, d = this - s, v = Te.m(this, s);
    return v = (l = {}, l[Qn] = v / 12, l[kn] = v, l[Iu] = v / 3, l[Et] = (d - u) / Jp, l[Jn] = (d - u) / Zp, l[Ra] = d / vl, l[La] = d / ho, l[za] = d / Ga, l)[i] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(kn).$D;
  }, n.$locale = function() {
    return Ur[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = jt(a, t, !0);
    return l && (o.$L = l), o;
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
[["$ms", Pi], ["$s", za], ["$m", La], ["$H", Ra], ["$W", Jn], ["$M", kn], ["$y", Qn], ["$D", Ua]].forEach(function(e) {
  Eu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ie.extend = function(e, n) {
  return e.$i || (e(n, io, ie), e.$i = !0), ie;
};
ie.locale = jt;
ie.isDayjs = Oi;
ie.unix = function(e) {
  return ie(e * 1e3);
};
ie.en = Ur[at];
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
function uh(e) {
  return ["date", "month"].includes(e);
}
var Dt = [{
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
}], rt = [{
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
  onPreview: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: vh
} = re("picker-header");
function fh(e, n) {
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
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (i = Ye.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return Ye.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: vh,
      reverse: a,
      showDate: o,
      checkDate: l
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
  n: Tt,
  classes: ch
} = re("month-picker"), {
  n: Pt
} = re("date-picker");
function mh(e, n) {
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
    } = n, [a, t] = e.current.split("-"), o = M(!1), l = M(0), i = M(null), s = Ee({
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
      } = e, I = P + "-" + B, V = () => $ || E ? m(I) : (w == null ? void 0 : w.index) === B && u.value, y = () => f(B) ? D ? !D(I) : !1 : !0, S = y(), H = () => S ? !0 : $ || E ? !m(I) : !u.value || (w == null ? void 0 : w.index) !== B, Q = () => d.value && t === B && e.componentProps.showCurrent ? ($ || E || u.value) && S ? !0 : $ || E ? !m(I) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, _ = () => S ? "" : Q() ? C ?? "" : V() ? "" : Pt() + "-color-cover", W = _().startsWith(Pt());
      return {
        outline: Q(),
        text: H(),
        color: H() ? "" : C,
        textColor: W ? "" : _(),
        [Pt() + "-color-cover"]: W,
        class: ch(Tt("button"), [S, Tt("button--disabled")])
      };
    }, g = (B, w) => {
      var P = w.currentTarget;
      P.classList.contains(Tt("button--disabled")) || r("choose-month", B);
    }, b = (B) => {
      o.value = B === "prev", l.value += B === "prev" ? -1 : 1, r("check-preview", "year", B);
    }, k = (B) => {
      i.value.checkDate(B);
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
      n: Tt,
      nDate: Pt,
      pack: Ye,
      MONTH_LIST: Dt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: k,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: g,
      checkDate: b
    };
  }
});
Lu.render = mh;
const ph = Lu;
var {
  n: cl,
  classes: hh
} = re("year-picker"), gh = ["onClick"];
function yh(e, n) {
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
        gh
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
        var d = ie(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
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
  n: Na,
  classes: wh
} = re("day-picker"), {
  n: Ot
} = re("date-picker");
function Ch(e, n) {
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
                  onClick: (l) => e.chooseDay(t, l)
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
    } = n, [a, t, o] = e.current.split("-"), l = M([]), i = M(!1), s = M(0), u = M(null), d = Ee({
      left: !1,
      right: !1
    }), v = F(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = F(() => {
      var $;
      return e.choose.chooseYear === e.preview.previewYear && (($ = e.choose.chooseMonth) == null ? void 0 : $.index) === e.preview.previewMonth.index;
    }), m = F(() => {
      var $ = rt.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return $ === -1 || $ === 0 ? rt : rt.slice($).concat(rt.slice(0, $));
    }), p = ($) => {
      var I, V;
      return (I = (V = Ye.value.datePickerWeekDict) == null ? void 0 : V[$].abbr) != null ? I : "";
    }, g = ($) => $ > 0 ? $ : "", b = () => {
      var {
        preview: {
          previewMonth: $,
          previewYear: I
        }
      } = e, V = ie(I + "-" + $.index).daysInMonth(), y = ie(I + "-" + $.index + "-01").day(), S = m.value.findIndex((H) => H.index === "" + y);
      l.value = [...Array(S).fill(-1), ...Array.from(Array(V + 1).keys())].filter((H) => H);
    }, k = () => {
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
        var S = $ + "-" + (L(I.index) + 1);
        d.right = !ie(S).isSameOrBefore(ie(V), "month");
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
          max: S
        }
      } = e, H = !0, Q = !0, _ = I + "-" + V.index + "-" + $;
      return S && (H = ie(_).isSameOrBefore(ie(S), "day")), y && (Q = ie(_).isSameOrAfter(ie(y), "day")), H && Q;
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
        var S = ie($).isSameOrBefore(ie(V[1]), "day"), H = ie($).isSameOrAfter(ie(V[0]), "day");
        return S && H;
      }
      return I.includes($);
    }, P = ($) => {
      if ($ < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Na("button")
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
          allowedDates: S,
          color: H,
          multiple: Q,
          range: _
        }
      } = e, W = V + "-" + y.index + "-" + $, N = () => _ || Q ? w(W) : L(I) === $ && f.value, x = () => B($) ? S ? !S(W) : !1 : !0, te = x(), U = () => te ? !0 : _ || Q ? !w(W) : !f.value || L(I) !== $, Z = () => v.value && L(o) === $ && e.componentProps.showCurrent ? (_ || Q || f.value) && te ? !0 : _ || Q ? !w(W) : f.value ? I !== o : !0 : !1, K = () => te ? "" : Z() ? H ?? "" : N() ? "" : Ot() + "-color-cover", A = K().startsWith(Ot());
      return {
        text: U(),
        outline: Z(),
        textColor: A ? "" : K(),
        [Ot() + "-color-cover"]: A,
        class: wh(Na("button"), Na("button--usable"), [te, Na("button--disabled")])
      };
    }, D = ($) => {
      i.value = $ === "prev", s.value += $ === "prev" ? -1 : 1, r("check-preview", "month", $);
    }, C = ($, I) => {
      var V = I.currentTarget;
      V.classList.contains(Na("button--disabled")) || r("choose-day", $);
    }, E = ($) => {
      u.value.checkDate($);
    };
    return ln(() => {
      b(), k();
    }), le(() => e.preview, () => {
      b(), k();
    }), {
      n: Na,
      nDate: Ot,
      days: l,
      reverse: i,
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
Uu.render = Ch;
const Sh = Uu;
var {
  n: kh,
  classes: $h
} = re("date-picker");
function Th(e, n) {
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
              var o, l, i;
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
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [be(
                ae(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), O("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
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
    MonthPickerPanel: ph,
    YearPickerPanel: bh,
    DayPickerPanel: Sh
  },
  props: dh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ie().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Dt.find((se) => se.index === i), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), p = M(), g = M(s), b = M(l), k = M(!1), B = M([]), w = M([]), P = M([]), D = M([]), C = M(null), E = M(null), $ = Ee({
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
    }), S = F(() => {
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
      var mn = ie(m.value + "-" + f.value.index + "-" + p.value).day(), Da = rt.find((co) => co.index === "" + mn), Ri = (se = (ye = Ye.value.datePickerWeekDict) == null ? void 0 : ye[Da.index].name) != null ? se : "", fv = (he = (Se = Ye.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? he : "", cv = Sa(p.value, 2, "0");
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
        Ya(() => {
          se.value.forwardRef(a), Ct();
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
        k.value = de("day", se);
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
      if (k.value = de("month", se), ye === "month" && !he) {
        var Da = b.value + "-" + se.index;
        Se ? Y(Da, "month") : ke ? X(Da, "month") : (T(mn, Da), T(Ue, Da));
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
        Se < 1 && (b.value = "" + (L(b.value) - 1), Se = 12), Se > 12 && (b.value = "" + (L(b.value) + 1), Se = 1), g.value = Dt.find((ke) => L(ke.index) === Se);
      }
      T(e.onPreview, L(b.value), L(g.value.index));
    }, Sn = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Nn = (se) => Ce(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ge = (se, ye) => {
      var he = ye === "month" ? P : D, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((mn) => ie(mn).format(Se)).slice(0, 2), Ue = he.value.some((mn) => Nn(mn));
      if (!Ue) {
        he.value = ke;
        var _e = ie(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && _e && (he.value = [he.value[1], he.value[0]]);
      }
    }, cn = (se, ye) => {
      var he = ye === "month" ? B : w, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Ue) => ie(Ue).format(Se))));
      he.value = ke.filter((Ue) => Ue !== "Invalid Date");
    }, wt = (se) => {
      var ye = ie(se).format("YYYY-MM-D");
      if (!Nn(ye)) {
        var [he, Se, ke] = ye.split("-"), Ue = Dt.find((_e) => _e.index === Se);
        f.value = Ue, m.value = he, p.value = ke, g.value = Ue, b.value = he;
      }
    }, Ct = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Sn() || Nn(se) || !se))
        if (e.range) {
          if (!Ce(se))
            return;
          v.value = se.length !== 1, Ge(se, e.type);
        } else if (e.multiple) {
          if (!Ce(se))
            return;
          cn(se, e.type);
        } else
          wt(se);
    }, {
      immediate: !0
    }), le(H, Ct), {
      n: kh,
      classes: $h,
      monthPanelEl: C,
      dayPanelEl: E,
      reverse: k,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: b,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: y,
      getDateTitle: S,
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
Fu.render = Th;
const Fr = Fu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var TS = Fr;
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
  onBeforeClose: R(),
  onConfirm: R(),
  onCancel: R(),
  "onUpdate:show": R()
}, Je(gt, [
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
} = re("dialog");
function Bh(e, n) {
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
  props: Oh,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => T(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (T(s), !!i) {
        if (u != null) {
          u("close", a);
          return;
        }
        T(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (T(s), i != null) {
        i("confirm", a);
        return;
      }
      T(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (T(s), i != null) {
        i("cancel", a);
        return;
      }
      T(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: Vh,
      classes: Mh,
      pack: Ye,
      dt: Jt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: me
    };
  }
});
Hu.render = Bh;
const ur = Hu;
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
var xn, Gt = {};
function Ih(e) {
  return e === void 0 && (e = {}), Ke(e) ? Wt({}, Gt, {
    message: e
  }) : Wt({}, Gt, e);
}
function Ta(e) {
  return ht() ? new Promise((n) => {
    Ta.close();
    var r = Ih(e), a = Ee(r);
    a.teleport = "body", xn = a;
    var {
      unmountInstance: t
    } = xa(ur, a, {
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
function Eh(e) {
  Gt = e;
}
function Dh() {
  Gt = {};
}
function Nh() {
  if (xn != null) {
    var e = xn;
    xn = null, Be().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(Ta, {
  setDefaultOptions: Eh,
  resetDefaultOptions: Dh,
  close: Nh
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
Ta.install = function(e) {
  e.component(ur.name, ur);
};
Ta.Component = ur;
var PS = ur, Ah = {
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
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Fa.apply(this, arguments);
}
var {
  n: zh,
  classes: Lh
} = re("divider");
function Rh(e, n) {
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
  props: Ah,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ee({
      withText: !1
    }), t = F(() => Co(e.inset) ? e.inset : !0), o = F(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Co(i) || i === 0)
        return Fa({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Fa({}, d, {
        height: "calc(80% - " + me(f) + ")"
      }) : Fa({}, d, {
        width: "calc(100% - " + me(f) + ")",
        left: v > 0 ? me(f) : me(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ln(() => {
      l();
    }), Zt(() => {
      l();
    }), Fa({
      n: zh,
      classes: Lh
    }, Cv(a), {
      style: o,
      isInset: t
    });
  }
});
Yu.render = Rh;
const Hr = Yu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var OS = Hr, Uh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Nt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Uh[n];
  });
}
var Rn = "top", yr = "bottom", Pa = "right", dr = "left", lo = "auto", so = [Rn, yr, Pa, dr], uo = "start", vt = "end", Fh = "clippingParents", ju = "viewport", et = "popper", Hh = "reference", ml = /* @__PURE__ */ so.reduce(function(e, n) {
  return e.concat([n + "-" + uo, n + "-" + vt]);
}, []), Wu = /* @__PURE__ */ [].concat(so, [lo]).reduce(function(e, n) {
  return e.concat([n, n + "-" + uo, n + "-" + vt]);
}, []), Yh = "beforeRead", jh = "read", Wh = "afterRead", Gh = "beforeMain", qh = "main", Xh = "afterMain", Kh = "beforeWrite", Zh = "write", Jh = "afterWrite", xo = [Yh, jh, Wh, Gh, qh, Xh, Kh, Zh, Jh];
function Un(e) {
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
var tt = Math.max, hl = Math.min, qa = Math.round;
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
  var l = Oa(e) ? Cn(e) : window, i = l.visualViewport, s = !Gu() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function _h(e, n) {
  var r = Cn(e), a = Cr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = Gu();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Bi(e),
    y: s
  };
}
function On(e) {
  return Cn(e).getComputedStyle(e);
}
function xh(e) {
  var n, r = Cr(e), a = Mi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = tt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = tt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Bi(e), s = -a.scrollTop;
  return On(t || r).direction === "rtl" && (i += tt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Dn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function vo(e) {
  return Dn(e) === "html" ? e : (
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
  var n = On(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function qu(e) {
  return ["html", "body", "#document"].indexOf(Dn(e)) >= 0 ? e.ownerDocument.body : gn(e) && Ii(e) ? e : qu(vo(e));
}
function ot(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = qu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), l = t ? [o].concat(o.visualViewport || [], Ii(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ot(vo(l)))
  );
}
function eg(e) {
  return ["table", "td", "th"].indexOf(Dn(e)) >= 0;
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
  var t = vo(e);
  for (Vi(t) && (t = t.host); gn(t) && ["html", "body"].indexOf(Dn(t)) < 0; ) {
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
  return r && (Dn(r) === "html" || Dn(r) === "body" && On(r).position === "static") ? n : r || ng(e) || n;
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
  var r = Xa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function yl(e, n, r) {
  return n === ju ? ni(_h(e, r)) : Oa(n) ? ag(n, r) : ni(xh(Cr(e)));
}
function tg(e) {
  var n = ot(vo(e)), r = ["absolute", "fixed"].indexOf(On(e).position) >= 0, a = r && gn(e) ? Ei(e) : e;
  return Oa(a) ? n.filter(function(t) {
    return Oa(t) && rg(t, a) && Dn(t) !== "body";
  }) : [];
}
function og(e, n, r, a) {
  var t = n === "clippingParents" ? tg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = yl(e, u, a);
    return s.top = tt(d.top, s.top), s.right = hl(d.right, s.right), s.bottom = hl(d.bottom, s.bottom), s.left = tt(d.left, s.left), s;
  }, yl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ft(e) {
  return e.split("-")[1];
}
function ig(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Un(a) : null, o = a ? ft(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Rn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case yr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case Pa:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case dr:
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
  var u = t ? ig(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case uo:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case vt:
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
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Fh : i, u = r.rootBoundary, d = u === void 0 ? ju : u, v = r.elementContext, f = v === void 0 ? et : v, m = r.altBoundary, p = m === void 0 ? !1 : m, g = r.padding, b = g === void 0 ? 0 : g, k = sg(typeof b != "number" ? b : ug(b, so)), B = f === et ? Hh : et, w = e.rects.popper, P = e.elements[p ? B : f], D = og(Oa(P) ? P : P.contextElement || Cr(e.elements.popper), s, d, l), C = Xa(e.elements.reference), E = Xu({
    reference: C,
    element: w,
    strategy: "absolute",
    placement: t
  }), $ = ni(Object.assign({}, w, E)), I = f === et ? $ : C, V = {
    top: D.top - I.top + k.top,
    bottom: I.bottom - D.bottom + k.bottom,
    left: D.left - I.left + k.left,
    right: I.right - D.right + k.right
  }, y = e.modifiersData.offset;
  if (f === et && y) {
    var S = y[t];
    Object.keys(V).forEach(function(H) {
      var Q = [Pa, yr].indexOf(H) >= 0 ? 1 : -1, _ = [Rn, yr].indexOf(H) >= 0 ? "y" : "x";
      V[H] += S[_] * Q;
    });
  }
  return V;
}
function dg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Wu : s, d = ft(a), v = d ? i ? ml : ml.filter(function(p) {
    return ft(p) === d;
  }) : so, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, g) {
    return p[g] = Ku(e, {
      placement: g,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Un(g)], p;
  }, {});
  return Object.keys(m).sort(function(p, g) {
    return m[p] - m[g];
  });
}
function vg(e) {
  if (Un(e) === lo)
    return [];
  var n = Nt(e);
  return [pl(e), n, pl(n)];
}
function fg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, g = r.allowedAutoPlacements, b = n.options.placement, k = Un(b), B = k === b, w = s || (B || !p ? [Nt(b)] : vg(b)), P = [b].concat(w).reduce(function(Y, X) {
      return Y.concat(Un(X) === lo ? dg(n, {
        placement: X,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : X);
    }, []), D = n.rects.reference, C = n.rects.popper, E = /* @__PURE__ */ new Map(), $ = !0, I = P[0], V = 0; V < P.length; V++) {
      var y = P[V], S = Un(y), H = ft(y) === uo, Q = [Rn, yr].indexOf(S) >= 0, _ = Q ? "width" : "height", W = Ku(n, {
        placement: y,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), N = Q ? H ? Pa : dr : H ? yr : Rn;
      D[_] > C[_] && (N = Nt(N));
      var x = Nt(N), te = [];
      if (o && te.push(W[S] <= 0), i && te.push(W[N] <= 0, W[x] <= 0), te.every(function(Y) {
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
  var a = Un(e), t = [dr, Rn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [dr, Pa].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function pg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = Wu.reduce(function(d, v) {
    return d[v] = mg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
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
  var n = e.getBoundingClientRect(), r = qa(n.width) / e.offsetWidth || 1, a = qa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function wg(e, n, r) {
  r === void 0 && (r = !1);
  var a = gn(n), t = gn(n) && bg(n), o = Cr(n), l = Xa(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Dn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(o)) && (i = yg(n)), gn(n) ? (s = Xa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Bi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Cg(e) {
  var n = Xa(e), r = e.offsetWidth, a = e.offsetHeight;
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
function Kn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var Sr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Tg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', bl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pg(e) {
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
        }) == null && console.error(Kn(Tg, String(n.name), a, a));
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
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Cl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(k) {
        var B = typeof k == "function" ? k(d.options) : k;
        g(), d.options = Object.assign({}, o, d.options, B), d.scrollParents = {
          reference: Oa(i) ? ot(i) : i.contextElement ? ot(i.contextElement) : [],
          popper: ot(s)
        };
        var w = kg(Vg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(y) {
          return y.enabled;
        }), process.env.NODE_ENV !== "production") {
          var P = Og([].concat(w, d.options.modifiers), function(y) {
            var S = y.name;
            return S;
          });
          if (Pg(P), Un(d.options.placement) === lo) {
            var D = d.orderedModifiers.find(function(y) {
              var S = y.name;
              return S === "flip";
            });
            D || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var C = On(s), E = C.marginTop, $ = C.marginRight, I = C.marginBottom, V = C.marginLeft;
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
          var k = d.elements, B = k.reference, w = k.popper;
          if (!Sl(B, w)) {
            process.env.NODE_ENV !== "production" && console.error(wl);
            return;
          }
          d.rects = {
            reference: wg(B, Ei(w), d.options.strategy === "fixed"),
            popper: Cg(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(y) {
            return d.modifiersData[y.name] = Object.assign({}, y.data);
          });
          for (var P = 0, D = 0; D < d.orderedModifiers.length; D++) {
            if (process.env.NODE_ENV !== "production" && (P += 1, P > 100)) {
              console.error(Mg);
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
      update: $g(function() {
        return new Promise(function(b) {
          m.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Sl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(wl), m;
    m.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function p() {
      d.orderedModifiers.forEach(function(b) {
        var k = b.name, B = b.options, w = B === void 0 ? {} : B, P = b.effect;
        if (typeof P == "function") {
          var D = P({
            state: d,
            name: k,
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
var Vt = {
  passive: !0
};
function Ig(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Vt);
  }), i && s.addEventListener("resize", r.update, Vt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Vt);
    }), i && s.removeEventListener("resize", r.update, Vt);
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
    x: qa(n * t) / t || 0,
    y: qa(r * t) / t || 0
  };
}
function kl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, p = l.y, g = p === void 0 ? 0 : p, b = typeof d == "function" ? d({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = b.x, g = b.y;
  var k = l.hasOwnProperty("x"), B = l.hasOwnProperty("y"), w = dr, P = Rn, D = window;
  if (u) {
    var C = Ei(r), E = "clientHeight", $ = "clientWidth";
    if (C === Cn(r) && (C = Cr(r), On(C).position !== "static" && i === "absolute" && (E = "scrollHeight", $ = "scrollWidth")), C = C, t === Rn || (t === dr || t === Pa) && o === vt) {
      P = yr;
      var I = v && C === D && D.visualViewport ? D.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        C[E]
      );
      g -= I - a.height, g *= s ? 1 : -1;
    }
    if (t === dr || (t === Rn || t === yr) && o === vt) {
      w = Pa;
      var V = v && C === D && D.visualViewport ? D.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        C[$]
      );
      m -= V - a.width, m *= s ? 1 : -1;
    }
  }
  var y = Object.assign({
    position: i
  }, u && Ag), S = d === !0 ? zg({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  if (m = S.x, g = S.y, s) {
    var H;
    return Object.assign({}, y, (H = {}, H[P] = B ? "0" : "", H[w] = k ? "0" : "", H.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", H));
  }
  return Object.assign({}, y, (n = {}, n[P] = B ? g + "px" : "", n[w] = k ? m + "px" : "", n.transform = "", n));
}
function Lg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = On(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Un(n.placement),
    variation: ft(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, kl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
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
    !gn(o) || !Dn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
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
      var t = n.elements[a], o = n.attributes[a] || {}, l = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !gn(t) || !Dn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
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
function qt() {
  return qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qt.apply(this, arguments);
}
function $l(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Tl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        $l(o, a, t, l, i, "next", s);
      }
      function i(s) {
        $l(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Zu(e) {
  var n = M(null), r = M(null), a = M(!1), t = M({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = yt(() => a.value, 1), l = null, i = !1, s = !1, u = () => {
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
      e.trigger === "hover" && (s = !1, yield Bn(), !i && D());
    });
    return function() {
      return C.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var C = Tl(function* () {
      e.trigger === "hover" && (i = !1, yield Bn(), !s && D());
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
  }, k = () => {
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
    } = k(), I = [qt({}, cg, {
      enabled: a.value
    }), qt({}, hg, {
      options: {
        offset: [E, $]
      }
    })];
    return {
      placement: C,
      modifiers: I
    };
  }, w = () => {
    l.setOptions(B());
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
  }), le(() => e.disabled, D), Xt(() => {
    var C, E = e.reference ? (C = n.value) == null ? void 0 : C.querySelector(e.reference) : n.value;
    l = jg(E ?? n.value, r.value, B());
  }), Qa(() => {
    l.destroy();
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
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:show": R()
}, {
  n: Kg,
  classes: Zg
} = re("tooltip");
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
    [j(e.$slots, "default"), (h(), ge(
      Ma,
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
              onClick: n[0] || (n[0] = Mn(() => {
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
  props: Xg,
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
      resize: p
    } = Zu(e);
    return {
      toSizeUnit: me,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Kg,
      classes: Zg,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
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
const vr = Ju;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var VS = vr;
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
} = re("ellipsis"), ny = {
  key: 0
};
function ry(e, n) {
  var r = oe("var-tooltip");
  return h(), ge(
    r,
    vi(rs(e.tooltip)),
    {
      content: fe(() => [j(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), O(
          "span",
          ny,
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
const Yr = Qu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var MS = Yr;
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
  onClick: R(),
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:active": R()
};
function Pl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
var {
  classes: Ol,
  n: dn
} = re("fab");
const jr = ne({
  name: "VarFab",
  inheritAttrs: !1,
  props: iy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = M(!1), o = M(null), {
      disabled: l
    } = _t(), i = F({
      get() {
        return t.value;
      },
      set(m) {
        t.value = m, T(e["onUpdate:active"], m);
      }
    }), s = (m, p, g) => {
      if (m.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (g === 0) {
          T(e.onClick, i.value, m);
          return;
        }
        i.value = p, T(e.onClick, i.value, m), T(i.value ? e.onOpen : e.onClose);
      }
    }, u = (m, p) => {
      e.trigger !== "hover" || e.disabled || p === 0 || (i.value = m, T(i.value ? e.onOpen : e.onClose));
    }, d = () => {
      e.trigger !== "click" || e.disabled || i.value !== !1 && (i.value = !1, T(e.onClose));
    }, v = () => r.trigger ? e.show ? r.trigger({
      active: i.value
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
        class: Ol([i.value, dn("trigger-active-icon"), dn("trigger-inactive-icon")]),
        name: i.value ? e.activeIcon : e.inactiveIcon,
        size: i.value ? e.inactiveIconSize : e.activeIconSize,
        transition: 200,
        animationClass: dn("--trigger-icon-animation")
      }, null)]
    }), [[pr, e.show]]), f = () => {
      var m, p, g = cs((p = r.default == null ? void 0 : r.default()) != null ? p : []);
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
        onClick: (b) => s(b, !i.value, g.length),
        onMouseleave: () => u(!1, g.length),
        onMouseenter: () => u(!0, g.length)
      }, a), [J(Ne, {
        name: dn("--active-transition")
      }, Pl(m = v()) ? m : {
        default: () => [m]
      }), J(Ne, {
        name: dn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(J("div", {
          class: dn("actions"),
          onClick: (b) => b.stopPropagation()
        }, [g.map((b) => J("div", {
          class: dn("action")
        }, [b]))]), [[pr, e.show && i.value && g.length]])]
      })]);
    };
    return le(() => e.active, (m) => {
      t.value = m;
    }, {
      immediate: !0
    }), le(() => e.trigger, () => {
      i.value = !1;
    }), le(() => e.disabled, () => {
      i.value = !1;
    }), fs(o, "click", d), () => {
      var {
        teleport: m
      } = e;
      if (m) {
        var p;
        return J(Ma, {
          to: m,
          disabled: l.value
        }, Pl(p = f()) ? p : {
          default: () => [p]
        });
      }
      return f();
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var BS = jr;
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
function Vl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function uy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Vl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Vl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: dy
} = re("form");
function vy(e, n) {
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
  props: sy,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = hm(), o = (d) => {
      setTimeout(() => {
        var v = Ea(d), f = v === window ? 0 : qi(v), m = qi(d) - f - Le(e.scrollToErrorOffsetY);
        st(v, {
          top: m,
          animation: So
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = uy(function* () {
        var v = yield Promise.all(a.map((b) => {
          var {
            validate: k
          } = b;
          return k();
        }));
        if (e.scrollToError) {
          var [, f] = Pv(v, (b) => b === !1, e.scrollToError), m = f > -1;
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
      n: dy,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
_u.render = vy;
const Fn = _u;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
Fn.useValidation = bn;
Fn.useForm = wn;
var IS = Fn;
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
  onClick: R(),
  onLoad: R(),
  onError: R()
}, {
  n: my,
  classes: py
} = re("image"), hy = ["alt", "title", "lazy-error", "lazy-loading"], gy = ["alt", "title", "src"];
function yy(e, n) {
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
      hy
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
      gy
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
    Lazy: ut,
    Ripple: Re
  },
  props: cy,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && T(i, t), o._lazy.state === "error" && T(s, t)) : T(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && T(l, t);
    }, a = (t) => {
      T(e.onClick, t);
    };
    return {
      n: my,
      classes: py,
      toSizeUnit: me,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
xu.render = yy;
const Wr = xu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var ES = Wr, ed = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
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
  onChange: R()
};
function Ml(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function wy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ml(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ml(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var Cy = 250, Sy = 20, {
  n: ky,
  classes: $y
} = re("swipe"), Ty = ["onClick"];
function Py(e, n) {
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
          Ty
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
    var n = M(null), r = M(0), a = F(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = by(), v = !1, f = -1, m, p, g, b, k, B = (U) => s.find((Z) => {
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
      l.value = !0, (Z || K) && (l.value = !0, o.value = K ? A : Y, B(0).setTranslate(0), B(d.value - 1).setTranslate(0)), Ya(() => {
        l.value = !1, T(U);
      });
    }, $ = () => {
      i.value = C(L(e.initialIndex));
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
    }, S = (U) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: K
        } = U.touches[0];
        m = Z, p = K, g = performance.now(), v = !0, V(), E(() => {
          l.value = !0;
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
          var Ie = b !== void 0 ? A - b : 0, Ze = k !== void 0 ? Y - k : 0;
          b = A, k = Y, o.value += K ? Ze : Ie, w();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: U,
          onChange: Z
        } = e, K = U ? k < p : b < m, A = Math.abs(U ? p - k : m - b), Y = performance.now() - g <= Cy && A >= Sy, X = Y ? P(K ? i.value + 1 : i.value - 1) : P();
        v = !1, l.value = !1, b = void 0, k = void 0, o.value = X * -r.value;
        var de = i.value;
        i.value = D(X), I(), de !== i.value && T(Z, i.value);
      }
    }, _ = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((U) => {
        U.setTranslate(0);
      }), I(), setTimeout(() => {
        l.value = !1;
      }));
    }, W = (U) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: K
        } = e, A = i.value;
        i.value = C(A + 1), (U == null ? void 0 : U.event) !== !1 && T(K, i.value), E(() => {
          if (A === d.value - 1 && Z) {
            B(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          A !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, N = (U) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: K
        } = e, A = i.value;
        i.value = C(A - 1), (U == null ? void 0 : U.event) !== !1 && T(K, i.value), E(() => {
          if (A === 0 && Z) {
            B(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          A !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, x = (U, Z) => {
      if (!(d.value <= 1 || U === i.value)) {
        U = U < 0 ? 0 : U, U = U >= d.value ? d.value : U;
        var K = U > i.value ? W : N, A = Math.abs(U - i.value);
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
    return u(te), le(() => d.value, /* @__PURE__ */ wy(function* () {
      yield Bn(), $(), _();
    })), Za(_), br(V), Qa(V), ka(window, "resize", _), {
      n: ky,
      classes: $y,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: S,
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
rd.render = Py;
const Hn = rd;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var DS = Hn;
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
} = re("swipe-item");
function My(e, n) {
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
    } = Oy(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Vy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
ad.render = My;
const Yn = ad;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var NS = Yn;
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
  "onUpdate:show": R()
}, Je(nd, ["loop", "indicator", "onChange"]), Je(gt, [
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
} = re("image-preview"), Il = 12, El = 200, Ey = 350, Dl = 200, Dy = ["src", "alt"];
function Ny(e, n) {
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
            ze(e.images, (l) => (h(), ge(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
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
                      src: l,
                      alt: l
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
          indicator: fe((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [j(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), O(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              ae(i + 1) + " / " + ae(s),
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
    VarSwipe: Hn,
    VarSwipeItem: Yn,
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: By,
  setup(e) {
    var n = M(!1), r = F(() => {
      var {
        images: V,
        current: y
      } = e, S = V.findIndex((H) => H === y);
      return S >= 0 ? S : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, v = null, f = (V, y) => {
      var {
        clientX: S,
        clientY: H
      } = V, {
        clientX: Q,
        clientY: _
      } = y;
      return Math.abs(Math.sqrt(Math.pow(Q - S, 2) + Math.pow(_ - H, 2)));
    }, m = (V, y) => ({
      clientX: V.clientX,
      clientY: V.clientY,
      timestamp: Date.now(),
      target: y
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Dl);
    }, g = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, b = (V) => d ? f(d, V) <= Il && V.timestamp - d.timestamp <= El && d.target === V.target : !1, k = (V) => !V || !u || !d ? !1 : f(u, d) <= Il && Date.now() - d.timestamp < Ey && (V === u.target || V.parentNode === u.target), B = (V) => {
      v = window.setTimeout(() => {
        k(V.target) && I(), u = null;
      }, El);
    }, w = (V) => {
      v && window.clearTimeout(v);
      var {
        touches: y
      } = V, S = m(y[0], V.currentTarget);
      if (u = S, b(S)) {
        a.value > 1 ? g() : p();
        return;
      }
      d = S;
    }, P = (V) => {
      var {
        offsetWidth: y,
        offsetHeight: S
      } = V, {
        naturalWidth: H,
        naturalHeight: Q
      } = V.querySelector("." + Bl("image"));
      return {
        width: y,
        height: S,
        imageRadio: Q / H,
        rootRadio: S / y,
        zoom: L(e.zoom)
      };
    }, D = (V) => {
      var {
        zoom: y,
        imageRadio: S,
        rootRadio: H,
        width: Q,
        height: _
      } = P(V);
      if (!S)
        return 0;
      var W = S > H ? _ / S : Q;
      return Math.max(0, (y * W - Q) / 2) / y;
    }, C = (V) => {
      var {
        zoom: y,
        imageRadio: S,
        rootRadio: H,
        width: Q,
        height: _
      } = P(V);
      if (!S)
        return 0;
      var W = S > H ? _ : Q * S;
      return Math.max(0, (y * W - _) / 2) / y;
    }, E = (V, y, S) => V + y >= S ? S : V + y <= -S ? -S : V + y, $ = (V) => {
      if (d) {
        var y = V.currentTarget, {
          touches: S
        } = V, H = m(S[0], y);
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
      classes: Iy,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: w,
      handleTouchmove: $,
      handleTouchend: B,
      close: I
    };
  }
});
td.render = Ny;
const fr = td;
function it() {
  return it = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, it.apply(this, arguments);
}
var er, lt = {};
function Ay(e) {
  return e === void 0 && (e = {}), Ke(e) ? it({}, lt, {
    images: [e]
  }) : Ce(e) ? it({}, lt, {
    images: e
  }) : it({}, lt, e);
}
function Vn(e) {
  if (ht()) {
    Vn.close();
    var n = Ay(e), r = Ee(n);
    r.teleport = "body", er = r;
    var {
      unmountInstance: a
    } = xa(fr, r, {
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
Vn.close = () => {
  if (er != null) {
    var e = er;
    er = null, Be().then(() => {
      e.show = !1;
    });
  }
};
Vn.setDefaultOptions = (e) => {
  lt = e;
};
Vn.resetDefaultOptions = () => {
  lt = {};
};
fr.install = function(e) {
  e.component(fr.name, fr);
};
Vn.install = function(e) {
  e.component(fr.name, fr);
};
Vn.Component = fr;
var AS = fr, At = {
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
function Nl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Al(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Nl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Nl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: zy,
  classes: Ly
} = re("sticky");
function Ry(e, n) {
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
  props: At,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => Le(e.offsetTop)), m, p = () => {
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
        return y <= f.value ? (w || (l.value = $.offsetWidth + "px", i.value = $.offsetHeight + "px", t.value = D + f.value + "px", o.value = V + "px", s.value = E.offsetWidth + "px", u.value = E.offsetHeight + "px", a.value = !0), {
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
        a.value = !1, yield zv(), p();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), k = /* @__PURE__ */ function() {
      var w = Al(function* () {
        yield Bn(), m = Ea(n.value), m !== window && m.addEventListener("scroll", g), g();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), B = () => {
      m !== window && m.removeEventListener("scroll", g);
    };
    return le(() => e.disabled, b), ln(k), Qa(B), br(B), ka(window, "scroll", g), {
      n: zy,
      classes: Ly,
      resize: b,
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
      toNumber: L
    };
  }
});
od.render = Ry;
const jn = od;
jn.install = function(e) {
  e.component(jn.name, jn);
};
var zS = jn, id = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
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
} = re("index-anchor");
function Wy(e, n) {
  return h(), ge(
    _a(e.sticky ? e.n("$-sticky") : e.Transition),
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
    VarSticky: jn
  },
  inheritAttrs: !1,
  props: Hy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Fy(), t = M(0), o = M(!1), l = F(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, p = (b) => {
      o.value = b;
    }, g = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(g), {
      n: Yy,
      classes: jy,
      name: l,
      anchorEl: i,
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
ld.render = Wy;
const Gr = ld;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var LS = Gr, Gy = {
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
function zl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        zl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        zl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: qy,
  classes: Xy
} = re("index-bar"), Ky = ["onClick"];
function Zy(e, n) {
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
var sd = ne({
  name: "VarIndexBar",
  props: Gy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Uy(), t = M(""), o = M(null), l = M([]), i = M(), s = F(() => e.sticky), u = F(() => e.cssMode), d = F(() => Le(e.stickyOffsetTop)), v = F(() => e.zIndex), f = null, m = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(m);
    var p = (C, E) => {
      var $ = fi(C) ? C.name.value : C;
      $ === i.value || $ === void 0 || (i.value = $, (E == null ? void 0 : E.event) !== !1 && T(e.onChange, $));
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
      var C = Qt(f), E = f === window ? document.body.scrollHeight : f.scrollHeight, $ = g();
      r.forEach((I, V) => {
        var y = I.ownTop.value, S = C - y + d.value - $, H = V === r.length - 1 ? E : r[V + 1].ownTop.value - I.ownTop.value;
        S >= 0 && S < H && t.value === "" && (V && !e.cssMode && r[V - 1].setDisabled(!0), I.setDisabled(!1), p(I));
      });
    }, k = /* @__PURE__ */ function() {
      var C = Mt(function* (E) {
        var {
          anchorName: $,
          manualCall: I = !1,
          options: V
        } = E;
        if (I && T(e.onClick, $), $ !== i.value) {
          var y = r.find((_) => {
            var {
              name: W
            } = _;
            return $ === W.value;
          });
          if (y) {
            var S = g(), H = y.ownTop.value - d.value + S, Q = pi(f);
            t.value = $, p($, V), yield st(f, {
              left: Q,
              top: H,
              animation: os,
              duration: L(e.duration)
            }), Ya(() => {
              t.value = "";
            });
          }
        }
      });
      return function($) {
        return C.apply(this, arguments);
      };
    }(), B = /* @__PURE__ */ function() {
      var C = Mt(function* () {
        yield Bn(), f = Ea(o.value);
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), w = () => {
      f.addEventListener("scroll", b);
    }, P = () => {
      f.removeEventListener("scroll", b);
    }, D = (C, E) => {
      Gn(() => k({
        anchorName: C,
        options: E
      }));
    };
    return le(() => n.value, /* @__PURE__ */ Mt(function* () {
      yield Bn(), r.forEach((C) => {
        var {
          name: E,
          setOwnTop: $
        } = C;
        E.value && l.value.push(E.value), $();
      });
    })), ln(/* @__PURE__ */ Mt(function* () {
      yield B(), w();
    })), Kt(P), br(P), {
      n: qy,
      classes: Xy,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: D,
      anchorClick: k
    };
  }
});
sd.render = Zy;
const qr = sd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var RS = qr;
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
  onFocus: R(),
  onBlur: R(),
  onClick: R(),
  onClear: R(),
  onInput: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: go,
  classes: _y
} = re("input"), xy = ["id", "disabled", "type", "value", "maxlength", "rows"], eb = ["id", "disabled", "type", "value", "maxlength"], nb = ["for"];
function rb(e, n) {
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
          eb
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
          nb
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
  props: Qy,
  setup(e) {
    var n = M("var-input-" + Ja().uid), r = M(null), a = M(!1), t = M(!1), o = F(() => e.type === "number" ? "text" : e.type), l = F(() => {
      var {
        maxlength: N,
        modelValue: x
      } = e;
      return N ? zn(x) ? "0 / " + N : String(x).length + "/" + N : "";
    }), {
      bindForm: i,
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
      if (!N && (!zn(x) || t.value))
        return go("--placeholder-hidden");
      if (N && (!zn(x) || a.value))
        return go("--placeholder-hint");
    }, g = (N) => {
      a.value = !0, T(e.onFocus, N), m("onFocus");
    }, b = (N) => {
      a.value = !1, T(e.onBlur, N), m("onBlur");
    }, k = (N) => {
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
        var x = k(N);
        T(e["onUpdate:modelValue"], x), T(e.onInput, x, N), m("onInput");
      }
    }, D = (N) => {
      var x = k(N);
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
    }, S = () => {
      T(e["onUpdate:modelValue"], ""), f();
    }, H = () => v(e.rules, e.modelValue), Q = () => {
      var N;
      (N = r.value) == null || N.focus();
    }, _ = () => {
      r.value.blur();
    }, W = {
      reset: S,
      validate: H,
      resetValidation: f
    };
    return T(i, W), ln(() => {
      e.autofocus && Q();
    }), {
      el: r,
      id: n,
      isFocus: a,
      isComposing: t,
      errorMessage: u,
      type: o,
      maxlengthText: l,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      n: go,
      classes: _y,
      isEmpty: zn,
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
      reset: S,
      focus: Q,
      blur: _
    };
  }
});
ud.render = rb;
const cr = ud;
cr.install = function(e) {
  e.component(cr.name, cr);
};
var US = cr;
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
  onClick: R()
}, {
  n: ib,
  classes: lb
} = re("link");
function sb(e, n) {
  return h(), ge(
    _a(e.tag),
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
  props: ob,
  setup(e) {
    var n = F(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = F(() => {
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
      o || T(l, t);
    };
    return {
      n: ib,
      classes: lb,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: me
    };
  }
});
dd.render = sb;
const Xr = dd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var FS = Xr, ub = {
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
function Ll(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function db(e) {
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
var {
  n: vb,
  classes: fb
} = re("list");
function cb(e, n) {
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
  props: ub,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      T(e["onUpdate:error"], !1), T(e["onUpdate:loading"], !0), T(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = db(function* () {
        yield Be();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && o() && t();
      });
      return function() {
        return i.apply(this, arguments);
      };
    }();
    return ln(() => {
      a = Ea(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), Qa(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: Ye,
      listEl: n,
      detectorEl: r,
      dt: Jt,
      isNumber: nn,
      load: t,
      check: l,
      n: vb,
      classes: fb
    };
  }
});
vd.render = cb;
const Kr = vd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var HS = Kr, mb = {
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
} = re("loading-bar");
const hb = ne({
  name: "VarLoadingBar",
  props: mb,
  setup(e) {
    return () => J("div", {
      class: pb(Rl(), [e.error, Rl("--error")]),
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
var fd, cd, fo, md, Ul, pd = {}, gb = {
  value: 0,
  opacity: 0,
  error: !1
}, je = Ee(gb), yb = (e) => {
  Object.assign(je, e);
}, bb = (e) => {
  Object.assign(je, e), pd = e;
}, wb = () => {
  Object.keys(pd).forEach((e) => {
    je[e] !== void 0 && (je[e] = void 0);
  });
}, hd = () => {
  Ul || (Ul = !0, xa(hb, je));
}, Di = () => {
  fd = window.setTimeout(() => {
    if (!(je.value >= 95)) {
      var e = Math.random();
      je.value < 70 && (e = Math.round(5 * Math.random())), je.value += e, Di();
    }
  }, 200);
}, Ni = () => {
  window.clearTimeout(cd), window.clearTimeout(fd), window.clearTimeout(fo), window.clearTimeout(md);
}, Cb = () => {
  Ni(), je.error = !1, je.value = 0, hd(), fo = window.setTimeout(() => {
    je.opacity = 1;
  }, 200), Di();
}, gd = () => {
  Ni(), je.value = 100, fo = window.setTimeout(() => {
    je.opacity = 0, cd = window.setTimeout(() => {
      je.error = !1;
    }, 250);
  }, 300);
}, Sb = () => {
  Ni(), je.error = !0, je.value === 100 && (je.value = 0), hd(), fo = window.setTimeout(() => {
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
  onOpen: R(),
  onOpened: R(),
  onClose: R(),
  onClosed: R(),
  "onUpdate:show": R()
}, {
  n: Pb,
  classes: Ob
} = re("menu");
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
    [j(e.$slots, "default"), (h(), ge(
      Ma,
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
              onClick: n[0] || (n[0] = Mn(() => {
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
  props: Tb,
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
      resize: p
    } = Zu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: me,
      n: Pb,
      classes: Ob,
      handleHostClick: l,
      handleHostMouseenter: i,
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
const Wn = bd;
Wn.install = function(e) {
  e.component(Wn.name, Wn);
};
var jS = Wn, wd = Symbol("SELECT_BIND_OPTION_KEY");
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
} = re("option");
function Nb(e, n) {
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
        onClick: n[1] || (n[1] = Mn(() => {
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
  props: Ib,
  setup(e) {
    var n = M(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: o,
      bindSelect: l
    } = Bb(), {
      wrapWidth: i,
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
    return le([() => e.label, () => e.value], v), l(g), {
      n: Eb,
      classes: Db,
      optionSelected: n,
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      handleClick: f,
      handleSelect: m
    };
  }
});
Cd.render = Nb;
const Zr = Cd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var WS = Zr, Ab = {
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
function zb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
}
var {
  n: Fl
} = re("overlay");
const Jr = ne({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Ab,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = yt(() => e.show, 1), {
      disabled: o
    } = _t(), l = () => {
      T(e.onClick), T(e["onUpdate:show"], !1);
    };
    xt(() => e.show, () => e.lockScroll);
    var i = () => J("div", Ve({
      class: Fl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [T(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return J(Ne, {
        name: Fl("--fade")
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
        return J(Ma, {
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
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var GS = Jr, Lb = {
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
  n: Rb,
  classes: Ub
} = re("pagination"), Fb = ["item-mode", "onClick"];
function Hb(e, n) {
  var r = oe("var-icon"), a = oe("var-input"), t = oe("var-cell"), o = oe("var-menu"), l = Me("ripple");
  return h(), O(
    "ul",
    {
      class: c(e.n())
    },
    [we((h(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [j(e.$slots, "prev", {}, () => [J(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
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
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleValue, i)),
          onKeydown: n[3] || (n[3] = Ui((i) => e.setPage("simple", e.simpleValue, i), ["enter"]))
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
      ze(e.pageList, (i, s) => we((h(), O(
        "li",
        {
          key: e.toNumber(i) + s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [be(
          ae(i),
          1
          /* TEXT */
        )],
        10,
        Fb
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), we((h(), O(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [j(e.$slots, "next", {}, () => [J(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
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
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: fe(() => [(h(!0), O(
            Oe,
            null,
            ze(e.sizeOption, (i, s) => we((h(), ge(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: fe(() => [be(
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
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.inputValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.inputValue, i)),
          onKeydown: n[9] || (n[9] = Ui((i) => e.setPage("quick", e.inputValue, i), ["enter"]))
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
    VarMenu: Wn,
    VarIcon: $e,
    VarCell: ir,
    VarInput: cr
  },
  directives: {
    Ripple: Re
  },
  props: Lb,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(L(e.current) || 1), i = M(L(e.size) || 10), s = M([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(L(e.total) / L(i.value))), v = F(() => {
      var P = i.value * (l.value - 1) + 1, D = Math.min(i.value * l.value, L(e.total));
      return [P, D];
    }), f = F(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = (P, D) => nn(P) ? !1 : D === 1 ? t.value : o.value, p = (P, D) => nn(P) ? "basic" : D === 1 ? "head" : "tail", g = (P, D) => {
      P === l.value || e.disabled || (nn(P) ? l.value = P : P === "prev" ? l.value > 1 && (l.value -= 1) : P === "next" ? l.value < d.value && (l.value += 1) : P === "..." && (D === 1 ? l.value = Math.max(l.value - e.maxPagerCount, 1) : l.value = Math.min(l.value + e.maxPagerCount, d.value)));
    }, b = () => {
      e.disabled || (n.value = !0);
    }, k = (P) => {
      i.value = P, n.value = !1;
    }, B = (P) => {
      var D = /^[1-9][0-9]*$/;
      return D.test(P);
    }, w = (P, D, C) => {
      if (C.target.blur(), B(D)) {
        var E = L(D);
        E > d.value && (E = d.value, a.value = "" + E), E !== l.value && (l.value = E);
      }
      P === "quick" && (r.value = ""), P === "simple" && !B(D) && (a.value = "" + l.value);
    };
    return le([() => e.current, () => e.size], (P) => {
      var [D, C] = P;
      l.value = L(D) || 1, i.value = L(C || 10);
    }), le([l, i, d], (P, D) => {
      var [C, E, $] = P, [I, V] = D, y = [], {
        maxPagerCount: S,
        total: H,
        onChange: Q
      } = e, _ = Math.ceil(L(H) / L(V)), W = $ - (S - u.value) - 1;
      if (a.value = "" + C, $ - 2 > S) {
        if (I === void 0 || $ !== _)
          for (var N = 2; N < S + 2; N++)
            y.push(N);
        if (C <= S && C < W) {
          y = [];
          for (var x = 1; x < S + 1; x++)
            y.push(x + 1);
          t.value = !0, o.value = !1;
        }
        if (C > S && C < W) {
          y = [];
          for (var te = 1; te < S + 1; te++)
            y.push(C + te - u.value);
          t.value = C === 2 && S === 1, o.value = !1;
        }
        if (C >= W) {
          y = [];
          for (var U = 1; U < S + 1; U++)
            y.push($ - (S - U) - 1);
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
      n: Rb,
      classes: Ub,
      pack: Ye,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: p,
      isHideEllipsis: m,
      clickItem: g,
      showMenu: b,
      clickSize: k,
      setPage: w,
      toNumber: L
    };
  }
});
Sd.render = Hb;
const Qr = Sd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var qS = Qr, Yb = {
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
  n: jb,
  classes: Wb
} = re("paper");
function Gb(e, n) {
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
  props: Yb,
  setup(e) {
    var n = (r) => {
      T(e.onClick, r);
    };
    return {
      n: jb,
      classes: Wb,
      toSizeUnit: me,
      handleClick: n
    };
  }
});
kd.render = Gb;
const _r = kd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var XS = _r;
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
  onChange: R(),
  onConfirm: R(),
  onCancel: R()
}, Je(gt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Xb,
  classes: Kb
} = re("picker"), Hl = 300, Zb = 15, Yl = 0, Jb = ["onTouchstart", "onTouchmove", "onTouchend"], Qb = ["onTransitionend"];
function _b(e, n) {
  var r = oe("var-button");
  return h(), ge(
    _a(e.dynamic ? e.n("$-popup") : e.Transition),
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
                onTouchmove: Mn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                Qb
              )],
              42,
              Jb
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
  props: qb,
  setup(e) {
    var n = M([]), r = F(() => Le(e.optionHeight)), a = F(() => Le(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), o = F(() => a.value * r.value), l = [], i = (y, S) => {
      S.scrollEl = y;
    }, s = (y) => {
      T(e["onUpdate:show"], y);
    }, u = (y) => {
      var S = r.value + t.value, H = t.value - y.column.texts.length * r.value;
      y.translate >= S && (y.translate = S), y.translate <= H && (y.translate = H);
    }, d = (y, S) => {
      var {
        length: H
      } = y.column.texts;
      return S = S >= H ? H - 1 : S, S = S <= 0 ? 0 : S, S;
    }, v = (y) => {
      var S = Math.round((t.value - y.translate) / r.value);
      return d(y, S);
    }, f = () => {
      var y = n.value.map((H) => H.column.texts[H.index]), S = n.value.map((H) => H.index);
      return {
        texts: y,
        indexes: S
      };
    }, m = function(y, S, H, Q) {
      Q === void 0 && (Q = !1);
      var _ = t.value - d(y, S) * r.value;
      _ === y.translate && (y.scrolling = !1, !Q && E(y)), y.translate = _, y.duration = H;
    }, p = (y, S, H) => {
      y.translate += Math.abs(S / H) / 3e-3 * (S < 0 ? -1 : 1);
    }, g = (y, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = mo(S.scrollEl);
    }, b = (y, S) => {
      if (S.touching) {
        var {
          clientY: H
        } = y.touches[0], Q = S.prevY !== void 0 ? H - S.prevY : 0;
        S.prevY = H, S.translate += Q, u(S);
        var _ = performance.now();
        _ - S.momentumTime > Hl && (S.momentumTime = _, S.momentumPrevY = S.translate);
      }
    }, k = (y, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var H = S.translate - S.momentumPrevY, Q = performance.now() - S.momentumTime, _ = Math.abs(H) >= Zb && Q <= Hl;
      _ && p(S, H, Q), S.index = v(S), m(S, S.index, _ ? 1e3 : 200);
    }, B = (y) => {
      y.scrolling = !1, E(y);
    }, w = (y) => y.map((S, H) => {
      var Q, _ = Ce(S) ? {
        texts: S
      } : S, W = {
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
      var S = [];
      return D(S, y, 0, !0), S;
    }, D = function(y, S, H, Q) {
      if (Q === void 0 && (Q = !1), Ce(S) && S.length) {
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
            texts: S.map((x) => x[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        y.push(N), m(N, N.index, 0, !0), D(y, N.columns[N.index].children, H + 1, Q);
      }
    }, C = (y) => {
      n.value.splice(n.value.indexOf(y) + 1), D(n.value, y.columns[y.index].children, y.columnIndex + 1);
    }, E = (y) => {
      var {
        cascade: S,
        onChange: H
      } = e;
      S && C(y);
      var Q = n.value.some((x) => x.scrolling);
      if (!Q) {
        var {
          texts: _,
          indexes: W
        } = f(), N = W.every((x, te) => x === l[te]);
        N || (l = [...W], T(H, _, W));
      }
    }, $ = () => {
      if (e.cascade) {
        var y = n.value.find((S) => S.scrolling);
        y && (y.translate = mo(y.scrollEl), y.index = v(y), m(y, y.index, 0, !0), y.scrolling = !1, C(y));
      } else
        n.value.forEach((S) => {
          S.translate = mo(S.scrollEl), S.index = v(S), m(S, S.index, 0);
        });
    }, I = () => {
      $();
      var {
        texts: y,
        indexes: S
      } = f();
      l = [...S], T(e.onConfirm, y, S);
    }, V = () => {
      $();
      var {
        texts: y,
        indexes: S
      } = f();
      l = [...S], T(e.onCancel, y, S);
    };
    return le(() => e.columns, (y) => {
      n.value = e.cascade ? P(Fi(y)) : w(Fi(y));
      var {
        indexes: S
      } = f();
      l = [...S];
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
      Transition: Ne,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: g,
      handleTouchmove: b,
      handleTouchend: k,
      handleTransitionend: B,
      confirm: I,
      cancel: V,
      dt: Jt
    };
  }
});
$d.render = _b;
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
    } = xa(mr, a, {
      onConfirm: (o, l) => {
        T(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, l) => {
        T(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
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
var KS = mr;
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
} = re("progress"), a0 = ["viewBox"], t0 = ["cx", "cy", "r", "stroke-width"], o0 = ["cx", "cy", "r", "stroke-width"];
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
          t0
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
      } = e, l = "0 0 " + Le(a) + " " + Le(a), i = L(o) > 100 ? 100 : Math.round(L(o)), s = (Le(a) - Le(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: n0,
      classes: r0,
      toSizeUnit: me,
      multiplySizeUnit: xe,
      linearProps: n,
      circleProps: r
    };
  }
});
Td.render = i0;
const xr = Td;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var ZS = xr, l0 = {
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
function jl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function s0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: Wl,
  classes: u0
} = re("pull-refresh"), Gl = 150;
function d0(e, n) {
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
  props: l0,
  setup(e) {
    var n, r, a = M(0), t = M(null), o = M(null), l = M(0), i = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = 0, f = 0, m = M(!0), p = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), g = F(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: k.value ? e.successBgColor : e.bgColor,
      color: k.value ? e.successColor : e.color
    })), b = F(() => Math.abs(2 * a.value)), k = F(() => u.value === "success"), B = () => new Promise((V) => {
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
        var y = Qt(n);
        if (!(y > 0)) {
          var S = y === 0, H = V.touches[0];
          f = H.clientY - v, S && f >= 0 && V.preventDefault(), u.value !== "pulling" && (u.value = "pulling", l.value = V.touches[0].clientY), S && i.value > a.value && w("add");
          var Q = (V.touches[0].clientY - l.value) / 2 + a.value;
          i.value = Q >= b.value ? b.value : Q, i.value >= b.value * 0.2 ? (m.value = !1, s.value = "refresh", r = B()) : s.value = "arrow-down";
        }
      }
    }, C = /* @__PURE__ */ function() {
      var V = s0(function* () {
        p.value && (d.value = !0, i.value >= b.value * 0.2 ? (yield r, u.value = "loading", i.value = b.value * 0.3, T(e["onUpdate:modelValue"], !0), T(e.onRefresh), w("remove")) : (u.value = "loosing", s.value = "arrow-down", i.value = a.value, setTimeout(() => {
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
      i.value = -(V + V * 0.25), a.value = -(V + V * 0.25);
    }, $ = () => {
      n = e.target ? ls(e.target, "PullRefresh") : Ea(t.value);
    }, I = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (V) => {
      V === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = a.value, I();
      }, L(e.successDuration)));
    }), ln(() => {
      $(), E();
    }), ka(t, "touchmove", D), {
      n: Wl,
      classes: u0,
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
      isSuccess: k
    };
  }
});
Pd.render = d0;
const ea = Pd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var JS = ea, v0 = {
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
} = re("radio");
function h0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), l = Me("hover");
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
      }], [l, e.handleHovering, "desktop"]]), z(
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
    Hover: In
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  inheritAttrs: !1,
  props: v0,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = c0(), {
      hovering: l,
      handleHovering: i
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
    }, k = (C) => {
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
      sync: k,
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
      hovering: l,
      handleHovering: i,
      n: m0,
      classes: p0,
      handleClick: b,
      toggle: P,
      reset: B,
      validate: w,
      resetValidation: m
    };
  }
});
Vd.render = h0;
const na = Vd;
na.install = function(e) {
  e.component(na.name, na);
};
var QS = na;
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: b0,
  classes: w0
} = re("radio-group");
function C0(e, n) {
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
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = bn(), u = F(() => o.value), d = (b) => {
      Be(() => {
        var {
          validateTrigger: k,
          rules: B,
          modelValue: w
        } = e;
        l(k, b, B, w);
      });
    }, v = () => r.forEach((b) => {
      var {
        sync: k
      } = b;
      return k(e.modelValue);
    }), f = (b) => {
      T(e["onUpdate:modelValue"], b), T(e.onChange, b), d("onChange");
    }, m = () => i(e.rules, e.modelValue), p = () => {
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
      n: b0,
      classes: w0,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
Md.render = C0;
const ra = Md;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var _S = ra, S0 = {
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
  n: nt
} = re("rate"), k0 = ["onClick"];
function $0(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), l = Me("hover");
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
        ze(e.toNumber(e.count), (i) => we((h(), O(
          "div",
          {
            key: i,
            style: G(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (s) => e.handleClick(i, s)
          },
          [J(
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
          k0
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
var Bd = ne({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  directives: {
    Ripple: Re,
    Hover: In
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
      resetValidation: l
    } = bn(), {
      hovering: i
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
        [nt("content")]: !0,
        [nt("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [nt("--error")]: a.value,
        [nt("--primary")]: P !== e.emptyIcon && !D
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
        emptyIcon: S
      } = e, H = E;
      return (D || n != null && n.disabled.value) && (H = C), w <= L(P) ? {
        color: H,
        name: V
      } : $ && w <= L(P) + 0.5 ? {
        color: H,
        name: y
      } : {
        color: D || n != null && n.disabled.value ? C : I,
        name: S
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
      s.value = w, i.value = P;
    }, k = () => {
      T(e["onUpdate:modelValue"], 0), l();
    }, B = {
      reset: k,
      validate: m,
      resetValidation: l
    };
    return T(r, B), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: u,
      getClass: d,
      getCurrentState: v,
      handleClick: g,
      hovering: i,
      currentHoveringValue: s,
      createHoverHandler: b,
      reset: k,
      validate: m,
      resetValidation: l,
      toSizeUnit: me,
      toNumber: L,
      n: nt
    };
  }
});
Bd.render = $0;
const aa = Bd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var xS = aa;
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
}, O0 = (e) => (Ba(""), e = e(), Ia(), e), V0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, M0 = /* @__PURE__ */ O0(() => /* @__PURE__ */ z(
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
var Id = ne({});
Id.render = I0;
const E0 = Id;
var D0 = (e) => (Ba(""), e = e(), Ia(), e), N0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, A0 = /* @__PURE__ */ D0(() => /* @__PURE__ */ z(
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
var Ed = ne({});
Ed.render = L0;
const R0 = Ed;
var U0 = (e) => (Ba(""), e = e(), Ia(), e), F0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, H0 = /* @__PURE__ */ U0(() => /* @__PURE__ */ z(
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
var Dd = ne({});
Dd.render = j0;
const W0 = Dd;
var {
  n: G0,
  classes: q0
} = re("result");
function X0(e, n) {
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
      n: G0,
      classes: q0,
      toNumber: L
    };
  }
});
Nd.render = X0;
const K0 = Nd;
var Z0 = (e) => (Ba(""), e = e(), Ia(), e), J0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Q0 = /* @__PURE__ */ Z0(() => /* @__PURE__ */ z(
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
var Ad = ne({});
Ad.render = x0;
const e1 = Ad;
var n1 = (e) => (Ba(""), e = e(), Ia(), e), r1 = {
  viewBox: "-4 -4 32 32"
}, a1 = /* @__PURE__ */ n1(() => /* @__PURE__ */ z(
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
var zd = ne({});
zd.render = o1;
const i1 = zd;
var {
  n: l1,
  classes: s1
} = re("result");
function u1(e, n) {
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
          _a(e.type),
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
      return "calc(" + (a ? me(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? me(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: l1,
      classes: s1,
      toNumber: L,
      toPxNum: Le,
      toSizeUnit: me,
      circleSize: n,
      borderSize: r
    };
  }
});
Ld.render = u1;
const ta = Ld;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var ek = ta;
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
  onClick: R()
}, {
  n: c1,
  classes: m1
} = re("row");
function p1(e, n) {
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
    }, l = (s) => {
      T(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(i), {
      n: c1,
      classes: m1,
      average: t,
      handleClick: l,
      padStartFlex: Lt
    };
  }
});
Rd.render = p1;
const oa = Rd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var nk = oa;
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
  onFocus: R(),
  onBlur: R(),
  onClick: R(),
  onClear: R(),
  onClose: R(),
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: yo,
  classes: y1
} = re("select"), b1 = {
  key: 1
};
function w1(e, n) {
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
            "onUpdate:show": n[1] || (n[1] = (l) => e.isFocus = l),
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
                      ze(e.labels, (l) => (h(), ge(
                        r,
                        {
                          class: c(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: l,
                          onClick: n[0] || (n[0] = Mn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(l)
                        },
                        {
                          default: fe(() => [be(
                            ae(l),
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
                  b1,
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
    VarMenu: Wn,
    VarChip: sr,
    VarFormDetails: We
  },
  props: g1,
  setup(e) {
    var n = M(null), r = M(!1), a = F(() => e.multiple), t = F(() => e.focusColor), o = M(""), l = M([]), i = F(() => zn(e.modelValue)), s = M("0px"), u = M(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: m,
      bindOptions: p
    } = Mb(), {
      errorMessage: g,
      validateWithTrigger: b,
      validate: k,
      // expose
      resetValidation: B
    } = bn(), w = M(null), P = () => {
      var {
        multiple: K,
        modelValue: A
      } = e;
      if (K) {
        var Y = A;
        l.value = Y.map(E);
      }
      !K && !zn(A) && (o.value = E(A)), !K && zn(A) && (o.value = "");
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
      if (!K && !zn(A))
        return yo("--placeholder-hidden");
      if (K && (!zn(A) || r.value))
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
    }, S = (K) => {
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
    }, te = () => k(e.rules, e.modelValue), U = () => {
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
      onSelect: S,
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
      labels: l,
      isEmptyModelValue: i,
      menuEl: w,
      n: yo,
      classes: y1,
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
Ud.render = w1;
const ia = Ud;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var rk = ia, C1 = {
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
} = re("skeleton");
function $1(e, n) {
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
  props: C1,
  setup() {
    return {
      n: S1,
      classes: k1,
      toSizeUnit: me,
      toNumber: L
    };
  }
});
Fd.render = $1;
const la = Fd;
la.install = function(e) {
  e.component(la.name, la);
};
var ak = la;
function T1(e) {
  return ["always", "normal", "never"].includes(e);
}
var De;
(function(e) {
  e.First = "1", e.Second = "2";
})(De || (De = {}));
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
  onChange: R(),
  onStart: R(),
  onEnd: R(),
  "onUpdate:modelValue": R()
}, {
  n: ql,
  classes: O1
} = re("slider"), V1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function M1(e, n) {
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
            onTouchstart: Mn((l) => e.start(l, o.enumValue), ["stop"]),
            onTouchmove: Mn((l) => e.move(l, o.enumValue), ["stop"]),
            onTouchend: (l) => e.end(o.enumValue),
            onTouchcancel: (l) => e.end(o.enumValue)
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
          ), [[t, (l) => e.hover(l, o), "desktop"]]), z(
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
          V1
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
    Hover: In
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
      resetValidation: l
    } = bn(), {
      hovering: i,
      handleHovering: s
    } = hr(), {
      hovering: u,
      handleHovering: d
    } = hr(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), m = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), p = M(null), g = M(0), b = M(!1), k = Ee({
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
        hovering: Ha(i),
        handleHovering: s
      }, {
        value: I(A[1]),
        enumValue: De.Second,
        text: V(A[1]),
        hovering: Ha(u),
        handleHovering: d
      }] : nn(A) && (X = [{
        value: I(A),
        enumValue: De.First,
        text: V(A),
        hovering: Ha(i),
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
    }), C = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), E = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), $ = (A) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : k[A].active, I = (A) => {
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
    }, S = (A, Y) => {
      var X = [], {
        step: de,
        range: pe,
        modelValue: Ae,
        onChange: Ie,
        min: Ze
      } = e, Sn = L(de), Nn = Math.round(A / w.value), Ge = Nn * Sn + L(Ze), cn = k[Y].percentValue * Sn + L(Ze);
      if (k[Y].percentValue = Nn, pe && Ce(Ae) && (X = Y === De.First ? [Ge, Ae[1]] : [Ae[0], Ge]), cn !== Ge) {
        var wt = pe ? X.map((Ct) => V(Ct)) : V(Ge);
        T(Ie, wt), T(e["onUpdate:modelValue"], wt), m();
      }
    }, H = (A) => {
      if (!e.range)
        return De.First;
      var Y = k[De.First].percentValue * w.value, X = k[De.Second].percentValue * w.value, de = Math.abs(A - Y), pe = Math.abs(A - X);
      return de <= pe ? De.First : De.Second;
    }, Q = (A, Y) => {
      g.value || (g.value = p.value.offsetWidth), C.value || (k[Y].active = !0), !(C.value || E.value) && (T(e.onStart), b.value = !0, k[Y].startPosition = A.touches[0].clientX);
    }, _ = (A, Y) => {
      if (!(C.value || E.value || !b.value)) {
        var X = A.touches[0].clientX - k[Y].startPosition + k[Y].currentLeft;
        X <= 0 ? X = 0 : X >= g.value && (X = g.value), S(X, Y);
      }
    }, W = (A) => {
      var {
        range: Y,
        modelValue: X,
        onEnd: de,
        step: pe,
        min: Ae
      } = e;
      if (C.value || (k[A].active = !1), !(C.value || E.value)) {
        var Ie = [];
        k[A].currentLeft = k[A].percentValue * w.value;
        var Ze = k[A].percentValue * L(pe) + L(Ae);
        Y && Ce(X) && (Ie = A === De.First ? [Ze, X[1]] : [X[0], Ze]), T(de, Y ? Ie : Ze), b.value = !1;
      }
    }, N = (A) => {
      if (!(C.value || E.value) && !A.target.closest("." + ql("thumb"))) {
        var Y = A.clientX - Mv(A.currentTarget), X = H(Y);
        S(Y, X), W(X);
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
      e.range && Ce(A) ? (k[De.First].percentValue = X(A[0]), k[De.First].currentLeft = k[De.First].percentValue * w.value, k[De.Second].percentValue = X(A[1]), k[De.Second].currentLeft = k[De.Second].percentValue * w.value) : nn(A) && (k[De.First].currentLeft = X(A) * w.value);
    }, Z = () => {
      var A = e.range ? [0, 0] : 0;
      T(e["onUpdate:modelValue"], A), l();
    }, K = {
      reset: Z,
      validate: v,
      resetValidation: l
    };
    return T(n, K), le([() => e.modelValue, () => e.step], (A) => {
      var [Y, X] = A;
      !x() || !te() || b.value || U(Y, L(X));
    }), le(g, () => U()), ln(() => {
      !x() || !te() || (g.value = p.value.offsetWidth);
    }), {
      n: ql,
      classes: O1,
      Thumbs: De,
      sliderEl: p,
      getFillStyle: D,
      isDisabled: C,
      errorMessage: a,
      thumbsProps: k,
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
Hd.render = M1;
const sa = Hd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var tk = sa;
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
  n: E1,
  classes: D1
} = re("snackbar"), N1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function A1(e, n) {
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
    } = yt(() => e.show, 1);
    xt(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? N1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && T(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (l) => {
      l ? (T(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), T(e.onClose));
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
} = re("snackbar");
function L1(e, n) {
  var r = oe("var-snackbar-core");
  return h(), ge(
    Ma,
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
      n: z1,
      disabled: e
    };
  }
});
Gd.render = L1;
const ua = Gd;
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
function R1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !pt(e);
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
}, yn = Ee([]), zi = Xd, U1 = {
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
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ka && (a.position = "top");
        var l = Ka ? "relative" : "absolute", i = ct({
          position: l
        }, q1(a.position));
        return J(Wd, Ve(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return J(Sv, Ve(U1, {
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
}, qn = function(e) {
  var n = W1(e), r = Ee(ct({}, zi, n));
  r.show = !0, li || (li = !0, qd = xa(F1).unmountInstance);
  var {
    length: a
  } = yn, t = {
    id: Xl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ka)
    j1(t);
  else {
    var o = "update-" + Xl;
    G1(r, o);
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
function H1(e) {
  var n = e.getAttribute("data-id"), r = yn.find((a) => a.id === L(n));
  r && T(r.reactiveSnackOptions.onOpened);
}
function Y1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = yn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, T(r.reactiveSnackOptions.onClosed));
  var a = yn.every((t) => t.animationEnd);
  a && (T(qd), yn = Ee([]), li = !1);
}
function j1(e) {
  yn.push(e);
}
function W1(e) {
  return e === void 0 && (e = {}), Ke(e) ? {
    content: e
  } : e;
}
function G1(e, n) {
  var [r] = yn;
  r.reactiveSnackOptions = ct({}, r.reactiveSnackOptions, e), r._update = n;
}
function q1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ua.install = function(e) {
  e.component(ua.name, ua);
};
var ok = ua;
const si = qn;
var Kd = (e) => ["mini", "small", "normal", "large"].includes(e), X1 = (e) => Kd(e) || Ce(e) || nn(e) || Ke(e), K1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), Z1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), J1 = {
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
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = vn(e) + " " + n + " " + vn(e) + " 0" : i = vn(e) + " 0" : t === "space-around" ? i = vn(e) + " " + vn(n) : t === "space-between" && (o === 0 ? i = vn(e) + " " + vn(n) + " " + vn(e) + " 0" : o === l ? i = vn(e) + " 0 " + vn(e) + " " + vn(n) : i = vn(e) + " " + vn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: bo,
  classes: _1
} = re("space");
const da = ne({
  name: "VarSpace",
  props: J1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ce(t) ? t.map(me) : [me(t), me(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = T(r.default)) != null ? t : [], f = Kd(d), [m, p] = a(d, f);
      v = cs(v);
      var g = v.length - 1, b = v.map((k, B) => {
        var w = Q1(m, p, {
          direction: u,
          justify: l,
          index: B,
          lastIndex: g
        });
        return J("div", {
          style: {
            margin: w
          }
        }, [k]);
      });
      return J("div", {
        class: _1(bo(), bo("$--box"), [o, bo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Lt(l),
          alignItems: Lt(i),
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
var ik = da, x1 = {
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
} = re("step"), tw = {
  key: 3
};
function ow(e, n) {
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
            tw,
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
  props: x1,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = nw(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => l.value === a.value), m = F(() => a.value !== -1 && l.value > a.value), p = {
      index: a
    }, g = () => v(a.value), b = (k) => {
      d.value === "horizontal" && (e.value = k);
    };
    return o(p), le(i, (k) => {
      if (r.value = k - 1 === a.value, e.value) {
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
      click: g,
      getRef: b
    };
  }
});
Jd.render = ow;
const va = Jd;
va.install = function(e) {
  e.component(va.name, va);
};
var lk = va;
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
  onClickStep: R()
}, {
  n: sw
} = re("steps");
function uw(e, n) {
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
  props: lw,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: o,
      bindStep: l
    } = ew(), i = (u) => {
      T(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: sw
    };
  }
});
Qd.render = uw;
const fa = Qd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var sk = fa, dw = {
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
} = re("style-provider"), fw = ne({
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
const ca = fw;
var wo = [];
function mt(e) {
  wo.forEach((r) => document.documentElement.style.removeProperty(r)), wo.length = 0;
  var n = vs(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), wo.push(a);
  });
}
mt.Component = ca;
ca.install = function(e) {
  e.component(ca.name, ca);
};
mt.install = function(e) {
  e.component(ca.name, ca);
};
var uk = ca, cw = {
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
  n: mw,
  classes: pw
} = re("switch");
function hw(e, n) {
  var r = oe("var-loading"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = Me("ripple"), l = Me("hover");
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
  )), [[l, e.hover, "desktop"]]);
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
    Hover: In
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
      resetValidation: l
    } = bn(), {
      hovering: i,
      handleHovering: s
    } = hr(), u = () => o(e.rules, e.modelValue), d = () => Be(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = F(() => {
      var {
        size: k,
        modelValue: B,
        color: w,
        closeColor: P,
        loadingColor: D,
        activeValue: C
      } = e;
      return {
        handle: {
          width: xe(k),
          height: xe(k),
          backgroundColor: B === C ? w : P,
          color: D
        },
        ripple: {
          left: B === C ? xe(k, 0.5) : "-" + xe(k, 0.5),
          color: B === C ? w : P || "#999",
          width: xe(k, 2),
          height: xe(k, 2)
        },
        track: {
          height: xe(k, 0.72),
          width: xe(k, 1.9),
          borderRadius: xe(k, 2 / 3),
          filter: B === C || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: B === C ? w : P
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
      if (T(B, k), !(P || D || C || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var y = E === $ ? I : $;
        T(w, y), T(V, y), d();
      }
    }, p = (k) => {
      e.disabled || r != null && r.disabled.value || s(k);
    }, g = () => {
      T(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, b = {
      reset: g,
      validate: u,
      resetValidation: l
    };
    return T(n, b), {
      n: mw,
      classes: pw,
      switchActive: m,
      hovering: i,
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
const ma = _d;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var dk = ma, gw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: R()
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
  n: Bt,
  classes: ww
} = re("tab");
function Cw(e, n) {
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
  props: gw,
  setup(e) {
    var n = M(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = bw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = l, g = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(g);
    var b = () => {
      var {
        disabled: w,
        name: P
      } = e;
      return w ? f.value : u.value === P || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, k = () => {
      var {
        disabled: w,
        name: P
      } = e;
      return w ? Bt("$-tab--disabled") : u.value === P || u.value === (o == null ? void 0 : o.value) ? Bt("$-tab--active") : Bt("$-tab--inactive");
    }, B = (w) => {
      var {
        disabled: P,
        name: D,
        onClick: C
      } = e;
      P || (T(C, D ?? o.value, w), s(g));
    };
    return le(() => e.name, p), le(() => e.disabled, p), {
      n: Bt,
      classes: ww,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: b,
      computeColorClass: k,
      handleClick: B
    };
  }
});
ev.render = Cw;
const pa = ev;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var vk = pa, nv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
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
} = re("tab-item");
function Ow(e, n) {
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
    VarSwipeItem: Yn
  },
  props: $w,
  setup(e) {
    var n = M(!1), r = M(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: o
    } = kw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: Tw,
      classes: Pw,
      current: n,
      initSlot: r
    };
  }
});
rv.render = Ow;
const ha = rv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var fk = ha, Vw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Mw,
  classes: Bw
} = re("table");
function Iw(e, n) {
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
  props: Vw,
  setup() {
    return {
      toSizeUnit: me,
      n: Mw,
      classes: Bw
    };
  }
});
av.render = Iw;
const ga = av;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var ck = ga;
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
  stickyCssMode: Je(At, "cssMode"),
  stickyZIndex: Je(At, "zIndex"),
  offsetTop: Je(At, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: R(),
  onChange: R(),
  "onUpdate:active": R()
};
function Zl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
var {
  n: Dw,
  classes: Nw
} = re("tabs");
function Aw(e, n) {
  return h(), ge(
    _a(e.sticky ? e.n("$-sticky") : e.Transition),
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
    VarSticky: jn
  },
  inheritAttrs: !1,
  props: Ew,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = M(null), {
      tabList: m,
      bindTabList: p,
      length: g
    } = yw(), b = (V) => {
      var y, S = (y = V.name.value) != null ? y : V.index.value, {
        active: H,
        onChange: Q,
        onClick: _
      } = e;
      T(e["onUpdate:active"], S), T(_, S), S !== H && T(Q, S);
    }, k = () => m.find((V) => {
      var {
        name: y
      } = V;
      return e.active === y.value;
    }), B = (V) => m.find((y) => {
      var {
        index: S
      } = y;
      return (V ?? e.active) === S.value;
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
      } = V, S = y.value;
      S && (e.layoutDirection === "horizontal" ? (n.value = S.offsetWidth + "px", a.value = S.offsetLeft + "px") : (r.value = S.offsetHeight + "px", t.value = S.offsetTop + "px"));
    }, C = (V) => {
      var {
        element: y
      } = V;
      if (o.value) {
        var S = l.value, H = y.value;
        if (e.layoutDirection === "horizontal") {
          var Q = H.offsetLeft + H.offsetWidth / 2 - S.offsetWidth / 2;
          st(S, {
            left: Q,
            animation: So
          });
        } else {
          var _ = H.offsetTop + H.offsetHeight / 2 - S.offsetHeight / 2;
          st(S, {
            top: _,
            animation: So
          });
        }
      }
    }, E = () => {
      var V = k() || B() || w();
      !V || V.disabled.value || (P(), D(V), C(V));
    }, $ = /* @__PURE__ */ function() {
      var V = Jl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), I = {
      active: i,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: E,
      onTabClick: b
    };
    return p(I), le(() => g.value, /* @__PURE__ */ Jl(function* () {
      yield Bn(), E();
    })), le(() => e.active, E), ka(window, "resize", E), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: l,
      Transition: Ne,
      toSizeUnit: me,
      n: Dw,
      classes: Nw,
      resize: E,
      resizeSticky: $
    };
  }
});
tv.render = Aw;
const ya = tv;
ya.install = function(e) {
  e.component(ya.name, ya);
};
var mk = ya, zw = {
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
function Ql(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Lw(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
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
  n: Rw
} = re("tabs-items");
function Uw(e, n) {
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
    VarSwipe: Hn
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
    }), l = (f) => r.find((m) => {
      var {
        index: p
      } = m;
      return f === p.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var m, p = i(f);
      p && (r.forEach((g) => {
        var {
          setCurrent: b
        } = g;
        return b(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((b) => {
        var {
          index: k
        } = b;
        return k.value === f;
      }), g = (m = p.name.value) != null ? m : p.index.value;
      T(e["onUpdate:active"], g);
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
const ba = ov;
ba.install = function(e) {
  e.component(ba.name, ba);
};
var pk = ba;
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
var pn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], _l = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
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
    hour: l,
    max: i,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Li(t, o, l), f = !1, m = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: p,
      minute: g
    } = an(i);
    f = p === v && a > g;
  }
  if (!i && s) {
    var {
      hour: b,
      minute: k
    } = an(s);
    f = b === v && a < k;
  }
  if (i && s) {
    var {
      hour: B,
      minute: w
    } = an(i), {
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
    hour: l,
    minute: i,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Li(t, o, l), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: g,
      minute: b,
      second: k
    } = an(s);
    m = g === f && b < i || b === i && a > k;
  }
  if (!s && u) {
    var {
      hour: B,
      minute: w,
      second: P
    } = an(u);
    m = B === f && w > i || w === i && a > P;
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
    m = D === f && C < i || $ === f && I > i || D === f && C === i && a > E || $ === f && I === i && a < V;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: $C,
  classes: TC
} = re("time-picker");
function PC(e, n) {
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
    } = n, a = M(null), t = M([]), o = M([]), l = F(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = F(() => {
      if (e.rad !== void 0) {
        var b = e.rad / 30;
        return b >= 0 ? b : b + 12;
      }
    }), s = F(() => e.type === "hour" ? pn : _l), u = (b, k) => {
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
      return k && e.type === "minute" && Reflect.deleteProperty(P, "minute"), w(P);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var b = e.isInner ? en[i.value] : s.value[i.value];
      return s.value === _l ? u() ? "#bdbdbd" : e.color : f(b) ? "#bdbdbd" : e.color;
    }, v = (b, k) => k ? i.value === b && e.isInner : i.value === b && (!e.isInner || e.type !== "hour"), f = (b) => {
      if (e.type === "hour") {
        if (iv(e.format, e.ampm))
          return t.value.includes(b);
        var k = pn.findIndex((B) => B === b);
        return o.value.includes(k);
      }
      return u(b, !0);
    }, m = (b, k, B) => {
      var w = 2 * Math.PI / 12 * b - Math.PI / 2, P = 50 * (1 + Math.cos(w)), D = 50 * (1 + Math.sin(w)), C = () => v(b, B) ? f(k) ? {
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
        height: k
      } = a.value.getBoundingClientRect();
      return {
        width: b,
        height: k
      };
    }, g = () => {
      if (i.value !== void 0) {
        var b = e.ampm === "am" ? pn : en;
        return Sa(b[i.value], 2, "0");
      }
    };
    return le([i, () => e.isInner], (b, k) => {
      var [B, w] = b, [P, D] = k, C = B === P && w === D;
      if (!(C || e.type !== "hour" || i.value === void 0)) {
        var E = w ? en[i.value] : g(), $ = e.useSeconds ? ":" + e.time.second : "", I = E + ":" + e.time.minute + $;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), le(() => e.rad, (b, k) => {
      if (!(e.type === "hour" || b === void 0 || k === void 0)) {
        var B = b / 6 >= 0 ? b / 6 : b / 6 + 60, w = k / 6 >= 0 ? k / 6 : k / 6 + 60;
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
      var [k, B, w] = b;
      if (t.value = [], k && !B) {
        var {
          hour: P
        } = an(k), D = pn.filter((N) => L(N) > P), C = en.filter((N) => L(N) > P);
        t.value = [...D, ...C];
      }
      if (!k && B) {
        var {
          hour: E
        } = an(B), $ = pn.filter((N) => L(N) < E), I = en.filter((N) => L(N) < E);
        t.value = [...$, ...I];
      }
      if (k && B) {
        var {
          hour: V
        } = an(k), {
          hour: y
        } = an(B), S = pn.filter((N) => L(N) < y || L(N) > V), H = en.filter((N) => L(N) < y || L(N) > V);
        t.value = [...S, ...H];
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
      n: $C,
      classes: TC,
      hours24: en,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: m,
      activeItemIndex: i
    };
  }
});
uv.render = PC;
const OC = uv;
var {
  n: VC,
  classes: MC
} = re("time-picker"), BC = (e) => (Ba(""), e = e(), Ia(), e), IC = /* @__PURE__ */ BC(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), EC = {
  key: 0
};
function DC(e, n) {
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
        ), IC, z(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ae(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), O("span", EC, ":")) : ee("v-if", !0), e.useSeconds ? (h(), O(
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
    Clock: OC
  },
  props: kC,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), p = M(!1), g = M(!1), b = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), k = Ee({
      x: 0,
      y: 0
    }), B = Ee({
      x: [],
      y: []
    }), w = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), P = (U) => {
      T(e["onUpdate:modelValue"], U), T(e.onChange, U);
    }, D = (U) => U * 57.29577951308232, C = (U) => {
      i.value = !1, g.value = !1, f.value = U;
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
    }, S = () => {
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
      l.value = I(U, Z);
      var Y = Math.round(K / 30) * 30 + 90, X = y(Y), de = t.value ? pn[X] : en[X];
      if (A.includes(de) || (t.value = e.format === "24hr" ? I(U, Z) : !1), t.value === l.value) {
        var pe = t.value || m.value === "pm" ? en[X] : pn[X];
        p.value = A.includes(pe), !p.value && (u.value = Y, i.value = !0);
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
      if (k.x = U + K / 2, k.y = Z + A / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: Y,
          rangeXMax: X,
          rangeYMin: de,
          rangeYMax: pe
        } = S();
        B.x = [Y, X], B.y = [de, pe];
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
        if (f.value === "hour" && i.value) {
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
      n: VC,
      classes: MC,
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
dv.render = DC;
const wa = dv;
wa.install = function(e) {
  e.component(wa.name, wa);
};
var gk = wa, NC = {
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
function xl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function es(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        xl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        xl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: AC,
  classes: zC
} = re("uploader"), LC = 0, RC = ["onClick"], UC = ["onClick"], FC = ["src", "alt"], HC = ["multiple", "accept", "capture", "disabled"], YC = ["src"];
function jC(e, n) {
  var r = oe("var-icon"), a = oe("var-hover-overlay"), t = oe("var-form-details"), o = oe("var-popup"), l = Me("ripple"), i = Me("hover");
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
              onClick: Mn((u) => e.handleRemove(s), ["stop"])
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
            UC
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
            FC
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
          RC
        )), [[l, {
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
          HC
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
      )), [[l, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }], [i, e.handleHovering, "desktop"]]) : ee("v-if", !0)],
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
            YC
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
    Hover: In
  },
  components: {
    VarIcon: $e,
    VarPopup: hn,
    VarFormDetails: We,
    VarHoverOverlay: tn
  },
  props: NC,
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
      bindForm: l
    } = wn(), {
      errorMessage: i,
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
          Vn(Z);
          return;
        }
        Ke(Z) && ji(Z) && (a.value = N, r.value = !0);
      }
    }, g = (N) => ({
      id: LC++,
      url: "",
      cover: "",
      name: N.name,
      file: N
    }), b = (N) => {
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
    }), B = (N) => N.map(k), w = (N) => {
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
          var Ze = yield Promise.all(B(Ie)), Sn = yield Promise.all(w(Ze)), Nn = Sn.filter((Ge) => {
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
          T(e["onUpdate:modelValue"], [...Z, ...Nn]), x.target.value = "", Nn.forEach((Ge) => T(A, Ee(Ge)));
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
          T(A, Ee(x)), S("onRemove"), T(e["onUpdate:modelValue"], X);
        }
      });
      return function(te) {
        return N.apply(this, arguments);
      };
    }(), C = () => e.modelValue.filter((N) => N.state === "success"), E = () => e.modelValue.filter((N) => N.state === "error"), $ = () => e.modelValue.filter((N) => N.state === "loading"), I = () => {
      n.value.click();
    }, V = () => {
      a.value = null, r.value = !1, Vn.close();
    }, y = {
      getSuccess: C,
      getError: E,
      getLoading: $
    }, S = (N) => {
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
    return T(l, W), le(() => e.modelValue, () => {
      !H && S("onChange"), H = !1;
    }, {
      deep: !0
    }), {
      n: AC,
      classes: zC,
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
vv.render = jC;
const Ca = vv;
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var yk = Ca;
const WC = "2.9.2";
function GC(e) {
  $a.install && e.use($a), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), or.install && e.use(or), Or.install && e.use(Or), Vr.install && e.use(Vr), Mr.install && e.use(Mr), Br.install && e.use(Br), Xe.install && e.use(Xe), Ir.install && e.use(Ir), Er.install && e.use(Er), ir.install && e.use(ir), lr.install && e.use(lr), Dr.install && e.use(Dr), sr.install && e.use(sr), Nr.install && e.use(Nr), Ar.install && e.use(Ar), zr.install && e.use(zr), fn.install && e.use(fn), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Fr.install && e.use(Fr), Ta.install && e.use(Ta), Hr.install && e.use(Hr), Yr.install && e.use(Yr), jr.install && e.use(jr), Fn.install && e.use(Fn), We.install && e.use(We), In.install && e.use(In), tn.install && e.use(tn), $e.install && e.use($e), Wr.install && e.use(Wr), Vn.install && e.use(Vn), Gr.install && e.use(Gr), qr.install && e.use(qr), cr.install && e.use(cr), ut.install && e.use(ut), Xr.install && e.use(Xr), Kr.install && e.use(Kr), Tn.install && e.use(Tn), ti.install && e.use(ti), Mo.install && e.use(Mo), Wn.install && e.use(Wn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), Va.install && e.use(Va), hn.install && e.use(hn), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), Re.install && e.use(Re), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), si.install && e.use(si), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), jn.install && e.use(jn), mt.install && e.use(mt), Hn.install && e.use(Hn), Yn.install && e.use(Yn), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), di.install && e.use(di), wa.install && e.use(wa), vr.install && e.use(vr), Ca.install && e.use(Ca);
}
const bk = {
  version: WC,
  install: GC,
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
  Form: Fn,
  FormDetails: We,
  Hover: In,
  HoverOverlay: tn,
  Icon: $e,
  Image: Wr,
  ImagePreview: Vn,
  IndexAnchor: Gr,
  IndexBar: qr,
  Input: cr,
  Lazy: ut,
  Link: Xr,
  List: Kr,
  Loading: Tn,
  LoadingBar: ti,
  Locale: Mo,
  Menu: Wn,
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
  Sticky: jn,
  StyleProvider: mt,
  Swipe: Hn,
  SwipeItem: Yn,
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
  Fn as Form,
  We as FormDetails,
  In as Hover,
  tn as HoverOverlay,
  $e as Icon,
  Wr as Image,
  Vn as ImagePreview,
  Gr as IndexAnchor,
  qr as IndexBar,
  cr as Input,
  ut as Lazy,
  Xr as Link,
  Kr as List,
  Tn as Loading,
  ti as LoadingBar,
  Mo as Locale,
  Wn as Menu,
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
  jn as Sticky,
  mt as StyleProvider,
  Hn as Swipe,
  Yn as SwipeItem,
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
  nr as loadingProps,
  Tb as menuProps,
  ks as merge,
  Ib as optionProps,
  Ab as overlayProps,
  Ye as pack,
  Ss as packs,
  Lb as paginationProps,
  Yb as paperProps,
  qb as pickerProps,
  gt as popupProps,
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
  At as stickyProps,
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
  hr as useHoverOverlay,
  gi as useLocale,
  WC as version,
  hi as zhCN
};
