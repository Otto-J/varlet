import { reactive as Be, onMounted as Gt, nextTick as Me, onActivated as qa, isRef as mv, watch as ie, onBeforeUnmount as qt, onDeactivated as pr, unref as Ra, inject as pv, getCurrentInstance as Xa, computed as U, provide as hv, isVNode as ft, Comment as gv, Fragment as Oe, ref as I, createApp as yv, h as ns, onBeforeMount as bv, onUnmounted as Ka, defineComponent as ee, createVNode as Q, Teleport as Ta, Transition as Ee, withDirectives as we, vShow as fr, mergeProps as Ve, openBlock as h, createBlock as ge, resolveDynamicComponent as Za, normalizeClass as c, normalizeStyle as q, resolveComponent as te, resolveDirective as Ne, withCtx as ve, createElementVNode as A, renderSlot as W, toDisplayString as re, createElementBlock as P, renderList as Ae, createCommentVNode as x, onUpdated as Xt, createTextVNode as be, pushScopeId as Pa, popScopeId as Oa, withModifiers as Mn, normalizeProps as vi, guardReactiveProps as rs, vModelText as wv, toRefs as Cv, withKeys as Ui, toRaw as Fi, TransitionGroup as Sv } from "vue";
var as = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, XC = Be(as);
const fn = Be(as), Ze = (e) => typeof e == "string", Co = (e) => typeof e == "boolean", rn = (e) => typeof e == "number", fi = (e) => Object.prototype.toString.call(e) === "[object Object]", kv = (e) => typeof e == "object" && e !== null, ci = (e) => typeof e == "function", Ce = (e) => Array.isArray(e), $v = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ze(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Co(e) ? Number(e) : e, Dt = (e, n) => {
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
}, ct = () => typeof window < "u", Yi = (e) => [...new Set(e)], ts = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Tv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Pv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Hi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ji = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Ov = (e) => {
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
      this.has(r) && Dt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, So = (e) => e, Wi = (e) => Math.pow(e, 3), os = (e) => e < 0.5 ? Wi(e * 2) / 2 : 1 - Wi((1 - e) * 2) / 2, Kt = (e, n) => e ?? n, is = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ya = function(e, n, r) {
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
function Va(e) {
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
    r = Va(r), n.push(r);
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
function Tn(e) {
  var n = is();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Xi(e) {
  var n = is();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Jt(e) {
  Tn(() => {
    Tn(e);
  });
}
function Bn() {
  return new Promise((e) => {
    Tn(() => {
      Tn(e);
    });
  });
}
function zv() {
  return new Promise((e) => {
    Tn(e);
  });
}
function ot(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = Zt(e), s = pi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), m = s + (a - s) * o(v);
        e.scrollTo(m, f), Tn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Tn(d);
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
function Nt(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function ln(e) {
  let n = !1;
  Gt(() => {
    e(), Me(() => {
      n = !0;
    });
  }), qa(() => {
    n && e();
  });
}
function ba(e, n, r, a = {}) {
  if (!ct())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (f) => {
    if (l || i)
      return;
    const m = Ra(f);
    m && (m.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, u = (f) => {
    if (!l || i)
      return;
    const m = Ra(f);
    m && (m.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let d;
  mv(e) && (d = ie(() => e.value, (f, m) => {
    u(m), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), i = !0;
  };
  return ln(() => {
    s(e);
  }), qt(() => {
    u(e);
  }), pr(() => {
    u(e);
  }), v;
}
function fs(e, n, r) {
  if (!ct())
    return;
  ba(document, n, (t) => {
    const o = Ra(e);
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
  const n = Xa();
  return e in n.provides;
}
function sn(e) {
  if (!Uv(e))
    return {
      index: null,
      parentProvider: null,
      bindParent: null
    };
  const n = pv(e), { childInstances: r, collect: a, clear: t } = n, o = Rv(n, ["childInstances", "collect", "clear"]), l = Xa();
  return {
    index: U(() => r.indexOf(l)),
    parentProvider: o,
    bindParent: (u) => {
      Gt(() => {
        Me().then(() => {
          a(l, u);
        });
      }), qt(() => {
        Me().then(() => {
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
      ft(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function un(e) {
  const n = Xa(), r = Be([]), a = [], t = U(() => r.length), o = () => {
    const u = Fv(n.subTree);
    r.sort((d, v) => u.indexOf(d.vnode) - u.indexOf(v.vnode));
  }, l = (u, d) => {
    r.push(u), a.push(d), o();
  }, i = (u, d) => {
    Dt(r, u), Dt(a, d);
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
function Yv(e) {
  var n = yv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Ja(e, n, r) {
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
function yn() {
  var e = I(""), n = /* @__PURE__ */ function() {
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
function Hv(e) {
  ba(window, "hashchange", e), ba(window, "popstate", e);
}
function Qt() {
  var e = I(!1);
  return qa(() => {
    e.value = !1;
  }), pr(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
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
function At() {
  return At = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, At.apply(this, arguments);
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
  e._ripple = At({
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
    e._ripple = At({
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
var mt = {
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
function bt(e) {
  fn.locks[e] = 1, ys();
}
function wt(e) {
  delete fn.locks[e], ys();
}
function _t(e, n) {
  var {
    uid: r
  } = Xa();
  n && ie(n, (a) => {
    a === !1 ? wt(r) : a === !0 && e() === !0 && bt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? bt(r) : wt(r));
  }), bv(() => {
    n && n() === !1 || e() === !0 && bt(r);
  }), Ka(() => {
    n && n() === !1 || e() === !0 && wt(r);
  }), qa(() => {
    n && n() === !1 || e() === !0 && bt(r);
  }), pr(() => {
    n && n() === !1 || e() === !0 && wt(r);
  });
}
function pt(e, n) {
  var r = I(fn.zIndex);
  return ie(e, (a) => {
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
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ft(e);
}
var {
  n: Dn,
  classes: po
} = ne("popup");
const pn = ee({
  name: "VarPopup",
  inheritAttrs: !1,
  props: mt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = pt(() => e.show, 3), {
      disabled: o
    } = Qt(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      T(v), d && T(e["onUpdate:show"], !1);
    };
    _t(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      T(d ? e.onOpen : e.onClose);
    }), Hv(() => T(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return Q("div", {
        class: po(Dn("overlay"), d),
        style: Po({
          zIndex: t.value - 1
        }, v),
        onClick: l
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
      return Q(Ee, {
        name: Dn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [we(Q("div", {
          class: po(Dn("$--box"), Dn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && i(), Q(Ee, {
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
        return Q(Ta, {
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
} = ne("icon");
function xv(e, n) {
  return h(), ge(
    Za(e.isURL(e.name) ? "img" : "i"),
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
    var n = I(""), r = I(!1), a = /* @__PURE__ */ function() {
      var t = Jv(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
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
  onSelect: R(),
  "onUpdate:show": R()
}, Je(mt, [
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
  var e = {}, n = I({}), r = (o, l) => {
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
  pack: He,
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
  pack: He,
  add: yi,
  use: bi,
  merge: ks,
  useLocale: gi
};
const Mo = {
  zhCN: hi,
  enUS: Cs,
  packs: Ss,
  pack: He,
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
  var r = te("var-icon"), a = te("var-popup"), t = Ne("ripple");
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
      default: ve(() => [A(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [W(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: c(e.n("title"))
          },
          re(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), W(e.$slots, "actions", {}, () => [(h(!0), P(
          Oe,
          null,
          Ae(e.actions, (o) => we((h(), P(
            "div",
            {
              class: c(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
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
            )) : x("v-if", !0), A(
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
    var n = I(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        T(l, t), o && T(e["onUpdate:show"], !1);
      }
    }, a = (t) => T(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: nf,
      classes: rf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: He,
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
function wa(e) {
  return ct() ? new Promise((n) => {
    wa.close();
    var r = Be(of(e));
    r.teleport = "body", Zn = r;
    var {
      unmountInstance: a
    } = Ja(nr, r, {
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
wa.Component = nr;
nr.install = function(e) {
  e.component(nr.name, nr);
};
wa.install = function(e) {
  e.component(nr.name, nr);
};
Object.assign(wa, {
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
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: q(e.rootStyles)
    },
    [A(
      "div",
      {
        class: c(e.n("toolbar"))
      },
      [A(
        "div",
        {
          class: c(e.n("left"))
        },
        [W(e.$slots, "left"), e.titlePosition === "left" ? (h(), P(
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
      ), e.titlePosition === "center" ? (h(), P(
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
      )) : x("v-if", !0), A(
        "div",
        {
          class: c(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), P(
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
    } = n, a = I(), t = I(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = U(() => {
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
    return ln(o), Xt(o), {
      n: ff,
      classes: cf,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ts.render = mf;
const br = Ts;
br.install = function(e) {
  e.component(br.name, br);
};
var xC = br;
function _i(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xt(e) {
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
var pf = "background-image", hf = "lazy-loading", gf = "lazy-error", xi = "lazy-attempt", yf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Eo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ua = [], zt = [], Ps = Ov(100), Fe = {
  loading: Eo,
  error: Eo,
  attempt: 3,
  throttleWait: 300,
  events: yf
}, Ci = mi(ht, Fe.throttleWait);
function eo(e, n) {
  e._lazy.arg === pf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function bf(e) {
  e._lazy.loading && eo(e, e._lazy.loading), ht();
}
function wf(e) {
  e._lazy.error && eo(e, e._lazy.error), e._lazy.state = "error", ki(e), ht();
}
function Os(e, n) {
  eo(e, n), e._lazy.state = "success", ki(e), ht();
}
function Cf(e) {
  var n;
  zt.includes(e) || (zt.push(e), (n = Fe.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ci, {
      passive: !0
    });
  }));
}
function Sf() {
  zt.forEach((e) => {
    var n;
    (n = Fe.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ci);
    });
  }), zt.length = 0;
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
function ht() {
  Ua.forEach((e) => Si(e));
}
function Tf(e) {
  return No.apply(this, arguments);
}
function No() {
  return No = xt(function* (e) {
    !Ua.includes(e) && Ua.push(e), Iv(e).forEach(Cf), yield Si(e);
  }), No.apply(this, arguments);
}
function ki(e) {
  Dt(Ua, e), Ua.length === 0 && Sf();
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
      Ua.includes(e) && (yield Si(e));
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
    Vf(n), Ci = mi(ht, Fe.throttleWait), e.directive("lazy", this);
  }
}, eS = Bs;
const it = Bs;
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
  onClick: R(),
  onLoad: R(),
  onError: R()
}, {
  n: If,
  classes: Ef
} = ne("avatar"), Df = ["src", "lazy-loading", "lazy-error"], Nf = ["src"];
function Af(e, n) {
  var r = Ne("lazy");
  return h(), P(
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
    [e.src ? (h(), P(
      Oe,
      {
        key: 0
      },
      [e.lazy ? we((h(), P(
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
      )), [[r, e.src]]) : (h(), P(
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
    )) : (h(), P(
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
    Lazy: it
  },
  props: Bf,
  setup(e) {
    var n = I(null), r = I(null), a = I(1), t = () => {
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
      handleError: l,
      handleClick: i
    };
  }
});
Ds.render = Af;
const wr = Ds;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var nS = wr, zf = {
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
  return h(), P(
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
    var n = U(() => e.offset == null ? {} : {
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
const Cr = Ns;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var rS = Cr;
function Ff(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Yf(e) {
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
  n: Hf,
  classes: jf
} = ne("loading"), Wf = (e) => (Pa(""), e = e(), Oa(), e), Gf = /* @__PURE__ */ Wf(() => /* @__PURE__ */ A(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ A("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), qf = [Gf];
function Xf(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [W(e.$slots, "default"), e.loading ? (h(), P(
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
    )) : x("v-if", !0), e.isShow ? (h(), P(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [A(
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
      )) : x("v-if", !0), (h(!0), P(
        Oe,
        null,
        Ae(e.loadingTypeDict, (r, a) => (h(), P(
          Oe,
          {
            key: a
          },
          [e.type === a ? (h(), P(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), P(
              Oe,
              null,
              Ae(r, (t) => (h(), P(
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
      )), e.$slots.description || e.description ? (h(), P(
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
    }, t = U(() => T(r.default) ? e.loading : !0);
    return {
      n: Hf,
      classes: jf,
      multiplySizeUnit: en,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
As.render = Xf;
const kn = As;
kn.install = function(e) {
  e.component(kn.name, kn);
};
var aS = kn, Kf = {
  hovering: {
    type: Boolean,
    default: !0
  }
}, {
  n: Zf,
  classes: Jf
} = ne("hover-overlay");
function Qf(e, n) {
  return h(), P(
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
const Vn = zs;
Vn.install = function(e) {
  e.component(Vn.name, Vn);
};
function Lt() {
  var e = I(!1), n = (r) => {
    e.value = r;
  };
  return {
    hovering: e,
    handleHovering: n
  };
}
var tS = Vn;
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
function Ys(e, n) {
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
function Hs(e, n) {
  Ls(n.arg) || (Rs(e), e.removeEventListener("mouseenter", Us), e.removeEventListener("mouseleave", Fs));
}
function nc(e, n) {
  Hs(e, n);
}
function rc(e, n) {
  return !ci(n.value) && e._hover.hovering;
}
function ac(e, n) {
  Ys(e, n), rc(e, n) && $i(e, n.value);
}
var js = {
  mounted: Ys,
  unmounted: Hs,
  beforeUpdate: nc,
  updated: ac,
  install(e) {
    e.directive("hover", this);
  }
}, oS = js;
const Fa = js;
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
} = ne("button"), vc = ["type", "disabled"];
function fc(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = Ne("ripple"), o = Ne("hover");
  return we((h(), P(
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
    )) : x("v-if", !0), A(
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
    VarLoading: kn,
    VarHoverOverlay: Vn
  },
  directives: {
    Ripple: Re,
    Hover: Fa
  },
  props: ic,
  setup(e) {
    var n = I(!1), {
      buttonGroup: r
    } = sc(), {
      hovering: a,
      handleHovering: t
    } = Lt(), o = U(() => {
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
  onClick: R()
}, {
  n: mc,
  classes: pc
} = ne("back-top");
function hc(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), ge(
    Ta,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
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
    var n = I(!1), r = I(null), a = I(!0), t, o = (d) => {
      T(e.onClick, d);
      var v = pi(t);
      ot(t, {
        left: v,
        duration: e.duration,
        animation: os
      });
    }, l = mi(() => {
      n.value = Zt(t) >= Le(e.visibilityHeight);
    }, 200), i = () => {
      t = e.target ? ls(e.target, "BackTop") : Va(r.value);
    }, s = () => {
      t.addEventListener("scroll", l);
    }, u = () => {
      t.removeEventListener("scroll", l);
    };
    return Gt(() => {
      i(), s(), a.value = !1;
    }), qa(s), qt(u), pr(u), {
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
const Sr = Xs;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var lS = Sr;
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
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "default"), Q(
      Ee,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [we(A(
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
          )) : x("v-if", !0), W(e.$slots, "value", {}, () => [!e.icon && !e.dot ? (h(), P(
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
    var n = U(() => {
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
} = ne("bottom-navigation"), {
  n: no
} = ne("bottom-navigation-item"), el = no("--right-half-space"), nl = no("--left-half-space"), rl = no("--right-space"), Oc = {
  type: "primary"
};
function Vc(e, n) {
  var r = te("var-button");
  return h(), P(
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
    } = n, a = I(null), t = U(() => e.active), o = U(() => e.activeColor), l = U(() => e.inactiveColor), i = I({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = $c(), v = () => {
      s.value === 0 || f() || m() || p();
    }, f = () => u.find((O) => {
      var {
        name: N
      } = O;
      return t.value === N.value;
    }), m = () => u.find((O) => {
      var {
        index: N
      } = O;
      return t.value === N.value;
    }), p = () => {
      rn(t.value) && (t.value < 0 ? T(e["onUpdate:active"], 0) : t.value > s.value - 1 && T(e["onUpdate:active"], s.value - 1));
    }, y = (O) => {
      t.value !== O && (e.onBeforeChange ? g(O) : w(O));
    }, g = (O) => {
      var N = T(e.onBeforeChange, O);
      N = Ce(N) ? N : [N], Promise.all(N).then((M) => {
        M.some((C) => !C) || w(O);
      });
    }, w = (O) => {
      T(e["onUpdate:active"], O), T(e.onChange, O);
    }, V = () => {
      var O = E();
      O.forEach((N) => {
        N.classList.remove(el, nl, rl);
      });
    }, k = (O) => {
      var N = E(), M = N.length, C = O % 2 === 0;
      N.forEach((S, j) => {
        $(C, S, j, M);
      });
    }, $ = (O, N, M, C) => {
      var S = M === C - 1;
      if (!O && S) {
        N.classList.add(rl);
        return;
      }
      var j = M === C / 2 - 1, _ = M === C / 2;
      j ? N.classList.add(el) : _ && N.classList.add(nl);
    }, E = () => Array.from(a.value.querySelectorAll("." + no())), b = () => {
      T(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (O) => {
      i.value = Ro({}, Oc, O);
    }, {
      immediate: !0,
      deep: !0
    }), ln(() => {
      r.fab && k(s.value);
    }), Xt(() => {
      V(), r.fab && k(s.value);
    }), {
      n: Tc,
      classes: Pc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: b,
      fabProps: i
    };
  }
});
Js.render = Vc;
const kr = Js;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var uS = kr, Mc = {
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
} = ne("bottom-navigation-item"), Dc = {
  type: "danger",
  dot: !0
};
function Nc(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Ne("ripple");
  return we((h(), P(
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
    )) : x("v-if", !0), A(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (h(), P(
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
    var n = U(() => e.name), r = U(() => e.badge), a = I({}), {
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
    return l(d), ie(() => r.value, (m) => {
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
const $r = Qs;
$r.install = function(e) {
  e.component($r.name, $r);
};
var dS = $r, Ac = {
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
} = ne("breadcrumb");
function Fc(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [A(
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
      return [A(
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
    } = Lc(), t = U(() => n.value === r.length.value - 1), o = U(() => r.separator.value), l = (i) => {
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
const Tr = xs;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var vS = Tr, Yc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Hc
} = ne("breadcrumbs");
function jc(e, n) {
  return h(), P(
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
  props: Yc,
  setup(e) {
    var n = U(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = zc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Hc
    };
  }
});
eu.render = jc;
const Pr = eu;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var fS = Pr;
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
  return h(), P(
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
      elevation: U(() => e.elevation),
      type: U(() => e.type),
      size: U(() => e.size),
      color: U(() => e.color),
      textColor: U(() => e.textColor),
      mode: U(() => e.mode)
    };
    return n(r), {
      n: Kc,
      classes: Zc
    };
  }
});
nu.render = Jc;
const Or = nu;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var cS = Or;
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
} = ne("card"), nm = 500, rm = ["src", "alt"];
function am(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Ne("ripple");
  return we((h(), P(
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
    [A(
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
      [W(e.$slots, "image", {}, () => [e.src ? (h(), P(
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
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: c(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          re(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          re(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          re(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), P(
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
      ), e.showFloatingButtons ? (h(), P(
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
    ), A(
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
    var n = I(null), r = I(null), a = I("auto"), t = I("auto"), o = I("100%"), l = I("100%"), i = I("auto"), s = I("auto"), u = I(void 0), d = I("hidden"), v = I("0px"), f = I("0"), m = U(() => e.layout === "row"), p = I(!1), y = I(!1), {
      zIndex: g
    } = pt(() => e.floating, 1);
    _t(() => e.floating, () => !m.value);
    var w = "auto", V = "auto", k = null, $ = I(null), E = /* @__PURE__ */ function() {
      var N = tl(function* () {
        clearTimeout($.value), clearTimeout(k), $.value = null, $.value = setTimeout(/* @__PURE__ */ tl(function* () {
          var {
            width: M,
            height: C,
            left: S,
            top: j
          } = n.value.getBoundingClientRect();
          a.value = pe(M), t.value = pe(C), o.value = a.value, l.value = t.value, i.value = pe(j), s.value = pe(S), u.value = "fixed", w = i.value, V = s.value, p.value = !0, yield Bn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? nm : 0);
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), b = () => {
      clearTimeout(k), clearTimeout($.value), $.value = null, o.value = a.value, l.value = t.value, i.value = w, s.value = V, v.value = "0px", f.value = "0", p.value = !1, k = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", w = "auto", V = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      T(e["onUpdate:floating"], !1);
    }, O = (N) => {
      T(e.onClick, N);
    };
    return ie(() => e.floating, (N) => {
      m.value || Me(() => {
        N ? E() : b();
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
      floater: $,
      floaterWidth: o,
      floaterHeight: l,
      floaterTop: i,
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
      handleClick: O
    };
  }
});
ru.render = am;
const Vr = ru;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var mS = Vr, tm = {
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
} = ne("cell");
function lm(e, n) {
  var r = te("var-icon"), a = Ne("ripple");
  return we((h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "icon", {}, () => [e.icon ? (h(), P(
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
    )) : x("v-if", !0)]), A(
      "div",
      {
        class: c(e.n("content"))
      },
      [W(e.$slots, "default", {}, () => [e.title ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("title"), e.titleClass))
        },
        re(e.title),
        3
        /* TEXT, CLASS */
      )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), P(
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
    ), e.$slots.extra ? (h(), P(
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
    var n = U(() => e.borderOffset == null ? {} : {
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
    Ee,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n())
        },
        [A(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [Q(
            Ee,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (h(), P(
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
        ), A(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [Q(
            Ee,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (h(), P(
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
function bn() {
  var {
    parentProvider: e,
    index: n,
    bindParent: r
  } = sn(iu), a = Xa(), t = r ? (o) => {
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
  var r = te("var-icon"), a = te("var-form-details"), t = Ne("ripple");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [we((h(), P(
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
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
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
var lu = ee({
  name: "VarCheckbox",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: cm,
  setup(e) {
    var n = I(!1), r = U(() => n.value === e.checkedValue), a = U(() => e.checkedValue), t = I(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = pm(), {
      form: i,
      bindForm: s
    } = bn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = yn(), m = (b) => {
      Me(() => {
        var {
          validateTrigger: D,
          rules: O,
          modelValue: N
        } = e;
        d(D, b, O, N);
      });
    }, p = (b) => {
      n.value = b;
      var {
        checkedValue: D,
        onChange: O
      } = e;
      T(e["onUpdate:modelValue"], n.value), T(O, n.value), m("onChange"), b === D ? o == null || o.onChecked(D) : o == null || o.onUnchecked(D);
    }, y = (b) => {
      var {
        disabled: D,
        readonly: O,
        checkedValue: N,
        uncheckedValue: M,
        onClick: C
      } = e;
      if (!(i != null && i.disabled.value || D) && (T(C, b), !(i != null && i.readonly.value || O))) {
        t.value = !0;
        var S = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && S || p(r.value ? M : N);
      }
    }, g = (b) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e;
      n.value = b.includes(D) ? D : O;
    }, w = () => {
      t.value = !1;
    }, V = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, k = (b) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e, N = ![D, O].includes(b);
      N && (b = r.value ? O : D), p(b);
    }, $ = () => v(e.rules, e.modelValue);
    ie(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: $,
      resetValidation: f,
      reset: V,
      resetWithAnimation: w
    };
    return T(l, E), T(s, E), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: gm,
      classes: ym,
      handleClick: y,
      toggle: k,
      reset: V,
      validate: $,
      resetValidation: f
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
  onChange: R(),
  "onUpdate:modelValue": R()
}, {
  n: Sm,
  classes: km
} = ne("checkbox-group");
function $m(e, n) {
  var r = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
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
    var n = U(() => e.max), r = U(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = mm(), {
      bindForm: l
    } = bn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = yn(), v = U(() => i.value), f = (D) => {
      Me(() => {
        var {
          validateTrigger: O,
          rules: N,
          modelValue: M
        } = e;
        s(O, D, N, M);
      });
    }, m = (D) => {
      T(e["onUpdate:modelValue"], D), T(e.onChange, D), f("onChange");
    }, p = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) || m([...O, D]);
    }, y = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) && m(O.filter((N) => N !== D));
    }, g = () => t.forEach((D) => {
      var {
        sync: O
      } = D;
      return O(e.modelValue);
    }), w = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, V = () => {
      var D = t.map((N) => {
        var {
          checkedValue: M
        } = N;
        return M.value;
      }), O = Yi(D);
      return w(), T(e["onUpdate:modelValue"], O), O;
    }, k = () => {
      var D = t.filter((N) => {
        var {
          checked: M
        } = N;
        return !M.value;
      }).map((N) => {
        var {
          checkedValue: M
        } = N;
        return M.value;
      }), O = Yi(D);
      return w(), T(e["onUpdate:modelValue"], O), O;
    }, $ = () => {
      T(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, g, {
      deep: !0
    }), ie(() => a.value, g);
    var b = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: E,
      resetValidation: d,
      reset: $,
      errorMessage: v
    };
    return o(b), T(l, b), {
      errorMessage: i,
      n: Sm,
      classes: km,
      checkAll: V,
      inverseAll: k,
      reset: $,
      validate: E,
      resetValidation: d
    };
  }
});
su.render = $m;
const Mr = su;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var yS = Mr;
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
  n: Wn,
  classes: Vm
} = ne("chip");
function Mm(e, n) {
  var r = te("var-icon");
  return h(), ge(
    Ee,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [W(e.$slots, "left"), A(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        ), W(e.$slots, "right"), e.closable ? (h(), P(
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
    var n = U(() => {
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
    }), r = U(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = Wn(o ? "$--flex" : "$--inline-flex"), d = i ? Wn("plain") + " " + Wn("plain-" + l) : Wn("--" + l), v = s ? Wn("--round") : null;
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
  n: Ct,
  classes: zm
} = ne("col");
function Lm(e, n) {
  return h(), P(
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
    var n = I({
      left: 0,
      right: 0
    }), r = U(() => L(e.span)), a = U(() => L(e.offset)), {
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
        Number(m) >= 0 && v.push(Ct("--span-" + u + "-" + m)), f && v.push(Ct("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(Ct("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      T(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), T(o, l), {
      n: Ct,
      classes: zm,
      padding: n,
      toNumber: L,
      toSizeUnit: pe,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Nt
    };
  }
});
vu.render = Lm;
const Br = vu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var wS = Br, fu = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY");
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
} = ne("collapse");
function Ym(e, n) {
  return h(), P(
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
    } = Rm(), t = U(() => e.modelValue), o = U(() => e.offset), l = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, i = (m, p) => l() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((y) => y !== m) : null, s = (m, p) => {
      var y = i(m, p);
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
      if (l()) {
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
    return a(f), ie(() => n.value, () => Me().then(v)), ie(() => e.modelValue, () => Me().then(v)), {
      n: Fm
    };
  }
});
cu.render = Ym;
const Ir = cu;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var CS = Ir;
function Hm() {
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
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [A(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [A(
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
      ), A(
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
    ), we(A(
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
      [A(
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
    } = Hm(), t = !0, o = I(null), l = I(!1), i = I(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = U(() => e.name), f = (k, $) => {
      s.value === void 0 || k && Ce(s.value) || $ === i.value || (i.value = $, m(!0));
    }, m = (k) => {
      e.disabled || k || d(e.name || n.value, !i.value);
    }, p = () => {
      o.value && (o.value.style.height = "", l.value = !0, Me(() => {
        var {
          offsetHeight: k
        } = o.value;
        o.value.style.height = 0 + "px", Tn(() => {
          o.value.style.height = k + "px", t && Jt(() => {
            t && w();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, g = () => {
      if (o.value) {
        var {
          offsetHeight: k
        } = o.value;
        o.value.style.height = k + "px", Tn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, w = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, V = {
      index: n,
      name: v,
      init: f
    };
    return a(V), ie(i, (k) => {
      k ? p() : g();
    }), {
      n: Wm,
      start: y,
      classes: Gm,
      show: l,
      isShow: i,
      offset: u,
      toggle: m,
      contentEl: o,
      transitionend: w
    };
  }
});
mu.render = qm;
const Er = mu;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var SS = Er, Xm = {
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
} = ne("countdown"), Fo = 1e3, Yo = 60 * Fo, Ho = 60 * Yo, ol = 24 * Ho;
function Zm(e, n) {
  return h(), P(
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
    var n = I(""), r = I({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), a = 0, t = !1, o = 0, l = 0, i, s = (p, y) => {
      var g = Object.values(y), w = ["DD", "HH", "mm", "ss"], V = [24, 60, 60, 1e3];
      if (w.forEach(($, E) => {
        p.includes($) ? p = p.replace($, ya("" + g[E], 2, "0")) : g[E + 1] += g[E] * V[E];
      }), p.includes("S")) {
        var k = ya("" + g[g.length - 1], 3, "0");
        p.includes("SSS") ? p = p.replace("SSS", k) : p.includes("SS") ? p = p.replace("SS", k.slice(0, 2)) : p = p.replace("S", k.slice(0, 1));
      }
      return p;
    }, u = (p) => {
      var y = Math.floor(p / ol), g = Math.floor(p % ol / Ho), w = Math.floor(p % Ho / Yo), V = Math.floor(p % Yo / Fo), k = Math.floor(p % Fo), $ = {
        days: y,
        hours: g,
        minutes: w,
        seconds: V,
        milliseconds: k
      };
      r.value = $, T(e.onChange, r.value), n.value = s(e.format, $);
    }, d = () => {
      var {
        time: p,
        onEnd: y
      } = e, g = performance.now();
      if (a || (a = g + L(p)), l = a - g, l < 0 && (l = 0), u(l), l === 0) {
        T(y);
        return;
      }
      t && (o = Tn(d));
    }, v = function(p) {
      p === void 0 && (p = !1), !(t && !p) && (t = !0, a = performance.now() + (l || L(e.time)), d());
    }, f = () => {
      t = !1, Xi(o);
    }, m = () => {
      a = 0, t = !1, Xi(o), d();
    };
    return ie(() => e.time, () => {
      m(), e.autoStart && v();
    }, {
      immediate: !0
    }), qa(() => {
      i != null && (t = i, t === !0 && v(!0));
    }), pr(() => {
      i = t, f();
    }), Ka(f), {
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
const Dr = pu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var kS = Dr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ea = 9e15, hr = 1e9, jo = "0123456789abcdef", Rt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ut = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Wo = {
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
  minE: -Ea,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ea,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, hu, An, me = !0, ro = "[DecimalError] ", cr = ro + "Invalid argument: ", gu = ro + "Precision limit exceeded", yu = ro + "crypto unavailable", bu = "[object Decimal]", Qe = Math.floor, Ye = Math.pow, Jm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Qm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, _m = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, wu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, $n = 1e7, de = 7, xm = 9007199254740991, ep = Rt.length - 1, Go = Ut.length - 1, X = { toStringTag: bu };
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
    throw Error(cr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
X.comparedTo = X.cmp = function(e) {
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
X.cosine = X.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = np(a, Tu(a, r)), a.precision = e, a.rounding = n, ue(An == 2 || An == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
X.cubeRoot = X.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (me = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Xe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Pe(u.plus(d).times(i), u.plus(s), l + 2, 1), Xe(i.d).slice(0, l) === (r = Xe(a.d)).slice(0, l))
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
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / to(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ya(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ue(o, l.precision = r, l.rounding = a, !0);
};
X.hyperbolicSine = X.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ya(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / to(5, e)), t = Ya(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
X.hyperbolicTangent = X.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Pe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
X.inverseCosine = X.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Sn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Sn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Sn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
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
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Sn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
X.inverseTangent = X.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Go)
      return l = Sn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Go)
      return l = Sn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (me = !1, n = Math.ceil(i / de), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), me = !0, ue(l, d.precision = v, d.rounding = f, !0);
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
  if (me = !1, i = v + m, l = xn(u, i), a = n ? Ft(d, i + 10) : xn(e, i), s = Pe(l, a, i, 1), lt(s.d, t = v, f))
    do
      if (i += 10, l = xn(u, i), a = n ? Ft(d, i + 10) : xn(e, i), s = Pe(l, a, i, 1), !o) {
        +Xe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (lt(s.d, t += 10, f));
  return me = !0, ue(s, v, f);
};
X.minus = X.sub = function(e) {
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
    return me ? ue(e, i, s) : e;
  }
  if (r = Qe(e.e / de), d = Qe(m.e / de), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / de), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
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
        u[t] = $n - 1;
      --u[t], u[a] += $n;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = ao(u, r), me ? ue(e, i, s) : e) : new p(s === 3 ? -0 : 0);
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
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), me ? ue(e, i, s) : e;
  if (o = Qe(v.e / de), a = Qe(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / de), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / $n | 0, u[t] %= $n;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = ao(u, a), me ? ue(e, i, s) : e;
};
X.precision = X.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(cr + e);
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
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (me = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = Xe(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(l, o, r + 2, 1)).times(0.5), Xe(o.d).slice(0, r) === (n = Xe(a.d)).slice(0, r))
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
  return me = !0, ue(a, s, d.rounding, e);
};
X.tangent = X.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(An == 2 || An == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
X.times = X.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Qe(d.e / de) + Qe(e.e / de), s = f.length, u = m.length, s < u && (o = f, f = m, m = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + m[a] * f[t - a - 1] + n, o[t--] = i % $n | 0, n = i / $n | 0;
    o[t] = (o[t] + n) % $n | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = ao(o, r), me ? ue(e, v.precision, v.rounding) : e;
};
X.toBinary = function(e, n) {
  return Ti(this, 2, e, n);
};
X.toDecimalPlaces = X.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (on(e, 0, hr), n === void 0 ? n = a.rounding : on(n, 0, 8), ue(r, e + r.e + 1, n));
};
X.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = In(a, !0) : (on(e, 0, hr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = ue(new t(a), e + 1, n), r = In(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = In(t) : (on(e, 0, hr), n === void 0 ? n = o.rounding : on(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = In(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
X.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, m = this, p = m.d, y = m.constructor;
  if (!p)
    return new y(m);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = Cu(p) - m.e - 1, l = o % de, n.d[0] = Ye(10, l < 0 ? de + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error(cr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (me = !1, i = new y(Xe(p)), d = y.precision, y.precision = o = p.length * de * 2; v = Pe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
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
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ye(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(i, a, o);
  if (n = Qe(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= xm)
    return t = Su(s, i, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ye(+i, u), n = r == 0 || !isFinite(r) ? Qe(u * (Math.log("0." + Xe(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (me = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = qo(e.times(xn(i, a + r)), a), t.d && (t = ue(t, a + 5, 1), lt(t.d, a, o) && (n = a + 10, t = ue(qo(e.times(xn(i, n + r)), n), n + 5, 1), +Xe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = l, me = !0, s.rounding = o, ue(t, a, o));
};
X.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = In(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (on(e, 1, hr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = ue(new t(a), e, n), r = In(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
X.toSignificantDigits = X.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (on(e, 1, hr), n === void 0 ? n = a.rounding : on(n, 0, 8)), ue(new a(r), e, n);
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
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += qn(r)), o += a;
    l = e[n], a = l + "", r = de - a.length, r && (o += qn(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function on(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(cr + e);
}
function lt(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ye(10, de - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, l;
}
function Vt(e, n, r) {
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
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / to(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ya(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, m, p, y, g, w, V, k, $, E, b, D, O, N, M, C, S, j = a.constructor, _ = a.s == t.s ? 1 : -1, F = a.d, B = t.d;
    if (!F || !F[0] || !B || !B[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (F ? B && F[0] == B[0] : !B) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          F && F[0] == 0 || !B ? _ * 0 : _ / 0
        )
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = $n, m = de, d = Qe(a.e / m) - Qe(t.e / m)), C = B.length, N = F.length, w = new j(_), V = w.d = [], v = 0; B[v] == (F[v] || 0); v++)
      ;
    if (B[v] > (F[v] || 0) && d--, o == null ? (b = o = j.precision, l = j.rounding) : i ? b = o + (a.e - t.e) + 1 : b = o, b < 0)
      V.push(1), p = !0;
    else {
      if (b = b / m + 2 | 0, v = 0, C == 1) {
        for (f = 0, B = B[0], b++; (v < N || f) && b--; v++)
          D = f * s + (F[v] || 0), V[v] = D / B | 0, f = D % B | 0;
        p = f || v < N;
      } else {
        for (f = s / (B[0] + 1) | 0, f > 1 && (B = e(B, f, s), F = e(F, f, s), C = B.length, N = F.length), O = C, k = F.slice(0, C), $ = k.length; $ < C; )
          k[$++] = 0;
        S = B.slice(), S.unshift(0), M = B[0], B[1] >= s / 2 && ++M;
        do
          f = 0, u = n(B, k, C, $), u < 0 ? (E = k[0], C != $ && (E = E * s + (k[1] || 0)), f = E / M | 0, f > 1 ? (f >= s && (f = s - 1), y = e(B, f, s), g = y.length, $ = k.length, u = n(y, k, g, $), u == 1 && (f--, r(y, C < g ? S : B, g, s))) : (f == 0 && (u = f = 1), y = B.slice()), g = y.length, g < $ && y.unshift(0), r(k, y, $, s), u == -1 && ($ = k.length, u = n(B, k, C, $), u < 1 && (f++, r(k, C < $ ? S : B, $, s))), $ = k.length) : u === 0 && (f++, k = [0]), V[v++] = f, u && k[0] ? k[$++] = F[O] || 0 : (k = [F[O]], $ = 1);
        while ((O++ < N || k[0] !== void 0) && b--);
        p = k[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (m == 1)
      w.e = d, hu = p;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      w.e = v + d * m - 1, ue(w, i ? o + w.e + 1 : o, l, p);
    }
    return w;
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
        o += de, l = n, d = v[f = 0], s = d / Ye(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / de), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= de, l = o - de + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= de, l = o - de + t, s = l < 0 ? 0 : d / Ye(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ye(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / Ye(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ye(10, de - o), v[f] = l > 0 ? (d / Ye(10, t - l) % Ye(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == $n && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != $n)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return me && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function In(e, n, r) {
  if (!e.isFinite())
    return $u(e);
  var a, t = e.e, o = Xe(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + qn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + qn(-t - 1) + o, r && (a = r - l) > 0 && (o += qn(a))) : t >= l ? (o += qn(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + qn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += qn(a))), o;
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
function Sn(e, n, r) {
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
  var t, o = new e(1), l = Math.ceil(a / de + 4);
  for (me = !1; ; ) {
    if (r % 2 && (o = o.times(n), ll(o.d, l) && (t = !0)), r = Qe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), ll(n.d, l);
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
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (me = !1, s = p) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), i = l.plus(Pe(o, r, s, 1)), Xe(i.d).slice(0, s) === Xe(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ue(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && lt(l.d, s - a, m, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ue(l, f.precision = p, m, me = !0);
      else
        return f.precision = p, l;
    }
    l = i;
  }
}
function xn(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, m = 1, p = 10, y = e, g = y.d, w = y.constructor, V = w.rounding, k = w.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new w(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (me = !1, d = k) : d = n, w.precision = d += p, r = Xe(g), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = Xe(y.d), a = r.charAt(0), m++;
    o = y.e, a > 1 ? (y = new w("0." + r), o++) : y = new w(a + "." + r.slice(1));
  } else
    return u = Ft(w, d + 2, k).times(o + ""), y = xn(new w(a + "." + r.slice(1)), d - p).plus(u), w.precision = k, n == null ? ue(y, k, V, me = !0) : y;
  for (v = y, s = l = y = Pe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (l = ue(l.times(f), d, 1), u = s.plus(Pe(l, new w(t), d, 1)), Xe(u.d).slice(0, d) === Xe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Ft(w, d + 2, k).times(o + ""))), s = Pe(s, new w(m), d, 1), n == null)
        if (lt(s.d, d - p, V, i))
          w.precision = d += p, u = l = y = Pe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = i = 1;
        else
          return ue(s, w.precision = k, V, me = !0);
      else
        return w.precision = k, s;
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
    throw Error(cr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = Su(a, new a(r), o, o * 2)), u = Vt(n, r, $n), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = ao(u, d), e.d = u, me = !1, l && (e = Pe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : er.pow(2, s))), me = !0, e);
}
function ap(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ya(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / to(5, r)), n = Ya(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Ya(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / de);
  for (me = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Pe(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Pe(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return me = !0, l.d.length = d + 1, l;
}
function to(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Tu(e, n) {
  var r, a = n.s < 0, t = Sn(e, e.precision, 1), o = t.times(0.5);
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
  var t, o, l, i, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (on(r, 1, hr), a === void 0 ? a = m.rounding : on(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = $u(e);
  else {
    for (d = In(e), l = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - l, f.d = Vt(In(f), 10, t), f.e = f.d.length), v = Vt(d, 10, t), o = s = v.length; v[--s] == 0; )
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
            for (v = Vt(d, t, n), s = v.length; !v[s - 1]; --s)
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
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Sn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Sn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Sn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = Sn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
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
    hr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ea,
    0,
    "toExpPos",
    0,
    Ea,
    "maxE",
    0,
    Ea,
    "minE",
    -Ea,
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
        throw Error(cr + r + ": " + a);
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
      throw Error(cr + r + ": " + a);
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
      u.s = o.s, me ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
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
        me ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Xo(u, o.toString());
    } else if (s !== "string")
      throw Error(cr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), wu.test(o) ? Xo(u, o) : rp(u, o);
  }
  if (t.prototype = X, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = hp, t.clone = Pu, t.isDecimal = sl, t.abs = tp, t.acos = op, t.acosh = ip, t.add = lp, t.asin = sp, t.asinh = up, t.atan = dp, t.atanh = vp, t.atan2 = fp, t.cbrt = cp, t.ceil = mp, t.clamp = pp, t.cos = gp, t.cosh = yp, t.div = bp, t.exp = wp, t.floor = Cp, t.hypot = Sp, t.ln = kp, t.log = $p, t.log10 = Pp, t.log2 = Tp, t.max = Op, t.min = Vp, t.mod = Mp, t.mul = Bp, t.pow = Ip, t.random = Ep, t.round = Dp, t.sign = Np, t.sin = Ap, t.sinh = zp, t.sqrt = Lp, t.sub = Rp, t.sum = Up, t.tan = Fp, t.tanh = Yp, t.trunc = Hp, e === void 0 && (e = {}), e && e.defaults !== !0)
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
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : on(e, 1, hr), a = Math.ceil(e / de), this.crypto)
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
  for (a = i[--o], e %= de, a && e && (t = Ye(10, de - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= de)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
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
  for (me = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return me = !0, ue(r, this.precision, this.rounding);
}
function Fp(e) {
  return new this(e).tan();
}
function Yp(e) {
  return new this(e).tanh();
}
function Hp(e) {
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
  onBeforeChange: R(),
  onChange: R(),
  onIncrement: R(),
  onDecrement: R(),
  "onUpdate:modelValue": R()
}, {
  n: Wp,
  classes: Gp
} = ne("counter"), ul = 100, dl = 600, qp = ["inputmode", "readonly", "disabled"];
function Xp(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
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
      ), we(A(
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
    var n = I(""), {
      bindForm: r,
      form: a
    } = bn(), {
      errorMessage: t,
      validateWithTrigger: o,
      validate: l,
      // expose
      resetValidation: i
    } = yn(), {
      readonly: s,
      disabled: u
    } = a ?? {}, d, v, f, m, p = () => l(e.rules, e.modelValue), y = (B) => {
      Me(() => {
        var {
          validateTrigger: Y,
          rules: ae,
          modelValue: se
        } = e;
        o(Y, B, ae, se);
      });
    }, g = () => {
      var {
        min: B
      } = e;
      T(e["onUpdate:modelValue"], B != null ? L(B) : 0), i();
    }, w = {
      reset: g,
      validate: p,
      resetValidation: i
    }, V = U(() => {
      var {
        max: B,
        modelValue: Y
      } = e;
      return B != null && L(Y) >= L(B);
    }), k = U(() => {
      var {
        min: B,
        modelValue: Y
      } = e;
      return B != null && L(Y) <= L(B);
    }), $ = (B) => {
      var {
        decimalLength: Y,
        max: ae,
        min: se
      } = e, H = L(B);
      return ae != null && H > L(ae) && (H = L(ae)), se != null && H < L(se) && (H = L(se)), B = String(H), Y != null && (B = H.toFixed(L(Y))), B;
    }, E = (B) => {
      var {
        lazyChange: Y,
        onBeforeChange: ae
      } = e, {
        value: se
      } = B.target, H = $(se);
      Y ? T(ae, L(H), F) : _(H), y("onInputChange");
    }, b = () => {
      var {
        disabled: B,
        readonly: Y,
        disableDecrement: ae,
        decrementButton: se,
        lazyChange: H,
        step: J,
        modelValue: K,
        onDecrement: z,
        onBeforeChange: G
      } = e;
      if (!(u != null && u.value || s != null && s.value || B || Y || ae || !se) && !k.value) {
        var Z = new er(L(K)).minus(new er(L(J))).toString(), ce = $(Z), fe = L(ce);
        T(z, fe), H ? T(G, fe, F) : (_(ce), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: B,
        readonly: Y,
        disableIncrement: ae,
        incrementButton: se,
        lazyChange: H,
        step: J,
        modelValue: K,
        onIncrement: z,
        onBeforeChange: G
      } = e;
      if (!(u != null && u.value || s != null && s.value || B || Y || ae || !se) && !V.value) {
        var Z = new er(L(K)).plus(new er(L(J))).toString(), ce = $(Z), fe = L(ce);
        T(z, fe), H ? T(G, fe, F) : (_(ce), y("onIncrement"));
      }
    }, O = () => {
      var {
        press: B,
        lazyChange: Y
      } = e;
      !B || Y || (m = window.setTimeout(() => {
        j();
      }, dl));
    }, N = () => {
      var {
        press: B,
        lazyChange: Y
      } = e;
      !B || Y || (f = window.setTimeout(() => {
        S();
      }, dl));
    }, M = () => {
      v && clearTimeout(v), m && clearTimeout(m);
    }, C = () => {
      d && clearTimeout(d), f && clearTimeout(f);
    }, S = () => {
      d = window.setTimeout(() => {
        D(), S();
      }, ul);
    }, j = () => {
      v = window.setTimeout(() => {
        b(), j();
      }, ul);
    }, _ = (B) => {
      n.value = B;
      var Y = L(B);
      T(e["onUpdate:modelValue"], Y);
    }, F = (B) => {
      _($(String(B))), y("onLazyChange");
    };
    return T(r, w), ie(() => e.modelValue, (B) => {
      _($(String(B))), T(e.onChange, L(B));
    }), _($(String(e.modelValue))), {
      n: Wp,
      classes: Gp,
      inputValue: n,
      errorMessage: t,
      formDisabled: u,
      formReadonly: s,
      isMax: V,
      isMin: k,
      validate: p,
      reset: g,
      resetValidation: i,
      handleChange: E,
      decrement: b,
      increment: D,
      pressDecrement: O,
      pressIncrement: N,
      releaseDecrement: M,
      releaseIncrement: C,
      toSizeUnit: pe,
      toNumber: L
    };
  }
});
Ou.render = Xp;
const Nr = Ou;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var $S = Nr, Vu = 60, Mu = Vu * 60, Bu = Mu * 24, Kp = Bu * 7, Ha = 1e3, ho = Vu * Ha, vl = Mu * Ha, Zp = Bu * Ha, Jp = Kp * Ha, Pi = "millisecond", Da = "second", Na = "minute", Aa = "hour", Xn = "day", Mt = "week", Cn = "month", Iu = "quarter", Kn = "year", za = "date", Qp = "YYYY-MM-DDTHH:mm:ssZ", fl = "Invalid Date", _p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, xp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
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
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Cn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Cn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, ah = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, th = function(n) {
  var r = {
    M: Cn,
    y: Kn,
    w: Mt,
    d: Xn,
    D: za,
    h: Aa,
    m: Na,
    s: Da,
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
var et = "en", Ar = {};
Ar[et] = eh;
var Oi = function(n) {
  return n instanceof oo;
}, Yt = function e(n, r, a) {
  var t;
  if (!n)
    return et;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Ar[o] && (t = o), r && (Ar[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Ar[i] = n, t = i;
  }
  return !a && t && (et = t), t || !a && et;
}, oe = function(n, r) {
  if (Oi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new oo(a);
}, lh = function(n, r) {
  return oe(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = ih;
Te.l = Yt;
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
}, oo = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Yt(r.locale, null, !0), this.parse(r);
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
    var o = oe(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return oe(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < oe(a);
  }, n.$g = function(a, t, o) {
    return Te.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Te.u(t) ? !0 : t, i = Te.p(a), s = function(w, V) {
      var k = Te.w(o.$u ? Date.UTC(o.$y, V, w) : new Date(o.$y, V, w), o);
      return l ? k : k.endOf(Xn);
    }, u = function(w, V) {
      var k = [0, 0, 0, 0], $ = [23, 59, 59, 999];
      return Te.w(o.toDate()[w].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? k : $).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case Kn:
        return l ? s(1, 0) : s(31, 11);
      case Cn:
        return l ? s(1, v) : s(0, v + 1);
      case Mt: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(l ? f - y : f + (6 - y), v);
      }
      case Xn:
      case za:
        return u(m + "Hours", 0);
      case Aa:
        return u(m + "Minutes", 1);
      case Na:
        return u(m + "Seconds", 2);
      case Da:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Te.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Xn] = i + "Date", o[za] = i + "Date", o[Cn] = i + "Month", o[Kn] = i + "FullYear", o[Aa] = i + "Hours", o[Na] = i + "Minutes", o[Da] = i + "Seconds", o[Pi] = i + "Milliseconds", o)[l], u = l === Xn ? this.$D + (t - this.$W) : t;
    if (l === Cn || l === Kn) {
      var d = this.clone().set(za, 1);
      d.$d[s](u), d.init(), this.$d = d.set(za, Math.min(this.$D, d.daysInMonth())).$d;
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
      var m = oe(o);
      return Te.w(m.date(m.date() + Math.round(f * a)), o);
    };
    if (i === Cn)
      return this.set(Cn, this.$M + a);
    if (i === Kn)
      return this.set(Kn, this.$y + a);
    if (i === Xn)
      return s(1);
    if (i === Mt)
      return s(7);
    var u = (l = {}, l[Na] = ho, l[Aa] = vl, l[Da] = Ha, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || fl;
    var l = a || Qp, i = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, m = o.meridiem, p = function(k, $, E, b) {
      return k && (k[$] || k(t, l)) || E[$].slice(0, b);
    }, y = function(k) {
      return Te.s(s % 12 || 12, k, "0");
    }, g = m || function(V, k, $) {
      var E = V < 12 ? "AM" : "PM";
      return $ ? E.toLowerCase() : E;
    }, w = {
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
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(xp, function(V, k) {
      return k || w[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Te.p(t), s = oe(a), u = (s.utcOffset() - this.utcOffset()) * ho, d = this - s, v = Te.m(this, s);
    return v = (l = {}, l[Kn] = v / 12, l[Cn] = v, l[Iu] = v / 3, l[Mt] = (d - u) / Jp, l[Xn] = (d - u) / Zp, l[Aa] = d / vl, l[Na] = d / ho, l[Da] = d / Ha, l)[i] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Cn).$D;
  }, n.$locale = function() {
    return Ar[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Yt(a, t, !0);
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
}(), Eu = oo.prototype;
oe.prototype = Eu;
[["$ms", Pi], ["$s", Da], ["$m", Na], ["$H", Aa], ["$W", Xn], ["$M", Cn], ["$y", Kn], ["$D", za]].forEach(function(e) {
  Eu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
oe.extend = function(e, n) {
  return e.$i || (e(n, oo, oe), e.$i = !0), oe;
};
oe.locale = Yt;
oe.isDayjs = Oi;
oe.unix = function(e) {
  return oe(e * 1e3);
};
oe.en = Ar[et];
oe.Ls = Ar;
oe.p = {};
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
var Bt = [{
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
}], xa = [{
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
} = ne("picker-header");
function fh(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), P(
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
    ), A(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [Q(
        Ee,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), P(
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
    } = n, a = I(!1), t = I(0), o = U(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (i = He.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return He.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
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
oe.extend(Du);
oe.extend(Nu);
var {
  n: St,
  classes: ch
} = ne("month-picker"), {
  n: kt
} = ne("date-picker");
function mh(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [A(
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
        Ee,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), P("ul", {
            key: e.panelKey
          }, [(h(!0), P(
            Oe,
            null,
            Ae(e.MONTH_LIST, (t) => (h(), P("li", {
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
    } = n, [a, t] = e.current.split("-"), o = I(!1), l = I(0), i = I(null), s = Be({
      left: !1,
      right: !1
    }), u = U(() => e.choose.chooseYear === e.preview.previewYear), d = U(() => e.preview.previewYear === a), v = (V) => {
      var k, $;
      return (k = ($ = He.value.datePickerMonthDict) == null ? void 0 : $[V].abbr) != null ? k : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: k
        },
        componentProps: {
          min: $,
          max: E
        }
      } = e, b = !0, D = !0, O = k + "-" + V;
      return E && (b = oe(O).isSameOrBefore(oe(E), "month")), $ && (D = oe(O).isSameOrAfter(oe($), "month")), b && D;
    }, m = (V) => {
      var {
        choose: {
          chooseMonths: k,
          chooseDays: $,
          chooseRangeMonth: E
        },
        componentProps: {
          type: b,
          range: D
        }
      } = e;
      if (D) {
        if (!E.length)
          return !1;
        var O = oe(V).isSameOrBefore(oe(E[1]), "month"), N = oe(V).isSameOrAfter(oe(E[0]), "month");
        return O && N;
      }
      return b === "month" ? k.includes(V) : $.some((M) => M.includes(V));
    }, p = (V) => {
      var {
        choose: {
          chooseMonth: k
        },
        preview: {
          previewYear: $
        },
        componentProps: {
          allowedDates: E,
          color: b,
          multiple: D,
          range: O
        }
      } = e, N = $ + "-" + V, M = () => O || D ? m(N) : (k == null ? void 0 : k.index) === V && u.value, C = () => f(V) ? E ? !E(N) : !1 : !0, S = C(), j = () => S ? !0 : O || D ? !m(N) : !u.value || (k == null ? void 0 : k.index) !== V, _ = () => d.value && t === V && e.componentProps.showCurrent ? (O || D || u.value) && S ? !0 : O || D ? !m(N) : u.value ? (k == null ? void 0 : k.index) !== t : !0 : !1, F = () => S ? "" : _() ? b ?? "" : M() ? "" : kt() + "-color-cover", B = F().startsWith(kt());
      return {
        outline: _(),
        text: j(),
        color: j() ? "" : b,
        textColor: B ? "" : F(),
        [kt() + "-color-cover"]: B,
        class: ch(St("button"), [S, St("button--disabled")])
      };
    }, y = (V, k) => {
      var $ = k.currentTarget;
      $.classList.contains(St("button--disabled")) || r("choose-month", V);
    }, g = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, w = (V) => {
      i.value.checkDate(V);
    };
    return ie(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: k,
          max: $
        }
      } = e;
      $ && (s.right = !oe("" + (L(V) + 1)).isSameOrBefore(oe($), "year")), k && (s.left = !oe("" + (L(V) - 1)).isSameOrAfter(oe(k), "year"));
    }, {
      immediate: !0
    }), {
      n: St,
      nDate: kt,
      pack: He,
      MONTH_LIST: Bt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: w,
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
  return h(), P(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), P(
      Oe,
      null,
      Ae(e.yearList, (r) => (h(), P(
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
    } = n, a = U(() => {
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
        var d = oe(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = oe(s).format("YYYY-MM-D"), m = L(f.split("-")[0]);
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
oe.extend(Du);
oe.extend(Nu);
var {
  n: Ia,
  classes: wh
} = ne("day-picker"), {
  n: $t
} = ne("date-picker");
function Ch(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [A(
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
        Ee,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(h(), P("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), P(
              Oe,
              null,
              Ae(e.sortWeekList, (t) => (h(), P(
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
          ), A(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(h(!0), P(
              Oe,
              null,
              Ae(e.days, (t, o) => (h(), P("li", {
                key: o
              }, [Q(
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
    } = n, [a, t, o] = e.current.split("-"), l = I([]), i = I(!1), s = I(0), u = I(null), d = Be({
      left: !1,
      right: !1
    }), v = U(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = U(() => {
      var O;
      return e.choose.chooseYear === e.preview.previewYear && ((O = e.choose.chooseMonth) == null ? void 0 : O.index) === e.preview.previewMonth.index;
    }), m = U(() => {
      var O = xa.findIndex((N) => N.index === e.componentProps.firstDayOfWeek);
      return O === -1 || O === 0 ? xa : xa.slice(O).concat(xa.slice(0, O));
    }), p = (O) => {
      var N, M;
      return (N = (M = He.value.datePickerWeekDict) == null ? void 0 : M[O].abbr) != null ? N : "";
    }, y = (O) => O > 0 ? O : "", g = () => {
      var {
        preview: {
          previewMonth: O,
          previewYear: N
        }
      } = e, M = oe(N + "-" + O.index).daysInMonth(), C = oe(N + "-" + O.index + "-01").day(), S = m.value.findIndex((j) => j.index === "" + C);
      l.value = [...Array(S).fill(-1), ...Array.from(Array(M + 1).keys())].filter((j) => j);
    }, w = () => {
      var {
        preview: {
          previewYear: O,
          previewMonth: N
        },
        componentProps: {
          max: M,
          min: C
        }
      } = e;
      if (M) {
        var S = O + "-" + (L(N.index) + 1);
        d.right = !oe(S).isSameOrBefore(oe(M), "month");
      }
      if (C) {
        var j = O + "-" + (L(N.index) - 1);
        d.left = !oe(j).isSameOrAfter(oe(C), "month");
      }
    }, V = (O) => {
      var {
        preview: {
          previewYear: N,
          previewMonth: M
        },
        componentProps: {
          min: C,
          max: S
        }
      } = e, j = !0, _ = !0, F = N + "-" + M.index + "-" + O;
      return S && (j = oe(F).isSameOrBefore(oe(S), "day")), C && (_ = oe(F).isSameOrAfter(oe(C), "day")), j && _;
    }, k = (O) => {
      var {
        choose: {
          chooseDays: N,
          chooseRangeDay: M
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!M.length)
          return !1;
        var S = oe(O).isSameOrBefore(oe(M[1]), "day"), j = oe(O).isSameOrAfter(oe(M[0]), "day");
        return S && j;
      }
      return N.includes(O);
    }, $ = (O) => {
      if (O < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Ia("button")
        };
      var {
        choose: {
          chooseDay: N
        },
        preview: {
          previewYear: M,
          previewMonth: C
        },
        componentProps: {
          allowedDates: S,
          color: j,
          multiple: _,
          range: F
        }
      } = e, B = M + "-" + C.index + "-" + O, Y = () => F || _ ? k(B) : L(N) === O && f.value, ae = () => V(O) ? S ? !S(B) : !1 : !0, se = ae(), H = () => se ? !0 : F || _ ? !k(B) : !f.value || L(N) !== O, J = () => v.value && L(o) === O && e.componentProps.showCurrent ? (F || _ || f.value) && se ? !0 : F || _ ? !k(B) : f.value ? N !== o : !0 : !1, K = () => se ? "" : J() ? j ?? "" : Y() ? "" : $t() + "-color-cover", z = K().startsWith($t());
      return {
        text: H(),
        outline: J(),
        textColor: z ? "" : K(),
        [$t() + "-color-cover"]: z,
        class: wh(Ia("button"), Ia("button--usable"), [se, Ia("button--disabled")])
      };
    }, E = (O) => {
      i.value = O === "prev", s.value += O === "prev" ? -1 : 1, r("check-preview", "month", O);
    }, b = (O, N) => {
      var M = N.currentTarget;
      M.classList.contains(Ia("button--disabled")) || r("choose-day", O);
    }, D = (O) => {
      u.value.checkDate(O);
    };
    return ln(() => {
      g(), w();
    }), ie(() => e.preview, () => {
      g(), w();
    }), {
      n: Ia,
      nDate: $t,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: p,
      checkDate: E,
      chooseDay: b,
      buttonProps: $
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
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [A(
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
      ), A(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [Q(
          Ee,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (h(), P("div", {
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
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [be(
                re(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), P("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
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
    ), A(
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
        Ee,
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
    var n = 0, r = 0, a = "", t, o = oe().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Bt.find((le) => le.index === i), u = I(!1), d = I(!1), v = I(!0), f = I(), m = I(), p = I(), y = I(s), g = I(l), w = I(!1), V = I([]), k = I([]), $ = I([]), E = I([]), b = I(null), D = I(null), O = Be({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), N = U(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: V.value,
      chooseDays: k.value,
      chooseRangeMonth: $.value,
      chooseRangeDay: E.value
    })), M = U(() => ({
      previewMonth: y.value,
      previewYear: g.value
    })), C = U(() => {
      var {
        multiple: le,
        range: ye
      } = e;
      if (ye)
        return $.value.length ? $.value[0] + " ~ " + $.value[1] : "";
      var he = "";
      if (f.value) {
        var Se, ke;
        he = (Se = (ke = He.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Se : "";
      }
      return le ? "" + V.value.length + He.value.datePickerSelected : he;
    }), S = U(() => {
      var le, ye, he, Se, {
        multiple: ke,
        range: Ue
      } = e;
      if (Ue) {
        var xe = E.value.map((co) => oe(co).format("YYYY-MM-DD"));
        return xe.length ? xe[0] + " ~ " + xe[1] : "";
      }
      if (ke)
        return "" + k.value.length + He.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var cn = oe(m.value + "-" + f.value.index + "-" + p.value).day(), Ba = xa.find((co) => co.index === "" + cn), Ri = (le = (ye = He.value.datePickerWeekDict) == null ? void 0 : ye[Ba.index].name) != null ? le : "", fv = (he = (Se = He.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? he : "", cv = ya(p.value, 2, "0");
      return He.value.lang === "zh-CN" ? f.value.index + "-" + cv + " " + Ri.slice(0, 3) : Ri.slice(0, 3) + ", " + fv.slice(0, 3) + " " + p.value;
    }), j = U(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), _ = U(() => !e.touchable || ["", "year"].includes(j.value)), F = U(() => {
      var le, ye, he, Se, ke = oe(m.value + "-" + ((le = f.value) == null ? void 0 : le.index) + "-" + p.value).day(), Ue = p.value ? ya(p.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = m.value) != null ? ye : "",
        month: (he = (Se = f.value) == null ? void 0 : Se.index) != null ? he : "",
        date: Ue
      };
    }), B = U(() => N.value.chooseRangeDay.map((le) => oe(le).format("YYYY-MM-DD"))), Y = U(() => m.value === g.value), ae = U(() => {
      var le;
      return ((le = f.value) == null ? void 0 : le.index) === y.value.index;
    }), se = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, H = (le) => {
      if (!_.value) {
        var {
          clientX: ye,
          clientY: he
        } = le.touches[0];
        n = ye, r = he;
      }
    }, J = (le, ye) => le >= ye && le > 20 ? "x" : "y", K = (le) => {
      if (!_.value) {
        var {
          clientX: ye,
          clientY: he
        } = le.touches[0], Se = ye - n, ke = he - r;
        t = J(Math.abs(Se), Math.abs(ke)), a = Se > 0 ? "prev" : "next";
      }
    }, z = () => {
      if (!(_.value || t !== "x")) {
        var le = j.value === "month" ? b : D;
        Jt(() => {
          le.value.forwardRef(a), yt();
        });
      }
    }, G = (le, ye) => {
      var he = ye === "month" ? $ : E;
      if (he.value = v.value ? [le, le] : [he.value[0], le], v.value = !v.value, v.value) {
        var Se = oe(he.value[0]).isAfter(he.value[1]), ke = Se ? [he.value[1], he.value[0]] : [...he.value];
        T(e["onUpdate:modelValue"], ke), T(e.onChange, ke);
      }
    }, Z = (le, ye) => {
      var he = ye === "month" ? V : k, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = he.value.map((xe) => oe(xe).format(Se)), Ue = ke.findIndex((xe) => xe === le);
      Ue === -1 ? ke.push(le) : ke.splice(Ue, 1), T(e["onUpdate:modelValue"], ke), T(e.onChange, ke);
    }, ce = (le, ye) => !m.value || !f.value ? !1 : Y.value ? le === "month" ? ye.index < f.value.index : ae.value ? ye < L(p.value) : f.value.index > y.value.index : m.value > g.value, fe = (le) => {
      var {
        readonly: ye,
        range: he,
        multiple: Se,
        onChange: ke,
        "onUpdate:modelValue": Ue
      } = e;
      if (!(le < 0 || ye)) {
        w.value = ce("day", le);
        var xe = g.value + "-" + y.value.index + "-" + le, cn = oe(xe).format("YYYY-MM-DD");
        he ? G(cn, "day") : Se ? Z(cn, "day") : (T(Ue, cn), T(ke, cn));
      }
    }, De = (le) => {
      var {
        type: ye,
        readonly: he,
        range: Se,
        multiple: ke,
        onChange: Ue,
        onPreview: xe,
        "onUpdate:modelValue": cn
      } = e;
      if (w.value = ce("month", le), ye === "month" && !he) {
        var Ba = g.value + "-" + le.index;
        Se ? G(Ba, "month") : ke ? Z(Ba, "month") : (T(cn, Ba), T(Ue, Ba));
      } else
        y.value = le, T(xe, L(g.value), L(y.value.index));
      d.value = !1;
    }, Ge = (le) => {
      g.value = "" + le, u.value = !1, d.value = !0, T(e.onPreview, L(g.value), L(y.value.index));
    }, qe = (le, ye) => {
      var he = ye === "prev" ? -1 : 1;
      if (le === "year")
        g.value = "" + (L(g.value) + he);
      else {
        var Se = L(y.value.index) + he;
        Se < 1 && (g.value = "" + (L(g.value) - 1), Se = 12), Se > 12 && (g.value = "" + (L(g.value) + 1), Se = 1), y.value = Bt.find((ke) => L(ke.index) === Se);
      }
      T(e.onPreview, L(g.value), L(y.value.index));
    }, ze = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, _e = (le) => Ce(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ma = (le, ye) => {
      var he = ye === "month" ? $ : E, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = le.map((cn) => oe(cn).format(Se)).slice(0, 2), Ue = he.value.some((cn) => _e(cn));
      if (!Ue) {
        he.value = ke;
        var xe = oe(he.value[0]).isAfter(he.value[1]);
        he.value.length === 2 && xe && (he.value = [he.value[1], he.value[0]]);
      }
    }, fo = (le, ye) => {
      var he = ye === "month" ? V : k, Se = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(le.map((Ue) => oe(Ue).format(Se))));
      he.value = ke.filter((Ue) => Ue !== "Invalid Date");
    }, gt = (le) => {
      var ye = oe(le).format("YYYY-MM-D");
      if (!_e(ye)) {
        var [he, Se, ke] = ye.split("-"), Ue = Bt.find((xe) => xe.index === Se);
        f.value = Ue, m.value = he, p.value = ke, y.value = Ue, g.value = he;
      }
    }, yt = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (le) => {
      if (!(!ze() || _e(le) || !le))
        if (e.range) {
          if (!Ce(le))
            return;
          v.value = le.length !== 1, Ma(le, e.type);
        } else if (e.multiple) {
          if (!Ce(le))
            return;
          fo(le, e.type);
        } else
          gt(le);
    }, {
      immediate: !0
    }), ie(j, yt), {
      n: kh,
      classes: $h,
      monthPanelEl: b,
      dayPanelEl: D,
      reverse: w,
      currentDate: o,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: S,
      getPanelType: j,
      getChoose: N,
      getPreview: M,
      componentProps: O,
      slotProps: F,
      formatRange: B,
      clickEl: se,
      handleTouchstart: H,
      handleTouchmove: K,
      handleTouchend: z,
      getChooseDay: fe,
      getChooseMonth: De,
      getChooseYear: Ge,
      checkPreview: qe
    };
  }
});
Fu.render = Th;
const zr = Fu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var TS = zr;
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
}, Je(mt, [
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
      default: ve(() => [A(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: _o({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
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
        ), A(
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
        ), A(
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
var Yu = ee({
  name: "VarDialog",
  components: {
    VarPopup: pn,
    VarButton: Ke
  },
  inheritAttrs: !1,
  props: Oh,
  setup(e) {
    var n = I(!1), r = I(!1), a = () => T(e["onUpdate:show"], !1), t = () => {
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
      n: Vh,
      classes: Mh,
      pack: He,
      dt: Kt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: pe
    };
  }
});
Yu.render = Bh;
const ir = Yu;
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
var Jn, jt = {};
function Ih(e) {
  return e === void 0 && (e = {}), Ze(e) ? Ht({}, jt, {
    message: e
  }) : Ht({}, jt, e);
}
function Ca(e) {
  return ct() ? new Promise((n) => {
    Ca.close();
    var r = Ih(e), a = Be(r);
    a.teleport = "body", Jn = a;
    var {
      unmountInstance: t
    } = Ja(ir, a, {
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
Object.assign(Ca, {
  setDefaultOptions: Eh,
  resetDefaultOptions: Dh,
  close: Nh
});
ir.install = function(e) {
  e.component(ir.name, ir);
};
Ca.install = function(e) {
  e.component(ir.name, ir);
};
Ca.Component = ir;
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
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, La.apply(this, arguments);
}
var {
  n: zh,
  classes: Lh
} = ne("divider");
function Rh(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (h(), P(
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
var Hu = ee({
  name: "VarDivider",
  props: Ah,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Be({
      withText: !1
    }), t = U(() => Co(e.inset) ? e.inset : !0), o = U(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Co(i) || i === 0)
        return La({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? La({}, d, {
        height: "calc(80% - " + pe(f) + ")"
      }) : La({}, d, {
        width: "calc(100% - " + pe(f) + ")",
        left: v > 0 ? pe(f) : pe(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ln(() => {
      l();
    }), Xt(() => {
      l();
    }), La({
      n: zh,
      classes: Lh
    }, Cv(a), {
      style: o,
      isInset: t
    });
  }
});
Hu.render = Rh;
const Lr = Hu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var OS = Lr, Uh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function It(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Uh[n];
  });
}
var zn = "top", mr = "bottom", Sa = "right", lr = "left", io = "auto", lo = [zn, mr, Sa, lr], so = "start", st = "end", Fh = "clippingParents", ju = "viewport", Qa = "popper", Yh = "reference", ml = /* @__PURE__ */ lo.reduce(function(e, n) {
  return e.concat([n + "-" + so, n + "-" + st]);
}, []), Wu = /* @__PURE__ */ [].concat(lo, [io]).reduce(function(e, n) {
  return e.concat([n, n + "-" + so, n + "-" + st]);
}, []), Hh = "beforeRead", jh = "read", Wh = "afterRead", Gh = "beforeMain", qh = "main", Xh = "afterMain", Kh = "beforeWrite", Zh = "write", Jh = "afterWrite", xo = [Hh, jh, Wh, Gh, qh, Xh, Kh, Zh, Jh];
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
function wn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function ka(e) {
  var n = wn(e).Element;
  return e instanceof n || e instanceof Element;
}
function hn(e) {
  var n = wn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Vi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = wn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function gr(e) {
  return ((ka(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var nt = Math.max, hl = Math.min, ja = Math.round;
function ei() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Gu() {
  return !/^((?!chrome|android).)*safari/i.test(ei());
}
function Wa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && hn(e) && (t = e.offsetWidth > 0 && ja(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && ja(a.height) / e.offsetHeight || 1);
  var l = ka(e) ? wn(e) : window, i = l.visualViewport, s = !Gu() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
  var n = wn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Bi(e) {
  return Wa(gr(e)).left + Mi(e).scrollLeft;
}
function _h(e, n) {
  var r = wn(e), a = gr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
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
function Pn(e) {
  return wn(e).getComputedStyle(e);
}
function xh(e) {
  var n, r = gr(e), a = Mi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = nt(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = nt(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Bi(e), s = -a.scrollTop;
  return Pn(t || r).direction === "rtl" && (i += nt(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
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
    gr(e)
  );
}
function Ii(e) {
  var n = Pn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function qu(e) {
  return ["html", "body", "#document"].indexOf(En(e)) >= 0 ? e.ownerDocument.body : hn(e) && Ii(e) ? e : qu(uo(e));
}
function rt(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = qu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = wn(a), l = t ? [o].concat(o.visualViewport || [], Ii(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(rt(uo(l)))
  );
}
function eg(e) {
  return ["table", "td", "th"].indexOf(En(e)) >= 0;
}
function gl(e) {
  return !hn(e) || // https://github.com/popperjs/popper-core/issues/837
  Pn(e).position === "fixed" ? null : e.offsetParent;
}
function ng(e) {
  var n = /firefox/i.test(ei()), r = /Trident/i.test(ei());
  if (r && hn(e)) {
    var a = Pn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = uo(e);
  for (Vi(t) && (t = t.host); hn(t) && ["html", "body"].indexOf(En(t)) < 0; ) {
    var o = Pn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ei(e) {
  for (var n = wn(e), r = gl(e); r && eg(r) && Pn(r).position === "static"; )
    r = gl(r);
  return r && (En(r) === "html" || En(r) === "body" && Pn(r).position === "static") ? n : r || ng(e) || n;
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
  var r = Wa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function yl(e, n, r) {
  return n === ju ? ni(_h(e, r)) : ka(n) ? ag(n, r) : ni(xh(gr(e)));
}
function tg(e) {
  var n = rt(uo(e)), r = ["absolute", "fixed"].indexOf(Pn(e).position) >= 0, a = r && hn(e) ? Ei(e) : e;
  return ka(a) ? n.filter(function(t) {
    return ka(t) && rg(t, a) && En(t) !== "body";
  }) : [];
}
function og(e, n, r, a) {
  var t = n === "clippingParents" ? tg(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = yl(e, u, a);
    return s.top = nt(d.top, s.top), s.right = hl(d.right, s.right), s.bottom = hl(d.bottom, s.bottom), s.left = nt(d.left, s.left), s;
  }, yl(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ut(e) {
  return e.split("-")[1];
}
function ig(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Ln(a) : null, o = a ? ut(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case zn:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case mr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case Sa:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case lr:
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
      case so:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case st:
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
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Fh : i, u = r.rootBoundary, d = u === void 0 ? ju : u, v = r.elementContext, f = v === void 0 ? Qa : v, m = r.altBoundary, p = m === void 0 ? !1 : m, y = r.padding, g = y === void 0 ? 0 : y, w = sg(typeof g != "number" ? g : ug(g, lo)), V = f === Qa ? Yh : Qa, k = e.rects.popper, $ = e.elements[p ? V : f], E = og(ka($) ? $ : $.contextElement || gr(e.elements.popper), s, d, l), b = Wa(e.elements.reference), D = Xu({
    reference: b,
    element: k,
    strategy: "absolute",
    placement: t
  }), O = ni(Object.assign({}, k, D)), N = f === Qa ? O : b, M = {
    top: E.top - N.top + w.top,
    bottom: N.bottom - E.bottom + w.bottom,
    left: E.left - N.left + w.left,
    right: N.right - E.right + w.right
  }, C = e.modifiersData.offset;
  if (f === Qa && C) {
    var S = C[t];
    Object.keys(M).forEach(function(j) {
      var _ = [Sa, mr].indexOf(j) >= 0 ? 1 : -1, F = [zn, mr].indexOf(j) >= 0 ? "y" : "x";
      M[j] += S[F] * _;
    });
  }
  return M;
}
function dg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Wu : s, d = ut(a), v = d ? i ? ml : ml.filter(function(p) {
    return ut(p) === d;
  }) : lo, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, y) {
    return p[y] = Ku(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[Ln(y)], p;
  }, {});
  return Object.keys(m).sort(function(p, y) {
    return m[p] - m[y];
  });
}
function vg(e) {
  if (Ln(e) === io)
    return [];
  var n = It(e);
  return [pl(e), n, pl(n)];
}
function fg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, y = r.allowedAutoPlacements, g = n.options.placement, w = Ln(g), V = w === g, k = s || (V || !p ? [It(g)] : vg(g)), $ = [g].concat(k).reduce(function(G, Z) {
      return G.concat(Ln(Z) === io ? dg(n, {
        placement: Z,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : Z);
    }, []), E = n.rects.reference, b = n.rects.popper, D = /* @__PURE__ */ new Map(), O = !0, N = $[0], M = 0; M < $.length; M++) {
      var C = $[M], S = Ln(C), j = ut(C) === so, _ = [zn, mr].indexOf(S) >= 0, F = _ ? "width" : "height", B = Ku(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Y = _ ? j ? Sa : lr : j ? mr : zn;
      E[F] > b[F] && (Y = It(Y));
      var ae = It(Y), se = [];
      if (o && se.push(B[S] <= 0), i && se.push(B[Y] <= 0, B[ae] <= 0), se.every(function(G) {
        return G;
      })) {
        N = C, O = !1;
        break;
      }
      D.set(C, se);
    }
    if (O)
      for (var H = p ? 3 : 1, J = function(Z) {
        var ce = $.find(function(fe) {
          var De = D.get(fe);
          if (De)
            return De.slice(0, Z).every(function(Ge) {
              return Ge;
            });
        });
        if (ce)
          return N = ce, "break";
      }, K = H; K > 0; K--) {
        var z = J(K);
        if (z === "break")
          break;
      }
    n.placement !== N && (n.modifiersData[a]._skip = !0, n.placement = N, n.reset = !0);
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
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [lr, Sa].indexOf(a) >= 0 ? {
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
  return e === wn(e) || !hn(e) ? Mi(e) : gg(e);
}
function bg(e) {
  var n = e.getBoundingClientRect(), r = ja(n.width) / e.offsetWidth || 1, a = ja(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function wg(e, n, r) {
  r === void 0 && (r = !1);
  var a = hn(n), t = hn(n) && bg(n), o = gr(n), l = Wa(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((En(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ii(o)) && (i = yg(n)), hn(n) ? (s = Wa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Bi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function Cg(e) {
  var n = Wa(e), r = e.offsetWidth, a = e.offsetHeight;
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
function Gn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var yr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Tg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', bl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Pg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), bl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Gn(yr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Gn(yr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          xo.indexOf(n.phase) < 0 && console.error(Gn(yr, n.name, '"phase"', "either " + xo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Gn(yr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Gn(yr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Gn(yr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Gn(yr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
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
      setOptions: function(w) {
        var V = typeof w == "function" ? w(d.options) : w;
        y(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: ka(i) ? rt(i) : i.contextElement ? rt(i.contextElement) : [],
          popper: rt(s)
        };
        var k = kg(Vg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = k.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var $ = Og([].concat(k, d.options.modifiers), function(C) {
            var S = C.name;
            return S;
          });
          if (Pg($), Ln(d.options.placement) === io) {
            var E = d.orderedModifiers.find(function(C) {
              var S = C.name;
              return S === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var b = Pn(s), D = b.marginTop, O = b.marginRight, N = b.marginBottom, M = b.marginLeft;
          [D, O, N, M].some(function(C) {
            return parseFloat(C);
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
          var w = d.elements, V = w.reference, k = w.popper;
          if (!Sl(V, k)) {
            process.env.NODE_ENV !== "production" && console.error(wl);
            return;
          }
          d.rects = {
            reference: wg(V, Ei(k), d.options.strategy === "fixed"),
            popper: Cg(k)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var $ = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && ($ += 1, $ > 100)) {
              console.error(Mg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var b = d.orderedModifiers[E], D = b.fn, O = b.options, N = O === void 0 ? {} : O, M = b.name;
            typeof D == "function" && (d = D({
              state: d,
              options: N,
              name: M,
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
    if (!Sl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(wl), m;
    m.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var w = g.name, V = g.options, k = V === void 0 ? {} : V, $ = g.effect;
        if (typeof $ == "function") {
          var E = $({
            state: d,
            name: w,
            instance: m,
            options: k
          }), b = function() {
          };
          v.push(E || b);
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
var Tt = {
  passive: !0
};
function Ig(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = wn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Tt);
  }), i && s.addEventListener("resize", r.update, Tt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Tt);
    }), i && s.removeEventListener("resize", r.update, Tt);
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
    x: ja(n * t) / t || 0,
    y: ja(r * t) / t || 0
  };
}
function kl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, m = f === void 0 ? 0 : f, p = l.y, y = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = g.x, y = g.y;
  var w = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), k = lr, $ = zn, E = window;
  if (u) {
    var b = Ei(r), D = "clientHeight", O = "clientWidth";
    if (b === wn(r) && (b = gr(r), Pn(b).position !== "static" && i === "absolute" && (D = "scrollHeight", O = "scrollWidth")), b = b, t === zn || (t === lr || t === Sa) && o === st) {
      $ = mr;
      var N = v && b === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[D]
      );
      y -= N - a.height, y *= s ? 1 : -1;
    }
    if (t === lr || (t === zn || t === mr) && o === st) {
      k = Sa;
      var M = v && b === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[O]
      );
      m -= M - a.width, m *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && Ag), S = d === !0 ? zg({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  if (m = S.x, y = S.y, s) {
    var j;
    return Object.assign({}, C, (j = {}, j[$] = V ? "0" : "", j[k] = w ? "0" : "", j.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, C, (n = {}, n[$] = V ? y + "px" : "", n[k] = w ? m + "px" : "", n.transform = "", n));
}
function Lg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = Pn(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Ln(n.placement),
    variation: ut(n.placement),
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
    !hn(o) || !En(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
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
      !hn(t) || !En(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Yg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ug,
  effect: Fg,
  requires: ["computeStyles"]
};
var Hg = [Eg, Ng, Rg, Yg], jg = /* @__PURE__ */ Bg({
  defaultModifiers: Hg
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
  var n = I(null), r = I(null), a = I(!1), t = I({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = pt(() => a.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: b,
      height: D
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Le(b),
      height: Le(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, $());
  }, v = /* @__PURE__ */ function() {
    var b = Tl(function* () {
      e.trigger === "hover" && (s = !1, yield Bn(), !i && E());
    });
    return function() {
      return b.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, m = /* @__PURE__ */ function() {
    var b = Tl(function* () {
      e.trigger === "hover" && (i = !1, yield Bn(), !s && E());
    });
    return function() {
      return b.apply(this, arguments);
    };
  }(), p = () => {
    $();
  }, y = () => {
    a.value = !1, T(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && y();
  }, w = () => {
    u();
    var b = {
      x: Le(e.offsetX),
      y: Le(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: b.x,
          distance: b.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: b.x,
          distance: b.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: b.x,
          distance: b.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: b.x,
          distance: -b.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: b.x,
          distance: -b.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: b.x,
          distance: -b.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: b.y,
          distance: b.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: b.y,
          distance: -b.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: b.y,
          distance: -b.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: b.x,
          distance: -b.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: b.x,
          distance: b.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: b.y,
          distance: b.x
        };
    }
  }, V = () => {
    var {
      placement: b,
      skidding: D,
      distance: O
    } = w(), N = [Wt({}, cg, {
      enabled: a.value
    }), Wt({}, hg, {
      options: {
        offset: [D, O]
      }
    })];
    return {
      placement: b,
      modifiers: N
    };
  }, k = () => {
    l.setOptions(V());
  }, $ = () => {
    var {
      disabled: b
    } = e;
    b || (a.value = !0, T(e["onUpdate:show"], !0));
  }, E = () => {
    a.value = !1, T(e["onUpdate:show"], !1);
  };
  return fs(n, "click", g), ie(() => e.show, (b) => {
    a.value = b ?? !1;
  }, {
    immediate: !0
  }), ie(() => e.offsetX, k), ie(() => e.offsetY, k), ie(() => e.placement, k), ie(() => a.value, (b) => {
    b ? (k(), T(e.onOpen)) : T(e.onClose);
  }), ie(() => e.disabled, E), Gt(() => {
    var b, D = e.reference ? (b = n.value) == null ? void 0 : b.querySelector(e.reference) : n.value;
    l = jg(D ?? n.value, r.value, V());
  }), Ka(() => {
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
    handlePopoverClose: y,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: m,
    resize: k,
    open: $,
    close: E
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
} = ne("tooltip");
function Jg(e, n) {
  return h(), P(
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
      Ta,
      {
        to: e.teleport
      },
      [Q(
        Ee,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [we(A(
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
            [A(
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
      toSizeUnit: pe,
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
        return [(a = e.tooltip) != null && a.content ? (h(), P(
          "span",
          ny,
          re(e.tooltip.content),
          1
          /* TEXT */
        )) : W(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [A(
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
    var n = I(!1), r = U(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = U(() => e.tooltip === !1 ? {
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
const Rr = Qu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var MS = Rr;
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
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ft(e);
}
var {
  classes: Ol,
  n: dn
} = ne("fab");
const Ur = ee({
  name: "VarFab",
  inheritAttrs: !1,
  props: iy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, t = I(!1), o = I(null), {
      disabled: l
    } = Qt(), i = U({
      get() {
        return t.value;
      },
      set(m) {
        t.value = m, T(e["onUpdate:active"], m);
      }
    }), s = (m, p, y) => {
      if (m.stopPropagation(), !(e.trigger !== "click" || e.disabled)) {
        if (y === 0) {
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
        class: Ol([i.value, dn("trigger-active-icon"), dn("trigger-inactive-icon")]),
        name: i.value ? e.activeIcon : e.inactiveIcon,
        size: i.value ? e.inactiveIconSize : e.activeIconSize,
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
        onClick: (g) => s(g, !i.value, y.length),
        onMouseleave: () => u(!1, y.length),
        onMouseenter: () => u(!0, y.length)
      }, a), [Q(Ee, {
        name: dn("--active-transition")
      }, Pl(m = v()) ? m : {
        default: () => [m]
      }), Q(Ee, {
        name: dn("--actions-transition-" + e.direction),
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      }, {
        default: () => [we(Q("div", {
          class: dn("actions"),
          onClick: (g) => g.stopPropagation()
        }, [y.map((g) => Q("div", {
          class: dn("action")
        }, [g]))]), [[fr, e.show && i.value && y.length]])]
      })]);
    };
    return ie(() => e.active, (m) => {
      t.value = m;
    }, {
      immediate: !0
    }), ie(() => e.trigger, () => {
      i.value = !1;
    }), ie(() => e.disabled, () => {
      i.value = !1;
    }), fs(o, "click", d), () => {
      var {
        teleport: m
      } = e;
      if (m) {
        var p;
        return Q(Ta, {
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
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var BS = Ur;
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
} = ne("form");
function vy(e, n) {
  return h(), P(
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
    var n = U(() => e.disabled), r = U(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = hm(), o = (d) => {
      setTimeout(() => {
        var v = Va(d), f = v === window ? 0 : qi(v), m = qi(d) - f - Le(e.scrollToErrorOffsetY);
        ot(v, {
          top: m,
          animation: So
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = uy(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: w
          } = g;
          return w();
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
const Rn = _u;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
Rn.useValidation = yn;
Rn.useForm = bn;
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
  onClick: R(),
  onLoad: R(),
  onError: R()
}, {
  n: my,
  classes: py
} = ne("image"), hy = ["alt", "title", "lazy-error", "lazy-loading"], gy = ["alt", "title", "src"];
function yy(e, n) {
  var r = Ne("lazy"), a = Ne("ripple");
  return we((h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? we((h(), P(
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
    )), [[r, e.src]]) : (h(), P(
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
    Lazy: it,
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
      toSizeUnit: pe,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
xu.render = yy;
const Fr = xu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var ES = Fr, ed = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY");
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
} = ne("swipe"), Ty = ["onClick"];
function Py(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [A(
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
    }, () => [e.indicator && e.length ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), P(
        Oe,
        null,
        Ae(e.length, (r, a) => (h(), P(
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
    var n = I(null), r = I(0), a = U(() => e.vertical), t = I(0), o = I(0), l = I(!1), i = I(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = by(), v = !1, f = -1, m, p, y, g, w, V = (H) => s.find((J) => {
      var {
        index: K
      } = J;
      return K.value === H;
    }), k = () => {
      e.loop && (o.value >= 0 && V(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && V(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (V(d.value - 1).setTranslate(0), V(0).setTranslate(0)));
    }, $ = (H) => {
      var J = rn(H) ? H : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: K
      } = e;
      return J <= -1 ? K ? -1 : 0 : J >= d.value ? K ? d.value : d.value - 1 : J;
    }, E = (H) => {
      var {
        loop: J
      } = e;
      return H === -1 ? J ? d.value - 1 : 0 : H === d.value ? J ? 0 : d.value - 1 : H;
    }, b = (H) => {
      var {
        loop: J
      } = e;
      return H < 0 ? J ? d.value - 1 : 0 : H > d.value - 1 ? J ? 0 : d.value - 1 : H;
    }, D = (H) => {
      var J = o.value >= r.value, K = o.value <= -t.value, z = 0, G = -(t.value - r.value);
      l.value = !0, (J || K) && (l.value = !0, o.value = K ? z : G, V(0).setTranslate(0), V(d.value - 1).setTranslate(0)), Jt(() => {
        l.value = !1, T(H);
      });
    }, O = () => {
      i.value = b(L(e.initialIndex));
    }, N = () => {
      var {
        autoplay: H
      } = e;
      !H || d.value <= 1 || (M(), f = window.setTimeout(() => {
        B(), N();
      }, L(H)));
    }, M = () => {
      f && clearTimeout(f);
    }, C = (H, J) => {
      if (H > J && H > 10)
        return "horizontal";
      if (J > H && J > 10)
        return "vertical";
    }, S = (H) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: J,
          clientY: K
        } = H.touches[0];
        m = J, p = K, y = performance.now(), v = !0, M(), D(() => {
          l.value = !0;
        });
      }
    }, j = (H) => {
      var {
        touchable: J,
        vertical: K
      } = e;
      if (!(!v || !J)) {
        var {
          clientX: z,
          clientY: G
        } = H.touches[0], Z = Math.abs(z - m), ce = Math.abs(G - p), fe = C(Z, ce), De = K ? "vertical" : "horizontal";
        if (fe === De) {
          H.preventDefault();
          var Ge = g !== void 0 ? z - g : 0, qe = w !== void 0 ? G - w : 0;
          g = z, w = G, o.value += K ? qe : Ge, k();
        }
      }
    }, _ = () => {
      if (v) {
        var {
          vertical: H,
          onChange: J
        } = e, K = H ? w < p : g < m, z = Math.abs(H ? p - w : m - g), G = performance.now() - y <= Cy && z >= Sy, Z = G ? $(K ? i.value + 1 : i.value - 1) : $();
        v = !1, l.value = !1, g = void 0, w = void 0, o.value = Z * -r.value;
        var ce = i.value;
        i.value = E(Z), N(), ce !== i.value && T(J, i.value);
      }
    }, F = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((H) => {
        H.setTranslate(0);
      }), N(), setTimeout(() => {
        l.value = !1;
      }));
    }, B = (H) => {
      if (!(d.value <= 1)) {
        var {
          loop: J,
          onChange: K
        } = e, z = i.value;
        i.value = b(z + 1), (H == null ? void 0 : H.event) !== !1 && T(K, i.value), D(() => {
          if (z === d.value - 1 && J) {
            V(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          z !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, Y = (H) => {
      if (!(d.value <= 1)) {
        var {
          loop: J,
          onChange: K
        } = e, z = i.value;
        i.value = b(z - 1), (H == null ? void 0 : H.event) !== !1 && T(K, i.value), D(() => {
          if (z === 0 && J) {
            V(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          z !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, ae = (H, J) => {
      if (!(d.value <= 1 || H === i.value)) {
        H = H < 0 ? 0 : H, H = H >= d.value ? d.value : H;
        var K = H > i.value ? B : Y, z = Math.abs(H - i.value);
        Array.from({
          length: z
        }).forEach((G, Z) => {
          K({
            event: Z === z - 1 ? J == null ? void 0 : J.event : !1
          });
        });
      }
    }, se = {
      size: r,
      vertical: a
    };
    return u(se), ie(() => d.value, /* @__PURE__ */ wy(function* () {
      yield Bn(), O(), F();
    })), qa(F), pr(M), Ka(M), ba(window, "resize", F), {
      n: ky,
      classes: $y,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: S,
      handleTouchmove: j,
      handleTouchend: _,
      next: B,
      prev: Y,
      to: ae,
      resize: F,
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
  return h(), P(
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
    var e = I(0), {
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
  "onUpdate:show": R()
}, Je(nd, ["loop", "indicator", "onChange"]), Je(mt, [
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
          default: ve(() => [(h(!0), P(
            Oe,
            null,
            Ae(e.images, (l) => (h(), ge(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [A(
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
                  [A(
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
          indicator: ve((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [W(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), P(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              re(i + 1) + " / " + re(s),
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
      )) : x("v-if", !0)]), A(
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
    var n = I(!1), r = U(() => {
      var {
        images: M,
        current: C
      } = e, S = M.findIndex((j) => j === C);
      return S >= 0 ? S : 0;
    }), a = I(1), t = I(0), o = I(0), l = I(void 0), i = I(void 0), s = I(!0), u = null, d = null, v = null, f = (M, C) => {
      var {
        clientX: S,
        clientY: j
      } = M, {
        clientX: _,
        clientY: F
      } = C;
      return Math.abs(Math.sqrt(Math.pow(_ - S, 2) + Math.pow(F - j, 2)));
    }, m = (M, C) => ({
      clientX: M.clientX,
      clientY: M.clientY,
      timestamp: Date.now(),
      target: C
    }), p = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Dl);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (M) => d ? f(d, M) <= Il && M.timestamp - d.timestamp <= El && d.target === M.target : !1, w = (M) => !M || !u || !d ? !1 : f(u, d) <= Il && Date.now() - d.timestamp < Ey && (M === u.target || M.parentNode === u.target), V = (M) => {
      v = window.setTimeout(() => {
        w(M.target) && N(), u = null;
      }, El);
    }, k = (M) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = M, S = m(C[0], M.currentTarget);
      if (u = S, g(S)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = S;
    }, $ = (M) => {
      var {
        offsetWidth: C,
        offsetHeight: S
      } = M, {
        naturalWidth: j,
        naturalHeight: _
      } = M.querySelector("." + Bl("image"));
      return {
        width: C,
        height: S,
        imageRadio: _ / j,
        rootRadio: S / C,
        zoom: L(e.zoom)
      };
    }, E = (M) => {
      var {
        zoom: C,
        imageRadio: S,
        rootRadio: j,
        width: _,
        height: F
      } = $(M);
      if (!S)
        return 0;
      var B = S > j ? F / S : _;
      return Math.max(0, (C * B - _) / 2) / C;
    }, b = (M) => {
      var {
        zoom: C,
        imageRadio: S,
        rootRadio: j,
        width: _,
        height: F
      } = $(M);
      if (!S)
        return 0;
      var B = S > j ? F : _ * S;
      return Math.max(0, (C * B - F) / 2) / C;
    }, D = (M, C, S) => M + C >= S ? S : M + C <= -S ? -S : M + C, O = (M) => {
      if (d) {
        var C = M.currentTarget, {
          touches: S
        } = M, j = m(S[0], C);
        if (a.value > 1) {
          var _ = j.clientX - d.clientX, F = j.clientY - d.clientY, B = E(C), Y = b(C);
          t.value = D(t.value, _, B), o.value = D(o.value, F, Y);
        }
        d = j;
      }
    }, N = () => {
      if (a.value > 1) {
        y(), setTimeout(() => T(e["onUpdate:show"], !1), Dl);
        return;
      }
      T(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (M) => {
      n.value = M;
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
      handleTouchstart: k,
      handleTouchmove: O,
      handleTouchend: V,
      close: N
    };
  }
});
td.render = Ny;
const ur = td;
function at() {
  return at = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, at.apply(this, arguments);
}
var Qn, tt = {};
function Ay(e) {
  return e === void 0 && (e = {}), Ze(e) ? at({}, tt, {
    images: [e]
  }) : Ce(e) ? at({}, tt, {
    images: e
  }) : at({}, tt, e);
}
function On(e) {
  if (ct()) {
    On.close();
    var n = Ay(e), r = Be(n);
    r.teleport = "body", Qn = r;
    var {
      unmountInstance: a
    } = Ja(ur, r, {
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
On.close = () => {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
On.setDefaultOptions = (e) => {
  tt = e;
};
On.resetDefaultOptions = () => {
  tt = {};
};
ur.install = function(e) {
  e.component(ur.name, ur);
};
On.install = function(e) {
  e.component(ur.name, ur);
};
On.Component = ur;
var AS = ur, Et = {
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
} = ne("sticky");
function Ry(e, n) {
  return h(), P(
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
    [A(
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
  props: Et,
  setup(e) {
    var n = I(null), r = I(null), a = I(!1), t = I("0px"), o = I("0px"), l = I("auto"), i = I("auto"), s = I("auto"), u = I("auto"), d = U(() => !e.disabled && e.cssMode), v = U(() => !e.disabled && !e.cssMode && a.value), f = U(() => Le(e.offsetTop)), m, p = () => {
      var {
        cssMode: k,
        disabled: $
      } = e;
      if (!$) {
        var E = 0;
        if (m !== window) {
          var {
            top: b
          } = m.getBoundingClientRect();
          E = b;
        }
        var D = r.value, O = n.value, {
          top: N,
          left: M
        } = O.getBoundingClientRect(), C = N - E;
        return C <= f.value ? (k || (l.value = O.offsetWidth + "px", i.value = O.offsetHeight + "px", t.value = E + f.value + "px", o.value = M + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: C,
          isFixed: !1
        });
      }
    }, y = () => {
      if (m) {
        var k = p();
        k && T(e.onScroll, k.offsetTop, k.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var k = Al(function* () {
        a.value = !1, yield zv(), p();
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var k = Al(function* () {
        yield Bn(), m = Va(n.value), m !== window && m.addEventListener("scroll", y), y();
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), V = () => {
      m !== window && m.removeEventListener("scroll", y);
    };
    return ie(() => e.disabled, g), ln(w), Ka(V), pr(V), ba(window, "scroll", y), {
      n: zy,
      classes: Ly,
      resize: g,
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
const Yn = od;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var zS = Yn, id = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY");
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
var Yy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Hy,
  classes: jy
} = ne("index-anchor");
function Wy(e, n) {
  return h(), ge(
    Za(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [A(
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
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Yy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Fy(), t = I(0), o = I(!1), l = U(() => e.index), i = I(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, p = (g) => {
      o.value = g;
    }, y = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(y), {
      n: Hy,
      classes: jy,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Ee
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
function Pt(e) {
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
} = ne("index-bar"), Ky = ["onClick"];
function Zy(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [W(e.$slots, "default"), A(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), P(
        Oe,
        null,
        Ae(e.anchorNameList, (r) => (h(), P(
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
    } = Uy(), t = I(""), o = I(null), l = I([]), i = I(), s = U(() => e.sticky), u = U(() => e.cssMode), d = U(() => Le(e.stickyOffsetTop)), v = U(() => e.zIndex), f = null, m = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(m);
    var p = (b, D) => {
      var O = fi(b) ? b.name.value : b;
      O === i.value || O === void 0 || (i.value = O, (D == null ? void 0 : D.event) !== !1 && T(e.onChange, O));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: b
      } = f.getBoundingClientRect(), {
        scrollTop: D
      } = f, {
        top: O
      } = o.value.getBoundingClientRect();
      return D - b + O;
    }, g = () => {
      var b = Zt(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, O = y();
      r.forEach((N, M) => {
        var C = N.ownTop.value, S = b - C + d.value - O, j = M === r.length - 1 ? D : r[M + 1].ownTop.value - N.ownTop.value;
        S >= 0 && S < j && t.value === "" && (M && !e.cssMode && r[M - 1].setDisabled(!0), N.setDisabled(!1), p(N));
      });
    }, w = /* @__PURE__ */ function() {
      var b = Pt(function* (D) {
        var {
          anchorName: O,
          manualCall: N = !1,
          options: M
        } = D;
        if (N && T(e.onClick, O), O !== i.value) {
          var C = r.find((F) => {
            var {
              name: B
            } = F;
            return O === B.value;
          });
          if (C) {
            var S = y(), j = C.ownTop.value - d.value + S, _ = pi(f);
            t.value = O, p(O, M), yield ot(f, {
              left: _,
              top: j,
              animation: os,
              duration: L(e.duration)
            }), Jt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return b.apply(this, arguments);
      };
    }(), V = /* @__PURE__ */ function() {
      var b = Pt(function* () {
        yield Bn(), f = Va(o.value);
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), k = () => {
      f.addEventListener("scroll", g);
    }, $ = () => {
      f.removeEventListener("scroll", g);
    }, E = (b, D) => {
      Tn(() => w({
        anchorName: b,
        options: D
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ Pt(function* () {
      yield Bn(), r.forEach((b) => {
        var {
          name: D,
          setOwnTop: O
        } = b;
        D.value && l.value.push(D.value), O();
      });
    })), ln(/* @__PURE__ */ Pt(function* () {
      yield V(), k();
    })), qt($), pr($), {
      n: qy,
      classes: Xy,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: E,
      anchorClick: w
    };
  }
});
sd.render = Zy;
const Hr = sd;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var RS = Hr;
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
} = ne("input"), xy = ["id", "disabled", "type", "value", "maxlength", "rows"], eb = ["id", "disabled", "type", "value", "maxlength"], nb = ["for"];
function rb(e, n) {
  var r = te("var-icon"), a = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[14] || (n[14] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (h(), P(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : x("v-if", !0), e.textarea ? (h(), P(
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
        )) : (h(), P(
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
        )), A(
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
      ), A(
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
    ), e.line ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
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
    var n = I("var-input-" + Xa().uid), r = I(null), a = I(!1), t = U(() => e.type === "number" ? "text" : e.type), o = U(() => {
      var {
        maxlength: B,
        modelValue: Y
      } = e;
      return B ? Nn(Y) ? "0 / " + B : String(Y).length + "/" + B : "";
    }), {
      bindForm: l,
      form: i
    } = bn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = yn(), f = (B) => {
      Me(() => {
        var {
          validateTrigger: Y,
          rules: ae,
          modelValue: se
        } = e;
        u(Y, B, ae, se);
      });
    }, m = () => {
      var {
        hint: B,
        modelValue: Y
      } = e;
      if (!B && !Nn(Y))
        return go("--placeholder-hidden");
      if (B && (!Nn(Y) || a.value))
        return go("--placeholder-hint");
    }, p = (B) => {
      a.value = !0, T(e.onFocus, B), f("onFocus");
    }, y = (B) => {
      a.value = !1, T(e.onBlur, B), f("onBlur");
    }, g = (B) => {
      var Y = B.target, {
        value: ae
      } = Y;
      return e.type === "number" && (ae = D(ae)), N(O(ae));
    }, w = (B) => {
      Object.assign(B.target, {
        composing: !0
      });
    }, V = (B) => {
      var Y = B.target;
      Y.composing && (Y.composing = !1, Y.dispatchEvent(new Event("input")));
    }, k = (B) => {
      var {
        composing: Y
      } = B.target;
      if (!Y) {
        var ae = g(B);
        T(e["onUpdate:modelValue"], ae), T(e.onInput, ae, B), f("onInput");
      }
    }, $ = (B) => {
      var Y = g(B);
      T(e.onChange, Y, B), f("onChange");
    }, E = () => {
      var {
        disabled: B,
        readonly: Y,
        clearable: ae,
        onClear: se
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || B || Y || !ae || (T(e["onUpdate:modelValue"], ""), T(se, ""), f("onClear"));
    }, b = (B) => {
      var {
        disabled: Y,
        onClick: ae
      } = e;
      i != null && i.disabled.value || Y || (T(ae, B), f("onClick"));
    }, D = (B) => {
      var Y = B.indexOf("-"), ae = B.indexOf(".");
      return Y > -1 && (B = Y === 0 ? "-" + B.replace(/-/g, "") : B.replace(/-/g, "")), ae > -1 && (B = B.slice(0, ae + 1) + B.slice(ae).replace(/\./g, "")), B.replace(/[^-0-9.]/g, "");
    }, O = (B) => e.modelModifiers.trim ? B.trim() : B, N = (B) => e.maxlength ? B.slice(0, L(e.maxlength)) : B, M = (B) => {
      var {
        disabled: Y,
        readonly: ae
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || Y || ae || B.stopPropagation();
    }, C = () => {
      T(e["onUpdate:modelValue"], ""), v();
    }, S = () => d(e.rules, e.modelValue), j = () => {
      var B;
      (B = r.value) == null || B.focus();
    }, _ = () => {
      r.value.blur();
    }, F = {
      reset: C,
      validate: S,
      resetValidation: v
    };
    return T(l, F), ln(() => {
      e.autofocus && j();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: s,
      type: t,
      maxlengthText: o,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: go,
      classes: _y,
      isEmpty: Nn,
      computePlaceholderState: m,
      handleFocus: p,
      handleBlur: y,
      handleInput: k,
      handleChange: $,
      handleClear: E,
      handleClick: b,
      handleTouchstart: M,
      handleCompositionStart: w,
      handleCompositionEnd: V,
      validate: S,
      resetValidation: v,
      reset: C,
      focus: j,
      blur: _
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
  onClick: R()
}, {
  n: ib,
  classes: lb
} = ne("link");
function sb(e, n) {
  return h(), ge(
    Za(e.tag),
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
    var n = U(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = U(() => {
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
      toSizeUnit: pe
    };
  }
});
dd.render = sb;
const jr = dd;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var FS = jr, ub = {
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
} = ne("list");
function cb(e, n) {
  var r = te("var-loading"), a = Ne("ripple");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [W(e.$slots, "default"), e.loading ? W(e.$slots, "loading", {
      key: 0
    }, () => [A(
      "div",
      {
        class: c(e.n("loading"))
      },
      [A(
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
    }, () => [A(
      "div",
      {
        class: c(e.n("finished"))
      },
      re(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? W(e.$slots, "error", {
      key: 2
    }, () => [we((h(), P(
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
    )), [[a]])]) : x("v-if", !0), A(
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
    VarLoading: kn
  },
  props: ub,
  setup(e) {
    var n = I(null), r = I(null), a, t = () => {
      T(e["onUpdate:error"], !1), T(e["onUpdate:loading"], !0), T(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Le(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = db(function* () {
        yield Me();
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
      a = Va(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), Ka(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: He,
      listEl: n,
      detectorEl: r,
      dt: Kt,
      isNumber: rn,
      load: t,
      check: l,
      n: vb,
      classes: fb
    };
  }
});
vd.render = cb;
const Wr = vd;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var YS = Wr, mb = {
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
  Ul || (Ul = !0, Ja(hb, je));
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
}, HS = yd;
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
} = ne("menu");
function Vb(e, n) {
  return h(), P(
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
      Ta,
      {
        to: e.teleport
      },
      [Q(
        Ee,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [we(A(
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
      toSizeUnit: pe,
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
const Hn = bd;
Hn.install = function(e) {
  e.component(Hn.name, Hn);
};
var jS = Hn, wd = Symbol("SELECT_BIND_OPTION_KEY");
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
  var r = te("var-checkbox"), a = Ne("ripple");
  return we((h(), P(
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
    [A(
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
    )) : x("v-if", !0), A(
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
    var n = I(!1), r = U(() => n.value), a = U(() => e.label), t = U(() => e.value), {
      select: o,
      bindSelect: l
    } = Bb(), {
      wrapWidth: i,
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
    return ie([() => e.label, () => e.value], v), l(y), {
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
const Gr = Cd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var WS = Gr, Ab = {
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
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ft(e);
}
var {
  n: Fl
} = ne("overlay");
const qr = ee({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Ab,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = pt(() => e.show, 1), {
      disabled: o
    } = Qt(), l = () => {
      T(e.onClick), T(e["onUpdate:show"], !1);
    };
    _t(() => e.show, () => e.lockScroll);
    var i = () => Q("div", Ve({
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
      return Q(Ee, {
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
        return Q(Ta, {
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
qr.install = function(e) {
  e.component(qr.name, qr);
};
var GS = qr, Lb = {
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
} = ne("pagination"), Fb = ["item-mode", "onClick"];
function Yb(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), o = te("var-menu"), l = Ne("ripple");
  return h(), P(
    "ul",
    {
      class: c(e.n())
    },
    [we((h(), P(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [W(e.$slots, "prev", {}, () => [Q(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), P(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [Q(
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
      ), A("span", null, [be(
        " / " + re(e.pageCount) + " ",
        1
        /* TEXT */
      ), A(
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
    )) : (h(!0), P(
      Oe,
      {
        key: 1
      },
      Ae(e.pageList, (i, s) => we((h(), P(
        "li",
        {
          key: e.toNumber(i) + s,
          "item-mode": e.getMode(i, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [be(
          re(i),
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
    )), we((h(), P(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [W(e.$slots, "next", {}, () => [Q(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), P(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [Q(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), P(
            Oe,
            null,
            Ae(e.sizeOption, (i, s) => we((h(), ge(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [be(
                  re(i) + re(e.pack.paginationItem) + " / " + re(e.pack.paginationPage),
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
          default: ve(() => [A(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [A(
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (h(), P(
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
    )) : x("v-if", !0), e.totalText ? (h(), P(
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
    VarMenu: Hn,
    VarIcon: $e,
    VarCell: ar,
    VarInput: dr
  },
  directives: {
    Ripple: Re
  },
  props: Lb,
  setup(e) {
    var n = I(!1), r = I(""), a = I("1"), t = I(!1), o = I(!1), l = I(L(e.current) || 1), i = I(L(e.size) || 10), s = I([]), u = U(() => Math.ceil(e.maxPagerCount / 2)), d = U(() => Math.ceil(L(e.total) / L(i.value))), v = U(() => {
      var $ = i.value * (l.value - 1) + 1, E = Math.min(i.value * l.value, L(e.total));
      return [$, E];
    }), f = U(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), m = ($, E) => rn($) ? !1 : E === 1 ? t.value : o.value, p = ($, E) => rn($) ? "basic" : E === 1 ? "head" : "tail", y = ($, E) => {
      $ === l.value || e.disabled || (rn($) ? l.value = $ : $ === "prev" ? l.value > 1 && (l.value -= 1) : $ === "next" ? l.value < d.value && (l.value += 1) : $ === "..." && (E === 1 ? l.value = Math.max(l.value - e.maxPagerCount, 1) : l.value = Math.min(l.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, w = ($) => {
      i.value = $, n.value = !1;
    }, V = ($) => {
      var E = /^[1-9][0-9]*$/;
      return E.test($);
    }, k = ($, E, b) => {
      if (b.target.blur(), V(E)) {
        var D = L(E);
        D > d.value && (D = d.value, a.value = "" + D), D !== l.value && (l.value = D);
      }
      $ === "quick" && (r.value = ""), $ === "simple" && !V(E) && (a.value = "" + l.value);
    };
    return ie([() => e.current, () => e.size], ($) => {
      var [E, b] = $;
      l.value = L(E) || 1, i.value = L(b || 10);
    }), ie([l, i, d], ($, E) => {
      var [b, D, O] = $, [N, M] = E, C = [], {
        maxPagerCount: S,
        total: j,
        onChange: _
      } = e, F = Math.ceil(L(j) / L(M)), B = O - (S - u.value) - 1;
      if (a.value = "" + b, O - 2 > S) {
        if (N === void 0 || O !== F)
          for (var Y = 2; Y < S + 2; Y++)
            C.push(Y);
        if (b <= S && b < B) {
          C = [];
          for (var ae = 1; ae < S + 1; ae++)
            C.push(ae + 1);
          t.value = !0, o.value = !1;
        }
        if (b > S && b < B) {
          C = [];
          for (var se = 1; se < S + 1; se++)
            C.push(b + se - u.value);
          t.value = b === 2 && S === 1, o.value = !1;
        }
        if (b >= B) {
          C = [];
          for (var H = 1; H < S + 1; H++)
            C.push(O - (S - H) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", O];
      } else
        for (var J = 1; J <= O; J++)
          C.push(J);
      s.value = C, N !== void 0 && O > 0 && T(_, b, D), T(e["onUpdate:current"], b), T(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Rb,
      classes: Ub,
      pack: He,
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
      clickItem: y,
      showMenu: g,
      clickSize: w,
      setPage: k,
      toNumber: L
    };
  }
});
Sd.render = Yb;
const Xr = Sd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var qS = Xr, Hb = {
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
} = ne("paper");
function Gb(e, n) {
  var r = Ne("ripple");
  return we((h(), P(
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
  props: Hb,
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
const Kr = kd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var XS = Kr;
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
}, Je(mt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Xb,
  classes: Kb
} = ne("picker"), Yl = 300, Zb = 15, Hl = 0, Jb = ["onTouchstart", "onTouchmove", "onTouchend"], Qb = ["onTransitionend"];
function _b(e, n) {
  var r = te("var-button");
  return h(), ge(
    Za(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ve(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), P(
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
          )]), W(e.$slots, "title", {}, () => [A(
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
        )) : x("v-if", !0), A(
          "div",
          {
            class: c(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), P(
            Oe,
            null,
            Ae(e.scrollColumns, (a) => (h(), P(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Mn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
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
                [(h(!0), P(
                  Oe,
                  null,
                  Ae(a.column.texts, (t) => (h(), P(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: q({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [A(
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
          )), A(
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
          ), A(
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
    var n = I([]), r = U(() => Le(e.optionHeight)), a = U(() => Le(e.optionCount)), t = U(() => a.value * r.value / 2 - r.value / 2), o = U(() => a.value * r.value), l = [], i = (C, S) => {
      S.scrollEl = C;
    }, s = (C) => {
      T(e["onUpdate:show"], C);
    }, u = (C) => {
      var S = r.value + t.value, j = t.value - C.column.texts.length * r.value;
      C.translate >= S && (C.translate = S), C.translate <= j && (C.translate = j);
    }, d = (C, S) => {
      var {
        length: j
      } = C.column.texts;
      return S = S >= j ? j - 1 : S, S = S <= 0 ? 0 : S, S;
    }, v = (C) => {
      var S = Math.round((t.value - C.translate) / r.value);
      return d(C, S);
    }, f = () => {
      var C = n.value.map((j) => j.column.texts[j.index]), S = n.value.map((j) => j.index);
      return {
        texts: C,
        indexes: S
      };
    }, m = function(C, S, j, _) {
      _ === void 0 && (_ = !1);
      var F = t.value - d(C, S) * r.value;
      F === C.translate && (C.scrolling = !1, !_ && D(C)), C.translate = F, C.duration = j;
    }, p = (C, S, j) => {
      C.translate += Math.abs(S / j) / 3e-3 * (S < 0 ? -1 : 1);
    }, y = (C, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = mo(S.scrollEl);
    }, g = (C, S) => {
      if (S.touching) {
        var {
          clientY: j
        } = C.touches[0], _ = S.prevY !== void 0 ? j - S.prevY : 0;
        S.prevY = j, S.translate += _, u(S);
        var F = performance.now();
        F - S.momentumTime > Yl && (S.momentumTime = F, S.momentumPrevY = S.translate);
      }
    }, w = (C, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var j = S.translate - S.momentumPrevY, _ = performance.now() - S.momentumTime, F = Math.abs(j) >= Zb && _ <= Yl;
      F && p(S, j, _), S.index = v(S), m(S, S.index, F ? 1e3 : 200);
    }, V = (C) => {
      C.scrolling = !1, D(C);
    }, k = (C) => C.map((S, j) => {
      var _, F = Ce(S) ? {
        texts: S
      } : S, B = {
        id: Hl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (_ = F.initialIndex) != null ? _ : 0,
        columnIndex: j,
        duration: 0,
        momentumTime: 0,
        column: F,
        scrollEl: null,
        scrolling: !1
      };
      return m(B, B.index, 0, !0), B;
    }), $ = (C) => {
      var S = [];
      return E(S, C, 0, !0), S;
    }, E = function(C, S, j, _) {
      if (_ === void 0 && (_ = !1), Ce(S) && S.length) {
        var F, B = _ && (F = e.cascadeInitialIndexes[C.length]) != null ? F : 0, Y = {
          id: Hl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: B,
          columnIndex: j,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: S.map((ae) => ae[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        C.push(Y), m(Y, Y.index, 0, !0), E(C, Y.columns[Y.index].children, j + 1, _);
      }
    }, b = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), E(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, D = (C) => {
      var {
        cascade: S,
        onChange: j
      } = e;
      S && b(C);
      var _ = n.value.some((ae) => ae.scrolling);
      if (!_) {
        var {
          texts: F,
          indexes: B
        } = f(), Y = B.every((ae, se) => ae === l[se]);
        Y || (l = [...B], T(j, F, B));
      }
    }, O = () => {
      if (e.cascade) {
        var C = n.value.find((S) => S.scrolling);
        C && (C.translate = mo(C.scrollEl), C.index = v(C), m(C, C.index, 0, !0), C.scrolling = !1, b(C));
      } else
        n.value.forEach((S) => {
          S.translate = mo(S.scrollEl), S.index = v(S), m(S, S.index, 0);
        });
    }, N = () => {
      O();
      var {
        texts: C,
        indexes: S
      } = f();
      l = [...S], T(e.onConfirm, C, S);
    }, M = () => {
      O();
      var {
        texts: C,
        indexes: S
      } = f();
      l = [...S], T(e.onCancel, C, S);
    };
    return ie(() => e.columns, (C) => {
      n.value = e.cascade ? $(Fi(C)) : k(Fi(C));
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
      pack: He,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Ee,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: g,
      handleTouchend: w,
      handleTransitionend: V,
      confirm: N,
      cancel: M,
      dt: Kt
    };
  }
});
$d.render = _b;
const vr = $d;
var an;
function $a(e) {
  return new Promise((n) => {
    $a.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Be(r);
    a.dynamic = !0, a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = Ja(vr, a, {
      onConfirm: (o, l) => {
        T(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, an === a && (an = null);
      },
      onCancel: (o, l) => {
        T(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
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
$a.Component = vr;
$a.install = function(e) {
  e.component(vr.name, vr);
};
$a.close = () => {
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
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [A(
        "div",
        {
          class: c(e.n("linear-block")),
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), P(
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
        )) : x("v-if", !0), A(
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
      ), e.label ? (h(), P(
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
    )) : x("v-if", !0), e.mode === "circle" ? (h(), P(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), P(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), P(
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
        )) : x("v-if", !0), A(
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
      )), e.label ? (h(), P(
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
    var n = U(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = U(() => {
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
      toSizeUnit: pe,
      multiplySizeUnit: en,
      linearProps: n,
      circleProps: r
    };
  }
});
Td.render = i0;
const Zr = Td;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var ZS = Zr, l0 = {
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
} = ne("pull-refresh"), Gl = 150;
function d0(e, n) {
  var r = te("var-icon");
  return h(), P(
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
    [A(
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
    var n, r, a = I(0), t = I(null), o = I(null), l = I(0), i = I(-999), s = I("arrow-down"), u = I("default"), d = I(!1), v = 0, f = 0, m = I(!0), p = U(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = U(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), g = U(() => Math.abs(2 * a.value)), w = U(() => u.value === "success"), V = () => new Promise((M) => {
      window.setTimeout(() => {
        m.value = !0, M();
      }, Gl);
    }), k = (M) => {
      var C = "classList" in n ? n : document.body;
      C.classList[M](Wl() + "--lock");
    }, $ = (M) => {
      v = M.touches[0].clientY, f = 0;
    }, E = (M) => {
      if (p.value) {
        var C = Zt(n);
        if (!(C > 0)) {
          var S = C === 0, j = M.touches[0];
          f = j.clientY - v, S && f >= 0 && M.preventDefault(), u.value !== "pulling" && (u.value = "pulling", l.value = M.touches[0].clientY), S && i.value > a.value && k("add");
          var _ = (M.touches[0].clientY - l.value) / 2 + a.value;
          i.value = _ >= g.value ? g.value : _, i.value >= g.value * 0.2 ? (m.value = !1, s.value = "refresh", r = V()) : s.value = "arrow-down";
        }
      }
    }, b = /* @__PURE__ */ function() {
      var M = s0(function* () {
        p.value && (d.value = !0, i.value >= g.value * 0.2 ? (yield r, u.value = "loading", i.value = g.value * 0.3, T(e["onUpdate:modelValue"], !0), T(e.onRefresh), k("remove")) : (u.value = "loosing", s.value = "arrow-down", i.value = a.value, setTimeout(() => {
          d.value = !1, k("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), D = () => {
      var {
        width: M
      } = o.value.getBoundingClientRect();
      i.value = -(M + M * 0.25), a.value = -(M + M * 0.25);
    }, O = () => {
      n = e.target ? ls(e.target, "PullRefresh") : Va(t.value);
    }, N = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return ie(() => e.modelValue, (M) => {
      M === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = a.value, N();
      }, L(e.successDuration)));
    }), ln(() => {
      O(), D();
    }), ba(t, "touchmove", E), {
      n: Wl,
      classes: u0,
      iconHasChanged: m,
      ICON_TRANSITION: Gl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: $,
      touchMove: E,
      touchEnd: b,
      iconName: s,
      controlStyle: y,
      isSuccess: w
    };
  }
});
Pd.render = d0;
const Jr = Pd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var JS = Jr, v0 = {
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
} = ne("radio");
function h0(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ne("ripple");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [we((h(), P(
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
      }]]), A(
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
    var n = I(!1), r = U(() => n.value === e.checkedValue), a = I(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = c0(), {
      form: l,
      bindForm: i
    } = bn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = yn(), f = ($) => {
      Me(() => {
        var {
          validateTrigger: E,
          rules: b,
          modelValue: D
        } = e;
        u(E, $, b, D);
      });
    }, m = ($) => {
      var {
        checkedValue: E,
        onChange: b
      } = e;
      t && n.value === E || (n.value = $, T(e["onUpdate:modelValue"], n.value), T(b, n.value), t == null || t.onToggle(E), f("onChange"));
    }, p = ($) => {
      var {
        disabled: E,
        readonly: b,
        uncheckedValue: D,
        checkedValue: O,
        onClick: N
      } = e;
      l != null && l.disabled.value || E || (T(N, $), !(l != null && l.readonly.value || b) && (a.value = !0, m(r.value ? D : O)));
    }, y = ($) => {
      var {
        checkedValue: E,
        uncheckedValue: b
      } = e;
      n.value = $ === E ? E : b;
    }, g = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, w = () => d(e.rules, e.modelValue), V = ($) => {
      var {
        uncheckedValue: E,
        checkedValue: b
      } = e, D = ![E, b].includes($);
      D && ($ = r.value ? E : b), m($);
    };
    ie(() => e.modelValue, ($) => {
      n.value = $;
    }, {
      immediate: !0
    });
    var k = {
      sync: y,
      validate: w,
      resetValidation: v,
      reset: g
    };
    return T(o, k), T(i, k), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: m0,
      classes: p0,
      handleClick: p,
      toggle: V,
      reset: g,
      validate: w,
      resetValidation: v
    };
  }
});
Vd.render = h0;
const Qr = Vd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var QS = Qr;
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
} = ne("radio-group");
function C0(e, n) {
  var r = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
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
    } = bn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = yn(), u = U(() => o.value), d = (g) => {
      Me(() => {
        var {
          validateTrigger: w,
          rules: V,
          modelValue: k
        } = e;
        l(w, g, V, k);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: w
      } = g;
      return w(e.modelValue);
    }), f = (g) => {
      T(e["onUpdate:modelValue"], g), T(e.onChange, g), d("onChange");
    }, m = () => i(e.rules, e.modelValue), p = () => {
      T(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
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
const _r = Md;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var _S = _r, S0 = {
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
  n: _a
} = ne("rate"), k0 = ["onClick"];
function $0(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ne("ripple");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), P(
        Oe,
        null,
        Ae(e.toNumber(e.count), (o) => we((h(), P(
          "div",
          {
            key: o,
            style: q(e.getStyle(o)),
            class: c(e.getClass(o)),
            onClick: (l) => e.handleClick(o, l)
          },
          [Q(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(o).name,
              style: q({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          k0
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
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
var Bd = ee({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Re
  },
  props: S0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = bn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = yn(), i = (g) => {
      var {
        count: w,
        gap: V
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== L(w) ? pe(V) : 0
      };
    }, s = (g) => {
      var {
        name: w,
        color: V
      } = u(g);
      return {
        [_a("content")]: !0,
        [_a("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [_a("--error")]: a.value,
        [_a("--primary")]: w !== e.emptyIcon && !V
      };
    }, u = (g) => {
      var {
        modelValue: w,
        disabled: V,
        disabledColor: k,
        color: $,
        half: E,
        emptyColor: b,
        icon: D,
        halfIcon: O,
        emptyIcon: N
      } = e, M = $;
      return (V || n != null && n.disabled.value) && (M = k), g <= L(w) ? {
        color: M,
        name: D
      } : E && g <= L(w) + 0.5 ? {
        color: M,
        name: O
      } : {
        color: V || n != null && n.disabled.value ? k : b,
        name: N
      };
    }, d = (g, w) => {
      if (e.half) {
        var {
          offsetWidth: V
        } = w.target;
        w.offsetX <= Math.floor(V / 2) && (g -= 0.5);
      }
      T(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, L(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), m = (g, w) => {
      var {
        readonly: V,
        disabled: k,
        onChange: $
      } = e;
      V || k || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, w), T($, g), f());
    }, p = () => {
      T(e["onUpdate:modelValue"], 0), l();
    }, y = {
      reset: p,
      validate: v,
      resetValidation: l
    };
    return T(r, y), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: i,
      getClass: s,
      getCurrentState: u,
      handleClick: m,
      reset: p,
      validate: v,
      resetValidation: l,
      toSizeUnit: pe,
      toNumber: L,
      n: _a
    };
  }
});
Bd.render = $0;
const xr = Bd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var xS = xr;
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
}, O0 = (e) => (Pa(""), e = e(), Oa(), e), V0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, M0 = /* @__PURE__ */ O0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), B0 = [M0];
function I0(e, n) {
  return h(), P("svg", V0, B0);
}
var Id = ee({});
Id.render = I0;
const E0 = Id;
var D0 = (e) => (Pa(""), e = e(), Oa(), e), N0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, A0 = /* @__PURE__ */ D0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), z0 = [A0];
function L0(e, n) {
  return h(), P("svg", N0, z0);
}
var Ed = ee({});
Ed.render = L0;
const R0 = Ed;
var U0 = (e) => (Pa(""), e = e(), Oa(), e), F0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Y0 = /* @__PURE__ */ U0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), H0 = [Y0];
function j0(e, n) {
  return h(), P("svg", F0, H0);
}
var Dd = ee({});
Dd.render = j0;
const W0 = Dd;
var {
  n: G0,
  classes: q0
} = ne("result");
function X0(e, n) {
  return h(), P(
    Oe,
    null,
    [A(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), A(
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
    ), A(
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
    ), A(
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
    ), A(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), A(
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
var Z0 = (e) => (Pa(""), e = e(), Oa(), e), J0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Q0 = /* @__PURE__ */ Z0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), _0 = [Q0];
function x0(e, n) {
  return h(), P("svg", J0, _0);
}
var Ad = ee({});
Ad.render = x0;
const e1 = Ad;
var n1 = (e) => (Pa(""), e = e(), Oa(), e), r1 = {
  viewBox: "-4 -4 32 32"
}, a1 = /* @__PURE__ */ n1(() => /* @__PURE__ */ A(
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
  return h(), P("svg", r1, t1);
}
var zd = ee({});
zd.render = o1;
const i1 = zd;
var {
  n: l1,
  classes: s1
} = ne("result");
function u1(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [A(
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
          Za(e.type),
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
    )) : x("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      re(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      re(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (h(), P(
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
    var n = U(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? pe(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = U(() => {
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
const ea = Ld;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var ek = ea;
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
} = ne("row");
function p1(e, n) {
  return h(), P(
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
    } = Nm(), t = U(() => {
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
    return ie(() => a.value, o), ie(() => e.gutter, o), r(i), {
      n: c1,
      classes: m1,
      average: t,
      handleClick: l,
      padStartFlex: Nt
    };
  }
});
Rd.render = p1;
const na = Rd;
na.install = function(e) {
  e.component(na.name, na);
};
var nk = na;
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
} = ne("select"), b1 = {
  key: 1
};
function w1(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-menu"), o = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
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
            "onUpdate:show": n[1] || (n[1] = (l) => e.isFocus = l),
            onClose: e.handleBlur
          },
          {
            menu: ve(() => [A(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [W(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [A(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: q({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: c(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : W(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (h(), P(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: c(e.n("chips"))
                    },
                    [(h(!0), P(
                      Oe,
                      null,
                      Ae(e.labels, (l) => (h(), ge(
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
                          default: ve(() => [be(
                            re(l),
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
                  )) : (h(), P(
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
                )) : (h(), P(
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
            ), A(
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
      ), A(
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
    ), e.line ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
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
    VarMenu: Hn,
    VarChip: or,
    VarFormDetails: We
  },
  props: g1,
  setup(e) {
    var n = I(null), r = I(!1), a = U(() => e.multiple), t = U(() => e.focusColor), o = I(""), l = I([]), i = U(() => Nn(e.modelValue)), s = I("0px"), u = I(0), {
      bindForm: d,
      form: v
    } = bn(), {
      length: f,
      options: m,
      bindOptions: p
    } = Mb(), {
      errorMessage: y,
      validateWithTrigger: g,
      validate: w,
      // expose
      resetValidation: V
    } = yn(), k = I(null), $ = () => {
      var {
        multiple: K,
        modelValue: z
      } = e;
      if (K) {
        var G = z;
        l.value = G.map(D);
      }
      !K && !Nn(z) && (o.value = D(z)), !K && Nn(z) && (o.value = "");
    }, E = (K) => {
      Me(() => {
        var {
          validateTrigger: z,
          rules: G,
          modelValue: Z
        } = e;
        g(z, K, G, Z);
      });
    }, b = (K) => {
      var {
        value: z,
        label: G
      } = K;
      return z.value != null ? z.value : G.value;
    }, D = (K) => {
      var z, G, Z = m.find((ce) => {
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
      })), (z = (G = Z) == null ? void 0 : G.label.value) != null ? z : "";
    }, O = () => {
      var {
        hint: K,
        modelValue: z
      } = e;
      if (!K && !Nn(z))
        return yo("--placeholder-hidden");
      if (K && (!Nn(z) || r.value))
        return yo("--placeholder-hint");
    }, N = () => n.value && window.getComputedStyle(n.value).width || "0px", M = () => {
      var {
        disabled: K,
        readonly: z,
        onFocus: G
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || z || (s.value = N(), u.value = Le(e.offsetY), r.value = !0, T(G), E("onFocus"));
    }, C = () => {
      var {
        disabled: K,
        readonly: z,
        onBlur: G
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || K || z || (T(G), E("onBlur"));
    }, S = (K) => {
      var {
        disabled: z,
        readonly: G,
        multiple: Z,
        onChange: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || z || G)) {
        var fe = Z ? m.filter((De) => {
          var {
            selected: Ge
          } = De;
          return Ge.value;
        }).map(b) : b(K);
        T(e["onUpdate:modelValue"], fe), T(ce, fe), E("onChange"), !Z && (r.value = !1);
      }
    }, j = () => {
      var {
        disabled: K,
        readonly: z,
        multiple: G,
        clearable: Z,
        onClear: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || K || z || !Z)) {
        var fe = G ? [] : void 0;
        T(e["onUpdate:modelValue"], fe), T(ce, fe), E("onClear");
      }
    }, _ = (K) => {
      var {
        disabled: z,
        onClick: G
      } = e;
      v != null && v.disabled.value || z || (T(G, K), E("onClick"));
    }, F = (K) => {
      var {
        disabled: z,
        readonly: G,
        modelValue: Z,
        onClose: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || z || G)) {
        var fe = Z, De = m.find((qe) => {
          var {
            label: ze
          } = qe;
          return ze.value === K;
        }), Ge = fe.filter((qe) => {
          var ze;
          return qe !== ((ze = De.value.value) != null ? ze : De.label.value);
        });
        T(e["onUpdate:modelValue"], Ge), T(ce, Ge), E("onClose");
      }
    }, B = () => {
      var {
        multiple: K,
        modelValue: z
      } = e;
      if (K) {
        var G = z;
        m.forEach((Z) => Z.sync(G.includes(b(Z))));
      } else
        m.forEach((Z) => Z.sync(z === b(Z)));
      $();
    }, Y = () => {
      s.value = N(), u.value = Le(e.offsetY), r.value = !0;
    }, ae = () => {
      r.value = !1;
    }, se = () => w(e.rules, e.modelValue), H = () => {
      T(e["onUpdate:modelValue"], e.multiple ? [] : void 0), V();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: K,
        modelValue: z
      } = e;
      if (K && !Ce(z))
        throw Error("The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, B, {
      deep: !0
    }), ie(() => f.value, B);
    var J = {
      wrapWidth: U(() => s.value),
      multiple: a,
      focusColor: t,
      computeLabel: $,
      onSelect: S,
      reset: H,
      validate: se,
      resetValidation: V
    };
    return p(J), T(d, J), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: k,
      n: yo,
      classes: y1,
      computePlaceholderState: O,
      handleFocus: M,
      handleBlur: C,
      handleClear: j,
      handleClick: _,
      handleClose: F,
      reset: H,
      validate: se,
      resetValidation: V,
      focus: Y,
      blur: ae
    };
  }
});
Ud.render = w1;
const ra = Ud;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var rk = ra, C1 = {
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
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), P(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: q({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [A(
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), P(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: q({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [A(
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), P(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), P(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: q({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [A(
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
          )) : x("v-if", !0), (h(!0), P(
            Oe,
            null,
            Ae(e.toNumber(e.rows), (r, a) => (h(), P(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: q({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [A(
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (h(), P(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: q({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [A(
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
const aa = Fd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var ak = aa;
function T1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
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
} = ne("slider"), V1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function M1(e, n) {
  var r = te("var-hover-overlay"), a = te("var-form-details"), t = Ne("hover");
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: c(e.n("track"))
        },
        [A(
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
        ), A(
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
      ), (h(!0), P(
        Oe,
        null,
        Ae(e.thumbList, (o) => (h(), P(
          "div",
          {
            class: c(e.n("thumb")),
            key: o.enumValue,
            style: q({
              left: o.value + "%",
              zIndex: e.thumbsProps[o.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Mn((l) => e.start(l, o.enumValue), ["stop"]),
            onTouchmove: Mn((l) => e.move(l, o.enumValue), ["stop"]),
            onTouchend: (l) => e.end(o.enumValue),
            onTouchcancel: (l) => e.end(o.enumValue)
          },
          [W(e.$slots, "button", {
            currentValue: o.text
          }, () => [we(A(
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
          ), [[t, (l) => e.hover(l, o), "desktop"]]), A(
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
          ), A(
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
            [A(
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
var Yd = ee({
  name: "VarSlider",
  components: {
    VarFormDetails: We,
    VarHoverOverlay: Vn
  },
  directives: {
    Hover: Fa
  },
  props: P1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = bn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = yn(), {
      hovering: i,
      handleHovering: s
    } = Lt(), {
      hovering: u,
      handleHovering: d
    } = Lt(), v = () => o(e.rules, e.modelValue), f = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), m = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), p = I(null), y = I(0), g = I(!1), w = Be({
      [Ie.First]: f(),
      [Ie.Second]: f()
    }), V = U(() => L(e.max) - L(e.min)), k = U(() => y.value / V.value * L(e.step)), $ = U(() => {
      var {
        modelValue: z,
        range: G
      } = e, Z = [];
      return G && Ce(z) ? Z = [{
        value: N(z[0]),
        enumValue: Ie.First,
        text: M(z[0]),
        hovering: Ra(i),
        handleHovering: s
      }, {
        value: N(z[1]),
        enumValue: Ie.Second,
        text: M(z[1]),
        hovering: Ra(u),
        handleHovering: d
      }] : rn(z) && (Z = [{
        value: N(z),
        enumValue: Ie.First,
        text: M(z),
        hovering: Ra(i),
        handleHovering: s
      }]), Z;
    }), E = U(() => {
      var {
        activeColor: z,
        range: G,
        modelValue: Z
      } = e, ce = G && Ce(Z) ? N(Math.min(Z[0], Z[1])) : 0, fe = G && Ce(Z) ? N(Math.max(Z[0], Z[1])) - ce : N(Z);
      return {
        width: fe + "%",
        left: ce + "%",
        background: z
      };
    }), b = U(() => e.disabled || (r == null ? void 0 : r.disabled.value)), D = U(() => e.readonly || (r == null ? void 0 : r.readonly.value)), O = (z) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : w[z].active, N = (z) => {
      var {
        min: G,
        max: Z
      } = e;
      return z < L(G) ? 0 : z > L(Z) ? 100 : (z - L(G)) / V.value * 100;
    }, M = (z) => {
      if (!rn(z))
        return 0;
      var G = z;
      G < Number(e.min) && (G = Number(e.min)), G > Number(e.max) && (G = Number(e.max));
      var Z = parseInt("" + G, 10) === G;
      return Z ? G : L(G.toPrecision(5));
    }, C = (z, G) => {
      b.value || G.handleHovering(z);
    }, S = (z, G) => {
      var Z = [], {
        step: ce,
        range: fe,
        modelValue: De,
        onChange: Ge,
        min: qe
      } = e, ze = L(ce), _e = Math.round(z / k.value), Ma = _e * ze + L(qe), fo = w[G].percentValue * ze + L(qe);
      if (w[G].percentValue = _e, fe && Ce(De) && (Z = G === Ie.First ? [Ma, De[1]] : [De[0], Ma]), fo !== Ma) {
        var gt = fe ? Z.map((yt) => M(yt)) : M(Ma);
        T(Ge, gt), T(e["onUpdate:modelValue"], gt), m();
      }
    }, j = (z) => {
      if (!e.range)
        return Ie.First;
      var G = w[Ie.First].percentValue * k.value, Z = w[Ie.Second].percentValue * k.value, ce = Math.abs(z - G), fe = Math.abs(z - Z);
      return ce <= fe ? Ie.First : Ie.Second;
    }, _ = (z, G) => {
      y.value || (y.value = p.value.offsetWidth), b.value || (w[G].active = !0), !(b.value || D.value) && (T(e.onStart), g.value = !0, w[G].startPosition = z.touches[0].clientX);
    }, F = (z, G) => {
      if (!(b.value || D.value || !g.value)) {
        var Z = z.touches[0].clientX - w[G].startPosition + w[G].currentLeft;
        Z <= 0 ? Z = 0 : Z >= y.value && (Z = y.value), S(Z, G);
      }
    }, B = (z) => {
      var {
        range: G,
        modelValue: Z,
        onEnd: ce,
        step: fe,
        min: De
      } = e;
      if (b.value || (w[z].active = !1), !(b.value || D.value)) {
        var Ge = [];
        w[z].currentLeft = w[z].percentValue * k.value;
        var qe = w[z].percentValue * L(fe) + L(De);
        G && Ce(Z) && (Ge = z === Ie.First ? [qe, Z[1]] : [Z[0], qe]), T(ce, G ? Ge : qe), g.value = !1;
      }
    }, Y = (z) => {
      if (!(b.value || D.value) && !z.target.closest("." + ql("thumb"))) {
        var G = z.clientX - Mv(z.currentTarget), Z = j(G);
        S(G, Z), B(Z);
      }
    }, ae = () => {
      var z = L(e.step);
      return isNaN(z) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : z < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, se = () => {
      var {
        range: z,
        modelValue: G
      } = e;
      return z && !Ce(G) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !z && Ce(G) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : z && Ce(G) && G.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, H = function(z, G) {
      z === void 0 && (z = e.modelValue), G === void 0 && (G = L(e.step));
      var Z = (ce) => {
        var {
          min: fe,
          max: De
        } = e;
        return ce < L(fe) ? 0 : ce > L(De) ? V.value / G : (ce - L(fe)) / G;
      };
      e.range && Ce(z) ? (w[Ie.First].percentValue = Z(z[0]), w[Ie.First].currentLeft = w[Ie.First].percentValue * k.value, w[Ie.Second].percentValue = Z(z[1]), w[Ie.Second].currentLeft = w[Ie.Second].percentValue * k.value) : rn(z) && (w[Ie.First].currentLeft = Z(z) * k.value);
    }, J = () => {
      var z = e.range ? [0, 0] : 0;
      T(e["onUpdate:modelValue"], z), l();
    }, K = {
      reset: J,
      validate: v,
      resetValidation: l
    };
    return T(n, K), ie([() => e.modelValue, () => e.step], (z) => {
      var [G, Z] = z;
      !ae() || !se() || g.value || H(G, L(Z));
    }), ie(y, () => H()), ln(() => {
      !ae() || !se() || (y.value = p.value.offsetWidth);
    }), {
      n: ql,
      classes: O1,
      Thumbs: Ie,
      sliderEl: p,
      getFillStyle: E,
      isDisabled: b,
      errorMessage: a,
      thumbsProps: w,
      thumbList: $,
      hover: C,
      multiplySizeUnit: en,
      toNumber: L,
      showLabel: O,
      start: _,
      move: F,
      end: B,
      click: Y
    };
  }
});
Yd.render = M1;
const ta = Yd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var tk = ta;
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
var Hd = {
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
} = ne("snackbar"), N1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function A1(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return we((h(), P(
    "div",
    {
      class: c(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [A(
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
      ), A(
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
    VarLoading: kn,
    VarIcon: $e
  },
  props: Hd,
  setup(e) {
    var n = I(null), {
      zIndex: r
    } = pt(() => e.show, 1);
    _t(() => e.show, () => e.lockScroll);
    var a = U(() => e.type === "loading" || e.forbidClick), t = U(() => e.type ? N1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && T(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? (T(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), T(e.onClose));
    }), ie(() => e._update, () => {
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
    Ta,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [Q(
      Ee,
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
  props: Hd,
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
const oa = Gd;
function dt() {
  return dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, dt.apply(this, arguments);
}
function R1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !ft(e);
}
var Ai = ["loading", "success", "warning", "info", "error"], Xl = 0, li = !1, qd, Ga = !1, Xd = {
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
}, gn = Be([]), zi = Xd, U1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, F1 = {
  setup() {
    return () => {
      var e = gn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ga && (a.position = "top");
        var l = Ga ? "relative" : "absolute", i = dt({
          position: l
        }, q1(a.position));
        return Q(Wd, Ve(a, {
          key: r,
          style: i,
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
        onAfterEnter: Y1,
        onAfterLeave: H1
      }), R1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, jn = function(e) {
  var n = W1(e), r = Be(dt({}, zi, n));
  r.show = !0, li || (li = !0, qd = Ja(F1).unmountInstance);
  var {
    length: a
  } = gn, t = {
    id: Xl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ga)
    j1(t);
  else {
    var o = "update-" + Xl;
    G1(r, o);
  }
  return {
    clear() {
      !Ga && gn.length ? gn[0].reactiveSnackOptions.show = !1 : r.show = !1;
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
  e.component(oa.name, oa);
};
jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ga && (gn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ga = e);
};
jn.clear = function() {
  gn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
jn.setDefaultOptions = function(e) {
  zi = e;
};
jn.resetDefaultOptions = function() {
  zi = Xd;
};
jn.Component = oa;
function Y1(e) {
  var n = e.getAttribute("data-id"), r = gn.find((a) => a.id === L(n));
  r && T(r.reactiveSnackOptions.onOpened);
}
function H1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = gn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, T(r.reactiveSnackOptions.onClosed));
  var a = gn.every((t) => t.animationEnd);
  a && (T(qd), gn = Be([]), li = !1);
}
function j1(e) {
  gn.push(e);
}
function W1(e) {
  return e === void 0 && (e = {}), Ze(e) ? {
    content: e
  } : e;
}
function G1(e, n) {
  var [r] = gn;
  r.reactiveSnackOptions = dt({}, r.reactiveSnackOptions, e), r._update = n;
}
function q1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
oa.install = function(e) {
  e.component(oa.name, oa);
};
var ok = oa;
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
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = vn(e) + " " + n + " " + vn(e) + " 0" : i = vn(e) + " 0" : t === "space-around" ? i = vn(e) + " " + vn(n) : t === "space-between" && (o === 0 ? i = vn(e) + " " + vn(n) + " " + vn(e) + " 0" : o === l ? i = vn(e) + " 0 " + vn(e) + " " + vn(n) : i = vn(e) + " " + vn(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: bo,
  classes: _1
} = ne("space");
const ia = ee({
  name: "VarSpace",
  props: J1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : Ce(t) ? t.map(pe) : [pe(t), pe(t)];
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
      var y = v.length - 1, g = v.map((w, V) => {
        var k = Q1(m, p, {
          direction: u,
          justify: l,
          index: V,
          lastIndex: y
        });
        return Q("div", {
          style: {
            margin: k
          }
        }, [w]);
      });
      return Q("div", {
        class: _1(bo(), bo("$--box"), [o, bo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Nt(l),
          alignItems: Nt(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + m + " / 2) 0" : void 0
        }
      }, [g]);
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var ik = ia, x1 = {
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
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [A(
        "div",
        {
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [A(
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
          )) : (h(), P(
            "span",
            tw,
            re(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), A(
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
      ), e.isLastChild ? x("v-if", !0) : (h(), P(
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
    var e = I(null), n = I(""), r = I(!1), {
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
    } = t, f = U(() => l.value === a.value), m = U(() => a.value !== -1 && l.value > a.value), p = {
      index: a
    }, y = () => v(a.value), g = (w) => {
      d.value === "horizontal" && (e.value = w);
    };
    return o(p), ie(i, (w) => {
      if (r.value = w - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + V + "px";
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
const la = Jd;
la.install = function(e) {
  e.component(la.name, la);
};
var lk = la;
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
} = ne("steps");
function uw(e, n) {
  return h(), P(
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
    var n = U(() => e.active), r = U(() => e.activeColor), a = U(() => e.inactiveColor), t = U(() => e.direction), {
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
const sa = Qd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var sk = sa, dw = {
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
const ua = fw;
var wo = [];
function vt(e) {
  wo.forEach((r) => document.documentElement.style.removeProperty(r)), wo.length = 0;
  var n = vs(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), wo.push(a);
  });
}
vt.Component = ua;
ua.install = function(e) {
  e.component(ua.name, ua);
};
vt.install = function(e) {
  e.component(ua.name, ua);
};
var uk = ua, cw = {
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
} = ne("switch");
function hw(e, n) {
  var r = te("var-loading"), a = te("var-hover-overlay"), t = te("var-form-details"), o = Ne("ripple"), l = Ne("hover");
  return we((h(), P(
    "div",
    {
      class: c(e.n())
    },
    [A(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: q(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: q(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), we((h(), P(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [A(
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
  )), [[l, e.hover, "desktop"]]);
}
var _d = ee({
  name: "VarSwitch",
  components: {
    VarLoading: kn,
    VarFormDetails: We,
    VarHoverOverlay: Vn
  },
  directives: {
    Ripple: Re,
    Hover: Fa
  },
  props: cw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = bn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = yn(), {
      hovering: i,
      handleHovering: s
    } = Lt(), u = () => o(e.rules, e.modelValue), d = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), v = U(() => {
      var {
        size: w,
        modelValue: V,
        color: k,
        closeColor: $,
        loadingColor: E,
        activeValue: b
      } = e;
      return {
        handle: {
          width: en(w),
          height: en(w),
          backgroundColor: V === b ? k : $,
          color: E
        },
        ripple: {
          left: V === b ? en(w, 0.5) : "-" + en(w, 0.5),
          color: V === b ? k : $ || "#999",
          width: en(w, 2),
          height: en(w, 2)
        },
        track: {
          height: en(w, 0.72),
          width: en(w, 1.9),
          borderRadius: en(w, 2 / 3),
          filter: V === b || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: V === b ? k : $
        },
        switch: {
          height: en(w, 1.2),
          width: en(w, 2)
        }
      };
    }), f = U(() => {
      var {
        size: w = "5.333vw"
      } = e;
      return en(w, 0.4);
    }), m = (w) => {
      var {
        onClick: V,
        onChange: k,
        disabled: $,
        loading: E,
        readonly: b,
        modelValue: D,
        activeValue: O,
        inactiveValue: N,
        "onUpdate:modelValue": M
      } = e;
      if (T(V, w), !($ || E || b || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = D === O ? N : O;
        T(k, C), T(M, C), d();
      }
    }, p = (w) => {
      e.disabled || r != null && r.disabled.value || s(w);
    }, y = () => {
      T(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, g = {
      reset: y,
      validate: u,
      resetValidation: l
    };
    return T(n, g), {
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
const da = _d;
da.install = function(e) {
  e.component(da.name, da);
};
var dk = da, gw = {
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
  n: Ot,
  classes: ww
} = ne("tab");
function Cw(e, n) {
  var r = Ne("ripple");
  return we((h(), P(
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
    var n = I(null), r = U(() => e.name), a = U(() => e.disabled), t = U(() => n.value), {
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
    } = l, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(y);
    var g = () => {
      var {
        disabled: k,
        name: $
      } = e;
      return k ? f.value : u.value === $ || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, w = () => {
      var {
        disabled: k,
        name: $
      } = e;
      return k ? Ot("$-tab--disabled") : u.value === $ || u.value === (o == null ? void 0 : o.value) ? Ot("$-tab--active") : Ot("$-tab--inactive");
    }, V = (k) => {
      var {
        disabled: $,
        name: E,
        onClick: b
      } = e;
      $ || (T(b, E ?? o.value, k), s(y));
    };
    return ie(() => e.name, p), ie(() => e.disabled, p), {
      n: Ot,
      classes: ww,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: g,
      computeColorClass: w,
      handleClick: V
    };
  }
});
ev.render = Cw;
const va = ev;
va.install = function(e) {
  e.component(va.name, va);
};
var vk = va, nv = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY");
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
    var n = I(!1), r = I(!1), a = U(() => e.name), {
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
const fa = rv;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var fk = fa, Vw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Mw,
  classes: Bw
} = ne("table");
function Iw(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("main"))
      },
      [A(
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
    ), e.$slots.footer ? (h(), P(
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
const ca = av;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var ck = ca;
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
  stickyCssMode: Je(Et, "cssMode"),
  stickyZIndex: Je(Et, "zIndex"),
  offsetTop: Je(Et, "offsetTop"),
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
} = ne("tabs");
function Aw(e, n) {
  return h(), ge(
    Za(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [A(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [W(e.$slots, "default"), A(
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
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Ew,
  setup(e) {
    var n = I("0px"), r = I("0px"), a = I("0px"), t = I("0px"), o = I(!1), l = I(null), i = U(() => e.active), s = U(() => e.activeColor), u = U(() => e.inactiveColor), d = U(() => e.disabledColor), v = U(() => e.itemDirection), f = I(null), {
      tabList: m,
      bindTabList: p,
      length: y
    } = yw(), g = (M) => {
      var C, S = (C = M.name.value) != null ? C : M.index.value, {
        active: j,
        onChange: _,
        onClick: F
      } = e;
      T(e["onUpdate:active"], S), T(F, S), S !== j && T(_, S);
    }, w = () => m.find((M) => {
      var {
        name: C
      } = M;
      return e.active === C.value;
    }), V = (M) => m.find((C) => {
      var {
        index: S
      } = C;
      return (M ?? e.active) === S.value;
    }), k = () => {
      if (y.value !== 0) {
        var {
          active: M
        } = e;
        if (rn(M)) {
          var C = M > y.value - 1 ? y.value - 1 : 0;
          return T(e["onUpdate:active"], C), V(C);
        }
      }
    }, $ = () => {
      o.value = m.length >= 5;
    }, E = (M) => {
      var {
        element: C
      } = M, S = C.value;
      S && (e.layoutDirection === "horizontal" ? (n.value = S.offsetWidth + "px", a.value = S.offsetLeft + "px") : (r.value = S.offsetHeight + "px", t.value = S.offsetTop + "px"));
    }, b = (M) => {
      var {
        element: C
      } = M;
      if (o.value) {
        var S = l.value, j = C.value;
        if (e.layoutDirection === "horizontal") {
          var _ = j.offsetLeft + j.offsetWidth / 2 - S.offsetWidth / 2;
          ot(S, {
            left: _,
            animation: So
          });
        } else {
          var F = j.offsetTop + j.offsetHeight / 2 - S.offsetHeight / 2;
          ot(S, {
            top: F,
            animation: So
          });
        }
      }
    }, D = () => {
      var M = w() || V() || k();
      !M || M.disabled.value || ($(), E(M), b(M));
    }, O = /* @__PURE__ */ function() {
      var M = Jl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return M.apply(this, arguments);
      };
    }(), N = {
      active: i,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: D,
      onTabClick: g
    };
    return p(N), ie(() => y.value, /* @__PURE__ */ Jl(function* () {
      yield Bn(), D();
    })), ie(() => e.active, D), ba(window, "resize", D), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: l,
      Transition: Ee,
      toSizeUnit: pe,
      n: Dw,
      classes: Nw,
      resize: D,
      resizeSticky: O
    };
  }
});
tv.render = Aw;
const ma = tv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var mk = ma, zw = {
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
    var n = I(null), {
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
      p && (r.forEach((y) => {
        var {
          setCurrent: g
        } = y;
        return g(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((g) => {
        var {
          index: w
        } = g;
        return w.value === f;
      }), y = (m = p.name.value) != null ? m : p.index.value;
      T(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ Lw(function* () {
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
const pa = ov;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var pk = pa;
const Fw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Yw = {
  "--badge-default-color": "#555"
}, Hw = {
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
}, Hw, Ww, jw, dC, Kw, oC, fC, sC, eC, Zw, Fw, qw, Yw, vC, Xw, nC, lC, iC, _w, uC, Qw, tC, rC, Gw, Jw, xw, cC, mC, pC, hC, aC, gC, yC, bC);
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
  "onUpdate:modelValue": R(),
  onChange: R()
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
      minute: y
    } = tn(i);
    f = p === v && a > y;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: w
    } = tn(s);
    f = g === v && a < w;
  }
  if (i && s) {
    var {
      hour: V,
      minute: k
    } = tn(i), {
      hour: $,
      minute: E
    } = tn(s);
    f = $ === v && a < E || V === v && a > k;
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
      hour: y,
      minute: g,
      second: w
    } = tn(s);
    m = y === f && g < i || g === i && a > w;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: k,
      second: $
    } = tn(u);
    m = V === f && k > i || k === i && a > $;
  }
  if (s && u) {
    var {
      hour: E,
      minute: b,
      second: D
    } = tn(s), {
      hour: O,
      minute: N,
      second: M
    } = tn(u);
    m = E === f && b < i || O === f && N > i || E === f && b === i && a > D || O === f && N === i && a < M;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: $C,
  classes: TC
} = ne("time-picker");
function PC(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n("clock"))
    },
    [A(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), P(
      Oe,
      null,
      Ae(e.timeScales, (r, a) => (h(), P(
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
    )), e.format === "24hr" && e.type === "hour" ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), P(
        Oe,
        null,
        Ae(e.hours24, (r, a) => (h(), P(
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
    } = n, a = I(null), t = I([]), o = I([]), l = U(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = U(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = U(() => e.type === "hour" ? mn : _l), u = (g, w) => {
      var V;
      g = (V = g) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var k = e.type === "minute" ? lv : sv, $ = {
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
      return w && e.type === "minute" && Reflect.deleteProperty($, "minute"), k($);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? nn[i.value] : s.value[i.value];
      return s.value === _l ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, w) => w ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (iv(e.format, e.ampm))
          return t.value.includes(g);
        var w = mn.findIndex((V) => V === g);
        return o.value.includes(w);
      }
      return u(g, !0);
    }, m = (g, w, V) => {
      var k = 2 * Math.PI / 12 * g - Math.PI / 2, $ = 50 * (1 + Math.cos(k)), E = 50 * (1 + Math.sin(k)), b = () => v(g, V) ? f(w) ? {
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
        color: O
      } = b();
      return {
        left: $ + "%",
        top: E + "%",
        backgroundColor: D,
        color: O
      };
    }, p = () => {
      var {
        width: g,
        height: w
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: w
      };
    }, y = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? mn : nn;
        return ya(g[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (g, w) => {
      var [V, k] = g, [$, E] = w, b = V === $ && k === E;
      if (!(b || e.type !== "hour" || i.value === void 0)) {
        var D = k ? nn[i.value] : y(), O = e.useSeconds ? ":" + e.time.second : "", N = D + ":" + e.time.minute + O;
        e.preventNextUpdate || r("update", N), r("change-prevent-update");
      }
    }), ie(() => e.rad, (g, w) => {
      if (!(e.type === "hour" || g === void 0 || w === void 0)) {
        var V = g / 6 >= 0 ? g / 6 : g / 6 + 60, k = w / 6 >= 0 ? w / 6 : w / 6 + 60;
        if (V !== k) {
          var $, {
            hourStr: E
          } = Li(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var b = oe().minute(V).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            $ = E + ":" + b + D;
          }
          if (e.type === "second") {
            var O = oe().second(V).format("ss"), N = e.useSeconds ? ":" + O : "";
            $ = E + ":" + e.time.minute + N;
          }
          r("update", $);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [w, V, k] = g;
      if (t.value = [], w && !V) {
        var {
          hour: $
        } = tn(w), E = mn.filter((Y) => L(Y) > $), b = nn.filter((Y) => L(Y) > $);
        t.value = [...E, ...b];
      }
      if (!w && V) {
        var {
          hour: D
        } = tn(V), O = mn.filter((Y) => L(Y) < D), N = nn.filter((Y) => L(Y) < D);
        t.value = [...O, ...N];
      }
      if (w && V) {
        var {
          hour: M
        } = tn(w), {
          hour: C
        } = tn(V), S = mn.filter((Y) => L(Y) < C || L(Y) > M), j = nn.filter((Y) => L(Y) < C || L(Y) > M);
        t.value = [...S, ...j];
      }
      if (k != null && k.hours) {
        var {
          hours: _
        } = k, F = mn.filter((Y) => !_(L(Y))), B = nn.filter((Y) => !_(L(Y)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...F, ...B])];
      }
      o.value = t.value.map((Y) => nn.findIndex((ae) => Y === ae)).filter((Y) => Y >= 0);
    }, {
      immediate: !0
    }), {
      n: $C,
      classes: TC,
      hours24: nn,
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
} = ne("time-picker"), BC = (e) => (Pa(""), e = e(), Oa(), e), IC = /* @__PURE__ */ BC(() => /* @__PURE__ */ A(
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
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: c(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          re(e.time.hour),
          3
          /* TEXT, CLASS */
        ), IC, A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          re(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), P("span", EC, ":")) : x("v-if", !0), e.useSeconds ? (h(), P(
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
      ), e.format === "ampm" ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [A(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), A(
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
    ), A(
      "div",
      {
        class: c(e.n("body"))
      },
      [A(
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
          Ee,
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
    var n = I(null), r = I(null), a = I(null), t = I(!1), o = I(!1), l = I(!1), i = I(!1), s = I(!1), u = I(void 0), d = I(0), v = I(0), f = I("hour"), m = I("am"), p = I(!1), y = I(!1), g = I({
      hour: "00",
      minute: "00",
      second: "00"
    }), w = Be({
      x: 0,
      y: 0
    }), V = Be({
      x: [],
      y: []
    }), k = U(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), $ = (H) => {
      T(e["onUpdate:modelValue"], H), T(e.onChange, H);
    }, E = (H) => H * 57.29577951308232, b = (H) => {
      i.value = !1, y.value = !1, f.value = H;
    }, D = (H) => {
      var {
        disableHour: J
      } = a.value, K = mn.findIndex((Z) => L(Z) === L(g.value.hour)), z = H === "am" ? mn : nn, G = [...z.slice(K), ...z.slice(0, K)];
      return G.find((Z, ce) => (o.value = ce !== 0, !J.includes(Z)));
    }, O = (H) => {
      if (!e.readonly) {
        m.value = H;
        var J = D(H);
        if (J) {
          var K = e.useSeconds ? ":" + g.value.second : "", z = ya(J, 2, "0") + ":" + g.value.minute + K;
          $(z);
        }
      }
    }, N = (H, J) => {
      var K = H >= V.x[0] && H <= V.x[1], z = J >= V.y[0] && J <= V.y[1];
      return K && z;
    }, M = (H) => {
      var J = e.format === "24hr" ? "HH" : "hh", {
        hour: K,
        minute: z,
        second: G
      } = tn(H);
      return {
        hour: oe().hour(K).format(J),
        minute: oe().minute(z).format("mm"),
        second: oe().second(G).format("ss")
      };
    }, C = (H) => {
      var J = H / 30;
      return J >= 0 ? J : J + 12;
    }, S = () => {
      var {
        width: H,
        height: J
      } = a.value.getSize(), K = w.x - H / 2 - 8, z = w.x + H / 2 + 8, G = w.y - J / 2 - 8, Z = w.y + J / 2 + 8;
      return {
        rangeXMin: K,
        rangeXMax: z,
        rangeYMin: G,
        rangeYMax: Z
      };
    }, j = (H, J, K) => {
      var {
        disableHour: z
      } = a.value;
      l.value = N(H, J);
      var G = Math.round(K / 30) * 30 + 90, Z = C(G), ce = t.value ? mn[Z] : nn[Z];
      if (z.includes(ce) || (t.value = e.format === "24hr" ? N(H, J) : !1), t.value === l.value) {
        var fe = t.value || m.value === "pm" ? nn[Z] : mn[Z];
        p.value = z.includes(fe), !p.value && (u.value = G, i.value = !0);
      }
    }, _ = (H) => {
      var {
        disableHour: J
      } = a.value, K = Math.round(H / 6) * 6 + 90, z = K / 6 >= 0 ? K / 6 : K / 6 + 60, G = {
        time: z,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      y.value = lv(G), !y.value && (d.value = K, s.value = !0);
    }, F = (H) => {
      var {
        disableHour: J
      } = a.value, K = Math.round(H / 6) * 6 + 90, z = K / 6 >= 0 ? K / 6 : K / 6 + 60, G = {
        time: z,
        format: e.format,
        ampm: m.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: J,
        allowedTime: e.allowedTime
      };
      sv(G) || (v.value = K);
    }, B = () => {
      var {
        left: H,
        top: J,
        width: K,
        height: z
      } = n.value.getBoundingClientRect();
      if (w.x = H + K / 2, w.y = J + z / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: G,
          rangeXMax: Z,
          rangeYMin: ce,
          rangeYMax: fe
        } = S();
        V.x = [G, Z], V.y = [ce, fe];
      }
    }, Y = (H) => {
      if (H.preventDefault(), !e.readonly) {
        B();
        var {
          clientX: J,
          clientY: K
        } = H.touches[0], z = J - w.x, G = K - w.y, Z = Math.round(E(Math.atan2(G, z)));
        f.value === "hour" ? j(J, K, Z) : f.value === "minute" ? _(Z) : F(Z);
      }
    }, ae = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, se = () => {
      o.value = !1;
    };
    return ie(() => e.modelValue, (H) => {
      if (H) {
        var {
          hour: J,
          minute: K,
          second: z
        } = tn(H), G = oe().hour(J).format("hh"), Z = oe().hour(J).format("HH"), ce = oe().minute(K).format("mm"), fe = oe().second(z).format("ss");
        u.value = (G === "12" ? 0 : L(G)) * 30, d.value = L(ce) * 6, v.value = L(fe) * 6, g.value = M(H), e.format !== "24hr" && (m.value = ya("" + J, 2, "0") === Z && nn.includes(Z) ? "pm" : "am"), t.value = e.format === "24hr" && nn.includes(Z);
      }
    }, {
      immediate: !0
    }), {
      n: VC,
      classes: MC,
      getRad: k,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: o,
      moveHand: Y,
      checkPanel: b,
      checkAmpm: O,
      end: ae,
      update: $,
      changePreventUpdate: se
    };
  }
});
dv.render = DC;
const ha = dv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var gk = ha, NC = {
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
} = ne("uploader"), LC = 0, RC = ["onClick"], UC = ["onClick"], FC = ["src", "alt"], YC = ["multiple", "accept", "capture", "disabled"], HC = ["src"];
function jC(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = te("var-popup"), o = Ne("ripple");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), P(
        Oe,
        null,
        Ae(e.files, (l) => we((h(), P(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [l.state === "loading", e.n("--loading")])),
            key: l.id,
            onClick: (i) => e.preview(l)
          },
          [A(
            "div",
            {
              class: c(e.n("file-name"))
            },
            re(l.name || l.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), P(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Mn((i) => e.handleRemove(l), ["stop"])
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
          )) : x("v-if", !0), l.cover ? (h(), P(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: q({
                objectFit: l.fit
              }),
              src: l.cover,
              alt: l.name
            },
            null,
            14,
            FC
          )) : x("v-if", !0), A(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [l.state === "success", e.n("--success")], [l.state === "error", e.n("--error")]))
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
      )), !e.maxlength || e.modelValue.length < e.maxlength ? we((h(), P(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [A(
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
        "onUpdate:show": n[2] || (n[2] = (l) => e.showPreview = l),
        onClosed: n[3] || (n[3] = (l) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var l, i;
          return [e.currentPreview && e.isHTMLSupportVideo((l = e.currentPreview) == null ? void 0 : l.url) ? (h(), P(
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
              src: (i = e.currentPreview) == null ? void 0 : i.url
            },
            null,
            10,
            HC
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
    var n = I(null), r = I(!1), a = I(null), t = U(() => {
      var {
        maxlength: F,
        modelValue: {
          length: B
        }
      } = e;
      return rn(F) ? B + " / " + F : "";
    }), {
      form: o,
      bindForm: l
    } = bn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = yn(), v = U(() => {
      var {
        modelValue: F,
        hideList: B
      } = e;
      return B ? [] : F;
    }), f = (F) => {
      var {
        disabled: B,
        readonly: Y,
        previewed: ae
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || B || Y || !ae)) {
        var {
          url: se
        } = F;
        if (Ze(se) && Hi(se)) {
          On(se);
          return;
        }
        Ze(se) && ji(se) && (a.value = F, r.value = !0);
      }
    }, m = (F) => ({
      id: LC++,
      url: "",
      cover: "",
      name: F.name,
      file: F
    }), p = (F) => {
      var B = F.target, {
        files: Y
      } = B;
      return Array.from(Y);
    }, y = (F) => new Promise((B) => {
      var Y = new FileReader();
      Y.onload = () => {
        var ae = Y.result;
        F.file.type.startsWith("image") && (F.cover = ae), F.url = ae, B(F);
      }, Y.readAsDataURL(F.file);
    }), g = (F) => F.map(y), w = (F) => {
      var {
        onBeforeRead: B
      } = e;
      return F.map((Y) => new Promise((ae) => {
        B || ae({
          valid: !0,
          varFile: Y
        });
        var se = T(B, Be(Y));
        se = Ce(se) ? se : [se], Promise.all(se).then((H) => {
          ae({
            valid: !H.some((J) => !J),
            varFile: Y
          });
        });
      }));
    }, V = /* @__PURE__ */ function() {
      var F = es(function* (B) {
        var {
          maxsize: Y,
          maxlength: ae,
          modelValue: se,
          onOversize: H,
          onAfterRead: J,
          readonly: K,
          disabled: z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || z || K)) {
          var G = (ze) => ze.filter((_e) => _e.file.size > L(Y) ? (T(H, Be(_e)), !1) : !0), Z = (ze) => {
            var _e = Math.min(ze.length, L(ae) - se.length);
            return ze.slice(0, _e);
          }, ce = p(B), fe = ce.map(m);
          fe = Y != null ? G(fe) : fe, fe = ae != null ? Z(fe) : fe;
          var De = yield Promise.all(g(fe)), Ge = yield Promise.all(w(De)), qe = Ge.filter((ze) => {
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
          T(e["onUpdate:modelValue"], [...se, ...qe]), B.target.value = "", qe.forEach((ze) => T(J, Be(ze)));
        }
      });
      return function(Y) {
        return F.apply(this, arguments);
      };
    }(), k = /* @__PURE__ */ function() {
      var F = es(function* (B) {
        var {
          disabled: Y,
          readonly: ae,
          modelValue: se,
          onBeforeRemove: H,
          onRemove: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || Y || ae)) {
          if (H) {
            var K = T(H, Be(B));
            if (K = Ce(K) ? K : [K], (yield Promise.all(K)).some((G) => !G))
              return;
          }
          var z = se.filter((G) => G !== B);
          T(J, Be(B)), M("onRemove"), T(e["onUpdate:modelValue"], z);
        }
      });
      return function(Y) {
        return F.apply(this, arguments);
      };
    }(), $ = () => e.modelValue.filter((F) => F.state === "success"), E = () => e.modelValue.filter((F) => F.state === "error"), b = () => e.modelValue.filter((F) => F.state === "loading"), D = () => {
      n.value.click();
    }, O = () => {
      a.value = null, r.value = !1, On.close();
    }, N = {
      getSuccess: $,
      getError: E,
      getLoading: b
    }, M = (F) => {
      Me(() => {
        var {
          validateTrigger: B,
          rules: Y,
          modelValue: ae
        } = e;
        s(B, F, Y, ae, N);
      });
    }, C = !1, S = () => u(e.rules, e.modelValue, N), j = () => {
      C = !0, T(e["onUpdate:modelValue"], []), d();
    }, _ = {
      validate: S,
      resetValidation: d,
      reset: j
    };
    return T(l, _), ie(() => e.modelValue, () => {
      !C && M("onChange"), C = !1;
    }, {
      deep: !0
    }), {
      n: AC,
      classes: zC,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      isHTMLSupportVideo: ji,
      isHTMLSupportImage: Hi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: V,
      handleRemove: k,
      getSuccess: $,
      getError: E,
      getLoading: b,
      validate: S,
      resetValidation: d,
      reset: j,
      chooseFile: D,
      closePreview: O
    };
  }
});
vv.render = jC;
const ga = vv;
ga.install = function(e) {
  e.component(ga.name, ga);
};
var yk = ga;
const WC = "2.9.0";
function GC(e) {
  wa.install && e.use(wa), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), rr.install && e.use(rr), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), Ke.install && e.use(Ke), Or.install && e.use(Or), Vr.install && e.use(Vr), ar.install && e.use(ar), tr.install && e.use(tr), Mr.install && e.use(Mr), or.install && e.use(or), Br.install && e.use(Br), Ir.install && e.use(Ir), Er.install && e.use(Er), fn.install && e.use(fn), Dr.install && e.use(Dr), Nr.install && e.use(Nr), zr.install && e.use(zr), Ca.install && e.use(Ca), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Rn.install && e.use(Rn), We.install && e.use(We), Fa.install && e.use(Fa), Vn.install && e.use(Vn), $e.install && e.use($e), Fr.install && e.use(Fr), On.install && e.use(On), Yr.install && e.use(Yr), Hr.install && e.use(Hr), dr.install && e.use(dr), it.install && e.use(it), jr.install && e.use(jr), Wr.install && e.use(Wr), kn.install && e.use(kn), ti.install && e.use(ti), Mo.install && e.use(Mo), Hn.install && e.use(Hn), Gr.install && e.use(Gr), qr.install && e.use(qr), Xr.install && e.use(Xr), Kr.install && e.use(Kr), $a.install && e.use($a), pn.install && e.use(pn), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), Re.install && e.use(Re), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), si.install && e.use(si), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), Yn.install && e.use(Yn), vt.install && e.use(vt), Un.install && e.use(Un), Fn.install && e.use(Fn), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), di.install && e.use(di), ha.install && e.use(ha), sr.install && e.use(sr), ga.install && e.use(ga);
}
const bk = {
  version: WC,
  install: GC,
  ActionSheet: wa,
  AppBar: br,
  Avatar: wr,
  AvatarGroup: Cr,
  BackTop: Sr,
  Badge: rr,
  BottomNavigation: kr,
  BottomNavigationItem: $r,
  Breadcrumb: Tr,
  Breadcrumbs: Pr,
  Button: Ke,
  ButtonGroup: Or,
  Card: Vr,
  Cell: ar,
  Checkbox: tr,
  CheckboxGroup: Mr,
  Chip: or,
  Col: Br,
  Collapse: Ir,
  CollapseItem: Er,
  Context: fn,
  Countdown: Dr,
  Counter: Nr,
  DatePicker: zr,
  Dialog: Ca,
  Divider: Lr,
  Ellipsis: Rr,
  Fab: Ur,
  Form: Rn,
  FormDetails: We,
  Hover: Fa,
  HoverOverlay: Vn,
  Icon: $e,
  Image: Fr,
  ImagePreview: On,
  IndexAnchor: Yr,
  IndexBar: Hr,
  Input: dr,
  Lazy: it,
  Link: jr,
  List: Wr,
  Loading: kn,
  LoadingBar: ti,
  Locale: Mo,
  Menu: Hn,
  Option: Gr,
  Overlay: qr,
  Pagination: Xr,
  Paper: Kr,
  Picker: $a,
  Popup: pn,
  Progress: Zr,
  PullRefresh: Jr,
  Radio: Qr,
  RadioGroup: _r,
  Rate: xr,
  Result: ea,
  Ripple: Re,
  Row: na,
  Select: ra,
  Skeleton: aa,
  Slider: ta,
  Snackbar: si,
  Space: ia,
  Step: la,
  Steps: sa,
  Sticky: Yn,
  StyleProvider: vt,
  Swipe: Un,
  SwipeItem: Fn,
  Switch: da,
  Tab: va,
  TabItem: fa,
  Table: ca,
  Tabs: ma,
  TabsItems: pa,
  Themes: di,
  TimePicker: ha,
  Tooltip: sr,
  Uploader: ga
};
export {
  wa as ActionSheet,
  br as AppBar,
  wr as Avatar,
  Cr as AvatarGroup,
  Sr as BackTop,
  rr as Badge,
  kr as BottomNavigation,
  $r as BottomNavigationItem,
  Tr as Breadcrumb,
  Pr as Breadcrumbs,
  Ke as Button,
  Or as ButtonGroup,
  Vr as Card,
  ar as Cell,
  tr as Checkbox,
  Mr as CheckboxGroup,
  or as Chip,
  Br as Col,
  Ir as Collapse,
  Er as CollapseItem,
  fn as Context,
  Dr as Countdown,
  Nr as Counter,
  zr as DatePicker,
  Ca as Dialog,
  Lr as Divider,
  Rr as Ellipsis,
  Ur as Fab,
  Rn as Form,
  We as FormDetails,
  Fa as Hover,
  Vn as HoverOverlay,
  $e as Icon,
  Fr as Image,
  On as ImagePreview,
  Yr as IndexAnchor,
  Hr as IndexBar,
  dr as Input,
  it as Lazy,
  jr as Link,
  Wr as List,
  kn as Loading,
  ti as LoadingBar,
  Mo as Locale,
  Hn as Menu,
  Gr as Option,
  qr as Overlay,
  Eo as PIXEL,
  Xr as Pagination,
  Kr as Paper,
  $a as Picker,
  pn as Popup,
  Zr as Progress,
  Jr as PullRefresh,
  Qr as Radio,
  _r as RadioGroup,
  xr as Rate,
  ea as Result,
  Re as Ripple,
  na as Row,
  Ai as SNACKBAR_TYPE,
  ra as Select,
  aa as Skeleton,
  ta as Slider,
  si as Snackbar,
  ia as Space,
  la as Step,
  sa as Steps,
  Yn as Sticky,
  vt as StyleProvider,
  Un as Swipe,
  Fn as SwipeItem,
  da as Switch,
  va as Tab,
  fa as TabItem,
  ca as Table,
  ma as Tabs,
  pa as TabsItems,
  di as Themes,
  ha as TimePicker,
  sr as Tooltip,
  ga as Uploader,
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
  YS as _ListComponent,
  HS as _LoadingBarComponent,
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
  Yc as breadcrumbsProps,
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
  Yy as indexAnchorProps,
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
  He as pack,
  Ss as packs,
  Lb as paginationProps,
  Hb as paperProps,
  qb as pickerProps,
  mt as popupProps,
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
  Hd as snackbarProps,
  J1 as spaceProps,
  x1 as stepProps,
  lw as stepsProps,
  Et as stickyProps,
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
  Lt as useHoverOverlay,
  gi as useLocale,
  WC as version,
  hi as zhCN
};
